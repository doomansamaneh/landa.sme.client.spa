import{i as y,e as v,c as x}from"./dom.21719d50.js";import{r as E,X as z,o as a,L as h,C as p,W as L,h as O,g as S,M as w}from"./index.8d5386c3.js";const T=[null,document,document.body,document.scrollingElement,document.documentElement];function H(e,i){let o=y(i);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return T.includes(o)?window:o}function N(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function D(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let d;function P(){if(d!==void 0)return d;const e=document.createElement("p"),i=document.createElement("div");v(e,{width:"100%",height:"200px"}),v(i,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),i.appendChild(e),document.body.appendChild(i);const o=e.offsetWidth;i.style.overflow="scroll";let t=e.offsetWidth;return o===t&&(t=i.clientWidth),i.remove(),d=o-t,d}function j(e,i=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:i?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}function C(){const e=E(!z.value);return e.value===!1&&a(()=>{e.value=!0}),e}const g=typeof ResizeObserver!="undefined",b=g===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var k=x({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:i}){let o=null,t,s={width:-1,height:-1};function l(n){n===!0||e.debounce===0||e.debounce==="0"?c():o===null&&(o=setTimeout(c,e.debounce))}function c(){if(clearTimeout(o),o=null,t){const{offsetWidth:n,offsetHeight:r}=t;(n!==s.width||r!==s.height)&&(s={width:n,height:r},i("resize",s))}}const u=S();if(Object.assign(u.proxy,{trigger:l}),g===!0){let n;return a(()=>{h(()=>{t=u.proxy.$el.parentNode,t&&(n=new ResizeObserver(l),n.observe(t),c())})}),p(()=>{clearTimeout(o),n!==void 0&&(n.disconnect!==void 0?n.disconnect():t&&n.unobserve(t))}),L}else{let f=function(){clearTimeout(o),r!==void 0&&(r.removeEventListener!==void 0&&r.removeEventListener("resize",l,w.passive),r=void 0)},m=function(){f(),t&&t.contentDocument&&(r=t.contentDocument.defaultView,r.addEventListener("resize",l,w.passive),c())};const n=C();let r;return a(()=>{h(()=>{t=u.proxy.$el,t&&m()})}),p(f),()=>{if(n.value===!0)return O("object",{style:b.style,tabindex:-1,type:"text/html",data:b.url,"aria-hidden":"true",onLoad:m})}}}});export{k as Q,H as a,N as b,D as c,P as g,j as h};
