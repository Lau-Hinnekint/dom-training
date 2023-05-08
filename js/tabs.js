
const tabsLi = document.querySelectorAll('#tabs-links li a');
const tabsArticles = document.querySelectorAll('#tabs-contents article');

tabsLi.forEach(a => {
  a.addEventListener('click', function () {
    const activeTabLink = document.querySelector('#tabs-links li a.active');
    activeTabLink.classList.remove('active');
    this.classList.add('active');

    const tabId = this.dataset.tab;
    console.log(tabId);

    tabsArticles.forEach(article => {
      article.classList.remove('active');

      if (article.id === tabId) {
        article.classList.add('active');
      }
    });
  });
});


