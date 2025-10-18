import html from './index.html?raw';
import css from './index.scss?inline';

import { ROUTE_CHANGED_EVENT } from '/config/constants';

// TODO:
const data = import.meta.glob('/assets/data/*.json', { eager: true });
// const data = import.meta.glob('/assets/data/ah60.json', { eager: true });
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
  p.imageUrl = `/assets/public/${p.imageUrl}`;


        // <!-- Background circle -->
        // <circle cx="60" cy="60" r="55" fill="#f8f9fa" />
  return `
<div class="carBat" data-id="${p.id}">
  <div class="carBat__image">
    <img src="${p.imageUrl}" alt="${p.name}">

    <div class="carBat__dimensions">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="carBat__dimensions__svg">
        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L6,3 L0,6 L1,3 Z" fill="currentColor" />
          </marker>
        </defs>

        <line x1="20" y1="80" x2="85" y2="80" stroke="#000" stroke-width="5" marker-end="url(#arrow)"/>
        <line x1="20" y1="80" x2="60" y2="40" stroke="#000" stroke-width="5" marker-end="url(#arrow)"/>
        <line x1="20" y1="80" x2="20" y2="10" stroke="#000" stroke-width="5" marker-end="url(#arrow)"/>
      </svg>
      <p class="carBat__dimensionsValues">${p.length}<span>/</span>${p.width}<span>/</span>${p.height}</p>
    </div>
  </div>

  <div class="carBat__info">
    <h3 class="carBat__name">${p.name}</h3>
    <p class="carBat__type">${p.type}</p>

    <div class="carBat__specs">
      <p>${p.capacity}<span>Ah</span></p>
      <p>${p.cca}<span>A(EN)</span></p>
      <p>${p.polarity ? 'R+' : 'L+'}</p>
    </div>


    <div class="carBat__price">
      ${p.price_old ? `<del class="carBat__price--old">${p.price_old}<span>₴</span></del>` : ''}
      <span class="carBat__price--current">${p.price}<span>₴</span></span>
    </div>

    <div class="carBat__meta">
      <span class="carBat__warranty"><strong>Гарантія:</strong> ${p.warranty} міс.</span>
      <a href="${p.manufacturerWebsite}" class="carBat__origin" target="_blank">${p.manufacturerCountry}, ${p.manufacturerBrand}</a>
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
