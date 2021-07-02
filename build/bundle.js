var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a,s=!1;function c(e,t,n,r){for(;e<t;){const o=e+(t-e>>1);n(o)<=r?e=o+1:t=o}return e}function u(e,t){s?(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;const t=e.childNodes,n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let o=0;for(let e=0;e<t.length;e++){const i=c(1,o+1,(e=>t[n[e]].claim_order),t[e].claim_order)-1;r[e]=n[i]+1;const a=i+1;n[a]=e,o=Math.max(a,o)}const i=[],a=[];let s=t.length-1;for(let e=n[o]+1;0!=e;e=r[e-1]){for(i.push(t[e-1]);s>=e;s--)a.push(t[s]);s--}for(;s>=0;s--)a.push(t[s]);i.reverse(),a.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<a.length;t++){for(;n<i.length&&a[t].claim_order>=i[n].claim_order;)n++;const r=n<i.length?i[n]:null;e.insertBefore(a[t],r)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild),t!==e.actual_end_child?e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling):t.parentNode!==e&&e.appendChild(t)}function f(e,t,n){s&&!n?u(e,t):(t.parentNode!==e||n&&t.nextSibling!==n)&&e.insertBefore(t,n||null)}function l(e){e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function h(){return p(" ")}function m(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function g(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function y(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function v(e,t){e.value=null==t?"":t}function b(e){a=e}function w(){if(!a)throw new Error("Function called outside component initialization");return a}const x=[],E=[],_=[],C=[],k=Promise.resolve();let R=!1;function S(e){_.push(e)}let $=!1;const A=new Set;function j(){if(!$){$=!0;do{for(let e=0;e<x.length;e+=1){const t=x[e];b(t),N(t.$$)}for(b(null),x.length=0;E.length;)E.pop()();for(let e=0;e<_.length;e+=1){const t=_[e];A.has(t)||(A.add(t),t())}_.length=0}while(x.length);for(;C.length;)C.pop()();R=!1,$=!1,A.clear()}}function N(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(S)}}const O=new Set;let U;function B(e,t){e&&e.i&&(O.delete(e),e.i(t))}function T(e,t){const n=t.token={};function o(e,o,i,a){if(t.token!==n)return;t.resolved=a;let s=t.ctx;void 0!==i&&(s=s.slice(),s[i]=a);const c=e&&(t.current=e)(s);let u=!1;t.block&&(t.blocks?t.blocks.forEach(((e,n)=>{n!==o&&e&&(U={r:0,c:[],p:U},function(e,t,n,r){if(e&&e.o){if(O.has(e))return;O.add(e),U.c.push((()=>{O.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}(e,1,1,(()=>{t.blocks[n]===e&&(t.blocks[n]=null)})),U.r||r(U.c),U=U.p)})):t.block.d(1),c.c(),B(c,1),c.m(t.mount(),t.anchor),u=!0),t.block=c,t.blocks&&(t.blocks[o]=c),u&&j()}if((i=e)&&"object"==typeof i&&"function"==typeof i.then){const n=w();if(e.then((e=>{b(n),o(t.then,1,t.value,e),b(null)}),(e=>{if(b(n),o(t.catch,2,t.error,e),b(null),!t.hasCatch)throw e})),t.current!==t.pending)return o(t.pending,0),!0}else{if(t.current!==t.then)return o(t.then,1,t.value,e),!0;t.resolved=e}var i}function L(e,t){-1===e.$$.dirty[0]&&(x.push(e),R||(R=!0,k.then(j)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function P(i,c,u,f,d,p,h=[-1]){const m=a;b(i);const g=i.$$={fragment:null,ctx:null,props:p,update:e,not_equal:d,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:c.context||[]),callbacks:n(),dirty:h,skip_bound:!1};let y=!1;if(g.ctx=u?u(i,c.props||{},((e,t,...n)=>{const r=n.length?n[0]:t;return g.ctx&&d(g.ctx[e],g.ctx[e]=r)&&(!g.skip_bound&&g.bound[e]&&g.bound[e](r),y&&L(i,e)),t})):[],g.update(),y=!0,r(g.before_update),g.fragment=!!f&&f(g.ctx),c.target){if(c.hydrate){s=!0;const e=function(e){return Array.from(e.childNodes)}(c.target);g.fragment&&g.fragment.l(e),e.forEach(l)}else g.fragment&&g.fragment.c();c.intro&&B(i.$$.fragment),function(e,n,i,a){const{fragment:s,on_mount:c,on_destroy:u,after_update:f}=e.$$;s&&s.m(n,i),a||S((()=>{const n=c.map(t).filter(o);u?u.push(...n):r(n),e.$$.on_mount=[]})),f.forEach(S)}(i,c.target,c.anchor,c.customElement),s=!1,j()}b(m)}var q=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},D=Object.prototype.toString;function F(e){return"[object Array]"===D.call(e)}function H(e){return void 0===e}function z(e){return null!==e&&"object"==typeof e}function I(e){if("[object Object]"!==D.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function M(e){return"[object Function]"===D.call(e)}function X(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),F(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var J={isArray:F,isArrayBuffer:function(e){return"[object ArrayBuffer]"===D.call(e)},isBuffer:function(e){return null!==e&&!H(e)&&null!==e.constructor&&!H(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:z,isPlainObject:I,isUndefined:H,isDate:function(e){return"[object Date]"===D.call(e)},isFile:function(e){return"[object File]"===D.call(e)},isBlob:function(e){return"[object Blob]"===D.call(e)},isFunction:M,isStream:function(e){return z(e)&&M(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:X,merge:function e(){var t={};function n(n,r){I(t[r])&&I(n)?t[r]=e(t[r],n):I(n)?t[r]=e({},n):F(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)X(arguments[r],n);return t},extend:function(e,t,n){return X(t,(function(t,r){e[r]=n&&"function"==typeof t?q(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}};function V(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var G=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(J.isURLSearchParams(t))r=t.toString();else{var o=[];J.forEach(t,(function(e,t){null!=e&&(J.isArray(e)?t+="[]":e=[e],J.forEach(e,(function(e){J.isDate(e)?e=e.toISOString():J.isObject(e)&&(e=JSON.stringify(e)),o.push(V(t)+"="+V(e))})))})),r=o.join("&")}if(r){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e};function K(){this.handlers=[]}K.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},K.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},K.prototype.forEach=function(e){J.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var W=K,Y=function(e,t,n){return J.forEach(n,(function(n){e=n(e,t)})),e},Q=function(e){return!(!e||!e.__CANCEL__)},Z=function(e,t){J.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},ee=function(e,t,n,r,o){return function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}(new Error(e),t,n,r,o)},te=J.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var a=[];a.push(e+"="+encodeURIComponent(t)),J.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),J.isString(r)&&a.push("path="+r),J.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},ne=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],re=J.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=J.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0},oe=function(e){return new Promise((function(t,n){var r=e.data,o=e.headers;J.isFormData(r)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var a=e.auth.username||"",s=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(a+":"+s)}var c,u,f=(c=e.baseURL,u=e.url,c&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(u)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(c,u):u);if(i.open(e.method.toUpperCase(),G(f,e.params,e.paramsSerializer),!0),i.timeout=e.timeout,i.onreadystatechange=function(){if(i&&4===i.readyState&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))){var r,o,a,s,c,u="getAllResponseHeaders"in i?(r=i.getAllResponseHeaders(),c={},r?(J.forEach(r.split("\n"),(function(e){if(s=e.indexOf(":"),o=J.trim(e.substr(0,s)).toLowerCase(),a=J.trim(e.substr(s+1)),o){if(c[o]&&ne.indexOf(o)>=0)return;c[o]="set-cookie"===o?(c[o]?c[o]:[]).concat([a]):c[o]?c[o]+", "+a:a}})),c):c):null,f={data:e.responseType&&"text"!==e.responseType?i.response:i.responseText,status:i.status,statusText:i.statusText,headers:u,config:e,request:i};!function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(ee("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}(t,n,f),i=null}},i.onabort=function(){i&&(n(ee("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(ee("Network Error",e,null,i)),i=null},i.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(ee(t,e,"ECONNABORTED",i)),i=null},J.isStandardBrowserEnv()){var l=(e.withCredentials||re(f))&&e.xsrfCookieName?te.read(e.xsrfCookieName):void 0;l&&(o[e.xsrfHeaderName]=l)}if("setRequestHeader"in i&&J.forEach(o,(function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete o[t]:i.setRequestHeader(t,e)})),J.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),e.responseType)try{i.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&i.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){i&&(i.abort(),n(e),i=null)})),r||(r=null),i.send(r)}))},ie={"Content-Type":"application/x-www-form-urlencoded"};function ae(e,t){!J.isUndefined(e)&&J.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var se,ce={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(se=oe),se),transformRequest:[function(e,t){return Z(t,"Accept"),Z(t,"Content-Type"),J.isFormData(e)||J.isArrayBuffer(e)||J.isBuffer(e)||J.isStream(e)||J.isFile(e)||J.isBlob(e)?e:J.isArrayBufferView(e)?e.buffer:J.isURLSearchParams(e)?(ae(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):J.isObject(e)?(ae(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};ce.headers={common:{Accept:"application/json, text/plain, */*"}},J.forEach(["delete","get","head"],(function(e){ce.headers[e]={}})),J.forEach(["post","put","patch"],(function(e){ce.headers[e]=J.merge(ie)}));var ue=ce;function fe(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var le=function(e){return fe(e),e.headers=e.headers||{},e.data=Y(e.data,e.headers,e.transformRequest),e.headers=J.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),J.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||ue.adapter)(e).then((function(t){return fe(e),t.data=Y(t.data,t.headers,e.transformResponse),t}),(function(t){return Q(t)||(fe(e),t&&t.response&&(t.response.data=Y(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},de=function(e,t){t=t||{};var n={},r=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function s(e,t){return J.isPlainObject(e)&&J.isPlainObject(t)?J.merge(e,t):J.isPlainObject(t)?J.merge({},t):J.isArray(t)?t.slice():t}function c(r){J.isUndefined(t[r])?J.isUndefined(e[r])||(n[r]=s(void 0,e[r])):n[r]=s(e[r],t[r])}J.forEach(r,(function(e){J.isUndefined(t[e])||(n[e]=s(void 0,t[e]))})),J.forEach(o,c),J.forEach(i,(function(r){J.isUndefined(t[r])?J.isUndefined(e[r])||(n[r]=s(void 0,e[r])):n[r]=s(void 0,t[r])})),J.forEach(a,(function(r){r in t?n[r]=s(e[r],t[r]):r in e&&(n[r]=s(void 0,e[r]))}));var u=r.concat(o).concat(i).concat(a),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return J.forEach(f,c),n};function pe(e){this.defaults=e,this.interceptors={request:new W,response:new W}}pe.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=de(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[le,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},pe.prototype.getUri=function(e){return e=de(this.defaults,e),G(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},J.forEach(["delete","get","head","options"],(function(e){pe.prototype[e]=function(t,n){return this.request(de(n||{},{method:e,url:t,data:(n||{}).data}))}})),J.forEach(["post","put","patch"],(function(e){pe.prototype[e]=function(t,n,r){return this.request(de(r||{},{method:e,url:t,data:n}))}}));var he=pe;function me(e){this.message=e}me.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},me.prototype.__CANCEL__=!0;var ge=me;function ye(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new ge(e),t(n.reason))}))}ye.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},ye.source=function(){var e;return{token:new ye((function(t){e=t})),cancel:e}};var ve=ye;function be(e){var t=new he(e),n=q(he.prototype.request,t);return J.extend(n,he.prototype,t),J.extend(n,t),n}var we=be(ue);we.Axios=he,we.create=function(e){return be(de(we.defaults,e))},we.Cancel=ge,we.CancelToken=ve,we.isCancel=Q,we.all=function(e){return Promise.all(e)},we.spread=function(e){return function(t){return e.apply(null,t)}},we.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError};var xe=we,Ee=we;xe.default=Ee;var _e=xe;class Ce{static async getRaces(e,t,n){return await _e.get(`${Ce.CORS_ANYWHERE}https://data.typeracer.com/games?playerId=tr:${e}&universe=${t||"play"}&n=${n||10}`)}}function ke(e){let t,n,r={ctx:e,current:null,token:null,hasCatch:!0,pending:$e,then:Se,catch:Re,value:9,error:10};return T(n=e[0],r),{c(){t=p(""),r.block.c()},m(e,n){f(e,t,n),r.block.m(e,r.anchor=n),r.mount=()=>t.parentNode,r.anchor=t},p(t,o){e=t,r.ctx=e,1&o&&n!==(n=e[0])&&T(n,r)||function(e,t,n){const r=t.slice(),{resolved:o}=e;e.current===e.then&&(r[e.value]=o),e.current===e.catch&&(r[e.error]=o),e.block.p(r,n)}(r,e,o)},d(e){e&&l(t),r.block.d(e),r.token=null,r=null}}}function Re(e){let t,n=e[10]+"";return{c(){t=p(n)},m(e,n){f(e,t,n)},p(e,r){1&r&&n!==(n=e[10]+"")&&y(t,n)},d(e){e&&l(t)}}}function Se(e){let t,n,r,o=e[9].data.map(je).join("\n")+"";return{c(){t=d("pre"),n=d("code"),r=p(o)},m(e,o){f(e,t,o),u(t,n),u(n,r)},p(e,t){1&t&&o!==(o=e[9].data.map(je).join("\n")+"")&&y(r,o)},d(e){e&&l(t)}}}function $e(t){let n;return{c(){n=p("Loading...")},m(e,t){f(e,n,t)},p:e,d(e){e&&l(n)}}}function Ae(t){let n,o,i,a,s,c,p,y,b,w,x,E,_,C,k,R,S,$,A,j,N,O=t[0]&&ke(t);return{c(){n=d("main"),o=d("label"),o.textContent="Username",i=h(),a=d("input"),s=h(),c=d("label"),c.textContent="Universe",p=h(),y=d("input"),b=h(),w=d("label"),w.textContent="Count",x=h(),E=d("input"),_=h(),C=d("br"),k=h(),R=d("button"),R.textContent="Get Races",S=h(),$=d("br"),A=h(),O&&O.c(),g(o,"for","input-username"),g(a,"id","input-username"),g(c,"for","input-universe"),g(y,"id","input-universe"),g(w,"for","input-count"),g(E,"id","input-count")},m(e,r){f(e,n,r),u(n,o),u(n,i),u(n,a),v(a,t[1]),u(n,s),u(n,c),u(n,p),u(n,y),v(y,t[2]),u(n,b),u(n,w),u(n,x),u(n,E),v(E,t[3]),u(n,_),u(n,C),u(n,k),u(n,R),u(n,S),u(n,$),u(n,A),O&&O.m(n,null),j||(N=[m(a,"input",t[5]),m(y,"input",t[6]),m(E,"input",t[7]),m(R,"click",t[4])],j=!0)},p(e,[t]){2&t&&a.value!==e[1]&&v(a,e[1]),4&t&&y.value!==e[2]&&v(y,e[2]),8&t&&E.value!==e[3]&&v(E,e[3]),e[0]?O?O.p(e,t):(O=ke(e),O.c(),O.m(n,null)):O&&(O.d(1),O=null)},i:e,o:e,d(e){e&&l(n),O&&O.d(),j=!1,r(N)}}}Ce.CORS_ANYWHERE="https://zach08-cors-anywhere.herokuapp.com/";const je=e=>e.wpm;function Ne(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))};let o,i,a,s;return[o,i,a,s,function(){return r(this,void 0,void 0,(function*(){n(0,o=Ce.getRaces(i,a,s))}))},function(){i=this.value,n(1,i)},function(){a=this.value,n(2,a)},function(){s=this.value,n(3,s)}]}return new class extends class{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),P(this,e,Ne,Ae,i,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
