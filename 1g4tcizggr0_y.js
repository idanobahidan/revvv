(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,206148,t=>{"use strict";var e=t.i(191346);class o extends e.BaseError{constructor(){super("Chain not configured."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotConfiguredError"})}}class r extends e.BaseError{constructor(){super("Connector already connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAlreadyConnectedError"})}}class a extends e.BaseError{constructor(){super("Connector not connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorNotConnectedError"})}}e.BaseError;class n extends e.BaseError{constructor({address:t,connector:e}){super(`Account "${t}" not found for connector "${e.name}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAccountNotFoundError"})}}class i extends e.BaseError{constructor({connectionChainId:t,connectorChainId:e}){super(`The current chain of the connector (id: ${e}) does not match the connection's chain (id: ${t}).`,{metaMessages:[`Current Chain ID:  ${e}`,`Expected Chain ID: ${t}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorChainMismatchError"})}}class s extends e.BaseError{constructor({connector:t}){super(`Connector "${t.name}" unavailable while reconnecting.`,{details:"During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uid`. All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored. This error commonly occurs for connectors that asynchronously inject after reconnection has already started."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorUnavailableReconnectingError"})}}t.s(["ChainNotConfiguredError",0,o,"ConnectorAccountNotFoundError",0,n,"ConnectorAlreadyConnectedError",0,r,"ConnectorChainMismatchError",0,i,"ConnectorNotConnectedError",0,a,"ConnectorUnavailableReconnectingError",0,s])},954616,t=>{"use strict";var e=t.i(271645),o=t.i(114272),r=t.i(540143),a=t.i(915823),n=t.i(619273),i=class extends a.Subscribable{#t;#e=void 0;#o;#r;constructor(t,e){super(),this.#t=t,this.setOptions(e),this.bindMethods(),this.#a()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#t.defaultMutationOptions(t),(0,n.shallowEqualObjects)(this.options,e)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#o,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,n.hashKey)(e.mutationKey)!==(0,n.hashKey)(this.options.mutationKey)?this.reset():this.#o?.state.status==="pending"&&this.#o.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#o?.removeObserver(this)}onMutationUpdate(t){this.#a(),this.#n(t)}getCurrentResult(){return this.#e}reset(){this.#o?.removeObserver(this),this.#o=void 0,this.#a(),this.#n()}mutate(t,e){return this.#r=e,this.#o?.removeObserver(this),this.#o=this.#t.getMutationCache().build(this.#t,this.options),this.#o.addObserver(this),this.#o.execute(t)}#a(){let t=this.#o?.state??(0,o.getDefaultState)();this.#e={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#n(t){r.notifyManager.batch(()=>{if(this.#r&&this.hasListeners()){let e=this.#e.variables,o=this.#e.context,r={client:this.#t,meta:this.options.meta,mutationKey:this.options.mutationKey};if(t?.type==="success"){try{this.#r.onSuccess?.(t.data,e,o,r)}catch(t){Promise.reject(t)}try{this.#r.onSettled?.(t.data,null,e,o,r)}catch(t){Promise.reject(t)}}else if(t?.type==="error"){try{this.#r.onError?.(t.error,e,o,r)}catch(t){Promise.reject(t)}try{this.#r.onSettled?.(void 0,t.error,e,o,r)}catch(t){Promise.reject(t)}}}this.listeners.forEach(t=>{t(this.#e)})})}},s=t.i(912598);t.s(["useMutation",0,function(t,o){let a=(0,s.useQueryClient)(o),[l]=e.useState(()=>new i(a,t));e.useEffect(()=>{l.setOptions(t)},[l,t]);let c=e.useSyncExternalStore(e.useCallback(t=>l.subscribe(r.notifyManager.batchCalls(t)),[l]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),u=e.useCallback((t,e)=>{l.mutate(t,e).catch(n.noop)},[l]);if(c.error&&(0,n.shouldThrowError)(l.options.throwOnError,[c.error]))throw c.error;return{...c,mutate:u,mutateAsync:c.mutate}}],954616)},170319,t=>{"use strict";var e=t.i(271645);let o=function(){for(var t,e,o=0,r="",a=arguments.length;o<a;o++)(t=arguments[o])&&(e=function t(e){var o,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e)){var n=e.length;for(o=0;o<n;o++)e[o]&&(r=t(e[o]))&&(a&&(a+=" "),a+=r)}else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}(t))&&(r&&(r+=" "),r+=e);return r};var r=t=>"number"==typeof t&&!isNaN(t),a=t=>"string"==typeof t||"function"==typeof t?t:null,n=t=>(0,e.isValidElement)(t)||"string"==typeof t||"function"==typeof t||r(t);function i({enter:t,exit:o,appendPosition:r=!1,collapse:a=!0,collapseDuration:n=300}){return function({children:i,position:s,preventExitTransition:l,done:c,nodeRef:u,isIn:d,playToast:f}){let p=r?`${t}--${s}`:t,m=r?`${o}--${s}`:o,y=(0,e.useRef)(0);return(0,e.useLayoutEffect)(()=>{let t=u.current,e=p.split(" "),o=r=>{r.target===u.current&&(f(),t.removeEventListener("animationend",o),t.removeEventListener("animationcancel",o),0===y.current&&"animationcancel"!==r.type&&t.classList.remove(...e))};t.classList.add(...e),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)},[]),(0,e.useEffect)(()=>{let t=u.current,e=()=>{t.removeEventListener("animationend",e),a?function(t,e,o=300){let{scrollHeight:r,style:a}=t;requestAnimationFrame(()=>{a.minHeight="initial",a.height=r+"px",a.transition=`all ${o}ms`,requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(e,o)})})}(t,c,n):c()};d||(l?e():(y.current=1,t.className+=` ${m}`,t.addEventListener("animationend",e)))},[d]),e.default.createElement(e.default.Fragment,null,i)}}function s(t,e){return{content:l(t.content,t.props),containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,reason:t.removalReason,status:e}}function l(t,o,r=!1){return(0,e.isValidElement)(t)&&"string"!=typeof t.type?(0,e.cloneElement)(t,{closeToast:o.closeToast,toastProps:o,data:o.data,isPaused:r}):"function"==typeof t?t({closeToast:o.closeToast,toastProps:o,data:o.data,isPaused:r}):t}function c({delay:t,isRunning:r,closeToast:a,type:n="default",hide:i,className:s,controlledProgress:l,progress:u,rtl:d,isIn:f,theme:p}){let m=i||l&&0===u,y={animationDuration:`${t}ms`,animationPlayState:r?"running":"paused"};l&&(y.transform=`scaleX(${u})`);let h=o("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${n}`,{"Toastify__progress-bar--rtl":d}),g="function"==typeof s?s({rtl:d,type:n,defaultClassName:h}):o(h,s);return e.default.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":m},e.default.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${p} Toastify__progress-bar--${n}`}),e.default.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer","aria-valuenow":l?Math.round(100*u):void 0,"aria-valuemin":0,"aria-valuemax":100,className:g,style:y,...{[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{f&&a()}}}))}var u=1,d=()=>`${u++}`,f=new Map,p=[],m=new Set,y=t=>m.forEach(e=>e(t));function h(t,e){var o;if(e)return!!(null!=(o=f.get(e))&&o.isToastActive(t));let r=!1;return f.forEach(e=>{e.isToastActive(t)&&(r=!0)}),r}function g(t,e){n(t)&&(f.size>0||p.push({content:t,options:e}),f.forEach(o=>{o.buildToast(t,e)}))}function v(t,e){f.forEach(o=>{null!=e&&null!=e&&e.containerId&&(null==e?void 0:e.containerId)!==o.id||o.toggle(t,null==e?void 0:e.id)})}function b(t,e){return g(t,e),e.toastId}function _(t,e){var o;return{...e,type:e&&e.type||t,toastId:(o=e)&&("string"==typeof o.toastId||r(o.toastId))?o.toastId:d()}}function x(t){return(e,o)=>b(e,_(t,o))}function T(t,e){return b(t,_("default",e))}T.loading=(t,e)=>b(t,_("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),T.promise=function(t,{pending:e,error:o,success:r},a){let n;e&&(n="string"==typeof e?T.loading(e,a):T.loading(e.render,{...a,...e}));let i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},s=(t,e,o)=>{if(null==e)return void T.dismiss(n);let r={type:t,...i,...a,data:o},s="string"==typeof e?{render:e}:e;return n?T.update(n,{...r,...s}):T(s.render,{...r,...s}),o},l="function"==typeof t?t():t;return l.then(t=>s("success",r,t)).catch(t=>s("error",o,t)),l},T.success=x("success"),T.info=x("info"),T.error=x("error"),T.warning=x("warning"),T.warn=T.warning,T.dark=(t,e)=>b(t,_("default",{theme:"dark",...e})),T.dismiss=function(t){!function(t){let e;if(!(f.size>0)){p=p.filter(e=>null!=t&&e.options.toastId!==t);return}if(null==t||"string"==typeof(e=t)||r(e))f.forEach(e=>{e.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){let e=f.get(t.containerId);e?e.removeToast(t.id):f.forEach(e=>{e.removeToast(t.id)})}}(t)},T.clearWaitingQueue=(t={})=>{f.forEach(e=>{e.props.limit&&(!t.containerId||e.id===t.containerId)&&e.clearQueue()})},T.isActive=h,T.update=(t,e={})=>{let o=((t,{containerId:e})=>{var o;return null==(o=f.get(e||1))?void 0:o.toasts.get(t)})(t,e);if(o){let{props:r,content:a}=o,n={delay:100,...r,...e,toastId:e.toastId||t,updateId:d()};n.toastId!==t&&(n.staleId=t);let i=n.render||a;delete n.render,b(i,n)}},T.done=t=>{T.update(t,{progress:1})},T.onChange=function(t){return m.add(t),()=>{m.delete(t)}},T.play=t=>v(!0,t),T.pause=t=>v(!1,t);var w="u">typeof window?e.useLayoutEffect:e.useEffect,E=({theme:t,type:o,isLoading:r,...a})=>e.default.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${o})`,...a}),O={info:function(t){return e.default.createElement(E,{...t},e.default.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return e.default.createElement(E,{...t},e.default.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return e.default.createElement(E,{...t},e.default.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return e.default.createElement(E,{...t},e.default.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return e.default.createElement("div",{className:"Toastify__spinner"})}},S=t=>{let{isRunning:r,preventExitTransition:a,toastRef:n,eventHandlers:i,playToast:s}=function(t){var o,r;let[a,n]=(0,e.useState)(!1),[i,s]=(0,e.useState)(!1),l=(0,e.useRef)(null),c=(0,e.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:u,pauseOnHover:d,closeToast:p,onClick:m,closeOnClick:y}=t;function h(){n(!0)}function g(){n(!1)}function v(e){let o=l.current;if(c.canDrag&&o){c.didMove=!0,a&&g(),"x"===t.draggableDirection?c.delta=e.clientX-c.start:c.delta=e.clientY-c.start,c.start!==e.clientX&&(c.canCloseOnClick=!1);let r="x"===t.draggableDirection?`${c.delta}px, var(--y)`:`0, calc(${c.delta}px + var(--y))`;o.style.transform=`translate3d(${r},0)`,o.style.opacity=`${1-Math.abs(c.delta/c.removalDistance)}`}}function b(){document.removeEventListener("pointermove",v),document.removeEventListener("pointerup",b);let e=l.current;if(c.canDrag&&c.didMove&&e){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance){s(!0),t.closeToast(!0),t.collapseAll();return}e.style.transition="transform 0.2s, opacity 0.2s",e.style.removeProperty("transform"),e.style.removeProperty("opacity")}}o={id:t.toastId,containerId:t.containerId,fn:n},null==(r=f.get(o.containerId||1))||r.setToggle(o.id,o.fn),(0,e.useEffect)(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||g(),window.addEventListener("focus",h),window.addEventListener("blur",g),()=>{window.removeEventListener("focus",h),window.removeEventListener("blur",g)}},[t.pauseOnFocusLoss]);let _={onPointerDown:function(e){if(!0===t.draggable||t.draggable===e.pointerType){c.didMove=!1,document.addEventListener("pointermove",v),document.addEventListener("pointerup",b);let o=l.current;c.canCloseOnClick=!0,c.canDrag=!0,o.style.transition="none","x"===t.draggableDirection?(c.start=e.clientX,c.removalDistance=o.offsetWidth*(t.draggablePercent/100)):(c.start=e.clientY,c.removalDistance=o.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(e){let{top:o,bottom:r,left:a,right:n}=l.current.getBoundingClientRect();"mouse"===e.pointerType&&t.pauseOnHover&&e.clientX>=a&&e.clientX<=n&&e.clientY>=o&&e.clientY<=r?g():h()}};return u&&d&&(_.onMouseEnter=g,t.stacked||(_.onMouseLeave=h)),y&&(_.onClick=t=>{m&&m(t),c.canCloseOnClick&&p(!0)}),{playToast:h,pauseToast:g,isRunning:a,preventExitTransition:i,toastRef:l,eventHandlers:_}}(t),{closeButton:u,children:d,autoClose:p,onClick:m,type:y,hideProgressBar:h,closeToast:g,transition:v,position:b,className:_,style:x,progressClassName:T,updateId:w,role:E,progress:S,rtl:I,toastId:k,deleteToast:C,isIn:P,isLoading:R,closeOnClick:A,theme:L,ariaLabel:M}=t,D=o("Toastify__toast",`Toastify__toast-theme--${L}`,`Toastify__toast--${y}`,{"Toastify__toast--rtl":I},{"Toastify__toast--close-on-click":A}),F="function"==typeof _?_({rtl:I,position:b,type:y,defaultClassName:D}):o(D,_),N=function({theme:t,type:o,isLoading:r,icon:a}){let n=null,i={theme:t,type:o};return!1===a||("function"==typeof a?n=a({...i,isLoading:r}):(0,e.isValidElement)(a)?n=(0,e.cloneElement)(a,i):r?n=O.spinner():o in O&&(n=O[o](i))),n}(t),z=!!S||!p,$={closeToast:g,type:y,theme:L},B=null;return!1===u||(B="function"==typeof u?u($):(0,e.isValidElement)(u)?(0,e.cloneElement)(u,$):function({closeToast:t,theme:o,ariaLabel:r="close"}){return e.default.createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:e=>{e.stopPropagation(),t(!0)},"aria-label":r},e.default.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},e.default.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}($)),e.default.createElement(v,{isIn:P,done:C,position:b,preventExitTransition:a,nodeRef:n,playToast:s},e.default.createElement("div",{id:k,tabIndex:0,onClick:m,"data-in":P,className:F,...i,style:x,ref:n,...P&&{role:E,"aria-label":M}},null!=N&&e.default.createElement("div",{className:o("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!R})},N),l(d,t,!r),B,!t.customProgressBar&&e.default.createElement(c,{...w&&!z?{key:`p-${w}`}:{},rtl:I,theme:L,delay:p,isRunning:r,isIn:P,closeToast:g,hide:h,type:y,className:T,controlledProgress:z,progress:S||0})))},I=(t,e=!1)=>({enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}),k=i(I("bounce",!0));i(I("slide",!0)),i(I("zoom")),i(I("flip"));var C={position:"top-right",transition:k,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:t=>t.altKey&&"KeyT"===t.code};function P(t){let i={...C,...t},l=t.stacked,[c,u]=(0,e.useState)(!0),d=(0,e.useRef)(null),{getToastToRender:m,isToastActive:v,count:b}=function(t){var o;let i,{subscribe:l,getSnapshot:c,setProps:u}=(0,e.useRef)((i=t.containerId||1,{subscribe(e){let o,l,c,u,d,m,h,v,b,_,x,T=(o=1,l=0,c=[],u=[],d=t,m=new Map,h=new Set,v=()=>{u=Array.from(m.values()),h.forEach(t=>t())},b=t=>{var e,o;t.isActive&&(null==(o=null==(e=t.props)?void 0:e.onClose)||o.call(e,t.removalReason),t.isActive=!1,y(s(t,"removed")))},_=t=>{if(null==t)m.forEach(b);else{let e=m.get(t);e&&b(e)}v()},x=t=>{var e,o;let{toastId:r,updateId:a}=t.props,n=null==a;t.staleId&&m.delete(t.staleId),t.isActive=!0,m.set(r,t),v(),y(s(t,n?"added":"updated")),n&&(null==(o=(e=t.props).onOpen)||o.call(e))},{id:i,props:d,observe:t=>(h.add(t),()=>h.delete(t)),toggle:(t,e)=>{m.forEach(o=>{var r;(null==e||e===o.props.toastId)&&(null==(r=o.toggle)||r.call(o,t))})},removeToast:_,toasts:m,clearQueue:()=>{l-=c.length,c=[]},buildToast:(t,e)=>{let s,u;if((({containerId:t,toastId:e,updateId:o})=>{let r=m.has(e)&&null==o;return(t?t!==i:1!==i)||r})(e))return;let{toastId:f,updateId:p,data:y,staleId:h,delay:g}=e,b=null==p;b&&l++;let T={...d,style:d.toastStyle,key:o++,...Object.fromEntries(Object.entries(e).filter(([t,e])=>null!=e)),toastId:f,updateId:p,data:y,isIn:!1,className:a(e.className||d.toastClassName),progressClassName:a(e.progressClassName||d.progressClassName),autoClose:!e.isLoading&&(s=e.autoClose,u=d.autoClose,!1===s||r(s)&&s>0?s:u),closeToast(t){let e=m.get(f);e&&(e.removalReason=t,_(f))},deleteToast(){if(null!=m.get(f)){if(m.delete(f),--l<0&&(l=0),c.length>0)return void x(c.shift());v()}}};T.closeButton=d.closeButton,!1===e.closeButton||n(e.closeButton)?T.closeButton=e.closeButton:!0===e.closeButton&&(T.closeButton=!n(d.closeButton)||d.closeButton);let w={content:t,props:T,staleId:h};d.limit&&d.limit>0&&l>d.limit&&b?c.push(w):r(g)?setTimeout(()=>{x(w)},g):x(w)},setProps(t){d=t},setToggle:(t,e)=>{let o=m.get(t);o&&(o.toggle=e)},isToastActive:t=>{var e;return null==(e=m.get(t))?void 0:e.isActive},getSnapshot:()=>u});f.set(i,T);let w=T.observe(e);return p.forEach(t=>g(t.content,t.options)),p=[],()=>{w(),f.delete(i)}},setProps(t){var e;null==(e=f.get(i))||e.setProps(t)},getSnapshot(){var t;return null==(t=f.get(i))?void 0:t.getSnapshot()}})).current;u(t);let d=null==(o=(0,e.useSyncExternalStore)(l,c,c))?void 0:o.slice();return{getToastToRender:function(e){if(!d)return[];let o=new Map;return t.newestOnTop&&d.reverse(),d.forEach(t=>{let{position:e}=t.props;o.has(e)||o.set(e,[]),o.get(e).push(t)}),Array.from(o,t=>e(t[0],t[1]))},isToastActive:h,count:null==d?void 0:d.length}}(i),{className:_,style:x,rtl:E,containerId:O,hotKeys:I}=i;function k(){l&&(u(!0),T.play())}return w(()=>{var t;if(l){let e=d.current.querySelectorAll('[data-in="true"]'),o=null==(t=i.position)?void 0:t.includes("top"),r=0,a=0;Array.from(e).reverse().forEach((t,e)=>{t.classList.add("Toastify__toast--stacked"),e>0&&(t.dataset.collapsed=`${c}`),t.dataset.pos||(t.dataset.pos=o?"top":"bot");let n=r*(c?.2:1)+(c?0:12*e),i=Math.max(.5,1-(c?a:0));t.style.setProperty("--y",`${o?n:-1*n}px`),t.style.setProperty("--g","12"),t.style.setProperty("--s",`${i}`),r+=t.offsetHeight,a+=.025})}},[c,b,l]),(0,e.useEffect)(()=>{function t(t){var e;let o=d.current;I(t)&&(null==(e=null==o?void 0:o.querySelector('[tabIndex="0"]'))||e.focus(),u(!1),T.pause()),"Escape"===t.key&&(document.activeElement===o||null!=o&&o.contains(document.activeElement))&&(u(!0),T.play())}return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[I]),e.default.createElement("section",{ref:d,className:"Toastify",id:O,onMouseEnter:()=>{l&&(u(!1),T.pause())},onMouseLeave:k,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":i["aria-label"]},m((t,r)=>{var n;let i,s=r.length?{...x}:{...x,pointerEvents:"none"};return e.default.createElement("div",{tabIndex:-1,className:(n=t,i=o("Toastify__toast-container",`Toastify__toast-container--${n}`,{"Toastify__toast-container--rtl":E}),"function"==typeof _?_({position:n,rtl:E,defaultClassName:i}):o(i,a(_))),"data-stacked":l,style:s,key:`c-${t}`},r.map(({content:t,props:o})=>e.default.createElement(S,{...o,stacked:l,collapseAll:k,isIn:v(o.toastId,o.containerId),key:`t-${o.key}`},t)))}))}var R=`:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: hsl(6, 78%, 57%);
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-container-width: fit-content;
  --toastify-toast-width: 320px;
  --toastify-toast-offset: 16px;
  --toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));
  --toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));
  --toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));
  --toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));
  --toastify-toast-background: #fff;
  --toastify-toast-padding: 14px;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-toast-bd-radius: 6px;
  --toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;
  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  /* Used only for colored theme */
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;
  --toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
  /* used to control the opacity of the progress trail */
  --toastify-color-progress-bgo: 0.2;
}

