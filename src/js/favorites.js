import axios  from 'axios';
import { exerciseInfoRequest } from './api-service';
import createWorkoutsMarkup from './markup/workoutsMarkup'

const currentPath = window.location.pathname;

let imageFavorites = document.querySelector('.fav-picture');
if (imageFavorites) {
  imageFavorites.outerHTML = `
    <picture>
      <source
        media="(min-width: 1440px)"
        srcset="
          ./img/sidebar/favorites/favorites-des-1x.jpg 1x,
          ./img/sidebar/favorites/favorites-des-2x.jpg 2x
        "
      />
      <source
        media="(min-width: 768px)"
        srcset="
          ./img/sidebar/favorites/favorites-tab-1x.jpg 1x,
          ./img/sidebar/favorites/favorites-tab-2x.jpg 2x
        "
      />
      <img
        class="sidebar-quote-image"
        srcset="
          ./img/sidebar/favorites/favorites-mob-1x.jpg 1x,
          ./img/sidebar/favorites/favorites-mob-2x.jpg 2x
        "
        src="./img/sidebar/favorites/favorites-mob-1x.jpg"
        alt="sidebar-container"
        loading="lazy"
      />
    </picture>
  `;
}

const menuItems = document.querySelectorAll('.menu-item');

if (currentPath.includes('favorites.html')) {
  menuItems.forEach(item => item.classList.remove('active'));
  menuItems[1].classList.add('active');
}

const favoritesText = document.querySelector('.favorites-page-text');
const favoritesCards = document.querySelector('.favorites-cards');
const favoritePageWrap = document.querySelector('.favorites-page-wrap');

const getFavorites = JSON.parse(localStorage.getItem('favorites'));


const fetchAndRenderFavorites = async () => {
  if (!getFavorites || getFavorites.length === 0) {
    favoritePageWrap.innerHTML = favoritesText;
    return;
  }

  try {
    const dataList = [];
    console.log(dataList)
    for (const exercise of getFavorites) {
      const { data } = await axios.get(exerciseInfoRequest(exercise.id));
      dataList.push(data);
    }
    const workoutMarkup = createWorkoutsMarkup(dataList);
    favoritesText.style.display = 'none';
    favoritesCards.innerHTML = workoutMarkup;
    const ratingContainer = document.querySelectorAll('.rating-container');
    ratingContainer.forEach((rating) => {
      rating.classList.add('hide');
    })
    const trashContainer = document.querySelectorAll('.trash-container');
    trashContainer.forEach((trash) => {
      trash.classList.remove('hide');
    })
    

console.log(rating)

  } catch (error) {
    console.error;
  }
};

fetchAndRenderFavorites();