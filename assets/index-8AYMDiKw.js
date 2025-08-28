(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const r of f.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function $(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=$(u);fetch(u.href,f)}})();function ld(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yo={exports:{}},Aa={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PT;function oL(){if(PT)return Aa;PT=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function $(s,u,f){var r=null;if(f!==void 0&&(r=""+f),u.key!==void 0&&(r=""+u.key),"key"in u){f={};for(var T in u)T!=="key"&&(f[T]=u[T])}else f=u;return u=f.ref,{$$typeof:e,type:s,key:r,ref:u!==void 0?u:null,props:f}}return Aa.Fragment=a,Aa.jsx=$,Aa.jsxs=$,Aa}var BT;function uL(){return BT||(BT=1,yo.exports=oL()),yo.exports}var b=uL(),Ro={exports:{}},c_={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GT;function rL(){if(GT)return c_;GT=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),r=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),y=Symbol.iterator;function v(p){return p===null||typeof p!="object"?null:(p=y&&p[y]||p["@@iterator"],typeof p=="function"?p:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,Z={};function Q(p,W,w){this.props=p,this.context=W,this.refs=Z,this.updater=w||U}Q.prototype.isReactComponent={},Q.prototype.setState=function(p,W){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,W,"setState")},Q.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function k(){}k.prototype=Q.prototype;function J(p,W,w){this.props=p,this.context=W,this.refs=Z,this.updater=w||U}var K=J.prototype=new k;K.constructor=J,Y(K,Q.prototype),K.isPureReactComponent=!0;var i_=Array.isArray,j={H:null,A:null,T:null,S:null,V:null},o_=Object.prototype.hasOwnProperty;function f_(p,W,w,I,S,L){return w=L.ref,{$$typeof:e,type:p,key:W,ref:w!==void 0?w:null,props:L}}function $_(p,W){return f_(p.type,W,void 0,void 0,void 0,p.props)}function y_(p){return typeof p=="object"&&p!==null&&p.$$typeof===e}function P_(p){var W={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(w){return W[w]})}var K_=/\/+/g;function H_(p,W){return typeof p=="object"&&p!==null&&p.key!=null?P_(""+p.key):W.toString(36)}function it(){}function Z_(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(it,it):(p.status="pending",p.then(function(W){p.status==="pending"&&(p.status="fulfilled",p.value=W)},function(W){p.status==="pending"&&(p.status="rejected",p.reason=W)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function m_(p,W,w,I,S){var L=typeof p;(L==="undefined"||L==="boolean")&&(p=null);var g=!1;if(p===null)g=!0;else switch(L){case"bigint":case"string":case"number":g=!0;break;case"object":switch(p.$$typeof){case e:case a:g=!0;break;case A:return g=p._init,m_(g(p._payload),W,w,I,S)}}if(g)return S=S(p),g=I===""?"."+H_(p,0):I,i_(S)?(w="",g!=null&&(w=g.replace(K_,"$&/")+"/"),m_(S,W,w,"",function(q){return q})):S!=null&&(y_(S)&&(S=$_(S,w+(S.key==null||p&&p.key===S.key?"":(""+S.key).replace(K_,"$&/")+"/")+g)),W.push(S)),1;g=0;var D=I===""?".":I+":";if(i_(p))for(var M=0;M<p.length;M++)I=p[M],L=D+H_(I,M),g+=m_(I,W,w,L,S);else if(M=v(p),typeof M=="function")for(p=M.call(p),M=0;!(I=p.next()).done;)I=I.value,L=D+H_(I,M++),g+=m_(I,W,w,L,S);else if(L==="object"){if(typeof p.then=="function")return m_(Z_(p),W,w,I,S);throw W=String(p),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return g}function P(p,W,w){if(p==null)return p;var I=[],S=0;return m_(p,I,"","",function(L){return W.call(w,L,S++)}),I}function z(p){if(p._status===-1){var W=p._result;W=W(),W.then(function(w){(p._status===0||p._status===-1)&&(p._status=1,p._result=w)},function(w){(p._status===0||p._status===-1)&&(p._status=2,p._result=w)}),p._status===-1&&(p._status=0,p._result=W)}if(p._status===1)return p._result.default;throw p._result}var __=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)};function T_(){}return c_.Children={map:P,forEach:function(p,W,w){P(p,function(){W.apply(this,arguments)},w)},count:function(p){var W=0;return P(p,function(){W++}),W},toArray:function(p){return P(p,function(W){return W})||[]},only:function(p){if(!y_(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},c_.Component=Q,c_.Fragment=$,c_.Profiler=u,c_.PureComponent=J,c_.StrictMode=s,c_.Suspense=d,c_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,c_.__COMPILER_RUNTIME={__proto__:null,c:function(p){return j.H.useMemoCache(p)}},c_.cache=function(p){return function(){return p.apply(null,arguments)}},c_.cloneElement=function(p,W,w){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var I=Y({},p.props),S=p.key,L=void 0;if(W!=null)for(g in W.ref!==void 0&&(L=void 0),W.key!==void 0&&(S=""+W.key),W)!o_.call(W,g)||g==="key"||g==="__self"||g==="__source"||g==="ref"&&W.ref===void 0||(I[g]=W[g]);var g=arguments.length-2;if(g===1)I.children=w;else if(1<g){for(var D=Array(g),M=0;M<g;M++)D[M]=arguments[M+2];I.children=D}return f_(p.type,S,void 0,void 0,L,I)},c_.createContext=function(p){return p={$$typeof:r,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:f,_context:p},p},c_.createElement=function(p,W,w){var I,S={},L=null;if(W!=null)for(I in W.key!==void 0&&(L=""+W.key),W)o_.call(W,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(S[I]=W[I]);var g=arguments.length-2;if(g===1)S.children=w;else if(1<g){for(var D=Array(g),M=0;M<g;M++)D[M]=arguments[M+2];S.children=D}if(p&&p.defaultProps)for(I in g=p.defaultProps,g)S[I]===void 0&&(S[I]=g[I]);return f_(p,L,void 0,void 0,null,S)},c_.createRef=function(){return{current:null}},c_.forwardRef=function(p){return{$$typeof:T,render:p}},c_.isValidElement=y_,c_.lazy=function(p){return{$$typeof:A,_payload:{_status:-1,_result:p},_init:z}},c_.memo=function(p,W){return{$$typeof:h,type:p,compare:W===void 0?null:W}},c_.startTransition=function(p){var W=j.T,w={};j.T=w;try{var I=p(),S=j.S;S!==null&&S(w,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then(T_,__)}catch(L){__(L)}finally{j.T=W}},c_.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},c_.use=function(p){return j.H.use(p)},c_.useActionState=function(p,W,w){return j.H.useActionState(p,W,w)},c_.useCallback=function(p,W){return j.H.useCallback(p,W)},c_.useContext=function(p){return j.H.useContext(p)},c_.useDebugValue=function(){},c_.useDeferredValue=function(p,W){return j.H.useDeferredValue(p,W)},c_.useEffect=function(p,W,w){var I=j.H;if(typeof w=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return I.useEffect(p,W)},c_.useId=function(){return j.H.useId()},c_.useImperativeHandle=function(p,W,w){return j.H.useImperativeHandle(p,W,w)},c_.useInsertionEffect=function(p,W){return j.H.useInsertionEffect(p,W)},c_.useLayoutEffect=function(p,W){return j.H.useLayoutEffect(p,W)},c_.useMemo=function(p,W){return j.H.useMemo(p,W)},c_.useOptimistic=function(p,W){return j.H.useOptimistic(p,W)},c_.useReducer=function(p,W,w){return j.H.useReducer(p,W,w)},c_.useRef=function(p){return j.H.useRef(p)},c_.useState=function(p){return j.H.useState(p)},c_.useSyncExternalStore=function(p,W,w){return j.H.useSyncExternalStore(p,W,w)},c_.useTransition=function(){return j.H.useTransition()},c_.version="19.1.1",c_}var VT;function Tu(){return VT||(VT=1,Ro.exports=rL()),Ro.exports}var t_=Tu();const cL=ld(t_);var go={exports:{}},La={},So={exports:{}},vo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WT;function fL(){return WT||(WT=1,(function(e){function a(P,z){var __=P.length;P.push(z);_:for(;0<__;){var T_=__-1>>>1,p=P[T_];if(0<u(p,z))P[T_]=z,P[__]=p,__=T_;else break _}}function $(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var z=P[0],__=P.pop();if(__!==z){P[0]=__;_:for(var T_=0,p=P.length,W=p>>>1;T_<W;){var w=2*(T_+1)-1,I=P[w],S=w+1,L=P[S];if(0>u(I,__))S<p&&0>u(L,I)?(P[T_]=L,P[S]=__,T_=S):(P[T_]=I,P[w]=__,T_=w);else if(S<p&&0>u(L,__))P[T_]=L,P[S]=__,T_=S;else break _}}return z}function u(P,z){var __=P.sortIndex-z.sortIndex;return __!==0?__:P.id-z.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;e.unstable_now=function(){return f.now()}}else{var r=Date,T=r.now();e.unstable_now=function(){return r.now()-T}}var d=[],h=[],A=1,y=null,v=3,U=!1,Y=!1,Z=!1,Q=!1,k=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function i_(P){for(var z=$(h);z!==null;){if(z.callback===null)s(h);else if(z.startTime<=P)s(h),z.sortIndex=z.expirationTime,a(d,z);else break;z=$(h)}}function j(P){if(Z=!1,i_(P),!Y)if($(d)!==null)Y=!0,o_||(o_=!0,H_());else{var z=$(h);z!==null&&m_(j,z.startTime-P)}}var o_=!1,f_=-1,$_=5,y_=-1;function P_(){return Q?!0:!(e.unstable_now()-y_<$_)}function K_(){if(Q=!1,o_){var P=e.unstable_now();y_=P;var z=!0;try{_:{Y=!1,Z&&(Z=!1,J(f_),f_=-1),U=!0;var __=v;try{t:{for(i_(P),y=$(d);y!==null&&!(y.expirationTime>P&&P_());){var T_=y.callback;if(typeof T_=="function"){y.callback=null,v=y.priorityLevel;var p=T_(y.expirationTime<=P);if(P=e.unstable_now(),typeof p=="function"){y.callback=p,i_(P),z=!0;break t}y===$(d)&&s(d),i_(P)}else s(d);y=$(d)}if(y!==null)z=!0;else{var W=$(h);W!==null&&m_(j,W.startTime-P),z=!1}}break _}finally{y=null,v=__,U=!1}z=void 0}}finally{z?H_():o_=!1}}}var H_;if(typeof K=="function")H_=function(){K(K_)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,Z_=it.port2;it.port1.onmessage=K_,H_=function(){Z_.postMessage(null)}}else H_=function(){k(K_,0)};function m_(P,z){f_=k(function(){P(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$_=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_next=function(P){switch(v){case 1:case 2:case 3:var z=3;break;default:z=v}var __=v;v=z;try{return P()}finally{v=__}},e.unstable_requestPaint=function(){Q=!0},e.unstable_runWithPriority=function(P,z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var __=v;v=P;try{return z()}finally{v=__}},e.unstable_scheduleCallback=function(P,z,__){var T_=e.unstable_now();switch(typeof __=="object"&&__!==null?(__=__.delay,__=typeof __=="number"&&0<__?T_+__:T_):__=T_,P){case 1:var p=-1;break;case 2:p=250;break;case 5:p=1073741823;break;case 4:p=1e4;break;default:p=5e3}return p=__+p,P={id:A++,callback:z,priorityLevel:P,startTime:__,expirationTime:p,sortIndex:-1},__>T_?(P.sortIndex=__,a(h,P),$(d)===null&&P===$(h)&&(Z?(J(f_),f_=-1):Z=!0,m_(j,__-T_))):(P.sortIndex=p,a(d,P),Y||U||(Y=!0,o_||(o_=!0,H_()))),P},e.unstable_shouldYield=P_,e.unstable_wrapCallback=function(P){var z=v;return function(){var __=v;v=z;try{return P.apply(this,arguments)}finally{v=__}}}})(vo)),vo}var wT;function TL(){return wT||(wT=1,So.exports=fL()),So.exports}var No={exports:{}},ht={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YT;function hL(){if(YT)return ht;YT=1;var e=Tu();function a(d){var h="https://react.dev/errors/"+d;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)h+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+d+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function $(){}var s={d:{f:$,r:function(){throw Error(a(522))},D:$,C:$,L:$,m:$,X:$,S:$,M:$},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(d,h,A){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:y==null?null:""+y,children:d,containerInfo:h,implementation:A}}var r=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(d,h){if(d==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ht.createPortal=function(d,h){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(a(299));return f(d,h,null,A)},ht.flushSync=function(d){var h=r.T,A=s.p;try{if(r.T=null,s.p=2,d)return d()}finally{r.T=h,s.p=A,s.d.f()}},ht.preconnect=function(d,h){typeof d=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(d,h))},ht.prefetchDNS=function(d){typeof d=="string"&&s.d.D(d)},ht.preinit=function(d,h){if(typeof d=="string"&&h&&typeof h.as=="string"){var A=h.as,y=T(A,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,U=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;A==="style"?s.d.S(d,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:y,integrity:v,fetchPriority:U}):A==="script"&&s.d.X(d,{crossOrigin:y,integrity:v,fetchPriority:U,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},ht.preinitModule=function(d,h){if(typeof d=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var A=T(h.as,h.crossOrigin);s.d.M(d,{crossOrigin:A,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(d)},ht.preload=function(d,h){if(typeof d=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var A=h.as,y=T(A,h.crossOrigin);s.d.L(d,A,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},ht.preloadModule=function(d,h){if(typeof d=="string")if(h){var A=T(h.as,h.crossOrigin);s.d.m(d,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:A,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(d)},ht.requestFormReset=function(d){s.d.r(d)},ht.unstable_batchedUpdates=function(d,h){return d(h)},ht.useFormState=function(d,h,A){return r.H.useFormState(d,h,A)},ht.useFormStatus=function(){return r.H.useHostTransitionStatus()},ht.version="19.1.1",ht}var FT;function dL(){if(FT)return No.exports;FT=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(a){console.error(a)}}return e(),No.exports=hL(),No.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jT;function EL(){if(jT)return La;jT=1;var e=TL(),a=Tu(),$=dL();function s(_){var t="https://react.dev/errors/"+_;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+_+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(_){return!(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)}function f(_){var t=_,n=_;if(_.alternate)for(;t.return;)t=t.return;else{_=t;do t=_,(t.flags&4098)!==0&&(n=t.return),_=t.return;while(_)}return t.tag===3?n:null}function r(_){if(_.tag===13){var t=_.memoizedState;if(t===null&&(_=_.alternate,_!==null&&(t=_.memoizedState)),t!==null)return t.dehydrated}return null}function T(_){if(f(_)!==_)throw Error(s(188))}function d(_){var t=_.alternate;if(!t){if(t=f(_),t===null)throw Error(s(188));return t!==_?null:_}for(var n=_,i=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(i=l.return,i!==null){n=i;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return T(l),_;if(o===i)return T(l),t;o=o.sibling}throw Error(s(188))}if(n.return!==i.return)n=l,i=o;else{for(var c=!1,E=l.child;E;){if(E===n){c=!0,n=l,i=o;break}if(E===i){c=!0,i=l,n=o;break}E=E.sibling}if(!c){for(E=o.child;E;){if(E===n){c=!0,n=o,i=l;break}if(E===i){c=!0,i=o,n=l;break}E=E.sibling}if(!c)throw Error(s(189))}}if(n.alternate!==i)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?_:t}function h(_){var t=_.tag;if(t===5||t===26||t===27||t===6)return _;for(_=_.child;_!==null;){if(t=h(_),t!==null)return t;_=_.sibling}return null}var A=Object.assign,y=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),J=Symbol.for("react.consumer"),K=Symbol.for("react.context"),i_=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),o_=Symbol.for("react.suspense_list"),f_=Symbol.for("react.memo"),$_=Symbol.for("react.lazy"),y_=Symbol.for("react.activity"),P_=Symbol.for("react.memo_cache_sentinel"),K_=Symbol.iterator;function H_(_){return _===null||typeof _!="object"?null:(_=K_&&_[K_]||_["@@iterator"],typeof _=="function"?_:null)}var it=Symbol.for("react.client.reference");function Z_(_){if(_==null)return null;if(typeof _=="function")return _.$$typeof===it?null:_.displayName||_.name||null;if(typeof _=="string")return _;switch(_){case Y:return"Fragment";case Q:return"Profiler";case Z:return"StrictMode";case j:return"Suspense";case o_:return"SuspenseList";case y_:return"Activity"}if(typeof _=="object")switch(_.$$typeof){case U:return"Portal";case K:return(_.displayName||"Context")+".Provider";case J:return(_._context.displayName||"Context")+".Consumer";case i_:var t=_.render;return _=_.displayName,_||(_=t.displayName||t.name||"",_=_!==""?"ForwardRef("+_+")":"ForwardRef"),_;case f_:return t=_.displayName||null,t!==null?t:Z_(_.type)||"Memo";case $_:t=_._payload,_=_._init;try{return Z_(_(t))}catch{}}return null}var m_=Array.isArray,P=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=$.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,__={pending:!1,data:null,method:null,action:null},T_=[],p=-1;function W(_){return{current:_}}function w(_){0>p||(_.current=T_[p],T_[p]=null,p--)}function I(_,t){p++,T_[p]=_.current,_.current=t}var S=W(null),L=W(null),g=W(null),D=W(null);function M(_,t){switch(I(g,t),I(L,_),I(S,null),t.nodeType){case 9:case 11:_=(_=t.documentElement)&&(_=_.namespaceURI)?rT(_):0;break;default:if(_=t.tagName,t=t.namespaceURI)t=rT(t),_=cT(t,_);else switch(_){case"svg":_=1;break;case"math":_=2;break;default:_=0}}w(S),I(S,_)}function q(){w(S),w(L),w(g)}function X(_){_.memoizedState!==null&&I(D,_);var t=S.current,n=cT(t,_.type);t!==n&&(I(L,_),I(S,n))}function F(_){L.current===_&&(w(S),w(L)),D.current===_&&(w(D),fa._currentValue=__)}var n_=Object.prototype.hasOwnProperty,I_=e.unstable_scheduleCallback,R_=e.unstable_cancelCallback,S_=e.unstable_shouldYield,C_=e.unstable_requestPaint,B_=e.unstable_now,ye=e.unstable_getCurrentPriorityLevel,Ze=e.unstable_ImmediatePriority,G_=e.unstable_UserBlockingPriority,F_=e.unstable_NormalPriority,M_=e.unstable_LowPriority,mi=e.unstable_IdlePriority,j0=e.log,z0=e.unstable_setDisableYieldValue,Ii=null,gt=null;function Re(_){if(typeof j0=="function"&&z0(_),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(Ii,_)}catch{}}var St=Math.clz32?Math.clz32:q0,X0=Math.log,K0=Math.LN2;function q0(_){return _>>>=0,_===0?32:31-(X0(_)/K0|0)|0}var Pa=256,Ba=4194304;function Je(_){var t=_&42;if(t!==0)return t;switch(_&-_){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return _&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return _&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return _}}function Ga(_,t,n){var i=_.pendingLanes;if(i===0)return 0;var l=0,o=_.suspendedLanes,c=_.pingedLanes;_=_.warmLanes;var E=i&134217727;return E!==0?(i=E&~o,i!==0?l=Je(i):(c&=E,c!==0?l=Je(c):n||(n=E&~_,n!==0&&(l=Je(n))))):(E=i&~o,E!==0?l=Je(E):c!==0?l=Je(c):n||(n=i&~_,n!==0&&(l=Je(n)))),l===0?0:t!==0&&t!==l&&(t&o)===0&&(o=l&-l,n=t&-t,o>=n||o===32&&(n&4194048)!==0)?t:l}function pi(_,t){return(_.pendingLanes&~(_.suspendedLanes&~_.pingedLanes)&t)===0}function k0(_,t){switch(_){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xu(){var _=Pa;return Pa<<=1,(Pa&4194048)===0&&(Pa=256),_}function Ku(){var _=Ba;return Ba<<=1,(Ba&62914560)===0&&(Ba=4194304),_}function rl(_){for(var t=[],n=0;31>n;n++)t.push(_);return t}function yi(_,t){_.pendingLanes|=t,t!==268435456&&(_.suspendedLanes=0,_.pingedLanes=0,_.warmLanes=0)}function Q0(_,t,n,i,l,o){var c=_.pendingLanes;_.pendingLanes=n,_.suspendedLanes=0,_.pingedLanes=0,_.warmLanes=0,_.expiredLanes&=n,_.entangledLanes&=n,_.errorRecoveryDisabledLanes&=n,_.shellSuspendCounter=0;var E=_.entanglements,m=_.expirationTimes,x=_.hiddenUpdates;for(n=c&~n;0<n;){var B=31-St(n),V=1<<B;E[B]=0,m[B]=-1;var O=x[B];if(O!==null)for(x[B]=null,B=0;B<O.length;B++){var H=O[B];H!==null&&(H.lane&=-536870913)}n&=~V}i!==0&&qu(_,i,0),o!==0&&l===0&&_.tag!==0&&(_.suspendedLanes|=o&~(c&~t))}function qu(_,t,n){_.pendingLanes|=t,_.suspendedLanes&=~t;var i=31-St(t);_.entangledLanes|=t,_.entanglements[i]=_.entanglements[i]|1073741824|n&4194090}function ku(_,t){var n=_.entangledLanes|=t;for(_=_.entanglements;n;){var i=31-St(n),l=1<<i;l&t|_[i]&t&&(_[i]|=t),n&=~l}}function cl(_){switch(_){case 2:_=1;break;case 8:_=4;break;case 32:_=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:_=128;break;case 268435456:_=134217728;break;default:_=0}return _}function fl(_){return _&=-_,2<_?8<_?(_&134217727)!==0?32:268435456:8:2}function Qu(){var _=z.p;return _!==0?_:(_=window.event,_===void 0?32:bT(_.type))}function Z0(_,t){var n=z.p;try{return z.p=_,t()}finally{z.p=n}}var ge=Math.random().toString(36).slice(2),ft="__reactFiber$"+ge,Lt="__reactProps$"+ge,Rn="__reactContainer$"+ge,Tl="__reactEvents$"+ge,J0="__reactListeners$"+ge,_E="__reactHandles$"+ge,Zu="__reactResources$"+ge,Ri="__reactMarker$"+ge;function hl(_){delete _[ft],delete _[Lt],delete _[Tl],delete _[J0],delete _[_E]}function gn(_){var t=_[ft];if(t)return t;for(var n=_.parentNode;n;){if(t=n[Rn]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(_=dT(_);_!==null;){if(n=_[ft])return n;_=dT(_)}return t}_=n,n=_.parentNode}return null}function Sn(_){if(_=_[ft]||_[Rn]){var t=_.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return _}return null}function gi(_){var t=_.tag;if(t===5||t===26||t===27||t===6)return _.stateNode;throw Error(s(33))}function vn(_){var t=_[Zu];return t||(t=_[Zu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function at(_){_[Ri]=!0}var Ju=new Set,_r={};function _n(_,t){Nn(_,t),Nn(_+"Capture",t)}function Nn(_,t){for(_r[_]=t,_=0;_<t.length;_++)Ju.add(t[_])}var tE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tr={},er={};function eE(_){return n_.call(er,_)?!0:n_.call(tr,_)?!1:tE.test(_)?er[_]=!0:(tr[_]=!0,!1)}function Va(_,t,n){if(eE(t))if(n===null)_.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":_.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){_.removeAttribute(t);return}}_.setAttribute(t,""+n)}}function Wa(_,t,n){if(n===null)_.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":_.removeAttribute(t);return}_.setAttribute(t,""+n)}}function $e(_,t,n,i){if(i===null)_.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":_.removeAttribute(n);return}_.setAttributeNS(t,n,""+i)}}var dl,nr;function Cn(_){if(dl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);dl=t&&t[1]||"",nr=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+dl+_+nr}var El=!1;function Al(_,t){if(!_||El)return"";El=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(H){var O=H}Reflect.construct(_,[],V)}else{try{V.call()}catch(H){O=H}_.call(V.prototype)}}else{try{throw Error()}catch(H){O=H}(V=_())&&typeof V.catch=="function"&&V.catch(function(){})}}catch(H){if(H&&O&&typeof H.stack=="string")return[H.stack,O.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=i.DetermineComponentFrameRoot(),c=o[0],E=o[1];if(c&&E){var m=c.split(`
`),x=E.split(`
`);for(l=i=0;i<m.length&&!m[i].includes("DetermineComponentFrameRoot");)i++;for(;l<x.length&&!x[l].includes("DetermineComponentFrameRoot");)l++;if(i===m.length||l===x.length)for(i=m.length-1,l=x.length-1;1<=i&&0<=l&&m[i]!==x[l];)l--;for(;1<=i&&0<=l;i--,l--)if(m[i]!==x[l]){if(i!==1||l!==1)do if(i--,l--,0>l||m[i]!==x[l]){var B=`
`+m[i].replace(" at new "," at ");return _.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",_.displayName)),B}while(1<=i&&0<=l);break}}}finally{El=!1,Error.prepareStackTrace=n}return(n=_?_.displayName||_.name:"")?Cn(n):""}function nE(_){switch(_.tag){case 26:case 27:case 5:return Cn(_.type);case 16:return Cn("Lazy");case 13:return Cn("Suspense");case 19:return Cn("SuspenseList");case 0:case 15:return Al(_.type,!1);case 11:return Al(_.type.render,!1);case 1:return Al(_.type,!0);case 31:return Cn("Activity");default:return""}}function ir(_){try{var t="";do t+=nE(_),_=_.return;while(_);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Ht(_){switch(typeof _){case"bigint":case"boolean":case"number":case"string":case"undefined":return _;case"object":return _;default:return""}}function ar(_){var t=_.type;return(_=_.nodeName)&&_.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function iE(_){var t=ar(_)?"checked":"value",n=Object.getOwnPropertyDescriptor(_.constructor.prototype,t),i=""+_[t];if(!_.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(_,t,{configurable:!0,get:function(){return l.call(this)},set:function(c){i=""+c,o.call(this,c)}}),Object.defineProperty(_,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(c){i=""+c},stopTracking:function(){_._valueTracker=null,delete _[t]}}}}function wa(_){_._valueTracker||(_._valueTracker=iE(_))}function $r(_){if(!_)return!1;var t=_._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return _&&(i=ar(_)?_.checked?"true":"false":_.value),_=i,_!==n?(t.setValue(_),!0):!1}function Ya(_){if(_=_||(typeof document<"u"?document:void 0),typeof _>"u")return null;try{return _.activeElement||_.body}catch{return _.body}}var aE=/[\n"\\]/g;function Ut(_){return _.replace(aE,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ll(_,t,n,i,l,o,c,E){_.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?_.type=c:_.removeAttribute("type"),t!=null?c==="number"?(t===0&&_.value===""||_.value!=t)&&(_.value=""+Ht(t)):_.value!==""+Ht(t)&&(_.value=""+Ht(t)):c!=="submit"&&c!=="reset"||_.removeAttribute("value"),t!=null?ml(_,c,Ht(t)):n!=null?ml(_,c,Ht(n)):i!=null&&_.removeAttribute("value"),l==null&&o!=null&&(_.defaultChecked=!!o),l!=null&&(_.checked=l&&typeof l!="function"&&typeof l!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?_.name=""+Ht(E):_.removeAttribute("name")}function lr(_,t,n,i,l,o,c,E){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(_.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null))return;n=n!=null?""+Ht(n):"",t=t!=null?""+Ht(t):n,E||t===_.value||(_.value=t),_.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,_.checked=E?_.checked:!!i,_.defaultChecked=!!i,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(_.name=c)}function ml(_,t,n){t==="number"&&Ya(_.ownerDocument)===_||_.defaultValue===""+n||(_.defaultValue=""+n)}function xn(_,t,n,i){if(_=_.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<_.length;n++)l=t.hasOwnProperty("$"+_[n].value),_[n].selected!==l&&(_[n].selected=l),l&&i&&(_[n].defaultSelected=!0)}else{for(n=""+Ht(n),t=null,l=0;l<_.length;l++){if(_[l].value===n){_[l].selected=!0,i&&(_[l].defaultSelected=!0);return}t!==null||_[l].disabled||(t=_[l])}t!==null&&(t.selected=!0)}}function sr(_,t,n){if(t!=null&&(t=""+Ht(t),t!==_.value&&(_.value=t),n==null)){_.defaultValue!==t&&(_.defaultValue=t);return}_.defaultValue=n!=null?""+Ht(n):""}function or(_,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(s(92));if(m_(i)){if(1<i.length)throw Error(s(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Ht(t),_.defaultValue=n,i=_.textContent,i===n&&i!==""&&i!==null&&(_.value=i)}function bn(_,t){if(t){var n=_.firstChild;if(n&&n===_.lastChild&&n.nodeType===3){n.nodeValue=t;return}}_.textContent=t}var $E=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ur(_,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?_.setProperty(t,""):t==="float"?_.cssFloat="":_[t]="":i?_.setProperty(t,n):typeof n!="number"||n===0||$E.has(t)?t==="float"?_.cssFloat=n:_[t]=(""+n).trim():_[t]=n+"px"}function rr(_,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(_=_.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?_.setProperty(i,""):i==="float"?_.cssFloat="":_[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&n[l]!==i&&ur(_,l,i)}else for(var o in t)t.hasOwnProperty(o)&&ur(_,o,t[o])}function Il(_){if(_.indexOf("-")===-1)return!1;switch(_){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fa(_){return sE.test(""+_)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":_}var pl=null;function yl(_){return _=_.target||_.srcElement||window,_.correspondingUseElement&&(_=_.correspondingUseElement),_.nodeType===3?_.parentNode:_}var On=null,Mn=null;function cr(_){var t=Sn(_);if(t&&(_=t.stateNode)){var n=_[Lt]||null;_:switch(_=t.stateNode,t.type){case"input":if(Ll(_,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=_;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ut(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==_&&i.form===_.form){var l=i[Lt]||null;if(!l)throw Error(s(90));Ll(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===_.form&&$r(i)}break _;case"textarea":sr(_,n.value,n.defaultValue);break _;case"select":t=n.value,t!=null&&xn(_,!!n.multiple,t,!1)}}}var Rl=!1;function fr(_,t,n){if(Rl)return _(t,n);Rl=!0;try{var i=_(t);return i}finally{if(Rl=!1,(On!==null||Mn!==null)&&(C$(),On&&(t=On,_=Mn,Mn=On=null,cr(t),_)))for(t=0;t<_.length;t++)cr(_[t])}}function Si(_,t){var n=_.stateNode;if(n===null)return null;var i=n[Lt]||null;if(i===null)return null;n=i[t];_:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(_=_.type,i=!(_==="button"||_==="input"||_==="select"||_==="textarea")),_=!i;break _;default:_=!1}if(_)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var le=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gl=!1;if(le)try{var vi={};Object.defineProperty(vi,"passive",{get:function(){gl=!0}}),window.addEventListener("test",vi,vi),window.removeEventListener("test",vi,vi)}catch{gl=!1}var Se=null,Sl=null,ja=null;function Tr(){if(ja)return ja;var _,t=Sl,n=t.length,i,l="value"in Se?Se.value:Se.textContent,o=l.length;for(_=0;_<n&&t[_]===l[_];_++);var c=n-_;for(i=1;i<=c&&t[n-i]===l[o-i];i++);return ja=l.slice(_,1<i?1-i:void 0)}function za(_){var t=_.keyCode;return"charCode"in _?(_=_.charCode,_===0&&t===13&&(_=13)):_=t,_===10&&(_=13),32<=_||_===13?_:0}function Xa(){return!0}function hr(){return!1}function mt(_){function t(n,i,l,o,c){this._reactName=n,this._targetInst=l,this.type=i,this.nativeEvent=o,this.target=c,this.currentTarget=null;for(var E in _)_.hasOwnProperty(E)&&(n=_[E],this[E]=n?n(o):o[E]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Xa:hr,this.isPropagationStopped=hr,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xa)},persist:function(){},isPersistent:Xa}),t}var tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(_){return _.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ka=mt(tn),Ni=A({},tn,{view:0,detail:0}),oE=mt(Ni),vl,Nl,Ci,qa=A({},Ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xl,button:0,buttons:0,relatedTarget:function(_){return _.relatedTarget===void 0?_.fromElement===_.srcElement?_.toElement:_.fromElement:_.relatedTarget},movementX:function(_){return"movementX"in _?_.movementX:(_!==Ci&&(Ci&&_.type==="mousemove"?(vl=_.screenX-Ci.screenX,Nl=_.screenY-Ci.screenY):Nl=vl=0,Ci=_),vl)},movementY:function(_){return"movementY"in _?_.movementY:Nl}}),dr=mt(qa),uE=A({},qa,{dataTransfer:0}),rE=mt(uE),cE=A({},Ni,{relatedTarget:0}),Cl=mt(cE),fE=A({},tn,{animationName:0,elapsedTime:0,pseudoElement:0}),TE=mt(fE),hE=A({},tn,{clipboardData:function(_){return"clipboardData"in _?_.clipboardData:window.clipboardData}}),dE=mt(hE),EE=A({},tn,{data:0}),Er=mt(EE),AE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function IE(_){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(_):(_=mE[_])?!!t[_]:!1}function xl(){return IE}var pE=A({},Ni,{key:function(_){if(_.key){var t=AE[_.key]||_.key;if(t!=="Unidentified")return t}return _.type==="keypress"?(_=za(_),_===13?"Enter":String.fromCharCode(_)):_.type==="keydown"||_.type==="keyup"?LE[_.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xl,charCode:function(_){return _.type==="keypress"?za(_):0},keyCode:function(_){return _.type==="keydown"||_.type==="keyup"?_.keyCode:0},which:function(_){return _.type==="keypress"?za(_):_.type==="keydown"||_.type==="keyup"?_.keyCode:0}}),yE=mt(pE),RE=A({},qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ar=mt(RE),gE=A({},Ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xl}),SE=mt(gE),vE=A({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),NE=mt(vE),CE=A({},qa,{deltaX:function(_){return"deltaX"in _?_.deltaX:"wheelDeltaX"in _?-_.wheelDeltaX:0},deltaY:function(_){return"deltaY"in _?_.deltaY:"wheelDeltaY"in _?-_.wheelDeltaY:"wheelDelta"in _?-_.wheelDelta:0},deltaZ:0,deltaMode:0}),xE=mt(CE),bE=A({},tn,{newState:0,oldState:0}),OE=mt(bE),ME=[9,13,27,32],bl=le&&"CompositionEvent"in window,xi=null;le&&"documentMode"in document&&(xi=document.documentMode);var DE=le&&"TextEvent"in window&&!xi,Lr=le&&(!bl||xi&&8<xi&&11>=xi),mr=" ",Ir=!1;function pr(_,t){switch(_){case"keyup":return ME.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yr(_){return _=_.detail,typeof _=="object"&&"data"in _?_.data:null}var Dn=!1;function HE(_,t){switch(_){case"compositionend":return yr(t);case"keypress":return t.which!==32?null:(Ir=!0,mr);case"textInput":return _=t.data,_===mr&&Ir?null:_;default:return null}}function UE(_,t){if(Dn)return _==="compositionend"||!bl&&pr(_,t)?(_=Tr(),ja=Sl=Se=null,Dn=!1,_):null;switch(_){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lr&&t.locale!=="ko"?null:t.data;default:return null}}var PE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rr(_){var t=_&&_.nodeName&&_.nodeName.toLowerCase();return t==="input"?!!PE[_.type]:t==="textarea"}function gr(_,t,n,i){On?Mn?Mn.push(i):Mn=[i]:On=i,t=H$(t,"onChange"),0<t.length&&(n=new Ka("onChange","change",null,n,i),_.push({event:n,listeners:t}))}var bi=null,Oi=null;function BE(_){$T(_,0)}function ka(_){var t=gi(_);if($r(t))return _}function Sr(_,t){if(_==="change")return t}var vr=!1;if(le){var Ol;if(le){var Ml="oninput"in document;if(!Ml){var Nr=document.createElement("div");Nr.setAttribute("oninput","return;"),Ml=typeof Nr.oninput=="function"}Ol=Ml}else Ol=!1;vr=Ol&&(!document.documentMode||9<document.documentMode)}function Cr(){bi&&(bi.detachEvent("onpropertychange",xr),Oi=bi=null)}function xr(_){if(_.propertyName==="value"&&ka(Oi)){var t=[];gr(t,Oi,_,yl(_)),fr(BE,t)}}function GE(_,t,n){_==="focusin"?(Cr(),bi=t,Oi=n,bi.attachEvent("onpropertychange",xr)):_==="focusout"&&Cr()}function VE(_){if(_==="selectionchange"||_==="keyup"||_==="keydown")return ka(Oi)}function WE(_,t){if(_==="click")return ka(t)}function wE(_,t){if(_==="input"||_==="change")return ka(t)}function YE(_,t){return _===t&&(_!==0||1/_===1/t)||_!==_&&t!==t}var vt=typeof Object.is=="function"?Object.is:YE;function Mi(_,t){if(vt(_,t))return!0;if(typeof _!="object"||_===null||typeof t!="object"||t===null)return!1;var n=Object.keys(_),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var l=n[i];if(!n_.call(t,l)||!vt(_[l],t[l]))return!1}return!0}function br(_){for(;_&&_.firstChild;)_=_.firstChild;return _}function Or(_,t){var n=br(_);_=0;for(var i;n;){if(n.nodeType===3){if(i=_+n.textContent.length,_<=t&&i>=t)return{node:n,offset:t-_};_=i}_:{for(;n;){if(n.nextSibling){n=n.nextSibling;break _}n=n.parentNode}n=void 0}n=br(n)}}function Mr(_,t){return _&&t?_===t?!0:_&&_.nodeType===3?!1:t&&t.nodeType===3?Mr(_,t.parentNode):"contains"in _?_.contains(t):_.compareDocumentPosition?!!(_.compareDocumentPosition(t)&16):!1:!1}function Dr(_){_=_!=null&&_.ownerDocument!=null&&_.ownerDocument.defaultView!=null?_.ownerDocument.defaultView:window;for(var t=Ya(_.document);t instanceof _.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)_=t.contentWindow;else break;t=Ya(_.document)}return t}function Dl(_){var t=_&&_.nodeName&&_.nodeName.toLowerCase();return t&&(t==="input"&&(_.type==="text"||_.type==="search"||_.type==="tel"||_.type==="url"||_.type==="password")||t==="textarea"||_.contentEditable==="true")}var FE=le&&"documentMode"in document&&11>=document.documentMode,Hn=null,Hl=null,Di=null,Ul=!1;function Hr(_,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ul||Hn==null||Hn!==Ya(i)||(i=Hn,"selectionStart"in i&&Dl(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Di&&Mi(Di,i)||(Di=i,i=H$(Hl,"onSelect"),0<i.length&&(t=new Ka("onSelect","select",null,t,n),_.push({event:t,listeners:i}),t.target=Hn)))}function en(_,t){var n={};return n[_.toLowerCase()]=t.toLowerCase(),n["Webkit"+_]="webkit"+t,n["Moz"+_]="moz"+t,n}var Un={animationend:en("Animation","AnimationEnd"),animationiteration:en("Animation","AnimationIteration"),animationstart:en("Animation","AnimationStart"),transitionrun:en("Transition","TransitionRun"),transitionstart:en("Transition","TransitionStart"),transitioncancel:en("Transition","TransitionCancel"),transitionend:en("Transition","TransitionEnd")},Pl={},Ur={};le&&(Ur=document.createElement("div").style,"AnimationEvent"in window||(delete Un.animationend.animation,delete Un.animationiteration.animation,delete Un.animationstart.animation),"TransitionEvent"in window||delete Un.transitionend.transition);function nn(_){if(Pl[_])return Pl[_];if(!Un[_])return _;var t=Un[_],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ur)return Pl[_]=t[n];return _}var Pr=nn("animationend"),Br=nn("animationiteration"),Gr=nn("animationstart"),jE=nn("transitionrun"),zE=nn("transitionstart"),XE=nn("transitioncancel"),Vr=nn("transitionend"),Wr=new Map,Bl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bl.push("scrollEnd");function Xt(_,t){Wr.set(_,t),_n(t,[_])}var wr=new WeakMap;function Pt(_,t){if(typeof _=="object"&&_!==null){var n=wr.get(_);return n!==void 0?n:(t={value:_,source:t,stack:ir(t)},wr.set(_,t),t)}return{value:_,source:t,stack:ir(t)}}var Bt=[],Pn=0,Gl=0;function Qa(){for(var _=Pn,t=Gl=Pn=0;t<_;){var n=Bt[t];Bt[t++]=null;var i=Bt[t];Bt[t++]=null;var l=Bt[t];Bt[t++]=null;var o=Bt[t];if(Bt[t++]=null,i!==null&&l!==null){var c=i.pending;c===null?l.next=l:(l.next=c.next,c.next=l),i.pending=l}o!==0&&Yr(n,l,o)}}function Za(_,t,n,i){Bt[Pn++]=_,Bt[Pn++]=t,Bt[Pn++]=n,Bt[Pn++]=i,Gl|=i,_.lanes|=i,_=_.alternate,_!==null&&(_.lanes|=i)}function Vl(_,t,n,i){return Za(_,t,n,i),Ja(_)}function Bn(_,t){return Za(_,null,null,t),Ja(_)}function Yr(_,t,n){_.lanes|=n;var i=_.alternate;i!==null&&(i.lanes|=n);for(var l=!1,o=_.return;o!==null;)o.childLanes|=n,i=o.alternate,i!==null&&(i.childLanes|=n),o.tag===22&&(_=o.stateNode,_===null||_._visibility&1||(l=!0)),_=o,o=o.return;return _.tag===3?(o=_.stateNode,l&&t!==null&&(l=31-St(n),_=o.hiddenUpdates,i=_[l],i===null?_[l]=[t]:i.push(t),t.lane=n|536870912),o):null}function Ja(_){if(50<aa)throw aa=0,zs=null,Error(s(185));for(var t=_.return;t!==null;)_=t,t=_.return;return _.tag===3?_.stateNode:null}var Gn={};function KE(_,t,n,i){this.tag=_,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(_,t,n,i){return new KE(_,t,n,i)}function Wl(_){return _=_.prototype,!(!_||!_.isReactComponent)}function se(_,t){var n=_.alternate;return n===null?(n=Nt(_.tag,t,_.key,_.mode),n.elementType=_.elementType,n.type=_.type,n.stateNode=_.stateNode,n.alternate=_,_.alternate=n):(n.pendingProps=t,n.type=_.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=_.flags&65011712,n.childLanes=_.childLanes,n.lanes=_.lanes,n.child=_.child,n.memoizedProps=_.memoizedProps,n.memoizedState=_.memoizedState,n.updateQueue=_.updateQueue,t=_.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=_.sibling,n.index=_.index,n.ref=_.ref,n.refCleanup=_.refCleanup,n}function Fr(_,t){_.flags&=65011714;var n=_.alternate;return n===null?(_.childLanes=0,_.lanes=t,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=n.childLanes,_.lanes=n.lanes,_.child=n.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=n.memoizedProps,_.memoizedState=n.memoizedState,_.updateQueue=n.updateQueue,_.type=n.type,t=n.dependencies,_.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),_}function _$(_,t,n,i,l,o){var c=0;if(i=_,typeof _=="function")Wl(_)&&(c=1);else if(typeof _=="string")c=kA(_,n,S.current)?26:_==="html"||_==="head"||_==="body"?27:5;else _:switch(_){case y_:return _=Nt(31,n,t,l),_.elementType=y_,_.lanes=o,_;case Y:return an(n.children,l,o,t);case Z:c=8,l|=24;break;case Q:return _=Nt(12,n,t,l|2),_.elementType=Q,_.lanes=o,_;case j:return _=Nt(13,n,t,l),_.elementType=j,_.lanes=o,_;case o_:return _=Nt(19,n,t,l),_.elementType=o_,_.lanes=o,_;default:if(typeof _=="object"&&_!==null)switch(_.$$typeof){case k:case K:c=10;break _;case J:c=9;break _;case i_:c=11;break _;case f_:c=14;break _;case $_:c=16,i=null;break _}c=29,n=Error(s(130,_===null?"null":typeof _,"")),i=null}return t=Nt(c,n,t,l),t.elementType=_,t.type=i,t.lanes=o,t}function an(_,t,n,i){return _=Nt(7,_,i,t),_.lanes=n,_}function wl(_,t,n){return _=Nt(6,_,null,t),_.lanes=n,_}function Yl(_,t,n){return t=Nt(4,_.children!==null?_.children:[],_.key,t),t.lanes=n,t.stateNode={containerInfo:_.containerInfo,pendingChildren:null,implementation:_.implementation},t}var Vn=[],Wn=0,t$=null,e$=0,Gt=[],Vt=0,$n=null,oe=1,ue="";function ln(_,t){Vn[Wn++]=e$,Vn[Wn++]=t$,t$=_,e$=t}function jr(_,t,n){Gt[Vt++]=oe,Gt[Vt++]=ue,Gt[Vt++]=$n,$n=_;var i=oe;_=ue;var l=32-St(i)-1;i&=~(1<<l),n+=1;var o=32-St(t)+l;if(30<o){var c=l-l%5;o=(i&(1<<c)-1).toString(32),i>>=c,l-=c,oe=1<<32-St(t)+l|n<<l|i,ue=o+_}else oe=1<<o|n<<l|i,ue=_}function Fl(_){_.return!==null&&(ln(_,1),jr(_,1,0))}function jl(_){for(;_===t$;)t$=Vn[--Wn],Vn[Wn]=null,e$=Vn[--Wn],Vn[Wn]=null;for(;_===$n;)$n=Gt[--Vt],Gt[Vt]=null,ue=Gt[--Vt],Gt[Vt]=null,oe=Gt[--Vt],Gt[Vt]=null}var Et=null,j_=null,g_=!1,sn=null,Zt=!1,zl=Error(s(519));function on(_){var t=Error(s(418,""));throw Pi(Pt(t,_)),zl}function zr(_){var t=_.stateNode,n=_.type,i=_.memoizedProps;switch(t[ft]=_,t[Lt]=i,n){case"dialog":A_("cancel",t),A_("close",t);break;case"iframe":case"object":case"embed":A_("load",t);break;case"video":case"audio":for(n=0;n<la.length;n++)A_(la[n],t);break;case"source":A_("error",t);break;case"img":case"image":case"link":A_("error",t),A_("load",t);break;case"details":A_("toggle",t);break;case"input":A_("invalid",t),lr(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),wa(t);break;case"select":A_("invalid",t);break;case"textarea":A_("invalid",t),or(t,i.value,i.defaultValue,i.children),wa(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||uT(t.textContent,n)?(i.popover!=null&&(A_("beforetoggle",t),A_("toggle",t)),i.onScroll!=null&&A_("scroll",t),i.onScrollEnd!=null&&A_("scrollend",t),i.onClick!=null&&(t.onclick=U$),t=!0):t=!1,t||on(_)}function Xr(_){for(Et=_.return;Et;)switch(Et.tag){case 5:case 13:Zt=!1;return;case 27:case 3:Zt=!0;return;default:Et=Et.return}}function Hi(_){if(_!==Et)return!1;if(!g_)return Xr(_),g_=!0,!1;var t=_.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=_.type,n=!(n!=="form"&&n!=="button")||so(_.type,_.memoizedProps)),n=!n),n&&j_&&on(_),Xr(_),t===13){if(_=_.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(s(317));_:{for(_=_.nextSibling,t=0;_;){if(_.nodeType===8)if(n=_.data,n==="/$"){if(t===0){j_=qt(_.nextSibling);break _}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;_=_.nextSibling}j_=null}}else t===27?(t=j_,we(_.type)?(_=co,co=null,j_=_):j_=t):j_=Et?qt(_.stateNode.nextSibling):null;return!0}function Ui(){j_=Et=null,g_=!1}function Kr(){var _=sn;return _!==null&&(yt===null?yt=_:yt.push.apply(yt,_),sn=null),_}function Pi(_){sn===null?sn=[_]:sn.push(_)}var Xl=W(null),un=null,re=null;function ve(_,t,n){I(Xl,t._currentValue),t._currentValue=n}function ce(_){_._currentValue=Xl.current,w(Xl)}function Kl(_,t,n){for(;_!==null;){var i=_.alternate;if((_.childLanes&t)!==t?(_.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),_===n)break;_=_.return}}function ql(_,t,n,i){var l=_.child;for(l!==null&&(l.return=_);l!==null;){var o=l.dependencies;if(o!==null){var c=l.child;o=o.firstContext;_:for(;o!==null;){var E=o;o=l;for(var m=0;m<t.length;m++)if(E.context===t[m]){o.lanes|=n,E=o.alternate,E!==null&&(E.lanes|=n),Kl(o.return,n,_),i||(c=null);break _}o=E.next}}else if(l.tag===18){if(c=l.return,c===null)throw Error(s(341));c.lanes|=n,o=c.alternate,o!==null&&(o.lanes|=n),Kl(c,n,_),c=null}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===_){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}}function Bi(_,t,n,i){_=null;for(var l=t,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var c=l.alternate;if(c===null)throw Error(s(387));if(c=c.memoizedProps,c!==null){var E=l.type;vt(l.pendingProps.value,c.value)||(_!==null?_.push(E):_=[E])}}else if(l===D.current){if(c=l.alternate,c===null)throw Error(s(387));c.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(_!==null?_.push(fa):_=[fa])}l=l.return}_!==null&&ql(t,_,n,i),t.flags|=262144}function n$(_){for(_=_.firstContext;_!==null;){if(!vt(_.context._currentValue,_.memoizedValue))return!0;_=_.next}return!1}function rn(_){un=_,re=null,_=_.dependencies,_!==null&&(_.firstContext=null)}function Tt(_){return qr(un,_)}function i$(_,t){return un===null&&rn(_),qr(_,t)}function qr(_,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},re===null){if(_===null)throw Error(s(308));re=t,_.dependencies={lanes:0,firstContext:t},_.flags|=524288}else re=re.next=t;return n}var qE=typeof AbortController<"u"?AbortController:function(){var _=[],t=this.signal={aborted:!1,addEventListener:function(n,i){_.push(i)}};this.abort=function(){t.aborted=!0,_.forEach(function(n){return n()})}},kE=e.unstable_scheduleCallback,QE=e.unstable_NormalPriority,et={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kl(){return{controller:new qE,data:new Map,refCount:0}}function Gi(_){_.refCount--,_.refCount===0&&kE(QE,function(){_.controller.abort()})}var Vi=null,Ql=0,wn=0,Yn=null;function ZE(_,t){if(Vi===null){var n=Vi=[];Ql=0,wn=Js(),Yn={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Ql++,t.then(kr,kr),t}function kr(){if(--Ql===0&&Vi!==null){Yn!==null&&(Yn.status="fulfilled");var _=Vi;Vi=null,wn=0,Yn=null;for(var t=0;t<_.length;t++)(0,_[t])()}}function JE(_,t){var n=[],i={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return _.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),i}var Qr=P.S;P.S=function(_,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&ZE(_,t),Qr!==null&&Qr(_,t)};var cn=W(null);function Zl(){var _=cn.current;return _!==null?_:U_.pooledCache}function a$(_,t){t===null?I(cn,cn.current):I(cn,t.pool)}function Zr(){var _=Zl();return _===null?null:{parent:et._currentValue,pool:_}}var Wi=Error(s(460)),Jr=Error(s(474)),$$=Error(s(542)),Jl={then:function(){}};function _c(_){return _=_.status,_==="fulfilled"||_==="rejected"}function l$(){}function tc(_,t,n){switch(n=_[n],n===void 0?_.push(t):n!==t&&(t.then(l$,l$),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw _=t.reason,nc(_),_;default:if(typeof t.status=="string")t.then(l$,l$);else{if(_=U_,_!==null&&100<_.shellSuspendCounter)throw Error(s(482));_=t,_.status="pending",_.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw _=t.reason,nc(_),_}throw wi=t,Wi}}var wi=null;function ec(){if(wi===null)throw Error(s(459));var _=wi;return wi=null,_}function nc(_){if(_===Wi||_===$$)throw Error(s(483))}var Ne=!1;function _s(_){_.updateQueue={baseState:_.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ts(_,t){_=_.updateQueue,t.updateQueue===_&&(t.updateQueue={baseState:_.baseState,firstBaseUpdate:_.firstBaseUpdate,lastBaseUpdate:_.lastBaseUpdate,shared:_.shared,callbacks:null})}function Ce(_){return{lane:_,tag:0,payload:null,callback:null,next:null}}function xe(_,t,n){var i=_.updateQueue;if(i===null)return null;if(i=i.shared,(v_&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=Ja(_),Yr(_,null,n),t}return Za(_,i,t,n),Ja(_)}function Yi(_,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=_.pendingLanes,n|=i,t.lanes=n,ku(_,n)}}function es(_,t){var n=_.updateQueue,i=_.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var c={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?l=o=c:o=o.next=c,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:i.shared,callbacks:i.callbacks},_.updateQueue=n;return}_=n.lastBaseUpdate,_===null?n.firstBaseUpdate=t:_.next=t,n.lastBaseUpdate=t}var ns=!1;function Fi(){if(ns){var _=Yn;if(_!==null)throw _}}function ji(_,t,n,i){ns=!1;var l=_.updateQueue;Ne=!1;var o=l.firstBaseUpdate,c=l.lastBaseUpdate,E=l.shared.pending;if(E!==null){l.shared.pending=null;var m=E,x=m.next;m.next=null,c===null?o=x:c.next=x,c=m;var B=_.alternate;B!==null&&(B=B.updateQueue,E=B.lastBaseUpdate,E!==c&&(E===null?B.firstBaseUpdate=x:E.next=x,B.lastBaseUpdate=m))}if(o!==null){var V=l.baseState;c=0,B=x=m=null,E=o;do{var O=E.lane&-536870913,H=O!==E.lane;if(H?(L_&O)===O:(i&O)===O){O!==0&&O===wn&&(ns=!0),B!==null&&(B=B.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});_:{var u_=_,l_=E;O=t;var O_=n;switch(l_.tag){case 1:if(u_=l_.payload,typeof u_=="function"){V=u_.call(O_,V,O);break _}V=u_;break _;case 3:u_.flags=u_.flags&-65537|128;case 0:if(u_=l_.payload,O=typeof u_=="function"?u_.call(O_,V,O):u_,O==null)break _;V=A({},V,O);break _;case 2:Ne=!0}}O=E.callback,O!==null&&(_.flags|=64,H&&(_.flags|=8192),H=l.callbacks,H===null?l.callbacks=[O]:H.push(O))}else H={lane:O,tag:E.tag,payload:E.payload,callback:E.callback,next:null},B===null?(x=B=H,m=V):B=B.next=H,c|=O;if(E=E.next,E===null){if(E=l.shared.pending,E===null)break;H=E,E=H.next,H.next=null,l.lastBaseUpdate=H,l.shared.pending=null}}while(!0);B===null&&(m=V),l.baseState=m,l.firstBaseUpdate=x,l.lastBaseUpdate=B,o===null&&(l.shared.lanes=0),Be|=c,_.lanes=c,_.memoizedState=V}}function ic(_,t){if(typeof _!="function")throw Error(s(191,_));_.call(t)}function ac(_,t){var n=_.callbacks;if(n!==null)for(_.callbacks=null,_=0;_<n.length;_++)ic(n[_],t)}var Fn=W(null),s$=W(0);function $c(_,t){_=Le,I(s$,_),I(Fn,t),Le=_|t.baseLanes}function is(){I(s$,Le),I(Fn,Fn.current)}function as(){Le=s$.current,w(Fn),w(s$)}var be=0,h_=null,x_=null,J_=null,o$=!1,jn=!1,fn=!1,u$=0,zi=0,zn=null,_A=0;function q_(){throw Error(s(321))}function $s(_,t){if(t===null)return!1;for(var n=0;n<t.length&&n<_.length;n++)if(!vt(_[n],t[n]))return!1;return!0}function ls(_,t,n,i,l,o){return be=o,h_=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,P.H=_===null||_.memoizedState===null?Yc:Fc,fn=!1,o=n(i,l),fn=!1,jn&&(o=sc(t,n,i,l)),lc(_),o}function lc(_){P.H=d$;var t=x_!==null&&x_.next!==null;if(be=0,J_=x_=h_=null,o$=!1,zi=0,zn=null,t)throw Error(s(300));_===null||$t||(_=_.dependencies,_!==null&&n$(_)&&($t=!0))}function sc(_,t,n,i){h_=_;var l=0;do{if(jn&&(zn=null),zi=0,jn=!1,25<=l)throw Error(s(301));if(l+=1,J_=x_=null,_.updateQueue!=null){var o=_.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}P.H=lA,o=t(n,i)}while(jn);return o}function tA(){var _=P.H,t=_.useState()[0];return t=typeof t.then=="function"?Xi(t):t,_=_.useState()[0],(x_!==null?x_.memoizedState:null)!==_&&(h_.flags|=1024),t}function ss(){var _=u$!==0;return u$=0,_}function os(_,t,n){t.updateQueue=_.updateQueue,t.flags&=-2053,_.lanes&=~n}function us(_){if(o$){for(_=_.memoizedState;_!==null;){var t=_.queue;t!==null&&(t.pending=null),_=_.next}o$=!1}be=0,J_=x_=h_=null,jn=!1,zi=u$=0,zn=null}function It(){var _={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J_===null?h_.memoizedState=J_=_:J_=J_.next=_,J_}function _t(){if(x_===null){var _=h_.alternate;_=_!==null?_.memoizedState:null}else _=x_.next;var t=J_===null?h_.memoizedState:J_.next;if(t!==null)J_=t,x_=_;else{if(_===null)throw h_.alternate===null?Error(s(467)):Error(s(310));x_=_,_={memoizedState:x_.memoizedState,baseState:x_.baseState,baseQueue:x_.baseQueue,queue:x_.queue,next:null},J_===null?h_.memoizedState=J_=_:J_=J_.next=_}return J_}function rs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xi(_){var t=zi;return zi+=1,zn===null&&(zn=[]),_=tc(zn,_,t),t=h_,(J_===null?t.memoizedState:J_.next)===null&&(t=t.alternate,P.H=t===null||t.memoizedState===null?Yc:Fc),_}function r$(_){if(_!==null&&typeof _=="object"){if(typeof _.then=="function")return Xi(_);if(_.$$typeof===K)return Tt(_)}throw Error(s(438,String(_)))}function cs(_){var t=null,n=h_.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=h_.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=rs(),h_.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(_),i=0;i<_;i++)n[i]=P_;return t.index++,n}function fe(_,t){return typeof t=="function"?t(_):t}function c$(_){var t=_t();return fs(t,x_,_)}function fs(_,t,n){var i=_.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=n;var l=_.baseQueue,o=i.pending;if(o!==null){if(l!==null){var c=l.next;l.next=o.next,o.next=c}t.baseQueue=l=o,i.pending=null}if(o=_.baseState,l===null)_.memoizedState=o;else{t=l.next;var E=c=null,m=null,x=t,B=!1;do{var V=x.lane&-536870913;if(V!==x.lane?(L_&V)===V:(be&V)===V){var O=x.revertLane;if(O===0)m!==null&&(m=m.next={lane:0,revertLane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),V===wn&&(B=!0);else if((be&O)===O){x=x.next,O===wn&&(B=!0);continue}else V={lane:0,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},m===null?(E=m=V,c=o):m=m.next=V,h_.lanes|=O,Be|=O;V=x.action,fn&&n(o,V),o=x.hasEagerState?x.eagerState:n(o,V)}else O={lane:V,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},m===null?(E=m=O,c=o):m=m.next=O,h_.lanes|=V,Be|=V;x=x.next}while(x!==null&&x!==t);if(m===null?c=o:m.next=E,!vt(o,_.memoizedState)&&($t=!0,B&&(n=Yn,n!==null)))throw n;_.memoizedState=o,_.baseState=c,_.baseQueue=m,i.lastRenderedState=o}return l===null&&(i.lanes=0),[_.memoizedState,i.dispatch]}function Ts(_){var t=_t(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=_;var i=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var c=l=l.next;do o=_(o,c.action),c=c.next;while(c!==l);vt(o,t.memoizedState)||($t=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function oc(_,t,n){var i=h_,l=_t(),o=g_;if(o){if(n===void 0)throw Error(s(407));n=n()}else n=t();var c=!vt((x_||l).memoizedState,n);c&&(l.memoizedState=n,$t=!0),l=l.queue;var E=cc.bind(null,i,l,_);if(Ki(2048,8,E,[_]),l.getSnapshot!==t||c||J_!==null&&J_.memoizedState.tag&1){if(i.flags|=2048,Xn(9,f$(),rc.bind(null,i,l,n,t),null),U_===null)throw Error(s(349));o||(be&124)!==0||uc(i,t,n)}return n}function uc(_,t,n){_.flags|=16384,_={getSnapshot:t,value:n},t=h_.updateQueue,t===null?(t=rs(),h_.updateQueue=t,t.stores=[_]):(n=t.stores,n===null?t.stores=[_]:n.push(_))}function rc(_,t,n,i){t.value=n,t.getSnapshot=i,fc(t)&&Tc(_)}function cc(_,t,n){return n(function(){fc(t)&&Tc(_)})}function fc(_){var t=_.getSnapshot;_=_.value;try{var n=t();return!vt(_,n)}catch{return!0}}function Tc(_){var t=Bn(_,2);t!==null&&Mt(t,_,2)}function hs(_){var t=It();if(typeof _=="function"){var n=_;if(_=n(),fn){Re(!0);try{n()}finally{Re(!1)}}}return t.memoizedState=t.baseState=_,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fe,lastRenderedState:_},t}function hc(_,t,n,i){return _.baseState=n,fs(_,x_,typeof i=="function"?i:fe)}function eA(_,t,n,i,l){if(h$(_))throw Error(s(485));if(_=t.action,_!==null){var o={payload:l,action:_,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){o.listeners.push(c)}};P.T!==null?n(!0):o.isTransition=!1,i(o),n=t.pending,n===null?(o.next=t.pending=o,dc(t,o)):(o.next=n.next,t.pending=n.next=o)}}function dc(_,t){var n=t.action,i=t.payload,l=_.state;if(t.isTransition){var o=P.T,c={};P.T=c;try{var E=n(l,i),m=P.S;m!==null&&m(c,E),Ec(_,t,E)}catch(x){ds(_,t,x)}finally{P.T=o}}else try{o=n(l,i),Ec(_,t,o)}catch(x){ds(_,t,x)}}function Ec(_,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Ac(_,t,i)},function(i){return ds(_,t,i)}):Ac(_,t,n)}function Ac(_,t,n){t.status="fulfilled",t.value=n,Lc(t),_.state=n,t=_.pending,t!==null&&(n=t.next,n===t?_.pending=null:(n=n.next,t.next=n,dc(_,n)))}function ds(_,t,n){var i=_.pending;if(_.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Lc(t),t=t.next;while(t!==i)}_.action=null}function Lc(_){_=_.listeners;for(var t=0;t<_.length;t++)(0,_[t])()}function mc(_,t){return t}function Ic(_,t){if(g_){var n=U_.formState;if(n!==null){_:{var i=h_;if(g_){if(j_){t:{for(var l=j_,o=Zt;l.nodeType!==8;){if(!o){l=null;break t}if(l=qt(l.nextSibling),l===null){l=null;break t}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){j_=qt(l.nextSibling),i=l.data==="F!";break _}}on(i)}i=!1}i&&(t=n[0])}}return n=It(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mc,lastRenderedState:t},n.queue=i,n=Vc.bind(null,h_,i),i.dispatch=n,i=hs(!1),o=Is.bind(null,h_,!1,i.queue),i=It(),l={state:t,dispatch:null,action:_,pending:null},i.queue=l,n=eA.bind(null,h_,l,o,n),l.dispatch=n,i.memoizedState=_,[t,n,!1]}function pc(_){var t=_t();return yc(t,x_,_)}function yc(_,t,n){if(t=fs(_,t,mc)[0],_=c$(fe)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Xi(t)}catch(c){throw c===Wi?$$:c}else i=t;t=_t();var l=t.queue,o=l.dispatch;return n!==t.memoizedState&&(h_.flags|=2048,Xn(9,f$(),nA.bind(null,l,n),null)),[i,o,_]}function nA(_,t){_.action=t}function Rc(_){var t=_t(),n=x_;if(n!==null)return yc(t,n,_);_t(),t=t.memoizedState,n=_t();var i=n.queue.dispatch;return n.memoizedState=_,[t,i,!1]}function Xn(_,t,n,i){return _={tag:_,create:n,deps:i,inst:t,next:null},t=h_.updateQueue,t===null&&(t=rs(),h_.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=_.next=_:(i=n.next,n.next=_,_.next=i,t.lastEffect=_),_}function f$(){return{destroy:void 0,resource:void 0}}function gc(){return _t().memoizedState}function T$(_,t,n,i){var l=It();i=i===void 0?null:i,h_.flags|=_,l.memoizedState=Xn(1|t,f$(),n,i)}function Ki(_,t,n,i){var l=_t();i=i===void 0?null:i;var o=l.memoizedState.inst;x_!==null&&i!==null&&$s(i,x_.memoizedState.deps)?l.memoizedState=Xn(t,o,n,i):(h_.flags|=_,l.memoizedState=Xn(1|t,o,n,i))}function Sc(_,t){T$(8390656,8,_,t)}function vc(_,t){Ki(2048,8,_,t)}function Nc(_,t){return Ki(4,2,_,t)}function Cc(_,t){return Ki(4,4,_,t)}function xc(_,t){if(typeof t=="function"){_=_();var n=t(_);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return _=_(),t.current=_,function(){t.current=null}}function bc(_,t,n){n=n!=null?n.concat([_]):null,Ki(4,4,xc.bind(null,t,_),n)}function Es(){}function Oc(_,t){var n=_t();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&$s(t,i[1])?i[0]:(n.memoizedState=[_,t],_)}function Mc(_,t){var n=_t();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&$s(t,i[1]))return i[0];if(i=_(),fn){Re(!0);try{_()}finally{Re(!1)}}return n.memoizedState=[i,t],i}function As(_,t,n){return n===void 0||(be&1073741824)!==0?_.memoizedState=t:(_.memoizedState=n,_=Pf(),h_.lanes|=_,Be|=_,n)}function Dc(_,t,n,i){return vt(n,t)?n:Fn.current!==null?(_=As(_,n,i),vt(_,t)||($t=!0),_):(be&42)===0?($t=!0,_.memoizedState=n):(_=Pf(),h_.lanes|=_,Be|=_,t)}function Hc(_,t,n,i,l){var o=z.p;z.p=o!==0&&8>o?o:8;var c=P.T,E={};P.T=E,Is(_,!1,t,n);try{var m=l(),x=P.S;if(x!==null&&x(E,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var B=JE(m,i);qi(_,t,B,Ot(_))}else qi(_,t,i,Ot(_))}catch(V){qi(_,t,{then:function(){},status:"rejected",reason:V},Ot())}finally{z.p=o,P.T=c}}function iA(){}function Ls(_,t,n,i){if(_.tag!==5)throw Error(s(476));var l=Uc(_).queue;Hc(_,l,t,__,n===null?iA:function(){return Pc(_),n(i)})}function Uc(_){var t=_.memoizedState;if(t!==null)return t;t={memoizedState:__,baseState:__,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fe,lastRenderedState:__},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fe,lastRenderedState:n},next:null},_.memoizedState=t,_=_.alternate,_!==null&&(_.memoizedState=t),t}function Pc(_){var t=Uc(_).next.queue;qi(_,t,{},Ot())}function ms(){return Tt(fa)}function Bc(){return _t().memoizedState}function Gc(){return _t().memoizedState}function aA(_){for(var t=_.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ot();_=Ce(n);var i=xe(t,_,n);i!==null&&(Mt(i,t,n),Yi(i,t,n)),t={cache:kl()},_.payload=t;return}t=t.return}}function $A(_,t,n){var i=Ot();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},h$(_)?Wc(t,n):(n=Vl(_,t,n,i),n!==null&&(Mt(n,_,i),wc(n,t,i)))}function Vc(_,t,n){var i=Ot();qi(_,t,n,i)}function qi(_,t,n,i){var l={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(h$(_))Wc(t,l);else{var o=_.alternate;if(_.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var c=t.lastRenderedState,E=o(c,n);if(l.hasEagerState=!0,l.eagerState=E,vt(E,c))return Za(_,t,l,0),U_===null&&Qa(),!1}catch{}finally{}if(n=Vl(_,t,l,i),n!==null)return Mt(n,_,i),wc(n,t,i),!0}return!1}function Is(_,t,n,i){if(i={lane:2,revertLane:Js(),action:i,hasEagerState:!1,eagerState:null,next:null},h$(_)){if(t)throw Error(s(479))}else t=Vl(_,n,i,2),t!==null&&Mt(t,_,2)}function h$(_){var t=_.alternate;return _===h_||t!==null&&t===h_}function Wc(_,t){jn=o$=!0;var n=_.pending;n===null?t.next=t:(t.next=n.next,n.next=t),_.pending=t}function wc(_,t,n){if((n&4194048)!==0){var i=t.lanes;i&=_.pendingLanes,n|=i,t.lanes=n,ku(_,n)}}var d$={readContext:Tt,use:r$,useCallback:q_,useContext:q_,useEffect:q_,useImperativeHandle:q_,useLayoutEffect:q_,useInsertionEffect:q_,useMemo:q_,useReducer:q_,useRef:q_,useState:q_,useDebugValue:q_,useDeferredValue:q_,useTransition:q_,useSyncExternalStore:q_,useId:q_,useHostTransitionStatus:q_,useFormState:q_,useActionState:q_,useOptimistic:q_,useMemoCache:q_,useCacheRefresh:q_},Yc={readContext:Tt,use:r$,useCallback:function(_,t){return It().memoizedState=[_,t===void 0?null:t],_},useContext:Tt,useEffect:Sc,useImperativeHandle:function(_,t,n){n=n!=null?n.concat([_]):null,T$(4194308,4,xc.bind(null,t,_),n)},useLayoutEffect:function(_,t){return T$(4194308,4,_,t)},useInsertionEffect:function(_,t){T$(4,2,_,t)},useMemo:function(_,t){var n=It();t=t===void 0?null:t;var i=_();if(fn){Re(!0);try{_()}finally{Re(!1)}}return n.memoizedState=[i,t],i},useReducer:function(_,t,n){var i=It();if(n!==void 0){var l=n(t);if(fn){Re(!0);try{n(t)}finally{Re(!1)}}}else l=t;return i.memoizedState=i.baseState=l,_={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_,lastRenderedState:l},i.queue=_,_=_.dispatch=$A.bind(null,h_,_),[i.memoizedState,_]},useRef:function(_){var t=It();return _={current:_},t.memoizedState=_},useState:function(_){_=hs(_);var t=_.queue,n=Vc.bind(null,h_,t);return t.dispatch=n,[_.memoizedState,n]},useDebugValue:Es,useDeferredValue:function(_,t){var n=It();return As(n,_,t)},useTransition:function(){var _=hs(!1);return _=Hc.bind(null,h_,_.queue,!0,!1),It().memoizedState=_,[!1,_]},useSyncExternalStore:function(_,t,n){var i=h_,l=It();if(g_){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),U_===null)throw Error(s(349));(L_&124)!==0||uc(i,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Sc(cc.bind(null,i,o,_),[_]),i.flags|=2048,Xn(9,f$(),rc.bind(null,i,o,n,t),null),n},useId:function(){var _=It(),t=U_.identifierPrefix;if(g_){var n=ue,i=oe;n=(i&~(1<<32-St(i)-1)).toString(32)+n,t="«"+t+"R"+n,n=u$++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=_A++,t="«"+t+"r"+n.toString(32)+"»";return _.memoizedState=t},useHostTransitionStatus:ms,useFormState:Ic,useActionState:Ic,useOptimistic:function(_){var t=It();t.memoizedState=t.baseState=_;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Is.bind(null,h_,!0,n),n.dispatch=t,[_,t]},useMemoCache:cs,useCacheRefresh:function(){return It().memoizedState=aA.bind(null,h_)}},Fc={readContext:Tt,use:r$,useCallback:Oc,useContext:Tt,useEffect:vc,useImperativeHandle:bc,useInsertionEffect:Nc,useLayoutEffect:Cc,useMemo:Mc,useReducer:c$,useRef:gc,useState:function(){return c$(fe)},useDebugValue:Es,useDeferredValue:function(_,t){var n=_t();return Dc(n,x_.memoizedState,_,t)},useTransition:function(){var _=c$(fe)[0],t=_t().memoizedState;return[typeof _=="boolean"?_:Xi(_),t]},useSyncExternalStore:oc,useId:Bc,useHostTransitionStatus:ms,useFormState:pc,useActionState:pc,useOptimistic:function(_,t){var n=_t();return hc(n,x_,_,t)},useMemoCache:cs,useCacheRefresh:Gc},lA={readContext:Tt,use:r$,useCallback:Oc,useContext:Tt,useEffect:vc,useImperativeHandle:bc,useInsertionEffect:Nc,useLayoutEffect:Cc,useMemo:Mc,useReducer:Ts,useRef:gc,useState:function(){return Ts(fe)},useDebugValue:Es,useDeferredValue:function(_,t){var n=_t();return x_===null?As(n,_,t):Dc(n,x_.memoizedState,_,t)},useTransition:function(){var _=Ts(fe)[0],t=_t().memoizedState;return[typeof _=="boolean"?_:Xi(_),t]},useSyncExternalStore:oc,useId:Bc,useHostTransitionStatus:ms,useFormState:Rc,useActionState:Rc,useOptimistic:function(_,t){var n=_t();return x_!==null?hc(n,x_,_,t):(n.baseState=_,[_,n.queue.dispatch])},useMemoCache:cs,useCacheRefresh:Gc},Kn=null,ki=0;function E$(_){var t=ki;return ki+=1,Kn===null&&(Kn=[]),tc(Kn,_,t)}function Qi(_,t){t=t.props.ref,_.ref=t!==void 0?t:null}function A$(_,t){throw t.$$typeof===y?Error(s(525)):(_=Object.prototype.toString.call(t),Error(s(31,_==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":_)))}function jc(_){var t=_._init;return t(_._payload)}function zc(_){function t(N,R){if(_){var C=N.deletions;C===null?(N.deletions=[R],N.flags|=16):C.push(R)}}function n(N,R){if(!_)return null;for(;R!==null;)t(N,R),R=R.sibling;return null}function i(N){for(var R=new Map;N!==null;)N.key!==null?R.set(N.key,N):R.set(N.index,N),N=N.sibling;return R}function l(N,R){return N=se(N,R),N.index=0,N.sibling=null,N}function o(N,R,C){return N.index=C,_?(C=N.alternate,C!==null?(C=C.index,C<R?(N.flags|=67108866,R):C):(N.flags|=67108866,R)):(N.flags|=1048576,R)}function c(N){return _&&N.alternate===null&&(N.flags|=67108866),N}function E(N,R,C,G){return R===null||R.tag!==6?(R=wl(C,N.mode,G),R.return=N,R):(R=l(R,C),R.return=N,R)}function m(N,R,C,G){var e_=C.type;return e_===Y?B(N,R,C.props.children,G,C.key):R!==null&&(R.elementType===e_||typeof e_=="object"&&e_!==null&&e_.$$typeof===$_&&jc(e_)===R.type)?(R=l(R,C.props),Qi(R,C),R.return=N,R):(R=_$(C.type,C.key,C.props,null,N.mode,G),Qi(R,C),R.return=N,R)}function x(N,R,C,G){return R===null||R.tag!==4||R.stateNode.containerInfo!==C.containerInfo||R.stateNode.implementation!==C.implementation?(R=Yl(C,N.mode,G),R.return=N,R):(R=l(R,C.children||[]),R.return=N,R)}function B(N,R,C,G,e_){return R===null||R.tag!==7?(R=an(C,N.mode,G,e_),R.return=N,R):(R=l(R,C),R.return=N,R)}function V(N,R,C){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=wl(""+R,N.mode,C),R.return=N,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case v:return C=_$(R.type,R.key,R.props,null,N.mode,C),Qi(C,R),C.return=N,C;case U:return R=Yl(R,N.mode,C),R.return=N,R;case $_:var G=R._init;return R=G(R._payload),V(N,R,C)}if(m_(R)||H_(R))return R=an(R,N.mode,C,null),R.return=N,R;if(typeof R.then=="function")return V(N,E$(R),C);if(R.$$typeof===K)return V(N,i$(N,R),C);A$(N,R)}return null}function O(N,R,C,G){var e_=R!==null?R.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return e_!==null?null:E(N,R,""+C,G);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case v:return C.key===e_?m(N,R,C,G):null;case U:return C.key===e_?x(N,R,C,G):null;case $_:return e_=C._init,C=e_(C._payload),O(N,R,C,G)}if(m_(C)||H_(C))return e_!==null?null:B(N,R,C,G,null);if(typeof C.then=="function")return O(N,R,E$(C),G);if(C.$$typeof===K)return O(N,R,i$(N,C),G);A$(N,C)}return null}function H(N,R,C,G,e_){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return N=N.get(C)||null,E(R,N,""+G,e_);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case v:return N=N.get(G.key===null?C:G.key)||null,m(R,N,G,e_);case U:return N=N.get(G.key===null?C:G.key)||null,x(R,N,G,e_);case $_:var d_=G._init;return G=d_(G._payload),H(N,R,C,G,e_)}if(m_(G)||H_(G))return N=N.get(C)||null,B(R,N,G,e_,null);if(typeof G.then=="function")return H(N,R,C,E$(G),e_);if(G.$$typeof===K)return H(N,R,C,i$(R,G),e_);A$(R,G)}return null}function u_(N,R,C,G){for(var e_=null,d_=null,a_=R,s_=R=0,st=null;a_!==null&&s_<C.length;s_++){a_.index>s_?(st=a_,a_=null):st=a_.sibling;var p_=O(N,a_,C[s_],G);if(p_===null){a_===null&&(a_=st);break}_&&a_&&p_.alternate===null&&t(N,a_),R=o(p_,R,s_),d_===null?e_=p_:d_.sibling=p_,d_=p_,a_=st}if(s_===C.length)return n(N,a_),g_&&ln(N,s_),e_;if(a_===null){for(;s_<C.length;s_++)a_=V(N,C[s_],G),a_!==null&&(R=o(a_,R,s_),d_===null?e_=a_:d_.sibling=a_,d_=a_);return g_&&ln(N,s_),e_}for(a_=i(a_);s_<C.length;s_++)st=H(a_,N,s_,C[s_],G),st!==null&&(_&&st.alternate!==null&&a_.delete(st.key===null?s_:st.key),R=o(st,R,s_),d_===null?e_=st:d_.sibling=st,d_=st);return _&&a_.forEach(function(Xe){return t(N,Xe)}),g_&&ln(N,s_),e_}function l_(N,R,C,G){if(C==null)throw Error(s(151));for(var e_=null,d_=null,a_=R,s_=R=0,st=null,p_=C.next();a_!==null&&!p_.done;s_++,p_=C.next()){a_.index>s_?(st=a_,a_=null):st=a_.sibling;var Xe=O(N,a_,p_.value,G);if(Xe===null){a_===null&&(a_=st);break}_&&a_&&Xe.alternate===null&&t(N,a_),R=o(Xe,R,s_),d_===null?e_=Xe:d_.sibling=Xe,d_=Xe,a_=st}if(p_.done)return n(N,a_),g_&&ln(N,s_),e_;if(a_===null){for(;!p_.done;s_++,p_=C.next())p_=V(N,p_.value,G),p_!==null&&(R=o(p_,R,s_),d_===null?e_=p_:d_.sibling=p_,d_=p_);return g_&&ln(N,s_),e_}for(a_=i(a_);!p_.done;s_++,p_=C.next())p_=H(a_,N,s_,p_.value,G),p_!==null&&(_&&p_.alternate!==null&&a_.delete(p_.key===null?s_:p_.key),R=o(p_,R,s_),d_===null?e_=p_:d_.sibling=p_,d_=p_);return _&&a_.forEach(function(sL){return t(N,sL)}),g_&&ln(N,s_),e_}function O_(N,R,C,G){if(typeof C=="object"&&C!==null&&C.type===Y&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case v:_:{for(var e_=C.key;R!==null;){if(R.key===e_){if(e_=C.type,e_===Y){if(R.tag===7){n(N,R.sibling),G=l(R,C.props.children),G.return=N,N=G;break _}}else if(R.elementType===e_||typeof e_=="object"&&e_!==null&&e_.$$typeof===$_&&jc(e_)===R.type){n(N,R.sibling),G=l(R,C.props),Qi(G,C),G.return=N,N=G;break _}n(N,R);break}else t(N,R);R=R.sibling}C.type===Y?(G=an(C.props.children,N.mode,G,C.key),G.return=N,N=G):(G=_$(C.type,C.key,C.props,null,N.mode,G),Qi(G,C),G.return=N,N=G)}return c(N);case U:_:{for(e_=C.key;R!==null;){if(R.key===e_)if(R.tag===4&&R.stateNode.containerInfo===C.containerInfo&&R.stateNode.implementation===C.implementation){n(N,R.sibling),G=l(R,C.children||[]),G.return=N,N=G;break _}else{n(N,R);break}else t(N,R);R=R.sibling}G=Yl(C,N.mode,G),G.return=N,N=G}return c(N);case $_:return e_=C._init,C=e_(C._payload),O_(N,R,C,G)}if(m_(C))return u_(N,R,C,G);if(H_(C)){if(e_=H_(C),typeof e_!="function")throw Error(s(150));return C=e_.call(C),l_(N,R,C,G)}if(typeof C.then=="function")return O_(N,R,E$(C),G);if(C.$$typeof===K)return O_(N,R,i$(N,C),G);A$(N,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,R!==null&&R.tag===6?(n(N,R.sibling),G=l(R,C),G.return=N,N=G):(n(N,R),G=wl(C,N.mode,G),G.return=N,N=G),c(N)):n(N,R)}return function(N,R,C,G){try{ki=0;var e_=O_(N,R,C,G);return Kn=null,e_}catch(a_){if(a_===Wi||a_===$$)throw a_;var d_=Nt(29,a_,null,N.mode);return d_.lanes=G,d_.return=N,d_}finally{}}}var qn=zc(!0),Xc=zc(!1),Wt=W(null),Jt=null;function Oe(_){var t=_.alternate;I(nt,nt.current&1),I(Wt,_),Jt===null&&(t===null||Fn.current!==null||t.memoizedState!==null)&&(Jt=_)}function Kc(_){if(_.tag===22){if(I(nt,nt.current),I(Wt,_),Jt===null){var t=_.alternate;t!==null&&t.memoizedState!==null&&(Jt=_)}}else Me()}function Me(){I(nt,nt.current),I(Wt,Wt.current)}function Te(_){w(Wt),Jt===_&&(Jt=null),w(nt)}var nt=W(0);function L$(_){for(var t=_;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||ro(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===_)break;for(;t.sibling===null;){if(t.return===null||t.return===_)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ps(_,t,n,i){t=_.memoizedState,n=n(i,t),n=n==null?t:A({},t,n),_.memoizedState=n,_.lanes===0&&(_.updateQueue.baseState=n)}var ys={enqueueSetState:function(_,t,n){_=_._reactInternals;var i=Ot(),l=Ce(i);l.payload=t,n!=null&&(l.callback=n),t=xe(_,l,i),t!==null&&(Mt(t,_,i),Yi(t,_,i))},enqueueReplaceState:function(_,t,n){_=_._reactInternals;var i=Ot(),l=Ce(i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=xe(_,l,i),t!==null&&(Mt(t,_,i),Yi(t,_,i))},enqueueForceUpdate:function(_,t){_=_._reactInternals;var n=Ot(),i=Ce(n);i.tag=2,t!=null&&(i.callback=t),t=xe(_,i,n),t!==null&&(Mt(t,_,n),Yi(t,_,n))}};function qc(_,t,n,i,l,o,c){return _=_.stateNode,typeof _.shouldComponentUpdate=="function"?_.shouldComponentUpdate(i,o,c):t.prototype&&t.prototype.isPureReactComponent?!Mi(n,i)||!Mi(l,o):!0}function kc(_,t,n,i){_=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==_&&ys.enqueueReplaceState(t,t.state,null)}function Tn(_,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(_=_.defaultProps){n===t&&(n=A({},n));for(var l in _)n[l]===void 0&&(n[l]=_[l])}return n}var m$=typeof reportError=="function"?reportError:function(_){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof _=="object"&&_!==null&&typeof _.message=="string"?String(_.message):String(_),error:_});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",_);return}console.error(_)};function Qc(_){m$(_)}function Zc(_){console.error(_)}function Jc(_){m$(_)}function I$(_,t){try{var n=_.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function _f(_,t,n){try{var i=_.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Rs(_,t,n){return n=Ce(n),n.tag=3,n.payload={element:null},n.callback=function(){I$(_,t)},n}function tf(_){return _=Ce(_),_.tag=3,_}function ef(_,t,n,i){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var o=i.value;_.payload=function(){return l(o)},_.callback=function(){_f(t,n,i)}}var c=n.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(_.callback=function(){_f(t,n,i),typeof l!="function"&&(Ge===null?Ge=new Set([this]):Ge.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})})}function sA(_,t,n,i,l){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Bi(t,n,l,!0),n=Wt.current,n!==null){switch(n.tag){case 13:return Jt===null?Ks():n.alternate===null&&z_===0&&(z_=3),n.flags&=-257,n.flags|=65536,n.lanes=l,i===Jl?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),ks(_,i,l)),!1;case 22:return n.flags|=65536,i===Jl?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),ks(_,i,l)),!1}throw Error(s(435,n.tag))}return ks(_,i,l),Ks(),!1}if(g_)return t=Wt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==zl&&(_=Error(s(422),{cause:i}),Pi(Pt(_,n)))):(i!==zl&&(t=Error(s(423),{cause:i}),Pi(Pt(t,n))),_=_.current.alternate,_.flags|=65536,l&=-l,_.lanes|=l,i=Pt(i,n),l=Rs(_.stateNode,i,l),es(_,l),z_!==4&&(z_=2)),!1;var o=Error(s(520),{cause:i});if(o=Pt(o,n),ia===null?ia=[o]:ia.push(o),z_!==4&&(z_=2),t===null)return!0;i=Pt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,_=l&-l,n.lanes|=_,_=Rs(n.stateNode,i,_),es(n,_),!1;case 1:if(t=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Ge===null||!Ge.has(o))))return n.flags|=65536,l&=-l,n.lanes|=l,l=tf(l),ef(l,_,n,i),es(n,l),!1}n=n.return}while(n!==null);return!1}var nf=Error(s(461)),$t=!1;function ot(_,t,n,i){t.child=_===null?Xc(t,null,n,i):qn(t,_.child,n,i)}function af(_,t,n,i,l){n=n.render;var o=t.ref;if("ref"in i){var c={};for(var E in i)E!=="ref"&&(c[E]=i[E])}else c=i;return rn(t),i=ls(_,t,n,c,o,l),E=ss(),_!==null&&!$t?(os(_,t,l),he(_,t,l)):(g_&&E&&Fl(t),t.flags|=1,ot(_,t,i,l),t.child)}function $f(_,t,n,i,l){if(_===null){var o=n.type;return typeof o=="function"&&!Wl(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,lf(_,t,o,i,l)):(_=_$(n.type,null,i,t,t.mode,l),_.ref=t.ref,_.return=t,t.child=_)}if(o=_.child,!Os(_,l)){var c=o.memoizedProps;if(n=n.compare,n=n!==null?n:Mi,n(c,i)&&_.ref===t.ref)return he(_,t,l)}return t.flags|=1,_=se(o,i),_.ref=t.ref,_.return=t,t.child=_}function lf(_,t,n,i,l){if(_!==null){var o=_.memoizedProps;if(Mi(o,i)&&_.ref===t.ref)if($t=!1,t.pendingProps=i=o,Os(_,l))(_.flags&131072)!==0&&($t=!0);else return t.lanes=_.lanes,he(_,t,l)}return gs(_,t,n,i,l)}function sf(_,t,n){var i=t.pendingProps,l=i.children,o=_!==null?_.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=o!==null?o.baseLanes|n:n,_!==null){for(l=t.child=_.child,o=0;l!==null;)o=o|l.lanes|l.childLanes,l=l.sibling;t.childLanes=o&~i}else t.childLanes=0,t.child=null;return of(_,t,i,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},_!==null&&a$(t,o!==null?o.cachePool:null),o!==null?$c(t,o):is(),Kc(t);else return t.lanes=t.childLanes=536870912,of(_,t,o!==null?o.baseLanes|n:n,n)}else o!==null?(a$(t,o.cachePool),$c(t,o),Me(),t.memoizedState=null):(_!==null&&a$(t,null),is(),Me());return ot(_,t,l,n),t.child}function of(_,t,n,i){var l=Zl();return l=l===null?null:{parent:et._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},_!==null&&a$(t,null),is(),Kc(t),_!==null&&Bi(_,t,i,!0),null}function p$(_,t){var n=t.ref;if(n===null)_!==null&&_.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(_===null||_.ref!==n)&&(t.flags|=4194816)}}function gs(_,t,n,i,l){return rn(t),n=ls(_,t,n,i,void 0,l),i=ss(),_!==null&&!$t?(os(_,t,l),he(_,t,l)):(g_&&i&&Fl(t),t.flags|=1,ot(_,t,n,l),t.child)}function uf(_,t,n,i,l,o){return rn(t),t.updateQueue=null,n=sc(t,i,n,l),lc(_),i=ss(),_!==null&&!$t?(os(_,t,o),he(_,t,o)):(g_&&i&&Fl(t),t.flags|=1,ot(_,t,n,o),t.child)}function rf(_,t,n,i,l){if(rn(t),t.stateNode===null){var o=Gn,c=n.contextType;typeof c=="object"&&c!==null&&(o=Tt(c)),o=new n(i,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=ys,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=i,o.state=t.memoizedState,o.refs={},_s(t),c=n.contextType,o.context=typeof c=="object"&&c!==null?Tt(c):Gn,o.state=t.memoizedState,c=n.getDerivedStateFromProps,typeof c=="function"&&(ps(t,n,c,i),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(c=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),c!==o.state&&ys.enqueueReplaceState(o,o.state,null),ji(t,i,o,l),Fi(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(_===null){o=t.stateNode;var E=t.memoizedProps,m=Tn(n,E);o.props=m;var x=o.context,B=n.contextType;c=Gn,typeof B=="object"&&B!==null&&(c=Tt(B));var V=n.getDerivedStateFromProps;B=typeof V=="function"||typeof o.getSnapshotBeforeUpdate=="function",E=t.pendingProps!==E,B||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(E||x!==c)&&kc(t,o,i,c),Ne=!1;var O=t.memoizedState;o.state=O,ji(t,i,o,l),Fi(),x=t.memoizedState,E||O!==x||Ne?(typeof V=="function"&&(ps(t,n,V,i),x=t.memoizedState),(m=Ne||qc(t,n,m,i,O,x,c))?(B||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=x),o.props=i,o.state=x,o.context=c,i=m):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,ts(_,t),c=t.memoizedProps,B=Tn(n,c),o.props=B,V=t.pendingProps,O=o.context,x=n.contextType,m=Gn,typeof x=="object"&&x!==null&&(m=Tt(x)),E=n.getDerivedStateFromProps,(x=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==V||O!==m)&&kc(t,o,i,m),Ne=!1,O=t.memoizedState,o.state=O,ji(t,i,o,l),Fi();var H=t.memoizedState;c!==V||O!==H||Ne||_!==null&&_.dependencies!==null&&n$(_.dependencies)?(typeof E=="function"&&(ps(t,n,E,i),H=t.memoizedState),(B=Ne||qc(t,n,B,i,O,H,m)||_!==null&&_.dependencies!==null&&n$(_.dependencies))?(x||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,H,m),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,H,m)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||c===_.memoizedProps&&O===_.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===_.memoizedProps&&O===_.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=H),o.props=i,o.state=H,o.context=m,i=B):(typeof o.componentDidUpdate!="function"||c===_.memoizedProps&&O===_.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===_.memoizedProps&&O===_.memoizedState||(t.flags|=1024),i=!1)}return o=i,p$(_,t),i=(t.flags&128)!==0,o||i?(o=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,_!==null&&i?(t.child=qn(t,_.child,null,l),t.child=qn(t,null,n,l)):ot(_,t,n,l),t.memoizedState=o.state,_=t.child):_=he(_,t,l),_}function cf(_,t,n,i){return Ui(),t.flags|=256,ot(_,t,n,i),t.child}var Ss={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vs(_){return{baseLanes:_,cachePool:Zr()}}function Ns(_,t,n){return _=_!==null?_.childLanes&~n:0,t&&(_|=wt),_}function ff(_,t,n){var i=t.pendingProps,l=!1,o=(t.flags&128)!==0,c;if((c=o)||(c=_!==null&&_.memoizedState===null?!1:(nt.current&2)!==0),c&&(l=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,_===null){if(g_){if(l?Oe(t):Me(),g_){var E=j_,m;if(m=E){_:{for(m=E,E=Zt;m.nodeType!==8;){if(!E){E=null;break _}if(m=qt(m.nextSibling),m===null){E=null;break _}}E=m}E!==null?(t.memoizedState={dehydrated:E,treeContext:$n!==null?{id:oe,overflow:ue}:null,retryLane:536870912,hydrationErrors:null},m=Nt(18,null,null,0),m.stateNode=E,m.return=t,t.child=m,Et=t,j_=null,m=!0):m=!1}m||on(t)}if(E=t.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return ro(E)?t.lanes=32:t.lanes=536870912,null;Te(t)}return E=i.children,i=i.fallback,l?(Me(),l=t.mode,E=y$({mode:"hidden",children:E},l),i=an(i,l,n,null),E.return=t,i.return=t,E.sibling=i,t.child=E,l=t.child,l.memoizedState=vs(n),l.childLanes=Ns(_,c,n),t.memoizedState=Ss,i):(Oe(t),Cs(t,E))}if(m=_.memoizedState,m!==null&&(E=m.dehydrated,E!==null)){if(o)t.flags&256?(Oe(t),t.flags&=-257,t=xs(_,t,n)):t.memoizedState!==null?(Me(),t.child=_.child,t.flags|=128,t=null):(Me(),l=i.fallback,E=t.mode,i=y$({mode:"visible",children:i.children},E),l=an(l,E,n,null),l.flags|=2,i.return=t,l.return=t,i.sibling=l,t.child=i,qn(t,_.child,null,n),i=t.child,i.memoizedState=vs(n),i.childLanes=Ns(_,c,n),t.memoizedState=Ss,t=l);else if(Oe(t),ro(E)){if(c=E.nextSibling&&E.nextSibling.dataset,c)var x=c.dgst;c=x,i=Error(s(419)),i.stack="",i.digest=c,Pi({value:i,source:null,stack:null}),t=xs(_,t,n)}else if($t||Bi(_,t,n,!1),c=(n&_.childLanes)!==0,$t||c){if(c=U_,c!==null&&(i=n&-n,i=(i&42)!==0?1:cl(i),i=(i&(c.suspendedLanes|n))!==0?0:i,i!==0&&i!==m.retryLane))throw m.retryLane=i,Bn(_,i),Mt(c,_,i),nf;E.data==="$?"||Ks(),t=xs(_,t,n)}else E.data==="$?"?(t.flags|=192,t.child=_.child,t=null):(_=m.treeContext,j_=qt(E.nextSibling),Et=t,g_=!0,sn=null,Zt=!1,_!==null&&(Gt[Vt++]=oe,Gt[Vt++]=ue,Gt[Vt++]=$n,oe=_.id,ue=_.overflow,$n=t),t=Cs(t,i.children),t.flags|=4096);return t}return l?(Me(),l=i.fallback,E=t.mode,m=_.child,x=m.sibling,i=se(m,{mode:"hidden",children:i.children}),i.subtreeFlags=m.subtreeFlags&65011712,x!==null?l=se(x,l):(l=an(l,E,n,null),l.flags|=2),l.return=t,i.return=t,i.sibling=l,t.child=i,i=l,l=t.child,E=_.child.memoizedState,E===null?E=vs(n):(m=E.cachePool,m!==null?(x=et._currentValue,m=m.parent!==x?{parent:x,pool:x}:m):m=Zr(),E={baseLanes:E.baseLanes|n,cachePool:m}),l.memoizedState=E,l.childLanes=Ns(_,c,n),t.memoizedState=Ss,i):(Oe(t),n=_.child,_=n.sibling,n=se(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,_!==null&&(c=t.deletions,c===null?(t.deletions=[_],t.flags|=16):c.push(_)),t.child=n,t.memoizedState=null,n)}function Cs(_,t){return t=y$({mode:"visible",children:t},_.mode),t.return=_,_.child=t}function y$(_,t){return _=Nt(22,_,null,t),_.lanes=0,_.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},_}function xs(_,t,n){return qn(t,_.child,null,n),_=Cs(t,t.pendingProps.children),_.flags|=2,t.memoizedState=null,_}function Tf(_,t,n){_.lanes|=t;var i=_.alternate;i!==null&&(i.lanes|=t),Kl(_.return,t,n)}function bs(_,t,n,i,l){var o=_.memoizedState;o===null?_.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=l)}function hf(_,t,n){var i=t.pendingProps,l=i.revealOrder,o=i.tail;if(ot(_,t,i.children,n),i=nt.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(_!==null&&(_.flags&128)!==0)_:for(_=t.child;_!==null;){if(_.tag===13)_.memoizedState!==null&&Tf(_,n,t);else if(_.tag===19)Tf(_,n,t);else if(_.child!==null){_.child.return=_,_=_.child;continue}if(_===t)break _;for(;_.sibling===null;){if(_.return===null||_.return===t)break _;_=_.return}_.sibling.return=_.return,_=_.sibling}i&=1}switch(I(nt,i),l){case"forwards":for(n=t.child,l=null;n!==null;)_=n.alternate,_!==null&&L$(_)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),bs(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(_=l.alternate,_!==null&&L$(_)===null){t.child=l;break}_=l.sibling,l.sibling=n,n=l,l=_}bs(t,!0,n,null,o);break;case"together":bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function he(_,t,n){if(_!==null&&(t.dependencies=_.dependencies),Be|=t.lanes,(n&t.childLanes)===0)if(_!==null){if(Bi(_,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(_!==null&&t.child!==_.child)throw Error(s(153));if(t.child!==null){for(_=t.child,n=se(_,_.pendingProps),t.child=n,n.return=t;_.sibling!==null;)_=_.sibling,n=n.sibling=se(_,_.pendingProps),n.return=t;n.sibling=null}return t.child}function Os(_,t){return(_.lanes&t)!==0?!0:(_=_.dependencies,!!(_!==null&&n$(_)))}function oA(_,t,n){switch(t.tag){case 3:M(t,t.stateNode.containerInfo),ve(t,et,_.memoizedState.cache),Ui();break;case 27:case 5:X(t);break;case 4:M(t,t.stateNode.containerInfo);break;case 10:ve(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Oe(t),t.flags|=128,null):(n&t.child.childLanes)!==0?ff(_,t,n):(Oe(t),_=he(_,t,n),_!==null?_.sibling:null);Oe(t);break;case 19:var l=(_.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Bi(_,t,n,!1),i=(n&t.childLanes)!==0),l){if(i)return hf(_,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),I(nt,nt.current),i)break;return null;case 22:case 23:return t.lanes=0,sf(_,t,n);case 24:ve(t,et,_.memoizedState.cache)}return he(_,t,n)}function df(_,t,n){if(_!==null)if(_.memoizedProps!==t.pendingProps)$t=!0;else{if(!Os(_,n)&&(t.flags&128)===0)return $t=!1,oA(_,t,n);$t=(_.flags&131072)!==0}else $t=!1,g_&&(t.flags&1048576)!==0&&jr(t,e$,t.index);switch(t.lanes=0,t.tag){case 16:_:{_=t.pendingProps;var i=t.elementType,l=i._init;if(i=l(i._payload),t.type=i,typeof i=="function")Wl(i)?(_=Tn(i,_),t.tag=1,t=rf(null,t,i,_,n)):(t.tag=0,t=gs(null,t,i,_,n));else{if(i!=null){if(l=i.$$typeof,l===i_){t.tag=11,t=af(null,t,i,_,n);break _}else if(l===f_){t.tag=14,t=$f(null,t,i,_,n);break _}}throw t=Z_(i)||i,Error(s(306,t,""))}}return t;case 0:return gs(_,t,t.type,t.pendingProps,n);case 1:return i=t.type,l=Tn(i,t.pendingProps),rf(_,t,i,l,n);case 3:_:{if(M(t,t.stateNode.containerInfo),_===null)throw Error(s(387));i=t.pendingProps;var o=t.memoizedState;l=o.element,ts(_,t),ji(t,i,null,n);var c=t.memoizedState;if(i=c.cache,ve(t,et,i),i!==o.cache&&ql(t,[et],n,!0),Fi(),i=c.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=cf(_,t,i,n);break _}else if(i!==l){l=Pt(Error(s(424)),t),Pi(l),t=cf(_,t,i,n);break _}else{switch(_=t.stateNode.containerInfo,_.nodeType){case 9:_=_.body;break;default:_=_.nodeName==="HTML"?_.ownerDocument.body:_}for(j_=qt(_.firstChild),Et=t,g_=!0,sn=null,Zt=!0,n=Xc(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ui(),i===l){t=he(_,t,n);break _}ot(_,t,i,n)}t=t.child}return t;case 26:return p$(_,t),_===null?(n=mT(t.type,null,t.pendingProps,null))?t.memoizedState=n:g_||(n=t.type,_=t.pendingProps,i=P$(g.current).createElement(n),i[ft]=t,i[Lt]=_,rt(i,n,_),at(i),t.stateNode=i):t.memoizedState=mT(t.type,_.memoizedProps,t.pendingProps,_.memoizedState),null;case 27:return X(t),_===null&&g_&&(i=t.stateNode=ET(t.type,t.pendingProps,g.current),Et=t,Zt=!0,l=j_,we(t.type)?(co=l,j_=qt(i.firstChild)):j_=l),ot(_,t,t.pendingProps.children,n),p$(_,t),_===null&&(t.flags|=4194304),t.child;case 5:return _===null&&g_&&((l=i=j_)&&(i=PA(i,t.type,t.pendingProps,Zt),i!==null?(t.stateNode=i,Et=t,j_=qt(i.firstChild),Zt=!1,l=!0):l=!1),l||on(t)),X(t),l=t.type,o=t.pendingProps,c=_!==null?_.memoizedProps:null,i=o.children,so(l,o)?i=null:c!==null&&so(l,c)&&(t.flags|=32),t.memoizedState!==null&&(l=ls(_,t,tA,null,null,n),fa._currentValue=l),p$(_,t),ot(_,t,i,n),t.child;case 6:return _===null&&g_&&((_=n=j_)&&(n=BA(n,t.pendingProps,Zt),n!==null?(t.stateNode=n,Et=t,j_=null,_=!0):_=!1),_||on(t)),null;case 13:return ff(_,t,n);case 4:return M(t,t.stateNode.containerInfo),i=t.pendingProps,_===null?t.child=qn(t,null,i,n):ot(_,t,i,n),t.child;case 11:return af(_,t,t.type,t.pendingProps,n);case 7:return ot(_,t,t.pendingProps,n),t.child;case 8:return ot(_,t,t.pendingProps.children,n),t.child;case 12:return ot(_,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ve(t,t.type,i.value),ot(_,t,i.children,n),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,rn(t),l=Tt(l),i=i(l),t.flags|=1,ot(_,t,i,n),t.child;case 14:return $f(_,t,t.type,t.pendingProps,n);case 15:return lf(_,t,t.type,t.pendingProps,n);case 19:return hf(_,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},_===null?(n=y$(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=se(_.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return sf(_,t,n);case 24:return rn(t),i=Tt(et),_===null?(l=Zl(),l===null&&(l=U_,o=kl(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=n),l=o),t.memoizedState={parent:i,cache:l},_s(t),ve(t,et,l)):((_.lanes&n)!==0&&(ts(_,t),ji(t,null,null,n),Fi()),l=_.memoizedState,o=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ve(t,et,i)):(i=o.cache,ve(t,et,i),i!==l.cache&&ql(t,[et],n,!0))),ot(_,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function de(_){_.flags|=4}function Ef(_,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)_.flags&=-16777217;else if(_.flags|=16777216,!gT(t)){if(t=Wt.current,t!==null&&((L_&4194048)===L_?Jt!==null:(L_&62914560)!==L_&&(L_&536870912)===0||t!==Jt))throw wi=Jl,Jr;_.flags|=8192}}function R$(_,t){t!==null&&(_.flags|=4),_.flags&16384&&(t=_.tag!==22?Ku():536870912,_.lanes|=t,Jn|=t)}function Zi(_,t){if(!g_)switch(_.tailMode){case"hidden":t=_.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?_.tail=null:n.sibling=null;break;case"collapsed":n=_.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||_.tail===null?_.tail=null:_.tail.sibling=null:i.sibling=null}}function w_(_){var t=_.alternate!==null&&_.alternate.child===_.child,n=0,i=0;if(t)for(var l=_.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=_,l=l.sibling;else for(l=_.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=_,l=l.sibling;return _.subtreeFlags|=i,_.childLanes=n,t}function uA(_,t,n){var i=t.pendingProps;switch(jl(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return w_(t),null;case 1:return w_(t),null;case 3:return n=t.stateNode,i=null,_!==null&&(i=_.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ce(et),q(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(_===null||_.child===null)&&(Hi(t)?de(t):_===null||_.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Kr())),w_(t),null;case 26:return n=t.memoizedState,_===null?(de(t),n!==null?(w_(t),Ef(t,n)):(w_(t),t.flags&=-16777217)):n?n!==_.memoizedState?(de(t),w_(t),Ef(t,n)):(w_(t),t.flags&=-16777217):(_.memoizedProps!==i&&de(t),w_(t),t.flags&=-16777217),null;case 27:F(t),n=g.current;var l=t.type;if(_!==null&&t.stateNode!=null)_.memoizedProps!==i&&de(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return w_(t),null}_=S.current,Hi(t)?zr(t):(_=ET(l,i,n),t.stateNode=_,de(t))}return w_(t),null;case 5:if(F(t),n=t.type,_!==null&&t.stateNode!=null)_.memoizedProps!==i&&de(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return w_(t),null}if(_=S.current,Hi(t))zr(t);else{switch(l=P$(g.current),_){case 1:_=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:_=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":_=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":_=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":_=l.createElement("div"),_.innerHTML="<script><\/script>",_=_.removeChild(_.firstChild);break;case"select":_=typeof i.is=="string"?l.createElement("select",{is:i.is}):l.createElement("select"),i.multiple?_.multiple=!0:i.size&&(_.size=i.size);break;default:_=typeof i.is=="string"?l.createElement(n,{is:i.is}):l.createElement(n)}}_[ft]=t,_[Lt]=i;_:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)_.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break _;for(;l.sibling===null;){if(l.return===null||l.return===t)break _;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=_;_:switch(rt(_,n,i),n){case"button":case"input":case"select":case"textarea":_=!!i.autoFocus;break _;case"img":_=!0;break _;default:_=!1}_&&de(t)}}return w_(t),t.flags&=-16777217,null;case 6:if(_&&t.stateNode!=null)_.memoizedProps!==i&&de(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(s(166));if(_=g.current,Hi(t)){if(_=t.stateNode,n=t.memoizedProps,i=null,l=Et,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}_[ft]=t,_=!!(_.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||uT(_.nodeValue,n)),_||on(t)}else _=P$(_).createTextNode(i),_[ft]=t,t.stateNode=_}return w_(t),null;case 13:if(i=t.memoizedState,_===null||_.memoizedState!==null&&_.memoizedState.dehydrated!==null){if(l=Hi(t),i!==null&&i.dehydrated!==null){if(_===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[ft]=t}else Ui(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;w_(t),l=!1}else l=Kr(),_!==null&&_.memoizedState!==null&&(_.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Te(t),t):(Te(t),null)}if(Te(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=i!==null,_=_!==null&&_.memoizedState!==null,n){i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool);var o=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==l&&(i.flags|=2048)}return n!==_&&n&&(t.child.flags|=8192),R$(t,t.updateQueue),w_(t),null;case 4:return q(),_===null&&no(t.stateNode.containerInfo),w_(t),null;case 10:return ce(t.type),w_(t),null;case 19:if(w(nt),l=t.memoizedState,l===null)return w_(t),null;if(i=(t.flags&128)!==0,o=l.rendering,o===null)if(i)Zi(l,!1);else{if(z_!==0||_!==null&&(_.flags&128)!==0)for(_=t.child;_!==null;){if(o=L$(_),o!==null){for(t.flags|=128,Zi(l,!1),_=o.updateQueue,t.updateQueue=_,R$(t,_),t.subtreeFlags=0,_=n,n=t.child;n!==null;)Fr(n,_),n=n.sibling;return I(nt,nt.current&1|2),t.child}_=_.sibling}l.tail!==null&&B_()>v$&&(t.flags|=128,i=!0,Zi(l,!1),t.lanes=4194304)}else{if(!i)if(_=L$(o),_!==null){if(t.flags|=128,i=!0,_=_.updateQueue,t.updateQueue=_,R$(t,_),Zi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!g_)return w_(t),null}else 2*B_()-l.renderingStartTime>v$&&n!==536870912&&(t.flags|=128,i=!0,Zi(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(_=l.last,_!==null?_.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=B_(),t.sibling=null,_=nt.current,I(nt,i?_&1|2:_&1),t):(w_(t),null);case 22:case 23:return Te(t),as(),i=t.memoizedState!==null,_!==null?_.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(w_(t),t.subtreeFlags&6&&(t.flags|=8192)):w_(t),n=t.updateQueue,n!==null&&R$(t,n.retryQueue),n=null,_!==null&&_.memoizedState!==null&&_.memoizedState.cachePool!==null&&(n=_.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),_!==null&&w(cn),null;case 24:return n=null,_!==null&&(n=_.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ce(et),w_(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function rA(_,t){switch(jl(t),t.tag){case 1:return _=t.flags,_&65536?(t.flags=_&-65537|128,t):null;case 3:return ce(et),q(),_=t.flags,(_&65536)!==0&&(_&128)===0?(t.flags=_&-65537|128,t):null;case 26:case 27:case 5:return F(t),null;case 13:if(Te(t),_=t.memoizedState,_!==null&&_.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Ui()}return _=t.flags,_&65536?(t.flags=_&-65537|128,t):null;case 19:return w(nt),null;case 4:return q(),null;case 10:return ce(t.type),null;case 22:case 23:return Te(t),as(),_!==null&&w(cn),_=t.flags,_&65536?(t.flags=_&-65537|128,t):null;case 24:return ce(et),null;case 25:return null;default:return null}}function Af(_,t){switch(jl(t),t.tag){case 3:ce(et),q();break;case 26:case 27:case 5:F(t);break;case 4:q();break;case 13:Te(t);break;case 19:w(nt);break;case 10:ce(t.type);break;case 22:case 23:Te(t),as(),_!==null&&w(cn);break;case 24:ce(et)}}function Ji(_,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&_)===_){i=void 0;var o=n.create,c=n.inst;i=o(),c.destroy=i}n=n.next}while(n!==l)}}catch(E){D_(t,t.return,E)}}function De(_,t,n){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var o=l.next;i=o;do{if((i.tag&_)===_){var c=i.inst,E=c.destroy;if(E!==void 0){c.destroy=void 0,l=t;var m=n,x=E;try{x()}catch(B){D_(l,m,B)}}}i=i.next}while(i!==o)}}catch(B){D_(t,t.return,B)}}function Lf(_){var t=_.updateQueue;if(t!==null){var n=_.stateNode;try{ac(t,n)}catch(i){D_(_,_.return,i)}}}function mf(_,t,n){n.props=Tn(_.type,_.memoizedProps),n.state=_.memoizedState;try{n.componentWillUnmount()}catch(i){D_(_,t,i)}}function _a(_,t){try{var n=_.ref;if(n!==null){switch(_.tag){case 26:case 27:case 5:var i=_.stateNode;break;case 30:i=_.stateNode;break;default:i=_.stateNode}typeof n=="function"?_.refCleanup=n(i):n.current=i}}catch(l){D_(_,t,l)}}function _e(_,t){var n=_.ref,i=_.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(l){D_(_,t,l)}finally{_.refCleanup=null,_=_.alternate,_!=null&&(_.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){D_(_,t,l)}else n.current=null}function If(_){var t=_.type,n=_.memoizedProps,i=_.stateNode;try{_:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break _;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(l){D_(_,_.return,l)}}function Ms(_,t,n){try{var i=_.stateNode;OA(i,_.type,n,t),i[Lt]=t}catch(l){D_(_,_.return,l)}}function pf(_){return _.tag===5||_.tag===3||_.tag===26||_.tag===27&&we(_.type)||_.tag===4}function Ds(_){_:for(;;){for(;_.sibling===null;){if(_.return===null||pf(_.return))return null;_=_.return}for(_.sibling.return=_.return,_=_.sibling;_.tag!==5&&_.tag!==6&&_.tag!==18;){if(_.tag===27&&we(_.type)||_.flags&2||_.child===null||_.tag===4)continue _;_.child.return=_,_=_.child}if(!(_.flags&2))return _.stateNode}}function Hs(_,t,n){var i=_.tag;if(i===5||i===6)_=_.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(_,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(_),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=U$));else if(i!==4&&(i===27&&we(_.type)&&(n=_.stateNode,t=null),_=_.child,_!==null))for(Hs(_,t,n),_=_.sibling;_!==null;)Hs(_,t,n),_=_.sibling}function g$(_,t,n){var i=_.tag;if(i===5||i===6)_=_.stateNode,t?n.insertBefore(_,t):n.appendChild(_);else if(i!==4&&(i===27&&we(_.type)&&(n=_.stateNode),_=_.child,_!==null))for(g$(_,t,n),_=_.sibling;_!==null;)g$(_,t,n),_=_.sibling}function yf(_){var t=_.stateNode,n=_.memoizedProps;try{for(var i=_.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);rt(t,i,n),t[ft]=_,t[Lt]=n}catch(o){D_(_,_.return,o)}}var Ee=!1,k_=!1,Us=!1,Rf=typeof WeakSet=="function"?WeakSet:Set,lt=null;function cA(_,t){if(_=_.containerInfo,$o=Y$,_=Dr(_),Dl(_)){if("selectionStart"in _)var n={start:_.selectionStart,end:_.selectionEnd};else _:{n=(n=_.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var l=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break _}var c=0,E=-1,m=-1,x=0,B=0,V=_,O=null;t:for(;;){for(var H;V!==n||l!==0&&V.nodeType!==3||(E=c+l),V!==o||i!==0&&V.nodeType!==3||(m=c+i),V.nodeType===3&&(c+=V.nodeValue.length),(H=V.firstChild)!==null;)O=V,V=H;for(;;){if(V===_)break t;if(O===n&&++x===l&&(E=c),O===o&&++B===i&&(m=c),(H=V.nextSibling)!==null)break;V=O,O=V.parentNode}V=H}n=E===-1||m===-1?null:{start:E,end:m}}else n=null}n=n||{start:0,end:0}}else n=null;for(lo={focusedElem:_,selectionRange:n},Y$=!1,lt=t;lt!==null;)if(t=lt,_=t.child,(t.subtreeFlags&1024)!==0&&_!==null)_.return=t,lt=_;else for(;lt!==null;){switch(t=lt,o=t.alternate,_=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((_&1024)!==0&&o!==null){_=void 0,n=t,l=o.memoizedProps,o=o.memoizedState,i=n.stateNode;try{var u_=Tn(n.type,l,n.elementType===n.type);_=i.getSnapshotBeforeUpdate(u_,o),i.__reactInternalSnapshotBeforeUpdate=_}catch(l_){D_(n,n.return,l_)}}break;case 3:if((_&1024)!==0){if(_=t.stateNode.containerInfo,n=_.nodeType,n===9)uo(_);else if(n===1)switch(_.nodeName){case"HEAD":case"HTML":case"BODY":uo(_);break;default:_.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((_&1024)!==0)throw Error(s(163))}if(_=t.sibling,_!==null){_.return=t.return,lt=_;break}lt=t.return}}function gf(_,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:He(_,n),i&4&&Ji(5,n);break;case 1:if(He(_,n),i&4)if(_=n.stateNode,t===null)try{_.componentDidMount()}catch(c){D_(n,n.return,c)}else{var l=Tn(n.type,t.memoizedProps);t=t.memoizedState;try{_.componentDidUpdate(l,t,_.__reactInternalSnapshotBeforeUpdate)}catch(c){D_(n,n.return,c)}}i&64&&Lf(n),i&512&&_a(n,n.return);break;case 3:if(He(_,n),i&64&&(_=n.updateQueue,_!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ac(_,t)}catch(c){D_(n,n.return,c)}}break;case 27:t===null&&i&4&&yf(n);case 26:case 5:He(_,n),t===null&&i&4&&If(n),i&512&&_a(n,n.return);break;case 12:He(_,n);break;case 13:He(_,n),i&4&&Nf(_,n),i&64&&(_=n.memoizedState,_!==null&&(_=_.dehydrated,_!==null&&(n=IA.bind(null,n),GA(_,n))));break;case 22:if(i=n.memoizedState!==null||Ee,!i){t=t!==null&&t.memoizedState!==null||k_,l=Ee;var o=k_;Ee=i,(k_=t)&&!o?Ue(_,n,(n.subtreeFlags&8772)!==0):He(_,n),Ee=l,k_=o}break;case 30:break;default:He(_,n)}}function Sf(_){var t=_.alternate;t!==null&&(_.alternate=null,Sf(t)),_.child=null,_.deletions=null,_.sibling=null,_.tag===5&&(t=_.stateNode,t!==null&&hl(t)),_.stateNode=null,_.return=null,_.dependencies=null,_.memoizedProps=null,_.memoizedState=null,_.pendingProps=null,_.stateNode=null,_.updateQueue=null}var V_=null,pt=!1;function Ae(_,t,n){for(n=n.child;n!==null;)vf(_,t,n),n=n.sibling}function vf(_,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Ii,n)}catch{}switch(n.tag){case 26:k_||_e(n,t),Ae(_,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:k_||_e(n,t);var i=V_,l=pt;we(n.type)&&(V_=n.stateNode,pt=!1),Ae(_,t,n),oa(n.stateNode),V_=i,pt=l;break;case 5:k_||_e(n,t);case 6:if(i=V_,l=pt,V_=null,Ae(_,t,n),V_=i,pt=l,V_!==null)if(pt)try{(V_.nodeType===9?V_.body:V_.nodeName==="HTML"?V_.ownerDocument.body:V_).removeChild(n.stateNode)}catch(o){D_(n,t,o)}else try{V_.removeChild(n.stateNode)}catch(o){D_(n,t,o)}break;case 18:V_!==null&&(pt?(_=V_,hT(_.nodeType===9?_.body:_.nodeName==="HTML"?_.ownerDocument.body:_,n.stateNode),Ea(_)):hT(V_,n.stateNode));break;case 4:i=V_,l=pt,V_=n.stateNode.containerInfo,pt=!0,Ae(_,t,n),V_=i,pt=l;break;case 0:case 11:case 14:case 15:k_||De(2,n,t),k_||De(4,n,t),Ae(_,t,n);break;case 1:k_||(_e(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&mf(n,t,i)),Ae(_,t,n);break;case 21:Ae(_,t,n);break;case 22:k_=(i=k_)||n.memoizedState!==null,Ae(_,t,n),k_=i;break;default:Ae(_,t,n)}}function Nf(_,t){if(t.memoizedState===null&&(_=t.alternate,_!==null&&(_=_.memoizedState,_!==null&&(_=_.dehydrated,_!==null))))try{Ea(_)}catch(n){D_(t,t.return,n)}}function fA(_){switch(_.tag){case 13:case 19:var t=_.stateNode;return t===null&&(t=_.stateNode=new Rf),t;case 22:return _=_.stateNode,t=_._retryCache,t===null&&(t=_._retryCache=new Rf),t;default:throw Error(s(435,_.tag))}}function Ps(_,t){var n=fA(_);t.forEach(function(i){var l=pA.bind(null,_,i);n.has(i)||(n.add(i),i.then(l,l))})}function Ct(_,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i],o=_,c=t,E=c;_:for(;E!==null;){switch(E.tag){case 27:if(we(E.type)){V_=E.stateNode,pt=!1;break _}break;case 5:V_=E.stateNode,pt=!1;break _;case 3:case 4:V_=E.stateNode.containerInfo,pt=!0;break _}E=E.return}if(V_===null)throw Error(s(160));vf(o,c,l),V_=null,pt=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Cf(t,_),t=t.sibling}var Kt=null;function Cf(_,t){var n=_.alternate,i=_.flags;switch(_.tag){case 0:case 11:case 14:case 15:Ct(t,_),xt(_),i&4&&(De(3,_,_.return),Ji(3,_),De(5,_,_.return));break;case 1:Ct(t,_),xt(_),i&512&&(k_||n===null||_e(n,n.return)),i&64&&Ee&&(_=_.updateQueue,_!==null&&(i=_.callbacks,i!==null&&(n=_.shared.hiddenCallbacks,_.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var l=Kt;if(Ct(t,_),xt(_),i&512&&(k_||n===null||_e(n,n.return)),i&4){var o=n!==null?n.memoizedState:null;if(i=_.memoizedState,n===null)if(i===null)if(_.stateNode===null){_:{i=_.type,n=_.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":o=l.getElementsByTagName("title")[0],(!o||o[Ri]||o[ft]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(i),l.head.insertBefore(o,l.querySelector("head > title"))),rt(o,i,n),o[ft]=_,at(o),i=o;break _;case"link":var c=yT("link","href",l).get(i+(n.href||""));if(c){for(var E=0;E<c.length;E++)if(o=c[E],o.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){c.splice(E,1);break t}}o=l.createElement(i),rt(o,i,n),l.head.appendChild(o);break;case"meta":if(c=yT("meta","content",l).get(i+(n.content||""))){for(E=0;E<c.length;E++)if(o=c[E],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){c.splice(E,1);break t}}o=l.createElement(i),rt(o,i,n),l.head.appendChild(o);break;default:throw Error(s(468,i))}o[ft]=_,at(o),i=o}_.stateNode=i}else RT(l,_.type,_.stateNode);else _.stateNode=pT(l,i,_.memoizedProps);else o!==i?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,i===null?RT(l,_.type,_.stateNode):pT(l,i,_.memoizedProps)):i===null&&_.stateNode!==null&&Ms(_,_.memoizedProps,n.memoizedProps)}break;case 27:Ct(t,_),xt(_),i&512&&(k_||n===null||_e(n,n.return)),n!==null&&i&4&&Ms(_,_.memoizedProps,n.memoizedProps);break;case 5:if(Ct(t,_),xt(_),i&512&&(k_||n===null||_e(n,n.return)),_.flags&32){l=_.stateNode;try{bn(l,"")}catch(H){D_(_,_.return,H)}}i&4&&_.stateNode!=null&&(l=_.memoizedProps,Ms(_,l,n!==null?n.memoizedProps:l)),i&1024&&(Us=!0);break;case 6:if(Ct(t,_),xt(_),i&4){if(_.stateNode===null)throw Error(s(162));i=_.memoizedProps,n=_.stateNode;try{n.nodeValue=i}catch(H){D_(_,_.return,H)}}break;case 3:if(V$=null,l=Kt,Kt=B$(t.containerInfo),Ct(t,_),Kt=l,xt(_),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ea(t.containerInfo)}catch(H){D_(_,_.return,H)}Us&&(Us=!1,xf(_));break;case 4:i=Kt,Kt=B$(_.stateNode.containerInfo),Ct(t,_),xt(_),Kt=i;break;case 12:Ct(t,_),xt(_);break;case 13:Ct(t,_),xt(_),_.child.flags&8192&&_.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ys=B_()),i&4&&(i=_.updateQueue,i!==null&&(_.updateQueue=null,Ps(_,i)));break;case 22:l=_.memoizedState!==null;var m=n!==null&&n.memoizedState!==null,x=Ee,B=k_;if(Ee=x||l,k_=B||m,Ct(t,_),k_=B,Ee=x,xt(_),i&8192)_:for(t=_.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||m||Ee||k_||hn(_)),n=null,t=_;;){if(t.tag===5||t.tag===26){if(n===null){m=n=t;try{if(o=m.stateNode,l)c=o.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{E=m.stateNode;var V=m.memoizedProps.style,O=V!=null&&V.hasOwnProperty("display")?V.display:null;E.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(H){D_(m,m.return,H)}}}else if(t.tag===6){if(n===null){m=t;try{m.stateNode.nodeValue=l?"":m.memoizedProps}catch(H){D_(m,m.return,H)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===_)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===_)break _;for(;t.sibling===null;){if(t.return===null||t.return===_)break _;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=_.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Ps(_,n))));break;case 19:Ct(t,_),xt(_),i&4&&(i=_.updateQueue,i!==null&&(_.updateQueue=null,Ps(_,i)));break;case 30:break;case 21:break;default:Ct(t,_),xt(_)}}function xt(_){var t=_.flags;if(t&2){try{for(var n,i=_.return;i!==null;){if(pf(i)){n=i;break}i=i.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var l=n.stateNode,o=Ds(_);g$(_,o,l);break;case 5:var c=n.stateNode;n.flags&32&&(bn(c,""),n.flags&=-33);var E=Ds(_);g$(_,E,c);break;case 3:case 4:var m=n.stateNode.containerInfo,x=Ds(_);Hs(_,x,m);break;default:throw Error(s(161))}}catch(B){D_(_,_.return,B)}_.flags&=-3}t&4096&&(_.flags&=-4097)}function xf(_){if(_.subtreeFlags&1024)for(_=_.child;_!==null;){var t=_;xf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),_=_.sibling}}function He(_,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)gf(_,t.alternate,t),t=t.sibling}function hn(_){for(_=_.child;_!==null;){var t=_;switch(t.tag){case 0:case 11:case 14:case 15:De(4,t,t.return),hn(t);break;case 1:_e(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&mf(t,t.return,n),hn(t);break;case 27:oa(t.stateNode);case 26:case 5:_e(t,t.return),hn(t);break;case 22:t.memoizedState===null&&hn(t);break;case 30:hn(t);break;default:hn(t)}_=_.sibling}}function Ue(_,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=_,o=t,c=o.flags;switch(o.tag){case 0:case 11:case 15:Ue(l,o,n),Ji(4,o);break;case 1:if(Ue(l,o,n),i=o,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(x){D_(i,i.return,x)}if(i=o,l=i.updateQueue,l!==null){var E=i.stateNode;try{var m=l.shared.hiddenCallbacks;if(m!==null)for(l.shared.hiddenCallbacks=null,l=0;l<m.length;l++)ic(m[l],E)}catch(x){D_(i,i.return,x)}}n&&c&64&&Lf(o),_a(o,o.return);break;case 27:yf(o);case 26:case 5:Ue(l,o,n),n&&i===null&&c&4&&If(o),_a(o,o.return);break;case 12:Ue(l,o,n);break;case 13:Ue(l,o,n),n&&c&4&&Nf(l,o);break;case 22:o.memoizedState===null&&Ue(l,o,n),_a(o,o.return);break;case 30:break;default:Ue(l,o,n)}t=t.sibling}}function Bs(_,t){var n=null;_!==null&&_.memoizedState!==null&&_.memoizedState.cachePool!==null&&(n=_.memoizedState.cachePool.pool),_=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(_=t.memoizedState.cachePool.pool),_!==n&&(_!=null&&_.refCount++,n!=null&&Gi(n))}function Gs(_,t){_=null,t.alternate!==null&&(_=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==_&&(t.refCount++,_!=null&&Gi(_))}function te(_,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)bf(_,t,n,i),t=t.sibling}function bf(_,t,n,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:te(_,t,n,i),l&2048&&Ji(9,t);break;case 1:te(_,t,n,i);break;case 3:te(_,t,n,i),l&2048&&(_=null,t.alternate!==null&&(_=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==_&&(t.refCount++,_!=null&&Gi(_)));break;case 12:if(l&2048){te(_,t,n,i),_=t.stateNode;try{var o=t.memoizedProps,c=o.id,E=o.onPostCommit;typeof E=="function"&&E(c,t.alternate===null?"mount":"update",_.passiveEffectDuration,-0)}catch(m){D_(t,t.return,m)}}else te(_,t,n,i);break;case 13:te(_,t,n,i);break;case 23:break;case 22:o=t.stateNode,c=t.alternate,t.memoizedState!==null?o._visibility&2?te(_,t,n,i):ta(_,t):o._visibility&2?te(_,t,n,i):(o._visibility|=2,kn(_,t,n,i,(t.subtreeFlags&10256)!==0)),l&2048&&Bs(c,t);break;case 24:te(_,t,n,i),l&2048&&Gs(t.alternate,t);break;default:te(_,t,n,i)}}function kn(_,t,n,i,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var o=_,c=t,E=n,m=i,x=c.flags;switch(c.tag){case 0:case 11:case 15:kn(o,c,E,m,l),Ji(8,c);break;case 23:break;case 22:var B=c.stateNode;c.memoizedState!==null?B._visibility&2?kn(o,c,E,m,l):ta(o,c):(B._visibility|=2,kn(o,c,E,m,l)),l&&x&2048&&Bs(c.alternate,c);break;case 24:kn(o,c,E,m,l),l&&x&2048&&Gs(c.alternate,c);break;default:kn(o,c,E,m,l)}t=t.sibling}}function ta(_,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=_,i=t,l=i.flags;switch(i.tag){case 22:ta(n,i),l&2048&&Bs(i.alternate,i);break;case 24:ta(n,i),l&2048&&Gs(i.alternate,i);break;default:ta(n,i)}t=t.sibling}}var ea=8192;function Qn(_){if(_.subtreeFlags&ea)for(_=_.child;_!==null;)Of(_),_=_.sibling}function Of(_){switch(_.tag){case 26:Qn(_),_.flags&ea&&_.memoizedState!==null&&ZA(Kt,_.memoizedState,_.memoizedProps);break;case 5:Qn(_);break;case 3:case 4:var t=Kt;Kt=B$(_.stateNode.containerInfo),Qn(_),Kt=t;break;case 22:_.memoizedState===null&&(t=_.alternate,t!==null&&t.memoizedState!==null?(t=ea,ea=16777216,Qn(_),ea=t):Qn(_));break;default:Qn(_)}}function Mf(_){var t=_.alternate;if(t!==null&&(_=t.child,_!==null)){t.child=null;do t=_.sibling,_.sibling=null,_=t;while(_!==null)}}function na(_){var t=_.deletions;if((_.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];lt=i,Hf(i,_)}Mf(_)}if(_.subtreeFlags&10256)for(_=_.child;_!==null;)Df(_),_=_.sibling}function Df(_){switch(_.tag){case 0:case 11:case 15:na(_),_.flags&2048&&De(9,_,_.return);break;case 3:na(_);break;case 12:na(_);break;case 22:var t=_.stateNode;_.memoizedState!==null&&t._visibility&2&&(_.return===null||_.return.tag!==13)?(t._visibility&=-3,S$(_)):na(_);break;default:na(_)}}function S$(_){var t=_.deletions;if((_.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];lt=i,Hf(i,_)}Mf(_)}for(_=_.child;_!==null;){switch(t=_,t.tag){case 0:case 11:case 15:De(8,t,t.return),S$(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,S$(t));break;default:S$(t)}_=_.sibling}}function Hf(_,t){for(;lt!==null;){var n=lt;switch(n.tag){case 0:case 11:case 15:De(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Gi(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,lt=i;else _:for(n=_;lt!==null;){i=lt;var l=i.sibling,o=i.return;if(Sf(i),i===n){lt=null;break _}if(l!==null){l.return=o,lt=l;break _}lt=o}}}var TA={getCacheForType:function(_){var t=Tt(et),n=t.data.get(_);return n===void 0&&(n=_(),t.data.set(_,n)),n}},hA=typeof WeakMap=="function"?WeakMap:Map,v_=0,U_=null,E_=null,L_=0,N_=0,bt=null,Pe=!1,Zn=!1,Vs=!1,Le=0,z_=0,Be=0,dn=0,Ws=0,wt=0,Jn=0,ia=null,yt=null,ws=!1,Ys=0,v$=1/0,N$=null,Ge=null,ut=0,Ve=null,_i=null,ti=0,Fs=0,js=null,Uf=null,aa=0,zs=null;function Ot(){if((v_&2)!==0&&L_!==0)return L_&-L_;if(P.T!==null){var _=wn;return _!==0?_:Js()}return Qu()}function Pf(){wt===0&&(wt=(L_&536870912)===0||g_?Xu():536870912);var _=Wt.current;return _!==null&&(_.flags|=32),wt}function Mt(_,t,n){(_===U_&&(N_===2||N_===9)||_.cancelPendingCommit!==null)&&(ei(_,0),We(_,L_,wt,!1)),yi(_,n),((v_&2)===0||_!==U_)&&(_===U_&&((v_&2)===0&&(dn|=n),z_===4&&We(_,L_,wt,!1)),ee(_))}function Bf(_,t,n){if((v_&6)!==0)throw Error(s(327));var i=!n&&(t&124)===0&&(t&_.expiredLanes)===0||pi(_,t),l=i?AA(_,t):qs(_,t,!0),o=i;do{if(l===0){Zn&&!i&&We(_,t,0,!1);break}else{if(n=_.current.alternate,o&&!dA(n)){l=qs(_,t,!1),o=!1;continue}if(l===2){if(o=t,_.errorRecoveryDisabledLanes&o)var c=0;else c=_.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;_:{var E=_;l=ia;var m=E.current.memoizedState.isDehydrated;if(m&&(ei(E,c).flags|=256),c=qs(E,c,!1),c!==2){if(Vs&&!m){E.errorRecoveryDisabledLanes|=o,dn|=o,l=4;break _}o=yt,yt=l,o!==null&&(yt===null?yt=o:yt.push.apply(yt,o))}l=c}if(o=!1,l!==2)continue}}if(l===1){ei(_,0),We(_,t,0,!0);break}_:{switch(i=_,o=l,o){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:We(i,t,wt,!Pe);break _;case 2:yt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=Ys+300-B_(),10<l)){if(We(i,t,wt,!Pe),Ga(i,0,!0)!==0)break _;i.timeoutHandle=fT(Gf.bind(null,i,n,yt,N$,ws,t,wt,dn,Jn,Pe,o,2,-0,0),l);break _}Gf(i,n,yt,N$,ws,t,wt,dn,Jn,Pe,o,0,-0,0)}}break}while(!0);ee(_)}function Gf(_,t,n,i,l,o,c,E,m,x,B,V,O,H){if(_.timeoutHandle=-1,V=t.subtreeFlags,(V&8192||(V&16785408)===16785408)&&(ca={stylesheets:null,count:0,unsuspend:QA},Of(t),V=JA(),V!==null)){_.cancelPendingCommit=V(zf.bind(null,_,t,o,n,i,l,c,E,m,B,1,O,H)),We(_,o,c,!x);return}zf(_,t,o,n,i,l,c,E,m)}function dA(_){for(var t=_;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var l=n[i],o=l.getSnapshot;l=l.value;try{if(!vt(o(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===_)break;for(;t.sibling===null;){if(t.return===null||t.return===_)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function We(_,t,n,i){t&=~Ws,t&=~dn,_.suspendedLanes|=t,_.pingedLanes&=~t,i&&(_.warmLanes|=t),i=_.expirationTimes;for(var l=t;0<l;){var o=31-St(l),c=1<<o;i[o]=-1,l&=~c}n!==0&&qu(_,n,t)}function C$(){return(v_&6)===0?($a(0),!1):!0}function Xs(){if(E_!==null){if(N_===0)var _=E_.return;else _=E_,re=un=null,us(_),Kn=null,ki=0,_=E_;for(;_!==null;)Af(_.alternate,_),_=_.return;E_=null}}function ei(_,t){var n=_.timeoutHandle;n!==-1&&(_.timeoutHandle=-1,DA(n)),n=_.cancelPendingCommit,n!==null&&(_.cancelPendingCommit=null,n()),Xs(),U_=_,E_=n=se(_.current,null),L_=t,N_=0,bt=null,Pe=!1,Zn=pi(_,t),Vs=!1,Jn=wt=Ws=dn=Be=z_=0,yt=ia=null,ws=!1,(t&8)!==0&&(t|=t&32);var i=_.entangledLanes;if(i!==0)for(_=_.entanglements,i&=t;0<i;){var l=31-St(i),o=1<<l;t|=_[l],i&=~o}return Le=t,Qa(),n}function Vf(_,t){h_=null,P.H=d$,t===Wi||t===$$?(t=ec(),N_=3):t===Jr?(t=ec(),N_=4):N_=t===nf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,bt=t,E_===null&&(z_=1,I$(_,Pt(t,_.current)))}function Wf(){var _=P.H;return P.H=d$,_===null?d$:_}function wf(){var _=P.A;return P.A=TA,_}function Ks(){z_=4,Pe||(L_&4194048)!==L_&&Wt.current!==null||(Zn=!0),(Be&134217727)===0&&(dn&134217727)===0||U_===null||We(U_,L_,wt,!1)}function qs(_,t,n){var i=v_;v_|=2;var l=Wf(),o=wf();(U_!==_||L_!==t)&&(N$=null,ei(_,t)),t=!1;var c=z_;_:do try{if(N_!==0&&E_!==null){var E=E_,m=bt;switch(N_){case 8:Xs(),c=6;break _;case 3:case 2:case 9:case 6:Wt.current===null&&(t=!0);var x=N_;if(N_=0,bt=null,ni(_,E,m,x),n&&Zn){c=0;break _}break;default:x=N_,N_=0,bt=null,ni(_,E,m,x)}}EA(),c=z_;break}catch(B){Vf(_,B)}while(!0);return t&&_.shellSuspendCounter++,re=un=null,v_=i,P.H=l,P.A=o,E_===null&&(U_=null,L_=0,Qa()),c}function EA(){for(;E_!==null;)Yf(E_)}function AA(_,t){var n=v_;v_|=2;var i=Wf(),l=wf();U_!==_||L_!==t?(N$=null,v$=B_()+500,ei(_,t)):Zn=pi(_,t);_:do try{if(N_!==0&&E_!==null){t=E_;var o=bt;t:switch(N_){case 1:N_=0,bt=null,ni(_,t,o,1);break;case 2:case 9:if(_c(o)){N_=0,bt=null,Ff(t);break}t=function(){N_!==2&&N_!==9||U_!==_||(N_=7),ee(_)},o.then(t,t);break _;case 3:N_=7;break _;case 4:N_=5;break _;case 7:_c(o)?(N_=0,bt=null,Ff(t)):(N_=0,bt=null,ni(_,t,o,7));break;case 5:var c=null;switch(E_.tag){case 26:c=E_.memoizedState;case 5:case 27:var E=E_;if(!c||gT(c)){N_=0,bt=null;var m=E.sibling;if(m!==null)E_=m;else{var x=E.return;x!==null?(E_=x,x$(x)):E_=null}break t}}N_=0,bt=null,ni(_,t,o,5);break;case 6:N_=0,bt=null,ni(_,t,o,6);break;case 8:Xs(),z_=6;break _;default:throw Error(s(462))}}LA();break}catch(B){Vf(_,B)}while(!0);return re=un=null,P.H=i,P.A=l,v_=n,E_!==null?0:(U_=null,L_=0,Qa(),z_)}function LA(){for(;E_!==null&&!S_();)Yf(E_)}function Yf(_){var t=df(_.alternate,_,Le);_.memoizedProps=_.pendingProps,t===null?x$(_):E_=t}function Ff(_){var t=_,n=t.alternate;switch(t.tag){case 15:case 0:t=uf(n,t,t.pendingProps,t.type,void 0,L_);break;case 11:t=uf(n,t,t.pendingProps,t.type.render,t.ref,L_);break;case 5:us(t);default:Af(n,t),t=E_=Fr(t,Le),t=df(n,t,Le)}_.memoizedProps=_.pendingProps,t===null?x$(_):E_=t}function ni(_,t,n,i){re=un=null,us(t),Kn=null,ki=0;var l=t.return;try{if(sA(_,l,t,n,L_)){z_=1,I$(_,Pt(n,_.current)),E_=null;return}}catch(o){if(l!==null)throw E_=l,o;z_=1,I$(_,Pt(n,_.current)),E_=null;return}t.flags&32768?(g_||i===1?_=!0:Zn||(L_&536870912)!==0?_=!1:(Pe=_=!0,(i===2||i===9||i===3||i===6)&&(i=Wt.current,i!==null&&i.tag===13&&(i.flags|=16384))),jf(t,_)):x$(t)}function x$(_){var t=_;do{if((t.flags&32768)!==0){jf(t,Pe);return}_=t.return;var n=uA(t.alternate,t,Le);if(n!==null){E_=n;return}if(t=t.sibling,t!==null){E_=t;return}E_=t=_}while(t!==null);z_===0&&(z_=5)}function jf(_,t){do{var n=rA(_.alternate,_);if(n!==null){n.flags&=32767,E_=n;return}if(n=_.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(_=_.sibling,_!==null)){E_=_;return}E_=_=n}while(_!==null);z_=6,E_=null}function zf(_,t,n,i,l,o,c,E,m){_.cancelPendingCommit=null;do b$();while(ut!==0);if((v_&6)!==0)throw Error(s(327));if(t!==null){if(t===_.current)throw Error(s(177));if(o=t.lanes|t.childLanes,o|=Gl,Q0(_,n,o,c,E,m),_===U_&&(E_=U_=null,L_=0),_i=t,Ve=_,ti=n,Fs=o,js=l,Uf=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(_.callbackNode=null,_.callbackPriority=0,yA(F_,function(){return Qf(),null})):(_.callbackNode=null,_.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=P.T,P.T=null,l=z.p,z.p=2,c=v_,v_|=4;try{cA(_,t,n)}finally{v_=c,z.p=l,P.T=i}}ut=1,Xf(),Kf(),qf()}}function Xf(){if(ut===1){ut=0;var _=Ve,t=_i,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=P.T,P.T=null;var i=z.p;z.p=2;var l=v_;v_|=4;try{Cf(t,_);var o=lo,c=Dr(_.containerInfo),E=o.focusedElem,m=o.selectionRange;if(c!==E&&E&&E.ownerDocument&&Mr(E.ownerDocument.documentElement,E)){if(m!==null&&Dl(E)){var x=m.start,B=m.end;if(B===void 0&&(B=x),"selectionStart"in E)E.selectionStart=x,E.selectionEnd=Math.min(B,E.value.length);else{var V=E.ownerDocument||document,O=V&&V.defaultView||window;if(O.getSelection){var H=O.getSelection(),u_=E.textContent.length,l_=Math.min(m.start,u_),O_=m.end===void 0?l_:Math.min(m.end,u_);!H.extend&&l_>O_&&(c=O_,O_=l_,l_=c);var N=Or(E,l_),R=Or(E,O_);if(N&&R&&(H.rangeCount!==1||H.anchorNode!==N.node||H.anchorOffset!==N.offset||H.focusNode!==R.node||H.focusOffset!==R.offset)){var C=V.createRange();C.setStart(N.node,N.offset),H.removeAllRanges(),l_>O_?(H.addRange(C),H.extend(R.node,R.offset)):(C.setEnd(R.node,R.offset),H.addRange(C))}}}}for(V=[],H=E;H=H.parentNode;)H.nodeType===1&&V.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<V.length;E++){var G=V[E];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}Y$=!!$o,lo=$o=null}finally{v_=l,z.p=i,P.T=n}}_.current=t,ut=2}}function Kf(){if(ut===2){ut=0;var _=Ve,t=_i,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=P.T,P.T=null;var i=z.p;z.p=2;var l=v_;v_|=4;try{gf(_,t.alternate,t)}finally{v_=l,z.p=i,P.T=n}}ut=3}}function qf(){if(ut===4||ut===3){ut=0,C_();var _=Ve,t=_i,n=ti,i=Uf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ut=5:(ut=0,_i=Ve=null,kf(_,_.pendingLanes));var l=_.pendingLanes;if(l===0&&(Ge=null),fl(n),t=t.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Ii,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=P.T,l=z.p,z.p=2,P.T=null;try{for(var o=_.onRecoverableError,c=0;c<i.length;c++){var E=i[c];o(E.value,{componentStack:E.stack})}}finally{P.T=t,z.p=l}}(ti&3)!==0&&b$(),ee(_),l=_.pendingLanes,(n&4194090)!==0&&(l&42)!==0?_===zs?aa++:(aa=0,zs=_):aa=0,$a(0)}}function kf(_,t){(_.pooledCacheLanes&=t)===0&&(t=_.pooledCache,t!=null&&(_.pooledCache=null,Gi(t)))}function b$(_){return Xf(),Kf(),qf(),Qf()}function Qf(){if(ut!==5)return!1;var _=Ve,t=Fs;Fs=0;var n=fl(ti),i=P.T,l=z.p;try{z.p=32>n?32:n,P.T=null,n=js,js=null;var o=Ve,c=ti;if(ut=0,_i=Ve=null,ti=0,(v_&6)!==0)throw Error(s(331));var E=v_;if(v_|=4,Df(o.current),bf(o,o.current,c,n),v_=E,$a(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Ii,o)}catch{}return!0}finally{z.p=l,P.T=i,kf(_,t)}}function Zf(_,t,n){t=Pt(n,t),t=Rs(_.stateNode,t,2),_=xe(_,t,2),_!==null&&(yi(_,2),ee(_))}function D_(_,t,n){if(_.tag===3)Zf(_,_,n);else for(;t!==null;){if(t.tag===3){Zf(t,_,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ge===null||!Ge.has(i))){_=Pt(n,_),n=tf(2),i=xe(t,n,2),i!==null&&(ef(n,i,t,_),yi(i,2),ee(i));break}}t=t.return}}function ks(_,t,n){var i=_.pingCache;if(i===null){i=_.pingCache=new hA;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(n)||(Vs=!0,l.add(n),_=mA.bind(null,_,t,n),t.then(_,_))}function mA(_,t,n){var i=_.pingCache;i!==null&&i.delete(t),_.pingedLanes|=_.suspendedLanes&n,_.warmLanes&=~n,U_===_&&(L_&n)===n&&(z_===4||z_===3&&(L_&62914560)===L_&&300>B_()-Ys?(v_&2)===0&&ei(_,0):Ws|=n,Jn===L_&&(Jn=0)),ee(_)}function Jf(_,t){t===0&&(t=Ku()),_=Bn(_,t),_!==null&&(yi(_,t),ee(_))}function IA(_){var t=_.memoizedState,n=0;t!==null&&(n=t.retryLane),Jf(_,n)}function pA(_,t){var n=0;switch(_.tag){case 13:var i=_.stateNode,l=_.memoizedState;l!==null&&(n=l.retryLane);break;case 19:i=_.stateNode;break;case 22:i=_.stateNode._retryCache;break;default:throw Error(s(314))}i!==null&&i.delete(t),Jf(_,n)}function yA(_,t){return I_(_,t)}var O$=null,ii=null,Qs=!1,M$=!1,Zs=!1,En=0;function ee(_){_!==ii&&_.next===null&&(ii===null?O$=ii=_:ii=ii.next=_),M$=!0,Qs||(Qs=!0,gA())}function $a(_,t){if(!Zs&&M$){Zs=!0;do for(var n=!1,i=O$;i!==null;){if(_!==0){var l=i.pendingLanes;if(l===0)var o=0;else{var c=i.suspendedLanes,E=i.pingedLanes;o=(1<<31-St(42|_)+1)-1,o&=l&~(c&~E),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,nT(i,o))}else o=L_,o=Ga(i,i===U_?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(o&3)===0||pi(i,o)||(n=!0,nT(i,o));i=i.next}while(n);Zs=!1}}function RA(){_T()}function _T(){M$=Qs=!1;var _=0;En!==0&&(MA()&&(_=En),En=0);for(var t=B_(),n=null,i=O$;i!==null;){var l=i.next,o=tT(i,t);o===0?(i.next=null,n===null?O$=l:n.next=l,l===null&&(ii=n)):(n=i,(_!==0||(o&3)!==0)&&(M$=!0)),i=l}$a(_)}function tT(_,t){for(var n=_.suspendedLanes,i=_.pingedLanes,l=_.expirationTimes,o=_.pendingLanes&-62914561;0<o;){var c=31-St(o),E=1<<c,m=l[c];m===-1?((E&n)===0||(E&i)!==0)&&(l[c]=k0(E,t)):m<=t&&(_.expiredLanes|=E),o&=~E}if(t=U_,n=L_,n=Ga(_,_===t?n:0,_.cancelPendingCommit!==null||_.timeoutHandle!==-1),i=_.callbackNode,n===0||_===t&&(N_===2||N_===9)||_.cancelPendingCommit!==null)return i!==null&&i!==null&&R_(i),_.callbackNode=null,_.callbackPriority=0;if((n&3)===0||pi(_,n)){if(t=n&-n,t===_.callbackPriority)return t;switch(i!==null&&R_(i),fl(n)){case 2:case 8:n=G_;break;case 32:n=F_;break;case 268435456:n=mi;break;default:n=F_}return i=eT.bind(null,_),n=I_(n,i),_.callbackPriority=t,_.callbackNode=n,t}return i!==null&&i!==null&&R_(i),_.callbackPriority=2,_.callbackNode=null,2}function eT(_,t){if(ut!==0&&ut!==5)return _.callbackNode=null,_.callbackPriority=0,null;var n=_.callbackNode;if(b$()&&_.callbackNode!==n)return null;var i=L_;return i=Ga(_,_===U_?i:0,_.cancelPendingCommit!==null||_.timeoutHandle!==-1),i===0?null:(Bf(_,i,t),tT(_,B_()),_.callbackNode!=null&&_.callbackNode===n?eT.bind(null,_):null)}function nT(_,t){if(b$())return null;Bf(_,t,!0)}function gA(){HA(function(){(v_&6)!==0?I_(Ze,RA):_T()})}function Js(){return En===0&&(En=Xu()),En}function iT(_){return _==null||typeof _=="symbol"||typeof _=="boolean"?null:typeof _=="function"?_:Fa(""+_)}function aT(_,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,_.id&&n.setAttribute("form",_.id),t.parentNode.insertBefore(n,t),_=new FormData(_),n.parentNode.removeChild(n),_}function SA(_,t,n,i,l){if(t==="submit"&&n&&n.stateNode===l){var o=iT((l[Lt]||null).action),c=i.submitter;c&&(t=(t=c[Lt]||null)?iT(t.formAction):c.getAttribute("formAction"),t!==null&&(o=t,c=null));var E=new Ka("action","action",null,i,l);_.push({event:E,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(En!==0){var m=c?aT(l,c):new FormData(l);Ls(n,{pending:!0,data:m,method:l.method,action:o},null,m)}}else typeof o=="function"&&(E.preventDefault(),m=c?aT(l,c):new FormData(l),Ls(n,{pending:!0,data:m,method:l.method,action:o},o,m))},currentTarget:l}]})}}for(var _o=0;_o<Bl.length;_o++){var to=Bl[_o],vA=to.toLowerCase(),NA=to[0].toUpperCase()+to.slice(1);Xt(vA,"on"+NA)}Xt(Pr,"onAnimationEnd"),Xt(Br,"onAnimationIteration"),Xt(Gr,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(jE,"onTransitionRun"),Xt(zE,"onTransitionStart"),Xt(XE,"onTransitionCancel"),Xt(Vr,"onTransitionEnd"),Nn("onMouseEnter",["mouseout","mouseover"]),Nn("onMouseLeave",["mouseout","mouseover"]),Nn("onPointerEnter",["pointerout","pointerover"]),Nn("onPointerLeave",["pointerout","pointerover"]),_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_n("onBeforeInput",["compositionend","keypress","textInput","paste"]),_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(la));function $T(_,t){t=(t&4)!==0;for(var n=0;n<_.length;n++){var i=_[n],l=i.event;i=i.listeners;_:{var o=void 0;if(t)for(var c=i.length-1;0<=c;c--){var E=i[c],m=E.instance,x=E.currentTarget;if(E=E.listener,m!==o&&l.isPropagationStopped())break _;o=E,l.currentTarget=x;try{o(l)}catch(B){m$(B)}l.currentTarget=null,o=m}else for(c=0;c<i.length;c++){if(E=i[c],m=E.instance,x=E.currentTarget,E=E.listener,m!==o&&l.isPropagationStopped())break _;o=E,l.currentTarget=x;try{o(l)}catch(B){m$(B)}l.currentTarget=null,o=m}}}}function A_(_,t){var n=t[Tl];n===void 0&&(n=t[Tl]=new Set);var i=_+"__bubble";n.has(i)||(lT(t,_,2,!1),n.add(i))}function eo(_,t,n){var i=0;t&&(i|=4),lT(n,_,i,t)}var D$="_reactListening"+Math.random().toString(36).slice(2);function no(_){if(!_[D$]){_[D$]=!0,Ju.forEach(function(n){n!=="selectionchange"&&(CA.has(n)||eo(n,!1,_),eo(n,!0,_))});var t=_.nodeType===9?_:_.ownerDocument;t===null||t[D$]||(t[D$]=!0,eo("selectionchange",!1,t))}}function lT(_,t,n,i){switch(bT(t)){case 2:var l=eL;break;case 8:l=nL;break;default:l=Ao}n=l.bind(null,t,n,_),l=void 0,!gl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?_.addEventListener(t,n,{capture:!0,passive:l}):_.addEventListener(t,n,!0):l!==void 0?_.addEventListener(t,n,{passive:l}):_.addEventListener(t,n,!1)}function io(_,t,n,i,l){var o=i;if((t&1)===0&&(t&2)===0&&i!==null)_:for(;;){if(i===null)return;var c=i.tag;if(c===3||c===4){var E=i.stateNode.containerInfo;if(E===l)break;if(c===4)for(c=i.return;c!==null;){var m=c.tag;if((m===3||m===4)&&c.stateNode.containerInfo===l)return;c=c.return}for(;E!==null;){if(c=gn(E),c===null)return;if(m=c.tag,m===5||m===6||m===26||m===27){i=o=c;continue _}E=E.parentNode}}i=i.return}fr(function(){var x=o,B=yl(n),V=[];_:{var O=Wr.get(_);if(O!==void 0){var H=Ka,u_=_;switch(_){case"keypress":if(za(n)===0)break _;case"keydown":case"keyup":H=yE;break;case"focusin":u_="focus",H=Cl;break;case"focusout":u_="blur",H=Cl;break;case"beforeblur":case"afterblur":H=Cl;break;case"click":if(n.button===2)break _;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=dr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=rE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=SE;break;case Pr:case Br:case Gr:H=TE;break;case Vr:H=NE;break;case"scroll":case"scrollend":H=oE;break;case"wheel":H=xE;break;case"copy":case"cut":case"paste":H=dE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Ar;break;case"toggle":case"beforetoggle":H=OE}var l_=(t&4)!==0,O_=!l_&&(_==="scroll"||_==="scrollend"),N=l_?O!==null?O+"Capture":null:O;l_=[];for(var R=x,C;R!==null;){var G=R;if(C=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||C===null||N===null||(G=Si(R,N),G!=null&&l_.push(sa(R,G,C))),O_)break;R=R.return}0<l_.length&&(O=new H(O,u_,null,n,B),V.push({event:O,listeners:l_}))}}if((t&7)===0){_:{if(O=_==="mouseover"||_==="pointerover",H=_==="mouseout"||_==="pointerout",O&&n!==pl&&(u_=n.relatedTarget||n.fromElement)&&(gn(u_)||u_[Rn]))break _;if((H||O)&&(O=B.window===B?B:(O=B.ownerDocument)?O.defaultView||O.parentWindow:window,H?(u_=n.relatedTarget||n.toElement,H=x,u_=u_?gn(u_):null,u_!==null&&(O_=f(u_),l_=u_.tag,u_!==O_||l_!==5&&l_!==27&&l_!==6)&&(u_=null)):(H=null,u_=x),H!==u_)){if(l_=dr,G="onMouseLeave",N="onMouseEnter",R="mouse",(_==="pointerout"||_==="pointerover")&&(l_=Ar,G="onPointerLeave",N="onPointerEnter",R="pointer"),O_=H==null?O:gi(H),C=u_==null?O:gi(u_),O=new l_(G,R+"leave",H,n,B),O.target=O_,O.relatedTarget=C,G=null,gn(B)===x&&(l_=new l_(N,R+"enter",u_,n,B),l_.target=C,l_.relatedTarget=O_,G=l_),O_=G,H&&u_)t:{for(l_=H,N=u_,R=0,C=l_;C;C=ai(C))R++;for(C=0,G=N;G;G=ai(G))C++;for(;0<R-C;)l_=ai(l_),R--;for(;0<C-R;)N=ai(N),C--;for(;R--;){if(l_===N||N!==null&&l_===N.alternate)break t;l_=ai(l_),N=ai(N)}l_=null}else l_=null;H!==null&&sT(V,O,H,l_,!1),u_!==null&&O_!==null&&sT(V,O_,u_,l_,!0)}}_:{if(O=x?gi(x):window,H=O.nodeName&&O.nodeName.toLowerCase(),H==="select"||H==="input"&&O.type==="file")var e_=Sr;else if(Rr(O))if(vr)e_=wE;else{e_=VE;var d_=GE}else H=O.nodeName,!H||H.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?x&&Il(x.elementType)&&(e_=Sr):e_=WE;if(e_&&(e_=e_(_,x))){gr(V,e_,n,B);break _}d_&&d_(_,O,x),_==="focusout"&&x&&O.type==="number"&&x.memoizedProps.value!=null&&ml(O,"number",O.value)}switch(d_=x?gi(x):window,_){case"focusin":(Rr(d_)||d_.contentEditable==="true")&&(Hn=d_,Hl=x,Di=null);break;case"focusout":Di=Hl=Hn=null;break;case"mousedown":Ul=!0;break;case"contextmenu":case"mouseup":case"dragend":Ul=!1,Hr(V,n,B);break;case"selectionchange":if(FE)break;case"keydown":case"keyup":Hr(V,n,B)}var a_;if(bl)_:{switch(_){case"compositionstart":var s_="onCompositionStart";break _;case"compositionend":s_="onCompositionEnd";break _;case"compositionupdate":s_="onCompositionUpdate";break _}s_=void 0}else Dn?pr(_,n)&&(s_="onCompositionEnd"):_==="keydown"&&n.keyCode===229&&(s_="onCompositionStart");s_&&(Lr&&n.locale!=="ko"&&(Dn||s_!=="onCompositionStart"?s_==="onCompositionEnd"&&Dn&&(a_=Tr()):(Se=B,Sl="value"in Se?Se.value:Se.textContent,Dn=!0)),d_=H$(x,s_),0<d_.length&&(s_=new Er(s_,_,null,n,B),V.push({event:s_,listeners:d_}),a_?s_.data=a_:(a_=yr(n),a_!==null&&(s_.data=a_)))),(a_=DE?HE(_,n):UE(_,n))&&(s_=H$(x,"onBeforeInput"),0<s_.length&&(d_=new Er("onBeforeInput","beforeinput",null,n,B),V.push({event:d_,listeners:s_}),d_.data=a_)),SA(V,_,x,n,B)}$T(V,t)})}function sa(_,t,n){return{instance:_,listener:t,currentTarget:n}}function H$(_,t){for(var n=t+"Capture",i=[];_!==null;){var l=_,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=Si(_,n),l!=null&&i.unshift(sa(_,l,o)),l=Si(_,t),l!=null&&i.push(sa(_,l,o))),_.tag===3)return i;_=_.return}return[]}function ai(_){if(_===null)return null;do _=_.return;while(_&&_.tag!==5&&_.tag!==27);return _||null}function sT(_,t,n,i,l){for(var o=t._reactName,c=[];n!==null&&n!==i;){var E=n,m=E.alternate,x=E.stateNode;if(E=E.tag,m!==null&&m===i)break;E!==5&&E!==26&&E!==27||x===null||(m=x,l?(x=Si(n,o),x!=null&&c.unshift(sa(n,x,m))):l||(x=Si(n,o),x!=null&&c.push(sa(n,x,m)))),n=n.return}c.length!==0&&_.push({event:t,listeners:c})}var xA=/\r\n?/g,bA=/\u0000|\uFFFD/g;function oT(_){return(typeof _=="string"?_:""+_).replace(xA,`
`).replace(bA,"")}function uT(_,t){return t=oT(t),oT(_)===t}function U$(){}function b_(_,t,n,i,l,o){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||bn(_,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&bn(_,""+i);break;case"className":Wa(_,"class",i);break;case"tabIndex":Wa(_,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Wa(_,n,i);break;case"style":rr(_,i,o);break;case"data":if(t!=="object"){Wa(_,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){_.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){_.removeAttribute(n);break}i=Fa(""+i),_.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){_.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&b_(_,t,"name",l.name,l,null),b_(_,t,"formEncType",l.formEncType,l,null),b_(_,t,"formMethod",l.formMethod,l,null),b_(_,t,"formTarget",l.formTarget,l,null)):(b_(_,t,"encType",l.encType,l,null),b_(_,t,"method",l.method,l,null),b_(_,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){_.removeAttribute(n);break}i=Fa(""+i),_.setAttribute(n,i);break;case"onClick":i!=null&&(_.onclick=U$);break;case"onScroll":i!=null&&A_("scroll",_);break;case"onScrollEnd":i!=null&&A_("scrollend",_);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(s(60));_.innerHTML=n}}break;case"multiple":_.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":_.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){_.removeAttribute("xlink:href");break}n=Fa(""+i),_.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?_.setAttribute(n,""+i):_.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?_.setAttribute(n,""):_.removeAttribute(n);break;case"capture":case"download":i===!0?_.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?_.setAttribute(n,i):_.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?_.setAttribute(n,i):_.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?_.removeAttribute(n):_.setAttribute(n,i);break;case"popover":A_("beforetoggle",_),A_("toggle",_),Va(_,"popover",i);break;case"xlinkActuate":$e(_,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":$e(_,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":$e(_,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":$e(_,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":$e(_,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":$e(_,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":$e(_,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":$e(_,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":$e(_,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Va(_,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=lE.get(n)||n,Va(_,n,i))}}function ao(_,t,n,i,l,o){switch(n){case"style":rr(_,i,o);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(s(60));_.innerHTML=n}}break;case"children":typeof i=="string"?bn(_,i):(typeof i=="number"||typeof i=="bigint")&&bn(_,""+i);break;case"onScroll":i!=null&&A_("scroll",_);break;case"onScrollEnd":i!=null&&A_("scrollend",_);break;case"onClick":i!=null&&(_.onclick=U$);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_r.hasOwnProperty(n))_:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),o=_[Lt]||null,o=o!=null?o[n]:null,typeof o=="function"&&_.removeEventListener(t,o,l),typeof i=="function")){typeof o!="function"&&o!==null&&(n in _?_[n]=null:_.hasAttribute(n)&&_.removeAttribute(n)),_.addEventListener(t,i,l);break _}n in _?_[n]=i:i===!0?_.setAttribute(n,""):Va(_,n,i)}}}function rt(_,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":A_("error",_),A_("load",_);var i=!1,l=!1,o;for(o in n)if(n.hasOwnProperty(o)){var c=n[o];if(c!=null)switch(o){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:b_(_,t,o,c,n,null)}}l&&b_(_,t,"srcSet",n.srcSet,n,null),i&&b_(_,t,"src",n.src,n,null);return;case"input":A_("invalid",_);var E=o=c=l=null,m=null,x=null;for(i in n)if(n.hasOwnProperty(i)){var B=n[i];if(B!=null)switch(i){case"name":l=B;break;case"type":c=B;break;case"checked":m=B;break;case"defaultChecked":x=B;break;case"value":o=B;break;case"defaultValue":E=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,t));break;default:b_(_,t,i,B,n,null)}}lr(_,o,E,m,x,c,l,!1),wa(_);return;case"select":A_("invalid",_),i=c=o=null;for(l in n)if(n.hasOwnProperty(l)&&(E=n[l],E!=null))switch(l){case"value":o=E;break;case"defaultValue":c=E;break;case"multiple":i=E;default:b_(_,t,l,E,n,null)}t=o,n=c,_.multiple=!!i,t!=null?xn(_,!!i,t,!1):n!=null&&xn(_,!!i,n,!0);return;case"textarea":A_("invalid",_),o=l=i=null;for(c in n)if(n.hasOwnProperty(c)&&(E=n[c],E!=null))switch(c){case"value":i=E;break;case"defaultValue":l=E;break;case"children":o=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:b_(_,t,c,E,n,null)}or(_,i,l,o),wa(_);return;case"option":for(m in n)if(n.hasOwnProperty(m)&&(i=n[m],i!=null))switch(m){case"selected":_.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:b_(_,t,m,i,n,null)}return;case"dialog":A_("beforetoggle",_),A_("toggle",_),A_("cancel",_),A_("close",_);break;case"iframe":case"object":A_("load",_);break;case"video":case"audio":for(i=0;i<la.length;i++)A_(la[i],_);break;case"image":A_("error",_),A_("load",_);break;case"details":A_("toggle",_);break;case"embed":case"source":case"link":A_("error",_),A_("load",_);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in n)if(n.hasOwnProperty(x)&&(i=n[x],i!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:b_(_,t,x,i,n,null)}return;default:if(Il(t)){for(B in n)n.hasOwnProperty(B)&&(i=n[B],i!==void 0&&ao(_,t,B,i,n,void 0));return}}for(E in n)n.hasOwnProperty(E)&&(i=n[E],i!=null&&b_(_,t,E,i,n,null))}function OA(_,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,c=null,E=null,m=null,x=null,B=null;for(H in n){var V=n[H];if(n.hasOwnProperty(H)&&V!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":m=V;default:i.hasOwnProperty(H)||b_(_,t,H,null,i,V)}}for(var O in i){var H=i[O];if(V=n[O],i.hasOwnProperty(O)&&(H!=null||V!=null))switch(O){case"type":o=H;break;case"name":l=H;break;case"checked":x=H;break;case"defaultChecked":B=H;break;case"value":c=H;break;case"defaultValue":E=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,t));break;default:H!==V&&b_(_,t,O,H,i,V)}}Ll(_,c,E,m,x,B,o,l);return;case"select":H=c=E=O=null;for(o in n)if(m=n[o],n.hasOwnProperty(o)&&m!=null)switch(o){case"value":break;case"multiple":H=m;default:i.hasOwnProperty(o)||b_(_,t,o,null,i,m)}for(l in i)if(o=i[l],m=n[l],i.hasOwnProperty(l)&&(o!=null||m!=null))switch(l){case"value":O=o;break;case"defaultValue":E=o;break;case"multiple":c=o;default:o!==m&&b_(_,t,l,o,i,m)}t=E,n=c,i=H,O!=null?xn(_,!!n,O,!1):!!i!=!!n&&(t!=null?xn(_,!!n,t,!0):xn(_,!!n,n?[]:"",!1));return;case"textarea":H=O=null;for(E in n)if(l=n[E],n.hasOwnProperty(E)&&l!=null&&!i.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:b_(_,t,E,null,i,l)}for(c in i)if(l=i[c],o=n[c],i.hasOwnProperty(c)&&(l!=null||o!=null))switch(c){case"value":O=l;break;case"defaultValue":H=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==o&&b_(_,t,c,l,i,o)}sr(_,O,H);return;case"option":for(var u_ in n)if(O=n[u_],n.hasOwnProperty(u_)&&O!=null&&!i.hasOwnProperty(u_))switch(u_){case"selected":_.selected=!1;break;default:b_(_,t,u_,null,i,O)}for(m in i)if(O=i[m],H=n[m],i.hasOwnProperty(m)&&O!==H&&(O!=null||H!=null))switch(m){case"selected":_.selected=O&&typeof O!="function"&&typeof O!="symbol";break;default:b_(_,t,m,O,i,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var l_ in n)O=n[l_],n.hasOwnProperty(l_)&&O!=null&&!i.hasOwnProperty(l_)&&b_(_,t,l_,null,i,O);for(x in i)if(O=i[x],H=n[x],i.hasOwnProperty(x)&&O!==H&&(O!=null||H!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(s(137,t));break;default:b_(_,t,x,O,i,H)}return;default:if(Il(t)){for(var O_ in n)O=n[O_],n.hasOwnProperty(O_)&&O!==void 0&&!i.hasOwnProperty(O_)&&ao(_,t,O_,void 0,i,O);for(B in i)O=i[B],H=n[B],!i.hasOwnProperty(B)||O===H||O===void 0&&H===void 0||ao(_,t,B,O,i,H);return}}for(var N in n)O=n[N],n.hasOwnProperty(N)&&O!=null&&!i.hasOwnProperty(N)&&b_(_,t,N,null,i,O);for(V in i)O=i[V],H=n[V],!i.hasOwnProperty(V)||O===H||O==null&&H==null||b_(_,t,V,O,i,H)}var $o=null,lo=null;function P$(_){return _.nodeType===9?_:_.ownerDocument}function rT(_){switch(_){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cT(_,t){if(_===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return _===1&&t==="foreignObject"?0:_}function so(_,t){return _==="textarea"||_==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var oo=null;function MA(){var _=window.event;return _&&_.type==="popstate"?_===oo?!1:(oo=_,!0):(oo=null,!1)}var fT=typeof setTimeout=="function"?setTimeout:void 0,DA=typeof clearTimeout=="function"?clearTimeout:void 0,TT=typeof Promise=="function"?Promise:void 0,HA=typeof queueMicrotask=="function"?queueMicrotask:typeof TT<"u"?function(_){return TT.resolve(null).then(_).catch(UA)}:fT;function UA(_){setTimeout(function(){throw _})}function we(_){return _==="head"}function hT(_,t){var n=t,i=0,l=0;do{var o=n.nextSibling;if(_.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(0<i&&8>i){n=i;var c=_.ownerDocument;if(n&1&&oa(c.documentElement),n&2&&oa(c.body),n&4)for(n=c.head,oa(n),c=n.firstChild;c;){var E=c.nextSibling,m=c.nodeName;c[Ri]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=E}}if(l===0){_.removeChild(o),Ea(t);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:i=n.charCodeAt(0)-48;else i=0;n=o}while(n);Ea(t)}function uo(_){var t=_.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":uo(n),hl(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}_.removeChild(n)}}function PA(_,t,n,i){for(;_.nodeType===1;){var l=n;if(_.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(_.nodeName!=="INPUT"||_.type!=="hidden"))break}else if(i){if(!_[Ri])switch(t){case"meta":if(!_.hasAttribute("itemprop"))break;return _;case"link":if(o=_.getAttribute("rel"),o==="stylesheet"&&_.hasAttribute("data-precedence"))break;if(o!==l.rel||_.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||_.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||_.getAttribute("title")!==(l.title==null?null:l.title))break;return _;case"style":if(_.hasAttribute("data-precedence"))break;return _;case"script":if(o=_.getAttribute("src"),(o!==(l.src==null?null:l.src)||_.getAttribute("type")!==(l.type==null?null:l.type)||_.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&_.hasAttribute("async")&&!_.hasAttribute("itemprop"))break;return _;default:return _}}else if(t==="input"&&_.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&_.getAttribute("name")===o)return _}else return _;if(_=qt(_.nextSibling),_===null)break}return null}function BA(_,t,n){if(t==="")return null;for(;_.nodeType!==3;)if((_.nodeType!==1||_.nodeName!=="INPUT"||_.type!=="hidden")&&!n||(_=qt(_.nextSibling),_===null))return null;return _}function ro(_){return _.data==="$!"||_.data==="$?"&&_.ownerDocument.readyState==="complete"}function GA(_,t){var n=_.ownerDocument;if(_.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),_._reactRetry=i}}function qt(_){for(;_!=null;_=_.nextSibling){var t=_.nodeType;if(t===1||t===3)break;if(t===8){if(t=_.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return _}var co=null;function dT(_){_=_.previousSibling;for(var t=0;_;){if(_.nodeType===8){var n=_.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return _;t--}else n==="/$"&&t++}_=_.previousSibling}return null}function ET(_,t,n){switch(t=P$(n),_){case"html":if(_=t.documentElement,!_)throw Error(s(452));return _;case"head":if(_=t.head,!_)throw Error(s(453));return _;case"body":if(_=t.body,!_)throw Error(s(454));return _;default:throw Error(s(451))}}function oa(_){for(var t=_.attributes;t.length;)_.removeAttributeNode(t[0]);hl(_)}var Yt=new Map,AT=new Set;function B$(_){return typeof _.getRootNode=="function"?_.getRootNode():_.nodeType===9?_:_.ownerDocument}var me=z.d;z.d={f:VA,r:WA,D:wA,C:YA,L:FA,m:jA,X:XA,S:zA,M:KA};function VA(){var _=me.f(),t=C$();return _||t}function WA(_){var t=Sn(_);t!==null&&t.tag===5&&t.type==="form"?Pc(t):me.r(_)}var $i=typeof document>"u"?null:document;function LT(_,t,n){var i=$i;if(i&&typeof t=="string"&&t){var l=Ut(t);l='link[rel="'+_+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),AT.has(l)||(AT.add(l),_={rel:_,crossOrigin:n,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),rt(t,"link",_),at(t),i.head.appendChild(t)))}}function wA(_){me.D(_),LT("dns-prefetch",_,null)}function YA(_,t){me.C(_,t),LT("preconnect",_,t)}function FA(_,t,n){me.L(_,t,n);var i=$i;if(i&&_&&t){var l='link[rel="preload"][as="'+Ut(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Ut(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Ut(n.imageSizes)+'"]')):l+='[href="'+Ut(_)+'"]';var o=l;switch(t){case"style":o=li(_);break;case"script":o=si(_)}Yt.has(o)||(_=A({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:_,as:t},n),Yt.set(o,_),i.querySelector(l)!==null||t==="style"&&i.querySelector(ua(o))||t==="script"&&i.querySelector(ra(o))||(t=i.createElement("link"),rt(t,"link",_),at(t),i.head.appendChild(t)))}}function jA(_,t){me.m(_,t);var n=$i;if(n&&_){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Ut(i)+'"][href="'+Ut(_)+'"]',o=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=si(_)}if(!Yt.has(o)&&(_=A({rel:"modulepreload",href:_},t),Yt.set(o,_),n.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ra(o)))return}i=n.createElement("link"),rt(i,"link",_),at(i),n.head.appendChild(i)}}}function zA(_,t,n){me.S(_,t,n);var i=$i;if(i&&_){var l=vn(i).hoistableStyles,o=li(_);t=t||"default";var c=l.get(o);if(!c){var E={loading:0,preload:null};if(c=i.querySelector(ua(o)))E.loading=5;else{_=A({rel:"stylesheet",href:_,"data-precedence":t},n),(n=Yt.get(o))&&fo(_,n);var m=c=i.createElement("link");at(m),rt(m,"link",_),m._p=new Promise(function(x,B){m.onload=x,m.onerror=B}),m.addEventListener("load",function(){E.loading|=1}),m.addEventListener("error",function(){E.loading|=2}),E.loading|=4,G$(c,t,i)}c={type:"stylesheet",instance:c,count:1,state:E},l.set(o,c)}}}function XA(_,t){me.X(_,t);var n=$i;if(n&&_){var i=vn(n).hoistableScripts,l=si(_),o=i.get(l);o||(o=n.querySelector(ra(l)),o||(_=A({src:_,async:!0},t),(t=Yt.get(l))&&To(_,t),o=n.createElement("script"),at(o),rt(o,"link",_),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(l,o))}}function KA(_,t){me.M(_,t);var n=$i;if(n&&_){var i=vn(n).hoistableScripts,l=si(_),o=i.get(l);o||(o=n.querySelector(ra(l)),o||(_=A({src:_,async:!0,type:"module"},t),(t=Yt.get(l))&&To(_,t),o=n.createElement("script"),at(o),rt(o,"link",_),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(l,o))}}function mT(_,t,n,i){var l=(l=g.current)?B$(l):null;if(!l)throw Error(s(446));switch(_){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=li(n.href),n=vn(l).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){_=li(n.href);var o=vn(l).hoistableStyles,c=o.get(_);if(c||(l=l.ownerDocument||l,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(_,c),(o=l.querySelector(ua(_)))&&!o._p&&(c.instance=o,c.state.loading=5),Yt.has(_)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Yt.set(_,n),o||qA(l,_,n,c.state))),t&&i===null)throw Error(s(528,""));return c}if(t&&i!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=si(n),n=vn(l).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,_))}}function li(_){return'href="'+Ut(_)+'"'}function ua(_){return'link[rel="stylesheet"]['+_+"]"}function IT(_){return A({},_,{"data-precedence":_.precedence,precedence:null})}function qA(_,t,n,i){_.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=_.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),rt(t,"link",n),at(t),_.head.appendChild(t))}function si(_){return'[src="'+Ut(_)+'"]'}function ra(_){return"script[async]"+_}function pT(_,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=_.querySelector('style[data-href~="'+Ut(n.href)+'"]');if(i)return t.instance=i,at(i),i;var l=A({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(_.ownerDocument||_).createElement("style"),at(i),rt(i,"style",l),G$(i,n.precedence,_),t.instance=i;case"stylesheet":l=li(n.href);var o=_.querySelector(ua(l));if(o)return t.state.loading|=4,t.instance=o,at(o),o;i=IT(n),(l=Yt.get(l))&&fo(i,l),o=(_.ownerDocument||_).createElement("link"),at(o);var c=o;return c._p=new Promise(function(E,m){c.onload=E,c.onerror=m}),rt(o,"link",i),t.state.loading|=4,G$(o,n.precedence,_),t.instance=o;case"script":return o=si(n.src),(l=_.querySelector(ra(o)))?(t.instance=l,at(l),l):(i=n,(l=Yt.get(o))&&(i=A({},n),To(i,l)),_=_.ownerDocument||_,l=_.createElement("script"),at(l),rt(l,"link",i),_.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,G$(i,n.precedence,_));return t.instance}function G$(_,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,o=l,c=0;c<i.length;c++){var E=i[c];if(E.dataset.precedence===t)o=E;else if(o!==l)break}o?o.parentNode.insertBefore(_,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(_,t.firstChild))}function fo(_,t){_.crossOrigin==null&&(_.crossOrigin=t.crossOrigin),_.referrerPolicy==null&&(_.referrerPolicy=t.referrerPolicy),_.title==null&&(_.title=t.title)}function To(_,t){_.crossOrigin==null&&(_.crossOrigin=t.crossOrigin),_.referrerPolicy==null&&(_.referrerPolicy=t.referrerPolicy),_.integrity==null&&(_.integrity=t.integrity)}var V$=null;function yT(_,t,n){if(V$===null){var i=new Map,l=V$=new Map;l.set(n,i)}else l=V$,i=l.get(n),i||(i=new Map,l.set(n,i));if(i.has(_))return i;for(i.set(_,null),n=n.getElementsByTagName(_),l=0;l<n.length;l++){var o=n[l];if(!(o[Ri]||o[ft]||_==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var c=o.getAttribute(t)||"";c=_+c;var E=i.get(c);E?E.push(o):i.set(c,[o])}}return i}function RT(_,t,n){_=_.ownerDocument||_,_.head.insertBefore(n,t==="title"?_.querySelector("head > title"):null)}function kA(_,t,n){if(n===1||t.itemProp!=null)return!1;switch(_){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return _=t.disabled,typeof t.precedence=="string"&&_==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function gT(_){return!(_.type==="stylesheet"&&(_.state.loading&3)===0)}var ca=null;function QA(){}function ZA(_,t,n){if(ca===null)throw Error(s(475));var i=ca;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=li(n.href),o=_.querySelector(ua(l));if(o){_=o._p,_!==null&&typeof _=="object"&&typeof _.then=="function"&&(i.count++,i=W$.bind(i),_.then(i,i)),t.state.loading|=4,t.instance=o,at(o);return}o=_.ownerDocument||_,n=IT(n),(l=Yt.get(l))&&fo(n,l),o=o.createElement("link"),at(o);var c=o;c._p=new Promise(function(E,m){c.onload=E,c.onerror=m}),rt(o,"link",n),t.instance=o}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,_),(_=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=W$.bind(i),_.addEventListener("load",t),_.addEventListener("error",t))}}function JA(){if(ca===null)throw Error(s(475));var _=ca;return _.stylesheets&&_.count===0&&ho(_,_.stylesheets),0<_.count?function(t){var n=setTimeout(function(){if(_.stylesheets&&ho(_,_.stylesheets),_.unsuspend){var i=_.unsuspend;_.unsuspend=null,i()}},6e4);return _.unsuspend=t,function(){_.unsuspend=null,clearTimeout(n)}}:null}function W$(){if(this.count--,this.count===0){if(this.stylesheets)ho(this,this.stylesheets);else if(this.unsuspend){var _=this.unsuspend;this.unsuspend=null,_()}}}var w$=null;function ho(_,t){_.stylesheets=null,_.unsuspend!==null&&(_.count++,w$=new Map,t.forEach(_L,_),w$=null,W$.call(_))}function _L(_,t){if(!(t.state.loading&4)){var n=w$.get(_);if(n)var i=n.get(null);else{n=new Map,w$.set(_,n);for(var l=_.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var c=l[o];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(n.set(c.dataset.precedence,c),i=c)}i&&n.set(null,i)}l=t.instance,c=l.getAttribute("data-precedence"),o=n.get(c)||i,o===i&&n.set(null,l),n.set(c,l),this.count++,i=W$.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),o?o.parentNode.insertBefore(l,o.nextSibling):(_=_.nodeType===9?_.head:_,_.insertBefore(l,_.firstChild)),t.state.loading|=4}}var fa={$$typeof:K,Provider:null,Consumer:null,_currentValue:__,_currentValue2:__,_threadCount:0};function tL(_,t,n,i,l,o,c,E){this.tag=1,this.containerInfo=_,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rl(0),this.hiddenUpdates=rl(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function ST(_,t,n,i,l,o,c,E,m,x,B,V){return _=new tL(_,t,n,c,E,m,x,V),t=1,o===!0&&(t|=24),o=Nt(3,null,null,t),_.current=o,o.stateNode=_,t=kl(),t.refCount++,_.pooledCache=t,t.refCount++,o.memoizedState={element:i,isDehydrated:n,cache:t},_s(o),_}function vT(_){return _?(_=Gn,_):Gn}function NT(_,t,n,i,l,o){l=vT(l),i.context===null?i.context=l:i.pendingContext=l,i=Ce(t),i.payload={element:n},o=o===void 0?null:o,o!==null&&(i.callback=o),n=xe(_,i,t),n!==null&&(Mt(n,_,t),Yi(n,_,t))}function CT(_,t){if(_=_.memoizedState,_!==null&&_.dehydrated!==null){var n=_.retryLane;_.retryLane=n!==0&&n<t?n:t}}function Eo(_,t){CT(_,t),(_=_.alternate)&&CT(_,t)}function xT(_){if(_.tag===13){var t=Bn(_,67108864);t!==null&&Mt(t,_,67108864),Eo(_,67108864)}}var Y$=!0;function eL(_,t,n,i){var l=P.T;P.T=null;var o=z.p;try{z.p=2,Ao(_,t,n,i)}finally{z.p=o,P.T=l}}function nL(_,t,n,i){var l=P.T;P.T=null;var o=z.p;try{z.p=8,Ao(_,t,n,i)}finally{z.p=o,P.T=l}}function Ao(_,t,n,i){if(Y$){var l=Lo(i);if(l===null)io(_,t,i,F$,n),OT(_,i);else if(aL(l,_,t,n,i))i.stopPropagation();else if(OT(_,i),t&4&&-1<iL.indexOf(_)){for(;l!==null;){var o=Sn(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var c=Je(o.pendingLanes);if(c!==0){var E=o;for(E.pendingLanes|=2,E.entangledLanes|=2;c;){var m=1<<31-St(c);E.entanglements[1]|=m,c&=~m}ee(o),(v_&6)===0&&(v$=B_()+500,$a(0))}}break;case 13:E=Bn(o,2),E!==null&&Mt(E,o,2),C$(),Eo(o,2)}if(o=Lo(i),o===null&&io(_,t,i,F$,n),o===l)break;l=o}l!==null&&i.stopPropagation()}else io(_,t,i,null,n)}}function Lo(_){return _=yl(_),mo(_)}var F$=null;function mo(_){if(F$=null,_=gn(_),_!==null){var t=f(_);if(t===null)_=null;else{var n=t.tag;if(n===13){if(_=r(t),_!==null)return _;_=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;_=null}else t!==_&&(_=null)}}return F$=_,null}function bT(_){switch(_){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ye()){case Ze:return 2;case G_:return 8;case F_:case M_:return 32;case mi:return 268435456;default:return 32}default:return 32}}var Io=!1,Ye=null,Fe=null,je=null,Ta=new Map,ha=new Map,ze=[],iL="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function OT(_,t){switch(_){case"focusin":case"focusout":Ye=null;break;case"dragenter":case"dragleave":Fe=null;break;case"mouseover":case"mouseout":je=null;break;case"pointerover":case"pointerout":Ta.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(t.pointerId)}}function da(_,t,n,i,l,o){return _===null||_.nativeEvent!==o?(_={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Sn(t),t!==null&&xT(t)),_):(_.eventSystemFlags|=i,t=_.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),_)}function aL(_,t,n,i,l){switch(t){case"focusin":return Ye=da(Ye,_,t,n,i,l),!0;case"dragenter":return Fe=da(Fe,_,t,n,i,l),!0;case"mouseover":return je=da(je,_,t,n,i,l),!0;case"pointerover":var o=l.pointerId;return Ta.set(o,da(Ta.get(o)||null,_,t,n,i,l)),!0;case"gotpointercapture":return o=l.pointerId,ha.set(o,da(ha.get(o)||null,_,t,n,i,l)),!0}return!1}function MT(_){var t=gn(_.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=r(n),t!==null){_.blockedOn=t,Z0(_.priority,function(){if(n.tag===13){var i=Ot();i=cl(i);var l=Bn(n,i);l!==null&&Mt(l,n,i),Eo(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){_.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}_.blockedOn=null}function j$(_){if(_.blockedOn!==null)return!1;for(var t=_.targetContainers;0<t.length;){var n=Lo(_.nativeEvent);if(n===null){n=_.nativeEvent;var i=new n.constructor(n.type,n);pl=i,n.target.dispatchEvent(i),pl=null}else return t=Sn(n),t!==null&&xT(t),_.blockedOn=n,!1;t.shift()}return!0}function DT(_,t,n){j$(_)&&n.delete(t)}function $L(){Io=!1,Ye!==null&&j$(Ye)&&(Ye=null),Fe!==null&&j$(Fe)&&(Fe=null),je!==null&&j$(je)&&(je=null),Ta.forEach(DT),ha.forEach(DT)}function z$(_,t){_.blockedOn===t&&(_.blockedOn=null,Io||(Io=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,$L)))}var X$=null;function HT(_){X$!==_&&(X$=_,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){X$===_&&(X$=null);for(var t=0;t<_.length;t+=3){var n=_[t],i=_[t+1],l=_[t+2];if(typeof i!="function"){if(mo(i||n)===null)continue;break}var o=Sn(n);o!==null&&(_.splice(t,3),t-=3,Ls(o,{pending:!0,data:l,method:n.method,action:i},i,l))}}))}function Ea(_){function t(m){return z$(m,_)}Ye!==null&&z$(Ye,_),Fe!==null&&z$(Fe,_),je!==null&&z$(je,_),Ta.forEach(t),ha.forEach(t);for(var n=0;n<ze.length;n++){var i=ze[n];i.blockedOn===_&&(i.blockedOn=null)}for(;0<ze.length&&(n=ze[0],n.blockedOn===null);)MT(n),n.blockedOn===null&&ze.shift();if(n=(_.ownerDocument||_).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var l=n[i],o=n[i+1],c=l[Lt]||null;if(typeof o=="function")c||HT(n);else if(c){var E=null;if(o&&o.hasAttribute("formAction")){if(l=o,c=o[Lt]||null)E=c.formAction;else if(mo(l)!==null)continue}else E=c.action;typeof E=="function"?n[i+1]=E:(n.splice(i,3),i-=3),HT(n)}}}function po(_){this._internalRoot=_}K$.prototype.render=po.prototype.render=function(_){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,i=Ot();NT(n,i,_,t,null,null)},K$.prototype.unmount=po.prototype.unmount=function(){var _=this._internalRoot;if(_!==null){this._internalRoot=null;var t=_.containerInfo;NT(_.current,2,null,_,null,null),C$(),t[Rn]=null}};function K$(_){this._internalRoot=_}K$.prototype.unstable_scheduleHydration=function(_){if(_){var t=Qu();_={blockedOn:null,target:_,priority:t};for(var n=0;n<ze.length&&t!==0&&t<ze[n].priority;n++);ze.splice(n,0,_),n===0&&MT(_)}};var UT=a.version;if(UT!=="19.1.1")throw Error(s(527,UT,"19.1.1"));z.findDOMNode=function(_){var t=_._reactInternals;if(t===void 0)throw typeof _.render=="function"?Error(s(188)):(_=Object.keys(_).join(","),Error(s(268,_)));return _=d(t),_=_!==null?h(_):null,_=_===null?null:_.stateNode,_};var lL={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var q$=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!q$.isDisabled&&q$.supportsFiber)try{Ii=q$.inject(lL),gt=q$}catch{}}return La.createRoot=function(_,t){if(!u(_))throw Error(s(299));var n=!1,i="",l=Qc,o=Zc,c=Jc,E=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(E=t.unstable_transitionCallbacks)),t=ST(_,1,!1,null,null,n,i,l,o,c,E,null),_[Rn]=t.current,no(_),new po(t)},La.hydrateRoot=function(_,t,n){if(!u(_))throw Error(s(299));var i=!1,l="",o=Qc,c=Zc,E=Jc,m=null,x=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(m=n.unstable_transitionCallbacks),n.formState!==void 0&&(x=n.formState)),t=ST(_,1,!0,t,n??null,i,l,o,c,E,m,x),t.context=vT(null),n=t.current,i=Ot(),i=cl(i),l=Ce(i),l.callback=null,xe(n,l,i),n=i,t.current.lanes=n,yi(t,n),ee(t),_[Rn]=t.current,no(_),new K$(t)},La.version="19.1.1",La}var zT;function AL(){if(zT)return go.exports;zT=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(a){console.error(a)}}return e(),go.exports=EL(),go.exports}var LL=AL();const sd=t_.createContext({});function mL(e){const a=t_.useRef(null);return a.current===null&&(a.current=e()),a.current}const hu=typeof window<"u",IL=hu?t_.useLayoutEffect:t_.useEffect,du=t_.createContext(null);function Eu(e,a){e.indexOf(a)===-1&&e.push(a)}function Au(e,a){const $=e.indexOf(a);$>-1&&e.splice($,1)}const Ie=(e,a,$)=>$>a?a:$<e?e:$;let Lu=()=>{};const pe={},od=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function ud(e){return typeof e=="object"&&e!==null}const rd=e=>/^0[^.\s]+$/u.test(e);function mu(e){let a;return()=>(a===void 0&&(a=e()),a)}const zt=e=>e,pL=(e,a)=>$=>a(e($)),Ma=(...e)=>e.reduce(pL),va=(e,a,$)=>{const s=a-e;return s===0?1:($-e)/s};class Iu{constructor(){this.subscriptions=[]}add(a){return Eu(this.subscriptions,a),()=>Au(this.subscriptions,a)}notify(a,$,s){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](a,$,s);else for(let f=0;f<u;f++){const r=this.subscriptions[f];r&&r(a,$,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ne=e=>e*1e3,ie=e=>e/1e3;function cd(e,a){return a?e*(1e3/a):0}const fd=(e,a,$)=>(((1-3*$+3*a)*e+(3*$-6*a))*e+3*a)*e,yL=1e-7,RL=12;function gL(e,a,$,s,u){let f,r,T=0;do r=a+($-a)/2,f=fd(r,s,u)-e,f>0?$=r:a=r;while(Math.abs(f)>yL&&++T<RL);return r}function Da(e,a,$,s){if(e===a&&$===s)return zt;const u=f=>gL(f,0,1,e,$);return f=>f===0||f===1?f:fd(u(f),a,s)}const Td=e=>a=>a<=.5?e(2*a)/2:(2-e(2*(1-a)))/2,hd=e=>a=>1-e(1-a),dd=Da(.33,1.53,.69,.99),pu=hd(dd),Ed=Td(pu),Ad=e=>(e*=2)<1?.5*pu(e):.5*(2-Math.pow(2,-10*(e-1))),yu=e=>1-Math.sin(Math.acos(e)),Ld=hd(yu),md=Td(yu),SL=Da(.42,0,1,1),vL=Da(0,0,.58,1),Id=Da(.42,0,.58,1),NL=e=>Array.isArray(e)&&typeof e[0]!="number",pd=e=>Array.isArray(e)&&typeof e[0]=="number",CL={linear:zt,easeIn:SL,easeInOut:Id,easeOut:vL,circIn:yu,circInOut:md,circOut:Ld,backIn:pu,backInOut:Ed,backOut:dd,anticipate:Ad},xL=e=>typeof e=="string",XT=e=>{if(pd(e)){Lu(e.length===4);const[a,$,s,u]=e;return Da(a,$,s,u)}else if(xL(e))return CL[e];return e},k$=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function bL(e,a){let $=new Set,s=new Set,u=!1,f=!1;const r=new WeakSet;let T={delta:0,timestamp:0,isProcessing:!1};function d(A){r.has(A)&&(h.schedule(A),e()),A(T)}const h={schedule:(A,y=!1,v=!1)=>{const Y=v&&u?$:s;return y&&r.add(A),Y.has(A)||Y.add(A),A},cancel:A=>{s.delete(A),r.delete(A)},process:A=>{if(T=A,u){f=!0;return}u=!0,[$,s]=[s,$],$.forEach(d),$.clear(),u=!1,f&&(f=!1,h.process(A))}};return h}const OL=40;function yd(e,a){let $=!1,s=!0;const u={delta:0,timestamp:0,isProcessing:!1},f=()=>$=!0,r=k$.reduce((K,i_)=>(K[i_]=bL(f),K),{}),{setup:T,read:d,resolveKeyframes:h,preUpdate:A,update:y,preRender:v,render:U,postRender:Y}=r,Z=()=>{const K=pe.useManualTiming?u.timestamp:performance.now();$=!1,pe.useManualTiming||(u.delta=s?1e3/60:Math.max(Math.min(K-u.timestamp,OL),1)),u.timestamp=K,u.isProcessing=!0,T.process(u),d.process(u),h.process(u),A.process(u),y.process(u),v.process(u),U.process(u),Y.process(u),u.isProcessing=!1,$&&a&&(s=!1,e(Z))},Q=()=>{$=!0,s=!0,u.isProcessing||e(Z)};return{schedule:k$.reduce((K,i_)=>{const j=r[i_];return K[i_]=(o_,f_=!1,$_=!1)=>($||Q(),j.schedule(o_,f_,$_)),K},{}),cancel:K=>{for(let i_=0;i_<k$.length;i_++)r[k$[i_]].cancel(K)},state:u,steps:r}}const{schedule:W_,cancel:qe,state:ct,steps:Co}=yd(typeof requestAnimationFrame<"u"?requestAnimationFrame:zt,!0);let J$;function ML(){J$=void 0}const Rt={now:()=>(J$===void 0&&Rt.set(ct.isProcessing||pe.useManualTiming?ct.timestamp:performance.now()),J$),set:e=>{J$=e,queueMicrotask(ML)}},Rd=e=>a=>typeof a=="string"&&a.startsWith(e),Ru=Rd("--"),DL=Rd("var(--"),gu=e=>DL(e)?HL.test(e.split("/*")[0].trim()):!1,HL=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Ei={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Na={...Ei,transform:e=>Ie(0,1,e)},Q$={...Ei,default:1},pa=e=>Math.round(e*1e5)/1e5,Su=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function UL(e){return e==null}const PL=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,vu=(e,a)=>$=>!!(typeof $=="string"&&PL.test($)&&$.startsWith(e)||a&&!UL($)&&Object.prototype.hasOwnProperty.call($,a)),gd=(e,a,$)=>s=>{if(typeof s!="string")return s;const[u,f,r,T]=s.match(Su);return{[e]:parseFloat(u),[a]:parseFloat(f),[$]:parseFloat(r),alpha:T!==void 0?parseFloat(T):1}},BL=e=>Ie(0,255,e),xo={...Ei,transform:e=>Math.round(BL(e))},mn={test:vu("rgb","red"),parse:gd("red","green","blue"),transform:({red:e,green:a,blue:$,alpha:s=1})=>"rgba("+xo.transform(e)+", "+xo.transform(a)+", "+xo.transform($)+", "+pa(Na.transform(s))+")"};function GL(e){let a="",$="",s="",u="";return e.length>5?(a=e.substring(1,3),$=e.substring(3,5),s=e.substring(5,7),u=e.substring(7,9)):(a=e.substring(1,2),$=e.substring(2,3),s=e.substring(3,4),u=e.substring(4,5),a+=a,$+=$,s+=s,u+=u),{red:parseInt(a,16),green:parseInt($,16),blue:parseInt(s,16),alpha:u?parseInt(u,16)/255:1}}const jo={test:vu("#"),parse:GL,transform:mn.transform},Ha=e=>({test:a=>typeof a=="string"&&a.endsWith(e)&&a.split(" ").length===1,parse:parseFloat,transform:a=>`${a}${e}`}),Ke=Ha("deg"),ae=Ha("%"),r_=Ha("px"),VL=Ha("vh"),WL=Ha("vw"),KT={...ae,parse:e=>ae.parse(e)/100,transform:e=>ae.transform(e*100)},oi={test:vu("hsl","hue"),parse:gd("hue","saturation","lightness"),transform:({hue:e,saturation:a,lightness:$,alpha:s=1})=>"hsla("+Math.round(e)+", "+ae.transform(pa(a))+", "+ae.transform(pa($))+", "+pa(Na.transform(s))+")"},tt={test:e=>mn.test(e)||jo.test(e)||oi.test(e),parse:e=>mn.test(e)?mn.parse(e):oi.test(e)?oi.parse(e):jo.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?mn.transform(e):oi.transform(e),getAnimatableNone:e=>{const a=tt.parse(e);return a.alpha=0,tt.transform(a)}},wL=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function YL(e){return isNaN(e)&&typeof e=="string"&&(e.match(Su)?.length||0)+(e.match(wL)?.length||0)>0}const Sd="number",vd="color",FL="var",jL="var(",qT="${}",zL=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ca(e){const a=e.toString(),$=[],s={color:[],number:[],var:[]},u=[];let f=0;const T=a.replace(zL,d=>(tt.test(d)?(s.color.push(f),u.push(vd),$.push(tt.parse(d))):d.startsWith(jL)?(s.var.push(f),u.push(FL),$.push(d)):(s.number.push(f),u.push(Sd),$.push(parseFloat(d))),++f,qT)).split(qT);return{values:$,split:T,indexes:s,types:u}}function Nd(e){return Ca(e).values}function Cd(e){const{split:a,types:$}=Ca(e),s=a.length;return u=>{let f="";for(let r=0;r<s;r++)if(f+=a[r],u[r]!==void 0){const T=$[r];T===Sd?f+=pa(u[r]):T===vd?f+=tt.transform(u[r]):f+=u[r]}return f}}const XL=e=>typeof e=="number"?0:tt.test(e)?tt.getAnimatableNone(e):e;function KL(e){const a=Nd(e);return Cd(e)(a.map(XL))}const ke={test:YL,parse:Nd,createTransformer:Cd,getAnimatableNone:KL};function bo(e,a,$){return $<0&&($+=1),$>1&&($-=1),$<1/6?e+(a-e)*6*$:$<1/2?a:$<2/3?e+(a-e)*(2/3-$)*6:e}function qL({hue:e,saturation:a,lightness:$,alpha:s}){e/=360,a/=100,$/=100;let u=0,f=0,r=0;if(!a)u=f=r=$;else{const T=$<.5?$*(1+a):$+a-$*a,d=2*$-T;u=bo(d,T,e+1/3),f=bo(d,T,e),r=bo(d,T,e-1/3)}return{red:Math.round(u*255),green:Math.round(f*255),blue:Math.round(r*255),alpha:s}}function nl(e,a){return $=>$>0?a:e}const Y_=(e,a,$)=>e+(a-e)*$,Oo=(e,a,$)=>{const s=e*e,u=$*(a*a-s)+s;return u<0?0:Math.sqrt(u)},kL=[jo,mn,oi],QL=e=>kL.find(a=>a.test(e));function kT(e){const a=QL(e);if(!a)return!1;let $=a.parse(e);return a===oi&&($=qL($)),$}const QT=(e,a)=>{const $=kT(e),s=kT(a);if(!$||!s)return nl(e,a);const u={...$};return f=>(u.red=Oo($.red,s.red,f),u.green=Oo($.green,s.green,f),u.blue=Oo($.blue,s.blue,f),u.alpha=Y_($.alpha,s.alpha,f),mn.transform(u))},zo=new Set(["none","hidden"]);function ZL(e,a){return zo.has(e)?$=>$<=0?e:a:$=>$>=1?a:e}function JL(e,a){return $=>Y_(e,a,$)}function Nu(e){return typeof e=="number"?JL:typeof e=="string"?gu(e)?nl:tt.test(e)?QT:em:Array.isArray(e)?xd:typeof e=="object"?tt.test(e)?QT:_m:nl}function xd(e,a){const $=[...e],s=$.length,u=e.map((f,r)=>Nu(f)(f,a[r]));return f=>{for(let r=0;r<s;r++)$[r]=u[r](f);return $}}function _m(e,a){const $={...e,...a},s={};for(const u in $)e[u]!==void 0&&a[u]!==void 0&&(s[u]=Nu(e[u])(e[u],a[u]));return u=>{for(const f in s)$[f]=s[f](u);return $}}function tm(e,a){const $=[],s={color:0,var:0,number:0};for(let u=0;u<a.values.length;u++){const f=a.types[u],r=e.indexes[f][s[f]],T=e.values[r]??0;$[u]=T,s[f]++}return $}const em=(e,a)=>{const $=ke.createTransformer(a),s=Ca(e),u=Ca(a);return s.indexes.var.length===u.indexes.var.length&&s.indexes.color.length===u.indexes.color.length&&s.indexes.number.length>=u.indexes.number.length?zo.has(e)&&!u.values.length||zo.has(a)&&!s.values.length?ZL(e,a):Ma(xd(tm(s,u),u.values),$):nl(e,a)};function bd(e,a,$){return typeof e=="number"&&typeof a=="number"&&typeof $=="number"?Y_(e,a,$):Nu(e)(e,a)}const nm=e=>{const a=({timestamp:$})=>e($);return{start:($=!0)=>W_.update(a,$),stop:()=>qe(a),now:()=>ct.isProcessing?ct.timestamp:Rt.now()}},Od=(e,a,$=10)=>{let s="";const u=Math.max(Math.round(a/$),2);for(let f=0;f<u;f++)s+=Math.round(e(f/(u-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},il=2e4;function Cu(e){let a=0;const $=50;let s=e.next(a);for(;!s.done&&a<il;)a+=$,s=e.next(a);return a>=il?1/0:a}function im(e,a=100,$){const s=$({...e,keyframes:[0,a]}),u=Math.min(Cu(s),il);return{type:"keyframes",ease:f=>s.next(u*f).value/a,duration:ie(u)}}const am=5;function Md(e,a,$){const s=Math.max(a-am,0);return cd($-e(s),a-s)}const X_={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Mo=.001;function $m({duration:e=X_.duration,bounce:a=X_.bounce,velocity:$=X_.velocity,mass:s=X_.mass}){let u,f,r=1-a;r=Ie(X_.minDamping,X_.maxDamping,r),e=Ie(X_.minDuration,X_.maxDuration,ie(e)),r<1?(u=h=>{const A=h*r,y=A*e,v=A-$,U=Xo(h,r),Y=Math.exp(-y);return Mo-v/U*Y},f=h=>{const y=h*r*e,v=y*$+$,U=Math.pow(r,2)*Math.pow(h,2)*e,Y=Math.exp(-y),Z=Xo(Math.pow(h,2),r);return(-u(h)+Mo>0?-1:1)*((v-U)*Y)/Z}):(u=h=>{const A=Math.exp(-h*e),y=(h-$)*e+1;return-Mo+A*y},f=h=>{const A=Math.exp(-h*e),y=($-h)*(e*e);return A*y});const T=5/e,d=sm(u,f,T);if(e=ne(e),isNaN(d))return{stiffness:X_.stiffness,damping:X_.damping,duration:e};{const h=Math.pow(d,2)*s;return{stiffness:h,damping:r*2*Math.sqrt(s*h),duration:e}}}const lm=12;function sm(e,a,$){let s=$;for(let u=1;u<lm;u++)s=s-e(s)/a(s);return s}function Xo(e,a){return e*Math.sqrt(1-a*a)}const om=["duration","bounce"],um=["stiffness","damping","mass"];function ZT(e,a){return a.some($=>e[$]!==void 0)}function rm(e){let a={velocity:X_.velocity,stiffness:X_.stiffness,damping:X_.damping,mass:X_.mass,isResolvedFromDuration:!1,...e};if(!ZT(e,um)&&ZT(e,om))if(e.visualDuration){const $=e.visualDuration,s=2*Math.PI/($*1.2),u=s*s,f=2*Ie(.05,1,1-(e.bounce||0))*Math.sqrt(u);a={...a,mass:X_.mass,stiffness:u,damping:f}}else{const $=$m(e);a={...a,...$,mass:X_.mass},a.isResolvedFromDuration=!0}return a}function al(e=X_.visualDuration,a=X_.bounce){const $=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:a}:e;let{restSpeed:s,restDelta:u}=$;const f=$.keyframes[0],r=$.keyframes[$.keyframes.length-1],T={done:!1,value:f},{stiffness:d,damping:h,mass:A,duration:y,velocity:v,isResolvedFromDuration:U}=rm({...$,velocity:-ie($.velocity||0)}),Y=v||0,Z=h/(2*Math.sqrt(d*A)),Q=r-f,k=ie(Math.sqrt(d/A)),J=Math.abs(Q)<5;s||(s=J?X_.restSpeed.granular:X_.restSpeed.default),u||(u=J?X_.restDelta.granular:X_.restDelta.default);let K;if(Z<1){const j=Xo(k,Z);K=o_=>{const f_=Math.exp(-Z*k*o_);return r-f_*((Y+Z*k*Q)/j*Math.sin(j*o_)+Q*Math.cos(j*o_))}}else if(Z===1)K=j=>r-Math.exp(-k*j)*(Q+(Y+k*Q)*j);else{const j=k*Math.sqrt(Z*Z-1);K=o_=>{const f_=Math.exp(-Z*k*o_),$_=Math.min(j*o_,300);return r-f_*((Y+Z*k*Q)*Math.sinh($_)+j*Q*Math.cosh($_))/j}}const i_={calculatedDuration:U&&y||null,next:j=>{const o_=K(j);if(U)T.done=j>=y;else{let f_=j===0?Y:0;Z<1&&(f_=j===0?ne(Y):Md(K,j,o_));const $_=Math.abs(f_)<=s,y_=Math.abs(r-o_)<=u;T.done=$_&&y_}return T.value=T.done?r:o_,T},toString:()=>{const j=Math.min(Cu(i_),il),o_=Od(f_=>i_.next(j*f_).value,j,30);return j+"ms "+o_},toTransition:()=>{}};return i_}al.applyToOptions=e=>{const a=im(e,100,al);return e.ease=a.ease,e.duration=ne(a.duration),e.type="keyframes",e};function Ko({keyframes:e,velocity:a=0,power:$=.8,timeConstant:s=325,bounceDamping:u=10,bounceStiffness:f=500,modifyTarget:r,min:T,max:d,restDelta:h=.5,restSpeed:A}){const y=e[0],v={done:!1,value:y},U=$_=>T!==void 0&&$_<T||d!==void 0&&$_>d,Y=$_=>T===void 0?d:d===void 0||Math.abs(T-$_)<Math.abs(d-$_)?T:d;let Z=$*a;const Q=y+Z,k=r===void 0?Q:r(Q);k!==Q&&(Z=k-y);const J=$_=>-Z*Math.exp(-$_/s),K=$_=>k+J($_),i_=$_=>{const y_=J($_),P_=K($_);v.done=Math.abs(y_)<=h,v.value=v.done?k:P_};let j,o_;const f_=$_=>{U(v.value)&&(j=$_,o_=al({keyframes:[v.value,Y(v.value)],velocity:Md(K,$_,v.value),damping:u,stiffness:f,restDelta:h,restSpeed:A}))};return f_(0),{calculatedDuration:null,next:$_=>{let y_=!1;return!o_&&j===void 0&&(y_=!0,i_($_),f_($_)),j!==void 0&&$_>=j?o_.next($_-j):(!y_&&i_($_),v)}}}function cm(e,a,$){const s=[],u=$||pe.mix||bd,f=e.length-1;for(let r=0;r<f;r++){let T=u(e[r],e[r+1]);if(a){const d=Array.isArray(a)?a[r]||zt:a;T=Ma(d,T)}s.push(T)}return s}function fm(e,a,{clamp:$=!0,ease:s,mixer:u}={}){const f=e.length;if(Lu(f===a.length),f===1)return()=>a[0];if(f===2&&a[0]===a[1])return()=>a[1];const r=e[0]===e[1];e[0]>e[f-1]&&(e=[...e].reverse(),a=[...a].reverse());const T=cm(a,s,u),d=T.length,h=A=>{if(r&&A<e[0])return a[0];let y=0;if(d>1)for(;y<e.length-2&&!(A<e[y+1]);y++);const v=va(e[y],e[y+1],A);return T[y](v)};return $?A=>h(Ie(e[0],e[f-1],A)):h}function Tm(e,a){const $=e[e.length-1];for(let s=1;s<=a;s++){const u=va(0,a,s);e.push(Y_($,1,u))}}function hm(e){const a=[0];return Tm(a,e.length-1),a}function dm(e,a){return e.map($=>$*a)}function Em(e,a){return e.map(()=>a||Id).splice(0,e.length-1)}function ya({duration:e=300,keyframes:a,times:$,ease:s="easeInOut"}){const u=NL(s)?s.map(XT):XT(s),f={done:!1,value:a[0]},r=dm($&&$.length===a.length?$:hm(a),e),T=fm(r,a,{ease:Array.isArray(u)?u:Em(a,u)});return{calculatedDuration:e,next:d=>(f.value=T(d),f.done=d>=e,f)}}const Am=e=>e!==null;function xu(e,{repeat:a,repeatType:$="loop"},s,u=1){const f=e.filter(Am),T=u<0||a&&$!=="loop"&&a%2===1?0:f.length-1;return!T||s===void 0?f[T]:s}const Lm={decay:Ko,inertia:Ko,tween:ya,keyframes:ya,spring:al};function Dd(e){typeof e.type=="string"&&(e.type=Lm[e.type])}class bu{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(a=>{this.resolve=a})}notifyFinished(){this.resolve()}then(a,$){return this.finished.then(a,$)}}const mm=e=>e/100;class Ou extends bu{constructor(a){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:$}=this.options;$&&$.updatedAt!==Rt.now()&&this.tick(Rt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=a,this.initAnimation(),this.play(),a.autoplay===!1&&this.pause()}initAnimation(){const{options:a}=this;Dd(a);const{type:$=ya,repeat:s=0,repeatDelay:u=0,repeatType:f,velocity:r=0}=a;let{keyframes:T}=a;const d=$||ya;d!==ya&&typeof T[0]!="number"&&(this.mixKeyframes=Ma(mm,bd(T[0],T[1])),T=[0,100]);const h=d({...a,keyframes:T});f==="mirror"&&(this.mirroredGenerator=d({...a,keyframes:[...T].reverse(),velocity:-r})),h.calculatedDuration===null&&(h.calculatedDuration=Cu(h));const{calculatedDuration:A}=h;this.calculatedDuration=A,this.resolvedDuration=A+u,this.totalDuration=this.resolvedDuration*(s+1)-u,this.generator=h}updateTime(a){const $=Math.round(a-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=$}tick(a,$=!1){const{generator:s,totalDuration:u,mixKeyframes:f,mirroredGenerator:r,resolvedDuration:T,calculatedDuration:d}=this;if(this.startTime===null)return s.next(0);const{delay:h=0,keyframes:A,repeat:y,repeatType:v,repeatDelay:U,type:Y,onUpdate:Z,finalKeyframe:Q}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,a):this.speed<0&&(this.startTime=Math.min(a-u/this.speed,this.startTime)),$?this.currentTime=a:this.updateTime(a);const k=this.currentTime-h*(this.playbackSpeed>=0?1:-1),J=this.playbackSpeed>=0?k<0:k>u;this.currentTime=Math.max(k,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let K=this.currentTime,i_=s;if(y){const $_=Math.min(this.currentTime,u)/T;let y_=Math.floor($_),P_=$_%1;!P_&&$_>=1&&(P_=1),P_===1&&y_--,y_=Math.min(y_,y+1),!!(y_%2)&&(v==="reverse"?(P_=1-P_,U&&(P_-=U/T)):v==="mirror"&&(i_=r)),K=Ie(0,1,P_)*T}const j=J?{done:!1,value:A[0]}:i_.next(K);f&&(j.value=f(j.value));let{done:o_}=j;!J&&d!==null&&(o_=this.playbackSpeed>=0?this.currentTime>=u:this.currentTime<=0);const f_=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&o_);return f_&&Y!==Ko&&(j.value=xu(A,this.options,Q,this.speed)),Z&&Z(j.value),f_&&this.finish(),j}then(a,$){return this.finished.then(a,$)}get duration(){return ie(this.calculatedDuration)}get time(){return ie(this.currentTime)}set time(a){a=ne(a),this.currentTime=a,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=a:this.driver&&(this.startTime=this.driver.now()-a/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(a){this.updateTime(Rt.now());const $=this.playbackSpeed!==a;this.playbackSpeed=a,$&&(this.time=ie(this.currentTime))}play(){if(this.isStopped)return;const{driver:a=nm,startTime:$}=this.options;this.driver||(this.driver=a(u=>this.tick(u))),this.options.onPlay?.();const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=$??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Rt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(a){return this.startTime=0,this.tick(a,!0)}attachTimeline(a){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),a.observe(this)}}function Im(e){for(let a=1;a<e.length;a++)e[a]??(e[a]=e[a-1])}const In=e=>e*180/Math.PI,qo=e=>{const a=In(Math.atan2(e[1],e[0]));return ko(a)},pm={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:qo,rotateZ:qo,skewX:e=>In(Math.atan(e[1])),skewY:e=>In(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},ko=e=>(e=e%360,e<0&&(e+=360),e),JT=qo,_h=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),th=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),ym={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:_h,scaleY:th,scale:e=>(_h(e)+th(e))/2,rotateX:e=>ko(In(Math.atan2(e[6],e[5]))),rotateY:e=>ko(In(Math.atan2(-e[2],e[0]))),rotateZ:JT,rotate:JT,skewX:e=>In(Math.atan(e[4])),skewY:e=>In(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Qo(e){return e.includes("scale")?1:0}function Zo(e,a){if(!e||e==="none")return Qo(a);const $=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,u;if($)s=ym,u=$;else{const T=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=pm,u=T}if(!u)return Qo(a);const f=s[a],r=u[1].split(",").map(gm);return typeof f=="function"?f(r):r[f]}const Rm=(e,a)=>{const{transform:$="none"}=getComputedStyle(e);return Zo($,a)};function gm(e){return parseFloat(e.trim())}const Ai=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Li=new Set(Ai),eh=e=>e===Ei||e===r_,Sm=new Set(["x","y","z"]),vm=Ai.filter(e=>!Sm.has(e));function Nm(e){const a=[];return vm.forEach($=>{const s=e.getValue($);s!==void 0&&(a.push([$,s.get()]),s.set($.startsWith("scale")?1:0))}),a}const pn={width:({x:e},{paddingLeft:a="0",paddingRight:$="0"})=>e.max-e.min-parseFloat(a)-parseFloat($),height:({y:e},{paddingTop:a="0",paddingBottom:$="0"})=>e.max-e.min-parseFloat(a)-parseFloat($),top:(e,{top:a})=>parseFloat(a),left:(e,{left:a})=>parseFloat(a),bottom:({y:e},{top:a})=>parseFloat(a)+(e.max-e.min),right:({x:e},{left:a})=>parseFloat(a)+(e.max-e.min),x:(e,{transform:a})=>Zo(a,"x"),y:(e,{transform:a})=>Zo(a,"y")};pn.translateX=pn.x;pn.translateY=pn.y;const yn=new Set;let Jo=!1,_u=!1,tu=!1;function Hd(){if(_u){const e=Array.from(yn).filter(s=>s.needsMeasurement),a=new Set(e.map(s=>s.element)),$=new Map;a.forEach(s=>{const u=Nm(s);u.length&&($.set(s,u),s.render())}),e.forEach(s=>s.measureInitialState()),a.forEach(s=>{s.render();const u=$.get(s);u&&u.forEach(([f,r])=>{s.getValue(f)?.set(r)})}),e.forEach(s=>s.measureEndState()),e.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}_u=!1,Jo=!1,yn.forEach(e=>e.complete(tu)),yn.clear()}function Ud(){yn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(_u=!0)})}function Cm(){tu=!0,Ud(),Hd(),tu=!1}class Mu{constructor(a,$,s,u,f,r=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...a],this.onComplete=$,this.name=s,this.motionValue=u,this.element=f,this.isAsync=r}scheduleResolve(){this.state="scheduled",this.isAsync?(yn.add(this),Jo||(Jo=!0,W_.read(Ud),W_.resolveKeyframes(Hd))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:a,name:$,element:s,motionValue:u}=this;if(a[0]===null){const f=u?.get(),r=a[a.length-1];if(f!==void 0)a[0]=f;else if(s&&$){const T=s.readValue($,r);T!=null&&(a[0]=T)}a[0]===void 0&&(a[0]=r),u&&f===void 0&&u.set(a[0])}Im(a)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(a=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,a),yn.delete(this)}cancel(){this.state==="scheduled"&&(yn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const xm=e=>e.startsWith("--");function bm(e,a,$){xm(a)?e.style.setProperty(a,$):e.style[a]=$}const Om=mu(()=>window.ScrollTimeline!==void 0),Mm={};function Dm(e,a){const $=mu(e);return()=>Mm[a]??$()}const Pd=Dm(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ia=([e,a,$,s])=>`cubic-bezier(${e}, ${a}, ${$}, ${s})`,nh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ia([0,.65,.55,1]),circOut:Ia([.55,0,1,.45]),backIn:Ia([.31,.01,.66,-.59]),backOut:Ia([.33,1.53,.69,.99])};function Bd(e,a){if(e)return typeof e=="function"?Pd()?Od(e,a):"ease-out":pd(e)?Ia(e):Array.isArray(e)?e.map($=>Bd($,a)||nh.easeOut):nh[e]}function Hm(e,a,$,{delay:s=0,duration:u=300,repeat:f=0,repeatType:r="loop",ease:T="easeOut",times:d}={},h=void 0){const A={[a]:$};d&&(A.offset=d);const y=Bd(T,u);Array.isArray(y)&&(A.easing=y);const v={delay:s,duration:u,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:f+1,direction:r==="reverse"?"alternate":"normal"};return h&&(v.pseudoElement=h),e.animate(A,v)}function Gd(e){return typeof e=="function"&&"applyToOptions"in e}function Um({type:e,...a}){return Gd(e)&&Pd()?e.applyToOptions(a):(a.duration??(a.duration=300),a.ease??(a.ease="easeOut"),a)}class Pm extends bu{constructor(a){if(super(),this.finishedTime=null,this.isStopped=!1,!a)return;const{element:$,name:s,keyframes:u,pseudoElement:f,allowFlatten:r=!1,finalKeyframe:T,onComplete:d}=a;this.isPseudoElement=!!f,this.allowFlatten=r,this.options=a,Lu(typeof a.type!="string");const h=Um(a);this.animation=Hm($,s,u,h,f),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!f){const A=xu(u,this.options,T,this.speed);this.updateMotionValue?this.updateMotionValue(A):bm($,s,A),this.animation.cancel()}d?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:a}=this;a==="idle"||a==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const a=this.animation.effect?.getComputedTiming?.().duration||0;return ie(Number(a))}get time(){return ie(Number(this.animation.currentTime)||0)}set time(a){this.finishedTime=null,this.animation.currentTime=ne(a)}get speed(){return this.animation.playbackRate}set speed(a){a<0&&(this.finishedTime=null),this.animation.playbackRate=a}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(a){this.animation.startTime=a}attachTimeline({timeline:a,observe:$}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,a&&Om()?(this.animation.timeline=a,zt):$(this)}}const Vd={anticipate:Ad,backInOut:Ed,circInOut:md};function Bm(e){return e in Vd}function Gm(e){typeof e.ease=="string"&&Bm(e.ease)&&(e.ease=Vd[e.ease])}const ih=10;class Vm extends Pm{constructor(a){Gm(a),Dd(a),super(a),a.startTime&&(this.startTime=a.startTime),this.options=a}updateMotionValue(a){const{motionValue:$,onUpdate:s,onComplete:u,element:f,...r}=this.options;if(!$)return;if(a!==void 0){$.set(a);return}const T=new Ou({...r,autoplay:!1}),d=ne(this.finishedTime??this.time);$.setWithVelocity(T.sample(d-ih).value,T.sample(d).value,ih),T.stop()}}const ah=(e,a)=>a==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ke.test(e)||e==="0")&&!e.startsWith("url("));function Wm(e){const a=e[0];if(e.length===1)return!0;for(let $=0;$<e.length;$++)if(e[$]!==a)return!0}function wm(e,a,$,s){const u=e[0];if(u===null)return!1;if(a==="display"||a==="visibility")return!0;const f=e[e.length-1],r=ah(u,a),T=ah(f,a);return!r||!T?!1:Wm(e)||($==="spring"||Gd($))&&s}function eu(e){e.duration=0,e.type}const Ym=new Set(["opacity","clipPath","filter","transform"]),Fm=mu(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function jm(e){const{motionValue:a,name:$,repeatDelay:s,repeatType:u,damping:f,type:r}=e;if(!(a?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=a.owner.getProps();return Fm()&&$&&Ym.has($)&&($!=="transform"||!h)&&!d&&!s&&u!=="mirror"&&f!==0&&r!=="inertia"}const zm=40;class Xm extends bu{constructor({autoplay:a=!0,delay:$=0,type:s="keyframes",repeat:u=0,repeatDelay:f=0,repeatType:r="loop",keyframes:T,name:d,motionValue:h,element:A,...y}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Rt.now();const v={autoplay:a,delay:$,type:s,repeat:u,repeatDelay:f,repeatType:r,name:d,motionValue:h,element:A,...y},U=A?.KeyframeResolver||Mu;this.keyframeResolver=new U(T,(Y,Z,Q)=>this.onKeyframesResolved(Y,Z,v,!Q),d,h,A),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(a,$,s,u){this.keyframeResolver=void 0;const{name:f,type:r,velocity:T,delay:d,isHandoff:h,onUpdate:A}=s;this.resolvedAt=Rt.now(),wm(a,f,r,T)||((pe.instantAnimations||!d)&&A?.(xu(a,s,$)),a[0]=a[a.length-1],eu(s),s.repeat=0);const v={startTime:u?this.resolvedAt?this.resolvedAt-this.createdAt>zm?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:$,...s,keyframes:a},U=!h&&jm(v)?new Vm({...v,element:v.motionValue.owner.current}):new Ou(v);U.finished.then(()=>this.notifyFinished()).catch(zt),this.pendingTimeline&&(this.stopTimeline=U.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=U}get finished(){return this._animation?this.animation.finished:this._finished}then(a,$){return this.finished.finally(a).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Cm()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(a){this.animation.time=a}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(a){this.animation.speed=a}get startTime(){return this.animation.startTime}attachTimeline(a){return this._animation?this.stopTimeline=this.animation.attachTimeline(a):this.pendingTimeline=a,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const Km=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function qm(e){const a=Km.exec(e);if(!a)return[,];const[,$,s,u]=a;return[`--${$??s}`,u]}function Wd(e,a,$=1){const[s,u]=qm(e);if(!s)return;const f=window.getComputedStyle(a).getPropertyValue(s);if(f){const r=f.trim();return od(r)?parseFloat(r):r}return gu(u)?Wd(u,a,$+1):u}function Du(e,a){return e?.[a]??e?.default??e}const wd=new Set(["width","height","top","left","right","bottom",...Ai]),km={test:e=>e==="auto",parse:e=>e},Yd=e=>a=>a.test(e),Fd=[Ei,r_,ae,Ke,WL,VL,km],$h=e=>Fd.find(Yd(e));function Qm(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||rd(e):!0}const Zm=new Set(["brightness","contrast","saturate","opacity"]);function Jm(e){const[a,$]=e.slice(0,-1).split("(");if(a==="drop-shadow")return e;const[s]=$.match(Su)||[];if(!s)return e;const u=$.replace(s,"");let f=Zm.has(a)?1:0;return s!==$&&(f*=100),a+"("+f+u+")"}const _8=/\b([a-z-]*)\(.*?\)/gu,nu={...ke,getAnimatableNone:e=>{const a=e.match(_8);return a?a.map(Jm).join(" "):e}},lh={...Ei,transform:Math.round},t8={rotate:Ke,rotateX:Ke,rotateY:Ke,rotateZ:Ke,scale:Q$,scaleX:Q$,scaleY:Q$,scaleZ:Q$,skew:Ke,skewX:Ke,skewY:Ke,distance:r_,translateX:r_,translateY:r_,translateZ:r_,x:r_,y:r_,z:r_,perspective:r_,transformPerspective:r_,opacity:Na,originX:KT,originY:KT,originZ:r_},Hu={borderWidth:r_,borderTopWidth:r_,borderRightWidth:r_,borderBottomWidth:r_,borderLeftWidth:r_,borderRadius:r_,radius:r_,borderTopLeftRadius:r_,borderTopRightRadius:r_,borderBottomRightRadius:r_,borderBottomLeftRadius:r_,width:r_,maxWidth:r_,height:r_,maxHeight:r_,top:r_,right:r_,bottom:r_,left:r_,padding:r_,paddingTop:r_,paddingRight:r_,paddingBottom:r_,paddingLeft:r_,margin:r_,marginTop:r_,marginRight:r_,marginBottom:r_,marginLeft:r_,backgroundPositionX:r_,backgroundPositionY:r_,...t8,zIndex:lh,fillOpacity:Na,strokeOpacity:Na,numOctaves:lh},e8={...Hu,color:tt,backgroundColor:tt,outlineColor:tt,fill:tt,stroke:tt,borderColor:tt,borderTopColor:tt,borderRightColor:tt,borderBottomColor:tt,borderLeftColor:tt,filter:nu,WebkitFilter:nu},jd=e=>e8[e];function zd(e,a){let $=jd(e);return $!==nu&&($=ke),$.getAnimatableNone?$.getAnimatableNone(a):void 0}const n8=new Set(["auto","none","0"]);function i8(e,a,$){let s=0,u;for(;s<e.length&&!u;){const f=e[s];typeof f=="string"&&!n8.has(f)&&Ca(f).values.length&&(u=e[s]),s++}if(u&&$)for(const f of a)e[f]=zd($,u)}class a8 extends Mu{constructor(a,$,s,u,f){super(a,$,s,u,f,!0)}readKeyframes(){const{unresolvedKeyframes:a,element:$,name:s}=this;if(!$||!$.current)return;super.readKeyframes();for(let d=0;d<a.length;d++){let h=a[d];if(typeof h=="string"&&(h=h.trim(),gu(h))){const A=Wd(h,$.current);A!==void 0&&(a[d]=A),d===a.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!wd.has(s)||a.length!==2)return;const[u,f]=a,r=$h(u),T=$h(f);if(r!==T)if(eh(r)&&eh(T))for(let d=0;d<a.length;d++){const h=a[d];typeof h=="string"&&(a[d]=parseFloat(h))}else pn[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:a,name:$}=this,s=[];for(let u=0;u<a.length;u++)(a[u]===null||Qm(a[u]))&&s.push(u);s.length&&i8(a,s,$)}measureInitialState(){const{element:a,unresolvedKeyframes:$,name:s}=this;if(!a||!a.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=pn[s](a.measureViewportBox(),window.getComputedStyle(a.current)),$[0]=this.measuredOrigin;const u=$[$.length-1];u!==void 0&&a.getValue(s,u).jump(u,!1)}measureEndState(){const{element:a,name:$,unresolvedKeyframes:s}=this;if(!a||!a.current)return;const u=a.getValue($);u&&u.jump(this.measuredOrigin,!1);const f=s.length-1,r=s[f];s[f]=pn[$](a.measureViewportBox(),window.getComputedStyle(a.current)),r!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=r),this.removedTransforms?.length&&this.removedTransforms.forEach(([T,d])=>{a.getValue(T).set(d)}),this.resolveNoneKeyframes()}}function $8(e,a,$){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let s=document;const u=$?.[e]??s.querySelectorAll(e);return u?Array.from(u):[]}return Array.from(e)}const Xd=(e,a)=>a&&typeof e=="number"?a.transform(e):e;function l8(e){return ud(e)&&"offsetHeight"in e}const sh=30,s8=e=>!isNaN(parseFloat(e));class o8{constructor(a,$={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{const u=Rt.now();if(this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const f of this.dependents)f.dirty()},this.hasAnimated=!1,this.setCurrent(a),this.owner=$.owner}setCurrent(a){this.current=a,this.updatedAt=Rt.now(),this.canTrackVelocity===null&&a!==void 0&&(this.canTrackVelocity=s8(this.current))}setPrevFrameValue(a=this.current){this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt}onChange(a){return this.on("change",a)}on(a,$){this.events[a]||(this.events[a]=new Iu);const s=this.events[a].add($);return a==="change"?()=>{s(),W_.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const a in this.events)this.events[a].clear()}attach(a,$){this.passiveEffect=a,this.stopPassiveEffect=$}set(a){this.passiveEffect?this.passiveEffect(a,this.updateAndNotify):this.updateAndNotify(a)}setWithVelocity(a,$,s){this.set($),this.prev=void 0,this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt-s}jump(a,$=!0){this.updateAndNotify(a),this.prev=a,this.prevUpdatedAt=this.prevFrameValue=void 0,$&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(a){this.dependents||(this.dependents=new Set),this.dependents.add(a)}removeDependent(a){this.dependents&&this.dependents.delete(a)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const a=Rt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||a-this.updatedAt>sh)return 0;const $=Math.min(this.updatedAt-this.prevUpdatedAt,sh);return cd(parseFloat(this.current)-parseFloat(this.prevFrameValue),$)}start(a){return this.stop(),new Promise($=>{this.hasAnimated=!0,this.animation=a($),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function hi(e,a){return new o8(e,a)}const{schedule:Uu}=yd(queueMicrotask,!1),Qt={x:!1,y:!1};function Kd(){return Qt.x||Qt.y}function u8(e){return e==="x"||e==="y"?Qt[e]?null:(Qt[e]=!0,()=>{Qt[e]=!1}):Qt.x||Qt.y?null:(Qt.x=Qt.y=!0,()=>{Qt.x=Qt.y=!1})}function qd(e,a){const $=$8(e),s=new AbortController,u={passive:!0,...a,signal:s.signal};return[$,u,()=>s.abort()]}function oh(e){return!(e.pointerType==="touch"||Kd())}function r8(e,a,$={}){const[s,u,f]=qd(e,$),r=T=>{if(!oh(T))return;const{target:d}=T,h=a(d,T);if(typeof h!="function"||!d)return;const A=y=>{oh(y)&&(h(y),d.removeEventListener("pointerleave",A))};d.addEventListener("pointerleave",A,u)};return s.forEach(T=>{T.addEventListener("pointerenter",r,u)}),f}const kd=(e,a)=>a?e===a?!0:kd(e,a.parentElement):!1,Pu=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,c8=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function f8(e){return c8.has(e.tagName)||e.tabIndex!==-1}const _l=new WeakSet;function uh(e){return a=>{a.key==="Enter"&&e(a)}}function Do(e,a){e.dispatchEvent(new PointerEvent("pointer"+a,{isPrimary:!0,bubbles:!0}))}const T8=(e,a)=>{const $=e.currentTarget;if(!$)return;const s=uh(()=>{if(_l.has($))return;Do($,"down");const u=uh(()=>{Do($,"up")}),f=()=>Do($,"cancel");$.addEventListener("keyup",u,a),$.addEventListener("blur",f,a)});$.addEventListener("keydown",s,a),$.addEventListener("blur",()=>$.removeEventListener("keydown",s),a)};function rh(e){return Pu(e)&&!Kd()}function h8(e,a,$={}){const[s,u,f]=qd(e,$),r=T=>{const d=T.currentTarget;if(!rh(T))return;_l.add(d);const h=a(d,T),A=(U,Y)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",v),_l.has(d)&&_l.delete(d),rh(U)&&typeof h=="function"&&h(U,{success:Y})},y=U=>{A(U,d===window||d===document||$.useGlobalTarget||kd(d,U.target))},v=U=>{A(U,!1)};window.addEventListener("pointerup",y,u),window.addEventListener("pointercancel",v,u)};return s.forEach(T=>{($.useGlobalTarget?window:T).addEventListener("pointerdown",r,u),l8(T)&&(T.addEventListener("focus",h=>T8(h,u)),!f8(T)&&!T.hasAttribute("tabindex")&&(T.tabIndex=0))}),f}function Qd(e){return ud(e)&&"ownerSVGElement"in e}function d8(e){return Qd(e)&&e.tagName==="svg"}const dt=e=>!!(e&&e.getVelocity),E8=[...Fd,tt,ke],A8=e=>E8.find(Yd(e)),Zd=t_.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function L8(e=!0){const a=t_.useContext(du);if(a===null)return[!0,null];const{isPresent:$,onExitComplete:s,register:u}=a,f=t_.useId();t_.useEffect(()=>{if(e)return u(f)},[e]);const r=t_.useCallback(()=>e&&s&&s(f),[f,s,e]);return!$&&s?[!1,r]:[!0]}const Jd=t_.createContext({strict:!1}),ch={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},di={};for(const e in ch)di[e]={isEnabled:a=>ch[e].some($=>!!a[$])};function m8(e){for(const a in e)di[a]={...di[a],...e[a]}}const I8=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function $l(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||I8.has(e)}let _0=e=>!$l(e);function p8(e){typeof e=="function"&&(_0=a=>a.startsWith("on")?!$l(a):e(a))}try{p8(require("@emotion/is-prop-valid").default)}catch{}function y8(e,a,$){const s={};for(const u in e)u==="values"&&typeof e.values=="object"||(_0(u)||$===!0&&$l(u)||!a&&!$l(u)||e.draggable&&u.startsWith("onDrag"))&&(s[u]=e[u]);return s}const sl=t_.createContext({});function ol(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function xa(e){return typeof e=="string"||Array.isArray(e)}const Bu=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Gu=["initial",...Bu];function ul(e){return ol(e.animate)||Gu.some(a=>xa(e[a]))}function t0(e){return!!(ul(e)||e.variants)}function R8(e,a){if(ul(e)){const{initial:$,animate:s}=e;return{initial:$===!1||xa($)?$:void 0,animate:xa(s)?s:void 0}}return e.inherit!==!1?a:{}}function g8(e){const{initial:a,animate:$}=R8(e,t_.useContext(sl));return t_.useMemo(()=>({initial:a,animate:$}),[fh(a),fh($)])}function fh(e){return Array.isArray(e)?e.join(" "):e}const ba={};function S8(e){for(const a in e)ba[a]=e[a],Ru(a)&&(ba[a].isCSSVariable=!0)}function e0(e,{layout:a,layoutId:$}){return Li.has(e)||e.startsWith("origin")||(a||$!==void 0)&&(!!ba[e]||e==="opacity")}const v8={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},N8=Ai.length;function C8(e,a,$){let s="",u=!0;for(let f=0;f<N8;f++){const r=Ai[f],T=e[r];if(T===void 0)continue;let d=!0;if(typeof T=="number"?d=T===(r.startsWith("scale")?1:0):d=parseFloat(T)===0,!d||$){const h=Xd(T,Hu[r]);if(!d){u=!1;const A=v8[r]||r;s+=`${A}(${h}) `}$&&(a[r]=h)}}return s=s.trim(),$?s=$(a,u?"":s):u&&(s="none"),s}function Vu(e,a,$){const{style:s,vars:u,transformOrigin:f}=e;let r=!1,T=!1;for(const d in a){const h=a[d];if(Li.has(d)){r=!0;continue}else if(Ru(d)){u[d]=h;continue}else{const A=Xd(h,Hu[d]);d.startsWith("origin")?(T=!0,f[d]=A):s[d]=A}}if(a.transform||(r||$?s.transform=C8(a,e.transform,$):s.transform&&(s.transform="none")),T){const{originX:d="50%",originY:h="50%",originZ:A=0}=f;s.transformOrigin=`${d} ${h} ${A}`}}const Wu=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function n0(e,a,$){for(const s in a)!dt(a[s])&&!e0(s,$)&&(e[s]=a[s])}function x8({transformTemplate:e},a){return t_.useMemo(()=>{const $=Wu();return Vu($,a,e),Object.assign({},$.vars,$.style)},[a])}function b8(e,a){const $=e.style||{},s={};return n0(s,$,e),Object.assign(s,x8(e,a)),s}function O8(e,a){const $={},s=b8(e,a);return e.drag&&e.dragListener!==!1&&($.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&($.tabIndex=0),$.style=s,$}const M8={offset:"stroke-dashoffset",array:"stroke-dasharray"},D8={offset:"strokeDashoffset",array:"strokeDasharray"};function H8(e,a,$=1,s=0,u=!0){e.pathLength=1;const f=u?M8:D8;e[f.offset]=r_.transform(-s);const r=r_.transform(a),T=r_.transform($);e[f.array]=`${r} ${T}`}function i0(e,{attrX:a,attrY:$,attrScale:s,pathLength:u,pathSpacing:f=1,pathOffset:r=0,...T},d,h,A){if(Vu(e,T,h),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:y,style:v}=e;y.transform&&(v.transform=y.transform,delete y.transform),(v.transform||y.transformOrigin)&&(v.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),v.transform&&(v.transformBox=A?.transformBox??"fill-box",delete y.transformBox),a!==void 0&&(y.x=a),$!==void 0&&(y.y=$),s!==void 0&&(y.scale=s),u!==void 0&&H8(y,u,f,r,!1)}const a0=()=>({...Wu(),attrs:{}}),$0=e=>typeof e=="string"&&e.toLowerCase()==="svg";function U8(e,a,$,s){const u=t_.useMemo(()=>{const f=a0();return i0(f,a,$0(s),e.transformTemplate,e.style),{...f.attrs,style:{...f.style}}},[a]);if(e.style){const f={};n0(f,e.style,e),u.style={...f,...u.style}}return u}const P8=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function wu(e){return typeof e!="string"||e.includes("-")?!1:!!(P8.indexOf(e)>-1||/[A-Z]/u.test(e))}function B8(e,a,$,{latestValues:s},u,f=!1){const T=(wu(e)?U8:O8)(a,s,u,e),d=y8(a,typeof e=="string",f),h=e!==t_.Fragment?{...d,...T,ref:$}:{},{children:A}=a,y=t_.useMemo(()=>dt(A)?A.get():A,[A]);return t_.createElement(e,{...h,children:y})}function Th(e){const a=[{},{}];return e?.values.forEach(($,s)=>{a[0][s]=$.get(),a[1][s]=$.getVelocity()}),a}function Yu(e,a,$,s){if(typeof a=="function"){const[u,f]=Th(s);a=a($!==void 0?$:e.custom,u,f)}if(typeof a=="string"&&(a=e.variants&&e.variants[a]),typeof a=="function"){const[u,f]=Th(s);a=a($!==void 0?$:e.custom,u,f)}return a}function tl(e){return dt(e)?e.get():e}function G8({scrapeMotionValuesFromProps:e,createRenderState:a},$,s,u){return{latestValues:V8($,s,u,e),renderState:a()}}function V8(e,a,$,s){const u={},f=s(e,{});for(const v in f)u[v]=tl(f[v]);let{initial:r,animate:T}=e;const d=ul(e),h=t0(e);a&&h&&!d&&e.inherit!==!1&&(r===void 0&&(r=a.initial),T===void 0&&(T=a.animate));let A=$?$.initial===!1:!1;A=A||r===!1;const y=A?T:r;if(y&&typeof y!="boolean"&&!ol(y)){const v=Array.isArray(y)?y:[y];for(let U=0;U<v.length;U++){const Y=Yu(e,v[U]);if(Y){const{transitionEnd:Z,transition:Q,...k}=Y;for(const J in k){let K=k[J];if(Array.isArray(K)){const i_=A?K.length-1:0;K=K[i_]}K!==null&&(u[J]=K)}for(const J in Z)u[J]=Z[J]}}}return u}const l0=e=>(a,$)=>{const s=t_.useContext(sl),u=t_.useContext(du),f=()=>G8(e,a,s,u);return $?f():mL(f)};function Fu(e,a,$){const{style:s}=e,u={};for(const f in s)(dt(s[f])||a.style&&dt(a.style[f])||e0(f,e)||$?.getValue(f)?.liveStyle!==void 0)&&(u[f]=s[f]);return u}const W8=l0({scrapeMotionValuesFromProps:Fu,createRenderState:Wu});function s0(e,a,$){const s=Fu(e,a,$);for(const u in e)if(dt(e[u])||dt(a[u])){const f=Ai.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;s[f]=e[u]}return s}const w8=l0({scrapeMotionValuesFromProps:s0,createRenderState:a0}),Y8=Symbol.for("motionComponentSymbol");function ui(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function F8(e,a,$){return t_.useCallback(s=>{s&&e.onMount&&e.onMount(s),a&&(s?a.mount(s):a.unmount()),$&&(typeof $=="function"?$(s):ui($)&&($.current=s))},[a])}const ju=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),j8="framerAppearId",o0="data-"+ju(j8),u0=t_.createContext({});function z8(e,a,$,s,u){const{visualElement:f}=t_.useContext(sl),r=t_.useContext(Jd),T=t_.useContext(du),d=t_.useContext(Zd).reducedMotion,h=t_.useRef(null);s=s||r.renderer,!h.current&&s&&(h.current=s(e,{visualState:a,parent:f,props:$,presenceContext:T,blockInitialAnimation:T?T.initial===!1:!1,reducedMotionConfig:d}));const A=h.current,y=t_.useContext(u0);A&&!A.projection&&u&&(A.type==="html"||A.type==="svg")&&X8(h.current,$,u,y);const v=t_.useRef(!1);t_.useInsertionEffect(()=>{A&&v.current&&A.update($,T)});const U=$[o0],Y=t_.useRef(!!U&&!window.MotionHandoffIsComplete?.(U)&&window.MotionHasOptimisedAnimation?.(U));return IL(()=>{A&&(v.current=!0,window.MotionIsMounted=!0,A.updateFeatures(),A.scheduleRenderMicrotask(),Y.current&&A.animationState&&A.animationState.animateChanges())}),t_.useEffect(()=>{A&&(!Y.current&&A.animationState&&A.animationState.animateChanges(),Y.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(U)}),Y.current=!1),A.enteringChildren=void 0)}),A}function X8(e,a,$,s){const{layoutId:u,layout:f,drag:r,dragConstraints:T,layoutScroll:d,layoutRoot:h,layoutCrossfade:A}=a;e.projection=new $(e.latestValues,a["data-framer-portal-id"]?void 0:r0(e.parent)),e.projection.setOptions({layoutId:u,layout:f,alwaysMeasureLayout:!!r||T&&ui(T),visualElement:e,animationType:typeof f=="string"?f:"both",initialPromotionConfig:s,crossfade:A,layoutScroll:d,layoutRoot:h})}function r0(e){if(e)return e.options.allowProjection!==!1?e.projection:r0(e.parent)}function Ho(e,{forwardMotionProps:a=!1}={},$,s){$&&m8($);const u=wu(e)?w8:W8;function f(T,d){let h;const A={...t_.useContext(Zd),...T,layoutId:K8(T)},{isStatic:y}=A,v=g8(T),U=u(T,y);if(!y&&hu){q8();const Y=k8(A);h=Y.MeasureLayout,v.visualElement=z8(e,U,A,s,Y.ProjectionNode)}return b.jsxs(sl.Provider,{value:v,children:[h&&v.visualElement?b.jsx(h,{visualElement:v.visualElement,...A}):null,B8(e,T,F8(U,v.visualElement,d),U,y,a)]})}f.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const r=t_.forwardRef(f);return r[Y8]=e,r}function K8({layoutId:e}){const a=t_.useContext(sd).id;return a&&e!==void 0?a+"-"+e:e}function q8(e,a){t_.useContext(Jd).strict}function k8(e){const{drag:a,layout:$}=di;if(!a&&!$)return{};const s={...a,...$};return{MeasureLayout:a?.isEnabled(e)||$?.isEnabled(e)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function Q8(e,a){if(typeof Proxy>"u")return Ho;const $=new Map,s=(f,r)=>Ho(f,r,e,a),u=(f,r)=>s(f,r);return new Proxy(u,{get:(f,r)=>r==="create"?s:($.has(r)||$.set(r,Ho(r,void 0,e,a)),$.get(r))})}function c0({top:e,left:a,right:$,bottom:s}){return{x:{min:a,max:$},y:{min:e,max:s}}}function Z8({x:e,y:a}){return{top:a.min,right:e.max,bottom:a.max,left:e.min}}function J8(e,a){if(!a)return e;const $=a({x:e.left,y:e.top}),s=a({x:e.right,y:e.bottom});return{top:$.y,left:$.x,bottom:s.y,right:s.x}}function Uo(e){return e===void 0||e===1}function iu({scale:e,scaleX:a,scaleY:$}){return!Uo(e)||!Uo(a)||!Uo($)}function Ln(e){return iu(e)||f0(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function f0(e){return hh(e.x)||hh(e.y)}function hh(e){return e&&e!=="0%"}function ll(e,a,$){const s=e-$,u=a*s;return $+u}function dh(e,a,$,s,u){return u!==void 0&&(e=ll(e,u,s)),ll(e,$,s)+a}function au(e,a=0,$=1,s,u){e.min=dh(e.min,a,$,s,u),e.max=dh(e.max,a,$,s,u)}function T0(e,{x:a,y:$}){au(e.x,a.translate,a.scale,a.originPoint),au(e.y,$.translate,$.scale,$.originPoint)}const Eh=.999999999999,Ah=1.0000000000001;function _1(e,a,$,s=!1){const u=$.length;if(!u)return;a.x=a.y=1;let f,r;for(let T=0;T<u;T++){f=$[T],r=f.projectionDelta;const{visualElement:d}=f.options;d&&d.props.style&&d.props.style.display==="contents"||(s&&f.options.layoutScroll&&f.scroll&&f!==f.root&&ci(e,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),r&&(a.x*=r.x.scale,a.y*=r.y.scale,T0(e,r)),s&&Ln(f.latestValues)&&ci(e,f.latestValues))}a.x<Ah&&a.x>Eh&&(a.x=1),a.y<Ah&&a.y>Eh&&(a.y=1)}function ri(e,a){e.min=e.min+a,e.max=e.max+a}function Lh(e,a,$,s,u=.5){const f=Y_(e.min,e.max,u);au(e,a,$,f,s)}function ci(e,a){Lh(e.x,a.x,a.scaleX,a.scale,a.originX),Lh(e.y,a.y,a.scaleY,a.scale,a.originY)}function h0(e,a){return c0(J8(e.getBoundingClientRect(),a))}function t1(e,a,$){const s=h0(e,$),{scroll:u}=a;return u&&(ri(s.x,u.offset.x),ri(s.y,u.offset.y)),s}const mh=()=>({translate:0,scale:1,origin:0,originPoint:0}),fi=()=>({x:mh(),y:mh()}),Ih=()=>({min:0,max:0}),Q_=()=>({x:Ih(),y:Ih()}),$u={current:null},d0={current:!1};function e1(){if(d0.current=!0,!!hu)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),a=()=>$u.current=e.matches;e.addEventListener("change",a),a()}else $u.current=!1}const n1=new WeakMap;function i1(e,a,$){for(const s in a){const u=a[s],f=$[s];if(dt(u))e.addValue(s,u);else if(dt(f))e.addValue(s,hi(u,{owner:e}));else if(f!==u)if(e.hasValue(s)){const r=e.getValue(s);r.liveStyle===!0?r.jump(u):r.hasAnimated||r.set(u)}else{const r=e.getStaticValue(s);e.addValue(s,hi(r!==void 0?r:u,{owner:e}))}}for(const s in $)a[s]===void 0&&e.removeValue(s);return a}const ph=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class a1{scrapeMotionValuesFromProps(a,$,s){return{}}constructor({parent:a,props:$,presenceContext:s,reducedMotionConfig:u,blockInitialAnimation:f,visualState:r},T={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Mu,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=Rt.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,W_.render(this.render,!1,!0))};const{latestValues:d,renderState:h}=r;this.latestValues=d,this.baseTarget={...d},this.initialValues=$.initial?{...d}:{},this.renderState=h,this.parent=a,this.props=$,this.presenceContext=s,this.depth=a?a.depth+1:0,this.reducedMotionConfig=u,this.options=T,this.blockInitialAnimation=!!f,this.isControllingVariants=ul($),this.isVariantNode=t0($),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(a&&a.current);const{willChange:A,...y}=this.scrapeMotionValuesFromProps($,{},this);for(const v in y){const U=y[v];d[v]!==void 0&&dt(U)&&U.set(d[v])}}mount(a){this.current=a,n1.set(a,this),this.projection&&!this.projection.instance&&this.projection.mount(a),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(($,s)=>this.bindToMotionValue(s,$)),d0.current||e1(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:$u.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),qe(this.notifyUpdate),qe(this.render),this.valueSubscriptions.forEach(a=>a()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const a in this.events)this.events[a].clear();for(const a in this.features){const $=this.features[a];$&&($.unmount(),$.isMounted=!1)}this.current=null}addChild(a){this.children.add(a),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(a)}removeChild(a){this.children.delete(a),this.enteringChildren&&this.enteringChildren.delete(a)}bindToMotionValue(a,$){this.valueSubscriptions.has(a)&&this.valueSubscriptions.get(a)();const s=Li.has(a);s&&this.onBindTransform&&this.onBindTransform();const u=$.on("change",r=>{this.latestValues[a]=r,this.props.onUpdate&&W_.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,a,$)),this.valueSubscriptions.set(a,()=>{u(),f&&f(),$.owner&&$.stop()})}sortNodePosition(a){return!this.current||!this.sortInstanceNodePosition||this.type!==a.type?0:this.sortInstanceNodePosition(this.current,a.current)}updateFeatures(){let a="animation";for(a in di){const $=di[a];if(!$)continue;const{isEnabled:s,Feature:u}=$;if(!this.features[a]&&u&&s(this.props)&&(this.features[a]=new u(this)),this.features[a]){const f=this.features[a];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Q_()}getStaticValue(a){return this.latestValues[a]}setStaticValue(a,$){this.latestValues[a]=$}update(a,$){(a.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=a,this.prevPresenceContext=this.presenceContext,this.presenceContext=$;for(let s=0;s<ph.length;s++){const u=ph[s];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const f="on"+u,r=a[f];r&&(this.propEventSubscriptions[u]=this.on(u,r))}this.prevMotionValues=i1(this,this.scrapeMotionValuesFromProps(a,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(a){return this.props.variants?this.props.variants[a]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(a){const $=this.getClosestVariantNode();if($)return $.variantChildren&&$.variantChildren.add(a),()=>$.variantChildren.delete(a)}addValue(a,$){const s=this.values.get(a);$!==s&&(s&&this.removeValue(a),this.bindToMotionValue(a,$),this.values.set(a,$),this.latestValues[a]=$.get())}removeValue(a){this.values.delete(a);const $=this.valueSubscriptions.get(a);$&&($(),this.valueSubscriptions.delete(a)),delete this.latestValues[a],this.removeValueFromRenderState(a,this.renderState)}hasValue(a){return this.values.has(a)}getValue(a,$){if(this.props.values&&this.props.values[a])return this.props.values[a];let s=this.values.get(a);return s===void 0&&$!==void 0&&(s=hi($===null?void 0:$,{owner:this}),this.addValue(a,s)),s}readValue(a,$){let s=this.latestValues[a]!==void 0||!this.current?this.latestValues[a]:this.getBaseTargetFromProps(this.props,a)??this.readValueFromInstance(this.current,a,this.options);return s!=null&&(typeof s=="string"&&(od(s)||rd(s))?s=parseFloat(s):!A8(s)&&ke.test($)&&(s=zd(a,$)),this.setBaseTarget(a,dt(s)?s.get():s)),dt(s)?s.get():s}setBaseTarget(a,$){this.baseTarget[a]=$}getBaseTarget(a){const{initial:$}=this.props;let s;if(typeof $=="string"||typeof $=="object"){const f=Yu(this.props,$,this.presenceContext?.custom);f&&(s=f[a])}if($&&s!==void 0)return s;const u=this.getBaseTargetFromProps(this.props,a);return u!==void 0&&!dt(u)?u:this.initialValues[a]!==void 0&&s===void 0?void 0:this.baseTarget[a]}on(a,$){return this.events[a]||(this.events[a]=new Iu),this.events[a].add($)}notify(a,...$){this.events[a]&&this.events[a].notify(...$)}scheduleRenderMicrotask(){Uu.render(this.render)}}class E0 extends a1{constructor(){super(...arguments),this.KeyframeResolver=a8}sortInstanceNodePosition(a,$){return a.compareDocumentPosition($)&2?1:-1}getBaseTargetFromProps(a,$){return a.style?a.style[$]:void 0}removeValueFromRenderState(a,{vars:$,style:s}){delete $[a],delete s[a]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:a}=this.props;dt(a)&&(this.childSubscription=a.on("change",$=>{this.current&&(this.current.textContent=`${$}`)}))}}function A0(e,{style:a,vars:$},s,u){const f=e.style;let r;for(r in a)f[r]=a[r];u?.applyProjectionStyles(f,s);for(r in $)f.setProperty(r,$[r])}function $1(e){return window.getComputedStyle(e)}class l1 extends E0{constructor(){super(...arguments),this.type="html",this.renderInstance=A0}readValueFromInstance(a,$){if(Li.has($))return this.projection?.isProjecting?Qo($):Rm(a,$);{const s=$1(a),u=(Ru($)?s.getPropertyValue($):s[$])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(a,{transformPagePoint:$}){return h0(a,$)}build(a,$,s){Vu(a,$,s.transformTemplate)}scrapeMotionValuesFromProps(a,$,s){return Fu(a,$,s)}}const L0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function s1(e,a,$,s){A0(e,a,void 0,s);for(const u in a.attrs)e.setAttribute(L0.has(u)?u:ju(u),a.attrs[u])}class o1 extends E0{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Q_}getBaseTargetFromProps(a,$){return a[$]}readValueFromInstance(a,$){if(Li.has($)){const s=jd($);return s&&s.default||0}return $=L0.has($)?$:ju($),a.getAttribute($)}scrapeMotionValuesFromProps(a,$,s){return s0(a,$,s)}build(a,$,s){i0(a,$,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(a,$,s,u){s1(a,$,s,u)}mount(a){this.isSVGTag=$0(a.tagName),super.mount(a)}}const u1=(e,a)=>wu(e)?new o1(a):new l1(a,{allowProjection:e!==t_.Fragment});function Ti(e,a,$){const s=e.getProps();return Yu(s,a,$!==void 0?$:s.custom,e)}const lu=e=>Array.isArray(e);function r1(e,a,$){e.hasValue(a)?e.getValue(a).set($):e.addValue(a,hi($))}function c1(e){return lu(e)?e[e.length-1]||0:e}function f1(e,a){const $=Ti(e,a);let{transitionEnd:s={},transition:u={},...f}=$||{};f={...f,...s};for(const r in f){const T=c1(f[r]);r1(e,r,T)}}function T1(e){return!!(dt(e)&&e.add)}function su(e,a){const $=e.getValue("willChange");if(T1($))return $.add(a);if(!$&&pe.WillChange){const s=new pe.WillChange("auto");e.addValue("willChange",s),s.add(a)}}function m0(e){return e.props[o0]}const h1=e=>e!==null;function d1(e,{repeat:a,repeatType:$="loop"},s){const u=e.filter(h1),f=a&&$!=="loop"&&a%2===1?0:u.length-1;return u[f]}const E1={type:"spring",stiffness:500,damping:25,restSpeed:10},A1=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),L1={type:"keyframes",duration:.8},m1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},I1=(e,{keyframes:a})=>a.length>2?L1:Li.has(e)?e.startsWith("scale")?A1(a[1]):E1:m1;function p1({when:e,delay:a,delayChildren:$,staggerChildren:s,staggerDirection:u,repeat:f,repeatType:r,repeatDelay:T,from:d,elapsed:h,...A}){return!!Object.keys(A).length}const zu=(e,a,$,s={},u,f)=>r=>{const T=Du(s,e)||{},d=T.delay||s.delay||0;let{elapsed:h=0}=s;h=h-ne(d);const A={keyframes:Array.isArray($)?$:[null,$],ease:"easeOut",velocity:a.getVelocity(),...T,delay:-h,onUpdate:v=>{a.set(v),T.onUpdate&&T.onUpdate(v)},onComplete:()=>{r(),T.onComplete&&T.onComplete()},name:e,motionValue:a,element:f?void 0:u};p1(T)||Object.assign(A,I1(e,A)),A.duration&&(A.duration=ne(A.duration)),A.repeatDelay&&(A.repeatDelay=ne(A.repeatDelay)),A.from!==void 0&&(A.keyframes[0]=A.from);let y=!1;if((A.type===!1||A.duration===0&&!A.repeatDelay)&&(eu(A),A.delay===0&&(y=!0)),(pe.instantAnimations||pe.skipAnimations)&&(y=!0,eu(A),A.delay=0),A.allowFlatten=!T.type&&!T.ease,y&&!f&&a.get()!==void 0){const v=d1(A.keyframes,T);if(v!==void 0){W_.update(()=>{A.onUpdate(v),A.onComplete()});return}}return T.isSync?new Ou(A):new Xm(A)};function y1({protectedKeys:e,needsAnimating:a},$){const s=e.hasOwnProperty($)&&a[$]!==!0;return a[$]=!1,s}function I0(e,a,{delay:$=0,transitionOverride:s,type:u}={}){let{transition:f=e.getDefaultTransition(),transitionEnd:r,...T}=a;s&&(f=s);const d=[],h=u&&e.animationState&&e.animationState.getState()[u];for(const A in T){const y=e.getValue(A,e.latestValues[A]??null),v=T[A];if(v===void 0||h&&y1(h,A))continue;const U={delay:$,...Du(f||{},A)},Y=y.get();if(Y!==void 0&&!y.isAnimating&&!Array.isArray(v)&&v===Y&&!U.velocity)continue;let Z=!1;if(window.MotionHandoffAnimation){const k=m0(e);if(k){const J=window.MotionHandoffAnimation(k,A,W_);J!==null&&(U.startTime=J,Z=!0)}}su(e,A),y.start(zu(A,y,v,e.shouldReduceMotion&&wd.has(A)?{type:!1}:U,e,Z));const Q=y.animation;Q&&d.push(Q)}return r&&Promise.all(d).then(()=>{W_.update(()=>{r&&f1(e,r)})}),d}function p0(e,a,$,s=0,u=1){const f=Array.from(e).sort((h,A)=>h.sortNodePosition(A)).indexOf(a),r=e.size,T=(r-1)*s;return typeof $=="function"?$(f,r):u===1?f*s:T-f*s}function ou(e,a,$={}){const s=Ti(e,a,$.type==="exit"?e.presenceContext?.custom:void 0);let{transition:u=e.getDefaultTransition()||{}}=s||{};$.transitionOverride&&(u=$.transitionOverride);const f=s?()=>Promise.all(I0(e,s,$)):()=>Promise.resolve(),r=e.variantChildren&&e.variantChildren.size?(d=0)=>{const{delayChildren:h=0,staggerChildren:A,staggerDirection:y}=u;return R1(e,a,d,h,A,y,$)}:()=>Promise.resolve(),{when:T}=u;if(T){const[d,h]=T==="beforeChildren"?[f,r]:[r,f];return d().then(()=>h())}else return Promise.all([f(),r($.delay)])}function R1(e,a,$=0,s=0,u=0,f=1,r){const T=[];for(const d of e.variantChildren)d.notify("AnimationStart",a),T.push(ou(d,a,{...r,delay:$+(typeof s=="function"?0:s)+p0(e.variantChildren,d,s,u,f)}).then(()=>d.notify("AnimationComplete",a)));return Promise.all(T)}function g1(e,a,$={}){e.notify("AnimationStart",a);let s;if(Array.isArray(a)){const u=a.map(f=>ou(e,f,$));s=Promise.all(u)}else if(typeof a=="string")s=ou(e,a,$);else{const u=typeof a=="function"?Ti(e,a,$.custom):a;s=Promise.all(I0(e,u,$))}return s.then(()=>{e.notify("AnimationComplete",a)})}function y0(e,a){if(!Array.isArray(a))return!1;const $=a.length;if($!==e.length)return!1;for(let s=0;s<$;s++)if(a[s]!==e[s])return!1;return!0}const S1=Gu.length;function R0(e){if(!e)return;if(!e.isControllingVariants){const $=e.parent?R0(e.parent)||{}:{};return e.props.initial!==void 0&&($.initial=e.props.initial),$}const a={};for(let $=0;$<S1;$++){const s=Gu[$],u=e.props[s];(xa(u)||u===!1)&&(a[s]=u)}return a}const v1=[...Bu].reverse(),N1=Bu.length;function C1(e){return a=>Promise.all(a.map(({animation:$,options:s})=>g1(e,$,s)))}function x1(e){let a=C1(e),$=yh(),s=!0;const u=d=>(h,A)=>{const y=Ti(e,A,d==="exit"?e.presenceContext?.custom:void 0);if(y){const{transition:v,transitionEnd:U,...Y}=y;h={...h,...Y,...U}}return h};function f(d){a=d(e)}function r(d){const{props:h}=e,A=R0(e.parent)||{},y=[],v=new Set;let U={},Y=1/0;for(let Q=0;Q<N1;Q++){const k=v1[Q],J=$[k],K=h[k]!==void 0?h[k]:A[k],i_=xa(K),j=k===d?J.isActive:null;j===!1&&(Y=Q);let o_=K===A[k]&&K!==h[k]&&i_;if(o_&&s&&e.manuallyAnimateOnMount&&(o_=!1),J.protectedKeys={...U},!J.isActive&&j===null||!K&&!J.prevProp||ol(K)||typeof K=="boolean")continue;const f_=b1(J.prevProp,K);let $_=f_||k===d&&J.isActive&&!o_&&i_||Q>Y&&i_,y_=!1;const P_=Array.isArray(K)?K:[K];let K_=P_.reduce(u(k),{});j===!1&&(K_={});const{prevResolvedValues:H_={}}=J,it={...H_,...K_},Z_=z=>{$_=!0,v.has(z)&&(y_=!0,v.delete(z)),J.needsAnimating[z]=!0;const __=e.getValue(z);__&&(__.liveStyle=!1)};for(const z in it){const __=K_[z],T_=H_[z];if(U.hasOwnProperty(z))continue;let p=!1;lu(__)&&lu(T_)?p=!y0(__,T_):p=__!==T_,p?__!=null?Z_(z):v.add(z):__!==void 0&&v.has(z)?Z_(z):J.protectedKeys[z]=!0}J.prevProp=K,J.prevResolvedValues=K_,J.isActive&&(U={...U,...K_}),s&&e.blockInitialAnimation&&($_=!1);const m_=o_&&f_;$_&&(!m_||y_)&&y.push(...P_.map(z=>{const __={type:k};if(typeof z=="string"&&s&&!m_&&e.manuallyAnimateOnMount&&e.parent){const{parent:T_}=e,p=Ti(T_,z);if(T_.enteringChildren&&p){const{delayChildren:W}=p.transition||{};__.delay=p0(T_.enteringChildren,e,W)}}return{animation:z,options:__}}))}if(v.size){const Q={};if(typeof h.initial!="boolean"){const k=Ti(e,Array.isArray(h.initial)?h.initial[0]:h.initial);k&&k.transition&&(Q.transition=k.transition)}v.forEach(k=>{const J=e.getBaseTarget(k),K=e.getValue(k);K&&(K.liveStyle=!0),Q[k]=J??null}),y.push({animation:Q})}let Z=!!y.length;return s&&(h.initial===!1||h.initial===h.animate)&&!e.manuallyAnimateOnMount&&(Z=!1),s=!1,Z?a(y):Promise.resolve()}function T(d,h){if($[d].isActive===h)return Promise.resolve();e.variantChildren?.forEach(y=>y.animationState?.setActive(d,h)),$[d].isActive=h;const A=r(d);for(const y in $)$[y].protectedKeys={};return A}return{animateChanges:r,setActive:T,setAnimateFunction:f,getState:()=>$,reset:()=>{$=yh(),s=!0}}}function b1(e,a){return typeof a=="string"?a!==e:Array.isArray(a)?!y0(a,e):!1}function An(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function yh(){return{animate:An(!0),whileInView:An(),whileHover:An(),whileTap:An(),whileDrag:An(),whileFocus:An(),exit:An()}}class Qe{constructor(a){this.isMounted=!1,this.node=a}update(){}}class O1 extends Qe{constructor(a){super(a),a.animationState||(a.animationState=x1(a))}updateAnimationControlsSubscription(){const{animate:a}=this.node.getProps();ol(a)&&(this.unmountControls=a.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:a}=this.node.getProps(),{animate:$}=this.node.prevProps||{};a!==$&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let M1=0;class D1 extends Qe{constructor(){super(...arguments),this.id=M1++}update(){if(!this.node.presenceContext)return;const{isPresent:a,onExitComplete:$}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||a===s)return;const u=this.node.animationState.setActive("exit",!a);$&&!a&&u.then(()=>{$(this.id)})}mount(){const{register:a,onExitComplete:$}=this.node.presenceContext||{};$&&$(this.id),a&&(this.unmount=a(this.id))}unmount(){}}const H1={animation:{Feature:O1},exit:{Feature:D1}};function Oa(e,a,$,s={passive:!0}){return e.addEventListener(a,$,s),()=>e.removeEventListener(a,$)}function Ua(e){return{point:{x:e.pageX,y:e.pageY}}}const U1=e=>a=>Pu(a)&&e(a,Ua(a));function Ra(e,a,$,s){return Oa(e,a,U1($),s)}const g0=1e-4,P1=1-g0,B1=1+g0,S0=.01,G1=0-S0,V1=0+S0;function At(e){return e.max-e.min}function W1(e,a,$){return Math.abs(e-a)<=$}function Rh(e,a,$,s=.5){e.origin=s,e.originPoint=Y_(a.min,a.max,e.origin),e.scale=At($)/At(a),e.translate=Y_($.min,$.max,e.origin)-e.originPoint,(e.scale>=P1&&e.scale<=B1||isNaN(e.scale))&&(e.scale=1),(e.translate>=G1&&e.translate<=V1||isNaN(e.translate))&&(e.translate=0)}function ga(e,a,$,s){Rh(e.x,a.x,$.x,s?s.originX:void 0),Rh(e.y,a.y,$.y,s?s.originY:void 0)}function gh(e,a,$){e.min=$.min+a.min,e.max=e.min+At(a)}function w1(e,a,$){gh(e.x,a.x,$.x),gh(e.y,a.y,$.y)}function Sh(e,a,$){e.min=a.min-$.min,e.max=e.min+At(a)}function Sa(e,a,$){Sh(e.x,a.x,$.x),Sh(e.y,a.y,$.y)}function jt(e){return[e("x"),e("y")]}const v0=({current:e})=>e?e.ownerDocument.defaultView:null,vh=(e,a)=>Math.abs(e-a);function Y1(e,a){const $=vh(e.x,a.x),s=vh(e.y,a.y);return Math.sqrt($**2+s**2)}class N0{constructor(a,$,{transformPagePoint:s,contextWindow:u=window,dragSnapToOrigin:f=!1,distanceThreshold:r=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Bo(this.lastMoveEventInfo,this.history),U=this.startEvent!==null,Y=Y1(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!U&&!Y)return;const{point:Z}=v,{timestamp:Q}=ct;this.history.push({...Z,timestamp:Q});const{onStart:k,onMove:J}=this.handlers;U||(k&&k(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),J&&J(this.lastMoveEvent,v)},this.handlePointerMove=(v,U)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=Po(U,this.transformPagePoint),W_.update(this.updatePoint,!0)},this.handlePointerUp=(v,U)=>{this.end();const{onEnd:Y,onSessionEnd:Z,resumeAnimation:Q}=this.handlers;if(this.dragSnapToOrigin&&Q&&Q(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=Bo(v.type==="pointercancel"?this.lastMoveEventInfo:Po(U,this.transformPagePoint),this.history);this.startEvent&&Y&&Y(v,k),Z&&Z(v,k)},!Pu(a))return;this.dragSnapToOrigin=f,this.handlers=$,this.transformPagePoint=s,this.distanceThreshold=r,this.contextWindow=u||window;const T=Ua(a),d=Po(T,this.transformPagePoint),{point:h}=d,{timestamp:A}=ct;this.history=[{...h,timestamp:A}];const{onSessionStart:y}=$;y&&y(a,Bo(d,this.history)),this.removeListeners=Ma(Ra(this.contextWindow,"pointermove",this.handlePointerMove),Ra(this.contextWindow,"pointerup",this.handlePointerUp),Ra(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(a){this.handlers=a}end(){this.removeListeners&&this.removeListeners(),qe(this.updatePoint)}}function Po(e,a){return a?{point:a(e.point)}:e}function Nh(e,a){return{x:e.x-a.x,y:e.y-a.y}}function Bo({point:e},a){return{point:e,delta:Nh(e,C0(a)),offset:Nh(e,F1(a)),velocity:j1(a,.1)}}function F1(e){return e[0]}function C0(e){return e[e.length-1]}function j1(e,a){if(e.length<2)return{x:0,y:0};let $=e.length-1,s=null;const u=C0(e);for(;$>=0&&(s=e[$],!(u.timestamp-s.timestamp>ne(a)));)$--;if(!s)return{x:0,y:0};const f=ie(u.timestamp-s.timestamp);if(f===0)return{x:0,y:0};const r={x:(u.x-s.x)/f,y:(u.y-s.y)/f};return r.x===1/0&&(r.x=0),r.y===1/0&&(r.y=0),r}function z1(e,{min:a,max:$},s){return a!==void 0&&e<a?e=s?Y_(a,e,s.min):Math.max(e,a):$!==void 0&&e>$&&(e=s?Y_($,e,s.max):Math.min(e,$)),e}function Ch(e,a,$){return{min:a!==void 0?e.min+a:void 0,max:$!==void 0?e.max+$-(e.max-e.min):void 0}}function X1(e,{top:a,left:$,bottom:s,right:u}){return{x:Ch(e.x,$,u),y:Ch(e.y,a,s)}}function xh(e,a){let $=a.min-e.min,s=a.max-e.max;return a.max-a.min<e.max-e.min&&([$,s]=[s,$]),{min:$,max:s}}function K1(e,a){return{x:xh(e.x,a.x),y:xh(e.y,a.y)}}function q1(e,a){let $=.5;const s=At(e),u=At(a);return u>s?$=va(a.min,a.max-s,e.min):s>u&&($=va(e.min,e.max-u,a.min)),Ie(0,1,$)}function k1(e,a){const $={};return a.min!==void 0&&($.min=a.min-e.min),a.max!==void 0&&($.max=a.max-e.min),$}const uu=.35;function Q1(e=uu){return e===!1?e=0:e===!0&&(e=uu),{x:bh(e,"left","right"),y:bh(e,"top","bottom")}}function bh(e,a,$){return{min:Oh(e,a),max:Oh(e,$)}}function Oh(e,a){return typeof e=="number"?e:e[a]||0}const Z1=new WeakMap;class J1{constructor(a){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Q_(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=a}start(a,{snapToCursor:$=!1,distanceThreshold:s}={}){const{presenceContext:u}=this.visualElement;if(u&&u.isPresent===!1)return;const f=y=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),$&&this.snapToCursor(Ua(y).point)},r=(y,v)=>{const{drag:U,dragPropagation:Y,onDragStart:Z}=this.getProps();if(U&&!Y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=u8(U),!this.openDragLock))return;this.latestPointerEvent=y,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),jt(k=>{let J=this.getAxisMotionValue(k).get()||0;if(ae.test(J)){const{projection:K}=this.visualElement;if(K&&K.layout){const i_=K.layout.layoutBox[k];i_&&(J=At(i_)*(parseFloat(J)/100))}}this.originPoint[k]=J}),Z&&W_.postRender(()=>Z(y,v)),su(this.visualElement,"transform");const{animationState:Q}=this.visualElement;Q&&Q.setActive("whileDrag",!0)},T=(y,v)=>{this.latestPointerEvent=y,this.latestPanInfo=v;const{dragPropagation:U,dragDirectionLock:Y,onDirectionLock:Z,onDrag:Q}=this.getProps();if(!U&&!this.openDragLock)return;const{offset:k}=v;if(Y&&this.currentDirection===null){this.currentDirection=_I(k),this.currentDirection!==null&&Z&&Z(this.currentDirection);return}this.updateAxis("x",v.point,k),this.updateAxis("y",v.point,k),this.visualElement.render(),Q&&Q(y,v)},d=(y,v)=>{this.latestPointerEvent=y,this.latestPanInfo=v,this.stop(y,v),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>jt(y=>this.getAnimationState(y)==="paused"&&this.getAxisMotionValue(y).animation?.play()),{dragSnapToOrigin:A}=this.getProps();this.panSession=new N0(a,{onSessionStart:f,onStart:r,onMove:T,onSessionEnd:d,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:A,distanceThreshold:s,contextWindow:v0(this.visualElement)})}stop(a,$){const s=a||this.latestPointerEvent,u=$||this.latestPanInfo,f=this.isDragging;if(this.cancel(),!f||!u||!s)return;const{velocity:r}=u;this.startAnimation(r);const{onDragEnd:T}=this.getProps();T&&W_.postRender(()=>T(s,u))}cancel(){this.isDragging=!1;const{projection:a,animationState:$}=this.visualElement;a&&(a.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),$&&$.setActive("whileDrag",!1)}updateAxis(a,$,s){const{drag:u}=this.getProps();if(!s||!Z$(a,u,this.currentDirection))return;const f=this.getAxisMotionValue(a);let r=this.originPoint[a]+s[a];this.constraints&&this.constraints[a]&&(r=z1(r,this.constraints[a],this.elastic[a])),f.set(r)}resolveConstraints(){const{dragConstraints:a,dragElastic:$}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,u=this.constraints;a&&ui(a)?this.constraints||(this.constraints=this.resolveRefConstraints()):a&&s?this.constraints=X1(s.layoutBox,a):this.constraints=!1,this.elastic=Q1($),u!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&jt(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=k1(s.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:a,onMeasureDragConstraints:$}=this.getProps();if(!a||!ui(a))return!1;const s=a.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const f=t1(s,u.root,this.visualElement.getTransformPagePoint());let r=K1(u.layout.layoutBox,f);if($){const T=$(Z8(r));this.hasMutatedConstraints=!!T,T&&(r=c0(T))}return r}startAnimation(a){const{drag:$,dragMomentum:s,dragElastic:u,dragTransition:f,dragSnapToOrigin:r,onDragTransitionEnd:T}=this.getProps(),d=this.constraints||{},h=jt(A=>{if(!Z$(A,$,this.currentDirection))return;let y=d&&d[A]||{};r&&(y={min:0,max:0});const v=u?200:1e6,U=u?40:1e7,Y={type:"inertia",velocity:s?a[A]:0,bounceStiffness:v,bounceDamping:U,timeConstant:750,restDelta:1,restSpeed:10,...f,...y};return this.startAxisValueAnimation(A,Y)});return Promise.all(h).then(T)}startAxisValueAnimation(a,$){const s=this.getAxisMotionValue(a);return su(this.visualElement,a),s.start(zu(a,s,0,$,this.visualElement,!1))}stopAnimation(){jt(a=>this.getAxisMotionValue(a).stop())}pauseAnimation(){jt(a=>this.getAxisMotionValue(a).animation?.pause())}getAnimationState(a){return this.getAxisMotionValue(a).animation?.state}getAxisMotionValue(a){const $=`_drag${a.toUpperCase()}`,s=this.visualElement.getProps(),u=s[$];return u||this.visualElement.getValue(a,(s.initial?s.initial[a]:void 0)||0)}snapToCursor(a){jt($=>{const{drag:s}=this.getProps();if(!Z$($,s,this.currentDirection))return;const{projection:u}=this.visualElement,f=this.getAxisMotionValue($);if(u&&u.layout){const{min:r,max:T}=u.layout.layoutBox[$];f.set(a[$]-Y_(r,T,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:a,dragConstraints:$}=this.getProps(),{projection:s}=this.visualElement;if(!ui($)||!s||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};jt(r=>{const T=this.getAxisMotionValue(r);if(T&&this.constraints!==!1){const d=T.get();u[r]=q1({min:d,max:d},this.constraints[r])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),jt(r=>{if(!Z$(r,a,null))return;const T=this.getAxisMotionValue(r),{min:d,max:h}=this.constraints[r];T.set(Y_(d,h,u[r]))})}addListeners(){if(!this.visualElement.current)return;Z1.set(this.visualElement,this);const a=this.visualElement.current,$=Ra(a,"pointerdown",d=>{const{drag:h,dragListener:A=!0}=this.getProps();h&&A&&this.start(d)}),s=()=>{const{dragConstraints:d}=this.getProps();ui(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:u}=this.visualElement,f=u.addEventListener("measure",s);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),W_.read(s);const r=Oa(window,"resize",()=>this.scalePositionWithinConstraints()),T=u.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(jt(A=>{const y=this.getAxisMotionValue(A);y&&(this.originPoint[A]+=d[A].translate,y.set(y.get()+d[A].translate))}),this.visualElement.render())}));return()=>{r(),$(),f(),T&&T()}}getProps(){const a=this.visualElement.getProps(),{drag:$=!1,dragDirectionLock:s=!1,dragPropagation:u=!1,dragConstraints:f=!1,dragElastic:r=uu,dragMomentum:T=!0}=a;return{...a,drag:$,dragDirectionLock:s,dragPropagation:u,dragConstraints:f,dragElastic:r,dragMomentum:T}}}function Z$(e,a,$){return(a===!0||a===e)&&($===null||$===e)}function _I(e,a=10){let $=null;return Math.abs(e.y)>a?$="y":Math.abs(e.x)>a&&($="x"),$}class tI extends Qe{constructor(a){super(a),this.removeGroupControls=zt,this.removeListeners=zt,this.controls=new J1(a)}mount(){const{dragControls:a}=this.node.getProps();a&&(this.removeGroupControls=a.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||zt}unmount(){this.removeGroupControls(),this.removeListeners()}}const Mh=e=>(a,$)=>{e&&W_.postRender(()=>e(a,$))};class eI extends Qe{constructor(){super(...arguments),this.removePointerDownListener=zt}onPointerDown(a){this.session=new N0(a,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:v0(this.node)})}createPanHandlers(){const{onPanSessionStart:a,onPanStart:$,onPan:s,onPanEnd:u}=this.node.getProps();return{onSessionStart:Mh(a),onStart:Mh($),onMove:s,onEnd:(f,r)=>{delete this.session,u&&W_.postRender(()=>u(f,r))}}}mount(){this.removePointerDownListener=Ra(this.node.current,"pointerdown",a=>this.onPointerDown(a))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const el={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Dh(e,a){return a.max===a.min?0:e/(a.max-a.min)*100}const ma={correct:(e,a)=>{if(!a.target)return e;if(typeof e=="string")if(r_.test(e))e=parseFloat(e);else return e;const $=Dh(e,a.target.x),s=Dh(e,a.target.y);return`${$}% ${s}%`}},nI={correct:(e,{treeScale:a,projectionDelta:$})=>{const s=e,u=ke.parse(e);if(u.length>5)return s;const f=ke.createTransformer(e),r=typeof u[0]!="number"?1:0,T=$.x.scale*a.x,d=$.y.scale*a.y;u[0+r]/=T,u[1+r]/=d;const h=Y_(T,d,.5);return typeof u[2+r]=="number"&&(u[2+r]/=h),typeof u[3+r]=="number"&&(u[3+r]/=h),f(u)}};let Go=!1;class iI extends t_.Component{componentDidMount(){const{visualElement:a,layoutGroup:$,switchLayoutGroup:s,layoutId:u}=this.props,{projection:f}=a;S8(aI),f&&($.group&&$.group.add(f),s&&s.register&&u&&s.register(f),Go&&f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,onExitComplete:()=>this.safeToRemove()})),el.hasEverUpdated=!0}getSnapshotBeforeUpdate(a){const{layoutDependency:$,visualElement:s,drag:u,isPresent:f}=this.props,{projection:r}=s;return r&&(r.isPresent=f,Go=!0,u||a.layoutDependency!==$||$===void 0||a.isPresent!==f?r.willUpdate():this.safeToRemove(),a.isPresent!==f&&(f?r.promote():r.relegate()||W_.postRender(()=>{const T=r.getStack();(!T||!T.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:a}=this.props.visualElement;a&&(a.root.didUpdate(),Uu.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:a,layoutGroup:$,switchLayoutGroup:s}=this.props,{projection:u}=a;Go=!0,u&&(u.scheduleCheckAfterUnmount(),$&&$.group&&$.group.remove(u),s&&s.deregister&&s.deregister(u))}safeToRemove(){const{safeToRemove:a}=this.props;a&&a()}render(){return null}}function x0(e){const[a,$]=L8(),s=t_.useContext(sd);return b.jsx(iI,{...e,layoutGroup:s,switchLayoutGroup:t_.useContext(u0),isPresent:a,safeToRemove:$})}const aI={borderRadius:{...ma,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ma,borderTopRightRadius:ma,borderBottomLeftRadius:ma,borderBottomRightRadius:ma,boxShadow:nI};function $I(e,a,$){const s=dt(e)?e:hi(e);return s.start(zu("",s,a,$)),s.animation}const lI=(e,a)=>e.depth-a.depth;class sI{constructor(){this.children=[],this.isDirty=!1}add(a){Eu(this.children,a),this.isDirty=!0}remove(a){Au(this.children,a),this.isDirty=!0}forEach(a){this.isDirty&&this.children.sort(lI),this.isDirty=!1,this.children.forEach(a)}}function oI(e,a){const $=Rt.now(),s=({timestamp:u})=>{const f=u-$;f>=a&&(qe(s),e(f-a))};return W_.setup(s,!0),()=>qe(s)}const b0=["TopLeft","TopRight","BottomLeft","BottomRight"],uI=b0.length,Hh=e=>typeof e=="string"?parseFloat(e):e,Uh=e=>typeof e=="number"||r_.test(e);function rI(e,a,$,s,u,f){u?(e.opacity=Y_(0,$.opacity??1,cI(s)),e.opacityExit=Y_(a.opacity??1,0,fI(s))):f&&(e.opacity=Y_(a.opacity??1,$.opacity??1,s));for(let r=0;r<uI;r++){const T=`border${b0[r]}Radius`;let d=Ph(a,T),h=Ph($,T);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||Uh(d)===Uh(h)?(e[T]=Math.max(Y_(Hh(d),Hh(h),s),0),(ae.test(h)||ae.test(d))&&(e[T]+="%")):e[T]=h}(a.rotate||$.rotate)&&(e.rotate=Y_(a.rotate||0,$.rotate||0,s))}function Ph(e,a){return e[a]!==void 0?e[a]:e.borderRadius}const cI=O0(0,.5,Ld),fI=O0(.5,.95,zt);function O0(e,a,$){return s=>s<e?0:s>a?1:$(va(e,a,s))}function Bh(e,a){e.min=a.min,e.max=a.max}function Ft(e,a){Bh(e.x,a.x),Bh(e.y,a.y)}function Gh(e,a){e.translate=a.translate,e.scale=a.scale,e.originPoint=a.originPoint,e.origin=a.origin}function Vh(e,a,$,s,u){return e-=a,e=ll(e,1/$,s),u!==void 0&&(e=ll(e,1/u,s)),e}function TI(e,a=0,$=1,s=.5,u,f=e,r=e){if(ae.test(a)&&(a=parseFloat(a),a=Y_(r.min,r.max,a/100)-r.min),typeof a!="number")return;let T=Y_(f.min,f.max,s);e===f&&(T-=a),e.min=Vh(e.min,a,$,T,u),e.max=Vh(e.max,a,$,T,u)}function Wh(e,a,[$,s,u],f,r){TI(e,a[$],a[s],a[u],a.scale,f,r)}const hI=["x","scaleX","originX"],dI=["y","scaleY","originY"];function wh(e,a,$,s){Wh(e.x,a,hI,$?$.x:void 0,s?s.x:void 0),Wh(e.y,a,dI,$?$.y:void 0,s?s.y:void 0)}function Yh(e){return e.translate===0&&e.scale===1}function M0(e){return Yh(e.x)&&Yh(e.y)}function Fh(e,a){return e.min===a.min&&e.max===a.max}function EI(e,a){return Fh(e.x,a.x)&&Fh(e.y,a.y)}function jh(e,a){return Math.round(e.min)===Math.round(a.min)&&Math.round(e.max)===Math.round(a.max)}function D0(e,a){return jh(e.x,a.x)&&jh(e.y,a.y)}function zh(e){return At(e.x)/At(e.y)}function Xh(e,a){return e.translate===a.translate&&e.scale===a.scale&&e.originPoint===a.originPoint}class AI{constructor(){this.members=[]}add(a){Eu(this.members,a),a.scheduleRender()}remove(a){if(Au(this.members,a),a===this.prevLead&&(this.prevLead=void 0),a===this.lead){const $=this.members[this.members.length-1];$&&this.promote($)}}relegate(a){const $=this.members.findIndex(u=>a===u);if($===0)return!1;let s;for(let u=$;u>=0;u--){const f=this.members[u];if(f.isPresent!==!1){s=f;break}}return s?(this.promote(s),!0):!1}promote(a,$){const s=this.lead;if(a!==s&&(this.prevLead=s,this.lead=a,a.show(),s)){s.instance&&s.scheduleRender(),a.scheduleRender(),a.resumeFrom=s,$&&(a.resumeFrom.preserveOpacity=!0),s.snapshot&&(a.snapshot=s.snapshot,a.snapshot.latestValues=s.animationValues||s.latestValues),a.root&&a.root.isUpdating&&(a.isLayoutDirty=!0);const{crossfade:u}=a.options;u===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(a=>{const{options:$,resumingFrom:s}=a;$.onExitComplete&&$.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(a=>{a.instance&&a.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function LI(e,a,$){let s="";const u=e.x.translate/a.x,f=e.y.translate/a.y,r=$?.z||0;if((u||f||r)&&(s=`translate3d(${u}px, ${f}px, ${r}px) `),(a.x!==1||a.y!==1)&&(s+=`scale(${1/a.x}, ${1/a.y}) `),$){const{transformPerspective:h,rotate:A,rotateX:y,rotateY:v,skewX:U,skewY:Y}=$;h&&(s=`perspective(${h}px) ${s}`),A&&(s+=`rotate(${A}deg) `),y&&(s+=`rotateX(${y}deg) `),v&&(s+=`rotateY(${v}deg) `),U&&(s+=`skewX(${U}deg) `),Y&&(s+=`skewY(${Y}deg) `)}const T=e.x.scale*a.x,d=e.y.scale*a.y;return(T!==1||d!==1)&&(s+=`scale(${T}, ${d})`),s||"none"}const Vo=["","X","Y","Z"],mI=1e3;let II=0;function Wo(e,a,$,s){const{latestValues:u}=a;u[e]&&($[e]=u[e],a.setStaticValue(e,0),s&&(s[e]=0))}function H0(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:a}=e.options;if(!a)return;const $=m0(a);if(window.MotionHasOptimisedAnimation($,"transform")){const{layout:u,layoutId:f}=e.options;window.MotionCancelOptimisedAnimation($,"transform",W_,!(u||f))}const{parent:s}=e;s&&!s.hasCheckedOptimisedAppear&&H0(s)}function U0({attachResizeListener:e,defaultParent:a,measureScroll:$,checkIsScrollRoot:s,resetTransform:u}){return class{constructor(r={},T=a?.()){this.id=II++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(RI),this.nodes.forEach(NI),this.nodes.forEach(CI),this.nodes.forEach(gI)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=r,this.root=T?T.root||T:this,this.path=T?[...T.path,T]:[],this.parent=T,this.depth=T?T.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new sI)}addEventListener(r,T){return this.eventHandlers.has(r)||this.eventHandlers.set(r,new Iu),this.eventHandlers.get(r).add(T)}notifyListeners(r,...T){const d=this.eventHandlers.get(r);d&&d.notify(...T)}hasListeners(r){return this.eventHandlers.has(r)}mount(r){if(this.instance)return;this.isSVG=Qd(r)&&!d8(r),this.instance=r;const{layoutId:T,layout:d,visualElement:h}=this.options;if(h&&!h.current&&h.mount(r),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||T)&&(this.isLayoutDirty=!0),e){let A,y=0;const v=()=>this.root.updateBlockedByResize=!1;W_.read(()=>{y=window.innerWidth}),e(r,()=>{const U=window.innerWidth;U!==y&&(y=U,this.root.updateBlockedByResize=!0,A&&A(),A=oI(v,250),el.hasAnimatedSinceResize&&(el.hasAnimatedSinceResize=!1,this.nodes.forEach(kh)))})}T&&this.root.registerSharedNode(T,this),this.options.animate!==!1&&h&&(T||d)&&this.addEventListener("didUpdate",({delta:A,hasLayoutChanged:y,hasRelativeLayoutChanged:v,layout:U})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const Y=this.options.transition||h.getDefaultTransition()||DI,{onLayoutAnimationStart:Z,onLayoutAnimationComplete:Q}=h.getProps(),k=!this.targetLayout||!D0(this.targetLayout,U),J=!y&&v;if(this.options.layoutRoot||this.resumeFrom||J||y&&(k||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const K={...Du(Y,"layout"),onPlay:Z,onComplete:Q};(h.shouldReduceMotion||this.options.layoutRoot)&&(K.delay=0,K.type=!1),this.startAnimation(K),this.setAnimationOrigin(A,J)}else y||kh(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=U})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const r=this.getStack();r&&r.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),qe(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(xI),this.animationId++)}getTransformTemplate(){const{visualElement:r}=this.options;return r&&r.getProps().transformTemplate}willUpdate(r=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&H0(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let A=0;A<this.path.length;A++){const y=this.path[A];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:T,layout:d}=this.options;if(T===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),r&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Kh);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(qh);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(vI),this.nodes.forEach(pI),this.nodes.forEach(yI)):this.nodes.forEach(qh),this.clearAllSnapshots();const T=Rt.now();ct.delta=Ie(0,1e3/60,T-ct.timestamp),ct.timestamp=T,ct.isProcessing=!0,Co.update.process(ct),Co.preRender.process(ct),Co.render.process(ct),ct.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Uu.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(SI),this.sharedNodes.forEach(bI)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,W_.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){W_.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!At(this.snapshot.measuredBox.x)&&!At(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const r=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Q_(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:T}=this.options;T&&T.notify("LayoutMeasure",this.layout.layoutBox,r?r.layoutBox:void 0)}updateScroll(r="measure"){let T=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===r&&(T=!1),T&&this.instance){const d=s(this.instance);this.scroll={animationId:this.root.animationId,phase:r,isRoot:d,offset:$(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!u)return;const r=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,T=this.projectionDelta&&!M0(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,A=h!==this.prevTransformTemplateValue;r&&this.instance&&(T||Ln(this.latestValues)||A)&&(u(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(r=!0){const T=this.measurePageBox();let d=this.removeElementScroll(T);return r&&(d=this.removeTransform(d)),HI(d),{animationId:this.root.animationId,measuredBox:T,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:r}=this.options;if(!r)return Q_();const T=r.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(UI))){const{scroll:h}=this.root;h&&(ri(T.x,h.offset.x),ri(T.y,h.offset.y))}return T}removeElementScroll(r){const T=Q_();if(Ft(T,r),this.scroll?.wasRoot)return T;for(let d=0;d<this.path.length;d++){const h=this.path[d],{scroll:A,options:y}=h;h!==this.root&&A&&y.layoutScroll&&(A.wasRoot&&Ft(T,r),ri(T.x,A.offset.x),ri(T.y,A.offset.y))}return T}applyTransform(r,T=!1){const d=Q_();Ft(d,r);for(let h=0;h<this.path.length;h++){const A=this.path[h];!T&&A.options.layoutScroll&&A.scroll&&A!==A.root&&ci(d,{x:-A.scroll.offset.x,y:-A.scroll.offset.y}),Ln(A.latestValues)&&ci(d,A.latestValues)}return Ln(this.latestValues)&&ci(d,this.latestValues),d}removeTransform(r){const T=Q_();Ft(T,r);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!Ln(h.latestValues))continue;iu(h.latestValues)&&h.updateSnapshot();const A=Q_(),y=h.measurePageBox();Ft(A,y),wh(T,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,A)}return Ln(this.latestValues)&&wh(T,this.latestValues),T}setTargetDelta(r){this.targetDelta=r,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(r){this.options={...this.options,...r,crossfade:r.crossfade!==void 0?r.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ct.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(r=!1){const T=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=T.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=T.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=T.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==T;if(!(r||d&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:A,layoutId:y}=this.options;if(!(!this.layout||!(A||y))){if(this.resolvedRelativeTargetAt=ct.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Q_(),this.relativeTargetOrigin=Q_(),Sa(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),Ft(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Q_(),this.targetWithTransforms=Q_()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),w1(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ft(this.target,this.layout.layoutBox),T0(this.target,this.targetDelta)):Ft(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Q_(),this.relativeTargetOrigin=Q_(),Sa(this.relativeTargetOrigin,this.target,v.target),Ft(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||iu(this.parent.latestValues)||f0(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const r=this.getLead(),T=!!this.resumingFrom||this!==r;let d=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(d=!1),T&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===ct.timestamp&&(d=!1),d)return;const{layout:h,layoutId:A}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||A))return;Ft(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,v=this.treeScale.y;_1(this.layoutCorrected,this.treeScale,this.path,T),r.layout&&!r.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(r.target=r.layout.layoutBox,r.targetWithTransforms=Q_());const{target:U}=r;if(!U){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Gh(this.prevProjectionDelta.x,this.projectionDelta.x),Gh(this.prevProjectionDelta.y,this.projectionDelta.y)),ga(this.projectionDelta,this.layoutCorrected,U,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==v||!Xh(this.projectionDelta.x,this.prevProjectionDelta.x)||!Xh(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",U))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(r=!0){if(this.options.visualElement?.scheduleRender(),r){const T=this.getStack();T&&T.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=fi(),this.projectionDelta=fi(),this.projectionDeltaWithTransform=fi()}setAnimationOrigin(r,T=!1){const d=this.snapshot,h=d?d.latestValues:{},A={...this.latestValues},y=fi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!T;const v=Q_(),U=d?d.source:void 0,Y=this.layout?this.layout.source:void 0,Z=U!==Y,Q=this.getStack(),k=!Q||Q.members.length<=1,J=!!(Z&&!k&&this.options.crossfade===!0&&!this.path.some(MI));this.animationProgress=0;let K;this.mixTargetDelta=i_=>{const j=i_/1e3;Qh(y.x,r.x,j),Qh(y.y,r.y,j),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Sa(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),OI(this.relativeTarget,this.relativeTargetOrigin,v,j),K&&EI(this.relativeTarget,K)&&(this.isProjectionDirty=!1),K||(K=Q_()),Ft(K,this.relativeTarget)),Z&&(this.animationValues=A,rI(A,h,this.latestValues,j,J,k)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=j},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(r){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(qe(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=W_.update(()=>{el.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=hi(0)),this.currentAnimation=$I(this.motionValue,[0,1e3],{...r,velocity:0,isSync:!0,onUpdate:T=>{this.mixTargetDelta(T),r.onUpdate&&r.onUpdate(T)},onStop:()=>{},onComplete:()=>{r.onComplete&&r.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const r=this.getStack();r&&r.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(mI),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const r=this.getLead();let{targetWithTransforms:T,target:d,layout:h,latestValues:A}=r;if(!(!T||!d||!h)){if(this!==r&&this.layout&&h&&P0(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||Q_();const y=At(this.layout.layoutBox.x);d.x.min=r.target.x.min,d.x.max=d.x.min+y;const v=At(this.layout.layoutBox.y);d.y.min=r.target.y.min,d.y.max=d.y.min+v}Ft(T,d),ci(T,A),ga(this.projectionDeltaWithTransform,this.layoutCorrected,T,A)}}registerSharedNode(r,T){this.sharedNodes.has(r)||this.sharedNodes.set(r,new AI),this.sharedNodes.get(r).add(T);const h=T.options.initialPromotionConfig;T.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(T):void 0})}isLead(){const r=this.getStack();return r?r.lead===this:!0}getLead(){const{layoutId:r}=this.options;return r?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:r}=this.options;return r?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:r}=this.options;if(r)return this.root.sharedNodes.get(r)}promote({needsReset:r,transition:T,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),r&&(this.projectionDelta=void 0,this.needsReset=!0),T&&this.setOptions({transition:T})}relegate(){const r=this.getStack();return r?r.relegate(this):!1}resetSkewAndRotation(){const{visualElement:r}=this.options;if(!r)return;let T=!1;const{latestValues:d}=r;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(T=!0),!T)return;const h={};d.z&&Wo("z",r,h,this.animationValues);for(let A=0;A<Vo.length;A++)Wo(`rotate${Vo[A]}`,r,h,this.animationValues),Wo(`skew${Vo[A]}`,r,h,this.animationValues);r.render();for(const A in h)r.setStaticValue(A,h[A]),this.animationValues&&(this.animationValues[A]=h[A]);r.scheduleRender()}applyProjectionStyles(r,T){if(!this.instance||this.isSVG)return;if(!this.isVisible){r.visibility="hidden";return}const d=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,r.visibility="",r.opacity="",r.pointerEvents=tl(T?.pointerEvents)||"",r.transform=d?d(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(r.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,r.pointerEvents=tl(T?.pointerEvents)||""),this.hasProjected&&!Ln(this.latestValues)&&(r.transform=d?d({},""):"none",this.hasProjected=!1);return}r.visibility="";const A=h.animationValues||h.latestValues;this.applyTransformsToTarget();let y=LI(this.projectionDeltaWithTransform,this.treeScale,A);d&&(y=d(A,y)),r.transform=y;const{x:v,y:U}=this.projectionDelta;r.transformOrigin=`${v.origin*100}% ${U.origin*100}% 0`,h.animationValues?r.opacity=h===this?A.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:A.opacityExit:r.opacity=h===this?A.opacity!==void 0?A.opacity:"":A.opacityExit!==void 0?A.opacityExit:0;for(const Y in ba){if(A[Y]===void 0)continue;const{correct:Z,applyTo:Q,isCSSVariable:k}=ba[Y],J=y==="none"?A[Y]:Z(A[Y],h);if(Q){const K=Q.length;for(let i_=0;i_<K;i_++)r[Q[i_]]=J}else k?this.options.visualElement.renderState.vars[Y]=J:r[Y]=J}this.options.layoutId&&(r.pointerEvents=h===this?tl(T?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(r=>r.currentAnimation?.stop()),this.root.nodes.forEach(Kh),this.root.sharedNodes.clear()}}}function pI(e){e.updateLayout()}function yI(e){const a=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&a&&e.hasListeners("didUpdate")){const{layoutBox:$,measuredBox:s}=e.layout,{animationType:u}=e.options,f=a.source!==e.layout.source;u==="size"?jt(A=>{const y=f?a.measuredBox[A]:a.layoutBox[A],v=At(y);y.min=$[A].min,y.max=y.min+v}):P0(u,a.layoutBox,$)&&jt(A=>{const y=f?a.measuredBox[A]:a.layoutBox[A],v=At($[A]);y.max=y.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[A].max=e.relativeTarget[A].min+v)});const r=fi();ga(r,$,a.layoutBox);const T=fi();f?ga(T,e.applyTransform(s,!0),a.measuredBox):ga(T,$,a.layoutBox);const d=!M0(r);let h=!1;if(!e.resumeFrom){const A=e.getClosestProjectingParent();if(A&&!A.resumeFrom){const{snapshot:y,layout:v}=A;if(y&&v){const U=Q_();Sa(U,a.layoutBox,y.layoutBox);const Y=Q_();Sa(Y,$,v.layoutBox),D0(U,Y)||(h=!0),A.options.layoutRoot&&(e.relativeTarget=Y,e.relativeTargetOrigin=U,e.relativeParent=A)}}}e.notifyListeners("didUpdate",{layout:$,snapshot:a,delta:T,layoutDelta:r,hasLayoutChanged:d,hasRelativeLayoutChanged:h})}else if(e.isLead()){const{onExitComplete:$}=e.options;$&&$()}e.options.transition=void 0}function RI(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function gI(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function SI(e){e.clearSnapshot()}function Kh(e){e.clearMeasurements()}function qh(e){e.isLayoutDirty=!1}function vI(e){const{visualElement:a}=e.options;a&&a.getProps().onBeforeLayoutMeasure&&a.notify("BeforeLayoutMeasure"),e.resetTransform()}function kh(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function NI(e){e.resolveTargetDelta()}function CI(e){e.calcProjection()}function xI(e){e.resetSkewAndRotation()}function bI(e){e.removeLeadSnapshot()}function Qh(e,a,$){e.translate=Y_(a.translate,0,$),e.scale=Y_(a.scale,1,$),e.origin=a.origin,e.originPoint=a.originPoint}function Zh(e,a,$,s){e.min=Y_(a.min,$.min,s),e.max=Y_(a.max,$.max,s)}function OI(e,a,$,s){Zh(e.x,a.x,$.x,s),Zh(e.y,a.y,$.y,s)}function MI(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const DI={duration:.45,ease:[.4,0,.1,1]},Jh=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),_d=Jh("applewebkit/")&&!Jh("chrome/")?Math.round:zt;function td(e){e.min=_d(e.min),e.max=_d(e.max)}function HI(e){td(e.x),td(e.y)}function P0(e,a,$){return e==="position"||e==="preserve-aspect"&&!W1(zh(a),zh($),.2)}function UI(e){return e!==e.root&&e.scroll?.wasRoot}const PI=U0({attachResizeListener:(e,a)=>Oa(e,"resize",a),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),wo={current:void 0},B0=U0({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!wo.current){const e=new PI({});e.mount(window),e.setOptions({layoutScroll:!0}),wo.current=e}return wo.current},resetTransform:(e,a)=>{e.style.transform=a!==void 0?a:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),BI={pan:{Feature:eI},drag:{Feature:tI,ProjectionNode:B0,MeasureLayout:x0}};function ed(e,a,$){const{props:s}=e;e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",$==="Start");const u="onHover"+$,f=s[u];f&&W_.postRender(()=>f(a,Ua(a)))}class GI extends Qe{mount(){const{current:a}=this.node;a&&(this.unmount=r8(a,($,s)=>(ed(this.node,s,"Start"),u=>ed(this.node,u,"End"))))}unmount(){}}class VI extends Qe{constructor(){super(...arguments),this.isActive=!1}onFocus(){let a=!1;try{a=this.node.current.matches(":focus-visible")}catch{a=!0}!a||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ma(Oa(this.node.current,"focus",()=>this.onFocus()),Oa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function nd(e,a,$){const{props:s}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&s.whileTap&&e.animationState.setActive("whileTap",$==="Start");const u="onTap"+($==="End"?"":$),f=s[u];f&&W_.postRender(()=>f(a,Ua(a)))}class WI extends Qe{mount(){const{current:a}=this.node;a&&(this.unmount=h8(a,($,s)=>(nd(this.node,s,"Start"),(u,{success:f})=>nd(this.node,u,f?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const ru=new WeakMap,Yo=new WeakMap,wI=e=>{const a=ru.get(e.target);a&&a(e)},YI=e=>{e.forEach(wI)};function FI({root:e,...a}){const $=e||document;Yo.has($)||Yo.set($,{});const s=Yo.get($),u=JSON.stringify(a);return s[u]||(s[u]=new IntersectionObserver(YI,{root:e,...a})),s[u]}function jI(e,a,$){const s=FI(a);return ru.set(e,$),s.observe(e),()=>{ru.delete(e),s.unobserve(e)}}const zI={some:0,all:1};class XI extends Qe{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:a={}}=this.node.getProps(),{root:$,margin:s,amount:u="some",once:f}=a,r={root:$?$.current:void 0,rootMargin:s,threshold:typeof u=="number"?u:zI[u]},T=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,f&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:A,onViewportLeave:y}=this.node.getProps(),v=h?A:y;v&&v(d)};return jI(this.node.current,r,T)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:a,prevProps:$}=this.node;["amount","margin","root"].some(KI(a,$))&&this.startObserver()}unmount(){}}function KI({viewport:e={}},{viewport:a={}}={}){return $=>e[$]!==a[$]}const qI={inView:{Feature:XI},tap:{Feature:WI},focus:{Feature:VI},hover:{Feature:GI}},kI={layout:{ProjectionNode:B0,MeasureLayout:x0}},QI={...H1,...qI,...BI,...kI},kt=Q8(QI,u1);function ZI(e,a){a===void 0&&(a={});var $=a.insertAt;if(!(typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],u=document.createElement("style");u.type="text/css",$==="top"&&s.firstChild?s.insertBefore(u,s.firstChild):s.appendChild(u),u.styleSheet?u.styleSheet.cssText=e:u.appendChild(document.createTextNode(e))}}var JI=`.index-module_canvas__H2w7d {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}`,_p={canvas:"index-module_canvas__H2w7d"};ZI(JI);var Dt=function(e,a){return Math.random()*(a-e)+e},tp=function(e){var a=parseInt(e.slice(1,3),16),$=parseInt(e.slice(3,5),16),s=parseInt(e.slice(5,7),16);return{r:a,g:$,b:s}},ep=(function(){function e(a,$,s,u,f,r,T,d,h){s===void 0&&(s=0),f===void 0&&(f=["circle","square"]),r===void 0&&(r=12),T===void 0&&(T=30),d===void 0&&(d=1),h===void 0&&(h=.004),this.x=a*window.innerWidth,this.y=$*window.innerHeight,this.width=r,this.height=r,this.theta=Math.PI/180*Dt(s-T,s+T),this.radius=Dt(20*d,70*d),this.vx=this.radius*Math.cos(this.theta),this.vy=this.radius*Math.sin(this.theta),this.xFriction=.9,this.yFriction=.87,this.gravity=Dt(.5,.6),this.opacity=1,this.opacityDelta=h,this.rotate=Dt(0,360),this.widthDelta=Dt(0,360),this.heightDelta=Dt(0,360),this.rotateDelta=Dt(-1,1),this.colors=u,this.color=tp(this.colors[Math.floor(Dt(0,this.colors.length))]),this.shapes=f,this.shape=this.shapes[Math.floor(Dt(0,this.shapes.length))],this.swingOffset=Dt(0,Math.PI*2),this.swingSpeed=Math.random()*.05+.01,this.swingAmplitude=Dt(.1,.2)}return e.prototype.update=function(){this.vx*=this.xFriction,this.vy*=this.yFriction,this.vy+=this.gravity,this.vx+=Math.sin(this.swingOffset)*this.swingAmplitude,this.x+=this.vx,this.y+=this.vy,this.opacity-=this.opacityDelta,this.widthDelta+=2,this.heightDelta+=2,this.rotate+=this.rotateDelta,this.swingOffset+=this.swingSpeed},e.prototype.drawSquare=function(a){a.fillRect(this.x,this.y,this.width*Math.cos(Math.PI/180*this.widthDelta),this.height*Math.sin(Math.PI/180*this.heightDelta))},e.prototype.drawCircle=function(a){a.beginPath(),a.ellipse(this.x,this.y,Math.abs(this.width*Math.cos(Math.PI/180*this.widthDelta))/2,Math.abs(this.height*Math.sin(Math.PI/180*this.heightDelta))/2,0,0,2*Math.PI),a.fill(),a.closePath()},e.prototype.draw=function(a){var $=this.width*1.3,s=this.height*1.3;a.translate(this.x+$,this.y+s),a.rotate(Math.PI/100*this.rotate),a.translate(-(this.x+$),-(this.y+s)),a.fillStyle="rgba(".concat(this.color.r,", ").concat(this.color.g,", ").concat(this.color.b,", ").concat(this.opacity,")"),this.shape==="square"&&this.drawSquare(a),this.shape==="circle"&&this.drawCircle(a),a.resetTransform()},e})(),np=60,id=1e3/np;function ip(e){var a=e.mode,$=a===void 0?"boom":a,s=e.particleCount,u=s===void 0?30:s,f=e.shapeSize,r=f===void 0?12:f,T=e.colors,d=T===void 0?["#ff577f","#ff884b","#ffd384","#fff9b0"]:T,h=e.className,A=e.style,y=e.mode==="boom"||e.mode===void 0?e:{effectInterval:1,effectCount:1/0},v=y.x,U=v===void 0?.5:v,Y=y.y,Z=Y===void 0?.5:Y,Q=y.deg,k=Q===void 0?270:Q,J=y.spreadDeg,K=J===void 0?30:J,i_=y.effectInterval,j=i_===void 0?3e3:i_,o_=y.effectCount,f_=o_===void 0?1:o_,$_=y.launchSpeed,y_=$_===void 0?1:$_,P_=y.opacityDeltaMultiplier,K_=P_===void 0?1:P_,H_=(e.mode==="fall"?e:{}).fadeOutHeight,it=H_===void 0?.8:H_,Z_=t_.useRef(null),m_=t_.useRef(),P=t_.useRef([]),z=t_.useRef(0),__=t_.useRef(0),T_=t_.useCallback(function(){var w=Z_.current,I=w?.getContext("2d");if(!(!w||!I)){m_.current=I;var S=window.innerWidth,L=window.innerHeight;w.width=S,w.height=L}},[]),p=t_.useCallback(function(){for(var w=$==="fall",I=w?u/30:u,S=w?Dt(0,1):U,L=w?Dt(-.1,-.3):Z,g=w?270:k,D=w?0:K,M=w?0:y_,q=w?3.4/it/window.innerHeight:.004*Math.max(.1,K_),X=0;X<I;X+=1)P.current.push(new ep(S,L,g,d,["circle","square"],r,D,M,q))},[$,U,Z,k,d,r,K,y_,u,it,K_]),W=t_.useCallback(function(){if(m_.current){var w,I,S=Date.now(),L,g=Date.now()-j,D=function(){var M=Z_.current;if(m_.current&&M&&(z.current=requestAnimationFrame(D),w=Date.now(),I=w-S,L=w-g,!(I<id))){m_.current.clearRect(0,0,M.width,M.height),L>j&&__.current<f_&&(p(),g=w-L%j,__.current+=1);for(var q=P.current,X=q.length-1;X>=0;X-=1){var F=q[X];F.update(),F.draw(m_.current);var n_=M?.height||0;(F.opacity<=0||F.y>n_)&&q.splice(q.indexOf(F),1)}S=w-I%id,__.current>=f_&&q.length===0&&cancelAnimationFrame(z.current)}};z.current=requestAnimationFrame(D)}},[j,f_,p]);return t_.useEffect(function(){return T_(),W(),function(){z.current&&cancelAnimationFrame(z.current)}},[T_,W]),t_.useEffect(function(){__.current=0},[f_]),cL.createElement("canvas",{className:[_p.canvas,h].filter(Boolean).join(" "),ref:Z_,style:A})}function ap({onlyFirst:e=!1}={}){const u="(?:\\u001B\\][\\s\\S]*?(?:\\u0007|\\u001B\\u005C|\\u009C))|[\\u001B\\u009B][[\\]()#;?]*(?:\\d{1,4}(?:[;:]\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]";return new RegExp(u,e?void 0:"g")}const $p=ap();function lp(e){if(typeof e!="string")throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);return e.replace($p,"")}function sp(e){return e===161||e===164||e===167||e===168||e===170||e===173||e===174||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||e===198||e===208||e===215||e===216||e>=222&&e<=225||e===230||e>=232&&e<=234||e===236||e===237||e===240||e===242||e===243||e>=247&&e<=250||e===252||e===254||e===257||e===273||e===275||e===283||e===294||e===295||e===299||e>=305&&e<=307||e===312||e>=319&&e<=322||e===324||e>=328&&e<=331||e===333||e===338||e===339||e===358||e===359||e===363||e===462||e===464||e===466||e===468||e===470||e===472||e===474||e===476||e===593||e===609||e===708||e===711||e>=713&&e<=715||e===717||e===720||e>=728&&e<=731||e===733||e===735||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||e===1025||e>=1040&&e<=1103||e===1105||e===8208||e>=8211&&e<=8214||e===8216||e===8217||e===8220||e===8221||e>=8224&&e<=8226||e>=8228&&e<=8231||e===8240||e===8242||e===8243||e===8245||e===8251||e===8254||e===8308||e===8319||e>=8321&&e<=8324||e===8364||e===8451||e===8453||e===8457||e===8467||e===8470||e===8481||e===8482||e===8486||e===8491||e===8531||e===8532||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||e===8585||e>=8592&&e<=8601||e===8632||e===8633||e===8658||e===8660||e===8679||e===8704||e===8706||e===8707||e===8711||e===8712||e===8715||e===8719||e===8721||e===8725||e===8730||e>=8733&&e<=8736||e===8739||e===8741||e>=8743&&e<=8748||e===8750||e>=8756&&e<=8759||e===8764||e===8765||e===8776||e===8780||e===8786||e===8800||e===8801||e>=8804&&e<=8807||e===8810||e===8811||e===8814||e===8815||e===8834||e===8835||e===8838||e===8839||e===8853||e===8857||e===8869||e===8895||e===8978||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||e===9632||e===9633||e>=9635&&e<=9641||e===9650||e===9651||e===9654||e===9655||e===9660||e===9661||e===9664||e===9665||e>=9670&&e<=9672||e===9675||e>=9678&&e<=9681||e>=9698&&e<=9701||e===9711||e===9733||e===9734||e===9737||e===9742||e===9743||e===9756||e===9758||e===9792||e===9794||e===9824||e===9825||e>=9827&&e<=9829||e>=9831&&e<=9834||e===9836||e===9837||e===9839||e===9886||e===9887||e===9919||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||e===9955||e===9960||e===9961||e>=9963&&e<=9969||e===9972||e>=9974&&e<=9977||e===9979||e===9980||e===9982||e===9983||e===10045||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||e===65533||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||e===127375||e===127376||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109}function op(e){return e===12288||e>=65281&&e<=65376||e>=65504&&e<=65510}function up(e){return e>=4352&&e<=4447||e===8986||e===8987||e===9001||e===9002||e>=9193&&e<=9196||e===9200||e===9203||e===9725||e===9726||e===9748||e===9749||e>=9776&&e<=9783||e>=9800&&e<=9811||e===9855||e>=9866&&e<=9871||e===9875||e===9889||e===9898||e===9899||e===9917||e===9918||e===9924||e===9925||e===9934||e===9940||e===9962||e===9970||e===9971||e===9973||e===9978||e===9981||e===9989||e===9994||e===9995||e===10024||e===10060||e===10062||e>=10067&&e<=10069||e===10071||e>=10133&&e<=10135||e===10160||e===10175||e===11035||e===11036||e===11088||e===11093||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12773||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||e===94192||e===94193||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101631&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||e===110589||e===110590||e>=110592&&e<=110882||e===110898||e>=110928&&e<=110930||e===110933||e>=110948&&e<=110951||e>=110960&&e<=111355||e>=119552&&e<=119638||e>=119648&&e<=119670||e===126980||e===127183||e===127374||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||e===127568||e===127569||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||e===127988||e>=127992&&e<=128062||e===128064||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||e===128378||e===128405||e===128406||e===128420||e>=128507&&e<=128591||e>=128640&&e<=128709||e===128716||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||e===128747||e===128748||e>=128756&&e<=128764||e>=128992&&e<=129003||e===129008||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129673||e>=129679&&e<=129734||e>=129742&&e<=129756||e>=129759&&e<=129769||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141}function rp(e){if(!Number.isSafeInteger(e))throw new TypeError(`Expected a code point, got \`${typeof e}\`.`)}function G0(e,{ambiguousAsWide:a=!1}={}){return rp(e),op(e)||up(e)||a&&sp(e)?2:1}const cp=new Intl.Segmenter,fp=new RegExp("^(?:\\p{Default_Ignorable_Code_Point}|\\p{Control}|\\p{Mark}|\\p{Surrogate})+$","v"),Tp=new RegExp("^[\\p{Default_Ignorable_Code_Point}\\p{Control}\\p{Format}\\p{Mark}\\p{Surrogate}]+","v"),hp=new RegExp("^\\p{RGI_Emoji}$","v"),dp=new RegExp("^\\p{Emoji_Presentation}$","v");function V0(e){return e.replace(Tp,"")}function Ep(e){return fp.test(e)}function Ap(e){const $=V0(e).codePointAt(0),s=String.fromCodePoint($),u=dp.test(s),f=e.includes("️"),r=e.includes("︎"),T=[...e].length,d=T>1&&!(T===2&&r&&!f);return f||u&&!r||d}function Lp(e,a){let $=0;if(e.length>1)for(const s of e.slice(1))s>="＀"&&s<="￯"&&($+=G0(s.codePointAt(0),a));return $}function mp(e,a={}){if(typeof e!="string"||e.length===0)return 0;const{ambiguousIsNarrow:$=!0,countAnsiEscapeCodes:s=!1}=a;let u=e;if(s||(u=lp(u)),u.length===0)return 0;let f=0;const r={ambiguousAsWide:!$};for(const{segment:T}of cp.segment(u)){if(Ep(T))continue;if(hp.test(T)&&Ap(T)){f+=2;continue}const d=V0(T).codePointAt(0);f+=G0(d,r),f+=Lp(T,r)}return f}const W0={help:{description:"사용 가능한 모든 명령어를 보여줍니다.",execute:()=>{const e=s=>mp(s,{ambiguousIsNarrow:!0}),a=(s,u)=>{const f=e(s.replace(/[가-힣]/g,"z"));return s+" ".repeat(Math.max(0,u-f))},$=Object.entries(W0).filter(([s])=>s!=="help").map(([s,{description:u}])=>`${"  "+a(s,15)} →    ${u}`);return b.jsxs("div",{className:"max-w-4xl mx-2 md:mx-auto font-mono leading-relaxed space-y-4",children:[b.jsxs("div",{className:"mb-4",children:[b.jsx("div",{className:"text-cyan-400 font-semibold mb-1",children:"Available Commands:"}),b.jsx("div",{className:"text-gray-400 text-xs",children:"Use 'command_name' to execute. Tab for autocomplete."})]}),b.jsx("div",{className:"bg-gray-950 p-3 border-l-2 border-cyan-500",children:b.jsx("div",{className:"space-y-0",children:$.map((s,u)=>b.jsx("div",{className:"text-gray-300 py-0.5",children:s},u))})}),b.jsx("div",{className:"mt-3 text-xs text-gray-500",children:"→ Type a command name and press Enter to execute"})]})}},about:{description:"선배의 여정을 돌아봅니다.",execute:()=>{const e=[{period:"서광원 팀장님 2016.?? - 2025.08.29",role:"백엔드 개발자 / 팀장",team:"호텔 CMS 개발팀",highlights:["TideSquare CMS 프로젝트 리딩 / 전반적인 개발","신규 CMS 연동 / 신규 채널 구축 프로젝트 주도","팀 내 협업 프로세스와 코드 리뷰 문화에 적응"]},{period:"이현주 2024.10 - 2025.08",role:"주니어 백엔드 개발자",team:"여행 플랫폼 서비스팀",highlights:["서광원 시니어와 함께 다양한 프로젝트 협업","Kakao 연동, Tripbtoz 파트너 연동 등 외부 시스템 통합","운영 이슈 해결 및 시스템 안정성 개선 경험 축적"]}];return b.jsxs("div",{className:"font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4",children:[b.jsxs("div",{className:"mb-4",children:[b.jsx("div",{className:"text-cyan-400 font-semibold",children:"Career About Report"}),b.jsx("div",{className:"text-gray-400 text-xs",children:"Subject: 서광원 | Timeline: Professional Experience"})]}),e.map((a,$)=>b.jsxs("div",{className:"mb-6",children:[b.jsxs("div",{className:"mb-2",children:[b.jsx("div",{className:"text-yellow-400 font-semibold",children:a.period}),b.jsxs("div",{className:"text-white text-xs",children:[a.role," @ ",a.team]})]}),b.jsx("div",{className:"bg-gray-950 p-3 border-l-2 border-yellow-500 ml-2",children:a.highlights.map((s,u)=>b.jsxs("div",{className:"text-gray-300 py-0.5",children:["• ",s]},u))})]},$)),b.jsx("div",{className:"mt-6 pt-2 border-t border-gray-700",children:b.jsx("div",{className:"text-cyan-400 text-xs",children:"✓ Career progression documented. Total experience: 8+ years"})})]})}},impact:{description:"조직에 남긴 대표적인 성과를 기록합니다.",execute:()=>{const e=[{category:"REVENUE_GROWTH",impact:"매출 성장 기여",details:["신규 채널 확장 프로젝트 6건을 통한 매출 다각화","파트너 연동 시스템으로 수익원 확장","서비스 안정성 향상으로 고객 이탈 방지"]},{category:"OPERATIONAL_EFFICIENCY",impact:"운영 효율성 극대화",details:["운영 프로세스 자동화 10건으로 리소스 절약","SQL 쿼리 최적화로 응답속도 90% 단축","재작업 최소화로 개발 생산성 향상"]},{category:"SYSTEM_RELIABILITY",impact:"시스템 안정성 강화",details:["마감/취소/정산 로직 강화로 오류 방지","트래픽 처리 개선으로 서비스 중단 최소화","오류 예방 시스템 구축으로 사전 대응 체계 확립"]},{category:"CUSTOMER_SATISFACTION",impact:"고객 만족도 개선",details:["고객 피드백 반영 9건으로 사용성 향상","파트너 요구사항 적극 수용으로 파트너십 강화","서비스 확장 기능 7건으로 고객 선택권 확대"]}];return b.jsxs("div",{className:"font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4",children:[b.jsxs("div",{className:"mb-4",children:[b.jsx("div",{className:"text-cyan-400 font-semibold",children:"Business Impact Analysis"}),b.jsx("div",{className:"text-gray-400 text-xs",children:"Subject: 서광원 | Period: 2023.03 - 2024.08"})]}),e.map((a,$)=>b.jsxs("div",{className:"mb-4",children:[b.jsx("div",{className:"mb-1",children:b.jsxs("div",{className:"text-green-400 font-semibold",children:[a.category,": ",a.impact]})}),b.jsx("div",{className:"bg-gray-950 p-3 border-l-2 border-green-500 ml-2",children:a.details.map((s,u)=>b.jsxs("div",{className:"text-gray-300 py-0.5",children:["• ",s]},u))})]},$)),b.jsx("div",{className:"mt-6 pt-2 border-t border-gray-700",children:b.jsx("div",{className:"text-green-400 text-xs",children:"✓ Impact assessment complete. Overall contribution: SIGNIFICANT POSITIVE"})})]})}},achievements:{description:"세부적인 업적과 기여를 나열합니다.",execute:()=>{const e=[{category:"PROJECT_LAUNCH",items:["신규 채널 확장 프로젝트 6건","매출 성장 견인"]},{category:"PERFORMANCE_OPT",items:["SQL 쿼리 최적화 4건","트래픽 처리 개선 4건","응답속도 최대 90% 단축"]},{category:"AUTOMATION",items:["운영 프로세스 자동화 10건","리소스 절감 및 오류 방지","재작업 최소화"]},{category:"NEW_FEATURES",items:["Kakao 연동 시스템","Tripbtoz 파트너 연동","서비스 확장 기능 7건"]},{category:"PROCESS_IMPROVE",items:["마감/취소/정산 로직 강화","운영 효율화 12건","시스템 안정성 향상"]},{category:"QUALITY_ENHANCE",items:["고객 피드백 반영 9건","파트너 요구사항 수용","오류 예방 시스템 구축"]}];return b.jsxs("div",{className:"font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4",children:[b.jsxs("div",{className:"mb-4",children:[b.jsx("div",{className:"text-cyan-400 font-semibold",children:"Achievements Report"}),b.jsxs("div",{className:"text-gray-400 text-xs",children:["Generated: ",new Date().toISOString().split("T")[0]]})]}),e.map((a,$)=>b.jsxs("div",{className:"mb-4",children:[b.jsxs("div",{className:"text-yellow-400 font-semibold mb-1",children:[a.category,":"]}),b.jsx("div",{className:"bg-gray-950 p-3 border-l-2 border-yellow-500 ml-2",children:a.items.map((s,u)=>b.jsxs("div",{className:"text-gray-300 py-0.5",children:["• ",s]},u))})]},$)),b.jsx("div",{className:"mt-4 pt-2 border-t border-gray-700",children:b.jsxs("div",{className:"text-green-400 text-xs",children:["✓ Report generated successfully. Total categories: ",e.length]})})]})}},recommend:{description:"이 분의 역량과 추천 사유를 기록합니다.",execute:()=>{const e=[{title:"RESPONSIBILITY",desc:["어떤 상황에서도 맡은 일을 끝까지 책임지고 완수","동료들에게 안정감과 신뢰를 주는 든든한 리더"]},{title:"COLLABORATION",desc:["다양한 의견을 열린 마음으로 경청하고 조율","갈등 상황에서도 빠르게 합의점을 찾아내는 능력"]},{title:"LEADERSHIP",desc:["위기 상황에서도 침착함을 잃지 않고 방향 제시","역할을 명확히 나눠주어 혼란 최소화, 팀의 자신감 극대화"]},{title:"MENTORING",desc:["실질적이고 actionable(실행 가능한) 피드백 제공","팀원 개개인의 강점을 살리고 부족한 점을 보완하도록 돕는 멘토"]},{title:"HUMAN_CARE",desc:["업무 외적으로도 동료의 상황을 세심하게 살핌",'단순한 팀워크를 넘어 "함께 일하고 싶은 팀 분위기"를 만들어냄']}];return b.jsxs("div",{className:"font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4",children:[b.jsxs("div",{className:"mb-4",children:[b.jsx("div",{className:"text-cyan-400 font-semibold",children:"Recommendation Report"}),b.jsx("div",{className:"text-gray-400 text-xs",children:"Subject: 서광원 | Evaluator: 후배 개발자"})]}),b.jsxs("div",{className:"mb-6",children:[b.jsx("div",{className:"text-white font-semibold mb-2",children:"Executive Summary:"}),b.jsx("div",{className:"bg-gray-950 p-3 border-l-2 border-cyan-500",children:b.jsxs("div",{className:"text-gray-300 leading-relaxed",children:["서광원 님은 제가 경험한 동료 중 최고의 커뮤니케이터이자 협업형 리더입니다.",b.jsx("br",{}),"수많은 동료들과 함께했지만, 커뮤니케이션과 협업 역량에서 서광원 님만큼 뛰어난 분은 없었습니다.",b.jsx("br",{}),b.jsx("br",{}),"선배님은 단순히 의견을 맞추는 수준을 넘어서, 이해관계가 다른 사람들까지 빠르게 한 방향으로 모아내는 힘이 있었습니다."]})})]}),b.jsx("div",{className:"mb-4",children:b.jsx("div",{className:"text-white font-semibold mb-2",children:"Core Competencies:"})}),e.map((a,$)=>b.jsxs("div",{className:"mb-4",children:[b.jsxs("div",{className:"text-green-400 font-semibold mb-1",children:[a.title,":"]}),b.jsx("div",{className:"bg-gray-950 p-3 border-l-2 border-green-500 ml-2",children:a.desc.map((s,u)=>b.jsxs("div",{className:"text-gray-300 py-0.5",children:["• ",s]},u))})]},$)),b.jsx("div",{className:"mt-6 pt-2 border-t border-gray-700",children:b.jsx("div",{className:"text-green-400 text-xs",children:"✓ Recommendation: STRONGLY POSITIVE | Confidence: HIGH"})})]})}},epilogue:{description:"후배로서 남기고 싶은 마지막 응원을 기록합니다.",execute:()=>{const e=["많은 면접을 거치며 다양한 피드백을 얻고, 스스로도 깊은 성찰을 하신 걸 보았습니다.","그 과정에서 때로는 부족한 점에 마음이 더 쏠리기도 하지만, 사실 이미 충분히 큰 강점들을 지니고 계심을 잊지 않으셨으면 합니다.","하지만 저는 누구보다 가까이에서, 서광원 님이 얼마나 뛰어난 역량과 책임감을 발휘해오셨는지를 보아왔습니다.","선배님은 이미 충분히 대단한 분이고, 이번 경험들은 앞으로 더 큰 가능성을 쌓아가는 밑거름이 될 것이라 믿습니다.","제가 이 CLI를 만든 이유는 단순합니다. 저와 함께한 시간 동안 확인한 선배님의 진짜 가치와 영향력을 다른 이들에게도 전하고 싶은 마음에서 남깁니다."];return b.jsxs("div",{className:"font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4",children:[b.jsxs("div",{className:"mb-4",children:[b.jsx("div",{className:"text-cyan-400 font-semibold",children:"Personal Message"}),b.jsx("div",{className:"text-gray-400 text-xs",children:"From: 후배 | To: 광원님"})]}),b.jsx("div",{className:"space-y-4",children:e.map((a,$)=>b.jsxs("div",{className:"flex",children:[b.jsxs("div",{className:"text-yellow-400 mr-3 font-mono text-xs mt-1",children:["[",($+1).toString().padStart(2,"0"),"]"]}),b.jsx("div",{className:"text-gray-300 leading-relaxed flex-1",children:a})]},$))}),b.jsx("div",{className:"mt-6 pt-2 border-t border-gray-700",children:b.jsx("div",{className:"text-center",children:b.jsx("div",{className:"text-magenta-400 text-xs",children:"◆ 언제나 응원하고 있습니다 ◆"})})})]})}}};var Fo={exports:{}},ad;function Ip(){return ad||(ad=1,(function(e){const a=(()=>{const r={},T={font:"Standard",fontPath:"./fonts"};function d(I,S){let L={},g,D,M,q,X=[[16384,"vLayout",2],[8192,"vLayout",1],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",2],[64,"hLayout",1],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];for(g=S!==null?S:I,D=0,M=X.length;D<M;)q=X[D],g>=q[0]?(g=g-q[0],L[q[1]]=typeof L[q[1]]>"u"?q[2]:L[q[1]]):q[1]!=="vLayout"&&q[1]!=="hLayout"&&(L[q[1]]=!1),D++;return typeof L.hLayout>"u"?I===0?L.hLayout=1:I===-1?L.hLayout=0:L.hRule1||L.hRule2||L.hRule3||L.hRule4||L.hRule5||L.hRule6?L.hLayout=3:L.hLayout=2:L.hLayout===2&&(L.hRule1||L.hRule2||L.hRule3||L.hRule4||L.hRule5||L.hRule6)&&(L.hLayout=3),typeof L.vLayout>"u"?L.vRule1||L.vRule2||L.vRule3||L.vRule4||L.vRule5?L.vLayout=3:L.vLayout=0:L.vLayout===2&&(L.vRule1||L.vRule2||L.vRule3||L.vRule4||L.vRule5)&&(L.vLayout=3),L}function h(I,S,L){return I===S&&I!==L?I:!1}function A(I,S){let L="|/\\[]{}()<>";if(I==="_"){if(L.indexOf(S)!==-1)return S}else if(S==="_"&&L.indexOf(I)!==-1)return I;return!1}function y(I,S){let L="| /\\ [] {} () <>",g=L.indexOf(I),D=L.indexOf(S);if(g!==-1&&D!==-1&&g!==D&&Math.abs(g-D)!==1){const M=Math.max(g,D),q=M+1;return L.substring(M,q)}return!1}function v(I,S){let L="[] {} ()",g=L.indexOf(I),D=L.indexOf(S);return g!==-1&&D!==-1&&Math.abs(g-D)<=1?"|":!1}function U(I,S){let L="/\\ \\/ ><",g={0:"|",3:"Y",6:"X"},D=L.indexOf(I),M=L.indexOf(S);return D!==-1&&M!==-1&&M-D===1?g[D]:!1}function Y(I,S,L){return I===L&&S===L?L:!1}function Z(I,S){return I===S?I:!1}function Q(I,S){let L="|/\\[]{}()<>";if(I==="_"){if(L.indexOf(S)!==-1)return S}else if(S==="_"&&L.indexOf(I)!==-1)return I;return!1}function k(I,S){let L="| /\\ [] {} () <>",g=L.indexOf(I),D=L.indexOf(S);if(g!==-1&&D!==-1&&g!==D&&Math.abs(g-D)!==1){const M=Math.max(g,D),q=M+1;return L.substring(M,q)}return!1}function J(I,S){return I==="-"&&S==="_"||I==="_"&&S==="-"?"=":!1}function K(I,S){return I==="|"&&S==="|"?"|":!1}function i_(I,S,L){return S===" "||S===""||S===L&&I!==" "?I:S}function j(I,S,L){if(L.fittingRules.vLayout===0)return"invalid";let g,D=Math.min(I.length,S.length),M,q,X=!1,F;if(D===0)return"invalid";for(g=0;g<D;g++)if(M=I.substring(g,g+1),q=S.substring(g,g+1),M!==" "&&q!==" "){if(L.fittingRules.vLayout===1)return"invalid";if(L.fittingRules.vLayout===2)return"end";if(K(M,q)){X=X||!1;continue}if(F=!1,F=L.fittingRules.vRule1?Z(M,q):F,F=!F&&L.fittingRules.vRule2?Q(M,q):F,F=!F&&L.fittingRules.vRule3?k(M,q):F,F=!F&&L.fittingRules.vRule4?J(M,q):F,X=!0,!F)return"invalid"}return X?"end":"valid"}function o_(I,S,L){let g=I.length,D=I.length;S.length;let M,q,X,F=1,n_,I_,R_;for(;F<=g;){for(M=I.slice(Math.max(0,D-F),D),q=S.slice(0,Math.min(g,F)),X=q.length,R_="",n_=0;n_<X;n_++)if(I_=j(M[n_],q[n_],L),I_==="end")R_=I_;else if(I_==="invalid"){R_=I_;break}else R_===""&&(R_="valid");if(R_==="invalid"){F--;break}if(R_==="end")break;R_==="valid"&&F++}return Math.min(g,F)}function f_(I,S,L){let g,D=Math.min(I.length,S.length),M,q,X="",F;for(g=0;g<D;g++)M=I.substring(g,g+1),q=S.substring(g,g+1),M!==" "&&q!==" "?L.fittingRules.vLayout===1||L.fittingRules.vLayout===2?X+=i_(M,q):(F=!1,F=L.fittingRules.vRule5?K(M,q):F,F=!F&&L.fittingRules.vRule1?Z(M,q):F,F=!F&&L.fittingRules.vRule2?Q(M,q):F,F=!F&&L.fittingRules.vRule3?k(M,q):F,F=!F&&L.fittingRules.vRule4?J(M,q):F,X+=F):X+=i_(M,q);return X}function $_(I,S,L,g){let D=I.length,M=S.length,q=I.slice(0,Math.max(0,D-L)),X=I.slice(Math.max(0,D-L),D),F=S.slice(0,Math.min(L,M)),n_,I_,R_,S_=[],C_,B_=[];for(I_=X.length,n_=0;n_<I_;n_++)n_>=M?R_=X[n_]:R_=f_(X[n_],F[n_],g),S_.push(R_);return C_=S.slice(Math.min(L,M),M),B_.concat(q,S_,C_)}function y_(I,S){let L,g=I.length,D="";for(L=0;L<S;L++)D+=" ";for(L=0;L<g;L++)I[L]+=D}function P_(I,S,L){let g=I[0].length,D=S[0].length,M;return g>D?y_(S,g-D):D>g&&y_(I,D-g),M=o_(I,S,L),$_(I,S,M,L)}function K_(I,S,L){if(L.fittingRules.hLayout===0)return 0;let g,D=I.length,M=S.length,q=D,X=1,F=!1,n_=!1,I_,R_,S_,C_;if(D===0)return 0;_:for(;X<=q;){const B_=D-X;for(I_=I.substring(B_,B_+X),R_=S.substring(0,Math.min(X,M)),g=0;g<Math.min(X,M);g++)if(S_=I_.substring(g,g+1),C_=R_.substring(g,g+1),S_!==" "&&C_!==" "){if(L.fittingRules.hLayout===1){X=X-1;break _}else if(L.fittingRules.hLayout===2){(S_===L.hardBlank||C_===L.hardBlank)&&(X=X-1);break _}else if(F=!0,n_=!1,n_=L.fittingRules.hRule1?h(S_,C_,L.hardBlank):n_,n_=!n_&&L.fittingRules.hRule2?A(S_,C_,L.hardBlank):n_,n_=!n_&&L.fittingRules.hRule3?y(S_,C_,L.hardBlank):n_,n_=!n_&&L.fittingRules.hRule4?v(S_,C_,L.hardBlank):n_,n_=!n_&&L.fittingRules.hRule5?U(S_,C_,L.hardBlank):n_,n_=!n_&&L.fittingRules.hRule6?Y(S_,C_,L.hardBlank):n_,!n_){X=X-1;break _}}if(F)break;X++}return Math.min(q,X)}function H_(I,S,L,g){let D,M,q=[],X,F,n_,I_,R_,S_,C_,B_;for(D=0;D<g.height;D++){C_=I[D],B_=S[D],R_=C_.length,S_=B_.length,X=R_-L,F=C_.substr(0,Math.max(0,X)),n_="";const mi=Math.max(0,R_-L);var ye=C_.substring(mi,mi+L),Ze=B_.substring(0,Math.min(L,S_));for(M=0;M<L;M++){var G_=M<R_?ye.substring(M,M+1):" ",F_=M<S_?Ze.substring(M,M+1):" ";if(G_!==" "&&F_!==" ")if(g.fittingRules.hLayout===1)n_+=i_(G_,F_,g.hardBlank);else if(g.fittingRules.hLayout===2)n_+=i_(G_,F_,g.hardBlank);else{var M_="";M_=!M_&&g.fittingRules.hRule1?h(G_,F_,g.hardBlank):M_,M_=!M_&&g.fittingRules.hRule2?A(G_,F_,g.hardBlank):M_,M_=!M_&&g.fittingRules.hRule3?y(G_,F_,g.hardBlank):M_,M_=!M_&&g.fittingRules.hRule4?v(G_,F_,g.hardBlank):M_,M_=!M_&&g.fittingRules.hRule5?U(G_,F_,g.hardBlank):M_,M_=!M_&&g.fittingRules.hRule6?Y(G_,F_,g.hardBlank):M_,M_=M_||i_(G_,F_,g.hardBlank),n_+=M_}else n_+=i_(G_,F_,g.hardBlank)}L>=S_?I_="":I_=B_.substring(L,L+Math.max(0,S_-L)),q[D]=F+n_+I_}return q}function it(I){let S=[],L;for(L=0;L<I;L++)S[L]="";return S}const Z_=function(I){return Math.max.apply(Math,I.map(function(S,L){return S.length}))};function m_(I,S,L){return I.reduce(function(g,D){return H_(g,D.fig,D.overlap,L)},it(S))}function P(I,S,L){const g={};for(let D=I.length;--D;){let M=m_(I.slice(0,D),S,L);if(Z_(M)<=L.width){g.outputFigText=M,D<I.length?g.chars=I.slice(D):g.chars=[];break}}return g}function z(I,S,L){let g,D,M=0,q,X,F,n_=L.height,I_=[],R_,S_,C_=[],B_,ye,Ze,G_,F_;for(X=it(n_),L.width>0&&L.whitespaceBreak&&(S_={chars:[],overlap:M}),L.printDirection===1&&(I=I.split("").reverse().join("")),F=I.length,g=0;g<F;g++)if(B_=I.substring(g,g+1),ye=B_.match(/\s/),D=S[B_.charCodeAt(0)],G_=null,D){if(L.fittingRules.hLayout!==0){for(M=1e4,q=0;q<L.height;q++)M=Math.min(M,K_(X[q],D[q],L));M=M===1e4?0:M}if(L.width>0&&(L.whitespaceBreak?(Ze=m_(S_.chars.concat([{fig:D,overlap:M}]),n_,L),G_=m_(C_.concat([{fig:Ze,overlap:S_.overlap}]),n_,L),R_=Z_(G_)):(G_=H_(X,D,M,L),R_=Z_(G_)),R_>=L.width&&g>0&&(L.whitespaceBreak?(X=m_(C_.slice(0,-1),n_,L),C_.length>1&&(I_.push(X),X=it(n_)),C_=[]):(I_.push(X),X=it(n_)))),L.width>0&&L.whitespaceBreak&&((!ye||g===F-1)&&S_.chars.push({fig:D,overlap:M}),ye||g===F-1)){for(F_=null;G_=m_(S_.chars,n_,L),R_=Z_(G_),R_>=L.width;)F_=P(S_.chars,n_,L),S_={chars:F_.chars},I_.push(F_.outputFigText);R_>0&&(F_?C_.push({fig:G_,overlap:1}):C_.push({fig:G_,overlap:S_.overlap})),ye&&(C_.push({fig:D,overlap:M}),X=it(n_)),g===F-1&&(X=m_(C_,n_,L)),S_={chars:[],overlap:M};continue}X=H_(X,D,M,L)}return Z_(X)>0&&I_.push(X),L.showHardBlanks!==!0&&I_.forEach(function(M_){for(F=M_.length,q=0;q<F;q++)M_[q]=M_[q].replace(new RegExp("\\"+L.hardBlank,"g")," ")}),I_}const __=function(I,S){let L=["hLayout","hRule1","hRule2","hRule3","hRule4","hRule5","hRule6"],g={},D;if(I==="default")for(D=0;D<L.length;D++)g[L[D]]=S.fittingRules[L[D]];else if(I==="full")g={hLayout:0,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(I==="fitted")g={hLayout:1,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(I==="controlled smushing")g={hLayout:3,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(I==="universal smushing")g={hLayout:2,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return g},T_=function(I,S){let L=["vLayout","vRule1","vRule2","vRule3","vRule4","vRule5"],g={},D;if(I==="default")for(D=0;D<L.length;D++)g[L[D]]=S.fittingRules[L[D]];else if(I==="full")g={vLayout:0,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(I==="fitted")g={vLayout:1,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(I==="controlled smushing")g={vLayout:3,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(I==="universal smushing")g={vLayout:2,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return g},p=function(I,S,L){L=L.replace(/\r\n/g,`
`).replace(/\r/g,`
`);let g=L.split(`
`),D=[],M,q,X;for(q=g.length,M=0;M<q;M++)D=D.concat(z(g[M],r[I],S));for(q=D.length,X=D[0],M=1;M<q;M++)X=P_(X,D[M],S);return X?X.join(`
`):""};function W(I,S){let L=JSON.parse(JSON.stringify(I)),g,D;if(typeof S.horizontalLayout<"u"){g=__(S.horizontalLayout,I);for(D in g)g.hasOwnProperty(D)&&(L.fittingRules[D]=g[D])}if(typeof S.verticalLayout<"u"){g=T_(S.verticalLayout,I);for(D in g)g.hasOwnProperty(D)&&(L.fittingRules[D]=g[D])}return L.printDirection=typeof S.printDirection<"u"?S.printDirection:I.printDirection,L.showHardBlanks=S.showHardBlanks||!1,L.width=S.width||-1,L.whitespaceBreak=S.whitespaceBreak||!1,L}const w=function(I,S,L){return w.text(I,S,L)};return w.text=async function(I,S,L){let g="";return I=I+"",typeof arguments[1]=="function"&&(L=S,S={},S.font=T.font),typeof S=="string"?(g=S,S={}):(S=S||{},g=S.font||T.font),await new Promise((D,M)=>{w.loadFont(g,function(q,X){if(q){M(q),L&&L(q);return}const F=p(g,W(X,S),I);D(F),L&&L(null,F)})})},w.textSync=function(I,S){let L="";I=I+"",typeof S=="string"?(L=S,S={}):(S=S||{},L=S.font||T.font);var g=W(w.loadFontSync(L),S);return p(L,g,I)},w.metadata=function(I,S){return I=I+"",new Promise(function(L,g){w.loadFont(I,function(D,M){if(D){S&&S(D),g(D);return}S&&S(null,M,r[I].comment),L([M,r[I].comment])})})},w.defaults=function(I){if(typeof I=="object"&&I!==null)for(var S in I)I.hasOwnProperty(S)&&(T[S]=I[S]);return JSON.parse(JSON.stringify(T))},w.parseFont=function(I,S){S=S.replace(/\r\n/g,`
`).replace(/\r/g,`
`),r[I]={};var L=S.split(`
`),g=L.splice(0,1)[0].split(" "),D=r[I],M={};if(M.hardBlank=g[0].substr(5,1),M.height=parseInt(g[1],10),M.baseline=parseInt(g[2],10),M.maxLength=parseInt(g[3],10),M.oldLayout=parseInt(g[4],10),M.numCommentLines=parseInt(g[5],10),M.printDirection=g.length>=6?parseInt(g[6],10):0,M.fullLayout=g.length>=7?parseInt(g[7],10):null,M.codeTagCount=g.length>=8?parseInt(g[8],10):null,M.fittingRules=d(M.oldLayout,M.fullLayout),D.options=M,M.hardBlank.length!==1||isNaN(M.height)||isNaN(M.baseline)||isNaN(M.maxLength)||isNaN(M.oldLayout)||isNaN(M.numCommentLines))throw new Error("FIGlet header contains invalid values.");let q=[],X;for(X=32;X<=126;X++)q.push(X);if(q=q.concat(196,214,220,228,246,252,223),L.length<M.numCommentLines+M.height*q.length)throw new Error("FIGlet file is missing data.");let F,n_,I_=!1;for(D.comment=L.splice(0,M.numCommentLines).join(`
`),D.numChars=0;L.length>0&&D.numChars<q.length;){for(F=q[D.numChars],D[F]=L.splice(0,M.height),X=0;X<M.height;X++)typeof D[F][X]>"u"?D[F][X]="":(n_=new RegExp("\\"+D[F][X].substr(D[F][X].length-1,1)+"+$"),D[F][X]=D[F][X].replace(n_,""));D.numChars++}for(;L.length>0;){if(F=L.splice(0,1)[0].split(" ")[0],/^-?0[xX][0-9a-fA-F]+$/.test(F))F=parseInt(F,16);else if(/^-?0[0-7]+$/.test(F))F=parseInt(F,8);else if(/^-?[0-9]+$/.test(F))F=parseInt(F,10);else{if(F==="")break;console.log("Invalid data:"+F),I_=!0;break}if(F==-1){console.log("The char code -1 is not permitted."),I_=!0;break}else if(F<-2147483648){console.log("The char code cannot be less than -2147483648."),I_=!0;break}else if(F>2147483647){console.log("The char code cannot be greater than 2147483647."),I_=!0;break}for(D[F]=L.splice(0,M.height),X=0;X<M.height;X++)typeof D[F][X]>"u"?D[F][X]="":(n_=new RegExp("\\"+D[F][X].substr(D[F][X].length-1,1)+"+$"),D[F][X]=D[F][X].replace(n_,""));D.numChars++}if(I_===!0)throw new Error("Error parsing data.");return M},w.loadFont=function(I,S){if(r[I])return S&&S(null,r[I].options),Promise.resolve();if(typeof fetch!="function")throw console.error("figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch"),new Error("fetch is required for figlet.js to work.");return fetch(T.fontPath+"/"+I+".flf").then(function(L){if(L.ok)return L.text();throw console.log("Unexpected response",L),new Error("Network response was not ok.")}).then(function(L){S&&S(null,w.parseFont(I,L))}).catch(S)},w.loadFontSync=function(I){if(r[I])return r[I].options;throw new Error("synchronous font loading is not implemented for the browser")},w.preloadFonts=function(I,S){let L=[];return I.reduce(function(g,D){return g.then(function(){return fetch(T.fontPath+"/"+D+".flf").then(M=>M.text()).then(function(M){L.push(M)})})},Promise.resolve()).then(function(g){for(var D in I)I.hasOwnProperty(D)&&w.parseFont(I[D],L[D]);S&&S()})},w.figFonts=r,w})();e.exports=a})(Fo)),Fo.exports}var pp=Ip();const yp=ld(pp),Rp=`flf2a$ 10 10 27 63 7 0 191 0
Font Author: ?

More info on font here:

https://web.archive.org/web/20120819044459/http://www.roysac.com/thedrawfonts-tdf.asp

FIGFont created with: http://patorjk.com/figfont-editor
$  $@
$  $@
$  $@
$  $@
$  $@
$  $@
$  $@
$  $@
$  $@
$  $@@
 ___       @
|\\  \\      @
\\ \\  \\     @
 \\ \\  \\    @
  \\ \\__\\   @
   \\|__|   @
       ___ @
      |\\__\\@
      \\|__|@
           @@
@
@
@
@
@
@
@
@
@
@@
    ___    ___           @
   |\\  \\  |\\  \\          @
 __\\_\\  \\_\\_\\  \\_____    @
|\\____    ___    ____\\   @
\\|___| \\  \\__|\\  \\___|   @
    __\\_\\  \\_\\_\\  \\_____ @
   |\\____    ____   ____\\@
   \\|___| \\  \\__|\\  \\___|@
         \\ \\__\\ \\ \\__\\   @
          \\|__|  \\|__|   @@
   ___         @
 _|\\  \\__      @
|\\   ____\\     @
\\ \\  \\___|_    @
 \\ \\_____  \\   @
  \\|____|\\  \\  @
    ____\\_\\  \\ @
   |\\___    __\\@
   \\|___|\\__\\_|@
        \\|__|  @@
 ___   /\\    @
|\\__\\ / /\\   @
\\|__|/ / /   @
    / / /___ @
   / / /|\\__\\@
  |\\/ / \\|__|@
   \\|/       @
             @
             @
             @@
 ________        @
|\\   __  \\       @
\\ \\  \\|\\  \\  /\\  @
 \\ \\__     \\/  \\ @
  \\|_/  __     /|@
    /  /_|\\   / /@
   /_______   \\/ @
   |_______|\\__\\ @
           \\|__| @
                 @@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
      @
      @
  ___ @
 |\\__\\@
 \\|__|@
      @
      @
      @
      @
      @@
@
@
@
@
@
@
@
@
@
@@
         @
         @
         @
   ___   @
  |\\  \\  @
  \\ \\  \\ @
  _\\/  /|@
 |\\___/ /@
 \\|___|/ @
         @@
               @
               @
 ____________  @
|\\____________\\@
\\|____________|@
               @
               @
               @
               @
               @@
     @
     @
     @
     @
 ___ @
|\\__\\@
\\|__|@
     @
     @
     @@
      ___ @
     /  /|@
    /  // @
   /  //  @
  /  //   @
 /_ //    @
|__|/     @
          @
          @
          @@
 ________     @
|\\   __  \\    @
\\ \\  \\|\\  \\   @
 \\ \\  \\\\\\  \\  @
  \\ \\  \\\\\\  \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
  _____     @
 / __  \\    @
|\\/_|\\  \\   @
\\|/ \\ \\  \\  @
     \\ \\  \\ @
      \\ \\__\\@
       \\|__|@
            @
            @
            @@
  _______     @
 /  ___  \\    @
/__/|_/  /|   @
|__|//  / /   @
    /  /_/__  @
   |\\________\\@
    \\|_______|@
              @
              @
              @@
 ________     @
|\\_____  \\    @
\\|____|\\ /_   @
      \\|\\  \\  @
     __\\_\\  \\ @
    |\\_______\\@
    \\|_______|@
              @
              @
              @@
 ___   ___     @
|\\  \\ |\\  \\    @
\\ \\  \\\\_\\  \\   @
 \\ \\______  \\  @
  \\|_____|\\  \\ @
         \\ \\__\\@
          \\|__|@
               @
               @
               @@
 ________      @
|\\   ____\\     @
\\ \\  \\___|_    @
 \\ \\_____  \\   @
  \\|____|\\  \\  @
    ____\\_\\  \\ @
   |\\_________\\@
   \\|_________|@
               @
               @@
 ________     @
|\\   ____\\    @
\\ \\  \\___|    @
 \\ \\  \\____   @
  \\ \\  ___  \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ________  @
|\\_____  \\ @
 \\|___/  /|@
     /  / /@
    /  / / @
   /__/ /  @
   |__|/   @
           @
           @
           @@
 ________     @
|\\   __  \\    @
\\ \\  \\|\\  \\   @
 \\ \\   __  \\  @
  \\ \\  \\|\\  \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ________     @
|\\  ___  \\    @
\\ \\____   \\   @
 \\|____|\\  \\  @
     __\\_\\  \\ @
    |\\_______\\@
    \\|_______|@
              @
              @
              @@
        @
 ___    @
|\\__\\   @
\\|__|   @
    ___ @
   |\\__\\@
   \\|__|@
        @
        @
        @@
           @
  ___      @
 |\\__\\     @
 \\|__|     @
     ___   @
    |\\  \\  @
    \\ \\  \\ @
    _\\/  /|@
   |\\___/ /@
   \\|___|/ @@
    ___ @
   /  /|@
  /  / /@
 /  / / @
|\\  \\/  @
\\ \\  \\  @
 \\ \\__\\ @
  \\|__| @
        @
        @@
@
@
@
@
@
@
@
@
@
@@
 ___    @
|\\  \\   @
\\ \\  \\  @
 \\ \\  \\ @
  \\/  /|@
  /  // @
 /_ //  @
|__|/   @
        @
        @@
 ________      @
|\\_____  \\     @
\\|____|\\  \\    @
      \\ \\__\\   @
       \\|__|   @
           ___ @
          |\\__\\@
          \\|__|@
               @
               @@
@
@
@
@
@
@
@
@
@
@@
 ________     @
|\\   __  \\    @
\\ \\  \\|\\  \\   @
 \\ \\   __  \\  @
  \\ \\  \\ \\  \\ @
   \\ \\__\\ \\__\\@
    \\|__|\\|__|@
              @
              @
              @@
 ________     @
|\\   __  \\    @
\\ \\  \\|\\ /_   @
 \\ \\   __  \\  @
  \\ \\  \\|\\  \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ________     @
|\\   ____\\    @
\\ \\  \\___|    @
 \\ \\  \\       @
  \\ \\  \\____  @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ________     @
|\\   ___ \\    @
\\ \\  \\_|\\ \\   @
 \\ \\  \\ \\\\ \\  @
  \\ \\  \\_\\\\ \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 _______      @
|\\  ___ \\     @
\\ \\   __/|    @
 \\ \\  \\_|/__  @
  \\ \\  \\_|\\ \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ________ @
|\\  _____\\@
\\ \\  \\__/ @
 \\ \\   __\\@
  \\ \\  \\_|@
   \\ \\__\\ @
    \\|__| @
          @
          @
          @@
 ________     @
|\\   ____\\    @
\\ \\  \\___|    @
 \\ \\  \\  ___  @
  \\ \\  \\|\\  \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ___  ___     @
|\\  \\|\\  \\    @
\\ \\  \\\\\\  \\   @
 \\ \\   __  \\  @
  \\ \\  \\ \\  \\ @
   \\ \\__\\ \\__\\@
    \\|__|\\|__|@
              @
              @
              @@
 ___     @
|\\  \\    @
\\ \\  \\   @
 \\ \\  \\  @
  \\ \\  \\ @
   \\ \\__\\@
    \\|__|@
         @
         @
         @@
    ___     @
   |\\  \\    @
   \\ \\  \\   @
 __ \\ \\  \\  @
|\\  \\\\_\\  \\ @
\\ \\________\\@
 \\|________|@
            @
            @
            @@
 ___  __       @
|\\  \\|\\  \\     @
\\ \\  \\/  /|_   @
 \\ \\   ___  \\  @
  \\ \\  \\\\ \\  \\ @
   \\ \\__\\\\ \\__\\@
    \\|__| \\|__|@
               @
               @
               @@
 ___          @
|\\  \\         @
\\ \\  \\        @
 \\ \\  \\       @
  \\ \\  \\____  @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 _____ ______      @
|\\   _ \\  _   \\    @
\\ \\  \\\\\\__\\ \\  \\   @
 \\ \\  \\\\|__| \\  \\  @
  \\ \\  \\    \\ \\  \\ @
   \\ \\__\\    \\ \\__\\@
    \\|__|     \\|__|@
                   @
                   @
                   @@
 ________      @
|\\   ___  \\    @
\\ \\  \\\\ \\  \\   @
 \\ \\  \\\\ \\  \\  @
  \\ \\  \\\\ \\  \\ @
   \\ \\__\\\\ \\__\\@
    \\|__| \\|__|@
               @
               @
               @@
 ________     @
|\\   __  \\    @
\\ \\  \\|\\  \\   @
 \\ \\  \\\\\\  \\  @
  \\ \\  \\\\\\  \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ________   @
|\\   __  \\  @
\\ \\  \\|\\  \\ @
 \\ \\   ____\\@
  \\ \\  \\___|@
   \\ \\__\\   @
    \\|__|   @
            @
            @
            @@
 ________      @
|\\   __  \\     @
\\ \\  \\|\\  \\    @
 \\ \\  \\\\\\  \\   @
  \\ \\  \\\\\\  \\  @
   \\ \\_____  \\ @
    \\|___| \\__\\@
          \\|__|@
               @
               @@
 ________     @
|\\   __  \\    @
\\ \\  \\|\\  \\   @
 \\ \\   _  _\\  @
  \\ \\  \\\\  \\| @
   \\ \\__\\\\ _\\ @
    \\|__|\\|__|@
              @
              @
              @@
 ________      @
|\\   ____\\     @
\\ \\  \\___|_    @
 \\ \\_____  \\   @
  \\|____|\\  \\  @
    ____\\_\\  \\ @
   |\\_________\\@
   \\|_________|@
               @
               @@
 _________   @
|\\___   ___\\ @
\\|___ \\  \\_| @
     \\ \\  \\  @
      \\ \\  \\ @
       \\ \\__\\@
        \\|__|@
             @
             @
             @@
 ___  ___     @
|\\  \\|\\  \\    @
\\ \\  \\\\\\  \\   @
 \\ \\  \\\\\\  \\  @
  \\ \\  \\\\\\  \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ___      ___ @
|\\  \\    /  /|@
\\ \\  \\  /  / /@
 \\ \\  \\/  / / @
  \\ \\    / /  @
   \\ \\__/ /   @
    \\|__|/    @
              @
              @
              @@
 ___       __      @
|\\  \\     |\\  \\    @
\\ \\  \\    \\ \\  \\   @
 \\ \\  \\  __\\ \\  \\  @
  \\ \\  \\|\\__\\_\\  \\ @
   \\ \\____________\\@
    \\|____________|@
                   @
                   @
                   @@
 ___    ___ @
|\\  \\  /  /|@
\\ \\  \\/  / /@
 \\ \\    / / @
  /     \\/  @
 /  /\\   \\  @
/__/ /\\ __\\ @
|__|/ \\|__| @
            @
            @@
  ___    ___ @
 |\\  \\  /  /|@
 \\ \\  \\/  / /@
  \\ \\    / / @
   \\/  /  /  @
 __/  / /    @
|\\___/ /     @
\\|___|/      @
             @
             @@
 ________     @
|\\_____  \\    @
 \\|___/  /|   @
     /  / /   @
    /  /_/__  @
   |\\________\\@
    \\|_______|@
              @
              @
              @@
 ______      @
|\\   ___\\    @
\\ \\  \\__|    @
 \\ \\  \\      @
  \\ \\  \\____ @
   \\ \\______\\@
    \\|______|@
             @
             @
             @@
@
@
@
@
@
@
@
@
@
@@
 ______      @
|\\___   \\    @
\\|___|\\  \\   @
     \\ \\  \\  @
     _\\_\\  \\ @
    |\\______\\@
    \\|______|@
             @
             @
             @@
     ____    @
    /    \\   @
   /  /\\  \\  @
  /  /| \\  \\ @
 /__// \\ \\__\\@
|__|/   \\|__|@
             @
             @
             @
             @@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
 ________     @
|\\   __  \\    @
\\ \\  \\|\\  \\   @
 \\ \\   __  \\  @
  \\ \\  \\ \\  \\ @
   \\ \\__\\ \\__\\@
    \\|__|\\|__|@
              @
              @
              @@
 ________     @
|\\   __  \\    @
\\ \\  \\|\\ /_   @
 \\ \\   __  \\  @
  \\ \\  \\|\\  \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ________     @
|\\   ____\\    @
\\ \\  \\___|    @
 \\ \\  \\       @
  \\ \\  \\____  @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ________     @
|\\   ___ \\    @
\\ \\  \\_|\\ \\   @
 \\ \\  \\ \\\\ \\  @
  \\ \\  \\_\\\\ \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 _______      @
|\\  ___ \\     @
\\ \\   __/|    @
 \\ \\  \\_|/__  @
  \\ \\  \\_|\\ \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ________ @
|\\  _____\\@
\\ \\  \\__/ @
 \\ \\   __\\@
  \\ \\  \\_|@
   \\ \\__\\ @
    \\|__| @
          @
          @
          @@
 ________     @
|\\   ____\\    @
\\ \\  \\___|    @
 \\ \\  \\  ___  @
  \\ \\  \\|\\  \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ___  ___     @
|\\  \\|\\  \\    @
\\ \\  \\\\\\  \\   @
 \\ \\   __  \\  @
  \\ \\  \\ \\  \\ @
   \\ \\__\\ \\__\\@
    \\|__|\\|__|@
              @
              @
              @@
 ___     @
|\\  \\    @
\\ \\  \\   @
 \\ \\  \\  @
  \\ \\  \\ @
   \\ \\__\\@
    \\|__|@
         @
         @
         @@
    ___     @
   |\\  \\    @
   \\ \\  \\   @
 __ \\ \\  \\  @
|\\  \\\\_\\  \\ @
\\ \\________\\@
 \\|________|@
            @
            @
            @@
 ___  __       @
|\\  \\|\\  \\     @
\\ \\  \\/  /|_   @
 \\ \\   ___  \\  @
  \\ \\  \\\\ \\  \\ @
   \\ \\__\\\\ \\__\\@
    \\|__| \\|__|@
               @
               @
               @@
 ___          @
|\\  \\         @
\\ \\  \\        @
 \\ \\  \\       @
  \\ \\  \\____  @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 _____ ______      @
|\\   _ \\  _   \\    @
\\ \\  \\\\\\__\\ \\  \\   @
 \\ \\  \\\\|__| \\  \\  @
  \\ \\  \\    \\ \\  \\ @
   \\ \\__\\    \\ \\__\\@
    \\|__|     \\|__|@
                   @
                   @
                   @@
 ________      @
|\\   ___  \\    @
\\ \\  \\\\ \\  \\   @
 \\ \\  \\\\ \\  \\  @
  \\ \\  \\\\ \\  \\ @
   \\ \\__\\\\ \\__\\@
    \\|__| \\|__|@
               @
               @
               @@
 ________     @
|\\   __  \\    @
\\ \\  \\|\\  \\   @
 \\ \\  \\\\\\  \\  @
  \\ \\  \\\\\\  \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ________   @
|\\   __  \\  @
\\ \\  \\|\\  \\ @
 \\ \\   ____\\@
  \\ \\  \\___|@
   \\ \\__\\   @
    \\|__|   @
            @
            @
            @@
 ________      @
|\\   __  \\     @
\\ \\  \\|\\  \\    @
 \\ \\  \\\\\\  \\   @
  \\ \\  \\\\\\  \\  @
   \\ \\_____  \\ @
    \\|___| \\__\\@
          \\|__|@
               @
               @@
 ________     @
|\\   __  \\    @
\\ \\  \\|\\  \\   @
 \\ \\   _  _\\  @
  \\ \\  \\\\  \\| @
   \\ \\__\\\\ _\\ @
    \\|__|\\|__|@
              @
              @
              @@
 ________      @
|\\   ____\\     @
\\ \\  \\___|_    @
 \\ \\_____  \\   @
  \\|____|\\  \\  @
    ____\\_\\  \\ @
   |\\_________\\@
   \\|_________|@
               @
               @@
 _________   @
|\\___   ___\\ @
\\|___ \\  \\_| @
     \\ \\  \\  @
      \\ \\  \\ @
       \\ \\__\\@
        \\|__|@
             @
             @
             @@
 ___  ___     @
|\\  \\|\\  \\    @
\\ \\  \\\\\\  \\   @
 \\ \\  \\\\\\  \\  @
  \\ \\  \\\\\\  \\ @
   \\ \\_______\\@
    \\|_______|@
              @
              @
              @@
 ___      ___ @
|\\  \\    /  /|@
\\ \\  \\  /  / /@
 \\ \\  \\/  / / @
  \\ \\    / /  @
   \\ \\__/ /   @
    \\|__|/    @
              @
              @
              @@
 ___       __      @
|\\  \\     |\\  \\    @
\\ \\  \\    \\ \\  \\   @
 \\ \\  \\  __\\ \\  \\  @
  \\ \\  \\|\\__\\_\\  \\ @
   \\ \\____________\\@
    \\|____________|@
                   @
                   @
                   @@
 ___    ___ @
|\\  \\  /  /|@
\\ \\  \\/  / /@
 \\ \\    / / @
  /     \\/  @
 /  /\\   \\  @
/__/ /\\ __\\ @
|__|/ \\|__| @
            @
            @@
  ___    ___ @
 |\\  \\  /  /|@
 \\ \\  \\/  / /@
  \\ \\    / / @
   \\/  /  /  @
 __/  / /    @
|\\___/ /     @
\\|___|/      @
             @
             @@
 ________     @
|\\_____  \\    @
 \\|___/  /|   @
     /  / /   @
    /  /_/__  @
   |\\________\\@
    \\|_______|@
              @
              @
              @@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@`,gp=`flf2a$ 7 7 26 32 3
Alligator by Simon Bradley <syb3@aber.ac.uk>
17th June, 1994

$  $@
$  $@
$  $@
$  $@
$  $@
$  $@
$  $@@
      :::$@
     :+:$ @
    +:+$  @
   +#+$   @
  +#+$    @
 $ $      @
###$      @@
      ::: :::$@
     :+: :+:$ @
    $     $   @
   $     $    @
  $     $     @
 $     $      @
$     $       @@
       :::   :::$ @
      :+:   :+:$  @
  +:+:+:+:+:+:+:+$@
    +#+   +:+$    @
+#+#+#+#+#+#+#+$  @
  #+#   #+#$      @
 ###   ###$       @@
        :::$  @
    :+:+:+:+:$@
  +:+ +:+$    @
  +#++:++#+$  @
    +#+ +#+$  @
#+#+#+#+#$    @
  ###$        @@
 :::   :::$ @
:+:   :+:$  @
     +:+$   @
    +#+$    @
   +#+$     @
  #+#   #+#$@
 ###   ###$ @@
       :::::::$ @
     :+:   :+:$ @
     +:+ +:+$   @
     +#++:  ++#$@
   +#+ +#+#+#$  @
 #+#   #+#+$    @
 ##########$    @@
      :::$@
     :+$  @
    $$    @
   $$     @
  $$      @
 $$       @
$$        @@
      :::$@
    :+:$  @
  +:+$    @
 +#+$     @
+#+$      @
#+#$      @
###$      @@
      :::$@
      :+:$@
      +:+$@
     +#+$ @
    +#+$  @
  #+#$    @
###$      @@
      $ $     $ $@
     :+:     :+:$@
      +:+ +:+$   @
  +#++:++#++:++$ @
    +#+ +#+$     @
 #+#     #+#$    @
$ $     $ $      @@
        $ $   @
       :+:$   @
      +:+$    @
+#++:++#++:++$@
    +#+$      @
   #+#$       @
  $ $         @@
      $ $@
     $ $ @
    $ $  @
   $ $   @
  $ $    @
 #+#$    @
##$      @@
      $           $@
     $           $ @
    $           $  @
   +#++:++#++:++$  @
  $           $    @
 $           $     @
$           $      @@
      $ $@
     $ $ @
    $ $  @
   $ $   @
  $ $    @
 #+#$    @
###$     @@
            :::$@
          :+:$  @
        +:+$    @
      +#+$      @
    +#+$        @
  #+#$          @
###$            @@
      :::::::$@
    :+:   :+:$@
   +:+   +:+$ @
  +#+   +:+$  @
 +#+   +#+$   @
#+#   #+#$    @
#######$      @@
        :::$@
     :+:+:$ @
      +:+$  @
     +#+$   @
    +#+$    @
   #+#$     @
#######$    @@
       ::::::::$@
     :+:    :+:$@
    $     +:+$  @
   $   +#+$     @
  $ +#+$        @
  #+#$          @
##########$     @@
      ::::::::$@
    :+:    :+:$@
   $      +:+$ @
  $   +#++:$   @
 $      +#+$   @
#+#    #+#$    @
########$      @@
        :::$@
      :+:$  @
    +:+ +:+$@
  +#+  +:+$ @
+#+#+#+#+#+$@
     #+#$   @
    ###$    @@
     ::::::::::$@
    :+:    :+:$ @
   +:+      $   @
  +#++:++#+$    @
 $      +#+$    @
#+#    #+#$     @
########$       @@
      ::::::::$@
    :+:    :+:$@
   +:+      $  @
  +#++:++#+$   @
 +#+    +#+$   @
#+#    #+#$    @
########$      @@
  :::::::::::$@
 :+:     :+:$ @
       +:+$   @
     +#+$     @
   +#+$       @
 #+#$         @
###$          @@
      ::::::::$@
    :+:    :+:$@
   +:+    +:+$ @
   +#++:++#$   @
 +#+    +#+$   @
#+#    #+#$    @
########$      @@
      ::::::::$@
    :+:    :+:$@
   +:+    +:+$ @
   +#++:++#+$  @
 $      +#+$   @
#+#    #+#$    @
########$      @@
      $ $@
     :+:$@
    $ $  @
   $ $   @
  $ $    @
 #+#$    @
$ $      @@
      $ $@
     :+:$@
    $ $  @
   $ $   @
  $ $    @
 #+#$    @
##$      @@
      :::$@
    :+:$  @
  +:+$    @
+#+$      @
+#+$      @
#+#$      @
###$      @@
      $           $@
     $           $ @
    +:+:+:+:+:+:+$ @
   $           $   @
  +#+#+#+#+#+#+$   @
 $           $     @
$           $      @@
      :::$@
      :+:$@
      +:+$@
      +#+$@
    +#+$  @
  #+#$    @
###$      @@
   :::::::::$@
 :+:     :+:$@
       +:+$  @
     +#+$    @
  +#+$       @
 $ $         @
###$         @@
       :::::::::::$ @
    :+: :+:+:+:+:+:$@
  +:+ +:+   +:+ +:+$@
 +#+ +:+   +#+ +:+$ @
+#+ +#+   +#+ +#+$  @
#+# #+#+#+#+#+$     @
 #####$             @@
          :::$ @
       :+: :+:$@
     +:+   +:+$@
   +#++:++#++:$@
  +#+     +#+$ @
 #+#     #+#$  @
###     ###$   @@
      :::::::::$@
     :+:    :+:$@
    +:+    +:+$ @
   +#++:++#+$   @
  +#+    +#+$   @
 #+#    #+#$    @
#########$      @@
      ::::::::$@
    :+:    :+:$@
   +:+      $  @
  +#+      $   @
 +#+      $    @
#+#    #+#$    @
########$      @@
      :::::::::$@
     :+:    :+:$@
    +:+    +:+$ @
   +#+    +:+$  @
  +#+    +#+$   @
 #+#    #+#$    @
#########$      @@
      ::::::::::$@
     :+:$        @
    +:+$         @
   +#++:++#$     @
  +#+$           @
 #+#$            @
##########$      @@
      ::::::::::$@
     :+:$        @
    +:+$         @
   :#::+::#$     @
  +#+$           @
 #+#$            @
###$             @@
      ::::::::$@
    :+:    :+:$@
   +:+      $  @
  :#:      $   @
 +#+   +#+#$   @
#+#    #+#$    @
########$      @@
      :::    :::$@
     :+:    :+:$ @
    +:+    +:+$  @
   +#++:++#++$   @
  +#+    +#+$    @
 #+#    #+#$     @
###    ###$      @@
      :::::::::::$@
         :+:$     @
        +:+$      @
       +#+$       @
      +#+$        @
     #+#$         @
###########$      @@
     :::::::::::$@
        :+:$     @
       +:+$      @
      +#+$       @
     +#+$        @
#+# #+#$         @
#####$           @@
      :::    :::$@
     :+:   :+:$  @
    +:+  +:+$    @
   +#++:++$      @
  +#+  +#+$      @
 #+#   #+#$      @
###    ###$      @@
      :::$ @
     :+:$  @
    +:+$   @
   +#+$    @
  +#+$     @
 #+#$      @
##########$@@
        :::   :::$@
      :+:+: :+:+:$@
    +:+ +:+:+ +:+$@
   +#+  +:+  +#+$ @
  +#+       +#+$  @
 #+#       #+#$   @
###       ###$    @@
      ::::    :::$@
     :+:+:   :+:$ @
    :+:+:+  +:+$  @
   +#+ +:+ +#+$   @
  +#+  +#+#+#$    @
 #+#   #+#+#$     @
###    ####$      @@
      ::::::::$@
    :+:    :+:$@
   +:+    +:+$ @
  +#+    +:+$  @
 +#+    +#+$   @
#+#    #+#$    @
########$      @@
      :::::::::$@
     :+:    :+:$@
    +:+    +:+$ @
   +#++:++#+$   @
  +#+$          @
 #+#$           @
###$            @@
      ::::::::$@
    :+:    :+:$@
   +:+    +:+$ @
  +#+    +:+$  @
 +#+    +#+$   @
#+#    #+#$    @
###########$   @@
      :::::::::$@
     :+:    :+:$@
    +:+    +:+$ @
   +#++:++#:$   @
  +#+    +#+$   @
 #+#    #+#$    @
###    ###$     @@
      ::::::::$@
    :+:    :+:$@
   +:+      $  @
  +#++:++#++$  @
 $      +#+$   @
#+#    #+#$    @
########$      @@
  :::::::::::$@
     :+:$     @
    +:+$      @
   +#+$       @
  +#+$        @
 #+#$         @
###$          @@
     :::    :::$@
    :+:    :+:$ @
   +:+    +:+$  @
  +#+    +:+$   @
 +#+    +#+$    @
#+#    #+#$     @
########$       @@
   :::     :::$@
  :+:     :+:$ @
 +:+     +:+$  @
+#+     +:+$   @
+#+   +#+$     @
#+#+#+#$       @
 ###$          @@
    :::       :::$@
   :+:       :+:$ @
  +:+       +:+$  @
 +#+  +:+  +#+$   @
+#+ +#+#+ +#+$    @
#+#+# #+#+#$      @
###   ###$        @@
      :::    :::$@
     :+:    :+:$ @
     +:+  +:+$   @
     +#++:+$     @
   +#+  +#+$     @
 #+#    #+#$     @
###    ###$      @@
   :::   :::$@
  :+:   :+:$ @
  +:+ +:+$   @
  +#++:$     @
  +#+$       @
 #+#$        @
###$         @@
      :::::::::$@
          :+:$  @
        +:+$    @
      +#+$      @
    +#+$        @
  #+#$          @
#########$      @@
      ::::::$@
     :+:$    @
    +:+$     @
   +#+$      @
  +#+$       @
 #+#$        @
######$      @@
:::$@
:+:$@
+:+$@
+#+$@
+#+$@
#+#$@
###$@@
      ::::::$@
        :+:$ @
       +:+$  @
      +#+$   @
     +#+$    @
    #+#$     @
######$      @@
          :::$  @
       :+: :+:$ @
    +:+     +:+$@
   $         $  @
  $         $   @
 $         $    @
$         $     @@
      $        $@
     $        $ @
    $        $  @
   $        $   @
  $        $    @
 $        $     @
##########$     @@
     :::$@
     :+$ @
    $$   @
   $$    @
  $$     @
 $$      @
$$       @@
          :::$ @
       :+: :+:$@
     +:+   +:+$@
   +#++:++#++:$@
  +#+     +#+$ @
 #+#     #+#$  @
###     ###$   @@
      :::::::::$@
     :+:    :+:$@
    +:+    +:+$ @
   +#++:++#+$   @
  +#+    +#+$   @
 #+#    #+#$    @
#########$      @@
      ::::::::$@
    :+:    :+:$@
   +:+      $  @
  +#+      $   @
 +#+      $    @
#+#    #+#$    @
########$      @@
      :::::::::$@
     :+:    :+:$@
    +:+    +:+$ @
   +#+    +:+$  @
  +#+    +#+$   @
 #+#    #+#$    @
#########$      @@
      ::::::::::$@
     :+:$        @
    +:+$         @
   +#++:++#$     @
  +#+$           @
 #+#$            @
##########$      @@
      ::::::::::$@
     :+:$        @
    +:+$         @
   :#::+::#$     @
  +#+$           @
 #+#$            @
###$             @@
      ::::::::$@
    :+:    :+:$@
   +:+      $  @
  :#:      $   @
 +#+   +#+#$   @
#+#    #+#$    @
########$      @@
      :::    :::$@
     :+:    :+:$ @
    +:+    +:+$  @
   +#++:++#++$   @
  +#+    +#+$    @
 #+#    #+#$     @
###    ###$      @@
      :::::::::::$@
         :+:$     @
        +:+$      @
       +#+$       @
      +#+$        @
     #+#$         @
###########$      @@
     :::::::::::$@
        :+:$     @
       +:+$      @
      +#+$       @
     +#+$        @
#+# #+#$         @
#####$           @@
      :::    :::$@
     :+:   :+:$  @
    +:+  +:+$    @
   +#++:++$      @
  +#+  +#+$      @
 #+#   #+#$      @
###    ###$      @@
      :::$ @
     :+:$  @
    +:+$   @
   +#+$    @
  +#+$     @
 #+#$      @
##########$@@
        :::   :::$@
      :+:+: :+:+:$@
    +:+ +:+:+ +:+$@
   +#+  +:+  +#+$ @
  +#+       +#+$  @
 #+#       #+#$   @
###       ###$    @@
      ::::    :::$@
     :+:+:   :+:$ @
    :+:+:+  +:+$  @
   +#+ +:+ +#+$   @
  +#+  +#+#+#$    @
 #+#   #+#+#$     @
###    ####$      @@
      ::::::::$@
    :+:    :+:$@
   +:+    +:+$ @
  +#+    +:+$  @
 +#+    +#+$   @
#+#    #+#$    @
########$      @@
      :::::::::$@
     :+:    :+:$@
    +:+    +:+$ @
   +#++:++#+$   @
  +#+$          @
 #+#$           @
###$            @@
      ::::::::$@
    :+:    :+:$@
   +:+    +:+$ @
  +#+    +:+$  @
 +#+    +#+$   @
#+#    #+#$    @
###########$   @@
      :::::::::$@
     :+:    :+:$@
    +:+    +:+$ @
   +#++:++#:$   @
  +#+    +#+$   @
 #+#    #+#$    @
###    ###$     @@
      ::::::::$@
    :+:    :+:$@
   +:+      $  @
  +#++:++#++$  @
 $      +#+$   @
#+#    #+#$    @
########$      @@
  :::::::::::$@
     :+:$     @
    +:+$      @
   +#+$       @
  +#+$        @
 #+#$         @
###$          @@
     :::    :::$@
    :+:    :+:$ @
   +:+    +:+$  @
  +#+    +:+$   @
 +#+    +#+$    @
#+#    #+#$     @
########$       @@
   :::     :::$@
  :+:     :+:$ @
 +:+     +:+$  @
+#+     +:+$   @
+#+   +#+$     @
#+#+#+#$       @
 ###$          @@
    :::       :::$@
   :+:       :+:$ @
  +:+       +:+$  @
 +#+  +:+  +#+$   @
+#+ +#+#+ +#+$    @
#+#+# #+#+#$      @
###   ###$        @@
      :::    :::$@
     :+:    :+:$ @
     +:+  +:+$   @
     +#++:+$     @
   +#+  +#+$     @
 #+#    #+#$     @
###    ###$      @@
   :::   :::$@
  :+:   :+:$ @
  +:+ +:+$   @
  +#++:$     @
  +#+$       @
 #+#$        @
###$         @@
      :::::::::$@
          :+:$  @
        +:+$    @
      +#+$      @
    +#+$        @
  #+#$          @
#########$      @@
      ::::$@
    :+:$   @
   +:+$    @
+#+$       @
 +#+$      @
#+#$       @
####$      @@
      :::$@
     :+:$ @
    +:+$  @
   $ $    @
  +#+$    @
 #+#$     @
###$      @@
      ::::$@
       :+:$@
      +:+$ @
       +#+$@
    +#+$   @
   #+#$    @
####$      @@
        :::::   :::$@
     :+:   :+:+:$   @
    $         $     @
   $         $      @
  $         $       @
 $         $        @
$         $         @@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
`,Sp=`flf2a$ 8 7 54 0 12 0 64 185
banner.flf version 2 by Ryan Youck (youck@cs.uregina.ca)
(From a unix program called banner)
I am not responsible for use of this font  
Thanks to Glenn Chappell for his help
Katakana characters by Vinney Thai <ssfiit@eris.cs.umb.edu>
Cyrillic characters from "koi8x8" BDF font.
Date: August 11, 1994

Merged by John Cowan <cowan@ccil.org>
Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.
 $ $@
 $ $@
 $ $@
 $ $@
 $ $@
 $ $@
 $ $@
 $ $@@
 ###$@
 ###$@
 ###$@
  # $@
    $@
 ###$@
 ###$@
    $@@
 ### ###$@
 ### ###$@
  #   # $@
 $      $@
 $      $@
        $@
        $@
        $@@
   # #  $@
   # #  $@
 #######$@
   # #  $@
 #######$@
   # #  $@
   # #  $@
        $@@
  ##### $@
 #  #  #$@
 #  #   $@
  ##### $@
    #  #$@
 #  #  #$@
  ##### $@
        $@@
 ###   #$@
 # #  # $@
 ### #  $@
    #   $@
   # ###$@
  #  # #$@
 #   ###$@
        $@@
   ##   $@
  #  #  $@
   ##   $@
  ###   $@
 #   # #$@
 #    # $@
  ###  #$@
        $@@
 ###$@
 ###$@
  # $@
 #  $@
    $@
    $@
    $@
    $@@
   ##$@
  #  $@
 #   $@
 #   $@
 #   $@
  #  $@
   ##$@
     $@@
 ##  $@
   # $@
    #$@
    #$@
    #$@
   # $@
 ##  $@
     $@@
        $@
  #   # $@
   # #  $@
 #######$@
   # #  $@
  #   # $@
        $@
        $@@
      $@
   #  $@
   #  $@
 #####$@
   #  $@
   #  $@
      $@
      $@@
    $@
    $@
    $@
    $@
 ###$@
 ###$@
  # $@
 #  $@@
      $@
      $@
      $@
 #####$@
      $@
      $@
      $@
      $@@
    $@
    $@
    $@
    $@
 ###$@
 ###$@
 ###$@
    $@@
       #$@
      # $@
     #  $@
    #   $@
   #    $@
  #     $@
 #      $@
        $@@
   ###  $@
  #   # $@
 #     #$@
 #     #$@
 #     #$@
  #   # $@
   ###  $@
        $@@
   #  $@
  ##  $@
 # #  $@
   #  $@
   #  $@
   #  $@
 #####$@
      $@@
  ##### $@
 #     #$@
       #$@
  ##### $@
 #      $@
 #      $@
 #######$@
        $@@
  ##### $@
 #     #$@
       #$@
  ##### $@
       #$@
 #     #$@
  ##### $@
        $@@
 #      $@
 #    # $@
 #    # $@
 #    # $@
 #######$@
      # $@
      # $@
        $@@
 #######$@
 #      $@
 #      $@
 ###### $@
       #$@
 #     #$@
  ##### $@
        $@@
  ##### $@
 #     #$@
 #      $@
 ###### $@
 #     #$@
 #     #$@
  ##### $@
        $@@
 #######$@
 #    # $@
     #  $@
    #   $@
   #    $@
   #    $@
   #    $@
        $@@
  ##### $@
 #     #$@
 #     #$@
  ##### $@
 #     #$@
 #     #$@
  ##### $@
        $@@
  ##### $@
 #     #$@
 #     #$@
  ######$@
       #$@
 #     #$@
  ##### $@
        $@@
  # $@
 ###$@
  # $@
    $@
  # $@
 ###$@
  # $@
    $@@
    $@
 ###$@
 ###$@
    $@
 ###$@
 ###$@
  # $@
 #  $@@
    #$@
   # $@
  #  $@
 #   $@
  #  $@
   # $@
    #$@
     $@@
      $@
      $@
 #####$@
      $@
 #####$@
      $@
      $@
      $@@
 #   $@
  #  $@
   # $@
    #$@
   # $@
  #  $@
 #   $@
     $@@
  ##### $@
 #     #$@
       #$@
    ### $@
    #   $@
        $@
    #   $@
        $@@
  ##### $@
 #     #$@
 # ### #$@
 # ### #$@
 # #### $@
 #      $@
  ##### $@
        $@@
    #   $@
   # #  $@
  #   # $@
 #     #$@
 #######$@
 #     #$@
 #     #$@
        $@@
 ###### $@
 #     #$@
 #     #$@
 ###### $@
 #     #$@
 #     #$@
 ###### $@
        $@@
  ##### $@
 #     #$@
 #      $@
 #      $@
 #      $@
 #     #$@
  ##### $@
        $@@
 ###### $@
 #     #$@
 #     #$@
 #     #$@
 #     #$@
 #     #$@
 ###### $@
        $@@
 #######$@
 #      $@
 #      $@
 #####  $@
 #      $@
 #      $@
 #######$@
        $@@
 #######$@
 #      $@
 #      $@
 #####  $@
 #      $@
 #      $@
 #      $@
        $@@
  ##### $@
 #     #$@
 #      $@
 #  ####$@
 #     #$@
 #     #$@
  ##### $@
        $@@
 #     #$@
 #     #$@
 #     #$@
 #######$@
 #     #$@
 #     #$@
 #     #$@
        $@@
 ###$@
  # $@
  # $@
  # $@
  # $@
  # $@
 ###$@
    $@@
       #$@
       #$@
       #$@
       #$@
 #     #$@
 #     #$@
  ##### $@
        $@@
 #    #$@
 #   # $@
 #  #  $@
 ###   $@
 #  #  $@
 #   # $@
 #    #$@
       $@@
 #      $@
 #      $@
 #      $@
 #      $@
 #      $@
 #      $@
 #######$@
        $@@
 #     #$@
 ##   ##$@
 # # # #$@
 #  #  #$@
 #     #$@
 #     #$@
 #     #$@
        $@@
 #     #$@
 ##    #$@
 # #   #$@
 #  #  #$@
 #   # #$@
 #    ##$@
 #     #$@
        $@@
 #######$@
 #     #$@
 #     #$@
 #     #$@
 #     #$@
 #     #$@
 #######$@
        $@@
 ###### $@
 #     #$@
 #     #$@
 ###### $@
 #      $@
 #      $@
 #      $@
        $@@
  ##### $@
 #     #$@
 #     #$@
 #     #$@
 #   # #$@
 #    # $@
  #### #$@
        $@@
 ###### $@
 #     #$@
 #     #$@
 ###### $@
 #   #  $@
 #    # $@
 #     #$@
        $@@
  ##### $@
 #     #$@
 #      $@
  ##### $@
       #$@
 #     #$@
  ##### $@
        $@@
 #######$@
    #   $@
    #   $@
    #   $@
    #   $@
    #   $@
    #   $@
        $@@
 #     #$@
 #     #$@
 #     #$@
 #     #$@
 #     #$@
 #     #$@
  ##### $@
        $@@
 #     #$@
 #     #$@
 #     #$@
 #     #$@
  #   # $@
   # #  $@
    #   $@
        $@@
 #     #$@
 #  #  #$@
 #  #  #$@
 #  #  #$@
 #  #  #$@
 #  #  #$@
  ## ## $@
        $@@
 #     #$@
  #   # $@
   # #  $@
    #   $@
   # #  $@
  #   # $@
 #     #$@
        $@@
 #     #$@
  #   # $@
   # #  $@
    #   $@
    #   $@
    #   $@
    #   $@
        $@@
 #######$@
      # $@
     #  $@
    #   $@
   #    $@
  #     $@
 #######$@
        $@@
 #####$@
 #    $@
 #    $@
 #    $@
 #    $@
 #    $@
 #####$@
      $@@
 #      $@
  #     $@
   #    $@
    #   $@
     #  $@
      # $@
       #$@
        $@@
 #####$@
     #$@
     #$@
     #$@
     #$@
     #$@
 #####$@
      $@@
   #  $@
  # # $@
 #   #$@
      $@
      $@
      $@
      $@
      $@@
        $@
        $@
        $@
        $@
        $@
        $@
        $@
 #######$@@
 ###$@
 ###$@
  # $@
   #$@
    $@
    $@
    $@
    $@@
       $@
   ##  $@
  #  # $@
 #    #$@
 ######$@
 #    #$@
 #    #$@
       $@@
       $@
 ##### $@
 #    #$@
 ##### $@
 #    #$@
 #    #$@
 ##### $@
       $@@
       $@
  #### $@
 #    #$@
 #     $@
 #     $@
 #    #$@
  #### $@
       $@@
       $@
 ##### $@
 #    #$@
 #    #$@
 #    #$@
 #    #$@
 ##### $@
       $@@
       $@
 ######$@
 #     $@
 ##### $@
 #     $@
 #     $@
 ######$@
       $@@
       $@
 ######$@
 #     $@
 ##### $@
 #     $@
 #     $@
 #     $@
       $@@
       $@
  #### $@
 #    #$@
 #     $@
 #  ###$@
 #    #$@
  #### $@
       $@@
       $@
 #    #$@
 #    #$@
 ######$@
 #    #$@
 #    #$@
 #    #$@
       $@@
  $@
 #$@
 #$@
 #$@
 #$@
 #$@
 #$@
  $@@
       $@
      #$@
      #$@
      #$@
      #$@
 #    #$@
  #### $@
       $@@
       $@
 #    #$@
 #   # $@
 ####  $@
 #  #  $@
 #   # $@
 #    #$@
       $@@
       $@
 #     $@
 #     $@
 #     $@
 #     $@
 #     $@
 ######$@
       $@@
       $@
 #    #$@
 ##  ##$@
 # ## #$@
 #    #$@
 #    #$@
 #    #$@
       $@@
       $@
 #    #$@
 ##   #$@
 # #  #$@
 #  # #$@
 #   ##$@
 #    #$@
       $@@
       $@
  #### $@
 #    #$@
 #    #$@
 #    #$@
 #    #$@
  #### $@
       $@@
       $@
 ##### $@
 #    #$@
 #    #$@
 ##### $@
 #     $@
 #     $@
       $@@
       $@
  #### $@
 #    #$@
 #    #$@
 #  # #$@
 #   # $@
  ### #$@
       $@@
       $@
 ##### $@
 #    #$@
 #    #$@
 ##### $@
 #   # $@
 #    #$@
       $@@
       $@
  #### $@
 #     $@
  #### $@
      #$@
 #    #$@
  #### $@
       $@@
      $@
 #####$@
   #  $@
   #  $@
   #  $@
   #  $@
   #  $@
      $@@
       $@
 #    #$@
 #    #$@
 #    #$@
 #    #$@
 #    #$@
  #### $@
       $@@
       $@
 #    #$@
 #    #$@
 #    #$@
 #    #$@
  #  # $@
   ##  $@
       $@@
       $@
 #    #$@
 #    #$@
 #    #$@
 # ## #$@
 ##  ##$@
 #    #$@
       $@@
       $@
 #    #$@
  #  # $@
   ##  $@
   ##  $@
  #  # $@
 #    #$@
       $@@
      $@
 #   #$@
  # # $@
   #  $@
   #  $@
   #  $@
   #  $@
      $@@
       $@
 ######$@
     # $@
    #  $@
   #   $@
  #    $@
 ######$@
       $@@
   ###$@
  #   $@
  #   $@
 ##   $@
  #   $@
  #   $@
   ###$@
      $@@
 #$@
 #$@
 #$@
  $@
 #$@
 #$@
 #$@
  $@@
 ###  $@
    # $@
    # $@
    ##$@
    # $@
    # $@
 ###  $@
      $@@
  ##    $@
 #  #  #$@
     ## $@
        $@
        $@
        $@
        $@
        $@@
 #  #  #$@
   # #  $@
  #   # $@
 #     #$@
 #######$@
 #     #$@
 #     #$@
        $@@
 #     #$@
  ##### $@
 #     #$@
 #     #$@
 #     #$@
 #     #$@
  ##### $@
        $@@
 #     #$@
        $@
 #     #$@
 #     #$@
 #     #$@
 #     #$@
  ##### $@
        $@@
       $@
 #    #$@
  #### $@
 #    #$@
 ######$@
 #    #$@
 #    #$@
       $@@
       $@
 #    #$@
  #### $@
 #    #$@
 #    #$@
 #    #$@
  #### $@
       $@@
       $@
 #    #$@
       $@
 #    #$@
 #    #$@
 #    #$@
  #### $@
       $@@
 ###### $@
 #     #$@
 #     #$@
 ###### $@
 #     #$@
 #     #$@
 ###### $@
 #      $@@
160  NO-BREAK SPACE
         $@
         $@
         $@
         $@
 ########$@
    ##   $@
    ##   $@
    ##   $@@
169  COPYRIGHT SIGN
 $@
 $@
 $@
 $@
 $@
 $@
 $@
 $@@
176  DEGREE SIGN
         $@
         $@
         $@
         $@
 ########$@
         $@
         $@
         $@@
178  SUPERSCRIPT TWO
    ##   $@
    ##   $@
    ##   $@
    ##   $@
 ########$@
    ##   $@
    ##   $@
    ##   $@@
183  MIDDLE DOT
 ##   $@
 ##   $@
 #####$@
 ##   $@
 #####$@
 ##   $@
 ##   $@
 ##   $@@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
 #  #  #$@
   # #  $@
  #   # $@
 #     #$@
 #######$@
 #     #$@
 #     #$@
        $@@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
 #     #$@
  ##### $@
 #     #$@
 #     #$@
 #     #$@
 #     #$@
  ##### $@
        $@@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
 #     #$@
        $@
 #     #$@
 #     #$@
 #     #$@
 #     #$@
  ##### $@
        $@@
223  LATIN SMALL LETTER SHARP S
 ###### $@
 #     #$@
 #     #$@
 ###### $@
 #     #$@
 #     #$@
 ###### $@
 #      $@@
228  LATIN SMALL LETTER A WITH DIAERESIS
       $@
 #    #$@
  #### $@
 #    #$@
 ######$@
 #    #$@
 #    #$@
       $@@
246  LATIN SMALL LETTER O WITH DIAERESIS
       $@
 #    #$@
  #### $@
 #    #$@
 #    #$@
 #    #$@
  #### $@
       $@@
247  DIVISION SIGN
 #### $@
 #### $@
 #### $@
 #### $@
 #####$@
 #### $@
 #### $@
 #### $@@
252  LATIN SMALL LETTER U WITH DIAERESIS
       $@
 #    #$@
       $@
 #    #$@
 #    #$@
 #    #$@
  #### $@
       $@@
0x0401  CYRILLIC CAPITAL LETTER IO
 ########$@
 ########$@
 ########$@
 ########$@
 ########$@
 ########$@
 ########$@
 ########$@@
0x0410  CYRILLIC CAPITAL LETTER A
    ####$@
   ## ##$@
  ##  ##$@
 ##   ##$@
 #######$@
 ##   ##$@
 ##   ##$@
        $@@
0x0411  CYRILLIC CAPITAL LETTER BE
 #######$@
 ##     $@
 ##     $@
 ###### $@
 ##   ##$@
 ##   ##$@
 ###### $@
        $@@
0x0412  CYRILLIC CAPITAL LETTER VE
 ###### $@
 ##   ##$@
 ##   ##$@
 ###### $@
 ##   ##$@
 ##   ##$@
 ###### $@
        $@@
0x0413  CYRILLIC CAPITAL LETTER GHE
 #######$@
 ##     $@
 ##     $@
 ##     $@
 ##     $@
 ##     $@
 ##     $@
        $@@
0x0414  CYRILLIC CAPITAL LETTER DE
   #### $@
  ## ## $@
  ## ## $@
  ## ## $@
  ## ## $@
 #######$@
 ##   ##$@
        $@@
0x0415  CYRILLIC CAPITAL LETTER IE
 #######$@
 ##     $@
 ##     $@
 ###### $@
 ##     $@
 ##     $@
 #######$@
        $@@
0x0416  CYRILLIC CAPITAL LETTER ZHE
 ## # ##$@
  # # # $@
   ###  $@
   ###  $@
  # # # $@
  # # # $@
 ## # ##$@
        $@@
0x0417  CYRILLIC CAPITAL LETTER ZE
  ##### $@
 ##   ##$@
      ##$@
    ##  $@
      ##$@
 ##   ##$@
  ##### $@
        $@@
0x0418  CYRILLIC CAPITAL LETTER I
 ##   ##$@
 ##  ###$@
 ##  ###$@
 ## # ##$@
 ###  ##$@
 ##   ##$@
 ##   ##$@
        $@@
0x0419  CYRILLIC CAPITAL LETTER SHORT I
 ## ## #$@
 ##   ##$@
 ##  ###$@
 ## # ##$@
 ###  ##$@
 ##   ##$@
 ##   ##$@
        $@@
0x041A  CYRILLIC CAPITAL LETTER KA
 ##   ##$@
 ##  ## $@
 ## ##  $@
 #####  $@
 ##  ## $@
 ##   ##$@
 ##   ##$@
        $@@
0x041B  CYRILLIC CAPITAL LETTER EL
   #####$@
  ##  ##$@
  ##  ##$@
  ##  ##$@
  ##  ##$@
  ##  ##$@
 ##   ##$@
        $@@
0x041C  CYRILLIC CAPITAL LETTER EM
 ##   ##$@
 ##   ##$@
 ### ###$@
 ## # ##$@
 ##   ##$@
 ##   ##$@
 ##   ##$@
        $@@
0x041D  CYRILLIC CAPITAL LETTER EN
 ##   ##$@
 ##   ##$@
 ##   ##$@
 #######$@
 ##   ##$@
 ##   ##$@
 ##   ##$@
        $@@
0x041E  CYRILLIC CAPITAL LETTER O
  ##### $@
 ##   ##$@
 ##   ##$@
 ##   ##$@
 ##   ##$@
 ##   ##$@
  ##### $@
        $@@
0x041F  CYRILLIC CAPITAL LETTER PE
 #######$@
 ##   ##$@
 ##   ##$@
 ##   ##$@
 ##   ##$@
 ##   ##$@
 ##   ##$@
        $@@
0x0420  CYRILLIC CAPITAL LETTER ER
 ###### $@
 ##   ##$@
 ##   ##$@
 ###### $@
 ##     $@
 ##     $@
 ##     $@
        $@@
0x0421  CYRILLIC CAPITAL LETTER ES
  ##### $@
 ##   ##$@
 ##     $@
 ##     $@
 ##     $@
 ##   ##$@
  ##### $@
        $@@
0x0422  CYRILLIC CAPITAL LETTER TE
 ###### $@
   ##   $@
   ##   $@
   ##   $@
   ##   $@
   ##   $@
   ##   $@
        $@@
0x0423  CYRILLIC CAPITAL LETTER U
 ##   ##$@
 ##   ##$@
 ##   ##$@
  ######$@
      ##$@
 ##   ##$@
  ##### $@
        $@@
0x0424  CYRILLIC CAPITAL LETTER EF
    #   $@
  ##### $@
 ## # ##$@
 ## # ##$@
 ## # ##$@
  ##### $@
    #   $@
        $@@
0x0425  CYRILLIC CAPITAL LETTER HA
 ##   ##$@
  ## ## $@
   ###  $@
   ###  $@
   ###  $@
  ## ## $@
 ##   ##$@
        $@@
0x0426  CYRILLIC CAPITAL LETTER TSE
 ##  ## $@
 ##  ## $@
 ##  ## $@
 ##  ## $@
 ##  ## $@
 ##  ## $@
 #######$@
       #$@@
0x0427  CYRILLIC CAPITAL LETTER CHE
 ##   ##$@
 ##   ##$@
 ##   ##$@
  ######$@
      ##$@
      ##$@
      ##$@
        $@@
0x0428  CYRILLIC CAPITAL LETTER SHA
 ## # ##$@
 ## # ##$@
 ## # ##$@
 ## # ##$@
 ## # ##$@
 ## # ##$@
 #######$@
        $@@
0x0429  CYRILLIC CAPITAL LETTER SHCHA
 ## # ##$@
 ## # ##$@
 ## # ##$@
 ## # ##$@
 ## # ##$@
 ## # ##$@
 #######$@
       #$@@
0x042A  CYRILLIC CAPITAL LETTER HARD SIGN
 ###    $@
 ###    $@
  ##    $@
  ##### $@
  ##  ##$@
  ##  ##$@
  ##### $@
        $@@
0x042B  CYRILLIC CAPITAL LETTER YERU
 ##   ##$@
 ##   ##$@
 ##   ##$@
 ####  #$@
 ##  # #$@
 ##  # #$@
 ####  #$@
        $@@
0x042C  CYRILLIC CAPITAL LETTER SOFT SIGN
 ##     $@
 ##     $@
 ##     $@
 ###### $@
 ##   ##$@
 ##   ##$@
 ###### $@
        $@@
0x042D  CYRILLIC CAPITAL LETTER E
  ##### $@
 ##   ##$@
      ##$@
   #####$@
      ##$@
 ##   ##$@
  ##### $@
        $@@
0x042E  CYRILLIC CAPITAL LETTER YU
 ##  ## $@
 ## # ##$@
 ## # ##$@
 #### ##$@
 ## # ##$@
 ## # ##$@
 ##  ## $@
        $@@
0x042F  CYRILLIC CAPITAL LETTER YA
   #####$@
  ##  ##$@
  ##  ##$@
   #####$@
   ## ##$@
  ##  ##$@
 ##   ##$@
        $@@
0x0430  CYRILLIC SMALL LETTER A
        $@
        $@
  ####  $@
     ## $@
  ##### $@
 ##  ## $@
  ######$@
        $@@
0x0431  CYRILLIC SMALL LETTER BE
        $@
     ## $@
  ####  $@
 ##     $@
 ###### $@
 ##   ##$@
  ##### $@
        $@@
0x0432  CYRILLIC SMALL LETTER VE
        $@
        $@
 #####  $@
 ##  ## $@
 ###### $@
 ##   ##$@
 ###### $@
        $@@
0x0433  CYRILLIC SMALL LETTER GHE
        $@
        $@
  ##### $@
      ##$@
  ##### $@
 ##     $@
  ######$@
        $@@
0x0434  CYRILLIC SMALL LETTER DE
        $@
   #### $@
      ##$@
   #####$@
  ##  ##$@
 ##   ##$@
  ##### $@
        $@@
0x0435  CYRILLIC SMALL LETTER IE
        $@
        $@
  ##### $@
 ##   ##$@
 ###### $@
 ##     $@
  ##### $@
        $@@
0x0436  CYRILLIC SMALL LETTER ZHE
        $@
        $@
 ## # ##$@
  # # # $@
   ###  $@
  # # # $@
 ## # ##$@
        $@@
0x0437  CYRILLIC SMALL LETTER ZE
        $@
        $@
  ##### $@
 ##   ##$@
    ### $@
 ##   ##$@
  ##### $@
        $@@
0x0438  CYRILLIC SMALL LETTER I
        $@
        $@
 ##   ##$@
 ##  ###$@
 ## # ##$@
 ###  ##$@
 ##   ##$@
        $@@
0x0439  CYRILLIC SMALL LETTER SHORT I
        $@
    ##  $@
 ##   ##$@
 ##  ###$@
 ## # ##$@
 ###  ##$@
 ##   ##$@
        $@@
0x043A  CYRILLIC SMALL LETTER KA
        $@
        $@
 ##   ##$@
 ##  ## $@
 #####  $@
 ##  ## $@
 ##   ##$@
        $@@
0x043B  CYRILLIC SMALL LETTER EL
        $@
        $@
   #####$@
  ##  ##$@
  ##  ##$@
  ##  ##$@
 ##   ##$@
        $@@
0x043C  CYRILLIC SMALL LETTER EM
        $@
        $@
 ##   ##$@
 ### ###$@
 ## # ##$@
 ##   ##$@
 ##   ##$@
        $@@
0x043D  CYRILLIC SMALL LETTER EN
        $@
        $@
 ##   ##$@
 ##   ##$@
 #######$@
 ##   ##$@
 ##   ##$@
        $@@
0x043E  CYRILLIC SMALL LETTER O
        $@
        $@
  ##### $@
 ##   ##$@
 ##   ##$@
 ##   ##$@
  ##### $@
        $@@
0x043F  CYRILLIC SMALL LETTER PE
        $@
        $@
 ###### $@
 ##   ##$@
 ##   ##$@
 ##   ##$@
 ##   ##$@
        $@@
0x0440  CYRILLIC SMALL LETTER ER
        $@
        $@
 ###### $@
 ##   ##$@
 ###### $@
 ##     $@
 ##     $@
        $@@
0x0441  CYRILLIC SMALL LETTER ES
        $@
        $@
  ##### $@
 ##     $@
 ##     $@
 ##     $@
  ##### $@
        $@@
0x0442  CYRILLIC SMALL LETTER TE
        $@
        $@
 ###### $@
   ##   $@
   ##   $@
   ##   $@
   ##   $@
        $@@
0x0443  CYRILLIC SMALL LETTER U
        $@
        $@
 ##   ##$@
 ##   ##$@
 ##   ##$@
  ######$@
      ##$@
  ##### $@@
0x0444  CYRILLIC SMALL LETTER EF
        $@
    #   $@
  ##### $@
 ## # ##$@
 ## # ##$@
  ##### $@
    #   $@
        $@@
0x0445  CYRILLIC SMALL LETTER HA
        $@
        $@
 ##   ##$@
  ## ## $@
   ###  $@
  ## ## $@
 ##   ##$@
        $@@
0x0446  CYRILLIC SMALL LETTER TSE
        $@
        $@
 ##   ##$@
 ##   ##$@
 ##   ##$@
 ##  ## $@
  ### ##$@
       #$@@
0x0447  CYRILLIC SMALL LETTER CHE
        $@
        $@
 ##   ##$@
 ##   ##$@
  ######$@
      ##$@
      ##$@
        $@@
0x0448  CYRILLIC SMALL LETTER SHA
        $@
        $@
 ## # ##$@
 ## # ##$@
 ## # ##$@
 ## # ##$@
 #######$@
        $@@
0x0449  CYRILLIC SMALL LETTER SHCHA
        $@
        $@
 ## # ##$@
 ## # ##$@
 ## # ##$@
 ## # ##$@
 #######$@
       #$@@
0x044A  CYRILLIC SMALL LETTER HARD SIGN
        $@
        $@
 ###    $@
  ##    $@
  ##### $@
  ##  ##$@
  ##### $@
        $@@
0x044B  CYRILLIC SMALL LETTER YERU
        $@
        $@
 ##   ##$@
 ##   ##$@
 ####  #$@
 ##  # #$@
 ####  #$@
        $@@
0x044C  CYRILLIC SMALL LETTER SOFT SIGN
        $@
        $@
 ##     $@
 ##     $@
 ###### $@
 ##   ##$@
 ###### $@
        $@@
0x044D  CYRILLIC SMALL LETTER E
        $@
        $@
 ###### $@
      ##$@
   #####$@
      ##$@
 ###### $@
        $@@
0x044E  CYRILLIC SMALL LETTER YU
        $@
        $@
 #  ### $@
 # ## ##$@
 #### ##$@
 # ## ##$@
 #  ### $@
        $@@
0x044F  CYRILLIC SMALL LETTER YA
        $@
        $@
   #####$@
  ##  ##$@
   #####$@
  ##  ##$@
 ##   ##$@
        $@@
0x0451  CYRILLIC SMALL LETTER IO
         $@
         $@
 ########$@
         $@
 #### ###$@
   ## ## $@
   ## ## $@
   ## ## $@@
0x2219  BULLET OPERATOR
   ## ##$@
   ## ##$@
   ## ##$@
   ## ##$@
 #######$@
        $@
        $@
        $@@
0x221A  SQUARE ROOT
    ## $@
    ## $@
 ##### $@
    ## $@
 ##### $@
       $@
       $@
       $@@
0x2248  ALMOST EQUAL TO
       $@
       $@
       $@
       $@
 ##### $@
    ## $@
    ## $@
    ## $@@
0x2264  LESS-THAN OR EQUAL TO
 ##   $@
 ##   $@
 ##   $@
 ##   $@
 #####$@
      $@
      $@
      $@@
0x2265  GREATER-THAN OR EQUAL TO
    ##   $@
    ##   $@
    ##   $@
    ##   $@
 ########$@
         $@
         $@
         $@@
0x2320  TOP HALF INTEGRAL
        $@
        $@
 #######$@
      ##$@
 #### ##$@
   ## ##$@
   ## ##$@
   ## ##$@@
0x2321  BOTTOM HALF INTEGRAL
 ##   $@
 ##   $@
 ##   $@
 ##   $@
 #####$@
 ##   $@
 ##   $@
 ##   $@@
0x2500  BOX DRAWINGS LIGHT HORIZONTAL
   ##  $@
       $@
   ##  $@
  ##   $@
 ##    $@
 ##  ##$@
  #### $@
       $@@
0x2502  BOX DRAWINGS LIGHT VERTICAL
       $@
       $@
       $@
 ######$@
 ##    $@
 ##    $@
       $@
       $@@
0x250C  BOX DRAWINGS LIGHT DOWN AND RIGHT
       $@
       $@
       $@
 ######$@
     ##$@
     ##$@
       $@
       $@@
0x2510  BOX DRAWINGS LIGHT DOWN AND LEFT
 ##    ##$@
 ##   ## $@
 ##  ##  $@
 ## #### $@
   ##  ##$@
  ##  ## $@
 ##  ##  $@
     ####$@@
0x2514  BOX DRAWINGS LIGHT UP AND RIGHT
 ##    ##$@
 ##   ## $@
 ##  ##  $@
 ## ## ##$@
   ## ###$@
  ## ####$@
 ##  ####$@
       ##$@@
0x2518  BOX DRAWINGS LIGHT UP AND LEFT
 ## $@
 ## $@
    $@
 ## $@
 ## $@
 ## $@
 ## $@
    $@@
0x251C  BOX DRAWINGS LIGHT VERTICAL AND RIGHT
         $@
   ##  ##$@
  ##  ## $@
 ##  ##  $@
  ##  ## $@
   ##  ##$@
         $@
         $@@
0x2524  BOX DRAWINGS LIGHT VERTICAL AND LEFT
         $@
 ##  ##  $@
  ##  ## $@
   ##  ##$@
  ##  ## $@
 ##  ##  $@
         $@
         $@@
0x252C  BOX DRAWINGS LIGHT DOWN AND HORIZONTAL
  # #$@
 # # $@
  # #$@
 # # $@
  # #$@
 # # $@
  # #$@
 # # $@@
0x2534  BOX DRAWINGS LIGHT UP AND HORIZONTAL
  # # # #$@
 # # # # $@
  # # # #$@
 # # # # $@
  # # # #$@
 # # # # $@
  # # # #$@
 # # # # $@@
0x253C  BOX DRAWINGS LIGHT VERTICAL AND HORIZONTAL
 ## ## ##$@
  ### ###$@
 ## ## ##$@
 ### ### $@
 ## ## ##$@
  ### ###$@
 ## ## ##$@
 ### ### $@@
0x2550  BOX DRAWINGS DOUBLE HORIZONTAL
 ## ## $@
 ## ## $@
 ## ###$@
 ##    $@
 ######$@
       $@
       $@
       $@@
0x2551  BOX DRAWINGS DOUBLE VERTICAL
       $@
       $@
 ######$@
 ##    $@
 ## ###$@
 ## ## $@
 ## ## $@
 ## ## $@@
0x2552  BOX DRAWINGS DOWN SINGLE AND RIGHT DOUBLE
   ## ## $@
   ## ## $@
 #### ###$@
         $@
 ########$@
         $@
         $@
         $@@
0x2553  BOX DRAWINGS DOWN DOUBLE AND RIGHT SINGLE
 #### $@
 #### $@
 #####$@
 ##   $@
 #####$@
 #### $@
 #### $@
 #### $@@
0x2554  BOX DRAWINGS DOUBLE DOWN AND RIGHT
         $@
         $@
 ########$@
         $@
 ########$@
         $@
         $@
         $@@
0x2555  BOX DRAWINGS DOWN SINGLE AND LEFT DOUBLE
   #### $@
   #### $@
 #######$@
        $@
 #######$@
   #### $@
   #### $@
   #### $@@
0x2556  BOX DRAWINGS DOWN DOUBLE AND LEFT SINGLE
    ##   $@
    ##   $@
 ########$@
         $@
 ########$@
         $@
         $@
         $@@
0x2557  BOX DRAWINGS DOUBLE DOWN AND LEFT
   ## ## $@
   ## ## $@
   ## ## $@
   ## ## $@
 ########$@
         $@
         $@
         $@@
0x2558  BOX DRAWINGS UP SINGLE AND RIGHT DOUBLE
         $@
         $@
 ########$@
         $@
 ########$@
    ##   $@
    ##   $@
    ##   $@@
0x2559  BOX DRAWINGS UP DOUBLE AND RIGHT SINGLE
         $@
         $@
         $@
         $@
 ########$@
   ## ## $@
   ## ## $@
   ## ## $@@
0x255A  BOX DRAWINGS DOUBLE UP AND RIGHT
 ## ## $@
 ## ## $@
 ## ## $@
 ## ## $@
 ######$@
       $@
       $@
       $@@
0x255B  BOX DRAWINGS UP SINGLE AND LEFT DOUBLE
 ##   $@
 ##   $@
 #####$@
 ##   $@
 #####$@
      $@
      $@
      $@@
0x255C  BOX DRAWINGS UP DOUBLE AND LEFT SINGLE
      $@
      $@
 #####$@
 ##   $@
 #####$@
 ##   $@
 ##   $@
 ##   $@@
0x255D  BOX DRAWINGS DOUBLE UP AND LEFT
       $@
       $@
       $@
       $@
 ######$@
 ## ## $@
 ## ## $@
 ## ## $@@
0x255E  BOX DRAWINGS VERTICAL SINGLE AND RIGHT DOUBLE
   ## ## $@
   ## ## $@
   ## ## $@
   ## ## $@
 ########$@
   ## ## $@
   ## ## $@
   ## ## $@@
0x255F  BOX DRAWINGS VERTICAL DOUBLE AND RIGHT SINGLE
    ##   $@
    ##   $@
 ########$@
    ##   $@
 ########$@
    ##   $@
    ##   $@
    ##   $@@
0x2560  BOX DRAWINGS DOUBLE VERTICAL AND RIGHT
    ## $@
    ## $@
    ## $@
    ## $@
 ##### $@
       $@
       $@
       $@@
0x2561  BOX DRAWINGS VERTICAL SINGLE AND LEFT DOUBLE
      $@
      $@
      $@
      $@
 #####$@
 ##   $@
 ##   $@
 ##   $@@
0x2562  BOX DRAWINGS VERTICAL DOUBLE AND LEFT SINGLE
         $@
         $@
         $@
         $@
 ########$@
 ########$@
 ########$@
 ########$@@
0x2563  BOX DRAWINGS DOUBLE VERTICAL AND LEFT
 ####  $@
 ####  $@
 ####  $@
 ####  $@
 ####  $@
 ####  $@
 ####  $@
 ####  $@@
0x2564  BOX DRAWINGS DOWN SINGLE AND HORIZONTAL DOUBLE
 ####$@
 ####$@
 ####$@
 ####$@
 ####$@
 ####$@
 ####$@
 ####$@@
0x2565  BOX DRAWINGS DOWN DOUBLE AND HORIZONTAL SINGLE
 ########$@
 ########$@
 ########$@
 ########$@
         $@
         $@
         $@
         $@@
0x2566  BOX DRAWINGS DOUBLE DOWN AND HORIZONTAL
  ###  $@
 ## ## $@
 ## ## $@
  ###  $@
       $@
       $@
       $@
       $@@
0x2567  BOX DRAWINGS UP SINGLE AND HORIZONTAL DOUBLE
    $@
    $@
    $@
 ## $@
 ## $@
    $@
    $@
    $@@
0x2568  BOX DRAWINGS UP DOUBLE AND HORIZONTAL SINGLE
    $@
    $@
    $@
    $@
 ## $@
    $@
    $@
    $@@
0x2569  BOX DRAWINGS DOUBLE UP AND HORIZONTAL
     ####$@
     ##  $@
     ##  $@
     ##  $@
 ### ##  $@
  ## ##  $@
   ####  $@
    ###  $@@
0x256A  BOX DRAWINGS VERTICAL SINGLE AND HORIZONTAL DOUBLE
 ####  $@
 ## ## $@
 ## ## $@
 ## ## $@
 ## ## $@
       $@
       $@
       $@@
0x256B  BOX DRAWINGS VERTICAL DOUBLE AND HORIZONTAL SINGLE
 ###  $@
   ## $@
  ##  $@
 ##   $@
 #### $@
      $@
      $@
      $@@
0x256C  BOX DRAWINGS DOUBLE VERTICAL AND HORIZONTAL
      $@
      $@
 #### $@
 #### $@
 #### $@
 #### $@
      $@
      $@@
0x2580  UPPER HALF BLOCK
 ## $@
 ## $@
 ## $@
 ## $@
 ## $@
 ## $@
 ## $@
 ## $@@
0x2584  LOWER HALF BLOCK
    ## $@
    ## $@
    ## $@
    ## $@
 ##### $@
    ## $@
    ## $@
    ## $@@
0x2588  FULL BLOCK
    ## $@
    ## $@
 ##### $@
    ## $@
 ##### $@
    ## $@
    ## $@
    ## $@@
0x258C  LEFT HALF BLOCK
   ####$@
   ####$@
   ####$@
   ####$@
 ######$@
   ####$@
   ####$@
   ####$@@
0x2590  RIGHT HALF BLOCK
        $@
        $@
        $@
        $@
 #######$@
   ## ##$@
   ## ##$@
   ## ##$@@
0x2591  LIGHT SHADE
       $@
       $@
 ##### $@
    ## $@
 ##### $@
    ## $@
    ## $@
    ## $@@
0x2592  MEDIUM SHADE
   ####$@
   ####$@
 ######$@
     ##$@
 ######$@
   ####$@
   ####$@
   ####$@@
0x2593  DARK SHADE
 ####$@
 ####$@
 ####$@
 ####$@
 ####$@
 ####$@
 ####$@
 ####$@@
0x25A0  BLACK SQUARE
   ## ##$@
   ## ##$@
 #### ##$@
      ##$@
 #######$@
        $@
        $@
        $@@
0x30A2  A
 ##########$@
       ### $@
      #    $@
     #     $@
    #      $@
   #       $@
  #        $@
           $@@
0x30A4  I
       ##$@
     ##  $@
   ## #  $@
 ##   #  $@
      #  $@
      #  $@
      #  $@
         $@@
0x30A6  U
     #     $@
 ##########$@
 #        #$@
        ## $@
      ##   $@
    ##     $@
  ##       $@
           $@@
0x30A8  E
           $@
   ####### $@
      #    $@
      #    $@
      #    $@
      #    $@
 ##########$@
           $@@
0x30AA  O
        #  $@
 ##########$@
       ##  $@
     ## #  $@
   ##   #  $@
 ##    ##  $@
        #  $@
           $@@
0x30AB  KA
      #    $@
 ##########$@
     #    #$@
     #    #$@
    #     #$@
   #   # # $@
  #     #  $@
           $@@
0x30AD  KI
 # #    $@
  #   # $@
 # # #  $@
    #   $@
   # #  $@
  #   # $@
       #$@
        $@@
0x30AF  KU
    #      $@
   ########$@
  #       #$@
 #      ## $@
      ##   $@
    ##     $@
  ##       $@
           $@@
0x30B1  KE
    #      $@
   ########$@
  #    #   $@
 #    #    $@
     #     $@
    #      $@
   #       $@
           $@@
0x30B3  KO
           $@
 ##########$@
          #$@
          #$@
          #$@
          #$@
 ######### $@
           $@@
0x30B5  SA
   #    #  $@
 ##########$@
   #    #  $@
        #  $@
       #   $@
      #    $@
    #      $@
           $@@
0x30B7  SI (SHI)
   #       #$@
 #  #     # $@
  #      #  $@
       ##   $@
     ##     $@
   ##       $@
 ##         $@
            $@@
0x30B9  SU
 ########$@
        #$@
       # $@
     ##  $@
   ## #  $@
  ##   # $@
 #      #$@
         $@@
0x30BB  SE
   #       $@
   #       $@
 ##########$@
   #     # $@
   #       $@
   #       $@
    ###### $@
           $@@
0x30BD  SO
 #       #$@
 #       #$@
        # $@
       #  $@
     ##   $@
   ##     $@
 ##       $@
          $@@
0x30BF  TA
    #     $@
   #######$@
  #     # $@
 # #   #  $@
    ###   $@
   ##     $@
 ##       $@
          $@@
0x30C1  TI (CHI)
        ## $@
  ######   $@
      #    $@
 ##########$@
      #    $@
      #    $@
    ##     $@
           $@@
0x30C4  TU (TSU)
 # #     #$@
 # #     #$@
        # $@
       #  $@
     ##   $@
   ##     $@
 ##       $@
          $@@
0x30C6  TE
   ######  $@
           $@
 ##########$@
      #    $@
      #    $@
     #     $@
   ##      $@
           $@@
0x30C8  TO
 #   $@
 #   $@
 ##  $@
 # # $@
 #  #$@
 #   $@
 #   $@
     $@@
0x30CA  NA
      #    $@
 ##########$@
      #    $@
      #    $@
     #     $@
    #      $@
  ##       $@
           $@@
0x30CB  NI
           $@
           $@
   ######  $@
           $@
           $@
 ##########$@
           $@
           $@@
0x30CC  NU
 ##########$@
          #$@
    #    # $@
     # ##  $@
     ##    $@
   ##  #   $@
 ##     #  $@
           $@@
0x30CD  NE
      #    $@
 ##########$@
         # $@
      ###  $@
   ######  $@
 ##   #  ##$@
      #    $@
           $@@
0x30CE  NO
         #$@
         #$@
        # $@
       #  $@
     ##   $@
   ##     $@
 ##       $@
          $@@
0x30CF  HA
          $@
          $@
    #  #  $@
   #    # $@
  #      #$@
 #        $@
          $@
          $@@
0x30D2  HI
 #       $@
 #   ### $@
 ####    $@
 #       $@
 #       $@
 #       $@
  #######$@
         $@@
0x30D5  HU (FU)
 ########$@
        #$@
        #$@
       # $@
     ##  $@
   ##    $@
 ##      $@
         $@@
0x30D8  HE
           $@
           $@
   ##      $@
  #  ##    $@
 #     ##  $@
         ##$@
           $@
           $@@
0x30DB  HO
      #    $@
 ##########$@
      #    $@
   #  # #  $@
  #   #  # $@
 #   ##   #$@
      #    $@
           $@@
0x30DE  MA
           $@
 ##########$@
         # $@
        #  $@
     # #   $@
      #    $@
       #   $@
           $@@
0x30DF  MI
 ####  $@
     ##$@
 ###   $@
    ###$@
       $@
 ###   $@
    ###$@
       $@@
0x30E0  MU
      #    $@
     #     $@
    #      $@
   #       $@
  #     #  $@
 ######### $@
          #$@
           $@@
0x30E1  ME
         #$@
        # $@
   #   #  $@
    # #   $@
     #    $@
   ## #   $@
 ##    #  $@
          $@@
0x30E2  MO
   ######  $@
     #     $@
 ##########$@
     #     $@
     #     $@
     #     $@
      #### $@
           $@@
0x30E4  YA
 #     ##  $@
  #  ## #  $@
  ###      $@
 #  #      $@
     #     $@
      #    $@
       #   $@
           $@@
0x30E6  YU
           $@
   ######  $@
        #  $@
        #  $@
        #  $@
 ##########$@
           $@
           $@@
0x30E8  YO
           $@
   ######  $@
       #   $@
      #    $@
      #    $@
 ##########$@
           $@
           $@@
0x30E9  RA
   ######  $@
           $@
 ##########$@
 #        #$@
        ## $@
      ##   $@
    ##     $@
           $@@
0x30EA  RI
 #   #$@
 #   #$@
 #   #$@
 #   #$@
    # $@
   #  $@
 ##   $@
      $@@
0x30EB  RU
    # #    $@
    # #    $@
    # #    $@
    # #   #$@
   #  #  # $@
  #   # #  $@
 #    ##   $@
           $@@
0x30EC  RE
 #       $@
 #       $@
 #       $@
 #     ##$@
 #   ##  $@
 # ##    $@
 ##      $@
         $@@
0x30ED  RO
          $@
 #########$@
 #       #$@
 #       #$@
 #       #$@
 #########$@
          $@
          $@@
0x30EF  WA
 ##########$@
 #        #$@
         # $@
        #  $@
       #   $@
     ##    $@
   ##      $@
           $@@
0x30F0  WI
      #    $@
   ####### $@
    # #    $@
    # #    $@
 ##########$@
      #    $@
      #    $@
           $@@
0x30F1  WE
 #########$@
         #$@
         #$@
 ######## $@
        # $@
        # $@
 ######## $@
          $@@
0x30F2  WO
 ##########$@
          #$@
         # $@
 ########  $@
     ##    $@
   ##      $@
 ##        $@
           $@@
0x30F3  N
         #$@
 #       #$@
  #     # $@
       #  $@
     ##   $@
   ##     $@
 ##       $@
          $@@
-0x0004  KATAMAP
                                                    @
a-A i-B u-C e-D o-E ka-F ki-G ku-H ke-I ko-J        @
sa-K shi-L su-M se-N so-O ta-P chi-Q tsu-R te-S to-T@
na-U ni-V nu-W ne-X no-Y ha-Z hi-a fu-b he-c ho-d   @
ma-e mi-f mu-g me-h mo-i ya-j yu-k we-l yo-m        @
ra-n ri-o ru-p re-q ro-r wa-s wi-t wo-u             @
n-v                                                 @
                                                    @@
-0x0006  MOSCOWMAP
a-a, b-b, v-v, g-g, d-d, e-e, zh-j, z-z, i-i@
short i->, k-k, l-l, m-m, n-n, o-o, p-p, r-r@
s-s, t-t, u-u, f-f, kh-h, ts-q, ch-c, sh-w  @
shch-x, hard-\\, yeru-|, soft-/, reverse e-~ @
yu-\`, ya-y                                  @
Capitals use Latin capital letters, except: @
Reverse E-<, Yu-@                           @
No caps for short i, hard, yeru, soft.      @@
`,vp=`flf2a$ 8 6 59 15 10 0 24463
Big by Glenn Chappell 4/93 -- based on Standard
Includes ISO Latin-1
Greek characters by Bruce Jakeway <pbjakeway@neumann.uwaterloo.ca>
figlet release 2.2 -- November 1996
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.
 $@
 $@
 $@
 $@
 $@
 $@
 $@
 $@@
  _ @
 | |@
 | |@
 | |@
 |_|@
 (_)@
    @
    @@
  _ _ @
 ( | )@
  V V @
   $  @
   $  @
   $  @
      @
      @@
    _  _   @
  _| || |_ @
 |_  __  _|@
  _| || |_ @
 |_  __  _|@
   |_||_|  @
           @
           @@
   _  @
  | | @
 / __)@
 \\__ \\@
 (   /@
  |_| @
      @
      @@
  _   __@
 (_) / /@
    / / @
   / /  @
  / / _ @
 /_/ (_)@
        @
        @@
         @
   ___   @
  ( _ )  @
  / _ \\/\\@
 | (_>  <@
  \\___/\\/@
         @
         @@
  _ @
 ( )@
 |/ @
  $ @
  $ @
  $ @
    @
    @@
   __@
  / /@
 | | @
 | | @
 | | @
 | | @
  \\_\\@
     @@
 __  @
 \\ \\ @
  | |@
  | |@
  | |@
  | |@
 /_/ @
     @@
     _    @
  /\\| |/\\ @
  \\ \` ' / @
 |_     _|@
  / , . \\ @
  \\/|_|\\/ @
          @
          @@
        @
    _   @
  _| |_ @
 |_   _|@
   |_|  @
    $   @
        @
        @@
    @
    @
    @
    @
  _ @
 ( )@
 |/ @
    @@
         @
         @
  ______ @
 |______|@
     $   @
     $   @
         @
         @@
    @
    @
    @
    @
  _ @
 (_)@
    @
    @@
      __@
     / /@
    / / @
   / /  @
  / /   @
 /_/    @
        @
        @@
   ___  @
  / _ \\ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
  __ @
 /_ |@
  | |@
  | |@
  | |@
  |_|@
     @
     @@
  ___  @
 |__ \\ @
   $) |@
   / / @
  / /_ @
 |____|@
       @
       @@
  ____  @
 |___ \\ @
   __) |@
  |__ < @
  ___) |@
 |____/ @
        @
        @@
  _  _   @
 | || |  @
 | || |_ @
 |__   _|@
    | |  @
    |_|  @
         @
         @@
  _____ @
 | ____|@
 | |__  @
 |___ \\ @
  ___) |@
 |____/ @
        @
        @@
    __  @
   / /  @
  / /_  @
 | '_ \\ @
 | (_) |@
  \\___/ @
        @
        @@
  ______ @
 |____  |@
    $/ / @
    / /  @
   / /   @
  /_/    @
         @
         @@
   ___  @
  / _ \\ @
 | (_) |@
  > _ < @
 | (_) |@
  \\___/ @
        @
        @@
   ___  @
  / _ \\ @
 | (_) |@
  \\__, |@
    / / @
   /_/  @
        @
        @@
    @
  _ @
 (_)@
  $ @
  _ @
 (_)@
    @
    @@
    @
  _ @
 (_)@
  $ @
  _ @
 ( )@
 |/ @
    @@
    __@
   / /@
  / / @
 < <  @
  \\ \\ @
   \\_\\@
      @
      @@
         @
  ______ @
 |______|@
  ______ @
 |______|@
         @
         @
         @@
 __   @
 \\ \\  @
  \\ \\ @
   > >@
  / / @
 /_/  @
      @
      @@
  ___  @
 |__ \\ @
    ) |@
   / / @
  |_|  @
  (_)  @
       @
       @@
          @
    ____  @
   / __ \\ @
  / / _\` |@
 | | (_| |@
  \\ \\__,_|@
   \\____/ @
          @@
           @
     /\\    @
    /  \\   @
   / /\\ \\  @
  / ____ \\ @
 /_/    \\_\\@
           @
           @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 | |_) |@
 |____/ @
        @
        @@
   _____ @
  / ____|@
 | | $   @
 | | $   @
 | |____ @
  \\_____|@
         @
         @@
  _____  @
 |  __ \\ @
 | |  | |@
 | |  | |@
 | |__| |@
 |_____/ @
         @
         @@
  ______ @
 |  ____|@
 | |__   @
 |  __|  @
 | |____ @
 |______|@
         @
         @@
  ______ @
 |  ____|@
 | |__   @
 |  __|  @
 | |     @
 |_|     @
         @
         @@
   _____ @
  / ____|@
 | |  __ @
 | | |_ |@
 | |__| |@
  \\_____|@
         @
         @@
  _    _ @
 | |  | |@
 | |__| |@
 |  __  |@
 | |  | |@
 |_|  |_|@
         @
         @@
  _____ @
 |_   _|@
   | |  @
   | |  @
  _| |_ @
 |_____|@
        @
        @@
       _ @
      | |@
      | |@
  _   | |@
 | |__| |@
  \\____/ @
         @
         @@
  _  __@
 | |/ /@
 | ' / @
 |  <  @
 | . \\ @
 |_|\\_\\@
       @
       @@
  _      @
 | |     @
 | |     @
 | |     @
 | |____ @
 |______|@
         @
         @@
  __  __ @
 |  \\/  |@
 | \\  / |@
 | |\\/| |@
 | |  | |@
 |_|  |_|@
         @
         @@
  _   _ @
 | \\ | |@
 |  \\| |@
 | . \` |@
 | |\\  |@
 |_| \\_|@
        @
        @@
   ____  @
  / __ \\ @
 | |  | |@
 | |  | |@
 | |__| |@
  \\____/ @
         @
         @@
  _____  @
 |  __ \\ @
 | |__) |@
 |  ___/ @
 | |     @
 |_|     @
         @
         @@
   ____  @
  / __ \\ @
 | |  | |@
 | |  | |@
 | |__| |@
  \\___\\_\\@
         @
         @@
  _____  @
 |  __ \\ @
 | |__) |@
 |  _  / @
 | | \\ \\ @
 |_|  \\_\\@
         @
         @@
   _____ @
  / ____|@
 | (___  @
  \\___ \\ @
  ____) |@
 |_____/ @
         @
         @@
  _______ @
 |__   __|@
    | |   @
    | |   @
    | |   @
    |_|   @
          @
          @@
  _    _ @
 | |  | |@
 | |  | |@
 | |  | |@
 | |__| |@
  \\____/ @
         @
         @@
 __      __@
 \\ \\    / /@
  \\ \\  / / @
   \\ \\/ /  @
    \\  /   @
     \\/    @
           @
           @@
 __          __@
 \\ \\        / /@
  \\ \\  /\\  / / @
   \\ \\/  \\/ /  @
    \\  /\\  /   @
     \\/  \\/    @
               @
               @@
 __   __@
 \\ \\ / /@
  \\ V / @
   > <  @
  / . \\ @
 /_/ \\_\\@
        @
        @@
 __     __@
 \\ \\   / /@
  \\ \\_/ / @
   \\   /  @
    | |   @
    |_|   @
          @
          @@
  ______@
 |___  /@
   $/ / @
   / /  @
  / /__ @
 /_____|@
        @
        @@
  ___ @
 |  _|@
 | |  @
 | |  @
 | |  @
 | |_ @
 |___|@
      @@
 __     @
 \\ \\    @
  \\ \\   @
   \\ \\  @
    \\ \\ @
     \\_\\@
        @
        @@
  ___ @
 |_  |@
   | |@
   | |@
   | |@
  _| |@
 |___|@
      @@
  /\\ @
 |/\\|@
   $ @
   $ @
   $ @
   $ @
     @
     @@
         @
         @
         @
         @
         @
     $   @
  ______ @
 |______|@@
  _ @
 ( )@
  \\|@
  $ @
  $ @
  $ @
    @
    @@
        @
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
  _     @
 | |    @
 | |__  @
 | '_ \\ @
 | |_) |@
 |_.__/ @
        @
        @@
       @
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @
       @@
      _ @
     | |@
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
       @
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @
       @@
   __ @
  / _|@
 | |_ @
 |  _|@
 | |  @
 |_|  @
      @
      @@
        @
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
   __/ |@
  |___/ @@
  _     @
 | |    @
 | |__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @
        @@
  _ @
 (_)@
  _ @
 | |@
 | |@
 |_|@
    @
    @@
    _ @
   (_)@
    _ @
   | |@
   | |@
   | |@
  _/ |@
 |__/ @@
  _    @
 | |   @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
       @
       @@
  _ @
 | |@
 | |@
 | |@
 | |@
 |_|@
    @
    @@
            @
            @
  _ __ ___  @
 | '_ \` _ \\ @
 | | | | | |@
 |_| |_| |_|@
            @
            @@
        @
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @
        @@
        @
        @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
        @
        @
  _ __  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 | |    @
 |_|    @@
        @
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
     | |@
     |_|@@
       @
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
       @
       @@
      @
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
      @
      @@
  _   @
 | |  @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @
      @@
        @
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @
        @@
        @
        @
 __   __@
 \\ \\ / /@
  \\ V / @
   \\_/  @
        @
        @@
           @
           @
 __      __@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @
           @@
       @
       @
 __  __@
 \\ \\/ /@
  >  < @
 /_/\\_\\@
       @
       @@
        @
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__, |@
   __/ |@
  |___/ @@
      @
      @
  ____@
 |_  /@
  / / @
 /___|@
      @
      @@
    __@
   / /@
  | | @
 / /  @
 \\ \\  @
  | | @
   \\_\\@
      @@
  _ @
 | |@
 | |@
 | |@
 | |@
 | |@
 | |@
 |_|@@
 __   @
 \\ \\  @
  | | @
   \\ \\@
   / /@
  | | @
 /_/  @
      @@
  /\\/|@
 |/\\/ @
   $  @
   $  @
   $  @
   $  @
      @
      @@
   _   _  @
  (_)_(_) @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
  _   _ @
 (_) (_)@
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
  _   _ @
 (_) (_)@
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
  _   _ @
 (_) (_)@
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @
        @@
   ___  @
  / _ \\ @
 | | ) |@
 | |< < @
 | | ) |@
 | ||_/ @
 |_|    @
        @@
160  NO-BREAK SPACE
 $@
 $@
 $@
 $@
 $@
 $@
 $@
 $@@
161  INVERTED EXCLAMATION MARK
  _ @
 (_)@
 | |@
 | |@
 | |@
 |_|@
    @
    @@
162  CENT SIGN
       @
    _  @
   | | @
  / __)@
 | (__ @
  \\   )@
   |_| @
       @@
163  POUND SIGN
     ___   @
    / ,_\\  @
  _| |_    @
 |__ __|   @
   | |____ @
  (_,_____|@
           @
           @@
164  CURRENCY SIGN
        @
 /\\___/\\@
 \\  _  /@
 | (_) |@
 / ___ \\@
 \\/   \\/@
        @
        @@
165  YEN SIGN
  __   __ @
  \\ \\ / / @
  _\\ V /_ @
 |___ ___|@
 |___ ___|@
    |_|   @
          @
          @@
166  BROKEN BAR
  _ @
 | |@
 | |@
 |_|@
  _ @
 | |@
 | |@
 |_|@@
167  SECTION SIGN
    __ @
  _/ _)@
 / \\ \\ @
 \\ \\\\ \\@
  \\ \\_/@
 (__/  @
       @
       @@
168  DIAERESIS
  _   _ @
 (_) (_)@
  $   $ @
  $   $ @
  $   $ @
  $   $ @
        @
        @@
169  COPYRIGHT SIGN
    ________   @
   /  ____  \\  @
  /  / ___|  \\ @
 |  | |       |@
 |  | |___    |@
  \\  \\____|  / @
   \\________/  @
               @@
170  FEMININE ORDINAL INDICATOR
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
 |_____|@
    $   @
        @
        @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
    ____@
   / / /@
  / / / @
 < < <  @
  \\ \\ \\ @
   \\_\\_\\@
        @
        @@
172  NOT SIGN
         @
         @
  ______ @
 |____  |@
      |_|@
     $   @
         @
         @@
173  SOFT HYPHEN
        @
        @
  _____ @
 |_____|@
    $   @
    $   @
        @
        @@
174  REGISTERED SIGN
    ________   @
   /  ____  \\  @
  /  |  _ \\  \\ @
 |   | |_) |  |@
 |   |  _ <   |@
  \\  |_| \\_\\ / @
   \\________/  @
               @@
175  MACRON
  ______ @
 |______|@
     $   @
     $   @
     $   @
     $   @
         @
         @@
176  DEGREE SIGN
   __  @
  /  \\ @
 | () |@
  \\__/ @
    $  @
    $  @
       @
       @@
177  PLUS-MINUS SIGN
    _   @
  _| |_ @
 |_   _|@
   |_|  @
  _____ @
 |_____|@
        @
        @@
178  SUPERSCRIPT TWO
  ___ @
 |_  )@
  / / @
 /___|@
   $  @
   $  @
      @
      @@
179  SUPERSCRIPT THREE
  ____@
 |__ /@
  |_ \\@
 |___/@
   $  @
   $  @
      @
      @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
  $ @
  $ @
  $ @
    @
    @@
181  MICRO SIGN
        @
        @
  _   _ @
 | | | |@
 | |_| |@
 | ._,_|@
 | |    @
 |_|    @@
182  PILCROW SIGN
   ______ @
  /      |@
 | (| || |@
  \\__ || |@
    | || |@
    |_||_|@
          @
          @@
183  MIDDLE DOT
    @
    @
  _ @
 (_)@
  $ @
  $ @
    @
    @@
184  CEDILLA
    @
    @
    @
    @
    @
  _ @
 )_)@
    @@
185  SUPERSCRIPT ONE
  _ @
 / |@
 | |@
 |_|@
  $ @
  $ @
    @
    @@
186  MASCULINE ORDINAL INDICATOR
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
 |_____|@
    $   @
        @
        @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
 ____   @
 \\ \\ \\  @
  \\ \\ \\ @
   > > >@
  / / / @
 /_/_/  @
        @
        @@
188  VULGAR FRACTION ONE QUARTER
  _   __   @
 / | / /   @
 | |/ / _  @
 |_/ / | | @
  / /|_  _|@
 /_/   |_| @
           @
           @@
189  VULGAR FRACTION ONE HALF
  _   __  @
 / | / /  @
 | |/ /__ @
 |_/ /_  )@
  / / / / @
 /_/ /___|@
          @
          @@
190  VULGAR FRACTION THREE QUARTERS
  ____  __   @
 |__ / / /   @
  |_ \\/ / _  @
 |___/ / | | @
    / /|_  _|@
   /_/   |_| @
             @
             @@
191  INVERTED QUESTION MARK
    _  @
   (_) @
   | | @
  / /  @
 | (__ @
  \\___|@
       @
       @@
192  LATIN CAPITAL LETTER A WITH GRAVE
    __    @
    \\_\\   @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
193  LATIN CAPITAL LETTER A WITH ACUTE
     __   @
    /_/   @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
    //\\   @
   |/_\\|  @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
195  LATIN CAPITAL LETTER A WITH TILDE
    /\\/|  @
   |/\\/   @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
   _   _  @
  (_)_(_) @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
     _    @
    (o)   @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
198  LATIN CAPITAL LETTER AE
      _______ @
     /   ____|@
    /   |__   @
   / /|  __|  @
  / ___ |____ @
 /_/  |______|@
              @
              @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   _____ @
  / ____|@
 | | $   @
 | | $   @
 | |____ @
  \\_____|@
    )_)  @
         @@
200  LATIN CAPITAL LETTER E WITH GRAVE
   __   @
  _\\_\\_ @
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @
        @@
201  LATIN CAPITAL LETTER E WITH ACUTE
    __  @
  _/_/_ @
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @
        @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
  _   _ @
 (_) (_)@
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @
        @@
204  LATIN CAPITAL LETTER I WITH GRAVE
  __  @
  \\_\\ @
 |_ _|@
  | | @
  | | @
 |___|@
      @
      @@
205  LATIN CAPITAL LETTER I WITH ACUTE
   __ @
  /_/ @
 |_ _|@
  | | @
  | | @
 |___|@
      @
      @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
 |_ _|@
  | | @
  | | @
 |___|@
      @
      @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  |_ _| @
   | |  @
   | |  @
  |___| @
        @
        @@
208  LATIN CAPITAL LETTER ETH
    _____  @
   |  __ \\ @
  _| |_ | |@
 |__ __|| |@
   | |__| |@
   |_____/ @
           @
           @@
209  LATIN CAPITAL LETTER N WITH TILDE
   /\\/| @
  |/\\/_ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @
        @@
210  LATIN CAPITAL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
211  LATIN CAPITAL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
213  LATIN CAPITAL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
215  MULTIPLICATION SIGN
     @
     @
 /\\/\\@
 >  <@
 \\/\\/@
   $ @
     @
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   _____ @
  / __// @
 | | // |@
 | |//| |@
 | //_| |@
  //___/ @
         @
         @@
217  LATIN CAPITAL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
    __  @
 __/_/__@
 \\ \\ / /@
  \\ V / @
   | |  @
   |_|  @
        @
        @@
222  LATIN CAPITAL LETTER THORN
  _      @
 | |___  @
 |  __ \\ @
 | |__) |@
 |  ___/ @
 |_|     @
         @
         @@
223  LATIN SMALL LETTER SHARP S
   ___  @
  / _ \\ @
 | | ) |@
 | |< < @
 | | ) |@
 | ||_/ @
 |_|    @
        @@
224  LATIN SMALL LETTER A WITH GRAVE
   __   @
   \\_\\  @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
225  LATIN SMALL LETTER A WITH ACUTE
    __  @
   /_/  @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
227  LATIN SMALL LETTER A WITH TILDE
   /\\/| @
  |/\\/  @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
  _   _ @
 (_) (_)@
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
229  LATIN SMALL LETTER A WITH RING ABOVE
    __  @
   (()) @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
230  LATIN SMALL LETTER AE
           @
           @
   __ ____ @
  / _\`  _ \\@
 | (_|  __/@
  \\__,____|@
           @
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
   )_) @
       @@
232  LATIN SMALL LETTER E WITH GRAVE
   __  @
   \\_\\ @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @
       @@
233  LATIN SMALL LETTER E WITH ACUTE
    __ @
   /_/ @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @
       @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
   //\\ @
  |/ \\|@
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
  _   _ @
 (_) (_)@
   ___  @
  / _ \\ @
 |  __/ @
  \\___| @
        @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
 __ @
 \\_\\@
  _ @
 | |@
 | |@
 |_|@
    @
    @@
237  LATIN SMALL LETTER I WITH ACUTE
  __@
 /_/@
  _ @
 | |@
 | |@
 |_|@
    @
    @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/ \\|@
   _  @
  | | @
  | | @
  |_| @
      @
      @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_) (_)@
    _   @
   | |  @
   | |  @
   |_|  @
        @
        @@
240  LATIN SMALL LETTER ETH
  /\\/\\  @
  >  <  @
  \\/\\ \\ @
  / _\` |@
 | (_) |@
  \\___/ @
        @
        @@
241  LATIN SMALL LETTER N WITH TILDE
   /\\/| @
  |/\\/  @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @
        @@
242  LATIN SMALL LETTER O WITH GRAVE
   __   @
   \\_\\  @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
243  LATIN SMALL LETTER O WITH ACUTE
    __  @
   /_/  @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
245  LATIN SMALL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
  _   _ @
 (_) (_)@
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
247  DIVISION SIGN
     _    @
    (_)   @
  _______ @
 |_______|@
     _    @
    (_)   @
          @
          @@
248  LATIN SMALL LETTER O WITH STROKE
         @
         @
   ____  @
  / _//\\ @
 | (//) |@
  \\//__/ @
         @
         @@
249  LATIN SMALL LETTER U WITH GRAVE
   __   @
   \\_\\  @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @
        @@
250  LATIN SMALL LETTER U WITH ACUTE
    __  @
   /_/  @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @
        @@
253  LATIN SMALL LETTER Y WITH ACUTE
    __  @
   /_/  @
  _   _ @
 | | | |@
 | |_| |@
  \\__, |@
   __/ |@
  |___/ @@
254  LATIN SMALL LETTER THORN
  _     @
 | |    @
 | |__  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 | |    @
 |_|    @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
  _   _ @
 (_) (_)@
  _   _ @
 | | | |@
 | |_| |@
  \\__, |@
   __/ |@
  |___/ @@
0x02BC  MODIFIER LETTER APOSTROPHE
   @
   @
 ))@
   @
   @
   @
   @
   @@
0x02BD  MODIFIER LETTER REVERSED COMMA
   @
   @
 ((@
   @
   @
   @
   @
   @@
0x037A  GREEK YPOGEGRAMMENI
   @
   @
   @
   @
   @
   @
   @
 ||@@
0x0387  GREEK ANO TELEIA
    @
  $ @
  _ @
 (_)@
    @
  $ @
    @
    @@
0x0391  GREEK CAPITAL LETTER ALPHA
   ___  @
  / _ \\ @
 | |_| |@
 |  _  |@
 | | | |@
 |_| |_|@
        @
        @@
0x0392  GREEK CAPITAL LETTER BETA
  ____  @
 |  _ \\ @
 | |_) )@
 |  _ ( @
 | |_) )@
 |____/ @
        @
        @@
0x0393  GREEK CAPITAL LETTER GAMMA
  _____ @
 |  ___)@
 | |$   @
 | |$   @
 | |    @
 |_|    @
        @
        @@
0x0394  GREEK CAPITAL LETTER DELTA
           @
     /\\    @
    /  \\   @
   / /\\ \\  @
  / /__\\ \\ @
 /________\\@
           @
           @@
0x0395  GREEK CAPITAL LETTER EPSILON
  _____ @
 |  ___)@
 | |_   @
 |  _)  @
 | |___ @
 |_____)@
        @
        @@
0x0396  GREEK CAPITAL LETTER ZETA
  ______@
 (___  /@
    / / @
   / /  @
  / /__ @
 /_____)@
        @
        @@
0x0397  GREEK CAPITAL LETTER ETA
  _   _ @
 | | | |@
 | |_| |@
 |  _  |@
 | | | |@
 |_| |_|@
        @
        @@
0x0398  GREEK CAPITAL LETTER THETA
   ____  @
  / __ \\ @
 | |__| |@
 |  __  |@
 | |__| |@
  \\____/ @
         @
         @@
0x0399  GREEK CAPITAL LETTER IOTA
  ___ @
 (   )@
  | | @
  | | @
  | | @
 (___)@
      @
      @@
0x039A  GREEK CAPITAL LETTER KAPPA
  _   __@
 | | / /@
 | |/ / @
 |   <  @
 | |\\ \\ @
 |_| \\_\\@
        @
        @@
0x039B  GREEK CAPITAL LETTER LAMDA
           @
     /\\    @
    /  \\   @
   / /\\ \\  @
  / /  \\ \\ @
 /_/    \\_\\@
           @
           @@
0x039C  GREEK CAPITAL LETTER MU
  __   __ @
 |  \\ /  |@
 |   v   |@
 | |\\_/| |@
 | |   | |@
 |_|   |_|@
          @
          @@
0x039D  GREEK CAPITAL LETTER NU
  _   _ @
 | \\ | |@
 |  \\| |@
 |     |@
 | |\\  |@
 |_| \\_|@
        @
        @@
0x039E  GREEK CAPITAL LETTER XI
  _____ @
 (_____)@
   ___  @
  (___) @
  _____ @
 (_____)@
        @
        @@
0x039F  GREEK CAPITAL LETTER OMICRON
   ___  @
  / _ \\ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
0x03A0  GREEK CAPITAL LETTER PI
  _______ @
 (   _   )@
  | | | | @
  | | | | @
  | | | | @
  |_| |_| @
          @
          @@
0x03A1  GREEK CAPITAL LETTER RHO
  ____  @
 |  _ \\ @
 | |_) )@
 |  __/ @
 | |    @
 |_|    @
        @
        @@
0x03A3  GREEK CAPITAL LETTER SIGMA
 ______ @
 \\  ___)@
  \\ \\   @
   > >  @
  / /__ @
 /_____)@
        @
        @@
0x03A4  GREEK CAPITAL LETTER TAU
  _____ @
 (_   _)@
   | |  @
   | |  @
   | |  @
   |_|  @
        @
        @@
0x03A5  GREEK CAPITAL LETTER UPSILON
  __   __ @
 (_ \\ / _)@
   \\ v /  @
    | |   @
    | |   @
    |_|   @
          @
          @@
0x03A6  GREEK CAPITAL LETTER PHI
     _    @
   _| |_  @
  /     \\ @
 ( (| |) )@
  \\_   _/ @
    |_|   @
          @
          @@
0x03A7  GREEK CAPITAL LETTER CHI
 __   __@
 \\ \\ / /@
  \\ v / @
   > <  @
  / ^ \\ @
 /_/ \\_\\@
        @
        @@
0x03A8  GREEK CAPITAL LETTER PSI
  _  _  _ @
 | || || |@
 | \\| |/ |@
  \\_   _/ @
    | |   @
    |_|   @
          @
          @@
0x03A9  GREEK CAPITAL LETTER OMEGA
    ____   @
   / __ \\  @
  | |  | | @
  | |  | | @
  _\\ \\/ /_ @
 (___||___)@
           @
           @@
0x03B1  GREEK SMALL LETTER ALPHA
         @
         @
   __  __@
  /  \\/ /@
 ( ()  < @
  \\__/\\_\\@
         @
         @@
0x03B2  GREEK SMALL LETTER BETA
   ___  @
  / _ \\ @
 | |_) )@
 |  _ < @
 | |_) )@
 |  __/ @
 | |    @
 |_|    @@
0x03B3  GREEK SMALL LETTER GAMMA
        @
        @
  _   _ @
 ( \\ / )@
  \\ v / @
   | |  @
   | |  @
   |_|  @@
0x03B4  GREEK SMALL LETTER DELTA
    __  @
   / _) @
   \\ \\  @
  / _ \\ @
 ( (_) )@
  \\___/ @
        @
        @@
0x03B5  GREEK SMALL LETTER EPSILON
      @
      @
  ___ @
 / __)@
 > _) @
 \\___)@
      @
      @@
0x03B6  GREEK SMALL LETTER ZETA
 _____  @
 \\__  ) @
   / /  @
  / /   @
 | |__  @
  \\__ \\ @
     ) )@
    (_/ @@
0x03B7  GREEK SMALL LETTER ETA
        @
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| | |@
     | |@
     |_|@@
0x03B8  GREEK SMALL LETTER THETA
   ___  @
  / _ \\ @
 | |_| |@
 |  _  |@
 | |_| |@
  \\___/ @
        @
        @@
0x03B9  GREEK SMALL LETTER IOTA
     @
     @
  _  @
 | | @
 | | @
  \\_)@
     @
     @@
0x03BA  GREEK SMALL LETTER KAPPA
       @
       @
  _  __@
 | |/ /@
 |   < @
 |_|\\_\\@
       @
       @@
0x03BB  GREEK SMALL LETTER LAMDA
 __     @
 \\ \\    @
  \\ \\   @
   > \\  @
  / ^ \\ @
 /_/ \\_\\@
        @
        @@
0x03BC  GREEK SMALL LETTER MU
        @
        @
  _   _ @
 | | | |@
 | |_| |@
 | ._,_|@
 | |    @
 |_|    @@
0x03BD  GREEK SMALL LETTER NU
       @
       @
  _  __@
 | |/ /@
 | / / @
 |__/  @
       @
       @@
0x03BE  GREEK SMALL LETTER XI
 \\=\\__  @
  > __) @
 ( (_   @
  > _)  @
 ( (__  @
  \\__ \\ @
     ) )@
    (_/ @@
0x03BF  GREEK SMALL LETTER OMICRON
        @
        @
   ___  @
  / _ \\ @
 ( (_) )@
  \\___/ @
        @
        @@
0x03C0  GREEK SMALL LETTER PI
         @
         @
  ______ @
 (  __  )@
  | || | @
  |_||_| @
         @
         @@
0x03C1  GREEK SMALL LETTER RHO
        @
        @
   ___  @
  / _ \\ @
 | |_) )@
 |  __/ @
 | |    @
 |_|    @@
0x03C2  GREEK SMALL LETTER FINAL SIGMA
        @
        @
   ____ @
  / ___)@
 ( (__  @
  \\__ \\ @
    _) )@
   (__/ @@
0x03C3  GREEK SMALL LETTER SIGMA
        @
        @
   ____ @
  /  ._)@
 ( () ) @
  \\__/  @
        @
        @@
0x03C4  GREEK SMALL LETTER TAU
      @
      @
  ___ @
 (   )@
  | | @
   \\_)@
      @
      @@
0x03C5  GREEK SMALL LETTER UPSILON
        @
        @
  _   _ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
0x03C6  GREEK SMALL LETTER PHI
     _    @
    | |   @
   _| |_  @
  /     \\ @
 ( (| |) )@
  \\_   _/ @
    | |   @
    |_|   @@
0x03C7  GREEK SMALL LETTER CHI
        @
        @
 __   __@
 \\ \\ / /@
  \\ v / @
   > <  @
  / ^ \\ @
 /_/ \\_\\@@
0x03C8  GREEK SMALL LETTER PSI
          @
          @
  _  _  _ @
 | || || |@
 | \\| |/ |@
  \\_   _/ @
    | |   @
    |_|   @@
0x03C9  GREEK SMALL LETTER OMEGA
            @
            @
   __   __  @
  / / _ \\ \\ @
 | |_/ \\_| |@
  \\___^___/ @
            @
            @@
0x03D1  GREEK THETA SYMBOL
     ___    @
    / _ \\   @
   ( (_| |_ @
  _ \\ _   _)@
 | |___| |  @
  \\_____/   @
            @
            @@
0x03D5  GREEK PHI SYMBOL
          @
          @
  _   __  @
 | | /  \\ @
 | || || )@
  \\_   _/ @
    | |   @
    |_|   @@
0x03D6  GREEK PI SYMBOL
            @
            @
  _________ @
 (  _____  )@
 | |_/ \\_| |@
  \\___^___/ @
            @
            @@
-0x0005  
alpha = a, beta = b, gamma = g, delta = d, epsilon = e   @
zeta = z, eta = h, theta = q, iota = i, lamda = l, mu = m@
nu = n, xi = x, omicron = o, pi = p, rho = r, sigma = s  @
phi = f, chi = c, psi = y, omega = w, final sigma = V    @
     pi symbol = v, theta symbol = J, phi symbol = j     @
     middle dot = :, ypogegrammeni = _                   @
     rough breathing = (, smooth breathing = )           @
     acute accent = ', grave accent = \`, dialytika = ^   @@
`,Np=`flf2a$ 8 6 27 0 10 0 576
Block by Glenn Chappell 4/93 -- straight version of Lean
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

$  $@
$  $@
$  $@
$  $@
$  $@
$  $@
$  $@
$  $@@
   $$@
 _| $@
 _| $@
 _| $@
   $$@
 _| $@
   $$@
     @@
 _|  _| $@
 _|  _| $@
       $$@
   $$    @
   $$    @
   $$    @
         @
         @@
         $$  @
   _|  _|   $@
 _|_|_|_|_| $@
   _|  _|   $@
 _|_|_|_|_| $@
   _|  _|   $@
         $$  @
             @@
     $$  @
   _|   $@
 _|_|_| $@
 _|_|   $@
   _|_| $@
 _|_|_| $@
   _|   $@
     $$  @@
           $$@
 _|_|    _| $@
 _|_|  _|   $@
     _|     $@
   _|  _|_| $@
 _|    _|_| $@
           $$@
             @@
     $$      @
   _|   $    @
 _|  _|     $@
   _|_|  _| $@
 _|    _|   $@
   _|_|  _| $@
           $$@
             @@
   _| $@
 _|   $@
   $$  @
 $$    @
 $$    @
 $$    @
       @
       @@
   _| $@
 _|   $@
 _| $  @
 _| $  @
 _| $  @
 _|   $@
   _| $@
     $$@@
 _|   $@
   _| $@
   _| $@
   _| $@
   _| $@
   _| $@
 _|   $@
   $$  @@
           $$@
 _|  _|  _| $@
   _|_|_|   $@
 _|_|_|_|_| $@
   _|_|_|   $@
 _|  _|  _| $@
           $$@
             @@
       $$    @
     _| $    @
     _|     $@
 _|_|_|_|_| $@
     _|     $@
     _| $    @
       $$    @
             @@
       @
       @
       @
       @
     $$@
   _| $@
 _|   $@
   $$  @@
             @
             @
           $$@
 _|_|_|_|_| $@
           $$@
             @
             @
             @@
     @
     @
     @
     @
   $$@
 _| $@
   $$@
     @@
           $$@
         _| $@
       _|   $@
     _|   $  @
   _|   $    @
 _|   $      @
   $$        @
             @@
     $$  @
   _|   $@
 _|  _| $@
 _|  _| $@
 _|  _| $@
   _|   $@
     $$  @
         @@
     $$@
   _| $@
 _|_| $@
   _| $@
   _| $@
   _| $@
     $$@
       @@
       $$  @
   _|_|   $@
 _|    _| $@
     _|   $@
   _|     $@
 _|_|_|_| $@
         $$@
           @@
       $$  @
 _|_|_|   $@
       _| $@
   _|_|   $@
       _| $@
 _|_|_|   $@
       $$  @
           @@
       $$  @
 _|  _| $  @
 _|  _|   $@
 _|_|_|_| $@
     _|   $@
     _| $  @
       $$  @
           @@
         $$@
 _|_|_|_| $@
 _|       $@
 _|_|_|   $@
       _| $@
 _|_|_|   $@
       $$  @
           @@
         $$@
   _|_|_| $@
 _|       $@
 _|_|_|   $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
           $$@
 _|_|_|_|_| $@
         _| $@
       _|   $@
     _|   $  @
   _|   $    @
     $$      @
             @@
       $$  @
   _|_|   $@
 _|    _| $@
   _|_|   $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
       $$  @
   _|_|   $@
 _|    _| $@
   _|_|_| $@
       _| $@
 _|_|_|   $@
       $$  @
           @@
     @
   $$@
 _| $@
   $$@
   $$@
 _| $@
   $$@
     @@
       @
     $$@
   _| $@
     $$@
     $$@
   _| $@
 _|   $@
   $$  @@
       $$@
     _| $@
   _|   $@
 _|   $  @
   _|   $@
     _| $@
       $$@
         @@
             @
           $$@
 _|_|_|_|_| $@
           $$@
 _|_|_|_|_| $@
           $$@
             @
             @@
   $$    @
 _|   $  @
   _|   $@
     _| $@
   _|   $@
 _|   $  @
   $$    @
         @@
     $$  @
 _|_|   $@
     _| $@
 _|_|   $@
     $$  @
 _| $    @
   $$    @
         @@
               $$  @
     _|_|_|_|_|   $@
   _|          _| $@
 _|    _|_|_|  _| $@
 _|  _|    _|  _| $@
 _|    _|_|_|_|   $@
   _|             $@
     _|_|_|_|_|_| $@@
       $$  @
   _|_|   $@
 _|    _| $@
 _|_|_|_| $@
 _|    _| $@
 _|    _| $@
         $$@
           @@
       $$  @
 _|_|_|   $@
 _|    _| $@
 _|_|_|   $@
 _|    _| $@
 _|_|_|   $@
       $$  @
           @@
         $$@
   _|_|_| $@
 _|       $@
 _|   $    @
 _|       $@
   _|_|_| $@
         $$@
           @@
       $$  @
 _|_|_|   $@
 _|    _| $@
 _|    _| $@
 _|    _| $@
 _|_|_|   $@
       $$  @
           @@
         $$@
 _|_|_|_| $@
 _|       $@
 _|_|_| $  @
 _|       $@
 _|_|_|_| $@
         $$@
           @@
         $$@
 _|_|_|_| $@
 _|       $@
 _|_|_| $  @
 _|     $  @
 _| $      @
   $$      @
           @@
         $$@
   _|_|_| $@
 _|       $@
 _|  _|_| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
         $$@
 _|    _| $@
 _|    _| $@
 _|_|_|_| $@
 _|    _| $@
 _|    _| $@
         $$@
           @@
       $$@
 _|_|_| $@
   _|   $@
   _| $  @
   _|   $@
 _|_|_| $@
       $$@
         @@
         $$@
       _| $@
       _| $@
       _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
         $$@
 _|    _| $@
 _|  _|   $@
 _|_|   $  @
 _|  _|   $@
 _|    _| $@
         $$@
           @@
   $$      @
 _| $      @
 _| $      @
 _| $      @
 _|       $@
 _|_|_|_| $@
         $$@
           @@
           $$@
 _|      _| $@
 _|_|  _|_| $@
 _|  _|  _| $@
 _|      _| $@
 _|      _| $@
           $$@
             @@
           $$@
 _|      _| $@
 _|_|    _| $@
 _|  _|  _| $@
 _|    _|_| $@
 _|      _| $@
           $$@
             @@
       $$  @
   _|_|   $@
 _|    _| $@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
       $$  @
 _|_|_|   $@
 _|    _| $@
 _|_|_|   $@
 _|     $  @
 _| $      @
   $$      @
           @@
       $$    @
   _|_|   $  @
 _|    _| $  @
 _|  _|_| $  @
 _|    _|   $@
   _|_|  _| $@
           $$@
             @@
       $$  @
 _|_|_|   $@
 _|    _| $@
 _|_|_|   $@
 _|    _| $@
 _|    _| $@
         $$@
           @@
         $$@
   _|_|_| $@
 _|       $@
   _|_|   $@
       _| $@
 _|_|_|   $@
       $$  @
           @@
           $$@
 _|_|_|_|_| $@
     _|     $@
     _| $    @
     _| $    @
     _| $    @
       $$    @
             @@
         $$@
 _|    _| $@
 _|    _| $@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
           $$@
 _|      _| $@
 _|      _| $@
 _|      _| $@
   _|  _|   $@
     _|   $  @
       $$    @
             @@
               $$@
 _|          _| $@
 _|          _| $@
 _|    _|    _| $@
   _|  _|  _|   $@
     _|  _|   $  @
           $$    @
                 @@
           $$@
 _|      _| $@
   _|  _|   $@
     _|   $  @
   _|  _|   $@
 _|      _| $@
           $$@
             @@
           $$@
 _|      _| $@
   _|  _|   $@
     _|   $  @
     _| $    @
     _| $    @
       $$    @
             @@
           $$@
 _|_|_|_|_| $@
       _|   $@
     _|   $  @
   _|       $@
 _|_|_|_|_| $@
           $$@
             @@
 _|_| $@
 _|   $@
 _| $  @
 _| $  @
 _| $  @
 _|   $@
 _|_| $@
     $$@@
   $$        @
 _|   $      @
   _|   $    @
     _|   $  @
       _|   $@
         _| $@
           $$@
             @@
 _|_| $@
   _| $@
   _| $@
   _| $@
   _| $@
   _| $@
 _|_| $@
     $$@@
   _|   $@
 _|  _| $@
       $$@
   $$    @
   $$    @
   $$    @
         @
         @@
             @
             @
     $$      @
     $$      @
     $$      @
     $$      @
           $$@
 _|_|_|_|_| $@@
 _|   $@
   _| $@
     $$@
   $$  @
   $$  @
   $$  @
       @
       @@
           @
         $$@
   _|_|_| $@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
   $$      @
 _|     $  @
 _|_|_|   $@
 _|    _| $@
 _|    _| $@
 _|_|_|   $@
       $$  @
           @@
           @
         $$@
   _|_|_| $@
 _|       $@
 _|       $@
   _|_|_| $@
         $$@
           @@
         $$@
       _| $@
   _|_|_| $@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
           @
       $$  @
   _|_|   $@
 _|_|_|_| $@
 _|       $@
   _|_|_| $@
         $$@
           @@
         $$@
     _|_| $@
   _|     $@
 _|_|_|_| $@
   _|     $@
   _| $    @
     $$    @
           @@
           @
         $$@
   _|_|_| $@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
       _| $@
   _|_|   $@@
   $$      @
 _|     $  @
 _|_|_|   $@
 _|    _| $@
 _|    _| $@
 _|    _| $@
         $$@
           @@
   $$@
 _| $@
   $$@
 _| $@
 _| $@
 _| $@
   $$@
     @@
     $$@
   _| $@
     $$@
   _| $@
   _| $@
   _| $@
   _| $@
 _|   $@@
   $$      @
 _|     $  @
 _|  _| $  @
 _|_|   $  @
 _|  _|   $@
 _|    _| $@
         $$@
           @@
   $$@
 _| $@
 _| $@
 _| $@
 _| $@
 _| $@
   $$@
     @@
                 @
             $$  @
 _|_|_|  _|_|   $@
 _|    _|    _| $@
 _|    _|    _| $@
 _|    _|    _| $@
               $$@
                 @@
           @
       $$  @
 _|_|_|   $@
 _|    _| $@
 _|    _| $@
 _|    _| $@
         $$@
           @@
           @
       $$  @
   _|_|   $@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
           @
       $$  @
 _|_|_|   $@
 _|    _| $@
 _|    _| $@
 _|_|_|   $@
 _|     $  @
 _| $      @@
           @
         $$@
   _|_|_| $@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
       _| $@
       _| $@@
           @
         $$@
 _|  _|_| $@
 _|_|     $@
 _|   $    @
 _| $      @
   $$      @
           @@
           @
         $$@
   _|_|_| $@
 _|_|     $@
     _|_| $@
 _|_|_|   $@
       $$  @
           @@
     $$    @
   _|     $@
 _|_|_|_|  @
   _|     $@
   _|     $@
     _|_| $@
         $$@
           @@
           @
         $$@
 _|    _| $@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
             @
           $$@
 _|      _| $@
 _|      _| $@
   _|  _|   $@
     _|   $  @
       $$    @
             @@
                     @
                   $$@
 _|      _|      _| $@
 _|      _|      _| $@
   _|  _|  _|  _|   $@
     _|      _|   $  @
               $$    @
                     @@
           @
         $$@
 _|    _| $@
   _|_|   $@
 _|    _| $@
 _|    _| $@
         $$@
           @@
           @
         $$@
 _|    _| $@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
       _| $@
   _|_|   $@@
           @
         $$@
 _|_|_|_| $@
     _|   $@
   _|     $@
 _|_|_|_| $@
         $$@
           @@
     _| $@
   _|   $@
   _|   $@
 _|   $  @
   _|   $@
   _|   $@
     _| $@
       $$@@
 _| $@
 _| $@
 _| $@
 _| $@
 _| $@
 _| $@
 _| $@
 _| $@@
 _|   $  @
   _|   $@
   _|   $@
     _| $@
   _|   $@
   _|   $@
 _|   $  @
   $$    @@
   _|  _| $@
 _|  _|   $@
       $$  @
     $$    @
     $$    @
     $$    @
           @
           @@
 _|    _| $@
         $$@
   _|_|   $@
 _|    _| $@
 _|_|_|_| $@
 _|    _| $@
         $$@
           @@
 _|    _| $@
         $$@
   _|_|   $@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
 _|    _| $@
         $$@
 _|    _| $@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
 _|    _| $@
         $$@
   _|_|_| $@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
 _|    _| $@
         $$@
   _|_|   $@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
 _|    _| $@
         $$@
 _|    _| $@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
       $$  @
   _|_|   $@
 _|    _| $@
 _|  _|   $@
 _|    _| $@
 _|  _|   $@
 _|     $  @
   $$      @@
160  NO-BREAK SPACE
 $  $@
 $  $@
 $  $@
 $  $@
 $  $@
 $  $@
 $  $@
 $  $@@
161  INVERTED EXCLAMATION MARK
   $$@
 _| $@
   $$@
 _| $@
 _| $@
 _| $@
   $$@
     @@
162  CENT SIGN
       $$  @
     _|   $@
   _|_|_| $@
 _|  _|   $@
 _|  _|   $@
   _|_|_| $@
     _|   $@
       $$  @@
163  POUND SIGN
         $$    @
     _|_|   $  @
   _|    _| $  @
 _|_|_|     $  @
   _|         $@
 _|_|_|    _| $@
 _|_|  _|_|   $@
               @@
164  CURRENCY SIGN
             $$@
 _|        _| $@
   _|_|_|_|   $@
   _|    _| $  @
   _|    _| $  @
   _|_|_|_|   $@
 _|        _| $@
             $$@@
165  YEN SIGN
           $$@
 _|      _| $@
   _|  _|   $@
 _|_|_|_|_| $@
     _|     $@
 _|_|_|_|_| $@
     _|     $@
       $$    @@
166  BROKEN BAR
 _| $@
 _| $@
 _| $@
   $$@
   $$@
 _| $@
 _| $@
 _| $@@
167  SECTION SIGN
   _|_| $@
 _|     $@
   _|   $@
 _|  _| $@
   _|   $@
     _| $@
 _|_|   $@
     $$  @@
168  DIAERESIS
 _|    _| $@
         $$@
 $      $  @
 $      $  @
 $      $  @
 $      $  @
           @
           @@
169  COPYRIGHT SIGN
     _|_|_|_|   $  @
   _|        _|   $@
 _|    _|_|_|  _| $@
 _|  _|        _| $@
 _|  _|        _| $@
 _|    _|_|_|  _| $@
   _|        _|   $@
     _|_|_|_|   $  @@
170  FEMININE ORDINAL INDICATOR
         $$@
   _|_|_| $@
 _|    _| $@
   _|_|_| $@
         $$@
 _|_|_|_| $@
           @
           @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
           $$@
     _|  _| $@
   _|  _|   $@
 _|  _|   $  @
   _|  _|   $@
     _|  _| $@
           $$@
             @@
172  NOT SIGN
             @
             @
           $$@
 _|_|_|_|_| $@
         _| $@
           $$@
             @
             @@
173  SOFT HYPHEN
           @
           @
         $$@
 _|_|_|_| $@
         $$@
     $$    @
           @
           @@
174  REGISTERED SIGN
     _|_|_|_|   $  @
   _|        _|   $@
 _|  _|_|_|    _| $@
 _|  _|    _|  _| $@
 _|  _|_|_|    _| $@
 _|  _|    _|  _| $@
   _|        _|   $@
     _|_|_|_|   $  @@
175  MACRON
 _|_|_|_|_| $@
           $$@
     $$      @
     $$      @
     $$      @
     $$      @
             @
             @@
176  DEGREE SIGN
   _|   $@
 _|  _| $@
   _|   $@
     $$  @
   $$    @
   $$    @
         @
         @@
177  PLUS-MINUS SIGN
       $$    @
     _| $    @
     _|     $@
 _|_|_|_|_| $@
     _|     $@
 _|_|_|_|_| $@
           $$@
             @@
178  SUPERSCRIPT TWO
     $$  @
 _|_|   $@
     _| $@
   _|   $@
 _|_|_| $@
       $$@
         @
         @@
179  SUPERSCRIPT THREE
       $$@
 _|_|_| $@
   _|   $@
     _| $@
 _|_|   $@
     $$  @
         @
         @@
180  ACUTE ACCENT
   _| $@
 _|   $@
   $$  @
 $$    @
 $$    @
 $$    @
       @
       @@
181  MICRO SIGN
           @
         $$@
 _|    _| $@
 _|    _| $@
 _|    _| $@
 _|_|_|_| $@
 _|       $@
 _| $      @@
182  PILCROW SIGN
           $$@
   _|_|_|_| $@
 _|_|_|  _| $@
   _|_|  _| $@
     _|  _| $@
     _|  _| $@
           $$@
             @@
183  MIDDLE DOT
     @
     @
   $$@
 _| $@
   $$@
 $$  @
     @
     @@
184  CEDILLA
       @
       @
       @
       @
       @
     $$@
   _| $@
 _|_| $@@
185  SUPERSCRIPT ONE
     $$@
   _| $@
 _|_| $@
   _| $@
   _| $@
     $$@
       @
       @@
186  MASCULINE ORDINAL INDICATOR
       $$  @
   _|_|   $@
 _|    _| $@
   _|_|   $@
         $$@
 _|_|_|_| $@
           @
           @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
       $$    @
 _|  _|   $  @
   _|  _|   $@
     _|  _| $@
   _|  _|   $@
 _|  _|   $  @
       $$    @
             @@
188  VULGAR FRACTION ONE QUARTER
               $$        @
   _|        _|       $  @
 _|_|      _|  _|  _| $  @
   _|    _|    _|  _|   $@
   _|  _|      _|_|_|_| $@
     _|            _|   $@
                     $$  @
                         @@
189  VULGAR FRACTION ONE HALF
               $$      @
   _|        _|     $  @
 _|_|      _|  _|_|   $@
   _|    _|        _| $@
   _|  _|        _|   $@
     _|        _|_|_| $@
                     $$@
                       @@
190  VULGAR FRACTION THREE QUARTERS
               $$        @
 _|_|_|      _|       $  @
   _|      _|  _|  _| $  @
     _|  _|    _|  _|   $@
 _|_|  _|      _|_|_|_| $@
     _|            _|   $@
                     $$  @
                         @@
191  INVERTED QUESTION MARK
       $$@
     _| $@
       $$@
   _|_| $@
 _|     $@
   _|_| $@
       $$@
         @@
192  LATIN CAPITAL LETTER A WITH GRAVE
   _|   $  @
     _| $  @
   _|_|   $@
 _|    _| $@
 _|_|_|_| $@
 _|    _| $@
         $$@
           @@
193  LATIN CAPITAL LETTER A WITH ACUTE
     _| $  @
   _|   $  @
   _|_|   $@
 _|    _| $@
 _|_|_|_| $@
 _|    _| $@
         $$@
           @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
   _|_|   $@
 _|    _| $@
         $$@
   _|_|   $@
 _|_|_|_| $@
 _|    _| $@
         $$@
           @@
195  LATIN CAPITAL LETTER A WITH TILDE
   _|  _| $@
 _|  _|   $@
       $$  @
   _|_|   $@
 _|_|_|_| $@
 _|    _| $@
         $$@
           @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
 _|    _| $@
         $$@
   _|_|   $@
 _|    _| $@
 _|_|_|_| $@
 _|    _| $@
         $$@
           @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
   _|_|   $@
 _|    _| $@
   _|_|   $@
 _|    _| $@
 _|_|_|_| $@
 _|    _| $@
         $$@
           @@
198  LATIN CAPITAL LETTER AE
               $$@
   _|_|_|_|_|_| $@
 _|    _|       $@
 _|_|_|_|_|_| $  @
 _|    _|       $@
 _|    _|_|_|_| $@
               $$@
                 @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
         $$@
   _|_|_| $@
 _|       $@
 _|   $    @
 _|       $@
   _|_|_| $@
     _|   $@
   _|_| $  @@
200  LATIN CAPITAL LETTER E WITH GRAVE
   _|   $  @
     _|   $@
 _|_|_|_| $@
 _|_|_| $  @
 _|       $@
 _|_|_|_| $@
         $$@
           @@
201  LATIN CAPITAL LETTER E WITH ACUTE
     _| $  @
   _|     $@
 _|_|_|_| $@
 _|_|_| $  @
 _|       $@
 _|_|_|_| $@
         $$@
           @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
   _|_|   $@
 _|    _| $@
 _|_|_|_| $@
 _|_|_| $  @
 _|       $@
 _|_|_|_| $@
         $$@
           @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
 _|    _| $@
         $$@
 _|_|_|_| $@
 _|_|_| $  @
 _|       $@
 _|_|_|_| $@
         $$@
           @@
204  LATIN CAPITAL LETTER I WITH GRAVE
 _|   $  @
   _|   $@
 _|_|_| $@
   _|   $@
   _|   $@
 _|_|_| $@
       $$@
         @@
205  LATIN CAPITAL LETTER I WITH ACUTE
     _| $@
   _|   $@
 _|_|_| $@
   _|   $@
   _|   $@
 _|_|_| $@
       $$@
         @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
   _|   $@
 _|  _| $@
 _|_|_| $@
   _|   $@
   _|   $@
 _|_|_| $@
       $$@
         @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
 _|  _| $@
       $$@
 _|_|_| $@
   _|   $@
   _|   $@
 _|_|_| $@
       $$@
         @@
208  LATIN CAPITAL LETTER ETH
         $$  @
   _|_|_|   $@
   _|    _| $@
 _|_|_|  _| $@
   _|    _| $@
   _|_|_|   $@
         $$  @
             @@
209  LATIN CAPITAL LETTER N WITH TILDE
   _|  _| $@
 _|  _|   $@
 _|    _| $@
 _|_|  _| $@
 _|  _|_| $@
 _|    _| $@
         $$@
           @@
210  LATIN CAPITAL LETTER O WITH GRAVE
   _|   $  @
     _| $  @
   _|_|   $@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
211  LATIN CAPITAL LETTER O WITH ACUTE
     _| $  @
   _|   $  @
   _|_|   $@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
   _|_|   $@
 _|    _| $@
   _|_|   $@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
213  LATIN CAPITAL LETTER O WITH TILDE
   _|  _| $@
 _|  _|   $@
   _|_|   $@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
 _|    _| $@
         $$@
   _|_|   $@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
215  MULTIPLICATION SIGN
         @
       $$@
 _|  _| $@
   _|   $@
 _|  _| $@
       $$@
         @
         @@
216  LATIN CAPITAL LETTER O WITH STROKE
           $$@
   _|_|_|_| $@
 _|    _|_| $@
 _|  _|  _| $@
 _|_|    _| $@
 _|_|_|_|   $@
         $$  @
             @@
217  LATIN CAPITAL LETTER U WITH GRAVE
   _|   $  @
     _| $  @
         $$@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
218  LATIN CAPITAL LETTER U WITH ACUTE
     _| $  @
   _|   $  @
         $$@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
   _|_|   $@
 _|    _| $@
         $$@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
 _|    _| $@
         $$@
 _|    _| $@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
       _| $  @
     _|     $@
 _|      _| $@
   _|  _|   $@
     _|   $  @
     _| $    @
       $$    @
             @@
222  LATIN CAPITAL LETTER THORN
   $$      @
 _|     $  @
 _|_|_|   $@
 _|    _| $@
 _|_|_|   $@
 _|     $  @
   $$      @
           @@
223  LATIN SMALL LETTER SHARP S
       $$  @
   _|_|   $@
 _|    _| $@
 _|  _|   $@
 _|    _| $@
 _|  _|   $@
 _|     $  @
   $$      @@
224  LATIN SMALL LETTER A WITH GRAVE
   _|   $  @
     _| $  @
         $$@
   _|_|_| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
225  LATIN SMALL LETTER A WITH ACUTE
       _| $@
     _|   $@
         $$@
   _|_|_| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
     _|   $@
   _|  _| $@
         $$@
   _|_|_| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
227  LATIN SMALL LETTER A WITH TILDE
   _|  _| $@
 _|  _|   $@
         $$@
   _|_|_| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
228  LATIN SMALL LETTER A WITH DIAERESIS
 _|    _| $@
         $$@
   _|_|_| $@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
229  LATIN SMALL LETTER A WITH RING ABOVE
     _|   $@
   _|  _| $@
     _|   $@
   _|_|_| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
230  LATIN SMALL LETTER AE
                   @
               $$  @
   _|_|_|  _|_|   $@
 _|    _|_|_|_|_| $@
 _|    _|_|       $@
   _|_|_|  _|_|_| $@
                 $$@
                   @@
231  LATIN SMALL LETTER C WITH CEDILLA
           @
         $$@
   _|_|_| $@
 _|       $@
 _|       $@
   _|_|_| $@
     _|   $@
   _|_| $  @@
232  LATIN SMALL LETTER E WITH GRAVE
   _|     $@
     _| $  @
   _|_|   $@
 _|_|_|_| $@
 _|       $@
   _|_|_| $@
         $$@
           @@
233  LATIN SMALL LETTER E WITH ACUTE
       _| $@
     _|   $@
   _|_|   $@
 _|_|_|_| $@
 _|       $@
   _|_|_| $@
         $$@
           @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
   _|_|   $@
 _|    _| $@
   _|_|   $@
 _|_|_|_| $@
 _|       $@
   _|_|_| $@
         $$@
           @@
235  LATIN SMALL LETTER E WITH DIAERESIS
 _|    _| $@
         $$@
   _|_|   $@
 _|_|_|_| $@
 _|       $@
   _|_|_| $@
         $$@
           @@
236  LATIN SMALL LETTER I WITH GRAVE
 _|   $@
   _| $@
     $$@
   _| $@
   _| $@
   _| $@
     $$@
       @@
237  LATIN SMALL LETTER I WITH ACUTE
   _| $@
 _|   $@
   $$  @
 _| $  @
 _| $  @
 _| $  @
   $$  @
       @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
   _|   $@
 _|  _| $@
       $$@
   _| $  @
   _| $  @
   _| $  @
     $$  @
         @@
239  LATIN SMALL LETTER I WITH DIAERESIS
 _|  _| $@
       $$@
   _| $  @
   _| $  @
   _| $  @
   _| $  @
     $$  @
         @@
240  LATIN SMALL LETTER ETH
 _|  _| $  @
   _|   $  @
 _|  _|   $@
   _|_|_| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
241  LATIN SMALL LETTER N WITH TILDE
   _|  _| $@
 _|  _|   $@
       $$  @
 _|_|_|   $@
 _|    _| $@
 _|    _| $@
         $$@
           @@
242  LATIN SMALL LETTER O WITH GRAVE
   _|   $  @
     _| $  @
       $$  @
   _|_|   $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
243  LATIN SMALL LETTER O WITH ACUTE
     _| $  @
   _|   $  @
       $$  @
   _|_|   $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
   _|_|   $@
 _|    _| $@
         $$@
   _|_|   $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
245  LATIN SMALL LETTER O WITH TILDE
   _|_|_| $@
 _|  _|   $@
       $$  @
   _|_|   $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
246  LATIN SMALL LETTER O WITH DIAERESIS
 _|    _| $@
         $$@
   _|_|   $@
 _|    _| $@
 _|    _| $@
   _|_|   $@
       $$  @
           @@
247  DIVISION SIGN
       $$    @
     _| $    @
           $$@
 _|_|_|_|_| $@
           $$@
     _| $    @
       $$    @
             @@
248  LATIN SMALL LETTER O WITH STROKE
           @
         $$@
   _|_|_| $@
 _|  _|_| $@
 _|_|  _| $@
 _|_|_|   $@
       $$  @
           @@
249  LATIN SMALL LETTER U WITH GRAVE
 _|   $    @
   _| $    @
         $$@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
250  LATIN SMALL LETTER U WITH ACUTE
       _| $@
     _|   $@
         $$@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
   _|_|   $@
 _|    _| $@
         $$@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
252  LATIN SMALL LETTER U WITH DIAERESIS
 _|    _| $@
         $$@
 _|    _| $@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
         $$@
           @@
253  LATIN SMALL LETTER Y WITH ACUTE
     _| $  @
   _|   $  @
         $$@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
       _| $@
   _|_|   $@@
254  LATIN SMALL LETTER THORN
   $$      @
 _|     $  @
 _|_|_|   $@
 _|    _| $@
 _|    _| $@
 _|_|_|   $@
 _|     $  @
 _| $      @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
 _|    _| $@
         $$@
 _|    _| $@
 _|    _| $@
 _|    _| $@
   _|_|_| $@
       _| $@
   _|_|   $@@
`,Cp=`flf2a 4 3 8 15 11 0 10127 242
Bubble by Glenn Chappell 4/93
Includes characters 128-255
Enhanced for Latin-2,3,4 by John Cowan <cowan@ccil.org>
Latin character sets supported only if your screen font does
figlet release 2.2 -- November 1996
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.
 @
 @
 @
 @@
   _  @
  / \\ @
 ( ! )@
  \\_/ @@
   _  @
  / \\ @
 ( " )@
  \\_/ @@
   _  @
  / \\ @
 ( # )@
  \\_/ @@
   _  @
  / \\ @
 ( $ )@
  \\_/ @@
   _  @
  / \\ @
 ( % )@
  \\_/ @@
   _  @
  / \\ @
 ( & )@
  \\_/ @@
   _  @
  / \\ @
 ( ' )@
  \\_/ @@
   _  @
  / \\ @
 ( ( )@
  \\_/ @@
   _  @
  / \\ @
 ( ) )@
  \\_/ @@
   _  @
  / \\ @
 ( * )@
  \\_/ @@
   _  @
  / \\ @
 ( + )@
  \\_/ @@
   _  @
  / \\ @
 ( , )@
  \\_/ @@
   _  @
  / \\ @
 ( - )@
  \\_/ @@
   _  @
  / \\ @
 ( . )@
  \\_/ @@
   _  @
  / \\ @
 ( / )@
  \\_/ @@
   _  @
  / \\ @
 ( 0 )@
  \\_/ @@
   _  @
  / \\ @
 ( 1 )@
  \\_/ @@
   _  @
  / \\ @
 ( 2 )@
  \\_/ @@
   _  @
  / \\ @
 ( 3 )@
  \\_/ @@
   _  @
  / \\ @
 ( 4 )@
  \\_/ @@
   _  @
  / \\ @
 ( 5 )@
  \\_/ @@
   _  @
  / \\ @
 ( 6 )@
  \\_/ @@
   _  @
  / \\ @
 ( 7 )@
  \\_/ @@
   _  @
  / \\ @
 ( 8 )@
  \\_/ @@
   _  @
  / \\ @
 ( 9 )@
  \\_/ @@
   _  @
  / \\ @
 ( : )@
  \\_/ @@
   _  @
  / \\ @
 ( ; )@
  \\_/ @@
   _  @
  / \\ @
 ( < )@
  \\_/ @@
   _  @
  / \\ @
 ( = )@
  \\_/ @@
   _  @
  / \\ @
 ( > )@
  \\_/ @@
   _  @
  / \\ @
 ( ? )@
  \\_/ @@
   _  @
  / \\ @
 ( @ )@
  \\_/ @@
   _  @
  / \\ @
 ( A )@
  \\_/ @@
   _  @
  / \\ @
 ( B )@
  \\_/ @@
   _  @
  / \\ @
 ( C )@
  \\_/ @@
   _  @
  / \\ @
 ( D )@
  \\_/ @@
   _  @
  / \\ @
 ( E )@
  \\_/ @@
   _  @
  / \\ @
 ( F )@
  \\_/ @@
   _  @
  / \\ @
 ( G )@
  \\_/ @@
   _  @
  / \\ @
 ( H )@
  \\_/ @@
   _  @
  / \\ @
 ( I )@
  \\_/ @@
   _  @
  / \\ @
 ( J )@
  \\_/ @@
   _  @
  / \\ @
 ( K )@
  \\_/ @@
   _  @
  / \\ @
 ( L )@
  \\_/ @@
   _  @
  / \\ @
 ( M )@
  \\_/ @@
   _  @
  / \\ @
 ( N )@
  \\_/ @@
   _  @
  / \\ @
 ( O )@
  \\_/ @@
   _  @
  / \\ @
 ( P )@
  \\_/ @@
   _  @
  / \\ @
 ( Q )@
  \\_/ @@
   _  @
  / \\ @
 ( R )@
  \\_/ @@
   _  @
  / \\ @
 ( S )@
  \\_/ @@
   _  @
  / \\ @
 ( T )@
  \\_/ @@
   _  @
  / \\ @
 ( U )@
  \\_/ @@
   _  @
  / \\ @
 ( V )@
  \\_/ @@
   _  @
  / \\ @
 ( W )@
  \\_/ @@
   _  @
  / \\ @
 ( X )@
  \\_/ @@
   _  @
  / \\ @
 ( Y )@
  \\_/ @@
   _  @
  / \\ @
 ( Z )@
  \\_/ @@
   _  @
  / \\ @
 ( [ )@
  \\_/ @@
   _  @
  / \\ @
 ( \\ )@
  \\_/ @@
   _  @
  / \\ @
 ( ] )@
  \\_/ @@
   _  @
  / \\ @
 ( ^ )@
  \\_/ @@
   _  @
  / \\ @
 ( _ )@
  \\_/ @@
   _  @
  / \\ @
 ( \` )@
  \\_/ @@
   _  @
  / \\ @
 ( a )@
  \\_/ @@
   _  @
  / \\ @
 ( b )@
  \\_/ @@
   _  @
  / \\ @
 ( c )@
  \\_/ @@
   _  @
  / \\ @
 ( d )@
  \\_/ @@
   _  @
  / \\ @
 ( e )@
  \\_/ @@
   _  @
  / \\ @
 ( f )@
  \\_/ @@
   _  @
  / \\ @
 ( g )@
  \\_/ @@
   _  @
  / \\ @
 ( h )@
  \\_/ @@
   _  @
  / \\ @
 ( i )@
  \\_/ @@
   _  @
  / \\ @
 ( j )@
  \\_/ @@
   _  @
  / \\ @
 ( k )@
  \\_/ @@
   _  @
  / \\ @
 ( l )@
  \\_/ @@
   _  @
  / \\ @
 ( m )@
  \\_/ @@
   _  @
  / \\ @
 ( n )@
  \\_/ @@
   _  @
  / \\ @
 ( o )@
  \\_/ @@
   _  @
  / \\ @
 ( p )@
  \\_/ @@
   _  @
  / \\ @
 ( q )@
  \\_/ @@
   _  @
  / \\ @
 ( r )@
  \\_/ @@
   _  @
  / \\ @
 ( s )@
  \\_/ @@
   _  @
  / \\ @
 ( t )@
  \\_/ @@
   _  @
  / \\ @
 ( u )@
  \\_/ @@
   _  @
  / \\ @
 ( v )@
  \\_/ @@
   _  @
  / \\ @
 ( w )@
  \\_/ @@
   _  @
  / \\ @
 ( x )@
  \\_/ @@
   _  @
  / \\ @
 ( y )@
  \\_/ @@
   _  @
  / \\ @
 ( z )@
  \\_/ @@
   _  @
  / \\ @
 ( { )@
  \\_/ @@
   _  @
  / \\ @
 ( | )@
  \\_/ @@
   _  @
  / \\ @
 ( } )@
  \\_/ @@
   _  @
  / \\ @
 ( ~ )@
  \\_/ @@
   _  @
  / \\ @
 ( � )@
  \\_/ @@
   _  @
  / \\ @
 ( � )@
  \\_/ @@
   _  @
  / \\ @
 ( � )@
  \\_/ @@
   _  @
  / \\ @
 ( � )@
  \\_/ @@
   _  @
  / \\ @
 ( � )@
  \\_/ @@
   _  @
  / \\ @
 ( � )@
  \\_/ @@
   _  @
  / \\ @
 ( � )@
  \\_/ @@
128
   _  @
  / \\ @
 ( � )@
  \\_/ @@
129
   _  @
  / \\ @
 ( � )@
  \\_/ @@
130
   _  @
  / \\ @
 ( � )@
  \\_/ @@
131
   _  @
  / \\ @
 ( � )@
  \\_/ @@
132
   _  @
  / \\ @
 ( � )@
  \\_/ @@
133
   _  @
  / \\ @
 ( � )@
  \\_/ @@
134
   _  @
  / \\ @
 ( � )@
  \\_/ @@
135
   _  @
  / \\ @
 ( � )@
  \\_/ @@
136
   _  @
  / \\ @
 ( � )@
  \\_/ @@
137
   _  @
  / \\ @
 ( � )@
  \\_/ @@
138
   _  @
  / \\ @
 ( � )@
  \\_/ @@
139
   _  @
  / \\ @
 ( � )@
  \\_/ @@
140
   _  @
  / \\ @
 ( � )@
  \\_/ @@
141
   _  @
  / \\ @
 ( � )@
  \\_/ @@
142
   _  @
  / \\ @
 ( � )@
  \\_/ @@
143
   _  @
  / \\ @
 ( � )@
  \\_/ @@
144
   _  @
  / \\ @
 ( � )@
  \\_/ @@
145
   _  @
  / \\ @
 ( � )@
  \\_/ @@
146
   _  @
  / \\ @
 ( � )@
  \\_/ @@
147
   _  @
  / \\ @
 ( � )@
  \\_/ @@
148
   _  @
  / \\ @
 ( � )@
  \\_/ @@
149
   _  @
  / \\ @
 ( � )@
  \\_/ @@
150
   _  @
  / \\ @
 ( � )@
  \\_/ @@
151
   _  @
  / \\ @
 ( � )@
  \\_/ @@
152
   _  @
  / \\ @
 ( � )@
  \\_/ @@
153
   _  @
  / \\ @
 ( � )@
  \\_/ @@
154
   _  @
  / \\ @
 ( � )@
  \\_/ @@
155
   _  @
  / \\ @
 ( � )@
  \\_/ @@
156
   _  @
  / \\ @
 ( � )@
  \\_/ @@
157
   _  @
  / \\ @
 ( � )@
  \\_/ @@
158
   _  @
  / \\ @
 ( � )@
  \\_/ @@
159
   _  @
  / \\ @
 ( � )@
  \\_/ @@
160  NO-BREAK SPACE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
161  INVERTED EXCLAMATION MARK
   _  @
  / \\ @
 ( � )@
  \\_/ @@
162  CENT SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
163  POUND SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
164  CURRENCY SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
165  YEN SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
166  BROKEN BAR
   _  @
  / \\ @
 ( � )@
  \\_/ @@
167  SECTION SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
168  DIAERESIS
   _  @
  / \\ @
 ( � )@
  \\_/ @@
169  COPYRIGHT SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
170  FEMININE ORDINAL INDICATOR
   _  @
  / \\ @
 ( � )@
  \\_/ @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
   _  @
  / \\ @
 ( � )@
  \\_/ @@
172  NOT SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
173  SOFT HYPHEN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
174  REGISTERED SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
175  MACRON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
176  DEGREE SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
177  PLUS-MINUS SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
178  SUPERSCRIPT TWO
   _  @
  / \\ @
 ( � )@
  \\_/ @@
179  SUPERSCRIPT THREE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
180  ACUTE ACCENT
   _  @
  / \\ @
 ( � )@
  \\_/ @@
181  MICRO SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
182  PILCROW SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
183  MIDDLE DOT
   _  @
  / \\ @
 ( � )@
  \\_/ @@
184  CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
185  SUPERSCRIPT ONE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
186  MASCULINE ORDINAL INDICATOR
   _  @
  / \\ @
 ( � )@
  \\_/ @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
   _  @
  / \\ @
 ( � )@
  \\_/ @@
188  VULGAR FRACTION ONE QUARTER
   _  @
  / \\ @
 ( � )@
  \\_/ @@
189  VULGAR FRACTION ONE HALF
   _  @
  / \\ @
 ( � )@
  \\_/ @@
190  VULGAR FRACTION THREE QUARTERS
   _  @
  / \\ @
 ( � )@
  \\_/ @@
191  INVERTED QUESTION MARK
   _  @
  / \\ @
 ( � )@
  \\_/ @@
192  LATIN CAPITAL LETTER A WITH GRAVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
193  LATIN CAPITAL LETTER A WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
195  LATIN CAPITAL LETTER A WITH TILDE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
   _  @
  / \\ @
 ( � )@
  \\_/ @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
198  LATIN CAPITAL LETTER AE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
200  LATIN CAPITAL LETTER E WITH GRAVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
201  LATIN CAPITAL LETTER E WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
   _  @
  / \\ @
 ( � )@
  \\_/ @@
204  LATIN CAPITAL LETTER I WITH GRAVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
205  LATIN CAPITAL LETTER I WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
   _  @
  / \\ @
 ( � )@
  \\_/ @@
208  LATIN CAPITAL LETTER ETH
   _  @
  / \\ @
 ( � )@
  \\_/ @@
209  LATIN CAPITAL LETTER N WITH TILDE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
210  LATIN CAPITAL LETTER O WITH GRAVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
211  LATIN CAPITAL LETTER O WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
213  LATIN CAPITAL LETTER O WITH TILDE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
   _  @
  / \\ @
 ( � )@
  \\_/ @@
215  MULTIPLICATION SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
216  LATIN CAPITAL LETTER O WITH STROKE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
217  LATIN CAPITAL LETTER U WITH GRAVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
218  LATIN CAPITAL LETTER U WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
   _  @
  / \\ @
 ( � )@
  \\_/ @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
222  LATIN CAPITAL LETTER THORN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
223  LATIN SMALL LETTER SHARP S
   _  @
  / \\ @
 ( � )@
  \\_/ @@
224  LATIN SMALL LETTER A WITH GRAVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
225  LATIN SMALL LETTER A WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
227  LATIN SMALL LETTER A WITH TILDE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
228  LATIN SMALL LETTER A WITH DIAERESIS
   _  @
  / \\ @
 ( � )@
  \\_/ @@
229  LATIN SMALL LETTER A WITH RING ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
230  LATIN SMALL LETTER AE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
231  LATIN SMALL LETTER C WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
232  LATIN SMALL LETTER E WITH GRAVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
233  LATIN SMALL LETTER E WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
235  LATIN SMALL LETTER E WITH DIAERESIS
   _  @
  / \\ @
 ( � )@
  \\_/ @@
236  LATIN SMALL LETTER I WITH GRAVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
237  LATIN SMALL LETTER I WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
239  LATIN SMALL LETTER I WITH DIAERESIS
   _  @
  / \\ @
 ( � )@
  \\_/ @@
240  LATIN SMALL LETTER ETH
   _  @
  / \\ @
 ( � )@
  \\_/ @@
241  LATIN SMALL LETTER N WITH TILDE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
242  LATIN SMALL LETTER O WITH GRAVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
243  LATIN SMALL LETTER O WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
245  LATIN SMALL LETTER O WITH TILDE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
246  LATIN SMALL LETTER O WITH DIAERESIS
   _  @
  / \\ @
 ( � )@
  \\_/ @@
247  DIVISION SIGN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
248  LATIN SMALL LETTER O WITH STROKE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
249  LATIN SMALL LETTER U WITH GRAVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
250  LATIN SMALL LETTER U WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
252  LATIN SMALL LETTER U WITH DIAERESIS
   _  @
  / \\ @
 ( � )@
  \\_/ @@
253  LATIN SMALL LETTER Y WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
254  LATIN SMALL LETTER THORN
   _  @
  / \\ @
 ( � )@
  \\_/ @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0100  LATIN CAPITAL LETTER A WITH MACRON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0101  LATIN SMALL LETTER A WITH MACRON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0102  LATIN CAPITAL LETTER A WITH BREVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0103  LATIN SMALL LETTER A WITH BREVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0104  LATIN CAPITAL LETTER A WITH OGONEK
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0105  LATIN SMALL LETTER A WITH OGONEK
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0106  LATIN CAPITAL LETTER C WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0107  LATIN SMALL LETTER C WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0108  LATIN CAPITAL LETTER C WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0109  LATIN SMALL LETTER C WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x010A  LATIN CAPITAL LETTER C WITH DOT ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x010B  LATIN SMALL LETTER C WITH DOT ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x010C  LATIN CAPITAL LETTER C WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x010D  LATIN SMALL LETTER C WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x010E  LATIN CAPITAL LETTER D WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x010F  LATIN SMALL LETTER D WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0110  LATIN CAPITAL LETTER D WITH STROKE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0111  LATIN SMALL LETTER D WITH STROKE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0112  LATIN CAPITAL LETTER E WITH MACRON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0113  LATIN SMALL LETTER E WITH MACRON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0116  LATIN CAPITAL LETTER E WITH DOT ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0117  LATIN SMALL LETTER E WITH DOT ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0118  LATIN CAPITAL LETTER E WITH OGONEK
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0119  LATIN SMALL LETTER E WITH OGONEK
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x011A  LATIN CAPITAL LETTER E WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x011B  LATIN SMALL LETTER E WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x011C  LATIN CAPITAL LETTER G WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x011D  LATIN SMALL LETTER G WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x011E  LATIN CAPITAL LETTER G WITH BREVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x011F  LATIN SMALL LETTER G WITH BREVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0120  LATIN CAPITAL LETTER G WITH DOT ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0121  LATIN SMALL LETTER G WITH DOT ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0122  LATIN CAPITAL LETTER G WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0123  LATIN SMALL LETTER G WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0124  LATIN CAPITAL LETTER H WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0125  LATIN SMALL LETTER H WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0126  LATIN CAPITAL LETTER H WITH STROKE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0127  LATIN SMALL LETTER H WITH STROKE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0128  LATIN CAPITAL LETTER I WITH TILDE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0129  LATIN SMALL LETTER I WITH TILDE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x012A  LATIN CAPITAL LETTER I WITH MACRON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x012B  LATIN SMALL LETTER I WITH MACRON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x012E  LATIN CAPITAL LETTER I WITH OGONEK
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x012F  LATIN SMALL LETTER I WITH OGONEK
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0130  LATIN CAPITAL LETTER I WITH DOT ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0131  LATIN SMALL LETTER DOTLESS I
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0134  LATIN CAPITAL LETTER J WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0135  LATIN SMALL LETTER J WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0136  LATIN CAPITAL LETTER K WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0137  LATIN SMALL LETTER K WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0138  LATIN SMALL LETTER KRA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0139  LATIN CAPITAL LETTER L WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x013A  LATIN SMALL LETTER L WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x013B  LATIN CAPITAL LETTER L WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x013C  LATIN SMALL LETTER L WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x013D  LATIN CAPITAL LETTER L WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x013E  LATIN SMALL LETTER L WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0141  LATIN CAPITAL LETTER L WITH STROKE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0142  LATIN SMALL LETTER L WITH STROKE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0143  LATIN CAPITAL LETTER N WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0144  LATIN SMALL LETTER N WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0145  LATIN CAPITAL LETTER N WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0146  LATIN SMALL LETTER N WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0147  LATIN CAPITAL LETTER N WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0148  LATIN SMALL LETTER N WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x014A  LATIN CAPITAL LETTER ENG
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x014B  LATIN SMALL LETTER ENG
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x014C  LATIN CAPITAL LETTER O WITH MACRON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x014D  LATIN SMALL LETTER O WITH MACRON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0150  LATIN CAPITAL LETTER O WITH DOUBLE ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0151  LATIN SMALL LETTER O WITH DOUBLE ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0154  LATIN CAPITAL LETTER R WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0155  LATIN SMALL LETTER R WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0156  LATIN CAPITAL LETTER R WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0157  LATIN SMALL LETTER R WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0158  LATIN CAPITAL LETTER R WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0159  LATIN SMALL LETTER R WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x015A  LATIN CAPITAL LETTER S WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x015B  LATIN SMALL LETTER S WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x015C  LATIN CAPITAL LETTER S WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x015D  LATIN SMALL LETTER S WITH CIRCUMFLEX
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x015E  LATIN CAPITAL LETTER S WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x015F  LATIN SMALL LETTER S WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0160  LATIN CAPITAL LETTER S WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0161  LATIN SMALL LETTER S WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0162  LATIN CAPITAL LETTER T WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0163  LATIN SMALL LETTER T WITH CEDILLA
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0164  LATIN CAPITAL LETTER T WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0165  LATIN SMALL LETTER T WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0166  LATIN CAPITAL LETTER T WITH STROKE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0167  LATIN SMALL LETTER T WITH STROKE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0168  LATIN CAPITAL LETTER U WITH TILDE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0169  LATIN SMALL LETTER U WITH TILDE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x016A  LATIN CAPITAL LETTER U WITH MACRON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x016B  LATIN SMALL LETTER U WITH MACRON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x016C  LATIN CAPITAL LETTER U WITH BREVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x016D  LATIN SMALL LETTER U WITH BREVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x016E  LATIN CAPITAL LETTER U WITH RING ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x016F  LATIN SMALL LETTER U WITH RING ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0170  LATIN CAPITAL LETTER U WITH DOUBLE ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0171  LATIN SMALL LETTER U WITH DOUBLE ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0172  LATIN CAPITAL LETTER U WITH OGONEK
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0173  LATIN SMALL LETTER U WITH OGONEK
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x0179  LATIN CAPITAL LETTER Z WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x017A  LATIN SMALL LETTER Z WITH ACUTE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x017B  LATIN CAPITAL LETTER Z WITH DOT ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x017C  LATIN SMALL LETTER Z WITH DOT ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x017D  LATIN CAPITAL LETTER Z WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x017E  LATIN SMALL LETTER Z WITH CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x02C7  CARON
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x02D8  BREVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x02D9  DOT ABOVE
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x02DB  OGONEK
   _  @
  / \\ @
 ( � )@
  \\_/ @@
0x02DD  DOUBLE ACUTE ACCENT
   _  @
  / \\ @
 ( � )@
  \\_/ @@
`,xp=`flf2a$ 3 3 7 0 7 0 64 0
Font Author: ?

More info on font here:

https://web.archive.org/web/20120819044459/http://www.roysac.com/thedrawfonts-tdf.asp

FIGFont created with: http://patorjk.com/figfont-editor
$$@
$$@
$$@@
┬@
│@
o@@
@
@
@@
─┼─┼─@
─┼─┼─@
     @@
┌┼┐@
└┼┐@
└┼┘@@
O┬@
┌┘@
┴O@@
 ┬ @
┌┼─@
└┘ @@
@
@
@@
@
@
@@
@
@
@@
\\│/@
─ ─@
/│\\@@
@
@
@@
 @
 @
┘@@
   @
───@
   @@
 @
 @
o@@
@
@
@@
@
@
@@
@
@
@@
@
@
@@
@
@
@@
@
@
@@
@
@
@@
@
@
@@
@
@
@@
@
@
@@
@
@
@@
@
@
@@
@
@
@@
@
@
@@
@
@
@@
@
@
@@
┌─┐@
 ┌┘@
 o @@
┌─┐@
│└┘@
└──@@
╔═╗@
╠═╣@
╩ ╩@@
╔╗ @
╠╩╗@
╚═╝@@
╔═╗@
║  @
╚═╝@@
╔╦╗@
 ║║@
═╩╝@@
╔═╗@
║╣ @
╚═╝@@
╔═╗@
╠╣ @
╚  @@
╔═╗@
║ ╦@
╚═╝@@
╦ ╦@
╠═╣@
╩ ╩@@
╦@
║@
╩@@
 ╦@
 ║@
╚╝@@
╦╔═@
╠╩╗@
╩ ╩@@
╦  @
║  @
╩═╝@@
╔╦╗@
║║║@
╩ ╩@@
╔╗╔@
║║║@
╝╚╝@@
╔═╗@
║ ║@
╚═╝@@
╔═╗@
╠═╝@
╩  @@
╔═╗ @
║═╬╗@
╚═╝╚@@
╦═╗@
╠╦╝@
╩╚═@@
╔═╗@
╚═╗@
╚═╝@@
╔╦╗@
 ║ @
 ╩ @@
╦ ╦@
║ ║@
╚═╝@@
╦  ╦@
╚╗╔╝@
 ╚╝ @@
╦ ╦@
║║║@
╚╩╝@@
═╗ ╦@
╔╩╦╝@
╩ ╚═@@
╦ ╦@
╚╦╝@
 ╩ @@
╔═╗@
╔═╝@
╚═╝@@
┌─@
│ @
└─@@
@
@
@@
─┐@
 │@
─┘@@
/\\@
  @
  @@
    @
    @
────@@
@
@
@@
┌─┐@
├─┤@
┴ ┴@@
┌┐ @
├┴┐@
└─┘@@
┌─┐@
│  @
└─┘@@
┌┬┐@
 ││@
─┴┘@@
┌─┐@
├┤ @
└─┘@@
┌─┐@
├┤ @
└  @@
┌─┐@
│ ┬@
└─┘@@
┬ ┬@
├─┤@
┴ ┴@@
┬@
│@
┴@@
 ┬@
 │@
└┘@@
┬┌─@
├┴┐@
┴ ┴@@
┬  @
│  @
┴─┘@@
┌┬┐@
│││@
┴ ┴@@
┌┐┌@
│││@
┘└┘@@
┌─┐@
│ │@
└─┘@@
┌─┐@
├─┘@
┴  @@
┌─┐ @
│─┼┐@
└─┘└@@
┬─┐@
├┬┘@
┴└─@@
┌─┐@
└─┐@
└─┘@@
┌┬┐@
 │ @
 ┴ @@
┬ ┬@
│ │@
└─┘@@
┬  ┬@
└┐┌┘@
 └┘ @@
┬ ┬@
│││@
└┴┘@@
─┐ ┬@
┌┴┬┘@
┴ └─@@
┬ ┬@
└┬┘@
 ┴ @@
┌─┐@
┌─┘@
└─┘@@
@
@
@@
@
@
@@
@
@
@@
@
@
@@
@
@
@@
@
@
@@
@
@
@@
@
@
@@
@
@
@@
@
@
@@
@
@
@@`,bp=`flf2a$ 5 4 20 15 6
Square by Chris Gill, 30-JUN-94 -- based on .sig of Jeb Hagan.

---

Font modified June 17, 2007 by patorjk 
This was to widen the space character.
$  $@
$  $@
$  $@
$  $@
$  $@@
 __ @
|  |@
|__|@
|__|@
    @@
 ____ @
| |  |@
 |_|_|@
      @
      @@
   _____   @
 _|  |  |_ @
|_       _|@
|_       _|@
  |__|__|  @@
 __,-,__ @
|  ' '__|@
|__     |@
|_______|@
   |_|   @@
 __ ___ @
|__|   |@
|    __|@
|___|__|@
        @@
 __,-,__ @
|  ' '__|@
|     __|@
|_______|@
   |_|   @@
 __ @
|  |@
 |_|@
    @
    @@
  ___ @
,'  _|@
|  |  @
|  |_ @
\`.___|@@
 ___  @
|_  \`.@
  |  |@
 _|  |@
|___,'@@
 __ _ __ @
|  | |  |@
 >     < @
|__|_|__|@
         @@
   __   @
 _|  |_ @
|_    _|@
  |__|  @
        @@
    @
    @
 __ @
|  |@
 |_|@@
        @
 ______ @
|______|@
        @
        @@
    @
    @
 __ @
|__|@
    @@
    ___@
   /  /@
 ,' ,' @
/__/   @
       @@
 ______ @
|      |@
|  --  |@
|______|@
        @@
 ____   @
|_   |  @
 _|  |_ @
|______|@
        @@
 ______ @
|__    |@
|    __|@
|______|@
        @@
 ______ @
|__    |@
|__    |@
|______|@
        @@
 _____  @
|  |  | @
|__    |@
   |__| @
        @@
 ______ @
|    __|@
|__    |@
|______|@
        @@
 ______ @
|    __|@
|  __  |@
|______|@
        @@
 ______ @
|      |@
|_     |@
  |____|@
        @@
 ______ @
|  __  |@
|  __  |@
|______|@
        @@
 ______ @
|  __  |@
|__    |@
|______|@
        @@
 __ @
|__|@
 __ @
|__|@
    @@
 __ @
|__|@
 __ @
|  |@
 |_|@@
   __ @
 ,' _|@
/  /  @
\\  \\_ @
 \`.__|@@
        @
 ______ @
|______|@
|______|@
        @@
 __   @
|_ \`. @
  \\  \\@
 _/  /@
|__,' @@
   _____ @
  |__   |@
  ',  ,-'@
   |--|  @
   '--'  @@
 _________ @
|   ___   |@
|  |  _   |@
|  |______|@
|_________|@@
 _______ @
|   _   |@
|       |@
|___|___|@
         @@
 ______ @
|   __ \\@
|   __ <@
|______/@
        @@
 ______ @
|      |@
|   ---|@
|______|@
        @@
 _____  @
|     \\ @
|  --  |@
|_____/ @
        @@
 _______ @
|    ___|@
|    ___|@
|_______|@
         @@
 _______ @
|    ___|@
|    ___|@
|___|    @
         @@
 _______ @
|     __|@
|    |  |@
|_______|@
         @@
 _______ @
|   |   |@
|       |@
|___|___|@
         @@
 _______ @
|_     _|@
 _|   |_ @
|_______|@
         @@
   _____ @
 _|     |@
|       |@
|_______|@
         @@
 __  __ @
|  |/  |@
|     < @
|__|\\__|@
        @@
 _____   @
|     |_ @
|       |@
|_______|@
         @@
 _______ @
|   |   |@
|       |@
|__|_|__|@
         @@
 _______ @
|    |  |@
|       |@
|__|____|@
         @@
 _______ @
|       |@
|   -   |@
|_______|@
         @@
 ______ @
|   __ \\@
|    __/@
|___|   @
        @@
 _______ @
|       |@
|   -  _|@
|_______|@
         @@
 ______ @
|   __ \\@
|      <@
|___|__|@
        @@
 _______ @
|     __|@
|__     |@
|_______|@
         @@
 _______ @
|_     _|@
  |   |  @
  |___|  @
         @@
 _______ @
|   |   |@
|   |   |@
|_______|@
         @@
 ___ ___ @
|   |   |@
|   |   |@
 \\_____/ @
         @@
 ________ @
|  |  |  |@
|  |  |  |@
|________|@
          @@
 ___ ___ @
|   |   |@
|-     -|@
|___|___|@
         @@
 ___ ___ @
|   |   |@
 \\     / @
  |___|  @
         @@
 _______ @
|__     |@
|     __|@
|_______|@
         @@
 ____ @
|   _|@
|  |  @
|  |_ @
|____|@@
___    @
\\  \\   @
 \`. \`. @
   \\__\\@
       @@
 ____ @
|_   |@
  |  |@
 _|  |@
|____|@@
 ____ @
|    |@
|_/\\_|@
      @
      @@
        @
        @
        @
 ______ @
|______|@@
 __ @
|  |@
|_| @
    @
    @@
       @
.---.-.@
|  _  |@
|___._|@
       @@
 __    @
|  |--.@
|  _  |@
|_____|@
       @@
      @
.----.@
|  __|@
|____|@
      @@
    __ @
.--|  |@
|  _  |@
|_____|@
       @@
       @
.-----.@
|  -__|@
|_____|@
       @@
  ___ @
.'  _|@
|   _|@
|__|  @
      @@
       @
.-----.@
|  _  |@
|___  |@
|_____|@@
 __    @
|  |--.@
|     |@
|__|__|@
       @@
 __ @
|__|@
|  |@
|__|@
    @@
  __ @
 |__|@
 |  |@
 |  |@
|___|@@
 __    @
|  |--.@
|    < @
|__|__|@
       @@
 __ @
|  |@
|  |@
|__|@
    @@
          @
.--------.@
|        |@
|__|__|__|@
          @@
       @
.-----.@
|     |@
|__|__|@
       @@
       @
.-----.@
|  _  |@
|_____|@
       @@
       @
.-----.@
|  _  |@
|   __|@
|__|   @@
       @
.-----.@
|  _  |@
|__   |@
   |__|@@
      @
.----.@
|   _|@
|__|  @
      @@
       @
.-----.@
|__ --|@
|_____|@
       @@
 __   @
|  |_ @
|   _|@
|____|@
      @@
       @
.--.--.@
|  |  |@
|_____|@
       @@
       @
.--.--.@
|  |  |@
 \\___/ @
       @@
          @
.--.--.--.@
|  |  |  |@
|________|@
          @@
       @
.--.--.@
|_   _|@
|__.__|@
       @@
       @
.--.--.@
|  |  |@
|___  |@
|_____|@@
       @
.-----.@
|-- __|@
|_____|@
       @@
  ___ @
 |  _|@
/  /  @
\\  \\_ @
 |___|@@
 __ @
|  |@
|  |@
|  |@
|__|@@
 ___  @
|_  | @
  \\  \\@
 _/  /@
|___| @@
  ___ @
 | ' |@
|_,_| @
      @
      @@
.--.--.@
|-----|@
|  -  |@
|__|__|@
       @@
.--.--.@
|-----|@
|  _  |@
|_____|@
       @@
.--.--.@
|--|--|@
|  |  |@
|_____|@
       @@
.--.--.@
|---.-|@
|  _  |@
|___._|@
       @@
.--.--.@
|-----|@
|  _  |@
|_____|@
       @@
.--.--.@
|--|--|@
|  |  |@
|_____|@
       @@
 _______ @
|    __ \\@
|    __ <@
|  |____/@
|__|     @@
`,Op=`flf2a$ 6 5 16 0 11 0 8036 0
Author : MikeChat
Date   : 2006/6/7 14:32:11
Version: 1.0
-------------------------------------------------

-------------------------------------------------
This font has been created using JavE's FIGlet font export assistant.
Have a look at: http://www.jave.de

Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.
$ #
$ #
$ #
$ #
$ #
$ ##
    .;. #
   ;;;' #
  .;'   #
 .-.    #
 \`-'    #
        ##
"#
 #
 #
 #
 #
 ##
##
 #
 #
 #
 #
 ##
$#
 #
 #
 #
 #
 ##
%#
 #
 #
 #
 #
 ##
&#
 #
 #
 #
 #
 ##
  __ #
  |/ #
  '  #
     #
     #
     ##
(#
 #
 #
 #
 #
 ##
)#
 #
 #
 #
 #
 ##
*#
 #
 #
 #
 #
 ##
+#
 #
 #
 #
 #
 ##
         #
         #
         #
     .-. #
     \`-; #
      '  ##
         #
         #
         #
   \`;;;. #
         #
         ##
       #
       #
       #
   .-. #
   \`-' #
       ##
/#
 #
 #
 #
 #
 ##
          #
     .--. #
    ; .'; #
   ;.' ;  #
   \`;;'   #
          ##
        #
     .; #
    .;' #
   .;'  #
  -;;;- #
        ##
          #
   .;^^;. #
   \`  .'  #
    .'    #
  .;;;;;' #
          ##
         #
   .;^^; #
   \`  .' #
     '.  #
  ';;;;' #
         ##
          #
   .;  ;' #
  .;..;'  #
    .;'   #
   .;'    #
          ##
         #
  .::::. #
  :..-.  #
       ; #
  \`;;;'  #
         ##
         #
    ,:"' #
   ,:-.  #
   ;   : #
   \`':\`  #
         ##
        #
 .;;;;. #
    .;' #
   .;'  #
  .;'   #
        ##
         #
   .-.   #
  ;.-.;  #
 ;     ; #
  \`;;;'  #
         ##
        #
   ,:., #
  :   ; #
   \`-:' #
    :'  #
        ##
     #
 .-. #
 \`-' #
.-.  #
\`-'  #
     ##
;#
 #
 #
 #
 #
 ##
<#
 #
 #
 #
 #
 ##
=#
 #
 #
 #
 #
 ##
> >#
 #
 #
 #
 #
 ##
   .;^^;. #
   \`  .;' #
     ;'   #
   .-.    #
   \`-'    #
          ##
@#
 #
 #
 #
 #
 ##
         /\\   #
     _  / |   #
    (  /  |  .#
     \`/.__|_.'#
 .:' /    |   #
(__.'     \`-' ##
   .-.       #
  (_) )-.    #
    .: __)   #
   .:'   \`.  #
   :'      ) #
(_/  \`----'  ##
  .-._   .-._.#
.: (_)\`-'     #
::            #
::   _        #
\`: .; )       #
  \`--'        ##
   .-.       #
  (_) )-.    #
    .:   \\   #
   .:'    \\  #
 .-:.      ) #
(_/  \`----'  ##
           .- #
   .;;;.\`-'   #
  ;;  (_)     #
  .;;; .-.    #
 ;;  .;  ;    #
 \`;.___.'     ##
   .-._.;;;' #
  (_).;      #
    .:--.    #
   .:'       #
 .-:         #
(_/          ##
           .-.#
    .;;.\`-'   #
   ;; (_;     #
  ;;          #
 ;;    \`;;'   #
 \`;.___.'     ##
     \`;   .'  #
    _ \`; ; (  #
   (  ;' ;  ) #
    \`.;__;.'  #
 .  .:'  \`:.  #
(_.'       \`: ##
       .;;;;. #
      ' .;'  \`#
       .;'    #
      .;'     #
     .;'      #
 .;;;;;;;;;'  ##
         .;;; #
          .;' #
         .;'  #
.-.     .;'   #
\`.     .;     #
  \`;;;;;;'    ##
    .-.       #
   (_).)   .' #
     .:   ;   #
    -:'..'    #
 .  :' \`:     #
(_.'     \`.'  ##
         .-.  #
       ;' (_) #
     .:'      #
    .:'       #
  .-:.    .-. #
 (_/ \`;._.    ##
      .-.     #
       .;|/:  #
      .;   :  #
     .;    :  #
 .:'.;     :  #
(__.'      \`. ##
      .-.     #
        ;  :  #
      .;:  :  #
     .;' \\ :  #
 .:'.;    \\:  #
(__.'      \`. ##
              #
   .;;.    .- #
  ;;  \`;\`-'   #
 ;;    :.     #
;;     ;'     #
\`;.__.'       ##
   .-.      #
  (_) )-.   #
    .:   \\  #
   .:'    ) #
 .-:. \`--'  #
(_/         ##
           #
   .;;.    #
  ;;  \`;   #
 ;;    :   #
;;  \`. ;   #
\`;.__.:._. ##
   .-.        #
  (_) )-.     #
    .:   \\    #
   .::.   )   #
 .-:. \`:-'    #
(_/     \`:._. ##
           .-.#
   .;;;.\`-'   #
  ;;  (_)     #
  \`;;;.       #
  _   \`:      #
 (_.;;;'      ##
 .-.;;;;;;' #
(_)  .;     #
     :      #
   .:'      #
 .-:._      #
(_/  \`-     ##
             #
   .;.   .-. #
    ;;   ;   #
   ;;    :   #
  ;;     ;   #
  \`;.__.:    ##
              #
.;.       .-. #
 \`;     .'    #
  ;;  .'      #
 ;;  ;        #
 \`;.'         ##
              #
.;.       .-. #
  \`;     ;'   #
   ;;    ;    #
  ;;  ;  ;;   #
  \`;.' \`.;'   ##
             #
 .-.     .-. #
(   \`. .'    #
 \`-' ;;      #
     ;;   .- #
 .-._;\`._;   ##
.             #
    .:.   .-. #
     ;;   :   #
     ;    ;   #
 .:' \`._.:    #
(__.-.;'      ##
-.          #
\`-.;;;.     #
      ;;    #
   .;;;'    #
  :'   .-.  #
  \`;;;.-._) ##
[#
 #
 #
 #
 #
 ##
\\#
 #
 #
 #
 #
 ##
]#
 #
 #
 #
 #
 ##
    .:.  #
   '   \` #
         #
         #
         #
         ##
           #
           #
           #
           #
   ._____. #
    \`---'  ##
 _  #
 \\| #
  \` #
    #
    #
    ##
          #
          #
   .-.    #
  ;   :   #
  \`:::'-' #
          ##
      .  #
    .'   #
   ;-.   #
  ;   ;  #
.'\`::'\`- #
         ##
        #
        #
  .-.   #
 ;      #
 \`;;;;' #
        ##
           #
        .' #
   .-..'   #
  :   ;    #
  \`:::'\`.  #
           ##
        #
        #
   .-.  #
 .;.-'  #
  \`:::' #
        ##
      .-. #
     ; -' #
   -;--   #
   .      #
\`.'       #
          ##
          #
          #
    ,:.,' #
   :   ;  #
    \`-:'  #
  -._:'   ##
       #
  .;   #
  ;;-. #
 ;;  ; #
.;\`  \` #
       ##
        #
    .-. #
    \`-' #
   ;'   #
_.;:._. #
        ##
    .-. #
    \`-' #
    ;'  #
   .;   #
:  ::   #
\`:::'   ##
  .:     #
  ::     #
  ;;.-.  #
  ;; .'  #
_.'\`  \`. #
         ##
      .; #
     .;' #
    .;   #
   ::    #
 _;;_.-  #
         ##
              #
              #
  . ,';.,';.  #
  ;;  ;;  ;;  #
 ';  ;;  ';   #
_;        \`-' ##
         #
         #
  . ,';. #
  ;;  ;; #
 ';  ;;  #
 ;    \`. ##
         #
         #
   .-.   #
  ;   ;' #
  \`;;'   #
         ##
        #
        #
 \`..:.  #
  ;;  : #
  ;;_.\` #
 .;'    ##
          #
          #
    ,:.   #
   :   ;  #
    '-;   #
      \`.; ##
         #
         #
  .;.::. #
  .;     #
.;'      #
         ##
       #
       #
     . #
   .'; #
 .' .' #
'      ##
       .   #
   ...;... #
    .'     #
  .;       #
.;         #
           ##
            #
            #
     ,  :   #
    ;   ;   #
  .'\`..:;._ #
            ##
         #
     .-. #
_.;  :   #
 ;   ;   #
 \`._.'   #
         ##
          #
          #
\`;     .- #
;  ;   ;  #
\`.' \`.'   #
          ##
            #
.;.    _    #
   \`.,' '   #
   ,'\`.     #
 -'    \`._. #
            ##
          #
          #
 .    .-. #
  \`:  ;   #
   \`.'    #
-.;'      ##
      #
      #
.-.   #
   ;. #
(   ; #
 \`-'  ##
{#
 #
 #
 #
 #
 ##
|#
 #
 #
 #
 #
 ##
}#
 #
 #
 #
 #
 ##
         #
   .;;.  #
.;;'   \` #
         #
         #
         ##
         /\\   #
     _  / |   #
    (  /  |  .#
     \`/.__|_.'#
 .:' /    |   #
(__.'     \`-' ##
              #
   .;;.    .- #
  ;;  \`;\`-'   #
 ;;    :.     #
;;     ;'     #
\`;.__.'       ##
             #
   .;.   .-. #
    ;;   ;   #
   ;;    :   #
  ;;     ;   #
  \`;.__.:    ##
          #
          #
   .-.    #
  ;   :   #
  \`:::'-' #
          ##
         #
         #
   .-.   #
  ;   ;' #
  \`;;'   #
         ##
            #
            #
     ,  :   #
    ;   ;   #
  .'\`..:;._ #
            ##
�#
 #
 #
 #
 #
 ##`,Mp=`flf2a$ 8 6 14 15 16
DOOM by Frans P. de Vries <fpv@xymph.iaf.nl>  18 Jun 1996
based on Big by Glenn Chappell 4/93 -- based on Standard
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Explanation of first line:
flf2 - "magic number" for file identification
a    - should always be \`a', for now
$    - the "hardblank" -- prints as a blank, but can't be smushed
8    - height of a character
6    - height of a character, not including descenders
14   - max line length (excluding comment lines) + a fudge factor
15   - default smushmode for this font
16   - number of comment lines

$@
$@
$@
$@
$@
$@
$@
$@@
 _ @
| |@
| |@
| |@
|_|@
(_)@
   @
   @@
 _ _ @
( | )@
 V V @
  $  @
  $  @
  $  @
     @
     @@
   _  _   @
 _| || |_ @
|_  __  _|@
 _| || |_ @
|_  __  _|@
  |_||_|  @
          @
          @@
  _  @
 | | @
/ __)@
\\__ \\@
(   /@
 |_| @
     @
     @@
 _   __@
(_) / /@
   / / @
  / /  @
 / / _ @
/_/ (_)@
       @
       @@
        @
  ___   @
 ( _ )  @
 / _ \\/\\@
| (_>  <@
 \\___/\\/@
        @
        @@
 _ @
( )@
|/ @
 $ @
 $ @
 $ @
   @
   @@
  __@
 / /@
| | @
| | @
| | @
| | @
 \\_\\@
    @@
__  @
\\ \\ @
 | |@
 | |@
 | |@
 | |@
/_/ @
    @@
    _    @
 /\\| |/\\ @
 \\ \` ' / @
|_     _|@
 / , . \\ @
 \\/|_|\\/ @
         @
         @@
       @
   _   @
 _| |_ @
|_   _|@
  |_|  @
   $   @
       @
       @@
   @
   @
   @
   @
 _ @
( )@
|/ @
   @@
        @
        @
 ______ @
|______|@
    $   @
    $   @
        @
        @@
   @
   @
   @
   @
 _ @
(_)@
   @
   @@
     __@
    / /@
   / / @
  / /  @
 / /   @
/_/    @
       @
       @@
 _____ @
|  _  |@
| |/' |@
|  /| |@
\\ |_/ /@
 \\___/ @
       @
       @@
 __  @
/  | @
\`| | @
 | | @
_| |_@
\\___/@
     @
     @@
 _____ @
/ __  \\@
\`' / /'@
  / /  @
./ /___@
\\_____/@
       @
       @@
 _____ @
|____ |@
    / /@
  $ \\ \\@
.___/ /@
\\____/ @
       @
       @@
   ___ @
  /   |@
 / /| |@
/ /_| |@
\\___  |@
    |_/@
       @
       @@
 _____ @
|  ___|@
|___ \\ @
    \\ \\@
/\\__/ /@
\\____/ @
       @
       @@
  ____ @
 / ___|@
/ /___ @
| ___ \\@
| \\_/ |@
\\_____/@
       @
       @@
 ______@
|___  /@
  $/ / @
  / /  @
./ /   @
\\_/    @
       @
       @@
 _____ @
|  _  |@
 \\ V / @
 / _ \\ @
| |_| |@
\\_____/@
       @
       @@
 _____ @
|  _  |@
| |_| |@
\\____ |@
.___/ /@
\\____/ @
       @
       @@
   @
 _ @
(_)@
 $ @
 _ @
(_)@
   @
   @@
   @
 _ @
(_)@
 $ @
 _ @
( )@
|/ @
   @@
   __@
  / /@
 / / @
< <  @
 \\ \\ @
  \\_\\@
     @
     @@
        @
 ______ @
|______|@
 ______ @
|______|@
        @
        @
        @@
__   @
\\ \\  @
 \\ \\ @
  > >@
 / / @
/_/  @
     @
     @@
 ___  @
|__ \\ @
   ) |@
  / / @
 |_|  @
 (_)  @
      @
      @@
         @
   ____  @
  / __ \\ @
 / / _\` |@
| | (_| |@
 \\ \\__,_|@
  \\____/ @
         @@
  ___  @
 / _ \\ @
/ /_\\ \\@
|  _  |@
| | | |@
\\_| |_/@
       @
       @@
______ @
| ___ \\@
| |_/ /@
| ___ \\@
| |_/ /@
\\____/ @
       @
       @@
 _____ @
/  __ \\@
| /  \\/@
| |    @
| \\__/\\@
 \\____/@
       @
       @@
______ @
|  _  \\@
| | | |@
| | | |@
| |/ / @
|___/  @
       @
       @@
 _____ @
|  ___|@
| |__  @
|  __| @
| |___ @
\\____/ @
       @
       @@
______ @
|  ___|@
| |_   @
|  _|  @
| |    @
\\_|    @
       @
       @@
 _____ @
|  __ \\@
| |  \\/@
| | __ @
| |_\\ \\@
 \\____/@
       @
       @@
 _   _ @
| | | |@
| |_| |@
|  _  |@
| | | |@
\\_| |_/@
       @
       @@
 _____ @
|_   _|@
  | |  @
  | |  @
 _| |_ @
 \\___/ @
       @
       @@
   ___ @
  |_  |@
  $ | |@
    | |@
/\\__/ /@
\\____/ @
       @
       @@
 _   __@
| | / /@
| |/ / @
|    \\ @
| |\\  \\@
\\_| \\_/@
       @
       @@
 _     @
| | $  @
| | $  @
| |    @
| |____@
\\_____/@
       @
       @@
___  ___@
|  \\/  |@
| .  . |@
| |\\/| |@
| |  | |@
\\_|  |_/@
        @
        @@
 _   _ @
| \\ | |@
|  \\| |@
| . \` |@
| |\\  |@
\\_| \\_/@
       @
       @@
 _____ @
|  _  |@
| | | |@
| | | |@
\\ \\_/ /@
 \\___/ @
       @
       @@
______ @
| ___ \\@
| |_/ /@
|  __/ @
| |    @
\\_|    @
       @
       @@
 _____ @
|  _  |@
| | | |@
| | | |@
\\ \\/' /@
 \\_/\\_\\@
       @
       @@
______ @
| ___ \\@
| |_/ /@
|    / @
| |\\ \\ @
\\_| \\_|@
       @
       @@
 _____ @
/  ___|@
\\ \`--. @
 \`--. \\@
/\\__/ /@
\\____/ @
       @
       @@
 _____ @
|_   _|@
  | |  @
  | |  @
  | |  @
  \\_/  @
       @
       @@
 _   _ @
| | | |@
| | | |@
| | | |@
| |_| |@
 \\___/ @
       @
       @@
 _   _ @
| | | |@
| | | |@
| | | |@
\\ \\_/ /@
 \\___/ @
       @
       @@
 _    _ @
| |  | |@
| |  | |@
| |/\\| |@
\\  /\\  /@
 \\/  \\/ @
        @
        @@
__   __@
\\ \\ / /@
 \\ V / @
 /   \\ @
/ /^\\ \\@
\\/   \\/@
       @
       @@
__   __@
\\ \\ / /@
 \\ V / @
  \\ /  @
  | |  @
  \\_/  @
       @
       @@
 ______@
|___  /@
  $/ / @
  / /  @
./ /___@
\\_____/@
       @
       @@
 ___ @
|  _|@
| |  @
| |  @
| |  @
| |_ @
|___|@
     @@
__     @
\\ \\    @
 \\ \\   @
  \\ \\  @
   \\ \\ @
    \\_\\@
       @
       @@
 ___ @
|_  |@
  | |@
  | |@
  | |@
 _| |@
|___|@
     @@
 /\\ @
|/\\|@
  $ @
  $ @
  $ @
  $ @
    @
    @@
        @
        @
        @
        @
        @
    $   @
 ______ @
|______|@@
 _ @
( )@
 \\|@
 $ @
 $ @
 $ @
   @
   @@
       @
       @
  __ _ @
 / _\` |@
| (_| |@
 \\__,_|@
       @
       @@
 _     @
| |    @
| |__  @
| '_ \\ @
| |_) |@
|_.__/ @
       @
       @@
      @
      @
  ___ @
 / __|@
| (__ @
 \\___|@
      @
      @@
     _ @
    | |@
  __| |@
 / _\` |@
| (_| |@
 \\__,_|@
       @
       @@
      @
      @
  ___ @
 / _ \\@
|  __/@
 \\___|@
      @
      @@
  __ @
 / _|@
| |_ @
|  _|@
| |  @
|_|  @
     @
     @@
       @
       @
  __ _ @
 / _\` |@
| (_| |@
 \\__, |@
  __/ |@
 |___/ @@
 _     @
| |    @
| |__  @
| '_ \\ @
| | | |@
|_| |_|@
       @
       @@
 _ @
(_)@
 _ @
| |@
| |@
|_|@
   @
   @@
   _ @
  (_)@
   _ @
  | |@
  | |@
  | |@
 _/ |@
|__/ @@
 _    @
| |   @
| | __@
| |/ /@
|   < @
|_|\\_\\@
      @
      @@
 _ @
| |@
| |@
| |@
| |@
|_|@
   @
   @@
           @
           @
 _ __ ___  @
| '_ \` _ \\ @
| | | | | |@
|_| |_| |_|@
           @
           @@
       @
       @
 _ __  @
| '_ \\ @
| | | |@
|_| |_|@
       @
       @@
       @
       @
  ___  @
 / _ \\ @
| (_) |@
 \\___/ @
       @
       @@
       @
       @
 _ __  @
| '_ \\ @
| |_) |@
| .__/ @
| |    @
|_|    @@
       @
       @
  __ _ @
 / _\` |@
| (_| |@
 \\__, |@
    | |@
    |_|@@
      @
      @
 _ __ @
| '__|@
| |   @
|_|   @
      @
      @@
     @
     @
 ___ @
/ __|@
\\__ \\@
|___/@
     @
     @@
 _   @
| |  @
| |_ @
| __|@
| |_ @
 \\__|@
     @
     @@
       @
       @
 _   _ @
| | | |@
| |_| |@
 \\__,_|@
       @
       @@
       @
       @
__   __@
\\ \\ / /@
 \\ V / @
  \\_/  @
       @
       @@
          @
          @
__      __@
\\ \\ /\\ / /@
 \\ V  V / @
  \\_/\\_/  @
          @
          @@
      @
      @
__  __@
\\ \\/ /@
 >  < @
/_/\\_\\@
      @
      @@
       @
       @
 _   _ @
| | | |@
| |_| |@
 \\__, |@
  __/ |@
 |___/ @@
     @
     @
 ____@
|_  /@
 / / @
/___|@
     @
     @@
   __@
  / /@
 | | @
/ /  @
\\ \\  @
 | | @
  \\_\\@
     @@
 _ @
| |@
| |@
| |@
| |@
| |@
| |@
|_|@@
__   @
\\ \\  @
 | | @
  \\ \\@
  / /@
 | | @
/_/  @
     @@
 /\\/|@
|/\\/ @
  $  @
  $  @
  $  @
  $  @
     @
     @@
 _   _ @
(_)_(_)@
 / _ \\ @
/ /_\\ \\@
|  _  |@
\\_| |_/@
       @
       @@
 _   _ @
(_)_(_)@
|  _  |@
| | | |@
\\ \\_/ /@
 \\___/ @
       @
       @@
 _   _ @
(_) (_)@
| | | |@
| | | |@
| |_| |@
 \\___/ @
       @
       @@
 _   _ @
(_) (_)@
  __ _ @
 / _\` |@
| (_| |@
 \\__,_|@
       @
       @@
 _   _ @
(_) (_)@
  ___  @
 / _ \\ @
| (_) |@
 \\___/ @
       @
       @@
 _   _ @
(_) (_)@
 _   _ @
| | | |@
| |_| |@
 \\__,_|@
       @
       @@
  ___  @
 / _ \\ @
| | ) |@
| |< < @
| | ) |@
| ||_/ @
\\_|    @
       @@
`,Dp=`flf2a$ 9 8 13 16 16
Epic by Claude Martins 12/94

Figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Explanation of first line:
flf2 - "magic number" for file identification
a    - should always be \`a', for now
$    - the "hardblank" -- prints as a blank, but can't be smushed
9    - height of a character
8    - height of a character, not including descenders
13   - max line length (excluding comment lines) + a fudge factor
16   - default smushmode for this font
16   - number of comment lines

$$@
$$@
$$@
$$@
$$@
$$@
$$@
$$@
$$@@
 _ @
( )@
| |@
| |@
| |@
(_)@
 _ @
(_)@
   @@
 _  _ @
( )( )@
 \\||/ @
      @
      @
      @
      @
      @
      @@
   _   _   @
  ( ) ( )  @
 _| |_| |_ @
(_   _   _)@
 _| (_) |_ @
(_   _   _)@
  | | | |  @
  (_) (_)  @
           @@
    _    @
 __|_|___@
(  _____/@
| (|_|__ @
(_____  )@
/\\_|_|) |@
\\_______)@
   |_|   @
         @@
       @
     /\\@
()  / /@
   / / @
  / /  @
 / /   @
/ /  ()@
\\/     @
       @@
   __   @
  /__\\  @
 ( \\/ ) @
  \\  /  @
  /  \\/\\@
 / /\\  /@
(  \\/  \\@
 \\___/\\/@
        @@
 _ @
( )@
|/ @
   @
   @
   @
   @
   @
   @@
   _ @
  / )@
 / / @
( (  @
| |  @
( (  @
 \\ \\ @
  \\_)@
     @@
 _   @
( \\  @
 \\ \\ @
  ) )@
  | |@
  ) )@
 / / @
(_/  @
     @@
          @
 /\\    /\\ @
 \\ \\  / / @
 _) () (_ @
(_      _)@
  ) () (  @
 / /  \\ \\ @
 \\/    \\/ @
          @@
    _    @
   ( )   @
   | |   @
 __| |__ @
(__   __)@
   | |   @
   | |   @
   (_)   @
         @@
   @
   @
   @
   @
   @
   @
 _ @
( )@
|/ @@
       @
       @
       @
 _____ @
(_____)@
       @
       @
       @
       @@
   @
   @
   @
   @
   @
   @
 _ @
(_)@
   @@
       @
     /\\@
    / /@
   / / @
  / /  @
 / /   @
/ /    @
\\/     @
       @@
 _______ @
(  __   )@
| (  )  |@
| | /   |@
| (/ /) |@
|   / | |@
|  (__) |@
(_______)@
         @@
  __   @
 /  \\  @
 \\/) ) @
   | | @
   | | @
   | | @
 __) (_@
 \\____/@
       @@
 _______ @
/ ___   )@
\\/   )  |@
    /   )@
  _/   / @
 /   _/  @
(   (__/\\@
\\_______/@
         @@
 ______  @
/ ___  \\ @
\\/   \\  \\@
   ___) /@
  (___ ( @
      ) \\@
/\\___/  /@
\\______/ @
         @@
    ___   @
   /   )  @
  / /) |  @
 / (_) (_ @
(____   _)@
     ) (  @
     | |  @
     (_)  @
          @@
 _______ @
(  ____ \\@
| (    \\/@
| (____  @
(_____ \\ @
      ) )@
/\\____) )@
\\______/ @
         @@
  ______ @
 / ____ \\@
( (    \\/@
| (____  @
|  ___ \\ @
| (   ) )@
( (___) )@
 \\_____/ @
         @@
 ______  @
/ ___  \\ @
\\/   )  )@
    /  / @
   /  /  @
  /  /   @
 /  /    @
 \\_/     @
         @@
  _____  @
 / ___ \\ @
( (___) )@
 \\     / @
 / ___ \\ @
( (   ) )@
( (___) )@
 \\_____/ @
         @@
  _____  @
 / ___ \\ @
( (   ) )@
( (___) |@
 \\____  |@
      ) |@
/\\____) )@
\\______/ @
         @@
   @
   @
 _ @
(_)@
   @
 _ @
(_)@
   @
   @@
   @
   @
   @
 _ @
(_)@
   @
 _ @
( )@
|/ @@
    _ @
   / )@
  / / @
 / /  @
( (   @
 \\ \\  @
  \\ \\ @
   \\_)@
      @@
     @
     @
 ___ @
(___)@
 ___ @
(___)@
     @
     @
     @@
 _    @
( \\   @
 \\ \\  @
  \\ \\ @
   ) )@
  / / @
 / /  @
(_/   @
      @@
  _____  @
 / ___ \\ @
( (   ) )@
 \\/  / / @
    ( (  @
    | |  @
    (_)  @
     _   @
    (_)  @@
   _____   @
  / ___ \\  @
 / / _ \\ \\ @
( ( / \\ ) )@
| |(()// / @
( ( \\___/  @
 \\ \\____/\\ @
  \\______/ @
           @@
 _______ @
(  ___  )@
| (   ) |@
| (___) |@
|  ___  |@
| (   ) |@
| )   ( |@
|/     \\|@
         @@
 ______  @
(  ___ \\ @
| (   ) )@
| (__/ / @
|  __ (  @
| (  \\ \\ @
| )___) )@
|/ \\___/ @
         @@
 _______ @
(  ____ \\@
| (    \\/@
| |      @
| |      @
| |      @
| (____/\\@
(_______/@
         @@
 ______  @
(  __  \\ @
| (  \\  )@
| |   ) |@
| |   | |@
| |   ) |@
| (__/  )@
(______/ @
         @@
 _______ @
(  ____ \\@
| (    \\/@
| (__    @
|  __)   @
| (      @
| (____/\\@
(_______/@
         @@
 _______ @
(  ____ \\@
| (    \\/@
| (__    @
|  __)   @
| (      @
| )      @
|/       @
         @@
 _______ @
(  ____ \\@
| (    \\/@
| |      @
| | ____ @
| | \\_  )@
| (___) |@
(_______)@
         @@
         @
|\\     /|@
| )   ( |@
| (___) |@
|  ___  |@
| (   ) |@
| )   ( |@
|/     \\|@
         @@
_________@
\\__   __/@
   ) (   @
   | |   @
   | |   @
   | |   @
___) (___@
\\_______/@
         @@
_________@
\\__    _/@
   )  (  @
   |  |  @
   |  |  @
   |  |  @
|\\_)  )  @
(____/   @
         @@
 _       @
| \\    /\\@
|  \\  / /@
|  (_/ / @
|   _ (  @
|  ( \\ \\ @
|  /  \\ \\@
|_/    \\/@
         @@
 _       @
( \\      @
| (      @
| |      @
| |      @
| |      @
| (____/\\@
(_______/@
         @@
 _______ @
(       )@
| () () |@
| || || |@
| |(_)| |@
| |   | |@
| )   ( |@
|/     \\|@
         @@
 _       @
( (    /|@
|  \\  ( |@
|   \\ | |@
| (\\ \\) |@
| | \\   |@
| )  \\  |@
|/    )_)@
         @@
 _______ @
(  ___  )@
| (   ) |@
| |   | |@
| |   | |@
| |   | |@
| (___) |@
(_______)@
         @@
 _______ @
(  ____ )@
| (    )|@
| (____)|@
|  _____)@
| (      @
| )      @
|/       @
         @@
 _______ @
(  ___  )@
| (   ) |@
| |   | |@
| |   | |@
| | /\\| |@
| (_\\ \\ |@
(____\\/_)@
         @@
 _______ @
(  ____ )@
| (    )|@
| (____)|@
|     __)@
| (\\ (   @
| ) \\ \\__@
|/   \\__/@
         @@
 _______ @
(  ____ \\@
| (    \\/@
| (_____ @
(_____  )@
      ) |@
/\\____) |@
\\_______)@
         @@
_________@
\\__   __/@
   ) (   @
   | |   @
   | |   @
   | |   @
   | |   @
   )_(   @
         @@
         @
|\\     /|@
| )   ( |@
| |   | |@
| |   | |@
| |   | |@
| (___) |@
(_______)@
         @@
         @
|\\     /|@
| )   ( |@
| |   | |@
( (   ) )@
 \\ \\_/ / @
  \\   /  @
   \\_/   @
         @@
         @
|\\     /|@
| )   ( |@
| | _ | |@
| |( )| |@
| || || |@
| () () |@
(_______)@
         @@
         @
|\\     /|@
( \\   / )@
 \\ (_) / @
  ) _ (  @
 / ( ) \\ @
( /   \\ )@
|/     \\|@
         @@
         @
|\\     /|@
( \\   / )@
 \\ (_) / @
  \\   /  @
   ) (   @
   | |   @
   \\_/   @
         @@
 _______ @
/ ___   )@
\\/   )  |@
    /   )@
   /   / @
  /   /  @
 /   (_/\\@
(_______/@
         @@
 ____ @
(  __)@
| (   @
| |   @
| |   @
| |   @
| (__ @
(____)@
      @@
       @
/\\     @
\\ \\    @
 \\ \\   @
  \\ \\  @
   \\ \\ @
    \\ \\@
     \\/@
       @@
 ____ @
(__  )@
   ) |@
   | |@
   | |@
   | |@
 __) |@
(____)@
      @@
 /\\ @
(/\\)@
    @
    @
    @
    @
    @
    @
    @@
       @
       @
       @
       @
       @
       @
       @
 _____ @
(_____)@@
 _ @
( )@
 \\|@
   @
   @
   @
   @
   @
   @@
 _______ @
(  ___  )@
| (   ) |@
| (___) |@
|  ___  |@
| (   ) |@
| )   ( |@
|/     \\|@
         @@
 ______  @
(  ___ \\ @
| (   ) )@
| (__/ / @
|  __ (  @
| (  \\ \\ @
| )___) )@
|/ \\___/ @
         @@
 _______ @
(  ____ \\@
| (    \\/@
| |      @
| |      @
| |      @
| (____/\\@
(_______/@
         @@
 ______  @
(  __  \\ @
| (  \\  )@
| |   ) |@
| |   | |@
| |   ) |@
| (__/  )@
(______/ @
         @@
 _______ @
(  ____ \\@
| (    \\/@
| (__    @
|  __)   @
| (      @
| (____/\\@
(_______/@
         @@
 _______ @
(  ____ \\@
| (    \\/@
| (__    @
|  __)   @
| (      @
| )      @
|/       @
         @@
 _______ @
(  ____ \\@
| (    \\/@
| |      @
| | ____ @
| | \\_  )@
| (___) |@
(_______)@
         @@
         @
|\\     /|@
| )   ( |@
| (___) |@
|  ___  |@
| (   ) |@
| )   ( |@
|/     \\|@
         @@
_________@
\\__   __/@
   ) (   @
   | |   @
   | |   @
   | |   @
___) (___@
\\_______/@
         @@
_________@
\\__    _/@
   )  (  @
   |  |  @
   |  |  @
   |  |  @
|\\_)  )  @
(____/   @
         @@
 _       @
| \\    /\\@
|  \\  / /@
|  (_/ / @
|   _ (  @
|  ( \\ \\ @
|  /  \\ \\@
|_/    \\/@
         @@
 _       @
( \\      @
| (      @
| |      @
| |      @
| |      @
| (____/\\@
(_______/@
         @@
 _______ @
(       )@
| () () |@
| || || |@
| |(_)| |@
| |   | |@
| )   ( |@
|/     \\|@
         @@
 _       @
( (    /|@
|  \\  ( |@
|   \\ | |@
| (\\ \\) |@
| | \\   |@
| )  \\  |@
|/    )_)@
         @@
 _______ @
(  ___  )@
| (   ) |@
| |   | |@
| |   | |@
| |   | |@
| (___) |@
(_______)@
         @@
 _______ @
(  ____ )@
| (    )|@
| (____)|@
|  _____)@
| (      @
| )      @
|/       @
         @@
 _______ @
(  ___  )@
| (   ) |@
| |   | |@
| |   | |@
| | /\\| |@
| (_\\ \\ |@
(____\\/_)@
         @@
 _______ @
(  ____ )@
| (    )|@
| (____)|@
|     __)@
| (\\ (   @
| ) \\ \\__@
|/   \\__/@
         @@
 _______ @
(  ____ \\@
| (    \\/@
| (_____ @
(_____  )@
      ) |@
/\\____) |@
\\_______)@
         @@
_________@
\\__   __/@
   ) (   @
   | |   @
   | |   @
   | |   @
   | |   @
   )_(   @
         @@
         @
|\\     /|@
| )   ( |@
| |   | |@
| |   | |@
| |   | |@
| (___) |@
(_______)@
         @@
         @
|\\     /|@
| )   ( |@
| |   | |@
( (   ) )@
 \\ \\_/ / @
  \\   /  @
   \\_/   @
         @@
         @
|\\     /|@
| )   ( |@
| | _ | |@
| |( )| |@
| || || |@
| () () |@
(_______)@
         @@
         @
|\\     /|@
( \\   / )@
 \\ (_) / @
  ) _ (  @
 / ( ) \\ @
( /   \\ )@
|/     \\|@
         @@
         @
|\\     /|@
( \\   / )@
 \\ (_) / @
  \\   /  @
   ) (   @
   | |   @
   \\_/   @
         @@
 _______ @
/ ___   )@
\\/   )  |@
    /   )@
   /   / @
  /   /  @
 /   (_/\\@
(_______/@
         @@
  __ @
 ( _)@
 )(  @
/ |  @
\\ |  @
 )(_ @
 (__)@
     @
     @@
 _ @
( )@
| |@
(_)@
 _ @
( )@
| |@
(_)@
   @@
 __  @
(_ ) @
  )( @
  | \\@
  | /@
 _)( @
(__) @
     @
     @@
  _    @
 /_\\_/)@
(/ \\_/ @
       @
       @
       @
       @
       @
       @@
 __   __ @
(__) (__)@
 _______ @
(  ___  )@
| (___) |@
|  ___  |@
| )   ( |@
|/     \\|@
         @@
 __   __ @
(__) (__)@
 _______ @
(  ___  )@
| (   ) |@
| |   | |@
| (___) |@
(_______)@
         @@
 __   __ @
(__) (__)@
         @
|\\     /|@
| )   ( |@
| |   | |@
| (___) |@
(_______)@
         @@
 __   __ @
(__) (__)@
 _______ @
(  ___  )@
| (___) |@
|  ___  |@
| )   ( |@
|/     \\|@
         @@
 __   __ @
(__) (__)@
 _______ @
(  ___  )@
| (   ) |@
| |   | |@
| (___) |@
(_______)@
         @@
 __   __ @
(__) (__)@
         @
|\\     /|@
| )   ( |@
| |   | |@
| (___) |@
(_______)@
         @@
 ______  @
(  ___ \\ @
| (___) )@
|  ___ / @
| (___)\\ @
| |\\___/ @
| )      @
|/       @
         @@
`,Hp=`flf2a$ 9 8 15 0 20 0 16255 0
Author : myflix
Date   : 2004/9/26 12:46:52
Version: 1.0
-------------------------------------------------

-------------------------------------------------
This font has been created using JavE's FIGlet font export assistant.
Have a look at: http://www.jave.de

Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

---

Font modified June 17, 2007 by patorjk 
- Widened the space character.

Font modified May 26, 2012 by patorjk
- Switched the _ and - character (which were swapped).
- Added the 0xCA0 character
$    $#
$    $#
$    $#
$    $#
$    $#
$    $#
$    $#
$    $#
$    $##
,---. #
|   | #
|   | #
|   | #
|   | #
|  .' #
\`--'  #
.--.  #
'--'  ##
         #
,--.,--. #
\\  |\\  | #
 \`-' \`-' #
         #
         #
         #
         #
         ##
             #
   ,-. ,-.   #
   | | | |   #
,--| |-| |--.#
'--| |-| |--'#
'--| |-| |--'#
   | | | |   #
   \`-' \`-'   #
             ##
   ,-.    #
 .-| |-.  #
|  | |_/  #
\\  | |.   #
 '-| | '. #
.- | |  | #
| \`| |  / #
 \`-| |'\`  #
   \`-'    ##
      ,-. #
 ,--. / / #
 '--'/ /  #
    / /   #
   / /    #
  / /     #
 / / ,--. #
/ /  '--' #
\`-'       ##
             #
 .-----.     #
/  .-.  \\    #
|  \\_.' /    #
/  .-. ',-.  #
| |   | . /_ #
\\  '-'  _.__)#
 \`----''     #
             ##
     #
,--. #
\\  | #
 \`-' #
     #
     #
     #
     #
     ##
  ,-. #
 /  | #
'  .' #
|  |  #
|  |  #
|  |  #
'  '. #
 \\  | #
  \`-' ##
,-.   #
|  \\  #
'.  ' #
 |  | #
 |  | #
 |  | #
.'  ' #
|  /  #
\`-'   ##
            #
    .-.     #
 .-,| |,-.  #
 _\\ ' ' /_  #
(__     __) #
  / . . \\   #
 \`-'| |\`-'  #
    \`-'     #
            ##
            #
            #
    ,-.     #
    | |     #
,---| |---. #
'---| |---' #
    | |     #
    \`-'     #
            ##
    #
    #
    #
    #
    #
    #
    #
.-. #
',/ ##
          #
          #
          #
   .-')   #
 _(  OO)  #
(,------. #
 '------' #
          #
          ##
    #
    #
    #
    #
    #
    #
    #
.-. #
\`-' ##
      ,-. #
      / / #
     / /  #
    / /   #
   / /    #
  / /     #
 / /      #
/ /       #
\`-'       ##
           #
           #
  .----.   #
 /  ..  \\  #
.  /  \\  . #
|  |  '  | #
'  \\  /  ' #
 \\  \`'  /  #
  \`---''   ##
       #
       #
 .---. #
/_   | #
 |   | #
 |   | #
 |   | #
 |   | #
 \`---' ##
          #
          #
 .-----.  #
/ ,-.   \\ #
'-'  |  | #
   .'  /  #
 .'  /__  #
|       | #
\`-------' ##
          #
          #
 .-----.  #
/  -.   \\ #
'-' _'  | #
   |_  <  #
.-.  |  | #
\\ \`-'   / #
 \`----''  ##
            #
            #
    .---.   #
   / .  |   #
  / /|  |   #
 / / |  |_  #
/  '-'    | #
\`----|  |-' #
     \`--'   ##
          #
          #
.------.  #
|   ___|  #
|  '--.   #
\`---.  '. #
.-   |  | #
| \`-'   / #
 \`----''  ##
          #
          #
  ,--.    #
 /  .'    #
.  / -.   #
| .-.  '  #
' \\  |  | #
\\  \`'  /  #
 \`----'   ##
           #
           #
.--------. #
|   __   ' #
\`--' .  /  #
    /  /   #
   .  /    #
  /  /     #
 \`--'      ##
            #
            #
  .-----.   #
 /  .-.  \\  #
|   \\_.' /  #
 /  .-. '.  #
|  |   |  | #
 \\  '-'  /  #
  \`----''   ##
           #
           #
  .----.   #
 /  ,.  \\  #
|  |  \\  | #
 '  \`-'  ' #
  \`- /  '  #
   ,'  /   #
  \`---'    ##
    #
    #
.-. #
\`-' #
    #
.-. #
\`-' #
    #
    ##
    #
    #
.-. #
'-' #
    #
.-. #
',/ #
    #
    ##
       #
   ,-. #
  / /  #
 / /   #
/ /    #
\\ \\    #
 \\ \\   #
  \\ \\  #
   \`-' ##
        #
        #
,-----. #
'-----' #
        #
,-----. #
'-----' #
        #
        ##
       #
,-.    #
 \\ \\   #
  \\ \\  #
   \\ \\ #
   / / #
  / /  #
 / /   #
\`-'    ##
 ,------.  #
'  .--.  ' #
|  |  |  | #
'--'  |  | #
    __.  | #
   |   .'  #
   |___|   #
   .---.   #
   '---'   ##
          #
          #
   ____   #
 .' __ \\  #
/ .'  \\ | #
| | (_/ | #
\\ \`.__.'\\ #
 \`.___ .' #
          ##
   ('-.     #
  ( OO ).-. #
  / . --. / #
  | \\-.  \\  #
.-'-'  |  | #
 \\| |_.'  | #
  |  .-.  | #
  |  | |  | #
  \`--' \`--' ##
.-. .-')   #
\\  ( OO )  #
 ;-----.\\  #
 | .-.  |  #
 | '-' /_) #
 | .-. \`.  #
 | |  \\  | #
 | '--'  / #
 \`------'  ##
            #
            #
   .-----.  #
  '  .--./  #
  |  |('-.  #
 /_) |OO  ) #
 ||  |\`-'|  #
(_'  '--'\\  #
   \`-----'  ##
 _ .-') _   #
( (  OO) )  #
 \\     .'_  #
 ,\`'--..._) #
 |  |  \\  ' #
 |  |   ' | #
 |  |   / : #
 |  '--'  / #
 \`-------'  ##
   ('-.   #
 _(  OO)  #
(,------. #
 |  .---' #
 |  |     #
(|  '--.  #
 |  .--'  #
 |  \`---. #
 \`------' ##
            #
            #
   ,------. #
('-| _.---' #
(OO|(_\\     #
/  |  '--.  #
\\_)|  .--'  #
  \\|  |_)   #
   \`--'     ##
             #
             #
  ,----.     #
 '  .-./-')  #
 |  |_( O- ) #
 |  | .--, \\ #
(|  | '. (_/ #
 |  '--'  |  #
  \`------'   ##
 ('-. .-. #
( OO )  / #
,--. ,--. #
|  | |  | #
|   .|  | #
|       | #
|  .-.  | #
|  | |  | #
\`--' \`--' ##
          #
          #
  ,-.-')  #
  |  |OO) #
  |  |  \\ #
  |  |(_/ #
 ,|  |_.' #
(_|  |    #
  \`--'    ##
          #
          #
     ,--. #
 .-')| ,| #
( OO |(_| #
| \`-'|  | #
,--. |  | #
|  '-'  / #
 \`-----'  ##
.-. .-')   #
\\  ( OO )  #
,--. ,--.  #
|  .'   /  #
|      /,  #
|     ' _) #
|  .   \\   #
|  |\\   \\  #
\`--' '--'  ##
           #
           #
 ,--.      #
 |  |.-')  #
 |  | OO ) #
 |  |\`-' | #
(|  '---.' #
 |      |  #
 \`------'  ##
 _   .-')    #
( '.( OO )_  #
 ,--.   ,--.)#
 |   \`.'   | #
 |         | #
 |  |'.'|  | #
 |  |   |  | #
 |  |   |  | #
 \`--'   \`--' ##
     .-') _  #
    ( OO ) ) #
,--./ ,--,'  #
|   \\ |  |\\  #
|    \\|  | ) #
|  .     |/  #
|  |\\    |   #
|  | \\   |   #
\`--'  \`--'   ##
             #
             #
 .-'),-----. #
( OO'  .-.  '#
/   |  | |  |#
\\_) |  |\\|  |#
  \\ |  | |  |#
   \`'  '-'  '#
     \`-----' ##
   _ (\`-.  #
  ( (OO  ) #
 _.\`     \\ #
(__...--'' #
 |  /  | | #
 |  |_.' | #
 |  .___.' #
 |  |      #
 \`--'      ##
     .-')    #
   .(  OO)   #
  (_)---\\_)  #
  '  .-.  '  #
 ,|  | |  |  #
(_|  | |  |  #
  |  | |  |  #
  '  '-'  '-.#
   \`-----'--'##
 _  .-')   #
( \\( -O )  #
 ,------.  #
 |   /\`. ' #
 |  /  | | #
 |  |_.' | #
 |  .  '.' #
 |  |\\  \\  #
 \`--' '--' ##
  .-')    #
 ( OO ).  #
(_)---\\_) #
/    _ |  #
\\  :\` \`.  #
 '..\`''.) #
.-._)   \\ #
\\       / #
 \`-----'  ##
 .-') _    #
(  OO) )   #
/     '._  #
|'--...__) #
'--.  .--' #
   |  |    #
   |  |    #
   |  |    #
   \`--'    ##
             #
             #
 ,--. ,--.   #
 |  | |  |   #
 |  | | .-') #
 |  |_|( OO )#
 |  | | \`-' /#
('  '-'(_.-' #
  \`-----'    ##
      (\`-.   #
    _(OO  )_ #
,--(_/   ,. \\#
\\   \\   /(__/#
 \\   \\ /   / #
  \\   '   /, #
   \\     /__)#
    \\   /    #
     \`-'     ##
  (\`\\ .-') /\`#
   \`.( OO ),'#
,--./  .--.  #
|      |  |  #
|  |   |  |, #
|  |.'.|  |_)#
|         |  #
|   ,'.   |  #
'--'   '--'  ##
) (\`-.      #
 ( OO ).    #
(_/.  \\_)-. #
 \\  \`.'  /  #
  \\     /\\  #
   \\   \\ |  #
  .'    \\_) #
 /  .'.  \\  #
'--'   '--' ##
             #
             #
  ,--.   ,--.#
   \\  \`.'  / #
 .-')     /  #
(OO  \\   /   #
 |   /  /\\_  #
 \`-./  /.__) #
   \`--'      ##
   .-') _  #
  (  OO) ) #
,(_)----.  #
|       |  #
'--.   /   #
(_/   /    #
 /   /___  #
|        | #
\`--------' ##
,----. #
|    | #
|  .-' #
|  |   #
|  |   #
|  |   #
|  '-. #
|    | #
\`----' ##
,-.       #
\\ \\       #
 \\ \\      #
  \\ \\     #
   \\ \\    #
    \\ \\   #
     \\ \\  #
      \\ \\ #
      \`-' ##
,----. #
|    | #
\`-.  | #
  |  | #
  |  | #
  |  | #
.-'  | #
|    | #
\`----' ##
          #
          #
  ,---.   #
 /  \\  \\  #
\`--' \`--' #
          #
          #
          #
          ##
          #
          #
          #
          #
          #
  (\`-.    #
 (OO  )_  #
,------.) #
\`------'  ##
       #
       #
,--.   #
'.  \\  #
  \`--' #
       #
       #
       #
       ##
   ('-.     #
  ( OO ).-. #
  / . --. / #
  | \\-.  \\  #
.-'-'  |  | #
 \\| |_.'  | #
  |  .-.  | #
  |  | |  | #
  \`--' \`--' ##
.-. .-')   #
\\  ( OO )  #
 ;-----.\\  #
 | .-.  |  #
 | '-' /_) #
 | .-. \`.  #
 | |  \\  | #
 | '--'  / #
 \`------'  ##
            #
            #
   .-----.  #
  '  .--./  #
  |  |('-.  #
 /_) |OO  ) #
 ||  |\`-'|  #
(_'  '--'\\  #
   \`-----'  ##
 _ .-') _   #
( (  OO) )  #
 \\     .'_  #
 ,\`'--..._) #
 |  |  \\  ' #
 |  |   ' | #
 |  |   / : #
 |  '--'  / #
 \`-------'  ##
   ('-.   #
 _(  OO)  #
(,------. #
 |  .---' #
 |  |     #
(|  '--.  #
 |  .--'  #
 |  \`---. #
 \`------' ##
            #
            #
   ,------. #
('-| _.---' #
(OO|(_\\     #
/  |  '--.  #
\\_)|  .--'  #
  \\|  |_)   #
   \`--'     ##
             #
             #
  ,----.     #
 '  .-./-')  #
 |  |_( O- ) #
 |  | .--, \\ #
(|  | '. (_/ #
 |  '--'  |  #
  \`------'   ##
 ('-. .-. #
( OO )  / #
,--. ,--. #
|  | |  | #
|   .|  | #
|       | #
|  .-.  | #
|  | |  | #
\`--' \`--' ##
          #
          #
  ,-.-')  #
  |  |OO) #
  |  |  \\ #
  |  |(_/ #
 ,|  |_.' #
(_|  |    #
  \`--'    ##
          #
          #
     ,--. #
 .-')| ,| #
( OO |(_| #
| \`-'|  | #
,--. |  | #
|  '-'  / #
 \`-----'  ##
.-. .-')   #
\\  ( OO )  #
,--. ,--.  #
|  .'   /  #
|      /,  #
|     ' _) #
|  .   \\   #
|  |\\   \\  #
\`--' '--'  ##
           #
           #
 ,--.      #
 |  |.-')  #
 |  | OO ) #
 |  |\`-' | #
(|  '---.' #
 |      |  #
 \`------'  ##
 _   .-')    #
( '.( OO )_  #
 ,--.   ,--.)#
 |   \`.'   | #
 |         | #
 |  |'.'|  | #
 |  |   |  | #
 |  |   |  | #
 \`--'   \`--' ##
     .-') _  #
    ( OO ) ) #
,--./ ,--,'  #
|   \\ |  |\\  #
|    \\|  | ) #
|  .     |/  #
|  |\\    |   #
|  | \\   |   #
\`--'  \`--'   ##
             #
             #
 .-'),-----. #
( OO'  .-.  '#
/   |  | |  |#
\\_) |  |\\|  |#
  \\ |  | |  |#
   \`'  '-'  '#
     \`-----' ##
   _ (\`-.  #
  ( (OO  ) #
 _.\`     \\ #
(__...--'' #
 |  /  | | #
 |  |_.' | #
 |  .___.' #
 |  |      #
 \`--'      ##
     .-')    #
   .(  OO)   #
  (_)---\\_)  #
  '  .-.  '  #
 ,|  | |  |  #
(_|  | |  |  #
  |  | |  |  #
  '  '-'  '-.#
   \`-----'--'##
 _  .-')   #
( \\( -O )  #
 ,------.  #
 |   /\`. ' #
 |  /  | | #
 |  |_.' | #
 |  .  '.' #
 |  |\\  \\  #
 \`--' '--' ##
  .-')    #
 ( OO ).  #
(_)---\\_) #
/    _ |  #
\\  :\` \`.  #
 '..\`''.) #
.-._)   \\ #
\\       / #
 \`-----'  ##
 .-') _    #
(  OO) )   #
/     '._  #
|'--...__) #
'--.  .--' #
   |  |    #
   |  |    #
   |  |    #
   \`--'    ##
             #
             #
 ,--. ,--.   #
 |  | |  |   #
 |  | | .-') #
 |  |_|( OO )#
 |  | | \`-' /#
('  '-'(_.-' #
  \`-----'    ##
      (\`-.   #
    _(OO  )_ #
,--(_/   ,. \\#
\\   \\   /(__/#
 \\   \\ /   / #
  \\   '   /, #
   \\     /__)#
    \\   /    #
     \`-'     ##
  (\`\\ .-') /\`#
   \`.( OO ),'#
,--./  .--.  #
|      |  |  #
|  |   |  |, #
|  |.'.|  |_)#
|         |  #
|   ,'.   |  #
'--'   '--'  ##
) (\`-.      #
 ( OO ).    #
(_/.  \\_)-. #
 \\  \`.'  /  #
  \\     /\\  #
   \\   \\ |  #
  .'    \\_) #
 /  .'.  \\  #
'--'   '--' ##
             #
             #
  ,--.   ,--.#
   \\  \`.'  / #
 .-')     /  #
(OO  \\   /   #
 |   /  /\\_  #
 \`-./  /.__) #
   \`--'      ##
   .-') _  #
  (  OO) ) #
,(_)----.  #
|       |  #
'--.   /   #
(_/   /    #
 /   /___  #
|        | #
\`--------' ##
   ,--. #
  |   | #
  |  .' #
 .'  /  #
<   <   #
 \`.  \\  #
  |  '. #
  |   | #
   \`--' ##
,-. #
| | #
| | #
| | #
| | #
| | #
| | #
| | #
\`-' ##
,--.    #
|   |   #
'.  |   #
  \\  \`  #
   >  > #
  /  .  #
.'  |   #
|   |   #
\`--'    ##
           #
      .--, #
  .--'  /  #
 /  ---\`   #
\`--'       #
           #
           #
           #
           ##
   ('-.     #
  ( OO ).-. #
  / . --. / #
  | \\-.  \\  #
.-'-'  |  | #
 \\| |_.'  | #
  |  .-.  | #
  |  | |  | #
  \`--' \`--' ##
             #
             #
 .-'),-----. #
( OO'  .-.  '#
/   |  | |  |#
\\_) |  |\\|  |#
  \\ |  | |  |#
   \`'  '-'  '#
     \`-----' ##
             #
             #
 ,--. ,--.   #
 |  | |  |   #
 |  | | .-') #
 |  |_|( OO )#
 |  | | \`-' /#
('  '-'(_.-' #
  \`-----'    ##
   ('-.     #
  ( OO ).-. #
  / . --. / #
  | \\-.  \\  #
.-'-'  |  | #
 \\| |_.'  | #
  |  .-.  | #
  |  | |  | #
  \`--' \`--' ##
             #
             #
 .-'),-----. #
( OO'  .-.  '#
/   |  | |  |#
\\_) |  |\\|  |#
  \\ |  | |  |#
   \`'  '-'  '#
     \`-----' ##
             #
             #
 ,--. ,--.   #
 |  | |  |   #
 |  | | .-') #
 |  |_|( OO )#
 |  | | \`-' /#
('  '-'(_.-' #
  \`-----'    ##
�#
 #
 #
 #
 #
 #
 #
 #
 ##
0xCA0  KANNADA LETTER TTHA
          #
          #
  _ _ _ _)#
 |______/ #
 ,-----.  #
'  .-.  ' #
|  | |  | #
'  '-'  ' #
 \`-----'  ##`,Up=`flf2a$ 6 5 32 15 10
Font name is graffiti.flf
This figlet font designed by Leigh Purdie (purdie@zeus.usq.edu.au)
'fig-fonted' by Leigh Purdie and Tim Maggio (tim@claremont.com)
Date: 5 Mar 1994

---

Font modified May 20, 2012 by patorjk 
- Changed the hardblanks around certain punctuation characters (., and -) to improve smushing.
- Added the 0xCA0 character
$@
$@
$@
$@
$@
$@@
._.@
| |@
| |@
 \\|@
 __@
 \\/@@
/\\/\\@
)/)/@
    @
    @
    @
    @@
   _  _   @
__| || |__@
\\   __   /@
 |  ||  | @
/_  ~~  _\\@
  |_||_|  @@
  ____/\\__@
 /   / /_/@
 \\__/ / \\ @
 / / /   \\@
/_/ /__  /@
  \\/   \\/ @@
 _   /\\ @
/ \\ / / @
\\_// /_ @
  / // \\@
 / / \\_/@
 \\/     @@
  ____   @
 /  _ \\  @
 >  _ </\\@
/  <_\\ \\/@
\\_____\\ \\@
       \\/@@
/\\@
)/@
  @
  @
  @
  @@
$   ___$@
$  /  /$@
$ /  / $@
$(  (  $@
$ \\  \\ $@
$  \\__\\$@@
$___   $@
$\\  \\  $@
$ \\  \\ $@
$  )  )$@
$ /  / $@
$/__/  $@@
$         $@
$ /\\|\\/\\  $@
$_)    (__$@
$\\_     _/$@
$  )    \\ $@
$  \\/\\|\\/ $@@
$          $@
$   .__    $@
$ __|  |___$@
$/__    __/$@
$   |__|   $@
$          $@@
    @
    @
    @
    @
$/\\$@
$)/$@@
         @
         @
$ ______$@
$/_____/$@
$       $@
         @@
    @
    @
    @
    @
$/\\$@
$\\/$@@
$    /\\$@
$   / /$@
$  / / $@
$ / /  $@
$/ /   $@
$\\/    $@@
_______   @
\\   _  \\  @
/  /_\\  \\ @
\\  \\_/   \\@
 \\_____  /@
       \\/ @@
 ____ @
/_   |@
 |   |@
 |   |@
 |___|@
      @@
________  @
\\_____  \\ @
 /  ____/ @
/       \\ @
\\_______ \\@
        \\/@@
________  @
\\_____  \\ @
  _(__  < @
 /       \\@
/______  /@
       \\/ @@
   _____  @
  /  |  | @
 /   |  |_@
/    ^   /@
\\____   | @
     |__| @@
 .________@
 |   ____/@
 |____  \\ @
 /       \\@
/______  /@
       \\/ @@
  ________@
 /  _____/@
/   __  \\ @
\\  |__\\  \\@
 \\_____  /@
       \\/ @@
_________ @
\\______  \\@
    /    /@
   /    / @
  /____/  @
          @@
  ______  @
 /  __  \\ @
 >      < @
/   --   \\@
\\______  /@
       \\/ @@
 ________ @
/   __   \\@
\\____    /@
   /    / @
  /____/  @
          @@
$  $@
$/\\$@
$\\/$@
$/\\$@
$\\/$@
$  $@@
$  $@
$/\\$@
$\\/$@
$/\\$@
$)/$@
$  $@@
$  __$@
$ / /$@
$/ / $@
$\\ \\ $@
$ \\_\\$@
$    $@@
$       $@
$ ______$@
$/_____/$@
$/_____/$@
$       $@
$       $@@
$__  $@
$\\ \\ $@
$ \\ \\$@
$ / /$@
$/_/ $@
$    $@@
_________ @
\\_____   \\@
   /   __/@
  |   |   @
  |___|   @
  <___>   @@
   _____  @
  / ___ \\ @
 / / ._\\ \\@
<  \\_____/@
 \\_____\\  @
          @@
   _____   @
  /  _  \\  @
 /  /_\\  \\ @
/    |    \\@
\\____|__  /@
        \\/ @@
__________ @
\\______   \\@
 |    |  _/@
 |    |   \\@
 |______  /@
        \\/ @@
_________  @
\\_   ___ \\ @
/    \\  \\/ @
\\     \\____@
 \\______  /@
        \\/ @@
________   @
\\______ \\  @
 |    |  \\ @
 |    \`   \\@
/_______  /@
        \\/ @@
___________@
\\_   _____/@
 |    __)_ @
 |        \\@
/_______  /@
        \\/ @@
___________@
\\_   _____/@
 |    __)  @
 |     \\   @
 \\___  /   @
     \\/    @@
  ________ @
 /  _____/ @
/   \\  ___ @
\\    \\_\\  \\@
 \\______  /@
        \\/ @@
  ___ ___  @
 /   |   \\ @
/    ~    \\@
\\    Y    /@
 \\___|_  / @
       \\/  @@
.___ @
|   |@
|   |@
|   |@
|___|@
     @@
     ____.@
    |    |@
    |    |@
/\\__|    |@
\\________|@
          @@
 ____  __.@
|    |/ _|@
|      <  @
|    |  \\ @
|____|__ \\@
        \\/@@
.____     @
|    |    @
|    |    @
|    |___ @
|_______ \\@
        \\/@@
   _____   @
  /     \\  @
 /  \\ /  \\ @
/    Y    \\@
\\____|__  /@
        \\/ @@
 _______   @
 \\      \\  @
 /   |   \\ @
/    |    \\@
\\____|__  /@
        \\/ @@
________   @
\\_____  \\  @
 /   |   \\ @
/    |    \\@
\\_______  /@
        \\/ @@
__________ @
\\______   \\@
 |     ___/@
 |    |    @
 |____|    @
           @@
________   @
\\_____  \\  @
 /  / \\  \\ @
/   \\_/.  \\@
\\_____\\ \\_/@
       \\__>@@
__________ @
\\______   \\@
 |       _/@
 |    |   \\@
 |____|_  /@
        \\/ @@
  _________@
 /   _____/@
 \\_____  \\ @
 /        \\@
/_______  /@
        \\/ @@
___________@
\\__    ___/@
  |    |   @
  |    |   @
  |____|   @
           @@
 ____ ___ @
|    |   \\@
|    |   /@
|    |  / @
|______/  @
          @@
____   ____@
\\   \\ /   /@
 \\   Y   / @
  \\     /  @
   \\___/   @
           @@
 __      __ @
/  \\    /  \\@
\\   \\/\\/   /@
 \\        / @
  \\__/\\  /  @
       \\/   @@
____  ___@
\\   \\/  /@
 \\     / @
 /     \\ @
/___/\\  \\@
      \\_/@@
_____.___.@
\\__  |   |@
 /   |   |@
 \\____   |@
 / ______|@
 \\/       @@
__________@
\\____    /@
  /     / @
 /     /_ @
/_______ \\@
        \\/@@
$.____ $@
$|   _|$@
$|  |  $@
$|  |  $@
$|  |_ $@
$|____|$@@
/\\    @
\\ \\   @
 \\ \\  @
  \\ \\ @
   \\ \\@
    \\/@@
$ ____.$@
$|_   |$@
$  |  |$@
$  |  |$@
$ _|  |$@
$|____|$@@
$ /\\ $@
$/  \\$@
$\\/\\/$@
$    $@
$    $@
$    $@@
       @
       @
       @
       @
 ______@
/_____/@@
/\\@
\\(@
  @
  @
  @
  @@
        @
_____   @
\\__  \\  @
 / __ \\_@
(____  /@
     \\/ @@
___.    @
\\_ |__  @
 | __ \\ @
 | \\_\\ \\@
 |___  /@
     \\/ @@
        @
  ____  @
_/ ___\\ @
\\  \\___ @
 \\___  >@
     \\/ @@
    .___@
  __| _/@
 / __ | @
/ /_/ | @
\\____ | @
     \\/ @@
        @
  ____  @
_/ __ \\ @
\\  ___/ @
 \\___  >@
     \\/ @@
  _____ @
_/ ____\\@
\\   __\\ @
 |  |   @
 |__|   @
        @@
         @
   ____  @
  / ___\\ @
 / /_/  >@
 \\___  / @
/_____/  @@
.__     @
|  |__  @
|  |  \\ @
|   Y  \\@
|___|  /@
     \\/ @@
.__ @
|__|@
|  |@
|  |@
|__|@
    @@
     __ @
    |__|@
    |  |@
    |  |@
/\\__|  |@
\\______|@@
 __    @
|  | __@
|  |/ /@
|    < @
|__|_ \\@
     \\/@@
.__   @
|  |  @
|  |  @
|  |__@
|____/@
      @@
         @
  _____  @
 /     \\ @
|  Y Y  \\@
|__|_|  /@
      \\/ @@
        @
  ____  @
 /    \\ @
|   |  \\@
|___|  /@
     \\/ @@
        @
  ____  @
 /  _ \\ @
(  <_> )@
 \\____/ @
        @@
        @
______  @
\\____ \\ @
|  |_> >@
|   __/ @
|__|    @@
        @
  ______@
 / ____/@
< <_|  |@
 \\__   |@
    |__|@@
        @
_______ @
\\_  __ \\@
 |  | \\/@
 |__|   @
        @@
        @
  ______@
 /  ___/@
 \\___ \\ @
/____  >@
     \\/ @@
  __   @
_/  |_ @
\\   __\\@
 |  |  @
 |__|  @
       @@
       @
 __ __ @
|  |  \\@
|  |  /@
|____/ @
       @@
       @
___  __@
\\  \\/ /@
 \\   / @
  \\_/  @
       @@
         @
__  _  __@
\\ \\/ \\/ /@
 \\     / @
  \\/\\_/  @
         @@
        @
___  ___@
\\  \\/  /@
 >    < @
/__/\\_ \\@
      \\/@@
        @
 ___.__.@
<   |  |@
 \\___  |@
 / ____|@
 \\/     @@
        @
________@
\\___   /@
 /    / @
/_____ \\@
      \\/@@
$ ___$@
$/ / $@
$\\ \\ $@
$< < $@
$/ / $@
$\\_\\_$@@
$._.$@
$| |$@
$|_|$@
$|-|$@
$| |$@
$|_|$@@
$___ $@
$ \\ \\$@
$ / /$@
$ > >$@
$ \\ \\$@
$_/_/$@@
$ ___    $@
$/ _ \\_/\\$@
$\\/ \\___/$@
$        $@
$        $@
$        $@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
@
@
@
@
@
@@
0xCA0  KANNADA LETTER TTHA
  _____)@
 /_____/@
 /    \\ @
(  ()  )@
$\\____/$@
        @@`,Pp=`flf2a$ 10 7 23 0 7
hollywood.flf by Juan Car (jc@juguete.quim.ucm.es)
version 1.0 -- 5/Mar/94

Uses spanish character set with -D option:
                                                     _         _
[ = a'   \\ = e'    ] = i'    { = o'    | = u'    } = n     ~ = N

            $@
            $@
          $ $@
        $ $  @
      $ $    @
    $ $      @
  $ $        @
$ $          @
$            @
$            @@
           $$@
         $ /'@
       $ /' $@
     $ /' $  @
   $ /' $    @
 $ /' $      @
$O  $        @
$ $          @
$            @
             @@
   $   $@
 $/'  /'@
$'   ' $@
$    $  @
$  $    @
$$      @
$       @
$       @
$       @
$       @@
            $   $@
         $      $@
       $ /'    /'@
     $-/'----/'-$@
   $ /'    /' $  @
 $-/'----/'-$    @
$/'    /' $      @
$       $        @
$     $          @
$   $            @@
           $_   /@
         $/' \`/'$@
       $/'  /'_)$@
     $ (__/_  $  @
   $    /'  )    @
 $    /'  /'$    @
$(__/__,/'$      @
$ /'    $        @
$     $          @
$   $            @@
        $@
      $ $@
    $   $@
  $ O  /'@
$    /' $@
$  /'   $@
$/'  O$  @
$   $    @
$ $      @
$        @@
          $ $@
        $   $@
      $  .-~)@
    $   ;_.~$@
  $__--~|   $@
$,~     |__ $@
$\`.__--~\`.$  @
$       $    @
$     $      @
$   $        @@
  $$@
$ /'@
$' $@
$$  @
$   @
$   @
$   @
$   @
$   @
$   @@
           $_$@
         $/' \`@
       $/'   $@
     $/'   $  @
   $/'   $    @
 $/'   $      @
$(_, $        @
$  $          @
$$            @
$             @@
           $_$@
         $ ' )@
       $   /'$@
     $   /'$  @
   $   /'$    @
 $   /'$      @
$(,/'$        @
$  $          @
$$            @
$             @@
        $@
      $ $@
    $   ,@
  $\\   /_@
$___\\/_~_@
$_-/'\\  $@
$/'   \\$ @
$    $   @
$  $     @
$$       @@
        $@
      $ $@
    $   $@
  $    /'@
$___ /___@
$  /'   $@
$/'   $  @
$   $    @
$ $      @
$        @@
   $@
   $@
   $@
   $@
   $@
  $$@
$ /$@
$'$ @
$   @
$   @@
       $@
      $$@
    $  $@
  $    $@
$_______@
$      $@
$    $  @
$  $    @
$$      @
$       @@
 $@
 $@
 $@
 $@
 $@
 $@
$O@
$$@
$ @
$ @@
            $@
          $/'@
        $/' $@
      $/' $  @
    $/' $    @
  $/' $      @
$/' $        @
$ $          @
$            @
$            @@
           $_  $@
         $/' \`\\$@
       $/'     )@
     $/'      /'@
   $/'      /' $@
 $/'      /' $  @
$(_____,/' $    @
$        $      @
$      $        @
$    $          @@
          $_$@
      $_--~/'@
     $~  /' $@
   $   /' $  @
 $   /' $    @
$  /' $      @
$/' $        @
$ $          @
$            @
$            @@
        $_  $@
     $_-~ \`\\$@
    $(      )@
  $      _/~$@
$     _/~   $@
$  _/~     $ @
$/~____,/$   @
$      $     @
$    $       @
$  $         @@
           $_  $@
         $/' \`\\$@
       $      _)@
     $  .__--~ $@
   $       ;  $ @
 $        /'$   @
$(_____,/'$     @
$       $       @
$     $         @
$   $           @@
      $   _$@
   $  _--~/'@
 $_--~  /' $@
$-~____/__$ @
$    /' $   @
$  /' $     @
$/' $       @
$ $         @
$           @
$           @@
           $_  $@
         $/' \`\\$@
       $/'     \`@
     $ (____   $@
   $        )$  @
 $        /'$   @
$(_____,/'$     @
$       $       @
$     $         @
$   $           @@
           $_  $@
         $/' \`\\$@
       $/'     )@
     $/_____   $@
   $/'      )$  @
 $/'      /'$   @
$(_____,/'$     @
$       $       @
$     $         @
$   $           @@
         $_______@
       $ (     _/@
     $      _/~ $@
   $    \\_/~  $  @
 $    _/~\\  $    @
$  _/~    $      @
$/~     $        @
$     $          @
$   $            @
$ $              @@
           $_  $@
         $/' \`\\$@
       $/'     )@
     $_(_____,/$@
   $/'     ) $  @
 $/'      /'$   @
$(_____,/'$     @
$       $       @
$     $         @
$   $           @@
     $_  $@
   $/' \`\\$@
 $/'     )@
$(_____ /$@
$     /'$ @
$   /'$   @
$ /'$     @
$ $       @
$         @
$         @@
     $@
     $@
     $@
     $@
    $O@
  $  $@
$O $  @
$$    @
$     @
$     @@
     $@
     $@
     $@
     $@
    $O@
  $  $@
$ / $ @
$'$   @
$     @
$     @@
      $@
      $@
     $$@
   $_/'@
 $/~  $@
$\`\\  $ @
$  \\$  @
$ $    @
$      @
$      @@
         $@
        $$@
      $  $@
    $    $@
  $-------@
$_______ $@
$      $  @
$    $    @
$  $      @
$$        @@
      $@
      $@
     $$@
   $\\ $@
   $ \\$@
  $ _/'@
$,/~  $@
$   $  @
$ $    @
$      @@
     $ _  $@
   $_-~ \`\\$@
  $(      )@
  $    _,/'@
  $  /'   $@
  $/'   $  @
$O    $    @
$   $      @
$ $        @
$          @@
           $_  $@
         $/' \`\\$@
       $/'     )@
     $/' _    /'@
   $/' /' ) /' $@
 $/'  \`--\`-' $  @
$(_____,   $    @
$        $      @
$      $        @
$    $          @@
              ,@
            /'/@
          /' / @
       ,/'  /  @
      /\`--,/   @
    /'    /    @
(,/'     (_,   @
               @
               @
               @@
              _   @
            /' \`\\ @
          /'     )@
        /' (___,/'@
      /'     )    @
    /'      /'    @
(,/' (___,/'      @
                  @
                  @
                  @@
           _   @
         /' \`\\ @
       /'   ._)@
     /'        @
   /'          @
 /'            @
(_____,/'      @
               @
               @
               @@
              _   @
            /' \`\\ @
          /'     )@
        /'      /'@
      /'      /'  @
    /'      /'    @
(,/' (___,/'      @
                  @
                  @
                  @@
           _   @
         /' \`\\ @
       /'   ._)@
      (___     @
   _-~    \`    @
 /'            @
(_____,        @
               @
               @
               @@
              _   @
            /' \`\\ @
          /'   ._)@
       ,/'        @
      /\`---,      @
    /'            @
(,/'              @
                  @
                  @
                  @@
           _   @
         /' \`\\ @
       /'     )@
     /'        @
   /'   _      @
 /'    ' )     @
(_____,/'      @
               @
               @
               @@
           _       @
          ' )     )@
          /'    /' @
       ,/'    /'   @
      /\`---,/'     @
    /'    /'       @
(,/'     (_,       @
                   @
                   @
                   @@
           _  _ @
          ' /' \`@
          /'    @
        /'      @
      /'        @
    /'          @
(,/(_,          @
                @
                @
                @@
           _______ @
          (,     /'@
               /'  @
             /'    @
   _       /'      @
 /' \`    /'        @
(_____,/'          @
                   @
                   @
                   @@
           _      @
          ' )   _/@
          /' _/~  @
        /'_/~     @
      /\\/~        @
    /'  \\         @
(,/'     \\_,      @
                  @
                  @
                  @@
              _ @
            /~_)@
        ~-/'-~  @
        /'      @
      /'        @
 /~\\,'   _      @
(,/'\`\\____)     @
                @
                @
                @@
           _        @
          ' )     _)@
          //  _/~/' @
        /'/_/~ /'   @
      /' /~  /'     @
    /'     /'       @
(,/'      (_,       @
                    @
                    @
                    @@
           _      @
          ' )    )@
          //   /' @
        /'/  /'   @
      /' / /'     @
    /'  //'       @
(,/'    (_,       @
                  @
                  @
                  @@
           _   @
         /' \`\\ @
       /'     )@
     /'      /'@
   /'      /'  @
 /'      /'    @
(_____,/'      @
               @
               @
               @@
              _   @
            /' \`\\ @
          /'     )@
        /' (___,/'@
      /'          @
    /'            @
(,/'              @
                  @
                  @
                  @@
           _   @
         /' \`\\ @
       /'     )@
     /'      /'@
   /'   _  /'  @
 /'    ' )'    @
(_____,/(_,    @
               @
               @
               @@
              _   @
            /' \`\\ @
          /'     )@
        /' (___,/'@
      /'   ;      @
    /'    /'      @
(,/'     (_,      @
                  @
                  @
                  @@
           _   @
         /' \`\\ @
       /'   ._)@
      (____    @
           )   @
         /'    @
(_____,/'      @
               @
               @
               @@
      __        @
     (  ~-_ /'  @
          /\`-__)@
        /'      @
      /'        @
    /'          @
(,/(_,          @
                @
                @
                @@
        _         @
       ' )       )@
       /'      /' @
     /'      /'   @
   /'      /'     @
 /'      /'       @
(_____,/'         @
                  @
                  @
                  @@
    _         @
   ' )       )@
    /      _/ @
   /    _/~   @
  /  _/~      @
 /_/~         @
/~            @
              @
              @
              @@
    _                @
   ' )       )      )@
    /      _/      / @
   /    _/~/    _/~  @
  /  _/~  /  _/~     @
 /_/~    /_/~        @
/~      /~           @
                     @
                     @
                     @@
       _         @
      ' |       )@
        |    _/~ @
         |_/~    @
       _/|       @
    _/~   |      @
(,/~      (_,    @
                 @
                 @
                 @@
    _        @
   ' \\      )@
      \\   /' @
       \\/'   @
      /'     @
    /'       @
(,/(_,       @
             @
             @
             @@
        _____ @
       (,    )@
          _/~ @
       _/~    @
    _/~       @
 _/~  _       @
(______)      @
              @
              @
              @@
            $_____@
          $/'    $@
        $/'    $  @
      $/'    $    @
    $/'    $      @
  $/'    $        @
$/_____$          @
$    $            @
$  $              @
$$                @@
   $@
$| $@
$| $@
$ |$@
$ |$@
$  |@
$  |@
$  $@
$$  @
$   @@
           $______$@
         $       /'@
       $       /' $@
     $       /' $  @
   $       /' $    @
 $       /' $      @
$______/' $        @
$       $          @
$     $            @
$   $              @@
     $_/|$@
  $_/~  |$@
$/~      |@
$        $@
$      $  @
$    $    @
$  $      @
$$        @
$         @
$         @@
      $@
      $@
      $@
      $@
    $ $@
  $   $@
$     $@
-------@
$     $@
$   $  @@
|$@
$|@
$\`@
$$@
$ @
$ @
$ @
$ @
$ @
$ @@
          @
          @
          @
     ____ @
   /'    )@
 /'    /' @
(___,/(__ @
          @
          @
          @@
           @
         /'@
       /'  @
     /'__  @
   /'    ) @
 /'    /'  @
(___,/(__  @
           @
           @
           @@
            @
            @
            @
     ____   @
   /'    )--@
 /'         @
(___,/      @
            @
            @
            @@
                 @
               /'@
             /'  @
     _____,/'    @
   /'    /'      @
 /'    /'        @
(___,/(__        @
                 @
                 @
                 @@
          @
          @
          @
     ____ @
   /'    )@
 /(___,/' @
(________ @
          @
          @
          @@
                 @
                 @
              /')@
            /' /'@
         -/'--'  @
        /'       @
      /(_____    @
    /'           @
  /'             @
/'               @@
                @
                @
                @
           ____ @
         /'    )@
       /'    /' @
      (___,/(__ @
         /'     @
 /     /'       @
(___,/'         @@
            @
          /'@
        /'  @
      /'__  @
    /'    ) @
  /'    /'  @
/'    /(__  @
            @
            @
            @@
      @
      @
      @
     O@
   /' @
 /'   @
(__   @
      @
      @
      @@
               @
               @
               @
              O@
            /' @
          /'   @
        /(__   @
      /'       @
    /'         @
(,/'           @@
                @
          /'  _/@
        /' _/~  @
     ,/'_/~     @
    /\\/~        @
  /'  \\         @
/'     \\        @
                @
                @
                @@
           @
         /'@
       /'  @
     /'    @
   /'      @
 /'        @
(__        @
           @
           @
           @@
                 @
                 @
                 @
     ,__________ @
    /'    )     )@
  /'    /'    /' @
/'    /'    /(__ @
                 @
                 @
                 @@
           @
           @
           @
     ,____ @
    /'    )@
  /'    /' @
/'    /(__ @
           @
           @
           @@
            @
            @
            @
     ____   @
   /'    )--@
 /'    /'   @
(___,/'     @
            @
            @
            @@
                   @
                   @
                   @
            ____   @
          /'    )--@
        /'    /'   @
      /(___,/'     @
    /'             @
  /'               @
/'                 @@
           @
           @
           @
      ____ @
    /'    )@
  /'    /' @
 (___,/(__ @
    /'     @
 -/'-      @
/'         @@
             @
             @
             @
      ____   @
    )'    )--@
  /'         @
/'           @
             @
             @
             @@
            @
            @
            @
     ____   @
   /'    )--@
  '---,     @
(___,/      @
            @
            @
            @@
           @
         /'@
     --/'--@
     /'    @
   /'      @
 /'        @
(__        @
           @
           @
           @@
          @
          @
          @
          @
   /'    /@
 /'    /' @
(___,/(__ @
          @
          @
          @@
        @
        @
        @
 .     ,@
 |    / @
 |  /'  @
_|/(__  @
        @
        @
        @@
            @
            @
            @
 .   . ,   ,@
 |   |/   / @
 |  /|  /'  @
_|/' |/(__  @
            @
            @
            @@
        @
        @
        @
  .    ,@
   \\  / @
    \\'  @
__/' \\_ @
        @
        @
        @@
                @
                @
                @
                @
         /'    /@
       /'    /' @
      (___,/(__ @
         /'     @
 /     /'       @
(___,/'         @@
         @
         @
         @
    ____ @
   '  _/'@
   _/'   @
_/'__,   @
         @
         @
         @@
        $   _$@
      $   /' \`@
    $.__/'   $@
    $|     $  @
   $/'   $    @
 $/'   $      @
$(_, $        @
$  $          @
$$            @
$             @@
            $/@
          $/'$@
        $/' $ @
      $/' $   @
    $/' $     @
  $/' $       @
$/' $         @
$ $           @
$             @
$             @@
           $_$@
         $ ' )@
       $   /'$@
     $    |$  @
   $   ,--\`$  @
 $   /'  $    @
$(,/'  $      @
$    $        @
$  $          @
$$            @@
  $_   $@
$/' |__)@
$      $@
$    $  @
$  $    @
$$      @
$       @
$       @
$       @
$       @@
           @
           @
         /'@
     ____  @
   /'    ) @
 /'    /'  @
(___,/(__  @
$          @
$          @
$          @@
           @
           @
         /'@
     ____  @
   /'    ) @
 /(___,/'  @
(________  @
$          @
$          @
$          @@
         @
         @
       /'@
     ,   @
   /'    @
 /'      @
(__      @
$        @
$        @
$        @@
            @
            @
         /' @
     ____   @
   /'    )--@
 /'    /'   @
(___,/'     @
$           @
$           @
$           @@
           @
           @
         /'@
           @
   /'    / @
 /'    /'  @
(___,/(__  @
$          @
$          @
$          @@
            @
            @
      ,--__,@
     ,____  @
    /'    ) @
  /'    /'  @
/'    /(__  @
$           @
$           @
$           @@
           _-~~--'@
          ' )    )@
          //   /' @
        /'/  /'   @
      /' / /'     @
    /'  //'       @
(,/'    (_,       @
$                 @
$                 @
$                 @@
`,Bp=`flf2a$ 4 3 10 0 3
italic.flf		Version 2
by:  Bas Meijer   meijer@info.win.tue.nl   bas@damek.kth.se
fixed by: Ryan Youck  youck@cs.uregina.ca
$@
$@
$@
 @@
  @
| @
. @
  @@
// @
$$ @
   @
   @@
      @
_|_|_ @
-|-|- @
      @@
 ||_ @
(||$ @
_||) @
 ||  @@
   @
0/ @
/0 @
   @@
    @
()/ @
(X  @
    @@
/ @
$ @
$ @
  @@
$/ @
($ @
$\\ @
   @@
\\$ @
$) @
/$ @
   @@
$  $@
$\\/$@
$/\\$@
$  $@@
$   $@
$_|_$@
$ | $@
$   $@@
 $@
$$@
,$@
 $@@
$  $@
$__$@
$  $@
$  $@@
  $@
$ $@
. $@
  $@@
   @
$/ @
/$ @
   @@
  __  @
 /  ) @
(__/  @
      @@
   @
-/ @
/  @
   @@
 _  @
 _) @
/__ @
    @@
 _  @
 _) @
__) @
    @@
    @
(_/ @
 /  @
    @@
 __ @
/_  @
__) @
    @@
  __ @
 /_  @
(__) @
     @@
___ @
 _/ @
/   @
    @@
  _  @
 (_) @
(__) @
     @@
 __  @
(__) @
__/  @
     @@
  @
. @
. @
  @@
  @
. @
, @
  @@
$ $@
$/$@
$\\$@
$ $@@
$  $@
$__$@
$--$@
$  $@@
$ $@
$\\$@
$/$@
$ $@@
$ _ @
$  )@
$ . @
$   @@
 @
 @
 @
 @@
  _  @
 /_| @
(  | @
     @@
  __  @
 / _) @
/(_)  @
      @@
  _  @
 / ) @
(__  @
     @@
  __  @
 /  ) @
/(_/  @
      @@
 ___ @
(_   @
/__  @
     @@
 ___ @
(_ $ @
/$   @
     @@
  __  @
 / _  @
(__)  @
      @@
      @
 )__/ @
/  /  @
      @@
   @
 / @
(  @
   @@
     @
   / @
(_/  @
     @@
      @
 /__/ @
/  )  @
      @@
    @
 /  @
(__ @
    @@
      @
 /|/| @
/   | @
      @@
      @
 /| ) @
/ |/  @
      @@
  __  @
 /  ) @
(__/  @
      @@
  __  @
 /__) @
/  $  @
      @@
  __  @
 /  ) @
(__\\  @
      @@
  __  @
 /__) @
/ ($  @
      @@
  __ @
 (   @
__)  @
     @@
____ @
 / $ @
(    @
     @@
      @
 /  / @
(__/  @
      @@
     @
(  / @
|_/  @
     @@
      @
(   / @
|/|/  @
      @@
     @
 \\_) @
( \\  @
     @@
     @
(__/ @
 /$  @
     @@
 __ @
 _/ @
/__ @
    @@
 _ @
|$ @
|_ @
   @@
   @
\\  @
 \\ @
   @@
_  @
$| @
_| @
   @@
   @
/\\ @
$$ @
   @@
   @
   @
__ @
   @@
\\ @
$ @
$ @
  @@
   @
 _ @
(/ @
   @@
   @
 / @
() @
   @@
   @
 _ @
($ @
   @@
    @
 _/ @
(/  @
    @@
   @
 _$@
(- @
   @@
 _ @
(_ @
/$ @
   @@
    @
  _ @
 (/ @
_/  @@
   @
 / @
/) @
   @@
   @
 ' @
/  @
   @@
     @
   ' @
  /  @
_/   @@
   @
 / @
/( @
   @@
   @
 / @
(  @
   @@
    @
 _  @
//) @
    @@
   @
   @
/) @
   @@
   @
   @
() @
   @@
    @
    @
 /) @
/   @@
   @
 _ @
(/ @
/  @@
   @
 _ @
/$ @
   @@
    @
 $_ @
_)$ @
    @@
   @
_/ @
/  @
   @@
   @
 $ @
(/ @
   @@
   @
$$ @
\\/ @
   @@
    @
 $$ @
((/ @
    @@
   @
$$ @
)( @
   @@
   @
 $ @
(/ @
/  @@
   @
_  @
/_ @
   @@
( @
< @
( @
  @@
| @
| @
| @
  @@
) @
> @
) @
  @@
    @
/\\/ @
    @
    @@
 o_o @
 /_| @
(  | @
     @@
 o__o @
 /  ) @
(__/  @
      @@
  o  o@
 /  / @
(__/  @
      @@
   @
-_-@
(/ @
   @@
   @
-- @
() @
   @@
   @
- -@
(/ @
   @@
   __  @
  / _) @
 /(_)  @
/      @@
`,Gp=`flf2a$ 10 10 12 -1 9

				  jazmine.flf

	      well, the  original requester might not have liked
	      the sig i diddled for her, but i decided to make a
			 font out of it. so there. :)

			       vampyr@acs.bu.edu

  @
  @
  @
  @
  @
  @
  @
::@
::@
::@@
   @
88 @
88 @
88 @
88 @
\`' @
88 @
...@
:::@
:::@@
    @
8 8 @
' ' @
    @
    @
    @
    @
::::@
::::@
::::@@
       @
       @
       @
.8..8. @
\`8\`'8' @
.8..8. @
\`8\`'8' @
:..:..:@
:::::::@
:::::::@@
      @
      @
  8   @
.8P8. @
\`Y8   @
  8Y. @
\`Yoo' @
:.8 .:@
::...:@
::::::@@
       @
db  .o @
88 .o' @
  .o'  @
 .o'   @
.o' oo @
o'  88 @
..::...@
:::::::@
:::::::@@
       @
       @
  8    @
.oPo.  @
Yo..   @
8o  .  @
\`Y8P'  @
:.8 .::@
::..:::@
:::::::@@
   @
 8 @
 ' @
   @
   @
   @
   @
:::@
:::@
:::@@
  .o @
 d'  @
8'   @
8    @
8    @
8.   @
 Y.  @
:.\`o @
:::..@
:::::@@
o.   @
 \`b  @
  \`8 @
   8 @
   8 @
  .8 @
 .P  @
o'.::@
..:::@
:::::@@
      @
      @
  8   @
o.8.o @
\`Y8P' @
.P8Y. @
" 8 " @
.:...:@
::::::@
::::::@@
      @
      @
  8   @
  8   @
oo8oo @
  8   @
  8   @
::..::@
::::::@
::::::@@
   @
   @
   @
   @
   @
   @
88 @
\`P @
:.:@
:::@@
      @
      @
      @
      @
ooooo @
      @
      @
::::::@
::::::@
::::::@@
   @
   @
   @
   @
   @
   @
88 @
..:@
:::@
:::@@
       @
    .o @
   .o' @
  .o'  @
 .o'   @
.o'    @
o'     @
..:::::@
:::::::@
:::::::@@
       @
.oPYo. @
8  .o8 @
8 .P'8 @
8.d' 8 @
8o'  8 @
\`YooP' @
:.....:@
:::::::@
:::::::@@
   @
.o @
 8 @
 8 @
 8 @
 8 @
 8 @
:..@
:::@
:::@@
       @
.oPYo. @
    \`8 @
   oP' @
.oP'   @
8'     @
8ooooo @
.......@
:::::::@
:::::::@@
       @
.oPYo. @
    \`8 @
  .oP' @
   \`b. @
    :8 @
\`YooP' @
:.....:@
:::::::@
:::::::@@
       @
   .8  @
  d'8  @
 d' 8  @
Pooooo @
    8  @
    8  @
::::..:@
:::::::@
:::::::@@
       @
oooooo @
8      @
8pPYo. @
    \`8 @
    .P @
\`YooP' @
:.....:@
:::::::@
:::::::@@
       @
.pPYo. @
8      @
8oPYo. @
8'  \`8 @
8.  .P @
\`YooP' @
:.....:@
:::::::@
:::::::@@
       @
oooooo @
   .o' @
  .o'  @
 .o'   @
.o'    @
o'     @
..:::::@
:::::::@
:::::::@@
       @
 .PY.  @
 8  8  @
.oPYo. @
8'  \`8 @
8.  .P @
\`YooP' @
:.....:@
:::::::@
:::::::@@
       @
.oPYo. @
8'  \`8 @
8.  .8 @
\`YooP8 @
    .P @
\`YooP' @
:.....:@
:::::::@
:::::::@@
   @
   @
   @
88 @
   @
   @
88 @
..:@
:::@
:::@@
   @
   @
   @
88 @
   @
   @
88 @
\`P @
:.:@
:::@@
      @
  .o' @
 .o'  @
.o'   @
\`b.   @
 \`b.  @
  \`b. @
:::...@
::::::@
::::::@@
      @
      @
      @
ooooo @
      @
ooooo @
      @
::::::@
::::::@
::::::@@
      @
\`o.   @
 \`o.  @
  \`o. @
  .P' @
 .P'  @
.P'   @
..::::@
::::::@
::::::@@
       @
.oPYo. @
\`\`  \`8 @
   .oP @
  dP   @
       @
  88   @
::...::@
:::::::@
:::::::@@
       @
  dYo. @
.P' .8 @
8 dP'8 @
8 8ooP @
8   .. @
\`YooP' @
:.....:@
:::::::@
:::::::@@
         @
     .oo @
    .P 8 @
   .P  8 @
  oPooo8 @
 .P    8 @
.P     8 @
..:::::..@
:::::::::@
:::::::::@@
        @
 .oPYo. @
 8   \`8 @
o8YooP' @
 8   \`b @
 8    8 @
 8oooP' @
:......:@
::::::::@
::::::::@@
       @
.oPYo. @
8    8 @
8      @
8      @
8    8 @
\`YooP' @
:.....:@
:::::::@
:::::::@@
       @
ooo.   @
8  \`8. @
8   \`8 @
8    8 @
8   .P @
8ooo'  @
.....::@
:::::::@
:::::::@@
       @
.oPYo. @
8.     @
\`boo   @
.P     @
8      @
\`YooP' @
:.....:@
:::::::@
:::::::@@
       @
 ooooo @
 8     @
o8oo   @
 8     @
 8     @
 8     @
:..::::@
:::::::@
:::::::@@
       @
.oPYo. @
8    8 @
8      @
8   oo @
8    8 @
\`YooP8 @
:....8 @
:::::8 @
:::::..@@
        @
 o    o @
 8    8 @
o8oooo8 @
 8    8 @
 8    8 @
 8    8 @
:..:::..@
::::::::@
::::::::@@
  @
o @
8 @
8 @
8 @
8 @
8 @
..@
::@
::@@
    @
  o @
  8 @
  8 @
  8 @
  8 @
oP' @
...:@
::::@
::::@@
       @
 o   o @
 8  .P @
o8ob'  @
 8  \`b @
 8   8 @
 8   8 @
:..::..@
:::::::@
:::::::@@
      @
o     @
8     @
8     @
8     @
8     @
8oooo @
......@
::::::@
::::::@@
        @
o     o @
8b   d8 @
8\`b d'8 @
8 \`o' 8 @
8     8 @
8     8 @
..::::..@
::::::::@
::::::::@@
       @
o    o @
8b   8 @
8\`b  8 @
8 \`b 8 @
8  \`b8 @
8   \`8 @
..:::..@
:::::::@
:::::::@@
       @
.oPYo. @
8    8 @
8    8 @
8    8 @
8    8 @
\`YooP' @
:.....:@
:::::::@
:::::::@@
        @
 .oPYo. @
 8    8 @
o8YooP' @
 8      @
 8      @
 8      @
:..:::::@
::::::::@
::::::::@@
        @
.oPYo.  @
8    8  @
8    8  @
8  d.8  @
8  \`b8. @
\`YooP'P @
:....:.:@
::::::::@
::::::::@@
        @
 .oPYo. @
 8   \`8 @
o8YooP' @
 8   \`b @
 8    8 @
 8    8 @
:..:::..@
::::::::@
::::::::@@
       @
.oPYo. @
8      @
\`Yooo. @
    \`8 @
     8 @
\`YooP' @
:.....:@
:::::::@
:::::::@@
      @
ooooo @
  8   @
  8   @
  8   @
  8   @
  8   @
::..::@
::::::@
::::::@@
       @
o    o @
8    8 @
8    8 @
8    8 @
8    8 @
\`YooP' @
:.....:@
:::::::@
:::::::@@
        @
o     o @
8     8 @
8     8 @
\`b   d' @
 \`b d'  @
  \`8'   @
:::..:::@
::::::::@
::::::::@@
         @
o      o @
8      8 @
8      8 @
8  db  8 @
\`b.PY.d' @
 \`8  8'  @
::..:..::@
:::::::::@
:::::::::@@
         @
 o    o  @
 \`b  d'  @
  \`bd'   @
  .PY.   @
 .P  Y.  @
.P    Y. @
..::::..:@
:::::::::@
:::::::::@@
      @
o   o @
\`b d' @
 \`b'  @
  8   @
  8   @
  8   @
::..::@
::::::@
::::::@@
       @
oooooo @
    d' @
   d'  @
  d'   @
 d'    @
dooooo @
.......@
:::::::@
:::::::@@
oooo @
8    @
8    @
8    @
8    @
8    @
8    @
8ooo @
.....@
:::::@@
        @
o.      @
\`o.     @
 \`o.    @
  \`o.   @
   \`o.  @
    \`o. @
:::::..:@
::::::::@
::::::::@@
oooo @
   8 @
   8 @
   8 @
   8 @
   8 @
   8 @
ooo8 @
.....@
:::::@@
  .o.   @
 .d'b.  @
.d' \`b. @
        @
        @
        @
        @
::::::::@
::::::::@
::::::::@@
     @
     @
     @
     @
     @
     @
     @
oooo @
.....@
:::::@@
   @
8. @
\`b @
   @
   @
   @
   @
:::@
:::@
:::@@
       @
       @
       @
.oPYo. @
.oooo8 @
8    8 @
\`YooP8 @
:.....:@
:::::::@
:::::::@@
       @
8      @
8      @
8oPYo. @
8    8 @
8    8 @
\`YooP' @
:.....:@
:::::::@
:::::::@@
       @
       @
       @
.oPYo. @
8    ' @
8    . @
\`YooP' @
:.....:@
:::::::@
:::::::@@
       @
     8 @
     8 @
.oPYo8 @
8    8 @
8    8 @
\`YooP' @
:.....:@
:::::::@
:::::::@@
       @
       @
       @
.oPYo. @
8oooo8 @
8.     @
\`Yooo' @
:.....:@
:::::::@
:::::::@@
     @
 d'b @
 8   @
o8P  @
 8   @
 8   @
 8   @
:..::@
:::::@
:::::@@
       @
       @
       @
.oPYo. @
8    8 @
8    8 @
\`YooP8 @
:....8 @
::ooP'.@
::...::@@
       @
8      @
8      @
8oPYo. @
8    8 @
8    8 @
8    8 @
..:::..@
:::::::@
:::::::@@
   @
 o @
   @
o8 @
 8 @
 8 @
 8 @
:..@
:::@
:::@@
   @
 o @
   @
o8 @
 8 @
 8 @
 8 @
:8 @
oP @
..:@@
       @
8      @
8      @
8  .o  @
8oP'   @
8 \`b.  @
8  \`o. @
..::...@
:::::::@
:::::::@@
  @
8 @
8 @
8 @
8 @
8 @
8 @
..@
::@
::@@
        @
        @
        @
ooYoYo. @
8' 8  8 @
8  8  8 @
8  8  8 @
..:..:..@
::::::::@
::::::::@@
      @
      @
      @
odYo. @
8' \`8 @
8   8 @
8   8 @
..::..@
::::::@
::::::@@
       @
       @
       @
.oPYo. @
8    8 @
8    8 @
\`YooP' @
:.....:@
:::::::@
:::::::@@
       @
       @
       @
.oPYo. @
8    8 @
8    8 @
8YooP' @
8 ....:@
8 :::::@
..:::::@@
       @
       @
       @
.oPYo. @
8    8 @
8    8 @
\`YooP8 @
:....8 @
:::::8 @
:::::..@@
      @
      @
      @
oPYo. @
8  \`' @
8     @
8     @
..::::@
::::::@
::::::@@
       @
       @
       @
.oPYo. @
Yb..   @
  'Yb. @
\`YooP' @
:.....:@
:::::::@
:::::::@@
     @
  o  @
  8  @
 o8P @
  8  @
  8  @
  8  @
::..:@
:::::@
:::::@@
       @
       @
       @
o    o @
8    8 @
8    8 @
\`YooP' @
:.....:@
:::::::@
:::::::@@
       @
       @
       @
o    o @
Y.  .P @
\`b..d' @
 \`YP'  @
::...::@
:::::::@
:::::::@@
          @
          @
          @
o   o   o @
Y. .P. .P @
\`b.d'b.d' @
 \`Y' \`Y'  @
::..::..::@
::::::::::@
::::::::::@@
       @
       @
       @
\`o  o' @
 \`bd'  @
 d'\`b  @
o'  \`o @
..:::..@
:::::::@
:::::::@@
       @
       @
       @
o    o @
8    8 @
8    8 @
\`YooP8 @
:....8 @
::ooP'.@
::...::@@
       @
       @
       @
.oooo. @
  .dP  @
 oP'   @
\`Yooo' @
:.....:@
:::::::@
:::::::@@
.oP' @
8    @
8.   @
\`bo  @
.P   @
8    @
8    @
\`Yo. @
:....@
:::::@@
8 @
8 @
8 @
  @
8 @
8 @
8 @
..@
::@
::@@
\`Yo. @
   8 @
  .8 @
 od' @
  Y. @
   8 @
   8 @
.oP' @
....:@
:::::@@
        @
.P\`b.P' @
        @
        @
        @
        @
        @
::::::::@
::::::::@
::::::::@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
`,Vp=`flf2a$ 9 6 30 1 5
larry3d.flf by Larry Gelberg (larryg@avs.com)
(stolen liberally from Juan Car's puffy.flf)
tweaked by Glenn Chappell <ggc@uiuc.edu>
Version 1.2 2/24/94

$$$        @
 $$$       @
  $$$      @
   $$$     @
    $$$    @
     $$$   @
      $$$  @
       $$$ @
        $$$@@
 __     @
/\\ \\    @
\\ \\ \\   @
 \\ \\ \\  @
  \\ \\_\\ @
   \\/\\_\\@
    \\/_/@
        @
        @@
 __ __     @
/\\ \\\\ \\    @
\\ \\_\\\\_\\   @
 \\/_//_/$  @
  $      $ @
   $      $@
           @
           @
           @@
  __ __      @
 _\\ \\\\ \\__   @
/\\__  _  _\\  @
\\/_L\\ \\\\ \\L_ @
  /\\_   _  _\\@
  \\/_/\\_\\\\_\\/@
     \\/_//_/ @
             @
             @@
 __       @
/\\ \\_     @
\\/'__\`\\   @
/\\ \\_\\_\\  @
\\ \\____ \\ @
 \\/\\ \\_\\ \\@
  \\ \`\\_ _/@
   \`\\_/\\_\\@
      \\/_/@@
 __     __  @
/\\_\\   / /  @
\\/_/  / /   @
     / /    @
    / /  __ @
   /_/  /\\_\\@
  /_/   \\/_/@
            @
            @@
  ____      @
/|  _ \\     @
|/\\   |     @
 \\// __\`\\/\\ @
 /|  \\L>  <_@
 | \\_____/\\/@
  \\/____/\\/ @
            @
            @@
 __     @
/\\ \\    @
\\ \\/$   @
 \\/  $  @
  $   $ @
   $   $@
        @
        @
        @@
   _     @
 /' \\    @
/\\ ,/'   @
\\ \\ \\    @
 \\ \\ \`\\  @
  \\ \`\\__\\@
   \`\\/_/ @
         @
         @@
 __     @
/\\ \`\\   @
\\\`\\  \\  @
 \`\\\`\\ \\ @
  \`\\/' \\@
   /\\__/@
   \\/_/ @
        @
        @@
  __      @
 _\\ \\ _   @
/\\_\` ' \\  @
\\/_>   <_ @
  /\\_, ,_\\@
  \\/_/\\_\\/@
     \\/_/ @
          @
          @@
  __      @
 /\\ \\     @
 \\_\\ \\___ @
/\\___  __\\@
\\/__/\\ \\_/@
    \\ \\_\\ @
     \\/_/ @
          @
          @@
    @
    @
    @
    @
 __ @
/\\ \\@
\\ \\/@
 \\/ @
    @@
         @
         @
         @
 _______ @
/\\______\\@
\\/______/@
         @
         @
         @@
    @
    @
    @
    @
 __ @
/\\_\\@
\\/_/@
    @
    @@
      __@
     / /@
    / / @
   / /  @
  / /   @
 /_/    @
/_/     @
        @
        @@
   __     @
 /'__\`\\   @
/\\ \\/\\ \\  @
\\ \\ \\ \\ \\ @
 \\ \\ \\_\\ \\@
  \\ \\____/@
   \\/___/ @
          @
          @@
   _     @
 /' \\    @
/\\_, \\   @
\\/_/\\ \\  @
   \\ \\ \\ @
    \\ \\_\\@
     \\/_/@
         @
         @@
   ___     @
 /'___\`\\   @
/\\_\\ /\\ \\  @
\\/_/// /__ @
   // /_\\ \\@
  /\\______/@
  \\/_____/ @
           @
           @@
   __     @
 /'__\`\\   @
/\\_\\L\\ \\  @
\\/_/_\\_<_ @
  /\\ \\L\\ \\@
  \\ \\____/@
   \\/___/ @
          @
          @@
 __ __      @
/\\ \\\\ \\     @
\\ \\ \\\\ \\    @
 \\ \\ \\\\ \\_  @
  \\ \\__ ,__\\@
   \\/_/\\_\\_/@
      \\/_/  @
            @
            @@
 ______    @
/\\  ___\\   @
\\ \\ \\__/   @
 \\ \\___\`\`\\ @
  \\/\\ \\L\\ \\@
   \\ \\____/@
    \\/___/ @
           @
           @@
  ____    @
 /'___\\   @
/\\ \\__/   @
\\ \\  _\`\`\\ @
 \\ \\ \\L\\ \\@
  \\ \\____/@
   \\/___/ @
          @
          @@
 ________ @
/\\_____  \\@
\\/___//'/'@
    /' /' @
  /' /'   @
 /\\_/     @
 \\//      @
          @
          @@
   __     @
 /'_ \`\\   @
/\\ \\L\\ \\  @
\\/_> _ <_ @
  /\\ \\L\\ \\@
  \\ \\____/@
   \\/___/ @
          @
          @@
   __      @
 /'_ \`\\    @
/\\ \\L\\ \\   @
\\ \\___, \\  @
 \\/__,/\\ \\ @
      \\ \\_\\@
       \\/_/@
           @
           @@
      @
      @
 __   @
/\\_\\  @
\\/_/_ @
  /\\_\\@
  \\/_/@
      @
      @@
      @
      @
 __   @
/\\_\\  @
\\/_/_ @
  /\\ \\@
  \\ \\/@
   \\/ @
      @@
    ___ @
   /  / @
  /  /  @
/<  <   @
\\ \`\\ \`\\ @
 \`\\ \`\\_|@
   \`\\// @
        @
        @@
           @
 _______   @
/\\______\\  @
\\/______/_ @
  /\\______\\@
  \\/______/@
           @
           @
           @@
 __     @
/\\ \`\\   @
\\ \`\\ \`\\ @
 \`\\ >  >@
   /  / @
  /\\_/  @
  \\//   @
        @
        @@
   _    @
 /'_\`\\  @
/\\_\\/\\\`\\@
\\/_//'/'@
   /\\_\\ @
   \\/\\_\\@
    \\/_/@
        @
        @@
           @
   __      @
  /'_\`\\_   @
 /'/'_\` \\  @
/\\ \\ \\L\\ \\ @
\\ \\ \`\\__,_\\@
 \\ \`\\_____\\@
  \`\\/_____/@
           @@
 ______     @
/\\  _  \\    @
\\ \\ \\L\\ \\   @
 \\ \\  __ \\  @
  \\ \\ \\/\\ \\ @
   \\ \\_\\ \\_\\@
    \\/_/\\/_/@
            @
            @@
 ____      @
/\\  _\`\\    @
\\ \\ \\L\\ \\  @
 \\ \\  _ <' @
  \\ \\ \\L\\ \\@
   \\ \\____/@
    \\/___/ @
           @
           @@
 ____      @
/\\  _\`\\    @
\\ \\ \\/\\_\\  @
 \\ \\ \\/_/_ @
  \\ \\ \\L\\ \\@
   \\ \\____/@
    \\/___/ @
           @
           @@
 ____      @
/\\  _\`\\    @
\\ \\ \\/\\ \\  @
 \\ \\ \\ \\ \\ @
  \\ \\ \\_\\ \\@
   \\ \\____/@
    \\/___/ @
           @
           @@
 ____      @
/\\  _\`\\    @
\\ \\ \\L\\_\\  @
 \\ \\  _\\L  @
  \\ \\ \\L\\ \\@
   \\ \\____/@
    \\/___/ @
           @
           @@
 ____    @
/\\  _\`\\  @
\\ \\ \\L\\_\\@
 \\ \\  _\\/@
  \\ \\ \\/ @
   \\ \\_\\ @
    \\/_/ @
         @
         @@
 ____      @
/\\  _\`\\    @
\\ \\ \\L\\_\\  @
 \\ \\ \\L_L  @
  \\ \\ \\/, \\@
   \\ \\____/@
    \\/___/ @
           @
           @@
 __  __     @
/\\ \\/\\ \\    @
\\ \\ \\_\\ \\   @
 \\ \\  _  \\  @
  \\ \\ \\ \\ \\ @
   \\ \\_\\ \\_\\@
    \\/_/\\/_/@
            @
            @@
 ______     @
/\\__  _\\    @
\\/_/\\ \\/    @
   \\ \\ \\    @
    \\_\\ \\__ @
    /\\_____\\@
    \\/_____/@
            @
            @@
 _____    @
/\\___ \\   @
\\/__/\\ \\  @
   _\\ \\ \\ @
  /\\ \\_\\ \\@
  \\ \\____/@
   \\/___/ @
          @
          @@
 __  __     @
/\\ \\/\\ \\    @
\\ \\ \\/'/'   @
 \\ \\ , <    @
  \\ \\ \\\\\`\\  @
   \\ \\_\\ \\_\\@
    \\/_/\\/_/@
            @
            @@
 __        @
/\\ \\       @
\\ \\ \\      @
 \\ \\ \\  __ @
  \\ \\ \\L\\ \\@
   \\ \\____/@
    \\/___/ @
           @
           @@
            @
 /'\\_/\`\\    @
/\\      \\   @
\\ \\ \\__\\ \\  @
 \\ \\ \\_/\\ \\ @
  \\ \\_\\\\ \\_\\@
   \\/_/ \\/_/@
            @
            @@
 __  __     @
/\\ \\/\\ \\    @
\\ \\ \`\\\\ \\   @
 \\ \\ , \` \\  @
  \\ \\ \\\`\\ \\ @
   \\ \\_\\ \\_\\@
    \\/_/\\/_/@
            @
            @@
 _____      @
/\\  __\`\\    @
\\ \\ \\/\\ \\   @
 \\ \\ \\ \\ \\  @
  \\ \\ \\_\\ \\ @
   \\ \\_____\\@
    \\/_____/@
            @
            @@
 ____    @
/\\  _\`\\  @
\\ \\ \\L\\ \\@
 \\ \\ ,__/@
  \\ \\ \\/ @
   \\ \\_\\ @
    \\/_/ @
         @
         @@
 _____      @
/\\  __\`\\    @
\\ \\ \\/\\ \\   @
 \\ \\ \\ \\ \\  @
  \\ \\ \\\\'\\\\ @
   \\ \\___\\_\\@
    \\/__//_/@
            @
            @@
 ____       @
/\\  _\`\\     @
\\ \\ \\L\\ \\   @
 \\ \\ ,  /   @
  \\ \\ \\\\ \\  @
   \\ \\_\\ \\_\\@
    \\/_/\\/ /@
            @
            @@
 ____       @
/\\  _\`\\     @
\\ \\,\\L\\_\\   @
 \\/_\\__ \\   @
   /\\ \\L\\ \\ @
   \\ \`\\____\\@
    \\/_____/@
            @
            @@
 ______   @
/\\__  _\\  @
\\/_/\\ \\/  @
   \\ \\ \\  @
    \\ \\ \\ @
     \\ \\_\\@
      \\/_/@
          @
          @@
 __  __     @
/\\ \\/\\ \\    @
\\ \\ \\ \\ \\   @
 \\ \\ \\ \\ \\  @
  \\ \\ \\_\\ \\ @
   \\ \\_____\\@
    \\/_____/@
            @
            @@
 __  __    @
/\\ \\/\\ \\   @
\\ \\ \\ \\ \\  @
 \\ \\ \\ \\ \\ @
  \\ \\ \\_/ \\@
   \\ \`\\___/@
    \`\\/__/ @
           @
           @@
 __      __    @
/\\ \\  __/\\ \\   @
\\ \\ \\/\\ \\ \\ \\  @
 \\ \\ \\ \\ \\ \\ \\ @
  \\ \\ \\_/ \\_\\ \\@
   \\ \`\\___x___/@
    '\\/__//__/ @
               @
               @@
 __   __     @
/\\ \\ /\\ \\    @
\\ \`\\\`\\/'/'   @
 \`\\/ > <     @
    \\/'/\\\`\\  @
    /\\_\\\\ \\_\\@
    \\/_/ \\/_/@
             @
             @@
 __    __ @
/\\ \\  /\\ \\@
\\ \`\\\`\\\\/'/@
 \`\\ \`\\ /' @
   \`\\ \\ \\ @
     \\ \\_\\@
      \\/_/@
          @
          @@
 ________     @
/\\_____  \\    @
\\/____//'/'   @
     //'/'    @
    //'/'___  @
    /\\_______\\@
    \\/_______/@
              @
              @@
 ____     @
/\\  _\\    @
\\ \\ \\/    @
 \\ \\ \\    @
  \\ \\ \\_  @
   \\ \\___\\@
    \\/___/@
          @
          @@
 __      @
/\\ \`\\    @
\\\`\\ \`\\   @
\`\\\`\\ \`\\  @
 \`\\\`\\ \`\\ @
  \`\\\`\\__\\@
   \`\\/__/@
         @
         @@
 ____     @
/\\__ \\    @
\\/_/\\ \\   @
   \\ \\ \\  @
    \\_\\ \\ @
    /\\___\\@
    \\/___/@
          @
          @@
  __      @
 /  \`\\    @
/\\_/\\_\\   @
\\//\\// $  @
 $      $ @
  $      $@
          @
          @
          @@
          @
          @
          @
          @
          @
$      $  @
 $_______ @
 /\\______\\@
 \\/______/@@
 __     @
/\\ \\    @
\\ \\\\$   @
 \\// $  @
  $   $ @
   $   $@
        @
        @
        @@
          @
          @
   __     @
 /'__\`\\   @
/\\ \\L\\.\\_ @
\\ \\__/.\\_\\@
 \\/__/\\/_/@
          @
          @@
 __        @
/\\ \\       @
\\ \\ \\____  @
 \\ \\ '__\`\\ @
  \\ \\ \\L\\ \\@
   \\ \\_,__/@
    \\/___/ @
           @
           @@
        @
        @
  ___   @
 /'___\\ @
/\\ \\__/ @
\\ \\____\\@
 \\/____/@
        @
        @@
  __     @
 /\\ \\    @
 \\_\\ \\   @
 /'_\` \\  @
/\\ \\L\\ \\ @
\\ \\___,_\\@
 \\/__,_ /@
         @
         @@
        @
        @
   __   @
 /'__\`\\ @
/\\  __/ @
\\ \\____\\@
 \\/____/@
        @
        @@
   ___  @
 /'___\\ @
/\\ \\__/ @
\\ \\ ,__\\@
 \\ \\ \\_/@
  \\ \\_\\ @
   \\/_/ @
        @
        @@
          @
          @
   __     @
 /'_ \`\\   @
/\\ \\L\\ \\  @
\\ \\____ \\ @
 \\/___L\\ \\@
   /\\____/@
   \\_/__/ @@
 __         @
/\\ \\        @
\\ \\ \\___    @
 \\ \\  _ \`\\  @
  \\ \\ \\ \\ \\ @
   \\ \\_\\ \\_\\@
    \\/_/\\/_/@
            @
            @@
       @
 __    @
/\\_\\   @
\\/\\ \\  @
 \\ \\ \\ @
  \\ \\_\\@
   \\/_/@
       @
       @@
        @
 __     @
/\\_\\    @
\\/\\ \\   @
 \\ \\ \\  @
 _\\ \\ \\ @
/\\ \\_\\ \\@
\\ \\____/@
 \\/___/ @@
 __         @
/\\ \\        @
\\ \\ \\/'\\    @
 \\ \\ , <    @
  \\ \\ \\\\\`\\  @
   \\ \\_\\ \\_\\@
    \\/_/\\/_/@
            @
            @@
 ___      @
/\\_ \\     @
\\//\\ \\    @
  \\ \\ \\   @
   \\_\\ \\_ @
   /\\____\\@
   \\/____/@
          @
          @@
             @
             @
  ___ ___    @
/' __\` __\`\\  @
/\\ \\/\\ \\/\\ \\ @
\\ \\_\\ \\_\\ \\_\\@
 \\/_/\\/_/\\/_/@
             @
             @@
         @
         @
  ___    @
/' _ \`\\  @
/\\ \\/\\ \\ @
\\ \\_\\ \\_\\@
 \\/_/\\/_/@
         @
         @@
        @
        @
  ___   @
 / __\`\\ @
/\\ \\L\\ \\@
\\ \\____/@
 \\/___/ @
        @
        @@
         @
         @
 _____   @
/\\ '__\`\\ @
\\ \\ \\L\\ \\@
 \\ \\ ,__/@
  \\ \\ \\/ @
   \\ \\_\\ @
    \\/_/ @@
           @
           @
   __      @
 /'__\`\\    @
/\\ \\L\\ \\   @
\\ \\___, \\  @
 \\/___/\\ \\ @
      \\ \\_\\@
       \\/_/@@
       @
       @
 _ __  @
/\\\`'__\\@
\\ \\ \\/ @
 \\ \\_\\ @
  \\/_/ @
       @
       @@
        @
        @
  ____  @
 /',__\\ @
/\\__, \`\\@
\\/\\____/@
 \\/___/ @
        @
        @@
 __      @
/\\ \\__   @
\\ \\ ,_\\  @
 \\ \\ \\/  @
  \\ \\ \\_ @
   \\ \\__\\@
    \\/__/@
         @
         @@
         @
         @
 __  __  @
/\\ \\/\\ \\ @
\\ \\ \\_\\ \\@
 \\ \\____/@
  \\/___/ @
         @
         @@
         @
         @
 __  __  @
/\\ \\/\\ \\ @
\\ \\ \\_/ |@
 \\ \\___/ @
  \\/__/  @
         @
         @@
             @
             @
 __  __  __  @
/\\ \\/\\ \\/\\ \\ @
\\ \\ \\_/ \\_/ \\@
 \\ \\___x___/'@
  \\/__//__/  @
             @
             @@
        @
        @
 __  _  @
/\\ \\/'\\ @
\\/>  </ @
 /\\_/\\_\\@
 \\//\\/_/@
        @
        @@
           @
           @
 __  __    @
/\\ \\/\\ \\   @
\\ \\ \\_\\ \\  @
 \\/\`____ \\ @
  \`/___/> \\@
     /\\___/@
     \\/__/ @@
         @
         @
 ____    @
/\\_ ,\`\\  @
\\/_/  /_ @
  /\\____\\@
  \\/____/@
         @
         @@
     _ @
   /' \\@
  \\ ,/'@
 <' \\  @
< \\ \`\\ @
 \\\`\\__\\@
  \\/__/@
       @
       @@
 __       @
/\\ \\      @
\\ \\ \\     @
 \\ \\ \\    @
  \\ \\ \\   @
   \\ \\ \\  @
    \\ \\ \\ @
     \\ \\_\\@
      \\/_/@@
 __    @
/\\ \`\\  @
\\\`\\  \\ @
 \\ \\ \`>@
 //' \\ @
/\\__/' @
\\/_/   @
       @
       @@
   _   _    @
 /' \\/' \\   @
/\\_/\\__//$  @
\\//\\/__/  $ @
 $         $@
            @
            @
            @
            @@
 __  __     @
/\\_\\/\\_\\    @
\\/\\  _  \\   @
 \\ \\ \\L\\ \\  @
  \\ \\  __ \\ @
   \\ \\_\\/\\_\\@
    \\/_/\\/_/@
            @
            @@
 __  __     @
/\\_\\/\\_\\    @
\\/\\  __ \\   @
 \\ \\ \\/\\ \\  @
  \\ \\ \\_\\ \\ @
   \\ \\_____\\@
    \\/_____/@
            @
            @@
 __  __     @
/\\_\\/\\_\\    @
\\/\\ \\/\\ \\   @
 \\ \\ \\ \\ \\  @
  \\ \\ \\_\\ \\ @
   \\ \\_____\\@
    \\/_____/@
            @
            @@
 __  __     @
/\\_\\/\\_\\    @
\\/_/\\/_/_   @
    /'_\` \\  @
   /\\ \\L\\ \\ @
   \\ \`\\__,_\\@
    \`\\/_,__/@
            @
            @@
 __  __    @
/\\_\\/\\_\\   @
\\/_/\\/_/   @
    /'_\`\\  @
   /\\ \\L\\ \\@
   \\ \`\\___/@
    \`\\/__/ @
           @
           @@
 __  __    @
/\\_\\ \\_\\   @
\\/_/\\/_/_  @
  /\\ \\/\\ \\ @
  \\ \\ \\_\\ \\@
   \\ \`\\___/@
    \`\\/__/ @
           @
           @@
 ______    @
/\\  __ \\   @
\\ \\ \\/\\ \\  @
 \\ \\ \\<_<_ @
  \\ \\ \\ \\ \\@
   \\ \\ \\\\_/@
    \\ \\_\\/ @
     \\/_/  @
           @@
`,Wp=`flf2a$ 8 6 27 0 10 0 576
Lean by Glenn Chappell 4/93 -- based on various .sig's
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

       $  $@
      $  $ @
     $  $  @
    $  $   @
   $  $    @
  $  $     @
 $  $      @
$  $       @@
       $$@
    _/ $ @
   _/ $  @
  _/ $   @
   $$    @
_/ $     @
 $$      @
         @@
   _/  _/ $@
  _/  _/ $ @
       $$  @
  $$       @
 $$        @
$$         @
           @
           @@
            $$ @
     _/  _/   $@
  _/_/_/_/_/ $ @
   _/  _/   $  @
_/_/_/_/_/ $   @
 _/  _/   $    @
      $$       @
               @@
         $$ @
      _/   $@
   _/_/_/ $ @
  _/_/   $  @
   _/_/ $   @
_/_/_/ $    @
 _/   $     @
  $$        @@
               $$@
    _/_/    _/ $ @
   _/_/  _/   $  @
      _/     $   @
   _/  _/_/ $    @
_/    _/_/ $     @
         $$      @
                 @@
        $$    @
     _/   $   @
  _/  _/     $@
   _/_/  _/ $ @
_/    _/   $  @
 _/_/  _/ $   @
        $$    @
              @@
       _/ $@
    _/   $ @
     $$    @
  $$       @
 $$        @
$$         @
           @
           @@
       _/ $@
    _/   $ @
   _/ $    @
  _/ $     @
 _/ $      @
_/   $     @
 _/ $      @
  $$       @@
      _/   $@
       _/ $ @
      _/ $  @
     _/ $   @
    _/ $    @
   _/ $     @
_/   $      @
 $$         @@
               $$@
    _/  _/  _/ $ @
     _/_/_/   $  @
  _/_/_/_/_/ $   @
   _/_/_/   $    @
_/  _/  _/ $     @
         $$      @
                 @@
         $$  @
      _/ $   @
     _/     $@
_/_/_/_/_/ $ @
   _/     $  @
  _/ $       @
   $$        @
             @@
        @
        @
        @
        @
      $$@
   _/ $ @
_/   $  @
 $$     @@
             @
             @
           $$@
_/_/_/_/_/ $ @
         $$  @
             @
             @
             @@
     @
     @
     @
     @
   $$@
_/ $ @
 $$  @
     @@
               $$@
            _/ $ @
         _/   $  @
      _/   $     @
   _/   $        @
_/   $           @
 $$              @
                 @@
        $$ @
     _/   $@
  _/  _/ $ @
 _/  _/ $  @
_/  _/ $   @
 _/   $    @
  $$       @
           @@
       $$@
    _/ $ @
 _/_/ $  @
  _/ $   @
 _/ $    @
_/ $     @
 $$      @
         @@
           $$ @
      _/_/   $@
   _/    _/ $ @
      _/   $  @
   _/     $   @
_/_/_/_/ $    @
       $$     @
              @@
           $$ @
    _/_/_/   $@
         _/ $ @
    _/_/   $  @
       _/ $   @
_/_/_/   $    @
     $$       @
              @@
         $$@
  _/  _/ $ @
 _/  _/   $@
_/_/_/_/ $ @
   _/   $  @
  _/ $     @
   $$      @
           @@
             $$@
    _/_/_/_/ $ @
   _/       $  @
  _/_/_/   $   @
       _/ $    @
_/_/_/   $     @
     $$        @
               @@
            $$@
     _/_/_/ $ @
  _/       $  @
 _/_/_/   $   @
_/    _/ $    @
 _/_/   $     @
    $$        @
              @@
             $$@
  _/_/_/_/_/ $ @
         _/ $  @
      _/   $   @
   _/   $      @
_/   $         @
 $$            @
               @@
          $$ @
     _/_/   $@
  _/    _/ $ @
   _/_/   $  @
_/    _/ $   @
 _/_/   $    @
    $$       @
             @@
           $$ @
      _/_/   $@
   _/    _/ $ @
    _/_/_/ $  @
       _/ $   @
_/_/_/   $    @
     $$       @
              @@
        @
      $$@
   _/ $ @
    $$  @
   $$   @
_/ $    @
 $$     @
        @@
           @
         $$@
      _/ $ @
       $$  @
      $$   @
   _/ $    @
_/   $     @
 $$        @@
         $$@
      _/ $ @
   _/   $  @
_/   $     @
 _/   $    @
  _/ $     @
   $$      @
           @@
               @
             $$@
  _/_/_/_/_/ $ @
           $$  @
_/_/_/_/_/ $   @
         $$    @
               @
               @@
       $$  @
    _/   $ @
     _/   $@
      _/ $ @
   _/   $  @
_/   $     @
 $$        @
           @@
         $$ @
    _/_/   $@
       _/ $ @
  _/_/   $  @
     $$     @
_/ $        @
 $$         @
            @@
                   $$ @
        _/_/_/_/_/   $@
     _/          _/ $ @
  _/    _/_/_/  _/ $  @
 _/  _/    _/  _/ $   @
_/    _/_/_/_/   $    @
 _/             $     @
  _/_/_/_/_/_/ $      @@
           $$ @
      _/_/   $@
   _/    _/ $ @
  _/_/_/_/ $  @
 _/    _/ $   @
_/    _/ $    @
       $$     @
              @@
           $$ @
    _/_/_/   $@
   _/    _/ $ @
  _/_/_/   $  @
 _/    _/ $   @
_/_/_/   $    @
     $$       @
              @@
            $$@
     _/_/_/ $ @
  _/       $  @
 _/   $       @
_/       $    @
 _/_/_/ $     @
      $$      @
              @@
           $$ @
    _/_/_/   $@
   _/    _/ $ @
  _/    _/ $  @
 _/    _/ $   @
_/_/_/   $    @
     $$       @
              @@
             $$@
    _/_/_/_/ $ @
   _/       $  @
  _/_/_/ $     @
 _/       $    @
_/_/_/_/ $     @
       $$      @
               @@
             $$@
    _/_/_/_/ $ @
   _/       $  @
  _/_/_/ $     @
 _/     $      @
_/ $           @
 $$            @
               @@
            $$@
     _/_/_/ $ @
  _/       $  @
 _/  _/_/ $   @
_/    _/ $    @
 _/_/_/ $     @
      $$      @
              @@
             $$@
    _/    _/ $ @
   _/    _/ $  @
  _/_/_/_/ $   @
 _/    _/ $    @
_/    _/ $     @
       $$      @
               @@
           $$@
    _/_/_/ $ @
     _/   $  @
    _/ $     @
   _/   $    @
_/_/_/ $     @
     $$      @
             @@
            $$@
         _/ $ @
        _/ $  @
       _/ $   @
_/    _/ $    @
 _/_/   $     @
    $$        @
              @@
             $$@
    _/    _/ $ @
   _/  _/   $  @
  _/_/   $     @
 _/  _/   $    @
_/    _/ $     @
       $$      @
               @@
       $$  @
    _/ $   @
   _/ $    @
  _/ $     @
 _/       $@
_/_/_/_/ $ @
       $$  @
           @@
               $$@
    _/      _/ $ @
   _/_/  _/_/ $  @
  _/  _/  _/ $   @
 _/      _/ $    @
_/      _/ $     @
         $$      @
                 @@
               $$@
    _/      _/ $ @
   _/_/    _/ $  @
  _/  _/  _/ $   @
 _/    _/_/ $    @
_/      _/ $     @
         $$      @
                 @@
          $$ @
     _/_/   $@
  _/    _/ $ @
 _/    _/ $  @
_/    _/ $   @
 _/_/   $    @
    $$       @
             @@
           $$ @
    _/_/_/   $@
   _/    _/ $ @
  _/_/_/   $  @
 _/     $     @
_/ $          @
 $$           @
              @@
          $$ @
     _/_/   $@
  _/    _/ $ @
 _/  _/_/ $  @
_/    _/   $ @
 _/_/  _/ $  @
        $$   @
             @@
           $$ @
    _/_/_/   $@
   _/    _/ $ @
  _/_/_/   $  @
 _/    _/ $   @
_/    _/ $    @
       $$     @
              @@
             $$@
      _/_/_/ $ @
   _/       $  @
    _/_/   $   @
       _/ $    @
_/_/_/   $     @
     $$        @
               @@
           $$@
_/_/_/_/_/ $ @
   _/     $  @
  _/ $       @
 _/ $        @
_/ $         @
 $$          @
             @@
            $$@
   _/    _/ $ @
  _/    _/ $  @
 _/    _/ $   @
_/    _/ $    @
 _/_/   $     @
    $$        @
              @@
             $$@
  _/      _/ $ @
 _/      _/ $  @
_/      _/ $   @
 _/  _/   $    @
  _/   $       @
   $$          @
               @@
                 $$@
  _/          _/ $ @
 _/          _/ $  @
_/    _/    _/ $   @
 _/  _/  _/   $    @
  _/  _/   $       @
       $$          @
                   @@
               $$@
    _/      _/ $ @
     _/  _/   $  @
      _/   $     @
   _/  _/   $    @
_/      _/ $     @
         $$      @
                 @@
           $$@
_/      _/ $ @
 _/  _/   $  @
  _/   $     @
 _/ $        @
_/ $         @
 $$          @
             @@
               $$@
    _/_/_/_/_/ $ @
         _/   $  @
      _/   $     @
   _/       $    @
_/_/_/_/_/ $     @
         $$      @
                 @@
      _/_/ $@
     _/   $ @
    _/ $    @
   _/ $     @
  _/ $      @
 _/   $     @
_/_/ $      @
   $$       @@
   $$    @
_/   $   @
 _/   $  @
  _/   $ @
   _/   $@
    _/ $ @
     $$  @
         @@
      _/_/ $@
       _/ $ @
      _/ $  @
     _/ $   @
    _/ $    @
   _/ $     @
_/_/ $      @
   $$       @@
     _/   $@
  _/  _/ $ @
       $$  @
  $$       @
 $$        @
$$         @
           @
           @@
             @
             @
             @
             @
             @
      $$     @
           $$@
_/_/_/_/_/ $ @@
   _/   $@
    _/ $ @
     $$  @
  $$     @
 $$      @
$$       @
         @
         @@
             @
           $$@
    _/_/_/ $ @
 _/    _/ $  @
_/    _/ $   @
 _/_/_/ $    @
      $$     @
             @@
       $$    @
    _/     $ @
   _/_/_/   $@
  _/    _/ $ @
 _/    _/ $  @
_/_/_/   $   @
     $$      @
             @@
             @
           $$@
    _/_/_/ $ @
 _/       $  @
_/       $   @
 _/_/_/ $    @
      $$     @
             @@
            $$@
         _/ $ @
    _/_/_/ $  @
 _/    _/ $   @
_/    _/ $    @
 _/_/_/ $     @
      $$      @
              @@
            @
         $$ @
    _/_/   $@
 _/_/_/_/ $ @
_/       $  @
 _/_/_/ $   @
      $$    @
            @@
           $$@
      _/_/ $ @
   _/     $  @
_/_/_/_/     @
 _/     $    @
_/ $         @
 $$          @
             @@
              @
            $$@
     _/_/_/ $ @
  _/    _/ $  @
 _/    _/ $   @
  _/_/_/ $    @
     _/ $     @
_/_/   $      @@
       $$    @
    _/     $ @
   _/_/_/   $@
  _/    _/ $ @
 _/    _/ $  @
_/    _/ $   @
       $$    @
             @@
       $$@
    _/ $ @
     $$  @
  _/ $   @
 _/ $    @
_/ $     @
 $$      @
         @@
           $$@
        _/ $ @
         $$  @
      _/ $   @
     _/ $    @
    _/ $     @
   _/ $      @
_/   $       @@
       $$   @
    _/     $@
   _/  _/ $ @
  _/_/   $  @
 _/  _/   $ @
_/    _/ $  @
       $$   @
            @@
       $$@
    _/ $ @
   _/ $  @
  _/ $   @
 _/ $    @
_/ $     @
 $$      @
         @@
                   @
                $$ @
   _/_/_/  _/_/   $@
  _/    _/    _/ $ @
 _/    _/    _/ $  @
_/    _/    _/ $   @
             $$    @
                   @@
             @
          $$ @
   _/_/_/   $@
  _/    _/ $ @
 _/    _/ $  @
_/    _/ $   @
       $$    @
             @@
            @
         $$ @
    _/_/   $@
 _/    _/ $ @
_/    _/ $  @
 _/_/   $   @
    $$      @
            @@
               @
            $$ @
     _/_/_/   $@
    _/    _/ $ @
   _/    _/ $  @
  _/_/_/   $   @
 _/     $      @
_/ $           @@
             @
           $$@
    _/_/_/ $ @
 _/    _/ $  @
_/    _/ $   @
 _/_/_/ $    @
    _/ $     @
   _/ $      @@
              @
            $$@
   _/  _/_/ $ @
  _/_/     $  @
 _/   $       @
_/ $          @
 $$           @
              @@
              @
            $$@
     _/_/_/ $ @
  _/_/     $  @
     _/_/ $   @
_/_/_/   $    @
     $$       @
              @@
      $$   @
   _/     $@
_/_/_/_/   @
 _/     $  @
_/     $   @
 _/_/ $    @
    $$     @
           @@
             @
           $$@
  _/    _/ $ @
 _/    _/ $  @
_/    _/ $   @
 _/_/_/ $    @
      $$     @
             @@
              @
            $$@
 _/      _/ $ @
_/      _/ $  @
 _/  _/   $   @
  _/   $      @
   $$         @
              @@
                      @
                    $$@
 _/      _/      _/ $ @
_/      _/      _/ $  @
 _/  _/  _/  _/   $   @
  _/      _/   $      @
           $$         @
                      @@
              @
            $$@
   _/    _/ $ @
    _/_/   $  @
 _/    _/ $   @
_/    _/ $    @
       $$     @
              @@
              @
            $$@
   _/    _/ $ @
  _/    _/ $  @
 _/    _/ $   @
  _/_/_/ $    @
     _/ $     @
_/_/   $      @@
              @
            $$@
   _/_/_/_/ $ @
      _/   $  @
   _/     $   @
_/_/_/_/ $    @
       $$     @
              @@
       _/ $@
    _/   $ @
   _/   $  @
_/   $     @
 _/   $    @
_/   $     @
 _/ $      @
  $$       @@
       _/ $@
      _/ $ @
     _/ $  @
    _/ $   @
   _/ $    @
  _/ $     @
 _/ $      @
_/ $       @@
      _/   $ @
       _/   $@
      _/   $ @
       _/ $  @
    _/   $   @
   _/   $    @
_/   $       @
 $$          @@
   _/  _/ $@
_/  _/   $ @
     $$    @
  $$       @
 $$        @
$$         @
           @
           @@
     _/    _/ $@
            $$ @
     _/_/   $  @
  _/    _/ $   @
 _/_/_/_/ $    @
_/    _/ $     @
       $$      @
               @@
    _/    _/ $@
           $$ @
    _/_/   $  @
 _/    _/ $   @
_/    _/ $    @
 _/_/   $     @
    $$        @
              @@
    _/    _/ $@
           $$ @
  _/    _/ $  @
 _/    _/ $   @
_/    _/ $    @
 _/_/   $     @
    $$        @
              @@
    _/    _/ $@
           $$ @
    _/_/_/ $  @
 _/    _/ $   @
_/    _/ $    @
 _/_/_/ $     @
      $$      @
              @@
    _/    _/ $@
           $$ @
    _/_/   $  @
 _/    _/ $   @
_/    _/ $    @
 _/_/   $     @
    $$        @
              @@
    _/    _/ $@
           $$ @
  _/    _/ $  @
 _/    _/ $   @
_/    _/ $    @
 _/_/_/ $     @
      $$      @
              @@
            $$ @
       _/_/   $@
    _/    _/ $ @
   _/  _/   $  @
  _/    _/ $   @
 _/  _/   $    @
_/     $       @
 $$            @@
160  NO-BREAK SPACE
       $  $@
      $  $ @
     $  $  @
    $  $   @
   $  $    @
  $  $     @
 $  $      @
$  $       @@
161  INVERTED EXCLAMATION MARK
       $$@
    _/ $ @
     $$  @
  _/ $   @
 _/ $    @
_/ $     @
 $$      @
         @@
162  CENT SIGN
          $$ @
       _/   $@
    _/_/_/ $ @
 _/  _/   $  @
_/  _/   $   @
 _/_/_/ $    @
  _/   $     @
   $$        @@
163  POUND SIGN
              $$ @
         _/_/   $@
      _/    _/ $ @
   _/_/_/     $  @
    _/         $ @
 _/_/_/    _/ $  @
_/_/  _/_/   $   @
                 @@
164  CURRENCY SIGN
                  $$@
     _/        _/ $ @
      _/_/_/_/   $  @
     _/    _/ $     @
    _/    _/ $      @
   _/_/_/_/   $     @
_/        _/ $      @
           $$       @@
165  YEN SIGN
               $$@
    _/      _/ $ @
     _/  _/   $  @
  _/_/_/_/_/ $   @
     _/     $    @
_/_/_/_/_/ $     @
   _/     $      @
    $$           @@
166  BROKEN BAR
       _/ $@
      _/ $ @
     _/ $  @
      $$   @
     $$    @
  _/ $     @
 _/ $      @
_/ $       @@
167  SECTION SIGN
        _/_/ $@
     _/     $ @
      _/   $  @
   _/  _/ $   @
    _/   $    @
     _/ $     @
_/_/   $      @
   $$         @@
168  DIAERESIS
     _/    _/ $@
            $$ @
   $      $    @
  $      $     @
 $      $      @
$      $       @
               @
               @@
169  COPYRIGHT SIGN
         _/_/_/_/   $ @
      _/        _/   $@
   _/    _/_/_/  _/ $ @
  _/  _/        _/ $  @
 _/  _/        _/ $   @
_/    _/_/_/  _/ $    @
 _/        _/   $     @
  _/_/_/_/   $        @@
170  FEMININE ORDINAL INDICATOR
             $$@
      _/_/_/ $ @
   _/    _/ $  @
    _/_/_/ $   @
         $$    @
_/_/_/_/ $     @
               @
               @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
             $$@
      _/  _/ $ @
   _/  _/   $  @
_/  _/   $     @
 _/  _/   $    @
  _/  _/ $     @
       $$      @
               @@
172  NOT SIGN
             @
             @
           $$@
_/_/_/_/_/ $ @
       _/ $  @
        $$   @
             @
             @@
173  SOFT HYPHEN
           @
           @
         $$@
_/_/_/_/ $ @
       $$  @
  $$       @
           @
           @@
174  REGISTERED SIGN
         _/_/_/_/   $ @
      _/        _/   $@
   _/  _/_/_/    _/ $ @
  _/  _/    _/  _/ $  @
 _/  _/_/_/    _/ $   @
_/  _/    _/  _/ $    @
 _/        _/   $     @
  _/_/_/_/   $        @@
175  MACRON
 _/_/_/_/_/ $@
          $$ @
   $$        @
  $$         @
 $$          @
$$           @
             @
             @@
176  DEGREE SIGN
     _/   $@
  _/  _/ $ @
   _/   $  @
    $$     @
 $$        @
$$         @
           @
           @@
177  PLUS-MINUS SIGN
           $$  @
        _/ $   @
       _/     $@
  _/_/_/_/_/ $ @
     _/     $  @
_/_/_/_/_/ $   @
         $$    @
               @@
178  SUPERSCRIPT TWO
        $$ @
   _/_/   $@
      _/ $ @
   _/   $  @
_/_/_/ $   @
     $$    @
           @
           @@
179  SUPERSCRIPT THREE
          $$@
   _/_/_/ $ @
    _/   $  @
     _/ $   @
_/_/   $    @
   $$       @
            @
            @@
180  ACUTE ACCENT
       _/ $@
    _/   $ @
     $$    @
  $$       @
 $$        @
$$         @
           @
           @@
181  MICRO SIGN
                @
              $$@
     _/    _/ $ @
    _/    _/ $  @
   _/    _/ $   @
  _/_/_/_/ $    @
 _/       $     @
_/ $            @@
182  PILCROW SIGN
            $$@
   _/_/_/_/ $ @
_/_/_/  _/ $  @
 _/_/  _/ $   @
  _/  _/ $    @
 _/  _/ $     @
      $$      @
              @@
183  MIDDLE DOT
       @
       @
     $$@
  _/ $ @
   $$  @
$$     @
       @
       @@
184  CEDILLA
        @
        @
        @
        @
        @
      $$@
   _/ $ @
_/_/ $  @@
185  SUPERSCRIPT ONE
      $$@
   _/ $ @
_/_/ $  @
 _/ $   @
_/ $    @
 $$     @
        @
        @@
186  MASCULINE ORDINAL INDICATOR
           $$ @
      _/_/   $@
   _/    _/ $ @
    _/_/   $  @
         $$   @
_/_/_/_/ $    @
              @
              @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
           $$  @
    _/  _/   $ @
     _/  _/   $@
      _/  _/ $ @
   _/  _/   $  @
_/  _/   $     @
     $$        @
               @@
188  VULGAR FRACTION ONE QUARTER
                $$     @
   _/        _/       $@
_/_/      _/  _/  _/ $ @
 _/    _/    _/  _/   $@
_/  _/      _/_/_/_/ $ @
 _/            _/   $  @
                $$     @
                       @@
189  VULGAR FRACTION ONE HALF
                $$    @
   _/        _/     $ @
_/_/      _/  _/_/   $@
 _/    _/        _/ $ @
_/  _/        _/   $  @
 _/        _/_/_/ $   @
                $$    @
                      @@
190  VULGAR FRACTION THREE QUARTERS
                  $$     @
   _/_/_/      _/       $@
    _/      _/  _/  _/ $ @
     _/  _/    _/  _/   $@
_/_/  _/      _/_/_/_/ $ @
   _/            _/   $  @
                  $$     @
                         @@
191  INVERTED QUESTION MARK
          $$@
       _/ $ @
        $$  @
   _/_/ $   @
_/     $    @
 _/_/ $     @
    $$      @
            @@
192  LATIN CAPITAL LETTER A WITH GRAVE
       _/   $@
        _/ $ @
     _/_/   $@
  _/    _/ $ @
 _/_/_/_/ $  @
_/    _/ $   @
       $$    @
             @@
193  LATIN CAPITAL LETTER A WITH ACUTE
         _/ $@
      _/   $ @
     _/_/   $@
  _/    _/ $ @
 _/_/_/_/ $  @
_/    _/ $   @
       $$    @
             @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
       _/_/   $@
    _/    _/ $ @
           $$  @
    _/_/   $   @
 _/_/_/_/ $    @
_/    _/ $     @
       $$      @
               @@
195  LATIN CAPITAL LETTER A WITH TILDE
       _/  _/ $@
    _/  _/   $ @
         $$    @
    _/_/   $   @
 _/_/_/_/ $    @
_/    _/ $     @
       $$      @
               @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
     _/    _/ $@
            $$ @
     _/_/   $  @
  _/    _/ $   @
 _/_/_/_/ $    @
_/    _/ $     @
       $$      @
               @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
       _/_/   $@
    _/    _/ $ @
     _/_/   $  @
  _/    _/ $   @
 _/_/_/_/ $    @
_/    _/ $     @
       $$      @
               @@
198  LATIN CAPITAL LETTER AE
                   $$@
      _/_/_/_/_/_/ $ @
   _/    _/       $  @
  _/_/_/_/_/_/ $     @
 _/    _/       $    @
_/    _/_/_/_/ $     @
             $$      @
                     @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
             $$@
      _/_/_/ $ @
   _/       $  @
  _/   $       @
 _/       $    @
  _/_/_/ $     @
   _/   $      @
_/_/ $         @@
200  LATIN CAPITAL LETTER E WITH GRAVE
       _/   $ @
        _/   $@
   _/_/_/_/ $ @
  _/_/_/ $    @
 _/       $   @
_/_/_/_/ $    @
       $$     @
              @@
201  LATIN CAPITAL LETTER E WITH ACUTE
         _/ $ @
      _/     $@
   _/_/_/_/ $ @
  _/_/_/ $    @
 _/       $   @
_/_/_/_/ $    @
       $$     @
              @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
       _/_/   $@
    _/    _/ $ @
   _/_/_/_/ $  @
  _/_/_/ $     @
 _/       $    @
_/_/_/_/ $     @
       $$      @
               @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
     _/    _/ $@
            $$ @
   _/_/_/_/ $  @
  _/_/_/ $     @
 _/       $    @
_/_/_/_/ $     @
       $$      @
               @@
204  LATIN CAPITAL LETTER I WITH GRAVE
     _/   $ @
      _/   $@
   _/_/_/ $ @
    _/   $  @
   _/   $   @
_/_/_/ $    @
     $$     @
            @@
205  LATIN CAPITAL LETTER I WITH ACUTE
         _/ $@
      _/   $ @
   _/_/_/ $  @
    _/   $   @
   _/   $    @
_/_/_/ $     @
     $$      @
             @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
       _/   $@
    _/  _/ $ @
   _/_/_/ $  @
    _/   $   @
   _/   $    @
_/_/_/ $     @
     $$      @
             @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
     _/  _/ $@
          $$ @
   _/_/_/ $  @
    _/   $   @
   _/   $    @
_/_/_/ $     @
     $$      @
             @@
208  LATIN CAPITAL LETTER ETH
           $$ @
    _/_/_/   $@
   _/    _/ $ @
_/_/_/  _/ $  @
 _/    _/ $   @
_/_/_/   $    @
     $$       @
              @@
209  LATIN CAPITAL LETTER N WITH TILDE
       _/  _/ $@
    _/  _/   $ @
   _/    _/ $  @
  _/_/  _/ $   @
 _/  _/_/ $    @
_/    _/ $     @
       $$      @
               @@
210  LATIN CAPITAL LETTER O WITH GRAVE
      _/   $@
       _/ $ @
    _/_/   $@
 _/    _/ $ @
_/    _/ $  @
 _/_/   $   @
    $$      @
            @@
211  LATIN CAPITAL LETTER O WITH ACUTE
        _/ $@
     _/   $ @
    _/_/   $@
 _/    _/ $ @
_/    _/ $  @
 _/_/   $   @
    $$      @
            @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
      _/_/   $@
   _/    _/ $ @
    _/_/   $  @
 _/    _/ $   @
_/    _/ $    @
 _/_/   $     @
    $$        @
              @@
213  LATIN CAPITAL LETTER O WITH TILDE
      _/  _/ $@
   _/  _/   $ @
    _/_/   $  @
 _/    _/ $   @
_/    _/ $    @
 _/_/   $     @
    $$        @
              @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
    _/    _/ $@
           $$ @
    _/_/   $  @
 _/    _/ $   @
_/    _/ $    @
 _/_/   $     @
    $$        @
              @@
215  MULTIPLICATION SIGN
           @
         $$@
  _/  _/ $ @
   _/   $  @
_/  _/ $   @
     $$    @
           @
           @@
216  LATIN CAPITAL LETTER O WITH STROKE
               $$@
      _/_/_/_/ $ @
   _/    _/_/ $  @
  _/  _/  _/ $   @
 _/_/    _/ $    @
_/_/_/_/   $     @
       $$        @
                 @@
217  LATIN CAPITAL LETTER U WITH GRAVE
      _/   $@
       _/ $ @
          $$@
 _/    _/ $ @
_/    _/ $  @
 _/_/   $   @
    $$      @
            @@
218  LATIN CAPITAL LETTER U WITH ACUTE
        _/ $@
     _/   $ @
          $$@
 _/    _/ $ @
_/    _/ $  @
 _/_/   $   @
    $$      @
            @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
      _/_/   $@
   _/    _/ $ @
          $$  @
 _/    _/ $   @
_/    _/ $    @
 _/_/   $     @
    $$        @
              @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
    _/    _/ $@
           $$ @
  _/    _/ $  @
 _/    _/ $   @
_/    _/ $    @
 _/_/   $     @
    $$        @
              @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
        _/ $ @
     _/     $@
_/      _/ $ @
 _/  _/   $  @
  _/   $     @
 _/ $        @
  $$         @
             @@
222  LATIN CAPITAL LETTER THORN
       $$    @
    _/     $ @
   _/_/_/   $@
  _/    _/ $ @
 _/_/_/   $  @
_/     $     @
 $$          @
             @@
223  LATIN SMALL LETTER SHARP S
            $$ @
       _/_/   $@
    _/    _/ $ @
   _/  _/   $  @
  _/    _/ $   @
 _/  _/   $    @
_/     $       @
 $$            @@
224  LATIN SMALL LETTER A WITH GRAVE
      _/   $@
       _/ $ @
          $$@
   _/_/_/ $ @
_/    _/ $  @
 _/_/_/ $   @
      $$    @
            @@
225  LATIN SMALL LETTER A WITH ACUTE
          _/ $@
       _/   $ @
          $$  @
   _/_/_/ $   @
_/    _/ $    @
 _/_/_/ $     @
      $$      @
              @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
        _/   $@
     _/  _/ $ @
          $$  @
   _/_/_/ $   @
_/    _/ $    @
 _/_/_/ $     @
      $$      @
              @@
227  LATIN SMALL LETTER A WITH TILDE
      _/  _/ $@
   _/  _/   $ @
          $$  @
   _/_/_/ $   @
_/    _/ $    @
 _/_/_/ $     @
      $$      @
              @@
228  LATIN SMALL LETTER A WITH DIAERESIS
    _/    _/ $@
           $$ @
    _/_/_/ $  @
 _/    _/ $   @
_/    _/ $    @
 _/_/_/ $     @
      $$      @
              @@
229  LATIN SMALL LETTER A WITH RING ABOVE
        _/   $@
     _/  _/ $ @
      _/   $  @
   _/_/_/ $   @
_/    _/ $    @
 _/_/_/ $     @
      $$      @
              @@
230  LATIN SMALL LETTER AE
                    @
                 $$ @
    _/_/_/  _/_/   $@
 _/    _/_/_/_/_/ $ @
_/    _/_/       $  @
 _/_/_/  _/_/_/ $   @
              $$    @
                    @@
231  LATIN SMALL LETTER C WITH CEDILLA
              @
            $$@
     _/_/_/ $ @
  _/       $  @
 _/       $   @
  _/_/_/ $    @
   _/   $     @
_/_/ $        @@
232  LATIN SMALL LETTER E WITH GRAVE
      _/     $@
       _/ $   @
    _/_/   $  @
 _/_/_/_/ $   @
_/       $    @
 _/_/_/ $     @
      $$      @
              @@
233  LATIN SMALL LETTER E WITH ACUTE
          _/ $@
       _/   $ @
    _/_/   $  @
 _/_/_/_/ $   @
_/       $    @
 _/_/_/ $     @
      $$      @
              @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
      _/_/   $@
   _/    _/ $ @
    _/_/   $  @
 _/_/_/_/ $   @
_/       $    @
 _/_/_/ $     @
      $$      @
              @@
235  LATIN SMALL LETTER E WITH DIAERESIS
    _/    _/ $@
           $$ @
    _/_/   $  @
 _/_/_/_/ $   @
_/       $    @
 _/_/_/ $     @
      $$      @
              @@
236  LATIN SMALL LETTER I WITH GRAVE
   _/   $@
    _/ $ @
     $$  @
  _/ $   @
 _/ $    @
_/ $     @
 $$      @
         @@
237  LATIN SMALL LETTER I WITH ACUTE
       _/ $@
    _/   $ @
     $$    @
  _/ $     @
 _/ $      @
_/ $       @
 $$        @
           @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
     _/   $@
  _/  _/ $ @
       $$  @
  _/ $     @
 _/ $      @
_/ $       @
 $$        @
           @@
239  LATIN SMALL LETTER I WITH DIAERESIS
   _/  _/ $@
        $$ @
   _/ $    @
  _/ $     @
 _/ $      @
_/ $       @
 $$        @
           @@
240  LATIN SMALL LETTER ETH
    _/  _/ $@
     _/   $ @
  _/  _/   $@
   _/_/_/ $ @
_/    _/ $  @
 _/_/   $   @
    $$      @
            @@
241  LATIN SMALL LETTER N WITH TILDE
       _/  _/ $@
    _/  _/   $ @
         $$    @
  _/_/_/   $   @
 _/    _/ $    @
_/    _/ $     @
       $$      @
               @@
242  LATIN SMALL LETTER O WITH GRAVE
      _/   $@
       _/ $ @
        $$  @
   _/_/   $ @
_/    _/ $  @
 _/_/   $   @
    $$      @
            @@
243  LATIN SMALL LETTER O WITH ACUTE
        _/ $@
     _/   $ @
        $$  @
   _/_/   $ @
_/    _/ $  @
 _/_/   $   @
    $$      @
            @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
      _/_/   $@
   _/    _/ $ @
          $$  @
   _/_/   $   @
_/    _/ $    @
 _/_/   $     @
    $$        @
              @@
245  LATIN SMALL LETTER O WITH TILDE
      _/_/_/ $@
   _/  _/   $ @
        $$    @
   _/_/   $   @
_/    _/ $    @
 _/_/   $     @
    $$        @
              @@
246  LATIN SMALL LETTER O WITH DIAERESIS
    _/    _/ $@
           $$ @
    _/_/   $  @
 _/    _/ $   @
_/    _/ $    @
 _/_/   $     @
    $$        @
              @@
247  DIVISION SIGN
         $$  @
      _/ $   @
           $$@
_/_/_/_/_/ $ @
         $$  @
  _/ $       @
   $$        @
             @@
248  LATIN SMALL LETTER O WITH STROKE
              @
            $$@
     _/_/_/ $ @
  _/  _/_/ $  @
 _/_/  _/ $   @
_/_/_/   $    @
     $$       @
              @@
249  LATIN SMALL LETTER U WITH GRAVE
    _/   $  @
     _/ $   @
          $$@
 _/    _/ $ @
_/    _/ $  @
 _/_/_/ $   @
      $$    @
            @@
250  LATIN SMALL LETTER U WITH ACUTE
          _/ $@
       _/   $ @
          $$  @
 _/    _/ $   @
_/    _/ $    @
 _/_/_/ $     @
      $$      @
              @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
      _/_/   $@
   _/    _/ $ @
          $$  @
 _/    _/ $   @
_/    _/ $    @
 _/_/_/ $     @
      $$      @
              @@
252  LATIN SMALL LETTER U WITH DIAERESIS
    _/    _/ $@
           $$ @
  _/    _/ $  @
 _/    _/ $   @
_/    _/ $    @
 _/_/_/ $     @
      $$      @
              @@
253  LATIN SMALL LETTER Y WITH ACUTE
         _/ $@
      _/   $ @
           $$@
  _/    _/ $ @
 _/    _/ $  @
  _/_/_/ $   @
     _/ $    @
_/_/   $     @@
254  LATIN SMALL LETTER THORN
         $$    @
      _/     $ @
     _/_/_/   $@
    _/    _/ $ @
   _/    _/ $  @
  _/_/_/   $   @
 _/     $      @
_/ $           @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
     _/    _/ $@
            $$ @
   _/    _/ $  @
  _/    _/ $   @
 _/    _/ $    @
  _/_/_/ $     @
     _/ $      @
_/_/   $       @@
`,wp=`flf2a$ 7 7 11 -1 16 0 0 0
Author :myflix 
Date   : 2006/4/6 7:38:43
Version: 1.0
-------------------------------------------------

-------------------------------------------------
This font has been created using JavE's FIGlet font export assistant.
Have a look at: http://www.jave.de

Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

---

Font modified May 26, 2012 by patorjk
Made modifications to the "JK" characters.
$ #
$ #
$ #
$ #
$ #
$ #
$ ##
 __  #
|  | #
|  | #
|  | #
|__| #
 __  #
|__| ##
 _  _  #
| || | #
|_||_| #
       #
       #
       #
       ##
##
 #
 #
 #
 #
 #
 ##
$#
 #
 #
 #
 #
 #
 ##
%#
 #
 #
 #
 #
 #
 ##
&#
 #
 #
 #
 #
 #
 ##
 __  #
|  | #
|__| #
     #
     #
     #
     ##
  ____  #
 |    | #
|    _| #
|   |   #
|   |   #
|   |_  #
 |____| ##
 ____   #
|    |  #
|_    | #
  |   | #
  |   | #
 _|   | #
|____|  ##
*#
 #
 #
 #
 #
 #
 ##
   _    #
 _| |_  #
|_   _| #
  |_|   #
        #
        #
        ##
      #
      #
      #
      #
 ___  #
|_  | #
  |_| ##
       #
       #
 ____  #
|____| #
       #
       #
       ##
      #
      #
      #
      #
 ___  #
|   | #
|___| ##
/#
 #
 #
 #
 #
 #
 ##
 _______ #
|  _    |#
| | |   |#
| | |   |#
| |_|   |#
|       |#
|_______|##
 ____  #
|    | #
 |   | #
 |   | #
 |   | #
 |   | #
 |___| ##
 _______ #
|       |#
|____   |#
 ____|  |#
| ______|#
| |_____ #
|_______|##
 _______ #
|       |#
|___    |#
 ___|   |#
|___    |#
 ___|   |#
|_______|##
 _   ___ #
| | |   |#
| |_|   |#
|       |#
|___    |#
    |   |#
    |___|##
 _______ #
|       |#
|   ____|#
|  |____ #
|_____  |#
 _____| |#
|_______|##
 ___     #
|   |    #
|   |___ #
|    _  |#
|   | | |#
|   |_| |#
|_______|##
 _______ #
|       |#
|___    |#
    |   |#
    |   |#
    |   |#
    |___|##
  _____  #
 |  _  | #
 | |_| | #
|   _   |#
|  | |  |#
|  |_|  |#
|_______|##
 _______ #
|  _    |#
| | |   |#
| |_|   |#
|___    |#
    |   |#
    |___|##
 ___  #
|   | #
|___| #
 ___  #
|   | #
|___| #
      ##
 ___  #
|   | #
|___| #
 ___  #
|_  | #
  |_| #
      ##
<#
 #
 #
 #
 #
 #
 ##
 ____  #
|____| #
 ____  #
|____| #
       #
       #
       ##
>#
 #
 #
 #
 #
 #
 ##
 ______  #
|      | #
|___   | #
  __|  | #
 |_____| #
   __    #
  |__|   ##
@#
 #
 #
 #
 #
 #
 ##
 _______ #
|   _   |#
|  |_|  |#
|       |#
|       |#
|   _   |#
|__| |__|##
 _______ #
|  _    |#
| |_|   |#
|       |#
|  _   | #
| |_|   |#
|_______|##
 _______ #
|       |#
|       |#
|       |#
|      _|#
|     |_ #
|_______|##
 ______  #
|      | #
|  _    |#
| | |   |#
| |_|   |#
|       |#
|______| ##
 _______ #
|       |#
|    ___|#
|   |___ #
|    ___|#
|   |___ #
|_______|##
 _______ #
|       |#
|    ___|#
|   |___ #
|    ___|#
|   |    #
|___|    ##
 _______ #
|       |#
|    ___|#
|   | __ #
|   ||  |#
|   |_| |#
|_______|##
 __   __ #
|  | |  |#
|  |_|  |#
|       |#
|       |#
|   _   |#
|__| |__|##
 ___  #
|   | #
|   | #
|   | #
|   | #
|   | #
|___| ##
     ___ #
    |   |#
    |   |#
    |   |#
 ___|   |#
|       |#
|_______|##
 ___   _ #
|   | | |#
|   |_| |#
|      _|#
|     |_ #
|    _  |#
|___| |_|##
 ___     #
|   |    #
|   |    #
|   |    #
|   |___ #
|       |#
|_______|##
 __   __ #
|  |_|  |#
|       |#
|       |#
|       |#
| ||_|| |#
|_|   |_|##
 __    _ #
|  |  | |#
|   |_| |#
|       |#
|  _    |#
| | |   |#
|_|  |__|##
 _______ #
|       |#
|   _   |#
|  | |  |#
|  |_|  |#
|       |#
|_______|##
 _______ #
|       |#
|    _  |#
|   |_| |#
|    ___|#
|   |    #
|___|    ##
 _______ #
|       |#
|   _   |#
|  | |  |#
|  |_|  |#
|      | #
|____||_|##
 ______   #
|    _ |  #
|   | ||  #
|   |_||_ #
|    __  |#
|   |  | |#
|___|  |_|##
 _______ #
|       |#
|  _____|#
| |_____ #
|_____  |#
 _____| |#
|_______|##
 _______ #
|       |#
|_     _|#
  |   |  #
  |   |  #
  |   |  #
  |___|  ##
 __   __ #
|  | |  |#
|  | |  |#
|  |_|  |#
|       |#
|       |#
|_______|##
 __   __ #
|  | |  |#
|  |_|  |#
|       |#
|       |#
 |     | #
  |___|  ##
 _     _ #
| | _ | |#
| || || |#
|       |#
|       |#
|   _   |#
|__| |__|##
 __   __ #
|  |_|  |#
|       |#
|       |#
 |     | #
|   _   |#
|__| |__|##
 __   __ #
|  | |  |#
|  |_|  |#
|       |#
|_     _|#
  |   |  #
  |___|  ##
 _______ #
|       |#
|____   |#
 ____|  |#
| ______|#
| |_____ #
|_______|##
 _____  #
|     | #
|    _| #
|   |   #
|   |   #
|   |_  #
|_____| ##
\\#
 #
 #
 #
 #
 #
 ##
 _____  #
|     | #
|_    | #
  |   | #
  |   | #
 _|   | #
|_____| ##
  ___   #
 |   |  #
|  _  | #
|_| |_| #
        #
        #
        ##
        #
        #
        #
        #
        #
 _____  #
|_____| ##
 ___   #
|   |  #
|_   | #
  |__| #
       #
       #
       ##
 _______ #
|   _   |#
|  |_|  |#
|       |#
|       |#
|   _   |#
|__| |__|##
 _______ #
|  _    |#
| |_|   |#
|       |#
|  _   | #
| |_|   |#
|_______|##
 _______ #
|       |#
|       |#
|       |#
|      _|#
|     |_ #
|_______|##
 ______  #
|      | #
|  _    |#
| | |   |#
| |_|   |#
|       |#
|______| ##
 _______ #
|       |#
|    ___|#
|   |___ #
|    ___|#
|   |___ #
|_______|##
 _______ #
|       |#
|    ___|#
|   |___ #
|    ___|#
|   |    #
|___|    ##
 _______ #
|       |#
|    ___|#
|   | __ #
|   ||  |#
|   |_| |#
|_______|##
 __   __ #
|  | |  |#
|  |_|  |#
|       |#
|       |#
|   _   |#
|__| |__|##
 ___  #
|   | #
|   | #
|   | #
|   | #
|   | #
|___| ##
     ___ #
    |   |#
    |   |#
    |   |#
 ___|   |#
|       |#
|_______|##
 ___   _ #
|   | | |#
|   |_| |#
|      _|#
|     |_ #
|    _  |#
|___| |_|##
 ___     #
|   |    #
|   |    #
|   |    #
|   |___ #
|       |#
|_______|##
 __   __ #
|  |_|  |#
|       |#
|       |#
|       |#
| ||_|| |#
|_|   |_|##
 __    _ #
|  |  | |#
|   |_| |#
|       |#
|  _    |#
| | |   |#
|_|  |__|##
 _______ #
|       |#
|   _   |#
|  | |  |#
|  |_|  |#
|       |#
|_______|##
 _______ #
|       |#
|    _  |#
|   |_| |#
|    ___|#
|   |    #
|___|    ##
 _______ #
|       |#
|   _   |#
|  | |  |#
|  |_|  |#
|      | #
|____||_|##
 ______   #
|    _ |  #
|   | ||  #
|   |_||_ #
|    __  |#
|   |  | |#
|___|  |_|##
 _______ #
|       |#
|  _____|#
| |_____ #
|_____  |#
 _____| |#
|_______|##
 _______ #
|       |#
|_     _|#
  |   |  #
  |   |  #
  |   |  #
  |___|  ##
 __   __ #
|  | |  |#
|  | |  |#
|  |_|  |#
|       |#
|       |#
|_______|##
 __   __ #
|  | |  |#
|  |_|  |#
|       |#
|       |#
 |     | #
  |___|  ##
 _     _ #
| | _ | |#
| || || |#
|       |#
|       |#
|   _   |#
|__| |__|##
 __   __ #
|  |_|  |#
|       |#
|       |#
 |     | #
|   _   |#
|__| |__|##
 __   __ #
|  | |  |#
|  |_|  |#
|       |#
|_     _|#
  |   |  #
  |___|  ##
 _______ #
|       |#
|____   |#
 ____|  |#
| ______|#
| |_____ #
|_______|##
{#
 #
 #
 #
 #
 #
 ##
|#
 #
 #
 #
 #
 #
 ##
}#
 #
 #
 #
 #
 #
 ##
~#
 #
 #
 #
 #
 #
 ##
 _______ #
|   _   |#
|  |_|  |#
|       |#
|       |#
|   _   |#
|__| |__|##
 _______ #
|       |#
|   _   |#
|  | |  |#
|  |_|  |#
|       |#
|_______|##
 __   __ #
|  | |  |#
|  | |  |#
|  |_|  |#
|       |#
|       |#
|_______|##
 _______ #
|   _   |#
|  |_|  |#
|       |#
|       |#
|   _   |#
|__| |__|##
 _______ #
|       |#
|   _   |#
|  | |  |#
|  |_|  |#
|       |#
|_______|##
 __   __ #
|  | |  |#
|  | |  |#
|  |_|  |#
|       |#
|       |#
|_______|##
�#
 #
 #
 #
 #
 #
 ##

`,Yp=`flf2a$ 6 6 9 -1 10
Cyrillic font by Tracy Schuhwerk (Tracy.Schuhwerk@sdrc.com).
November 15th, 1993  Version 1.0
I sacrificed the following symbols for Cyrillic letters:
  "\\" (slash)
  "/" (back slash)
  "|" (pipe) 
  "~" (tilde) 
  "\`" (single quote)
  ">" (greater than)

    @
    @
    @
    @
    @
    @@
    @
 #  @
 #  @
 #  @
    @
 #  @@
    @
# # @
# # @
    @
    @
    @@
    @
# # @
### @
# # @
### @
# # @@
    @
 ## @
##  @
### @
 ## @
##  @@
    @
# # @
  # @
 #  @
#   @
# # @@
    @
 #  @
#   @
 ## @
# # @
### @@
    @
  # @
 #  @
#   @
    @
    @@
    @
  # @
 #  @
 #  @
 #  @
  # @@
    @
#   @
 #  @
 #  @
 #  @
#   @@
    @
 #  @
### @
 #  @
### @
 #  @@
    @
    @
 #  @
### @
 #  @
    @@
    @
    @
    @
    @
 #  @
#   @@
    @
    @
    @
### @
    @
    @@
    @
    @
    @
    @
    @
 #  @@
    @
#   @
#   @
##  @
# # @
##  @@
    @
### @
# # @
# # @
# # @
### @@
    @
 #  @
##  @
 #  @
 #  @
### @@
    @
### @
  # @
### @
#   @
### @@
    @
### @
  # @
 ## @
  # @
### @@
    @
# # @
# # @
### @
  # @
  # @@
    @
### @
#   @
### @
  # @
### @@
    @
### @
#   @
### @
# # @
### @@
    @
### @
  # @
  # @
  # @
  # @@
    @
### @
# # @
### @
# # @
### @@
    @
### @
# # @
### @
  # @
### @@
    @
    @
 #  @
    @
 #  @
    @@
    @
    @
 #  @
    @
 #  @
#   @@
    @
  # @
 #  @
#   @
 #  @
  # @@
    @
    @
### @
    @
### @
    @@
      @
# # # @
#  ## @
# # # @
##  # @
#   # @@
    @
### @
  # @
 ## @
    @
 #  @@
    @
### @
# # @
#   @
### @
    @@
      @
  #   @
 # #  @
##### @
#   # @
#   # @@
      @
####  @
 #    @
 #### @
 #  # @
##### @@
      @
#   # @
#   # @
 #### @
    # @
    # @@
       @
#####  @
 #  #  @
 #  #  @
 ####  @
#    # @@
      @
##### @
#     @
####  @
#     @
##### @@
      @
  #   @
 ###  @
# # # @
 ###  @
  #   @@
      @
##### @
#   # @
#     @
#     @
#     @@
      @
#   # @
 # #  @
  #   @
 # #  @
#   # @@
      @
#   # @
#  ## @
# # # @
##  # @
#   # @@
      @
# # # @
 ###  @
  #   @
 ###  @
# # # @@
      @
#   # @
#  #  @
###   @
#  #  @
#   # @@
      @
##### @
 #  # @
 #  # @
 #  # @
#   # @@
      @
#   # @
## ## @
# # # @
#   # @
#   # @@
      @
#   # @
#   # @
##### @
#   # @
#   # @@
      @
 ###  @
#   # @
#   # @
#   # @
 ###  @@
      @
##### @
#   # @
#   # @
#   # @
#   # @@
      @
#   # @
#   # @
#   # @
##### @
    # @@
      @
####  @
#   # @
####  @
#     @
#     @@
      @
 #### @
#     @
#     @
#     @
 #### @@
      @
##### @
  #   @
  #   @
  #   @
  #   @@
      @
#   # @
 # #  @
  #   @
 #    @
#     @@
      @
####  @
#   # @
####  @
#   # @
####  @@
      @
#   # @
# # # @
# # # @
# # # @
 ###  @@
       @
#   #  @
# # #  @
# # #  @
# # #  @
 ##### @@
      @
 #### @
#   # @
 #### @
 #  # @
#   # @@
      @
####  @
    # @
 ###  @
    # @
####  @@
    @
 ## @
 #  @
 #  @
 #  @
 ## @@
    @
##  @
#   @
##  @
# # @
##  @@
    @
##  @
 #  @
 #  @
 #  @
##  @@
    @
 #  @
# # @
    @
    @
    @@
    @
    @
    @
    @
    @
### @@
       @
#  ##  @
# #  # @
###  # @
# #  # @
#  ##  @@
      @
  #   @
 # #  @
##### @
#   # @
#   # @@
      @
####  @
 #    @
 #### @
 #  # @
##### @@
      @
#   # @
#   # @
 #### @
    # @
    # @@
       @
#####  @
 #  #  @
 #  #  @
 ####  @
#    # @@
      @
##### @
#     @
####  @
#     @
##### @@
      @
  #   @
 ###  @
# # # @
 ###  @
  #   @@
      @
##### @
#   # @
#     @
#     @
#     @@
      @
#   # @
 # #  @
  #   @
 # #  @
#   # @@
      @
#   # @
#  ## @
# # # @
##  # @
#   # @@
      @
# # # @
 ###  @
  #   @
 ###  @
# # # @@
      @
#   # @
#  #  @
###   @
#  #  @
#   # @@
      @
##### @
 #  # @
 #  # @
 #  # @
#   # @@
      @
#   # @
## ## @
# # # @
#   # @
#   # @@
      @
#   # @
#   # @
##### @
#   # @
#   # @@
      @
 ###  @
#   # @
#   # @
#   # @
 ###  @@
      @
##### @
#   # @
#   # @
#   # @
#   # @@
      @
#   # @
#   # @
#   # @
##### @
    # @@
      @
####  @
#   # @
####  @
#     @
#     @@
      @
 #### @
#     @
#     @
#     @
 #### @@
      @
##### @
  #   @
  #   @
  #   @
  #   @@
      @
#   # @
 # #  @
  #   @
 #    @
#     @@
      @
####  @
#   # @
####  @
#   # @
####  @@
      @
#   # @
# # # @
# # # @
# # # @
 ###  @@
       @
#   #  @
# # #  @
# # #  @
# # #  @
 ##### @@
      @
 #### @
#   # @
 #### @
 #  # @
#   # @@
      @
####  @
    # @
 ###  @
    # @
####  @@
    @
 ## @
 #  @
##  @
 #  @
 ## @@
      @
#   # @
#   # @
##  # @
# # # @
##  # @@
    @
##  @
 #  @
 ## @
 #  @
##  @@
      @
####  @
    # @
##### @
    # @
####  @@
    @
    @
    @
    @
    @
    @@
    @
    @
    @
    @
    @
    @@
    @
    @
    @
    @
    @
    @@
    @
    @
    @
    @
    @
    @@
    @
    @
    @
    @
    @
    @@
    @
    @
    @
    @
    @
    @@
    @
    @
    @
    @
    @
    @@
`,Fp=`flf2a$ 6 5 20 15 13
Standard by Glenn Chappell & Ian Chai 3/93 -- based on .sig of Frank Sheeran
Figlet release 2.0 -- August 5, 1993

Explanation of first line:
flf2 - "magic number" for file identification
a    - should always be \`a', for now
$    - the "hardblank" -- prints as a blank, but can't be smushed
6    - height of a character
5    - height of a character, not including descenders
20   - max line length (excluding comment lines) + a fudge factor
15   - default smushmode for this font (like "-m 15" on command line)
13   - number of comment lines

$@
$@
$@
$@
$@
$@@
   _ @
  / \\@
 /  /@
/\\_/ @
\\/   @
     @@
 _ _ @
( | )@
 V V @
     @
     @
     @@
   _  _   @
 _| || |_ @
|_  ..  _|@
|_      _|@
  |_||_|  @
          @@
  _  @
 | | @
/ __)@
\\__ \\@
(   /@
 |_| @@
 _  __@
(_)/ /@
  / / @
 / /_ @
/_/(_)@
      @@
  ___   @
 ( _ )  @
 / _ \\/\\@
| (_>  <@
 \\___/\\/@
        @@
 _ @
( )@
|/ @
   @
   @
   @@
  __@
 / /@
| | @
| | @
| | @
 \\_\\@@
__  @
\\ \\ @
 | |@
 | |@
 | |@
/_/ @@
      @
__/\\__@
\\    /@
/_  _\\@
  \\/  @
      @@
       @
   _   @
 _| |_ @
|_   _|@
  |_|  @
       @@
   @
   @
   @
 _ @
( )@
|/ @@
       @
       @
 _____ @
|_____|@
       @
       @@
   @
   @
   @
 _ @
(_)@
   @@
    __@
   / /@
  / / @
 / /  @
/_/   @
      @@
  ___  @
 / _ \\ @
| | | |@
| |_| |@
 \\___/ @
       @@
 _ @
/ |@
| |@
| |@
|_|@
   @@
 ____  @
|___ \\ @
  __) |@
 / __/ @
|_____|@
       @@
 _____ @
|___ / @
  |_ \\ @
 ___) |@
|____/ @
       @@
 _  _   @
| || |  @
| || |_ @
|__   _|@
   |_|  @
        @@
 ____  @
| ___| @
|___ \\ @
 ___) |@
|____/ @
       @@
  __   @
 / /_  @
| '_ \\ @
| (_) |@
 \\___/ @
       @@
 _____ @
|___  |@
   / / @
  / /  @
 /_/   @
       @@
  ___  @
 ( _ ) @
 / _ \\ @
| (_) |@
 \\___/ @
       @@
  ___  @
 / _ \\ @
| (_) |@
 \\__, |@
   /_/ @
       @@
   @
 _ @
(_)@
 _ @
(_)@
   @@
   @
 _ @
(_)@
 _ @
( )@
|/ @@
  __@
 / /@
/ / @
\\ \\ @
 \\_\\@
    @@
       @
 _____ @
|_____|@
|_____|@
       @
       @@
__  @
\\ \\ @
 \\ \\@
 / /@
/_/ @
    @@
 ___ @
/ _ \\@
\\// /@
  \\/ @
  () @
     @@
   ____  @
  / __ \\ @
 / / _\` |@
| | (_| |@
 \\ \\__,_|@
  \\____/ @@
   _   @
  /_\\  @
 //_\\\\ @
/  _  \\@
\\_/ \\_/@
       @@
   ___ @
  / __\\@
 /__\\//@
/ \\/  \\@
\\_____/@
       @@
   ___ @
  / __\\@
 / /   @
/ /___ @
\\____/ @
       @@
    ___ @
   /   \\@
  / /\\ /@
 / /_// @
/___,'  @
        @@
   __ @
  /__\\@
 /_\\  @
//__  @
\\__/  @
      @@
   ___ @
  / __\\@
 / _\\  @
/ /    @
\\/     @
       @@
   ___ @
  / _ \\@
 / /_\\/@
/ /_\\\\ @
\\____/ @
       @@
        @
  /\\  /\\@
 / /_/ /@
/ __  / @
\\/ /_/  @
        @@
  _____ @
  \\_   \\@
   / /\\/@
/\\/ /_  @
\\____/  @
        @@
   __  @
   \\ \\ @
    \\ \\@
 /\\_/ /@
 \\___/ @
       @@
       @
  /\\ /\\@
 / //_/@
/ __ \\ @
\\/  \\/ @
       @@
   __  @
  / /  @
 / /   @
/ /___ @
\\____/ @
       @@
        @
  /\\/\\  @
 /    \\ @
/ /\\/\\ \\@
\\/    \\/@
        @@
     __ @
  /\\ \\ \\@
 /  \\/ /@
/ /\\  / @
\\_\\ \\/  @
        @@
   ___ @
  /___\\@
 //  //@
/ \\_// @
\\___/  @
       @@
   ___ @
  / _ \\@
 / /_)/@
/ ___/ @
\\/     @
       @@
   ____ @
  /___ \\@
 //  / /@
/ \\_/ / @
\\___,_\\ @
        @@
   __  @
  /__\\ @
 / \\// @
/ _  \\ @
\\/ \\_/ @
       @@
 __    @
/ _\\   @
\\ \\    @
_\\ \\   @
\\__/   @
       @@
 _____ @
/__   \\@
  / /\\/@
 / /   @
 \\/    @
       @@
       @
 /\\ /\\ @
/ / \\ \\@
\\ \\_/ /@
 \\___/ @
       @@
         @
 /\\   /\\ @
 \\ \\ / / @
  \\ V /  @
   \\_/   @
         @@
 __    __ @
/ / /\\ \\ \\@
\\ \\/  \\/ /@
 \\  /\\  / @
  \\/  \\/  @
          @@
__  __@
\\ \\/ /@
 \\  / @
 /  \\ @
/_/\\_\\@
      @@
     @
/\\_/\\@
\\_ _/@
 / \\ @
 \\_/ @
     @@
 _____@
/ _  /@
\\// / @
 / //\\@
/____/@
      @@
 __ @
| _|@
| | @
| | @
| | @
|__|@@
__    @
\\ \\   @
 \\ \\  @
  \\ \\ @
   \\_\\@
      @@
 __ @
|_ |@
 | |@
 | |@
 | |@
|__|@@
    @
 /\\ @
|/\\|@
    @
    @
    @@
       @
       @
       @
       @
 _____ @
|_____|@@
 _ @
( )@
 \\|@
   @
   @
   @@
       @
  __ _ @
 / _\` |@
| (_| |@
 \\__,_|@
       @@
 _     @
| |__  @
| '_ \\ @
| |_) |@
|_.__/ @
       @@
      @
  ___ @
 / __|@
| (__ @
 \\___|@
      @@
     _ @
  __| |@
 / _\` |@
| (_| |@
 \\__,_|@
       @@
      @
  ___ @
 / _ \\@
|  __/@
 \\___|@
      @@
  __ @
 / _|@
| |_ @
|  _|@
|_|  @
     @@
       @
  __ _ @
 / _\` |@
| (_| |@
 \\__, |@
 |___/ @@
 _     @
| |__  @
| '_ \\ @
| | | |@
|_| |_|@
       @@
 _ @
(_)@
| |@
| |@
|_|@
   @@
   _ @
  (_)@
  | |@
  | |@
 _/ |@
|__/ @@
 _    @
| | __@
| |/ /@
|   < @
|_|\\_\\@
      @@
 _ @
| |@
| |@
| |@
|_|@
   @@
           @
 _ __ ___  @
| '_ \` _ \\ @
| | | | | |@
|_| |_| |_|@
           @@
       @
 _ __  @
| '_ \\ @
| | | |@
|_| |_|@
       @@
       @
  ___  @
 / _ \\ @
| (_) |@
 \\___/ @
       @@
       @
 _ __  @
| '_ \\ @
| |_) |@
| .__/ @
|_|    @@
       @
  __ _ @
 / _\` |@
| (_| |@
 \\__, |@
    |_|@@
      @
 _ __ @
| '__|@
| |   @
|_|   @
      @@
     @
 ___ @
/ __|@
\\__ \\@
|___/@
     @@
 _   @
| |_ @
| __|@
| |_ @
 \\__|@
     @@
       @
 _   _ @
| | | |@
| |_| |@
 \\__,_|@
       @@
       @
__   __@
\\ \\ / /@
 \\ V / @
  \\_/  @
       @@
          @
__      __@
\\ \\ /\\ / /@
 \\ V  V / @
  \\_/\\_/  @
          @@
      @
__  __@
\\ \\/ /@
 >  < @
/_/\\_\\@
      @@
       @
 _   _ @
| | | |@
| |_| |@
 \\__, |@
 |___/ @@
     @
 ____@
|_  /@
 / / @
/___|@
     @@
   __@
  / /@
 | | @
< <  @
 | | @
  \\_\\@@
 _ @
| |@
| |@
| |@
| |@
|_|@@
__   @
\\ \\  @
 | | @
  > >@
 | | @
/_/  @@
     @
 /\\/|@
|/\\/ @
     @
     @
     @@
 _   _ @
(_)_(_)@
 / _ \\ @
|  _  |@
|_| |_|@
       @@
 _   _ @
(_)_(_)@
 / _ \\ @
| |_| |@
 \\___/ @
       @@
 _   _ @
(_) (_)@
| | | |@
| |_| |@
 \\___/ @
       @@
 _   _ @
(_)_(_)@
 / _\` |@
| (_| |@
 \\__,_|@
       @@
 _   _ @
(_)_(_)@
 / _ \\ @
| (_) |@
 \\___/ @
       @@
 _   _ @
(_) (_)@
| | | |@
| |_| |@
 \\__,_|@
       @@
 ____ @
| __ \\@
| |/ /@
| |\\ \\@
|_||_/@
      @@
`,jp=`flf2a$ 12 10 40 0 10
"Patorjk-HeX" font by patorjk (patorjk@gmail.com) and HeX.

This font is my monospaced interpretation of (the very cool) HeX's AOL Font. 
I tried to make it look as close as possible to the original font (which was 
done in Arial). 

For this FIGlet version, I've re-done the letters in a monospaced fashion and 
added a period. I hope to add other characters later on, so this font can be 
seen as a work in progress. 

$     $@
$     $@
$     $@
$     $@
$     $@
$     $@
$     $@
$     $@
$     $@
$     $@
$     $@
$     $@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
*@
 @
 @
 @
 @
 @
 @
 @
 @
 @
 @
 @@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
-@
 @
 @
 @
 @
 @
 @
 @
 @
 @
 @
 @@
       @
       @
       @
       @
       @
       @
       @
       @
  ___  @
 |   | @
 |___| @
       @@
@
@
@
@
@
@
@
@
@
@
@
@@
0@
 @
 @
 @
 @
 @
 @
 @
 @
 @
 @
 @@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
9@
 @
 @
 @
 @
 @
 @
 @
 @
 @
 @
 @@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
                  @
    _____         @
  /      |_       @
 /         \\      @
|     /\\    \\     @
|    |  |    \\    @
|     \\/      \\   @
|\\      /\\     \\  @
| \\_____\\ \\_____\\ @
| |     | |     | @
 \\|_____|\\|_____| @
                  @@
                 @
______  ______   @
\\     \\|\\     \\  @
 |     |\\|     | @
 |     |/____ /  @
 |     |\\     \\  @
 |     | |     | @
 |     | |     | @
/_____/|/_____/| @
|    |||     | | @
|____|/|_____|/  @
                 @@
                 @
        _____    @
   _____\\    \\_  @
  /     /|     | @
 /     / /____/| @
|     | |____|/  @
|     |  _____   @
|\\     \\|\\    \\  @
| \\_____\\|    |  @
| |     /____/|  @
 \\|_____|    ||  @
        |____|/  @@
                 @
 ____________    @
 \\           \\   @
  \\           \\  @
   |    /\\     | @
   |   |  |    | @
   |    \\/     | @
  /           /| @
 /___________/ | @
|           | /  @
|___________|/   @
                 @@
        _____   @
   _____\\    \\  @
  /    / |    | @
 /    /  /___/| @
|    |__ |___|/ @
|       \\       @
|     __/ __    @
|\\    \\  /  \\   @
| \\____\\/    |  @
| |    |____/|  @
 \\|____|   | |  @
       |___|/   @@
       _____    @
 ____  \\    \\   @
 \\   \\ /____/|  @
  |  |/_____|/  @
  |  |    ___   @
  |   \\__/   \\  @
 /      /\\___/| @
/      /| | | | @
|_____| /\\|_|/  @
|     |/        @
|_____|         @
                @@
                     @
        _____        @
   _____\\    \\_      @
  /     /|     |     @
 /     / /____/|     @
|     | |_____|/     @
|     | |_________   @
|\\     \\|\\        \\  @
| \\_____\\|    |\\__/| @
| |     /____/| | || @
 \\|_____|     |\\|_|/ @
        |____/       @@
                        @
       __     __        @
      /  \\   /  \\       @
     /   /| |\\   \\      @
    /   //   \\\\   \\     @
   /    \\_____/    \\    @
  /    /\\_____/\\    \\   @
 /    //\\_____/\\\\    \\  @
/____/ |       | \\____\\ @
|    | |       | |    | @
|____|/         \\|____| @
                        @@
                 @
  ____________   @
 /            \\  @
|\\___/\\  \\\\___/| @
 \\|____\\  \\___|/ @
       |  |      @
  __  /   / __   @
 /  \\/   /_/  |  @
|____________/|  @
|           | /  @
|___________|/   @
                 @@
                    @
          _____     @
         |\\    \\_   @
         \\ \\     \\  @
          \\|      | @
           |      | @
   ______  |      | @
  /     / /      /| @
 |      |/______/ | @
 |\\_____\\      | /  @
 | |     |_____|/   @
  \\|_____|          @@
                    @
 ______   _______   @
|\\     \\  \\      \\  @
 \\\\     \\  |     /| @
  \\|     |/     //  @
   |     |_____//   @
   |     |\\     \\   @
  /     /|\\|     |  @
 /_____/ |/_____/|  @
|     | / |    | |  @
|_____|/  |____|/   @
                    @@
                   @
 _____             @
|\\    \\            @
 \\\\    \\           @
  \\\\    \\          @
   \\|    | ______  @
    |    |/      \\ @
    /            | @
   /_____/\\_____/| @
  |      | |    || @
  |______|/|____|/ @
                   @@
                            @
        ___________         @
       /           \\        @
      /    _   _    \\       @
     /    //   \\\\    \\      @
    /    //     \\\\    \\     @
   /     \\\\_____//     \\    @
  /       \\ ___ /       \\   @
 /________/|   |\\________\\  @
|        | |   | |        | @
|________|/     \\|________| @
                            @@
                    @
 _____    _____     @
|\\    \\   \\    \\    @
 \\\\    \\   |    |   @
  \\\\    \\  |    |   @
   \\|    \\ |    |   @
    |     \\|    |   @
   /     /\\      \\  @
  /_____/ /______/| @
 |      | |     | | @
 |______|/|_____|/  @
                    @@
                 @
       ____      @
   ____\\_  \\__   @
  /     /     \\  @
 /     /\\      | @
|     |  |     | @
|     |  |     | @
|     | /     /| @
|\\     \\_____/ | @
| \\_____\\   | /  @
 \\ |    |___|/   @
  \\|____|        @@
        ______   @
  _____|\\     \\  @
 /     / |     | @
|      |/     /| @
|      |\\____/ | @
|\\     \\    | /  @
| \\     \\___|/   @
|  \\     \\       @
 \\  \\_____\\      @
  \\ |     |      @
   \\|_____|      @
                 @@
      ______      @
   ___\\__   \\_    @
  /     /     \\   @
 /     /\\     |   @
|     |  |    |   @
|     | /     |   @
|     |/     /|   @
|\\     \\_   /_|_  @
| \\_____\\\\______\\ @
| |     |       | @
 \\|_____|_______| @
                  @@
                  @
___________       @
\\          \\      @
 \\    /\\    \\     @
  |   \\_\\    |    @
  |      ___/     @
  |      \\  ____  @
 /     /\\ \\/    \\ @
/_____/ |\\______| @
|     | | |     | @
|_____|/ \\|_____| @
                  @@
                    @
            _____   @
       _____\\    \\  @
      /    / \\    | @
     |    |  /___/| @
  ____\\    \\ |   || @
 /    /\\    \\|___|/ @
|    |/ \\    \\      @
|\\____\\ /____/|     @
| |   ||    | |     @
 \\|___||____|/      @
                    @@
                         @
  ________    ________   @
 /        \\  /        \\  @
|\\         \\/         /| @
| \\            /\\____/ | @
|  \\______/\\   \\     | | @
 \\ |      | \\   \\____|/  @
  \\|______|  \\   \\       @
           \\  \\___\\      @
            \\ |   |      @
             \\|___|      @
                         @@
                   @
______   _____     @
\\     \\  \\    \\    @
 \\    |  |    |    @
  |   |  |    |    @
  |    \\_/   /|    @
  |\\         \\|    @
  | \\         \\__  @
   \\ \\_____/\\    \\ @
    \\ |    |/___/| @
     \\|____|   | | @
           |___|/  @@
                   @
_______    ______  @
\\      |  |      | @
 |     /  /     /| @
 |\\    \\  \\    |/  @
 \\ \\    \\ |    |   @
  \\|     \\|    |   @
   |\\         /|   @
   | \\_______/ |   @
    \\ |     | /    @
     \\|_____|/     @
                   @@
                          @
   _______     _______    @
  /      /|   |\\      \\   @
 /      / |   | \\      \\  @
|      /  |___|  \\      | @
|      |  |   |  |      | @
|       \\ \\   / /       | @
|      |\\\\/   \\//|      | @
|\\_____\\|\\_____/|/_____/| @
| |     | |   | |     | | @
 \\|_____|\\|___|/|_____|/  @
                          @@
                  @
_____       _____ @
\\    \\     /    / @
 \\    |   |    /  @
  \\    \\ /    /   @
   \\    |    /    @
   /    |    \\    @
  /    /|\\    \\   @
 |____|/ \\|____|  @
 |    |   |    |  @
 |____|   |____|  @
                  @@
                 @
 ______   _____  @
|\\     \\ |     | @
\\ \\     \\|     | @
 \\ \\           | @
  \\ \\____      | @
   \\|___/     /| @
       /     / | @
      /_____/  / @
      |     | /  @
      |_____|/   @
                 @@
                   @
  _____  ______    @
 /    / /     /|   @
|     |/     / |   @
|\\____\\\\    / /    @
 \\|___|/   / /     @
    /     /_/____  @
   /     /\\      | @
  /_____/ /_____/| @
  |    |/|     | | @
  |____| |_____|/  @
                   @@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
                  @
    _____         @
  /      |_       @
 /         \\      @
|     /\\    \\     @
|    |  |    \\    @
|     \\/      \\   @
|\\      /\\     \\  @
| \\_____\\ \\_____\\ @
| |     | |     | @
 \\|_____|\\|_____| @
                  @@
                 @
______  ______   @
\\     \\|\\     \\  @
 |     |\\|     | @
 |     |/____ /  @
 |     |\\     \\  @
 |     | |     | @
 |     | |     | @
/_____/|/_____/| @
|    |||     | | @
|____|/|_____|/  @
                 @@
                 @
        _____    @
   _____\\    \\_  @
  /     /|     | @
 /     / /____/| @
|     | |____|/  @
|     |  _____   @
|\\     \\|\\    \\  @
| \\_____\\|    |  @
| |     /____/|  @
 \\|_____|    ||  @
        |____|/  @@
                 @
 ____________    @
 \\           \\   @
  \\           \\  @
   |    /\\     | @
   |   |  |    | @
   |    \\/     | @
  /           /| @
 /___________/ | @
|           | /  @
|___________|/   @
                 @@
        _____   @
   _____\\    \\  @
  /    / |    | @
 /    /  /___/| @
|    |__ |___|/ @
|       \\       @
|     __/ __    @
|\\    \\  /  \\   @
| \\____\\/    |  @
| |    |____/|  @
 \\|____|   | |  @
       |___|/   @@
       _____    @
 ____  \\    \\   @
 \\   \\ /____/|  @
  |  |/_____|/  @
  |  |    ___   @
  |   \\__/   \\  @
 /      /\\___/| @
/      /| | | | @
|_____| /\\|_|/  @
|     |/        @
|_____|         @
                @@
                     @
        _____        @
   _____\\    \\_      @
  /     /|     |     @
 /     / /____/|     @
|     | |_____|/     @
|     | |_________   @
|\\     \\|\\        \\  @
| \\_____\\|    |\\__/| @
| |     /____/| | || @
 \\|_____|     |\\|_|/ @
        |____/       @@
                        @
       __     __        @
      /  \\   /  \\       @
     /   /| |\\   \\      @
    /   //   \\\\   \\     @
   /    \\_____/    \\    @
  /    /\\_____/\\    \\   @
 /    //\\_____/\\\\    \\  @
/____/ |       | \\____\\ @
|    | |       | |    | @
|____|/         \\|____| @
                        @@
                 @
  ____________   @
 /            \\  @
|\\___/\\  \\\\___/| @
 \\|____\\  \\___|/ @
       |  |      @
  __  /   / __   @
 /  \\/   /_/  |  @
|____________/|  @
|           | /  @
|___________|/   @
                 @@
                    @
          _____     @
         |\\    \\_   @
         \\ \\     \\  @
          \\|      | @
           |      | @
   ______  |      | @
  /     / /      /| @
 |      |/______/ | @
 |\\_____\\      | /  @
 | |     |_____|/   @
  \\|_____|          @@
                    @
 ______   _______   @
|\\     \\  \\      \\  @
 \\\\     \\  |     /| @
  \\|     |/     //  @
   |     |_____//   @
   |     |\\     \\   @
  /     /|\\|     |  @
 /_____/ |/_____/|  @
|     | / |    | |  @
|_____|/  |____|/   @
                    @@
                   @
 _____             @
|\\    \\            @
 \\\\    \\           @
  \\\\    \\          @
   \\|    | ______  @
    |    |/      \\ @
    /            | @
   /_____/\\_____/| @
  |      | |    || @
  |______|/|____|/ @
                   @@
                            @
        ___________         @
       /           \\        @
      /    _   _    \\       @
     /    //   \\\\    \\      @
    /    //     \\\\    \\     @
   /     \\\\_____//     \\    @
  /       \\ ___ /       \\   @
 /________/|   |\\________\\  @
|        | |   | |        | @
|________|/     \\|________| @
                            @@
                    @
 _____    _____     @
|\\    \\   \\    \\    @
 \\\\    \\   |    |   @
  \\\\    \\  |    |   @
   \\|    \\ |    |   @
    |     \\|    |   @
   /     /\\      \\  @
  /_____/ /______/| @
 |      | |     | | @
 |______|/|_____|/  @
                    @@
                 @
       ____      @
   ____\\_  \\__   @
  /     /     \\  @
 /     /\\      | @
|     |  |     | @
|     |  |     | @
|     | /     /| @
|\\     \\_____/ | @
| \\_____\\   | /  @
 \\ |    |___|/   @
  \\|____|        @@
        ______   @
  _____|\\     \\  @
 /     / |     | @
|      |/     /| @
|      |\\____/ | @
|\\     \\    | /  @
| \\     \\___|/   @
|  \\     \\       @
 \\  \\_____\\      @
  \\ |     |      @
   \\|_____|      @
                 @@
      ______      @
   ___\\__   \\_    @
  /     /     \\   @
 /     /\\     |   @
|     |  |    |   @
|     | /     |   @
|     |/     /|   @
|\\     \\_   /_|_  @
| \\_____\\\\______\\ @
| |     |       | @
 \\|_____|_______| @
                  @@
                  @
___________       @
\\          \\      @
 \\    /\\    \\     @
  |   \\_\\    |    @
  |      ___/     @
  |      \\  ____  @
 /     /\\ \\/    \\ @
/_____/ |\\______| @
|     | | |     | @
|_____|/ \\|_____| @
                  @@
                    @
            _____   @
       _____\\    \\  @
      /    / \\    | @
     |    |  /___/| @
  ____\\    \\ |   || @
 /    /\\    \\|___|/ @
|    |/ \\    \\      @
|\\____\\ /____/|     @
| |   ||    | |     @
 \\|___||____|/      @
                    @@
                         @
  ________    ________   @
 /        \\  /        \\  @
|\\         \\/         /| @
| \\            /\\____/ | @
|  \\______/\\   \\     | | @
 \\ |      | \\   \\____|/  @
  \\|______|  \\   \\       @
           \\  \\___\\      @
            \\ |   |      @
             \\|___|      @
                         @@
                   @
______   _____     @
\\     \\  \\    \\    @
 \\    |  |    |    @
  |   |  |    |    @
  |    \\_/   /|    @
  |\\         \\|    @
  | \\         \\__  @
   \\ \\_____/\\    \\ @
    \\ |    |/___/| @
     \\|____|   | | @
           |___|/  @@
                   @
_______    ______  @
\\      |  |      | @
 |     /  /     /| @
 |\\    \\  \\    |/  @
 \\ \\    \\ |    |   @
  \\|     \\|    |   @
   |\\         /|   @
   | \\_______/ |   @
    \\ |     | /    @
     \\|_____|/     @
                   @@
                          @
   _______     _______    @
  /      /|   |\\      \\   @
 /      / |   | \\      \\  @
|      /  |___|  \\      | @
|      |  |   |  |      | @
|       \\ \\   / /       | @
|      |\\\\/   \\//|      | @
|\\_____\\|\\_____/|/_____/| @
| |     | |   | |     | | @
 \\|_____|\\|___|/|_____|/  @
                          @@
                  @
_____       _____ @
\\    \\     /    / @
 \\    |   |    /  @
  \\    \\ /    /   @
   \\    |    /    @
   /    |    \\    @
  /    /|\\    \\   @
 |____|/ \\|____|  @
 |    |   |    |  @
 |____|   |____|  @
                  @@
                 @
 ______   _____  @
|\\     \\ |     | @
\\ \\     \\|     | @
 \\ \\           | @
  \\ \\____      | @
   \\|___/     /| @
       /     / | @
      /_____/  / @
      |     | /  @
      |_____|/   @
                 @@
                   @
  _____  ______    @
 /    / /     /|   @
|     |/     / |   @
|\\____\\\\    / /    @
 \\|___|/   / /     @
    /     /_/____  @
   /     /\\      | @
  /_____/ /_____/| @
  |    |/|     | | @
  |____| |_____|/  @
                   @@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@
@@`,zp=`flf2a$ 12 10 20 -1 14
poison.flf composed into figlet by Vinney Thai <ssfiit@eris.cc.umb.edu>
poison font (numbers & puntuation marks) composed by Vinney Thai
poison font (uppercase characters) composed David Issel <dissel@nunic.nu.edu>
date: Oct 23, 1994
Explanation of first line:
flf2 - "magic number" for file identification
a    - should always be \`a', for now
$    - the "hardblank" -- prints as a blank, but can't be smushed
12   - height of a character
10   - height of a character, not including descenders
20   - max line length (excluding comment lines) + a fudge factor
-1   - default smushmode for this font (like "-m 0" on command line)
15   - number of comment lines

$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@@
     @
@@@ $@
@@@ $@
@@! $@
!@  $@
@!@ $@
!!! $@
     @
:!: $@
 :: $@
::: $@
     @@
         @
@@@ @@@ $@
@@@ @@@ $@
@@! @@! $@
 @!  @! $@
  $   $  @
  $   $  @
  $   $  @
  $   $  @
  $   $  @
  $   $  @
         @@
              @
  @@@  @@@ $  @
  @@@  @@@ $  @
@!@@!@!@@@@! $@
!@!@!!@@!@!@ $@
  @!@  !@! $  @
  !!!  !!! $  @
!:!!:!:!!!!: $@
:!:!::!!:!:! $@
  ::   ::: $  @
   :   : : $  @
              @@
            @
    @@ $    @
 @@@@@@@@@ $@
!@@!@@!@@! $@
!@! !@ $    @
!!!@@!!!! $ @
 !!!@@@!!! $@
    !: !:! $@
!:!!:!: :! $@
: :::: :: $ @
    :: $    @
            @@
              @
@@@@     @@@ $@
@@@@    @@@ $ @
@@!@   @@! $  @
      !@! $   @
     @!! $    @
    !!! $     @
   !!: $      @
  ::!   ::!: $@
  ::    :::  $@
: :     : :: $@
              @@
             @
  @@@@@ $    @
 @@@@@@@ $   @
@@!   @@@ $  @
 !@  @!@ $   @
  @!@!@ $    @
  !!!@  !!! $@
 !!:!!:!!: $ @
:!:  !:!: $  @
::: :::::: $ @
 ::: :: ::: $@
             @@
     @
@@@ $@
 @@ $@
@! $ @
 $   @
 $   @
 $   @
 $   @
 $   @
 $   @
 $   @
     @@
        @
   @@@ $@
  @@@ $ @
 @@! $  @
!@! $   @
!!@ $   @
!!! $   @
!!: $   @
 :!: $  @
   :: $ @
     : $@
        @@
        @
@@@ $   @
 @@@ $  @
  @@! $ @
   !@! $@
   !!@ $@
   !!! $@
   !!: $@
  :!: $ @
 :: $   @
: $     @
        @@
            @
            @
@@!    !@@ $@
 !@!  @!! $ @
  !@@!@! $  @
@!@!@!!@!! $@
  !: :!! $  @
 :!:  !:! $ @
:::    ::: $@
            @
            @
            @@
           @
           @
           @
   @@! $   @
   !@! $   @
@!@!@!@!@ $@
!!!@!@!!! $@
   !!: $   @
   :!: $   @
           @
           @
           @@
     @
     @
     @
     @
     @
     @
     @
     @
:!: $@
 :: $@
:: $ @
     @@
           @
           @
           @
           @
           @
@!@!@!@!@ $@
!!!@!@!!! $@
           @
           @
           @
           @
           @@
     @
     @
     @
     @
     @
     @
     @
     @
:!: $@
::: $@
::: $@
     @@
              @
         @@@ $@
        @@@ $ @
       @@! $  @
      !@! $   @
     @!! $    @
    !!! $     @
   !!: $      @
  ::! $       @
  :: $        @
: : $         @
              @@
            @
 @@@@@@@@ $ @
@@@@@@@@@@ $@
@@!   @@@@ $@
!@!  @!@!@ $@
@!@ @! !@! $@
!@!!!  !!! $@
!!:!   !!! $@
:!:    !:! $@
::::::: :: $@
 : : :  : $ @
            @@
       @
  @@@ $@
 @@@@ $@
@@@!! $@
  !@! $@
  @!@ $@
  !@! $@
  !!: $@
  :!: $@
  ::: $@
   :: $@
       @@
          @
 @@@@@@ $ @
@@@@@@@@ $@
     @@@ $@
    @!@ $ @
   !!@ $  @
  !!: $   @
 !:! $    @
:!: $     @
:: ::::: $@
:: : ::: $@
          @@
         @
@@@@@@ $ @
@@@@@@@ $@
    @@@ $@
    @!@ $@
@!@!!@ $ @
!!@!@! $ @
    !!: $@
    :!: $@
:: :::: $@
 : : : $ @
         @@
           @
     @@@ $ @
    @@@@ $ @
   @@!@! $ @
  !@!!@! $ @
 @!! @!! $ @
!!!  !@! $ @
:!!:!:!!: $@
!:::!!::: $@
     ::: $ @
     ::: $ @
           @@
         @
@@@@@@@ $@
@@@@@@@ $@
!@@ $    @
!@! $    @
!!@@!! $ @
@!!@!!! $@
    !:! $@
    !:! $@
:::: :: $@
:: : : $ @
         @@
          @
  @@@@@@ $@
 @@@@@@@ $@
!@@ $     @
!@! $     @
!!@@!@! $ @
@!!@!!!! $@
!:!  !:! $@
:!:  !:! $@
:::: ::: $@
 :: : : $ @
          @@
          @
@@@@@@@@ $@
@@@@@@@@ $@
     @@! $@
    !@! $ @
   @!! $  @
  !!! $   @
 !!: $    @
:!: $     @
 :: $     @
: : $     @
          @@
          @
 @@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@!  @!@ $@
 !@!!@! $ @
 !!@!!! $ @
!!:  !!! $@
:!:  !:! $@
::::: :: $@
 : :  : $ @
          @@
          @
 @@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@!  @!@ $@
!!@!!@!! $@
  !!@!!! $@
     !!! $@
     !:! $@
::::: :: $@
 : :  : $ @
          @@
     @
     @
     @
     @
@!@ $@
!@! $@
!:! $@
 $$  @
:!: $@
::: $@
::: $@
     @@
     @
     @
     @
     @
@!@  @
!@! $@
:!: $@
 $$  @
:!: $@
 :: $@
:: $ @
     @@
             @
        @@@ $@
      @@@ $  @
    @@! $    @
  !@! $      @
!!@ $        @
!!! $        @
  !!: $      @
    :!: $    @
      :: $   @
        : $  @
             @@
           @
           @
           @
           @
!@!!@!!@! $@
@!@!@!@!@ $@
 $      $  @
!!:!!::!! $@
::!:!:!!: $@
           @
           @
           @@
             @
@@@ $        @
  @@@ $      @
    @@! $    @
      !@! $  @
        !!@ $@
        !!! $@
      !!: $  @
    :!: $    @
  :: $       @
: $          @
             @@
          @
 @@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
    @!@ $ @
   !!@ $  @
  !!@ $   @
          @
  !:! $   @
   :: $   @
  ::: $   @
          @@
            @
 @@@@@@@@ $ @
@@@@@@@@@@ $@
@@!    @@@ $@
!@! @!@!!@ $@
@!@ !@@!@! $@
!@! @@!@!! $@
!!:  !:!! $ @
:!: $       @
:::::::::: $@
 : : :: : $ @
            @@
          @
 @@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@!@!@! $@
!!!@!!!! $@
!!:  !!! $@
:!:  !:! $@
::   ::: $@
 :   : : $@
          @@
          @
@@@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@   @!@ $@
@!@!@!@ $ @
!!!@!!!! $@
!!:  !!! $@
:!:  !:! $@
 :: :::: $@
:: : :: $ @
          @@
          @
 @@@@@@@ $@
@@@@@@@@ $@
!@@ $     @
!@! $     @
!@! $     @
!!! $     @
:!! $     @
:!: $     @
 ::: ::: $@
 :: :: : $@
          @@
          @
@@@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@  !@! $@
!@!  !!! $@
!!:  !!! $@
:!:  !:! $@
 :::: :: $@
:: :  : $ @
          @@
          @
@@@@@@@@ $@
@@@@@@@@ $@
@@! $     @
!@! $     @
@!!!:! $  @
!!!!!: $  @
!!: $     @
:!: $     @
 :: :::: $@
: :: :: $ @
          @@
          @
@@@@@@@@ $@
@@@@@@@@ $@
@@! $     @
!@! $     @
@!!!:! $  @
!!!!!: $  @
!!: $     @
:!: $     @
 :: $     @
 : $      @
          @@
           @
 @@@@@@@@ $@
@@@@@@@@@ $@
!@@ $      @
!@! $      @
!@! @!@!@ $@
!!! !!@!! $@
:!!   !!: $@
:!:   !:: $@
 ::: :::: $@
 :: :: : $ @
           @@
          @
@@@  @@@ $@
@@@  @@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@!@!@! $@
!!!@!!!! $@
!!:  !!! $@
:!:  !:! $@
::   ::: $@
 :   : : $@
          @@
     @
@@@ $@
@@@ $@
@@! $@
!@! $@
!!@ $@
!!! $@
!!: $@
:!: $@
 :: $@
: $  @
     @@
          @
     @@@ $@
     @@@ $@
     @@! $@
     !@! $@
     !!@ $@
     !!! $@
     !!: $@
!!:  :!: $@
::: : :: $@
 : ::: $  @
          @@
          @
@@@  @@@ $@
@@@  @@@ $@
@@!  !@@ $@
!@!  @!! $@
@!@@!@! $ @
!!@!!! $  @
!!: :!! $ @
:!:  !:! $@
 ::  ::: $@
 :   ::: $@
          @@
          @
@@@      $@
@@@      $@
@@!      $@
!@!      $@
@!!      $@
!!!      $@
!!:      $@
 :!:     $@
 :: :::: $@
: :: : : $@
          @@
             @
@@@@@@@@@@ $ @
@@@@@@@@@@@ $@
@@! @@! @@! $@
!@! !@! !@! $@
@!! !!@ @!@ $@
!@!   ! !@! $@
!!:     !!: $@
:!:     :!: $@
:::     :: $ @
 :      : $  @
             @@
          @
@@@  @@@ $@
@@@@ @@@ $@
@@!@!@@@ $@
!@!!@!@! $@
@!@ !!@! $@
!@!  !!! $@
!!:  !!! $@
:!:  !:! $@
 ::   :: $@
::    : $ @
          @@
          @
 @@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@  !@! $@
!@!  !!! $@
!!:  !!! $@
:!:  !:! $@
::::: :: $@
 : :  : $ @
          @@
          @
@@@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@@!@! $ @
!!@!!! $  @
!!: $     @
:!: $     @
 :: $     @
 : $      @
          @@
           @
 @@@@@@ $  @
@@@@@@@@ $ @
@@!  @@@ $ @
!@!  @!@ $ @
@!@  !@! $ @
!@!  !!! $ @
!!:!!:!: $ @
:!: :!:  $ @
::::: :! $ @
 : :  ::: $@
           @@
          @
@@@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@!!@! $ @
!!@!@! $  @
!!: :!! $ @
:!:  !:! $@
::   ::: $@
 :   : : $@
          @@
          @
 @@@@@@ $ @
@@@@@@@ $ @
!@@ $     @
!@! $     @
!!@@!! $  @
 !!@!!! $ @
     !:! $@
    !:! $ @
:::: :: $ @
:: : : $  @
          @@
         @
@@@@@@@ $@
@@@@@@@ $@
  @@! $  @
  !@! $  @
  @!! $  @
  !!! $  @
  !!: $  @
  :!: $  @
   :: $  @
   : $   @
         @@
          @
@@@  @@@ $@
@@@  @@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@  !@! $@
!@!  !!! $@
!!:  !!! $@
:!:  !:! $@
::::: :: $@
 : :  : $ @
          @@
          @
@@@  @@@ $@
@@@  @@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@  !@! $@
!@!  !!! $@
:!:  !!: $@
 ::!!:! $ @
  :::: $  @
   : $    @
          @@
               @
@@@  @@@  @@@ $@
@@@  @@@  @@@ $@
@@!  @@!  @@! $@
!@!  !@!  !@! $@
@!!  !!@  @!@ $@
!@!  !!!  !@! $@
!!:  !!:  !!: $@
:!:  :!:  :!: $@
 :::: :: ::: $ @
  :: :  : : $  @
               @@
          @
@@@  @@@ $@
@@@  @@@ $@
@@!  !@@ $@
!@!  @!! $@
 !@@!@! $ @
  @!!! $  @
 !: :!! $ @
:!:  !:! $@
 ::  ::: $@
 :   :: $ @
          @@
         @
@@@ @@@ $@
@@@ @@@ $@
@@! !@@ $@
!@! @!! $@
 !@!@! $ @
  @!!! $ @
  !!: $  @
  :!: $  @
   :: $  @
   : $   @
         @@
          @
@@@@@@@@ $@
@@@@@@@@ $@
     @@! $@
    !@! $ @
   @!! $  @
  !!! $   @
 !!: $    @
:!: $     @
 :: :::: $@
: :: : : $@
          @@
       @
@@@@@ $@
@@@@@ $@
@@! $  @
!@! $  @
@!@ $  @
!!! $  @
!!: $  @
:!: $  @
::::: $@
 : : $ @
       @@
               @
 @@@ $         @
  @@@ $        @
   @@! $       @
    !@! $      @
     @!! $     @
      !!! $    @
       !!: $   @
        ::! $  @
         :: $  @
          : : $@
               @@
       @
@@@@@ $@
@@@@@ $@
  @@! $@
  !@! $@
  @!@ $@
  !!! $@
  !!: $@
  :!: $@
::::: $@
 : : $ @
       @@
                @
     @@@@@ $    @
   @@@@ @@@@ $  @
 @!@!     @!@! $@
   $        $   @
   $        $   @
   $        $   @
   $        $   @
   $        $   @
   $        $   @
   $        $   @
                @@
               @
              $@
              $@
              $@
              $@
              $@
              $@
              $@
              $@
::::::::::::: $@
::::::::::::: $@
               @@
     @
@@@ $@
@@ $ @
 @! $@
  $  @
  $  @
  $  @
  $  @
  $  @
  $  @
  $  @
     @@
          @
 @@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@!@!@! $@
!!!@!!!! $@
!!:  !!! $@
:!:  !:! $@
::   ::: $@
 :   : : $@
          @@
          @
@@@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@   @!@ $@
@!@!@!@ $ @
!!!@!!!! $@
!!:  !!! $@
:!:  !:! $@
 :: :::: $@
:: : :: $ @
          @@
          @
 @@@@@@@ $@
@@@@@@@@ $@
!@@ $     @
!@! $     @
!@! $     @
!!! $     @
:!! $     @
:!: $     @
 ::: ::: $@
 :: :: : $@
          @@
          @
@@@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@  !@! $@
!@!  !!! $@
!!:  !!! $@
:!:  !:! $@
 :::: :: $@
:: :  : $ @
          @@
          @
@@@@@@@@ $@
@@@@@@@@ $@
@@! $     @
!@! $     @
@!!!:! $  @
!!!!!: $  @
!!: $     @
:!: $     @
 :: :::: $@
: :: :: $ @
          @@
          @
@@@@@@@@ $@
@@@@@@@@ $@
@@! $     @
!@! $     @
@!!!:! $  @
!!!!!: $  @
!!: $     @
:!: $     @
 :: $     @
 : $      @
          @@
           @
 @@@@@@@@ $@
@@@@@@@@@ $@
!@@ $      @
!@! $      @
!@! @!@!@ $@
!!! !!@!! $@
:!!   !!: $@
:!:   !:: $@
 ::: :::: $@
 :: :: : $ @
           @@
          @
@@@  @@@ $@
@@@  @@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@!@!@! $@
!!!@!!!! $@
!!:  !!! $@
:!:  !:! $@
::   ::: $@
 :   : : $@
          @@
     @
@@@ $@
@@@ $@
@@! $@
!@! $@
!!@ $@
!!! $@
!!: $@
:!: $@
 :: $@
: $  @
     @@
          @
     @@@ $@
     @@@ $@
     @@! $@
     !@! $@
     !!@ $@
     !!! $@
     !!: $@
!!:  :!: $@
::: : :: $@
 : ::: $  @
          @@
          @
@@@  @@@ $@
@@@  @@@ $@
@@!  !@@ $@
!@!  @!! $@
@!@@!@! $ @
!!@!!! $  @
!!: :!! $ @
:!:  !:! $@
 ::  ::: $@
 :   ::: $@
          @@
          @
@@@      $@
@@@      $@
@@!      $@
!@!      $@
@!!      $@
!!!      $@
!!:      $@
 :!:     $@
 :: :::: $@
: :: : : $@
          @@
             @
@@@@@@@@@@ $ @
@@@@@@@@@@@ $@
@@! @@! @@! $@
!@! !@! !@! $@
@!! !!@ @!@ $@
!@!   ! !@! $@
!!:     !!: $@
:!:     :!: $@
:::     :: $ @
 :      : $  @
             @@
          @
@@@  @@@ $@
@@@@ @@@ $@
@@!@!@@@ $@
!@!!@!@! $@
@!@ !!@! $@
!@!  !!! $@
!!:  !!! $@
:!:  !:! $@
 ::   :: $@
::    : $ @
          @@
          @
 @@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@  !@! $@
!@!  !!! $@
!!:  !!! $@
:!:  !:! $@
::::: :: $@
 : :  : $ @
          @@
          @
@@@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@@!@! $ @
!!@!!! $  @
!!: $     @
:!: $     @
 :: $     @
 : $      @
          @@
           @
 @@@@@@ $  @
@@@@@@@@ $ @
@@!  @@@ $ @
!@!  @!@ $ @
@!@  !@! $ @
!@!  !!! $ @
!!:!!:!: $ @
:!: :!:  $ @
::::: :! $ @
 : :  ::: $@
           @@
          @
@@@@@@@ $ @
@@@@@@@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@!!@! $ @
!!@!@! $  @
!!: :!! $ @
:!:  !:! $@
::   ::: $@
 :   : : $@
          @@
          @
 @@@@@@ $ @
@@@@@@@ $ @
!@@ $     @
!@! $     @
!!@@!! $  @
 !!@!!! $ @
     !:! $@
    !:! $ @
:::: :: $ @
:: : : $  @
          @@
         @
@@@@@@@ $@
@@@@@@@ $@
  @@! $  @
  !@! $  @
  @!! $  @
  !!! $  @
  !!: $  @
  :!: $  @
   :: $  @
   : $   @
         @@
          @
@@@  @@@ $@
@@@  @@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@  !@! $@
!@!  !!! $@
!!:  !!! $@
:!:  !:! $@
::::: :: $@
 : :  : $ @
          @@
          @
@@@  @@@ $@
@@@  @@@ $@
@@!  @@@ $@
!@!  @!@ $@
@!@  !@! $@
!@!  !!! $@
:!:  !!: $@
 ::!!:! $ @
  :::: $  @
   : $    @
          @@
               @
@@@  @@@  @@@ $@
@@@  @@@  @@@ $@
@@!  @@!  @@! $@
!@!  !@!  !@! $@
@!!  !!@  @!@ $@
!@!  !!!  !@! $@
!!:  !!:  !!: $@
:!:  :!:  :!: $@
 :::: :: ::: $ @
  :: :  : : $  @
               @@
          @
@@@  @@@ $@
@@@  @@@ $@
@@!  !@@ $@
!@!  @!! $@
 !@@!@! $ @
  @!!! $  @
 !: :!! $ @
:!:  !:! $@
 ::  ::: $@
 :   :: $ @
          @@
         @
@@@ @@@ $@
@@@ @@@ $@
@@! !@@ $@
!@! @!! $@
 !@!@! $ @
  @!!! $ @
  !!: $  @
  :!: $  @
   :: $  @
   : $   @
         @@
          @
@@@@@@@@ $@
@@@@@@@@ $@
     @@! $@
    !@! $ @
   @!! $  @
  !!! $   @
 !!: $    @
:!: $     @
 :: :::: $@
: :: : : $@
          @@
          @
   @@@@@ $@
   @@@@@ $@
  @@! $   @
  !@! $   @
@!@ $     @
!!! $     @
  !!: $   @
  :!: $   @
   ::::: $@
    : : $ @
          @@
     @
@@@ $@
@@@ $@
@@! $@
!@! $@
 $$  @
!!! $@
!!: $@
:!: $@
:: $ @
 : $ @
     @@
          @
@@@@@ $   @
@@@@@ $   @
   @@! $  @
   !@! $  @
     @!@ $@
     !!! $@
   !!: $  @
   :!: $  @
::::: $   @
 : : $    @
          @@
               @
               @
   !@!    @!@ $@
 @!@!@!@!@!@ $ @
!!!    !@! $   @
  $      $     @
  $      $     @
  $      $     @
  $      $     @
  $      $     @
  $      $     @
               @@
  @
  @
  @
  @
  @
  @
  @
  @
  @
  @
  @
  @@
  @
  @
  @
  @
  @
  @
  @
  @
  @
  @
  @
  @@
  @
  @
  @
  @
  @
  @
  @
  @
  @
  @
  @
  @@
  @
  @
  @
  @
  @
  @
  @
  @
  @
  @
  @
  @@
  @
  @
  @
  @
  @
  @
  @
  @
  @
  @
  @
  @@
  @
  @
  @
  @
  @
  @
  @
  @
  @
  @
  @
  @@
  @
  @
  @
  @
  @
  @
  @
  @
  @
  @
  @
  @@
`,Xp=`flf2a$ 10 10 30 -1 7
Roman by Nick Miners N.M.Miners@durham.ac.uk
June 1994

---

Font modified June 17, 2007 by patorjk 
This was to widen the space character.
$$  $#
$$  $#
$$  $#
$$  $#
$$  $#
$$  $#
$$  $#
$$  $#
$$  $#
$$  $##
.o.$#
888$#
888$#
Y8P$#
\`8'$#
.o.$#
Y8P$#
   $#
   $#
   $##
o8o o8o$#
\`V' \`V'$#
       $#
       $#
       $#
       $#
       $#
       $#
       $#
       $##
       .o   .o  $#
      .8'  .8'  $#
  .888888888888'$#
    .8'  .8'    $#
.888888888888'  $#
  .8'  .8'      $#
 .8'  .8'       $#
                $#
                $#
                $##
   o   $#
.d88888$#
8[ 8   $#
\`Y888B.$#
   8 ]8$#
88888P'$#
   8   $#
       $#
       $#
       $##
o8o   88 $#
\`"'  .8' $#
    .8'  $#
   .8'   $#
  .8'    $#
 .8'  .o.$#
 88   Y8P$#
         $#
         $#
         $##
  .oo.    $#
.88' \`8.  $#
88.  .8'  $#
\`88.8P    $#
 d888[.8' $#
88' \`88.  $#
\`bodP'\`88.$#
          $#
          $#
          $##
o8o$#
\`YP$#
 ' $#
   $#
   $#
   $#
   $#
   $#
   $#
   $##
  .o$#
 .8'$#
.8' $#
88  $#
88  $#
\`8. $#
 \`8.$#
  \`"$#
    $#
    $##
o.  $#
\`8. $#
 \`8.$#
  88$#
  88$#
 .8'$#
.8' $#
"'  $#
    $#
    $##
   o   $#
\`8.8.8'$#
.8'8\`8.$#
   "   $#
       $#
       $#
       $#
       $#
       $#
       $##
          $#
          $#
    88    $#
    88    $#
8888888888$#
    88    $#
    88    $#
          $#
          $#
          $##
   $#
   $#
   $#
   $#
   $#
.o.$#
Y8P$#
 ' $#
   $#
   $##
       $#
       $#
       $#
       $#
8888888$#
       $#
       $#
       $#
       $#
       $##
   $#
   $#
   $#
   $#
   $#
.o.$#
Y8P$#
   $#
   $#
   $##
     88$#
    .8'$#
   .8' $#
  .8'  $#
 .8'   $#
.8'    $#
88     $#
       $#
       $#
       $##
  .oooo.  $#
 d8P'\`Y8b $#
888    888$#
888    888$#
888    888$#
\`88b  d88'$#
 \`Y8bd8P' $#
          $#
          $#
          $##
  .o $#
o888 $#
 888 $#
 888 $#
 888 $#
 888 $#
o888o$#
     $#
     $#
     $##
  .oooo.  $#
.dP""Y88b $#
      ]8P'$#
    .d8P' $#
  .dP'    $#
.oP     .o$#
8888888888$#
          $#
          $#
          $##
  .oooo.  $#
.dP""Y88b $#
      ]8P'$#
    <88b. $#
     \`88b.$#
o.   .88P $#
\`8bd88P'  $#
          $#
          $#
          $##
      .o  $#
    .d88  $#
  .d'888  $#
.d'  888  $#
88ooo888oo$#
     888  $#
    o888o $#
          $#
          $#
          $##
  oooooooo$#
 dP"""""""$#
d88888b.  $#
    \`Y88b $#
      ]88 $#
o.   .88P $#
\`8bd88P'  $#
          $#
          $#
          $##
    .ooo  $#
  .88'    $#
 d88'     $#
d888P"Ybo.$#
Y88[   ]88$#
\`Y88   88P$#
 \`88bod8' $#
          $#
          $#
          $##
 ooooooooo$#
d"""""""8'$#
      .8' $#
     .8'  $#
    .8'   $#
   .8'    $#
  .8'     $#
          $#
          $#
          $##
 .ooooo.  $#
d88'   \`8.$#
Y88..  .8'$#
 \`88888b. $#
.8'  \`\`88b$#
\`8.   .88P$#
 \`boood8' $#
          $#
          $#
          $##
 .ooooo.  $#
888' \`Y88.$#
888    888$#
 \`Vbood888$#
      888'$#
    .88P' $#
  .oP'    $#
          $#
          $#
          $##
   $#
   $#
   $#
   $#
o8o$#
\`"'$#
o8o$#
\`"'$#
   $#
   $##
   $#
   $#
   $#
   $#
o8o$#
\`"'$#
o8o$#
\`]P$#
 ' $#
   $##
      $#
   .dP$#
 .dP  $#
dP    $#
Yb    $#
 \`Yb  $#
   \`Yb$#
      $#
      $#
      $##
       $#
       $#
       $#
8888888$#
       $#
8888888$#
       $#
       $#
       $#
       $##
      $#
Yb    $#
 \`Yb  $#
   \`Yb$#
   .dP$#
 .dP  $#
dP    $#
      $#
      $#
      $##
 .oooooo. $#
dP'   \`Y8b$#
88o   .d8P$#
\`"' .d8P' $#
   \`88'   $#
   .o.    $#
   Y8P    $#
          $#
          $#
          $##
  .oooooo. $#
 d'     \`b $#
d' .d"bd  8$#
8  8. 8  .d$#
Y.  YoP"b' $#
 8.      .8$#
  YooooooP $#
           $#
           $#
           $##
      .o.      $#
     .888.     $#
    .8"888.    $#
   .8' \`888.   $#
  .88ooo8888.  $#
 .8'     \`888. $#
o88o     o8888o$#
               $#
               $#
               $##
oooooooooo. $#
\`888'   \`Y8b$#
 888     888$#
 888oooo888'$#
 888    \`88b$#
 888    .88P$#
o888bood8P' $#
            $#
            $#
            $##
  .oooooo.  $#
 d8P'  \`Y8b $#
888         $#
888         $#
888         $#
\`88b    ooo $#
 \`Y8bood8P' $#
            $#
            $#
            $##
oooooooooo.  $#
\`888'   \`Y8b $#
 888      888$#
 888      888$#
 888      888$#
 888     d88'$#
o888bood8P'  $#
             $#
             $#
             $##
oooooooooooo$#
\`888'     \`8$#
 888        $#
 888oooo8   $#
 888    "   $#
 888       o$#
o888ooooood8$#
            $#
            $#
            $##
oooooooooooo$#
\`888'     \`8$#
 888        $#
 888oooo8   $#
 888    "   $#
 888        $#
o888o       $#
            $#
            $#
            $##
  .oooooo.   $#
 d8P'  \`Y8b  $#
888          $#
888          $#
888     ooooo$#
\`88.    .88' $#
 \`Y8bood8P'  $#
             $#
             $#
             $##
ooooo   ooooo$#
\`888'   \`888'$#
 888     888 $#
 888ooooo888 $#
 888     888 $#
 888     888 $#
o888o   o888o$#
             $#
             $#
             $##
ooooo$#
\`888'$#
 888 $#
 888 $#
 888 $#
 888 $#
o888o$#
     $#
     $#
     $##
   oooo$#
   \`888$#
    888$#
    888$#
    888$#
    888$#
.o. 88P$#
\`Y888P $#
       $#
       $##
oooo    oooo$#
\`888   .8P' $#
 888  d8'   $#
 88888[     $#
 888\`88b.   $#
 888  \`88b. $#
o888o  o888o$#
            $#
            $#
            $##
ooooo       $#
\`888'       $#
 888        $#
 888        $#
 888        $#
 888       o$#
o888ooooood8$#
            $#
            $#
            $##
ooo        ooooo$#
\`88.       .888'$#
 888b     d'888 $#
 8 Y88. .P  888 $#
 8  \`888'   888 $#
 8    Y     888 $#
o8o        o888o$#
                $#
                $#
                $##
ooooo      ooo$#
\`888b.     \`8'$#
 8 \`88b.    8 $#
 8   \`88b.  8 $#
 8     \`88b.8 $#
 8       \`888 $#
o8o        \`8 $#
              $#
              $#
              $##
  .oooooo.  $#
 d8P'  \`Y8b $#
888      888$#
888      888$#
888      888$#
\`88b    d88'$#
 \`Y8bood8P' $#
            $#
            $#
            $##
ooooooooo.  $#
\`888   \`Y88.$#
 888   .d88'$#
 888ooo88P' $#
 888        $#
 888        $#
o888o       $#
            $#
            $#
            $##
  .oooooo.     $#
 d8P'  \`Y8b    $#
888      888   $#
888      888   $#
888      888   $#
\`88b    d88b   $#
 \`Y8bood8P'Ybd'$#
               $#
               $#
               $##
ooooooooo.  $#
\`888   \`Y88.$#
 888   .d88'$#
 888ooo88P' $#
 888\`88b.   $#
 888  \`88b. $#
o888o  o888o$#
            $#
            $#
            $##
 .oooooo..o$#
d8P'    \`Y8$#
Y88bo.     $#
 \`"Y8888o. $#
     \`"Y88b$#
oo     .d8P$#
8""88888P' $#
           $#
           $#
           $##
ooooooooooooo$#
8'   888   \`8$#
     888     $#
     888     $#
     888     $#
     888     $#
    o888o    $#
             $#
             $#
             $##
ooooo     ooo$#
\`888'     \`8'$#
 888       8 $#
 888       8 $#
 888       8 $#
 \`88.    .8' $#
   \`YbodP'   $#
             $#
             $#
             $##
oooooo     oooo$#
 \`888.     .8' $#
  \`888.   .8'  $#
   \`888. .8'   $#
    \`888.8'    $#
     \`888'     $#
      \`8'      $#
               $#
               $#
               $##
oooooo   oooooo     oooo$#
 \`888.    \`888.     .8' $#
  \`888.   .8888.   .8'  $#
   \`888  .8'\`888. .8'   $#
    \`888.8'  \`888.8'    $#
     \`888'    \`888'     $#
      \`8'      \`8'      $#
                        $#
                        $#
                        $##
ooooooo  ooooo$#
 \`8888    d8' $#
   Y888..8P   $#
    \`8888'    $#
   .8PY888.   $#
  d8'  \`888b  $#
o888o  o88888o$#
              $#
              $#
              $##
oooooo   oooo$#
 \`888.   .8' $#
  \`888. .8'  $#
   \`888.8'   $#
    \`888'    $#
     888     $#
    o888o    $#
             $#
             $#
             $##
 oooooooooooo$#
d'""""""d888'$#
      .888P  $#
     d888'   $#
   .888P     $#
  d888'    .P$#
.8888888888P $#
             $#
             $#
             $##
oooo$#
8   $#
8   $#
8   $#
8   $#
8   $#
8ooo$#
    $#
    $#
    $##
88     $#
\`8.    $#
 \`8.   $#
  \`8.  $#
   \`8. $#
    \`8.$#
     88$#
       $#
       $#
       $##
oooo$#
   8$#
   8$#
   8$#
   8$#
   8$#
ooo8$#
    $#
    $#
    $##
 .o"o. $#
"'   \`"$#
       $#
       $#
       $#
       $#
       $#
       $#
       $#
       $##
           $#
           $#
           $#
           $#
           $#
           $#
ooooooooooo$#
           $#
           $#
           $##
o8o$#
YP'$#
 \` $#
   $#
   $#
   $#
   $#
   $#
   $#
   $##
         $#
         $#
 .oooo.  $#
\`P  )88b $#
 .oP"888 $#
d8(  888 $#
\`Y888""8o$#
         $#
         $#
         $##
 .o8      $#
"888      $#
 888oooo. $#
 d88' \`88b$#
 888   888$#
 888   888$#
 \`Y8bod8P'$#
          $#
          $#
          $##
         $#
         $#
 .ooooo. $#
d88' \`"Y8$#
888      $#
888   .o8$#
\`Y8bod8P'$#
         $#
         $#
         $##
      .o8 $#
     "888 $#
 .oooo888 $#
d88' \`888 $#
888   888 $#
888   888 $#
\`Y8bod88P"$#
          $#
          $#
          $##
         $#
         $#
 .ooooo. $#
d88' \`88b$#
888ooo888$#
888    .o$#
\`Y8bod8P'$#
         $#
         $#
         $##
 .o88o.$#
 888 \`"$#
o888oo $#
 888   $#
 888   $#
 888   $#
o888o  $#
       $#
       $#
       $##
          $#
          $#
 .oooooooo$#
888' \`88b $#
888   888 $#
\`88bod8P' $#
\`8oooooo. $#
d"     YD $#
"Y88888P' $#
          $##
oooo       $#
\`888       $#
 888 .oo.  $#
 888P"Y88b $#
 888   888 $#
 888   888 $#
o888o o888o$#
           $#
           $#
           $##
 o8o $#
 \`"' $#
oooo $#
\`888 $#
 888 $#
 888 $#
o888o$#
     $#
     $#
     $##
    o8o$#
    \`"'$#
   oooo$#
   \`888$#
    888$#
    888$#
    888$#
    888$#
.o. 88P$#
\`Y888P $##
oooo       $#
\`888       $#
 888  oooo $#
 888 .8P'  $#
 888888.   $#
 888 \`88b. $#
o888o o888o$#
           $#
           $#
           $##
oooo $#
\`888 $#
 888 $#
 888 $#
 888 $#
 888 $#
o888o$#
     $#
     $#
     $##
                 $#
                 $#
ooo. .oo.  .oo.  $#
\`888P"Y88bP"Y88b $#
 888   888   888 $#
 888   888   888 $#
o888o o888o o888o$#
                 $#
                 $#
                 $##
           $#
           $#
ooo. .oo.  $#
\`888P"Y88b $#
 888   888 $#
 888   888 $#
o888o o888o$#
           $#
           $#
           $##
         $#
         $#
 .ooooo. $#
d88' \`88b$#
888   888$#
888   888$#
\`Y8bod8P'$#
         $#
         $#
         $##
          $#
          $#
oo.ooooo. $#
 888' \`88b$#
 888   888$#
 888   888$#
 888bod8P'$#
 888      $#
o888o     $#
          $##
          $#
          $#
 .ooooo oo$#
d88' \`888 $#
888   888 $#
888   888 $#
\`V8bod888 $#
      888.$#
      8P' $#
      "   $##
        $#
        $#
oooo d8b$#
\`888""8P$#
 888    $#
 888    $#
d888b   $#
        $#
        $#
        $##
        $#
        $#
 .oooo.o$#
d88(  "8$#
\`"Y88b. $#
o.  )88b$#
8""888P'$#
        $#
        $#
        $##
    .  $#
  .o8  $#
.o888oo$#
  888  $#
  888  $#
  888 .$#
  "888"$#
       $#
       $#
       $##
           $#
           $#
oooo  oooo $#
\`888  \`888 $#
 888   888 $#
 888   888 $#
 \`V88V"V8P'$#
           $#
           $#
           $##
           $#
           $#
oooo    ooo$#
 \`88.  .8' $#
  \`88..8'  $#
   \`888'   $#
    \`8'    $#
           $#
           $#
           $##
                $#
                $#
oooo oooo    ooo$#
 \`88. \`88.  .8' $#
  \`88..]88..8'  $#
   \`888'\`888'   $#
    \`8'  \`8'    $#
                $#
                $#
                $##
           $#
           $#
oooo    ooo$#
 \`88b..8P' $#
   Y888'   $#
 .o8"'88b  $#
o88'   888o$#
           $#
           $#
           $##
           $#
           $#
oooo    ooo$#
 \`88.  .8' $#
  \`88..8'  $#
   \`888'   $#
    .8'    $#
.o..P'     $#
\`Y8P'      $#
           $##
          $#
          $#
  oooooooo$#
 d'""7d8P $#
   .d8P'  $#
 .d8P'  .P$#
d8888888P $#
          $#
          $#
          $##
  d88'$#
 d88' $#
 888  $#
<88   $#
 888  $#
 Y88. $#
  Y88.$#
      $#
      $#
      $##
8$#
8$#
8$#
 $#
8$#
8$#
8$#
 $#
 $#
 $##
\`88b  $#
 \`88b $#
  888 $#
   88>$#
  888 $#
 .88P $#
.88P  $#
      $#
      $#
      $##
 .oo.  .oo$#
P'  \`YP'  $#
          $#
          $#
          $#
          $#
          $#
          $#
          $#
          $##
 o8o  .o.  o8o $#
 \`"' .888. \`"' $#
    .8"888.    $#
   .8' \`888.   $#
  .88ooo8888.  $#
 .8'     \`888. $#
o88o     o8888o$#
               $#
               $#
               $##
o8o        o8o$#
\`"'.oooooo.\`"'$#
  d8P'  \`Y8b  $#
 888      888 $#
 888      888 $#
 \`88b    d88' $#
  \`Y8bood8P'  $#
              $#
              $#
              $##
 o8o      o8o$#
 \`"'      \`"'$#
ooooo     ooo$#
\`888'     \`8'$#
 888       8 $#
 \`88.    .8' $#
   \`YbodP'   $#
             $#
             $#
             $##
o8o   o8o$#
\`"'   \`"'$#
 .oooo.  $#
\`P  )88b $#
 .oP"888 $#
d8(  888 $#
\`Y888""8o$#
         $#
         $#
         $##
o8o   o8o$#
\`"'   \`"'$#
 .ooooo. $#
d88' \`88b$#
888   888$#
888   888$#
\`Y8bod8P'$#
         $#
         $#
         $##
 o8o   o8o $#
 \`"'   \`"' $#
oooo  oooo $#
\`888  \`888 $#
 888   888 $#
 888   888 $#
 \`V88V"V8P'$#
           $#
           $#
           $##
  .ooooo. $#
 d88' \`88.$#
 888  .88'$#
o888 d88' $#
 888  \`88.$#
 888  .88'$#
o888o Y8' $#
          $#
          $#
          $##
`,Kp=`flf2a$ 6 5 16 15 10 0 18319
Slant by Glenn Chappell 3/93 -- based on Standard
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

     $$@
    $$ @
   $$  @
  $$   @
 $$    @
$$     @@
    __@
   / /@
  / / @
 /_/  @
(_)   @
      @@
 _ _ @
( | )@
|/|/ @
 $   @
$    @
     @@
     __ __ @
  __/ // /_@
 /_  _  __/@
/_  _  __/ @
 /_//_/    @
           @@
     __@
   _/ /@
  / __/@
 (_  ) @
/  _/  @
/_/    @@
   _   __@
  (_)_/_/@
   _/_/  @
 _/_/_   @
/_/ (_)  @
         @@
   ___   @
  ( _ )  @
 / __ \\/|@
/ /_/  < @
\\____/\\/ @
         @@
  _ @
 ( )@
 |/ @
 $  @
$   @
    @@
     __@
   _/_/@
  / /  @
 / /   @
/ /    @
|_|    @@
     _ @
    | |@
    / /@
   / / @
 _/_/  @
/_/    @@
       @
  __/|_@
 |    /@
/_ __| @
 |/    @
       @@
       @
    __ @
 __/ /_@
/_  __/@
 /_/   @
       @@
   @
   @
   @
 _ @
( )@
|/ @@
       @
       @
 ______@
/_____/@
  $    @
       @@
   @
   @
   @
 _ @
(_)@
   @@
       __@
     _/_/@
   _/_/  @
 _/_/    @
/_/      @
         @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\____/  @
        @@
   ___@
  <  /@
  / / @
 / /  @
/_/   @
      @@
   ___ @
  |__ \\@
  __/ /@
 / __/ @
/____/ @
       @@
   _____@
  |__  /@
   /_ < @
 ___/ / @
/____/  @
        @@
   __ __@
  / // /@
 / // /_@
/__  __/@
  /_/   @
        @@
    ______@
   / ____/@
  /___ \\  @
 ____/ /  @
/_____/   @
          @@
   _____@
  / ___/@
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
 _____@
/__  /@
  / / @
 / /  @
/_/   @
      @@
   ____ @
  ( __ )@
 / __  |@
/ /_/ / @
\\____/  @
        @@
   ____ @
  / __ \\@
 / /_/ /@
 \\__, / @
/____/  @
        @@
     @
   _ @
  (_)@
 _   @
(_)  @
     @@
     @
   _ @
  (_)@
 _   @
( )  @
|/   @@
  __@
 / /@
/ / @
\\ \\ @
 \\_\\@
    @@
       @
  _____@
 /____/@
/____/ @
  $    @
       @@
__  @
\\ \\ @
 \\ \\@
 / /@
/_/ @
    @@
  ___ @
 /__ \\@
  / _/@
 /_/  @
(_)   @
      @@
   ______ @
  / ____ \\@
 / / __ \`/@
/ / /_/ / @
\\ \\__,_/  @
 \\____/   @@
    ___ @
   /   |@
  / /| |@
 / ___ |@
/_/  |_|@
        @@
    ____ @
   / __ )@
  / __  |@
 / /_/ / @
/_____/  @
         @@
   ______@
  / ____/@
 / /     @
/ /___   @
\\____/   @
         @@
    ____ @
   / __ \\@
  / / / /@
 / /_/ / @
/_____/  @
         @@
    ______@
   / ____/@
  / __/   @
 / /___   @
/_____/   @
          @@
    ______@
   / ____/@
  / /_    @
 / __/    @
/_/       @
          @@
   ______@
  / ____/@
 / / __  @
/ /_/ /  @
\\____/   @
         @@
    __  __@
   / / / /@
  / /_/ / @
 / __  /  @
/_/ /_/   @
          @@
    ____@
   /  _/@
   / /  @
 _/ /   @
/___/   @
        @@
       __@
      / /@
 __  / / @
/ /_/ /  @
\\____/   @
         @@
    __ __@
   / //_/@
  / ,<   @
 / /| |  @
/_/ |_|  @
         @@
    __ @
   / / @
  / /  @
 / /___@
/_____/@
       @@
    __  ___@
   /  |/  /@
  / /|_/ / @
 / /  / /  @
/_/  /_/   @
           @@
    _   __@
   / | / /@
  /  |/ / @
 / /|  /  @
/_/ |_/   @
          @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\____/  @
        @@
    ____ @
   / __ \\@
  / /_/ /@
 / ____/ @
/_/      @
         @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\___\\_\\ @
        @@
    ____ @
   / __ \\@
  / /_/ /@
 / _, _/ @
/_/ |_|  @
         @@
   _____@
  / ___/@
  \\__ \\ @
 ___/ / @
/____/  @
        @@
  ______@
 /_  __/@
  / /   @
 / /    @
/_/     @
        @@
   __  __@
  / / / /@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
 _    __@
| |  / /@
| | / / @
| |/ /  @
|___/   @
        @@
 _       __@
| |     / /@
| | /| / / @
| |/ |/ /  @
|__/|__/   @
           @@
   _  __@
  | |/ /@
  |   / @
 /   |  @
/_/|_|  @
        @@
__  __@
\\ \\/ /@
 \\  / @
 / /  @
/_/   @
      @@
 _____@
/__  /@
  / / @
 / /__@
/____/@
      @@
     ___@
    / _/@
   / /  @
  / /   @
 / /    @
/__/    @@
__    @
\\ \\   @
 \\ \\  @
  \\ \\ @
   \\_\\@
      @@
     ___@
    /  /@
    / / @
   / /  @
 _/ /   @
/__/    @@
  //|@
 |/||@
  $  @
 $   @
$    @
     @@
       @
       @
       @
       @
 ______@
/_____/@@
  _ @
 ( )@
  V @
 $  @
$   @
    @@
        @
  ____ _@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
    __  @
   / /_ @
  / __ \\@
 / /_/ /@
/_.___/ @
        @@
       @
  _____@
 / ___/@
/ /__  @
\\___/  @
       @@
       __@
  ____/ /@
 / __  / @
/ /_/ /  @
\\__,_/   @
         @@
      @
  ___ @
 / _ \\@
/  __/@
\\___/ @
      @@
    ____@
   / __/@
  / /_  @
 / __/  @
/_/     @
        @@
         @
   ____ _@
  / __ \`/@
 / /_/ / @
 \\__, /  @
/____/   @@
    __  @
   / /_ @
  / __ \\@
 / / / /@
/_/ /_/ @
        @@
    _ @
   (_)@
  / / @
 / /  @
/_/   @
      @@
       _ @
      (_)@
     / / @
    / /  @
 __/ /   @
/___/    @@
    __  @
   / /__@
  / //_/@
 / ,<   @
/_/|_|  @
        @@
    __@
   / /@
  / / @
 / /  @
/_/   @
      @@
            @
   ____ ___ @
  / __ \`__ \\@
 / / / / / /@
/_/ /_/ /_/ @
            @@
        @
   ____ @
  / __ \\@
 / / / /@
/_/ /_/ @
        @@
       @
  ____ @
 / __ \\@
/ /_/ /@
\\____/ @
       @@
         @
    ____ @
   / __ \\@
  / /_/ /@
 / .___/ @
/_/      @@
        @
  ____ _@
 / __ \`/@
/ /_/ / @
\\__, /  @
  /_/   @@
        @
   _____@
  / ___/@
 / /    @
/_/     @
        @@
        @
   _____@
  / ___/@
 (__  ) @
/____/  @
        @@
   __ @
  / /_@
 / __/@
/ /_  @
\\__/  @
      @@
        @
  __  __@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
       @
 _   __@
| | / /@
| |/ / @
|___/  @
       @@
          @
 _      __@
| | /| / /@
| |/ |/ / @
|__/|__/  @
          @@
        @
   _  __@
  | |/_/@
 _>  <  @
/_/|_|  @
        @@
         @
   __  __@
  / / / /@
 / /_/ / @
 \\__, /  @
/____/   @@
     @
 ____@
/_  /@
 / /_@
/___/@
     @@
     __@
   _/_/@
 _/_/  @
< <    @
/ /    @
\\_\\    @@
     __@
    / /@
   / / @
  / /  @
 / /   @
/_/    @@
     _ @
    | |@
    / /@
   _>_>@
 _/_/  @
/_/    @@
  /\\//@
 //\\/ @
  $   @
 $    @
$     @
      @@
    _  _ @
   (_)(_)@
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_)_(_)@
 / __ \`/ @
/ /_/ /  @
\\__,_/   @
         @@
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\__,_/   @
         @@
     ____ @
    / __ \\@
   / / / /@
  / /_| | @
 / //__/  @
/_/       @@
160  NO-BREAK SPACE
     $$@
    $$ @
   $$  @
  $$   @
 $$    @
$$     @@
161  INVERTED EXCLAMATION MARK
    _ @
   (_)@
  / / @
 / /  @
/_/   @
      @@
162  CENT SIGN
     __@
  __/ /@
 / ___/@
/ /__  @
\\  _/  @
/_/    @@
163  POUND SIGN
     ____ @
    / ,__\\@
 __/ /_   @
 _/ /___  @
(_,____/  @
          @@
164  CURRENCY SIGN
    /|___/|@
   | __  / @
  / /_/ /  @
 /___  |   @
|/   |/    @
           @@
165  YEN SIGN
    ____@
  _| / /@
 /_  __/@
/_  __/ @
 /_/    @
        @@
166  BROKEN BAR
     __@
    / /@
   /_/ @
  __   @
 / /   @
/_/    @@
167  SECTION SIGN
     __ @
   _/ _)@
  / | | @
 | || | @
 | |_/  @
(__/    @@
168  DIAERESIS
  _   _ @
 (_) (_)@
  $   $ @
 $   $  @
$   $   @
        @@
169  COPYRIGHT SIGN
    ______  @
   / _____\\ @
  / / ___/ |@
 / / /__  / @
|  \\___/ /  @
 \\______/   @@
170  FEMININE ORDINAL INDICATOR
   ___ _@
  / _ \`/@
 _\\_,_/ @
/____/  @
 $      @
        @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
  ____@
 / / /@
/ / / @
\\ \\ \\ @
 \\_\\_\\@
      @@
172  NOT SIGN
       @
 ______@
/___  /@
   /_/ @
 $     @
       @@
173  SOFT HYPHEN
      @
      @
 _____@
/____/@
  $   @
      @@
174  REGISTERED SIGN
    ______  @
   / ___  \\ @
  / / _ \\  |@
 / / , _/ / @
| /_/|_| /  @
 \\______/   @@
175  MACRON
 ______@
/_____/@
  $    @
 $     @
$      @
       @@
176  DEGREE SIGN
  ___ @
 / _ \\@
/ // /@
\\___/ @
 $    @
      @@
177  PLUS-MINUS SIGN
      __ @
   __/ /_@
  /_  __/@
 __/_/_  @
/_____/  @
         @@
178  SUPERSCRIPT TWO
   ___ @
  |_  |@
 / __/ @
/____/ @
 $     @
       @@
179  SUPERSCRIPT THREE
   ____@
  |_  /@
 _/_ < @
/____/ @
 $     @
       @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
 $  @
$   @
    @@
181  MICRO SIGN
          @
    __  __@
   / / / /@
  / /_/ / @
 / ._,_/  @
/_/       @@
182  PILCROW SIGN
  _______@
 / _    /@
/ (/ / / @
\\_  / /  @
 /_/_/   @
         @@
183  MIDDLE DOT
   @
 _ @
(_)@
 $ @
$  @
   @@
184  CEDILLA
   @
   @
   @
   @
 _ @
/_)@@
185  SUPERSCRIPT ONE
  ___@
 <  /@
 / / @
/_/  @
$    @
     @@
186  MASCULINE ORDINAL INDICATOR
   ___ @
  / _ \\@
 _\\___/@
/____/ @
 $     @
       @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
____  @
\\ \\ \\ @
 \\ \\ \\@
 / / /@
/_/_/ @
      @@
188  VULGAR FRACTION ONE QUARTER
  ___   __ @
 <  / _/_/ @
 / /_/_/___@
/_//_// / /@
 /_/ /_  _/@
      /_/  @@
189  VULGAR FRACTION ONE HALF
  ___   __   @
 <  / _/_/__ @
 / /_/_/|_  |@
/_//_/ / __/ @
 /_/  /____/ @
             @@
190  VULGAR FRACTION THREE QUARTERS
   ____    __ @
  |_  /  _/_/ @
 _/_ < _/_/___@
/____//_// / /@
    /_/ /_  _/@
         /_/  @@
191  INVERTED QUESTION MARK
    _ @
   (_)@
 _/ / @
/ _/_ @
\\___/ @
      @@
192  LATIN CAPITAL LETTER A WITH GRAVE
    __ @
   _\\_\\@
  / _ |@
 / __ |@
/_/ |_|@
       @@
193  LATIN CAPITAL LETTER A WITH ACUTE
     __@
   _/_/@
  / _ |@
 / __ |@
/_/ |_|@
       @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
     //|@
   _|/||@
  / _ | @
 / __ | @
/_/ |_| @
        @@
195  LATIN CAPITAL LETTER A WITH TILDE
     /\\//@
   _//\\/ @
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
    _  _ @
   (_)(_)@
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
    (())@
   /   |@
  / /| |@
 / ___ |@
/_/  |_|@
        @@
198  LATIN CAPITAL LETTER AE
    __________@
   /     ____/@
  / /|  __/   @
 / __  /___   @
/_/ /_____/   @
              @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   ______@
  / ____/@
 / /     @
/ /___   @
\\____/   @
 /_)     @@
200  LATIN CAPITAL LETTER E WITH GRAVE
    __ @
   _\\_\\@
  / __/@
 / _/  @
/___/  @
       @@
201  LATIN CAPITAL LETTER E WITH ACUTE
     __@
   _/_/@
  / __/@
 / _/  @
/___/  @
       @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
     //|@
   _|/||@
  / __/ @
 / _/   @
/___/   @
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
    _  _ @
   (_)(_)@
  / __/  @
 / _/    @
/___/    @
         @@
204  LATIN CAPITAL LETTER I WITH GRAVE
    __ @
   _\\_\\@
  /  _/@
 _/ /  @
/___/  @
       @@
205  LATIN CAPITAL LETTER I WITH ACUTE
     __@
   _/_/@
  /  _/@
 _/ /  @
/___/  @
       @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
     //|@
   _|/||@
  /  _/ @
 _/ /   @
/___/   @
        @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
    _  _ @
   (_)(_)@
  /  _/  @
 _/ /    @
/___/    @
         @@
208  LATIN CAPITAL LETTER ETH
     ____ @
    / __ \\@
 __/ /_/ /@
/_  __/ / @
 /_____/  @
          @@
209  LATIN CAPITAL LETTER N WITH TILDE
     /\\//@
   _//\\/ @
  / |/ / @
 /    /  @
/_/|_/   @
         @@
210  LATIN CAPITAL LETTER O WITH GRAVE
    __ @
  __\\_\\@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
211  LATIN CAPITAL LETTER O WITH ACUTE
     __@
  __/_/@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
    //|@
  _|/||@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
213  LATIN CAPITAL LETTER O WITH TILDE
    /\\//@
  _//\\/ @
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
215  MULTIPLICATION SIGN
     @
     @
 /|/|@
 > < @
|/|/ @
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   _____ @
  / _// \\@
 / //// /@
/ //// / @
\\_//__/  @
         @@
217  LATIN CAPITAL LETTER U WITH GRAVE
    __  @
  __\\_\\_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
     __ @
  __/_/_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
    //| @
  _|/||_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
   __ @
__/_/_@
\\ \\/ /@
 \\  / @
 /_/  @
      @@
222  LATIN CAPITAL LETTER THORN
    __  @
   / /_ @
  / __ \\@
 / ____/@
/_/     @
        @@
223  LATIN SMALL LETTER SHARP S
     ____ @
    / __ \\@
   / / / /@
  / /_| | @
 / //__/  @
/_/       @@
224  LATIN SMALL LETTER A WITH GRAVE
    __  @
  __\\_\\_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
225  LATIN SMALL LETTER A WITH ACUTE
     __ @
  __/_/_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
    //| @
  _|/||_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
227  LATIN SMALL LETTER A WITH TILDE
    /\\//@
  _//\\/_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \`/ @
/ /_/ /  @
\\__,_/   @
         @@
229  LATIN SMALL LETTER A WITH RING ABOVE
     __ @
  __(())@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
230  LATIN SMALL LETTER AE
           @
  ____ ___ @
 / __ \` _ \\@
/ /_/   __/@
\\__,_____/ @
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
  _____@
 / ___/@
/ /__  @
\\___/  @
/_)    @@
232  LATIN SMALL LETTER E WITH GRAVE
   __ @
  _\\_\\@
 / _ \\@
/  __/@
\\___/ @
      @@
233  LATIN SMALL LETTER E WITH ACUTE
    __@
  _/_/@
 / _ \\@
/  __/@
\\___/ @
      @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
    //|@
  _|/||@
 / _ \\ @
/  __/ @
\\___/  @
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
   _  _ @
  (_)(_)@
 / _ \\  @
/  __/  @
\\___/   @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
   __ @
   \\_\\@
  / / @
 / /  @
/_/   @
      @@
237  LATIN SMALL LETTER I WITH ACUTE
    __@
   /_/@
  / / @
 / /  @
/_/   @
      @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
    //|@
   |/||@
  / /  @
 / /   @
/_/    @
       @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / /   @
 / /    @
/_/     @
        @@
240  LATIN SMALL LETTER ETH
     || @
    =||=@
 ___ || @
/ __\` | @
\\____/  @
        @@
241  LATIN SMALL LETTER N WITH TILDE
     /\\//@
   _//\\/ @
  / __ \\ @
 / / / / @
/_/ /_/  @
         @@
242  LATIN SMALL LETTER O WITH GRAVE
    __ @
  __\\_\\@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
243  LATIN SMALL LETTER O WITH ACUTE
     __@
  __/_/@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
    //|@
  _|/||@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
245  LATIN SMALL LETTER O WITH TILDE
    /\\//@
  _//\\/ @
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
247  DIVISION SIGN
       @
    _  @
 __(_)_@
/_____/@
 (_)   @
       @@
248  LATIN SMALL LETTER O WITH STROKE
        @
  _____ @
 / _// \\@
/ //// /@
\\_//__/ @
        @@
249  LATIN SMALL LETTER U WITH GRAVE
    __  @
  __\\_\\_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
250  LATIN SMALL LETTER U WITH ACUTE
     __ @
  __/_/_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
    //| @
  _|/||_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\__,_/   @
         @@
253  LATIN SMALL LETTER Y WITH ACUTE
      __ @
   __/_/_@
  / / / /@
 / /_/ / @
 \\__, /  @
/____/   @@
254  LATIN SMALL LETTER THORN
     __  @
    / /_ @
   / __ \\@
  / /_/ /@
 / .___/ @
/_/      @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
    _   _ @
   (_) (_)@
  / / / / @
 / /_/ /  @
 \\__, /   @
/____/    @@
`,qp=`flf2a$ 6 5 16 15 16
Speed by Claude Martins 2/95 -- based on Slant
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Explanation of first line:
flf2 - "magic number" for file identification
a    - should always be \`a', for now
$    - the "hardblank" -- prints as a blank, but can't be smushed
6    - height of a character
5    - height of a character, not including descenders
14   - max line length (excluding comment lines) + a fudge factor
15   - default smushmode for this font
16   - number of comment lines

     $$@
    $$ @
   $$  @
  $$   @
 $$    @
$$     @@
______@
___  /@
__  / @
 /_/  @
(_)   @
      @@
___ _ @
_( | )@
_|/|/ @
  $   @
 $    @
      @@
_______ __ @
____/ // /_@
_ _  _  __/@
/_  _  __/ @
 /_//_/    @
           @@
_______@
____/ /@
__  __/@
_(_  ) @
/  _/  @
/_/    @@
____   __@
__(_)_/_/@
____/_/  @
__/_/_   @
/_/ (_)  @
         @@
______   @
__( _ )  @
_  __ \\/|@
/ /_/  < @
\\____/\\/ @
         @@
___ @
_( )@
_|/ @
 $  @
$   @
    @@
_______@
____/_/@
__  /  @
_  /   @
/ /    @
|_|    @@
______ @
____| |@
____  /@
___  / @
__/_/  @
/_/    @@
_____  @
____/|_@
_|    /@
/_ __| @
 |/    @
       @@
       @
______ @
___/ /_@
/_  __/@
 /_/   @
       @@
    @
    @
    @
___ @
_( )@
_|/ @@
        @
        @
________@
_/_____/@
   $    @
        @@
    @
    @
    @
___ @
_(_)@
    @@
_________@
______/_/@
____/_/  @
__/_/    @
/_/      @
         @@
_______ @
__  __ \\@
_  / / /@
/ /_/ / @
\\____/  @
        @@
______@
__<  /@
__  / @
_  /  @
/_/   @
      @@
______ @
__|__ \\@
____/ /@
_  __/ @
/____/ @
       @@
________@
__|__  /@
___/_ < @
____/ / @
/____/  @
        @@
_____ __@
__  // /@
_  // /_@
/__  __/@
  /_/   @
        @@
__________@
___  ____/@
______ \\  @
 ____/ /  @
/_____/   @
          @@
________@
__  ___/@
_  __ \\ @
/ /_/ / @
\\____/  @
        @@
______@
/__  /@
__  / @
_  /  @
/_/   @
      @@
_______ @
__( __ )@
_  __  |@
/ /_/ / @
\\____/  @
        @@
_______ @
__  __ \\@
_  /_/ /@
_\\__, / @
/____/  @
        @@
      @
_____ @
___(_)@
___   @
_(_)  @
      @@
      @
_____ @
___(_)@
___   @
_( )  @
_|/   @@
____@
_  /@
/ / @
\\ \\ @
 \\_\\@
    @@
       @
_______@
_ ____/@
/____/ @
  $    @
       @@
___  @
__ \\ @
___ \\@
__  /@
_/_/ @
     @@
_____ @
_ __ \\@
__/ _/@
_/_/  @
(_)   @
      @@
_________ @
__  ____ \\@
_  / __ \`/@
/ / /_/ / @
\\ \\__,_/  @
 \\____/   @@
_______ @
___    |@
__  /| |@
_  ___ |@
/_/  |_|@
        @@
________ @
___  __ )@
__  __  |@
_  /_/ / @
/_____/  @
         @@
_________@
__  ____/@
_  /     @
/ /___   @
\\____/   @
         @@
________ @
___  __ \\@
__  / / /@
_  /_/ / @
/_____/  @
         @@
__________@
___  ____/@
__  __/   @
_  /___   @
/_____/   @
          @@
__________@
___  ____/@
__  /_    @
_  __/    @
/_/       @
          @@
_________@
__  ____/@
_  / __  @
/ /_/ /  @
\\____/   @
         @@
______  __@
___  / / /@
__  /_/ / @
_  __  /  @
/_/ /_/   @
          @@
________@
____  _/@
 __  /  @
__/ /   @
/___/   @
        @@
_________@
______  /@
___ _  / @
/ /_/ /  @
\\____/   @
         @@
______ __@
___  //_/@
__  ,<   @
_  /| |  @
/_/ |_|  @
         @@
______ @
___  / @
__  /  @
_  /___@
/_____/@
       @@
______  ___@
___   |/  /@
__  /|_/ / @
_  /  / /  @
/_/  /_/   @
           @@
_____   __@
___  | / /@
__   |/ / @
_  /|  /  @
/_/ |_/   @
          @@
_______ @
__  __ \\@
_  / / /@
/ /_/ / @
\\____/  @
        @@
________ @
___  __ \\@
__  /_/ /@
_  ____/ @
/_/      @
         @@
_______ @
__  __ \\@
_  / / /@
/ /_/ / @
\\___\\_\\ @
        @@
________ @
___  __ \\@
__  /_/ /@
_  _, _/ @
/_/ |_|  @
         @@
________@
__  ___/@
_____ \\ @
____/ / @
/____/  @
        @@
________@
___  __/@
__  /   @
_  /    @
/_/     @
        @@
_____  __@
__  / / /@
_  / / / @
/ /_/ /  @
\\____/   @
         @@
___    __@
__ |  / /@
__ | / / @
__ |/ /  @
_____/   @
         @@
___       __@
__ |     / /@
__ | /| / / @
__ |/ |/ /  @
____/|__/   @
            @@
____  __@
__  |/ /@
__    / @
_    |  @
/_/|_|  @
        @@
__  __@
_ \\/ /@
__  / @
_  /  @
/_/   @
      @@
______@
___  /@
__  / @
_  /__@
/____/@
      @@
________@
____  _/@
___  /  @
__  /   @
_  /    @
/__/    @@
___    @
__ \\   @
___ \\  @
____ \\ @
______\\@
       @@
________@
____/  /@
____  / @
___  /  @
__/ /   @
/__/    @@
_ //|@
_|/||@
  $  @
 $   @
$    @
     @@
        @
        @
        @
        @
________@
_/_____/@@
___ @
_( )@
__V @
 $  @
$   @
    @@
        @
______ _@
_  __ \`/@
/ /_/ / @
\\__,_/  @
        @@
______  @
___  /_ @
__  __ \\@
_  /_/ /@
/_.___/ @
        @@
       @
_______@
_  ___/@
/ /__  @
\\___/  @
       @@
_________@
______  /@
_  __  / @
/ /_/ /  @
\\__,_/   @
         @@
      @
_____ @
_  _ \\@
/  __/@
\\___/ @
      @@
________@
___  __/@
__  /_  @
_  __/  @
/_/     @
        @@
         @
_______ _@
__  __ \`/@
_  /_/ / @
_\\__, /  @
/____/   @@
______  @
___  /_ @
__  __ \\@
_  / / /@
/_/ /_/ @
        @@
_____ @
___(_)@
__  / @
_  /  @
/_/   @
      @@
________ @
______(_)@
_____  / @
____  /  @
___  /   @
/___/    @@
______  @
___  /__@
__  //_/@
_  ,<   @
/_/|_|  @
        @@
______@
___  /@
__  / @
_  /  @
/_/   @
      @@
            @
_______ ___ @
__  __ \`__ \\@
_  / / / / /@
/_/ /_/ /_/ @
            @@
        @
_______ @
__  __ \\@
_  / / /@
/_/ /_/ @
        @@
       @
______ @
_  __ \\@
/ /_/ /@
\\____/ @
       @@
         @
________ @
___  __ \\@
__  /_/ /@
_  .___/ @
/_/      @@
        @
______ _@
_  __ \`/@
/ /_/ / @
\\__, /  @
  /_/   @@
        @
________@
__  ___/@
_  /    @
/_/     @
        @@
        @
________@
__  ___/@
_(__  ) @
/____/  @
        @@
_____ @
__  /_@
_  __/@
/ /_  @
\\__/  @
      @@
        @
____  __@
_  / / /@
/ /_/ / @
\\__,_/  @
        @@
        @
___   __@
__ | / /@
__ |/ / @
_____/  @
        @@
           @
___      __@
__ | /| / /@
__ |/ |/ / @
____/|__/  @
           @@
        @
____  __@
__  |/_/@
__>  <  @
/_/|_|  @
        @@
         @
_____  __@
__  / / /@
_  /_/ / @
_\\__, /  @
/____/   @@
      @
______@
___  /@
__  /_@
_____/@
      @@
_______@
____/_/@
__/_/  @
< <    @
/ /    @
\\_\\    @@
_______@
____  /@
___  / @
__  /  @
_  /   @
/_/    @@
____ _ @
____| |@
____/ /@
____>_>@
__/_/  @
/_/    @@
__/\\//@
_//\\/ @
  $   @
 $    @
$     @
      @@
_____  _ @
___(_)(_)@
__  _ |  @
_  __ |  @
/_/ |_|  @
         @@
____   _ @
__(_)_(_)@
_  __ \\  @
/ /_/ /  @
\\____/   @
         @@
____   _ @
__(_) (_)@
_  / / / @
/ /_/ /  @
\\____/   @
         @@
____   _ @
__(_)_(_)@
_  __ \`/ @
/ /_/ /  @
\\__,_/   @
         @@
____   _ @
__(_)_(_)@
_  __ \\  @
/ /_/ /  @
\\____/   @
         @@
____   _ @
__(_) (_)@
_  / / / @
/ /_/ /  @
\\__,_/   @
         @@
_________ @
____  __ \\@
___  / / /@
__  /_| | @
_  //__/  @
/_/       @@
160
     $$@
    $$ @
   $$  @
  $$   @
 $$    @
$$     @@
161
_____ @
___(_)@
__  / @
_  /  @
/_/   @
      @@
162
_______@
____/ /@
_  ___/@
/ /__  @
\\  _/  @
/_/    @@
163
_________ @
____  ,__\\@
___/ /_   @
__/ /___  @
(_,____/  @
          @@
164
___ /|___/|@
___| __  / @
__  /_/ /  @
_ ___  |   @
|/   |/    @
           @@
165
___ ____@
___| / /@
_ _  __/@
/_  __/ @
 /_/    @
        @@
166
_______@
____  /@
_____/ @
____   @
_  /   @
/_/    @@
167
_______ @
____/ _)@
__  | | @
_| || | @
_| |_/  @
(__/    @@
168
___   _ @
_(_) (_)@
  $   $ @
 $   $  @
$   $   @
        @@
169
__________  @
___  _____\\ @
__  / ___/ |@
_  / /__  / @
|  \\___/ /  @
 \\______/   @@
170
______ _@
__  _ \`/@
__\\_,_/ @
/____/  @
 $      @
        @@
171
______@
_  / /@
/ / / @
\\ \\ \\ @
 \\_\\_\\@
      @@
172
        @
________@
_/___  /@
    /_/ @
  $     @
        @@
173
       @
       @
_______@
_/____/@
   $   @
       @@
174
__________  @
___  ___  \\ @
__  / _ \\  |@
_  / , _/ / @
| /_/|_| /  @
 \\______/   @@
175
________@
_/_____/@
   $    @
  $     @
 $      @
        @@
176
_____ @
_  _ \\@
/ // /@
\\___/ @
 $    @
      @@
177
________ @
_____/ /_@
____  __/@
___/_/_  @
/_____/  @
         @@
178
__ ___ @
__|_  |@
_  __/ @
/____/ @
 $     @
       @@
179
__ ____@
__|_  /@
__/_ < @
/____/ @
 $     @
       @@
180
____@
_/_/@
  $ @
 $  @
$   @
    @@
181
          @
______  __@
___  / / /@
__  /_/ / @
_  ._,_/  @
/_/       @@
182
_________@
_  _    /@
/ (/ / / @
\\_  / /  @
 /_/_/   @
         @@
183
    @
___ @
_(_)@
  $ @
 $  @
    @@
184 
    @
    @
    @
    @
___ @
_/_)@@
185
_____@
_<  /@
_  / @
/_/  @
$    @
     @@
186
______ @
__  _ \\@
__\\___/@
/____/ @
 $     @
       @@
187
_____  @
__ \\ \\ @
___ \\ \\@
__  / /@
___/_/ @
       @@
188
_____   __ @
_<  / _/_/ @
_/ /_/_/___@
/_//_// / /@
 /_/ /_  _/@
      /_/  @@
189
_____   __   @
_<  / _/_/__ @
_/ /_/_/|_  |@
/_//_/ / __/ @
 /_/  /____/ @
             @@
190
__ ____    __ @
__|_  /  _/_/ @
__/_ < _/_/___@
/____//_// / /@
    /_/ /_  _/@
         /_/  @@
191
___ _ @
___(_)@
__  / @
/ _/_ @
\\___/ @
      @@
192
______ @
____\\_\\@
__  _ |@
_  __ |@
/_/ |_|@
       @@
193
_______@
____/_/@
__  _ |@
_  __ |@
/_/ |_|@
       @@
194
____ //|@
____|/||@
__  _ | @
_  __ | @
/_/ |_| @
        @@
195
_____/\\//@
____//\\/ @
__  _ |  @
_  __ |  @
/_/ |_|  @
         @@
196
_____  _ @
___(_)(_)@
__  _ |  @
_  __ |  @
/_/ |_|  @
         @@
197
____(())@
___    |@
__  /| |@
_  ___ |@
/_/  |_|@
        @@
198
______________@
___      ____/@
__  /|  __/   @
_  __  /___   @
/_/ /_____/   @
              @@
199
_________@
__  ____/@
_  /     @
/ /___   @
\\____/   @
 /_)     @@
200
______ @
____\\_\\@
__  __/@
_  _/  @
/___/  @
       @@
201
_______@
____/_/@
__  __/@
_  _/  @
/___/  @
       @@
202
____ //|@
____|/||@
__  __/ @
_  _/   @
/___/   @
        @@
203
_____  _ @
___(_)(_)@
__  __/  @
_  _/    @
/___/    @
         @@
204
______ @
____\\_\\@
__   _/@
__/ /  @
/___/  @
       @@
205
_______@
____/_/@
__   _/@
__/ /  @
/___/  @
       @@
206
____ //|@
____|/||@
__   _/ @
__/ /   @
/___/   @
        @@
207
_____  _ @
___(_)(_)@
__   _/  @
__/ /    @
/___/    @
         @@
208
_________ @
____  __ \\@
___  /_/ /@
/_  __/ / @
 /_____/  @
          @@
209
_____/\\//@
____//\\/ @
__  |/ / @
_     /  @
/_/|_/   @
         @@
210
______ @
____\\_\\@
_  __ \\@
/ /_/ /@
\\____/ @
       @@
211
_______@
____/_/@
_  __ \\@
/ /_/ /@
\\____/ @
       @@
212
___ //|@
___|/||@
_  __ \\@
/ /_/ /@
\\____/ @
       @@
213
____/\\//@
___//\\/ @
_  __ \\ @
/ /_/ / @
\\____/  @
        @@
214
____   _ @
__(_)_(_)@
_  __ \\  @
/ /_/ /  @
\\____/   @
         @@
215
     @
__   @
_/|/|@
 > < @
|/|/ @
     @@
216
________ @
__  _// \\@
_  //// /@
/ //// / @
\\_//__/  @
         @@
217
______  @
____\\_\\_@
_  / / /@
/ /_/ / @
\\____/  @
        @@
218
_______ @
____/_/_@
_  / / /@
/ /_/ / @
\\____/  @
        @@
219
___ //| @
___|/||_@
_  / / /@
/ /_/ / @
\\____/  @
        @@
220
____   _ @
__(_) (_)@
_  / / / @
/ /_/ /  @
\\____/   @
         @@
221
______ @
___/_/_@
__ \\/ /@
___  / @
__/_/  @
       @@
222
______  @
___  /_ @
__  __ \\@
_  ____/@
/_/     @
        @@
223
_________ @
____  __ \\@
___  / / /@
__  /_| | @
_  //__/  @
/_/       @@
224
______  @
____\\_\\_@
_  __ \`/@
/ /_/ / @
\\__,_/  @
        @@
225
_______ @
____/_/_@
_  __ \`/@
/ /_/ / @
\\__,_/  @
        @@
226
___ //| @
___|/||_@
_  __ \`/@
/ /_/ / @
\\__,_/  @
        @@
227
____/\\//@
___//\\/_@
_  __ \`/@
/ /_/ / @
\\__,_/  @
        @@
228
____   _ @
__(_)_(_)@
_  __ \`/ @
/ /_/ /  @
\\__,_/   @
         @@
229
_______ @
____(())@
_  __ \`/@
/ /_/ / @
\\__,_/  @
        @@
230
           @
______ ___ @
_  __ \` _ \\@
/ /_/   __/@
\\__,_____/ @
           @@
231
       @
_______@
_  ___/@
/ /__  @
\\___/  @
/_)    @@
232
_____ @
___\\_\\@
_  _ \\@
/  __/@
\\___/ @
      @@
233
______@
___/_/@
_  _ \\@
/  __/@
\\___/ @
      @@
234
___ //|@
___|/||@
_  _ \\ @
/  __/ @
\\___/  @
       @@
235
____  _ @
__(_)(_)@
_  _ \\  @
/  __/  @
\\___/   @
        @@
236
_____ @
___\\_\\@
__  / @
_  /  @
/_/   @
      @@
237
______@
___/_/@
__  / @
_  /  @
/_/   @
      @@
238
___ //|@
___|/||@
__  /  @
_  /   @
/_/    @
       @@
239
_ _   _ @
_(_)_(_)@
__/ /   @
_  /    @
/_/     @
        @@
240
____ || @
____=||=@
____ || @
/ __\` | @
\\____/  @
        @@
241
_____/\\//@
____//\\/ @
__  __ \\ @
_  / / / @
/_/ /_/  @
         @@
242
______ @
____\\_\\@
_  __ \\@
/ /_/ /@
\\____/ @
       @@
243
_______@
____/_/@
_  __ \\@
/ /_/ /@
\\____/ @
       @@
244
___ //|@
___|/||@
_  __ \\@
/ /_/ /@
\\____/ @
       @@
245
____/\\//@
___//\\/ @
_  __ \\ @
/ /_/ / @
\\____/  @
        @@
246
____   _ @
__(_)_(_)@
_  __ \\  @
/ /_/ /  @
\\____/   @
         @@
247
       @
_____  @
___(_)_@
/_____/@
 (_)   @
       @@
248
        @
_______ @
_  _// \\@
/ //// /@
\\_//__/ @
        @@
249
______  @
____\\_\\_@
_  / / /@
/ /_/ / @
\\__,_/  @
        @@
250
_______ @
____/_/_@
_  / / /@
/ /_/ / @
\\__,_/  @
        @@
251
___ //| @
___|/||_@
_  / / /@
/ /_/ / @
\\__,_/  @
        @@
252
____   _ @
__(_) (_)@
_  / / / @
/ /_/ /  @
\\__,_/   @
         @@
253
________ @
_____/_/_@
__  / / /@
_  /_/ / @
_\\__, /  @
/____/   @@
254
_______  @
____  /_ @
___  __ \\@
__  /_/ /@
_  .___/ @
/_/      @@
255
_____   _ @
___(_) (_)@
__  / / / @
_  /_/ /  @
_\\__, /   @
/____/    @@
`,kp=`flf2a$ 7 6 22 15 4
starwars.flf by Ryan Youck (youck@cs.uregina.ca) Dec 25/1994
I am not responsible for use of this font  
Based on Big.flf by Glenn Chappell

$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@@
 __ $@
|  |$@
|  |$@
|  |$@
|__|$@
(__)$@
    $@@
 _ _ @
( | )@
 V V @
  $  @
  $  @
  $  @
     @@
   _  _   @
 _| || |_$@
|_  __  _|@
 _| || |_ @
|_  __  _|@
  |_||_| $@
          @@
     __,--,_.@
    /       |@
   |   (----\`@
    \\   \\   $@
.----)   |  $@
|_    __/   $@
  '--'      $@@
  _     ___$ @
 / \\   /  /$ @
( o ) /  / $ @
 \\_/ /  / _$ @
    /  / / \\ @
   /  / ( o )@
  /__/   \\_/ @@
        @
  ___   @
 ( _ ) $@
 / _ \\/\\@
| (_>  <@
 \\___/\\/@
       $@@
 __ @
(_ )@
 |/ @
  $ @
  $ @
  $ @
    @@
  ___@
 /  /@
|  |$@
|  |$@
|  |$@
|  |$@
 \\__\\@@
___  @
\\  \\ @
 |  |@
 |  |@
 |  |@
 |  |@
/__/ @@
    _    @
 /\\| |/\\ @
 \\ \` ' /$@
|_     _|@
 / , . \\$@
 \\/|_|\\/ @
         @@
       @
   _   @
 _| |_$@
|_   _|@
  |_| $@
   $   @
       @@
    @
    @
  $ @
  $ @
 __ @
(_ )@
 |/ @@
        @
        @
 ______ @
|______|@
    $   @
    $   @
        @@
    @
    @
    @
  $ @
 __ @
(__)@
    @@
     ___@
    /  /@
   /  / @
  /  /$ @
 /  /$  @
/__/$   @
        @@
  ___  $@
 / _ \\ $@
| | | |$@
| | | |$@
| |_| |$@
 \\___/ $@
       $@@
 __ $@
/_ |$@
 | |$@
 | |$@
 | |$@
 |_|$@
    $@@
 ___  $@
|__ \\ $@
  $) |$@
  / / $@
 / /_ $@
|____|$@
      $@@
 ____  $@
|___ \\ $@
  __) |$@
 |__ < $@
 ___) |$@
|____/ $@
       $@@
 _  _   $@
| || |  $@
| || |_ $@
|__   _|$@
   | |  $@
   |_|  $@
        $@@
 _____ $@
| ____|$@
| |__  $@
|___ \\ $@
 ___) |$@
|____/ $@
       $@@
   __  $@
  / /  $@
 / /_  $@
| '_ \\ $@
| (_) |$@
 \\___/ $@
       $@@
 ______ $@
|____  |$@
   $/ / $@
   / /  $@
  / /   $@
 /_/    $@
        $@@
  ___  $@
 / _ \\ $@
| (_) |$@
 > _ < $@
| (_) |$@
 \\___/ $@
       $@@
  ___  $@
 / _ \\ $@
| (_) |$@
 \\__, |$@
   / / $@
  /_/  $@
       $@@
   @
 _ @
(_)@
 $ @
 _ @
(_)@
   @@
   @
 _ @
(_)@
 $ @
 _ @
( )@
|/ @@
   ___@
  /  /@
 /  /$@
<  <$ @
 \\  \\$@
  \\__\\@
      @@
        @
 ______ @
|______|@
 ______ @
|______|@
        @
        @@
___   @
\\  \\$ @
 \\  \\ @
  >  >@
 /  / @
/__/$ @
      @@
 ______  $@
|      \\ $@
\`----)  |$@
    /  / $@
   |__|  $@
    __   $@
   (__)  $@@
   ____  @
  / __ \\ @
 / / _\` |@
| | (_| |@
 \\ \\__,_|@
  \\____/ @
         @@
     ___  $   @
    /   \\ $   @
   /  ^  \\$   @
  /  /_\\  \\$  @
 /  _____  \\$ @
/__/     \\__\\$@
             $@@
.______  $@
|   _  \\ $@
|  |_)  |$@
|   _  < $@
|  |_)  |$@
|______/ $@
         $@@
  ______$@
 /      |@
|  ,----'@
|  |    $@
|  \`----.@
 \\______|@
        $@@
 _______ $@
|       \\$@
|  .--.  |@
|  |  |  |@
|  '--'  |@
|_______/$@
         $@@
 _______ @
|   ____|@
|  |__  $@
|   __| $@
|  |____ @
|_______|@
         @@
 _______ @
|   ____|@
|  |__  $@
|   __| $@
|  |   $ @
|__|     @
         @@
  _______ @
 /  _____|@
|  |  __ $@
|  | |_ |$@
|  |__| |$@
 \\______|$@
         $@@
 __    __ $@
|  |  |  |$@
|  |__|  |$@
|   __   |$@
|  |  |  |$@
|__|  |__|$@
          $@@
 __ $@
|  |$@
|  |$@
|  |$@
|  |$@
|__|$@
    $@@
       __ $@
      |  |$@
      |  |$@
.--.  |  |$@
|  \`--'  |$@
 \\______/ $@
          $@@
 __  ___$@
|  |/  /$@
|  '  / $@
|    <  $@
|  .  \\ $@
|__|\\__\\$@
        $@@
 __     $@
|  |    $@
|  |    $@
|  |    $@
|  \`----.@
|_______|@
        $@@
.___  ___.$@
|   \\/   |$@
|  \\  /  |$@
|  |\\/|  |$@
|  |  |  |$@
|__|  |__|$@
          $@@
.__   __.$@
|  \\ |  |$@
|   \\|  |$@
|  . \`  |$@
|  |\\   |$@
|__| \\__|$@
         $@@
  ______  $@
 /  __  \\ $@
|  |  |  |$@
|  |  |  |$@
|  \`--'  |$@
 \\______/ $@
          $@@
.______  $@
|   _  \\ $@
|  |_)  |$@
|   ___/ $@
|  |  $   @
| _|  $   @
      $   @@
  ______    $ @
 /  __  \\   $ @
|  |  |  |  $ @
|  |  |  |  $ @
|  \`--'  '--. @
 \\_____\\_____\\@
            $ @@
.______    $ @
|   _  \\   $ @
|  |_)  |  $ @
|      /   $ @
|  |\\  \\----.@
| _| \`._____|@
            $@@
     _______.@
    /       |@
   |   (----\`@
    \\   \\   $@
.----)   |  $@
|_______/   $@
            $@@
.___________.@
|           |@
\`---|  |----\`@
    |  |   $ @
    |  |   $ @
    |__|   $ @
           $ @@
 __    __ $@
|  |  |  |$@
|  |  |  |$@
|  |  |  |$@
|  \`--'  |$@
 \\______/ $@
          $@@
____    ____$@
\\   \\  /   /$@
 \\   \\/   /$ @
  \\      /$  @
   \\    /$   @
    \\__/$    @
        $    @@
____    __    ____$@
\\   \\  /  \\  /   /$@
 \\   \\/    \\/   /$ @
  \\            /$  @
   \\    /\\    /$   @
    \\__/  \\__/$    @
              $    @@
___   ___$@
\\  \\ /  /$@
 \\  V  / $@
  >   <  $@
 /  .  \\ $@
/__/ \\__\\$@
         $@@
____    ____$@
\\   \\  /   /$@
 \\   \\/   /$ @
  \\_    _/$  @
    |  |$    @
    |__|$    @
        $    @@
 ________ $@
|       / $@
\`---/  /  $@
   /  /   $@
  /  /----.@
 /________|@
          $@@
 ____ @
|    |@
|  |-\`@
|  | $@
|  | $@
|  |-.@
|____|@@
___     @
\\  \\ $  @
 \\  \\$  @
  \\  \\$ @
   \\  \\$@
    \\__\\@
        @@
 ____ @
|    |@
\`-|  |@
  |  |@
  |  |@
.-|  |@
|____|@@
  ___  @
 /   \\ @
/--^--\\@
      $@
      $@
      $@
      $@@
        @
        @
        @
    $   @
    $   @
 ______ @
|______|@@
 __ @
( _)@
 \\| @
  $ @
  $ @
  $ @
    @@
     ___  $   @
    /   \\ $   @
   /  ^  \\$   @
  /  /_\\  \\$  @
 /  _____  \\$ @
/__/     \\__\\$@
             $@@
.______  $@
|   _  \\ $@
|  |_)  |$@
|   _  < $@
|  |_)  |$@
|______/ $@
         $@@
  ______$@
 /      |@
|  ,----'@
|  |    $@
|  \`----.@
 \\______|@
        $@@
 _______ $@
|       \\$@
|  .--.  |@
|  |  |  |@
|  '--'  |@
|_______/$@
         $@@
 _______ @
|   ____|@
|  |__  $@
|   __| $@
|  |____ @
|_______|@
         @@
 _______ @
|   ____|@
|  |__  $@
|   __| $@
|  |   $ @
|__|     @
         @@
  _______ @
 /  _____|@
|  |  __ $@
|  | |_ |$@
|  |__| |$@
 \\______|$@
         $@@
 __    __ $@
|  |  |  |$@
|  |__|  |$@
|   __   |$@
|  |  |  |$@
|__|  |__|$@
          $@@
 __ $@
|  |$@
|  |$@
|  |$@
|  |$@
|__|$@
    $@@
       __ $@
      |  |$@
      |  |$@
.--.  |  |$@
|  \`--'  |$@
 \\______/ $@
          $@@
 __  ___$@
|  |/  /$@
|  '  / $@
|    <  $@
|  .  \\ $@
|__|\\__\\$@
        $@@
 __     $@
|  |    $@
|  |    $@
|  |    $@
|  \`----.@
|_______|@
        $@@
.___  ___.$@
|   \\/   |$@
|  \\  /  |$@
|  |\\/|  |$@
|  |  |  |$@
|__|  |__|$@
          $@@
.__   __.$@
|  \\ |  |$@
|   \\|  |$@
|  . \`  |$@
|  |\\   |$@
|__| \\__|$@
         $@@
  ______  $@
 /  __  \\ $@
|  |  |  |$@
|  |  |  |$@
|  \`--'  |$@
 \\______/ $@
          $@@
.______  $@
|   _  \\ $@
|  |_)  |$@
|   ___/ $@
|  |  $   @
| _|  $   @
      $   @@
  ______    $ @
 /  __  \\   $ @
|  |  |  |  $ @
|  |  |  |  $ @
|  \`--'  '--. @
 \\_____\\_____\\@
            $ @@
.______    $ @
|   _  \\   $ @
|  |_)  |  $ @
|      /   $ @
|  |\\  \\----.@
| _| \`._____|@
            $@@
     _______.@
    /       |@
   |   (----\`@
    \\   \\   $@
.----)   |  $@
|_______/   $@
            $@@
.___________.@
|           |@
\`---|  |----\`@
    |  |   $ @
    |  |   $ @
    |__|   $ @
           $ @@
 __    __ $@
|  |  |  |$@
|  |  |  |$@
|  |  |  |$@
|  \`--'  |$@
 \\______/ $@
          $@@
____    ____$@
\\   \\  /   /$@
 \\   \\/   /$ @
  \\      /$  @
   \\    /$   @
    \\__/$    @
        $    @@
____    __    ____$@
\\   \\  /  \\  /   /$@
 \\   \\/    \\/   /$ @
  \\            /$  @
   \\    /\\    /$   @
    \\__/  \\__/$    @
              $    @@
___   ___$@
\\  \\ /  /$@
 \\  V  / $@
  >   <  $@
 /  .  \\ $@
/__/ \\__\\$@
         $@@
____    ____$@
\\   \\  /   /$@
 \\   \\/   /$ @
  \\_    _/$  @
    |  |$    @
    |__|$    @
        $    @@
 ________ $@
|       / $@
\`---/  /  $@
   /  /   $@
  /  /----.@
 /________|@
          $@@
   ___@
  /  /@
 |  |$@
/  /$ @
\\  \\$ @
 |  |$@
  \\__\\@@
 __ $@
|  |$@
|  |$@
|  |$@
|  |$@
|  |$@
|__|$@@
___   @
\\  \\$ @
 |  | @
  \\  \\@
  /  /@
 |  | @
/__/$ @@
  __  _ @
 /  \\/ |@
|_/\\__/ @
     $  @
     $  @
     $  @
        @@
  _   _  @
 (_)_(_) @
   / \\   @
  / _ \\  @
 / ___ \\ @
/_/   \\_\\@
         @@
 _   _ @
(_)_(_)@
 / _ \\ @
| | | |@
| |_| |@
 \\___/ @
       @@
 _   _ @
(_) (_)@
| | | |@
| | | |@
| |_| |@
 \\___/ @
       @@
 _   _ @
(_) (_)@
  __ _ @
 / _\` |@
| (_| |@
 \\__,_|@
       @@
 _   _ @
(_) (_)@
  ___  @
 / _ \\ @
| (_) |@
 \\___/ @
       @@
 _   _ @
(_) (_)@
 _   _ @
| | | |@
| |_| |@
 \\__,_|@
       @@
  ___  @
 / _ \\ @
| | ) |@
| |< < @
| | ) |@
| ||_/ @
|_|    @@
`,Qp=`flf2a$ 7 6 20 15 3
Stop by David Walton <walton@cs.ucdavis.edu>
Derived from Rounded by Nick Miners N.M.Miners@durham.ac.uk
21 August 1994
$$#
$$#
$$#
$$#
$$#
$$#
$$##
 _ #
| |#
| |#
|_|#
 _ #
|_|#
   ##
 _  _ #
( )( )#
|/ |/ #
      #
      #
      #
      ##
   __  _   #
 _|  || |_ #
(_   ||  _)#
 _|  || |_ #
(_   ||  _)#
  |__||_|  #
           ##
   _   #
 _| |_ #
|  ___)#
|___  |#
(_   _|#
  |_|  #
       ##
 _   _ #
(_) | |#
   / / #
  / /  #
 / / _ #
|_| (_)#
       ##
  ___   #
 / _ \\  #
( (_) ) #
 ) _ (  #
( (/  \\ #
 \\__/\\_)#
        ##
 _ #
( )#
|/ #
   #
   #
   #
   ##
   __ #
  / _)#
 / /  #
( (   #
 \\ \\_ #
  \\__)#
      ##
 __   #
(_ \\  #
  \\ \\ #
   ) )#
 _/ / #
(__/  #
      ##
 _  _  _ #
( \\| |/ )#
 \\  _  / #
(_ (_) _)#
 /     \\ #
(_/|_|\\_)#
         ##
       #
   _   #
 _| |_ #
(_   _)#
  |_|  #
       #
       ##
   #
   #
   #
   #
 _ #
( )#
|/ ##
     #
     #
 ___ #
(___)#
     #
     #
     ##
   #
   #
   #
   #
 _ #
(_)#
   ##
     _ #
    | |#
   / / #
  / /  #
 / /   #
|_|    #
       ##
  ______ #
 / __   |#
| | //| |#
| |// | |#
|  /__| |#
 \\_____/ #
         ##
  __ #
 /  |#
/_/ |#
  | |#
  | |#
  |_|#
     ##
 ______  #
(_____ \\ #
  ____) )#
 /_____/ #
 _______ #
(_______)#
         ##
 ________#
(_______/#
   ____  #
  (___ \\ #
 _____) )#
(______/ #
         ##
   __    #
  / /    #
 / /____ #
|___   _)#
    | |  #
    |_|  #
         ##
 _______ #
(_______)#
 ______  #
(_____ \\ #
 _____) )#
(______/ #
         ##
    __  #
   / /  #
  / /_  #
 / __ \\ #
( (__) )#
 \\____/ #
        ##
 _______ #
(_______)#
      _  #
     / ) #
    / /  #
   (_/   #
         ##
  _____  #
 / ___ \\ #
( (   ) )#
 > > < < #
( (___) )#
 \\_____/ #
         ##
  ____  #
 / __ \\ #
( (__) )#
 \\__  / #
   / /  #
  /_/   #
        ##
   #
   #
 _ #
(_)#
 _ #
(_)#
   ##
   #
   #
 _ #
(_)#
 _ #
( )#
|/ ##
       #
  _  _ #
 / )/ )#
( (( ( #
 \\_)\\_)#
       #
       ##
     #
 ___ #
(___)#
 ___ #
(___)#
     #
     ##
       #
 _  _  #
( \\( \\ #
 ) )) )#
(_/(_/ #
       #
       ##
 ____  #
(___ \\ #
    ) )#
   /_/ #
   _   #
  (_)  #
       ##
 $       $ #
 $       $ #
 $       $ #
 $    _|_$ #
 $__   | $ #
$(_/|_/|_/$#
 $       $ ##
        #
   /\\   #
  /  \\  #
 / /\\ \\ #
| |__| |#
|______|#
        ##
 ______  #
(____  \\ #
 ____)  )#
|  __  ( #
| |__)  )#
|______/ #
         ##
  ______ #
 / _____)#
| /      #
| |      #
| \\_____ #
 \\______)#
         ##
 _____   #
(____ \\  #
 _   \\ \\ #
| |   | |#
| |__/ / #
|_____/  #
         ##
 _______ #
(_______)#
 _____   #
|  ___)  #
| |_____ #
|_______)#
         ##
 _______ #
(_______)#
 _____   #
|  ___)  #
| |      #
|_|      #
         ##
  ______ #
 / _____)#
| /  ___ #
| | (___)#
| \\____/|#
 \\_____/ #
         ##
 _     _ #
| |   | |#
| |__ | |#
|  __)| |#
| |   | |#
|_|   |_|#
         ##
 _____ #
(_____)#
   _   #
  | |  #
 _| |_ #
(_____)#
       ##
   _____ #
  (_____)#
     _   #
    | |  #
 ___| |  #
(____/   #
         ##
 _    _ #
| |  / )#
| | / / #
| |< <  #
| | \\ \\ #
|_|  \\_)#
        ##
 _       #
| |      #
| |      #
| |      #
| |_____ #
|_______)#
         ##
 ______  #
|  ___ \\ #
| | _ | |#
| || || |#
| || || |#
|_||_||_|#
         ##
 ______  #
|  ___ \\ #
| |   | |#
| |   | |#
| |   | |#
|_|   |_|#
         ##
  _____  #
 / ___ \\ #
| |   | |#
| |   | |#
| |___| |#
 \\_____/ #
         ##
 ______  #
(_____ \\ #
 _____) )#
|  ____/ #
| |      #
|_|      #
         ##
  _____  #
 / ___ \\ #
| |   | |#
| |   |_|#
 \\ \\____ #
  \\_____)#
         ##
 ______  #
(_____ \\ #
 _____) )#
(_____ ( #
      | |#
      |_|#
         ##
    _    #
   | |   #
    \\ \\  #
     \\ \\ #
 _____) )#
(______/ #
         ##
 _______ #
(_______)#
 _       #
| |      #
| |_____ #
 \\______)#
         ##
 _     _ #
| |   | |#
| |   | |#
| |   | |#
| |___| |#
 \\______|#
         ##
 _    _ #
| |  | |#
| |  | |#
 \\ \\/ / #
  \\  /  #
   \\/   #
        ##
 _  _  _ #
| || || |#
| || || |#
| ||_|| |#
| |___| |#
 \\______|#
         ##
 _    _ #
\\ \\  / /#
 \\ \\/ / #
  )  (  #
 / /\\ \\ #
/_/  \\_\\#
        ##
 _     _ #
| |   | |#
| |___| |#
 \\_____/ #
   ___   #
  (___)  #
         ##
 _______ #
(_______)#
   __    #
  / /    #
 / /____ #
(_______)#
         ##
 ___ #
|  _)#
| |  #
| |  #
| |_ #
|___)#
     ##
 _     #
| |    #
 \\ \\   #
  \\ \\  #
   \\ \\ #
    |_|#
       ##
 ___ #
(_  |#
  | |#
  | |#
 _| |#
(___|#
     ##
   /\\  #
  //\\\\ #
 (____)#
       #
       #
       #
       ##
         #
         #
         #
         #
 _______ #
(_______)#
         ##
 _ #
( )#
 \\|#
   #
   #
   #
   ##
       #
       #
  ____ #
 / _  |#
( ( | |#
 \\_||_|#
       ##
 _     #
| |    #
| | _  #
| || \\ #
| |_) )#
|____/ #
       ##
       #
       #
  ____ #
 / ___)#
( (___ #
 \\____)#
       ##
     _ #
    | |#
  _ | |#
 / || |#
( (_| |#
 \\____|#
       ##
       #
       #
  ____ #
 / _  )#
( (/ / #
 \\____)#
       ##
  ___ #
 / __)#
| |__ #
|  __)#
| |   #
|_|   #
      ##
       #
       #
  ____ #
 / _  |#
( ( | |#
 \\_|| |#
(_____|##
 _     #
| |    #
| | _  #
| || \\ #
| | | |#
|_| |_|#
       ##
 _ #
(_)#
 _ #
| |#
| |#
|_|#
   ##
   _ #
  (_)#
   _ #
  | |#
  | |#
 _| |#
(__/ ##
 _     #
| |    #
| |  _ #
| | / )#
| |< ( #
|_| \\_)#
       ##
 _ #
| |#
| |#
| |#
| |#
|_|#
   ##
       #
       #
 ____  #
|    \\ #
| | | |#
|_|_|_|#
       ##
       #
       #
 ____  #
|  _ \\ #
| | | |#
|_| |_|#
       ##
       #
       #
  ___  #
 / _ \\ #
| |_| |#
 \\___/ #
       ##
       #
       #
 ____  #
|  _ \\ #
| | | |#
| ||_/ #
|_|    ##
       #
       #
  ____ #
 / _  |#
| | | |#
 \\_|| |#
    |_|##
       #
       #
  ____ #
 / ___)#
| |    #
|_|    #
       ##
      #
      #
  ___ #
 /___)#
|___ |#
(___/ #
      ##
      #
 _    #
| |_  #
|  _) #
| |__ #
 \\___)#
      ##
       #
       #
 _   _ #
| | | |#
| |_| |#
 \\____|#
       ##
       #
       #
 _   _ #
| | | |#
 \\ V / #
  \\_/  #
       ##
       #
       #
 _ _ _ #
| | | |#
| | | |#
 \\____|#
       ##
       #
       #
 _   _ #
( \\ / )#
 ) X ( #
(_/ \\_)#
       ##
       #
       #
 _   _ #
| | | |#
| |_| |#
 \\__  |#
(____/ ##
       #
       #
 _____ #
(___  )#
 / __/ #
(_____)#
       ##
   __ #
  / _)#
 | |  #
( (   #
 | |_ #
  \\__)#
      ##
 _ #
| |#
|_|#
 _ #
| |#
|_|#
   ##
 __   #
(_ \\  #
  | | #
   ) )#
 _| | #
(__/  #
      ##
  __  _ #
 /  \\/ )#
(_/\\__/ #
        #
        #
        #
        ##
 _     _ #
(_) _ (_)#
   / \\   #
  / _ \\  #
 / /_\\ \\ #
|_______|#
         ##
 _     _ #
(_)___(_)#
 / ___ \\ #
| |   | |#
| |___| |#
 \\_____/ #
         ##
 _     _ #
(_)   (_)#
 _     _ #
| |   | |#
| |___| |#
 \\______|#
         ##
 _   _ #
(_) (_)#
  ____ #
 / _  |#
( ( | |#
 \\_||_|#
       ##
 _   _ #
(_) (_)#
  ___  #
 / _ \\ #
| |_| |#
 \\___/ #
       ##
 _   _ #
(_) (_)#
 _   _ #
| | | |#
| |_| |#
 \\____|#
       ##
  ___  #
 / _ \\ #
| | ) )#
| |< ( #
| | ) )#
|_|(_/ #
       ##
`,Zp=`flf2a$ 5 4 8 -1 12
"infopowr.flf"
Based on a 12 letter font From: "Answers to Frequently Asked Questions
  About Today's Cryptography," v2.0 draft 2f, 9/20/93, by Paul Fahn,
  copyright 1993, RSA Laboratories
Specifically, the ASCII lettering from the "DISTRIBUTION:" section:
"_ _, _ ___ _, __,  _, _  _, ___ _  _, _, _ _  _, __,  _, _  _ ___ __, "
 | |\\ | |_ / \\ |_)  |\\/| / \\  |  | / \\ |\\ | | (_  |_) / \\ |  | |_  | )
 | | \\| |  \\ / | \\  |  | |~|  |  | \\ / | \\| | , ) |   \\ / |/\\| |   |~\\
 ~ ~  ~ ~   ~  ~  ~ ~  ~ ~ ~  ~  ~  ~  ~  ~ ~  ~  ~    ~  ~  ~ ~~~ ~  ~

Additional characters & figlet conversion by:
   Kent Nassen, kentn@cyberspace.org, 8/16/94
$$@
$$@
$$@
$$@
$$@@
 ,@
 |@
 |@
 .@
 $@@
 ,,@
 ''@
  $@
  $@
  $@@
@
@
@
@
@@
@
@
@
@
@@
@
@
@
@
@@
@
@
@
@
@@
 ,@
 '@
 $@
 $@
 $@@
 /@
 |@
 |@
 \\@
 $@@
 \\@
 |@
 |@
 /@
 $@@
@
@
@
@
@@
@
@
@
@
@@
 $@
 $@
 ,@
 '@
 $@@
  $@
  $@
 ~~@
  $@
  $@@
$@
$@
,@
~@
$@@
  $@
  /@
 / @
  $@
  $@@
 _$@
/ \\@
\\ /@
 ~ @
  $@@
 ,@
 |@
 |@
 ~@
 $@@
  _,@
 ~ )@
  / @
 ~~~@
   $@@
  _,@
 ~_)@
   )@
 ~~ @
   $@@
   ,@
 / |@
 ~~|@
   ~@
   $@@
  _,@
 |_ @
   )@
 ~~ @
   $@@
  _,@
 /_ @
 \\ )@
  ~ @
   $@@
 __,@
 _/ @
 /~ @
    @
   $@@
  _,@
 (_)@
 ( )@
  ~ @
   $@@
  _,@
 (_/@
  / @
  ' @
   $@@
 $@
 .@
 .@
 $@
 $@@
 $@
 .@
 ,@
 '@
 $@@
  /@
 / @
 \\ @
  \\@
  $@@
  $@
 ~~@
 ~~@
  $@
  $@@
 \\ @
  \\@
  /@
 / @
  $@@
  _$@
 ( )@
  / @
  .$@
   $@@
$ _,@
$/,)@
$\\\`'@
$ ~~@
$  $@@
  _,@
 / \\@
 |~|@
 ~ ~@
   $@@
 __,@
 |_)@
 |_)@
 ~  @
   $@@
  _,@
 / \`@
 \\ ,@
  ~ @
   $@@
 __,@
 | \\@
 |_/@
 ~  @
   $@@
 __,@
 |_ @
 |  @
 ~~~@
   $@@
 __,@
 |_ @
 |  @
 ~  @
   $@@
  _,@
 / _@
 \\ /@
  ~ @
   $@@
 _,_@
 |_|@
 | |@
 ~ ~@
   $@@
$_@
$|@
$|@
$~@
$$@@
  __@
 , |@
 ( |@
  ~~@
   $@@
 _,_@
 |_/@
 | \\@
 ~ ~@
   $@@
 _, @
 |  @
 | ,@
 ~~~@
   $@@
 _, _@
 |\\/|@
 |  |@
 ~  ~@
    $@@
 _, _@
 |\\ |@
 | \\|@
 ~  ~@
    $@@
  _,@
 / \\@
 \\ /@
  ~ @
   $@@
 __,@
 |_)@
 |  @
 ~  @
   $@@
  _,@
 / \\@
 \\\\/@
  ~\`@
   $@@
 __,@
 |_)@
 | \\@
 ~ ~@
   $@@
  _,@
 (_ @
 , )@
  ~ @
   $@@
 ___@
  | @
  | @
  ~ @
   $@@
 _,_@
 | |@
 | |@
 \`~'@
   $@@
 _,_@
 | /@
 |/ @
 ~  @
   $@@
 _  _@
 |  |@
 |/\\|@
 ~  ~@
    $@@
 _  ,@
 '\\/ @
  /\\ @
 ~  ~@
    $@@
 , _@
 \\ |@
  \\|@
   )@
  ~'@@
 ___,@
 \` / @
  /  @
 ~~~ @
    $@@
 .-@
 | @
 | @
 \`-@
  $@@
   $@
  \\ @
   \\@
    @
   $@@
 -.@
  |@
  |@
 -'@
  $@@
 /\\@
  $@
  $@
  $@
  $@@
    $@
    $@
    $@
 ~~~~@
    $@@
  .@
  \`@
  $@
  $@
  $@@
  _,@
 /_\\@
 | |@
 ~ ~@
   $@@
 __,@
 |_)@
 |_)@
 ~  @
   $@@
  _,@
 / \`@
 \\ ,@
  ~ @
   $@@
 __,@
 | \\@
 |_/@
 ~  @
   $@@
 __,@
 |_ @
 |  @
 ~~~@
   $@@
 __,@
 |_ @
 |  @
 ~  @
   $@@
  _,@
 / _@
 \\ /@
  ~ @
   $@@
 _,_@
 |_|@
 | |@
 ~ ~@
   $@@
$_@
$|@
$|@
$~@
$$@@
  __,@
 , | @
 ( | @
  ~~ @
    $@@
 _,_@
 |_/@
 | \\@
 ~ ~@
   $@@
 _, @
 |  @
 | ,@
 ~~~@
   $@@
 _, _@
 |\\/|@
 |  |@
 ~  ~@
    $@@
 _, _@
 |\\ |@
 | \\|@
 ~  ~@
    $@@
  _,@
 / \\@
 \\ /@
  ~ @
   $@@
 __,@
 |_)@
 |  @
 ~  @
   $@@
  _,@
 / \\@
 \\\\/@
  ~\`@
   $@@
 __,@
 |_)@
 | \\@
 ~ ~@
   $@@
  _,@
 (_ @
 , )@
  ~ @
   $@@
 ___@
  | @
  | @
  ~ @
   $@@
 _,_@
 | |@
 | |@
 \`~'@
   $@@
 _,_@
 | /@
 |/ @
 ~  @
   $@@
 _  _@
 |  |@
 |/\\|@
 ~  ~@
    $@@
 _  ,@
 '\\/ @
  /\\ @
 ~  ~@
    $@@
 , _@
 \\ |@
  \\|@
   )@
  ~'@@
 ___,@
 \` / @
  /  @
 ~~~ @
    $@@
@
@
@
@
@@
 .@
 |@
 |@
 |@
 $@@
@
@
@
@
@@
@
@
@
@
@@
@
@
@
@
@@
@
@
@
@
@@
@
@
@
@
@@
@
@
@
@
@@
@
@
@
@
@@
@
@
@
@
@@
@
@
@
@
@@
`,Jp=`flf2a$ 7 7 18 0 11 0 24447 0
Author : myflix
Date   : 2004/6/29 12:12:55
Version: 1.0
-------------------------------------------------

-------------------------------------------------
This font has been created using JavE's FIGlet font export assistant.
Have a look at: http://www.jave.de

Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.
$ #
$ #
$ #
$ #
$ #
$ #
$ ##
 _  #
| | #
| | #
| | #
|_| #
(_) #
    ##
 _  _  #
| || | #
\\_|\\_| #
       #
       #
       #
       ##
           #
   _  _    #
 _| || |_  #
|_| || |_| #
|_| || |_| #
  |_||_|   #
           ##
     _      #
 .--| |--.  #
| (_| |_\\_| #
'_._| |_'.  #
| \\_| |_) | #
 '--|_|--'  #
            ##
     __  #
 _  / /  #
(_)/ /   #
  / / _  #
 / / (_) #
/_/      #
         ##
   ___       #
 .' _ '.     #
 | (_) '___  #
 .\`___'/ _/  #
| (___)  \\_  #
\`._____.\\__| #
             ##
 _  #
| | #
\\_| #
    #
    #
    #
    ##
  __  #
.' _| #
| |   #
| |   #
| |_  #
\`.__| #
      ##
 __   #
|_ \`. #
  | | #
  | | #
 _| | #
|__,' #
      ##
    _     #
 .-| |-.  #
 \\     /  #
|_     _| #
 /     \\  #
 '-|_|-'  #
          ##
          #
   .-.    #
 __| |__  #
|__   __| #
   | |    #
   '-'    #
          ##
    #
    #
    #
    #
 _  #
)_/ #
    ##
         #
         #
 ______  #
|______| #
         #
         #
         ##
    #
    #
    #
    #
 _  #
(_) #
    ##
     __ #
    / / #
   / /  #
  / /   #
 / /    #
/_/     #
        ##
   ____    #
 .'    '.  #
|  .--.  | #
| |    | | #
|  \`--'  | #
 '.____.'  #
           ##
  __    #
 /  |   #
 \`| |   #
  | |   #
 _| |_  #
|_____| #
        ##
  _____   #
 / ___ \`. #
|_/___) | #
 .'____.' #
/ /_____  #
|_______| #
          ##
  ______   #
 / ____ \`. #
 \`'  __) | #
 _  |__ '. #
| \\____) | #
 \\______.' #
           ##
 _    _    #
| |  | |   #
| |__| |_  #
|____   _| #
    _| |_  #
   |_____| #
           ##
 _______   #
|  _____|  #
| |____    #
'_.____''. #
| \\____) | #
 \\______.' #
           ##
  ______   #
.' ____ \\  #
| |____\\_| #
| '____\`'. #
| (____) | #
'.______.' #
           ##
 _______  #
|  ___  | #
|_/  / /  #
    / /   #
   / /    #
  /_/     #
          ##
   ____    #
 .' __ '.  #
 | (__) |  #
 .\`____'.  #
| (____) | #
\`.______.' #
           ##
  ______   #
.' ____ '. #
| (____) | #
'_.____. | #
| \\____| | #
 \\______,' #
           ##
    #
 _  #
(_) #
 _  #
(_) #
    #
    ##
    #
 _  #
(_) #
 _  #
| ) #
)/  #
    ##
   _  #
  / / #
 / /  #
< <   #
 \\ \\  #
  \\_\\ #
      ##
         #
 ______  #
|______| #
 ______  #
|______| #
         #
         ##
  _    #
 \\ \\   #
  \\ \\  #
   > > #
  / /  #
 /_/   #
       ##
  _____   #
 / ___ \`. #
|_/___) | #
  /  __.' #
  |_|     #
  (_)     #
          ##
   ____   #
 .' __ \\  #
/ .'  \\ | #
| | (_/ | #
\\ \`.__.'\\ #
 \`.___ .' #
          ##
      _       #
     / \\      #
    / _ \\     #
   / ___ \\    #
 _/ /   \\ \\_  #
|____| |____| #
              ##
 ______    #
|_   _ \\   #
  | |_) |  #
  |  __'.  #
 _| |__) | #
|_______/  #
           ##
   ______  #
 .' ___  | #
/ .'   \\_| #
| |        #
\\ \`.___.'\\ #
 \`.____ .' #
           ##
 ______    #
|_   _ \`.  #
  | | \`. \\ #
  | |  | | #
 _| |_.' / #
|______.'  #
           ##
 ________  #
|_   __  | #
  | |_ \\_| #
  |  _| _  #
 _| |__/ | #
|________| #
           ##
 ________  #
|_   __  | #
  | |_ \\_| #
  |  _|    #
 _| |_     #
|_____|    #
           ##
   ______   #
 .' ___  |  #
/ .'   \\_|  #
| |   ____  #
\\ \`.___]  | #
 \`._____.'  #
            ##
 ____  ____  #
|_   ||   _| #
  | |__| |   #
  |  __  |   #
 _| |  | |_  #
|____||____| #
             ##
 _____  #
|_   _| #
  | |   #
  | |   #
 _| |_  #
|_____| #
        ##
    _____  #
   |_   _| #
     | |   #
 _   | |   #
| |__' |   #
\`.____.'   #
           ##
 ___  ____   #
|_  ||_  _|  #
  | |_/ /    #
  |  __'.    #
 _| |  \\ \\_  #
|____||____| #
             ##
  _____     #
 |_   _|    #
   | |      #
   | |   _  #
  _| |__/ | #
 |________| #
            ##
 ____    ____  #
|_   \\  /   _| #
  |   \\/   |   #
  | |\\  /| |   #
 _| |_\\/_| |_  #
|_____||_____| #
               ##
 ____  _____  #
|_   \\|_   _| #
  |   \\ | |   #
  | |\\ \\| |   #
 _| |_\\   |_  #
|_____|\\____| #
              ##
   ___    #
 .'   \`.  #
/  .-.  \\ #
| |   | | #
\\  \`-'  / #
 \`.___.'  #
          ##
 _______   #
|_   __ \\  #
  | |__) | #
  |  ___/  #
 _| |_     #
|_____|    #
           ##
   ___      #
 .'   \`.    #
/  .-.  \\   #
| |   | |   #
\\  \`-'  \\_  #
 \`.___.\\__| #
            ##
 _______     #
|_   __ \\    #
  | |__) |   #
  |  __ /    #
 _| |  \\ \\_  #
|____| |___| #
             ##
  ______   #
.' ____ \\  #
| (___ \\_| #
 _.____\`.  #
| \\____) | #
 \\______.' #
           ##
 _________  #
|  _   _  | #
|_/ | | \\_| #
    | |     #
   _| |_    #
  |_____|   #
            ##
 _____  _____  #
|_   _||_   _| #
  | |    | |   #
  | '    ' |   #
   \\ \\__/ /    #
    \`.__.'     #
               ##
 ____   ____  #
|_  _| |_  _| #
  \\ \\   / /   #
   \\ \\ / /    #
    \\ ' /     #
     \\_/      #
              ##
 ____      ____ #
|_  _|    |_  _|#
  \\ \\  /\\  / /  #
   \\ \\/  \\/ /   #
    \\  /\\  /    #
     \\/  \\/     #
                ##
 ____  ____  #
|_  _||_  _| #
  \\ \\  / /   #
   > \`' <    #
 _/ /'\`\\ \\_  #
|____||____| #
             ##
 ____  ____  #
|_  _||_  _| #
  \\ \\  / /   #
   \\ \\/ /    #
   _|  |_    #
  |______|   #
             ##
 ________  #
|  __   _| #
|_/  / /   #
   .'.' _  #
 _/ /__/ | #
|________| #
           ##
 ___  #
|  _| #
| |   #
| |   #
| |_  #
|___| #
      ##
__      #
\\ \\     #
 \\ \\    #
  \\ \\   #
   \\ \\  #
    \\_\\ #
        ##
 ___  #
|_  | #
  | | #
  | | #
 _| | #
|___| #
      ##
  ___   #
 / _ \\  #
|_/ \\_| #
        #
        #
        #
        ##
          #
          #
          #
          #
 _______  #
|_______| #
          ##
 __  #
|  | #
 \\_| #
     #
     #
     #
     ##
        #
        #
 ,--.   #
\`'_\\ :  #
// | |, #
\\'-;__/ #
        ##
 __        #
[  |       #
 | |.--.   #
 | '/'\`\\ \\ #
 |  \\__/ | #
[__;.__.'  #
           ##
        #
        #
 .---.  #
/ /'\`\\] #
| \\__.  #
'.___.' #
        ##
       __  #
      |  ] #
  .--.| |  #
/ /'\`\\' |  #
| \\__/  |  #
 '.__.;__] #
           ##
        #
        #
 .---.  #
/ /__\\\\ #
| \\__., #
 '.__.' #
        ##
    ___  #
  .' ..] #
 _| |_   #
'-| |-'  #
  | |    #
 [___]   #
         ##
         #
         #
  .--./) #
 / /'\`\\; #
 \\ \\._// #
 .',__\`  #
( ( __)) ##
 __       #
[  |      #
 | |--.   #
 | .-. |  #
 | | | |  #
[___]|__] #
          ##
  _   #
 (_)  #
 __   #
[  |  #
 | |  #
[___] #
      ##
     _  #
    (_) #
    __  #
   [  | #
 _  | | #
[ \\_| | #
 \\____/ ##
 __       #
[  |  _   #
 | | / ]  #
 | '' <   #
 | |\`\\ \\  #
[__|  \\_] #
          ##
 __   #
[  |  #
 | |  #
 | |  #
 | |  #
[___] #
      ##
              #
              #
 _ .--..--.   #
[ \`.-. .-. |  #
 | | | | | |  #
[___||__||__] #
              ##
          #
          #
 _ .--.   #
[ \`.-. |  #
 | | | |  #
[___||__] #
          ##
         #
         #
  .--.   #
/ .'\`\\ \\ #
| \\__. | #
 '.__.'  #
         ##
          #
          #
 _ .--.   #
[ '/'\`\\ \\ #
 | \\__/ | #
 | ;.__/  #
[__|      ##
          #
          #
  .--. _  #
/ /'\`\\' ] #
| \\__/ |  #
 \\__.; |  #
     |__] ##
         #
         #
 _ .--.  #
[ \`/'\`\\] #
 | |     #
[___]    #
         ##
        #
        #
 .--.   #
( (\`\\]  #
 \`'.'.  #
[\\__) ) #
        ##
  _    #
 / |_  #
\`| |-' #
 | |   #
 | |,  #
 \\__/  #
       ##
          #
          #
 __   _   #
[  | | |  #
 | \\_/ |, #
 '.__.'_/ #
          ##
         #
         #
 _   __  #
[ \\ [  ] #
 \\ \\/ /  #
  \\__/   #
         ##
             #
             #
 _   _   __  #
[ \\ [ \\ [  ] #
 \\ \\/\\ \\/ /  #
  \\__/\\__/   #
             ##
         #
         #
 _   __  #
[ \\ [  ] #
 > '  <  #
[__]\`\\_] #
         ##
          #
          #
  _   __  #
 [ \\ [  ] #
  \\ '/ /  #
[\\_:  /   #
 \\__.'    ##
        #
        #
 ____   #
[_   ]  #
 .' /_  #
[_____] #
        ##
   __  #
 .' _/ #
 | |   #
< <    #
 | |_  #
 \`.__\\ #
       ##
 _  #
| | #
| | #
| | #
| | #
|_| #
    ##
 __    #
\\_ \`.  #
  | |  #
   > > #
 _| |  #
/__.'  #
       ##
 ___.-. #
|  ___| #
'-'     #
        #
        #
        #
        ##
      _       #
     / \\      #
    / _ \\     #
   / ___ \\    #
 _/ /   \\ \\_  #
|____| |____| #
              ##
   ___    #
 .'   \`.  #
/  .-.  \\ #
| |   | | #
\\  \`-'  / #
 \`.___.'  #
          ##
 _____  _____  #
|_   _||_   _| #
  | |    | |   #
  | '    ' |   #
   \\ \\__/ /    #
    \`.__.'     #
               ##
        #
        #
 ,--.   #
\`'_\\ :  #
// | |, #
\\'-;__/ #
        ##
         #
         #
  .--.   #
/ .'\`\\ \\ #
| \\__. | #
 '.__.'  #
         ##
          #
          #
 __   _   #
[  | | |  #
 | \\_/ |, #
 '.__.'_/ #
          ##
�#
 #
 #
 #
 #
 #
 ##`,_y=`flf2a$ 6 5 16 15 13 0 24463 229
Standard by Glenn Chappell & Ian Chai 3/93 -- based on Frank's .sig
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Modified for figlet 2.2 by John Cowan <cowan@ccil.org>
  to add Latin-{2,3,4,5} support (Unicode U+0100-017F).
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

Font modified May 20, 2012 by patorjk to add the 0xCA0 character
 $@
 $@
 $@
 $@
 $@
 $@@
  _ @
 | |@
 | |@
 |_|@
 (_)@
    @@
  _ _ @
 ( | )@
  V V @
   $  @
   $  @
      @@
    _  _   @
  _| || |_ @
 |_  ..  _|@
 |_      _|@
   |_||_|  @
           @@
   _  @
  | | @
 / __)@
 \\__ \\@
 (   /@
  |_| @@
  _  __@
 (_)/ /@
   / / @
  / /_ @
 /_/(_)@
       @@
   ___   @
  ( _ )  @
  / _ \\/\\@
 | (_>  <@
  \\___/\\/@
         @@
  _ @
 ( )@
 |/ @
  $ @
  $ @
    @@
   __@
  / /@
 | | @
 | | @
 | | @
  \\_\\@@
 __  @
 \\ \\ @
  | |@
  | |@
  | |@
 /_/ @@
       @
 __/\\__@
 \\    /@
 /_  _\\@
   \\/  @
       @@
        @
    _   @
  _| |_ @
 |_   _|@
   |_|  @
        @@
    @
    @
    @
  _ @
 ( )@
 |/ @@
        @
        @
  _____ @
 |_____|@
    $   @
        @@
    @
    @
    @
  _ @
 (_)@
    @@
     __@
    / /@
   / / @
  / /  @
 /_/   @
       @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
  _ @
 / |@
 | |@
 | |@
 |_|@
    @@
  ____  @
 |___ \\ @
   __) |@
  / __/ @
 |_____|@
        @@
  _____ @
 |___ / @
   |_ \\ @
  ___) |@
 |____/ @
        @@
  _  _   @
 | || |  @
 | || |_ @
 |__   _|@
    |_|  @
         @@
  ____  @
 | ___| @
 |___ \\ @
  ___) |@
 |____/ @
        @@
   __   @
  / /_  @
 | '_ \\ @
 | (_) |@
  \\___/ @
        @@
  _____ @
 |___  |@
    / / @
   / /  @
  /_/   @
        @@
   ___  @
  ( _ ) @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
   ___  @
  / _ \\ @
 | (_) |@
  \\__, |@
    /_/ @
        @@
    @
  _ @
 (_)@
  _ @
 (_)@
    @@
    @
  _ @
 (_)@
  _ @
 ( )@
 |/ @@
   __@
  / /@
 / / @
 \\ \\ @
  \\_\\@
     @@
        @
  _____ @
 |_____|@
 |_____|@
    $   @
        @@
 __  @
 \\ \\ @
  \\ \\@
  / /@
 /_/ @
     @@
  ___ @
 |__ \\@
   / /@
  |_| @
  (_) @
      @@
    ____  @
   / __ \\ @
  / / _\` |@
 | | (_| |@
  \\ \\__,_|@
   \\____/ @@
     _    @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @@
  ____  @
 | __ ) @
 |  _ \\ @
 | |_) |@
 |____/ @
        @@
   ____ @
  / ___|@
 | |    @
 | |___ @
  \\____|@
        @@
  ____  @
 |  _ \\ @
 | | | |@
 | |_| |@
 |____/ @
        @@
  _____ @
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @@
  _____ @
 |  ___|@
 | |_   @
 |  _|  @
 |_|    @
        @@
   ____ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
  _   _ @
 | | | |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
  ___ @
 |_ _|@
  | | @
  | | @
 |___|@
      @@
      _ @
     | |@
  _  | |@
 | |_| |@
  \\___/ @
        @@
  _  __@
 | |/ /@
 | ' / @
 | . \\ @
 |_|\\_\\@
       @@
  _     @
 | |    @
 | |    @
 | |___ @
 |_____|@
        @@
  __  __ @
 |  \\/  |@
 | |\\/| |@
 | |  | |@
 |_|  |_|@
         @@
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  __/ @
 |_|    @
        @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\__\\_\\@
        @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
  ____  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
        @@
  _   _ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @@
 __     __@
 \\ \\   / /@
  \\ \\ / / @
   \\ V /  @
    \\_/   @
          @@
 __        __@
 \\ \\      / /@
  \\ \\ /\\ / / @
   \\ V  V /  @
    \\_/\\_/   @
             @@
 __  __@
 \\ \\/ /@
  \\  / @
  /  \\ @
 /_/\\_\\@
       @@
 __   __@
 \\ \\ / /@
  \\ V / @
   | |  @
   |_|  @
        @@
  _____@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
  __ @
 | _|@
 | | @
 | | @
 | | @
 |__|@@
 __    @
 \\ \\   @
  \\ \\  @
   \\ \\ @
    \\_\\@
       @@
  __ @
 |_ |@
  | |@
  | |@
  | |@
 |__|@@
  /\\ @
 |/\\|@
   $ @
   $ @
   $ @
     @@
        @
        @
        @
        @
  _____ @
 |_____|@@
  _ @
 ( )@
  \\|@
  $ @
  $ @
    @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
  _     @
 | |__  @
 | '_ \\ @
 | |_) |@
 |_.__/ @
        @@
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
      _ @
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @@
   __ @
  / _|@
 | |_ @
 |  _|@
 |_|  @
      @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
  _     @
 | |__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
  _ @
 (_)@
 | |@
 | |@
 |_|@
    @@
    _ @
   (_)@
   | |@
   | |@
  _/ |@
 |__/ @@
  _    @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
       @@
  _ @
 | |@
 | |@
 | |@
 |_|@
    @@
            @
  _ __ ___  @
 | '_ \` _ \\ @
 | | | | | |@
 |_| |_| |_|@
            @@
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
        @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
        @
  _ __  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 |_|    @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
     |_|@@
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
       @@
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
      @@
  _   @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @@
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
        @
 __   __@
 \\ \\ / /@
  \\ V / @
   \\_/  @
        @@
           @
 __      __@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @@
       @
 __  __@
 \\ \\/ /@
  >  < @
 /_/\\_\\@
       @@
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
      @
  ____@
 |_  /@
  / / @
 /___|@
      @@
    __@
   / /@
  | | @
 < <  @
  | | @
   \\_\\@@
  _ @
 | |@
 | |@
 | |@
 | |@
 |_|@@
 __   @
 \\ \\  @
  | | @
   > >@
  | | @
 /_/  @@
  /\\/|@
 |/\\/ @
   $  @
   $  @
   $  @
      @@
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\___/ @
        @@
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
160  NO-BREAK SPACE
 $@
 $@
 $@
 $@
 $@
 $@@
161  INVERTED EXCLAMATION MARK
  _ @
 (_)@
 | |@
 | |@
 |_|@
    @@
162  CENT SIGN
    _  @
   | | @
  / __)@
 | (__ @
  \\   )@
   |_| @@
163  POUND SIGN
    ___  @
   / ,_\\ @
 _| |_   @
  | |___ @
 (_,____|@
         @@
164  CURRENCY SIGN
 /\\___/\\@
 \\  _  /@
 | (_) |@
 / ___ \\@
 \\/   \\/@
        @@
165  YEN SIGN
  __ __ @
  \\ V / @
 |__ __|@
 |__ __|@
   |_|  @
        @@
166  BROKEN BAR
  _ @
 | |@
 |_|@
  _ @
 | |@
 |_|@@
167  SECTION SIGN
    __ @
  _/ _)@
 / \\ \\ @
 \\ \\\\ \\@
  \\ \\_/@
 (__/  @@
168  DIAERESIS
  _   _ @
 (_) (_)@
  $   $ @
  $   $ @
  $   $ @
        @@
169  COPYRIGHT SIGN
    _____   @
   / ___ \\  @
  / / __| \\ @
 | | (__   |@
  \\ \\___| / @
   \\_____/  @@
170  FEMININE ORDINAL INDICATOR
  __ _ @
 / _\` |@
 \\__,_|@
 |____|@
    $  @
       @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
   ____@
  / / /@
 / / / @
 \\ \\ \\ @
  \\_\\_\\@
       @@
172  NOT SIGN
        @
  _____ @
 |___  |@
     |_|@
    $   @
        @@
173  SOFT HYPHEN
       @
       @
  ____ @
 |____|@
    $  @
       @@
174  REGISTERED SIGN
    _____   @
   / ___ \\  @
  / | _ \\ \\ @
 |  |   /  |@
  \\ |_|_\\ / @
   \\_____/  @@
175  MACRON
  _____ @
 |_____|@
    $   @
    $   @
    $   @
        @@
176  DEGREE SIGN
   __  @
  /  \\ @
 | () |@
  \\__/ @
    $  @
       @@
177  PLUS-MINUS SIGN
    _   @
  _| |_ @
 |_   _|@
  _|_|_ @
 |_____|@
        @@
178  SUPERSCRIPT TWO
  ___ @
 |_  )@
  / / @
 /___|@
   $  @
      @@
179  SUPERSCRIPT THREE
  ____@
 |__ /@
  |_ \\@
 |___/@
   $  @
      @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
  $ @
  $ @
    @@
181  MICRO SIGN
        @
  _   _ @
 | | | |@
 | |_| |@
 | ._,_|@
 |_|    @@
182  PILCROW SIGN
   _____ @
  /     |@
 | (| | |@
  \\__ | |@
    |_|_|@
         @@
183  MIDDLE DOT
    @
  _ @
 (_)@
  $ @
  $ @
    @@
184  CEDILLA
    @
    @
    @
    @
  _ @
 )_)@@
185  SUPERSCRIPT ONE
  _ @
 / |@
 | |@
 |_|@
  $ @
    @@
186  MASCULINE ORDINAL INDICATOR
  ___ @
 / _ \\@
 \\___/@
 |___|@
   $  @
      @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
 ____  @
 \\ \\ \\ @
  \\ \\ \\@
  / / /@
 /_/_/ @
       @@
188  VULGAR FRACTION ONE QUARTER
  _   __    @
 / | / / _  @
 | |/ / | | @
 |_/ /|_  _|@
  /_/   |_| @
            @@
189  VULGAR FRACTION ONE HALF
  _   __   @
 / | / /__ @
 | |/ /_  )@
 |_/ / / / @
  /_/ /___|@
           @@
190  VULGAR FRACTION THREE QUARTERS
  ____  __    @
 |__ / / / _  @
  |_ \\/ / | | @
 |___/ /|_  _|@
    /_/   |_| @
              @@
191  INVERTED QUESTION MARK
   _  @
  (_) @
  | | @
 / /_ @
 \\___|@
      @@
192  LATIN CAPITAL LETTER A WITH GRAVE
   __   @
   \\_\\  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
193  LATIN CAPITAL LETTER A WITH ACUTE
    __  @
   /_/  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
195  LATIN CAPITAL LETTER A WITH TILDE
   /\\/| @
  |/\\/  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
    _   @
   (o)  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
198  LATIN CAPITAL LETTER AE
     ______ @
    /  ____|@
   / _  _|  @
  / __ |___ @
 /_/ |_____|@
            @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   ____ @
  / ___|@
 | |    @
 | |___ @
  \\____|@
    )_) @@
200  LATIN CAPITAL LETTER E WITH GRAVE
   __   @
  _\\_\\_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
201  LATIN CAPITAL LETTER E WITH ACUTE
    __  @
  _/_/_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
 | ____|@
 |  _|_ @
 |_____|@
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
  _   _ @
 (_)_(_)@
 | ____|@
 |  _|_ @
 |_____|@
        @@
204  LATIN CAPITAL LETTER I WITH GRAVE
  __  @
  \\_\\ @
 |_ _|@
  | | @
 |___|@
      @@
205  LATIN CAPITAL LETTER I WITH ACUTE
   __ @
  /_/ @
 |_ _|@
  | | @
 |___|@
      @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
 |_ _|@
  | | @
 |___|@
      @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  |_ _| @
   | |  @
  |___| @
        @@
208  LATIN CAPITAL LETTER ETH
    ____  @
   |  _ \\ @
  _| |_| |@
 |__ __| |@
   |____/ @
          @@
209  LATIN CAPITAL LETTER N WITH TILDE
   /\\/|@
  |/\\/ @
 | \\| |@
 | .\` |@
 |_|\\_|@
       @@
210  LATIN CAPITAL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
211  LATIN CAPITAL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
213  LATIN CAPITAL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
215  MULTIPLICATION SIGN
     @
     @
 /\\/\\@
 >  <@
 \\/\\/@
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   ____ @
  / _// @
 | |// |@
 | //| |@
  //__/ @
        @@
217  LATIN CAPITAL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | |_| |@
  \\___/ @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\___/ @
        @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
    __  @
 __/_/__@
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
222  LATIN CAPITAL LETTER THORN
  _     @
 | |___ @
 |  __ \\@
 |  ___/@
 |_|    @
        @@
223  LATIN SMALL LETTER SHARP S
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
224  LATIN SMALL LETTER A WITH GRAVE
   __   @
   \\_\\_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
225  LATIN SMALL LETTER A WITH ACUTE
    __  @
   /_/_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
227  LATIN SMALL LETTER A WITH TILDE
   /\\/| @
  |/\\/_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
229  LATIN SMALL LETTER A WITH RING ABOVE
    __  @
   (()) @
  / _ '|@
 | (_| |@
  \\__,_|@
        @@
230  LATIN SMALL LETTER AE
           @
   __ ____ @
  / _\`  _ \\@
 | (_|  __/@
  \\__,____|@
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
   )_) @@
232  LATIN SMALL LETTER E WITH GRAVE
   __  @
   \\_\\ @
  / _ \\@
 |  __/@
  \\___|@
       @@
233  LATIN SMALL LETTER E WITH ACUTE
    __ @
   /_/ @
  / _ \\@
 |  __/@
  \\___|@
       @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
   //\\ @
  |/_\\|@
  / _ \\@
 |  __/@
  \\___|@
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 |  __/ @
  \\___| @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
 __ @
 \\_\\@
 | |@
 | |@
 |_|@
    @@
237  LATIN SMALL LETTER I WITH ACUTE
  __@
 /_/@
 | |@
 | |@
 |_|@
    @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
  | | @
  | | @
  |_| @
      @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
   | |  @
   | |  @
   |_|  @
        @@
240  LATIN SMALL LETTER ETH
   /\\/\\ @
   >  < @
  _\\/\\ |@
 / __\` |@
 \\____/ @
        @@
241  LATIN SMALL LETTER N WITH TILDE
   /\\/| @
  |/\\/  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
242  LATIN SMALL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
243  LATIN SMALL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
245  LATIN SMALL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
247  DIVISION SIGN
        @
    _   @
  _(_)_ @
 |_____|@
   (_)  @
        @@
248  LATIN SMALL LETTER O WITH STROKE
         @
   ____  @
  / _//\\ @
 | (//) |@
  \\//__/ @
         @@
249  LATIN SMALL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
250  LATIN SMALL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
253  LATIN SMALL LETTER Y WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
254  LATIN SMALL LETTER THORN
  _     @
 | |__  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 |_|    @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
0x0100  LATIN CAPITAL LETTER A WITH MACRON
   ____ @
  /___/ @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
0x0101  LATIN SMALL LETTER A WITH MACRON
    ___ @
   /_ _/@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0102  LATIN CAPITAL LETTER A WITH BREVE
  _   _ @
  \\\\_// @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
0x0103  LATIN SMALL LETTER A WITH BREVE
   \\_/  @
   ___  @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0104  LATIN CAPITAL LETTER A WITH OGONEK
        @
    _   @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
     (_(@@
0x0105  LATIN SMALL LETTER A WITH OGONEK
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
     (_(@@
0x0106  LATIN CAPITAL LETTER C WITH ACUTE
     __ @
   _/_/ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x0107  LATIN SMALL LETTER C WITH ACUTE
    __ @
   /__/@
  / __|@
 | (__ @
  \\___|@
       @@
0x0108  LATIN CAPITAL LETTER C WITH CIRCUMFLEX
     /\\ @
   _//\\\\@
  / ___|@
 | |___ @
  \\____|@
        @@
0x0109  LATIN SMALL LETTER C WITH CIRCUMFLEX
    /\\ @
   /_\\ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010A  LATIN CAPITAL LETTER C WITH DOT ABOVE
    []  @
   ____ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x010B  LATIN SMALL LETTER C WITH DOT ABOVE
   []  @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010C  LATIN CAPITAL LETTER C WITH CARON
   \\\\// @
   _\\/_ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x010D  LATIN SMALL LETTER C WITH CARON
   \\\\//@
   _\\/ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010E  LATIN CAPITAL LETTER D WITH CARON
   \\\\// @
  __\\/  @
 |  _ \\ @
 | |_| |@
 |____/ @
        @@
0x010F  LATIN SMALL LETTER D WITH CARON
  \\/  _ @
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0110  LATIN CAPITAL LETTER D WITH STROKE
   ____   @
  |_ __ \\ @
 /| |/ | |@
 /|_|/_| |@
  |_____/ @
          @@
0x0111  LATIN SMALL LETTER D WITH STROKE
    ---|@
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0112  LATIN CAPITAL LETTER E WITH MACRON
   ____ @
  /___/ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0113  LATIN SMALL LETTER E WITH MACRON
    ____@
   /_ _/@
  / _ \\ @
 |  __/ @
  \\___| @
        @@
0x0114  LATIN CAPITAL LETTER E WITH BREVE
  _   _ @
  \\\\_// @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0115  LATIN SMALL LETTER E WITH BREVE
  \\\\  //@
    --  @
  / _ \\ @
 |  __/ @
  \\___| @
        @@
0x0116  LATIN CAPITAL LETTER E WITH DOT ABOVE
    []  @
  _____ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0117  LATIN SMALL LETTER E WITH DOT ABOVE
    [] @
    __ @
  / _ \\@
 |  __/@
  \\___|@
       @@
0x0118  LATIN CAPITAL LETTER E WITH OGONEK
        @
  _____ @
 | ____|@
 |  _|_ @
 |_____|@
    (__(@@
0x0119  LATIN SMALL LETTER E WITH OGONEK
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
    (_(@@
0x011A  LATIN CAPITAL LETTER E WITH CARON
   \\\\// @
  __\\/_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x011B  LATIN SMALL LETTER E WITH CARON
   \\\\//@
    \\/ @
  / _ \\@
 |  __/@
  \\___|@
       @@
0x011C  LATIN CAPITAL LETTER G WITH CIRCUMFLEX
   _/\\_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x011D  LATIN SMALL LETTER G WITH CIRCUMFLEX
     /\\ @
   _/_ \\@
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x011E  LATIN CAPITAL LETTER G WITH BREVE
   _\\/_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x011F  LATIN SMALL LETTER G WITH BREVE
  \\___/ @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x0120  LATIN CAPITAL LETTER G WITH DOT ABOVE
   _[]_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x0121  LATIN SMALL LETTER G WITH DOT ABOVE
   []   @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x0122  LATIN CAPITAL LETTER G WITH CEDILLA
   ____ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
   )__) @@
0x0123  LATIN SMALL LETTER G WITH CEDILLA
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |_))))@@
0x0124  LATIN CAPITAL LETTER H WITH CIRCUMFLEX
  _/ \\_ @
 | / \\ |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
0x0125  LATIN SMALL LETTER H WITH CIRCUMFLEX
  _  /\\ @
 | |//\\ @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0126  LATIN CAPITAL LETTER H WITH STROKE
  _   _ @
 | |=| |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
0x0127  LATIN SMALL LETTER H WITH STROKE
  _     @
 |=|__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0128  LATIN CAPITAL LETTER I WITH TILDE
  /\\//@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x0129  LATIN SMALL LETTER I WITH TILDE
    @
 /\\/@
 | |@
 | |@
 |_|@
    @@
0x012A  LATIN CAPITAL LETTER I WITH MACRON
 /___/@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x012B  LATIN SMALL LETTER I WITH MACRON
  ____@
 /___/@
  | | @
  | | @
  |_| @
      @@
0x012C  LATIN CAPITAL LETTER I WITH BREVE
  \\__/@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x012D  LATIN SMALL LETTER I WITH BREVE
    @
 \\_/@
 | |@
 | |@
 |_|@
    @@
0x012E  LATIN CAPITAL LETTER I WITH OGONEK
  ___ @
 |_ _|@
  | | @
  | | @
 |___|@
  (__(@@
0x012F  LATIN SMALL LETTER I WITH OGONEK
  _  @
 (_) @
 | | @
 | | @
 |_|_@
  (_(@@
0x0130  LATIN CAPITAL LETTER I WITH DOT ABOVE
  _[] @
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x0131  LATIN SMALL LETTER DOTLESS I
    @
  _ @
 | |@
 | |@
 |_|@
    @@
0x0132  LATIN CAPITAL LIGATURE IJ
  ___  _ @
 |_ _|| |@
  | | | |@
  | |_| |@
 |__|__/ @
         @@
0x0133  LATIN SMALL LIGATURE IJ
  _   _ @
 (_) (_)@
 | | | |@
 | | | |@
 |_|_/ |@
   |__/ @@
0x0134  LATIN CAPITAL LETTER J WITH CIRCUMFLEX
      /\\ @
     /_\\|@
  _  | | @
 | |_| | @
  \\___/  @
         @@
0x0135  LATIN SMALL LETTER J WITH CIRCUMFLEX
    /\\@
   /_\\@
   | |@
   | |@
  _/ |@
 |__/ @@
0x0136  LATIN CAPITAL LETTER K WITH CEDILLA
  _  _  @
 | |/ / @
 | ' /  @
 | . \\  @
 |_|\\_\\ @
    )__)@@
0x0137  LATIN SMALL LETTER K WITH CEDILLA
  _    @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
    )_)@@
0x0138  LATIN SMALL LETTER KRA
       @
  _ __ @
 | |/ \\@
 |   < @
 |_|\\_\\@
       @@
0x0139  LATIN CAPITAL LETTER L WITH ACUTE
  _   //@
 | | // @
 | |    @
 | |___ @
 |_____|@
        @@
0x013A  LATIN SMALL LETTER L WITH ACUTE
  //@
 | |@
 | |@
 | |@
 |_|@
    @@
0x013B  LATIN CAPITAL LETTER L WITH CEDILLA
  _     @
 | |    @
 | |    @
 | |___ @
 |_____|@
    )__)@@
0x013C  LATIN SMALL LETTER L WITH CEDILLA
  _   @
 | |  @
 | |  @
 | |  @
 |_|  @
   )_)@@
0x013D  LATIN CAPITAL LETTER L WITH CARON
  _ \\\\//@
 | | \\/ @
 | |    @
 | |___ @
 |_____|@
        @@
0x013E  LATIN SMALL LETTER L WITH CARON
  _ \\\\//@
 | | \\/ @
 | |    @
 | |    @
 |_|    @
        @@
0x013F  LATIN CAPITAL LETTER L WITH MIDDLE DOT
  _     @
 | |    @
 | | [] @
 | |___ @
 |_____|@
        @@
0x0140  LATIN SMALL LETTER L WITH MIDDLE DOT
  _    @
 | |   @
 | | []@
 | |   @
 |_|   @
       @@
0x0141  LATIN CAPITAL LETTER L WITH STROKE
  __    @
 | //   @
 |//|   @
 // |__ @
 |_____|@
        @@
0x0142  LATIN SMALL LETTER L WITH STROKE
  _ @
 | |@
 |//@
 //|@
 |_|@
    @@
0x0143  LATIN CAPITAL LETTER N WITH ACUTE
  _/ /_ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
0x0144  LATIN SMALL LETTER N WITH ACUTE
     _  @
  _ /_/ @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0145  LATIN CAPITAL LETTER N WITH CEDILLA
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
 )_)    @@
0x0146  LATIN SMALL LETTER N WITH CEDILLA
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
 )_)    @@
0x0147  LATIN CAPITAL LETTER N WITH CARON
  _\\/ _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
0x0148  LATIN SMALL LETTER N WITH CARON
  \\\\//  @
  _\\/_  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0149  LATIN SMALL LETTER N PRECEDED BY APOSTROPHE
          @
  _  __   @
 ( )| '_\\ @
 |/| | | |@
   |_| |_|@
          @@
0x014A  LATIN CAPITAL LETTER ENG
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\ |@
     )_)@@
0x014B  LATIN SMALL LETTER ENG
  _ __  @
 | '_ \\ @
 | | | |@
 |_| | |@
     | |@
    |__ @@
0x014C  LATIN CAPITAL LETTER O WITH MACRON
   ____ @
  /_ _/ @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
0x014D  LATIN SMALL LETTER O WITH MACRON
   ____ @
  /_ _/ @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
0x014E  LATIN CAPITAL LETTER O WITH BREVE
  \\   / @
   _-_  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x014F  LATIN SMALL LETTER O WITH BREVE
  \\   / @
   _-_  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0150  LATIN CAPITAL LETTER O WITH DOUBLE ACUTE
    ___ @
   /_/_/@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0151  LATIN SMALL LETTER O WITH DOUBLE ACUTE
    ___ @
   /_/_/@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0152  LATIN CAPITAL LIGATURE OE
   ___  ___ @
  / _ \\| __|@
 | | | |  | @
 | |_| | |__@
  \\___/|____@
            @@
0x0153  LATIN SMALL LIGATURE OE
             @
   ___   ___ @
  / _ \\ / _ \\@
 | (_) |  __/@
  \\___/ \\___|@
             @@
0x0154  LATIN CAPITAL LETTER R WITH ACUTE
  _/_/  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
0x0155  LATIN SMALL LETTER R WITH ACUTE
     __@
  _ /_/@
 | '__|@
 | |   @
 |_|   @
       @@
0x0156  LATIN CAPITAL LETTER R WITH CEDILLA
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
 )_)    @@
0x0157  LATIN SMALL LETTER R WITH CEDILLA
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
   )_) @@
0x0158  LATIN CAPITAL LETTER R WITH CARON
  _\\_/  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
0x0159  LATIN SMALL LETTER R WITH CARON
  \\\\// @
  _\\/_ @
 | '__|@
 | |   @
 |_|   @
       @@
0x015A  LATIN CAPITAL LETTER S WITH ACUTE
  _/_/  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x015B  LATIN SMALL LETTER S WITH ACUTE
    __@
  _/_/@
 / __|@
 \\__ \\@
 |___/@
      @@
0x015C  LATIN CAPITAL LETTER S WITH CIRCUMFLEX
  _/\\_  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x015D  LATIN SMALL LETTER S WITH CIRCUMFLEX
      @
  /_\\_@
 / __|@
 \\__ \\@
 |___/@
      @@
0x015E  LATIN CAPITAL LETTER S WITH CEDILLA
  ____  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
    )__)@@
0x015F  LATIN SMALL LETTER S WITH CEDILLA
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
   )_)@@
0x0160  LATIN CAPITAL LETTER S WITH CARON
  _\\_/  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x0161  LATIN SMALL LETTER S WITH CARON
  \\\\//@
  _\\/ @
 / __|@
 \\__ \\@
 |___/@
      @@
0x0162  LATIN CAPITAL LETTER T WITH CEDILLA
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
    )__)@@
0x0163  LATIN SMALL LETTER T WITH CEDILLA
  _   @
 | |_ @
 | __|@
 | |_ @
  \\__|@
   )_)@@
0x0164  LATIN CAPITAL LETTER T WITH CARON
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
        @@
0x0165  LATIN SMALL LETTER T WITH CARON
  \\/  @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @@
0x0166  LATIN CAPITAL LETTER T WITH STROKE
  _____ @
 |_   _|@
   | |  @
  -|-|- @
   |_|  @
        @@
0x0167  LATIN SMALL LETTER T WITH STROKE
  _   @
 | |_ @
 | __|@
 |-|_ @
  \\__|@
      @@
0x0168  LATIN CAPITAL LETTER U WITH TILDE
        @
  _/\\/_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x0169  LATIN SMALL LETTER U WITH TILDE
        @
  _/\\/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016A  LATIN CAPITAL LETTER U WITH MACRON
   ____ @
  /__ _/@
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x016B  LATIN SMALL LETTER U WITH MACRON
   ____ @
  / _  /@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016C  LATIN CAPITAL LETTER U WITH BREVE
        @
   \\_/_ @
 | | | |@
 | |_| |@
  \\____|@
        @@
0x016D  LATIN SMALL LETTER U WITH BREVE
        @
   \\_/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016E  LATIN CAPITAL LETTER U WITH RING ABOVE
    O   @
  __  _ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x016F  LATIN SMALL LETTER U WITH RING ABOVE
    O   @
  __ __ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x0170  LATIN CAPITAL LETTER U WITH DOUBLE ACUTE
   -- --@
  /_//_/@
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x0171  LATIN SMALL LETTER U WITH DOUBLE ACUTE
    ____@
  _/_/_/@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x0172  LATIN CAPITAL LETTER U WITH OGONEK
  _   _ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
    (__(@@
0x0173  LATIN SMALL LETTER U WITH OGONEK
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
     (_(@@
0x0174  LATIN CAPITAL LETTER W WITH CIRCUMFLEX
 __    /\\  __@
 \\ \\  //\\\\/ /@
  \\ \\ /\\ / / @
   \\ V  V /  @
    \\_/\\_/   @
             @@
0x0175  LATIN SMALL LETTER W WITH CIRCUMFLEX
      /\\   @
 __  //\\\\__@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @@
0x0176  LATIN CAPITAL LETTER Y WITH CIRCUMFLEX
    /\\  @
 __//\\\\ @
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
0x0177  LATIN SMALL LETTER Y WITH CIRCUMFLEX
    /\\  @
   //\\\\ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
0x0178  LATIN CAPITAL LETTER Y WITH DIAERESIS
  []  []@
 __    _@
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
0x0179  LATIN CAPITAL LETTER Z WITH ACUTE
  __/_/@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017A  LATIN SMALL LETTER Z WITH ACUTE
    _ @
  _/_/@
 |_  /@
  / / @
 /___|@
      @@
0x017B  LATIN CAPITAL LETTER Z WITH DOT ABOVE
  __[]_@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017C  LATIN SMALL LETTER Z WITH DOT ABOVE
   [] @
  ____@
 |_  /@
  / / @
 /___|@
      @@
0x017D  LATIN CAPITAL LETTER Z WITH CARON
  _\\_/_@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017E  LATIN SMALL LETTER Z WITH CARON
  \\\\//@
  _\\/_@
 |_  /@
  / / @
 /___|@
      @@
0x017F  LATIN SMALL LETTER LONG S
     __ @
    / _|@
 |-| |  @
 |-| |  @
   |_|  @
        @@
0x02C7  CARON
 \\\\//@
  \\/ @
    $@
    $@
    $@
    $@@
0x02D8  BREVE
 \\\\_//@
  \\_/ @
     $@
     $@
     $@
     $@@
0x02D9  DOT ABOVE
 []@
  $@
  $@
  $@
  $@
  $@@
0x02DB  OGONEK
    $@
    $@
    $@
    $@
    $@
 )_) @@
0x02DD  DOUBLE ACUTE ACCENT
  _ _ @
 /_/_/@
     $@
     $@
     $@
     $@@
0xCA0  KANNADA LETTER TTHA
   _____)@
  /_ ___/@
  / _ \\  @
 | (_) | @
 $\\___/$ @
         @@
         `,w0={"3D-ASCII":Rp,Alligator:gp,Banner:Sp,Big:vp,Block:Np,Bubble:Cp,"Calvin S":xp,Chunky:bp,Cola:Op,Doom:Mp,Epic:Dp,Ghost:Hp,Graffiti:Up,Hollywood:Pp,Italic:Bp,Jazmine:Gp,"Larry 3D":Vp,Lean:Wp,Modular:wp,Moscow:Yp,Ogre:Fp,"Patorjk-HeX":jp,Poison:zp,Roman:Xp,Slant:Kp,Speed:qp,"Star Wars":kp,Stop:Qp,Tombstone:Zp,Varsity:Jp,Standard:_y},ty=()=>{for(const[e,a]of Object.entries(w0))yp.parseFont(e,a)},Y0=Object.keys(w0),F0={dev:"Available developer commands: [fonts, font <fontname>]",fonts:`Available fonts: [${Y0.join(", ")}]`},ey={sorry:{description:"전하지 못했던 미안함을 조심스레 풀어놓습니다.",execute:()=>{const e=["광원님이 저를 믿고 직접 팀으로 데려와 주셨는데, 그 믿음에 걸맞은 모습을 끝내 증명하지 못했습니다.","돌이켜보면, 개발자로 살아온 시간 중 지난 1년은 제게 가장 퍼포먼스가 낮았던 해였습니다.","계속되는 주변의 부정적인 변화에 제대로 적응하지 못했고, 그로 인한 멘탈 저하와 아웃풋의 감소가 큰 스트레스로 다가왔습니다.","자존감은 바닥을 치고, 스스로를 의심하는 시간이 많았으며, 멘탈은 단 한 번도 제대로 붙잡지 못했습니다.","그래서 겁이 많아지고 지나치게 신중해졌으며, 제 분위기 자체가 부정적으로 비쳤을까 가장 미안합니다.","스스로를 믿지 못한 탓에 점점 더 소극적이 되었고, 아무것도 하지 못한 채 흘려보낸 한 해로 남아 지금도 크게 후회됩니다.","원래는 무언가를 파악하고 개선하는 걸 좋아하고 잘하는 편이었는데, '나는 못한다'는 생각이 너무 강해져 버렸습니다.","그 불안과 자기의심 때문에 코드를 작성하는 것도, 도메인을 이해하는 것도 두려움으로 바뀌었고, 결국 미루는 일이 많아졌습니다.","노력은 했지만, '최선이었다'고 자신 있게 말할 수 있는 결과가 없었다는 사실이 더욱 죄송합니다.","현재도 다 이겨내진 못했지만, 지금의 제가 개발자 초기 1~2년에 할 수 있던 것보다 더 많은 것을 못하고있거든요.","사실 믿기지 않겠지만, 저는 창업 경험에서 비롯된 프로덕트 마인드, 프론트와 백엔드를 함께 다루며 초기 기능을 빠르게 만들어 검증하는 능력, 다양한 사람들과 협업하며 개선점을 찾고 시스템을 고도화하는 힘 등 여러 강점을 가진 사람이었습니다.","그러나 지난 1년은 그 어떤 것도 제대로 보여드리지 못한 시기였고, 결국 제 진짜 모습은 드러나지 못한 채 아쉬움만 남았습니다.","그럼에도 불구하고, 광원님 덕분에 저는 가장 오래 남을 배움을 얻었습니다.",'"이 사람처럼 일해야, 같이 일하고 싶고, 함께 성장하는 동료가 될 수 있구나."',"저는 언젠가 광원님처럼 남들이 함께 일하고 싶어하는, 배려와 신뢰로 팀을 키우는 사람이 되고 싶습니다.","그리고 만약 다시 한 번 함께할 기회가 주어진다면, 그때는 지금의 모든 흔들림을 극복한 제가, 광원님께 다른사람이 왜 입사 당시 제가 꼭 함께 일하고 싶었던 사람이었는지를 반드시 보여드리겠습니다.","광원님, 진심으로 감사합니다. 그리고 죄송합니다."];return b.jsxs("div",{className:"font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4",children:[b.jsxs("div",{className:"mb-4",children:[b.jsx("div",{className:"text-red-400 font-semibold",children:"Apology Message"}),b.jsx("div",{className:"text-gray-400 text-xs",children:"Personal confession | Status: UNDELIVERED"})]}),b.jsx("div",{className:"space-y-3",children:e.map((a,$)=>b.jsxs("div",{className:"flex",children:[b.jsxs("div",{className:"text-red-400 mr-3 font-mono text-xs mt-1 shrink-0",children:["[",($+1).toString().padStart(2,"0"),"]"]}),b.jsx("div",{className:"text-gray-300 leading-relaxed",children:a})]},$))}),b.jsx("div",{className:"mt-6 pt-2 border-t border-gray-700",children:b.jsx("div",{className:"text-center",children:b.jsx("div",{className:"text-red-400 text-xs",children:"◆ 진심으로 죄송합니다 ◆"})})})]})}},thankyou:{description:"진심을 담아 전하는 감사의 말을 꺼내놓습니다.",execute:()=>{const e=["광원님, 제가 늘 신중하다 못해 겁에 질려 주저할 때마다, 누구보다 침착하게 제 옆에 서서 함께 바라봐 주셨습니다.","저 혼자서 모든 걸 감당해야 한다고 착각했을 때도, 광원님은 조용히 균형을 잡아주셨습니다.","그 순간마다 제 마음은 한결 가벼워졌고, 혼자가 아니라는 든든함을 깊이 느낄 수 있었습니다.","저는 광원님을 통해 커뮤니케이션과 협업이 단순한 기술이 아니라, 팀을 움직이는 원동력이라는 걸 배웠습니다.","리소스를 파악하고, 요구사항을 정리하며, 팀의 역사를 기억하고, 결국 결정을 내리는 그 모든 과정을 책임지는 모습은 제게 큰 울림이었습니다.","그 과정에서 광원님은 단순히 일을 해결한 것이 아니라, 모두가 같은 방향을 바라보도록 만들어주셨습니다.","지금까지 함께한 동료들 중에서도 이런 역량은 광원님이 단연 최고였습니다.","제가 스스로를 탓하며 위축될 때조차, 광원님은 그 책임을 제게만 두지 않으셨습니다.","대신 다시는 같은 문제가 반복되지 않도록 시스템을 고치고 구조를 세우는 방식으로 풀어내셨습니다.","그때 저는 문제를 탓하는 것이 아니라, 더 나은 길을 만드는 태도가 진짜 리더십임을 배웠습니다.","이건 단순히 일하는 방식의 차이가 아니라, 사람을 대하는 태도의 차이라는 걸 몸으로 느꼈습니다.","그리고 사소한 듯 보이지만, 제게는 가장 큰 힘이 된 장면들이 있습니다.","제가 앞에 나서기 어려워한다는 걸 아시고 언제나 먼저 앞을 지켜주신 일들입니다.","그 배려 덕분에 저는 뒤에서 제 역할에 온전히 집중할 수 있었고, 그 작은 보호막 안에서 더 성장할 수 있었습니다.","겉으로 드러나지 않는 배려였지만, 그 순간들이 모여 제 마음을 단단하게 만들어 주었습니다.","결국 제게 오래 남은 배움은 이것 하나입니다.",'"나도 언젠가, 광원님처럼 함께 일하고 싶은 사람, 배려와 신뢰로 팀을 성장시키는 사람이 되어야겠다."',"제가 어떤 상황에서도 잊지 말아야 할 기준이 되어 주셨습니다.","그 태도를 곁에서 지켜볼 수 있었다는 사실 자체가 제게는 가장 큰 선물이었습니다.","광원님, 진심으로 감사합니다."];return b.jsxs("div",{className:"font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4",children:[b.jsxs("div",{className:"mb-4",children:[b.jsx("div",{className:"text-green-400 font-semibold",children:"Gratitude Message"}),b.jsx("div",{className:"text-gray-400 text-xs",children:"Personal testimony | Status: HEARTFELT"})]}),b.jsx("div",{className:"space-y-3",children:e.map((a,$)=>b.jsxs("div",{className:"flex",children:[b.jsxs("div",{className:"text-green-400 mr-3 font-mono text-xs mt-1 shrink-0",children:["[",($+1).toString().padStart(2,"0"),"]"]}),b.jsx("div",{className:"text-gray-300 leading-relaxed",children:a})]},$))}),b.jsx("div",{className:"mt-6 pt-2 border-t border-gray-700",children:b.jsx("div",{className:"text-center",children:b.jsx("div",{className:"text-green-400 text-xs",children:"◆ 마음 깊이 감사드립니다 ◆"})})})]})}}},cu={...W0,...F0,...ey},ny=Object.keys(cu),iy=()=>{const[e,a]=t_.useState([b.jsxs("div",{className:"space-y-6 py-6",children:[b.jsxs("div",{className:"text-center",children:[b.jsx("pre",{className:"text-cyan-400 font-mono text-sm md:text-base leading-tight",children:`████████╗ █████╗ ██╗   ██╗██╗
╚══██╔══╝██╔══██╗██║   ██║██║
   ██║   ███████║██║   ██║██║
   ██║   ██╔══██║╚██╗ ██╔╝██║
   ██║   ██║  ██║ ╚████╔╝ ██║
   ╚═╝   ╚═╝  ╚═╝  ╚═══╝  ╚═╝`}),b.jsx("div",{className:"text-gray-400 text-sm mt-2",children:"Seo Gwang-won Professional Reference System v1.0"})]}),b.jsxs("div",{className:"bg-gray-900 border-l-2 border-cyan-500 px-4 py-3 mx-2 md:mx-4",children:[b.jsx("div",{className:"text-green-400 font-semibold mb-2",children:"System Status: ONLINE"}),b.jsxs("div",{className:"text-gray-300 text-sm space-y-1",children:[b.jsxs("div",{children:["• Available commands: ",Object.keys(cu).length-Object.keys(F0).length]}),b.jsx("div",{children:"• Reference data: LOADED"}),b.jsx("div",{children:"• Career timeline: 20xx.xx - 2025.08"})]})]}),b.jsxs("div",{className:"text-center",children:[b.jsx("div",{className:"text-yellow-400 text-sm",children:"Type 'help' to see all available commands"}),b.jsx("div",{className:"text-gray-500 text-xs mt-1",children:"Press Tab for autocomplete"})]})]})]),[$,s]=t_.useState(""),[u,f]=t_.useState(null),[r,T]=t_.useState("Standard"),[d,h]=t_.useState(!1),A=t_.useCallback(U=>{const[Y,...Z]=U.split(" "),Q=Y.normalize("NFC");if(Q==="font"){const K=Z[0];Y0.includes(K)?(T(K),a([`$ ${U}`,`Font changed to ${K}`])):a([`$ ${U}`,`Font not found: ${K}`]);return}const k=cu[Q];let J;if(k?(typeof k.execute=="function"?J=k.execute(...Z):J=k,Q==="epilogue"&&(h(!0),setTimeout(()=>h(!1),3e3))):J=`Command not found: ${Q}`,J==="__ABOUT__"){const K=b.jsxs(kt.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8},className:"py-8 max-w-4xl mx-auto",children:[b.jsxs(kt.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"text-center mb-10",children:[b.jsx(kt.div,{className:"text-2xl font-bold text-[#93c5fd] mb-4",animate:{scale:[1,1.05,1]},transition:{repeat:1/0,duration:2},children:"🗺️ 함께한 성장의 여정"}),b.jsx("div",{className:"text-purple-300",children:"각 단계마다 남긴 발자취들..."})]}),b.jsxs("div",{className:"relative",children:[b.jsx(kt.div,{className:"absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-purple-500/30 via-blue-500/50 to-pink-500/30 rounded-full",initial:{scaleX:0},animate:{scaleX:1},transition:{delay:.5,duration:2,ease:"easeInOut"}}),b.jsx("div",{className:"flex justify-between items-center px-8",children:aboutData.map((i_,j)=>b.jsxs(kt.div,{className:"relative flex flex-col items-center z-10",initial:{opacity:0,y:30,scale:.8},animate:{opacity:1,y:0,scale:1},transition:{delay:.8+j*.3,type:"spring",stiffness:100,damping:15},children:[b.jsx(kt.div,{className:"w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/80 via-blue-500/80 to-pink-500/80 flex items-center justify-center mb-4 shadow-lg",animate:{boxShadow:["0 4px 20px rgba(147, 197, 253, 0.3)","0 8px 30px rgba(147, 197, 253, 0.6)","0 4px 20px rgba(147, 197, 253, 0.3)"]},transition:{repeat:1/0,duration:2,delay:j*.4},whileHover:{scale:1.15},children:b.jsx(kt.span,{className:"text-2xl",animate:{y:[0,-3,0],rotate:[0,5,-5,0]},transition:{repeat:1/0,duration:2,delay:j*.5},children:i_.icon})}),b.jsxs(kt.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1+j*.3},className:"text-center",children:[b.jsx("div",{className:"text-[#93c5fd] font-bold text-sm mb-1",children:i_.text}),b.jsx(kt.div,{className:"w-2 h-2 mx-auto rounded-full bg-yellow-400",animate:{scale:[.8,1.2,.8],opacity:[.5,1,.5]},transition:{repeat:1/0,duration:1.5,delay:j*.2}})]})]},j))})]})]});a([`$ ${U}`,K]);return}if(J==="__IMPACT__"){const K=["🚀 프로젝트 런칭 6회 → 신규 채널 확장, 매출 성장 견인","⚡ 성능 최적화 8건 → SQL/트래픽 튜닝으로 응답속도 최대 90% 단축","🤖 자동화·최적화 10건 → 운영 리소스 절감, 오류·재작업 방지","💡 신규 기능 개발 7건 → Kakao·Tripbtoz 연동 등 서비스 확장","🛠️ 프로세스 개선 12건 → 마감/취소/정산 로직 강화, 운영 효율화","🔍 품질 향상 9건 → 고객/파트너 피드백 반영, 오류 예방 및 안정성 확보","🌍 외부 협업 성과 6건 → 신화월드·롯데·Accor 등 주요 파트너 신뢰 제고","💡 아이디어 제안 다수 → TES/TAVI UI 개선, 운영 편의성 강화"],i_=b.jsxs("div",{className:"flex flex-col items-start py-6 w-full",children:[b.jsx("span",{className:"text-lg font-bold text-[#93c5fd] mb-6",children:"💫 조직에 남긴 흔적들"}),b.jsx("div",{className:"flex flex-col space-y-4",children:K.map((j,o_)=>b.jsxs(kt.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:o_*.2},className:"flex items-center",children:[b.jsx("span",{className:"text-lg",children:j.split(" ")[0]}),b.jsx("span",{className:"ml-4 text-[#d0cde1]",children:j.substring(j.indexOf(" ")+1)})]},o_))})]});a([`$ ${U}`,i_]);return}a([`$ ${U}`,J])},[T,a]),y=t_.useCallback(()=>{const U=$.trim();if(!U)return;const Y=ny.filter(Z=>Z.startsWith(U));Y.length===1?s(Y[0]):Y.length>1&&a(Z=>[...Z,`$ ${U}`,Y.join("  ")])},[$,a]),v=t_.useCallback(U=>{if(U.key==="Enter"){const Y=$.trim();Y&&A(Y),s("")}else U.key==="Tab"&&(U.preventDefault(),y())},[$,A,y]);return{lines:e,input:$,typedOutput:u,font:r,setLines:a,setInput:s,setTypedOutput:f,onKeyDown:v,showConfetti:d}},ay=()=>{const e=t_.useRef(null);return t_.useEffect(()=>{const a=e.current,$=a.getContext("2d");let s=[];const u=100,f=()=>{a.width=window.innerWidth,a.height=window.innerHeight,s=Array.from({length:u}).map(()=>({x:Math.random()*a.width,y:Math.random()*a.height,radius:Math.random()*1.5,dx:(Math.random()-.5)*.2,dy:(Math.random()-.5)*.2}))},r=()=>{$.clearRect(0,0,a.width,a.height),s.forEach(T=>{$.beginPath(),$.arc(T.x,T.y,T.radius,0,Math.PI*2),$.fillStyle="white",$.fill(),T.x+=T.dx,T.y+=T.dy,(T.x<0||T.x>a.width)&&(T.dx*=-1),(T.y<0||T.y>a.height)&&(T.dy*=-1)}),requestAnimationFrame(r)};return f(),r(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]),b.jsx("canvas",{ref:e,className:"absolute inset-0 -z-10"})},$y=t_.memo(ay);function fu(){return fu=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var $=arguments[a];for(var s in $)Object.prototype.hasOwnProperty.call($,s)&&(e[s]=$[s])}return e},fu.apply(this,arguments)}var ly={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(e){},onComplete:function(e){},preStringTyped:function(e,a){},onStringTyped:function(e,a){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,a){},onTypingResumed:function(e,a){},onReset:function(e){},onStop:function(e,a){},onStart:function(e,a){},onDestroy:function(e){}},sy=new((function(){function e(){}var a=e.prototype;return a.load=function($,s,u){if($.el=typeof u=="string"?document.querySelector(u):u,$.options=fu({},ly,s),$.isInput=$.el.tagName.toLowerCase()==="input",$.attr=$.options.attr,$.bindInputFocusEvents=$.options.bindInputFocusEvents,$.showCursor=!$.isInput&&$.options.showCursor,$.cursorChar=$.options.cursorChar,$.cursorBlinking=!0,$.elContent=$.attr?$.el.getAttribute($.attr):$.el.textContent,$.contentType=$.options.contentType,$.typeSpeed=$.options.typeSpeed,$.startDelay=$.options.startDelay,$.backSpeed=$.options.backSpeed,$.smartBackspace=$.options.smartBackspace,$.backDelay=$.options.backDelay,$.fadeOut=$.options.fadeOut,$.fadeOutClass=$.options.fadeOutClass,$.fadeOutDelay=$.options.fadeOutDelay,$.isPaused=!1,$.strings=$.options.strings.map(function(h){return h.trim()}),$.stringsElement=typeof $.options.stringsElement=="string"?document.querySelector($.options.stringsElement):$.options.stringsElement,$.stringsElement){$.strings=[],$.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var f=Array.prototype.slice.apply($.stringsElement.children),r=f.length;if(r)for(var T=0;T<r;T+=1)$.strings.push(f[T].innerHTML.trim())}for(var d in $.strPos=0,$.currentElContent=this.getCurrentElContent($),$.currentElContent&&$.currentElContent.length>0&&($.strPos=$.currentElContent.length-1,$.strings.unshift($.currentElContent)),$.sequence=[],$.strings)$.sequence[d]=d;$.arrayPos=0,$.stopNum=0,$.loop=$.options.loop,$.loopCount=$.options.loopCount,$.curLoop=0,$.shuffle=$.options.shuffle,$.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},$.typingComplete=!1,$.autoInsertCss=$.options.autoInsertCss,$.autoInsertCss&&(this.appendCursorAnimationCss($),this.appendFadeOutAnimationCss($))},a.getCurrentElContent=function($){return $.attr?$.el.getAttribute($.attr):$.isInput?$.el.value:$.contentType==="html"?$.el.innerHTML:$.el.textContent},a.appendCursorAnimationCss=function($){var s="data-typed-js-cursor-css";if($.showCursor&&!document.querySelector("["+s+"]")){var u=document.createElement("style");u.setAttribute(s,"true"),u.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(u)}},a.appendFadeOutAnimationCss=function($){var s="data-typed-fadeout-js-css";if($.fadeOut&&!document.querySelector("["+s+"]")){var u=document.createElement("style");u.setAttribute(s,"true"),u.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(u)}},e})()),$d=new((function(){function e(){}var a=e.prototype;return a.typeHtmlChars=function($,s,u){if(u.contentType!=="html")return s;var f=$.substring(s).charAt(0);if(f==="<"||f==="&"){var r;for(r=f==="<"?">":";";$.substring(s+1).charAt(0)!==r&&!(1+ ++s>$.length););s++}return s},a.backSpaceHtmlChars=function($,s,u){if(u.contentType!=="html")return s;var f=$.substring(s).charAt(0);if(f===">"||f===";"){var r;for(r=f===">"?"<":"&";$.substring(s-1).charAt(0)!==r&&!(--s<0););s--}return s},e})()),oy=(function(){function e($,s){sy.load(this,s,$),this.begin()}var a=e.prototype;return a.toggle=function(){this.pause.status?this.start():this.stop()},a.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},a.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},a.destroy=function(){this.reset(!1),this.options.onDestroy(this)},a.reset=function($){$===void 0&&($=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,$&&(this.insertCursor(),this.options.onReset(this),this.begin())},a.begin=function(){var $=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){$.strPos===0?$.typewrite($.strings[$.sequence[$.arrayPos]],$.strPos):$.backspace($.strings[$.sequence[$.arrayPos]],$.strPos)},this.startDelay)},a.typewrite=function($,s){var u=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var f=this.humanizer(this.typeSpeed),r=1;this.pause.status!==!0?this.timeout=setTimeout(function(){s=$d.typeHtmlChars($,s,u);var T=0,d=$.substring(s);if(d.charAt(0)==="^"&&/^\^\d+/.test(d)){var h=1;h+=(d=/\d+/.exec(d)[0]).length,T=parseInt(d),u.temporaryPause=!0,u.options.onTypingPaused(u.arrayPos,u),$=$.substring(0,s)+$.substring(s+h),u.toggleBlinking(!0)}if(d.charAt(0)==="`"){for(;$.substring(s+r).charAt(0)!=="`"&&(r++,!(s+r>$.length)););var A=$.substring(0,s),y=$.substring(A.length+1,s+r),v=$.substring(s+r+1);$=A+y+v,r--}u.timeout=setTimeout(function(){u.toggleBlinking(!1),s>=$.length?u.doneTyping($,s):u.keepTyping($,s,r),u.temporaryPause&&(u.temporaryPause=!1,u.options.onTypingResumed(u.arrayPos,u))},T)},f):this.setPauseStatus($,s,!0)},a.keepTyping=function($,s,u){s===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var f=$.substring(0,s+=u);this.replaceText(f),this.typewrite($,s)},a.doneTyping=function($,s){var u=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){u.backspace($,s)},this.backDelay))},a.backspace=function($,s){var u=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var f=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){s=$d.backSpaceHtmlChars($,s,u);var r=$.substring(0,s);if(u.replaceText(r),u.smartBackspace){var T=u.strings[u.arrayPos+1];u.stopNum=T&&r===T.substring(0,s)?s:0}s>u.stopNum?(s--,u.backspace($,s)):s<=u.stopNum&&(u.arrayPos++,u.arrayPos===u.strings.length?(u.arrayPos=0,u.options.onLastStringBackspaced(),u.shuffleStringsIfNeeded(),u.begin()):u.typewrite(u.strings[u.sequence[u.arrayPos]],s))},f)}else this.setPauseStatus($,s,!1)},a.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},a.setPauseStatus=function($,s,u){this.pause.typewrite=u,this.pause.curString=$,this.pause.curStrPos=s},a.toggleBlinking=function($){this.cursor&&(this.pause.status||this.cursorBlinking!==$&&(this.cursorBlinking=$,$?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},a.humanizer=function($){return Math.round(Math.random()*$/2)+$},a.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},a.initFadeOut=function(){var $=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){$.arrayPos++,$.replaceText(""),$.strings.length>$.arrayPos?$.typewrite($.strings[$.sequence[$.arrayPos]],0):($.typewrite($.strings[0],0),$.arrayPos=0)},this.fadeOutDelay)},a.replaceText=function($){this.attr?this.el.setAttribute(this.attr,$):this.isInput?this.el.value=$:this.contentType==="html"?this.el.innerHTML=$:this.el.textContent=$},a.bindFocusEvents=function(){var $=this;this.isInput&&(this.el.addEventListener("focus",function(s){$.stop()}),this.el.addEventListener("blur",function(s){$.el.value&&$.el.value.length!==0||$.start()}))},a.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},e})();function uy({lines:e,typedOutput:a,setLines:$,setTypedOutput:s}){const u=t_.useRef(null);return t_.useEffect(()=>{u.current&&(u.current.scrollTop=u.current.scrollHeight)},[e,a]),t_.useEffect(()=>{if(a){const f=document.getElementById("typed-output");if(f){const r=new oy(f,{strings:[a],typeSpeed:50,showCursor:!0,cursorChar:"_",onComplete:()=>{$(T=>[...T,a]),s(null)}});return()=>r.destroy()}}},[a,$,s]),b.jsxs("div",{ref:u,className:"flex-1 overflow-y-auto px-3 md:px-4 py-3 text-gray-300 bg-gray-950 font-mono",children:[e.map((f,r)=>{const T=typeof f=="string"&&f.startsWith("$ ");return b.jsx(kt.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{duration:.2},className:"mb-4",children:T?b.jsx("div",{className:"ml-2 md:ml-4",children:b.jsx("div",{className:"border-l-2 border-cyan-500 bg-gray-900 px-3 py-2 mb-3",children:b.jsx("span",{className:"text-cyan-400",children:f.replace("$ ","$ ")})})}):typeof f=="string"?b.jsx("span",{className:"md:ml-4",style:{whiteSpace:"pre-wrap"},children:f}):f},r)}),a&&b.jsx("div",{id:"typed-output",className:"text-cyan-400 font-mono"})]})}function ry({input:e,setInput:a,onKeyDown:$}){return b.jsxs("div",{className:"flex items-center bg-gray-950 px-3 md:px-4 py-3 border-t border-gray-700 font-mono",children:[b.jsx("span",{className:"text-cyan-400 mr-2",children:"$"}),b.jsx("input",{autoFocus:!0,className:"bg-transparent text-gray-300 outline-none flex-1 pl-1 font-mono",value:e,onChange:s=>a(s.target.value),onKeyDown:$,placeholder:"Type a command..."})]})}function cy(e){return b.jsxs("div",{className:"relative w-full max-w-[1024px] h-screen md:h-[600px] bg-gray-950 border-0 md:border border-gray-700 rounded-none md:rounded-lg shadow-2xl flex flex-col text-sm font-mono",children:[b.jsxs("div",{className:"flex items-center bg-gray-900 px-3 py-2 border-b border-gray-700 rounded-t-none md:rounded-t-lg",children:[b.jsxs("div",{className:"flex space-x-2 mr-3",children:[b.jsx("span",{className:"w-3 h-3 bg-red-500 rounded-full"}),b.jsx("span",{className:"w-3 h-3 bg-yellow-500 rounded-full"}),b.jsx("span",{className:"w-3 h-3 bg-green-500 rounded-full"})]}),b.jsx("span",{className:"text-xs text-cyan-400 font-mono truncate",children:"seo-gwangwon@referral-cli ~ %"})]}),b.jsx(uy,{...e}),b.jsx(ry,{...e})]})}ty();function fy(){const e=iy();return b.jsxs("div",{className:"relative min-h-screen text-[#d0cde1] font-mono flex items-center justify-center overflow-hidden",children:[b.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] animate-gradient -z-20"}),b.jsx($y,{}),b.jsx(cy,{...e}),e.showConfetti&&b.jsx("div",{className:"fixed inset-0 pointer-events-none z-50",children:b.jsx(ip,{particleCount:80,duration:3e3,particleSize:20,colors:["#ffd700","#ffb347","#ff69b4","#87ceeb","#98fb98"]})})]})}function Ty(){return b.jsx(fy,{})}LL.createRoot(document.getElementById("root")).render(b.jsx(t_.StrictMode,{children:b.jsx(Ty,{})}));
