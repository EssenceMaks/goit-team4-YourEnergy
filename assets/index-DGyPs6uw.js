const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/task-manager-Di9FvUSR.css"])))=>i.map(i=>d[i]);
/* empty css               */import{a as S}from"./vendor-CNNbG8jS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const C="modulepreload",M=function(e){return"/goit-team4-YourEnergy/"+e},m={},p=function(t,r,a){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),c=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(r.map(i=>{if(i=M(i),i in m)return;m[i]=!0;const u=i.endsWith(".css"),b=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${b}`))return;const l=document.createElement("link");if(l.rel=u?"stylesheet":C,u||(l.as="script"),l.crossOrigin="",l.href=i,c&&l.setAttribute("nonce",c),document.head.appendChild(l),u)return new Promise((q,v)=>{l.addEventListener("load",q),l.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${i}`)))})}))}function n(s){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=s,window.dispatchEvent(c),!c.defaultPrevented)throw s}return o.then(s=>{for(const c of s||[])c.status==="rejected"&&n(c.reason);return t().catch(n)})},y=()=>"https://your-energy.b.goit.study/api",I=()=>y()+"/filters",x=()=>y()+"/quote";async function A(){const e=new Date().toISOString().split("T")[0],t=localStorage.getItem("quote"),r=localStorage.getItem("author"),a=localStorage.getItem("quoteDate");if(t&&r&&a===e){document.querySelector(".sidebar-quote").textContent=`${t}`,document.querySelector(".sidebar-quote-author").textContent=`${r}`;return}try{const o=await fetch(x());if(!o.ok)throw new Error("Failed to fetch quote");const n=await o.json(),s=n.quote,c=n.author;document.querySelector(".sidebar-quote").textContent=`${s}`,document.querySelector(".sidebar-quote-author").textContent=`${c}`,localStorage.setItem("quote",s),localStorage.setItem("author",c),localStorage.setItem("quoteDate",e)}catch(o){console.error("Error fetching quote:",o)}}A();function T(e){return e.sort((t,r)=>t.name.localeCompare(r.name)).map(({filter:t,name:r})=>`<li class='categories-item' data-name='${r}' data-filter='${t}' tabindex="0">         
             <h3 class="categories-item-title">${r}</h3>
             <p class="categories-item-text">${t}</p>   
          </li>`).join("")}async function $(){const{data:e}=await S.get(`${I()}`);return e}let h=document.querySelector(".categories-list");async function P(e){try{const t=await $();h.innerHTML=T(t.results),document.querySelectorAll(".categories-item").forEach((a,o)=>{a.style.backgroundImage=`url(${t.results[o].imgURL})`,a.style.backgroundSize="cover",a.style.backgroundRepeat="no-repeat",a.style.backgroundPosition="center",a.addEventListener("click",E)})}catch(t){console.error("Error loading categories:",t)}}function E(e){e.target.removeEventListener("click",E),h.style.display="none";let t=e.target.dataset.name;console.log(t)}P();const _=document.querySelectorAll(".pagination");_.forEach(e=>{if(e.innerHTML="",e.hasAttribute("total-pages")){const t=parseInt(e.getAttribute("total-pages")),r=parseInt(e.getAttribute("current-page"));let a=new DocumentFragment;for(let o=0;o<t;o++){let n=document.createElement("p");n.setAttribute("index",o),n.innerHTML=o+1,n.classList.add("pagination-page"),o===r&&n.classList.add("selected"),a.appendChild(n)}e.appendChild(a),e.addEventListener("click",async o=>{o.target.classList.contains("pagination-page")&&(e.querySelectorAll(".pagination-page").forEach(s=>{s.classList.remove("selected")}),o.target.classList.add("selected"),o.target.parentElement.setAttribute("current-page",o.target.getAttribute("index")))})}});window.openMenu=function(){document.getElementById("backdrop").classList.add("is-open")};window.closeMenu=function(){document.getElementById("backdrop").classList.remove("is-open")};window.menuLayoutClickHandler=function(t){t.stopPropagation()};window.location.pathname.includes("task-management")&&p(()=>Promise.resolve({}),__vite__mapDeps([0]));async function O(){if(!window.taskManager)try{const t=(await p(()=>import("./task-manager-M1fNHe4L.js"),[])).default;window.taskManager=new t,await new Promise(r=>setTimeout(r,200))}catch(e){return console.error("Error initializing TaskManager:",e),null}return window.taskManager}document.addEventListener("DOMContentLoaded",async()=>{try{if(window.location.pathname.includes("task-management")){await O();const e=document.getElementById("addTaskBtn");e&&e.addEventListener("click",async t=>{t.preventDefault(),window.taskManager?window.taskManager.showModal():console.error("TaskManager not initialized")})}}catch(e){console.error("Error initializing task manager:",e)}});let d=[];const w=document.querySelector(".selected-category"),g=document.querySelector(".categories-list"),f=document.querySelectorAll(".filter-button"),D=document.querySelector("#search-form"),R=document.querySelector("#search-input");async function U(){try{const e=await getCategories();g.innerHTML=createCategoriesMarkup(e.results),d=e.results.map(r=>({name:r.name,imgURL:r.imgURL,filter:r.filter})),document.querySelectorAll(".categories-item").forEach(r=>{r.addEventListener("click",L)})}catch(e){console.error("Error loading categories:",e)}}function B(e="all"){const t=e==="all"?d:d.filter(r=>r.filter===e);H(t)}function H(e){g.innerHTML=createCategoriesMarkup(e),document.querySelectorAll(".categories-item").forEach(r=>{r.addEventListener("click",L)})}f.forEach(e=>{e.addEventListener("click",t=>{const r=t.target.getAttribute("data-filter");B(r),f.forEach(a=>a.classList.remove("active")),t.target.classList.add("active")})});D.addEventListener("submit",async e=>{e.preventDefault();const t=R.value.trim(),r=w.textContent.trim().split(" / ")[1];try{const a=await getExercises(r,t);k(a)}catch(a){console.error("Error loading exercises:",a)}});function L(e){const t=e.currentTarget.dataset.name;w.textContent=` / ${t}`,g.style.display="none",F(t)}async function F(e,t=""){try{const r=await getExercises(e,t);k(r)}catch(r){console.error("Error loading exercises:",r)}}function k(e){console.log("Exercises found:",e)}U();
//# sourceMappingURL=index-DGyPs6uw.js.map
