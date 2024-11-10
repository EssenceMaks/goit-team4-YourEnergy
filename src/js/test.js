
function onUrlChange(callback) {
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;

  const favoritesPage = document.querySelector('.favorites-page');
  const homePage = document.querySelector('.home-page');
  console.log(window.location.pathname)
  switch (window.location.pathname) {
    case '/':
      favoritesPage.classList.add('hidden');
      homePage.classList.remove('hidden');
      break;
      case '/favorites':
        favoritesPage.classList.remove('hidden');
        homePage.classList.add('hidden');
      break;

  }

  const handleUrlChange = () => {
    callback(window.location.href);
  };

  history.pushState = function (...args) {
    originalPushState.apply(history, args);
    handleUrlChange();
  };

  history.replaceState = function (...args) {
    originalReplaceState.apply(history, args);
    handleUrlChange();
  };

  window.addEventListener('popstate', handleUrlChange);
}

onUrlChange((newUrl) => {
  console.log("URL changed to:", newUrl);
});