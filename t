[38;5;214mdiff --git i/src/assets/styles/settings/_colors.scss w/src/assets/styles/settings/_colors.scss[m
[38;5;214mindex 4a9c547..e95a5a3 100644[m
[38;5;214m--- i/src/assets/styles/settings/_colors.scss[m
[38;5;214m+++ w/src/assets/styles/settings/_colors.scss[m
[38;5;214m@@ -65,7 +65,7 @@[m [m$red-cardinal: #c82333;[m
 [m$purple-iris: #5d3fd3;[m
 [m
 [m
[38;5;124m-[m
[38;5;155m+[m[38;5;155m/* ========================================================================================================= */[m
 [m
 [m/* ---------- BRAND COLORS --------------- */[m
 [m$primary: $blue-usafa;[m
[38;5;214mdiff --git i/src/components/carBatteryCard.js w/src/components/carBatteryCard.js[m
[38;5;214mindex ed1ce95..cd5e50b 100644[m
[38;5;214m--- i/src/components/carBatteryCard.js[m
[38;5;214m+++ w/src/components/carBatteryCard.js[m
[38;5;214m@@ -23,7 +23,7 @@[m [mconst createCarBatteryCard = (p) => {[m
 [m  </div>[m
 [m
 [m  <div class="carBat__info">[m
[38;5;124m-[m[38;5;124m    <h3 class="carBat__name">${p.name}</h3>[m
[38;5;155m+[m[38;5;155m    <p class="carBat__name">${p.name}</p>[m
 [m    <p class="carBat__type">${p.type}</p>[m
 [m
 [m    <div class="carBat__specs">[m
[38;5;214mdiff --git i/src/pages/catalog/auto/40-99ah/index.html w/src/pages/catalog/auto/40-99ah/index.html[m
[38;5;214mindex f30bac6..13221de 100644[m
[38;5;214m--- i/src/pages/catalog/auto/40-99ah/index.html[m
[38;5;214m+++ w/src/pages/catalog/auto/40-99ah/index.html[m
[38;5;214m@@ -1,17 +1,2 @@[m
 [m<article class="catalog--auto">[m
[38;5;124m-[m[38;5;124m  <section class="s60"></section>[m
[38;5;124m-[m
[38;5;124m-[m[38;5;124m  <hr />[m
[38;5;124m-[m
[38;5;124m-[m[38;5;124m  <section class="s70"></section>[m
[38;5;124m-[m
[38;5;124m-[m[38;5;124m  <hr />[m
[38;5;124m-[m
[38;5;124m-[m[38;5;124m  <section class="s80"></section>[m
[38;5;124m-[m
[38;5;124m-[m[38;5;124m  <hr />[m
[38;5;124m-[m
[38;5;124m-[m[38;5;124m  <section class="s90"></section>[m
[38;5;124m-[m
[38;5;124m-[m[38;5;124m  <hr />[m
 [m</article>[m
[38;5;214mdiff --git i/src/pages/catalog/auto/40-99ah/index.js w/src/pages/catalog/auto/40-99ah/index.js[m
[38;5;214mindex d366bb0..925c695 100644[m
[38;5;214m--- i/src/pages/catalog/auto/40-99ah/index.js[m
[38;5;214m+++ w/src/pages/catalog/auto/40-99ah/index.js[m
[38;5;214m@@ -8,44 +8,32 @@[m [mimport { ROUTE_CHANGED_EVENT } from '/config/constants';[m
 [mconst data = import.meta.glob('/assets/data/ah{60,70,80,90}.json', {[m
 [m  eager: true,[m
 [m});[m
[38;5;155m+[m[38;5;155mconst carBats = Object.values(data).map((v) => v.default);[m
 [m
[38;5;124m-[m[38;5;124mimport ah60 from '/assets/data/ah60.json';[m
[38;5;124m-[m[38;5;124mimport ah70 from '/assets/data/ah70.json';[m
[38;5;124m-[m[38;5;124mimport ah80 from '/assets/data/ah80.json';[m
[38;5;124m-[m[38;5;124mimport ah90 from '/assets/data/ah90.json';[m
[38;5;124m-[m
[38;5;124m-[m[38;5;124mconst products = Object.values(data).map((v) => v.default);[m
[38;5;124m-[m
[38;5;124m-[m[38;5;124m    // return $('.s60');[m
[38;5;124m-[m[38;5;124m    // return $('.s70');[m
[38;5;124m-[m[38;5;124m    // return $('.s80');[m
[38;5;124m-[m[38;5;124m    // return $('.s90');[m
[38;5;124m-[m
[38;5;124m-[m[38;5;124m// we just need to insert already full gallery[m
[38;5;124m-[m[38;5;124mconst renderProducts = (products) => {[m
[38;5;124m-[m[38;5;124m  $$('.s60, .s70, .s80, .s90').forEach((container) => {[m
[38;5;124m-[m[38;5;124m    if (container) container.innerHTML = '';[m
[38;5;124m-[m[38;5;124m  });[m
[38;5;124m-[m
[38;5;124m-[m[38;5;124m  products.forEach((p) => {[m
[38;5;124m-[m[38;5;124m    const cardHtml = createCarBatteryCard(p);[m
[38;5;124m-[m[38;5;124m    const container = getContainerForCapacity(p.capacity);[m
[38;5;124m-[m
[38;5;124m-[m[38;5;124m    if (container) {[m
[38;5;124m-[m[38;5;124m      container.innerHTML += cardHtml;[m
[38;5;124m-[m[38;5;124m    } else {[m
[38;5;124m-[m[38;5;124m      console.warn(`No container found for capacity: ${p.capacity}`);[m
[38;5;124m-[m[38;5;124m    }[m
[38;5;124m-[m[38;5;124m  });[m
[38;5;124m-[m[38;5;124m};[m
[38;5;155m+[m[38;5;155mconst handleRouteChange = () => {[m
[38;5;155m+[m[38;5;155m  const pageContainer = document.querySelector(".catalog--auto");[m
[38;5;155m+[m
[38;5;155m+[m[38;5;155m  if (!pageContainer) {[m
[38;5;155m+[m[38;5;155m    console.error("Catalog container with class '.catalog--auto' not found.");[m
[38;5;155m+[m[38;5;155m    return;[m
[38;5;155m+[m[38;5;155m  }[m
[38;5;155m+[m
[38;5;155m+[m[38;5;155m  const ahGroups = [60, 70, 80, 90];[m
 [m
[38;5;124m-[m[38;5;124m// TODO?: why to have empty timeout?[m
[38;5;124m-[m[38;5;124mconst handleRouteChange = (ev) => {[m
[38;5;124m-[m[38;5;124m  setTimeout(() => {[m
[38;5;124m-[m[38;5;124m    renderProducts(products);[m
[38;5;124m-[m[38;5;124m  }, 0);[m
[38;5;155m+[m[38;5;155m  const catalogHtml = carBats.map((batteryGroup, index) => {[m
[38;5;155m+[m[38;5;155m    const sectionClass = `s${ahGroups[index]}`;[m
[38;5;155m+[m[38;5;155m    const capacity = ahGroups[index];[m
[38;5;155m+[m[38;5;155m    const cardsHtml = batteryGroup.map(battery => createCarBatteryCard(battery)).join('');[m
[38;5;155m+[m[38;5;155m    return `[m
[38;5;155m+[m[38;5;155m      <h3 class="catalog__capacityHeader">${capacity} Ah<span></h3>[m
[38;5;155m+[m[38;5;155m      <section class="${sectionClass}">${cardsHtml}</section>[m
[38;5;155m+[m[38;5;155m    `;[m
[38;5;155m+[m[38;5;155m  }).join('<hr />');[m
[38;5;155m+[m
[38;5;155m+[m[38;5;155m  pageContainer.innerHTML = catalogHtml;[m
 [m};[m
 [m
 [mwindow.addEventListener(ROUTE_CHANGED_EVENT, handleRouteChange);[m
 [m
 [mexport { html, css };[m
[7m+[m
[38;5;214mdiff --git i/src/pages/catalog/auto/40-99ah/index.scss w/src/pages/catalog/auto/40-99ah/index.scss[m
[38;5;214mindex 72fe7b1..fa67471 100644[m
[38;5;214m--- i/src/pages/catalog/auto/40-99ah/index.scss[m
[38;5;214m+++ w/src/pages/catalog/auto/40-99ah/index.scss[m
[38;5;214m@@ -2,7 +2,6 @@[m
 [m@use '@styles/components/index' as *;[m
 [m@use '@styles/utils' as *;[m
 [m
[38;5;124m-[m
 [m.catalog--auto {[m
 [m  display: flex;[m
 [m  flex-direction: column;[m
[38;5;214m@@ -18,6 +17,19 @@[m
 [m  }[m
 [m}[m
 [m
[38;5;155m+[m[38;5;155m.catalog__capacityHeader {[m
[38;5;155m+[m[38;5;155m  margin: 0;[m
[38;5;155m+[m[38;5;155m  padding-top: 1rem;[m
[38;5;155m+[m
[38;5;155m+[m[38;5;155m  text-align: center;[m
[38;5;155m+[m
[38;5;155m+[m[38;5;155m  font-size: 2.5rem;[m
[38;5;155m+[m[38;5;155m  font-weight: 600;[m
[38;5;155m+[m[38;5;155m  color: $color-downplay;[m
[38;5;155m+[m
[38;5;155m+[m[38;5;155m  font-family: $font-mono;[m
[38;5;155m+[m[38;5;155m}[m
[38;5;155m+[m
 [m.s60,[m
 [m.s70,[m
 [m.s80,[m
[38;5;214m@@ -42,9 +54,3 @@[m
 [m
 [m.s90 {[m
 [m}[m
[38;5;124m-[m
[38;5;124m-[m[38;5;124m.s100 {[m
[38;5;124m-[m[38;5;124m}[m
[38;5;124m-[m
[38;5;124m-[m[38;5;124m.s120 {[m
[38;5;124m-[m[38;5;124m}[m
[38;5;214mdiff --git i/src/pages/catalog/auto/index.html w/src/pages/catalog/auto/index.html[m
[38;5;214mindex e81991d..be2ad0a 100644[m
[38;5;214m--- i/src/pages/catalog/auto/index.html[m
[38;5;214m+++ w/src/pages/catalog/auto/index.html[m
[38;5;214m@@ -14,7 +14,7 @@[m
 [m    </div>[m
 [m  </a>[m
 [m
[38;5;124m-[m[38;5;124m  <a class="catalog__heavy inLink" href="/catalog/auto/141ah-" title="Акумулятори від 141Ah">[m
[38;5;155m+[m[38;5;155m  <a class="catalog__heavy inLink" href="/catalog/auto/141ah+" title="Акумулятори від 141Ah">[m
 [m    <div><span class="catalog__capacity"> 141Ah+</span>, Важкі вантажівки</div>[m
 [m  </a>[m
 [m</article>[m
