import{i as l,u as h,j as D,D as p,B as F,k as _,l as R,m as T,o as y,q as A,v as d,C as m,w as B,R as I,x as E,y as N,z as g,A as O,U as x,M as z,F as L,G as M,n as o,H as v,I as Y,J as q,K as H,L as w}from"./BP8nA1qi.js";function k(s,n){var e={f:0,v:s,reactions:null,equals:y,rv:0,wv:0};return e}function S(s){return K(k(s))}function V(s,n=!1){const e=k(s);return n||(e.equals=T),e}function K(s){return l!==null&&!h&&l.f&p&&(_===null?M([s]):_.push(s)),s}function W(s,n){return l!==null&&!h&&D()&&l.f&(p|F)&&(_===null||!_.includes(s))&&R(),U(s,n)}function U(s,n){return s.equals(n)||(s.v,s.v=n,s.wv=A(),C(s,g),d!==null&&d.f&m&&!(d.f&(B|I))&&(E===null?N([s]):E.push(s))),n}function C(s,n){var e=s.reactions;if(e!==null)for(var t=e.length,i=0;i<t;i++){var a=e[i],c=a.f;c&g||(O(a,n),c&(m|x)&&(c&p?C(a,z):L(a)))}}function j(s,n,e){if(s==null)return n(void 0),o;const t=v(()=>s.subscribe(n,e));return t.unsubscribe?()=>t.unsubscribe():t}const f=[];function P(s,n=o){let e=null;const t=new Set;function i(r){if(Y(s,r)&&(s=r,e)){const b=!f.length;for(const u of t)u[1](),f.push(u,s);if(b){for(let u=0;u<f.length;u+=2)f[u][0](f[u+1]);f.length=0}}}function a(r){i(r(s))}function c(r,b=o){const u=[r,b];return t.add(u),t.size===1&&(e=n(i,a)||o),r(s),()=>{t.delete(u),t.size===0&&e&&(e(),e=null)}}return{set:i,update:a,subscribe:c}}function Q(s){let n;return j(s,e=>n=e)(),n}function G(s){w===null&&q(),H(()=>{const n=v(s);if(typeof n=="function")return n})}function X(s){w===null&&q(),G(()=>()=>v(s))}export{W as a,S as b,j as c,X as d,Q as g,U as i,V as m,G as o,k as s,P as w};
