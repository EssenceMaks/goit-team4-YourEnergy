const paginations = document.querySelectorAll('.pagination-test');

export const generatePages = (totalPages, currentPage) =>{
  let pagesFragment = new DocumentFragment();
  for(let i = 0; i < totalPages; i++) {
    let p = document.createElement('p');
    p.setAttribute('data-index', i);
    p.innerHTML = i + 1;
    p.classList.add('pagination-page');
    if (i===currentPage){p.classList.add('selected');}
    pagesFragment.appendChild(p);
  }
  return pagesFragment;
}

paginations.forEach(pagination => {

  if (pagination.hasAttribute('data-total')){
    pagination.innerHTML='';
    const totalPages = parseInt(pagination.getAttribute('data-total'));
    const currentPage = parseInt(pagination.getAttribute('data-current'));

    createPagination(pagination, currentPage,totalPages, currentPage);


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


function createPagination(paginationContainer, currentPage, totalPages, maxVisiblePages = 5) {

  paginationContainer.innerHTML = ""; // Clear previous pagination

  // Function to create a page button
  function createPageButton(page, isActive = false) {
    const button = document.createElement("button");
    button.innerText = page;
    button.className = isActive ? "active" : "";
    button.addEventListener("click", () => updatePagination(paginationContainer, page));
    return button;
  }

  // Add the first page and last page if needed, with dots in between
  const pages = [];
  const halfVisible = Math.floor(maxVisiblePages / 2);

  // Determine start and end for visible range
  const startPage = Math.max(2, currentPage - halfVisible);
  const endPage = Math.min(totalPages - 1, currentPage + halfVisible);

  // Add first page
  pages.push(createPageButton(1, currentPage === 1));

  // Add dots if needed before the visible range
  if (startPage > 2) {
    const dots = document.createElement("span");
    dots.innerText = "...";
    dots.className = "dots";
    pages.push(dots);
  }

  // Add visible page buttons
  for (let i = startPage; i <= endPage; i++) {
    pages.push(createPageButton(i, i === currentPage));
  }

  // Add dots if needed after the visible range
  if (endPage < totalPages - 1) {
    const dots = document.createElement("span");
    dots.innerText = "...";
    dots.className = "dots";
    pages.push(dots);
  }

  // Add the last page
  if (totalPages > 1) {
    pages.push(createPageButton(totalPages, currentPage === totalPages));
  }

  // Append all page elements to the container
  pages.forEach(pageElement => paginationContainer.appendChild(pageElement));
}

// Function to update pagination and re-render
function updatePagination(paginationContainer, selectedPage) {
  createPagination(paginationContainer, selectedPage, 20); // Assume 20 total pages for example
  console.log("Selected page:", selectedPage);
}

// Initial pagination setup
//createPagination(1, 20); // Start with page 1 and a total of 20 pages