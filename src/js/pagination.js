export const generatePages = (totalPages, currentPage) => {
  const pagesFragment = new DocumentFragment();
  const maxVisiblePages = 7; // The maximum number of page items to show at once

  for (let i = 0; i < totalPages; i++) {
    let p = document.createElement('li');
    p.setAttribute('data-index', i);
    p.classList.add('pagination-page');

    if (
      i === 0 || // First page
      i === totalPages - 1 || // Last page
      i === currentPage || // Current page
      (i >= currentPage - 1 && i <= currentPage + 1) // Pages around the current page
    ) {
      p.innerHTML = i + 1;
      if (i === currentPage) {
        p.classList.add('selected');
      }
      pagesFragment.appendChild(p);
    } else if (
      (i === 1 && currentPage > 3) || // Ellipsis after the first page if there’s a gap
      (i === totalPages - 2 && currentPage < totalPages - 4) || // Ellipsis before the last page if there’s a gap
      (i === currentPage - 2 && currentPage > 3) || // Ellipsis before the current page if needed
      (i === currentPage + 2 && currentPage < totalPages - 4) // Ellipsis after the current page if needed
    ) {
      const ellipsis = document.createElement('li');
      ellipsis.innerHTML = '...';
      ellipsis.classList.add('pagination-ellipsis');
      pagesFragment.appendChild(ellipsis);
    }
  }
  return pagesFragment;
};


export const initPagination = () => {
  const paginations = document.querySelectorAll('.pagination');

  paginations.forEach(pagination => {
    if (pagination.hasAttribute('data-total')) {
      pagination.innerHTML = '';
      const totalPages = parseInt(pagination.getAttribute('data-total'));
      const currentPage = parseInt(pagination.getAttribute('data-current'));

      pagination.appendChild(generatePages(totalPages, currentPage));

      pagination.addEventListener('click', async (e) => {
        if (e.target.classList.contains('pagination-page')) {
          e.preventDefault();

          const pages = pagination.querySelectorAll('.pagination-page');
          pages.forEach(page => {
            page.classList.remove('selected');
          });
          e.target.classList.add('selected');
          pagination.setAttribute('data-current', e.target.getAttribute('data-index'));
        }
      });

      const observer = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'data-total') {
            const newValue = parseInt(pagination.getAttribute('data-total'));
            const currentPage = parseInt(pagination.getAttribute('data-current'));
            pagination.innerHTML = '';
            pagination.appendChild(generatePages(newValue, currentPage));
          }
        }
      });

      observer.observe(pagination, { attributes: true });
    }
  });
};

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', initPagination);


