import{c as $,g as q,_ as tt,C as et,o as P,a as M,b as v,d as L,F as nt,r as rt,t as F,n as ot}from"./index-8e0587a0.js";var z={},it={get exports(){return z},set exports(m){z=m}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(m,E){(function(T,b){m.exports=b()})($,function(){return function(){var S={686:function(c,r,t){t.d(r,{default:function(){return W}});var u=t(279),l=t.n(u),f=t(370),g=t.n(f),y=t(817),_=t.n(y);function d(s){try{return document.execCommand(s)}catch{return!1}}var h=function(n){var e=_()(n);return d("cut"),e},p=h;function w(s){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(o,"px"),e.setAttribute("readonly",""),e.value=s,e}var D=function(n,e){var o=w(n);e.container.appendChild(o);var i=_()(o);return d("copy"),o.remove(),i},U=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},o="";return typeof n=="string"?o=D(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?o=D(n.value,e):(o=_()(n),d("copy")),o},R=U;function C(s){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?C=function(e){return typeof e}:C=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(s)}var H=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,o=e===void 0?"copy":e,i=n.container,a=n.target,x=n.text;if(o!=="copy"&&o!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(a!==void 0)if(a&&C(a)==="object"&&a.nodeType===1){if(o==="copy"&&a.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(o==="cut"&&(a.hasAttribute("readonly")||a.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(x)return R(x,{container:i});if(a)return o==="cut"?p(a):R(a,{container:i})},V=H;function A(s){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?A=function(e){return typeof e}:A=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(s)}function B(s,n){if(!(s instanceof n))throw new TypeError("Cannot call a class as a function")}function I(s,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(s,o.key,o)}}function Y(s,n,e){return n&&I(s.prototype,n),e&&I(s,e),s}function G(s,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(n&&n.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),n&&N(s,n)}function N(s,n){return N=Object.setPrototypeOf||function(o,i){return o.__proto__=i,o},N(s,n)}function X(s){var n=K();return function(){var o=k(s),i;if(n){var a=k(this).constructor;i=Reflect.construct(o,arguments,a)}else i=o.apply(this,arguments);return Z(this,i)}}function Z(s,n){return n&&(A(n)==="object"||typeof n=="function")?n:J(s)}function J(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function K(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function k(s){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(s)}function j(s,n){var e="data-clipboard-".concat(s);if(n.hasAttribute(e))return n.getAttribute(e)}var Q=function(s){G(e,s);var n=X(e);function e(o,i){var a;return B(this,e),a=n.call(this),a.resolveOptions(i),a.listenClick(o),a}return Y(e,[{key:"resolveOptions",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof i.action=="function"?i.action:this.defaultAction,this.target=typeof i.target=="function"?i.target:this.defaultTarget,this.text=typeof i.text=="function"?i.text:this.defaultText,this.container=A(i.container)==="object"?i.container:document.body}},{key:"listenClick",value:function(i){var a=this;this.listener=g()(i,"click",function(x){return a.onClick(x)})}},{key:"onClick",value:function(i){var a=i.delegateTarget||i.currentTarget,x=this.action(a)||"copy",O=V({action:x,container:this.container,target:this.target(a),text:this.text(a)});this.emit(O?"success":"error",{action:x,text:O,trigger:a,clearSelection:function(){a&&a.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(i){return j("action",i)}},{key:"defaultTarget",value:function(i){var a=j("target",i);if(a)return document.querySelector(a)}},{key:"defaultText",value:function(i){return j("text",i)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return R(i,a)}},{key:"cut",value:function(i){return p(i)}},{key:"isSupported",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],a=typeof i=="string"?[i]:i,x=!!document.queryCommandSupported;return a.forEach(function(O){x=x&&!!document.queryCommandSupported(O)}),x}}]),e}(l()),W=Q},828:function(c){var r=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function u(l,f){for(;l&&l.nodeType!==r;){if(typeof l.matches=="function"&&l.matches(f))return l;l=l.parentNode}}c.exports=u},438:function(c,r,t){var u=t(828);function l(y,_,d,h,p){var w=g.apply(this,arguments);return y.addEventListener(d,w,p),{destroy:function(){y.removeEventListener(d,w,p)}}}function f(y,_,d,h,p){return typeof y.addEventListener=="function"?l.apply(null,arguments):typeof d=="function"?l.bind(null,document).apply(null,arguments):(typeof y=="string"&&(y=document.querySelectorAll(y)),Array.prototype.map.call(y,function(w){return l(w,_,d,h,p)}))}function g(y,_,d,h){return function(p){p.delegateTarget=u(p.target,_),p.delegateTarget&&h.call(y,p)}}c.exports=f},879:function(c,r){r.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},r.nodeList=function(t){var u=Object.prototype.toString.call(t);return t!==void 0&&(u==="[object NodeList]"||u==="[object HTMLCollection]")&&"length"in t&&(t.length===0||r.node(t[0]))},r.string=function(t){return typeof t=="string"||t instanceof String},r.fn=function(t){var u=Object.prototype.toString.call(t);return u==="[object Function]"}},370:function(c,r,t){var u=t(879),l=t(438);function f(d,h,p){if(!d&&!h&&!p)throw new Error("Missing required arguments");if(!u.string(h))throw new TypeError("Second argument must be a String");if(!u.fn(p))throw new TypeError("Third argument must be a Function");if(u.node(d))return g(d,h,p);if(u.nodeList(d))return y(d,h,p);if(u.string(d))return _(d,h,p);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function g(d,h,p){return d.addEventListener(h,p),{destroy:function(){d.removeEventListener(h,p)}}}function y(d,h,p){return Array.prototype.forEach.call(d,function(w){w.addEventListener(h,p)}),{destroy:function(){Array.prototype.forEach.call(d,function(w){w.removeEventListener(h,p)})}}}function _(d,h,p){return l(document.body,d,h,p)}c.exports=f},817:function(c){function r(t){var u;if(t.nodeName==="SELECT")t.focus(),u=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var l=t.hasAttribute("readonly");l||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),l||t.removeAttribute("readonly"),u=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var f=window.getSelection(),g=document.createRange();g.selectNodeContents(t),f.removeAllRanges(),f.addRange(g),u=f.toString()}return u}c.exports=r},279:function(c){function r(){}r.prototype={on:function(t,u,l){var f=this.e||(this.e={});return(f[t]||(f[t]=[])).push({fn:u,ctx:l}),this},once:function(t,u,l){var f=this;function g(){f.off(t,g),u.apply(l,arguments)}return g._=u,this.on(t,g,l)},emit:function(t){var u=[].slice.call(arguments,1),l=((this.e||(this.e={}))[t]||[]).slice(),f=0,g=l.length;for(f;f<g;f++)l[f].fn.apply(l[f].ctx,u);return this},off:function(t,u){var l=this.e||(this.e={}),f=l[t],g=[];if(f&&u)for(var y=0,_=f.length;y<_;y++)f[y].fn!==u&&f[y].fn._!==u&&g.push(f[y]);return g.length?l[t]=g:delete l[t],this}},c.exports=r,c.exports.TinyEmitter=r}},T={};function b(c){if(T[c])return T[c].exports;var r=T[c]={exports:{}};return S[c](r,r.exports,b),r.exports}return function(){b.n=function(c){var r=c&&c.__esModule?function(){return c.default}:function(){return c};return b.d(r,{a:r}),r}}(),function(){b.d=function(c,r){for(var t in r)b.o(r,t)&&!b.o(c,t)&&Object.defineProperty(c,t,{enumerable:!0,get:r[t]})}}(),function(){b.o=function(c,r){return Object.prototype.hasOwnProperty.call(c,r)}}(),b(686)}().default})})(it);const st=q(z),ct={data(){return{zenek:[],pb:void 0,collection:void 0}},directives:{clipboard:{inserted:function(m,E){new st(m,{text:function(){return E.value}})}}},mounted(){this.pb=new et("http://sp.myddns.me:80"),this.pb.autoCancellation(!1),this.collection=this.pb.collection("zenek"),this.getItems(),this.collection.subscribe("*",()=>this.getItems())},methods:{async getItems(){const{items:m}=await this.collection.getList();this.zenek=m,this.zenek.sort((E,S)=>S.votes-E.votes)},async deleteRecord(m){await this.collection.delete(m),await this.getItems()},async clearUsers(){this.zenek.forEach(async m=>{await this.collection.update(m.id,{uuid:null})}),await this.getItems()},async deleteAll(){this.zenek.forEach(async m=>{await this.collection.delete(m.id)}),await this.getItems()}}},at={class:"items-center flex min-h-screen flex-col bg-custom-bg-dark text-white"},ut={class:"grid grid-cols-12 bg-custom-custom-elevation-3 w-full text-center elevation-3 justify-center items-center"},lt=v("span",null,null,-1),ft=v("span",null,null,-1),dt=v("span",null,null,-1),pt=v("h1",{class:"text-6xl col-span-6"},"Zenék",-1),yt=v("span",null,null,-1),ht={class:"flex items-center justify-end mr-2"},vt=v("br",null,null,-1),gt={class:"flex items-center justify-end mr-2"},mt=v("br",null,null,-1),bt={class:"flex items-center m-0 p-0 w-full"},_t={class:"text-center w-full"},xt={class:"w-full grid grid-cols-36 mt-2 pb-2 gap-2 elevation-2"},wt=v("span",null,null,-1),Et=["onClick"],St={class:"text-5xl col-span-27 overflow-hidden"},Tt=v("span",null,null,-1);function At(m,E,S,T,b,c){return P(),M("div",at,[v("div",ut,[lt,ft,dt,pt,yt,v("div",ht,[v("button",{onClick:E[0]||(E[0]=(...r)=>c.clearUsers&&c.clearUsers(...r)),class:"w-3/4 bg-rose-700 elevation-4 hover:bg-rose-500 hover:rounded-xl text-white rounded-lg text-xl p-2 mt-1 mb-1 active:bg-rose-950"},[L("Delete"),vt,L("all")])]),v("div",gt,[v("button",{onClick:E[1]||(E[1]=(...r)=>c.deleteAll&&c.deleteAll(...r)),class:"w-3/4 bg-rose-700 elevation-4 hover:bg-rose-500 hover:rounded-xl text-white rounded-lg text-xl p-2 mt-1 mb-1 active:bg-rose-950"},[L("Clear"),mt,L("Users")])])]),v("div",bt,[v("ul",_t,[(P(!0),M(nt,null,rt(b.zenek,r=>(P(),M("li",{class:"",key:r.id},[v("div",xt,[wt,v("button",{class:"bg-rose-700 elevation-1 col-span-2 hover:bg-rose-500 hover:rounded-xl active:bg-rose-950 text-white rounded-lg text-2xl py-2 px-3",onClick:t=>c.deleteRecord(r.id)}," Delete ",8,Et),v("span",St,F(r.title),1),v("span",{class:ot([[r.votes==0?"text-blue-400":r.votes<0?"text-red-600":r.votes>0?"text-emerald-600":""],"text-5xl overflow-hidden col-span-2"])},F(r.votes),3)]),Tt]))),128))])])])}const Ot=tt(ct,[["render",At]]);export{Ot as default};
