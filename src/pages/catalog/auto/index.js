import html from './index.html?raw';
import css from './index.scss?inline';

import { ROUTE_CHANGED_EVENT } from '/config/constants';

const data = import.meta.glob('/assets/data/*.json', { eager: true });
const products = Object.values(data).flatMap((m) => m.default);

// Function to get container based on capacity
const getContainerForCapacity = (capacity) => {
  // Remove 'Ah' and get numeric value
  const numericCapacity = capacity;

  // Map capacity ranges to container classes
  if (numericCapacity >= 50 && numericCapacity < 70) {
    return document.querySelector('.s60');
  } else if (numericCapacity >= 70 && numericCapacity < 80) {
    return document.querySelector('.s70');
  } else if (numericCapacity >= 80 && numericCapacity < 90) {
    return document.querySelector('.s80');
  } else if (numericCapacity >= 90 && numericCapacity < 100) {
    return document.querySelector('.s90');
  } else if (numericCapacity >= 100 && numericCapacity < 120) {
    return document.querySelector('.s100');
  } else if (numericCapacity >= 120) {
    return document.querySelector('.s120');
  }

  return null;
};

const createProductCard = (p) => {
  // TODO: use env variable
  p.image_url = `/assets/public/${p.image_url}`;

  return `
<div class="carBat" data-id="${p.id}">
  <div class="carBat__image">
    <img src="${p.image_url}" alt="${p.name}">
  </div>

  <div class="carBat__info">
    <h3 class="carBat__name">${p.name}</h3>
    <p class="carBat__type">${p.type}</p>

    <div class="carBat__specs">
      <span>${p.capacity} Ah</span>
      <span>${p.current} A(EN)</span>
      <span>${p.polarities.join('/')}</span>
    </div>

    <div class="carBat__price">
      ${p.price_old ? `<del class="carBat__price--old">${p.price_old}<span>₴</span></del>` : ''}
      <span class="carBat__price--current">${p.price}<span>₴</span></span>
    </div>

    <div class="carBat__meta">
      <span class="carBat__warranty"><strong>Гарантія:</strong> ${p.warranty} міс.</span>
      <a href="${p.origin_website}" class="carBat__origin" target="_blank">${p.origin}</a>
    </div>

    <button class="carBat__orderBtn">🛒</button>
  </div>
</div>
  `;
};

/**
 * Main function to distribute product cards into their respective galleries.
 */
const renderProducts = (products) => {
  // Clear existing content first
  document
    .querySelectorAll('.s60, .s70, .s80, .s90, .s100, .s110')
    .forEach((container) => {
      if (container) container.innerHTML = '';
    });

  products.forEach((p) => {
    const cardHtml = createProductCard(p);
    const container = getContainerForCapacity(p.capacity);
    if (container) {
      container.innerHTML += cardHtml;
    } else {
      console.warn(`No container found for capacity: ${p.capacity}`);
    }
  });
};

// Event listener for route changes
const handleRouteChange = (ev) => {
  // Wait for DOM to be ready
  setTimeout(() => {
    renderProducts(products);
  }, 0);
};

// Use addEventListener instead of window.on
window.addEventListener(ROUTE_CHANGED_EVENT, handleRouteChange);

export { html, css };
