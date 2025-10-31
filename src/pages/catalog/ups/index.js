import html from './index.html?raw';
import css from './index.scss?inline';

import createUpsBatteryCard from '/components/upsBatteryCard.js';

import { ROUTE_CHANGED_EVENT } from '/config/constants';

// it is not fast enough to render the returned html how we try to handleRouteChange?

const data = import.meta.glob('/assets/data/ups.json', {
  eager: true,
});

const handleRouteChange = () => {
  const pageContainer = document.querySelector('.catalog--ups');

  if (!pageContainer) {
    console.error("Catalog container with class '.catalog--ups' not found.");
    return;
  }

  const cardsHtml = Object.values(data)[0].default
    .map((battery) => createUpsBatteryCard(battery))
    .join('');

  pageContainer.innerHTML = cardsHtml;
};

window.addEventListener(ROUTE_CHANGED_EVENT, handleRouteChange);

export { html, css };
