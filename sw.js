if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let t={};const c=e=>i(e,o),l={module:{uri:o},exports:t,require:c};n[o]=Promise.all(s.map((e=>l[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BAtiCx1M.js",revision:null},{url:"assets/index-MOWxslsL.css",revision:null},{url:"index.html",revision:"dfe554ea717ab15127422321e0821d33"},{url:"registerSW.js",revision:"ef3a26293a8b1b1a2a322024ae07f0a7"},{url:"192x192Icon.png",revision:"10c67f866525f87995be4c7c4af48339"},{url:"512x512Icon.png",revision:"4b8daab92b32848ac8c44b41ce99ed36"},{url:"Screenshot1280x720.png",revision:"7fa64cc1584e663570bbda73c3045794"},{url:"Screenshot640x1136.png",revision:"785a25c638200dc4a3ce0be408985bf9"},{url:"manifest.webmanifest",revision:"b55effa2a63a9e01aa3ffc0c82c23df8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
