if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>n(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"119509996ae64267139778a3d145d116"},{url:"/_next/static/Oy42S_2QTLbR5pOMe8rqM/_buildManifest.js",revision:"e31ed336eeab5bdf67877e3ccba2bdfe"},{url:"/_next/static/Oy42S_2QTLbR5pOMe8rqM/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/17-e9242b5720f1e370.js",revision:"Oy42S_2QTLbR5pOMe8rqM"},{url:"/_next/static/chunks/462.11f691f8430d58e3.js",revision:"11f691f8430d58e3"},{url:"/_next/static/chunks/555-bb7c567be1a91055.js",revision:"Oy42S_2QTLbR5pOMe8rqM"},{url:"/_next/static/chunks/90-5d665db5e450f41d.js",revision:"Oy42S_2QTLbR5pOMe8rqM"},{url:"/_next/static/chunks/953-d644d1cf63f3ccca.js",revision:"Oy42S_2QTLbR5pOMe8rqM"},{url:"/_next/static/chunks/app/%5Blang%5D/head-e15c4459241372d0.js",revision:"Oy42S_2QTLbR5pOMe8rqM"},{url:"/_next/static/chunks/app/%5Blang%5D/hooks/custom-hooks/page-9d39e2e98ee65371.js",revision:"Oy42S_2QTLbR5pOMe8rqM"},{url:"/_next/static/chunks/app/%5Blang%5D/hooks/custom-hooks/use-fetch/page-c1d0996d729a573f.js",revision:"Oy42S_2QTLbR5pOMe8rqM"},{url:"/_next/static/chunks/app/%5Blang%5D/hooks/custom-hooks/use-localstorage/page-4f5e615c6794d315.js",revision:"Oy42S_2QTLbR5pOMe8rqM"},{url:"/_next/static/chunks/app/%5Blang%5D/hooks/page-a8cd554c8ffb9369.js",revision:"Oy42S_2QTLbR5pOMe8rqM"},{url:"/_next/static/chunks/app/%5Blang%5D/hooks/use-context/page-9e4d5bf3d7e5332c.js",revision:"Oy42S_2QTLbR5pOMe8rqM"},{url:"/_next/static/chunks/app/%5Blang%5D/hooks/use-effect/page-3499fe072f8a962b.js",revision:"Oy42S_2QTLbR5pOMe8rqM"},{url:"/_next/static/chunks/app/%5Blang%5D/hooks/use-reducer/page-4d3c3657c784bdcb.js",revision:"Oy42S_2QTLbR5pOMe8rqM"},{url:"/_next/static/chunks/app/%5Blang%5D/hooks/use-ref/page-f06fe1dc64f2439e.js",revision:"Oy42S_2QTLbR5pOMe8rqM"},{url:"/_next/static/chunks/app/%5Blang%5D/hooks/use-state/page-3a324b9ec0b8a73c.js",revision:"Oy42S_2QTLbR5pOMe8rqM"},{url:"/_next/static/chunks/app/%5Blang%5D/layout-16c2c9a7c8faa089.js",revision:"Oy42S_2QTLbR5pOMe8rqM"},{url:"/_next/static/chunks/app/%5Blang%5D/page-83865c1d740dbae8.js",revision:"Oy42S_2QTLbR5pOMe8rqM"},{url:"/_next/static/chunks/main-899472a02db9c484.js",revision:"Oy42S_2QTLbR5pOMe8rqM"},{url:"/_next/static/chunks/main-app-695bf23183e4e9af.js",revision:"Oy42S_2QTLbR5pOMe8rqM"},{url:"/_next/static/chunks/pages/_app-5841ab2cb3aa228d.js",revision:"Oy42S_2QTLbR5pOMe8rqM"},{url:"/_next/static/chunks/pages/_error-91a854d9c9cfa29b.js",revision:"Oy42S_2QTLbR5pOMe8rqM"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-4819adbe6395d9d6.js",revision:"Oy42S_2QTLbR5pOMe8rqM"},{url:"/_next/static/css/c1954d486df779bf.css",revision:"c1954d486df779bf"},{url:"/_next/static/css/d2d1e4316d2485f1.css",revision:"d2d1e4316d2485f1"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icons/icon-16x16.png",revision:"1f95c970dba1f460929a0c3e08efbffe"},{url:"/icons/icon-192x192.png",revision:"a042d84f8e417287cf93b2f578071691"},{url:"/icons/icon-256x256.png",revision:"c5ebb6546f83d7625622db39f1983271"},{url:"/icons/icon-32x32.png",revision:"78add13664d55d56114fa8db27ff6a35"},{url:"/icons/icon-512x512.png",revision:"1f0e55a12abe634f3283e0429b7f0002"},{url:"/manifest.json",revision:"e0a676dca4ac3cf8e396a5ae43ac4a7d"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
