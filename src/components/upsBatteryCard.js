const createUpsBatteryCard = (p) => {
  const FALLBACK_IMAGE_URL = '/goods_placeholder.svg'; // Assuming 'placeholder.jpg' is your default image
  p.imageUrl = p.imageUrl ? `/${p.imageUrl}` : FALLBACK_IMAGE_URL;
  // ${p?.tags ? `<span class="carBat_tag">${p.tags?.[0]}<p>` : ''}
  return `
<div class="carBat" data-id="${p.id}">

  <div class="carBat__image">
    <img src="${p.imageUrl}" alt="${p.name}">
  </div>

  <div class="carBat__info">
    <p class="carBat__name">${p.name}</p>
    <p class="carBat__type">${p.type}</p>

    <div class="carBat__specs">
      <p>${p.voltage}<span>V</span></p>
      <p>${p.capacity}<span>Ah</span></p>
      ${p.power ? `<p>${p.power}<span>Wh</span></p>` : ""}
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

// <button class="carBat__orderBtn">🛒</button>

export default createUpsBatteryCard;
