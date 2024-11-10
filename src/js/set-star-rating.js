import { starMarkup } from './markup/starMarkup.js';

export const setStartRating = (element, rating) => {
  element.innerHTML = '';
  const totalStars = 5;
  const ratingNum = parseFloat(rating) || 0;

  for (let i = 0; i < totalStars; i++) {
    if (i < Math.floor(ratingNum)) {
      // Повністю заповнена зірка
      element.innerHTML += starMarkup(100);
    } else if (i === Math.floor(ratingNum)) {
      // Частково заповнена зірка
      const decimal = ratingNum % 1;
      element.innerHTML += starMarkup(decimal * 100);
    } else {
      // Незаповнена зірка
      element.innerHTML += starMarkup(0);
    }
  }
};
