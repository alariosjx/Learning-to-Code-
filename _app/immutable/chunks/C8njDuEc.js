import{V as S,W,X,Y as J,Z as P,_ as d,$ as T,x as q,a0 as Q,a1 as k,a2 as ee,b as $,h as p,P as H,E as z,a3 as re,a4 as te,S as ae,a5 as Y,a6 as M,d as F,a7 as j,f as G,a8 as ne,a9 as ie,aa as fe,a as B,ab as se,ac as ue,q as le,ad as ce,ae as V,y as ve,R as _e,af as K,ag as de,ah as oe,ai as he,aj as N}from"./BBTmZny8.js";import{s as w,a as y,m as be}from"./RMDxL42i.js";import{c as ge}from"./BtA9UtJ6.js";function I(e,a=null,s){if(typeof e!="object"||e===null||S in e)return e;const n=k(e);if(n!==W&&n!==X)return e;var r=new Map,l=ee(e),h=w(0);l&&r.set("length",w(e.length));var g;return new Proxy(e,{defineProperty(c,t,i){(!("value"in i)||i.configurable===!1||i.enumerable===!1||i.writable===!1)&&Q();var u=r.get(t);return u===void 0?(u=w(i.value),r.set(t,u)):y(u,I(i.value,g)),!0},deleteProperty(c,t){var i=r.get(t);if(i===void 0)t in c&&r.set(t,w(d));else{if(l&&typeof t=="string"){var u=r.get("length"),f=Number(t);Number.isInteger(f)&&f<u.v&&y(u,f)}y(i,d),U(h)}return!0},get(c,t,i){var _;if(t===S)return e;var u=r.get(t),f=t in c;if(u===void 0&&(!f||(_=T(c,t))!=null&&_.writable)&&(u=w(I(f?c[t]:d,g)),r.set(t,u)),u!==void 0){var v=P(u);return v===d?void 0:v}return Reflect.get(c,t,i)},getOwnPropertyDescriptor(c,t){var i=Reflect.getOwnPropertyDescriptor(c,t);if(i&&"value"in i){var u=r.get(t);u&&(i.value=P(u))}else if(i===void 0){var f=r.get(t),v=f==null?void 0:f.v;if(f!==void 0&&v!==d)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return i},has(c,t){var v;if(t===S)return!0;var i=r.get(t),u=i!==void 0&&i.v!==d||Reflect.has(c,t);if(i!==void 0||q!==null&&(!u||(v=T(c,t))!=null&&v.writable)){i===void 0&&(i=w(u?I(c[t],g):d),r.set(t,i));var f=P(i);if(f===d)return!1}return u},set(c,t,i,u){var O;var f=r.get(t),v=t in c;if(l&&t==="length")for(var _=i;_<f.v;_+=1){var m=r.get(_+"");m!==void 0?y(m,d):_ in c&&(m=w(d),r.set(_+"",m))}f===void 0?(!v||(O=T(c,t))!=null&&O.writable)&&(f=w(void 0),y(f,I(i,g)),r.set(t,f)):(v=f.v!==d,y(f,I(i,g)));var b=Reflect.getOwnPropertyDescriptor(c,t);if(b!=null&&b.set&&b.set.call(u,i),!v){if(l&&typeof t=="string"){var x=r.get("length"),R=Number(t);Number.isInteger(R)&&R>=x.v&&y(x,R+1)}U(h)}return!0},ownKeys(c){P(h);var t=Reflect.ownKeys(c).filter(f=>{var v=r.get(f);return v===void 0||v.v!==d});for(var[i,u]of r)u.v!==d&&!(i in c)&&t.push(i);return t},setPrototypeOf(){J()}})}function U(e,a=1){y(e,e.v+a)}function Ee(e,a,s=!1){p&&H();var n=e,r=null,l=null,h=d,g=s?z:0,c=!1;const t=(u,f=!0)=>{c=!0,i(f,u)},i=(u,f)=>{if(h===(h=u))return;let v=!1;if(p){const _=n.data===re;!!h===_&&(n=te(),ae(n),Y(!1),v=!0)}h?(r?M(r):f&&(r=F(()=>f(n))),l&&j(l,()=>{l=null})):(l?M(l):f&&(l=F(()=>f(n))),r&&j(r,()=>{r=null})),v&&Y(!0)};$(()=>{c=!1,a(t),c||i(null,null)},g),p&&(n=G)}function Ie(e,a,s){p&&H();var n=e,r,l;$(()=>{r!==(r=a())&&(l&&(j(l),l=null),r&&(l=F(()=>s(n,r))))},z),p&&(n=G)}function Z(e,a){return e===a||(e==null?void 0:e[S])===a}function Se(e={},a,s,n){return ne(()=>{var r,l;return ie(()=>{r=l,l=[],B(()=>{e!==s(...l)&&(a(e,...l),r&&Z(s(...r),e)&&a(null,...r))})}),()=>{fe(()=>{l&&Z(s(...l),e)&&a(null,...l)})}}),e}const ye={get(e,a){let s=e.props.length;for(;s--;){let n=e.props[s];if(N(n)&&(n=n()),typeof n=="object"&&n!==null&&a in n)return n[a]}},set(e,a,s){let n=e.props.length;for(;n--;){let r=e.props[n];N(r)&&(r=r());const l=T(r,a);if(l&&l.set)return l.set(s),!0}return!1},getOwnPropertyDescriptor(e,a){let s=e.props.length;for(;s--;){let n=e.props[s];if(N(n)&&(n=n()),typeof n=="object"&&n!==null&&a in n){const r=T(n,a);return r&&!r.configurable&&(r.configurable=!0),r}}},has(e,a){if(a===S||a===V)return!1;for(let s of e.props)if(N(s)&&(s=s()),s!=null&&a in s)return!0;return!1},ownKeys(e){const a=[];for(let s of e.props){N(s)&&(s=s());for(const n in s)a.includes(n)||a.push(n)}return a}};function Te(...e){return new Proxy({props:e},ye)}function we(e){for(var a=q,s=q;a!==null&&!(a.f&(ve|_e));)a=a.parent;try{return K(a),e()}finally{K(s)}}function Oe(e,a,s,n){var C;var r=(s&de)!==0,l=!0,h=(s&ce)!==0,g=(s&he)!==0,c=!1,t;h?[t,c]=ge(()=>e[a]):t=e[a];var i=S in e||V in e,u=h&&(((C=T(e,a))==null?void 0:C.set)??(i&&a in e&&(o=>e[a]=o)))||void 0,f=n,v=!0,_=!1,m=()=>(_=!0,v&&(v=!1,g?f=B(n):f=n),f);t===void 0&&n!==void 0&&(u&&l&&se(),t=m(),u&&u(t));var b;if(b=()=>{var o=e[a];return o===void 0?m():(v=!0,_=!1,o)},!(s&ue))return b;if(u){var x=e.$$legacy;return function(o,E){return arguments.length>0?((!E||x||c)&&u(E?b():o),o):b()}}var R=!1,O=!1,D=be(t),A=we(()=>oe(()=>{var o=b(),E=P(D);return R?(R=!1,O=!0,E):(O=!1,D.v=o)}));return r||(A.equals=le),function(o,E){if(arguments.length>0){const L=E?P(A):h?I(o):o;return A.equals(L)||(R=!0,y(D,L),_&&f!==void 0&&(f=L),B(()=>P(A))),o}return P(A)}}export{I as a,Se as b,Ie as c,Ee as i,Oe as p,Te as s};
