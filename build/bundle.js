var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a,s=!1;function c(e,t,n,r){for(;e<t;){const o=e+(t-e>>1);n(o)<=r?e=o+1:t=o}return e}function u(e,t){s?(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;const t=e.childNodes,n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let o=0;for(let e=0;e<t.length;e++){const i=c(1,o+1,(e=>t[n[e]].claim_order),t[e].claim_order)-1;r[e]=n[i]+1;const a=i+1;n[a]=e,o=Math.max(a,o)}const i=[],a=[];let s=t.length-1;for(let e=n[o]+1;0!=e;e=r[e-1]){for(i.push(t[e-1]);s>=e;s--)a.push(t[s]);s--}for(;s>=0;s--)a.push(t[s]);i.reverse(),a.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<a.length;t++){for(;n<i.length&&a[t].claim_order>=i[n].claim_order;)n++;const r=n<i.length?i[n]:null;e.insertBefore(a[t],r)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild),t!==e.actual_end_child?e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling):t.parentNode!==e&&e.appendChild(t)}function f(e,t,n){s&&!n?u(e,t):(t.parentNode!==e||n&&t.nextSibling!==n)&&e.insertBefore(t,n||null)}function l(e){e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function h(e){a=e}function m(){if(!a)throw new Error("Function called outside component initialization");return a}const g=[],y=[],v=[],b=[],w=Promise.resolve();let x=!1;function E(e){v.push(e)}let _=!1;const k=new Set;function C(){if(!_){_=!0;do{for(let e=0;e<g.length;e+=1){const t=g[e];h(t),S(t.$$)}for(h(null),g.length=0;y.length;)y.pop()();for(let e=0;e<v.length;e+=1){const t=v[e];k.has(t)||(k.add(t),t())}v.length=0}while(g.length);for(;b.length;)b.pop()();x=!1,_=!1,k.clear()}}function S(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(E)}}const $=new Set;let R;function j(e,t){e&&e.i&&($.delete(e),e.i(t))}function A(e,t){const n=t.token={};function o(e,o,i,a){if(t.token!==n)return;t.resolved=a;let s=t.ctx;void 0!==i&&(s=s.slice(),s[i]=a);const c=e&&(t.current=e)(s);let u=!1;t.block&&(t.blocks?t.blocks.forEach(((e,n)=>{n!==o&&e&&(R={r:0,c:[],p:R},function(e,t,n,r){if(e&&e.o){if($.has(e))return;$.add(e),R.c.push((()=>{$.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}(e,1,1,(()=>{t.blocks[n]===e&&(t.blocks[n]=null)})),R.r||r(R.c),R=R.p)})):t.block.d(1),c.c(),j(c,1),c.m(t.mount(),t.anchor),u=!0),t.block=c,t.blocks&&(t.blocks[o]=c),u&&C()}if((i=e)&&"object"==typeof i&&"function"==typeof i.then){const n=m();if(e.then((e=>{h(n),o(t.then,1,t.value,e),h(null)}),(e=>{if(h(n),o(t.catch,2,t.error,e),h(null),!t.hasCatch)throw e})),t.current!==t.pending)return o(t.pending,0),!0}else{if(t.current!==t.then)return o(t.then,1,t.value,e),!0;t.resolved=e}var i}function O(e,t){-1===e.$$.dirty[0]&&(g.push(e),x||(x=!0,w.then(C)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function N(i,c,u,f,d,p,m=[-1]){const g=a;h(i);const y=i.$$={fragment:null,ctx:null,props:p,update:e,not_equal:d,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:c.context||[]),callbacks:n(),dirty:m,skip_bound:!1};let v=!1;if(y.ctx=u?u(i,c.props||{},((e,t,...n)=>{const r=n.length?n[0]:t;return y.ctx&&d(y.ctx[e],y.ctx[e]=r)&&(!y.skip_bound&&y.bound[e]&&y.bound[e](r),v&&O(i,e)),t})):[],y.update(),v=!0,r(y.before_update),y.fragment=!!f&&f(y.ctx),c.target){if(c.hydrate){s=!0;const e=function(e){return Array.from(e.childNodes)}(c.target);y.fragment&&y.fragment.l(e),e.forEach(l)}else y.fragment&&y.fragment.c();c.intro&&j(i.$$.fragment),function(e,n,i,a){const{fragment:s,on_mount:c,on_destroy:u,after_update:f}=e.$$;s&&s.m(n,i),a||E((()=>{const n=c.map(t).filter(o);u?u.push(...n):r(n),e.$$.on_mount=[]})),f.forEach(E)}(i,c.target,c.anchor,c.customElement),s=!1,C()}h(g)}var B=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},U=Object.prototype.toString;function T(e){return"[object Array]"===U.call(e)}function L(e){return void 0===e}function P(e){return null!==e&&"object"==typeof e}function q(e){if("[object Object]"!==U.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function D(e){return"[object Function]"===U.call(e)}function F(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),T(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var z={isArray:T,isArrayBuffer:function(e){return"[object ArrayBuffer]"===U.call(e)},isBuffer:function(e){return null!==e&&!L(e)&&null!==e.constructor&&!L(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:P,isPlainObject:q,isUndefined:L,isDate:function(e){return"[object Date]"===U.call(e)},isFile:function(e){return"[object File]"===U.call(e)},isBlob:function(e){return"[object Blob]"===U.call(e)},isFunction:D,isStream:function(e){return P(e)&&D(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:F,merge:function e(){var t={};function n(n,r){q(t[r])&&q(n)?t[r]=e(t[r],n):q(n)?t[r]=e({},n):T(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)F(arguments[r],n);return t},extend:function(e,t,n){return F(t,(function(t,r){e[r]=n&&"function"==typeof t?B(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}};function H(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var I=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(z.isURLSearchParams(t))r=t.toString();else{var o=[];z.forEach(t,(function(e,t){null!=e&&(z.isArray(e)?t+="[]":e=[e],z.forEach(e,(function(e){z.isDate(e)?e=e.toISOString():z.isObject(e)&&(e=JSON.stringify(e)),o.push(H(t)+"="+H(e))})))})),r=o.join("&")}if(r){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e};function M(){this.handlers=[]}M.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},M.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},M.prototype.forEach=function(e){z.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var X=M,J=function(e,t,n){return z.forEach(n,(function(n){e=n(e,t)})),e},V=function(e){return!(!e||!e.__CANCEL__)},K=function(e,t){z.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},W=function(e,t,n,r,o){return function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}(new Error(e),t,n,r,o)},Y=z.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var a=[];a.push(e+"="+encodeURIComponent(t)),z.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),z.isString(r)&&a.push("path="+r),z.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},G=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Q=z.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=z.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0},Z=function(e){return new Promise((function(t,n){var r=e.data,o=e.headers;z.isFormData(r)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var a=e.auth.username||"",s=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(a+":"+s)}var c,u,f=(c=e.baseURL,u=e.url,c&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(u)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(c,u):u);if(i.open(e.method.toUpperCase(),I(f,e.params,e.paramsSerializer),!0),i.timeout=e.timeout,i.onreadystatechange=function(){if(i&&4===i.readyState&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))){var r,o,a,s,c,u="getAllResponseHeaders"in i?(r=i.getAllResponseHeaders(),c={},r?(z.forEach(r.split("\n"),(function(e){if(s=e.indexOf(":"),o=z.trim(e.substr(0,s)).toLowerCase(),a=z.trim(e.substr(s+1)),o){if(c[o]&&G.indexOf(o)>=0)return;c[o]="set-cookie"===o?(c[o]?c[o]:[]).concat([a]):c[o]?c[o]+", "+a:a}})),c):c):null,f={data:e.responseType&&"text"!==e.responseType?i.response:i.responseText,status:i.status,statusText:i.statusText,headers:u,config:e,request:i};!function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(W("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}(t,n,f),i=null}},i.onabort=function(){i&&(n(W("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(W("Network Error",e,null,i)),i=null},i.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(W(t,e,"ECONNABORTED",i)),i=null},z.isStandardBrowserEnv()){var l=(e.withCredentials||Q(f))&&e.xsrfCookieName?Y.read(e.xsrfCookieName):void 0;l&&(o[e.xsrfHeaderName]=l)}if("setRequestHeader"in i&&z.forEach(o,(function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete o[t]:i.setRequestHeader(t,e)})),z.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),e.responseType)try{i.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&i.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){i&&(i.abort(),n(e),i=null)})),r||(r=null),i.send(r)}))},ee={"Content-Type":"application/x-www-form-urlencoded"};function te(e,t){!z.isUndefined(e)&&z.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var ne,re={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(ne=Z),ne),transformRequest:[function(e,t){return K(t,"Accept"),K(t,"Content-Type"),z.isFormData(e)||z.isArrayBuffer(e)||z.isBuffer(e)||z.isStream(e)||z.isFile(e)||z.isBlob(e)?e:z.isArrayBufferView(e)?e.buffer:z.isURLSearchParams(e)?(te(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):z.isObject(e)?(te(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};re.headers={common:{Accept:"application/json, text/plain, */*"}},z.forEach(["delete","get","head"],(function(e){re.headers[e]={}})),z.forEach(["post","put","patch"],(function(e){re.headers[e]=z.merge(ee)}));var oe=re;function ie(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var ae=function(e){return ie(e),e.headers=e.headers||{},e.data=J(e.data,e.headers,e.transformRequest),e.headers=z.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),z.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||oe.adapter)(e).then((function(t){return ie(e),t.data=J(t.data,t.headers,e.transformResponse),t}),(function(t){return V(t)||(ie(e),t&&t.response&&(t.response.data=J(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},se=function(e,t){t=t||{};var n={},r=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function s(e,t){return z.isPlainObject(e)&&z.isPlainObject(t)?z.merge(e,t):z.isPlainObject(t)?z.merge({},t):z.isArray(t)?t.slice():t}function c(r){z.isUndefined(t[r])?z.isUndefined(e[r])||(n[r]=s(void 0,e[r])):n[r]=s(e[r],t[r])}z.forEach(r,(function(e){z.isUndefined(t[e])||(n[e]=s(void 0,t[e]))})),z.forEach(o,c),z.forEach(i,(function(r){z.isUndefined(t[r])?z.isUndefined(e[r])||(n[r]=s(void 0,e[r])):n[r]=s(void 0,t[r])})),z.forEach(a,(function(r){r in t?n[r]=s(e[r],t[r]):r in e&&(n[r]=s(void 0,e[r]))}));var u=r.concat(o).concat(i).concat(a),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return z.forEach(f,c),n};function ce(e){this.defaults=e,this.interceptors={request:new X,response:new X}}ce.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=se(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[ae,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},ce.prototype.getUri=function(e){return e=se(this.defaults,e),I(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},z.forEach(["delete","get","head","options"],(function(e){ce.prototype[e]=function(t,n){return this.request(se(n||{},{method:e,url:t,data:(n||{}).data}))}})),z.forEach(["post","put","patch"],(function(e){ce.prototype[e]=function(t,n,r){return this.request(se(r||{},{method:e,url:t,data:n}))}}));var ue=ce;function fe(e){this.message=e}fe.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},fe.prototype.__CANCEL__=!0;var le=fe;function de(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new le(e),t(n.reason))}))}de.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},de.source=function(){var e;return{token:new de((function(t){e=t})),cancel:e}};var pe=de;function he(e){var t=new ue(e),n=B(ue.prototype.request,t);return z.extend(n,ue.prototype,t),z.extend(n,t),n}var me=he(oe);me.Axios=ue,me.create=function(e){return he(se(me.defaults,e))},me.Cancel=le,me.CancelToken=pe,me.isCancel=V,me.all=function(e){return Promise.all(e)},me.spread=function(e){return function(t){return e.apply(null,t)}},me.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError};var ge=me,ye=me;ge.default=ye;var ve=ge;class be{static async getRaces(e,t,n){return await ve.get(`${be.CORS_ANYWHERE}https://data.typeracer.com/games?playerId=tr:${e}&universe=${t}&n=${n}`)}}function we(t){let n,r=t[2]+"";return{c(){n=p(r)},m(e,t){f(e,n,t)},p:e,d(e){e&&l(n)}}}function xe(t){let n,r,o,i=t[1].data.map(ke).join("\n")+"";return{c(){n=d("pre"),r=d("code"),o=p(i)},m(e,t){f(e,n,t),u(n,r),u(r,o)},p:e,d(e){e&&l(n)}}}function Ee(t){let n;return{c(){n=p("Loading...")},m(e,t){f(e,n,t)},p:e,d(e){e&&l(n)}}}function _e(t){let n,r={ctx:t,current:null,token:null,hasCatch:!0,pending:Ee,then:xe,catch:we,value:1,error:2};return A(t[0],r),{c(){n=d("main"),r.block.c()},m(e,t){f(e,n,t),r.block.m(n,r.anchor=null),r.mount=()=>n,r.anchor=null},p(e,[n]){!function(e,t,n){const r=t.slice(),{resolved:o}=e;e.current===e.then&&(r[e.value]=o),e.current===e.catch&&(r[e.error]=o),e.block.p(r,n)}(r,t=e,n)},i:e,o:e,d(e){e&&l(n),r.block.d(),r.token=null,r=null}}}be.CORS_ANYWHERE="https://zach08-cors-anywhere.herokuapp.com/";const ke=e=>e.wpm;function Ce(e){return[be.getRaces("zach_08","dictionary",100)]}return new class extends class{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),N(this,e,Ce,_e,i,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
