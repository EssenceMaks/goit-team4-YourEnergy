const BASE_URL = window.location.hostname === 'localhost' 
  ? '' 
  : '/goit-team4-YourEnergy';

export const getIconPath = (iconName) => {
  return `${BASE_URL}/img/icons.svg#icon-${iconName}`;
};
