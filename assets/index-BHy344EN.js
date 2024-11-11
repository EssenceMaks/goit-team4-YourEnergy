const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/_task-manager-Di9FvUSR.css"])))=>i.map(i=>d[i]);
import{e as j,c as K,a as V,M as G,g as D,f as J,s as Y,_}from"./modal-window-rating-yyS2LoRp.js";/* empty css               */import{a as R,i as u}from"./vendor-BT7OT44q.js";function F(e){return e.sort((t,o)=>t.name.localeCompare(o.name)).map(({filter:t,name:o,imgURL:r})=>`<li class='categories-item' data-name='${o}' data-filter='${t}' tabindex="0"
             style="background-image:url('${r}');background-size:cover; background-repeat:no-repeat; background-position:center">
             <h3 class="categories-item-title">${o}</h3>
             <p class="categories-item-text">${t}</p>
          </li>`).join("")}let x=document.querySelector(".workouts-container-list");const c=document.querySelector(".m-workouts .workouts-pagination");let m={bodypart:"",muscles:"",equipment:"",keyword:""};async function l(e="",t="",o="",r="",a=1,s=10){m={bodypart:e,muscles:t,equipment:o,keyword:r};try{const i=j(e,t,o,r,a,s),L=await fetch(i);if(!L.ok)throw new Error("Failed to fetch workouts");const d=await L.json();x&&(x.innerHTML=K(d.results));const C=document.querySelector(".workouts-container"),M=document.querySelector(".workouts-container-list"),q=document.querySelector(".workouts-error");C&&(C.style.display="flex",M.style.display="flex",q.style.display="none"),d.results.length===0?(M.style.display="none",q.style.display="block",c.style.display="none"):d.results.length>0&&d.totalPages&&d.totalPages>0&&(c.style.display="flex",Q(d.totalPages,a)),document.querySelectorAll(".workout-start-btn").forEach(T=>{T.addEventListener("click",async z=>{z.preventDefault();const N=T.closest(".workouts-card").dataset.id;try{const g=await fetch(`${V()}/${N}`);if(!g.ok)throw new Error("Failed to fetch exercise details");const U=await g.json();window.modalWindow||(window.modalWindow=new G),window.modalWindow.open(U)}catch(g){console.error("Error opening modal:",g)}})})}catch(i){console.error("Error loading workouts:",i)}}function Q(e,t){if(!c){console.error("Pagination container not found");return}if(c.innerHTML="",c.style.display="flex",c.setAttribute("data-total",e),c.setAttribute("data-current",t-1),e>1){const o=D(e,t-1);c.appendChild(o),c.querySelectorAll(".pagination-page").forEach(r=>{r.addEventListener("click",a=>{a.preventDefault();const s=parseInt(r.getAttribute("data-index"))+1;l(m.bodypart,m.muscles,m.equipment,m.keyword,s,10)})})}}async function B(e="Muscles",t=1,o=12){o=window.innerWidth<=768?9:o;const{data:a}=await R.get(J(),{params:{filter:e,page:t,limit:o}});return a}const X=document.querySelector(".filters-title"),Z=document.querySelector(".categories-list"),A=document.querySelectorAll(".filter-button"),y=document.querySelector("#search-form"),I=document.querySelector("#search-input");let W="Muscles";A.forEach(e=>{e.addEventListener("click",async t=>{let o=t.target.getAttribute("data-filter").replace("-"," ");W=o,await S(o),A.forEach(s=>s.classList.remove("active")),t.target.classList.add("active"),v(),h(!1);const r=document.querySelector(".m-workouts");r.style.display="none";const a=document.querySelector(".m-categories");a.style.display="flex"})});y==null||y.addEventListener("submit",async e=>{e.preventDefault();const t=encodeURIComponent(I.value.trim());switch($){case"Muscles":l("",p,"",t,1,10);break;case"Body parts":l(p,"","",t,1,10);break;case"Equipment":l("","",p,t,1,10);break}I.value=""});function h(e){y.style.display=e?"block":"none"}function ee(e){const t=e.currentTarget.dataset.name;v(t),Z.style.display="none",h(!0),oe()}function v(e=!1){X.innerHTML=e?'Exercises / <span class="selected-category">'+e+"</span>":"Exercises"}function te(){document.querySelectorAll(".categories-item").forEach(t=>{t.addEventListener("click",ee)})}document.addEventListener("DOMContentLoaded",async()=>{await S(W),te(),h(!1)});async function oe(e,t=""){}let w=document.querySelector(".categories-list");document.querySelector(".workouts-container");const n=document.querySelector(".m-categories .categories-pagination");let p="",$="Muscles";async function S(e){const t=document.querySelector(".m-categories");t&&(t.style.display="flex");try{const o=await B(e);if(n&&(n.innerHTML="",o.totalPages>1)){n.style.display="flex",n.setAttribute("data-total",o.totalPages),n.setAttribute("data-current",0);const r=D(o.totalPages,0);n.appendChild(r),n.querySelectorAll(".pagination-page").forEach(a=>{a.addEventListener("click",re)})}w&&(w.innerHTML=F(o.results),H())}catch(o){console.error("Error loading categories:",o)}}async function re(e){e.preventDefault();const t=Number(e.target.dataset.index),o=t+1,r=document.querySelector(".filter-button.active"),a=r?r.dataset.filter.replace("-"," "):"";try{const s=await B(a,o);w&&(w.innerHTML=F(s.results),H()),n&&(n.setAttribute("data-current",t),n.querySelectorAll(".pagination-page").forEach(i=>{i.classList.remove("selected")}),e.target.classList.add("selected"))}catch(s){console.error("Error handling pagination:",s)}}function H(){document.querySelectorAll(".categories-item").forEach(t=>{t.addEventListener("click",ae)})}function ae(e){e.preventDefault();const t=document.querySelector(".m-categories"),o=document.querySelector(".m-workouts");if(t&&o){t.style.display="none",o.style.display="flex";const r=e.target.closest(".categories-item");if(!r)return;h(!0);const a=encodeURIComponent(r.dataset.name);p=a,v(r.dataset.name);const s=r.dataset.filter;$=s;let i=window.innerWidth<=768?8:10;switch(s){case"Muscles":l("",a,"","",1,i);break;case"Body parts":l(a,"","","",1,i);break;case"Equipment":l("","",a,"",1,i);break}}}document.addEventListener("DOMContentLoaded",()=>{S("Muscles")});const E=document.querySelector(".subscribe-form"),b=E.elements.email;let k={email:""};const O="subscribe-form-state",se=()=>{const e=localStorage.getItem(O);e&&(k=JSON.parse(e),b.value=k.email||"")};se();E.addEventListener("submit",async e=>{if(e.preventDefault(),!b.validity.valid){u.error({title:"Error",message:"Please enter a valid email",position:"topRight",timeout:3e3,backgroundColor:"#EF4040",messageColor:"#fff"});return}k.email=b.value.trim();try{const t=await R.post(Y(),k);t.data.error?t.status===409?u.warning({title:"Warning",message:"This email is already subscribed.",position:"topRight",timeout:3e3,messageColor:"#fff"}):u.error({title:"Error",message:"Subscription failed. Please try again later.",position:"topRight",timeout:3e3,backgroundColor:"#EF4040",messageColor:"#fff"}):u.success({title:"",message:"Subscription successful!",position:"topRight",timeout:3e3,backgroundColor:"#64B880",messageColor:"#fff"})}catch(t){t.response&&t.response.status===409?u.warning({title:"Warning",message:"This email is already subscribed.",position:"topRight",timeout:3e3,messageColor:"#fff"}):u.error({title:"Error",message:"Subscription failed. Please try again later.",position:"topRight",timeout:3e3,backgroundColor:"#EF4040",messageColor:"#fff"})}E.reset(),localStorage.removeItem(O)});const f=document.querySelector(".router");document.querySelector("body");let P=0;window.addEventListener("scroll",()=>{const e=document.documentElement.scrollTop;document.body.hasAttribute("data-user-scrolling")&&(f.classList.add("sticky"),e>0?e>P?f.classList.add("hidden"):f.classList.remove("hidden"):f.classList.remove("sticky"),P=e)});document.addEventListener("wheel",()=>{document.body.setAttribute("data-user-scrolling","true"),setTimeout(()=>{document.body.removeAttribute("data-user-scrolling")},100)});window.location.pathname.includes("task-management")&&_(()=>Promise.resolve({}),__vite__mapDeps([0]));async function ne(){if(!window.taskManager)try{const t=(await _(()=>import("./_task-manager-M1fNHe4L.js"),[])).default;window.taskManager=new t,await new Promise(o=>setTimeout(o,200))}catch(e){return console.error("Error initializing TaskManager:",e),null}return window.taskManager}document.addEventListener("DOMContentLoaded",async()=>{try{if(window.location.pathname.includes("task-management")){await ne();const e=document.getElementById("addTaskBtn");e&&e.addEventListener("click",async t=>{t.preventDefault(),window.taskManager?window.taskManager.showModal():console.error("TaskManager not initialized")})}}catch(e){console.error("Error initializing task manager:",e)}});
//# sourceMappingURL=index-BHy344EN.js.map