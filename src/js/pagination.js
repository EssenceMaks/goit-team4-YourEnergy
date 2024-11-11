export const generatePages = (totalPages, currentPage) => {
  let pagesFragment = new DocumentFragment();
  const maxVisiblePages = 5; 
  const halfVisible = Math.floor(maxVisiblePages / 2);

  let startPage = Math.max(0, currentPage - halfVisible);
  let endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 1);

  
  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(0, endPage - maxVisiblePages + 1);
  }

  
  let firstPage = document.createElement('li');
  firstPage.setAttribute('data-index', 0);
  firstPage.innerHTML = 1;
  firstPage.classList.add('pagination-page');
  if (currentPage === 0) firstPage.classList.add('selected');
  pagesFragment.appendChild(firstPage);

  
  if (startPage > 1) {
    let dots = document.createElement('li');
    dots.innerHTML = '...';
    dots.classList.add('pagination-dots');
    pagesFragment.appendChild(dots);
  }

  
  for (let i = startPage; i <= endPage; i++) {
    if (i === 0 || i === totalPages - 1) continue; 
    let p = document.createElement('li');
    p.setAttribute('data-index', i);
    p.innerHTML = i + 1;
    p.classList.add('pagination-page');
    if (i === currentPage) {
      p.classList.add('selected');
    }
    pagesFragment.appendChild(p);
  }

  
  if (endPage < totalPages - 2) {
    let dots = document.createElement('li');
    dots.innerHTML = '...';
    dots.classList.add('pagination-dots');
    pagesFragment.appendChild(dots);
  }

  
  if (totalPages > 1) {
    let lastPage = document.createElement('li');
    lastPage.setAttribute('data-index', totalPages - 1);
    lastPage.innerHTML = totalPages;
    lastPage.classList.add('pagination-page');
    if (currentPage === totalPages - 1) lastPage.classList.add('selected');
    pagesFragment.appendChild(lastPage);
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


document.addEventListener('DOMContentLoaded', initPagination);


