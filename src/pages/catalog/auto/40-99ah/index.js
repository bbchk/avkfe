import html from './index.html?raw';
import css from './index.scss?inline';

import createCarBatteryCard from '/components/carBatteryCard.js';

import { ROUTE_CHANGED_EVENT } from '/config/constants';

const data = import.meta.glob('/assets/data/ah{60,70,80,90}.json', {
  eager: true,
});

import ah60 from '/assets/data/ah60.json';
import ah70 from '/assets/data/ah70.json';
import ah80 from '/assets/data/ah80.json';
import ah90 from '/assets/data/ah90.json';

const products = Object.values(data).map((v) => v.default);

    // return $('.s60');
    // return $('.s70');
    // return $('.s80');
    // return $('.s90');

// we just need to insert already full gallery
const renderProducts = (products) => {
  $$('.s60, .s70, .s80, .s90').forEach((container) => {
    if (container) container.innerHTML = '';
  });

  products.forEach((p) => {
    const cardHtml = createCarBatteryCard(p);
    const container = getContainerForCapacity(p.capacity);

    if (container) {
      container.innerHTML += cardHtml;
    } else {
      console.warn(`No container found for capacity: ${p.capacity}`);
    }
  });
};

// TODO?: why to have empty timeout?
const handleRouteChange = (ev) => {
  setTimeout(() => {
    renderProducts(products);
  }, 0);
};

window.addEventListener(ROUTE_CHANGED_EVENT, handleRouteChange);

export { html, css };
