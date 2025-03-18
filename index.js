import{a as g,S as O,i as n}from"./assets/vendor-DMjJPMAs.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();g.defaults.baseURL="https://pixabay.com/api/";const P="49354290-35d6e1dc5d842ed86975730ff",R=(s,t=1)=>({params:{key:P,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}});async function y(s,t){return(await g.get("",R(s,t))).data}const x=new O(".item a",{captions:!0,captionsData:"alt",captionDelay:1e3});function u(s,t){const r=s.map(({largeImageURL:e,webformatURL:o,tags:i,likes:q,views:w,comments:S,downloads:$})=>`
    <li class= "item">
      <a href="${e}">
        <img class= "item-img" src="${o}" alt="${i}" />
        <div class = "item-descrp">
          <table>
            <tr>
              <th>Likes</th>
              <th>Views</th>
              <th>Comment</th>
              <th>Downloads</th>
            </tr>
            <tr>
              <td>${q}</td>
              <td>${w}</td>
              <td>${S}</td>
              <td>${$}</td>
            </tr>
          </table>
        </div>
      </a>
    </li>
    `).join("");t.insertAdjacentHTML("beforeend",r),document.querySelectorAll(".item-img").forEach(e=>e.onload=()=>e.classList.add("loaded")),x.refresh()}function B(){const s=document.querySelector(".gallery");s&&s.replaceChildren()}const m=document.querySelector(".form"),d=document.querySelector(".gallery"),p=document.querySelector(".load-btn");function D(){p.classList.add("active")}function h(){p.classList.remove("active")}let c=1,L=null,v=null;const b=document.querySelector(".loader");function A(){b.classList.add("active")}function l(){b.classList.remove("active")}const f=()=>m.reset();m.addEventListener("submit",E);async function E(s){s.preventDefault(),h(),B();const t=m.querySelector('[name="search-text"]').value.trim();if(t!==""){L=t,A();try{const r=await y(t,c);if(r.hits.length!==0){c=1,l(),r.totalHits>15&&(v=r.totalHits/15,D()),u(r.hits,d);return}else{l(),n.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"});return}}catch(r){n.error({message:`${r.message}. We are experiencing some issues. Please try again later.`,position:"center",timeout:2e3})}finally{l(),f()}}else{n.warning({message:"Field must not be empty!",position:"center",timeout:2e3}),f();return}}p.addEventListener("click",C);async function C(s){s.preventDefault(),c+=1;const t=document.querySelector(".item").getBoundingClientRect(),r=await y(L,c);try{c<=v?(u(r.hits,d),window.scrollBy({top:t.height*2,behavior:"smooth"})):(h(),u(r.hits,d),window.scrollBy({top:t.height*2,behavior:"smooth"}),n.warning({message:"We're sorry, but you've reached the end of search results.",position:"center"}))}catch(a){n.error({message:`${a.message}. We are experiencing some issues. Please try again later.`,position:"center",timeout:2e3})}}
//# sourceMappingURL=index.js.map
