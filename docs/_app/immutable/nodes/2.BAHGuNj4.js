import{b as z,e as de,t as x,a as y,c as ue}from"../chunks/B3CeKBDR.js";import{h as I,Z as J,b as ne,Q as M,aA as me,_ as he,$ as Q,a0 as P,a1 as G,f as H,aq as pe,a2 as oe,d as U,a3 as ge,aB as W,au as se,x as Z,aC as _e,aD as ye,at as we,aE as be,e as ie,aF as Te,aG as xe,Y as ke,an as le,ar as Ae,ap as Ie,af as Ee,aH as Re,X as Le,aI as Ne,K as F,L as _,t as D,aJ as Se,p as V,g as X,i as E,r as R,u as j,n as He,aK as Me,ad as Be,aL as $}from"../chunks/BnLSTlkn.js";import{d as Ce,a as De}from"../chunks/DrWWczFx.js";import{m as Oe,s as ee,i as Ye,a as Fe,c as Ke}from"../chunks/B1-D8Orm.js";import{p as A,i as Y,b as Ge,a as We}from"../chunks/BpCfbtj-.js";import{s as qe}from"../chunks/6698f3O3.js";function ce(a,e){return e}function Je(a,e,t,o){for(var c=[],f=e.length,d=0;d<f;d++)ye(e[d].e,c,!0);var m=f>0&&c.length===0&&t!==null;if(m){var i=t.parentNode;we(i),i.append(t),o.clear(),N(a,e[0].prev,e[f-1].next)}be(c,()=>{for(var h=0;h<f;h++){var n=e[h];m||(o.delete(n.k),N(a,n.prev,n.next)),ie(n.e,!m)}})}function ve(a,e,t,o,c,f=null){var d=a,m={items:new Map,first:null};I&&J();var i=null,h=!1,n=me(()=>{var u=t();return ke(u)?u:u==null?[]:se(u)});ne(()=>{var u=M(n),v=u.length;if(h&&v===0)return;h=v===0;let s=!1;if(I){var r=d.data===he;r!==(v===0)&&(d=Q(),P(d),G(!1),s=!0)}if(I){for(var p=null,w,l=0;l<v;l++){if(H.nodeType===8&&H.data===pe){d=H,s=!0,G(!1);break}var g=u[l],b=o(g,l);w=fe(H,m,p,null,g,b,l,c,e,t),m.items.set(b,w),p=w}v>0&&P(Q())}I||Pe(u,m,d,c,e,o,t),f!==null&&(v===0?i?oe(i):i=U(()=>f(d)):i!==null&&ge(i,()=>{i=null})),s&&G(!0),M(n)}),I&&(d=H)}function Pe(a,e,t,o,c,f,d){var m=a.length,i=e.items,h=e.first,n=h,u,v=null,s=[],r=[],p,w,l,g;for(g=0;g<m;g+=1){if(p=a[g],w=f(p,g),l=i.get(w),l===void 0){var b=n?n.e.nodes_start:t;v=fe(b,e,v,v===null?e.first:v.next,p,w,g,o,c,d),i.set(w,v),s=[],r=[],n=v.next;continue}if(Ue(l,p,g),l.e.f&W&&oe(l.e),l!==n){if(u!==void 0&&u.has(l)){if(s.length<r.length){var L=r[0],k;v=L.prev;var S=s[0],C=s[s.length-1];for(k=0;k<s.length;k+=1)te(s[k],L,t);for(k=0;k<r.length;k+=1)u.delete(r[k]);N(e,S.prev,C.next),N(e,v,S),N(e,C,L),n=L,v=C,g-=1,s=[],r=[]}else u.delete(l),te(l,n,t),N(e,l.prev,l.next),N(e,l,v===null?e.first:v.next),N(e,v,l),v=l;continue}for(s=[],r=[];n!==null&&n.k!==w;)n.e.f&W||(u??(u=new Set)).add(n),r.push(n),n=n.next;if(n===null)continue;l=n}s.push(l),v=l,n=l.next}if(n!==null||u!==void 0){for(var B=u===void 0?[]:se(u);n!==null;)n.e.f&W||B.push(n),n=n.next;var O=B.length;if(O>0){var K=null;Je(e,B,K,i)}}Z.first=e.first&&e.first.e,Z.last=v&&v.e}function Ue(a,e,t,o){Ye(a.v,e),a.i=t}function fe(a,e,t,o,c,f,d,m,i,h){var n=(i&Te)!==0,u=(i&xe)===0,v=n?u?Oe(c):ee(c):c,s=i&_e?ee(d):d,r={i:s,v,k:f,a:null,e:null,prev:t,next:o};try{return r.e=U(()=>m(a,v,s,h),I),r.e.prev=t&&t.e,r.e.next=o&&o.e,t===null?e.first=r:(t.next=r,t.e.next=r.e),o!==null&&(o.prev=r,o.e.prev=r.e),r}finally{}}function te(a,e,t){for(var o=a.next?a.next.e.nodes_start:t,c=e?e.e.nodes_start:t,f=a.e.nodes_start;f!==o;){var d=le(f);c.before(f),f=d}}function N(a,e,t){e===null?a.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function q(a,e,t,o,c){var f=a,d="",m;ne(()=>{if(d===(d=e()??"")){I&&J();return}m!==void 0&&(ie(m),m=void 0),d!==""&&(m=U(()=>{if(I){H.data;for(var i=J(),h=i;i!==null&&(i.nodeType!==8||i.data!=="");)h=i,i=le(i);if(i===null)throw Ae(),Ie;z(H,h),f=P(i);return}var n=d+"",u=de(n);z(Ee(u),u.lastChild),f.before(u)}))})}function T(a,e,t,o){var c=a.__attributes??(a.__attributes={});I&&(c[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||c[e]!==(c[e]=t)&&(e==="style"&&"__styles"in a&&(a.__styles={}),e==="loading"&&(a[Re]=t),t==null?a.removeAttribute(e):typeof t!="string"&&Ve(a).includes(e)?a[e]=t:a.setAttribute(e,t))}var ae=new Map;function Ve(a){var e=ae.get(a.nodeName);if(e)return e;ae.set(a.nodeName,e=[]);for(var t,o=a,c=Element.prototype;c!==o;){t=Ne(o);for(var f in t)t[f].set&&e.push(f);o=Le(o)}return e}function Xe(a,e,t){if(t){if(a.classList.contains(e))return;a.classList.add(e)}else{if(!a.classList.contains(e))return;a.classList.remove(e)}}var ze=x('<link rel="preload" as="font" type="font/woff2" crossorigin="">'),Qe=x('<meta name="description"> <meta name="author" content="The Pudding"> <meta name="news_keywords"> <meta property="og:title"> <meta property="og:site_name" content="The Pudding"> <meta property="og:url"> <meta property="og:description"> <meta property="og:type" content="article"> <meta property="og:locale" content="en_US"> <meta property="og:image"> <meta property="og:image:type" content="image/jpeg"> <meta property="og:image:width" content="1200"> <meta property="og:image:height" content="628"> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:site" content="https://pudding.cool"> <meta name="twitter:creator" content="@puddingviz"> <meta name="twitter:title"> <meta name="twitter:description"> <meta name="twitter:image:src"> <meta name="robots" content="max-image-preview:large"> <link rel="canonical"> <!>',1);function Ze(a,e){let t=A(e,"title",3,"Title TK"),o=A(e,"description",3,"Description TK"),c=A(e,"url",3,"https://pudding.cool"),f=A(e,"keywords",3,""),d=A(e,"preloadFont",19,()=>[]);Ce(m=>{var i=Qe(),h=F(i),n=_(h,4),u=_(n,2),v=_(u,4),s=_(v,2),r=_(s,6),p=_(r,14),w=_(p,2),l=_(w,2),g=_(l,4),b=_(g,2);ve(b,17,d,ce,(L,k)=>{var S=ze();D(()=>T(S,"href",M(k))),y(L,S)}),D(()=>{Se.title=t(),T(h,"content",o()),T(n,"content",f()),T(u,"content",t()),T(v,"content",c()),T(s,"content",o()),T(r,"content",`${c()??""}/assets/social-facebook.jpg`),T(p,"content",t()),T(w,"content",o()),T(l,"content",`${c()??""}/assets/social-twitter.jpg`),T(g,"href",`${c()??""}/`)}),y(m,i)})}var je=x('<video autoplay loop playsinline="" class="svelte-13n3muw"></video>',2),$e=x('<img class="svelte-13n3muw">'),et=x("<h1><!></h1>"),tt=x("<h2><!></h2>"),at=x("<p><!></p>"),rt=x('<div class="hero svelte-13n3muw"><!> <div class="text svelte-13n3muw"><!> <!> <!></div></div>');function nt(a,e){V(e,!0);var t=rt(),o=E(t);{var c=s=>{var r=je();r.muted=!0,D(()=>T(r,"src",e.src)),y(s,r)},f=s=>{var r=$e();D(()=>{T(r,"src",e.src),T(r,"alt",e.alt)}),y(s,r)};Y(o,s=>{e.src.endsWith(".mp4")?s(c):s(f,!1)})}var d=_(o,2),m=E(d);{var i=s=>{var r=et(),p=E(r);q(p,()=>e.hed),R(r),y(s,r)};Y(m,s=>{e.hed&&s(i)})}var h=_(m,2);{var n=s=>{var r=tt(),p=E(r);q(p,()=>e.dek),R(r),y(s,r)};Y(h,s=>{e.dek&&s(n)})}var u=_(h,2);{var v=s=>{var r=at(),p=E(r);q(p,()=>e.byline),R(r),y(s,r)};Y(u,s=>{e.byline&&s(v)})}R(d),R(t),y(a,t),X()}function ot(a){nt(a,{hed:"The Long Journey Home",dek:"If you thought commuting was bad, imagine super commuting.",byline:"By Andres Larios and Jessica Blough",src:"assets/commute-images/sf-map.png",alt:"SF Map"})}var st=x(`<footer class="svelte-1emtgxe"><p>This interactive story was made in collaboration between two UC Berkeley
		Graduate School of Journalism students and instructor Michelle.</p></footer>`);function it(a){var e=st();y(a,e)}var lt=x("<div><!></div>");function ct(a,e){V(e,!0);let t=A(e,"root",3,null),o=A(e,"top",3,0),c=A(e,"bottom",3,0),f=A(e,"increments",3,100),d=A(e,"value",15,void 0),m=[],i=[],h=[],n=[],u;function v(){let l=0,g=0;for(let b=0;b<m.length;b++)m[b]>l&&(l=m[b],g=b);l>0?d(g):d(void 0)}function s(l,g){const b=O=>{O[0].isIntersecting;const K=O[0].intersectionRatio;m[g]=K,v()},L=o()?o()*-1:0,k=c()?c()*-1:0,S=`${L}px 0px ${k}px 0px`,C={root:t(),rootMargin:S,threshold:i};n[g]&&n[g].disconnect();const B=new IntersectionObserver(b,C);B.observe(l),n[g]=B}function r(){h.length&&h.forEach(s)}j(()=>{for(let l=0;l<f()+1;l++)i.push(l/f());h=u.querySelectorAll(":scope > *:not(iframe)"),r()}),j(()=>{o(),c(),r()});var p=lt(),w=E(p);qe(w,()=>e.children??He),R(p),Ge(p,l=>u=l,()=>u),y(a,p),X()}var vt=x('<div class="step svelte-1wmxx1i"><p class="svelte-1wmxx1i"> </p></div>'),ft=x('<section id="scrolly"><div class="sticky svelte-1wmxx1i"></div> <div class="spacer svelte-1wmxx1i"></div> <!> <div class="spacer svelte-1wmxx1i"></div></section>');function dt(a){let e=Ke(void 0);const t=["Scrollytelling is a great technique for telling stories with scrolling.","Everything in the container with class 'sticky' will stay put, while these steps scroll over it.","You could put images, videos, charts, or anything in that 'sticky' container.","You can have it update based on what step we're on, which is tracked in the variable called value.","Have fun!","Testing this out then"];var o=ft(),c=_(E(o),4);ct(c,{get value(){return M(e)},set value(f){Fe(e,We(f))},children:(f,d)=>{var m=ue(),i=F(m);ve(i,17,()=>t,ce,(h,n,u)=>{var v=vt();const s=Be(()=>M(e)===u);var r=E(v),p=E(r,!0);R(r),R(v),D(()=>{Xe(v,"active",M(s)),De(p,M(n))}),y(h,v)}),y(f,m)},$$slots:{default:!0}}),Me(2),R(o),y(a,o)}var ut=x("<!> <!> <!>",1);function mt(a){var e=ut(),t=F(e);ot(t);var o=_(t,2);dt(o);var c=_(o,2);it(c),y(a,e)}const ht={title:"Title TK",description:"Description tk."},pt=[{section:"intro",content:[{type:"h4",value:"An h4 element with no attributes"},{type:"text",value:"Some random text here, followed by an img tag."},{type:"img",value:{src:"../assets/demo/test.jpg",alt:"A cat"}},{type:"Test",value:{label:"I’m a custom component!",value:"50"}}]}],re={meta:ht,body:pt};function gt(){console.log("--- --- --- --- --- ---"),console.log("svelte-starter: 6.9.1"),console.log("build: 2025-03-07-23:37"),console.log("--- --- --- --- --- ---")}var _t=x("<!> <!>",1);function At(a,e){V(e,!0),gt();const t=["https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Regular.woff2","https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Bold.woff2","https://pudding.cool/assets/fonts/atlas/AtlasGrotesk-Regular-Web.woff2","https://pudding.cool/assets/fonts/atlas/AtlasGrotesk-Bold-Web.woff2"],{title:o,description:c,url:f,keywords:d}=re;$("copy",re),$("data",e.data);var m=_t(),i=F(m);Ze(i,{title:o,description:c,url:f,preloadFont:t,keywords:d});var h=_(i,2);mt(h),y(a,m),X()}export{At as component};
