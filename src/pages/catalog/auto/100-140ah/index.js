import html from './index.html?raw';
import css from './index.scss?inline';

import createCarBatteryCard from '/components/carBatteryCard.js';

import { ROUTE_CHANGED_EVENT } from '/config/constants';

const data = import.meta.glob('/assets/data/ah{100,140}.json', {
  eager: true,
});
const carBats = Object.values(data).map((v) => v.default);

const handleRouteChange = () => {
  const pageContainer = document.querySelector(".catalog--auto-100ah");

  if (!pageContainer) {
    console.error("Catalog container with class '.catalog--auto' not found.");
    return;
  }

  const ahGroups = [100, 140];

  const catalogHtml = carBats.map((batteryGroup, index) => {
    const sectionClass = `s${ahGroups[index]}`;
    const capacity = ahGroups[index];
    const cardsHtml = batteryGroup.map(battery => createCarBatteryCard(battery)).join('');
    return `
      <h3 class="catalog__capacityHeader" id="${capacity}Ah">${capacity} Ah<span></h3>
      <section class="${sectionClass}">${cardsHtml}</section>
    `;
  }).join('<hr />');

  pageContainer.innerHTML = catalogHtml;
};

window.addEventListener(ROUTE_CHANGED_EVENT, handleRouteChange);

export { html, css };

