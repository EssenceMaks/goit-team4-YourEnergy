export const ICON_PATHS = {
  heart: '/img/icons.svg#icon-heart',
  trash: '/img/icons.svg#icon-trash',
  close: '/img/icons.svg#icon-x_icon',
};

// Функція для отримання повного шляху до іконки
export function getIconPath(iconName) {
  const basePath =
    window.location.hostname === 'localhost' ? '' : '/goit-team4-YourEnergy';
  return `${basePath}${ICON_PATHS[iconName]}`;
}
