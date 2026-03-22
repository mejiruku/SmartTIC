(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var zh={exports:{}},Ta={},Bh={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function GE(){if(Om)return Ve;Om=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),k=Symbol.iterator;function O(V){return V===null||typeof V!="object"?null:(V=k&&V[k]||V["@@iterator"],typeof V=="function"?V:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,Q={};function B(V,H,ke){this.props=V,this.context=H,this.refs=Q,this.updater=ke||z}B.prototype.isReactComponent={},B.prototype.setState=function(V,H){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,H,"setState")},B.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function Z(){}Z.prototype=B.prototype;function he(V,H,ke){this.props=V,this.context=H,this.refs=Q,this.updater=ke||z}var oe=he.prototype=new Z;oe.constructor=he,G(oe,B.prototype),oe.isPureReactComponent=!0;var pe=Array.isArray,me=Object.prototype.hasOwnProperty,we={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function I(V,H,ke){var Te,Ie={},Ce=null,De=null;if(H!=null)for(Te in H.ref!==void 0&&(De=H.ref),H.key!==void 0&&(Ce=""+H.key),H)me.call(H,Te)&&!C.hasOwnProperty(Te)&&(Ie[Te]=H[Te]);var Fe=arguments.length-2;if(Fe===1)Ie.children=ke;else if(1<Fe){for(var Qe=Array(Fe),At=0;At<Fe;At++)Qe[At]=arguments[At+2];Ie.children=Qe}if(V&&V.defaultProps)for(Te in Fe=V.defaultProps,Fe)Ie[Te]===void 0&&(Ie[Te]=Fe[Te]);return{$$typeof:i,type:V,key:Ce,ref:De,props:Ie,_owner:we.current}}function R(V,H){return{$$typeof:i,type:V.type,key:H,ref:V.ref,props:V.props,_owner:V._owner}}function x(V){return typeof V=="object"&&V!==null&&V.$$typeof===i}function N(V){var H={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(ke){return H[ke]})}var L=/\/+/g;function A(V,H){return typeof V=="object"&&V!==null&&V.key!=null?N(""+V.key):H.toString(36)}function ge(V,H,ke,Te,Ie){var Ce=typeof V;(Ce==="undefined"||Ce==="boolean")&&(V=null);var De=!1;if(V===null)De=!0;else switch(Ce){case"string":case"number":De=!0;break;case"object":switch(V.$$typeof){case i:case e:De=!0}}if(De)return De=V,Ie=Ie(De),V=Te===""?"."+A(De,0):Te,pe(Ie)?(ke="",V!=null&&(ke=V.replace(L,"$&/")+"/"),ge(Ie,H,ke,"",function(At){return At})):Ie!=null&&(x(Ie)&&(Ie=R(Ie,ke+(!Ie.key||De&&De.key===Ie.key?"":(""+Ie.key).replace(L,"$&/")+"/")+V)),H.push(Ie)),1;if(De=0,Te=Te===""?".":Te+":",pe(V))for(var Fe=0;Fe<V.length;Fe++){Ce=V[Fe];var Qe=Te+A(Ce,Fe);De+=ge(Ce,H,ke,Qe,Ie)}else if(Qe=O(V),typeof Qe=="function")for(V=Qe.call(V),Fe=0;!(Ce=V.next()).done;)Ce=Ce.value,Qe=Te+A(Ce,Fe++),De+=ge(Ce,H,ke,Qe,Ie);else if(Ce==="object")throw H=String(V),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return De}function Ze(V,H,ke){if(V==null)return V;var Te=[],Ie=0;return ge(V,Te,"","",function(Ce){return H.call(ke,Ce,Ie++)}),Te}function tt(V){if(V._status===-1){var H=V._result;H=H(),H.then(function(ke){(V._status===0||V._status===-1)&&(V._status=1,V._result=ke)},function(ke){(V._status===0||V._status===-1)&&(V._status=2,V._result=ke)}),V._status===-1&&(V._status=0,V._result=H)}if(V._status===1)return V._result.default;throw V._result}var Ge={current:null},X={transition:null},ue={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:X,ReactCurrentOwner:we};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Ve.Children={map:Ze,forEach:function(V,H,ke){Ze(V,function(){H.apply(this,arguments)},ke)},count:function(V){var H=0;return Ze(V,function(){H++}),H},toArray:function(V){return Ze(V,function(H){return H})||[]},only:function(V){if(!x(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ve.Component=B,Ve.Fragment=t,Ve.Profiler=o,Ve.PureComponent=he,Ve.StrictMode=s,Ve.Suspense=g,Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,Ve.act=ee,Ve.cloneElement=function(V,H,ke){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Te=G({},V.props),Ie=V.key,Ce=V.ref,De=V._owner;if(H!=null){if(H.ref!==void 0&&(Ce=H.ref,De=we.current),H.key!==void 0&&(Ie=""+H.key),V.type&&V.type.defaultProps)var Fe=V.type.defaultProps;for(Qe in H)me.call(H,Qe)&&!C.hasOwnProperty(Qe)&&(Te[Qe]=H[Qe]===void 0&&Fe!==void 0?Fe[Qe]:H[Qe])}var Qe=arguments.length-2;if(Qe===1)Te.children=ke;else if(1<Qe){Fe=Array(Qe);for(var At=0;At<Qe;At++)Fe[At]=arguments[At+2];Te.children=Fe}return{$$typeof:i,type:V.type,key:Ie,ref:Ce,props:Te,_owner:De}},Ve.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},Ve.createElement=I,Ve.createFactory=function(V){var H=I.bind(null,V);return H.type=V,H},Ve.createRef=function(){return{current:null}},Ve.forwardRef=function(V){return{$$typeof:f,render:V}},Ve.isValidElement=x,Ve.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:tt}},Ve.memo=function(V,H){return{$$typeof:_,type:V,compare:H===void 0?null:H}},Ve.startTransition=function(V){var H=X.transition;X.transition={};try{V()}finally{X.transition=H}},Ve.unstable_act=ee,Ve.useCallback=function(V,H){return Ge.current.useCallback(V,H)},Ve.useContext=function(V){return Ge.current.useContext(V)},Ve.useDebugValue=function(){},Ve.useDeferredValue=function(V){return Ge.current.useDeferredValue(V)},Ve.useEffect=function(V,H){return Ge.current.useEffect(V,H)},Ve.useId=function(){return Ge.current.useId()},Ve.useImperativeHandle=function(V,H,ke){return Ge.current.useImperativeHandle(V,H,ke)},Ve.useInsertionEffect=function(V,H){return Ge.current.useInsertionEffect(V,H)},Ve.useLayoutEffect=function(V,H){return Ge.current.useLayoutEffect(V,H)},Ve.useMemo=function(V,H){return Ge.current.useMemo(V,H)},Ve.useReducer=function(V,H,ke){return Ge.current.useReducer(V,H,ke)},Ve.useRef=function(V){return Ge.current.useRef(V)},Ve.useState=function(V){return Ge.current.useState(V)},Ve.useSyncExternalStore=function(V,H,ke){return Ge.current.useSyncExternalStore(V,H,ke)},Ve.useTransition=function(){return Ge.current.useTransition()},Ve.version="18.3.1",Ve}var Lm;function Od(){return Lm||(Lm=1,Bh.exports=GE()),Bh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function QE(){if(Mm)return Ta;Mm=1;var i=Od(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,_){var w,k={},O=null,z=null;_!==void 0&&(O=""+_),g.key!==void 0&&(O=""+g.key),g.ref!==void 0&&(z=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&(k[w]=g[w]);if(f&&f.defaultProps)for(w in g=f.defaultProps,g)k[w]===void 0&&(k[w]=g[w]);return{$$typeof:e,type:f,key:O,ref:z,props:k,_owner:o.current}}return Ta.Fragment=t,Ta.jsx=h,Ta.jsxs=h,Ta}var bm;function YE(){return bm||(bm=1,zh.exports=QE()),zh.exports}var T=YE(),Oe=Od(),vu={},$h={exports:{}},nn={},Hh={exports:{}},Wh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm;function JE(){return Fm||(Fm=1,(function(i){function e(X,ue){var ee=X.length;X.push(ue);e:for(;0<ee;){var V=ee-1>>>1,H=X[V];if(0<o(H,ue))X[V]=ue,X[ee]=H,ee=V;else break e}}function t(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var ue=X[0],ee=X.pop();if(ee!==ue){X[0]=ee;e:for(var V=0,H=X.length,ke=H>>>1;V<ke;){var Te=2*(V+1)-1,Ie=X[Te],Ce=Te+1,De=X[Ce];if(0>o(Ie,ee))Ce<H&&0>o(De,Ie)?(X[V]=De,X[Ce]=ee,V=Ce):(X[V]=Ie,X[Te]=ee,V=Te);else if(Ce<H&&0>o(De,ee))X[V]=De,X[Ce]=ee,V=Ce;else break e}}return ue}function o(X,ue){var ee=X.sortIndex-ue.sortIndex;return ee!==0?ee:X.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,f=h.now();i.unstable_now=function(){return h.now()-f}}var g=[],_=[],w=1,k=null,O=3,z=!1,G=!1,Q=!1,B=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,he=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function oe(X){for(var ue=t(_);ue!==null;){if(ue.callback===null)s(_);else if(ue.startTime<=X)s(_),ue.sortIndex=ue.expirationTime,e(g,ue);else break;ue=t(_)}}function pe(X){if(Q=!1,oe(X),!G)if(t(g)!==null)G=!0,tt(me);else{var ue=t(_);ue!==null&&Ge(pe,ue.startTime-X)}}function me(X,ue){G=!1,Q&&(Q=!1,Z(I),I=-1),z=!0;var ee=O;try{for(oe(ue),k=t(g);k!==null&&(!(k.expirationTime>ue)||X&&!N());){var V=k.callback;if(typeof V=="function"){k.callback=null,O=k.priorityLevel;var H=V(k.expirationTime<=ue);ue=i.unstable_now(),typeof H=="function"?k.callback=H:k===t(g)&&s(g),oe(ue)}else s(g);k=t(g)}if(k!==null)var ke=!0;else{var Te=t(_);Te!==null&&Ge(pe,Te.startTime-ue),ke=!1}return ke}finally{k=null,O=ee,z=!1}}var we=!1,C=null,I=-1,R=5,x=-1;function N(){return!(i.unstable_now()-x<R)}function L(){if(C!==null){var X=i.unstable_now();x=X;var ue=!0;try{ue=C(!0,X)}finally{ue?A():(we=!1,C=null)}}else we=!1}var A;if(typeof he=="function")A=function(){he(L)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,Ze=ge.port2;ge.port1.onmessage=L,A=function(){Ze.postMessage(null)}}else A=function(){B(L,0)};function tt(X){C=X,we||(we=!0,A())}function Ge(X,ue){I=B(function(){X(i.unstable_now())},ue)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(X){X.callback=null},i.unstable_continueExecution=function(){G||z||(G=!0,tt(me))},i.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<X?Math.floor(1e3/X):5},i.unstable_getCurrentPriorityLevel=function(){return O},i.unstable_getFirstCallbackNode=function(){return t(g)},i.unstable_next=function(X){switch(O){case 1:case 2:case 3:var ue=3;break;default:ue=O}var ee=O;O=ue;try{return X()}finally{O=ee}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(X,ue){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ee=O;O=X;try{return ue()}finally{O=ee}},i.unstable_scheduleCallback=function(X,ue,ee){var V=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?V+ee:V):ee=V,X){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=ee+H,X={id:w++,callback:ue,priorityLevel:X,startTime:ee,expirationTime:H,sortIndex:-1},ee>V?(X.sortIndex=ee,e(_,X),t(g)===null&&X===t(_)&&(Q?(Z(I),I=-1):Q=!0,Ge(pe,ee-V))):(X.sortIndex=H,e(g,X),G||z||(G=!0,tt(me))),X},i.unstable_shouldYield=N,i.unstable_wrapCallback=function(X){var ue=O;return function(){var ee=O;O=ue;try{return X.apply(this,arguments)}finally{O=ee}}}})(Wh)),Wh}var jm;function XE(){return jm||(jm=1,Hh.exports=JE()),Hh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function ZE(){if(Um)return nn;Um=1;var i=Od(),e=XE();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},k={};function O(n){return g.call(k,n)?!0:g.call(w,n)?!1:_.test(n)?k[n]=!0:(w[n]=!0,!1)}function z(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function G(n,r,a,c){if(r===null||typeof r>"u"||z(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Q(n,r,a,c,d,p,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=v}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new Q(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];B[r]=new Q(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new Q(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new Q(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new Q(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new Q(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new Q(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new Q(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new Q(n,5,!1,n.toLowerCase(),null,!1,!1)});var Z=/[\-:]([a-z])/g;function he(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(Z,he);B[r]=new Q(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(Z,he);B[r]=new Q(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(Z,he);B[r]=new Q(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new Q(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new Q(n,1,!1,n.toLowerCase(),null,!0,!0)});function oe(n,r,a,c){var d=B.hasOwnProperty(r)?B[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(G(r,a,d,c)&&(a=null),c||d===null?O(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var pe=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,me=Symbol.for("react.element"),we=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),N=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),Ze=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),Ge=Symbol.for("react.offscreen"),X=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=X&&n[X]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,V;function H(n){if(V===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);V=r&&r[1]||""}return`
`+V+n}var ke=!1;function Te(n,r){if(!n||ke)return"";ke=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(j){var c=j}Reflect.construct(n,[],r)}else{try{r.call()}catch(j){c=j}n.call(r.prototype)}else{try{throw Error()}catch(j){c=j}n()}}catch(j){if(j&&c&&typeof j.stack=="string"){for(var d=j.stack.split(`
`),p=c.stack.split(`
`),v=d.length-1,S=p.length-1;1<=v&&0<=S&&d[v]!==p[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==p[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==p[S]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=S);break}}}finally{ke=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?H(n):""}function Ie(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=Te(n.type,!1),n;case 11:return n=Te(n.type.render,!1),n;case 1:return n=Te(n.type,!0),n;default:return""}}function Ce(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case C:return"Fragment";case we:return"Portal";case R:return"Profiler";case I:return"StrictMode";case A:return"Suspense";case ge:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case x:return(n._context.displayName||"Context")+".Provider";case L:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ze:return r=n.displayName||null,r!==null?r:Ce(n.type)||"Memo";case tt:r=n._payload,n=n._init;try{return Ce(n(r))}catch{}}return null}function De(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Qe(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function At(n){var r=Qe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Wr(n){n._valueTracker||(n._valueTracker=At(n))}function ne(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=Qe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function ye(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function de(n,r){var a=r.checked;return ee({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function $e(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Fe(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ze(n,r){r=r.checked,r!=null&&oe(n,"checked",r,!1)}function je(n,r){ze(n,r);var a=Fe(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ft(n,r.type,a):r.hasOwnProperty("defaultValue")&&ft(n,r.type,Fe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function jt(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ft(n,r,a){(r!=="number"||ye(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var We=Array.isArray;function sn(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Fe(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Bn(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function on(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(We(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Fe(a)}}function kt(n,r){var a=Fe(r.value),c=Fe(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function $n(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function mr(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ks(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?mr(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var qr,ol=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(qr=qr||document.createElement("div"),qr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=qr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function ji(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},al=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(n){al.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Kr[r]=Kr[n]})});function Gr(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Kr.hasOwnProperty(n)&&Kr[n]?(""+r).trim():r+"px"}function Rs(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Gr(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Vo=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pn(n,r){if(r){if(Vo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Cs(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qr=null;function Ps(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var gr=null,yr=null,ht=null;function Oo(n){if(n=aa(n)){if(typeof gr!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Ol(r),gr(n.stateNode,n.type,r))}}function Yr(n){yr?ht?ht.push(n):ht=[n]:yr=n}function Jr(){if(yr){var n=yr,r=ht;if(ht=yr=null,Oo(n),r)for(n=0;n<r.length;n++)Oo(r[n])}}function ll(n,r){return n(r)}function ul(){}var Hn=!1;function cl(n,r,a){if(Hn)return n(r,a);Hn=!0;try{return ll(n,r,a)}finally{Hn=!1,(yr!==null||ht!==null)&&(ul(),Jr())}}function Ui(n,r){var a=n.stateNode;if(a===null)return null;var c=Ol(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var Xr=!1;if(f)try{var Zr={};Object.defineProperty(Zr,"passive",{get:function(){Xr=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{Xr=!1}function hl(n,r,a,c,d,p,v,S,P){var j=Array.prototype.slice.call(arguments,3);try{r.apply(a,j)}catch(q){this.onError(q)}}var _r=!1,Wn=null,Ns=!1,_n=null,dl={onError:function(n){_r=!0,Wn=n}};function fl(n,r,a,c,d,p,v,S,P){_r=!1,Wn=null,hl.apply(dl,arguments)}function Lo(n,r,a,c,d,p,v,S,P){if(fl.apply(this,arguments),_r){if(_r){var j=Wn;_r=!1,Wn=null}else throw Error(t(198));Ns||(Ns=!0,_n=j)}}function Nn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Mo(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function pl(n){if(Nn(n)!==n)throw Error(t(188))}function ml(n){var r=n.alternate;if(!r){if(r=Nn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return pl(d),n;if(p===c)return pl(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,c=p;break}if(S===c){v=!0,c=d,a=p;break}S=S.sibling}if(!v){for(S=p.child;S;){if(S===a){v=!0,a=p,c=d;break}if(S===c){v=!0,c=p,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function gl(n){return n=ml(n),n!==null?zi(n):null}function zi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=zi(n);if(r!==null)return r;n=n.sibling}return null}var bo=e.unstable_scheduleCallback,xs=e.unstable_cancelCallback,Bi=e.unstable_shouldYield,vr=e.unstable_requestPaint,nt=e.unstable_now,_c=e.unstable_getCurrentPriorityLevel,Ds=e.unstable_ImmediatePriority,Fo=e.unstable_UserBlockingPriority,$i=e.unstable_NormalPriority,jo=e.unstable_LowPriority,Vs=e.unstable_IdlePriority,Hi=null,an=null;function yl(n){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(Hi,n,void 0,(n.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:Wi,qn=Math.log,vn=Math.LN2;function Wi(n){return n>>>=0,n===0?32:31-(qn(n)/vn|0)|0}var Kn=64,ei=4194304;function Ke(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Er(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?c=Ke(S):(p&=v,p!==0&&(c=Ke(p)))}else v=a&~d,v!==0?c=Ke(v):p!==0&&(c=Ke(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-ln(r),d=1<<a,c|=n[a],r&=~d;return c}function qi(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ki(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var v=31-ln(p),S=1<<v,P=d[v];P===-1?((S&a)===0||(S&c)!==0)&&(d[v]=qi(S,r)):P<=r&&(n.expiredLanes|=S),p&=~S}}function Uo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function zo(){var n=Kn;return Kn<<=1,(Kn&4194240)===0&&(Kn=64),n}function Bo(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Gi(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-ln(r),n[r]=a}function vc(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-ln(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function $o(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-ln(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Ue=0;function Gn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ho,Os,Wo,qo,Ko,Qn=!1,Ls=[],Yn=null,Jn=null,Dt=null,Qi=new Map,wr=new Map,un=[],_l="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ti(n,r){switch(n){case"focusin":case"focusout":Yn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":Qi.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":wr.delete(r.pointerId)}}function xn(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=aa(r),r!==null&&Os(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function vl(n,r,a,c,d){switch(r){case"focusin":return Yn=xn(Yn,n,r,a,c,d),!0;case"dragenter":return Jn=xn(Jn,n,r,a,c,d),!0;case"mouseover":return Dt=xn(Dt,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return Qi.set(p,xn(Qi.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,wr.set(p,xn(wr.get(p)||null,n,r,a,c,d)),!0}return!1}function Ms(n){var r=Zi(n.target);if(r!==null){var a=Nn(r);if(a!==null){if(r=a.tag,r===13){if(r=Mo(a),r!==null){n.blockedOn=r,Ko(n.priority,function(){Wo(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Xe(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=bs(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Qr=c,a.target.dispatchEvent(c),Qr=null}else return r=aa(a),r!==null&&Os(r),n.blockedOn=a,!1;r.shift()}return!0}function El(n,r,a){Xe(n)&&a.delete(r)}function Ec(){Qn=!1,Yn!==null&&Xe(Yn)&&(Yn=null),Jn!==null&&Xe(Jn)&&(Jn=null),Dt!==null&&Xe(Dt)&&(Dt=null),Qi.forEach(El),wr.forEach(El)}function ni(n,r){n.blockedOn===r&&(n.blockedOn=null,Qn||(Qn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ec)))}function ri(n){function r(d){return ni(d,n)}if(0<Ls.length){ni(Ls[0],n);for(var a=1;a<Ls.length;a++){var c=Ls[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Yn!==null&&ni(Yn,n),Jn!==null&&ni(Jn,n),Dt!==null&&ni(Dt,n),Qi.forEach(r),wr.forEach(r),a=0;a<un.length;a++)c=un[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<un.length&&(a=un[0],a.blockedOn===null);)Ms(a),a.blockedOn===null&&un.shift()}var Tr=pe.ReactCurrentBatchConfig,Ir=!0;function Xn(n,r,a,c){var d=Ue,p=Tr.transition;Tr.transition=null;try{Ue=1,Go(n,r,a,c)}finally{Ue=d,Tr.transition=p}}function wl(n,r,a,c){var d=Ue,p=Tr.transition;Tr.transition=null;try{Ue=4,Go(n,r,a,c)}finally{Ue=d,Tr.transition=p}}function Go(n,r,a,c){if(Ir){var d=bs(n,r,a,c);if(d===null)xc(n,r,c,Zn,a),ti(n,c);else if(vl(d,n,r,a,c))c.stopPropagation();else if(ti(n,c),r&4&&-1<_l.indexOf(n)){for(;d!==null;){var p=aa(d);if(p!==null&&Ho(p),p=bs(n,r,a,c),p===null&&xc(n,r,c,Zn,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else xc(n,r,c,null,a)}}var Zn=null;function bs(n,r,a,c){if(Zn=null,n=Ps(c),n=Zi(n),n!==null)if(r=Nn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Mo(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Zn=n,null}function Fs(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_c()){case Ds:return 1;case Fo:return 4;case $i:case jo:return 16;case Vs:return 536870912;default:return 16}default:return 16}}var cn=null,js=null,Sr=null;function Tl(){if(Sr)return Sr;var n,r=js,a=r.length,c,d="value"in cn?cn.value:cn.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&r[a-c]===d[p-c];c++);return Sr=d.slice(n,1<c?1-c:void 0)}function Yi(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function er(){return!0}function Qo(){return!1}function Ut(n){function r(a,c,d,p,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(a=n[S],this[S]=a?a(p):p[S]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?er:Qo,this.isPropagationStopped=Qo,this}return ee(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=er)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=er)},persist:function(){},isPersistent:er}),r}var tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ji=Ut(tr),ii=ee({},tr,{view:0,detail:0}),Us=Ut(ii),zs,Bs,hn,Xi=ee({},ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ne,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==hn&&(hn&&n.type==="mousemove"?(zs=n.screenX-hn.screenX,Bs=n.screenY-hn.screenY):Bs=zs=0,hn=n),zs)},movementY:function(n){return"movementY"in n?n.movementY:Bs}}),Yo=Ut(Xi),Il=ee({},Xi,{dataTransfer:0}),Sl=Ut(Il),$s=ee({},ii,{relatedTarget:0}),Vt=Ut($s),Al=ee({},tr,{animationName:0,elapsedTime:0,pseudoElement:0}),kl=Ut(Al),si=ee({},tr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=Ut(si),m=ee({},tr,{data:0}),y=Ut(m),E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function te(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=U[n])?!!r[n]:!1}function Ne(){return te}var pt=ee({},ii,{key:function(n){if(n.key){var r=E[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Yi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?b[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ne,charCode:function(n){return n.type==="keypress"?Yi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Yi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Je=Ut(pt),yt=ee({},Xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dn=Ut(yt),Ar=ee({},ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ne}),nr=Ut(Ar),rr=ee({},tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hs=Ut(rr),Jo=ee({},Xi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Bv=Ut(Jo),$v=[9,13,27,32],wc=f&&"CompositionEvent"in window,Xo=null;f&&"documentMode"in document&&(Xo=document.documentMode);var Hv=f&&"TextEvent"in window&&!Xo,kf=f&&(!wc||Xo&&8<Xo&&11>=Xo),Rf=" ",Cf=!1;function Pf(n,r){switch(n){case"keyup":return $v.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ws=!1;function Wv(n,r){switch(n){case"compositionend":return Nf(r);case"keypress":return r.which!==32?null:(Cf=!0,Rf);case"textInput":return n=r.data,n===Rf&&Cf?null:n;default:return null}}function qv(n,r){if(Ws)return n==="compositionend"||!wc&&Pf(n,r)?(n=Tl(),Sr=js=cn=null,Ws=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return kf&&r.locale!=="ko"?null:r.data;default:return null}}var Kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Kv[n.type]:r==="textarea"}function Df(n,r,a,c){Yr(c),r=xl(r,"onChange"),0<r.length&&(a=new Ji("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var Zo=null,ea=null;function Gv(n){Yf(n,0)}function Rl(n){var r=Ys(n);if(ne(r))return n}function Qv(n,r){if(n==="change")return r}var Vf=!1;if(f){var Tc;if(f){var Ic="oninput"in document;if(!Ic){var Of=document.createElement("div");Of.setAttribute("oninput","return;"),Ic=typeof Of.oninput=="function"}Tc=Ic}else Tc=!1;Vf=Tc&&(!document.documentMode||9<document.documentMode)}function Lf(){Zo&&(Zo.detachEvent("onpropertychange",Mf),ea=Zo=null)}function Mf(n){if(n.propertyName==="value"&&Rl(ea)){var r=[];Df(r,ea,n,Ps(n)),cl(Gv,r)}}function Yv(n,r,a){n==="focusin"?(Lf(),Zo=r,ea=a,Zo.attachEvent("onpropertychange",Mf)):n==="focusout"&&Lf()}function Jv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Rl(ea)}function Xv(n,r){if(n==="click")return Rl(r)}function Zv(n,r){if(n==="input"||n==="change")return Rl(r)}function eE(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Dn=typeof Object.is=="function"?Object.is:eE;function ta(n,r){if(Dn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(r,d)||!Dn(n[d],r[d]))return!1}return!0}function bf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ff(n,r){var a=bf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=bf(a)}}function jf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?jf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Uf(){for(var n=window,r=ye();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=ye(n.document)}return r}function Sc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function tE(n){var r=Uf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&jf(a.ownerDocument.documentElement,a)){if(c!==null&&Sc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Ff(a,p);var v=Ff(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var nE=f&&"documentMode"in document&&11>=document.documentMode,qs=null,Ac=null,na=null,kc=!1;function zf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;kc||qs==null||qs!==ye(c)||(c=qs,"selectionStart"in c&&Sc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),na&&ta(na,c)||(na=c,c=xl(Ac,"onSelect"),0<c.length&&(r=new Ji("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=qs)))}function Cl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Ks={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionend:Cl("Transition","TransitionEnd")},Rc={},Bf={};f&&(Bf=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function Pl(n){if(Rc[n])return Rc[n];if(!Ks[n])return n;var r=Ks[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Bf)return Rc[n]=r[a];return n}var $f=Pl("animationend"),Hf=Pl("animationiteration"),Wf=Pl("animationstart"),qf=Pl("transitionend"),Kf=new Map,Gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function oi(n,r){Kf.set(n,r),u(r,[n])}for(var Cc=0;Cc<Gf.length;Cc++){var Pc=Gf[Cc],rE=Pc.toLowerCase(),iE=Pc[0].toUpperCase()+Pc.slice(1);oi(rE,"on"+iE)}oi($f,"onAnimationEnd"),oi(Hf,"onAnimationIteration"),oi(Wf,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(qf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function Qf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Lo(c,r,void 0,n),n.currentTarget=null}function Yf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var v=c.length-1;0<=v;v--){var S=c[v],P=S.instance,j=S.currentTarget;if(S=S.listener,P!==p&&d.isPropagationStopped())break e;Qf(d,S,j),p=P}else for(v=0;v<c.length;v++){if(S=c[v],P=S.instance,j=S.currentTarget,S=S.listener,P!==p&&d.isPropagationStopped())break e;Qf(d,S,j),p=P}}}if(Ns)throw n=_n,Ns=!1,_n=null,n}function rt(n,r){var a=r[bc];a===void 0&&(a=r[bc]=new Set);var c=n+"__bubble";a.has(c)||(Jf(r,n,2,!1),a.add(c))}function Nc(n,r,a){var c=0;r&&(c|=4),Jf(a,n,c,r)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function ia(n){if(!n[Nl]){n[Nl]=!0,s.forEach(function(a){a!=="selectionchange"&&(sE.has(a)||Nc(a,!1,n),Nc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Nl]||(r[Nl]=!0,Nc("selectionchange",!1,r))}}function Jf(n,r,a,c){switch(Fs(r)){case 1:var d=Xn;break;case 4:d=wl;break;default:d=Go}a=d.bind(null,r,a,n),d=void 0,!Xr||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function xc(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;S!==null;){if(v=Zi(S),v===null)return;if(P=v.tag,P===5||P===6){c=p=v;continue e}S=S.parentNode}}c=c.return}cl(function(){var j=p,q=Ps(a),Y=[];e:{var W=Kf.get(n);if(W!==void 0){var re=Ji,ae=n;switch(n){case"keypress":if(Yi(a)===0)break e;case"keydown":case"keyup":re=Je;break;case"focusin":ae="focus",re=Vt;break;case"focusout":ae="blur",re=Vt;break;case"beforeblur":case"afterblur":re=Vt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=Yo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=Sl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=nr;break;case $f:case Hf:case Wf:re=kl;break;case qf:re=Hs;break;case"scroll":re=Us;break;case"wheel":re=Bv;break;case"copy":case"cut":case"paste":re=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=dn}var le=(r&4)!==0,mt=!le&&n==="scroll",M=le?W!==null?W+"Capture":null:W;le=[];for(var D=j,F;D!==null;){F=D;var J=F.stateNode;if(F.tag===5&&J!==null&&(F=J,M!==null&&(J=Ui(D,M),J!=null&&le.push(sa(D,J,F)))),mt)break;D=D.return}0<le.length&&(W=new re(W,ae,null,a,q),Y.push({event:W,listeners:le}))}}if((r&7)===0){e:{if(W=n==="mouseover"||n==="pointerover",re=n==="mouseout"||n==="pointerout",W&&a!==Qr&&(ae=a.relatedTarget||a.fromElement)&&(Zi(ae)||ae[kr]))break e;if((re||W)&&(W=q.window===q?q:(W=q.ownerDocument)?W.defaultView||W.parentWindow:window,re?(ae=a.relatedTarget||a.toElement,re=j,ae=ae?Zi(ae):null,ae!==null&&(mt=Nn(ae),ae!==mt||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(re=null,ae=j),re!==ae)){if(le=Yo,J="onMouseLeave",M="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(le=dn,J="onPointerLeave",M="onPointerEnter",D="pointer"),mt=re==null?W:Ys(re),F=ae==null?W:Ys(ae),W=new le(J,D+"leave",re,a,q),W.target=mt,W.relatedTarget=F,J=null,Zi(q)===j&&(le=new le(M,D+"enter",ae,a,q),le.target=F,le.relatedTarget=mt,J=le),mt=J,re&&ae)t:{for(le=re,M=ae,D=0,F=le;F;F=Gs(F))D++;for(F=0,J=M;J;J=Gs(J))F++;for(;0<D-F;)le=Gs(le),D--;for(;0<F-D;)M=Gs(M),F--;for(;D--;){if(le===M||M!==null&&le===M.alternate)break t;le=Gs(le),M=Gs(M)}le=null}else le=null;re!==null&&Xf(Y,W,re,le,!1),ae!==null&&mt!==null&&Xf(Y,mt,ae,le,!0)}}e:{if(W=j?Ys(j):window,re=W.nodeName&&W.nodeName.toLowerCase(),re==="select"||re==="input"&&W.type==="file")var ce=Qv;else if(xf(W))if(Vf)ce=Zv;else{ce=Jv;var _e=Yv}else(re=W.nodeName)&&re.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(ce=Xv);if(ce&&(ce=ce(n,j))){Df(Y,ce,a,q);break e}_e&&_e(n,W,j),n==="focusout"&&(_e=W._wrapperState)&&_e.controlled&&W.type==="number"&&ft(W,"number",W.value)}switch(_e=j?Ys(j):window,n){case"focusin":(xf(_e)||_e.contentEditable==="true")&&(qs=_e,Ac=j,na=null);break;case"focusout":na=Ac=qs=null;break;case"mousedown":kc=!0;break;case"contextmenu":case"mouseup":case"dragend":kc=!1,zf(Y,a,q);break;case"selectionchange":if(nE)break;case"keydown":case"keyup":zf(Y,a,q)}var ve;if(wc)e:{switch(n){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else Ws?Pf(n,a)&&(Re="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Re="onCompositionStart");Re&&(kf&&a.locale!=="ko"&&(Ws||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&Ws&&(ve=Tl()):(cn=q,js="value"in cn?cn.value:cn.textContent,Ws=!0)),_e=xl(j,Re),0<_e.length&&(Re=new y(Re,n,null,a,q),Y.push({event:Re,listeners:_e}),ve?Re.data=ve:(ve=Nf(a),ve!==null&&(Re.data=ve)))),(ve=Hv?Wv(n,a):qv(n,a))&&(j=xl(j,"onBeforeInput"),0<j.length&&(q=new y("onBeforeInput","beforeinput",null,a,q),Y.push({event:q,listeners:j}),q.data=ve))}Yf(Y,r)})}function sa(n,r,a){return{instance:n,listener:r,currentTarget:a}}function xl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Ui(n,a),p!=null&&c.unshift(sa(n,p,d)),p=Ui(n,r),p!=null&&c.push(sa(n,p,d))),n=n.return}return c}function Gs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Xf(n,r,a,c,d){for(var p=r._reactName,v=[];a!==null&&a!==c;){var S=a,P=S.alternate,j=S.stateNode;if(P!==null&&P===c)break;S.tag===5&&j!==null&&(S=j,d?(P=Ui(a,p),P!=null&&v.unshift(sa(a,P,S))):d||(P=Ui(a,p),P!=null&&v.push(sa(a,P,S)))),a=a.return}v.length!==0&&n.push({event:r,listeners:v})}var oE=/\r\n?/g,aE=/\u0000|\uFFFD/g;function Zf(n){return(typeof n=="string"?n:""+n).replace(oE,`
`).replace(aE,"")}function Dl(n,r,a){if(r=Zf(r),Zf(n)!==r&&a)throw Error(t(425))}function Vl(){}var Dc=null,Vc=null;function Oc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Lc=typeof setTimeout=="function"?setTimeout:void 0,lE=typeof clearTimeout=="function"?clearTimeout:void 0,ep=typeof Promise=="function"?Promise:void 0,uE=typeof queueMicrotask=="function"?queueMicrotask:typeof ep<"u"?function(n){return ep.resolve(null).then(n).catch(cE)}:Lc;function cE(n){setTimeout(function(){throw n})}function Mc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),ri(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ri(r)}function ai(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function tp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),ir="__reactFiber$"+Qs,oa="__reactProps$"+Qs,kr="__reactContainer$"+Qs,bc="__reactEvents$"+Qs,hE="__reactListeners$"+Qs,dE="__reactHandles$"+Qs;function Zi(n){var r=n[ir];if(r)return r;for(var a=n.parentNode;a;){if(r=a[kr]||a[ir]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=tp(n);n!==null;){if(a=n[ir])return a;n=tp(n)}return r}n=a,a=n.parentNode}return null}function aa(n){return n=n[ir]||n[kr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ol(n){return n[oa]||null}var Fc=[],Js=-1;function li(n){return{current:n}}function it(n){0>Js||(n.current=Fc[Js],Fc[Js]=null,Js--)}function et(n,r){Js++,Fc[Js]=n.current,n.current=r}var ui={},zt=li(ui),Jt=li(!1),es=ui;function Xs(n,r){var a=n.type.contextTypes;if(!a)return ui;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Xt(n){return n=n.childContextTypes,n!=null}function Ll(){it(Jt),it(zt)}function np(n,r,a){if(zt.current!==ui)throw Error(t(168));et(zt,r),et(Jt,a)}function rp(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,De(n)||"Unknown",d));return ee({},a,c)}function Ml(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ui,es=zt.current,et(zt,n),et(Jt,Jt.current),!0}function ip(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=rp(n,r,es),c.__reactInternalMemoizedMergedChildContext=n,it(Jt),it(zt),et(zt,n)):it(Jt),et(Jt,a)}var Rr=null,bl=!1,jc=!1;function sp(n){Rr===null?Rr=[n]:Rr.push(n)}function fE(n){bl=!0,sp(n)}function ci(){if(!jc&&Rr!==null){jc=!0;var n=0,r=Ue;try{var a=Rr;for(Ue=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Rr=null,bl=!1}catch(d){throw Rr!==null&&(Rr=Rr.slice(n+1)),bo(Ds,ci),d}finally{Ue=r,jc=!1}}return null}var Zs=[],eo=0,Fl=null,jl=0,En=[],wn=0,ts=null,Cr=1,Pr="";function ns(n,r){Zs[eo++]=jl,Zs[eo++]=Fl,Fl=n,jl=r}function op(n,r,a){En[wn++]=Cr,En[wn++]=Pr,En[wn++]=ts,ts=n;var c=Cr;n=Pr;var d=32-ln(c)-1;c&=~(1<<d),a+=1;var p=32-ln(r)+d;if(30<p){var v=d-d%5;p=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Cr=1<<32-ln(r)+d|a<<d|c,Pr=p+n}else Cr=1<<p|a<<d|c,Pr=n}function Uc(n){n.return!==null&&(ns(n,1),op(n,1,0))}function zc(n){for(;n===Fl;)Fl=Zs[--eo],Zs[eo]=null,jl=Zs[--eo],Zs[eo]=null;for(;n===ts;)ts=En[--wn],En[wn]=null,Pr=En[--wn],En[wn]=null,Cr=En[--wn],En[wn]=null}var fn=null,pn=null,ot=!1,Vn=null;function ap(n,r){var a=An(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function lp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,fn=n,pn=ai(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,fn=n,pn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=ts!==null?{id:Cr,overflow:Pr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=An(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,fn=n,pn=null,!0):!1;default:return!1}}function Bc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function $c(n){if(ot){var r=pn;if(r){var a=r;if(!lp(n,r)){if(Bc(n))throw Error(t(418));r=ai(a.nextSibling);var c=fn;r&&lp(n,r)?ap(c,a):(n.flags=n.flags&-4097|2,ot=!1,fn=n)}}else{if(Bc(n))throw Error(t(418));n.flags=n.flags&-4097|2,ot=!1,fn=n}}}function up(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;fn=n}function Ul(n){if(n!==fn)return!1;if(!ot)return up(n),ot=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Oc(n.type,n.memoizedProps)),r&&(r=pn)){if(Bc(n))throw cp(),Error(t(418));for(;r;)ap(n,r),r=ai(r.nextSibling)}if(up(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){pn=ai(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}pn=null}}else pn=fn?ai(n.stateNode.nextSibling):null;return!0}function cp(){for(var n=pn;n;)n=ai(n.nextSibling)}function to(){pn=fn=null,ot=!1}function Hc(n){Vn===null?Vn=[n]:Vn.push(n)}var pE=pe.ReactCurrentBatchConfig;function la(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(v){var S=d.refs;v===null?delete S[p]:S[p]=v},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function zl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function hp(n){var r=n._init;return r(n._payload)}function dp(n){function r(M,D){if(n){var F=M.deletions;F===null?(M.deletions=[D],M.flags|=16):F.push(D)}}function a(M,D){if(!n)return null;for(;D!==null;)r(M,D),D=D.sibling;return null}function c(M,D){for(M=new Map;D!==null;)D.key!==null?M.set(D.key,D):M.set(D.index,D),D=D.sibling;return M}function d(M,D){return M=_i(M,D),M.index=0,M.sibling=null,M}function p(M,D,F){return M.index=F,n?(F=M.alternate,F!==null?(F=F.index,F<D?(M.flags|=2,D):F):(M.flags|=2,D)):(M.flags|=1048576,D)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function S(M,D,F,J){return D===null||D.tag!==6?(D=Lh(F,M.mode,J),D.return=M,D):(D=d(D,F),D.return=M,D)}function P(M,D,F,J){var ce=F.type;return ce===C?q(M,D,F.props.children,J,F.key):D!==null&&(D.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===tt&&hp(ce)===D.type)?(J=d(D,F.props),J.ref=la(M,D,F),J.return=M,J):(J=hu(F.type,F.key,F.props,null,M.mode,J),J.ref=la(M,D,F),J.return=M,J)}function j(M,D,F,J){return D===null||D.tag!==4||D.stateNode.containerInfo!==F.containerInfo||D.stateNode.implementation!==F.implementation?(D=Mh(F,M.mode,J),D.return=M,D):(D=d(D,F.children||[]),D.return=M,D)}function q(M,D,F,J,ce){return D===null||D.tag!==7?(D=cs(F,M.mode,J,ce),D.return=M,D):(D=d(D,F),D.return=M,D)}function Y(M,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Lh(""+D,M.mode,F),D.return=M,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case me:return F=hu(D.type,D.key,D.props,null,M.mode,F),F.ref=la(M,null,D),F.return=M,F;case we:return D=Mh(D,M.mode,F),D.return=M,D;case tt:var J=D._init;return Y(M,J(D._payload),F)}if(We(D)||ue(D))return D=cs(D,M.mode,F,null),D.return=M,D;zl(M,D)}return null}function W(M,D,F,J){var ce=D!==null?D.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ce!==null?null:S(M,D,""+F,J);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case me:return F.key===ce?P(M,D,F,J):null;case we:return F.key===ce?j(M,D,F,J):null;case tt:return ce=F._init,W(M,D,ce(F._payload),J)}if(We(F)||ue(F))return ce!==null?null:q(M,D,F,J,null);zl(M,F)}return null}function re(M,D,F,J,ce){if(typeof J=="string"&&J!==""||typeof J=="number")return M=M.get(F)||null,S(D,M,""+J,ce);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case me:return M=M.get(J.key===null?F:J.key)||null,P(D,M,J,ce);case we:return M=M.get(J.key===null?F:J.key)||null,j(D,M,J,ce);case tt:var _e=J._init;return re(M,D,F,_e(J._payload),ce)}if(We(J)||ue(J))return M=M.get(F)||null,q(D,M,J,ce,null);zl(D,J)}return null}function ae(M,D,F,J){for(var ce=null,_e=null,ve=D,Re=D=0,Pt=null;ve!==null&&Re<F.length;Re++){ve.index>Re?(Pt=ve,ve=null):Pt=ve.sibling;var qe=W(M,ve,F[Re],J);if(qe===null){ve===null&&(ve=Pt);break}n&&ve&&qe.alternate===null&&r(M,ve),D=p(qe,D,Re),_e===null?ce=qe:_e.sibling=qe,_e=qe,ve=Pt}if(Re===F.length)return a(M,ve),ot&&ns(M,Re),ce;if(ve===null){for(;Re<F.length;Re++)ve=Y(M,F[Re],J),ve!==null&&(D=p(ve,D,Re),_e===null?ce=ve:_e.sibling=ve,_e=ve);return ot&&ns(M,Re),ce}for(ve=c(M,ve);Re<F.length;Re++)Pt=re(ve,M,Re,F[Re],J),Pt!==null&&(n&&Pt.alternate!==null&&ve.delete(Pt.key===null?Re:Pt.key),D=p(Pt,D,Re),_e===null?ce=Pt:_e.sibling=Pt,_e=Pt);return n&&ve.forEach(function(vi){return r(M,vi)}),ot&&ns(M,Re),ce}function le(M,D,F,J){var ce=ue(F);if(typeof ce!="function")throw Error(t(150));if(F=ce.call(F),F==null)throw Error(t(151));for(var _e=ce=null,ve=D,Re=D=0,Pt=null,qe=F.next();ve!==null&&!qe.done;Re++,qe=F.next()){ve.index>Re?(Pt=ve,ve=null):Pt=ve.sibling;var vi=W(M,ve,qe.value,J);if(vi===null){ve===null&&(ve=Pt);break}n&&ve&&vi.alternate===null&&r(M,ve),D=p(vi,D,Re),_e===null?ce=vi:_e.sibling=vi,_e=vi,ve=Pt}if(qe.done)return a(M,ve),ot&&ns(M,Re),ce;if(ve===null){for(;!qe.done;Re++,qe=F.next())qe=Y(M,qe.value,J),qe!==null&&(D=p(qe,D,Re),_e===null?ce=qe:_e.sibling=qe,_e=qe);return ot&&ns(M,Re),ce}for(ve=c(M,ve);!qe.done;Re++,qe=F.next())qe=re(ve,M,Re,qe.value,J),qe!==null&&(n&&qe.alternate!==null&&ve.delete(qe.key===null?Re:qe.key),D=p(qe,D,Re),_e===null?ce=qe:_e.sibling=qe,_e=qe);return n&&ve.forEach(function(KE){return r(M,KE)}),ot&&ns(M,Re),ce}function mt(M,D,F,J){if(typeof F=="object"&&F!==null&&F.type===C&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case me:e:{for(var ce=F.key,_e=D;_e!==null;){if(_e.key===ce){if(ce=F.type,ce===C){if(_e.tag===7){a(M,_e.sibling),D=d(_e,F.props.children),D.return=M,M=D;break e}}else if(_e.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===tt&&hp(ce)===_e.type){a(M,_e.sibling),D=d(_e,F.props),D.ref=la(M,_e,F),D.return=M,M=D;break e}a(M,_e);break}else r(M,_e);_e=_e.sibling}F.type===C?(D=cs(F.props.children,M.mode,J,F.key),D.return=M,M=D):(J=hu(F.type,F.key,F.props,null,M.mode,J),J.ref=la(M,D,F),J.return=M,M=J)}return v(M);case we:e:{for(_e=F.key;D!==null;){if(D.key===_e)if(D.tag===4&&D.stateNode.containerInfo===F.containerInfo&&D.stateNode.implementation===F.implementation){a(M,D.sibling),D=d(D,F.children||[]),D.return=M,M=D;break e}else{a(M,D);break}else r(M,D);D=D.sibling}D=Mh(F,M.mode,J),D.return=M,M=D}return v(M);case tt:return _e=F._init,mt(M,D,_e(F._payload),J)}if(We(F))return ae(M,D,F,J);if(ue(F))return le(M,D,F,J);zl(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,D!==null&&D.tag===6?(a(M,D.sibling),D=d(D,F),D.return=M,M=D):(a(M,D),D=Lh(F,M.mode,J),D.return=M,M=D),v(M)):a(M,D)}return mt}var no=dp(!0),fp=dp(!1),Bl=li(null),$l=null,ro=null,Wc=null;function qc(){Wc=ro=$l=null}function Kc(n){var r=Bl.current;it(Bl),n._currentValue=r}function Gc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function io(n,r){$l=n,Wc=ro=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Zt=!0),n.firstContext=null)}function Tn(n){var r=n._currentValue;if(Wc!==n)if(n={context:n,memoizedValue:r,next:null},ro===null){if($l===null)throw Error(t(308));ro=n,$l.dependencies={lanes:0,firstContext:n}}else ro=ro.next=n;return r}var rs=null;function Qc(n){rs===null?rs=[n]:rs.push(n)}function pp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Qc(r)):(a.next=d.next,d.next=a),r.interleaved=a,Nr(n,c)}function Nr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var hi=!1;function Yc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function xr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function di(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(He&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,Nr(n,a)}return d=c.interleaved,d===null?(r.next=r,Qc(c)):(r.next=d.next,d.next=r),c.interleaved=r,Nr(n,a)}function Hl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,$o(n,a)}}function gp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=v:p=p.next=v,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Wl(n,r,a,c){var d=n.updateQueue;hi=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var P=S,j=P.next;P.next=null,v===null?p=j:v.next=j,v=P;var q=n.alternate;q!==null&&(q=q.updateQueue,S=q.lastBaseUpdate,S!==v&&(S===null?q.firstBaseUpdate=j:S.next=j,q.lastBaseUpdate=P))}if(p!==null){var Y=d.baseState;v=0,q=j=P=null,S=p;do{var W=S.lane,re=S.eventTime;if((c&W)===W){q!==null&&(q=q.next={eventTime:re,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ae=n,le=S;switch(W=r,re=a,le.tag){case 1:if(ae=le.payload,typeof ae=="function"){Y=ae.call(re,Y,W);break e}Y=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=le.payload,W=typeof ae=="function"?ae.call(re,Y,W):ae,W==null)break e;Y=ee({},Y,W);break e;case 2:hi=!0}}S.callback!==null&&S.lane!==0&&(n.flags|=64,W=d.effects,W===null?d.effects=[S]:W.push(S))}else re={eventTime:re,lane:W,tag:S.tag,payload:S.payload,callback:S.callback,next:null},q===null?(j=q=re,P=Y):q=q.next=re,v|=W;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;W=S,S=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);if(q===null&&(P=Y),d.baseState=P,d.firstBaseUpdate=j,d.lastBaseUpdate=q,r=d.shared.interleaved,r!==null){d=r;do v|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);os|=v,n.lanes=v,n.memoizedState=Y}}function yp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ua={},sr=li(ua),ca=li(ua),ha=li(ua);function is(n){if(n===ua)throw Error(t(174));return n}function Jc(n,r){switch(et(ha,r),et(ca,n),et(sr,ua),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ks(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ks(r,n)}it(sr),et(sr,r)}function so(){it(sr),it(ca),it(ha)}function _p(n){is(ha.current);var r=is(sr.current),a=ks(r,n.type);r!==a&&(et(ca,n),et(sr,a))}function Xc(n){ca.current===n&&(it(sr),it(ca))}var at=li(0);function ql(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Zc=[];function eh(){for(var n=0;n<Zc.length;n++)Zc[n]._workInProgressVersionPrimary=null;Zc.length=0}var Kl=pe.ReactCurrentDispatcher,th=pe.ReactCurrentBatchConfig,ss=0,lt=null,wt=null,Rt=null,Gl=!1,da=!1,fa=0,mE=0;function Bt(){throw Error(t(321))}function nh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Dn(n[a],r[a]))return!1;return!0}function rh(n,r,a,c,d,p){if(ss=p,lt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Kl.current=n===null||n.memoizedState===null?vE:EE,n=a(c,d),da){p=0;do{if(da=!1,fa=0,25<=p)throw Error(t(301));p+=1,Rt=wt=null,r.updateQueue=null,Kl.current=wE,n=a(c,d)}while(da)}if(Kl.current=Jl,r=wt!==null&&wt.next!==null,ss=0,Rt=wt=lt=null,Gl=!1,r)throw Error(t(300));return n}function ih(){var n=fa!==0;return fa=0,n}function or(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?lt.memoizedState=Rt=n:Rt=Rt.next=n,Rt}function In(){if(wt===null){var n=lt.alternate;n=n!==null?n.memoizedState:null}else n=wt.next;var r=Rt===null?lt.memoizedState:Rt.next;if(r!==null)Rt=r,wt=n;else{if(n===null)throw Error(t(310));wt=n,n={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Rt===null?lt.memoizedState=Rt=n:Rt=Rt.next=n}return Rt}function pa(n,r){return typeof r=="function"?r(n):r}function sh(n){var r=In(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=wt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var S=v=null,P=null,j=p;do{var q=j.lane;if((ss&q)===q)P!==null&&(P=P.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),c=j.hasEagerState?j.eagerState:n(c,j.action);else{var Y={lane:q,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};P===null?(S=P=Y,v=c):P=P.next=Y,lt.lanes|=q,os|=q}j=j.next}while(j!==null&&j!==p);P===null?v=c:P.next=S,Dn(c,r.memoizedState)||(Zt=!0),r.memoizedState=c,r.baseState=v,r.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,lt.lanes|=p,os|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function oh(n){var r=In(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do p=n(p,v.action),v=v.next;while(v!==d);Dn(p,r.memoizedState)||(Zt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function vp(){}function Ep(n,r){var a=lt,c=In(),d=r(),p=!Dn(c.memoizedState,d);if(p&&(c.memoizedState=d,Zt=!0),c=c.queue,ah(Ip.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||Rt!==null&&Rt.memoizedState.tag&1){if(a.flags|=2048,ma(9,Tp.bind(null,a,c,d,r),void 0,null),Ct===null)throw Error(t(349));(ss&30)!==0||wp(a,r,d)}return d}function wp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=lt.updateQueue,r===null?(r={lastEffect:null,stores:null},lt.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Tp(n,r,a,c){r.value=a,r.getSnapshot=c,Sp(r)&&Ap(n)}function Ip(n,r,a){return a(function(){Sp(r)&&Ap(n)})}function Sp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Dn(n,a)}catch{return!0}}function Ap(n){var r=Nr(n,1);r!==null&&bn(r,n,1,-1)}function kp(n){var r=or();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:n},r.queue=n,n=n.dispatch=_E.bind(null,lt,n),[r.memoizedState,n]}function ma(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=lt.updateQueue,r===null?(r={lastEffect:null,stores:null},lt.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function Rp(){return In().memoizedState}function Ql(n,r,a,c){var d=or();lt.flags|=n,d.memoizedState=ma(1|r,a,void 0,c===void 0?null:c)}function Yl(n,r,a,c){var d=In();c=c===void 0?null:c;var p=void 0;if(wt!==null){var v=wt.memoizedState;if(p=v.destroy,c!==null&&nh(c,v.deps)){d.memoizedState=ma(r,a,p,c);return}}lt.flags|=n,d.memoizedState=ma(1|r,a,p,c)}function Cp(n,r){return Ql(8390656,8,n,r)}function ah(n,r){return Yl(2048,8,n,r)}function Pp(n,r){return Yl(4,2,n,r)}function Np(n,r){return Yl(4,4,n,r)}function xp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Dp(n,r,a){return a=a!=null?a.concat([n]):null,Yl(4,4,xp.bind(null,r,n),a)}function lh(){}function Vp(n,r){var a=In();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&nh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Op(n,r){var a=In();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&nh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Lp(n,r,a){return(ss&21)===0?(n.baseState&&(n.baseState=!1,Zt=!0),n.memoizedState=a):(Dn(a,r)||(a=zo(),lt.lanes|=a,os|=a,n.baseState=!0),r)}function gE(n,r){var a=Ue;Ue=a!==0&&4>a?a:4,n(!0);var c=th.transition;th.transition={};try{n(!1),r()}finally{Ue=a,th.transition=c}}function Mp(){return In().memoizedState}function yE(n,r,a){var c=gi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},bp(n))Fp(r,a);else if(a=pp(n,r,a,c),a!==null){var d=Yt();bn(a,n,c,d),jp(a,r,c)}}function _E(n,r,a){var c=gi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(bp(n))Fp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var v=r.lastRenderedState,S=p(v,a);if(d.hasEagerState=!0,d.eagerState=S,Dn(S,v)){var P=r.interleaved;P===null?(d.next=d,Qc(r)):(d.next=P.next,P.next=d),r.interleaved=d;return}}catch{}finally{}a=pp(n,r,d,c),a!==null&&(d=Yt(),bn(a,n,c,d),jp(a,r,c))}}function bp(n){var r=n.alternate;return n===lt||r!==null&&r===lt}function Fp(n,r){da=Gl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function jp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,$o(n,a)}}var Jl={readContext:Tn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},vE={readContext:Tn,useCallback:function(n,r){return or().memoizedState=[n,r===void 0?null:r],n},useContext:Tn,useEffect:Cp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Ql(4194308,4,xp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Ql(4194308,4,n,r)},useInsertionEffect:function(n,r){return Ql(4,2,n,r)},useMemo:function(n,r){var a=or();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=or();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=yE.bind(null,lt,n),[c.memoizedState,n]},useRef:function(n){var r=or();return n={current:n},r.memoizedState=n},useState:kp,useDebugValue:lh,useDeferredValue:function(n){return or().memoizedState=n},useTransition:function(){var n=kp(!1),r=n[0];return n=gE.bind(null,n[1]),or().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=lt,d=or();if(ot){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),Ct===null)throw Error(t(349));(ss&30)!==0||wp(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,Cp(Ip.bind(null,c,p,n),[n]),c.flags|=2048,ma(9,Tp.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=or(),r=Ct.identifierPrefix;if(ot){var a=Pr,c=Cr;a=(c&~(1<<32-ln(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=fa++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=mE++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},EE={readContext:Tn,useCallback:Vp,useContext:Tn,useEffect:ah,useImperativeHandle:Dp,useInsertionEffect:Pp,useLayoutEffect:Np,useMemo:Op,useReducer:sh,useRef:Rp,useState:function(){return sh(pa)},useDebugValue:lh,useDeferredValue:function(n){var r=In();return Lp(r,wt.memoizedState,n)},useTransition:function(){var n=sh(pa)[0],r=In().memoizedState;return[n,r]},useMutableSource:vp,useSyncExternalStore:Ep,useId:Mp,unstable_isNewReconciler:!1},wE={readContext:Tn,useCallback:Vp,useContext:Tn,useEffect:ah,useImperativeHandle:Dp,useInsertionEffect:Pp,useLayoutEffect:Np,useMemo:Op,useReducer:oh,useRef:Rp,useState:function(){return oh(pa)},useDebugValue:lh,useDeferredValue:function(n){var r=In();return wt===null?r.memoizedState=n:Lp(r,wt.memoizedState,n)},useTransition:function(){var n=oh(pa)[0],r=In().memoizedState;return[n,r]},useMutableSource:vp,useSyncExternalStore:Ep,useId:Mp,unstable_isNewReconciler:!1};function On(n,r){if(n&&n.defaultProps){r=ee({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function uh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ee({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Xl={isMounted:function(n){return(n=n._reactInternals)?Nn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Yt(),d=gi(n),p=xr(c,d);p.payload=r,a!=null&&(p.callback=a),r=di(n,p,d),r!==null&&(bn(r,n,d,c),Hl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Yt(),d=gi(n),p=xr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=di(n,p,d),r!==null&&(bn(r,n,d,c),Hl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Yt(),c=gi(n),d=xr(a,c);d.tag=2,r!=null&&(d.callback=r),r=di(n,d,c),r!==null&&(bn(r,n,c,a),Hl(r,n,c))}};function Up(n,r,a,c,d,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,v):r.prototype&&r.prototype.isPureReactComponent?!ta(a,c)||!ta(d,p):!0}function zp(n,r,a){var c=!1,d=ui,p=r.contextType;return typeof p=="object"&&p!==null?p=Tn(p):(d=Xt(r)?es:zt.current,c=r.contextTypes,p=(c=c!=null)?Xs(n,d):ui),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Xl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function Bp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Xl.enqueueReplaceState(r,r.state,null)}function ch(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Yc(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=Tn(p):(p=Xt(r)?es:zt.current,d.context=Xs(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(uh(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Xl.enqueueReplaceState(d,d.state,null),Wl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function oo(n,r){try{var a="",c=r;do a+=Ie(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function hh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function dh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var TE=typeof WeakMap=="function"?WeakMap:Map;function $p(n,r,a){a=xr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){su||(su=!0,Rh=c),dh(n,r)},a}function Hp(n,r,a){a=xr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){dh(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){dh(n,r),typeof c!="function"&&(pi===null?pi=new Set([this]):pi.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),a}function Wp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new TE;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=ME.bind(null,n,r,a),r.then(n,n))}function qp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Kp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=xr(-1,1),r.tag=2,di(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var IE=pe.ReactCurrentOwner,Zt=!1;function Qt(n,r,a,c){r.child=n===null?fp(r,null,a,c):no(r,n.child,a,c)}function Gp(n,r,a,c,d){a=a.render;var p=r.ref;return io(r,d),c=rh(n,r,a,c,p,d),a=ih(),n!==null&&!Zt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Dr(n,r,d)):(ot&&a&&Uc(r),r.flags|=1,Qt(n,r,c,d),r.child)}function Qp(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Oh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,Yp(n,r,p,c,d)):(n=hu(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var v=p.memoizedProps;if(a=a.compare,a=a!==null?a:ta,a(v,c)&&n.ref===r.ref)return Dr(n,r,d)}return r.flags|=1,n=_i(p,c),n.ref=r.ref,n.return=r,r.child=n}function Yp(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(ta(p,c)&&n.ref===r.ref)if(Zt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Zt=!0);else return r.lanes=n.lanes,Dr(n,r,d)}return fh(n,r,a,c,d)}function Jp(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(lo,mn),mn|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,et(lo,mn),mn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,et(lo,mn),mn|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,et(lo,mn),mn|=c;return Qt(n,r,d,a),r.child}function Xp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function fh(n,r,a,c,d){var p=Xt(a)?es:zt.current;return p=Xs(r,p),io(r,d),a=rh(n,r,a,c,p,d),c=ih(),n!==null&&!Zt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Dr(n,r,d)):(ot&&c&&Uc(r),r.flags|=1,Qt(n,r,a,d),r.child)}function Zp(n,r,a,c,d){if(Xt(a)){var p=!0;Ml(r)}else p=!1;if(io(r,d),r.stateNode===null)eu(n,r),zp(r,a,c),ch(r,a,c,d),c=!0;else if(n===null){var v=r.stateNode,S=r.memoizedProps;v.props=S;var P=v.context,j=a.contextType;typeof j=="object"&&j!==null?j=Tn(j):(j=Xt(a)?es:zt.current,j=Xs(r,j));var q=a.getDerivedStateFromProps,Y=typeof q=="function"||typeof v.getSnapshotBeforeUpdate=="function";Y||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||P!==j)&&Bp(r,v,c,j),hi=!1;var W=r.memoizedState;v.state=W,Wl(r,c,v,d),P=r.memoizedState,S!==c||W!==P||Jt.current||hi?(typeof q=="function"&&(uh(r,a,q,c),P=r.memoizedState),(S=hi||Up(r,a,S,c,W,P,j))?(Y||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=P),v.props=c,v.state=P,v.context=j,c=S):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{v=r.stateNode,mp(n,r),S=r.memoizedProps,j=r.type===r.elementType?S:On(r.type,S),v.props=j,Y=r.pendingProps,W=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=Tn(P):(P=Xt(a)?es:zt.current,P=Xs(r,P));var re=a.getDerivedStateFromProps;(q=typeof re=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==Y||W!==P)&&Bp(r,v,c,P),hi=!1,W=r.memoizedState,v.state=W,Wl(r,c,v,d);var ae=r.memoizedState;S!==Y||W!==ae||Jt.current||hi?(typeof re=="function"&&(uh(r,a,re,c),ae=r.memoizedState),(j=hi||Up(r,a,j,c,W,ae,P)||!1)?(q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ae,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ae,P)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&W===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&W===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ae),v.props=c,v.state=ae,v.context=P,c=j):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&W===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&W===n.memoizedState||(r.flags|=1024),c=!1)}return ph(n,r,a,c,p,d)}function ph(n,r,a,c,d,p){Xp(n,r);var v=(r.flags&128)!==0;if(!c&&!v)return d&&ip(r,a,!1),Dr(n,r,p);c=r.stateNode,IE.current=r;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&v?(r.child=no(r,n.child,null,p),r.child=no(r,null,S,p)):Qt(n,r,S,p),r.memoizedState=c.state,d&&ip(r,a,!0),r.child}function em(n){var r=n.stateNode;r.pendingContext?np(n,r.pendingContext,r.pendingContext!==r.context):r.context&&np(n,r.context,!1),Jc(n,r.containerInfo)}function tm(n,r,a,c,d){return to(),Hc(d),r.flags|=256,Qt(n,r,a,c),r.child}var mh={dehydrated:null,treeContext:null,retryLane:0};function gh(n){return{baseLanes:n,cachePool:null,transitions:null}}function nm(n,r,a){var c=r.pendingProps,d=at.current,p=!1,v=(r.flags&128)!==0,S;if((S=v)||(S=n!==null&&n.memoizedState===null?!1:(d&2)!==0),S?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),et(at,d&1),n===null)return $c(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(v=c.children,n=c.fallback,p?(c=r.mode,p=r.child,v={mode:"hidden",children:v},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=du(v,c,0,null),n=cs(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=gh(a),r.memoizedState=mh,n):yh(r,v));if(d=n.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return SE(n,r,v,c,S,d,a);if(p){p=c.fallback,v=r.mode,d=n.child,S=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=P,r.deletions=null):(c=_i(d,P),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?p=_i(S,p):(p=cs(p,v,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,v=n.child.memoizedState,v=v===null?gh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=n.childLanes&~a,r.memoizedState=mh,c}return p=n.child,n=p.sibling,c=_i(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function yh(n,r){return r=du({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Zl(n,r,a,c){return c!==null&&Hc(c),no(r,n.child,null,a),n=yh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function SE(n,r,a,c,d,p,v){if(a)return r.flags&256?(r.flags&=-257,c=hh(Error(t(422))),Zl(n,r,v,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=du({mode:"visible",children:c.children},d,0,null),p=cs(p,d,v,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&no(r,n.child,null,v),r.child.memoizedState=gh(v),r.memoizedState=mh,p);if((r.mode&1)===0)return Zl(n,r,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,p=Error(t(419)),c=hh(p,c,void 0),Zl(n,r,v,c)}if(S=(v&n.childLanes)!==0,Zt||S){if(c=Ct,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Nr(n,d),bn(c,n,d,-1))}return Vh(),c=hh(Error(t(421))),Zl(n,r,v,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=bE.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,pn=ai(d.nextSibling),fn=r,ot=!0,Vn=null,n!==null&&(En[wn++]=Cr,En[wn++]=Pr,En[wn++]=ts,Cr=n.id,Pr=n.overflow,ts=r),r=yh(r,c.children),r.flags|=4096,r)}function rm(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Gc(n.return,r,a)}function _h(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function im(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(Qt(n,r,c.children,a),c=at.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&rm(n,a,r);else if(n.tag===19)rm(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(et(at,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&ql(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),_h(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&ql(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}_h(r,!0,a,null,p);break;case"together":_h(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function eu(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Dr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),os|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=_i(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=_i(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function AE(n,r,a){switch(r.tag){case 3:em(r),to();break;case 5:_p(r);break;case 1:Xt(r.type)&&Ml(r);break;case 4:Jc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;et(Bl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(et(at,at.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?nm(n,r,a):(et(at,at.current&1),n=Dr(n,r,a),n!==null?n.sibling:null);et(at,at.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return im(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),et(at,at.current),c)break;return null;case 22:case 23:return r.lanes=0,Jp(n,r,a)}return Dr(n,r,a)}var sm,vh,om,am;sm=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},vh=function(){},om=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,is(sr.current);var p=null;switch(a){case"input":d=de(n,d),c=de(n,c),p=[];break;case"select":d=ee({},d,{value:void 0}),c=ee({},c,{value:void 0}),p=[];break;case"textarea":d=Bn(n,d),c=Bn(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Vl)}Pn(a,c);var v;a=null;for(j in d)if(!c.hasOwnProperty(j)&&d.hasOwnProperty(j)&&d[j]!=null)if(j==="style"){var S=d[j];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?p||(p=[]):(p=p||[]).push(j,null));for(j in c){var P=c[j];if(S=d!=null?d[j]:void 0,c.hasOwnProperty(j)&&P!==S&&(P!=null||S!=null))if(j==="style")if(S){for(v in S)!S.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&S[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(p||(p=[]),p.push(j,a)),a=P;else j==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(p=p||[]).push(j,P)):j==="children"?typeof P!="string"&&typeof P!="number"||(p=p||[]).push(j,""+P):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(P!=null&&j==="onScroll"&&rt("scroll",n),p||S===P||(p=[])):(p=p||[]).push(j,P))}a&&(p=p||[]).push("style",a);var j=p;(r.updateQueue=j)&&(r.flags|=4)}},am=function(n,r,a,c){a!==c&&(r.flags|=4)};function ga(n,r){if(!ot)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function $t(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function kE(n,r,a){var c=r.pendingProps;switch(zc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(r),null;case 1:return Xt(r.type)&&Ll(),$t(r),null;case 3:return c=r.stateNode,so(),it(Jt),it(zt),eh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ul(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Vn!==null&&(Nh(Vn),Vn=null))),vh(n,r),$t(r),null;case 5:Xc(r);var d=is(ha.current);if(a=r.type,n!==null&&r.stateNode!=null)om(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return $t(r),null}if(n=is(sr.current),Ul(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[ir]=r,c[oa]=p,n=(r.mode&1)!==0,a){case"dialog":rt("cancel",c),rt("close",c);break;case"iframe":case"object":case"embed":rt("load",c);break;case"video":case"audio":for(d=0;d<ra.length;d++)rt(ra[d],c);break;case"source":rt("error",c);break;case"img":case"image":case"link":rt("error",c),rt("load",c);break;case"details":rt("toggle",c);break;case"input":$e(c,p),rt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},rt("invalid",c);break;case"textarea":on(c,p),rt("invalid",c)}Pn(a,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var S=p[v];v==="children"?typeof S=="string"?c.textContent!==S&&(p.suppressHydrationWarning!==!0&&Dl(c.textContent,S,n),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(p.suppressHydrationWarning!==!0&&Dl(c.textContent,S,n),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&rt("scroll",c)}switch(a){case"input":Wr(c),jt(c,p,!0);break;case"textarea":Wr(c),$n(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Vl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=mr(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[ir]=r,n[oa]=c,sm(n,r,!1,!1),r.stateNode=n;e:{switch(v=Cs(a,c),a){case"dialog":rt("cancel",n),rt("close",n),d=c;break;case"iframe":case"object":case"embed":rt("load",n),d=c;break;case"video":case"audio":for(d=0;d<ra.length;d++)rt(ra[d],n);d=c;break;case"source":rt("error",n),d=c;break;case"img":case"image":case"link":rt("error",n),rt("load",n),d=c;break;case"details":rt("toggle",n),d=c;break;case"input":$e(n,c),d=de(n,c),rt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ee({},c,{value:void 0}),rt("invalid",n);break;case"textarea":on(n,c),d=Bn(n,c),rt("invalid",n);break;default:d=c}Pn(a,d),S=d;for(p in S)if(S.hasOwnProperty(p)){var P=S[p];p==="style"?Rs(n,P):p==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&ol(n,P)):p==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&ji(n,P):typeof P=="number"&&ji(n,""+P):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?P!=null&&p==="onScroll"&&rt("scroll",n):P!=null&&oe(n,p,P,v))}switch(a){case"input":Wr(n),jt(n,c,!1);break;case"textarea":Wr(n),$n(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Fe(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?sn(n,!!c.multiple,p,!1):c.defaultValue!=null&&sn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Vl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return $t(r),null;case 6:if(n&&r.stateNode!=null)am(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=is(ha.current),is(sr.current),Ul(r)){if(c=r.stateNode,a=r.memoizedProps,c[ir]=r,(p=c.nodeValue!==a)&&(n=fn,n!==null))switch(n.tag){case 3:Dl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Dl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[ir]=r,r.stateNode=c}return $t(r),null;case 13:if(it(at),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(ot&&pn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)cp(),to(),r.flags|=98560,p=!1;else if(p=Ul(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[ir]=r}else to(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;$t(r),p=!1}else Vn!==null&&(Nh(Vn),Vn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(at.current&1)!==0?Tt===0&&(Tt=3):Vh())),r.updateQueue!==null&&(r.flags|=4),$t(r),null);case 4:return so(),vh(n,r),n===null&&ia(r.stateNode.containerInfo),$t(r),null;case 10:return Kc(r.type._context),$t(r),null;case 17:return Xt(r.type)&&Ll(),$t(r),null;case 19:if(it(at),p=r.memoizedState,p===null)return $t(r),null;if(c=(r.flags&128)!==0,v=p.rendering,v===null)if(c)ga(p,!1);else{if(Tt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(v=ql(n),v!==null){for(r.flags|=128,ga(p,!1),c=v.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,n=v.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return et(at,at.current&1|2),r.child}n=n.sibling}p.tail!==null&&nt()>uo&&(r.flags|=128,c=!0,ga(p,!1),r.lanes=4194304)}else{if(!c)if(n=ql(v),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),ga(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!ot)return $t(r),null}else 2*nt()-p.renderingStartTime>uo&&a!==1073741824&&(r.flags|=128,c=!0,ga(p,!1),r.lanes=4194304);p.isBackwards?(v.sibling=r.child,r.child=v):(a=p.last,a!==null?a.sibling=v:r.child=v,p.last=v)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=nt(),r.sibling=null,a=at.current,et(at,c?a&1|2:a&1),r):($t(r),null);case 22:case 23:return Dh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(mn&1073741824)!==0&&($t(r),r.subtreeFlags&6&&(r.flags|=8192)):$t(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function RE(n,r){switch(zc(r),r.tag){case 1:return Xt(r.type)&&Ll(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return so(),it(Jt),it(zt),eh(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Xc(r),null;case 13:if(it(at),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));to()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return it(at),null;case 4:return so(),null;case 10:return Kc(r.type._context),null;case 22:case 23:return Dh(),null;case 24:return null;default:return null}}var tu=!1,Ht=!1,CE=typeof WeakSet=="function"?WeakSet:Set,se=null;function ao(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){dt(n,r,c)}else a.current=null}function Eh(n,r,a){try{a()}catch(c){dt(n,r,c)}}var lm=!1;function PE(n,r){if(Dc=Ir,n=Uf(),Sc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var v=0,S=-1,P=-1,j=0,q=0,Y=n,W=null;t:for(;;){for(var re;Y!==a||d!==0&&Y.nodeType!==3||(S=v+d),Y!==p||c!==0&&Y.nodeType!==3||(P=v+c),Y.nodeType===3&&(v+=Y.nodeValue.length),(re=Y.firstChild)!==null;)W=Y,Y=re;for(;;){if(Y===n)break t;if(W===a&&++j===d&&(S=v),W===p&&++q===c&&(P=v),(re=Y.nextSibling)!==null)break;Y=W,W=Y.parentNode}Y=re}a=S===-1||P===-1?null:{start:S,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vc={focusedElem:n,selectionRange:a},Ir=!1,se=r;se!==null;)if(r=se,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,se=n;else for(;se!==null;){r=se;try{var ae=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var le=ae.memoizedProps,mt=ae.memoizedState,M=r.stateNode,D=M.getSnapshotBeforeUpdate(r.elementType===r.type?le:On(r.type,le),mt);M.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var F=r.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){dt(r,r.return,J)}if(n=r.sibling,n!==null){n.return=r.return,se=n;break}se=r.return}return ae=lm,lm=!1,ae}function ya(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Eh(r,a,p)}d=d.next}while(d!==c)}}function nu(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function wh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function um(n){var r=n.alternate;r!==null&&(n.alternate=null,um(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[ir],delete r[oa],delete r[bc],delete r[hE],delete r[dE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function cm(n){return n.tag===5||n.tag===3||n.tag===4}function hm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||cm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Th(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Vl));else if(c!==4&&(n=n.child,n!==null))for(Th(n,r,a),n=n.sibling;n!==null;)Th(n,r,a),n=n.sibling}function Ih(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Ih(n,r,a),n=n.sibling;n!==null;)Ih(n,r,a),n=n.sibling}var Ot=null,Ln=!1;function fi(n,r,a){for(a=a.child;a!==null;)dm(n,r,a),a=a.sibling}function dm(n,r,a){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(Hi,a)}catch{}switch(a.tag){case 5:Ht||ao(a,r);case 6:var c=Ot,d=Ln;Ot=null,fi(n,r,a),Ot=c,Ln=d,Ot!==null&&(Ln?(n=Ot,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Ot.removeChild(a.stateNode));break;case 18:Ot!==null&&(Ln?(n=Ot,a=a.stateNode,n.nodeType===8?Mc(n.parentNode,a):n.nodeType===1&&Mc(n,a),ri(n)):Mc(Ot,a.stateNode));break;case 4:c=Ot,d=Ln,Ot=a.stateNode.containerInfo,Ln=!0,fi(n,r,a),Ot=c,Ln=d;break;case 0:case 11:case 14:case 15:if(!Ht&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&Eh(a,r,v),d=d.next}while(d!==c)}fi(n,r,a);break;case 1:if(!Ht&&(ao(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){dt(a,r,S)}fi(n,r,a);break;case 21:fi(n,r,a);break;case 22:a.mode&1?(Ht=(c=Ht)||a.memoizedState!==null,fi(n,r,a),Ht=c):fi(n,r,a);break;default:fi(n,r,a)}}function fm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new CE),r.forEach(function(c){var d=FE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Mn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,v=r,S=v;e:for(;S!==null;){switch(S.tag){case 5:Ot=S.stateNode,Ln=!1;break e;case 3:Ot=S.stateNode.containerInfo,Ln=!0;break e;case 4:Ot=S.stateNode.containerInfo,Ln=!0;break e}S=S.return}if(Ot===null)throw Error(t(160));dm(p,v,d),Ot=null,Ln=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(j){dt(d,r,j)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)pm(r,n),r=r.sibling}function pm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Mn(r,n),ar(n),c&4){try{ya(3,n,n.return),nu(3,n)}catch(le){dt(n,n.return,le)}try{ya(5,n,n.return)}catch(le){dt(n,n.return,le)}}break;case 1:Mn(r,n),ar(n),c&512&&a!==null&&ao(a,a.return);break;case 5:if(Mn(r,n),ar(n),c&512&&a!==null&&ao(a,a.return),n.flags&32){var d=n.stateNode;try{ji(d,"")}catch(le){dt(n,n.return,le)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,v=a!==null?a.memoizedProps:p,S=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{S==="input"&&p.type==="radio"&&p.name!=null&&ze(d,p),Cs(S,v);var j=Cs(S,p);for(v=0;v<P.length;v+=2){var q=P[v],Y=P[v+1];q==="style"?Rs(d,Y):q==="dangerouslySetInnerHTML"?ol(d,Y):q==="children"?ji(d,Y):oe(d,q,Y,j)}switch(S){case"input":je(d,p);break;case"textarea":kt(d,p);break;case"select":var W=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var re=p.value;re!=null?sn(d,!!p.multiple,re,!1):W!==!!p.multiple&&(p.defaultValue!=null?sn(d,!!p.multiple,p.defaultValue,!0):sn(d,!!p.multiple,p.multiple?[]:"",!1))}d[oa]=p}catch(le){dt(n,n.return,le)}}break;case 6:if(Mn(r,n),ar(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(le){dt(n,n.return,le)}}break;case 3:if(Mn(r,n),ar(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ri(r.containerInfo)}catch(le){dt(n,n.return,le)}break;case 4:Mn(r,n),ar(n);break;case 13:Mn(r,n),ar(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(kh=nt())),c&4&&fm(n);break;case 22:if(q=a!==null&&a.memoizedState!==null,n.mode&1?(Ht=(j=Ht)||q,Mn(r,n),Ht=j):Mn(r,n),ar(n),c&8192){if(j=n.memoizedState!==null,(n.stateNode.isHidden=j)&&!q&&(n.mode&1)!==0)for(se=n,q=n.child;q!==null;){for(Y=se=q;se!==null;){switch(W=se,re=W.child,W.tag){case 0:case 11:case 14:case 15:ya(4,W,W.return);break;case 1:ao(W,W.return);var ae=W.stateNode;if(typeof ae.componentWillUnmount=="function"){c=W,a=W.return;try{r=c,ae.props=r.memoizedProps,ae.state=r.memoizedState,ae.componentWillUnmount()}catch(le){dt(c,a,le)}}break;case 5:ao(W,W.return);break;case 22:if(W.memoizedState!==null){ym(Y);continue}}re!==null?(re.return=W,se=re):ym(Y)}q=q.sibling}e:for(q=null,Y=n;;){if(Y.tag===5){if(q===null){q=Y;try{d=Y.stateNode,j?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(S=Y.stateNode,P=Y.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=Gr("display",v))}catch(le){dt(n,n.return,le)}}}else if(Y.tag===6){if(q===null)try{Y.stateNode.nodeValue=j?"":Y.memoizedProps}catch(le){dt(n,n.return,le)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===n)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===n)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===n)break e;q===Y&&(q=null),Y=Y.return}q===Y&&(q=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:Mn(r,n),ar(n),c&4&&fm(n);break;case 21:break;default:Mn(r,n),ar(n)}}function ar(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(cm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(ji(d,""),c.flags&=-33);var p=hm(n);Ih(n,p,d);break;case 3:case 4:var v=c.stateNode.containerInfo,S=hm(n);Th(n,S,v);break;default:throw Error(t(161))}}catch(P){dt(n,n.return,P)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function NE(n,r,a){se=n,mm(n)}function mm(n,r,a){for(var c=(n.mode&1)!==0;se!==null;){var d=se,p=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||tu;if(!v){var S=d.alternate,P=S!==null&&S.memoizedState!==null||Ht;S=tu;var j=Ht;if(tu=v,(Ht=P)&&!j)for(se=d;se!==null;)v=se,P=v.child,v.tag===22&&v.memoizedState!==null?_m(d):P!==null?(P.return=v,se=P):_m(d);for(;p!==null;)se=p,mm(p),p=p.sibling;se=d,tu=S,Ht=j}gm(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,se=p):gm(n)}}function gm(n){for(;se!==null;){var r=se;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ht||nu(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Ht)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:On(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&yp(r,p,c);break;case 3:var v=r.updateQueue;if(v!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}yp(r,v,a)}break;case 5:var S=r.stateNode;if(a===null&&r.flags&4){a=S;var P=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var j=r.alternate;if(j!==null){var q=j.memoizedState;if(q!==null){var Y=q.dehydrated;Y!==null&&ri(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ht||r.flags&512&&wh(r)}catch(W){dt(r,r.return,W)}}if(r===n){se=null;break}if(a=r.sibling,a!==null){a.return=r.return,se=a;break}se=r.return}}function ym(n){for(;se!==null;){var r=se;if(r===n){se=null;break}var a=r.sibling;if(a!==null){a.return=r.return,se=a;break}se=r.return}}function _m(n){for(;se!==null;){var r=se;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{nu(4,r)}catch(P){dt(r,a,P)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(P){dt(r,d,P)}}var p=r.return;try{wh(r)}catch(P){dt(r,p,P)}break;case 5:var v=r.return;try{wh(r)}catch(P){dt(r,v,P)}}}catch(P){dt(r,r.return,P)}if(r===n){se=null;break}var S=r.sibling;if(S!==null){S.return=r.return,se=S;break}se=r.return}}var xE=Math.ceil,ru=pe.ReactCurrentDispatcher,Sh=pe.ReactCurrentOwner,Sn=pe.ReactCurrentBatchConfig,He=0,Ct=null,_t=null,Lt=0,mn=0,lo=li(0),Tt=0,_a=null,os=0,iu=0,Ah=0,va=null,en=null,kh=0,uo=1/0,Vr=null,su=!1,Rh=null,pi=null,ou=!1,mi=null,au=0,Ea=0,Ch=null,lu=-1,uu=0;function Yt(){return(He&6)!==0?nt():lu!==-1?lu:lu=nt()}function gi(n){return(n.mode&1)===0?1:(He&2)!==0&&Lt!==0?Lt&-Lt:pE.transition!==null?(uu===0&&(uu=zo()),uu):(n=Ue,n!==0||(n=window.event,n=n===void 0?16:Fs(n.type)),n)}function bn(n,r,a,c){if(50<Ea)throw Ea=0,Ch=null,Error(t(185));Gi(n,a,c),((He&2)===0||n!==Ct)&&(n===Ct&&((He&2)===0&&(iu|=a),Tt===4&&yi(n,Lt)),tn(n,c),a===1&&He===0&&(r.mode&1)===0&&(uo=nt()+500,bl&&ci()))}function tn(n,r){var a=n.callbackNode;Ki(n,r);var c=Er(n,n===Ct?Lt:0);if(c===0)a!==null&&xs(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&xs(a),r===1)n.tag===0?fE(Em.bind(null,n)):sp(Em.bind(null,n)),uE(function(){(He&6)===0&&ci()}),a=null;else{switch(Gn(c)){case 1:a=Ds;break;case 4:a=Fo;break;case 16:a=$i;break;case 536870912:a=Vs;break;default:a=$i}a=Cm(a,vm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function vm(n,r){if(lu=-1,uu=0,(He&6)!==0)throw Error(t(327));var a=n.callbackNode;if(co()&&n.callbackNode!==a)return null;var c=Er(n,n===Ct?Lt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=cu(n,c);else{r=c;var d=He;He|=2;var p=Tm();(Ct!==n||Lt!==r)&&(Vr=null,uo=nt()+500,ls(n,r));do try{OE();break}catch(S){wm(n,S)}while(!0);qc(),ru.current=p,He=d,_t!==null?r=0:(Ct=null,Lt=0,r=Tt)}if(r!==0){if(r===2&&(d=Uo(n),d!==0&&(c=d,r=Ph(n,d))),r===1)throw a=_a,ls(n,0),yi(n,c),tn(n,nt()),a;if(r===6)yi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!DE(d)&&(r=cu(n,c),r===2&&(p=Uo(n),p!==0&&(c=p,r=Ph(n,p))),r===1))throw a=_a,ls(n,0),yi(n,c),tn(n,nt()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:us(n,en,Vr);break;case 3:if(yi(n,c),(c&130023424)===c&&(r=kh+500-nt(),10<r)){if(Er(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Yt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Lc(us.bind(null,n,en,Vr),r);break}us(n,en,Vr);break;case 4:if(yi(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var v=31-ln(c);p=1<<v,v=r[v],v>d&&(d=v),c&=~p}if(c=d,c=nt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*xE(c/1960))-c,10<c){n.timeoutHandle=Lc(us.bind(null,n,en,Vr),c);break}us(n,en,Vr);break;case 5:us(n,en,Vr);break;default:throw Error(t(329))}}}return tn(n,nt()),n.callbackNode===a?vm.bind(null,n):null}function Ph(n,r){var a=va;return n.current.memoizedState.isDehydrated&&(ls(n,r).flags|=256),n=cu(n,r),n!==2&&(r=en,en=a,r!==null&&Nh(r)),n}function Nh(n){en===null?en=n:en.push.apply(en,n)}function DE(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Dn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function yi(n,r){for(r&=~Ah,r&=~iu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-ln(r),c=1<<a;n[a]=-1,r&=~c}}function Em(n){if((He&6)!==0)throw Error(t(327));co();var r=Er(n,0);if((r&1)===0)return tn(n,nt()),null;var a=cu(n,r);if(n.tag!==0&&a===2){var c=Uo(n);c!==0&&(r=c,a=Ph(n,c))}if(a===1)throw a=_a,ls(n,0),yi(n,r),tn(n,nt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,us(n,en,Vr),tn(n,nt()),null}function xh(n,r){var a=He;He|=1;try{return n(r)}finally{He=a,He===0&&(uo=nt()+500,bl&&ci())}}function as(n){mi!==null&&mi.tag===0&&(He&6)===0&&co();var r=He;He|=1;var a=Sn.transition,c=Ue;try{if(Sn.transition=null,Ue=1,n)return n()}finally{Ue=c,Sn.transition=a,He=r,(He&6)===0&&ci()}}function Dh(){mn=lo.current,it(lo)}function ls(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,lE(a)),_t!==null)for(a=_t.return;a!==null;){var c=a;switch(zc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ll();break;case 3:so(),it(Jt),it(zt),eh();break;case 5:Xc(c);break;case 4:so();break;case 13:it(at);break;case 19:it(at);break;case 10:Kc(c.type._context);break;case 22:case 23:Dh()}a=a.return}if(Ct=n,_t=n=_i(n.current,null),Lt=mn=r,Tt=0,_a=null,Ah=iu=os=0,en=va=null,rs!==null){for(r=0;r<rs.length;r++)if(a=rs[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var v=p.next;p.next=d,c.next=v}a.pending=c}rs=null}return n}function wm(n,r){do{var a=_t;try{if(qc(),Kl.current=Jl,Gl){for(var c=lt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Gl=!1}if(ss=0,Rt=wt=lt=null,da=!1,fa=0,Sh.current=null,a===null||a.return===null){Tt=1,_a=r,_t=null;break}e:{var p=n,v=a.return,S=a,P=r;if(r=Lt,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var j=P,q=S,Y=q.tag;if((q.mode&1)===0&&(Y===0||Y===11||Y===15)){var W=q.alternate;W?(q.updateQueue=W.updateQueue,q.memoizedState=W.memoizedState,q.lanes=W.lanes):(q.updateQueue=null,q.memoizedState=null)}var re=qp(v);if(re!==null){re.flags&=-257,Kp(re,v,S,p,r),re.mode&1&&Wp(p,j,r),r=re,P=j;var ae=r.updateQueue;if(ae===null){var le=new Set;le.add(P),r.updateQueue=le}else ae.add(P);break e}else{if((r&1)===0){Wp(p,j,r),Vh();break e}P=Error(t(426))}}else if(ot&&S.mode&1){var mt=qp(v);if(mt!==null){(mt.flags&65536)===0&&(mt.flags|=256),Kp(mt,v,S,p,r),Hc(oo(P,S));break e}}p=P=oo(P,S),Tt!==4&&(Tt=2),va===null?va=[p]:va.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var M=$p(p,P,r);gp(p,M);break e;case 1:S=P;var D=p.type,F=p.stateNode;if((p.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(pi===null||!pi.has(F)))){p.flags|=65536,r&=-r,p.lanes|=r;var J=Hp(p,S,r);gp(p,J);break e}}p=p.return}while(p!==null)}Sm(a)}catch(ce){r=ce,_t===a&&a!==null&&(_t=a=a.return);continue}break}while(!0)}function Tm(){var n=ru.current;return ru.current=Jl,n===null?Jl:n}function Vh(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Ct===null||(os&268435455)===0&&(iu&268435455)===0||yi(Ct,Lt)}function cu(n,r){var a=He;He|=2;var c=Tm();(Ct!==n||Lt!==r)&&(Vr=null,ls(n,r));do try{VE();break}catch(d){wm(n,d)}while(!0);if(qc(),He=a,ru.current=c,_t!==null)throw Error(t(261));return Ct=null,Lt=0,Tt}function VE(){for(;_t!==null;)Im(_t)}function OE(){for(;_t!==null&&!Bi();)Im(_t)}function Im(n){var r=Rm(n.alternate,n,mn);n.memoizedProps=n.pendingProps,r===null?Sm(n):_t=r,Sh.current=null}function Sm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=kE(a,r,mn),a!==null){_t=a;return}}else{if(a=RE(a,r),a!==null){a.flags&=32767,_t=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Tt=6,_t=null;return}}if(r=r.sibling,r!==null){_t=r;return}_t=r=n}while(r!==null);Tt===0&&(Tt=5)}function us(n,r,a){var c=Ue,d=Sn.transition;try{Sn.transition=null,Ue=1,LE(n,r,a,c)}finally{Sn.transition=d,Ue=c}return null}function LE(n,r,a,c){do co();while(mi!==null);if((He&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(vc(n,p),n===Ct&&(_t=Ct=null,Lt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ou||(ou=!0,Cm($i,function(){return co(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=Sn.transition,Sn.transition=null;var v=Ue;Ue=1;var S=He;He|=4,Sh.current=null,PE(n,a),pm(a,n),tE(Vc),Ir=!!Dc,Vc=Dc=null,n.current=a,NE(a),vr(),He=S,Ue=v,Sn.transition=p}else n.current=a;if(ou&&(ou=!1,mi=n,au=d),p=n.pendingLanes,p===0&&(pi=null),yl(a.stateNode),tn(n,nt()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(su)throw su=!1,n=Rh,Rh=null,n;return(au&1)!==0&&n.tag!==0&&co(),p=n.pendingLanes,(p&1)!==0?n===Ch?Ea++:(Ea=0,Ch=n):Ea=0,ci(),null}function co(){if(mi!==null){var n=Gn(au),r=Sn.transition,a=Ue;try{if(Sn.transition=null,Ue=16>n?16:n,mi===null)var c=!1;else{if(n=mi,mi=null,au=0,(He&6)!==0)throw Error(t(331));var d=He;for(He|=4,se=n.current;se!==null;){var p=se,v=p.child;if((se.flags&16)!==0){var S=p.deletions;if(S!==null){for(var P=0;P<S.length;P++){var j=S[P];for(se=j;se!==null;){var q=se;switch(q.tag){case 0:case 11:case 15:ya(8,q,p)}var Y=q.child;if(Y!==null)Y.return=q,se=Y;else for(;se!==null;){q=se;var W=q.sibling,re=q.return;if(um(q),q===j){se=null;break}if(W!==null){W.return=re,se=W;break}se=re}}}var ae=p.alternate;if(ae!==null){var le=ae.child;if(le!==null){ae.child=null;do{var mt=le.sibling;le.sibling=null,le=mt}while(le!==null)}}se=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,se=v;else e:for(;se!==null;){if(p=se,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ya(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,se=M;break e}se=p.return}}var D=n.current;for(se=D;se!==null;){v=se;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,se=F;else e:for(v=D;se!==null;){if(S=se,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:nu(9,S)}}catch(ce){dt(S,S.return,ce)}if(S===v){se=null;break e}var J=S.sibling;if(J!==null){J.return=S.return,se=J;break e}se=S.return}}if(He=d,ci(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(Hi,n)}catch{}c=!0}return c}finally{Ue=a,Sn.transition=r}}return!1}function Am(n,r,a){r=oo(a,r),r=$p(n,r,1),n=di(n,r,1),r=Yt(),n!==null&&(Gi(n,1,r),tn(n,r))}function dt(n,r,a){if(n.tag===3)Am(n,n,a);else for(;r!==null;){if(r.tag===3){Am(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(pi===null||!pi.has(c))){n=oo(a,n),n=Hp(r,n,1),r=di(r,n,1),n=Yt(),r!==null&&(Gi(r,1,n),tn(r,n));break}}r=r.return}}function ME(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Yt(),n.pingedLanes|=n.suspendedLanes&a,Ct===n&&(Lt&a)===a&&(Tt===4||Tt===3&&(Lt&130023424)===Lt&&500>nt()-kh?ls(n,0):Ah|=a),tn(n,r)}function km(n,r){r===0&&((n.mode&1)===0?r=1:(r=ei,ei<<=1,(ei&130023424)===0&&(ei=4194304)));var a=Yt();n=Nr(n,r),n!==null&&(Gi(n,r,a),tn(n,a))}function bE(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),km(n,a)}function FE(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),km(n,a)}var Rm;Rm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Jt.current)Zt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Zt=!1,AE(n,r,a);Zt=(n.flags&131072)!==0}else Zt=!1,ot&&(r.flags&1048576)!==0&&op(r,jl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;eu(n,r),n=r.pendingProps;var d=Xs(r,zt.current);io(r,a),d=rh(null,r,c,n,d,a);var p=ih();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Xt(c)?(p=!0,Ml(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Yc(r),d.updater=Xl,r.stateNode=d,d._reactInternals=r,ch(r,c,n,a),r=ph(null,r,c,!0,p,a)):(r.tag=0,ot&&p&&Uc(r),Qt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(eu(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=UE(c),n=On(c,n),d){case 0:r=fh(null,r,c,n,a);break e;case 1:r=Zp(null,r,c,n,a);break e;case 11:r=Gp(null,r,c,n,a);break e;case 14:r=Qp(null,r,c,On(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:On(c,d),fh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:On(c,d),Zp(n,r,c,d,a);case 3:e:{if(em(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,mp(n,r),Wl(r,c,null,a);var v=r.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=oo(Error(t(423)),r),r=tm(n,r,c,a,d);break e}else if(c!==d){d=oo(Error(t(424)),r),r=tm(n,r,c,a,d);break e}else for(pn=ai(r.stateNode.containerInfo.firstChild),fn=r,ot=!0,Vn=null,a=fp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(to(),c===d){r=Dr(n,r,a);break e}Qt(n,r,c,a)}r=r.child}return r;case 5:return _p(r),n===null&&$c(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,v=d.children,Oc(c,d)?v=null:p!==null&&Oc(c,p)&&(r.flags|=32),Xp(n,r),Qt(n,r,v,a),r.child;case 6:return n===null&&$c(r),null;case 13:return nm(n,r,a);case 4:return Jc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=no(r,null,c,a):Qt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:On(c,d),Gp(n,r,c,d,a);case 7:return Qt(n,r,r.pendingProps,a),r.child;case 8:return Qt(n,r,r.pendingProps.children,a),r.child;case 12:return Qt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,v=d.value,et(Bl,c._currentValue),c._currentValue=v,p!==null)if(Dn(p.value,v)){if(p.children===d.children&&!Jt.current){r=Dr(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var S=p.dependencies;if(S!==null){v=p.child;for(var P=S.firstContext;P!==null;){if(P.context===c){if(p.tag===1){P=xr(-1,a&-a),P.tag=2;var j=p.updateQueue;if(j!==null){j=j.shared;var q=j.pending;q===null?P.next=P:(P.next=q.next,q.next=P),j.pending=P}}p.lanes|=a,P=p.alternate,P!==null&&(P.lanes|=a),Gc(p.return,a,r),S.lanes|=a;break}P=P.next}}else if(p.tag===10)v=p.type===r.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),Gc(v,a,r),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===r){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}Qt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,io(r,a),d=Tn(d),c=c(d),r.flags|=1,Qt(n,r,c,a),r.child;case 14:return c=r.type,d=On(c,r.pendingProps),d=On(c.type,d),Qp(n,r,c,d,a);case 15:return Yp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:On(c,d),eu(n,r),r.tag=1,Xt(c)?(n=!0,Ml(r)):n=!1,io(r,a),zp(r,c,d),ch(r,c,d,a),ph(null,r,c,!0,n,a);case 19:return im(n,r,a);case 22:return Jp(n,r,a)}throw Error(t(156,r.tag))};function Cm(n,r){return bo(n,r)}function jE(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(n,r,a,c){return new jE(n,r,a,c)}function Oh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function UE(n){if(typeof n=="function")return Oh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===L)return 11;if(n===Ze)return 14}return 2}function _i(n,r){var a=n.alternate;return a===null?(a=An(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function hu(n,r,a,c,d,p){var v=2;if(c=n,typeof n=="function")Oh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case C:return cs(a.children,d,p,r);case I:v=8,d|=8;break;case R:return n=An(12,a,r,d|2),n.elementType=R,n.lanes=p,n;case A:return n=An(13,a,r,d),n.elementType=A,n.lanes=p,n;case ge:return n=An(19,a,r,d),n.elementType=ge,n.lanes=p,n;case Ge:return du(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:v=10;break e;case N:v=9;break e;case L:v=11;break e;case Ze:v=14;break e;case tt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=An(v,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function cs(n,r,a,c){return n=An(7,n,c,r),n.lanes=a,n}function du(n,r,a,c){return n=An(22,n,c,r),n.elementType=Ge,n.lanes=a,n.stateNode={isHidden:!1},n}function Lh(n,r,a){return n=An(6,n,null,r),n.lanes=a,n}function Mh(n,r,a){return r=An(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function zE(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bo(0),this.expirationTimes=Bo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bo(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function bh(n,r,a,c,d,p,v,S,P){return n=new zE(n,r,a,S,P),r===1?(r=1,p===!0&&(r|=8)):r=0,p=An(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yc(p),n}function BE(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:we,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Pm(n){if(!n)return ui;n=n._reactInternals;e:{if(Nn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Xt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Xt(a))return rp(n,a,r)}return r}function Nm(n,r,a,c,d,p,v,S,P){return n=bh(a,c,!0,n,d,p,v,S,P),n.context=Pm(null),a=n.current,c=Yt(),d=gi(a),p=xr(c,d),p.callback=r??null,di(a,p,d),n.current.lanes=d,Gi(n,d,c),tn(n,c),n}function fu(n,r,a,c){var d=r.current,p=Yt(),v=gi(d);return a=Pm(a),r.context===null?r.context=a:r.pendingContext=a,r=xr(p,v),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=di(d,r,v),n!==null&&(bn(n,d,v,p),Hl(n,d,v)),v}function pu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function xm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Fh(n,r){xm(n,r),(n=n.alternate)&&xm(n,r)}function $E(){return null}var Dm=typeof reportError=="function"?reportError:function(n){console.error(n)};function jh(n){this._internalRoot=n}mu.prototype.render=jh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));fu(n,r,null,null)},mu.prototype.unmount=jh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;as(function(){fu(null,n,null,null)}),r[kr]=null}};function mu(n){this._internalRoot=n}mu.prototype.unstable_scheduleHydration=function(n){if(n){var r=qo();n={blockedOn:null,target:n,priority:r};for(var a=0;a<un.length&&r!==0&&r<un[a].priority;a++);un.splice(a,0,n),a===0&&Ms(n)}};function Uh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function gu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Vm(){}function HE(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var j=pu(v);p.call(j)}}var v=Nm(r,c,n,0,null,!1,!1,"",Vm);return n._reactRootContainer=v,n[kr]=v.current,ia(n.nodeType===8?n.parentNode:n),as(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var j=pu(P);S.call(j)}}var P=bh(n,0,!1,null,null,!1,!1,"",Vm);return n._reactRootContainer=P,n[kr]=P.current,ia(n.nodeType===8?n.parentNode:n),as(function(){fu(r,P,a,c)}),P}function yu(n,r,a,c,d){var p=a._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var S=d;d=function(){var P=pu(v);S.call(P)}}fu(r,v,n,d)}else v=HE(a,r,n,d,c);return pu(v)}Ho=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Ke(r.pendingLanes);a!==0&&($o(r,a|1),tn(r,nt()),(He&6)===0&&(uo=nt()+500,ci()))}break;case 13:as(function(){var c=Nr(n,1);if(c!==null){var d=Yt();bn(c,n,1,d)}}),Fh(n,1)}},Os=function(n){if(n.tag===13){var r=Nr(n,134217728);if(r!==null){var a=Yt();bn(r,n,134217728,a)}Fh(n,134217728)}},Wo=function(n){if(n.tag===13){var r=gi(n),a=Nr(n,r);if(a!==null){var c=Yt();bn(a,n,r,c)}Fh(n,r)}},qo=function(){return Ue},Ko=function(n,r){var a=Ue;try{return Ue=n,r()}finally{Ue=a}},gr=function(n,r,a){switch(r){case"input":if(je(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Ol(c);if(!d)throw Error(t(90));ne(c),je(c,d)}}}break;case"textarea":kt(n,a);break;case"select":r=a.value,r!=null&&sn(n,!!a.multiple,r,!1)}},ll=xh,ul=as;var WE={usingClientEntryPoint:!1,Events:[aa,Ys,Ol,Yr,Jr,xh]},wa={findFiberByHostInstance:Zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qE={bundleType:wa.bundleType,version:wa.version,rendererPackageName:wa.rendererPackageName,rendererConfig:wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=gl(n),n===null?null:n.stateNode},findFiberByHostInstance:wa.findFiberByHostInstance||$E,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_u.isDisabled&&_u.supportsFiber)try{Hi=_u.inject(qE),an=_u}catch{}}return nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WE,nn.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uh(r))throw Error(t(200));return BE(n,r,null,a)},nn.createRoot=function(n,r){if(!Uh(n))throw Error(t(299));var a=!1,c="",d=Dm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=bh(n,1,!1,null,null,a,!1,c,d),n[kr]=r.current,ia(n.nodeType===8?n.parentNode:n),new jh(r)},nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=gl(r),n=n===null?null:n.stateNode,n},nn.flushSync=function(n){return as(n)},nn.hydrate=function(n,r,a){if(!gu(r))throw Error(t(200));return yu(null,n,r,!0,a)},nn.hydrateRoot=function(n,r,a){if(!Uh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",v=Dm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),r=Nm(r,null,n,1,a??null,d,!1,p,v),n[kr]=r.current,ia(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new mu(r)},nn.render=function(n,r,a){if(!gu(r))throw Error(t(200));return yu(null,n,r,!1,a)},nn.unmountComponentAtNode=function(n){if(!gu(n))throw Error(t(40));return n._reactRootContainer?(as(function(){yu(null,null,n,!1,function(){n._reactRootContainer=null,n[kr]=null})}),!0):!1},nn.unstable_batchedUpdates=xh,nn.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!gu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return yu(n,r,a,!1,c)},nn.version="18.3.1-next-f1338f8080-20240426",nn}var zm;function ew(){if(zm)return $h.exports;zm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),$h.exports=ZE(),$h.exports}var Bm;function tw(){if(Bm)return vu;Bm=1;var i=ew();return vu.createRoot=i.createRoot,vu.hydrateRoot=i.hydrateRoot,vu}var nw=tw();const gy=Oe.createContext();function rw({children:i}){const[e,t]=Oe.useState(()=>localStorage.getItem("smarttic_theme")||"dark");Oe.useEffect(()=>{localStorage.setItem("smarttic_theme",e),document.documentElement.setAttribute("data-theme",e)},[e]);const s=()=>t(o=>o==="dark"?"light":"dark");return T.jsx(gy.Provider,{value:{theme:e,toggleTheme:s},children:i})}function yy(){return Oe.useContext(gy)}const iw=()=>{};var $m={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},sw=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],f=i[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},vy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,f=h?i[o+1]:0,g=o+2<i.length,_=g?i[o+2]:0,w=u>>2,k=(u&3)<<4|f>>4;let O=(f&15)<<2|_>>6,z=_&63;g||(z=64,h||(O=64)),s.push(t[w],t[k],t[O],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(_y(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):sw(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],f=o<i.length?t[i.charAt(o)]:0;++o;const _=o<i.length?t[i.charAt(o)]:64;++o;const k=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||f==null||_==null||k==null)throw new ow;const O=u<<2|f>>4;if(s.push(O),_!==64){const z=f<<4&240|_>>2;if(s.push(z),k!==64){const G=_<<6&192|k;s.push(G)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class ow extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const aw=function(i){const e=_y(i);return vy.encodeByteArray(e,!0)},Mu=function(i){return aw(i).replace(/\./g,"")},Ey=function(i){try{return vy.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=()=>lw().__FIREBASE_DEFAULTS__,cw=()=>{if(typeof process>"u"||typeof $m>"u")return;const i=$m.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},hw=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Ey(i[1]);return e&&JSON.parse(e)},nc=()=>{try{return iw()||uw()||cw()||hw()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},wy=i=>{var e,t;return(t=(e=nc())==null?void 0:e.emulatorHosts)==null?void 0:t[i]},dw=i=>{const e=wy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ty=()=>{var i;return(i=nc())==null?void 0:i.config},Iy=i=>{var e;return(e=nc())==null?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Mu(JSON.stringify(t)),Mu(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Gt())}function gw(){var e;const i=(e=nc())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _w(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function vw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ew(){const i=Gt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function ww(){return!gw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Tw(){try{return typeof indexedDB=="object"}catch{return!1}}function Iw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw="FirebaseError";class Hr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Sw,Object.setPrototypeOf(this,Hr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ka.prototype.create)}}class Ka{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?Aw(u,s):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Hr(o,f,s)}}function Aw(i,e){return i.replace(kw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const kw=/\{\$([^}]+)}/g;function Rw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ms(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Hm(u)&&Hm(h)){if(!ms(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Hm(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Sa(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Aa(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function Cw(i,e){const t=new Pw(i,e);return t.subscribe.bind(t)}class Pw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Nw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=qh),o.error===void 0&&(o.error=qh),o.complete===void 0&&(o.complete=qh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Nw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function qh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(i){return i&&i._delegate?i._delegate:i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Sy(i){return(await fetch(i,{credentials:"include"})).ok}class gs{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new fw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vw(e))try{this.getOrInitializeService({instanceIdentifier:hs})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=hs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hs){return this.instances.has(e)}getOptions(e=hs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Dw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=hs){return this.component?this.component.multipleInstances?e:hs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dw(i){return i===hs?void 0:i}function Vw(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new xw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Le||(Le={}));const Lw={debug:Le.DEBUG,verbose:Le.VERBOSE,info:Le.INFO,warn:Le.WARN,error:Le.ERROR,silent:Le.SILENT},Mw=Le.INFO,bw={[Le.DEBUG]:"log",[Le.VERBOSE]:"log",[Le.INFO]:"info",[Le.WARN]:"warn",[Le.ERROR]:"error"},Fw=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=bw[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ld{constructor(e){this.name=e,this._logLevel=Mw,this._logHandler=Fw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Le.DEBUG,...e),this._logHandler(this,Le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Le.VERBOSE,...e),this._logHandler(this,Le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Le.INFO,...e),this._logHandler(this,Le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Le.WARN,...e),this._logHandler(this,Le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Le.ERROR,...e),this._logHandler(this,Le.ERROR,...e)}}const jw=(i,e)=>e.some(t=>i instanceof t);let Wm,qm;function Uw(){return Wm||(Wm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zw(){return qm||(qm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ay=new WeakMap,od=new WeakMap,ky=new WeakMap,Kh=new WeakMap,Md=new WeakMap;function Bw(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(Ai(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Ay.set(t,i)}).catch(()=>{}),Md.set(e,i),e}function $w(i){if(od.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});od.set(i,e)}let ad={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return od.get(i);if(e==="objectStoreNames")return i.objectStoreNames||ky.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ai(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Hw(i){ad=i(ad)}function Ww(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Gh(this),e,...t);return ky.set(s,e.sort?e.sort():[e]),Ai(s)}:zw().includes(i)?function(...e){return i.apply(Gh(this),e),Ai(Ay.get(this))}:function(...e){return Ai(i.apply(Gh(this),e))}}function qw(i){return typeof i=="function"?Ww(i):(i instanceof IDBTransaction&&$w(i),jw(i,Uw())?new Proxy(i,ad):i)}function Ai(i){if(i instanceof IDBRequest)return Bw(i);if(Kh.has(i))return Kh.get(i);const e=qw(i);return e!==i&&(Kh.set(i,e),Md.set(e,i)),e}const Gh=i=>Md.get(i);function Kw(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),f=Ai(h);return s&&h.addEventListener("upgradeneeded",g=>{s(Ai(h.result),g.oldVersion,g.newVersion,Ai(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),f}const Gw=["get","getKey","getAll","getAllKeys","count"],Qw=["put","add","delete","clear"],Qh=new Map;function Km(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Qh.get(e))return Qh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=Qw.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Gw.includes(t)))return;const u=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(f.shift())),(await Promise.all([_[t](...f),o&&g.done]))[0]};return Qh.set(e,u),u}Hw(i=>({...i,get:(e,t,s)=>Km(e,t)||i.get(e,t,s),has:(e,t)=>!!Km(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Jw(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Jw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ld="@firebase/app",Gm="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new Ld("@firebase/app"),Xw="@firebase/app-compat",Zw="@firebase/analytics-compat",eT="@firebase/analytics",tT="@firebase/app-check-compat",nT="@firebase/app-check",rT="@firebase/auth",iT="@firebase/auth-compat",sT="@firebase/database",oT="@firebase/data-connect",aT="@firebase/database-compat",lT="@firebase/functions",uT="@firebase/functions-compat",cT="@firebase/installations",hT="@firebase/installations-compat",dT="@firebase/messaging",fT="@firebase/messaging-compat",pT="@firebase/performance",mT="@firebase/performance-compat",gT="@firebase/remote-config",yT="@firebase/remote-config-compat",_T="@firebase/storage",vT="@firebase/storage-compat",ET="@firebase/firestore",wT="@firebase/ai",TT="@firebase/firestore-compat",IT="firebase",ST="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud="[DEFAULT]",AT={[ld]:"fire-core",[Xw]:"fire-core-compat",[eT]:"fire-analytics",[Zw]:"fire-analytics-compat",[nT]:"fire-app-check",[tT]:"fire-app-check-compat",[rT]:"fire-auth",[iT]:"fire-auth-compat",[sT]:"fire-rtdb",[oT]:"fire-data-connect",[aT]:"fire-rtdb-compat",[lT]:"fire-fn",[uT]:"fire-fn-compat",[cT]:"fire-iid",[hT]:"fire-iid-compat",[dT]:"fire-fcm",[fT]:"fire-fcm-compat",[pT]:"fire-perf",[mT]:"fire-perf-compat",[gT]:"fire-rc",[yT]:"fire-rc-compat",[_T]:"fire-gcs",[vT]:"fire-gcs-compat",[ET]:"fire-fst",[TT]:"fire-fst-compat",[wT]:"fire-vertex","fire-js":"fire-js",[IT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=new Map,kT=new Map,cd=new Map;function Qm(i,e){try{i.container.addComponent(e)}catch(t){Ur.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function wo(i){const e=i.name;if(cd.has(e))return Ur.debug(`There were multiple attempts to register component ${e}.`),!1;cd.set(e,i);for(const t of bu.values())Qm(t,i);for(const t of kT.values())Qm(t,i);return!0}function bd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function gn(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ki=new Ka("app","Firebase",RT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new gs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ki.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=ST;function Ry(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:ud,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw ki.create("bad-app-name",{appName:String(o)});if(t||(t=Ty()),!t)throw ki.create("no-options");const u=bu.get(o);if(u){if(ms(t,u.options)&&ms(s,u.config))return u;throw ki.create("duplicate-app",{appName:o})}const h=new Ow(o);for(const g of cd.values())h.addComponent(g);const f=new CT(t,s,h);return bu.set(o,f),f}function Cy(i=ud){const e=bu.get(i);if(!e&&i===ud&&Ty())return Ry();if(!e)throw ki.create("no-app",{appName:i});return e}function Ri(i,e,t){let s=AT[i]??i;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ur.warn(h.join(" "));return}wo(new gs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT="firebase-heartbeat-database",NT=1,Ma="firebase-heartbeat-store";let Yh=null;function Py(){return Yh||(Yh=Kw(PT,NT,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ma)}catch(t){console.warn(t)}}}}).catch(i=>{throw ki.create("idb-open",{originalErrorMessage:i.message})})),Yh}async function xT(i){try{const t=(await Py()).transaction(Ma),s=await t.objectStore(Ma).get(Ny(i));return await t.done,s}catch(e){if(e instanceof Hr)Ur.warn(e.message);else{const t=ki.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ur.warn(t.message)}}}async function Ym(i,e){try{const s=(await Py()).transaction(Ma,"readwrite");await s.objectStore(Ma).put(e,Ny(i)),await s.done}catch(t){if(t instanceof Hr)Ur.warn(t.message);else{const s=ki.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ur.warn(s.message)}}}function Ny(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT=1024,VT=30;class OT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new MT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Jm();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>VT){const h=bT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ur.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Jm(),{heartbeatsToSend:s,unsentEntries:o}=LT(this._heartbeatsCache.heartbeats),u=Mu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Ur.warn(t),""}}}function Jm(){return new Date().toISOString().substring(0,10)}function LT(i,e=DT){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Xm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Xm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class MT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tw()?Iw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await xT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ym(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ym(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Xm(i){return Mu(JSON.stringify({version:2,heartbeats:i})).length}function bT(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(i){wo(new gs("platform-logger",e=>new Yw(e),"PRIVATE")),wo(new gs("heartbeat",e=>new OT(e),"PRIVATE")),Ri(ld,Gm,i),Ri(ld,Gm,"esm2020"),Ri("fire-js","")}FT("");function xy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jT=xy,Dy=new Ka("auth","Firebase",xy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=new Ld("@firebase/auth");function UT(i,...e){Fu.logLevel<=Le.WARN&&Fu.warn(`Auth (${Ro}): ${i}`,...e)}function ku(i,...e){Fu.logLevel<=Le.ERROR&&Fu.error(`Auth (${Ro}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(i,...e){throw jd(i,...e)}function Un(i,...e){return jd(i,...e)}function Fd(i,e,t){const s={...jT(),[e]:t};return new Ka("auth","Firebase",s).create(e,{appName:i.name})}function Fr(i){return Fd(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zT(i,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Cn(i,"argument-error"),Fd(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Dy.create(i,...e)}function Se(i,e,...t){if(!i)throw jd(e,...t)}function Mr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw ku(e),new Error(e)}function zr(i,e){i||Mr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function BT(){return Zm()==="http:"||Zm()==="https:"}function Zm(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(BT()||_w()||"connection"in navigator)?navigator.onLine:!0}function HT(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,t){this.shortDelay=e,this.longDelay=t,zr(t>e,"Short delay should be less than long delay!"),this.isMobile=mw()||vw()}get(){return $T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(i,e){zr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],KT=new Ya(3e4,6e4);function Mi(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function bi(i,e,t,s,o={}){return Oy(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const f=Ga({key:i.config.apiKey,...h}).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const _={method:e,headers:g,...u};return yw()||(_.referrerPolicy="no-referrer"),i.emulatorConfig&&Qa(i.emulatorConfig.host)&&(_.credentials="include"),Vy.fetch()(await Ly(i,i.config.apiHost,t,f),_)})}async function Oy(i,e,t){i._canInitEmulator=!1;const s={...WT,...e};try{const o=new QT(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Eu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const f=u.ok?h.errorMessage:h.error.message,[g,_]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eu(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Eu(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw Eu(i,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Fd(i,w,_);Cn(i,w)}}catch(o){if(o instanceof Hr)throw o;Cn(i,"network-request-failed",{message:String(o)})}}async function Ja(i,e,t,s,o={}){const u=await bi(i,e,t,s,o);return"mfaPendingCredential"in u&&Cn(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Ly(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?Ud(i.config,o):`${i.config.apiScheme}://${o}`;return qT.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function GT(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class QT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Un(this.auth,"network-request-failed")),KT.get())})}}function Eu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Un(i,e,s);return o.customData._tokenResponse=t,o}function eg(i){return i!==void 0&&i.enterprise!==void 0}class YT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return GT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function JT(i,e){return bi(i,"GET","/v2/recaptchaConfig",Mi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XT(i,e){return bi(i,"POST","/v1/accounts:delete",e)}async function ju(i,e){return bi(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ZT(i,e=!1){const t=yn(i),s=await t.getIdToken(e),o=zd(s);Se(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Na(Jh(o.auth_time)),issuedAtTime:Na(Jh(o.iat)),expirationTime:Na(Jh(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Jh(i){return Number(i)*1e3}function zd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return ku("JWT malformed, contained fewer than 3 sections"),null;try{const o=Ey(t);return o?JSON.parse(o):(ku("Failed to decode base64 JWT payload"),null)}catch(o){return ku("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function tg(i){const e=zd(i);return Se(e,"internal-error"),Se(typeof e.exp<"u","internal-error"),Se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ba(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Hr&&e0(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function e0({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Na(this.lastLoginAt),this.creationTime=Na(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uu(i){var k;const e=i.auth,t=await i.getIdToken(),s=await ba(i,ju(e,{idToken:t}));Se(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=(k=o.providerUserInfo)!=null&&k.length?My(o.providerUserInfo):[],h=r0(i.providerData,u),f=i.isAnonymous,g=!(i.email&&o.passwordHash)&&!(h!=null&&h.length),_=f?g:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new dd(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(i,w)}async function n0(i){const e=yn(i);await Uu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function r0(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function My(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i0(i,e){const t=await Oy(i,{},async()=>{const s=Ga({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await Ly(i,o,"/v1/token",`key=${u}`),f=await i._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:s};return i.emulatorConfig&&Qa(i.emulatorConfig.host)&&(g.credentials="include"),Vy.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function s0(i,e){return bi(i,"POST","/v2/accounts:revokeToken",Mi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Se(e.idToken,"internal-error"),Se(typeof e.idToken<"u","internal-error"),Se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Se(e.length!==0,"internal-error");const t=tg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await i0(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new go;return s&&(Se(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(Se(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(Se(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new go,this.toJSON())}_performRefresh(){return Mr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(i,e){Se(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Fn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new t0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new dd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await ba(this,this.stsTokenManager.getToken(this.auth,e));return Se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ZT(this,e)}reload(){return n0(this)}_assign(e){this!==e&&(Se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Fn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Uu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(Fr(this.auth));const e=await this.getIdToken();return await ba(this,XT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,f=t.tenantId??void 0,g=t._redirectEventId??void 0,_=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:k,emailVerified:O,isAnonymous:z,providerData:G,stsTokenManager:Q}=t;Se(k&&Q,e,"internal-error");const B=go.fromJSON(this.name,Q);Se(typeof k=="string",e,"internal-error"),Ei(s,e.name),Ei(o,e.name),Se(typeof O=="boolean",e,"internal-error"),Se(typeof z=="boolean",e,"internal-error"),Ei(u,e.name),Ei(h,e.name),Ei(f,e.name),Ei(g,e.name),Ei(_,e.name),Ei(w,e.name);const Z=new Fn({uid:k,auth:e,email:o,emailVerified:O,displayName:s,isAnonymous:z,photoURL:h,phoneNumber:u,tenantId:f,stsTokenManager:B,createdAt:_,lastLoginAt:w});return G&&Array.isArray(G)&&(Z.providerData=G.map(he=>({...he}))),g&&(Z._redirectEventId=g),Z}static async _fromIdTokenResponse(e,t,s=!1){const o=new go;o.updateFromServerResponse(t);const u=new Fn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Uu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];Se(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?My(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),f=new go;f.updateFromIdToken(s);const g=new Fn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new dd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=new Map;function br(i){zr(i instanceof Function,"Expected a class definition");let e=ng.get(i);return e?(zr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,ng.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}by.type="NONE";const rg=by;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(i,e,t){return`firebase:${i}:${e}:${t}`}class yo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Ru(this.userKey,o.apiKey,u),this.fullPersistenceKey=Ru("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ju(this.auth,{idToken:e}).catch(()=>{});return t?Fn._fromGetAccountInfoResponse(this.auth,t,e):null}return Fn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new yo(br(rg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||br(rg);const h=Ru(s,e.config.apiKey,e.name);let f=null;for(const _ of t)try{const w=await _._get(h);if(w){let k;if(typeof w=="string"){const O=await ju(e,{idToken:w}).catch(()=>{});if(!O)break;k=await Fn._fromGetAccountInfoResponse(e,O,w)}else k=Fn._fromJSON(e,w);_!==u&&(f=k),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new yo(u,e,s):(u=g[0],f&&await u._set(h,f.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new yo(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($y(e))return"Blackberry";if(Hy(e))return"Webos";if(jy(e))return"Safari";if((e.includes("chrome/")||Uy(e))&&!e.includes("edge/"))return"Chrome";if(By(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Fy(i=Gt()){return/firefox\//i.test(i)}function jy(i=Gt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Uy(i=Gt()){return/crios\//i.test(i)}function zy(i=Gt()){return/iemobile/i.test(i)}function By(i=Gt()){return/android/i.test(i)}function $y(i=Gt()){return/blackberry/i.test(i)}function Hy(i=Gt()){return/webos/i.test(i)}function Bd(i=Gt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function o0(i=Gt()){var e;return Bd(i)&&!!((e=window.navigator)!=null&&e.standalone)}function a0(){return Ew()&&document.documentMode===10}function Wy(i=Gt()){return Bd(i)||By(i)||Hy(i)||$y(i)||/windows phone/i.test(i)||zy(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(i,e=[]){let t;switch(i){case"Browser":t=ig(Gt());break;case"Worker":t=`${ig(Gt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ro}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,f)=>{try{const g=e(u);h(g)}catch(g){f(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u0(i,e={}){return bi(i,"GET","/v2/passwordPolicy",Mi(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0=6;class h0{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??c0,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sg(this),this.idTokenSubscription=new sg(this),this.beforeStateQueue=new l0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=br(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await yo.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ju(this,{idToken:e}),s=await Fn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(gn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,f=s==null?void 0:s._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(s=g.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Uu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=HT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(Fr(this));const t=e?yn(e):null;return t&&Se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(Fr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(Fr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(br(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await u0(this),t=new h0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ka("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await s0(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&br(e)||this._popupRedirectResolver;Se(t,this,"argument-error"),this.redirectPersistenceManager=await yo.create(this,[br(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Se(f,this,"internal-error"),f.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&UT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Fi(i){return yn(i)}class sg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Cw(t=>this.observer=t)}get next(){return Se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function f0(i){rc=i}function Ky(i){return rc.loadJS(i)}function p0(){return rc.recaptchaEnterpriseScript}function m0(){return rc.gapiScript}function g0(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class y0{constructor(){this.enterprise=new _0}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class _0{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const v0="recaptcha-enterprise",Gy="NO_RECAPTCHA";class E0{constructor(e){this.type=v0,this.auth=Fi(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,f)=>{JT(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const _=new YT(g);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,h(_.siteKey)}}).catch(g=>{f(g)})})}function o(u,h,f){const g=window.grecaptcha;eg(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(_=>{h(_)}).catch(()=>{h(Gy)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new y0().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(f=>{if(!t&&eg(window.grecaptcha))o(f,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=p0();g.length!==0&&(g+=f),Ky(g).then(()=>{o(f,u,h)}).catch(_=>{h(_)})}}).catch(f=>{h(f)})})}}async function og(i,e,t,s=!1,o=!1){const u=new E0(i);let h;if(o)h=Gy;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const f={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,_=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function fd(i,e,t,s,o){var u;if((u=i._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await og(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await og(i,e,t,t==="getOobCode");return s(i,f)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(i,e){const t=bd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(ms(u,e??{}))return o;Cn(o,"already-initialized")}return t.initialize({options:e})}function T0(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(br);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function I0(i,e,t){const s=Fi(i);Se(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Qy(e),{host:h,port:f}=S0(e),g=f===null?"":`:${f}`,_={url:`${u}//${h}${g}/`},w=Object.freeze({host:h,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Se(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Se(ms(_,s.config.emulator)&&ms(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Qa(h)?Sy(`${u}//${h}${g}`):A0()}function Qy(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function S0(i){const e=Qy(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:ag(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:ag(h)}}}function ag(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function A0(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Mr("not implemented")}_getIdTokenResponse(e){return Mr("not implemented")}_linkToIdToken(e,t){return Mr("not implemented")}_getReauthenticationResolver(e){return Mr("not implemented")}}async function k0(i,e){return bi(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R0(i,e){return Ja(i,"POST","/v1/accounts:signInWithPassword",Mi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C0(i,e){return Ja(i,"POST","/v1/accounts:signInWithEmailLink",Mi(i,e))}async function P0(i,e){return Ja(i,"POST","/v1/accounts:signInWithEmailLink",Mi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa extends $d{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Fa(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Fa(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fd(e,t,"signInWithPassword",R0);case"emailLink":return C0(e,{email:this._email,oobCode:this._password});default:Cn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fd(e,s,"signUpPassword",k0);case"emailLink":return P0(e,{idToken:t,email:this._email,oobCode:this._password});default:Cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _o(i,e){return Ja(i,"POST","/v1/accounts:signInWithIdp",Mi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0="http://localhost";class ys extends $d{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ys(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Cn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new ys(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return _o(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,_o(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,_o(e,t)}buildRequest(){const e={requestUri:N0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ga(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function D0(i){const e=Sa(Aa(i)).link,t=e?Sa(Aa(e)).deep_link_id:null,s=Sa(Aa(i)).deep_link_id;return(s?Sa(Aa(s)).link:null)||s||t||e||i}class Hd{constructor(e){const t=Sa(Aa(e)),s=t.apiKey??null,o=t.oobCode??null,u=x0(t.mode??null);Se(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=D0(e);try{return new Hd(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.providerId=Co.PROVIDER_ID}static credential(e,t){return Fa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Hd.parseLink(t);return Se(s,"argument-error"),Fa._fromEmailAndCode(e,s.code,s.tenantId)}}Co.PROVIDER_ID="password";Co.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Co.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa extends Wd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends Xa{constructor(){super("facebook.com")}static credential(e){return ys._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wi.credential(e.oauthAccessToken)}catch{return null}}}wi.FACEBOOK_SIGN_IN_METHOD="facebook.com";wi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends Xa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ys._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Lr.credential(t,s)}catch{return null}}}Lr.GOOGLE_SIGN_IN_METHOD="google.com";Lr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends Xa{constructor(){super("github.com")}static credential(e){return ys._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ti.credential(e.oauthAccessToken)}catch{return null}}}Ti.GITHUB_SIGN_IN_METHOD="github.com";Ti.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends Xa{constructor(){super("twitter.com")}static credential(e,t){return ys._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ii.credential(t,s)}catch{return null}}}Ii.TWITTER_SIGN_IN_METHOD="twitter.com";Ii.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V0(i,e){return Ja(i,"POST","/v1/accounts:signUp",Mi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Fn._fromIdTokenResponse(e,s,o),h=lg(s);return new _s({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=lg(s);return new _s({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function lg(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu extends Hr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,zu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new zu(e,t,s,o)}}function Yy(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?zu._fromErrorAndOperation(i,u,e,s):u})}async function O0(i,e,t=!1){const s=await ba(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return _s._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L0(i,e,t=!1){const{auth:s}=i;if(gn(s.app))return Promise.reject(Fr(s));const o="reauthenticate";try{const u=await ba(i,Yy(s,o,e,i),t);Se(u.idToken,s,"internal-error");const h=zd(u.idToken);Se(h,s,"internal-error");const{sub:f}=h;return Se(i.uid===f,s,"user-mismatch"),_s._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Cn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(i,e,t=!1){if(gn(i.app))return Promise.reject(Fr(i));const s="signIn",o=await Yy(i,s,e),u=await _s._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function M0(i,e){return Jy(Fi(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xy(i){const e=Fi(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function b0(i,e,t){if(gn(i.app))return Promise.reject(Fr(i));const s=Fi(i),h=await fd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",V0).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&Xy(i),g}),f=await _s._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(f.user),f}function F0(i,e,t){return gn(i.app)?Promise.reject(Fr(i)):M0(yn(i),Co.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Xy(i),s})}function j0(i,e,t,s){return yn(i).onIdTokenChanged(e,t,s)}function U0(i,e,t){return yn(i).beforeAuthStateChanged(e,t)}function z0(i,e,t,s){return yn(i).onAuthStateChanged(e,t,s)}function B0(i){return yn(i).signOut()}const Bu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bu,"1"),this.storage.removeItem(Bu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=1e3,H0=10;class e_ extends Zy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Wy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);a0()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,H0):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},$0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}e_.type="LOCAL";const W0=e_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_ extends Zy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}t_.type="SESSION";const n_=t_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new ic(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(h).map(async _=>_(t.origin,u)),g=await q0(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ic.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((f,g)=>{const _=qd("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(k){const O=k;if(O.data.eventId===_)switch(O.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(O.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(){return window}function G0(i){ur().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(){return typeof ur().WorkerGlobalScope<"u"&&typeof ur().importScripts=="function"}async function Q0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Y0(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function J0(){return r_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_="firebaseLocalStorageDb",X0=1,$u="firebaseLocalStorage",s_="fbase_key";class Za{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function sc(i,e){return i.transaction([$u],e?"readwrite":"readonly").objectStore($u)}function Z0(){const i=indexedDB.deleteDatabase(i_);return new Za(i).toPromise()}function pd(){const i=indexedDB.open(i_,X0);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore($u,{keyPath:s_})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains($u)?e(s):(s.close(),await Z0(),e(await pd()))})})}async function ug(i,e,t){const s=sc(i,!0).put({[s_]:e,value:t});return new Za(s).toPromise()}async function eI(i,e){const t=sc(i,!1).get(e),s=await new Za(t).toPromise();return s===void 0?null:s.value}function cg(i,e){const t=sc(i,!0).delete(e);return new Za(t).toPromise()}const tI=800,nI=3;class o_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>nI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return r_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ic._getInstance(J0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await Q0(),!this.activeServiceWorker)return;this.sender=new K0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Y0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pd();return await ug(e,Bu,"1"),await cg(e,Bu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>ug(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>eI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>cg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=sc(o,!1).getAll();return new Za(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}o_.type="LOCAL";const rI=o_;new Ya(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(i,e){return e?br(e):(Se(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd extends $d{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _o(e,this._buildIdpRequest())}_linkToIdToken(e,t){return _o(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return _o(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function iI(i){return Jy(i.auth,new Kd(i),i.bypassAuthState)}function sI(i){const{auth:e,user:t}=i;return Se(t,e,"internal-error"),L0(t,new Kd(i),i.bypassAuthState)}async function oI(i){const{auth:e,user:t}=i;return Se(t,e,"internal-error"),O0(t,new Kd(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iI;case"linkViaPopup":case"linkViaRedirect":return oI;case"reauthViaPopup":case"reauthViaRedirect":return sI;default:Cn(this.auth,"internal-error")}}resolve(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=new Ya(2e3,1e4);async function lI(i,e,t){if(gn(i.app))return Promise.reject(Un(i,"operation-not-supported-in-this-environment"));const s=Fi(i);zT(i,e,Wd);const o=a_(s,t);return new ds(s,"signInViaPopup",e,o).executeNotNull()}class ds extends l_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,ds.currentPopupAction&&ds.currentPopupAction.cancel(),ds.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Se(e,this.auth,"internal-error"),e}async onExecution(){zr(this.filter.length===1,"Popup operations only handle one event");const e=qd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ds.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,aI.get())};e()}}ds.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="pendingRedirect",Cu=new Map;class cI extends l_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Cu.get(this.auth._key());if(!e){try{const s=await hI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Cu.set(this.auth._key(),e)}return this.bypassAuthState||Cu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hI(i,e){const t=pI(e),s=fI(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function dI(i,e){Cu.set(i._key(),e)}function fI(i){return br(i._redirectPersistence)}function pI(i){return Ru(uI,i.config.apiKey,i.name)}async function mI(i,e,t=!1){if(gn(i.app))return Promise.reject(Fr(i));const s=Fi(i),o=a_(s,e),h=await new cI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=600*1e3;class yI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_I(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!u_(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Un(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gI&&this.cachedEventUids.clear(),this.cachedEventUids.has(hg(e))}saveEventToCache(e){this.cachedEventUids.add(hg(e)),this.lastProcessedEventTime=Date.now()}}function hg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function u_({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _I(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return u_(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vI(i,e={}){return bi(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wI=/^https?/;async function TI(i){if(i.config.emulator)return;const{authorizedDomains:e}=await vI(i);for(const t of e)try{if(II(t))return}catch{}Cn(i,"unauthorized-domain")}function II(i){const e=hd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!wI.test(t))return!1;if(EI.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=new Ya(3e4,6e4);function dg(){const i=ur().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function AI(i){return new Promise((e,t)=>{var o,u,h;function s(){dg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dg(),t(Un(i,"network-request-failed"))},timeout:SI.get()})}if((u=(o=ur().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=ur().gapi)!=null&&h.load)s();else{const f=g0("iframefcb");return ur()[f]=()=>{gapi.load?s():t(Un(i,"network-request-failed"))},Ky(`${m0()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw Pu=null,e})}let Pu=null;function kI(i){return Pu=Pu||AI(i),Pu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=new Ya(5e3,15e3),CI="__/auth/iframe",PI="emulator/auth/iframe",NI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DI(i){const e=i.config;Se(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Ud(e,PI):`https://${i.config.authDomain}/${CI}`,s={apiKey:e.apiKey,appName:i.name,v:Ro},o=xI.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ga(s).slice(1)}`}async function VI(i){const e=await kI(i),t=ur().gapi;return Se(t,i,"internal-error"),e.open({where:document.body,url:DI(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Un(i,"network-request-failed"),f=ur().setTimeout(()=>{u(h)},RI.get());function g(){ur().clearTimeout(f),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LI=500,MI=600,bI="_blank",FI="http://localhost";class fg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jI(i,e,t,s=LI,o=MI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const g={...OI,width:s.toString(),height:o.toString(),top:u,left:h},_=Gt().toLowerCase();t&&(f=Uy(_)?bI:t),Fy(_)&&(e=e||FI,g.scrollbars="yes");const w=Object.entries(g).reduce((O,[z,G])=>`${O}${z}=${G},`,"");if(o0(_)&&f!=="_self")return UI(e||"",f),new fg(null);const k=window.open(e||"",f,w);Se(k,i,"popup-blocked");try{k.focus()}catch{}return new fg(k)}function UI(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI="__/auth/handler",BI="emulator/auth/handler",$I=encodeURIComponent("fac");async function pg(i,e,t,s,o,u){Se(i.config.authDomain,i,"auth-domain-config-required"),Se(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Ro,eventId:o};if(e instanceof Wd){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",Rw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,k]of Object.entries({}))h[w]=k}if(e instanceof Xa){const w=e.getScopes().filter(k=>k!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const f=h;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const g=await i._getAppCheckToken(),_=g?`#${$I}=${encodeURIComponent(g)}`:"";return`${HI(i)}?${Ga(f).slice(1)}${_}`}function HI({config:i}){return i.emulator?Ud(i,BI):`https://${i.authDomain}/${zI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh="webStorageSupport";class WI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=n_,this._completeRedirectFn=mI,this._overrideRedirectResult=dI}async _openPopup(e,t,s,o){var h;zr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await pg(e,t,s,hd(),o);return jI(e,u,qd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await pg(e,t,s,hd(),o);return G0(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(zr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await VI(e),s=new yI(e);return t.register("authEvent",o=>(Se(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Xh,{type:Xh},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[Xh];u!==void 0&&t(!!u),Cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=TI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Wy()||jy()||Bd()}}const qI=WI;var mg="@firebase/auth",gg="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function QI(i){wo(new gs("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=s.options;Se(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qy(i)},_=new d0(s,o,u,g);return T0(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),wo(new gs("auth-internal",e=>{const t=Fi(e.getProvider("auth").getImmediate());return(s=>new KI(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ri(mg,gg,GI(i)),Ri(mg,gg,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=300,JI=Iy("authIdTokenMaxAge")||YI;let yg=null;const XI=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>JI)return;const o=t==null?void 0:t.token;yg!==o&&(yg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function ZI(i=Cy()){const e=bd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=w0(i,{popupRedirectResolver:qI,persistence:[rI,W0,n_]}),s=Iy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=XI(u.toString());U0(t,h,()=>h(t.currentUser)),j0(t,f=>h(f))}}const o=wy("auth");return o&&I0(t,`http://${o}`),t}function eS(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}f0({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Un("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",eS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});QI("Browser");var _g=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ci,c_;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,I){function R(){}R.prototype=I.prototype,C.F=I.prototype,C.prototype=new R,C.prototype.constructor=C,C.D=function(x,N,L){for(var A=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)A[ge-2]=arguments[ge];return I.prototype[N].apply(x,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(C,I,R){R||(R=0);const x=Array(16);if(typeof I=="string")for(var N=0;N<16;++N)x[N]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(N=0;N<16;++N)x[N]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=C.g[0],R=C.g[1],N=C.g[2];let L=C.g[3],A;A=I+(L^R&(N^L))+x[0]+3614090360&4294967295,I=R+(A<<7&4294967295|A>>>25),A=L+(N^I&(R^N))+x[1]+3905402710&4294967295,L=I+(A<<12&4294967295|A>>>20),A=N+(R^L&(I^R))+x[2]+606105819&4294967295,N=L+(A<<17&4294967295|A>>>15),A=R+(I^N&(L^I))+x[3]+3250441966&4294967295,R=N+(A<<22&4294967295|A>>>10),A=I+(L^R&(N^L))+x[4]+4118548399&4294967295,I=R+(A<<7&4294967295|A>>>25),A=L+(N^I&(R^N))+x[5]+1200080426&4294967295,L=I+(A<<12&4294967295|A>>>20),A=N+(R^L&(I^R))+x[6]+2821735955&4294967295,N=L+(A<<17&4294967295|A>>>15),A=R+(I^N&(L^I))+x[7]+4249261313&4294967295,R=N+(A<<22&4294967295|A>>>10),A=I+(L^R&(N^L))+x[8]+1770035416&4294967295,I=R+(A<<7&4294967295|A>>>25),A=L+(N^I&(R^N))+x[9]+2336552879&4294967295,L=I+(A<<12&4294967295|A>>>20),A=N+(R^L&(I^R))+x[10]+4294925233&4294967295,N=L+(A<<17&4294967295|A>>>15),A=R+(I^N&(L^I))+x[11]+2304563134&4294967295,R=N+(A<<22&4294967295|A>>>10),A=I+(L^R&(N^L))+x[12]+1804603682&4294967295,I=R+(A<<7&4294967295|A>>>25),A=L+(N^I&(R^N))+x[13]+4254626195&4294967295,L=I+(A<<12&4294967295|A>>>20),A=N+(R^L&(I^R))+x[14]+2792965006&4294967295,N=L+(A<<17&4294967295|A>>>15),A=R+(I^N&(L^I))+x[15]+1236535329&4294967295,R=N+(A<<22&4294967295|A>>>10),A=I+(N^L&(R^N))+x[1]+4129170786&4294967295,I=R+(A<<5&4294967295|A>>>27),A=L+(R^N&(I^R))+x[6]+3225465664&4294967295,L=I+(A<<9&4294967295|A>>>23),A=N+(I^R&(L^I))+x[11]+643717713&4294967295,N=L+(A<<14&4294967295|A>>>18),A=R+(L^I&(N^L))+x[0]+3921069994&4294967295,R=N+(A<<20&4294967295|A>>>12),A=I+(N^L&(R^N))+x[5]+3593408605&4294967295,I=R+(A<<5&4294967295|A>>>27),A=L+(R^N&(I^R))+x[10]+38016083&4294967295,L=I+(A<<9&4294967295|A>>>23),A=N+(I^R&(L^I))+x[15]+3634488961&4294967295,N=L+(A<<14&4294967295|A>>>18),A=R+(L^I&(N^L))+x[4]+3889429448&4294967295,R=N+(A<<20&4294967295|A>>>12),A=I+(N^L&(R^N))+x[9]+568446438&4294967295,I=R+(A<<5&4294967295|A>>>27),A=L+(R^N&(I^R))+x[14]+3275163606&4294967295,L=I+(A<<9&4294967295|A>>>23),A=N+(I^R&(L^I))+x[3]+4107603335&4294967295,N=L+(A<<14&4294967295|A>>>18),A=R+(L^I&(N^L))+x[8]+1163531501&4294967295,R=N+(A<<20&4294967295|A>>>12),A=I+(N^L&(R^N))+x[13]+2850285829&4294967295,I=R+(A<<5&4294967295|A>>>27),A=L+(R^N&(I^R))+x[2]+4243563512&4294967295,L=I+(A<<9&4294967295|A>>>23),A=N+(I^R&(L^I))+x[7]+1735328473&4294967295,N=L+(A<<14&4294967295|A>>>18),A=R+(L^I&(N^L))+x[12]+2368359562&4294967295,R=N+(A<<20&4294967295|A>>>12),A=I+(R^N^L)+x[5]+4294588738&4294967295,I=R+(A<<4&4294967295|A>>>28),A=L+(I^R^N)+x[8]+2272392833&4294967295,L=I+(A<<11&4294967295|A>>>21),A=N+(L^I^R)+x[11]+1839030562&4294967295,N=L+(A<<16&4294967295|A>>>16),A=R+(N^L^I)+x[14]+4259657740&4294967295,R=N+(A<<23&4294967295|A>>>9),A=I+(R^N^L)+x[1]+2763975236&4294967295,I=R+(A<<4&4294967295|A>>>28),A=L+(I^R^N)+x[4]+1272893353&4294967295,L=I+(A<<11&4294967295|A>>>21),A=N+(L^I^R)+x[7]+4139469664&4294967295,N=L+(A<<16&4294967295|A>>>16),A=R+(N^L^I)+x[10]+3200236656&4294967295,R=N+(A<<23&4294967295|A>>>9),A=I+(R^N^L)+x[13]+681279174&4294967295,I=R+(A<<4&4294967295|A>>>28),A=L+(I^R^N)+x[0]+3936430074&4294967295,L=I+(A<<11&4294967295|A>>>21),A=N+(L^I^R)+x[3]+3572445317&4294967295,N=L+(A<<16&4294967295|A>>>16),A=R+(N^L^I)+x[6]+76029189&4294967295,R=N+(A<<23&4294967295|A>>>9),A=I+(R^N^L)+x[9]+3654602809&4294967295,I=R+(A<<4&4294967295|A>>>28),A=L+(I^R^N)+x[12]+3873151461&4294967295,L=I+(A<<11&4294967295|A>>>21),A=N+(L^I^R)+x[15]+530742520&4294967295,N=L+(A<<16&4294967295|A>>>16),A=R+(N^L^I)+x[2]+3299628645&4294967295,R=N+(A<<23&4294967295|A>>>9),A=I+(N^(R|~L))+x[0]+4096336452&4294967295,I=R+(A<<6&4294967295|A>>>26),A=L+(R^(I|~N))+x[7]+1126891415&4294967295,L=I+(A<<10&4294967295|A>>>22),A=N+(I^(L|~R))+x[14]+2878612391&4294967295,N=L+(A<<15&4294967295|A>>>17),A=R+(L^(N|~I))+x[5]+4237533241&4294967295,R=N+(A<<21&4294967295|A>>>11),A=I+(N^(R|~L))+x[12]+1700485571&4294967295,I=R+(A<<6&4294967295|A>>>26),A=L+(R^(I|~N))+x[3]+2399980690&4294967295,L=I+(A<<10&4294967295|A>>>22),A=N+(I^(L|~R))+x[10]+4293915773&4294967295,N=L+(A<<15&4294967295|A>>>17),A=R+(L^(N|~I))+x[1]+2240044497&4294967295,R=N+(A<<21&4294967295|A>>>11),A=I+(N^(R|~L))+x[8]+1873313359&4294967295,I=R+(A<<6&4294967295|A>>>26),A=L+(R^(I|~N))+x[15]+4264355552&4294967295,L=I+(A<<10&4294967295|A>>>22),A=N+(I^(L|~R))+x[6]+2734768916&4294967295,N=L+(A<<15&4294967295|A>>>17),A=R+(L^(N|~I))+x[13]+1309151649&4294967295,R=N+(A<<21&4294967295|A>>>11),A=I+(N^(R|~L))+x[4]+4149444226&4294967295,I=R+(A<<6&4294967295|A>>>26),A=L+(R^(I|~N))+x[11]+3174756917&4294967295,L=I+(A<<10&4294967295|A>>>22),A=N+(I^(L|~R))+x[2]+718787259&4294967295,N=L+(A<<15&4294967295|A>>>17),A=R+(L^(N|~I))+x[9]+3951481745&4294967295,C.g[0]=C.g[0]+I&4294967295,C.g[1]=C.g[1]+(N+(A<<21&4294967295|A>>>11))&4294967295,C.g[2]=C.g[2]+N&4294967295,C.g[3]=C.g[3]+L&4294967295}s.prototype.v=function(C,I){I===void 0&&(I=C.length);const R=I-this.blockSize,x=this.C;let N=this.h,L=0;for(;L<I;){if(N==0)for(;L<=R;)o(this,C,L),L+=this.blockSize;if(typeof C=="string"){for(;L<I;)if(x[N++]=C.charCodeAt(L++),N==this.blockSize){o(this,x),N=0;break}}else for(;L<I;)if(x[N++]=C[L++],N==this.blockSize){o(this,x),N=0;break}}this.h=N,this.o+=I},s.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var I=1;I<C.length-8;++I)C[I]=0;I=this.o*8;for(var R=C.length-8;R<C.length;++R)C[R]=I&255,I/=256;for(this.v(C),C=Array(16),I=0,R=0;R<4;++R)for(let x=0;x<32;x+=8)C[I++]=this.g[R]>>>x&255;return C};function u(C,I){var R=f;return Object.prototype.hasOwnProperty.call(R,C)?R[C]:R[C]=I(C)}function h(C,I){this.h=I;const R=[];let x=!0;for(let N=C.length-1;N>=0;N--){const L=C[N]|0;x&&L==I||(R[N]=L,x=!1)}this.g=R}var f={};function g(C){return-128<=C&&C<128?u(C,function(I){return new h([I|0],I<0?-1:0)}):new h([C|0],C<0?-1:0)}function _(C){if(isNaN(C)||!isFinite(C))return k;if(C<0)return B(_(-C));const I=[];let R=1;for(let x=0;C>=R;x++)I[x]=C/R|0,R*=4294967296;return new h(I,0)}function w(C,I){if(C.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(C.charAt(0)=="-")return B(w(C.substring(1),I));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=_(Math.pow(I,8));let x=k;for(let L=0;L<C.length;L+=8){var N=Math.min(8,C.length-L);const A=parseInt(C.substring(L,L+N),I);N<8?(N=_(Math.pow(I,N)),x=x.j(N).add(_(A))):(x=x.j(R),x=x.add(_(A)))}return x}var k=g(0),O=g(1),z=g(16777216);i=h.prototype,i.m=function(){if(Q(this))return-B(this).m();let C=0,I=1;for(let R=0;R<this.g.length;R++){const x=this.i(R);C+=(x>=0?x:4294967296+x)*I,I*=4294967296}return C},i.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(G(this))return"0";if(Q(this))return"-"+B(this).toString(C);const I=_(Math.pow(C,6));var R=this;let x="";for(;;){const N=pe(R,I).g;R=Z(R,N.j(I));let L=((R.g.length>0?R.g[0]:R.h)>>>0).toString(C);if(R=N,G(R))return L+x;for(;L.length<6;)L="0"+L;x=L+x}},i.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function G(C){if(C.h!=0)return!1;for(let I=0;I<C.g.length;I++)if(C.g[I]!=0)return!1;return!0}function Q(C){return C.h==-1}i.l=function(C){return C=Z(this,C),Q(C)?-1:G(C)?0:1};function B(C){const I=C.g.length,R=[];for(let x=0;x<I;x++)R[x]=~C.g[x];return new h(R,~C.h).add(O)}i.abs=function(){return Q(this)?B(this):this},i.add=function(C){const I=Math.max(this.g.length,C.g.length),R=[];let x=0;for(let N=0;N<=I;N++){let L=x+(this.i(N)&65535)+(C.i(N)&65535),A=(L>>>16)+(this.i(N)>>>16)+(C.i(N)>>>16);x=A>>>16,L&=65535,A&=65535,R[N]=A<<16|L}return new h(R,R[R.length-1]&-2147483648?-1:0)};function Z(C,I){return C.add(B(I))}i.j=function(C){if(G(this)||G(C))return k;if(Q(this))return Q(C)?B(this).j(B(C)):B(B(this).j(C));if(Q(C))return B(this.j(B(C)));if(this.l(z)<0&&C.l(z)<0)return _(this.m()*C.m());const I=this.g.length+C.g.length,R=[];for(var x=0;x<2*I;x++)R[x]=0;for(x=0;x<this.g.length;x++)for(let N=0;N<C.g.length;N++){const L=this.i(x)>>>16,A=this.i(x)&65535,ge=C.i(N)>>>16,Ze=C.i(N)&65535;R[2*x+2*N]+=A*Ze,he(R,2*x+2*N),R[2*x+2*N+1]+=L*Ze,he(R,2*x+2*N+1),R[2*x+2*N+1]+=A*ge,he(R,2*x+2*N+1),R[2*x+2*N+2]+=L*ge,he(R,2*x+2*N+2)}for(C=0;C<I;C++)R[C]=R[2*C+1]<<16|R[2*C];for(C=I;C<2*I;C++)R[C]=0;return new h(R,0)};function he(C,I){for(;(C[I]&65535)!=C[I];)C[I+1]+=C[I]>>>16,C[I]&=65535,I++}function oe(C,I){this.g=C,this.h=I}function pe(C,I){if(G(I))throw Error("division by zero");if(G(C))return new oe(k,k);if(Q(C))return I=pe(B(C),I),new oe(B(I.g),B(I.h));if(Q(I))return I=pe(C,B(I)),new oe(B(I.g),I.h);if(C.g.length>30){if(Q(C)||Q(I))throw Error("slowDivide_ only works with positive integers.");for(var R=O,x=I;x.l(C)<=0;)R=me(R),x=me(x);var N=we(R,1),L=we(x,1);for(x=we(x,2),R=we(R,2);!G(x);){var A=L.add(x);A.l(C)<=0&&(N=N.add(R),L=A),x=we(x,1),R=we(R,1)}return I=Z(C,N.j(I)),new oe(N,I)}for(N=k;C.l(I)>=0;){for(R=Math.max(1,Math.floor(C.m()/I.m())),x=Math.ceil(Math.log(R)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),L=_(R),A=L.j(I);Q(A)||A.l(C)>0;)R-=x,L=_(R),A=L.j(I);G(L)&&(L=O),N=N.add(L),C=Z(C,A)}return new oe(N,C)}i.B=function(C){return pe(this,C).h},i.and=function(C){const I=Math.max(this.g.length,C.g.length),R=[];for(let x=0;x<I;x++)R[x]=this.i(x)&C.i(x);return new h(R,this.h&C.h)},i.or=function(C){const I=Math.max(this.g.length,C.g.length),R=[];for(let x=0;x<I;x++)R[x]=this.i(x)|C.i(x);return new h(R,this.h|C.h)},i.xor=function(C){const I=Math.max(this.g.length,C.g.length),R=[];for(let x=0;x<I;x++)R[x]=this.i(x)^C.i(x);return new h(R,this.h^C.h)};function me(C){const I=C.g.length+1,R=[];for(let x=0;x<I;x++)R[x]=C.i(x)<<1|C.i(x-1)>>>31;return new h(R,C.h)}function we(C,I){const R=I>>5;I%=32;const x=C.g.length-R,N=[];for(let L=0;L<x;L++)N[L]=I>0?C.i(L+R)>>>I|C.i(L+R+1)<<32-I:C.i(L+R);return new h(N,C.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,c_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,Ci=h}).apply(typeof _g<"u"?_g:typeof self<"u"?self:typeof window<"u"?window:{});var wu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var h_,ka,d_,Nu,md,f_,p_,m_;(function(){var i,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof wu=="object"&&wu];for(var m=0;m<l.length;++m){var y=l[m];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,m){if(m)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var b=l[E];if(!(b in y))break e;y=y[b]}l=l[l.length-1],E=y[l],m=m(E),m!=E&&m!=null&&e(y,l,{configurable:!0,writable:!0,value:m})}}o("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(l){return l||function(m){var y=[],E;for(E in m)Object.prototype.hasOwnProperty.call(m,E)&&y.push([E,m[E]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function f(l){var m=typeof l;return m=="object"&&l!=null||m=="function"}function g(l,m,y){return l.call.apply(l.bind,arguments)}function _(l,m,y){return _=g,_.apply(null,arguments)}function w(l,m){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function k(l,m){function y(){}y.prototype=m.prototype,l.Z=m.prototype,l.prototype=new y,l.prototype.constructor=l,l.Ob=function(E,b,U){for(var te=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)te[Ne-2]=arguments[Ne];return m.prototype[b].apply(E,te)}}var O=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function z(l){const m=l.length;if(m>0){const y=Array(m);for(let E=0;E<m;E++)y[E]=l[E];return y}return[]}function G(l,m){for(let E=1;E<arguments.length;E++){const b=arguments[E];var y=typeof b;if(y=y!="object"?y:b?Array.isArray(b)?"array":y:"null",y=="array"||y=="object"&&typeof b.length=="number"){y=l.length||0;const U=b.length||0;l.length=y+U;for(let te=0;te<U;te++)l[y+te]=b[te]}else l.push(b)}}class Q{constructor(m,y){this.i=m,this.j=y,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function B(l){h.setTimeout(()=>{throw l},0)}function Z(){var l=C;let m=null;return l.g&&(m=l.g,l.g=l.g.next,l.g||(l.h=null),m.next=null),m}class he{constructor(){this.h=this.g=null}add(m,y){const E=oe.get();E.set(m,y),this.h?this.h.next=E:this.g=E,this.h=E}}var oe=new Q(()=>new pe,l=>l.reset());class pe{constructor(){this.next=this.g=this.h=null}set(m,y){this.h=m,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let me,we=!1,C=new he,I=()=>{const l=Promise.resolve(void 0);me=()=>{l.then(R)}};function R(){for(var l;l=Z();){try{l.h.call(l.g)}catch(y){B(y)}var m=oe;m.j(l),m.h<100&&(m.h++,l.next=m.g,m.g=l)}we=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(l,m){this.type=l,this.g=this.target=m,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var L=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,m=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};h.addEventListener("test",y,m),h.removeEventListener("test",y,m)}catch{}return l})();function A(l){return/^[\s\xa0]*$/.test(l)}function ge(l,m){N.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,m)}k(ge,N),ge.prototype.init=function(l,m){const y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=m,m=l.relatedTarget,m||(y=="mouseover"?m=l.fromElement:y=="mouseout"&&(m=l.toElement)),this.relatedTarget=m,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&ge.Z.h.call(this)},ge.prototype.h=function(){ge.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Ze="closure_listenable_"+(Math.random()*1e6|0),tt=0;function Ge(l,m,y,E,b){this.listener=l,this.proxy=null,this.src=m,this.type=y,this.capture=!!E,this.ha=b,this.key=++tt,this.da=this.fa=!1}function X(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ue(l,m,y){for(const E in l)m.call(y,l[E],E,l)}function ee(l,m){for(const y in l)m.call(void 0,l[y],y,l)}function V(l){const m={};for(const y in l)m[y]=l[y];return m}const H="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ke(l,m){let y,E;for(let b=1;b<arguments.length;b++){E=arguments[b];for(y in E)l[y]=E[y];for(let U=0;U<H.length;U++)y=H[U],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function Te(l){this.src=l,this.g={},this.h=0}Te.prototype.add=function(l,m,y,E,b){const U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);const te=Ce(l,m,E,b);return te>-1?(m=l[te],y||(m.fa=!1)):(m=new Ge(m,this.src,U,!!E,b),m.fa=y,l.push(m)),m};function Ie(l,m){const y=m.type;if(y in l.g){var E=l.g[y],b=Array.prototype.indexOf.call(E,m,void 0),U;(U=b>=0)&&Array.prototype.splice.call(E,b,1),U&&(X(m),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Ce(l,m,y,E){for(let b=0;b<l.length;++b){const U=l[b];if(!U.da&&U.listener==m&&U.capture==!!y&&U.ha==E)return b}return-1}var De="closure_lm_"+(Math.random()*1e6|0),Fe={};function Qe(l,m,y,E,b){if(Array.isArray(m)){for(let U=0;U<m.length;U++)Qe(l,m[U],y,E,b);return null}return y=jt(y),l&&l[Ze]?l.J(m,y,f(E)?!!E.capture:!1,b):At(l,m,y,!1,E,b)}function At(l,m,y,E,b,U){if(!m)throw Error("Invalid event type");const te=f(b)?!!b.capture:!!b;let Ne=ze(l);if(Ne||(l[De]=Ne=new Te(l)),y=Ne.add(m,y,E,te,U),y.proxy)return y;if(E=Wr(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)L||(b=te),b===void 0&&(b=!1),l.addEventListener(m.toString(),E,b);else if(l.attachEvent)l.attachEvent(de(m.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Wr(){function l(y){return m.call(l.src,l.listener,y)}const m=$e;return l}function ne(l,m,y,E,b){if(Array.isArray(m))for(var U=0;U<m.length;U++)ne(l,m[U],y,E,b);else E=f(E)?!!E.capture:!!E,y=jt(y),l&&l[Ze]?(l=l.i,U=String(m).toString(),U in l.g&&(m=l.g[U],y=Ce(m,y,E,b),y>-1&&(X(m[y]),Array.prototype.splice.call(m,y,1),m.length==0&&(delete l.g[U],l.h--)))):l&&(l=ze(l))&&(m=l.g[m.toString()],l=-1,m&&(l=Ce(m,y,E,b)),(y=l>-1?m[l]:null)&&ye(y))}function ye(l){if(typeof l!="number"&&l&&!l.da){var m=l.src;if(m&&m[Ze])Ie(m.i,l);else{var y=l.type,E=l.proxy;m.removeEventListener?m.removeEventListener(y,E,l.capture):m.detachEvent?m.detachEvent(de(y),E):m.addListener&&m.removeListener&&m.removeListener(E),(y=ze(m))?(Ie(y,l),y.h==0&&(y.src=null,m[De]=null)):X(l)}}}function de(l){return l in Fe?Fe[l]:Fe[l]="on"+l}function $e(l,m){if(l.da)l=!0;else{m=new ge(m,this);const y=l.listener,E=l.ha||l.src;l.fa&&ye(l),l=y.call(E,m)}return l}function ze(l){return l=l[De],l instanceof Te?l:null}var je="__closure_events_fn_"+(Math.random()*1e9>>>0);function jt(l){return typeof l=="function"?l:(l[je]||(l[je]=function(m){return l.handleEvent(m)}),l[je])}function ft(){x.call(this),this.i=new Te(this),this.M=this,this.G=null}k(ft,x),ft.prototype[Ze]=!0,ft.prototype.removeEventListener=function(l,m,y,E){ne(this,l,m,y,E)};function We(l,m){var y,E=l.G;if(E)for(y=[];E;E=E.G)y.push(E);if(l=l.M,E=m.type||m,typeof m=="string")m=new N(m,l);else if(m instanceof N)m.target=m.target||l;else{var b=m;m=new N(E,l),ke(m,b)}b=!0;let U,te;if(y)for(te=y.length-1;te>=0;te--)U=m.g=y[te],b=sn(U,E,!0,m)&&b;if(U=m.g=l,b=sn(U,E,!0,m)&&b,b=sn(U,E,!1,m)&&b,y)for(te=0;te<y.length;te++)U=m.g=y[te],b=sn(U,E,!1,m)&&b}ft.prototype.N=function(){if(ft.Z.N.call(this),this.i){var l=this.i;for(const m in l.g){const y=l.g[m];for(let E=0;E<y.length;E++)X(y[E]);delete l.g[m],l.h--}}this.G=null},ft.prototype.J=function(l,m,y,E){return this.i.add(String(l),m,!1,y,E)},ft.prototype.K=function(l,m,y,E){return this.i.add(String(l),m,!0,y,E)};function sn(l,m,y,E){if(m=l.i.g[String(m)],!m)return!0;m=m.concat();let b=!0;for(let U=0;U<m.length;++U){const te=m[U];if(te&&!te.da&&te.capture==y){const Ne=te.listener,pt=te.ha||te.src;te.fa&&Ie(l.i,te),b=Ne.call(pt,E)!==!1&&b}}return b&&!E.defaultPrevented}function Bn(l,m){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=_(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:h.setTimeout(l,m||0)}function on(l){l.g=Bn(()=>{l.g=null,l.i&&(l.i=!1,on(l))},l.l);const m=l.h;l.h=null,l.m.apply(null,m)}class kt extends x{constructor(m,y){super(),this.m=m,this.l=y,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:on(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $n(l){x.call(this),this.h=l,this.g={}}k($n,x);var mr=[];function ks(l){ue(l.g,function(m,y){this.g.hasOwnProperty(y)&&ye(m)},l),l.g={}}$n.prototype.N=function(){$n.Z.N.call(this),ks(this)},$n.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qr=h.JSON.stringify,ol=h.JSON.parse,ji=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function Kr(){}function al(){}var Gr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Rs(){N.call(this,"d")}k(Rs,N);function Vo(){N.call(this,"c")}k(Vo,N);var Pn={},Cs=null;function Qr(){return Cs=Cs||new ft}Pn.Ia="serverreachability";function Ps(l){N.call(this,Pn.Ia,l)}k(Ps,N);function gr(l){const m=Qr();We(m,new Ps(m))}Pn.STAT_EVENT="statevent";function yr(l,m){N.call(this,Pn.STAT_EVENT,l),this.stat=m}k(yr,N);function ht(l){const m=Qr();We(m,new yr(m,l))}Pn.Ja="timingevent";function Oo(l,m){N.call(this,Pn.Ja,l),this.size=m}k(Oo,N);function Yr(l,m){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},m)}function Jr(){this.g=!0}Jr.prototype.ua=function(){this.g=!1};function ll(l,m,y,E,b,U){l.info(function(){if(l.g)if(U){var te="",Ne=U.split("&");for(let Je=0;Je<Ne.length;Je++){var pt=Ne[Je].split("=");if(pt.length>1){const yt=pt[0];pt=pt[1];const dn=yt.split("_");te=dn.length>=2&&dn[1]=="type"?te+(yt+"="+pt+"&"):te+(yt+"=redacted&")}}}else te=null;else te=U;return"XMLHTTP REQ ("+E+") [attempt "+b+"]: "+m+`
`+y+`
`+te})}function ul(l,m,y,E,b,U,te){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+b+"]: "+m+`
`+y+`
`+U+" "+te})}function Hn(l,m,y,E){l.info(function(){return"XMLHTTP TEXT ("+m+"): "+Ui(l,y)+(E?" "+E:"")})}function cl(l,m){l.info(function(){return"TIMEOUT: "+m})}Jr.prototype.info=function(){};function Ui(l,m){if(!l.g)return m;if(!m)return null;try{const U=JSON.parse(m);if(U){for(l=0;l<U.length;l++)if(Array.isArray(U[l])){var y=U[l];if(!(y.length<2)){var E=y[1];if(Array.isArray(E)&&!(E.length<1)){var b=E[0];if(b!="noop"&&b!="stop"&&b!="close")for(let te=1;te<E.length;te++)E[te]=""}}}}return qr(U)}catch{return m}}var Xr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Zr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},hl;function _r(){}k(_r,Kr),_r.prototype.g=function(){return new XMLHttpRequest},hl=new _r;function Wn(l){return encodeURIComponent(String(l))}function Ns(l){var m=1;l=l.split(":");const y=[];for(;m>0&&l.length;)y.push(l.shift()),m--;return l.length&&y.push(l.join(":")),y}function _n(l,m,y,E){this.j=l,this.i=m,this.l=y,this.S=E||1,this.V=new $n(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new dl}function dl(){this.i=null,this.g="",this.h=!1}var fl={},Lo={};function Nn(l,m,y){l.M=1,l.A=Er(vn(m)),l.u=y,l.R=!0,Mo(l,null)}function Mo(l,m){l.F=Date.now(),zi(l),l.B=vn(l.A);var y=l.B,E=l.S;Array.isArray(E)||(E=[String(E)]),qo(y.i,"t",E),l.C=0,y=l.j.L,l.h=new dl,l.g=Il(l.j,y?m:null,!l.u),l.P>0&&(l.O=new kt(_(l.Y,l,l.g),l.P)),m=l.V,y=l.g,E=l.ba;var b="readystatechange";Array.isArray(b)||(b&&(mr[0]=b.toString()),b=mr);for(let U=0;U<b.length;U++){const te=Qe(y,b[U],E||m.handleEvent,!1,m.h||m);if(!te)break;m.g[te.key]=te}m=l.J?V(l.J):{},l.u?(l.v||(l.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,m)):(l.v="GET",l.g.ea(l.B,l.v,null,m)),gr(),ll(l.i,l.v,l.B,l.l,l.S,l.u)}_n.prototype.ba=function(l){l=l.target;const m=this.O;m&&Xn(l)==3?m.j():this.Y(l)},_n.prototype.Y=function(l){try{if(l==this.g)e:{const Ne=Xn(this.g),pt=this.g.ya(),Je=this.g.ca();if(!(Ne<3)&&(Ne!=3||this.g&&(this.h.h||this.g.la()||wl(this.g)))){this.K||Ne!=4||pt==7||(pt==8||Je<=0?gr(3):gr(2)),xs(this);var m=this.g.ca();this.X=m;var y=pl(this);if(this.o=m==200,ul(this.i,this.v,this.B,this.l,this.S,Ne,m),this.o){if(this.U&&!this.L){t:{if(this.g){var E,b=this.g;if((E=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(E)){var U=E;break t}}U=null}if(l=U)Hn(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,nt(this,l);else{this.o=!1,this.m=3,ht(12),vr(this),Bi(this);break e}}if(this.R){l=!0;let yt;for(;!this.K&&this.C<y.length;)if(yt=gl(this,y),yt==Lo){Ne==4&&(this.m=4,ht(14),l=!1),Hn(this.i,this.l,null,"[Incomplete Response]");break}else if(yt==fl){this.m=4,ht(15),Hn(this.i,this.l,y,"[Invalid Chunk]"),l=!1;break}else Hn(this.i,this.l,yt,null),nt(this,yt);if(ml(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ne!=4||y.length!=0||this.h.h||(this.m=1,ht(16),l=!1),this.o=this.o&&l,!l)Hn(this.i,this.l,y,"[Invalid Chunked Response]"),vr(this),Bi(this);else if(y.length>0&&!this.W){this.W=!0;var te=this.j;te.g==this&&te.aa&&!te.P&&(te.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),Ji(te),te.P=!0,ht(11))}}else Hn(this.i,this.l,y,null),nt(this,y);Ne==4&&vr(this),this.o&&!this.K&&(Ne==4?zs(this.j,this):(this.o=!1,zi(this)))}else Go(this.g),m==400&&y.indexOf("Unknown SID")>0?(this.m=3,ht(12)):(this.m=0,ht(13)),vr(this),Bi(this)}}}catch{}finally{}};function pl(l){if(!ml(l))return l.g.la();const m=wl(l.g);if(m==="")return"";let y="";const E=m.length,b=Xn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return vr(l),Bi(l),"";l.h.i=new h.TextDecoder}for(let U=0;U<E;U++)l.h.h=!0,y+=l.h.i.decode(m[U],{stream:!(b&&U==E-1)});return m.length=0,l.h.g+=y,l.C=0,l.h.g}function ml(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function gl(l,m){var y=l.C,E=m.indexOf(`
`,y);return E==-1?Lo:(y=Number(m.substring(y,E)),isNaN(y)?fl:(E+=1,E+y>m.length?Lo:(m=m.slice(E,E+y),l.C=E+y,m)))}_n.prototype.cancel=function(){this.K=!0,vr(this)};function zi(l){l.T=Date.now()+l.H,bo(l,l.H)}function bo(l,m){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Yr(_(l.aa,l),m)}function xs(l){l.D&&(h.clearTimeout(l.D),l.D=null)}_n.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(cl(this.i,this.B),this.M!=2&&(gr(),ht(17)),vr(this),this.m=2,Bi(this)):bo(this,this.T-l)};function Bi(l){l.j.I==0||l.K||zs(l.j,l)}function vr(l){xs(l);var m=l.O;m&&typeof m.dispose=="function"&&m.dispose(),l.O=null,ks(l.V),l.g&&(m=l.g,l.g=null,m.abort(),m.dispose())}function nt(l,m){try{var y=l.j;if(y.I!=0&&(y.g==l||jo(y.h,l))){if(!l.L&&jo(y.h,l)&&y.I==3){try{var E=y.Ba.g.parse(m)}catch{E=null}if(Array.isArray(E)&&E.length==3){var b=E;if(b[0]==0){e:if(!y.v){if(y.g)if(y.g.F+3e3<l.F)Us(y),cn(y);else break e;tr(y),ht(18)}}else y.xa=b[1],0<y.xa-y.K&&b[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=Yr(_(y.Va,y),6e3));$i(y.h)<=1&&y.ta&&(y.ta=void 0)}else hn(y,11)}else if((l.L||y.g==l)&&Us(y),!A(m))for(b=y.Ba.g.parse(m),m=0;m<b.length;m++){let Je=b[m];const yt=Je[0];if(!(yt<=y.K))if(y.K=yt,Je=Je[1],y.I==2)if(Je[0]=="c"){y.M=Je[1],y.ba=Je[2];const dn=Je[3];dn!=null&&(y.ka=dn,y.j.info("VER="+y.ka));const Ar=Je[4];Ar!=null&&(y.za=Ar,y.j.info("SVER="+y.za));const nr=Je[5];nr!=null&&typeof nr=="number"&&nr>0&&(E=1.5*nr,y.O=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const rr=l.g;if(rr){const Hs=rr.g?rr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hs){var U=E.h;U.g||Hs.indexOf("spdy")==-1&&Hs.indexOf("quic")==-1&&Hs.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Vs(U,U.h),U.h=null))}if(E.G){const Jo=rr.g?rr.g.getResponseHeader("X-HTTP-Session-Id"):null;Jo&&(E.wa=Jo,Ke(E.J,E.G,Jo))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-l.F,y.j.info("Handshake RTT: "+y.T+"ms")),E=y;var te=l;if(E.na=Yo(E,E.L?E.ba:null,E.W),te.L){Hi(E.h,te);var Ne=te,pt=E.O;pt&&(Ne.H=pt),Ne.D&&(xs(Ne),zi(Ne)),E.g=te}else Ut(E);y.i.length>0&&Sr(y)}else Je[0]!="stop"&&Je[0]!="close"||hn(y,7);else y.I==3&&(Je[0]=="stop"||Je[0]=="close"?Je[0]=="stop"?hn(y,7):Fs(y):Je[0]!="noop"&&y.l&&y.l.qa(Je),y.A=0)}}gr(4)}catch{}}var _c=class{constructor(l,m){this.g=l,this.map=m}};function Ds(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Fo(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function $i(l){return l.h?1:l.g?l.g.size:0}function jo(l,m){return l.h?l.h==m:l.g?l.g.has(m):!1}function Vs(l,m){l.g?l.g.add(m):l.h=m}function Hi(l,m){l.h&&l.h==m?l.h=null:l.g&&l.g.has(m)&&l.g.delete(m)}Ds.prototype.cancel=function(){if(this.i=an(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function an(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let m=l.i;for(const y of l.g.values())m=m.concat(y.G);return m}return z(l.i)}var yl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ln(l,m){if(l){l=l.split("&");for(let y=0;y<l.length;y++){const E=l[y].indexOf("=");let b,U=null;E>=0?(b=l[y].substring(0,E),U=l[y].substring(E+1)):b=l[y],m(b,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function qn(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;l instanceof qn?(this.l=l.l,Wi(this,l.j),this.o=l.o,this.g=l.g,Kn(this,l.u),this.h=l.h,ei(this,Ko(l.i)),this.m=l.m):l&&(m=String(l).match(yl))?(this.l=!1,Wi(this,m[1]||"",!0),this.o=qi(m[2]||""),this.g=qi(m[3]||"",!0),Kn(this,m[4]),this.h=qi(m[5]||"",!0),ei(this,m[6]||"",!0),this.m=qi(m[7]||"")):(this.l=!1,this.i=new Ue(null,this.l))}qn.prototype.toString=function(){const l=[];var m=this.j;m&&l.push(Ki(m,zo,!0),":");var y=this.g;return(y||m=="file")&&(l.push("//"),(m=this.o)&&l.push(Ki(m,zo,!0),"@"),l.push(Wn(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&l.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Ki(y,y.charAt(0)=="/"?Gi:Bo,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Ki(y,$o)),l.join("")},qn.prototype.resolve=function(l){const m=vn(this);let y=!!l.j;y?Wi(m,l.j):y=!!l.o,y?m.o=l.o:y=!!l.g,y?m.g=l.g:y=l.u!=null;var E=l.h;if(y)Kn(m,l.u);else if(y=!!l.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var b=m.h.lastIndexOf("/");b!=-1&&(E=m.h.slice(0,b+1)+E)}if(b=E,b==".."||b==".")E="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){E=b.lastIndexOf("/",0)==0,b=b.split("/");const U=[];for(let te=0;te<b.length;){const Ne=b[te++];Ne=="."?E&&te==b.length&&U.push(""):Ne==".."?((U.length>1||U.length==1&&U[0]!="")&&U.pop(),E&&te==b.length&&U.push("")):(U.push(Ne),E=!0)}E=U.join("/")}else E=b}return y?m.h=E:y=l.i.toString()!=="",y?ei(m,Ko(l.i)):y=!!l.m,y&&(m.m=l.m),m};function vn(l){return new qn(l)}function Wi(l,m,y){l.j=y?qi(m,!0):m,l.j&&(l.j=l.j.replace(/:$/,""))}function Kn(l,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);l.u=m}else l.u=null}function ei(l,m,y){m instanceof Ue?(l.i=m,Ls(l.i,l.l)):(y||(m=Ki(m,vc)),l.i=new Ue(m,l.l))}function Ke(l,m,y){l.i.set(m,y)}function Er(l){return Ke(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function qi(l,m){return l?m?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ki(l,m,y){return typeof l=="string"?(l=encodeURI(l).replace(m,Uo),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Uo(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var zo=/[#\/\?@]/g,Bo=/[#\?:]/g,Gi=/[#\?]/g,vc=/[#\?@]/g,$o=/#/g;function Ue(l,m){this.h=this.g=null,this.i=l||null,this.j=!!m}function Gn(l){l.g||(l.g=new Map,l.h=0,l.i&&ln(l.i,function(m,y){l.add(decodeURIComponent(m.replace(/\+/g," ")),y)}))}i=Ue.prototype,i.add=function(l,m){Gn(this),this.i=null,l=Qn(this,l);let y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(m),this.h+=1,this};function Ho(l,m){Gn(l),m=Qn(l,m),l.g.has(m)&&(l.i=null,l.h-=l.g.get(m).length,l.g.delete(m))}function Os(l,m){return Gn(l),m=Qn(l,m),l.g.has(m)}i.forEach=function(l,m){Gn(this),this.g.forEach(function(y,E){y.forEach(function(b){l.call(m,b,E,this)},this)},this)};function Wo(l,m){Gn(l);let y=[];if(typeof m=="string")Os(l,m)&&(y=y.concat(l.g.get(Qn(l,m))));else for(l=Array.from(l.g.values()),m=0;m<l.length;m++)y=y.concat(l[m]);return y}i.set=function(l,m){return Gn(this),this.i=null,l=Qn(this,l),Os(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[m]),this.h+=1,this},i.get=function(l,m){return l?(l=Wo(this,l),l.length>0?String(l[0]):m):m};function qo(l,m,y){Ho(l,m),y.length>0&&(l.i=null,l.g.set(Qn(l,m),z(y)),l.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],m=Array.from(this.g.keys());for(let E=0;E<m.length;E++){var y=m[E];const b=Wn(y);y=Wo(this,y);for(let U=0;U<y.length;U++){let te=b;y[U]!==""&&(te+="="+Wn(y[U])),l.push(te)}}return this.i=l.join("&")};function Ko(l){const m=new Ue;return m.i=l.i,l.g&&(m.g=new Map(l.g),m.h=l.h),m}function Qn(l,m){return m=String(m),l.j&&(m=m.toLowerCase()),m}function Ls(l,m){m&&!l.j&&(Gn(l),l.i=null,l.g.forEach(function(y,E){const b=E.toLowerCase();E!=b&&(Ho(this,E),qo(this,b,y))},l)),l.j=m}function Yn(l,m){const y=new Jr;if(h.Image){const E=new Image;E.onload=w(Dt,y,"TestLoadImage: loaded",!0,m,E),E.onerror=w(Dt,y,"TestLoadImage: error",!1,m,E),E.onabort=w(Dt,y,"TestLoadImage: abort",!1,m,E),E.ontimeout=w(Dt,y,"TestLoadImage: timeout",!1,m,E),h.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else m(!1)}function Jn(l,m){const y=new Jr,E=new AbortController,b=setTimeout(()=>{E.abort(),Dt(y,"TestPingServer: timeout",!1,m)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(b),U.ok?Dt(y,"TestPingServer: ok",!0,m):Dt(y,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(b),Dt(y,"TestPingServer: error",!1,m)})}function Dt(l,m,y,E,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),E(y)}catch{}}function Qi(){this.g=new ji}function wr(l){this.i=l.Sb||null,this.h=l.ab||!1}k(wr,Kr),wr.prototype.g=function(){return new un(this.i,this.h)};function un(l,m){ft.call(this),this.H=l,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}k(un,ft),i=un.prototype,i.open=function(l,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=m,this.readyState=1,xn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(m.body=l),(this.H||h).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ti(this)),this.readyState=0},i.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,xn(this)),this.g&&(this.readyState=3,xn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;_l(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function _l(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}i.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var m=l.value?l.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!l.done}))&&(this.response=this.responseText+=m)}l.done?ti(this):xn(this),this.readyState==3&&_l(this)}},i.Oa=function(l){this.g&&(this.response=this.responseText=l,ti(this))},i.Na=function(l){this.g&&(this.response=l,ti(this))},i.ga=function(){this.g&&ti(this)};function ti(l){l.readyState=4,l.l=null,l.j=null,l.B=null,xn(l)}i.setRequestHeader=function(l,m){this.A.append(l,m)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],m=this.h.entries();for(var y=m.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=m.next();return l.join(`\r
`)};function xn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(un.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function vl(l){let m="";return ue(l,function(y,E){m+=E,m+=":",m+=y,m+=`\r
`}),m}function Ms(l,m,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=vl(y),typeof l=="string"?y!=null&&Wn(y):Ke(l,m,y))}function Xe(l){ft.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}k(Xe,ft);var El=/^https?$/i,Ec=["POST","PUT"];i=Xe.prototype,i.Fa=function(l){this.H=l},i.ea=function(l,m,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);m=m?m.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():hl.g(),this.g.onreadystatechange=O(_(this.Ca,this));try{this.B=!0,this.g.open(m,String(l),!0),this.B=!1}catch(U){ni(this,U);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var b in E)y.set(b,E[b]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())y.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),b=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(Ec,m,void 0)>=0)||E||b||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,te]of y)this.g.setRequestHeader(U,te);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(U){ni(this,U)}};function ni(l,m){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=m,l.o=5,ri(l),Ir(l)}function ri(l){l.A||(l.A=!0,We(l,"complete"),We(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,We(this,"complete"),We(this,"abort"),Ir(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ir(this,!0)),Xe.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?Tr(this):this.Xa())},i.Xa=function(){Tr(this)};function Tr(l){if(l.h&&typeof u<"u"){if(l.v&&Xn(l)==4)setTimeout(l.Ca.bind(l),0);else if(We(l,"readystatechange"),Xn(l)==4){l.h=!1;try{const U=l.ca();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var y;if(!(y=m)){var E;if(E=U===0){let te=String(l.D).match(yl)[1]||null;!te&&h.self&&h.self.location&&(te=h.self.location.protocol.slice(0,-1)),E=!El.test(te?te.toLowerCase():"")}y=E}if(y)We(l,"complete"),We(l,"success");else{l.o=6;try{var b=Xn(l)>2?l.g.statusText:""}catch{b=""}l.l=b+" ["+l.ca()+"]",ri(l)}}finally{Ir(l)}}}}function Ir(l,m){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const y=l.g;l.g=null,m||We(l,"ready");try{y.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function Xn(l){return l.g?l.g.readyState:0}i.ca=function(){try{return Xn(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(l){if(this.g){var m=this.g.responseText;return l&&m.indexOf(l)==0&&(m=m.substring(l.length)),ol(m)}};function wl(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Go(l){const m={};l=(l.g&&Xn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(A(l[E]))continue;var y=Ns(l[E]);const b=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=m[b]||[];m[b]=U,U.push(y)}ee(m,function(E){return E.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zn(l,m,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||m}function bs(l){this.za=0,this.i=[],this.j=new Jr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Zn("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Zn("baseRetryDelayMs",5e3,l),this.Za=Zn("retryDelaySeedMs",1e4,l),this.Ta=Zn("forwardChannelMaxRetries",2,l),this.va=Zn("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Ds(l&&l.concurrentRequestLimit),this.Ba=new Qi,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=bs.prototype,i.ka=8,i.I=1,i.connect=function(l,m,y,E){ht(0),this.W=l,this.H=m||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.J=Yo(this,null,this.W),Sr(this)};function Fs(l){if(js(l),l.I==3){var m=l.V++,y=vn(l.J);if(Ke(y,"SID",l.M),Ke(y,"RID",m),Ke(y,"TYPE","terminate"),er(l,y),m=new _n(l,l.j,m),m.M=2,m.A=Er(vn(y)),y=!1,h.navigator&&h.navigator.sendBeacon)try{y=h.navigator.sendBeacon(m.A.toString(),"")}catch{}!y&&h.Image&&(new Image().src=m.A,y=!0),y||(m.g=Il(m.j,null),m.g.ea(m.A)),m.F=Date.now(),zi(m)}Xi(l)}function cn(l){l.g&&(Ji(l),l.g.cancel(),l.g=null)}function js(l){cn(l),l.v&&(h.clearTimeout(l.v),l.v=null),Us(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function Sr(l){if(!Fo(l.h)&&!l.m){l.m=!0;var m=l.Ea;me||I(),we||(me(),we=!0),C.add(m,l),l.D=0}}function Tl(l,m){return $i(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=m.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Yr(_(l.Ea,l,m),Bs(l,l.D)),l.D++,!0)}i.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const b=new _n(this,this.j,l);let U=this.o;if(this.U&&(U?(U=V(U),ke(U,this.U)):U=this.U),this.u!==null||this.R||(b.J=U,U=null),this.S)e:{for(var m=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(m+=E,m>4096){m=y;break e}if(m===4096||y===this.i.length-1){m=y+1;break e}}m=1e3}else m=1e3;m=Qo(this,b,m),y=vn(this.J),Ke(y,"RID",l),Ke(y,"CVER",22),this.G&&Ke(y,"X-HTTP-Session-Id",this.G),er(this,y),U&&(this.R?m="headers="+Wn(vl(U))+"&"+m:this.u&&Ms(y,this.u,U)),Vs(this.h,b),this.Ra&&Ke(y,"TYPE","init"),this.S?(Ke(y,"$req",m),Ke(y,"SID","null"),b.U=!0,Nn(b,y,null)):Nn(b,y,m),this.I=2}}else this.I==3&&(l?Yi(this,l):this.i.length==0||Fo(this.h)||Yi(this))};function Yi(l,m){var y;m?y=m.l:y=l.V++;const E=vn(l.J);Ke(E,"SID",l.M),Ke(E,"RID",y),Ke(E,"AID",l.K),er(l,E),l.u&&l.o&&Ms(E,l.u,l.o),y=new _n(l,l.j,y,l.D+1),l.u===null&&(y.J=l.o),m&&(l.i=m.G.concat(l.i)),m=Qo(l,y,1e3),y.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),Vs(l.h,y),Nn(y,E,m)}function er(l,m){l.H&&ue(l.H,function(y,E){Ke(m,E,y)}),l.l&&ue({},function(y,E){Ke(m,E,y)})}function Qo(l,m,y){y=Math.min(l.i.length,y);const E=l.l?_(l.l.Ka,l.l,l):null;e:{var b=l.i;let Ne=-1;for(;;){const pt=["count="+y];Ne==-1?y>0?(Ne=b[0].g,pt.push("ofs="+Ne)):Ne=0:pt.push("ofs="+Ne);let Je=!0;for(let yt=0;yt<y;yt++){var U=b[yt].g;const dn=b[yt].map;if(U-=Ne,U<0)Ne=Math.max(0,b[yt].g-100),Je=!1;else try{U="req"+U+"_"||"";try{var te=dn instanceof Map?dn:Object.entries(dn);for(const[Ar,nr]of te){let rr=nr;f(nr)&&(rr=qr(nr)),pt.push(U+Ar+"="+encodeURIComponent(rr))}}catch(Ar){throw pt.push(U+"type="+encodeURIComponent("_badmap")),Ar}}catch{E&&E(dn)}}if(Je){te=pt.join("&");break e}}te=void 0}return l=l.i.splice(0,y),m.G=l,te}function Ut(l){if(!l.g&&!l.v){l.Y=1;var m=l.Da;me||I(),we||(me(),we=!0),C.add(m,l),l.A=0}}function tr(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Yr(_(l.Da,l),Bs(l,l.A)),l.A++,!0)}i.Da=function(){if(this.v=null,ii(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Yr(_(this.Wa,this),l)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ht(10),cn(this),ii(this))};function Ji(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function ii(l){l.g=new _n(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var m=vn(l.na);Ke(m,"RID","rpc"),Ke(m,"SID",l.M),Ke(m,"AID",l.K),Ke(m,"CI",l.F?"0":"1"),!l.F&&l.ia&&Ke(m,"TO",l.ia),Ke(m,"TYPE","xmlhttp"),er(l,m),l.u&&l.o&&Ms(m,l.u,l.o),l.O&&(l.g.H=l.O);var y=l.g;l=l.ba,y.M=1,y.A=Er(vn(m)),y.u=null,y.R=!0,Mo(y,l)}i.Va=function(){this.C!=null&&(this.C=null,cn(this),tr(this),ht(19))};function Us(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function zs(l,m){var y=null;if(l.g==m){Us(l),Ji(l),l.g=null;var E=2}else if(jo(l.h,m))y=m.G,Hi(l.h,m),E=1;else return;if(l.I!=0){if(m.o)if(E==1){y=m.u?m.u.length:0,m=Date.now()-m.F;var b=l.D;E=Qr(),We(E,new Oo(E,y)),Sr(l)}else Ut(l);else if(b=m.m,b==3||b==0&&m.X>0||!(E==1&&Tl(l,m)||E==2&&tr(l)))switch(y&&y.length>0&&(m=l.h,m.i=m.i.concat(y)),b){case 1:hn(l,5);break;case 4:hn(l,10);break;case 3:hn(l,6);break;default:hn(l,2)}}}function Bs(l,m){let y=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(y*=2),y*m}function hn(l,m){if(l.j.info("Error code "+m),m==2){var y=_(l.bb,l),E=l.Ua;const b=!E;E=new qn(E||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Wi(E,"https"),Er(E),b?Yn(E.toString(),y):Jn(E.toString(),y)}else ht(2);l.I=0,l.l&&l.l.pa(m),Xi(l),js(l)}i.bb=function(l){l?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function Xi(l){if(l.I=0,l.ja=[],l.l){const m=an(l.h);(m.length!=0||l.i.length!=0)&&(G(l.ja,m),G(l.ja,l.i),l.h.i.length=0,z(l.i),l.i.length=0),l.l.oa()}}function Yo(l,m,y){var E=y instanceof qn?vn(y):new qn(y);if(E.g!="")m&&(E.g=m+"."+E.g),Kn(E,E.u);else{var b=h.location;E=b.protocol,m=m?m+"."+b.hostname:b.hostname,b=+b.port;const U=new qn(null);E&&Wi(U,E),m&&(U.g=m),b&&Kn(U,b),y&&(U.h=y),E=U}return y=l.G,m=l.wa,y&&m&&Ke(E,y,m),Ke(E,"VER",l.ka),er(l,E),E}function Il(l,m,y){if(m&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=l.Aa&&!l.ma?new Xe(new wr({ab:y})):new Xe(l.ma),m.Fa(l.L),m}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sl(){}i=Sl.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function $s(){}$s.prototype.g=function(l,m){return new Vt(l,m)};function Vt(l,m){ft.call(this),this.g=new bs(m),this.l=l,this.h=m&&m.messageUrlParams||null,l=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(l?l["X-WebChannel-Content-Type"]=m.messageContentType:l={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(l?l["X-WebChannel-Client-Profile"]=m.sa:l={"X-WebChannel-Client-Profile":m.sa}),this.g.U=l,(l=m&&m.Qb)&&!A(l)&&(this.g.u=l),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!A(m)&&(this.g.G=m,l=this.h,l!==null&&m in l&&(l=this.h,m in l&&delete l[m])),this.j=new si(this)}k(Vt,ft),Vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){Fs(this.g)},Vt.prototype.o=function(l){var m=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.v&&(y={},y.__data__=qr(l),l=y);m.i.push(new _c(m.Ya++,l)),m.I==3&&Sr(m)},Vt.prototype.N=function(){this.g.l=null,delete this.j,Fs(this.g),delete this.g,Vt.Z.N.call(this)};function Al(l){Rs.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var m=l.__sm__;if(m){e:{for(const y in m){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,m=m!==null&&l in m?m[l]:void 0),this.data=m}else this.data=l}k(Al,Rs);function kl(){Vo.call(this),this.status=1}k(kl,Vo);function si(l){this.g=l}k(si,Sl),si.prototype.ra=function(){We(this.g,"a")},si.prototype.qa=function(l){We(this.g,new Al(l))},si.prototype.pa=function(l){We(this.g,new kl)},si.prototype.oa=function(){We(this.g,"b")},$s.prototype.createWebChannel=$s.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,m_=function(){return new $s},p_=function(){return Qr()},f_=Pn,md={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Xr.NO_ERROR=0,Xr.TIMEOUT=8,Xr.HTTP_ERROR=6,Nu=Xr,Zr.COMPLETE="complete",d_=Zr,al.EventType=Gr,Gr.OPEN="a",Gr.CLOSE="b",Gr.ERROR="c",Gr.MESSAGE="d",ft.prototype.listen=ft.prototype.J,ka=al,Xe.prototype.listenOnce=Xe.prototype.K,Xe.prototype.getLastError=Xe.prototype.Ha,Xe.prototype.getLastErrorCode=Xe.prototype.ya,Xe.prototype.getStatus=Xe.prototype.ca,Xe.prototype.getResponseJson=Xe.prototype.La,Xe.prototype.getResponseText=Xe.prototype.la,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Fa,h_=Xe}).apply(typeof wu<"u"?wu:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qt.UNAUTHENTICATED=new qt(null),qt.GOOGLE_CREDENTIALS=new qt("google-credentials-uid"),qt.FIRST_PARTY=new qt("first-party-uid"),qt.MOCK_USER=new qt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Po="12.11.0";function tS(i){Po=i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new Ld("@firebase/firestore");function ho(){return vs.logLevel}function ie(i,...e){if(vs.logLevel<=Le.DEBUG){const t=e.map(Gd);vs.debug(`Firestore (${Po}): ${i}`,...t)}}function Br(i,...e){if(vs.logLevel<=Le.ERROR){const t=e.map(Gd);vs.error(`Firestore (${Po}): ${i}`,...t)}}function Es(i,...e){if(vs.logLevel<=Le.WARN){const t=e.map(Gd);vs.warn(`Firestore (${Po}): ${i}`,...t)}}function Gd(i){if(typeof i=="string")return i;try{return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,g_(i,s,t)}function g_(i,e,t){let s=`FIRESTORE (${Po}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Br(s),new Error(s)}function Ye(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||g_(e,o,s)}function xe(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends Hr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(qt.UNAUTHENTICATED)))}shutdown(){}}class rS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class iS{constructor(e){this.t=e,this.currentUser=qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ye(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new Pi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Pi,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Pi)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ye(typeof s.accessToken=="string",31837,{l:s}),new y_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ye(e===null||typeof e=="string",2055,{h:e}),new qt(e)}}class sS{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=qt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class oS{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new sS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(qt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class vg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,gn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ye(this.o===void 0,3512);const s=u=>{u.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ie("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new vg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ye(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new vg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=lS(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Me(i,e){return i<e?-1:i>e?1:0}function gd(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const o=i.charAt(s),u=e.charAt(s);if(o!==u)return Zh(o)===Zh(u)?Me(o,u):Zh(o)?1:-1}return Me(i.length,e.length)}const uS=55296,cS=57343;function Zh(i){const e=i.charCodeAt(0);return e>=uS&&e<=cS}function To(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="__name__";class lr{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ae(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Ae(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return lr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof lr?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=lr.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Me(e.length,t.length)}static compareSegments(e,t){const s=lr.isNumericId(e),o=lr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?lr.extractNumericId(e).compare(lr.extractNumericId(t)):gd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ci.fromString(e.substring(4,e.length-2))}}class ut extends lr{construct(e,t,s){return new ut(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new fe(K.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new ut(t)}static emptyPath(){return new ut([])}}const hS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends lr{construct(e,t,s){return new bt(e,t,s)}static isValidIdentifier(e){return hS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Eg}static keyField(){return new bt([Eg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new fe(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new fe(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new fe(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(s+=f,o++):(u(),o++)}if(u(),h)throw new fe(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(t)}static emptyPath(){return new bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.path=e}static fromPath(e){return new Ee(ut.fromString(e))}static fromName(e){return new Ee(ut.fromString(e).popFirst(5))}static empty(){return new Ee(ut.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ut.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ut.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ee(new ut(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(i,e,t){if(!t)throw new fe(K.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function fS(i,e,t,s){if(e===!0&&s===!0)throw new fe(K.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function wg(i){if(!Ee.isDocumentKey(i))throw new fe(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function __(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Yd(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Ae(12329,{type:typeof i})}function ja(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new fe(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Yd(i);throw new fe(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(i,e){const t={typeString:i};return e&&(t.value=e),t}function el(i,e){if(!__(i))throw new fe(K.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new fe(K.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=-62135596800,Ig=1e6;class st{static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Ig);return new st(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new fe(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new fe(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Tg)throw new fe(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ig}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:st._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(el(e,st._jsonSchema))return new st(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Tg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}st._jsonSchemaVersion="firestore/timestamp/1.0",st._jsonSchema={type:Et("string",st._jsonSchemaVersion),seconds:Et("number"),nanoseconds:Et("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{static fromTimestamp(e){return new Pe(e)}static min(){return new Pe(new st(0,0))}static max(){return new Pe(new st(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=-1;function pS(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Pe.fromTimestamp(s===1e9?new st(t+1,0):new st(t,s));return new Ni(o,Ee.empty(),e)}function mS(i){return new Ni(i.readTime,i.key,Ua)}class Ni{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ni(Pe.min(),Ee.empty(),Ua)}static max(){return new Ni(Pe.max(),Ee.empty(),Ua)}}function gS(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=Ee.comparator(i.documentKey,e.documentKey),t!==0?t:Me(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _S{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(i){if(i.code!==K.FAILED_PRECONDITION||i.message!==yS)throw i;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$.reject(t)}static resolve(e){return new $(((t,s)=>{t(e)}))}static reject(e){return new $(((t,s)=>{s(e)}))}static waitFor(e){return new $(((t,s)=>{let o=0,u=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++u,h&&u===o&&t()}),(g=>s(g)))})),h=!0,u===o&&t()}))}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next((o=>o?$.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new $(((s,o)=>{const u=e.length,h=new Array(u);let f=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next((w=>{h[_]=w,++f,f===u&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new $(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function vS(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function xo(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}oc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd=-1;function ac(i){return i==null}function Hu(i){return i===0&&1/i==-1/0}function ES(i){return typeof i=="number"&&Number.isInteger(i)&&!Hu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="";function wS(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Sg(e)),e=TS(i.get(t),e);return Sg(e)}function TS(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case v_:t+="";break;default:t+=u}}return t}function Sg(i){return i+v_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Ts(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function E_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t){this.comparator=e,this.root=t||Mt.EMPTY}insert(e,t){return new ct(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Mt.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Mt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tu(this.root,e,this.comparator,!0)}}class Tu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Mt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Mt.RED,this.left=o??Mt.EMPTY,this.right=u??Mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Mt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Mt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ae(27949);return e+(this.isRed()?0:1)}}Mt.EMPTY=null,Mt.RED=!0,Mt.BLACK=!1;Mt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae(57766)}get value(){throw Ae(16141)}get color(){throw Ae(16727)}get left(){throw Ae(29726)}get right(){throw Ae(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Mt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new kg(this.data.getIterator())}getIteratorFrom(e){return new kg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof St)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new St(this.comparator);return t.data=e,t}}class kg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new jn([])}unionWith(e){let t=new St(bt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new jn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return To(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new w_("Invalid base64 string: "+u):u}})(e);return new Ft(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Ft(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ft.EMPTY_BYTE_STRING=new Ft("");const IS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xi(i){if(Ye(!!i,39018),typeof i=="string"){let e=0;const t=IS.exec(i);if(Ye(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:gt(i.seconds),nanos:gt(i.nanos)}}function gt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Di(i){return typeof i=="string"?Ft.fromBase64String(i):Ft.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_="server_timestamp",I_="__type__",S_="__previous_value__",A_="__local_write_time__";function Xd(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[I_])==null?void 0:s.stringValue)===T_}function lc(i){const e=i.mapValue.fields[S_];return Xd(e)?lc(e):e}function za(i){const e=xi(i.mapValue.fields[A_].timestampValue);return new st(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,t,s,o,u,h,f,g,_,w,k){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=w,this.apiKey=k}}const Wu="(default)";class Ba{constructor(e,t){this.projectId=e,this.database=t||Wu}static empty(){return new Ba("","")}get isDefaultDatabase(){return this.database===Wu}isEqual(e){return e instanceof Ba&&e.projectId===this.projectId&&e.database===this.database}}function AS(i,e){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new fe(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ba(i.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="__type__",kS="__max__",Iu={mapValue:{}},R_="__vector__",qu="value";function Vi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Xd(i)?4:CS(i)?9007199254740991:RS(i)?10:11:Ae(28295,{value:i})}function fr(i,e){if(i===e)return!0;const t=Vi(i);if(t!==Vi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return za(i).isEqual(za(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=xi(o.timestampValue),f=xi(u.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return Di(o.bytesValue).isEqual(Di(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return gt(o.geoPointValue.latitude)===gt(u.geoPointValue.latitude)&&gt(o.geoPointValue.longitude)===gt(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return gt(o.integerValue)===gt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=gt(o.doubleValue),f=gt(u.doubleValue);return h===f?Hu(h)===Hu(f):isNaN(h)&&isNaN(f)}return!1})(i,e);case 9:return To(i.arrayValue.values||[],e.arrayValue.values||[],fr);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},f=u.mapValue.fields||{};if(Ag(h)!==Ag(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!fr(h[g],f[g])))return!1;return!0})(i,e);default:return Ae(52216,{left:i})}}function $a(i,e){return(i.values||[]).find((t=>fr(t,e)))!==void 0}function Io(i,e){if(i===e)return 0;const t=Vi(i),s=Vi(e);if(t!==s)return Me(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Me(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const f=gt(u.integerValue||u.doubleValue),g=gt(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(i,e);case 3:return Rg(i.timestampValue,e.timestampValue);case 4:return Rg(za(i),za(e));case 5:return gd(i.stringValue,e.stringValue);case 6:return(function(u,h){const f=Di(u),g=Di(h);return f.compareTo(g)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const f=u.split("/"),g=h.split("/");for(let _=0;_<f.length&&_<g.length;_++){const w=Me(f[_],g[_]);if(w!==0)return w}return Me(f.length,g.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const f=Me(gt(u.latitude),gt(h.latitude));return f!==0?f:Me(gt(u.longitude),gt(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return Cg(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var O,z,G,Q;const f=u.fields||{},g=h.fields||{},_=(O=f[qu])==null?void 0:O.arrayValue,w=(z=g[qu])==null?void 0:z.arrayValue,k=Me(((G=_==null?void 0:_.values)==null?void 0:G.length)||0,((Q=w==null?void 0:w.values)==null?void 0:Q.length)||0);return k!==0?k:Cg(_,w)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===Iu.mapValue&&h===Iu.mapValue)return 0;if(u===Iu.mapValue)return 1;if(h===Iu.mapValue)return-1;const f=u.fields||{},g=Object.keys(f),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let k=0;k<g.length&&k<w.length;++k){const O=gd(g[k],w[k]);if(O!==0)return O;const z=Io(f[g[k]],_[w[k]]);if(z!==0)return z}return Me(g.length,w.length)})(i.mapValue,e.mapValue);default:throw Ae(23264,{he:t})}}function Rg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Me(i,e);const t=xi(i),s=xi(e),o=Me(t.seconds,s.seconds);return o!==0?o:Me(t.nanos,s.nanos)}function Cg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=Io(t[o],s[o]);if(u)return u}return Me(t.length,s.length)}function So(i){return yd(i)}function yd(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=xi(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Di(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return Ee.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=yd(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${yd(t.fields[h])}`;return o+"}"})(i.mapValue):Ae(61005,{value:i})}function xu(i){switch(Vi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=lc(i);return e?16+xu(e):16;case 5:return 2*i.stringValue.length;case 6:return Di(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+xu(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return Ts(s.fields,((u,h)=>{o+=u.length+xu(h)})),o})(i.mapValue);default:throw Ae(13486,{value:i})}}function _d(i){return!!i&&"integerValue"in i}function Zd(i){return!!i&&"arrayValue"in i}function Pg(i){return!!i&&"nullValue"in i}function Ng(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Du(i){return!!i&&"mapValue"in i}function RS(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[k_])==null?void 0:s.stringValue)===R_}function xa(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return Ts(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=xa(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=xa(i.arrayValue.values[t]);return e}return{...i}}function CS(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===kS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.value=e}static empty(){return new kn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Du(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=xa(t)}setAll(e){let t=bt.emptyPath(),s={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=f.popLast()}h?s[f.lastSegment()]=xa(h):o.push(f.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Du(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Du(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Ts(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new kn(xa(this.value))}}function C_(i){const e=[];return Ts(i.fields,((t,s)=>{const o=new bt([t]);if(Du(s)){const u=C_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new jn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,t,s,o,u,h,f){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Kt(e,0,Pe.min(),Pe.min(),Pe.min(),kn.empty(),0)}static newFoundDocument(e,t,s,o){return new Kt(e,1,t,Pe.min(),s,o,0)}static newNoDocument(e,t){return new Kt(e,2,t,Pe.min(),Pe.min(),kn.empty(),0)}static newUnknownDocument(e,t){return new Kt(e,3,t,Pe.min(),Pe.min(),kn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,t){this.position=e,this.inclusive=t}}function xg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=Ee.comparator(Ee.fromName(h.referenceValue),t.key):s=Io(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Dg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!fr(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t="asc"){this.field=e,this.dir=t}}function PS(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{}class It extends P_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new xS(e,t,s):t==="array-contains"?new OS(e,s):t==="in"?new LS(e,s):t==="not-in"?new MS(e,s):t==="array-contains-any"?new bS(e,s):new It(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new DS(e,s):new VS(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Io(t,this.value)):t!==null&&Vi(this.value)===Vi(t)&&this.matchesComparison(Io(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pr extends P_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new pr(e,t)}matches(e){return N_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function N_(i){return i.op==="and"}function x_(i){return NS(i)&&N_(i)}function NS(i){for(const e of i.filters)if(e instanceof pr)return!1;return!0}function vd(i){if(i instanceof It)return i.field.canonicalString()+i.op.toString()+So(i.value);if(x_(i))return i.filters.map((e=>vd(e))).join(",");{const e=i.filters.map((t=>vd(t))).join(",");return`${i.op}(${e})`}}function D_(i,e){return i instanceof It?(function(s,o){return o instanceof It&&s.op===o.op&&s.field.isEqual(o.field)&&fr(s.value,o.value)})(i,e):i instanceof pr?(function(s,o){return o instanceof pr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,f)=>u&&D_(h,o.filters[f])),!0):!1})(i,e):void Ae(19439)}function V_(i){return i instanceof It?(function(t){return`${t.field.canonicalString()} ${t.op} ${So(t.value)}`})(i):i instanceof pr?(function(t){return t.op.toString()+" {"+t.getFilters().map(V_).join(" ,")+"}"})(i):"Filter"}class xS extends It{constructor(e,t,s){super(e,t,s),this.key=Ee.fromName(s.referenceValue)}matches(e){const t=Ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class DS extends It{constructor(e,t){super(e,"in",t),this.keys=O_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class VS extends It{constructor(e,t){super(e,"not-in",t),this.keys=O_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function O_(i,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>Ee.fromName(s.referenceValue)))}class OS extends It{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Zd(t)&&$a(t.arrayValue,this.value)}}class LS extends It{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$a(this.value.arrayValue,t)}}class MS extends It{constructor(e,t){super(e,"not-in",t)}matches(e){if($a(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!$a(this.value.arrayValue,t)}}class bS extends It{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Zd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>$a(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e,t=null,s=[],o=[],u=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=f,this.Te=null}}function Vg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new FS(i,e,t,s,o,u,h)}function ef(i){const e=xe(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>vd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),ac(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>So(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>So(s))).join(",")),e.Te=t}return e.Te}function tf(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!PS(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!D_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Dg(i.startAt,e.startAt)&&Dg(i.endAt,e.endAt)}function Ed(i){return Ee.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,t=null,s=[],o=[],u=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=f,this.endAt=g,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function jS(i,e,t,s,o,u,h,f){return new uc(i,e,t,s,o,u,h,f)}function nf(i){return new uc(i)}function Og(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function US(i){return Ee.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}function zS(i){return i.collectionGroup!==null}function Da(i){const e=xe(i);if(e.Ee===null){e.Ee=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ee.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new St(bt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(f=f.add(_.field))}))})),f})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ee.push(new Gu(u,s))})),t.has(bt.keyField().canonicalString())||e.Ee.push(new Gu(bt.keyField(),s))}return e.Ee}function cr(i){const e=xe(i);return e.Ie||(e.Ie=BS(e,Da(i))),e.Ie}function BS(i,e){if(i.limitType==="F")return Vg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Gu(o.field,u)}));const t=i.endAt?new Ku(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Ku(i.startAt.position,i.startAt.inclusive):null;return Vg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function wd(i,e,t){return new uc(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function cc(i,e){return tf(cr(i),cr(e))&&i.limitType===e.limitType}function L_(i){return`${ef(cr(i))}|lt:${i.limitType}`}function fo(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>V_(o))).join(", ")}]`),ac(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>So(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>So(o))).join(",")),`Target(${s})`})(cr(i))}; limitType=${i.limitType})`}function hc(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):Ee.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of Da(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,f,g){const _=xg(h,f,g);return h.inclusive?_<=0:_<0})(s.startAt,Da(s),o)||s.endAt&&!(function(h,f,g){const _=xg(h,f,g);return h.inclusive?_>=0:_>0})(s.endAt,Da(s),o))})(i,e)}function $S(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function M_(i){return(e,t)=>{let s=!1;for(const o of Da(i)){const u=HS(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function HS(i,e,t){const s=i.field.isKeyField()?Ee.comparator(e.key,t.key):(function(u,h,f){const g=h.data.field(u),_=f.data.field(u);return g!==null&&_!==null?Io(g,_):Ae(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Ae(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ts(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return E_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=new ct(Ee.comparator);function $r(){return WS}const b_=new ct(Ee.comparator);function Ra(...i){let e=b_;for(const t of i)e=e.insert(t.key,t);return e}function F_(i){let e=b_;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function fs(){return Va()}function j_(){return Va()}function Va(){return new Is((i=>i.toString()),((i,e)=>i.isEqual(e)))}const qS=new ct(Ee.comparator),KS=new St(Ee.comparator);function be(...i){let e=KS;for(const t of i)e=e.add(t);return e}const GS=new St(Me);function QS(){return GS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hu(e)?"-0":e}}function U_(i){return{integerValue:""+i}}function YS(i,e){return ES(e)?U_(e):rf(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(){this._=void 0}}function JS(i,e,t){return i instanceof Qu?(function(o,u){const h={fields:{[I_]:{stringValue:T_},[A_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Xd(u)&&(u=lc(u)),u&&(h.fields[S_]=u),{mapValue:h}})(t,e):i instanceof Ha?B_(i,e):i instanceof Wa?$_(i,e):(function(o,u){const h=z_(o,u),f=Lg(h)+Lg(o.Ae);return _d(h)&&_d(o.Ae)?U_(f):rf(o.serializer,f)})(i,e)}function XS(i,e,t){return i instanceof Ha?B_(i,e):i instanceof Wa?$_(i,e):t}function z_(i,e){return i instanceof Yu?(function(s){return _d(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Qu extends dc{}class Ha extends dc{constructor(e){super(),this.elements=e}}function B_(i,e){const t=H_(e);for(const s of i.elements)t.some((o=>fr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Wa extends dc{constructor(e){super(),this.elements=e}}function $_(i,e){let t=H_(e);for(const s of i.elements)t=t.filter((o=>!fr(o,s)));return{arrayValue:{values:t}}}class Yu extends dc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Lg(i){return gt(i.integerValue||i.doubleValue)}function H_(i){return Zd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function ZS(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof Ha&&o instanceof Ha||s instanceof Wa&&o instanceof Wa?To(s.elements,o.elements,fr):s instanceof Yu&&o instanceof Yu?fr(s.Ae,o.Ae):s instanceof Qu&&o instanceof Qu})(i.transform,e.transform)}class eA{constructor(e,t){this.version=e,this.transformResults=t}}class jr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new jr}static exists(e){return new jr(void 0,e)}static updateTime(e){return new jr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class fc{}function W_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new K_(i.key,jr.none()):new tl(i.key,i.data,jr.none());{const t=i.data,s=kn.empty();let o=new St(bt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Ss(i.key,s,new jn(o.toArray()),jr.none())}}function tA(i,e,t){i instanceof tl?(function(o,u,h){const f=o.value.clone(),g=bg(o.fieldTransforms,u,h.transformResults);f.setAll(g),u.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(i,e,t):i instanceof Ss?(function(o,u,h){if(!Vu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const f=bg(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(q_(o)),g.setAll(f),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Oa(i,e,t,s){return i instanceof tl?(function(u,h,f,g){if(!Vu(u.precondition,h))return f;const _=u.value.clone(),w=Fg(u.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(i,e,t,s):i instanceof Ss?(function(u,h,f,g){if(!Vu(u.precondition,h))return f;const _=Fg(u.fieldTransforms,g,h),w=h.data;return w.setAll(q_(u)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),f===null?null:f.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((k=>k.field)))})(i,e,t,s):(function(u,h,f){return Vu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(i,e,t)}function nA(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=z_(s.transform,o||null);u!=null&&(t===null&&(t=kn.empty()),t.set(s.field,u))}return t||null}function Mg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&To(s,o,((u,h)=>ZS(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class tl extends fc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ss extends fc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function q_(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function bg(i,e,t){const s=new Map;Ye(i.length===t.length,32656,{Ve:t.length,de:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,f=e.data.field(u.field);s.set(u.field,XS(h,f,t[o]))}return s}function Fg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,JS(u,h,e))}return s}class K_ extends fc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rA extends fc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&tA(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Oa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Oa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=j_();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let f=this.applyToLocalView(h,u.mutatedFields);f=t.has(o.key)?null:f;const g=W_(h,f);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Pe.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),be())}isEqual(e){return this.batchId===e.batchId&&To(this.mutations,e.mutations,((t,s)=>Mg(t,s)))&&To(this.baseMutations,e.baseMutations,((t,s)=>Mg(t,s)))}}class sf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ye(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return qS})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new sf(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vt,Be;function aA(i){switch(i){case K.OK:return Ae(64938);case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return Ae(15467,{code:i})}}function G_(i){if(i===void 0)return Br("GRPC error has no .code"),K.UNKNOWN;switch(i){case vt.OK:return K.OK;case vt.CANCELLED:return K.CANCELLED;case vt.UNKNOWN:return K.UNKNOWN;case vt.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case vt.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case vt.INTERNAL:return K.INTERNAL;case vt.UNAVAILABLE:return K.UNAVAILABLE;case vt.UNAUTHENTICATED:return K.UNAUTHENTICATED;case vt.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case vt.NOT_FOUND:return K.NOT_FOUND;case vt.ALREADY_EXISTS:return K.ALREADY_EXISTS;case vt.PERMISSION_DENIED:return K.PERMISSION_DENIED;case vt.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case vt.ABORTED:return K.ABORTED;case vt.OUT_OF_RANGE:return K.OUT_OF_RANGE;case vt.UNIMPLEMENTED:return K.UNIMPLEMENTED;case vt.DATA_LOSS:return K.DATA_LOSS;default:return Ae(39323,{code:i})}}(Be=vt||(vt={}))[Be.OK=0]="OK",Be[Be.CANCELLED=1]="CANCELLED",Be[Be.UNKNOWN=2]="UNKNOWN",Be[Be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Be[Be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Be[Be.NOT_FOUND=5]="NOT_FOUND",Be[Be.ALREADY_EXISTS=6]="ALREADY_EXISTS",Be[Be.PERMISSION_DENIED=7]="PERMISSION_DENIED",Be[Be.UNAUTHENTICATED=16]="UNAUTHENTICATED",Be[Be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Be[Be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Be[Be.ABORTED=10]="ABORTED",Be[Be.OUT_OF_RANGE=11]="OUT_OF_RANGE",Be[Be.UNIMPLEMENTED=12]="UNIMPLEMENTED",Be[Be.INTERNAL=13]="INTERNAL",Be[Be.UNAVAILABLE=14]="UNAVAILABLE",Be[Be.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=new Ci([4294967295,4294967295],0);function jg(i){const e=lA().encode(i),t=new c_;return t.update(e),new Uint8Array(t.digest())}function Ug(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Ci([t,s],0),new Ci([o,u],0)]}class of{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ca(`Invalid padding: ${t}`);if(s<0)throw new Ca(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ca(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ca(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ci.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(Ci.fromNumber(s)));return o.compare(uA)===1&&(o=new Ci([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=jg(e),[s,o]=Ug(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new of(u,o,t);return s.forEach((f=>h.insert(f))),h}insert(e){if(this.ge===0)return;const t=jg(e),[s,o]=Ug(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ca extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,nl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new pc(Pe.min(),o,new ct(Me),$r(),be())}}class nl{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new nl(s,t,be(),be(),be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class Q_{constructor(e,t){this.targetId=e,this.Ce=t}}class Y_{constructor(e,t,s=Ft.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class zg{constructor(){this.ve=0,this.Fe=Bg(),this.Me=Ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=be(),t=be(),s=be();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:Ae(38017,{changeType:u})}})),new nl(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Bg()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Ye(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class cA{constructor(e){this.Ge=e,this.ze=new Map,this.je=$r(),this.Je=Su(),this.He=Su(),this.Ze=new ct(Me)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:Ae(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(Ed(u))if(s===0){const h=new Ee(u.path);this.et(t,h,Kt.newNoDocument(h,Pe.min()))}else Ye(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const f=this.ut(e),g=f?this.ct(f,e,h):1;if(g!==0){this.it(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,f;try{h=Di(s).toUint8Array()}catch(g){if(g instanceof w_)return Es("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new of(h,o,u)}catch(g){return Es(g instanceof Ca?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.ge===0?null:f}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Ge.ht(),f=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(f)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const f=this.ot(h);if(f){if(u.current&&Ed(f.target)){const g=new Ee(f.target.path);this.Et(g).has(h)||this.It(h,g)||this.et(h,g,Kt.newNoDocument(g,e))}u.Be&&(t.set(h,u.ke()),u.qe())}}));let s=be();this.He.forEach(((u,h)=>{let f=!0;h.forEachWhile((g=>{const _=this.ot(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(s=s.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new pc(e,t,this.Ze,this.je,s);return this.je=$r(),this.Je=Su(),this.He=Su(),this.Ze=new ct(Me),o}Ye(e,t){if(!this.rt(e))return;const s=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.It(e,t)?o.Ke(t,1):o.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new zg,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new St(Me),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new St(Me),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new zg),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Su(){return new ct(Ee.comparator)}function Bg(){return new ct(Ee.comparator)}const hA={asc:"ASCENDING",desc:"DESCENDING"},dA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fA={and:"AND",or:"OR"};class pA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Td(i,e){return i.useProto3Json||ac(e)?e:{value:e}}function Ju(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function J_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function mA(i,e){return Ju(i,e.toTimestamp())}function hr(i){return Ye(!!i,49232),Pe.fromTimestamp((function(t){const s=xi(t);return new st(s.seconds,s.nanos)})(i))}function af(i,e){return Id(i,e).canonicalString()}function Id(i,e){const t=(function(o){return new ut(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function X_(i){const e=ut.fromString(i);return Ye(rv(e),10190,{key:e.toString()}),e}function Sd(i,e){return af(i.databaseId,e.path)}function ed(i,e){const t=X_(e);if(t.get(1)!==i.databaseId.projectId)throw new fe(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new fe(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new Ee(ev(t))}function Z_(i,e){return af(i.databaseId,e)}function gA(i){const e=X_(i);return e.length===4?ut.emptyPath():ev(e)}function Ad(i){return new ut(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function ev(i){return Ye(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function $g(i,e,t){return{name:Sd(i,e),fields:t.value.mapValue.fields}}function yA(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:Ae(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,w){return _.useProto3Json?(Ye(w===void 0||typeof w=="string",58123),Ft.fromBase64String(w||"")):(Ye(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Ft.fromUint8Array(w||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(_){const w=_.code===void 0?K.UNKNOWN:G_(_.code);return new fe(w,_.message||"")})(h);t=new Y_(s,o,u,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=ed(i,s.document.name),u=hr(s.document.updateTime),h=s.document.createTime?hr(s.document.createTime):Pe.min(),f=new kn({mapValue:{fields:s.document.fields}}),g=Kt.newFoundDocument(o,u,h,f),_=s.targetIds||[],w=s.removedTargetIds||[];t=new Ou(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=ed(i,s.document),u=s.readTime?hr(s.readTime):Pe.min(),h=Kt.newNoDocument(o,u),f=s.removedTargetIds||[];t=new Ou([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=ed(i,s.document),u=s.removedTargetIds||[];t=new Ou([],u,o,null)}else{if(!("filter"in e))return Ae(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new oA(o,u),f=s.targetId;t=new Q_(f,h)}}return t}function _A(i,e){let t;if(e instanceof tl)t={update:$g(i,e.key,e.value)};else if(e instanceof K_)t={delete:Sd(i,e.key)};else if(e instanceof Ss)t={update:$g(i,e.key,e.data),updateMask:RA(e.fieldMask)};else{if(!(e instanceof rA))return Ae(16599,{dt:e.type});t={verify:Sd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const f=h.transform;if(f instanceof Qu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Ha)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Wa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Yu)return{fieldPath:h.field.canonicalString(),increment:f.Ae};throw Ae(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:mA(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Ae(27497)})(i,e.precondition)),t}function vA(i,e){return i&&i.length>0?(Ye(e!==void 0,14353),i.map((t=>(function(o,u){let h=o.updateTime?hr(o.updateTime):hr(u);return h.isEqual(Pe.min())&&(h=hr(u)),new eA(h,o.transformResults||[])})(t,e)))):[]}function EA(i,e){return{documents:[Z_(i,e.path)]}}function wA(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Z_(i,o);const u=(function(_){if(_.length!==0)return nv(pr.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((w=>(function(O){return{field:po(O.field),direction:SA(O.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=Td(i,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function TA(i){let e=gA(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ye(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=(function(k){const O=tv(k);return O instanceof pr&&x_(O)?O.getFilters():[O]})(t.where));let h=[];t.orderBy&&(h=(function(k){return k.map((O=>(function(G){return new Gu(mo(G.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(G.direction))})(O)))})(t.orderBy));let f=null;t.limit&&(f=(function(k){let O;return O=typeof k=="object"?k.value:k,ac(O)?null:O})(t.limit));let g=null;t.startAt&&(g=(function(k){const O=!!k.before,z=k.values||[];return new Ku(z,O)})(t.startAt));let _=null;return t.endAt&&(_=(function(k){const O=!k.before,z=k.values||[];return new Ku(z,O)})(t.endAt)),jS(e,o,h,u,f,"F",g,_)}function IA(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function tv(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=mo(t.unaryFilter.field);return It.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=mo(t.unaryFilter.field);return It.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=mo(t.unaryFilter.field);return It.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=mo(t.unaryFilter.field);return It.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ae(61313);default:return Ae(60726)}})(i):i.fieldFilter!==void 0?(function(t){return It.create(mo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ae(58110);default:return Ae(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return pr.create(t.compositeFilter.filters.map((s=>tv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ae(1026)}})(t.compositeFilter.op))})(i):Ae(30097,{filter:i})}function SA(i){return hA[i]}function AA(i){return dA[i]}function kA(i){return fA[i]}function po(i){return{fieldPath:i.canonicalString()}}function mo(i){return bt.fromServerFormat(i.fieldPath)}function nv(i){return i instanceof It?(function(t){if(t.op==="=="){if(Ng(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NAN"}};if(Pg(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ng(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NOT_NAN"}};if(Pg(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:po(t.field),op:AA(t.op),value:t.value}}})(i):i instanceof pr?(function(t){const s=t.getFilters().map((o=>nv(o)));return s.length===1?s[0]:{compositeFilter:{op:kA(t.op),filters:s}}})(i):Ae(54877,{filter:i})}function RA(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function rv(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}function iv(i){return!!i&&typeof i._toProto=="function"&&i._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,t,s,o,u=Pe.min(),h=Pe.min(),f=Ft.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new Si(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e){this.yt=e}}function PA(i){const e=TA({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?wd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(){this.bn=new xA}addToCollectionParentIndex(e,t){return this.bn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(Ni.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(Ni.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class xA{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new St(ut.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new St(ut.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},sv=41943040;class rn{static withCacheSize(e){return new rn(e,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn.DEFAULT_COLLECTION_PERCENTILE=10,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rn.DEFAULT=new rn(sv,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rn.DISABLED=new rn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ao(0)}static ar(){return new Ao(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="LruGarbageCollector",DA=1048576;function qg([i,e],[t,s]){const o=Me(i,t);return o===0?Me(e,s):o}class VA{constructor(e){this.Pr=e,this.buffer=new St(qg),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();qg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class OA{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){ie(Wg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){xo(t)?ie(Wg,"Ignoring IndexedDB error during garbage collection: ",t):await No(t)}await this.Ar(3e5)}))}}class LA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return $.resolve(oc.ce);const s=new VA(t);return this.Vr.forEachTarget(e,(o=>s.Ir(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>s.Ir(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Hg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hg):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,o,u,h,f,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((k=>(k>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${k}`),o=this.params.maximumSequenceNumbersToCollect):o=k,h=Date.now(),this.nthSequenceNumber(e,o)))).next((k=>(s=k,f=Date.now(),this.removeTargets(e,s,t)))).next((k=>(u=k,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((k=>(_=Date.now(),ho()<=Le.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${u} targets in `+(g-f)+`ms
	Removed ${k} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:k}))))}}function MA(i,e){return new LA(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(){this.changes=new Is((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Kt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Oa(s.mutation,o,jn.empty(),st.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,be()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=be()){const o=fs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Ra();return u.forEach(((f,g)=>{h=h.insert(f,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=fs();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,be())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,s,o){let u=$r();const h=Va(),f=(function(){return Va()})();return t.forEach(((g,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof Ss)?u=u.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),Oa(w.mutation,_,w.mutation.getFieldMask(),st.now())):h.set(_.key,jn.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((_,w)=>h.set(_,w))),t.forEach(((_,w)=>f.set(_,new FA(w,h.get(_)??null)))),f)))}recalculateAndSaveOverlays(e,t){const s=Va();let o=new ct(((h,f)=>h-f)),u=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let w=s.get(g)||jn.empty();w=f.applyToLocalView(_,w),s.set(g,w);const k=(o.get(f.batchId)||be()).add(g);o=o.insert(f.batchId,k)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),_=g.key,w=g.value,k=j_();w.forEach((O=>{if(!u.has(O)){const z=W_(t.get(O),s.get(O));z!==null&&k.set(O,z),u=u.add(O)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,k))}return $.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return US(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):zS(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):$.resolve(fs());let f=Ua,g=u;return h.next((_=>$.forEach(_,((w,k)=>(f<k.largestBatchId&&(f=k.largestBatchId),u.get(w)?$.resolve():this.remoteDocumentCache.getEntry(e,w).next((O=>{g=g.insert(w,O)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,g,_,be()))).next((w=>({batchId:f,changes:F_(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ee(t)).next((s=>{let o=Ra();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Ra();return this.indexManager.getCollectionParents(e,u).next((f=>$.forEach(f,(g=>{const _=(function(k,O){return new uc(O,null,k.explicitOrderBy.slice(),k.filters.slice(),k.limit,k.limitType,k.startAt,k.endAt)})(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((w=>{w.forEach(((k,O)=>{h=h.insert(k,O)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,Kt.newInvalidDocument(w)))}));let f=Ra();return h.forEach(((g,_)=>{const w=u.get(g);w!==void 0&&Oa(w.mutation,_,jn.empty(),st.now()),hc(t,_)&&(f=f.insert(g,_))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return $.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:hr(o.createTime)}})(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:PA(o.bundledQuery),readTime:hr(o.readTime)}})(t)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(){this.overlays=new ct(Ee.comparator),this.Lr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=fs();return $.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.St(e,t,u)})),$.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Lr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Lr.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const o=fs(),u=t.length+1,h=new Ee(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new ct(((_,w)=>_-w));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=u.get(_.largestBatchId);w===null&&(w=fs(),u=u.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const f=fs(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,w)=>f.set(_,w))),!(f.size()>=o)););return $.resolve(f)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Lr.get(o.largestBatchId).delete(s.key);this.Lr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new sA(t,s));let u=this.Lr.get(t);u===void 0&&(u=be(),this.Lr.set(t,u)),this.Lr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(){this.sessionToken=Ft.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(){this.kr=new St(Nt.qr),this.Kr=new St(Nt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new Nt(e,t);this.kr=this.kr.add(s),this.Kr=this.Kr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Nt(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new Ee(new ut([])),s=new Nt(t,e),o=new Nt(t,e+1),u=[];return this.Kr.forEachInRange([s,o],(h=>{this.Wr(h),u.push(h.key)})),u}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new Ee(new ut([])),s=new Nt(t,e),o=new Nt(t,e+1);let u=be();return this.Kr.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new Nt(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Nt{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return Ee.comparator(e.key,t.key)||Me(e.Jr,t.Jr)}static Ur(e,t){return Me(e.Jr,t.Jr)||Ee.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new St(Nt.qr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new iA(u,t,s,o);this.mutationQueue.push(h);for(const f of o)this.Hr=this.Hr.add(new Nt(f.key,u)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Jd:this.Yn-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Nt(t,0),o=new Nt(t,Number.POSITIVE_INFINITY),u=[];return this.Hr.forEachInRange([s,o],(h=>{const f=this.Zr(h.Jr);u.push(f)})),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new St(Me);return t.forEach((o=>{const u=new Nt(o,0),h=new Nt(o,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([u,h],(f=>{s=s.add(f.Jr)}))})),$.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;Ee.isDocumentKey(u)||(u=u.child(""));const h=new Nt(new Ee(u),0);let f=new St(Me);return this.Hr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(f=f.add(g.Jr)),!0)}),h),$.resolve(this.Yr(f))}Yr(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ye(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return $.forEach(t.mutations,(o=>{const u=new Nt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Hr=s}))}nr(e){}containsKey(e,t){const s=new Nt(t,0),o=this.Hr.firstAfterOrEqual(s);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e){this.ti=e,this.docs=(function(){return new ct(Ee.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():Kt.newInvalidDocument(t))}getEntries(e,t){let s=$r();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Kt.newInvalidDocument(o))})),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=$r();const h=t.path,f=new Ee(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||gS(mS(w),s)<=0||(o.has(w.key)||hc(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(e,t,s,o){Ae(9500)}ni(e,t){return $.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new WA(this)}getSize(e){return $.resolve(this.size)}}class WA extends bA{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(s)})),$.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e){this.persistence=e,this.ri=new Is((t=>ef(t)),tf),this.lastRemoteSnapshotVersion=Pe.min(),this.highestTargetId=0,this.ii=0,this.si=new lf,this.targetCount=0,this.oi=Ao._r()}forEachTarget(e,t){return this.ri.forEach(((s,o)=>t(o))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),$.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Ao(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.lr(t),$.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ri.forEach(((h,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.ri.delete(h),u.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),$.waitFor(u).next((()=>o))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),$.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),$.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,t){this._i={},this.overlays={},this.ai=new oc(0),this.ui=!1,this.ui=!0,this.ci=new BA,this.referenceDelegate=e(this),this.li=new qA(this),this.indexManager=new NA,this.remoteDocumentCache=(function(o){return new HA(o)})((s=>this.referenceDelegate.hi(s))),this.serializer=new CA(t),this.Pi=new UA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new zA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new $A(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){ie("MemoryPersistence","Starting transaction:",e);const o=new KA(this.ai.next());return this.referenceDelegate.Ti(),s(o).next((u=>this.referenceDelegate.Ei(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ii(e,t){return $.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class KA extends _S{constructor(e){super(),this.currentSequenceNumber=e}}class uf{constructor(e){this.persistence=e,this.Ri=new lf,this.Ai=null}static Vi(e){return new uf(e)}get di(){if(this.Ai)return this.Ai;throw Ae(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.di.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.di,(s=>{const o=Ee.fromPath(s);return this.mi(e,o).next((u=>{u||t.removeEntry(o,Pe.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return $.or([()=>$.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class Xu{constructor(e,t){this.persistence=e,this.fi=new Is((s=>wS(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=MA(this,t)}static Vi(e,t){return new Xu(e,t)}Ti(){}Ei(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return $.forEach(this.fi,((s,o)=>this.wr(e,s,o).next((u=>u?$.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ni(e,(h=>this.wr(e,h,t).next((f=>{f||(s++,u.removeEntry(h,Pe.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),$.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=xu(e.data.value)),t}wr(e,t,s){return $.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Ts=s,this.Es=o}static Is(e,t){let s=be(),o=be();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new cf(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return ww()?8:vS(Gt())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.gs(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ps(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new GA;return this.ys(e,t,h).next((f=>{if(u.result=f,this.As)return this.ws(e,t,h,f.size)}))})).next((()=>u.result))}ws(e,t,s,o){return s.documentReadCount<this.Vs?(ho()<=Le.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",fo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(ho()<=Le.DEBUG&&ie("QueryEngine","Query:",fo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(ho()<=Le.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",fo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cr(t))):$.resolve())}gs(e,t){if(Og(t))return $.resolve(null);let s=cr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=wd(t,null,"F"),s=cr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=be(...u);return this.fs.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.Ss(t,f);return this.bs(t,_,h,g.readTime)?this.gs(e,wd(t,null,"F")):this.Ds(e,_,t,g)}))))})))))}ps(e,t,s,o){return Og(t)||o.isEqual(Pe.min())?$.resolve(null):this.fs.getDocuments(e,s).next((u=>{const h=this.Ss(t,u);return this.bs(t,h,s,o)?$.resolve(null):(ho()<=Le.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),fo(t)),this.Ds(e,h,t,pS(o,Ua)).next((f=>f)))}))}Ss(e,t){let s=new St(M_(e));return t.forEach(((o,u)=>{hc(e,u)&&(s=s.add(u))})),s}bs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ys(e,t,s){return ho()<=Le.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",fo(t)),this.fs.getDocumentsMatchingQuery(e,t,Ni.min(),s)}Ds(e,t,s,o){return this.fs.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf="LocalStore",YA=3e8;class JA{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new ct(Me),this.Fs=new Is((u=>ef(u)),tf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jA(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function XA(i,e,t,s){return new JA(i,e,t,s)}async function av(i,e){const t=xe(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],f=[];let g=be();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of u){f.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next((_=>({Ns:_,removedBatchIds:h,addedBatchIds:f})))}))}))}function ZA(i,e){const t=xe(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.xs.newChangeBuffer({trackRemovals:!0});return(function(f,g,_,w){const k=_.batch,O=k.keys();let z=$.resolve();return O.forEach((G=>{z=z.next((()=>w.getEntry(g,G))).next((Q=>{const B=_.docVersions.get(G);Ye(B!==null,48541),Q.version.compareTo(B)<0&&(k.applyToRemoteDocument(Q,_),Q.isValidDocument()&&(Q.setReadTime(_.commitVersion),w.addEntry(Q)))}))})),z.next((()=>f.mutationQueue.removeMutationBatch(g,k)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(f){let g=be();for(let _=0;_<f.mutationResults.length;++_)f.mutationResults[_].transformResults.length>0&&(g=g.add(f.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function lv(i){const e=xe(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function ek(i,e){const t=xe(i),s=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const f=[];e.targetChanges.forEach(((w,k)=>{const O=o.get(k);if(!O)return;f.push(t.li.removeMatchingKeys(u,w.removedDocuments,k).next((()=>t.li.addMatchingKeys(u,w.addedDocuments,k))));let z=O.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(k)!==null?z=z.withResumeToken(Ft.EMPTY_BYTE_STRING,Pe.min()).withLastLimboFreeSnapshotVersion(Pe.min()):w.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(w.resumeToken,s)),o=o.insert(k,z),(function(Q,B,Z){return Q.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=YA?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0})(O,z,w)&&f.push(t.li.updateTargetData(u,z))}));let g=$r(),_=be();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))})),f.push(tk(u,h,e.documentUpdates).next((w=>{g=w.Bs,_=w.Ls}))),!s.isEqual(Pe.min())){const w=t.li.getLastRemoteSnapshotVersion(u).next((k=>t.li.setTargetsMetadata(u,u.currentSequenceNumber,s)));f.push(w)}return $.waitFor(f).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,g,_))).next((()=>g))})).then((u=>(t.vs=o,u)))}function tk(i,e,t){let s=be(),o=be();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=$r();return t.forEach(((f,g)=>{const _=u.get(f);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Pe.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):ie(hf,"Ignoring outdated watch update for ",f,". Current version:",_.version," Watch version:",g.version)})),{Bs:h,Ls:o}}))}function nk(i,e){const t=xe(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Jd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function rk(i,e){const t=xe(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.li.getTargetData(s,e).next((u=>u?(o=u,$.resolve(o)):t.li.allocateTargetId(s).next((h=>(o=new Si(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.vs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function kd(i,e,t){const s=xe(i),o=s.vs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!xo(h))throw h;ie(hf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.vs=s.vs.remove(e),s.Fs.delete(o.target)}function Kg(i,e,t){const s=xe(i);let o=Pe.min(),u=be();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,w){const k=xe(g),O=k.Fs.get(w);return O!==void 0?$.resolve(k.vs.get(O)):k.li.getTargetData(_,w)})(s,h,cr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(h,f.targetId).next((g=>{u=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:Pe.min(),t?u:be()))).next((f=>(ik(s,$S(e),f),{documents:f,ks:u})))))}function ik(i,e,t){let s=i.Ms.get(e)||Pe.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.Ms.set(e,s)}class Gg{constructor(){this.activeTargetIds=QS()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sk{constructor(){this.vo=new Gg,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Gg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="ConnectivityMonitor";class Yg{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){ie(Qg,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){ie(Qg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Au=null;function Rd(){return Au===null?Au=(function(){return 268435456+Math.round(2147483648*Math.random())})():Au++,"0x"+Au.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="RestConnection",ak={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class lk{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.$o=this.databaseId.database===Wu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const h=Rd(),f=this.Qo(e,t.toUriEncodedString());ie(td,`Sending RPC '${e}' ${h}:`,f,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(g,o,u);const{host:_}=new URL(f),w=Qa(_);return this.zo(e,f,g,s,w).then((k=>(ie(td,`Received RPC '${e}' ${h}: `,k),k)),(k=>{throw Es(td,`RPC '${e}' ${h} failed with error: `,k,"url: ",f,"request:",s),k}))}jo(e,t,s,o,u,h){return this.Wo(e,t,s,o,u)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Po})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Qo(e,t){const s=ak[e];let o=`${this.Ko}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="WebChannelConnection",Ia=(i,e,t)=>{i.listen(e,(s=>{try{t(s)}catch(o){setTimeout((()=>{throw o}),0)}}))};class vo extends lk{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!vo.c_){const e=p_();Ia(e,f_.STAT_EVENT,(t=>{t.stat===md.PROXY?ie(Wt,"STAT_EVENT: detected buffering proxy"):t.stat===md.NOPROXY&&ie(Wt,"STAT_EVENT: detected no buffering proxy")})),vo.c_=!0}}zo(e,t,s,o,u){const h=Rd();return new Promise(((f,g)=>{const _=new h_;_.setWithCredentials(!0),_.listenOnce(d_.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Nu.NO_ERROR:const k=_.getResponseJson();ie(Wt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(k)),f(k);break;case Nu.TIMEOUT:ie(Wt,`RPC '${e}' ${h} timed out`),g(new fe(K.DEADLINE_EXCEEDED,"Request time out"));break;case Nu.HTTP_ERROR:const O=_.getStatus();if(ie(Wt,`RPC '${e}' ${h} failed with status:`,O,"response text:",_.getResponseText()),O>0){let z=_.getResponseJson();Array.isArray(z)&&(z=z[0]);const G=z==null?void 0:z.error;if(G&&G.status&&G.message){const Q=(function(Z){const he=Z.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(he)>=0?he:K.UNKNOWN})(G.status);g(new fe(Q,G.message))}else g(new fe(K.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new fe(K.UNAVAILABLE,"Connection failed."));break;default:Ae(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{ie(Wt,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);ie(Wt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,s,15)}))}T_(e,t,s){const o=Rd(),u=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=this.createWebChannelTransport(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Go(f.initMessageHeaders,t,s),f.encodeInitMessageHeaders=!0;const _=u.join("");ie(Wt,`Creating RPC '${e}' stream ${o}: ${_}`,f);const w=h.createWebChannel(_,f);this.E_(w);let k=!1,O=!1;const z=new uk({Jo:G=>{O?ie(Wt,`Not sending because RPC '${e}' stream ${o} is closed:`,G):(k||(ie(Wt,`Opening RPC '${e}' stream ${o} transport.`),w.open(),k=!0),ie(Wt,`RPC '${e}' stream ${o} sending:`,G),w.send(G))},Ho:()=>w.close()});return Ia(w,ka.EventType.OPEN,(()=>{O||(ie(Wt,`RPC '${e}' stream ${o} transport opened.`),z.i_())})),Ia(w,ka.EventType.CLOSE,(()=>{O||(O=!0,ie(Wt,`RPC '${e}' stream ${o} transport closed`),z.o_(),this.I_(w))})),Ia(w,ka.EventType.ERROR,(G=>{O||(O=!0,Es(Wt,`RPC '${e}' stream ${o} transport errored. Name:`,G.name,"Message:",G.message),z.o_(new fe(K.UNAVAILABLE,"The operation could not be completed")))})),Ia(w,ka.EventType.MESSAGE,(G=>{var Q;if(!O){const B=G.data[0];Ye(!!B,16349);const Z=B,he=(Z==null?void 0:Z.error)||((Q=Z[0])==null?void 0:Q.error);if(he){ie(Wt,`RPC '${e}' stream ${o} received error:`,he);const oe=he.status;let pe=(function(C){const I=vt[C];if(I!==void 0)return G_(I)})(oe),me=he.message;oe==="NOT_FOUND"&&me.includes("database")&&me.includes("does not exist")&&me.includes(this.databaseId.database)&&Es(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),pe===void 0&&(pe=K.INTERNAL,me="Unknown error status: "+oe+" with message "+he.message),O=!0,z.o_(new fe(pe,me)),w.close()}else ie(Wt,`RPC '${e}' stream ${o} received:`,B),z.__(B)}})),vo.u_(),setTimeout((()=>{z.s_()}),0),z}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return m_()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ck(i){return new vo(i)}function nd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(i){return new pA(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vo.c_=!1;class uv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=o,this.V_=u,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="PersistentStream";class cv{constructor(e,t,s,o,u,h,f,g){this.Ci=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new uv(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(Br(t.toString()),Br("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new fe(K.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ie(Jg,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(ie(Jg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class hk extends cv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=yA(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Pe.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Pe.min():h.readTime?hr(h.readTime):Pe.min()})(e);return this.listener.H_(t,s)}Z_(e){const t={};t.database=Ad(this.serializer),t.addTarget=(function(u,h){let f;const g=h.target;if(f=Ed(g)?{documents:EA(u,g)}:{query:wA(u,g).ft},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=J_(u,h.resumeToken);const _=Td(u,h.expectedCount);_!==null&&(f.expectedCount=_)}else if(h.snapshotVersion.compareTo(Pe.min())>0){f.readTime=Ju(u,h.snapshotVersion.toTimestamp());const _=Td(u,h.expectedCount);_!==null&&(f.expectedCount=_)}return f})(this.serializer,e);const s=IA(this.serializer,e);s&&(t.labels=s),this.q_(t)}X_(e){const t={};t.database=Ad(this.serializer),t.removeTarget=e,this.q_(t)}}class dk extends cv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=vA(e.writeResults,e.commitTime),s=hr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Ad(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>_A(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{}class pk extends fk{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new fe(K.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Wo(e,Id(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new fe(K.UNKNOWN,u.toString())}))}jo(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.jo(e,Id(t,s),o,h,f,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new fe(K.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function mk(i,e,t,s){return new pk(i,e,t,s)}class gk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Br(t),this.aa=!1):ie("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws="RemoteStore";class yk{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=u,this.Aa.Mo((h=>{s.enqueueAndForget((async()=>{As(this)&&(ie(ws,"Restarting streams for network reachability change."),await(async function(g){const _=xe(g);_.Ia.add(4),await rl(_),_.Va.set("Unknown"),_.Ia.delete(4),await gc(_)})(this))}))})),this.Va=new gk(s,o)}}async function gc(i){if(As(i))for(const e of i.Ra)await e(!0)}async function rl(i){for(const e of i.Ra)await e(!1)}function hv(i,e){const t=xe(i);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),mf(t)?pf(t):Do(t).O_()&&ff(t,e))}function df(i,e){const t=xe(i),s=Do(t);t.Ea.delete(e),s.O_()&&dv(t,e),t.Ea.size===0&&(s.O_()?s.L_():As(t)&&t.Va.set("Unknown"))}function ff(i,e){if(i.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Pe.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Do(i).Z_(e)}function dv(i,e){i.da.$e(e),Do(i).X_(e)}function pf(i){i.da=new cA({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ea.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),Do(i).start(),i.Va.ua()}function mf(i){return As(i)&&!Do(i).x_()&&i.Ea.size>0}function As(i){return xe(i).Ia.size===0}function fv(i){i.da=void 0}async function _k(i){i.Va.set("Online")}async function vk(i){i.Ea.forEach(((e,t)=>{ff(i,e)}))}async function Ek(i,e){fv(i),mf(i)?(i.Va.ha(e),pf(i)):i.Va.set("Unknown")}async function wk(i,e,t){if(i.Va.set("Online"),e instanceof Y_&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const f of u.targetIds)o.Ea.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ea.delete(f),o.da.removeTarget(f))})(i,e)}catch(s){ie(ws,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Zu(i,s)}else if(e instanceof Ou?i.da.Xe(e):e instanceof Q_?i.da.st(e):i.da.tt(e),!t.isEqual(Pe.min()))try{const s=await lv(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const f=u.da.Tt(h);return f.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=u.Ea.get(_);w&&u.Ea.set(_,w.withResumeToken(g.resumeToken,h))}})),f.targetMismatches.forEach(((g,_)=>{const w=u.Ea.get(g);if(!w)return;u.Ea.set(g,w.withResumeToken(Ft.EMPTY_BYTE_STRING,w.snapshotVersion)),dv(u,g);const k=new Si(w.target,g,_,w.sequenceNumber);ff(u,k)})),u.remoteSyncer.applyRemoteEvent(f)})(i,t)}catch(s){ie(ws,"Failed to raise snapshot:",s),await Zu(i,s)}}async function Zu(i,e,t){if(!xo(e))throw e;i.Ia.add(1),await rl(i),i.Va.set("Offline"),t||(t=()=>lv(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{ie(ws,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await gc(i)}))}function pv(i,e){return e().catch((t=>Zu(i,t,e)))}async function yc(i){const e=xe(i),t=Oi(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Jd;for(;Tk(e);)try{const o=await nk(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,Ik(e,o)}catch(o){await Zu(e,o)}mv(e)&&gv(e)}function Tk(i){return As(i)&&i.Ta.length<10}function Ik(i,e){i.Ta.push(e);const t=Oi(i);t.O_()&&t.Y_&&t.ea(e.mutations)}function mv(i){return As(i)&&!Oi(i).x_()&&i.Ta.length>0}function gv(i){Oi(i).start()}async function Sk(i){Oi(i).ra()}async function Ak(i){const e=Oi(i);for(const t of i.Ta)e.ea(t.mutations)}async function kk(i,e,t){const s=i.Ta.shift(),o=sf.from(s,e,t);await pv(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await yc(i)}async function Rk(i,e){e&&Oi(i).Y_&&await(async function(s,o){if((function(h){return aA(h)&&h!==K.ABORTED})(o.code)){const u=s.Ta.shift();Oi(s).B_(),await pv(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await yc(s)}})(i,e),mv(i)&&gv(i)}async function Xg(i,e){const t=xe(i);t.asyncQueue.verifyOperationInProgress(),ie(ws,"RemoteStore received new credentials");const s=As(t);t.Ia.add(3),await rl(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await gc(t)}async function Ck(i,e){const t=xe(i);e?(t.Ia.delete(2),await gc(t)):e||(t.Ia.add(2),await rl(t),t.Va.set("Unknown"))}function Do(i){return i.ma||(i.ma=(function(t,s,o){const u=xe(t);return u.sa(),new hk(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:_k.bind(null,i),Yo:vk.bind(null,i),t_:Ek.bind(null,i),H_:wk.bind(null,i)}),i.Ra.push((async e=>{e?(i.ma.B_(),mf(i)?pf(i):i.Va.set("Unknown")):(await i.ma.stop(),fv(i))}))),i.ma}function Oi(i){return i.fa||(i.fa=(function(t,s,o){const u=xe(t);return u.sa(),new dk(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Sk.bind(null,i),t_:Rk.bind(null,i),ta:Ak.bind(null,i),na:kk.bind(null,i)}),i.Ra.push((async e=>{e?(i.fa.B_(),await yc(i)):(await i.fa.stop(),i.Ta.length>0&&(ie(ws,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Pi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,f=new gf(e,t,h,o,u);return f.start(s),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yf(i,e){if(Br("AsyncQueue",`${e}: ${i}`),xo(i))return new fe(K.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{static emptySet(e){return new Eo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||Ee.comparator(t.key,s.key):(t,s)=>Ee.comparator(t.key,s.key),this.keyedMap=Ra(),this.sortedSet=new ct(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Eo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Eo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(){this.ga=new ct(Ee.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Ae(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class ko{constructor(e,t,s,o,u,h,f,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new ko(e,t,Eo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class Nk{constructor(){this.queries=ey(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=xe(t),u=o.queries;o.queries=ey(),u.forEach(((h,f)=>{for(const g of f.Sa)g.onError(s)}))})(this,new fe(K.ABORTED,"Firestore shutting down"))}}function ey(){return new Is((i=>L_(i)),cc)}async function xk(i,e){const t=xe(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new Pk,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=yf(h,`Initialization of query '${fo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&_f(t)}async function Dk(i,e){const t=xe(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Vk(i,e){const t=xe(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const f of h.Sa)f.Fa(o)&&(s=!0);h.wa=o}}s&&_f(t)}function Ok(i,e,t){const s=xe(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function _f(i){i.Ca.forEach((e=>{e.next()}))}var Cd,ty;(ty=Cd||(Cd={})).Ma="default",ty.Cache="cache";class Lk{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new ko(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ko.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Cd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e){this.key=e}}class _v{constructor(e){this.key=e}}class Mk{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=be(),this.mutatedKeys=be(),this.eu=M_(e),this.tu=new Eo(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new Zg,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,k)=>{const O=o.get(w),z=hc(this.query,k)?k:null,G=!!O&&this.mutatedKeys.has(O.key),Q=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let B=!1;O&&z?O.data.isEqual(z.data)?G!==Q&&(s.track({type:3,doc:z}),B=!0):this.su(O,z)||(s.track({type:2,doc:z}),B=!0,(g&&this.eu(z,g)>0||_&&this.eu(z,_)<0)&&(f=!0)):!O&&z?(s.track({type:0,doc:z}),B=!0):O&&!z&&(s.track({type:1,doc:O}),B=!0,(g||_)&&(f=!0)),B&&(z?(h=h.add(z),u=Q?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{tu:h,iu:s,bs:f,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((w,k)=>(function(z,G){const Q=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae(20277,{Vt:B})}};return Q(z)-Q(G)})(w.type,k.type)||this.eu(w.doc,k.doc))),this.ou(s),o=o??!1;const f=t&&!o?this._u():[],g=this.Ya.size===0&&this.current&&!o?1:0,_=g!==this.Xa;return this.Xa=g,h.length!==0||_?{snapshot:new ko(this.query,e.tu,u,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Zg,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=be(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new _v(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new yv(s))})),t}cu(e){this.Za=e.ks,this.Ya=be();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ko.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const vf="SyncEngine";class bk{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Fk{constructor(e){this.key=e,this.hu=!1}}class jk{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new Is((f=>L_(f)),cc),this.Eu=new Map,this.Iu=new Set,this.Ru=new ct(Ee.comparator),this.Au=new Map,this.Vu=new lf,this.du={},this.mu=new Map,this.fu=Ao.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Uk(i,e,t=!0){const s=Sv(i);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await vv(s,e,t,!0),o}async function zk(i,e){const t=Sv(i);await vv(t,e,!0,!1)}async function vv(i,e,t,s){const o=await rk(i.localStore,cr(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let f;return s&&(f=await Bk(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&hv(i.remoteStore,o),f}async function Bk(i,e,t,s,o){i.pu=(k,O,z)=>(async function(Q,B,Z,he){let oe=B.view.ru(Z);oe.bs&&(oe=await Kg(Q.localStore,B.query,!1).then((({documents:C})=>B.view.ru(C,oe))));const pe=he&&he.targetChanges.get(B.targetId),me=he&&he.targetMismatches.get(B.targetId)!=null,we=B.view.applyChanges(oe,Q.isPrimaryClient,pe,me);return ry(Q,B.targetId,we.au),we.snapshot})(i,k,O,z);const u=await Kg(i.localStore,e,!0),h=new Mk(e,u.ks),f=h.ru(u.documents),g=nl.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),_=h.applyChanges(f,i.isPrimaryClient,g);ry(i,t,_.au);const w=new bk(e,t,h);return i.Tu.set(e,w),i.Eu.has(t)?i.Eu.get(t).push(e):i.Eu.set(t,[e]),_.snapshot}async function $k(i,e,t){const s=xe(i),o=s.Tu.get(e),u=s.Eu.get(o.targetId);if(u.length>1)return s.Eu.set(o.targetId,u.filter((h=>!cc(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await kd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&df(s.remoteStore,o.targetId),Pd(s,o.targetId)})).catch(No)):(Pd(s,o.targetId),await kd(s.localStore,o.targetId,!0))}async function Hk(i,e){const t=xe(i),s=t.Tu.get(e),o=t.Eu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),df(t.remoteStore,s.targetId))}async function Wk(i,e,t){const s=Xk(i);try{const o=await(function(h,f){const g=xe(h),_=st.now(),w=f.reduce(((z,G)=>z.add(G.key)),be());let k,O;return g.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let G=$r(),Q=be();return g.xs.getEntries(z,w).next((B=>{G=B,G.forEach(((Z,he)=>{he.isValidDocument()||(Q=Q.add(Z))}))})).next((()=>g.localDocuments.getOverlayedDocuments(z,G))).next((B=>{k=B;const Z=[];for(const he of f){const oe=nA(he,k.get(he.key).overlayedDocument);oe!=null&&Z.push(new Ss(he.key,oe,C_(oe.value.mapValue),jr.exists(!0)))}return g.mutationQueue.addMutationBatch(z,_,Z,f)})).next((B=>{O=B;const Z=B.applyToLocalDocumentSet(k,Q);return g.documentOverlayCache.saveOverlays(z,B.batchId,Z)}))})).then((()=>({batchId:O.batchId,changes:F_(k)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,f,g){let _=h.du[h.currentUser.toKey()];_||(_=new ct(Me)),_=_.insert(f,g),h.du[h.currentUser.toKey()]=_})(s,o.batchId,t),await il(s,o.changes),await yc(s.remoteStore)}catch(o){const u=yf(o,"Failed to persist write");t.reject(u)}}async function Ev(i,e){const t=xe(i);try{const s=await ek(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Au.get(u);h&&(Ye(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Ye(h.hu,14607):o.removedDocuments.size>0&&(Ye(h.hu,42227),h.hu=!1))})),await il(t,s,e)}catch(s){await No(s)}}function ny(i,e,t){const s=xe(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((u,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const g=xe(h);g.onlineState=f;let _=!1;g.queries.forEach(((w,k)=>{for(const O of k.Sa)O.va(f)&&(_=!0)})),_&&_f(g)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function qk(i,e,t){const s=xe(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new ct(Ee.comparator);h=h.insert(u,Kt.newNoDocument(u,Pe.min()));const f=be().add(u),g=new pc(Pe.min(),new Map,new ct(Me),h,f);await Ev(s,g),s.Ru=s.Ru.remove(u),s.Au.delete(e),Ef(s)}else await kd(s.localStore,e,!1).then((()=>Pd(s,e,t))).catch(No)}async function Kk(i,e){const t=xe(i),s=e.batch.batchId;try{const o=await ZA(t.localStore,e);Tv(t,s,null),wv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await il(t,o)}catch(o){await No(o)}}async function Gk(i,e,t){const s=xe(i);try{const o=await(function(h,f){const g=xe(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let w;return g.mutationQueue.lookupMutationBatch(_,f).next((k=>(Ye(k!==null,37113),w=k.keys(),g.mutationQueue.removeMutationBatch(_,k)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w))).next((()=>g.localDocuments.getDocuments(_,w)))}))})(s.localStore,e);Tv(s,e,t),wv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await il(s,o)}catch(o){await No(o)}}function wv(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function Tv(i,e,t){const s=xe(i);let o=s.du[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.du[s.currentUser.toKey()]=o}}function Pd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Eu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Eu.delete(e),i.isPrimaryClient&&i.Vu.Gr(e).forEach((s=>{i.Vu.containsKey(s)||Iv(i,s)}))}function Iv(i,e){i.Iu.delete(e.path.canonicalString());const t=i.Ru.get(e);t!==null&&(df(i.remoteStore,t),i.Ru=i.Ru.remove(e),i.Au.delete(t),Ef(i))}function ry(i,e,t){for(const s of t)s instanceof yv?(i.Vu.addReference(s.key,e),Qk(i,s)):s instanceof _v?(ie(vf,"Document no longer in limbo: "+s.key),i.Vu.removeReference(s.key,e),i.Vu.containsKey(s.key)||Iv(i,s.key)):Ae(19791,{wu:s})}function Qk(i,e){const t=e.key,s=t.path.canonicalString();i.Ru.get(t)||i.Iu.has(s)||(ie(vf,"New document in limbo: "+t),i.Iu.add(s),Ef(i))}function Ef(i){for(;i.Iu.size>0&&i.Ru.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const t=new Ee(ut.fromString(e)),s=i.fu.next();i.Au.set(s,new Fk(t)),i.Ru=i.Ru.insert(t,s),hv(i.remoteStore,new Si(cr(nf(t.path)),s,"TargetPurposeLimboResolution",oc.ce))}}async function il(i,e,t){const s=xe(i),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((f,g)=>{h.push(s.pu(g,e,t).then((_=>{var w;if((_||t)&&s.isPrimaryClient){const k=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,k?"current":"not-current")}if(_){o.push(_);const k=cf.Is(g.targetId,_);u.push(k)}})))})),await Promise.all(h),s.Pu.H_(o),await(async function(g,_){const w=xe(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(k=>$.forEach(_,(O=>$.forEach(O.Ts,(z=>w.persistence.referenceDelegate.addReference(k,O.targetId,z))).next((()=>$.forEach(O.Es,(z=>w.persistence.referenceDelegate.removeReference(k,O.targetId,z)))))))))}catch(k){if(!xo(k))throw k;ie(hf,"Failed to update sequence numbers: "+k)}for(const k of _){const O=k.targetId;if(!k.fromCache){const z=w.vs.get(O),G=z.snapshotVersion,Q=z.withLastLimboFreeSnapshotVersion(G);w.vs=w.vs.insert(O,Q)}}})(s.localStore,u))}async function Yk(i,e){const t=xe(i);if(!t.currentUser.isEqual(e)){ie(vf,"User change. New user:",e.toKey());const s=await av(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((f=>{f.forEach((g=>{g.reject(new fe(K.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await il(t,s.Ns)}}function Jk(i,e){const t=xe(i),s=t.Au.get(e);if(s&&s.hu)return be().add(s.key);{let o=be();const u=t.Eu.get(e);if(!u)return o;for(const h of u){const f=t.Tu.get(h);o=o.unionWith(f.view.nu)}return o}}function Sv(i){const e=xe(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ev.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qk.bind(null,e),e.Pu.H_=Vk.bind(null,e.eventManager),e.Pu.yu=Ok.bind(null,e.eventManager),e}function Xk(i){const e=xe(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Kk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Gk.bind(null,e),e}class ec{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=mc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return XA(this.persistence,new QA,e.initialUser,this.serializer)}Cu(e){return new ov(uf.Vi,this.serializer)}Du(e){return new sk}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ec.provider={build:()=>new ec};class Zk extends ec{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ye(this.persistence.referenceDelegate instanceof Xu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new OA(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new ov((s=>Xu.Vi(s,t)),this.serializer)}}class Nd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ny(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Yk.bind(null,this.syncEngine),await Ck(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Nk})()}createDatastore(e){const t=mc(e.databaseInfo.databaseId),s=ck(e.databaseInfo);return mk(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,f){return new yk(s,o,u,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>ny(this.syncEngine,t,0)),(function(){return Yg.v()?new Yg:new ok})())}createSyncEngine(e,t){return(function(o,u,h,f,g,_,w){const k=new jk(o,u,h,f,g,_);return w&&(k.gu=!0),k})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=xe(o);ie(ws,"RemoteStore shutting down."),u.Ia.add(5),await rl(u),u.Aa.shutdown(),u.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Nd.provider={build:()=>new Nd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Br("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li="FirestoreClient";class tR{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=o,this.user=qt.UNAUTHENTICATED,this.clientId=Qd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{ie(Li,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ie(Li,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=yf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function rd(i,e){i.asyncQueue.verifyOperationInProgress(),ie(Li,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await av(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function iy(i,e){i.asyncQueue.verifyOperationInProgress();const t=await nR(i);ie(Li,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>Xg(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>Xg(e.remoteStore,o))),i._onlineComponents=e}async function nR(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ie(Li,"Using user provided OfflineComponentProvider");try{await rd(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===K.FAILED_PRECONDITION||o.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Es("Error using user provided cache. Falling back to memory cache: "+t),await rd(i,new ec)}}else ie(Li,"Using default OfflineComponentProvider"),await rd(i,new Zk(void 0));return i._offlineComponents}async function Av(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ie(Li,"Using user provided OnlineComponentProvider"),await iy(i,i._uninitializedComponentsProvider._online)):(ie(Li,"Using default OnlineComponentProvider"),await iy(i,new Nd))),i._onlineComponents}function rR(i){return Av(i).then((e=>e.syncEngine))}async function iR(i){const e=await Av(i),t=e.eventManager;return t.onListen=Uk.bind(null,e.syncEngine),t.onUnlisten=$k.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=zk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Hk.bind(null,e.syncEngine),t}function sR(i,e,t={}){const s=new Pi;return i.asyncQueue.enqueueAndForget((async()=>(function(u,h,f,g,_){const w=new eR({next:O=>{w.Nu(),h.enqueueAndForget((()=>Dk(u,k)));const z=O.docs.has(f);!z&&O.fromCache?_.reject(new fe(K.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&O.fromCache&&g&&g.source==="server"?_.reject(new fe(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(O)},error:O=>_.reject(O)}),k=new Lk(nf(f.path),w,{includeMetadataChanges:!0,qa:!0});return xk(u,k)})(await iR(i),i.asyncQueue,e,t,s))),s.promise}function oR(i,e){const t=new Pi;return i.asyncQueue.enqueueAndForget((async()=>Wk(await rR(i),e,t))),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR="ComponentProvider",sy=new Map;function lR(i,e,t,s,o){return new SS(i,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,kv(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv="firestore.googleapis.com",oy=!0;class ay{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new fe(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Rv,this.ssl=oy}else this.host=e.host,this.ssl=e.ssl??oy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=sv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<DA)throw new fe(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kv(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new fe(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new fe(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new fe(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wf{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ay({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ay(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new nS;switch(s.type){case"firstParty":return new oS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new fe(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=sy.get(t);s&&(ie(aR,"Removing Datastore"),sy.delete(t),s.terminate())})(this),Promise.resolve()}}function uR(i,e,t,s={}){var _;i=ja(i,wf);const o=Qa(e),u=i._getSettings(),h={...u,emulatorOptions:i._getEmulatorOptions()},f=`${e}:${t}`;o&&Sy(`https://${f}`),u.host!==Rv&&u.host!==f&&Es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...u,host:f,ssl:o,emulatorOptions:s};if(!ms(g,h)&&(i._setSettings(g),s.mockUserToken)){let w,k;if(typeof s.mockUserToken=="string")w=s.mockUserToken,k=qt.MOCK_USER;else{w=pw(s.mockUserToken,(_=i._app)==null?void 0:_.options.projectId);const O=s.mockUserToken.sub||s.mockUserToken.user_id;if(!O)throw new fe(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");k=new qt(O)}i._authCredentials=new rS(new y_(w,k))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Tf(this.firestore,e,this._query)}}class xt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xt(this.firestore,e,this._key)}toJSON(){return{type:xt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(el(t,xt._jsonSchema))return new xt(e,s||null,new Ee(ut.fromString(t.referencePath)))}}xt._jsonSchemaVersion="firestore/documentReference/1.0",xt._jsonSchema={type:Et("string",xt._jsonSchemaVersion),referencePath:Et("string")};class qa extends Tf{constructor(e,t,s){super(e,t,nf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xt(this.firestore,null,new Ee(e))}withConverter(e){return new qa(this.firestore,e,this._path)}}function ly(i,e,...t){if(i=yn(i),arguments.length===1&&(e=Qd.newId()),dS("doc","path",e),i instanceof wf){const s=ut.fromString(e,...t);return wg(s),new xt(i,null,new Ee(s))}{if(!(i instanceof xt||i instanceof qa))throw new fe(K.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(ut.fromString(e,...t));return wg(s),new xt(i.firestore,i instanceof qa?i.converter:null,new Ee(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="AsyncQueue";class cy{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new uv(this,"async_queue_retry"),this._c=()=>{const s=nd();s&&ie(uy,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=nd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=nd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Pi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!xo(e))throw e;ie(uy,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Br("INTERNAL UNHANDLED ERROR: ",hy(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=gf.createAndSchedule(this,e,t,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&Ae(47125,{Pc:hy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function hy(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class If extends wf{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new cy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new cy(e),this._firestoreClient=void 0,await e}}}function cR(i,e){const t=typeof i=="object"?i:Cy(),s=typeof i=="string"?i:Wu,o=bd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=dw("firestore");u&&uR(o,...u)}return o}function Cv(i){if(i._terminated)throw new fe(K.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||hR(i),i._firestoreClient}function hR(i){var s,o,u,h;const e=i._freezeSettings(),t=lR(i._databaseId,((s=i._app)==null?void 0:s.options.appId)||"",i._persistenceKey,(o=i._app)==null?void 0:o.options.apiKey,e);i._componentsProvider||(u=e.localCache)!=null&&u._offlineComponentProvider&&((h=e.localCache)!=null&&h._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new tR(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(g){const _=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(_),_online:_}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rn(Ft.fromBase64String(e))}catch(t){throw new fe(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Rn(Ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Rn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(el(e,Rn._jsonSchema))return Rn.fromBase64String(e.bytes)}}Rn._jsonSchemaVersion="firestore/bytes/1.0",Rn._jsonSchema={type:Et("string",Rn._jsonSchemaVersion),bytes:Et("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new fe(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new fe(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new fe(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:dr._jsonSchemaVersion}}static fromJSON(e){if(el(e,dr._jsonSchema))return new dr(e.latitude,e.longitude)}}dr._jsonSchemaVersion="firestore/geoPoint/1.0",dr._jsonSchema={type:Et("string",dr._jsonSchemaVersion),latitude:Et("number"),longitude:Et("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:zn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(el(e,zn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new zn(e.vectorValues);throw new fe(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}zn._jsonSchemaVersion="firestore/vectorValue/1.0",zn._jsonSchema={type:Et("string",zn._jsonSchemaVersion),vectorValues:Et("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=/^__.*__$/;class fR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ss(e,this.data,this.fieldMask,t,this.fieldTransforms):new tl(e,this.data,t,this.fieldTransforms)}}function xv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae(40011,{dataSource:i})}}class Sf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Sf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.i({path:t,arrayElement:!1});return s.mc(e),s}fc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.i({path:t,arrayElement:!1});return s.Ac(),s}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return tc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(xv(this.dataSource)&&dR.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class pR{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||mc(e)}A(e,t,s,o=!1){return new Sf({dataSource:e,methodName:t,targetDoc:s,path:bt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mR(i){const e=i._freezeSettings(),t=mc(i._databaseId);return new pR(i._databaseId,!!e.ignoreUndefinedProperties,t)}function gR(i,e,t,s,o,u={}){const h=i.A(u.merge||u.mergeFields?2:0,e,t,o);Lv("Data must be an object, but it was:",h,s);const f=Vv(s,h);let g,_;if(u.merge)g=new jn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const k of u.mergeFields){const O=Af(e,k,t);if(!h.contains(O))throw new fe(K.INVALID_ARGUMENT,`Field '${O}' is specified in your field mask but missing from your input data.`);vR(w,O)||w.push(O)}g=new jn(w),_=h.fieldTransforms.filter((k=>g.covers(k.field)))}else g=null,_=h.fieldTransforms;return new fR(new kn(f),g,_)}function Dv(i,e){if(Ov(i=yn(i)))return Lv("Unsupported field value:",e,i),Vv(i,e);if(i instanceof Nv)return(function(s,o){if(!xv(o.dataSource))throw o.yc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.yc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const f of s){let g=Dv(f,o.gc(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=yn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return YS(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=st.fromDate(s);return{timestampValue:Ju(o.serializer,u)}}if(s instanceof st){const u=new st(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ju(o.serializer,u)}}if(s instanceof dr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Rn)return{bytesValue:J_(o.serializer,s._byteString)};if(s instanceof xt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.yc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:af(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof zn)return(function(h,f){const g=h instanceof zn?h.toArray():h;return{mapValue:{fields:{[k_]:{stringValue:R_},[qu]:{arrayValue:{values:g.map((w=>{if(typeof w!="number")throw f.yc("VectorValues must only contain numeric values.");return rf(f.serializer,w)}))}}}}}})(s,o);if(iv(s))return s._toProto(o.serializer);throw o.yc(`Unsupported field value: ${Yd(s)}`)})(i,e)}function Vv(i,e){const t={};return E_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ts(i,((s,o)=>{const u=Dv(o,e.dc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function Ov(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof st||i instanceof dr||i instanceof Rn||i instanceof xt||i instanceof Nv||i instanceof zn||iv(i))}function Lv(i,e,t){if(!Ov(t)||!__(t)){const s=Yd(t);throw s==="an object"?e.yc(i+" a custom object"):e.yc(i+" "+s)}}function Af(i,e,t){if((e=yn(e))instanceof Pv)return e._internalPath;if(typeof e=="string")return _R(i,e);throw tc("Field path arguments must be of type string or ",i,!1,void 0,t)}const yR=new RegExp("[~\\*/\\[\\]]");function _R(i,e,t){if(e.search(yR)>=0)throw tc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Pv(...e.split("."))._internalPath}catch{throw tc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function tc(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new fe(K.INVALID_ARGUMENT,f+i+g)}function vR(i,e){return i.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{convertValue(e,t="none"){switch(Vi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return gt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ae(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ts(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[qu].arrayValue)==null?void 0:o.values)==null?void 0:u.map((h=>gt(h.doubleValue)));return new zn(t)}convertGeoPoint(e){return new dr(gt(e.latitude),gt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=lc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(za(e));default:return null}}convertTimestamp(e){const t=xi(e);return new st(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ut.fromString(e);Ye(rv(s),9688,{name:e});const o=new Ba(s.get(1),s.get(3)),u=new Ee(s.popFirst(5));return o.isEqual(t)||Br(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR extends ER{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new xt(this.firestore,null,t)}}const dy="@firebase/firestore",fy="4.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Af("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class TR extends Mv{data(){return super.data()}}function IR(i,e,t){let s;return s=i?t&&(t.merge||t.mergeFields)?i.toFirestore(e,t):i.toFirestore(e):e,s}class Pa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ps extends Mv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Lu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Af("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ps._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ps._jsonSchemaVersion="firestore/documentSnapshot/1.0",ps._jsonSchema={type:Et("string",ps._jsonSchemaVersion),bundleSource:Et("string","DocumentSnapshot"),bundleName:Et("string"),bundle:Et("string")};class Lu extends ps{data(e={}){return super.data(e)}}class La{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Pa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Lu(this._firestore,this._userDataWriter,s.key,s,new Pa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new fe(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const g=new Lu(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Pa(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>u||f.type!==3)).map((f=>{const g=new Lu(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Pa(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return f.type!==0&&(_=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),w=h.indexOf(f.doc.key)),{type:SR(f.type),doc:g,oldIndex:_,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=La._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Qd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function SR(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae(61501,{type:i})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */La._jsonSchemaVersion="firestore/querySnapshot/1.0",La._jsonSchema={type:Et("string",La._jsonSchemaVersion),bundleSource:Et("string","QuerySnapshot"),bundleName:Et("string"),bundle:Et("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(i){i=ja(i,xt);const e=ja(i.firestore,If),t=Cv(e);return sR(t,i._key).then((s=>CR(e,i,s)))}function kR(i,e,t){i=ja(i,xt);const s=ja(i.firestore,If),o=IR(i.converter,e,t),u=mR(s);return RR(s,[gR(u,"setDoc",i._key,o,i.converter!==null,t).toMutation(i._key,jr.none())])}function RR(i,e){const t=Cv(i);return oR(t,e)}function CR(i,e,t){const s=t.docs.get(e._key),o=new wR(i);return new ps(i,o,e._key,s,new Pa(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){tS(Ro),wo(new gs("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),f=new If(new iS(s.getProvider("auth-internal")),new aS(h,s.getProvider("app-check-internal")),AS(h,o),h);return u={useFetchStreams:t,...u},f._setSettings(u),f}),"PUBLIC").setMultipleInstances(!0)),Ri(dy,fy,e),Ri(dy,fy,"esm2020")})();var PR="firebase",NR="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ri(PR,NR,"app");const xR={apiKey:"AIzaSyBdmBWkBZuyuVv1HAFFqp5HnHGJXgAEaMk",authDomain:"smrtic-app.firebaseapp.com",projectId:"smrtic-app",storageBucket:"smrtic-app.firebasestorage.app",messagingSenderId:"240297583151",appId:"1:240297583151:web:bf06f3d15aef25a4559cda"},bv=Ry(xR),sl=ZI(bv),py=cR(bv),DR=new Lr;async function VR(){return(await lI(sl,DR)).user}async function OR(i,e){return(await F0(sl,i,e)).user}async function LR(i,e){return(await b0(sl,i,e)).user}async function MR(){await B0(sl)}const bR="https://script.google.com/macros/s/AKfycbx6uNUS1JaGoE1AvlPMNLNsfutYRjSAW2y8s0sQcW_7_HE9Hu7S4lNQOd0pbfWRdoKj/exec";async function xd(i){const e=new AbortController,t=setTimeout(()=>e.abort(),15e3);try{const s=`${bR}?url=${encodeURIComponent(i)}`,o=await fetch(s,{signal:e.signal});if(clearTimeout(t),!o.ok)throw new Error(`HTTP ${o.status}`);const u=await o.text();if(!u||u.startsWith("Error:"))throw new Error(u||"HTMLを取得できませんでした");return u}catch(s){throw clearTimeout(t),s.name==="AbortError"?new Error("通信タイムアウト（15秒経過）。サーバーの応答が遅いか、接続が不安定です。"):s}}function Fv(i){if(!i)return i;let e=i.trim().toUpperCase();if(/^\d{4}$/.test(e))return`${e}:TYO`;if(e.includes(".")){const[t,s]=e.split(".");if(s==="T")return`${t}:TYO`}return e}function jv(i){if(!i)return i;let e=i.trim().toUpperCase();return e.endsWith(".T")?e.slice(0,-2):e}async function FR(i){const e=Fv(i);if(!e.includes(":TYO")&&!/^\d{4}$/.test(e))throw new Error("日本株専用アプリのため、米国株などのティッカーは非対応です。");const t=`https://www.google.com/finance/quote/${e}?hl=ja`,o=`https://minkabu.jp/stock/${e.split(":")[0]}`;try{const[f,g]=await Promise.all([xd(t),xd(o).catch(()=>"")]),_=new DOMParser().parseFromString(f,"text/html"),w=_.querySelector(".YMlKec.fxKbKc")||_.querySelector(".YMlS1d");if(!w)throw new Error("株価要素が見つかりませんでした。ティッカーが間違っている可能性があります。");const k=parseFloat(w.textContent.replace(/[¥￥,\s]/g,"")),O=_.querySelector(".zzDege")||_.querySelector(".zzDeBf"),z=O?O.textContent.trim():e,G=_.querySelector(".P6K39c");let Q=0,B=0;if(G){const C=G.textContent.trim().match(/([+-]?[0-9,.]+)\s*\(([-+]?[0-9,.]+)%\)/);C&&(Q=parseFloat(C[1].replace(/,/g,"")),B=parseFloat(C[2].replace(/,/g,"")))}let Z=null,he=null,oe=null,pe=null,me=null,we=null;if(g){let I=function(ee){try{const V=C.evaluate(ee,C,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);return V.singleNodeValue?V.singleNodeValue.textContent.trim():null}catch{return null}},x=function(ee,V,H){const ke=Array.from(ee.querySelectorAll("*")).filter(Ie=>Ie.childElementCount===0&&Ie.textContent.trim().includes(V));if(ke.length===0)return null;let Te=ke[ke.length-1].parentElement;for(let Ie=0;Ie<6&&!(!Te||Te.tagName==="BODY");Ie++){const Ce=Te.textContent.replace(V,"").trim();for(const De of H)if(Ce.includes(De))return De;Te=Te.parentElement}return null};var u=I,h=x;const C=new DOMParser().parseFromString(g,"text/html"),R=I("/html/body/div[1]/div[2]/div[3]/div[2]/div[1]/div/div[1]/div/div/div[1]/div[2]/div/div[2]/span/span");if(R){const ee=R.match(/([+-]?[0-9,.]+)\s*\(([-+]?[0-9,.]+)%\)/);if(ee)pe=parseFloat(ee[1].replace(/,/g,"")),me=parseFloat(ee[2].replace(/,/g,""));else{const V=R.match(/([+-]?[0-9,.]+)/);V&&(pe=parseFloat(V[1].replace(/,/g,"")))}}const N="//p[text()='株価診断']/following-sibling::span",L="//p[text()='個人予想']/following-sibling::span",A="//p[text()='アナリスト' or text()='プロ予想']/following-sibling::span";Z=I(N),he=I(L),oe=I(A);const ge=ee=>ee?parseFloat(ee.replace(/[円,\s]/g,"")):null,Ze=I("//th[contains(text(),'前日終値')]/following-sibling::td"),tt=I("//th[contains(text(),'始値')]/following-sibling::td"),Ge=I("//th[contains(text(),'高値')]/following-sibling::td"),X=I("//th[contains(text(),'安値')]/following-sibling::td"),ue=I("//h2[contains(text(),'目標株価')]/following-sibling::div")||I("//div[contains(text(),'目標株価')]/following-sibling::div")||I("//p[contains(text(),'目標株価')]/following-sibling::span");we={prevClose:ge(Ze),open:ge(tt),high:ge(Ge),low:ge(X),target:ge(ue)},he||(he=x(C,"個人予想",["強気買い","強気売り","買い","売り","中立","対象外"])),oe||(oe=x(C,"アナリスト",["強気買い","強気売り","買い","売り","中立","対象外"])||x(C,"プロ予想",["強気買い","強気売り","買い","売り","中立","対象外"]))}return{ticker:e,name:z,price:k,change:pe!==null?pe:Q,changePct:me!==null?me:B,currency:"JPY",exchange:e.includes(":")?e.split(":")[1]:"",timestamp:new Date().toISOString(),extra:we||{},minkabu:{diagnosis:Z,personal:he,analyst:oe}}}catch(f){throw console.error(`fetchStockPrice(${i}) error:`,f),f}}async function jR(i){const e=jv(i),t=`https://itf.minkabu.jp/fund/${e}`,s=await xd(t),u=new DOMParser().parseFromString(s,"text/html"),h=u.querySelector(".text-4xl.font-bold");if(!h)throw new Error("投資信託が見つかりませんでした。ファンドコードが間違っている可能性があります。");const f=u.querySelector("h1"),g=f?f.textContent.trim().replace(/\n/g,"").replace(/\s+/g," "):e,_=h.textContent.replace(/[円,\s]/g,""),w=parseFloat(_);function k(we){try{const C=u.evaluate(we,u,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);return C.singleNodeValue?C.singleNodeValue.textContent.trim():null}catch{return null}}let O=0,z=0;const G=k("//p[contains(text(),'基準価額')]/following-sibling::div/span");if(G){const we=G.trim().match(/([+-]?[0-9,.]+)\s*\(([-+]?[0-9,.]+)%\)/);we&&(O=parseFloat(we[1].replace(/,/g,"")),z=parseFloat(we[2].replace(/,/g,"")))}let Q=null,B=null,Z=null;const he=s.match(/レーティング[\s\S]*?(★+)/);he&&(Q=he[1]);const oe=s.match(/実質信託報酬[\s\S]*?text-end">\s*([^<]+?)\s*<\/p>/)||s.match(/信託報酬[\s\S]*?text-end">\s*([^<]+?)\s*<\/p>/);oe&&(B=oe[1].trim());const pe=s.match(/リターン（1年）[\s\S]*?font-bold'>\s*([^<]+?)\s*<\/span>/)||s.match(/リターン（1年）[\s\S]*?font-bold">\s*([^<]+?)\s*<\/span>/);pe&&(Z=pe[1].trim());const me={rating:Q,fee:B,returnPct:Z};return{ticker:e,name:g,price:w,change:O,changePct:z,currency:"JPY",exchange:"minkabu",timestamp:new Date().toISOString(),extra:me}}function Or(i,e="JPY"){return i==null||isNaN(i)?"—":e==="JPY"?i.toLocaleString("ja-JP",{maximumFractionDigits:0}):i.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}function Uv(i){return i==null||isNaN(i)?"—":i===0?"0.00%":`${i>0?"+":""}${i.toFixed(2)}%`}function zv(i,e="JPY"){if(i==null||isNaN(i))return"—";if(i===0)return"0";const t=i>0?"+":"";return e==="JPY"?`${t}${i.toLocaleString("ja-JP",{maximumFractionDigits:0})}`:`${t}${i.toFixed(2)}`}function Dd(i,e){if(!i||i.length===0)return{hasHolding:!1};const t=Array.isArray(i)?i:[i];let s=0,o=0;if(t.forEach(_=>{_.price>0&&_.amountOrQuantity>0&&(s+=_.amountOrQuantity,o+=_.price*_.amountOrQuantity)}),s===0||!e)return{hasHolding:!1};const u=o/s,h=e*s,f=h-o,g=f/o*100;return{hasHolding:!0,totalShares:s,totalCost:o,avgPrice:u,currentValue:h,pnL:f,pnLPct:g}}function Vd(i,e){if(!i||!e)return{hasHolding:!1};const t=Array.isArray(i)?i:[i];let s=0,o=0;if(t.forEach(_=>{_.price>0&&_.amountOrQuantity>0&&(s+=_.amountOrQuantity,o+=_.amountOrQuantity/_.price)}),s===0)return{hasHolding:!1};const u=o*e,h=s/o,f=u-s,g=f/s*100;return{hasHolding:!0,totalCost:s,avgPrice:h,currentValue:u,pnL:f,pnLPct:g,totalQuantity:o}}function UR({change:i,changePct:e,currency:t}){const s=i>0?"up":i<0?"down":"neutral",o=i>0?"▲":i<0?"▼":"—";return T.jsxs("span",{className:`card-change ${s}`,children:[o," ",zv(i,t)," (",Uv(e),")"]})}const id=i=>i?["買い","強気買い","割安"].includes(i)?"positive":["売り","強気売り","割高"].includes(i)?"negative":"neutral":"neutral";function zR({item:i,simpleMode:e,hideEdit:t,onDelete:s,onEditHolding:o}){const{ticker:u,label:h,data:f,holdings:g,loading:_,error:w}=i,k=Dd(g,f==null?void 0:f.price),{hasHolding:O,totalShares:z,totalCost:G,avgPrice:Q,currentValue:B,pnL:Z,pnLPct:he}=k,pe=_?"loading":f?!e&&O?Z>0?"up":Z<0?"down":"neutral":f.change>0?"up":f.change<0?"down":"neutral":"neutral",me=f&&f.extra&&Object.keys(f.extra).length>0;return T.jsxs("div",{className:`stock-card ${_?"loading":""}`,children:[T.jsx("div",{className:`card-accent-bar ${_?"loading-bar":pe}`}),T.jsxs("div",{className:"card-header",children:[T.jsxs("div",{children:[T.jsx("div",{className:"card-ticker",children:(f==null?void 0:f.ticker)||u}),T.jsx("div",{className:"card-name",children:h||(_?"読み込み中...":(f==null?void 0:f.name)||u)})]}),T.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8},children:[T.jsx("span",{className:"card-type-badge",children:"株式"}),!e&&!t&&T.jsxs(T.Fragment,{children:[T.jsx("button",{className:"edit-holding-btn",onClick:o,title:"保有情報を編集",children:g&&(!Array.isArray(g)||g.length>0)?"🖋️":"＋ 保有情報"}),T.jsx("button",{className:"delete-btn",onClick:()=>s(u),title:"削除",children:"✕"})]})]})]}),T.jsxs("div",{className:e?"card-price-section-market":"card-price-section-portfolio",children:[_&&T.jsxs(T.Fragment,{children:[T.jsx("div",{className:"skeleton skeleton-price"}),T.jsx("div",{className:"skeleton skeleton-change"})]}),w&&!_&&T.jsxs("div",{className:"error-badge",children:["⚠️ 取得エラー: ",w]}),f&&!_&&T.jsxs(T.Fragment,{children:[T.jsxs("div",{className:"card-price",children:[T.jsx("span",{className:"currency",children:f.currency==="JPY"?"¥":f.currency==="USD"?"$":f.currency}),Or(f.price,f.currency)]}),T.jsx("div",{className:"card-price-label",children:"現在値"}),T.jsxs("div",{style:{marginTop:12,display:"flex",gap:8,flexWrap:"wrap"},children:[e&&T.jsx(UR,{change:f.change,changePct:f.changePct,currency:f.currency}),!e&&O&&T.jsxs("span",{className:`card-change ${Z>0?"up":Z<0?"down":"neutral"}`,style:{border:"1px solid rgba(255,255,255,0.1)"},children:[Z>0?"▲":Z<0?"▼":"—"," ",Or(Math.abs(Z),f.currency)," (",Z>0?"+":"",he.toFixed(2),"%)"]}),e&&f.minkabu&&(f.minkabu.diagnosis||f.minkabu.personal||f.minkabu.analyst)&&T.jsxs("div",{style:{display:"flex",gap:6,flexWrap:"wrap",marginTop:4,width:"100%",paddingBottom:"10px"},children:[f.minkabu.diagnosis&&T.jsxs("span",{className:`minkabu-badge ${id(f.minkabu.diagnosis)}`,children:["診断: ",f.minkabu.diagnosis]}),f.minkabu.personal&&T.jsxs("span",{className:`minkabu-badge ${id(f.minkabu.personal)}`,children:["個人: ",f.minkabu.personal]}),f.minkabu.analyst&&T.jsxs("span",{className:`minkabu-badge ${id(f.minkabu.analyst)}`,children:["プロ: ",f.minkabu.analyst]})]})]})]})]}),!e&&O&&T.jsxs("div",{className:"holding-box",children:[T.jsxs("div",{className:"holding-box-header",children:["保有情報 (合計 ",z,"株 / 平均 ¥",Math.round(Q).toLocaleString(),")"]}),T.jsxs("div",{className:"holding-grid",children:[T.jsxs("div",{className:"holding-item",children:[T.jsx("span",{className:"holding-label",children:"購入金額合計"}),T.jsxs("span",{className:"holding-value",children:["¥",Math.round(G).toLocaleString()]})]}),T.jsxs("div",{className:"holding-item",children:[T.jsx("span",{className:"holding-label",children:"評価額"}),T.jsxs("span",{className:"holding-value",children:["¥",Math.round(B).toLocaleString()]})]}),T.jsxs("div",{className:"holding-item",children:[T.jsx("span",{className:"holding-label",children:"含み損益"}),T.jsxs("span",{className:`holding-value ${Z>0?"up":Z<0?"down":""}`,children:[Z>0?"+":"",Math.round(Z).toLocaleString()]})]}),T.jsxs("div",{className:"holding-item",children:[T.jsx("span",{className:"holding-label",children:"損益率"}),T.jsxs("span",{className:`holding-value ${Z>0?"up":Z<0?"down":""}`,children:[he>0?"+":"",he.toFixed(2),"%"]})]})]})]}),T.jsx("div",{className:"card-footer",children:f&&!_&&me&&T.jsxs("div",{className:"extra-data-grid",children:[f.extra.prevClose!==void 0&&T.jsxs(T.Fragment,{children:[T.jsxs("div",{className:"holding-item",children:[T.jsx("span",{className:"holding-label",children:"前日終値"}),T.jsx("span",{className:"holding-value",style:{fontSize:"13px"},children:Or(f.extra.prevClose,f.currency)})]}),T.jsxs("div",{className:"holding-item",children:[T.jsx("span",{className:"holding-label",children:"始値"}),T.jsx("span",{className:"holding-value",style:{fontSize:"13px"},children:Or(f.extra.open,f.currency)})]}),T.jsxs("div",{className:"holding-item",children:[T.jsx("span",{className:"holding-label",children:"高値"}),T.jsx("span",{className:"holding-value",style:{fontSize:"13px"},children:Or(f.extra.high,f.currency)})]}),T.jsxs("div",{className:"holding-item",children:[T.jsx("span",{className:"holding-label",children:"安値"}),T.jsx("span",{className:"holding-value",style:{fontSize:"13px"},children:Or(f.extra.low,f.currency)})]}),T.jsxs("div",{className:"holding-item",style:{gridColumn:"span 2",marginTop:"4px"},children:[T.jsx("span",{className:"holding-label",style:{color:"var(--accent-blue)"},children:"目標株価"}),T.jsx("span",{className:"holding-value",style:{fontSize:"14px"},children:Or(f.extra.target,f.currency)})]})]}),f.extra.rating!==void 0&&T.jsxs(T.Fragment,{children:[T.jsxs("div",{className:"holding-item",children:[T.jsx("span",{className:"holding-label",children:"レーティング"}),T.jsx("span",{className:"holding-value",style:{fontSize:"13px",color:"#f59e0b"},children:f.extra.rating||"—"})]}),T.jsxs("div",{className:"holding-item",children:[T.jsx("span",{className:"holding-label",children:"リターン(1年)"}),T.jsx("span",{className:"holding-value",style:{fontSize:"13px"},children:f.extra.returnPct||"—"})]}),T.jsxs("div",{className:"holding-item",style:{gridColumn:"span 2",marginTop:"4px"},children:[T.jsx("span",{className:"holding-label",children:"実質信託報酬"}),T.jsx("span",{className:"holding-value",style:{fontSize:"13px"},children:f.extra.fee||"—"})]})]})]})})]})}function BR({change:i,changePct:e,currency:t}){const s=i>0?"up":i<0?"down":"neutral",o=i>0?"▲":i<0?"▼":"—";return T.jsxs("span",{className:`card-change ${s}`,children:[o," ",zv(i,t)," (",Uv(e),")"]})}function $R({item:i,simpleMode:e,hideEdit:t,onDelete:s,onEditHolding:o}){const{ticker:u,label:h,data:f,holdings:g,loading:_,error:w}=i,k=Vd(g,f==null?void 0:f.price),{hasHolding:O,totalCost:z,avgPrice:G,currentValue:Q,pnL:B,pnLPct:Z}=k,oe=_?"loading":f?!e&&O?B>0?"up":B<0?"down":"neutral":f.change>0?"up":f.change<0?"down":"neutral":"neutral",pe=f&&f.extra&&Object.keys(f.extra).length>0;return T.jsxs("div",{className:`stock-card ${_?"loading":""}`,children:[T.jsx("div",{className:`card-accent-bar ${_?"loading-bar":oe}`}),T.jsxs("div",{className:"card-header",children:[T.jsxs("div",{children:[T.jsx("div",{className:"card-ticker",children:(f==null?void 0:f.ticker)||u}),T.jsx("div",{className:"card-name",children:h||(_?"読み込み中...":(f==null?void 0:f.name)||u)})]}),T.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8},children:[T.jsx("span",{className:"card-type-badge",style:{background:"rgba(245,158,11,0.12)",border:"1px solid rgba(245,158,11,0.25)",color:"var(--accent-amber)"},children:"投資信託"}),!e&&!t&&T.jsxs(T.Fragment,{children:[T.jsx("button",{className:"edit-holding-btn",onClick:o,title:"保有情報を編集",children:g&&(!Array.isArray(g)||g.length>0)?"🖋️":"＋ 保有情報"}),T.jsx("button",{className:"delete-btn",onClick:()=>s(u),title:"削除",children:"✕"})]})]})]}),T.jsxs("div",{className:e?"card-price-section-market":"card-price-section-portfolio",children:[_&&T.jsxs(T.Fragment,{children:[T.jsx("div",{className:"skeleton skeleton-price"}),T.jsx("div",{className:"skeleton skeleton-change"})]}),w&&!_&&T.jsxs("div",{className:"error-badge",children:["⚠️ 取得エラー: ",w]}),f&&!_&&T.jsxs(T.Fragment,{children:[T.jsxs("div",{className:"card-price",children:[T.jsx("span",{className:"currency",children:"¥"}),Or(f.price,"JPY")]}),T.jsx("div",{className:"card-price-label",children:"基準価額"}),T.jsxs("div",{style:{marginTop:12,display:"flex",gap:8,flexWrap:"wrap"},children:[e&&T.jsx(BR,{change:f.change,changePct:f.changePct,currency:"JPY"}),!e&&O&&T.jsxs("span",{className:`card-change ${B>0?"up":B<0?"down":"neutral"}`,style:{border:"1px solid rgba(255,255,255,0.1)"},children:[B>0?"▲":B<0?"▼":"—"," ",Or(Math.abs(B),"JPY")," (",B>0?"+":"",Z.toFixed(2),"%)"]}),e&&f.extra&&(f.extra.rating||f.extra.returnPct||f.extra.fee)&&T.jsxs("div",{style:{display:"flex",gap:6,flexWrap:"wrap",marginTop:4,width:"100%",paddingBottom:"10px"},children:[f.extra.rating&&T.jsxs("span",{className:"minkabu-badge",style:{color:"#f59e0b",background:"rgba(245,158,11,0.12)",border:"1px solid rgba(245,158,11,0.2)"},children:["★ ",f.extra.rating]}),f.extra.returnPct&&T.jsxs("span",{className:"minkabu-badge",style:{color:"var(--accent-blue)",background:"var(--accent-blue-subtle)",border:"1px solid var(--accent-blue-glow)"},children:["リターン(1年): ",f.extra.returnPct]})]})]})]})]}),!e&&O&&T.jsxs("div",{className:"holding-box",children:[T.jsxs("div",{className:"holding-box-header",children:["保有情報 (購入金額合計: ¥",Math.round(z).toLocaleString()," / 平均基準価額: ¥",Math.round(G).toLocaleString(),")"]}),T.jsxs("div",{className:"holding-grid",children:[T.jsxs("div",{className:"holding-item",children:[T.jsx("span",{className:"holding-label",children:"購入金額合計"}),T.jsxs("span",{className:"holding-value",children:["¥",Math.round(z).toLocaleString()]})]}),T.jsxs("div",{className:"holding-item",children:[T.jsx("span",{className:"holding-label",children:"評価額"}),T.jsxs("span",{className:"holding-value",children:["¥",Math.round(Q).toLocaleString()]})]}),T.jsxs("div",{className:"holding-item",children:[T.jsx("span",{className:"holding-label",children:"含み損益"}),T.jsxs("span",{className:`holding-value ${B>0?"up":B<0?"down":""}`,children:[B>0?"+":"",Math.round(B).toLocaleString()]})]}),T.jsxs("div",{className:"holding-item",children:[T.jsx("span",{className:"holding-label",children:"損益率"}),T.jsxs("span",{className:`holding-value ${B>0?"up":B<0?"down":""}`,children:[Z>0?"+":"",Z.toFixed(2),"%"]})]})]})]}),T.jsx("div",{className:"card-footer",children:f&&!_&&pe&&T.jsx("div",{className:"extra-data-grid",children:f.extra.rating!==void 0&&T.jsxs(T.Fragment,{children:[T.jsxs("div",{className:"holding-item",children:[T.jsx("span",{className:"holding-label",children:"レーティング"}),T.jsx("span",{className:"holding-value",style:{fontSize:"13px",color:"#f59e0b"},children:f.extra.rating||"—"})]}),T.jsxs("div",{className:"holding-item",children:[T.jsx("span",{className:"holding-label",children:"リターン(1年)"}),T.jsx("span",{className:"holding-value",style:{fontSize:"13px"},children:f.extra.returnPct||"—"})]}),T.jsxs("div",{className:"holding-item",style:{gridColumn:"span 2",marginTop:"4px"},children:[T.jsx("span",{className:"holding-label",children:"実質信託報酬"}),T.jsx("span",{className:"holding-value",style:{fontSize:"13px"},children:f.extra.fee||"—"})]})]})})})]})}const sd=()=>({date:"",price:"",amountOrQuantity:""});function HR({isOpen:i,ticker:e,type:t,name:s,initialData:o,onSave:u,onClose:h,onDeleteD:f}){const[g,_]=Oe.useState([sd()]),[w,k]=Oe.useState(e||"");if(Oe.useEffect(()=>{if(!i){k("");return}e&&k(e),o?Array.isArray(o)?_(o.map(oe=>({...oe}))):_([{date:o.date||"",price:String(o.price||""),amountOrQuantity:String(o.amountOrQuantity||"")}]):_([sd()])},[i,o,e]),!i)return null;const O=!e,z=O?w.replace(/[^a-zA-Z0-9]/g,"").length>=8:t==="funds",G=!z;function Q(){_(oe=>[...oe,sd()])}function B(oe){window.confirm("この購入データを削除してもよろしいですか？")&&_(pe=>pe.filter((me,we)=>we!==oe))}function Z(oe,pe,me){_(we=>we.map((C,I)=>I===oe?{...C,[pe]:me}:C))}function he(oe){if(oe.preventDefault(),O&&!w.trim())return;const pe=g.map(me=>({date:me.date,price:parseFloat(me.price)||0,amountOrQuantity:parseFloat(me.amountOrQuantity)||0})).filter(me=>me.price>0&&me.amountOrQuantity>0);u(pe,w.trim(),z?"funds":"stocks")}return T.jsx("div",{className:"modal-backdrop",onClick:h,children:T.jsxs("div",{className:"modal-content modal-content-wide",onClick:oe=>oe.stopPropagation(),children:[T.jsxs("div",{className:"modal-header",children:[T.jsxs("div",{children:[T.jsx("div",{className:"modal-title",children:O?"保有情報の新規登録":"保有情報の編集"}),T.jsx("div",{className:"modal-subtitle",children:O?"ティッカー・購入情報を入力":s||e})]}),T.jsx("button",{className:"modal-close",onClick:h,children:"✕"})]}),T.jsxs("form",{onSubmit:he,children:[T.jsxs("div",{className:"modal-body",children:[O&&T.jsxs("div",{className:"form-group",style:{marginBottom:20},children:[T.jsx("label",{style:{fontSize:"14px",fontWeight:"600"},children:"ティッカー / ファンドコード"}),T.jsx("input",{type:"text",required:!0,autoFocus:!0,style:{width:"100%",padding:"12px",borderRadius:"12px",border:"1px solid var(--border)",background:"var(--bg-primary)",color:"var(--text-primary)",fontSize:"16px",marginTop:"8px"},placeholder:"例: 7203 または 0331418A",value:w,onChange:oe=>k(oe.target.value)}),T.jsx("div",{style:{fontSize:"11px",color:"var(--text-muted)",marginTop:"6px"},children:"自動で株式・投資信託を判別します"})]}),g.map((oe,pe)=>T.jsxs("div",{className:"holding-entry-block",children:[T.jsxs("div",{className:"holding-entry-header",children:[T.jsxs("span",{children:["購入 ",pe+1]}),g.length>1&&T.jsx("button",{type:"button",className:"holding-entry-remove",onClick:()=>B(pe),children:"✕ 削除"})]}),T.jsxs("div",{className:"holding-entry-row",children:[T.jsxs("div",{className:"form-group",children:[T.jsx("label",{children:"購入日 (任意)"}),T.jsx("input",{type:"date",max:"9999-12-31",value:oe.date,onChange:me=>{const we=me.target.value;we.split("-")[0].length>4||Z(pe,"date",we)}})]}),T.jsxs("div",{className:"form-group",children:[T.jsx("label",{children:"取得単価 (円)"}),T.jsx("input",{type:"number",step:"0.01",min:"0",required:!0,placeholder:G?"例: 1500":"例: 24500 (基準価額)",value:oe.price,onChange:me=>Z(pe,"price",me.target.value)})]}),T.jsxs("div",{className:"form-group",children:[T.jsx("label",{children:G?"保有株数 (株)":"購入金額 (円)"}),T.jsx("input",{type:"number",step:"0.01",min:"0",required:!0,placeholder:G?"例: 100":"例: 100000",value:oe.amountOrQuantity,onChange:me=>Z(pe,"amountOrQuantity",me.target.value)})]})]})]},pe)),T.jsx("button",{type:"button",className:"btn-add-entry",onClick:Q,children:"＋ 購入を追加"})]}),T.jsxs("div",{className:"modal-footer",children:[o&&T.jsx("button",{type:"button",className:"btn btn-danger",onClick:()=>{window.confirm("この銘柄の保有情報をすべて削除（クリア）してよろしいですか？")&&f()},children:"情報をクリア"}),T.jsx("button",{type:"button",className:"btn btn-cancel",onClick:h,children:"キャンセル"}),T.jsx("button",{type:"submit",className:"btn btn-primary",children:"保存"})]})]})]})})}function WR(){const{theme:i}=yy(),[e,t]=Oe.useState("login"),[s,o]=Oe.useState(""),[u,h]=Oe.useState(""),[f,g]=Oe.useState(null),[_,w]=Oe.useState(!1);async function k(z){z.preventDefault(),g(null),w(!0);try{e==="login"?await OR(s,u):await LR(s,u)}catch(G){const Q=G.code==="auth/user-not-found"?"メールアドレスが見つかりません":G.code==="auth/wrong-password"?"パスワードが正しくありません":G.code==="auth/email-already-in-use"?"このメールアドレスは既に使用されています":G.code==="auth/weak-password"?"パスワードは6文字以上にしてください":G.code==="auth/invalid-email"?"有効なメールアドレスを入力してください":G.code==="auth/invalid-credential"?"メールアドレスまたはパスワードが正しくありません":`エラー: ${G.message}`;g(Q)}finally{w(!1)}}async function O(){g(null),w(!0);try{await VR()}catch(z){g("Googleログインに失敗しました: "+z.message)}finally{w(!1)}}return T.jsx("div",{className:"login-bg",children:T.jsxs("div",{className:"login-card",children:[T.jsxs("div",{className:"login-logo",children:[T.jsx("div",{className:"login-logo-icon",children:"📈"}),T.jsx("div",{className:"login-logo-text",children:"SmartTIC"}),T.jsx("div",{className:"login-logo-sub",children:"株価・投資信託 ダッシュボード"})]}),T.jsxs("div",{className:"login-tab-row",children:[T.jsx("button",{className:`login-tab ${e==="login"?"active":""}`,onClick:()=>{t("login"),g(null)},children:"ログイン"}),T.jsx("button",{className:`login-tab ${e==="register"?"active":""}`,onClick:()=>{t("register"),g(null)},children:"新規登録"})]}),T.jsxs("form",{className:"login-form",onSubmit:k,children:[T.jsxs("div",{className:"login-form-group",children:[T.jsx("label",{children:"メールアドレス"}),T.jsx("input",{type:"email",placeholder:"example@email.com",value:s,onChange:z=>o(z.target.value),required:!0,autoComplete:"email"})]}),T.jsxs("div",{className:"login-form-group",children:[T.jsx("label",{children:"パスワード"}),T.jsx("input",{type:"password",placeholder:e==="register"?"6文字以上":"パスワード",value:u,onChange:z=>h(z.target.value),required:!0,autoComplete:e==="login"?"current-password":"new-password"})]}),f&&T.jsx("div",{className:"login-error",children:f}),T.jsx("button",{type:"submit",className:"login-btn-primary",disabled:_,children:_?"処理中...":e==="login"?"ログイン":"アカウントを作成"})]}),T.jsx("div",{className:"login-divider",children:T.jsx("span",{children:"または"})}),T.jsxs("button",{className:"login-btn-google",onClick:O,disabled:_,children:[T.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[T.jsx("path",{d:"M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z",fill:"#4285F4"}),T.jsx("path",{d:"M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z",fill:"#34A853"}),T.jsx("path",{d:"M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z",fill:"#FBBC05"}),T.jsx("path",{d:"M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z",fill:"#EA4335"})]}),"Googleでログイン"]})]})})}const qR=6e4;function my(i){return!i.holdings&&i.holding?{...i,holdings:[i.holding],holding:void 0}:i.holdings?i:{...i,holdings:[]}}function KR(){const{theme:i,toggleTheme:e}=yy(),[t,s]=Oe.useState(!1),o=Oe.useRef(null);Oe.useEffect(()=>{const ne=ye=>{o.current&&!o.current.contains(ye.target)&&s(!1)};return document.addEventListener("mousedown",ne),()=>document.removeEventListener("mousedown",ne)},[]);const[u,h]=Oe.useState(void 0);Oe.useEffect(()=>{const ne=z0(sl,de=>{h(de)}),ye=setTimeout(()=>{h(de=>de===void 0?(console.warn("Auth state check timed out. Defaulting to null."),null):de)},1e4);return()=>{ne(),clearTimeout(ye)}},[]);const[f,g]=Oe.useState("stocks"),[_,w]=Oe.useState([]),[k,O]=Oe.useState([]),[z,G]=Oe.useState(!1);Oe.useEffect(()=>{if(!u){G(!1);return}(async()=>{try{const ye=ly(py,"users",u.uid),de=await AR(ye);if(de.exists()){const $e=de.data(),ze=($e.stocks||[]).map(jt=>({...my(jt),data:null,loading:!0,error:null})),je=($e.funds||[]).map(jt=>({...my(jt),data:null,loading:!0,error:null}));w(ze),O(je),ze.length>0&&X("stocks",ze,w),je.length>0&&X("funds",je,O)}G(!0)}catch(ye){console.error("Firestore loading error:",ye),G(!0)}})()},[u]),Oe.useEffect(()=>{if(!u||!z)return;const ye=setTimeout(async()=>{try{const de=ly(py,"users",u.uid);await kR(de,{stocks:_.map(({ticker:$e,label:ze,holdings:je})=>({ticker:$e,label:ze,holdings:je||[]})),funds:k.map(({ticker:$e,label:ze,holdings:je})=>({ticker:$e,label:ze,holdings:je||[]})),lastSaved:new Date().toISOString()},{merge:!0}),console.log("Firestore saved successfully")}catch(de){console.error("Firestore saving error:",de),tt("データのクラウド保存に失敗しました。")}},1e3);return()=>clearTimeout(ye)},[_,k,u,z]);const[Q,B]=Oe.useState("all"),[Z,he]=Oe.useState("market"),[oe,pe]=Oe.useState(""),[me,we]=Oe.useState(null),[C,I]=Oe.useState(!1),[R,x]=Oe.useState(null),[N,L]=Oe.useState(!1),A=Oe.useRef(null),[ge,Ze]=Oe.useState(null);function tt(ne){we(ne),clearTimeout(A.current),A.current=setTimeout(()=>we(null),3e3)}const Ge=Oe.useCallback(async(ne,ye)=>{const de=ye==="stocks"?FR:jR;try{return{data:await de(ne),error:null}}catch($e){return{data:null,error:$e.message||"取得失敗"}}},[]),X=Oe.useCallback(async(ne,ye,de)=>{de(ze=>ze.map(je=>({...je,loading:!0,error:null})));const $e=await Promise.all(ye.map(ze=>Ge(ze.ticker,ne)));de(ze=>ze.map((je,jt)=>({...je,loading:!1,data:$e[jt].data??je.data,error:$e[jt].error})))},[Ge]),ue=Oe.useCallback(async()=>{I(!0),await Promise.all([X("stocks",_,w),X("funds",k,O)]),x(new Date),I(!1)},[_,k,X]);Oe.useEffect(()=>{X("stocks",_,w),X("funds",k,O),x(new Date)},[]),Oe.useEffect(()=>{const ne=setInterval(()=>{ue()},qR);return()=>clearInterval(ne)},[ue]);function ee(ne,ye){window.confirm(`${ne} を完全に削除してもよろしいですか？`)&&window.confirm("本当に削除しますか？この操作は取り消せません。")&&(ye==="stocks"?w(de=>de.filter($e=>$e.ticker!==ne)):O(de=>de.filter($e=>$e.ticker!==ne)),tt(`${ne} を削除しました`))}function V(ne,ye){var de,$e;Ze({ticker:ne.ticker,type:ye,name:((de=ne.data)==null?void 0:de.name)||ne.label||ne.ticker,initialData:(($e=ne.holdings)==null?void 0:$e.length)>0?ne.holdings:null})}function H(ne,ye,de){if(!ge)return;const $e=ge.isNew,ze=ye||ge.ticker,je=de||ge.type,jt=je==="funds",We=(jt?jv:Fv)(ze),sn=jt?k:_,Bn=jt?O:w;if($e){if(!window.confirm(`${We} を新規登録しますか？`))return;if(sn.find(on=>on.ticker===We))Bn(on=>on.map(kt=>kt.ticker===We?{...kt,holdings:[...kt.holdings||[],...ne]}:kt)),tt(`${We} の保有情報を追加しました`);else{const on={ticker:We,label:"",holdings:ne};Bn(kt=>[...kt,{...on,data:null,loading:!0,error:null}]),Ge(We,je).then(kt=>{Bn($n=>$n.map(mr=>mr.ticker===We?{...mr,data:kt.data,error:kt.error,loading:!1}:mr))}),tt(`${We} を登録し、保有情報を追加しました`)}}else{if(!window.confirm("保有情報を更新しますか？")||!window.confirm("内容を確定してよろしいですか？"))return;Bn(on=>on.map(kt=>kt.ticker===We?{...kt,holdings:ne}:kt)),tt(`${We} の保有情報を保存しました`)}Ze(null)}function ke(){if(!ge)return;const{ticker:ne,type:ye}=ge;if(!window.confirm(`${ne} の保有情報をクリアしてもよろしいですか？`)||!window.confirm("本当にクリアしますか？この操作は取り消せません。"))return;(ye==="stocks"?w:O)($e=>$e.map(ze=>ze.ticker===ne?{...ze,holdings:[]}:ze)),tt(`${ne} の保有情報をクリアしました`),Ze(null)}function Te(ne,ye){return ne.filter(de=>{if(!de.data)return!1;if(Z==="details"){const ze=_.some(je=>je.ticker===de.ticker)?Dd(de.holdings,de.data.price):Vd(de.holdings,de.data.price);return ze.hasHolding?ye==="up"?ze.pnL>0:ye==="down"?ze.pnL<0:ze.pnL===0:!1}return ye==="up"?de.data.change>0:ye==="down"?de.data.change<0:de.data.change===0}).length}const Ie=Q==="all"?[..._,...k]:Q==="stocks"?_:k,Ce=(()=>{try{return Ie.reduce((ne,ye)=>{var ze;if(!ye.holdings||!Array.isArray(ye.holdings)||ye.holdings.length===0||!((ze=ye.data)!=null&&ze.price))return ne;let de=0,$e=0;if(_.some(je=>je.ticker===ye.ticker)){const je=Dd(ye.holdings,ye.data.price);if(!je.hasHolding)return ne;de=je.totalCost,$e=je.currentValue}else{const je=Vd(ye.holdings,ye.data.price);if(!je.hasHolding)return ne;de=je.totalCost,$e=je.currentValue}return ne.totalCost+=de,ne.totalValue+=$e,ne},{totalCost:0,totalValue:0})}catch(ne){return console.error("Summary calculation error:",ne),{totalCost:0,totalValue:0}}})(),De=Ce.totalValue-Ce.totalCost,Fe=Ce.totalCost>0?De/Ce.totalCost*100:0,Qe=Te(Ie,"up"),At=Te(Ie,"down"),Wr=Ie.length-Qe-At;return u===void 0?T.jsx("div",{className:"auth-loading",children:T.jsx("div",{className:"auth-loading-spinner"})}):u?T.jsxs("div",{className:"app",children:[T.jsx("header",{className:"header",children:T.jsxs("div",{className:"container header-inner",children:[T.jsxs("div",{className:"logo",children:[T.jsx("div",{className:"logo-icon",children:"📈"}),T.jsxs("div",{children:[T.jsx("div",{className:"logo-text",children:"SmartTIC"}),T.jsx("div",{className:"logo-sub",children:"株価・投資信託 ダッシュボード"})]})]}),T.jsxs("div",{className:"header-actions",children:[Z!=="manage"&&R&&T.jsxs("div",{className:"last-updated",children:["最終更新: ",R.toLocaleTimeString("ja-JP",{hour:"2-digit",minute:"2-digit",second:"2-digit"})]}),Z!=="manage"&&T.jsxs("button",{className:`refresh-btn ${C?"spinning":""}`,onClick:ue,children:[T.jsx("span",{className:"icon-refresh",children:"↻"})," 更新"]}),T.jsx("button",{className:"theme-toggle-btn",onClick:e,title:i==="dark"?"ライトモード":"ダークモード",children:i==="dark"?"☀️":"🌙"}),T.jsxs("div",{className:"user-menu",ref:o,children:[T.jsx("img",{className:"user-avatar",src:u.photoURL||`https://ui-avatars.com/api/?name=${encodeURIComponent(u.email||"U")}&background=3b82f6&color=fff&size=32`,alt:"user",onClick:()=>s(!t),style:{cursor:"pointer"}}),t&&T.jsx("div",{className:"user-dropdown",children:T.jsxs("button",{className:"logout-btn",onClick:()=>MR(),children:[T.jsx("span",{children:"🚪"})," ログアウト"]})})]})]})]})}),T.jsxs("main",{className:"container main-content",children:[T.jsxs("div",{className:"super-tabs",children:[T.jsx("button",{className:`super-tab-btn ${Z==="market"?"active":""}`,onClick:()=>he("market"),children:"📊 マーケット"}),T.jsx("button",{className:`super-tab-btn ${Z==="details"?"active":""}`,onClick:()=>he("details"),children:"💼 ポートフォリオ"}),T.jsx("button",{className:`super-tab-btn ${Z==="manage"?"active":""}`,onClick:()=>he("manage"),children:"⚙️ 登録・管理"})]}),Z!=="manage"&&T.jsxs(T.Fragment,{children:[T.jsxs("div",{className:"tabs",children:[T.jsxs("button",{className:`tab-btn ${Q==="all"?"active":""}`,onClick:()=>B("all"),children:["すべて ",T.jsx("span",{className:"tab-count",children:_.length+k.length})]}),T.jsxs("button",{className:`tab-btn ${Q==="stocks"?"active":""}`,onClick:()=>B("stocks"),children:["株式 ",T.jsx("span",{className:"tab-count",children:_.length})]}),T.jsxs("button",{className:`tab-btn ${Q==="funds"?"active":""}`,onClick:()=>B("funds"),children:["投資信託 ",T.jsx("span",{className:"tab-count",children:k.length})]})]}),Z!=="market"&&Ce.totalCost>0&&T.jsx("div",{className:"portfolio-summary-card",children:T.jsxs("div",{className:"summary-main",children:[T.jsx("div",{className:"summary-label",children:"ポートフォリオ評価額合計 / トータル損益"}),T.jsxs("div",{className:"summary-value-row",children:[T.jsxs("span",{className:"total-value",children:["¥",Math.round(Ce.totalValue).toLocaleString()]}),T.jsxs("span",{className:`total-pnl ${De>0?"up":De<0?"down":""}`,children:[De>0?"▲":De<0?"▼":""," ¥",Math.round(Math.abs(De)).toLocaleString()," (",De>0?"+":"",Fe.toFixed(2),"%)"]})]})]})}),T.jsxs("div",{className:"stats-bar",children:[T.jsxs("div",{className:"stat-chip",children:[T.jsx("div",{className:"dot red"})," ",Z==="details"?"含み益":"値上がり",": ",Qe]}),T.jsxs("div",{className:"stat-chip",children:[T.jsx("div",{className:"dot blue"})," ",Z==="details"?"含み損":"値下がり",": ",At]}),T.jsxs("div",{className:"stat-chip",children:[T.jsx("div",{className:"dot gray"})," ",Z==="details"?"損益なし":"変わらず",": ",Wr]}),T.jsxs("div",{className:"stat-chip",style:{marginLeft:"auto",background:"transparent",border:"none"},children:["全体: ",Ie.length,"銘柄"]})]}),Ie.length===0?T.jsxs("div",{className:"empty-state",children:[T.jsx("div",{className:"empty-icon",children:"📂"}),T.jsx("div",{className:"empty-title",children:"銘柄が登録されていません"}),T.jsx("div",{className:"empty-desc",children:"「登録・管理」タブから新しい銘柄を追加してください。"})]}):T.jsx("div",{className:"cards-grid",children:Ie.map(ne=>_.some(de=>de.ticker===ne.ticker)?T.jsx(zR,{item:ne,simpleMode:Z==="market",hideEdit:Z==="details",onDelete:de=>ee(de,"stocks"),onEditHolding:()=>V(ne,"stocks")},`stock-${ne.ticker}`):T.jsx($R,{item:ne,simpleMode:Z==="market",hideEdit:Z==="details",onDelete:de=>ee(de,"funds"),onEditHolding:()=>V(ne,"funds")},`fund-${ne.ticker}`))})]}),Z==="manage"&&T.jsxs("div",{className:"manage-screen",children:[T.jsx("div",{className:"manage-add-section",style:{background:"transparent",border:"none",padding:0},children:T.jsx("button",{className:"add-form-btn",style:{width:"100%",padding:"16px",fontSize:"16px",borderRadius:"16px",marginBottom:"24px"},onClick:()=>Ze({isNew:!0,type:"stocks"}),children:"＋ 保有情報登録"})}),T.jsxs("div",{className:"manage-list-section",children:[T.jsx("h2",{children:"登録済み銘柄の一覧"}),T.jsxs("div",{className:"manage-list",children:[T.jsxs("h3",{className:"manage-list-header",children:["株式 (",_.length,")"]}),_.map(ne=>{var ye,de;return T.jsxs("div",{className:"manage-list-item",children:[T.jsxs("div",{className:"manage-item-info",children:[T.jsx("span",{className:"manage-item-ticker",children:((ye=ne.data)==null?void 0:ye.ticker)||ne.ticker}),T.jsx("span",{className:"manage-item-name",children:((de=ne.data)==null?void 0:de.name)||ne.label||"読み込み中..."})]}),T.jsxs("div",{className:"manage-item-actions",children:[T.jsx("button",{className:"manage-action-btn edit",onClick:()=>V(ne,"stocks"),children:ne.holdings&&ne.holdings.length>0?`🖋️ 保有情報編集 (${ne.holdings.length}件)`:"＋ 保有情報登録"}),T.jsx("button",{className:"manage-action-btn delete",onClick:()=>ee(ne.ticker,"stocks"),children:"削除"})]})]},ne.ticker)}),T.jsxs("h3",{className:"manage-list-header",style:{marginTop:32},children:["投資信託 (",k.length,")"]}),k.map(ne=>{var ye,de;return T.jsxs("div",{className:"manage-list-item",children:[T.jsxs("div",{className:"manage-item-info",children:[T.jsx("span",{className:"manage-item-ticker",children:((ye=ne.data)==null?void 0:ye.ticker)||ne.ticker}),T.jsx("span",{className:"manage-item-name",children:((de=ne.data)==null?void 0:de.name)||ne.label||"読み込み中..."})]}),T.jsxs("div",{className:"manage-item-actions",children:[T.jsx("button",{className:"manage-action-btn edit",onClick:()=>V(ne,"funds"),children:ne.holdings&&ne.holdings.length>0?`🖋️ 保有情報編集 (${ne.holdings.length}件)`:"＋ 保有情報登録"}),T.jsx("button",{className:"manage-action-btn delete",onClick:()=>ee(ne.ticker,"funds"),children:"削除"})]})]},ne.ticker)})]})]})]})]}),me&&T.jsx("div",{className:"notification",children:me}),T.jsx(HR,{isOpen:!!ge,ticker:ge==null?void 0:ge.ticker,type:ge==null?void 0:ge.type,name:ge==null?void 0:ge.name,initialData:ge==null?void 0:ge.initialData,onSave:H,onClose:()=>Ze(null),onDeleteD:ke})]}):T.jsx(WR,{})}nw.createRoot(document.getElementById("root")).render(T.jsx(Oe.StrictMode,{children:T.jsx(rw,{children:T.jsx(KR,{})})}));
