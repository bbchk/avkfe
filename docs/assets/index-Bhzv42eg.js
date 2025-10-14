import{R as n}from"./index-DJbwkzy4.js";import{f as r}from"./api.service-BDoYX7Ax.js";const p=`<article class="home">
  <section class="home__hero">
    <p>Вітаю, що вас цікавить?<p>
  </section>

    <section class="home__autoBat">
      <a href="/catalog/auto" class="inLink">
        <img src="homeAuto.jpg" alt="Акумулятори для транспорту" width="200" height="200"/>
        <span>Акумулятори для транспорту</span>
      </a>
    </section>

    <section class="home__upsBat ">
  <a href="/catalog/ups" class="inLink">
      <img src="homeUPS.jpg" alt="Акумулятори для дому" width="200" height="200"/>
      <span>Акумулятори для дому/дбж</span>
  </a>
    </section>

    <section class="home__diagnostics">
  <a href="/diagnostics" class="inLink">
      <img src="diagnostics-utk.jpg" alt="Дігностика та відновлення" width="200" height="200"/>
      <span>Дігностика та відновлення</span>
  </a
    </section>
</article>
`,c='@charset "UTF-8";.inLink,.inLink--primary{transition:color .25s ease-in-out}.inLink--primary{color:#1e3a5f}.inLink--primary:hover{color:#d5dadd;text-decoration:underline}.button,.button--secondary,.button--primary{display:flex;align-items:center;justify-content:center;border:1px solid transparent;transition:border-color .25s ease-in-out,color .25s ease-in-out,background-color .25s ease-in-out}.button--primary{color:#d5dadd;background-color:#1e3a5f}.button--primary:hover,.button--secondary{color:#1e3a5f;background-color:#d5dadd}.button--secondary:hover{color:#d5dadd;background-color:#1e3a5f;border-color:#1e3a5f}.container{max-width:90%;padding-right:20px;padding-left:20px;margin:auto}@media (max-width: 768px){.container{max-width:100%}}.footer{display:grid;grid-template-areas:"logo about rules contacts .";grid-template-columns:15% 20% 20% 45%;gap:20px;min-height:350px;margin:20px;border-top:2px solid #1e3a5f;overflow:clip;padding:2rem 0}.footer section{width:100%;font-size:1.1em;text-align:left;line-height:2}.footer section h5{display:block;font-size:1.4em}@media (max-width: 1024px){.footer{grid-template-areas:"logo ." "about rules" "contacts .";gap:30px;grid-template-columns:1fr 1fr;grid-template-rows:150px repeat(2,max-content);padding:0 5rem 2rem;font-size:1.3rem}.footer section{display:flex;flex-flow:column nowrap;justify-content:flex-start}}@media (max-width: 768px){.footer{display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;text-align:center;width:max-content;padding:1rem;margin:0 auto;font-size:1.3rem}}.footerLogo{grid-area:logo}@media (max-width: 768px){.footerLogo svg{display:none}}.footer__about{grid-area:about}.footer__rules{grid-area:rules}.footer__contacts{grid-area:contacts}.header{display:flex;align-items:center;gap:20px;height:80px;overflow:clip;border-bottom:2px solid #e4e4e4}.header__logo{display:flex;flex-flow:row nowrap;gap:15px;padding:0 30px}.header__logo span{font-size:3rem;font-weight:500}@media only screen and (width < 1200px){.header__logo span{display:none}}@media only screen and (width < 300px){.header__logo img{display:none}}.header__nav{display:flex;justify-content:space-between;align-items:center;width:100%;padding:0 20px;font-family:Raleway,sans-serif;font-size:1.2rem}.header__nav ul{display:flex;flex-flow:row nowrap;gap:15px}.header__navItem--contacts{display:flex;gap:20px;font-size:1.5rem}.header__navItem--contacts p{display:inline;line-height:15px}.rating{display:flex;flex-flow:row nowrap;gap:.5rem}.rating__stars{font-size:.9em}.rating__reviewIcon{font-size:.8em}.home__hero{display:flex;gap:50px;align-items:center;padding:100px 0}@media (max-width: 1024px){.home__hero{flex-flow:column nowrap}}.home__heroAppeal{flex:1 1 70%}.home__heroAppeal p{font-size:4rem;font-weight:700;margin-bottom:2rem}.home__heroAppeal h2{font-size:2.5rem;line-height:1.3}@media (max-width: 1024px){.home__heroAppeal{order:2}}.home_heroImage{flex:1 5 30%;width:100%;border-radius:10px;object-fit:cover}@media (max-width: 1024px){.home_heroImage{order:1}}.home{display:grid;grid-template-columns:.7fr 1fr 1.5fr;grid-template-rows:1fr 1fr;grid-template-areas:"hero auto diagnostics" "hero ups diagnostics";padding:35px 0;width:100%}.home__hero{grid-area:hero;text-align:center;padding:50px}.home__hero p{font-size:2rem}.home__autoBat,.home__upsBat,.home__diagnostics{display:flex;flex-direction:column;align-items:center;position:relative;background:transparent;text-align:center;font-size:1.1rem;cursor:pointer}.home__autoBat:after,.home__upsBat:after,.home__diagnostics:after{content:"";position:absolute;bottom:0;left:0;width:100%;height:40%;background:linear-gradient(to top,rgb(0,0,0),transparent);z-index:1}.home__autoBat span,.home__upsBat span,.home__diagnostics span{position:absolute;left:1.5rem;bottom:1.5rem;z-index:2;color:#f5f5f5;font-width:600;font-size:2rem}.home__autoBat img,.home__upsBat img,.home__diagnostics img{width:100%;height:100%;object-fit:cover;position:absolute;top:0;left:0;z-index:1}.home__autoBat{grid-area:auto}.home__upsBat{grid-area:ups}.home__diagnostics{grid-area:diagnostics;flex-direction:row;text-align:left}';function s(a,e,t){return`
    <div class="cat_card">
      <a href="/category-path" aria-label="Категорія ${e}">
        <img
          src="${a}"
          alt="${e} Категорія"
          width="300"
          height="150"
        />
        <h2>${e}</h2>
      </a>

      <button aria-label="Переглянути підкатегорії ${e}">
        <ul class="subcat_list">
          ${t.map(o=>`
            <li>
              <a href="${o.url}" aria-label="Підкатегорія ${o.name}">
                ${o.name}
              </a>
            </li>
          `).join("")}
        </ul>
      </button>
    </div>
  `}async function m(){return await r()}window.on(n,a=>{const e=a.detail.prefetchedData,t=$("#homeCategoriesContent--first");if(t){let o="";for(const i of e)o+=s(i);t.innerHTML=o}});export{c as css,p as html,m as preFetch};
