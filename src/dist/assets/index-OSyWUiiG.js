(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();let l=1;const d=document.getElementById("loadMoreBtn"),i=document.querySelectorAll(".newProducts_card");d.addEventListener("click",u);function u(){for(let n=0;n<i.length;n++){const t=l*2+1;document.querySelector(`.newProducts_card:nth-child(${t})`).classList.remove("not-shown"),document.querySelector(`.newProducts_card:nth-child(${t+1})`).classList.remove("not-shown")}l++,l>=i.length/2&&(d.style.display="none")}(()=>{const n=document.querySelector("#mobile-menu"),t=document.querySelector("#modal-open-btn"),c=document.querySelector("#modal-close-btn"),r=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),n.classList.toggle("visually-hidden"),t.classList.toggle("--is-open"),document.body.classList.toggle("modal-open")};t.addEventListener("click",r),c.addEventListener("click",r)})();