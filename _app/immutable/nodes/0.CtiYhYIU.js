import{u as X,s as y,v as O,w,x as B,y as U,z as F,A as x,B as I,c as me,d as oe,n as ae}from"../chunks/scheduler.6_jAa6bA.js";import{S as P,i as j,A as ie,k as R,B as ue,a as C,d as g,C as Y,g as z,h as _,o as k,m as $,y as de,u as M,v as E,w as T,x as A,e as b,c as p,f as v,D as _e,q as ge,n as ve,j as W,l as L,z as V,E as ce,t as D,b as H}from"../chunks/index.CJirzZr_.js";import{w as ke,b as ee}from"../chunks/paths.gtmsQULH.js";import{e as te}from"../chunks/each.D6YF6ztN.js";function q(r,e){const s={},n={},t={$$scope:1};let l=r.length;for(;l--;){const o=r[l],i=e[l];if(i){for(const u in o)u in i||(n[u]=1);for(const u in i)t[u]||(s[u]=i[u],t[u]=1);r[l]=i}else for(const u in o)t[u]=1}for(const o in n)o in s||(s[o]=void 0);return s}function J(r){return typeof r=="object"&&r!==null?r:{}}const $e=!0,xe=Object.freeze(Object.defineProperty({__proto__:null,prerender:$e},Symbol.toStringTag,{value:"Module"}));function be(r){const e=r-1;return e*e*e+1}function fe(r,{delay:e=0,duration:s=400,easing:n=be,x:t=0,y:l=0,opacity:o=0}={}){const i=getComputedStyle(r),u=+i.opacity,f=i.transform==="none"?"":i.transform,h=u*(1-o),[d,a]=X(t),[c,m]=X(l);return{delay:e,duration:s,easing:n,css:(N,S)=>`
			transform: ${f} translate(${(1-N)*d}${a}, ${(1-N)*c}${m});
			opacity: ${u-h*S}`}}/**
 * @license lucide-svelte v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},ne=pe;function le(r,e,s){const n=r.slice();return n[10]=e[s][0],n[11]=e[s][1],n}function G(r){let e,s=[r[11]],n={};for(let t=0;t<s.length;t+=1)n=w(n,s[t]);return{c(){e=ie(r[10]),this.h()},l(t){e=ue(t,r[10],{}),C(e).forEach(g),this.h()},h(){Y(e,n)},m(t,l){z(t,e,l)},p(t,l){Y(e,n=q(s,[l&32&&t[11]]))},d(t){t&&g(e)}}}function se(r){let e=r[10],s,n=r[10]&&G(r);return{c(){n&&n.c(),s=R()},l(t){n&&n.l(t),s=R()},m(t,l){n&&n.m(t,l),z(t,s,l)},p(t,l){t[10]?e?y(e,t[10])?(n.d(1),n=G(t),e=t[10],n.c(),n.m(s.parentNode,s)):n.p(t,l):(n=G(t),e=t[10],n.c(),n.m(s.parentNode,s)):e&&(n.d(1),n=null,e=t[10])},d(t){t&&g(s),n&&n.d(t)}}}function Ne(r){let e,s,n,t,l,o=te(r[5]),i=[];for(let a=0;a<o.length;a+=1)i[a]=se(le(r,o,a));const u=r[9].default,f=O(u,r,r[8],null);let h=[ne,r[6],{width:r[2]},{height:r[2]},{stroke:r[1]},{"stroke-width":n=r[4]?Number(r[3])*24/Number(r[2]):r[3]},{class:t=`lucide-icon lucide lucide-${r[0]} ${r[7].class??""}`}],d={};for(let a=0;a<h.length;a+=1)d=w(d,h[a]);return{c(){e=ie("svg");for(let a=0;a<i.length;a+=1)i[a].c();s=R(),f&&f.c(),this.h()},l(a){e=ue(a,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var c=C(e);for(let m=0;m<i.length;m+=1)i[m].l(c);s=R(),f&&f.l(c),c.forEach(g),this.h()},h(){Y(e,d)},m(a,c){z(a,e,c);for(let m=0;m<i.length;m+=1)i[m]&&i[m].m(e,null);_(e,s),f&&f.m(e,null),l=!0},p(a,[c]){if(c&32){o=te(a[5]);let m;for(m=0;m<o.length;m+=1){const N=le(a,o,m);i[m]?i[m].p(N,c):(i[m]=se(N),i[m].c(),i[m].m(e,s))}for(;m<i.length;m+=1)i[m].d(1);i.length=o.length}f&&f.p&&(!l||c&256)&&B(f,u,a,a[8],l?F(u,a[8],c,null):U(a[8]),null),Y(e,d=q(h,[ne,c&64&&a[6],(!l||c&4)&&{width:a[2]},(!l||c&4)&&{height:a[2]},(!l||c&2)&&{stroke:a[1]},(!l||c&28&&n!==(n=a[4]?Number(a[3])*24/Number(a[2]):a[3]))&&{"stroke-width":n},(!l||c&129&&t!==(t=`lucide-icon lucide lucide-${a[0]} ${a[7].class??""}`))&&{class:t}]))},i(a){l||(k(f,a),l=!0)},o(a){$(f,a),l=!1},d(a){a&&g(e),de(i,a),f&&f.d(a)}}}function we(r,e,s){const n=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let t=x(e,n),{$$slots:l={},$$scope:o}=e,{name:i}=e,{color:u="currentColor"}=e,{size:f=24}=e,{strokeWidth:h=2}=e,{absoluteStrokeWidth:d=!1}=e,{iconNode:a}=e;return r.$$set=c=>{s(7,e=w(w({},e),I(c))),s(6,t=x(e,n)),"name"in c&&s(0,i=c.name),"color"in c&&s(1,u=c.color),"size"in c&&s(2,f=c.size),"strokeWidth"in c&&s(3,h=c.strokeWidth),"absoluteStrokeWidth"in c&&s(4,d=c.absoluteStrokeWidth),"iconNode"in c&&s(5,a=c.iconNode),"$$scope"in c&&s(8,o=c.$$scope)},e=I(e),[i,u,f,h,d,a,t,e,o,l]}class K extends P{constructor(e){super(),j(this,e,we,Ne,y,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}function Ce(r){let e;const s=r[2].default,n=O(s,r,r[3],null);return{c(){n&&n.c()},l(t){n&&n.l(t)},m(t,l){n&&n.m(t,l),e=!0},p(t,l){n&&n.p&&(!e||l&8)&&B(n,s,t,t[3],e?F(s,t[3],l,null):U(t[3]),null)},i(t){e||(k(n,t),e=!0)},o(t){$(n,t),e=!1},d(t){n&&n.d(t)}}}function Se(r){let e,s;const n=[{name:"moon"},r[1],{iconNode:r[0]}];let t={$$slots:{default:[Ce]},$$scope:{ctx:r}};for(let l=0;l<n.length;l+=1)t=w(t,n[l]);return e=new K({props:t}),{c(){M(e.$$.fragment)},l(l){E(e.$$.fragment,l)},m(l,o){T(e,l,o),s=!0},p(l,[o]){const i=o&3?q(n,[n[0],o&2&&J(l[1]),o&1&&{iconNode:l[0]}]):{};o&8&&(i.$$scope={dirty:o,ctx:l}),e.$set(i)},i(l){s||(k(e.$$.fragment,l),s=!0)},o(l){$(e.$$.fragment,l),s=!1},d(l){A(e,l)}}}function Me(r,e,s){let{$$slots:n={},$$scope:t}=e;const l=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]];return r.$$set=o=>{s(1,e=w(w({},e),I(o))),"$$scope"in o&&s(3,t=o.$$scope)},e=I(e),[l,e,n,t]}class Ee extends P{constructor(e){super(),j(this,e,Me,Se,y,{})}}function Te(r){let e;const s=r[2].default,n=O(s,r,r[3],null);return{c(){n&&n.c()},l(t){n&&n.l(t)},m(t,l){n&&n.m(t,l),e=!0},p(t,l){n&&n.p&&(!e||l&8)&&B(n,s,t,t[3],e?F(s,t[3],l,null):U(t[3]),null)},i(t){e||(k(n,t),e=!0)},o(t){$(n,t),e=!1},d(t){n&&n.d(t)}}}function Ae(r){let e,s;const n=[{name:"skull"},r[1],{iconNode:r[0]}];let t={$$slots:{default:[Te]},$$scope:{ctx:r}};for(let l=0;l<n.length;l+=1)t=w(t,n[l]);return e=new K({props:t}),{c(){M(e.$$.fragment)},l(l){E(e.$$.fragment,l)},m(l,o){T(e,l,o),s=!0},p(l,[o]){const i=o&3?q(n,[n[0],o&2&&J(l[1]),o&1&&{iconNode:l[0]}]):{};o&8&&(i.$$scope={dirty:o,ctx:l}),e.$set(i)},i(l){s||(k(e.$$.fragment,l),s=!0)},o(l){$(e.$$.fragment,l),s=!1},d(l){A(e,l)}}}function ye(r,e,s){let{$$slots:n={},$$scope:t}=e;const l=[["circle",{cx:"9",cy:"12",r:"1"}],["circle",{cx:"15",cy:"12",r:"1"}],["path",{d:"M8 20v2h8v-2"}],["path",{d:"m12.5 17-.5-1-.5 1h1z"}],["path",{d:"M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"}]];return r.$$set=o=>{s(1,e=w(w({},e),I(o))),"$$scope"in o&&s(3,t=o.$$scope)},e=I(e),[l,e,n,t]}class ze extends P{constructor(e){super(),j(this,e,ye,Ae,y,{})}}function We(r){let e;const s=r[2].default,n=O(s,r,r[3],null);return{c(){n&&n.c()},l(t){n&&n.l(t)},m(t,l){n&&n.m(t,l),e=!0},p(t,l){n&&n.p&&(!e||l&8)&&B(n,s,t,t[3],e?F(s,t[3],l,null):U(t[3]),null)},i(t){e||(k(n,t),e=!0)},o(t){$(n,t),e=!1},d(t){n&&n.d(t)}}}function Le(r){let e,s;const n=[{name:"sun"},r[1],{iconNode:r[0]}];let t={$$slots:{default:[We]},$$scope:{ctx:r}};for(let l=0;l<n.length;l+=1)t=w(t,n[l]);return e=new K({props:t}),{c(){M(e.$$.fragment)},l(l){E(e.$$.fragment,l)},m(l,o){T(e,l,o),s=!0},p(l,[o]){const i=o&3?q(n,[n[0],o&2&&J(l[1]),o&1&&{iconNode:l[0]}]):{};o&8&&(i.$$scope={dirty:o,ctx:l}),e.$set(i)},i(l){s||(k(e.$$.fragment,l),s=!0)},o(l){$(e.$$.fragment,l),s=!1},d(l){A(e,l)}}}function Ie(r,e,s){let{$$slots:n={},$$scope:t}=e;const l=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];return r.$$set=o=>{s(1,e=w(w({},e),I(o))),"$$scope"in o&&s(3,t=o.$$scope)},e=I(e),[l,e,n,t]}class Pe extends P{constructor(e){super(),j(this,e,Ie,Le,y,{})}}const je=localStorage.getItem("color-scheme"),he=ke(je??"dark");function De(){he.update(r=>{const e=r==="light"?"dark":"light";return document.documentElement.setAttribute("color-scheme",e),localStorage.setItem("color-scheme",e),e})}function He(r){let e,s,n,t,l="Dark",o,i;return s=new Ee({}),{c(){e=b("div"),M(s.$$.fragment),n=W(),t=b("span"),t.textContent=l,this.h()},l(u){e=p(u,"DIV",{class:!0});var f=C(e);E(s.$$.fragment,f),n=L(f),t=p(f,"SPAN",{"data-svelte-h":!0}),V(t)!=="svelte-397x2m"&&(t.textContent=l),f.forEach(g),this.h()},h(){v(e,"class","svelte-118bkwu")},m(u,f){z(u,e,f),T(s,e,null),_(e,n),_(e,t),i=!0},i(u){i||(k(s.$$.fragment,u),u&&(o||oe(()=>{o=ce(e,fe,{y:-10}),o.start()})),i=!0)},o(u){$(s.$$.fragment,u),i=!1},d(u){u&&g(e),A(s)}}}function Ve(r){let e,s,n,t,l="Light",o,i;return s=new Pe({}),{c(){e=b("div"),M(s.$$.fragment),n=W(),t=b("span"),t.textContent=l,this.h()},l(u){e=p(u,"DIV",{class:!0});var f=C(e);E(s.$$.fragment,f),n=L(f),t=p(f,"SPAN",{"data-svelte-h":!0}),V(t)!=="svelte-30gjga"&&(t.textContent=l),f.forEach(g),this.h()},h(){v(e,"class","svelte-118bkwu")},m(u,f){z(u,e,f),T(s,e,null),_(e,n),_(e,t),i=!0},i(u){i||(k(s.$$.fragment,u),u&&(o||oe(()=>{o=ce(e,fe,{y:10}),o.start()})),i=!0)},o(u){$(s.$$.fragment,u),i=!1},d(u){u&&g(e),A(s)}}}function Oe(r){let e,s,n,t,l,o;const i=[Ve,He],u=[];function f(h,d){return h[0]==="dark"?0:1}return s=f(r),n=u[s]=i[s](r),{c(){e=b("button"),n.c(),this.h()},l(h){e=p(h,"BUTTON",{"aria-label":!0,class:!0});var d=C(e);n.l(d),d.forEach(g),this.h()},h(){v(e,"aria-label","Toggle theme"),v(e,"class","svelte-118bkwu")},m(h,d){z(h,e,d),u[s].m(e,null),t=!0,l||(o=_e(e,"click",De),l=!0)},p(h,[d]){let a=s;s=f(h),s!==a&&(ge(),$(u[a],1,1,()=>{u[a]=null}),ve(),n=u[s],n||(n=u[s]=i[s](h),n.c()),k(n,1),n.m(e,null))},i(h){t||(k(n),t=!0)},o(h){$(n),t=!1},d(h){h&&g(e),u[s].d(),l=!1,o()}}}function Be(r,e,s){let n;return me(r,he,t=>s(0,n=t)),[n]}class Ue extends P{constructor(e){super(),j(this,e,Be,Oe,y,{})}}function Fe(r){let e,s,n="<b>&lt;Phil Cunnell /&gt;</b>",t,l,o=`<li><a href="${ee}/about" class="svelte-1utw5cl">About</a></li>`,i,u,f;return u=new Ue({}),{c(){e=b("nav"),s=b("a"),s.innerHTML=n,t=W(),l=b("ul"),l.innerHTML=o,i=W(),M(u.$$.fragment),this.h()},l(h){e=p(h,"NAV",{class:!0});var d=C(e);s=p(d,"A",{href:!0,class:!0,"data-svelte-h":!0}),V(s)!=="svelte-1brlu7f"&&(s.innerHTML=n),t=L(d),l=p(d,"UL",{class:!0,"data-svelte-h":!0}),V(l)!=="svelte-kvn6z5"&&(l.innerHTML=o),i=L(d),E(u.$$.fragment,d),d.forEach(g),this.h()},h(){v(s,"href",ee+"/"),v(s,"class","svelte-1utw5cl"),v(l,"class","links svelte-1utw5cl"),v(e,"class","svelte-1utw5cl")},m(h,d){z(h,e,d),_(e,s),_(e,t),_(e,l),_(e,i),T(u,e,null),f=!0},p:ae,i(h){f||(k(u.$$.fragment,h),f=!0)},o(h){$(u.$$.fragment,h),f=!1},d(h){h&&g(e),A(u)}}}class qe extends P{constructor(e){super(),j(this,e,null,Fe,y,{})}}const re="Philip Cunnell";function Re(r){let e,s,n,t,l=new Date().getFullYear()+"",o,i,u,f,h,d,a,c;return a=new ze({props:{size:"16"}}),{c(){e=b("footer"),s=b("p"),n=D("© "),t=b("span"),o=D(l),i=W(),u=D(re),f=D(`.
        `),h=b("a"),d=D(`Created with
            `),M(a.$$.fragment),this.h()},l(m){e=p(m,"FOOTER",{class:!0});var N=C(e);s=p(N,"P",{class:!0});var S=C(s);n=H(S,"© "),t=p(S,"SPAN",{id:!0});var Q=C(t);o=H(Q,l),Q.forEach(g),i=L(S),u=H(S,re),f=H(S,`.
        `),h=p(S,"A",{target:!0,rel:!0,href:!0,class:!0});var Z=C(h);d=H(Z,`Created with
            `),E(a.$$.fragment,Z),Z.forEach(g),S.forEach(g),N.forEach(g),this.h()},h(){v(t,"id","year"),v(h,"target","_blank"),v(h,"rel","noopener"),v(h,"href","humans.txt"),v(h,"class","footer-link svelte-1t4ciac"),v(s,"class","svelte-1t4ciac"),v(e,"class","svelte-1t4ciac")},m(m,N){z(m,e,N),_(e,s),_(s,n),_(s,t),_(t,o),_(s,i),_(s,u),_(s,f),_(s,h),_(h,d),T(a,h,null),c=!0},p:ae,i(m){c||(k(a.$$.fragment,m),c=!0)},o(m){$(a.$$.fragment,m),c=!1},d(m){m&&g(e),A(a)}}}class Ye extends P{constructor(e){super(),j(this,e,null,Re,y,{})}}function Ze(r){let e,s,n='<div class="rainbow-progress"></div>',t,l,o,i,u,f,h;l=new qe({});const d=r[1].default,a=O(d,r,r[0],null);return f=new Ye({}),{c(){e=b("div"),s=b("div"),s.innerHTML=n,t=W(),M(l.$$.fragment),o=W(),i=b("main"),a&&a.c(),u=W(),M(f.$$.fragment),this.h()},l(c){e=p(c,"DIV",{class:!0});var m=C(e);s=p(m,"DIV",{class:!0,"data-svelte-h":!0}),V(s)!=="svelte-121d9z3"&&(s.innerHTML=n),t=L(m),E(l.$$.fragment,m),o=L(m),i=p(m,"MAIN",{class:!0});var N=C(i);a&&a.l(N),N.forEach(g),u=L(m),E(f.$$.fragment,m),m.forEach(g),this.h()},h(){v(s,"class","rainbow"),v(i,"class","svelte-taotfk"),v(e,"class","layout svelte-taotfk")},m(c,m){z(c,e,m),_(e,s),_(e,t),T(l,e,null),_(e,o),_(e,i),a&&a.m(i,null),_(e,u),T(f,e,null),h=!0},p(c,[m]){a&&a.p&&(!h||m&1)&&B(a,d,c,c[0],h?F(d,c[0],m,null):U(c[0]),null)},i(c){h||(k(l.$$.fragment,c),k(a,c),k(f.$$.fragment,c),h=!0)},o(c){$(l.$$.fragment,c),$(a,c),$(f.$$.fragment,c),h=!1},d(c){c&&g(e),A(l),a&&a.d(c),A(f)}}}function Ge(r,e,s){let{$$slots:n={},$$scope:t}=e;return r.$$set=l=>{"$$scope"in l&&s(0,t=l.$$scope)},[t,n]}class et extends P{constructor(e){super(),j(this,e,Ge,Ze,y,{})}}export{et as component,xe as universal};