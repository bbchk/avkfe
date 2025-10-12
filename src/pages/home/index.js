import html from './index.html?raw';
import css from './index.scss?inline';

import getCategoryCardHTML from './components/categoryCard.js'

import { ROUTE_CHANGED_EVENT } from '/config/constants';

import { fetchProducts } from '/services/api.service';

async function preFetch() {
  return await fetchProducts();
}

window.on(ROUTE_CHANGED_EVENT, (ev) => {
  const prefetchedData = ev.detail.prefetchedData;

  const categoriesGallery = $('#homeCategoriesContent--first');
  if (categoriesGallery) {
    let content = '';
    for (const card of prefetchedData) {
      content += getCategoryCardHTML(card);
    }
    categoriesGallery.innerHTML = content;
  }
});

export { html, css, preFetch };
