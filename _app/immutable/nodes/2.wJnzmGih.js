import{g as m,t as u}from"../chunks/disclose-version.B9Zvepnn.js";import"../chunks/legacy.DqbpYB9P.js";import{a7 as p,a5 as i,a6 as e,a4 as f,z as d,ax as P}from"../chunks/runtime.VXYeJwNH.js";import{s as y}from"../chunks/attributes.CSaNxLx2.js";import{s as _}from"../chunks/render.hJHC_a1R.js";import{e as x,i as w}from"../chunks/each.B6xm6-TJ.js";const D=[{icon:"🐙",description:"Github",url:"https://github.com/cunnellp5",display:"github.com/cunnellp5"},{icon:"📄",description:"LinkedIn",url:"https://www.linkedin.com/in/philip-cunnell/",display:"linkedin.com/in/philip-cunnell/"}],M=[{icon:"🧶",description:"Animations",url:"https://animations.philcunnell.dev",display:"animations.philcunnell.dev"},{icon:"🥽",description:"MiniApps",url:"https://minis.philcunnell.dev",display:"minis.philcunnell.dev"}];var j=u('<li class="svelte-hybv1k"><a class="description svelte-hybv1k" target="_blank" rel="noopener"> </a></li>'),z=u('<li class="svelte-hybv1k"><a class="description svelte-hybv1k" target="_blank" rel="noopener"> </a></li>'),A=u('<article><div class="svelte-hybv1k"><h6 class="svelte-hybv1k">Freelanced:</h6> <ul><li class="svelte-hybv1k"><a class="description svelte-hybv1k" target="_blank" rel="noopener" href="https://theriversings.com">TheRiverSings.com</a></li></ul></div> <div class="svelte-hybv1k"><h6 class="svelte-hybv1k">Projects:</h6> <ul class="links svelte-hybv1k"></ul></div> <div class="svelte-hybv1k"><h6 class="svelte-hybv1k">Other:</h6> <ul class="links svelte-hybv1k"></ul></div></article>');function I(b){var n=A(),o=p(i(n),2),a=p(i(o),2);x(a,5,()=>M,w,(v,l)=>{let h=()=>d(l).description,k=()=>d(l).url;var s=j(),t=i(s),g=i(t,!0);e(t),e(s),f(()=>{y(t,"href",k()),_(g,h())}),m(v,s)}),e(a),e(o);var r=p(o,2),c=p(i(r),2);x(c,5,()=>D,w,(v,l)=>{let h=()=>d(l).description,k=()=>d(l).url;var s=z(),t=i(s),g=i(t,!0);e(t),e(s),f(()=>{y(t,"href",k()),_(g,h())}),m(v,s)}),e(c),e(r),e(n),m(b,n)}var L=u('<article class="svelte-1h03dsb"><header class="svelte-1h03dsb"><div class="clipper background"><img height="200px" width="200px" alt="Philip Cunnell"></div> <div class="title-text-wrapper"><h1>Phil</h1> <small style="font-weight: 600; font-size: 20px">Software Developer.</small></div></header> <section><!></section></article>');function T(b){const n=Math.floor(Math.random()*4),o=["/images/phil-mosh2.gif","/images/phil-mosh5.gif","/images/phil-moshed4.gif","/images/me.webp"];var a=L(),r=i(a),c=i(r),v=i(c);e(c),P(2),e(r);var l=p(r,2),h=i(l);I(h),e(l),e(a),f(()=>y(v,"src",o[n])),m(b,a)}export{T as component};