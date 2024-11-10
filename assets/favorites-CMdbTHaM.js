import{b as k,c as p,g as L,a as M,M as S}from"./menu-DgQbA_Y5.js";/* empty css               */import{a as q}from"./vendor-CNNbG8jS.js";const E=window.location.pathname;let v=document.querySelector(".fav-picture");v&&(v.outerHTML=`
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
  `);const w=document.querySelectorAll(".menu-item");E.includes("favorites.html")&&(w.forEach(e=>e.classList.remove("active")),w[1].classList.add("active"));const u=document.querySelector(".favorites-page-text"),f=document.querySelector(".favorites-cards"),s=document.querySelector(".favorites-pagination");let i=JSON.parse(localStorage.getItem("favorites"))||[],c=[],l=0;const x=async()=>{if(!i||i.length===0){u.style.display="block",f.innerHTML="";return}try{c=[];for(const o of i){const{data:n}=await q.get(k(o.id));c.push(n)}let e,t;const r=window.innerWidth;r<=768?t=8:r<=1440?t=10:t=c.length;const a=Math.ceil(c.length/t);if(s.setAttribute("data-total",a),a<=1?s.style.display="none":s.style.display="flex",r>1440)e=p(c),u.style.display="none",f.innerHTML=e,y(),s.innerHTML="";else if(e=p(c.slice(l*t,(l+1)*t)),u.style.display="none",f.innerHTML=e,s){s.innerHTML="";const o=L(a,l);s.appendChild(o),s.querySelectorAll(".pagination-page").forEach(n=>{n.addEventListener("click",A)})}document.querySelectorAll(".workout-start-btn").forEach(o=>{o.addEventListener("click",async n=>{n.preventDefault();const m=o.closest(".workouts-card").dataset.id;try{const g=await fetch(`${M()}/${m}`);if(!g.ok)throw new Error("Failed to fetch exercise details");const b=await g.json();window.modalWindow||(window.modalWindow=new S),window.modalWindow.open(b)}catch(g){console.error("Error opening modal:",g)}})})}catch(e){console.error(e)}};function P(e){const r=e.target.closest(".workouts-card").getAttribute("data-id");if(i=i.filter(a=>a.id!==r),localStorage.setItem("favorites",JSON.stringify(i)),!i||i.length===0)u.style.display="block",f.innerHTML="";else{const a=Math.ceil(i.length/8);l>=a&&(l=a-1),x()}}function A(e){const t=Number(e.target.dataset.index);l=t,s.setAttribute("data-current",l),s.querySelectorAll("p").forEach(m=>{m.classList.remove("selected")}),e.target.classList.add("selected");const a=window.innerWidth;let d;if(a<=768)d=8;else if(a<=1440)d=10;else return;const o=t*d,n=o+d,h=c.slice(o,n);f.innerHTML=p(h),y()}function y(){document.querySelectorAll(".rating-container").forEach(r=>r.classList.add("hide")),document.querySelectorAll(".trash-container").forEach(r=>{r.classList.remove("hide"),r.addEventListener("click",P)})}x();
//# sourceMappingURL=favorites-CMdbTHaM.js.map
