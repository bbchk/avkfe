import{R as i}from"./index-BQes1ajs.js";import{f as n}from"./api.service-BDoYX7Ax.js";const l=`<article class="home container--home">
  <section class="categories">
    <h3 class="categories__heading">
      <span>Категорії</span>
    </h3>

    <div class="categories__container"></div>
    <div class="categories__content" id="homeCategoriesContent--first"></div>

    <!-- TODO: vertical banner on the right side of the section -->
    <!-- <div class="home__hero"> -->
    <!-- TODO: banner -->
    <!-- <img -->
    <!--   class="home_heroImage" -->
    <!--   src="https://iknet.com.ua/system-resources/user/upload/images/Accumulators/uk/Accumulation-batteries.jpg" -->
    <!--   alt="Акумулятори" -->
    <!-- /> -->
    <!-- </div> -->

    <!-- <a href="/landing" class="inLink">To landing</a> -->
  </section>
</article>
`,p='.link,.link--primary{transition:color .25s ease-in-out}.link--primary{color:#318ce7}.link--primary:hover{color:#1e2a5e;text-decoration:underline}.nav_list{display:flex;flex-flow:row nowrap;gap:5px}.button,.categories__cardBuyBtn button,.button--secondary,.button--primary{display:flex;align-items:center;justify-content:center;border:1px solid transparent;transition:border-color .25s ease-in-out,color .25s ease-in-out,background-color .25s ease-in-out}.button--primary{color:#d5dadd;background-color:#1e3a5f}.button--primary:hover,.button--secondary{color:#1e3a5f;background-color:#d5dadd}.button--secondary:hover{color:#d5dadd;background-color:#1e3a5f;border-color:#1e3a5f}.houseContainer{perspective:1000px;perspective-origin:80% -40%}.house{transform-style:preserve-3d;position:relative;border:1px solid blue;width:100px;aspect-ratio:1;animation:rotate 10s linear infinite}.face,.face--right,.face--left,.face--front,.face--back,.face--bottom,.face--top{position:absolute;width:100px;height:100px;background:red;transform-style:preserve-3d}.face--bottom{top:100%;transform-origin:top;transform-origin:rotateX(-90deg)}.face--back{transform-origin:center 50px -100px;transform:rotateX(180deg);background:#f0f}.face--left{left:100%;transform-origin:right;transform:rotateY(-90deg)}.face--right{right:100%;transform-origin:left;transform:rotateY(90deg)}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotateY(360deg)}}.container,.container--home{max-width:90%;padding-right:20px;padding-left:20px;margin:auto}@media (max-width: 768px){.container,.container--home{max-width:100%}}.rating,.rating--categoriesCard{display:flex;flex-flow:row nowrap;gap:.5rem}.rating__stars{font-size:.9em}.rating__reviewIcon{font-size:.8em}.categories{margin-bottom:50px}.categories__heading{display:flex;justify-content:space-between;padding:2rem}.categories__heading span{font-size:2.5rem;font-family:Balsamiq Sans,sans-serif}.categories__container{padding:150px;display:block}.categories__content{display:grid;gap:15px;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(2,1fr);width:100%}@media (max-width: 1024px){.categories__content{grid-template-columns:repeat(3,1fr)}}@media (max-width: 768px){.categories__content{grid-template-columns:repeat(2,1fr)}}@media (max-width: 480px){.categories__content{display:flex;flex-flow:column nowrap;gap:30px}}.categories__catalogLink{display:block;padding-top:3rem;font-size:1.2rem;text-align:center}.categories__card{display:grid;grid-template-areas:"image image image" "name name name" ". . ." "prices prices buy_btn";grid-template-columns:70% 10% 20%;grid-template-rows:60% 15% 10% 15%;height:100%;width:100%;border-radius:8px;padding:1rem;overflow:hidden;box-shadow:0 4px 8px #0000001a;background-color:#fff;transition:box-shadow .3s ease}.categories__card:hover{box-shadow:0 8px 16px #0003}.categories__cardImage{grid-area:image;width:100%;height:100%;margin:0 auto;overflow:clip;object-fit:cover}.categories__cardName{grid-area:name;padding:1rem 0;line-height:1.3rem;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.categories__cardPrices{grid-area:prices;display:flex;flex-flow:column nowrap;justify-content:flex-end;text-align:left;font-size:1.3rem}.categories__cardPrices del{display:block;color:#848482;font-size:.9em}.categories__cardPrices ins{display:block;color:#ff3131;font-size:1.2em;letter-spacing:2px}.categories__cardPrices ins span{font-size:.9rem}.categories__cardPrices ins:before,.categories__cardPrices ins:after{clip-path:inset(100%);clip:rect(1px,1px,1px,1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.categories__cardPrices ins:before{content:" [insertion start] "}.categories__cardPrices ins:after{content:" [insertion end] "}.categories__cardBuyBtn{grid-area:buy_btn;display:flex;flex-flow:column nowrap;justify-content:flex-end;align-content:center}.categories__cardBuyBtn button{width:min-content;height:min-content;padding:.5rem;border-radius:5px;color:green;font-size:1.5rem}.categories__cardBuyBtn button:hover{border-color:green}.home{display:flex;flex-flow:column;justify-content:center;align-content:center;width:100%}.home__hero{display:flex;gap:50px;align-items:center;padding:100px 0}@media (max-width: 1024px){.home__hero{flex-flow:column nowrap}}.home__heroAppeal{flex:1 1 70%}.home__heroAppeal p{font-size:4rem;font-weight:700;margin-bottom:2rem}.home__heroAppeal h2{font-size:2.5rem;line-height:1.3}@media (max-width: 1024px){.home__heroAppeal{order:2}}.home_heroImage{flex:1 5 30%;width:100%;border-radius:10px;object-fit:cover}@media (max-width: 1024px){.home_heroImage{order:1}}';function s(a,e,r){return`
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
          ${r.map(t=>`
            <li>
              <a href="${t.url}" aria-label="Підкатегорія ${t.name}">
                ${t.name}
              </a>
            </li>
          `).join("")}
        </ul>
      </button>
    </div>
  `}async function g(){return await n()}window.on(i,a=>{const e=a.detail.prefetchedData,r=$("#homeCategoriesContent--first");if(r){let t="";for(const o of e)t+=s(o);r.innerHTML=t}});export{p as css,l as html,g as preFetch};
