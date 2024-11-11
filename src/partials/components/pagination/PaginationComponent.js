const paginations = document.querySelectorAll('.pagination-test');

const createPagination = (paginationContainer, currentPage, totalPages, maxVisiblePages = 5) => {

  paginationContainer.innerHTML = "";
  paginationContainer.style.gap = "4px";

  function createPageButton(page, isActive = false) {
    const button = document.createElement("button");
    button.innerText = page;
    button.className = isActive ? "active" : "";
    button.addEventListener("click", () => updatePagination(paginationContainer, page));
    return button;
  }

  const pages = [];
  const halfVisible = Math.floor(maxVisiblePages / 2);

  const startPage = Math.max(2, currentPage - halfVisible);
  const endPage = Math.min(totalPages - 1, currentPage + halfVisible);

  pages.push(createPageButton(1, currentPage === 1));

  if (startPage > 2) {
    const dots = document.createElement("span");
    dots.innerText = "...";
    dots.className = "dots";
    pages.push(dots);
  }


  for (let i = startPage; i <= endPage; i++) {
    pages.push(createPageButton(i, i === currentPage));
  }


  if (endPage < totalPages - 1) {
    const dots = document.createElement("span");
    dots.innerText = "...";
    dots.className = "dots";
    pages.push(dots);
  }


  if (totalPages > 1) {
    pages.push(createPageButton(totalPages, currentPage === totalPages));
  }


  pages.forEach(pageElement => paginationContainer.appendChild(pageElement));
}

const updatePagination = (paginationContainer, selectedPage) => {
  paginationContainer.setAttribute('data-current', selectedPage);
  createPagination(paginationContainer, selectedPage, parseInt(paginationContainer.getAttribute('data-total')));
  console.log("Selected page:", selectedPage);
}

paginations.forEach(pagination => {

  if (pagination.hasAttribute('data-total')){
    pagination.innerHTML='';
    const totalPages = parseInt(pagination.getAttribute('data-total'));
    const currentPage = parseInt(pagination.getAttribute('data-current'));

    updatePagination(pagination,currentPage,totalPages);

    const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'total-pages') {
          const newValue = pagination.getAttribute('total-pages');
          createPagination(pagination, parseInt(pagination.getAttribute('current-page')),newValue);

        }
      }
    });

    observer.observe(pagination, { attributes: true });

  }
})

