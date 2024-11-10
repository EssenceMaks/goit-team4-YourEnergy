var z=Object.defineProperty;var j=(s,t,e)=>t in s?z(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var A=(s,t,e)=>j(s,typeof t!="symbol"?t+"":t,e);import{a as _}from"./vendor-CNNbG8jS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();const m="/goit-team4-YourEnergy/assets/icons-BTIkT1Ap.svg";function R(s){return typeof s=="string"&&s.length>0?s.charAt(0).toUpperCase()+s.slice(1):s}function E(s){return s.sort((t,e)=>t.name.localeCompare(e.name)).map(({_id:t,name:e,burnedCalories:i,bodyPart:r,target:a,gifUrl:o,rating:n})=>{const u=Math.round(n).toFixed(1);return`
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
                    <use x="0" y="0" href="${m}#icon-Star"></use>
                  </svg>
                </div>
                <div class="trash-container hide">
                  <svg width="16" height="16">
                    <use href="${m}#icon-trash"></use>
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
                    <use x="0" y="0" href="${m}#icon-arrow"></use>
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
                <use x="0" y="0" href="${m}#icon-running"></use>
              </svg>
              <h3 class="title text-overflow">${R(e)}</h3>
            </div>
            <div class="card-footer">
              <ul class="card-footer_items">
                <li class="card-footer_item">Burned calories: <span class="strong text-overflow item-one">${i}</span></li>
                <li class="card-footer_item">Body Part: <span class="strong text-overflow item-two">${r}</span></li>
                <li class="card-footer_item text-overflow">Target: <span class="strong text-overflow item-three">${a}</span></li>
              </ul>
            </div>
          </li>`}).join("")}const M=()=>"https://your-energy.b.goit.study/api",b=()=>M()+"/exercises",rt=()=>M()+"/filters",V=()=>M()+"/subscription",it=(s,t,e,i,r,a)=>`${b()}?bodypart=${s}&muscles=${t}&equipment=${e}&keyword=${i}&page=${r}&limit=${a}`,at=()=>V(),G=s=>`${b()}/${s}`,ot=s=>`${b()}/${s}/rating`,C=(s,t)=>{let e=new DocumentFragment;for(let i=0;i<s;i++){let r=document.createElement("p");r.setAttribute("data-index",i),r.innerHTML=i+1,r.classList.add("pagination-page"),i===t&&r.classList.add("selected"),e.appendChild(r)}return e},K=()=>{document.querySelectorAll(".pagination").forEach(t=>{if(t.hasAttribute("data-total")){t.innerHTML="";const e=parseInt(t.getAttribute("data-total")),i=parseInt(t.getAttribute("data-current"));t.appendChild(C(e,i)),t.addEventListener("click",async a=>{a.target.classList.contains("pagination-page")&&(a.preventDefault(),t.querySelectorAll(".pagination-page").forEach(n=>{n.classList.remove("selected")}),a.target.classList.add("selected"),t.setAttribute("data-current",a.target.getAttribute("data-index")))}),new MutationObserver(a=>{for(let o of a)if(o.type==="attributes"&&o.attributeName==="data-total"){const n=parseInt(t.getAttribute("data-total")),d=parseInt(t.getAttribute("data-current"));t.innerHTML="",t.appendChild(C(n,d))}}).observe(t,{attributes:!0})}})};document.addEventListener("DOMContentLoaded",K);function Y(s){let t=JSON.parse(localStorage.getItem("favorites"))||[];t=t.filter(e=>e.id!==s),localStorage.setItem("favorites",JSON.stringify(t))}const H="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z",S=(s=0)=>{let t=Date.now()+Math.random();return`<div style="width: 18px; display: flex; justify-content: center; align-items: center">
    <svg id="starSVG" width="14" height="14" viewBox="0 0 14 14">
      <path
        d="${H}"
        fill="rgba(244, 244, 244, 0.2)"
      />
      <clipPath id="starClip${t}">
        <rect id="fillRect" x="0" y="0" width="${s}%" height="100%" />
      </clipPath>
      <path
        d="${H}"
        fill="#EEA10C"
        clip-path="url(#starClip${t})"
      />
    </svg>
  </div>`},Z=(s,t)=>{s.innerHTML="";const e=5,i=parseFloat(t)||0;for(let r=0;r<e;r++)if(r<Math.floor(i))s.innerHTML+=S(100);else if(r===Math.floor(i)){const a=i%1;s.innerHTML+=S(a*100)}else s.innerHTML+=S(0)},p=class p{constructor(){if(p.instance)return p.instance;this.backdrop=document.querySelector("[data-modal]"),this.closeBtn=document.querySelector("[data-modal-close]"),this.isOpen=!1,this.isFavorite=!1,this.backdrop||console.error("Modal backdrop not found"),this.closeBtn||console.error("Modal close button not found"),this.ratingBackdrop=document.querySelector("[data-rating-modal]"),this.ratingCloseBtn=document.querySelector("[data-rating-close]"),this.ratingForm=document.querySelector(".rating-form"),this.bindEvents(),p.instance=this}bindEvents(){if(this.closeBtn&&this.closeBtn.addEventListener("click",()=>this.close()),this.backdrop&&this.backdrop.addEventListener("click",e=>{e.target===this.backdrop&&this.close()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.isOpen&&this.close()}),this.backdrop){const e=this.backdrop.querySelector(".modal-favorites-btn");e&&e.addEventListener("click",()=>this.toggleFavorite())}const t=this.backdrop.querySelector(".modal-rating-btn");t&&t.addEventListener("click",()=>this.openRatingModal()),this.ratingCloseBtn&&this.ratingCloseBtn.addEventListener("click",()=>this.closeRatingModal()),this.ratingBackdrop&&this.ratingBackdrop.addEventListener("click",e=>{e.target===this.ratingBackdrop&&this.closeRatingModal()}),this.ratingForm&&this.ratingForm.addEventListener("submit",e=>this.handleRatingSubmit(e))}async open(t){this.isOpen=!0,this.currentExerciseId=t._id,this.backdrop&&this.backdrop.classList.remove("is-hidden"),document.body.style.overflow="hidden",await this.updateContent(t);const e=JSON.parse(localStorage.getItem("favorites"))||[];this.isFavorite=e.some(r=>r.id===this.currentExerciseId);const i=this.backdrop.querySelector(".modal-favorites-btn");this.isFavorite?(i.innerHTML=`
        Remove from favorites
        <svg class="modal-icon-heart">
          <use href="./img/icons.svg#icon-trash"></use>
        </svg>
      `,i.classList.add("is-favorite")):(i.innerHTML=`
        Add to favorites
        <svg class="modal-icon-heart">
          <use href="./img/icons.svg#icon-heart"></use>
        </svg>
      `,i.classList.remove("is-favorite"))}close(){this.isOpen=!1,this.backdrop&&this.backdrop.classList.add("is-hidden"),this.ratingBackdrop&&(this.ratingBackdrop.classList.add("is-hidden"),this.ratingForm&&this.ratingForm.reset()),document.onkeydown=this.originalEscapeHandler,document.body.style.overflow=""}async updateContent(t){const{_id:e,name:i,rating:r,target:a,bodyPart:o,equipment:n,popularity:d,burnedCalories:u,description:L,gifUrl:x,time:D=3}=t,q=this.backdrop.querySelector(".modal-title");q&&(q.textContent=R(i));const F=this.backdrop.querySelector(".modal-media-container");F&&x&&(F.innerHTML=`<img src="${x}" alt="${i}" />`);const U={Target:a,"Body Part":o,Equipment:n,Popular:d,"Burned Calories":`${u} / ${D} min`},k=this.backdrop.querySelector(".modal-parameters");k&&(k.innerHTML="",Object.entries(U).forEach(([J,W])=>{const w=document.createElement("li");w.className="parameter-item",w.innerHTML=`
          <p class="modal-parameter-label">${J}</p>
          <p class="modal-parameter-value">${this.capitalizeFirstLetter(W)}</p>
        `,k.appendChild(w)}));const $=this.backdrop.querySelector(".modal-description");$&&($.textContent=this.capitalizeFirstLetter(L));const B=this.backdrop.querySelector(".rating-value");B&&(B.textContent=r);const T=this.backdrop.querySelector(".rating-stars");T&&Z(T,r)}capitalizeFirstLetter(t){return typeof t=="string"&&t.length>0?t.charAt(0).toUpperCase()+t.slice(1):t}toggleFavorite(){this.isFavorite=!this.isFavorite;const t=this.backdrop.querySelector(".modal-favorites-btn");this.isFavorite?(t.innerHTML=`
        Remove from favorites
        <svg class="modal-icon-heart">
          <use href="./img/icons.svg#icon-trash"></use>
        </svg>
      `,t.classList.add("is-favorite"),this.saveToFavorites()):(t.innerHTML=`
        Add to favorites
        <svg class="modal-icon-heart">
          <use href="./img/icons.svg#icon-heart"></use>
        </svg>
      `,t.classList.remove("is-favorite"),Y(this.currentExerciseId)),t.style.transform="scale(0.95)",setTimeout(()=>{t.style.transform="scale(1)"},200)}saveToFavorites(){const t={id:this.currentExerciseId,name:this.backdrop.querySelector(".modal-title").textContent};let e=JSON.parse(localStorage.getItem("favorites"))||[];e.push(t),localStorage.setItem("favorites",JSON.stringify(e))}openRatingModal(){this.ratingBackdrop&&this.backdrop&&(this.backdrop.classList.add("is-hidden"),this.ratingBackdrop.classList.remove("is-hidden"),this.originalEscapeHandler=document.onkeydown,document.onkeydown=t=>{t.key==="Escape"&&this.closeRatingModal()})}closeRatingModal(){this.ratingBackdrop&&this.backdrop&&(this.ratingBackdrop.classList.add("is-hidden"),this.backdrop.classList.remove("is-hidden"),this.ratingForm&&this.ratingForm.reset(),document.onkeydown=this.originalEscapeHandler)}async handleRatingSubmit(t){t.preventDefault();const e=this.ratingForm.querySelector("#rating-email").value.trim(),i=this.ratingForm.querySelector("#rating-comment").value.trim();if(!e||!i){console.log("Please fill in all fields");return}this.closeRatingModal()}};A(p,"instance",null);let y=p,I=null;document.addEventListener("DOMContentLoaded",()=>{if(!I)try{I=new y}catch(s){console.error("Error initializing modal:",s)}});window.openMenu=function(){document.getElementById("backdrop").classList.add("is-open")};window.closeMenu=function(){document.getElementById("backdrop").classList.remove("is-open")};window.menuLayoutClickHandler=function(t){t.stopPropagation()};const Q=window.location.pathname,P=document.querySelectorAll(".menu-item");Q.includes("favorites.html")&&(P.forEach(s=>s.classList.remove("active")),P[1].classList.add("active"));const v=document.querySelector(".favorites-page-text"),g=document.querySelector(".favorites-cards"),c=document.querySelector(".favorites-pagination");let l=JSON.parse(localStorage.getItem("favorites"))||[],h=[],f=0;const O=async()=>{if(!l||l.length===0){v.style.display="block",g.innerHTML="";return}try{h=[];for(const a of l){const{data:o}=await _.get(G(a.id));h.push(o)}let s,t;const e=window.innerWidth;e<=768?t=8:e<=1440?t=10:t=h.length;const i=Math.ceil(h.length/t);if(c.setAttribute("data-total",i),i<=1?c.style.display="none":c.style.display="flex",e>1440)s=E(h),v.style.display="none",g.innerHTML=s,N(),c.innerHTML="";else if(s=E(h.slice(f*t,(f+1)*t)),v.style.display="none",g.innerHTML=s,c){c.innerHTML="";const a=C(i,f);c.appendChild(a),c.querySelectorAll(".pagination-page").forEach(o=>{o.addEventListener("click",tt)})}document.querySelectorAll(".workout-start-btn").forEach(a=>{a.addEventListener("click",async o=>{o.preventDefault();const d=a.closest(".workouts-card").dataset.id;try{const u=await fetch(`${b()}/${d}`);if(!u.ok)throw new Error("Failed to fetch exercise details");const L=await u.json();window.modalWindow||(window.modalWindow=new y),window.modalWindow.open(L)}catch(u){console.error("Error opening modal:",u)}})})}catch(s){console.error(s)}};function X(s){const e=s.target.closest(".workouts-card").getAttribute("data-id");if(l=l.filter(i=>i.id!==e),localStorage.setItem("favorites",JSON.stringify(l)),!l||l.length===0)v.style.display="block",g.innerHTML="";else{const i=Math.ceil(l.length/8);f>=i&&(f=i-1),O()}}function tt(s){const t=Number(s.target.dataset.index);f=t,c.setAttribute("data-current",f),c.querySelectorAll("p").forEach(d=>{d.classList.remove("selected")}),s.target.classList.add("selected");const i=window.innerWidth;let r;if(i<=768)r=8;else if(i<=1440)r=10;else return;const a=t*r,o=a+r,n=h.slice(a,o);g.innerHTML=E(n),N()}function N(){document.querySelectorAll(".rating-container").forEach(e=>e.classList.add("hide")),document.querySelectorAll(".trash-container").forEach(e=>{e.classList.remove("hide"),e.addEventListener("click",X)})}O();export{y as M,b as a,ot as b,E as c,it as e,rt as f,C as g,at as s};
//# sourceMappingURL=favorites-CxXtdHro.js.map
