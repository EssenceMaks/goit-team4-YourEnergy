const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/task-manager-DGkgfDpK.css"])))=>i.map(i=>d[i]);
import"./styles-D8W_Hg0c.js";import{a as b}from"./vendor-CNNbG8jS.js";const M="modulepreload",A=function(e){return"/goit-team4-YourEnergy/"+e},m={},y=function(t,r,a){let n=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),i=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));n=Promise.allSettled(r.map(c=>{if(c=A(c),c in m)return;m[c]=!0;const d=c.endsWith(".css"),L=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${L}`))return;const l=document.createElement("link");if(l.rel=d?"stylesheet":M,d||(l.as="script"),l.crossOrigin="",l.href=c,i&&l.setAttribute("nonce",i),document.head.appendChild(l),d)return new Promise((v,C)=>{l.addEventListener("load",v),l.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o}return n.then(o=>{for(const i of o||[])i.status==="rejected"&&s(i.reason);return t().catch(s)})};function S(e){return e.sort((t,r)=>t.name.localeCompare(r.name)).map(({filter:t,name:r})=>`<li class='categories-item' data-name='${r}' data-filter='${t}' tabindex="0">         
             <h3 class="categories-item-title">${r}</h3>
             <p class="categories-item-text">${t}</p>   
          </li>`).join("")}const T=()=>"https://your-energy.b.goit.study/api",x=()=>T()+"/filters";async function $(){const{data:e}=await b.get(`${x()}`);return e}let p=document.querySelector(".categories-list");async function q(e){try{const t=await $();p.innerHTML=S(t.results),document.querySelectorAll(".categories-item").forEach((a,n)=>{a.style.backgroundImage=`url(${t.results[n].imgURL})`,a.style.backgroundSize="cover",a.style.backgroundRepeat="no-repeat",a.style.backgroundPosition="center",a.addEventListener("click",E)})}catch(t){console.error("Error loading categories:",t)}}function E(e){e.target.removeEventListener("click",E),p.style.display="none";let t=e.target.dataset.name;console.log(t)}q();const I=document.querySelectorAll(".pagination");I.forEach(e=>{if(e.innerHTML="",e.hasAttribute("total-pages")){const t=parseInt(e.getAttribute("total-pages")),r=parseInt(e.getAttribute("current-page"));let a=new DocumentFragment;for(let n=0;n<t;n++){let s=document.createElement("p");s.setAttribute("index",n),s.innerHTML=n+1,s.classList.add("pagination-page"),n===r&&s.classList.add("selected"),a.appendChild(s)}e.appendChild(a),e.addEventListener("click",async n=>{n.target.classList.contains("pagination-page")&&(e.querySelectorAll(".pagination-page").forEach(o=>{o.classList.remove("selected")}),n.target.classList.add("selected"),n.target.parentElement.setAttribute("current-page",n.target.getAttribute("index")))})}});window.location.pathname.includes("task-management")&&y(()=>Promise.resolve({}),__vite__mapDeps([0]));async function P(){if(!window.taskManager)try{const t=(await y(()=>import("./task-manager-DOtOvWIw.js"),[])).default;window.taskManager=new t,await new Promise(r=>setTimeout(r,200))}catch(e){return console.error("Error initializing TaskManager:",e),null}return window.taskManager}document.addEventListener("DOMContentLoaded",async()=>{try{if(window.location.pathname.includes("task-management")){await P();const e=document.getElementById("addTaskBtn");e&&e.addEventListener("click",async t=>{t.preventDefault(),window.taskManager?window.taskManager.showModal():console.error("TaskManager not initialized")})}}catch(e){console.error("Error initializing task manager:",e)}});let u=[];const h=document.querySelector(".selected-category"),g=document.querySelector(".categories-list"),f=document.querySelectorAll(".filter-button"),_=document.querySelector("#search-form"),R=document.querySelector("#search-input");async function U(){try{const e=await getCategories();g.innerHTML=createCategoriesMarkup(e.results),u=e.results.map(r=>({name:r.name,imgURL:r.imgURL,filter:r.filter})),document.querySelectorAll(".categories-item").forEach(r=>{r.addEventListener("click",k)})}catch(e){console.error("Error loading categories:",e)}}function D(e="all"){const t=e==="all"?u:u.filter(r=>r.filter===e);B(t)}function B(e){g.innerHTML=createCategoriesMarkup(e),document.querySelectorAll(".categories-item").forEach(r=>{r.addEventListener("click",k)})}f.forEach(e=>{e.addEventListener("click",t=>{const r=t.target.getAttribute("data-filter");D(r),f.forEach(a=>a.classList.remove("active")),t.target.classList.add("active")})});_.addEventListener("submit",async e=>{e.preventDefault();const t=R.value.trim(),r=h.textContent.trim().split(" / ")[1];try{const a=await getExercises(r,t);w(a)}catch(a){console.error("Error loading exercises:",a)}});function k(e){const t=e.currentTarget.dataset.name;h.textContent=` / ${t}`,g.style.display="none",H(t)}async function H(e,t=""){try{const r=await getExercises(e,t);w(r)}catch(r){console.error("Error loading exercises:",r)}}function w(e){console.log("Exercises found:",e)}U();
//# sourceMappingURL=index-BIgZkmB_.js.map
