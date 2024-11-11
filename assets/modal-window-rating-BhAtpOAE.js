var Y=Object.defineProperty;var G=(r,t,e)=>t in r?Y(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var x=(r,t,e)=>G(r,typeof t!="symbol"?t+"":t,e);import{a as U,i as R}from"./vendor-BT7OT44q.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();const K="modulepreload",X=function(r){return"/goit-team4-YourEnergy/"+r},O={},tt=function(t,e,s){let o=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),n=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(e.map(c=>{if(c=X(c),c in O)return;O[c]=!0;const l=c.endsWith(".css"),g=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${g}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":K,l||(u.as="script"),u.crossOrigin="",u.href=c,n&&u.setAttribute("nonce",n),document.head.appendChild(u),l)return new Promise((E,k)=>{u.addEventListener("load",E),u.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(a){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=a,window.dispatchEvent(n),!n.defaultPrevented)throw a}return o.then(a=>{for(const n of a||[])n.status==="rejected"&&i(n.reason);return t().catch(i)})};async function et(){const r=new Date().toISOString().split("T")[0],t=localStorage.getItem("quote"),e=localStorage.getItem("author"),s=localStorage.getItem("quoteDate");if(t&&e&&s===r){document.querySelector(".sidebar-quote").textContent=`${t}`,document.querySelector(".sidebar-quote-author").textContent=`${e}`;return}try{const{quoteURL:o}=await tt(async()=>{const{quoteURL:l}=await Promise.resolve().then(()=>at);return{quoteURL:l}},void 0),i=await fetch(o());if(!i.ok)throw new Error("Failed to fetch quote");const a=await i.json(),n=a.quote,c=a.author;document.querySelector(".sidebar-quote").textContent=`${n}`,document.querySelector(".sidebar-quote-author").textContent=`${c}`,localStorage.setItem("quote",n),localStorage.setItem("author",c),localStorage.setItem("quoteDate",r)}catch(o){console.error("Error fetching quote:",o)}}et();const L="/goit-team4-YourEnergy/assets/icons-BTIkT1Ap.svg";function W(r){return typeof r=="string"&&r.length>0?r.charAt(0).toUpperCase()+r.slice(1):r}function B(r){return r.sort((t,e)=>t.name.localeCompare(e.name)).map(({_id:t,name:e,burnedCalories:s,bodyPart:o,target:i,gifUrl:a,rating:n})=>{const l=Math.round(n).toFixed(1);return`
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
                    <use x="0" y="0" href="${L}#icon-Star"></use>
                  </svg>
                </div>
                <button class="trash-container hide">
                  <svg width="16" height="16">
                    <use href="${L}#icon-trash"></use>
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
                    <use x="0" y="0" href="${L}#icon-arrow"></use>
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
                <use x="0" y="0" href="${L}#icon-running"></use>
              </svg>
              <h3 class="title text-overflow">${W(e)}</h3>
            </div>
            <div class="card-footer">
              <ul class="card-footer_items">
                <li class="card-footer_item">Burned calories: <span class="strong text-overflow item-one">${s}</span></li>
                <li class="card-footer_item">Body Part: <span class="strong text-overflow item-two">${o}</span></li>
                <li class="card-footer_item text-overflow">Target: <span class="strong text-overflow item-three">${i}</span></li>
              </ul>
            </div>
          </li>`}).join("")}const y=()=>"https://your-energy.b.goit.study/api",b=()=>`${y()}/exercises`,rt=()=>y()+"/filters",st=()=>y()+"/quote",_=()=>y()+"/subscription",ot=(r,t,e,s,o,i)=>`${b()}?bodypart=${r}&muscles=${t}&equipment=${e}&keyword=${s}&page=${o}&limit=${i}`,it=()=>_(),j=r=>`${b()}/${r}`,z=async(r,t)=>{console.log("Making request to:",`${y()}/exercises/${r}/rating`),console.log("With data:",t);try{const e={rate:t.rate,email:t.email,review:t.review||""};return await U({method:"PATCH",url:`${y()}/exercises/${r}/rating`,data:e,headers:{"Content-Type":"application/json"}})}catch(e){throw console.error("Rating request error:",e),e}},at=Object.freeze(Object.defineProperty({__proto__:null,addRatingRequest:z,baseUrl:y,exerciseInfoRequest:j,exerciseRequest:ot,exerciseUrl:b,filtersUrl:rt,quoteURL:st,subscriptionRequest:it,subscriptionURL:_},Symbol.toStringTag,{value:"Module"})),F=(r,t)=>{let e=new DocumentFragment;for(let s=0;s<r;s++){let o=document.createElement("li");o.setAttribute("data-index",s),o.innerHTML=s+1,o.classList.add("pagination-page"),s===t&&o.classList.add("selected"),e.appendChild(o)}return e},nt=()=>{document.querySelectorAll(".pagination").forEach(t=>{if(t.hasAttribute("data-total")){t.innerHTML="";const e=parseInt(t.getAttribute("data-total")),s=parseInt(t.getAttribute("data-current"));t.appendChild(F(e,s)),t.addEventListener("click",async i=>{i.target.classList.contains("pagination-page")&&(i.preventDefault(),t.querySelectorAll(".pagination-page").forEach(n=>{n.classList.remove("selected")}),i.target.classList.add("selected"),t.setAttribute("data-current",i.target.getAttribute("data-index")))}),new MutationObserver(i=>{for(let a of i)if(a.type==="attributes"&&a.attributeName==="data-total"){const n=parseInt(t.getAttribute("data-total")),c=parseInt(t.getAttribute("data-current"));t.innerHTML="",t.appendChild(F(n,c))}}).observe(t,{attributes:!0})}})};document.addEventListener("DOMContentLoaded",nt);const ct=window.location.pathname,D=document.querySelectorAll(".menu-item"),S=document.querySelector(".favorites-page-text"),p=document.querySelector(".favorites-cards"),d=document.querySelector(".favorites-pagination");let h=[],f=[],v=0;ct.includes("favorites.html")&&(D.forEach(r=>r.classList.remove("active")),D[1].classList.add("active"),I());async function I(){if(h=JSON.parse(localStorage.getItem("favorites"))||[],!h||h.length===0){S.style.display="block",p.innerHTML="",p.style.display="none",d.style.display="none";return}try{f=[];for(const i of h){const{data:a}=await U.get(j(i.id));f.push(a)}let r,t;const e=window.innerWidth;e<=768?t=8:e<=1440?t=10:t=f.length;const s=Math.ceil(f.length/t);if(d.setAttribute("data-total",s),s<=1?d.style.display="none":d.style.display="flex",e>1440)r=B(f),S.style.display="none",p.innerHTML=r,J(),d.innerHTML="";else if(r=B(f.slice(v*t,(v+1)*t)),S.style.display="none",p.innerHTML=r,d){d.innerHTML="";const i=F(s,v);d.appendChild(i),d.querySelectorAll(".pagination-page").forEach(a=>{a.addEventListener("click",dt)})}document.querySelectorAll(".workout-start-btn").forEach(i=>{i.addEventListener("click",async a=>{a.preventDefault();const c=i.closest(".workouts-card").dataset.id;try{const l=await fetch(`${b()}/${c}`);if(!l.ok)throw new Error("Failed to fetch exercise details");const g=await l.json();window.modalWindow||(window.modalWindow=new $),window.modalWindow.open(g)}catch(l){console.error("Error opening modal:",l)}})})}catch(r){console.error(r)}}function lt(r){const e=r.target.closest(".workouts-card").getAttribute("data-id");if(h=h.filter(s=>s.id!==e),localStorage.setItem("favorites",JSON.stringify(h)),!h||h.length===0)S.style.display="block",p.innerHTML="",p.style.display="none",d.style.display="none";else{const s=Math.ceil(h.length/8);v>=s&&(v=s-1),I()}}function dt(r){const t=Number(r.target.dataset.index);v=t,d.setAttribute("data-current",v),d.querySelectorAll("li").forEach(c=>{c.classList.remove("selected")}),r.target.classList.add("selected");const s=window.innerWidth;let o;if(s<=768)o=8;else if(s<=1440)o=10;else return;const i=t*o,a=i+o,n=f.slice(i,a);p.innerHTML=B(n),J()}function J(){document.querySelectorAll(".rating-container").forEach(e=>e.classList.add("hide")),document.querySelectorAll(".trash-container").forEach(e=>{e.classList.remove("hide"),e.addEventListener("click",lt)})}function ut(r){let t=JSON.parse(localStorage.getItem("favorites"))||[];t=t.filter(e=>e.id!==r),localStorage.setItem("favorites",JSON.stringify(t)),I()}const N="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z",M=(r=0)=>{let t=Date.now()+Math.random();return`<div style="width: 18px; display: flex; justify-content: center; align-items: center">
    <svg id="starSVG" width="14" height="14" viewBox="0 0 14 14">
      <path
        d="${N}"
        fill="rgba(244, 244, 244, 0.2)"
      />
      <clipPath id="starClip${t}">
        <rect id="fillRect" x="0" y="0" width="${r}%" height="100%" />
      </clipPath>
      <path
        d="${N}"
        fill="#EEA10C"
        clip-path="url(#starClip${t})"
      />
    </svg>
  </div>`},ht=(r,t)=>{r.innerHTML="";const e=5,s=parseFloat(t)||0;for(let o=0;o<e;o++)if(o<Math.floor(s))r.innerHTML+=M(100);else if(o===Math.floor(s)){const i=s%1;r.innerHTML+=M(i*100)}else r.innerHTML+=M(0)},w=class w{constructor(){if(w.instance)return w.instance;this.backdrop=document.querySelector("[data-modal]"),this.closeBtn=document.querySelector("[data-modal-close]"),this.isOpen=!1,this.isFavorite=!1,this.backdrop||console.error("Modal backdrop not found"),this.closeBtn||console.error("Modal close button not found"),this.ratingBackdrop=document.querySelector("[data-rating-modal]"),this.ratingCloseBtn=document.querySelector("[data-rating-close]"),this.ratingForm=document.querySelector(".rating-form"),this.bindEvents(),w.instance=this}bindEvents(){if(this.closeBtn&&this.closeBtn.addEventListener("click",()=>this.close()),this.backdrop&&this.backdrop.addEventListener("click",e=>{e.target===this.backdrop&&this.close()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.isOpen&&this.close()}),this.backdrop){const e=this.backdrop.querySelector(".modal-favorites-btn");e&&e.addEventListener("click",()=>this.toggleFavorite())}const t=this.backdrop.querySelector(".modal-rating-btn");t&&t.addEventListener("click",()=>this.openRatingModal()),this.ratingCloseBtn&&this.ratingCloseBtn.addEventListener("click",()=>this.closeRatingModal()),this.ratingBackdrop&&this.ratingBackdrop.addEventListener("click",e=>{e.target===this.ratingBackdrop&&this.closeRatingModal()}),this.ratingForm&&this.ratingForm.addEventListener("submit",e=>this.handleRatingSubmit(e))}async open(t){this.isOpen=!0,this.currentExerciseId=t._id,this.backdrop&&this.backdrop.classList.remove("is-hidden"),document.body.style.overflow="hidden",await this.updateContent(t);const e=JSON.parse(localStorage.getItem("favorites"))||[];this.isFavorite=e.some(o=>o.id===this.currentExerciseId);const s=this.backdrop.querySelector(".modal-favorites-btn");this.isFavorite?(s.innerHTML=`
        Remove from favorites
        <svg class="modal-icon-heart">
          <use href="./img/icons.svg#icon-trash"></use>
        </svg>
      `,s.classList.add("is-favorite")):(s.innerHTML=`
        Add to favorites
        <svg class="modal-icon-heart">
          <use href="./img/icons.svg#icon-heart"></use>
        </svg>
      `,s.classList.remove("is-favorite"))}close(){this.isOpen=!1,this.backdrop&&this.backdrop.classList.add("is-hidden"),this.ratingBackdrop&&(this.ratingBackdrop.classList.add("is-hidden"),this.ratingForm&&this.ratingForm.reset()),document.onkeydown=this.originalEscapeHandler,document.body.style.overflow=""}async updateContent(t){const{_id:e,name:s,rating:o,target:i,bodyPart:a,equipment:n,popularity:c,burnedCalories:l,description:g,gifUrl:u,time:E=3}=t,k=this.backdrop.querySelector(".modal-title");k&&(k.textContent=W(s));const P=this.backdrop.querySelector(".modal-media-container");P&&u&&(P.innerHTML=`<img src="${u}" alt="${s}" />`);const V={Target:i,"Body Part":a,Equipment:n,Popular:c,"Burned Calories":`${l} / ${E} min`},q=this.backdrop.querySelector(".modal-parameters");q&&(q.innerHTML="",Object.entries(V).forEach(([Z,Q])=>{const C=document.createElement("li");C.className="parameter-item",C.innerHTML=`
          <p class="modal-parameter-label">${Z}</p>
          <p class="modal-parameter-value">${this.capitalizeFirstLetter(Q)}</p>
        `,q.appendChild(C)}));const T=this.backdrop.querySelector(".modal-description");T&&(T.textContent=this.capitalizeFirstLetter(g));const A=this.backdrop.querySelector(".rating-value");A&&(A.textContent=o);const H=this.backdrop.querySelector(".rating-stars");H&&ht(H,o)}capitalizeFirstLetter(t){return typeof t=="string"&&t.length>0?t.charAt(0).toUpperCase()+t.slice(1):t}toggleFavorite(){this.isFavorite=!this.isFavorite;const t=this.backdrop.querySelector(".modal-favorites-btn");this.isFavorite?(t.innerHTML=`
        Remove from favorites
        <svg class="modal-icon-heart">
          <use href="./img/icons.svg#icon-trash"></use>
        </svg>
      `,t.classList.add("is-favorite"),this.saveToFavorites()):(t.innerHTML=`
        Add to favorites
        <svg class="modal-icon-heart">
          <use href="./img/icons.svg#icon-heart"></use>
        </svg>
      `,t.classList.remove("is-favorite"),ut(this.currentExerciseId)),t.style.transform="scale(0.95)",setTimeout(()=>{t.style.transform="scale(1)"},200)}saveToFavorites(){const t={id:this.currentExerciseId,name:this.backdrop.querySelector(".modal-title").textContent};let e=JSON.parse(localStorage.getItem("favorites"))||[];e.push(t),localStorage.setItem("favorites",JSON.stringify(e))}openRatingModal(){this.ratingBackdrop&&this.backdrop&&(window.modalWindowRating||(window.modalWindowRating=new ModalWindowRating),window.modalWindowRating.openRatingModal(this.currentExerciseId))}closeRatingModal(){this.ratingBackdrop&&this.backdrop&&(this.ratingBackdrop.classList.add("is-hidden"),this.backdrop.classList.remove("is-hidden"),this.ratingForm&&this.ratingForm.reset(),document.onkeydown=this.originalEscapeHandler)}async handleRatingSubmit(t){t.preventDefault();const e=this.ratingForm.querySelector("#rating-email").value.trim(),s=this.ratingForm.querySelector("#rating-comment").value.trim();if(!e||!s){console.log("Please fill in all fields");return}this.closeRatingModal()}};x(w,"instance",null);let $=w;window.openMenu=function(){document.getElementById("backdrop").classList.add("is-open")};window.closeMenu=function(){document.getElementById("backdrop").classList.remove("is-open")};window.menuLayoutClickHandler=function(t){t.stopPropagation()};var m;let gt=(m=class{constructor(){if(m.instance)return m.instance;this.ratingBackdrop=document.querySelector("[data-rating-modal]"),this.ratingCloseBtn=document.querySelector("[data-rating-close]"),this.ratingForm=document.querySelector(".rating-form"),this.backdrop=document.querySelector("[data-modal]"),this.ratingCounter=document.querySelector(".rating-form-value"),this.currentExerciseId=null,this.bindEvents(),m.instance=this}bindEvents(){this.ratingCloseBtn&&this.ratingCloseBtn.addEventListener("click",()=>this.closeRatingModal()),this.ratingBackdrop&&this.ratingBackdrop.addEventListener("click",e=>{e.target===this.ratingBackdrop&&this.closeRatingModal()}),document.querySelectorAll(".rating-form-radio").forEach(e=>{e.addEventListener("mouseover",()=>{this.updateRatingDisplay(e.value)}),e.addEventListener("mouseout",()=>{const s=document.querySelector(".rating-form-radio:checked");this.updateRatingDisplay(s?s.value:"0.0")}),e.addEventListener("change",()=>{this.updateRatingDisplay(e.value)})}),this.ratingForm&&this.ratingForm.addEventListener("submit",e=>this.handleRatingSubmit(e))}updateRatingDisplay(t){this.ratingCounter&&(this.ratingCounter.textContent=parseFloat(t).toFixed(1))}openRatingModal(t){this.ratingBackdrop&&this.backdrop&&(this.currentExerciseId=t,console.log("Setting exercise ID:",t),this.backdrop.classList.add("is-hidden"),this.ratingBackdrop.classList.remove("is-hidden"),this.updateRatingDisplay("0.0"),document.querySelectorAll(".rating-form-radio").forEach(s=>s.checked=!1))}closeRatingModal(){this.ratingBackdrop&&this.backdrop&&(this.ratingBackdrop.classList.add("is-hidden"),this.backdrop.classList.remove("is-hidden"),this.ratingForm&&(this.ratingForm.reset(),this.updateRatingDisplay("0.0")))}async handleRatingSubmit(t){var n,c;if(t.preventDefault(),!this.currentExerciseId){this.showNotification("Exercise ID is missing","error");return}const e=this.ratingForm.querySelector("#rating-email").value.trim(),s=this.ratingForm.querySelector("#rating-comment").value.trim(),o=document.querySelector(".rating-form-radio:checked");if(!e||!s||!o){this.showNotification("Please fill in all fields","error");return}const i=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;if(!i.test(e)){this.showNotification("Please enter a valid email","error");return}const a={rate:parseFloat(o.value),email:e.toLowerCase(),review:s.trim()};console.log("Validation check:",{isRateValid:Number.isFinite(a.rate)&&a.rate>=1&&a.rate<=5,isEmailValid:i.test(a.email),isReviewValid:a.review.length>0});try{console.log("Exercise ID:",this.currentExerciseId),console.log("Rating data:",a),console.log("Request URL:",`${b()}/${this.currentExerciseId}/rating`);const l=await z(this.currentExerciseId,a);console.log("Full response:",l),l.data&&(this.closeRatingModal(),this.showNotification("Rating added successfully","success"))}catch(l){let g="Failed to add rating";(c=(n=l.response)==null?void 0:n.data)!=null&&c.message&&(l.response.data.message.includes("email already exists")?g="Such email already exists":g=l.response.data.message),this.showNotification(g,"error")}}showNotification(t,e){const s={position:"topRight",timeout:3e3,close:!1,closeOnClick:!0};switch(e){case"success":R.success({...s,message:t,backgroundColor:"#64B880",messageColor:"#fff"});break;case"error":R.error({...s,message:t,backgroundColor:"#EF4040",messageColor:"#fff"});break;default:R.info({...s,message:t})}}},x(m,"instance",null),m);document.addEventListener("DOMContentLoaded",()=>{window.modalWindowRating=new gt});export{$ as M,tt as _,b as a,B as c,ot as e,rt as f,F as g,it as s};
//# sourceMappingURL=modal-window-rating-BhAtpOAE.js.map