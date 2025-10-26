import html from './index.html?raw';
import css from './index.scss?inline';

import createCarBatteryCard from '/components/carBatteryCard.js';

import { ROUTE_CHANGED_EVENT } from '/config/constants';

const data = import.meta.glob('/assets/data/ups.json', {
  eager: true,
});

const handleRouteChange = () => {
  const pageContainer = document.querySelector('.catalog--ups');

  if (!pageContainer) {
    console.error("Catalog container with class '.catalog--ups' not found.");
    return;
  }

  const cardsHtml = data.default
    .map((battery) => createCarBatteryCard(battery))
    .join('');
  return `
      <section class="ups">${cardsHtml}</section>
    `;

  pageContainer.innerHTML = catalogHtml;
};

window.addEventListener(ROUTE_CHANGED_EVENT, handleRouteChange);

export { html, css };
