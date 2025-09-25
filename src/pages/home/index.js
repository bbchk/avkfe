import html from './index.html?raw';
import css from './index.scss?inline';

import { ROUTE_CHANGED_EVENT } from '/config/constants';

import { fetchProducts } from '/services/api.service';

async function preFetch(){
  return await fetchProducts();
}

window.on(ROUTE_CHANGED_EVENT, (ev) => {
  const categories = $('#homeCategoriesContent--first');
  if (categories) {
    let categoriesContent = '';

    // TODO: sort by real label `favorite choice` from db in the future
    let idx = 0;

    for (const { name, image_url, price_orig, price_discount } of ev.detail
      .prefetchedData) {
      // TODO: sort by real label `favorite choice` from db in the future
      if (idx > 7) {
        break;
      }

      // <img class='categories__cardImage' src="/goods_placeholder.svg" alt="${name}"/>
      categoriesContent += `
    <div class='categories__card'>
      <img class='categories__cardImage' src="${image_url}" alt="${name}"/>
      <h3 class="categories__cardName">${name}</h3>
      <div class="categories__cardPrices">
        <del>${price_orig}<span>₴</span></del>
        <ins>${price_discount}<span>₴<span></ins>
      </div>
      <p class="rating--categoriesCard">
       <span class="rating__stars"> ⭐⭐⭐⭐⭐</span>
       <span class="rating__reviewCount">0</span>
       <span class="rating__reviewIcon">💬</span>
      </p>
      <div class="categories__cardBuyBtn emoji--mono">
        <button>
          🛒
        </button>
      </div>
    </div>
        `;

      // TODO: sort by real label `favorite choice` from db in the future
      ++idx;
    }
    categories.innerHTML = categoriesContent;
  }
});

export { html, css, preFetch };
