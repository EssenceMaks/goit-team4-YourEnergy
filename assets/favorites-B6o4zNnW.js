var V=Object.defineProperty;var Q=(r,t,e)=>t in r?V(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var B=(r,t,e)=>Q(r,typeof t!="symbol"?t+"":t,e);import{a as Y}from"./vendor-CNNbG8jS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const G="modulepreload",K=function(r){return"/goit-team4-YourEnergy/"+r},A={},Z=function(t,e,o){let s=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),n=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.allSettled(e.map(c=>{if(c=K(c),c in A)return;A[c]=!0;const l=c.endsWith(".css"),p=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":G,l||(d.as="script"),d.crossOrigin="",d.href=c,n&&d.setAttribute("nonce",n),document.head.appendChild(d),l)return new Promise((E,L)=>{d.addEventListener("load",E),d.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(i){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=i,window.dispatchEvent(n),!n.defaultPrevented)throw i}return s.then(i=>{for(const n of i||[])n.status==="rejected"&&a(n.reason);return t().catch(a)})};async function X(){const r=new Date().toISOString().split("T")[0],t=localStorage.getItem("quote"),e=localStorage.getItem("author"),o=localStorage.getItem("quoteDate");if(t&&e&&o===r){document.querySelector(".sidebar-quote").textContent=`${t}`,document.querySelector(".sidebar-quote-author").textContent=`${e}`;return}try{const{quoteURL:s}=await Z(async()=>{const{quoteURL:l}=await Promise.resolve().then(()=>at);return{quoteURL:l}},void 0),a=await fetch(s());if(!a.ok)throw new Error("Failed to fetch quote");const i=await a.json(),n=i.quote,c=i.author;document.querySelector(".sidebar-quote").textContent=`${n}`,document.querySelector(".sidebar-quote-author").textContent=`${c}`,localStorage.setItem("quote",n),localStorage.setItem("author",c),localStorage.setItem("quoteDate",r)}catch(s){console.error("Error fetching quote:",s)}}X();const w="/goit-team4-YourEnergy/assets/icons-BTIkT1Ap.svg";function _(r){return typeof r=="string"&&r.length>0?r.charAt(0).toUpperCase()+r.slice(1):r}function M(r){return r.sort((t,e)=>t.name.localeCompare(e.name)).map(({_id:t,name:e,burnedCalories:o,bodyPart:s,target:a,gifUrl:i,rating:n})=>{const l=Math.round(n).toFixed(1);return`
          <li class='workouts-card' data-name='${e}' data-id='${t}'>
            <div class="card-header">
              <div class="card-header_left-side">
                <span class="label">workout</span>
                <div class="rating-container">
                  <span class="rating">${l}</span>
                  <svg
                    class="star"
                    viewBox="0 0 16 16"
                    height="16"
                    width="16"
                    aria-hidden="true"
                  >
                    <use x="0" y="0" href="${w}#icon-Star"></use>
                  </svg>
                </div>
                <button class="trash-container hide">
                  <svg width="16" height="16">
                    <use href="${w}#icon-trash"></use>
                  </svg>
                </button>
               </div>
              <button type="button" class="workout-start-btn">
                Start
                  <svg
                    viewBox="0 0 16 16"
                    height="16"
                    width="16"
                    aria-hidden="true"
                  >
                    <use x="0" y="0" href="${w}#icon-arrow"></use>
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
                <use x="0" y="0" href="${w}#icon-running"></use>
              </svg>
              <h3 class="title text-overflow">${_(e)}</h3>
            </div>
            <div class="card-footer">
              <ul class="card-footer_items">
                <li class="card-footer_item">Burned calories: <span class="strong text-overflow item-one">${o}</span></li>
                <li class="card-footer_item">Body Part: <span class="strong text-overflow item-two">${s}</span></li>
                <li class="card-footer_item text-overflow">Target: <span class="strong text-overflow item-three">${a}</span></li>
              </ul>
            </div>
          </li>`}).join("")}const y=()=>"https://your-energy.b.goit.study/api",b=()=>y()+"/exercises",tt=()=>y()+"/filters",et=()=>y()+"/quote",U=()=>y()+"/subscription",rt=(r,t,e,o,s,a)=>`${b()}?bodypart=${r}&muscles=${t}&equipment=${e}&keyword=${o}&page=${s}&limit=${a}`,st=()=>U(),D=r=>`${b()}/${r}`,ot=r=>`${b()}/${r}/rating`,at=Object.freeze(Object.defineProperty({__proto__:null,addRatingRequest:ot,baseUrl:y,exerciseInfoRequest:D,exerciseRequest:rt,exerciseUrl:b,filtersUrl:tt,quoteURL:et,subscriptionRequest:st,subscriptionURL:U},Symbol.toStringTag,{value:"Module"})),$=(r,t)=>{let e=new DocumentFragment;for(let o=0;o<r;o++){let s=document.createElement("li");s.setAttribute("data-index",o),s.innerHTML=o+1,s.classList.add("pagination-page"),o===t&&s.classList.add("selected"),e.appendChild(s)}return e},it=()=>{document.querySelectorAll(".pagination").forEach(t=>{if(t.hasAttribute("data-total")){t.innerHTML="";const e=parseInt(t.getAttribute("data-total")),o=parseInt(t.getAttribute("data-current"));t.appendChild($(e,o)),t.addEventListener("click",async a=>{a.target.classList.contains("pagination-page")&&(a.preventDefault(),t.querySelectorAll(".pagination-page").forEach(n=>{n.classList.remove("selected")}),a.target.classList.add("selected"),t.setAttribute("data-current",a.target.getAttribute("data-index")))}),new MutationObserver(a=>{for(let i of a)if(i.type==="attributes"&&i.attributeName==="data-total"){const n=parseInt(t.getAttribute("data-total")),c=parseInt(t.getAttribute("data-current"));t.innerHTML="",t.appendChild($(n,c))}}).observe(t,{attributes:!0})}})};document.addEventListener("DOMContentLoaded",it);function nt(r){let t=JSON.parse(localStorage.getItem("favorites"))||[];t=t.filter(e=>e.id!==r),localStorage.setItem("favorites",JSON.stringify(t))}const H="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z",x=(r=0)=>{let t=Date.now()+Math.random();return`<div style="width: 18px; display: flex; justify-content: center; align-items: center">
    <svg id="starSVG" width="14" height="14" viewBox="0 0 14 14">
      <path
        d="${H}"
        fill="rgba(244, 244, 244, 0.2)"
      />
      <clipPath id="starClip${t}">
        <rect id="fillRect" x="0" y="0" width="${r}%" height="100%" />
      </clipPath>
      <path
        d="${H}"
        fill="#EEA10C"
        clip-path="url(#starClip${t})"
      />
    </svg>
  </div>`},ct=(r,t)=>{r.innerHTML="";const e=5,o=parseFloat(t)||0;for(let s=0;s<e;s++)if(s<Math.floor(o))r.innerHTML+=x(100);else if(s===Math.floor(o)){const a=o%1;r.innerHTML+=x(a*100)}else r.innerHTML+=x(0)},g=class g{constructor(){if(g.instance)return g.instance;this.backdrop=document.querySelector("[data-modal]"),this.closeBtn=document.querySelector("[data-modal-close]"),this.isOpen=!1,this.isFavorite=!1,this.backdrop||console.error("Modal backdrop not found"),this.closeBtn||console.error("Modal close button not found"),this.ratingBackdrop=document.querySelector("[data-rating-modal]"),this.ratingCloseBtn=document.querySelector("[data-rating-close]"),this.ratingForm=document.querySelector(".rating-form"),this.bindEvents(),g.instance=this}bindEvents(){if(this.closeBtn&&this.closeBtn.addEventListener("click",()=>this.close()),this.backdrop&&this.backdrop.addEventListener("click",e=>{e.target===this.backdrop&&this.close()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.isOpen&&this.close()}),this.backdrop){const e=this.backdrop.querySelector(".modal-favorites-btn");e&&e.addEventListener("click",()=>this.toggleFavorite())}const t=this.backdrop.querySelector(".modal-rating-btn");t&&t.addEventListener("click",()=>this.openRatingModal()),this.ratingCloseBtn&&this.ratingCloseBtn.addEventListener("click",()=>this.closeRatingModal()),this.ratingBackdrop&&this.ratingBackdrop.addEventListener("click",e=>{e.target===this.ratingBackdrop&&this.closeRatingModal()}),this.ratingForm&&this.ratingForm.addEventListener("submit",e=>this.handleRatingSubmit(e))}async open(t){this.isOpen=!0,this.currentExerciseId=t._id,this.backdrop&&this.backdrop.classList.remove("is-hidden"),document.body.style.overflow="hidden",await this.updateContent(t);const e=JSON.parse(localStorage.getItem("favorites"))||[];this.isFavorite=e.some(s=>s.id===this.currentExerciseId);const o=this.backdrop.querySelector(".modal-favorites-btn");this.isFavorite?(o.innerHTML=`
        Remove from favorites
        <svg class="modal-icon-heart">
          <use href="./img/icons.svg#icon-trash"></use>
        </svg>
      `,o.classList.add("is-favorite")):(o.innerHTML=`
        Add to favorites
        <svg class="modal-icon-heart">
          <use href="./img/icons.svg#icon-heart"></use>
        </svg>
      `,o.classList.remove("is-favorite"))}close(){this.isOpen=!1,this.backdrop&&this.backdrop.classList.add("is-hidden"),this.ratingBackdrop&&(this.ratingBackdrop.classList.add("is-hidden"),this.ratingForm&&this.ratingForm.reset()),document.onkeydown=this.originalEscapeHandler,document.body.style.overflow=""}async updateContent(t){const{_id:e,name:o,rating:s,target:a,bodyPart:i,equipment:n,popularity:c,burnedCalories:l,description:p,gifUrl:d,time:E=3}=t,L=this.backdrop.querySelector(".modal-title");L&&(L.textContent=_(o));const P=this.backdrop.querySelector(".modal-media-container");P&&d&&(P.innerHTML=`<img src="${d}" alt="${o}" />`);const W={Target:a,"Body Part":i,Equipment:n,Popular:c,"Burned Calories":`${l} / ${E} min`},q=this.backdrop.querySelector(".modal-parameters");q&&(q.innerHTML="",Object.entries(W).forEach(([J,z])=>{const C=document.createElement("li");C.className="parameter-item",C.innerHTML=`
          <p class="modal-parameter-label">${J}</p>
          <p class="modal-parameter-value">${this.capitalizeFirstLetter(z)}</p>
        `,q.appendChild(C)}));const T=this.backdrop.querySelector(".modal-description");T&&(T.textContent=this.capitalizeFirstLetter(p));const F=this.backdrop.querySelector(".rating-value");F&&(F.textContent=s);const I=this.backdrop.querySelector(".rating-stars");I&&ct(I,s)}capitalizeFirstLetter(t){return typeof t=="string"&&t.length>0?t.charAt(0).toUpperCase()+t.slice(1):t}toggleFavorite(){this.isFavorite=!this.isFavorite;const t=this.backdrop.querySelector(".modal-favorites-btn");this.isFavorite?(t.innerHTML=`
        Remove from favorites
        <svg class="modal-icon-heart">
          <use href="./img/icons.svg#icon-trash"></use>
        </svg>
      `,t.classList.add("is-favorite"),this.saveToFavorites()):(t.innerHTML=`
        Add to favorites
        <svg class="modal-icon-heart">
          <use href="./img/icons.svg#icon-heart"></use>
        </svg>
      `,t.classList.remove("is-favorite"),nt(this.currentExerciseId)),t.style.transform="scale(0.95)",setTimeout(()=>{t.style.transform="scale(1)"},200)}saveToFavorites(){const t={id:this.currentExerciseId,name:this.backdrop.querySelector(".modal-title").textContent};let e=JSON.parse(localStorage.getItem("favorites"))||[];e.push(t),localStorage.setItem("favorites",JSON.stringify(e))}openRatingModal(){this.ratingBackdrop&&this.backdrop&&(this.backdrop.classList.add("is-hidden"),this.ratingBackdrop.classList.remove("is-hidden"),this.originalEscapeHandler=document.onkeydown,document.onkeydown=t=>{t.key==="Escape"&&this.closeRatingModal()})}closeRatingModal(){this.ratingBackdrop&&this.backdrop&&(this.ratingBackdrop.classList.add("is-hidden"),this.backdrop.classList.remove("is-hidden"),this.ratingForm&&this.ratingForm.reset(),document.onkeydown=this.originalEscapeHandler)}async handleRatingSubmit(t){t.preventDefault();const e=this.ratingForm.querySelector("#rating-email").value.trim(),o=this.ratingForm.querySelector("#rating-comment").value.trim();if(!e||!o){console.log("Please fill in all fields");return}this.closeRatingModal()}};B(g,"instance",null);let S=g,R=null;document.addEventListener("DOMContentLoaded",()=>{if(!R)try{R=new S}catch(r){console.error("Error initializing modal:",r)}});window.openMenu=function(){document.getElementById("backdrop").classList.add("is-open")};window.closeMenu=function(){document.getElementById("backdrop").classList.remove("is-open")};window.menuLayoutClickHandler=function(t){t.stopPropagation()};const lt=window.location.pathname,O=document.querySelectorAll(".menu-item");lt.includes("favorites.html")&&(O.forEach(r=>r.classList.remove("active")),O[1].classList.add("active"));const k=document.querySelector(".favorites-page-text"),v=document.querySelector(".favorites-cards"),u=document.querySelector(".favorites-pagination");let h=JSON.parse(localStorage.getItem("favorites"))||[],f=[],m=0;const N=async()=>{if(!h||h.length===0){k.style.display="block",v.innerHTML="";return}try{f=[];for(const a of h){const{data:i}=await Y.get(D(a.id));f.push(i)}let r,t;const e=window.innerWidth;e<=768?t=8:e<=1440?t=10:t=f.length;const o=Math.ceil(f.length/t);if(u.setAttribute("data-total",o),o<=1?u.style.display="none":u.style.display="flex",e>1440)r=M(f),k.style.display="none",v.innerHTML=r,j(),u.innerHTML="";else if(r=M(f.slice(m*t,(m+1)*t)),k.style.display="none",v.innerHTML=r,u){u.innerHTML="";const a=$(o,m);u.appendChild(a),u.querySelectorAll(".pagination-page").forEach(i=>{i.addEventListener("click",ut)})}document.querySelectorAll(".workout-start-btn").forEach(a=>{a.addEventListener("click",async i=>{i.preventDefault();const c=a.closest(".workouts-card").dataset.id;try{const l=await fetch(`${b()}/${c}`);if(!l.ok)throw new Error("Failed to fetch exercise details");const p=await l.json();window.modalWindow||(window.modalWindow=new S),window.modalWindow.open(p)}catch(l){console.error("Error opening modal:",l)}})})}catch(r){console.error(r)}};function dt(r){const e=r.target.closest(".workouts-card").getAttribute("data-id");if(h=h.filter(o=>o.id!==e),localStorage.setItem("favorites",JSON.stringify(h)),!h||h.length===0)k.style.display="block",v.innerHTML="";else{const o=Math.ceil(h.length/8);m>=o&&(m=o-1),N()}}function ut(r){const t=Number(r.target.dataset.index);m=t,u.setAttribute("data-current",m),u.querySelectorAll("p").forEach(c=>{c.classList.remove("selected")}),r.target.classList.add("selected");const o=window.innerWidth;let s;if(o<=768)s=8;else if(o<=1440)s=10;else return;const a=t*s,i=a+s,n=f.slice(a,i);v.innerHTML=M(n),j()}function j(){document.querySelectorAll(".rating-container").forEach(e=>e.classList.add("hide")),document.querySelectorAll(".trash-container").forEach(e=>{e.classList.remove("hide"),e.addEventListener("click",dt)})}N();export{S as M,Z as _,b as a,ot as b,M as c,rt as e,tt as f,$ as g,st as s};
//# sourceMappingURL=favorites-B6o4zNnW.js.map
