
import renderWorkoutsByCategory from './workouts';
import { getCategories } from './api-requests';
import createCategoriesMarkup from './markup/categoriesMarkup';
import {loadCategories} from './categories';
import {currentCategoryName} from './categories';
import {currentCategoryFilter} from './categories';


let allCategories = [];
const selectedCategoryElement = document.querySelector('.filters-title');
const categoriesList = document.querySelector('.categories-list');
const filterButtons = document.querySelectorAll('.filter-button');
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
let activeFilter = 'Muscles';


filterButtons.forEach(button => {
    button.addEventListener('click', async (e) => {
        let filterType = e.target.getAttribute('data-filter').replace('-', ' ');
        activeFilter = filterType;

      await loadCategories(filterType);
        filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
      updateHeaderTitle(); 
      showSearchForm(false);
      const workoutsSection = document.querySelector('.m-workouts');
      workoutsSection.style.display = 'none';
      const categoriesContainer = document.querySelector('.m-categories');
      categoriesContainer.style.display = 'flex';
    });
});

searchForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const searchKeyword = encodeURIComponent(searchInput.value.trim());
  
  switch (currentCategoryFilter) {
    case 'Muscles':
      renderWorkoutsByCategory('', currentCategoryName, '', searchKeyword, 1, 10);
      break;
    case 'Body parts':
      renderWorkoutsByCategory(currentCategoryName, '', '', searchKeyword, 1, 10);
      break;
    case 'Equipment':
      renderWorkoutsByCategory('', '', currentCategoryName, searchKeyword, 1, 10);
      break;
  }

  searchInput.value = '';
});

export function showSearchForm(isShow) {
  searchForm.style.display = isShow ? 'block' : 'none';
}


function openCategory(e) {
  const categoryName = e.currentTarget.dataset.name;
  updateHeaderTitle(categoryName);
  categoriesList.style.display = 'none';
  showSearchForm(true);
  loadExercises(categoryName);
}

export function updateHeaderTitle(categoryName = false) {
  selectedCategoryElement.innerHTML = categoryName ? 'Exercises / ' + '<span class="selected-category">' + categoryName + '</span>' : 'Exercises';
}

function attachCategoryListeners() {
  const categoriesItems = document.querySelectorAll('.categories-item');
  categoriesItems.forEach(item => {
    item.addEventListener('click', openCategory);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  attachCategoryListeners(); 
  showSearchForm(false); 
});



