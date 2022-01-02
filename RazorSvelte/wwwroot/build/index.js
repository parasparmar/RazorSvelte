var index=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n,s){return t[1]&&s?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](s(e))):n.ctx}function a(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let g;function p(t){g=t}const m=[],v=[],b=[],y=[],_=Promise.resolve();let $=!1;function E(t){b.push(t)}const A=new Set;let w=0;function x(){const t=g;do{for(;w<m.length;){const t=m[w];w++,p(t),C(t.$$)}for(p(null),m.length=0,w=0;v.length;)v.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];A.has(e)||(A.add(e),e())}b.length=0}while(m.length);for(;y.length;)y.pop()();$=!1,A.clear(),p(t)}function C(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const T=new Set;function S(t,e){t&&t.i&&(T.delete(t),t.i(e))}function L(t,e,n,s){if(t&&t.o){if(T.has(t))return;T.add(t),undefined.c.push((()=>{T.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function O(t){t&&t.c()}function z(t,n,o,i){const{fragment:a,on_mount:l,on_destroy:c,after_update:u}=t.$$;a&&a.m(n,o),i||E((()=>{const n=l.map(e).filter(r);c?c.push(...n):s(n),t.$$.on_mount=[]})),u.forEach(E)}function N(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function k(t,e){-1===t.$$.dirty[0]&&(m.push(t),$||($=!0,_.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(e,r,o,i,a,l,u,d=[-1]){const f=g;p(e);const h=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(f?f.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:r.target||f.$$.root};u&&u(h.root);let m=!1;if(h.ctx=o?o(e,r.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),m&&k(e,t)),n})):[],h.update(),m=!0,s(h.before_update),h.fragment=!!i&&i(h.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);h.fragment&&h.fragment.l(t),t.forEach(c)}else h.fragment&&h.fragment.c();r.intro&&S(e.$$.fragment),z(e,r.target,r.anchor,r.customElement),x()}p(f)}class j{$destroy(){N(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const M=(q="urls",JSON.parse((t=>{let e=document.querySelector(`input#${t}[type=hidden]`);if(!e)return null;let n=e.value;return e.remove(),n})(q)));var q;function H(e){let n,s;return{c(){n=u("a"),s=d("Login"),h(n,"class","btn btn-outline-success"),h(n,"href",M.loginUrl)},m(t,e){l(t,n,e),a(n,s)},p:t,d(t){t&&c(n)}}}function P(e){let n,s,r,o,i;return{c(){n=u("div"),s=u("div"),s.textContent=`${e[0].email}`,r=f(),o=u("a"),i=d("Logout"),h(s,"class","nav-item p-2"),h(o,"class","btn btn-outline-success"),h(o,"href",M.logoutUrl),h(n,"class","navbar-nav")},m(t,e){l(t,n,e),a(n,s),a(n,r),a(n,o),a(o,i)},p:t,d(t){t&&c(n)}}}function I(e){let n,s,r,o,i,g,p,m,v,b,y,_,$,E,A,w,x,C,T,S,L,O,z,N,k,D,j,q;let I=function(t,e){return t[0].isSigned?P:H}(e),U=I(e);return{c(){n=f(),s=u("header"),r=u("nav"),o=u("div"),i=u("a"),g=d("RazorSvelte"),p=f(),m=u("button"),m.innerHTML='<span class="navbar-toggler-icon"></span>',v=f(),b=u("div"),y=u("ul"),_=u("li"),$=u("a"),E=d("Home"),A=f(),w=u("li"),x=u("a"),C=d("Privacy"),T=f(),S=u("li"),L=u("a"),O=d("Authorized Access"),z=f(),N=u("li"),k=u("a"),D=d("Spa Example"),j=f(),q=u("div"),U.c(),h(i,"class","navbar-brand"),h(i,"href",M.indexUrl),h(m,"class","navbar-toggler"),h(m,"type","button"),h(m,"data-bs-toggle","collapse"),h(m,"data-bs-target","#navbarCollapse"),h(m,"aria-controls","navbarCollapse"),h(m,"aria-expanded","false"),h(m,"aria-label","Toggle navigation"),h($,"class","nav-link active"),h($,"href",M.indexUrl),h(_,"class","nav-item"),h(x,"class","nav-link"),h(x,"href",M.privacyUrl),h(w,"class","nav-item"),h(L,"class","nav-link"),h(L,"href",M.authorizedUrl),h(S,"class","nav-item"),h(k,"class","nav-link"),h(k,"href",M.spaUrl),h(N,"class","nav-item"),h(y,"class","navbar-nav me-auto mb-2 mb-md-0"),h(q,"class","d-flex"),h(b,"class","collapse navbar-collapse"),h(b,"id","navbarCollapse"),h(o,"class","container-fluid"),h(r,"class","navbar navbar-expand-md navbar-light fixed-top bg-light")},m(t,e){l(t,n,e),l(t,s,e),a(s,r),a(r,o),a(o,i),a(i,g),a(o,p),a(o,m),a(o,v),a(o,b),a(b,y),a(y,_),a(_,$),a($,E),a(y,A),a(y,w),a(w,x),a(x,C),a(y,T),a(y,S),a(S,L),a(L,O),a(y,z),a(y,N),a(N,k),a(k,D),a(b,j),a(b,q),U.m(q,null)},p(t,[e]){U.p(t,e)},i:t,o:t,d(t){t&&c(n),t&&c(s),U.d()}}}function U(t){return[(()=>{const t={},e=[];for(let n of document.getElementsByTagName("input"))"hidden"==n.type&&(n.id.startsWith("is")?t[n.id]="true"==n.value.toLowerCase():t[n.id]=n.value,e.push(n));for(let t of e)t.remove();return t})()]}class Y extends j{constructor(t){super(),D(this,t,U,I,o,{})}}function B(e){let n,s,r,o,i,g,p;return{c(){n=f(),s=u("footer"),r=u("div"),o=u("span"),i=d("© 2021 - RazorSvelte - "),g=u("a"),p=d("Privacy"),h(g,"href",M.privacyUrl),h(o,"class","text-muted"),h(r,"class","container py-5"),h(s,"class","footer mt-auto py-3 bg-light")},m(t,e){l(t,n,e),l(t,s,e),a(s,r),a(r,o),a(o,i),a(o,g),a(g,p)},p:t,i:t,o:t,d(t){t&&c(n),t&&c(s)}}}class K extends j{constructor(t){super(),D(this,t,null,B,o,{})}}function R(t){let e,n,s,r,o,a;e=new Y({});const d=t[1].default,h=function(t,e,n,s){if(t){const r=i(t,e,n,s);return t[0](r)}}(d,t,t[0],null);return o=new K({}),{c(){O(e.$$.fragment),n=f(),s=u("main"),h&&h.c(),r=f(),O(o.$$.fragment)},m(t,i){z(e,t,i),l(t,n,i),l(t,s,i),h&&h.m(s,null),l(t,r,i),z(o,t,i),a=!0},p(t,[e]){h&&h.p&&(!a||1&e)&&function(t,e,n,s,r,o){if(r){const a=i(e,n,s,o);t.p(a,r)}}(h,d,t,t[0],a?function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(d,t[0],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[0]),null)},i(t){a||(S(e.$$.fragment,t),S(h,t),S(o.$$.fragment,t),a=!0)},o(t){L(e.$$.fragment,t),L(h,t),L(o.$$.fragment,t),a=!1},d(t){N(e,t),t&&c(n),t&&c(s),h&&h.d(t),t&&c(r),N(o,t)}}}function W(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=t=>{"$$scope"in t&&n(0,r=t.$$scope)},[r,s]}class F extends j{constructor(t){super(),D(this,t,W,R,o,{})}}function Q(t){let e,n,s,r,o,i,g,p,m,v,b,y,_,$;return{c(){e=u("div"),n=u("h1"),s=d("Welcome "),r=d(t[0]),o=f(),i=u("p"),i.innerHTML='Learn about <a href="https://docs.microsoft.com/aspnet/core" class="svelte-1hyzzcm">building Web apps with ASP.NET Core</a>.',g=f(),p=u("p"),p.innerHTML='Learn about <a href="https://svelte.dev/" class="svelte-1hyzzcm">svelte</a>.',m=f(),v=u("p"),v.innerHTML='Check out awesome <a href="https://svelte.dev/tutorial/basics" class="svelte-1hyzzcm">svelte tutorial</a>.',b=f(),y=u("p"),y.innerHTML='See also <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" class="svelte-1hyzzcm">bootstrap documentation</a>.',_=f(),$=u("p"),$.innerHTML='And, for better and easier css, you might also want to catch up on <a href="https://sass-lang.com/guide" class="svelte-1hyzzcm">scss and sass language</a>.',h(n,"class","display-4 svelte-1hyzzcm"),h(i,"class","svelte-1hyzzcm"),h(p,"class","svelte-1hyzzcm"),h(v,"class","svelte-1hyzzcm"),h(y,"class","svelte-1hyzzcm"),h($,"class","svelte-1hyzzcm"),h(e,"class","container text-center")},m(t,c){l(t,e,c),a(e,n),a(n,s),a(n,r),a(e,o),a(e,i),a(e,g),a(e,p),a(e,m),a(e,v),a(e,b),a(e,y),a(e,_),a(e,$)},p(t,e){1&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(r,t[0])},d(t){t&&c(e)}}}function V(t){let e,n;return e=new F({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),{c(){O(e.$$.fragment)},m(t,s){z(e,t,s),n=!0},p(t,[n]){const s={};3&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){N(e,t)}}}function J(t,e,n){let{name:s}=e;return t.$$set=t=>{"name"in t&&n(0,s=t.name)},[s]}const X="transitionend",Z=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&"#"!==n?n.trim():null}return e},G=t=>{const e=Z(t);return e&&document.querySelector(e)?e:null},tt=t=>{const e=Z(t);return e?document.querySelector(e):null},et=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),nt=t=>et(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(t):null,st=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},rt=[],ot=t=>{"function"==typeof t&&t()},it=(t,e,n=!0)=>{if(!n)return void ot(t);const s=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const s=Number.parseFloat(e),r=Number.parseFloat(n);return s||r?(e=e.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(n))):0})(e)+5;let r=!1;const o=({target:n})=>{n===e&&(r=!0,e.removeEventListener(X,o),ot(t))};e.addEventListener(X,o),setTimeout((()=>{r||(t=>{t.dispatchEvent(new Event(X))})(e)}),s)},at=new Map;var lt={set(t,e,n){at.has(t)||at.set(t,new Map);const s=at.get(t);s.has(e)||0===s.size?s.set(e,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)},get:(t,e)=>at.has(t)&&at.get(t).get(e)||null,remove(t,e){if(!at.has(t))return;const n=at.get(t);n.delete(e),0===n.size&&at.delete(t)}};const ct=/[^.]*(?=\..*)\.|.*/,ut=/\..*/,dt=/::\d+$/,ft={};let ht=1;const gt={mouseenter:"mouseover",mouseleave:"mouseout"},pt=/^(mouseenter|mouseleave)/i,mt=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function vt(t,e){return e&&`${e}::${ht++}`||t.uidEvent||ht++}function bt(t){const e=vt(t);return t.uidEvent=e,ft[e]=ft[e]||{},ft[e]}function yt(t,e,n=null){const s=Object.keys(t);for(let r=0,o=s.length;r<o;r++){const o=t[s[r]];if(o.originalHandler===e&&o.delegationSelector===n)return o}return null}function _t(t,e,n){const s="string"==typeof e,r=s?n:e;let o=At(t);return mt.has(o)||(o=t),[s,r,o]}function $t(t,e,n,s,r){if("string"!=typeof e||!t)return;if(n||(n=s,s=null),pt.test(e)){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};s?s=t(s):n=t(n)}const[o,i,a]=_t(e,n,s),l=bt(t),c=l[a]||(l[a]={}),u=yt(c,i,o?n:null);if(u)return void(u.oneOff=u.oneOff&&r);const d=vt(i,e.replace(ct,"")),f=o?function(t,e,n){return function s(r){const o=t.querySelectorAll(e);for(let{target:i}=r;i&&i!==this;i=i.parentNode)for(let a=o.length;a--;)if(o[a]===i)return r.delegateTarget=i,s.oneOff&&wt.off(t,r.type,e,n),n.apply(i,[r]);return null}}(t,n,s):function(t,e){return function n(s){return s.delegateTarget=t,n.oneOff&&wt.off(t,s.type,e),e.apply(t,[s])}}(t,n);f.delegationSelector=o?n:null,f.originalHandler=i,f.oneOff=r,f.uidEvent=d,c[d]=f,t.addEventListener(a,f,o)}function Et(t,e,n,s,r){const o=yt(e[n],s,r);o&&(t.removeEventListener(n,o,Boolean(r)),delete e[n][o.uidEvent])}function At(t){return t=t.replace(ut,""),gt[t]||t}const wt={on(t,e,n,s){$t(t,e,n,s,!1)},one(t,e,n,s){$t(t,e,n,s,!0)},off(t,e,n,s){if("string"!=typeof e||!t)return;const[r,o,i]=_t(e,n,s),a=i!==e,l=bt(t),c=e.startsWith(".");if(void 0!==o){if(!l||!l[i])return;return void Et(t,l,i,o,r?n:null)}c&&Object.keys(l).forEach((n=>{!function(t,e,n,s){const r=e[n]||{};Object.keys(r).forEach((o=>{if(o.includes(s)){const s=r[o];Et(t,e,n,s.originalHandler,s.delegationSelector)}}))}(t,l,n,e.slice(1))}));const u=l[i]||{};Object.keys(u).forEach((n=>{const s=n.replace(dt,"");if(!a||e.includes(s)){const e=u[n];Et(t,l,i,e.originalHandler,e.delegationSelector)}}))},trigger(t,e,n){if("string"!=typeof e||!t)return null;const s=st(),r=At(e),o=e!==r,i=mt.has(r);let a,l=!0,c=!0,u=!1,d=null;return o&&s&&(a=s.Event(e,n),s(t).trigger(a),l=!a.isPropagationStopped(),c=!a.isImmediatePropagationStopped(),u=a.isDefaultPrevented()),i?(d=document.createEvent("HTMLEvents"),d.initEvent(r,l,!0)):d=new CustomEvent(e,{bubbles:l,cancelable:!0}),void 0!==n&&Object.keys(n).forEach((t=>{Object.defineProperty(d,t,{get:()=>n[t]})})),u&&d.preventDefault(),c&&t.dispatchEvent(d),d.defaultPrevented&&void 0!==a&&a.preventDefault(),d}};function xt(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function Ct(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const Tt={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${Ct(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${Ct(e)}`)},getDataAttributes(t){if(!t)return{};const e={};return Object.keys(t.dataset).filter((t=>t.startsWith("bs"))).forEach((n=>{let s=n.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1,s.length),e[s]=xt(t.dataset[n])})),e},getDataAttribute:(t,e)=>xt(t.getAttribute(`data-bs-${Ct(e)}`)),offset(t){const e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},position:t=>({top:t.offsetTop,left:t.offsetLeft})},St={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const n=[];let s=t.parentNode;for(;s&&s.nodeType===Node.ELEMENT_NODE&&3!==s.nodeType;)s.matches(e)&&n.push(s),s=s.parentNode;return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(", ");return this.find(e,t).filter((t=>!(t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")))(t)&&(t=>!(!et(t)||0===t.getClientRects().length)&&"visible"===getComputedStyle(t).getPropertyValue("visibility"))(t)))}};const Lt="collapse",Ot="bs.collapse",zt={toggle:!0,parent:null},Nt={toggle:"boolean",parent:"(null|element)"},kt="show",Dt="collapse",jt="collapsing",Mt="collapsed",qt=":scope .collapse .collapse",Ht='[data-bs-toggle="collapse"]';class Pt extends class{constructor(t){(t=nt(t))&&(this._element=t,lt.set(this._element,this.constructor.DATA_KEY,this))}dispose(){lt.remove(this._element,this.constructor.DATA_KEY),wt.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((t=>{this[t]=null}))}_queueCallback(t,e,n=!0){it(t,e,n)}static getInstance(t){return lt.get(nt(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.1.3"}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}{constructor(t,e){super(t),this._isTransitioning=!1,this._config=this._getConfig(e),this._triggerArray=[];const n=St.find(Ht);for(let t=0,e=n.length;t<e;t++){const e=n[t],s=G(e),r=St.find(s).filter((t=>t===this._element));null!==s&&r.length&&(this._selector=s,this._triggerArray.push(e))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return zt}static get NAME(){return Lt}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t,e=[];if(this._config.parent){const t=St.find(qt,this._config.parent);e=St.find(".collapse.show, .collapse.collapsing",this._config.parent).filter((e=>!t.includes(e)))}const n=St.findOne(this._selector);if(e.length){const s=e.find((t=>n!==t));if(t=s?Pt.getInstance(s):null,t&&t._isTransitioning)return}if(wt.trigger(this._element,"show.bs.collapse").defaultPrevented)return;e.forEach((e=>{n!==e&&Pt.getOrCreateInstance(e,{toggle:!1}).hide(),t||lt.set(e,Ot,null)}));const s=this._getDimension();this._element.classList.remove(Dt),this._element.classList.add(jt),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(jt),this._element.classList.add(Dt,kt),this._element.style[s]="",wt.trigger(this._element,"shown.bs.collapse")}),this._element,!0),this._element.style[s]=`${this._element[r]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(wt.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,(t=>{t.offsetHeight})(this._element),this._element.classList.add(jt),this._element.classList.remove(Dt,kt);const e=this._triggerArray.length;for(let t=0;t<e;t++){const e=this._triggerArray[t],n=tt(e);n&&!this._isShown(n)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(jt),this._element.classList.add(Dt),wt.trigger(this._element,"hidden.bs.collapse")}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(kt)}_getConfig(t){return(t={...zt,...Tt.getDataAttributes(this._element),...t}).toggle=Boolean(t.toggle),t.parent=nt(t.parent),((t,e,n)=>{Object.keys(n).forEach((s=>{const r=n[s],o=e[s],i=o&&et(o)?"element":null==(a=o)?`${a}`:{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();var a;if(!new RegExp(r).test(i))throw new TypeError(`${t.toUpperCase()}: Option "${s}" provided type "${i}" but expected type "${r}".`)}))})(Lt,t,Nt),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=St.find(qt,this._config.parent);St.find(Ht,this._config.parent).filter((e=>!t.includes(e))).forEach((t=>{const e=tt(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}))}_addAriaAndCollapsedClass(t,e){t.length&&t.forEach((t=>{e?t.classList.remove(Mt):t.classList.add(Mt),t.setAttribute("aria-expanded",e)}))}static jQueryInterface(t){return this.each((function(){const e={};"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1);const n=Pt.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===n[t])throw new TypeError(`No method named "${t}"`);n[t]()}}))}}var It,Ut;return wt.on(document,"click.bs.collapse.data-api",Ht,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=G(this);St.find(e).forEach((t=>{Pt.getOrCreateInstance(t,{toggle:!1}).toggle()}))})),It=Pt,Ut=()=>{const t=st();if(t){const e=It.NAME,n=t.fn[e];t.fn[e]=It.jQueryInterface,t.fn[e].Constructor=It,t.fn[e].noConflict=()=>(t.fn[e]=n,It.jQueryInterface)}},"loading"===document.readyState?(rt.length||document.addEventListener("DOMContentLoaded",(()=>{rt.forEach((t=>t()))})),rt.push(Ut)):Ut(),new class extends j{constructor(t){super(),D(this,t,J,V,o,{name:0})}}({target:document.body,props:{name:"world from svelte"}})}();
