import{S as d,a as m,i as h}from"./assets/vendor-BBSqv8W6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();function y(r){const t=r.map(({webformatURL:i,largeImageURL:n,tags:e,likes:o,views:s,comments:f,downloads:p})=>`
                <li class="card">
                    <a href="${n}">
                        <img src="${i}" alt="${e}" class="card-pic"/>
                        <ul class="inner-list">
                            <li class="inner-item">
                                <span class="bold">Likes</span>${o}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Views</span>${s}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Comments</span>${f}
                            </li>
                            <li class="inner-item">
                                <span class="bold">Downloads</span>${p}
                            </li>
                        </ul>
                    </a>
                </li>`).join("");c(t)}function c(r=""){const t=document.querySelector(".gallery");t.innerHTML=r,r&&(g(),a("none"))}function g(){new d(".gallery a",{navText:["<",">"],captionsData:"alt",captionDelay:"250"}).refresh()}function a(r){const t=document.querySelector(".loader");t.style.display=r}const l={key:"49539312-1d6717d33bfa63c1c4ab44e48",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};function b(r){l.q=r,m({url:$(l)}).then(t=>L(t.data.hits)).catch(t=>console.log(t))}function $({key:r,q:t,image_type:i,orientation:n,safesearch:e}){return`https://pixabay.com/api/?key=${r}&q=${t}&image_type=${i}&orientation=${n}&safesearch=${e}`}function L(r){if(!r.length){h.show({title:"Sorry, there are no images matching your search query. Please try again!",titleColor:"#ffffff",titleSize:"16px",backgroundColor:"#ef4040",iconUrl:"./Group.png",position:"topRight",width:"300px"}),a("none");return}y(r)}const u=document.querySelector(".form");u.addEventListener("submit",q);function q(r){r.preventDefault();const t=this.elements["search-text"].value.trim();if(!t){u.reset();return}c(),a("block"),setTimeout(b,2e3,t)}
//# sourceMappingURL=index.js.map
