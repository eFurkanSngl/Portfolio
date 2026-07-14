(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Xy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var nd={exports:{}},Io={};var F0;function Wy(){if(F0)return Io;F0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Io.Fragment=e,Io.jsx=i,Io.jsxs=i,Io}var B0;function qy(){return B0||(B0=1,nd.exports=Wy()),nd.exports}var F=qy(),id={exports:{}},at={};var G0;function Yy(){if(G0)return at;G0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),g=Symbol.iterator;function S(w){return w===null||typeof w!="object"?null:(w=g&&w[g]||w["@@iterator"],typeof w=="function"?w:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,M={};function v(w,X,me){this.props=w,this.context=X,this.refs=M,this.updater=me||A}v.prototype.isReactComponent={},v.prototype.setState=function(w,X){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,X,"setState")},v.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function O(){}O.prototype=v.prototype;function I(w,X,me){this.props=w,this.context=X,this.refs=M,this.updater=me||A}var T=I.prototype=new O;T.constructor=I,L(T,v.prototype),T.isPureReactComponent=!0;var N=Array.isArray;function U(){}var z={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function D(w,X,me){var Ce=me.ref;return{$$typeof:r,type:w,key:X,ref:Ce!==void 0?Ce:null,props:me}}function V(w,X){return D(w.type,X,w.props)}function k(w){return typeof w=="object"&&w!==null&&w.$$typeof===r}function q(w){var X={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(me){return X[me]})}var ce=/\/+/g;function pe(w,X){return typeof w=="object"&&w!==null&&w.key!=null?q(""+w.key):X.toString(36)}function Q(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(U,U):(w.status="pending",w.then(function(X){w.status==="pending"&&(w.status="fulfilled",w.value=X)},function(X){w.status==="pending"&&(w.status="rejected",w.reason=X)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function B(w,X,me,Ce,ze){var se=typeof w;(se==="undefined"||se==="boolean")&&(w=null);var Se=!1;if(w===null)Se=!0;else switch(se){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(w.$$typeof){case r:case e:Se=!0;break;case x:return Se=w._init,B(Se(w._payload),X,me,Ce,ze)}}if(Se)return ze=ze(w),Se=Ce===""?"."+pe(w,0):Ce,N(ze)?(me="",Se!=null&&(me=Se.replace(ce,"$&/")+"/"),B(ze,X,me,"",function(tt){return tt})):ze!=null&&(k(ze)&&(ze=V(ze,me+(ze.key==null||w&&w.key===ze.key?"":(""+ze.key).replace(ce,"$&/")+"/")+Se)),X.push(ze)),1;Se=0;var Ee=Ce===""?".":Ce+":";if(N(w))for(var Ge=0;Ge<w.length;Ge++)Ce=w[Ge],se=Ee+pe(Ce,Ge),Se+=B(Ce,X,me,se,ze);else if(Ge=S(w),typeof Ge=="function")for(w=Ge.call(w),Ge=0;!(Ce=w.next()).done;)Ce=Ce.value,se=Ee+pe(Ce,Ge++),Se+=B(Ce,X,me,se,ze);else if(se==="object"){if(typeof w.then=="function")return B(Q(w),X,me,Ce,ze);throw X=String(w),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Se}function H(w,X,me){if(w==null)return w;var Ce=[],ze=0;return B(w,Ce,"","",function(se){return X.call(me,se,ze++)}),Ce}function ee(w){if(w._status===-1){var X=w._result;X=X(),X.then(function(me){(w._status===0||w._status===-1)&&(w._status=1,w._result=me)},function(me){(w._status===0||w._status===-1)&&(w._status=2,w._result=me)}),w._status===-1&&(w._status=0,w._result=X)}if(w._status===1)return w._result.default;throw w._result}var _e=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)},be={map:H,forEach:function(w,X,me){H(w,function(){X.apply(this,arguments)},me)},count:function(w){var X=0;return H(w,function(){X++}),X},toArray:function(w){return H(w,function(X){return X})||[]},only:function(w){if(!k(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return at.Activity=y,at.Children=be,at.Component=v,at.Fragment=i,at.Profiler=l,at.PureComponent=I,at.StrictMode=s,at.Suspense=m,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,at.__COMPILER_RUNTIME={__proto__:null,c:function(w){return z.H.useMemoCache(w)}},at.cache=function(w){return function(){return w.apply(null,arguments)}},at.cacheSignal=function(){return null},at.cloneElement=function(w,X,me){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var Ce=L({},w.props),ze=w.key;if(X!=null)for(se in X.key!==void 0&&(ze=""+X.key),X)!b.call(X,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&X.ref===void 0||(Ce[se]=X[se]);var se=arguments.length-2;if(se===1)Ce.children=me;else if(1<se){for(var Se=Array(se),Ee=0;Ee<se;Ee++)Se[Ee]=arguments[Ee+2];Ce.children=Se}return D(w.type,ze,Ce)},at.createContext=function(w){return w={$$typeof:d,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:c,_context:w},w},at.createElement=function(w,X,me){var Ce,ze={},se=null;if(X!=null)for(Ce in X.key!==void 0&&(se=""+X.key),X)b.call(X,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(ze[Ce]=X[Ce]);var Se=arguments.length-2;if(Se===1)ze.children=me;else if(1<Se){for(var Ee=Array(Se),Ge=0;Ge<Se;Ge++)Ee[Ge]=arguments[Ge+2];ze.children=Ee}if(w&&w.defaultProps)for(Ce in Se=w.defaultProps,Se)ze[Ce]===void 0&&(ze[Ce]=Se[Ce]);return D(w,se,ze)},at.createRef=function(){return{current:null}},at.forwardRef=function(w){return{$$typeof:p,render:w}},at.isValidElement=k,at.lazy=function(w){return{$$typeof:x,_payload:{_status:-1,_result:w},_init:ee}},at.memo=function(w,X){return{$$typeof:h,type:w,compare:X===void 0?null:X}},at.startTransition=function(w){var X=z.T,me={};z.T=me;try{var Ce=w(),ze=z.S;ze!==null&&ze(me,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(U,_e)}catch(se){_e(se)}finally{X!==null&&me.types!==null&&(X.types=me.types),z.T=X}},at.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},at.use=function(w){return z.H.use(w)},at.useActionState=function(w,X,me){return z.H.useActionState(w,X,me)},at.useCallback=function(w,X){return z.H.useCallback(w,X)},at.useContext=function(w){return z.H.useContext(w)},at.useDebugValue=function(){},at.useDeferredValue=function(w,X){return z.H.useDeferredValue(w,X)},at.useEffect=function(w,X){return z.H.useEffect(w,X)},at.useEffectEvent=function(w){return z.H.useEffectEvent(w)},at.useId=function(){return z.H.useId()},at.useImperativeHandle=function(w,X,me){return z.H.useImperativeHandle(w,X,me)},at.useInsertionEffect=function(w,X){return z.H.useInsertionEffect(w,X)},at.useLayoutEffect=function(w,X){return z.H.useLayoutEffect(w,X)},at.useMemo=function(w,X){return z.H.useMemo(w,X)},at.useOptimistic=function(w,X){return z.H.useOptimistic(w,X)},at.useReducer=function(w,X,me){return z.H.useReducer(w,X,me)},at.useRef=function(w){return z.H.useRef(w)},at.useState=function(w){return z.H.useState(w)},at.useSyncExternalStore=function(w,X,me){return z.H.useSyncExternalStore(w,X,me)},at.useTransition=function(){return z.H.useTransition()},at.version="19.2.5",at}var H0;function Ph(){return H0||(H0=1,id.exports=Yy()),id.exports}var qt=Ph();const jy=Xy(qt);var ad={exports:{}},Fo={},sd={exports:{}},rd={};var V0;function Zy(){return V0||(V0=1,(function(r){function e(B,H){var ee=B.length;B.push(H);e:for(;0<ee;){var _e=ee-1>>>1,be=B[_e];if(0<l(be,H))B[_e]=H,B[ee]=be,ee=_e;else break e}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var H=B[0],ee=B.pop();if(ee!==H){B[0]=ee;e:for(var _e=0,be=B.length,w=be>>>1;_e<w;){var X=2*(_e+1)-1,me=B[X],Ce=X+1,ze=B[Ce];if(0>l(me,ee))Ce<be&&0>l(ze,me)?(B[_e]=ze,B[Ce]=ee,_e=Ce):(B[_e]=me,B[X]=ee,_e=X);else if(Ce<be&&0>l(ze,ee))B[_e]=ze,B[Ce]=ee,_e=Ce;else break e}}return H}function l(B,H){var ee=B.sortIndex-H.sortIndex;return ee!==0?ee:B.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var m=[],h=[],x=1,y=null,g=3,S=!1,A=!1,L=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function T(B){for(var H=i(h);H!==null;){if(H.callback===null)s(h);else if(H.startTime<=B)s(h),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(h)}}function N(B){if(L=!1,T(B),!A)if(i(m)!==null)A=!0,U||(U=!0,q());else{var H=i(h);H!==null&&Q(N,H.startTime-B)}}var U=!1,z=-1,b=5,D=-1;function V(){return M?!0:!(r.unstable_now()-D<b)}function k(){if(M=!1,U){var B=r.unstable_now();D=B;var H=!0;try{e:{A=!1,L&&(L=!1,O(z),z=-1),S=!0;var ee=g;try{t:{for(T(B),y=i(m);y!==null&&!(y.expirationTime>B&&V());){var _e=y.callback;if(typeof _e=="function"){y.callback=null,g=y.priorityLevel;var be=_e(y.expirationTime<=B);if(B=r.unstable_now(),typeof be=="function"){y.callback=be,T(B),H=!0;break t}y===i(m)&&s(m),T(B)}else s(m);y=i(m)}if(y!==null)H=!0;else{var w=i(h);w!==null&&Q(N,w.startTime-B),H=!1}}break e}finally{y=null,g=ee,S=!1}H=void 0}}finally{H?q():U=!1}}}var q;if(typeof I=="function")q=function(){I(k)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,pe=ce.port2;ce.port1.onmessage=k,q=function(){pe.postMessage(null)}}else q=function(){v(k,0)};function Q(B,H){z=v(function(){B(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(B){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var ee=g;g=H;try{return B()}finally{g=ee}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(B,H){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ee=g;g=B;try{return H()}finally{g=ee}},r.unstable_scheduleCallback=function(B,H,ee){var _e=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?_e+ee:_e):ee=_e,B){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=ee+be,B={id:x++,callback:H,priorityLevel:B,startTime:ee,expirationTime:be,sortIndex:-1},ee>_e?(B.sortIndex=ee,e(h,B),i(m)===null&&B===i(h)&&(L?(O(z),z=-1):L=!0,Q(N,ee-_e))):(B.sortIndex=be,e(m,B),A||S||(A=!0,U||(U=!0,q()))),B},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(B){var H=g;return function(){var ee=g;g=H;try{return B.apply(this,arguments)}finally{g=ee}}}})(rd)),rd}var k0;function Ky(){return k0||(k0=1,sd.exports=Zy()),sd.exports}var od={exports:{}},On={};var X0;function Qy(){if(X0)return On;X0=1;var r=Ph();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,x){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:m,containerInfo:h,implementation:x}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(m,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,x)},On.flushSync=function(m){var h=d.T,x=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=x,s.d.f()}},On.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},On.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},On.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var x=h.as,y=p(x,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:y,integrity:g,fetchPriority:S}):x==="script"&&s.d.X(m,{crossOrigin:y,integrity:g,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},On.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},On.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,y=p(x,h.crossOrigin);s.d.L(m,x,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},On.preloadModule=function(m,h){if(typeof m=="string")if(h){var x=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},On.requestFormReset=function(m){s.d.r(m)},On.unstable_batchedUpdates=function(m,h){return m(h)},On.useFormState=function(m,h,x){return d.H.useFormState(m,h,x)},On.useFormStatus=function(){return d.H.useHostTransitionStatus()},On.version="19.2.5",On}var W0;function Jy(){if(W0)return od.exports;W0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),od.exports=Qy(),od.exports}var q0;function $y(){if(q0)return Fo;q0=1;var r=Ky(),e=Ph(),i=Jy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var _=!1,C=u.child;C;){if(C===a){_=!0,a=u,o=f;break}if(C===o){_=!0,o=u,a=f;break}C=C.sibling}if(!_){for(C=f.child;C;){if(C===a){_=!0,a=f,o=u;break}if(C===o){_=!0,o=f,a=u;break}C=C.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var y=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),I=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case L:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case N:return"Suspense";case U:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case I:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case T:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var Q=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},_e=[],be=-1;function w(t){return{current:t}}function X(t){0>be||(t.current=_e[be],_e[be]=null,be--)}function me(t,n){be++,_e[be]=t.current,t.current=n}var Ce=w(null),ze=w(null),se=w(null),Se=w(null);function Ee(t,n){switch(me(se,n),me(ze,t),me(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?o0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=o0(n),t=l0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}X(Ce),me(Ce,t)}function Ge(){X(Ce),X(ze),X(se)}function tt(t){t.memoizedState!==null&&me(Se,t);var n=Ce.current,a=l0(n,t.type);n!==a&&(me(ze,t),me(Ce,a))}function Ke(t){ze.current===t&&(X(Ce),X(ze)),Se.current===t&&(X(Se),Lo._currentValue=ee)}var Yt,ut;function vt(t){if(Yt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Yt=n&&n[1]||"",ut=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yt+t+ut}var xt=!1;function dt(t,n){if(!t||xt)return"";xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(ue){var le=ue}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(ue){le=ue}t.call(ye.prototype)}}else{try{throw Error()}catch(ue){le=ue}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(ue){if(ue&&le&&typeof ue.stack=="string")return[ue.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],C=f[1];if(_&&C){var G=_.split(`
`),ne=C.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ne.length&&!ne[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===ne.length)for(o=G.length-1,u=ne.length-1;1<=o&&0<=u&&G[o]!==ne[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==ne[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==ne[u]){var ge=`
`+G[o].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=o&&0<=u);break}}}finally{xt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?vt(a):""}function tn(t,n){switch(t.tag){case 26:case 27:case 5:return vt(t.type);case 16:return vt("Lazy");case 13:return t.child!==n&&n!==null?vt("Suspense Fallback"):vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return dt(t.type,!1);case 11:return dt(t.type.render,!1);case 1:return dt(t.type,!0);case 31:return vt("Activity");default:return""}}function nn(t){try{var n="",a=null;do n+=tn(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var an=Object.prototype.hasOwnProperty,cn=r.unstable_scheduleCallback,Wt=r.unstable_cancelCallback,sn=r.unstable_shouldYield,Z=r.unstable_requestPaint,Bt=r.unstable_now,Ct=r.unstable_getCurrentPriorityLevel,P=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,J=r.unstable_NormalPriority,re=r.unstable_LowPriority,de=r.unstable_IdlePriority,Te=r.log,De=r.unstable_setDisableYieldValue,fe=null,he=null;function Re(t){if(typeof Te=="function"&&De(t),he&&typeof he.setStrictMode=="function")try{he.setStrictMode(fe,t)}catch{}}var Fe=Math.clz32?Math.clz32:Ze,Le=Math.log,Ue=Math.LN2;function Ze(t){return t>>>=0,t===0?32:31-(Le(t)/Ue|0)|0}var Qe=256,it=262144,Y=4194304;function Ae(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var C=o&134217727;return C!==0?(o=C&~f,o!==0?u=Ae(o):(_&=C,_!==0?u=Ae(_):a||(a=C&~t,a!==0&&(u=Ae(a))))):(C=o&~f,C!==0?u=Ae(C):_!==0?u=Ae(_):a||(a=o&~t,a!==0&&(u=Ae(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function we(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Me(){var t=Y;return Y<<=1,(Y&62914560)===0&&(Y=4194304),t}function qe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ve(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Kt(t,n,a,o,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var C=t.entanglements,G=t.expirationTimes,ne=t.hiddenUpdates;for(a=_&~a;0<a;){var ge=31-Fe(a),ye=1<<ge;C[ge]=0,G[ge]=-1;var le=ne[ge];if(le!==null)for(ne[ge]=null,ge=0;ge<le.length;ge++){var ue=le[ge];ue!==null&&(ue.lane&=-536870913)}a&=~ye}o!==0&&Nt(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Nt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Fe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Qn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Fe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Jn(t,n){var a=n&-n;return a=(a&42)!==0?1:qr(a),(a&(t.suspendedLanes|n))!==0?0:a}function qr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Yr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function jr(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:U0(t.type))}function Xs(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var Pi=Math.random().toString(36).slice(2),dn="__reactFiber$"+Pi,An="__reactProps$"+Pi,Hn="__reactContainer$"+Pi,fs="__reactEvents$"+Pi,tl="__reactListeners$"+Pi,nl="__reactHandles$"+Pi,ds="__reactResources$"+Pi,Ra="__reactMarker$"+Pi;function Ca(t){delete t[dn],delete t[An],delete t[fs],delete t[tl],delete t[nl]}function Qi(t){var n=t[dn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Hn]||a[dn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=m0(t);t!==null;){if(a=t[dn])return a;t=m0(t)}return n}t=a,a=t.parentNode}return null}function Ji(t){if(t=t[dn]||t[Hn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function hs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function wa(t){var n=t[ds];return n||(n=t[ds]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function hn(t){t[Ra]=!0}var il=new Set,R={};function j(t,n){oe(t,n),oe(t+"Capture",n)}function oe(t,n){for(R[t]=n,t=0;t<n.length;t++)il.add(n[t])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},Oe={};function He(t){return an.call(Oe,t)?!0:an.call(ae,t)?!1:ie.test(t)?Oe[t]=!0:(ae[t]=!0,!1)}function Ne(t,n,a){if(He(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Xe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ke(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Je(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function je(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Tt(t){if(!t._valueTracker){var n=rt(t)?"checked":"value";t._valueTracker=je(t,n,""+t[n])}}function Qt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=rt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Lt=/[\n"\\]/g;function Ot(t){return t.replace(Lt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Be(t,n,a,o,u,f,_,C){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Je(n)):t.value!==""+Je(n)&&(t.value=""+Je(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?ht(t,_,Je(n)):a!=null?ht(t,_,Je(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+Je(C):t.removeAttribute("name")}function Ln(t,n,a,o,u,f,_,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Tt(t);return}a=a!=null?""+Je(a):"",n=n!=null?""+Je(n):a,C||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=C?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Tt(t)}function ht(t,n,a){n==="number"&&kt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function xn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Je(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function $n(t,n,a){if(n!=null&&(n=""+Je(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Je(a):""}function bi(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Q(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Je(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Tt(t)}function ei(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Pt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jt(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Pt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ti(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Jt(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Jt(t,f,n[f])}function Ut(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Da=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ps(t){return Da.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function $i(){}var Jc=null;function $c(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ws=null,qs=null;function rp(t){var n=Ji(t);if(n&&(t=n.stateNode)){var a=t[An]||null;e:switch(t=n.stateNode,n.type){case"input":if(Be(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ot(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[An]||null;if(!u)throw Error(s(90));Be(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Qt(o)}break e;case"textarea":$n(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&xn(t,!!a.multiple,n,!1)}}}var eu=!1;function op(t,n,a){if(eu)return t(n,a);eu=!0;try{var o=t(n);return o}finally{if(eu=!1,(Ws!==null||qs!==null)&&(Xl(),Ws&&(n=Ws,t=qs,qs=Ws=null,rp(n),t)))for(n=0;n<t.length;n++)rp(t[n])}}function Zr(t,n){var a=t.stateNode;if(a===null)return null;var o=a[An]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tu=!1;if(ea)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){tu=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{tu=!1}var Ua=null,nu=null,al=null;function lp(){if(al)return al;var t,n=nu,a=n.length,o,u="value"in Ua?Ua.value:Ua.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(o=1;o<=_&&n[a-o]===u[f-o];o++);return al=u.slice(t,1<o?1-o:void 0)}function sl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function cp(){return!1}function Vn(t){function n(a,o,u,f,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(a=t[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?rl:cp,this.isPropagationStopped=cp,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),n}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=Vn(ms),Qr=y({},ms,{view:0,detail:0}),Vv=Vn(Qr),iu,au,Jr,ll=y({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Jr&&(Jr&&t.type==="mousemove"?(iu=t.screenX-Jr.screenX,au=t.screenY-Jr.screenY):au=iu=0,Jr=t),iu)},movementY:function(t){return"movementY"in t?t.movementY:au}}),up=Vn(ll),kv=y({},ll,{dataTransfer:0}),Xv=Vn(kv),Wv=y({},Qr,{relatedTarget:0}),su=Vn(Wv),qv=y({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),Yv=Vn(qv),jv=y({},ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Zv=Vn(jv),Kv=y({},ms,{data:0}),fp=Vn(Kv),Qv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$v={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ex(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=$v[t])?!!n[t]:!1}function ru(){return ex}var tx=y({},Qr,{key:function(t){if(t.key){var n=Qv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nx=Vn(tx),ix=y({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dp=Vn(ix),ax=y({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),sx=Vn(ax),rx=y({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),ox=Vn(rx),lx=y({},ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cx=Vn(lx),ux=y({},ms,{newState:0,oldState:0}),fx=Vn(ux),dx=[9,13,27,32],ou=ea&&"CompositionEvent"in window,$r=null;ea&&"documentMode"in document&&($r=document.documentMode);var hx=ea&&"TextEvent"in window&&!$r,hp=ea&&(!ou||$r&&8<$r&&11>=$r),pp=" ",mp=!1;function gp(t,n){switch(t){case"keyup":return dx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _p(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ys=!1;function px(t,n){switch(t){case"compositionend":return _p(n);case"keypress":return n.which!==32?null:(mp=!0,pp);case"textInput":return t=n.data,t===pp&&mp?null:t;default:return null}}function mx(t,n){if(Ys)return t==="compositionend"||!ou&&gp(t,n)?(t=lp(),al=nu=Ua=null,Ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hp&&n.locale!=="ko"?null:n.data;default:return null}}var gx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!gx[t.type]:n==="textarea"}function xp(t,n,a,o){Ws?qs?qs.push(o):qs=[o]:Ws=o,n=Ql(n,"onChange"),0<n.length&&(a=new ol("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var eo=null,to=null;function _x(t){t0(t,0)}function cl(t){var n=hs(t);if(Qt(n))return t}function yp(t,n){if(t==="change")return n}var Sp=!1;if(ea){var lu;if(ea){var cu="oninput"in document;if(!cu){var Mp=document.createElement("div");Mp.setAttribute("oninput","return;"),cu=typeof Mp.oninput=="function"}lu=cu}else lu=!1;Sp=lu&&(!document.documentMode||9<document.documentMode)}function Ep(){eo&&(eo.detachEvent("onpropertychange",bp),to=eo=null)}function bp(t){if(t.propertyName==="value"&&cl(to)){var n=[];xp(n,to,t,$c(t)),op(_x,n)}}function vx(t,n,a){t==="focusin"?(Ep(),eo=n,to=a,eo.attachEvent("onpropertychange",bp)):t==="focusout"&&Ep()}function xx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cl(to)}function yx(t,n){if(t==="click")return cl(n)}function Sx(t,n){if(t==="input"||t==="change")return cl(n)}function Mx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ti=typeof Object.is=="function"?Object.is:Mx;function no(t,n){if(ti(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!an.call(n,u)||!ti(t[u],n[u]))return!1}return!0}function Tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ap(t,n){var a=Tp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Tp(a)}}function Rp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Rp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Cp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=kt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=kt(t.document)}return n}function uu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ex=ea&&"documentMode"in document&&11>=document.documentMode,js=null,fu=null,io=null,du=!1;function wp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;du||js==null||js!==kt(o)||(o=js,"selectionStart"in o&&uu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),io&&no(io,o)||(io=o,o=Ql(fu,"onSelect"),0<o.length&&(n=new ol("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=js)))}function gs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Zs={animationend:gs("Animation","AnimationEnd"),animationiteration:gs("Animation","AnimationIteration"),animationstart:gs("Animation","AnimationStart"),transitionrun:gs("Transition","TransitionRun"),transitionstart:gs("Transition","TransitionStart"),transitioncancel:gs("Transition","TransitionCancel"),transitionend:gs("Transition","TransitionEnd")},hu={},Dp={};ea&&(Dp=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function _s(t){if(hu[t])return hu[t];if(!Zs[t])return t;var n=Zs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Dp)return hu[t]=n[a];return t}var Up=_s("animationend"),Np=_s("animationiteration"),Lp=_s("animationstart"),bx=_s("transitionrun"),Tx=_s("transitionstart"),Ax=_s("transitioncancel"),Op=_s("transitionend"),Pp=new Map,pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pu.push("scrollEnd");function Ai(t,n){Pp.set(t,n),j(n,[t])}var ul=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},pi=[],Ks=0,mu=0;function fl(){for(var t=Ks,n=mu=Ks=0;n<t;){var a=pi[n];pi[n++]=null;var o=pi[n];pi[n++]=null;var u=pi[n];pi[n++]=null;var f=pi[n];if(pi[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&zp(a,u,f)}}function dl(t,n,a,o){pi[Ks++]=t,pi[Ks++]=n,pi[Ks++]=a,pi[Ks++]=o,mu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function gu(t,n,a,o){return dl(t,n,a,o),hl(t)}function vs(t,n){return dl(t,null,null,n),hl(t)}function zp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Fe(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function hl(t){if(50<Ao)throw Ao=0,Af=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Qs={};function Rx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(t,n,a,o){return new Rx(t,n,a,o)}function _u(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ta(t,n){var a=t.alternate;return a===null?(a=ni(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Ip(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function pl(t,n,a,o,u,f){var _=0;if(o=t,typeof t=="function")_u(t)&&(_=1);else if(typeof t=="string")_=Ny(t,a,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=ni(31,a,n,u),t.elementType=D,t.lanes=f,t;case L:return xs(a.children,u,f,n);case M:_=8,u|=24;break;case v:return t=ni(12,a,n,u|2),t.elementType=v,t.lanes=f,t;case N:return t=ni(13,a,n,u),t.elementType=N,t.lanes=f,t;case U:return t=ni(19,a,n,u),t.elementType=U,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:_=10;break e;case O:_=9;break e;case T:_=11;break e;case z:_=14;break e;case b:_=16,o=null;break e}_=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ni(_,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function xs(t,n,a,o){return t=ni(7,t,o,n),t.lanes=a,t}function vu(t,n,a){return t=ni(6,t,null,n),t.lanes=a,t}function Fp(t){var n=ni(18,null,null,0);return n.stateNode=t,n}function xu(t,n,a){return n=ni(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Bp=new WeakMap;function mi(t,n){if(typeof t=="object"&&t!==null){var a=Bp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:nn(n)},Bp.set(t,n),n)}return{value:t,source:n,stack:nn(n)}}var Js=[],$s=0,ml=null,ao=0,gi=[],_i=0,Na=null,Ii=1,Fi="";function na(t,n){Js[$s++]=ao,Js[$s++]=ml,ml=t,ao=n}function Gp(t,n,a){gi[_i++]=Ii,gi[_i++]=Fi,gi[_i++]=Na,Na=t;var o=Ii;t=Fi;var u=32-Fe(o)-1;o&=~(1<<u),a+=1;var f=32-Fe(n)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Ii=1<<32-Fe(n)+u|a<<u|o,Fi=f+t}else Ii=1<<f|a<<u|o,Fi=t}function yu(t){t.return!==null&&(na(t,1),Gp(t,1,0))}function Su(t){for(;t===ml;)ml=Js[--$s],Js[$s]=null,ao=Js[--$s],Js[$s]=null;for(;t===Na;)Na=gi[--_i],gi[_i]=null,Fi=gi[--_i],gi[_i]=null,Ii=gi[--_i],gi[_i]=null}function Hp(t,n){gi[_i++]=Ii,gi[_i++]=Fi,gi[_i++]=Na,Ii=n.id,Fi=n.overflow,Na=t}var Rn=null,jt=null,yt=!1,La=null,vi=!1,Mu=Error(s(519));function Oa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw so(mi(n,t)),Mu}function Vp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[dn]=t,n[An]=o,a){case"dialog":mt("cancel",n),mt("close",n);break;case"iframe":case"object":case"embed":mt("load",n);break;case"video":case"audio":for(a=0;a<Co.length;a++)mt(Co[a],n);break;case"source":mt("error",n);break;case"img":case"image":case"link":mt("error",n),mt("load",n);break;case"details":mt("toggle",n);break;case"input":mt("invalid",n),Ln(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":mt("invalid",n);break;case"textarea":mt("invalid",n),bi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||s0(n.textContent,a)?(o.popover!=null&&(mt("beforetoggle",n),mt("toggle",n)),o.onScroll!=null&&mt("scroll",n),o.onScrollEnd!=null&&mt("scrollend",n),o.onClick!=null&&(n.onclick=$i),n=!0):n=!1,n||Oa(t,!0)}function kp(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:Rn=Rn.return}}function er(t){if(t!==Rn)return!1;if(!yt)return kp(t),yt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Hf(t.type,t.memoizedProps)),a=!a),a&&jt&&Oa(t),kp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));jt=p0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));jt=p0(t)}else n===27?(n=jt,ja(t.type)?(t=qf,qf=null,jt=t):jt=n):jt=Rn?yi(t.stateNode.nextSibling):null;return!0}function ys(){jt=Rn=null,yt=!1}function Eu(){var t=La;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),La=null),t}function so(t){La===null?La=[t]:La.push(t)}var bu=w(null),Ss=null,ia=null;function Pa(t,n,a){me(bu,n._currentValue),n._currentValue=a}function aa(t){t._currentValue=bu.current,X(bu)}function Tu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Au(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var C=f;f=u;for(var G=0;G<n.length;G++)if(C.context===n[G]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),Tu(f.return,a,t),o||(_=null);break e}f=C.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Tu(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function tr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var C=u.type;ti(u.pendingProps.value,_.value)||(t!==null?t.push(C):t=[C])}}else if(u===Se.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Lo):t=[Lo])}u=u.return}t!==null&&Au(n,t,a,o),n.flags|=262144}function gl(t){for(t=t.firstContext;t!==null;){if(!ti(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ms(t){Ss=t,ia=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return Xp(Ss,t)}function _l(t,n){return Ss===null&&Ms(t),Xp(t,n)}function Xp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ia===null){if(t===null)throw Error(s(308));ia=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ia=ia.next=n;return a}var Cx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},wx=r.unstable_scheduleCallback,Dx=r.unstable_NormalPriority,pn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ru(){return{controller:new Cx,data:new Map,refCount:0}}function ro(t){t.refCount--,t.refCount===0&&wx(Dx,function(){t.controller.abort()})}var oo=null,Cu=0,nr=0,ir=null;function Ux(t,n){if(oo===null){var a=oo=[];Cu=0,nr=Nf(),ir={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Cu++,n.then(Wp,Wp),n}function Wp(){if(--Cu===0&&oo!==null){ir!==null&&(ir.status="fulfilled");var t=oo;oo=null,nr=0,ir=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Nx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var qp=B.S;B.S=function(t,n){wg=Bt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ux(t,n),qp!==null&&qp(t,n)};var Es=w(null);function wu(){var t=Es.current;return t!==null?t:Xt.pooledCache}function vl(t,n){n===null?me(Es,Es.current):me(Es,n.pool)}function Yp(){var t=wu();return t===null?null:{parent:pn._currentValue,pool:t}}var ar=Error(s(460)),Du=Error(s(474)),xl=Error(s(542)),yl={then:function(){}};function jp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Zp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then($i,$i),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Qp(t),t;default:if(typeof n.status=="string")n.then($i,$i);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Qp(t),t}throw Ts=n,ar}}function bs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ts=a,ar):a}}var Ts=null;function Kp(){if(Ts===null)throw Error(s(459));var t=Ts;return Ts=null,t}function Qp(t){if(t===ar||t===xl)throw Error(s(483))}var sr=null,lo=0;function Sl(t){var n=lo;return lo+=1,sr===null&&(sr=[]),Zp(sr,t,n)}function co(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ml(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Jp(t){function n(K,W){if(t){var te=K.deletions;te===null?(K.deletions=[W],K.flags|=16):te.push(W)}}function a(K,W){if(!t)return null;for(;W!==null;)n(K,W),W=W.sibling;return null}function o(K){for(var W=new Map;K!==null;)K.key!==null?W.set(K.key,K):W.set(K.index,K),K=K.sibling;return W}function u(K,W){return K=ta(K,W),K.index=0,K.sibling=null,K}function f(K,W,te){return K.index=te,t?(te=K.alternate,te!==null?(te=te.index,te<W?(K.flags|=67108866,W):te):(K.flags|=67108866,W)):(K.flags|=1048576,W)}function _(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function C(K,W,te,xe){return W===null||W.tag!==6?(W=vu(te,K.mode,xe),W.return=K,W):(W=u(W,te),W.return=K,W)}function G(K,W,te,xe){var $e=te.type;return $e===L?ge(K,W,te.props.children,xe,te.key):W!==null&&(W.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===b&&bs($e)===W.type)?(W=u(W,te.props),co(W,te),W.return=K,W):(W=pl(te.type,te.key,te.props,null,K.mode,xe),co(W,te),W.return=K,W)}function ne(K,W,te,xe){return W===null||W.tag!==4||W.stateNode.containerInfo!==te.containerInfo||W.stateNode.implementation!==te.implementation?(W=xu(te,K.mode,xe),W.return=K,W):(W=u(W,te.children||[]),W.return=K,W)}function ge(K,W,te,xe,$e){return W===null||W.tag!==7?(W=xs(te,K.mode,xe,$e),W.return=K,W):(W=u(W,te),W.return=K,W)}function ye(K,W,te){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=vu(""+W,K.mode,te),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return te=pl(W.type,W.key,W.props,null,K.mode,te),co(te,W),te.return=K,te;case A:return W=xu(W,K.mode,te),W.return=K,W;case b:return W=bs(W),ye(K,W,te)}if(Q(W)||q(W))return W=xs(W,K.mode,te,null),W.return=K,W;if(typeof W.then=="function")return ye(K,Sl(W),te);if(W.$$typeof===I)return ye(K,_l(K,W),te);Ml(K,W)}return null}function le(K,W,te,xe){var $e=W!==null?W.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return $e!==null?null:C(K,W,""+te,xe);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case S:return te.key===$e?G(K,W,te,xe):null;case A:return te.key===$e?ne(K,W,te,xe):null;case b:return te=bs(te),le(K,W,te,xe)}if(Q(te)||q(te))return $e!==null?null:ge(K,W,te,xe,null);if(typeof te.then=="function")return le(K,W,Sl(te),xe);if(te.$$typeof===I)return le(K,W,_l(K,te),xe);Ml(K,te)}return null}function ue(K,W,te,xe,$e){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return K=K.get(te)||null,C(W,K,""+xe,$e);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case S:return K=K.get(xe.key===null?te:xe.key)||null,G(W,K,xe,$e);case A:return K=K.get(xe.key===null?te:xe.key)||null,ne(W,K,xe,$e);case b:return xe=bs(xe),ue(K,W,te,xe,$e)}if(Q(xe)||q(xe))return K=K.get(te)||null,ge(W,K,xe,$e,null);if(typeof xe.then=="function")return ue(K,W,te,Sl(xe),$e);if(xe.$$typeof===I)return ue(K,W,te,_l(W,xe),$e);Ml(W,xe)}return null}function We(K,W,te,xe){for(var $e=null,At=null,Ye=W,lt=W=0,_t=null;Ye!==null&&lt<te.length;lt++){Ye.index>lt?(_t=Ye,Ye=null):_t=Ye.sibling;var Rt=le(K,Ye,te[lt],xe);if(Rt===null){Ye===null&&(Ye=_t);break}t&&Ye&&Rt.alternate===null&&n(K,Ye),W=f(Rt,W,lt),At===null?$e=Rt:At.sibling=Rt,At=Rt,Ye=_t}if(lt===te.length)return a(K,Ye),yt&&na(K,lt),$e;if(Ye===null){for(;lt<te.length;lt++)Ye=ye(K,te[lt],xe),Ye!==null&&(W=f(Ye,W,lt),At===null?$e=Ye:At.sibling=Ye,At=Ye);return yt&&na(K,lt),$e}for(Ye=o(Ye);lt<te.length;lt++)_t=ue(Ye,K,lt,te[lt],xe),_t!==null&&(t&&_t.alternate!==null&&Ye.delete(_t.key===null?lt:_t.key),W=f(_t,W,lt),At===null?$e=_t:At.sibling=_t,At=_t);return t&&Ye.forEach(function($a){return n(K,$a)}),yt&&na(K,lt),$e}function et(K,W,te,xe){if(te==null)throw Error(s(151));for(var $e=null,At=null,Ye=W,lt=W=0,_t=null,Rt=te.next();Ye!==null&&!Rt.done;lt++,Rt=te.next()){Ye.index>lt?(_t=Ye,Ye=null):_t=Ye.sibling;var $a=le(K,Ye,Rt.value,xe);if($a===null){Ye===null&&(Ye=_t);break}t&&Ye&&$a.alternate===null&&n(K,Ye),W=f($a,W,lt),At===null?$e=$a:At.sibling=$a,At=$a,Ye=_t}if(Rt.done)return a(K,Ye),yt&&na(K,lt),$e;if(Ye===null){for(;!Rt.done;lt++,Rt=te.next())Rt=ye(K,Rt.value,xe),Rt!==null&&(W=f(Rt,W,lt),At===null?$e=Rt:At.sibling=Rt,At=Rt);return yt&&na(K,lt),$e}for(Ye=o(Ye);!Rt.done;lt++,Rt=te.next())Rt=ue(Ye,K,lt,Rt.value,xe),Rt!==null&&(t&&Rt.alternate!==null&&Ye.delete(Rt.key===null?lt:Rt.key),W=f(Rt,W,lt),At===null?$e=Rt:At.sibling=Rt,At=Rt);return t&&Ye.forEach(function(ky){return n(K,ky)}),yt&&na(K,lt),$e}function Vt(K,W,te,xe){if(typeof te=="object"&&te!==null&&te.type===L&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case S:e:{for(var $e=te.key;W!==null;){if(W.key===$e){if($e=te.type,$e===L){if(W.tag===7){a(K,W.sibling),xe=u(W,te.props.children),xe.return=K,K=xe;break e}}else if(W.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===b&&bs($e)===W.type){a(K,W.sibling),xe=u(W,te.props),co(xe,te),xe.return=K,K=xe;break e}a(K,W);break}else n(K,W);W=W.sibling}te.type===L?(xe=xs(te.props.children,K.mode,xe,te.key),xe.return=K,K=xe):(xe=pl(te.type,te.key,te.props,null,K.mode,xe),co(xe,te),xe.return=K,K=xe)}return _(K);case A:e:{for($e=te.key;W!==null;){if(W.key===$e)if(W.tag===4&&W.stateNode.containerInfo===te.containerInfo&&W.stateNode.implementation===te.implementation){a(K,W.sibling),xe=u(W,te.children||[]),xe.return=K,K=xe;break e}else{a(K,W);break}else n(K,W);W=W.sibling}xe=xu(te,K.mode,xe),xe.return=K,K=xe}return _(K);case b:return te=bs(te),Vt(K,W,te,xe)}if(Q(te))return We(K,W,te,xe);if(q(te)){if($e=q(te),typeof $e!="function")throw Error(s(150));return te=$e.call(te),et(K,W,te,xe)}if(typeof te.then=="function")return Vt(K,W,Sl(te),xe);if(te.$$typeof===I)return Vt(K,W,_l(K,te),xe);Ml(K,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,W!==null&&W.tag===6?(a(K,W.sibling),xe=u(W,te),xe.return=K,K=xe):(a(K,W),xe=vu(te,K.mode,xe),xe.return=K,K=xe),_(K)):a(K,W)}return function(K,W,te,xe){try{lo=0;var $e=Vt(K,W,te,xe);return sr=null,$e}catch(Ye){if(Ye===ar||Ye===xl)throw Ye;var At=ni(29,Ye,null,K.mode);return At.lanes=xe,At.return=K,At}}}var As=Jp(!0),$p=Jp(!1),za=!1;function Uu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ia(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Fa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(wt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=hl(t),zp(t,null,a),n}return dl(t,o,n,a),hl(t)}function uo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Qn(t,a)}}function Lu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ou=!1;function fo(){if(Ou){var t=ir;if(t!==null)throw t}}function ho(t,n,a,o){Ou=!1;var u=t.updateQueue;za=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var G=C,ne=G.next;G.next=null,_===null?f=ne:_.next=ne,_=G;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,C=ge.lastBaseUpdate,C!==_&&(C===null?ge.firstBaseUpdate=ne:C.next=ne,ge.lastBaseUpdate=G))}if(f!==null){var ye=u.baseState;_=0,ge=ne=G=null,C=f;do{var le=C.lane&-536870913,ue=le!==C.lane;if(ue?(gt&le)===le:(o&le)===le){le!==0&&le===nr&&(Ou=!0),ge!==null&&(ge=ge.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var We=t,et=C;le=n;var Vt=a;switch(et.tag){case 1:if(We=et.payload,typeof We=="function"){ye=We.call(Vt,ye,le);break e}ye=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=et.payload,le=typeof We=="function"?We.call(Vt,ye,le):We,le==null)break e;ye=y({},ye,le);break e;case 2:za=!0}}le=C.callback,le!==null&&(t.flags|=64,ue&&(t.flags|=8192),ue=u.callbacks,ue===null?u.callbacks=[le]:ue.push(le))}else ue={lane:le,tag:C.tag,payload:C.payload,callback:C.callback,next:null},ge===null?(ne=ge=ue,G=ye):ge=ge.next=ue,_|=le;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;ue=C,C=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);ge===null&&(G=ye),u.baseState=G,u.firstBaseUpdate=ne,u.lastBaseUpdate=ge,f===null&&(u.shared.lanes=0),ka|=_,t.lanes=_,t.memoizedState=ye}}function em(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function tm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)em(a[t],n)}var rr=w(null),El=w(0);function nm(t,n){t=ha,me(El,t),me(rr,n),ha=t|n.baseLanes}function Pu(){me(El,ha),me(rr,rr.current)}function zu(){ha=El.current,X(rr),X(El)}var ii=w(null),xi=null;function Ba(t){var n=t.alternate;me(un,un.current&1),me(ii,t),xi===null&&(n===null||rr.current!==null||n.memoizedState!==null)&&(xi=t)}function Iu(t){me(un,un.current),me(ii,t),xi===null&&(xi=t)}function im(t){t.tag===22?(me(un,un.current),me(ii,t),xi===null&&(xi=t)):Ga()}function Ga(){me(un,un.current),me(ii,ii.current)}function ai(t){X(ii),xi===t&&(xi=null),X(un)}var un=w(0);function bl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Xf(a)||Wf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var sa=0,ot=null,Gt=null,mn=null,Tl=!1,or=!1,Rs=!1,Al=0,po=0,lr=null,Lx=0;function rn(){throw Error(s(321))}function Fu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ti(t[a],n[a]))return!1;return!0}function Bu(t,n,a,o,u,f){return sa=f,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?Gm:ef,Rs=!1,f=a(o,u),Rs=!1,or&&(f=sm(n,a,o,u)),am(t),f}function am(t){B.H=_o;var n=Gt!==null&&Gt.next!==null;if(sa=0,mn=Gt=ot=null,Tl=!1,po=0,lr=null,n)throw Error(s(300));t===null||gn||(t=t.dependencies,t!==null&&gl(t)&&(gn=!0))}function sm(t,n,a,o){ot=t;var u=0;do{if(or&&(lr=null),po=0,or=!1,25<=u)throw Error(s(301));if(u+=1,mn=Gt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=Hm,f=n(a,o)}while(or);return f}function Ox(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?mo(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(ot.flags|=1024),n}function Gu(){var t=Al!==0;return Al=0,t}function Hu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Vu(t){if(Tl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Tl=!1}sa=0,mn=Gt=ot=null,or=!1,po=Al=0,lr=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?ot.memoizedState=mn=t:mn=mn.next=t,mn}function fn(){if(Gt===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=mn===null?ot.memoizedState:mn.next;if(n!==null)mn=n,Gt=t;else{if(t===null)throw ot.alternate===null?Error(s(467)):Error(s(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},mn===null?ot.memoizedState=mn=t:mn=mn.next=t}return mn}function Rl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(t){var n=po;return po+=1,lr===null&&(lr=[]),t=Zp(lr,t,n),n=ot,(mn===null?n.memoizedState:mn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Gm:ef),t}function Cl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return mo(t);if(t.$$typeof===I)return Cn(t)}throw Error(s(438,String(t)))}function ku(t){var n=null,a=ot.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ot.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Rl(),ot.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=V;return n.index++,a}function ra(t,n){return typeof n=="function"?n(t):n}function wl(t){var n=fn();return Xu(n,Gt,t)}function Xu(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var C=_=null,G=null,ne=n,ge=!1;do{var ye=ne.lane&-536870913;if(ye!==ne.lane?(gt&ye)===ye:(sa&ye)===ye){var le=ne.revertLane;if(le===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),ye===nr&&(ge=!0);else if((sa&le)===le){ne=ne.next,le===nr&&(ge=!0);continue}else ye={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},G===null?(C=G=ye,_=f):G=G.next=ye,ot.lanes|=le,ka|=le;ye=ne.action,Rs&&a(f,ye),f=ne.hasEagerState?ne.eagerState:a(f,ye)}else le={lane:ye,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},G===null?(C=G=le,_=f):G=G.next=le,ot.lanes|=ye,ka|=ye;ne=ne.next}while(ne!==null&&ne!==n);if(G===null?_=f:G.next=C,!ti(f,t.memoizedState)&&(gn=!0,ge&&(a=ir,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Wu(t){var n=fn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);ti(f,n.memoizedState)||(gn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function rm(t,n,a){var o=ot,u=fn(),f=yt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!ti((Gt||u).memoizedState,a);if(_&&(u.memoizedState=a,gn=!0),u=u.queue,ju(cm.bind(null,o,u,t),[t]),u.getSnapshot!==n||_||mn!==null&&mn.memoizedState.tag&1){if(o.flags|=2048,cr(9,{destroy:void 0},lm.bind(null,o,u,a,n),null),Xt===null)throw Error(s(349));f||(sa&127)!==0||om(o,n,a)}return a}function om(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ot.updateQueue,n===null?(n=Rl(),ot.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function lm(t,n,a,o){n.value=a,n.getSnapshot=o,um(n)&&fm(t)}function cm(t,n,a){return a(function(){um(n)&&fm(t)})}function um(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ti(t,a)}catch{return!0}}function fm(t){var n=vs(t,2);n!==null&&Yn(n,t,2)}function qu(t){var n=Fn();if(typeof t=="function"){var a=t;if(t=a(),Rs){Re(!0);try{a()}finally{Re(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},n}function dm(t,n,a,o){return t.baseState=a,Xu(t,Gt,typeof o=="function"?o:ra)}function Px(t,n,a,o,u){if(Nl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};B.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,hm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function hm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=B.T,_={};B.T=_;try{var C=a(u,o),G=B.S;G!==null&&G(_,C),pm(t,n,C)}catch(ne){Yu(t,n,ne)}finally{f!==null&&_.types!==null&&(f.types=_.types),B.T=f}}else try{f=a(u,o),pm(t,n,f)}catch(ne){Yu(t,n,ne)}}function pm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){mm(t,n,o)},function(o){return Yu(t,n,o)}):mm(t,n,a)}function mm(t,n,a){n.status="fulfilled",n.value=a,gm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,hm(t,a)))}function Yu(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,gm(n),n=n.next;while(n!==o)}t.action=null}function gm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function _m(t,n){return n}function vm(t,n){if(yt){var a=Xt.formState;if(a!==null){e:{var o=ot;if(yt){if(jt){t:{for(var u=jt,f=vi;u.nodeType!==8;){if(!f){u=null;break t}if(u=yi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){jt=yi(u.nextSibling),o=u.data==="F!";break e}}Oa(o)}o=!1}o&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_m,lastRenderedState:n},a.queue=o,a=Im.bind(null,ot,o),o.dispatch=a,o=qu(!1),f=$u.bind(null,ot,!1,o.queue),o=Fn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Px.bind(null,ot,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function xm(t){var n=fn();return ym(n,Gt,t)}function ym(t,n,a){if(n=Xu(t,n,_m)[0],t=wl(ra)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=mo(n)}catch(_){throw _===ar?xl:_}else o=n;n=fn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ot.flags|=2048,cr(9,{destroy:void 0},zx.bind(null,u,a),null)),[o,f,t]}function zx(t,n){t.action=n}function Sm(t){var n=fn(),a=Gt;if(a!==null)return ym(n,a,t);fn(),n=n.memoizedState,a=fn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function cr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ot.updateQueue,n===null&&(n=Rl(),ot.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Mm(){return fn().memoizedState}function Dl(t,n,a,o){var u=Fn();ot.flags|=t,u.memoizedState=cr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Ul(t,n,a,o){var u=fn();o=o===void 0?null:o;var f=u.memoizedState.inst;Gt!==null&&o!==null&&Fu(o,Gt.memoizedState.deps)?u.memoizedState=cr(n,f,a,o):(ot.flags|=t,u.memoizedState=cr(1|n,f,a,o))}function Em(t,n){Dl(8390656,8,t,n)}function ju(t,n){Ul(2048,8,t,n)}function Ix(t){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=Rl(),ot.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function bm(t){var n=fn().memoizedState;return Ix({ref:n,nextImpl:t}),function(){if((wt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Tm(t,n){return Ul(4,2,t,n)}function Am(t,n){return Ul(4,4,t,n)}function Rm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Cm(t,n,a){a=a!=null?a.concat([t]):null,Ul(4,4,Rm.bind(null,n,t),a)}function Zu(){}function wm(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Fu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Dm(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Fu(n,o[1]))return o[0];if(o=t(),Rs){Re(!0);try{t()}finally{Re(!1)}}return a.memoizedState=[o,n],o}function Ku(t,n,a){return a===void 0||(sa&1073741824)!==0&&(gt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Ug(),ot.lanes|=t,ka|=t,a)}function Um(t,n,a,o){return ti(a,n)?a:rr.current!==null?(t=Ku(t,a,o),ti(t,n)||(gn=!0),t):(sa&42)===0||(sa&1073741824)!==0&&(gt&261930)===0?(gn=!0,t.memoizedState=a):(t=Ug(),ot.lanes|=t,ka|=t,n)}function Nm(t,n,a,o,u){var f=H.p;H.p=f!==0&&8>f?f:8;var _=B.T,C={};B.T=C,$u(t,!1,n,a);try{var G=u(),ne=B.S;if(ne!==null&&ne(C,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ge=Nx(G,o);go(t,n,ge,oi(t))}else go(t,n,o,oi(t))}catch(ye){go(t,n,{then:function(){},status:"rejected",reason:ye},oi())}finally{H.p=f,_!==null&&C.types!==null&&(_.types=C.types),B.T=_}}function Fx(){}function Qu(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Lm(t).queue;Nm(t,u,n,ee,a===null?Fx:function(){return Om(t),a(o)})}function Lm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Om(t){var n=Lm(t);n.next===null&&(n=t.alternate.memoizedState),go(t,n.next.queue,{},oi())}function Ju(){return Cn(Lo)}function Pm(){return fn().memoizedState}function zm(){return fn().memoizedState}function Bx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();t=Ia(a);var o=Fa(n,t,a);o!==null&&(Yn(o,n,a),uo(o,n,a)),n={cache:Ru()},t.payload=n;return}n=n.return}}function Gx(t,n,a){var o=oi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Nl(t)?Fm(n,a):(a=gu(t,n,a,o),a!==null&&(Yn(a,t,o),Bm(a,n,o)))}function Im(t,n,a){var o=oi();go(t,n,a,o)}function go(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nl(t))Fm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,C=f(_,a);if(u.hasEagerState=!0,u.eagerState=C,ti(C,_))return dl(t,n,u,0),Xt===null&&fl(),!1}catch{}if(a=gu(t,n,u,o),a!==null)return Yn(a,t,o),Bm(a,n,o),!0}return!1}function $u(t,n,a,o){if(o={lane:2,revertLane:Nf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Nl(t)){if(n)throw Error(s(479))}else n=gu(t,a,o,2),n!==null&&Yn(n,t,2)}function Nl(t){var n=t.alternate;return t===ot||n!==null&&n===ot}function Fm(t,n){or=Tl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Bm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Qn(t,a)}}var _o={readContext:Cn,use:Cl,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};_o.useEffectEvent=rn;var Gm={readContext:Cn,use:Cl,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:Em,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Dl(4194308,4,Rm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Dl(4194308,4,t,n)},useInsertionEffect:function(t,n){Dl(4,2,t,n)},useMemo:function(t,n){var a=Fn();n=n===void 0?null:n;var o=t();if(Rs){Re(!0);try{t()}finally{Re(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Fn();if(a!==void 0){var u=a(n);if(Rs){Re(!0);try{a(n)}finally{Re(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Gx.bind(null,ot,t),[o.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=qu(t);var n=t.queue,a=Im.bind(null,ot,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Zu,useDeferredValue:function(t,n){var a=Fn();return Ku(a,t,n)},useTransition:function(){var t=qu(!1);return t=Nm.bind(null,ot,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ot,u=Fn();if(yt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xt===null)throw Error(s(349));(gt&127)!==0||om(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Em(cm.bind(null,o,f,t),[t]),o.flags|=2048,cr(9,{destroy:void 0},lm.bind(null,o,f,a,n),null),a},useId:function(){var t=Fn(),n=Xt.identifierPrefix;if(yt){var a=Fi,o=Ii;a=(o&~(1<<32-Fe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Al++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Lx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Ju,useFormState:vm,useActionState:vm,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=$u.bind(null,ot,!0,a),a.dispatch=n,[t,n]},useMemoCache:ku,useCacheRefresh:function(){return Fn().memoizedState=Bx.bind(null,ot)},useEffectEvent:function(t){var n=Fn(),a={impl:t};return n.memoizedState=a,function(){if((wt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ef={readContext:Cn,use:Cl,useCallback:wm,useContext:Cn,useEffect:ju,useImperativeHandle:Cm,useInsertionEffect:Tm,useLayoutEffect:Am,useMemo:Dm,useReducer:wl,useRef:Mm,useState:function(){return wl(ra)},useDebugValue:Zu,useDeferredValue:function(t,n){var a=fn();return Um(a,Gt.memoizedState,t,n)},useTransition:function(){var t=wl(ra)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:mo(t),n]},useSyncExternalStore:rm,useId:Pm,useHostTransitionStatus:Ju,useFormState:xm,useActionState:xm,useOptimistic:function(t,n){var a=fn();return dm(a,Gt,t,n)},useMemoCache:ku,useCacheRefresh:zm};ef.useEffectEvent=bm;var Hm={readContext:Cn,use:Cl,useCallback:wm,useContext:Cn,useEffect:ju,useImperativeHandle:Cm,useInsertionEffect:Tm,useLayoutEffect:Am,useMemo:Dm,useReducer:Wu,useRef:Mm,useState:function(){return Wu(ra)},useDebugValue:Zu,useDeferredValue:function(t,n){var a=fn();return Gt===null?Ku(a,t,n):Um(a,Gt.memoizedState,t,n)},useTransition:function(){var t=Wu(ra)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:mo(t),n]},useSyncExternalStore:rm,useId:Pm,useHostTransitionStatus:Ju,useFormState:Sm,useActionState:Sm,useOptimistic:function(t,n){var a=fn();return Gt!==null?dm(a,Gt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ku,useCacheRefresh:zm};Hm.useEffectEvent=bm;function tf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:y({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var nf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=oi(),u=Ia(o);u.payload=n,a!=null&&(u.callback=a),n=Fa(t,u,o),n!==null&&(Yn(n,t,o),uo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=oi(),u=Ia(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Fa(t,u,o),n!==null&&(Yn(n,t,o),uo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=oi(),o=Ia(a);o.tag=2,n!=null&&(o.callback=n),n=Fa(t,o,a),n!==null&&(Yn(n,t,a),uo(n,t,a))}};function Vm(t,n,a,o,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!no(a,o)||!no(u,f):!0}function km(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&nf.enqueueReplaceState(n,n.state,null)}function Cs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=y({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Xm(t){ul(t)}function Wm(t){console.error(t)}function qm(t){ul(t)}function Ll(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Ym(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function af(t,n,a){return a=Ia(a),a.tag=3,a.payload={element:null},a.callback=function(){Ll(t,n)},a}function jm(t){return t=Ia(t),t.tag=3,t}function Zm(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){Ym(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Ym(n,a,o),typeof u!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function Hx(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&tr(n,a,u,!0),a=ii.current,a!==null){switch(a.tag){case 31:case 13:return xi===null?Wl():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===yl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),wf(t,o,u)),!1;case 22:return a.flags|=65536,o===yl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),wf(t,o,u)),!1}throw Error(s(435,a.tag))}return wf(t,o,u),Wl(),!1}if(yt)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Mu&&(t=Error(s(422),{cause:o}),so(mi(t,a)))):(o!==Mu&&(n=Error(s(423),{cause:o}),so(mi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=mi(o,a),u=af(t.stateNode,o,u),Lu(t,u),on!==4&&(on=2)),!1;var f=Error(s(520),{cause:o});if(f=mi(f,a),To===null?To=[f]:To.push(f),on!==4&&(on=2),n===null)return!0;o=mi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=af(a.stateNode,o,t),Lu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Xa===null||!Xa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=jm(u),Zm(u,t,a,o),Lu(a,u),!1}a=a.return}while(a!==null);return!1}var sf=Error(s(461)),gn=!1;function wn(t,n,a,o){n.child=t===null?$p(n,null,a,o):As(n,t.child,a,o)}function Km(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var C in o)C!=="ref"&&(_[C]=o[C])}else _=o;return Ms(n),o=Bu(t,n,a,_,f,u),C=Gu(),t!==null&&!gn?(Hu(t,n,u),oa(t,n,u)):(yt&&C&&yu(n),n.flags|=1,wn(t,n,o,u),n.child)}function Qm(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!_u(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Jm(t,n,f,o,u)):(t=pl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!hf(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:no,a(_,o)&&t.ref===n.ref)return oa(t,n,u)}return n.flags|=1,t=ta(f,o),t.ref=n.ref,t.return=n,n.child=t}function Jm(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(no(f,o)&&t.ref===n.ref)if(gn=!1,n.pendingProps=o=f,hf(t,u))(t.flags&131072)!==0&&(gn=!0);else return n.lanes=t.lanes,oa(t,n,u)}return rf(t,n,a,o,u)}function $m(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return eg(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&vl(n,f!==null?f.cachePool:null),f!==null?nm(n,f):Pu(),im(n);else return o=n.lanes=536870912,eg(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(vl(n,f.cachePool),nm(n,f),Ga(),n.memoizedState=null):(t!==null&&vl(n,null),Pu(),Ga());return wn(t,n,u,a),n.child}function vo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function eg(t,n,a,o,u){var f=wu();return f=f===null?null:{parent:pn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&vl(n,null),Pu(),im(n),t!==null&&tr(t,n,o,!0),n.childLanes=u,null}function Ol(t,n){return n=zl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function tg(t,n,a){return As(n,t.child,null,a),t=Ol(n,n.pendingProps),t.flags|=2,ai(n),n.memoizedState=null,t}function Vx(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(yt){if(o.mode==="hidden")return t=Ol(n,o),n.lanes=536870912,vo(null,t);if(Iu(n),(t=jt)?(t=h0(t,vi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Na!==null?{id:Ii,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=Fp(t),a.return=n,n.child=a,Rn=n,jt=null)):t=null,t===null)throw Oa(n);return n.lanes=536870912,null}return Ol(n,o)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Iu(n),u)if(n.flags&256)n.flags&=-257,n=tg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(gn||tr(t,n,a,!1),u=(a&t.childLanes)!==0,gn||u){if(o=Xt,o!==null&&(_=Jn(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,vs(t,_),Yn(o,t,_),sf;Wl(),n=tg(t,n,a)}else t=f.treeContext,jt=yi(_.nextSibling),Rn=n,yt=!0,La=null,vi=!1,t!==null&&Hp(n,t),n=Ol(n,o),n.flags|=4096;return n}return t=ta(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Pl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function rf(t,n,a,o,u){return Ms(n),a=Bu(t,n,a,o,void 0,u),o=Gu(),t!==null&&!gn?(Hu(t,n,u),oa(t,n,u)):(yt&&o&&yu(n),n.flags|=1,wn(t,n,a,u),n.child)}function ng(t,n,a,o,u,f){return Ms(n),n.updateQueue=null,a=sm(n,o,a,u),am(t),o=Gu(),t!==null&&!gn?(Hu(t,n,f),oa(t,n,f)):(yt&&o&&yu(n),n.flags|=1,wn(t,n,a,f),n.child)}function ig(t,n,a,o,u){if(Ms(n),n.stateNode===null){var f=Qs,_=a.contextType;typeof _=="object"&&_!==null&&(f=Cn(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=nf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Uu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Cn(_):Qs,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(tf(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&nf.enqueueReplaceState(f,f.state,null),ho(n,o,f,u),fo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var C=n.memoizedProps,G=Cs(a,C);f.props=G;var ne=f.context,ge=a.contextType;_=Qs,typeof ge=="object"&&ge!==null&&(_=Cn(ge));var ye=a.getDerivedStateFromProps;ge=typeof ye=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,ge||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||ne!==_)&&km(n,f,o,_),za=!1;var le=n.memoizedState;f.state=le,ho(n,o,f,u),fo(),ne=n.memoizedState,C||le!==ne||za?(typeof ye=="function"&&(tf(n,a,ye,o),ne=n.memoizedState),(G=za||Vm(n,a,G,o,le,ne,_))?(ge||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ne),f.props=o,f.state=ne,f.context=_,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Nu(t,n),_=n.memoizedProps,ge=Cs(a,_),f.props=ge,ye=n.pendingProps,le=f.context,ne=a.contextType,G=Qs,typeof ne=="object"&&ne!==null&&(G=Cn(ne)),C=a.getDerivedStateFromProps,(ne=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==ye||le!==G)&&km(n,f,o,G),za=!1,le=n.memoizedState,f.state=le,ho(n,o,f,u),fo();var ue=n.memoizedState;_!==ye||le!==ue||za||t!==null&&t.dependencies!==null&&gl(t.dependencies)?(typeof C=="function"&&(tf(n,a,C,o),ue=n.memoizedState),(ge=za||Vm(n,a,ge,o,le,ue,G)||t!==null&&t.dependencies!==null&&gl(t.dependencies))?(ne||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ue,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ue,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ue),f.props=o,f.state=ue,f.context=G,o=ge):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Pl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=As(n,t.child,null,u),n.child=As(n,null,a,u)):wn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=oa(t,n,u),t}function ag(t,n,a,o){return ys(),n.flags|=256,wn(t,n,a,o),n.child}var of={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lf(t){return{baseLanes:t,cachePool:Yp()}}function cf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function sg(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(un.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(yt){if(u?Ba(n):Ga(),(t=jt)?(t=h0(t,vi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Na!==null?{id:Ii,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=Fp(t),a.return=n,n.child=a,Rn=n,jt=null)):t=null,t===null)throw Oa(n);return Wf(t)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(Ga(),u=n.mode,C=zl({mode:"hidden",children:C},u),o=xs(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=lf(a),o.childLanes=cf(t,_,a),n.memoizedState=of,vo(null,o)):(Ba(n),uf(n,C))}var G=t.memoizedState;if(G!==null&&(C=G.dehydrated,C!==null)){if(f)n.flags&256?(Ba(n),n.flags&=-257,n=ff(t,n,a)):n.memoizedState!==null?(Ga(),n.child=t.child,n.flags|=128,n=null):(Ga(),C=o.fallback,u=n.mode,o=zl({mode:"visible",children:o.children},u),C=xs(C,u,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,As(n,t.child,null,a),o=n.child,o.memoizedState=lf(a),o.childLanes=cf(t,_,a),n.memoizedState=of,n=vo(null,o));else if(Ba(n),Wf(C)){if(_=C.nextSibling&&C.nextSibling.dataset,_)var ne=_.dgst;_=ne,o=Error(s(419)),o.stack="",o.digest=_,so({value:o,source:null,stack:null}),n=ff(t,n,a)}else if(gn||tr(t,n,a,!1),_=(a&t.childLanes)!==0,gn||_){if(_=Xt,_!==null&&(o=Jn(_,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,vs(t,o),Yn(_,t,o),sf;Xf(C)||Wl(),n=ff(t,n,a)}else Xf(C)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,jt=yi(C.nextSibling),Rn=n,yt=!0,La=null,vi=!1,t!==null&&Hp(n,t),n=uf(n,o.children),n.flags|=4096);return n}return u?(Ga(),C=o.fallback,u=n.mode,G=t.child,ne=G.sibling,o=ta(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,ne!==null?C=ta(ne,C):(C=xs(C,u,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,vo(null,o),o=n.child,C=t.child.memoizedState,C===null?C=lf(a):(u=C.cachePool,u!==null?(G=pn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=Yp(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=cf(t,_,a),n.memoizedState=of,vo(t.child,o)):(Ba(n),a=t.child,t=a.sibling,a=ta(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function uf(t,n){return n=zl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function zl(t,n){return t=ni(22,t,null,n),t.lanes=0,t}function ff(t,n,a){return As(n,t.child,null,a),t=uf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function rg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Tu(t.return,n,a)}function df(t,n,a,o,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function og(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=un.current,C=(_&2)!==0;if(C?(_=_&1|2,n.flags|=128):_&=1,me(un,_),wn(t,n,o,a),o=yt?ao:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rg(t,a,n);else if(t.tag===19)rg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&bl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),df(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&bl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}df(n,!0,a,null,f,o);break;case"together":df(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function oa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ka|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(tr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ta(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ta(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function hf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&gl(t)))}function kx(t,n,a){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),Pa(n,pn,t.memoizedState.cache),ys();break;case 27:case 5:tt(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:Pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Iu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?sg(t,n,a):(Ba(n),t=oa(t,n,a),t!==null?t.sibling:null);Ba(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(tr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return og(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),me(un,un.current),o)break;return null;case 22:return n.lanes=0,$m(t,n,a,n.pendingProps);case 24:Pa(n,pn,t.memoizedState.cache)}return oa(t,n,a)}function lg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)gn=!0;else{if(!hf(t,a)&&(n.flags&128)===0)return gn=!1,kx(t,n,a);gn=(t.flags&131072)!==0}else gn=!1,yt&&(n.flags&1048576)!==0&&Gp(n,ao,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=bs(n.elementType),n.type=t,typeof t=="function")_u(t)?(o=Cs(t,o),n.tag=1,n=ig(null,n,t,o,a)):(n.tag=0,n=rf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===T){n.tag=11,n=Km(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=Qm(null,n,t,o,a);break e}}throw n=pe(t)||t,Error(s(306,n,""))}}return n;case 0:return rf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Cs(o,n.pendingProps),ig(t,n,o,u,a);case 3:e:{if(Ee(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Nu(t,n),ho(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Pa(n,pn,o),o!==f.cache&&Au(n,[pn],a,!0),fo(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=ag(t,n,o,a);break e}else if(o!==u){u=mi(Error(s(424)),n),so(u),n=ag(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,jt=yi(t.firstChild),Rn=n,yt=!0,La=null,vi=!0,a=$p(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ys(),o===u){n=oa(t,n,a);break e}wn(t,n,o,a)}n=n.child}return n;case 26:return Pl(t,n),t===null?(a=x0(n.type,null,n.pendingProps,null))?n.memoizedState=a:yt||(a=n.type,t=n.pendingProps,o=Jl(se.current).createElement(a),o[dn]=n,o[An]=t,Dn(o,a,t),hn(o),n.stateNode=o):n.memoizedState=x0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return tt(n),t===null&&yt&&(o=n.stateNode=g0(n.type,n.pendingProps,se.current),Rn=n,vi=!0,u=jt,ja(n.type)?(qf=u,jt=yi(o.firstChild)):jt=u),wn(t,n,n.pendingProps.children,a),Pl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&yt&&((u=o=jt)&&(o=xy(o,n.type,n.pendingProps,vi),o!==null?(n.stateNode=o,Rn=n,jt=yi(o.firstChild),vi=!1,u=!0):u=!1),u||Oa(n)),tt(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,o=f.children,Hf(u,f)?o=null:_!==null&&Hf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Bu(t,n,Ox,null,null,a),Lo._currentValue=u),Pl(t,n),wn(t,n,o,a),n.child;case 6:return t===null&&yt&&((t=a=jt)&&(a=yy(a,n.pendingProps,vi),a!==null?(n.stateNode=a,Rn=n,jt=null,t=!0):t=!1),t||Oa(n)),null;case 13:return sg(t,n,a);case 4:return Ee(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=As(n,null,o,a):wn(t,n,o,a),n.child;case 11:return Km(t,n,n.type,n.pendingProps,a);case 7:return wn(t,n,n.pendingProps,a),n.child;case 8:return wn(t,n,n.pendingProps.children,a),n.child;case 12:return wn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Pa(n,n.type,o.value),wn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ms(n),u=Cn(u),o=o(u),n.flags|=1,wn(t,n,o,a),n.child;case 14:return Qm(t,n,n.type,n.pendingProps,a);case 15:return Jm(t,n,n.type,n.pendingProps,a);case 19:return og(t,n,a);case 31:return Vx(t,n,a);case 22:return $m(t,n,a,n.pendingProps);case 24:return Ms(n),o=Cn(pn),t===null?(u=wu(),u===null&&(u=Xt,f=Ru(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Uu(n),Pa(n,pn,u)):((t.lanes&a)!==0&&(Nu(t,n),ho(n,null,null,a),fo()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Pa(n,pn,o)):(o=f.cache,Pa(n,pn,o),o!==u.cache&&Au(n,[pn],a,!0))),wn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function la(t){t.flags|=4}function pf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Pg())t.flags|=8192;else throw Ts=yl,Du}else t.flags&=-16777217}function cg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!b0(n))if(Pg())t.flags|=8192;else throw Ts=yl,Du}function Il(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Me():536870912,t.lanes|=n,hr|=n)}function xo(t,n){if(!yt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Zt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Xx(t,n,a){var o=n.pendingProps;switch(Su(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(n),null;case 1:return Zt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),aa(pn),Ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(er(n)?la(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Eu())),Zt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(la(n),f!==null?(Zt(n),cg(n,f)):(Zt(n),pf(n,u,null,o,a))):f?f!==t.memoizedState?(la(n),Zt(n),cg(n,f)):(Zt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&la(n),Zt(n),pf(n,u,t,o,a)),null;case 27:if(Ke(n),a=se.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Zt(n),null}t=Ce.current,er(n)?Vp(n):(t=g0(u,o,a),n.stateNode=t,la(n))}return Zt(n),null;case 5:if(Ke(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Zt(n),null}if(f=Ce.current,er(n))Vp(n);else{var _=Jl(se.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[dn]=n,f[An]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(Dn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&la(n)}}return Zt(n),pf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=se.current,er(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[dn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||s0(t.nodeValue,a)),t||Oa(n,!0)}else t=Jl(t).createTextNode(o),t[dn]=n,n.stateNode=t}return Zt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=er(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[dn]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),t=!1}else a=Eu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Zt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=er(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[dn]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),u=!1}else u=Eu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Il(n,n.updateQueue),Zt(n),null);case 4:return Ge(),t===null&&zf(n.stateNode.containerInfo),Zt(n),null;case 10:return aa(n.type),Zt(n),null;case 19:if(X(un),o=n.memoizedState,o===null)return Zt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)xo(o,!1);else{if(on!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=bl(t),f!==null){for(n.flags|=128,xo(o,!1),t=f.updateQueue,n.updateQueue=t,Il(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Ip(a,t),a=a.sibling;return me(un,un.current&1|2),yt&&na(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Bt()>Vl&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304)}else{if(!u)if(t=bl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Il(n,t),xo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!yt)return Zt(n),null}else 2*Bt()-o.renderingStartTime>Vl&&a!==536870912&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Bt(),t.sibling=null,a=un.current,me(un,u?a&1|2:a&1),yt&&na(n,o.treeForkCount),t):(Zt(n),null);case 22:case 23:return ai(n),zu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Zt(n),n.subtreeFlags&6&&(n.flags|=8192)):Zt(n),a=n.updateQueue,a!==null&&Il(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&X(Es),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),aa(pn),Zt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Wx(t,n){switch(Su(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return aa(pn),Ge(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ke(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(s(340));ys()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ai(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ys()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return X(un),null;case 4:return Ge(),null;case 10:return aa(n.type),null;case 22:case 23:return ai(n),zu(),t!==null&&X(Es),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return aa(pn),null;case 25:return null;default:return null}}function ug(t,n){switch(Su(n),n.tag){case 3:aa(pn),Ge();break;case 26:case 27:case 5:Ke(n);break;case 4:Ge();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:X(un);break;case 10:aa(n.type);break;case 22:case 23:ai(n),zu(),t!==null&&X(Es);break;case 24:aa(pn)}}function yo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==u)}}catch(C){It(n,n.return,C)}}function Ha(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var _=o.inst,C=_.destroy;if(C!==void 0){_.destroy=void 0,u=n;var G=a,ne=C;try{ne()}catch(ge){It(u,G,ge)}}}o=o.next}while(o!==f)}}catch(ge){It(n,n.return,ge)}}function fg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{tm(n,a)}catch(o){It(t,t.return,o)}}}function dg(t,n,a){a.props=Cs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){It(t,n,o)}}function So(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){It(t,n,u)}}function Bi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){It(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){It(t,n,u)}else a.current=null}function hg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){It(t,t.return,u)}}function mf(t,n,a){try{var o=t.stateNode;hy(o,t.type,a,n),o[An]=n}catch(u){It(t,t.return,u)}}function pg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ja(t.type)||t.tag===4}function gf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _f(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=$i));else if(o!==4&&(o===27&&ja(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(_f(t,n,a),t=t.sibling;t!==null;)_f(t,n,a),t=t.sibling}function Fl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&ja(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Fl(t,n,a),t=t.sibling;t!==null;)Fl(t,n,a),t=t.sibling}function mg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,a),n[dn]=t,n[An]=a}catch(f){It(t,t.return,f)}}var ca=!1,_n=!1,vf=!1,gg=typeof WeakSet=="function"?WeakSet:Set,En=null;function qx(t,n){if(t=t.containerInfo,Bf=sc,t=Cp(t),uu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,C=-1,G=-1,ne=0,ge=0,ye=t,le=null;t:for(;;){for(var ue;ye!==a||u!==0&&ye.nodeType!==3||(C=_+u),ye!==f||o!==0&&ye.nodeType!==3||(G=_+o),ye.nodeType===3&&(_+=ye.nodeValue.length),(ue=ye.firstChild)!==null;)le=ye,ye=ue;for(;;){if(ye===t)break t;if(le===a&&++ne===u&&(C=_),le===f&&++ge===o&&(G=_),(ue=ye.nextSibling)!==null)break;ye=le,le=ye.parentNode}ye=ue}a=C===-1||G===-1?null:{start:C,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gf={focusedElem:t,selectionRange:a},sc=!1,En=n;En!==null;)if(n=En,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,En=t;else for(;En!==null;){switch(n=En,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var We=Cs(a.type,u);t=o.getSnapshotBeforeUpdate(We,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(et){It(a,a.return,et)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)kf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":kf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,En=t;break}En=n.return}}function _g(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:fa(t,a),o&4&&yo(5,a);break;case 1:if(fa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){It(a,a.return,_)}else{var u=Cs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){It(a,a.return,_)}}o&64&&fg(a),o&512&&So(a,a.return);break;case 3:if(fa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{tm(t,n)}catch(_){It(a,a.return,_)}}break;case 27:n===null&&o&4&&mg(a);case 26:case 5:fa(t,a),n===null&&o&4&&hg(a),o&512&&So(a,a.return);break;case 12:fa(t,a);break;case 31:fa(t,a),o&4&&yg(t,a);break;case 13:fa(t,a),o&4&&Sg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ty.bind(null,a),Sy(t,a))));break;case 22:if(o=a.memoizedState!==null||ca,!o){n=n!==null&&n.memoizedState!==null||_n,u=ca;var f=_n;ca=o,(_n=n)&&!f?da(t,a,(a.subtreeFlags&8772)!==0):fa(t,a),ca=u,_n=f}break;case 30:break;default:fa(t,a)}}function vg(t){var n=t.alternate;n!==null&&(t.alternate=null,vg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ca(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,kn=!1;function ua(t,n,a){for(a=a.child;a!==null;)xg(t,n,a),a=a.sibling}function xg(t,n,a){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(fe,a)}catch{}switch(a.tag){case 26:_n||Bi(a,n),ua(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:_n||Bi(a,n);var o=$t,u=kn;ja(a.type)&&($t=a.stateNode,kn=!1),ua(t,n,a),Do(a.stateNode),$t=o,kn=u;break;case 5:_n||Bi(a,n);case 6:if(o=$t,u=kn,$t=null,ua(t,n,a),$t=o,kn=u,$t!==null)if(kn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(a.stateNode)}catch(f){It(a,n,f)}else try{$t.removeChild(a.stateNode)}catch(f){It(a,n,f)}break;case 18:$t!==null&&(kn?(t=$t,f0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Sr(t)):f0($t,a.stateNode));break;case 4:o=$t,u=kn,$t=a.stateNode.containerInfo,kn=!0,ua(t,n,a),$t=o,kn=u;break;case 0:case 11:case 14:case 15:Ha(2,a,n),_n||Ha(4,a,n),ua(t,n,a);break;case 1:_n||(Bi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&dg(a,n,o)),ua(t,n,a);break;case 21:ua(t,n,a);break;case 22:_n=(o=_n)||a.memoizedState!==null,ua(t,n,a),_n=o;break;default:ua(t,n,a)}}function yg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Sr(t)}catch(a){It(n,n.return,a)}}}function Sg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Sr(t)}catch(a){It(n,n.return,a)}}function Yx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new gg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new gg),n;default:throw Error(s(435,t.tag))}}function Bl(t,n){var a=Yx(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=ny.bind(null,t,o);o.then(u,u)}})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,_=n,C=_;e:for(;C!==null;){switch(C.tag){case 27:if(ja(C.type)){$t=C.stateNode,kn=!1;break e}break;case 5:$t=C.stateNode,kn=!1;break e;case 3:case 4:$t=C.stateNode.containerInfo,kn=!0;break e}C=C.return}if($t===null)throw Error(s(160));xg(f,_,u),$t=null,kn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Mg(n,t),n=n.sibling}var Ri=null;function Mg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),Wn(t),o&4&&(Ha(3,t,t.return),yo(3,t),Ha(5,t,t.return));break;case 1:Xn(n,t),Wn(t),o&512&&(_n||a===null||Bi(a,a.return)),o&64&&ca&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ri;if(Xn(n,t),Wn(t),o&512&&(_n||a===null||Bi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ra]||f[dn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Dn(f,o,a),f[dn]=t,hn(f),o=f;break e;case"link":var _=M0("link","href",u).get(o+(a.href||""));if(_){for(var C=0;C<_.length;C++)if(f=_[C],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(C,1);break t}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;case"meta":if(_=M0("meta","content",u).get(o+(a.content||""))){for(C=0;C<_.length;C++)if(f=_[C],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(C,1);break t}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[dn]=t,hn(f),o=f}t.stateNode=o}else E0(u,t.type,t.stateNode);else t.stateNode=S0(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?E0(u,t.type,t.stateNode):S0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&mf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),Wn(t),o&512&&(_n||a===null||Bi(a,a.return)),a!==null&&o&4&&mf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),Wn(t),o&512&&(_n||a===null||Bi(a,a.return)),t.flags&32){u=t.stateNode;try{ei(u,"")}catch(We){It(t,t.return,We)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,mf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(vf=!0);break;case 6:if(Xn(n,t),Wn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(We){It(t,t.return,We)}}break;case 3:if(tc=null,u=Ri,Ri=$l(n.containerInfo),Xn(n,t),Ri=u,Wn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Sr(n.containerInfo)}catch(We){It(t,t.return,We)}vf&&(vf=!1,Eg(t));break;case 4:o=Ri,Ri=$l(t.stateNode.containerInfo),Xn(n,t),Wn(t),Ri=o;break;case 12:Xn(n,t),Wn(t);break;case 31:Xn(n,t),Wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Bl(t,o)));break;case 13:Xn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Hl=Bt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Bl(t,o)));break;case 22:u=t.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,ne=ca,ge=_n;if(ca=ne||u,_n=ge||G,Xn(n,t),_n=ge,ca=ne,Wn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||ca||_n||ws(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{C=G.stateNode;var ye=G.memoizedProps.style,le=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;C.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(We){It(G,G.return,We)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(We){It(G,G.return,We)}}}else if(n.tag===18){if(a===null){G=n;try{var ue=G.stateNode;u?d0(ue,!0):d0(G.stateNode,!1)}catch(We){It(G,G.return,We)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Bl(t,a))));break;case 19:Xn(n,t),Wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Bl(t,o)));break;case 30:break;case 21:break;default:Xn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(pg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=gf(t);Fl(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(ei(_,""),a.flags&=-33);var C=gf(t);Fl(t,C,_);break;case 3:case 4:var G=a.stateNode.containerInfo,ne=gf(t);_f(t,ne,G);break;default:throw Error(s(161))}}catch(ge){It(t,t.return,ge)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Eg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Eg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function fa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)_g(t,n.alternate,n),n=n.sibling}function ws(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ha(4,n,n.return),ws(n);break;case 1:Bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&dg(n,n.return,a),ws(n);break;case 27:Do(n.stateNode);case 26:case 5:Bi(n,n.return),ws(n);break;case 22:n.memoizedState===null&&ws(n);break;case 30:ws(n);break;default:ws(n)}t=t.sibling}}function da(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:da(u,f,a),yo(4,f);break;case 1:if(da(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ne){It(o,o.return,ne)}if(o=f,u=o.updateQueue,u!==null){var C=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)em(G[u],C)}catch(ne){It(o,o.return,ne)}}a&&_&64&&fg(f),So(f,f.return);break;case 27:mg(f);case 26:case 5:da(u,f,a),a&&o===null&&_&4&&hg(f),So(f,f.return);break;case 12:da(u,f,a);break;case 31:da(u,f,a),a&&_&4&&yg(u,f);break;case 13:da(u,f,a),a&&_&4&&Sg(u,f);break;case 22:f.memoizedState===null&&da(u,f,a),So(f,f.return);break;case 30:break;default:da(u,f,a)}n=n.sibling}}function xf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ro(a))}function yf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ro(t))}function Ci(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)bg(t,n,a,o),n=n.sibling}function bg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(t,n,a,o),u&2048&&yo(9,n);break;case 1:Ci(t,n,a,o);break;case 3:Ci(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ro(t)));break;case 12:if(u&2048){Ci(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,C=f.onPostCommit;typeof C=="function"&&C(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){It(n,n.return,G)}}else Ci(t,n,a,o);break;case 31:Ci(t,n,a,o);break;case 13:Ci(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ci(t,n,a,o):Mo(t,n):f._visibility&2?Ci(t,n,a,o):(f._visibility|=2,ur(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&xf(_,n);break;case 24:Ci(t,n,a,o),u&2048&&yf(n.alternate,n);break;default:Ci(t,n,a,o)}}function ur(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,C=a,G=o,ne=_.flags;switch(_.tag){case 0:case 11:case 15:ur(f,_,C,G,u),yo(8,_);break;case 23:break;case 22:var ge=_.stateNode;_.memoizedState!==null?ge._visibility&2?ur(f,_,C,G,u):Mo(f,_):(ge._visibility|=2,ur(f,_,C,G,u)),u&&ne&2048&&xf(_.alternate,_);break;case 24:ur(f,_,C,G,u),u&&ne&2048&&yf(_.alternate,_);break;default:ur(f,_,C,G,u)}n=n.sibling}}function Mo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Mo(a,o),u&2048&&xf(o.alternate,o);break;case 24:Mo(a,o),u&2048&&yf(o.alternate,o);break;default:Mo(a,o)}n=n.sibling}}var Eo=8192;function fr(t,n,a){if(t.subtreeFlags&Eo)for(t=t.child;t!==null;)Tg(t,n,a),t=t.sibling}function Tg(t,n,a){switch(t.tag){case 26:fr(t,n,a),t.flags&Eo&&t.memoizedState!==null&&Ly(a,Ri,t.memoizedState,t.memoizedProps);break;case 5:fr(t,n,a);break;case 3:case 4:var o=Ri;Ri=$l(t.stateNode.containerInfo),fr(t,n,a),Ri=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Eo,Eo=16777216,fr(t,n,a),Eo=o):fr(t,n,a));break;default:fr(t,n,a)}}function Ag(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function bo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,Cg(o,t)}Ag(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Rg(t),t=t.sibling}function Rg(t){switch(t.tag){case 0:case 11:case 15:bo(t),t.flags&2048&&Ha(9,t,t.return);break;case 3:bo(t);break;case 12:bo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Gl(t)):bo(t);break;default:bo(t)}}function Gl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,Cg(o,t)}Ag(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ha(8,n,n.return),Gl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Gl(n));break;default:Gl(n)}t=t.sibling}}function Cg(t,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Ha(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ro(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else e:for(a=t;En!==null;){o=En;var u=o.sibling,f=o.return;if(vg(o),o===a){En=null;break e}if(u!==null){u.return=f,En=u;break e}En=f}}}var jx={getCacheForType:function(t){var n=Cn(pn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(pn).controller.signal}},Zx=typeof WeakMap=="function"?WeakMap:Map,wt=0,Xt=null,pt=null,gt=0,zt=0,si=null,Va=!1,dr=!1,Sf=!1,ha=0,on=0,ka=0,Ds=0,Mf=0,ri=0,hr=0,To=null,qn=null,Ef=!1,Hl=0,wg=0,Vl=1/0,kl=null,Xa=null,yn=0,Wa=null,pr=null,pa=0,bf=0,Tf=null,Dg=null,Ao=0,Af=null;function oi(){return(wt&2)!==0&&gt!==0?gt&-gt:B.T!==null?Nf():jr()}function Ug(){if(ri===0)if((gt&536870912)===0||yt){var t=it;it<<=1,(it&3932160)===0&&(it=262144),ri=t}else ri=536870912;return t=ii.current,t!==null&&(t.flags|=32),ri}function Yn(t,n,a){(t===Xt&&(zt===2||zt===9)||t.cancelPendingCommit!==null)&&(mr(t,0),qa(t,gt,ri,!1)),Ve(t,a),((wt&2)===0||t!==Xt)&&(t===Xt&&((wt&2)===0&&(Ds|=a),on===4&&qa(t,gt,ri,!1)),Gi(t))}function Ng(t,n,a){if((wt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||we(t,n),u=o?Jx(t,n):Cf(t,n,!0),f=o;do{if(u===0){dr&&!o&&qa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Kx(a)){u=Cf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var C=t;u=To;var G=C.current.memoizedState.isDehydrated;if(G&&(mr(C,_).flags|=256),_=Cf(C,_,!1),_!==2){if(Sf&&!G){C.errorRecoveryDisabledLanes|=f,Ds|=f,u=4;break e}f=qn,qn=u,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){mr(t,0),qa(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:qa(o,n,ri,!Va);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Hl+300-Bt(),10<u)){if(qa(o,n,ri,!Va),ve(o,0,!0)!==0)break e;pa=n,o.timeoutHandle=c0(Lg.bind(null,o,a,qn,kl,Ef,n,ri,Ds,hr,Va,f,"Throttled",-0,0),u);break e}Lg(o,a,qn,kl,Ef,n,ri,Ds,hr,Va,f,null,-0,0)}}break}while(!0);Gi(t)}function Lg(t,n,a,o,u,f,_,C,G,ne,ge,ye,le,ue){if(t.timeoutHandle=-1,ye=n.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$i},Tg(n,f,ye);var We=(f&62914560)===f?Hl-Bt():(f&4194048)===f?wg-Bt():0;if(We=Oy(ye,We),We!==null){pa=f,t.cancelPendingCommit=We(Hg.bind(null,t,n,f,a,o,u,_,C,G,ge,ye,null,le,ue)),qa(t,f,_,!ne);return}}Hg(t,n,f,a,o,u,_,C,G)}function Kx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ti(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(t,n,a,o){n&=~Mf,n&=~Ds,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Fe(u),_=1<<f;o[f]=-1,u&=~_}a!==0&&Nt(t,a,n)}function Xl(){return(wt&6)===0?(Ro(0),!1):!0}function Rf(){if(pt!==null){if(zt===0)var t=pt.return;else t=pt,ia=Ss=null,Vu(t),sr=null,lo=0,t=pt;for(;t!==null;)ug(t.alternate,t),t=t.return;pt=null}}function mr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,gy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),pa=0,Rf(),Xt=t,pt=a=ta(t.current,null),gt=n,zt=0,si=null,Va=!1,dr=we(t,n),Sf=!1,hr=ri=Mf=Ds=ka=on=0,qn=To=null,Ef=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Fe(o),f=1<<u;n|=t[u],o&=~f}return ha=n,fl(),a}function Og(t,n){ot=null,B.H=_o,n===ar||n===xl?(n=Kp(),zt=3):n===Du?(n=Kp(),zt=4):zt=n===sf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,pt===null&&(on=1,Ll(t,mi(n,t.current)))}function Pg(){var t=ii.current;return t===null?!0:(gt&4194048)===gt?xi===null:(gt&62914560)===gt||(gt&536870912)!==0?t===xi:!1}function zg(){var t=B.H;return B.H=_o,t===null?_o:t}function Ig(){var t=B.A;return B.A=jx,t}function Wl(){on=4,Va||(gt&4194048)!==gt&&ii.current!==null||(dr=!0),(ka&134217727)===0&&(Ds&134217727)===0||Xt===null||qa(Xt,gt,ri,!1)}function Cf(t,n,a){var o=wt;wt|=2;var u=zg(),f=Ig();(Xt!==t||gt!==n)&&(kl=null,mr(t,n)),n=!1;var _=on;e:do try{if(zt!==0&&pt!==null){var C=pt,G=si;switch(zt){case 8:Rf(),_=6;break e;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var ne=zt;if(zt=0,si=null,gr(t,C,G,ne),a&&dr){_=0;break e}break;default:ne=zt,zt=0,si=null,gr(t,C,G,ne)}}Qx(),_=on;break}catch(ge){Og(t,ge)}while(!0);return n&&t.shellSuspendCounter++,ia=Ss=null,wt=o,B.H=u,B.A=f,pt===null&&(Xt=null,gt=0,fl()),_}function Qx(){for(;pt!==null;)Fg(pt)}function Jx(t,n){var a=wt;wt|=2;var o=zg(),u=Ig();Xt!==t||gt!==n?(kl=null,Vl=Bt()+500,mr(t,n)):dr=we(t,n);e:do try{if(zt!==0&&pt!==null){n=pt;var f=si;t:switch(zt){case 1:zt=0,si=null,gr(t,n,f,1);break;case 2:case 9:if(jp(f)){zt=0,si=null,Bg(n);break}n=function(){zt!==2&&zt!==9||Xt!==t||(zt=7),Gi(t)},f.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:jp(f)?(zt=0,si=null,Bg(n)):(zt=0,si=null,gr(t,n,f,7));break;case 5:var _=null;switch(pt.tag){case 26:_=pt.memoizedState;case 5:case 27:var C=pt;if(_?b0(_):C.stateNode.complete){zt=0,si=null;var G=C.sibling;if(G!==null)pt=G;else{var ne=C.return;ne!==null?(pt=ne,ql(ne)):pt=null}break t}}zt=0,si=null,gr(t,n,f,5);break;case 6:zt=0,si=null,gr(t,n,f,6);break;case 8:Rf(),on=6;break e;default:throw Error(s(462))}}$x();break}catch(ge){Og(t,ge)}while(!0);return ia=Ss=null,B.H=o,B.A=u,wt=a,pt!==null?0:(Xt=null,gt=0,fl(),on)}function $x(){for(;pt!==null&&!sn();)Fg(pt)}function Fg(t){var n=lg(t.alternate,t,ha);t.memoizedProps=t.pendingProps,n===null?ql(t):pt=n}function Bg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=ng(a,n,n.pendingProps,n.type,void 0,gt);break;case 11:n=ng(a,n,n.pendingProps,n.type.render,n.ref,gt);break;case 5:Vu(n);default:ug(a,n),n=pt=Ip(n,ha),n=lg(a,n,ha)}t.memoizedProps=t.pendingProps,n===null?ql(t):pt=n}function gr(t,n,a,o){ia=Ss=null,Vu(n),sr=null,lo=0;var u=n.return;try{if(Hx(t,u,n,a,gt)){on=1,Ll(t,mi(a,t.current)),pt=null;return}}catch(f){if(u!==null)throw pt=u,f;on=1,Ll(t,mi(a,t.current)),pt=null;return}n.flags&32768?(yt||o===1?t=!0:dr||(gt&536870912)!==0?t=!1:(Va=t=!0,(o===2||o===9||o===3||o===6)&&(o=ii.current,o!==null&&o.tag===13&&(o.flags|=16384))),Gg(n,t)):ql(n)}function ql(t){var n=t;do{if((n.flags&32768)!==0){Gg(n,Va);return}t=n.return;var a=Xx(n.alternate,n,ha);if(a!==null){pt=a;return}if(n=n.sibling,n!==null){pt=n;return}pt=n=t}while(n!==null);on===0&&(on=5)}function Gg(t,n){do{var a=Wx(t.alternate,t);if(a!==null){a.flags&=32767,pt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pt=t;return}pt=t=a}while(t!==null);on=6,pt=null}function Hg(t,n,a,o,u,f,_,C,G){t.cancelPendingCommit=null;do Yl();while(yn!==0);if((wt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=mu,Kt(t,a,f,_,C,G),t===Xt&&(pt=Xt=null,gt=0),pr=n,Wa=t,pa=a,bf=f,Tf=u,Dg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,iy(J,function(){return qg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=H.p,H.p=2,_=wt,wt|=4;try{qx(t,n,a)}finally{wt=_,H.p=u,B.T=o}}yn=1,Vg(),kg(),Xg()}}function Vg(){if(yn===1){yn=0;var t=Wa,n=pr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=H.p;H.p=2;var u=wt;wt|=4;try{Mg(n,t);var f=Gf,_=Cp(t.containerInfo),C=f.focusedElem,G=f.selectionRange;if(_!==C&&C&&C.ownerDocument&&Rp(C.ownerDocument.documentElement,C)){if(G!==null&&uu(C)){var ne=G.start,ge=G.end;if(ge===void 0&&(ge=ne),"selectionStart"in C)C.selectionStart=ne,C.selectionEnd=Math.min(ge,C.value.length);else{var ye=C.ownerDocument||document,le=ye&&ye.defaultView||window;if(le.getSelection){var ue=le.getSelection(),We=C.textContent.length,et=Math.min(G.start,We),Vt=G.end===void 0?et:Math.min(G.end,We);!ue.extend&&et>Vt&&(_=Vt,Vt=et,et=_);var K=Ap(C,et),W=Ap(C,Vt);if(K&&W&&(ue.rangeCount!==1||ue.anchorNode!==K.node||ue.anchorOffset!==K.offset||ue.focusNode!==W.node||ue.focusOffset!==W.offset)){var te=ye.createRange();te.setStart(K.node,K.offset),ue.removeAllRanges(),et>Vt?(ue.addRange(te),ue.extend(W.node,W.offset)):(te.setEnd(W.node,W.offset),ue.addRange(te))}}}}for(ye=[],ue=C;ue=ue.parentNode;)ue.nodeType===1&&ye.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<ye.length;C++){var xe=ye[C];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}sc=!!Bf,Gf=Bf=null}finally{wt=u,H.p=o,B.T=a}}t.current=n,yn=2}}function kg(){if(yn===2){yn=0;var t=Wa,n=pr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=H.p;H.p=2;var u=wt;wt|=4;try{_g(t,n.alternate,n)}finally{wt=u,H.p=o,B.T=a}}yn=3}}function Xg(){if(yn===4||yn===3){yn=0,Z();var t=Wa,n=pr,a=pa,o=Dg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?yn=5:(yn=0,pr=Wa=null,Wg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Xa=null),Yr(a),n=n.stateNode,he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(fe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=H.p,H.p=2,B.T=null;try{for(var f=t.onRecoverableError,_=0;_<o.length;_++){var C=o[_];f(C.value,{componentStack:C.stack})}}finally{B.T=n,H.p=u}}(pa&3)!==0&&Yl(),Gi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Af?Ao++:(Ao=0,Af=t):Ao=0,Ro(0)}}function Wg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ro(n)))}function Yl(){return Vg(),kg(),Xg(),qg()}function qg(){if(yn!==5)return!1;var t=Wa,n=bf;bf=0;var a=Yr(pa),o=B.T,u=H.p;try{H.p=32>a?32:a,B.T=null,a=Tf,Tf=null;var f=Wa,_=pa;if(yn=0,pr=Wa=null,pa=0,(wt&6)!==0)throw Error(s(331));var C=wt;if(wt|=4,Rg(f.current),bg(f,f.current,_,a),wt=C,Ro(0,!1),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(fe,f)}catch{}return!0}finally{H.p=u,B.T=o,Wg(t,n)}}function Yg(t,n,a){n=mi(a,n),n=af(t.stateNode,n,2),t=Fa(t,n,2),t!==null&&(Ve(t,2),Gi(t))}function It(t,n,a){if(t.tag===3)Yg(t,t,a);else for(;n!==null;){if(n.tag===3){Yg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Xa===null||!Xa.has(o))){t=mi(a,t),a=jm(2),o=Fa(n,a,2),o!==null&&(Zm(a,o,n,t),Ve(o,2),Gi(o));break}}n=n.return}}function wf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Zx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Sf=!0,u.add(a),t=ey.bind(null,t,n,a),n.then(t,t))}function ey(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xt===t&&(gt&a)===a&&(on===4||on===3&&(gt&62914560)===gt&&300>Bt()-Hl?(wt&2)===0&&mr(t,0):Mf|=a,hr===gt&&(hr=0)),Gi(t)}function jg(t,n){n===0&&(n=Me()),t=vs(t,n),t!==null&&(Ve(t,n),Gi(t))}function ty(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),jg(t,a)}function ny(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),jg(t,a)}function iy(t,n){return cn(t,n)}var jl=null,_r=null,Df=!1,Zl=!1,Uf=!1,Ya=0;function Gi(t){t!==_r&&t.next===null&&(_r===null?jl=_r=t:_r=_r.next=t),Zl=!0,Df||(Df=!0,sy())}function Ro(t,n){if(!Uf&&Zl){Uf=!0;do for(var a=!1,o=jl;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,C=o.pingedLanes;f=(1<<31-Fe(42|t)+1)-1,f&=u&~(_&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Jg(o,f))}else f=gt,f=ve(o,o===Xt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||we(o,f)||(a=!0,Jg(o,f));o=o.next}while(a);Uf=!1}}function ay(){Zg()}function Zg(){Zl=Df=!1;var t=0;Ya!==0&&my()&&(t=Ya);for(var n=Bt(),a=null,o=jl;o!==null;){var u=o.next,f=Kg(o,n);f===0?(o.next=null,a===null?jl=u:a.next=u,u===null&&(_r=a)):(a=o,(t!==0||(f&3)!==0)&&(Zl=!0)),o=u}yn!==0&&yn!==5||Ro(t),Ya!==0&&(Ya=0)}function Kg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Fe(f),C=1<<_,G=u[_];G===-1?((C&a)===0||(C&o)!==0)&&(u[_]=Ie(C,n)):G<=n&&(t.expiredLanes|=C),f&=~C}if(n=Xt,a=gt,a=ve(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(zt===2||zt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Wt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||we(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Wt(o),Yr(a)){case 2:case 8:a=E;break;case 32:a=J;break;case 268435456:a=de;break;default:a=J}return o=Qg.bind(null,t),a=cn(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Wt(o),t.callbackPriority=2,t.callbackNode=null,2}function Qg(t,n){if(yn!==0&&yn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Yl()&&t.callbackNode!==a)return null;var o=gt;return o=ve(t,t===Xt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Ng(t,o,n),Kg(t,Bt()),t.callbackNode!=null&&t.callbackNode===a?Qg.bind(null,t):null)}function Jg(t,n){if(Yl())return null;Ng(t,n,!0)}function sy(){_y(function(){(wt&6)!==0?cn(P,ay):Zg()})}function Nf(){if(Ya===0){var t=nr;t===0&&(t=Qe,Qe<<=1,(Qe&261888)===0&&(Qe=256)),Ya=t}return Ya}function $g(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ps(""+t)}function e0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function ry(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=$g((u[An]||null).action),_=o.submitter;_&&(n=(n=_[An]||null)?$g(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var C=new ol("action","action",null,o,u);t.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ya!==0){var G=_?e0(u,_):new FormData(u);Qu(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(C.preventDefault(),G=_?e0(u,_):new FormData(u),Qu(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var Lf=0;Lf<pu.length;Lf++){var Of=pu[Lf],oy=Of.toLowerCase(),ly=Of[0].toUpperCase()+Of.slice(1);Ai(oy,"on"+ly)}Ai(Up,"onAnimationEnd"),Ai(Np,"onAnimationIteration"),Ai(Lp,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(bx,"onTransitionRun"),Ai(Tx,"onTransitionStart"),Ai(Ax,"onTransitionCancel"),Ai(Op,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Co));function t0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var C=o[_],G=C.instance,ne=C.currentTarget;if(C=C.listener,G!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=ne;try{f(u)}catch(ge){ul(ge)}u.currentTarget=null,f=G}else for(_=0;_<o.length;_++){if(C=o[_],G=C.instance,ne=C.currentTarget,C=C.listener,G!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=ne;try{f(u)}catch(ge){ul(ge)}u.currentTarget=null,f=G}}}}function mt(t,n){var a=n[fs];a===void 0&&(a=n[fs]=new Set);var o=t+"__bubble";a.has(o)||(n0(n,t,2,!1),a.add(o))}function Pf(t,n,a){var o=0;n&&(o|=4),n0(a,t,o,n)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function zf(t){if(!t[Kl]){t[Kl]=!0,il.forEach(function(a){a!=="selectionchange"&&(cy.has(a)||Pf(a,!1,t),Pf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Kl]||(n[Kl]=!0,Pf("selectionchange",!1,n))}}function n0(t,n,a,o){switch(U0(n)){case 2:var u=Iy;break;case 8:u=Fy;break;default:u=Qf}a=u.bind(null,n,a,t),u=void 0,!tu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function If(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var C=o.stateNode.containerInfo;if(C===u)break;if(_===4)for(_=o.return;_!==null;){var G=_.tag;if((G===3||G===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;C!==null;){if(_=Qi(C),_===null)return;if(G=_.tag,G===5||G===6||G===26||G===27){o=f=_;continue e}C=C.parentNode}}o=o.return}op(function(){var ne=f,ge=$c(a),ye=[];e:{var le=Pp.get(t);if(le!==void 0){var ue=ol,We=t;switch(t){case"keypress":if(sl(a)===0)break e;case"keydown":case"keyup":ue=nx;break;case"focusin":We="focus",ue=su;break;case"focusout":We="blur",ue=su;break;case"beforeblur":case"afterblur":ue=su;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Xv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=sx;break;case Up:case Np:case Lp:ue=Yv;break;case Op:ue=ox;break;case"scroll":case"scrollend":ue=Vv;break;case"wheel":ue=cx;break;case"copy":case"cut":case"paste":ue=Zv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=dp;break;case"toggle":case"beforetoggle":ue=fx}var et=(n&4)!==0,Vt=!et&&(t==="scroll"||t==="scrollend"),K=et?le!==null?le+"Capture":null:le;et=[];for(var W=ne,te;W!==null;){var xe=W;if(te=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||te===null||K===null||(xe=Zr(W,K),xe!=null&&et.push(wo(W,xe,te))),Vt)break;W=W.return}0<et.length&&(le=new ue(le,We,null,a,ge),ye.push({event:le,listeners:et}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",ue=t==="mouseout"||t==="pointerout",le&&a!==Jc&&(We=a.relatedTarget||a.fromElement)&&(Qi(We)||We[Hn]))break e;if((ue||le)&&(le=ge.window===ge?ge:(le=ge.ownerDocument)?le.defaultView||le.parentWindow:window,ue?(We=a.relatedTarget||a.toElement,ue=ne,We=We?Qi(We):null,We!==null&&(Vt=c(We),et=We.tag,We!==Vt||et!==5&&et!==27&&et!==6)&&(We=null)):(ue=null,We=ne),ue!==We)){if(et=up,xe="onMouseLeave",K="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(et=dp,xe="onPointerLeave",K="onPointerEnter",W="pointer"),Vt=ue==null?le:hs(ue),te=We==null?le:hs(We),le=new et(xe,W+"leave",ue,a,ge),le.target=Vt,le.relatedTarget=te,xe=null,Qi(ge)===ne&&(et=new et(K,W+"enter",We,a,ge),et.target=te,et.relatedTarget=Vt,xe=et),Vt=xe,ue&&We)t:{for(et=uy,K=ue,W=We,te=0,xe=K;xe;xe=et(xe))te++;xe=0;for(var $e=W;$e;$e=et($e))xe++;for(;0<te-xe;)K=et(K),te--;for(;0<xe-te;)W=et(W),xe--;for(;te--;){if(K===W||W!==null&&K===W.alternate){et=K;break t}K=et(K),W=et(W)}et=null}else et=null;ue!==null&&i0(ye,le,ue,et,!1),We!==null&&Vt!==null&&i0(ye,Vt,We,et,!0)}}e:{if(le=ne?hs(ne):window,ue=le.nodeName&&le.nodeName.toLowerCase(),ue==="select"||ue==="input"&&le.type==="file")var At=yp;else if(vp(le))if(Sp)At=Sx;else{At=xx;var Ye=vx}else ue=le.nodeName,!ue||ue.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ne&&Ut(ne.elementType)&&(At=yp):At=yx;if(At&&(At=At(t,ne))){xp(ye,At,a,ge);break e}Ye&&Ye(t,le,ne),t==="focusout"&&ne&&le.type==="number"&&ne.memoizedProps.value!=null&&ht(le,"number",le.value)}switch(Ye=ne?hs(ne):window,t){case"focusin":(vp(Ye)||Ye.contentEditable==="true")&&(js=Ye,fu=ne,io=null);break;case"focusout":io=fu=js=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,wp(ye,a,ge);break;case"selectionchange":if(Ex)break;case"keydown":case"keyup":wp(ye,a,ge)}var lt;if(ou)e:{switch(t){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else Ys?gp(t,a)&&(_t="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(hp&&a.locale!=="ko"&&(Ys||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&Ys&&(lt=lp()):(Ua=ge,nu="value"in Ua?Ua.value:Ua.textContent,Ys=!0)),Ye=Ql(ne,_t),0<Ye.length&&(_t=new fp(_t,t,null,a,ge),ye.push({event:_t,listeners:Ye}),lt?_t.data=lt:(lt=_p(a),lt!==null&&(_t.data=lt)))),(lt=hx?px(t,a):mx(t,a))&&(_t=Ql(ne,"onBeforeInput"),0<_t.length&&(Ye=new fp("onBeforeInput","beforeinput",null,a,ge),ye.push({event:Ye,listeners:_t}),Ye.data=lt)),ry(ye,t,ne,a,ge)}t0(ye,n)})}function wo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ql(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Zr(t,a),u!=null&&o.unshift(wo(t,u,f)),u=Zr(t,n),u!=null&&o.push(wo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function uy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function i0(t,n,a,o,u){for(var f=n._reactName,_=[];a!==null&&a!==o;){var C=a,G=C.alternate,ne=C.stateNode;if(C=C.tag,G!==null&&G===o)break;C!==5&&C!==26&&C!==27||ne===null||(G=ne,u?(ne=Zr(a,f),ne!=null&&_.unshift(wo(a,ne,G))):u||(ne=Zr(a,f),ne!=null&&_.push(wo(a,ne,G)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var fy=/\r\n?/g,dy=/\u0000|\uFFFD/g;function a0(t){return(typeof t=="string"?t:""+t).replace(fy,`
`).replace(dy,"")}function s0(t,n){return n=a0(n),a0(t)===n}function Ht(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ei(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ei(t,""+o);break;case"className":Xe(t,"class",o);break;case"tabIndex":Xe(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(t,a,o);break;case"style":Ti(t,o,f);break;case"data":if(n!=="object"){Xe(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ps(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ht(t,n,"name",u.name,u,null),Ht(t,n,"formEncType",u.formEncType,u,null),Ht(t,n,"formMethod",u.formMethod,u,null),Ht(t,n,"formTarget",u.formTarget,u,null)):(Ht(t,n,"encType",u.encType,u,null),Ht(t,n,"method",u.method,u,null),Ht(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ps(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=$i);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=ps(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":mt("beforetoggle",t),mt("toggle",t),Ne(t,"popover",o);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ne(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=zi.get(a)||a,Ne(t,a,o))}}function Ff(t,n,a,o,u,f){switch(a){case"style":Ti(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ei(t,o):(typeof o=="number"||typeof o=="bigint")&&ei(t,""+o);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=$i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[An]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ne(t,a,o)}}}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(t,n,f,_,a,null)}}u&&Ht(t,n,"srcSet",a.srcSet,a,null),o&&Ht(t,n,"src",a.src,a,null);return;case"input":mt("invalid",t);var C=f=_=u=null,G=null,ne=null;for(o in a)if(a.hasOwnProperty(o)){var ge=a[o];if(ge!=null)switch(o){case"name":u=ge;break;case"type":_=ge;break;case"checked":G=ge;break;case"defaultChecked":ne=ge;break;case"value":f=ge;break;case"defaultValue":C=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(s(137,n));break;default:Ht(t,n,o,ge,a,null)}}Ln(t,f,C,G,ne,_,u,!1);return;case"select":mt("invalid",t),o=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":f=C;break;case"defaultValue":_=C;break;case"multiple":o=C;default:Ht(t,n,u,C,a,null)}n=f,a=_,t.multiple=!!o,n!=null?xn(t,!!o,n,!1):a!=null&&xn(t,!!o,a,!0);return;case"textarea":mt("invalid",t),f=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(C=a[_],C!=null))switch(_){case"value":o=C;break;case"defaultValue":u=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:Ht(t,n,_,C,a,null)}bi(t,o,u,f);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Ht(t,n,G,o,a,null));return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(o=0;o<Co.length;o++)mt(Co[o],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(o=a[ne],o!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(t,n,ne,o,a,null)}return;default:if(Ut(n)){for(ge in a)a.hasOwnProperty(ge)&&(o=a[ge],o!==void 0&&Ff(t,n,ge,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&Ht(t,n,C,o,a,null))}function hy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,C=null,G=null,ne=null,ge=null;for(ue in a){var ye=a[ue];if(a.hasOwnProperty(ue)&&ye!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":G=ye;default:o.hasOwnProperty(ue)||Ht(t,n,ue,null,o,ye)}}for(var le in o){var ue=o[le];if(ye=a[le],o.hasOwnProperty(le)&&(ue!=null||ye!=null))switch(le){case"type":f=ue;break;case"name":u=ue;break;case"checked":ne=ue;break;case"defaultChecked":ge=ue;break;case"value":_=ue;break;case"defaultValue":C=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:ue!==ye&&Ht(t,n,le,ue,o,ye)}}Be(t,_,C,G,ne,ge,f,u);return;case"select":ue=_=C=le=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ue=G;default:o.hasOwnProperty(f)||Ht(t,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":le=f;break;case"defaultValue":C=f;break;case"multiple":_=f;default:f!==G&&Ht(t,n,u,f,o,G)}n=C,a=_,o=ue,le!=null?xn(t,!!a,le,!1):!!o!=!!a&&(n!=null?xn(t,!!a,n,!0):xn(t,!!a,a?[]:"",!1));return;case"textarea":ue=le=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Ht(t,n,C,null,o,u)}for(_ in o)if(u=o[_],f=a[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":le=u;break;case"defaultValue":ue=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ht(t,n,_,u,o,f)}$n(t,le,ue);return;case"option":for(var We in a)le=a[We],a.hasOwnProperty(We)&&le!=null&&!o.hasOwnProperty(We)&&(We==="selected"?t.selected=!1:Ht(t,n,We,null,o,le));for(G in o)le=o[G],ue=a[G],o.hasOwnProperty(G)&&le!==ue&&(le!=null||ue!=null)&&(G==="selected"?t.selected=le&&typeof le!="function"&&typeof le!="symbol":Ht(t,n,G,le,o,ue));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)le=a[et],a.hasOwnProperty(et)&&le!=null&&!o.hasOwnProperty(et)&&Ht(t,n,et,null,o,le);for(ne in o)if(le=o[ne],ue=a[ne],o.hasOwnProperty(ne)&&le!==ue&&(le!=null||ue!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:Ht(t,n,ne,le,o,ue)}return;default:if(Ut(n)){for(var Vt in a)le=a[Vt],a.hasOwnProperty(Vt)&&le!==void 0&&!o.hasOwnProperty(Vt)&&Ff(t,n,Vt,void 0,o,le);for(ge in o)le=o[ge],ue=a[ge],!o.hasOwnProperty(ge)||le===ue||le===void 0&&ue===void 0||Ff(t,n,ge,le,o,ue);return}}for(var K in a)le=a[K],a.hasOwnProperty(K)&&le!=null&&!o.hasOwnProperty(K)&&Ht(t,n,K,null,o,le);for(ye in o)le=o[ye],ue=a[ye],!o.hasOwnProperty(ye)||le===ue||le==null&&ue==null||Ht(t,n,ye,le,o,ue)}function r0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function py(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,_=u.initiatorType,C=u.duration;if(f&&C&&r0(_)){for(_=0,C=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],ne=G.startTime;if(ne>C)break;var ge=G.transferSize,ye=G.initiatorType;ge&&r0(ye)&&(G=G.responseEnd,_+=ge*(G<C?1:(C-ne)/(G-ne)))}if(--o,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Bf=null,Gf=null;function Jl(t){return t.nodeType===9?t:t.ownerDocument}function o0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function l0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Hf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vf=null;function my(){var t=window.event;return t&&t.type==="popstate"?t===Vf?!1:(Vf=t,!0):(Vf=null,!1)}var c0=typeof setTimeout=="function"?setTimeout:void 0,gy=typeof clearTimeout=="function"?clearTimeout:void 0,u0=typeof Promise=="function"?Promise:void 0,_y=typeof queueMicrotask=="function"?queueMicrotask:typeof u0<"u"?function(t){return u0.resolve(null).then(t).catch(vy)}:c0;function vy(t){setTimeout(function(){throw t})}function ja(t){return t==="head"}function f0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Sr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Do(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Do(a);for(var f=a.firstChild;f;){var _=f.nextSibling,C=f.nodeName;f[Ra]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Do(t.ownerDocument.body);a=u}while(a);Sr(n)}function d0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function kf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":kf(a),Ca(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function xy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ra])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=yi(t.nextSibling),t===null)break}return null}function yy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=yi(t.nextSibling),t===null))return null;return t}function h0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=yi(t.nextSibling),t===null))return null;return t}function Xf(t){return t.data==="$?"||t.data==="$~"}function Wf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Sy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function yi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var qf=null;function p0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return yi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function m0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function g0(t,n,a){switch(n=Jl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Do(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ca(t)}var Si=new Map,_0=new Set;function $l(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ma=H.d;H.d={f:My,r:Ey,D:by,C:Ty,L:Ay,m:Ry,X:wy,S:Cy,M:Dy};function My(){var t=ma.f(),n=Xl();return t||n}function Ey(t){var n=Ji(t);n!==null&&n.tag===5&&n.type==="form"?Om(n):ma.r(t)}var vr=typeof document>"u"?null:document;function v0(t,n,a){var o=vr;if(o&&typeof n=="string"&&n){var u=Ot(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),_0.has(u)||(_0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",t),hn(n),o.head.appendChild(n)))}}function by(t){ma.D(t),v0("dns-prefetch",t,null)}function Ty(t,n){ma.C(t,n),v0("preconnect",t,n)}function Ay(t,n,a){ma.L(t,n,a);var o=vr;if(o&&t&&n){var u='link[rel="preload"][as="'+Ot(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ot(a.imageSizes)+'"]')):u+='[href="'+Ot(t)+'"]';var f=u;switch(n){case"style":f=xr(t);break;case"script":f=yr(t)}Si.has(f)||(t=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Si.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Uo(f))||n==="script"&&o.querySelector(No(f))||(n=o.createElement("link"),Dn(n,"link",t),hn(n),o.head.appendChild(n)))}}function Ry(t,n){ma.m(t,n);var a=vr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ot(o)+'"][href="'+Ot(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=yr(t)}if(!Si.has(f)&&(t=y({rel:"modulepreload",href:t},n),Si.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(No(f)))return}o=a.createElement("link"),Dn(o,"link",t),hn(o),a.head.appendChild(o)}}}function Cy(t,n,a){ma.S(t,n,a);var o=vr;if(o&&t){var u=wa(o).hoistableStyles,f=xr(t);n=n||"default";var _=u.get(f);if(!_){var C={loading:0,preload:null};if(_=o.querySelector(Uo(f)))C.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Si.get(f))&&Yf(t,a);var G=_=o.createElement("link");hn(G),Dn(G,"link",t),G._p=new Promise(function(ne,ge){G.onload=ne,G.onerror=ge}),G.addEventListener("load",function(){C.loading|=1}),G.addEventListener("error",function(){C.loading|=2}),C.loading|=4,ec(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:C},u.set(f,_)}}}function wy(t,n){ma.X(t,n);var a=vr;if(a&&t){var o=wa(a).hoistableScripts,u=yr(t),f=o.get(u);f||(f=a.querySelector(No(u)),f||(t=y({src:t,async:!0},n),(n=Si.get(u))&&jf(t,n),f=a.createElement("script"),hn(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Dy(t,n){ma.M(t,n);var a=vr;if(a&&t){var o=wa(a).hoistableScripts,u=yr(t),f=o.get(u);f||(f=a.querySelector(No(u)),f||(t=y({src:t,async:!0,type:"module"},n),(n=Si.get(u))&&jf(t,n),f=a.createElement("script"),hn(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function x0(t,n,a,o){var u=(u=se.current)?$l(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=xr(a.href),a=wa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=xr(a.href);var f=wa(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(Uo(t)))&&!f._p&&(_.instance=f,_.state.loading=5),Si.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Si.set(t,a),f||Uy(u,t,a,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=yr(a),a=wa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function xr(t){return'href="'+Ot(t)+'"'}function Uo(t){return'link[rel="stylesheet"]['+t+"]"}function y0(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function Uy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),hn(n),t.head.appendChild(n))}function yr(t){return'[src="'+Ot(t)+'"]'}function No(t){return"script[async]"+t}function S0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Ot(a.href)+'"]');if(o)return n.instance=o,hn(o),o;var u=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),hn(o),Dn(o,"style",u),ec(o,a.precedence,t),n.instance=o;case"stylesheet":u=xr(a.href);var f=t.querySelector(Uo(u));if(f)return n.state.loading|=4,n.instance=f,hn(f),f;o=y0(a),(u=Si.get(u))&&Yf(o,u),f=(t.ownerDocument||t).createElement("link"),hn(f);var _=f;return _._p=new Promise(function(C,G){_.onload=C,_.onerror=G}),Dn(f,"link",o),n.state.loading|=4,ec(f,a.precedence,t),n.instance=f;case"script":return f=yr(a.src),(u=t.querySelector(No(f)))?(n.instance=u,hn(u),u):(o=a,(u=Si.get(f))&&(o=y({},a),jf(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),hn(u),Dn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ec(o,a.precedence,t));return n.instance}function ec(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var C=o[_];if(C.dataset.precedence===n)f=C;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Yf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function jf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var tc=null;function M0(t,n,a){if(tc===null){var o=new Map,u=tc=new Map;u.set(a,o)}else u=tc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ra]||f[dn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var C=o.get(_);C?C.push(f):o.set(_,[f])}}return o}function E0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Ny(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function b0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ly(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=xr(o.href),f=n.querySelector(Uo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=nc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,hn(f);return}f=n.ownerDocument||n,o=y0(o),(u=Si.get(u))&&Yf(o,u),f=f.createElement("link"),hn(f);var _=f;_._p=new Promise(function(C,G){_.onload=C,_.onerror=G}),Dn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=nc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Zf=0;function Oy(t,n){return t.stylesheets&&t.count===0&&ac(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&ac(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Zf===0&&(Zf=62500*py());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ac(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Zf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function nc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ac(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ic=null;function ac(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ic=new Map,n.forEach(Py,t),ic=null,nc.call(t))}function Py(t,n){if(!(n.state.loading&4)){var a=ic.get(t);if(a)var o=a.get(null);else{a=new Map,ic.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,u),a.set(_,u),this.count++,o=nc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Lo={$$typeof:I,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function zy(t,n,a,o,u,f,_,C,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.hiddenUpdates=qe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function T0(t,n,a,o,u,f,_,C,G,ne,ge,ye){return t=new zy(t,n,a,_,G,ne,ge,ye,C),n=1,f===!0&&(n|=24),f=ni(3,null,null,n),t.current=f,f.stateNode=t,n=Ru(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Uu(f),t}function A0(t){return t?(t=Qs,t):Qs}function R0(t,n,a,o,u,f){u=A0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ia(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Fa(t,o,n),a!==null&&(Yn(a,t,n),uo(a,t,n))}function C0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Kf(t,n){C0(t,n),(t=t.alternate)&&C0(t,n)}function w0(t){if(t.tag===13||t.tag===31){var n=vs(t,67108864);n!==null&&Yn(n,t,67108864),Kf(t,67108864)}}function D0(t){if(t.tag===13||t.tag===31){var n=oi();n=qr(n);var a=vs(t,n);a!==null&&Yn(a,t,n),Kf(t,n)}}var sc=!0;function Iy(t,n,a,o){var u=B.T;B.T=null;var f=H.p;try{H.p=2,Qf(t,n,a,o)}finally{H.p=f,B.T=u}}function Fy(t,n,a,o){var u=B.T;B.T=null;var f=H.p;try{H.p=8,Qf(t,n,a,o)}finally{H.p=f,B.T=u}}function Qf(t,n,a,o){if(sc){var u=Jf(o);if(u===null)If(t,n,o,rc,a),N0(t,o);else if(Gy(u,t,n,a,o))o.stopPropagation();else if(N0(t,o),n&4&&-1<By.indexOf(t)){for(;u!==null;){var f=Ji(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Ae(f.pendingLanes);if(_!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;_;){var G=1<<31-Fe(_);C.entanglements[1]|=G,_&=~G}Gi(f),(wt&6)===0&&(Vl=Bt()+500,Ro(0))}}break;case 31:case 13:C=vs(f,2),C!==null&&Yn(C,f,2),Xl(),Kf(f,2)}if(f=Jf(o),f===null&&If(t,n,o,rc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else If(t,n,o,null,a)}}function Jf(t){return t=$c(t),$f(t)}var rc=null;function $f(t){if(rc=null,t=Qi(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return rc=t,null}function U0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ct()){case P:return 2;case E:return 8;case J:case re:return 32;case de:return 268435456;default:return 32}default:return 32}}var ed=!1,Za=null,Ka=null,Qa=null,Oo=new Map,Po=new Map,Ja=[],By="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function N0(t,n){switch(t){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":Oo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(n.pointerId)}}function zo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ji(n),n!==null&&w0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Gy(t,n,a,o,u){switch(n){case"focusin":return Za=zo(Za,t,n,a,o,u),!0;case"dragenter":return Ka=zo(Ka,t,n,a,o,u),!0;case"mouseover":return Qa=zo(Qa,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Oo.set(f,zo(Oo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Po.set(f,zo(Po.get(f)||null,t,n,a,o,u)),!0}return!1}function L0(t){var n=Qi(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Xs(t.priority,function(){D0(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Xs(t.priority,function(){D0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Jf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Jc=o,a.target.dispatchEvent(o),Jc=null}else return n=Ji(a),n!==null&&w0(n),t.blockedOn=a,!1;n.shift()}return!0}function O0(t,n,a){oc(t)&&a.delete(n)}function Hy(){ed=!1,Za!==null&&oc(Za)&&(Za=null),Ka!==null&&oc(Ka)&&(Ka=null),Qa!==null&&oc(Qa)&&(Qa=null),Oo.forEach(O0),Po.forEach(O0)}function lc(t,n){t.blockedOn===n&&(t.blockedOn=null,ed||(ed=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Hy)))}var cc=null;function P0(t){cc!==t&&(cc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){cc===t&&(cc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if($f(o||a)===null)continue;break}var f=Ji(a);f!==null&&(t.splice(n,3),n-=3,Qu(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Sr(t){function n(G){return lc(G,t)}Za!==null&&lc(Za,t),Ka!==null&&lc(Ka,t),Qa!==null&&lc(Qa,t),Oo.forEach(n),Po.forEach(n);for(var a=0;a<Ja.length;a++){var o=Ja[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ja.length&&(a=Ja[0],a.blockedOn===null);)L0(a),a.blockedOn===null&&Ja.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],_=u[An]||null;if(typeof f=="function")_||P0(a);else if(_){var C=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[An]||null)C=_.formAction;else if($f(u)!==null)continue}else C=_.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),P0(a)}}}function z0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function td(t){this._internalRoot=t}uc.prototype.render=td.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=oi();R0(a,o,t,n,null,null)},uc.prototype.unmount=td.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;R0(t.current,2,null,t,null,null),Xl(),n[Hn]=null}};function uc(t){this._internalRoot=t}uc.prototype.unstable_scheduleHydration=function(t){if(t){var n=jr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ja.length&&n!==0&&n<Ja[a].priority;a++);Ja.splice(a,0,t),a===0&&L0(t)}};var I0=e.version;if(I0!=="19.2.5")throw Error(s(527,I0,"19.2.5"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var Vy={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{fe=fc.inject(Vy),he=fc}catch{}}return Fo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=Xm,f=Wm,_=qm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=T0(t,1,!1,null,null,a,o,null,u,f,_,z0),t[Hn]=n.current,zf(t),new td(n)},Fo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=Xm,_=Wm,C=qm,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=T0(t,1,!0,n,a??null,o,u,G,f,_,C,z0),n.context=A0(null),a=n.current,o=oi(),o=qr(o),u=Ia(o),u.callback=null,Fa(a,u,o),a=o,n.current.lanes=a,Ve(n,a),Gi(n),t[Hn]=n.current,zf(t),new uc(n)},Fo.version="19.2.5",Fo}var Y0;function eS(){if(Y0)return ad.exports;Y0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ad.exports=$y(),ad.exports}var tS=eS();const nS=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Q_=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();var iS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const aS=qt.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...p},m)=>qt.createElement("svg",{ref:m,...iS,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:Q_("lucide",l),...p},[...d.map(([h,x])=>qt.createElement(h,x)),...Array.isArray(c)?c:[c]]));const Dt=(r,e)=>{const i=qt.forwardRef(({className:s,...l},c)=>qt.createElement(aS,{ref:c,iconNode:e,className:Q_(`lucide-${nS(r)}`,s),...l}));return i.displayName=`${r}`,i};const sS=Dt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);const rS=Dt("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);const oS=Dt("BriefcaseBusiness",[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);const j0=Dt("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);const lS=Dt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);const cS=Dt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);const uS=Dt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const fS=Dt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);const dS=Dt("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);const hS=Dt("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);const pS=Dt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);const J_=Dt("Earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);const mS=Dt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);const Z0=Dt("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);const gS=Dt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);const _S=Dt("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);const vS=Dt("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);const xS=Dt("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);const yS=Dt("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);const K0=Dt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);const SS=Dt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);const MS=Dt("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);const $_=Dt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);const ES=Dt("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);const bS=Dt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const TS=Dt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const Fs=Dt("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",key:"6c3vgh"}]]);const AS=Dt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);const RS=Dt("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);const zh=Dt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);const CS=Dt("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function ev(){return(typeof window<"u"&&typeof window.PORTFOLIO_STATS_ENDPOINT=="string"?window.PORTFOLIO_STATS_ENDPOINT:"")||void 0||""}function tv(r){const e=typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`${Date.now()}-${Math.random().toString(16).slice(2)}`;return`${r}_${e}`}function nv(r,e){try{return r.getItem(e)}catch{return null}}function iv(r,e,i){try{r.setItem(e,i)}catch{}}function wS(){const r="portfolioVisitorId",e=nv(window.localStorage,r);if(e)return e;const i=tv("visitor");return iv(window.localStorage,r,i),i}function DS(){const r="portfolioSessionId",e=nv(window.sessionStorage,r);if(e)return e;const i=tv("session");return iv(window.sessionStorage,r,i),i}function US(){const r=window.innerWidth,e=navigator.userAgent.toLowerCase();return/tablet|ipad/.test(e)?"tablet":/mobi|android|iphone|ipod/.test(e)||r<720?"mobile":"desktop"}function NS(){const r=navigator.userAgent;return r.includes("Edg/")?"Edge":r.includes("OPR/")?"Opera":r.includes("Chrome/")?"Chrome":r.includes("Firefox/")?"Firefox":r.includes("Safari/")?"Safari":"Unknown"}function LS(){const r=navigator.userAgent;return/Windows/i.test(r)?"Windows":/Android/i.test(r)?"Android":/iPhone|iPad|iPod/i.test(r)?"iOS":/Mac OS/i.test(r)?"macOS":/Linux/i.test(r)?"Linux":"Unknown"}function av(){return{visitorId:wS(),sessionId:DS(),path:`${window.location.pathname}${window.location.search}${window.location.hash}`,referrer:document.referrer||"",language:navigator.language||"",timezone:Intl.DateTimeFormat().resolvedOptions().timeZone||"",userAgent:navigator.userAgent||"",deviceType:US(),browser:NS(),os:LS(),screenWidth:window.screen?.width||null,screenHeight:window.screen?.height||null,viewportWidth:window.innerWidth,viewportHeight:window.innerHeight,occurredAt:new Date().toISOString()}}async function Ih(r,e={}){const i=ev();if(!i)return{ok:!1,skipped:!0};const s=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:r,...e})}),l=await s.json().catch(()=>({}));if(!s.ok)throw new Error(l.error||"Stats request failed");return l}function OS(){return!!ev()}function PS(){return Ih("track",{event:{...av(),type:"visit"}}).catch(()=>null)}function ld(r,e={}){return Ih("track",{event:{...av(),type:r,...e}}).catch(()=>null)}function zS(r){return Ih("admin",{password:r})}const Fh="185",IS=0,Q0=1,FS=2,Pc=1,sv=2,qo=3,cs=0,Kn=1,Sa=2,Ea=0,zr=1,J0=2,$0=3,e_=4,BS=5,zs=100,GS=101,HS=102,VS=103,kS=104,XS=200,WS=201,qS=202,YS=203,Xd=204,Wd=205,jS=206,ZS=207,KS=208,QS=209,JS=210,$S=211,eM=212,tM=213,nM=214,qd=0,Yd=1,jd=2,Br=3,Zd=4,Kd=5,Qd=6,Jd=7,rv=0,iM=1,aM=2,qi=0,ov=1,lv=2,cv=3,uv=4,fv=5,dv=6,hv=7,pv=300,Hs=301,Gr=302,cd=303,ud=304,jc=306,$d=1e3,Ma=1001,eh=1002,Un=1003,sM=1004,dc=1005,In=1006,fd=1007,Bs=1008,hi=1009,mv=1010,gv=1011,Zo=1012,Bh=1013,Zi=1014,Xi=1015,Ta=1016,Gh=1017,Hh=1018,Ko=1020,_v=35902,vv=35899,xv=1021,yv=1022,Oi=1023,Aa=1026,Gs=1027,Sv=1028,Vh=1029,Vs=1030,kh=1031,Xh=1033,zc=33776,Ic=33777,Fc=33778,Bc=33779,th=35840,nh=35841,ih=35842,ah=35843,sh=36196,rh=37492,oh=37496,lh=37488,ch=37489,Hc=37490,uh=37491,fh=37808,dh=37809,hh=37810,ph=37811,mh=37812,gh=37813,_h=37814,vh=37815,xh=37816,yh=37817,Sh=37818,Mh=37819,Eh=37820,bh=37821,Th=36492,Ah=36494,Rh=36495,Ch=36283,wh=36284,Vc=36285,Dh=36286,rM=3200,Uh=0,oM=1,rs="",fi="srgb",kc="srgb-linear",Xc="linear",Ft="srgb",Mr=7680,t_=519,lM=512,cM=513,uM=514,Wh=515,fM=516,dM=517,qh=518,hM=519,n_=35044,i_="300 es",Wi=2e3,Qo=2001;function pM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Wc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function mM(){const r=Wc("canvas");return r.style.display="block",r}const a_={};function s_(...r){const e="THREE."+r.shift();console.log(e,...r)}function Mv(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function nt(...r){r=Mv(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function bt(...r){r=Mv(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function Ir(...r){const e=r.join(" ");e in a_||(a_[e]=!0,nt(...r))}function gM(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const _M={[qd]:Yd,[jd]:Qd,[Zd]:Jd,[Br]:Kd,[Yd]:qd,[Qd]:jd,[Jd]:Zd,[Kd]:Br};class ks{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dd=Math.PI/180,Nh=180/Math.PI;function Jo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function Mt(r,e,i){return Math.max(e,Math.min(i,r))}function vM(r,e){return(r%e+e)%e}function hd(r,e,i){return(1-i)*r+i*e}function Bo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function jn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const tp=class tp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};tp.prototype.isVector2=!0;let ft=tp;class kr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,p){let m=s[l+0],h=s[l+1],x=s[l+2],y=s[l+3],g=c[d+0],S=c[d+1],A=c[d+2],L=c[d+3];if(y!==L||m!==g||h!==S||x!==A){let M=m*g+h*S+x*A+y*L;M<0&&(g=-g,S=-S,A=-A,L=-L,M=-M);let v=1-p;if(M<.9995){const O=Math.acos(M),I=Math.sin(O);v=Math.sin(v*O)/I,p=Math.sin(p*O)/I,m=m*v+g*p,h=h*v+S*p,x=x*v+A*p,y=y*v+L*p}else{m=m*v+g*p,h=h*v+S*p,x=x*v+A*p,y=y*v+L*p;const O=1/Math.sqrt(m*m+h*h+x*x+y*y);m*=O,h*=O,x*=O,y*=O}}e[i]=m,e[i+1]=h,e[i+2]=x,e[i+3]=y}static multiplyQuaternionsFlat(e,i,s,l,c,d){const p=s[l],m=s[l+1],h=s[l+2],x=s[l+3],y=c[d],g=c[d+1],S=c[d+2],A=c[d+3];return e[i]=p*A+x*y+m*S-h*g,e[i+1]=m*A+x*g+h*y-p*S,e[i+2]=h*A+x*S+p*g-m*y,e[i+3]=x*A-p*y-m*g-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(s/2),x=p(l/2),y=p(c/2),g=m(s/2),S=m(l/2),A=m(c/2);switch(d){case"XYZ":this._x=g*x*y+h*S*A,this._y=h*S*y-g*x*A,this._z=h*x*A+g*S*y,this._w=h*x*y-g*S*A;break;case"YXZ":this._x=g*x*y+h*S*A,this._y=h*S*y-g*x*A,this._z=h*x*A-g*S*y,this._w=h*x*y+g*S*A;break;case"ZXY":this._x=g*x*y-h*S*A,this._y=h*S*y+g*x*A,this._z=h*x*A+g*S*y,this._w=h*x*y-g*S*A;break;case"ZYX":this._x=g*x*y-h*S*A,this._y=h*S*y+g*x*A,this._z=h*x*A-g*S*y,this._w=h*x*y+g*S*A;break;case"YZX":this._x=g*x*y+h*S*A,this._y=h*S*y+g*x*A,this._z=h*x*A-g*S*y,this._w=h*x*y-g*S*A;break;case"XZY":this._x=g*x*y-h*S*A,this._y=h*S*y-g*x*A,this._z=h*x*A+g*S*y,this._w=h*x*y+g*S*A;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],x=i[6],y=i[10],g=s+p+y;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(x-m)*S,this._y=(c-h)*S,this._z=(d-l)*S}else if(s>p&&s>y){const S=2*Math.sqrt(1+s-p-y);this._w=(x-m)/S,this._x=.25*S,this._y=(l+d)/S,this._z=(c+h)/S}else if(p>y){const S=2*Math.sqrt(1+p-s-y);this._w=(c-h)/S,this._x=(l+d)/S,this._y=.25*S,this._z=(m+x)/S}else{const S=2*Math.sqrt(1+y-s-p);this._w=(d-l)/S,this._x=(c+h)/S,this._y=(m+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,p=i._x,m=i._y,h=i._z,x=i._w;return this._x=s*x+d*p+l*h-c*m,this._y=l*x+d*m+c*p-s*h,this._z=c*x+d*h+s*m-l*p,this._w=d*x-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),x=Math.sin(h);m=Math.sin(m*h)/x,i=Math.sin(i*h)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const np=class np{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(r_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(r_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*s),x=2*(p*i-c*l),y=2*(c*s-d*i);return this.x=i+m*h+d*y-p*x,this.y=s+m*x+p*h-c*y,this.z=l+m*y+c*x-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-s*m,this.z=s*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return pd.copy(this).projectOnVector(e),this.sub(pd)}reflect(e){return this.sub(pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};np.prototype.isVector3=!0;let $=np;const pd=new $,r_=new kr,ip=class ip{constructor(e,i,s,l,c,d,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,p,m,h)}set(e,i,s,l,c,d,p,m,h){const x=this.elements;return x[0]=e,x[1]=l,x[2]=p,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=d,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],x=s[4],y=s[7],g=s[2],S=s[5],A=s[8],L=l[0],M=l[3],v=l[6],O=l[1],I=l[4],T=l[7],N=l[2],U=l[5],z=l[8];return c[0]=d*L+p*O+m*N,c[3]=d*M+p*I+m*U,c[6]=d*v+p*T+m*z,c[1]=h*L+x*O+y*N,c[4]=h*M+x*I+y*U,c[7]=h*v+x*T+y*z,c[2]=g*L+S*O+A*N,c[5]=g*M+S*I+A*U,c[8]=g*v+S*T+A*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],x=e[8];return i*d*x-i*p*h-s*c*x+s*p*m+l*c*h-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],x=e[8],y=x*d-p*h,g=p*m-x*c,S=h*c-d*m,A=i*y+s*g+l*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=y*L,e[1]=(l*h-x*s)*L,e[2]=(p*s-l*d)*L,e[3]=g*L,e[4]=(x*i-l*m)*L,e[5]=(l*c-p*i)*L,e[6]=S*L,e[7]=(s*m-h*i)*L,e[8]=(d*i-s*c)*L,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return Ir("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(md.makeScale(e,i)),this}rotate(e){return Ir("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(md.makeRotation(-e)),this}translate(e,i){return Ir("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(md.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ip.prototype.isMatrix3=!0;let st=ip;const md=new st,o_=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),l_=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xM(){const r={enabled:!0,workingColorSpace:kc,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Ft&&(l.r=ba(l.r),l.g=ba(l.g),l.b=ba(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ft&&(l.r=Fr(l.r),l.g=Fr(l.g),l.b=Fr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===rs?Xc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ir("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ir("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[kc]:{primaries:e,whitePoint:s,transfer:Xc,toXYZ:o_,fromXYZ:l_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:s,transfer:Ft,toXYZ:o_,fromXYZ:l_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),r}const St=xM();function ba(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Er;class yM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Er===void 0&&(Er=Wc("canvas")),Er.width=e.width,Er.height=e.height;const l=Er.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Er}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Wc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=ba(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ba(i[s]/255)*255):i[s]=ba(i[s]);return{data:i,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let SM=0;class Yh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=Jo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(gd(l[d].image)):c.push(gd(l[d]))}else c=gd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function gd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?yM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let MM=0;const _d=new $;class Gn extends ks{constructor(e=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=Ma,l=Ma,c=In,d=Bs,p=Oi,m=hi,h=Gn.DEFAULT_ANISOTROPY,x=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=Jo(),this.name="",this.source=new Yh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_d).x}get height(){return this.source.getSize(_d).y}get depth(){return this.source.getSize(_d).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){nt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $d:e.x=e.x-Math.floor(e.x);break;case Ma:e.x=e.x<0?0:1;break;case eh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $d:e.y=e.y-Math.floor(e.y);break;case Ma:e.y=e.y<0?0:1;break;case eh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=pv;Gn.DEFAULT_ANISOTROPY=1;const ap=class ap{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,h=m[0],x=m[4],y=m[8],g=m[1],S=m[5],A=m[9],L=m[2],M=m[6],v=m[10];if(Math.abs(x-g)<.01&&Math.abs(y-L)<.01&&Math.abs(A-M)<.01){if(Math.abs(x+g)<.1&&Math.abs(y+L)<.1&&Math.abs(A+M)<.1&&Math.abs(h+S+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(h+1)/2,T=(S+1)/2,N=(v+1)/2,U=(x+g)/4,z=(y+L)/4,b=(A+M)/4;return I>T&&I>N?I<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(I),l=U/s,c=z/s):T>N?T<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(T),s=U/l,c=b/l):N<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(N),s=z/c,l=b/c),this.set(s,l,c,i),this}let O=Math.sqrt((M-A)*(M-A)+(y-L)*(y-L)+(g-x)*(g-x));return Math.abs(O)<.001&&(O=1),this.x=(M-A)/O,this.y=(y-L)/O,this.z=(g-x)/O,this.w=Math.acos((h+S+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this.w=Mt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this.w=Mt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ap.prototype.isVector4=!0;let en=ap;class EM extends ks{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new en(0,0,e,i),this.scissorTest=!1,this.viewport=new en(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Gn(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Yh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends EM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Ev extends Gn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bM extends Gn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yc=class Yc{constructor(e,i,s,l,c,d,p,m,h,x,y,g,S,A,L,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,p,m,h,x,y,g,S,A,L,M)}set(e,i,s,l,c,d,p,m,h,x,y,g,S,A,L,M){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=d,v[9]=p,v[13]=m,v[2]=h,v[6]=x,v[10]=y,v[14]=g,v[3]=S,v[7]=A,v[11]=L,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yc().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/br.setFromMatrixColumn(e,0).length(),c=1/br.setFromMatrixColumn(e,1).length(),d=1/br.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),x=Math.cos(c),y=Math.sin(c);if(e.order==="XYZ"){const g=d*x,S=d*y,A=p*x,L=p*y;i[0]=m*x,i[4]=-m*y,i[8]=h,i[1]=S+A*h,i[5]=g-L*h,i[9]=-p*m,i[2]=L-g*h,i[6]=A+S*h,i[10]=d*m}else if(e.order==="YXZ"){const g=m*x,S=m*y,A=h*x,L=h*y;i[0]=g+L*p,i[4]=A*p-S,i[8]=d*h,i[1]=d*y,i[5]=d*x,i[9]=-p,i[2]=S*p-A,i[6]=L+g*p,i[10]=d*m}else if(e.order==="ZXY"){const g=m*x,S=m*y,A=h*x,L=h*y;i[0]=g-L*p,i[4]=-d*y,i[8]=A+S*p,i[1]=S+A*p,i[5]=d*x,i[9]=L-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const g=d*x,S=d*y,A=p*x,L=p*y;i[0]=m*x,i[4]=A*h-S,i[8]=g*h+L,i[1]=m*y,i[5]=L*h+g,i[9]=S*h-A,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const g=d*m,S=d*h,A=p*m,L=p*h;i[0]=m*x,i[4]=L-g*y,i[8]=A*y+S,i[1]=y,i[5]=d*x,i[9]=-p*x,i[2]=-h*x,i[6]=S*y+A,i[10]=g-L*y}else if(e.order==="XZY"){const g=d*m,S=d*h,A=p*m,L=p*h;i[0]=m*x,i[4]=-y,i[8]=h*x,i[1]=g*y+L,i[5]=d*x,i[9]=S*y-A,i[2]=A*y-S,i[6]=p*x,i[10]=L*y+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TM,e,AM)}lookAt(e,i,s){const l=this.elements;return li.subVectors(e,i),li.lengthSq()===0&&(li.z=1),li.normalize(),es.crossVectors(s,li),es.lengthSq()===0&&(Math.abs(s.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),es.crossVectors(s,li)),es.normalize(),hc.crossVectors(li,es),l[0]=es.x,l[4]=hc.x,l[8]=li.x,l[1]=es.y,l[5]=hc.y,l[9]=li.y,l[2]=es.z,l[6]=hc.z,l[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],x=s[1],y=s[5],g=s[9],S=s[13],A=s[2],L=s[6],M=s[10],v=s[14],O=s[3],I=s[7],T=s[11],N=s[15],U=l[0],z=l[4],b=l[8],D=l[12],V=l[1],k=l[5],q=l[9],ce=l[13],pe=l[2],Q=l[6],B=l[10],H=l[14],ee=l[3],_e=l[7],be=l[11],w=l[15];return c[0]=d*U+p*V+m*pe+h*ee,c[4]=d*z+p*k+m*Q+h*_e,c[8]=d*b+p*q+m*B+h*be,c[12]=d*D+p*ce+m*H+h*w,c[1]=x*U+y*V+g*pe+S*ee,c[5]=x*z+y*k+g*Q+S*_e,c[9]=x*b+y*q+g*B+S*be,c[13]=x*D+y*ce+g*H+S*w,c[2]=A*U+L*V+M*pe+v*ee,c[6]=A*z+L*k+M*Q+v*_e,c[10]=A*b+L*q+M*B+v*be,c[14]=A*D+L*ce+M*H+v*w,c[3]=O*U+I*V+T*pe+N*ee,c[7]=O*z+I*k+T*Q+N*_e,c[11]=O*b+I*q+T*B+N*be,c[15]=O*D+I*ce+T*H+N*w,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],p=e[5],m=e[9],h=e[13],x=e[2],y=e[6],g=e[10],S=e[14],A=e[3],L=e[7],M=e[11],v=e[15],O=m*S-h*g,I=p*S-h*y,T=p*g-m*y,N=d*S-h*x,U=d*g-m*x,z=d*y-p*x;return i*(L*O-M*I+v*T)-s*(A*O-M*N+v*U)+l*(A*I-L*N+v*z)-c*(A*T-L*U+M*z)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],d=e[5],p=e[9],m=e[2],h=e[6],x=e[10];return i*(d*x-p*h)-s*(c*x-p*m)+l*(c*h-d*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],x=e[8],y=e[9],g=e[10],S=e[11],A=e[12],L=e[13],M=e[14],v=e[15],O=i*p-s*d,I=i*m-l*d,T=i*h-c*d,N=s*m-l*p,U=s*h-c*p,z=l*h-c*m,b=x*L-y*A,D=x*M-g*A,V=x*v-S*A,k=y*M-g*L,q=y*v-S*L,ce=g*v-S*M,pe=O*ce-I*q+T*k+N*V-U*D+z*b;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/pe;return e[0]=(p*ce-m*q+h*k)*Q,e[1]=(l*q-s*ce-c*k)*Q,e[2]=(L*z-M*U+v*N)*Q,e[3]=(g*U-y*z-S*N)*Q,e[4]=(m*V-d*ce-h*D)*Q,e[5]=(i*ce-l*V+c*D)*Q,e[6]=(M*T-A*z-v*I)*Q,e[7]=(x*z-g*T+S*I)*Q,e[8]=(d*q-p*V+h*b)*Q,e[9]=(s*V-i*q-c*b)*Q,e[10]=(A*U-L*T+v*O)*Q,e[11]=(y*T-x*U-S*O)*Q,e[12]=(p*D-d*k-m*b)*Q,e[13]=(i*k-s*D+l*b)*Q,e[14]=(L*I-A*N-M*O)*Q,e[15]=(x*N-y*I+g*O)*Q,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,p=e.y,m=e.z,h=c*d,x=c*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,x*p+s,x*m-l*d,0,h*m-l*p,x*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,x=d+d,y=p+p,g=c*h,S=c*x,A=c*y,L=d*x,M=d*y,v=p*y,O=m*h,I=m*x,T=m*y,N=s.x,U=s.y,z=s.z;return l[0]=(1-(L+v))*N,l[1]=(S+T)*N,l[2]=(A-I)*N,l[3]=0,l[4]=(S-T)*U,l[5]=(1-(g+v))*U,l[6]=(M+O)*U,l[7]=0,l[8]=(A+I)*z,l[9]=(M-O)*z,l[10]=(1-(g+L))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let d=br.set(l[0],l[1],l[2]).length();const p=br.set(l[4],l[5],l[6]).length(),m=br.set(l[8],l[9],l[10]).length();c<0&&(d=-d),wi.copy(this);const h=1/d,x=1/p,y=1/m;return wi.elements[0]*=h,wi.elements[1]*=h,wi.elements[2]*=h,wi.elements[4]*=x,wi.elements[5]*=x,wi.elements[6]*=x,wi.elements[8]*=y,wi.elements[9]*=y,wi.elements[10]*=y,i.setFromRotationMatrix(wi),s.x=d,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,d,p=Wi,m=!1){const h=this.elements,x=2*c/(i-e),y=2*c/(s-l),g=(i+e)/(i-e),S=(s+l)/(s-l);let A,L;if(m)A=c/(d-c),L=d*c/(d-c);else if(p===Wi)A=-(d+c)/(d-c),L=-2*d*c/(d-c);else if(p===Qo)A=-d/(d-c),L=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=y,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=A,h[14]=L,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,d,p=Wi,m=!1){const h=this.elements,x=2/(i-e),y=2/(s-l),g=-(i+e)/(i-e),S=-(s+l)/(s-l);let A,L;if(m)A=1/(d-c),L=d/(d-c);else if(p===Wi)A=-2/(d-c),L=-(d+c)/(d-c);else if(p===Qo)A=-1/(d-c),L=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=y,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=A,h[14]=L,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};Yc.prototype.isMatrix4=!0;let ln=Yc;const br=new $,wi=new ln,TM=new $(0,0,0),AM=new $(1,1,1),es=new $,hc=new $,li=new $,c_=new ln,u_=new kr;class us{constructor(e=0,i=0,s=0,l=us.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],x=l[9],y=l[2],g=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,S),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Mt(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(p,S));break;case"XZY":this._z=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-x,S),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return c_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(c_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return u_.setFromEuler(this),this.setFromQuaternion(u_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}us.DEFAULT_ORDER="XYZ";class bv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RM=0;const f_=new $,Tr=new kr,ga=new ln,pc=new $,Go=new $,CM=new $,wM=new kr,d_=new $(1,0,0),h_=new $(0,1,0),p_=new $(0,0,1),m_={type:"added"},DM={type:"removed"},Ar={type:"childadded",child:null},vd={type:"childremoved",child:null};class Nn extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=Jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new $,i=new us,s=new kr,l=new $(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ln},normalMatrix:{value:new st}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Tr.setFromAxisAngle(e,i),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(e,i){return Tr.setFromAxisAngle(e,i),this.quaternion.premultiply(Tr),this}rotateX(e){return this.rotateOnAxis(d_,e)}rotateY(e){return this.rotateOnAxis(h_,e)}rotateZ(e){return this.rotateOnAxis(p_,e)}translateOnAxis(e,i){return f_.copy(e).applyQuaternion(this.quaternion),this.position.add(f_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(d_,e)}translateY(e){return this.translateOnAxis(h_,e)}translateZ(e){return this.translateOnAxis(p_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?pc.copy(e):pc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(Go,pc,this.up):ga.lookAt(pc,Go,this.up),this.quaternion.setFromRotationMatrix(ga),l&&(ga.extractRotation(l.matrixWorld),Tr.setFromRotationMatrix(ga),this.quaternion.premultiply(Tr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(m_),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null):bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(DM),vd.child=e,this.dispatchEvent(vd),vd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ga.multiply(e.parent.matrixWorld)),e.applyMatrix4(ga),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(m_),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,CM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,wM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let d=0,p=c.length;d<p;d++)c[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,x=m.length;h<x;h++){const y=m[h];c(e.shapes,y)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),x=d(e.images),y=d(e.shapes),g=d(e.skeletons),S=d(e.animations),A=d(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),x.length>0&&(s.images=x),y.length>0&&(s.shapes=y),g.length>0&&(s.skeletons=g),S.length>0&&(s.animations=S),A.length>0&&(s.nodes=A)}return s.object=l,s;function d(p){const m=[];for(const h in p){const x=p[h];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Nn.DEFAULT_UP=new $(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class os extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UM={type:"move"};class xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const L of e.hand.values()){const M=i.getJointPose(L,s),v=this._getHandJoint(h,L);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const x=h.joints["index-finger-tip"],y=h.joints["thumb-tip"],g=x.position.distanceTo(y.position),S=.02,A=.005;h.inputState.pinching&&g>S+A?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=S-A&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(UM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new os;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Tv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},mc={h:0,s:0,l:0};function yd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Et{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=St.workingColorSpace){return this.r=e,this.g=i,this.b=s,St.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=St.workingColorSpace){if(e=vM(e,1),i=Mt(i,0,1),s=Mt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=yd(d,c,e+1/3),this.g=yd(d,c,e),this.b=yd(d,c,e-1/3)}return St.colorSpaceToWorking(this,l),this}setStyle(e,i=fi){function s(c){c!==void 0&&parseFloat(c)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:nt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=fi){const s=Tv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return St.workingToColorSpace(zn.copy(this),e),Math.round(Mt(zn.r*255,0,255))*65536+Math.round(Mt(zn.g*255,0,255))*256+Math.round(Mt(zn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=St.workingColorSpace){St.workingToColorSpace(zn.copy(this),i);const s=zn.r,l=zn.g,c=zn.b,d=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const x=(p+d)/2;if(p===d)m=0,h=0;else{const y=d-p;switch(h=x<=.5?y/(d+p):y/(2-d-p),d){case s:m=(l-c)/y+(l<c?6:0);break;case l:m=(c-s)/y+2;break;case c:m=(s-l)/y+4;break}m/=6}return e.h=m,e.s=h,e.l=x,e}getRGB(e,i=St.workingColorSpace){return St.workingToColorSpace(zn.copy(this),i),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=fi){St.workingToColorSpace(zn.copy(this),e);const i=zn.r,s=zn.g,l=zn.b;return e!==fi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+i,ts.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ts),e.getHSL(mc);const s=hd(ts.h,mc.h,i),l=hd(ts.s,mc.s,i),c=hd(ts.l,mc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new Et;Et.NAMES=Tv;class NM extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new us,this.environmentIntensity=1,this.environmentRotation=new us,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Di=new $,_a=new $,Sd=new $,va=new $,Rr=new $,Cr=new $,g_=new $,Md=new $,Ed=new $,bd=new $,Td=new en,Ad=new en,Rd=new en;class Ni{constructor(e=new $,i=new $,s=new $){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Di.subVectors(e,i),l.cross(Di);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Di.subVectors(l,i),_a.subVectors(s,i),Sd.subVectors(e,i);const d=Di.dot(Di),p=Di.dot(_a),m=Di.dot(Sd),h=_a.dot(_a),x=_a.dot(Sd),y=d*h-p*p;if(y===0)return c.set(0,0,0),null;const g=1/y,S=(h*m-p*x)*g,A=(d*x-p*m)*g;return c.set(1-S-A,A,S)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,va)===null?!1:va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(e,i,s,l,c,d,p,m){return this.getBarycoord(e,i,s,l,va)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,va.x),m.addScaledVector(d,va.y),m.addScaledVector(p,va.z),m)}static getInterpolatedAttribute(e,i,s,l,c,d){return Td.setScalar(0),Ad.setScalar(0),Rd.setScalar(0),Td.fromBufferAttribute(e,i),Ad.fromBufferAttribute(e,s),Rd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Td,c.x),d.addScaledVector(Ad,c.y),d.addScaledVector(Rd,c.z),d}static isFrontFacing(e,i,s,l){return Di.subVectors(s,i),_a.subVectors(e,i),Di.cross(_a).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),_a.subVectors(this.a,this.b),Di.cross(_a).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ni.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ni.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,p;Rr.subVectors(l,s),Cr.subVectors(c,s),Md.subVectors(e,s);const m=Rr.dot(Md),h=Cr.dot(Md);if(m<=0&&h<=0)return i.copy(s);Ed.subVectors(e,l);const x=Rr.dot(Ed),y=Cr.dot(Ed);if(x>=0&&y<=x)return i.copy(l);const g=m*y-x*h;if(g<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(s).addScaledVector(Rr,d);bd.subVectors(e,c);const S=Rr.dot(bd),A=Cr.dot(bd);if(A>=0&&S<=A)return i.copy(c);const L=S*h-m*A;if(L<=0&&h>=0&&A<=0)return p=h/(h-A),i.copy(s).addScaledVector(Cr,p);const M=x*A-S*y;if(M<=0&&y-x>=0&&S-A>=0)return g_.subVectors(c,l),p=(y-x)/(y-x+(S-A)),i.copy(l).addScaledVector(g_,p);const v=1/(M+L+g);return d=L*v,p=g*v,i.copy(s).addScaledVector(Rr,d).addScaledVector(Cr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class $o{constructor(e=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Ui):Ui.fromBufferAttribute(c,d),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),gc.copy(s.boundingBox)),gc.applyMatrix4(e.matrixWorld),this.union(gc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),_c.subVectors(this.max,Ho),wr.subVectors(e.a,Ho),Dr.subVectors(e.b,Ho),Ur.subVectors(e.c,Ho),ns.subVectors(Dr,wr),is.subVectors(Ur,Dr),Us.subVectors(wr,Ur);let i=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Us.z,Us.y,ns.z,0,-ns.x,is.z,0,-is.x,Us.z,0,-Us.x,-ns.y,ns.x,0,-is.y,is.x,0,-Us.y,Us.x,0];return!Cd(i,wr,Dr,Ur,_c)||(i=[1,0,0,0,1,0,0,0,1],!Cd(i,wr,Dr,Ur,_c))?!1:(vc.crossVectors(ns,is),i=[vc.x,vc.y,vc.z],Cd(i,wr,Dr,Ur,_c))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xa=[new $,new $,new $,new $,new $,new $,new $,new $],Ui=new $,gc=new $o,wr=new $,Dr=new $,Ur=new $,ns=new $,is=new $,Us=new $,Ho=new $,_c=new $,vc=new $,Ns=new $;function Cd(r,e,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){Ns.fromArray(r,c);const p=l.x*Math.abs(Ns.x)+l.y*Math.abs(Ns.y)+l.z*Math.abs(Ns.z),m=e.dot(Ns),h=i.dot(Ns),x=s.dot(Ns);if(Math.max(-Math.max(m,h,x),Math.min(m,h,x))>p)return!1}return!0}const vn=new $,xc=new ft;let LM=0;class ji extends ks{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=n_,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)xc.fromBufferAttribute(this,i),xc.applyMatrix3(e),this.setXY(i,xc.x,xc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Bo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=jn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Bo(i,this.array)),i}setX(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Bo(i,this.array)),i}setY(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Bo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Bo(i,this.array)),i}setW(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array),c=jn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==n_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Av extends ji{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Rv extends ji{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Tn extends ji{constructor(e,i,s){super(new Float32Array(e),i,s)}}const OM=new $o,Vo=new $,wd=new $;class jh{constructor(e=new $,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):OM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);const i=Vo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Vo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(wd)),this.expandByPoint(Vo.copy(e.center).sub(wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let PM=0;const Mi=new ln,Dd=new Nn,Nr=new $,ci=new $o,ko=new $o,bn=new $;class Ei extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=Jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pM(e)?Rv:Av)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new st().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,i,s){return Mi.makeTranslation(e,i,s),this.applyMatrix4(Mi),this}scale(e,i,s){return Mi.makeScale(e,i,s),this.applyMatrix4(Mi),this}lookAt(e){return Dd.lookAt(e),Dd.updateMatrix(),this.applyMatrix4(Dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Tn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $o);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ci.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const s=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];ko.setFromBufferAttribute(p),this.morphTargetsRelative?(bn.addVectors(ci.min,ko.min),ci.expandByPoint(bn),bn.addVectors(ci.max,ko.max),ci.expandByPoint(bn)):(ci.expandByPoint(ko.min),ci.expandByPoint(ko.max))}ci.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)bn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,x=p.count;h<x;h++)bn.fromBufferAttribute(p,h),m&&(Nr.fromBufferAttribute(e,h),bn.add(Nr)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new ji(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const p=[],m=[];for(let b=0;b<s.count;b++)p[b]=new $,m[b]=new $;const h=new $,x=new $,y=new $,g=new ft,S=new ft,A=new ft,L=new $,M=new $;function v(b,D,V){h.fromBufferAttribute(s,b),x.fromBufferAttribute(s,D),y.fromBufferAttribute(s,V),g.fromBufferAttribute(c,b),S.fromBufferAttribute(c,D),A.fromBufferAttribute(c,V),x.sub(h),y.sub(h),S.sub(g),A.sub(g);const k=1/(S.x*A.y-A.x*S.y);isFinite(k)&&(L.copy(x).multiplyScalar(A.y).addScaledVector(y,-S.y).multiplyScalar(k),M.copy(y).multiplyScalar(S.x).addScaledVector(x,-A.x).multiplyScalar(k),p[b].add(L),p[D].add(L),p[V].add(L),m[b].add(M),m[D].add(M),m[V].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let b=0,D=O.length;b<D;++b){const V=O[b],k=V.start,q=V.count;for(let ce=k,pe=k+q;ce<pe;ce+=3)v(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const I=new $,T=new $,N=new $,U=new $;function z(b){N.fromBufferAttribute(l,b),U.copy(N);const D=p[b];I.copy(D),I.sub(N.multiplyScalar(N.dot(D))).normalize(),T.crossVectors(U,D);const k=T.dot(m[b])<0?-1:1;d.setXYZW(b,I.x,I.y,I.z,k)}for(let b=0,D=O.length;b<D;++b){const V=O[b],k=V.start,q=V.count;for(let ce=k,pe=k+q;ce<pe;ce+=3)z(e.getX(ce+0)),z(e.getX(ce+1)),z(e.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new ji(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,S=s.count;g<S;g++)s.setXYZ(g,0,0,0);const l=new $,c=new $,d=new $,p=new $,m=new $,h=new $,x=new $,y=new $;if(e)for(let g=0,S=e.count;g<S;g+=3){const A=e.getX(g+0),L=e.getX(g+1),M=e.getX(g+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,L),d.fromBufferAttribute(i,M),x.subVectors(d,c),y.subVectors(l,c),x.cross(y),p.fromBufferAttribute(s,A),m.fromBufferAttribute(s,L),h.fromBufferAttribute(s,M),p.add(x),m.add(x),h.add(x),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(L,m.x,m.y,m.z),s.setXYZ(M,h.x,h.y,h.z)}else for(let g=0,S=i.count;g<S;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),x.subVectors(d,c),y.subVectors(l,c),x.cross(y),s.setXYZ(g+0,x.x,x.y,x.z),s.setXYZ(g+1,x.x,x.y,x.z),s.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(p,m){const h=p.array,x=p.itemSize,y=p.normalized,g=new h.constructor(m.length*x);let S=0,A=0;for(let L=0,M=m.length;L<M;L++){p.isInterleavedBufferAttribute?S=m[L]*p.data.stride+p.offset:S=m[L]*x;for(let v=0;v<x;v++)g[A++]=h[S++]}return new ji(g,x,y)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ei,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let x=0,y=h.length;x<y;x++){const g=h[x],S=e(g,s);m.push(S)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],x=[];for(let y=0,g=h.length;y<g;y++){const S=h[y];x.push(S.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const x=l[h];this.setAttribute(h,x.clone(i))}const c=e.morphAttributes;for(const h in c){const x=[],y=c[h];for(let g=0,S=y.length;g<S;g++)x.push(y[g].clone(i));this.morphAttributes[h]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,x=d.length;h<x;h++){const y=d[h];this.addGroup(y.start,y.count,y.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let zM=0;class el extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=Jo(),this.name="",this.type="Material",this.blending=zr,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xd,this.blendDst=Wd,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=t_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){nt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==zr&&(s.blending=this.blending),this.side!==cs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Xd&&(s.blendSrc=this.blendSrc),this.blendDst!==Wd&&(s.blendDst=this.blendDst),this.blendEquation!==zs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==t_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new ft().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ft().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ya=new $,Ud=new $,yc=new $,as=new $,Nd=new $,Sc=new $,Ld=new $;class IM{constructor(e=new $,i=new $(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ya)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ya.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ya.copy(this.origin).addScaledVector(this.direction,i),ya.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Ud.copy(e).add(i).multiplyScalar(.5),yc.copy(i).sub(e).normalize(),as.copy(this.origin).sub(Ud);const c=e.distanceTo(i)*.5,d=-this.direction.dot(yc),p=as.dot(this.direction),m=-as.dot(yc),h=as.lengthSq(),x=Math.abs(1-d*d);let y,g,S,A;if(x>0)if(y=d*m-p,g=d*p-m,A=c*x,y>=0)if(g>=-A)if(g<=A){const L=1/x;y*=L,g*=L,S=y*(y+d*g+2*p)+g*(d*y+g+2*m)+h}else g=c,y=Math.max(0,-(d*g+p)),S=-y*y+g*(g+2*m)+h;else g=-c,y=Math.max(0,-(d*g+p)),S=-y*y+g*(g+2*m)+h;else g<=-A?(y=Math.max(0,-(-d*c+p)),g=y>0?-c:Math.min(Math.max(-c,-m),c),S=-y*y+g*(g+2*m)+h):g<=A?(y=0,g=Math.min(Math.max(-c,-m),c),S=g*(g+2*m)+h):(y=Math.max(0,-(d*c+p)),g=y>0?c:Math.min(Math.max(-c,-m),c),S=-y*y+g*(g+2*m)+h);else g=d>0?-c:c,y=Math.max(0,-(d*g+p)),S=-y*y+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(Ud).addScaledVector(yc,g),S}intersectSphere(e,i){ya.subVectors(e.center,this.origin);const s=ya.dot(this.direction),l=ya.dot(ya)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,p,m;const h=1/this.direction.x,x=1/this.direction.y,y=1/this.direction.z,g=this.origin;return h>=0?(s=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(s=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),x>=0?(c=(e.min.y-g.y)*x,d=(e.max.y-g.y)*x):(c=(e.max.y-g.y)*x,d=(e.min.y-g.y)*x),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),y>=0?(p=(e.min.z-g.z)*y,m=(e.max.z-g.z)*y):(p=(e.max.z-g.z)*y,m=(e.min.z-g.z)*y),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ya)!==null}intersectTriangle(e,i,s,l,c){Nd.subVectors(i,e),Sc.subVectors(s,e),Ld.crossVectors(Nd,Sc);let d=this.direction.dot(Ld),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;as.subVectors(this.origin,e);const m=p*this.direction.dot(Sc.crossVectors(as,Sc));if(m<0)return null;const h=p*this.direction.dot(Nd.cross(as));if(h<0||m+h>d)return null;const x=-p*as.dot(Ld);return x<0?null:this.at(x/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Cv extends el{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new us,this.combine=rv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const __=new ln,Ls=new IM,Mc=new jh,v_=new $,Ec=new $,bc=new $,Tc=new $,Od=new $,Ac=new $,x_=new $,Rc=new $;class Zn extends Nn{constructor(e=new Ei,i=new Cv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Ac.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const x=p[m],y=c[m];x!==0&&(Od.fromBufferAttribute(y,e),d?Ac.addScaledVector(Od,x):Ac.addScaledVector(Od.sub(i),x))}i.add(Ac)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Mc.copy(s.boundingSphere),Mc.applyMatrix4(c),Ls.copy(e.ray).recast(e.near),!(Mc.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Mc,v_)===null||Ls.origin.distanceToSquared(v_)>(e.far-e.near)**2))&&(__.copy(c).invert(),Ls.copy(e.ray).applyMatrix4(__),!(s.boundingBox!==null&&Ls.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Ls)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,x=c.attributes.uv1,y=c.attributes.normal,g=c.groups,S=c.drawRange;if(p!==null)if(Array.isArray(d))for(let A=0,L=g.length;A<L;A++){const M=g[A],v=d[M.materialIndex],O=Math.max(M.start,S.start),I=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let T=O,N=I;T<N;T+=3){const U=p.getX(T),z=p.getX(T+1),b=p.getX(T+2);l=Cc(this,v,e,s,h,x,y,U,z,b),l&&(l.faceIndex=Math.floor(T/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,S.start),L=Math.min(p.count,S.start+S.count);for(let M=A,v=L;M<v;M+=3){const O=p.getX(M),I=p.getX(M+1),T=p.getX(M+2);l=Cc(this,d,e,s,h,x,y,O,I,T),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,L=g.length;A<L;A++){const M=g[A],v=d[M.materialIndex],O=Math.max(M.start,S.start),I=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let T=O,N=I;T<N;T+=3){const U=T,z=T+1,b=T+2;l=Cc(this,v,e,s,h,x,y,U,z,b),l&&(l.faceIndex=Math.floor(T/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,S.start),L=Math.min(m.count,S.start+S.count);for(let M=A,v=L;M<v;M+=3){const O=M,I=M+1,T=M+2;l=Cc(this,d,e,s,h,x,y,O,I,T),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function FM(r,e,i,s,l,c,d,p){let m;if(e.side===Kn?m=s.intersectTriangle(d,c,l,!0,p):m=s.intersectTriangle(l,c,d,e.side===cs,p),m===null)return null;Rc.copy(p),Rc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Rc);return h<i.near||h>i.far?null:{distance:h,point:Rc.clone(),object:r}}function Cc(r,e,i,s,l,c,d,p,m,h){r.getVertexPosition(p,Ec),r.getVertexPosition(m,bc),r.getVertexPosition(h,Tc);const x=FM(r,e,i,s,Ec,bc,Tc,x_);if(x){const y=new $;Ni.getBarycoord(x_,Ec,bc,Tc,y),l&&(x.uv=Ni.getInterpolatedAttribute(l,p,m,h,y,new ft)),c&&(x.uv1=Ni.getInterpolatedAttribute(c,p,m,h,y,new ft)),d&&(x.normal=Ni.getInterpolatedAttribute(d,p,m,h,y,new $),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new $,materialIndex:0};Ni.getNormal(Ec,bc,Tc,g.normal),x.face=g,x.barycoord=y}return x}class BM extends Gn{constructor(e=null,i=1,s=1,l,c,d,p,m,h=Un,x=Un,y,g){super(null,d,p,m,h,x,l,c,y,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pd=new $,GM=new $,HM=new st;class Ps{constructor(e=new $(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Pd.subVectors(s,i).cross(GM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(Pd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||HM.getNormalMatrix(e),l=this.coplanarPoint(Pd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new jh,VM=new ft(.5,.5),wc=new $;class Zh{constructor(e=new Ps,i=new Ps,s=new Ps,l=new Ps,c=new Ps,d=new Ps){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Wi,s=!1){const l=this.planes,c=e.elements,d=c[0],p=c[1],m=c[2],h=c[3],x=c[4],y=c[5],g=c[6],S=c[7],A=c[8],L=c[9],M=c[10],v=c[11],O=c[12],I=c[13],T=c[14],N=c[15];if(l[0].setComponents(h-d,S-x,v-A,N-O).normalize(),l[1].setComponents(h+d,S+x,v+A,N+O).normalize(),l[2].setComponents(h+p,S+y,v+L,N+I).normalize(),l[3].setComponents(h-p,S-y,v-L,N-I).normalize(),s)l[4].setComponents(m,g,M,T).normalize(),l[5].setComponents(h-m,S-g,v-M,N-T).normalize();else if(l[4].setComponents(h-m,S-g,v-M,N-T).normalize(),i===Wi)l[5].setComponents(h+m,S+g,v+M,N+T).normalize();else if(i===Qo)l[5].setComponents(m,g,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(e){Os.center.set(0,0,0);const i=VM.distanceTo(e.center);return Os.radius=.7071067811865476+i,Os.applyMatrix4(e.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(wc.x=l.normal.x>0?e.max.x:e.min.x,wc.y=l.normal.y>0?e.max.y:e.min.y,wc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(wc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wv extends Gn{constructor(e=[],i=Hs,s,l,c,d,p,m,h,x){super(e,i,s,l,c,d,p,m,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hr extends Gn{constructor(e,i,s=Zi,l,c,d,p=Un,m=Un,h,x=Aa,y=1){if(x!==Aa&&x!==Gs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:y};super(g,l,c,d,p,m,x,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class kM extends Hr{constructor(e,i=Zi,s=Hs,l,c,d=Un,p=Un,m,h=Aa){const x={width:e,height:e,depth:1},y=[x,x,x,x,x,x];super(e,e,i,s,l,c,d,p,m,h),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Dv extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xr extends Ei{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],x=[],y=[];let g=0,S=0;A("z","y","x",-1,-1,s,i,e,d,c,0),A("z","y","x",1,-1,s,i,-e,d,c,1),A("x","z","y",1,1,e,s,i,l,d,2),A("x","z","y",1,-1,e,s,-i,l,d,3),A("x","y","z",1,-1,e,i,s,l,c,4),A("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Tn(h,3)),this.setAttribute("normal",new Tn(x,3)),this.setAttribute("uv",new Tn(y,2));function A(L,M,v,O,I,T,N,U,z,b,D){const V=T/z,k=N/b,q=T/2,ce=N/2,pe=U/2,Q=z+1,B=b+1;let H=0,ee=0;const _e=new $;for(let be=0;be<B;be++){const w=be*k-ce;for(let X=0;X<Q;X++){const me=X*V-q;_e[L]=me*O,_e[M]=w*I,_e[v]=pe,h.push(_e.x,_e.y,_e.z),_e[L]=0,_e[M]=0,_e[v]=U>0?1:-1,x.push(_e.x,_e.y,_e.z),y.push(X/z),y.push(1-be/b),H+=1}}for(let be=0;be<b;be++)for(let w=0;w<z;w++){const X=g+w+Q*be,me=g+w+Q*(be+1),Ce=g+(w+1)+Q*(be+1),ze=g+(w+1)+Q*be;m.push(X,me,ze),m.push(me,Ce,ze),ee+=6}p.addGroup(S,ee,D),S+=ee,g+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Kh extends Ei{constructor(e=1,i=1,s=1,l=32,c=1,d=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:p,thetaLength:m};const h=this;l=Math.floor(l),c=Math.floor(c);const x=[],y=[],g=[],S=[];let A=0;const L=[],M=s/2;let v=0;O(),d===!1&&(e>0&&I(!0),i>0&&I(!1)),this.setIndex(x),this.setAttribute("position",new Tn(y,3)),this.setAttribute("normal",new Tn(g,3)),this.setAttribute("uv",new Tn(S,2));function O(){const T=new $,N=new $;let U=0;const z=(i-e)/s;for(let b=0;b<=c;b++){const D=[],V=b/c,k=V*(i-e)+e;for(let q=0;q<=l;q++){const ce=q/l,pe=ce*m+p,Q=Math.sin(pe),B=Math.cos(pe);N.x=k*Q,N.y=-V*s+M,N.z=k*B,y.push(N.x,N.y,N.z),T.set(Q,z,B).normalize(),g.push(T.x,T.y,T.z),S.push(ce,1-V),D.push(A++)}L.push(D)}for(let b=0;b<l;b++)for(let D=0;D<c;D++){const V=L[D][b],k=L[D+1][b],q=L[D+1][b+1],ce=L[D][b+1];(e>0||D!==0)&&(x.push(V,k,ce),U+=3),(i>0||D!==c-1)&&(x.push(k,q,ce),U+=3)}h.addGroup(v,U,0),v+=U}function I(T){const N=A,U=new ft,z=new $;let b=0;const D=T===!0?e:i,V=T===!0?1:-1;for(let q=1;q<=l;q++)y.push(0,M*V,0),g.push(0,V,0),S.push(.5,.5),A++;const k=A;for(let q=0;q<=l;q++){const pe=q/l*m+p,Q=Math.cos(pe),B=Math.sin(pe);z.x=D*B,z.y=M*V,z.z=D*Q,y.push(z.x,z.y,z.z),g.push(0,V,0),U.x=Q*.5+.5,U.y=B*.5*V+.5,S.push(U.x,U.y),A++}for(let q=0;q<l;q++){const ce=N+q,pe=k+q;T===!0?x.push(pe,pe+1,ce):x.push(pe+1,pe,ce),b+=3}h.addGroup(v,b,T===!0?1:2),v+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qh extends Ei{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const c=[],d=[];p(l),h(s),x(),this.setAttribute("position",new Tn(c,3)),this.setAttribute("normal",new Tn(c.slice(),3)),this.setAttribute("uv",new Tn(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function p(O){const I=new $,T=new $,N=new $;for(let U=0;U<i.length;U+=3)S(i[U+0],I),S(i[U+1],T),S(i[U+2],N),m(I,T,N,O)}function m(O,I,T,N){const U=N+1,z=[];for(let b=0;b<=U;b++){z[b]=[];const D=O.clone().lerp(T,b/U),V=I.clone().lerp(T,b/U),k=U-b;for(let q=0;q<=k;q++)q===0&&b===U?z[b][q]=D:z[b][q]=D.clone().lerp(V,q/k)}for(let b=0;b<U;b++)for(let D=0;D<2*(U-b)-1;D++){const V=Math.floor(D/2);D%2===0?(g(z[b][V+1]),g(z[b+1][V]),g(z[b][V])):(g(z[b][V+1]),g(z[b+1][V+1]),g(z[b+1][V]))}}function h(O){const I=new $;for(let T=0;T<c.length;T+=3)I.x=c[T+0],I.y=c[T+1],I.z=c[T+2],I.normalize().multiplyScalar(O),c[T+0]=I.x,c[T+1]=I.y,c[T+2]=I.z}function x(){const O=new $;for(let I=0;I<c.length;I+=3){O.x=c[I+0],O.y=c[I+1],O.z=c[I+2];const T=M(O)/2/Math.PI+.5,N=v(O)/Math.PI+.5;d.push(T,1-N)}A(),y()}function y(){for(let O=0;O<d.length;O+=6){const I=d[O+0],T=d[O+2],N=d[O+4],U=Math.max(I,T,N),z=Math.min(I,T,N);U>.9&&z<.1&&(I<.2&&(d[O+0]+=1),T<.2&&(d[O+2]+=1),N<.2&&(d[O+4]+=1))}}function g(O){c.push(O.x,O.y,O.z)}function S(O,I){const T=O*3;I.x=e[T+0],I.y=e[T+1],I.z=e[T+2]}function A(){const O=new $,I=new $,T=new $,N=new $,U=new ft,z=new ft,b=new ft;for(let D=0,V=0;D<c.length;D+=9,V+=6){O.set(c[D+0],c[D+1],c[D+2]),I.set(c[D+3],c[D+4],c[D+5]),T.set(c[D+6],c[D+7],c[D+8]),U.set(d[V+0],d[V+1]),z.set(d[V+2],d[V+3]),b.set(d[V+4],d[V+5]),N.copy(O).add(I).add(T).divideScalar(3);const k=M(N);L(U,V+0,O,k),L(z,V+2,I,k),L(b,V+4,T,k)}}function L(O,I,T,N){N<0&&O.x===1&&(d[I]=O.x-1),T.x===0&&T.z===0&&(d[I]=N/2/Math.PI+.5)}function M(O){return Math.atan2(O.z,-O.x)}function v(O){return Math.atan2(-O.y,Math.sqrt(O.x*O.x+O.z*O.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qh(e.vertices,e.indices,e.radius,e.detail)}}class Jh extends Qh{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Jh(e.radius,e.detail)}}class Zc extends Ei{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,x=m+1,y=e/p,g=i/m,S=[],A=[],L=[],M=[];for(let v=0;v<x;v++){const O=v*g-d;for(let I=0;I<h;I++){const T=I*y-c;A.push(T,-O,0),L.push(0,0,1),M.push(I/p),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let O=0;O<p;O++){const I=O+h*v,T=O+h*(v+1),N=O+1+h*(v+1),U=O+1+h*v;S.push(I,T,U),S.push(T,N,U)}this.setIndex(S),this.setAttribute("position",new Tn(A,3)),this.setAttribute("normal",new Tn(L,3)),this.setAttribute("uv",new Tn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zc(e.width,e.height,e.widthSegments,e.heightSegments)}}class qc extends Ei{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+p,Math.PI);let h=0;const x=[],y=new $,g=new $,S=[],A=[],L=[],M=[];for(let v=0;v<=s;v++){const O=[],I=v/s,T=d+I*p,N=e*Math.cos(T),U=Math.sqrt(e*e-N*N);let z=0;v===0&&d===0?z=.5/i:v===s&&m===Math.PI&&(z=-.5/i);for(let b=0;b<=i;b++){const D=b/i,V=l+D*c;y.x=-U*Math.cos(V),y.y=N,y.z=U*Math.sin(V),A.push(y.x,y.y,y.z),g.copy(y).normalize(),L.push(g.x,g.y,g.z),M.push(D+z,1-I),O.push(h++)}x.push(O)}for(let v=0;v<s;v++)for(let O=0;O<i;O++){const I=x[v][O+1],T=x[v][O],N=x[v+1][O],U=x[v+1][O+1];(v!==0||d>0)&&S.push(I,T,U),(v!==s-1||m<Math.PI)&&S.push(T,N,U)}this.setIndex(S),this.setAttribute("position",new Tn(A,3)),this.setAttribute("normal",new Tn(L,3)),this.setAttribute("uv",new Tn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Vr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(y_(l))l.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(y_(l[0])){const c=[];for(let d=0,p=l.length;d<p;d++)c[d]=l[d].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Bn(r){const e={};for(let i=0;i<r.length;i++){const s=Vr(r[i]);for(const l in s)e[l]=s[l]}return e}function y_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function XM(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Uv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const WM={clone:Vr,merge:Bn};var qM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends el{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qM,this.fragmentShader=YM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vr(e.uniforms),this.uniformsGroups=XM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new Et().setHex(l.value);break;case"v2":this.uniforms[s].value=new ft().fromArray(l.value);break;case"v3":this.uniforms[s].value=new $().fromArray(l.value);break;case"v4":this.uniforms[s].value=new en().fromArray(l.value);break;case"m3":this.uniforms[s].value=new st().fromArray(l.value);break;case"m4":this.uniforms[s].value=new ln().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class jM extends Ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yo extends el{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uh,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new us,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ZM extends el{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KM extends el{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class $h extends Nn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class QM extends $h{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const zd=new ln,S_=new $,M_=new $;class Nv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zh,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;S_.setFromMatrixPosition(e.matrixWorld),i.position.copy(S_),M_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(M_),i.updateMatrixWorld(),zd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Qo||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(zd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Dc=new $,Uc=new kr,Hi=new $;class Lv extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Dc,Uc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dc,Uc,Hi.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(Dc,Uc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dc,Uc,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ss=new $,E_=new ft,b_=new ft;class di extends Lv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Nh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nh*2*Math.atan(Math.tan(dd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,i){return this.getViewBounds(e,E_,b_),i.subVectors(b_,E_)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(dd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class JM extends Nv{constructor(){super(new di(90,1,.5,500)),this.isPointLightShadow=!0}}class $M extends $h{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new JM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class ep extends Lv{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=x*this.view.offsetY,m=p-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class eE extends Nv{constructor(){super(new ep(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tE extends $h{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new eE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}const Lr=-90,Or=1;class nE extends Nn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new di(Lr,Or,e,i);l.layers=this.layers,this.add(l);const c=new di(Lr,Or,e,i);c.layers=this.layers,this.add(c);const d=new di(Lr,Or,e,i);d.layers=this.layers,this.add(d);const p=new di(Lr,Or,e,i);p.layers=this.layers,this.add(p);const m=new di(Lr,Or,e,i);m.layers=this.layers,this.add(m);const h=new di(Lr,Or,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(e===Wi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Qo)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,x]=this.children,y=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const L=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=L,e.setRenderTarget(s,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,x),e.setRenderTarget(y,g,S),e.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class iE extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class aE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,nt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const sp=class sp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};sp.prototype.isMatrix2=!0;let T_=sp;function A_(r,e,i,s){const l=sE(s);switch(i){case xv:return r*e;case Sv:return r*e/l.components*l.byteLength;case Vh:return r*e/l.components*l.byteLength;case Vs:return r*e*2/l.components*l.byteLength;case kh:return r*e*2/l.components*l.byteLength;case yv:return r*e*3/l.components*l.byteLength;case Oi:return r*e*4/l.components*l.byteLength;case Xh:return r*e*4/l.components*l.byteLength;case zc:case Ic:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Fc:case Bc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case nh:case ah:return Math.max(r,16)*Math.max(e,8)/4;case th:case ih:return Math.max(r,8)*Math.max(e,8)/2;case sh:case rh:case lh:case ch:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case oh:case Hc:case uh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case dh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case hh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ph:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case mh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case gh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case _h:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case vh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case xh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case yh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Mh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case bh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Th:case Ah:case Rh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ch:case wh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Vc:case Dh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function sE(r){switch(r){case hi:case mv:return{byteLength:1,components:1};case Zo:case gv:case Ta:return{byteLength:2,components:1};case Gh:case Hh:return{byteLength:2,components:4};case Zi:case Bh:case Xi:return{byteLength:4,components:1};case _v:case vv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fh}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fh);function Ov(){let r=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function rE(r){const e=new WeakMap;function i(p,m){const h=p.array,x=p.usage,y=h.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,h,x),p.onUploadCallback();let S;if(h instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=r.SHORT;else if(h instanceof Uint32Array)S=r.UNSIGNED_INT;else if(h instanceof Int32Array)S=r.INT;else if(h instanceof Int8Array)S=r.BYTE;else if(h instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:y}}function s(p,m,h){const x=m.array,y=m.updateRanges;if(r.bindBuffer(h,p),y.length===0)r.bufferSubData(h,0,x);else{y.sort((S,A)=>S.start-A.start);let g=0;for(let S=1;S<y.length;S++){const A=y[g],L=y[S];L.start<=A.start+A.count+1?A.count=Math.max(A.count,L.start+L.count-A.start):(++g,y[g]=L)}y.length=g+1;for(let S=0,A=y.length;S<A;S++){const L=y[S];r.bufferSubData(h,L.start*x.BYTES_PER_ELEMENT,x,L.start,L.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=e.get(p);(!x||x.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var oE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,gE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_E=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,SE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,RE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,CE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,DE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,UE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,NE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,LE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IE="gl_FragColor = linearToOutputTexel( gl_FragColor );",FE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,BE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,GE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,HE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,VE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,XE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ZE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,$E=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,eb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ib=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ab=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ob=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ub=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,db=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_b=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ab=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Db=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ub=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ob=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ib=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Xb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$b=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,t1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,n1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,i1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,r1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,p1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,m1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,g1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,M1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,A1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,C1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,w1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,N1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,z1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:oE,alphahash_pars_fragment:lE,alphamap_fragment:cE,alphamap_pars_fragment:uE,alphatest_fragment:fE,alphatest_pars_fragment:dE,aomap_fragment:hE,aomap_pars_fragment:pE,batching_pars_vertex:mE,batching_vertex:gE,begin_vertex:_E,beginnormal_vertex:vE,bsdfs:xE,iridescence_fragment:yE,bumpmap_pars_fragment:SE,clipping_planes_fragment:ME,clipping_planes_pars_fragment:EE,clipping_planes_pars_vertex:bE,clipping_planes_vertex:TE,color_fragment:AE,color_pars_fragment:RE,color_pars_vertex:CE,color_vertex:wE,common:DE,cube_uv_reflection_fragment:UE,defaultnormal_vertex:NE,displacementmap_pars_vertex:LE,displacementmap_vertex:OE,emissivemap_fragment:PE,emissivemap_pars_fragment:zE,colorspace_fragment:IE,colorspace_pars_fragment:FE,envmap_fragment:BE,envmap_common_pars_fragment:GE,envmap_pars_fragment:HE,envmap_pars_vertex:VE,envmap_physical_pars_fragment:$E,envmap_vertex:kE,fog_vertex:XE,fog_pars_vertex:WE,fog_fragment:qE,fog_pars_fragment:YE,gradientmap_pars_fragment:jE,lightmap_pars_fragment:ZE,lights_lambert_fragment:KE,lights_lambert_pars_fragment:QE,lights_pars_begin:JE,lights_toon_fragment:eb,lights_toon_pars_fragment:tb,lights_phong_fragment:nb,lights_phong_pars_fragment:ib,lights_physical_fragment:ab,lights_physical_pars_fragment:sb,lights_fragment_begin:rb,lights_fragment_maps:ob,lights_fragment_end:lb,lightprobes_pars_fragment:cb,logdepthbuf_fragment:ub,logdepthbuf_pars_fragment:fb,logdepthbuf_pars_vertex:db,logdepthbuf_vertex:hb,map_fragment:pb,map_pars_fragment:mb,map_particle_fragment:gb,map_particle_pars_fragment:_b,metalnessmap_fragment:vb,metalnessmap_pars_fragment:xb,morphinstance_vertex:yb,morphcolor_vertex:Sb,morphnormal_vertex:Mb,morphtarget_pars_vertex:Eb,morphtarget_vertex:bb,normal_fragment_begin:Tb,normal_fragment_maps:Ab,normal_pars_fragment:Rb,normal_pars_vertex:Cb,normal_vertex:wb,normalmap_pars_fragment:Db,clearcoat_normal_fragment_begin:Ub,clearcoat_normal_fragment_maps:Nb,clearcoat_pars_fragment:Lb,iridescence_pars_fragment:Ob,opaque_fragment:Pb,packing:zb,premultiplied_alpha_fragment:Ib,project_vertex:Fb,dithering_fragment:Bb,dithering_pars_fragment:Gb,roughnessmap_fragment:Hb,roughnessmap_pars_fragment:Vb,shadowmap_pars_fragment:kb,shadowmap_pars_vertex:Xb,shadowmap_vertex:Wb,shadowmask_pars_fragment:qb,skinbase_vertex:Yb,skinning_pars_vertex:jb,skinning_vertex:Zb,skinnormal_vertex:Kb,specularmap_fragment:Qb,specularmap_pars_fragment:Jb,tonemapping_fragment:$b,tonemapping_pars_fragment:e1,transmission_fragment:t1,transmission_pars_fragment:n1,uv_pars_fragment:i1,uv_pars_vertex:a1,uv_vertex:s1,worldpos_vertex:r1,background_vert:o1,background_frag:l1,backgroundCube_vert:c1,backgroundCube_frag:u1,cube_vert:f1,cube_frag:d1,depth_vert:h1,depth_frag:p1,distance_vert:m1,distance_frag:g1,equirect_vert:_1,equirect_frag:v1,linedashed_vert:x1,linedashed_frag:y1,meshbasic_vert:S1,meshbasic_frag:M1,meshlambert_vert:E1,meshlambert_frag:b1,meshmatcap_vert:T1,meshmatcap_frag:A1,meshnormal_vert:R1,meshnormal_frag:C1,meshphong_vert:w1,meshphong_frag:D1,meshphysical_vert:U1,meshphysical_frag:N1,meshtoon_vert:L1,meshtoon_frag:O1,points_vert:P1,points_frag:z1,shadow_vert:I1,shadow_frag:F1,sprite_vert:B1,sprite_frag:G1},Pe={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},ki={basic:{uniforms:Bn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Bn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Bn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Bn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Bn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Bn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Bn([Pe.points,Pe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Bn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Bn([Pe.common,Pe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Bn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Bn([Pe.sprite,Pe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:Bn([Pe.common,Pe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:Bn([Pe.lights,Pe.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};ki.physical={uniforms:Bn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Nc={r:0,b:0,g:0},H1=new ln,Pv=new st;Pv.set(-1,0,0,0,1,0,0,0,1);function V1(r,e,i,s,l,c){const d=new Et(0);let p=l===!0?0:1,m,h,x=null,y=0,g=null;function S(O){let I=O.isScene===!0?O.background:null;if(I&&I.isTexture){const T=O.backgroundBlurriness>0;I=e.get(I,T)}return I}function A(O){let I=!1;const T=S(O);T===null?M(d,p):T&&T.isColor&&(M(T,1),I=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function L(O,I){const T=S(I);T&&(T.isCubeTexture||T.mapping===jc)?(h===void 0&&(h=new Zn(new Xr(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Vr(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,U,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=T,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(H1.makeRotationFromEuler(I.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Pv),h.material.toneMapped=St.getTransfer(T.colorSpace)!==Ft,(x!==T||y!==T.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,x=T,y=T.version,g=r.toneMapping),h.layers.enableAll(),O.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(m===void 0&&(m=new Zn(new Zc(2,2),new Ki({name:"BackgroundMaterial",uniforms:Vr(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=T,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.toneMapped=St.getTransfer(T.colorSpace)!==Ft,T.matrixAutoUpdate===!0&&T.updateMatrix(),m.material.uniforms.uvTransform.value.copy(T.matrix),(x!==T||y!==T.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,x=T,y=T.version,g=r.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function M(O,I){O.getRGB(Nc,Uv(r)),i.buffers.color.setClear(Nc.r,Nc.g,Nc.b,I,c)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,I=1){d.set(O),p=I,M(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,M(d,p)},render:A,addToRenderList:L,dispose:v}}function k1(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function p(k,q,ce,pe,Q){let B=!1;const H=y(k,pe,ce,q);c!==H&&(c=H,h(c.object)),B=S(k,pe,ce,Q),B&&A(k,pe,ce,Q),Q!==null&&e.update(Q,r.ELEMENT_ARRAY_BUFFER),(B||d)&&(d=!1,T(k,q,ce,pe),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function m(){return r.createVertexArray()}function h(k){return r.bindVertexArray(k)}function x(k){return r.deleteVertexArray(k)}function y(k,q,ce,pe){const Q=pe.wireframe===!0;let B=s[q.id];B===void 0&&(B={},s[q.id]=B);const H=k.isInstancedMesh===!0?k.id:0;let ee=B[H];ee===void 0&&(ee={},B[H]=ee);let _e=ee[ce.id];_e===void 0&&(_e={},ee[ce.id]=_e);let be=_e[Q];return be===void 0&&(be=g(m()),_e[Q]=be),be}function g(k){const q=[],ce=[],pe=[];for(let Q=0;Q<i;Q++)q[Q]=0,ce[Q]=0,pe[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ce,attributeDivisors:pe,object:k,attributes:{},index:null}}function S(k,q,ce,pe){const Q=c.attributes,B=q.attributes;let H=0;const ee=ce.getAttributes();for(const _e in ee)if(ee[_e].location>=0){const w=Q[_e];let X=B[_e];if(X===void 0&&(_e==="instanceMatrix"&&k.instanceMatrix&&(X=k.instanceMatrix),_e==="instanceColor"&&k.instanceColor&&(X=k.instanceColor)),w===void 0||w.attribute!==X||X&&w.data!==X.data)return!0;H++}return c.attributesNum!==H||c.index!==pe}function A(k,q,ce,pe){const Q={},B=q.attributes;let H=0;const ee=ce.getAttributes();for(const _e in ee)if(ee[_e].location>=0){let w=B[_e];w===void 0&&(_e==="instanceMatrix"&&k.instanceMatrix&&(w=k.instanceMatrix),_e==="instanceColor"&&k.instanceColor&&(w=k.instanceColor));const X={};X.attribute=w,w&&w.data&&(X.data=w.data),Q[_e]=X,H++}c.attributes=Q,c.attributesNum=H,c.index=pe}function L(){const k=c.newAttributes;for(let q=0,ce=k.length;q<ce;q++)k[q]=0}function M(k){v(k,0)}function v(k,q){const ce=c.newAttributes,pe=c.enabledAttributes,Q=c.attributeDivisors;ce[k]=1,pe[k]===0&&(r.enableVertexAttribArray(k),pe[k]=1),Q[k]!==q&&(r.vertexAttribDivisor(k,q),Q[k]=q)}function O(){const k=c.newAttributes,q=c.enabledAttributes;for(let ce=0,pe=q.length;ce<pe;ce++)q[ce]!==k[ce]&&(r.disableVertexAttribArray(ce),q[ce]=0)}function I(k,q,ce,pe,Q,B,H){H===!0?r.vertexAttribIPointer(k,q,ce,Q,B):r.vertexAttribPointer(k,q,ce,pe,Q,B)}function T(k,q,ce,pe){L();const Q=pe.attributes,B=ce.getAttributes(),H=q.defaultAttributeValues;for(const ee in B){const _e=B[ee];if(_e.location>=0){let be=Q[ee];if(be===void 0&&(ee==="instanceMatrix"&&k.instanceMatrix&&(be=k.instanceMatrix),ee==="instanceColor"&&k.instanceColor&&(be=k.instanceColor)),be!==void 0){const w=be.normalized,X=be.itemSize,me=e.get(be);if(me===void 0)continue;const Ce=me.buffer,ze=me.type,se=me.bytesPerElement,Se=ze===r.INT||ze===r.UNSIGNED_INT||be.gpuType===Bh;if(be.isInterleavedBufferAttribute){const Ee=be.data,Ge=Ee.stride,tt=be.offset;if(Ee.isInstancedInterleavedBuffer){for(let Ke=0;Ke<_e.locationSize;Ke++)v(_e.location+Ke,Ee.meshPerAttribute);k.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Ke=0;Ke<_e.locationSize;Ke++)M(_e.location+Ke);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let Ke=0;Ke<_e.locationSize;Ke++)I(_e.location+Ke,X/_e.locationSize,ze,w,Ge*se,(tt+X/_e.locationSize*Ke)*se,Se)}else{if(be.isInstancedBufferAttribute){for(let Ee=0;Ee<_e.locationSize;Ee++)v(_e.location+Ee,be.meshPerAttribute);k.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Ee=0;Ee<_e.locationSize;Ee++)M(_e.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let Ee=0;Ee<_e.locationSize;Ee++)I(_e.location+Ee,X/_e.locationSize,ze,w,X*se,X/_e.locationSize*Ee*se,Se)}}else if(H!==void 0){const w=H[ee];if(w!==void 0)switch(w.length){case 2:r.vertexAttrib2fv(_e.location,w);break;case 3:r.vertexAttrib3fv(_e.location,w);break;case 4:r.vertexAttrib4fv(_e.location,w);break;default:r.vertexAttrib1fv(_e.location,w)}}}}O()}function N(){D();for(const k in s){const q=s[k];for(const ce in q){const pe=q[ce];for(const Q in pe){const B=pe[Q];for(const H in B)x(B[H].object),delete B[H];delete pe[Q]}}delete s[k]}}function U(k){if(s[k.id]===void 0)return;const q=s[k.id];for(const ce in q){const pe=q[ce];for(const Q in pe){const B=pe[Q];for(const H in B)x(B[H].object),delete B[H];delete pe[Q]}}delete s[k.id]}function z(k){for(const q in s){const ce=s[q];for(const pe in ce){const Q=ce[pe];if(Q[k.id]===void 0)continue;const B=Q[k.id];for(const H in B)x(B[H].object),delete B[H];delete Q[k.id]}}}function b(k){for(const q in s){const ce=s[q],pe=k.isInstancedMesh===!0?k.id:0,Q=ce[pe];if(Q!==void 0){for(const B in Q){const H=Q[B];for(const ee in H)x(H[ee].object),delete H[ee];delete Q[B]}delete ce[pe],Object.keys(ce).length===0&&delete s[q]}}}function D(){V(),d=!0,c!==l&&(c=l,h(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:D,resetDefaultState:V,dispose:N,releaseStatesOfGeometry:U,releaseStatesOfObject:b,releaseStatesOfProgram:z,initAttributes:L,enableAttribute:M,disableUnusedAttributes:O}}function X1(r,e,i){let s;function l(m){s=m}function c(m,h){r.drawArrays(s,m,h),i.update(h,s,1)}function d(m,h,x){x!==0&&(r.drawArraysInstanced(s,m,h,x),i.update(h,s,x))}function p(m,h,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,h,0,x);let g=0;for(let S=0;S<x;S++)g+=h[S];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p}function W1(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Oi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const b=z===Ta&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==hi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Xi&&!b)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const x=m(h);x!==h&&(nt("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const y=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),I=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),N=r.getParameter(r.MAX_SAMPLES),U=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:y,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:A,maxTextureSize:L,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:O,maxVaryings:I,maxFragmentUniforms:T,maxSamples:N,samples:U}}function q1(r){const e=this;let i=null,s=0,l=!1,c=!1;const d=new Ps,p=new st,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const S=y.length!==0||g||s!==0||l;return l=g,s=y.length,S},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,g){i=x(y,g,0)},this.setState=function(y,g,S){const A=y.clippingPlanes,L=y.clipIntersection,M=y.clipShadows,v=r.get(y);if(!l||A===null||A.length===0||c&&!M)c?x(null):h();else{const O=c?0:s,I=O*4;let T=v.clippingState||null;m.value=T,T=x(A,g,I,S);for(let N=0;N!==I;++N)T[N]=i[N];v.clippingState=T,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=O}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(y,g,S,A){const L=y!==null?y.length:0;let M=null;if(L!==0){if(M=m.value,A!==!0||M===null){const v=S+L*4,O=g.matrixWorldInverse;p.getNormalMatrix(O),(M===null||M.length<v)&&(M=new Float32Array(v));for(let I=0,T=S;I!==L;++I,T+=4)d.copy(y[I]).applyMatrix4(O,p),d.normal.toArray(M,T),M[T+3]=d.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=L,e.numIntersection=0,M}}const ls=4,R_=[.125,.215,.35,.446,.526,.582],Is=20,Y1=256,Xo=new ep,C_=new Et;let Id=null,Fd=0,Bd=0,Gd=!1;const j1=new $;class w_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:p=j1}=c;Id=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),Gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=N_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=U_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Id,Fd,Bd),this._renderer.xr.enabled=Gd,e.scissorTest=!1,Pr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Hs||e.mapping===Gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Id=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),Gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:Ta,format:Oi,colorSpace:kc,depthBuffer:!1},l=D_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=D_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Z1(c)),this._blurMaterial=Q1(c,e,i),this._ggxMaterial=K1(c,e,i)}return l}_compileMaterial(e){const i=new Zn(new Ei,e);this._renderer.compile(i,Xo)}_sceneToCubeUV(e,i,s,l,c){const m=new di(90,1,i,s),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],y=this._renderer,g=y.autoClear,S=y.toneMapping;y.getClearColor(C_),y.toneMapping=qi,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(l),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zn(new Xr,new Cv({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const L=this._backgroundBox,M=L.material;let v=!1;const O=e.background;O?O.isColor&&(M.color.copy(O),e.background=null,v=!0):(M.color.copy(C_),v=!0);for(let I=0;I<6;I++){const T=I%3;T===0?(m.up.set(0,h[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[I],c.y,c.z)):T===1?(m.up.set(0,0,h[I]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[I],c.z)):(m.up.set(0,h[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[I]));const N=this._cubeSize;Pr(l,T*N,I>2?N:0,N,N),y.setRenderTarget(l),v&&y.render(L,m),y.render(e,m)}y.toneMapping=S,y.autoClear=g,e.background=O}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Hs||e.mapping===Gr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=N_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=U_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Pr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Xo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),y=Math.sqrt(h*h-x*x),g=0+h*1.25,S=y*g,{_lodMax:A}=this,L=this._sizeLods[s],M=3*L*(s>A-ls?s-A+ls:0),v=4*(this._cubeSize-L);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=A-i,Pr(c,M,v,3*L,2*L),l.setRenderTarget(c),l.render(p,Xo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-s,Pr(e,M,v,3*L,2*L),l.setRenderTarget(e),l.render(p,Xo)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&bt("blur direction must be either latitudinal or longitudinal!");const x=3,y=this._lodMeshes[l];y.material=h;const g=h.uniforms,S=this._sizeLods[s]-1,A=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Is-1),L=c/A,M=isFinite(c)?1+Math.floor(x*L):Is;M>Is&&nt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Is}`);const v=[];let O=0;for(let z=0;z<Is;++z){const b=z/L,D=Math.exp(-b*b/2);v.push(D),z===0?O+=D:z<M&&(O+=2*D)}for(let z=0;z<v.length;z++)v[z]=v[z]/O;g.envMap.value=e.texture,g.samples.value=M,g.weights.value=v,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:I}=this;g.dTheta.value=A,g.mipInt.value=I-s;const T=this._sizeLods[l],N=3*T*(l>I-ls?l-I+ls:0),U=4*(this._cubeSize-T);Pr(i,N,U,3*T,2*T),m.setRenderTarget(i),m.render(y,Xo)}}function Z1(r){const e=[],i=[],s=[];let l=r;const c=r-ls+1+R_.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>r-ls?m=R_[d-r+ls-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),x=-h,y=1+h,g=[x,x,y,x,y,y,x,x,y,y,x,y],S=6,A=6,L=3,M=2,v=1,O=new Float32Array(L*A*S),I=new Float32Array(M*A*S),T=new Float32Array(v*A*S);for(let U=0;U<S;U++){const z=U%3*2/3-1,b=U>2?0:-1,D=[z,b,0,z+2/3,b,0,z+2/3,b+1,0,z,b,0,z+2/3,b+1,0,z,b+1,0];O.set(D,L*A*U),I.set(g,M*A*U);const V=[U,U,U,U,U,U];T.set(V,v*A*U)}const N=new Ei;N.setAttribute("position",new ji(O,L)),N.setAttribute("uv",new ji(I,M)),N.setAttribute("faceIndex",new ji(T,v)),s.push(new Zn(N,null)),l>ls&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function D_(r,e,i){const s=new Yi(r,e,i);return s.texture.mapping=jc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Pr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function K1(r,e,i){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Y1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function Q1(r,e,i){const s=new Float32Array(Is),l=new $(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function U_(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function N_(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function Kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class zv extends Yi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new wv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Xr(5,5,5),c=new Ki({name:"CubemapFromEquirect",uniforms:Vr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:Ea});c.uniforms.tEquirect.value=i;const d=new Zn(l,c),p=i.minFilter;return i.minFilter===Bs&&(i.minFilter=In),new nE(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}function J1(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,S=!1){return g==null?null:S?d(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===cd||S===ud)if(e.has(g)){const A=e.get(g).texture;return p(A,g.mapping)}else{const A=g.image;if(A&&A.height>0){const L=new zv(A.height);return L.fromEquirectangularTexture(r,g),e.set(g,L),g.addEventListener("dispose",h),p(L.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const S=g.mapping,A=S===cd||S===ud,L=S===Hs||S===Gr;if(A||L){let M=i.get(g);const v=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return s===null&&(s=new w_(r)),M=A?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const O=g.image;return A&&O&&O.height>0||L&&O&&m(O)?(s===null&&(s=new w_(r)),M=A?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",x),M.texture):null}}}return g}function p(g,S){return S===cd?g.mapping=Hs:S===ud&&(g.mapping=Gr),g}function m(g){let S=0;const A=6;for(let L=0;L<A;L++)g[L]!==void 0&&S++;return S===A}function h(g){const S=g.target;S.removeEventListener("dispose",h);const A=e.get(S);A!==void 0&&(e.delete(S),A.dispose())}function x(g){const S=g.target;S.removeEventListener("dispose",x);const A=i.get(S);A!==void 0&&(i.delete(S),A.dispose())}function y(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:y}}function $1(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Ir("WebGLRenderer: "+s+" extension not supported."),l}}}function eT(r,e,i,s){const l={},c=new WeakMap;function d(y){const g=y.target;g.index!==null&&e.remove(g.index);for(const A in g.attributes)e.remove(g.attributes[A]);g.removeEventListener("dispose",d),delete l[g.id];const S=c.get(g);S&&(e.remove(S),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(y,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(y){const g=y.attributes;for(const S in g)e.update(g[S],r.ARRAY_BUFFER)}function h(y){const g=[],S=y.index,A=y.attributes.position;let L=0;if(A===void 0)return;if(S!==null){const O=S.array;L=S.version;for(let I=0,T=O.length;I<T;I+=3){const N=O[I+0],U=O[I+1],z=O[I+2];g.push(N,U,U,z,z,N)}}else{const O=A.array;L=A.version;for(let I=0,T=O.length/3-1;I<T;I+=3){const N=I+0,U=I+1,z=I+2;g.push(N,U,U,z,z,N)}}const M=new(A.count>=65535?Rv:Av)(g,1);M.version=L;const v=c.get(y);v&&e.remove(v),c.set(y,M)}function x(y){const g=c.get(y);if(g){const S=y.index;S!==null&&g.version<S.version&&h(y)}else h(y);return c.get(y)}return{get:p,update:m,getWireframeAttribute:x}}function tT(r,e,i){let s;function l(y){s=y}let c,d;function p(y){c=y.type,d=y.bytesPerElement}function m(y,g){r.drawElements(s,g,c,y*d),i.update(g,s,1)}function h(y,g,S){S!==0&&(r.drawElementsInstanced(s,g,c,y*d,S),i.update(g,s,S))}function x(y,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,y,0,S);let L=0;for(let M=0;M<S;M++)L+=g[M];i.update(L,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=x}function nT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,p){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:bt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function iT(r,e,i){const s=new WeakMap,l=new en;function c(d,p,m){const h=d.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,y=x!==void 0?x.length:0;let g=s.get(p);if(g===void 0||g.count!==y){let V=function(){b.dispose(),s.delete(p),p.removeEventListener("dispose",V)};var S=V;g!==void 0&&g.texture.dispose();const A=p.morphAttributes.position!==void 0,L=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],O=p.morphAttributes.normal||[],I=p.morphAttributes.color||[];let T=0;A===!0&&(T=1),L===!0&&(T=2),M===!0&&(T=3);let N=p.attributes.position.count*T,U=1;N>e.maxTextureSize&&(U=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const z=new Float32Array(N*U*4*y),b=new Ev(z,N,U,y);b.type=Xi,b.needsUpdate=!0;const D=T*4;for(let k=0;k<y;k++){const q=v[k],ce=O[k],pe=I[k],Q=N*U*4*k;for(let B=0;B<q.count;B++){const H=B*D;A===!0&&(l.fromBufferAttribute(q,B),z[Q+H+0]=l.x,z[Q+H+1]=l.y,z[Q+H+2]=l.z,z[Q+H+3]=0),L===!0&&(l.fromBufferAttribute(ce,B),z[Q+H+4]=l.x,z[Q+H+5]=l.y,z[Q+H+6]=l.z,z[Q+H+7]=0),M===!0&&(l.fromBufferAttribute(pe,B),z[Q+H+8]=l.x,z[Q+H+9]=l.y,z[Q+H+10]=l.z,z[Q+H+11]=pe.itemSize===4?l.w:1)}}g={count:y,texture:b,size:new ft(N,U)},s.set(p,g),p.addEventListener("dispose",V)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let A=0;for(let M=0;M<h.length;M++)A+=h[M];const L=p.morphTargetsRelative?1:1-A;m.getUniforms().setValue(r,"morphTargetBaseInfluence",L),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function aT(r,e,i,s,l){let c=new WeakMap;function d(h){const x=l.render.frame,y=h.geometry,g=e.get(h,y);if(c.get(g)!==x&&(e.update(g),c.set(g,x)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==x&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,x))),h.isSkinnedMesh){const S=h.skeleton;c.get(S)!==x&&(S.update(),c.set(S,x))}return g}function p(){c=new WeakMap}function m(h){const x=h.target;x.removeEventListener("dispose",m),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:p}}const sT={[ov]:"LINEAR_TONE_MAPPING",[lv]:"REINHARD_TONE_MAPPING",[cv]:"CINEON_TONE_MAPPING",[uv]:"ACES_FILMIC_TONE_MAPPING",[dv]:"AGX_TONE_MAPPING",[hv]:"NEUTRAL_TONE_MAPPING",[fv]:"CUSTOM_TONE_MAPPING"};function rT(r,e,i,s,l,c){const d=new Yi(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new Hr(e,i):void 0}),p=new Yi(e,i,{type:Ta,depthBuffer:!1,stencilBuffer:!1}),m=new Ei;m.setAttribute("position",new Tn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Tn([0,2,0,0,2,0],2));const h=new jM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),x=new Zn(m,h),y=new ep(-1,1,1,-1,0,1);let g=null,S=null,A=!1,L,M=null,v=[],O=!1;this.setSize=function(I,T){d.setSize(I,T),p.setSize(I,T);for(let N=0;N<v.length;N++){const U=v[N];U.setSize&&U.setSize(I,T)}},this.setEffects=function(I){v=I,O=v.length>0&&v[0].isRenderPass===!0;const T=d.width,N=d.height;for(let U=0;U<v.length;U++){const z=v[U];z.setSize&&z.setSize(T,N)}},this.begin=function(I,T){if(A||I.toneMapping===qi&&v.length===0)return!1;if(M=T,T!==null){const N=T.width,U=T.height;(d.width!==N||d.height!==U)&&this.setSize(N,U)}return O===!1&&I.setRenderTarget(d),L=I.toneMapping,I.toneMapping=qi,!0},this.hasRenderPass=function(){return O},this.end=function(I,T){I.toneMapping=L,A=!0;let N=d,U=p;for(let z=0;z<v.length;z++){const b=v[z];if(b.enabled!==!1&&(b.render(I,U,N,T),b.needsSwap!==!1)){const D=N;N=U,U=D}}if(g!==I.outputColorSpace||S!==I.toneMapping){g=I.outputColorSpace,S=I.toneMapping,h.defines={},St.getTransfer(g)===Ft&&(h.defines.SRGB_TRANSFER="");const z=sT[S];z&&(h.defines[z]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=N.texture,I.setRenderTarget(M),I.render(x,y),M=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){d.depthTexture&&d.depthTexture.dispose(),d.dispose(),p.dispose(),m.dispose(),h.dispose()}}const Iv=new Gn,Lh=new Hr(1,1),Fv=new Ev,Bv=new bM,Gv=new wv,L_=[],O_=[],P_=new Float32Array(16),z_=new Float32Array(9),I_=new Float32Array(4);function Wr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=L_[l];if(c===void 0&&(c=new Float32Array(l),L_[l]=c),e!==0){s.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=i,r[d].toArray(c,p)}return c}function Sn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Mn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function Qc(r,e){let i=O_[e];i===void 0&&(i=new Int32Array(e),O_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function oT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function lT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;r.uniform2fv(this.addr,e),Mn(i,e)}}function cT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;r.uniform3fv(this.addr,e),Mn(i,e)}}function uT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;r.uniform4fv(this.addr,e),Mn(i,e)}}function fT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,s))return;I_.set(s),r.uniformMatrix2fv(this.addr,!1,I_),Mn(i,s)}}function dT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,s))return;z_.set(s),r.uniformMatrix3fv(this.addr,!1,z_),Mn(i,s)}}function hT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,s))return;P_.set(s),r.uniformMatrix4fv(this.addr,!1,P_),Mn(i,s)}}function pT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function mT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;r.uniform2iv(this.addr,e),Mn(i,e)}}function gT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;r.uniform3iv(this.addr,e),Mn(i,e)}}function _T(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;r.uniform4iv(this.addr,e),Mn(i,e)}}function vT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function xT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;r.uniform2uiv(this.addr,e),Mn(i,e)}}function yT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;r.uniform3uiv(this.addr,e),Mn(i,e)}}function ST(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;r.uniform4uiv(this.addr,e),Mn(i,e)}}function MT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Lh.compareFunction=i.isReversedDepthBuffer()?qh:Wh,c=Lh):c=Iv,i.setTexture2D(e||c,l)}function ET(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Bv,l)}function bT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Gv,l)}function TT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Fv,l)}function AT(r){switch(r){case 5126:return oT;case 35664:return lT;case 35665:return cT;case 35666:return uT;case 35674:return fT;case 35675:return dT;case 35676:return hT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return gT;case 35669:case 35673:return _T;case 5125:return vT;case 36294:return xT;case 36295:return yT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return MT;case 35679:case 36299:case 36307:return ET;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return TT}}function RT(r,e){r.uniform1fv(this.addr,e)}function CT(r,e){const i=Wr(e,this.size,2);r.uniform2fv(this.addr,i)}function wT(r,e){const i=Wr(e,this.size,3);r.uniform3fv(this.addr,i)}function DT(r,e){const i=Wr(e,this.size,4);r.uniform4fv(this.addr,i)}function UT(r,e){const i=Wr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function NT(r,e){const i=Wr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function LT(r,e){const i=Wr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function OT(r,e){r.uniform1iv(this.addr,e)}function PT(r,e){r.uniform2iv(this.addr,e)}function zT(r,e){r.uniform3iv(this.addr,e)}function IT(r,e){r.uniform4iv(this.addr,e)}function FT(r,e){r.uniform1uiv(this.addr,e)}function BT(r,e){r.uniform2uiv(this.addr,e)}function GT(r,e){r.uniform3uiv(this.addr,e)}function HT(r,e){r.uniform4uiv(this.addr,e)}function VT(r,e,i){const s=this.cache,l=e.length,c=Qc(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=Lh:d=Iv;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,c[p])}function kT(r,e,i){const s=this.cache,l=e.length,c=Qc(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Bv,c[d])}function XT(r,e,i){const s=this.cache,l=e.length,c=Qc(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Gv,c[d])}function WT(r,e,i){const s=this.cache,l=e.length,c=Qc(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Fv,c[d])}function qT(r){switch(r){case 5126:return RT;case 35664:return CT;case 35665:return wT;case 35666:return DT;case 35674:return UT;case 35675:return NT;case 35676:return LT;case 5124:case 35670:return OT;case 35667:case 35671:return PT;case 35668:case 35672:return zT;case 35669:case 35673:return IT;case 5125:return FT;case 36294:return BT;case 36295:return GT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return XT;case 36289:case 36303:case 36311:case 36292:return WT}}class YT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=AT(i.type)}}class jT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=qT(i.type)}}class ZT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const Hd=/(\w+)(\])?(\[|\.)?/g;function F_(r,e){r.seq.push(e),r.map[e.id]=e}function KT(r,e,i){const s=r.name,l=s.length;for(Hd.lastIndex=0;;){const c=Hd.exec(s),d=Hd.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){F_(i,h===void 0?new YT(p,r,e):new jT(p,r,e));break}else{let y=i.map[p];y===void 0&&(y=new ZT(p),F_(i,y)),i=y}}}class Gc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);KT(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function B_(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const QT=37297;let JT=0;function $T(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const p=d+1;s.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const G_=new st;function eA(r){St._getMatrix(G_,St.workingColorSpace,r);const e=`mat3( ${G_.elements.map(i=>i.toFixed(4))} )`;switch(St.getTransfer(r)){case Xc:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function H_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+$T(r.getShaderSource(e),p)}else return c}function tA(r,e){const i=eA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const nA={[ov]:"Linear",[lv]:"Reinhard",[cv]:"Cineon",[uv]:"ACESFilmic",[dv]:"AgX",[hv]:"Neutral",[fv]:"Custom"};function iA(r,e){const i=nA[e];return i===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Lc=new $;function aA(){St.getLuminanceCoefficients(Lc);const r=Lc.x.toFixed(4),e=Lc.y.toFixed(4),i=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function rA(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function oA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),d=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:r.getAttribLocation(e,d),locationSize:p}}return i}function jo(r){return r!==""}function V_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function k_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oh(r){return r.replace(lA,uA)}const cA=new Map;function uA(r,e){let i=ct[e];if(i===void 0){const s=cA.get(e);if(s!==void 0)i=ct[s],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Oh(i)}const fA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function X_(r){return r.replace(fA,dA)}function dA(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function W_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const hA={[Pc]:"SHADOWMAP_TYPE_PCF",[qo]:"SHADOWMAP_TYPE_VSM"};function pA(r){return hA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mA={[Hs]:"ENVMAP_TYPE_CUBE",[Gr]:"ENVMAP_TYPE_CUBE",[jc]:"ENVMAP_TYPE_CUBE_UV"};function gA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":mA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const _A={[Gr]:"ENVMAP_MODE_REFRACTION"};function vA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":_A[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xA={[rv]:"ENVMAP_BLENDING_MULTIPLY",[iM]:"ENVMAP_BLENDING_MIX",[aM]:"ENVMAP_BLENDING_ADD"};function yA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":xA[r.combine]||"ENVMAP_BLENDING_NONE"}function SA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function MA(r,e,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=pA(i),h=gA(i),x=vA(i),y=yA(i),g=SA(i),S=sA(i),A=rA(c),L=l.createProgram();let M,v,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(jo).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(jo).join(`
`),v.length>0&&(v+=`
`)):(M=[W_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),v=[W_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+x:"",i.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qi?"#define TONE_MAPPING":"",i.toneMapping!==qi?ct.tonemapping_pars_fragment:"",i.toneMapping!==qi?iA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,tA("linearToOutputTexel",i.outputColorSpace),aA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(jo).join(`
`)),d=Oh(d),d=V_(d,i),d=k_(d,i),p=Oh(p),p=V_(p,i),p=k_(p,i),d=X_(d),p=X_(p),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===i_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===i_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const I=O+M+d,T=O+v+p,N=B_(l,l.VERTEX_SHADER,I),U=B_(l,l.FRAGMENT_SHADER,T);l.attachShader(L,N),l.attachShader(L,U),i.index0AttributeName!==void 0?l.bindAttribLocation(L,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(L,0,"position"),l.linkProgram(L);function z(k){if(r.debug.checkShaderErrors){const q=l.getProgramInfoLog(L)||"",ce=l.getShaderInfoLog(N)||"",pe=l.getShaderInfoLog(U)||"",Q=q.trim(),B=ce.trim(),H=pe.trim();let ee=!0,_e=!0;if(l.getProgramParameter(L,l.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,L,N,U);else{const be=H_(l,N,"vertex"),w=H_(l,U,"fragment");bt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(L,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+Q+`
`+be+`
`+w)}else Q!==""?nt("WebGLProgram: Program Info Log:",Q):(B===""||H==="")&&(_e=!1);_e&&(k.diagnostics={runnable:ee,programLog:Q,vertexShader:{log:B,prefix:M},fragmentShader:{log:H,prefix:v}})}l.deleteShader(N),l.deleteShader(U),b=new Gc(l,L),D=oA(l,L)}let b;this.getUniforms=function(){return b===void 0&&z(this),b};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let V=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=l.getProgramParameter(L,QT)),V},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(L),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=JT++,this.cacheKey=e,this.usedTimes=1,this.program=L,this.vertexShader=N,this.fragmentShader=U,this}let EA=0;class bA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new TA(e),i.set(e,s)),s}}class TA{constructor(e){this.id=EA++,this.code=e,this.usedTimes=0}}function AA(r){return r===Vs||r===Hc||r===Vc}function RA(r,e,i,s,l,c){const d=new bv,p=new bA,m=new Set,h=[],x=new Map,y=s.logarithmicDepthBuffer;let g=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(b){return m.add(b),b===0?"uv":`uv${b}`}function L(b,D,V,k,q,ce){const pe=k.fog,Q=q.geometry,B=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?k.environment:null,H=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,ee=e.get(b.envMap||B,H),_e=ee&&ee.mapping===jc?ee.image.height:null,be=S[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&nt("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const w=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,X=w!==void 0?w.length:0;let me=0;Q.morphAttributes.position!==void 0&&(me=1),Q.morphAttributes.normal!==void 0&&(me=2),Q.morphAttributes.color!==void 0&&(me=3);let Ce,ze,se,Se;if(be){const Ve=ki[be];Ce=Ve.vertexShader,ze=Ve.fragmentShader}else{Ce=b.vertexShader,ze=b.fragmentShader;const Ve=p.getVertexShaderStage(b),Kt=p.getFragmentShaderStage(b);p.update(b,Ve,Kt),se=Ve.id,Se=Kt.id}const Ee=r.getRenderTarget(),Ge=r.state.buffers.depth.getReversed(),tt=q.isInstancedMesh===!0,Ke=q.isBatchedMesh===!0,Yt=!!b.map,ut=!!b.matcap,vt=!!ee,xt=!!b.aoMap,dt=!!b.lightMap,tn=!!b.bumpMap&&b.wireframe===!1,nn=!!b.normalMap,an=!!b.displacementMap,cn=!!b.emissiveMap,Wt=!!b.metalnessMap,sn=!!b.roughnessMap,Z=b.anisotropy>0,Bt=b.clearcoat>0,Ct=b.dispersion>0,P=b.iridescence>0,E=b.sheen>0,J=b.transmission>0,re=Z&&!!b.anisotropyMap,de=Bt&&!!b.clearcoatMap,Te=Bt&&!!b.clearcoatNormalMap,De=Bt&&!!b.clearcoatRoughnessMap,fe=P&&!!b.iridescenceMap,he=P&&!!b.iridescenceThicknessMap,Re=E&&!!b.sheenColorMap,Fe=E&&!!b.sheenRoughnessMap,Le=!!b.specularMap,Ue=!!b.specularColorMap,Ze=!!b.specularIntensityMap,Qe=J&&!!b.transmissionMap,it=J&&!!b.thicknessMap,Y=!!b.gradientMap,Ae=!!b.alphaMap,ve=b.alphaTest>0,we=!!b.alphaHash,Ie=!!b.extensions;let Me=qi;b.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Me=r.toneMapping);const qe={shaderID:be,shaderType:b.type,shaderName:b.name,vertexShader:Ce,fragmentShader:ze,defines:b.defines,customVertexShaderID:se,customFragmentShaderID:Se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Ke,batchingColor:Ke&&q._colorsTexture!==null,instancing:tt,instancingColor:tt&&q.instanceColor!==null,instancingMorph:tt&&q.morphTexture!==null,outputColorSpace:Ee===null?r.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:St.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Yt,matcap:ut,envMap:vt,envMapMode:vt&&ee.mapping,envMapCubeUVHeight:_e,aoMap:xt,lightMap:dt,bumpMap:tn,normalMap:nn,displacementMap:an,emissiveMap:cn,normalMapObjectSpace:nn&&b.normalMapType===oM,normalMapTangentSpace:nn&&b.normalMapType===Uh,packedNormalMap:nn&&b.normalMapType===Uh&&AA(b.normalMap.format),metalnessMap:Wt,roughnessMap:sn,anisotropy:Z,anisotropyMap:re,clearcoat:Bt,clearcoatMap:de,clearcoatNormalMap:Te,clearcoatRoughnessMap:De,dispersion:Ct,iridescence:P,iridescenceMap:fe,iridescenceThicknessMap:he,sheen:E,sheenColorMap:Re,sheenRoughnessMap:Fe,specularMap:Le,specularColorMap:Ue,specularIntensityMap:Ze,transmission:J,transmissionMap:Qe,thicknessMap:it,gradientMap:Y,opaque:b.transparent===!1&&b.blending===zr&&b.alphaToCoverage===!1,alphaMap:Ae,alphaTest:ve,alphaHash:we,combine:b.combine,mapUv:Yt&&A(b.map.channel),aoMapUv:xt&&A(b.aoMap.channel),lightMapUv:dt&&A(b.lightMap.channel),bumpMapUv:tn&&A(b.bumpMap.channel),normalMapUv:nn&&A(b.normalMap.channel),displacementMapUv:an&&A(b.displacementMap.channel),emissiveMapUv:cn&&A(b.emissiveMap.channel),metalnessMapUv:Wt&&A(b.metalnessMap.channel),roughnessMapUv:sn&&A(b.roughnessMap.channel),anisotropyMapUv:re&&A(b.anisotropyMap.channel),clearcoatMapUv:de&&A(b.clearcoatMap.channel),clearcoatNormalMapUv:Te&&A(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&A(b.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&A(b.iridescenceMap.channel),iridescenceThicknessMapUv:he&&A(b.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&A(b.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&A(b.sheenRoughnessMap.channel),specularMapUv:Le&&A(b.specularMap.channel),specularColorMapUv:Ue&&A(b.specularColorMap.channel),specularIntensityMapUv:Ze&&A(b.specularIntensityMap.channel),transmissionMapUv:Qe&&A(b.transmissionMap.channel),thicknessMapUv:it&&A(b.thicknessMap.channel),alphaMapUv:Ae&&A(b.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(nn||Z),vertexNormals:!!Q.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!Q.attributes.uv&&(Yt||Ae),fog:!!pe,useFog:b.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||Q.attributes.normal===void 0&&nn===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Ge,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:me,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:Me,decodeVideoTexture:Yt&&b.map.isVideoTexture===!0&&St.getTransfer(b.map.colorSpace)===Ft,decodeVideoTextureEmissive:cn&&b.emissiveMap.isVideoTexture===!0&&St.getTransfer(b.emissiveMap.colorSpace)===Ft,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Sa,flipSided:b.side===Kn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ie&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&b.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return qe.vertexUv1s=m.has(1),qe.vertexUv2s=m.has(2),qe.vertexUv3s=m.has(3),m.clear(),qe}function M(b){const D=[];if(b.shaderID?D.push(b.shaderID):(D.push(b.customVertexShaderID),D.push(b.customFragmentShaderID)),b.defines!==void 0)for(const V in b.defines)D.push(V),D.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(v(D,b),O(D,b),D.push(r.outputColorSpace)),D.push(b.customProgramCacheKey),D.join()}function v(b,D){b.push(D.precision),b.push(D.outputColorSpace),b.push(D.envMapMode),b.push(D.envMapCubeUVHeight),b.push(D.mapUv),b.push(D.alphaMapUv),b.push(D.lightMapUv),b.push(D.aoMapUv),b.push(D.bumpMapUv),b.push(D.normalMapUv),b.push(D.displacementMapUv),b.push(D.emissiveMapUv),b.push(D.metalnessMapUv),b.push(D.roughnessMapUv),b.push(D.anisotropyMapUv),b.push(D.clearcoatMapUv),b.push(D.clearcoatNormalMapUv),b.push(D.clearcoatRoughnessMapUv),b.push(D.iridescenceMapUv),b.push(D.iridescenceThicknessMapUv),b.push(D.sheenColorMapUv),b.push(D.sheenRoughnessMapUv),b.push(D.specularMapUv),b.push(D.specularColorMapUv),b.push(D.specularIntensityMapUv),b.push(D.transmissionMapUv),b.push(D.thicknessMapUv),b.push(D.combine),b.push(D.fogExp2),b.push(D.sizeAttenuation),b.push(D.morphTargetsCount),b.push(D.morphAttributeCount),b.push(D.numDirLights),b.push(D.numPointLights),b.push(D.numSpotLights),b.push(D.numSpotLightMaps),b.push(D.numHemiLights),b.push(D.numRectAreaLights),b.push(D.numDirLightShadows),b.push(D.numPointLightShadows),b.push(D.numSpotLightShadows),b.push(D.numSpotLightShadowsWithMaps),b.push(D.numLightProbes),b.push(D.shadowMapType),b.push(D.toneMapping),b.push(D.numClippingPlanes),b.push(D.numClipIntersection),b.push(D.depthPacking)}function O(b,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),D.packedNormalMap&&d.enable(22),D.vertexNormals&&d.enable(23),b.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),D.numLightProbeGrids>0&&d.enable(22),D.hasPositionAttribute&&d.enable(23),b.push(d.mask)}function I(b){const D=S[b.type];let V;if(D){const k=ki[D];V=WM.clone(k.uniforms)}else V=b.uniforms;return V}function T(b,D){let V=x.get(D);return V!==void 0?++V.usedTimes:(V=new MA(r,D,b,l),h.push(V),x.set(D,V)),V}function N(b){if(--b.usedTimes===0){const D=h.indexOf(b);h[D]=h[h.length-1],h.pop(),x.delete(b.cacheKey),b.destroy()}}function U(b){p.remove(b)}function z(){p.dispose()}return{getParameters:L,getProgramCacheKey:M,getUniforms:I,acquireProgram:T,releaseProgram:N,releaseShaderCache:U,programs:h,dispose:z}}function CA(){let r=new WeakMap;function e(d){return r.has(d)}function i(d){let p=r.get(d);return p===void 0&&(p={},r.set(d,p)),p}function s(d){r.delete(d)}function l(d,p,m){r.get(d)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function wA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function q_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Y_(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function p(g,S,A,L,M,v){let O=r[e];return O===void 0?(O={id:g.id,object:g,geometry:S,material:A,materialVariant:d(g),groupOrder:L,renderOrder:g.renderOrder,z:M,group:v},r[e]=O):(O.id=g.id,O.object=g,O.geometry=S,O.material=A,O.materialVariant=d(g),O.groupOrder=L,O.renderOrder=g.renderOrder,O.z=M,O.group=v),e++,O}function m(g,S,A,L,M,v){const O=p(g,S,A,L,M,v);A.transmission>0?s.push(O):A.transparent===!0?l.push(O):i.push(O)}function h(g,S,A,L,M,v){const O=p(g,S,A,L,M,v);A.transmission>0?s.unshift(O):A.transparent===!0?l.unshift(O):i.unshift(O)}function x(g,S,A){i.length>1&&i.sort(g||wA),s.length>1&&s.sort(S||q_),l.length>1&&l.sort(S||q_),A&&(i.reverse(),s.reverse(),l.reverse())}function y(){for(let g=e,S=r.length;g<S;g++){const A=r[g];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:y,sort:x}}function DA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let d;return c===void 0?(d=new Y_,r.set(s,[d])):l>=c.length?(d=new Y_,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:e,dispose:i}}function UA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new $,color:new Et};break;case"SpotLight":i={position:new $,direction:new $,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new Et,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":i={color:new Et,position:new $,halfWidth:new $,halfHeight:new $};break}return r[e.id]=i,i}}}function NA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let LA=0;function OA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function PA(r){const e=new UA,i=NA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new $);const l=new $,c=new ln,d=new ln;function p(h){let x=0,y=0,g=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let S=0,A=0,L=0,M=0,v=0,O=0,I=0,T=0,N=0,U=0,z=0;h.sort(OA);for(let D=0,V=h.length;D<V;D++){const k=h[D],q=k.color,ce=k.intensity,pe=k.distance;let Q=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Vs?Q=k.shadow.map.texture:Q=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)x+=q.r*ce,y+=q.g*ce,g+=q.b*ce;else if(k.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(k.sh.coefficients[B],ce);z++}else if(k.isDirectionalLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const H=k.shadow,ee=i.get(k);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,s.directionalShadow[S]=ee,s.directionalShadowMap[S]=Q,s.directionalShadowMatrix[S]=k.shadow.matrix,O++}s.directional[S]=B,S++}else if(k.isSpotLight){const B=e.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(q).multiplyScalar(ce),B.distance=pe,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,s.spot[L]=B;const H=k.shadow;if(k.map&&(s.spotLightMap[N]=k.map,N++,H.updateMatrices(k),k.castShadow&&U++),s.spotLightMatrix[L]=H.matrix,k.castShadow){const ee=i.get(k);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,s.spotShadow[L]=ee,s.spotShadowMap[L]=Q,T++}L++}else if(k.isRectAreaLight){const B=e.get(k);B.color.copy(q).multiplyScalar(ce),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),s.rectArea[M]=B,M++}else if(k.isPointLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){const H=k.shadow,ee=i.get(k);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,ee.shadowCameraNear=H.camera.near,ee.shadowCameraFar=H.camera.far,s.pointShadow[A]=ee,s.pointShadowMap[A]=Q,s.pointShadowMatrix[A]=k.shadow.matrix,I++}s.point[A]=B,A++}else if(k.isHemisphereLight){const B=e.get(k);B.skyColor.copy(k.color).multiplyScalar(ce),B.groundColor.copy(k.groundColor).multiplyScalar(ce),s.hemi[v]=B,v++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=y,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==S||b.pointLength!==A||b.spotLength!==L||b.rectAreaLength!==M||b.hemiLength!==v||b.numDirectionalShadows!==O||b.numPointShadows!==I||b.numSpotShadows!==T||b.numSpotMaps!==N||b.numLightProbes!==z)&&(s.directional.length=S,s.spot.length=L,s.rectArea.length=M,s.point.length=A,s.hemi.length=v,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=T+N-U,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=z,b.directionalLength=S,b.pointLength=A,b.spotLength=L,b.rectAreaLength=M,b.hemiLength=v,b.numDirectionalShadows=O,b.numPointShadows=I,b.numSpotShadows=T,b.numSpotMaps=N,b.numLightProbes=z,s.version=LA++)}function m(h,x){let y=0,g=0,S=0,A=0,L=0;const M=x.matrixWorldInverse;for(let v=0,O=h.length;v<O;v++){const I=h[v];if(I.isDirectionalLight){const T=s.directional[y];T.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),T.direction.sub(l),T.direction.transformDirection(M),y++}else if(I.isSpotLight){const T=s.spot[S];T.position.setFromMatrixPosition(I.matrixWorld),T.position.applyMatrix4(M),T.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),T.direction.sub(l),T.direction.transformDirection(M),S++}else if(I.isRectAreaLight){const T=s.rectArea[A];T.position.setFromMatrixPosition(I.matrixWorld),T.position.applyMatrix4(M),d.identity(),c.copy(I.matrixWorld),c.premultiply(M),d.extractRotation(c),T.halfWidth.set(I.width*.5,0,0),T.halfHeight.set(0,I.height*.5,0),T.halfWidth.applyMatrix4(d),T.halfHeight.applyMatrix4(d),A++}else if(I.isPointLight){const T=s.point[g];T.position.setFromMatrixPosition(I.matrixWorld),T.position.applyMatrix4(M),g++}else if(I.isHemisphereLight){const T=s.hemi[L];T.direction.setFromMatrixPosition(I.matrixWorld),T.direction.transformDirection(M),L++}}}return{setup:p,setupView:m,state:s}}function j_(r){const e=new PA(r),i=[],s=[],l=[];function c(g){y.camera=g,i.length=0,s.length=0,l.length=0}function d(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function h(){e.setup(i)}function x(g){e.setupView(i,g)}const y={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:y,setupLights:h,setupLightsView:x,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function zA(r){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let p;return d===void 0?(p=new j_(r),e.set(l,[p])):c>=d.length?(p=new j_(r),d.push(p)):p=d[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const IA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,BA=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],GA=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Z_=new ln,Wo=new $,Vd=new $;function HA(r,e,i){let s=new Zh;const l=new ft,c=new ft,d=new en,p=new ZM,m=new KM,h={},x=i.maxTextureSize,y={[cs]:Kn,[Kn]:cs,[Sa]:Sa},g=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:IA,fragmentShader:FA}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const A=new Ei;A.setAttribute("position",new ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const L=new Zn(A,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let v=this.type;this.render=function(U,z,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;this.type===sv&&(nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Pc);const D=r.getRenderTarget(),V=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),q=r.state;q.setBlending(Ea),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ce=v!==this.type;ce&&z.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(Q=>Q.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,Q=U.length;pe<Q;pe++){const B=U[pe],H=B.shadow;if(H===void 0){nt("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const ee=H.getFrameExtents();l.multiply(ee),c.copy(H.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/ee.x),l.x=c.x*ee.x,H.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/ee.y),l.y=c.y*ee.y,H.mapSize.y=c.y));const _e=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=_e,H.map===null||ce===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===qo){if(B.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Yi(l.x,l.y,{format:Vs,type:Ta,minFilter:In,magFilter:In,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new Hr(l.x,l.y,Xi),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=Aa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un}else B.isPointLight?(H.map=new zv(l.x),H.map.depthTexture=new kM(l.x,Zi)):(H.map=new Yi(l.x,l.y),H.map.depthTexture=new Hr(l.x,l.y,Zi)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=Aa,this.type===Pc?(H.map.depthTexture.compareFunction=_e?qh:Wh,H.map.depthTexture.minFilter=In,H.map.depthTexture.magFilter=In):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un);H.camera.updateProjectionMatrix()}const be=H.map.isWebGLCubeRenderTarget?6:1;for(let w=0;w<be;w++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,w),r.clear();else{w===0&&(r.setRenderTarget(H.map),r.clear());const X=H.getViewport(w);d.set(c.x*X.x,c.y*X.y,c.x*X.z,c.y*X.w),q.viewport(d)}if(B.isPointLight){const X=H.camera,me=H.matrix,Ce=B.distance||X.far;Ce!==X.far&&(X.far=Ce,X.updateProjectionMatrix()),Wo.setFromMatrixPosition(B.matrixWorld),X.position.copy(Wo),Vd.copy(X.position),Vd.add(BA[w]),X.up.copy(GA[w]),X.lookAt(Vd),X.updateMatrixWorld(),me.makeTranslation(-Wo.x,-Wo.y,-Wo.z),Z_.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Z_,X.coordinateSystem,X.reversedDepth)}else H.updateMatrices(B);s=H.getFrustum(),T(z,b,H.camera,B,this.type)}H.isPointLightShadow!==!0&&this.type===qo&&O(H,b),H.needsUpdate=!1}v=this.type,M.needsUpdate=!1,r.setRenderTarget(D,V,k)};function O(U,z){const b=e.update(L);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Yi(l.x,l.y,{format:Vs,type:Ta})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(z,null,b,g,L,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(z,null,b,S,L,null)}function I(U,z,b,D){let V=null;const k=b.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(k!==void 0)V=k;else if(V=b.isPointLight===!0?m:p,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const q=V.uuid,ce=z.uuid;let pe=h[q];pe===void 0&&(pe={},h[q]=pe);let Q=pe[ce];Q===void 0&&(Q=V.clone(),pe[ce]=Q,z.addEventListener("dispose",N)),V=Q}if(V.visible=z.visible,V.wireframe=z.wireframe,D===qo?V.side=z.shadowSide!==null?z.shadowSide:z.side:V.side=z.shadowSide!==null?z.shadowSide:y[z.side],V.alphaMap=z.alphaMap,V.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,V.map=z.map,V.clipShadows=z.clipShadows,V.clippingPlanes=z.clippingPlanes,V.clipIntersection=z.clipIntersection,V.displacementMap=z.displacementMap,V.displacementScale=z.displacementScale,V.displacementBias=z.displacementBias,V.wireframeLinewidth=z.wireframeLinewidth,V.linewidth=z.linewidth,b.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const q=r.properties.get(V);q.light=b}return V}function T(U,z,b,D,V){if(U.visible===!1)return;if(U.layers.test(z.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&V===qo)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,U.matrixWorld);const ce=e.update(U),pe=U.material;if(Array.isArray(pe)){const Q=ce.groups;for(let B=0,H=Q.length;B<H;B++){const ee=Q[B],_e=pe[ee.materialIndex];if(_e&&_e.visible){const be=I(U,_e,D,V);U.onBeforeShadow(r,U,z,b,ce,be,ee),r.renderBufferDirect(b,null,ce,be,U,ee),U.onAfterShadow(r,U,z,b,ce,be,ee)}}}else if(pe.visible){const Q=I(U,pe,D,V);U.onBeforeShadow(r,U,z,b,ce,Q,null),r.renderBufferDirect(b,null,ce,Q,U,null),U.onAfterShadow(r,U,z,b,ce,Q,null)}}const q=U.children;for(let ce=0,pe=q.length;ce<pe;ce++)T(q[ce],z,b,D,V)}function N(U){U.target.removeEventListener("dispose",N);for(const b in h){const D=h[b],V=U.target.uuid;V in D&&(D[V].dispose(),delete D[V])}}}function VA(r,e){function i(){let Y=!1;const Ae=new en;let ve=null;const we=new en(0,0,0,0);return{setMask:function(Ie){ve!==Ie&&!Y&&(r.colorMask(Ie,Ie,Ie,Ie),ve=Ie)},setLocked:function(Ie){Y=Ie},setClear:function(Ie,Me,qe,Ve,Kt){Kt===!0&&(Ie*=Ve,Me*=Ve,qe*=Ve),Ae.set(Ie,Me,qe,Ve),we.equals(Ae)===!1&&(r.clearColor(Ie,Me,qe,Ve),we.copy(Ae))},reset:function(){Y=!1,ve=null,we.set(-1,0,0,0)}}}function s(){let Y=!1,Ae=!1,ve=null,we=null,Ie=null;return{setReversed:function(Me){if(Ae!==Me){const qe=e.get("EXT_clip_control");Me?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Ae=Me;const Ve=Ie;Ie=null,this.setClear(Ve)}},getReversed:function(){return Ae},setTest:function(Me){Me?Ee(r.DEPTH_TEST):Ge(r.DEPTH_TEST)},setMask:function(Me){ve!==Me&&!Y&&(r.depthMask(Me),ve=Me)},setFunc:function(Me){if(Ae&&(Me=_M[Me]),we!==Me){switch(Me){case qd:r.depthFunc(r.NEVER);break;case Yd:r.depthFunc(r.ALWAYS);break;case jd:r.depthFunc(r.LESS);break;case Br:r.depthFunc(r.LEQUAL);break;case Zd:r.depthFunc(r.EQUAL);break;case Kd:r.depthFunc(r.GEQUAL);break;case Qd:r.depthFunc(r.GREATER);break;case Jd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}we=Me}},setLocked:function(Me){Y=Me},setClear:function(Me){Ie!==Me&&(Ie=Me,Ae&&(Me=1-Me),r.clearDepth(Me))},reset:function(){Y=!1,ve=null,we=null,Ie=null,Ae=!1}}}function l(){let Y=!1,Ae=null,ve=null,we=null,Ie=null,Me=null,qe=null,Ve=null,Kt=null;return{setTest:function(Nt){Y||(Nt?Ee(r.STENCIL_TEST):Ge(r.STENCIL_TEST))},setMask:function(Nt){Ae!==Nt&&!Y&&(r.stencilMask(Nt),Ae=Nt)},setFunc:function(Nt,Qn,Jn){(ve!==Nt||we!==Qn||Ie!==Jn)&&(r.stencilFunc(Nt,Qn,Jn),ve=Nt,we=Qn,Ie=Jn)},setOp:function(Nt,Qn,Jn){(Me!==Nt||qe!==Qn||Ve!==Jn)&&(r.stencilOp(Nt,Qn,Jn),Me=Nt,qe=Qn,Ve=Jn)},setLocked:function(Nt){Y=Nt},setClear:function(Nt){Kt!==Nt&&(r.clearStencil(Nt),Kt=Nt)},reset:function(){Y=!1,Ae=null,ve=null,we=null,Ie=null,Me=null,qe=null,Ve=null,Kt=null}}}const c=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let x={},y={},g={},S=new WeakMap,A=[],L=null,M=!1,v=null,O=null,I=null,T=null,N=null,U=null,z=null,b=new Et(0,0,0),D=0,V=!1,k=null,q=null,ce=null,pe=null,Q=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,ee=0;const _e=r.getParameter(r.VERSION);_e.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(_e)[1]),H=ee>=1):_e.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),H=ee>=2);let be=null,w={};const X=r.getParameter(r.SCISSOR_BOX),me=r.getParameter(r.VIEWPORT),Ce=new en().fromArray(X),ze=new en().fromArray(me);function se(Y,Ae,ve,we){const Ie=new Uint8Array(4),Me=r.createTexture();r.bindTexture(Y,Me),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qe=0;qe<ve;qe++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(Ae,0,r.RGBA,1,1,we,0,r.RGBA,r.UNSIGNED_BYTE,Ie):r.texImage2D(Ae+qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ie);return Me}const Se={};Se[r.TEXTURE_2D]=se(r.TEXTURE_2D,r.TEXTURE_2D,1),Se[r.TEXTURE_CUBE_MAP]=se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[r.TEXTURE_2D_ARRAY]=se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Se[r.TEXTURE_3D]=se(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),Ee(r.DEPTH_TEST),d.setFunc(Br),tn(!1),nn(Q0),Ee(r.CULL_FACE),xt(Ea);function Ee(Y){x[Y]!==!0&&(r.enable(Y),x[Y]=!0)}function Ge(Y){x[Y]!==!1&&(r.disable(Y),x[Y]=!1)}function tt(Y,Ae){return g[Y]!==Ae?(r.bindFramebuffer(Y,Ae),g[Y]=Ae,Y===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ae),Y===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ke(Y,Ae){let ve=A,we=!1;if(Y){ve=S.get(Ae),ve===void 0&&(ve=[],S.set(Ae,ve));const Ie=Y.textures;if(ve.length!==Ie.length||ve[0]!==r.COLOR_ATTACHMENT0){for(let Me=0,qe=Ie.length;Me<qe;Me++)ve[Me]=r.COLOR_ATTACHMENT0+Me;ve.length=Ie.length,we=!0}}else ve[0]!==r.BACK&&(ve[0]=r.BACK,we=!0);we&&r.drawBuffers(ve)}function Yt(Y){return L!==Y?(r.useProgram(Y),L=Y,!0):!1}const ut={[zs]:r.FUNC_ADD,[GS]:r.FUNC_SUBTRACT,[HS]:r.FUNC_REVERSE_SUBTRACT};ut[VS]=r.MIN,ut[kS]=r.MAX;const vt={[XS]:r.ZERO,[WS]:r.ONE,[qS]:r.SRC_COLOR,[Xd]:r.SRC_ALPHA,[JS]:r.SRC_ALPHA_SATURATE,[KS]:r.DST_COLOR,[jS]:r.DST_ALPHA,[YS]:r.ONE_MINUS_SRC_COLOR,[Wd]:r.ONE_MINUS_SRC_ALPHA,[QS]:r.ONE_MINUS_DST_COLOR,[ZS]:r.ONE_MINUS_DST_ALPHA,[$S]:r.CONSTANT_COLOR,[eM]:r.ONE_MINUS_CONSTANT_COLOR,[tM]:r.CONSTANT_ALPHA,[nM]:r.ONE_MINUS_CONSTANT_ALPHA};function xt(Y,Ae,ve,we,Ie,Me,qe,Ve,Kt,Nt){if(Y===Ea){M===!0&&(Ge(r.BLEND),M=!1);return}if(M===!1&&(Ee(r.BLEND),M=!0),Y!==BS){if(Y!==v||Nt!==V){if((O!==zs||N!==zs)&&(r.blendEquation(r.FUNC_ADD),O=zs,N=zs),Nt)switch(Y){case zr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case J0:r.blendFunc(r.ONE,r.ONE);break;case $0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case e_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:bt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case zr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case J0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case $0:bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case e_:bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:bt("WebGLState: Invalid blending: ",Y);break}I=null,T=null,U=null,z=null,b.set(0,0,0),D=0,v=Y,V=Nt}return}Ie=Ie||Ae,Me=Me||ve,qe=qe||we,(Ae!==O||Ie!==N)&&(r.blendEquationSeparate(ut[Ae],ut[Ie]),O=Ae,N=Ie),(ve!==I||we!==T||Me!==U||qe!==z)&&(r.blendFuncSeparate(vt[ve],vt[we],vt[Me],vt[qe]),I=ve,T=we,U=Me,z=qe),(Ve.equals(b)===!1||Kt!==D)&&(r.blendColor(Ve.r,Ve.g,Ve.b,Kt),b.copy(Ve),D=Kt),v=Y,V=!1}function dt(Y,Ae){Y.side===Sa?Ge(r.CULL_FACE):Ee(r.CULL_FACE);let ve=Y.side===Kn;Ae&&(ve=!ve),tn(ve),Y.blending===zr&&Y.transparent===!1?xt(Ea):xt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),d.setFunc(Y.depthFunc),d.setTest(Y.depthTest),d.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const we=Y.stencilWrite;p.setTest(we),we&&(p.setMask(Y.stencilWriteMask),p.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),p.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),cn(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Ee(r.SAMPLE_ALPHA_TO_COVERAGE):Ge(r.SAMPLE_ALPHA_TO_COVERAGE)}function tn(Y){k!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),k=Y)}function nn(Y){Y!==IS?(Ee(r.CULL_FACE),Y!==q&&(Y===Q0?r.cullFace(r.BACK):Y===FS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ge(r.CULL_FACE),q=Y}function an(Y){Y!==ce&&(H&&r.lineWidth(Y),ce=Y)}function cn(Y,Ae,ve){Y?(Ee(r.POLYGON_OFFSET_FILL),(pe!==Ae||Q!==ve)&&(pe=Ae,Q=ve,d.getReversed()&&(Ae=-Ae),r.polygonOffset(Ae,ve))):Ge(r.POLYGON_OFFSET_FILL)}function Wt(Y){Y?Ee(r.SCISSOR_TEST):Ge(r.SCISSOR_TEST)}function sn(Y){Y===void 0&&(Y=r.TEXTURE0+B-1),be!==Y&&(r.activeTexture(Y),be=Y)}function Z(Y,Ae,ve){ve===void 0&&(be===null?ve=r.TEXTURE0+B-1:ve=be);let we=w[ve];we===void 0&&(we={type:void 0,texture:void 0},w[ve]=we),(we.type!==Y||we.texture!==Ae)&&(be!==ve&&(r.activeTexture(ve),be=ve),r.bindTexture(Y,Ae||Se[Y]),we.type=Y,we.texture=Ae)}function Bt(){const Y=w[be];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Ct(){try{r.compressedTexImage2D(...arguments)}catch(Y){bt("WebGLState:",Y)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(Y){bt("WebGLState:",Y)}}function E(){try{r.texSubImage2D(...arguments)}catch(Y){bt("WebGLState:",Y)}}function J(){try{r.texSubImage3D(...arguments)}catch(Y){bt("WebGLState:",Y)}}function re(){try{r.compressedTexSubImage2D(...arguments)}catch(Y){bt("WebGLState:",Y)}}function de(){try{r.compressedTexSubImage3D(...arguments)}catch(Y){bt("WebGLState:",Y)}}function Te(){try{r.texStorage2D(...arguments)}catch(Y){bt("WebGLState:",Y)}}function De(){try{r.texStorage3D(...arguments)}catch(Y){bt("WebGLState:",Y)}}function fe(){try{r.texImage2D(...arguments)}catch(Y){bt("WebGLState:",Y)}}function he(){try{r.texImage3D(...arguments)}catch(Y){bt("WebGLState:",Y)}}function Re(Y){return y[Y]!==void 0?y[Y]:r.getParameter(Y)}function Fe(Y,Ae){y[Y]!==Ae&&(r.pixelStorei(Y,Ae),y[Y]=Ae)}function Le(Y){Ce.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),Ce.copy(Y))}function Ue(Y){ze.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),ze.copy(Y))}function Ze(Y,Ae){let ve=h.get(Ae);ve===void 0&&(ve=new WeakMap,h.set(Ae,ve));let we=ve.get(Y);we===void 0&&(we=r.getUniformBlockIndex(Ae,Y.name),ve.set(Y,we))}function Qe(Y,Ae){const we=h.get(Ae).get(Y);m.get(Ae)!==we&&(r.uniformBlockBinding(Ae,we,Y.__bindingPointIndex),m.set(Ae,we))}function it(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),x={},y={},be=null,w={},g={},S=new WeakMap,A=[],L=null,M=!1,v=null,O=null,I=null,T=null,N=null,U=null,z=null,b=new Et(0,0,0),D=0,V=!1,k=null,q=null,ce=null,pe=null,Q=null,Ce.set(0,0,r.canvas.width,r.canvas.height),ze.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:Ee,disable:Ge,bindFramebuffer:tt,drawBuffers:Ke,useProgram:Yt,setBlending:xt,setMaterial:dt,setFlipSided:tn,setCullFace:nn,setLineWidth:an,setPolygonOffset:cn,setScissorTest:Wt,activeTexture:sn,bindTexture:Z,unbindTexture:Bt,compressedTexImage2D:Ct,compressedTexImage3D:P,texImage2D:fe,texImage3D:he,pixelStorei:Fe,getParameter:Re,updateUBOMapping:Ze,uniformBlockBinding:Qe,texStorage2D:Te,texStorage3D:De,texSubImage2D:E,texSubImage3D:J,compressedTexSubImage2D:re,compressedTexSubImage3D:de,scissor:Le,viewport:Ue,reset:it}}function kA(r,e,i,s,l,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ft,x=new WeakMap,y=new Set;let g;const S=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function L(P,E){return A?new OffscreenCanvas(P,E):Wc("canvas")}function M(P,E,J){let re=1;const de=Ct(P);if((de.width>J||de.height>J)&&(re=J/Math.max(de.width,de.height)),re<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Te=Math.floor(re*de.width),De=Math.floor(re*de.height);g===void 0&&(g=L(Te,De));const fe=E?L(Te,De):g;return fe.width=Te,fe.height=De,fe.getContext("2d").drawImage(P,0,0,Te,De),nt("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Te+"x"+De+")."),fe}else return"data"in P&&nt("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),P;return P}function v(P){return P.generateMipmaps}function O(P){r.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(P,E,J,re,de,Te=!1){if(P!==null){if(r[P]!==void 0)return r[P];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let De;re&&(De=e.get("EXT_texture_norm16"),De||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=E;if(E===r.RED&&(J===r.FLOAT&&(fe=r.R32F),J===r.HALF_FLOAT&&(fe=r.R16F),J===r.UNSIGNED_BYTE&&(fe=r.R8),J===r.UNSIGNED_SHORT&&De&&(fe=De.R16_EXT),J===r.SHORT&&De&&(fe=De.R16_SNORM_EXT)),E===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(fe=r.R8UI),J===r.UNSIGNED_SHORT&&(fe=r.R16UI),J===r.UNSIGNED_INT&&(fe=r.R32UI),J===r.BYTE&&(fe=r.R8I),J===r.SHORT&&(fe=r.R16I),J===r.INT&&(fe=r.R32I)),E===r.RG&&(J===r.FLOAT&&(fe=r.RG32F),J===r.HALF_FLOAT&&(fe=r.RG16F),J===r.UNSIGNED_BYTE&&(fe=r.RG8),J===r.UNSIGNED_SHORT&&De&&(fe=De.RG16_EXT),J===r.SHORT&&De&&(fe=De.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(fe=r.RG8UI),J===r.UNSIGNED_SHORT&&(fe=r.RG16UI),J===r.UNSIGNED_INT&&(fe=r.RG32UI),J===r.BYTE&&(fe=r.RG8I),J===r.SHORT&&(fe=r.RG16I),J===r.INT&&(fe=r.RG32I)),E===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),J===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),J===r.UNSIGNED_INT&&(fe=r.RGB32UI),J===r.BYTE&&(fe=r.RGB8I),J===r.SHORT&&(fe=r.RGB16I),J===r.INT&&(fe=r.RGB32I)),E===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),J===r.UNSIGNED_INT&&(fe=r.RGBA32UI),J===r.BYTE&&(fe=r.RGBA8I),J===r.SHORT&&(fe=r.RGBA16I),J===r.INT&&(fe=r.RGBA32I)),E===r.RGB&&(J===r.UNSIGNED_SHORT&&De&&(fe=De.RGB16_EXT),J===r.SHORT&&De&&(fe=De.RGB16_SNORM_EXT),J===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(fe=r.R11F_G11F_B10F)),E===r.RGBA){const he=Te?Xc:St.getTransfer(de);J===r.FLOAT&&(fe=r.RGBA32F),J===r.HALF_FLOAT&&(fe=r.RGBA16F),J===r.UNSIGNED_BYTE&&(fe=he===Ft?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT&&De&&(fe=De.RGBA16_EXT),J===r.SHORT&&De&&(fe=De.RGBA16_SNORM_EXT),J===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function N(P,E){let J;return P?E===null||E===Zi||E===Ko?J=r.DEPTH24_STENCIL8:E===Xi?J=r.DEPTH32F_STENCIL8:E===Zo&&(J=r.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Zi||E===Ko?J=r.DEPTH_COMPONENT24:E===Xi?J=r.DEPTH_COMPONENT32F:E===Zo&&(J=r.DEPTH_COMPONENT16),J}function U(P,E){return v(P)===!0||P.isFramebufferTexture&&P.minFilter!==Un&&P.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function z(P){const E=P.target;E.removeEventListener("dispose",z),D(E),E.isVideoTexture&&x.delete(E),E.isHTMLTexture&&y.delete(E)}function b(P){const E=P.target;E.removeEventListener("dispose",b),k(E)}function D(P){const E=s.get(P);if(E.__webglInit===void 0)return;const J=P.source,re=S.get(J);if(re){const de=re[E.__cacheKey];de.usedTimes--,de.usedTimes===0&&V(P),Object.keys(re).length===0&&S.delete(J)}s.remove(P)}function V(P){const E=s.get(P);r.deleteTexture(E.__webglTexture);const J=P.source,re=S.get(J);delete re[E.__cacheKey],d.memory.textures--}function k(P){const E=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(E.__webglFramebuffer[re]))for(let de=0;de<E.__webglFramebuffer[re].length;de++)r.deleteFramebuffer(E.__webglFramebuffer[re][de]);else r.deleteFramebuffer(E.__webglFramebuffer[re]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[re])}else{if(Array.isArray(E.__webglFramebuffer))for(let re=0;re<E.__webglFramebuffer.length;re++)r.deleteFramebuffer(E.__webglFramebuffer[re]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let re=0;re<E.__webglColorRenderbuffer.length;re++)E.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[re]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=P.textures;for(let re=0,de=J.length;re<de;re++){const Te=s.get(J[re]);Te.__webglTexture&&(r.deleteTexture(Te.__webglTexture),d.memory.textures--),s.remove(J[re])}s.remove(P)}let q=0;function ce(){q=0}function pe(){return q}function Q(P){q=P}function B(){const P=q;return P>=l.maxTextures&&nt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),q+=1,P}function H(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function ee(P,E){const J=s.get(P);if(P.isVideoTexture&&Z(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&J.__version!==P.version){const re=P.image;if(re===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(J,P,E);return}}else P.isExternalTexture&&(J.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+E)}function _e(P,E){const J=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){Ge(J,P,E);return}else P.isExternalTexture&&(J.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+E)}function be(P,E){const J=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){Ge(J,P,E);return}i.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+E)}function w(P,E){const J=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&J.__version!==P.version){tt(J,P,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+E)}const X={[$d]:r.REPEAT,[Ma]:r.CLAMP_TO_EDGE,[eh]:r.MIRRORED_REPEAT},me={[Un]:r.NEAREST,[sM]:r.NEAREST_MIPMAP_NEAREST,[dc]:r.NEAREST_MIPMAP_LINEAR,[In]:r.LINEAR,[fd]:r.LINEAR_MIPMAP_NEAREST,[Bs]:r.LINEAR_MIPMAP_LINEAR},Ce={[lM]:r.NEVER,[hM]:r.ALWAYS,[cM]:r.LESS,[Wh]:r.LEQUAL,[uM]:r.EQUAL,[qh]:r.GEQUAL,[fM]:r.GREATER,[dM]:r.NOTEQUAL};function ze(P,E){if(E.type===Xi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===fd||E.magFilter===dc||E.magFilter===Bs||E.minFilter===In||E.minFilter===fd||E.minFilter===dc||E.minFilter===Bs)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,X[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,X[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,X[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,me[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,me[E.minFilter]),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Ce[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Un||E.minFilter!==dc&&E.minFilter!==Bs||E.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function se(P,E){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",z));const re=E.source;let de=S.get(re);de===void 0&&(de={},S.set(re,de));const Te=H(E);if(Te!==P.__cacheKey){de[Te]===void 0&&(de[Te]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,J=!0),de[Te].usedTimes++;const De=de[P.__cacheKey];De!==void 0&&(de[P.__cacheKey].usedTimes--,De.usedTimes===0&&V(E)),P.__cacheKey=Te,P.__webglTexture=de[Te].texture}return J}function Se(P,E,J){return Math.floor(Math.floor(P/J)/E)}function Ee(P,E,J,re){const Te=P.updateRanges;if(Te.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,J,re,E.data);else{Te.sort((Fe,Le)=>Fe.start-Le.start);let De=0;for(let Fe=1;Fe<Te.length;Fe++){const Le=Te[De],Ue=Te[Fe],Ze=Le.start+Le.count,Qe=Se(Ue.start,E.width,4),it=Se(Le.start,E.width,4);Ue.start<=Ze+1&&Qe===it&&Se(Ue.start+Ue.count-1,E.width,4)===Qe?Le.count=Math.max(Le.count,Ue.start+Ue.count-Le.start):(++De,Te[De]=Ue)}Te.length=De+1;const fe=i.getParameter(r.UNPACK_ROW_LENGTH),he=i.getParameter(r.UNPACK_SKIP_PIXELS),Re=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Fe=0,Le=Te.length;Fe<Le;Fe++){const Ue=Te[Fe],Ze=Math.floor(Ue.start/4),Qe=Math.ceil(Ue.count/4),it=Ze%E.width,Y=Math.floor(Ze/E.width),Ae=Qe,ve=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,it),i.pixelStorei(r.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(r.TEXTURE_2D,0,it,Y,Ae,ve,J,re,E.data)}P.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,fe),i.pixelStorei(r.UNPACK_SKIP_PIXELS,he),i.pixelStorei(r.UNPACK_SKIP_ROWS,Re)}}function Ge(P,E,J){let re=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=r.TEXTURE_3D);const de=se(P,E),Te=E.source;i.bindTexture(re,P.__webglTexture,r.TEXTURE0+J);const De=s.get(Te);if(Te.version!==De.__version||de===!0){if(i.activeTexture(r.TEXTURE0+J),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ve=St.getPrimaries(St.workingColorSpace),we=E.colorSpace===rs?null:St.getPrimaries(E.colorSpace),Ie=E.colorSpace===rs||ve===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let he=M(E.image,!1,l.maxTextureSize);he=Bt(E,he);const Re=c.convert(E.format,E.colorSpace),Fe=c.convert(E.type);let Le=T(E.internalFormat,Re,Fe,E.normalized,E.colorSpace,E.isVideoTexture);ze(re,E);let Ue;const Ze=E.mipmaps,Qe=E.isVideoTexture!==!0,it=De.__version===void 0||de===!0,Y=Te.dataReady,Ae=U(E,he);if(E.isDepthTexture)Le=N(E.format===Gs,E.type),it&&(Qe?i.texStorage2D(r.TEXTURE_2D,1,Le,he.width,he.height):i.texImage2D(r.TEXTURE_2D,0,Le,he.width,he.height,0,Re,Fe,null));else if(E.isDataTexture)if(Ze.length>0){Qe&&it&&i.texStorage2D(r.TEXTURE_2D,Ae,Le,Ze[0].width,Ze[0].height);for(let ve=0,we=Ze.length;ve<we;ve++)Ue=Ze[ve],Qe?Y&&i.texSubImage2D(r.TEXTURE_2D,ve,0,0,Ue.width,Ue.height,Re,Fe,Ue.data):i.texImage2D(r.TEXTURE_2D,ve,Le,Ue.width,Ue.height,0,Re,Fe,Ue.data);E.generateMipmaps=!1}else Qe?(it&&i.texStorage2D(r.TEXTURE_2D,Ae,Le,he.width,he.height),Y&&Ee(E,he,Re,Fe)):i.texImage2D(r.TEXTURE_2D,0,Le,he.width,he.height,0,Re,Fe,he.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Qe&&it&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,Le,Ze[0].width,Ze[0].height,he.depth);for(let ve=0,we=Ze.length;ve<we;ve++)if(Ue=Ze[ve],E.format!==Oi)if(Re!==null)if(Qe){if(Y)if(E.layerUpdates.size>0){const Ie=A_(Ue.width,Ue.height,E.format,E.type);for(const Me of E.layerUpdates){const qe=Ue.data.subarray(Me*Ie/Ue.data.BYTES_PER_ELEMENT,(Me+1)*Ie/Ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,Me,Ue.width,Ue.height,1,Re,qe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,Ue.width,Ue.height,he.depth,Re,Ue.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ve,Le,Ue.width,Ue.height,he.depth,0,Ue.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?Y&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,Ue.width,Ue.height,he.depth,Re,Fe,Ue.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ve,Le,Ue.width,Ue.height,he.depth,0,Re,Fe,Ue.data)}else{Qe&&it&&i.texStorage2D(r.TEXTURE_2D,Ae,Le,Ze[0].width,Ze[0].height);for(let ve=0,we=Ze.length;ve<we;ve++)Ue=Ze[ve],E.format!==Oi?Re!==null?Qe?Y&&i.compressedTexSubImage2D(r.TEXTURE_2D,ve,0,0,Ue.width,Ue.height,Re,Ue.data):i.compressedTexImage2D(r.TEXTURE_2D,ve,Le,Ue.width,Ue.height,0,Ue.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?Y&&i.texSubImage2D(r.TEXTURE_2D,ve,0,0,Ue.width,Ue.height,Re,Fe,Ue.data):i.texImage2D(r.TEXTURE_2D,ve,Le,Ue.width,Ue.height,0,Re,Fe,Ue.data)}else if(E.isDataArrayTexture)if(Qe){if(it&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,Le,he.width,he.height,he.depth),Y)if(E.layerUpdates.size>0){const ve=A_(he.width,he.height,E.format,E.type);for(const we of E.layerUpdates){const Ie=he.data.subarray(we*ve/he.data.BYTES_PER_ELEMENT,(we+1)*ve/he.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,we,he.width,he.height,1,Re,Fe,Ie)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Re,Fe,he.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Le,he.width,he.height,he.depth,0,Re,Fe,he.data);else if(E.isData3DTexture)Qe?(it&&i.texStorage3D(r.TEXTURE_3D,Ae,Le,he.width,he.height,he.depth),Y&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Re,Fe,he.data)):i.texImage3D(r.TEXTURE_3D,0,Le,he.width,he.height,he.depth,0,Re,Fe,he.data);else if(E.isFramebufferTexture){if(it)if(Qe)i.texStorage2D(r.TEXTURE_2D,Ae,Le,he.width,he.height);else{let ve=he.width,we=he.height;for(let Ie=0;Ie<Ae;Ie++)i.texImage2D(r.TEXTURE_2D,Ie,Le,ve,we,0,Re,Fe,null),ve>>=1,we>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const ve=r.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),he.parentNode!==ve){ve.appendChild(he),y.add(E),ve.onpaint=we=>{const Ie=we.changedElements;for(const Me of y)Ie.includes(Me.image)&&(Me.needsUpdate=!0)},ve.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,he);else{const Ie=r.RGBA,Me=r.RGBA,qe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ie,Me,qe,he)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(Qe&&it){const ve=Ct(Ze[0]);i.texStorage2D(r.TEXTURE_2D,Ae,Le,ve.width,ve.height)}for(let ve=0,we=Ze.length;ve<we;ve++)Ue=Ze[ve],Qe?Y&&i.texSubImage2D(r.TEXTURE_2D,ve,0,0,Re,Fe,Ue):i.texImage2D(r.TEXTURE_2D,ve,Le,Re,Fe,Ue);E.generateMipmaps=!1}else if(Qe){if(it){const ve=Ct(he);i.texStorage2D(r.TEXTURE_2D,Ae,Le,ve.width,ve.height)}Y&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Re,Fe,he)}else i.texImage2D(r.TEXTURE_2D,0,Le,Re,Fe,he);v(E)&&O(re),De.__version=Te.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function tt(P,E,J){if(E.image.length!==6)return;const re=se(P,E),de=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+J);const Te=s.get(de);if(de.version!==Te.__version||re===!0){i.activeTexture(r.TEXTURE0+J);const De=St.getPrimaries(St.workingColorSpace),fe=E.colorSpace===rs?null:St.getPrimaries(E.colorSpace),he=E.colorSpace===rs||De===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Re=E.isCompressedTexture||E.image[0].isCompressedTexture,Fe=E.image[0]&&E.image[0].isDataTexture,Le=[];for(let Me=0;Me<6;Me++)!Re&&!Fe?Le[Me]=M(E.image[Me],!0,l.maxCubemapSize):Le[Me]=Fe?E.image[Me].image:E.image[Me],Le[Me]=Bt(E,Le[Me]);const Ue=Le[0],Ze=c.convert(E.format,E.colorSpace),Qe=c.convert(E.type),it=T(E.internalFormat,Ze,Qe,E.normalized,E.colorSpace),Y=E.isVideoTexture!==!0,Ae=Te.__version===void 0||re===!0,ve=de.dataReady;let we=U(E,Ue);ze(r.TEXTURE_CUBE_MAP,E);let Ie;if(Re){Y&&Ae&&i.texStorage2D(r.TEXTURE_CUBE_MAP,we,it,Ue.width,Ue.height);for(let Me=0;Me<6;Me++){Ie=Le[Me].mipmaps;for(let qe=0;qe<Ie.length;qe++){const Ve=Ie[qe];E.format!==Oi?Ze!==null?Y?ve&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,0,0,Ve.width,Ve.height,Ze,Ve.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,it,Ve.width,Ve.height,0,Ve.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,0,0,Ve.width,Ve.height,Ze,Qe,Ve.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,it,Ve.width,Ve.height,0,Ze,Qe,Ve.data)}}}else{if(Ie=E.mipmaps,Y&&Ae){Ie.length>0&&we++;const Me=Ct(Le[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,we,it,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Fe){Y?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Le[Me].width,Le[Me].height,Ze,Qe,Le[Me].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,it,Le[Me].width,Le[Me].height,0,Ze,Qe,Le[Me].data);for(let qe=0;qe<Ie.length;qe++){const Kt=Ie[qe].image[Me].image;Y?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,0,0,Kt.width,Kt.height,Ze,Qe,Kt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,it,Kt.width,Kt.height,0,Ze,Qe,Kt.data)}}else{Y?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ze,Qe,Le[Me]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,it,Ze,Qe,Le[Me]);for(let qe=0;qe<Ie.length;qe++){const Ve=Ie[qe];Y?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,0,0,Ze,Qe,Ve.image[Me]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,it,Ze,Qe,Ve.image[Me])}}}v(E)&&O(r.TEXTURE_CUBE_MAP),Te.__version=de.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ke(P,E,J,re,de,Te){const De=c.convert(J.format,J.colorSpace),fe=c.convert(J.type),he=T(J.internalFormat,De,fe,J.normalized,J.colorSpace),Re=s.get(E),Fe=s.get(J);if(Fe.__renderTarget=E,!Re.__hasExternalTextures){const Le=Math.max(1,E.width>>Te),Ue=Math.max(1,E.height>>Te);de===r.TEXTURE_3D||de===r.TEXTURE_2D_ARRAY?i.texImage3D(de,Te,he,Le,Ue,E.depth,0,De,fe,null):i.texImage2D(de,Te,he,Le,Ue,0,De,fe,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),sn(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,de,Fe.__webglTexture,0,Wt(E)):(de===r.TEXTURE_2D||de>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,re,de,Fe.__webglTexture,Te),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Yt(P,E,J){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer){const re=E.depthTexture,de=re&&re.isDepthTexture?re.type:null,Te=N(E.stencilBuffer,de),De=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;sn(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Wt(E),Te,E.width,E.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt(E),Te,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Te,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,De,r.RENDERBUFFER,P)}else{const re=E.textures;for(let de=0;de<re.length;de++){const Te=re[de],De=c.convert(Te.format,Te.colorSpace),fe=c.convert(Te.type),he=T(Te.internalFormat,De,fe,Te.normalized,Te.colorSpace);sn(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Wt(E),he,E.width,E.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt(E),he,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,he,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ut(P,E,J){const re=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=s.get(E.depthTexture);if(de.__renderTarget=E,(!de.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),re){if(de.__webglInit===void 0&&(de.__webglInit=!0,E.depthTexture.addEventListener("dispose",z)),de.__webglTexture===void 0){de.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),ze(r.TEXTURE_CUBE_MAP,E.depthTexture);const Re=c.convert(E.depthTexture.format),Fe=c.convert(E.depthTexture.type);let Le;E.depthTexture.format===Aa?Le=r.DEPTH_COMPONENT24:E.depthTexture.format===Gs&&(Le=r.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Le,E.width,E.height,0,Re,Fe,null)}}else ee(E.depthTexture,0);const Te=de.__webglTexture,De=Wt(E),fe=re?r.TEXTURE_CUBE_MAP_POSITIVE_X+J:r.TEXTURE_2D,he=E.depthTexture.format===Gs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Aa)sn(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,fe,Te,0,De):r.framebufferTexture2D(r.FRAMEBUFFER,he,fe,Te,0);else if(E.depthTexture.format===Gs)sn(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,fe,Te,0,De):r.framebufferTexture2D(r.FRAMEBUFFER,he,fe,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function vt(P){const E=s.get(P),J=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const re=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),re){const de=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,re.removeEventListener("dispose",de)};re.addEventListener("dispose",de),E.__depthDisposeCallback=de}E.__boundDepthTexture=re}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(J)for(let re=0;re<6;re++)ut(E.__webglFramebuffer[re],P,re);else{const re=P.texture.mipmaps;re&&re.length>0?ut(E.__webglFramebuffer[0],P,0):ut(E.__webglFramebuffer,P,0)}else if(J){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]===void 0)E.__webglDepthbuffer[re]=r.createRenderbuffer(),Yt(E.__webglDepthbuffer[re],P,!1);else{const de=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=E.__webglDepthbuffer[re];r.bindRenderbuffer(r.RENDERBUFFER,Te),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,Te)}}else{const re=P.texture.mipmaps;if(re&&re.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Yt(E.__webglDepthbuffer,P,!1);else{const de=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Te),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,Te)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function xt(P,E,J){const re=s.get(P);E!==void 0&&Ke(re.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&vt(P)}function dt(P){const E=P.texture,J=s.get(P),re=s.get(E);P.addEventListener("dispose",b);const de=P.textures,Te=P.isWebGLCubeRenderTarget===!0,De=de.length>1;if(De||(re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture()),re.__version=E.version,d.memory.textures++),Te){J.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[fe]=[];for(let he=0;he<E.mipmaps.length;he++)J.__webglFramebuffer[fe][he]=r.createFramebuffer()}else J.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)J.__webglFramebuffer[fe]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(De)for(let fe=0,he=de.length;fe<he;fe++){const Re=s.get(de[fe]);Re.__webglTexture===void 0&&(Re.__webglTexture=r.createTexture(),d.memory.textures++)}if(P.samples>0&&sn(P)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let fe=0;fe<de.length;fe++){const he=de[fe];J.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[fe]);const Re=c.convert(he.format,he.colorSpace),Fe=c.convert(he.type),Le=T(he.internalFormat,Re,Fe,he.normalized,he.colorSpace,P.isXRRenderTarget===!0),Ue=Wt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue,Le,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,J.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),Yt(J.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Te){i.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture),ze(r.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)Ke(J.__webglFramebuffer[fe][he],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,he);else Ke(J.__webglFramebuffer[fe],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);v(E)&&O(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(De){for(let fe=0,he=de.length;fe<he;fe++){const Re=de[fe],Fe=s.get(Re);let Le=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Le=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Le,Fe.__webglTexture),ze(Le,Re),Ke(J.__webglFramebuffer,P,Re,r.COLOR_ATTACHMENT0+fe,Le,0),v(Re)&&O(Le)}i.unbindTexture()}else{let fe=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(fe=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(fe,re.__webglTexture),ze(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)Ke(J.__webglFramebuffer[he],P,E,r.COLOR_ATTACHMENT0,fe,he);else Ke(J.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,fe,0);v(E)&&O(fe),i.unbindTexture()}P.depthBuffer&&vt(P)}function tn(P){const E=P.textures;for(let J=0,re=E.length;J<re;J++){const de=E[J];if(v(de)){const Te=I(P),De=s.get(de).__webglTexture;i.bindTexture(Te,De),O(Te),i.unbindTexture()}}}const nn=[],an=[];function cn(P){if(P.samples>0){if(sn(P)===!1){const E=P.textures,J=P.width,re=P.height;let de=r.COLOR_BUFFER_BIT;const Te=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,De=s.get(P),fe=E.length>1;if(fe)for(let Re=0;Re<E.length;Re++)i.bindFramebuffer(r.FRAMEBUFFER,De.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,De.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const he=P.texture.mipmaps;he&&he.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Re=0;Re<E.length;Re++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(de|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(de|=r.STENCIL_BUFFER_BIT)),fe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);const Fe=s.get(E[Re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Fe,0)}r.blitFramebuffer(0,0,J,re,0,0,J,re,de,r.NEAREST),m===!0&&(nn.length=0,an.length=0,nn.push(r.COLOR_ATTACHMENT0+Re),P.depthBuffer&&P.resolveDepthBuffer===!1&&(nn.push(Te),an.push(Te),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,an)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,nn))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let Re=0;Re<E.length;Re++){i.bindFramebuffer(r.FRAMEBUFFER,De.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);const Fe=s.get(E[Re]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,De.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,Fe,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const E=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Wt(P){return Math.min(l.maxSamples,P.samples)}function sn(P){const E=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Z(P){const E=d.render.frame;x.get(P)!==E&&(x.set(P,E),P.update())}function Bt(P,E){const J=P.colorSpace,re=P.format,de=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||J!==kc&&J!==rs&&(St.getTransfer(J)===Ft?(re!==Oi||de!==hi)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):bt("WebGLTextures: Unsupported texture color space:",J)),E}function Ct(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=ce,this.getTextureUnits=pe,this.setTextureUnits=Q,this.setTexture2D=ee,this.setTexture2DArray=_e,this.setTexture3D=be,this.setTextureCube=w,this.rebindTextures=xt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=tn,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=sn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function XA(r,e){function i(s,l=rs){let c;const d=St.getTransfer(l);if(s===hi)return r.UNSIGNED_BYTE;if(s===Gh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Hh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===_v)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===vv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===mv)return r.BYTE;if(s===gv)return r.SHORT;if(s===Zo)return r.UNSIGNED_SHORT;if(s===Bh)return r.INT;if(s===Zi)return r.UNSIGNED_INT;if(s===Xi)return r.FLOAT;if(s===Ta)return r.HALF_FLOAT;if(s===xv)return r.ALPHA;if(s===yv)return r.RGB;if(s===Oi)return r.RGBA;if(s===Aa)return r.DEPTH_COMPONENT;if(s===Gs)return r.DEPTH_STENCIL;if(s===Sv)return r.RED;if(s===Vh)return r.RED_INTEGER;if(s===Vs)return r.RG;if(s===kh)return r.RG_INTEGER;if(s===Xh)return r.RGBA_INTEGER;if(s===zc||s===Ic||s===Fc||s===Bc)if(d===Ft)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ic)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===th||s===nh||s===ih||s===ah)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===th)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===nh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ih)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ah)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sh||s===rh||s===oh||s===lh||s===ch||s===Hc||s===uh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===sh||s===rh)return d===Ft?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===oh)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===lh)return c.COMPRESSED_R11_EAC;if(s===ch)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Hc)return c.COMPRESSED_RG11_EAC;if(s===uh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===fh||s===dh||s===hh||s===ph||s===mh||s===gh||s===_h||s===vh||s===xh||s===yh||s===Sh||s===Mh||s===Eh||s===bh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===fh)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===dh)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hh)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ph)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===mh)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gh)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_h)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vh)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xh)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yh)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sh)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Mh)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Eh)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bh)return d===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Th||s===Ah||s===Rh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Th)return d===Ft?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ah)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Rh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ch||s===wh||s===Vc||s===Dh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ch)return c.COMPRESSED_RED_RGTC1_EXT;if(s===wh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Dh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ko?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const WA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class YA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Dv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Ki({vertexShader:WA,fragmentShader:qA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Zn(new Zc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jA extends ks{constructor(e,i){super();const s=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,x=null,y=null,g=null,S=null,A=null;const L=typeof XRWebGLBinding<"u",M=new YA,v={},O=i.getContextAttributes();let I=null,T=null;const N=[],U=[],z=new ft;let b=null;const D=new di;D.viewport=new en;const V=new di;V.viewport=new en;const k=[D,V],q=new iE;let ce=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let Se=N[se];return Se===void 0&&(Se=new xd,N[se]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(se){let Se=N[se];return Se===void 0&&(Se=new xd,N[se]=Se),Se.getGripSpace()},this.getHand=function(se){let Se=N[se];return Se===void 0&&(Se=new xd,N[se]=Se),Se.getHandSpace()};function Q(se){const Se=U.indexOf(se.inputSource);if(Se===-1)return;const Ee=N[Se];Ee!==void 0&&(Ee.update(se.inputSource,se.frame,h||d),Ee.dispatchEvent({type:se.type,data:se.inputSource}))}function B(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",H);for(let se=0;se<N.length;se++){const Se=U[se];Se!==null&&(U[se]=null,N[se].disconnect(Se))}ce=null,pe=null,M.reset();for(const se in v)delete v[se];e.setRenderTarget(I),S=null,g=null,y=null,l=null,T=null,ze.stop(),s.isPresenting=!1,e.setPixelRatio(b),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,s.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){p=se,s.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(se){h=se},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return y===null&&L&&(y=new XRWebGLBinding(l,i)),y},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(se){if(l=se,l!==null){if(I=e.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",B),l.addEventListener("inputsourceschange",H),O.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(z),L&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ge=null,tt=null;O.depth&&(tt=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=O.stencil?Gs:Aa,Ge=O.stencil?Ko:Zi);const Ke={colorFormat:i.RGBA8,depthFormat:tt,scaleFactor:c};y=this.getBinding(),g=y.createProjectionLayer(Ke),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),T=new Yi(g.textureWidth,g.textureHeight,{format:Oi,type:hi,depthTexture:new Hr(g.textureWidth,g.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Ee={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Ee),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),T=new Yi(S.framebufferWidth,S.framebufferHeight,{format:Oi,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),ze.setContext(l),ze.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(se){for(let Se=0;Se<se.removed.length;Se++){const Ee=se.removed[Se],Ge=U.indexOf(Ee);Ge>=0&&(U[Ge]=null,N[Ge].disconnect(Ee))}for(let Se=0;Se<se.added.length;Se++){const Ee=se.added[Se];let Ge=U.indexOf(Ee);if(Ge===-1){for(let Ke=0;Ke<N.length;Ke++)if(Ke>=U.length){U.push(Ee),Ge=Ke;break}else if(U[Ke]===null){U[Ke]=Ee,Ge=Ke;break}if(Ge===-1)break}const tt=N[Ge];tt&&tt.connect(Ee)}}const ee=new $,_e=new $;function be(se,Se,Ee){ee.setFromMatrixPosition(Se.matrixWorld),_e.setFromMatrixPosition(Ee.matrixWorld);const Ge=ee.distanceTo(_e),tt=Se.projectionMatrix.elements,Ke=Ee.projectionMatrix.elements,Yt=tt[14]/(tt[10]-1),ut=tt[14]/(tt[10]+1),vt=(tt[9]+1)/tt[5],xt=(tt[9]-1)/tt[5],dt=(tt[8]-1)/tt[0],tn=(Ke[8]+1)/Ke[0],nn=Yt*dt,an=Yt*tn,cn=Ge/(-dt+tn),Wt=cn*-dt;if(Se.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Wt),se.translateZ(cn),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),tt[10]===-1)se.projectionMatrix.copy(Se.projectionMatrix),se.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const sn=Yt+cn,Z=ut+cn,Bt=nn-Wt,Ct=an+(Ge-Wt),P=vt*ut/Z*sn,E=xt*ut/Z*sn;se.projectionMatrix.makePerspective(Bt,Ct,P,E,sn,Z),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function w(se,Se){Se===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(Se.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(l===null)return;let Se=se.near,Ee=se.far;M.texture!==null&&(M.depthNear>0&&(Se=M.depthNear),M.depthFar>0&&(Ee=M.depthFar)),q.near=V.near=D.near=Se,q.far=V.far=D.far=Ee,(ce!==q.near||pe!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),ce=q.near,pe=q.far),q.layers.mask=se.layers.mask|6,D.layers.mask=q.layers.mask&-5,V.layers.mask=q.layers.mask&-3;const Ge=se.parent,tt=q.cameras;w(q,Ge);for(let Ke=0;Ke<tt.length;Ke++)w(tt[Ke],Ge);tt.length===2?be(q,D,V):q.projectionMatrix.copy(D.projectionMatrix),X(se,q,Ge)};function X(se,Se,Ee){Ee===null?se.matrix.copy(Se.matrixWorld):(se.matrix.copy(Ee.matrixWorld),se.matrix.invert(),se.matrix.multiply(Se.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(Se.projectionMatrix),se.projectionMatrixInverse.copy(Se.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Nh*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(se){m=se,g!==null&&(g.fixedFoveation=se),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=se)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(q)},this.getCameraTexture=function(se){return v[se]};let me=null;function Ce(se,Se){if(x=Se.getViewerPose(h||d),A=Se,x!==null){const Ee=x.views;S!==null&&(e.setRenderTargetFramebuffer(T,S.framebuffer),e.setRenderTarget(T));let Ge=!1;Ee.length!==q.cameras.length&&(q.cameras.length=0,Ge=!0);for(let ut=0;ut<Ee.length;ut++){const vt=Ee[ut];let xt=null;if(S!==null)xt=S.getViewport(vt);else{const tn=y.getViewSubImage(g,vt);xt=tn.viewport,ut===0&&(e.setRenderTargetTextures(T,tn.colorTexture,tn.depthStencilTexture),e.setRenderTarget(T))}let dt=k[ut];dt===void 0&&(dt=new di,dt.layers.enable(ut),dt.viewport=new en,k[ut]=dt),dt.matrix.fromArray(vt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(vt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(xt.x,xt.y,xt.width,xt.height),ut===0&&(q.matrix.copy(dt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ge===!0&&q.cameras.push(dt)}const tt=l.enabledFeatures;if(tt&&tt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&L){y=s.getBinding();const ut=y.getDepthInformation(Ee[0]);ut&&ut.isValid&&ut.texture&&M.init(ut,l.renderState)}if(tt&&tt.includes("camera-access")&&L){e.state.unbindTexture(),y=s.getBinding();for(let ut=0;ut<Ee.length;ut++){const vt=Ee[ut].camera;if(vt){let xt=v[vt];xt||(xt=new Dv,v[vt]=xt);const dt=y.getCameraImage(vt);xt.sourceTexture=dt}}}}for(let Ee=0;Ee<N.length;Ee++){const Ge=U[Ee],tt=N[Ee];Ge!==null&&tt!==void 0&&tt.update(Ge,Se,h||d)}me&&me(se,Se),Se.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Se}),A=null}const ze=new Ov;ze.setAnimationLoop(Ce),this.setAnimationLoop=function(se){me=se},this.dispose=function(){}}}const ZA=new ln,Hv=new st;Hv.set(-1,0,0,0,1,0,0,0,1);function KA(r,e){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,Uv(r)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,O,I,T){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?c(M,v):v.isMeshLambertMaterial?(c(M,v),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(M,v),y(M,v)):v.isMeshPhongMaterial?(c(M,v),x(M,v),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(M,v),g(M,v),v.isMeshPhysicalMaterial&&S(M,v,T)):v.isMeshMatcapMaterial?(c(M,v),A(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),L(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(d(M,v),v.isLineDashedMaterial&&p(M,v)):v.isPointsMaterial?m(M,v,O,I):v.isSpriteMaterial?h(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Kn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Kn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const O=e.get(v),I=O.envMap,T=O.envMapRotation;I&&(M.envMap.value=I,M.envMapRotation.value.setFromMatrix4(ZA.makeRotationFromEuler(T)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Hv),M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function d(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function p(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,O,I){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*O,M.scale.value=I*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function x(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function y(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function g(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function S(M,v,O){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Kn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,v){v.matcap&&(M.matcap.value=v.matcap)}function L(M,v){const O=e.get(v).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function QA(r,e,i,s){let l={},c={},d=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(T,N){const U=N.program;s.uniformBlockBinding(T,U)}function h(T,N){let U=l[T.id];U===void 0&&(M(T),U=x(T),l[T.id]=U,T.addEventListener("dispose",O));const z=N.program;s.updateUBOMapping(T,z);const b=e.render.frame;c[T.id]!==b&&(g(T),c[T.id]=b)}function x(T){const N=y();T.__bindingPointIndex=N;const U=r.createBuffer(),z=T.__size,b=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,z,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,U),U}function y(){for(let T=0;T<p;T++)if(d.indexOf(T)===-1)return d.push(T),T;return bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(T){const N=l[T.id],U=T.uniforms,z=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let b=0,D=U.length;b<D;b++){const V=U[b];if(Array.isArray(V))for(let k=0,q=V.length;k<q;k++)S(V[k],b,k,z);else S(V,b,0,z)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(T,N,U,z){if(L(T,N,U,z)===!0){const b=T.__offset,D=T.value;if(Array.isArray(D)){let V=0;for(let k=0;k<D.length;k++){const q=D[k],ce=v(q);A(q,T.__data,V),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(V+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(D,T.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,b,T.__data)}}function A(T,N,U){typeof T=="number"||typeof T=="boolean"?N[0]=T:T.isMatrix3?(N[0]=T.elements[0],N[1]=T.elements[1],N[2]=T.elements[2],N[3]=0,N[4]=T.elements[3],N[5]=T.elements[4],N[6]=T.elements[5],N[7]=0,N[8]=T.elements[6],N[9]=T.elements[7],N[10]=T.elements[8],N[11]=0):ArrayBuffer.isView(T)?N.set(new T.constructor(T.buffer,T.byteOffset,N.length)):T.toArray(N,U)}function L(T,N,U,z){const b=T.value,D=N+"_"+U;if(z[D]===void 0)return typeof b=="number"||typeof b=="boolean"?z[D]=b:ArrayBuffer.isView(b)?z[D]=b.slice():z[D]=b.clone(),!0;{const V=z[D];if(typeof b=="number"||typeof b=="boolean"){if(V!==b)return z[D]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(V.equals(b)===!1)return V.copy(b),!0}}return!1}function M(T){const N=T.uniforms;let U=0;const z=16;for(let D=0,V=N.length;D<V;D++){const k=Array.isArray(N[D])?N[D]:[N[D]];for(let q=0,ce=k.length;q<ce;q++){const pe=k[q],Q=Array.isArray(pe.value)?pe.value:[pe.value];for(let B=0,H=Q.length;B<H;B++){const ee=Q[B],_e=v(ee),be=U%z,w=be%_e.boundary,X=be+w;U+=w,X!==0&&z-X<_e.storage&&(U+=z-X),pe.__data=new Float32Array(_e.storage/Float32Array.BYTES_PER_ELEMENT),pe.__offset=U,U+=_e.storage}}}const b=U%z;return b>0&&(U+=z-b),T.__size=U,T.__cache={},this}function v(T){const N={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(N.boundary=4,N.storage=4):T.isVector2?(N.boundary=8,N.storage=8):T.isVector3||T.isColor?(N.boundary=16,N.storage=12):T.isVector4?(N.boundary=16,N.storage=16):T.isMatrix3?(N.boundary=48,N.storage=48):T.isMatrix4?(N.boundary=64,N.storage=64):T.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(N.boundary=16,N.storage=T.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",T),N}function O(T){const N=T.target;N.removeEventListener("dispose",O);const U=d.indexOf(N.__bindingPointIndex);d.splice(U,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function I(){for(const T in l)r.deleteBuffer(l[T]);d=[],l={},c={}}return{bind:m,update:h,dispose:I}}const JA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function $A(){return Vi===null&&(Vi=new BM(JA,16,16,Vs,Ta),Vi.name="DFG_LUT",Vi.minFilter=In,Vi.magFilter=In,Vi.wrapS=Ma,Vi.wrapT=Ma,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class e2{constructor(e={}){const{canvas:i=mM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:S=hi}=e;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=d;const L=S,M=new Set([Xh,kh,Vh]),v=new Set([hi,Zi,Zo,Ko,Gh,Hh]),O=new Uint32Array(4),I=new Int32Array(4),T=new $;let N=null,U=null;const z=[],b=[];let D=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let k=!1,q=null,ce=null,pe=null,Q=null;this._outputColorSpace=fi;let B=0,H=0,ee=null,_e=-1,be=null;const w=new en,X=new en;let me=null;const Ce=new Et(0);let ze=0,se=i.width,Se=i.height,Ee=1,Ge=null,tt=null;const Ke=new en(0,0,se,Se),Yt=new en(0,0,se,Se);let ut=!1;const vt=new Zh;let xt=!1,dt=!1;const tn=new ln,nn=new $,an=new en,cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function sn(){return ee===null?Ee:1}let Z=s;function Bt(R,j){return i.getContext(R,j)}try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Fh}`),i.addEventListener("webglcontextlost",Kt,!1),i.addEventListener("webglcontextrestored",Nt,!1),i.addEventListener("webglcontextcreationerror",Qn,!1),Z===null){const j="webgl2";if(Z=Bt(j,R),Z===null)throw Bt(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw bt("WebGLRenderer: "+R.message),R}let Ct,P,E,J,re,de,Te,De,fe,he,Re,Fe,Le,Ue,Ze,Qe,it,Y,Ae,ve,we,Ie,Me;function qe(){Ct=new $1(Z),Ct.init(),we=new XA(Z,Ct),P=new W1(Z,Ct,e,we),E=new VA(Z,Ct),P.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),ce=Z.createFramebuffer(),pe=Z.createFramebuffer(),Q=Z.createFramebuffer(),J=new nT(Z),re=new CA,de=new kA(Z,Ct,E,re,P,we,J),Te=new J1(V),De=new rE(Z),Ie=new k1(Z,De),fe=new eT(Z,De,J,Ie),he=new aT(Z,fe,De,Ie,J),Y=new iT(Z,P,de),Ze=new q1(re),Re=new RA(V,Te,Ct,P,Ie,Ze),Fe=new KA(V,re),Le=new DA,Ue=new zA(Ct),it=new V1(V,Te,E,he,A,m),Qe=new HA(V,he,P),Me=new QA(Z,J,P,E),Ae=new X1(Z,Ct,J),ve=new tT(Z,Ct,J),J.programs=Re.programs,V.capabilities=P,V.extensions=Ct,V.properties=re,V.renderLists=Le,V.shadowMap=Qe,V.state=E,V.info=J}qe(),L!==hi&&(D=new rT(L,i.width,i.height,p,l,c));const Ve=new jA(V,Z);this.xr=Ve,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const R=Ct.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ct.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(R){R!==void 0&&(Ee=R,this.setSize(se,Se,!1))},this.getSize=function(R){return R.set(se,Se)},this.setSize=function(R,j,oe=!0){if(Ve.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}se=R,Se=j,i.width=Math.floor(R*Ee),i.height=Math.floor(j*Ee),oe===!0&&(i.style.width=R+"px",i.style.height=j+"px"),D!==null&&D.setSize(i.width,i.height),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(se*Ee,Se*Ee).floor()},this.setDrawingBufferSize=function(R,j,oe){se=R,Se=j,Ee=oe,i.width=Math.floor(R*oe),i.height=Math.floor(j*oe),this.setViewport(0,0,R,j)},this.setEffects=function(R){if(L===hi){bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let j=0;j<R.length;j++)if(R[j].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(Ke)},this.setViewport=function(R,j,oe,ie){R.isVector4?Ke.set(R.x,R.y,R.z,R.w):Ke.set(R,j,oe,ie),E.viewport(w.copy(Ke).multiplyScalar(Ee).round())},this.getScissor=function(R){return R.copy(Yt)},this.setScissor=function(R,j,oe,ie){R.isVector4?Yt.set(R.x,R.y,R.z,R.w):Yt.set(R,j,oe,ie),E.scissor(X.copy(Yt).multiplyScalar(Ee).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(R){E.setScissorTest(ut=R)},this.setOpaqueSort=function(R){Ge=R},this.setTransparentSort=function(R){tt=R},this.getClearColor=function(R){return R.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,oe=!0){let ie=0;if(R){let ae=!1;if(ee!==null){const Oe=ee.texture.format;ae=M.has(Oe)}if(ae){const Oe=ee.texture.type,He=v.has(Oe),Ne=it.getClearColor(),Xe=it.getClearAlpha(),ke=Ne.r,Je=Ne.g,rt=Ne.b;He?(O[0]=ke,O[1]=Je,O[2]=rt,O[3]=Xe,Z.clearBufferuiv(Z.COLOR,0,O)):(I[0]=ke,I[1]=Je,I[2]=rt,I[3]=Xe,Z.clearBufferiv(Z.COLOR,0,I))}else ie|=Z.COLOR_BUFFER_BIT}j&&(ie|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ie|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&Z.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),q=R},this.dispose=function(){i.removeEventListener("webglcontextlost",Kt,!1),i.removeEventListener("webglcontextrestored",Nt,!1),i.removeEventListener("webglcontextcreationerror",Qn,!1),it.dispose(),Le.dispose(),Ue.dispose(),re.dispose(),Te.dispose(),he.dispose(),Ie.dispose(),Me.dispose(),Re.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",dn),Ve.removeEventListener("sessionend",An),Hn.stop()};function Kt(R){R.preventDefault(),s_("WebGLRenderer: Context Lost."),k=!0}function Nt(){s_("WebGLRenderer: Context Restored."),k=!1;const R=J.autoReset,j=Qe.enabled,oe=Qe.autoUpdate,ie=Qe.needsUpdate,ae=Qe.type;qe(),J.autoReset=R,Qe.enabled=j,Qe.autoUpdate=oe,Qe.needsUpdate=ie,Qe.type=ae}function Qn(R){bt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Jn(R){const j=R.target;j.removeEventListener("dispose",Jn),qr(j)}function qr(R){Yr(R),re.remove(R)}function Yr(R){const j=re.get(R).programs;j!==void 0&&(j.forEach(function(oe){Re.releaseProgram(oe)}),R.isShaderMaterial&&Re.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,oe,ie,ae,Oe){j===null&&(j=cn);const He=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Ne=wa(R,j,oe,ie,ae);E.setMaterial(ie,He);let Xe=oe.index,ke=1;if(ie.wireframe===!0){if(Xe=fe.getWireframeAttribute(oe),Xe===void 0)return;ke=2}const Je=oe.drawRange,rt=oe.attributes.position;let je=Je.start*ke,Tt=(Je.start+Je.count)*ke;Oe!==null&&(je=Math.max(je,Oe.start*ke),Tt=Math.min(Tt,(Oe.start+Oe.count)*ke)),Xe!==null?(je=Math.max(je,0),Tt=Math.min(Tt,Xe.count)):rt!=null&&(je=Math.max(je,0),Tt=Math.min(Tt,rt.count));const Qt=Tt-je;if(Qt<0||Qt===1/0)return;Ie.setup(ae,ie,Ne,oe,Xe);let kt,Lt=Ae;if(Xe!==null&&(kt=De.get(Xe),Lt=ve,Lt.setIndex(kt)),ae.isMesh)ie.wireframe===!0?(E.setLineWidth(ie.wireframeLinewidth*sn()),Lt.setMode(Z.LINES)):Lt.setMode(Z.TRIANGLES);else if(ae.isLine){let Ot=ie.linewidth;Ot===void 0&&(Ot=1),E.setLineWidth(Ot*sn()),ae.isLineSegments?Lt.setMode(Z.LINES):ae.isLineLoop?Lt.setMode(Z.LINE_LOOP):Lt.setMode(Z.LINE_STRIP)}else ae.isPoints?Lt.setMode(Z.POINTS):ae.isSprite&&Lt.setMode(Z.TRIANGLES);if(ae.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))Lt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const Ot=ae._multiDrawStarts,Be=ae._multiDrawCounts,Ln=ae._multiDrawCount,ht=Xe?De.get(Xe).bytesPerElement:1,xn=re.get(ie).currentProgram.getUniforms();for(let $n=0;$n<Ln;$n++)xn.setValue(Z,"_gl_DrawID",$n),Lt.render(Ot[$n]/ht,Be[$n])}else if(ae.isInstancedMesh)Lt.renderInstances(je,Qt,ae.count);else if(oe.isInstancedBufferGeometry){const Ot=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Be=Math.min(oe.instanceCount,Ot);Lt.renderInstances(je,Qt,Be)}else Lt.render(je,Qt)};function jr(R,j,oe){R.transparent===!0&&R.side===Sa&&R.forceSinglePass===!1?(R.side=Kn,R.needsUpdate=!0,Ca(R,j,oe),R.side=cs,R.needsUpdate=!0,Ca(R,j,oe),R.side=Sa):Ca(R,j,oe)}this.compile=function(R,j,oe=null){oe===null&&(oe=R),U=Ue.get(oe),U.init(j),b.push(U),oe.traverseVisible(function(ae){ae.isLight&&ae.layers.test(j.layers)&&(U.pushLight(ae),ae.castShadow&&U.pushShadow(ae))}),R!==oe&&R.traverseVisible(function(ae){ae.isLight&&ae.layers.test(j.layers)&&(U.pushLight(ae),ae.castShadow&&U.pushShadow(ae))}),U.setupLights();const ie=new Set;return R.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Oe=ae.material;if(Oe)if(Array.isArray(Oe))for(let He=0;He<Oe.length;He++){const Ne=Oe[He];jr(Ne,oe,ae),ie.add(Ne)}else jr(Oe,oe,ae),ie.add(Oe)}),U=b.pop(),ie},this.compileAsync=function(R,j,oe=null){const ie=this.compile(R,j,oe);return new Promise(ae=>{function Oe(){if(ie.forEach(function(He){re.get(He).currentProgram.isReady()&&ie.delete(He)}),ie.size===0){ae(R);return}setTimeout(Oe,10)}Ct.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Xs=null;function Pi(R){Xs&&Xs(R)}function dn(){Hn.stop()}function An(){Hn.start()}const Hn=new Ov;Hn.setAnimationLoop(Pi),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(R){Xs=R,Ve.setAnimationLoop(R),R===null?Hn.stop():Hn.start()},Ve.addEventListener("sessionstart",dn),Ve.addEventListener("sessionend",An),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;q!==null&&q.renderStart(R,j);const oe=Ve.enabled===!0&&Ve.isPresenting===!0,ie=D!==null&&(ee===null||oe)&&D.begin(V,ee);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(j),j=Ve.getCamera()),R.isScene===!0&&R.onBeforeRender(V,R,j,ee),U=Ue.get(R,b.length),U.init(j),U.state.textureUnits=de.getTextureUnits(),b.push(U),tn.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),vt.setFromProjectionMatrix(tn,Wi,j.reversedDepth),dt=this.localClippingEnabled,xt=Ze.init(this.clippingPlanes,dt),N=Le.get(R,z.length),N.init(),z.push(N),Ve.enabled===!0&&Ve.isPresenting===!0){const He=V.xr.getDepthSensingMesh();He!==null&&fs(He,j,-1/0,V.sortObjects)}fs(R,j,0,V.sortObjects),N.finish(),V.sortObjects===!0&&N.sort(Ge,tt,j.reversedDepth),Wt=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Wt&&it.addToRenderList(N,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&Ze.beginShadows();const ae=U.state.shadowsArray;if(Qe.render(ae,R,j),xt===!0&&Ze.endShadows(),(ie&&D.hasRenderPass())===!1){const He=N.opaque,Ne=N.transmissive;if(U.setupLights(),j.isArrayCamera){const Xe=j.cameras;if(Ne.length>0)for(let ke=0,Je=Xe.length;ke<Je;ke++){const rt=Xe[ke];nl(He,Ne,R,rt)}Wt&&it.render(R);for(let ke=0,Je=Xe.length;ke<Je;ke++){const rt=Xe[ke];tl(N,R,rt,rt.viewport)}}else Ne.length>0&&nl(He,Ne,R,j),Wt&&it.render(R),tl(N,R,j)}ee!==null&&H===0&&(de.updateMultisampleRenderTarget(ee),de.updateRenderTargetMipmap(ee)),ie&&D.end(V),R.isScene===!0&&R.onAfterRender(V,R,j),Ie.resetDefaultState(),_e=-1,be=null,b.pop(),b.length>0?(U=b[b.length-1],de.setTextureUnits(U.state.textureUnits),xt===!0&&Ze.setGlobalState(V.clippingPlanes,U.state.camera)):U=null,z.pop(),z.length>0?N=z[z.length-1]:N=null,q!==null&&q.renderEnd()};function fs(R,j,oe,ie){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)oe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLightProbeGrid)U.pushLightProbeGrid(R);else if(R.isLight)U.pushLight(R),R.castShadow&&U.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||vt.intersectsSprite(R)){ie&&an.setFromMatrixPosition(R.matrixWorld).applyMatrix4(tn);const He=he.update(R),Ne=R.material;Ne.visible&&N.push(R,He,Ne,oe,an.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||vt.intersectsObject(R))){const He=he.update(R),Ne=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),an.copy(R.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),an.copy(He.boundingSphere.center)),an.applyMatrix4(R.matrixWorld).applyMatrix4(tn)),Array.isArray(Ne)){const Xe=He.groups;for(let ke=0,Je=Xe.length;ke<Je;ke++){const rt=Xe[ke],je=Ne[rt.materialIndex];je&&je.visible&&N.push(R,He,je,oe,an.z,rt)}}else Ne.visible&&N.push(R,He,Ne,oe,an.z,null)}}const Oe=R.children;for(let He=0,Ne=Oe.length;He<Ne;He++)fs(Oe[He],j,oe,ie)}function tl(R,j,oe,ie){const{opaque:ae,transmissive:Oe,transparent:He}=R;U.setupLightsView(oe),xt===!0&&Ze.setGlobalState(V.clippingPlanes,oe),ie&&E.viewport(w.copy(ie)),ae.length>0&&ds(ae,j,oe),Oe.length>0&&ds(Oe,j,oe),He.length>0&&ds(He,j,oe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function nl(R,j,oe,ie){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ie.id]===void 0){const je=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ie.id]=new Yi(1,1,{generateMipmaps:!0,type:je?Ta:hi,minFilter:Bs,samples:Math.max(4,P.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace})}const Oe=U.state.transmissionRenderTarget[ie.id],He=ie.viewport||w;Oe.setSize(He.z*V.transmissionResolutionScale,He.w*V.transmissionResolutionScale);const Ne=V.getRenderTarget(),Xe=V.getActiveCubeFace(),ke=V.getActiveMipmapLevel();V.setRenderTarget(Oe),V.getClearColor(Ce),ze=V.getClearAlpha(),ze<1&&V.setClearColor(16777215,.5),V.clear(),Wt&&it.render(oe);const Je=V.toneMapping;V.toneMapping=qi;const rt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),U.setupLightsView(ie),xt===!0&&Ze.setGlobalState(V.clippingPlanes,ie),ds(R,oe,ie),de.updateMultisampleRenderTarget(Oe),de.updateRenderTargetMipmap(Oe),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Tt=0,Qt=j.length;Tt<Qt;Tt++){const kt=j[Tt],{object:Lt,geometry:Ot,material:Be,group:Ln}=kt;if(Be.side===Sa&&Lt.layers.test(ie.layers)){const ht=Be.side;Be.side=Kn,Be.needsUpdate=!0,Ra(Lt,oe,ie,Ot,Be,Ln),Be.side=ht,Be.needsUpdate=!0,je=!0}}je===!0&&(de.updateMultisampleRenderTarget(Oe),de.updateRenderTargetMipmap(Oe))}V.setRenderTarget(Ne,Xe,ke),V.setClearColor(Ce,ze),rt!==void 0&&(ie.viewport=rt),V.toneMapping=Je}function ds(R,j,oe){const ie=j.isScene===!0?j.overrideMaterial:null;for(let ae=0,Oe=R.length;ae<Oe;ae++){const He=R[ae],{object:Ne,geometry:Xe,group:ke}=He;let Je=He.material;Je.allowOverride===!0&&ie!==null&&(Je=ie),Ne.layers.test(oe.layers)&&Ra(Ne,j,oe,Xe,Je,ke)}}function Ra(R,j,oe,ie,ae,Oe){R.onBeforeRender(V,j,oe,ie,ae,Oe),R.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ae.onBeforeRender(V,j,oe,ie,R,Oe),ae.transparent===!0&&ae.side===Sa&&ae.forceSinglePass===!1?(ae.side=Kn,ae.needsUpdate=!0,V.renderBufferDirect(oe,j,ie,ae,R,Oe),ae.side=cs,ae.needsUpdate=!0,V.renderBufferDirect(oe,j,ie,ae,R,Oe),ae.side=Sa):V.renderBufferDirect(oe,j,ie,ae,R,Oe),R.onAfterRender(V,j,oe,ie,ae,Oe)}function Ca(R,j,oe){j.isScene!==!0&&(j=cn);const ie=re.get(R),ae=U.state.lights,Oe=U.state.shadowsArray,He=ae.state.version,Ne=Re.getParameters(R,ae.state,Oe,j,oe,U.state.lightProbeGridArray),Xe=Re.getProgramCacheKey(Ne);let ke=ie.programs;ie.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?j.environment:null,ie.fog=j.fog;const Je=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ie.envMap=Te.get(R.envMap||ie.environment,Je),ie.envMapRotation=ie.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,ke===void 0&&(R.addEventListener("dispose",Jn),ke=new Map,ie.programs=ke);let rt=ke.get(Xe);if(rt!==void 0){if(ie.currentProgram===rt&&ie.lightsStateVersion===He)return Ji(R,Ne),rt}else Ne.uniforms=Re.getUniforms(R),q!==null&&R.isNodeMaterial&&q.build(R,oe,Ne),R.onBeforeCompile(Ne,V),rt=Re.acquireProgram(Ne,Xe),ke.set(Xe,rt),ie.uniforms=Ne.uniforms;const je=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(je.clippingPlanes=Ze.uniform),Ji(R,Ne),ie.needsLights=il(R),ie.lightsStateVersion=He,ie.needsLights&&(je.ambientLightColor.value=ae.state.ambient,je.lightProbe.value=ae.state.probe,je.directionalLights.value=ae.state.directional,je.directionalLightShadows.value=ae.state.directionalShadow,je.spotLights.value=ae.state.spot,je.spotLightShadows.value=ae.state.spotShadow,je.rectAreaLights.value=ae.state.rectArea,je.ltc_1.value=ae.state.rectAreaLTC1,je.ltc_2.value=ae.state.rectAreaLTC2,je.pointLights.value=ae.state.point,je.pointLightShadows.value=ae.state.pointShadow,je.hemisphereLights.value=ae.state.hemi,je.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,je.spotLightMatrix.value=ae.state.spotLightMatrix,je.spotLightMap.value=ae.state.spotLightMap,je.pointShadowMatrix.value=ae.state.pointShadowMatrix),ie.lightProbeGrid=U.state.lightProbeGridArray.length>0,ie.currentProgram=rt,ie.uniformsList=null,rt}function Qi(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Gc.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Ji(R,j){const oe=re.get(R);oe.outputColorSpace=j.outputColorSpace,oe.batching=j.batching,oe.batchingColor=j.batchingColor,oe.instancing=j.instancing,oe.instancingColor=j.instancingColor,oe.instancingMorph=j.instancingMorph,oe.skinning=j.skinning,oe.morphTargets=j.morphTargets,oe.morphNormals=j.morphNormals,oe.morphColors=j.morphColors,oe.morphTargetsCount=j.morphTargetsCount,oe.numClippingPlanes=j.numClippingPlanes,oe.numIntersection=j.numClipIntersection,oe.vertexAlphas=j.vertexAlphas,oe.vertexTangents=j.vertexTangents,oe.toneMapping=j.toneMapping}function hs(R,j){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;T.setFromMatrixPosition(j.matrixWorld);for(let oe=0,ie=R.length;oe<ie;oe++){const ae=R[oe];if(ae.texture!==null&&ae.boundingBox.containsPoint(T))return ae}return null}function wa(R,j,oe,ie,ae){j.isScene!==!0&&(j=cn),de.resetTextureUnits();const Oe=j.fog,He=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?j.environment:null,Ne=ee===null?V.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:St.workingColorSpace,Xe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,ke=Te.get(ie.envMap||He,Xe),Je=ie.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,rt=!!oe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),je=!!oe.morphAttributes.position,Tt=!!oe.morphAttributes.normal,Qt=!!oe.morphAttributes.color;let kt=qi;ie.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(kt=V.toneMapping);const Lt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ot=Lt!==void 0?Lt.length:0,Be=re.get(ie),Ln=U.state.lights;if(xt===!0&&(dt===!0||R!==be)){const Ut=R===be&&ie.id===_e;Ze.setState(ie,R,Ut)}let ht=!1;ie.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Ln.state.version||Be.outputColorSpace!==Ne||ae.isBatchedMesh&&Be.batching===!1||!ae.isBatchedMesh&&Be.batching===!0||ae.isBatchedMesh&&Be.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&Be.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&Be.instancing===!1||!ae.isInstancedMesh&&Be.instancing===!0||ae.isSkinnedMesh&&Be.skinning===!1||!ae.isSkinnedMesh&&Be.skinning===!0||ae.isInstancedMesh&&Be.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Be.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Be.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Be.instancingMorph===!1&&ae.morphTexture!==null||Be.envMap!==ke||ie.fog===!0&&Be.fog!==Oe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Ze.numPlanes||Be.numIntersection!==Ze.numIntersection)||Be.vertexAlphas!==Je||Be.vertexTangents!==rt||Be.morphTargets!==je||Be.morphNormals!==Tt||Be.morphColors!==Qt||Be.toneMapping!==kt||Be.morphTargetsCount!==Ot||!!Be.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,Be.__version=ie.version);let xn=Be.currentProgram;ht===!0&&(xn=Ca(ie,j,ae),q&&ie.isNodeMaterial&&q.onUpdateProgram(ie,xn,Be));let $n=!1,bi=!1,ei=!1;const Pt=xn.getUniforms(),Jt=Be.uniforms;if(E.useProgram(xn.program)&&($n=!0,bi=!0,ei=!0),ie.id!==_e&&(_e=ie.id,bi=!0),Be.needsLights){const Ut=hs(U.state.lightProbeGridArray,ae);Be.lightProbeGrid!==Ut&&(Be.lightProbeGrid=Ut,bi=!0)}if($n||be!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Pt.setValue(Z,"projectionMatrix",R.projectionMatrix),Pt.setValue(Z,"viewMatrix",R.matrixWorldInverse);const zi=Pt.map.cameraPosition;zi!==void 0&&zi.setValue(Z,nn.setFromMatrixPosition(R.matrixWorld)),P.logarithmicDepthBuffer&&Pt.setValue(Z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Pt.setValue(Z,"isOrthographic",R.isOrthographicCamera===!0),be!==R&&(be=R,bi=!0,ei=!0)}if(Be.needsLights&&(Ln.state.directionalShadowMap.length>0&&Pt.setValue(Z,"directionalShadowMap",Ln.state.directionalShadowMap,de),Ln.state.spotShadowMap.length>0&&Pt.setValue(Z,"spotShadowMap",Ln.state.spotShadowMap,de),Ln.state.pointShadowMap.length>0&&Pt.setValue(Z,"pointShadowMap",Ln.state.pointShadowMap,de)),ae.isSkinnedMesh){Pt.setOptional(Z,ae,"bindMatrix"),Pt.setOptional(Z,ae,"bindMatrixInverse");const Ut=ae.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Pt.setValue(Z,"boneTexture",Ut.boneTexture,de))}ae.isBatchedMesh&&(Pt.setOptional(Z,ae,"batchingTexture"),Pt.setValue(Z,"batchingTexture",ae._matricesTexture,de),Pt.setOptional(Z,ae,"batchingIdTexture"),Pt.setValue(Z,"batchingIdTexture",ae._indirectTexture,de),Pt.setOptional(Z,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Pt.setValue(Z,"batchingColorTexture",ae._colorsTexture,de));const Ti=oe.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&Y.update(ae,oe,xn),(bi||Be.receiveShadow!==ae.receiveShadow)&&(Be.receiveShadow=ae.receiveShadow,Pt.setValue(Z,"receiveShadow",ae.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&j.environment!==null&&(Jt.envMapIntensity.value=j.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=$A()),bi){if(Pt.setValue(Z,"toneMappingExposure",V.toneMappingExposure),Be.needsLights&&hn(Jt,ei),Oe&&ie.fog===!0&&Fe.refreshFogUniforms(Jt,Oe),Fe.refreshMaterialUniforms(Jt,ie,Ee,Se,U.state.transmissionRenderTarget[R.id]),Be.needsLights&&Be.lightProbeGrid){const Ut=Be.lightProbeGrid;Jt.probesSH.value=Ut.texture,Jt.probesMin.value.copy(Ut.boundingBox.min),Jt.probesMax.value.copy(Ut.boundingBox.max),Jt.probesResolution.value.copy(Ut.resolution)}Gc.upload(Z,Qi(Be),Jt,de)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Gc.upload(Z,Qi(Be),Jt,de),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Pt.setValue(Z,"center",ae.center),Pt.setValue(Z,"modelViewMatrix",ae.modelViewMatrix),Pt.setValue(Z,"normalMatrix",ae.normalMatrix),Pt.setValue(Z,"modelMatrix",ae.matrixWorld),ie.uniformsGroups!==void 0){const Ut=ie.uniformsGroups;for(let zi=0,Da=Ut.length;zi<Da;zi++){const ps=Ut[zi];Me.update(ps,xn),Me.bind(ps,xn)}}return xn}function hn(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function il(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(R,j,oe){const ie=re.get(R);ie.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),re.get(R.texture).__webglTexture=j,re.get(R.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:oe,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const oe=re.get(R);oe.__webglFramebuffer=j,oe.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(R,j=0,oe=0){ee=R,B=j,H=oe;let ie=null,ae=!1,Oe=!1;if(R){const Ne=re.get(R);if(Ne.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Z.FRAMEBUFFER,Ne.__webglFramebuffer),w.copy(R.viewport),X.copy(R.scissor),me=R.scissorTest,E.viewport(w),E.scissor(X),E.setScissorTest(me),_e=-1;return}else if(Ne.__webglFramebuffer===void 0)de.setupRenderTarget(R);else if(Ne.__hasExternalTextures)de.rebindTextures(R,re.get(R.texture).__webglTexture,re.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Je=R.depthTexture;if(Ne.__boundDepthTexture!==Je){if(Je!==null&&re.has(Je)&&(R.width!==Je.image.width||R.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(R)}}const Xe=R.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Oe=!0);const ke=re.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ke[j])?ie=ke[j][oe]:ie=ke[j],ae=!0):R.samples>0&&de.useMultisampledRTT(R)===!1?ie=re.get(R).__webglMultisampledFramebuffer:Array.isArray(ke)?ie=ke[oe]:ie=ke,w.copy(R.viewport),X.copy(R.scissor),me=R.scissorTest}else w.copy(Ke).multiplyScalar(Ee).floor(),X.copy(Yt).multiplyScalar(Ee).floor(),me=ut;if(oe!==0&&(ie=ce),E.bindFramebuffer(Z.FRAMEBUFFER,ie)&&E.drawBuffers(R,ie),E.viewport(w),E.scissor(X),E.setScissorTest(me),ae){const Ne=re.get(R.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ne.__webglTexture,oe)}else if(Oe){const Ne=j;for(let Xe=0;Xe<R.textures.length;Xe++){const ke=re.get(R.textures[Xe]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+Xe,ke.__webglTexture,oe,Ne)}}else if(R!==null&&oe!==0){const Ne=re.get(R.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ne.__webglTexture,oe)}_e=-1},this.readRenderTargetPixels=function(R,j,oe,ie,ae,Oe,He,Ne=0){if(!(R&&R.isWebGLRenderTarget)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=re.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(Xe=Xe[He]),Xe){E.bindFramebuffer(Z.FRAMEBUFFER,Xe);try{const ke=R.textures[Ne],Je=ke.format,rt=ke.type;if(R.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Ne),!P.textureFormatReadable(Je)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(rt)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-ie&&oe>=0&&oe<=R.height-ae&&Z.readPixels(j,oe,ie,ae,we.convert(Je),we.convert(rt),Oe)}finally{const ke=ee!==null?re.get(ee).__webglFramebuffer:null;E.bindFramebuffer(Z.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(R,j,oe,ie,ae,Oe,He,Ne=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=re.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(Xe=Xe[He]),Xe)if(j>=0&&j<=R.width-ie&&oe>=0&&oe<=R.height-ae){E.bindFramebuffer(Z.FRAMEBUFFER,Xe);const ke=R.textures[Ne],Je=ke.format,rt=ke.type;if(R.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Ne),!P.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,je),Z.bufferData(Z.PIXEL_PACK_BUFFER,Oe.byteLength,Z.STREAM_READ),Z.readPixels(j,oe,ie,ae,we.convert(Je),we.convert(rt),0);const Tt=ee!==null?re.get(ee).__webglFramebuffer:null;E.bindFramebuffer(Z.FRAMEBUFFER,Tt);const Qt=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await gM(Z,Qt,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,je),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Oe),Z.deleteBuffer(je),Z.deleteSync(Qt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,oe=0){const ie=Math.pow(2,-oe),ae=Math.floor(R.image.width*ie),Oe=Math.floor(R.image.height*ie),He=j!==null?j.x:0,Ne=j!==null?j.y:0;de.setTexture2D(R,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,oe,0,0,He,Ne,ae,Oe),E.unbindTexture()},this.copyTextureToTexture=function(R,j,oe=null,ie=null,ae=0,Oe=0){let He,Ne,Xe,ke,Je,rt,je,Tt,Qt;const kt=R.isCompressedTexture?R.mipmaps[Oe]:R.image;if(oe!==null)He=oe.max.x-oe.min.x,Ne=oe.max.y-oe.min.y,Xe=oe.isBox3?oe.max.z-oe.min.z:1,ke=oe.min.x,Je=oe.min.y,rt=oe.isBox3?oe.min.z:0;else{const Jt=Math.pow(2,-ae);He=Math.floor(kt.width*Jt),Ne=Math.floor(kt.height*Jt),R.isDataArrayTexture?Xe=kt.depth:R.isData3DTexture?Xe=Math.floor(kt.depth*Jt):Xe=1,ke=0,Je=0,rt=0}ie!==null?(je=ie.x,Tt=ie.y,Qt=ie.z):(je=0,Tt=0,Qt=0);const Lt=we.convert(j.format),Ot=we.convert(j.type);let Be;j.isData3DTexture?(de.setTexture3D(j,0),Be=Z.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(de.setTexture2DArray(j,0),Be=Z.TEXTURE_2D_ARRAY):(de.setTexture2D(j,0),Be=Z.TEXTURE_2D),E.activeTexture(Z.TEXTURE0),E.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,j.flipY),E.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),E.pixelStorei(Z.UNPACK_ALIGNMENT,j.unpackAlignment);const Ln=E.getParameter(Z.UNPACK_ROW_LENGTH),ht=E.getParameter(Z.UNPACK_IMAGE_HEIGHT),xn=E.getParameter(Z.UNPACK_SKIP_PIXELS),$n=E.getParameter(Z.UNPACK_SKIP_ROWS),bi=E.getParameter(Z.UNPACK_SKIP_IMAGES);E.pixelStorei(Z.UNPACK_ROW_LENGTH,kt.width),E.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,kt.height),E.pixelStorei(Z.UNPACK_SKIP_PIXELS,ke),E.pixelStorei(Z.UNPACK_SKIP_ROWS,Je),E.pixelStorei(Z.UNPACK_SKIP_IMAGES,rt);const ei=R.isDataArrayTexture||R.isData3DTexture,Pt=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const Jt=re.get(R),Ti=re.get(j),Ut=re.get(Jt.__renderTarget),zi=re.get(Ti.__renderTarget);E.bindFramebuffer(Z.READ_FRAMEBUFFER,Ut.__webglFramebuffer),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Da=0;Da<Xe;Da++)ei&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,re.get(R).__webglTexture,ae,rt+Da),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,re.get(j).__webglTexture,Oe,Qt+Da)),Z.blitFramebuffer(ke,Je,He,Ne,je,Tt,He,Ne,Z.DEPTH_BUFFER_BIT,Z.NEAREST);E.bindFramebuffer(Z.READ_FRAMEBUFFER,null),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(ae!==0||R.isRenderTargetTexture||re.has(R)){const Jt=re.get(R),Ti=re.get(j);E.bindFramebuffer(Z.READ_FRAMEBUFFER,pe),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Q);for(let Ut=0;Ut<Xe;Ut++)ei?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Jt.__webglTexture,ae,rt+Ut):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Jt.__webglTexture,ae),Pt?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ti.__webglTexture,Oe,Qt+Ut):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ti.__webglTexture,Oe),ae!==0?Z.blitFramebuffer(ke,Je,He,Ne,je,Tt,He,Ne,Z.COLOR_BUFFER_BIT,Z.NEAREST):Pt?Z.copyTexSubImage3D(Be,Oe,je,Tt,Qt+Ut,ke,Je,He,Ne):Z.copyTexSubImage2D(Be,Oe,je,Tt,ke,Je,He,Ne);E.bindFramebuffer(Z.READ_FRAMEBUFFER,null),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Pt?R.isDataTexture||R.isData3DTexture?Z.texSubImage3D(Be,Oe,je,Tt,Qt,He,Ne,Xe,Lt,Ot,kt.data):j.isCompressedArrayTexture?Z.compressedTexSubImage3D(Be,Oe,je,Tt,Qt,He,Ne,Xe,Lt,kt.data):Z.texSubImage3D(Be,Oe,je,Tt,Qt,He,Ne,Xe,Lt,Ot,kt):R.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Oe,je,Tt,He,Ne,Lt,Ot,kt.data):R.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Oe,je,Tt,kt.width,kt.height,Lt,kt.data):Z.texSubImage2D(Z.TEXTURE_2D,Oe,je,Tt,He,Ne,Lt,Ot,kt);E.pixelStorei(Z.UNPACK_ROW_LENGTH,Ln),E.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,ht),E.pixelStorei(Z.UNPACK_SKIP_PIXELS,xn),E.pixelStorei(Z.UNPACK_SKIP_ROWS,$n),E.pixelStorei(Z.UNPACK_SKIP_IMAGES,bi),Oe===0&&j.generateMipmaps&&Z.generateMipmap(Be),E.unbindTexture()},this.initRenderTarget=function(R){re.get(R).__webglFramebuffer===void 0&&de.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?de.setTextureCube(R,0):R.isData3DTexture?de.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?de.setTexture2DArray(R,0):de.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){B=0,H=0,ee=null,E.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),i.unpackColorSpace=St._getUnpackColorSpace()}}function ui(r,e,i,s){return new Zn(new Xr(r,e,i,2,2,2),new Yo({color:s,roughness:.48,metalness:.03}))}function t2(){const r=qt.useRef(null);return qt.useEffect(()=>{const e=r.current;if(!e)return;let i;try{i=new e2({canvas:e,alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch{e.dataset.failed="true";return}const s=window.matchMedia("(max-width: 760px)").matches,l=window.matchMedia("(prefers-reduced-motion: reduce)").matches;i.setPixelRatio(Math.min(window.devicePixelRatio,s?1.1:1.55)),i.outputColorSpace=fi,i.shadowMap.enabled=!s,i.shadowMap.type=sv;const c=new NM,d=new di(32,1,.1,100);d.position.set(6,5.2,8),c.add(new QM(16777215,12246995,3.3));const p=new tE(16774623,5);p.position.set(-5,8,6),p.castShadow=!0,c.add(p);const m=new $M(7915508,25,14);m.position.set(4,3,4),c.add(m);const h=new os;h.rotation.set(.06,-.42,0),c.add(h);const x=ui(7.4,.3,5.6,15919317);x.position.y=-1.75,h.add(x);const y=ui(5.7,.28,2.45,16775920);y.position.y=-.25,h.add(y),[-2.3,2.3].forEach(w=>[-.72,.72].forEach(X=>{const me=ui(.24,1.55,.24,2371919);me.position.set(w,-1.05,X),h.add(me)}));const g=new os,S=ui(2.55,1.55,.18,2371919),A=ui(2.28,1.27,.05,9361663);A.position.z=.12,A.material.emissive=new Et(5418723),A.material.emissiveIntensity=.32;const L=ui(.18,.65,.18,3424863);L.position.y=-1.05;const M=ui(1.05,.12,.54,3424863);M.position.y=-1.38,g.add(S,A,L,M),g.position.set(-.55,1.08,-.28),g.rotation.y=.08,h.add(g);const v=[];[1.5,1.8,1.12,1.62,.92].forEach((w,X)=>{const me=ui(w,.055,.025,X%2?16751465:2707056);me.position.set(-.35+w*.08,.35-X*.18,.16),g.add(me),v.push(me)});const O=ui(2.25,.14,.78,14476777);O.position.set(-.35,.02,.75),O.rotation.y=.08,h.add(O);for(let w=0;w<3;w+=1)for(let X=0;X<9;X+=1){const me=ui(.15,.04,.12,(w+X)%7===0?16751465:16777215);me.position.set(-1.08+X*.23,.105,.53+w*.2),O.add(me)}const I=new os,T=new Yo({color:8706237,roughness:.42}),N=new Zn(new qc(.42,18,12),T);N.scale.set(1.2,.35,.9),N.position.x=-.3;const U=N.clone();U.position.x=.3;const z=ui(.7,.28,.55,8706237);I.add(N,U,z);const b=new Zn(new Kh(.08,.08,.08,14),new Yo({color:2371919}));b.rotation.x=Math.PI/2,b.position.set(-.28,.2,.03),I.add(b),[16751465,16766571].forEach((w,X)=>{const me=new Zn(new qc(.075,12,8),new Yo({color:w}));me.scale.y=.45,me.position.set(.25+X*.16,.17,-.02+X*.05),I.add(me)}),I.position.set(1.85,.22,.65),I.rotation.set(-.2,-.35,.1),h.add(I);const D=new os,V=[16751465,7915508,8706237,16766571,10390527];for(let w=0;w<(s?4:7);w+=1){const X=ui(.42,.42,.42,V[w%V.length]);X.position.set(-2.4+w%3*.52,.2+Math.floor(w/3)*.5,-.75),X.rotation.y=w*.22,D.add(X)}h.add(D);const k=[];if(!s)for(let w=0;w<9;w+=1){const X=w%2===0?new Zn(new Jh(.13,0),new Yo({color:V[w%V.length],roughness:.35})):ui(.2,.2,.2,V[w%V.length]),me=w/9*Math.PI*2;X.position.set(Math.cos(me)*3.5,.7+Math.sin(w*1.7)*1.4,Math.sin(me)*2.4),h.add(X),k.push(X)}h.traverse(w=>{w.isMesh&&(w.castShadow=!s)});const q=new ft;let ce=0;const pe=w=>q.set(w.clientX/window.innerWidth-.5,w.clientY/window.innerHeight-.5),Q=()=>{ce=Math.min(window.scrollY/Math.max(window.innerHeight*1.35,1),1)};window.addEventListener("pointermove",pe,{passive:!0}),window.addEventListener("scroll",Q,{passive:!0});const B=()=>{const w=e.getBoundingClientRect();i.setSize(w.width,w.height,!1),d.aspect=w.width/Math.max(w.height,1),d.updateProjectionMatrix()},H=new ResizeObserver(B);H.observe(e),B();const ee=new aE;let _e=0;const be=()=>{const w=ee.getElapsedTime();h.rotation.y+=(-.42+q.x*.22+ce*.16-h.rotation.y)*.035,h.rotation.x+=(.06-q.y*.1+ce*.05-h.rotation.x)*.035,d.position.y+=(5.2-ce*.7-d.position.y)*.025,d.position.z+=(8+ce*.6-d.position.z)*.025,d.lookAt(0,-.15+ce*.25,0),l||(I.position.y=.22+Math.sin(w*1.25)*.055,D.rotation.y=Math.sin(w*.45)*.08,v.forEach((X,me)=>{X.scale.x=.9+Math.sin(w*1.1+me)*.08}),k.forEach((X,me)=>{X.rotation.x+=.004+me*3e-4,X.rotation.y+=.006})),i.render(c,d),_e=requestAnimationFrame(be)};return be(),()=>{cancelAnimationFrame(_e),H.disconnect(),window.removeEventListener("pointermove",pe),window.removeEventListener("scroll",Q),c.traverse(w=>{if(!w.isMesh)return;w.geometry?.dispose(),(Array.isArray(w.material)?w.material:[w.material]).forEach(me=>me?.dispose())}),i.dispose()}},[]),F.jsxs(F.Fragment,{children:[F.jsx("canvas",{ref:r,className:"workshop-canvas","aria-label":"Interactive 3D game developer workshop desk"}),F.jsxs("div",{className:"workshop-canvas-fallback","aria-label":"Game developer workshop illustration",children:[F.jsx("span",{children:"UNITY"}),F.jsxs("strong",{children:["GAME",F.jsx("br",{}),"WORKSHOP"]})]})]})}const n2={tr:{nav:["Hakkımda","Projeler","Google Play","Oyun Köşesi","Yetenekler","İletişim"],language:"EN",heroTitle:"Furkan Şengül",heroRole:"Mobile Game Developer",heroText:"Unity ve C# ile mobil puzzle ve casual oyunlar geliştiriyorum. Odak noktam temiz mimari, güçlü game feel, Android performansı ve yayınlanabilir ürün kalitesi.",primaryCta:"Projeleri incele",secondaryCta:"Google Play",featuredTitle:"Color Blast Match",featuredText:"Aktif geliştirme sürecindeki match puzzle prototipi. Level dengesi, görsel kalite ve mobil oynanış akışı düzenli olarak iyileştiriliyor.",stats:[["11+","Oyun ve araç"],["Unity/C#","Ana teknoloji"],["Google Play","Android yayın akışı"]],aboutTitle:"Mobil oyunları prototipten yayın kalitesine taşımaya odaklanıyorum.",aboutText:"Junior Unity Game Developer olarak mobil puzzle ve casual oyunlarda gameplay sistemleri, level logic, UI akışı, object pooling, event-driven mimari ve Android build hazırlığı üzerinde çalışıyorum. CV’deki deneyimimi mevcut projelerle birleştirerek bu portföyü daha ürün odaklı hale getirdim.",experienceTitle:"Deneyim",experience:[{role:"Jr. Game Developer",place:"Virtual Projects",date:"2025 - 2026"},{role:"Intern Game Developer",place:"Ice Frost",date:"2024"}],highlights:["OOP/SOLID ve modüler Unity mimarisi","Object Pooling, ScriptableObject ve event-driven sistemler","DOTween, Zenject, Unity Profiler ve Android build pipeline","SDK entegrasyonu, Firebase Analytics ve Google Play Console","Game feel, haptic, audio, VFX ve UI polish"],playTitle:"Google Play",playText:"Fill The Block Google Play üzerinde konumlandırılan mobil puzzle projesi. Android optimizasyonu, SDK entegrasyonu, Firebase Analytics, reklam altyapısı, performans ve mağaza beklentileri ürün akışının parçası.",playCta:"Google Play sayfası",playWebsite:"Oyun websitesi",playPrev:"Önceki oyun",playNext:"Sonraki oyun",playCards:[["Fill The Block","Google Play yayında / yayın akışı hazır"],["Android Pipeline","SDK, Firebase Analytics, reklam ve build akışı"],["Store Ready Polish","Haptic, audio, particle pooling ve mobil UI"]],gameCornerTitle:"Oyun Köşesi",gameCornerText:"Portföyü gezerken kısa bir mola vermek isteyenler için sayfanın içine küçük bir canvas oyun koydum.",gameCornerBadge:"Mini oyun",gameCornerOpen:"Tam ekranda aç",projectsTitle:"Seçilmiş projeler",projectsText:"CV’deki teknik deneyimle harmanlanmış mobil puzzle prototipleri, client işi, Unity Editor aracı ve yayınlanmış oyun çalışmaları.",allFilter:"Tümü",watchVideo:"Videoyu izle",visitProject:"Projeye git",githubDetails:"GitHub & detaylar",technicalDetails:"Teknik Detaylar",googlePlay:"Google Play",pendingTitle:"Google Play Durumu",pendingText:"Bu oyun için Google Play yayını hazırlık aşamasında.",skillsTitle:"Teknik odak",skillsText:"Kod tarafında ölçeklenebilir mimariyi, oyun tarafında ise hızlı ve tatmin edici mobil deneyimi önceliklendiriyorum.",contactTitle:"Yeni oyun, prototip veya freelance iş için konuşalım.",contactText:"Unity tabanlı mobil oyun geliştirme, level tool üretimi veya mevcut prototipleri yayınlanabilir seviyeye taşıma konusunda yardımcı olabilirim.",adminTitle:"Admin ziyaret paneli",adminSubtitle:"Shift + A ile acilir. Veriler Supabase backend baglantisi aktifse dolar.",adminPassword:"Admin sifresi",adminUnlock:"Paneli ac",adminRefresh:"Yenile",adminToday:"Bugun",adminTotal:"Toplam ziyaret",adminUnique:"Tekil ziyaretci",adminLive:"Son 10 dk aktif",adminCvDownloads:"CV indir",adminRecent:"Son hareketler",adminHourly:"Saatlere gore",adminProjects:"Proje tiklamalari",adminNoData:"Henuz veri yok.",adminNotConfigured:"Analytics endpoint ayari eksik. VITE_STATS_ENDPOINT eklenince panel calisir.",footer:"© 2026 Furkan Şengül. Game Developer Portfolio."},en:{nav:["About","Projects","Google Play","Game Corner","Focus","Contact"],language:"TR",heroTitle:"Furkan Şengül",heroRole:"Mobile Game Developer",heroText:"I build mobile puzzle and casual games with Unity and C#. My focus is clean architecture, strong game feel, Android performance and release-ready quality.",primaryCta:"Explore projects",secondaryCta:"Google Play",featuredTitle:"Color Blast Match",featuredText:"An actively developed match puzzle prototype. Level balance, visual quality and mobile gameplay flow are improved continuously.",stats:[["11+","Games and tools"],["Unity/C#","Core technology"],["Google Play","Android release flow"]],aboutTitle:"I focus on taking mobile games from prototype to release quality.",aboutText:"As a Junior Unity Game Developer, I work on gameplay systems, level logic, UI flow, object pooling, event-driven architecture and Android build preparation for mobile puzzle and casual games. I blended the CV experience with the existing projects so the portfolio reads like a product-focused profile.",experienceTitle:"Experience",experience:[{role:"Jr. Game Developer",place:"Virtual Projects",date:"2025 - 2026"},{role:"Intern Game Developer",place:"Ice Frost",date:"2024"}],highlights:["OOP/SOLID and modular Unity architecture","Object Pooling, ScriptableObject and event-driven systems","DOTween, Zenject, Unity Profiler and Android build pipeline","SDK integration, Firebase Analytics and Google Play Console","Game feel, haptics, audio, VFX and UI polish"],playTitle:"Google Play",playText:"Fill The Block is the mobile puzzle project positioned on Google Play. Android optimization, SDK integration, Firebase Analytics, ad foundations, performance and store expectations are part of the product flow.",playCta:"Google Play page",playWebsite:"Game website",playPrev:"Previous game",playNext:"Next game",playCards:[["Fill The Block","Published / release flow ready"],["Android Pipeline","SDK, Firebase Analytics, ads and build flow"],["Store Ready Polish","Haptics, audio, particle pooling and mobile UI"]],gameCornerTitle:"Game Corner",gameCornerText:"A small canvas game embedded into the portfolio for visitors who want a quick break while browsing.",gameCornerBadge:"Mini game",gameCornerOpen:"Open full screen",projectsTitle:"Selected projects",projectsText:"Mobile puzzle prototypes, client work, Unity Editor tooling and released game work blended with the technical experience from the CV.",allFilter:"All",watchVideo:"Watch video",visitProject:"Visit project",githubDetails:"GitHub & details",technicalDetails:"Technical Details",googlePlay:"Google Play",pendingTitle:"Google Play Status",pendingText:"This game is currently being prepared for Google Play release.",skillsTitle:"Technical focus",skillsText:"On the code side I prioritize scalable architecture; on the game side I prioritize fast and satisfying mobile play.",contactTitle:"Let’s talk about a new game, prototype or freelance build.",contactText:"I can help with Unity-based mobile game development, level tooling or taking an existing prototype closer to release quality.",adminTitle:"Admin visitor panel",adminSubtitle:"Opens with Shift + A. Data appears when the Supabase backend is configured.",adminPassword:"Admin password",adminUnlock:"Unlock panel",adminRefresh:"Refresh",adminToday:"Today",adminTotal:"Total visits",adminUnique:"Unique visitors",adminLive:"Active last 10m",adminCvDownloads:"CV downloads",adminRecent:"Recent activity",adminHourly:"By hour",adminProjects:"Project clicks",adminNoData:"No data yet.",adminNotConfigured:"Analytics endpoint is missing. Add VITE_STATS_ENDPOINT to enable the panel.",footer:"© 2026 Furkan Şengül. Game Developer Portfolio."}},kd=[{id:"color-blast-match",title:"Color Blast Match",status:{tr:"Aktif prototip",en:"Active prototype"},description:{tr:"Match puzzle prototipi. Level dengesi, görsel kalite, mobile game feel ve yayınlanabilir sistem akışı üzerinde aktif geliştirme sürüyor.",en:"A match puzzle prototype with active work on level balance, visual quality, mobile game feel and release-ready systems."},image:"Funny.png",previewVideo:"ColorBlastMatchHero.mp4",video:"ColorBlastMatchHero.mp4",tags:["Unity","C#","Match Puzzle","Mobile"],category:"Puzzle",accent:"#23d3b2",googlePending:!0},{id:"level-generator",title:"Unity Level Generator",status:{tr:"UPM Editor aracı",en:"UPM Editor tool"},description:{tr:"Odin TableMatrix ile renk tabanlı lane/grid seviyeleri görsel düzenleyen Unity Editor aracı. GridX/GridY, canlı renk bütçesi, validasyon, auto-fill, Undo ve LevelData ScriptableObject'e kayıt akışı içerir.",en:"A Unity Editor level authoring tool for color-based lane/grid puzzles. It uses Odin TableMatrix, GridX/GridY editing, live color budgets, validation, auto-fill, Undo and LevelData ScriptableObject saving."},image:"LevelGenerator.png",tags:["Unity","C#","Odin","ScriptableObject"],category:"Tooling",accent:"#f6b73c",github:"https://github.com/eFurkanSngl/Unity-Level-Generator"},{id:"unity-folder-forge",title:"Unity Folder Forge",status:{tr:"Unity Editor paketi",en:"Unity Editor package"},description:{tr:"Unity Editor içinde hızlı proje klasör yapısı oluşturan Tools paneli. Seçili ana klasöre alt klasör ekleme, Scripts/Sprites presetleri ve root path kontrolü sunar.",en:"A Unity Editor Tools panel for quickly creating project folder structures, with selected-folder subfolders, Scripts/Sprites presets and root path control."},image:"UnityFolderForge.png",video:"UnityFolderForge-demo.mp4",tags:["Unity","C#","Editor Tool","UPM"],category:"Tooling",accent:"#7dd3fc",github:"https://github.com/eFurkanSngl/Unity-Folder-Forge"},{id:"fill-the-block",title:"Fill The Block",status:{tr:"Google Play",en:"Google Play"},description:{tr:"Grid tabanlı mobil puzzle oyunu. ScriptableObject data akışı, object pooling, localized grid validation, particle pooling, audio/haptic servisleri ve Google Play süreci içerir.",en:"A grid-based mobile puzzle game with ScriptableObject data flow, object pooling, localized grid validation, particle pooling, audio/haptic services and Google Play workflow."},image:"FTB.png",tags:["Unity","C#","Google Play","Performance"],category:"Released",accent:"#ff6b5f",play:"https://mellifluous-faloodeh-fbbf29.netlify.app/#game",googlePlay:"https://play.google.com/store/apps/details?id=com.SGLGAMES.FillTheBlocks"},{id:"find-the-differences",title:"DoubleTake",status:{tr:"Freelance client işi",en:"Freelance client work"},description:{tr:"AI kişiselleştirme akışı olan 2D fark bulma oyunu. Difference detection, hint/lives sistemi, player progression, coin economy ve IAP-ready store yapısı geliştirildi.",en:"A 2D spot-the-difference game with AI personalization, difference detection, hint/lives systems, player progression, coin economy and IAP-ready store structure."},image:"FDTH.png",video:"GAmePlayVideos.mp4",tags:["Unity","C#","AI Flow","Client"],category:"Client",accent:"#5cc8ff",googlePlay:"https://play.google.com/store/apps/details?id=com.drawtopia.doubletake"},{id:"block-sort",title:"Block Sort",status:{tr:"Virtual Projects",en:"Virtual Projects"},description:{tr:"Renkli blokları doğru sırayla eşleştirme ve zincirleme reaksiyon oluşturma üzerine kurulu tekrar oynanabilir puzzle deneyimi.",en:"A replayable puzzle experience built around sorting colorful blocks, matching colors and creating chain reactions."},image:"blocksortss.png",video:"Block Sort.mp4",tags:["Unity","C#","Sorting","Casual"],category:"Puzzle",accent:"#a9e44d"},{id:"royal-match-clone",title:"Royal Match Clone",status:{tr:"Match-3 clone",en:"Match-3 clone"},description:{tr:"Match-3 core, L/T/2x2 shape detection, rocket, bomb, light bomb, propeller ve obstacle sistemi içeren modular prototip.",en:"A modular prototype with Match-3 core, L/T/2x2 shape detection, rockets, bombs, light bomb, propeller and obstacle systems."},image:"RoyalMatch.png",video:"royal-match-video.mp4",tags:["Unity","Zenject","Object Pooling","DOTween"],category:"Puzzle",accent:"#d9b563",github:"https://github.com/eFurkanSngl/Royal-Match-Clone"},{id:"this-is-blast",title:"This is Blast Clone",status:{tr:"Tap-to-blast",en:"Tap-to-blast"},description:{tr:"Zenject SignalBus, ScriptableObject grid data, object pooling ve güçlü squash/push feedback ile GC allocation azaltımına odaklanan prototip.",en:"A prototype focused on Zenject SignalBus, ScriptableObject grid data, object pooling, squash/push feedback and reduced GC allocations."},image:"ThisIsBlast.png",video:"ThisIsBlastVideo.mp4",tags:["Unity","SignalBus","Performance","Game Feel"],category:"Puzzle",accent:"#ff7f87",github:"https://github.com/eFurkanSngl/This-is-Blast-Clone-VP"},{id:"funny-match",title:"Funny Match",status:{tr:"Match-2",en:"Match-2"},description:{tr:"UnityEvent/UnityAction ile gevşek bağlı gameplay iletişimi, responsive Safe Area UI, SFX/Music kontrolü ve PlayerPrefs kalıcılığı.",en:"A match game with UnityEvent/UnityAction communication, responsive Safe Area UI, SFX/Music controls and PlayerPrefs persistence."},image:"Funny.png",video:"Funny Match.mp4",tags:["Unity","C#","Match-2","UI Polish"],category:"Casual",accent:"#ff9f43",googlePending:!0},{id:"flip-it",title:"Flip It",status:{tr:"Itch.io",en:"Itch.io"},description:{tr:"Solo geliştirilen hafıza oyunu. OOP/SOLID mimari, central GameManager flow, genişleyebilir power-up sistemi ve adaptive UI içerir.",en:"A solo-developed memory game with OOP/SOLID architecture, central GameManager flow, extensible power-up system and adaptive UI."},image:"FliptIt.png",tags:["Unity","OOP/SOLID","Power-Up","Puzzle"],category:"Puzzle",accent:"#c084fc",play:"https://frknsngl.itch.io/flip-it",github:"https://github.com/eFurkanSngl/FlipIt-"},{id:"dino-run",title:"Dino Run",status:{tr:"Endless runner",en:"Endless runner"},description:{tr:"Dinamik zorluk, engel çeşitliliği ve yüksek hızlı sonsuz koşu akışı üzerine kurulu arcade oyun.",en:"An arcade endless runner built around dynamic difficulty, varied obstacles and high-speed movement."},image:"DinoRun.png",tags:["Unity","C#","Runner","Arcade"],category:"Casual",accent:"#65d68b",play:"https://frknsngl.itch.io/dino-run-dino",github:"https://github.com/eFurkanSngl/Dino-Run-Game"},{id:"ocean-blast",title:"OceanBlast",status:{tr:"Match & launch",en:"Match & launch"},description:{tr:"3D match & launch puzzle sistemi. Grid tabanlı color matching, launcher mechanics, merge yapısı, Zenject SignalBus ve ScriptableObject level data.",en:"A 3D match and launch puzzle system with grid color matching, launcher mechanics, merge systems, Zenject SignalBus and ScriptableObject level data."},image:"OceanBlast.png",video:"OceanBlast.mp4",tags:["Unity","3D Puzzle","Zenject","Grid"],category:"Puzzle",accent:"#30d5c8",github:"https://github.com/eFurkanSngl/OceanBlast"}],Oc=[{id:"fill-the-block",title:"Fill The Block",image:"FTB.png",description:{tr:"Fill The Block Google Play uzerinde konumlandirilan mobil puzzle projesi. Android optimizasyonu, SDK entegrasyonu, Firebase Analytics, reklam altyapisi, performans ve magaza beklentileri urun akisinin parcasi.",en:"Fill The Block is the mobile puzzle project positioned on Google Play. Android optimization, SDK integration, Firebase Analytics, ad foundations, performance and store expectations are part of the product flow."},cards:{tr:[["Fill The Block","Google Play yayinda / yayin akisi hazir"],["Android Pipeline","SDK, Firebase Analytics, reklam ve build akisi"],["Store Ready Polish","Haptic, audio, particle pooling ve mobil UI"]],en:[["Fill The Block","Published / release flow ready"],["Android Pipeline","SDK, Firebase Analytics, ads and build flow"],["Store Ready Polish","Haptics, audio, particle pooling and mobile UI"]]},googlePlay:"https://play.google.com/store/apps/details?id=com.SGLGAMES.FillTheBlocks",website:"https://mellifluous-faloodeh-fbbf29.netlify.app/"},{id:"doubletake",title:"DoubleTake",image:"FDTH.png",description:{tr:"DoubleTake, dikkat ve gozlem odakli mobil fark bulma oyunu. Yapay zeka destekli icerik akisiyla seviye cesitliligi, progression ve monetization taraflarinda gelistirme suruyor.",en:"DoubleTake is a mobile spot-the-difference game focused on attention and observation. Development continues on AI-assisted content flow, level variety, progression and monetization."},cards:{tr:[["DoubleTake","Google Play yayininda"],["Core Gameplay","Difference detection, hint/lives sistemi"],["Progression","Coin economy, level flow ve IAP-ready store"]],en:[["DoubleTake","Published on Google Play"],["Core Gameplay","Difference detection and hint/lives systems"],["Progression","Coin economy, level flow and IAP-ready store"]]},googlePlay:"https://play.google.com/store/apps/details?id=com.drawtopia.doubletake"}],i2=[{icon:xS,title:"Scalable Architecture",text:{tr:"OOP/SOLID, event-driven yapı, ScriptableObject data akışı ve modüler gameplay sistemleriyle genişleyebilir kod tabanı kurarım.",en:"I build extensible codebases with OOP/SOLID, event-driven structures, ScriptableObject data flow and modular gameplay systems."}},{icon:CS,title:"Performance & Pooling",text:{tr:"Object Pooling, GC azaltımı, localized validation, Unity Profiler ve Android optimizasyonu ile mobil stabiliteyi güçlendiririm.",en:"I improve mobile stability through Object Pooling, reduced GC allocations, localized validation, Unity Profiler and Android optimization."}},{icon:TS,title:"Game Feel & Polish",text:{tr:"DOTween animasyonları, camera feedback, haptic, SFX, particle pooling ve UI transition ile oyuna daha canlı bir his kazandırırım.",en:"I improve feel through DOTween animation, camera feedback, haptics, SFX, particle pooling and UI transitions."}}],K_=["color-blast-match","fill-the-block","unity-folder-forge","find-the-differences","block-sort","this-is-blast","royal-match-clone","funny-match","flip-it","dino-run","ocean-blast","level-generator"];function Li(r){return`/Portfolio/${encodeURI(r)}`}function a2(r){return`${r}#readme`}function s2(){const[r,e]=qt.useState("tr"),[i,s]=qt.useState("All"),[l,c]=qt.useState(null),[d,p]=qt.useState(!1),[m,h]=qt.useState(0),[x,y]=qt.useState(!1),g=qt.useRef(!1),S=n2[r];qt.useEffect(()=>{document.documentElement.lang=r},[r]),qt.useEffect(()=>{g.current||(g.current=!0,PS())},[]),qt.useEffect(()=>{const T=N=>{N.shiftKey&&N.key.toLowerCase()==="a"&&(N.preventDefault(),y(!0))};return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[]);const A=qt.useMemo(()=>["All",...Array.from(new Set(kd.map(T=>T.category)))],[]),L=qt.useMemo(()=>[...i==="All"?kd:kd.filter(N=>N.category===i)].sort((N,U)=>K_.indexOf(N.id)-K_.indexOf(U.id)),[i]),M=Oc[m],v=()=>{h(T=>(T-1+Oc.length)%Oc.length)},O=()=>{h(T=>(T+1)%Oc.length)},I=(T,N="")=>{ld("external_click",{label:T,projectId:N})};return F.jsxs("main",{className:"site-shell",children:[F.jsx(r2,{t:S,onToggleLang:()=>e(r==="tr"?"en":"tr")}),F.jsxs("section",{className:"hero",id:"top",children:[F.jsxs("div",{className:"hero__copy",children:[F.jsxs("div",{className:"workshop-kicker",children:[F.jsx("span",{})," Interactive Game Workshop"]}),F.jsx("p",{className:"hero__hello",children:"Hi, I'm"}),F.jsxs("h1",{children:[F.jsx("span",{children:S.heroTitle}),F.jsx("em",{children:S.heroRole})]}),F.jsx("p",{className:"hero__text",children:S.heroText}),F.jsxs("div",{className:"hero__actions",children:[F.jsxs("a",{className:"button button--primary",href:"#projects",children:[F.jsx(Z0,{size:18}),S.primaryCta]}),F.jsxs("a",{className:"button button--store",href:"#google-play",children:[F.jsx(Fs,{size:18}),S.secondaryCta]})]}),F.jsx("dl",{className:"hero__stats",children:S.stats.map(([T,N])=>F.jsxs("div",{children:[F.jsx("dt",{children:T}),F.jsx("dd",{children:N})]},N))})]}),F.jsxs("div",{className:"hero-stage workshop-stage","aria-label":"Interactive 3D game developer workshop",children:[F.jsx(t2,{}),F.jsxs("div",{className:"workshop-video-card",children:[F.jsx("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,poster:Li("Funny.png"),children:F.jsx("source",{src:Li("ColorBlastMatchHero.mp4"),type:"video/mp4"})}),F.jsx("span",{children:S.featuredTitle})]}),F.jsxs("div",{className:"hero-stage__panel",children:[F.jsxs("div",{children:[F.jsx("span",{children:"Now building"}),F.jsx("strong",{children:S.featuredText})]}),F.jsx(uS,{size:20})]}),F.jsxs("div",{className:"workshop-stat",children:[F.jsx("b",{children:"12+"}),F.jsx("span",{children:"Games & tools"})]}),F.jsx("small",{className:"workshop-scene-note",children:"Move your cursor · Scroll to explore"})]})]}),F.jsxs("section",{className:"section about",id:"about",children:[F.jsxs("div",{className:"about__content",children:[F.jsx("h2",{children:S.aboutTitle}),F.jsx("p",{children:S.aboutText}),F.jsx("div",{className:"about__highlights",children:S.highlights.map(T=>F.jsxs("span",{children:[F.jsx(bS,{size:16}),T]},T))})]}),F.jsxs("div",{className:"timeline",children:[F.jsx("h3",{children:S.experienceTitle}),S.experience.map(T=>F.jsxs("article",{children:[F.jsx("span",{children:T.date}),F.jsx("h4",{children:T.role}),F.jsx("strong",{children:T.place})]},`${T.role}-${T.place}`))]})]}),F.jsxs("section",{className:"google-play",id:"google-play",children:[F.jsxs("div",{className:"google-play__media",children:[F.jsx("img",{src:Li(M.image),alt:M.title}),F.jsxs("div",{className:"store-badge",children:[F.jsx(Fs,{size:18}),"Google Play"]}),F.jsx("button",{className:"play-nav play-nav--prev",type:"button",onClick:v,"aria-label":S.playPrev,children:F.jsx(lS,{size:18})}),F.jsx("button",{className:"play-nav play-nav--next",type:"button",onClick:O,"aria-label":S.playNext,children:F.jsx(cS,{size:18})})]}),F.jsxs("div",{className:"google-play__content",children:[F.jsx(Fs,{size:28}),F.jsx("h2",{children:S.playTitle}),F.jsx("h3",{className:"google-play__game-title",children:M.title}),F.jsx("p",{children:M.description[r]}),F.jsx("div",{className:"play-card-row",children:M.cards[r].map(([T,N])=>F.jsxs("div",{children:[F.jsx("strong",{children:T}),F.jsx("span",{children:N})]},T))}),F.jsxs("div",{className:"hero__actions",children:[F.jsxs("a",{className:"button button--store",href:M.googlePlay,target:"_blank",rel:"noreferrer",onClick:()=>I(`${M.title} Google Play`,M.id),children:[F.jsx(Fs,{size:18}),S.playCta]}),M.website&&F.jsxs("a",{className:"button button--ghost",href:M.website,target:"_blank",rel:"noreferrer",onClick:()=>I(`${M.title} website`,M.id),children:[F.jsx(J_,{size:18}),S.playWebsite]})]})]})]}),F.jsxs("section",{className:"section section--projects",id:"projects",children:[F.jsxs("div",{className:"section__heading",children:[F.jsxs("div",{children:[F.jsx("h2",{children:S.projectsTitle}),F.jsx("p",{children:S.projectsText})]}),F.jsx("div",{className:"filters","aria-label":"Project filters",children:A.map(T=>F.jsx("button",{className:i===T?"filter is-active":"filter",onClick:()=>s(T),type:"button",children:T==="All"?S.allFilter:T},T))})]}),F.jsx("div",{className:"project-grid",children:L.map(T=>F.jsx(o2,{lang:r,project:T,t:S,onOpenVideo:()=>{ld("video_open",{projectId:T.id,label:T.title}),c(T)},onOpenPending:()=>p(!0),onTrackEvent:ld},T.id))})]}),F.jsxs("section",{className:"section game-corner",id:"game-corner",children:[F.jsxs("div",{className:"section__heading game-corner__heading",children:[F.jsxs("div",{children:[F.jsx("h2",{children:S.gameCornerTitle}),F.jsx("p",{children:S.gameCornerText})]}),F.jsxs("span",{className:"game-corner__badge",children:[F.jsx(Z0,{size:18}),S.gameCornerBadge]})]}),F.jsx("div",{className:"game-corner__frame",children:F.jsx("iframe",{title:"Wiggle Out mini game",src:Li("wiggle-out.html"),loading:"lazy",allow:"autoplay; fullscreen"})}),F.jsx("div",{className:"game-corner__actions",children:F.jsxs("a",{className:"icon-button",href:Li("wiggle-out.html"),target:"_blank",rel:"noreferrer",onClick:()=>I("Wiggle Out full screen","wiggle-out"),children:[F.jsx($_,{size:16}),S.gameCornerOpen]})})]}),F.jsxs("section",{className:"section focus",id:"focus",children:[F.jsxs("div",{className:"focus__intro",children:[F.jsx(hS,{size:24}),F.jsx("h2",{children:S.skillsTitle}),F.jsx("p",{children:S.skillsText}),F.jsx("div",{className:"tool-cloud",children:["Unity","C#","Zenject","DOTween","Odin","Profiler","SDK","Firebase Analytics","Git","Google Play Console"].map(T=>F.jsx("span",{children:T},T))})]}),F.jsx("div",{className:"focus__grid",children:i2.map(T=>{const N=T.icon;return F.jsxs("article",{className:"focus-card",children:[F.jsx(N,{size:24}),F.jsx("h3",{children:T.title}),F.jsx("p",{children:T.text[r]})]},T.title)})})]}),F.jsxs("section",{className:"cert-strip","aria-label":"Certificates and education",children:[F.jsxs("div",{children:[F.jsx(rS,{size:22}),F.jsx("span",{children:"Unity Essentials Pathway"})]}),F.jsxs("div",{children:[F.jsx(_S,{size:22}),F.jsx("span",{children:"Game Developer Certificate / 240h technical training"})]}),F.jsxs("div",{children:[F.jsx(RS,{size:22}),F.jsx("span",{children:"C#, Python, JavaScript basics, SQL fundamentals"})]})]}),F.jsxs("section",{className:"section workshop-process",id:"process",children:[F.jsxs("div",{className:"section__heading process-heading",children:[F.jsxs("div",{children:[F.jsx("span",{className:"section-index",children:"05 · Development loop"}),F.jsx("h2",{children:r==="tr"?"Fikirden oyun hissine.":"From question to game feel."})]}),F.jsx("p",{children:r==="tr"?"Yaratıcılık, mimari ve performansı aynı üretim döngüsünde tutuyorum.":"A focused loop that keeps creativity, architecture and performance moving together."})]}),F.jsx("div",{className:"process-flow",children:["Analyze","Design","Build","Polish","Test","Optimize"].map((T,N)=>F.jsxs("div",{children:[F.jsx("span",{children:String(N+1).padStart(2,"0")}),F.jsx("strong",{children:T}),N<5&&F.jsx("i",{children:"→"})]},T))})]}),F.jsxs("section",{className:"contact-band",id:"contact",children:[F.jsxs("div",{children:[F.jsx("h2",{children:S.contactTitle}),F.jsx("p",{children:S.contactText})]}),F.jsxs("div",{className:"contact-actions",children:[F.jsxs("a",{href:"mailto:efrknsngl@gmail.com",children:[F.jsx(SS,{size:18}),"Email"]}),F.jsxs("a",{href:"https://github.com/eFurkanSngl?tab=overview",target:"_blank",rel:"noreferrer",children:[F.jsx(gS,{size:18}),"GitHub"]}),F.jsxs("a",{href:"https://www.linkedin.com/in/efurkansengull/",target:"_blank",rel:"noreferrer",children:[F.jsx(yS,{size:18}),"LinkedIn"]})]})]}),F.jsx("footer",{children:S.footer}),l&&F.jsx(l2,{project:l,t:S,onClose:()=>c(null)}),d&&F.jsx(c2,{t:S,onClose:()=>p(!1)}),x&&F.jsx(u2,{t:S,onClose:()=>y(!1)})]})}function r2({onToggleLang:r,t:e}){return F.jsxs("header",{className:"topbar",children:[F.jsxs("a",{className:"brand",href:"#top","aria-label":"Portfolio home",children:[F.jsx("img",{src:Li("My Photo.jpg"),alt:"Furkan Şengül"}),F.jsxs("span",{children:[F.jsx("strong",{children:"Furkan"}),F.jsx("small",{children:"Unity Developer"})]})]}),F.jsxs("nav",{"aria-label":"Primary navigation",children:[F.jsx("a",{href:"#about",children:e.nav[0]}),F.jsx("a",{href:"#projects",children:e.nav[1]}),F.jsx("a",{href:"#google-play",children:e.nav[2]}),F.jsx("a",{href:"#game-corner",children:e.nav[3]}),F.jsx("a",{href:"#focus",children:e.nav[4]}),F.jsx("a",{href:"#contact",children:e.nav[5]})]}),F.jsxs("button",{className:"language-button",onClick:r,type:"button","aria-label":"Change language",children:[F.jsx(vS,{size:17}),e.language]})]})}function o2({lang:r,onOpenPending:e,onOpenVideo:i,onTrackEvent:s,project:l,t:c}){const d=h=>{s("project_click",{projectId:l.id,label:h})},p=h=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const x=h.currentTarget.getBoundingClientRect(),y=(h.clientX-x.left)/x.width-.5,g=(h.clientY-x.top)/x.height-.5;h.currentTarget.style.setProperty("--tilt-x",`${-g*5}deg`),h.currentTarget.style.setProperty("--tilt-y",`${y*7}deg`)},m=h=>{h.currentTarget.style.setProperty("--tilt-x","0deg"),h.currentTarget.style.setProperty("--tilt-y","0deg")};return F.jsxs("article",{className:"project-card",style:{"--accent":l.accent},onPointerMove:p,onPointerLeave:m,children:[F.jsxs("div",{className:"project-card__media",children:[l.previewVideo?F.jsx("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,poster:Li(l.image),children:F.jsx("source",{src:Li(l.previewVideo),type:"video/mp4"})}):F.jsx("img",{src:Li(l.image),alt:l.title}),F.jsx("span",{className:"project-card__status",children:l.status[r]})]}),F.jsxs("div",{className:"project-card__body",children:[F.jsxs("div",{children:[F.jsx("h3",{children:l.title}),F.jsx("p",{children:l.description[r]})]}),F.jsx("div",{className:"tags",children:l.tags.map(h=>F.jsx("span",{children:h},h))}),F.jsxs("div",{className:"project-card__actions",children:[l.video&&F.jsxs("button",{className:"icon-button",onClick:i,type:"button",children:[F.jsx($_,{size:16}),c.watchVideo]}),l.play&&F.jsxs("a",{className:"icon-button",href:l.play,target:"_blank",rel:"noreferrer",onClick:()=>d(`${l.title} project`),children:[F.jsx(J_,{size:16}),c.visitProject]}),l.googlePlay&&F.jsxs("a",{className:"icon-button icon-button--store",href:l.googlePlay,target:"_blank",rel:"noreferrer",onClick:()=>d(`${l.title} Google Play`),children:[F.jsx(Fs,{size:16}),c.googlePlay]}),l.googlePending&&F.jsxs("button",{className:"icon-button icon-button--store",onClick:()=>{d(`${l.title} Google Play pending`),e()},type:"button",children:[F.jsx(Fs,{size:16}),c.googlePlay]}),l.github&&F.jsxs("a",{className:"icon-button",href:a2(l.github),target:"_blank",rel:"noreferrer",onClick:()=>d(`${l.title} technical details`),children:[F.jsx(dS,{size:16}),c.technicalDetails]})]})]})]})}function l2({onClose:r,project:e,t:i}){qt.useEffect(()=>{const l=c=>{c.key==="Escape"&&r()};return document.body.classList.add("modal-open"),document.addEventListener("keydown",l),()=>{document.body.classList.remove("modal-open"),document.removeEventListener("keydown",l)}},[r]);const s=e.video?.toLowerCase().endsWith(".webm")?"video/webm":"video/mp4";return F.jsx("div",{className:"modal",onClick:r,role:"presentation",children:F.jsxs("div",{className:"modal__panel",onClick:l=>l.stopPropagation(),role:"dialog","aria-modal":"true",children:[F.jsx("button",{className:"modal__close",onClick:r,type:"button","aria-label":"Close video",children:F.jsx(zh,{size:20})}),F.jsxs("div",{className:"modal__heading",children:[F.jsx(oS,{size:18}),F.jsx("h3",{children:e.title})]}),F.jsxs("video",{controls:!0,autoPlay:!0,playsInline:!0,poster:Li(e.image),children:[F.jsx("source",{src:Li(e.video),type:s}),i.watchVideo]})]})})}function c2({onClose:r,t:e}){return F.jsx("div",{className:"modal",onClick:r,role:"presentation",children:F.jsxs("div",{className:"modal__panel modal__panel--compact",onClick:i=>i.stopPropagation(),role:"dialog","aria-modal":"true",children:[F.jsx("button",{className:"modal__close",onClick:r,type:"button","aria-label":"Close status",children:F.jsx(zh,{size:20})}),F.jsx(Fs,{size:28}),F.jsx("h3",{children:e.pendingTitle}),F.jsx("p",{children:e.pendingText})]})})}function u2({onClose:r,t:e}){const[i,s]=qt.useState(""),[l,c]=qt.useState(null),[d,p]=qt.useState(""),[m,h]=qt.useState(!1),x=OS();qt.useEffect(()=>{const g=S=>{S.key==="Escape"&&r()};return document.body.classList.add("modal-open"),document.addEventListener("keydown",g),()=>{document.body.classList.remove("modal-open"),document.removeEventListener("keydown",g)}},[r]);const y=async g=>{if(g?.preventDefault(),!x){p(e.adminNotConfigured);return}if(!i.trim()){p(e.adminPassword);return}h(!0),p("");try{c(await zS(i))}catch(S){p(S.message)}finally{h(!1)}};return F.jsx("div",{className:"modal",onClick:r,role:"presentation",children:F.jsxs("div",{className:"modal__panel modal__panel--admin",onClick:g=>g.stopPropagation(),role:"dialog","aria-modal":"true",children:[F.jsx("button",{className:"modal__close",onClick:r,type:"button","aria-label":"Close admin",children:F.jsx(zh,{size:20})}),F.jsxs("div",{className:"admin-header",children:[F.jsxs("div",{children:[F.jsxs("span",{children:[F.jsx(K0,{size:16}),"Admin"]}),F.jsx("h3",{children:e.adminTitle}),F.jsx("p",{children:e.adminSubtitle})]}),l&&F.jsxs("button",{className:"icon-button",disabled:m,onClick:y,type:"button",children:[F.jsx(ES,{size:16}),e.adminRefresh]})]}),l?F.jsx(f2,{stats:l,t:e,error:d,loading:m}):F.jsxs("form",{className:"admin-login",onSubmit:y,children:[F.jsxs("label",{children:[e.adminPassword,F.jsx("input",{autoFocus:!0,type:"password",value:i,onChange:g=>s(g.target.value),placeholder:"******"})]}),d&&F.jsx("p",{className:"admin-error",children:d}),F.jsxs("button",{className:"button button--primary",disabled:m,type:"submit",children:[F.jsx(K0,{size:17}),m?"...":e.adminUnlock]})]})]})})}function f2({error:r,loading:e,stats:i,t:s}){const l=[[s.adminToday,i.todayVisits,mS],[s.adminTotal,i.totalVisits,j0],[s.adminUnique,i.uniqueVisitors,AS],[s.adminLive,i.activeVisitors,sS],[s.adminCvDownloads,i.cvDownloads,pS]],c=Object.entries(i.projectClicks||{}).sort((d,p)=>p[1]-d[1]);return F.jsxs("div",{className:"admin-dashboard","aria-busy":e,children:[r&&F.jsx("p",{className:"admin-error",children:r}),F.jsx("div",{className:"admin-stat-grid",children:l.map(([d,p,m])=>F.jsxs("article",{children:[F.jsx(m,{size:19}),F.jsx("strong",{children:p??0}),F.jsx("span",{children:d})]},d))}),F.jsxs("div",{className:"admin-columns",children:[F.jsxs("section",{children:[F.jsxs("h4",{children:[F.jsx(fS,{size:17}),s.adminRecent]}),F.jsx("div",{className:"admin-table",children:(i.recentEvents||[]).length?i.recentEvents.map(d=>F.jsxs("div",{children:[F.jsx("span",{children:d2(d.occurred_at)}),F.jsx("strong",{children:d.project_id||d.event_type}),F.jsxs("small",{children:[d.device_type||"device"," / ",d.browser||"browser"]})]},d.id)):F.jsx("p",{children:s.adminNoData})})]}),F.jsxs("section",{children:[F.jsxs("h4",{children:[F.jsx(MS,{size:17}),s.adminProjects]}),F.jsx("div",{className:"admin-list",children:c.length?c.map(([d,p])=>F.jsxs("div",{children:[F.jsx("span",{children:d}),F.jsx("strong",{children:p})]},d)):F.jsx("p",{children:s.adminNoData})}),F.jsxs("h4",{children:[F.jsx(j0,{size:17}),s.adminHourly]}),F.jsx("div",{className:"admin-list",children:(i.hourly||[]).length?i.hourly.slice(0,12).map(d=>F.jsxs("div",{children:[F.jsx("span",{children:d.label}),F.jsx("strong",{children:d.count})]},d.label)):F.jsx("p",{children:s.adminNoData})})]})]})]})}function d2(r){try{return new Intl.DateTimeFormat("tr-TR",{timeZone:"Europe/Istanbul",day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(r))}catch{return r}}tS.createRoot(document.getElementById("root")).render(F.jsx(jy.StrictMode,{children:F.jsx(s2,{})}));
