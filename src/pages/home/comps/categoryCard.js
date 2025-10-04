export default function getCategoryCardHTML(image_url, name, subcats) {
  return `
    <div class="cat_card">
      <a href="/category-path" aria-label="Категорія ${name}">
        <img
          src="${image_url}"
          alt="${name} Категорія"
          width="300"
          height="150"
        />
        <h2>${name}</h2>
      </a>

      <button aria-label="Переглянути підкатегорії ${name}">
        <ul class="subcat_list">
          ${subcats.map(sub => `
            <li>
              <a href="${sub.url}" aria-label="Підкатегорія ${sub.name}">
                ${sub.name}
              </a>
            </li>
          `).join('')}
        </ul>
      </button>
    </div>
  `;
}

