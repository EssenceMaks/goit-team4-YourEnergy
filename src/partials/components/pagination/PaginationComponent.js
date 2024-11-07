const paginations = document.querySelectorAll('.pagination');

const generatePages = (totalPages, currentPage) =>{
  let pagesFragment = new DocumentFragment();
  for(let i = 0; i < totalPages; i++) {
    let p = document.createElement('p');
    p.setAttribute('index', i);
    p.innerHTML = i + 1;
    p.classList.add('pagination-page');
    if (i===currentPage){p.classList.add('selected');}
    pagesFragment.appendChild(p);
  }
  return pagesFragment;
}

paginations.forEach(pagination => {

  if (pagination.hasAttribute('total-pages')){
    pagination.innerHTML='';
    const totalPages = parseInt(pagination.getAttribute('total-pages'));
    const currentPage = parseInt(pagination.getAttribute('current-page'));

    pagination.appendChild(generatePages(totalPages, currentPage));
    pagination.addEventListener('click', async (e) => {

      if (e.target.classList.contains('pagination-page')){
        const pages = pagination.querySelectorAll('.pagination-page');
        pages.forEach(page => {
            page.classList.remove('selected');
        })
        e.target.classList.add('selected');
        e.target.parentElement.setAttribute('current-page', e.target.getAttribute('index'));
      }

    })

    const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'total-pages') {
          const newValue = pagination.getAttribute('total-pages');
          pagination.innerHTML ='';
          pagination.appendChild(generatePages(newValue, parseInt(pagination.getAttribute('current-page'))));

        }
      }
    });

    observer.observe(pagination, { attributes: true });

  }
})