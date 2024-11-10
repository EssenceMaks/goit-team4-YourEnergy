var z=Object.defineProperty;var _=(r,t,e)=>t in r?z(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var B=(r,t,e)=>_(r,typeof t!="symbol"?t+"":t,e);import{a as Q}from"./vendor-CNNbG8jS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();const y=()=>"https://your-energy.b.goit.study/api",b=()=>y()+"/exercises",at=()=>y()+"/filters",V=()=>y()+"/quote",G=()=>y()+"/subscription",nt=(r,t,e,o,s,i)=>`${b()}?bodypart=${r}&muscles=${t}&equipment=${e}&keyword=${o}&page=${s}&limit=${i}`,ct=()=>G(),K=r=>`${b()}/${r}`,lt=r=>`${b()}/${r}/rating`;async function Y(){const r=new Date().toISOString().split("T")[0],t=localStorage.getItem("quote"),e=localStorage.getItem("author"),o=localStorage.getItem("quoteDate");if(t&&e&&o===r){document.querySelector(".sidebar-quote").textContent=`${t}`,document.querySelector(".sidebar-quote-author").textContent=`${e}`;return}try{const s=await fetch(V());if(!s.ok)throw new Error("Failed to fetch quote");const i=await s.json(),a=i.quote,n=i.author;document.querySelector(".sidebar-quote").textContent=`${a}`,document.querySelector(".sidebar-quote-author").textContent=`${n}`,localStorage.setItem("quote",a),localStorage.setItem("author",n),localStorage.setItem("quoteDate",r)}catch(s){console.error("Error fetching quote:",s)}}Y();const S="/goit-team4-YourEnergy/assets/icons-BTIkT1Ap.svg";function O(r){return typeof r=="string"&&r.length>0?r.charAt(0).toUpperCase()+r.slice(1):r}function q(r){return r.sort((t,e)=>t.name.localeCompare(e.name)).map(({_id:t,name:e,burnedCalories:o,bodyPart:s,target:i,gifUrl:a,rating:n})=>{const u=Math.round(n).toFixed(1);return`
          <li class='workouts-card' data-name='${e}' data-id='${t}'>
            <div class="card-header">
              <div class="card-header_left-side">
                <span class="label">workout</span>
                <div class="rating-container">
                  <span class="rating">${u}</span>
                  <svg
                    class="star"
                    viewBox="0 0 16 16"
                    height="16"
                    width="16"
                    aria-hidden="true"
                  >
                    <use x="0" y="0" href="${S}#icon-Star"></use>
                  </svg>
                </div>
                <div class="trash-container hide">
                  <svg width="16" height="16">
                    <use href="./img/icons.svg#icon-trash"></use>
                  </svg>
                </div>
               </div>
              <button type="button" class="workout-start-btn">
                Start
                  <svg
                    viewBox="0 0 16 16"
                    height="16"
                    width="16"
                    aria-hidden="true"
                  >
                    <use x="0" y="0" href="${S}#icon-arrow"></use>
                  </svg>
              </button>
            </div>
            <div class="card-content">
              <svg
                class="card-icon"
                viewBox="0 0 24 24"
                height="20"
                width="24"
                aria-hidden="true"
              >
                <use x="0" y="0" href="${S}#icon-running"></use>
              </svg>
              <h3 class="title text-overflow">${O(e)}</h3>
            </div>
            <div class="card-footer">
              <ul class="card-footer_items">
                <li class="card-footer_item">Burned calories: <span class="strong text-overflow item-one">${o}</span></li>
                <li class="card-footer_item">Body Part: <span class="strong text-overflow item-two">${s}</span></li>
                <li class="card-footer_item text-overflow">Target: <span class="strong text-overflow item-three">${i}</span></li>
              </ul>
            </div>
          </li>`}).join("")}const C=(r,t)=>{let e=new DocumentFragment;for(let o=0;o<r;o++){let s=document.createElement("p");s.setAttribute("data-index",o),s.innerHTML=o+1,s.classList.add("pagination-page"),o===t&&s.classList.add("selected"),e.appendChild(s)}return e},Z=()=>{document.querySelectorAll(".pagination").forEach(t=>{if(t.hasAttribute("data-total")){t.innerHTML="";const e=parseInt(t.getAttribute("data-total")),o=parseInt(t.getAttribute("data-current"));t.appendChild(C(e,o)),t.addEventListener("click",async i=>{i.target.classList.contains("pagination-page")&&(i.preventDefault(),t.querySelectorAll(".pagination-page").forEach(n=>{n.classList.remove("selected")}),i.target.classList.add("selected"),t.setAttribute("data-current",i.target.getAttribute("data-index")))}),new MutationObserver(i=>{for(let a of i)if(a.type==="attributes"&&a.attributeName==="data-total"){const n=parseInt(t.getAttribute("data-total")),d=parseInt(t.getAttribute("data-current"));t.innerHTML="",t.appendChild(C(n,d))}}).observe(t,{attributes:!0})}})};document.addEventListener("DOMContentLoaded",Z);function X(r){let t=JSON.parse(localStorage.getItem("favorites"))||[];t=t.filter(e=>e.id!==r),localStorage.setItem("favorites",JSON.stringify(t))}const A="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z",x=(r=0)=>{let t=Date.now()+Math.random();return`<div style="width: 18px; display: flex; justify-content: center; align-items: center">
    <svg id="starSVG" width="14" height="14" viewBox="0 0 14 14">
      <path
        d="${A}"
        fill="rgba(244, 244, 244, 0.2)"
      />
      <clipPath id="starClip${t}">
        <rect id="fillRect" x="0" y="0" width="${r}%" height="100%" />
      </clipPath>
      <path
        d="${A}"
        fill="#EEA10C"
        clip-path="url(#starClip${t})"
      />
    </svg>
  </div>`},tt=(r,t)=>{r.innerHTML="";const e=5,o=parseFloat(t)||0;for(let s=0;s<e;s++)if(s<Math.floor(o))r.innerHTML+=x(100);else if(s===Math.floor(o)){const i=o%1;r.innerHTML+=x(i*100)}else r.innerHTML+=x(0)},g=class g{constructor(){if(g.instance)return g.instance;this.backdrop=document.querySelector("[data-modal]"),this.closeBtn=document.querySelector("[data-modal-close]"),this.isOpen=!1,this.isFavorite=!1,this.backdrop||console.error("Modal backdrop not found"),this.closeBtn||console.error("Modal close button not found"),this.ratingBackdrop=document.querySelector("[data-rating-modal]"),this.ratingCloseBtn=document.querySelector("[data-rating-close]"),this.ratingForm=document.querySelector(".rating-form"),this.bindEvents(),g.instance=this}bindEvents(){if(this.closeBtn&&this.closeBtn.addEventListener("click",()=>this.close()),this.backdrop&&this.backdrop.addEventListener("click",e=>{e.target===this.backdrop&&this.close()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.isOpen&&this.close()}),this.backdrop){const e=this.backdrop.querySelector(".modal-favorites-btn");e&&e.addEventListener("click",()=>this.toggleFavorite())}const t=this.backdrop.querySelector(".modal-rating-btn");t&&t.addEventListener("click",()=>this.openRatingModal()),this.ratingCloseBtn&&this.ratingCloseBtn.addEventListener("click",()=>this.closeRatingModal()),this.ratingBackdrop&&this.ratingBackdrop.addEventListener("click",e=>{e.target===this.ratingBackdrop&&this.closeRatingModal()}),this.ratingForm&&this.ratingForm.addEventListener("submit",e=>this.handleRatingSubmit(e))}async open(t){this.isOpen=!0,this.currentExerciseId=t._id,this.backdrop&&this.backdrop.classList.remove("is-hidden"),document.body.style.overflow="hidden",await this.updateContent(t);const e=JSON.parse(localStorage.getItem("favorites"))||[];this.isFavorite=e.some(s=>s.id===this.currentExerciseId);const o=this.backdrop.querySelector(".modal-favorites-btn");this.isFavorite?(o.innerHTML=`
        Remove from favorites
        <svg class="modal-icon-heart">
          <use href="./img/icons.svg#icon-trash"></use>
        </svg>
      `,o.classList.add("is-favorite")):(o.innerHTML=`
        Add to favorites
        <svg class="modal-icon-heart">
          <use href="./img/icons.svg#icon-heart"></use>
        </svg>
      `,o.classList.remove("is-favorite"))}close(){this.isOpen=!1,this.backdrop&&this.backdrop.classList.add("is-hidden"),this.ratingBackdrop&&(this.ratingBackdrop.classList.add("is-hidden"),this.ratingForm&&this.ratingForm.reset()),document.onkeydown=this.originalEscapeHandler,document.body.style.overflow=""}async updateContent(t){const{_id:e,name:o,rating:s,target:i,bodyPart:a,equipment:n,popularity:d,burnedCalories:u,description:L,gifUrl:E,time:D=3}=t,M=this.backdrop.querySelector(".modal-title");M&&(M.textContent=O(o));const $=this.backdrop.querySelector(".modal-media-container");$&&E&&($.innerHTML=`<img src="${E}" alt="${o}" />`);const U={Target:i,"Body Part":a,Equipment:n,Popular:d,"Burned Calories":`${u} / ${D} min`},k=this.backdrop.querySelector(".modal-parameters");k&&(k.innerHTML="",Object.entries(U).forEach(([J,W])=>{const w=document.createElement("li");w.className="parameter-item",w.innerHTML=`
          <p class="modal-parameter-label">${J}</p>
          <p class="modal-parameter-value">${this.capitalizeFirstLetter(W)}</p>
        `,k.appendChild(w)}));const F=this.backdrop.querySelector(".modal-description");F&&(F.textContent=this.capitalizeFirstLetter(L));const I=this.backdrop.querySelector(".rating-value");I&&(I.textContent=s);const T=this.backdrop.querySelector(".rating-stars");T&&tt(T,s)}capitalizeFirstLetter(t){return typeof t=="string"&&t.length>0?t.charAt(0).toUpperCase()+t.slice(1):t}toggleFavorite(){this.isFavorite=!this.isFavorite;const t=this.backdrop.querySelector(".modal-favorites-btn");this.isFavorite?(t.innerHTML=`
        Remove from favorites
        <svg class="modal-icon-heart">
          <use href="./img/icons.svg#icon-trash"></use>
        </svg>
      `,t.classList.add("is-favorite"),this.saveToFavorites()):(t.innerHTML=`
        Add to favorites
        <svg class="modal-icon-heart">
          <use href="./img/icons.svg#icon-heart"></use>
        </svg>
      `,t.classList.remove("is-favorite"),X(this.currentExerciseId)),t.style.transform="scale(0.95)",setTimeout(()=>{t.style.transform="scale(1)"},200)}saveToFavorites(){const t={id:this.currentExerciseId,name:this.backdrop.querySelector(".modal-title").textContent};let e=JSON.parse(localStorage.getItem("favorites"))||[];e.push(t),localStorage.setItem("favorites",JSON.stringify(e))}openRatingModal(){this.ratingBackdrop&&this.backdrop&&(this.backdrop.classList.add("is-hidden"),this.ratingBackdrop.classList.remove("is-hidden"),this.originalEscapeHandler=document.onkeydown,document.onkeydown=t=>{t.key==="Escape"&&this.closeRatingModal()})}closeRatingModal(){this.ratingBackdrop&&this.backdrop&&(this.ratingBackdrop.classList.add("is-hidden"),this.backdrop.classList.remove("is-hidden"),this.ratingForm&&this.ratingForm.reset(),document.onkeydown=this.originalEscapeHandler)}async handleRatingSubmit(t){t.preventDefault();const e=this.ratingForm.querySelector("#rating-email").value.trim(),o=this.ratingForm.querySelector("#rating-comment").value.trim();if(!e||!o){console.log("Please fill in all fields");return}this.closeRatingModal()}};B(g,"instance",null);let v=g,H=null;document.addEventListener("DOMContentLoaded",()=>{if(!H)try{H=new v}catch(r){console.error("Error initializing modal:",r)}});window.openMenu=function(){document.getElementById("backdrop").classList.add("is-open")};window.closeMenu=function(){document.getElementById("backdrop").classList.remove("is-open")};window.menuLayoutClickHandler=function(t){t.stopPropagation()};const et=window.location.pathname;let P=document.querySelector(".fav-picture");P&&(P.outerHTML=`
    <picture>
      <source
        media="(min-width: 1440px)"
        srcset="
          ./img/sidebar/favorites/favorites-des-1x.jpg 1x,
          ./img/sidebar/favorites/favorites-des-2x.jpg 2x
        "
      />
      <source
        media="(min-width: 768px)"
        srcset=" 
          ./img/sidebar/favorites/favorites-tab-1x.jpg 1x,
          ./img/sidebar/favorites/favorites-tab-2x.jpg 2x
        "
      />
      <img
        class="sidebar-quote-image"
        srcset=" 
          ./img/sidebar/favorites/favorites-mob-1x.jpg 1x,
          ./img/sidebar/favorites/favorites-mob-2x.jpg 2x
        "
        src="./img/sidebar/favorites/favorites-mob-1x.jpg"
        alt="sidebar-container"
        loading="lazy"
      />
    </picture>
  `);const R=document.querySelectorAll(".menu-item");et.includes("favorites.html")&&(R.forEach(r=>r.classList.remove("active")),R[1].classList.add("active"));const p=document.querySelector(".favorites-page-text"),m=document.querySelector(".favorites-cards"),c=document.querySelector(".favorites-pagination");let l=JSON.parse(localStorage.getItem("favorites"))||[],h=[],f=0;const N=async()=>{if(!l||l.length===0){p.style.display="block",m.innerHTML="";return}try{h=[];for(const i of l){const{data:a}=await Q.get(K(i.id));h.push(a)}let r,t;const e=window.innerWidth;e<=768?t=8:e<=1440?t=10:t=h.length;const o=Math.ceil(h.length/t);if(c.setAttribute("data-total",o),o<=1?c.style.display="none":c.style.display="flex",e>1440)r=q(h),p.style.display="none",m.innerHTML=r,j(),c.innerHTML="";else if(r=q(h.slice(f*t,(f+1)*t)),p.style.display="none",m.innerHTML=r,c){c.innerHTML="";const i=C(o,f);c.appendChild(i),c.querySelectorAll(".pagination-page").forEach(a=>{a.addEventListener("click",st)})}document.querySelectorAll(".workout-start-btn").forEach(i=>{i.addEventListener("click",async a=>{a.preventDefault();const d=i.closest(".workouts-card").dataset.id;try{const u=await fetch(`${b()}/${d}`);if(!u.ok)throw new Error("Failed to fetch exercise details");const L=await u.json();window.modalWindow||(window.modalWindow=new v),window.modalWindow.open(L)}catch(u){console.error("Error opening modal:",u)}})})}catch(r){console.error(r)}};function rt(r){const e=r.target.closest(".workouts-card").getAttribute("data-id");if(l=l.filter(o=>o.id!==e),localStorage.setItem("favorites",JSON.stringify(l)),!l||l.length===0)p.style.display="block",m.innerHTML="";else{const o=Math.ceil(l.length/8);f>=o&&(f=o-1),N()}}function st(r){const t=Number(r.target.dataset.index);f=t,c.setAttribute("data-current",f),c.querySelectorAll("p").forEach(d=>{d.classList.remove("selected")}),r.target.classList.add("selected");const o=window.innerWidth;let s;if(o<=768)s=8;else if(o<=1440)s=10;else return;const i=t*s,a=i+s,n=h.slice(i,a);m.innerHTML=q(n),j()}function j(){document.querySelectorAll(".rating-container").forEach(e=>e.classList.add("hide")),document.querySelectorAll(".trash-container").forEach(e=>{e.classList.remove("hide"),e.addEventListener("click",rt)})}N();export{v as M,b as a,lt as b,q as c,nt as e,at as f,C as g,ct as s};
//# sourceMappingURL=favorites-DsAVzFvg.js.map
