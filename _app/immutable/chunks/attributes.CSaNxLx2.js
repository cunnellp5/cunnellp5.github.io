import{M as k,a1 as e,q as N,a2 as E,a3 as I}from"./runtime.VXYeJwNH.js";import{c as M,d as q,e as B,n as b,f as z}from"./disclose-version.B9Zvepnn.js";function D(s,i){if(i){const o=document.body;s.autofocus=!0,k(()=>{document.activeElement===o&&s.focus()})}}function G(s,i,o,c){var _=s.__attributes??(s.__attributes={});N&&(_[i]=s.getAttribute(i),i==="src"||i==="srcset"||i==="href"&&s.nodeName==="LINK")||_[i]!==(_[i]=o)&&(i==="style"&&"__styles"in s&&(s.__styles={}),i==="loading"&&(s[I]=o),o==null?s.removeAttribute(i):typeof o!="string"&&A(s).includes(i)?s[i]=o:s.setAttribute(i,o))}function S(s,i,o,c,_=!1,n=!1,K=!1){var a=i||{},$=s.tagName==="OPTION";for(var p in i)p in o||(o[p]=null);var w=A(s),L=s.__attributes??(s.__attributes={});for(const r in o){let f=o[r];if($&&r==="value"&&f==null){s.value=s.__value="",a[r]=f;continue}var d=a[r];if(f!==d){a[r]=f;var y=r[0]+r[1];if(y!=="$$"){if(y==="on"){const l={},v="$$"+r;let u=r.slice(2);var g=z(u);if(M(u)&&(u=u.slice(0,-7),l.capture=!0),!g&&d){if(f!=null)continue;s.removeEventListener(u,a[v],l),a[v]=null}if(f!=null)if(g)s[`__${u}`]=f,B([u]);else{let O=function(T){a[r].call(this,T)};a[v]=q(u,s,O,l)}}else if(r==="style"&&f!=null)s.style.cssText=f+"";else if(r==="autofocus")D(s,!!f);else if(r==="__value"||r==="value"&&f!=null)s.value=s[r]=s.__value=f;else{var t=r;_||(t=b(t)),f==null&&!n?(L[r]=null,s.removeAttribute(r)):w.includes(t)&&(n||typeof f!="string")?s[t]=f:typeof f!="function"&&(N&&(t==="src"||t==="href"||t==="srcset")||G(s,t,f))}r==="style"&&"__styles"in s&&(s.__styles={})}}}return a}var h=new Map;function A(s){var i=h.get(s.nodeName);if(i)return i;h.set(s.nodeName,i=[]);for(var o,c=e(s),_=Element.prototype;_!==c;){o=E(c);for(var n in o)o[n].set&&i.push(n);c=e(c)}return i}export{S as a,G as s};
