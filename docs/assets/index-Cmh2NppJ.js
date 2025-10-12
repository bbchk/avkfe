import{f as s}from"./api.service-BDoYX7Ax.js";import{R as d}from"./index-CHj3fuIg.js";const g=`<div class="home container--home">
  <!-- <div class="home__hero"> -->
    <!-- TODO: banner -->
    <!-- <img -->
    <!--   class="home_heroImage" -->
    <!--   src="https://iknet.com.ua/system-resources/user/upload/images/Accumulators/uk/Accumulation-batteries.jpg" -->
    <!--   alt="Акумулятори" -->
    <!-- /> -->
  <!-- </div> -->

  <!-- <a href="/landing" class="inLink">To landing</a> -->

  <div class="gallery">
    <h3 class="gallery__heading">
      <span>Найпопулярніше</span>
      <span><a href="/catalog">Усі товари</a></span>
    </h3>

    <div class="gallery__content" id="homeGalleryContent--first"></div>

    <a href="/catalog" class="gallery__catalogLink">Усі товари</a>
  </div>
</div>
`,m='@charset "UTF-8";.link,.link--primary{transition:color .25s ease-in-out}.link--primary:hover{text-decoration:underline}.nav_list{display:flex;flex-flow:row nowrap;gap:5px}.button,.gallery__cardBuyBtn button,.button--secondary,.button--primary{display:flex;align-items:center;justify-content:center;border:1px solid transparent;transition:border-color .25s ease-in-out,color .25s ease-in-out,background-color .25s ease-in-out}.button--primary{color:#d5dadd;background-color:#1e3a5f}.button--primary:hover,.button--secondary{color:#1e3a5f;background-color:#d5dadd}.button--secondary:hover{color:#d5dadd;background-color:#1e3a5f;border-color:#1e3a5f}.houseContainer{perspective:1000px;perspective-origin:80% -40%}.house{transform-style:preserve-3d;position:relative;border:1px solid blue;width:100px;aspect-ratio:1;animation:rotate 10s linear infinite}.face,.face--right,.face--left,.face--front,.face--back,.face--bottom,.face--top{position:absolute;width:100px;height:100px;background:red;transform-style:preserve-3d}.face--bottom{top:100%;transform-origin:top;transform-origin:rotateX(-90deg)}.face--back{transform-origin:center 50px -100px;transform:rotateX(180deg);background:#f0f}.face--left{left:100%;transform-origin:right;transform:rotateY(-90deg)}.face--right{right:100%;transform-origin:left;transform:rotateY(90deg)}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotateY(360deg)}}.container,.container--home{max-width:90%;padding-right:20px;padding-left:20px;margin:auto}@media (max-width: 768px){.container,.container--home{max-width:100%}}.rating,.rating--galleryCard{display:flex;flex-flow:row nowrap;gap:.5rem}.rating__stars{font-size:.9em}.rating__reviewIcon{font-size:.8em}.home{display:flex;flex-flow:column;justify-content:center;align-content:center;width:100%}.home__hero{display:flex;gap:50px;align-items:center;padding:100px 0}@media (max-width: 1024px){.home__hero{flex-flow:column nowrap}}.home__heroAppeal{flex:1 1 70%}.home__heroAppeal p{font-size:4rem;font-weight:700;margin-bottom:2rem}.home__heroAppeal h2{font-size:2.5rem;line-height:1.3}@media (max-width: 1024px){.home__heroAppeal{order:2}}.home_heroImage{flex:1 5 30%;width:100%;border-radius:10px;object-fit:cover}@media (max-width: 1024px){.home_heroImage{order:1}}.gallery{margin-bottom:50px}.gallery__heading{display:flex;justify-content:space-between;padding:2rem}.gallery__heading span:first-child{font-size:1.5rem}.gallery__heading span:last-child{font-size:1.2rem}.gallery__content{display:grid;gap:15px;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(2,1fr);width:100%}@media (max-width: 1024px){.gallery__content{grid-template-columns:repeat(3,1fr)}}@media (max-width: 768px){.gallery__content{grid-template-columns:repeat(2,1fr)}}@media (max-width: 480px){.gallery__content{display:flex;flex-flow:column nowrap;gap:30px}}.gallery__catalogLink{display:block;padding-top:3rem;font-size:1.2rem;text-align:center}.gallery__card{display:grid;grid-template-areas:"image image image" "name name name" ". . ." "prices prices buy_btn";grid-template-columns:70% 10% 20%;grid-template-rows:60% 15% 10% 15%;height:100%;width:100%;border-radius:8px;padding:1rem;overflow:hidden;box-shadow:0 4px 8px #0000001a;background-color:#fff;transition:box-shadow .3s ease}.gallery__card:hover{box-shadow:0 8px 16px #0003}.gallery__cardImage{grid-area:image;width:100%;height:100%;margin:0 auto;overflow:clip;object-fit:cover}.gallery__cardName{grid-area:name;padding:1rem 0;line-height:1.3rem;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.gallery__cardPrices{grid-area:prices;display:flex;flex-flow:column nowrap;justify-content:flex-end;text-align:left;font-size:1.3rem}.gallery__cardPrices del{display:block;color:#848482;font-size:.9em}.gallery__cardPrices ins{display:block;color:#ff3131;font-size:1.2em;letter-spacing:2px}.gallery__cardPrices ins span{font-size:.9rem}.gallery__cardPrices ins:before,.gallery__cardPrices ins:after{clip-path:inset(100%);clip:rect(1px,1px,1px,1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.gallery__cardPrices ins:before{content:" [insertion start] "}.gallery__cardPrices ins:after{content:" [insertion end] "}.gallery__cardBuyBtn{grid-area:buy_btn;display:flex;flex-flow:column nowrap;justify-content:flex-end;align-content:center}.gallery__cardBuyBtn button{width:min-content;height:min-content;padding:.5rem;border-radius:5px;color:green;font-size:1.5rem}.gallery__cardBuyBtn button:hover{border-color:green}';async function f(){return await s()}window.on(d,async n=>{const e=$("#homeGalleryContent--first");if(e){let a="",r=0;for(const{name:t,image_url:o,price_orig:i,price_discount:l}of n.detail.prefetchedData){if(r>7)break;a+=`
    <div class='gallery__card'>
      <img class='gallery__cardImage' src="${o}" alt="${t}"/>
      <h3 class="gallery__cardName">${t}</h3>
      <div class="gallery__cardPrices">
        <del>${i}<span>₴</span></del>
        <ins>${l}<span>₴<span></ins>
      </div>
      <p class="rating--galleryCard">
       <span class="rating__stars"> ⭐⭐⭐⭐⭐</span>
       <span class="rating__reviewCount">0</span>
       <span class="rating__reviewIcon">💬</span>
      </p>
      <div class="gallery__cardBuyBtn emoji--mono">
        <button>
          🛒
        </button>
      </div>
    </div>
        `,++r}e.innerHTML=a}});export{m as css,g as html,f as preFetch};
