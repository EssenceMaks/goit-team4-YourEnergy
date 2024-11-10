var M=Object.defineProperty;var I=(r,t,e)=>t in r?M(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var L=(r,t,e)=>I(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const d=()=>"https://your-energy.b.goit.study/api",w=()=>d()+"/exercises",N=()=>d()+"/filters",O=()=>d()+"/quote",T=()=>d()+"/subscription",D=(r,t,e,i,s,o)=>`${w()}?bodypart=${r}&muscles=${t}&equipment=${e}&keyword=${i}&page=${s}&limit=${o}`,U=()=>T(),z=r=>`${w()}/${r}`;async function A(){const r=new Date().toISOString().split("T")[0],t=localStorage.getItem("quote"),e=localStorage.getItem("author"),i=localStorage.getItem("quoteDate");if(t&&e&&i===r){document.querySelector(".sidebar-quote").textContent=`${t}`,document.querySelector(".sidebar-quote-author").textContent=`${e}`;return}try{const s=await fetch(O());if(!s.ok)throw new Error("Failed to fetch quote");const o=await s.json(),a=o.quote,n=o.author;document.querySelector(".sidebar-quote").textContent=`${a}`,document.querySelector(".sidebar-quote-author").textContent=`${n}`,localStorage.setItem("quote",a),localStorage.setItem("author",n),localStorage.setItem("quoteDate",r)}catch(s){console.error("Error fetching quote:",s)}}A();const p="/goit-team4-YourEnergy/assets/icons-BTIkT1Ap.svg";function E(r){return typeof r=="string"&&r.length>0?r.charAt(0).toUpperCase()+r.slice(1):r}function J(r){return r.sort((t,e)=>t.name.localeCompare(e.name)).map(({_id:t,name:e,burnedCalories:i,bodyPart:s,target:o,gifUrl:a,rating:n})=>{const u=Math.round(n).toFixed(1);return`
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
                    <use x="0" y="0" href="${p}#icon-Star"></use>
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
                    <use x="0" y="0" href="${p}#icon-arrow"></use>
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
                <use x="0" y="0" href="${p}#icon-running"></use>
              </svg>
              <h3 class="title text-overflow">${E(e)}</h3>
            </div>
            <div class="card-footer">
              <ul class="card-footer_items">
                <li class="card-footer_item">Burned calories: <span class="strong text-overflow item-one">${i}</span></li>
                <li class="card-footer_item">Body Part: <span class="strong text-overflow item-two">${s}</span></li>
                <li class="card-footer_item text-overflow">Target: <span class="strong text-overflow item-three">${o}</span></li>
              </ul>
            </div>
          </li>`}).join("")}const S=(r,t)=>{let e=new DocumentFragment;for(let i=0;i<r;i++){let s=document.createElement("p");s.setAttribute("data-index",i),s.innerHTML=i+1,s.classList.add("pagination-page"),i===t&&s.classList.add("selected"),e.appendChild(s)}return e},R=()=>{document.querySelectorAll(".pagination").forEach(t=>{if(t.hasAttribute("data-total")){t.innerHTML="";const e=parseInt(t.getAttribute("data-total")),i=parseInt(t.getAttribute("data-current"));t.appendChild(S(e,i)),t.addEventListener("click",async o=>{o.target.classList.contains("pagination-page")&&(o.preventDefault(),t.querySelectorAll(".pagination-page").forEach(n=>{n.classList.remove("selected")}),o.target.classList.add("selected"),t.setAttribute("data-current",o.target.getAttribute("data-index")))}),new MutationObserver(o=>{for(let a of o)if(a.type==="attributes"&&a.attributeName==="data-total"){const n=parseInt(t.getAttribute("data-total")),l=parseInt(t.getAttribute("data-current"));t.innerHTML="",t.appendChild(S(n,l))}}).observe(t,{attributes:!0})}})};document.addEventListener("DOMContentLoaded",R);function H(r){let t=JSON.parse(localStorage.getItem("favorites"))||[];t=t.filter(e=>e.id!==r),localStorage.setItem("favorites",JSON.stringify(t))}const c=class c{constructor(){if(c.instance)return c.instance;this.backdrop=document.querySelector("[data-modal]"),this.closeBtn=document.querySelector("[data-modal-close]"),this.isOpen=!1,this.isFavorite=!1,this.backdrop||console.error("Modal backdrop not found"),this.closeBtn||console.error("Modal close button not found"),this.ratingBackdrop=document.querySelector("[data-rating-modal]"),this.ratingCloseBtn=document.querySelector("[data-rating-close]"),this.ratingForm=document.querySelector(".rating-form"),this.bindEvents(),c.instance=this}bindEvents(){if(this.closeBtn&&this.closeBtn.addEventListener("click",()=>this.close()),this.backdrop&&this.backdrop.addEventListener("click",e=>{e.target===this.backdrop&&this.close()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.isOpen&&this.close()}),this.backdrop){const e=this.backdrop.querySelector(".modal-favorites-btn");e&&e.addEventListener("click",()=>this.toggleFavorite())}const t=this.backdrop.querySelector(".modal-rating-btn");t&&t.addEventListener("click",()=>this.openRatingModal()),this.ratingCloseBtn&&this.ratingCloseBtn.addEventListener("click",()=>this.closeRatingModal()),this.ratingBackdrop&&this.ratingBackdrop.addEventListener("click",e=>{e.target===this.ratingBackdrop&&this.closeRatingModal()}),this.ratingForm&&this.ratingForm.addEventListener("submit",e=>this.handleRatingSubmit(e))}async open(t){this.isOpen=!0,this.currentExerciseId=t._id,this.backdrop&&this.backdrop.classList.remove("is-hidden"),document.body.style.overflow="hidden",await this.updateContent(t);const e=JSON.parse(localStorage.getItem("favorites"))||[];this.isFavorite=e.some(s=>s.id===this.currentExerciseId);const i=this.backdrop.querySelector(".modal-favorites-btn");this.isFavorite?(i.innerHTML=`
        Remove from favorites
        <svg class="modal-icon-heart">
          <use href="./img/icons.svg#icon-trash"></use>
        </svg>
      `,i.classList.add("is-favorite")):(i.innerHTML=`
        Add to favorites
        <svg class="modal-icon-heart">
          <use href="./img/icons.svg#icon-heart"></use>
        </svg>
      `,i.classList.remove("is-favorite"))}close(){this.isOpen=!1,this.backdrop&&this.backdrop.classList.add("is-hidden"),this.ratingBackdrop&&(this.ratingBackdrop.classList.add("is-hidden"),this.ratingForm&&this.ratingForm.reset()),document.onkeydown=this.originalEscapeHandler,document.body.style.overflow=""}async updateContent(t){const{_id:e,name:i,rating:s,target:o,bodyPart:a,equipment:n,popularity:l,burnedCalories:u,description:x,gifUrl:g,time:B=3}=t,v=this.backdrop.querySelector(".modal-title");v&&(v.textContent=E(i));const b=this.backdrop.querySelector(".modal-media-container");b&&g&&(b.innerHTML=`<img src="${g}" alt="${i}" />`);const F={Target:o,"Body Part":a,Equipment:n,Popular:l,"Burned Calories":`${u} / ${B} min`},h=this.backdrop.querySelector(".modal-parameters");h&&(h.innerHTML="",Object.entries(F).forEach(([$,C])=>{const m=document.createElement("li");m.className="parameter-item",m.innerHTML=`
          <p class="modal-parameter-label">${$}</p>
          <p class="modal-parameter-value">${this.capitalizeFirstLetter(C)}</p>
        `,h.appendChild(m)}));const y=this.backdrop.querySelector(".modal-description");y&&(y.textContent=this.capitalizeFirstLetter(x));const k=this.backdrop.querySelector(".rating-value");k&&(k.textContent=s)}capitalizeFirstLetter(t){return typeof t=="string"&&t.length>0?t.charAt(0).toUpperCase()+t.slice(1):t}toggleFavorite(){this.isFavorite=!this.isFavorite;const t=this.backdrop.querySelector(".modal-favorites-btn");this.isFavorite?(t.innerHTML=`
        Remove from favorites
        <svg class="modal-icon-heart">
          <use href="./img/icons.svg#icon-trash"></use>
        </svg>
      `,t.classList.add("is-favorite"),this.saveToFavorites()):(t.innerHTML=`
        Add to favorites
        <svg class="modal-icon-heart">
          <use href="./img/icons.svg#icon-heart"></use>
        </svg>
      `,t.classList.remove("is-favorite"),H(this.currentExerciseId)),t.style.transform="scale(0.95)",setTimeout(()=>{t.style.transform="scale(1)"},200)}saveToFavorites(){const t={id:this.currentExerciseId,name:this.backdrop.querySelector(".modal-title").textContent};let e=JSON.parse(localStorage.getItem("favorites"))||[];e.push(t),localStorage.setItem("favorites",JSON.stringify(e))}openRatingModal(){this.ratingBackdrop&&this.backdrop&&(this.backdrop.classList.add("is-hidden"),this.ratingBackdrop.classList.remove("is-hidden"),this.originalEscapeHandler=document.onkeydown,document.onkeydown=t=>{t.key==="Escape"&&this.closeRatingModal()})}closeRatingModal(){this.ratingBackdrop&&this.backdrop&&(this.ratingBackdrop.classList.add("is-hidden"),this.backdrop.classList.remove("is-hidden"),this.ratingForm&&this.ratingForm.reset(),document.onkeydown=this.originalEscapeHandler)}async handleRatingSubmit(t){t.preventDefault();const e=this.ratingForm.querySelector("#rating-email").value.trim(),i=this.ratingForm.querySelector("#rating-comment").value.trim();if(!e||!i){console.log("Please fill in all fields");return}this.closeRatingModal()}};L(c,"instance",null);let f=c,q=null;document.addEventListener("DOMContentLoaded",()=>{if(!q)try{q=new f}catch(r){console.error("Error initializing modal:",r)}});window.openMenu=function(){document.getElementById("backdrop").classList.add("is-open")};window.closeMenu=function(){document.getElementById("backdrop").classList.remove("is-open")};window.menuLayoutClickHandler=function(t){t.stopPropagation()};export{f as M,w as a,z as b,J as c,D as e,N as f,S as g,U as s};
//# sourceMappingURL=menu-DgQbA_Y5.js.map
