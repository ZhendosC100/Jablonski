!function(e){var t={};function o(l){if(t[l])return t[l].exports;var n=t[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,l){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(l,n,function(t){return e[t]}.bind(null,n));return l},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t),window.addEventListener("DOMContentLoaded",function(){!function(){let e=document.getElementById("select"),t=document.querySelectorAll(".lng_opt"),o=document.querySelectorAll(".lng_opt-opn"),l=document.querySelectorAll(".lng_opt-inf_dwn"),n=document.querySelectorAll(".lng_opt-call"),r=document.querySelectorAll(".lng_opt-img_text"),c=document.querySelectorAll(".lng_opt-price"),u=document.querySelectorAll(".lng_opt-rules"),d=document.querySelectorAll(".lng_opt-promo_start"),i=document.querySelectorAll(".lng_opt-comments"),s=document.querySelectorAll(".lng_opt-slide"),a=document.querySelectorAll(".lng_opt-two_slide"),m=document.querySelectorAll(".lng_opt-popup_form"),f=document.querySelectorAll(".lng_opt-about_us"),y=0,p=(e,t)=>{for(let o=e;o<t.length;o++)t[o].classList.remove("active")},g=(e,t)=>{t[e].classList.add("active")};e.addEventListener("change",function(v){y=e.options[e.selectedIndex].value,console.log(y),p(0,t),p(0,o),p(0,l),p(0,n),p(0,r),p(0,c),p(0,u),p(0,i),p(0,d),p(0,s),p(0,a),p(0,m),p(0,f),g(y,t),g(y,o),g(y,l),g(y,n),g(y,r),g(y,c),g(y,u),g(y,i),g(y,d),g(y,s),g(y,a),g(y,m),g(y,f)}),console.log(y),console.log("module lang Ok")}(),function(){let e=2,t=document.querySelectorAll(".slide_comments"),o=document.querySelector(".left_arrow"),l=document.querySelector(".right_arrow"),n=(document.querySelector(".dot_box"),document.querySelectorAll(".dots")),r=document.querySelector("body");function c(o){o>t.length&&(e=1),o<1&&(e=t.length),t.forEach(e=>e.classList.remove("active")),n.forEach(e=>e.classList.remove("dots_active")),t[e-1].classList.add("active"),n[e-1].classList.add("dots_active")}function u(t){c(e+=t)}c(e),o.addEventListener("click",function(){u(-1)}),l.addEventListener("click",function(){u(1)}),r.addEventListener("click",function(t){for(let o=1;o<n.length+1;o++)t.target.classList.contains("dots")&&t.target==n[o-1]&&c(e=o)})}(),function(){document.querySelector("nav");let e=document.querySelectorAll(".repair_link"),t=document.querySelectorAll(".promo_link"),o=document.querySelectorAll(".feedback_link"),l=document.querySelectorAll(".about_link"),n=document.querySelectorAll(".move_up"),r=(/constructor/i.test(window.HTMLElement)||(!window.safari||safari.pushNotification).toString(),!!document.documentMode);function c(e,t){e.forEach(function(e){e.addEventListener("click",function(o){o.preventDefault();let l=e.getAttribute("href"),n=document.querySelector(l).offsetTop-t;window.scrollTo({top:n,behavior:"smooth"})})})}!r&&window.StyleMedia,r||(c(e,30),c(t,120),c(o,80),c(l,-60),c(n,8))}(),function(){let e=document.getElementById("popup_modal"),t=document.querySelector(".substrate"),o=document.querySelector("body"),l=document.querySelector(".close"),n=document.querySelectorAll(".call"),r=document.querySelectorAll(".button"),c=document.querySelectorAll(".button_feedback"),u=document.querySelectorAll(".number"),d=document.querySelectorAll(".name");const i=()=>{for(let e=0;e<u.length;e++)u[e].addEventListener("input",()=>{u[e].value=u[e].value.replace(/[^0-9+]/gi,"")})},s=()=>{for(let e=0;e<d.length;e++)d[e].value="";for(let e=0;e<u.length;e++)u[e].value=""};function a(l){l.addEventListener("click",()=>{e.classList.add("active"),t.classList.add("substrate_active"),o.classList.add("stop-scrolling"),i()})}for(let e=0;e<n.length;e++)a(n[e]);for(let e=0;e<r.length;e++)a(r[e]);for(let e=0;e<c.length;e++)a(c[e]);l.addEventListener("click",()=>{e.classList.remove("active"),t.classList.remove("substrate_active"),o.classList.remove("stop-scrolling"),s()})}(),function(){let e,t,o=document.querySelectorAll(".text_price-server"),l=document.querySelectorAll(".model_select-dsn"),n=(document.querySelector("body"),new XMLHttpRequest);n.open("GET","price_item.json"),n.setRequestHeader("Content-type","application/json; charset=utf-8"),n.send(),n.addEventListener("readystatechange",function(){if(4===n.readyState&&200==n.status){let u=JSON.parse(n.response);function r(l){for(let n=0;n<o.length;n++)e=l,t=u.model[e],o[n].innerHTML=t[n]}function c(e,t){for(let o=0;o<e.length;o++)t==e[o]&&r(o)}for(let e=0;e<l.length;e++)l[e].addEventListener("click",e=>{let t=e.target;c(l,t)})}else{console.log("oops");for(let e=0;e<o.length;e++)o[e].innerHTML="--- zł"}});let r=e=>{for(let t=e;t<l.length;t++)l[t].classList.remove("active_model")};r(1);let c=e=>{l[e].classList.add("active_model")};function u(e,t){for(let o=0;o<e.length;o++)t==e[o]&&(r(0),c(o))}for(let e=0;e<l.length;e++)l[e].addEventListener("click",e=>{let t=e.target;u(l,t),console.log("ok")});console.log("module price OK")}(),function(){let e=document.querySelector(".cover_tree"),t=document.getElementById("promo"),o=document.querySelector(".game"),l=document.getElementById("promo_start"),n=document.querySelectorAll(".button_start"),r=document.querySelectorAll(".cancel_button"),c=document.querySelectorAll(".game_button");function u(t){t.addEventListener("click",()=>{e.style.zIndex="-1"})}function d(o){o.addEventListener("click",()=>{l.style.display="block",t.style.display="none",e.style.zIndex="3"})}for(let e=0;e<n.length;e++)n[e].addEventListener("click",()=>{l.style.display="none",t.style.display="flex",o.classList.add("active_game")});for(let e=0;e<c.length;e++)u(c[e]);for(let e=0;e<r.length;e++)d(r[e])}()})}]);
//# sourceMappingURL=bundle.js.map