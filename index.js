"use strict";modal.exports=function(e){var t={modalClass:e.modalClass||!1,toggleClass:e.toggleClass||!1,backgroundNode:e.backgroundNode||!1,backgroundClass:e.backgroundClass||!1},a=t.modalClass,l=document.querySelector(e.backgroundNode),o=e.backgroundClass,s=document.querySelectorAll("[data-modal-open]"),r=document.querySelectorAll("[data-modal-close]"),d=document.querySelectorAll("[data-modal-toggle]"),c=s.length,n=r.length,u=d.length;if(c)for(var g=0;g<c;g++)s[g].addEventListener("click",function(e){e.preventDefault();var t=e.target.dataset.modalOpen;document.querySelector(t).classList.add(a),l&&l.classList.add(o)});if(n)for(var i=0;i<n;i++)r[i].addEventListener("click",function(e){e.preventDefault();var t=e.target.dataset.modalClose;document.querySelector(t).classList.remove(a),l&&l.classList.remove(o)});if(u)for(var m=0;m<u;m++)d[m].addEventListener("click",function(e){e.preventDefault();var a=e.target.dataset.modalToggle;document.querySelector(a).classList.toggle(t.toggleClass)})};