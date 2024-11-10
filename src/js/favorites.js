import axios from 'axios';
import { exerciseInfoRequest, exerciseUrl } from './api-service';
import createWorkoutsMarkup from './markup/workoutsMarkup';
import { generatePages } from './pagination';
import { ModalWindow } from './modal-window';

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
const categoriesPagination = document.querySelector('.favorites-pagination');

let getFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
let dataList = [];
let currentPage = 0;

const fetchAndRenderFavorites = async () => {
  if (!getFavorites || getFavorites.length === 0) {
    favoritesText.style.display = 'block';
    favoritesCards.innerHTML = '';
    return;
  }

  try {
    dataList = [];
    for (const exercise of getFavorites) {
      const { data } = await axios.get(exerciseInfoRequest(exercise.id));
      dataList.push(data);
    }

    let workoutMarkup;
    let itemsPerPage;

    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
      itemsPerPage = 8;
    } else if (screenWidth <= 1440) {
      itemsPerPage = 10;
    } else {
      itemsPerPage = dataList.length;
    }

    const totalPages = Math.ceil(dataList.length / itemsPerPage);
    categoriesPagination.setAttribute('data-total', totalPages);

    if (totalPages <= 1) {
      categoriesPagination.style.display = 'none';
    } else {
      categoriesPagination.style.display = 'flex';
    }

    if (screenWidth > 1440) {
      workoutMarkup = createWorkoutsMarkup(dataList);
      favoritesText.style.display = 'none';
      favoritesCards.innerHTML = workoutMarkup;
      changeTrash();
      categoriesPagination.innerHTML = '';
    } else {
      workoutMarkup = createWorkoutsMarkup(
        dataList.slice(
          currentPage * itemsPerPage,
          (currentPage + 1) * itemsPerPage
        )
      );
      favoritesText.style.display = 'none';
      favoritesCards.innerHTML = workoutMarkup;

      if (categoriesPagination) {
        categoriesPagination.innerHTML = '';
        const paginationElement = generatePages(totalPages, currentPage);
        categoriesPagination.appendChild(paginationElement);

        categoriesPagination
          .querySelectorAll('.pagination-page')
          .forEach(btn => {
            btn.addEventListener('click', handlePagination);
          });
      }
    }

    const startButtons = document.querySelectorAll('.workout-start-btn');
    startButtons.forEach(button => {
      button.addEventListener('click', async e => {
        e.preventDefault();
        const workoutCard = button.closest('.workouts-card');
        const exerciseId = workoutCard.dataset.id;

        try {
          const response = await fetch(`${exerciseUrl()}/${exerciseId}`);
          if (!response.ok) throw new Error('Failed to fetch exercise details');

          const exerciseData = await response.json();

          if (!window.modalWindow) {
            window.modalWindow = new ModalWindow();
          }
          window.modalWindow.open(exerciseData);

          // --------------якщо відкрили модалку, видалили картку, оновити це в розмітці---------

          // const closeBTtn = document.querySelector('.modal-close-btn');
          // closeBTtn.addEventListener('click', () => {
          //   const newFavorites =
          //     JSON.parse(localStorage.getItem('favorites')) || [];
          //   if (JSON.stringify(getFavorites) !== JSON.stringify(newFavorites)) {
          //     getFavorites = newFavorites;
          //     fetchAndRenderFavorites();
          //   }
          // })
        } catch (error) {
          console.error('Error opening modal:', error);
        }
      });
    });
  } catch (error) {
    console.error(error);
  }
};

function deleteFromFavorites(e) {
  const workoutCard = e.target.closest('.workouts-card');
  const workoutId = workoutCard.getAttribute('data-id');

  getFavorites = getFavorites.filter(fav => fav.id !== workoutId);
  localStorage.setItem('favorites', JSON.stringify(getFavorites));

  if (!getFavorites || getFavorites.length === 0) {
    favoritesText.style.display = 'block';
    favoritesCards.innerHTML = '';
  } else {
    const totalPages = Math.ceil(getFavorites.length / 8);
    if (currentPage >= totalPages) {
      currentPage = totalPages - 1;
    }

    fetchAndRenderFavorites();
  }
}

function handlePagination(e) {
  const page = Number(e.target.dataset.index);
  currentPage = page;
  categoriesPagination.setAttribute('data-current', currentPage);
  let pages = categoriesPagination.querySelectorAll('p');
  pages.forEach(pag => {
    pag.classList.remove('selected');
  });
  e.target.classList.add('selected');

  const screenWidth = window.innerWidth;
  let itemsPerPage;

  if (screenWidth <= 768) {
    itemsPerPage = 8;
  } else if (screenWidth <= 1440) {
    itemsPerPage = 10;
  } else {
    return;
  }

  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const pageItems = dataList.slice(startIndex, endIndex);

  favoritesCards.innerHTML = createWorkoutsMarkup(pageItems);
  changeTrash();
}

function changeTrash() {
  const ratingContainers = document.querySelectorAll('.rating-container');
  ratingContainers.forEach(rating => rating.classList.add('hide'));

  const trashContainers = document.querySelectorAll('.trash-container');
  trashContainers.forEach(trash => {
    trash.classList.remove('hide');
    trash.addEventListener('click', deleteFromFavorites);
  });
}

fetchAndRenderFavorites();
