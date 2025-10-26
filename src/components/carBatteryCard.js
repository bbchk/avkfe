const createCarBatteryCard = (p) => {
  const FALLBACK_IMAGE_URL = '/goods_placeholder.svg';
  const imageUrl = `/${p.imageUrl}` ?? FALLBACK_IMAGE_URL;

  return `
<div class="carBat" data-id="${p.id}">

  <div class="carBat__image">
    <img src="${imageUrl}" alt="${p.name}">

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
    <p class="carBat__name">${p.name}</p>
    <p class="carBat__type">${p.type}</p>

    <div class="carBat__specs">
      <p>${p.capacity}<span>Ah</span></p>
      <p>${p.cca}<span>A(EN)</span></p>
      <p class="carBat__polarity">${p.polarity !== null ? (p.polarity ? 'R<span>+<span>' : 'L<span>+<span>') : 'R<span>+</span>,L<span>+<span>'}</p>
    </div>


    <div class="carBat__price">
      ${p.price_old ? `<del class="carBat__price--old">${p.price_old}<span>₴</span></del>` : ''}
      <span class="carBat__price--current">${p.price}<span>₴</span></span>
    </div>

    <div class="carBat__meta">
      <span class="carBat__warranty"><strong>Гарантія:</strong> ${p.warranty} міс.</span>
      <a href="${p.manufacturerWebsite}" class="carBat__origin" target="_blank">${p.manufacturerCountry}, ${p.manufacturerBrand}</a>
    </div>

  </div>
</div>
  `;
};

// TODO
// <button class="carBat__orderBtn">🛒</button>
// ${p?.tags ? `<span class="carBat_tag">${p.tags?.[0]}<p>` : ''}

export default createCarBatteryCard;
