(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const f of r)if(f.type==="childList")for(const u of f.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function $(r){const f={};return r.integrity&&(f.integrity=r.integrity),r.referrerPolicy&&(f.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?f.credentials="include":r.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(r){if(r.ep)return;r.ep=!0;const f=$(r);fetch(r.href,f)}})();function sh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Io={exports:{}},Ai={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PT;function rL(){if(PT)return Ai;PT=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function $(l,r,f){var u=null;if(f!==void 0&&(u=""+f),r.key!==void 0&&(u=""+r.key),"key"in r){f={};for(var T in r)T!=="key"&&(f[T]=r[T])}else f=r;return r=f.ref,{$$typeof:e,type:l,key:u,ref:r!==void 0?r:null,props:f}}return Ai.Fragment=i,Ai.jsx=$,Ai.jsxs=$,Ai}var BT;function uL(){return BT||(BT=1,Io.exports=rL()),Io.exports}var N=uL(),go={exports:{}},d_={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GT;function cL(){if(GT)return d_;GT=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),u=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),y=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=y&&I[y]||I["@@iterator"],typeof I=="function"?I:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,Z={};function __(I,Y,F){this.props=I,this.context=Y,this.refs=Z,this.updater=F||G}__.prototype.isReactComponent={},__.prototype.setState=function(I,Y){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,Y,"setState")},__.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function J(){}J.prototype=__.prototype;function n_(I,Y,F){this.props=I,this.context=Y,this.refs=Z,this.updater=F||G}var k=n_.prototype=new J;k.constructor=n_,X(k,__.prototype),k.isPureReactComponent=!0;var g=Array.isArray,b={H:null,A:null,T:null,S:null,V:null},t_=Object.prototype.hasOwnProperty;function e_(I,Y,F,p,C,L){return F=L.ref,{$$typeof:e,type:I,key:Y,ref:F!==void 0?F:null,props:L}}function W(I,Y){return e_(I.type,Y,void 0,void 0,void 0,I.props)}function p_(I){return typeof I=="object"&&I!==null&&I.$$typeof===e}function P_(I){var Y={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(F){return Y[F]})}var Y_=/\/+/g;function N_(I,Y){return typeof I=="object"&&I!==null&&I.key!=null?P_(""+I.key):Y.toString(36)}function _t(){}function z_(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(_t,_t):(I.status="pending",I.then(function(Y){I.status==="pending"&&(I.status="fulfilled",I.value=Y)},function(Y){I.status==="pending"&&(I.status="rejected",I.reason=Y)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function m_(I,Y,F,p,C){var L=typeof I;(L==="undefined"||L==="boolean")&&(I=null);var v=!1;if(I===null)v=!0;else switch(L){case"bigint":case"string":case"number":v=!0;break;case"object":switch(I.$$typeof){case e:case i:v=!0;break;case A:return v=I._init,m_(v(I._payload),Y,F,p,C)}}if(v)return C=C(I),v=p===""?"."+N_(I,0):p,g(C)?(F="",v!=null&&(F=v.replace(Y_,"$&/")+"/"),m_(C,Y,F,"",function(Q){return Q})):C!=null&&(p_(C)&&(C=W(C,F+(C.key==null||I&&I.key===C.key?"":(""+C.key).replace(Y_,"$&/")+"/")+v)),Y.push(C)),1;v=0;var U=p===""?".":p+":";if(g(I))for(var H=0;H<I.length;H++)p=I[H],L=U+N_(p,H),v+=m_(p,Y,F,L,C);else if(H=S(I),typeof H=="function")for(I=H.call(I),H=0;!(p=I.next()).done;)p=p.value,L=U+N_(p,H++),v+=m_(p,Y,F,L,C);else if(L==="object"){if(typeof I.then=="function")return m_(z_(I),Y,F,p,C);throw Y=String(I),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return v}function B(I,Y,F){if(I==null)return I;var p=[],C=0;return m_(I,p,"","",function(L){return Y.call(F,L,C++)}),p}function z(I){if(I._status===-1){var Y=I._result;Y=Y(),Y.then(function(F){(I._status===0||I._status===-1)&&(I._status=1,I._result=F)},function(F){(I._status===0||I._status===-1)&&(I._status=2,I._result=F)}),I._status===-1&&(I._status=0,I._result=Y)}if(I._status===1)return I._result.default;throw I._result}var a_=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function T_(){}return d_.Children={map:B,forEach:function(I,Y,F){B(I,function(){Y.apply(this,arguments)},F)},count:function(I){var Y=0;return B(I,function(){Y++}),Y},toArray:function(I){return B(I,function(Y){return Y})||[]},only:function(I){if(!p_(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},d_.Component=__,d_.Fragment=$,d_.Profiler=r,d_.PureComponent=n_,d_.StrictMode=l,d_.Suspense=d,d_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=b,d_.__COMPILER_RUNTIME={__proto__:null,c:function(I){return b.H.useMemoCache(I)}},d_.cache=function(I){return function(){return I.apply(null,arguments)}},d_.cloneElement=function(I,Y,F){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var p=X({},I.props),C=I.key,L=void 0;if(Y!=null)for(v in Y.ref!==void 0&&(L=void 0),Y.key!==void 0&&(C=""+Y.key),Y)!t_.call(Y,v)||v==="key"||v==="__self"||v==="__source"||v==="ref"&&Y.ref===void 0||(p[v]=Y[v]);var v=arguments.length-2;if(v===1)p.children=F;else if(1<v){for(var U=Array(v),H=0;H<v;H++)U[H]=arguments[H+2];p.children=U}return e_(I.type,C,void 0,void 0,L,p)},d_.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:f,_context:I},I},d_.createElement=function(I,Y,F){var p,C={},L=null;if(Y!=null)for(p in Y.key!==void 0&&(L=""+Y.key),Y)t_.call(Y,p)&&p!=="key"&&p!=="__self"&&p!=="__source"&&(C[p]=Y[p]);var v=arguments.length-2;if(v===1)C.children=F;else if(1<v){for(var U=Array(v),H=0;H<v;H++)U[H]=arguments[H+2];C.children=U}if(I&&I.defaultProps)for(p in v=I.defaultProps,v)C[p]===void 0&&(C[p]=v[p]);return e_(I,L,void 0,void 0,null,C)},d_.createRef=function(){return{current:null}},d_.forwardRef=function(I){return{$$typeof:T,render:I}},d_.isValidElement=p_,d_.lazy=function(I){return{$$typeof:A,_payload:{_status:-1,_result:I},_init:z}},d_.memo=function(I,Y){return{$$typeof:h,type:I,compare:Y===void 0?null:Y}},d_.startTransition=function(I){var Y=b.T,F={};b.T=F;try{var p=I(),C=b.S;C!==null&&C(F,p),typeof p=="object"&&p!==null&&typeof p.then=="function"&&p.then(T_,a_)}catch(L){a_(L)}finally{b.T=Y}},d_.unstable_useCacheRefresh=function(){return b.H.useCacheRefresh()},d_.use=function(I){return b.H.use(I)},d_.useActionState=function(I,Y,F){return b.H.useActionState(I,Y,F)},d_.useCallback=function(I,Y){return b.H.useCallback(I,Y)},d_.useContext=function(I){return b.H.useContext(I)},d_.useDebugValue=function(){},d_.useDeferredValue=function(I,Y){return b.H.useDeferredValue(I,Y)},d_.useEffect=function(I,Y,F){var p=b.H;if(typeof F=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return p.useEffect(I,Y)},d_.useId=function(){return b.H.useId()},d_.useImperativeHandle=function(I,Y,F){return b.H.useImperativeHandle(I,Y,F)},d_.useInsertionEffect=function(I,Y){return b.H.useInsertionEffect(I,Y)},d_.useLayoutEffect=function(I,Y){return b.H.useLayoutEffect(I,Y)},d_.useMemo=function(I,Y){return b.H.useMemo(I,Y)},d_.useOptimistic=function(I,Y){return b.H.useOptimistic(I,Y)},d_.useReducer=function(I,Y,F){return b.H.useReducer(I,Y,F)},d_.useRef=function(I){return b.H.useRef(I)},d_.useState=function(I){return b.H.useState(I)},d_.useSyncExternalStore=function(I,Y,F){return b.H.useSyncExternalStore(I,Y,F)},d_.useTransition=function(){return b.H.useTransition()},d_.version="19.1.1",d_}var VT;function Tr(){return VT||(VT=1,go.exports=cL()),go.exports}var i_=Tr();const fL=sh(i_);var Ro={exports:{}},Li={},So={exports:{}},vo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wT;function TL(){return wT||(wT=1,(function(e){function i(B,z){var a_=B.length;B.push(z);_:for(;0<a_;){var T_=a_-1>>>1,I=B[T_];if(0<r(I,z))B[T_]=z,B[a_]=I,a_=T_;else break _}}function $(B){return B.length===0?null:B[0]}function l(B){if(B.length===0)return null;var z=B[0],a_=B.pop();if(a_!==z){B[0]=a_;_:for(var T_=0,I=B.length,Y=I>>>1;T_<Y;){var F=2*(T_+1)-1,p=B[F],C=F+1,L=B[C];if(0>r(p,a_))C<I&&0>r(L,p)?(B[T_]=L,B[C]=a_,T_=C):(B[T_]=p,B[F]=a_,T_=F);else if(C<I&&0>r(L,a_))B[T_]=L,B[C]=a_,T_=C;else break _}}return z}function r(B,z){var a_=B.sortIndex-z.sortIndex;return a_!==0?a_:B.id-z.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;e.unstable_now=function(){return f.now()}}else{var u=Date,T=u.now();e.unstable_now=function(){return u.now()-T}}var d=[],h=[],A=1,y=null,S=3,G=!1,X=!1,Z=!1,__=!1,J=typeof setTimeout=="function"?setTimeout:null,n_=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function g(B){for(var z=$(h);z!==null;){if(z.callback===null)l(h);else if(z.startTime<=B)l(h),z.sortIndex=z.expirationTime,i(d,z);else break;z=$(h)}}function b(B){if(Z=!1,g(B),!X)if($(d)!==null)X=!0,t_||(t_=!0,N_());else{var z=$(h);z!==null&&m_(b,z.startTime-B)}}var t_=!1,e_=-1,W=5,p_=-1;function P_(){return __?!0:!(e.unstable_now()-p_<W)}function Y_(){if(__=!1,t_){var B=e.unstable_now();p_=B;var z=!0;try{_:{X=!1,Z&&(Z=!1,n_(e_),e_=-1),G=!0;var a_=S;try{t:{for(g(B),y=$(d);y!==null&&!(y.expirationTime>B&&P_());){var T_=y.callback;if(typeof T_=="function"){y.callback=null,S=y.priorityLevel;var I=T_(y.expirationTime<=B);if(B=e.unstable_now(),typeof I=="function"){y.callback=I,g(B),z=!0;break t}y===$(d)&&l(d),g(B)}else l(d);y=$(d)}if(y!==null)z=!0;else{var Y=$(h);Y!==null&&m_(b,Y.startTime-B),z=!1}}break _}finally{y=null,S=a_,G=!1}z=void 0}}finally{z?N_():t_=!1}}}var N_;if(typeof k=="function")N_=function(){k(Y_)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,z_=_t.port2;_t.port1.onmessage=Y_,N_=function(){z_.postMessage(null)}}else N_=function(){J(Y_,0)};function m_(B,z){e_=J(function(){B(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(B){B.callback=null},e.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<B?Math.floor(1e3/B):5},e.unstable_getCurrentPriorityLevel=function(){return S},e.unstable_next=function(B){switch(S){case 1:case 2:case 3:var z=3;break;default:z=S}var a_=S;S=z;try{return B()}finally{S=a_}},e.unstable_requestPaint=function(){__=!0},e.unstable_runWithPriority=function(B,z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var a_=S;S=B;try{return z()}finally{S=a_}},e.unstable_scheduleCallback=function(B,z,a_){var T_=e.unstable_now();switch(typeof a_=="object"&&a_!==null?(a_=a_.delay,a_=typeof a_=="number"&&0<a_?T_+a_:T_):a_=T_,B){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=a_+I,B={id:A++,callback:z,priorityLevel:B,startTime:a_,expirationTime:I,sortIndex:-1},a_>T_?(B.sortIndex=a_,i(h,B),$(d)===null&&B===$(h)&&(Z?(n_(e_),e_=-1):Z=!0,m_(b,a_-T_))):(B.sortIndex=I,i(d,B),X||G||(X=!0,t_||(t_=!0,N_()))),B},e.unstable_shouldYield=P_,e.unstable_wrapCallback=function(B){var z=S;return function(){var a_=S;S=z;try{return B.apply(this,arguments)}finally{S=a_}}}})(vo)),vo}var WT;function dL(){return WT||(WT=1,So.exports=TL()),So.exports}var No={exports:{}},ht={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YT;function hL(){if(YT)return ht;YT=1;var e=Tr();function i(d){var h="https://react.dev/errors/"+d;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)h+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+d+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function $(){}var l={d:{f:$,r:function(){throw Error(i(522))},D:$,C:$,L:$,m:$,X:$,S:$,M:$},p:0,findDOMNode:null},r=Symbol.for("react.portal");function f(d,h,A){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:y==null?null:""+y,children:d,containerInfo:h,implementation:A}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(d,h){if(d==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,ht.createPortal=function(d,h){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(i(299));return f(d,h,null,A)},ht.flushSync=function(d){var h=u.T,A=l.p;try{if(u.T=null,l.p=2,d)return d()}finally{u.T=h,l.p=A,l.d.f()}},ht.preconnect=function(d,h){typeof d=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,l.d.C(d,h))},ht.prefetchDNS=function(d){typeof d=="string"&&l.d.D(d)},ht.preinit=function(d,h){if(typeof d=="string"&&h&&typeof h.as=="string"){var A=h.as,y=T(A,h.crossOrigin),S=typeof h.integrity=="string"?h.integrity:void 0,G=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;A==="style"?l.d.S(d,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:y,integrity:S,fetchPriority:G}):A==="script"&&l.d.X(d,{crossOrigin:y,integrity:S,fetchPriority:G,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},ht.preinitModule=function(d,h){if(typeof d=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var A=T(h.as,h.crossOrigin);l.d.M(d,{crossOrigin:A,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&l.d.M(d)},ht.preload=function(d,h){if(typeof d=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var A=h.as,y=T(A,h.crossOrigin);l.d.L(d,A,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},ht.preloadModule=function(d,h){if(typeof d=="string")if(h){var A=T(h.as,h.crossOrigin);l.d.m(d,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:A,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else l.d.m(d)},ht.requestFormReset=function(d){l.d.r(d)},ht.unstable_batchedUpdates=function(d,h){return d(h)},ht.useFormState=function(d,h,A){return u.H.useFormState(d,h,A)},ht.useFormStatus=function(){return u.H.useHostTransitionStatus()},ht.version="19.1.1",ht}var jT;function EL(){if(jT)return No.exports;jT=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(i){console.error(i)}}return e(),No.exports=hL(),No.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FT;function AL(){if(FT)return Li;FT=1;var e=dL(),i=Tr(),$=EL();function l(_){var t="https://react.dev/errors/"+_;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+_+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(_){return!(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)}function f(_){var t=_,n=_;if(_.alternate)for(;t.return;)t=t.return;else{_=t;do t=_,(t.flags&4098)!==0&&(n=t.return),_=t.return;while(_)}return t.tag===3?n:null}function u(_){if(_.tag===13){var t=_.memoizedState;if(t===null&&(_=_.alternate,_!==null&&(t=_.memoizedState)),t!==null)return t.dehydrated}return null}function T(_){if(f(_)!==_)throw Error(l(188))}function d(_){var t=_.alternate;if(!t){if(t=f(_),t===null)throw Error(l(188));return t!==_?null:_}for(var n=_,a=t;;){var s=n.return;if(s===null)break;var o=s.alternate;if(o===null){if(a=s.return,a!==null){n=a;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===n)return T(s),_;if(o===a)return T(s),t;o=o.sibling}throw Error(l(188))}if(n.return!==a.return)n=s,a=o;else{for(var c=!1,E=s.child;E;){if(E===n){c=!0,n=s,a=o;break}if(E===a){c=!0,a=s,n=o;break}E=E.sibling}if(!c){for(E=o.child;E;){if(E===n){c=!0,n=o,a=s;break}if(E===a){c=!0,a=o,n=s;break}E=E.sibling}if(!c)throw Error(l(189))}}if(n.alternate!==a)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?_:t}function h(_){var t=_.tag;if(t===5||t===26||t===27||t===6)return _;for(_=_.child;_!==null;){if(t=h(_),t!==null)return t;_=_.sibling}return null}var A=Object.assign,y=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),__=Symbol.for("react.profiler"),J=Symbol.for("react.provider"),n_=Symbol.for("react.consumer"),k=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),t_=Symbol.for("react.suspense_list"),e_=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),p_=Symbol.for("react.activity"),P_=Symbol.for("react.memo_cache_sentinel"),Y_=Symbol.iterator;function N_(_){return _===null||typeof _!="object"?null:(_=Y_&&_[Y_]||_["@@iterator"],typeof _=="function"?_:null)}var _t=Symbol.for("react.client.reference");function z_(_){if(_==null)return null;if(typeof _=="function")return _.$$typeof===_t?null:_.displayName||_.name||null;if(typeof _=="string")return _;switch(_){case X:return"Fragment";case __:return"Profiler";case Z:return"StrictMode";case b:return"Suspense";case t_:return"SuspenseList";case p_:return"Activity"}if(typeof _=="object")switch(_.$$typeof){case G:return"Portal";case k:return(_.displayName||"Context")+".Provider";case n_:return(_._context.displayName||"Context")+".Consumer";case g:var t=_.render;return _=_.displayName,_||(_=t.displayName||t.name||"",_=_!==""?"ForwardRef("+_+")":"ForwardRef"),_;case e_:return t=_.displayName||null,t!==null?t:z_(_.type)||"Memo";case W:t=_._payload,_=_._init;try{return z_(_(t))}catch{}}return null}var m_=Array.isArray,B=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=$.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,a_={pending:!1,data:null,method:null,action:null},T_=[],I=-1;function Y(_){return{current:_}}function F(_){0>I||(_.current=T_[I],T_[I]=null,I--)}function p(_,t){I++,T_[I]=_.current,_.current=t}var C=Y(null),L=Y(null),v=Y(null),U=Y(null);function H(_,t){switch(p(v,t),p(L,_),p(C,null),t.nodeType){case 9:case 11:_=(_=t.documentElement)&&(_=_.namespaceURI)?uT(_):0;break;default:if(_=t.tagName,t=t.namespaceURI)t=uT(t),_=cT(t,_);else switch(_){case"svg":_=1;break;case"math":_=2;break;default:_=0}}F(C),p(C,_)}function Q(){F(C),F(L),F(v)}function q(_){_.memoizedState!==null&&p(U,_);var t=C.current,n=cT(t,_.type);t!==n&&(p(L,_),p(C,n))}function K(_){L.current===_&&(F(C),F(L)),U.current===_&&(F(U),fi._currentValue=a_)}var l_=Object.prototype.hasOwnProperty,I_=e.unstable_scheduleCallback,R_=e.unstable_cancelCallback,v_=e.unstable_shouldYield,b_=e.unstable_requestPaint,G_=e.unstable_now,Ie=e.unstable_getCurrentPriorityLevel,Ze=e.unstable_ImmediatePriority,V_=e.unstable_UserBlockingPriority,X_=e.unstable_NormalPriority,H_=e.unstable_LowPriority,ma=e.unstable_IdlePriority,z0=e.log,X0=e.unstable_setDisableYieldValue,ya=null,St=null;function ge(_){if(typeof z0=="function"&&X0(_),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(ya,_)}catch{}}var vt=Math.clz32?Math.clz32:k0,K0=Math.log,q0=Math.LN2;function k0(_){return _>>>=0,_===0?32:31-(K0(_)/q0|0)|0}var Pi=256,Bi=4194304;function Je(_){var t=_&42;if(t!==0)return t;switch(_&-_){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return _&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return _&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return _}}function Gi(_,t,n){var a=_.pendingLanes;if(a===0)return 0;var s=0,o=_.suspendedLanes,c=_.pingedLanes;_=_.warmLanes;var E=a&134217727;return E!==0?(a=E&~o,a!==0?s=Je(a):(c&=E,c!==0?s=Je(c):n||(n=E&~_,n!==0&&(s=Je(n))))):(E=a&~o,E!==0?s=Je(E):c!==0?s=Je(c):n||(n=a&~_,n!==0&&(s=Je(n)))),s===0?0:t!==0&&t!==s&&(t&o)===0&&(o=s&-s,n=t&-t,o>=n||o===32&&(n&4194048)!==0)?t:s}function pa(_,t){return(_.pendingLanes&~(_.suspendedLanes&~_.pingedLanes)&t)===0}function Q0(_,t){switch(_){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xr(){var _=Pi;return Pi<<=1,(Pi&4194048)===0&&(Pi=256),_}function Kr(){var _=Bi;return Bi<<=1,(Bi&62914560)===0&&(Bi=4194304),_}function ul(_){for(var t=[],n=0;31>n;n++)t.push(_);return t}function Ia(_,t){_.pendingLanes|=t,t!==268435456&&(_.suspendedLanes=0,_.pingedLanes=0,_.warmLanes=0)}function Z0(_,t,n,a,s,o){var c=_.pendingLanes;_.pendingLanes=n,_.suspendedLanes=0,_.pingedLanes=0,_.warmLanes=0,_.expiredLanes&=n,_.entangledLanes&=n,_.errorRecoveryDisabledLanes&=n,_.shellSuspendCounter=0;var E=_.entanglements,m=_.expirationTimes,O=_.hiddenUpdates;for(n=c&~n;0<n;){var V=31-vt(n),j=1<<V;E[V]=0,m[V]=-1;var D=O[V];if(D!==null)for(O[V]=null,V=0;V<D.length;V++){var P=D[V];P!==null&&(P.lane&=-536870913)}n&=~j}a!==0&&qr(_,a,0),o!==0&&s===0&&_.tag!==0&&(_.suspendedLanes|=o&~(c&~t))}function qr(_,t,n){_.pendingLanes|=t,_.suspendedLanes&=~t;var a=31-vt(t);_.entangledLanes|=t,_.entanglements[a]=_.entanglements[a]|1073741824|n&4194090}function kr(_,t){var n=_.entangledLanes|=t;for(_=_.entanglements;n;){var a=31-vt(n),s=1<<a;s&t|_[a]&t&&(_[a]|=t),n&=~s}}function cl(_){switch(_){case 2:_=1;break;case 8:_=4;break;case 32:_=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:_=128;break;case 268435456:_=134217728;break;default:_=0}return _}function fl(_){return _&=-_,2<_?8<_?(_&134217727)!==0?32:268435456:8:2}function Qr(){var _=z.p;return _!==0?_:(_=window.event,_===void 0?32:bT(_.type))}function J0(_,t){var n=z.p;try{return z.p=_,t()}finally{z.p=n}}var Re=Math.random().toString(36).slice(2),Tt="__reactFiber$"+Re,mt="__reactProps$"+Re,gn="__reactContainer$"+Re,Tl="__reactEvents$"+Re,_E="__reactListeners$"+Re,tE="__reactHandles$"+Re,Zr="__reactResources$"+Re,ga="__reactMarker$"+Re;function dl(_){delete _[Tt],delete _[mt],delete _[Tl],delete _[_E],delete _[tE]}function Rn(_){var t=_[Tt];if(t)return t;for(var n=_.parentNode;n;){if(t=n[gn]||n[Tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(_=hT(_);_!==null;){if(n=_[Tt])return n;_=hT(_)}return t}_=n,n=_.parentNode}return null}function Sn(_){if(_=_[Tt]||_[gn]){var t=_.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return _}return null}function Ra(_){var t=_.tag;if(t===5||t===26||t===27||t===6)return _.stateNode;throw Error(l(33))}function vn(_){var t=_[Zr];return t||(t=_[Zr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function $t(_){_[ga]=!0}var Jr=new Set,_u={};function _n(_,t){Nn(_,t),Nn(_+"Capture",t)}function Nn(_,t){for(_u[_]=t,_=0;_<t.length;_++)Jr.add(t[_])}var eE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tu={},eu={};function nE(_){return l_.call(eu,_)?!0:l_.call(tu,_)?!1:eE.test(_)?eu[_]=!0:(tu[_]=!0,!1)}function Vi(_,t,n){if(nE(t))if(n===null)_.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":_.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){_.removeAttribute(t);return}}_.setAttribute(t,""+n)}}function wi(_,t,n){if(n===null)_.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":_.removeAttribute(t);return}_.setAttribute(t,""+n)}}function $e(_,t,n,a){if(a===null)_.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":_.removeAttribute(n);return}_.setAttributeNS(t,n,""+a)}}var hl,nu;function Cn(_){if(hl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);hl=t&&t[1]||"",nu=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hl+_+nu}var El=!1;function Al(_,t){if(!_||El)return"";El=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(P){var D=P}Reflect.construct(_,[],j)}else{try{j.call()}catch(P){D=P}_.call(j.prototype)}}else{try{throw Error()}catch(P){D=P}(j=_())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(P){if(P&&D&&typeof P.stack=="string")return[P.stack,D.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=a.DetermineComponentFrameRoot(),c=o[0],E=o[1];if(c&&E){var m=c.split(`
`),O=E.split(`
`);for(s=a=0;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;for(;s<O.length&&!O[s].includes("DetermineComponentFrameRoot");)s++;if(a===m.length||s===O.length)for(a=m.length-1,s=O.length-1;1<=a&&0<=s&&m[a]!==O[s];)s--;for(;1<=a&&0<=s;a--,s--)if(m[a]!==O[s]){if(a!==1||s!==1)do if(a--,s--,0>s||m[a]!==O[s]){var V=`
`+m[a].replace(" at new "," at ");return _.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",_.displayName)),V}while(1<=a&&0<=s);break}}}finally{El=!1,Error.prepareStackTrace=n}return(n=_?_.displayName||_.name:"")?Cn(n):""}function aE(_){switch(_.tag){case 26:case 27:case 5:return Cn(_.type);case 16:return Cn("Lazy");case 13:return Cn("Suspense");case 19:return Cn("SuspenseList");case 0:case 15:return Al(_.type,!1);case 11:return Al(_.type.render,!1);case 1:return Al(_.type,!0);case 31:return Cn("Activity");default:return""}}function au(_){try{var t="";do t+=aE(_),_=_.return;while(_);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Ut(_){switch(typeof _){case"bigint":case"boolean":case"number":case"string":case"undefined":return _;case"object":return _;default:return""}}function iu(_){var t=_.type;return(_=_.nodeName)&&_.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function iE(_){var t=iu(_)?"checked":"value",n=Object.getOwnPropertyDescriptor(_.constructor.prototype,t),a=""+_[t];if(!_.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,o=n.set;return Object.defineProperty(_,t,{configurable:!0,get:function(){return s.call(this)},set:function(c){a=""+c,o.call(this,c)}}),Object.defineProperty(_,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){_._valueTracker=null,delete _[t]}}}}function Wi(_){_._valueTracker||(_._valueTracker=iE(_))}function $u(_){if(!_)return!1;var t=_._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return _&&(a=iu(_)?_.checked?"true":"false":_.value),_=a,_!==n?(t.setValue(_),!0):!1}function Yi(_){if(_=_||(typeof document<"u"?document:void 0),typeof _>"u")return null;try{return _.activeElement||_.body}catch{return _.body}}var $E=/[\n"\\]/g;function Pt(_){return _.replace($E,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ll(_,t,n,a,s,o,c,E){_.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?_.type=c:_.removeAttribute("type"),t!=null?c==="number"?(t===0&&_.value===""||_.value!=t)&&(_.value=""+Ut(t)):_.value!==""+Ut(t)&&(_.value=""+Ut(t)):c!=="submit"&&c!=="reset"||_.removeAttribute("value"),t!=null?ml(_,c,Ut(t)):n!=null?ml(_,c,Ut(n)):a!=null&&_.removeAttribute("value"),s==null&&o!=null&&(_.defaultChecked=!!o),s!=null&&(_.checked=s&&typeof s!="function"&&typeof s!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?_.name=""+Ut(E):_.removeAttribute("name")}function lu(_,t,n,a,s,o,c,E){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(_.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null))return;n=n!=null?""+Ut(n):"",t=t!=null?""+Ut(t):n,E||t===_.value||(_.value=t),_.defaultValue=t}a=a??s,a=typeof a!="function"&&typeof a!="symbol"&&!!a,_.checked=E?_.checked:!!a,_.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(_.name=c)}function ml(_,t,n){t==="number"&&Yi(_.ownerDocument)===_||_.defaultValue===""+n||(_.defaultValue=""+n)}function xn(_,t,n,a){if(_=_.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<_.length;n++)s=t.hasOwnProperty("$"+_[n].value),_[n].selected!==s&&(_[n].selected=s),s&&a&&(_[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,s=0;s<_.length;s++){if(_[s].value===n){_[s].selected=!0,a&&(_[s].defaultSelected=!0);return}t!==null||_[s].disabled||(t=_[s])}t!==null&&(t.selected=!0)}}function su(_,t,n){if(t!=null&&(t=""+Ut(t),t!==_.value&&(_.value=t),n==null)){_.defaultValue!==t&&(_.defaultValue=t);return}_.defaultValue=n!=null?""+Ut(n):""}function ou(_,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(l(92));if(m_(a)){if(1<a.length)throw Error(l(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Ut(t),_.defaultValue=n,a=_.textContent,a===n&&a!==""&&a!==null&&(_.value=a)}function bn(_,t){if(t){var n=_.firstChild;if(n&&n===_.lastChild&&n.nodeType===3){n.nodeValue=t;return}}_.textContent=t}var lE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ru(_,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?_.setProperty(t,""):t==="float"?_.cssFloat="":_[t]="":a?_.setProperty(t,n):typeof n!="number"||n===0||lE.has(t)?t==="float"?_.cssFloat=n:_[t]=(""+n).trim():_[t]=n+"px"}function uu(_,t,n){if(t!=null&&typeof t!="object")throw Error(l(62));if(_=_.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?_.setProperty(a,""):a==="float"?_.cssFloat="":_[a]="");for(var s in t)a=t[s],t.hasOwnProperty(s)&&n[s]!==a&&ru(_,s,a)}else for(var o in t)t.hasOwnProperty(o)&&ru(_,o,t[o])}function yl(_){if(_.indexOf("-")===-1)return!1;switch(_){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),oE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ji(_){return oE.test(""+_)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":_}var pl=null;function Il(_){return _=_.target||_.srcElement||window,_.correspondingUseElement&&(_=_.correspondingUseElement),_.nodeType===3?_.parentNode:_}var Mn=null,On=null;function cu(_){var t=Sn(_);if(t&&(_=t.stateNode)){var n=_[mt]||null;_:switch(_=t.stateNode,t.type){case"input":if(Ll(_,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=_;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Pt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==_&&a.form===_.form){var s=a[mt]||null;if(!s)throw Error(l(90));Ll(a,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===_.form&&$u(a)}break _;case"textarea":su(_,n.value,n.defaultValue);break _;case"select":t=n.value,t!=null&&xn(_,!!n.multiple,t,!1)}}}var gl=!1;function fu(_,t,n){if(gl)return _(t,n);gl=!0;try{var a=_(t);return a}finally{if(gl=!1,(Mn!==null||On!==null)&&(C$(),Mn&&(t=Mn,_=On,On=Mn=null,cu(t),_)))for(t=0;t<_.length;t++)cu(_[t])}}function Sa(_,t){var n=_.stateNode;if(n===null)return null;var a=n[mt]||null;if(a===null)return null;n=a[t];_:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(_=_.type,a=!(_==="button"||_==="input"||_==="select"||_==="textarea")),_=!a;break _;default:_=!1}if(_)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var le=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rl=!1;if(le)try{var va={};Object.defineProperty(va,"passive",{get:function(){Rl=!0}}),window.addEventListener("test",va,va),window.removeEventListener("test",va,va)}catch{Rl=!1}var Se=null,Sl=null,Fi=null;function Tu(){if(Fi)return Fi;var _,t=Sl,n=t.length,a,s="value"in Se?Se.value:Se.textContent,o=s.length;for(_=0;_<n&&t[_]===s[_];_++);var c=n-_;for(a=1;a<=c&&t[n-a]===s[o-a];a++);return Fi=s.slice(_,1<a?1-a:void 0)}function zi(_){var t=_.keyCode;return"charCode"in _?(_=_.charCode,_===0&&t===13&&(_=13)):_=t,_===10&&(_=13),32<=_||_===13?_:0}function Xi(){return!0}function du(){return!1}function yt(_){function t(n,a,s,o,c){this._reactName=n,this._targetInst=s,this.type=a,this.nativeEvent=o,this.target=c,this.currentTarget=null;for(var E in _)_.hasOwnProperty(E)&&(n=_[E],this[E]=n?n(o):o[E]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Xi:du,this.isPropagationStopped=du,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xi)},persist:function(){},isPersistent:Xi}),t}var tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(_){return _.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ki=yt(tn),Na=A({},tn,{view:0,detail:0}),rE=yt(Na),vl,Nl,Ca,qi=A({},Na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xl,button:0,buttons:0,relatedTarget:function(_){return _.relatedTarget===void 0?_.fromElement===_.srcElement?_.toElement:_.fromElement:_.relatedTarget},movementX:function(_){return"movementX"in _?_.movementX:(_!==Ca&&(Ca&&_.type==="mousemove"?(vl=_.screenX-Ca.screenX,Nl=_.screenY-Ca.screenY):Nl=vl=0,Ca=_),vl)},movementY:function(_){return"movementY"in _?_.movementY:Nl}}),hu=yt(qi),uE=A({},qi,{dataTransfer:0}),cE=yt(uE),fE=A({},Na,{relatedTarget:0}),Cl=yt(fE),TE=A({},tn,{animationName:0,elapsedTime:0,pseudoElement:0}),dE=yt(TE),hE=A({},tn,{clipboardData:function(_){return"clipboardData"in _?_.clipboardData:window.clipboardData}}),EE=yt(hE),AE=A({},tn,{data:0}),Eu=yt(AE),LE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pE(_){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(_):(_=yE[_])?!!t[_]:!1}function xl(){return pE}var IE=A({},Na,{key:function(_){if(_.key){var t=LE[_.key]||_.key;if(t!=="Unidentified")return t}return _.type==="keypress"?(_=zi(_),_===13?"Enter":String.fromCharCode(_)):_.type==="keydown"||_.type==="keyup"?mE[_.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xl,charCode:function(_){return _.type==="keypress"?zi(_):0},keyCode:function(_){return _.type==="keydown"||_.type==="keyup"?_.keyCode:0},which:function(_){return _.type==="keypress"?zi(_):_.type==="keydown"||_.type==="keyup"?_.keyCode:0}}),gE=yt(IE),RE=A({},qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Au=yt(RE),SE=A({},Na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xl}),vE=yt(SE),NE=A({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),CE=yt(NE),xE=A({},qi,{deltaX:function(_){return"deltaX"in _?_.deltaX:"wheelDeltaX"in _?-_.wheelDeltaX:0},deltaY:function(_){return"deltaY"in _?_.deltaY:"wheelDeltaY"in _?-_.wheelDeltaY:"wheelDelta"in _?-_.wheelDelta:0},deltaZ:0,deltaMode:0}),bE=yt(xE),ME=A({},tn,{newState:0,oldState:0}),OE=yt(ME),DE=[9,13,27,32],bl=le&&"CompositionEvent"in window,xa=null;le&&"documentMode"in document&&(xa=document.documentMode);var HE=le&&"TextEvent"in window&&!xa,Lu=le&&(!bl||xa&&8<xa&&11>=xa),mu=" ",yu=!1;function pu(_,t){switch(_){case"keyup":return DE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iu(_){return _=_.detail,typeof _=="object"&&"data"in _?_.data:null}var Dn=!1;function UE(_,t){switch(_){case"compositionend":return Iu(t);case"keypress":return t.which!==32?null:(yu=!0,mu);case"textInput":return _=t.data,_===mu&&yu?null:_;default:return null}}function PE(_,t){if(Dn)return _==="compositionend"||!bl&&pu(_,t)?(_=Tu(),Fi=Sl=Se=null,Dn=!1,_):null;switch(_){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lu&&t.locale!=="ko"?null:t.data;default:return null}}var BE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gu(_){var t=_&&_.nodeName&&_.nodeName.toLowerCase();return t==="input"?!!BE[_.type]:t==="textarea"}function Ru(_,t,n,a){Mn?On?On.push(a):On=[a]:Mn=a,t=H$(t,"onChange"),0<t.length&&(n=new Ki("onChange","change",null,n,a),_.push({event:n,listeners:t}))}var ba=null,Ma=null;function GE(_){$T(_,0)}function ki(_){var t=Ra(_);if($u(t))return _}function Su(_,t){if(_==="change")return t}var vu=!1;if(le){var Ml;if(le){var Ol="oninput"in document;if(!Ol){var Nu=document.createElement("div");Nu.setAttribute("oninput","return;"),Ol=typeof Nu.oninput=="function"}Ml=Ol}else Ml=!1;vu=Ml&&(!document.documentMode||9<document.documentMode)}function Cu(){ba&&(ba.detachEvent("onpropertychange",xu),Ma=ba=null)}function xu(_){if(_.propertyName==="value"&&ki(Ma)){var t=[];Ru(t,Ma,_,Il(_)),fu(GE,t)}}function VE(_,t,n){_==="focusin"?(Cu(),ba=t,Ma=n,ba.attachEvent("onpropertychange",xu)):_==="focusout"&&Cu()}function wE(_){if(_==="selectionchange"||_==="keyup"||_==="keydown")return ki(Ma)}function WE(_,t){if(_==="click")return ki(t)}function YE(_,t){if(_==="input"||_==="change")return ki(t)}function jE(_,t){return _===t&&(_!==0||1/_===1/t)||_!==_&&t!==t}var Nt=typeof Object.is=="function"?Object.is:jE;function Oa(_,t){if(Nt(_,t))return!0;if(typeof _!="object"||_===null||typeof t!="object"||t===null)return!1;var n=Object.keys(_),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var s=n[a];if(!l_.call(t,s)||!Nt(_[s],t[s]))return!1}return!0}function bu(_){for(;_&&_.firstChild;)_=_.firstChild;return _}function Mu(_,t){var n=bu(_);_=0;for(var a;n;){if(n.nodeType===3){if(a=_+n.textContent.length,_<=t&&a>=t)return{node:n,offset:t-_};_=a}_:{for(;n;){if(n.nextSibling){n=n.nextSibling;break _}n=n.parentNode}n=void 0}n=bu(n)}}function Ou(_,t){return _&&t?_===t?!0:_&&_.nodeType===3?!1:t&&t.nodeType===3?Ou(_,t.parentNode):"contains"in _?_.contains(t):_.compareDocumentPosition?!!(_.compareDocumentPosition(t)&16):!1:!1}function Du(_){_=_!=null&&_.ownerDocument!=null&&_.ownerDocument.defaultView!=null?_.ownerDocument.defaultView:window;for(var t=Yi(_.document);t instanceof _.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)_=t.contentWindow;else break;t=Yi(_.document)}return t}function Dl(_){var t=_&&_.nodeName&&_.nodeName.toLowerCase();return t&&(t==="input"&&(_.type==="text"||_.type==="search"||_.type==="tel"||_.type==="url"||_.type==="password")||t==="textarea"||_.contentEditable==="true")}var FE=le&&"documentMode"in document&&11>=document.documentMode,Hn=null,Hl=null,Da=null,Ul=!1;function Hu(_,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ul||Hn==null||Hn!==Yi(a)||(a=Hn,"selectionStart"in a&&Dl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Da&&Oa(Da,a)||(Da=a,a=H$(Hl,"onSelect"),0<a.length&&(t=new Ki("onSelect","select",null,t,n),_.push({event:t,listeners:a}),t.target=Hn)))}function en(_,t){var n={};return n[_.toLowerCase()]=t.toLowerCase(),n["Webkit"+_]="webkit"+t,n["Moz"+_]="moz"+t,n}var Un={animationend:en("Animation","AnimationEnd"),animationiteration:en("Animation","AnimationIteration"),animationstart:en("Animation","AnimationStart"),transitionrun:en("Transition","TransitionRun"),transitionstart:en("Transition","TransitionStart"),transitioncancel:en("Transition","TransitionCancel"),transitionend:en("Transition","TransitionEnd")},Pl={},Uu={};le&&(Uu=document.createElement("div").style,"AnimationEvent"in window||(delete Un.animationend.animation,delete Un.animationiteration.animation,delete Un.animationstart.animation),"TransitionEvent"in window||delete Un.transitionend.transition);function nn(_){if(Pl[_])return Pl[_];if(!Un[_])return _;var t=Un[_],n;for(n in t)if(t.hasOwnProperty(n)&&n in Uu)return Pl[_]=t[n];return _}var Pu=nn("animationend"),Bu=nn("animationiteration"),Gu=nn("animationstart"),zE=nn("transitionrun"),XE=nn("transitionstart"),KE=nn("transitioncancel"),Vu=nn("transitionend"),wu=new Map,Bl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bl.push("scrollEnd");function Kt(_,t){wu.set(_,t),_n(t,[_])}var Wu=new WeakMap;function Bt(_,t){if(typeof _=="object"&&_!==null){var n=Wu.get(_);return n!==void 0?n:(t={value:_,source:t,stack:au(t)},Wu.set(_,t),t)}return{value:_,source:t,stack:au(t)}}var Gt=[],Pn=0,Gl=0;function Qi(){for(var _=Pn,t=Gl=Pn=0;t<_;){var n=Gt[t];Gt[t++]=null;var a=Gt[t];Gt[t++]=null;var s=Gt[t];Gt[t++]=null;var o=Gt[t];if(Gt[t++]=null,a!==null&&s!==null){var c=a.pending;c===null?s.next=s:(s.next=c.next,c.next=s),a.pending=s}o!==0&&Yu(n,s,o)}}function Zi(_,t,n,a){Gt[Pn++]=_,Gt[Pn++]=t,Gt[Pn++]=n,Gt[Pn++]=a,Gl|=a,_.lanes|=a,_=_.alternate,_!==null&&(_.lanes|=a)}function Vl(_,t,n,a){return Zi(_,t,n,a),Ji(_)}function Bn(_,t){return Zi(_,null,null,t),Ji(_)}function Yu(_,t,n){_.lanes|=n;var a=_.alternate;a!==null&&(a.lanes|=n);for(var s=!1,o=_.return;o!==null;)o.childLanes|=n,a=o.alternate,a!==null&&(a.childLanes|=n),o.tag===22&&(_=o.stateNode,_===null||_._visibility&1||(s=!0)),_=o,o=o.return;return _.tag===3?(o=_.stateNode,s&&t!==null&&(s=31-vt(n),_=o.hiddenUpdates,a=_[s],a===null?_[s]=[t]:a.push(t),t.lane=n|536870912),o):null}function Ji(_){if(50<ii)throw ii=0,zs=null,Error(l(185));for(var t=_.return;t!==null;)_=t,t=_.return;return _.tag===3?_.stateNode:null}var Gn={};function qE(_,t,n,a){this.tag=_,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(_,t,n,a){return new qE(_,t,n,a)}function wl(_){return _=_.prototype,!(!_||!_.isReactComponent)}function se(_,t){var n=_.alternate;return n===null?(n=Ct(_.tag,t,_.key,_.mode),n.elementType=_.elementType,n.type=_.type,n.stateNode=_.stateNode,n.alternate=_,_.alternate=n):(n.pendingProps=t,n.type=_.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=_.flags&65011712,n.childLanes=_.childLanes,n.lanes=_.lanes,n.child=_.child,n.memoizedProps=_.memoizedProps,n.memoizedState=_.memoizedState,n.updateQueue=_.updateQueue,t=_.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=_.sibling,n.index=_.index,n.ref=_.ref,n.refCleanup=_.refCleanup,n}function ju(_,t){_.flags&=65011714;var n=_.alternate;return n===null?(_.childLanes=0,_.lanes=t,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=n.childLanes,_.lanes=n.lanes,_.child=n.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=n.memoizedProps,_.memoizedState=n.memoizedState,_.updateQueue=n.updateQueue,_.type=n.type,t=n.dependencies,_.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),_}function _$(_,t,n,a,s,o){var c=0;if(a=_,typeof _=="function")wl(_)&&(c=1);else if(typeof _=="string")c=QA(_,n,C.current)?26:_==="html"||_==="head"||_==="body"?27:5;else _:switch(_){case p_:return _=Ct(31,n,t,s),_.elementType=p_,_.lanes=o,_;case X:return an(n.children,s,o,t);case Z:c=8,s|=24;break;case __:return _=Ct(12,n,t,s|2),_.elementType=__,_.lanes=o,_;case b:return _=Ct(13,n,t,s),_.elementType=b,_.lanes=o,_;case t_:return _=Ct(19,n,t,s),_.elementType=t_,_.lanes=o,_;default:if(typeof _=="object"&&_!==null)switch(_.$$typeof){case J:case k:c=10;break _;case n_:c=9;break _;case g:c=11;break _;case e_:c=14;break _;case W:c=16,a=null;break _}c=29,n=Error(l(130,_===null?"null":typeof _,"")),a=null}return t=Ct(c,n,t,s),t.elementType=_,t.type=a,t.lanes=o,t}function an(_,t,n,a){return _=Ct(7,_,a,t),_.lanes=n,_}function Wl(_,t,n){return _=Ct(6,_,null,t),_.lanes=n,_}function Yl(_,t,n){return t=Ct(4,_.children!==null?_.children:[],_.key,t),t.lanes=n,t.stateNode={containerInfo:_.containerInfo,pendingChildren:null,implementation:_.implementation},t}var Vn=[],wn=0,t$=null,e$=0,Vt=[],wt=0,$n=null,oe=1,re="";function ln(_,t){Vn[wn++]=e$,Vn[wn++]=t$,t$=_,e$=t}function Fu(_,t,n){Vt[wt++]=oe,Vt[wt++]=re,Vt[wt++]=$n,$n=_;var a=oe;_=re;var s=32-vt(a)-1;a&=~(1<<s),n+=1;var o=32-vt(t)+s;if(30<o){var c=s-s%5;o=(a&(1<<c)-1).toString(32),a>>=c,s-=c,oe=1<<32-vt(t)+s|n<<s|a,re=o+_}else oe=1<<o|n<<s|a,re=_}function jl(_){_.return!==null&&(ln(_,1),Fu(_,1,0))}function Fl(_){for(;_===t$;)t$=Vn[--wn],Vn[wn]=null,e$=Vn[--wn],Vn[wn]=null;for(;_===$n;)$n=Vt[--wt],Vt[wt]=null,re=Vt[--wt],Vt[wt]=null,oe=Vt[--wt],Vt[wt]=null}var At=null,K_=null,S_=!1,sn=null,Zt=!1,zl=Error(l(519));function on(_){var t=Error(l(418,""));throw Pa(Bt(t,_)),zl}function zu(_){var t=_.stateNode,n=_.type,a=_.memoizedProps;switch(t[Tt]=_,t[mt]=a,n){case"dialog":L_("cancel",t),L_("close",t);break;case"iframe":case"object":case"embed":L_("load",t);break;case"video":case"audio":for(n=0;n<li.length;n++)L_(li[n],t);break;case"source":L_("error",t);break;case"img":case"image":case"link":L_("error",t),L_("load",t);break;case"details":L_("toggle",t);break;case"input":L_("invalid",t),lu(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Wi(t);break;case"select":L_("invalid",t);break;case"textarea":L_("invalid",t),ou(t,a.value,a.defaultValue,a.children),Wi(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||rT(t.textContent,n)?(a.popover!=null&&(L_("beforetoggle",t),L_("toggle",t)),a.onScroll!=null&&L_("scroll",t),a.onScrollEnd!=null&&L_("scrollend",t),a.onClick!=null&&(t.onclick=U$),t=!0):t=!1,t||on(_)}function Xu(_){for(At=_.return;At;)switch(At.tag){case 5:case 13:Zt=!1;return;case 27:case 3:Zt=!0;return;default:At=At.return}}function Ha(_){if(_!==At)return!1;if(!S_)return Xu(_),S_=!0,!1;var t=_.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=_.type,n=!(n!=="form"&&n!=="button")||so(_.type,_.memoizedProps)),n=!n),n&&K_&&on(_),Xu(_),t===13){if(_=_.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(l(317));_:{for(_=_.nextSibling,t=0;_;){if(_.nodeType===8)if(n=_.data,n==="/$"){if(t===0){K_=kt(_.nextSibling);break _}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;_=_.nextSibling}K_=null}}else t===27?(t=K_,We(_.type)?(_=co,co=null,K_=_):K_=t):K_=At?kt(_.stateNode.nextSibling):null;return!0}function Ua(){K_=At=null,S_=!1}function Ku(){var _=sn;return _!==null&&(gt===null?gt=_:gt.push.apply(gt,_),sn=null),_}function Pa(_){sn===null?sn=[_]:sn.push(_)}var Xl=Y(null),rn=null,ue=null;function ve(_,t,n){p(Xl,t._currentValue),t._currentValue=n}function ce(_){_._currentValue=Xl.current,F(Xl)}function Kl(_,t,n){for(;_!==null;){var a=_.alternate;if((_.childLanes&t)!==t?(_.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),_===n)break;_=_.return}}function ql(_,t,n,a){var s=_.child;for(s!==null&&(s.return=_);s!==null;){var o=s.dependencies;if(o!==null){var c=s.child;o=o.firstContext;_:for(;o!==null;){var E=o;o=s;for(var m=0;m<t.length;m++)if(E.context===t[m]){o.lanes|=n,E=o.alternate,E!==null&&(E.lanes|=n),Kl(o.return,n,_),a||(c=null);break _}o=E.next}}else if(s.tag===18){if(c=s.return,c===null)throw Error(l(341));c.lanes|=n,o=c.alternate,o!==null&&(o.lanes|=n),Kl(c,n,_),c=null}else c=s.child;if(c!==null)c.return=s;else for(c=s;c!==null;){if(c===_){c=null;break}if(s=c.sibling,s!==null){s.return=c.return,c=s;break}c=c.return}s=c}}function Ba(_,t,n,a){_=null;for(var s=t,o=!1;s!==null;){if(!o){if((s.flags&524288)!==0)o=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var c=s.alternate;if(c===null)throw Error(l(387));if(c=c.memoizedProps,c!==null){var E=s.type;Nt(s.pendingProps.value,c.value)||(_!==null?_.push(E):_=[E])}}else if(s===U.current){if(c=s.alternate,c===null)throw Error(l(387));c.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(_!==null?_.push(fi):_=[fi])}s=s.return}_!==null&&ql(t,_,n,a),t.flags|=262144}function n$(_){for(_=_.firstContext;_!==null;){if(!Nt(_.context._currentValue,_.memoizedValue))return!0;_=_.next}return!1}function un(_){rn=_,ue=null,_=_.dependencies,_!==null&&(_.firstContext=null)}function dt(_){return qu(rn,_)}function a$(_,t){return rn===null&&un(_),qu(_,t)}function qu(_,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ue===null){if(_===null)throw Error(l(308));ue=t,_.dependencies={lanes:0,firstContext:t},_.flags|=524288}else ue=ue.next=t;return n}var kE=typeof AbortController<"u"?AbortController:function(){var _=[],t=this.signal={aborted:!1,addEventListener:function(n,a){_.push(a)}};this.abort=function(){t.aborted=!0,_.forEach(function(n){return n()})}},QE=e.unstable_scheduleCallback,ZE=e.unstable_NormalPriority,at={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kl(){return{controller:new kE,data:new Map,refCount:0}}function Ga(_){_.refCount--,_.refCount===0&&QE(ZE,function(){_.controller.abort()})}var Va=null,Ql=0,Wn=0,Yn=null;function JE(_,t){if(Va===null){var n=Va=[];Ql=0,Wn=Js(),Yn={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Ql++,t.then(ku,ku),t}function ku(){if(--Ql===0&&Va!==null){Yn!==null&&(Yn.status="fulfilled");var _=Va;Va=null,Wn=0,Yn=null;for(var t=0;t<_.length;t++)(0,_[t])()}}function _A(_,t){var n=[],a={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return _.then(function(){a.status="fulfilled",a.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(a.status="rejected",a.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),a}var Qu=B.S;B.S=function(_,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&JE(_,t),Qu!==null&&Qu(_,t)};var cn=Y(null);function Zl(){var _=cn.current;return _!==null?_:B_.pooledCache}function i$(_,t){t===null?p(cn,cn.current):p(cn,t.pool)}function Zu(){var _=Zl();return _===null?null:{parent:at._currentValue,pool:_}}var wa=Error(l(460)),Ju=Error(l(474)),$$=Error(l(542)),Jl={then:function(){}};function _c(_){return _=_.status,_==="fulfilled"||_==="rejected"}function l$(){}function tc(_,t,n){switch(n=_[n],n===void 0?_.push(t):n!==t&&(t.then(l$,l$),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw _=t.reason,nc(_),_;default:if(typeof t.status=="string")t.then(l$,l$);else{if(_=B_,_!==null&&100<_.shellSuspendCounter)throw Error(l(482));_=t,_.status="pending",_.then(function(a){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=a}},function(a){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw _=t.reason,nc(_),_}throw Wa=t,wa}}var Wa=null;function ec(){if(Wa===null)throw Error(l(459));var _=Wa;return Wa=null,_}function nc(_){if(_===wa||_===$$)throw Error(l(483))}var Ne=!1;function _s(_){_.updateQueue={baseState:_.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ts(_,t){_=_.updateQueue,t.updateQueue===_&&(t.updateQueue={baseState:_.baseState,firstBaseUpdate:_.firstBaseUpdate,lastBaseUpdate:_.lastBaseUpdate,shared:_.shared,callbacks:null})}function Ce(_){return{lane:_,tag:0,payload:null,callback:null,next:null}}function xe(_,t,n){var a=_.updateQueue;if(a===null)return null;if(a=a.shared,(C_&2)!==0){var s=a.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),a.pending=t,t=Ji(_),Yu(_,null,n),t}return Zi(_,a,t,n),Ji(_)}function Ya(_,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=_.pendingLanes,n|=a,t.lanes=n,kr(_,n)}}function es(_,t){var n=_.updateQueue,a=_.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var s=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var c={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?s=o=c:o=o.next=c,n=n.next}while(n!==null);o===null?s=o=t:o=o.next=t}else s=o=t;n={baseState:a.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:a.shared,callbacks:a.callbacks},_.updateQueue=n;return}_=n.lastBaseUpdate,_===null?n.firstBaseUpdate=t:_.next=t,n.lastBaseUpdate=t}var ns=!1;function ja(){if(ns){var _=Yn;if(_!==null)throw _}}function Fa(_,t,n,a){ns=!1;var s=_.updateQueue;Ne=!1;var o=s.firstBaseUpdate,c=s.lastBaseUpdate,E=s.shared.pending;if(E!==null){s.shared.pending=null;var m=E,O=m.next;m.next=null,c===null?o=O:c.next=O,c=m;var V=_.alternate;V!==null&&(V=V.updateQueue,E=V.lastBaseUpdate,E!==c&&(E===null?V.firstBaseUpdate=O:E.next=O,V.lastBaseUpdate=m))}if(o!==null){var j=s.baseState;c=0,V=O=m=null,E=o;do{var D=E.lane&-536870913,P=D!==E.lane;if(P?(y_&D)===D:(a&D)===D){D!==0&&D===Wn&&(ns=!0),V!==null&&(V=V.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});_:{var c_=_,r_=E;D=t;var D_=n;switch(r_.tag){case 1:if(c_=r_.payload,typeof c_=="function"){j=c_.call(D_,j,D);break _}j=c_;break _;case 3:c_.flags=c_.flags&-65537|128;case 0:if(c_=r_.payload,D=typeof c_=="function"?c_.call(D_,j,D):c_,D==null)break _;j=A({},j,D);break _;case 2:Ne=!0}}D=E.callback,D!==null&&(_.flags|=64,P&&(_.flags|=8192),P=s.callbacks,P===null?s.callbacks=[D]:P.push(D))}else P={lane:D,tag:E.tag,payload:E.payload,callback:E.callback,next:null},V===null?(O=V=P,m=j):V=V.next=P,c|=D;if(E=E.next,E===null){if(E=s.shared.pending,E===null)break;P=E,E=P.next,P.next=null,s.lastBaseUpdate=P,s.shared.pending=null}}while(!0);V===null&&(m=j),s.baseState=m,s.firstBaseUpdate=O,s.lastBaseUpdate=V,o===null&&(s.shared.lanes=0),Be|=c,_.lanes=c,_.memoizedState=j}}function ac(_,t){if(typeof _!="function")throw Error(l(191,_));_.call(t)}function ic(_,t){var n=_.callbacks;if(n!==null)for(_.callbacks=null,_=0;_<n.length;_++)ac(n[_],t)}var jn=Y(null),s$=Y(0);function $c(_,t){_=Le,p(s$,_),p(jn,t),Le=_|t.baseLanes}function as(){p(s$,Le),p(jn,jn.current)}function is(){Le=s$.current,F(jn),F(s$)}var be=0,h_=null,M_=null,tt=null,o$=!1,Fn=!1,fn=!1,r$=0,za=0,zn=null,tA=0;function Q_(){throw Error(l(321))}function $s(_,t){if(t===null)return!1;for(var n=0;n<t.length&&n<_.length;n++)if(!Nt(_[n],t[n]))return!1;return!0}function ls(_,t,n,a,s,o){return be=o,h_=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=_===null||_.memoizedState===null?Yc:jc,fn=!1,o=n(a,s),fn=!1,Fn&&(o=sc(t,n,a,s)),lc(_),o}function lc(_){B.H=h$;var t=M_!==null&&M_.next!==null;if(be=0,tt=M_=h_=null,o$=!1,za=0,zn=null,t)throw Error(l(300));_===null||lt||(_=_.dependencies,_!==null&&n$(_)&&(lt=!0))}function sc(_,t,n,a){h_=_;var s=0;do{if(Fn&&(zn=null),za=0,Fn=!1,25<=s)throw Error(l(301));if(s+=1,tt=M_=null,_.updateQueue!=null){var o=_.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}B.H=sA,o=t(n,a)}while(Fn);return o}function eA(){var _=B.H,t=_.useState()[0];return t=typeof t.then=="function"?Xa(t):t,_=_.useState()[0],(M_!==null?M_.memoizedState:null)!==_&&(h_.flags|=1024),t}function ss(){var _=r$!==0;return r$=0,_}function os(_,t,n){t.updateQueue=_.updateQueue,t.flags&=-2053,_.lanes&=~n}function rs(_){if(o$){for(_=_.memoizedState;_!==null;){var t=_.queue;t!==null&&(t.pending=null),_=_.next}o$=!1}be=0,tt=M_=h_=null,Fn=!1,za=r$=0,zn=null}function pt(){var _={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?h_.memoizedState=tt=_:tt=tt.next=_,tt}function et(){if(M_===null){var _=h_.alternate;_=_!==null?_.memoizedState:null}else _=M_.next;var t=tt===null?h_.memoizedState:tt.next;if(t!==null)tt=t,M_=_;else{if(_===null)throw h_.alternate===null?Error(l(467)):Error(l(310));M_=_,_={memoizedState:M_.memoizedState,baseState:M_.baseState,baseQueue:M_.baseQueue,queue:M_.queue,next:null},tt===null?h_.memoizedState=tt=_:tt=tt.next=_}return tt}function us(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xa(_){var t=za;return za+=1,zn===null&&(zn=[]),_=tc(zn,_,t),t=h_,(tt===null?t.memoizedState:tt.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?Yc:jc),_}function u$(_){if(_!==null&&typeof _=="object"){if(typeof _.then=="function")return Xa(_);if(_.$$typeof===k)return dt(_)}throw Error(l(438,String(_)))}function cs(_){var t=null,n=h_.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=h_.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=us(),h_.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(_),a=0;a<_;a++)n[a]=P_;return t.index++,n}function fe(_,t){return typeof t=="function"?t(_):t}function c$(_){var t=et();return fs(t,M_,_)}function fs(_,t,n){var a=_.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=n;var s=_.baseQueue,o=a.pending;if(o!==null){if(s!==null){var c=s.next;s.next=o.next,o.next=c}t.baseQueue=s=o,a.pending=null}if(o=_.baseState,s===null)_.memoizedState=o;else{t=s.next;var E=c=null,m=null,O=t,V=!1;do{var j=O.lane&-536870913;if(j!==O.lane?(y_&j)===j:(be&j)===j){var D=O.revertLane;if(D===0)m!==null&&(m=m.next={lane:0,revertLane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),j===Wn&&(V=!0);else if((be&D)===D){O=O.next,D===Wn&&(V=!0);continue}else j={lane:0,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},m===null?(E=m=j,c=o):m=m.next=j,h_.lanes|=D,Be|=D;j=O.action,fn&&n(o,j),o=O.hasEagerState?O.eagerState:n(o,j)}else D={lane:j,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},m===null?(E=m=D,c=o):m=m.next=D,h_.lanes|=j,Be|=j;O=O.next}while(O!==null&&O!==t);if(m===null?c=o:m.next=E,!Nt(o,_.memoizedState)&&(lt=!0,V&&(n=Yn,n!==null)))throw n;_.memoizedState=o,_.baseState=c,_.baseQueue=m,a.lastRenderedState=o}return s===null&&(a.lanes=0),[_.memoizedState,a.dispatch]}function Ts(_){var t=et(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=_;var a=n.dispatch,s=n.pending,o=t.memoizedState;if(s!==null){n.pending=null;var c=s=s.next;do o=_(o,c.action),c=c.next;while(c!==s);Nt(o,t.memoizedState)||(lt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,a]}function oc(_,t,n){var a=h_,s=et(),o=S_;if(o){if(n===void 0)throw Error(l(407));n=n()}else n=t();var c=!Nt((M_||s).memoizedState,n);c&&(s.memoizedState=n,lt=!0),s=s.queue;var E=cc.bind(null,a,s,_);if(Ka(2048,8,E,[_]),s.getSnapshot!==t||c||tt!==null&&tt.memoizedState.tag&1){if(a.flags|=2048,Xn(9,f$(),uc.bind(null,a,s,n,t),null),B_===null)throw Error(l(349));o||(be&124)!==0||rc(a,t,n)}return n}function rc(_,t,n){_.flags|=16384,_={getSnapshot:t,value:n},t=h_.updateQueue,t===null?(t=us(),h_.updateQueue=t,t.stores=[_]):(n=t.stores,n===null?t.stores=[_]:n.push(_))}function uc(_,t,n,a){t.value=n,t.getSnapshot=a,fc(t)&&Tc(_)}function cc(_,t,n){return n(function(){fc(t)&&Tc(_)})}function fc(_){var t=_.getSnapshot;_=_.value;try{var n=t();return!Nt(_,n)}catch{return!0}}function Tc(_){var t=Bn(_,2);t!==null&&Dt(t,_,2)}function ds(_){var t=pt();if(typeof _=="function"){var n=_;if(_=n(),fn){ge(!0);try{n()}finally{ge(!1)}}}return t.memoizedState=t.baseState=_,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fe,lastRenderedState:_},t}function dc(_,t,n,a){return _.baseState=n,fs(_,M_,typeof a=="function"?a:fe)}function nA(_,t,n,a,s){if(d$(_))throw Error(l(485));if(_=t.action,_!==null){var o={payload:s,action:_,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){o.listeners.push(c)}};B.T!==null?n(!0):o.isTransition=!1,a(o),n=t.pending,n===null?(o.next=t.pending=o,hc(t,o)):(o.next=n.next,t.pending=n.next=o)}}function hc(_,t){var n=t.action,a=t.payload,s=_.state;if(t.isTransition){var o=B.T,c={};B.T=c;try{var E=n(s,a),m=B.S;m!==null&&m(c,E),Ec(_,t,E)}catch(O){hs(_,t,O)}finally{B.T=o}}else try{o=n(s,a),Ec(_,t,o)}catch(O){hs(_,t,O)}}function Ec(_,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Ac(_,t,a)},function(a){return hs(_,t,a)}):Ac(_,t,n)}function Ac(_,t,n){t.status="fulfilled",t.value=n,Lc(t),_.state=n,t=_.pending,t!==null&&(n=t.next,n===t?_.pending=null:(n=n.next,t.next=n,hc(_,n)))}function hs(_,t,n){var a=_.pending;if(_.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Lc(t),t=t.next;while(t!==a)}_.action=null}function Lc(_){_=_.listeners;for(var t=0;t<_.length;t++)(0,_[t])()}function mc(_,t){return t}function yc(_,t){if(S_){var n=B_.formState;if(n!==null){_:{var a=h_;if(S_){if(K_){t:{for(var s=K_,o=Zt;s.nodeType!==8;){if(!o){s=null;break t}if(s=kt(s.nextSibling),s===null){s=null;break t}}o=s.data,s=o==="F!"||o==="F"?s:null}if(s){K_=kt(s.nextSibling),a=s.data==="F!";break _}}on(a)}a=!1}a&&(t=n[0])}}return n=pt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mc,lastRenderedState:t},n.queue=a,n=Vc.bind(null,h_,a),a.dispatch=n,a=ds(!1),o=ys.bind(null,h_,!1,a.queue),a=pt(),s={state:t,dispatch:null,action:_,pending:null},a.queue=s,n=nA.bind(null,h_,s,o,n),s.dispatch=n,a.memoizedState=_,[t,n,!1]}function pc(_){var t=et();return Ic(t,M_,_)}function Ic(_,t,n){if(t=fs(_,t,mc)[0],_=c$(fe)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Xa(t)}catch(c){throw c===wa?$$:c}else a=t;t=et();var s=t.queue,o=s.dispatch;return n!==t.memoizedState&&(h_.flags|=2048,Xn(9,f$(),aA.bind(null,s,n),null)),[a,o,_]}function aA(_,t){_.action=t}function gc(_){var t=et(),n=M_;if(n!==null)return Ic(t,n,_);et(),t=t.memoizedState,n=et();var a=n.queue.dispatch;return n.memoizedState=_,[t,a,!1]}function Xn(_,t,n,a){return _={tag:_,create:n,deps:a,inst:t,next:null},t=h_.updateQueue,t===null&&(t=us(),h_.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=_.next=_:(a=n.next,n.next=_,_.next=a,t.lastEffect=_),_}function f$(){return{destroy:void 0,resource:void 0}}function Rc(){return et().memoizedState}function T$(_,t,n,a){var s=pt();a=a===void 0?null:a,h_.flags|=_,s.memoizedState=Xn(1|t,f$(),n,a)}function Ka(_,t,n,a){var s=et();a=a===void 0?null:a;var o=s.memoizedState.inst;M_!==null&&a!==null&&$s(a,M_.memoizedState.deps)?s.memoizedState=Xn(t,o,n,a):(h_.flags|=_,s.memoizedState=Xn(1|t,o,n,a))}function Sc(_,t){T$(8390656,8,_,t)}function vc(_,t){Ka(2048,8,_,t)}function Nc(_,t){return Ka(4,2,_,t)}function Cc(_,t){return Ka(4,4,_,t)}function xc(_,t){if(typeof t=="function"){_=_();var n=t(_);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return _=_(),t.current=_,function(){t.current=null}}function bc(_,t,n){n=n!=null?n.concat([_]):null,Ka(4,4,xc.bind(null,t,_),n)}function Es(){}function Mc(_,t){var n=et();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&$s(t,a[1])?a[0]:(n.memoizedState=[_,t],_)}function Oc(_,t){var n=et();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&$s(t,a[1]))return a[0];if(a=_(),fn){ge(!0);try{_()}finally{ge(!1)}}return n.memoizedState=[a,t],a}function As(_,t,n){return n===void 0||(be&1073741824)!==0?_.memoizedState=t:(_.memoizedState=n,_=Pf(),h_.lanes|=_,Be|=_,n)}function Dc(_,t,n,a){return Nt(n,t)?n:jn.current!==null?(_=As(_,n,a),Nt(_,t)||(lt=!0),_):(be&42)===0?(lt=!0,_.memoizedState=n):(_=Pf(),h_.lanes|=_,Be|=_,t)}function Hc(_,t,n,a,s){var o=z.p;z.p=o!==0&&8>o?o:8;var c=B.T,E={};B.T=E,ys(_,!1,t,n);try{var m=s(),O=B.S;if(O!==null&&O(E,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var V=_A(m,a);qa(_,t,V,Ot(_))}else qa(_,t,a,Ot(_))}catch(j){qa(_,t,{then:function(){},status:"rejected",reason:j},Ot())}finally{z.p=o,B.T=c}}function iA(){}function Ls(_,t,n,a){if(_.tag!==5)throw Error(l(476));var s=Uc(_).queue;Hc(_,s,t,a_,n===null?iA:function(){return Pc(_),n(a)})}function Uc(_){var t=_.memoizedState;if(t!==null)return t;t={memoizedState:a_,baseState:a_,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fe,lastRenderedState:a_},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fe,lastRenderedState:n},next:null},_.memoizedState=t,_=_.alternate,_!==null&&(_.memoizedState=t),t}function Pc(_){var t=Uc(_).next.queue;qa(_,t,{},Ot())}function ms(){return dt(fi)}function Bc(){return et().memoizedState}function Gc(){return et().memoizedState}function $A(_){for(var t=_.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ot();_=Ce(n);var a=xe(t,_,n);a!==null&&(Dt(a,t,n),Ya(a,t,n)),t={cache:kl()},_.payload=t;return}t=t.return}}function lA(_,t,n){var a=Ot();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},d$(_)?wc(t,n):(n=Vl(_,t,n,a),n!==null&&(Dt(n,_,a),Wc(n,t,a)))}function Vc(_,t,n){var a=Ot();qa(_,t,n,a)}function qa(_,t,n,a){var s={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(d$(_))wc(t,s);else{var o=_.alternate;if(_.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var c=t.lastRenderedState,E=o(c,n);if(s.hasEagerState=!0,s.eagerState=E,Nt(E,c))return Zi(_,t,s,0),B_===null&&Qi(),!1}catch{}finally{}if(n=Vl(_,t,s,a),n!==null)return Dt(n,_,a),Wc(n,t,a),!0}return!1}function ys(_,t,n,a){if(a={lane:2,revertLane:Js(),action:a,hasEagerState:!1,eagerState:null,next:null},d$(_)){if(t)throw Error(l(479))}else t=Vl(_,n,a,2),t!==null&&Dt(t,_,2)}function d$(_){var t=_.alternate;return _===h_||t!==null&&t===h_}function wc(_,t){Fn=o$=!0;var n=_.pending;n===null?t.next=t:(t.next=n.next,n.next=t),_.pending=t}function Wc(_,t,n){if((n&4194048)!==0){var a=t.lanes;a&=_.pendingLanes,n|=a,t.lanes=n,kr(_,n)}}var h$={readContext:dt,use:u$,useCallback:Q_,useContext:Q_,useEffect:Q_,useImperativeHandle:Q_,useLayoutEffect:Q_,useInsertionEffect:Q_,useMemo:Q_,useReducer:Q_,useRef:Q_,useState:Q_,useDebugValue:Q_,useDeferredValue:Q_,useTransition:Q_,useSyncExternalStore:Q_,useId:Q_,useHostTransitionStatus:Q_,useFormState:Q_,useActionState:Q_,useOptimistic:Q_,useMemoCache:Q_,useCacheRefresh:Q_},Yc={readContext:dt,use:u$,useCallback:function(_,t){return pt().memoizedState=[_,t===void 0?null:t],_},useContext:dt,useEffect:Sc,useImperativeHandle:function(_,t,n){n=n!=null?n.concat([_]):null,T$(4194308,4,xc.bind(null,t,_),n)},useLayoutEffect:function(_,t){return T$(4194308,4,_,t)},useInsertionEffect:function(_,t){T$(4,2,_,t)},useMemo:function(_,t){var n=pt();t=t===void 0?null:t;var a=_();if(fn){ge(!0);try{_()}finally{ge(!1)}}return n.memoizedState=[a,t],a},useReducer:function(_,t,n){var a=pt();if(n!==void 0){var s=n(t);if(fn){ge(!0);try{n(t)}finally{ge(!1)}}}else s=t;return a.memoizedState=a.baseState=s,_={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_,lastRenderedState:s},a.queue=_,_=_.dispatch=lA.bind(null,h_,_),[a.memoizedState,_]},useRef:function(_){var t=pt();return _={current:_},t.memoizedState=_},useState:function(_){_=ds(_);var t=_.queue,n=Vc.bind(null,h_,t);return t.dispatch=n,[_.memoizedState,n]},useDebugValue:Es,useDeferredValue:function(_,t){var n=pt();return As(n,_,t)},useTransition:function(){var _=ds(!1);return _=Hc.bind(null,h_,_.queue,!0,!1),pt().memoizedState=_,[!1,_]},useSyncExternalStore:function(_,t,n){var a=h_,s=pt();if(S_){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),B_===null)throw Error(l(349));(y_&124)!==0||rc(a,t,n)}s.memoizedState=n;var o={value:n,getSnapshot:t};return s.queue=o,Sc(cc.bind(null,a,o,_),[_]),a.flags|=2048,Xn(9,f$(),uc.bind(null,a,o,n,t),null),n},useId:function(){var _=pt(),t=B_.identifierPrefix;if(S_){var n=re,a=oe;n=(a&~(1<<32-vt(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=r$++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=tA++,t="«"+t+"r"+n.toString(32)+"»";return _.memoizedState=t},useHostTransitionStatus:ms,useFormState:yc,useActionState:yc,useOptimistic:function(_){var t=pt();t.memoizedState=t.baseState=_;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ys.bind(null,h_,!0,n),n.dispatch=t,[_,t]},useMemoCache:cs,useCacheRefresh:function(){return pt().memoizedState=$A.bind(null,h_)}},jc={readContext:dt,use:u$,useCallback:Mc,useContext:dt,useEffect:vc,useImperativeHandle:bc,useInsertionEffect:Nc,useLayoutEffect:Cc,useMemo:Oc,useReducer:c$,useRef:Rc,useState:function(){return c$(fe)},useDebugValue:Es,useDeferredValue:function(_,t){var n=et();return Dc(n,M_.memoizedState,_,t)},useTransition:function(){var _=c$(fe)[0],t=et().memoizedState;return[typeof _=="boolean"?_:Xa(_),t]},useSyncExternalStore:oc,useId:Bc,useHostTransitionStatus:ms,useFormState:pc,useActionState:pc,useOptimistic:function(_,t){var n=et();return dc(n,M_,_,t)},useMemoCache:cs,useCacheRefresh:Gc},sA={readContext:dt,use:u$,useCallback:Mc,useContext:dt,useEffect:vc,useImperativeHandle:bc,useInsertionEffect:Nc,useLayoutEffect:Cc,useMemo:Oc,useReducer:Ts,useRef:Rc,useState:function(){return Ts(fe)},useDebugValue:Es,useDeferredValue:function(_,t){var n=et();return M_===null?As(n,_,t):Dc(n,M_.memoizedState,_,t)},useTransition:function(){var _=Ts(fe)[0],t=et().memoizedState;return[typeof _=="boolean"?_:Xa(_),t]},useSyncExternalStore:oc,useId:Bc,useHostTransitionStatus:ms,useFormState:gc,useActionState:gc,useOptimistic:function(_,t){var n=et();return M_!==null?dc(n,M_,_,t):(n.baseState=_,[_,n.queue.dispatch])},useMemoCache:cs,useCacheRefresh:Gc},Kn=null,ka=0;function E$(_){var t=ka;return ka+=1,Kn===null&&(Kn=[]),tc(Kn,_,t)}function Qa(_,t){t=t.props.ref,_.ref=t!==void 0?t:null}function A$(_,t){throw t.$$typeof===y?Error(l(525)):(_=Object.prototype.toString.call(t),Error(l(31,_==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":_)))}function Fc(_){var t=_._init;return t(_._payload)}function zc(_){function t(x,R){if(_){var M=x.deletions;M===null?(x.deletions=[R],x.flags|=16):M.push(R)}}function n(x,R){if(!_)return null;for(;R!==null;)t(x,R),R=R.sibling;return null}function a(x){for(var R=new Map;x!==null;)x.key!==null?R.set(x.key,x):R.set(x.index,x),x=x.sibling;return R}function s(x,R){return x=se(x,R),x.index=0,x.sibling=null,x}function o(x,R,M){return x.index=M,_?(M=x.alternate,M!==null?(M=M.index,M<R?(x.flags|=67108866,R):M):(x.flags|=67108866,R)):(x.flags|=1048576,R)}function c(x){return _&&x.alternate===null&&(x.flags|=67108866),x}function E(x,R,M,w){return R===null||R.tag!==6?(R=Wl(M,x.mode,w),R.return=x,R):(R=s(R,M),R.return=x,R)}function m(x,R,M,w){var $_=M.type;return $_===X?V(x,R,M.props.children,w,M.key):R!==null&&(R.elementType===$_||typeof $_=="object"&&$_!==null&&$_.$$typeof===W&&Fc($_)===R.type)?(R=s(R,M.props),Qa(R,M),R.return=x,R):(R=_$(M.type,M.key,M.props,null,x.mode,w),Qa(R,M),R.return=x,R)}function O(x,R,M,w){return R===null||R.tag!==4||R.stateNode.containerInfo!==M.containerInfo||R.stateNode.implementation!==M.implementation?(R=Yl(M,x.mode,w),R.return=x,R):(R=s(R,M.children||[]),R.return=x,R)}function V(x,R,M,w,$_){return R===null||R.tag!==7?(R=an(M,x.mode,w,$_),R.return=x,R):(R=s(R,M),R.return=x,R)}function j(x,R,M){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=Wl(""+R,x.mode,M),R.return=x,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case S:return M=_$(R.type,R.key,R.props,null,x.mode,M),Qa(M,R),M.return=x,M;case G:return R=Yl(R,x.mode,M),R.return=x,R;case W:var w=R._init;return R=w(R._payload),j(x,R,M)}if(m_(R)||N_(R))return R=an(R,x.mode,M,null),R.return=x,R;if(typeof R.then=="function")return j(x,E$(R),M);if(R.$$typeof===k)return j(x,a$(x,R),M);A$(x,R)}return null}function D(x,R,M,w){var $_=R!==null?R.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return $_!==null?null:E(x,R,""+M,w);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case S:return M.key===$_?m(x,R,M,w):null;case G:return M.key===$_?O(x,R,M,w):null;case W:return $_=M._init,M=$_(M._payload),D(x,R,M,w)}if(m_(M)||N_(M))return $_!==null?null:V(x,R,M,w,null);if(typeof M.then=="function")return D(x,R,E$(M),w);if(M.$$typeof===k)return D(x,R,a$(x,M),w);A$(x,M)}return null}function P(x,R,M,w,$_){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return x=x.get(M)||null,E(R,x,""+w,$_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case S:return x=x.get(w.key===null?M:w.key)||null,m(R,x,w,$_);case G:return x=x.get(w.key===null?M:w.key)||null,O(R,x,w,$_);case W:var E_=w._init;return w=E_(w._payload),P(x,R,M,w,$_)}if(m_(w)||N_(w))return x=x.get(M)||null,V(R,x,w,$_,null);if(typeof w.then=="function")return P(x,R,M,E$(w),$_);if(w.$$typeof===k)return P(x,R,M,a$(R,w),$_);A$(R,w)}return null}function c_(x,R,M,w){for(var $_=null,E_=null,o_=R,u_=R=0,ot=null;o_!==null&&u_<M.length;u_++){o_.index>u_?(ot=o_,o_=null):ot=o_.sibling;var g_=D(x,o_,M[u_],w);if(g_===null){o_===null&&(o_=ot);break}_&&o_&&g_.alternate===null&&t(x,o_),R=o(g_,R,u_),E_===null?$_=g_:E_.sibling=g_,E_=g_,o_=ot}if(u_===M.length)return n(x,o_),S_&&ln(x,u_),$_;if(o_===null){for(;u_<M.length;u_++)o_=j(x,M[u_],w),o_!==null&&(R=o(o_,R,u_),E_===null?$_=o_:E_.sibling=o_,E_=o_);return S_&&ln(x,u_),$_}for(o_=a(o_);u_<M.length;u_++)ot=P(o_,x,u_,M[u_],w),ot!==null&&(_&&ot.alternate!==null&&o_.delete(ot.key===null?u_:ot.key),R=o(ot,R,u_),E_===null?$_=ot:E_.sibling=ot,E_=ot);return _&&o_.forEach(function(Xe){return t(x,Xe)}),S_&&ln(x,u_),$_}function r_(x,R,M,w){if(M==null)throw Error(l(151));for(var $_=null,E_=null,o_=R,u_=R=0,ot=null,g_=M.next();o_!==null&&!g_.done;u_++,g_=M.next()){o_.index>u_?(ot=o_,o_=null):ot=o_.sibling;var Xe=D(x,o_,g_.value,w);if(Xe===null){o_===null&&(o_=ot);break}_&&o_&&Xe.alternate===null&&t(x,o_),R=o(Xe,R,u_),E_===null?$_=Xe:E_.sibling=Xe,E_=Xe,o_=ot}if(g_.done)return n(x,o_),S_&&ln(x,u_),$_;if(o_===null){for(;!g_.done;u_++,g_=M.next())g_=j(x,g_.value,w),g_!==null&&(R=o(g_,R,u_),E_===null?$_=g_:E_.sibling=g_,E_=g_);return S_&&ln(x,u_),$_}for(o_=a(o_);!g_.done;u_++,g_=M.next())g_=P(o_,x,u_,g_.value,w),g_!==null&&(_&&g_.alternate!==null&&o_.delete(g_.key===null?u_:g_.key),R=o(g_,R,u_),E_===null?$_=g_:E_.sibling=g_,E_=g_);return _&&o_.forEach(function(oL){return t(x,oL)}),S_&&ln(x,u_),$_}function D_(x,R,M,w){if(typeof M=="object"&&M!==null&&M.type===X&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case S:_:{for(var $_=M.key;R!==null;){if(R.key===$_){if($_=M.type,$_===X){if(R.tag===7){n(x,R.sibling),w=s(R,M.props.children),w.return=x,x=w;break _}}else if(R.elementType===$_||typeof $_=="object"&&$_!==null&&$_.$$typeof===W&&Fc($_)===R.type){n(x,R.sibling),w=s(R,M.props),Qa(w,M),w.return=x,x=w;break _}n(x,R);break}else t(x,R);R=R.sibling}M.type===X?(w=an(M.props.children,x.mode,w,M.key),w.return=x,x=w):(w=_$(M.type,M.key,M.props,null,x.mode,w),Qa(w,M),w.return=x,x=w)}return c(x);case G:_:{for($_=M.key;R!==null;){if(R.key===$_)if(R.tag===4&&R.stateNode.containerInfo===M.containerInfo&&R.stateNode.implementation===M.implementation){n(x,R.sibling),w=s(R,M.children||[]),w.return=x,x=w;break _}else{n(x,R);break}else t(x,R);R=R.sibling}w=Yl(M,x.mode,w),w.return=x,x=w}return c(x);case W:return $_=M._init,M=$_(M._payload),D_(x,R,M,w)}if(m_(M))return c_(x,R,M,w);if(N_(M)){if($_=N_(M),typeof $_!="function")throw Error(l(150));return M=$_.call(M),r_(x,R,M,w)}if(typeof M.then=="function")return D_(x,R,E$(M),w);if(M.$$typeof===k)return D_(x,R,a$(x,M),w);A$(x,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,R!==null&&R.tag===6?(n(x,R.sibling),w=s(R,M),w.return=x,x=w):(n(x,R),w=Wl(M,x.mode,w),w.return=x,x=w),c(x)):n(x,R)}return function(x,R,M,w){try{ka=0;var $_=D_(x,R,M,w);return Kn=null,$_}catch(o_){if(o_===wa||o_===$$)throw o_;var E_=Ct(29,o_,null,x.mode);return E_.lanes=w,E_.return=x,E_}finally{}}}var qn=zc(!0),Xc=zc(!1),Wt=Y(null),Jt=null;function Me(_){var t=_.alternate;p(it,it.current&1),p(Wt,_),Jt===null&&(t===null||jn.current!==null||t.memoizedState!==null)&&(Jt=_)}function Kc(_){if(_.tag===22){if(p(it,it.current),p(Wt,_),Jt===null){var t=_.alternate;t!==null&&t.memoizedState!==null&&(Jt=_)}}else Oe()}function Oe(){p(it,it.current),p(Wt,Wt.current)}function Te(_){F(Wt),Jt===_&&(Jt=null),F(it)}var it=Y(0);function L$(_){for(var t=_;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||uo(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===_)break;for(;t.sibling===null;){if(t.return===null||t.return===_)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ps(_,t,n,a){t=_.memoizedState,n=n(a,t),n=n==null?t:A({},t,n),_.memoizedState=n,_.lanes===0&&(_.updateQueue.baseState=n)}var Is={enqueueSetState:function(_,t,n){_=_._reactInternals;var a=Ot(),s=Ce(a);s.payload=t,n!=null&&(s.callback=n),t=xe(_,s,a),t!==null&&(Dt(t,_,a),Ya(t,_,a))},enqueueReplaceState:function(_,t,n){_=_._reactInternals;var a=Ot(),s=Ce(a);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=xe(_,s,a),t!==null&&(Dt(t,_,a),Ya(t,_,a))},enqueueForceUpdate:function(_,t){_=_._reactInternals;var n=Ot(),a=Ce(n);a.tag=2,t!=null&&(a.callback=t),t=xe(_,a,n),t!==null&&(Dt(t,_,n),Ya(t,_,n))}};function qc(_,t,n,a,s,o,c){return _=_.stateNode,typeof _.shouldComponentUpdate=="function"?_.shouldComponentUpdate(a,o,c):t.prototype&&t.prototype.isPureReactComponent?!Oa(n,a)||!Oa(s,o):!0}function kc(_,t,n,a){_=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==_&&Is.enqueueReplaceState(t,t.state,null)}function Tn(_,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(_=_.defaultProps){n===t&&(n=A({},n));for(var s in _)n[s]===void 0&&(n[s]=_[s])}return n}var m$=typeof reportError=="function"?reportError:function(_){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof _=="object"&&_!==null&&typeof _.message=="string"?String(_.message):String(_),error:_});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",_);return}console.error(_)};function Qc(_){m$(_)}function Zc(_){console.error(_)}function Jc(_){m$(_)}function y$(_,t){try{var n=_.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function _f(_,t,n){try{var a=_.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function gs(_,t,n){return n=Ce(n),n.tag=3,n.payload={element:null},n.callback=function(){y$(_,t)},n}function tf(_){return _=Ce(_),_.tag=3,_}function ef(_,t,n,a){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var o=a.value;_.payload=function(){return s(o)},_.callback=function(){_f(t,n,a)}}var c=n.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(_.callback=function(){_f(t,n,a),typeof s!="function"&&(Ge===null?Ge=new Set([this]):Ge.add(this));var E=a.stack;this.componentDidCatch(a.value,{componentStack:E!==null?E:""})})}function oA(_,t,n,a,s){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ba(t,n,s,!0),n=Wt.current,n!==null){switch(n.tag){case 13:return Jt===null?Ks():n.alternate===null&&q_===0&&(q_=3),n.flags&=-257,n.flags|=65536,n.lanes=s,a===Jl?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),ks(_,a,s)),!1;case 22:return n.flags|=65536,a===Jl?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),ks(_,a,s)),!1}throw Error(l(435,n.tag))}return ks(_,a,s),Ks(),!1}if(S_)return t=Wt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,a!==zl&&(_=Error(l(422),{cause:a}),Pa(Bt(_,n)))):(a!==zl&&(t=Error(l(423),{cause:a}),Pa(Bt(t,n))),_=_.current.alternate,_.flags|=65536,s&=-s,_.lanes|=s,a=Bt(a,n),s=gs(_.stateNode,a,s),es(_,s),q_!==4&&(q_=2)),!1;var o=Error(l(520),{cause:a});if(o=Bt(o,n),ai===null?ai=[o]:ai.push(o),q_!==4&&(q_=2),t===null)return!0;a=Bt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,_=s&-s,n.lanes|=_,_=gs(n.stateNode,a,_),es(n,_),!1;case 1:if(t=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Ge===null||!Ge.has(o))))return n.flags|=65536,s&=-s,n.lanes|=s,s=tf(s),ef(s,_,n,a),es(n,s),!1}n=n.return}while(n!==null);return!1}var nf=Error(l(461)),lt=!1;function rt(_,t,n,a){t.child=_===null?Xc(t,null,n,a):qn(t,_.child,n,a)}function af(_,t,n,a,s){n=n.render;var o=t.ref;if("ref"in a){var c={};for(var E in a)E!=="ref"&&(c[E]=a[E])}else c=a;return un(t),a=ls(_,t,n,c,o,s),E=ss(),_!==null&&!lt?(os(_,t,s),de(_,t,s)):(S_&&E&&jl(t),t.flags|=1,rt(_,t,a,s),t.child)}function $f(_,t,n,a,s){if(_===null){var o=n.type;return typeof o=="function"&&!wl(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,lf(_,t,o,a,s)):(_=_$(n.type,null,a,t,t.mode,s),_.ref=t.ref,_.return=t,t.child=_)}if(o=_.child,!Ms(_,s)){var c=o.memoizedProps;if(n=n.compare,n=n!==null?n:Oa,n(c,a)&&_.ref===t.ref)return de(_,t,s)}return t.flags|=1,_=se(o,a),_.ref=t.ref,_.return=t,t.child=_}function lf(_,t,n,a,s){if(_!==null){var o=_.memoizedProps;if(Oa(o,a)&&_.ref===t.ref)if(lt=!1,t.pendingProps=a=o,Ms(_,s))(_.flags&131072)!==0&&(lt=!0);else return t.lanes=_.lanes,de(_,t,s)}return Rs(_,t,n,a,s)}function sf(_,t,n){var a=t.pendingProps,s=a.children,o=_!==null?_.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=o!==null?o.baseLanes|n:n,_!==null){for(s=t.child=_.child,o=0;s!==null;)o=o|s.lanes|s.childLanes,s=s.sibling;t.childLanes=o&~a}else t.childLanes=0,t.child=null;return of(_,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},_!==null&&i$(t,o!==null?o.cachePool:null),o!==null?$c(t,o):as(),Kc(t);else return t.lanes=t.childLanes=536870912,of(_,t,o!==null?o.baseLanes|n:n,n)}else o!==null?(i$(t,o.cachePool),$c(t,o),Oe(),t.memoizedState=null):(_!==null&&i$(t,null),as(),Oe());return rt(_,t,s,n),t.child}function of(_,t,n,a){var s=Zl();return s=s===null?null:{parent:at._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},_!==null&&i$(t,null),as(),Kc(t),_!==null&&Ba(_,t,a,!0),null}function p$(_,t){var n=t.ref;if(n===null)_!==null&&_.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(l(284));(_===null||_.ref!==n)&&(t.flags|=4194816)}}function Rs(_,t,n,a,s){return un(t),n=ls(_,t,n,a,void 0,s),a=ss(),_!==null&&!lt?(os(_,t,s),de(_,t,s)):(S_&&a&&jl(t),t.flags|=1,rt(_,t,n,s),t.child)}function rf(_,t,n,a,s,o){return un(t),t.updateQueue=null,n=sc(t,a,n,s),lc(_),a=ss(),_!==null&&!lt?(os(_,t,o),de(_,t,o)):(S_&&a&&jl(t),t.flags|=1,rt(_,t,n,o),t.child)}function uf(_,t,n,a,s){if(un(t),t.stateNode===null){var o=Gn,c=n.contextType;typeof c=="object"&&c!==null&&(o=dt(c)),o=new n(a,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Is,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=a,o.state=t.memoizedState,o.refs={},_s(t),c=n.contextType,o.context=typeof c=="object"&&c!==null?dt(c):Gn,o.state=t.memoizedState,c=n.getDerivedStateFromProps,typeof c=="function"&&(ps(t,n,c,a),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(c=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),c!==o.state&&Is.enqueueReplaceState(o,o.state,null),Fa(t,a,o,s),ja(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(_===null){o=t.stateNode;var E=t.memoizedProps,m=Tn(n,E);o.props=m;var O=o.context,V=n.contextType;c=Gn,typeof V=="object"&&V!==null&&(c=dt(V));var j=n.getDerivedStateFromProps;V=typeof j=="function"||typeof o.getSnapshotBeforeUpdate=="function",E=t.pendingProps!==E,V||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(E||O!==c)&&kc(t,o,a,c),Ne=!1;var D=t.memoizedState;o.state=D,Fa(t,a,o,s),ja(),O=t.memoizedState,E||D!==O||Ne?(typeof j=="function"&&(ps(t,n,j,a),O=t.memoizedState),(m=Ne||qc(t,n,m,a,D,O,c))?(V||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=O),o.props=a,o.state=O,o.context=c,a=m):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,ts(_,t),c=t.memoizedProps,V=Tn(n,c),o.props=V,j=t.pendingProps,D=o.context,O=n.contextType,m=Gn,typeof O=="object"&&O!==null&&(m=dt(O)),E=n.getDerivedStateFromProps,(O=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==j||D!==m)&&kc(t,o,a,m),Ne=!1,D=t.memoizedState,o.state=D,Fa(t,a,o,s),ja();var P=t.memoizedState;c!==j||D!==P||Ne||_!==null&&_.dependencies!==null&&n$(_.dependencies)?(typeof E=="function"&&(ps(t,n,E,a),P=t.memoizedState),(V=Ne||qc(t,n,V,a,D,P,m)||_!==null&&_.dependencies!==null&&n$(_.dependencies))?(O||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,P,m),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,P,m)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||c===_.memoizedProps&&D===_.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===_.memoizedProps&&D===_.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=P),o.props=a,o.state=P,o.context=m,a=V):(typeof o.componentDidUpdate!="function"||c===_.memoizedProps&&D===_.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===_.memoizedProps&&D===_.memoizedState||(t.flags|=1024),a=!1)}return o=a,p$(_,t),a=(t.flags&128)!==0,o||a?(o=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,_!==null&&a?(t.child=qn(t,_.child,null,s),t.child=qn(t,null,n,s)):rt(_,t,n,s),t.memoizedState=o.state,_=t.child):_=de(_,t,s),_}function cf(_,t,n,a){return Ua(),t.flags|=256,rt(_,t,n,a),t.child}var Ss={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vs(_){return{baseLanes:_,cachePool:Zu()}}function Ns(_,t,n){return _=_!==null?_.childLanes&~n:0,t&&(_|=Yt),_}function ff(_,t,n){var a=t.pendingProps,s=!1,o=(t.flags&128)!==0,c;if((c=o)||(c=_!==null&&_.memoizedState===null?!1:(it.current&2)!==0),c&&(s=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,_===null){if(S_){if(s?Me(t):Oe(),S_){var E=K_,m;if(m=E){_:{for(m=E,E=Zt;m.nodeType!==8;){if(!E){E=null;break _}if(m=kt(m.nextSibling),m===null){E=null;break _}}E=m}E!==null?(t.memoizedState={dehydrated:E,treeContext:$n!==null?{id:oe,overflow:re}:null,retryLane:536870912,hydrationErrors:null},m=Ct(18,null,null,0),m.stateNode=E,m.return=t,t.child=m,At=t,K_=null,m=!0):m=!1}m||on(t)}if(E=t.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return uo(E)?t.lanes=32:t.lanes=536870912,null;Te(t)}return E=a.children,a=a.fallback,s?(Oe(),s=t.mode,E=I$({mode:"hidden",children:E},s),a=an(a,s,n,null),E.return=t,a.return=t,E.sibling=a,t.child=E,s=t.child,s.memoizedState=vs(n),s.childLanes=Ns(_,c,n),t.memoizedState=Ss,a):(Me(t),Cs(t,E))}if(m=_.memoizedState,m!==null&&(E=m.dehydrated,E!==null)){if(o)t.flags&256?(Me(t),t.flags&=-257,t=xs(_,t,n)):t.memoizedState!==null?(Oe(),t.child=_.child,t.flags|=128,t=null):(Oe(),s=a.fallback,E=t.mode,a=I$({mode:"visible",children:a.children},E),s=an(s,E,n,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,qn(t,_.child,null,n),a=t.child,a.memoizedState=vs(n),a.childLanes=Ns(_,c,n),t.memoizedState=Ss,t=s);else if(Me(t),uo(E)){if(c=E.nextSibling&&E.nextSibling.dataset,c)var O=c.dgst;c=O,a=Error(l(419)),a.stack="",a.digest=c,Pa({value:a,source:null,stack:null}),t=xs(_,t,n)}else if(lt||Ba(_,t,n,!1),c=(n&_.childLanes)!==0,lt||c){if(c=B_,c!==null&&(a=n&-n,a=(a&42)!==0?1:cl(a),a=(a&(c.suspendedLanes|n))!==0?0:a,a!==0&&a!==m.retryLane))throw m.retryLane=a,Bn(_,a),Dt(c,_,a),nf;E.data==="$?"||Ks(),t=xs(_,t,n)}else E.data==="$?"?(t.flags|=192,t.child=_.child,t=null):(_=m.treeContext,K_=kt(E.nextSibling),At=t,S_=!0,sn=null,Zt=!1,_!==null&&(Vt[wt++]=oe,Vt[wt++]=re,Vt[wt++]=$n,oe=_.id,re=_.overflow,$n=t),t=Cs(t,a.children),t.flags|=4096);return t}return s?(Oe(),s=a.fallback,E=t.mode,m=_.child,O=m.sibling,a=se(m,{mode:"hidden",children:a.children}),a.subtreeFlags=m.subtreeFlags&65011712,O!==null?s=se(O,s):(s=an(s,E,n,null),s.flags|=2),s.return=t,a.return=t,a.sibling=s,t.child=a,a=s,s=t.child,E=_.child.memoizedState,E===null?E=vs(n):(m=E.cachePool,m!==null?(O=at._currentValue,m=m.parent!==O?{parent:O,pool:O}:m):m=Zu(),E={baseLanes:E.baseLanes|n,cachePool:m}),s.memoizedState=E,s.childLanes=Ns(_,c,n),t.memoizedState=Ss,a):(Me(t),n=_.child,_=n.sibling,n=se(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,_!==null&&(c=t.deletions,c===null?(t.deletions=[_],t.flags|=16):c.push(_)),t.child=n,t.memoizedState=null,n)}function Cs(_,t){return t=I$({mode:"visible",children:t},_.mode),t.return=_,_.child=t}function I$(_,t){return _=Ct(22,_,null,t),_.lanes=0,_.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},_}function xs(_,t,n){return qn(t,_.child,null,n),_=Cs(t,t.pendingProps.children),_.flags|=2,t.memoizedState=null,_}function Tf(_,t,n){_.lanes|=t;var a=_.alternate;a!==null&&(a.lanes|=t),Kl(_.return,t,n)}function bs(_,t,n,a,s){var o=_.memoizedState;o===null?_.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=s)}function df(_,t,n){var a=t.pendingProps,s=a.revealOrder,o=a.tail;if(rt(_,t,a.children,n),a=it.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(_!==null&&(_.flags&128)!==0)_:for(_=t.child;_!==null;){if(_.tag===13)_.memoizedState!==null&&Tf(_,n,t);else if(_.tag===19)Tf(_,n,t);else if(_.child!==null){_.child.return=_,_=_.child;continue}if(_===t)break _;for(;_.sibling===null;){if(_.return===null||_.return===t)break _;_=_.return}_.sibling.return=_.return,_=_.sibling}a&=1}switch(p(it,a),s){case"forwards":for(n=t.child,s=null;n!==null;)_=n.alternate,_!==null&&L$(_)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),bs(t,!1,s,n,o);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(_=s.alternate,_!==null&&L$(_)===null){t.child=s;break}_=s.sibling,s.sibling=n,n=s,s=_}bs(t,!0,n,null,o);break;case"together":bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function de(_,t,n){if(_!==null&&(t.dependencies=_.dependencies),Be|=t.lanes,(n&t.childLanes)===0)if(_!==null){if(Ba(_,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(_!==null&&t.child!==_.child)throw Error(l(153));if(t.child!==null){for(_=t.child,n=se(_,_.pendingProps),t.child=n,n.return=t;_.sibling!==null;)_=_.sibling,n=n.sibling=se(_,_.pendingProps),n.return=t;n.sibling=null}return t.child}function Ms(_,t){return(_.lanes&t)!==0?!0:(_=_.dependencies,!!(_!==null&&n$(_)))}function rA(_,t,n){switch(t.tag){case 3:H(t,t.stateNode.containerInfo),ve(t,at,_.memoizedState.cache),Ua();break;case 27:case 5:q(t);break;case 4:H(t,t.stateNode.containerInfo);break;case 10:ve(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Me(t),t.flags|=128,null):(n&t.child.childLanes)!==0?ff(_,t,n):(Me(t),_=de(_,t,n),_!==null?_.sibling:null);Me(t);break;case 19:var s=(_.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ba(_,t,n,!1),a=(n&t.childLanes)!==0),s){if(a)return df(_,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),p(it,it.current),a)break;return null;case 22:case 23:return t.lanes=0,sf(_,t,n);case 24:ve(t,at,_.memoizedState.cache)}return de(_,t,n)}function hf(_,t,n){if(_!==null)if(_.memoizedProps!==t.pendingProps)lt=!0;else{if(!Ms(_,n)&&(t.flags&128)===0)return lt=!1,rA(_,t,n);lt=(_.flags&131072)!==0}else lt=!1,S_&&(t.flags&1048576)!==0&&Fu(t,e$,t.index);switch(t.lanes=0,t.tag){case 16:_:{_=t.pendingProps;var a=t.elementType,s=a._init;if(a=s(a._payload),t.type=a,typeof a=="function")wl(a)?(_=Tn(a,_),t.tag=1,t=uf(null,t,a,_,n)):(t.tag=0,t=Rs(null,t,a,_,n));else{if(a!=null){if(s=a.$$typeof,s===g){t.tag=11,t=af(null,t,a,_,n);break _}else if(s===e_){t.tag=14,t=$f(null,t,a,_,n);break _}}throw t=z_(a)||a,Error(l(306,t,""))}}return t;case 0:return Rs(_,t,t.type,t.pendingProps,n);case 1:return a=t.type,s=Tn(a,t.pendingProps),uf(_,t,a,s,n);case 3:_:{if(H(t,t.stateNode.containerInfo),_===null)throw Error(l(387));a=t.pendingProps;var o=t.memoizedState;s=o.element,ts(_,t),Fa(t,a,null,n);var c=t.memoizedState;if(a=c.cache,ve(t,at,a),a!==o.cache&&ql(t,[at],n,!0),ja(),a=c.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=cf(_,t,a,n);break _}else if(a!==s){s=Bt(Error(l(424)),t),Pa(s),t=cf(_,t,a,n);break _}else{switch(_=t.stateNode.containerInfo,_.nodeType){case 9:_=_.body;break;default:_=_.nodeName==="HTML"?_.ownerDocument.body:_}for(K_=kt(_.firstChild),At=t,S_=!0,sn=null,Zt=!0,n=Xc(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ua(),a===s){t=de(_,t,n);break _}rt(_,t,a,n)}t=t.child}return t;case 26:return p$(_,t),_===null?(n=mT(t.type,null,t.pendingProps,null))?t.memoizedState=n:S_||(n=t.type,_=t.pendingProps,a=P$(v.current).createElement(n),a[Tt]=t,a[mt]=_,ct(a,n,_),$t(a),t.stateNode=a):t.memoizedState=mT(t.type,_.memoizedProps,t.pendingProps,_.memoizedState),null;case 27:return q(t),_===null&&S_&&(a=t.stateNode=ET(t.type,t.pendingProps,v.current),At=t,Zt=!0,s=K_,We(t.type)?(co=s,K_=kt(a.firstChild)):K_=s),rt(_,t,t.pendingProps.children,n),p$(_,t),_===null&&(t.flags|=4194304),t.child;case 5:return _===null&&S_&&((s=a=K_)&&(a=BA(a,t.type,t.pendingProps,Zt),a!==null?(t.stateNode=a,At=t,K_=kt(a.firstChild),Zt=!1,s=!0):s=!1),s||on(t)),q(t),s=t.type,o=t.pendingProps,c=_!==null?_.memoizedProps:null,a=o.children,so(s,o)?a=null:c!==null&&so(s,c)&&(t.flags|=32),t.memoizedState!==null&&(s=ls(_,t,eA,null,null,n),fi._currentValue=s),p$(_,t),rt(_,t,a,n),t.child;case 6:return _===null&&S_&&((_=n=K_)&&(n=GA(n,t.pendingProps,Zt),n!==null?(t.stateNode=n,At=t,K_=null,_=!0):_=!1),_||on(t)),null;case 13:return ff(_,t,n);case 4:return H(t,t.stateNode.containerInfo),a=t.pendingProps,_===null?t.child=qn(t,null,a,n):rt(_,t,a,n),t.child;case 11:return af(_,t,t.type,t.pendingProps,n);case 7:return rt(_,t,t.pendingProps,n),t.child;case 8:return rt(_,t,t.pendingProps.children,n),t.child;case 12:return rt(_,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,ve(t,t.type,a.value),rt(_,t,a.children,n),t.child;case 9:return s=t.type._context,a=t.pendingProps.children,un(t),s=dt(s),a=a(s),t.flags|=1,rt(_,t,a,n),t.child;case 14:return $f(_,t,t.type,t.pendingProps,n);case 15:return lf(_,t,t.type,t.pendingProps,n);case 19:return df(_,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},_===null?(n=I$(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=se(_.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return sf(_,t,n);case 24:return un(t),a=dt(at),_===null?(s=Zl(),s===null&&(s=B_,o=kl(),s.pooledCache=o,o.refCount++,o!==null&&(s.pooledCacheLanes|=n),s=o),t.memoizedState={parent:a,cache:s},_s(t),ve(t,at,s)):((_.lanes&n)!==0&&(ts(_,t),Fa(t,null,null,n),ja()),s=_.memoizedState,o=t.memoizedState,s.parent!==a?(s={parent:a,cache:a},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),ve(t,at,a)):(a=o.cache,ve(t,at,a),a!==s.cache&&ql(t,[at],n,!0))),rt(_,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function he(_){_.flags|=4}function Ef(_,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)_.flags&=-16777217;else if(_.flags|=16777216,!RT(t)){if(t=Wt.current,t!==null&&((y_&4194048)===y_?Jt!==null:(y_&62914560)!==y_&&(y_&536870912)===0||t!==Jt))throw Wa=Jl,Ju;_.flags|=8192}}function g$(_,t){t!==null&&(_.flags|=4),_.flags&16384&&(t=_.tag!==22?Kr():536870912,_.lanes|=t,Jn|=t)}function Za(_,t){if(!S_)switch(_.tailMode){case"hidden":t=_.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?_.tail=null:n.sibling=null;break;case"collapsed":n=_.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||_.tail===null?_.tail=null:_.tail.sibling=null:a.sibling=null}}function j_(_){var t=_.alternate!==null&&_.alternate.child===_.child,n=0,a=0;if(t)for(var s=_.child;s!==null;)n|=s.lanes|s.childLanes,a|=s.subtreeFlags&65011712,a|=s.flags&65011712,s.return=_,s=s.sibling;else for(s=_.child;s!==null;)n|=s.lanes|s.childLanes,a|=s.subtreeFlags,a|=s.flags,s.return=_,s=s.sibling;return _.subtreeFlags|=a,_.childLanes=n,t}function uA(_,t,n){var a=t.pendingProps;switch(Fl(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return j_(t),null;case 1:return j_(t),null;case 3:return n=t.stateNode,a=null,_!==null&&(a=_.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ce(at),Q(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(_===null||_.child===null)&&(Ha(t)?he(t):_===null||_.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ku())),j_(t),null;case 26:return n=t.memoizedState,_===null?(he(t),n!==null?(j_(t),Ef(t,n)):(j_(t),t.flags&=-16777217)):n?n!==_.memoizedState?(he(t),j_(t),Ef(t,n)):(j_(t),t.flags&=-16777217):(_.memoizedProps!==a&&he(t),j_(t),t.flags&=-16777217),null;case 27:K(t),n=v.current;var s=t.type;if(_!==null&&t.stateNode!=null)_.memoizedProps!==a&&he(t);else{if(!a){if(t.stateNode===null)throw Error(l(166));return j_(t),null}_=C.current,Ha(t)?zu(t):(_=ET(s,a,n),t.stateNode=_,he(t))}return j_(t),null;case 5:if(K(t),n=t.type,_!==null&&t.stateNode!=null)_.memoizedProps!==a&&he(t);else{if(!a){if(t.stateNode===null)throw Error(l(166));return j_(t),null}if(_=C.current,Ha(t))zu(t);else{switch(s=P$(v.current),_){case 1:_=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:_=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":_=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":_=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":_=s.createElement("div"),_.innerHTML="<script><\/script>",_=_.removeChild(_.firstChild);break;case"select":_=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?_.multiple=!0:a.size&&(_.size=a.size);break;default:_=typeof a.is=="string"?s.createElement(n,{is:a.is}):s.createElement(n)}}_[Tt]=t,_[mt]=a;_:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)_.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break _;for(;s.sibling===null;){if(s.return===null||s.return===t)break _;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=_;_:switch(ct(_,n,a),n){case"button":case"input":case"select":case"textarea":_=!!a.autoFocus;break _;case"img":_=!0;break _;default:_=!1}_&&he(t)}}return j_(t),t.flags&=-16777217,null;case 6:if(_&&t.stateNode!=null)_.memoizedProps!==a&&he(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(l(166));if(_=v.current,Ha(t)){if(_=t.stateNode,n=t.memoizedProps,a=null,s=At,s!==null)switch(s.tag){case 27:case 5:a=s.memoizedProps}_[Tt]=t,_=!!(_.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||rT(_.nodeValue,n)),_||on(t)}else _=P$(_).createTextNode(a),_[Tt]=t,t.stateNode=_}return j_(t),null;case 13:if(a=t.memoizedState,_===null||_.memoizedState!==null&&_.memoizedState.dehydrated!==null){if(s=Ha(t),a!==null&&a.dehydrated!==null){if(_===null){if(!s)throw Error(l(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(l(317));s[Tt]=t}else Ua(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;j_(t),s=!1}else s=Ku(),_!==null&&_.memoizedState!==null&&(_.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Te(t),t):(Te(t),null)}if(Te(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,_=_!==null&&_.memoizedState!==null,n){a=t.child,s=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(s=a.alternate.memoizedState.cachePool.pool);var o=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==s&&(a.flags|=2048)}return n!==_&&n&&(t.child.flags|=8192),g$(t,t.updateQueue),j_(t),null;case 4:return Q(),_===null&&no(t.stateNode.containerInfo),j_(t),null;case 10:return ce(t.type),j_(t),null;case 19:if(F(it),s=t.memoizedState,s===null)return j_(t),null;if(a=(t.flags&128)!==0,o=s.rendering,o===null)if(a)Za(s,!1);else{if(q_!==0||_!==null&&(_.flags&128)!==0)for(_=t.child;_!==null;){if(o=L$(_),o!==null){for(t.flags|=128,Za(s,!1),_=o.updateQueue,t.updateQueue=_,g$(t,_),t.subtreeFlags=0,_=n,n=t.child;n!==null;)ju(n,_),n=n.sibling;return p(it,it.current&1|2),t.child}_=_.sibling}s.tail!==null&&G_()>v$&&(t.flags|=128,a=!0,Za(s,!1),t.lanes=4194304)}else{if(!a)if(_=L$(o),_!==null){if(t.flags|=128,a=!0,_=_.updateQueue,t.updateQueue=_,g$(t,_),Za(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!S_)return j_(t),null}else 2*G_()-s.renderingStartTime>v$&&n!==536870912&&(t.flags|=128,a=!0,Za(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(_=s.last,_!==null?_.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=G_(),t.sibling=null,_=it.current,p(it,a?_&1|2:_&1),t):(j_(t),null);case 22:case 23:return Te(t),is(),a=t.memoizedState!==null,_!==null?_.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(j_(t),t.subtreeFlags&6&&(t.flags|=8192)):j_(t),n=t.updateQueue,n!==null&&g$(t,n.retryQueue),n=null,_!==null&&_.memoizedState!==null&&_.memoizedState.cachePool!==null&&(n=_.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),_!==null&&F(cn),null;case 24:return n=null,_!==null&&(n=_.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ce(at),j_(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function cA(_,t){switch(Fl(t),t.tag){case 1:return _=t.flags,_&65536?(t.flags=_&-65537|128,t):null;case 3:return ce(at),Q(),_=t.flags,(_&65536)!==0&&(_&128)===0?(t.flags=_&-65537|128,t):null;case 26:case 27:case 5:return K(t),null;case 13:if(Te(t),_=t.memoizedState,_!==null&&_.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Ua()}return _=t.flags,_&65536?(t.flags=_&-65537|128,t):null;case 19:return F(it),null;case 4:return Q(),null;case 10:return ce(t.type),null;case 22:case 23:return Te(t),is(),_!==null&&F(cn),_=t.flags,_&65536?(t.flags=_&-65537|128,t):null;case 24:return ce(at),null;case 25:return null;default:return null}}function Af(_,t){switch(Fl(t),t.tag){case 3:ce(at),Q();break;case 26:case 27:case 5:K(t);break;case 4:Q();break;case 13:Te(t);break;case 19:F(it);break;case 10:ce(t.type);break;case 22:case 23:Te(t),is(),_!==null&&F(cn);break;case 24:ce(at)}}function Ja(_,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var s=a.next;n=s;do{if((n.tag&_)===_){a=void 0;var o=n.create,c=n.inst;a=o(),c.destroy=a}n=n.next}while(n!==s)}}catch(E){U_(t,t.return,E)}}function De(_,t,n){try{var a=t.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var o=s.next;a=o;do{if((a.tag&_)===_){var c=a.inst,E=c.destroy;if(E!==void 0){c.destroy=void 0,s=t;var m=n,O=E;try{O()}catch(V){U_(s,m,V)}}}a=a.next}while(a!==o)}}catch(V){U_(t,t.return,V)}}function Lf(_){var t=_.updateQueue;if(t!==null){var n=_.stateNode;try{ic(t,n)}catch(a){U_(_,_.return,a)}}}function mf(_,t,n){n.props=Tn(_.type,_.memoizedProps),n.state=_.memoizedState;try{n.componentWillUnmount()}catch(a){U_(_,t,a)}}function _i(_,t){try{var n=_.ref;if(n!==null){switch(_.tag){case 26:case 27:case 5:var a=_.stateNode;break;case 30:a=_.stateNode;break;default:a=_.stateNode}typeof n=="function"?_.refCleanup=n(a):n.current=a}}catch(s){U_(_,t,s)}}function _e(_,t){var n=_.ref,a=_.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(s){U_(_,t,s)}finally{_.refCleanup=null,_=_.alternate,_!=null&&(_.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){U_(_,t,s)}else n.current=null}function yf(_){var t=_.type,n=_.memoizedProps,a=_.stateNode;try{_:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break _;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(s){U_(_,_.return,s)}}function Os(_,t,n){try{var a=_.stateNode;OA(a,_.type,n,t),a[mt]=t}catch(s){U_(_,_.return,s)}}function pf(_){return _.tag===5||_.tag===3||_.tag===26||_.tag===27&&We(_.type)||_.tag===4}function Ds(_){_:for(;;){for(;_.sibling===null;){if(_.return===null||pf(_.return))return null;_=_.return}for(_.sibling.return=_.return,_=_.sibling;_.tag!==5&&_.tag!==6&&_.tag!==18;){if(_.tag===27&&We(_.type)||_.flags&2||_.child===null||_.tag===4)continue _;_.child.return=_,_=_.child}if(!(_.flags&2))return _.stateNode}}function Hs(_,t,n){var a=_.tag;if(a===5||a===6)_=_.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(_,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(_),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=U$));else if(a!==4&&(a===27&&We(_.type)&&(n=_.stateNode,t=null),_=_.child,_!==null))for(Hs(_,t,n),_=_.sibling;_!==null;)Hs(_,t,n),_=_.sibling}function R$(_,t,n){var a=_.tag;if(a===5||a===6)_=_.stateNode,t?n.insertBefore(_,t):n.appendChild(_);else if(a!==4&&(a===27&&We(_.type)&&(n=_.stateNode),_=_.child,_!==null))for(R$(_,t,n),_=_.sibling;_!==null;)R$(_,t,n),_=_.sibling}function If(_){var t=_.stateNode,n=_.memoizedProps;try{for(var a=_.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);ct(t,a,n),t[Tt]=_,t[mt]=n}catch(o){U_(_,_.return,o)}}var Ee=!1,Z_=!1,Us=!1,gf=typeof WeakSet=="function"?WeakSet:Set,st=null;function fA(_,t){if(_=_.containerInfo,$o=Y$,_=Du(_),Dl(_)){if("selectionStart"in _)var n={start:_.selectionStart,end:_.selectionEnd};else _:{n=(n=_.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var s=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break _}var c=0,E=-1,m=-1,O=0,V=0,j=_,D=null;t:for(;;){for(var P;j!==n||s!==0&&j.nodeType!==3||(E=c+s),j!==o||a!==0&&j.nodeType!==3||(m=c+a),j.nodeType===3&&(c+=j.nodeValue.length),(P=j.firstChild)!==null;)D=j,j=P;for(;;){if(j===_)break t;if(D===n&&++O===s&&(E=c),D===o&&++V===a&&(m=c),(P=j.nextSibling)!==null)break;j=D,D=j.parentNode}j=P}n=E===-1||m===-1?null:{start:E,end:m}}else n=null}n=n||{start:0,end:0}}else n=null;for(lo={focusedElem:_,selectionRange:n},Y$=!1,st=t;st!==null;)if(t=st,_=t.child,(t.subtreeFlags&1024)!==0&&_!==null)_.return=t,st=_;else for(;st!==null;){switch(t=st,o=t.alternate,_=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((_&1024)!==0&&o!==null){_=void 0,n=t,s=o.memoizedProps,o=o.memoizedState,a=n.stateNode;try{var c_=Tn(n.type,s,n.elementType===n.type);_=a.getSnapshotBeforeUpdate(c_,o),a.__reactInternalSnapshotBeforeUpdate=_}catch(r_){U_(n,n.return,r_)}}break;case 3:if((_&1024)!==0){if(_=t.stateNode.containerInfo,n=_.nodeType,n===9)ro(_);else if(n===1)switch(_.nodeName){case"HEAD":case"HTML":case"BODY":ro(_);break;default:_.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((_&1024)!==0)throw Error(l(163))}if(_=t.sibling,_!==null){_.return=t.return,st=_;break}st=t.return}}function Rf(_,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:He(_,n),a&4&&Ja(5,n);break;case 1:if(He(_,n),a&4)if(_=n.stateNode,t===null)try{_.componentDidMount()}catch(c){U_(n,n.return,c)}else{var s=Tn(n.type,t.memoizedProps);t=t.memoizedState;try{_.componentDidUpdate(s,t,_.__reactInternalSnapshotBeforeUpdate)}catch(c){U_(n,n.return,c)}}a&64&&Lf(n),a&512&&_i(n,n.return);break;case 3:if(He(_,n),a&64&&(_=n.updateQueue,_!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ic(_,t)}catch(c){U_(n,n.return,c)}}break;case 27:t===null&&a&4&&If(n);case 26:case 5:He(_,n),t===null&&a&4&&yf(n),a&512&&_i(n,n.return);break;case 12:He(_,n);break;case 13:He(_,n),a&4&&Nf(_,n),a&64&&(_=n.memoizedState,_!==null&&(_=_.dehydrated,_!==null&&(n=pA.bind(null,n),VA(_,n))));break;case 22:if(a=n.memoizedState!==null||Ee,!a){t=t!==null&&t.memoizedState!==null||Z_,s=Ee;var o=Z_;Ee=a,(Z_=t)&&!o?Ue(_,n,(n.subtreeFlags&8772)!==0):He(_,n),Ee=s,Z_=o}break;case 30:break;default:He(_,n)}}function Sf(_){var t=_.alternate;t!==null&&(_.alternate=null,Sf(t)),_.child=null,_.deletions=null,_.sibling=null,_.tag===5&&(t=_.stateNode,t!==null&&dl(t)),_.stateNode=null,_.return=null,_.dependencies=null,_.memoizedProps=null,_.memoizedState=null,_.pendingProps=null,_.stateNode=null,_.updateQueue=null}var w_=null,It=!1;function Ae(_,t,n){for(n=n.child;n!==null;)vf(_,t,n),n=n.sibling}function vf(_,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(ya,n)}catch{}switch(n.tag){case 26:Z_||_e(n,t),Ae(_,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Z_||_e(n,t);var a=w_,s=It;We(n.type)&&(w_=n.stateNode,It=!1),Ae(_,t,n),oi(n.stateNode),w_=a,It=s;break;case 5:Z_||_e(n,t);case 6:if(a=w_,s=It,w_=null,Ae(_,t,n),w_=a,It=s,w_!==null)if(It)try{(w_.nodeType===9?w_.body:w_.nodeName==="HTML"?w_.ownerDocument.body:w_).removeChild(n.stateNode)}catch(o){U_(n,t,o)}else try{w_.removeChild(n.stateNode)}catch(o){U_(n,t,o)}break;case 18:w_!==null&&(It?(_=w_,dT(_.nodeType===9?_.body:_.nodeName==="HTML"?_.ownerDocument.body:_,n.stateNode),Ei(_)):dT(w_,n.stateNode));break;case 4:a=w_,s=It,w_=n.stateNode.containerInfo,It=!0,Ae(_,t,n),w_=a,It=s;break;case 0:case 11:case 14:case 15:Z_||De(2,n,t),Z_||De(4,n,t),Ae(_,t,n);break;case 1:Z_||(_e(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&mf(n,t,a)),Ae(_,t,n);break;case 21:Ae(_,t,n);break;case 22:Z_=(a=Z_)||n.memoizedState!==null,Ae(_,t,n),Z_=a;break;default:Ae(_,t,n)}}function Nf(_,t){if(t.memoizedState===null&&(_=t.alternate,_!==null&&(_=_.memoizedState,_!==null&&(_=_.dehydrated,_!==null))))try{Ei(_)}catch(n){U_(t,t.return,n)}}function TA(_){switch(_.tag){case 13:case 19:var t=_.stateNode;return t===null&&(t=_.stateNode=new gf),t;case 22:return _=_.stateNode,t=_._retryCache,t===null&&(t=_._retryCache=new gf),t;default:throw Error(l(435,_.tag))}}function Ps(_,t){var n=TA(_);t.forEach(function(a){var s=IA.bind(null,_,a);n.has(a)||(n.add(a),a.then(s,s))})}function xt(_,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var s=n[a],o=_,c=t,E=c;_:for(;E!==null;){switch(E.tag){case 27:if(We(E.type)){w_=E.stateNode,It=!1;break _}break;case 5:w_=E.stateNode,It=!1;break _;case 3:case 4:w_=E.stateNode.containerInfo,It=!0;break _}E=E.return}if(w_===null)throw Error(l(160));vf(o,c,s),w_=null,It=!1,o=s.alternate,o!==null&&(o.return=null),s.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Cf(t,_),t=t.sibling}var qt=null;function Cf(_,t){var n=_.alternate,a=_.flags;switch(_.tag){case 0:case 11:case 14:case 15:xt(t,_),bt(_),a&4&&(De(3,_,_.return),Ja(3,_),De(5,_,_.return));break;case 1:xt(t,_),bt(_),a&512&&(Z_||n===null||_e(n,n.return)),a&64&&Ee&&(_=_.updateQueue,_!==null&&(a=_.callbacks,a!==null&&(n=_.shared.hiddenCallbacks,_.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var s=qt;if(xt(t,_),bt(_),a&512&&(Z_||n===null||_e(n,n.return)),a&4){var o=n!==null?n.memoizedState:null;if(a=_.memoizedState,n===null)if(a===null)if(_.stateNode===null){_:{a=_.type,n=_.memoizedProps,s=s.ownerDocument||s;t:switch(a){case"title":o=s.getElementsByTagName("title")[0],(!o||o[ga]||o[Tt]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=s.createElement(a),s.head.insertBefore(o,s.querySelector("head > title"))),ct(o,a,n),o[Tt]=_,$t(o),a=o;break _;case"link":var c=IT("link","href",s).get(a+(n.href||""));if(c){for(var E=0;E<c.length;E++)if(o=c[E],o.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){c.splice(E,1);break t}}o=s.createElement(a),ct(o,a,n),s.head.appendChild(o);break;case"meta":if(c=IT("meta","content",s).get(a+(n.content||""))){for(E=0;E<c.length;E++)if(o=c[E],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){c.splice(E,1);break t}}o=s.createElement(a),ct(o,a,n),s.head.appendChild(o);break;default:throw Error(l(468,a))}o[Tt]=_,$t(o),a=o}_.stateNode=a}else gT(s,_.type,_.stateNode);else _.stateNode=pT(s,a,_.memoizedProps);else o!==a?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,a===null?gT(s,_.type,_.stateNode):pT(s,a,_.memoizedProps)):a===null&&_.stateNode!==null&&Os(_,_.memoizedProps,n.memoizedProps)}break;case 27:xt(t,_),bt(_),a&512&&(Z_||n===null||_e(n,n.return)),n!==null&&a&4&&Os(_,_.memoizedProps,n.memoizedProps);break;case 5:if(xt(t,_),bt(_),a&512&&(Z_||n===null||_e(n,n.return)),_.flags&32){s=_.stateNode;try{bn(s,"")}catch(P){U_(_,_.return,P)}}a&4&&_.stateNode!=null&&(s=_.memoizedProps,Os(_,s,n!==null?n.memoizedProps:s)),a&1024&&(Us=!0);break;case 6:if(xt(t,_),bt(_),a&4){if(_.stateNode===null)throw Error(l(162));a=_.memoizedProps,n=_.stateNode;try{n.nodeValue=a}catch(P){U_(_,_.return,P)}}break;case 3:if(V$=null,s=qt,qt=B$(t.containerInfo),xt(t,_),qt=s,bt(_),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Ei(t.containerInfo)}catch(P){U_(_,_.return,P)}Us&&(Us=!1,xf(_));break;case 4:a=qt,qt=B$(_.stateNode.containerInfo),xt(t,_),bt(_),qt=a;break;case 12:xt(t,_),bt(_);break;case 13:xt(t,_),bt(_),_.child.flags&8192&&_.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ys=G_()),a&4&&(a=_.updateQueue,a!==null&&(_.updateQueue=null,Ps(_,a)));break;case 22:s=_.memoizedState!==null;var m=n!==null&&n.memoizedState!==null,O=Ee,V=Z_;if(Ee=O||s,Z_=V||m,xt(t,_),Z_=V,Ee=O,bt(_),a&8192)_:for(t=_.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||m||Ee||Z_||dn(_)),n=null,t=_;;){if(t.tag===5||t.tag===26){if(n===null){m=n=t;try{if(o=m.stateNode,s)c=o.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{E=m.stateNode;var j=m.memoizedProps.style,D=j!=null&&j.hasOwnProperty("display")?j.display:null;E.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(P){U_(m,m.return,P)}}}else if(t.tag===6){if(n===null){m=t;try{m.stateNode.nodeValue=s?"":m.memoizedProps}catch(P){U_(m,m.return,P)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===_)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===_)break _;for(;t.sibling===null;){if(t.return===null||t.return===_)break _;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=_.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Ps(_,n))));break;case 19:xt(t,_),bt(_),a&4&&(a=_.updateQueue,a!==null&&(_.updateQueue=null,Ps(_,a)));break;case 30:break;case 21:break;default:xt(t,_),bt(_)}}function bt(_){var t=_.flags;if(t&2){try{for(var n,a=_.return;a!==null;){if(pf(a)){n=a;break}a=a.return}if(n==null)throw Error(l(160));switch(n.tag){case 27:var s=n.stateNode,o=Ds(_);R$(_,o,s);break;case 5:var c=n.stateNode;n.flags&32&&(bn(c,""),n.flags&=-33);var E=Ds(_);R$(_,E,c);break;case 3:case 4:var m=n.stateNode.containerInfo,O=Ds(_);Hs(_,O,m);break;default:throw Error(l(161))}}catch(V){U_(_,_.return,V)}_.flags&=-3}t&4096&&(_.flags&=-4097)}function xf(_){if(_.subtreeFlags&1024)for(_=_.child;_!==null;){var t=_;xf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),_=_.sibling}}function He(_,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Rf(_,t.alternate,t),t=t.sibling}function dn(_){for(_=_.child;_!==null;){var t=_;switch(t.tag){case 0:case 11:case 14:case 15:De(4,t,t.return),dn(t);break;case 1:_e(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&mf(t,t.return,n),dn(t);break;case 27:oi(t.stateNode);case 26:case 5:_e(t,t.return),dn(t);break;case 22:t.memoizedState===null&&dn(t);break;case 30:dn(t);break;default:dn(t)}_=_.sibling}}function Ue(_,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,s=_,o=t,c=o.flags;switch(o.tag){case 0:case 11:case 15:Ue(s,o,n),Ja(4,o);break;case 1:if(Ue(s,o,n),a=o,s=a.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(O){U_(a,a.return,O)}if(a=o,s=a.updateQueue,s!==null){var E=a.stateNode;try{var m=s.shared.hiddenCallbacks;if(m!==null)for(s.shared.hiddenCallbacks=null,s=0;s<m.length;s++)ac(m[s],E)}catch(O){U_(a,a.return,O)}}n&&c&64&&Lf(o),_i(o,o.return);break;case 27:If(o);case 26:case 5:Ue(s,o,n),n&&a===null&&c&4&&yf(o),_i(o,o.return);break;case 12:Ue(s,o,n);break;case 13:Ue(s,o,n),n&&c&4&&Nf(s,o);break;case 22:o.memoizedState===null&&Ue(s,o,n),_i(o,o.return);break;case 30:break;default:Ue(s,o,n)}t=t.sibling}}function Bs(_,t){var n=null;_!==null&&_.memoizedState!==null&&_.memoizedState.cachePool!==null&&(n=_.memoizedState.cachePool.pool),_=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(_=t.memoizedState.cachePool.pool),_!==n&&(_!=null&&_.refCount++,n!=null&&Ga(n))}function Gs(_,t){_=null,t.alternate!==null&&(_=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==_&&(t.refCount++,_!=null&&Ga(_))}function te(_,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)bf(_,t,n,a),t=t.sibling}function bf(_,t,n,a){var s=t.flags;switch(t.tag){case 0:case 11:case 15:te(_,t,n,a),s&2048&&Ja(9,t);break;case 1:te(_,t,n,a);break;case 3:te(_,t,n,a),s&2048&&(_=null,t.alternate!==null&&(_=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==_&&(t.refCount++,_!=null&&Ga(_)));break;case 12:if(s&2048){te(_,t,n,a),_=t.stateNode;try{var o=t.memoizedProps,c=o.id,E=o.onPostCommit;typeof E=="function"&&E(c,t.alternate===null?"mount":"update",_.passiveEffectDuration,-0)}catch(m){U_(t,t.return,m)}}else te(_,t,n,a);break;case 13:te(_,t,n,a);break;case 23:break;case 22:o=t.stateNode,c=t.alternate,t.memoizedState!==null?o._visibility&2?te(_,t,n,a):ti(_,t):o._visibility&2?te(_,t,n,a):(o._visibility|=2,kn(_,t,n,a,(t.subtreeFlags&10256)!==0)),s&2048&&Bs(c,t);break;case 24:te(_,t,n,a),s&2048&&Gs(t.alternate,t);break;default:te(_,t,n,a)}}function kn(_,t,n,a,s){for(s=s&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var o=_,c=t,E=n,m=a,O=c.flags;switch(c.tag){case 0:case 11:case 15:kn(o,c,E,m,s),Ja(8,c);break;case 23:break;case 22:var V=c.stateNode;c.memoizedState!==null?V._visibility&2?kn(o,c,E,m,s):ti(o,c):(V._visibility|=2,kn(o,c,E,m,s)),s&&O&2048&&Bs(c.alternate,c);break;case 24:kn(o,c,E,m,s),s&&O&2048&&Gs(c.alternate,c);break;default:kn(o,c,E,m,s)}t=t.sibling}}function ti(_,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=_,a=t,s=a.flags;switch(a.tag){case 22:ti(n,a),s&2048&&Bs(a.alternate,a);break;case 24:ti(n,a),s&2048&&Gs(a.alternate,a);break;default:ti(n,a)}t=t.sibling}}var ei=8192;function Qn(_){if(_.subtreeFlags&ei)for(_=_.child;_!==null;)Mf(_),_=_.sibling}function Mf(_){switch(_.tag){case 26:Qn(_),_.flags&ei&&_.memoizedState!==null&&JA(qt,_.memoizedState,_.memoizedProps);break;case 5:Qn(_);break;case 3:case 4:var t=qt;qt=B$(_.stateNode.containerInfo),Qn(_),qt=t;break;case 22:_.memoizedState===null&&(t=_.alternate,t!==null&&t.memoizedState!==null?(t=ei,ei=16777216,Qn(_),ei=t):Qn(_));break;default:Qn(_)}}function Of(_){var t=_.alternate;if(t!==null&&(_=t.child,_!==null)){t.child=null;do t=_.sibling,_.sibling=null,_=t;while(_!==null)}}function ni(_){var t=_.deletions;if((_.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];st=a,Hf(a,_)}Of(_)}if(_.subtreeFlags&10256)for(_=_.child;_!==null;)Df(_),_=_.sibling}function Df(_){switch(_.tag){case 0:case 11:case 15:ni(_),_.flags&2048&&De(9,_,_.return);break;case 3:ni(_);break;case 12:ni(_);break;case 22:var t=_.stateNode;_.memoizedState!==null&&t._visibility&2&&(_.return===null||_.return.tag!==13)?(t._visibility&=-3,S$(_)):ni(_);break;default:ni(_)}}function S$(_){var t=_.deletions;if((_.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];st=a,Hf(a,_)}Of(_)}for(_=_.child;_!==null;){switch(t=_,t.tag){case 0:case 11:case 15:De(8,t,t.return),S$(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,S$(t));break;default:S$(t)}_=_.sibling}}function Hf(_,t){for(;st!==null;){var n=st;switch(n.tag){case 0:case 11:case 15:De(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ga(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,st=a;else _:for(n=_;st!==null;){a=st;var s=a.sibling,o=a.return;if(Sf(a),a===n){st=null;break _}if(s!==null){s.return=o,st=s;break _}st=o}}}var dA={getCacheForType:function(_){var t=dt(at),n=t.data.get(_);return n===void 0&&(n=_(),t.data.set(_,n)),n}},hA=typeof WeakMap=="function"?WeakMap:Map,C_=0,B_=null,A_=null,y_=0,x_=0,Mt=null,Pe=!1,Zn=!1,Vs=!1,Le=0,q_=0,Be=0,hn=0,ws=0,Yt=0,Jn=0,ai=null,gt=null,Ws=!1,Ys=0,v$=1/0,N$=null,Ge=null,ut=0,Ve=null,_a=null,ta=0,js=0,Fs=null,Uf=null,ii=0,zs=null;function Ot(){if((C_&2)!==0&&y_!==0)return y_&-y_;if(B.T!==null){var _=Wn;return _!==0?_:Js()}return Qr()}function Pf(){Yt===0&&(Yt=(y_&536870912)===0||S_?Xr():536870912);var _=Wt.current;return _!==null&&(_.flags|=32),Yt}function Dt(_,t,n){(_===B_&&(x_===2||x_===9)||_.cancelPendingCommit!==null)&&(ea(_,0),we(_,y_,Yt,!1)),Ia(_,n),((C_&2)===0||_!==B_)&&(_===B_&&((C_&2)===0&&(hn|=n),q_===4&&we(_,y_,Yt,!1)),ee(_))}function Bf(_,t,n){if((C_&6)!==0)throw Error(l(327));var a=!n&&(t&124)===0&&(t&_.expiredLanes)===0||pa(_,t),s=a?LA(_,t):qs(_,t,!0),o=a;do{if(s===0){Zn&&!a&&we(_,t,0,!1);break}else{if(n=_.current.alternate,o&&!EA(n)){s=qs(_,t,!1),o=!1;continue}if(s===2){if(o=t,_.errorRecoveryDisabledLanes&o)var c=0;else c=_.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;_:{var E=_;s=ai;var m=E.current.memoizedState.isDehydrated;if(m&&(ea(E,c).flags|=256),c=qs(E,c,!1),c!==2){if(Vs&&!m){E.errorRecoveryDisabledLanes|=o,hn|=o,s=4;break _}o=gt,gt=s,o!==null&&(gt===null?gt=o:gt.push.apply(gt,o))}s=c}if(o=!1,s!==2)continue}}if(s===1){ea(_,0),we(_,t,0,!0);break}_:{switch(a=_,o=s,o){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:we(a,t,Yt,!Pe);break _;case 2:gt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(s=Ys+300-G_(),10<s)){if(we(a,t,Yt,!Pe),Gi(a,0,!0)!==0)break _;a.timeoutHandle=fT(Gf.bind(null,a,n,gt,N$,Ws,t,Yt,hn,Jn,Pe,o,2,-0,0),s);break _}Gf(a,n,gt,N$,Ws,t,Yt,hn,Jn,Pe,o,0,-0,0)}}break}while(!0);ee(_)}function Gf(_,t,n,a,s,o,c,E,m,O,V,j,D,P){if(_.timeoutHandle=-1,j=t.subtreeFlags,(j&8192||(j&16785408)===16785408)&&(ci={stylesheets:null,count:0,unsuspend:ZA},Mf(t),j=_L(),j!==null)){_.cancelPendingCommit=j(zf.bind(null,_,t,o,n,a,s,c,E,m,V,1,D,P)),we(_,o,c,!O);return}zf(_,t,o,n,a,s,c,E,m)}function EA(_){for(var t=_;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var s=n[a],o=s.getSnapshot;s=s.value;try{if(!Nt(o(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===_)break;for(;t.sibling===null;){if(t.return===null||t.return===_)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function we(_,t,n,a){t&=~ws,t&=~hn,_.suspendedLanes|=t,_.pingedLanes&=~t,a&&(_.warmLanes|=t),a=_.expirationTimes;for(var s=t;0<s;){var o=31-vt(s),c=1<<o;a[o]=-1,s&=~c}n!==0&&qr(_,n,t)}function C$(){return(C_&6)===0?($i(0),!1):!0}function Xs(){if(A_!==null){if(x_===0)var _=A_.return;else _=A_,ue=rn=null,rs(_),Kn=null,ka=0,_=A_;for(;_!==null;)Af(_.alternate,_),_=_.return;A_=null}}function ea(_,t){var n=_.timeoutHandle;n!==-1&&(_.timeoutHandle=-1,HA(n)),n=_.cancelPendingCommit,n!==null&&(_.cancelPendingCommit=null,n()),Xs(),B_=_,A_=n=se(_.current,null),y_=t,x_=0,Mt=null,Pe=!1,Zn=pa(_,t),Vs=!1,Jn=Yt=ws=hn=Be=q_=0,gt=ai=null,Ws=!1,(t&8)!==0&&(t|=t&32);var a=_.entangledLanes;if(a!==0)for(_=_.entanglements,a&=t;0<a;){var s=31-vt(a),o=1<<s;t|=_[s],a&=~o}return Le=t,Qi(),n}function Vf(_,t){h_=null,B.H=h$,t===wa||t===$$?(t=ec(),x_=3):t===Ju?(t=ec(),x_=4):x_=t===nf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Mt=t,A_===null&&(q_=1,y$(_,Bt(t,_.current)))}function wf(){var _=B.H;return B.H=h$,_===null?h$:_}function Wf(){var _=B.A;return B.A=dA,_}function Ks(){q_=4,Pe||(y_&4194048)!==y_&&Wt.current!==null||(Zn=!0),(Be&134217727)===0&&(hn&134217727)===0||B_===null||we(B_,y_,Yt,!1)}function qs(_,t,n){var a=C_;C_|=2;var s=wf(),o=Wf();(B_!==_||y_!==t)&&(N$=null,ea(_,t)),t=!1;var c=q_;_:do try{if(x_!==0&&A_!==null){var E=A_,m=Mt;switch(x_){case 8:Xs(),c=6;break _;case 3:case 2:case 9:case 6:Wt.current===null&&(t=!0);var O=x_;if(x_=0,Mt=null,na(_,E,m,O),n&&Zn){c=0;break _}break;default:O=x_,x_=0,Mt=null,na(_,E,m,O)}}AA(),c=q_;break}catch(V){Vf(_,V)}while(!0);return t&&_.shellSuspendCounter++,ue=rn=null,C_=a,B.H=s,B.A=o,A_===null&&(B_=null,y_=0,Qi()),c}function AA(){for(;A_!==null;)Yf(A_)}function LA(_,t){var n=C_;C_|=2;var a=wf(),s=Wf();B_!==_||y_!==t?(N$=null,v$=G_()+500,ea(_,t)):Zn=pa(_,t);_:do try{if(x_!==0&&A_!==null){t=A_;var o=Mt;t:switch(x_){case 1:x_=0,Mt=null,na(_,t,o,1);break;case 2:case 9:if(_c(o)){x_=0,Mt=null,jf(t);break}t=function(){x_!==2&&x_!==9||B_!==_||(x_=7),ee(_)},o.then(t,t);break _;case 3:x_=7;break _;case 4:x_=5;break _;case 7:_c(o)?(x_=0,Mt=null,jf(t)):(x_=0,Mt=null,na(_,t,o,7));break;case 5:var c=null;switch(A_.tag){case 26:c=A_.memoizedState;case 5:case 27:var E=A_;if(!c||RT(c)){x_=0,Mt=null;var m=E.sibling;if(m!==null)A_=m;else{var O=E.return;O!==null?(A_=O,x$(O)):A_=null}break t}}x_=0,Mt=null,na(_,t,o,5);break;case 6:x_=0,Mt=null,na(_,t,o,6);break;case 8:Xs(),q_=6;break _;default:throw Error(l(462))}}mA();break}catch(V){Vf(_,V)}while(!0);return ue=rn=null,B.H=a,B.A=s,C_=n,A_!==null?0:(B_=null,y_=0,Qi(),q_)}function mA(){for(;A_!==null&&!v_();)Yf(A_)}function Yf(_){var t=hf(_.alternate,_,Le);_.memoizedProps=_.pendingProps,t===null?x$(_):A_=t}function jf(_){var t=_,n=t.alternate;switch(t.tag){case 15:case 0:t=rf(n,t,t.pendingProps,t.type,void 0,y_);break;case 11:t=rf(n,t,t.pendingProps,t.type.render,t.ref,y_);break;case 5:rs(t);default:Af(n,t),t=A_=ju(t,Le),t=hf(n,t,Le)}_.memoizedProps=_.pendingProps,t===null?x$(_):A_=t}function na(_,t,n,a){ue=rn=null,rs(t),Kn=null,ka=0;var s=t.return;try{if(oA(_,s,t,n,y_)){q_=1,y$(_,Bt(n,_.current)),A_=null;return}}catch(o){if(s!==null)throw A_=s,o;q_=1,y$(_,Bt(n,_.current)),A_=null;return}t.flags&32768?(S_||a===1?_=!0:Zn||(y_&536870912)!==0?_=!1:(Pe=_=!0,(a===2||a===9||a===3||a===6)&&(a=Wt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Ff(t,_)):x$(t)}function x$(_){var t=_;do{if((t.flags&32768)!==0){Ff(t,Pe);return}_=t.return;var n=uA(t.alternate,t,Le);if(n!==null){A_=n;return}if(t=t.sibling,t!==null){A_=t;return}A_=t=_}while(t!==null);q_===0&&(q_=5)}function Ff(_,t){do{var n=cA(_.alternate,_);if(n!==null){n.flags&=32767,A_=n;return}if(n=_.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(_=_.sibling,_!==null)){A_=_;return}A_=_=n}while(_!==null);q_=6,A_=null}function zf(_,t,n,a,s,o,c,E,m){_.cancelPendingCommit=null;do b$();while(ut!==0);if((C_&6)!==0)throw Error(l(327));if(t!==null){if(t===_.current)throw Error(l(177));if(o=t.lanes|t.childLanes,o|=Gl,Z0(_,n,o,c,E,m),_===B_&&(A_=B_=null,y_=0),_a=t,Ve=_,ta=n,js=o,Fs=s,Uf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(_.callbackNode=null,_.callbackPriority=0,gA(X_,function(){return Qf(),null})):(_.callbackNode=null,_.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=B.T,B.T=null,s=z.p,z.p=2,c=C_,C_|=4;try{fA(_,t,n)}finally{C_=c,z.p=s,B.T=a}}ut=1,Xf(),Kf(),qf()}}function Xf(){if(ut===1){ut=0;var _=Ve,t=_a,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=B.T,B.T=null;var a=z.p;z.p=2;var s=C_;C_|=4;try{Cf(t,_);var o=lo,c=Du(_.containerInfo),E=o.focusedElem,m=o.selectionRange;if(c!==E&&E&&E.ownerDocument&&Ou(E.ownerDocument.documentElement,E)){if(m!==null&&Dl(E)){var O=m.start,V=m.end;if(V===void 0&&(V=O),"selectionStart"in E)E.selectionStart=O,E.selectionEnd=Math.min(V,E.value.length);else{var j=E.ownerDocument||document,D=j&&j.defaultView||window;if(D.getSelection){var P=D.getSelection(),c_=E.textContent.length,r_=Math.min(m.start,c_),D_=m.end===void 0?r_:Math.min(m.end,c_);!P.extend&&r_>D_&&(c=D_,D_=r_,r_=c);var x=Mu(E,r_),R=Mu(E,D_);if(x&&R&&(P.rangeCount!==1||P.anchorNode!==x.node||P.anchorOffset!==x.offset||P.focusNode!==R.node||P.focusOffset!==R.offset)){var M=j.createRange();M.setStart(x.node,x.offset),P.removeAllRanges(),r_>D_?(P.addRange(M),P.extend(R.node,R.offset)):(M.setEnd(R.node,R.offset),P.addRange(M))}}}}for(j=[],P=E;P=P.parentNode;)P.nodeType===1&&j.push({element:P,left:P.scrollLeft,top:P.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<j.length;E++){var w=j[E];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}Y$=!!$o,lo=$o=null}finally{C_=s,z.p=a,B.T=n}}_.current=t,ut=2}}function Kf(){if(ut===2){ut=0;var _=Ve,t=_a,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=B.T,B.T=null;var a=z.p;z.p=2;var s=C_;C_|=4;try{Rf(_,t.alternate,t)}finally{C_=s,z.p=a,B.T=n}}ut=3}}function qf(){if(ut===4||ut===3){ut=0,b_();var _=Ve,t=_a,n=ta,a=Uf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ut=5:(ut=0,_a=Ve=null,kf(_,_.pendingLanes));var s=_.pendingLanes;if(s===0&&(Ge=null),fl(n),t=t.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(ya,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=B.T,s=z.p,z.p=2,B.T=null;try{for(var o=_.onRecoverableError,c=0;c<a.length;c++){var E=a[c];o(E.value,{componentStack:E.stack})}}finally{B.T=t,z.p=s}}(ta&3)!==0&&b$(),ee(_),s=_.pendingLanes,(n&4194090)!==0&&(s&42)!==0?_===zs?ii++:(ii=0,zs=_):ii=0,$i(0)}}function kf(_,t){(_.pooledCacheLanes&=t)===0&&(t=_.pooledCache,t!=null&&(_.pooledCache=null,Ga(t)))}function b$(_){return Xf(),Kf(),qf(),Qf()}function Qf(){if(ut!==5)return!1;var _=Ve,t=js;js=0;var n=fl(ta),a=B.T,s=z.p;try{z.p=32>n?32:n,B.T=null,n=Fs,Fs=null;var o=Ve,c=ta;if(ut=0,_a=Ve=null,ta=0,(C_&6)!==0)throw Error(l(331));var E=C_;if(C_|=4,Df(o.current),bf(o,o.current,c,n),C_=E,$i(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(ya,o)}catch{}return!0}finally{z.p=s,B.T=a,kf(_,t)}}function Zf(_,t,n){t=Bt(n,t),t=gs(_.stateNode,t,2),_=xe(_,t,2),_!==null&&(Ia(_,2),ee(_))}function U_(_,t,n){if(_.tag===3)Zf(_,_,n);else for(;t!==null;){if(t.tag===3){Zf(t,_,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ge===null||!Ge.has(a))){_=Bt(n,_),n=tf(2),a=xe(t,n,2),a!==null&&(ef(n,a,t,_),Ia(a,2),ee(a));break}}t=t.return}}function ks(_,t,n){var a=_.pingCache;if(a===null){a=_.pingCache=new hA;var s=new Set;a.set(t,s)}else s=a.get(t),s===void 0&&(s=new Set,a.set(t,s));s.has(n)||(Vs=!0,s.add(n),_=yA.bind(null,_,t,n),t.then(_,_))}function yA(_,t,n){var a=_.pingCache;a!==null&&a.delete(t),_.pingedLanes|=_.suspendedLanes&n,_.warmLanes&=~n,B_===_&&(y_&n)===n&&(q_===4||q_===3&&(y_&62914560)===y_&&300>G_()-Ys?(C_&2)===0&&ea(_,0):ws|=n,Jn===y_&&(Jn=0)),ee(_)}function Jf(_,t){t===0&&(t=Kr()),_=Bn(_,t),_!==null&&(Ia(_,t),ee(_))}function pA(_){var t=_.memoizedState,n=0;t!==null&&(n=t.retryLane),Jf(_,n)}function IA(_,t){var n=0;switch(_.tag){case 13:var a=_.stateNode,s=_.memoizedState;s!==null&&(n=s.retryLane);break;case 19:a=_.stateNode;break;case 22:a=_.stateNode._retryCache;break;default:throw Error(l(314))}a!==null&&a.delete(t),Jf(_,n)}function gA(_,t){return I_(_,t)}var M$=null,aa=null,Qs=!1,O$=!1,Zs=!1,En=0;function ee(_){_!==aa&&_.next===null&&(aa===null?M$=aa=_:aa=aa.next=_),O$=!0,Qs||(Qs=!0,SA())}function $i(_,t){if(!Zs&&O$){Zs=!0;do for(var n=!1,a=M$;a!==null;){if(_!==0){var s=a.pendingLanes;if(s===0)var o=0;else{var c=a.suspendedLanes,E=a.pingedLanes;o=(1<<31-vt(42|_)+1)-1,o&=s&~(c&~E),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,nT(a,o))}else o=y_,o=Gi(a,a===B_?o:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(o&3)===0||pa(a,o)||(n=!0,nT(a,o));a=a.next}while(n);Zs=!1}}function RA(){_T()}function _T(){O$=Qs=!1;var _=0;En!==0&&(DA()&&(_=En),En=0);for(var t=G_(),n=null,a=M$;a!==null;){var s=a.next,o=tT(a,t);o===0?(a.next=null,n===null?M$=s:n.next=s,s===null&&(aa=n)):(n=a,(_!==0||(o&3)!==0)&&(O$=!0)),a=s}$i(_)}function tT(_,t){for(var n=_.suspendedLanes,a=_.pingedLanes,s=_.expirationTimes,o=_.pendingLanes&-62914561;0<o;){var c=31-vt(o),E=1<<c,m=s[c];m===-1?((E&n)===0||(E&a)!==0)&&(s[c]=Q0(E,t)):m<=t&&(_.expiredLanes|=E),o&=~E}if(t=B_,n=y_,n=Gi(_,_===t?n:0,_.cancelPendingCommit!==null||_.timeoutHandle!==-1),a=_.callbackNode,n===0||_===t&&(x_===2||x_===9)||_.cancelPendingCommit!==null)return a!==null&&a!==null&&R_(a),_.callbackNode=null,_.callbackPriority=0;if((n&3)===0||pa(_,n)){if(t=n&-n,t===_.callbackPriority)return t;switch(a!==null&&R_(a),fl(n)){case 2:case 8:n=V_;break;case 32:n=X_;break;case 268435456:n=ma;break;default:n=X_}return a=eT.bind(null,_),n=I_(n,a),_.callbackPriority=t,_.callbackNode=n,t}return a!==null&&a!==null&&R_(a),_.callbackPriority=2,_.callbackNode=null,2}function eT(_,t){if(ut!==0&&ut!==5)return _.callbackNode=null,_.callbackPriority=0,null;var n=_.callbackNode;if(b$()&&_.callbackNode!==n)return null;var a=y_;return a=Gi(_,_===B_?a:0,_.cancelPendingCommit!==null||_.timeoutHandle!==-1),a===0?null:(Bf(_,a,t),tT(_,G_()),_.callbackNode!=null&&_.callbackNode===n?eT.bind(null,_):null)}function nT(_,t){if(b$())return null;Bf(_,t,!0)}function SA(){UA(function(){(C_&6)!==0?I_(Ze,RA):_T()})}function Js(){return En===0&&(En=Xr()),En}function aT(_){return _==null||typeof _=="symbol"||typeof _=="boolean"?null:typeof _=="function"?_:ji(""+_)}function iT(_,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,_.id&&n.setAttribute("form",_.id),t.parentNode.insertBefore(n,t),_=new FormData(_),n.parentNode.removeChild(n),_}function vA(_,t,n,a,s){if(t==="submit"&&n&&n.stateNode===s){var o=aT((s[mt]||null).action),c=a.submitter;c&&(t=(t=c[mt]||null)?aT(t.formAction):c.getAttribute("formAction"),t!==null&&(o=t,c=null));var E=new Ki("action","action",null,a,s);_.push({event:E,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(En!==0){var m=c?iT(s,c):new FormData(s);Ls(n,{pending:!0,data:m,method:s.method,action:o},null,m)}}else typeof o=="function"&&(E.preventDefault(),m=c?iT(s,c):new FormData(s),Ls(n,{pending:!0,data:m,method:s.method,action:o},o,m))},currentTarget:s}]})}}for(var _o=0;_o<Bl.length;_o++){var to=Bl[_o],NA=to.toLowerCase(),CA=to[0].toUpperCase()+to.slice(1);Kt(NA,"on"+CA)}Kt(Pu,"onAnimationEnd"),Kt(Bu,"onAnimationIteration"),Kt(Gu,"onAnimationStart"),Kt("dblclick","onDoubleClick"),Kt("focusin","onFocus"),Kt("focusout","onBlur"),Kt(zE,"onTransitionRun"),Kt(XE,"onTransitionStart"),Kt(KE,"onTransitionCancel"),Kt(Vu,"onTransitionEnd"),Nn("onMouseEnter",["mouseout","mouseover"]),Nn("onMouseLeave",["mouseout","mouseover"]),Nn("onPointerEnter",["pointerout","pointerover"]),Nn("onPointerLeave",["pointerout","pointerover"]),_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_n("onBeforeInput",["compositionend","keypress","textInput","paste"]),_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(li));function $T(_,t){t=(t&4)!==0;for(var n=0;n<_.length;n++){var a=_[n],s=a.event;a=a.listeners;_:{var o=void 0;if(t)for(var c=a.length-1;0<=c;c--){var E=a[c],m=E.instance,O=E.currentTarget;if(E=E.listener,m!==o&&s.isPropagationStopped())break _;o=E,s.currentTarget=O;try{o(s)}catch(V){m$(V)}s.currentTarget=null,o=m}else for(c=0;c<a.length;c++){if(E=a[c],m=E.instance,O=E.currentTarget,E=E.listener,m!==o&&s.isPropagationStopped())break _;o=E,s.currentTarget=O;try{o(s)}catch(V){m$(V)}s.currentTarget=null,o=m}}}}function L_(_,t){var n=t[Tl];n===void 0&&(n=t[Tl]=new Set);var a=_+"__bubble";n.has(a)||(lT(t,_,2,!1),n.add(a))}function eo(_,t,n){var a=0;t&&(a|=4),lT(n,_,a,t)}var D$="_reactListening"+Math.random().toString(36).slice(2);function no(_){if(!_[D$]){_[D$]=!0,Jr.forEach(function(n){n!=="selectionchange"&&(xA.has(n)||eo(n,!1,_),eo(n,!0,_))});var t=_.nodeType===9?_:_.ownerDocument;t===null||t[D$]||(t[D$]=!0,eo("selectionchange",!1,t))}}function lT(_,t,n,a){switch(bT(t)){case 2:var s=nL;break;case 8:s=aL;break;default:s=Ao}n=s.bind(null,t,n,_),s=void 0,!Rl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),a?s!==void 0?_.addEventListener(t,n,{capture:!0,passive:s}):_.addEventListener(t,n,!0):s!==void 0?_.addEventListener(t,n,{passive:s}):_.addEventListener(t,n,!1)}function ao(_,t,n,a,s){var o=a;if((t&1)===0&&(t&2)===0&&a!==null)_:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var E=a.stateNode.containerInfo;if(E===s)break;if(c===4)for(c=a.return;c!==null;){var m=c.tag;if((m===3||m===4)&&c.stateNode.containerInfo===s)return;c=c.return}for(;E!==null;){if(c=Rn(E),c===null)return;if(m=c.tag,m===5||m===6||m===26||m===27){a=o=c;continue _}E=E.parentNode}}a=a.return}fu(function(){var O=o,V=Il(n),j=[];_:{var D=wu.get(_);if(D!==void 0){var P=Ki,c_=_;switch(_){case"keypress":if(zi(n)===0)break _;case"keydown":case"keyup":P=gE;break;case"focusin":c_="focus",P=Cl;break;case"focusout":c_="blur",P=Cl;break;case"beforeblur":case"afterblur":P=Cl;break;case"click":if(n.button===2)break _;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=hu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=cE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=vE;break;case Pu:case Bu:case Gu:P=dE;break;case Vu:P=CE;break;case"scroll":case"scrollend":P=rE;break;case"wheel":P=bE;break;case"copy":case"cut":case"paste":P=EE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Au;break;case"toggle":case"beforetoggle":P=OE}var r_=(t&4)!==0,D_=!r_&&(_==="scroll"||_==="scrollend"),x=r_?D!==null?D+"Capture":null:D;r_=[];for(var R=O,M;R!==null;){var w=R;if(M=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||M===null||x===null||(w=Sa(R,x),w!=null&&r_.push(si(R,w,M))),D_)break;R=R.return}0<r_.length&&(D=new P(D,c_,null,n,V),j.push({event:D,listeners:r_}))}}if((t&7)===0){_:{if(D=_==="mouseover"||_==="pointerover",P=_==="mouseout"||_==="pointerout",D&&n!==pl&&(c_=n.relatedTarget||n.fromElement)&&(Rn(c_)||c_[gn]))break _;if((P||D)&&(D=V.window===V?V:(D=V.ownerDocument)?D.defaultView||D.parentWindow:window,P?(c_=n.relatedTarget||n.toElement,P=O,c_=c_?Rn(c_):null,c_!==null&&(D_=f(c_),r_=c_.tag,c_!==D_||r_!==5&&r_!==27&&r_!==6)&&(c_=null)):(P=null,c_=O),P!==c_)){if(r_=hu,w="onMouseLeave",x="onMouseEnter",R="mouse",(_==="pointerout"||_==="pointerover")&&(r_=Au,w="onPointerLeave",x="onPointerEnter",R="pointer"),D_=P==null?D:Ra(P),M=c_==null?D:Ra(c_),D=new r_(w,R+"leave",P,n,V),D.target=D_,D.relatedTarget=M,w=null,Rn(V)===O&&(r_=new r_(x,R+"enter",c_,n,V),r_.target=M,r_.relatedTarget=D_,w=r_),D_=w,P&&c_)t:{for(r_=P,x=c_,R=0,M=r_;M;M=ia(M))R++;for(M=0,w=x;w;w=ia(w))M++;for(;0<R-M;)r_=ia(r_),R--;for(;0<M-R;)x=ia(x),M--;for(;R--;){if(r_===x||x!==null&&r_===x.alternate)break t;r_=ia(r_),x=ia(x)}r_=null}else r_=null;P!==null&&sT(j,D,P,r_,!1),c_!==null&&D_!==null&&sT(j,D_,c_,r_,!0)}}_:{if(D=O?Ra(O):window,P=D.nodeName&&D.nodeName.toLowerCase(),P==="select"||P==="input"&&D.type==="file")var $_=Su;else if(gu(D))if(vu)$_=YE;else{$_=wE;var E_=VE}else P=D.nodeName,!P||P.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?O&&yl(O.elementType)&&($_=Su):$_=WE;if($_&&($_=$_(_,O))){Ru(j,$_,n,V);break _}E_&&E_(_,D,O),_==="focusout"&&O&&D.type==="number"&&O.memoizedProps.value!=null&&ml(D,"number",D.value)}switch(E_=O?Ra(O):window,_){case"focusin":(gu(E_)||E_.contentEditable==="true")&&(Hn=E_,Hl=O,Da=null);break;case"focusout":Da=Hl=Hn=null;break;case"mousedown":Ul=!0;break;case"contextmenu":case"mouseup":case"dragend":Ul=!1,Hu(j,n,V);break;case"selectionchange":if(FE)break;case"keydown":case"keyup":Hu(j,n,V)}var o_;if(bl)_:{switch(_){case"compositionstart":var u_="onCompositionStart";break _;case"compositionend":u_="onCompositionEnd";break _;case"compositionupdate":u_="onCompositionUpdate";break _}u_=void 0}else Dn?pu(_,n)&&(u_="onCompositionEnd"):_==="keydown"&&n.keyCode===229&&(u_="onCompositionStart");u_&&(Lu&&n.locale!=="ko"&&(Dn||u_!=="onCompositionStart"?u_==="onCompositionEnd"&&Dn&&(o_=Tu()):(Se=V,Sl="value"in Se?Se.value:Se.textContent,Dn=!0)),E_=H$(O,u_),0<E_.length&&(u_=new Eu(u_,_,null,n,V),j.push({event:u_,listeners:E_}),o_?u_.data=o_:(o_=Iu(n),o_!==null&&(u_.data=o_)))),(o_=HE?UE(_,n):PE(_,n))&&(u_=H$(O,"onBeforeInput"),0<u_.length&&(E_=new Eu("onBeforeInput","beforeinput",null,n,V),j.push({event:E_,listeners:u_}),E_.data=o_)),vA(j,_,O,n,V)}$T(j,t)})}function si(_,t,n){return{instance:_,listener:t,currentTarget:n}}function H$(_,t){for(var n=t+"Capture",a=[];_!==null;){var s=_,o=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||o===null||(s=Sa(_,n),s!=null&&a.unshift(si(_,s,o)),s=Sa(_,t),s!=null&&a.push(si(_,s,o))),_.tag===3)return a;_=_.return}return[]}function ia(_){if(_===null)return null;do _=_.return;while(_&&_.tag!==5&&_.tag!==27);return _||null}function sT(_,t,n,a,s){for(var o=t._reactName,c=[];n!==null&&n!==a;){var E=n,m=E.alternate,O=E.stateNode;if(E=E.tag,m!==null&&m===a)break;E!==5&&E!==26&&E!==27||O===null||(m=O,s?(O=Sa(n,o),O!=null&&c.unshift(si(n,O,m))):s||(O=Sa(n,o),O!=null&&c.push(si(n,O,m)))),n=n.return}c.length!==0&&_.push({event:t,listeners:c})}var bA=/\r\n?/g,MA=/\u0000|\uFFFD/g;function oT(_){return(typeof _=="string"?_:""+_).replace(bA,`
`).replace(MA,"")}function rT(_,t){return t=oT(t),oT(_)===t}function U$(){}function O_(_,t,n,a,s,o){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||bn(_,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&bn(_,""+a);break;case"className":wi(_,"class",a);break;case"tabIndex":wi(_,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":wi(_,n,a);break;case"style":uu(_,a,o);break;case"data":if(t!=="object"){wi(_,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){_.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){_.removeAttribute(n);break}a=ji(""+a),_.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){_.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&O_(_,t,"name",s.name,s,null),O_(_,t,"formEncType",s.formEncType,s,null),O_(_,t,"formMethod",s.formMethod,s,null),O_(_,t,"formTarget",s.formTarget,s,null)):(O_(_,t,"encType",s.encType,s,null),O_(_,t,"method",s.method,s,null),O_(_,t,"target",s.target,s,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){_.removeAttribute(n);break}a=ji(""+a),_.setAttribute(n,a);break;case"onClick":a!=null&&(_.onclick=U$);break;case"onScroll":a!=null&&L_("scroll",_);break;case"onScrollEnd":a!=null&&L_("scrollend",_);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(l(61));if(n=a.__html,n!=null){if(s.children!=null)throw Error(l(60));_.innerHTML=n}}break;case"multiple":_.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":_.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){_.removeAttribute("xlink:href");break}n=ji(""+a),_.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?_.setAttribute(n,""+a):_.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?_.setAttribute(n,""):_.removeAttribute(n);break;case"capture":case"download":a===!0?_.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?_.setAttribute(n,a):_.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?_.setAttribute(n,a):_.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?_.removeAttribute(n):_.setAttribute(n,a);break;case"popover":L_("beforetoggle",_),L_("toggle",_),Vi(_,"popover",a);break;case"xlinkActuate":$e(_,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":$e(_,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":$e(_,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":$e(_,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":$e(_,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":$e(_,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":$e(_,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":$e(_,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":$e(_,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Vi(_,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=sE.get(n)||n,Vi(_,n,a))}}function io(_,t,n,a,s,o){switch(n){case"style":uu(_,a,o);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(l(61));if(n=a.__html,n!=null){if(s.children!=null)throw Error(l(60));_.innerHTML=n}}break;case"children":typeof a=="string"?bn(_,a):(typeof a=="number"||typeof a=="bigint")&&bn(_,""+a);break;case"onScroll":a!=null&&L_("scroll",_);break;case"onScrollEnd":a!=null&&L_("scrollend",_);break;case"onClick":a!=null&&(_.onclick=U$);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_u.hasOwnProperty(n))_:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),o=_[mt]||null,o=o!=null?o[n]:null,typeof o=="function"&&_.removeEventListener(t,o,s),typeof a=="function")){typeof o!="function"&&o!==null&&(n in _?_[n]=null:_.hasAttribute(n)&&_.removeAttribute(n)),_.addEventListener(t,a,s);break _}n in _?_[n]=a:a===!0?_.setAttribute(n,""):Vi(_,n,a)}}}function ct(_,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":L_("error",_),L_("load",_);var a=!1,s=!1,o;for(o in n)if(n.hasOwnProperty(o)){var c=n[o];if(c!=null)switch(o){case"src":a=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:O_(_,t,o,c,n,null)}}s&&O_(_,t,"srcSet",n.srcSet,n,null),a&&O_(_,t,"src",n.src,n,null);return;case"input":L_("invalid",_);var E=o=c=s=null,m=null,O=null;for(a in n)if(n.hasOwnProperty(a)){var V=n[a];if(V!=null)switch(a){case"name":s=V;break;case"type":c=V;break;case"checked":m=V;break;case"defaultChecked":O=V;break;case"value":o=V;break;case"defaultValue":E=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(l(137,t));break;default:O_(_,t,a,V,n,null)}}lu(_,o,E,m,O,c,s,!1),Wi(_);return;case"select":L_("invalid",_),a=c=o=null;for(s in n)if(n.hasOwnProperty(s)&&(E=n[s],E!=null))switch(s){case"value":o=E;break;case"defaultValue":c=E;break;case"multiple":a=E;default:O_(_,t,s,E,n,null)}t=o,n=c,_.multiple=!!a,t!=null?xn(_,!!a,t,!1):n!=null&&xn(_,!!a,n,!0);return;case"textarea":L_("invalid",_),o=s=a=null;for(c in n)if(n.hasOwnProperty(c)&&(E=n[c],E!=null))switch(c){case"value":a=E;break;case"defaultValue":s=E;break;case"children":o=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(l(91));break;default:O_(_,t,c,E,n,null)}ou(_,a,s,o),Wi(_);return;case"option":for(m in n)if(n.hasOwnProperty(m)&&(a=n[m],a!=null))switch(m){case"selected":_.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:O_(_,t,m,a,n,null)}return;case"dialog":L_("beforetoggle",_),L_("toggle",_),L_("cancel",_),L_("close",_);break;case"iframe":case"object":L_("load",_);break;case"video":case"audio":for(a=0;a<li.length;a++)L_(li[a],_);break;case"image":L_("error",_),L_("load",_);break;case"details":L_("toggle",_);break;case"embed":case"source":case"link":L_("error",_),L_("load",_);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in n)if(n.hasOwnProperty(O)&&(a=n[O],a!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:O_(_,t,O,a,n,null)}return;default:if(yl(t)){for(V in n)n.hasOwnProperty(V)&&(a=n[V],a!==void 0&&io(_,t,V,a,n,void 0));return}}for(E in n)n.hasOwnProperty(E)&&(a=n[E],a!=null&&O_(_,t,E,a,n,null))}function OA(_,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,o=null,c=null,E=null,m=null,O=null,V=null;for(P in n){var j=n[P];if(n.hasOwnProperty(P)&&j!=null)switch(P){case"checked":break;case"value":break;case"defaultValue":m=j;default:a.hasOwnProperty(P)||O_(_,t,P,null,a,j)}}for(var D in a){var P=a[D];if(j=n[D],a.hasOwnProperty(D)&&(P!=null||j!=null))switch(D){case"type":o=P;break;case"name":s=P;break;case"checked":O=P;break;case"defaultChecked":V=P;break;case"value":c=P;break;case"defaultValue":E=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(l(137,t));break;default:P!==j&&O_(_,t,D,P,a,j)}}Ll(_,c,E,m,O,V,o,s);return;case"select":P=c=E=D=null;for(o in n)if(m=n[o],n.hasOwnProperty(o)&&m!=null)switch(o){case"value":break;case"multiple":P=m;default:a.hasOwnProperty(o)||O_(_,t,o,null,a,m)}for(s in a)if(o=a[s],m=n[s],a.hasOwnProperty(s)&&(o!=null||m!=null))switch(s){case"value":D=o;break;case"defaultValue":E=o;break;case"multiple":c=o;default:o!==m&&O_(_,t,s,o,a,m)}t=E,n=c,a=P,D!=null?xn(_,!!n,D,!1):!!a!=!!n&&(t!=null?xn(_,!!n,t,!0):xn(_,!!n,n?[]:"",!1));return;case"textarea":P=D=null;for(E in n)if(s=n[E],n.hasOwnProperty(E)&&s!=null&&!a.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:O_(_,t,E,null,a,s)}for(c in a)if(s=a[c],o=n[c],a.hasOwnProperty(c)&&(s!=null||o!=null))switch(c){case"value":D=s;break;case"defaultValue":P=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(l(91));break;default:s!==o&&O_(_,t,c,s,a,o)}su(_,D,P);return;case"option":for(var c_ in n)if(D=n[c_],n.hasOwnProperty(c_)&&D!=null&&!a.hasOwnProperty(c_))switch(c_){case"selected":_.selected=!1;break;default:O_(_,t,c_,null,a,D)}for(m in a)if(D=a[m],P=n[m],a.hasOwnProperty(m)&&D!==P&&(D!=null||P!=null))switch(m){case"selected":_.selected=D&&typeof D!="function"&&typeof D!="symbol";break;default:O_(_,t,m,D,a,P)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var r_ in n)D=n[r_],n.hasOwnProperty(r_)&&D!=null&&!a.hasOwnProperty(r_)&&O_(_,t,r_,null,a,D);for(O in a)if(D=a[O],P=n[O],a.hasOwnProperty(O)&&D!==P&&(D!=null||P!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(l(137,t));break;default:O_(_,t,O,D,a,P)}return;default:if(yl(t)){for(var D_ in n)D=n[D_],n.hasOwnProperty(D_)&&D!==void 0&&!a.hasOwnProperty(D_)&&io(_,t,D_,void 0,a,D);for(V in a)D=a[V],P=n[V],!a.hasOwnProperty(V)||D===P||D===void 0&&P===void 0||io(_,t,V,D,a,P);return}}for(var x in n)D=n[x],n.hasOwnProperty(x)&&D!=null&&!a.hasOwnProperty(x)&&O_(_,t,x,null,a,D);for(j in a)D=a[j],P=n[j],!a.hasOwnProperty(j)||D===P||D==null&&P==null||O_(_,t,j,D,a,P)}var $o=null,lo=null;function P$(_){return _.nodeType===9?_:_.ownerDocument}function uT(_){switch(_){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cT(_,t){if(_===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return _===1&&t==="foreignObject"?0:_}function so(_,t){return _==="textarea"||_==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var oo=null;function DA(){var _=window.event;return _&&_.type==="popstate"?_===oo?!1:(oo=_,!0):(oo=null,!1)}var fT=typeof setTimeout=="function"?setTimeout:void 0,HA=typeof clearTimeout=="function"?clearTimeout:void 0,TT=typeof Promise=="function"?Promise:void 0,UA=typeof queueMicrotask=="function"?queueMicrotask:typeof TT<"u"?function(_){return TT.resolve(null).then(_).catch(PA)}:fT;function PA(_){setTimeout(function(){throw _})}function We(_){return _==="head"}function dT(_,t){var n=t,a=0,s=0;do{var o=n.nextSibling;if(_.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(0<a&&8>a){n=a;var c=_.ownerDocument;if(n&1&&oi(c.documentElement),n&2&&oi(c.body),n&4)for(n=c.head,oi(n),c=n.firstChild;c;){var E=c.nextSibling,m=c.nodeName;c[ga]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=E}}if(s===0){_.removeChild(o),Ei(t);return}s--}else n==="$"||n==="$?"||n==="$!"?s++:a=n.charCodeAt(0)-48;else a=0;n=o}while(n);Ei(t)}function ro(_){var t=_.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ro(n),dl(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}_.removeChild(n)}}function BA(_,t,n,a){for(;_.nodeType===1;){var s=n;if(_.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(_.nodeName!=="INPUT"||_.type!=="hidden"))break}else if(a){if(!_[ga])switch(t){case"meta":if(!_.hasAttribute("itemprop"))break;return _;case"link":if(o=_.getAttribute("rel"),o==="stylesheet"&&_.hasAttribute("data-precedence"))break;if(o!==s.rel||_.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||_.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||_.getAttribute("title")!==(s.title==null?null:s.title))break;return _;case"style":if(_.hasAttribute("data-precedence"))break;return _;case"script":if(o=_.getAttribute("src"),(o!==(s.src==null?null:s.src)||_.getAttribute("type")!==(s.type==null?null:s.type)||_.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&o&&_.hasAttribute("async")&&!_.hasAttribute("itemprop"))break;return _;default:return _}}else if(t==="input"&&_.type==="hidden"){var o=s.name==null?null:""+s.name;if(s.type==="hidden"&&_.getAttribute("name")===o)return _}else return _;if(_=kt(_.nextSibling),_===null)break}return null}function GA(_,t,n){if(t==="")return null;for(;_.nodeType!==3;)if((_.nodeType!==1||_.nodeName!=="INPUT"||_.type!=="hidden")&&!n||(_=kt(_.nextSibling),_===null))return null;return _}function uo(_){return _.data==="$!"||_.data==="$?"&&_.ownerDocument.readyState==="complete"}function VA(_,t){var n=_.ownerDocument;if(_.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),_._reactRetry=a}}function kt(_){for(;_!=null;_=_.nextSibling){var t=_.nodeType;if(t===1||t===3)break;if(t===8){if(t=_.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return _}var co=null;function hT(_){_=_.previousSibling;for(var t=0;_;){if(_.nodeType===8){var n=_.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return _;t--}else n==="/$"&&t++}_=_.previousSibling}return null}function ET(_,t,n){switch(t=P$(n),_){case"html":if(_=t.documentElement,!_)throw Error(l(452));return _;case"head":if(_=t.head,!_)throw Error(l(453));return _;case"body":if(_=t.body,!_)throw Error(l(454));return _;default:throw Error(l(451))}}function oi(_){for(var t=_.attributes;t.length;)_.removeAttributeNode(t[0]);dl(_)}var jt=new Map,AT=new Set;function B$(_){return typeof _.getRootNode=="function"?_.getRootNode():_.nodeType===9?_:_.ownerDocument}var me=z.d;z.d={f:wA,r:WA,D:YA,C:jA,L:FA,m:zA,X:KA,S:XA,M:qA};function wA(){var _=me.f(),t=C$();return _||t}function WA(_){var t=Sn(_);t!==null&&t.tag===5&&t.type==="form"?Pc(t):me.r(_)}var $a=typeof document>"u"?null:document;function LT(_,t,n){var a=$a;if(a&&typeof t=="string"&&t){var s=Pt(t);s='link[rel="'+_+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),AT.has(s)||(AT.add(s),_={rel:_,crossOrigin:n,href:t},a.querySelector(s)===null&&(t=a.createElement("link"),ct(t,"link",_),$t(t),a.head.appendChild(t)))}}function YA(_){me.D(_),LT("dns-prefetch",_,null)}function jA(_,t){me.C(_,t),LT("preconnect",_,t)}function FA(_,t,n){me.L(_,t,n);var a=$a;if(a&&_&&t){var s='link[rel="preload"][as="'+Pt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Pt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Pt(n.imageSizes)+'"]')):s+='[href="'+Pt(_)+'"]';var o=s;switch(t){case"style":o=la(_);break;case"script":o=sa(_)}jt.has(o)||(_=A({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:_,as:t},n),jt.set(o,_),a.querySelector(s)!==null||t==="style"&&a.querySelector(ri(o))||t==="script"&&a.querySelector(ui(o))||(t=a.createElement("link"),ct(t,"link",_),$t(t),a.head.appendChild(t)))}}function zA(_,t){me.m(_,t);var n=$a;if(n&&_){var a=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Pt(a)+'"][href="'+Pt(_)+'"]',o=s;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=sa(_)}if(!jt.has(o)&&(_=A({rel:"modulepreload",href:_},t),jt.set(o,_),n.querySelector(s)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ui(o)))return}a=n.createElement("link"),ct(a,"link",_),$t(a),n.head.appendChild(a)}}}function XA(_,t,n){me.S(_,t,n);var a=$a;if(a&&_){var s=vn(a).hoistableStyles,o=la(_);t=t||"default";var c=s.get(o);if(!c){var E={loading:0,preload:null};if(c=a.querySelector(ri(o)))E.loading=5;else{_=A({rel:"stylesheet",href:_,"data-precedence":t},n),(n=jt.get(o))&&fo(_,n);var m=c=a.createElement("link");$t(m),ct(m,"link",_),m._p=new Promise(function(O,V){m.onload=O,m.onerror=V}),m.addEventListener("load",function(){E.loading|=1}),m.addEventListener("error",function(){E.loading|=2}),E.loading|=4,G$(c,t,a)}c={type:"stylesheet",instance:c,count:1,state:E},s.set(o,c)}}}function KA(_,t){me.X(_,t);var n=$a;if(n&&_){var a=vn(n).hoistableScripts,s=sa(_),o=a.get(s);o||(o=n.querySelector(ui(s)),o||(_=A({src:_,async:!0},t),(t=jt.get(s))&&To(_,t),o=n.createElement("script"),$t(o),ct(o,"link",_),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(s,o))}}function qA(_,t){me.M(_,t);var n=$a;if(n&&_){var a=vn(n).hoistableScripts,s=sa(_),o=a.get(s);o||(o=n.querySelector(ui(s)),o||(_=A({src:_,async:!0,type:"module"},t),(t=jt.get(s))&&To(_,t),o=n.createElement("script"),$t(o),ct(o,"link",_),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(s,o))}}function mT(_,t,n,a){var s=(s=v.current)?B$(s):null;if(!s)throw Error(l(446));switch(_){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=la(n.href),n=vn(s).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){_=la(n.href);var o=vn(s).hoistableStyles,c=o.get(_);if(c||(s=s.ownerDocument||s,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(_,c),(o=s.querySelector(ri(_)))&&!o._p&&(c.instance=o,c.state.loading=5),jt.has(_)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},jt.set(_,n),o||kA(s,_,n,c.state))),t&&a===null)throw Error(l(528,""));return c}if(t&&a!==null)throw Error(l(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=sa(n),n=vn(s).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,_))}}function la(_){return'href="'+Pt(_)+'"'}function ri(_){return'link[rel="stylesheet"]['+_+"]"}function yT(_){return A({},_,{"data-precedence":_.precedence,precedence:null})}function kA(_,t,n,a){_.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=_.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),ct(t,"link",n),$t(t),_.head.appendChild(t))}function sa(_){return'[src="'+Pt(_)+'"]'}function ui(_){return"script[async]"+_}function pT(_,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=_.querySelector('style[data-href~="'+Pt(n.href)+'"]');if(a)return t.instance=a,$t(a),a;var s=A({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(_.ownerDocument||_).createElement("style"),$t(a),ct(a,"style",s),G$(a,n.precedence,_),t.instance=a;case"stylesheet":s=la(n.href);var o=_.querySelector(ri(s));if(o)return t.state.loading|=4,t.instance=o,$t(o),o;a=yT(n),(s=jt.get(s))&&fo(a,s),o=(_.ownerDocument||_).createElement("link"),$t(o);var c=o;return c._p=new Promise(function(E,m){c.onload=E,c.onerror=m}),ct(o,"link",a),t.state.loading|=4,G$(o,n.precedence,_),t.instance=o;case"script":return o=sa(n.src),(s=_.querySelector(ui(o)))?(t.instance=s,$t(s),s):(a=n,(s=jt.get(o))&&(a=A({},n),To(a,s)),_=_.ownerDocument||_,s=_.createElement("script"),$t(s),ct(s,"link",a),_.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,G$(a,n.precedence,_));return t.instance}function G$(_,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=a.length?a[a.length-1]:null,o=s,c=0;c<a.length;c++){var E=a[c];if(E.dataset.precedence===t)o=E;else if(o!==s)break}o?o.parentNode.insertBefore(_,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(_,t.firstChild))}function fo(_,t){_.crossOrigin==null&&(_.crossOrigin=t.crossOrigin),_.referrerPolicy==null&&(_.referrerPolicy=t.referrerPolicy),_.title==null&&(_.title=t.title)}function To(_,t){_.crossOrigin==null&&(_.crossOrigin=t.crossOrigin),_.referrerPolicy==null&&(_.referrerPolicy=t.referrerPolicy),_.integrity==null&&(_.integrity=t.integrity)}var V$=null;function IT(_,t,n){if(V$===null){var a=new Map,s=V$=new Map;s.set(n,a)}else s=V$,a=s.get(n),a||(a=new Map,s.set(n,a));if(a.has(_))return a;for(a.set(_,null),n=n.getElementsByTagName(_),s=0;s<n.length;s++){var o=n[s];if(!(o[ga]||o[Tt]||_==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var c=o.getAttribute(t)||"";c=_+c;var E=a.get(c);E?E.push(o):a.set(c,[o])}}return a}function gT(_,t,n){_=_.ownerDocument||_,_.head.insertBefore(n,t==="title"?_.querySelector("head > title"):null)}function QA(_,t,n){if(n===1||t.itemProp!=null)return!1;switch(_){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return _=t.disabled,typeof t.precedence=="string"&&_==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function RT(_){return!(_.type==="stylesheet"&&(_.state.loading&3)===0)}var ci=null;function ZA(){}function JA(_,t,n){if(ci===null)throw Error(l(475));var a=ci;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var s=la(n.href),o=_.querySelector(ri(s));if(o){_=o._p,_!==null&&typeof _=="object"&&typeof _.then=="function"&&(a.count++,a=w$.bind(a),_.then(a,a)),t.state.loading|=4,t.instance=o,$t(o);return}o=_.ownerDocument||_,n=yT(n),(s=jt.get(s))&&fo(n,s),o=o.createElement("link"),$t(o);var c=o;c._p=new Promise(function(E,m){c.onload=E,c.onerror=m}),ct(o,"link",n),t.instance=o}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,_),(_=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=w$.bind(a),_.addEventListener("load",t),_.addEventListener("error",t))}}function _L(){if(ci===null)throw Error(l(475));var _=ci;return _.stylesheets&&_.count===0&&ho(_,_.stylesheets),0<_.count?function(t){var n=setTimeout(function(){if(_.stylesheets&&ho(_,_.stylesheets),_.unsuspend){var a=_.unsuspend;_.unsuspend=null,a()}},6e4);return _.unsuspend=t,function(){_.unsuspend=null,clearTimeout(n)}}:null}function w$(){if(this.count--,this.count===0){if(this.stylesheets)ho(this,this.stylesheets);else if(this.unsuspend){var _=this.unsuspend;this.unsuspend=null,_()}}}var W$=null;function ho(_,t){_.stylesheets=null,_.unsuspend!==null&&(_.count++,W$=new Map,t.forEach(tL,_),W$=null,w$.call(_))}function tL(_,t){if(!(t.state.loading&4)){var n=W$.get(_);if(n)var a=n.get(null);else{n=new Map,W$.set(_,n);for(var s=_.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<s.length;o++){var c=s[o];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(n.set(c.dataset.precedence,c),a=c)}a&&n.set(null,a)}s=t.instance,c=s.getAttribute("data-precedence"),o=n.get(c)||a,o===a&&n.set(null,s),n.set(c,s),this.count++,a=w$.bind(this),s.addEventListener("load",a),s.addEventListener("error",a),o?o.parentNode.insertBefore(s,o.nextSibling):(_=_.nodeType===9?_.head:_,_.insertBefore(s,_.firstChild)),t.state.loading|=4}}var fi={$$typeof:k,Provider:null,Consumer:null,_currentValue:a_,_currentValue2:a_,_threadCount:0};function eL(_,t,n,a,s,o,c,E){this.tag=1,this.containerInfo=_,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ul(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ul(0),this.hiddenUpdates=ul(null),this.identifierPrefix=a,this.onUncaughtError=s,this.onCaughtError=o,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function ST(_,t,n,a,s,o,c,E,m,O,V,j){return _=new eL(_,t,n,c,E,m,O,j),t=1,o===!0&&(t|=24),o=Ct(3,null,null,t),_.current=o,o.stateNode=_,t=kl(),t.refCount++,_.pooledCache=t,t.refCount++,o.memoizedState={element:a,isDehydrated:n,cache:t},_s(o),_}function vT(_){return _?(_=Gn,_):Gn}function NT(_,t,n,a,s,o){s=vT(s),a.context===null?a.context=s:a.pendingContext=s,a=Ce(t),a.payload={element:n},o=o===void 0?null:o,o!==null&&(a.callback=o),n=xe(_,a,t),n!==null&&(Dt(n,_,t),Ya(n,_,t))}function CT(_,t){if(_=_.memoizedState,_!==null&&_.dehydrated!==null){var n=_.retryLane;_.retryLane=n!==0&&n<t?n:t}}function Eo(_,t){CT(_,t),(_=_.alternate)&&CT(_,t)}function xT(_){if(_.tag===13){var t=Bn(_,67108864);t!==null&&Dt(t,_,67108864),Eo(_,67108864)}}var Y$=!0;function nL(_,t,n,a){var s=B.T;B.T=null;var o=z.p;try{z.p=2,Ao(_,t,n,a)}finally{z.p=o,B.T=s}}function aL(_,t,n,a){var s=B.T;B.T=null;var o=z.p;try{z.p=8,Ao(_,t,n,a)}finally{z.p=o,B.T=s}}function Ao(_,t,n,a){if(Y$){var s=Lo(a);if(s===null)ao(_,t,a,j$,n),MT(_,a);else if($L(s,_,t,n,a))a.stopPropagation();else if(MT(_,a),t&4&&-1<iL.indexOf(_)){for(;s!==null;){var o=Sn(s);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var c=Je(o.pendingLanes);if(c!==0){var E=o;for(E.pendingLanes|=2,E.entangledLanes|=2;c;){var m=1<<31-vt(c);E.entanglements[1]|=m,c&=~m}ee(o),(C_&6)===0&&(v$=G_()+500,$i(0))}}break;case 13:E=Bn(o,2),E!==null&&Dt(E,o,2),C$(),Eo(o,2)}if(o=Lo(a),o===null&&ao(_,t,a,j$,n),o===s)break;s=o}s!==null&&a.stopPropagation()}else ao(_,t,a,null,n)}}function Lo(_){return _=Il(_),mo(_)}var j$=null;function mo(_){if(j$=null,_=Rn(_),_!==null){var t=f(_);if(t===null)_=null;else{var n=t.tag;if(n===13){if(_=u(t),_!==null)return _;_=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;_=null}else t!==_&&(_=null)}}return j$=_,null}function bT(_){switch(_){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ie()){case Ze:return 2;case V_:return 8;case X_:case H_:return 32;case ma:return 268435456;default:return 32}default:return 32}}var yo=!1,Ye=null,je=null,Fe=null,Ti=new Map,di=new Map,ze=[],iL="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function MT(_,t){switch(_){case"focusin":case"focusout":Ye=null;break;case"dragenter":case"dragleave":je=null;break;case"mouseover":case"mouseout":Fe=null;break;case"pointerover":case"pointerout":Ti.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":di.delete(t.pointerId)}}function hi(_,t,n,a,s,o){return _===null||_.nativeEvent!==o?(_={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:o,targetContainers:[s]},t!==null&&(t=Sn(t),t!==null&&xT(t)),_):(_.eventSystemFlags|=a,t=_.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),_)}function $L(_,t,n,a,s){switch(t){case"focusin":return Ye=hi(Ye,_,t,n,a,s),!0;case"dragenter":return je=hi(je,_,t,n,a,s),!0;case"mouseover":return Fe=hi(Fe,_,t,n,a,s),!0;case"pointerover":var o=s.pointerId;return Ti.set(o,hi(Ti.get(o)||null,_,t,n,a,s)),!0;case"gotpointercapture":return o=s.pointerId,di.set(o,hi(di.get(o)||null,_,t,n,a,s)),!0}return!1}function OT(_){var t=Rn(_.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){_.blockedOn=t,J0(_.priority,function(){if(n.tag===13){var a=Ot();a=cl(a);var s=Bn(n,a);s!==null&&Dt(s,n,a),Eo(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){_.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}_.blockedOn=null}function F$(_){if(_.blockedOn!==null)return!1;for(var t=_.targetContainers;0<t.length;){var n=Lo(_.nativeEvent);if(n===null){n=_.nativeEvent;var a=new n.constructor(n.type,n);pl=a,n.target.dispatchEvent(a),pl=null}else return t=Sn(n),t!==null&&xT(t),_.blockedOn=n,!1;t.shift()}return!0}function DT(_,t,n){F$(_)&&n.delete(t)}function lL(){yo=!1,Ye!==null&&F$(Ye)&&(Ye=null),je!==null&&F$(je)&&(je=null),Fe!==null&&F$(Fe)&&(Fe=null),Ti.forEach(DT),di.forEach(DT)}function z$(_,t){_.blockedOn===t&&(_.blockedOn=null,yo||(yo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,lL)))}var X$=null;function HT(_){X$!==_&&(X$=_,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){X$===_&&(X$=null);for(var t=0;t<_.length;t+=3){var n=_[t],a=_[t+1],s=_[t+2];if(typeof a!="function"){if(mo(a||n)===null)continue;break}var o=Sn(n);o!==null&&(_.splice(t,3),t-=3,Ls(o,{pending:!0,data:s,method:n.method,action:a},a,s))}}))}function Ei(_){function t(m){return z$(m,_)}Ye!==null&&z$(Ye,_),je!==null&&z$(je,_),Fe!==null&&z$(Fe,_),Ti.forEach(t),di.forEach(t);for(var n=0;n<ze.length;n++){var a=ze[n];a.blockedOn===_&&(a.blockedOn=null)}for(;0<ze.length&&(n=ze[0],n.blockedOn===null);)OT(n),n.blockedOn===null&&ze.shift();if(n=(_.ownerDocument||_).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var s=n[a],o=n[a+1],c=s[mt]||null;if(typeof o=="function")c||HT(n);else if(c){var E=null;if(o&&o.hasAttribute("formAction")){if(s=o,c=o[mt]||null)E=c.formAction;else if(mo(s)!==null)continue}else E=c.action;typeof E=="function"?n[a+1]=E:(n.splice(a,3),a-=3),HT(n)}}}function po(_){this._internalRoot=_}K$.prototype.render=po.prototype.render=function(_){var t=this._internalRoot;if(t===null)throw Error(l(409));var n=t.current,a=Ot();NT(n,a,_,t,null,null)},K$.prototype.unmount=po.prototype.unmount=function(){var _=this._internalRoot;if(_!==null){this._internalRoot=null;var t=_.containerInfo;NT(_.current,2,null,_,null,null),C$(),t[gn]=null}};function K$(_){this._internalRoot=_}K$.prototype.unstable_scheduleHydration=function(_){if(_){var t=Qr();_={blockedOn:null,target:_,priority:t};for(var n=0;n<ze.length&&t!==0&&t<ze[n].priority;n++);ze.splice(n,0,_),n===0&&OT(_)}};var UT=i.version;if(UT!=="19.1.1")throw Error(l(527,UT,"19.1.1"));z.findDOMNode=function(_){var t=_._reactInternals;if(t===void 0)throw typeof _.render=="function"?Error(l(188)):(_=Object.keys(_).join(","),Error(l(268,_)));return _=d(t),_=_!==null?h(_):null,_=_===null?null:_.stateNode,_};var sL={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var q$=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!q$.isDisabled&&q$.supportsFiber)try{ya=q$.inject(sL),St=q$}catch{}}return Li.createRoot=function(_,t){if(!r(_))throw Error(l(299));var n=!1,a="",s=Qc,o=Zc,c=Jc,E=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(E=t.unstable_transitionCallbacks)),t=ST(_,1,!1,null,null,n,a,s,o,c,E,null),_[gn]=t.current,no(_),new po(t)},Li.hydrateRoot=function(_,t,n){if(!r(_))throw Error(l(299));var a=!1,s="",o=Qc,c=Zc,E=Jc,m=null,O=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(m=n.unstable_transitionCallbacks),n.formState!==void 0&&(O=n.formState)),t=ST(_,1,!0,t,n??null,a,s,o,c,E,m,O),t.context=vT(null),n=t.current,a=Ot(),a=cl(a),s=Ce(a),s.callback=null,xe(n,s,a),n=a,t.current.lanes=n,Ia(t,n),ee(t),_[gn]=t.current,no(_),new K$(t)},Li.version="19.1.1",Li}var zT;function LL(){if(zT)return Ro.exports;zT=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(i){console.error(i)}}return e(),Ro.exports=AL(),Ro.exports}var mL=LL();const oh=i_.createContext({});function yL(e){const i=i_.useRef(null);return i.current===null&&(i.current=e()),i.current}const dr=typeof window<"u",pL=dr?i_.useLayoutEffect:i_.useEffect,hr=i_.createContext(null);function Er(e,i){e.indexOf(i)===-1&&e.push(i)}function Ar(e,i){const $=e.indexOf(i);$>-1&&e.splice($,1)}const ye=(e,i,$)=>$>i?i:$<e?e:$;let Lr=()=>{};const pe={},rh=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function uh(e){return typeof e=="object"&&e!==null}const ch=e=>/^0[^.\s]+$/u.test(e);function mr(e){let i;return()=>(i===void 0&&(i=e()),i)}const Xt=e=>e,IL=(e,i)=>$=>i(e($)),Oi=(...e)=>e.reduce(IL),vi=(e,i,$)=>{const l=i-e;return l===0?1:($-e)/l};class yr{constructor(){this.subscriptions=[]}add(i){return Er(this.subscriptions,i),()=>Ar(this.subscriptions,i)}notify(i,$,l){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](i,$,l);else for(let f=0;f<r;f++){const u=this.subscriptions[f];u&&u(i,$,l)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ne=e=>e*1e3,ae=e=>e/1e3;function fh(e,i){return i?e*(1e3/i):0}const Th=(e,i,$)=>(((1-3*$+3*i)*e+(3*$-6*i))*e+3*i)*e,gL=1e-7,RL=12;function SL(e,i,$,l,r){let f,u,T=0;do u=i+($-i)/2,f=Th(u,l,r)-e,f>0?$=u:i=u;while(Math.abs(f)>gL&&++T<RL);return u}function Di(e,i,$,l){if(e===i&&$===l)return Xt;const r=f=>SL(f,0,1,e,$);return f=>f===0||f===1?f:Th(r(f),i,l)}const dh=e=>i=>i<=.5?e(2*i)/2:(2-e(2*(1-i)))/2,hh=e=>i=>1-e(1-i),Eh=Di(.33,1.53,.69,.99),pr=hh(Eh),Ah=dh(pr),Lh=e=>(e*=2)<1?.5*pr(e):.5*(2-Math.pow(2,-10*(e-1))),Ir=e=>1-Math.sin(Math.acos(e)),mh=hh(Ir),yh=dh(Ir),vL=Di(.42,0,1,1),NL=Di(0,0,.58,1),ph=Di(.42,0,.58,1),CL=e=>Array.isArray(e)&&typeof e[0]!="number",Ih=e=>Array.isArray(e)&&typeof e[0]=="number",xL={linear:Xt,easeIn:vL,easeInOut:ph,easeOut:NL,circIn:Ir,circInOut:yh,circOut:mh,backIn:pr,backInOut:Ah,backOut:Eh,anticipate:Lh},bL=e=>typeof e=="string",XT=e=>{if(Ih(e)){Lr(e.length===4);const[i,$,l,r]=e;return Di(i,$,l,r)}else if(bL(e))return xL[e];return e},k$=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function ML(e,i){let $=new Set,l=new Set,r=!1,f=!1;const u=new WeakSet;let T={delta:0,timestamp:0,isProcessing:!1};function d(A){u.has(A)&&(h.schedule(A),e()),A(T)}const h={schedule:(A,y=!1,S=!1)=>{const X=S&&r?$:l;return y&&u.add(A),X.has(A)||X.add(A),A},cancel:A=>{l.delete(A),u.delete(A)},process:A=>{if(T=A,r){f=!0;return}r=!0,[$,l]=[l,$],$.forEach(d),$.clear(),r=!1,f&&(f=!1,h.process(A))}};return h}const OL=40;function gh(e,i){let $=!1,l=!0;const r={delta:0,timestamp:0,isProcessing:!1},f=()=>$=!0,u=k$.reduce((k,g)=>(k[g]=ML(f),k),{}),{setup:T,read:d,resolveKeyframes:h,preUpdate:A,update:y,preRender:S,render:G,postRender:X}=u,Z=()=>{const k=pe.useManualTiming?r.timestamp:performance.now();$=!1,pe.useManualTiming||(r.delta=l?1e3/60:Math.max(Math.min(k-r.timestamp,OL),1)),r.timestamp=k,r.isProcessing=!0,T.process(r),d.process(r),h.process(r),A.process(r),y.process(r),S.process(r),G.process(r),X.process(r),r.isProcessing=!1,$&&i&&(l=!1,e(Z))},__=()=>{$=!0,l=!0,r.isProcessing||e(Z)};return{schedule:k$.reduce((k,g)=>{const b=u[g];return k[g]=(t_,e_=!1,W=!1)=>($||__(),b.schedule(t_,e_,W)),k},{}),cancel:k=>{for(let g=0;g<k$.length;g++)u[k$[g]].cancel(k)},state:r,steps:u}}const{schedule:W_,cancel:qe,state:ft,steps:Co}=gh(typeof requestAnimationFrame<"u"?requestAnimationFrame:Xt,!0);let J$;function DL(){J$=void 0}const Rt={now:()=>(J$===void 0&&Rt.set(ft.isProcessing||pe.useManualTiming?ft.timestamp:performance.now()),J$),set:e=>{J$=e,queueMicrotask(DL)}},Rh=e=>i=>typeof i=="string"&&i.startsWith(e),gr=Rh("--"),HL=Rh("var(--"),Rr=e=>HL(e)?UL.test(e.split("/*")[0].trim()):!1,UL=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Ea={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ni={...Ea,transform:e=>ye(0,1,e)},Q$={...Ea,default:1},pi=e=>Math.round(e*1e5)/1e5,Sr=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function PL(e){return e==null}const BL=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,vr=(e,i)=>$=>!!(typeof $=="string"&&BL.test($)&&$.startsWith(e)||i&&!PL($)&&Object.prototype.hasOwnProperty.call($,i)),Sh=(e,i,$)=>l=>{if(typeof l!="string")return l;const[r,f,u,T]=l.match(Sr);return{[e]:parseFloat(r),[i]:parseFloat(f),[$]:parseFloat(u),alpha:T!==void 0?parseFloat(T):1}},GL=e=>ye(0,255,e),xo={...Ea,transform:e=>Math.round(GL(e))},mn={test:vr("rgb","red"),parse:Sh("red","green","blue"),transform:({red:e,green:i,blue:$,alpha:l=1})=>"rgba("+xo.transform(e)+", "+xo.transform(i)+", "+xo.transform($)+", "+pi(Ni.transform(l))+")"};function VL(e){let i="",$="",l="",r="";return e.length>5?(i=e.substring(1,3),$=e.substring(3,5),l=e.substring(5,7),r=e.substring(7,9)):(i=e.substring(1,2),$=e.substring(2,3),l=e.substring(3,4),r=e.substring(4,5),i+=i,$+=$,l+=l,r+=r),{red:parseInt(i,16),green:parseInt($,16),blue:parseInt(l,16),alpha:r?parseInt(r,16)/255:1}}const Fo={test:vr("#"),parse:VL,transform:mn.transform},Hi=e=>({test:i=>typeof i=="string"&&i.endsWith(e)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${e}`}),Ke=Hi("deg"),ie=Hi("%"),f_=Hi("px"),wL=Hi("vh"),WL=Hi("vw"),KT={...ie,parse:e=>ie.parse(e)/100,transform:e=>ie.transform(e*100)},oa={test:vr("hsl","hue"),parse:Sh("hue","saturation","lightness"),transform:({hue:e,saturation:i,lightness:$,alpha:l=1})=>"hsla("+Math.round(e)+", "+ie.transform(pi(i))+", "+ie.transform(pi($))+", "+pi(Ni.transform(l))+")"},nt={test:e=>mn.test(e)||Fo.test(e)||oa.test(e),parse:e=>mn.test(e)?mn.parse(e):oa.test(e)?oa.parse(e):Fo.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?mn.transform(e):oa.transform(e),getAnimatableNone:e=>{const i=nt.parse(e);return i.alpha=0,nt.transform(i)}},YL=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function jL(e){return isNaN(e)&&typeof e=="string"&&(e.match(Sr)?.length||0)+(e.match(YL)?.length||0)>0}const vh="number",Nh="color",FL="var",zL="var(",qT="${}",XL=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ci(e){const i=e.toString(),$=[],l={color:[],number:[],var:[]},r=[];let f=0;const T=i.replace(XL,d=>(nt.test(d)?(l.color.push(f),r.push(Nh),$.push(nt.parse(d))):d.startsWith(zL)?(l.var.push(f),r.push(FL),$.push(d)):(l.number.push(f),r.push(vh),$.push(parseFloat(d))),++f,qT)).split(qT);return{values:$,split:T,indexes:l,types:r}}function Ch(e){return Ci(e).values}function xh(e){const{split:i,types:$}=Ci(e),l=i.length;return r=>{let f="";for(let u=0;u<l;u++)if(f+=i[u],r[u]!==void 0){const T=$[u];T===vh?f+=pi(r[u]):T===Nh?f+=nt.transform(r[u]):f+=r[u]}return f}}const KL=e=>typeof e=="number"?0:nt.test(e)?nt.getAnimatableNone(e):e;function qL(e){const i=Ch(e);return xh(e)(i.map(KL))}const ke={test:jL,parse:Ch,createTransformer:xh,getAnimatableNone:qL};function bo(e,i,$){return $<0&&($+=1),$>1&&($-=1),$<1/6?e+(i-e)*6*$:$<1/2?i:$<2/3?e+(i-e)*(2/3-$)*6:e}function kL({hue:e,saturation:i,lightness:$,alpha:l}){e/=360,i/=100,$/=100;let r=0,f=0,u=0;if(!i)r=f=u=$;else{const T=$<.5?$*(1+i):$+i-$*i,d=2*$-T;r=bo(d,T,e+1/3),f=bo(d,T,e),u=bo(d,T,e-1/3)}return{red:Math.round(r*255),green:Math.round(f*255),blue:Math.round(u*255),alpha:l}}function nl(e,i){return $=>$>0?i:e}const F_=(e,i,$)=>e+(i-e)*$,Mo=(e,i,$)=>{const l=e*e,r=$*(i*i-l)+l;return r<0?0:Math.sqrt(r)},QL=[Fo,mn,oa],ZL=e=>QL.find(i=>i.test(e));function kT(e){const i=ZL(e);if(!i)return!1;let $=i.parse(e);return i===oa&&($=kL($)),$}const QT=(e,i)=>{const $=kT(e),l=kT(i);if(!$||!l)return nl(e,i);const r={...$};return f=>(r.red=Mo($.red,l.red,f),r.green=Mo($.green,l.green,f),r.blue=Mo($.blue,l.blue,f),r.alpha=F_($.alpha,l.alpha,f),mn.transform(r))},zo=new Set(["none","hidden"]);function JL(e,i){return zo.has(e)?$=>$<=0?e:i:$=>$>=1?i:e}function _m(e,i){return $=>F_(e,i,$)}function Nr(e){return typeof e=="number"?_m:typeof e=="string"?Rr(e)?nl:nt.test(e)?QT:nm:Array.isArray(e)?bh:typeof e=="object"?nt.test(e)?QT:tm:nl}function bh(e,i){const $=[...e],l=$.length,r=e.map((f,u)=>Nr(f)(f,i[u]));return f=>{for(let u=0;u<l;u++)$[u]=r[u](f);return $}}function tm(e,i){const $={...e,...i},l={};for(const r in $)e[r]!==void 0&&i[r]!==void 0&&(l[r]=Nr(e[r])(e[r],i[r]));return r=>{for(const f in l)$[f]=l[f](r);return $}}function em(e,i){const $=[],l={color:0,var:0,number:0};for(let r=0;r<i.values.length;r++){const f=i.types[r],u=e.indexes[f][l[f]],T=e.values[u]??0;$[r]=T,l[f]++}return $}const nm=(e,i)=>{const $=ke.createTransformer(i),l=Ci(e),r=Ci(i);return l.indexes.var.length===r.indexes.var.length&&l.indexes.color.length===r.indexes.color.length&&l.indexes.number.length>=r.indexes.number.length?zo.has(e)&&!r.values.length||zo.has(i)&&!l.values.length?JL(e,i):Oi(bh(em(l,r),r.values),$):nl(e,i)};function Mh(e,i,$){return typeof e=="number"&&typeof i=="number"&&typeof $=="number"?F_(e,i,$):Nr(e)(e,i)}const am=e=>{const i=({timestamp:$})=>e($);return{start:($=!0)=>W_.update(i,$),stop:()=>qe(i),now:()=>ft.isProcessing?ft.timestamp:Rt.now()}},Oh=(e,i,$=10)=>{let l="";const r=Math.max(Math.round(i/$),2);for(let f=0;f<r;f++)l+=Math.round(e(f/(r-1))*1e4)/1e4+", ";return`linear(${l.substring(0,l.length-2)})`},al=2e4;function Cr(e){let i=0;const $=50;let l=e.next(i);for(;!l.done&&i<al;)i+=$,l=e.next(i);return i>=al?1/0:i}function im(e,i=100,$){const l=$({...e,keyframes:[0,i]}),r=Math.min(Cr(l),al);return{type:"keyframes",ease:f=>l.next(r*f).value/i,duration:ae(r)}}const $m=5;function Dh(e,i,$){const l=Math.max(i-$m,0);return fh($-e(l),i-l)}const k_={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Oo=.001;function lm({duration:e=k_.duration,bounce:i=k_.bounce,velocity:$=k_.velocity,mass:l=k_.mass}){let r,f,u=1-i;u=ye(k_.minDamping,k_.maxDamping,u),e=ye(k_.minDuration,k_.maxDuration,ae(e)),u<1?(r=h=>{const A=h*u,y=A*e,S=A-$,G=Xo(h,u),X=Math.exp(-y);return Oo-S/G*X},f=h=>{const y=h*u*e,S=y*$+$,G=Math.pow(u,2)*Math.pow(h,2)*e,X=Math.exp(-y),Z=Xo(Math.pow(h,2),u);return(-r(h)+Oo>0?-1:1)*((S-G)*X)/Z}):(r=h=>{const A=Math.exp(-h*e),y=(h-$)*e+1;return-Oo+A*y},f=h=>{const A=Math.exp(-h*e),y=($-h)*(e*e);return A*y});const T=5/e,d=om(r,f,T);if(e=ne(e),isNaN(d))return{stiffness:k_.stiffness,damping:k_.damping,duration:e};{const h=Math.pow(d,2)*l;return{stiffness:h,damping:u*2*Math.sqrt(l*h),duration:e}}}const sm=12;function om(e,i,$){let l=$;for(let r=1;r<sm;r++)l=l-e(l)/i(l);return l}function Xo(e,i){return e*Math.sqrt(1-i*i)}const rm=["duration","bounce"],um=["stiffness","damping","mass"];function ZT(e,i){return i.some($=>e[$]!==void 0)}function cm(e){let i={velocity:k_.velocity,stiffness:k_.stiffness,damping:k_.damping,mass:k_.mass,isResolvedFromDuration:!1,...e};if(!ZT(e,um)&&ZT(e,rm))if(e.visualDuration){const $=e.visualDuration,l=2*Math.PI/($*1.2),r=l*l,f=2*ye(.05,1,1-(e.bounce||0))*Math.sqrt(r);i={...i,mass:k_.mass,stiffness:r,damping:f}}else{const $=lm(e);i={...i,...$,mass:k_.mass},i.isResolvedFromDuration=!0}return i}function il(e=k_.visualDuration,i=k_.bounce){const $=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:i}:e;let{restSpeed:l,restDelta:r}=$;const f=$.keyframes[0],u=$.keyframes[$.keyframes.length-1],T={done:!1,value:f},{stiffness:d,damping:h,mass:A,duration:y,velocity:S,isResolvedFromDuration:G}=cm({...$,velocity:-ae($.velocity||0)}),X=S||0,Z=h/(2*Math.sqrt(d*A)),__=u-f,J=ae(Math.sqrt(d/A)),n_=Math.abs(__)<5;l||(l=n_?k_.restSpeed.granular:k_.restSpeed.default),r||(r=n_?k_.restDelta.granular:k_.restDelta.default);let k;if(Z<1){const b=Xo(J,Z);k=t_=>{const e_=Math.exp(-Z*J*t_);return u-e_*((X+Z*J*__)/b*Math.sin(b*t_)+__*Math.cos(b*t_))}}else if(Z===1)k=b=>u-Math.exp(-J*b)*(__+(X+J*__)*b);else{const b=J*Math.sqrt(Z*Z-1);k=t_=>{const e_=Math.exp(-Z*J*t_),W=Math.min(b*t_,300);return u-e_*((X+Z*J*__)*Math.sinh(W)+b*__*Math.cosh(W))/b}}const g={calculatedDuration:G&&y||null,next:b=>{const t_=k(b);if(G)T.done=b>=y;else{let e_=b===0?X:0;Z<1&&(e_=b===0?ne(X):Dh(k,b,t_));const W=Math.abs(e_)<=l,p_=Math.abs(u-t_)<=r;T.done=W&&p_}return T.value=T.done?u:t_,T},toString:()=>{const b=Math.min(Cr(g),al),t_=Oh(e_=>g.next(b*e_).value,b,30);return b+"ms "+t_},toTransition:()=>{}};return g}il.applyToOptions=e=>{const i=im(e,100,il);return e.ease=i.ease,e.duration=ne(i.duration),e.type="keyframes",e};function Ko({keyframes:e,velocity:i=0,power:$=.8,timeConstant:l=325,bounceDamping:r=10,bounceStiffness:f=500,modifyTarget:u,min:T,max:d,restDelta:h=.5,restSpeed:A}){const y=e[0],S={done:!1,value:y},G=W=>T!==void 0&&W<T||d!==void 0&&W>d,X=W=>T===void 0?d:d===void 0||Math.abs(T-W)<Math.abs(d-W)?T:d;let Z=$*i;const __=y+Z,J=u===void 0?__:u(__);J!==__&&(Z=J-y);const n_=W=>-Z*Math.exp(-W/l),k=W=>J+n_(W),g=W=>{const p_=n_(W),P_=k(W);S.done=Math.abs(p_)<=h,S.value=S.done?J:P_};let b,t_;const e_=W=>{G(S.value)&&(b=W,t_=il({keyframes:[S.value,X(S.value)],velocity:Dh(k,W,S.value),damping:r,stiffness:f,restDelta:h,restSpeed:A}))};return e_(0),{calculatedDuration:null,next:W=>{let p_=!1;return!t_&&b===void 0&&(p_=!0,g(W),e_(W)),b!==void 0&&W>=b?t_.next(W-b):(!p_&&g(W),S)}}}function fm(e,i,$){const l=[],r=$||pe.mix||Mh,f=e.length-1;for(let u=0;u<f;u++){let T=r(e[u],e[u+1]);if(i){const d=Array.isArray(i)?i[u]||Xt:i;T=Oi(d,T)}l.push(T)}return l}function Tm(e,i,{clamp:$=!0,ease:l,mixer:r}={}){const f=e.length;if(Lr(f===i.length),f===1)return()=>i[0];if(f===2&&i[0]===i[1])return()=>i[1];const u=e[0]===e[1];e[0]>e[f-1]&&(e=[...e].reverse(),i=[...i].reverse());const T=fm(i,l,r),d=T.length,h=A=>{if(u&&A<e[0])return i[0];let y=0;if(d>1)for(;y<e.length-2&&!(A<e[y+1]);y++);const S=vi(e[y],e[y+1],A);return T[y](S)};return $?A=>h(ye(e[0],e[f-1],A)):h}function dm(e,i){const $=e[e.length-1];for(let l=1;l<=i;l++){const r=vi(0,i,l);e.push(F_($,1,r))}}function hm(e){const i=[0];return dm(i,e.length-1),i}function Em(e,i){return e.map($=>$*i)}function Am(e,i){return e.map(()=>i||ph).splice(0,e.length-1)}function Ii({duration:e=300,keyframes:i,times:$,ease:l="easeInOut"}){const r=CL(l)?l.map(XT):XT(l),f={done:!1,value:i[0]},u=Em($&&$.length===i.length?$:hm(i),e),T=Tm(u,i,{ease:Array.isArray(r)?r:Am(i,r)});return{calculatedDuration:e,next:d=>(f.value=T(d),f.done=d>=e,f)}}const Lm=e=>e!==null;function xr(e,{repeat:i,repeatType:$="loop"},l,r=1){const f=e.filter(Lm),T=r<0||i&&$!=="loop"&&i%2===1?0:f.length-1;return!T||l===void 0?f[T]:l}const mm={decay:Ko,inertia:Ko,tween:Ii,keyframes:Ii,spring:il};function Hh(e){typeof e.type=="string"&&(e.type=mm[e.type])}class br{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,$){return this.finished.then(i,$)}}const ym=e=>e/100;class Mr extends br{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:$}=this.options;$&&$.updatedAt!==Rt.now()&&this.tick(Rt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;Hh(i);const{type:$=Ii,repeat:l=0,repeatDelay:r=0,repeatType:f,velocity:u=0}=i;let{keyframes:T}=i;const d=$||Ii;d!==Ii&&typeof T[0]!="number"&&(this.mixKeyframes=Oi(ym,Mh(T[0],T[1])),T=[0,100]);const h=d({...i,keyframes:T});f==="mirror"&&(this.mirroredGenerator=d({...i,keyframes:[...T].reverse(),velocity:-u})),h.calculatedDuration===null&&(h.calculatedDuration=Cr(h));const{calculatedDuration:A}=h;this.calculatedDuration=A,this.resolvedDuration=A+r,this.totalDuration=this.resolvedDuration*(l+1)-r,this.generator=h}updateTime(i){const $=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=$}tick(i,$=!1){const{generator:l,totalDuration:r,mixKeyframes:f,mirroredGenerator:u,resolvedDuration:T,calculatedDuration:d}=this;if(this.startTime===null)return l.next(0);const{delay:h=0,keyframes:A,repeat:y,repeatType:S,repeatDelay:G,type:X,onUpdate:Z,finalKeyframe:__}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-r/this.speed,this.startTime)),$?this.currentTime=i:this.updateTime(i);const J=this.currentTime-h*(this.playbackSpeed>=0?1:-1),n_=this.playbackSpeed>=0?J<0:J>r;this.currentTime=Math.max(J,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let k=this.currentTime,g=l;if(y){const W=Math.min(this.currentTime,r)/T;let p_=Math.floor(W),P_=W%1;!P_&&W>=1&&(P_=1),P_===1&&p_--,p_=Math.min(p_,y+1),!!(p_%2)&&(S==="reverse"?(P_=1-P_,G&&(P_-=G/T)):S==="mirror"&&(g=u)),k=ye(0,1,P_)*T}const b=n_?{done:!1,value:A[0]}:g.next(k);f&&(b.value=f(b.value));let{done:t_}=b;!n_&&d!==null&&(t_=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const e_=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&t_);return e_&&X!==Ko&&(b.value=xr(A,this.options,__,this.speed)),Z&&Z(b.value),e_&&this.finish(),b}then(i,$){return this.finished.then(i,$)}get duration(){return ae(this.calculatedDuration)}get time(){return ae(this.currentTime)}set time(i){i=ne(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(Rt.now());const $=this.playbackSpeed!==i;this.playbackSpeed=i,$&&(this.time=ae(this.currentTime))}play(){if(this.isStopped)return;const{driver:i=am,startTime:$}=this.options;this.driver||(this.driver=i(r=>this.tick(r))),this.options.onPlay?.();const l=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=l):this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime||(this.startTime=$??l),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Rt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),i.observe(this)}}function pm(e){for(let i=1;i<e.length;i++)e[i]??(e[i]=e[i-1])}const yn=e=>e*180/Math.PI,qo=e=>{const i=yn(Math.atan2(e[1],e[0]));return ko(i)},Im={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:qo,rotateZ:qo,skewX:e=>yn(Math.atan(e[1])),skewY:e=>yn(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},ko=e=>(e=e%360,e<0&&(e+=360),e),JT=qo,_d=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),td=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),gm={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:_d,scaleY:td,scale:e=>(_d(e)+td(e))/2,rotateX:e=>ko(yn(Math.atan2(e[6],e[5]))),rotateY:e=>ko(yn(Math.atan2(-e[2],e[0]))),rotateZ:JT,rotate:JT,skewX:e=>yn(Math.atan(e[4])),skewY:e=>yn(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Qo(e){return e.includes("scale")?1:0}function Zo(e,i){if(!e||e==="none")return Qo(i);const $=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let l,r;if($)l=gm,r=$;else{const T=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);l=Im,r=T}if(!r)return Qo(i);const f=l[i],u=r[1].split(",").map(Sm);return typeof f=="function"?f(u):u[f]}const Rm=(e,i)=>{const{transform:$="none"}=getComputedStyle(e);return Zo($,i)};function Sm(e){return parseFloat(e.trim())}const Aa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],La=new Set(Aa),ed=e=>e===Ea||e===f_,vm=new Set(["x","y","z"]),Nm=Aa.filter(e=>!vm.has(e));function Cm(e){const i=[];return Nm.forEach($=>{const l=e.getValue($);l!==void 0&&(i.push([$,l.get()]),l.set($.startsWith("scale")?1:0))}),i}const pn={width:({x:e},{paddingLeft:i="0",paddingRight:$="0"})=>e.max-e.min-parseFloat(i)-parseFloat($),height:({y:e},{paddingTop:i="0",paddingBottom:$="0"})=>e.max-e.min-parseFloat(i)-parseFloat($),top:(e,{top:i})=>parseFloat(i),left:(e,{left:i})=>parseFloat(i),bottom:({y:e},{top:i})=>parseFloat(i)+(e.max-e.min),right:({x:e},{left:i})=>parseFloat(i)+(e.max-e.min),x:(e,{transform:i})=>Zo(i,"x"),y:(e,{transform:i})=>Zo(i,"y")};pn.translateX=pn.x;pn.translateY=pn.y;const In=new Set;let Jo=!1,_r=!1,tr=!1;function Uh(){if(_r){const e=Array.from(In).filter(l=>l.needsMeasurement),i=new Set(e.map(l=>l.element)),$=new Map;i.forEach(l=>{const r=Cm(l);r.length&&($.set(l,r),l.render())}),e.forEach(l=>l.measureInitialState()),i.forEach(l=>{l.render();const r=$.get(l);r&&r.forEach(([f,u])=>{l.getValue(f)?.set(u)})}),e.forEach(l=>l.measureEndState()),e.forEach(l=>{l.suspendedScrollY!==void 0&&window.scrollTo(0,l.suspendedScrollY)})}_r=!1,Jo=!1,In.forEach(e=>e.complete(tr)),In.clear()}function Ph(){In.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(_r=!0)})}function xm(){tr=!0,Ph(),Uh(),tr=!1}class Or{constructor(i,$,l,r,f,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=$,this.name=l,this.motionValue=r,this.element=f,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(In.add(this),Jo||(Jo=!0,W_.read(Ph),W_.resolveKeyframes(Uh))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:$,element:l,motionValue:r}=this;if(i[0]===null){const f=r?.get(),u=i[i.length-1];if(f!==void 0)i[0]=f;else if(l&&$){const T=l.readValue($,u);T!=null&&(i[0]=T)}i[0]===void 0&&(i[0]=u),r&&f===void 0&&r.set(i[0])}pm(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),In.delete(this)}cancel(){this.state==="scheduled"&&(In.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const bm=e=>e.startsWith("--");function Mm(e,i,$){bm(i)?e.style.setProperty(i,$):e.style[i]=$}const Om=mr(()=>window.ScrollTimeline!==void 0),Dm={};function Hm(e,i){const $=mr(e);return()=>Dm[i]??$()}const Bh=Hm(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),yi=([e,i,$,l])=>`cubic-bezier(${e}, ${i}, ${$}, ${l})`,nd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:yi([0,.65,.55,1]),circOut:yi([.55,0,1,.45]),backIn:yi([.31,.01,.66,-.59]),backOut:yi([.33,1.53,.69,.99])};function Gh(e,i){if(e)return typeof e=="function"?Bh()?Oh(e,i):"ease-out":Ih(e)?yi(e):Array.isArray(e)?e.map($=>Gh($,i)||nd.easeOut):nd[e]}function Um(e,i,$,{delay:l=0,duration:r=300,repeat:f=0,repeatType:u="loop",ease:T="easeOut",times:d}={},h=void 0){const A={[i]:$};d&&(A.offset=d);const y=Gh(T,r);Array.isArray(y)&&(A.easing=y);const S={delay:l,duration:r,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:f+1,direction:u==="reverse"?"alternate":"normal"};return h&&(S.pseudoElement=h),e.animate(A,S)}function Vh(e){return typeof e=="function"&&"applyToOptions"in e}function Pm({type:e,...i}){return Vh(e)&&Bh()?e.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class Bm extends br{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,!i)return;const{element:$,name:l,keyframes:r,pseudoElement:f,allowFlatten:u=!1,finalKeyframe:T,onComplete:d}=i;this.isPseudoElement=!!f,this.allowFlatten=u,this.options=i,Lr(typeof i.type!="string");const h=Pm(i);this.animation=Um($,l,r,h,f),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!f){const A=xr(r,this.options,T,this.speed);this.updateMotionValue?this.updateMotionValue(A):Mm($,l,A),this.animation.cancel()}d?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const i=this.animation.effect?.getComputedTiming?.().duration||0;return ae(Number(i))}get time(){return ae(Number(this.animation.currentTime)||0)}set time(i){this.finishedTime=null,this.animation.currentTime=ne(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(i){this.animation.startTime=i}attachTimeline({timeline:i,observe:$}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,i&&Om()?(this.animation.timeline=i,Xt):$(this)}}const wh={anticipate:Lh,backInOut:Ah,circInOut:yh};function Gm(e){return e in wh}function Vm(e){typeof e.ease=="string"&&Gm(e.ease)&&(e.ease=wh[e.ease])}const ad=10;class wm extends Bm{constructor(i){Vm(i),Hh(i),super(i),i.startTime&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:$,onUpdate:l,onComplete:r,element:f,...u}=this.options;if(!$)return;if(i!==void 0){$.set(i);return}const T=new Mr({...u,autoplay:!1}),d=ne(this.finishedTime??this.time);$.setWithVelocity(T.sample(d-ad).value,T.sample(d).value,ad),T.stop()}}const id=(e,i)=>i==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ke.test(e)||e==="0")&&!e.startsWith("url("));function Wm(e){const i=e[0];if(e.length===1)return!0;for(let $=0;$<e.length;$++)if(e[$]!==i)return!0}function Ym(e,i,$,l){const r=e[0];if(r===null)return!1;if(i==="display"||i==="visibility")return!0;const f=e[e.length-1],u=id(r,i),T=id(f,i);return!u||!T?!1:Wm(e)||($==="spring"||Vh($))&&l}function er(e){e.duration=0,e.type}const jm=new Set(["opacity","clipPath","filter","transform"]),Fm=mr(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function zm(e){const{motionValue:i,name:$,repeatDelay:l,repeatType:r,damping:f,type:u}=e;if(!(i?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=i.owner.getProps();return Fm()&&$&&jm.has($)&&($!=="transform"||!h)&&!d&&!l&&r!=="mirror"&&f!==0&&u!=="inertia"}const Xm=40;class Km extends br{constructor({autoplay:i=!0,delay:$=0,type:l="keyframes",repeat:r=0,repeatDelay:f=0,repeatType:u="loop",keyframes:T,name:d,motionValue:h,element:A,...y}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Rt.now();const S={autoplay:i,delay:$,type:l,repeat:r,repeatDelay:f,repeatType:u,name:d,motionValue:h,element:A,...y},G=A?.KeyframeResolver||Or;this.keyframeResolver=new G(T,(X,Z,__)=>this.onKeyframesResolved(X,Z,S,!__),d,h,A),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(i,$,l,r){this.keyframeResolver=void 0;const{name:f,type:u,velocity:T,delay:d,isHandoff:h,onUpdate:A}=l;this.resolvedAt=Rt.now(),Ym(i,f,u,T)||((pe.instantAnimations||!d)&&A?.(xr(i,l,$)),i[0]=i[i.length-1],er(l),l.repeat=0);const S={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>Xm?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:$,...l,keyframes:i},G=!h&&zm(S)?new wm({...S,element:S.motionValue.owner.current}):new Mr(S);G.finished.then(()=>this.notifyFinished()).catch(Xt),this.pendingTimeline&&(this.stopTimeline=G.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=G}get finished(){return this._animation?this.animation.finished:this._finished}then(i,$){return this.finished.finally(i).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),xm()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const qm=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function km(e){const i=qm.exec(e);if(!i)return[,];const[,$,l,r]=i;return[`--${$??l}`,r]}function Wh(e,i,$=1){const[l,r]=km(e);if(!l)return;const f=window.getComputedStyle(i).getPropertyValue(l);if(f){const u=f.trim();return rh(u)?parseFloat(u):u}return Rr(r)?Wh(r,i,$+1):r}function Dr(e,i){return e?.[i]??e?.default??e}const Yh=new Set(["width","height","top","left","right","bottom",...Aa]),Qm={test:e=>e==="auto",parse:e=>e},jh=e=>i=>i.test(e),Fh=[Ea,f_,ie,Ke,WL,wL,Qm],$d=e=>Fh.find(jh(e));function Zm(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||ch(e):!0}const Jm=new Set(["brightness","contrast","saturate","opacity"]);function _8(e){const[i,$]=e.slice(0,-1).split("(");if(i==="drop-shadow")return e;const[l]=$.match(Sr)||[];if(!l)return e;const r=$.replace(l,"");let f=Jm.has(i)?1:0;return l!==$&&(f*=100),i+"("+f+r+")"}const t8=/\b([a-z-]*)\(.*?\)/gu,nr={...ke,getAnimatableNone:e=>{const i=e.match(t8);return i?i.map(_8).join(" "):e}},ld={...Ea,transform:Math.round},e8={rotate:Ke,rotateX:Ke,rotateY:Ke,rotateZ:Ke,scale:Q$,scaleX:Q$,scaleY:Q$,scaleZ:Q$,skew:Ke,skewX:Ke,skewY:Ke,distance:f_,translateX:f_,translateY:f_,translateZ:f_,x:f_,y:f_,z:f_,perspective:f_,transformPerspective:f_,opacity:Ni,originX:KT,originY:KT,originZ:f_},Hr={borderWidth:f_,borderTopWidth:f_,borderRightWidth:f_,borderBottomWidth:f_,borderLeftWidth:f_,borderRadius:f_,radius:f_,borderTopLeftRadius:f_,borderTopRightRadius:f_,borderBottomRightRadius:f_,borderBottomLeftRadius:f_,width:f_,maxWidth:f_,height:f_,maxHeight:f_,top:f_,right:f_,bottom:f_,left:f_,padding:f_,paddingTop:f_,paddingRight:f_,paddingBottom:f_,paddingLeft:f_,margin:f_,marginTop:f_,marginRight:f_,marginBottom:f_,marginLeft:f_,backgroundPositionX:f_,backgroundPositionY:f_,...e8,zIndex:ld,fillOpacity:Ni,strokeOpacity:Ni,numOctaves:ld},n8={...Hr,color:nt,backgroundColor:nt,outlineColor:nt,fill:nt,stroke:nt,borderColor:nt,borderTopColor:nt,borderRightColor:nt,borderBottomColor:nt,borderLeftColor:nt,filter:nr,WebkitFilter:nr},zh=e=>n8[e];function Xh(e,i){let $=zh(e);return $!==nr&&($=ke),$.getAnimatableNone?$.getAnimatableNone(i):void 0}const a8=new Set(["auto","none","0"]);function i8(e,i,$){let l=0,r;for(;l<e.length&&!r;){const f=e[l];typeof f=="string"&&!a8.has(f)&&Ci(f).values.length&&(r=e[l]),l++}if(r&&$)for(const f of i)e[f]=Xh($,r)}class $8 extends Or{constructor(i,$,l,r,f){super(i,$,l,r,f,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:$,name:l}=this;if(!$||!$.current)return;super.readKeyframes();for(let d=0;d<i.length;d++){let h=i[d];if(typeof h=="string"&&(h=h.trim(),Rr(h))){const A=Wh(h,$.current);A!==void 0&&(i[d]=A),d===i.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!Yh.has(l)||i.length!==2)return;const[r,f]=i,u=$d(r),T=$d(f);if(u!==T)if(ed(u)&&ed(T))for(let d=0;d<i.length;d++){const h=i[d];typeof h=="string"&&(i[d]=parseFloat(h))}else pn[l]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:$}=this,l=[];for(let r=0;r<i.length;r++)(i[r]===null||Zm(i[r]))&&l.push(r);l.length&&i8(i,l,$)}measureInitialState(){const{element:i,unresolvedKeyframes:$,name:l}=this;if(!i||!i.current)return;l==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=pn[l](i.measureViewportBox(),window.getComputedStyle(i.current)),$[0]=this.measuredOrigin;const r=$[$.length-1];r!==void 0&&i.getValue(l,r).jump(r,!1)}measureEndState(){const{element:i,name:$,unresolvedKeyframes:l}=this;if(!i||!i.current)return;const r=i.getValue($);r&&r.jump(this.measuredOrigin,!1);const f=l.length-1,u=l[f];l[f]=pn[$](i.measureViewportBox(),window.getComputedStyle(i.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),this.removedTransforms?.length&&this.removedTransforms.forEach(([T,d])=>{i.getValue(T).set(d)}),this.resolveNoneKeyframes()}}function l8(e,i,$){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let l=document;const r=$?.[e]??l.querySelectorAll(e);return r?Array.from(r):[]}return Array.from(e)}const Kh=(e,i)=>i&&typeof e=="number"?i.transform(e):e;function s8(e){return uh(e)&&"offsetHeight"in e}const sd=30,o8=e=>!isNaN(parseFloat(e));class r8{constructor(i,$={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=l=>{const r=Rt.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(l),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const f of this.dependents)f.dirty()},this.hasAnimated=!1,this.setCurrent(i),this.owner=$.owner}setCurrent(i){this.current=i,this.updatedAt=Rt.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=o8(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,$){this.events[i]||(this.events[i]=new yr);const l=this.events[i].add($);return i==="change"?()=>{l(),W_.read(()=>{this.events.change.getSize()||this.stop()})}:l}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,$){this.passiveEffect=i,this.stopPassiveEffect=$}set(i){this.passiveEffect?this.passiveEffect(i,this.updateAndNotify):this.updateAndNotify(i)}setWithVelocity(i,$,l){this.set($),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-l}jump(i,$=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,$&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=Rt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>sd)return 0;const $=Math.min(this.updatedAt-this.prevUpdatedAt,sd);return fh(parseFloat(this.current)-parseFloat(this.prevFrameValue),$)}start(i){return this.stop(),new Promise($=>{this.hasAnimated=!0,this.animation=i($),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function da(e,i){return new r8(e,i)}const{schedule:Ur}=gh(queueMicrotask,!1),Qt={x:!1,y:!1};function qh(){return Qt.x||Qt.y}function u8(e){return e==="x"||e==="y"?Qt[e]?null:(Qt[e]=!0,()=>{Qt[e]=!1}):Qt.x||Qt.y?null:(Qt.x=Qt.y=!0,()=>{Qt.x=Qt.y=!1})}function kh(e,i){const $=l8(e),l=new AbortController,r={passive:!0,...i,signal:l.signal};return[$,r,()=>l.abort()]}function od(e){return!(e.pointerType==="touch"||qh())}function c8(e,i,$={}){const[l,r,f]=kh(e,$),u=T=>{if(!od(T))return;const{target:d}=T,h=i(d,T);if(typeof h!="function"||!d)return;const A=y=>{od(y)&&(h(y),d.removeEventListener("pointerleave",A))};d.addEventListener("pointerleave",A,r)};return l.forEach(T=>{T.addEventListener("pointerenter",u,r)}),f}const Qh=(e,i)=>i?e===i?!0:Qh(e,i.parentElement):!1,Pr=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,f8=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function T8(e){return f8.has(e.tagName)||e.tabIndex!==-1}const _l=new WeakSet;function rd(e){return i=>{i.key==="Enter"&&e(i)}}function Do(e,i){e.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const d8=(e,i)=>{const $=e.currentTarget;if(!$)return;const l=rd(()=>{if(_l.has($))return;Do($,"down");const r=rd(()=>{Do($,"up")}),f=()=>Do($,"cancel");$.addEventListener("keyup",r,i),$.addEventListener("blur",f,i)});$.addEventListener("keydown",l,i),$.addEventListener("blur",()=>$.removeEventListener("keydown",l),i)};function ud(e){return Pr(e)&&!qh()}function h8(e,i,$={}){const[l,r,f]=kh(e,$),u=T=>{const d=T.currentTarget;if(!ud(T))return;_l.add(d);const h=i(d,T),A=(G,X)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",S),_l.has(d)&&_l.delete(d),ud(G)&&typeof h=="function"&&h(G,{success:X})},y=G=>{A(G,d===window||d===document||$.useGlobalTarget||Qh(d,G.target))},S=G=>{A(G,!1)};window.addEventListener("pointerup",y,r),window.addEventListener("pointercancel",S,r)};return l.forEach(T=>{($.useGlobalTarget?window:T).addEventListener("pointerdown",u,r),s8(T)&&(T.addEventListener("focus",h=>d8(h,r)),!T8(T)&&!T.hasAttribute("tabindex")&&(T.tabIndex=0))}),f}function Zh(e){return uh(e)&&"ownerSVGElement"in e}function E8(e){return Zh(e)&&e.tagName==="svg"}const Et=e=>!!(e&&e.getVelocity),A8=[...Fh,nt,ke],L8=e=>A8.find(jh(e)),Jh=i_.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function m8(e=!0){const i=i_.useContext(hr);if(i===null)return[!0,null];const{isPresent:$,onExitComplete:l,register:r}=i,f=i_.useId();i_.useEffect(()=>{if(e)return r(f)},[e]);const u=i_.useCallback(()=>e&&l&&l(f),[f,l,e]);return!$&&l?[!1,u]:[!0]}const _0=i_.createContext({strict:!1}),cd={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ha={};for(const e in cd)ha[e]={isEnabled:i=>cd[e].some($=>!!i[$])};function y8(e){for(const i in e)ha[i]={...ha[i],...e[i]}}const p8=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function $l(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||p8.has(e)}let t0=e=>!$l(e);function I8(e){typeof e=="function"&&(t0=i=>i.startsWith("on")?!$l(i):e(i))}try{I8(require("@emotion/is-prop-valid").default)}catch{}function g8(e,i,$){const l={};for(const r in e)r==="values"&&typeof e.values=="object"||(t0(r)||$===!0&&$l(r)||!i&&!$l(r)||e.draggable&&r.startsWith("onDrag"))&&(l[r]=e[r]);return l}const sl=i_.createContext({});function ol(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function xi(e){return typeof e=="string"||Array.isArray(e)}const Br=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Gr=["initial",...Br];function rl(e){return ol(e.animate)||Gr.some(i=>xi(e[i]))}function e0(e){return!!(rl(e)||e.variants)}function R8(e,i){if(rl(e)){const{initial:$,animate:l}=e;return{initial:$===!1||xi($)?$:void 0,animate:xi(l)?l:void 0}}return e.inherit!==!1?i:{}}function S8(e){const{initial:i,animate:$}=R8(e,i_.useContext(sl));return i_.useMemo(()=>({initial:i,animate:$}),[fd(i),fd($)])}function fd(e){return Array.isArray(e)?e.join(" "):e}const bi={};function v8(e){for(const i in e)bi[i]=e[i],gr(i)&&(bi[i].isCSSVariable=!0)}function n0(e,{layout:i,layoutId:$}){return La.has(e)||e.startsWith("origin")||(i||$!==void 0)&&(!!bi[e]||e==="opacity")}const N8={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},C8=Aa.length;function x8(e,i,$){let l="",r=!0;for(let f=0;f<C8;f++){const u=Aa[f],T=e[u];if(T===void 0)continue;let d=!0;if(typeof T=="number"?d=T===(u.startsWith("scale")?1:0):d=parseFloat(T)===0,!d||$){const h=Kh(T,Hr[u]);if(!d){r=!1;const A=N8[u]||u;l+=`${A}(${h}) `}$&&(i[u]=h)}}return l=l.trim(),$?l=$(i,r?"":l):r&&(l="none"),l}function Vr(e,i,$){const{style:l,vars:r,transformOrigin:f}=e;let u=!1,T=!1;for(const d in i){const h=i[d];if(La.has(d)){u=!0;continue}else if(gr(d)){r[d]=h;continue}else{const A=Kh(h,Hr[d]);d.startsWith("origin")?(T=!0,f[d]=A):l[d]=A}}if(i.transform||(u||$?l.transform=x8(i,e.transform,$):l.transform&&(l.transform="none")),T){const{originX:d="50%",originY:h="50%",originZ:A=0}=f;l.transformOrigin=`${d} ${h} ${A}`}}const wr=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function a0(e,i,$){for(const l in i)!Et(i[l])&&!n0(l,$)&&(e[l]=i[l])}function b8({transformTemplate:e},i){return i_.useMemo(()=>{const $=wr();return Vr($,i,e),Object.assign({},$.vars,$.style)},[i])}function M8(e,i){const $=e.style||{},l={};return a0(l,$,e),Object.assign(l,b8(e,i)),l}function O8(e,i){const $={},l=M8(e,i);return e.drag&&e.dragListener!==!1&&($.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&($.tabIndex=0),$.style=l,$}const D8={offset:"stroke-dashoffset",array:"stroke-dasharray"},H8={offset:"strokeDashoffset",array:"strokeDasharray"};function U8(e,i,$=1,l=0,r=!0){e.pathLength=1;const f=r?D8:H8;e[f.offset]=f_.transform(-l);const u=f_.transform(i),T=f_.transform($);e[f.array]=`${u} ${T}`}function i0(e,{attrX:i,attrY:$,attrScale:l,pathLength:r,pathSpacing:f=1,pathOffset:u=0,...T},d,h,A){if(Vr(e,T,h),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:y,style:S}=e;y.transform&&(S.transform=y.transform,delete y.transform),(S.transform||y.transformOrigin)&&(S.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),S.transform&&(S.transformBox=A?.transformBox??"fill-box",delete y.transformBox),i!==void 0&&(y.x=i),$!==void 0&&(y.y=$),l!==void 0&&(y.scale=l),r!==void 0&&U8(y,r,f,u,!1)}const $0=()=>({...wr(),attrs:{}}),l0=e=>typeof e=="string"&&e.toLowerCase()==="svg";function P8(e,i,$,l){const r=i_.useMemo(()=>{const f=$0();return i0(f,i,l0(l),e.transformTemplate,e.style),{...f.attrs,style:{...f.style}}},[i]);if(e.style){const f={};a0(f,e.style,e),r.style={...f,...r.style}}return r}const B8=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Wr(e){return typeof e!="string"||e.includes("-")?!1:!!(B8.indexOf(e)>-1||/[A-Z]/u.test(e))}function G8(e,i,$,{latestValues:l},r,f=!1){const T=(Wr(e)?P8:O8)(i,l,r,e),d=g8(i,typeof e=="string",f),h=e!==i_.Fragment?{...d,...T,ref:$}:{},{children:A}=i,y=i_.useMemo(()=>Et(A)?A.get():A,[A]);return i_.createElement(e,{...h,children:y})}function Td(e){const i=[{},{}];return e?.values.forEach(($,l)=>{i[0][l]=$.get(),i[1][l]=$.getVelocity()}),i}function Yr(e,i,$,l){if(typeof i=="function"){const[r,f]=Td(l);i=i($!==void 0?$:e.custom,r,f)}if(typeof i=="string"&&(i=e.variants&&e.variants[i]),typeof i=="function"){const[r,f]=Td(l);i=i($!==void 0?$:e.custom,r,f)}return i}function tl(e){return Et(e)?e.get():e}function V8({scrapeMotionValuesFromProps:e,createRenderState:i},$,l,r){return{latestValues:w8($,l,r,e),renderState:i()}}function w8(e,i,$,l){const r={},f=l(e,{});for(const S in f)r[S]=tl(f[S]);let{initial:u,animate:T}=e;const d=rl(e),h=e0(e);i&&h&&!d&&e.inherit!==!1&&(u===void 0&&(u=i.initial),T===void 0&&(T=i.animate));let A=$?$.initial===!1:!1;A=A||u===!1;const y=A?T:u;if(y&&typeof y!="boolean"&&!ol(y)){const S=Array.isArray(y)?y:[y];for(let G=0;G<S.length;G++){const X=Yr(e,S[G]);if(X){const{transitionEnd:Z,transition:__,...J}=X;for(const n_ in J){let k=J[n_];if(Array.isArray(k)){const g=A?k.length-1:0;k=k[g]}k!==null&&(r[n_]=k)}for(const n_ in Z)r[n_]=Z[n_]}}}return r}const s0=e=>(i,$)=>{const l=i_.useContext(sl),r=i_.useContext(hr),f=()=>V8(e,i,l,r);return $?f():yL(f)};function jr(e,i,$){const{style:l}=e,r={};for(const f in l)(Et(l[f])||i.style&&Et(i.style[f])||n0(f,e)||$?.getValue(f)?.liveStyle!==void 0)&&(r[f]=l[f]);return r}const W8=s0({scrapeMotionValuesFromProps:jr,createRenderState:wr});function o0(e,i,$){const l=jr(e,i,$);for(const r in e)if(Et(e[r])||Et(i[r])){const f=Aa.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;l[f]=e[r]}return l}const Y8=s0({scrapeMotionValuesFromProps:o0,createRenderState:$0}),j8=Symbol.for("motionComponentSymbol");function ra(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function F8(e,i,$){return i_.useCallback(l=>{l&&e.onMount&&e.onMount(l),i&&(l?i.mount(l):i.unmount()),$&&(typeof $=="function"?$(l):ra($)&&($.current=l))},[i])}const Fr=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),z8="framerAppearId",r0="data-"+Fr(z8),u0=i_.createContext({});function X8(e,i,$,l,r){const{visualElement:f}=i_.useContext(sl),u=i_.useContext(_0),T=i_.useContext(hr),d=i_.useContext(Jh).reducedMotion,h=i_.useRef(null);l=l||u.renderer,!h.current&&l&&(h.current=l(e,{visualState:i,parent:f,props:$,presenceContext:T,blockInitialAnimation:T?T.initial===!1:!1,reducedMotionConfig:d}));const A=h.current,y=i_.useContext(u0);A&&!A.projection&&r&&(A.type==="html"||A.type==="svg")&&K8(h.current,$,r,y);const S=i_.useRef(!1);i_.useInsertionEffect(()=>{A&&S.current&&A.update($,T)});const G=$[r0],X=i_.useRef(!!G&&!window.MotionHandoffIsComplete?.(G)&&window.MotionHasOptimisedAnimation?.(G));return pL(()=>{A&&(S.current=!0,window.MotionIsMounted=!0,A.updateFeatures(),A.scheduleRenderMicrotask(),X.current&&A.animationState&&A.animationState.animateChanges())}),i_.useEffect(()=>{A&&(!X.current&&A.animationState&&A.animationState.animateChanges(),X.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(G)}),X.current=!1),A.enteringChildren=void 0)}),A}function K8(e,i,$,l){const{layoutId:r,layout:f,drag:u,dragConstraints:T,layoutScroll:d,layoutRoot:h,layoutCrossfade:A}=i;e.projection=new $(e.latestValues,i["data-framer-portal-id"]?void 0:c0(e.parent)),e.projection.setOptions({layoutId:r,layout:f,alwaysMeasureLayout:!!u||T&&ra(T),visualElement:e,animationType:typeof f=="string"?f:"both",initialPromotionConfig:l,crossfade:A,layoutScroll:d,layoutRoot:h})}function c0(e){if(e)return e.options.allowProjection!==!1?e.projection:c0(e.parent)}function Ho(e,{forwardMotionProps:i=!1}={},$,l){$&&y8($);const r=Wr(e)?Y8:W8;function f(T,d){let h;const A={...i_.useContext(Jh),...T,layoutId:q8(T)},{isStatic:y}=A,S=S8(T),G=r(T,y);if(!y&&dr){k8();const X=Q8(A);h=X.MeasureLayout,S.visualElement=X8(e,G,A,l,X.ProjectionNode)}return N.jsxs(sl.Provider,{value:S,children:[h&&S.visualElement?N.jsx(h,{visualElement:S.visualElement,...A}):null,G8(e,T,F8(G,S.visualElement,d),G,y,i)]})}f.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const u=i_.forwardRef(f);return u[j8]=e,u}function q8({layoutId:e}){const i=i_.useContext(oh).id;return i&&e!==void 0?i+"-"+e:e}function k8(e,i){i_.useContext(_0).strict}function Q8(e){const{drag:i,layout:$}=ha;if(!i&&!$)return{};const l={...i,...$};return{MeasureLayout:i?.isEnabled(e)||$?.isEnabled(e)?l.MeasureLayout:void 0,ProjectionNode:l.ProjectionNode}}function Z8(e,i){if(typeof Proxy>"u")return Ho;const $=new Map,l=(f,u)=>Ho(f,u,e,i),r=(f,u)=>l(f,u);return new Proxy(r,{get:(f,u)=>u==="create"?l:($.has(u)||$.set(u,Ho(u,void 0,e,i)),$.get(u))})}function f0({top:e,left:i,right:$,bottom:l}){return{x:{min:i,max:$},y:{min:e,max:l}}}function J8({x:e,y:i}){return{top:i.min,right:e.max,bottom:i.max,left:e.min}}function _1(e,i){if(!i)return e;const $=i({x:e.left,y:e.top}),l=i({x:e.right,y:e.bottom});return{top:$.y,left:$.x,bottom:l.y,right:l.x}}function Uo(e){return e===void 0||e===1}function ar({scale:e,scaleX:i,scaleY:$}){return!Uo(e)||!Uo(i)||!Uo($)}function Ln(e){return ar(e)||T0(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function T0(e){return dd(e.x)||dd(e.y)}function dd(e){return e&&e!=="0%"}function ll(e,i,$){const l=e-$,r=i*l;return $+r}function hd(e,i,$,l,r){return r!==void 0&&(e=ll(e,r,l)),ll(e,$,l)+i}function ir(e,i=0,$=1,l,r){e.min=hd(e.min,i,$,l,r),e.max=hd(e.max,i,$,l,r)}function d0(e,{x:i,y:$}){ir(e.x,i.translate,i.scale,i.originPoint),ir(e.y,$.translate,$.scale,$.originPoint)}const Ed=.999999999999,Ad=1.0000000000001;function t1(e,i,$,l=!1){const r=$.length;if(!r)return;i.x=i.y=1;let f,u;for(let T=0;T<r;T++){f=$[T],u=f.projectionDelta;const{visualElement:d}=f.options;d&&d.props.style&&d.props.style.display==="contents"||(l&&f.options.layoutScroll&&f.scroll&&f!==f.root&&ca(e,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),u&&(i.x*=u.x.scale,i.y*=u.y.scale,d0(e,u)),l&&Ln(f.latestValues)&&ca(e,f.latestValues))}i.x<Ad&&i.x>Ed&&(i.x=1),i.y<Ad&&i.y>Ed&&(i.y=1)}function ua(e,i){e.min=e.min+i,e.max=e.max+i}function Ld(e,i,$,l,r=.5){const f=F_(e.min,e.max,r);ir(e,i,$,f,l)}function ca(e,i){Ld(e.x,i.x,i.scaleX,i.scale,i.originX),Ld(e.y,i.y,i.scaleY,i.scale,i.originY)}function h0(e,i){return f0(_1(e.getBoundingClientRect(),i))}function e1(e,i,$){const l=h0(e,$),{scroll:r}=i;return r&&(ua(l.x,r.offset.x),ua(l.y,r.offset.y)),l}const md=()=>({translate:0,scale:1,origin:0,originPoint:0}),fa=()=>({x:md(),y:md()}),yd=()=>({min:0,max:0}),J_=()=>({x:yd(),y:yd()}),$r={current:null},E0={current:!1};function n1(){if(E0.current=!0,!!dr)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),i=()=>$r.current=e.matches;e.addEventListener("change",i),i()}else $r.current=!1}const a1=new WeakMap;function i1(e,i,$){for(const l in i){const r=i[l],f=$[l];if(Et(r))e.addValue(l,r);else if(Et(f))e.addValue(l,da(r,{owner:e}));else if(f!==r)if(e.hasValue(l)){const u=e.getValue(l);u.liveStyle===!0?u.jump(r):u.hasAnimated||u.set(r)}else{const u=e.getStaticValue(l);e.addValue(l,da(u!==void 0?u:r,{owner:e}))}}for(const l in $)i[l]===void 0&&e.removeValue(l);return i}const pd=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class $1{scrapeMotionValuesFromProps(i,$,l){return{}}constructor({parent:i,props:$,presenceContext:l,reducedMotionConfig:r,blockInitialAnimation:f,visualState:u},T={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Or,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=Rt.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,W_.render(this.render,!1,!0))};const{latestValues:d,renderState:h}=u;this.latestValues=d,this.baseTarget={...d},this.initialValues=$.initial?{...d}:{},this.renderState=h,this.parent=i,this.props=$,this.presenceContext=l,this.depth=i?i.depth+1:0,this.reducedMotionConfig=r,this.options=T,this.blockInitialAnimation=!!f,this.isControllingVariants=rl($),this.isVariantNode=e0($),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:A,...y}=this.scrapeMotionValuesFromProps($,{},this);for(const S in y){const G=y[S];d[S]!==void 0&&Et(G)&&G.set(d[S])}}mount(i){this.current=i,a1.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(($,l)=>this.bindToMotionValue(l,$)),E0.current||n1(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:$r.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),qe(this.notifyUpdate),qe(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const $=this.features[i];$&&($.unmount(),$.isMounted=!1)}this.current=null}addChild(i){this.children.add(i),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(i)}removeChild(i){this.children.delete(i),this.enteringChildren&&this.enteringChildren.delete(i)}bindToMotionValue(i,$){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const l=La.has(i);l&&this.onBindTransform&&this.onBindTransform();const r=$.on("change",u=>{this.latestValues[i]=u,this.props.onUpdate&&W_.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,i,$)),this.valueSubscriptions.set(i,()=>{r(),f&&f(),$.owner&&$.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in ha){const $=ha[i];if(!$)continue;const{isEnabled:l,Feature:r}=$;if(!this.features[i]&&r&&l(this.props)&&(this.features[i]=new r(this)),this.features[i]){const f=this.features[i];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):J_()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,$){this.latestValues[i]=$}update(i,$){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=$;for(let l=0;l<pd.length;l++){const r=pd[l];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const f="on"+r,u=i[f];u&&(this.propEventSubscriptions[r]=this.on(r,u))}this.prevMotionValues=i1(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const $=this.getClosestVariantNode();if($)return $.variantChildren&&$.variantChildren.add(i),()=>$.variantChildren.delete(i)}addValue(i,$){const l=this.values.get(i);$!==l&&(l&&this.removeValue(i),this.bindToMotionValue(i,$),this.values.set(i,$),this.latestValues[i]=$.get())}removeValue(i){this.values.delete(i);const $=this.valueSubscriptions.get(i);$&&($(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,$){if(this.props.values&&this.props.values[i])return this.props.values[i];let l=this.values.get(i);return l===void 0&&$!==void 0&&(l=da($===null?void 0:$,{owner:this}),this.addValue(i,l)),l}readValue(i,$){let l=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return l!=null&&(typeof l=="string"&&(rh(l)||ch(l))?l=parseFloat(l):!L8(l)&&ke.test($)&&(l=Xh(i,$)),this.setBaseTarget(i,Et(l)?l.get():l)),Et(l)?l.get():l}setBaseTarget(i,$){this.baseTarget[i]=$}getBaseTarget(i){const{initial:$}=this.props;let l;if(typeof $=="string"||typeof $=="object"){const f=Yr(this.props,$,this.presenceContext?.custom);f&&(l=f[i])}if($&&l!==void 0)return l;const r=this.getBaseTargetFromProps(this.props,i);return r!==void 0&&!Et(r)?r:this.initialValues[i]!==void 0&&l===void 0?void 0:this.baseTarget[i]}on(i,$){return this.events[i]||(this.events[i]=new yr),this.events[i].add($)}notify(i,...$){this.events[i]&&this.events[i].notify(...$)}scheduleRenderMicrotask(){Ur.render(this.render)}}class A0 extends $1{constructor(){super(...arguments),this.KeyframeResolver=$8}sortInstanceNodePosition(i,$){return i.compareDocumentPosition($)&2?1:-1}getBaseTargetFromProps(i,$){return i.style?i.style[$]:void 0}removeValueFromRenderState(i,{vars:$,style:l}){delete $[i],delete l[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;Et(i)&&(this.childSubscription=i.on("change",$=>{this.current&&(this.current.textContent=`${$}`)}))}}function L0(e,{style:i,vars:$},l,r){const f=e.style;let u;for(u in i)f[u]=i[u];r?.applyProjectionStyles(f,l);for(u in $)f.setProperty(u,$[u])}function l1(e){return window.getComputedStyle(e)}class s1 extends A0{constructor(){super(...arguments),this.type="html",this.renderInstance=L0}readValueFromInstance(i,$){if(La.has($))return this.projection?.isProjecting?Qo($):Rm(i,$);{const l=l1(i),r=(gr($)?l.getPropertyValue($):l[$])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(i,{transformPagePoint:$}){return h0(i,$)}build(i,$,l){Vr(i,$,l.transformTemplate)}scrapeMotionValuesFromProps(i,$,l){return jr(i,$,l)}}const m0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function o1(e,i,$,l){L0(e,i,void 0,l);for(const r in i.attrs)e.setAttribute(m0.has(r)?r:Fr(r),i.attrs[r])}class r1 extends A0{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=J_}getBaseTargetFromProps(i,$){return i[$]}readValueFromInstance(i,$){if(La.has($)){const l=zh($);return l&&l.default||0}return $=m0.has($)?$:Fr($),i.getAttribute($)}scrapeMotionValuesFromProps(i,$,l){return o0(i,$,l)}build(i,$,l){i0(i,$,this.isSVGTag,l.transformTemplate,l.style)}renderInstance(i,$,l,r){o1(i,$,l,r)}mount(i){this.isSVGTag=l0(i.tagName),super.mount(i)}}const u1=(e,i)=>Wr(e)?new r1(i):new s1(i,{allowProjection:e!==i_.Fragment});function Ta(e,i,$){const l=e.getProps();return Yr(l,i,$!==void 0?$:l.custom,e)}const lr=e=>Array.isArray(e);function c1(e,i,$){e.hasValue(i)?e.getValue(i).set($):e.addValue(i,da($))}function f1(e){return lr(e)?e[e.length-1]||0:e}function T1(e,i){const $=Ta(e,i);let{transitionEnd:l={},transition:r={},...f}=$||{};f={...f,...l};for(const u in f){const T=f1(f[u]);c1(e,u,T)}}function d1(e){return!!(Et(e)&&e.add)}function sr(e,i){const $=e.getValue("willChange");if(d1($))return $.add(i);if(!$&&pe.WillChange){const l=new pe.WillChange("auto");e.addValue("willChange",l),l.add(i)}}function y0(e){return e.props[r0]}const h1=e=>e!==null;function E1(e,{repeat:i,repeatType:$="loop"},l){const r=e.filter(h1),f=i&&$!=="loop"&&i%2===1?0:r.length-1;return r[f]}const A1={type:"spring",stiffness:500,damping:25,restSpeed:10},L1=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),m1={type:"keyframes",duration:.8},y1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},p1=(e,{keyframes:i})=>i.length>2?m1:La.has(e)?e.startsWith("scale")?L1(i[1]):A1:y1;function I1({when:e,delay:i,delayChildren:$,staggerChildren:l,staggerDirection:r,repeat:f,repeatType:u,repeatDelay:T,from:d,elapsed:h,...A}){return!!Object.keys(A).length}const zr=(e,i,$,l={},r,f)=>u=>{const T=Dr(l,e)||{},d=T.delay||l.delay||0;let{elapsed:h=0}=l;h=h-ne(d);const A={keyframes:Array.isArray($)?$:[null,$],ease:"easeOut",velocity:i.getVelocity(),...T,delay:-h,onUpdate:S=>{i.set(S),T.onUpdate&&T.onUpdate(S)},onComplete:()=>{u(),T.onComplete&&T.onComplete()},name:e,motionValue:i,element:f?void 0:r};I1(T)||Object.assign(A,p1(e,A)),A.duration&&(A.duration=ne(A.duration)),A.repeatDelay&&(A.repeatDelay=ne(A.repeatDelay)),A.from!==void 0&&(A.keyframes[0]=A.from);let y=!1;if((A.type===!1||A.duration===0&&!A.repeatDelay)&&(er(A),A.delay===0&&(y=!0)),(pe.instantAnimations||pe.skipAnimations)&&(y=!0,er(A),A.delay=0),A.allowFlatten=!T.type&&!T.ease,y&&!f&&i.get()!==void 0){const S=E1(A.keyframes,T);if(S!==void 0){W_.update(()=>{A.onUpdate(S),A.onComplete()});return}}return T.isSync?new Mr(A):new Km(A)};function g1({protectedKeys:e,needsAnimating:i},$){const l=e.hasOwnProperty($)&&i[$]!==!0;return i[$]=!1,l}function p0(e,i,{delay:$=0,transitionOverride:l,type:r}={}){let{transition:f=e.getDefaultTransition(),transitionEnd:u,...T}=i;l&&(f=l);const d=[],h=r&&e.animationState&&e.animationState.getState()[r];for(const A in T){const y=e.getValue(A,e.latestValues[A]??null),S=T[A];if(S===void 0||h&&g1(h,A))continue;const G={delay:$,...Dr(f||{},A)},X=y.get();if(X!==void 0&&!y.isAnimating&&!Array.isArray(S)&&S===X&&!G.velocity)continue;let Z=!1;if(window.MotionHandoffAnimation){const J=y0(e);if(J){const n_=window.MotionHandoffAnimation(J,A,W_);n_!==null&&(G.startTime=n_,Z=!0)}}sr(e,A),y.start(zr(A,y,S,e.shouldReduceMotion&&Yh.has(A)?{type:!1}:G,e,Z));const __=y.animation;__&&d.push(__)}return u&&Promise.all(d).then(()=>{W_.update(()=>{u&&T1(e,u)})}),d}function I0(e,i,$,l=0,r=1){const f=Array.from(e).sort((h,A)=>h.sortNodePosition(A)).indexOf(i),u=e.size,T=(u-1)*l;return typeof $=="function"?$(f,u):r===1?f*l:T-f*l}function or(e,i,$={}){const l=Ta(e,i,$.type==="exit"?e.presenceContext?.custom:void 0);let{transition:r=e.getDefaultTransition()||{}}=l||{};$.transitionOverride&&(r=$.transitionOverride);const f=l?()=>Promise.all(p0(e,l,$)):()=>Promise.resolve(),u=e.variantChildren&&e.variantChildren.size?(d=0)=>{const{delayChildren:h=0,staggerChildren:A,staggerDirection:y}=r;return R1(e,i,d,h,A,y,$)}:()=>Promise.resolve(),{when:T}=r;if(T){const[d,h]=T==="beforeChildren"?[f,u]:[u,f];return d().then(()=>h())}else return Promise.all([f(),u($.delay)])}function R1(e,i,$=0,l=0,r=0,f=1,u){const T=[];for(const d of e.variantChildren)d.notify("AnimationStart",i),T.push(or(d,i,{...u,delay:$+(typeof l=="function"?0:l)+I0(e.variantChildren,d,l,r,f)}).then(()=>d.notify("AnimationComplete",i)));return Promise.all(T)}function S1(e,i,$={}){e.notify("AnimationStart",i);let l;if(Array.isArray(i)){const r=i.map(f=>or(e,f,$));l=Promise.all(r)}else if(typeof i=="string")l=or(e,i,$);else{const r=typeof i=="function"?Ta(e,i,$.custom):i;l=Promise.all(p0(e,r,$))}return l.then(()=>{e.notify("AnimationComplete",i)})}function g0(e,i){if(!Array.isArray(i))return!1;const $=i.length;if($!==e.length)return!1;for(let l=0;l<$;l++)if(i[l]!==e[l])return!1;return!0}const v1=Gr.length;function R0(e){if(!e)return;if(!e.isControllingVariants){const $=e.parent?R0(e.parent)||{}:{};return e.props.initial!==void 0&&($.initial=e.props.initial),$}const i={};for(let $=0;$<v1;$++){const l=Gr[$],r=e.props[l];(xi(r)||r===!1)&&(i[l]=r)}return i}const N1=[...Br].reverse(),C1=Br.length;function x1(e){return i=>Promise.all(i.map(({animation:$,options:l})=>S1(e,$,l)))}function b1(e){let i=x1(e),$=Id(),l=!0;const r=d=>(h,A)=>{const y=Ta(e,A,d==="exit"?e.presenceContext?.custom:void 0);if(y){const{transition:S,transitionEnd:G,...X}=y;h={...h,...X,...G}}return h};function f(d){i=d(e)}function u(d){const{props:h}=e,A=R0(e.parent)||{},y=[],S=new Set;let G={},X=1/0;for(let __=0;__<C1;__++){const J=N1[__],n_=$[J],k=h[J]!==void 0?h[J]:A[J],g=xi(k),b=J===d?n_.isActive:null;b===!1&&(X=__);let t_=k===A[J]&&k!==h[J]&&g;if(t_&&l&&e.manuallyAnimateOnMount&&(t_=!1),n_.protectedKeys={...G},!n_.isActive&&b===null||!k&&!n_.prevProp||ol(k)||typeof k=="boolean")continue;const e_=M1(n_.prevProp,k);let W=e_||J===d&&n_.isActive&&!t_&&g||__>X&&g,p_=!1;const P_=Array.isArray(k)?k:[k];let Y_=P_.reduce(r(J),{});b===!1&&(Y_={});const{prevResolvedValues:N_={}}=n_,_t={...N_,...Y_},z_=z=>{W=!0,S.has(z)&&(p_=!0,S.delete(z)),n_.needsAnimating[z]=!0;const a_=e.getValue(z);a_&&(a_.liveStyle=!1)};for(const z in _t){const a_=Y_[z],T_=N_[z];if(G.hasOwnProperty(z))continue;let I=!1;lr(a_)&&lr(T_)?I=!g0(a_,T_):I=a_!==T_,I?a_!=null?z_(z):S.add(z):a_!==void 0&&S.has(z)?z_(z):n_.protectedKeys[z]=!0}n_.prevProp=k,n_.prevResolvedValues=Y_,n_.isActive&&(G={...G,...Y_}),l&&e.blockInitialAnimation&&(W=!1);const m_=t_&&e_;W&&(!m_||p_)&&y.push(...P_.map(z=>{const a_={type:J};if(typeof z=="string"&&l&&!m_&&e.manuallyAnimateOnMount&&e.parent){const{parent:T_}=e,I=Ta(T_,z);if(T_.enteringChildren&&I){const{delayChildren:Y}=I.transition||{};a_.delay=I0(T_.enteringChildren,e,Y)}}return{animation:z,options:a_}}))}if(S.size){const __={};if(typeof h.initial!="boolean"){const J=Ta(e,Array.isArray(h.initial)?h.initial[0]:h.initial);J&&J.transition&&(__.transition=J.transition)}S.forEach(J=>{const n_=e.getBaseTarget(J),k=e.getValue(J);k&&(k.liveStyle=!0),__[J]=n_??null}),y.push({animation:__})}let Z=!!y.length;return l&&(h.initial===!1||h.initial===h.animate)&&!e.manuallyAnimateOnMount&&(Z=!1),l=!1,Z?i(y):Promise.resolve()}function T(d,h){if($[d].isActive===h)return Promise.resolve();e.variantChildren?.forEach(y=>y.animationState?.setActive(d,h)),$[d].isActive=h;const A=u(d);for(const y in $)$[y].protectedKeys={};return A}return{animateChanges:u,setActive:T,setAnimateFunction:f,getState:()=>$,reset:()=>{$=Id(),l=!0}}}function M1(e,i){return typeof i=="string"?i!==e:Array.isArray(i)?!g0(i,e):!1}function An(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Id(){return{animate:An(!0),whileInView:An(),whileHover:An(),whileTap:An(),whileDrag:An(),whileFocus:An(),exit:An()}}class Qe{constructor(i){this.isMounted=!1,this.node=i}update(){}}class O1 extends Qe{constructor(i){super(i),i.animationState||(i.animationState=b1(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();ol(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:$}=this.node.prevProps||{};i!==$&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let D1=0;class H1 extends Qe{constructor(){super(...arguments),this.id=D1++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:$}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===l)return;const r=this.node.animationState.setActive("exit",!i);$&&!i&&r.then(()=>{$(this.id)})}mount(){const{register:i,onExitComplete:$}=this.node.presenceContext||{};$&&$(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const U1={animation:{Feature:O1},exit:{Feature:H1}};function Mi(e,i,$,l={passive:!0}){return e.addEventListener(i,$,l),()=>e.removeEventListener(i,$)}function Ui(e){return{point:{x:e.pageX,y:e.pageY}}}const P1=e=>i=>Pr(i)&&e(i,Ui(i));function gi(e,i,$,l){return Mi(e,i,P1($),l)}const S0=1e-4,B1=1-S0,G1=1+S0,v0=.01,V1=0-v0,w1=0+v0;function Lt(e){return e.max-e.min}function W1(e,i,$){return Math.abs(e-i)<=$}function gd(e,i,$,l=.5){e.origin=l,e.originPoint=F_(i.min,i.max,e.origin),e.scale=Lt($)/Lt(i),e.translate=F_($.min,$.max,e.origin)-e.originPoint,(e.scale>=B1&&e.scale<=G1||isNaN(e.scale))&&(e.scale=1),(e.translate>=V1&&e.translate<=w1||isNaN(e.translate))&&(e.translate=0)}function Ri(e,i,$,l){gd(e.x,i.x,$.x,l?l.originX:void 0),gd(e.y,i.y,$.y,l?l.originY:void 0)}function Rd(e,i,$){e.min=$.min+i.min,e.max=e.min+Lt(i)}function Y1(e,i,$){Rd(e.x,i.x,$.x),Rd(e.y,i.y,$.y)}function Sd(e,i,$){e.min=i.min-$.min,e.max=e.min+Lt(i)}function Si(e,i,$){Sd(e.x,i.x,$.x),Sd(e.y,i.y,$.y)}function zt(e){return[e("x"),e("y")]}const N0=({current:e})=>e?e.ownerDocument.defaultView:null,vd=(e,i)=>Math.abs(e-i);function j1(e,i){const $=vd(e.x,i.x),l=vd(e.y,i.y);return Math.sqrt($**2+l**2)}class C0{constructor(i,$,{transformPagePoint:l,contextWindow:r=window,dragSnapToOrigin:f=!1,distanceThreshold:u=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Bo(this.lastMoveEventInfo,this.history),G=this.startEvent!==null,X=j1(S.offset,{x:0,y:0})>=this.distanceThreshold;if(!G&&!X)return;const{point:Z}=S,{timestamp:__}=ft;this.history.push({...Z,timestamp:__});const{onStart:J,onMove:n_}=this.handlers;G||(J&&J(this.lastMoveEvent,S),this.startEvent=this.lastMoveEvent),n_&&n_(this.lastMoveEvent,S)},this.handlePointerMove=(S,G)=>{this.lastMoveEvent=S,this.lastMoveEventInfo=Po(G,this.transformPagePoint),W_.update(this.updatePoint,!0)},this.handlePointerUp=(S,G)=>{this.end();const{onEnd:X,onSessionEnd:Z,resumeAnimation:__}=this.handlers;if(this.dragSnapToOrigin&&__&&__(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const J=Bo(S.type==="pointercancel"?this.lastMoveEventInfo:Po(G,this.transformPagePoint),this.history);this.startEvent&&X&&X(S,J),Z&&Z(S,J)},!Pr(i))return;this.dragSnapToOrigin=f,this.handlers=$,this.transformPagePoint=l,this.distanceThreshold=u,this.contextWindow=r||window;const T=Ui(i),d=Po(T,this.transformPagePoint),{point:h}=d,{timestamp:A}=ft;this.history=[{...h,timestamp:A}];const{onSessionStart:y}=$;y&&y(i,Bo(d,this.history)),this.removeListeners=Oi(gi(this.contextWindow,"pointermove",this.handlePointerMove),gi(this.contextWindow,"pointerup",this.handlePointerUp),gi(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),qe(this.updatePoint)}}function Po(e,i){return i?{point:i(e.point)}:e}function Nd(e,i){return{x:e.x-i.x,y:e.y-i.y}}function Bo({point:e},i){return{point:e,delta:Nd(e,x0(i)),offset:Nd(e,F1(i)),velocity:z1(i,.1)}}function F1(e){return e[0]}function x0(e){return e[e.length-1]}function z1(e,i){if(e.length<2)return{x:0,y:0};let $=e.length-1,l=null;const r=x0(e);for(;$>=0&&(l=e[$],!(r.timestamp-l.timestamp>ne(i)));)$--;if(!l)return{x:0,y:0};const f=ae(r.timestamp-l.timestamp);if(f===0)return{x:0,y:0};const u={x:(r.x-l.x)/f,y:(r.y-l.y)/f};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function X1(e,{min:i,max:$},l){return i!==void 0&&e<i?e=l?F_(i,e,l.min):Math.max(e,i):$!==void 0&&e>$&&(e=l?F_($,e,l.max):Math.min(e,$)),e}function Cd(e,i,$){return{min:i!==void 0?e.min+i:void 0,max:$!==void 0?e.max+$-(e.max-e.min):void 0}}function K1(e,{top:i,left:$,bottom:l,right:r}){return{x:Cd(e.x,$,r),y:Cd(e.y,i,l)}}function xd(e,i){let $=i.min-e.min,l=i.max-e.max;return i.max-i.min<e.max-e.min&&([$,l]=[l,$]),{min:$,max:l}}function q1(e,i){return{x:xd(e.x,i.x),y:xd(e.y,i.y)}}function k1(e,i){let $=.5;const l=Lt(e),r=Lt(i);return r>l?$=vi(i.min,i.max-l,e.min):l>r&&($=vi(e.min,e.max-r,i.min)),ye(0,1,$)}function Q1(e,i){const $={};return i.min!==void 0&&($.min=i.min-e.min),i.max!==void 0&&($.max=i.max-e.min),$}const rr=.35;function Z1(e=rr){return e===!1?e=0:e===!0&&(e=rr),{x:bd(e,"left","right"),y:bd(e,"top","bottom")}}function bd(e,i,$){return{min:Md(e,i),max:Md(e,$)}}function Md(e,i){return typeof e=="number"?e:e[i]||0}const J1=new WeakMap;class _y{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=J_(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:$=!1,distanceThreshold:l}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const f=y=>{const{dragSnapToOrigin:S}=this.getProps();S?this.pauseAnimation():this.stopAnimation(),$&&this.snapToCursor(Ui(y).point)},u=(y,S)=>{const{drag:G,dragPropagation:X,onDragStart:Z}=this.getProps();if(G&&!X&&(this.openDragLock&&this.openDragLock(),this.openDragLock=u8(G),!this.openDragLock))return;this.latestPointerEvent=y,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),zt(J=>{let n_=this.getAxisMotionValue(J).get()||0;if(ie.test(n_)){const{projection:k}=this.visualElement;if(k&&k.layout){const g=k.layout.layoutBox[J];g&&(n_=Lt(g)*(parseFloat(n_)/100))}}this.originPoint[J]=n_}),Z&&W_.postRender(()=>Z(y,S)),sr(this.visualElement,"transform");const{animationState:__}=this.visualElement;__&&__.setActive("whileDrag",!0)},T=(y,S)=>{this.latestPointerEvent=y,this.latestPanInfo=S;const{dragPropagation:G,dragDirectionLock:X,onDirectionLock:Z,onDrag:__}=this.getProps();if(!G&&!this.openDragLock)return;const{offset:J}=S;if(X&&this.currentDirection===null){this.currentDirection=ty(J),this.currentDirection!==null&&Z&&Z(this.currentDirection);return}this.updateAxis("x",S.point,J),this.updateAxis("y",S.point,J),this.visualElement.render(),__&&__(y,S)},d=(y,S)=>{this.latestPointerEvent=y,this.latestPanInfo=S,this.stop(y,S),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>zt(y=>this.getAnimationState(y)==="paused"&&this.getAxisMotionValue(y).animation?.play()),{dragSnapToOrigin:A}=this.getProps();this.panSession=new C0(i,{onSessionStart:f,onStart:u,onMove:T,onSessionEnd:d,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:A,distanceThreshold:l,contextWindow:N0(this.visualElement)})}stop(i,$){const l=i||this.latestPointerEvent,r=$||this.latestPanInfo,f=this.isDragging;if(this.cancel(),!f||!r||!l)return;const{velocity:u}=r;this.startAnimation(u);const{onDragEnd:T}=this.getProps();T&&W_.postRender(()=>T(l,r))}cancel(){this.isDragging=!1;const{projection:i,animationState:$}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:l}=this.getProps();!l&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),$&&$.setActive("whileDrag",!1)}updateAxis(i,$,l){const{drag:r}=this.getProps();if(!l||!Z$(i,r,this.currentDirection))return;const f=this.getAxisMotionValue(i);let u=this.originPoint[i]+l[i];this.constraints&&this.constraints[i]&&(u=X1(u,this.constraints[i],this.elastic[i])),f.set(u)}resolveConstraints(){const{dragConstraints:i,dragElastic:$}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;i&&ra(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&l?this.constraints=K1(l.layoutBox,i):this.constraints=!1,this.elastic=Z1($),r!==this.constraints&&l&&this.constraints&&!this.hasMutatedConstraints&&zt(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=Q1(l.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:$}=this.getProps();if(!i||!ra(i))return!1;const l=i.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const f=e1(l,r.root,this.visualElement.getTransformPagePoint());let u=q1(r.layout.layoutBox,f);if($){const T=$(J8(u));this.hasMutatedConstraints=!!T,T&&(u=f0(T))}return u}startAnimation(i){const{drag:$,dragMomentum:l,dragElastic:r,dragTransition:f,dragSnapToOrigin:u,onDragTransitionEnd:T}=this.getProps(),d=this.constraints||{},h=zt(A=>{if(!Z$(A,$,this.currentDirection))return;let y=d&&d[A]||{};u&&(y={min:0,max:0});const S=r?200:1e6,G=r?40:1e7,X={type:"inertia",velocity:l?i[A]:0,bounceStiffness:S,bounceDamping:G,timeConstant:750,restDelta:1,restSpeed:10,...f,...y};return this.startAxisValueAnimation(A,X)});return Promise.all(h).then(T)}startAxisValueAnimation(i,$){const l=this.getAxisMotionValue(i);return sr(this.visualElement,i),l.start(zr(i,l,0,$,this.visualElement,!1))}stopAnimation(){zt(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){zt(i=>this.getAxisMotionValue(i).animation?.pause())}getAnimationState(i){return this.getAxisMotionValue(i).animation?.state}getAxisMotionValue(i){const $=`_drag${i.toUpperCase()}`,l=this.visualElement.getProps(),r=l[$];return r||this.visualElement.getValue(i,(l.initial?l.initial[i]:void 0)||0)}snapToCursor(i){zt($=>{const{drag:l}=this.getProps();if(!Z$($,l,this.currentDirection))return;const{projection:r}=this.visualElement,f=this.getAxisMotionValue($);if(r&&r.layout){const{min:u,max:T}=r.layout.layoutBox[$];f.set(i[$]-F_(u,T,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:$}=this.getProps(),{projection:l}=this.visualElement;if(!ra($)||!l||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};zt(u=>{const T=this.getAxisMotionValue(u);if(T&&this.constraints!==!1){const d=T.get();r[u]=k1({min:d,max:d},this.constraints[u])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",l.root&&l.root.updateScroll(),l.updateLayout(),this.resolveConstraints(),zt(u=>{if(!Z$(u,i,null))return;const T=this.getAxisMotionValue(u),{min:d,max:h}=this.constraints[u];T.set(F_(d,h,r[u]))})}addListeners(){if(!this.visualElement.current)return;J1.set(this.visualElement,this);const i=this.visualElement.current,$=gi(i,"pointerdown",d=>{const{drag:h,dragListener:A=!0}=this.getProps();h&&A&&this.start(d)}),l=()=>{const{dragConstraints:d}=this.getProps();ra(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,f=r.addEventListener("measure",l);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),W_.read(l);const u=Mi(window,"resize",()=>this.scalePositionWithinConstraints()),T=r.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(zt(A=>{const y=this.getAxisMotionValue(A);y&&(this.originPoint[A]+=d[A].translate,y.set(y.get()+d[A].translate))}),this.visualElement.render())}));return()=>{u(),$(),f(),T&&T()}}getProps(){const i=this.visualElement.getProps(),{drag:$=!1,dragDirectionLock:l=!1,dragPropagation:r=!1,dragConstraints:f=!1,dragElastic:u=rr,dragMomentum:T=!0}=i;return{...i,drag:$,dragDirectionLock:l,dragPropagation:r,dragConstraints:f,dragElastic:u,dragMomentum:T}}}function Z$(e,i,$){return(i===!0||i===e)&&($===null||$===e)}function ty(e,i=10){let $=null;return Math.abs(e.y)>i?$="y":Math.abs(e.x)>i&&($="x"),$}class ey extends Qe{constructor(i){super(i),this.removeGroupControls=Xt,this.removeListeners=Xt,this.controls=new _y(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Xt}unmount(){this.removeGroupControls(),this.removeListeners()}}const Od=e=>(i,$)=>{e&&W_.postRender(()=>e(i,$))};class ny extends Qe{constructor(){super(...arguments),this.removePointerDownListener=Xt}onPointerDown(i){this.session=new C0(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:N0(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:$,onPan:l,onPanEnd:r}=this.node.getProps();return{onSessionStart:Od(i),onStart:Od($),onMove:l,onEnd:(f,u)=>{delete this.session,r&&W_.postRender(()=>r(f,u))}}}mount(){this.removePointerDownListener=gi(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const el={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Dd(e,i){return i.max===i.min?0:e/(i.max-i.min)*100}const mi={correct:(e,i)=>{if(!i.target)return e;if(typeof e=="string")if(f_.test(e))e=parseFloat(e);else return e;const $=Dd(e,i.target.x),l=Dd(e,i.target.y);return`${$}% ${l}%`}},ay={correct:(e,{treeScale:i,projectionDelta:$})=>{const l=e,r=ke.parse(e);if(r.length>5)return l;const f=ke.createTransformer(e),u=typeof r[0]!="number"?1:0,T=$.x.scale*i.x,d=$.y.scale*i.y;r[0+u]/=T,r[1+u]/=d;const h=F_(T,d,.5);return typeof r[2+u]=="number"&&(r[2+u]/=h),typeof r[3+u]=="number"&&(r[3+u]/=h),f(r)}};let Go=!1;class iy extends i_.Component{componentDidMount(){const{visualElement:i,layoutGroup:$,switchLayoutGroup:l,layoutId:r}=this.props,{projection:f}=i;v8($y),f&&($.group&&$.group.add(f),l&&l.register&&r&&l.register(f),Go&&f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,onExitComplete:()=>this.safeToRemove()})),el.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:$,visualElement:l,drag:r,isPresent:f}=this.props,{projection:u}=l;return u&&(u.isPresent=f,Go=!0,r||i.layoutDependency!==$||$===void 0||i.isPresent!==f?u.willUpdate():this.safeToRemove(),i.isPresent!==f&&(f?u.promote():u.relegate()||W_.postRender(()=>{const T=u.getStack();(!T||!T.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),Ur.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:$,switchLayoutGroup:l}=this.props,{projection:r}=i;Go=!0,r&&(r.scheduleCheckAfterUnmount(),$&&$.group&&$.group.remove(r),l&&l.deregister&&l.deregister(r))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function b0(e){const[i,$]=m8(),l=i_.useContext(oh);return N.jsx(iy,{...e,layoutGroup:l,switchLayoutGroup:i_.useContext(u0),isPresent:i,safeToRemove:$})}const $y={borderRadius:{...mi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:mi,borderTopRightRadius:mi,borderBottomLeftRadius:mi,borderBottomRightRadius:mi,boxShadow:ay};function ly(e,i,$){const l=Et(e)?e:da(e);return l.start(zr("",l,i,$)),l.animation}const sy=(e,i)=>e.depth-i.depth;class oy{constructor(){this.children=[],this.isDirty=!1}add(i){Er(this.children,i),this.isDirty=!0}remove(i){Ar(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(sy),this.isDirty=!1,this.children.forEach(i)}}function ry(e,i){const $=Rt.now(),l=({timestamp:r})=>{const f=r-$;f>=i&&(qe(l),e(f-i))};return W_.setup(l,!0),()=>qe(l)}const M0=["TopLeft","TopRight","BottomLeft","BottomRight"],uy=M0.length,Hd=e=>typeof e=="string"?parseFloat(e):e,Ud=e=>typeof e=="number"||f_.test(e);function cy(e,i,$,l,r,f){r?(e.opacity=F_(0,$.opacity??1,fy(l)),e.opacityExit=F_(i.opacity??1,0,Ty(l))):f&&(e.opacity=F_(i.opacity??1,$.opacity??1,l));for(let u=0;u<uy;u++){const T=`border${M0[u]}Radius`;let d=Pd(i,T),h=Pd($,T);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||Ud(d)===Ud(h)?(e[T]=Math.max(F_(Hd(d),Hd(h),l),0),(ie.test(h)||ie.test(d))&&(e[T]+="%")):e[T]=h}(i.rotate||$.rotate)&&(e.rotate=F_(i.rotate||0,$.rotate||0,l))}function Pd(e,i){return e[i]!==void 0?e[i]:e.borderRadius}const fy=O0(0,.5,mh),Ty=O0(.5,.95,Xt);function O0(e,i,$){return l=>l<e?0:l>i?1:$(vi(e,i,l))}function Bd(e,i){e.min=i.min,e.max=i.max}function Ft(e,i){Bd(e.x,i.x),Bd(e.y,i.y)}function Gd(e,i){e.translate=i.translate,e.scale=i.scale,e.originPoint=i.originPoint,e.origin=i.origin}function Vd(e,i,$,l,r){return e-=i,e=ll(e,1/$,l),r!==void 0&&(e=ll(e,1/r,l)),e}function dy(e,i=0,$=1,l=.5,r,f=e,u=e){if(ie.test(i)&&(i=parseFloat(i),i=F_(u.min,u.max,i/100)-u.min),typeof i!="number")return;let T=F_(f.min,f.max,l);e===f&&(T-=i),e.min=Vd(e.min,i,$,T,r),e.max=Vd(e.max,i,$,T,r)}function wd(e,i,[$,l,r],f,u){dy(e,i[$],i[l],i[r],i.scale,f,u)}const hy=["x","scaleX","originX"],Ey=["y","scaleY","originY"];function Wd(e,i,$,l){wd(e.x,i,hy,$?$.x:void 0,l?l.x:void 0),wd(e.y,i,Ey,$?$.y:void 0,l?l.y:void 0)}function Yd(e){return e.translate===0&&e.scale===1}function D0(e){return Yd(e.x)&&Yd(e.y)}function jd(e,i){return e.min===i.min&&e.max===i.max}function Ay(e,i){return jd(e.x,i.x)&&jd(e.y,i.y)}function Fd(e,i){return Math.round(e.min)===Math.round(i.min)&&Math.round(e.max)===Math.round(i.max)}function H0(e,i){return Fd(e.x,i.x)&&Fd(e.y,i.y)}function zd(e){return Lt(e.x)/Lt(e.y)}function Xd(e,i){return e.translate===i.translate&&e.scale===i.scale&&e.originPoint===i.originPoint}class Ly{constructor(){this.members=[]}add(i){Er(this.members,i),i.scheduleRender()}remove(i){if(Ar(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const $=this.members[this.members.length-1];$&&this.promote($)}}relegate(i){const $=this.members.findIndex(r=>i===r);if($===0)return!1;let l;for(let r=$;r>=0;r--){const f=this.members[r];if(f.isPresent!==!1){l=f;break}}return l?(this.promote(l),!0):!1}promote(i,$){const l=this.lead;if(i!==l&&(this.prevLead=l,this.lead=i,i.show(),l)){l.instance&&l.scheduleRender(),i.scheduleRender(),i.resumeFrom=l,$&&(i.resumeFrom.preserveOpacity=!0),l.snapshot&&(i.snapshot=l.snapshot,i.snapshot.latestValues=l.animationValues||l.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:r}=i.options;r===!1&&l.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:$,resumingFrom:l}=i;$.onExitComplete&&$.onExitComplete(),l&&l.options.onExitComplete&&l.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function my(e,i,$){let l="";const r=e.x.translate/i.x,f=e.y.translate/i.y,u=$?.z||0;if((r||f||u)&&(l=`translate3d(${r}px, ${f}px, ${u}px) `),(i.x!==1||i.y!==1)&&(l+=`scale(${1/i.x}, ${1/i.y}) `),$){const{transformPerspective:h,rotate:A,rotateX:y,rotateY:S,skewX:G,skewY:X}=$;h&&(l=`perspective(${h}px) ${l}`),A&&(l+=`rotate(${A}deg) `),y&&(l+=`rotateX(${y}deg) `),S&&(l+=`rotateY(${S}deg) `),G&&(l+=`skewX(${G}deg) `),X&&(l+=`skewY(${X}deg) `)}const T=e.x.scale*i.x,d=e.y.scale*i.y;return(T!==1||d!==1)&&(l+=`scale(${T}, ${d})`),l||"none"}const Vo=["","X","Y","Z"],yy=1e3;let py=0;function wo(e,i,$,l){const{latestValues:r}=i;r[e]&&($[e]=r[e],i.setStaticValue(e,0),l&&(l[e]=0))}function U0(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:i}=e.options;if(!i)return;const $=y0(i);if(window.MotionHasOptimisedAnimation($,"transform")){const{layout:r,layoutId:f}=e.options;window.MotionCancelOptimisedAnimation($,"transform",W_,!(r||f))}const{parent:l}=e;l&&!l.hasCheckedOptimisedAppear&&U0(l)}function P0({attachResizeListener:e,defaultParent:i,measureScroll:$,checkIsScrollRoot:l,resetTransform:r}){return class{constructor(u={},T=i?.()){this.id=py++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Ry),this.nodes.forEach(Cy),this.nodes.forEach(xy),this.nodes.forEach(Sy)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=T?T.root||T:this,this.path=T?[...T.path,T]:[],this.parent=T,this.depth=T?T.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new oy)}addEventListener(u,T){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new yr),this.eventHandlers.get(u).add(T)}notifyListeners(u,...T){const d=this.eventHandlers.get(u);d&&d.notify(...T)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=Zh(u)&&!E8(u),this.instance=u;const{layoutId:T,layout:d,visualElement:h}=this.options;if(h&&!h.current&&h.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||T)&&(this.isLayoutDirty=!0),e){let A,y=0;const S=()=>this.root.updateBlockedByResize=!1;W_.read(()=>{y=window.innerWidth}),e(u,()=>{const G=window.innerWidth;G!==y&&(y=G,this.root.updateBlockedByResize=!0,A&&A(),A=ry(S,250),el.hasAnimatedSinceResize&&(el.hasAnimatedSinceResize=!1,this.nodes.forEach(kd)))})}T&&this.root.registerSharedNode(T,this),this.options.animate!==!1&&h&&(T||d)&&this.addEventListener("didUpdate",({delta:A,hasLayoutChanged:y,hasRelativeLayoutChanged:S,layout:G})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const X=this.options.transition||h.getDefaultTransition()||Hy,{onLayoutAnimationStart:Z,onLayoutAnimationComplete:__}=h.getProps(),J=!this.targetLayout||!H0(this.targetLayout,G),n_=!y&&S;if(this.options.layoutRoot||this.resumeFrom||n_||y&&(J||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const k={...Dr(X,"layout"),onPlay:Z,onComplete:__};(h.shouldReduceMotion||this.options.layoutRoot)&&(k.delay=0,k.type=!1),this.startAnimation(k),this.setAnimationOrigin(A,n_)}else y||kd(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=G})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),qe(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(by),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&U0(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let A=0;A<this.path.length;A++){const y=this.path[A];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:T,layout:d}=this.options;if(T===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Kd);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(qd);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Ny),this.nodes.forEach(Iy),this.nodes.forEach(gy)):this.nodes.forEach(qd),this.clearAllSnapshots();const T=Rt.now();ft.delta=ye(0,1e3/60,T-ft.timestamp),ft.timestamp=T,ft.isProcessing=!0,Co.update.process(ft),Co.preRender.process(ft),Co.render.process(ft),ft.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ur.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(vy),this.sharedNodes.forEach(My)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,W_.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){W_.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Lt(this.snapshot.measuredBox.x)&&!Lt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=J_(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:T}=this.options;T&&T.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let T=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(T=!1),T&&this.instance){const d=l(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:d,offset:$(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!r)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,T=this.projectionDelta&&!D0(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,A=h!==this.prevTransformTemplateValue;u&&this.instance&&(T||Ln(this.latestValues)||A)&&(r(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const T=this.measurePageBox();let d=this.removeElementScroll(T);return u&&(d=this.removeTransform(d)),Uy(d),{animationId:this.root.animationId,measuredBox:T,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:u}=this.options;if(!u)return J_();const T=u.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Py))){const{scroll:h}=this.root;h&&(ua(T.x,h.offset.x),ua(T.y,h.offset.y))}return T}removeElementScroll(u){const T=J_();if(Ft(T,u),this.scroll?.wasRoot)return T;for(let d=0;d<this.path.length;d++){const h=this.path[d],{scroll:A,options:y}=h;h!==this.root&&A&&y.layoutScroll&&(A.wasRoot&&Ft(T,u),ua(T.x,A.offset.x),ua(T.y,A.offset.y))}return T}applyTransform(u,T=!1){const d=J_();Ft(d,u);for(let h=0;h<this.path.length;h++){const A=this.path[h];!T&&A.options.layoutScroll&&A.scroll&&A!==A.root&&ca(d,{x:-A.scroll.offset.x,y:-A.scroll.offset.y}),Ln(A.latestValues)&&ca(d,A.latestValues)}return Ln(this.latestValues)&&ca(d,this.latestValues),d}removeTransform(u){const T=J_();Ft(T,u);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!Ln(h.latestValues))continue;ar(h.latestValues)&&h.updateSnapshot();const A=J_(),y=h.measurePageBox();Ft(A,y),Wd(T,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,A)}return Ln(this.latestValues)&&Wd(T,this.latestValues),T}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ft.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){const T=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=T.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=T.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=T.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==T;if(!(u||d&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:A,layoutId:y}=this.options;if(!(!this.layout||!(A||y))){if(this.resolvedRelativeTargetAt=ft.timestamp,!this.targetDelta&&!this.relativeTarget){const S=this.getClosestProjectingParent();S&&S.layout&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=J_(),this.relativeTargetOrigin=J_(),Si(this.relativeTargetOrigin,this.layout.layoutBox,S.layout.layoutBox),Ft(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=J_(),this.targetWithTransforms=J_()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Y1(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ft(this.target,this.layout.layoutBox),d0(this.target,this.targetDelta)):Ft(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const S=this.getClosestProjectingParent();S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=J_(),this.relativeTargetOrigin=J_(),Si(this.relativeTargetOrigin,this.target,S.target),Ft(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||ar(this.parent.latestValues)||T0(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const u=this.getLead(),T=!!this.resumingFrom||this!==u;let d=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(d=!1),T&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===ft.timestamp&&(d=!1),d)return;const{layout:h,layoutId:A}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||A))return;Ft(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,S=this.treeScale.y;t1(this.layoutCorrected,this.treeScale,this.path,T),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=J_());const{target:G}=u;if(!G){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Gd(this.prevProjectionDelta.x,this.projectionDelta.x),Gd(this.prevProjectionDelta.y,this.projectionDelta.y)),Ri(this.projectionDelta,this.layoutCorrected,G,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==S||!Xd(this.projectionDelta.x,this.prevProjectionDelta.x)||!Xd(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",G))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){if(this.options.visualElement?.scheduleRender(),u){const T=this.getStack();T&&T.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=fa(),this.projectionDelta=fa(),this.projectionDeltaWithTransform=fa()}setAnimationOrigin(u,T=!1){const d=this.snapshot,h=d?d.latestValues:{},A={...this.latestValues},y=fa();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!T;const S=J_(),G=d?d.source:void 0,X=this.layout?this.layout.source:void 0,Z=G!==X,__=this.getStack(),J=!__||__.members.length<=1,n_=!!(Z&&!J&&this.options.crossfade===!0&&!this.path.some(Dy));this.animationProgress=0;let k;this.mixTargetDelta=g=>{const b=g/1e3;Qd(y.x,u.x,b),Qd(y.y,u.y,b),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Si(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Oy(this.relativeTarget,this.relativeTargetOrigin,S,b),k&&Ay(this.relativeTarget,k)&&(this.isProjectionDirty=!1),k||(k=J_()),Ft(k,this.relativeTarget)),Z&&(this.animationValues=A,cy(A,h,this.latestValues,b,n_,J)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=b},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(qe(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=W_.update(()=>{el.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=da(0)),this.currentAnimation=ly(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:T=>{this.mixTargetDelta(T),u.onUpdate&&u.onUpdate(T)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(yy),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:T,target:d,layout:h,latestValues:A}=u;if(!(!T||!d||!h)){if(this!==u&&this.layout&&h&&B0(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||J_();const y=Lt(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+y;const S=Lt(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+S}Ft(T,d),ca(T,A),Ri(this.projectionDeltaWithTransform,this.layoutCorrected,T,A)}}registerSharedNode(u,T){this.sharedNodes.has(u)||this.sharedNodes.set(u,new Ly),this.sharedNodes.get(u).add(T);const h=T.options.initialPromotionConfig;T.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(T):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){const{layoutId:u}=this.options;return u?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:u}=this.options;return u?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:T,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),T&&this.setOptions({transition:T})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let T=!1;const{latestValues:d}=u;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(T=!0),!T)return;const h={};d.z&&wo("z",u,h,this.animationValues);for(let A=0;A<Vo.length;A++)wo(`rotate${Vo[A]}`,u,h,this.animationValues),wo(`skew${Vo[A]}`,u,h,this.animationValues);u.render();for(const A in h)u.setStaticValue(A,h[A]),this.animationValues&&(this.animationValues[A]=h[A]);u.scheduleRender()}applyProjectionStyles(u,T){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const d=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=tl(T?.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=tl(T?.pointerEvents)||""),this.hasProjected&&!Ln(this.latestValues)&&(u.transform=d?d({},""):"none",this.hasProjected=!1);return}u.visibility="";const A=h.animationValues||h.latestValues;this.applyTransformsToTarget();let y=my(this.projectionDeltaWithTransform,this.treeScale,A);d&&(y=d(A,y)),u.transform=y;const{x:S,y:G}=this.projectionDelta;u.transformOrigin=`${S.origin*100}% ${G.origin*100}% 0`,h.animationValues?u.opacity=h===this?A.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:A.opacityExit:u.opacity=h===this?A.opacity!==void 0?A.opacity:"":A.opacityExit!==void 0?A.opacityExit:0;for(const X in bi){if(A[X]===void 0)continue;const{correct:Z,applyTo:__,isCSSVariable:J}=bi[X],n_=y==="none"?A[X]:Z(A[X],h);if(__){const k=__.length;for(let g=0;g<k;g++)u[__[g]]=n_}else J?this.options.visualElement.renderState.vars[X]=n_:u[X]=n_}this.options.layoutId&&(u.pointerEvents=h===this?tl(T?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>u.currentAnimation?.stop()),this.root.nodes.forEach(Kd),this.root.sharedNodes.clear()}}}function Iy(e){e.updateLayout()}function gy(e){const i=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&i&&e.hasListeners("didUpdate")){const{layoutBox:$,measuredBox:l}=e.layout,{animationType:r}=e.options,f=i.source!==e.layout.source;r==="size"?zt(A=>{const y=f?i.measuredBox[A]:i.layoutBox[A],S=Lt(y);y.min=$[A].min,y.max=y.min+S}):B0(r,i.layoutBox,$)&&zt(A=>{const y=f?i.measuredBox[A]:i.layoutBox[A],S=Lt($[A]);y.max=y.min+S,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[A].max=e.relativeTarget[A].min+S)});const u=fa();Ri(u,$,i.layoutBox);const T=fa();f?Ri(T,e.applyTransform(l,!0),i.measuredBox):Ri(T,$,i.layoutBox);const d=!D0(u);let h=!1;if(!e.resumeFrom){const A=e.getClosestProjectingParent();if(A&&!A.resumeFrom){const{snapshot:y,layout:S}=A;if(y&&S){const G=J_();Si(G,i.layoutBox,y.layoutBox);const X=J_();Si(X,$,S.layoutBox),H0(G,X)||(h=!0),A.options.layoutRoot&&(e.relativeTarget=X,e.relativeTargetOrigin=G,e.relativeParent=A)}}}e.notifyListeners("didUpdate",{layout:$,snapshot:i,delta:T,layoutDelta:u,hasLayoutChanged:d,hasRelativeLayoutChanged:h})}else if(e.isLead()){const{onExitComplete:$}=e.options;$&&$()}e.options.transition=void 0}function Ry(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Sy(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function vy(e){e.clearSnapshot()}function Kd(e){e.clearMeasurements()}function qd(e){e.isLayoutDirty=!1}function Ny(e){const{visualElement:i}=e.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),e.resetTransform()}function kd(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Cy(e){e.resolveTargetDelta()}function xy(e){e.calcProjection()}function by(e){e.resetSkewAndRotation()}function My(e){e.removeLeadSnapshot()}function Qd(e,i,$){e.translate=F_(i.translate,0,$),e.scale=F_(i.scale,1,$),e.origin=i.origin,e.originPoint=i.originPoint}function Zd(e,i,$,l){e.min=F_(i.min,$.min,l),e.max=F_(i.max,$.max,l)}function Oy(e,i,$,l){Zd(e.x,i.x,$.x,l),Zd(e.y,i.y,$.y,l)}function Dy(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Hy={duration:.45,ease:[.4,0,.1,1]},Jd=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),_h=Jd("applewebkit/")&&!Jd("chrome/")?Math.round:Xt;function th(e){e.min=_h(e.min),e.max=_h(e.max)}function Uy(e){th(e.x),th(e.y)}function B0(e,i,$){return e==="position"||e==="preserve-aspect"&&!W1(zd(i),zd($),.2)}function Py(e){return e!==e.root&&e.scroll?.wasRoot}const By=P0({attachResizeListener:(e,i)=>Mi(e,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Wo={current:void 0},G0=P0({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Wo.current){const e=new By({});e.mount(window),e.setOptions({layoutScroll:!0}),Wo.current=e}return Wo.current},resetTransform:(e,i)=>{e.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Gy={pan:{Feature:ny},drag:{Feature:ey,ProjectionNode:G0,MeasureLayout:b0}};function eh(e,i,$){const{props:l}=e;e.animationState&&l.whileHover&&e.animationState.setActive("whileHover",$==="Start");const r="onHover"+$,f=l[r];f&&W_.postRender(()=>f(i,Ui(i)))}class Vy extends Qe{mount(){const{current:i}=this.node;i&&(this.unmount=c8(i,($,l)=>(eh(this.node,l,"Start"),r=>eh(this.node,r,"End"))))}unmount(){}}class wy extends Qe{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Oi(Mi(this.node.current,"focus",()=>this.onFocus()),Mi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function nh(e,i,$){const{props:l}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&l.whileTap&&e.animationState.setActive("whileTap",$==="Start");const r="onTap"+($==="End"?"":$),f=l[r];f&&W_.postRender(()=>f(i,Ui(i)))}class Wy extends Qe{mount(){const{current:i}=this.node;i&&(this.unmount=h8(i,($,l)=>(nh(this.node,l,"Start"),(r,{success:f})=>nh(this.node,r,f?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const ur=new WeakMap,Yo=new WeakMap,Yy=e=>{const i=ur.get(e.target);i&&i(e)},jy=e=>{e.forEach(Yy)};function Fy({root:e,...i}){const $=e||document;Yo.has($)||Yo.set($,{});const l=Yo.get($),r=JSON.stringify(i);return l[r]||(l[r]=new IntersectionObserver(jy,{root:e,...i})),l[r]}function zy(e,i,$){const l=Fy(i);return ur.set(e,$),l.observe(e),()=>{ur.delete(e),l.unobserve(e)}}const Xy={some:0,all:1};class Ky extends Qe{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:$,margin:l,amount:r="some",once:f}=i,u={root:$?$.current:void 0,rootMargin:l,threshold:typeof r=="number"?r:Xy[r]},T=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,f&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:A,onViewportLeave:y}=this.node.getProps(),S=h?A:y;S&&S(d)};return zy(this.node.current,u,T)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:$}=this.node;["amount","margin","root"].some(qy(i,$))&&this.startObserver()}unmount(){}}function qy({viewport:e={}},{viewport:i={}}={}){return $=>e[$]!==i[$]}const ky={inView:{Feature:Ky},tap:{Feature:Wy},focus:{Feature:wy},hover:{Feature:Vy}},Qy={layout:{ProjectionNode:G0,MeasureLayout:b0}},Zy={...U1,...ky,...Gy,...Qy},s_=Z8(Zy,u1);function Jy(e,i){i===void 0&&(i={});var $=i.insertAt;if(!(typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",$==="top"&&l.firstChild?l.insertBefore(r,l.firstChild):l.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var _p=`.index-module_canvas__H2w7d {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}`,tp={canvas:"index-module_canvas__H2w7d"};Jy(_p);var Ht=function(e,i){return Math.random()*(i-e)+e},ep=function(e){var i=parseInt(e.slice(1,3),16),$=parseInt(e.slice(3,5),16),l=parseInt(e.slice(5,7),16);return{r:i,g:$,b:l}},np=(function(){function e(i,$,l,r,f,u,T,d,h){l===void 0&&(l=0),f===void 0&&(f=["circle","square"]),u===void 0&&(u=12),T===void 0&&(T=30),d===void 0&&(d=1),h===void 0&&(h=.004),this.x=i*window.innerWidth,this.y=$*window.innerHeight,this.width=u,this.height=u,this.theta=Math.PI/180*Ht(l-T,l+T),this.radius=Ht(20*d,70*d),this.vx=this.radius*Math.cos(this.theta),this.vy=this.radius*Math.sin(this.theta),this.xFriction=.9,this.yFriction=.87,this.gravity=Ht(.5,.6),this.opacity=1,this.opacityDelta=h,this.rotate=Ht(0,360),this.widthDelta=Ht(0,360),this.heightDelta=Ht(0,360),this.rotateDelta=Ht(-1,1),this.colors=r,this.color=ep(this.colors[Math.floor(Ht(0,this.colors.length))]),this.shapes=f,this.shape=this.shapes[Math.floor(Ht(0,this.shapes.length))],this.swingOffset=Ht(0,Math.PI*2),this.swingSpeed=Math.random()*.05+.01,this.swingAmplitude=Ht(.1,.2)}return e.prototype.update=function(){this.vx*=this.xFriction,this.vy*=this.yFriction,this.vy+=this.gravity,this.vx+=Math.sin(this.swingOffset)*this.swingAmplitude,this.x+=this.vx,this.y+=this.vy,this.opacity-=this.opacityDelta,this.widthDelta+=2,this.heightDelta+=2,this.rotate+=this.rotateDelta,this.swingOffset+=this.swingSpeed},e.prototype.drawSquare=function(i){i.fillRect(this.x,this.y,this.width*Math.cos(Math.PI/180*this.widthDelta),this.height*Math.sin(Math.PI/180*this.heightDelta))},e.prototype.drawCircle=function(i){i.beginPath(),i.ellipse(this.x,this.y,Math.abs(this.width*Math.cos(Math.PI/180*this.widthDelta))/2,Math.abs(this.height*Math.sin(Math.PI/180*this.heightDelta))/2,0,0,2*Math.PI),i.fill(),i.closePath()},e.prototype.draw=function(i){var $=this.width*1.3,l=this.height*1.3;i.translate(this.x+$,this.y+l),i.rotate(Math.PI/100*this.rotate),i.translate(-(this.x+$),-(this.y+l)),i.fillStyle="rgba(".concat(this.color.r,", ").concat(this.color.g,", ").concat(this.color.b,", ").concat(this.opacity,")"),this.shape==="square"&&this.drawSquare(i),this.shape==="circle"&&this.drawCircle(i),i.resetTransform()},e})(),ap=60,ah=1e3/ap;function ip(e){var i=e.mode,$=i===void 0?"boom":i,l=e.particleCount,r=l===void 0?30:l,f=e.shapeSize,u=f===void 0?12:f,T=e.colors,d=T===void 0?["#ff577f","#ff884b","#ffd384","#fff9b0"]:T,h=e.className,A=e.style,y=e.mode==="boom"||e.mode===void 0?e:{effectInterval:1,effectCount:1/0},S=y.x,G=S===void 0?.5:S,X=y.y,Z=X===void 0?.5:X,__=y.deg,J=__===void 0?270:__,n_=y.spreadDeg,k=n_===void 0?30:n_,g=y.effectInterval,b=g===void 0?3e3:g,t_=y.effectCount,e_=t_===void 0?1:t_,W=y.launchSpeed,p_=W===void 0?1:W,P_=y.opacityDeltaMultiplier,Y_=P_===void 0?1:P_,N_=(e.mode==="fall"?e:{}).fadeOutHeight,_t=N_===void 0?.8:N_,z_=i_.useRef(null),m_=i_.useRef(),B=i_.useRef([]),z=i_.useRef(0),a_=i_.useRef(0),T_=i_.useCallback(function(){var F=z_.current,p=F?.getContext("2d");if(!(!F||!p)){m_.current=p;var C=window.innerWidth,L=window.innerHeight;F.width=C,F.height=L}},[]),I=i_.useCallback(function(){for(var F=$==="fall",p=F?r/30:r,C=F?Ht(0,1):G,L=F?Ht(-.1,-.3):Z,v=F?270:J,U=F?0:k,H=F?0:p_,Q=F?3.4/_t/window.innerHeight:.004*Math.max(.1,Y_),q=0;q<p;q+=1)B.current.push(new np(C,L,v,d,["circle","square"],u,U,H,Q))},[$,G,Z,J,d,u,k,p_,r,_t,Y_]),Y=i_.useCallback(function(){if(m_.current){var F,p,C=Date.now(),L,v=Date.now()-b,U=function(){var H=z_.current;if(m_.current&&H&&(z.current=requestAnimationFrame(U),F=Date.now(),p=F-C,L=F-v,!(p<ah))){m_.current.clearRect(0,0,H.width,H.height),L>b&&a_.current<e_&&(I(),v=F-L%b,a_.current+=1);for(var Q=B.current,q=Q.length-1;q>=0;q-=1){var K=Q[q];K.update(),K.draw(m_.current);var l_=H?.height||0;(K.opacity<=0||K.y>l_)&&Q.splice(Q.indexOf(K),1)}C=F-p%ah,a_.current>=e_&&Q.length===0&&cancelAnimationFrame(z.current)}};z.current=requestAnimationFrame(U)}},[b,e_,I]);return i_.useEffect(function(){return T_(),Y(),function(){z.current&&cancelAnimationFrame(z.current)}},[T_,Y]),i_.useEffect(function(){a_.current=0},[e_]),fL.createElement("canvas",{className:[tp.canvas,h].filter(Boolean).join(" "),ref:z_,style:A})}const $p="modulepreload",lp=function(e){return"/tavi-leader-referral/"+e},ih={},sp=function(i,$,l){let r=Promise.resolve();if($&&$.length>0){let h=function(A){return Promise.all(A.map(y=>Promise.resolve(y).then(S=>({status:"fulfilled",value:S}),S=>({status:"rejected",reason:S}))))};var u=h;document.getElementsByTagName("link");const T=document.querySelector("meta[property=csp-nonce]"),d=T?.nonce||T?.getAttribute("nonce");r=h($.map(A=>{if(A=lp(A),A in ih)return;ih[A]=!0;const y=A.endsWith(".css"),S=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${A}"]${S}`))return;const G=document.createElement("link");if(G.rel=y?"stylesheet":$p,y||(G.as="script"),G.crossOrigin="",G.href=A,d&&G.setAttribute("nonce",d),document.head.appendChild(G),y)return new Promise((X,Z)=>{G.addEventListener("load",X),G.addEventListener("error",()=>Z(new Error(`Unable to preload CSS for ${A}`)))})}))}function f(T){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=T,window.dispatchEvent(d),!d.defaultPrevented)throw T}return r.then(T=>{for(const d of T||[])d.status==="rejected"&&f(d.reason);return i().catch(f)})};function op({onlyFirst:e=!1}={}){const r="(?:\\u001B\\][\\s\\S]*?(?:\\u0007|\\u001B\\u005C|\\u009C))|[\\u001B\\u009B][[\\]()#;?]*(?:\\d{1,4}(?:[;:]\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]";return new RegExp(r,e?void 0:"g")}const rp=op();function up(e){if(typeof e!="string")throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);return e.replace(rp,"")}function cp(e){return e===161||e===164||e===167||e===168||e===170||e===173||e===174||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||e===198||e===208||e===215||e===216||e>=222&&e<=225||e===230||e>=232&&e<=234||e===236||e===237||e===240||e===242||e===243||e>=247&&e<=250||e===252||e===254||e===257||e===273||e===275||e===283||e===294||e===295||e===299||e>=305&&e<=307||e===312||e>=319&&e<=322||e===324||e>=328&&e<=331||e===333||e===338||e===339||e===358||e===359||e===363||e===462||e===464||e===466||e===468||e===470||e===472||e===474||e===476||e===593||e===609||e===708||e===711||e>=713&&e<=715||e===717||e===720||e>=728&&e<=731||e===733||e===735||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||e===1025||e>=1040&&e<=1103||e===1105||e===8208||e>=8211&&e<=8214||e===8216||e===8217||e===8220||e===8221||e>=8224&&e<=8226||e>=8228&&e<=8231||e===8240||e===8242||e===8243||e===8245||e===8251||e===8254||e===8308||e===8319||e>=8321&&e<=8324||e===8364||e===8451||e===8453||e===8457||e===8467||e===8470||e===8481||e===8482||e===8486||e===8491||e===8531||e===8532||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||e===8585||e>=8592&&e<=8601||e===8632||e===8633||e===8658||e===8660||e===8679||e===8704||e===8706||e===8707||e===8711||e===8712||e===8715||e===8719||e===8721||e===8725||e===8730||e>=8733&&e<=8736||e===8739||e===8741||e>=8743&&e<=8748||e===8750||e>=8756&&e<=8759||e===8764||e===8765||e===8776||e===8780||e===8786||e===8800||e===8801||e>=8804&&e<=8807||e===8810||e===8811||e===8814||e===8815||e===8834||e===8835||e===8838||e===8839||e===8853||e===8857||e===8869||e===8895||e===8978||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||e===9632||e===9633||e>=9635&&e<=9641||e===9650||e===9651||e===9654||e===9655||e===9660||e===9661||e===9664||e===9665||e>=9670&&e<=9672||e===9675||e>=9678&&e<=9681||e>=9698&&e<=9701||e===9711||e===9733||e===9734||e===9737||e===9742||e===9743||e===9756||e===9758||e===9792||e===9794||e===9824||e===9825||e>=9827&&e<=9829||e>=9831&&e<=9834||e===9836||e===9837||e===9839||e===9886||e===9887||e===9919||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||e===9955||e===9960||e===9961||e>=9963&&e<=9969||e===9972||e>=9974&&e<=9977||e===9979||e===9980||e===9982||e===9983||e===10045||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||e===65533||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||e===127375||e===127376||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109}function fp(e){return e===12288||e>=65281&&e<=65376||e>=65504&&e<=65510}function Tp(e){return e>=4352&&e<=4447||e===8986||e===8987||e===9001||e===9002||e>=9193&&e<=9196||e===9200||e===9203||e===9725||e===9726||e===9748||e===9749||e>=9776&&e<=9783||e>=9800&&e<=9811||e===9855||e>=9866&&e<=9871||e===9875||e===9889||e===9898||e===9899||e===9917||e===9918||e===9924||e===9925||e===9934||e===9940||e===9962||e===9970||e===9971||e===9973||e===9978||e===9981||e===9989||e===9994||e===9995||e===10024||e===10060||e===10062||e>=10067&&e<=10069||e===10071||e>=10133&&e<=10135||e===10160||e===10175||e===11035||e===11036||e===11088||e===11093||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12773||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||e===94192||e===94193||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101631&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||e===110589||e===110590||e>=110592&&e<=110882||e===110898||e>=110928&&e<=110930||e===110933||e>=110948&&e<=110951||e>=110960&&e<=111355||e>=119552&&e<=119638||e>=119648&&e<=119670||e===126980||e===127183||e===127374||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||e===127568||e===127569||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||e===127988||e>=127992&&e<=128062||e===128064||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||e===128378||e===128405||e===128406||e===128420||e>=128507&&e<=128591||e>=128640&&e<=128709||e===128716||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||e===128747||e===128748||e>=128756&&e<=128764||e>=128992&&e<=129003||e===129008||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129673||e>=129679&&e<=129734||e>=129742&&e<=129756||e>=129759&&e<=129769||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141}function dp(e){if(!Number.isSafeInteger(e))throw new TypeError(`Expected a code point, got \`${typeof e}\`.`)}function V0(e,{ambiguousAsWide:i=!1}={}){return dp(e),fp(e)||Tp(e)||i&&cp(e)?2:1}const hp=new Intl.Segmenter,Ep=new RegExp("^(?:\\p{Default_Ignorable_Code_Point}|\\p{Control}|\\p{Mark}|\\p{Surrogate})+$","v"),Ap=new RegExp("^[\\p{Default_Ignorable_Code_Point}\\p{Control}\\p{Format}\\p{Mark}\\p{Surrogate}]+","v"),Lp=new RegExp("^\\p{RGI_Emoji}$","v"),mp=new RegExp("^\\p{Emoji_Presentation}$","v");function w0(e){return e.replace(Ap,"")}function yp(e){return Ep.test(e)}function pp(e){const $=w0(e).codePointAt(0),l=String.fromCodePoint($),r=mp.test(l),f=e.includes("️"),u=e.includes("︎"),T=[...e].length,d=T>1&&!(T===2&&u&&!f);return f||r&&!u||d}function Ip(e,i){let $=0;if(e.length>1)for(const l of e.slice(1))l>="＀"&&l<="￯"&&($+=V0(l.codePointAt(0),i));return $}function gp(e,i={}){if(typeof e!="string"||e.length===0)return 0;const{ambiguousIsNarrow:$=!0,countAnsiEscapeCodes:l=!1}=i;let r=e;if(l||(r=up(r)),r.length===0)return 0;let f=0;const u={ambiguousAsWide:!$};for(const{segment:T}of hp.segment(r)){if(yp(T))continue;if(Lp.test(T)&&pp(T)){f+=2;continue}const d=w0(T).codePointAt(0);f+=V0(d,u),f+=Ip(T,u)}return f}const W0={help:{description:"사용 가능한 모든 명령어를 보여줍니다.",execute:()=>{const e=l=>gp(l,{ambiguousIsNarrow:!0}),i=(l,r)=>{const f=e(l.replace(/[가-힣]/g,"z"));return l+" ".repeat(Math.max(0,r-f))},$=Object.entries(W0).filter(([l])=>l!=="help").map(([l,{description:r}])=>`${"  "+i(l,15)} →    ${r}`);return N.jsxs("div",{className:"max-w-4xl mx-2 md:mx-auto font-mono leading-relaxed space-y-4",children:[N.jsxs(s_.div,{className:"mb-4",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.3},children:[N.jsx("div",{className:"text-cyan-400 font-semibold mb-1",children:"Available Commands:"}),N.jsx("div",{className:"text-gray-400 text-xs",children:"Use 'command_name' to execute. Tab for autocomplete."})]}),N.jsx(s_.div,{className:"bg-gray-950 p-3 border-l-2 border-cyan-500",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.4,delay:.2},children:N.jsx("div",{className:"space-y-0",children:$.map((l,r)=>N.jsx(s_.div,{className:"text-gray-300 py-0.5",initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{duration:.2,delay:.4+r*.08,ease:"easeOut"},children:l},r))})}),N.jsx(s_.div,{className:"mt-3 text-xs text-gray-500",initial:{opacity:0},animate:{opacity:1},transition:{duration:.3,delay:.8+$.length*.08},children:"→ Type a command name and press Enter to execute"})]})}},about:{description:"선배를 소개합니다.",execute:()=>{const e=[{period:"서광원 팀장님 2016.xx - 2025.08.29",role:"백엔드 개발자 / 팀장",team:"호텔 CMS 개발팀",highlights:["TideSquare CMS 프로젝트 총괄 및 전반적인 개발 주도","신규 CMS 연동 및 판매채널 구축 프로젝트 리딩","팀 내 협업 프로세스와 코드 리뷰 문화에 적응"]},{period:"이현주 2024.10 - 2025.08",role:"주니어 백엔드 개발자",team:"호텔 CMS 개발팀",highlights:["서광원 팀장님과 함께 다양한 프로젝트 협업","Kakao 및 Tripbtoz, Yanolja 등 외부 파트너 연동 개발","운영 이슈 해결 및 시스템 안정성 개선 경험 축적"]}];return N.jsxs("div",{className:"font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4",children:[N.jsxs("div",{className:"mb-4",children:[N.jsx("div",{className:"text-cyan-400 font-semibold",children:"Career About Report"}),N.jsx("div",{className:"text-gray-400 text-xs",children:"Subject: 서광원 | Timeline: Professional Experience"})]}),e.map((i,$)=>N.jsxs(s_.div,{className:"mb-6",initial:{opacity:0,x:-30,scale:.95},animate:{opacity:1,x:0,scale:1},transition:{duration:.5,delay:.3+$*.4,ease:"easeOut"},children:[N.jsxs(s_.div,{className:"mb-2",initial:{opacity:0},animate:{opacity:1},transition:{duration:.3,delay:.5+$*.4},children:[N.jsx("div",{className:"text-yellow-400 font-semibold",children:i.period}),N.jsxs("div",{className:"text-white text-xs",children:[i.role," @ ",i.team]})]}),N.jsx(s_.div,{className:"bg-gray-950 p-3 border-l-2 border-yellow-500 ml-2",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:.7+$*.4},children:i.highlights.map((l,r)=>N.jsxs(s_.div,{className:"text-gray-300 py-0.5",initial:{opacity:0,x:-15},animate:{opacity:1,x:0},transition:{duration:.3,delay:.8+$*.4+r*.1,ease:"easeOut"},children:["• ",l]},r))})]},$)),N.jsx("div",{className:"mt-6 pt-2 border-t border-gray-700",children:N.jsx("div",{className:"text-cyan-400 text-xs",children:"✓ Career progression documented. Total experience: 8+ years"})})]})}},impact:{description:"조직에 남긴 대표적인 성과를 기록합니다.",execute:()=>{const e=[{category:"REVENUE_GROWTH",impact:"매출 성장 기여",details:["신규 채널 확장 프로젝트 6건을 통한 매출 다각화","파트너 연동 시스템으로 수익원 확장","서비스 안정성 향상으로 고객 이탈 방지"]},{category:"OPERATIONAL_EFFICIENCY",impact:"운영 효율성 극대화",details:["운영 프로세스 자동화 10건으로 리소스 절약","SQL 쿼리 최적화로 응답속도 90% 단축","재작업 최소화로 개발 생산성 향상"]},{category:"SYSTEM_RELIABILITY",impact:"시스템 안정성 강화",details:["마감/취소/정산 로직 강화로 오류 방지","트래픽 처리 개선으로 서비스 중단 최소화","오류 예방 시스템 구축으로 사전 대응 체계 확립"]},{category:"CUSTOMER_SATISFACTION",impact:"고객 만족도 개선",details:["고객 피드백 반영 9건으로 사용성 향상","파트너 요구사항 적극 수용으로 파트너십 강화","서비스 확장 기능 7건으로 고객 선택권 확대"]}],i=`impact-${Date.now()}`;return N.jsxs("div",{className:"font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4",children:[N.jsxs(s_.div,{className:"mb-4",initial:{opacity:0,y:-15},animate:{opacity:1,y:0},transition:{duration:.6,ease:"easeOut"},children:[N.jsx(s_.div,{className:"text-cyan-400 font-semibold",initial:{scale:.9},animate:{scale:1},transition:{duration:.4,delay:.2},children:"Business Impact Analysis"}),N.jsx(s_.div,{className:"text-gray-400 text-xs",initial:{opacity:0},animate:{opacity:1},transition:{delay:.4,duration:.3},children:"Subject: 서광원 | Period: 2023.03 - 2024.08"})]}),N.jsxs(s_.div,{initial:{opacity:0,height:0,marginBottom:0},animate:{opacity:[0,1,1,0],height:[0,"auto","auto",0],marginBottom:[0,16,16,0]},transition:{delay:.6,duration:2.4,times:[0,.2,.8,1]},className:"text-sm text-gray-400 flex items-center space-x-2 overflow-hidden",children:[N.jsx(s_.div,{className:"w-4 h-4 border-2 border-gray-400 border-t-cyan-400 rounded-full",animate:{rotate:360},transition:{duration:.8,repeat:1/0,ease:"linear",delay:.8}}),N.jsx("span",{children:"Analyzing organizational impact metrics..."})]}),e.map(($,l)=>N.jsxs(s_.div,{className:"mb-4",initial:{opacity:0,x:-40,scale:.9},animate:{opacity:1,x:0,scale:1},transition:{duration:.6,delay:3.2+l*.3,ease:"easeOut"},children:[N.jsx(s_.div,{className:"mb-1",initial:{opacity:0},animate:{opacity:1},transition:{delay:3.4+l*.3,duration:.3},children:N.jsxs(s_.div,{className:"text-green-400 font-semibold",initial:{x:-20},animate:{x:0},transition:{delay:3.5+l*.3,duration:.4,type:"spring",stiffness:100},children:[$.category,": ",$.impact]})}),N.jsx(s_.div,{className:"bg-gray-950 p-3 border-l-2 border-green-500 ml-2",initial:{opacity:0,x:-30,scaleX:.8},animate:{opacity:1,x:0,scaleX:1},transition:{delay:3.6+l*.3,duration:.5,ease:"easeOut"},children:$.details.map((r,f)=>N.jsxs(s_.div,{className:"text-gray-300 py-0.5",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:3.8+l*.3+f*.1,duration:.3,ease:"easeOut"},children:[N.jsx(s_.span,{initial:{color:"#9ca3af"},animate:{color:["#9ca3af","#22c55e","#9ca3af"]},transition:{delay:4+l*.3+f*.1,duration:.8,ease:"easeInOut"},children:"•"}),N.jsx("span",{className:"ml-2",children:r})]},f))})]},l)),N.jsx(s_.div,{className:"mt-6 pt-2 border-t border-gray-700",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:4.5+e.length*.3,duration:.6},children:N.jsx(s_.div,{className:"text-green-400 text-xs",animate:{textShadow:["0 0 0px #22c55e","0 0 10px #22c55e40","0 0 0px #22c55e"]},transition:{duration:2,repeat:1/0,ease:"easeInOut",delay:5+e.length*.3},children:"✓ Impact assessment complete. Overall contribution: SIGNIFICANT POSITIVE"})})]},i)}},achievements:{description:"세부적인 업적과 기여를 나열합니다.",execute:()=>{const e=[{category:"PROJECT_LAUNCH",items:["신규 채널 확장 프로젝트 6건","매출 성장 견인"]},{category:"PERFORMANCE_OPT",items:["SQL 쿼리 최적화 4건","트래픽 처리 개선 4건","응답속도 최대 90% 단축"]},{category:"AUTOMATION",items:["운영 프로세스 자동화 10건","리소스 절감 및 오류 방지","재작업 최소화"]},{category:"NEW_FEATURES",items:["Kakao 연동 시스템","Tripbtoz 파트너 연동","서비스 확장 기능 7건"]},{category:"PROCESS_IMPROVE",items:["마감/취소/정산 로직 강화","운영 효율화 12건","시스템 안정성 향상"]},{category:"QUALITY_ENHANCE",items:["고객 피드백 반영 9건","파트너 요구사항 수용","오류 예방 시스템 구축"]}],i=`achievements-${Date.now()}`;return N.jsxs("div",{className:"font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4",children:[N.jsxs(s_.div,{className:"mb-4",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.4},children:[N.jsx("div",{className:"text-cyan-400 font-semibold",children:"Achievements Report"}),N.jsxs("div",{className:"text-gray-400 text-xs",children:["Generated: ",new Date().toISOString().split("T")[0]]})]}),N.jsxs(s_.div,{initial:{opacity:0,height:0,marginBottom:0},animate:{opacity:[0,1,1,0],height:[0,"auto","auto",0],marginBottom:[0,16,16,0]},transition:{delay:.6,duration:2.4,times:[0,.2,.8,1]},className:"text-sm text-gray-400 flex items-center space-x-2 overflow-hidden",children:[N.jsx(s_.div,{className:"w-4 h-4 border-2 border-gray-400 border-t-yellow-400 rounded-full",animate:{rotate:360},transition:{duration:.8,repeat:1/0,ease:"linear",delay:.8}}),N.jsx("span",{children:"Analyzing performance metrics..."})]}),e.map(($,l)=>N.jsxs(s_.div,{className:"mb-4",initial:{opacity:0,y:20,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{delay:3.2+l*.2,duration:.4,ease:"easeOut"},children:[N.jsxs(s_.div,{className:"text-yellow-400 font-semibold mb-1",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:3.4+l*.2,duration:.3},children:[$.category,":"]}),N.jsx(s_.div,{className:"bg-gray-950 p-3 border-l-2 border-yellow-500 ml-2",initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:3.5+l*.2,duration:.3},children:$.items.map((r,f)=>N.jsxs(s_.div,{className:"text-gray-300 py-0.5",initial:{opacity:0,x:-15},animate:{opacity:1,x:0},transition:{delay:3.6+l*.2+f*.1,duration:.2},children:[N.jsx(s_.span,{initial:{color:"#9ca3af"},animate:{color:["#9ca3af","#eab308","#9ca3af"]},transition:{delay:3.7+l*.2+f*.1,duration:.6,ease:"easeInOut"},children:"•"}),N.jsx("span",{className:"ml-2",children:r})]},f))})]},l)),N.jsx(s_.div,{className:"mt-4 pt-2 border-t border-gray-700",initial:{opacity:0},animate:{opacity:1},transition:{delay:4.5+e.length*.2,duration:.4},children:N.jsxs(s_.div,{className:"text-green-400 text-xs",animate:{textShadow:["0 0 0px #22c55e","0 0 8px #22c55e40","0 0 0px #22c55e"]},transition:{duration:2,repeat:1/0,ease:"easeInOut",delay:5+e.length*.2},children:["✓ Report generated successfully. Total categories: ",e.length]})})]},i)}},recommend:{description:"이 분의 역량과 추천 사유를 기록합니다.",execute:()=>{const e=[{title:"RESPONSIBILITY",desc:["어떤 상황에서도 맡은 일을 끝까지 책임지고 완수","동료들에게 안정감과 신뢰를 주는 든든한 리더"]},{title:"COLLABORATION",desc:["다양한 의견을 열린 마음으로 경청하고 조율","갈등 상황에서도 빠르게 합의점을 찾아내는 능력"]},{title:"LEADERSHIP",desc:["위기 상황에서도 침착함을 잃지 않고 방향 제시","역할을 명확히 나눠주어 혼란 최소화, 팀의 자신감 극대화"]},{title:"MENTORING",desc:["실질적이고 actionable(실행 가능한) 피드백 제공","팀원 개개인의 강점을 살리고 부족한 점을 보완하도록 돕는 멘토"]},{title:"HUMAN_CARE",desc:["업무 외적으로도 동료의 상황을 세심하게 살핌",'단순한 팀워크를 넘어 "함께 일하고 싶은 팀 분위기"를 만들어냄']}];return N.jsxs("div",{className:"font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4",children:[N.jsxs(s_.div,{className:"mb-4",initial:{opacity:0,y:-15},animate:{opacity:1,y:0},transition:{duration:.5},children:[N.jsx("div",{className:"text-cyan-400 font-semibold",children:"Recommendation Report"}),N.jsx("div",{className:"text-gray-400 text-xs",children:"Subject: 서광원 | Evaluator: 후배 개발자"})]}),N.jsxs(s_.div,{className:"mb-6",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{delay:.3,duration:.6},children:[N.jsx(s_.div,{className:"text-white font-semibold mb-2",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.3},children:"Executive Summary:"}),N.jsx(s_.div,{className:"bg-gray-950 p-3 border-l-2 border-cyan-500",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.7,duration:.5},children:N.jsxs(s_.div,{className:"text-gray-300 leading-relaxed",initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:.8},children:["서광원 님은 제가 경험한 동료 중 최고의 커뮤니케이터이자 협업형 리더입니다.",N.jsx("br",{}),"수많은 동료들과 함께했지만, 커뮤니케이션과 협업 역량에서 서광원 님만큼 뛰어난 분은 없었습니다.",N.jsx("br",{}),N.jsx("br",{}),"선배님은 단순히 의견을 맞추는 수준을 넘어서, 이해관계가 다른 사람들까지 빠르게 한 방향으로 모아내는 힘이 있었습니다."]})})]}),N.jsx(s_.div,{className:"mb-4",initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5,duration:.3},children:N.jsx("div",{className:"text-white font-semibold mb-2",children:"Core Competencies:"})}),e.map((i,$)=>N.jsxs(s_.div,{className:"mb-4",initial:{opacity:0,y:15,scale:.98},animate:{opacity:1,y:0,scale:1},transition:{delay:1.7+$*.15,duration:.4,ease:"easeOut"},children:[N.jsxs(s_.div,{className:"text-green-400 font-semibold mb-1",initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:1.8+$*.15,duration:.3},children:[i.title,":"]}),N.jsx(s_.div,{className:"bg-gray-950 p-3 border-l-2 border-green-500 ml-2",initial:{opacity:0,x:-15},animate:{opacity:1,x:0},transition:{delay:1.9+$*.15,duration:.3},children:i.desc.map((l,r)=>N.jsxs(s_.div,{className:"text-gray-300 py-0.5",initial:{opacity:0},animate:{opacity:1},transition:{delay:2+$*.15+r*.08,duration:.3},children:["• ",l]},r))})]},$)),N.jsx(s_.div,{className:"mt-6 pt-2 border-t border-gray-700",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:2.5+e.length*.15,duration:.5},children:N.jsx(s_.div,{className:"text-green-400 text-xs",animate:{color:["#22c55e","#16a34a","#15803d","#22c55e"],textShadow:["0 0 0px #22c55e","0 0 8px #22c55e","0 0 0px #22c55e"]},transition:{duration:2,repeat:1/0,ease:"easeInOut",delay:3+e.length*.15},children:"✓ Recommendation: STRONGLY POSITIVE | Confidence: HIGH"})})]})}},epilogue:{description:"후배로서 남기고 싶은 마지막 응원을 기록합니다.",execute:()=>{const e=["다양한 과정을 겪으면서 고생하시고, 그에 대한 고민이나 생각을 들으며 걱정했습니다.","그 과정에서 때로는 부족한 점에 마음이 더 쏠리기도 하지만, 사실 이미 충분히 큰 강점들을 지니고 계심을 잊지 않으셨으면 합니다.","저는 가까이에서 선배님이 얼마나 뛰어난 역량과 책임감을 보여주셨는지를 계속 보아왔습니다.","선배님은 이미 충분히 대단한 분이고, 이번 경험들은 앞으로 더 큰 가능성을 쌓아가는 밑거름이 될 것이라 믿습니다.","다른 사람도 언젠가 이 멋진 점을 알아봐주길 바라며 진심을 다해서 만들었습니다."];return N.jsxs("div",{className:"font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4",children:[N.jsxs("div",{className:"mb-4",children:[N.jsx("div",{className:"text-cyan-400 font-semibold",children:"Personal Message"}),N.jsx("div",{className:"text-gray-400 text-xs",children:"From: 후배 | To: 광원님"})]}),N.jsx("div",{className:"space-y-4",children:e.map((i,$)=>N.jsxs("div",{className:"flex",children:[N.jsxs("div",{className:"text-yellow-400 mr-3 font-mono text-xs mt-1",children:["[",($+1).toString().padStart(2,"0"),"]"]}),N.jsx("div",{className:"text-gray-300 leading-relaxed flex-1",children:i})]},$))}),N.jsx("div",{className:"mt-6 pt-2 border-t border-gray-700",children:N.jsxs("div",{className:"text-center",children:[N.jsx("div",{className:"text-magenta-400",children:"◆ 언제나 응원하고 있습니다 ◆"}),N.jsxs("div",{className:"text-gray-400 text-xs mt-10",children:["[ TMI ]",N.jsx("br",{}),"기획 갈아엎기 3번, 디자인 전체 갈아엎기 2번, 컨셉 갈아엎기 5번, 색상 갈아엎기 3번, 약 1년 6개월 만에 다시 만지는 React...",N.jsx("br",{}),"높은 완성도로 만들고 싶었는데 원하는 만큼 안나온 것 같아서 많이 아쉽습니다. ",N.jsx("br",{})]})]})})]})}},portfolio:{description:"상세한 프로젝트 임팩트 내역을 카테고리별로 출력합니다.",execute:async()=>{try{const e=await sp(()=>import("./impact-DIaAmdJJ.js"),[]),i=e.default||e;return N.jsxs("div",{className:"font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4",children:[N.jsxs("div",{className:"mb-4",children:[N.jsx("div",{className:"text-cyan-400 font-semibold",children:"Detailed Impact Report"}),N.jsxs("div",{className:"text-gray-400 text-xs",children:["Source: impact.json | Categories: ",i.impact?.length||0]})]}),i.impact?.map(($,l)=>N.jsxs("div",{className:"mb-6",children:[N.jsxs("div",{className:"mb-2",children:[N.jsx("div",{className:"text-yellow-400 font-semibold",children:$.category}),N.jsxs("div",{className:"text-gray-400 text-xs",children:["Items: ",$.items?.length||0]})]}),N.jsx("div",{className:"bg-gray-950 p-3 border-l-2 border-yellow-500 ml-2",children:$.items?.map((r,f)=>N.jsxs("div",{className:"mb-3 pb-2 border-b border-gray-800 last:border-b-0 last:mb-0 last:pb-0",children:[N.jsxs("div",{className:"text-green-400 font-medium mb-1",children:["• ",r.title]}),N.jsx("div",{className:"text-gray-300 text-sm ml-2",children:r.description})]},f))})]},l)),N.jsx("div",{className:"mt-6 pt-2 border-t border-gray-700",children:N.jsx("div",{className:"text-cyan-400 text-xs",children:"✓ Detailed impact data loaded successfully. Use 'impact' for summary view."})})]})}catch(e){return N.jsxs("div",{className:"font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4",children:[N.jsxs("div",{className:"mb-4",children:[N.jsx("div",{className:"text-red-400 font-semibold",children:"Error Loading Impact Data"}),N.jsx("div",{className:"text-gray-400 text-xs",children:"Failed to load impact.json"})]}),N.jsx("div",{className:"bg-gray-950 p-3 border-l-2 border-red-500",children:N.jsxs("div",{className:"text-red-300",children:["Error: ",e.message]})})]})}}}};var jo={exports:{}},$h;function Rp(){return $h||($h=1,(function(e){const i=(()=>{const u={},T={font:"Standard",fontPath:"./fonts"};function d(p,C){let L={},v,U,H,Q,q=[[16384,"vLayout",2],[8192,"vLayout",1],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",2],[64,"hLayout",1],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];for(v=C!==null?C:p,U=0,H=q.length;U<H;)Q=q[U],v>=Q[0]?(v=v-Q[0],L[Q[1]]=typeof L[Q[1]]>"u"?Q[2]:L[Q[1]]):Q[1]!=="vLayout"&&Q[1]!=="hLayout"&&(L[Q[1]]=!1),U++;return typeof L.hLayout>"u"?p===0?L.hLayout=1:p===-1?L.hLayout=0:L.hRule1||L.hRule2||L.hRule3||L.hRule4||L.hRule5||L.hRule6?L.hLayout=3:L.hLayout=2:L.hLayout===2&&(L.hRule1||L.hRule2||L.hRule3||L.hRule4||L.hRule5||L.hRule6)&&(L.hLayout=3),typeof L.vLayout>"u"?L.vRule1||L.vRule2||L.vRule3||L.vRule4||L.vRule5?L.vLayout=3:L.vLayout=0:L.vLayout===2&&(L.vRule1||L.vRule2||L.vRule3||L.vRule4||L.vRule5)&&(L.vLayout=3),L}function h(p,C,L){return p===C&&p!==L?p:!1}function A(p,C){let L="|/\\[]{}()<>";if(p==="_"){if(L.indexOf(C)!==-1)return C}else if(C==="_"&&L.indexOf(p)!==-1)return p;return!1}function y(p,C){let L="| /\\ [] {} () <>",v=L.indexOf(p),U=L.indexOf(C);if(v!==-1&&U!==-1&&v!==U&&Math.abs(v-U)!==1){const H=Math.max(v,U),Q=H+1;return L.substring(H,Q)}return!1}function S(p,C){let L="[] {} ()",v=L.indexOf(p),U=L.indexOf(C);return v!==-1&&U!==-1&&Math.abs(v-U)<=1?"|":!1}function G(p,C){let L="/\\ \\/ ><",v={0:"|",3:"Y",6:"X"},U=L.indexOf(p),H=L.indexOf(C);return U!==-1&&H!==-1&&H-U===1?v[U]:!1}function X(p,C,L){return p===L&&C===L?L:!1}function Z(p,C){return p===C?p:!1}function __(p,C){let L="|/\\[]{}()<>";if(p==="_"){if(L.indexOf(C)!==-1)return C}else if(C==="_"&&L.indexOf(p)!==-1)return p;return!1}function J(p,C){let L="| /\\ [] {} () <>",v=L.indexOf(p),U=L.indexOf(C);if(v!==-1&&U!==-1&&v!==U&&Math.abs(v-U)!==1){const H=Math.max(v,U),Q=H+1;return L.substring(H,Q)}return!1}function n_(p,C){return p==="-"&&C==="_"||p==="_"&&C==="-"?"=":!1}function k(p,C){return p==="|"&&C==="|"?"|":!1}function g(p,C,L){return C===" "||C===""||C===L&&p!==" "?p:C}function b(p,C,L){if(L.fittingRules.vLayout===0)return"invalid";let v,U=Math.min(p.length,C.length),H,Q,q=!1,K;if(U===0)return"invalid";for(v=0;v<U;v++)if(H=p.substring(v,v+1),Q=C.substring(v,v+1),H!==" "&&Q!==" "){if(L.fittingRules.vLayout===1)return"invalid";if(L.fittingRules.vLayout===2)return"end";if(k(H,Q)){q=q||!1;continue}if(K=!1,K=L.fittingRules.vRule1?Z(H,Q):K,K=!K&&L.fittingRules.vRule2?__(H,Q):K,K=!K&&L.fittingRules.vRule3?J(H,Q):K,K=!K&&L.fittingRules.vRule4?n_(H,Q):K,q=!0,!K)return"invalid"}return q?"end":"valid"}function t_(p,C,L){let v=p.length,U=p.length;C.length;let H,Q,q,K=1,l_,I_,R_;for(;K<=v;){for(H=p.slice(Math.max(0,U-K),U),Q=C.slice(0,Math.min(v,K)),q=Q.length,R_="",l_=0;l_<q;l_++)if(I_=b(H[l_],Q[l_],L),I_==="end")R_=I_;else if(I_==="invalid"){R_=I_;break}else R_===""&&(R_="valid");if(R_==="invalid"){K--;break}if(R_==="end")break;R_==="valid"&&K++}return Math.min(v,K)}function e_(p,C,L){let v,U=Math.min(p.length,C.length),H,Q,q="",K;for(v=0;v<U;v++)H=p.substring(v,v+1),Q=C.substring(v,v+1),H!==" "&&Q!==" "?L.fittingRules.vLayout===1||L.fittingRules.vLayout===2?q+=g(H,Q):(K=!1,K=L.fittingRules.vRule5?k(H,Q):K,K=!K&&L.fittingRules.vRule1?Z(H,Q):K,K=!K&&L.fittingRules.vRule2?__(H,Q):K,K=!K&&L.fittingRules.vRule3?J(H,Q):K,K=!K&&L.fittingRules.vRule4?n_(H,Q):K,q+=K):q+=g(H,Q);return q}function W(p,C,L,v){let U=p.length,H=C.length,Q=p.slice(0,Math.max(0,U-L)),q=p.slice(Math.max(0,U-L),U),K=C.slice(0,Math.min(L,H)),l_,I_,R_,v_=[],b_,G_=[];for(I_=q.length,l_=0;l_<I_;l_++)l_>=H?R_=q[l_]:R_=e_(q[l_],K[l_],v),v_.push(R_);return b_=C.slice(Math.min(L,H),H),G_.concat(Q,v_,b_)}function p_(p,C){let L,v=p.length,U="";for(L=0;L<C;L++)U+=" ";for(L=0;L<v;L++)p[L]+=U}function P_(p,C,L){let v=p[0].length,U=C[0].length,H;return v>U?p_(C,v-U):U>v&&p_(p,U-v),H=t_(p,C,L),W(p,C,H,L)}function Y_(p,C,L){if(L.fittingRules.hLayout===0)return 0;let v,U=p.length,H=C.length,Q=U,q=1,K=!1,l_=!1,I_,R_,v_,b_;if(U===0)return 0;_:for(;q<=Q;){const G_=U-q;for(I_=p.substring(G_,G_+q),R_=C.substring(0,Math.min(q,H)),v=0;v<Math.min(q,H);v++)if(v_=I_.substring(v,v+1),b_=R_.substring(v,v+1),v_!==" "&&b_!==" "){if(L.fittingRules.hLayout===1){q=q-1;break _}else if(L.fittingRules.hLayout===2){(v_===L.hardBlank||b_===L.hardBlank)&&(q=q-1);break _}else if(K=!0,l_=!1,l_=L.fittingRules.hRule1?h(v_,b_,L.hardBlank):l_,l_=!l_&&L.fittingRules.hRule2?A(v_,b_,L.hardBlank):l_,l_=!l_&&L.fittingRules.hRule3?y(v_,b_,L.hardBlank):l_,l_=!l_&&L.fittingRules.hRule4?S(v_,b_,L.hardBlank):l_,l_=!l_&&L.fittingRules.hRule5?G(v_,b_,L.hardBlank):l_,l_=!l_&&L.fittingRules.hRule6?X(v_,b_,L.hardBlank):l_,!l_){q=q-1;break _}}if(K)break;q++}return Math.min(Q,q)}function N_(p,C,L,v){let U,H,Q=[],q,K,l_,I_,R_,v_,b_,G_;for(U=0;U<v.height;U++){b_=p[U],G_=C[U],R_=b_.length,v_=G_.length,q=R_-L,K=b_.substr(0,Math.max(0,q)),l_="";const ma=Math.max(0,R_-L);var Ie=b_.substring(ma,ma+L),Ze=G_.substring(0,Math.min(L,v_));for(H=0;H<L;H++){var V_=H<R_?Ie.substring(H,H+1):" ",X_=H<v_?Ze.substring(H,H+1):" ";if(V_!==" "&&X_!==" ")if(v.fittingRules.hLayout===1)l_+=g(V_,X_,v.hardBlank);else if(v.fittingRules.hLayout===2)l_+=g(V_,X_,v.hardBlank);else{var H_="";H_=!H_&&v.fittingRules.hRule1?h(V_,X_,v.hardBlank):H_,H_=!H_&&v.fittingRules.hRule2?A(V_,X_,v.hardBlank):H_,H_=!H_&&v.fittingRules.hRule3?y(V_,X_,v.hardBlank):H_,H_=!H_&&v.fittingRules.hRule4?S(V_,X_,v.hardBlank):H_,H_=!H_&&v.fittingRules.hRule5?G(V_,X_,v.hardBlank):H_,H_=!H_&&v.fittingRules.hRule6?X(V_,X_,v.hardBlank):H_,H_=H_||g(V_,X_,v.hardBlank),l_+=H_}else l_+=g(V_,X_,v.hardBlank)}L>=v_?I_="":I_=G_.substring(L,L+Math.max(0,v_-L)),Q[U]=K+l_+I_}return Q}function _t(p){let C=[],L;for(L=0;L<p;L++)C[L]="";return C}const z_=function(p){return Math.max.apply(Math,p.map(function(C,L){return C.length}))};function m_(p,C,L){return p.reduce(function(v,U){return N_(v,U.fig,U.overlap,L)},_t(C))}function B(p,C,L){const v={};for(let U=p.length;--U;){let H=m_(p.slice(0,U),C,L);if(z_(H)<=L.width){v.outputFigText=H,U<p.length?v.chars=p.slice(U):v.chars=[];break}}return v}function z(p,C,L){let v,U,H=0,Q,q,K,l_=L.height,I_=[],R_,v_,b_=[],G_,Ie,Ze,V_,X_;for(q=_t(l_),L.width>0&&L.whitespaceBreak&&(v_={chars:[],overlap:H}),L.printDirection===1&&(p=p.split("").reverse().join("")),K=p.length,v=0;v<K;v++)if(G_=p.substring(v,v+1),Ie=G_.match(/\s/),U=C[G_.charCodeAt(0)],V_=null,U){if(L.fittingRules.hLayout!==0){for(H=1e4,Q=0;Q<L.height;Q++)H=Math.min(H,Y_(q[Q],U[Q],L));H=H===1e4?0:H}if(L.width>0&&(L.whitespaceBreak?(Ze=m_(v_.chars.concat([{fig:U,overlap:H}]),l_,L),V_=m_(b_.concat([{fig:Ze,overlap:v_.overlap}]),l_,L),R_=z_(V_)):(V_=N_(q,U,H,L),R_=z_(V_)),R_>=L.width&&v>0&&(L.whitespaceBreak?(q=m_(b_.slice(0,-1),l_,L),b_.length>1&&(I_.push(q),q=_t(l_)),b_=[]):(I_.push(q),q=_t(l_)))),L.width>0&&L.whitespaceBreak&&((!Ie||v===K-1)&&v_.chars.push({fig:U,overlap:H}),Ie||v===K-1)){for(X_=null;V_=m_(v_.chars,l_,L),R_=z_(V_),R_>=L.width;)X_=B(v_.chars,l_,L),v_={chars:X_.chars},I_.push(X_.outputFigText);R_>0&&(X_?b_.push({fig:V_,overlap:1}):b_.push({fig:V_,overlap:v_.overlap})),Ie&&(b_.push({fig:U,overlap:H}),q=_t(l_)),v===K-1&&(q=m_(b_,l_,L)),v_={chars:[],overlap:H};continue}q=N_(q,U,H,L)}return z_(q)>0&&I_.push(q),L.showHardBlanks!==!0&&I_.forEach(function(H_){for(K=H_.length,Q=0;Q<K;Q++)H_[Q]=H_[Q].replace(new RegExp("\\"+L.hardBlank,"g")," ")}),I_}const a_=function(p,C){let L=["hLayout","hRule1","hRule2","hRule3","hRule4","hRule5","hRule6"],v={},U;if(p==="default")for(U=0;U<L.length;U++)v[L[U]]=C.fittingRules[L[U]];else if(p==="full")v={hLayout:0,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(p==="fitted")v={hLayout:1,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(p==="controlled smushing")v={hLayout:3,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(p==="universal smushing")v={hLayout:2,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return v},T_=function(p,C){let L=["vLayout","vRule1","vRule2","vRule3","vRule4","vRule5"],v={},U;if(p==="default")for(U=0;U<L.length;U++)v[L[U]]=C.fittingRules[L[U]];else if(p==="full")v={vLayout:0,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(p==="fitted")v={vLayout:1,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(p==="controlled smushing")v={vLayout:3,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(p==="universal smushing")v={vLayout:2,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return v},I=function(p,C,L){L=L.replace(/\r\n/g,`
`).replace(/\r/g,`
`);let v=L.split(`
`),U=[],H,Q,q;for(Q=v.length,H=0;H<Q;H++)U=U.concat(z(v[H],u[p],C));for(Q=U.length,q=U[0],H=1;H<Q;H++)q=P_(q,U[H],C);return q?q.join(`
`):""};function Y(p,C){let L=JSON.parse(JSON.stringify(p)),v,U;if(typeof C.horizontalLayout<"u"){v=a_(C.horizontalLayout,p);for(U in v)v.hasOwnProperty(U)&&(L.fittingRules[U]=v[U])}if(typeof C.verticalLayout<"u"){v=T_(C.verticalLayout,p);for(U in v)v.hasOwnProperty(U)&&(L.fittingRules[U]=v[U])}return L.printDirection=typeof C.printDirection<"u"?C.printDirection:p.printDirection,L.showHardBlanks=C.showHardBlanks||!1,L.width=C.width||-1,L.whitespaceBreak=C.whitespaceBreak||!1,L}const F=function(p,C,L){return F.text(p,C,L)};return F.text=async function(p,C,L){let v="";return p=p+"",typeof arguments[1]=="function"&&(L=C,C={},C.font=T.font),typeof C=="string"?(v=C,C={}):(C=C||{},v=C.font||T.font),await new Promise((U,H)=>{F.loadFont(v,function(Q,q){if(Q){H(Q),L&&L(Q);return}const K=I(v,Y(q,C),p);U(K),L&&L(null,K)})})},F.textSync=function(p,C){let L="";p=p+"",typeof C=="string"?(L=C,C={}):(C=C||{},L=C.font||T.font);var v=Y(F.loadFontSync(L),C);return I(L,v,p)},F.metadata=function(p,C){return p=p+"",new Promise(function(L,v){F.loadFont(p,function(U,H){if(U){C&&C(U),v(U);return}C&&C(null,H,u[p].comment),L([H,u[p].comment])})})},F.defaults=function(p){if(typeof p=="object"&&p!==null)for(var C in p)p.hasOwnProperty(C)&&(T[C]=p[C]);return JSON.parse(JSON.stringify(T))},F.parseFont=function(p,C){C=C.replace(/\r\n/g,`
`).replace(/\r/g,`
`),u[p]={};var L=C.split(`
`),v=L.splice(0,1)[0].split(" "),U=u[p],H={};if(H.hardBlank=v[0].substr(5,1),H.height=parseInt(v[1],10),H.baseline=parseInt(v[2],10),H.maxLength=parseInt(v[3],10),H.oldLayout=parseInt(v[4],10),H.numCommentLines=parseInt(v[5],10),H.printDirection=v.length>=6?parseInt(v[6],10):0,H.fullLayout=v.length>=7?parseInt(v[7],10):null,H.codeTagCount=v.length>=8?parseInt(v[8],10):null,H.fittingRules=d(H.oldLayout,H.fullLayout),U.options=H,H.hardBlank.length!==1||isNaN(H.height)||isNaN(H.baseline)||isNaN(H.maxLength)||isNaN(H.oldLayout)||isNaN(H.numCommentLines))throw new Error("FIGlet header contains invalid values.");let Q=[],q;for(q=32;q<=126;q++)Q.push(q);if(Q=Q.concat(196,214,220,228,246,252,223),L.length<H.numCommentLines+H.height*Q.length)throw new Error("FIGlet file is missing data.");let K,l_,I_=!1;for(U.comment=L.splice(0,H.numCommentLines).join(`
`),U.numChars=0;L.length>0&&U.numChars<Q.length;){for(K=Q[U.numChars],U[K]=L.splice(0,H.height),q=0;q<H.height;q++)typeof U[K][q]>"u"?U[K][q]="":(l_=new RegExp("\\"+U[K][q].substr(U[K][q].length-1,1)+"+$"),U[K][q]=U[K][q].replace(l_,""));U.numChars++}for(;L.length>0;){if(K=L.splice(0,1)[0].split(" ")[0],/^-?0[xX][0-9a-fA-F]+$/.test(K))K=parseInt(K,16);else if(/^-?0[0-7]+$/.test(K))K=parseInt(K,8);else if(/^-?[0-9]+$/.test(K))K=parseInt(K,10);else{if(K==="")break;console.log("Invalid data:"+K),I_=!0;break}if(K==-1){console.log("The char code -1 is not permitted."),I_=!0;break}else if(K<-2147483648){console.log("The char code cannot be less than -2147483648."),I_=!0;break}else if(K>2147483647){console.log("The char code cannot be greater than 2147483647."),I_=!0;break}for(U[K]=L.splice(0,H.height),q=0;q<H.height;q++)typeof U[K][q]>"u"?U[K][q]="":(l_=new RegExp("\\"+U[K][q].substr(U[K][q].length-1,1)+"+$"),U[K][q]=U[K][q].replace(l_,""));U.numChars++}if(I_===!0)throw new Error("Error parsing data.");return H},F.loadFont=function(p,C){if(u[p])return C&&C(null,u[p].options),Promise.resolve();if(typeof fetch!="function")throw console.error("figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch"),new Error("fetch is required for figlet.js to work.");return fetch(T.fontPath+"/"+p+".flf").then(function(L){if(L.ok)return L.text();throw console.log("Unexpected response",L),new Error("Network response was not ok.")}).then(function(L){C&&C(null,F.parseFont(p,L))}).catch(C)},F.loadFontSync=function(p){if(u[p])return u[p].options;throw new Error("synchronous font loading is not implemented for the browser")},F.preloadFonts=function(p,C){let L=[];return p.reduce(function(v,U){return v.then(function(){return fetch(T.fontPath+"/"+U+".flf").then(H=>H.text()).then(function(H){L.push(H)})})},Promise.resolve()).then(function(v){for(var U in p)p.hasOwnProperty(U)&&F.parseFont(p[U],L[U]);C&&C()})},F.figFonts=u,F})();e.exports=i})(jo)),jo.exports}var Sp=Rp();const vp=sh(Sp),Np=`flf2a$ 10 10 27 63 7 0 191 0
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
@@`,Cp=`flf2a$ 7 7 26 32 3
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
`,xp=`flf2a$ 8 7 54 0 12 0 64 185
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
`,bp=`flf2a$ 8 6 59 15 10 0 24463
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
`,Mp=`flf2a$ 8 6 27 0 10 0 576
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
`,Op=`flf2a 4 3 8 15 11 0 10127 242
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
`,Dp=`flf2a$ 3 3 7 0 7 0 64 0
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
@@`,Hp=`flf2a$ 5 4 20 15 6
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
`,Up=`flf2a$ 6 5 16 0 11 0 8036 0
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
 ##`,Pp=`flf2a$ 8 6 14 15 16
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
`,Bp=`flf2a$ 9 8 13 16 16
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
`,Gp=`flf2a$ 9 8 15 0 20 0 16255 0
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
 \`-----'  ##`,Vp=`flf2a$ 6 5 32 15 10
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
        @@`,wp=`flf2a$ 10 7 23 0 7
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
`,Wp=`flf2a$ 4 3 10 0 3
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
`,Yp=`flf2a$ 10 10 12 -1 9

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
`,jp=`flf2a$ 9 6 30 1 5
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
`,Fp=`flf2a$ 8 6 27 0 10 0 576
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
`,zp=`flf2a$ 7 7 11 -1 16 0 0 0
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

`,Xp=`flf2a$ 6 6 9 -1 10
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
`,Kp=`flf2a$ 6 5 20 15 13
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
`,qp=`flf2a$ 12 10 40 0 10
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
@@`,kp=`flf2a$ 12 10 20 -1 14
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
`,Qp=`flf2a$ 10 10 30 -1 7
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
`,Zp=`flf2a$ 6 5 16 15 10 0 18319
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
`,Jp=`flf2a$ 6 5 16 15 16
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
`,_I=`flf2a$ 7 6 22 15 4
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
`,tI=`flf2a$ 7 6 20 15 3
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
`,eI=`flf2a$ 5 4 8 -1 12
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
`,nI=`flf2a$ 7 7 18 0 11 0 24447 0
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
 ##`,aI=`flf2a$ 6 5 16 15 13 0 24463 229
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
         `,Y0={"3D-ASCII":Np,Alligator:Cp,Banner:xp,Big:bp,Block:Mp,Bubble:Op,"Calvin S":Dp,Chunky:Hp,Cola:Up,Doom:Pp,Epic:Bp,Ghost:Gp,Graffiti:Vp,Hollywood:wp,Italic:Wp,Jazmine:Yp,"Larry 3D":jp,Lean:Fp,Modular:zp,Moscow:Xp,Ogre:Kp,"Patorjk-HeX":qp,Poison:kp,Roman:Qp,Slant:Zp,Speed:Jp,"Star Wars":_I,Stop:tI,Tombstone:eI,Varsity:nI,Standard:aI},iI=()=>{for(const[e,i]of Object.entries(Y0))vp.parseFont(e,i)},j0=Object.keys(Y0),F0={dev:"Available developer commands: [fonts, font <fontname>]",fonts:`Available fonts: [${j0.join(", ")}]`},$I={sorry:{description:"전하지 못했던 미안함을 조심스레 풀어놓습니다.",execute:()=>{const e=["광원님이 저를 믿고 팀으로 불러주셨는데, 그 믿음에 맞는 모습을 보여드리지 못했습니다.","지난 1년은 개발자로 살아온 시간 중 가장 퍼포먼스가 낮았던 시기였습니다.","회사의 많은 변화에 적응하지 못했고, 멘탈이 흔들리면서 아웃풋도 줄었습니다.","자존감은 바닥을 쳤고, 스스로를 의심하는 시간이 길어졌습니다. 그만큼 분위기도 부정적으로 비쳤을까 미안한 마음이 큽니다.","스스로를 믿지 못하니 점점 더 소극적이 되었고, 결국 아무것도 이루지 못한 한 해로 남아 지금도 후회됩니다.","원래는 문제를 파악하고 개선하는 걸 좋아했는데, '나는 못한다'는 생각이 강해져 장점을 살리지 못했습니다.","불안과 자기의심 때문에 코드 작성도, 도메인 이해도 두려움이 되어버렸고 결국 미루는 일이 많아졌습니다.","노력은 했지만 '최선을 다했다'고 말할 수 있는 결과가 없었던 게 가장 죄송합니다.","아직도 이겨내지 못한 지금의 제가 초반 1~2년 차 때보다도 못하는 스스로의 모습이 답답했습니다.","사실 저는 창업 경험 덕분에 프로덕트 마인드도 있었고, 프론트와 백엔드를 모두 경험한 덕분에 필요한 기능을 빠르게 구현하고 검증할 수 있었습니다.","또 협업 속에서 개선점을 찾고 시스템을 고도화하는 강점도 있었지만, 지난 1년은 그 어떤 것도 제대로 보여드리지 못했습니다.","그럼에도 광원님 덕분에 가장 큰 배움을 얻었습니다.",'"어떤 상황에서도 성과를 내고 집중할 수 있는게 프로구나."',"저도 언젠가는 지금의 약점과 힘듬을 이겨내고 광원님 같은 프로가 되고싶습니다.","만약 다시 함께할 기회가 주어진다면, 흔들림 없는 모습으로 입사 당시 제가 왜 함께 일하고 싶었던 사람인지 꼭 증명하겠습니다.","광원님, 진심으로 감사드리고 죄송합니다."];return N.jsxs("div",{className:"font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4",children:[N.jsxs("div",{className:"mb-4",children:[N.jsx("div",{className:"text-red-400 font-semibold",children:"Apology Message"}),N.jsx("div",{className:"text-gray-400 text-xs",children:"Personal confession | Status: UNDELIVERED"})]}),N.jsx("div",{className:"space-y-3",children:e.map((i,$)=>N.jsxs("div",{className:"flex",children:[N.jsxs("div",{className:"text-red-400 mr-3 font-mono text-xs mt-1 shrink-0",children:["[",($+1).toString().padStart(2,"0"),"]"]}),N.jsx("div",{className:"text-gray-300 leading-relaxed",children:i})]},$))}),N.jsx("div",{className:"mt-6 pt-2 border-t border-gray-700",children:N.jsx("div",{className:"text-center",children:N.jsx("div",{className:"text-red-400 text-xs",children:"◆ 진심으로 죄송합니다 ◆"})})})]})}},thankyou:{description:"진심을 담아 전하는 감사의 말을 꺼내놓습니다.",execute:()=>{const e=["제가 주저할 때마다 광원님은 차분하게 옆에서 상황을 함께 바라봐 주셨습니다.","혼자서 다 떠안아야 한다고 착각했을 때도, 광원님이 균형을 잡아주셨습니다.","그때마다 마음이 한결 가벼워졌고, 혼자가 아니라는 든든함을 느낄 수 있었습니다.","광원님을 통해 커뮤니케이션과 협업이 단순한 기술이 아니라, 팀을 움직이는 힘이라는 걸 배웠습니다.","리소스를 파악하고, 요구사항을 정리하고, 팀의 역사를 기억하며 결국 결정을 내리는 모습은 제게 큰 울림이었습니다.","광원님은 단순히 일을 해결한 게 아니라, 모두가 같은 방향을 바라보게 해주셨습니다.","지금까지 함께한 동료들 중 이런 역량은 광원님이 단연 최고였습니다.","제가 위축돼 스스로를 탓할 때도, 광원님은 책임을 제게만 두지 않으셨습니다.","대신 같은 문제가 반복되지 않도록 시스템을 고치고 구조를 세우는 방식으로 풀어내셨습니다.","그때 저는 문제를 탓하는 게 아니라 더 나은 길을 만드는 태도가 진짜 리더십이라는 걸 배웠습니다.","이건 단순한 일 처리 방식이 아니라, 사람을 대하는 태도의 차이라는 걸 몸으로 느꼈습니다.","그리고 겉으로는 사소해 보여도, 제겐 큰 힘이 된 장면들이 있습니다.","제가 앞에 나서기 어려워한다는 걸 아시고 늘 먼저 앞을 지켜주셨던 순간들입니다.","그 배려 덕분에 저는 뒤에서 제 역할에 집중할 수 있었고, 그 작은 보호막 속에서 성장할 수 있었습니다.","겉으로 잘 드러나지 않는 배려였지만, 그 순간들이 모여 제 마음을 단단하게 만들어 주었습니다.","결국 제게 오래 남은 배움은 이것 하나입니다.",'"나도 언젠가, 광원님처럼 함께 일하고 싶은 사람, 배려와 신뢰로 팀을 키우는 사람이 되어야겠다."',"광원님은 제가 어떤 상황에서도 잊지 말아야 할 기준이 되어 주셨습니다.","그 태도를 곁에서 지켜볼 수 있었다는 사실 자체가 제겐 가장 큰 선물이었습니다.","광원님, 진심으로 감사합니다."];return N.jsxs("div",{className:"font-mono leading-relaxed max-w-4xl mx-2 md:mx-auto space-y-4",children:[N.jsxs("div",{className:"mb-4",children:[N.jsx("div",{className:"text-green-400 font-semibold",children:"Gratitude Message"}),N.jsx("div",{className:"text-gray-400 text-xs",children:"Personal testimony | Status: HEARTFELT"})]}),N.jsx("div",{className:"space-y-3",children:e.map((i,$)=>N.jsxs("div",{className:"flex",children:[N.jsxs("div",{className:"text-green-400 mr-3 font-mono text-xs mt-1 shrink-0",children:["[",($+1).toString().padStart(2,"0"),"]"]}),N.jsx("div",{className:"text-gray-300 leading-relaxed",children:i})]},$))}),N.jsx("div",{className:"mt-6 pt-2 border-t border-gray-700",children:N.jsx("div",{className:"text-center",children:N.jsx("div",{className:"text-green-400 text-xs",children:"◆ 마음 깊이 감사드립니다 ◆"})})})]})}}},cr={...W0,...F0,...$I},lI=Object.keys(cr),sI=()=>{const[e,i]=i_.useState([N.jsxs("div",{className:"space-y-6 py-6",children:[N.jsxs("div",{className:"text-center",children:[N.jsx("pre",{className:"text-cyan-400 font-mono text-sm md:text-base leading-tight",children:`████████╗ █████╗ ██╗   ██╗██╗
╚══██╔══╝██╔══██╗██║   ██║██║
   ██║   ███████║██║   ██║██║
   ██║   ██╔══██║╚██╗ ██╔╝██║
   ██║   ██║  ██║ ╚████╔╝ ██║
   ╚═╝   ╚═╝  ╚═╝  ╚═══╝  ╚═╝`}),N.jsx("div",{className:"text-gray-400 text-sm mt-2",children:"Seo Gwang-won Professional Reference System v1.0"})]}),N.jsxs("div",{className:"bg-gray-900 border-l-2 border-cyan-500 px-4 py-3 mx-2 md:mx-4",children:[N.jsx("div",{className:"text-green-400 font-semibold mb-2",children:"System Status: ONLINE"}),N.jsxs("div",{className:"text-gray-300 text-sm space-y-1",children:[N.jsxs("div",{children:["• Available commands: ",Object.keys(cr).length-Object.keys(F0).length]}),N.jsx("div",{children:"• Reference data: LOADED"}),N.jsx("div",{children:"• Career timeline: 20xx.xx - 2025.08"})]})]}),N.jsxs("div",{className:"text-center",children:[N.jsx("div",{className:"text-yellow-400 text-sm",children:"Type 'help' to see all available commands"}),N.jsx("div",{className:"text-gray-500 text-xs mt-1",children:"Press Tab for autocomplete"})]})]})]),[$,l]=i_.useState(""),[r,f]=i_.useState(null),[u,T]=i_.useState("Standard"),[d,h]=i_.useState(!1),[A,y]=i_.useState(null),S=i_.useCallback(Z=>{const[__,...J]=Z.split(" "),n_=__.normalize("NFC");if(y(n_),setTimeout(()=>y(null),100),n_==="font"){const b=J[0];j0.includes(b)?(T(b),i([`$ ${Z}`,`Font changed to ${b}`])):i([`$ ${Z}`,`Font not found: ${b}`]);return}const k=cr[n_];let g;if(k?(typeof k.execute=="function"?g=k.execute(...J):g=k,n_==="epilogue"&&(h(!0),setTimeout(()=>h(!1),3e3))):g=`Command not found: ${n_}`,g==="__ABOUT__"){const b=N.jsxs(s_.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8},className:"py-8 max-w-4xl mx-auto",children:[N.jsxs(s_.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"text-center mb-10",children:[N.jsx(s_.div,{className:"text-2xl font-bold text-[#93c5fd] mb-4",animate:{scale:[1,1.05,1]},transition:{repeat:1/0,duration:2},children:"🗺️ 함께한 성장의 여정"}),N.jsx("div",{className:"text-purple-300",children:"각 단계마다 남긴 발자취들..."})]}),N.jsxs("div",{className:"relative",children:[N.jsx(s_.div,{className:"absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-purple-500/30 via-blue-500/50 to-pink-500/30 rounded-full",initial:{scaleX:0},animate:{scaleX:1},transition:{delay:.5,duration:2,ease:"easeInOut"}}),N.jsx("div",{className:"flex justify-between items-center px-8",children:aboutData.map((t_,e_)=>N.jsxs(s_.div,{className:"relative flex flex-col items-center z-10",initial:{opacity:0,y:30,scale:.8},animate:{opacity:1,y:0,scale:1},transition:{delay:.8+e_*.3,type:"spring",stiffness:100,damping:15},children:[N.jsx(s_.div,{className:"w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/80 via-blue-500/80 to-pink-500/80 flex items-center justify-center mb-4 shadow-lg",animate:{boxShadow:["0 4px 20px rgba(147, 197, 253, 0.3)","0 8px 30px rgba(147, 197, 253, 0.6)","0 4px 20px rgba(147, 197, 253, 0.3)"]},transition:{repeat:1/0,duration:2,delay:e_*.4},whileHover:{scale:1.15},children:N.jsx(s_.span,{className:"text-2xl",animate:{y:[0,-3,0],rotate:[0,5,-5,0]},transition:{repeat:1/0,duration:2,delay:e_*.5},children:t_.icon})}),N.jsxs(s_.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1+e_*.3},className:"text-center",children:[N.jsx("div",{className:"text-[#93c5fd] font-bold text-sm mb-1",children:t_.text}),N.jsx(s_.div,{className:"w-2 h-2 mx-auto rounded-full bg-yellow-400",animate:{scale:[.8,1.2,.8],opacity:[.5,1,.5]},transition:{repeat:1/0,duration:1.5,delay:e_*.2}})]})]},e_))})]})]});i([`$ ${Z}`,b]);return}if(g==="__IMPACT__"){const b=["🚀 프로젝트 런칭 6회 → 신규 채널 확장, 매출 성장 견인","⚡ 성능 최적화 8건 → SQL/트래픽 튜닝으로 응답속도 최대 90% 단축","🤖 자동화·최적화 10건 → 운영 리소스 절감, 오류·재작업 방지","💡 신규 기능 개발 7건 → Kakao·Tripbtoz 연동 등 서비스 확장","🛠️ 프로세스 개선 12건 → 마감/취소/정산 로직 강화, 운영 효율화","🔍 품질 향상 9건 → 고객/파트너 피드백 반영, 오류 예방 및 안정성 확보","🌍 외부 협업 성과 6건 → 신화월드·롯데·Accor 등 주요 파트너 신뢰 제고","💡 아이디어 제안 다수 → TES/TAVI UI 개선, 운영 편의성 강화"],t_=N.jsxs("div",{className:"flex flex-col items-start py-6 w-full",children:[N.jsx(s_.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.5},className:"text-lg font-bold text-[#93c5fd] mb-6",children:"💫 조직에 남긴 흔적들"}),N.jsx(s_.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3,duration:.3},className:"text-sm text-gray-400 mb-4",children:"Loading impact records..."}),N.jsx("div",{className:"flex flex-col space-y-2 w-full",children:b.map((e_,W)=>N.jsxs(s_.div,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{delay:.6+W*.3,duration:.4,ease:"easeOut"},className:"flex items-start",children:[N.jsx(s_.span,{initial:{scale:0},animate:{scale:1},transition:{delay:.8+W*.3,type:"spring",stiffness:200},className:"text-lg mr-3",children:e_.split(" ")[0]}),N.jsx(s_.span,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1+W*.3},className:"text-[#d0cde1] flex-1",children:e_.substring(e_.indexOf(" ")+1)})]},W))}),N.jsxs(s_.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.6+b.length*.3+.5},className:"text-xs text-gray-500 mt-6 pt-4 border-t border-gray-700",children:["✓ Impact analysis complete. Total contributions: ",b.length," major areas"]})]});i([`$ ${Z}`,t_]);return}i([`$ ${Z}`,g])},[T,i]),G=i_.useCallback(()=>{const Z=$.trim();if(!Z)return;const __=lI.filter(J=>J.startsWith(Z));__.length===1?l(__[0]):__.length>1&&i(J=>[...J,`$ ${Z}`,__.join("  ")])},[$,i]),X=i_.useCallback(Z=>{if(Z.key==="Enter"){const __=$.trim();__&&S(__),l("")}else Z.key==="Tab"&&(Z.preventDefault(),G())},[$,S,G]);return{lines:e,input:$,typedOutput:r,font:u,setLines:i,setInput:l,setTypedOutput:f,onKeyDown:X,showConfetti:d,currentCommand:A}},oI=({currentCommand:e})=>{const i=i_.useRef(null);return i_.useEffect(()=>{const $=i.current,l=$.getContext("2d");let r=[],f=[],u=[],T=[];const d=150,h=3,A=20,y=()=>{$.width=window.innerWidth,$.height=window.innerHeight,r=Array.from({length:d}).map(()=>({x:Math.random()*$.width,y:Math.random()*$.height,radius:Math.random()*1+.3,dx:(Math.random()-.5)*.1,dy:(Math.random()-.5)*.1,twinkle:Math.random()*Math.PI*2,twinkleSpeed:Math.random()*.015+.005,baseOpacity:Math.random()*.4+.1})),f=Array.from({length:h}).map(()=>({x:-50,y:Math.random()*$.height,length:Math.random()*60+15,speed:Math.random()*2+1.5,angle:Math.random()*Math.PI/8-Math.PI/16,opacity:0,life:0,maxLife:Math.random()*250+150,respawnDelay:Math.random()*2e3+4e3})),u=Array.from({length:A}).map(()=>({x:Math.random()*$.width,y:Math.random()*$.height,baseRadius:Math.random()*1.5+.8,pulsePhase:Math.random()*Math.PI*2,pulseSpeed:Math.random()*.02+.008,color:["#60a5fa","#34d399","#fbbf24","#f87171","#a78bfa"][Math.floor(Math.random()*5)],opacity:Math.random()*.3+.2}))},S=(g,b,t_,e_=1)=>{const W=l.createRadialGradient(g,b,0,g,b,t_*3);W.addColorStop(0,`rgba(255, 255, 255, ${e_})`),W.addColorStop(.5,`rgba(255, 255, 255, ${e_*.5})`),W.addColorStop(1,"rgba(255, 255, 255, 0)"),l.fillStyle=W,l.beginPath(),l.arc(g,b,t_*3,0,Math.PI*2),l.fill(),l.fillStyle=`rgba(255, 255, 255, ${e_})`,l.beginPath(),l.arc(g,b,t_,0,Math.PI*2),l.fill()},G=g=>{const b=g.x-Math.cos(g.angle)*g.length,t_=g.y-Math.sin(g.angle)*g.length,e_=l.createLinearGradient(g.x,g.y,b,t_);e_.addColorStop(0,`rgba(255, 255, 255, ${g.opacity*.6})`),e_.addColorStop(.7,`rgba(135, 206, 250, ${g.opacity*.3})`),e_.addColorStop(1,"rgba(255, 255, 255, 0)"),l.strokeStyle=e_,l.lineWidth=1.5,l.beginPath(),l.moveTo(g.x,g.y),l.lineTo(b,t_),l.stroke(),S(g.x,g.y,1.5,g.opacity*.7)},X=(g,b)=>{const t_=Math.sin(b*g.pulseSpeed+g.pulsePhase)*.5+.5,e_=g.baseRadius*(1+t_*.3),W=l.createRadialGradient(g.x,g.y,0,g.x,g.y,e_*3);W.addColorStop(0,`${g.color}${Math.floor(g.opacity*t_*255).toString(16).padStart(2,"0")}`),W.addColorStop(.6,`${g.color}${Math.floor(g.opacity*t_*.2*255).toString(16).padStart(2,"0")}`),W.addColorStop(1,`${g.color}00`),l.fillStyle=W,l.beginPath(),l.arc(g.x,g.y,e_*3,0,Math.PI*2),l.fill()},Z=g=>{const b=$.width/2,t_=$.height/2;switch(g){case"help":return[...Array.from({length:3}).map((e_,W)=>({type:"info_ripple",x:120,y:t_-50+W*50,radius:0,maxRadius:80,life:0,maxLife:180,delay:W*25,color:"#60a5fa",opacity:.4,strokeWidth:1})),...Array.from({length:3}).map((e_,W)=>({type:"info_ripple",x:$.width-120,y:t_-50+W*50,radius:0,maxRadius:80,life:0,maxLife:180,delay:W*25+60,color:"#93c5fd",opacity:.3,strokeWidth:1}))];case"about":return Array.from({length:8}).map((e_,W)=>({type:"story_dot",x:150+W*($.width-300)/7,y:100+Math.sin(W*.5)*60,life:0,maxLife:150,delay:W*30,size:4,pulseSpeed:.04,color:"#fbbf24",opacity:.5}));case"impact":return[...Array.from({length:4}).map((e_,W)=>({type:"achievement_pulse",x:100+W*($.width-200)/3,y:t_,radius:0,maxRadius:60,life:0,maxLife:120,delay:W*40,color:"#34d399",opacity:.4,strokeWidth:1.5})),...Array.from({length:8}).map((e_,W)=>({type:"micro_spark",x:100+W*($.width-200)/7,y:t_+(Math.random()-.5)*100,life:0,maxLife:100,delay:W*15+80,size:2,color:"#10b981",opacity:.6}))];case"achievements":return Array.from({length:6}).map((e_,W)=>({type:"subtle_star",x:120+W%3*($.width-240)/2,y:t_-80+Math.floor(W/3)*160,life:0,maxLife:160,delay:W*25,size:6,rotation:0,rotationSpeed:.03,pulseSpeed:.06,color:"#f59e0b",opacity:.5}));case"recommend":return Array.from({length:4}).map((e_,W)=>({type:"trust_wave",x:[150,$.width-150,150,$.width-150][W],y:[t_-100,t_-100,t_+100,t_+100][W],radius:0,maxRadius:70,life:0,maxLife:140,delay:W*35,color:"#34d399",opacity:.3,strokeWidth:1}));case"portfolio":return[...Array.from({length:6}).map((e_,W)=>({type:"code_line",x:80,y:t_-75+W*25,width:0,maxWidth:120,life:0,maxLife:100,delay:W*12,color:"#22c55e",opacity:.5,strokeWidth:1})),...Array.from({length:6}).map((e_,W)=>({type:"code_line",x:$.width-200,y:t_-75+W*25,width:0,maxWidth:120,life:0,maxLife:100,delay:W*12+40,color:"#10b981",opacity:.4,strokeWidth:1}))];case"epilogue":return[...Array.from({length:5}).map((e_,W)=>({type:"gentle_bloom",x:b+Math.cos(W*(2*Math.PI)/5)*150,y:t_+Math.sin(W*(2*Math.PI)/5)*150,radius:0,maxRadius:40,life:0,maxLife:180,delay:W*30,color:"#ffd700",opacity:.4,strokeWidth:1})),...Array.from({length:12}).map((e_,W)=>({type:"farewell_twinkle",x:Math.random()*$.width,y:Math.random()*$.height,life:0,maxLife:200,delay:Math.random()*120,size:Math.random()*3+2,twinkle:0,twinkleSpeed:.08,color:"#fbbf24",opacity:.3}))];default:return[]}},__=(g,b)=>{if(g.delay&&g.life<g.delay)return;const t_=g.life/g.maxLife,e_=g.opacity||.6,W=Math.sin(t_*Math.PI)*e_;switch(g.type){case"info_ripple":const p_=(g.life-(g.delay||0))/(g.maxLife-(g.delay||0));g.radius=g.maxRadius*p_,l.save(),l.strokeStyle=`${g.color}${Math.floor(W*255).toString(16).padStart(2,"0")}`,l.lineWidth=g.strokeWidth,l.shadowBlur=5,l.shadowColor=g.color,l.beginPath(),l.arc(g.x,g.y,g.radius,0,Math.PI*2),l.stroke(),l.restore();break;case"story_dot":g.pulse=(g.pulse||0)+g.pulseSpeed;const P_=1+Math.sin(g.pulse)*.2;l.save(),l.beginPath(),l.arc(g.x,g.y,g.size*P_,0,Math.PI*2),l.fillStyle=`${g.color}${Math.floor(W*255).toString(16).padStart(2,"0")}`,l.shadowBlur=8,l.shadowColor=g.color,l.fill(),l.restore();break;case"achievement_pulse":const Y_=(g.life-(g.delay||0))/(g.maxLife-(g.delay||0));g.radius=g.maxRadius*Y_,l.save(),l.strokeStyle=`${g.color}${Math.floor(W*255).toString(16).padStart(2,"0")}`,l.lineWidth=g.strokeWidth,l.shadowBlur=6,l.shadowColor=g.color,l.beginPath(),l.arc(g.x,g.y,g.radius,0,Math.PI*2),l.stroke(),l.restore();break;case"micro_spark":l.save(),l.beginPath(),l.arc(g.x,g.y,g.size,0,Math.PI*2),l.fillStyle=`${g.color}${Math.floor(W*255).toString(16).padStart(2,"0")}`,l.shadowBlur=4,l.shadowColor=g.color,l.fill(),l.restore();break;case"subtle_star":g.rotation+=g.rotationSpeed,g.pulse=(g.pulse||0)+g.pulseSpeed;const N_=1+Math.sin(g.pulse)*.15;l.save(),l.translate(g.x,g.y),l.rotate(g.rotation),l.scale(N_,N_),l.fillStyle=`${g.color}${Math.floor(W*255).toString(16).padStart(2,"0")}`,l.shadowBlur=8,l.shadowColor=g.color,l.beginPath();for(let z=0;z<5;z++){const a_=z*2*Math.PI/5-Math.PI/2,T_=Math.cos(a_)*g.size,I=Math.sin(a_)*g.size,Y=a_+Math.PI/5,F=Math.cos(Y)*(g.size*.4),p=Math.sin(Y)*(g.size*.4);z===0?l.moveTo(T_,I):l.lineTo(T_,I),l.lineTo(F,p)}l.closePath(),l.fill(),l.restore();break;case"trust_wave":const _t=(g.life-(g.delay||0))/(g.maxLife-(g.delay||0));g.radius=g.maxRadius*_t,l.save(),l.strokeStyle=`${g.color}${Math.floor(W*255).toString(16).padStart(2,"0")}`,l.lineWidth=g.strokeWidth,l.shadowBlur=4,l.shadowColor=g.color,l.beginPath(),l.arc(g.x,g.y,g.radius,0,Math.PI*2),l.stroke(),l.restore();break;case"code_line":const z_=(g.life-(g.delay||0))/(g.maxLife-(g.delay||0));g.width=g.maxWidth*z_,l.save(),l.strokeStyle=`${g.color}${Math.floor(W*255).toString(16).padStart(2,"0")}`,l.lineWidth=g.strokeWidth,l.shadowBlur=3,l.shadowColor=g.color,l.beginPath(),l.moveTo(g.x,g.y),l.lineTo(g.x+g.width,g.y),l.stroke(),l.restore();break;case"gentle_bloom":const m_=(g.life-(g.delay||0))/(g.maxLife-(g.delay||0));g.radius=g.maxRadius*m_,l.save(),l.strokeStyle=`${g.color}${Math.floor(W*255).toString(16).padStart(2,"0")}`,l.lineWidth=g.strokeWidth,l.shadowBlur=8,l.shadowColor=g.color,l.beginPath(),l.arc(g.x,g.y,g.radius,0,Math.PI*2),l.stroke(),l.restore();break;case"farewell_twinkle":g.twinkle+=g.twinkleSpeed;const B=.8+Math.sin(g.twinkle)*.4;l.save(),l.beginPath(),l.arc(g.x,g.y,g.size*B,0,Math.PI*2),l.fillStyle=`${g.color}${Math.floor(W*255).toString(16).padStart(2,"0")}`,l.shadowBlur=6,l.shadowColor=g.color,l.fill(),l.restore();break}};let J=0;const n_=()=>{J++;const g=l.createLinearGradient(0,0,0,$.height);g.addColorStop(0,"#0a0a0f"),g.addColorStop(1,"#1a1a2e"),l.fillStyle=g,l.fillRect(0,0,$.width,$.height),r.forEach(b=>{b.twinkle+=b.twinkleSpeed;const t_=Math.sin(b.twinkle)*.3+.7,e_=b.baseOpacity*t_;S(b.x,b.y,b.radius,e_),b.x+=b.dx,b.y+=b.dy,(b.x<0||b.x>$.width)&&(b.dx*=-1),(b.y<0||b.y>$.height)&&(b.dy*=-1)}),u.forEach(b=>{X(b,J)}),f.forEach(b=>{b.life<b.maxLife?(b.life++,b.x+=Math.cos(b.angle)*b.speed,b.y+=Math.sin(b.angle)*b.speed,b.life<b.maxLife*.1?b.opacity=b.life/(b.maxLife*.1):b.life>b.maxLife*.8?b.opacity=1-(b.life-b.maxLife*.8)/(b.maxLife*.2):b.opacity=1,G(b),(b.x>$.width+100||b.y>$.height+100)&&(b.life=b.maxLife)):b.respawnDelay<=0?(b.x=-50,b.y=Math.random()*$.height,b.life=0,b.respawnDelay=Math.random()*2e3+3e3,b.angle=Math.random()*Math.PI/6-Math.PI/12,b.speed=Math.random()*3+2):b.respawnDelay-=16}),T=T.filter(b=>b.life<b.maxLife?(b.life++,__(b),!0):!1),requestAnimationFrame(n_)},k=g=>{const b=Z(g);T=[...T,...b]};return y(),n_(),window.addEventListener("resize",y),$.triggerCommandEffect=k,()=>window.removeEventListener("resize",y)},[]),i_.useEffect(()=>{e&&i.current&&i.current.triggerCommandEffect&&i.current.triggerCommandEffect(e)},[e]),N.jsx("canvas",{ref:i,className:"absolute inset-0 -z-10"})},rI=i_.memo(oI);function fr(){return fr=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var $=arguments[i];for(var l in $)Object.prototype.hasOwnProperty.call($,l)&&(e[l]=$[l])}return e},fr.apply(this,arguments)}var uI={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(e){},onComplete:function(e){},preStringTyped:function(e,i){},onStringTyped:function(e,i){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,i){},onTypingResumed:function(e,i){},onReset:function(e){},onStop:function(e,i){},onStart:function(e,i){},onDestroy:function(e){}},cI=new((function(){function e(){}var i=e.prototype;return i.load=function($,l,r){if($.el=typeof r=="string"?document.querySelector(r):r,$.options=fr({},uI,l),$.isInput=$.el.tagName.toLowerCase()==="input",$.attr=$.options.attr,$.bindInputFocusEvents=$.options.bindInputFocusEvents,$.showCursor=!$.isInput&&$.options.showCursor,$.cursorChar=$.options.cursorChar,$.cursorBlinking=!0,$.elContent=$.attr?$.el.getAttribute($.attr):$.el.textContent,$.contentType=$.options.contentType,$.typeSpeed=$.options.typeSpeed,$.startDelay=$.options.startDelay,$.backSpeed=$.options.backSpeed,$.smartBackspace=$.options.smartBackspace,$.backDelay=$.options.backDelay,$.fadeOut=$.options.fadeOut,$.fadeOutClass=$.options.fadeOutClass,$.fadeOutDelay=$.options.fadeOutDelay,$.isPaused=!1,$.strings=$.options.strings.map(function(h){return h.trim()}),$.stringsElement=typeof $.options.stringsElement=="string"?document.querySelector($.options.stringsElement):$.options.stringsElement,$.stringsElement){$.strings=[],$.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var f=Array.prototype.slice.apply($.stringsElement.children),u=f.length;if(u)for(var T=0;T<u;T+=1)$.strings.push(f[T].innerHTML.trim())}for(var d in $.strPos=0,$.currentElContent=this.getCurrentElContent($),$.currentElContent&&$.currentElContent.length>0&&($.strPos=$.currentElContent.length-1,$.strings.unshift($.currentElContent)),$.sequence=[],$.strings)$.sequence[d]=d;$.arrayPos=0,$.stopNum=0,$.loop=$.options.loop,$.loopCount=$.options.loopCount,$.curLoop=0,$.shuffle=$.options.shuffle,$.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},$.typingComplete=!1,$.autoInsertCss=$.options.autoInsertCss,$.autoInsertCss&&(this.appendCursorAnimationCss($),this.appendFadeOutAnimationCss($))},i.getCurrentElContent=function($){return $.attr?$.el.getAttribute($.attr):$.isInput?$.el.value:$.contentType==="html"?$.el.innerHTML:$.el.textContent},i.appendCursorAnimationCss=function($){var l="data-typed-js-cursor-css";if($.showCursor&&!document.querySelector("["+l+"]")){var r=document.createElement("style");r.setAttribute(l,"true"),r.innerHTML=`
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
      `,document.body.appendChild(r)}},i.appendFadeOutAnimationCss=function($){var l="data-typed-fadeout-js-css";if($.fadeOut&&!document.querySelector("["+l+"]")){var r=document.createElement("style");r.setAttribute(l,"true"),r.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(r)}},e})()),lh=new((function(){function e(){}var i=e.prototype;return i.typeHtmlChars=function($,l,r){if(r.contentType!=="html")return l;var f=$.substring(l).charAt(0);if(f==="<"||f==="&"){var u;for(u=f==="<"?">":";";$.substring(l+1).charAt(0)!==u&&!(1+ ++l>$.length););l++}return l},i.backSpaceHtmlChars=function($,l,r){if(r.contentType!=="html")return l;var f=$.substring(l).charAt(0);if(f===">"||f===";"){var u;for(u=f===">"?"<":"&";$.substring(l-1).charAt(0)!==u&&!(--l<0););l--}return l},e})()),fI=(function(){function e($,l){cI.load(this,l,$),this.begin()}var i=e.prototype;return i.toggle=function(){this.pause.status?this.start():this.stop()},i.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},i.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},i.destroy=function(){this.reset(!1),this.options.onDestroy(this)},i.reset=function($){$===void 0&&($=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,$&&(this.insertCursor(),this.options.onReset(this),this.begin())},i.begin=function(){var $=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){$.strPos===0?$.typewrite($.strings[$.sequence[$.arrayPos]],$.strPos):$.backspace($.strings[$.sequence[$.arrayPos]],$.strPos)},this.startDelay)},i.typewrite=function($,l){var r=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var f=this.humanizer(this.typeSpeed),u=1;this.pause.status!==!0?this.timeout=setTimeout(function(){l=lh.typeHtmlChars($,l,r);var T=0,d=$.substring(l);if(d.charAt(0)==="^"&&/^\^\d+/.test(d)){var h=1;h+=(d=/\d+/.exec(d)[0]).length,T=parseInt(d),r.temporaryPause=!0,r.options.onTypingPaused(r.arrayPos,r),$=$.substring(0,l)+$.substring(l+h),r.toggleBlinking(!0)}if(d.charAt(0)==="`"){for(;$.substring(l+u).charAt(0)!=="`"&&(u++,!(l+u>$.length)););var A=$.substring(0,l),y=$.substring(A.length+1,l+u),S=$.substring(l+u+1);$=A+y+S,u--}r.timeout=setTimeout(function(){r.toggleBlinking(!1),l>=$.length?r.doneTyping($,l):r.keepTyping($,l,u),r.temporaryPause&&(r.temporaryPause=!1,r.options.onTypingResumed(r.arrayPos,r))},T)},f):this.setPauseStatus($,l,!0)},i.keepTyping=function($,l,r){l===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var f=$.substring(0,l+=r);this.replaceText(f),this.typewrite($,l)},i.doneTyping=function($,l){var r=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){r.backspace($,l)},this.backDelay))},i.backspace=function($,l){var r=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var f=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){l=lh.backSpaceHtmlChars($,l,r);var u=$.substring(0,l);if(r.replaceText(u),r.smartBackspace){var T=r.strings[r.arrayPos+1];r.stopNum=T&&u===T.substring(0,l)?l:0}l>r.stopNum?(l--,r.backspace($,l)):l<=r.stopNum&&(r.arrayPos++,r.arrayPos===r.strings.length?(r.arrayPos=0,r.options.onLastStringBackspaced(),r.shuffleStringsIfNeeded(),r.begin()):r.typewrite(r.strings[r.sequence[r.arrayPos]],l))},f)}else this.setPauseStatus($,l,!1)},i.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},i.setPauseStatus=function($,l,r){this.pause.typewrite=r,this.pause.curString=$,this.pause.curStrPos=l},i.toggleBlinking=function($){this.cursor&&(this.pause.status||this.cursorBlinking!==$&&(this.cursorBlinking=$,$?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},i.humanizer=function($){return Math.round(Math.random()*$/2)+$},i.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},i.initFadeOut=function(){var $=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){$.arrayPos++,$.replaceText(""),$.strings.length>$.arrayPos?$.typewrite($.strings[$.sequence[$.arrayPos]],0):($.typewrite($.strings[0],0),$.arrayPos=0)},this.fadeOutDelay)},i.replaceText=function($){this.attr?this.el.setAttribute(this.attr,$):this.isInput?this.el.value=$:this.contentType==="html"?this.el.innerHTML=$:this.el.textContent=$},i.bindFocusEvents=function(){var $=this;this.isInput&&(this.el.addEventListener("focus",function(l){$.stop()}),this.el.addEventListener("blur",function(l){$.el.value&&$.el.value.length!==0||$.start()}))},i.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},e})();function TI({lines:e,typedOutput:i,setLines:$,setTypedOutput:l}){const r=i_.useRef(null),[f,u]=i_.useState([]);return i_.useEffect(()=>{if(e.length>f.length){const T=[];for(let d=f.length;d<e.length;d++)T.push(`line-${Date.now()}-${d}-${Math.random()}`);u(d=>[...d,...T])}},[e.length,f.length]),i_.useEffect(()=>{if(i){const T=document.getElementById("typed-output");if(T){const d=new fI(T,{strings:[i],typeSpeed:50,showCursor:!0,cursorChar:"_",onComplete:()=>{$(h=>[...h,i]),l(null)}});return()=>d.destroy()}}},[i,$,l]),N.jsxs("div",{ref:r,className:"flex-1 overflow-y-auto px-3 md:px-4 py-3 text-gray-300 bg-gray-950 font-mono",children:[e.map((T,d)=>{const h=typeof T=="string"&&T.startsWith("$ "),A=f[d]||`fallback-${d}`;return N.jsx(s_.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{duration:.2},className:"mb-4",children:h?N.jsx("div",{className:"ml-2 md:ml-4",children:N.jsx("div",{className:"border-l-2 border-cyan-500 bg-gray-900 px-3 py-2 mb-3",children:N.jsx("span",{className:"text-cyan-400",children:T.replace("$ ","$ ")})})}):typeof T=="string"?N.jsx("span",{className:"md:ml-4",style:{whiteSpace:"pre-wrap"},children:T}):T},A)}),i&&N.jsx("div",{id:"typed-output",className:"text-cyan-400 font-mono"})]})}function dI({input:e,setInput:i,onKeyDown:$}){return N.jsxs("div",{className:"flex items-center bg-gray-950 px-3 md:px-4 py-3 border-t border-gray-700 font-mono",children:[N.jsx("span",{className:"text-cyan-400 mr-2",children:"$"}),N.jsx("input",{autoFocus:!0,className:"bg-transparent text-gray-300 outline-none flex-1 pl-1 font-mono",value:e,onChange:l=>i(l.target.value),onKeyDown:$,placeholder:"Type a command..."})]})}function hI(e){return N.jsxs("div",{className:"relative w-full max-w-[1024px] h-screen md:h-[600px] bg-gray-950 border-0 md:border border-gray-700 rounded-none md:rounded-lg shadow-2xl flex flex-col text-sm font-mono",children:[N.jsxs("div",{className:"flex items-center bg-gray-900 px-3 py-2 border-b border-gray-700 rounded-t-none md:rounded-t-lg",children:[N.jsxs("div",{className:"flex space-x-2 mr-3",children:[N.jsx("span",{className:"w-3 h-3 bg-red-500 rounded-full"}),N.jsx("span",{className:"w-3 h-3 bg-yellow-500 rounded-full"}),N.jsx("span",{className:"w-3 h-3 bg-green-500 rounded-full"})]}),N.jsx("span",{className:"text-xs text-cyan-400 font-mono truncate",children:"seo-gwangwon@referral-cli ~ %"})]}),N.jsx(TI,{...e}),N.jsx(dI,{...e})]})}iI();function EI(){const e=sI();return N.jsxs("div",{className:"relative min-h-screen text-[#d0cde1] font-mono flex items-center justify-center overflow-hidden",children:[N.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] animate-gradient -z-20"}),N.jsx(rI,{currentCommand:e.currentCommand}),N.jsx(hI,{...e}),e.showConfetti&&N.jsx("div",{className:"fixed inset-0 pointer-events-none z-50",children:N.jsx(ip,{particleCount:80,duration:3e3,particleSize:20,colors:["#ffd700","#ffb347","#ff69b4","#87ceeb","#98fb98"]})})]})}function AI(){return N.jsx(EI,{})}mL.createRoot(document.getElementById("root")).render(N.jsx(i_.StrictMode,{children:N.jsx(AI,{})}));