.Toastify__toast-container {
  z-index: var(--toastify-z-index);
  -webkit-transform: translate3d(0, 0, var(--toastify-z-index));
  position: fixed;
  width: var(--toastify-container-width);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.Toastify__toast-container--top-left {
  top: var(--toastify-toast-top);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--top-center {
  top: var(--toastify-toast-top);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--top-right {
  top: var(--toastify-toast-top);
  right: var(--toastify-toast-right);
  align-items: end;
}
.Toastify__toast-container--bottom-left {
  bottom: var(--toastify-toast-bottom);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--bottom-center {
  bottom: var(--toastify-toast-bottom);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--bottom-right {
  bottom: var(--toastify-toast-bottom);
  right: var(--toastify-toast-right);
  align-items: end;
}

.Toastify__toast {
  --y: 0px;
  position: relative;
  touch-action: none;
  width: var(--toastify-toast-width);
  min-height: var(--toastify-toast-min-height);
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: var(--toastify-toast-padding);
  border-radius: var(--toastify-toast-bd-radius);
  box-shadow: var(--toastify-toast-shadow);
  max-height: var(--toastify-toast-max-height);
  font-family: var(--toastify-font-family);
  /* webkit only issue #791 */
  z-index: 0;
  /* inner swag */
  display: flex;
  flex: 1 auto;
  align-items: center;
  word-break: break-word;
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container {
    width: 100vw;
    left: env(safe-area-inset-left);
    margin: 0;
  }
  .Toastify__toast-container--top-left,
  .Toastify__toast-container--top-center,
  .Toastify__toast-container--top-right {
    top: env(safe-area-inset-top);
    transform: translateX(0);
  }
  .Toastify__toast-container--bottom-left,
  .Toastify__toast-container--bottom-center,
  .Toastify__toast-container--bottom-right {
    bottom: env(safe-area-inset-bottom);
    transform: translateX(0);
  }
  .Toastify__toast-container--rtl {
    right: env(safe-area-inset-right);
    left: initial;
  }
  .Toastify__toast {
    --toastify-toast-width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
}

.Toastify__toast-container[data-stacked='true'] {
  width: var(--toastify-toast-width);
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container[data-stacked='true'] {
    width: 100vw;
  }
}

.Toastify__toast--stacked {
  position: absolute;
  width: 100%;
  transform: translate3d(0, var(--y), 0) scale(var(--s));
  transition: transform 0.3s;
}

.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,
.Toastify__toast--stacked[data-collapsed] .Toastify__close-button {
  transition: opacity 0.1s;
}

.Toastify__toast--stacked[data-collapsed='false'] {
  overflow: visible;
}

.Toastify__toast--stacked[data-collapsed='true']:not(:last-child) > * {
  opacity: 0;
}

.Toastify__toast--stacked:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: calc(var(--g) * 1px);
  bottom: 100%;
}

.Toastify__toast--stacked[data-pos='top'] {
  top: 0;
}

.Toastify__toast--stacked[data-pos='bot'] {
  bottom: 0;
}

.Toastify__toast--stacked[data-pos='bot'].Toastify__toast--stacked:before {
  transform-origin: top;
}

.Toastify__toast--stacked[data-pos='top'].Toastify__toast--stacked:before {
  transform-origin: bottom;
}

.Toastify__toast--stacked:before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  transform: scaleY(3);
  z-index: -1;
}

.Toastify__toast--rtl {
  direction: rtl;
}

.Toastify__toast--close-on-click {
  cursor: pointer;
}

.Toastify__toast-icon {
  margin-inline-end: 10px;
  width: 22px;
  flex-shrink: 0;
  display: flex;
}

.Toastify--animate {
  animation-fill-mode: both;
  animation-duration: 0.5s;
}

.Toastify--animate-icon {
  animation-fill-mode: both;
  animation-duration: 0.3s;
}

.Toastify__toast-theme--dark {
  background: var(--toastify-color-dark);
  color: var(--toastify-text-color-dark);
}

.Toastify__toast-theme--light {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--default {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--info {
  color: var(--toastify-text-color-info);
  background: var(--toastify-color-info);
}

.Toastify__toast-theme--colored.Toastify__toast--success {
  color: var(--toastify-text-color-success);
  background: var(--toastify-color-success);
}

.Toastify__toast-theme--colored.Toastify__toast--warning {
  color: var(--toastify-text-color-warning);
  background: var(--toastify-color-warning);
}

.Toastify__toast-theme--colored.Toastify__toast--error {
  color: var(--toastify-text-color-error);
  background: var(--toastify-color-error);
}

.Toastify__progress-bar-theme--light {
  background: var(--toastify-color-progress-light);
}

.Toastify__progress-bar-theme--dark {
  background: var(--toastify-color-progress-dark);
}

.Toastify__progress-bar--info {
  background: var(--toastify-color-progress-info);
}

.Toastify__progress-bar--success {
  background: var(--toastify-color-progress-success);
}

.Toastify__progress-bar--warning {
  background: var(--toastify-color-progress-warning);
}

.Toastify__progress-bar--error {
  background: var(--toastify-color-progress-error);
}

.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
  background: var(--toastify-color-transparent);
}

.Toastify__close-button {
  color: #fff;
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  z-index: 1;
}

.Toastify__toast--rtl .Toastify__close-button {
  left: 6px;
  right: unset;
}

.Toastify__close-button--light {
  color: #000;
  opacity: 0.3;
}

.Toastify__close-button > svg {
  fill: currentColor;
  height: 16px;
  width: 14px;
}

.Toastify__close-button:hover,
.Toastify__close-button:focus {
  opacity: 1;
}

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

.Toastify__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
  transform-origin: left;
}

.Toastify__progress-bar--animated {
  animation: Toastify__trackProgress linear 1 forwards;
}

.Toastify__progress-bar--controlled {
  transition: transform 0.2s;
}

.Toastify__progress-bar--rtl {
  right: 0;
  left: initial;
  transform-origin: right;
  border-bottom-left-radius: initial;
}

.Toastify__progress-bar--wrp {
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: var(--toastify-toast-bd-radius);
  border-bottom-right-radius: var(--toastify-toast-bd-radius);
}

.Toastify__progress-bar--wrp[data-hidden='true'] {
  opacity: 0;
}

.Toastify__progress-bar--bg {
  opacity: var(--toastify-color-progress-bgo);
  width: 100%;
  height: 100%;
}

.Toastify__spinner {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: var(--toastify-spinner-color-empty-area);
  border-right-color: var(--toastify-spinner-color);
  animation: Toastify__spin 0.65s linear infinite;
}

@keyframes Toastify__bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes Toastify__bounceOutUp {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes Toastify__bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutDown {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.Toastify__bounce-enter--top-left,
.Toastify__bounce-enter--bottom-left {
  animation-name: Toastify__bounceInLeft;
}

.Toastify__bounce-enter--top-right,
.Toastify__bounce-enter--bottom-right {
  animation-name: Toastify__bounceInRight;
}

.Toastify__bounce-enter--top-center {
  animation-name: Toastify__bounceInDown;
}

.Toastify__bounce-enter--bottom-center {
  animation-name: Toastify__bounceInUp;
}

.Toastify__bounce-exit--top-left,
.Toastify__bounce-exit--bottom-left {
  animation-name: Toastify__bounceOutLeft;
}

.Toastify__bounce-exit--top-right,
.Toastify__bounce-exit--bottom-right {
  animation-name: Toastify__bounceOutRight;
}

.Toastify__bounce-exit--top-center {
  animation-name: Toastify__bounceOutUp;
}

.Toastify__bounce-exit--bottom-center {
  animation-name: Toastify__bounceOutDown;
}

@keyframes Toastify__zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

@keyframes Toastify__zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translate3d(0, var(--y), 0) scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}

.Toastify__zoom-enter {
  animation-name: Toastify__zoomIn;
}

.Toastify__zoom-exit {
  animation-name: Toastify__zoomOut;
}

@keyframes Toastify__flipIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

@keyframes Toastify__flipOut {
  from {
    transform: translate3d(0, var(--y), 0) perspective(400px);
  }
  30% {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.Toastify__flip-enter {
  animation-name: Toastify__flipIn;
}

.Toastify__flip-exit {
  animation-name: Toastify__flipOut;
}

@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInLeft {
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInUp {
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInDown {
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutLeft {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutDown {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0);
  }
}

@keyframes Toastify__slideOutUp {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0);
  }
}

.Toastify__slide-enter--top-left,
.Toastify__slide-enter--bottom-left {
  animation-name: Toastify__slideInLeft;
}

.Toastify__slide-enter--top-right,
.Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight;
}

.Toastify__slide-enter--top-center {
  animation-name: Toastify__slideInDown;
}

.Toastify__slide-enter--bottom-center {
  animation-name: Toastify__slideInUp;
}

.Toastify__slide-exit--top-left,
.Toastify__slide-exit--bottom-left {
  animation-name: Toastify__slideOutLeft;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-right,
.Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-center {
  animation-name: Toastify__slideOutUp;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--bottom-center {
  animation-name: Toastify__slideOutDown;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes Toastify__spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`,A=new Map;t.s(["ToastContainer",0,function(t){var o;return w(()=>{if(!R||"u"<typeof document)return;let t=document,e=A.get(t);if(e){o&&e.setAttribute("nonce",o);return}let r=t.createElement("style");r.textContent=R,o&&r.setAttribute("nonce",o),t.head.appendChild(r),A.set(t,r)},[o=t.nonce]),e.default.createElement(P,{...t})},"toast",0,T],170319)},377349,t=>{"use strict";var e=t.i(191346);class o extends e.BaseError{constructor(){super("Provider not found."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderNotFoundError"})}}class r extends e.BaseError{constructor({connector:t}){super(`"${t.name}" does not support programmatic chain switching.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainNotSupportedError"})}}t.s(["ProviderNotFoundError",0,o,"SwitchChainNotSupportedError",0,r])},685256,(t,e,o)=>{"use strict";var r=t.e&&t.e.__assign||function(){return(r=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var a in e=arguments[o])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)};Object.defineProperty(o,"__esModule",{value:!0});var a=t.r(271645);o.default=function(t,e,o){var n=(0,a.useMemo)(function(){return r({serializer:JSON.stringify,parser:JSON.parse,logger:console.log,syncData:!0},o)},[o]),i=n.serializer,s=n.parser,l=n.logger,c=n.syncData,u=(0,a.useRef)(null),d=(0,a.useState)(function(){if("u"<typeof window)return e;try{return u.current=window.localStorage.getItem(t),u.current?s(u.current):e}catch(t){return l(t),e}}),f=d[0],p=d[1];return(0,a.useEffect)(function(){if("u">typeof window)try{if(void 0!==f){var e=i(f),o=u.current;u.current=e,window.localStorage.setItem(t,e),window.dispatchEvent(new StorageEvent("storage",{storageArea:window.localStorage,url:window.location.href,key:t,newValue:e,oldValue:o}))}else window.localStorage.removeItem(t),window.dispatchEvent(new StorageEvent("storage",{storageArea:window.localStorage,url:window.location.href,key:t}))}catch(t){l(t)}},[f]),(0,a.useEffect)(function(){if(c){var e=function(e){if(e.key===t&&e.storageArea===window.localStorage)try{e.newValue!==u.current&&(u.current=e.newValue,p(e.newValue?s(e.newValue):void 0))}catch(t){l(t)}};if("u">typeof window)return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}}},[t,c]),[f,p]}},166953,t=>{"use strict";var e;function o(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&"Uint8Array"===t.constructor.name}function r(t,...e){if(!o(t))throw Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw Error("Uint8Array expected of length "+e+", got length="+t.length)}function a(t,e){return!!Array.isArray(e)&&(0===e.length||(t?e.every(t=>"string"==typeof t):e.every(t=>Number.isSafeInteger(t))))}function n(t){if("function"!=typeof t)throw Error("function expected");return!0}function i(t,e){if("string"!=typeof e)throw Error(`${t}: string expected`);return!0}function s(t){if(!Number.isSafeInteger(t))throw Error(`invalid integer: ${t}`)}function l(t){if(!Array.isArray(t))throw Error("array expected")}function c(t,e){if(!a(!0,e))throw Error(`${t}: array of strings expected`)}function u(t,e){if(!a(!1,e))throw Error(`${t}: array of numbers expected`)}function d(...t){let e=t=>t,o=(t,e)=>o=>t(e(o));return{encode:t.map(t=>t.encode).reduceRight(o,e),decode:t.map(t=>t.decode).reduce(o,e)}}function f(t){let e="string"==typeof t?t.split(""):t,o=e.length;c("alphabet",e);let r=new Map(e.map((t,e)=>[t,e]));return{encode:r=>(l(r),r.map(r=>{if(!Number.isSafeInteger(r)||r<0||r>=o)throw Error(`alphabet.encode: digit index outside alphabet "${r}". Allowed: ${t}`);return e[r]})),decode:e=>(l(e),e.map(e=>{i("alphabet.decode",e);let o=r.get(e);if(void 0===o)throw Error(`Unknown letter: "${e}". Allowed: ${t}`);return o}))}}function p(t=""){return i("join",t),{encode:e=>(c("join.decode",e),e.join(t)),decode:e=>(i("join.decode",e),e.split(t))}}function m(t,e="="){return s(t),i("padding",e),{encode(o){for(c("padding.encode",o);o.length*t%8;)o.push(e);return o},decode(o){c("padding.decode",o);let r=o.length;if(r*t%8)throw Error("padding: invalid, string should have whole number of bytes");for(;r>0&&o[r-1]===e;r--)if((r-1)*t%8==0)throw Error("padding: invalid, string has too much padding");return o.slice(0,r)}}}function y(t,e,o){if(e<2)throw Error(`convertRadix: invalid from=${e}, base cannot be less than 2`);if(o<2)throw Error(`convertRadix: invalid to=${o}, base cannot be less than 2`);if(l(t),!t.length)return[];let r=0,a=[],n=Array.from(t,t=>{if(s(t),t<0||t>=e)throw Error(`invalid integer: ${t}`);return t}),i=n.length;for(;;){let t=0,s=!0;for(let a=r;a<i;a++){let i=n[a],l=e*t,c=l+i;if(!Number.isSafeInteger(c)||l/e!==t||c-i!==l)throw Error("convertRadix: carry overflow");let u=c/o;t=c%o;let d=Math.floor(u);if(n[a]=d,!Number.isSafeInteger(d)||d*o+t!==c)throw Error("convertRadix: carry overflow");s&&(d?s=!1:r=a)}if(a.push(t),s)break}for(let e=0;e<t.length-1&&0===t[e];e++)a.push(0);return a.reverse()}let h=(t,e)=>0===e?t:h(e,t%e),g=(t,e)=>t+(e-h(t,e)),v=(()=>{let t=[];for(let e=0;e<40;e++)t.push(2**e);return t})();function b(t,e,o,r){if(l(t),e<=0||e>32)throw Error(`convertRadix2: wrong from=${e}`);if(o<=0||o>32)throw Error(`convertRadix2: wrong to=${o}`);if(g(e,o)>32)throw Error(`convertRadix2: carry overflow from=${e} to=${o} carryBits=${g(e,o)}`);let a=0,n=0,i=v[e],c=v[o]-1,u=[];for(let r of t){if(s(r),r>=i)throw Error(`convertRadix2: invalid data word=${r} from=${e}`);if(a=a<<e|r,n+e>32)throw Error(`convertRadix2: carry overflow pos=${n} from=${e}`);for(n+=e;n>=o;n-=o)u.push((a>>n-o&c)>>>0);let t=v[n];if(void 0===t)throw Error("invalid carry");a&=t-1}if(a=a<<o-n&c,!r&&n>=e)throw Error("Excess padding");if(!r&&a>0)throw Error(`Non-zero padding: ${a}`);return r&&n>0&&u.push(a>>>0),u}function _(t,e=!1){if(s(t),t<=0||t>32)throw Error("radix2: bits should be in (0..32]");if(g(8,t)>32||g(t,8)>32)throw Error("radix2: carry overflow");return{encode:r=>{if(!o(r))throw Error("radix2.encode input should be Uint8Array");return b(Array.from(r),8,t,!e)},decode:o=>(u("radix2.decode",o),Uint8Array.from(b(o,t,8,e)))}}let x=d(_(5),f("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),m(5),p("")),T="function"==typeof Uint8Array.from([]).toBase64&&"function"==typeof Uint8Array.fromBase64,w=(t,e)=>{if(i("base64",t),t.length>0&&!(e?/^[A-Za-z0-9=_-]+$/:/^[A-Za-z0-9=+/]+$/).test(t))throw Error("invalid base64");return Uint8Array.fromBase64(t,{alphabet:e?"base64url":"base64",lastChunkHandling:"strict"})},E=T?{encode:t=>(r(t),t.toBase64()),decode:t=>w(t,!1)}:d(_(6),f("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),m(6),p("")),O=d(_(6),f("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),p("")),S=T?{encode:t=>(r(t),t.toBase64({alphabet:"base64url"})),decode:t=>w(t,!0)}:d(_(6),f("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),m(6),p("")),I=d((s(58),{encode:t=>{if(!o(t))throw Error("radix.encode input should be Uint8Array");return y(Array.from(t),256,58)},decode:t=>(u("radix.decode",t),Uint8Array.from(y(t,58,256)))}),f("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),p("")),k=d(f("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),p("")),C="function"==typeof Uint8Array.from([]).toHex&&"function"==typeof Uint8Array.fromHex?{encode:t=>(r(t),t.toHex()),decode:t=>(i("hex",t),Uint8Array.fromHex(t))}:d(_(4),f("0123456789abcdef"),p(""),(n(e=t=>{if("string"!=typeof t||t.length%2!=0)throw TypeError(`hex.decode: expected string, got ${typeof t} with length ${t.length}`);return t.toLowerCase()}),{encode:t=>t,decode:t=>e(t)}));t.s(["base32",0,x,"base58",0,I,"base64",0,E,"base64nopad",0,O,"base64url",0,S,"hex",0,C])},368764,t=>{"use strict";var e=t.i(689862),o=t.i(377349),r=t.i(823838),a=t.i(984534);function n(i={}){let s,l,{shimDisconnect:c=!1}=i;return(0,e.createConnector)(e=>({id:"safe",name:"Safe",type:n.type,async connect({withCapabilities:t}={}){let r=await this.getProvider();if(!r)throw new o.ProviderNotFoundError;let a=await this.getAccounts(),n=await this.getChainId();return l||(l=this.onDisconnect.bind(this),r.on("disconnect",l)),c&&await e.storage?.removeItem("safe.disconnected"),{accounts:t?a.map(t=>({address:t,capabilities:{}})):a,chainId:n}},async disconnect(){let t=await this.getProvider();if(!t)throw new o.ProviderNotFoundError;l&&(t.removeListener("disconnect",l),l=void 0),c&&await e.storage?.setItem("safe.disconnected",!0)},async getAccounts(){let t=await this.getProvider();if(!t)throw new o.ProviderNotFoundError;return(await t.request({method:"eth_accounts"})).map(r.getAddress)},async getProvider(){if("u">typeof window&&window?.parent!==window){if(!s){let{default:e}=await (()=>{try{return t.A(474683)}catch{throw Error('dependency "@safe-global/safe-apps-sdk" not found')}})(),o=new e(i),r=await (0,a.withTimeout)(()=>o.safe.getInfo(),{timeout:i.unstable_getInfoTimeout??10});if(!r)throw Error("Could not load Safe information");s=new(await (async()=>{let e=await (()=>{try{return t.A(381024)}catch{throw Error('dependency "@safe-global/safe-apps-provider" not found')}})();return"function"!=typeof e.SafeAppProvider&&"function"==typeof e.default.SafeAppProvider?e.default.SafeAppProvider:e.SafeAppProvider})())(r,o)}return s}},async getChainId(){let t=await this.getProvider();if(!t)throw new o.ProviderNotFoundError;return Number(t.chainId)},async isAuthorized(){try{if(c&&await e.storage?.getItem("safe.disconnected"))return!1;return!!(await this.getAccounts()).length}catch{return!1}},onAccountsChanged(){},onChainChanged(){},onDisconnect(){e.emitter.emit("disconnect")}}))}n.type="safe",t.s(["safe",0,n])},249578,t=>{"use strict";var e=t.i(271645),o=t.i(813581);let r=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function a(t){var e,a;let n=null!=(e=t.innerText)?e:"",i=t.cloneNode(!0);if(!o.isHTMLElement(i))return n;let s=!1;for(let t of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))t.remove(),s=!0;let l=s?null!=(a=i.innerText)?a:"":n;return r.test(l)&&(l=l.replace(r,"")),l}var n=t.i(914189);t.s(["useTextValue",0,function(t){let o=(0,e.useRef)(""),r=(0,e.useRef)("");return(0,n.useEvent)(()=>{let e=t.current;if(!e)return"";let n=e.innerText;if(o.current===n)return r.current;let i=(function(t){let e=t.getAttribute("aria-label");if("string"==typeof e)return e.trim();let o=t.getAttribute("aria-labelledby");if(o){let t=o.split(" ").map(t=>{let e=document.getElementById(t);if(e){let t=e.getAttribute("aria-label");return"string"==typeof t?t.trim():a(e).trim()}return null}).filter(Boolean);if(t.length>0)return t.join(", ")}return a(t).trim()})(e).trim().toLowerCase();return o.current=n,r.current=i,i})}],249578)},245228,t=>{"use strict";let e,o,r,a;var n=t.i(843476),i=t.i(429427),s=t.i(371330),l=t.i(271645),c=t.i(174080),u=t.i(394487),d=t.i(436289),f=t.i(503269),p=t.i(214520),m=t.i(746725),y=t.i(992704),h=t.i(914189),g=t.i(488374),v=t.i(684653),b=t.i(835696),_=t.i(941444),x=t.i(877891),T=t.i(952744),w=t.i(605083),E=t.i(157138),O=t.i(144279),S=t.i(101852),I=t.i(255743),k=t.i(294316),C=t.i(249578),P=t.i(571616),R=t.i(83733),A=t.i(601893),L=t.i(919751),M=t.i(140721),D=t.i(904016),F=t.i(942803),N=t.i(233137),z=t.i(341650),$=t.i(140407),B=t.i(65659),U=t.i(544508),K=t.i(813581),j=t.i(652265),V=t.i(694421),H=t.i(397701),Q=t.i(402155),X=t.i(700020),W=t.i(35889),q=t.i(998348),Y=t.i(722678),G=t.i(635307),J=t.i(825720),Z=t.i(667310),tt=Object.defineProperty,te=(t,e,o)=>{let r;return(r="symbol"!=typeof e?e+"":e)in t?tt(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,o},to=((e=to||{})[e.Open=0]="Open",e[e.Closed=1]="Closed",e),tr=((o=tr||{})[o.Single=0]="Single",o[o.Multi=1]="Multi",o),ta=((r=ta||{})[r.Pointer=0]="Pointer",r[r.Other=1]="Other",r),tn=((a=tn||{})[a.OpenListbox=0]="OpenListbox",a[a.CloseListbox=1]="CloseListbox",a[a.GoToOption=2]="GoToOption",a[a.Search=3]="Search",a[a.ClearSearch=4]="ClearSearch",a[a.SelectOption=5]="SelectOption",a[a.RegisterOptions=6]="RegisterOptions",a[a.UnregisterOptions=7]="UnregisterOptions",a[a.SetButtonElement=8]="SetButtonElement",a[a.SetOptionsElement=9]="SetOptionsElement",a[a.SortOptions=10]="SortOptions",a[a.MarkButtonAsMoved=11]="MarkButtonAsMoved",a);function ti(t,e=t=>t){let o=null!==t.activeOptionIndex?t.options[t.activeOptionIndex]:null,r=(0,j.sortByDomNode)(e(t.options.slice()),t=>t.dataRef.current.domRef.current),a=o?r.indexOf(o):null;return -1===a&&(a=null),{options:r,activeOptionIndex:a}}let ts={1(t){if(t.dataRef.current.disabled||1===t.listboxState)return t;let e=t.buttonElement?Z.ElementPositionState.Tracked((0,Z.computeVisualPosition)(t.buttonElement)):t.buttonPositionState;return{...t,activeOptionIndex:null,pendingFocus:{focus:B.Focus.Nothing},listboxState:1,__demoMode:!1,buttonPositionState:e}},0(t,e){if(t.dataRef.current.disabled||0===t.listboxState)return t;let o=t.activeOptionIndex,{isSelected:r}=t.dataRef.current,a=t.options.findIndex(t=>r(t.dataRef.current.value));return -1!==a&&(o=a),{...t,frozenValue:!1,pendingFocus:e.focus,listboxState:0,activeOptionIndex:o,__demoMode:!1,buttonPositionState:Z.ElementPositionState.Idle}},2(t,e){var o,r,a,n,i;if(t.dataRef.current.disabled||1===t.listboxState)return t;let s={...t,searchQuery:"",activationTrigger:null!=(o=e.trigger)?o:1,__demoMode:!1};if(e.focus===B.Focus.Nothing)return{...s,activeOptionIndex:null};if(e.focus===B.Focus.Specific)return{...s,activeOptionIndex:t.options.findIndex(t=>t.id===e.id)};if(e.focus===B.Focus.Previous){let o=t.activeOptionIndex;if(null!==o){let n=t.options[o].dataRef.current.domRef,i=(0,B.calculateActiveIndex)(e,{resolveItems:()=>t.options,resolveActiveIndex:()=>t.activeOptionIndex,resolveId:t=>t.id,resolveDisabled:t=>t.dataRef.current.disabled});if(null!==i){let e=t.options[i].dataRef.current.domRef;if((null==(r=n.current)?void 0:r.previousElementSibling)===e.current||(null==(a=e.current)?void 0:a.previousElementSibling)===null)return{...s,activeOptionIndex:i}}}}else if(e.focus===B.Focus.Next){let o=t.activeOptionIndex;if(null!==o){let r=t.options[o].dataRef.current.domRef,a=(0,B.calculateActiveIndex)(e,{resolveItems:()=>t.options,resolveActiveIndex:()=>t.activeOptionIndex,resolveId:t=>t.id,resolveDisabled:t=>t.dataRef.current.disabled});if(null!==a){let e=t.options[a].dataRef.current.domRef;if((null==(n=r.current)?void 0:n.nextElementSibling)===e.current||(null==(i=e.current)?void 0:i.nextElementSibling)===null)return{...s,activeOptionIndex:a}}}}let l=ti(t),c=(0,B.calculateActiveIndex)(e,{resolveItems:()=>l.options,resolveActiveIndex:()=>l.activeOptionIndex,resolveId:t=>t.id,resolveDisabled:t=>t.dataRef.current.disabled});return{...s,...l,activeOptionIndex:c}},3:(t,e)=>{if(t.dataRef.current.disabled||1===t.listboxState)return t;let o=+(""===t.searchQuery),r=t.searchQuery+e.value.toLowerCase(),a=(null!==t.activeOptionIndex?t.options.slice(t.activeOptionIndex+o).concat(t.options.slice(0,t.activeOptionIndex+o)):t.options).find(t=>{var e;return!t.dataRef.current.disabled&&(null==(e=t.dataRef.current.textValue)?void 0:e.startsWith(r))}),n=a?t.options.indexOf(a):-1;return -1===n||n===t.activeOptionIndex?{...t,searchQuery:r}:{...t,searchQuery:r,activeOptionIndex:n,activationTrigger:1}},4:t=>t.dataRef.current.disabled||1===t.listboxState||""===t.searchQuery?t:{...t,searchQuery:""},5:t=>0===t.dataRef.current.mode?{...t,frozenValue:!0}:{...t},6:(t,e)=>{let o=t.options.concat(e.options),r=t.activeOptionIndex;if(t.pendingFocus.focus!==B.Focus.Nothing&&(r=(0,B.calculateActiveIndex)(t.pendingFocus,{resolveItems:()=>o,resolveActiveIndex:()=>t.activeOptionIndex,resolveId:t=>t.id,resolveDisabled:t=>t.dataRef.current.disabled})),null===t.activeOptionIndex){let{isSelected:e}=t.dataRef.current;if(e){let t=o.findIndex(t=>null==e?void 0:e(t.dataRef.current.value));-1!==t&&(r=t)}}return{...t,options:o,activeOptionIndex:r,pendingFocus:{focus:B.Focus.Nothing},pendingShouldSort:!0}},7:(t,e)=>{let o=t.options,r=[],a=new Set(e.options);for(let[t,e]of o.entries())if(a.has(e.id)&&(r.push(t),a.delete(e.id),0===a.size))break;if(r.length>0)for(let t of(o=o.slice(),r.reverse()))o.splice(t,1);return{...t,options:o,activationTrigger:1}},8:(t,e)=>t.buttonElement===e.element?t:{...t,buttonElement:e.element},9:(t,e)=>t.optionsElement===e.element?t:{...t,optionsElement:e.element},10:t=>t.pendingShouldSort?{...t,...ti(t),pendingShouldSort:!1}:t,11:t=>"Tracked"!==t.buttonPositionState.kind?t:{...t,buttonPositionState:Z.ElementPositionState.Moved}};class tl extends J.Machine{constructor(t){super(t),te(this,"actions",{onChange:t=>{let{onChange:e,compare:o,mode:r,value:a}=this.state.dataRef.current;return(0,H.match)(r,{0:()=>null==e?void 0:e(t),1:()=>{let r=a.slice(),n=r.findIndex(e=>o(e,t));return -1===n?r.push(t):r.splice(n,1),null==e?void 0:e(r)}})},registerOption:(0,J.batch)(()=>{let t=[],e=new Set;return[(o,r)=>{e.has(r)||(e.add(r),t.push({id:o,dataRef:r}))},()=>(e.clear(),this.send({type:6,options:t.splice(0)}))]}),unregisterOption:(0,J.batch)(()=>{let t=[];return[e=>t.push(e),()=>{this.send({type:7,options:t.splice(0)})}]}),goToOption:(0,J.batch)(()=>{let t=null;return[(e,o)=>{t={type:2,...e,trigger:o}},()=>t&&this.send(t)]}),closeListbox:()=>{this.send({type:1})},openListbox:t=>{this.send({type:0,focus:t})},selectActiveOption:()=>{var t;if(null!==this.state.activeOptionIndex){let{dataRef:t}=this.state.options[this.state.activeOptionIndex];this.actions.selectOption(t.current.value)}else 0===this.state.dataRef.current.mode&&(this.actions.closeListbox(),null==(t=this.state.buttonElement)||t.focus({preventScroll:!0}))},selectOption:t=>{this.send({type:5,value:t})},search:t=>{this.send({type:3,value:t})},clearSearch:()=>{this.send({type:4})},setButtonElement:t=>{this.send({type:8,element:t})},setOptionsElement:t=>{this.send({type:9,element:t})}}),te(this,"selectors",{activeDescendantId(t){var e;let o=t.activeOptionIndex,r=t.options;return null===o||null==(e=r[o])?void 0:e.id},isActive(t,e){var o;let r=t.activeOptionIndex,a=t.options;return null!==r&&(null==(o=a[r])?void 0:o.id)===e},hasFrozenValue:t=>t.frozenValue,shouldScrollIntoView(t,e){return!t.__demoMode&&0===t.listboxState&&0!==t.activationTrigger&&this.isActive(t,e)},didButtonMove:t=>"Moved"===t.buttonPositionState.kind}),this.on(6,()=>{requestAnimationFrame(()=>{this.send({type:10})})});{let t=this.state.id,e=z.stackMachines.get(null);this.disposables.add(e.on(z.ActionTypes.Push,o=>{e.selectors.isTop(o,t)||0!==this.state.listboxState||this.actions.closeListbox()})),this.on(0,()=>e.actions.push(t)),this.on(1,()=>e.actions.pop(t))}this.disposables.group(t=>{this.on(1,e=>{e.buttonElement&&(t.dispose(),t.add((0,Z.detectMovement)(e.buttonElement,e.buttonPositionState,()=>{this.send({type:11})})))})}),this.on(5,(t,e)=>{var o;this.actions.onChange(e.value),0===this.state.dataRef.current.mode&&(this.actions.closeListbox(),null==(o=this.state.buttonElement)||o.focus({preventScroll:!0}))})}static new({id:t,__demoMode:e=!1}){return new tl({id:t,dataRef:{current:{}},listboxState:+!e,options:[],searchQuery:"",activeOptionIndex:null,activationTrigger:1,buttonElement:null,optionsElement:null,pendingShouldSort:!1,pendingFocus:{focus:B.Focus.Nothing},frozenValue:!1,__demoMode:e,buttonPositionState:Z.ElementPositionState.Idle})}reduce(t,e){return(0,H.match)(e.type,ts,t,e)}}var tc=t.i(526599);let tu=(0,l.createContext)(null);function td(t){let e=(0,l.useContext)(tu);if(null===e){let e=Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(e,tf),e}return e}function tf({id:t,__demoMode:e=!1}){let o=(0,l.useMemo)(()=>tl.new({id:t,__demoMode:e}),[]);return(0,tc.useOnUnmount)(()=>o.dispose()),o}let tp=(0,l.createContext)(null);function tm(t){let e=(0,l.useContext)(tp);if(null===e){let e=Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(e,tm),e}return e}tp.displayName="ListboxDataContext";let ty=l.Fragment,th=(0,l.createContext)(!1),tg=X.RenderFeatures.RenderStrategy|X.RenderFeatures.Static,tv=l.Fragment,tb=(0,X.forwardRefWithAs)(function(t,e){let o=(0,l.useId)(),r=(0,A.useDisabled)(),{value:a,defaultValue:n,form:i,name:s,onChange:c,by:u,invalid:m=!1,disabled:y=r||!1,horizontal:h=!1,multiple:g=!1,__demoMode:v=!1,..._}=t,x=(0,k.useSyncRefs)(e),w=(0,p.useDefaultValue)(n),[E=g?[]:void 0,O]=(0,f.useControllable)(a,c,w),S=tf({id:o,__demoMode:v}),C=(0,l.useRef)({static:!1,hold:!1}),P=(0,l.useRef)(new Map),R=(0,d.useByComparator)(u),D=(0,l.useCallback)(t=>(0,H.match)(F.mode,{[tr.Multi]:()=>E.some(e=>R(e,t)),[tr.Single]:()=>R(E,t)}),[E]),F=(0,I.useSlot)({value:E,disabled:y,invalid:m,mode:g?tr.Multi:tr.Single,orientation:h?"horizontal":"vertical",onChange:O,compare:R,isSelected:D,optionsPropsRef:C,listRef:P});(0,b.useIsoMorphicEffect)(()=>{S.state.dataRef.current=F},[F]);let B=(0,$.useSlice)(S,t=>t.listboxState),U=z.stackMachines.get(null),K=(0,$.useSlice)(U,(0,l.useCallback)(t=>U.selectors.isTop(t,o),[U,o])),[V,Q]=(0,$.useSlice)(S,t=>[t.buttonElement,t.optionsElement]);(0,T.useOutsideClick)(K,[V,Q],(t,e)=>{S.send({type:tn.CloseListbox}),(0,j.isFocusableElement)(e,j.FocusableMode.Loose)||(t.preventDefault(),null==V||V.focus())});let W=(0,I.useSlot)({open:B===to.Open,disabled:y,invalid:m,value:E}),[q,G]=(0,Y.useLabels)({inherit:!0}),J=(0,l.useCallback)(()=>{if(void 0!==w)return null==O?void 0:O(w)},[O,w]),Z=(0,X.useRender)();return l.default.createElement(G,{value:q,props:{htmlFor:null==V?void 0:V.id},slot:{open:B===to.Open,disabled:y}},l.default.createElement(L.FloatingProvider,null,l.default.createElement(tu.Provider,{value:S},l.default.createElement(tp.Provider,{value:F},l.default.createElement(N.OpenClosedProvider,{value:(0,H.match)(B,{[to.Open]:N.State.Open,[to.Closed]:N.State.Closed})},null!=s&&null!=E&&l.default.createElement(M.FormFields,{disabled:y,data:{[s]:E},form:i,onReset:J}),Z({ourProps:{ref:x},theirProps:_,slot:W,defaultTag:ty,name:"Listbox"}))))))}),t_=(0,X.forwardRefWithAs)(function(t,e){let o=(0,l.useId)(),r=(0,F.useProvidedId)(),a=tm("Listbox.Button"),n=td("Listbox.Button"),{id:d=r||`headlessui-listbox-button-${o}`,disabled:f=a.disabled||!1,autoFocus:p=!1,...m}=t,y=(0,k.useSyncRefs)(e,(0,L.useFloatingReference)(),n.actions.setButtonElement),v=(0,L.useFloatingReferenceProps)(),[b,_,x]=(0,$.useSlice)(n,t=>[t.listboxState,t.buttonElement,t.optionsElement]),T=b===to.Open;(0,E.useQuickRelease)(T,{trigger:_,action:(0,l.useCallback)(t=>{if(null!=_&&_.contains(t.target))return E.Action.Ignore;let e=t.target.closest('[role="option"]:not([data-disabled])');return K.isHTMLElement(e)?E.Action.Select(e):null!=x&&x.contains(t.target)?E.Action.Ignore:E.Action.Close},[_,x]),close:n.actions.closeListbox,select:n.actions.selectActiveOption});let w=(0,h.useEvent)(t=>{switch(t.key){case q.Keys.Enter:(0,V.attemptSubmit)(t.currentTarget);break;case q.Keys.Space:case q.Keys.ArrowDown:t.preventDefault(),n.actions.openListbox({focus:a.value?B.Focus.Nothing:B.Focus.First});break;case q.Keys.ArrowUp:t.preventDefault(),n.actions.openListbox({focus:a.value?B.Focus.Nothing:B.Focus.Last})}}),S=(0,h.useEvent)(t=>{t.key===q.Keys.Space&&t.preventDefault()}),C=(0,g.useHandleToggle)(t=>{var e;n.state.listboxState===to.Open?((0,c.flushSync)(()=>n.actions.closeListbox()),null==(e=n.state.buttonElement)||e.focus({preventScroll:!0})):(t.preventDefault(),n.actions.openListbox({focus:B.Focus.Nothing}))}),P=(0,h.useEvent)(t=>t.preventDefault()),R=(0,Y.useLabelledBy)([d]),A=(0,W.useDescribedBy)(),{isFocusVisible:M,focusProps:D}=(0,i.useFocusRing)({autoFocus:p}),{isHovered:N,hoverProps:z}=(0,s.useHover)({isDisabled:f}),{pressed:U,pressProps:j}=(0,u.useActivePress)({disabled:f}),H=(0,I.useSlot)({open:b===to.Open,active:U||b===to.Open,disabled:f,invalid:a.invalid,value:a.value,hover:N,focus:M,autofocus:p}),Q=(0,$.useSlice)(n,t=>t.listboxState===to.Open),G=(0,X.mergeProps)(v(),{ref:y,id:d,type:(0,O.useResolveButtonType)(t,_),"aria-haspopup":"listbox","aria-controls":null==x?void 0:x.id,"aria-expanded":Q,"aria-labelledby":R,"aria-describedby":A,disabled:f||void 0,autoFocus:p,onKeyDown:w,onKeyUp:S,onKeyPress:P},C,D,z,j);return(0,X.useRender)()({ourProps:G,theirProps:m,slot:H,defaultTag:"button",name:"Listbox.Button"})}),tx=Y.Label,tT=(0,X.forwardRefWithAs)(function(t,e){let o=(0,l.useId)(),{id:r=`headlessui-listbox-options-${o}`,anchor:a,portal:n=!1,modal:i=!0,transition:s=!1,...u}=t,d=(0,L.useResolvedAnchor)(a),[f,p]=(0,l.useState)(null);d&&(n=!0);let g=tm("Listbox.Options"),b=td("Listbox.Options"),[_,T,E,O]=(0,$.useSlice)(b,t=>[t.listboxState,t.buttonElement,t.optionsElement,t.__demoMode]),C=(0,w.useOwnerDocument)(T),P=(0,w.useOwnerDocument)(E),A=(0,N.useOpenClosed)(),[M,F]=(0,R.useTransition)(s,f,null!==A?(A&N.State.Open)===N.State.Open:_===to.Open);(0,x.useOnDisappear)(M,T,b.actions.closeListbox);let z=!O&&i&&_===to.Open;(0,S.useScrollLock)(z,P);let U=!O&&i&&_===to.Open;(0,v.useInertOthers)(U,{allowed:(0,l.useCallback)(()=>[T,E],[T,E])});let K=!(0,$.useSlice)(b,b.selectors.didButtonMove)&&M,V=(0,$.useSlice)(b,b.selectors.hasFrozenValue)&&!t.static,W=(0,D.useFrozenData)(V,g.value),Y=(0,l.useCallback)(t=>g.compare(W,t),[g.compare,W]),J=(0,$.useSlice)(b,t=>{var e;if(null==d||!(null!=(e=null==d?void 0:d.to)&&e.includes("selection")))return null;let o=t.options.findIndex(t=>Y(t.dataRef.current.value));return -1===o&&(o=0),o}),Z=(()=>{if(null==d)return;if(null===J)return{...d,inner:void 0};let t=Array.from(g.listRef.current.values());return{...d,inner:{listRef:{current:t},index:J}}})(),[tt,te]=(0,L.useFloatingPanel)(Z),ta=(0,L.useFloatingPanelProps)(),tn=(0,k.useSyncRefs)(e,d?tt:null,b.actions.setOptionsElement,p),ti=(0,m.useDisposables)();(0,l.useEffect)(()=>{E&&_===to.Open&&((0,Q.isActiveElement)(E)||null==E||E.focus({preventScroll:!0}))},[_,E]);let ts=(0,h.useEvent)(t=>{var e;switch(ti.dispose(),t.key){case q.Keys.Space:if(""!==b.state.searchQuery)return t.preventDefault(),t.stopPropagation(),b.actions.search(t.key);case q.Keys.Enter:t.preventDefault(),t.stopPropagation(),b.actions.selectActiveOption();break;case(0,H.match)(g.orientation,{vertical:q.Keys.ArrowDown,horizontal:q.Keys.ArrowRight}):return t.preventDefault(),t.stopPropagation(),b.actions.goToOption({focus:B.Focus.Next});case(0,H.match)(g.orientation,{vertical:q.Keys.ArrowUp,horizontal:q.Keys.ArrowLeft}):return t.preventDefault(),t.stopPropagation(),b.actions.goToOption({focus:B.Focus.Previous});case q.Keys.Home:case q.Keys.PageUp:return t.preventDefault(),t.stopPropagation(),b.actions.goToOption({focus:B.Focus.First});case q.Keys.End:case q.Keys.PageDown:return t.preventDefault(),t.stopPropagation(),b.actions.goToOption({focus:B.Focus.Last});case q.Keys.Escape:t.preventDefault(),t.stopPropagation(),(0,c.flushSync)(()=>b.actions.closeListbox()),null==(e=b.state.buttonElement)||e.focus({preventScroll:!0});return;case q.Keys.Tab:t.preventDefault(),t.stopPropagation(),(0,c.flushSync)(()=>b.actions.closeListbox()),(0,j.focusFrom)(b.state.buttonElement,t.shiftKey?j.Focus.Previous:j.Focus.Next);break;default:1===t.key.length&&(b.actions.search(t.key),ti.setTimeout(()=>b.actions.clearSearch(),350))}}),tl=(0,$.useSlice)(b,t=>{var e;return null==(e=t.buttonElement)?void 0:e.id}),tc=(0,I.useSlot)({open:_===to.Open}),tu=(0,X.mergeProps)(d?ta():{},{id:r,ref:tn,"aria-activedescendant":(0,$.useSlice)(b,b.selectors.activeDescendantId),"aria-multiselectable":g.mode===tr.Multi||void 0,"aria-labelledby":tl,"aria-orientation":g.orientation,onKeyDown:ts,role:"listbox",tabIndex:_===to.Open?0:void 0,style:{...u.style,...te,"--button-width":(0,y.useElementSize)(M,T,!0).width},...(0,R.transitionDataAttributes)(F)}),tf=(0,X.useRender)(),ty=(0,l.useMemo)(()=>g.mode===tr.Multi?g:{...g,isSelected:Y},[g,Y]);return l.default.createElement(G.Portal,{enabled:!!n&&(t.static||M),ownerDocument:C},l.default.createElement(tp.Provider,{value:ty},tf({ourProps:tu,theirProps:u,slot:tc,defaultTag:"div",features:tg,visible:K,name:"Listbox.Options"})))}),tw=(0,X.forwardRefWithAs)(function(t,e){let o=(0,l.useId)(),{id:r=`headlessui-listbox-option-${o}`,disabled:a=!1,value:n,...i}=t,s=!0===(0,l.useContext)(th),c=tm("Listbox.Option"),u=td("Listbox.Option"),d=(0,$.useSlice)(u,t=>u.selectors.isActive(t,r)),f=c.isSelected(n),p=(0,l.useRef)(null),m=(0,C.useTextValue)(p),y=(0,_.useLatestValue)({disabled:a,value:n,domRef:p,get textValue(){return m()}}),g=(0,k.useSyncRefs)(e,p,t=>{t?c.listRef.current.set(r,t):c.listRef.current.delete(r)}),v=(0,$.useSlice)(u,t=>u.selectors.shouldScrollIntoView(t,r));(0,b.useIsoMorphicEffect)(()=>{if(v)return(0,U.disposables)().requestAnimationFrame(()=>{var t,e;null==(e=null==(t=p.current)?void 0:t.scrollIntoView)||e.call(t,{block:"nearest"})})},[v,p]),(0,b.useIsoMorphicEffect)(()=>{if(!s)return u.actions.registerOption(r,y),()=>u.actions.unregisterOption(r)},[y,r,s]);let x=(0,h.useEvent)(t=>{if(a)return t.preventDefault();u.actions.selectOption(n)}),T=(0,h.useEvent)(()=>{if(a)return u.actions.goToOption({focus:B.Focus.Nothing});u.actions.goToOption({focus:B.Focus.Specific,id:r})}),w=(0,P.useTrackedPointer)(),E=(0,h.useEvent)(t=>w.update(t)),O=(0,h.useEvent)(t=>{w.wasMoved(t)&&(a||d&&u.state.activationTrigger===ta.Pointer||u.actions.goToOption({focus:B.Focus.Specific,id:r},ta.Pointer))}),S=(0,h.useEvent)(t=>{w.wasMoved(t)&&(a||d&&u.state.activationTrigger===ta.Pointer&&u.actions.goToOption({focus:B.Focus.Nothing}))}),R=(0,I.useSlot)({active:d,focus:d,selected:f,disabled:a,selectedOption:f&&s}),A=s?{}:{id:r,ref:g,role:"option",tabIndex:!0===a?void 0:-1,"aria-disabled":!0===a||void 0,"aria-selected":f,disabled:void 0,onClick:x,onFocus:T,onPointerEnter:E,onMouseEnter:E,onPointerMove:O,onMouseMove:O,onPointerLeave:S,onMouseLeave:S},L=(0,X.useRender)();return!f&&s?null:L({ourProps:A,theirProps:i,slot:R,defaultTag:"div",name:"Listbox.Option"})}),tE=Object.assign(tb,{Button:t_,Label:tx,Options:tT,Option:tw,SelectedOption:(0,X.forwardRefWithAs)(function(t,e){let{options:o,placeholder:r,...a}=t,n={ref:(0,k.useSyncRefs)(e)},i=tm("ListboxSelectedOption"),s=(0,I.useSlot)({}),c=void 0===i.value||null===i.value||i.mode===tr.Multi&&Array.isArray(i.value)&&0===i.value.length,u=(0,X.useRender)();return l.default.createElement(th.Provider,{value:!0},u({ourProps:n,theirProps:{...a,children:l.default.createElement(l.default.Fragment,null,r&&c?r:o)},slot:s,defaultTag:tv,name:"ListboxSelectedOption"}))})});var tO=t.i(919056),tS=t.i(942959),tI=t.i(568136),tk=t.i(490463),tC=t.i(355225);t.s(["default",0,t=>{let e=(0,tk.createOptionDisplay)(t.formatOptionLabel),o=(0,tk.toOptionGroups)(t.options),r=t.value??null;return(0,n.jsx)(tE,{value:r,onChange:e=>{null!==e&&t.onChange?.(e)},by:tk.compareOptions,disabled:t.isDisabled,children:(0,n.jsxs)("div",{className:(0,tO.twMerge)("relative",t.className),children:[(0,n.jsxs)(t_,{as:tS.default,style:"secondary",size:"none",focusRing:!1,id:t.instanceId?`${t.instanceId}-button`:void 0,"aria-label":t["aria-label"],className:(0,tO.twMerge)((0,tk.getTriggerClassName)(t.size),"w-full",tk.triggerFocusClassName),children:[r?e(r,"value"):(0,n.jsx)("span",{className:"text-zinc-500 dark:text-zinc-400",children:t.placeholder??null}),(0,n.jsx)(tI.default,{className:(0,tO.twMerge)((0,tk.getTriggerChevronClassName)(t.size),"fill-zinc-600 dark:fill-zinc-400")})]}),(0,n.jsx)(tT,{modal:!1,anchor:(0,tk.getMenuAnchor)(t.menuPlacement,t.menuAlign),id:t.instanceId?`${t.instanceId}-options`:void 0,className:(0,tk.getAnchoredMenuClassName)(),style:{minWidth:t.minMenuWidth},children:(0,n.jsx)(tC.default,{optionComponent:tw,optionGroups:o,size:t.size,isOptionDisabled:t.isOptionDisabled,renderOption:t=>e(t,"menu")})})]})})}],245228)}]);

//# sourceMappingURL=3p743vmx8giym.js.map