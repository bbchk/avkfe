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

  // Helper function to format polarity display
  const formatPolarities = (polarities) => {
    const polarityMap = {
      left_plus: 'Л+',
      right_plus: 'П+',
      universal_asia: 'Азія',
      universal_euro: 'Євро',
    };
    return polarities.map((p) => polarityMap[p] || p).join(', ');
  };

  // Check if polarities are available
  const hasAvailablePolarities =
    p.available_polarities && p.available_polarities.length > 0;

  const availablePolaritiesText = hasAvailablePolarities
    ? formatPolarities(p.available_polarities)
    : 'Немає в наявності';

  return `
    <div class="product-card ${!hasAvailablePolarities ? 'out-of-stock' : ''}" data-id="${p.id}">
      <div class="product-image">
        <img src="${p.image_url}" alt="${p.name}">
        ${!hasAvailablePolarities ? '<div class="out-of-stock-badge">Немає в наявності</div>' : ''}
      </div>

      <div class="product-info">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-type">${p.type}</p>

        <div class="product-specs">
          <div class="spec-item">
            <span class="spec-label">Ємність:</span>
            <span class="spec-value">${p.capacity}Ah</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Струм:</span>
            <span class="spec-value">${p.current}A</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Полярність:</span>
            <span class="spec-value ${!hasAvailablePolarities ? 'unavailable' : ''}">${availablePolaritiesText}</span>
          </div>
        </div>

        <div class="product-price">
          ${p.price_old ? `<del class="price-old">${p.price_old.toFixed(1)}<span>₴</span></del>` : ''}
          <span class="price-current">${p.price.toFixed(1)}<span>₴</span></span>
        </div>

        <div class="product-meta">
          <span class="product-warranty"><span style="font-weight: bold;">Гарантія:</span> ${p.warranty} міс.</span>
          <a href="${p.origin_website}" class="product-origin" target="_blank">
            ${p.origin}
          </a>
        </div>

        <button class="order-button ${!hasAvailablePolarities ? 'disabled' : ''}"
                ${!hasAvailablePolarities ? 'disabled' : ''}>
          ${hasAvailablePolarities ? '🛒' : 'Немає в наявності'}
        </button>
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
