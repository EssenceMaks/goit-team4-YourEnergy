var Q=Object.defineProperty;var Y=(o,t,e)=>t in o?Q(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var x=(o,t,e)=>Y(o,typeof t!="symbol"?t+"":t,e);import{a as U,i as R}from"./vendor-BT7OT44q.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const G="modulepreload",K=function(o){return"/goit-team4-YourEnergy/"+o},O={},X=function(t,e,r){let s=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),n=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.allSettled(e.map(c=>{if(c=K(c),c in O)return;O[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":G,l||(u.as="script"),u.crossOrigin="",u.href=c,n&&u.setAttribute("nonce",n),document.head.appendChild(u),l)return new Promise((b,L)=>{u.addEventListener("load",b),u.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(i){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=i,window.dispatchEvent(n),!n.defaultPrevented)throw i}return s.then(i=>{for(const n of i||[])n.status==="rejected"&&a(n.reason);return t().catch(a)})};async function tt(){const o=new Date().toISOString().split("T")[0],t=localStorage.getItem("quote"),e=localStorage.getItem("author"),r=localStorage.getItem("quoteDate");if(t&&e&&r===o){document.querySelector(".sidebar-quote").textContent=`${t}`,document.querySelector(".sidebar-quote-author").textContent=`${e}`;return}try{const{quoteURL:s}=await X(async()=>{const{quoteURL:l}=await Promise.resolve().then(()=>it);return{quoteURL:l}},void 0),a=await fetch(s());if(!a.ok)throw new Error("Failed to fetch quote");const i=await a.json(),n=i.quote,c=i.author;document.querySelector(".sidebar-quote").textContent=`${n}`,document.querySelector(".sidebar-quote-author").textContent=`${c}`,localStorage.setItem("quote",n),localStorage.setItem("author",c),localStorage.setItem("quoteDate",o)}catch(s){console.error("Error fetching quote:",s)}}tt();const S="/goit-team4-YourEnergy/assets/icons-BTIkT1Ap.svg";function W(o){return typeof o=="string"&&o.length>0?o.charAt(0).toUpperCase()+o.slice(1):o}function $(o){const t=window.location.pathname;let e="",r="hide";return t.includes("favorites.html")&&(e="hide",r=""),o.sort((s,a)=>s.name.localeCompare(a.name)).map(({_id:s,name:a,burnedCalories:i,bodyPart:n,target:c,gifUrl:l,rating:d})=>{const b=Math.round(d).toFixed(1);return`
          <li class='workouts-card' data-name='${a}' data-id='${s}'>
            <div class="card-header">
              <div class="card-header_left-side">
                <span class="label">workout</span>
                <div class="rating-container ${e}">
                  <span class="rating">${b}</span>
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
                <button class="trash-container ${r}">
                  <svg width="16" height="16">
                    <use href="${S}#icon-trash"></use>
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
              <h3 class="title text-overflow">${W(a)}</h3>
            </div>
            <div class="card-footer">
              <ul class="card-footer_items">
                <li class="card-footer_item">Burned calories: <span class="strong text-overflow item-one">${i}</span></li>
                <li class="card-footer_item">Body Part: <span class="strong text-overflow item-two">${n}</span></li>
                <li class="card-footer_item text-overflow">Target: <span class="strong text-overflow item-three">${c}</span></li>
              </ul>
            </div>
          </li>`}).join("")}const y=()=>"https://your-energy.b.goit.study/api",k=()=>`${y()}/exercises`,et=()=>y()+"/filters",rt=()=>y()+"/quote",_=()=>y()+"/subscription",st=(o,t,e,r,s,a)=>`${k()}?bodypart=${o}&muscles=${t}&equipment=${e}&keyword=${r}&page=${s}&limit=${a}`,ot=()=>_(),j=o=>`${k()}/${o}`,z=async(o,t)=>{console.log("Making request to:",`${y()}/exercises/${o}/rating`),console.log("With data:",t);try{const e={rate:t.rate,email:t.email,review:t.review||""};return await U({method:"PATCH",url:`${y()}/exercises/${o}/rating`,data:e,headers:{"Content-Type":"application/json"}})}catch(e){throw console.error("Rating request error:",e),e}},it=Object.freeze(Object.defineProperty({__proto__:null,addRatingRequest:z,baseUrl:y,exerciseInfoRequest:j,exerciseRequest:st,exerciseUrl:k,filtersUrl:et,quoteURL:rt,subscriptionRequest:ot,subscriptionURL:_},Symbol.toStringTag,{value:"Module"})),B=(o,t)=>{let e=new DocumentFragment;for(let r=0;r<o;r++){let s=document.createElement("li");s.setAttribute("data-index",r),s.innerHTML=r+1,s.classList.add("pagination-page"),r===t&&s.classList.add("selected"),e.appendChild(s)}return e},at=()=>{document.querySelectorAll(".pagination").forEach(t=>{if(t.hasAttribute("data-total")){t.innerHTML="";const e=parseInt(t.getAttribute("data-total")),r=parseInt(t.getAttribute("data-current"));t.appendChild(B(e,r)),t.addEventListener("click",async a=>{a.target.classList.contains("pagination-page")&&(a.preventDefault(),t.querySelectorAll(".pagination-page").forEach(n=>{n.classList.remove("selected")}),a.target.classList.add("selected"),t.setAttribute("data-current",a.target.getAttribute("data-index")))}),new MutationObserver(a=>{for(let i of a)if(i.type==="attributes"&&i.attributeName==="data-total"){const n=parseInt(t.getAttribute("data-total")),c=parseInt(t.getAttribute("data-current"));t.innerHTML="",t.appendChild(B(n,c))}}).observe(t,{attributes:!0})}})};document.addEventListener("DOMContentLoaded",at);const nt=window.location.pathname,D=document.querySelectorAll(".menu-item"),E=document.querySelector(".favorites-page-text"),p=document.querySelector(".favorites-cards"),h=document.querySelector(".favorites-pagination");let g=[],f=[],v=0;nt.includes("favorites.html")&&(D.forEach(o=>o.classList.remove("active")),D[1].classList.add("active"),I());async function I(){if(g=JSON.parse(localStorage.getItem("favorites"))||[],!g||g.length===0){E.style.display="block",p.innerHTML="",p.style.display="none",h.style.display="none";return}try{f=[];for(const i of g){const{data:n}=await U.get(j(i.id));f.push(n)}let t,e;const r=window.innerWidth;r<=768?e=8:r<=1440?e=10:e=f.length;const s=Math.ceil(f.length/e);if(h.setAttribute("data-total",s),s<=1?h.style.display="none":h.style.display="flex",r>1440)t=$(f),E.style.display="none",p.innerHTML=t,h.innerHTML="";else if(t=$(f.slice(v*e,(v+1)*e)),E.style.display="none",p.innerHTML=t,h){h.innerHTML="";const i=B(s,v);h.appendChild(i),h.querySelectorAll(".pagination-page").forEach(n=>{n.addEventListener("click",lt)})}document.querySelectorAll(".workout-start-btn").forEach(i=>{i.addEventListener("click",async n=>{n.preventDefault();const l=i.closest(".workouts-card").dataset.id;try{const d=await fetch(`${k()}/${l}`);if(!d.ok)throw new Error("Failed to fetch exercise details");const u=await d.json();window.modalWindow||(window.modalWindow=new F),window.modalWindow.open(u)}catch(d){console.error("Error opening modal:",d)}})})}catch(t){console.error(t)}document.querySelectorAll(".trash-container").forEach(t=>{t.classList.remove("hide"),t.addEventListener("click",ct)})}function ct(o){const e=o.target.closest(".workouts-card").getAttribute("data-id");if(g=g.filter(r=>r.id!==e),localStorage.setItem("favorites",JSON.stringify(g)),!g||g.length===0)E.style.display="block",p.innerHTML="",p.style.display="none",h.style.display="none";else{const r=Math.ceil(g.length/8);v>=r&&(v=r-1),I()}}function lt(o){const t=Number(o.target.dataset.index);v=t,h.setAttribute("data-current",v),h.querySelectorAll("li").forEach(c=>{c.classList.remove("selected")}),o.target.classList.add("selected");const r=window.innerWidth;let s;if(r<=768)s=8;else if(r<=1440)s=10;else return;const a=t*s,i=a+s,n=f.slice(a,i);p.innerHTML=$(n)}function dt(o){let t=JSON.parse(localStorage.getItem("favorites"))||[];t=t.filter(e=>e.id!==o),localStorage.setItem("favorites",JSON.stringify(t)),I()}const N="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z",M=(o=0)=>{let t=Date.now()+Math.random();return`<div style="width: 18px; display: flex; justify-content: center; align-items: center">
    <svg id="starSVG" width="14" height="14" viewBox="0 0 14 14">
      <path
        d="${N}"
        fill="rgba(244, 244, 244, 0.2)"
      />
      <clipPath id="starClip${t}">
        <rect id="fillRect" x="0" y="0" width="${o}%" height="100%" />
      </clipPath>
      <path
        d="${N}"
        fill="#EEA10C"
        clip-path="url(#starClip${t})"
      />
    </svg>
  </div>`},ut=(o,t)=>{o.innerHTML="";const e=5,r=parseFloat(t)||0;for(let s=0;s<e;s++)if(s<Math.floor(r))o.innerHTML+=M(100);else if(s===Math.floor(r)){const a=r%1;o.innerHTML+=M(a*100)}else o.innerHTML+=M(0)},w=class w{constructor(){if(w.instance)return w.instance;this.backdrop=document.querySelector("[data-modal]"),this.closeBtn=document.querySelector("[data-modal-close]"),this.isOpen=!1,this.isFavorite=!1,this.backdrop||console.error("Modal backdrop not found"),this.closeBtn||console.error("Modal close button not found"),this.ratingBackdrop=document.querySelector("[data-rating-modal]"),this.ratingCloseBtn=document.querySelector("[data-rating-close]"),this.ratingForm=document.querySelector(".rating-form"),this.bindEvents(),w.instance=this}bindEvents(){if(this.closeBtn&&this.closeBtn.addEventListener("click",()=>this.close()),this.backdrop&&this.backdrop.addEventListener("click",e=>{e.target===this.backdrop&&this.close()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.isOpen&&this.close()}),this.backdrop){const e=this.backdrop.querySelector(".modal-favorites-btn");e&&e.addEventListener("click",()=>this.toggleFavorite())}const t=this.backdrop.querySelector(".modal-rating-btn");t&&t.addEventListener("click",()=>this.openRatingModal()),this.ratingCloseBtn&&this.ratingCloseBtn.addEventListener("click",()=>this.closeRatingModal()),this.ratingBackdrop&&this.ratingBackdrop.addEventListener("click",e=>{e.target===this.ratingBackdrop&&this.closeRatingModal()}),this.ratingForm&&this.ratingForm.addEventListener("submit",e=>this.handleRatingSubmit(e))}async open(t){this.isOpen=!0,this.currentExerciseId=t._id,this.backdrop&&this.backdrop.classList.remove("is-hidden"),document.body.style.overflow="hidden",await this.updateContent(t);const e=JSON.parse(localStorage.getItem("favorites"))||[];this.isFavorite=e.some(s=>s.id===this.currentExerciseId);const r=this.backdrop.querySelector(".modal-favorites-btn");this.isFavorite?(r.innerHTML=`
        Remove from favorites
        <svg class="modal-icon-heart">
          <use href="./img/icons.svg#icon-trash"></use>
        </svg>
      `,r.classList.add("is-favorite")):(r.innerHTML=`
        Add to favorites
        <svg class="modal-icon-heart">
          <use href="./img/icons.svg#icon-heart"></use>
        </svg>
      `,r.classList.remove("is-favorite"))}close(){this.isOpen=!1,this.backdrop&&this.backdrop.classList.add("is-hidden"),this.ratingBackdrop&&(this.ratingBackdrop.classList.add("is-hidden"),this.ratingForm&&this.ratingForm.reset()),document.onkeydown=this.originalEscapeHandler,document.body.style.overflow=""}async updateContent(t){const{_id:e,name:r,rating:s,target:a,bodyPart:i,equipment:n,popularity:c,burnedCalories:l,description:d,gifUrl:u,time:b=3}=t,L=this.backdrop.querySelector(".modal-title");L&&(L.textContent=W(r));const P=this.backdrop.querySelector(".modal-media-container");P&&u&&(P.innerHTML=`<img src="${u}" alt="${r}" />`);const J={Target:a,"Body Part":i,Equipment:n,Popular:c,"Burned Calories":`${l} / ${b} min`},q=this.backdrop.querySelector(".modal-parameters");q&&(q.innerHTML="",Object.entries(J).forEach(([V,Z])=>{const C=document.createElement("li");C.className="parameter-item",C.innerHTML=`
          <p class="modal-parameter-label">${V}</p>
          <p class="modal-parameter-value">${this.capitalizeFirstLetter(Z)}</p>
        `,q.appendChild(C)}));const T=this.backdrop.querySelector(".modal-description");T&&(T.textContent=this.capitalizeFirstLetter(d));const A=this.backdrop.querySelector(".rating-value");A&&(A.textContent=s);const H=this.backdrop.querySelector(".rating-stars");H&&ut(H,s)}capitalizeFirstLetter(t){return typeof t=="string"&&t.length>0?t.charAt(0).toUpperCase()+t.slice(1):t}toggleFavorite(){this.isFavorite=!this.isFavorite;const t=this.backdrop.querySelector(".modal-favorites-btn");this.isFavorite?(t.innerHTML=`
        Remove from favorites
        <svg class="modal-icon-heart">
          <use href="./img/icons.svg#icon-trash"></use>
        </svg>
      `,t.classList.add("is-favorite"),this.saveToFavorites()):(t.innerHTML=`
        Add to favorites
        <svg class="modal-icon-heart">
          <use href="./img/icons.svg#icon-heart"></use>
        </svg>
      `,t.classList.remove("is-favorite"),dt(this.currentExerciseId)),t.style.transform="scale(0.95)",setTimeout(()=>{t.style.transform="scale(1)"},200)}saveToFavorites(){const t={id:this.currentExerciseId,name:this.backdrop.querySelector(".modal-title").textContent};let e=JSON.parse(localStorage.getItem("favorites"))||[];e.push(t),localStorage.setItem("favorites",JSON.stringify(e))}openRatingModal(){this.ratingBackdrop&&this.backdrop&&(window.modalWindowRating||(window.modalWindowRating=new ModalWindowRating),window.modalWindowRating.openRatingModal(this.currentExerciseId))}closeRatingModal(){this.ratingBackdrop&&this.backdrop&&(this.ratingBackdrop.classList.add("is-hidden"),this.backdrop.classList.remove("is-hidden"),this.ratingForm&&this.ratingForm.reset(),document.onkeydown=this.originalEscapeHandler)}async handleRatingSubmit(t){t.preventDefault();const e=this.ratingForm.querySelector("#rating-email").value.trim(),r=this.ratingForm.querySelector("#rating-comment").value.trim();if(!e||!r){console.log("Please fill in all fields");return}this.closeRatingModal()}};x(w,"instance",null);let F=w;window.openMenu=function(){document.getElementById("backdrop").classList.add("is-open")};window.closeMenu=function(){document.getElementById("backdrop").classList.remove("is-open")};window.menuLayoutClickHandler=function(t){t.stopPropagation()};var m;let ht=(m=class{constructor(){if(m.instance)return m.instance;this.ratingBackdrop=document.querySelector("[data-rating-modal]"),this.ratingCloseBtn=document.querySelector("[data-rating-close]"),this.ratingForm=document.querySelector(".rating-form"),this.backdrop=document.querySelector("[data-modal]"),this.ratingCounter=document.querySelector(".rating-form-value"),this.currentExerciseId=null,this.bindEvents(),m.instance=this}bindEvents(){this.ratingCloseBtn&&this.ratingCloseBtn.addEventListener("click",()=>this.closeRatingModal()),this.ratingBackdrop&&this.ratingBackdrop.addEventListener("click",e=>{e.target===this.ratingBackdrop&&this.closeRatingModal()}),document.querySelectorAll(".rating-form-radio").forEach(e=>{e.addEventListener("mouseover",()=>{this.updateRatingDisplay(e.value)}),e.addEventListener("mouseout",()=>{const r=document.querySelector(".rating-form-radio:checked");this.updateRatingDisplay(r?r.value:"0.0")}),e.addEventListener("change",()=>{this.updateRatingDisplay(e.value)})}),this.ratingForm&&this.ratingForm.addEventListener("submit",e=>this.handleRatingSubmit(e))}updateRatingDisplay(t){this.ratingCounter&&(this.ratingCounter.textContent=parseFloat(t).toFixed(1))}openRatingModal(t){this.ratingBackdrop&&this.backdrop&&(this.currentExerciseId=t,console.log("Setting exercise ID:",t),this.backdrop.classList.add("is-hidden"),this.ratingBackdrop.classList.remove("is-hidden"),this.updateRatingDisplay("0.0"),document.querySelectorAll(".rating-form-radio").forEach(r=>r.checked=!1))}closeRatingModal(){this.ratingBackdrop&&this.backdrop&&(this.ratingBackdrop.classList.add("is-hidden"),this.backdrop.classList.remove("is-hidden"),this.ratingForm&&(this.ratingForm.reset(),this.updateRatingDisplay("0.0")))}async handleRatingSubmit(t){var n,c;if(t.preventDefault(),!this.currentExerciseId){this.showNotification("Exercise ID is missing","error");return}const e=this.ratingForm.querySelector("#rating-email").value.trim(),r=this.ratingForm.querySelector("#rating-comment").value.trim(),s=document.querySelector(".rating-form-radio:checked");if(!e||!r||!s){this.showNotification("Please fill in all fields","error");return}const a=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;if(!a.test(e)){this.showNotification("Please enter a valid email","error");return}const i={rate:parseFloat(s.value),email:e.toLowerCase(),review:r.trim()};console.log("Validation check:",{isRateValid:Number.isFinite(i.rate)&&i.rate>=1&&i.rate<=5,isEmailValid:a.test(i.email),isReviewValid:i.review.length>0});try{console.log("Exercise ID:",this.currentExerciseId),console.log("Rating data:",i),console.log("Request URL:",`${k()}/${this.currentExerciseId}/rating`);const l=await z(this.currentExerciseId,i);console.log("Full response:",l),l.data&&(this.closeRatingModal(),this.showNotification("Rating added successfully","success"))}catch(l){let d="Failed to add rating";(c=(n=l.response)==null?void 0:n.data)!=null&&c.message&&(l.response.data.message.includes("email already exists")?d="Such email already exists":d=l.response.data.message),this.showNotification(d,"error")}}showNotification(t,e){const r={position:"topRight",timeout:3e3,close:!1,closeOnClick:!0};switch(e){case"success":R.success({...r,message:t,backgroundColor:"#64B880",messageColor:"#fff"});break;case"error":R.error({...r,message:t,backgroundColor:"#EF4040",messageColor:"#fff"});break;default:R.info({...r,message:t})}}},x(m,"instance",null),m);document.addEventListener("DOMContentLoaded",()=>{window.modalWindowRating=new ht});export{F as M,X as _,k as a,$ as c,st as e,et as f,B as g,ot as s};
//# sourceMappingURL=modal-window-rating-U6qqcqDy.js.map
