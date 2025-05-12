(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Ay(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var $h={exports:{}},Ea={},Hh={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function GE(){if(Mm)return Re;Mm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.iterator;function A(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,$={};function z(O,W,he){this.props=O,this.context=W,this.refs=$,this.updater=he||F}z.prototype.isReactComponent={},z.prototype.setState=function(O,W){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,W,"setState")},z.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function q(){}q.prototype=z.prototype;function te(O,W,he){this.props=O,this.context=W,this.refs=$,this.updater=he||F}var Y=te.prototype=new q;Y.constructor=te,M(Y,z.prototype),Y.isPureReactComponent=!0;var re=Array.isArray,Ee=Object.prototype.hasOwnProperty,ge={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function T(O,W,he){var Ie,Se={},Pe=null,Me=null;if(W!=null)for(Ie in W.ref!==void 0&&(Me=W.ref),W.key!==void 0&&(Pe=""+W.key),W)Ee.call(W,Ie)&&!N.hasOwnProperty(Ie)&&(Se[Ie]=W[Ie]);var be=arguments.length-2;if(be===1)Se.children=he;else if(1<be){for(var Be=Array(be),gt=0;gt<be;gt++)Be[gt]=arguments[gt+2];Se.children=Be}if(O&&O.defaultProps)for(Ie in be=O.defaultProps,be)Se[Ie]===void 0&&(Se[Ie]=be[Ie]);return{$$typeof:r,type:O,key:Pe,ref:Me,props:Se,_owner:ge.current}}function R(O,W){return{$$typeof:r,type:O.type,key:W,ref:O.ref,props:O.props,_owner:O._owner}}function P(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function D(O){var W={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(he){return W[he]})}var L=/\/+/g;function C(O,W){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):W.toString(36)}function tt(O,W,he,Ie,Se){var Pe=typeof O;(Pe==="undefined"||Pe==="boolean")&&(O=null);var Me=!1;if(O===null)Me=!0;else switch(Pe){case"string":case"number":Me=!0;break;case"object":switch(O.$$typeof){case r:case e:Me=!0}}if(Me)return Me=O,Se=Se(Me),O=Ie===""?"."+C(Me,0):Ie,re(Se)?(he="",O!=null&&(he=O.replace(L,"$&/")+"/"),tt(Se,W,he,"",function(gt){return gt})):Se!=null&&(P(Se)&&(Se=R(Se,he+(!Se.key||Me&&Me.key===Se.key?"":(""+Se.key).replace(L,"$&/")+"/")+O)),W.push(Se)),1;if(Me=0,Ie=Ie===""?".":Ie+":",re(O))for(var be=0;be<O.length;be++){Pe=O[be];var Be=Ie+C(Pe,be);Me+=tt(Pe,W,he,Be,Se)}else if(Be=A(O),typeof Be=="function")for(O=Be.call(O),be=0;!(Pe=O.next()).done;)Pe=Pe.value,Be=Ie+C(Pe,be++),Me+=tt(Pe,W,he,Be,Se);else if(Pe==="object")throw W=String(O),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return Me}function kt(O,W,he){if(O==null)return O;var Ie=[],Se=0;return tt(O,Ie,"","",function(Pe){return W.call(he,Pe,Se++)}),Ie}function Pt(O){if(O._status===-1){var W=O._result;W=W(),W.then(function(he){(O._status===0||O._status===-1)&&(O._status=1,O._result=he)},function(he){(O._status===0||O._status===-1)&&(O._status=2,O._result=he)}),O._status===-1&&(O._status=0,O._result=W)}if(O._status===1)return O._result.default;throw O._result}var Ue={current:null},ee={transition:null},de={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:ee,ReactCurrentOwner:ge};function se(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:kt,forEach:function(O,W,he){kt(O,function(){W.apply(this,arguments)},he)},count:function(O){var W=0;return kt(O,function(){W++}),W},toArray:function(O){return kt(O,function(W){return W})||[]},only:function(O){if(!P(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Re.Component=z,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=te,Re.StrictMode=s,Re.Suspense=g,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,Re.act=se,Re.cloneElement=function(O,W,he){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ie=M({},O.props),Se=O.key,Pe=O.ref,Me=O._owner;if(W!=null){if(W.ref!==void 0&&(Pe=W.ref,Me=ge.current),W.key!==void 0&&(Se=""+W.key),O.type&&O.type.defaultProps)var be=O.type.defaultProps;for(Be in W)Ee.call(W,Be)&&!N.hasOwnProperty(Be)&&(Ie[Be]=W[Be]===void 0&&be!==void 0?be[Be]:W[Be])}var Be=arguments.length-2;if(Be===1)Ie.children=he;else if(1<Be){be=Array(Be);for(var gt=0;gt<Be;gt++)be[gt]=arguments[gt+2];Ie.children=be}return{$$typeof:r,type:O.type,key:Se,ref:Pe,props:Ie,_owner:Me}},Re.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},Re.createElement=T,Re.createFactory=function(O){var W=T.bind(null,O);return W.type=O,W},Re.createRef=function(){return{current:null}},Re.forwardRef=function(O){return{$$typeof:f,render:O}},Re.isValidElement=P,Re.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:Pt}},Re.memo=function(O,W){return{$$typeof:v,type:O,compare:W===void 0?null:W}},Re.startTransition=function(O){var W=ee.transition;ee.transition={};try{O()}finally{ee.transition=W}},Re.unstable_act=se,Re.useCallback=function(O,W){return Ue.current.useCallback(O,W)},Re.useContext=function(O){return Ue.current.useContext(O)},Re.useDebugValue=function(){},Re.useDeferredValue=function(O){return Ue.current.useDeferredValue(O)},Re.useEffect=function(O,W){return Ue.current.useEffect(O,W)},Re.useId=function(){return Ue.current.useId()},Re.useImperativeHandle=function(O,W,he){return Ue.current.useImperativeHandle(O,W,he)},Re.useInsertionEffect=function(O,W){return Ue.current.useInsertionEffect(O,W)},Re.useLayoutEffect=function(O,W){return Ue.current.useLayoutEffect(O,W)},Re.useMemo=function(O,W){return Ue.current.useMemo(O,W)},Re.useReducer=function(O,W,he){return Ue.current.useReducer(O,W,he)},Re.useRef=function(O){return Ue.current.useRef(O)},Re.useState=function(O){return Ue.current.useState(O)},Re.useSyncExternalStore=function(O,W,he){return Ue.current.useSyncExternalStore(O,W,he)},Re.useTransition=function(){return Ue.current.useTransition()},Re.version="18.3.1",Re}var bm;function Ud(){return bm||(bm=1,Hh.exports=GE()),Hh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm;function QE(){if(Fm)return Ea;Fm=1;var r=Ud(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,v){var E,S={},A=null,F=null;v!==void 0&&(A=""+v),g.key!==void 0&&(A=""+g.key),g.ref!==void 0&&(F=g.ref);for(E in g)s.call(g,E)&&!l.hasOwnProperty(E)&&(S[E]=g[E]);if(f&&f.defaultProps)for(E in g=f.defaultProps,g)S[E]===void 0&&(S[E]=g[E]);return{$$typeof:e,type:f,key:A,ref:F,props:S,_owner:o.current}}return Ea.Fragment=t,Ea.jsx=h,Ea.jsxs=h,Ea}var Um;function YE(){return Um||(Um=1,$h.exports=QE()),$h.exports}var Ye=YE(),H=Ud();const XE=Ay(H);var du={},qh={exports:{}},Yt={},Wh={exports:{}},Kh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function JE(){return zm||(zm=1,function(r){function e(ee,de){var se=ee.length;ee.push(de);e:for(;0<se;){var O=se-1>>>1,W=ee[O];if(0<o(W,de))ee[O]=de,ee[se]=W,se=O;else break e}}function t(ee){return ee.length===0?null:ee[0]}function s(ee){if(ee.length===0)return null;var de=ee[0],se=ee.pop();if(se!==de){ee[0]=se;e:for(var O=0,W=ee.length,he=W>>>1;O<he;){var Ie=2*(O+1)-1,Se=ee[Ie],Pe=Ie+1,Me=ee[Pe];if(0>o(Se,se))Pe<W&&0>o(Me,Se)?(ee[O]=Me,ee[Pe]=se,O=Pe):(ee[O]=Se,ee[Ie]=se,O=Ie);else if(Pe<W&&0>o(Me,se))ee[O]=Me,ee[Pe]=se,O=Pe;else break e}}return de}function o(ee,de){var se=ee.sortIndex-de.sortIndex;return se!==0?se:ee.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var g=[],v=[],E=1,S=null,A=3,F=!1,M=!1,$=!1,z=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Y(ee){for(var de=t(v);de!==null;){if(de.callback===null)s(v);else if(de.startTime<=ee)s(v),de.sortIndex=de.expirationTime,e(g,de);else break;de=t(v)}}function re(ee){if($=!1,Y(ee),!M)if(t(g)!==null)M=!0,Pt(Ee);else{var de=t(v);de!==null&&Ue(re,de.startTime-ee)}}function Ee(ee,de){M=!1,$&&($=!1,q(T),T=-1),F=!0;var se=A;try{for(Y(de),S=t(g);S!==null&&(!(S.expirationTime>de)||ee&&!D());){var O=S.callback;if(typeof O=="function"){S.callback=null,A=S.priorityLevel;var W=O(S.expirationTime<=de);de=r.unstable_now(),typeof W=="function"?S.callback=W:S===t(g)&&s(g),Y(de)}else s(g);S=t(g)}if(S!==null)var he=!0;else{var Ie=t(v);Ie!==null&&Ue(re,Ie.startTime-de),he=!1}return he}finally{S=null,A=se,F=!1}}var ge=!1,N=null,T=-1,R=5,P=-1;function D(){return!(r.unstable_now()-P<R)}function L(){if(N!==null){var ee=r.unstable_now();P=ee;var de=!0;try{de=N(!0,ee)}finally{de?C():(ge=!1,N=null)}}else ge=!1}var C;if(typeof te=="function")C=function(){te(L)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,kt=tt.port2;tt.port1.onmessage=L,C=function(){kt.postMessage(null)}}else C=function(){z(L,0)};function Pt(ee){N=ee,ge||(ge=!0,C())}function Ue(ee,de){T=z(function(){ee(r.unstable_now())},de)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ee){ee.callback=null},r.unstable_continueExecution=function(){M||F||(M=!0,Pt(Ee))},r.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<ee?Math.floor(1e3/ee):5},r.unstable_getCurrentPriorityLevel=function(){return A},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(ee){switch(A){case 1:case 2:case 3:var de=3;break;default:de=A}var se=A;A=de;try{return ee()}finally{A=se}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ee,de){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var se=A;A=ee;try{return de()}finally{A=se}},r.unstable_scheduleCallback=function(ee,de,se){var O=r.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?O+se:O):se=O,ee){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=se+W,ee={id:E++,callback:de,priorityLevel:ee,startTime:se,expirationTime:W,sortIndex:-1},se>O?(ee.sortIndex=se,e(v,ee),t(g)===null&&ee===t(v)&&($?(q(T),T=-1):$=!0,Ue(re,se-O))):(ee.sortIndex=W,e(g,ee),M||F||(M=!0,Pt(Ee))),ee},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(ee){var de=A;return function(){var se=A;A=de;try{return ee.apply(this,arguments)}finally{A=se}}}}(Kh)),Kh}var Bm;function ZE(){return Bm||(Bm=1,Wh.exports=JE()),Wh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function ew(){if(jm)return Yt;jm=1;var r=Ud(),e=ZE();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},S={};function A(n){return g.call(S,n)?!0:g.call(E,n)?!1:v.test(n)?S[n]=!0:(E[n]=!0,!1)}function F(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,c){if(i===null||typeof i>"u"||F(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function $(n,i,a,c,d,m,_){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=_}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){z[n]=new $(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];z[i]=new $(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){z[n]=new $(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){z[n]=new $(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){z[n]=new $(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){z[n]=new $(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){z[n]=new $(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){z[n]=new $(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){z[n]=new $(n,5,!1,n.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function te(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(q,te);z[i]=new $(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(q,te);z[i]=new $(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(q,te);z[i]=new $(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){z[n]=new $(n,1,!1,n.toLowerCase(),null,!1,!1)}),z.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){z[n]=new $(n,1,!1,n.toLowerCase(),null,!0,!0)});function Y(n,i,a,c){var d=z.hasOwnProperty(i)?z[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,d,c)&&(a=null),c||d===null?A(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var re=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ee=Symbol.for("react.element"),ge=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),kt=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),ee=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,O;function W(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var he=!1;function Ie(n,i){if(!n||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(B){var c=B}Reflect.construct(n,[],i)}else{try{i.call()}catch(B){c=B}n.call(i.prototype)}else{try{throw Error()}catch(B){c=B}n()}}catch(B){if(B&&c&&typeof B.stack=="string"){for(var d=B.stack.split(`
`),m=c.stack.split(`
`),_=d.length-1,I=m.length-1;1<=_&&0<=I&&d[_]!==m[I];)I--;for(;1<=_&&0<=I;_--,I--)if(d[_]!==m[I]){if(_!==1||I!==1)do if(_--,I--,0>I||d[_]!==m[I]){var k=`
`+d[_].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=_&&0<=I);break}}}finally{he=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?W(n):""}function Se(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function Pe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case ge:return"Portal";case R:return"Profiler";case T:return"StrictMode";case C:return"Suspense";case tt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case L:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case kt:return i=n.displayName||null,i!==null?i:Pe(n.type)||"Memo";case Pt:i=n._payload,n=n._init;try{return Pe(n(i))}catch{}}return null}function Me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pe(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function be(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function gt(n){var i=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,m.call(this,_)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function or(n){n._valueTracker||(n._valueTracker=gt(n))}function ls(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Or(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function wi(n,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function us(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=be(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Co(n,i){i=i.checked,i!=null&&Y(n,"checked",i,!1)}function Ao(n,i){Co(n,i);var a=be(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?cs(n,i.type,a):i.hasOwnProperty("defaultValue")&&cs(n,i.type,be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Xa(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function cs(n,i,a){(i!=="number"||Or(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ar=Array.isArray;function lr(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+be(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function ko(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function hs(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(ar(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:be(a)}}function ds(n,i){var a=be(i.value),c=be(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Po(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ut(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ct(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ut(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ur,No=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ur=ur||document.createElement("div"),ur.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ur.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Lr(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ii=["Webkit","ms","Moz","O"];Object.keys(Ti).forEach(function(n){Ii.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ti[i]=Ti[n]})});function xo(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ti.hasOwnProperty(n)&&Ti[n]?(""+i).trim():i+"px"}function Do(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=xo(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Oo=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lo(n,i){if(i){if(Oo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Vo(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Si=null;function fs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ps=null,an=null,Mn=null;function ms(n){if(n=sa(n)){if(typeof ps!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Al(i),ps(n.stateNode,n.type,i))}}function bn(n){an?Mn?Mn.push(n):Mn=[n]:an=n}function Mo(){if(an){var n=an,i=Mn;if(Mn=an=null,ms(n),i)for(n=0;n<i.length;n++)ms(i[n])}}function Ri(n,i){return n(i)}function bo(){}var cr=!1;function Fo(n,i,a){if(cr)return n(i,a);cr=!0;try{return Ri(n,i,a)}finally{cr=!1,(an!==null||Mn!==null)&&(bo(),Mo())}}function nt(n,i){var a=n.stateNode;if(a===null)return null;var c=Al(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var gs=!1;if(f)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){gs=!0}}),window.addEventListener("test",vn,vn),window.removeEventListener("test",vn,vn)}catch{gs=!1}function Ci(n,i,a,c,d,m,_,I,k){var B=Array.prototype.slice.call(arguments,3);try{i.apply(a,B)}catch(Q){this.onError(Q)}}var Ai=!1,ys=null,_n=!1,Uo=null,yc={onError:function(n){Ai=!0,ys=n}};function vs(n,i,a,c,d,m,_,I,k){Ai=!1,ys=null,Ci.apply(yc,arguments)}function Ja(n,i,a,c,d,m,_,I,k){if(vs.apply(this,arguments),Ai){if(Ai){var B=ys;Ai=!1,ys=null}else throw Error(t(198));_n||(_n=!0,Uo=B)}}function En(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ki(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function wn(n){if(En(n)!==n)throw Error(t(188))}function Za(n){var i=n.alternate;if(!i){if(i=En(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return wn(d),n;if(m===c)return wn(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var _=!1,I=d.child;I;){if(I===a){_=!0,a=d,c=m;break}if(I===c){_=!0,c=d,a=m;break}I=I.sibling}if(!_){for(I=m.child;I;){if(I===a){_=!0,a=m,c=d;break}if(I===c){_=!0,c=m,a=d;break}I=I.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function zo(n){return n=Za(n),n!==null?_s(n):null}function _s(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=_s(n);if(i!==null)return i;n=n.sibling}return null}var Es=e.unstable_scheduleCallback,Bo=e.unstable_cancelCallback,el=e.unstable_shouldYield,vc=e.unstable_requestPaint,je=e.unstable_now,tl=e.unstable_getCurrentPriorityLevel,Pi=e.unstable_ImmediatePriority,Vr=e.unstable_UserBlockingPriority,ln=e.unstable_NormalPriority,jo=e.unstable_LowPriority,nl=e.unstable_IdlePriority,Ni=null,Zt=null;function rl(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Ni,n,void 0,(n.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:sl,$o=Math.log,il=Math.LN2;function sl(n){return n>>>=0,n===0?32:31-($o(n)/il|0)|0}var ws=64,Ts=4194304;function Mr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function xi(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,_=a&268435455;if(_!==0){var I=_&~d;I!==0?c=Mr(I):(m&=_,m!==0&&(c=Mr(m)))}else _=a&~d,_!==0?c=Mr(_):m!==0&&(c=Mr(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ft(i),d=1<<a,c|=n[a],i&=~d;return c}function _c(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var _=31-Ft(m),I=1<<_,k=d[_];k===-1?((I&a)===0||(I&c)!==0)&&(d[_]=_c(I,i)):k<=i&&(n.expiredLanes|=I),m&=~I}}function en(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Di(){var n=ws;return ws<<=1,(ws&4194240)===0&&(ws=64),n}function br(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Fr(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ft(i),n[i]=a}function ze(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ft(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Ur(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ft(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var ke=0;function zr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ol,Is,al,ll,ul,Ho=!1,Fn=[],Tt=null,Tn=null,In=null,Br=new Map,un=new Map,Un=[],Ec="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cl(n,i){switch(n){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":Br.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":un.delete(i.pointerId)}}function $t(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=sa(i),i!==null&&Is(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function wc(n,i,a,c,d){switch(i){case"focusin":return Tt=$t(Tt,n,i,a,c,d),!0;case"dragenter":return Tn=$t(Tn,n,i,a,c,d),!0;case"mouseover":return In=$t(In,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Br.set(m,$t(Br.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,un.set(m,$t(un.get(m)||null,n,i,a,c,d)),!0}return!1}function hl(n){var i=bi(n.target);if(i!==null){var a=En(i);if(a!==null){if(i=a.tag,i===13){if(i=ki(a),i!==null){n.blockedOn=i,ul(n.priority,function(){al(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function dr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ss(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Si=c,a.target.dispatchEvent(c),Si=null}else return i=sa(a),i!==null&&Is(i),n.blockedOn=a,!1;i.shift()}return!0}function Oi(n,i,a){dr(n)&&a.delete(i)}function dl(){Ho=!1,Tt!==null&&dr(Tt)&&(Tt=null),Tn!==null&&dr(Tn)&&(Tn=null),In!==null&&dr(In)&&(In=null),Br.forEach(Oi),un.forEach(Oi)}function Sn(n,i){n.blockedOn===i&&(n.blockedOn=null,Ho||(Ho=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,dl)))}function Rn(n){function i(d){return Sn(d,n)}if(0<Fn.length){Sn(Fn[0],n);for(var a=1;a<Fn.length;a++){var c=Fn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Tt!==null&&Sn(Tt,n),Tn!==null&&Sn(Tn,n),In!==null&&Sn(In,n),Br.forEach(i),un.forEach(i),a=0;a<Un.length;a++)c=Un[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Un.length&&(a=Un[0],a.blockedOn===null);)hl(a),a.blockedOn===null&&Un.shift()}var fr=re.ReactCurrentBatchConfig,jr=!0;function We(n,i,a,c){var d=ke,m=fr.transition;fr.transition=null;try{ke=1,qo(n,i,a,c)}finally{ke=d,fr.transition=m}}function Tc(n,i,a,c){var d=ke,m=fr.transition;fr.transition=null;try{ke=4,qo(n,i,a,c)}finally{ke=d,fr.transition=m}}function qo(n,i,a,c){if(jr){var d=Ss(n,i,a,c);if(d===null)Oc(n,i,c,Li,a),cl(n,c);else if(wc(d,n,i,a,c))c.stopPropagation();else if(cl(n,c),i&4&&-1<Ec.indexOf(n)){for(;d!==null;){var m=sa(d);if(m!==null&&ol(m),m=Ss(n,i,a,c),m===null&&Oc(n,i,c,Li,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Oc(n,i,c,null,a)}}var Li=null;function Ss(n,i,a,c){if(Li=null,n=fs(c),n=bi(n),n!==null)if(i=En(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ki(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Li=n,null}function Wo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tl()){case Pi:return 1;case Vr:return 4;case ln:case jo:return 16;case nl:return 536870912;default:return 16}default:return 16}}var tn=null,Rs=null,Ht=null;function Ko(){if(Ht)return Ht;var n,i=Rs,a=i.length,c,d="value"in tn?tn.value:tn.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&i[a-c]===d[m-c];c++);return Ht=d.slice(n,1<c?1-c:void 0)}function Cs(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function zn(){return!0}function Go(){return!1}function It(n){function i(a,c,d,m,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=_,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?zn:Go,this.isPropagationStopped=Go,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=zn)},persist:function(){},isPersistent:zn}),i}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},As=It(Cn),Bn=se({},Cn,{view:0,detail:0}),Ic=It(Bn),ks,pr,$r,Vi=se({},Bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==$r&&($r&&n.type==="mousemove"?(ks=n.screenX-$r.screenX,pr=n.screenY-$r.screenY):pr=ks=0,$r=n),ks)},movementY:function(n){return"movementY"in n?n.movementY:pr}}),Ps=It(Vi),Qo=se({},Vi,{dataTransfer:0}),fl=It(Qo),Ns=se({},Bn,{relatedTarget:0}),xs=It(Ns),pl=se({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),mr=It(pl),ml=se({},Cn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),gl=It(ml),yl=se({},Cn,{data:0}),Yo=It(yl),Ds={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ut={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _l(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=vl[n])?!!i[n]:!1}function jn(){return _l}var u=se({},Bn,{key:function(n){if(n.key){var i=Ds[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Cs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ut[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jn,charCode:function(n){return n.type==="keypress"?Cs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Cs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p=It(u),y=se({},Vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=It(y),V=se({},Bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jn}),j=It(V),Z=se({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=It(Z),ht=se({},Vi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ne=It(ht),yt=[9,13,27,32],ot=f&&"CompositionEvent"in window,cn=null;f&&"documentMode"in document&&(cn=document.documentMode);var nn=f&&"TextEvent"in window&&!cn,Mi=f&&(!ot||cn&&8<cn&&11>=cn),Os=" ",Nf=!1;function xf(n,i){switch(n){case"keyup":return yt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Df(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ls=!1;function q_(n,i){switch(n){case"compositionend":return Df(i);case"keypress":return i.which!==32?null:(Nf=!0,Os);case"textInput":return n=i.data,n===Os&&Nf?null:n;default:return null}}function W_(n,i){if(Ls)return n==="compositionend"||!ot&&xf(n,i)?(n=Ko(),Ht=Rs=tn=null,Ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Mi&&i.locale!=="ko"?null:i.data;default:return null}}var K_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!K_[n.type]:i==="textarea"}function Lf(n,i,a,c){bn(c),i=Sl(i,"onChange"),0<i.length&&(a=new As("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Xo=null,Jo=null;function G_(n){Jf(n,0)}function El(n){var i=Us(n);if(ls(i))return n}function Q_(n,i){if(n==="change")return i}var Vf=!1;if(f){var Sc;if(f){var Rc="oninput"in document;if(!Rc){var Mf=document.createElement("div");Mf.setAttribute("oninput","return;"),Rc=typeof Mf.oninput=="function"}Sc=Rc}else Sc=!1;Vf=Sc&&(!document.documentMode||9<document.documentMode)}function bf(){Xo&&(Xo.detachEvent("onpropertychange",Ff),Jo=Xo=null)}function Ff(n){if(n.propertyName==="value"&&El(Jo)){var i=[];Lf(i,Jo,n,fs(n)),Fo(G_,i)}}function Y_(n,i,a){n==="focusin"?(bf(),Xo=i,Jo=a,Xo.attachEvent("onpropertychange",Ff)):n==="focusout"&&bf()}function X_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return El(Jo)}function J_(n,i){if(n==="click")return El(i)}function Z_(n,i){if(n==="input"||n==="change")return El(i)}function eE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var An=typeof Object.is=="function"?Object.is:eE;function Zo(n,i){if(An(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!An(n[d],i[d]))return!1}return!0}function Uf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function zf(n,i){var a=Uf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Uf(a)}}function Bf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Bf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function jf(){for(var n=window,i=Or();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Or(n.document)}return i}function Cc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function tE(n){var i=jf(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Bf(a.ownerDocument.documentElement,a)){if(c!==null&&Cc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=zf(a,m);var _=zf(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(_.node,_.offset)):(i.setEnd(_.node,_.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var nE=f&&"documentMode"in document&&11>=document.documentMode,Vs=null,Ac=null,ea=null,kc=!1;function $f(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;kc||Vs==null||Vs!==Or(c)||(c=Vs,"selectionStart"in c&&Cc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ea&&Zo(ea,c)||(ea=c,c=Sl(Ac,"onSelect"),0<c.length&&(i=new As("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Vs)))}function wl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ms={animationend:wl("Animation","AnimationEnd"),animationiteration:wl("Animation","AnimationIteration"),animationstart:wl("Animation","AnimationStart"),transitionend:wl("Transition","TransitionEnd")},Pc={},Hf={};f&&(Hf=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Tl(n){if(Pc[n])return Pc[n];if(!Ms[n])return n;var i=Ms[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Hf)return Pc[n]=i[a];return n}var qf=Tl("animationend"),Wf=Tl("animationiteration"),Kf=Tl("animationstart"),Gf=Tl("transitionend"),Qf=new Map,Yf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(n,i){Qf.set(n,i),l(i,[n])}for(var Nc=0;Nc<Yf.length;Nc++){var xc=Yf[Nc],rE=xc.toLowerCase(),iE=xc[0].toUpperCase()+xc.slice(1);Hr(rE,"on"+iE)}Hr(qf,"onAnimationEnd"),Hr(Wf,"onAnimationIteration"),Hr(Kf,"onAnimationStart"),Hr("dblclick","onDoubleClick"),Hr("focusin","onFocus"),Hr("focusout","onBlur"),Hr(Gf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function Xf(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Ja(c,i,void 0,n),n.currentTarget=null}function Jf(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var _=c.length-1;0<=_;_--){var I=c[_],k=I.instance,B=I.currentTarget;if(I=I.listener,k!==m&&d.isPropagationStopped())break e;Xf(d,I,B),m=k}else for(_=0;_<c.length;_++){if(I=c[_],k=I.instance,B=I.currentTarget,I=I.listener,k!==m&&d.isPropagationStopped())break e;Xf(d,I,B),m=k}}}if(_n)throw n=Uo,_n=!1,Uo=null,n}function He(n,i){var a=i[Uc];a===void 0&&(a=i[Uc]=new Set);var c=n+"__bubble";a.has(c)||(Zf(i,n,2,!1),a.add(c))}function Dc(n,i,a){var c=0;i&&(c|=4),Zf(a,n,c,i)}var Il="_reactListening"+Math.random().toString(36).slice(2);function na(n){if(!n[Il]){n[Il]=!0,s.forEach(function(a){a!=="selectionchange"&&(sE.has(a)||Dc(a,!1,n),Dc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Il]||(i[Il]=!0,Dc("selectionchange",!1,i))}}function Zf(n,i,a,c){switch(Wo(i)){case 1:var d=We;break;case 4:d=Tc;break;default:d=qo}a=d.bind(null,i,a,n),d=void 0,!gs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Oc(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var k=_.tag;if((k===3||k===4)&&(k=_.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;_=_.return}for(;I!==null;){if(_=bi(I),_===null)return;if(k=_.tag,k===5||k===6){c=m=_;continue e}I=I.parentNode}}c=c.return}Fo(function(){var B=m,Q=fs(a),X=[];e:{var G=Qf.get(n);if(G!==void 0){var ie=As,le=n;switch(n){case"keypress":if(Cs(a)===0)break e;case"keydown":case"keyup":ie=p;break;case"focusin":le="focus",ie=xs;break;case"focusout":le="blur",ie=xs;break;case"beforeblur":case"afterblur":ie=xs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=Ps;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=fl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=j;break;case qf:case Wf:case Kf:ie=mr;break;case Gf:ie=Fe;break;case"scroll":ie=Ic;break;case"wheel":ie=Ne;break;case"copy":case"cut":case"paste":ie=gl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=w}var ue=(i&4)!==0,rt=!ue&&n==="scroll",b=ue?G!==null?G+"Capture":null:G;ue=[];for(var x=B,U;x!==null;){U=x;var J=U.stateNode;if(U.tag===5&&J!==null&&(U=J,b!==null&&(J=nt(x,b),J!=null&&ue.push(ra(x,J,U)))),rt)break;x=x.return}0<ue.length&&(G=new ie(G,le,null,a,Q),X.push({event:G,listeners:ue}))}}if((i&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",ie=n==="mouseout"||n==="pointerout",G&&a!==Si&&(le=a.relatedTarget||a.fromElement)&&(bi(le)||le[gr]))break e;if((ie||G)&&(G=Q.window===Q?Q:(G=Q.ownerDocument)?G.defaultView||G.parentWindow:window,ie?(le=a.relatedTarget||a.toElement,ie=B,le=le?bi(le):null,le!==null&&(rt=En(le),le!==rt||le.tag!==5&&le.tag!==6)&&(le=null)):(ie=null,le=B),ie!==le)){if(ue=Ps,J="onMouseLeave",b="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(ue=w,J="onPointerLeave",b="onPointerEnter",x="pointer"),rt=ie==null?G:Us(ie),U=le==null?G:Us(le),G=new ue(J,x+"leave",ie,a,Q),G.target=rt,G.relatedTarget=U,J=null,bi(Q)===B&&(ue=new ue(b,x+"enter",le,a,Q),ue.target=U,ue.relatedTarget=rt,J=ue),rt=J,ie&&le)t:{for(ue=ie,b=le,x=0,U=ue;U;U=bs(U))x++;for(U=0,J=b;J;J=bs(J))U++;for(;0<x-U;)ue=bs(ue),x--;for(;0<U-x;)b=bs(b),U--;for(;x--;){if(ue===b||b!==null&&ue===b.alternate)break t;ue=bs(ue),b=bs(b)}ue=null}else ue=null;ie!==null&&ep(X,G,ie,ue,!1),le!==null&&rt!==null&&ep(X,rt,le,ue,!0)}}e:{if(G=B?Us(B):window,ie=G.nodeName&&G.nodeName.toLowerCase(),ie==="select"||ie==="input"&&G.type==="file")var ce=Q_;else if(Of(G))if(Vf)ce=Z_;else{ce=X_;var fe=Y_}else(ie=G.nodeName)&&ie.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(ce=J_);if(ce&&(ce=ce(n,B))){Lf(X,ce,a,Q);break e}fe&&fe(n,G,B),n==="focusout"&&(fe=G._wrapperState)&&fe.controlled&&G.type==="number"&&cs(G,"number",G.value)}switch(fe=B?Us(B):window,n){case"focusin":(Of(fe)||fe.contentEditable==="true")&&(Vs=fe,Ac=B,ea=null);break;case"focusout":ea=Ac=Vs=null;break;case"mousedown":kc=!0;break;case"contextmenu":case"mouseup":case"dragend":kc=!1,$f(X,a,Q);break;case"selectionchange":if(nE)break;case"keydown":case"keyup":$f(X,a,Q)}var pe;if(ot)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Ls?xf(n,a)&&(ve="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Mi&&a.locale!=="ko"&&(Ls||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Ls&&(pe=Ko()):(tn=Q,Rs="value"in tn?tn.value:tn.textContent,Ls=!0)),fe=Sl(B,ve),0<fe.length&&(ve=new Yo(ve,n,null,a,Q),X.push({event:ve,listeners:fe}),pe?ve.data=pe:(pe=Df(a),pe!==null&&(ve.data=pe)))),(pe=nn?q_(n,a):W_(n,a))&&(B=Sl(B,"onBeforeInput"),0<B.length&&(Q=new Yo("onBeforeInput","beforeinput",null,a,Q),X.push({event:Q,listeners:B}),Q.data=pe))}Jf(X,i)})}function ra(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Sl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=nt(n,a),m!=null&&c.unshift(ra(n,m,d)),m=nt(n,i),m!=null&&c.push(ra(n,m,d))),n=n.return}return c}function bs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ep(n,i,a,c,d){for(var m=i._reactName,_=[];a!==null&&a!==c;){var I=a,k=I.alternate,B=I.stateNode;if(k!==null&&k===c)break;I.tag===5&&B!==null&&(I=B,d?(k=nt(a,m),k!=null&&_.unshift(ra(a,k,I))):d||(k=nt(a,m),k!=null&&_.push(ra(a,k,I)))),a=a.return}_.length!==0&&n.push({event:i,listeners:_})}var oE=/\r\n?/g,aE=/\u0000|\uFFFD/g;function tp(n){return(typeof n=="string"?n:""+n).replace(oE,`
`).replace(aE,"")}function Rl(n,i,a){if(i=tp(i),tp(n)!==i&&a)throw Error(t(425))}function Cl(){}var Lc=null,Vc=null;function Mc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var bc=typeof setTimeout=="function"?setTimeout:void 0,lE=typeof clearTimeout=="function"?clearTimeout:void 0,np=typeof Promise=="function"?Promise:void 0,uE=typeof queueMicrotask=="function"?queueMicrotask:typeof np<"u"?function(n){return np.resolve(null).then(n).catch(cE)}:bc;function cE(n){setTimeout(function(){throw n})}function Fc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Rn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Rn(i)}function qr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function rp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),$n="__reactFiber$"+Fs,ia="__reactProps$"+Fs,gr="__reactContainer$"+Fs,Uc="__reactEvents$"+Fs,hE="__reactListeners$"+Fs,dE="__reactHandles$"+Fs;function bi(n){var i=n[$n];if(i)return i;for(var a=n.parentNode;a;){if(i=a[gr]||a[$n]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=rp(n);n!==null;){if(a=n[$n])return a;n=rp(n)}return i}n=a,a=n.parentNode}return null}function sa(n){return n=n[$n]||n[gr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Us(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Al(n){return n[ia]||null}var zc=[],zs=-1;function Wr(n){return{current:n}}function qe(n){0>zs||(n.current=zc[zs],zc[zs]=null,zs--)}function $e(n,i){zs++,zc[zs]=n.current,n.current=i}var Kr={},Nt=Wr(Kr),qt=Wr(!1),Fi=Kr;function Bs(n,i){var a=n.type.contextTypes;if(!a)return Kr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Wt(n){return n=n.childContextTypes,n!=null}function kl(){qe(qt),qe(Nt)}function ip(n,i,a){if(Nt.current!==Kr)throw Error(t(168));$e(Nt,i),$e(qt,a)}function sp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Me(n)||"Unknown",d));return se({},a,c)}function Pl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Kr,Fi=Nt.current,$e(Nt,n),$e(qt,qt.current),!0}function op(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=sp(n,i,Fi),c.__reactInternalMemoizedMergedChildContext=n,qe(qt),qe(Nt),$e(Nt,n)):qe(qt),$e(qt,a)}var yr=null,Nl=!1,Bc=!1;function ap(n){yr===null?yr=[n]:yr.push(n)}function fE(n){Nl=!0,ap(n)}function Gr(){if(!Bc&&yr!==null){Bc=!0;var n=0,i=ke;try{var a=yr;for(ke=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}yr=null,Nl=!1}catch(d){throw yr!==null&&(yr=yr.slice(n+1)),Es(Pi,Gr),d}finally{ke=i,Bc=!1}}return null}var js=[],$s=0,xl=null,Dl=0,hn=[],dn=0,Ui=null,vr=1,_r="";function zi(n,i){js[$s++]=Dl,js[$s++]=xl,xl=n,Dl=i}function lp(n,i,a){hn[dn++]=vr,hn[dn++]=_r,hn[dn++]=Ui,Ui=n;var c=vr;n=_r;var d=32-Ft(c)-1;c&=~(1<<d),a+=1;var m=32-Ft(i)+d;if(30<m){var _=d-d%5;m=(c&(1<<_)-1).toString(32),c>>=_,d-=_,vr=1<<32-Ft(i)+d|a<<d|c,_r=m+n}else vr=1<<m|a<<d|c,_r=n}function jc(n){n.return!==null&&(zi(n,1),lp(n,1,0))}function $c(n){for(;n===xl;)xl=js[--$s],js[$s]=null,Dl=js[--$s],js[$s]=null;for(;n===Ui;)Ui=hn[--dn],hn[dn]=null,_r=hn[--dn],hn[dn]=null,vr=hn[--dn],hn[dn]=null}var rn=null,sn=null,Ke=!1,kn=null;function up(n,i){var a=gn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function cp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,rn=n,sn=qr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,rn=n,sn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ui!==null?{id:vr,overflow:_r}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=gn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,rn=n,sn=null,!0):!1;default:return!1}}function Hc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function qc(n){if(Ke){var i=sn;if(i){var a=i;if(!cp(n,i)){if(Hc(n))throw Error(t(418));i=qr(a.nextSibling);var c=rn;i&&cp(n,i)?up(c,a):(n.flags=n.flags&-4097|2,Ke=!1,rn=n)}}else{if(Hc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ke=!1,rn=n}}}function hp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;rn=n}function Ol(n){if(n!==rn)return!1;if(!Ke)return hp(n),Ke=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Mc(n.type,n.memoizedProps)),i&&(i=sn)){if(Hc(n))throw dp(),Error(t(418));for(;i;)up(n,i),i=qr(i.nextSibling)}if(hp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){sn=qr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}sn=null}}else sn=rn?qr(n.stateNode.nextSibling):null;return!0}function dp(){for(var n=sn;n;)n=qr(n.nextSibling)}function Hs(){sn=rn=null,Ke=!1}function Wc(n){kn===null?kn=[n]:kn.push(n)}var pE=re.ReactCurrentBatchConfig;function oa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(_){var I=d.refs;_===null?delete I[m]:I[m]=_},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ll(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function fp(n){var i=n._init;return i(n._payload)}function pp(n){function i(b,x){if(n){var U=b.deletions;U===null?(b.deletions=[x],b.flags|=16):U.push(x)}}function a(b,x){if(!n)return null;for(;x!==null;)i(b,x),x=x.sibling;return null}function c(b,x){for(b=new Map;x!==null;)x.key!==null?b.set(x.key,x):b.set(x.index,x),x=x.sibling;return b}function d(b,x){return b=ni(b,x),b.index=0,b.sibling=null,b}function m(b,x,U){return b.index=U,n?(U=b.alternate,U!==null?(U=U.index,U<x?(b.flags|=2,x):U):(b.flags|=2,x)):(b.flags|=1048576,x)}function _(b){return n&&b.alternate===null&&(b.flags|=2),b}function I(b,x,U,J){return x===null||x.tag!==6?(x=bh(U,b.mode,J),x.return=b,x):(x=d(x,U),x.return=b,x)}function k(b,x,U,J){var ce=U.type;return ce===N?Q(b,x,U.props.children,J,U.key):x!==null&&(x.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===Pt&&fp(ce)===x.type)?(J=d(x,U.props),J.ref=oa(b,x,U),J.return=b,J):(J=iu(U.type,U.key,U.props,null,b.mode,J),J.ref=oa(b,x,U),J.return=b,J)}function B(b,x,U,J){return x===null||x.tag!==4||x.stateNode.containerInfo!==U.containerInfo||x.stateNode.implementation!==U.implementation?(x=Fh(U,b.mode,J),x.return=b,x):(x=d(x,U.children||[]),x.return=b,x)}function Q(b,x,U,J,ce){return x===null||x.tag!==7?(x=Gi(U,b.mode,J,ce),x.return=b,x):(x=d(x,U),x.return=b,x)}function X(b,x,U){if(typeof x=="string"&&x!==""||typeof x=="number")return x=bh(""+x,b.mode,U),x.return=b,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ee:return U=iu(x.type,x.key,x.props,null,b.mode,U),U.ref=oa(b,null,x),U.return=b,U;case ge:return x=Fh(x,b.mode,U),x.return=b,x;case Pt:var J=x._init;return X(b,J(x._payload),U)}if(ar(x)||de(x))return x=Gi(x,b.mode,U,null),x.return=b,x;Ll(b,x)}return null}function G(b,x,U,J){var ce=x!==null?x.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return ce!==null?null:I(b,x,""+U,J);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Ee:return U.key===ce?k(b,x,U,J):null;case ge:return U.key===ce?B(b,x,U,J):null;case Pt:return ce=U._init,G(b,x,ce(U._payload),J)}if(ar(U)||de(U))return ce!==null?null:Q(b,x,U,J,null);Ll(b,U)}return null}function ie(b,x,U,J,ce){if(typeof J=="string"&&J!==""||typeof J=="number")return b=b.get(U)||null,I(x,b,""+J,ce);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case Ee:return b=b.get(J.key===null?U:J.key)||null,k(x,b,J,ce);case ge:return b=b.get(J.key===null?U:J.key)||null,B(x,b,J,ce);case Pt:var fe=J._init;return ie(b,x,U,fe(J._payload),ce)}if(ar(J)||de(J))return b=b.get(U)||null,Q(x,b,J,ce,null);Ll(x,J)}return null}function le(b,x,U,J){for(var ce=null,fe=null,pe=x,ve=x=0,Et=null;pe!==null&&ve<U.length;ve++){pe.index>ve?(Et=pe,pe=null):Et=pe.sibling;var Ve=G(b,pe,U[ve],J);if(Ve===null){pe===null&&(pe=Et);break}n&&pe&&Ve.alternate===null&&i(b,pe),x=m(Ve,x,ve),fe===null?ce=Ve:fe.sibling=Ve,fe=Ve,pe=Et}if(ve===U.length)return a(b,pe),Ke&&zi(b,ve),ce;if(pe===null){for(;ve<U.length;ve++)pe=X(b,U[ve],J),pe!==null&&(x=m(pe,x,ve),fe===null?ce=pe:fe.sibling=pe,fe=pe);return Ke&&zi(b,ve),ce}for(pe=c(b,pe);ve<U.length;ve++)Et=ie(pe,b,ve,U[ve],J),Et!==null&&(n&&Et.alternate!==null&&pe.delete(Et.key===null?ve:Et.key),x=m(Et,x,ve),fe===null?ce=Et:fe.sibling=Et,fe=Et);return n&&pe.forEach(function(ri){return i(b,ri)}),Ke&&zi(b,ve),ce}function ue(b,x,U,J){var ce=de(U);if(typeof ce!="function")throw Error(t(150));if(U=ce.call(U),U==null)throw Error(t(151));for(var fe=ce=null,pe=x,ve=x=0,Et=null,Ve=U.next();pe!==null&&!Ve.done;ve++,Ve=U.next()){pe.index>ve?(Et=pe,pe=null):Et=pe.sibling;var ri=G(b,pe,Ve.value,J);if(ri===null){pe===null&&(pe=Et);break}n&&pe&&ri.alternate===null&&i(b,pe),x=m(ri,x,ve),fe===null?ce=ri:fe.sibling=ri,fe=ri,pe=Et}if(Ve.done)return a(b,pe),Ke&&zi(b,ve),ce;if(pe===null){for(;!Ve.done;ve++,Ve=U.next())Ve=X(b,Ve.value,J),Ve!==null&&(x=m(Ve,x,ve),fe===null?ce=Ve:fe.sibling=Ve,fe=Ve);return Ke&&zi(b,ve),ce}for(pe=c(b,pe);!Ve.done;ve++,Ve=U.next())Ve=ie(pe,b,ve,Ve.value,J),Ve!==null&&(n&&Ve.alternate!==null&&pe.delete(Ve.key===null?ve:Ve.key),x=m(Ve,x,ve),fe===null?ce=Ve:fe.sibling=Ve,fe=Ve);return n&&pe.forEach(function(KE){return i(b,KE)}),Ke&&zi(b,ve),ce}function rt(b,x,U,J){if(typeof U=="object"&&U!==null&&U.type===N&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case Ee:e:{for(var ce=U.key,fe=x;fe!==null;){if(fe.key===ce){if(ce=U.type,ce===N){if(fe.tag===7){a(b,fe.sibling),x=d(fe,U.props.children),x.return=b,b=x;break e}}else if(fe.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===Pt&&fp(ce)===fe.type){a(b,fe.sibling),x=d(fe,U.props),x.ref=oa(b,fe,U),x.return=b,b=x;break e}a(b,fe);break}else i(b,fe);fe=fe.sibling}U.type===N?(x=Gi(U.props.children,b.mode,J,U.key),x.return=b,b=x):(J=iu(U.type,U.key,U.props,null,b.mode,J),J.ref=oa(b,x,U),J.return=b,b=J)}return _(b);case ge:e:{for(fe=U.key;x!==null;){if(x.key===fe)if(x.tag===4&&x.stateNode.containerInfo===U.containerInfo&&x.stateNode.implementation===U.implementation){a(b,x.sibling),x=d(x,U.children||[]),x.return=b,b=x;break e}else{a(b,x);break}else i(b,x);x=x.sibling}x=Fh(U,b.mode,J),x.return=b,b=x}return _(b);case Pt:return fe=U._init,rt(b,x,fe(U._payload),J)}if(ar(U))return le(b,x,U,J);if(de(U))return ue(b,x,U,J);Ll(b,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,x!==null&&x.tag===6?(a(b,x.sibling),x=d(x,U),x.return=b,b=x):(a(b,x),x=bh(U,b.mode,J),x.return=b,b=x),_(b)):a(b,x)}return rt}var qs=pp(!0),mp=pp(!1),Vl=Wr(null),Ml=null,Ws=null,Kc=null;function Gc(){Kc=Ws=Ml=null}function Qc(n){var i=Vl.current;qe(Vl),n._currentValue=i}function Yc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ks(n,i){Ml=n,Kc=Ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Kt=!0),n.firstContext=null)}function fn(n){var i=n._currentValue;if(Kc!==n)if(n={context:n,memoizedValue:i,next:null},Ws===null){if(Ml===null)throw Error(t(308));Ws=n,Ml.dependencies={lanes:0,firstContext:n}}else Ws=Ws.next=n;return i}var Bi=null;function Xc(n){Bi===null?Bi=[n]:Bi.push(n)}function gp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Xc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Er(n,c)}function Er(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Qr=!1;function Jc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function wr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Yr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Oe&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Er(n,a)}return d=c.interleaved,d===null?(i.next=i,Xc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Er(n,a)}function bl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Ur(n,a)}}function vp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=_:m=m.next=_,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Fl(n,i,a,c){var d=n.updateQueue;Qr=!1;var m=d.firstBaseUpdate,_=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var k=I,B=k.next;k.next=null,_===null?m=B:_.next=B,_=k;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,I=Q.lastBaseUpdate,I!==_&&(I===null?Q.firstBaseUpdate=B:I.next=B,Q.lastBaseUpdate=k))}if(m!==null){var X=d.baseState;_=0,Q=B=k=null,I=m;do{var G=I.lane,ie=I.eventTime;if((c&G)===G){Q!==null&&(Q=Q.next={eventTime:ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var le=n,ue=I;switch(G=i,ie=a,ue.tag){case 1:if(le=ue.payload,typeof le=="function"){X=le.call(ie,X,G);break e}X=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ue.payload,G=typeof le=="function"?le.call(ie,X,G):le,G==null)break e;X=se({},X,G);break e;case 2:Qr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[I]:G.push(I))}else ie={eventTime:ie,lane:G,tag:I.tag,payload:I.payload,callback:I.callback,next:null},Q===null?(B=Q=ie,k=X):Q=Q.next=ie,_|=G;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;G=I,I=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(Q===null&&(k=X),d.baseState=k,d.firstBaseUpdate=B,d.lastBaseUpdate=Q,i=d.shared.interleaved,i!==null){d=i;do _|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Hi|=_,n.lanes=_,n.memoizedState=X}}function _p(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var aa={},Hn=Wr(aa),la=Wr(aa),ua=Wr(aa);function ji(n){if(n===aa)throw Error(t(174));return n}function Zc(n,i){switch($e(ua,i),$e(la,n),$e(Hn,aa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ct(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ct(i,n)}qe(Hn),$e(Hn,i)}function Gs(){qe(Hn),qe(la),qe(ua)}function Ep(n){ji(ua.current);var i=ji(Hn.current),a=ct(i,n.type);i!==a&&($e(la,n),$e(Hn,a))}function eh(n){la.current===n&&(qe(Hn),qe(la))}var Ge=Wr(0);function Ul(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var th=[];function nh(){for(var n=0;n<th.length;n++)th[n]._workInProgressVersionPrimary=null;th.length=0}var zl=re.ReactCurrentDispatcher,rh=re.ReactCurrentBatchConfig,$i=0,Qe=null,dt=null,vt=null,Bl=!1,ca=!1,ha=0,mE=0;function xt(){throw Error(t(321))}function ih(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!An(n[a],i[a]))return!1;return!0}function sh(n,i,a,c,d,m){if($i=m,Qe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,zl.current=n===null||n.memoizedState===null?_E:EE,n=a(c,d),ca){m=0;do{if(ca=!1,ha=0,25<=m)throw Error(t(301));m+=1,vt=dt=null,i.updateQueue=null,zl.current=wE,n=a(c,d)}while(ca)}if(zl.current=Hl,i=dt!==null&&dt.next!==null,$i=0,vt=dt=Qe=null,Bl=!1,i)throw Error(t(300));return n}function oh(){var n=ha!==0;return ha=0,n}function qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?Qe.memoizedState=vt=n:vt=vt.next=n,vt}function pn(){if(dt===null){var n=Qe.alternate;n=n!==null?n.memoizedState:null}else n=dt.next;var i=vt===null?Qe.memoizedState:vt.next;if(i!==null)vt=i,dt=n;else{if(n===null)throw Error(t(310));dt=n,n={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},vt===null?Qe.memoizedState=vt=n:vt=vt.next=n}return vt}function da(n,i){return typeof i=="function"?i(n):i}function ah(n){var i=pn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=dt,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var _=d.next;d.next=m.next,m.next=_}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var I=_=null,k=null,B=m;do{var Q=B.lane;if(($i&Q)===Q)k!==null&&(k=k.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),c=B.hasEagerState?B.eagerState:n(c,B.action);else{var X={lane:Q,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};k===null?(I=k=X,_=c):k=k.next=X,Qe.lanes|=Q,Hi|=Q}B=B.next}while(B!==null&&B!==m);k===null?_=c:k.next=I,An(c,i.memoizedState)||(Kt=!0),i.memoizedState=c,i.baseState=_,i.baseQueue=k,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Qe.lanes|=m,Hi|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function lh(n){var i=pn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do m=n(m,_.action),_=_.next;while(_!==d);An(m,i.memoizedState)||(Kt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function wp(){}function Tp(n,i){var a=Qe,c=pn(),d=i(),m=!An(c.memoizedState,d);if(m&&(c.memoizedState=d,Kt=!0),c=c.queue,uh(Rp.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||vt!==null&&vt.memoizedState.tag&1){if(a.flags|=2048,fa(9,Sp.bind(null,a,c,d,i),void 0,null),_t===null)throw Error(t(349));($i&30)!==0||Ip(a,i,d)}return d}function Ip(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Qe.updateQueue,i===null?(i={lastEffect:null,stores:null},Qe.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Sp(n,i,a,c){i.value=a,i.getSnapshot=c,Cp(i)&&Ap(n)}function Rp(n,i,a){return a(function(){Cp(i)&&Ap(n)})}function Cp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!An(n,a)}catch{return!0}}function Ap(n){var i=Er(n,1);i!==null&&Dn(i,n,1,-1)}function kp(n){var i=qn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:n},i.queue=n,n=n.dispatch=vE.bind(null,Qe,n),[i.memoizedState,n]}function fa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Qe.updateQueue,i===null?(i={lastEffect:null,stores:null},Qe.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Pp(){return pn().memoizedState}function jl(n,i,a,c){var d=qn();Qe.flags|=n,d.memoizedState=fa(1|i,a,void 0,c===void 0?null:c)}function $l(n,i,a,c){var d=pn();c=c===void 0?null:c;var m=void 0;if(dt!==null){var _=dt.memoizedState;if(m=_.destroy,c!==null&&ih(c,_.deps)){d.memoizedState=fa(i,a,m,c);return}}Qe.flags|=n,d.memoizedState=fa(1|i,a,m,c)}function Np(n,i){return jl(8390656,8,n,i)}function uh(n,i){return $l(2048,8,n,i)}function xp(n,i){return $l(4,2,n,i)}function Dp(n,i){return $l(4,4,n,i)}function Op(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Lp(n,i,a){return a=a!=null?a.concat([n]):null,$l(4,4,Op.bind(null,i,n),a)}function ch(){}function Vp(n,i){var a=pn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ih(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Mp(n,i){var a=pn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ih(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function bp(n,i,a){return($i&21)===0?(n.baseState&&(n.baseState=!1,Kt=!0),n.memoizedState=a):(An(a,i)||(a=Di(),Qe.lanes|=a,Hi|=a,n.baseState=!0),i)}function gE(n,i){var a=ke;ke=a!==0&&4>a?a:4,n(!0);var c=rh.transition;rh.transition={};try{n(!1),i()}finally{ke=a,rh.transition=c}}function Fp(){return pn().memoizedState}function yE(n,i,a){var c=ei(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Up(n))zp(i,a);else if(a=gp(n,i,a,c),a!==null){var d=Bt();Dn(a,n,c,d),Bp(a,i,c)}}function vE(n,i,a){var c=ei(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Up(n))zp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var _=i.lastRenderedState,I=m(_,a);if(d.hasEagerState=!0,d.eagerState=I,An(I,_)){var k=i.interleaved;k===null?(d.next=d,Xc(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}a=gp(n,i,d,c),a!==null&&(d=Bt(),Dn(a,n,c,d),Bp(a,i,c))}}function Up(n){var i=n.alternate;return n===Qe||i!==null&&i===Qe}function zp(n,i){ca=Bl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Bp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Ur(n,a)}}var Hl={readContext:fn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},_E={readContext:fn,useCallback:function(n,i){return qn().memoizedState=[n,i===void 0?null:i],n},useContext:fn,useEffect:Np,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,jl(4194308,4,Op.bind(null,i,n),a)},useLayoutEffect:function(n,i){return jl(4194308,4,n,i)},useInsertionEffect:function(n,i){return jl(4,2,n,i)},useMemo:function(n,i){var a=qn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=qn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=yE.bind(null,Qe,n),[c.memoizedState,n]},useRef:function(n){var i=qn();return n={current:n},i.memoizedState=n},useState:kp,useDebugValue:ch,useDeferredValue:function(n){return qn().memoizedState=n},useTransition:function(){var n=kp(!1),i=n[0];return n=gE.bind(null,n[1]),qn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Qe,d=qn();if(Ke){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),_t===null)throw Error(t(349));($i&30)!==0||Ip(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Np(Rp.bind(null,c,m,n),[n]),c.flags|=2048,fa(9,Sp.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=qn(),i=_t.identifierPrefix;if(Ke){var a=_r,c=vr;a=(c&~(1<<32-Ft(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=ha++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=mE++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},EE={readContext:fn,useCallback:Vp,useContext:fn,useEffect:uh,useImperativeHandle:Lp,useInsertionEffect:xp,useLayoutEffect:Dp,useMemo:Mp,useReducer:ah,useRef:Pp,useState:function(){return ah(da)},useDebugValue:ch,useDeferredValue:function(n){var i=pn();return bp(i,dt.memoizedState,n)},useTransition:function(){var n=ah(da)[0],i=pn().memoizedState;return[n,i]},useMutableSource:wp,useSyncExternalStore:Tp,useId:Fp,unstable_isNewReconciler:!1},wE={readContext:fn,useCallback:Vp,useContext:fn,useEffect:uh,useImperativeHandle:Lp,useInsertionEffect:xp,useLayoutEffect:Dp,useMemo:Mp,useReducer:lh,useRef:Pp,useState:function(){return lh(da)},useDebugValue:ch,useDeferredValue:function(n){var i=pn();return dt===null?i.memoizedState=n:bp(i,dt.memoizedState,n)},useTransition:function(){var n=lh(da)[0],i=pn().memoizedState;return[n,i]},useMutableSource:wp,useSyncExternalStore:Tp,useId:Fp,unstable_isNewReconciler:!1};function Pn(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function hh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:se({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ql={isMounted:function(n){return(n=n._reactInternals)?En(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Bt(),d=ei(n),m=wr(c,d);m.payload=i,a!=null&&(m.callback=a),i=Yr(n,m,d),i!==null&&(Dn(i,n,d,c),bl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Bt(),d=ei(n),m=wr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Yr(n,m,d),i!==null&&(Dn(i,n,d,c),bl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Bt(),c=ei(n),d=wr(a,c);d.tag=2,i!=null&&(d.callback=i),i=Yr(n,d,c),i!==null&&(Dn(i,n,c,a),bl(i,n,c))}};function jp(n,i,a,c,d,m,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,_):i.prototype&&i.prototype.isPureReactComponent?!Zo(a,c)||!Zo(d,m):!0}function $p(n,i,a){var c=!1,d=Kr,m=i.contextType;return typeof m=="object"&&m!==null?m=fn(m):(d=Wt(i)?Fi:Nt.current,c=i.contextTypes,m=(c=c!=null)?Bs(n,d):Kr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ql,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Hp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&ql.enqueueReplaceState(i,i.state,null)}function dh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Jc(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=fn(m):(m=Wt(i)?Fi:Nt.current,d.context=Bs(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(hh(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ql.enqueueReplaceState(d,d.state,null),Fl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Qs(n,i){try{var a="",c=i;do a+=Se(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function fh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function ph(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var TE=typeof WeakMap=="function"?WeakMap:Map;function qp(n,i,a){a=wr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Jl||(Jl=!0,Ph=c),ph(n,i)},a}function Wp(n,i,a){a=wr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){ph(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){ph(n,i),typeof c!="function"&&(Jr===null?Jr=new Set([this]):Jr.add(this));var _=i.stack;this.componentDidCatch(i.value,{componentStack:_!==null?_:""})}),a}function Kp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new TE;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=ME.bind(null,n,i,a),i.then(n,n))}function Gp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Qp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=wr(-1,1),i.tag=2,Yr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var IE=re.ReactCurrentOwner,Kt=!1;function zt(n,i,a,c){i.child=n===null?mp(i,null,a,c):qs(i,n.child,a,c)}function Yp(n,i,a,c,d){a=a.render;var m=i.ref;return Ks(i,d),c=sh(n,i,a,c,m,d),a=oh(),n!==null&&!Kt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Tr(n,i,d)):(Ke&&a&&jc(i),i.flags|=1,zt(n,i,c,d),i.child)}function Xp(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Mh(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Jp(n,i,m,c,d)):(n=iu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var _=m.memoizedProps;if(a=a.compare,a=a!==null?a:Zo,a(_,c)&&n.ref===i.ref)return Tr(n,i,d)}return i.flags|=1,n=ni(m,c),n.ref=i.ref,n.return=i,i.child=n}function Jp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(Zo(m,c)&&n.ref===i.ref)if(Kt=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Kt=!0);else return i.lanes=n.lanes,Tr(n,i,d)}return mh(n,i,a,c,d)}function Zp(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(Xs,on),on|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,$e(Xs,on),on|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,$e(Xs,on),on|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,$e(Xs,on),on|=c;return zt(n,i,d,a),i.child}function em(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function mh(n,i,a,c,d){var m=Wt(a)?Fi:Nt.current;return m=Bs(i,m),Ks(i,d),a=sh(n,i,a,c,m,d),c=oh(),n!==null&&!Kt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Tr(n,i,d)):(Ke&&c&&jc(i),i.flags|=1,zt(n,i,a,d),i.child)}function tm(n,i,a,c,d){if(Wt(a)){var m=!0;Pl(i)}else m=!1;if(Ks(i,d),i.stateNode===null)Kl(n,i),$p(i,a,c),dh(i,a,c,d),c=!0;else if(n===null){var _=i.stateNode,I=i.memoizedProps;_.props=I;var k=_.context,B=a.contextType;typeof B=="object"&&B!==null?B=fn(B):(B=Wt(a)?Fi:Nt.current,B=Bs(i,B));var Q=a.getDerivedStateFromProps,X=typeof Q=="function"||typeof _.getSnapshotBeforeUpdate=="function";X||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==c||k!==B)&&Hp(i,_,c,B),Qr=!1;var G=i.memoizedState;_.state=G,Fl(i,c,_,d),k=i.memoizedState,I!==c||G!==k||qt.current||Qr?(typeof Q=="function"&&(hh(i,a,Q,c),k=i.memoizedState),(I=Qr||jp(i,a,I,c,G,k,B))?(X||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(i.flags|=4194308)):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=k),_.props=c,_.state=k,_.context=B,c=I):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{_=i.stateNode,yp(n,i),I=i.memoizedProps,B=i.type===i.elementType?I:Pn(i.type,I),_.props=B,X=i.pendingProps,G=_.context,k=a.contextType,typeof k=="object"&&k!==null?k=fn(k):(k=Wt(a)?Fi:Nt.current,k=Bs(i,k));var ie=a.getDerivedStateFromProps;(Q=typeof ie=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==X||G!==k)&&Hp(i,_,c,k),Qr=!1,G=i.memoizedState,_.state=G,Fl(i,c,_,d);var le=i.memoizedState;I!==X||G!==le||qt.current||Qr?(typeof ie=="function"&&(hh(i,a,ie,c),le=i.memoizedState),(B=Qr||jp(i,a,B,c,G,le,k)||!1)?(Q||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,le,k),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,le,k)),typeof _.componentDidUpdate=="function"&&(i.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=le),_.props=c,_.state=le,_.context=k,c=B):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),c=!1)}return gh(n,i,a,c,m,d)}function gh(n,i,a,c,d,m){em(n,i);var _=(i.flags&128)!==0;if(!c&&!_)return d&&op(i,a,!1),Tr(n,i,m);c=i.stateNode,IE.current=i;var I=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&_?(i.child=qs(i,n.child,null,m),i.child=qs(i,null,I,m)):zt(n,i,I,m),i.memoizedState=c.state,d&&op(i,a,!0),i.child}function nm(n){var i=n.stateNode;i.pendingContext?ip(n,i.pendingContext,i.pendingContext!==i.context):i.context&&ip(n,i.context,!1),Zc(n,i.containerInfo)}function rm(n,i,a,c,d){return Hs(),Wc(d),i.flags|=256,zt(n,i,a,c),i.child}var yh={dehydrated:null,treeContext:null,retryLane:0};function vh(n){return{baseLanes:n,cachePool:null,transitions:null}}function im(n,i,a){var c=i.pendingProps,d=Ge.current,m=!1,_=(i.flags&128)!==0,I;if((I=_)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),$e(Ge,d&1),n===null)return qc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(_=c.children,n=c.fallback,m?(c=i.mode,m=i.child,_={mode:"hidden",children:_},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=_):m=su(_,c,0,null),n=Gi(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=vh(a),i.memoizedState=yh,n):_h(i,_));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return SE(n,i,_,c,I,d,a);if(m){m=c.fallback,_=i.mode,d=n.child,I=d.sibling;var k={mode:"hidden",children:c.children};return(_&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=k,i.deletions=null):(c=ni(d,k),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=ni(I,m):(m=Gi(m,_,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,_=n.child.memoizedState,_=_===null?vh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},m.memoizedState=_,m.childLanes=n.childLanes&~a,i.memoizedState=yh,c}return m=n.child,n=m.sibling,c=ni(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function _h(n,i){return i=su({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Wl(n,i,a,c){return c!==null&&Wc(c),qs(i,n.child,null,a),n=_h(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function SE(n,i,a,c,d,m,_){if(a)return i.flags&256?(i.flags&=-257,c=fh(Error(t(422))),Wl(n,i,_,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=su({mode:"visible",children:c.children},d,0,null),m=Gi(m,d,_,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&qs(i,n.child,null,_),i.child.memoizedState=vh(_),i.memoizedState=yh,m);if((i.mode&1)===0)return Wl(n,i,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,m=Error(t(419)),c=fh(m,c,void 0),Wl(n,i,_,c)}if(I=(_&n.childLanes)!==0,Kt||I){if(c=_t,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Er(n,d),Dn(c,n,d,-1))}return Vh(),c=fh(Error(t(421))),Wl(n,i,_,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=bE.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,sn=qr(d.nextSibling),rn=i,Ke=!0,kn=null,n!==null&&(hn[dn++]=vr,hn[dn++]=_r,hn[dn++]=Ui,vr=n.id,_r=n.overflow,Ui=i),i=_h(i,c.children),i.flags|=4096,i)}function sm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Yc(n.return,i,a)}function Eh(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function om(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(zt(n,i,c.children,a),c=Ge.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&sm(n,a,i);else if(n.tag===19)sm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if($e(Ge,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Ul(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Eh(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Ul(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Eh(i,!0,a,null,m);break;case"together":Eh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Kl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Tr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Hi|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=ni(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ni(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function RE(n,i,a){switch(i.tag){case 3:nm(i),Hs();break;case 5:Ep(i);break;case 1:Wt(i.type)&&Pl(i);break;case 4:Zc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;$e(Vl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?($e(Ge,Ge.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?im(n,i,a):($e(Ge,Ge.current&1),n=Tr(n,i,a),n!==null?n.sibling:null);$e(Ge,Ge.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return om(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),$e(Ge,Ge.current),c)break;return null;case 22:case 23:return i.lanes=0,Zp(n,i,a)}return Tr(n,i,a)}var am,wh,lm,um;am=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},wh=function(){},lm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,ji(Hn.current);var m=null;switch(a){case"input":d=wi(n,d),c=wi(n,c),m=[];break;case"select":d=se({},d,{value:void 0}),c=se({},c,{value:void 0}),m=[];break;case"textarea":d=ko(n,d),c=ko(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Cl)}Lo(a,c);var _;a=null;for(B in d)if(!c.hasOwnProperty(B)&&d.hasOwnProperty(B)&&d[B]!=null)if(B==="style"){var I=d[B];for(_ in I)I.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(o.hasOwnProperty(B)?m||(m=[]):(m=m||[]).push(B,null));for(B in c){var k=c[B];if(I=d!=null?d[B]:void 0,c.hasOwnProperty(B)&&k!==I&&(k!=null||I!=null))if(B==="style")if(I){for(_ in I)!I.hasOwnProperty(_)||k&&k.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in k)k.hasOwnProperty(_)&&I[_]!==k[_]&&(a||(a={}),a[_]=k[_])}else a||(m||(m=[]),m.push(B,a)),a=k;else B==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,I=I?I.__html:void 0,k!=null&&I!==k&&(m=m||[]).push(B,k)):B==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(B,""+k):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(o.hasOwnProperty(B)?(k!=null&&B==="onScroll"&&He("scroll",n),m||I===k||(m=[])):(m=m||[]).push(B,k))}a&&(m=m||[]).push("style",a);var B=m;(i.updateQueue=B)&&(i.flags|=4)}},um=function(n,i,a,c){a!==c&&(i.flags|=4)};function pa(n,i){if(!Ke)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Dt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function CE(n,i,a){var c=i.pendingProps;switch($c(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(i),null;case 1:return Wt(i.type)&&kl(),Dt(i),null;case 3:return c=i.stateNode,Gs(),qe(qt),qe(Nt),nh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ol(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,kn!==null&&(Dh(kn),kn=null))),wh(n,i),Dt(i),null;case 5:eh(i);var d=ji(ua.current);if(a=i.type,n!==null&&i.stateNode!=null)lm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Dt(i),null}if(n=ji(Hn.current),Ol(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[$n]=i,c[ia]=m,n=(i.mode&1)!==0,a){case"dialog":He("cancel",c),He("close",c);break;case"iframe":case"object":case"embed":He("load",c);break;case"video":case"audio":for(d=0;d<ta.length;d++)He(ta[d],c);break;case"source":He("error",c);break;case"img":case"image":case"link":He("error",c),He("load",c);break;case"details":He("toggle",c);break;case"input":us(c,m),He("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},He("invalid",c);break;case"textarea":hs(c,m),He("invalid",c)}Lo(a,m),d=null;for(var _ in m)if(m.hasOwnProperty(_)){var I=m[_];_==="children"?typeof I=="string"?c.textContent!==I&&(m.suppressHydrationWarning!==!0&&Rl(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&Rl(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(_)&&I!=null&&_==="onScroll"&&He("scroll",c)}switch(a){case"input":or(c),Xa(c,m,!0);break;case"textarea":or(c),Po(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Cl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ut(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[$n]=i,n[ia]=c,am(n,i,!1,!1),i.stateNode=n;e:{switch(_=Vo(a,c),a){case"dialog":He("cancel",n),He("close",n),d=c;break;case"iframe":case"object":case"embed":He("load",n),d=c;break;case"video":case"audio":for(d=0;d<ta.length;d++)He(ta[d],n);d=c;break;case"source":He("error",n),d=c;break;case"img":case"image":case"link":He("error",n),He("load",n),d=c;break;case"details":He("toggle",n),d=c;break;case"input":us(n,c),d=wi(n,c),He("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=se({},c,{value:void 0}),He("invalid",n);break;case"textarea":hs(n,c),d=ko(n,c),He("invalid",n);break;default:d=c}Lo(a,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var k=I[m];m==="style"?Do(n,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&No(n,k)):m==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Lr(n,k):typeof k=="number"&&Lr(n,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?k!=null&&m==="onScroll"&&He("scroll",n):k!=null&&Y(n,m,k,_))}switch(a){case"input":or(n),Xa(n,c,!1);break;case"textarea":or(n),Po(n);break;case"option":c.value!=null&&n.setAttribute("value",""+be(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?lr(n,!!c.multiple,m,!1):c.defaultValue!=null&&lr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Cl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Dt(i),null;case 6:if(n&&i.stateNode!=null)um(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=ji(ua.current),ji(Hn.current),Ol(i)){if(c=i.stateNode,a=i.memoizedProps,c[$n]=i,(m=c.nodeValue!==a)&&(n=rn,n!==null))switch(n.tag){case 3:Rl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Rl(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[$n]=i,i.stateNode=c}return Dt(i),null;case 13:if(qe(Ge),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ke&&sn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)dp(),Hs(),i.flags|=98560,m=!1;else if(m=Ol(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[$n]=i}else Hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Dt(i),m=!1}else kn!==null&&(Dh(kn),kn=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ge.current&1)!==0?ft===0&&(ft=3):Vh())),i.updateQueue!==null&&(i.flags|=4),Dt(i),null);case 4:return Gs(),wh(n,i),n===null&&na(i.stateNode.containerInfo),Dt(i),null;case 10:return Qc(i.type._context),Dt(i),null;case 17:return Wt(i.type)&&kl(),Dt(i),null;case 19:if(qe(Ge),m=i.memoizedState,m===null)return Dt(i),null;if(c=(i.flags&128)!==0,_=m.rendering,_===null)if(c)pa(m,!1);else{if(ft!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(_=Ul(n),_!==null){for(i.flags|=128,pa(m,!1),c=_.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,_=m.alternate,_===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=_.childLanes,m.lanes=_.lanes,m.child=_.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=_.memoizedProps,m.memoizedState=_.memoizedState,m.updateQueue=_.updateQueue,m.type=_.type,n=_.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return $e(Ge,Ge.current&1|2),i.child}n=n.sibling}m.tail!==null&&je()>Js&&(i.flags|=128,c=!0,pa(m,!1),i.lanes=4194304)}else{if(!c)if(n=Ul(_),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),pa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!_.alternate&&!Ke)return Dt(i),null}else 2*je()-m.renderingStartTime>Js&&a!==1073741824&&(i.flags|=128,c=!0,pa(m,!1),i.lanes=4194304);m.isBackwards?(_.sibling=i.child,i.child=_):(a=m.last,a!==null?a.sibling=_:i.child=_,m.last=_)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=je(),i.sibling=null,a=Ge.current,$e(Ge,c?a&1|2:a&1),i):(Dt(i),null);case 22:case 23:return Lh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(on&1073741824)!==0&&(Dt(i),i.subtreeFlags&6&&(i.flags|=8192)):Dt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function AE(n,i){switch($c(i),i.tag){case 1:return Wt(i.type)&&kl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Gs(),qe(qt),qe(Nt),nh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return eh(i),null;case 13:if(qe(Ge),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Hs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return qe(Ge),null;case 4:return Gs(),null;case 10:return Qc(i.type._context),null;case 22:case 23:return Lh(),null;case 24:return null;default:return null}}var Gl=!1,Ot=!1,kE=typeof WeakSet=="function"?WeakSet:Set,ae=null;function Ys(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Ze(n,i,c)}else a.current=null}function Th(n,i,a){try{a()}catch(c){Ze(n,i,c)}}var cm=!1;function PE(n,i){if(Lc=jr,n=jf(),Cc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var _=0,I=-1,k=-1,B=0,Q=0,X=n,G=null;t:for(;;){for(var ie;X!==a||d!==0&&X.nodeType!==3||(I=_+d),X!==m||c!==0&&X.nodeType!==3||(k=_+c),X.nodeType===3&&(_+=X.nodeValue.length),(ie=X.firstChild)!==null;)G=X,X=ie;for(;;){if(X===n)break t;if(G===a&&++B===d&&(I=_),G===m&&++Q===c&&(k=_),(ie=X.nextSibling)!==null)break;X=G,G=X.parentNode}X=ie}a=I===-1||k===-1?null:{start:I,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vc={focusedElem:n,selectionRange:a},jr=!1,ae=i;ae!==null;)if(i=ae,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ae=n;else for(;ae!==null;){i=ae;try{var le=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var ue=le.memoizedProps,rt=le.memoizedState,b=i.stateNode,x=b.getSnapshotBeforeUpdate(i.elementType===i.type?ue:Pn(i.type,ue),rt);b.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var U=i.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){Ze(i,i.return,J)}if(n=i.sibling,n!==null){n.return=i.return,ae=n;break}ae=i.return}return le=cm,cm=!1,le}function ma(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Th(i,a,m)}d=d.next}while(d!==c)}}function Ql(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Ih(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function hm(n){var i=n.alternate;i!==null&&(n.alternate=null,hm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[$n],delete i[ia],delete i[Uc],delete i[hE],delete i[dE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function dm(n){return n.tag===5||n.tag===3||n.tag===4}function fm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||dm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Sh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Cl));else if(c!==4&&(n=n.child,n!==null))for(Sh(n,i,a),n=n.sibling;n!==null;)Sh(n,i,a),n=n.sibling}function Rh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Rh(n,i,a),n=n.sibling;n!==null;)Rh(n,i,a),n=n.sibling}var St=null,Nn=!1;function Xr(n,i,a){for(a=a.child;a!==null;)pm(n,i,a),a=a.sibling}function pm(n,i,a){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Ni,a)}catch{}switch(a.tag){case 5:Ot||Ys(a,i);case 6:var c=St,d=Nn;St=null,Xr(n,i,a),St=c,Nn=d,St!==null&&(Nn?(n=St,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):St.removeChild(a.stateNode));break;case 18:St!==null&&(Nn?(n=St,a=a.stateNode,n.nodeType===8?Fc(n.parentNode,a):n.nodeType===1&&Fc(n,a),Rn(n)):Fc(St,a.stateNode));break;case 4:c=St,d=Nn,St=a.stateNode.containerInfo,Nn=!0,Xr(n,i,a),St=c,Nn=d;break;case 0:case 11:case 14:case 15:if(!Ot&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,_=m.destroy;m=m.tag,_!==void 0&&((m&2)!==0||(m&4)!==0)&&Th(a,i,_),d=d.next}while(d!==c)}Xr(n,i,a);break;case 1:if(!Ot&&(Ys(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){Ze(a,i,I)}Xr(n,i,a);break;case 21:Xr(n,i,a);break;case 22:a.mode&1?(Ot=(c=Ot)||a.memoizedState!==null,Xr(n,i,a),Ot=c):Xr(n,i,a);break;default:Xr(n,i,a)}}function mm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new kE),i.forEach(function(c){var d=FE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function xn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,_=i,I=_;e:for(;I!==null;){switch(I.tag){case 5:St=I.stateNode,Nn=!1;break e;case 3:St=I.stateNode.containerInfo,Nn=!0;break e;case 4:St=I.stateNode.containerInfo,Nn=!0;break e}I=I.return}if(St===null)throw Error(t(160));pm(m,_,d),St=null,Nn=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(B){Ze(d,i,B)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)gm(i,n),i=i.sibling}function gm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(xn(i,n),Wn(n),c&4){try{ma(3,n,n.return),Ql(3,n)}catch(ue){Ze(n,n.return,ue)}try{ma(5,n,n.return)}catch(ue){Ze(n,n.return,ue)}}break;case 1:xn(i,n),Wn(n),c&512&&a!==null&&Ys(a,a.return);break;case 5:if(xn(i,n),Wn(n),c&512&&a!==null&&Ys(a,a.return),n.flags&32){var d=n.stateNode;try{Lr(d,"")}catch(ue){Ze(n,n.return,ue)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,_=a!==null?a.memoizedProps:m,I=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&Co(d,m),Vo(I,_);var B=Vo(I,m);for(_=0;_<k.length;_+=2){var Q=k[_],X=k[_+1];Q==="style"?Do(d,X):Q==="dangerouslySetInnerHTML"?No(d,X):Q==="children"?Lr(d,X):Y(d,Q,X,B)}switch(I){case"input":Ao(d,m);break;case"textarea":ds(d,m);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ie=m.value;ie!=null?lr(d,!!m.multiple,ie,!1):G!==!!m.multiple&&(m.defaultValue!=null?lr(d,!!m.multiple,m.defaultValue,!0):lr(d,!!m.multiple,m.multiple?[]:"",!1))}d[ia]=m}catch(ue){Ze(n,n.return,ue)}}break;case 6:if(xn(i,n),Wn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(ue){Ze(n,n.return,ue)}}break;case 3:if(xn(i,n),Wn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Rn(i.containerInfo)}catch(ue){Ze(n,n.return,ue)}break;case 4:xn(i,n),Wn(n);break;case 13:xn(i,n),Wn(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(kh=je())),c&4&&mm(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(Ot=(B=Ot)||Q,xn(i,n),Ot=B):xn(i,n),Wn(n),c&8192){if(B=n.memoizedState!==null,(n.stateNode.isHidden=B)&&!Q&&(n.mode&1)!==0)for(ae=n,Q=n.child;Q!==null;){for(X=ae=Q;ae!==null;){switch(G=ae,ie=G.child,G.tag){case 0:case 11:case 14:case 15:ma(4,G,G.return);break;case 1:Ys(G,G.return);var le=G.stateNode;if(typeof le.componentWillUnmount=="function"){c=G,a=G.return;try{i=c,le.props=i.memoizedProps,le.state=i.memoizedState,le.componentWillUnmount()}catch(ue){Ze(c,a,ue)}}break;case 5:Ys(G,G.return);break;case 22:if(G.memoizedState!==null){_m(X);continue}}ie!==null?(ie.return=G,ae=ie):_m(X)}Q=Q.sibling}e:for(Q=null,X=n;;){if(X.tag===5){if(Q===null){Q=X;try{d=X.stateNode,B?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=X.stateNode,k=X.memoizedProps.style,_=k!=null&&k.hasOwnProperty("display")?k.display:null,I.style.display=xo("display",_))}catch(ue){Ze(n,n.return,ue)}}}else if(X.tag===6){if(Q===null)try{X.stateNode.nodeValue=B?"":X.memoizedProps}catch(ue){Ze(n,n.return,ue)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===n)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===n)break e;for(;X.sibling===null;){if(X.return===null||X.return===n)break e;Q===X&&(Q=null),X=X.return}Q===X&&(Q=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:xn(i,n),Wn(n),c&4&&mm(n);break;case 21:break;default:xn(i,n),Wn(n)}}function Wn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(dm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Lr(d,""),c.flags&=-33);var m=fm(n);Rh(n,m,d);break;case 3:case 4:var _=c.stateNode.containerInfo,I=fm(n);Sh(n,I,_);break;default:throw Error(t(161))}}catch(k){Ze(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function NE(n,i,a){ae=n,ym(n)}function ym(n,i,a){for(var c=(n.mode&1)!==0;ae!==null;){var d=ae,m=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||Gl;if(!_){var I=d.alternate,k=I!==null&&I.memoizedState!==null||Ot;I=Gl;var B=Ot;if(Gl=_,(Ot=k)&&!B)for(ae=d;ae!==null;)_=ae,k=_.child,_.tag===22&&_.memoizedState!==null?Em(d):k!==null?(k.return=_,ae=k):Em(d);for(;m!==null;)ae=m,ym(m),m=m.sibling;ae=d,Gl=I,Ot=B}vm(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,ae=m):vm(n)}}function vm(n){for(;ae!==null;){var i=ae;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Ot||Ql(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Ot)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Pn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&_p(i,m,c);break;case 3:var _=i.updateQueue;if(_!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}_p(i,_,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var B=i.alternate;if(B!==null){var Q=B.memoizedState;if(Q!==null){var X=Q.dehydrated;X!==null&&Rn(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ot||i.flags&512&&Ih(i)}catch(G){Ze(i,i.return,G)}}if(i===n){ae=null;break}if(a=i.sibling,a!==null){a.return=i.return,ae=a;break}ae=i.return}}function _m(n){for(;ae!==null;){var i=ae;if(i===n){ae=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ae=a;break}ae=i.return}}function Em(n){for(;ae!==null;){var i=ae;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ql(4,i)}catch(k){Ze(i,a,k)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(k){Ze(i,d,k)}}var m=i.return;try{Ih(i)}catch(k){Ze(i,m,k)}break;case 5:var _=i.return;try{Ih(i)}catch(k){Ze(i,_,k)}}}catch(k){Ze(i,i.return,k)}if(i===n){ae=null;break}var I=i.sibling;if(I!==null){I.return=i.return,ae=I;break}ae=i.return}}var xE=Math.ceil,Yl=re.ReactCurrentDispatcher,Ch=re.ReactCurrentOwner,mn=re.ReactCurrentBatchConfig,Oe=0,_t=null,at=null,Rt=0,on=0,Xs=Wr(0),ft=0,ga=null,Hi=0,Xl=0,Ah=0,ya=null,Gt=null,kh=0,Js=1/0,Ir=null,Jl=!1,Ph=null,Jr=null,Zl=!1,Zr=null,eu=0,va=0,Nh=null,tu=-1,nu=0;function Bt(){return(Oe&6)!==0?je():tu!==-1?tu:tu=je()}function ei(n){return(n.mode&1)===0?1:(Oe&2)!==0&&Rt!==0?Rt&-Rt:pE.transition!==null?(nu===0&&(nu=Di()),nu):(n=ke,n!==0||(n=window.event,n=n===void 0?16:Wo(n.type)),n)}function Dn(n,i,a,c){if(50<va)throw va=0,Nh=null,Error(t(185));Fr(n,a,c),((Oe&2)===0||n!==_t)&&(n===_t&&((Oe&2)===0&&(Xl|=a),ft===4&&ti(n,Rt)),Qt(n,c),a===1&&Oe===0&&(i.mode&1)===0&&(Js=je()+500,Nl&&Gr()))}function Qt(n,i){var a=n.callbackNode;hr(n,i);var c=xi(n,n===_t?Rt:0);if(c===0)a!==null&&Bo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Bo(a),i===1)n.tag===0?fE(Tm.bind(null,n)):ap(Tm.bind(null,n)),uE(function(){(Oe&6)===0&&Gr()}),a=null;else{switch(zr(c)){case 1:a=Pi;break;case 4:a=Vr;break;case 16:a=ln;break;case 536870912:a=nl;break;default:a=ln}a=Nm(a,wm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function wm(n,i){if(tu=-1,nu=0,(Oe&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Zs()&&n.callbackNode!==a)return null;var c=xi(n,n===_t?Rt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=ru(n,c);else{i=c;var d=Oe;Oe|=2;var m=Sm();(_t!==n||Rt!==i)&&(Ir=null,Js=je()+500,Wi(n,i));do try{LE();break}catch(I){Im(n,I)}while(!0);Gc(),Yl.current=m,Oe=d,at!==null?i=0:(_t=null,Rt=0,i=ft)}if(i!==0){if(i===2&&(d=en(n),d!==0&&(c=d,i=xh(n,d))),i===1)throw a=ga,Wi(n,0),ti(n,c),Qt(n,je()),a;if(i===6)ti(n,c);else{if(d=n.current.alternate,(c&30)===0&&!DE(d)&&(i=ru(n,c),i===2&&(m=en(n),m!==0&&(c=m,i=xh(n,m))),i===1))throw a=ga,Wi(n,0),ti(n,c),Qt(n,je()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Ki(n,Gt,Ir);break;case 3:if(ti(n,c),(c&130023424)===c&&(i=kh+500-je(),10<i)){if(xi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Bt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=bc(Ki.bind(null,n,Gt,Ir),i);break}Ki(n,Gt,Ir);break;case 4:if(ti(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var _=31-Ft(c);m=1<<_,_=i[_],_>d&&(d=_),c&=~m}if(c=d,c=je()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*xE(c/1960))-c,10<c){n.timeoutHandle=bc(Ki.bind(null,n,Gt,Ir),c);break}Ki(n,Gt,Ir);break;case 5:Ki(n,Gt,Ir);break;default:throw Error(t(329))}}}return Qt(n,je()),n.callbackNode===a?wm.bind(null,n):null}function xh(n,i){var a=ya;return n.current.memoizedState.isDehydrated&&(Wi(n,i).flags|=256),n=ru(n,i),n!==2&&(i=Gt,Gt=a,i!==null&&Dh(i)),n}function Dh(n){Gt===null?Gt=n:Gt.push.apply(Gt,n)}function DE(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!An(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ti(n,i){for(i&=~Ah,i&=~Xl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ft(i),c=1<<a;n[a]=-1,i&=~c}}function Tm(n){if((Oe&6)!==0)throw Error(t(327));Zs();var i=xi(n,0);if((i&1)===0)return Qt(n,je()),null;var a=ru(n,i);if(n.tag!==0&&a===2){var c=en(n);c!==0&&(i=c,a=xh(n,c))}if(a===1)throw a=ga,Wi(n,0),ti(n,i),Qt(n,je()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Ki(n,Gt,Ir),Qt(n,je()),null}function Oh(n,i){var a=Oe;Oe|=1;try{return n(i)}finally{Oe=a,Oe===0&&(Js=je()+500,Nl&&Gr())}}function qi(n){Zr!==null&&Zr.tag===0&&(Oe&6)===0&&Zs();var i=Oe;Oe|=1;var a=mn.transition,c=ke;try{if(mn.transition=null,ke=1,n)return n()}finally{ke=c,mn.transition=a,Oe=i,(Oe&6)===0&&Gr()}}function Lh(){on=Xs.current,qe(Xs)}function Wi(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,lE(a)),at!==null)for(a=at.return;a!==null;){var c=a;switch($c(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&kl();break;case 3:Gs(),qe(qt),qe(Nt),nh();break;case 5:eh(c);break;case 4:Gs();break;case 13:qe(Ge);break;case 19:qe(Ge);break;case 10:Qc(c.type._context);break;case 22:case 23:Lh()}a=a.return}if(_t=n,at=n=ni(n.current,null),Rt=on=i,ft=0,ga=null,Ah=Xl=Hi=0,Gt=ya=null,Bi!==null){for(i=0;i<Bi.length;i++)if(a=Bi[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var _=m.next;m.next=d,c.next=_}a.pending=c}Bi=null}return n}function Im(n,i){do{var a=at;try{if(Gc(),zl.current=Hl,Bl){for(var c=Qe.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Bl=!1}if($i=0,vt=dt=Qe=null,ca=!1,ha=0,Ch.current=null,a===null||a.return===null){ft=1,ga=i,at=null;break}e:{var m=n,_=a.return,I=a,k=i;if(i=Rt,I.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var B=k,Q=I,X=Q.tag;if((Q.mode&1)===0&&(X===0||X===11||X===15)){var G=Q.alternate;G?(Q.updateQueue=G.updateQueue,Q.memoizedState=G.memoizedState,Q.lanes=G.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var ie=Gp(_);if(ie!==null){ie.flags&=-257,Qp(ie,_,I,m,i),ie.mode&1&&Kp(m,B,i),i=ie,k=B;var le=i.updateQueue;if(le===null){var ue=new Set;ue.add(k),i.updateQueue=ue}else le.add(k);break e}else{if((i&1)===0){Kp(m,B,i),Vh();break e}k=Error(t(426))}}else if(Ke&&I.mode&1){var rt=Gp(_);if(rt!==null){(rt.flags&65536)===0&&(rt.flags|=256),Qp(rt,_,I,m,i),Wc(Qs(k,I));break e}}m=k=Qs(k,I),ft!==4&&(ft=2),ya===null?ya=[m]:ya.push(m),m=_;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var b=qp(m,k,i);vp(m,b);break e;case 1:I=k;var x=m.type,U=m.stateNode;if((m.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(Jr===null||!Jr.has(U)))){m.flags|=65536,i&=-i,m.lanes|=i;var J=Wp(m,I,i);vp(m,J);break e}}m=m.return}while(m!==null)}Cm(a)}catch(ce){i=ce,at===a&&a!==null&&(at=a=a.return);continue}break}while(!0)}function Sm(){var n=Yl.current;return Yl.current=Hl,n===null?Hl:n}function Vh(){(ft===0||ft===3||ft===2)&&(ft=4),_t===null||(Hi&268435455)===0&&(Xl&268435455)===0||ti(_t,Rt)}function ru(n,i){var a=Oe;Oe|=2;var c=Sm();(_t!==n||Rt!==i)&&(Ir=null,Wi(n,i));do try{OE();break}catch(d){Im(n,d)}while(!0);if(Gc(),Oe=a,Yl.current=c,at!==null)throw Error(t(261));return _t=null,Rt=0,ft}function OE(){for(;at!==null;)Rm(at)}function LE(){for(;at!==null&&!el();)Rm(at)}function Rm(n){var i=Pm(n.alternate,n,on);n.memoizedProps=n.pendingProps,i===null?Cm(n):at=i,Ch.current=null}function Cm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=CE(a,i,on),a!==null){at=a;return}}else{if(a=AE(a,i),a!==null){a.flags&=32767,at=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ft=6,at=null;return}}if(i=i.sibling,i!==null){at=i;return}at=i=n}while(i!==null);ft===0&&(ft=5)}function Ki(n,i,a){var c=ke,d=mn.transition;try{mn.transition=null,ke=1,VE(n,i,a,c)}finally{mn.transition=d,ke=c}return null}function VE(n,i,a,c){do Zs();while(Zr!==null);if((Oe&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(ze(n,m),n===_t&&(at=_t=null,Rt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Zl||(Zl=!0,Nm(ln,function(){return Zs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=mn.transition,mn.transition=null;var _=ke;ke=1;var I=Oe;Oe|=4,Ch.current=null,PE(n,a),gm(a,n),tE(Vc),jr=!!Lc,Vc=Lc=null,n.current=a,NE(a),vc(),Oe=I,ke=_,mn.transition=m}else n.current=a;if(Zl&&(Zl=!1,Zr=n,eu=d),m=n.pendingLanes,m===0&&(Jr=null),rl(a.stateNode),Qt(n,je()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Jl)throw Jl=!1,n=Ph,Ph=null,n;return(eu&1)!==0&&n.tag!==0&&Zs(),m=n.pendingLanes,(m&1)!==0?n===Nh?va++:(va=0,Nh=n):va=0,Gr(),null}function Zs(){if(Zr!==null){var n=zr(eu),i=mn.transition,a=ke;try{if(mn.transition=null,ke=16>n?16:n,Zr===null)var c=!1;else{if(n=Zr,Zr=null,eu=0,(Oe&6)!==0)throw Error(t(331));var d=Oe;for(Oe|=4,ae=n.current;ae!==null;){var m=ae,_=m.child;if((ae.flags&16)!==0){var I=m.deletions;if(I!==null){for(var k=0;k<I.length;k++){var B=I[k];for(ae=B;ae!==null;){var Q=ae;switch(Q.tag){case 0:case 11:case 15:ma(8,Q,m)}var X=Q.child;if(X!==null)X.return=Q,ae=X;else for(;ae!==null;){Q=ae;var G=Q.sibling,ie=Q.return;if(hm(Q),Q===B){ae=null;break}if(G!==null){G.return=ie,ae=G;break}ae=ie}}}var le=m.alternate;if(le!==null){var ue=le.child;if(ue!==null){le.child=null;do{var rt=ue.sibling;ue.sibling=null,ue=rt}while(ue!==null)}}ae=m}}if((m.subtreeFlags&2064)!==0&&_!==null)_.return=m,ae=_;else e:for(;ae!==null;){if(m=ae,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:ma(9,m,m.return)}var b=m.sibling;if(b!==null){b.return=m.return,ae=b;break e}ae=m.return}}var x=n.current;for(ae=x;ae!==null;){_=ae;var U=_.child;if((_.subtreeFlags&2064)!==0&&U!==null)U.return=_,ae=U;else e:for(_=x;ae!==null;){if(I=ae,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Ql(9,I)}}catch(ce){Ze(I,I.return,ce)}if(I===_){ae=null;break e}var J=I.sibling;if(J!==null){J.return=I.return,ae=J;break e}ae=I.return}}if(Oe=d,Gr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Ni,n)}catch{}c=!0}return c}finally{ke=a,mn.transition=i}}return!1}function Am(n,i,a){i=Qs(a,i),i=qp(n,i,1),n=Yr(n,i,1),i=Bt(),n!==null&&(Fr(n,1,i),Qt(n,i))}function Ze(n,i,a){if(n.tag===3)Am(n,n,a);else for(;i!==null;){if(i.tag===3){Am(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Jr===null||!Jr.has(c))){n=Qs(a,n),n=Wp(i,n,1),i=Yr(i,n,1),n=Bt(),i!==null&&(Fr(i,1,n),Qt(i,n));break}}i=i.return}}function ME(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Bt(),n.pingedLanes|=n.suspendedLanes&a,_t===n&&(Rt&a)===a&&(ft===4||ft===3&&(Rt&130023424)===Rt&&500>je()-kh?Wi(n,0):Ah|=a),Qt(n,i)}function km(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ts,Ts<<=1,(Ts&130023424)===0&&(Ts=4194304)));var a=Bt();n=Er(n,i),n!==null&&(Fr(n,i,a),Qt(n,a))}function bE(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),km(n,a)}function FE(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),km(n,a)}var Pm;Pm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||qt.current)Kt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Kt=!1,RE(n,i,a);Kt=(n.flags&131072)!==0}else Kt=!1,Ke&&(i.flags&1048576)!==0&&lp(i,Dl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Kl(n,i),n=i.pendingProps;var d=Bs(i,Nt.current);Ks(i,a),d=sh(null,i,c,n,d,a);var m=oh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Wt(c)?(m=!0,Pl(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Jc(i),d.updater=ql,i.stateNode=d,d._reactInternals=i,dh(i,c,n,a),i=gh(null,i,c,!0,m,a)):(i.tag=0,Ke&&m&&jc(i),zt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Kl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=zE(c),n=Pn(c,n),d){case 0:i=mh(null,i,c,n,a);break e;case 1:i=tm(null,i,c,n,a);break e;case 11:i=Yp(null,i,c,n,a);break e;case 14:i=Xp(null,i,c,Pn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pn(c,d),mh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pn(c,d),tm(n,i,c,d,a);case 3:e:{if(nm(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,yp(n,i),Fl(i,c,null,a);var _=i.memoizedState;if(c=_.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Qs(Error(t(423)),i),i=rm(n,i,c,a,d);break e}else if(c!==d){d=Qs(Error(t(424)),i),i=rm(n,i,c,a,d);break e}else for(sn=qr(i.stateNode.containerInfo.firstChild),rn=i,Ke=!0,kn=null,a=mp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Hs(),c===d){i=Tr(n,i,a);break e}zt(n,i,c,a)}i=i.child}return i;case 5:return Ep(i),n===null&&qc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,_=d.children,Mc(c,d)?_=null:m!==null&&Mc(c,m)&&(i.flags|=32),em(n,i),zt(n,i,_,a),i.child;case 6:return n===null&&qc(i),null;case 13:return im(n,i,a);case 4:return Zc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=qs(i,null,c,a):zt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pn(c,d),Yp(n,i,c,d,a);case 7:return zt(n,i,i.pendingProps,a),i.child;case 8:return zt(n,i,i.pendingProps.children,a),i.child;case 12:return zt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,_=d.value,$e(Vl,c._currentValue),c._currentValue=_,m!==null)if(An(m.value,_)){if(m.children===d.children&&!qt.current){i=Tr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){_=m.child;for(var k=I.firstContext;k!==null;){if(k.context===c){if(m.tag===1){k=wr(-1,a&-a),k.tag=2;var B=m.updateQueue;if(B!==null){B=B.shared;var Q=B.pending;Q===null?k.next=k:(k.next=Q.next,Q.next=k),B.pending=k}}m.lanes|=a,k=m.alternate,k!==null&&(k.lanes|=a),Yc(m.return,a,i),I.lanes|=a;break}k=k.next}}else if(m.tag===10)_=m.type===i.type?null:m.child;else if(m.tag===18){if(_=m.return,_===null)throw Error(t(341));_.lanes|=a,I=_.alternate,I!==null&&(I.lanes|=a),Yc(_,a,i),_=m.sibling}else _=m.child;if(_!==null)_.return=m;else for(_=m;_!==null;){if(_===i){_=null;break}if(m=_.sibling,m!==null){m.return=_.return,_=m;break}_=_.return}m=_}zt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ks(i,a),d=fn(d),c=c(d),i.flags|=1,zt(n,i,c,a),i.child;case 14:return c=i.type,d=Pn(c,i.pendingProps),d=Pn(c.type,d),Xp(n,i,c,d,a);case 15:return Jp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Pn(c,d),Kl(n,i),i.tag=1,Wt(c)?(n=!0,Pl(i)):n=!1,Ks(i,a),$p(i,c,d),dh(i,c,d,a),gh(null,i,c,!0,n,a);case 19:return om(n,i,a);case 22:return Zp(n,i,a)}throw Error(t(156,i.tag))};function Nm(n,i){return Es(n,i)}function UE(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(n,i,a,c){return new UE(n,i,a,c)}function Mh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function zE(n){if(typeof n=="function")return Mh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===L)return 11;if(n===kt)return 14}return 2}function ni(n,i){var a=n.alternate;return a===null?(a=gn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function iu(n,i,a,c,d,m){var _=2;if(c=n,typeof n=="function")Mh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case N:return Gi(a.children,d,m,i);case T:_=8,d|=8;break;case R:return n=gn(12,a,i,d|2),n.elementType=R,n.lanes=m,n;case C:return n=gn(13,a,i,d),n.elementType=C,n.lanes=m,n;case tt:return n=gn(19,a,i,d),n.elementType=tt,n.lanes=m,n;case Ue:return su(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:_=10;break e;case D:_=9;break e;case L:_=11;break e;case kt:_=14;break e;case Pt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=gn(_,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function Gi(n,i,a,c){return n=gn(7,n,c,i),n.lanes=a,n}function su(n,i,a,c){return n=gn(22,n,c,i),n.elementType=Ue,n.lanes=a,n.stateNode={isHidden:!1},n}function bh(n,i,a){return n=gn(6,n,null,i),n.lanes=a,n}function Fh(n,i,a){return i=gn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function BE(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=br(0),this.expirationTimes=br(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=br(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Uh(n,i,a,c,d,m,_,I,k){return n=new BE(n,i,a,I,k),i===1?(i=1,m===!0&&(i|=8)):i=0,m=gn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jc(m),n}function jE(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ge,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function xm(n){if(!n)return Kr;n=n._reactInternals;e:{if(En(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Wt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Wt(a))return sp(n,a,i)}return i}function Dm(n,i,a,c,d,m,_,I,k){return n=Uh(a,c,!0,n,d,m,_,I,k),n.context=xm(null),a=n.current,c=Bt(),d=ei(a),m=wr(c,d),m.callback=i??null,Yr(a,m,d),n.current.lanes=d,Fr(n,d,c),Qt(n,c),n}function ou(n,i,a,c){var d=i.current,m=Bt(),_=ei(d);return a=xm(a),i.context===null?i.context=a:i.pendingContext=a,i=wr(m,_),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Yr(d,i,_),n!==null&&(Dn(n,d,_,m),bl(n,d,_)),_}function au(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Om(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function zh(n,i){Om(n,i),(n=n.alternate)&&Om(n,i)}function $E(){return null}var Lm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Bh(n){this._internalRoot=n}lu.prototype.render=Bh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ou(n,i,null,null)},lu.prototype.unmount=Bh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;qi(function(){ou(null,n,null,null)}),i[gr]=null}};function lu(n){this._internalRoot=n}lu.prototype.unstable_scheduleHydration=function(n){if(n){var i=ll();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Un.length&&i!==0&&i<Un[a].priority;a++);Un.splice(a,0,n),a===0&&hl(n)}};function jh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function uu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Vm(){}function HE(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var B=au(_);m.call(B)}}var _=Dm(i,c,n,0,null,!1,!1,"",Vm);return n._reactRootContainer=_,n[gr]=_.current,na(n.nodeType===8?n.parentNode:n),qi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var B=au(k);I.call(B)}}var k=Uh(n,0,!1,null,null,!1,!1,"",Vm);return n._reactRootContainer=k,n[gr]=k.current,na(n.nodeType===8?n.parentNode:n),qi(function(){ou(i,k,a,c)}),k}function cu(n,i,a,c,d){var m=a._reactRootContainer;if(m){var _=m;if(typeof d=="function"){var I=d;d=function(){var k=au(_);I.call(k)}}ou(i,_,n,d)}else _=HE(a,i,n,d,c);return au(_)}ol=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Mr(i.pendingLanes);a!==0&&(Ur(i,a|1),Qt(i,je()),(Oe&6)===0&&(Js=je()+500,Gr()))}break;case 13:qi(function(){var c=Er(n,1);if(c!==null){var d=Bt();Dn(c,n,1,d)}}),zh(n,1)}},Is=function(n){if(n.tag===13){var i=Er(n,134217728);if(i!==null){var a=Bt();Dn(i,n,134217728,a)}zh(n,134217728)}},al=function(n){if(n.tag===13){var i=ei(n),a=Er(n,i);if(a!==null){var c=Bt();Dn(a,n,i,c)}zh(n,i)}},ll=function(){return ke},ul=function(n,i){var a=ke;try{return ke=n,i()}finally{ke=a}},ps=function(n,i,a){switch(i){case"input":if(Ao(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Al(c);if(!d)throw Error(t(90));ls(c),Ao(c,d)}}}break;case"textarea":ds(n,a);break;case"select":i=a.value,i!=null&&lr(n,!!a.multiple,i,!1)}},Ri=Oh,bo=qi;var qE={usingClientEntryPoint:!1,Events:[sa,Us,Al,bn,Mo,Oh]},_a={findFiberByHostInstance:bi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},WE={bundleType:_a.bundleType,version:_a.version,rendererPackageName:_a.rendererPackageName,rendererConfig:_a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=zo(n),n===null?null:n.stateNode},findFiberByHostInstance:_a.findFiberByHostInstance||$E,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hu.isDisabled&&hu.supportsFiber)try{Ni=hu.inject(WE),Zt=hu}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qE,Yt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jh(i))throw Error(t(200));return jE(n,i,null,a)},Yt.createRoot=function(n,i){if(!jh(n))throw Error(t(299));var a=!1,c="",d=Lm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Uh(n,1,!1,null,null,a,!1,c,d),n[gr]=i.current,na(n.nodeType===8?n.parentNode:n),new Bh(i)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=zo(i),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return qi(n)},Yt.hydrate=function(n,i,a){if(!uu(i))throw Error(t(200));return cu(null,n,i,!0,a)},Yt.hydrateRoot=function(n,i,a){if(!jh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",_=Lm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),i=Dm(i,null,n,1,a??null,d,!1,m,_),n[gr]=i.current,na(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new lu(i)},Yt.render=function(n,i,a){if(!uu(i))throw Error(t(200));return cu(null,n,i,!1,a)},Yt.unmountComponentAtNode=function(n){if(!uu(n))throw Error(t(40));return n._reactRootContainer?(qi(function(){cu(null,null,n,!1,function(){n._reactRootContainer=null,n[gr]=null})}),!0):!1},Yt.unstable_batchedUpdates=Oh,Yt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!uu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return cu(n,i,a,!1,c)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var $m;function tw(){if($m)return qh.exports;$m=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),qh.exports=ew(),qh.exports}var Hm;function nw(){if(Hm)return du;Hm=1;var r=tw();return du.createRoot=r.createRoot,du.hydrateRoot=r.hydrateRoot,du}var rw=nw();const iw=Ay(rw);var wa={},qm;function sw(){if(qm)return wa;qm=1,Object.defineProperty(wa,"__esModule",{value:!0}),wa.parse=h,wa.serialize=v;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const A=function(){};return A.prototype=Object.create(null),A})();function h(A,F){const M=new l,$=A.length;if($<2)return M;const z=(F==null?void 0:F.decode)||E;let q=0;do{const te=A.indexOf("=",q);if(te===-1)break;const Y=A.indexOf(";",q),re=Y===-1?$:Y;if(te>re){q=A.lastIndexOf(";",te-1)+1;continue}const Ee=f(A,q,te),ge=g(A,te,Ee),N=A.slice(Ee,ge);if(M[N]===void 0){let T=f(A,te+1,re),R=g(A,re,T);const P=z(A.slice(T,R));M[N]=P}q=re+1}while(q<$);return M}function f(A,F,M){do{const $=A.charCodeAt(F);if($!==32&&$!==9)return F}while(++F<M);return M}function g(A,F,M){for(;F>M;){const $=A.charCodeAt(--F);if($!==32&&$!==9)return F+1}return M}function v(A,F,M){const $=(M==null?void 0:M.encode)||encodeURIComponent;if(!r.test(A))throw new TypeError(`argument name is invalid: ${A}`);const z=$(F);if(!e.test(z))throw new TypeError(`argument val is invalid: ${F}`);let q=A+"="+z;if(!M)return q;if(M.maxAge!==void 0){if(!Number.isInteger(M.maxAge))throw new TypeError(`option maxAge is invalid: ${M.maxAge}`);q+="; Max-Age="+M.maxAge}if(M.domain){if(!t.test(M.domain))throw new TypeError(`option domain is invalid: ${M.domain}`);q+="; Domain="+M.domain}if(M.path){if(!s.test(M.path))throw new TypeError(`option path is invalid: ${M.path}`);q+="; Path="+M.path}if(M.expires){if(!S(M.expires)||!Number.isFinite(M.expires.valueOf()))throw new TypeError(`option expires is invalid: ${M.expires}`);q+="; Expires="+M.expires.toUTCString()}if(M.httpOnly&&(q+="; HttpOnly"),M.secure&&(q+="; Secure"),M.partitioned&&(q+="; Partitioned"),M.priority)switch(typeof M.priority=="string"?M.priority.toLowerCase():void 0){case"low":q+="; Priority=Low";break;case"medium":q+="; Priority=Medium";break;case"high":q+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${M.priority}`)}if(M.sameSite)switch(typeof M.sameSite=="string"?M.sameSite.toLowerCase():M.sameSite){case!0:case"strict":q+="; SameSite=Strict";break;case"lax":q+="; SameSite=Lax";break;case"none":q+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${M.sameSite}`)}return q}function E(A){if(A.indexOf("%")===-1)return A;try{return decodeURIComponent(A)}catch{return A}}function S(A){return o.call(A)==="[object Date]"}return wa}sw();var Wm="popstate";function ow(r={}){function e(s,o){let{pathname:l,search:h,hash:f}=s.location;return ud("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:xa(o)}return lw(e,t,null,r)}function Xe(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Jn(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function aw(){return Math.random().toString(36).substring(2,10)}function Km(r,e){return{usr:r.state,key:r.key,idx:e}}function ud(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?_o(e):e,state:t,key:e&&e.key||s||aw()}}function xa({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function _o(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function lw(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,h=o.history,f="POP",g=null,v=E();v==null&&(v=0,h.replaceState({...h.state,idx:v},""));function E(){return(h.state||{idx:null}).idx}function S(){f="POP";let z=E(),q=z==null?null:z-v;v=z,g&&g({action:f,location:$.location,delta:q})}function A(z,q){f="PUSH";let te=ud($.location,z,q);v=E()+1;let Y=Km(te,v),re=$.createHref(te);try{h.pushState(Y,"",re)}catch(Ee){if(Ee instanceof DOMException&&Ee.name==="DataCloneError")throw Ee;o.location.assign(re)}l&&g&&g({action:f,location:$.location,delta:1})}function F(z,q){f="REPLACE";let te=ud($.location,z,q);v=E();let Y=Km(te,v),re=$.createHref(te);h.replaceState(Y,"",re),l&&g&&g({action:f,location:$.location,delta:0})}function M(z){return uw(z)}let $={get action(){return f},get location(){return r(o,h)},listen(z){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(Wm,S),g=z,()=>{o.removeEventListener(Wm,S),g=null}},createHref(z){return e(o,z)},createURL:M,encodeLocation(z){let q=M(z);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:A,replace:F,go(z){return h.go(z)}};return $}function uw(r,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),Xe(t,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:xa(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function ky(r,e,t="/"){return cw(r,e,t,!1)}function cw(r,e,t,s){let o=typeof e=="string"?_o(e):e,l=kr(o.pathname||"/",t);if(l==null)return null;let h=Py(r);hw(h);let f=null;for(let g=0;f==null&&g<h.length;++g){let v=Tw(l);f=Ew(h[g],v,s)}return f}function Py(r,e=[],t=[],s=""){let o=(l,h,f)=>{let g={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};g.relativePath.startsWith("/")&&(Xe(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length));let v=Ar([s,g.relativePath]),E=t.concat(g);l.children&&l.children.length>0&&(Xe(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Py(l.children,e,E,v)),!(l.path==null&&!l.index)&&e.push({path:v,score:vw(v,l.index),routesMeta:E})};return r.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let g of Ny(l.path))o(l,h,g)}),e}function Ny(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let h=Ny(s.join("/")),f=[];return f.push(...h.map(g=>g===""?l:[l,g].join("/"))),o&&f.push(...h),f.map(g=>r.startsWith("/")&&g===""?"/":g)}function hw(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:_w(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var dw=/^:[\w-]+$/,fw=3,pw=2,mw=1,gw=10,yw=-2,Gm=r=>r==="*";function vw(r,e){let t=r.split("/"),s=t.length;return t.some(Gm)&&(s+=yw),e&&(s+=pw),t.filter(o=>!Gm(o)).reduce((o,l)=>o+(dw.test(l)?fw:l===""?mw:gw),s)}function _w(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function Ew(r,e,t=!1){let{routesMeta:s}=r,o={},l="/",h=[];for(let f=0;f<s.length;++f){let g=s[f],v=f===s.length-1,E=l==="/"?e:e.slice(l.length)||"/",S=Ou({path:g.relativePath,caseSensitive:g.caseSensitive,end:v},E),A=g.route;if(!S&&v&&t&&!s[s.length-1].route.index&&(S=Ou({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},E)),!S)return null;Object.assign(o,S.params),h.push({params:o,pathname:Ar([l,S.pathname]),pathnameBase:Cw(Ar([l,S.pathnameBase])),route:A}),S.pathnameBase!=="/"&&(l=Ar([l,S.pathnameBase]))}return h}function Ou(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=ww(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((v,{paramName:E,isOptional:S},A)=>{if(E==="*"){let M=f[A]||"";h=l.slice(0,l.length-M.length).replace(/(.)\/+$/,"$1")}const F=f[A];return S&&!F?v[E]=void 0:v[E]=(F||"").replace(/%2F/g,"/"),v},{}),pathname:l,pathnameBase:h,pattern:r}}function ww(r,e=!1,t=!0){Jn(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,g)=>(s.push({paramName:f,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function Tw(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Jn(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function kr(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function Iw(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?_o(r):r;return{pathname:t?t.startsWith("/")?t:Sw(t,e):e,search:Aw(s),hash:kw(o)}}function Sw(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Gh(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Rw(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function xy(r){let e=Rw(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Dy(r,e,t,s=!1){let o;typeof r=="string"?o=_o(r):(o={...r},Xe(!o.pathname||!o.pathname.includes("?"),Gh("?","pathname","search",o)),Xe(!o.pathname||!o.pathname.includes("#"),Gh("#","pathname","hash",o)),Xe(!o.search||!o.search.includes("#"),Gh("#","search","hash",o)));let l=r===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let S=e.length-1;if(!s&&h.startsWith("..")){let A=h.split("/");for(;A[0]==="..";)A.shift(),S-=1;o.pathname=A.join("/")}f=S>=0?e[S]:"/"}let g=Iw(o,f),v=h&&h!=="/"&&h.endsWith("/"),E=(l||h===".")&&t.endsWith("/");return!g.pathname.endsWith("/")&&(v||E)&&(g.pathname+="/"),g}var Ar=r=>r.join("/").replace(/\/\/+/g,"/"),Cw=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Aw=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,kw=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Pw(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Oy=["POST","PUT","PATCH","DELETE"];new Set(Oy);var Nw=["GET",...Oy];new Set(Nw);var Eo=H.createContext(null);Eo.displayName="DataRouter";var Ju=H.createContext(null);Ju.displayName="DataRouterState";var Ly=H.createContext({isTransitioning:!1});Ly.displayName="ViewTransition";var xw=H.createContext(new Map);xw.displayName="Fetchers";var Dw=H.createContext(null);Dw.displayName="Await";var rr=H.createContext(null);rr.displayName="Navigation";var Fa=H.createContext(null);Fa.displayName="Location";var Dr=H.createContext({outlet:null,matches:[],isDataRoute:!1});Dr.displayName="Route";var zd=H.createContext(null);zd.displayName="RouteError";function Ow(r,{relative:e}={}){Xe(Ua(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=H.useContext(rr),{hash:o,pathname:l,search:h}=za(r,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:Ar([t,l])),s.createHref({pathname:f,search:h,hash:o})}function Ua(){return H.useContext(Fa)!=null}function ss(){return Xe(Ua(),"useLocation() may be used only in the context of a <Router> component."),H.useContext(Fa).location}var Vy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function My(r){H.useContext(rr).static||H.useLayoutEffect(r)}function Lw(){let{isDataRoute:r}=H.useContext(Dr);return r?Kw():Vw()}function Vw(){Xe(Ua(),"useNavigate() may be used only in the context of a <Router> component.");let r=H.useContext(Eo),{basename:e,navigator:t}=H.useContext(rr),{matches:s}=H.useContext(Dr),{pathname:o}=ss(),l=JSON.stringify(xy(s)),h=H.useRef(!1);return My(()=>{h.current=!0}),H.useCallback((g,v={})=>{if(Jn(h.current,Vy),!h.current)return;if(typeof g=="number"){t.go(g);return}let E=Dy(g,JSON.parse(l),o,v.relative==="path");r==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Ar([e,E.pathname])),(v.replace?t.replace:t.push)(E,v.state,v)},[e,t,l,o,r])}H.createContext(null);function za(r,{relative:e}={}){let{matches:t}=H.useContext(Dr),{pathname:s}=ss(),o=JSON.stringify(xy(t));return H.useMemo(()=>Dy(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function Mw(r,e){return by(r,e)}function by(r,e,t,s){var te;Xe(Ua(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:l}=H.useContext(rr),{matches:h}=H.useContext(Dr),f=h[h.length-1],g=f?f.params:{},v=f?f.pathname:"/",E=f?f.pathnameBase:"/",S=f&&f.route;{let Y=S&&S.path||"";Fy(v,!S||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let A=ss(),F;if(e){let Y=typeof e=="string"?_o(e):e;Xe(E==="/"||((te=Y.pathname)==null?void 0:te.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${Y.pathname}" was given in the \`location\` prop.`),F=Y}else F=A;let M=F.pathname||"/",$=M;if(E!=="/"){let Y=E.replace(/^\//,"").split("/");$="/"+M.replace(/^\//,"").split("/").slice(Y.length).join("/")}let z=!l&&t&&t.matches&&t.matches.length>0?t.matches:ky(r,{pathname:$});Jn(S||z!=null,`No routes matched location "${F.pathname}${F.search}${F.hash}" `),Jn(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${F.pathname}${F.search}${F.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=Bw(z&&z.map(Y=>Object.assign({},Y,{params:Object.assign({},g,Y.params),pathname:Ar([E,o.encodeLocation?o.encodeLocation(Y.pathname).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?E:Ar([E,o.encodeLocation?o.encodeLocation(Y.pathnameBase).pathname:Y.pathnameBase])})),h,t,s);return e&&q?H.createElement(Fa.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...F},navigationType:"POP"}},q):q}function bw(){let r=Ww(),e=Pw(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=H.createElement(H.Fragment,null,H.createElement("p",null,"💿 Hey developer 👋"),H.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",H.createElement("code",{style:l},"ErrorBoundary")," or"," ",H.createElement("code",{style:l},"errorElement")," prop on your route.")),H.createElement(H.Fragment,null,H.createElement("h2",null,"Unexpected Application Error!"),H.createElement("h3",{style:{fontStyle:"italic"}},e),t?H.createElement("pre",{style:o},t):null,h)}var Fw=H.createElement(bw,null),Uw=class extends H.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?H.createElement(Dr.Provider,{value:this.props.routeContext},H.createElement(zd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function zw({routeContext:r,match:e,children:t}){let s=H.useContext(Eo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),H.createElement(Dr.Provider,{value:r},t)}function Bw(r,e=[],t=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let o=r,l=t==null?void 0:t.errors;if(l!=null){let g=o.findIndex(v=>v.route.id&&(l==null?void 0:l[v.route.id])!==void 0);Xe(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,g+1))}let h=!1,f=-1;if(t)for(let g=0;g<o.length;g++){let v=o[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(f=g),v.route.id){let{loaderData:E,errors:S}=t,A=v.route.loader&&!E.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||A){h=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((g,v,E)=>{let S,A=!1,F=null,M=null;t&&(S=l&&v.route.id?l[v.route.id]:void 0,F=v.route.errorElement||Fw,h&&(f<0&&E===0?(Fy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,M=null):f===E&&(A=!0,M=v.route.hydrateFallbackElement||null)));let $=e.concat(o.slice(0,E+1)),z=()=>{let q;return S?q=F:A?q=M:v.route.Component?q=H.createElement(v.route.Component,null):v.route.element?q=v.route.element:q=g,H.createElement(zw,{match:v,routeContext:{outlet:g,matches:$,isDataRoute:t!=null},children:q})};return t&&(v.route.ErrorBoundary||v.route.errorElement||E===0)?H.createElement(Uw,{location:t.location,revalidation:t.revalidation,component:F,error:S,children:z(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):z()},null)}function Bd(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jw(r){let e=H.useContext(Eo);return Xe(e,Bd(r)),e}function $w(r){let e=H.useContext(Ju);return Xe(e,Bd(r)),e}function Hw(r){let e=H.useContext(Dr);return Xe(e,Bd(r)),e}function jd(r){let e=Hw(r),t=e.matches[e.matches.length-1];return Xe(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function qw(){return jd("useRouteId")}function Ww(){var s;let r=H.useContext(zd),e=$w("useRouteError"),t=jd("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function Kw(){let{router:r}=jw("useNavigate"),e=jd("useNavigate"),t=H.useRef(!1);return My(()=>{t.current=!0}),H.useCallback(async(o,l={})=>{Jn(t.current,Vy),t.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...l}))},[r,e])}var Qm={};function Fy(r,e,t){!e&&!Qm[r]&&(Qm[r]=!0,Jn(!1,t))}H.memo(Gw);function Gw({routes:r,future:e,state:t}){return by(r,void 0,t,e)}function cd(r){Xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Qw({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:l=!1}){Xe(!Ua(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),f=H.useMemo(()=>({basename:h,navigator:o,static:l,future:{}}),[h,o,l]);typeof t=="string"&&(t=_o(t));let{pathname:g="/",search:v="",hash:E="",state:S=null,key:A="default"}=t,F=H.useMemo(()=>{let M=kr(g,h);return M==null?null:{location:{pathname:M,search:v,hash:E,state:S,key:A},navigationType:s}},[h,g,v,E,S,A,s]);return Jn(F!=null,`<Router basename="${h}"> is not able to match the URL "${g}${v}${E}" because it does not start with the basename, so the <Router> won't render anything.`),F==null?null:H.createElement(rr.Provider,{value:f},H.createElement(Fa.Provider,{children:e,value:F}))}function Yw({children:r,location:e}){return Mw(hd(r),e)}function hd(r,e=[]){let t=[];return H.Children.forEach(r,(s,o)=>{if(!H.isValidElement(s))return;let l=[...e,o];if(s.type===H.Fragment){t.push.apply(t,hd(s.props.children,l));return}Xe(s.type===cd,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xe(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=hd(s.props.children,l)),t.push(h)}),t}var Tu="get",Iu="application/x-www-form-urlencoded";function Zu(r){return r!=null&&typeof r.tagName=="string"}function Xw(r){return Zu(r)&&r.tagName.toLowerCase()==="button"}function Jw(r){return Zu(r)&&r.tagName.toLowerCase()==="form"}function Zw(r){return Zu(r)&&r.tagName.toLowerCase()==="input"}function e0(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function t0(r,e){return r.button===0&&(!e||e==="_self")&&!e0(r)}var fu=null;function n0(){if(fu===null)try{new FormData(document.createElement("form"),0),fu=!1}catch{fu=!0}return fu}var r0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Qh(r){return r!=null&&!r0.has(r)?(Jn(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Iu}"`),null):r}function i0(r,e){let t,s,o,l,h;if(Jw(r)){let f=r.getAttribute("action");s=f?kr(f,e):null,t=r.getAttribute("method")||Tu,o=Qh(r.getAttribute("enctype"))||Iu,l=new FormData(r)}else if(Xw(r)||Zw(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=r.getAttribute("formaction")||f.getAttribute("action");if(s=g?kr(g,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||Tu,o=Qh(r.getAttribute("formenctype"))||Qh(f.getAttribute("enctype"))||Iu,l=new FormData(f,r),!n0()){let{name:v,type:E,value:S}=r;if(E==="image"){let A=v?`${v}.`:"";l.append(`${A}x`,"0"),l.append(`${A}y`,"0")}else v&&l.append(v,S)}}else{if(Zu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Tu,s=null,o=Iu,h=r}return l&&o==="text/plain"&&(h=l,l=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:l,body:h}}function $d(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function s0(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function o0(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function a0(r,e,t){let s=await Promise.all(r.map(async o=>{let l=e.routes[o.route.id];if(l){let h=await s0(l,t);return h.links?h.links():[]}return[]}));return h0(s.flat(1).filter(o0).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Ym(r,e,t,s,o,l){let h=(g,v)=>t[v]?g.route.id!==t[v].route.id:!0,f=(g,v)=>{var E;return t[v].pathname!==g.pathname||((E=t[v].route.path)==null?void 0:E.endsWith("*"))&&t[v].params["*"]!==g.params["*"]};return l==="assets"?e.filter((g,v)=>h(g,v)||f(g,v)):l==="data"?e.filter((g,v)=>{var S;let E=s.routes[g.route.id];if(!E||!E.hasLoader)return!1;if(h(g,v)||f(g,v))return!0;if(g.route.shouldRevalidate){let A=g.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((S=t[0])==null?void 0:S.params)||{},nextUrl:new URL(r,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof A=="boolean")return A}return!0}):[]}function l0(r,e,{includeHydrateFallback:t}={}){return u0(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function u0(r){return[...new Set(r)]}function c0(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function h0(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let l=JSON.stringify(c0(o));return t.has(l)||(t.add(l),s.push({key:l,link:o})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var d0=new Set([100,101,204,205]);function f0(r,e){let t=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return t.pathname==="/"?t.pathname="_root.data":e&&kr(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function Uy(){let r=H.useContext(Eo);return $d(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function p0(){let r=H.useContext(Ju);return $d(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Hd=H.createContext(void 0);Hd.displayName="FrameworkContext";function zy(){let r=H.useContext(Hd);return $d(r,"You must render this element inside a <HydratedRouter> element"),r}function m0(r,e){let t=H.useContext(Hd),[s,o]=H.useState(!1),[l,h]=H.useState(!1),{onFocus:f,onBlur:g,onMouseEnter:v,onMouseLeave:E,onTouchStart:S}=e,A=H.useRef(null);H.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let $=q=>{q.forEach(te=>{h(te.isIntersecting)})},z=new IntersectionObserver($,{threshold:.5});return A.current&&z.observe(A.current),()=>{z.disconnect()}}},[r]),H.useEffect(()=>{if(s){let $=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout($)}}},[s]);let F=()=>{o(!0)},M=()=>{o(!1),h(!1)};return t?r!=="intent"?[l,A,{}]:[l,A,{onFocus:Ta(f,F),onBlur:Ta(g,M),onMouseEnter:Ta(v,F),onMouseLeave:Ta(E,M),onTouchStart:Ta(S,F)}]:[!1,A,{}]}function Ta(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function g0({page:r,...e}){let{router:t}=Uy(),s=H.useMemo(()=>ky(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?H.createElement(v0,{page:r,matches:s,...e}):null}function y0(r){let{manifest:e,routeModules:t}=zy(),[s,o]=H.useState([]);return H.useEffect(()=>{let l=!1;return a0(r,e,t).then(h=>{l||o(h)}),()=>{l=!0}},[r,e,t]),s}function v0({page:r,matches:e,...t}){let s=ss(),{manifest:o,routeModules:l}=zy(),{basename:h}=Uy(),{loaderData:f,matches:g}=p0(),v=H.useMemo(()=>Ym(r,e,g,o,s,"data"),[r,e,g,o,s]),E=H.useMemo(()=>Ym(r,e,g,o,s,"assets"),[r,e,g,o,s]),S=H.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let M=new Set,$=!1;if(e.forEach(q=>{var Y;let te=o.routes[q.route.id];!te||!te.hasLoader||(!v.some(re=>re.route.id===q.route.id)&&q.route.id in f&&((Y=l[q.route.id])!=null&&Y.shouldRevalidate)||te.hasClientLoader?$=!0:M.add(q.route.id))}),M.size===0)return[];let z=f0(r,h);return $&&M.size>0&&z.searchParams.set("_routes",e.filter(q=>M.has(q.route.id)).map(q=>q.route.id).join(",")),[z.pathname+z.search]},[h,f,s,o,v,e,r,l]),A=H.useMemo(()=>l0(E,o),[E,o]),F=y0(E);return H.createElement(H.Fragment,null,S.map(M=>H.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...t})),A.map(M=>H.createElement("link",{key:M,rel:"modulepreload",href:M,...t})),F.map(({key:M,link:$})=>H.createElement("link",{key:M,...$})))}function _0(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var By=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{By&&(window.__reactRouterVersion="7.6.0")}catch{}function E0({basename:r,children:e,window:t}){let s=H.useRef();s.current==null&&(s.current=ow({window:t,v5Compat:!0}));let o=s.current,[l,h]=H.useState({action:o.action,location:o.location}),f=H.useCallback(g=>{H.startTransition(()=>h(g))},[h]);return H.useLayoutEffect(()=>o.listen(f),[o,f]),H.createElement(Qw,{basename:r,children:e,location:l.location,navigationType:l.action,navigator:o})}var jy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qd=H.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:l,replace:h,state:f,target:g,to:v,preventScrollReset:E,viewTransition:S,...A},F){let{basename:M}=H.useContext(rr),$=typeof v=="string"&&jy.test(v),z,q=!1;if(typeof v=="string"&&$&&(z=v,By))try{let R=new URL(window.location.href),P=v.startsWith("//")?new URL(R.protocol+v):new URL(v),D=kr(P.pathname,M);P.origin===R.origin&&D!=null?v=D+P.search+P.hash:q=!0}catch{Jn(!1,`<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let te=Ow(v,{relative:o}),[Y,re,Ee]=m0(s,A),ge=S0(v,{replace:h,state:f,target:g,preventScrollReset:E,relative:o,viewTransition:S});function N(R){e&&e(R),R.defaultPrevented||ge(R)}let T=H.createElement("a",{...A,...Ee,href:z||te,onClick:q||l?e:N,ref:_0(F,re),target:g,"data-discover":!$&&t==="render"?"true":void 0});return Y&&!$?H.createElement(H.Fragment,null,T,H.createElement(g0,{page:te})):T});qd.displayName="Link";var w0=H.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:l,to:h,viewTransition:f,children:g,...v},E){let S=za(h,{relative:v.relative}),A=ss(),F=H.useContext(Ju),{navigator:M,basename:$}=H.useContext(rr),z=F!=null&&P0(S)&&f===!0,q=M.encodeLocation?M.encodeLocation(S).pathname:S.pathname,te=A.pathname,Y=F&&F.navigation&&F.navigation.location?F.navigation.location.pathname:null;t||(te=te.toLowerCase(),Y=Y?Y.toLowerCase():null,q=q.toLowerCase()),Y&&$&&(Y=kr(Y,$)||Y);const re=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let Ee=te===q||!o&&te.startsWith(q)&&te.charAt(re)==="/",ge=Y!=null&&(Y===q||!o&&Y.startsWith(q)&&Y.charAt(q.length)==="/"),N={isActive:Ee,isPending:ge,isTransitioning:z},T=Ee?e:void 0,R;typeof s=="function"?R=s(N):R=[s,Ee?"active":null,ge?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let P=typeof l=="function"?l(N):l;return H.createElement(qd,{...v,"aria-current":T,className:R,ref:E,style:P,to:h,viewTransition:f},typeof g=="function"?g(N):g)});w0.displayName="NavLink";var T0=H.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:l,method:h=Tu,action:f,onSubmit:g,relative:v,preventScrollReset:E,viewTransition:S,...A},F)=>{let M=A0(),$=k0(f,{relative:v}),z=h.toLowerCase()==="get"?"get":"post",q=typeof f=="string"&&jy.test(f),te=Y=>{if(g&&g(Y),Y.defaultPrevented)return;Y.preventDefault();let re=Y.nativeEvent.submitter,Ee=(re==null?void 0:re.getAttribute("formmethod"))||h;M(re||Y.currentTarget,{fetcherKey:e,method:Ee,navigate:t,replace:o,state:l,relative:v,preventScrollReset:E,viewTransition:S})};return H.createElement("form",{ref:F,method:z,action:$,onSubmit:s?g:te,...A,"data-discover":!q&&r==="render"?"true":void 0})});T0.displayName="Form";function I0(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $y(r){let e=H.useContext(Eo);return Xe(e,I0(r)),e}function S0(r,{target:e,replace:t,state:s,preventScrollReset:o,relative:l,viewTransition:h}={}){let f=Lw(),g=ss(),v=za(r,{relative:l});return H.useCallback(E=>{if(t0(E,e)){E.preventDefault();let S=t!==void 0?t:xa(g)===xa(v);f(r,{replace:S,state:s,preventScrollReset:o,relative:l,viewTransition:h})}},[g,f,v,t,s,e,r,o,l,h])}var R0=0,C0=()=>`__${String(++R0)}__`;function A0(){let{router:r}=$y("useSubmit"),{basename:e}=H.useContext(rr),t=qw();return H.useCallback(async(s,o={})=>{let{action:l,method:h,encType:f,formData:g,body:v}=i0(s,e);if(o.navigate===!1){let E=o.fetcherKey||C0();await r.fetch(E,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:g,body:v,formMethod:o.method||h,formEncType:o.encType||f,flushSync:o.flushSync})}else await r.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:g,body:v,formMethod:o.method||h,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,t])}function k0(r,{relative:e}={}){let{basename:t}=H.useContext(rr),s=H.useContext(Dr);Xe(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...za(r||".",{relative:e})},h=ss();if(r==null){l.search=h.search;let f=new URLSearchParams(l.search),g=f.getAll("index");if(g.some(E=>E==="")){f.delete("index"),g.filter(S=>S).forEach(S=>f.append("index",S));let E=f.toString();l.search=E?`?${E}`:""}}return(!r||r===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Ar([t,l.pathname])),xa(l)}function P0(r,e={}){let t=H.useContext(Ly);Xe(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=$y("useViewTransitionState"),o=za(r,{relative:e.relative});if(!t.isTransitioning)return!1;let l=kr(t.currentLocation.pathname,s)||t.currentLocation.pathname,h=kr(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Ou(o.pathname,h)!=null||Ou(o.pathname,l)!=null}[...d0];const N0=()=>{};var Xm={};/**
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
 */const Hy=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},x0=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},qy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,g=o+2<r.length,v=g?r[o+2]:0,E=l>>2,S=(l&3)<<4|f>>4;let A=(f&15)<<2|v>>6,F=v&63;g||(F=64,h||(A=64)),s.push(t[E],t[S],t[A],t[F])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Hy(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):x0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const v=o<r.length?t[r.charAt(o)]:64;++o;const S=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||v==null||S==null)throw new D0;const A=l<<2|f>>4;if(s.push(A),v!==64){const F=f<<4&240|v>>2;if(s.push(F),S!==64){const M=v<<6&192|S;s.push(M)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class D0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const O0=function(r){const e=Hy(r);return qy.encodeByteArray(e,!0)},Lu=function(r){return O0(r).replace(/\./g,"")},Wy=function(r){try{return qy.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function L0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const V0=()=>L0().__FIREBASE_DEFAULTS__,M0=()=>{if(typeof process>"u"||typeof Xm>"u")return;const r=Xm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},b0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Wy(r[1]);return e&&JSON.parse(e)},ec=()=>{try{return N0()||V0()||M0()||b0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Ky=r=>{var e,t;return(t=(e=ec())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Gy=r=>{const e=Ky(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Qy=()=>{var r;return(r=ec())===null||r===void 0?void 0:r.config},Yy=r=>{var e;return(e=ec())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class F0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Xy(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Lu(JSON.stringify(t)),Lu(JSON.stringify(h)),""].join(".")}/**
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
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function U0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function z0(){var r;const e=(r=ec())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function B0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function j0(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function $0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function H0(){const r=bt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function q0(){return!z0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function W0(){try{return typeof indexedDB=="object"}catch{return!1}}function K0(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const G0="FirebaseError";class ir extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=G0,Object.setPrototypeOf(this,ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ba.prototype.create)}}class Ba{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?Q0(l,s):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new ir(o,f,s)}}function Q0(r,e){return r.replace(Y0,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Y0=/\{\$([^}]+)}/g;function X0(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ts(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(Jm(l)&&Jm(h)){if(!ts(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Jm(r){return r!==null&&typeof r=="object"}/**
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
 */function ja(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function J0(r,e){const t=new Z0(r,e);return t.subscribe.bind(t)}class Z0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");eT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Yh),o.error===void 0&&(o.error=Yh),o.complete===void 0&&(o.complete=Yh);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Yh(){}/**
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
 */function Ei(r){return r&&r._delegate?r._delegate:r}/**
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
 */function $a(r){return r.endsWith(".cloudworkstations.dev")}async function Wd(r){return(await fetch(r,{credentials:"include"})).ok}class fi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qi="[DEFAULT]";/**
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
 */class tT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new F0;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rT(e))try{this.getOrInitializeService({instanceIdentifier:Qi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=Qi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qi){return this.instances.has(e)}getOptions(e=Qi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:nT(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Qi){return this.component?this.component.multipleInstances?e:Qi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nT(r){return r===Qi?void 0:r}function rT(r){return r.instantiationMode==="EAGER"}/**
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
 */class iT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new tT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ae;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ae||(Ae={}));const sT={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},oT=Ae.INFO,aT={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},lT=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=aT[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kd{constructor(e){this.name=e,this._logLevel=oT,this._logHandler=lT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const uT=(r,e)=>e.some(t=>r instanceof t);let Zm,eg;function cT(){return Zm||(Zm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hT(){return eg||(eg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jy=new WeakMap,dd=new WeakMap,Zy=new WeakMap,Xh=new WeakMap,Gd=new WeakMap;function dT(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(ci(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Jy.set(t,r)}).catch(()=>{}),Gd.set(e,r),e}function fT(r){if(dd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});dd.set(r,e)}let fd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return dd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Zy.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ci(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function pT(r){fd=r(fd)}function mT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(Jh(this),e,...t);return Zy.set(s,e.sort?e.sort():[e]),ci(s)}:hT().includes(r)?function(...e){return r.apply(Jh(this),e),ci(Jy.get(this))}:function(...e){return ci(r.apply(Jh(this),e))}}function gT(r){return typeof r=="function"?mT(r):(r instanceof IDBTransaction&&fT(r),uT(r,cT())?new Proxy(r,fd):r)}function ci(r){if(r instanceof IDBRequest)return dT(r);if(Xh.has(r))return Xh.get(r);const e=gT(r);return e!==r&&(Xh.set(r,e),Gd.set(e,r)),e}const Jh=r=>Gd.get(r);function yT(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=ci(h);return s&&h.addEventListener("upgradeneeded",g=>{s(ci(h.result),g.oldVersion,g.newVersion,ci(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),f}const vT=["get","getKey","getAll","getAllKeys","count"],_T=["put","add","delete","clear"],Zh=new Map;function tg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Zh.get(e))return Zh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=_T.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||vT.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return s&&(v=v.index(f.shift())),(await Promise.all([v[t](...f),o&&g.done]))[0]};return Zh.set(e,l),l}pT(r=>({...r,get:(e,t,s)=>tg(e,t)||r.get(e,t,s),has:(e,t)=>!!tg(e,t)||r.has(e,t)}));/**
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
 */class ET{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(wT(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function wT(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pd="@firebase/app",ng="0.12.1";/**
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
 */const Pr=new Kd("@firebase/app"),TT="@firebase/app-compat",IT="@firebase/analytics-compat",ST="@firebase/analytics",RT="@firebase/app-check-compat",CT="@firebase/app-check",AT="@firebase/auth",kT="@firebase/auth-compat",PT="@firebase/database",NT="@firebase/data-connect",xT="@firebase/database-compat",DT="@firebase/functions",OT="@firebase/functions-compat",LT="@firebase/installations",VT="@firebase/installations-compat",MT="@firebase/messaging",bT="@firebase/messaging-compat",FT="@firebase/performance",UT="@firebase/performance-compat",zT="@firebase/remote-config",BT="@firebase/remote-config-compat",jT="@firebase/storage",$T="@firebase/storage-compat",HT="@firebase/firestore",qT="@firebase/vertexai",WT="@firebase/firestore-compat",KT="firebase",GT="11.7.1";/**
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
 */const md="[DEFAULT]",QT={[pd]:"fire-core",[TT]:"fire-core-compat",[ST]:"fire-analytics",[IT]:"fire-analytics-compat",[CT]:"fire-app-check",[RT]:"fire-app-check-compat",[AT]:"fire-auth",[kT]:"fire-auth-compat",[PT]:"fire-rtdb",[NT]:"fire-data-connect",[xT]:"fire-rtdb-compat",[DT]:"fire-fn",[OT]:"fire-fn-compat",[LT]:"fire-iid",[VT]:"fire-iid-compat",[MT]:"fire-fcm",[bT]:"fire-fcm-compat",[FT]:"fire-perf",[UT]:"fire-perf-compat",[zT]:"fire-rc",[BT]:"fire-rc-compat",[jT]:"fire-gcs",[$T]:"fire-gcs-compat",[HT]:"fire-fst",[WT]:"fire-fst-compat",[qT]:"fire-vertex","fire-js":"fire-js",[KT]:"fire-js-all"};/**
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
 */const Vu=new Map,YT=new Map,gd=new Map;function rg(r,e){try{r.container.addComponent(e)}catch(t){Pr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function ns(r){const e=r.name;if(gd.has(e))return Pr.debug(`There were multiple attempts to register component ${e}.`),!1;gd.set(e,r);for(const t of Vu.values())rg(t,r);for(const t of YT.values())rg(t,r);return!0}function tc(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function yn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const XT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hi=new Ba("app","Firebase",XT);/**
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
 */class JT{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new fi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hi.create("app-deleted",{appName:this._name})}}/**
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
 */const os=GT;function ev(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:md,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw hi.create("bad-app-name",{appName:String(o)});if(t||(t=Qy()),!t)throw hi.create("no-options");const l=Vu.get(o);if(l){if(ts(t,l.options)&&ts(s,l.config))return l;throw hi.create("duplicate-app",{appName:o})}const h=new iT(o);for(const g of gd.values())h.addComponent(g);const f=new JT(t,s,h);return Vu.set(o,f),f}function Qd(r=md){const e=Vu.get(r);if(!e&&r===md&&Qy())return ev();if(!e)throw hi.create("no-app",{appName:r});return e}function Qn(r,e,t){var s;let o=(s=QT[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pr.warn(f.join(" "));return}ns(new fi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const ZT="firebase-heartbeat-database",eI=1,Da="firebase-heartbeat-store";let ed=null;function tv(){return ed||(ed=yT(ZT,eI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Da)}catch(t){console.warn(t)}}}}).catch(r=>{throw hi.create("idb-open",{originalErrorMessage:r.message})})),ed}async function tI(r){try{const t=(await tv()).transaction(Da),s=await t.objectStore(Da).get(nv(r));return await t.done,s}catch(e){if(e instanceof ir)Pr.warn(e.message);else{const t=hi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pr.warn(t.message)}}}async function ig(r,e){try{const s=(await tv()).transaction(Da,"readwrite");await s.objectStore(Da).put(e,nv(r)),await s.done}catch(t){if(t instanceof ir)Pr.warn(t.message);else{const s=hi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Pr.warn(s.message)}}}function nv(r){return`${r.name}!${r.options.appId}`}/**
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
 */const nI=1024,rI=30;class iI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new oI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=sg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>rI){const h=aI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Pr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=sg(),{heartbeatsToSend:s,unsentEntries:o}=sI(this._heartbeatsCache.heartbeats),l=Lu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Pr.warn(t),""}}}function sg(){return new Date().toISOString().substring(0,10)}function sI(r,e=nI){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),og(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),og(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class oI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return W0()?K0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await tI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ig(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ig(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function og(r){return Lu(JSON.stringify({version:2,heartbeats:r})).length}function aI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function lI(r){ns(new fi("platform-logger",e=>new ET(e),"PRIVATE")),ns(new fi("heartbeat",e=>new iI(e),"PRIVATE")),Qn(pd,ng,r),Qn(pd,ng,"esm2017"),Qn("fire-js","")}lI("");function Yd(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function rv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uI=rv,iv=new Ba("auth","Firebase",rv());/**
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
 */const Mu=new Kd("@firebase/auth");function cI(r,...e){Mu.logLevel<=Ae.WARN&&Mu.warn(`Auth (${os}): ${r}`,...e)}function Su(r,...e){Mu.logLevel<=Ae.ERROR&&Mu.error(`Auth (${os}): ${r}`,...e)}/**
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
 */function Zn(r,...e){throw Jd(r,...e)}function Vn(r,...e){return Jd(r,...e)}function Xd(r,e,t){const s=Object.assign(Object.assign({},uI()),{[e]:t});return new Ba("auth","Firebase",s).create(e,{appName:r.name})}function Ji(r){return Xd(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hI(r,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Zn(r,"argument-error"),Xd(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jd(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return iv.create(r,...e)}function _e(r,e,...t){if(!r)throw Jd(e,...t)}function Rr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Su(e),new Error(e)}function Nr(r,e){r||Rr(e)}/**
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
 */function yd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function dI(){return ag()==="http:"||ag()==="https:"}function ag(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function fI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dI()||j0()||"connection"in navigator)?navigator.onLine:!0}function pI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Ha{constructor(e,t){this.shortDelay=e,this.longDelay=t,Nr(t>e,"Short delay should be less than long delay!"),this.isMobile=U0()||$0()}get(){return fI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zd(r,e){Nr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class sv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yI=new Ha(3e4,6e4);function ef(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function wo(r,e,t,s,o={}){return ov(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const f=ja(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const v=Object.assign({method:e,headers:g},l);return B0()||(v.referrerPolicy="no-referrer"),r.emulatorConfig&&$a(r.emulatorConfig.host)&&(v.credentials="include"),sv.fetch()(await av(r,r.config.apiHost,t,f),v)})}async function ov(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},mI),e);try{const o=new _I(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw pu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,v]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw pu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw pu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw pu(r,"user-disabled",h);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Xd(r,E,v);Zn(r,E)}}catch(o){if(o instanceof ir)throw o;Zn(r,"network-request-failed",{message:String(o)})}}async function vI(r,e,t,s,o={}){const l=await wo(r,e,t,s,o);return"mfaPendingCredential"in l&&Zn(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function av(r,e,t,s){const o=`${e}${t}?${s}`,l=r,h=l.config.emulator?Zd(r.config,o):`${r.config.apiScheme}://${o}`;return gI.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}class _I{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Vn(this.auth,"network-request-failed")),yI.get())})}}function pu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Vn(r,e,s);return o.customData._tokenResponse=t,o}/**
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
 */async function EI(r,e){return wo(r,"POST","/v1/accounts:delete",e)}async function bu(r,e){return wo(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ca(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wI(r,e=!1){const t=Ei(r),s=await t.getIdToken(e),o=tf(s);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:Ca(td(o.auth_time)),issuedAtTime:Ca(td(o.iat)),expirationTime:Ca(td(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function td(r){return Number(r)*1e3}function tf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Su("JWT malformed, contained fewer than 3 sections"),null;try{const o=Wy(t);return o?JSON.parse(o):(Su("Failed to decode base64 JWT payload"),null)}catch(o){return Su("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function lg(r){const e=tf(r);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Oa(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ir&&TI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function TI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class II{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ca(this.lastLoginAt),this.creationTime=Ca(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fu(r){var e;const t=r.auth,s=await r.getIdToken(),o=await Oa(r,bu(t,{idToken:s}));_e(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?lv(l.providerUserInfo):[],f=RI(r.providerData,h),g=r.isAnonymous,v=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),E=g?v:!1,S={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new vd(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(r,S)}async function SI(r){const e=Ei(r);await Fu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RI(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function lv(r){return r.map(e=>{var{providerId:t}=e,s=Yd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function CI(r,e){const t=await ov(r,{},async()=>{const s=ja({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await av(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",sv.fetch()(h,{method:"POST",headers:f,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function AI(r,e){return wo(r,"POST","/v2/accounts:revokeToken",ef(r,e))}/**
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
 */class io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=lg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await CI(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new io;return s&&(_e(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(_e(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new io,this.toJSON())}_performRefresh(){return Rr("not implemented")}}/**
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
 */function ii(r,e){_e(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class On{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=Yd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new II(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new vd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Oa(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return wI(this,e)}reload(){return SI(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new On(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Fu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yn(this.auth.app))return Promise.reject(Ji(this.auth));const e=await this.getIdToken();return await Oa(this,EI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,h,f,g,v,E;const S=(s=t.displayName)!==null&&s!==void 0?s:void 0,A=(o=t.email)!==null&&o!==void 0?o:void 0,F=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,M=(h=t.photoURL)!==null&&h!==void 0?h:void 0,$=(f=t.tenantId)!==null&&f!==void 0?f:void 0,z=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,q=(v=t.createdAt)!==null&&v!==void 0?v:void 0,te=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:Y,emailVerified:re,isAnonymous:Ee,providerData:ge,stsTokenManager:N}=t;_e(Y&&N,e,"internal-error");const T=io.fromJSON(this.name,N);_e(typeof Y=="string",e,"internal-error"),ii(S,e.name),ii(A,e.name),_e(typeof re=="boolean",e,"internal-error"),_e(typeof Ee=="boolean",e,"internal-error"),ii(F,e.name),ii(M,e.name),ii($,e.name),ii(z,e.name),ii(q,e.name),ii(te,e.name);const R=new On({uid:Y,auth:e,email:A,emailVerified:re,displayName:S,isAnonymous:Ee,photoURL:M,phoneNumber:F,tenantId:$,stsTokenManager:T,createdAt:q,lastLoginAt:te});return ge&&Array.isArray(ge)&&(R.providerData=ge.map(P=>Object.assign({},P))),z&&(R._redirectEventId=z),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new io;o.updateFromServerResponse(t);const l=new On({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Fu(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?lv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new io;f.updateFromIdToken(s);const g=new On({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new vd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,v),g}}/**
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
 */const ug=new Map;function Cr(r){Nr(r instanceof Function,"Expected a class definition");let e=ug.get(r);return e?(Nr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,ug.set(r,e),e)}/**
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
 */class uv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}uv.type="NONE";const cg=uv;/**
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
 */function Ru(r,e,t){return`firebase:${r}:${e}:${t}`}class so{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Ru(this.userKey,o.apiKey,l),this.fullPersistenceKey=Ru("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await bu(this.auth,{idToken:e}).catch(()=>{});return t?On._fromGetAccountInfoResponse(this.auth,t,e):null}return On._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new so(Cr(cg),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let l=o[0]||Cr(cg);const h=Ru(s,e.config.apiKey,e.name);let f=null;for(const v of t)try{const E=await v._get(h);if(E){let S;if(typeof E=="string"){const A=await bu(e,{idToken:E}).catch(()=>{});if(!A)break;S=await On._fromGetAccountInfoResponse(e,A,E)}else S=On._fromJSON(e,E);v!==l&&(f=S),l=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new so(l,e,s):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async v=>{if(v!==l)try{await v._remove(h)}catch{}})),new so(l,e,s))}}/**
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
 */function hg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mv(e))return"Blackberry";if(gv(e))return"Webos";if(hv(e))return"Safari";if((e.includes("chrome/")||dv(e))&&!e.includes("edge/"))return"Chrome";if(pv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function cv(r=bt()){return/firefox\//i.test(r)}function hv(r=bt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dv(r=bt()){return/crios\//i.test(r)}function fv(r=bt()){return/iemobile/i.test(r)}function pv(r=bt()){return/android/i.test(r)}function mv(r=bt()){return/blackberry/i.test(r)}function gv(r=bt()){return/webos/i.test(r)}function nf(r=bt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function kI(r=bt()){var e;return nf(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PI(){return H0()&&document.documentMode===10}function yv(r=bt()){return nf(r)||pv(r)||gv(r)||mv(r)||/windows phone/i.test(r)||fv(r)}/**
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
 */function vv(r,e=[]){let t;switch(r){case"Browser":t=hg(bt());break;case"Worker":t=`${hg(bt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${os}/${s}`}/**
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
 */class NI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function xI(r,e={}){return wo(r,"GET","/v2/passwordPolicy",ef(r,e))}/**
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
 */const DI=6;class OI{constructor(e){var t,s,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:DI,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,h,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class LI{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dg(this),this.idTokenSubscription=new dg(this),this.beforeStateQueue=new NI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Cr(t)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await so.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await bu(this,{idToken:e}),s=await On._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(yn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yn(this.app))return Promise.reject(Ji(this));const t=e?Ei(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yn(this.app)?Promise.reject(Ji(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yn(this.app)?Promise.reject(Ji(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xI(this),t=new OI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ba("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await AI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Cr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await so.create(this,[Cr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(yn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&cI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function nc(r){return Ei(r)}class dg{constructor(e){this.auth=e,this.observer=null,this.addObserver=J0(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let rf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VI(r){rf=r}function MI(r){return rf.loadJS(r)}function bI(){return rf.gapiScript}function FI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function UI(r,e){const t=tc(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(ts(l,e??{}))return o;Zn(o,"already-initialized")}return t.initialize({options:e})}function zI(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Cr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function BI(r,e,t){const s=nc(r);_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=_v(e),{host:h,port:f}=jI(e),g=f===null?"":`:${f}`,v={url:`${l}//${h}${g}/`},E=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){_e(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),_e(ts(v,s.config.emulator)&&ts(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,$I(),$a(h)&&Wd(`${l}//${h}${g}`)}function _v(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function jI(r){const e=_v(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:fg(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:fg(h)}}}function fg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function $I(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Ev{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rr("not implemented")}_getIdTokenResponse(e){return Rr("not implemented")}_linkToIdToken(e,t){return Rr("not implemented")}_getReauthenticationResolver(e){return Rr("not implemented")}}/**
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
 */async function oo(r,e){return vI(r,"POST","/v1/accounts:signInWithIdp",ef(r,e))}/**
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
 */const HI="http://localhost";class rs extends Ev{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Zn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=Yd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new rs(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return oo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,oo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,oo(e,t)}buildRequest(){const e={requestUri:HI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ja(t)}return e}}/**
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
 */class sf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qa extends sf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class si extends qa{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return si.credential(e.oauthAccessToken)}catch{return null}}}si.FACEBOOK_SIGN_IN_METHOD="facebook.com";si.PROVIDER_ID="facebook.com";/**
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
 */class Sr extends qa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rs._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Sr.credential(t,s)}catch{return null}}}Sr.GOOGLE_SIGN_IN_METHOD="google.com";Sr.PROVIDER_ID="google.com";/**
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
 */class oi extends qa{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oi.credential(e.oauthAccessToken)}catch{return null}}}oi.GITHUB_SIGN_IN_METHOD="github.com";oi.PROVIDER_ID="github.com";/**
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
 */class ai extends qa{constructor(){super("twitter.com")}static credential(e,t){return rs._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ai.credential(t,s)}catch{return null}}}ai.TWITTER_SIGN_IN_METHOD="twitter.com";ai.PROVIDER_ID="twitter.com";/**
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
 */class co{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await On._fromIdTokenResponse(e,s,o),h=pg(s);return new co({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=pg(s);return new co({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function pg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Uu extends ir{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Uu.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Uu(e,t,s,o)}}function wv(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Uu._fromErrorAndOperation(r,l,e,s):l})}async function qI(r,e,t=!1){const s=await Oa(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return co._forOperation(r,"link",s)}/**
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
 */async function WI(r,e,t=!1){const{auth:s}=r;if(yn(s.app))return Promise.reject(Ji(s));const o="reauthenticate";try{const l=await Oa(r,wv(s,o,e,r),t);_e(l.idToken,s,"internal-error");const h=tf(l.idToken);_e(h,s,"internal-error");const{sub:f}=h;return _e(r.uid===f,s,"user-mismatch"),co._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Zn(s,"user-mismatch"),l}}/**
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
 */async function KI(r,e,t=!1){if(yn(r.app))return Promise.reject(Ji(r));const s="signIn",o=await wv(r,s,e),l=await co._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}function GI(r,e,t,s){return Ei(r).onIdTokenChanged(e,t,s)}function QI(r,e,t){return Ei(r).beforeAuthStateChanged(e,t)}const zu="__sak";/**
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
 */class Tv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zu,"1"),this.storage.removeItem(zu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const YI=1e3,XI=10;class Iv extends Tv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);PI()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,XI):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},YI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Iv.type="LOCAL";const JI=Iv;/**
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
 */class Sv extends Tv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Sv.type="SESSION";const Rv=Sv;/**
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
 */function ZI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class rc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new rc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(h).map(async v=>v(t.origin,l)),g=await ZI(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rc.receivers=[];/**
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
 */function of(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class eS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const v=of("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(S){const A=S;if(A.data.eventId===v)switch(A.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(A.data.response);break;default:clearTimeout(E),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Yn(){return window}function tS(r){Yn().location.href=r}/**
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
 */function Cv(){return typeof Yn().WorkerGlobalScope<"u"&&typeof Yn().importScripts=="function"}async function nS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rS(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function iS(){return Cv()?self:null}/**
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
 */const Av="firebaseLocalStorageDb",sS=1,Bu="firebaseLocalStorage",kv="fbase_key";class Wa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ic(r,e){return r.transaction([Bu],e?"readwrite":"readonly").objectStore(Bu)}function oS(){const r=indexedDB.deleteDatabase(Av);return new Wa(r).toPromise()}function _d(){const r=indexedDB.open(Av,sS);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Bu,{keyPath:kv})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Bu)?e(s):(s.close(),await oS(),e(await _d()))})})}async function mg(r,e,t){const s=ic(r,!0).put({[kv]:e,value:t});return new Wa(s).toPromise()}async function aS(r,e){const t=ic(r,!1).get(e),s=await new Wa(t).toPromise();return s===void 0?null:s.value}function gg(r,e){const t=ic(r,!0).delete(e);return new Wa(t).toPromise()}const lS=800,uS=3;class Pv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _d(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>uS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rc._getInstance(iS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await nS(),!this.activeServiceWorker)return;this.sender=new eS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _d();return await mg(e,zu,"1"),await gg(e,zu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>mg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>aS(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>gg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=ic(o,!1).getAll();return new Wa(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pv.type="LOCAL";const cS=Pv;new Ha(3e4,6e4);/**
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
 */function Nv(r,e){return e?Cr(e):(_e(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class af extends Ev{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return oo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return oo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function hS(r){return KI(r.auth,new af(r),r.bypassAuthState)}function dS(r){const{auth:e,user:t}=r;return _e(t,e,"internal-error"),WI(t,new af(r),r.bypassAuthState)}async function fS(r){const{auth:e,user:t}=r;return _e(t,e,"internal-error"),qI(t,new af(r),r.bypassAuthState)}/**
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
 */class xv{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hS;case"linkViaPopup":case"linkViaRedirect":return fS;case"reauthViaPopup":case"reauthViaRedirect":return dS;default:Zn(this.auth,"internal-error")}}resolve(e){Nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pS=new Ha(2e3,1e4);async function mS(r,e,t){if(yn(r.app))return Promise.reject(Vn(r,"operation-not-supported-in-this-environment"));const s=nc(r);hI(r,e,sf);const o=Nv(s,t);return new Yi(s,"signInViaPopup",e,o).executeNotNull()}class Yi extends xv{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,Yi.currentPopupAction&&Yi.currentPopupAction.cancel(),Yi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Nr(this.filter.length===1,"Popup operations only handle one event");const e=of();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pS.get())};e()}}Yi.currentPopupAction=null;/**
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
 */const gS="pendingRedirect",Cu=new Map;class yS extends xv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Cu.get(this.auth._key());if(!e){try{const s=await vS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Cu.set(this.auth._key(),e)}return this.bypassAuthState||Cu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vS(r,e){const t=wS(e),s=ES(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function _S(r,e){Cu.set(r._key(),e)}function ES(r){return Cr(r._redirectPersistence)}function wS(r){return Ru(gS,r.config.apiKey,r.name)}async function TS(r,e,t=!1){if(yn(r.app))return Promise.reject(Ji(r));const s=nc(r),o=Nv(s,e),h=await new yS(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const IS=10*60*1e3;class SS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RS(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Dv(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Vn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IS&&this.cachedEventUids.clear(),this.cachedEventUids.has(yg(e))}saveEventToCache(e){this.cachedEventUids.add(yg(e)),this.lastProcessedEventTime=Date.now()}}function yg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Dv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RS(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dv(r);default:return!1}}/**
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
 */async function CS(r,e={}){return wo(r,"GET","/v1/projects",e)}/**
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
 */const AS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kS=/^https?/;async function PS(r){if(r.config.emulator)return;const{authorizedDomains:e}=await CS(r);for(const t of e)try{if(NS(t))return}catch{}Zn(r,"unauthorized-domain")}function NS(r){const e=yd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!kS.test(t))return!1;if(AS.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const xS=new Ha(3e4,6e4);function vg(){const r=Yn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function DS(r){return new Promise((e,t)=>{var s,o,l;function h(){vg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vg(),t(Vn(r,"network-request-failed"))},timeout:xS.get()})}if(!((o=(s=Yn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=Yn().gapi)===null||l===void 0)&&l.load)h();else{const f=FI("iframefcb");return Yn()[f]=()=>{gapi.load?h():t(Vn(r,"network-request-failed"))},MI(`${bI()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw Au=null,e})}let Au=null;function OS(r){return Au=Au||DS(r),Au}/**
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
 */const LS=new Ha(5e3,15e3),VS="__/auth/iframe",MS="emulator/auth/iframe",bS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function US(r){const e=r.config;_e(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Zd(e,MS):`https://${r.config.authDomain}/${VS}`,s={apiKey:e.apiKey,appName:r.name,v:os},o=FS.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${ja(s).slice(1)}`}async function zS(r){const e=await OS(r),t=Yn().gapi;return _e(t,r,"internal-error"),e.open({where:document.body,url:US(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bS,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=Vn(r,"network-request-failed"),f=Yn().setTimeout(()=>{l(h)},LS.get());function g(){Yn().clearTimeout(f),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const BS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jS=500,$S=600,HS="_blank",qS="http://localhost";class _g{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WS(r,e,t,s=jS,o=$S){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const g=Object.assign(Object.assign({},BS),{width:s.toString(),height:o.toString(),top:l,left:h}),v=bt().toLowerCase();t&&(f=dv(v)?HS:t),cv(v)&&(e=e||qS,g.scrollbars="yes");const E=Object.entries(g).reduce((A,[F,M])=>`${A}${F}=${M},`,"");if(kI(v)&&f!=="_self")return KS(e||"",f),new _g(null);const S=window.open(e||"",f,E);_e(S,r,"popup-blocked");try{S.focus()}catch{}return new _g(S)}function KS(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const GS="__/auth/handler",QS="emulator/auth/handler",YS=encodeURIComponent("fac");async function Eg(r,e,t,s,o,l){_e(r.config.authDomain,r,"auth-domain-config-required"),_e(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:os,eventId:o};if(e instanceof sf){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",X0(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,S]of Object.entries({}))h[E]=S}if(e instanceof qa){const E=e.getScopes().filter(S=>S!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const g=await r._getAppCheckToken(),v=g?`#${YS}=${encodeURIComponent(g)}`:"";return`${XS(r)}?${ja(f).slice(1)}${v}`}function XS({config:r}){return r.emulator?Zd(r,QS):`https://${r.authDomain}/${GS}`}/**
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
 */const nd="webStorageSupport";class JS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rv,this._completeRedirectFn=TS,this._overrideRedirectResult=_S}async _openPopup(e,t,s,o){var l;Nr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await Eg(e,t,s,yd(),o);return WS(e,h,of())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await Eg(e,t,s,yd(),o);return tS(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Nr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await zS(e),s=new SS(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nd,{type:nd},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[nd];h!==void 0&&t(!!h),Zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=PS(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return yv()||hv()||nf()}}const ZS=JS;var wg="@firebase/auth",Tg="1.10.2";/**
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
 */class eR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tR(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nR(r){ns(new fi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=s.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vv(r)},v=new LI(s,o,l,g);return zI(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ns(new fi("auth-internal",e=>{const t=nc(e.getProvider("auth").getImmediate());return(s=>new eR(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qn(wg,Tg,tR(r)),Qn(wg,Tg,"esm2017")}/**
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
 */const rR=5*60,iR=Yy("authIdTokenMaxAge")||rR;let Ig=null;const sR=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>iR)return;const o=t==null?void 0:t.token;Ig!==o&&(Ig=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function oR(r=Qd()){const e=tc(r,"auth");if(e.isInitialized())return e.getImmediate();const t=UI(r,{popupRedirectResolver:ZS,persistence:[cS,JI,Rv]}),s=Yy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=sR(l.toString());QI(t,h,()=>h(t.currentUser)),GI(t,f=>h(f))}}const o=Ky("auth");return o&&BI(t,`http://${o}`),t}function aR(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}VI({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=Vn("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",aR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nR("Browser");var lR="firebase",uR="11.7.1";/**
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
 */Qn(lR,uR,"app");var Sg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var di,Ov;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,T){function R(){}R.prototype=T.prototype,N.D=T.prototype,N.prototype=new R,N.prototype.constructor=N,N.C=function(P,D,L){for(var C=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)C[tt-2]=arguments[tt];return T.prototype[D].apply(P,C)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,T,R){R||(R=0);var P=Array(16);if(typeof T=="string")for(var D=0;16>D;++D)P[D]=T.charCodeAt(R++)|T.charCodeAt(R++)<<8|T.charCodeAt(R++)<<16|T.charCodeAt(R++)<<24;else for(D=0;16>D;++D)P[D]=T[R++]|T[R++]<<8|T[R++]<<16|T[R++]<<24;T=N.g[0],R=N.g[1],D=N.g[2];var L=N.g[3],C=T+(L^R&(D^L))+P[0]+3614090360&4294967295;T=R+(C<<7&4294967295|C>>>25),C=L+(D^T&(R^D))+P[1]+3905402710&4294967295,L=T+(C<<12&4294967295|C>>>20),C=D+(R^L&(T^R))+P[2]+606105819&4294967295,D=L+(C<<17&4294967295|C>>>15),C=R+(T^D&(L^T))+P[3]+3250441966&4294967295,R=D+(C<<22&4294967295|C>>>10),C=T+(L^R&(D^L))+P[4]+4118548399&4294967295,T=R+(C<<7&4294967295|C>>>25),C=L+(D^T&(R^D))+P[5]+1200080426&4294967295,L=T+(C<<12&4294967295|C>>>20),C=D+(R^L&(T^R))+P[6]+2821735955&4294967295,D=L+(C<<17&4294967295|C>>>15),C=R+(T^D&(L^T))+P[7]+4249261313&4294967295,R=D+(C<<22&4294967295|C>>>10),C=T+(L^R&(D^L))+P[8]+1770035416&4294967295,T=R+(C<<7&4294967295|C>>>25),C=L+(D^T&(R^D))+P[9]+2336552879&4294967295,L=T+(C<<12&4294967295|C>>>20),C=D+(R^L&(T^R))+P[10]+4294925233&4294967295,D=L+(C<<17&4294967295|C>>>15),C=R+(T^D&(L^T))+P[11]+2304563134&4294967295,R=D+(C<<22&4294967295|C>>>10),C=T+(L^R&(D^L))+P[12]+1804603682&4294967295,T=R+(C<<7&4294967295|C>>>25),C=L+(D^T&(R^D))+P[13]+4254626195&4294967295,L=T+(C<<12&4294967295|C>>>20),C=D+(R^L&(T^R))+P[14]+2792965006&4294967295,D=L+(C<<17&4294967295|C>>>15),C=R+(T^D&(L^T))+P[15]+1236535329&4294967295,R=D+(C<<22&4294967295|C>>>10),C=T+(D^L&(R^D))+P[1]+4129170786&4294967295,T=R+(C<<5&4294967295|C>>>27),C=L+(R^D&(T^R))+P[6]+3225465664&4294967295,L=T+(C<<9&4294967295|C>>>23),C=D+(T^R&(L^T))+P[11]+643717713&4294967295,D=L+(C<<14&4294967295|C>>>18),C=R+(L^T&(D^L))+P[0]+3921069994&4294967295,R=D+(C<<20&4294967295|C>>>12),C=T+(D^L&(R^D))+P[5]+3593408605&4294967295,T=R+(C<<5&4294967295|C>>>27),C=L+(R^D&(T^R))+P[10]+38016083&4294967295,L=T+(C<<9&4294967295|C>>>23),C=D+(T^R&(L^T))+P[15]+3634488961&4294967295,D=L+(C<<14&4294967295|C>>>18),C=R+(L^T&(D^L))+P[4]+3889429448&4294967295,R=D+(C<<20&4294967295|C>>>12),C=T+(D^L&(R^D))+P[9]+568446438&4294967295,T=R+(C<<5&4294967295|C>>>27),C=L+(R^D&(T^R))+P[14]+3275163606&4294967295,L=T+(C<<9&4294967295|C>>>23),C=D+(T^R&(L^T))+P[3]+4107603335&4294967295,D=L+(C<<14&4294967295|C>>>18),C=R+(L^T&(D^L))+P[8]+1163531501&4294967295,R=D+(C<<20&4294967295|C>>>12),C=T+(D^L&(R^D))+P[13]+2850285829&4294967295,T=R+(C<<5&4294967295|C>>>27),C=L+(R^D&(T^R))+P[2]+4243563512&4294967295,L=T+(C<<9&4294967295|C>>>23),C=D+(T^R&(L^T))+P[7]+1735328473&4294967295,D=L+(C<<14&4294967295|C>>>18),C=R+(L^T&(D^L))+P[12]+2368359562&4294967295,R=D+(C<<20&4294967295|C>>>12),C=T+(R^D^L)+P[5]+4294588738&4294967295,T=R+(C<<4&4294967295|C>>>28),C=L+(T^R^D)+P[8]+2272392833&4294967295,L=T+(C<<11&4294967295|C>>>21),C=D+(L^T^R)+P[11]+1839030562&4294967295,D=L+(C<<16&4294967295|C>>>16),C=R+(D^L^T)+P[14]+4259657740&4294967295,R=D+(C<<23&4294967295|C>>>9),C=T+(R^D^L)+P[1]+2763975236&4294967295,T=R+(C<<4&4294967295|C>>>28),C=L+(T^R^D)+P[4]+1272893353&4294967295,L=T+(C<<11&4294967295|C>>>21),C=D+(L^T^R)+P[7]+4139469664&4294967295,D=L+(C<<16&4294967295|C>>>16),C=R+(D^L^T)+P[10]+3200236656&4294967295,R=D+(C<<23&4294967295|C>>>9),C=T+(R^D^L)+P[13]+681279174&4294967295,T=R+(C<<4&4294967295|C>>>28),C=L+(T^R^D)+P[0]+3936430074&4294967295,L=T+(C<<11&4294967295|C>>>21),C=D+(L^T^R)+P[3]+3572445317&4294967295,D=L+(C<<16&4294967295|C>>>16),C=R+(D^L^T)+P[6]+76029189&4294967295,R=D+(C<<23&4294967295|C>>>9),C=T+(R^D^L)+P[9]+3654602809&4294967295,T=R+(C<<4&4294967295|C>>>28),C=L+(T^R^D)+P[12]+3873151461&4294967295,L=T+(C<<11&4294967295|C>>>21),C=D+(L^T^R)+P[15]+530742520&4294967295,D=L+(C<<16&4294967295|C>>>16),C=R+(D^L^T)+P[2]+3299628645&4294967295,R=D+(C<<23&4294967295|C>>>9),C=T+(D^(R|~L))+P[0]+4096336452&4294967295,T=R+(C<<6&4294967295|C>>>26),C=L+(R^(T|~D))+P[7]+1126891415&4294967295,L=T+(C<<10&4294967295|C>>>22),C=D+(T^(L|~R))+P[14]+2878612391&4294967295,D=L+(C<<15&4294967295|C>>>17),C=R+(L^(D|~T))+P[5]+4237533241&4294967295,R=D+(C<<21&4294967295|C>>>11),C=T+(D^(R|~L))+P[12]+1700485571&4294967295,T=R+(C<<6&4294967295|C>>>26),C=L+(R^(T|~D))+P[3]+2399980690&4294967295,L=T+(C<<10&4294967295|C>>>22),C=D+(T^(L|~R))+P[10]+4293915773&4294967295,D=L+(C<<15&4294967295|C>>>17),C=R+(L^(D|~T))+P[1]+2240044497&4294967295,R=D+(C<<21&4294967295|C>>>11),C=T+(D^(R|~L))+P[8]+1873313359&4294967295,T=R+(C<<6&4294967295|C>>>26),C=L+(R^(T|~D))+P[15]+4264355552&4294967295,L=T+(C<<10&4294967295|C>>>22),C=D+(T^(L|~R))+P[6]+2734768916&4294967295,D=L+(C<<15&4294967295|C>>>17),C=R+(L^(D|~T))+P[13]+1309151649&4294967295,R=D+(C<<21&4294967295|C>>>11),C=T+(D^(R|~L))+P[4]+4149444226&4294967295,T=R+(C<<6&4294967295|C>>>26),C=L+(R^(T|~D))+P[11]+3174756917&4294967295,L=T+(C<<10&4294967295|C>>>22),C=D+(T^(L|~R))+P[2]+718787259&4294967295,D=L+(C<<15&4294967295|C>>>17),C=R+(L^(D|~T))+P[9]+3951481745&4294967295,N.g[0]=N.g[0]+T&4294967295,N.g[1]=N.g[1]+(D+(C<<21&4294967295|C>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+L&4294967295}s.prototype.u=function(N,T){T===void 0&&(T=N.length);for(var R=T-this.blockSize,P=this.B,D=this.h,L=0;L<T;){if(D==0)for(;L<=R;)o(this,N,L),L+=this.blockSize;if(typeof N=="string"){for(;L<T;)if(P[D++]=N.charCodeAt(L++),D==this.blockSize){o(this,P),D=0;break}}else for(;L<T;)if(P[D++]=N[L++],D==this.blockSize){o(this,P),D=0;break}}this.h=D,this.o+=T},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var T=1;T<N.length-8;++T)N[T]=0;var R=8*this.o;for(T=N.length-8;T<N.length;++T)N[T]=R&255,R/=256;for(this.u(N),N=Array(16),T=R=0;4>T;++T)for(var P=0;32>P;P+=8)N[R++]=this.g[T]>>>P&255;return N};function l(N,T){var R=f;return Object.prototype.hasOwnProperty.call(R,N)?R[N]:R[N]=T(N)}function h(N,T){this.h=T;for(var R=[],P=!0,D=N.length-1;0<=D;D--){var L=N[D]|0;P&&L==T||(R[D]=L,P=!1)}this.g=R}var f={};function g(N){return-128<=N&&128>N?l(N,function(T){return new h([T|0],0>T?-1:0)}):new h([N|0],0>N?-1:0)}function v(N){if(isNaN(N)||!isFinite(N))return S;if(0>N)return z(v(-N));for(var T=[],R=1,P=0;N>=R;P++)T[P]=N/R|0,R*=4294967296;return new h(T,0)}function E(N,T){if(N.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(N.charAt(0)=="-")return z(E(N.substring(1),T));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=v(Math.pow(T,8)),P=S,D=0;D<N.length;D+=8){var L=Math.min(8,N.length-D),C=parseInt(N.substring(D,D+L),T);8>L?(L=v(Math.pow(T,L)),P=P.j(L).add(v(C))):(P=P.j(R),P=P.add(v(C)))}return P}var S=g(0),A=g(1),F=g(16777216);r=h.prototype,r.m=function(){if($(this))return-z(this).m();for(var N=0,T=1,R=0;R<this.g.length;R++){var P=this.i(R);N+=(0<=P?P:4294967296+P)*T,T*=4294967296}return N},r.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(M(this))return"0";if($(this))return"-"+z(this).toString(N);for(var T=v(Math.pow(N,6)),R=this,P="";;){var D=re(R,T).g;R=q(R,D.j(T));var L=((0<R.g.length?R.g[0]:R.h)>>>0).toString(N);if(R=D,M(R))return L+P;for(;6>L.length;)L="0"+L;P=L+P}},r.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function M(N){if(N.h!=0)return!1;for(var T=0;T<N.g.length;T++)if(N.g[T]!=0)return!1;return!0}function $(N){return N.h==-1}r.l=function(N){return N=q(this,N),$(N)?-1:M(N)?0:1};function z(N){for(var T=N.g.length,R=[],P=0;P<T;P++)R[P]=~N.g[P];return new h(R,~N.h).add(A)}r.abs=function(){return $(this)?z(this):this},r.add=function(N){for(var T=Math.max(this.g.length,N.g.length),R=[],P=0,D=0;D<=T;D++){var L=P+(this.i(D)&65535)+(N.i(D)&65535),C=(L>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);P=C>>>16,L&=65535,C&=65535,R[D]=C<<16|L}return new h(R,R[R.length-1]&-2147483648?-1:0)};function q(N,T){return N.add(z(T))}r.j=function(N){if(M(this)||M(N))return S;if($(this))return $(N)?z(this).j(z(N)):z(z(this).j(N));if($(N))return z(this.j(z(N)));if(0>this.l(F)&&0>N.l(F))return v(this.m()*N.m());for(var T=this.g.length+N.g.length,R=[],P=0;P<2*T;P++)R[P]=0;for(P=0;P<this.g.length;P++)for(var D=0;D<N.g.length;D++){var L=this.i(P)>>>16,C=this.i(P)&65535,tt=N.i(D)>>>16,kt=N.i(D)&65535;R[2*P+2*D]+=C*kt,te(R,2*P+2*D),R[2*P+2*D+1]+=L*kt,te(R,2*P+2*D+1),R[2*P+2*D+1]+=C*tt,te(R,2*P+2*D+1),R[2*P+2*D+2]+=L*tt,te(R,2*P+2*D+2)}for(P=0;P<T;P++)R[P]=R[2*P+1]<<16|R[2*P];for(P=T;P<2*T;P++)R[P]=0;return new h(R,0)};function te(N,T){for(;(N[T]&65535)!=N[T];)N[T+1]+=N[T]>>>16,N[T]&=65535,T++}function Y(N,T){this.g=N,this.h=T}function re(N,T){if(M(T))throw Error("division by zero");if(M(N))return new Y(S,S);if($(N))return T=re(z(N),T),new Y(z(T.g),z(T.h));if($(T))return T=re(N,z(T)),new Y(z(T.g),T.h);if(30<N.g.length){if($(N)||$(T))throw Error("slowDivide_ only works with positive integers.");for(var R=A,P=T;0>=P.l(N);)R=Ee(R),P=Ee(P);var D=ge(R,1),L=ge(P,1);for(P=ge(P,2),R=ge(R,2);!M(P);){var C=L.add(P);0>=C.l(N)&&(D=D.add(R),L=C),P=ge(P,1),R=ge(R,1)}return T=q(N,D.j(T)),new Y(D,T)}for(D=S;0<=N.l(T);){for(R=Math.max(1,Math.floor(N.m()/T.m())),P=Math.ceil(Math.log(R)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),L=v(R),C=L.j(T);$(C)||0<C.l(N);)R-=P,L=v(R),C=L.j(T);M(L)&&(L=A),D=D.add(L),N=q(N,C)}return new Y(D,N)}r.A=function(N){return re(this,N).h},r.and=function(N){for(var T=Math.max(this.g.length,N.g.length),R=[],P=0;P<T;P++)R[P]=this.i(P)&N.i(P);return new h(R,this.h&N.h)},r.or=function(N){for(var T=Math.max(this.g.length,N.g.length),R=[],P=0;P<T;P++)R[P]=this.i(P)|N.i(P);return new h(R,this.h|N.h)},r.xor=function(N){for(var T=Math.max(this.g.length,N.g.length),R=[],P=0;P<T;P++)R[P]=this.i(P)^N.i(P);return new h(R,this.h^N.h)};function Ee(N){for(var T=N.g.length+1,R=[],P=0;P<T;P++)R[P]=N.i(P)<<1|N.i(P-1)>>>31;return new h(R,N.h)}function ge(N,T){var R=T>>5;T%=32;for(var P=N.g.length-R,D=[],L=0;L<P;L++)D[L]=0<T?N.i(L+R)>>>T|N.i(L+R+1)<<32-T:N.i(L+R);return new h(D,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Ov=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=E,di=h}).apply(typeof Sg<"u"?Sg:typeof self<"u"?self:typeof window<"u"?window:{});var mu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lv,Ia,Vv,ku,Ed,Mv,bv,Fv;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,y){return u==Array.prototype||u==Object.prototype||(u[p]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof mu=="object"&&mu];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,p){if(p)e:{var y=s;u=u.split(".");for(var w=0;w<u.length-1;w++){var V=u[w];if(!(V in y))break e;y=y[V]}u=u[u.length-1],w=y[u],p=p(w),p!=w&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var y=0,w=!1,V={next:function(){if(!w&&y<u.length){var j=y++;return{value:p(j,u[j]),done:!1}}return w=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function v(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function E(u,p,y){return u.call.apply(u.bind,arguments)}function S(u,p,y){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,w),u.apply(p,V)}}return function(){return u.apply(p,arguments)}}function A(u,p,y){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:S,A.apply(null,arguments)}function F(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function M(u,p){function y(){}y.prototype=p.prototype,u.aa=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(w,V,j){for(var Z=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)Z[Fe-2]=arguments[Fe];return p.prototype[V].apply(w,Z)}}function $(u){const p=u.length;if(0<p){const y=Array(p);for(let w=0;w<p;w++)y[w]=u[w];return y}return[]}function z(u,p){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(g(w)){const V=u.length||0,j=w.length||0;u.length=V+j;for(let Z=0;Z<j;Z++)u[V+Z]=w[Z]}else u.push(w)}}class q{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function te(u){return/^[\s\xa0]*$/.test(u)}function Y(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function re(u){return re[" "](u),u}re[" "]=function(){};var Ee=Y().indexOf("Gecko")!=-1&&!(Y().toLowerCase().indexOf("webkit")!=-1&&Y().indexOf("Edge")==-1)&&!(Y().indexOf("Trident")!=-1||Y().indexOf("MSIE")!=-1)&&Y().indexOf("Edge")==-1;function ge(u,p,y){for(const w in u)p.call(y,u[w],w,u)}function N(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function T(u){const p={};for(const y in u)p[y]=u[y];return p}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(u,p){let y,w;for(let V=1;V<arguments.length;V++){w=arguments[V];for(y in w)u[y]=w[y];for(let j=0;j<R.length;j++)y=R[j],Object.prototype.hasOwnProperty.call(w,y)&&(u[y]=w[y])}}function D(u){var p=1;u=u.split(":");const y=[];for(;0<p&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function L(u){f.setTimeout(()=>{throw u},0)}function C(){var u=de;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class tt{constructor(){this.h=this.g=null}add(p,y){const w=kt.get();w.set(p,y),this.h?this.h.next=w:this.g=w,this.h=w}}var kt=new q(()=>new Pt,u=>u.reset());class Pt{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,ee=!1,de=new tt,se=()=>{const u=f.Promise.resolve(void 0);Ue=()=>{u.then(O)}};var O=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(y){L(y)}var p=kt;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}ee=!1};function W(){this.s=this.s,this.C=this.C}W.prototype.s=!1,W.prototype.ma=function(){this.s||(this.s=!0,this.N())},W.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var Ie=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};f.addEventListener("test",y,p),f.removeEventListener("test",y,p)}catch{}return u}();function Se(u,p){if(he.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(Ee){e:{try{re(p.nodeName);var V=!0;break e}catch{}V=!1}V||(p=null)}}else y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement);this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Pe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Se.aa.h.call(this)}}M(Se,he);var Pe={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),be=0;function Be(u,p,y,w,V){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!w,this.ha=V,this.key=++be,this.da=this.fa=!1}function gt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function or(u){this.src=u,this.g={},this.h=0}or.prototype.add=function(u,p,y,w,V){var j=u.toString();u=this.g[j],u||(u=this.g[j]=[],this.h++);var Z=Or(u,p,w,V);return-1<Z?(p=u[Z],y||(p.fa=!1)):(p=new Be(p,this.src,j,!!w,V),p.fa=y,u.push(p)),p};function ls(u,p){var y=p.type;if(y in u.g){var w=u.g[y],V=Array.prototype.indexOf.call(w,p,void 0),j;(j=0<=V)&&Array.prototype.splice.call(w,V,1),j&&(gt(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Or(u,p,y,w){for(var V=0;V<u.length;++V){var j=u[V];if(!j.da&&j.listener==p&&j.capture==!!y&&j.ha==w)return V}return-1}var wi="closure_lm_"+(1e6*Math.random()|0),us={};function Co(u,p,y,w,V){if(Array.isArray(p)){for(var j=0;j<p.length;j++)Co(u,p[j],y,w,V);return null}return y=Po(y),u&&u[Me]?u.K(p,y,v(w)?!!w.capture:!1,V):Ao(u,p,y,!1,w,V)}function Ao(u,p,y,w,V,j){if(!p)throw Error("Invalid event type");var Z=v(V)?!!V.capture:!!V,Fe=hs(u);if(Fe||(u[wi]=Fe=new or(u)),y=Fe.add(p,y,w,Z,j),y.proxy)return y;if(w=Xa(),y.proxy=w,w.src=u,w.listener=y,u.addEventListener)Ie||(V=Z),V===void 0&&(V=!1),u.addEventListener(p.toString(),w,V);else if(u.attachEvent)u.attachEvent(lr(p.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Xa(){function u(y){return p.call(u.src,u.listener,y)}const p=ko;return u}function cs(u,p,y,w,V){if(Array.isArray(p))for(var j=0;j<p.length;j++)cs(u,p[j],y,w,V);else w=v(w)?!!w.capture:!!w,y=Po(y),u&&u[Me]?(u=u.i,p=String(p).toString(),p in u.g&&(j=u.g[p],y=Or(j,y,w,V),-1<y&&(gt(j[y]),Array.prototype.splice.call(j,y,1),j.length==0&&(delete u.g[p],u.h--)))):u&&(u=hs(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Or(p,y,w,V)),(y=-1<u?p[u]:null)&&ar(y))}function ar(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Me])ls(p.i,u);else{var y=u.type,w=u.proxy;p.removeEventListener?p.removeEventListener(y,w,u.capture):p.detachEvent?p.detachEvent(lr(y),w):p.addListener&&p.removeListener&&p.removeListener(w),(y=hs(p))?(ls(y,u),y.h==0&&(y.src=null,p[wi]=null)):gt(u)}}}function lr(u){return u in us?us[u]:us[u]="on"+u}function ko(u,p){if(u.da)u=!0;else{p=new Se(p,this);var y=u.listener,w=u.ha||u.src;u.fa&&ar(u),u=y.call(w,p)}return u}function hs(u){return u=u[wi],u instanceof or?u:null}var ds="__closure_events_fn_"+(1e9*Math.random()>>>0);function Po(u){return typeof u=="function"?u:(u[ds]||(u[ds]=function(p){return u.handleEvent(p)}),u[ds])}function ut(){W.call(this),this.i=new or(this),this.M=this,this.F=null}M(ut,W),ut.prototype[Me]=!0,ut.prototype.removeEventListener=function(u,p,y,w){cs(this,u,p,y,w)};function ct(u,p){var y,w=u.F;if(w)for(y=[];w;w=w.F)y.push(w);if(u=u.M,w=p.type||p,typeof p=="string")p=new he(p,u);else if(p instanceof he)p.target=p.target||u;else{var V=p;p=new he(w,u),P(p,V)}if(V=!0,y)for(var j=y.length-1;0<=j;j--){var Z=p.g=y[j];V=ur(Z,w,!0,p)&&V}if(Z=p.g=u,V=ur(Z,w,!0,p)&&V,V=ur(Z,w,!1,p)&&V,y)for(j=0;j<y.length;j++)Z=p.g=y[j],V=ur(Z,w,!1,p)&&V}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var y=u.g[p],w=0;w<y.length;w++)gt(y[w]);delete u.g[p],u.h--}}this.F=null},ut.prototype.K=function(u,p,y,w){return this.i.add(String(u),p,!1,y,w)},ut.prototype.L=function(u,p,y,w){return this.i.add(String(u),p,!0,y,w)};function ur(u,p,y,w){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var V=!0,j=0;j<p.length;++j){var Z=p[j];if(Z&&!Z.da&&Z.capture==y){var Fe=Z.listener,ht=Z.ha||Z.src;Z.fa&&ls(u.i,Z),V=Fe.call(ht,w)!==!1&&V}}return V&&!w.defaultPrevented}function No(u,p,y){if(typeof u=="function")y&&(u=A(u,y));else if(u&&typeof u.handleEvent=="function")u=A(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function Lr(u){u.g=No(()=>{u.g=null,u.i&&(u.i=!1,Lr(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Ti extends W{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Lr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ii(u){W.call(this),this.h=u,this.g={}}M(Ii,W);var xo=[];function Do(u){ge(u.g,function(p,y){this.g.hasOwnProperty(y)&&ar(p)},u),u.g={}}Ii.prototype.N=function(){Ii.aa.N.call(this),Do(this)},Ii.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oo=f.JSON.stringify,Lo=f.JSON.parse,Vo=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Si(){}Si.prototype.h=null;function fs(u){return u.h||(u.h=u.i())}function ps(){}var an={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mn(){he.call(this,"d")}M(Mn,he);function ms(){he.call(this,"c")}M(ms,he);var bn={},Mo=null;function Ri(){return Mo=Mo||new ut}bn.La="serverreachability";function bo(u){he.call(this,bn.La,u)}M(bo,he);function cr(u){const p=Ri();ct(p,new bo(p))}bn.STAT_EVENT="statevent";function Fo(u,p){he.call(this,bn.STAT_EVENT,u),this.stat=p}M(Fo,he);function nt(u){const p=Ri();ct(p,new Fo(p,u))}bn.Ma="timingevent";function gs(u,p){he.call(this,bn.Ma,u),this.size=p}M(gs,he);function vn(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function Ci(){this.g=!0}Ci.prototype.xa=function(){this.g=!1};function Ai(u,p,y,w,V,j){u.info(function(){if(u.g)if(j)for(var Z="",Fe=j.split("&"),ht=0;ht<Fe.length;ht++){var Ne=Fe[ht].split("=");if(1<Ne.length){var yt=Ne[0];Ne=Ne[1];var ot=yt.split("_");Z=2<=ot.length&&ot[1]=="type"?Z+(yt+"="+Ne+"&"):Z+(yt+"=redacted&")}}else Z=null;else Z=j;return"XMLHTTP REQ ("+w+") [attempt "+V+"]: "+p+`
`+y+`
`+Z})}function ys(u,p,y,w,V,j,Z){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+V+"]: "+p+`
`+y+`
`+j+" "+Z})}function _n(u,p,y,w){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+yc(u,y)+(w?" "+w:"")})}function Uo(u,p){u.info(function(){return"TIMEOUT: "+p})}Ci.prototype.info=function(){};function yc(u,p){if(!u.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var w=y[u];if(!(2>w.length)){var V=w[1];if(Array.isArray(V)&&!(1>V.length)){var j=V[0];if(j!="noop"&&j!="stop"&&j!="close")for(var Z=1;Z<V.length;Z++)V[Z]=""}}}}return Oo(y)}catch{return p}}var vs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ja={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},En;function ki(){}M(ki,Si),ki.prototype.g=function(){return new XMLHttpRequest},ki.prototype.i=function(){return{}},En=new ki;function wn(u,p,y,w){this.j=u,this.i=p,this.l=y,this.R=w||1,this.U=new Ii(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Za}function Za(){this.i=null,this.g="",this.h=!1}var zo={},_s={};function Es(u,p,y){u.L=1,u.v=Ur(en(p)),u.m=y,u.P=!0,Bo(u,null)}function Bo(u,p){u.F=Date.now(),je(u),u.A=en(u.v);var y=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),Br(y.i,"t",w),u.C=0,y=u.j.J,u.h=new Za,u.g=yl(u.j,y?p:null,!u.m),0<u.O&&(u.M=new Ti(A(u.Y,u,u.g),u.O)),p=u.U,y=u.g,w=u.ca;var V="readystatechange";Array.isArray(V)||(V&&(xo[0]=V.toString()),V=xo);for(var j=0;j<V.length;j++){var Z=Co(y,V[j],w||p.handleEvent,!1,p.h||p);if(!Z)break;p.g[Z.key]=Z}p=u.H?T(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),cr(),Ai(u.i,u.u,u.A,u.l,u.R,u.m)}wn.prototype.ca=function(u){u=u.target;const p=this.M;p&&Ht(u)==3?p.j():this.Y(u)},wn.prototype.Y=function(u){try{if(u==this.g)e:{const ot=Ht(this.g);var p=this.g.Ba();const cn=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||Ko(this.g)))){this.J||ot!=4||p==7||(p==8||0>=cn?cr(3):cr(2)),Pi(this);var y=this.g.Z();this.X=y;t:if(el(this)){var w=Ko(this.g);u="";var V=w.length,j=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ln(this),Vr(this);var Z="";break t}this.h.i=new f.TextDecoder}for(p=0;p<V;p++)this.h.h=!0,u+=this.h.i.decode(w[p],{stream:!(j&&p==V-1)});w.length=0,this.h.g+=u,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=y==200,ys(this.i,this.u,this.A,this.l,this.R,ot,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,ht=this.g;if((Fe=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!te(Fe)){var Ne=Fe;break t}}Ne=null}if(y=Ne)_n(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jo(this,y);else{this.o=!1,this.s=3,nt(12),ln(this),Vr(this);break e}}if(this.P){y=!0;let nn;for(;!this.J&&this.C<Z.length;)if(nn=vc(this,Z),nn==_s){ot==4&&(this.s=4,nt(14),y=!1),_n(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==zo){this.s=4,nt(15),_n(this.i,this.l,Z,"[Invalid Chunk]"),y=!1;break}else _n(this.i,this.l,nn,null),jo(this,nn);if(el(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||Z.length!=0||this.h.h||(this.s=1,nt(16),y=!1),this.o=this.o&&y,!y)_n(this.i,this.l,Z,"[Invalid Chunked Response]"),ln(this),Vr(this);else if(0<Z.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),Qo(yt),yt.M=!0,nt(11))}}else _n(this.i,this.l,Z,null),jo(this,Z);ot==4&&ln(this),this.o&&!this.J&&(ot==4?xs(this.j,this):(this.o=!1,je(this)))}else Cs(this.g),y==400&&0<Z.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),ln(this),Vr(this)}}}catch{}finally{}};function el(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function vc(u,p){var y=u.C,w=p.indexOf(`
`,y);return w==-1?_s:(y=Number(p.substring(y,w)),isNaN(y)?zo:(w+=1,w+y>p.length?_s:(p=p.slice(w,w+y),u.C=w+y,p)))}wn.prototype.cancel=function(){this.J=!0,ln(this)};function je(u){u.S=Date.now()+u.I,tl(u,u.I)}function tl(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=vn(A(u.ba,u),p)}function Pi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}wn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Uo(this.i,this.A),this.L!=2&&(cr(),nt(17)),ln(this),this.s=2,Vr(this)):tl(this,this.S-u)};function Vr(u){u.j.G==0||u.J||xs(u.j,u)}function ln(u){Pi(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Do(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function jo(u,p){try{var y=u.j;if(y.G!=0&&(y.g==u||Ft(y.h,u))){if(!u.K&&Ft(y.h,u)&&y.G==3){try{var w=y.Da.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var V=w;if(V[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)Ns(y),Cn(y);else break e;Ps(y),nt(18)}}else y.za=V[1],0<y.za-y.T&&37500>V[2]&&y.F&&y.v==0&&!y.C&&(y.C=vn(A(y.Za,y),6e3));if(1>=rl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else mr(y,11)}else if((u.K||y.g==u)&&Ns(y),!te(p))for(V=y.Da.g.parse(p),p=0;p<V.length;p++){let Ne=V[p];if(y.T=Ne[0],Ne=Ne[1],y.G==2)if(Ne[0]=="c"){y.K=Ne[1],y.ia=Ne[2];const yt=Ne[3];yt!=null&&(y.la=yt,y.j.info("VER="+y.la));const ot=Ne[4];ot!=null&&(y.Aa=ot,y.j.info("SVER="+y.Aa));const cn=Ne[5];cn!=null&&typeof cn=="number"&&0<cn&&(w=1.5*cn,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const nn=u.g;if(nn){const Mi=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mi){var j=w.h;j.g||Mi.indexOf("spdy")==-1&&Mi.indexOf("quic")==-1&&Mi.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&($o(j,j.h),j.h=null))}if(w.D){const Os=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Os&&(w.ya=Os,ze(w.I,w.D,Os))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var Z=u;if(w.qa=gl(w,w.J?w.ia:null,w.W),Z.K){il(w.h,Z);var Fe=Z,ht=w.L;ht&&(Fe.I=ht),Fe.B&&(Pi(Fe),je(Fe)),w.g=Z}else Vi(w);0<y.i.length&&Bn(y)}else Ne[0]!="stop"&&Ne[0]!="close"||mr(y,7);else y.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?mr(y,7):It(y):Ne[0]!="noop"&&y.l&&y.l.ta(Ne),y.v=0)}}cr(4)}catch{}}var nl=class{constructor(u,p){this.g=u,this.map=p}};function Ni(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zt(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function rl(u){return u.h?1:u.g?u.g.size:0}function Ft(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function $o(u,p){u.g?u.g.add(p):u.h=p}function il(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Ni.prototype.cancel=function(){if(this.i=sl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function sl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.D);return p}return $(u.i)}function ws(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],y=u.length,w=0;w<y;w++)p.push(u[w]);return p}p=[],y=0;for(w in u)p[y++]=u[w];return p}function Ts(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var y=0;y<u;y++)p.push(y);return p}p=[],y=0;for(const w in u)p[y++]=w;return p}}}function Mr(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var y=Ts(u),w=ws(u),V=w.length,j=0;j<V;j++)p.call(void 0,w[j],y&&y[j],u)}var xi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _c(u,p){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var w=u[y].indexOf("="),V=null;if(0<=w){var j=u[y].substring(0,w);V=u[y].substring(w+1)}else j=u[y];p(j,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function hr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof hr){this.h=u.h,Di(this,u.j),this.o=u.o,this.g=u.g,br(this,u.s),this.l=u.l;var p=u.i,y=new Fn;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),Fr(this,y),this.m=u.m}else u&&(p=String(u).match(xi))?(this.h=!1,Di(this,p[1]||"",!0),this.o=ke(p[2]||""),this.g=ke(p[3]||"",!0),br(this,p[4]),this.l=ke(p[5]||"",!0),Fr(this,p[6]||"",!0),this.m=ke(p[7]||"")):(this.h=!1,this.i=new Fn(null,this.h))}hr.prototype.toString=function(){var u=[],p=this.j;p&&u.push(zr(p,Is,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(zr(p,Is,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(zr(y,y.charAt(0)=="/"?ll:al,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",zr(y,Ho)),u.join("")};function en(u){return new hr(u)}function Di(u,p,y){u.j=y?ke(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function br(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Fr(u,p,y){p instanceof Fn?(u.i=p,Un(u.i,u.h)):(y||(p=zr(p,ul)),u.i=new Fn(p,u.h))}function ze(u,p,y){u.i.set(p,y)}function Ur(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function ke(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function zr(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,ol),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function ol(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Is=/[#\/\?@]/g,al=/[#\?:]/g,ll=/[#\?]/g,ul=/[#\?@]/g,Ho=/#/g;function Fn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Tt(u){u.g||(u.g=new Map,u.h=0,u.i&&_c(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=Fn.prototype,r.add=function(u,p){Tt(this),this.i=null,u=un(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function Tn(u,p){Tt(u),p=un(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function In(u,p){return Tt(u),p=un(u,p),u.g.has(p)}r.forEach=function(u,p){Tt(this),this.g.forEach(function(y,w){y.forEach(function(V){u.call(p,V,w,this)},this)},this)},r.na=function(){Tt(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let w=0;w<p.length;w++){const V=u[w];for(let j=0;j<V.length;j++)y.push(p[w])}return y},r.V=function(u){Tt(this);let p=[];if(typeof u=="string")In(this,u)&&(p=p.concat(this.g.get(un(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)p=p.concat(u[y])}return p},r.set=function(u,p){return Tt(this),this.i=null,u=un(this,u),In(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Br(u,p,y){Tn(u,p),0<y.length&&(u.i=null,u.g.set(un(u,p),$(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var w=p[y];const j=encodeURIComponent(String(w)),Z=this.V(w);for(w=0;w<Z.length;w++){var V=j;Z[w]!==""&&(V+="="+encodeURIComponent(String(Z[w]))),u.push(V)}}return this.i=u.join("&")};function un(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Un(u,p){p&&!u.j&&(Tt(u),u.i=null,u.g.forEach(function(y,w){var V=w.toLowerCase();w!=V&&(Tn(this,w),Br(this,V,y))},u)),u.j=p}function Ec(u,p){const y=new Ci;if(f.Image){const w=new Image;w.onload=F($t,y,"TestLoadImage: loaded",!0,p,w),w.onerror=F($t,y,"TestLoadImage: error",!1,p,w),w.onabort=F($t,y,"TestLoadImage: abort",!1,p,w),w.ontimeout=F($t,y,"TestLoadImage: timeout",!1,p,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else p(!1)}function cl(u,p){const y=new Ci,w=new AbortController,V=setTimeout(()=>{w.abort(),$t(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:w.signal}).then(j=>{clearTimeout(V),j.ok?$t(y,"TestPingServer: ok",!0,p):$t(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(V),$t(y,"TestPingServer: error",!1,p)})}function $t(u,p,y,w,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),w(y)}catch{}}function wc(){this.g=new Vo}function hl(u,p,y){const w=y||"";try{Mr(u,function(V,j){let Z=V;v(V)&&(Z=Oo(V)),p.push(w+j+"="+encodeURIComponent(Z))})}catch(V){throw p.push(w+"type="+encodeURIComponent("_badmap")),V}}function dr(u){this.l=u.Ub||null,this.j=u.eb||!1}M(dr,Si),dr.prototype.g=function(){return new Oi(this.l,this.j)},dr.prototype.i=function(u){return function(){return u}}({});function Oi(u,p){ut.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}M(Oi,ut),r=Oi.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Rn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;dl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function dl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Sn(this):Rn(this),this.readyState==3&&dl(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Sn(this))},r.Qa=function(u){this.g&&(this.response=u,Sn(this))},r.ga=function(){this.g&&Sn(this)};function Sn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Rn(u)}r.setRequestHeader=function(u,p){this.u.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function Rn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function fr(u){let p="";return ge(u,function(y,w){p+=w,p+=":",p+=y,p+=`\r
`}),p}function jr(u,p,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=fr(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):ze(u,p,y))}function We(u){ut.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}M(We,ut);var Tc=/^https?$/i,qo=["POST","PUT"];r=We.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,p,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():En.g(),this.v=this.o?fs(this.o):fs(En),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(j){Li(this,j);return}if(u=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var V in w)y.set(V,w[V]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const j of w.keys())y.set(j,w.get(j));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),V=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(qo,p,void 0))||w||V||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,Z]of y)this.g.setRequestHeader(j,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Rs(this),this.u=!0,this.g.send(u),this.u=!1}catch(j){Li(this,j)}};function Li(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Ss(u),tn(u)}function Ss(u){u.A||(u.A=!0,ct(u,"complete"),ct(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ct(this,"complete"),ct(this,"abort"),tn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tn(this,!0)),We.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Wo(this):this.bb())},r.bb=function(){Wo(this)};function Wo(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Ht(u)!=4||u.Z()!=2)){if(u.u&&Ht(u)==4)No(u.Ea,0,u);else if(ct(u,"readystatechange"),Ht(u)==4){u.h=!1;try{const Z=u.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var w;if(w=Z===0){var V=String(u.D).match(xi)[1]||null;!V&&f.self&&f.self.location&&(V=f.self.location.protocol.slice(0,-1)),w=!Tc.test(V?V.toLowerCase():"")}y=w}if(y)ct(u,"complete"),ct(u,"success");else{u.m=6;try{var j=2<Ht(u)?u.g.statusText:""}catch{j=""}u.l=j+" ["+u.Z()+"]",Ss(u)}}finally{tn(u)}}}}function tn(u,p){if(u.g){Rs(u);const y=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||ct(u,"ready");try{y.onreadystatechange=w}catch{}}}function Rs(u){u.I&&(f.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Ht(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Lo(p)}};function Ko(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Cs(u){const p={};u=(u.g&&2<=Ht(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(te(u[w]))continue;var y=D(u[w]);const V=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=p[V]||[];p[V]=j,j.push(y)}N(p,function(w){return w.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zn(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function Go(u){this.Aa=0,this.i=[],this.j=new Ci,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zn("baseRetryDelayMs",5e3,u),this.cb=zn("retryDelaySeedMs",1e4,u),this.Wa=zn("forwardChannelMaxRetries",2,u),this.wa=zn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Ni(u&&u.concurrentRequestLimit),this.Da=new wc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Go.prototype,r.la=8,r.G=1,r.connect=function(u,p,y,w){nt(0),this.W=u,this.H=p||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=gl(this,null,this.W),Bn(this)};function It(u){if(As(u),u.G==3){var p=u.U++,y=en(u.I);if(ze(y,"SID",u.K),ze(y,"RID",p),ze(y,"TYPE","terminate"),pr(u,y),p=new wn(u,u.j,p),p.L=2,p.v=Ur(en(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=p.v,y=!0),y||(p.g=yl(p.j,null),p.g.ea(p.v)),p.F=Date.now(),je(p)}ml(u)}function Cn(u){u.g&&(Qo(u),u.g.cancel(),u.g=null)}function As(u){Cn(u),u.u&&(f.clearTimeout(u.u),u.u=null),Ns(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Bn(u){if(!Zt(u.h)&&!u.s){u.s=!0;var p=u.Ga;Ue||se(),ee||(Ue(),ee=!0),de.add(p,u),u.B=0}}function Ic(u,p){return rl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=vn(A(u.Ga,u,p),pl(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const V=new wn(this,this.j,u);let j=this.o;if(this.S&&(j?(j=T(j),P(j,this.S)):j=this.S),this.m!==null||this.O||(V.H=j,j=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=$r(this,V,p),y=en(this.I),ze(y,"RID",u),ze(y,"CVER",22),this.D&&ze(y,"X-HTTP-Session-Id",this.D),pr(this,y),j&&(this.O?p="headers="+encodeURIComponent(String(fr(j)))+"&"+p:this.m&&jr(y,this.m,j)),$o(this.h,V),this.Ua&&ze(y,"TYPE","init"),this.P?(ze(y,"$req",p),ze(y,"SID","null"),V.T=!0,Es(V,y,null)):Es(V,y,p),this.G=2}}else this.G==3&&(u?ks(this,u):this.i.length==0||Zt(this.h)||ks(this))};function ks(u,p){var y;p?y=p.l:y=u.U++;const w=en(u.I);ze(w,"SID",u.K),ze(w,"RID",y),ze(w,"AID",u.T),pr(u,w),u.m&&u.o&&jr(w,u.m,u.o),y=new wn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),p&&(u.i=p.D.concat(u.i)),p=$r(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),$o(u.h,y),Es(y,w,p)}function pr(u,p){u.H&&ge(u.H,function(y,w){ze(p,w,y)}),u.l&&Mr({},function(y,w){ze(p,w,y)})}function $r(u,p,y){y=Math.min(u.i.length,y);var w=u.l?A(u.l.Na,u.l,u):null;e:{var V=u.i;let j=-1;for(;;){const Z=["count="+y];j==-1?0<y?(j=V[0].g,Z.push("ofs="+j)):j=0:Z.push("ofs="+j);let Fe=!0;for(let ht=0;ht<y;ht++){let Ne=V[ht].g;const yt=V[ht].map;if(Ne-=j,0>Ne)j=Math.max(0,V[ht].g-100),Fe=!1;else try{hl(yt,Z,"req"+Ne+"_")}catch{w&&w(yt)}}if(Fe){w=Z.join("&");break e}}}return u=u.i.splice(0,y),p.D=u,w}function Vi(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;Ue||se(),ee||(Ue(),ee=!0),de.add(p,u),u.v=0}}function Ps(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=vn(A(u.Fa,u),pl(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,fl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=vn(A(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),Cn(this),fl(this))};function Qo(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function fl(u){u.g=new wn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=en(u.qa);ze(p,"RID","rpc"),ze(p,"SID",u.K),ze(p,"AID",u.T),ze(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(p,"TO",u.ja),ze(p,"TYPE","xmlhttp"),pr(u,p),u.m&&u.o&&jr(p,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Ur(en(p)),y.m=null,y.P=!0,Bo(y,u)}r.Za=function(){this.C!=null&&(this.C=null,Cn(this),Ps(this),nt(19))};function Ns(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function xs(u,p){var y=null;if(u.g==p){Ns(u),Qo(u),u.g=null;var w=2}else if(Ft(u.h,p))y=p.D,il(u.h,p),w=1;else return;if(u.G!=0){if(p.o)if(w==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var V=u.B;w=Ri(),ct(w,new gs(w,y)),Bn(u)}else Vi(u);else if(V=p.s,V==3||V==0&&0<p.X||!(w==1&&Ic(u,p)||w==2&&Ps(u)))switch(y&&0<y.length&&(p=u.h,p.i=p.i.concat(y)),V){case 1:mr(u,5);break;case 4:mr(u,10);break;case 3:mr(u,6);break;default:mr(u,2)}}}function pl(u,p){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*p}function mr(u,p){if(u.j.info("Error code "+p),p==2){var y=A(u.fb,u),w=u.Xa;const V=!w;w=new hr(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Di(w,"https"),Ur(w),V?Ec(w.toString(),y):cl(w.toString(),y)}else nt(2);u.G=0,u.l&&u.l.sa(p),ml(u),As(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function ml(u){if(u.G=0,u.ka=[],u.l){const p=sl(u.h);(p.length!=0||u.i.length!=0)&&(z(u.ka,p),z(u.ka,u.i),u.h.i.length=0,$(u.i),u.i.length=0),u.l.ra()}}function gl(u,p,y){var w=y instanceof hr?en(y):new hr(y);if(w.g!="")p&&(w.g=p+"."+w.g),br(w,w.s);else{var V=f.location;w=V.protocol,p=p?p+"."+V.hostname:V.hostname,V=+V.port;var j=new hr(null);w&&Di(j,w),p&&(j.g=p),V&&br(j,V),y&&(j.l=y),w=j}return y=u.D,p=u.ya,y&&p&&ze(w,y,p),ze(w,"VER",u.la),pr(u,w),w}function yl(u,p,y){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new We(new dr({eb:y})):new We(u.pa),p.Ha(u.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yo(){}r=Yo.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ds(){}Ds.prototype.g=function(u,p){return new Ut(u,p)};function Ut(u,p){ut.call(this),this.g=new Go(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!te(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!te(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new jn(this)}M(Ut,ut),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){It(this.g)},Ut.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Oo(u),u=y);p.i.push(new nl(p.Ya++,u)),p.G==3&&Bn(p)},Ut.prototype.N=function(){this.g.l=null,delete this.j,It(this.g),delete this.g,Ut.aa.N.call(this)};function vl(u){Mn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}M(vl,Mn);function _l(){ms.call(this),this.status=1}M(_l,ms);function jn(u){this.g=u}M(jn,Yo),jn.prototype.ua=function(){ct(this.g,"a")},jn.prototype.ta=function(u){ct(this.g,new vl(u))},jn.prototype.sa=function(u){ct(this.g,new _l)},jn.prototype.ra=function(){ct(this.g,"b")},Ds.prototype.createWebChannel=Ds.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,Fv=function(){return new Ds},bv=function(){return Ri()},Mv=bn,Ed={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vs.NO_ERROR=0,vs.TIMEOUT=8,vs.HTTP_ERROR=6,ku=vs,Ja.COMPLETE="complete",Vv=Ja,ps.EventType=an,an.OPEN="a",an.CLOSE="b",an.ERROR="c",an.MESSAGE="d",ut.prototype.listen=ut.prototype.K,Ia=ps,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,Lv=We}).apply(typeof mu<"u"?mu:typeof self<"u"?self:typeof window<"u"?window:{});const Rg="@firebase/firestore",Cg="4.7.12";/**
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
 */class Vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Vt.UNAUTHENTICATED=new Vt(null),Vt.GOOGLE_CREDENTIALS=new Vt("google-credentials-uid"),Vt.FIRST_PARTY=new Vt("first-party-uid"),Vt.MOCK_USER=new Vt("mock-user");/**
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
 */let To="11.7.0";/**
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
 */const is=new Kd("@firebase/firestore");function eo(){return is.logLevel}function oe(r,...e){if(is.logLevel<=Ae.DEBUG){const t=e.map(lf);is.debug(`Firestore (${To}): ${r}`,...t)}}function xr(r,...e){if(is.logLevel<=Ae.ERROR){const t=e.map(lf);is.error(`Firestore (${To}): ${r}`,...t)}}function ho(r,...e){if(is.logLevel<=Ae.WARN){const t=e.map(lf);is.warn(`Firestore (${To}): ${r}`,...t)}}function lf(r){if(typeof r=="string")return r;try{/**
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
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
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
 */function Te(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Uv(r,s,t)}function Uv(r,e,t){let s=`FIRESTORE (${To}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw xr(s),new Error(s)}function Je(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||Uv(e,o,s)}function De(r,e){return r}/**
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
 */const ne={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class me extends ir{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class zv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Vt.UNAUTHENTICATED))}shutdown(){}}class hR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class dR{constructor(e){this.t=e,this.currentUser=Vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Je(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new Zi;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Zi,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=l;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},f=g=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>f(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Zi)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Je(typeof s.accessToken=="string",31837,{l:s}),new zv(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Je(e===null||typeof e=="string",2055,{h:e}),new Vt(e)}}class fR{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Vt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class pR{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new fR(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ag{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mR{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,yn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Je(this.o===void 0,3512);const s=l=>{l.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,oe("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const o=l=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ag(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Je(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ag(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function gR(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function Bv(){return new TextEncoder}/**
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
 */class yR{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=gR(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function Ce(r,e){return r<e?-1:r>e?1:0}function wd(r,e){let t=0;for(;t<r.length&&t<e.length;){const s=r.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Ce(s,o);{const l=Bv(),h=vR(l.encode(kg(r,t)),l.encode(kg(e,t)));return h!==0?h:Ce(s,o)}}t+=s>65535?2:1}return Ce(r.length,e.length)}function kg(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function vR(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Ce(r[t],e[t]);return Ce(r.length,e.length)}function fo(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
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
 */const Pg=-62135596800,Ng=1e6;class Jt{static now(){return Jt.fromMillis(Date.now())}static fromDate(e){return Jt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Ng);return new Jt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new me(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new me(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Pg)throw new me(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new me(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ng}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Pg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new Jt(0,0))}static max(){return new we(new Jt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const xg="__name__";class Kn{constructor(e,t,s){t===void 0?t=0:t>e.length&&Te(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Te(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Kn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Kn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=Kn.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ce(e.length,t.length)}static compareSegments(e,t){const s=Kn.isNumericId(e),o=Kn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Kn.extractNumericId(e).compare(Kn.extractNumericId(t)):wd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return di.fromString(e.substring(4,e.length-2))}}class et extends Kn{construct(e,t,s){return new et(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new me(ne.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new et(t)}static emptyPath(){return new et([])}}const _R=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class jt extends Kn{construct(e,t,s){return new jt(e,t,s)}static isValidIdentifier(e){return _R.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),jt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===xg}static keyField(){return new jt([xg])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new me(ne.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new me(ne.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new me(ne.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(s+=f,o++):(l(),o++)}if(l(),h)throw new me(ne.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new jt(t)}static emptyPath(){return new jt([])}}/**
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
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(et.fromString(e))}static fromName(e){return new ye(et.fromString(e).popFirst(5))}static empty(){return new ye(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&et.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return et.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new et(e.slice()))}}/**
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
 */const La=-1;function ER(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=we.fromTimestamp(s===1e9?new Jt(t+1,0):new Jt(t,s));return new pi(o,ye.empty(),e)}function wR(r){return new pi(r.readTime,r.key,La)}class pi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new pi(we.min(),ye.empty(),La)}static max(){return new pi(we.max(),ye.empty(),La)}}function TR(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(r.documentKey,e.documentKey),t!==0?t:Ce(r.largestBatchId,e.largestBatchId))}/**
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
 */const IR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function sc(r){if(r.code!==ne.FAILED_PRECONDITION||r.message!==IR)throw r;oe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):K.reject(t)}static resolve(e){return new K((t,s)=>{t(e)})}static reject(e){return new K((t,s)=>{s(e)})}static waitFor(e){return new K((t,s)=>{let o=0,l=0,h=!1;e.forEach(f=>{++o,f.next(()=>{++l,h&&l===o&&t()},g=>s(g))}),h=!0,l===o&&t()})}static or(e){let t=K.resolve(!1);for(const s of e)t=t.next(o=>o?K.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,l)=>{s.push(t.call(this,o,l))}),this.waitFor(s)}static mapArray(e,t){return new K((s,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const v=g;t(e[v]).next(E=>{h[v]=E,++f,f===l&&s(h)},E=>o(E))}})}static doWhile(e,t){return new K((s,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):s()};l()})}}function RR(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Io(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class oc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>t.writeSequenceNumber(s))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}oc.le=-1;/**
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
 */const CR=-1;function ac(r){return r==null}function Td(r){return r===0&&1/r==-1/0}/**
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
 */const jv="";function AR(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Dg(e)),e=kR(r.get(t),e);return Dg(e)}function kR(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case jv:t+="";break;default:t+=l}}return t}function Dg(r){return r+jv+""}/**
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
 */function Og(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Ka(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function PR(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class st{constructor(e,t){this.comparator=e,this.root=t||Ct.EMPTY}insert(e,t){return new st(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new st(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gu(this.root,e,this.comparator,!1)}getReverseIterator(){return new gu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gu(this.root,e,this.comparator,!0)}}class gu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Ct.RED,this.left=o??Ct.EMPTY,this.right=l??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Ct(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ct.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Te(27949);return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw Te(57766)}get value(){throw Te(16141)}get color(){throw Te(16727)}get left(){throw Te(29726)}get right(){throw Te(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new Ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class mt{constructor(e){this.comparator=e,this.data=new st(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Lg(this.data.getIterator())}getIteratorFrom(e){return new Lg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new mt(this.comparator);return t.data=e,t}}class Lg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class li{constructor(e){this.fields=e,e.sort(jt.comparator)}static empty(){return new li([])}unionWith(e){let t=new mt(jt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new li(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return fo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class $v extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class At{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new $v("Invalid base64 string: "+l):l}}(e);return new At(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new At(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}At.EMPTY_BYTE_STRING=new At("");const NR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mi(r){if(Je(!!r,39018),typeof r=="string"){let e=0;const t=NR.exec(r);if(Je(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:it(r.seconds),nanos:it(r.nanos)}}function it(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function gi(r){return typeof r=="string"?At.fromBase64String(r):At.fromUint8Array(r)}/**
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
 */const Hv="server_timestamp",qv="__type__",Wv="__previous_value__",Kv="__local_write_time__";function uf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[qv])===null||t===void 0?void 0:t.stringValue)===Hv}function lc(r){const e=r.mapValue.fields[Wv];return uf(e)?lc(e):e}function Va(r){const e=mi(r.mapValue.fields[Kv].timestampValue);return new Jt(e.seconds,e.nanos)}/**
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
 */class xR{constructor(e,t,s,o,l,h,f,g,v,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=v,this.isUsingEmulator=E}}const ju="(default)";class Ma{constructor(e,t){this.projectId=e,this.database=t||ju}static empty(){return new Ma("","")}get isDefaultDatabase(){return this.database===ju}isEqual(e){return e instanceof Ma&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const DR="__type__",OR="__max__",yu={mapValue:{}},LR="__vector__",Id="value";function yi(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?uf(r)?4:MR(r)?9007199254740991:VR(r)?10:11:Te(28295,{value:r})}function er(r,e){if(r===e)return!0;const t=yi(r);if(t!==yi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Va(r).isEqual(Va(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=mi(o.timestampValue),f=mi(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,l){return gi(o.bytesValue).isEqual(gi(l.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,l){return it(o.geoPointValue.latitude)===it(l.geoPointValue.latitude)&&it(o.geoPointValue.longitude)===it(l.geoPointValue.longitude)}(r,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return it(o.integerValue)===it(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=it(o.doubleValue),f=it(l.doubleValue);return h===f?Td(h)===Td(f):isNaN(h)&&isNaN(f)}return!1}(r,e);case 9:return fo(r.arrayValue.values||[],e.arrayValue.values||[],er);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Og(h)!==Og(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!er(h[g],f[g])))return!1;return!0}(r,e);default:return Te(52216,{left:r})}}function ba(r,e){return(r.values||[]).find(t=>er(t,e))!==void 0}function po(r,e){if(r===e)return 0;const t=yi(r),s=yi(e);if(t!==s)return Ce(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ce(r.booleanValue,e.booleanValue);case 2:return function(l,h){const f=it(l.integerValue||l.doubleValue),g=it(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1}(r,e);case 3:return Vg(r.timestampValue,e.timestampValue);case 4:return Vg(Va(r),Va(e));case 5:return wd(r.stringValue,e.stringValue);case 6:return function(l,h){const f=gi(l),g=gi(h);return f.compareTo(g)}(r.bytesValue,e.bytesValue);case 7:return function(l,h){const f=l.split("/"),g=h.split("/");for(let v=0;v<f.length&&v<g.length;v++){const E=Ce(f[v],g[v]);if(E!==0)return E}return Ce(f.length,g.length)}(r.referenceValue,e.referenceValue);case 8:return function(l,h){const f=Ce(it(l.latitude),it(h.latitude));return f!==0?f:Ce(it(l.longitude),it(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Mg(r.arrayValue,e.arrayValue);case 10:return function(l,h){var f,g,v,E;const S=l.fields||{},A=h.fields||{},F=(f=S[Id])===null||f===void 0?void 0:f.arrayValue,M=(g=A[Id])===null||g===void 0?void 0:g.arrayValue,$=Ce(((v=F==null?void 0:F.values)===null||v===void 0?void 0:v.length)||0,((E=M==null?void 0:M.values)===null||E===void 0?void 0:E.length)||0);return $!==0?$:Mg(F,M)}(r.mapValue,e.mapValue);case 11:return function(l,h){if(l===yu.mapValue&&h===yu.mapValue)return 0;if(l===yu.mapValue)return 1;if(h===yu.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),v=h.fields||{},E=Object.keys(v);g.sort(),E.sort();for(let S=0;S<g.length&&S<E.length;++S){const A=wd(g[S],E[S]);if(A!==0)return A;const F=po(f[g[S]],v[E[S]]);if(F!==0)return F}return Ce(g.length,E.length)}(r.mapValue,e.mapValue);default:throw Te(23264,{Pe:t})}}function Vg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ce(r,e);const t=mi(r),s=mi(e),o=Ce(t.seconds,s.seconds);return o!==0?o:Ce(t.nanos,s.nanos)}function Mg(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=po(t[o],s[o]);if(l)return l}return Ce(t.length,s.length)}function mo(r){return Sd(r)}function Sd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=mi(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return gi(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return ye.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=Sd(l);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${Sd(t.fields[h])}`;return o+"}"}(r.mapValue):Te(61005,{value:r})}function Pu(r){switch(yi(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=lc(r);return e?16+Pu(e):16;case 5:return 2*r.stringValue.length;case 6:return gi(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,l)=>o+Pu(l),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Ka(s.fields,(l,h)=>{o+=l.length+Pu(h)}),o}(r.mapValue);default:throw Te(13486,{value:r})}}function Rd(r){return!!r&&"integerValue"in r}function cf(r){return!!r&&"arrayValue"in r}function bg(r){return!!r&&"nullValue"in r}function Fg(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function rd(r){return!!r&&"mapValue"in r}function VR(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[DR])===null||t===void 0?void 0:t.stringValue)===LR}function Aa(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Ka(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Aa(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Aa(r.arrayValue.values[t]);return e}return Object.assign({},r)}function MR(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===OR}/**
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
 */class Gn{constructor(e){this.value=e}static empty(){return new Gn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!rd(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Aa(t)}setAll(e){let t=jt.emptyPath(),s={},o=[];e.forEach((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=f.popLast()}h?s[f.lastSegment()]=Aa(h):o.push(f.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());rd(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return er(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];rd(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Ka(t,(o,l)=>e[o]=l);for(const o of s)delete e[o]}clone(){return new Gn(Aa(this.value))}}/**
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
 */class Mt{constructor(e,t,s,o,l,h,f){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Mt(e,0,we.min(),we.min(),we.min(),Gn.empty(),0)}static newFoundDocument(e,t,s,o){return new Mt(e,1,t,we.min(),s,o,0)}static newNoDocument(e,t){return new Mt(e,2,t,we.min(),we.min(),Gn.empty(),0)}static newUnknownDocument(e,t){return new Mt(e,3,t,we.min(),we.min(),Gn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class $u{constructor(e,t){this.position=e,this.inclusive=t}}function Ug(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=ye.comparator(ye.fromName(h.referenceValue),t.key):s=po(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function zg(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!er(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Hu{constructor(e,t="asc"){this.field=e,this.dir=t}}function bR(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Gv{}class pt extends Gv{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new UR(e,t,s):t==="array-contains"?new jR(e,s):t==="in"?new $R(e,s):t==="not-in"?new HR(e,s):t==="array-contains-any"?new qR(e,s):new pt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new zR(e,s):new BR(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(po(t,this.value)):t!==null&&yi(this.value)===yi(t)&&this.matchesComparison(po(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tr extends Gv{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new tr(e,t)}matches(e){return Qv(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Qv(r){return r.op==="and"}function Yv(r){return FR(r)&&Qv(r)}function FR(r){for(const e of r.filters)if(e instanceof tr)return!1;return!0}function Cd(r){if(r instanceof pt)return r.field.canonicalString()+r.op.toString()+mo(r.value);if(Yv(r))return r.filters.map(e=>Cd(e)).join(",");{const e=r.filters.map(t=>Cd(t)).join(",");return`${r.op}(${e})`}}function Xv(r,e){return r instanceof pt?function(s,o){return o instanceof pt&&s.op===o.op&&s.field.isEqual(o.field)&&er(s.value,o.value)}(r,e):r instanceof tr?function(s,o){return o instanceof tr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((l,h,f)=>l&&Xv(h,o.filters[f]),!0):!1}(r,e):void Te(19439)}function Jv(r){return r instanceof pt?function(t){return`${t.field.canonicalString()} ${t.op} ${mo(t.value)}`}(r):r instanceof tr?function(t){return t.op.toString()+" {"+t.getFilters().map(Jv).join(" ,")+"}"}(r):"Filter"}class UR extends pt{constructor(e,t,s){super(e,t,s),this.key=ye.fromName(s.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class zR extends pt{constructor(e,t){super(e,"in",t),this.keys=Zv("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class BR extends pt{constructor(e,t){super(e,"not-in",t),this.keys=Zv("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Zv(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ye.fromName(s.referenceValue))}class jR extends pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return cf(t)&&ba(t.arrayValue,this.value)}}class $R extends pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ba(this.value.arrayValue,t)}}class HR extends pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ba(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ba(this.value.arrayValue,t)}}class qR extends pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!cf(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>ba(this.value.arrayValue,s))}}/**
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
 */class WR{constructor(e,t=null,s=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Ie=null}}function Bg(r,e=null,t=[],s=[],o=null,l=null,h=null){return new WR(r,e,t,s,o,l,h)}function hf(r){const e=De(r);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Cd(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),ac(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>mo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>mo(s)).join(",")),e.Ie=t}return e.Ie}function df(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!bR(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Xv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!zg(r.startAt,e.startAt)&&zg(r.endAt,e.endAt)}function Ad(r){return ye.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class uc{constructor(e,t=null,s=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function KR(r,e,t,s,o,l,h,f){return new uc(r,e,t,s,o,l,h,f)}function e_(r){return new uc(r)}function jg(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function GR(r){return r.collectionGroup!==null}function ka(r){const e=De(r);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new mt(jt.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(v=>{v.isInequality()&&(f=f.add(v.field))})}),f})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new Hu(l,s))}),t.has(jt.keyField().canonicalString())||e.Ee.push(new Hu(jt.keyField(),s))}return e.Ee}function Xn(r){const e=De(r);return e.de||(e.de=QR(e,ka(r))),e.de}function QR(r,e){if(r.limitType==="F")return Bg(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new Hu(o.field,l)});const t=r.endAt?new $u(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new $u(r.startAt.position,r.startAt.inclusive):null;return Bg(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function kd(r,e,t){return new uc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function cc(r,e){return df(Xn(r),Xn(e))&&r.limitType===e.limitType}function t_(r){return`${hf(Xn(r))}|lt:${r.limitType}`}function to(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>Jv(o)).join(", ")}]`),ac(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>mo(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>mo(o)).join(",")),`Target(${s})`}(Xn(r))}; limitType=${r.limitType})`}function hc(r,e){return e.isFoundDocument()&&function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):ye.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(r,e)&&function(s,o){for(const l of ka(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,f,g){const v=Ug(h,f,g);return h.inclusive?v<=0:v<0}(s.startAt,ka(s),o)||s.endAt&&!function(h,f,g){const v=Ug(h,f,g);return h.inclusive?v>=0:v>0}(s.endAt,ka(s),o))}(r,e)}function YR(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function n_(r){return(e,t)=>{let s=!1;for(const o of ka(r)){const l=XR(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function XR(r,e,t){const s=r.field.isKeyField()?ye.comparator(e.key,t.key):function(l,h,f){const g=h.data.field(l),v=f.data.field(l);return g!==null&&v!==null?po(g,v):Te(42886)}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Te(19790,{direction:r.dir})}}/**
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
 */class as{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ka(this.inner,(t,s)=>{for(const[o,l]of s)e(o,l)})}isEmpty(){return PR(this.inner)}size(){return this.innerSize}}/**
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
 */const JR=new st(ye.comparator);function vi(){return JR}const r_=new st(ye.comparator);function Sa(...r){let e=r_;for(const t of r)e=e.insert(t.key,t);return e}function ZR(r){let e=r_;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Xi(){return Pa()}function i_(){return Pa()}function Pa(){return new as(r=>r.toString(),(r,e)=>r.isEqual(e))}const eC=new mt(ye.comparator);function Le(...r){let e=eC;for(const t of r)e=e.add(t);return e}const tC=new mt(Ce);function nC(){return tC}/**
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
 */function rC(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Td(e)?"-0":e}}function iC(r){return{integerValue:""+r}}/**
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
 */class dc{constructor(){this._=void 0}}function sC(r,e,t){return r instanceof Pd?function(o,l){const h={fields:{[qv]:{stringValue:Hv},[Kv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&uf(l)&&(l=lc(l)),l&&(h.fields[Wv]=l),{mapValue:h}}(t,e):r instanceof qu?s_(r,e):r instanceof Wu?o_(r,e):function(o,l){const h=aC(o,l),f=$g(h)+$g(o.Re);return Rd(h)&&Rd(o.Re)?iC(f):rC(o.serializer,f)}(r,e)}function oC(r,e,t){return r instanceof qu?s_(r,e):r instanceof Wu?o_(r,e):t}function aC(r,e){return r instanceof Nd?function(s){return Rd(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class Pd extends dc{}class qu extends dc{constructor(e){super(),this.elements=e}}function s_(r,e){const t=a_(e);for(const s of r.elements)t.some(o=>er(o,s))||t.push(s);return{arrayValue:{values:t}}}class Wu extends dc{constructor(e){super(),this.elements=e}}function o_(r,e){let t=a_(e);for(const s of r.elements)t=t.filter(o=>!er(o,s));return{arrayValue:{values:t}}}class Nd extends dc{constructor(e,t){super(),this.serializer=e,this.Re=t}}function $g(r){return it(r.integerValue||r.doubleValue)}function a_(r){return cf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function lC(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof qu&&o instanceof qu||s instanceof Wu&&o instanceof Wu?fo(s.elements,o.elements,er):s instanceof Nd&&o instanceof Nd?er(s.Re,o.Re):s instanceof Pd&&o instanceof Pd}(r.transform,e.transform)}class es{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new es}static exists(e){return new es(void 0,e)}static updateTime(e){return new es(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class ff{}function l_(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new cC(r.key,es.none()):new pf(r.key,r.data,es.none());{const t=r.data,s=Gn.empty();let o=new mt(jt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new fc(r.key,s,new li(o.toArray()),es.none())}}function uC(r,e,t){r instanceof pf?function(o,l,h){const f=o.value.clone(),g=qg(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()}(r,e,t):r instanceof fc?function(o,l,h){if(!Nu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=qg(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(u_(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(r,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Na(r,e,t,s){return r instanceof pf?function(l,h,f,g){if(!Nu(l.precondition,h))return f;const v=l.value.clone(),E=Wg(l.fieldTransforms,g,h);return v.setAll(E),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(r,e,t,s):r instanceof fc?function(l,h,f,g){if(!Nu(l.precondition,h))return f;const v=Wg(l.fieldTransforms,g,h),E=h.data;return E.setAll(u_(l)),E.setAll(v),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(S=>S.field))}(r,e,t,s):function(l,h,f){return Nu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f}(r,e,t)}function Hg(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&fo(s,o,(l,h)=>lC(l,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class pf extends ff{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class fc extends ff{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function u_(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function qg(r,e,t){const s=new Map;Je(r.length===t.length,32656,{Ve:t.length,me:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);s.set(l.field,oC(h,f,t[o]))}return s}function Wg(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,sC(l,h,e))}return s}class cC extends ff{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class hC{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&uC(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Na(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Na(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=i_();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=l_(h,f);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(we.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Le())}isEqual(e){return this.batchId===e.batchId&&fo(this.mutations,e.mutations,(t,s)=>Hg(t,s))&&fo(this.baseMutations,e.baseMutations,(t,s)=>Hg(t,s))}}/**
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
 */class dC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class fC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var lt,xe;function c_(r){if(r===void 0)return xr("GRPC error has no .code"),ne.UNKNOWN;switch(r){case lt.OK:return ne.OK;case lt.CANCELLED:return ne.CANCELLED;case lt.UNKNOWN:return ne.UNKNOWN;case lt.DEADLINE_EXCEEDED:return ne.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return ne.RESOURCE_EXHAUSTED;case lt.INTERNAL:return ne.INTERNAL;case lt.UNAVAILABLE:return ne.UNAVAILABLE;case lt.UNAUTHENTICATED:return ne.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return ne.INVALID_ARGUMENT;case lt.NOT_FOUND:return ne.NOT_FOUND;case lt.ALREADY_EXISTS:return ne.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return ne.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return ne.FAILED_PRECONDITION;case lt.ABORTED:return ne.ABORTED;case lt.OUT_OF_RANGE:return ne.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return ne.UNIMPLEMENTED;case lt.DATA_LOSS:return ne.DATA_LOSS;default:return Te(39323,{code:r})}}(xe=lt||(lt={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const pC=new di([4294967295,4294967295],0);function Kg(r){const e=Bv().encode(r),t=new Ov;return t.update(e),new Uint8Array(t.digest())}function Gg(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new di([t,s],0),new di([o,l],0)]}class mf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ra(`Invalid padding: ${t}`);if(s<0)throw new Ra(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ra(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ra(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=di.fromNumber(this.pe)}we(e,t,s){let o=e.add(t.multiply(di.fromNumber(s)));return o.compare(pC)===1&&(o=new di([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Kg(e),[s,o]=Gg(t);for(let l=0;l<this.hashCount;l++){const h=this.we(s,o,l);if(!this.be(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new mf(l,o,t);return s.forEach(f=>h.insert(f)),h}insert(e){if(this.pe===0)return;const t=Kg(e),[s,o]=Gg(t);for(let l=0;l<this.hashCount;l++){const h=this.we(s,o,l);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ra extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class pc{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ga.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new pc(we.min(),o,new st(Ce),vi(),Le())}}class Ga{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ga(s,t,Le(),Le(),Le())}}/**
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
 */class xu{constructor(e,t,s,o){this.De=e,this.removedTargetIds=t,this.key=s,this.ve=o}}class h_{constructor(e,t){this.targetId=e,this.Ce=t}}class d_{constructor(e,t,s=At.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Qg{constructor(){this.Fe=0,this.Me=Yg(),this.xe=At.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Le(),t=Le(),s=Le();return this.Me.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:Te(38017,{changeType:l})}}),new Ga(this.xe,this.Oe,e,t,s)}Qe(){this.Ne=!1,this.Me=Yg()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Je(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class mC{constructor(e){this.ze=e,this.je=new Map,this.He=vi(),this.Je=vu(),this.Ye=vu(),this.Ze=new st(Ce)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const s=this.rt(t);switch(e.state){case 0:this.it(t)&&s.ke(e.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(e.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(t);break;case 3:this.it(t)&&(s.Ge(),s.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),s.ke(e.resumeToken));break;default:Te(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((s,o)=>{this.it(o)&&t(o)})}ot(e){const t=e.targetId,s=e.Ce.count,o=this._t(t);if(o){const l=o.target;if(Ad(l))if(s===0){const h=new ye(l.path);this.tt(t,h,Mt.newNoDocument(h,we.min()))}else Je(s===1,20013,{expectedCount:s});else{const h=this.ut(t);if(h!==s){const f=this.ct(e),g=f?this.lt(f,e,h):1;if(g!==0){this.st(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,v)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=gi(s).toUint8Array()}catch(g){if(g instanceof $v)return ho("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new mf(h,o,l)}catch(g){return ho(g instanceof Ra?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.pe===0?null:f}lt(e,t,s){return t.Ce.count===s-this.Tt(e,t.targetId)?0:2}Tt(e,t){const s=this.ze.getRemoteKeysForTarget(t);let o=0;return s.forEach(l=>{const h=this.ze.Pt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.tt(t,l,null),o++)}),o}It(e){const t=new Map;this.je.forEach((l,h)=>{const f=this._t(h);if(f){if(l.current&&Ad(f.target)){const g=new ye(f.target.path);this.Et(g).has(h)||this.dt(h,g)||this.tt(h,g,Mt.newNoDocument(g,e))}l.Le&&(t.set(h,l.qe()),l.Qe())}});let s=Le();this.Ye.forEach((l,h)=>{let f=!0;h.forEachWhile(g=>{const v=this._t(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(s=s.add(l))}),this.He.forEach((l,h)=>h.setReadTime(e));const o=new pc(e,t,this.Ze,this.He,s);return this.He=vi(),this.Je=vu(),this.Ye=vu(),this.Ze=new st(Ce),o}et(e,t){if(!this.it(e))return;const s=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,s),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,s){if(!this.it(e))return;const o=this.rt(e);this.dt(e,t)?o.$e(t,1):o.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),s&&(this.He=this.He.insert(t,s))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Qg,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new mt(Ce),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new mt(Ce),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Qg),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function vu(){return new st(ye.comparator)}function Yg(){return new st(ye.comparator)}const gC={asc:"ASCENDING",desc:"DESCENDING"},yC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vC={and:"AND",or:"OR"};class _C{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function xd(r,e){return r.useProto3Json||ac(e)?e:{value:e}}function EC(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wC(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function ao(r){return Je(!!r,49232),we.fromTimestamp(function(t){const s=mi(t);return new Jt(s.seconds,s.nanos)}(r))}function TC(r,e){return Dd(r,e).canonicalString()}function Dd(r,e){const t=function(o){return new et(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function f_(r){const e=et.fromString(r);return Je(v_(e),10190,{key:e.toString()}),e}function id(r,e){const t=f_(e);if(t.get(1)!==r.databaseId.projectId)throw new me(ne.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new me(ne.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new ye(m_(t))}function p_(r,e){return TC(r.databaseId,e)}function IC(r){const e=f_(r);return e.length===4?et.emptyPath():m_(e)}function Xg(r){return new et(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function m_(r){return Je(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function SC(r,e){let t;if("targetChange"in e){e.targetChange;const s=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:Te(39313,{state:v})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(v,E){return v.useProto3Json?(Je(E===void 0||typeof E=="string",58123),At.fromBase64String(E||"")):(Je(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),At.fromUint8Array(E||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&function(v){const E=v.code===void 0?ne.UNKNOWN:c_(v.code);return new me(E,v.message||"")}(h);t=new d_(s,o,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=id(r,s.document.name),l=ao(s.document.updateTime),h=s.document.createTime?ao(s.document.createTime):we.min(),f=new Gn({mapValue:{fields:s.document.fields}}),g=Mt.newFoundDocument(o,l,h,f),v=s.targetIds||[],E=s.removedTargetIds||[];t=new xu(v,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=id(r,s.document),l=s.readTime?ao(s.readTime):we.min(),h=Mt.newNoDocument(o,l),f=s.removedTargetIds||[];t=new xu([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=id(r,s.document),l=s.removedTargetIds||[];t=new xu([],l,o,null)}else{if(!("filter"in e))return Te(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new fC(o,l),f=s.targetId;t=new h_(f,h)}}return t}function RC(r,e){return{documents:[p_(r,e.path)]}}function CC(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=p_(r,o);const l=function(v){if(v.length!==0)return y_(tr.create(v,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(v){if(v.length!==0)return v.map(E=>function(A){return{field:no(A.field),direction:PC(A.dir)}}(E))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=xd(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{gt:t,parent:o}}function AC(r){let e=IC(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Je(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(S){const A=g_(S);return A instanceof tr&&Yv(A)?A.getFilters():[A]}(t.where));let h=[];t.orderBy&&(h=function(S){return S.map(A=>function(M){return new Hu(ro(M.field),function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(M.direction))}(A))}(t.orderBy));let f=null;t.limit&&(f=function(S){let A;return A=typeof S=="object"?S.value:S,ac(A)?null:A}(t.limit));let g=null;t.startAt&&(g=function(S){const A=!!S.before,F=S.values||[];return new $u(F,A)}(t.startAt));let v=null;return t.endAt&&(v=function(S){const A=!S.before,F=S.values||[];return new $u(F,A)}(t.endAt)),KR(e,o,h,l,f,"F",g,v)}function kC(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function g_(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ro(t.unaryFilter.field);return pt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=ro(t.unaryFilter.field);return pt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=ro(t.unaryFilter.field);return pt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=ro(t.unaryFilter.field);return pt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Te(61313);default:return Te(60726)}}(r):r.fieldFilter!==void 0?function(t){return pt.create(ro(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Te(58110);default:return Te(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return tr.create(t.compositeFilter.filters.map(s=>g_(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Te(1026)}}(t.compositeFilter.op))}(r):Te(30097,{filter:r})}function PC(r){return gC[r]}function NC(r){return yC[r]}function xC(r){return vC[r]}function no(r){return{fieldPath:r.canonicalString()}}function ro(r){return jt.fromServerFormat(r.fieldPath)}function y_(r){return r instanceof pt?function(t){if(t.op==="=="){if(Fg(t.value))return{unaryFilter:{field:no(t.field),op:"IS_NAN"}};if(bg(t.value))return{unaryFilter:{field:no(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Fg(t.value))return{unaryFilter:{field:no(t.field),op:"IS_NOT_NAN"}};if(bg(t.value))return{unaryFilter:{field:no(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:no(t.field),op:NC(t.op),value:t.value}}}(r):r instanceof tr?function(t){const s=t.getFilters().map(o=>y_(o));return s.length===1?s[0]:{compositeFilter:{op:xC(t.op),filters:s}}}(r):Te(54877,{filter:r})}function v_(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class ui{constructor(e,t,s,o,l=we.min(),h=we.min(),f=At.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new ui(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ui(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ui(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ui(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class DC{constructor(e){this.wt=e}}function OC(r){const e=AC({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?kd(e,e.limit,"L"):e}/**
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
 */class LC{constructor(){this.yn=new VC}addToCollectionParentIndex(e,t){return this.yn.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.yn.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(pi.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(pi.min())}updateCollectionGroup(e,t,s){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class VC{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new mt(et.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new mt(et.comparator)).toArray()}}/**
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
 */const Jg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},__=41943040;class Xt{static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(__,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
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
 */class go{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new go(0)}static ir(){return new go(-1)}}/**
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
 */const Zg="LruGarbageCollector",MC=1048576;function ey([r,e],[t,s]){const o=Ce(r,t);return o===0?Ce(e,s):o}class bC{constructor(e){this.cr=e,this.buffer=new mt(ey),this.lr=0}hr(){return++this.lr}Pr(e){const t=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();ey(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class FC{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){oe(Zg,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Io(t)?oe(Zg,"Ignoring IndexedDB error during garbage collection: ",t):await sc(t)}await this.Ir(3e5)})}}class UC{constructor(e,t){this.Er=e,this.params=t}calculateTargetCount(e,t){return this.Er.dr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return K.resolve(oc.le);const s=new bC(t);return this.Er.forEachTarget(e,o=>s.Pr(o.sequenceNumber)).next(()=>this.Er.Ar(e,o=>s.Pr(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Er.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Er.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(Jg)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jg):this.Rr(e,t))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,t){let s,o,l,h,f,g,v;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,h=Date.now(),this.nthSequenceNumber(e,o))).next(S=>(s=S,f=Date.now(),this.removeTargets(e,s,t))).next(S=>(l=S,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(S=>(v=Date.now(),eo()<=Ae.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${S} documents in `+(v-g)+`ms
Total Duration: ${v-E}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:S})))}}function zC(r,e){return new UC(r,e)}/**
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
 */class BC{constructor(){this.changes=new as(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?K.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class jC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class $C{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Na(s.mutation,o,li.empty(),Jt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Le()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Le()){const o=Xi();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(l=>{let h=Sa();return l.forEach((f,g)=>{h=h.insert(f,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=Xi();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Le()))}populateOverlays(e,t,s){const o=[];return s.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,f)=>{t.set(h,f)})})}computeViews(e,t,s,o){let l=vi();const h=Pa(),f=function(){return Pa()}();return t.forEach((g,v)=>{const E=s.get(v.key);o.has(v.key)&&(E===void 0||E.mutation instanceof fc)?l=l.insert(v.key,v):E!==void 0?(h.set(v.key,E.mutation.getFieldMask()),Na(E.mutation,v,E.mutation.getFieldMask(),Jt.now())):h.set(v.key,li.empty())}),this.recalculateAndSaveOverlays(e,l).next(g=>(g.forEach((v,E)=>h.set(v,E)),t.forEach((v,E)=>{var S;return f.set(v,new jC(E,(S=h.get(v))!==null&&S!==void 0?S:null))}),f))}recalculateAndSaveOverlays(e,t){const s=Pa();let o=new st((h,f)=>h-f),l=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const f of h)f.keys().forEach(g=>{const v=t.get(g);if(v===null)return;let E=s.get(g)||li.empty();E=f.applyToLocalView(v,E),s.set(g,E);const S=(o.get(f.batchId)||Le()).add(g);o=o.insert(f.batchId,S)})}).next(()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),v=g.key,E=g.value,S=i_();E.forEach(A=>{if(!l.has(A)){const F=l_(t.get(A),s.get(A));F!==null&&S.set(A,F),l=l.add(A)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,S))}return K.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return ye.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):GR(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):K.resolve(Xi());let f=La,g=l;return h.next(v=>K.forEach(v,(E,S)=>(f<S.largestBatchId&&(f=S.largestBatchId),l.get(E)?K.resolve():this.remoteDocumentCache.getEntry(e,E).next(A=>{g=g.insert(E,A)}))).next(()=>this.populateOverlays(e,v,l)).next(()=>this.computeViews(e,g,v,Le())).next(E=>({batchId:f,changes:ZR(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next(s=>{let o=Sa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=Sa();return this.indexManager.getCollectionParents(e,l).next(f=>K.forEach(f,g=>{const v=function(S,A){return new uc(A,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next(E=>{E.forEach((S,A)=>{h=h.insert(S,A)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o))).next(h=>{l.forEach((g,v)=>{const E=v.getKey();h.get(E)===null&&(h=h.insert(E,Mt.newInvalidDocument(E)))});let f=Sa();return h.forEach((g,v)=>{const E=l.get(g);E!==void 0&&Na(E.mutation,v,li.empty(),Jt.now()),hc(t,v)&&(f=f.insert(g,v))}),f})}}/**
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
 */class HC{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,t){return K.resolve(this.Fr.get(t))}saveBundleMetadata(e,t){return this.Fr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:ao(o.createTime)}}(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Mr.get(t))}saveNamedQuery(e,t){return this.Mr.set(t.name,function(o){return{name:o.name,query:OC(o.bundledQuery),readTime:ao(o.readTime)}}(t)),K.resolve()}}/**
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
 */class qC{constructor(){this.overlays=new st(ye.comparator),this.Or=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Xi();return K.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&s.set(o,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,l)=>{this.St(e,t,l)}),K.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Or.get(s);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Or.delete(s)),K.resolve()}getOverlaysForCollection(e,t,s){const o=Xi(),l=t.length+1,h=new ye(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return K.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new st((v,E)=>v-E);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let E=l.get(v.largestBatchId);E===null&&(E=Xi(),l=l.insert(v.largestBatchId,E)),E.set(v.getKey(),v)}}const f=Xi(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((v,E)=>f.set(v,E)),!(f.size()>=o)););return K.resolve(f)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Or.get(o.largestBatchId).delete(s.key);this.Or.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new dC(t,s));let l=this.Or.get(t);l===void 0&&(l=Le(),this.Or.set(t,l)),this.Or.set(t,l.add(s.key))}}/**
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
 */class WC{constructor(){this.sessionToken=At.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
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
 */class gf{constructor(){this.Nr=new mt(wt.Br),this.Lr=new mt(wt.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,t){const s=new wt(e,t);this.Nr=this.Nr.add(s),this.Lr=this.Lr.add(s)}qr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Qr(new wt(e,t))}$r(e,t){e.forEach(s=>this.removeReference(s,t))}Ur(e){const t=new ye(new et([])),s=new wt(t,e),o=new wt(t,e+1),l=[];return this.Lr.forEachInRange([s,o],h=>{this.Qr(h),l.push(h.key)}),l}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const t=new ye(new et([])),s=new wt(t,e),o=new wt(t,e+1);let l=Le();return this.Lr.forEachInRange([s,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new wt(e,0),s=this.Nr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class wt{constructor(e,t){this.key=e,this.Gr=t}static Br(e,t){return ye.comparator(e.key,t.key)||Ce(e.Gr,t.Gr)}static kr(e,t){return Ce(e.Gr,t.Gr)||ye.comparator(e.key,t.key)}}/**
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
 */class KC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Jn=1,this.zr=new mt(wt.Br)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new hC(l,t,s,o);this.mutationQueue.push(h);for(const f of o)this.zr=this.zr.add(new wt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return K.resolve(h)}lookupMutationBatch(e,t){return K.resolve(this.jr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Hr(s),l=o<0?0:o;return K.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?CR:this.Jn-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new wt(t,0),o=new wt(t,Number.POSITIVE_INFINITY),l=[];return this.zr.forEachInRange([s,o],h=>{const f=this.jr(h.Gr);l.push(f)}),K.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new mt(Ce);return t.forEach(o=>{const l=new wt(o,0),h=new wt(o,Number.POSITIVE_INFINITY);this.zr.forEachInRange([l,h],f=>{s=s.add(f.Gr)})}),K.resolve(this.Jr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;ye.isDocumentKey(l)||(l=l.child(""));const h=new wt(new ye(l),0);let f=new mt(Ce);return this.zr.forEachWhile(g=>{const v=g.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(f=f.add(g.Gr)),!0)},h),K.resolve(this.Jr(f))}Jr(e){const t=[];return e.forEach(s=>{const o=this.jr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Je(this.Yr(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.zr;return K.forEach(t.mutations,o=>{const l=new wt(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.zr=s})}Xn(e){}containsKey(e,t){const s=new wt(t,0),o=this.zr.firstAfterOrEqual(s);return K.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Yr(e,t){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const t=this.Hr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class GC{constructor(e){this.Zr=e,this.docs=function(){return new st(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.Zr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return K.resolve(s?s.document.mutableCopy():Mt.newInvalidDocument(t))}getEntries(e,t){let s=vi();return t.forEach(o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():Mt.newInvalidDocument(o))}),K.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=vi();const h=t.path,f=new ye(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:v,value:{document:E}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||TR(wR(E),s)<=0||(o.has(E.key)||hc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return K.resolve(l)}getAllFromCollectionGroup(e,t,s,o){Te(9500)}Xr(e,t){return K.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new QC(this)}getSize(e){return K.resolve(this.size)}}class QC extends BC{constructor(e){super(),this.vr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.vr.addEntry(e,o)):this.vr.removeEntry(s)}),K.waitFor(t)}getFromCache(e,t){return this.vr.getEntry(e,t)}getAllFromCache(e,t){return this.vr.getEntries(e,t)}}/**
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
 */class YC{constructor(e){this.persistence=e,this.ei=new as(t=>hf(t),df),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.ti=0,this.ni=new gf,this.targetCount=0,this.ri=go.rr()}forEachTarget(e,t){return this.ei.forEach((s,o)=>t(o)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ti&&(this.ti=t),K.resolve()}ar(e){this.ei.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ri=new go(t),this.highestTargetId=t),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,t){return this.ar(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.ar(t),K.resolve()}removeTargetData(e,t){return this.ei.delete(t.target),this.ni.Ur(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.ei.forEach((h,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.ei.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)}),K.waitFor(l).next(()=>o)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const s=this.ei.get(t)||null;return K.resolve(s)}addMatchingKeys(e,t,s){return this.ni.qr(t,s),K.resolve()}removeMatchingKeys(e,t,s){this.ni.$r(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),K.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.ni.Ur(t),K.resolve()}getMatchingKeysForTargetId(e,t){const s=this.ni.Wr(t);return K.resolve(s)}containsKey(e,t){return K.resolve(this.ni.containsKey(t))}}/**
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
 */class E_{constructor(e,t){this.ii={},this.overlays={},this.si=new oc(0),this.oi=!1,this.oi=!0,this._i=new WC,this.referenceDelegate=e(this),this.ai=new YC(this),this.indexManager=new LC,this.remoteDocumentCache=function(o){return new GC(o)}(s=>this.referenceDelegate.ui(s)),this.serializer=new DC(t),this.ci=new HC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ii[e.toKey()];return s||(s=new KC(t,this.referenceDelegate),this.ii[e.toKey()]=s),s}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,t,s){oe("MemoryPersistence","Starting transaction:",e);const o=new XC(this.si.next());return this.referenceDelegate.li(),s(o).next(l=>this.referenceDelegate.hi(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Pi(e,t){return K.or(Object.values(this.ii).map(s=>()=>s.containsKey(e,t)))}}class XC extends SR{constructor(e){super(),this.currentSequenceNumber=e}}class yf{constructor(e){this.persistence=e,this.Ti=new gf,this.Ii=null}static Ei(e){return new yf(e)}get di(){if(this.Ii)return this.Ii;throw Te(60996)}addReference(e,t,s){return this.Ti.addReference(s,t),this.di.delete(s.toString()),K.resolve()}removeReference(e,t,s){return this.Ti.removeReference(s,t),this.di.add(s.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),K.resolve()}removeTarget(e,t){this.Ti.Ur(t.targetId).forEach(o=>this.di.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.di.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}li(){this.Ii=new Set}hi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.di,s=>{const o=ye.fromPath(s);return this.Ai(e,o).next(l=>{l||t.removeEntry(o,we.min())})}).next(()=>(this.Ii=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ai(e,t).next(s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())})}ui(e){return 0}Ai(e,t){return K.or([()=>K.resolve(this.Ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Pi(e,t)])}}class Ku{constructor(e,t){this.persistence=e,this.Ri=new as(s=>AR(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=zC(this,t)}static Ei(e,t){return new Ku(e,t)}li(){}hi(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}Vr(e){let t=0;return this.Ar(e,s=>{t++}).next(()=>t)}Ar(e,t){return K.forEach(this.Ri,(s,o)=>this.gr(e,s,o).next(l=>l?K.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Xr(e,h=>this.gr(e,h,t).next(f=>{f||(s++,l.removeEntry(h,we.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.Ri.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.Ri.set(s,e.currentSequenceNumber),K.resolve()}removeReference(e,t,s){return this.Ri.set(s,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.Ri.set(t,e.currentSequenceNumber),K.resolve()}ui(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Pu(e.data.value)),t}gr(e,t,s){return K.or([()=>this.persistence.Pi(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.Ri.get(t);return K.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class vf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.ls=s,this.hs=o}static Ps(e,t){let s=Le(),o=Le();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new vf(e,t.fromCache,s,o)}}/**
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
 */class JC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ZC{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return q0()?8:RR(bt())>0?6:4}()}initialize(e,t){this.As=e,this.indexManager=t,this.Ts=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.Rs(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.Vs(e,t,o,s).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new JC;return this.fs(e,t,h).next(f=>{if(l.result=f,this.Is)return this.gs(e,t,h,f.size)})}).next(()=>l.result)}gs(e,t,s,o){return s.documentReadCount<this.Es?(eo()<=Ae.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",to(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),K.resolve()):(eo()<=Ae.DEBUG&&oe("QueryEngine","Query:",to(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(eo()<=Ae.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",to(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xn(t))):K.resolve())}Rs(e,t){if(jg(t))return K.resolve(null);let s=Xn(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=kd(t,null,"F"),s=Xn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const h=Le(...l);return this.As.getDocuments(e,h).next(f=>this.indexManager.getMinOffset(e,s).next(g=>{const v=this.ps(t,f);return this.ys(t,v,h,g.readTime)?this.Rs(e,kd(t,null,"F")):this.ws(e,v,t,g)}))})))}Vs(e,t,s,o){return jg(t)||o.isEqual(we.min())?K.resolve(null):this.As.getDocuments(e,s).next(l=>{const h=this.ps(t,l);return this.ys(t,h,s,o)?K.resolve(null):(eo()<=Ae.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),to(t)),this.ws(e,h,t,ER(o,La)).next(f=>f))})}ps(e,t){let s=new mt(n_(e));return t.forEach((o,l)=>{hc(e,l)&&(s=s.add(l))}),s}ys(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}fs(e,t,s){return eo()<=Ae.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",to(t)),this.As.getDocumentsMatchingQuery(e,t,pi.min(),s)}ws(e,t,s,o){return this.As.getDocumentsMatchingQuery(e,s,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
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
 */const _f="LocalStore",eA=3e8;class tA{constructor(e,t,s,o){this.persistence=e,this.bs=t,this.serializer=o,this.Ss=new st(Ce),this.Ds=new as(l=>hf(l),df),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(s)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $C(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ss))}}function nA(r,e,t,s){return new tA(r,e,t,s)}async function w_(r,e){const t=De(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(l=>(o=l,t.Fs(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const h=[],f=[];let g=Le();for(const v of o){h.push(v.batchId);for(const E of v.mutations)g=g.add(E.key)}for(const v of l){f.push(v.batchId);for(const E of v.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(s,g).next(v=>({Ms:v,removedBatchIds:h,addedBatchIds:f}))})})}function T_(r){const e=De(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ai.getLastRemoteSnapshotVersion(t))}function rA(r,e){const t=De(r),s=e.snapshotVersion;let o=t.Ss;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.Cs.newChangeBuffer({trackRemovals:!0});o=t.Ss;const f=[];e.targetChanges.forEach((E,S)=>{const A=o.get(S);if(!A)return;f.push(t.ai.removeMatchingKeys(l,E.removedDocuments,S).next(()=>t.ai.addMatchingKeys(l,E.addedDocuments,S)));let F=A.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(S)!==null?F=F.withResumeToken(At.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):E.resumeToken.approximateByteSize()>0&&(F=F.withResumeToken(E.resumeToken,s)),o=o.insert(S,F),function($,z,q){return $.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=eA?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(A,F,E)&&f.push(t.ai.updateTargetData(l,F))});let g=vi(),v=Le();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))}),f.push(iA(l,h,e.documentUpdates).next(E=>{g=E.xs,v=E.Os})),!s.isEqual(we.min())){const E=t.ai.getLastRemoteSnapshotVersion(l).next(S=>t.ai.setTargetsMetadata(l,l.currentSequenceNumber,s));f.push(E)}return K.waitFor(f).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,g,v)).next(()=>g)}).then(l=>(t.Ss=o,l))}function iA(r,e,t){let s=Le(),o=Le();return t.forEach(l=>s=s.add(l)),e.getEntries(r,s).next(l=>{let h=vi();return t.forEach((f,g)=>{const v=l.get(f);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(we.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):oe(_f,"Ignoring outdated watch update for ",f,". Current version:",v.version," Watch version:",g.version)}),{xs:h,Os:o}})}function sA(r,e){const t=De(r);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.ai.getTargetData(s,e).next(l=>l?(o=l,K.resolve(o)):t.ai.allocateTargetId(s).next(h=>(o=new ui(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.ai.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Ss.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ss=t.Ss.insert(s.targetId,s),t.Ds.set(e,s.targetId)),s})}async function Od(r,e,t){const s=De(r),o=s.Ss.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Io(h))throw h;oe(_f,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ss=s.Ss.remove(e),s.Ds.delete(o.target)}function ty(r,e,t){const s=De(r);let o=we.min(),l=Le();return s.persistence.runTransaction("Execute query","readwrite",h=>function(g,v,E){const S=De(g),A=S.Ds.get(E);return A!==void 0?K.resolve(S.Ss.get(A)):S.ai.getTargetData(v,E)}(s,h,Xn(e)).next(f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,s.ai.getMatchingKeysForTargetId(h,f.targetId).next(g=>{l=g})}).next(()=>s.bs.getDocumentsMatchingQuery(h,e,t?o:we.min(),t?l:Le())).next(f=>(oA(s,YR(e),f),{documents:f,Ns:l})))}function oA(r,e,t){let s=r.vs.get(e)||we.min();t.forEach((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),r.vs.set(e,s)}class ny{constructor(){this.activeTargetIds=nC()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aA{constructor(){this.So=new ny,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,t,s){this.Do[e]=t}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new ny,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lA{vo(e){}shutdown(){}}/**
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
 */const ry="ConnectivityMonitor";class iy{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){oe(ry,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){oe(ry,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _u=null;function Ld(){return _u===null?_u=function(){return 268435456+Math.round(2147483648*Math.random())}():_u++,"0x"+_u.toString(16)}/**
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
 */const sd="RestConnection",uA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class cA{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Lo=t+"://"+e.host,this.ko=`projects/${s}/databases/${o}`,this.qo=this.databaseId.database===ju?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Qo(e,t,s,o,l){const h=Ld(),f=this.$o(e,t.toUriEncodedString());oe(sd,`Sending RPC '${e}' ${h}:`,f,s);const g={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};this.Uo(g,o,l);const{host:v}=new URL(f),E=$a(v);return this.Ko(e,f,g,s,E).then(S=>(oe(sd,`Received RPC '${e}' ${h}: `,S),S),S=>{throw ho(sd,`RPC '${e}' ${h} failed with error: `,S,"url: ",f,"request:",s),S})}Wo(e,t,s,o,l,h){return this.Qo(e,t,s,o,l)}Uo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+To}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,l)=>e[l]=o),s&&s.headers.forEach((o,l)=>e[l]=o)}$o(e,t){const s=uA[e];return`${this.Lo}/v1/${t}:${s}`}terminate(){}}/**
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
 */class hA{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
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
 */const Lt="WebChannelConnection";class dA extends cA{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,t,s,o,l){const h=Ld();return new Promise((f,g)=>{const v=new Lv;v.setWithCredentials(!0),v.listenOnce(Vv.COMPLETE,()=>{try{switch(v.getLastErrorCode()){case ku.NO_ERROR:const S=v.getResponseJson();oe(Lt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(S)),f(S);break;case ku.TIMEOUT:oe(Lt,`RPC '${e}' ${h} timed out`),g(new me(ne.DEADLINE_EXCEEDED,"Request time out"));break;case ku.HTTP_ERROR:const A=v.getStatus();if(oe(Lt,`RPC '${e}' ${h} failed with status:`,A,"response text:",v.getResponseText()),A>0){let F=v.getResponseJson();Array.isArray(F)&&(F=F[0]);const M=F==null?void 0:F.error;if(M&&M.status&&M.message){const $=function(q){const te=q.toLowerCase().replace(/_/g,"-");return Object.values(ne).indexOf(te)>=0?te:ne.UNKNOWN}(M.status);g(new me($,M.message))}else g(new me(ne.UNKNOWN,"Server responded with status "+v.getStatus()))}else g(new me(ne.UNAVAILABLE,"Connection failed."));break;default:Te(9055,{s_:e,streamId:h,o_:v.getLastErrorCode(),__:v.getLastError()})}}finally{oe(Lt,`RPC '${e}' ${h} completed.`)}});const E=JSON.stringify(o);oe(Lt,`RPC '${e}' ${h} sending request:`,o),v.send(t,"POST",E,s,15)})}a_(e,t,s){const o=Ld(),l=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Fv(),f=bv(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Uo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const E=l.join("");oe(Lt,`Creating RPC '${e}' stream ${o}: ${E}`,g);const S=h.createWebChannel(E,g);let A=!1,F=!1;const M=new hA({Go:z=>{F?oe(Lt,`Not sending because RPC '${e}' stream ${o} is closed:`,z):(A||(oe(Lt,`Opening RPC '${e}' stream ${o} transport.`),S.open(),A=!0),oe(Lt,`RPC '${e}' stream ${o} sending:`,z),S.send(z))},zo:()=>S.close()}),$=(z,q,te)=>{z.listen(q,Y=>{try{te(Y)}catch(re){setTimeout(()=>{throw re},0)}})};return $(S,Ia.EventType.OPEN,()=>{F||(oe(Lt,`RPC '${e}' stream ${o} transport opened.`),M.t_())}),$(S,Ia.EventType.CLOSE,()=>{F||(F=!0,oe(Lt,`RPC '${e}' stream ${o} transport closed`),M.r_())}),$(S,Ia.EventType.ERROR,z=>{F||(F=!0,ho(Lt,`RPC '${e}' stream ${o} transport errored. Name:`,z.name,"Message:",z.message),M.r_(new me(ne.UNAVAILABLE,"The operation could not be completed")))}),$(S,Ia.EventType.MESSAGE,z=>{var q;if(!F){const te=z.data[0];Je(!!te,16349);const Y=te,re=(Y==null?void 0:Y.error)||((q=Y[0])===null||q===void 0?void 0:q.error);if(re){oe(Lt,`RPC '${e}' stream ${o} received error:`,re);const Ee=re.status;let ge=function(R){const P=lt[R];if(P!==void 0)return c_(P)}(Ee),N=re.message;ge===void 0&&(ge=ne.INTERNAL,N="Unknown error status: "+Ee+" with message "+re.message),F=!0,M.r_(new me(ge,N)),S.close()}else oe(Lt,`RPC '${e}' stream ${o} received:`,te),M.i_(te)}}),$(f,Mv.STAT_EVENT,z=>{z.stat===Ed.PROXY?oe(Lt,`RPC '${e}' stream ${o} detected buffering proxy`):z.stat===Ed.NOPROXY&&oe(Lt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{M.n_()},0),M}}function od(){return typeof document<"u"?document:null}/**
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
 */function I_(r){return new _C(r,!0)}/**
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
 */class S_{constructor(e,t,s=1e3,o=1.5,l=6e4){this.bi=e,this.timerId=t,this.u_=s,this.c_=o,this.l_=l,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const t=Math.floor(this.h_+this.d_()),s=Math.max(0,Date.now()-this.T_),o=Math.max(0,t-s);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.h_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,o,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
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
 */const sy="PersistentStream";class fA{constructor(e,t,s,o,l,h,f,g){this.bi=e,this.R_=s,this.V_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new S_(e,t)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,t){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():t&&t.code===ne.RESOURCE_EXHAUSTED?(xr(t.toString()),xr("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):t&&t.code===ne.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(t)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),t=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.m_===t&&this.B_(s,o)},s=>{e(()=>{const o=new me(ne.UNKNOWN,"Fetching auth token failed: "+s.message);return this.L_(o)})})}B_(e,t){const s=this.N_(this.m_);this.stream=this.k_(e,t),this.stream.jo(()=>{s(()=>this.listener.jo())}),this.stream.Jo(()=>{s(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(o=>{s(()=>this.L_(o))}),this.stream.onMessage(o=>{s(()=>++this.p_==1?this.q_(o):this.onNext(o))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return oe(sy,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return t=>{this.bi.enqueueAndForget(()=>this.m_===e?t():(oe(sy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pA extends fA{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}k_(e,t){return this.connection.a_("Listen",e,t)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const t=SC(this.serializer,e),s=function(l){if(!("targetChange"in l))return we.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?ao(h.readTime):we.min()}(e);return this.listener.Q_(t,s)}U_(e){const t={};t.database=Xg(this.serializer),t.addTarget=function(l,h){let f;const g=h.target;if(f=Ad(g)?{documents:RC(l,g)}:{query:CC(l,g).gt},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=wC(l,h.resumeToken);const v=xd(l,h.expectedCount);v!==null&&(f.expectedCount=v)}else if(h.snapshotVersion.compareTo(we.min())>0){f.readTime=EC(l,h.snapshotVersion.toTimestamp());const v=xd(l,h.expectedCount);v!==null&&(f.expectedCount=v)}return f}(this.serializer,e);const s=kC(this.serializer,e);s&&(t.labels=s),this.F_(t)}K_(e){const t={};t.database=Xg(this.serializer),t.removeTarget=e,this.F_(t)}}/**
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
 */class mA{}class gA extends mA{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.J_=!1}Y_(){if(this.J_)throw new me(ne.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,t,s,o){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Qo(e,Dd(t,s),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new me(ne.UNKNOWN,l.toString())})}Wo(e,t,s,o,l){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,f])=>this.connection.Wo(e,Dd(t,s),o,h,f,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new me(ne.UNKNOWN,h.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class yA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(xr(t),this.ea=!1):oe("OnlineStateTracker",t)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
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
 */const yo="RemoteStore";class vA{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=l,this.ca.vo(h=>{s.enqueueAndForget(async()=>{Ya(this)&&(oe(yo,"Restarting streams for network reachability change."),await async function(g){const v=De(g);v.aa.add(4),await Qa(v),v.la.set("Unknown"),v.aa.delete(4),await mc(v)}(this))})}),this.la=new yA(s,o)}}async function mc(r){if(Ya(r))for(const e of r.ua)await e(!0)}async function Qa(r){for(const e of r.ua)await e(!1)}function R_(r,e){const t=De(r);t._a.has(e.targetId)||(t._a.set(e.targetId,e),If(t)?Tf(t):So(t).b_()&&wf(t,e))}function Ef(r,e){const t=De(r),s=So(t);t._a.delete(e),s.b_()&&C_(t,e),t._a.size===0&&(s.b_()?s.v_():Ya(t)&&t.la.set("Unknown"))}function wf(r,e){if(r.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}So(r).U_(e)}function C_(r,e){r.ha.Ke(e),So(r).K_(e)}function Tf(r){r.ha=new mC({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>r._a.get(e)||null,Pt:()=>r.datastore.serializer.databaseId}),So(r).start(),r.la.ta()}function If(r){return Ya(r)&&!So(r).w_()&&r._a.size>0}function Ya(r){return De(r).aa.size===0}function A_(r){r.ha=void 0}async function _A(r){r.la.set("Online")}async function EA(r){r._a.forEach((e,t)=>{wf(r,e)})}async function wA(r,e){A_(r),If(r)?(r.la.ia(e),Tf(r)):r.la.set("Unknown")}async function TA(r,e,t){if(r.la.set("Online"),e instanceof d_&&e.state===2&&e.cause)try{await async function(o,l){const h=l.cause;for(const f of l.targetIds)o._a.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o._a.delete(f),o.ha.removeTarget(f))}(r,e)}catch(s){oe(yo,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await oy(r,s)}else if(e instanceof xu?r.ha.Xe(e):e instanceof h_?r.ha.ot(e):r.ha.nt(e),!t.isEqual(we.min()))try{const s=await T_(r.localStore);t.compareTo(s)>=0&&await function(l,h){const f=l.ha.It(h);return f.targetChanges.forEach((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const E=l._a.get(v);E&&l._a.set(v,E.withResumeToken(g.resumeToken,h))}}),f.targetMismatches.forEach((g,v)=>{const E=l._a.get(g);if(!E)return;l._a.set(g,E.withResumeToken(At.EMPTY_BYTE_STRING,E.snapshotVersion)),C_(l,g);const S=new ui(E.target,g,v,E.sequenceNumber);wf(l,S)}),l.remoteSyncer.applyRemoteEvent(f)}(r,t)}catch(s){oe(yo,"Failed to raise snapshot:",s),await oy(r,s)}}async function oy(r,e,t){if(!Io(e))throw e;r.aa.add(1),await Qa(r),r.la.set("Offline"),t||(t=()=>T_(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{oe(yo,"Retrying IndexedDB access"),await t(),r.aa.delete(1),await mc(r)})}async function ay(r,e){const t=De(r);t.asyncQueue.verifyOperationInProgress(),oe(yo,"RemoteStore received new credentials");const s=Ya(t);t.aa.add(3),await Qa(t),s&&t.la.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.aa.delete(3),await mc(t)}async function IA(r,e){const t=De(r);e?(t.aa.delete(2),await mc(t)):e||(t.aa.add(2),await Qa(t),t.la.set("Unknown"))}function So(r){return r.Pa||(r.Pa=function(t,s,o){const l=De(t);return l.Y_(),new pA(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(r.datastore,r.asyncQueue,{jo:_A.bind(null,r),Jo:EA.bind(null,r),Zo:wA.bind(null,r),Q_:TA.bind(null,r)}),r.ua.push(async e=>{e?(r.Pa.D_(),If(r)?Tf(r):r.la.set("Unknown")):(await r.Pa.stop(),A_(r))})),r.Pa}/**
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
 */class Sf{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new Zi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,f=new Sf(e,t,h,o,l);return f.start(s),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new me(ne.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function k_(r,e){if(xr("AsyncQueue",`${e}: ${r}`),Io(r))return new me(ne.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class lo{static emptySet(e){return new lo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ye.comparator(t.key,s.key):(t,s)=>ye.comparator(t.key,s.key),this.keyedMap=Sa(),this.sortedSet=new st(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof lo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new lo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class ly{constructor(){this.Ia=new st(ye.comparator)}track(e){const t=e.doc.key,s=this.Ia.get(t);s?e.type!==0&&s.type===3?this.Ia=this.Ia.insert(t,e):e.type===3&&s.type!==1?this.Ia=this.Ia.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Ia=this.Ia.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Ia=this.Ia.remove(t):e.type===1&&s.type===2?this.Ia=this.Ia.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):Te(63341,{Vt:e,Ea:s}):this.Ia=this.Ia.insert(t,e)}da(){const e=[];return this.Ia.inorderTraversal((t,s)=>{e.push(s)}),e}}class vo{constructor(e,t,s,o,l,h,f,g,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach(f=>{h.push({type:0,doc:f})}),new vo(e,t,lo.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class SA{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class RA{constructor(){this.queries=uy(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(t,s){const o=De(t),l=o.queries;o.queries=uy(),l.forEach((h,f)=>{for(const g of f.Ra)g.onError(s)})})(this,new me(ne.ABORTED,"Firestore shutting down"))}}function uy(){return new as(r=>t_(r),cc)}async function CA(r,e){const t=De(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.Va()&&e.ma()&&(s=2):(l=new SA,s=e.ma()?0:1);try{switch(s){case 0:l.Aa=await t.onListen(o,!0);break;case 1:l.Aa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=k_(h,`Initialization of query '${to(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.Ra.push(e),e.ga(t.onlineState),l.Aa&&e.pa(l.Aa)&&Rf(t)}async function AA(r,e){const t=De(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.Ra.indexOf(e);h>=0&&(l.Ra.splice(h,1),l.Ra.length===0?o=e.ma()?0:1:!l.Va()&&e.ma()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function kA(r,e){const t=De(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.Ra)f.pa(o)&&(s=!0);h.Aa=o}}s&&Rf(t)}function PA(r,e,t){const s=De(r),o=s.queries.get(e);if(o)for(const l of o.Ra)l.onError(t);s.queries.delete(e)}function Rf(r){r.fa.forEach(e=>{e.next()})}var Vd,cy;(cy=Vd||(Vd={})).ya="default",cy.Cache="cache";class NA{constructor(e,t,s){this.query=e,this.wa=t,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=s||{}}pa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new vo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ba?this.Da(e)&&(this.wa.next(e),t=!0):this.va(e,this.onlineState)&&(this.Ca(e),t=!0),this.Sa=e,t}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let t=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),t=!0),t}va(e,t){if(!e.fromCache||!this.ma())return!0;const s=t!=="Offline";return(!this.options.Fa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const t=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ca(e){e=vo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==Vd.Cache}}/**
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
 */class P_{constructor(e){this.key=e}}class N_{constructor(e){this.key=e}}class xA{constructor(e,t){this.query=e,this.qa=t,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=Le(),this.mutatedKeys=Le(),this.Ua=n_(e),this.Ka=new lo(this.Ua)}get Wa(){return this.qa}Ga(e,t){const s=t?t.za:new ly,o=t?t.Ka:this.Ka;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,S)=>{const A=o.get(E),F=hc(this.query,S)?S:null,M=!!A&&this.mutatedKeys.has(A.key),$=!!F&&(F.hasLocalMutations||this.mutatedKeys.has(F.key)&&F.hasCommittedMutations);let z=!1;A&&F?A.data.isEqual(F.data)?M!==$&&(s.track({type:3,doc:F}),z=!0):this.ja(A,F)||(s.track({type:2,doc:F}),z=!0,(g&&this.Ua(F,g)>0||v&&this.Ua(F,v)<0)&&(f=!0)):!A&&F?(s.track({type:0,doc:F}),z=!0):A&&!F&&(s.track({type:1,doc:A}),z=!0,(g||v)&&(f=!0)),z&&(F?(h=h.add(F),l=$?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{Ka:h,za:s,ys:f,mutatedKeys:l}}ja(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const h=e.za.da();h.sort((E,S)=>function(F,M){const $=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te(20277,{Vt:z})}};return $(F)-$(M)}(E.type,S.type)||this.Ua(E.doc,S.doc)),this.Ha(s),o=o!=null&&o;const f=t&&!o?this.Ja():[],g=this.$a.size===0&&this.current&&!o?1:0,v=g!==this.Qa;return this.Qa=g,h.length!==0||v?{snapshot:new vo(this.query,e.Ka,l,h,e.mutatedKeys,g===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ya:f}:{Ya:f}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new ly,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(t=>this.qa=this.qa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.qa=this.qa.delete(t)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=Le(),this.Ka.forEach(s=>{this.Za(s.key)&&(this.$a=this.$a.add(s.key))});const t=[];return e.forEach(s=>{this.$a.has(s)||t.push(new N_(s))}),this.$a.forEach(s=>{e.has(s)||t.push(new P_(s))}),t}Xa(e){this.qa=e.Ns,this.$a=Le();const t=this.Ga(e.documents);return this.applyChanges(t,!0)}eu(){return vo.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const Cf="SyncEngine";class DA{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class OA{constructor(e){this.key=e,this.tu=!1}}class LA{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.nu={},this.ru=new as(f=>t_(f),cc),this.iu=new Map,this.su=new Set,this.ou=new st(ye.comparator),this._u=new Map,this.au=new gf,this.uu={},this.cu=new Map,this.lu=go.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function VA(r,e,t=!0){const s=V_(r);let o;const l=s.ru.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.eu()):o=await x_(s,e,t,!0),o}async function MA(r,e){const t=V_(r);await x_(t,e,!0,!1)}async function x_(r,e,t,s){const o=await sA(r.localStore,Xn(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await bA(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&R_(r.remoteStore,o),f}async function bA(r,e,t,s,o){r.Pu=(S,A,F)=>async function($,z,q,te){let Y=z.view.Ga(q);Y.ys&&(Y=await ty($.localStore,z.query,!1).then(({documents:N})=>z.view.Ga(N,Y)));const re=te&&te.targetChanges.get(z.targetId),Ee=te&&te.targetMismatches.get(z.targetId)!=null,ge=z.view.applyChanges(Y,$.isPrimaryClient,re,Ee);return dy($,z.targetId,ge.Ya),ge.snapshot}(r,S,A,F);const l=await ty(r.localStore,e,!0),h=new xA(e,l.Ns),f=h.Ga(l.documents),g=Ga.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),v=h.applyChanges(f,r.isPrimaryClient,g);dy(r,t,v.Ya);const E=new DA(e,t,h);return r.ru.set(e,E),r.iu.has(t)?r.iu.get(t).push(e):r.iu.set(t,[e]),v.snapshot}async function FA(r,e,t){const s=De(r),o=s.ru.get(e),l=s.iu.get(o.targetId);if(l.length>1)return s.iu.set(o.targetId,l.filter(h=>!cc(h,e))),void s.ru.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Od(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Ef(s.remoteStore,o.targetId),Md(s,o.targetId)}).catch(sc)):(Md(s,o.targetId),await Od(s.localStore,o.targetId,!0))}async function UA(r,e){const t=De(r),s=t.ru.get(e),o=t.iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Ef(t.remoteStore,s.targetId))}async function D_(r,e){const t=De(r);try{const s=await rA(t.localStore,e);e.targetChanges.forEach((o,l)=>{const h=t._u.get(l);h&&(Je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.tu=!0:o.modifiedDocuments.size>0?Je(h.tu,14607):o.removedDocuments.size>0&&(Je(h.tu,42227),h.tu=!1))}),await L_(t,s,e)}catch(s){await sc(s)}}function hy(r,e,t){const s=De(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.ru.forEach((l,h)=>{const f=h.view.ga(e);f.snapshot&&o.push(f.snapshot)}),function(h,f){const g=De(h);g.onlineState=f;let v=!1;g.queries.forEach((E,S)=>{for(const A of S.Ra)A.ga(f)&&(v=!0)}),v&&Rf(g)}(s.eventManager,e),o.length&&s.nu.Q_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function zA(r,e,t){const s=De(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s._u.get(e),l=o&&o.key;if(l){let h=new st(ye.comparator);h=h.insert(l,Mt.newNoDocument(l,we.min()));const f=Le().add(l),g=new pc(we.min(),new Map,new st(Ce),h,f);await D_(s,g),s.ou=s.ou.remove(l),s._u.delete(e),Af(s)}else await Od(s.localStore,e,!1).then(()=>Md(s,e,t)).catch(sc)}function Md(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.iu.get(e))r.ru.delete(s),t&&r.nu.Tu(s,t);r.iu.delete(e),r.isPrimaryClient&&r.au.Ur(e).forEach(s=>{r.au.containsKey(s)||O_(r,s)})}function O_(r,e){r.su.delete(e.path.canonicalString());const t=r.ou.get(e);t!==null&&(Ef(r.remoteStore,t),r.ou=r.ou.remove(e),r._u.delete(t),Af(r))}function dy(r,e,t){for(const s of t)s instanceof P_?(r.au.addReference(s.key,e),BA(r,s)):s instanceof N_?(oe(Cf,"Document no longer in limbo: "+s.key),r.au.removeReference(s.key,e),r.au.containsKey(s.key)||O_(r,s.key)):Te(19791,{Iu:s})}function BA(r,e){const t=e.key,s=t.path.canonicalString();r.ou.get(t)||r.su.has(s)||(oe(Cf,"New document in limbo: "+t),r.su.add(s),Af(r))}function Af(r){for(;r.su.size>0&&r.ou.size<r.maxConcurrentLimboResolutions;){const e=r.su.values().next().value;r.su.delete(e);const t=new ye(et.fromString(e)),s=r.lu.next();r._u.set(s,new OA(t)),r.ou=r.ou.insert(t,s),R_(r.remoteStore,new ui(Xn(e_(t.path)),s,"TargetPurposeLimboResolution",oc.le))}}async function L_(r,e,t){const s=De(r),o=[],l=[],h=[];s.ru.isEmpty()||(s.ru.forEach((f,g)=>{h.push(s.Pu(g,e,t).then(v=>{var E;if((v||t)&&s.isPrimaryClient){const S=v?!v.fromCache:(E=t==null?void 0:t.targetChanges.get(g.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,S?"current":"not-current")}if(v){o.push(v);const S=vf.Ps(g.targetId,v);l.push(S)}}))}),await Promise.all(h),s.nu.Q_(o),await async function(g,v){const E=De(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>K.forEach(v,A=>K.forEach(A.ls,F=>E.persistence.referenceDelegate.addReference(S,A.targetId,F)).next(()=>K.forEach(A.hs,F=>E.persistence.referenceDelegate.removeReference(S,A.targetId,F)))))}catch(S){if(!Io(S))throw S;oe(_f,"Failed to update sequence numbers: "+S)}for(const S of v){const A=S.targetId;if(!S.fromCache){const F=E.Ss.get(A),M=F.snapshotVersion,$=F.withLastLimboFreeSnapshotVersion(M);E.Ss=E.Ss.insert(A,$)}}}(s.localStore,l))}async function jA(r,e){const t=De(r);if(!t.currentUser.isEqual(e)){oe(Cf,"User change. New user:",e.toKey());const s=await w_(t.localStore,e);t.currentUser=e,function(l,h){l.cu.forEach(f=>{f.forEach(g=>{g.reject(new me(ne.CANCELLED,h))})}),l.cu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await L_(t,s.Ms)}}function $A(r,e){const t=De(r),s=t._u.get(e);if(s&&s.tu)return Le().add(s.key);{let o=Le();const l=t.iu.get(e);if(!l)return o;for(const h of l){const f=t.ru.get(h);o=o.unionWith(f.view.Wa)}return o}}function V_(r){const e=De(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=D_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$A.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zA.bind(null,e),e.nu.Q_=kA.bind(null,e.eventManager),e.nu.Tu=PA.bind(null,e.eventManager),e}class Gu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=I_(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,t){return null}fu(e,t){return null}Vu(e){return nA(this.persistence,new ZC,e.initialUser,this.serializer)}Ru(e){return new E_(yf.Ei,this.serializer)}Au(e){return new aA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gu.provider={build:()=>new Gu};class HA extends Gu{constructor(e){super(),this.cacheSizeBytes=e}mu(e,t){Je(this.persistence.referenceDelegate instanceof Ku,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new FC(s,e.asyncQueue,t)}Ru(e){const t=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new E_(s=>Ku.Ei(s,t),this.serializer)}}class bd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>hy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=jA.bind(null,this.syncEngine),await IA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new RA}()}createDatastore(e){const t=I_(e.databaseInfo.databaseId),s=function(l){return new dA(l)}(e.databaseInfo);return function(l,h,f,g){return new gA(l,h,f,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,l,h,f){return new vA(s,o,l,h,f)}(this.localStore,this.datastore,e.asyncQueue,t=>hy(this.syncEngine,t,0),function(){return iy.C()?new iy:new lA}())}createSyncEngine(e,t){return function(o,l,h,f,g,v,E){const S=new LA(o,l,h,f,g,v);return E&&(S.hu=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=De(o);oe(yo,"RemoteStore shutting down."),l.aa.add(5),await Qa(l),l.ca.shutdown(),l.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}bd.provider={build:()=>new bd};/**
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
 */class qA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):xr("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const _i="FirestoreClient";class WA{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Vt.UNAUTHENTICATED,this.clientId=yR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async h=>{oe(_i,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(oe(_i,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=k_(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ad(r,e){r.asyncQueue.verifyOperationInProgress(),oe(_i,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await w_(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function fy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await KA(r);oe(_i,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>ay(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>ay(e.remoteStore,o)),r._onlineComponents=e}async function KA(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){oe(_i,"Using user provided OfflineComponentProvider");try{await ad(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===ne.FAILED_PRECONDITION||o.code===ne.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;ho("Error using user provided cache. Falling back to memory cache: "+t),await ad(r,new Gu)}}else oe(_i,"Using default OfflineComponentProvider"),await ad(r,new HA(void 0));return r._offlineComponents}async function GA(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(oe(_i,"Using user provided OnlineComponentProvider"),await fy(r,r._uninitializedComponentsProvider._online)):(oe(_i,"Using default OnlineComponentProvider"),await fy(r,new bd))),r._onlineComponents}async function QA(r){const e=await GA(r),t=e.eventManager;return t.onListen=VA.bind(null,e.syncEngine),t.onUnlisten=FA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=MA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=UA.bind(null,e.syncEngine),t}function YA(r,e,t={}){const s=new Zi;return r.asyncQueue.enqueueAndForget(async()=>function(l,h,f,g,v){const E=new qA({next:A=>{E.yu(),h.enqueueAndForget(()=>AA(l,S)),A.fromCache&&g.source==="server"?v.reject(new me(ne.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(A)},error:A=>v.reject(A)}),S=new NA(f,E,{includeMetadataChanges:!0,Fa:!0});return CA(l,S)}(await QA(r),r.asyncQueue,e,t,s)),s.promise}/**
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
 */function M_(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const py=new Map;function XA(r,e,t,s){if(e===!0&&s===!0)throw new me(ne.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function my(r){if(ye.isDocumentKey(r))throw new me(ne.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function JA(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Te(12329,{type:typeof r})}function Fd(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new me(ne.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=JA(r);throw new me(ne.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */const b_="firestore.googleapis.com",gy=!0;class yy{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new me(ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=b_,this.ssl=gy}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:gy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=__;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<MC)throw new me(ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=M_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new me(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new me(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new me(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class kf{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new me(ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new me(ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new cR;switch(s.type){case"firstParty":return new pR(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new me(ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=py.get(t);s&&(oe("ComponentProvider","Removing Datastore"),py.delete(t),s.terminate())}(this),Promise.resolve()}}function ZA(r,e,t,s={}){var o;r=Fd(r,kf);const l=$a(e),h=r._getSettings(),f=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${t}`;l&&Wd(`https://${g}`),h.host!==b_&&h.host!==g&&ho("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v=Object.assign(Object.assign({},h),{host:g,ssl:l,emulatorOptions:s});if(!ts(v,f)&&(r._setSettings(v),s.mockUserToken)){let E,S;if(typeof s.mockUserToken=="string")E=s.mockUserToken,S=Vt.MOCK_USER;else{E=Xy(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const A=s.mockUserToken.sub||s.mockUserToken.user_id;if(!A)throw new me(ne.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new Vt(A)}r._authCredentials=new hR(new zv(E,S))}}/**
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
 */class gc{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new gc(this.firestore,e,this._query)}}class Ro{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new uo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ro(this.firestore,e,this._key)}}class uo extends gc{constructor(e,t,s){super(e,t,e_(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ro(this.firestore,null,new ye(e))}withConverter(e){return new uo(this.firestore,e,this._path)}}function ek(r,e,...t){if(r=Ei(r),r instanceof kf){const s=et.fromString(e,...t);return my(s),new uo(r,null,s)}{if(!(r instanceof Ro||r instanceof uo))throw new me(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(et.fromString(e,...t));return my(s),new uo(r.firestore,null,s)}}/**
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
 */const vy="AsyncQueue";class _y{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new S_(this,"async_queue_retry"),this.ju=()=>{const s=od();s&&oe(vy,"Visibility state changed to "+s.visibilityState),this.y_.A_()},this.Hu=e;const t=od();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const t=od();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const t=new Zi;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!Io(e))throw e;oe(vy,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const t=this.Hu.then(()=>(this.Wu=!0,e().catch(s=>{throw this.Ku=s,this.Wu=!1,xr("INTERNAL UNHANDLED ERROR: ",Ey(s)),s}).then(s=>(this.Wu=!1,s))));return this.Hu=t,t}enqueueAfterDelay(e,t,s){this.Ju(),this.zu.indexOf(e)>-1&&(t=0);const o=Sf.createAndSchedule(this,e,t,s,l=>this.Xu(l));return this.Uu.push(o),o}Ju(){this.Ku&&Te(47125,{ec:Ey(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const t of this.Uu)if(t.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Uu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const t=this.Uu.indexOf(e);this.Uu.splice(t,1)}}function Ey(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class F_ extends kf{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new _y,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _y(e),this._firestoreClient=void 0,await e}}}function tk(r,e){const t=typeof r=="object"?r:Qd(),s=typeof r=="string"?r:ju,o=tc(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=Gy("firestore");l&&ZA(o,...l)}return o}function nk(r){if(r._terminated)throw new me(ne.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||rk(r),r._firestoreClient}function rk(r){var e,t,s;const o=r._freezeSettings(),l=function(f,g,v,E){return new xR(f,g,v,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,M_(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new WA(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&function(f){const g=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(g),_online:g}}(r._componentsProvider))}/**
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
 */class Qu{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qu(At.fromBase64String(e))}catch(t){throw new me(ne.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Qu(At.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class U_{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new me(ne.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new jt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ik{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new me(ne.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new me(ne.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
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
 */class sk{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0}(this._values,e._values)}}const ok=new RegExp("[~\\*/\\[\\]]");function ak(r,e,t){if(e.search(ok)>=0)throw wy(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new U_(...e.split("."))._internalPath}catch{throw wy(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function wy(r,e,t,s,o){let l=`Function ${e}() called with invalid data`;l+=". ";let h="";return new me(ne.INVALID_ARGUMENT,l+r+h)}/**
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
 */class z_{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Ro(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(B_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class lk extends z_{data(){return super.data()}}function B_(r,e){return typeof e=="string"?ak(r,e):e instanceof U_?e._internalPath:e._delegate._internalPath}/**
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
 */function uk(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new me(ne.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ck{convertValue(e,t="none"){switch(yi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(gi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ka(e,(o,l)=>{s[o]=this.convertValue(l,t)}),s}convertVectorValue(e){var t,s,o;const l=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[Id].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>it(h.doubleValue));return new sk(l)}convertGeoPoint(e){return new ik(it(e.latitude),it(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=lc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Va(e));default:return null}}convertTimestamp(e){const t=mi(e);return new Jt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=et.fromString(e);Je(v_(s),9688,{name:e});const o=new Ma(s.get(1),s.get(3)),l=new ye(s.popFirst(5));return o.isEqual(t)||xr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */class Eu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hk extends z_{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Du(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(B_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Du extends hk{data(e={}){return super.data(e)}}class dk{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Eu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Du(this._firestore,this._userDataWriter,s.key,s,new Eu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new me(ne.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(f=>{const g=new Du(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Eu(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(f=>l||f.type!==3).map(f=>{const g=new Du(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Eu(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,E=-1;return f.type!==0&&(v=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),E=h.indexOf(f.doc.key)),{type:fk(f.type),doc:g,oldIndex:v,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function fk(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te(61501,{type:r})}}class pk extends ck{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qu(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ro(this.firestore,null,t)}}function mk(r){r=Fd(r,gc);const e=Fd(r.firestore,F_),t=nk(e),s=new pk(e);return uk(r._query),YA(t,r._query).then(o=>new dk(e,s,r,o))}(function(e,t=!0){(function(o){To=o})(os),ns(new fi("firestore",(s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),f=new F_(new dR(s.getProvider("auth-internal")),new mR(h,s.getProvider("app-check-internal")),function(v,E){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new me(ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ma(v.options.projectId,E)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f},"PUBLIC").setMultipleInstances(!0)),Qn(Rg,Cg,e),Qn(Rg,Cg,"esm2017")})();/**
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
 */const j_="firebasestorage.googleapis.com",gk="storageBucket",yk=2*60*1e3,vk=10*60*1e3;/**
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
 */class sr extends ir{constructor(e,t,s=0){super(ld(e),`Firebase Storage: ${t} (${ld(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,sr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ld(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var nr;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(nr||(nr={}));function ld(r){return"storage/"+r}function _k(){const r="An unknown error occurred, please check the error payload for server response.";return new sr(nr.UNKNOWN,r)}function Ek(){return new sr(nr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function wk(){return new sr(nr.CANCELED,"User canceled the upload/download.")}function Tk(r){return new sr(nr.INVALID_URL,"Invalid URL '"+r+"'.")}function Ik(r){return new sr(nr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function Ty(r){return new sr(nr.INVALID_ARGUMENT,r)}function $_(){return new sr(nr.APP_DELETED,"The Firebase app was deleted.")}function Sk(r){return new sr(nr.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Ln{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=Ln.makeFromUrl(e,t)}catch{return new Ln(e,"")}if(s.path==="")return s;throw Ik(e)}static makeFromUrl(e,t){let s=null;const o="([A-Za-z0-9.\\-_]+)";function l(re){re.path.charAt(re.path.length-1)==="/"&&(re.path_=re.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),g={bucket:1,path:3};function v(re){re.path_=decodeURIComponent(re.path)}const E="v[A-Za-z0-9_]+",S=t.replace(/[.]/g,"\\."),A="(/([^?#]*).*)?$",F=new RegExp(`^https?://${S}/${E}/b/${o}/o${A}`,"i"),M={bucket:1,path:3},$=t===j_?"(?:storage.googleapis.com|storage.cloud.google.com)":t,z="([^?#]*)",q=new RegExp(`^https?://${$}/${o}/${z}`,"i"),Y=[{regex:f,indices:g,postModify:l},{regex:F,indices:M,postModify:v},{regex:q,indices:{bucket:1,path:2},postModify:v}];for(let re=0;re<Y.length;re++){const Ee=Y[re],ge=Ee.regex.exec(e);if(ge){const N=ge[Ee.indices.bucket];let T=ge[Ee.indices.path];T||(T=""),s=new Ln(N,T),Ee.postModify(s);break}}if(s==null)throw Tk(e);return s}}class Rk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Ck(r,e,t){let s=1,o=null,l=null,h=!1,f=0;function g(){return f===2}let v=!1;function E(...z){v||(v=!0,e.apply(null,z))}function S(z){o=setTimeout(()=>{o=null,r(F,g())},z)}function A(){l&&clearTimeout(l)}function F(z,...q){if(v){A();return}if(z){A(),E.call(null,z,...q);return}if(g()||h){A(),E.call(null,z,...q);return}s<64&&(s*=2);let Y;f===1?(f=2,Y=0):Y=(s+Math.random())*1e3,S(Y)}let M=!1;function $(z){M||(M=!0,A(),!v&&(o!==null?(z||(f=2),clearTimeout(o),S(0)):z||(f=1)))}return S(0),l=setTimeout(()=>{h=!0,$(!0)},t),$}function Ak(r){r(!1)}/**
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
 */function kk(r){return r!==void 0}function Iy(r,e,t,s){if(s<e)throw Ty(`Invalid value for '${r}'. Expected ${e} or greater.`);if(s>t)throw Ty(`Invalid value for '${r}'. Expected ${t} or less.`)}function Pk(r){const e=encodeURIComponent;let t="?";for(const s in r)if(r.hasOwnProperty(s)){const o=e(s)+"="+e(r[s]);t=t+o+"&"}return t=t.slice(0,-1),t}var Yu;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Yu||(Yu={}));/**
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
 */function Nk(r,e){const t=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,l=e.indexOf(r)!==-1;return t||o||l}/**
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
 */class xk{constructor(e,t,s,o,l,h,f,g,v,E,S,A=!0,F=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=g,this.timeout_=v,this.progressCallback_=E,this.connectionFactory_=S,this.retry=A,this.isUsingEmulator=F,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((M,$)=>{this.resolve_=M,this.reject_=$,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new wu(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const g=f.loaded,v=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,v)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===Yu.NO_ERROR,g=l.getStatus();if(!f||Nk(g,this.additionalRetryCodes_)&&this.retry){const E=l.getErrorCode()===Yu.ABORT;s(!1,new wu(!1,null,E));return}const v=this.successCodes_.indexOf(g)!==-1;s(!0,new wu(v,l))})},t=(s,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const g=this.callback_(f,f.getResponse());kk(g)?l(g):l()}catch(g){h(g)}else if(f!==null){const g=_k();g.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,g)):h(g)}else if(o.canceled){const g=this.appDelete_?$_():wk();h(g)}else{const g=Ek();h(g)}};this.canceled_?t(!1,new wu(!1,null,!0)):this.backoffId_=Ck(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ak(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class wu{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function Dk(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function Ok(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Lk(r,e){e&&(r["X-Firebase-GMPID"]=e)}function Vk(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function Mk(r,e,t,s,o,l,h=!0,f=!1){const g=Pk(r.urlParams),v=r.url+g,E=Object.assign({},r.headers);return Lk(E,e),Dk(E,t),Ok(E,l),Vk(E,s),new xk(v,r.method,E,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,h,f)}/**
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
 */function bk(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function Fk(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
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
 */class Xu{constructor(e,t){this._service=e,t instanceof Ln?this._location=t:this._location=Ln.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Xu(e,t)}get root(){const e=new Ln(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Fk(this._location.path)}get storage(){return this._service}get parent(){const e=bk(this._location.path);if(e===null)return null;const t=new Ln(this._location.bucket,e);return new Xu(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Sk(e)}}function Sy(r,e){const t=e==null?void 0:e[gk];return t==null?null:Ln.makeFromBucketSpec(t,r)}function Uk(r,e,t,s={}){r.host=`${e}:${t}`;const o=$a(e);o&&Wd(`https://${r.host}`),r._isUsingEmulator=!0,r._protocol=o?"https":"http";const{mockUserToken:l}=s;l&&(r._overrideAuthToken=typeof l=="string"?l:Xy(l,r.app.options.projectId))}class zk{constructor(e,t,s,o,l,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=h,this._bucket=null,this._host=j_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=yk,this._maxUploadRetryTime=vk,this._requests=new Set,o!=null?this._bucket=Ln.makeFromBucketSpec(o,this._host):this._bucket=Sy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ln.makeFromBucketSpec(this._url,e):this._bucket=Sy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Iy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Iy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(yn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Xu(this,e)}_makeRequest(e,t,s,o,l=!0){if(this._deleted)return new Rk($_());{const h=Mk(e,this._appId,s,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,o).getPromise()}}const Ry="@firebase/storage",Cy="0.13.8";/**
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
 */const H_="storage";function Bk(r=Qd(),e){r=Ei(r);const s=tc(r,H_).getImmediate({identifier:e}),o=Gy("storage");return o&&jk(s,...o),s}function jk(r,e,t,s={}){Uk(r,e,t,s)}function $k(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),s=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new zk(t,s,o,e,os)}function Hk(){ns(new fi(H_,$k,"PUBLIC").setMultipleInstances(!0)),Qn(Ry,Cy,""),Qn(Ry,Cy,"esm2017")}Hk();const qk={apiKey:"AIzaSyDxkFAw8NaFXNDk_9nRSZDn951n71qWfJY",authDomain:"memostack-c8826.firebaseapp.com",databaseURL:"https://memostack-c8826-default-rtdb.firebaseio.com",projectId:"memostack-c8826",storageBucket:"memostack-c8826.appspot.com",messagingSenderId:"689724873846",appId:"1:689724873846:web:8fa2b5841c52527da01357",measurementId:"G-CD92P84XJX"},Pf=ev(qk),Wk=oR(Pf),Kk=tk(Pf);Bk(Pf);const Gk=()=>{const r=async()=>{try{const e=new Sr;await mS(Wk,e)}catch(e){console.error("Login error",e)}};return Ye.jsx("button",{onClick:r,className:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition",children:"Sign in with Google"})},Qk=()=>Ye.jsxs("div",{className:"h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-pink-200 text-center p-4",children:[Ye.jsx("h1",{className:"text-4xl font-bold text-gray-800 mb-4",children:"📸 Welcome to MemoStack"}),Ye.jsx("p",{className:"mb-4",children:"Sign in to start uploading your summer memories."}),Ye.jsx(Gk,{}),Ye.jsx(qd,{to:"/gallery",className:"text-blue-600 mt-4 underline",children:"View Gallery"})]}),Yk=()=>{const[r,e]=H.useState([]),[t,s]=H.useState(!0);return H.useEffect(()=>{(async()=>{try{const h=(await mk(ek(Kk,"memories"))).docs.map(f=>({id:f.id,...f.data()}));e(h)}catch(l){console.error("Error fetching memories:",l)}finally{s(!1)}})()},[]),t?Ye.jsx("p",{className:"text-center",children:"Loading memories..."}):r.length===0?Ye.jsx("p",{className:"text-center",children:"No memories found."}):Ye.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full max-w-5xl mx-auto",children:r.map(({id:o,fileUrl:l,title:h,fileType:f,timestamp:g})=>Ye.jsxs("div",{className:"bg-white shadow-md rounded-lg overflow-hidden p-2",children:[f.startsWith("image")?Ye.jsx("img",{src:l,alt:h,className:"w-full h-60 object-cover rounded"}):Ye.jsxs("video",{controls:!0,className:"w-full h-60 object-cover rounded",children:[Ye.jsx("source",{src:l,type:f}),"Your browser does not support the video tag."]}),Ye.jsxs("div",{className:"p-2",children:[Ye.jsx("h3",{className:"text-lg font-semibold truncate",children:h}),Ye.jsx("p",{className:"text-sm text-gray-500",children:g?new Date((g==null?void 0:g.seconds)*1e3).toLocaleString():"No date"})]})]},o))})};iw.createRoot(document.getElementById("root")).render(Ye.jsx(XE.StrictMode,{children:Ye.jsx(E0,{children:Ye.jsxs(Yw,{children:[Ye.jsx(cd,{path:"/",element:Ye.jsx(Qk,{})}),Ye.jsx(cd,{path:"/gallery",element:Ye.jsx(Yk,{})})]})})}));
