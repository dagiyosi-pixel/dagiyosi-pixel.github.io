(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();var ju=Object.defineProperty,Ku=(i,e,t)=>e in i?ju(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,fe=(i,e,t)=>Ku(i,typeof e!="symbol"?e+"":e,t);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();var Ul="1.3.27";function lh(i,e,t){return Math.max(i,Math.min(e,t))}function Zu(i,e,t){return(1-t)*i+t*e}function $u(i,e,t,r){return Zu(i,e,1-Math.exp(-t*r))}function Ju(i,e){return(i%e+e)%e}var Qu=class{constructor(){fe(this,"isRunning",!1),fe(this,"value",0),fe(this,"from",0),fe(this,"to",0),fe(this,"currentTime",0),fe(this,"lerp"),fe(this,"duration"),fe(this,"easing"),fe(this,"onUpdate")}advance(i){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=i;const r=lh(0,this.currentTime/this.duration,1);t=r>=1;const n=t?1:this.easing(r);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=$u(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:r,easing:n,onStart:a,onUpdate:s}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=r,this.easing=n,this.currentTime=0,this.isRunning=!0,a==null||a(),this.onUpdate=s}};function ed(i,e){let t;return function(...r){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,r)},e)}}var td=class{constructor(i,e,{autoResize:t=!0,debounce:r=250}={}){fe(this,"width",0),fe(this,"height",0),fe(this,"scrollHeight",0),fe(this,"scrollWidth",0),fe(this,"debouncedResize"),fe(this,"wrapperResizeObserver"),fe(this,"contentResizeObserver"),fe(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()}),fe(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)}),fe(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)}),this.wrapper=i,this.content=e,t&&(this.debouncedResize=ed(this.resize,r),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,e;(i=this.wrapperResizeObserver)==null||i.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},ch=class{constructor(){fe(this,"events",{})}emit(i,...e){var t;const r=this.events[i]||[];for(let n=0,a=r.length;n<a;n++)(t=r[n])==null||t.call(r,...e)}on(i,e){return this.events[i]?this.events[i].push(e):this.events[i]=[e],()=>{var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(r=>e!==r)}}off(i,e){var t;this.events[i]=(t=this.events[i])==null?void 0:t.filter(r=>e!==r)}destroy(){this.events={}}};const id=100/6,Gi={passive:!1};function Il(i,e){return i===1?id:i===2?e:1}var rd=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){fe(this,"touchStart",{x:0,y:0}),fe(this,"lastDelta",{x:0,y:0}),fe(this,"window",{width:0,height:0}),fe(this,"emitter",new ch),fe(this,"onTouchStart",t=>{const{clientX:r,clientY:n}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=r,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})}),fe(this,"onTouchMove",t=>{const{clientX:r,clientY:n}=t.targetTouches?t.targetTouches[0]:t,a=-(r-this.touchStart.x)*this.options.touchMultiplier,s=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=r,this.touchStart.y=n,this.lastDelta={x:a,y:s},this.emitter.emit("scroll",{deltaX:a,deltaY:s,event:t})}),fe(this,"onTouchEnd",t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})}),fe(this,"onWheel",t=>{let{deltaX:r,deltaY:n,deltaMode:a}=t;const s=Il(a,this.window.width),o=Il(a,this.window.height);r*=s,n*=o,r*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:r,deltaY:n,event:t})}),fe(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}}),this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Gi),this.element.addEventListener("touchstart",this.onTouchStart,Gi),this.element.addEventListener("touchmove",this.onTouchMove,Gi),this.element.addEventListener("touchend",this.onTouchEnd,Gi)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Gi),this.element.removeEventListener("touchstart",this.onTouchStart,Gi),this.element.removeEventListener("touchmove",this.onTouchMove,Gi),this.element.removeEventListener("touchend",this.onTouchEnd,Gi)}};const Nl=i=>Math.min(1,1.001-2**(-10*i));var nd=class{constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:r=!0,syncTouch:n=!1,syncTouchLerp:a=.075,touchInertiaExponent:s=1.7,duration:o,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:f=1,autoResize:_=!0,prevent:g,virtualScroll:p,overscroll:b=!0,autoRaf:M=!1,anchors:v=!1,autoToggle:P=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:R=w,stopInertiaOnNavigate:y=!1,respectReducedMotion:x=!0}={}){fe(this,"_isScrolling",!1),fe(this,"_isStopped",!1),fe(this,"_isLocked",!1),fe(this,"_preventNextNativeScrollEvent",!1),fe(this,"_resetVelocityTimeout",null),fe(this,"_rafId",null),fe(this,"_isDraggingSelection",!1),fe(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)")),fe(this,"isTouching"),fe(this,"isIos"),fe(this,"time",0),fe(this,"userData",{}),fe(this,"lastVelocity",0),fe(this,"velocity",0),fe(this,"direction",0),fe(this,"options"),fe(this,"targetScroll"),fe(this,"animatedScroll"),fe(this,"animate",new Qu),fe(this,"emitter",new ch),fe(this,"dimensions"),fe(this,"virtualScroll"),fe(this,"onScrollEnd",C=>{C instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&C.stopPropagation()}),fe(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))}),fe(this,"onTransitionEnd",C=>{var B;(B=C.propertyName)!=null&&B.includes("overflow")&&C.target===this.rootElement&&this.checkOverflow()}),fe(this,"onClick",C=>{const B=C.composedPath().filter(O=>O instanceof HTMLAnchorElement&&O.href).map(O=>new URL(O.href)),F=new URL(window.location.href);if(this.options.anchors){const O=B.find(X=>F.host===X.host&&F.pathname===X.pathname&&X.hash);if(O){const X=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,V=decodeURIComponent(O.hash);this.scrollTo(V,X);return}}if(this.options.stopInertiaOnNavigate&&B.some(O=>F.host===O.host&&F.pathname!==O.pathname)){this.reset();return}}),fe(this,"onPointerDown",C=>{C.button===1&&this.reset()}),fe(this,"onVirtualScroll",C=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(C)===!1)return;const{deltaX:B,deltaY:F,event:O}=C;if(this.emitter.emit("virtual-scroll",{deltaX:B,deltaY:F,event:O}),O.ctrlKey||O.lenisStopPropagation)return;const X=O.type.includes("touch"),V=O.type.includes("wheel");if(X&&this.isIos&&(O.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(O)),this._isDraggingSelection)){O.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=O.type==="touchstart"||O.type==="touchmove";const j=B===0&&F===0;if(this.options.syncTouch&&X&&O.type==="touchstart"&&j&&!this.isStopped&&!this.isLocked){this.reset();return}const G=this.options.gestureOrientation==="vertical"&&F===0||this.options.gestureOrientation==="horizontal"&&B===0;if(j||G)return;let Q=O.composedPath();Q=Q.slice(0,Q.indexOf(this.rootElement));const oe=this.options.prevent,xe=Math.abs(B)>=Math.abs(F)?"horizontal":"vertical";if(Q.find($=>{var pe,ne,ye,we,Le;return $ instanceof HTMLElement&&(typeof oe=="function"&&(oe==null?void 0:oe($))||((pe=$.hasAttribute)==null?void 0:pe.call($,"data-lenis-prevent"))||xe==="vertical"&&((ne=$.hasAttribute)==null?void 0:ne.call($,"data-lenis-prevent-vertical"))||xe==="horizontal"&&((ye=$.hasAttribute)==null?void 0:ye.call($,"data-lenis-prevent-horizontal"))||X&&((we=$.hasAttribute)==null?void 0:we.call($,"data-lenis-prevent-touch"))||V&&((Le=$.hasAttribute)==null?void 0:Le.call($,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll($,{deltaX:B,deltaY:F}))}))return;if(this.isStopped||this.isLocked){O.cancelable&&O.preventDefault();return}if(!(this.options.syncTouch&&X||this.options.smoothWheel&&V)){this.isScrolling="native",this.animate.stop(),O.lenisStopPropagation=!0;return}let Te=F;this.options.gestureOrientation==="both"?Te=Math.abs(F)>Math.abs(B)?F:B:this.options.gestureOrientation==="horizontal"&&(Te=B),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&F>0||this.animatedScroll===this.limit&&F<0))&&(O.lenisStopPropagation=!0),O.cancelable&&O.preventDefault();const Ie=X&&this.options.syncTouch,q=X&&O.type==="touchend";q&&(Te=Math.sign(Te)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+Te,{programmatic:!1,...Ie?{lerp:q?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})}),fe(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const C=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-C,this.direction=Math.sign(this.animatedScroll-C),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}}),fe(this,"raf",C=>{const B=C-(this.time||C);this.time=C,this.animate.advance(B*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}),window.lenisVersion=Ul,window.lenis||(window.lenis={}),window.lenis.version=Ul,d==="horizontal"&&(window.lenis.horizontal=!0),n===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof o=="number"&&typeof l!="function"?l=Nl:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:r,syncTouch:n,syncTouchLerp:a,touchInertiaExponent:s,duration:o,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:m,wheelMultiplier:f,autoResize:_,prevent:g,virtualScroll:p,overscroll:b,autoRaf:M,anchors:v,autoToggle:P,allowNestedScroll:T,naiveDimensions:R,stopInertiaOnNavigate:y,respectReducedMotion:x},this.dimensions=new td(i,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new rd(t,{touchMultiplier:m,wheelMultiplier:f}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=i.targetTouches[0]??i.changedTouches[0];if(!t)return!1;const r=e.getRangeAt(0).getClientRects();if(r.length===0)return!1;const n=r[0],a=r[r.length-1],s=40,o=Math.hypot(t.clientX-n.left,t.clientY-n.top)<=s,l=Math.hypot(t.clientX-a.right,t.clientY-a.bottom)<=s;return o||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:e=0,immediate:t=!1,lock:r=!1,programmatic:n=!0,lerp:a=n?this.options.lerp:void 0,duration:s=n?this.options.duration:void 0,easing:o=n?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(n?t=!0:(a=1,s=void 0,o=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=i,m=e;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let f=null;if(typeof u=="string"?(f=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),f||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(f=u),f){if(this.options.wrapper!==window){const v=this.rootElement.getBoundingClientRect();m-=this.isHorizontal?v.left:v.top}const _=f.getBoundingClientRect(),g=getComputedStyle(f),p=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),b=getComputedStyle(this.rootElement),M=this.isHorizontal?Number.parseFloat(b.scrollPaddingLeft):Number.parseFloat(b.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(M)?0:M)}}if(typeof u=="number"){if(u+=m,this.options.infinite){if(n){this.targetScroll=this.animatedScroll=this.scroll;const f=u-this.animatedScroll;f>this.limit/2?u-=this.limit:f<-this.limit/2&&(u+=this.limit)}}else u=lh(0,u,this.limit);if(u===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}n||(this.targetScroll=u),typeof s=="number"&&typeof o!="function"?o=Nl:typeof o=="function"&&typeof s!="number"&&(s=1),this.animate.fromTo(this.animatedScroll,u,{duration:s,easing:o,lerp:a,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(f,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),n&&(this.targetScroll=f),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:e,deltaY:t}){const r=Date.now();i._lenis||(i._lenis={});const n=i._lenis;let a,s,o,l,c,h,d,u,m,f;if(r-(n.time??0)>2e3){n.time=Date.now();const T=window.getComputedStyle(i);if(n.computedStyle=T,a=["auto","overlay","scroll"].includes(T.overflowX),s=["auto","overlay","scroll"].includes(T.overflowY),c=["auto"].includes(T.overscrollBehaviorX),h=["auto"].includes(T.overscrollBehaviorY),n.hasOverflowX=a,n.hasOverflowY=s,!(a||s))return!1;d=i.scrollWidth,u=i.scrollHeight,m=i.clientWidth,f=i.clientHeight,o=d>m,l=u>f,n.isScrollableX=o,n.isScrollableY=l,n.scrollWidth=d,n.scrollHeight=u,n.clientWidth=m,n.clientHeight=f,n.hasOverscrollBehaviorX=c,n.hasOverscrollBehaviorY=h}else o=n.isScrollableX,l=n.isScrollableY,a=n.hasOverflowX,s=n.hasOverflowY,d=n.scrollWidth,u=n.scrollHeight,m=n.clientWidth,f=n.clientHeight,c=n.hasOverscrollBehaviorX,h=n.hasOverscrollBehaviorY;if(!(a&&o||s&&l))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let g,p,b,M,v,P;if(_==="horizontal")g=Math.round(i.scrollLeft),p=d-m,b=e,M=a,v=o,P=c;else if(_==="vertical")g=Math.round(i.scrollTop),p=u-f,b=t,M=s,v=l,P=h;else return!1;return!P&&(g>=p||g<=0)?!0:(b>0?g<p:g>0)&&M&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?Ju(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(const i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Ko="170",ad=0,Ol=1,sd=2,hh=1,od=2,Li=3,nr=0,Bt=1,Ii=2,er=0,tn=1,Fl=2,Bl=3,zl=4,ld=5,Er=100,cd=101,hd=102,ud=103,dd=104,pd=200,fd=201,md=202,gd=203,qs=204,Ys=205,_d=206,vd=207,xd=208,yd=209,Sd=210,Md=211,Ed=212,bd=213,Td=214,js=0,Ks=1,Zs=2,ln=3,$s=4,Js=5,Qs=6,eo=7,uh=0,wd=1,Ad=2,tr=0,Rd=1,Cd=2,Pd=3,Ld=4,Dd=5,Ud=6,Id=7,dh=300,cn=301,hn=302,to=303,io=304,Za=306,ro=1e3,Tr=1001,no=1002,mi=1003,Nd=1004,sa=1005,yi=1006,ns=1007,wr=1008,Bi=1009,ph=1010,fh=1011,kn=1012,Zo=1013,Dr=1014,Ni=1015,Jn=1016,$o=1017,Jo=1018,un=1020,mh=35902,gh=1021,_h=1022,fi=1023,vh=1024,xh=1025,rn=1026,dn=1027,yh=1028,Qo=1029,Sh=1030,el=1031,tl=1033,Pa=33776,La=33777,Da=33778,Ua=33779,ao=35840,so=35841,oo=35842,lo=35843,co=36196,ho=37492,uo=37496,po=37808,fo=37809,mo=37810,go=37811,_o=37812,vo=37813,xo=37814,yo=37815,So=37816,Mo=37817,Eo=37818,bo=37819,To=37820,wo=37821,Ia=36492,Ao=36494,Ro=36495,Mh=36283,Co=36284,Po=36285,Lo=36286,Od=3200,Fd=3201,Eh=0,Bd=1,Zi="",ai="srgb",xn="srgb-linear",$a="linear",Ye="srgb",Or=7680,Hl=519,zd=512,Hd=513,kd=514,bh=515,Vd=516,Gd=517,Wd=518,Xd=519,kl=35044,Vl="300 es",Oi=2e3,Ha=2001;class yn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const n=r.indexOf(t);n!==-1&&r.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const r=t.slice(0);for(let n=0,a=r.length;n<a;n++)r[n].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],as=Math.PI/180,Do=180/Math.PI;function Qn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[r&255]+Tt[r>>8&255]+Tt[r>>16&255]+Tt[r>>24&255]).toLowerCase()}function Nt(i,e,t){return Math.max(e,Math.min(t,i))}function qd(i,e){return(i%e+e)%e}function ss(i,e,t){return(1-t)*i+t*e}function wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function It(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Nt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*r-s*n+e.x,this.y=a*n+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(e,t,r,n,a,s,o,l,c){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,a,s,o,l,c)}set(e,t,r,n,a,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=r,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],h=r[4],d=r[7],u=r[2],m=r[5],f=r[8],_=n[0],g=n[3],p=n[6],b=n[1],M=n[4],v=n[7],P=n[2],T=n[5],w=n[8];return a[0]=s*_+o*b+l*P,a[3]=s*g+o*M+l*T,a[6]=s*p+o*v+l*w,a[1]=c*_+h*b+d*P,a[4]=c*g+h*M+d*T,a[7]=c*p+h*v+d*w,a[2]=u*_+m*b+f*P,a[5]=u*g+m*M+f*T,a[8]=u*p+m*v+f*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-r*a*h+r*o*l+n*a*c-n*s*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*s-o*c,u=o*l-h*a,m=c*a-s*l,f=t*d+r*u+n*m;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/f;return e[0]=d*_,e[1]=(n*c-h*r)*_,e[2]=(o*r-n*s)*_,e[3]=u*_,e[4]=(h*t-n*l)*_,e[5]=(n*a-o*t)*_,e[6]=m*_,e[7]=(r*l-c*t)*_,e[8]=(s*t-r*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(r*l,r*c,-r*(l*s+c*o)+s+e,-n*c,n*l,-n*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(os.makeScale(e,t)),this}rotate(e){return this.premultiply(os.makeRotation(-e)),this}translate(e,t){return this.premultiply(os.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const os=new Pe;function Th(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Vn(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yd(){const i=Vn("canvas");return i.style.display="block",i}const Gl={};function In(i){i in Gl||(Gl[i]=!0,console.warn(i))}function jd(i,e,t){return new Promise(function(r,n){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:n();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}function Kd(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Zd(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ge={enabled:!0,workingColorSpace:xn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ye&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ye&&(i.r=nn(i.r),i.g=nn(i.g),i.b=nn(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Zi?$a:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Wl=[.64,.33,.3,.6,.15,.06],Xl=[.2126,.7152,.0722],ql=[.3127,.329],Yl=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jl=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ge.define({[xn]:{primaries:Wl,whitePoint:ql,transfer:$a,toXYZ:Yl,fromXYZ:jl,luminanceCoefficients:Xl,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:Wl,whitePoint:ql,transfer:Ye,toXYZ:Yl,fromXYZ:jl,luminanceCoefficients:Xl,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}});let Fr;class $d{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fr===void 0&&(Fr=Vn("canvas")),Fr.width=e.width,Fr.height=e.height;const r=Fr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vn("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),a=n.data;for(let s=0;s<a.length;s++)a[s]=Fi(a[s]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Fi(t[r]/255)*255):t[r]=Fi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jd=0;class wh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Qn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?a.push(ls(n[s].image)):a.push(ls(n[s]))}else a=ls(n);r.url=a}return t||(e.images[this.uuid]=r),r}}function ls(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$d.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qd=0;class Lt extends yn{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,r=Tr,n=Tr,a=yi,s=wr,o=fi,l=Bi,c=Lt.DEFAULT_ANISOTROPY,h=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Qn(),this.name="",this.source=new wh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ro:e.x=e.x-Math.floor(e.x);break;case Tr:e.x=e.x<0?0:1;break;case no:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ro:e.y=e.y-Math.floor(e.y);break;case Tr:e.y=e.y<0?0:1;break;case no:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=dh;Lt.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,t=0,r=0,n=1){je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*n+s[12]*a,this.y=s[1]*t+s[5]*r+s[9]*n+s[13]*a,this.z=s[2]*t+s[6]*r+s[10]*n+s[14]*a,this.w=s[3]*t+s[7]*r+s[11]*n+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,a;const s=e.elements,o=s[0],l=s[4],c=s[8],h=s[1],d=s[5],u=s[9],m=s[2],f=s[6],_=s[10];if(Math.abs(l-h)<.01&&Math.abs(c-m)<.01&&Math.abs(u-f)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+m)<.1&&Math.abs(u+f)<.1&&Math.abs(o+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const p=(o+1)/2,b=(d+1)/2,M=(_+1)/2,v=(l+h)/4,P=(c+m)/4,T=(u+f)/4;return p>b&&p>M?p<.01?(r=0,n=.707106781,a=.707106781):(r=Math.sqrt(p),n=v/r,a=P/r):b>M?b<.01?(r=.707106781,n=0,a=.707106781):(n=Math.sqrt(b),r=v/n,a=T/n):M<.01?(r=.707106781,n=.707106781,a=0):(a=Math.sqrt(M),r=P/a,n=T/a),this.set(r,n,a,t),this}let g=Math.sqrt((f-u)*(f-u)+(c-m)*(c-m)+(h-l)*(h-l));return Math.abs(g)<.001&&(g=1),this.x=(f-u)/g,this.y=(c-m)/g,this.z=(h-l)/g,this.w=Math.acos((o+d+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ep extends yn{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);const n={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const a=new Lt(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);a.flipY=!1,a.generateMipmaps=r.generateMipmaps,a.internalFormat=r.internalFormat,this.textures=[];const s=r.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,n=e.textures.length;r<n;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new wh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends ep{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Ah extends Lt{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=mi,this.minFilter=mi,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tp extends Lt{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=mi,this.minFilter=mi,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ea{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,a,s,o){let l=r[n+0],c=r[n+1],h=r[n+2],d=r[n+3];const u=a[s+0],m=a[s+1],f=a[s+2],_=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=m,e[t+2]=f,e[t+3]=_;return}if(d!==_||l!==u||c!==m||h!==f){let g=1-o;const p=l*u+c*m+h*f+d*_,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const P=Math.sqrt(M),T=Math.atan2(P,p*b);g=Math.sin(g*T)/P,o=Math.sin(o*T)/P}const v=o*b;if(l=l*g+u*v,c=c*g+m*v,h=h*g+f*v,d=d*g+_*v,g===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=P,c*=P,h*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,r,n,a,s){const o=r[n],l=r[n+1],c=r[n+2],h=r[n+3],d=a[s],u=a[s+1],m=a[s+2],f=a[s+3];return e[t]=o*f+h*d+l*m-c*u,e[t+1]=l*f+h*u+c*d-o*m,e[t+2]=c*f+h*m+o*u-l*d,e[t+3]=h*f-o*d-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,n=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(r/2),h=o(n/2),d=o(a/2),u=l(r/2),m=l(n/2),f=l(a/2);switch(s){case"XYZ":this._x=u*h*d+c*m*f,this._y=c*m*d-u*h*f,this._z=c*h*f+u*m*d,this._w=c*h*d-u*m*f;break;case"YXZ":this._x=u*h*d+c*m*f,this._y=c*m*d-u*h*f,this._z=c*h*f-u*m*d,this._w=c*h*d+u*m*f;break;case"ZXY":this._x=u*h*d-c*m*f,this._y=c*m*d+u*h*f,this._z=c*h*f+u*m*d,this._w=c*h*d-u*m*f;break;case"ZYX":this._x=u*h*d-c*m*f,this._y=c*m*d+u*h*f,this._z=c*h*f-u*m*d,this._w=c*h*d+u*m*f;break;case"YZX":this._x=u*h*d+c*m*f,this._y=c*m*d+u*h*f,this._z=c*h*f-u*m*d,this._w=c*h*d-u*m*f;break;case"XZY":this._x=u*h*d-c*m*f,this._y=c*m*d-u*h*f,this._z=c*h*f+u*m*d,this._w=c*h*d+u*m*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=r+o+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-c)*m,this._z=(s-n)*m}else if(r>o&&r>d){const m=2*Math.sqrt(1+r-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(n+s)/m,this._z=(a+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-r-d);this._w=(a-c)/m,this._x=(n+s)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-r-o);this._w=(s-n)/m,this._x=(a+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=r*h+s*o+n*c-a*l,this._y=n*h+s*l+a*o-r*c,this._z=a*h+s*c+r*l-n*o,this._w=s*h-r*o-n*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,a=this._z,s=this._w;let o=s*e._w+r*e._x+n*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=r,this._y=n,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*r+t*this._x,this._y=m*n+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=s*d+this._w*u,this._x=r*d+this._x*u,this._y=n*d+this._y*u,this._z=a*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(n*Math.sin(e),n*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,r=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*n,this.y=a[1]*t+a[4]*r+a[7]*n,this.z=a[2]*t+a[5]*r+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=e.elements,s=1/(a[3]*t+a[7]*r+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*n+a[12])*s,this.y=(a[1]*t+a[5]*r+a[9]*n+a[13])*s,this.z=(a[2]*t+a[6]*r+a[10]*n+a[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*n-o*r),h=2*(o*t-a*n),d=2*(a*r-s*t);return this.x=t+l*c+s*d-o*h,this.y=r+l*h+o*c-a*d,this.z=n+l*d+a*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*n,this.y=a[1]*t+a[5]*r+a[9]*n,this.z=a[2]*t+a[6]*r+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=n*l-a*o,this.y=a*s-r*l,this.z=r*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return cs.copy(this).projectOnVector(e),this.sub(cs)}reflect(e){return this.sub(cs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Nt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cs=new N,Kl=new ea;class ta{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,hi):hi.fromBufferAttribute(a,s),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oa.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),oa.copy(r.boundingBox)),oa.applyMatrix4(e.matrixWorld),this.union(oa)}const n=e.children;for(let a=0,s=n.length;a<s;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(An),la.subVectors(this.max,An),Br.subVectors(e.a,An),zr.subVectors(e.b,An),Hr.subVectors(e.c,An),Wi.subVectors(zr,Br),Xi.subVectors(Hr,zr),dr.subVectors(Br,Hr);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-dr.z,dr.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,dr.z,0,-dr.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-dr.y,dr.x,0];return!hs(t,Br,zr,Hr,la)||(t=[1,0,0,0,1,0,0,0,1],!hs(t,Br,zr,Hr,la))?!1:(ca.crossVectors(Wi,Xi),t=[ca.x,ca.y,ca.z],hs(t,Br,zr,Hr,la))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wi=[new N,new N,new N,new N,new N,new N,new N,new N],hi=new N,oa=new ta,Br=new N,zr=new N,Hr=new N,Wi=new N,Xi=new N,dr=new N,An=new N,la=new N,ca=new N,pr=new N;function hs(i,e,t,r,n){for(let a=0,s=i.length-3;a<=s;a+=3){pr.fromArray(i,a);const o=n.x*Math.abs(pr.x)+n.y*Math.abs(pr.y)+n.z*Math.abs(pr.z),l=e.dot(pr),c=t.dot(pr),h=r.dot(pr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ip=new ta,Rn=new N,us=new N;class Ja{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):ip.setFromPoints(e).getCenter(r);let n=0;for(let a=0,s=e.length;a<s;a++)n=Math.max(n,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rn.subVectors(e,this.center);const t=Rn.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(Rn,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(us.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rn.copy(e.center).add(us)),this.expandByPoint(Rn.copy(e.center).sub(us))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new N,ds=new N,ha=new N,qi=new N,ps=new N,ua=new N,fs=new N;class Rh{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){ds.copy(e).add(t).multiplyScalar(.5),ha.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(ds);const a=e.distanceTo(t)*.5,s=-this.direction.dot(ha),o=qi.dot(this.direction),l=-qi.dot(ha),c=qi.lengthSq(),h=Math.abs(1-s*s);let d,u,m,f;if(h>0)if(d=s*l-o,u=s*o-l,f=a*h,d>=0)if(u>=-f)if(u<=f){const _=1/h;d*=_,u*=_,m=d*(d+s*u+2*o)+u*(s*d+u+2*l)+c}else u=a,d=Math.max(0,-(s*u+o)),m=-d*d+u*(u+2*l)+c;else u=-a,d=Math.max(0,-(s*u+o)),m=-d*d+u*(u+2*l)+c;else u<=-f?(d=Math.max(0,-(-s*a+o)),u=d>0?-a:Math.min(Math.max(-a,-l),a),m=-d*d+u*(u+2*l)+c):u<=f?(d=0,u=Math.min(Math.max(-a,-l),a),m=u*(u+2*l)+c):(d=Math.max(0,-(s*a+o)),u=d>0?a:Math.min(Math.max(-a,-l),a),m=-d*d+u*(u+2*l)+c);else u=s>0?-a:a,d=Math.max(0,-(s*u+o)),m=-d*d+u*(u+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(ds).addScaledVector(ha,u),m}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);const r=Ai.dot(this.direction),n=Ai.dot(Ai)-r*r,a=e.radius*e.radius;if(n>a)return null;const s=Math.sqrt(a-n),o=r-s,l=r+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,a,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(r=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(r=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(a=(e.min.y-u.y)*h,s=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,s=(e.min.y-u.y)*h),r>s||a>n||((a>r||isNaN(r))&&(r=a),(s<n||isNaN(n))&&(n=s),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),r>l||o>n)||((o>r||r!==r)&&(r=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,r,n,a){ps.subVectors(t,e),ua.subVectors(r,e),fs.crossVectors(ps,ua);let s=this.direction.dot(fs),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;qi.subVectors(this.origin,e);const l=o*this.direction.dot(ua.crossVectors(qi,ua));if(l<0)return null;const c=o*this.direction.dot(ps.cross(qi));if(c<0||l+c>s)return null;const h=-o*qi.dot(fs);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(e,t,r,n,a,s,o,l,c,h,d,u,m,f,_,g){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,a,s,o,l,c,h,d,u,m,f,_,g)}set(e,t,r,n,a,s,o,l,c,h,d,u,m,f,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=n,p[1]=a,p[5]=s,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=m,p[7]=f,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/kr.setFromMatrixColumn(e,0).length(),a=1/kr.setFromMatrixColumn(e,1).length(),s=1/kr.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,a=e.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(n),c=Math.sin(n),h=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const u=s*h,m=s*d,f=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+f*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=f+m*c,t[10]=s*l}else if(e.order==="YXZ"){const u=l*h,m=l*d,f=c*h,_=c*d;t[0]=u+_*o,t[4]=f*o-m,t[8]=s*c,t[1]=s*d,t[5]=s*h,t[9]=-o,t[2]=m*o-f,t[6]=_+u*o,t[10]=s*l}else if(e.order==="ZXY"){const u=l*h,m=l*d,f=c*h,_=c*d;t[0]=u-_*o,t[4]=-s*d,t[8]=f+m*o,t[1]=m+f*o,t[5]=s*h,t[9]=_-u*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const u=s*h,m=s*d,f=o*h,_=o*d;t[0]=l*h,t[4]=f*c-m,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=m*c-f,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const u=s*l,m=s*c,f=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=f*d+m,t[1]=d,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*d+f,t[10]=u-_*d}else if(e.order==="XZY"){const u=s*l,m=s*c,f=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=s*h,t[9]=m*d-f,t[2]=f*d-m,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rp,e,np)}lookAt(e,t,r){const n=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Yi.crossVectors(r,Xt),Yi.lengthSq()===0&&(Math.abs(r.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Yi.crossVectors(r,Xt)),Yi.normalize(),da.crossVectors(Xt,Yi),n[0]=Yi.x,n[4]=da.x,n[8]=Xt.x,n[1]=Yi.y,n[5]=da.y,n[9]=Xt.y,n[2]=Yi.z,n[6]=da.z,n[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],h=r[1],d=r[5],u=r[9],m=r[13],f=r[2],_=r[6],g=r[10],p=r[14],b=r[3],M=r[7],v=r[11],P=r[15],T=n[0],w=n[4],R=n[8],y=n[12],x=n[1],C=n[5],B=n[9],F=n[13],O=n[2],X=n[6],V=n[10],j=n[14],G=n[3],Q=n[7],oe=n[11],xe=n[15];return a[0]=s*T+o*x+l*O+c*G,a[4]=s*w+o*C+l*X+c*Q,a[8]=s*R+o*B+l*V+c*oe,a[12]=s*y+o*F+l*j+c*xe,a[1]=h*T+d*x+u*O+m*G,a[5]=h*w+d*C+u*X+m*Q,a[9]=h*R+d*B+u*V+m*oe,a[13]=h*y+d*F+u*j+m*xe,a[2]=f*T+_*x+g*O+p*G,a[6]=f*w+_*C+g*X+p*Q,a[10]=f*R+_*B+g*V+p*oe,a[14]=f*y+_*F+g*j+p*xe,a[3]=b*T+M*x+v*O+P*G,a[7]=b*w+M*C+v*X+P*Q,a[11]=b*R+M*B+v*V+P*oe,a[15]=b*y+M*F+v*j+P*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],m=e[14],f=e[3],_=e[7],g=e[11],p=e[15];return f*(+a*l*d-n*c*d-a*o*u+r*c*u+n*o*m-r*l*m)+_*(+t*l*m-t*c*u+a*s*u-n*s*m+n*c*h-a*l*h)+g*(+t*c*d-t*o*m-a*s*d+r*s*m+a*o*h-r*c*h)+p*(-n*o*h-t*l*d+t*o*u+n*s*d-r*s*u+r*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],m=e[11],f=e[12],_=e[13],g=e[14],p=e[15],b=d*g*c-_*u*c+_*l*m-o*g*m-d*l*p+o*u*p,M=f*u*c-h*g*c-f*l*m+s*g*m+h*l*p-s*u*p,v=h*_*c-f*d*c+f*o*m-s*_*m-h*o*p+s*d*p,P=f*d*l-h*_*l-f*o*u+s*_*u+h*o*g-s*d*g,T=t*b+r*M+n*v+a*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=b*w,e[1]=(_*u*a-d*g*a-_*n*m+r*g*m+d*n*p-r*u*p)*w,e[2]=(o*g*a-_*l*a+_*n*c-r*g*c-o*n*p+r*l*p)*w,e[3]=(d*l*a-o*u*a-d*n*c+r*u*c+o*n*m-r*l*m)*w,e[4]=M*w,e[5]=(h*g*a-f*u*a+f*n*m-t*g*m-h*n*p+t*u*p)*w,e[6]=(f*l*a-s*g*a-f*n*c+t*g*c+s*n*p-t*l*p)*w,e[7]=(s*u*a-h*l*a+h*n*c-t*u*c-s*n*m+t*l*m)*w,e[8]=v*w,e[9]=(f*d*a-h*_*a-f*r*m+t*_*m+h*r*p-t*d*p)*w,e[10]=(s*_*a-f*o*a+f*r*c-t*_*c-s*r*p+t*o*p)*w,e[11]=(h*o*a-s*d*a-h*r*c+t*d*c+s*r*m-t*o*m)*w,e[12]=P*w,e[13]=(h*_*n-f*d*n+f*r*u-t*_*u-h*r*g+t*d*g)*w,e[14]=(f*o*n-s*_*n-f*r*l+t*_*l+s*r*g-t*o*g)*w,e[15]=(s*d*n-h*o*n+h*r*l-t*d*l-s*r*u+t*o*u)*w,this}scale(e){const t=this.elements,r=e.x,n=e.y,a=e.z;return t[0]*=r,t[4]*=n,t[8]*=a,t[1]*=r,t[5]*=n,t[9]*=a,t[2]*=r,t[6]*=n,t[10]*=a,t[3]*=r,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),a=1-r,s=e.x,o=e.y,l=e.z,c=a*s,h=a*o;return this.set(c*s+r,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+r,h*l-n*s,0,c*l-n*o,h*l+n*s,a*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,a,s){return this.set(1,r,a,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,h=s+s,d=o+o,u=a*c,m=a*h,f=a*d,_=s*h,g=s*d,p=o*d,b=l*c,M=l*h,v=l*d,P=r.x,T=r.y,w=r.z;return n[0]=(1-(_+p))*P,n[1]=(m+v)*P,n[2]=(f-M)*P,n[3]=0,n[4]=(m-v)*T,n[5]=(1-(u+p))*T,n[6]=(g+b)*T,n[7]=0,n[8]=(f+M)*w,n[9]=(g-b)*w,n[10]=(1-(u+_))*w,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let a=kr.set(n[0],n[1],n[2]).length();const s=kr.set(n[4],n[5],n[6]).length(),o=kr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],ui.copy(this);const l=1/a,c=1/s,h=1/o;return ui.elements[0]*=l,ui.elements[1]*=l,ui.elements[2]*=l,ui.elements[4]*=c,ui.elements[5]*=c,ui.elements[6]*=c,ui.elements[8]*=h,ui.elements[9]*=h,ui.elements[10]*=h,t.setFromRotationMatrix(ui),r.x=a,r.y=s,r.z=o,this}makePerspective(e,t,r,n,a,s,o=Oi){const l=this.elements,c=2*a/(t-e),h=2*a/(r-n),d=(t+e)/(t-e),u=(r+n)/(r-n);let m,f;if(o===Oi)m=-(s+a)/(s-a),f=-2*s*a/(s-a);else if(o===Ha)m=-s/(s-a),f=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,a,s,o=Oi){const l=this.elements,c=1/(t-e),h=1/(r-n),d=1/(s-a),u=(t+e)*c,m=(r+n)*h;let f,_;if(o===Oi)f=(s+a)*d,_=-2*d;else if(o===Ha)f=a*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const kr=new N,ui=new nt,rp=new N(0,0,0),np=new N(1,1,1),Yi=new N,da=new N,Xt=new N,Zl=new nt,$l=new ea;class Ei{constructor(e=0,t=0,r=0,n=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,a=n[0],s=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],m=n[10];switch(t){case"XYZ":this._y=Math.asin(Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Nt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zl,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $l.setFromEuler(this),this.setFromQuaternion($l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class Ch{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ap=0;const Jl=new N,Vr=new ea,Ri=new nt,pa=new N,Cn=new N,sp=new N,op=new ea,Ql=new N(1,0,0),ec=new N(0,1,0),tc=new N(0,0,1),ic={type:"added"},lp={type:"removed"},Gr={type:"childadded",child:null},ms={type:"childremoved",child:null};class Mt extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new N,t=new Ei,r=new ea,n=new N(1,1,1);function a(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new nt},normalMatrix:{value:new Pe}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ch,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(Ql,e)}rotateY(e){return this.rotateOnAxis(ec,e)}rotateZ(e){return this.rotateOnAxis(tc,e)}translateOnAxis(e,t){return Jl.copy(e).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ql,e)}translateY(e){return this.translateOnAxis(ec,e)}translateZ(e){return this.translateOnAxis(tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?pa.copy(e):pa.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),Cn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Cn,pa,this.up):Ri.lookAt(pa,Cn,this.up),this.quaternion.setFromRotationMatrix(Ri),n&&(Ri.extractRotation(n.matrixWorld),Vr.setFromRotationMatrix(Ri),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ic),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lp),ms.child=e,this.dispatchEvent(ms),ms.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ic),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cn,e,sp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cn,op,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));n.material=o}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),d=s(e.shapes),u=s(e.skeletons),m=s(e.animations),f=s(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),h.length>0&&(r.images=h),d.length>0&&(r.shapes=d),u.length>0&&(r.skeletons=u),m.length>0&&(r.animations=m),f.length>0&&(r.nodes=f)}return r.object=n,r;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}Mt.DEFAULT_UP=new N(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new N,Ci=new N,gs=new N,Pi=new N,Wr=new N,Xr=new N,rc=new N,_s=new N,vs=new N,xs=new N,ys=new je,Ss=new je,Ms=new je;class pi{constructor(e=new N,t=new N,r=new N){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),di.subVectors(e,t),n.cross(di);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,r,n,a){di.subVectors(n,t),Ci.subVectors(r,t),gs.subVectors(e,t);const s=di.dot(di),o=di.dot(Ci),l=di.dot(gs),c=Ci.dot(Ci),h=Ci.dot(gs),d=s*c-o*o;if(d===0)return a.set(0,0,0),null;const u=1/d,m=(c*l-o*h)*u,f=(s*h-o*l)*u;return a.set(1-m-f,f,m)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,r,n,a,s,o,l){return this.getBarycoord(e,t,r,n,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Pi.x),l.addScaledVector(s,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(e,t,r,n,a,s){return ys.setScalar(0),Ss.setScalar(0),Ms.setScalar(0),ys.fromBufferAttribute(e,t),Ss.fromBufferAttribute(e,r),Ms.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(ys,a.x),s.addScaledVector(Ss,a.y),s.addScaledVector(Ms,a.z),s}static isFrontFacing(e,t,r,n){return di.subVectors(r,t),Ci.subVectors(e,t),di.cross(Ci).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),di.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,n,a){return pi.getInterpolation(e,this.a,this.b,this.c,t,r,n,a)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,a=this.c;let s,o;Wr.subVectors(n,r),Xr.subVectors(a,r),_s.subVectors(e,r);const l=Wr.dot(_s),c=Xr.dot(_s);if(l<=0&&c<=0)return t.copy(r);vs.subVectors(e,n);const h=Wr.dot(vs),d=Xr.dot(vs);if(h>=0&&d<=h)return t.copy(n);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(r).addScaledVector(Wr,s);xs.subVectors(e,a);const m=Wr.dot(xs),f=Xr.dot(xs);if(f>=0&&m<=f)return t.copy(a);const _=m*c-l*f;if(_<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(r).addScaledVector(Xr,o);const g=h*f-m*d;if(g<=0&&d-h>=0&&m-f>=0)return rc.subVectors(a,n),o=(d-h)/(d-h+(m-f)),t.copy(n).addScaledVector(rc,o);const p=1/(g+_+u);return s=_*p,o=u*p,t.copy(r).addScaledVector(Wr,s).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},fa={h:0,s:0,l:0};function Es(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ge.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=Ge.workingColorSpace){if(e=qd(e,1),t=Nt(t,0,1),r=Nt(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,s=2*r-a;this.r=Es(s,a,e+1/3),this.g=Es(s,a,e),this.b=Es(s,a,e-1/3)}return Ge.toWorkingColorSpace(this,n),this}setStyle(e,t=ai){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ai){const r=Ph[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=nn(e.r),this.g=nn(e.g),this.b=nn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Ge.fromWorkingColorSpace(wt.copy(this),e),Math.round(Nt(wt.r*255,0,255))*65536+Math.round(Nt(wt.g*255,0,255))*256+Math.round(Nt(wt.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.fromWorkingColorSpace(wt.copy(this),t);const r=wt.r,n=wt.g,a=wt.b,s=Math.max(r,n,a),o=Math.min(r,n,a);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=h<=.5?d/(s+o):d/(2-s-o),s){case r:l=(n-a)/d+(n<a?6:0);break;case n:l=(a-r)/d+2;break;case a:l=(r-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.fromWorkingColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=ai){Ge.fromWorkingColorSpace(wt.copy(this),e);const t=wt.r,r=wt.g,n=wt.b;return e!==ai?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(fa);const r=ss(ji.h,fa.h,t),n=ss(ji.s,fa.s,t),a=ss(ji.l,fa.l,t);return this.setHSL(r,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*n,this.g=a[1]*t+a[4]*r+a[7]*n,this.b=a[2]*t+a[5]*r+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new He;He.NAMES=Ph;let cp=0;class Sn extends yn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Qn(),this.name="",this.blending=tn,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qs,this.blendDst=Ys,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ln,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==tn&&(r.blending=this.blending),this.side!==nr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==qs&&(r.blendSrc=this.blendSrc),this.blendDst!==Ys&&(r.blendDst=this.blendDst),this.blendEquation!==Er&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ln&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hl&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=n(e.textures),s=n(e.images);a.length>0&&(r.textures=a),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let a=0;a!==n;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Lh extends Sn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new N,ma=new We;class Mi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=kl,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ma.fromBufferAttribute(this,t),ma.applyMatrix3(e),this.setXY(t,ma.x,ma.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=wn(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=It(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),r=It(r,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,a){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),r=It(r,this.array),n=It(n,this.array),a=It(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kl&&(e.usage=this.usage),e}}class Dh extends Mi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Uh extends Mi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Dt extends Mi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let hp=0;const ri=new nt,bs=new Mt,qr=new N,qt=new ta,Pn=new ta,xt=new N;class Qt extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Th(e)?Uh:Dh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new Pe().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,r){return ri.makeTranslation(e,t,r),this.applyMatrix4(ri),this}scale(e,t,r){return ri.makeScale(e,t,r),this.applyMatrix4(ri),this}lookAt(e){return bs.lookAt(e),bs.updateMatrix(),this.applyMatrix4(bs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let n=0,a=e.length;n<a;n++){const s=e[n];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Dt(r,3))}else{for(let r=0,n=t.count;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const a=t[r];qt.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ja);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const r=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Pn.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(qt.min,Pn.min),qt.expandByPoint(xt),xt.addVectors(qt.max,Pn.max),qt.expandByPoint(xt)):(qt.expandByPoint(Pn.min),qt.expandByPoint(Pn.max))}qt.getCenter(r);let n=0;for(let a=0,s=e.count;a<s;a++)xt.fromBufferAttribute(e,a),n=Math.max(n,r.distanceToSquared(xt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)xt.fromBufferAttribute(o,c),l&&(qr.fromBufferAttribute(e,c),xt.add(qr)),n=Math.max(n,r.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,n=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<r.count;R++)o[R]=new N,l[R]=new N;const c=new N,h=new N,d=new N,u=new We,m=new We,f=new We,_=new N,g=new N;function p(R,y,x){c.fromBufferAttribute(r,R),h.fromBufferAttribute(r,y),d.fromBufferAttribute(r,x),u.fromBufferAttribute(a,R),m.fromBufferAttribute(a,y),f.fromBufferAttribute(a,x),h.sub(c),d.sub(c),m.sub(u),f.sub(u);const C=1/(m.x*f.y-f.x*m.y);isFinite(C)&&(_.copy(h).multiplyScalar(f.y).addScaledVector(d,-m.y).multiplyScalar(C),g.copy(d).multiplyScalar(m.x).addScaledVector(h,-f.x).multiplyScalar(C),o[R].add(_),o[y].add(_),o[x].add(_),l[R].add(g),l[y].add(g),l[x].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let R=0,y=b.length;R<y;++R){const x=b[R],C=x.start,B=x.count;for(let F=C,O=C+B;F<O;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const M=new N,v=new N,P=new N,T=new N;function w(R){P.fromBufferAttribute(n,R),T.copy(P);const y=o[R];M.copy(y),M.sub(P.multiplyScalar(P.dot(y))).normalize(),v.crossVectors(T,y);const x=v.dot(l[R])<0?-1:1;s.setXYZW(R,M.x,M.y,M.z,x)}for(let R=0,y=b.length;R<y;++R){const x=b[R],C=x.start,B=x.count;for(let F=C,O=C+B;F<O;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Mi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let u=0,m=r.count;u<m;u++)r.setXYZ(u,0,0,0);const n=new N,a=new N,s=new N,o=new N,l=new N,c=new N,h=new N,d=new N;if(e)for(let u=0,m=e.count;u<m;u+=3){const f=e.getX(u+0),_=e.getX(u+1),g=e.getX(u+2);n.fromBufferAttribute(t,f),a.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),h.subVectors(s,a),d.subVectors(n,a),h.cross(d),o.fromBufferAttribute(r,f),l.fromBufferAttribute(r,_),c.fromBufferAttribute(r,g),o.add(h),l.add(h),c.add(h),r.setXYZ(f,o.x,o.y,o.z),r.setXYZ(_,l.x,l.y,l.z),r.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)n.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),h.subVectors(s,a),d.subVectors(n,a),h.cross(d),r.setXYZ(u+0,h.x,h.y,h.z),r.setXYZ(u+1,h.x,h.y,h.z),r.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let m=0,f=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let p=0;p<h;p++)u[f++]=c[m++]}return new Mi(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,r=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,r);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],m=e(u,r);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(n[l]=h,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],d=a[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nc=new nt,fr=new Rh,ga=new Ja,ac=new N,_a=new N,va=new N,xa=new N,Ts=new N,ya=new N,sc=new N,Sa=new N;class st extends Mt{constructor(e=new Qt,t=new Lh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const s=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,a=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(a&&o){ya.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],d=a[l];h!==0&&(Ts.fromBufferAttribute(d,e),s?ya.addScaledVector(Ts,h):ya.addScaledVector(Ts.sub(t),h))}t.add(ya)}return t}raycast(e,t){const r=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ga.copy(r.boundingSphere),ga.applyMatrix4(a),fr.copy(e.ray).recast(e.near),!(ga.containsPoint(fr.origin)===!1&&(fr.intersectSphere(ga,ac)===null||fr.origin.distanceToSquared(ac)>(e.far-e.near)**2))&&(nc.copy(a).invert(),fr.copy(e.ray).applyMatrix4(nc),!(r.boundingBox!==null&&fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,fr)))}_computeIntersections(e,t,r){let n;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,u=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let f=0,_=u.length;f<_;f++){const g=u[f],p=s[g.materialIndex],b=Math.max(g.start,m.start),M=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let v=b,P=M;v<P;v+=3){const T=o.getX(v),w=o.getX(v+1),R=o.getX(v+2);n=Ma(this,p,e,r,c,h,d,T,w,R),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{const f=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let g=f,p=_;g<p;g+=3){const b=o.getX(g),M=o.getX(g+1),v=o.getX(g+2);n=Ma(this,s,e,r,c,h,d,b,M,v),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let f=0,_=u.length;f<_;f++){const g=u[f],p=s[g.materialIndex],b=Math.max(g.start,m.start),M=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let v=b,P=M;v<P;v+=3){const T=v,w=v+1,R=v+2;n=Ma(this,p,e,r,c,h,d,T,w,R),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{const f=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let g=f,p=_;g<p;g+=3){const b=g,M=g+1,v=g+2;n=Ma(this,s,e,r,c,h,d,b,M,v),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}}}function up(i,e,t,r,n,a,s,o){let l;if(e.side===Bt?l=r.intersectTriangle(s,a,n,!0,o):l=r.intersectTriangle(n,a,s,e.side===nr,o),l===null)return null;Sa.copy(o),Sa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Sa);return c<t.near||c>t.far?null:{distance:c,point:Sa.clone(),object:i}}function Ma(i,e,t,r,n,a,s,o,l,c){i.getVertexPosition(o,_a),i.getVertexPosition(l,va),i.getVertexPosition(c,xa);const h=up(i,e,t,r,_a,va,xa,sc);if(h){const d=new N;pi.getBarycoord(sc,_a,va,xa,d),n&&(h.uv=pi.getInterpolatedAttribute(n,o,l,c,d,new We)),a&&(h.uv1=pi.getInterpolatedAttribute(a,o,l,c,d,new We)),s&&(h.normal=pi.getInterpolatedAttribute(s,o,l,c,d,new N),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new N,materialIndex:0};pi.getNormal(_a,va,xa,u.normal),h.face=u,h.barycoord=d}return h}class Yt extends Qt{constructor(e=1,t=1,r=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:a,depthSegments:s};const o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],h=[],d=[];let u=0,m=0;f("z","y","x",-1,-1,r,t,e,s,a,0),f("z","y","x",1,-1,r,t,-e,s,a,1),f("x","z","y",1,1,e,r,t,n,s,2),f("x","z","y",1,-1,e,r,-t,n,s,3),f("x","y","z",1,-1,e,t,r,n,a,4),f("x","y","z",-1,-1,e,t,-r,n,a,5),this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(d,2));function f(_,g,p,b,M,v,P,T,w,R,y){const x=v/w,C=P/R,B=v/2,F=P/2,O=T/2,X=w+1,V=R+1;let j=0,G=0;const Q=new N;for(let oe=0;oe<V;oe++){const xe=oe*C-F;for(let Te=0;Te<X;Te++){const Ie=Te*x-B;Q[_]=Ie*b,Q[g]=xe*M,Q[p]=O,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[g]=0,Q[p]=T>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(Te/w),d.push(1-oe/R),j+=1}}for(let oe=0;oe<R;oe++)for(let xe=0;xe<w;xe++){const Te=u+xe+X*oe,Ie=u+xe+X*(oe+1),q=u+(xe+1)+X*(oe+1),$=u+(xe+1)+X*oe;l.push(Te,Ie,$),l.push(Ie,q,$),G+=6}o.addGroup(m,G,y),m+=G,u+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pn(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const n=i[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function Pt(i){const e={};for(let t=0;t<i.length;t++){const r=pn(i[t]);for(const n in r)e[n]=r[n]}return e}function dp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ih(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const pp={clone:pn,merge:Pt};var fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends Sn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fp,this.fragmentShader=mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pn(e.uniforms),this.uniformsGroups=dp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Nh extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new N,oc=new We,lc=new We;class Ot extends Nh{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Do*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,oc,lc),t.subVectors(lc,oc)}setViewOffset(e,t,r,n,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(as*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,a=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*n/l,t-=s.offsetY*r/c,n*=s.width/l,r*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yr=-90,jr=1;class gp extends Mt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ot(Yr,jr,e,t);n.layers=this.layers,this.add(n);const a=new Ot(Yr,jr,e,t);a.layers=this.layers,this.add(a);const s=new Ot(Yr,jr,e,t);s.layers=this.layers,this.add(s);const o=new Ot(Yr,jr,e,t);o.layers=this.layers,this.add(o);const l=new Ot(Yr,jr,e,t);l.layers=this.layers,this.add(l);const c=new Ot(Yr,jr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ha)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;const _=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,a),e.setRenderTarget(r,1,n),e.render(t,s),e.setRenderTarget(r,2,n),e.render(t,o),e.setRenderTarget(r,3,n),e.render(t,l),e.setRenderTarget(r,4,n),e.render(t,c),r.texture.generateMipmaps=_,e.setRenderTarget(r,5,n),e.render(t,h),e.setRenderTarget(d,u,m),e.xr.enabled=f,r.texture.needsPMREMUpdate=!0}}class Oh extends Lt{constructor(e,t,r,n,a,s,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:cn,super(e,t,r,n,a,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _p extends Ur{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];this.texture=new Oh(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Yt(5,5,5),a=new zi({name:"CubemapFromEquirect",uniforms:pn(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bt,blending:er});a.uniforms.tEquirect.value=t;const s=new st(n,a),o=t.minFilter;return t.minFilter===wr&&(t.minFilter=yi),new gp(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,r,n){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,n);e.setRenderTarget(a)}}const ws=new N,vp=new N,xp=new Pe;class yr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=ws.subVectors(r,t).cross(vp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(ws),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||xp.getNormalMatrix(e),n=this.coplanarPoint(ws).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new Ja,Ea=new N;class il{constructor(e=new yr,t=new yr,r=new yr,n=new yr,a=new yr,s=new yr){this.planes=[e,t,r,n,a,s]}set(e,t,r,n,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(n),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Oi){const r=this.planes,n=e.elements,a=n[0],s=n[1],o=n[2],l=n[3],c=n[4],h=n[5],d=n[6],u=n[7],m=n[8],f=n[9],_=n[10],g=n[11],p=n[12],b=n[13],M=n[14],v=n[15];if(r[0].setComponents(l-a,u-c,g-m,v-p).normalize(),r[1].setComponents(l+a,u+c,g+m,v+p).normalize(),r[2].setComponents(l+s,u+h,g+f,v+b).normalize(),r[3].setComponents(l-s,u-h,g-f,v-b).normalize(),r[4].setComponents(l-o,u-d,g-_,v-M).normalize(),t===Oi)r[5].setComponents(l+o,u+d,g+_,v+M).normalize();else if(t===Ha)r[5].setComponents(o,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(Ea.x=n.normal.x>0?e.max.x:e.min.x,Ea.y=n.normal.y>0?e.max.y:e.min.y,Ea.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fh(){let i=null,e=!1,t=null,r=null;function n(a,s){t(a,s),r=i.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(n),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function yp(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((m,f)=>m.start-f.start);let u=0;for(let m=1;m<d.length;m++){const f=d[u],_=d[m];_.start<=f.start+f.count+1?f.count=Math.max(f.count,_.start+_.count-f.start):(++u,d[u]=_)}d.length=u+1;for(let m=0,f=d.length;m<f;m++){const _=d[m];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:n,remove:a,update:s}}class ia extends Qt{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const a=e/2,s=t/2,o=Math.floor(r),l=Math.floor(n),c=o+1,h=l+1,d=e/o,u=t/l,m=[],f=[],_=[],g=[];for(let p=0;p<h;p++){const b=p*u-s;for(let M=0;M<c;M++){const v=M*d-a;f.push(v,-b,0),_.push(0,0,1),g.push(M/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const M=b+c*p,v=b+c*(p+1),P=b+1+c*(p+1),T=b+1+c*p;m.push(M,v,T),m.push(v,P,T)}this.setIndex(m),this.setAttribute("position",new Dt(f,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.width,e.height,e.widthSegments,e.heightSegments)}}var Sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mp=`#ifdef USE_ALPHAHASH
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
#endif`,Ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ap=`#ifdef USE_AOMAP
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
#endif`,Rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cp=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ip=`#ifdef USE_IRIDESCENCE
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
#endif`,Np=`#ifdef USE_BUMPMAP
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
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wp=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Xp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qp=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$p="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ef=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tf=`#ifdef USE_ENVMAP
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
#endif`,rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,af=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cf=`#ifdef USE_GRADIENTMAP
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
}`,hf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pf=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,ff=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,mf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,yf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sf=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Ef=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Af=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lf=`#if defined( USE_POINTS_UV )
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
#endif`,Df=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,If=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Of=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ff=`#ifdef USE_MORPHTARGETS
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
#endif`,Bf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wf=`#ifdef USE_NORMALMAP
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
#endif`,Xf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$f=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,sm=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lm=`#ifdef USE_SKINNING
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
#endif`,cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hm=`#ifdef USE_SKINNING
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
#endif`,um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mm=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gm=`#ifdef USE_TRANSMISSION
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mm=`uniform sampler2D t2D;
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
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`#include <common>
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
}`,Rm=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cm=`#define DISTANCE
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
}`,Pm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`uniform float scale;
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
}`,Im=`uniform vec3 diffuse;
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
}`,Nm=`#include <common>
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
}`,Om=`uniform vec3 diffuse;
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
}`,Fm=`#define LAMBERT
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
}`,Bm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,zm=`#define MATCAP
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
}`,Hm=`#define MATCAP
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
}`,km=`#define NORMAL
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
}`,Vm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gm=`#define PHONG
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
}`,Wm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Xm=`#define STANDARD
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
}`,qm=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Ym=`#define TOON
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
}`,jm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Km=`uniform float size;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,$m=`#include <common>
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
}`,Jm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Qm=`uniform float rotation;
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
}`,eg=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:Sp,alphahash_pars_fragment:Mp,alphamap_fragment:Ep,alphamap_pars_fragment:bp,alphatest_fragment:Tp,alphatest_pars_fragment:wp,aomap_fragment:Ap,aomap_pars_fragment:Rp,batching_pars_vertex:Cp,batching_vertex:Pp,begin_vertex:Lp,beginnormal_vertex:Dp,bsdfs:Up,iridescence_fragment:Ip,bumpmap_pars_fragment:Np,clipping_planes_fragment:Op,clipping_planes_pars_fragment:Fp,clipping_planes_pars_vertex:Bp,clipping_planes_vertex:zp,color_fragment:Hp,color_pars_fragment:kp,color_pars_vertex:Vp,color_vertex:Gp,common:Wp,cube_uv_reflection_fragment:Xp,defaultnormal_vertex:qp,displacementmap_pars_vertex:Yp,displacementmap_vertex:jp,emissivemap_fragment:Kp,emissivemap_pars_fragment:Zp,colorspace_fragment:$p,colorspace_pars_fragment:Jp,envmap_fragment:Qp,envmap_common_pars_fragment:ef,envmap_pars_fragment:tf,envmap_pars_vertex:rf,envmap_physical_pars_fragment:ff,envmap_vertex:nf,fog_vertex:af,fog_pars_vertex:sf,fog_fragment:of,fog_pars_fragment:lf,gradientmap_pars_fragment:cf,lightmap_pars_fragment:hf,lights_lambert_fragment:uf,lights_lambert_pars_fragment:df,lights_pars_begin:pf,lights_toon_fragment:mf,lights_toon_pars_fragment:gf,lights_phong_fragment:_f,lights_phong_pars_fragment:vf,lights_physical_fragment:xf,lights_physical_pars_fragment:yf,lights_fragment_begin:Sf,lights_fragment_maps:Mf,lights_fragment_end:Ef,logdepthbuf_fragment:bf,logdepthbuf_pars_fragment:Tf,logdepthbuf_pars_vertex:wf,logdepthbuf_vertex:Af,map_fragment:Rf,map_pars_fragment:Cf,map_particle_fragment:Pf,map_particle_pars_fragment:Lf,metalnessmap_fragment:Df,metalnessmap_pars_fragment:Uf,morphinstance_vertex:If,morphcolor_vertex:Nf,morphnormal_vertex:Of,morphtarget_pars_vertex:Ff,morphtarget_vertex:Bf,normal_fragment_begin:zf,normal_fragment_maps:Hf,normal_pars_fragment:kf,normal_pars_vertex:Vf,normal_vertex:Gf,normalmap_pars_fragment:Wf,clearcoat_normal_fragment_begin:Xf,clearcoat_normal_fragment_maps:qf,clearcoat_pars_fragment:Yf,iridescence_pars_fragment:jf,opaque_fragment:Kf,packing:Zf,premultiplied_alpha_fragment:$f,project_vertex:Jf,dithering_fragment:Qf,dithering_pars_fragment:em,roughnessmap_fragment:tm,roughnessmap_pars_fragment:im,shadowmap_pars_fragment:rm,shadowmap_pars_vertex:nm,shadowmap_vertex:am,shadowmask_pars_fragment:sm,skinbase_vertex:om,skinning_pars_vertex:lm,skinning_vertex:cm,skinnormal_vertex:hm,specularmap_fragment:um,specularmap_pars_fragment:dm,tonemapping_fragment:pm,tonemapping_pars_fragment:fm,transmission_fragment:mm,transmission_pars_fragment:gm,uv_pars_fragment:_m,uv_pars_vertex:vm,uv_vertex:xm,worldpos_vertex:ym,background_vert:Sm,background_frag:Mm,backgroundCube_vert:Em,backgroundCube_frag:bm,cube_vert:Tm,cube_frag:wm,depth_vert:Am,depth_frag:Rm,distanceRGBA_vert:Cm,distanceRGBA_frag:Pm,equirect_vert:Lm,equirect_frag:Dm,linedashed_vert:Um,linedashed_frag:Im,meshbasic_vert:Nm,meshbasic_frag:Om,meshlambert_vert:Fm,meshlambert_frag:Bm,meshmatcap_vert:zm,meshmatcap_frag:Hm,meshnormal_vert:km,meshnormal_frag:Vm,meshphong_vert:Gm,meshphong_frag:Wm,meshphysical_vert:Xm,meshphysical_frag:qm,meshtoon_vert:Ym,meshtoon_frag:jm,points_vert:Km,points_frag:Zm,shadow_vert:$m,shadow_frag:Jm,sprite_vert:Qm,sprite_frag:eg},re={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},vi={basic:{uniforms:Pt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Pt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new He(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Pt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Pt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Pt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new He(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Pt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Pt([re.points,re.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Pt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Pt([re.common,re.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Pt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Pt([re.sprite,re.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Pt([re.common,re.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Pt([re.lights,re.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};vi.physical={uniforms:Pt([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const ba={r:0,b:0,g:0},gr=new Ei,tg=new nt;function ig(i,e,t,r,n,a,s){const o=new He(0);let l=a===!0?0:1,c,h,d=null,u=0,m=null;function f(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function _(b){let M=!1;const v=f(b);v===null?p(o,l):v&&v.isColor&&(p(v,1),M=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(i.autoClear||M)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,M){const v=f(M);v&&(v.isCubeTexture||v.mapping===Za)?(h===void 0&&(h=new st(new Yt(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:pn(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),gr.copy(M.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tg.makeRotationFromEuler(gr)),h.material.toneMapped=Ge.getTransfer(v.colorSpace)!==Ye,(d!==v||u!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,m=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new st(new ia(2,2),new zi({name:"BackgroundMaterial",uniforms:pn(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(v.colorSpace)!==Ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,M){b.getRGB(ba,Ih(i)),r.buffers.color.setClear(ba.r,ba.g,ba.b,M,s)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:_,addToRenderList:g}}function rg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},n=u(null);let a=n,s=!1;function o(x,C,B,F,O){let X=!1;const V=d(F,B,C);a!==V&&(a=V,c(a.object)),X=m(x,F,B,O),X&&f(x,F,B,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(X||s)&&(s=!1,v(x,C,B,F),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function d(x,C,B){const F=B.wireframe===!0;let O=r[x.id];O===void 0&&(O={},r[x.id]=O);let X=O[C.id];X===void 0&&(X={},O[C.id]=X);let V=X[F];return V===void 0&&(V=u(l()),X[F]=V),V}function u(x){const C=[],B=[],F=[];for(let O=0;O<t;O++)C[O]=0,B[O]=0,F[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:B,attributeDivisors:F,object:x,attributes:{},index:null}}function m(x,C,B,F){const O=a.attributes,X=C.attributes;let V=0;const j=B.getAttributes();for(const G in j)if(j[G].location>=0){const Q=O[G];let oe=X[G];if(oe===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(oe=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(oe=x.instanceColor)),Q===void 0||Q.attribute!==oe||oe&&Q.data!==oe.data)return!0;V++}return a.attributesNum!==V||a.index!==F}function f(x,C,B,F){const O={},X=C.attributes;let V=0;const j=B.getAttributes();for(const G in j)if(j[G].location>=0){let Q=X[G];Q===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor));const oe={};oe.attribute=Q,Q&&Q.data&&(oe.data=Q.data),O[G]=oe,V++}a.attributes=O,a.attributesNum=V,a.index=F}function _(){const x=a.newAttributes;for(let C=0,B=x.length;C<B;C++)x[C]=0}function g(x){p(x,0)}function p(x,C){const B=a.newAttributes,F=a.enabledAttributes,O=a.attributeDivisors;B[x]=1,F[x]===0&&(i.enableVertexAttribArray(x),F[x]=1),O[x]!==C&&(i.vertexAttribDivisor(x,C),O[x]=C)}function b(){const x=a.newAttributes,C=a.enabledAttributes;for(let B=0,F=C.length;B<F;B++)C[B]!==x[B]&&(i.disableVertexAttribArray(B),C[B]=0)}function M(x,C,B,F,O,X,V){V===!0?i.vertexAttribIPointer(x,C,B,O,X):i.vertexAttribPointer(x,C,B,F,O,X)}function v(x,C,B,F){_();const O=F.attributes,X=B.getAttributes(),V=C.defaultAttributeValues;for(const j in X){const G=X[j];if(G.location>=0){let Q=O[j];if(Q===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor)),Q!==void 0){const oe=Q.normalized,xe=Q.itemSize,Te=e.get(Q);if(Te===void 0)continue;const Ie=Te.buffer,q=Te.type,$=Te.bytesPerElement,pe=q===i.INT||q===i.UNSIGNED_INT||Q.gpuType===Zo;if(Q.isInterleavedBufferAttribute){const ne=Q.data,ye=ne.stride,we=Q.offset;if(ne.isInstancedInterleavedBuffer){for(let Le=0;Le<G.locationSize;Le++)p(G.location+Le,ne.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Le=0;Le<G.locationSize;Le++)g(G.location+Le);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let Le=0;Le<G.locationSize;Le++)M(G.location+Le,xe/G.locationSize,q,oe,ye*$,(we+xe/G.locationSize*Le)*$,pe)}else{if(Q.isInstancedBufferAttribute){for(let ne=0;ne<G.locationSize;ne++)p(G.location+ne,Q.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ne=0;ne<G.locationSize;ne++)g(G.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let ne=0;ne<G.locationSize;ne++)M(G.location+ne,xe/G.locationSize,q,oe,xe*$,xe/G.locationSize*ne*$,pe)}}else if(V!==void 0){const oe=V[j];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(G.location,oe);break;case 3:i.vertexAttrib3fv(G.location,oe);break;case 4:i.vertexAttrib4fv(G.location,oe);break;default:i.vertexAttrib1fv(G.location,oe)}}}}b()}function P(){R();for(const x in r){const C=r[x];for(const B in C){const F=C[B];for(const O in F)h(F[O].object),delete F[O];delete C[B]}delete r[x]}}function T(x){if(r[x.id]===void 0)return;const C=r[x.id];for(const B in C){const F=C[B];for(const O in F)h(F[O].object),delete F[O];delete C[B]}delete r[x.id]}function w(x){for(const C in r){const B=r[C];if(B[x.id]===void 0)continue;const F=B[x.id];for(const O in F)h(F[O].object),delete F[O];delete B[x.id]}}function R(){y(),s=!0,a!==n&&(a=n,c(a.object))}function y(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:R,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:b}}function ng(i,e,t){let r;function n(c){r=c}function a(c,h){i.drawArrays(r,c,h),t.update(h,r,1)}function s(c,h,d){d!==0&&(i.drawArraysInstanced(r,c,h,d),t.update(h,r,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,h,0,d);let u=0;for(let m=0;m<d;m++)u+=h[m];t.update(u,r,1)}function l(c,h,d,u){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<c.length;f++)s(c[f],h[f],u[f]);else{m.multiDrawArraysInstancedWEBGL(r,c,0,h,0,u,0,d);let f=0;for(let _=0;_<d;_++)f+=h[_]*u[_];t.update(f,r,1)}}this.setMode=n,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ag(i,e,t,r){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){return!(w!==fi&&r.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const R=w===Jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Bi&&r.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ni&&!R)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=f>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:P,maxSamples:T}}function sg(i){const e=this;let t=null,r=0,n=!1,a=!1;const s=new yr,o=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||r!==0||n;return n=u,r=d.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,m){const f=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!n||f===null||f.length===0||a&&!g)a?h(null):c();else{const b=a?0:r,M=b*4;let v=p.clippingState||null;l.value=v,v=h(f,u,M,m);for(let P=0;P!==M;++P)v[P]=t[P];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function h(d,u,m,f){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,f!==!0||g===null){const p=m+_*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,v=m;M!==_;++M,v+=4)s.copy(d[M]).applyMatrix4(b,o),s.normal.toArray(g,v),g[v+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function og(i){let e=new WeakMap;function t(s,o){return o===to?s.mapping=cn:o===io&&(s.mapping=hn),s}function r(s){if(s&&s.isTexture){const o=s.mapping;if(o===to||o===io)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new _p(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",n),t(c.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}class Bh extends Nh{constructor(e=-1,t=1,r=1,n=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=r-e,s=r+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Jr=4,cc=[.125,.215,.35,.446,.526,.582],br=20,As=new Bh,hc=new He;let Rs=null,Cs=0,Ps=0,Ls=!1;const Sr=(1+Math.sqrt(5))/2,Kr=1/Sr,uc=[new N(-Sr,Kr,0),new N(Sr,Kr,0),new N(-Kr,0,Sr),new N(Kr,0,Sr),new N(0,Sr,-Kr),new N(0,Sr,Kr),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class dc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){Rs=this._renderer.getRenderTarget(),Cs=this._renderer.getActiveCubeFace(),Ps=this._renderer.getActiveMipmapLevel(),Ls=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,n,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rs,Cs,Ps),this._renderer.xr.enabled=Ls,e.scissorTest=!1,Ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cn||e.mapping===hn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rs=this._renderer.getRenderTarget(),Cs=this._renderer.getActiveCubeFace(),Ps=this._renderer.getActiveMipmapLevel(),Ls=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Jn,format:fi,colorSpace:xn,depthBuffer:!1},n=pc(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pc(e,t,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lg(a)),this._blurMaterial=cg(a,e,t)}return n}_compileMaterial(e){const t=new st(this._lodPlanes[0],e);this._renderer.compile(t,As)}_sceneToCubeUV(e,t,r,n){const a=new Ot(90,1,t,r),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(hc),l.toneMapping=tr,l.autoClear=!1;const d=new Lh({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),u=new st(new Yt,d);let m=!1;const f=e.background;f?f.isColor&&(d.color.copy(f),e.background=null,m=!0):(d.color.copy(hc),m=!0);for(let _=0;_<6;_++){const g=_%3;g===0?(a.up.set(0,s[_],0),a.lookAt(o[_],0,0)):g===1?(a.up.set(0,0,s[_]),a.lookAt(0,o[_],0)):(a.up.set(0,s[_],0),a.lookAt(0,0,o[_]));const p=this._cubeSize;Ta(n,g*p,_>2?p:0,p,p),l.setRenderTarget(n),m&&l.render(u,a),l.render(e,a)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===cn||e.mapping===hn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fc());const a=n?this._cubemapMaterial:this._equirectMaterial,s=new st(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Ta(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(s,As)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let a=1;a<n;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=uc[(n-a-1)%uc.length];this._blur(e,a-1,a,s,o)}t.autoClear=r}_blur(e,t,r,n,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,n,"latitudinal",a),this._halfBlur(s,e,r,r,n,"longitudinal",a)}_halfBlur(e,t,r,n,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new st(this._lodPlanes[n],c),u=c.uniforms,m=this._sizeLods[r]-1,f=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*br-1),_=a/f,g=isFinite(a)?1+Math.floor(h*_):br;g>br&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${br}`);const p=[];let b=0;for(let w=0;w<br;++w){const R=w/_,y=Math.exp(-R*R/2);p.push(y),w===0?b+=y:w<g&&(b+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/b;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=f,u.mipInt.value=M-r;const v=this._sizeLods[n],P=3*v*(n>M-Jr?n-M+Jr:0),T=4*(this._cubeSize-v);Ta(t,P,T,3*v,2*v),l.setRenderTarget(t),l.render(d,As)}}function lg(i){const e=[],t=[],r=[];let n=i;const a=i-Jr+1+cc.length;for(let s=0;s<a;s++){const o=Math.pow(2,n);t.push(o);let l=1/o;s>i-Jr?l=cc[s-i+Jr-1]:s===0&&(l=0),r.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,f=6,_=3,g=2,p=1,b=new Float32Array(_*f*m),M=new Float32Array(g*f*m),v=new Float32Array(p*f*m);for(let T=0;T<m;T++){const w=T%3*2/3-1,R=T>2?0:-1,y=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];b.set(y,_*f*T),M.set(u,g*f*T);const x=[T,T,T,T,T,T];v.set(x,p*f*T)}const P=new Qt;P.setAttribute("position",new Mi(b,_)),P.setAttribute("uv",new Mi(M,g)),P.setAttribute("faceIndex",new Mi(v,p)),e.push(P),n>Jr&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function pc(i,e,t){const r=new Ur(i,e,t);return r.texture.mapping=Za,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ta(i,e,t,r,n){i.viewport.set(e,t,r,n),i.scissor.set(e,t,r,n)}function cg(i,e,t){const r=new Float32Array(br),n=new N(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:rl(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function fc(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rl(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function mc(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function rl(){return`

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
	`}function hg(i){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const l=o.mapping,c=l===to||l===io,h=l===cn||l===hn;if(c||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new dc(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&n(m)?(t===null&&(t=new dc(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function ug(i){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=i.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const n=t(r);return n===null&&In("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function dg(i,e,t,r){const n={},a=new WeakMap;function s(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const f in u.attributes)e.remove(u.attributes[f]);for(const f in u.morphAttributes){const _=u.morphAttributes[f];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}u.removeEventListener("dispose",s),delete n[u.id];const m=a.get(u);m&&(e.remove(m),a.delete(u)),r.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",s),n[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)e.update(u[f],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const f in m){const _=m[f];for(let g=0,p=_.length;g<p;g++)e.update(_[g],i.ARRAY_BUFFER)}}function c(d){const u=[],m=d.index,f=d.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let M=0,v=b.length;M<v;M+=3){const P=b[M+0],T=b[M+1],w=b[M+2];u.push(P,T,T,w,w,P)}}else if(f!==void 0){const b=f.array;_=f.version;for(let M=0,v=b.length/3-1;M<v;M+=3){const P=M+0,T=M+1,w=M+2;u.push(P,T,T,w,w,P)}}else return;const g=new(Th(u)?Uh:Dh)(u,1);g.version=_;const p=a.get(d);p&&e.remove(p),a.set(d,g)}function h(d){const u=a.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function pg(i,e,t){let r;function n(u){r=u}let a,s;function o(u){a=u.type,s=u.bytesPerElement}function l(u,m){i.drawElements(r,m,a,u*s),t.update(m,r,1)}function c(u,m,f){f!==0&&(i.drawElementsInstanced(r,m,a,u*s,f),t.update(m,r,f))}function h(u,m,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,m,0,a,u,0,f);let _=0;for(let g=0;g<f;g++)_+=m[g];t.update(_,r,1)}function d(u,m,f,_){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)c(u[p]/s,m[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(r,m,0,a,u,0,_,0,f);let p=0;for(let b=0;b<f;b++)p+=m[b]*_[b];t.update(p,r,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function fg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function mg(i,e,t){const r=new WeakMap,n=new je;function a(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=r.get(o);if(u===void 0||u.count!==d){let m=function(){R.dispose(),r.delete(o),o.removeEventListener("dispose",m)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let v=0;f===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let P=o.attributes.position.count*v,T=1;P>e.maxTextureSize&&(T=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const w=new Float32Array(P*T*4*d),R=new Ah(w,P,T,d);R.type=Ni,R.needsUpdate=!0;const y=v*4;for(let x=0;x<d;x++){const C=p[x],B=b[x],F=M[x],O=P*T*4*x;for(let X=0;X<C.count;X++){const V=X*y;f===!0&&(n.fromBufferAttribute(C,X),w[O+V+0]=n.x,w[O+V+1]=n.y,w[O+V+2]=n.z,w[O+V+3]=0),_===!0&&(n.fromBufferAttribute(B,X),w[O+V+4]=n.x,w[O+V+5]=n.y,w[O+V+6]=n.z,w[O+V+7]=0),g===!0&&(n.fromBufferAttribute(F,X),w[O+V+8]=n.x,w[O+V+9]=n.y,w[O+V+10]=n.z,w[O+V+11]=F.itemSize===4?n.w:1)}}u={count:d,texture:R,size:new We(P,T)},r.set(o,u),o.addEventListener("dispose",m)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];const f=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",f),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:a}}function gg(i,e,t,r){let n=new WeakMap;function a(l){const c=r.render.frame,h=l.geometry,d=e.get(l,h);if(n.get(d)!==c&&(e.update(d),n.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return d}function s(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}class zh extends Lt{constructor(e,t,r,n,a,s,o,l,c,h=rn){if(h!==rn&&h!==dn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&h===rn&&(r=Dr),r===void 0&&h===dn&&(r=un),super(null,n,a,s,o,l,h,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:mi,this.minFilter=l!==void 0?l:mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Hh=new Lt,gc=new zh(1,1),kh=new Ah,Vh=new tp,Gh=new Oh,_c=[],vc=[],xc=new Float32Array(16),yc=new Float32Array(9),Sc=new Float32Array(4);function Mn(i,e,t){const r=i[0];if(r<=0||r>0)return i;const n=e*t;let a=_c[n];if(a===void 0&&(a=new Float32Array(n),_c[n]=a),e!==0){r.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Qa(i,e){let t=vc[e];t===void 0&&(t=new Int32Array(e),vc[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function _g(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function Sg(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,r))return;Sc.set(r),i.uniformMatrix2fv(this.addr,!1,Sc),vt(t,r)}}function Mg(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,r))return;yc.set(r),i.uniformMatrix3fv(this.addr,!1,yc),vt(t,r)}}function Eg(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,r))return;xc.set(r),i.uniformMatrix4fv(this.addr,!1,xc),vt(t,r)}}function bg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}function wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}function Ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}function Rg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}function Pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}function Lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}function Dg(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n);let a;this.type===i.SAMPLER_2D_SHADOW?(gc.compareFunction=bh,a=gc):a=Hh,t.setTexture2D(e||a,n)}function Ug(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||Vh,n)}function Ig(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||Gh,n)}function Ng(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||kh,n)}function Og(i){switch(i){case 5126:return _g;case 35664:return vg;case 35665:return xg;case 35666:return yg;case 35674:return Sg;case 35675:return Mg;case 35676:return Eg;case 5124:case 35670:return bg;case 35667:case 35671:return Tg;case 35668:case 35672:return wg;case 35669:case 35673:return Ag;case 5125:return Rg;case 36294:return Cg;case 36295:return Pg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Ng}}function Fg(i,e){i.uniform1fv(this.addr,e)}function Bg(i,e){const t=Mn(e,this.size,2);i.uniform2fv(this.addr,t)}function zg(i,e){const t=Mn(e,this.size,3);i.uniform3fv(this.addr,t)}function Hg(i,e){const t=Mn(e,this.size,4);i.uniform4fv(this.addr,t)}function kg(i,e){const t=Mn(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vg(i,e){const t=Mn(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gg(i,e){const t=Mn(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Wg(i,e){i.uniform1iv(this.addr,e)}function Xg(i,e){i.uniform2iv(this.addr,e)}function qg(i,e){i.uniform3iv(this.addr,e)}function Yg(i,e){i.uniform4iv(this.addr,e)}function jg(i,e){i.uniform1uiv(this.addr,e)}function Kg(i,e){i.uniform2uiv(this.addr,e)}function Zg(i,e){i.uniform3uiv(this.addr,e)}function $g(i,e){i.uniform4uiv(this.addr,e)}function Jg(i,e,t){const r=this.cache,n=e.length,a=Qa(t,n);_t(r,a)||(i.uniform1iv(this.addr,a),vt(r,a));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Hh,a[s])}function Qg(i,e,t){const r=this.cache,n=e.length,a=Qa(t,n);_t(r,a)||(i.uniform1iv(this.addr,a),vt(r,a));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Vh,a[s])}function e_(i,e,t){const r=this.cache,n=e.length,a=Qa(t,n);_t(r,a)||(i.uniform1iv(this.addr,a),vt(r,a));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Gh,a[s])}function t_(i,e,t){const r=this.cache,n=e.length,a=Qa(t,n);_t(r,a)||(i.uniform1iv(this.addr,a),vt(r,a));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||kh,a[s])}function i_(i){switch(i){case 5126:return Fg;case 35664:return Bg;case 35665:return zg;case 35666:return Hg;case 35674:return kg;case 35675:return Vg;case 35676:return Gg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return qg;case 35669:case 35673:return Yg;case 5125:return jg;case 36294:return Kg;case 36295:return Zg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return t_}}class r_{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Og(t.type)}}class n_{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=i_(t.type)}}class a_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let a=0,s=n.length;a!==s;++a){const o=n[a];o.setValue(e,t[o.id],r)}}}const Ds=/(\w+)(\])?(\[|\.)?/g;function Mc(i,e){i.seq.push(e),i.map[e.id]=e}function s_(i,e,t){const r=i.name,n=r.length;for(Ds.lastIndex=0;;){const a=Ds.exec(r),s=Ds.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===n){Mc(t,c===void 0?new r_(o,i,e):new n_(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new a_(o),Mc(t,h)),t=h}}}class Na{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const a=e.getActiveUniform(t,n),s=e.getUniformLocation(t,a.name);s_(a,s,this)}}setValue(e,t,r,n){const a=this.map[t];a!==void 0&&a.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,a=e.length;n!==a;++n){const s=e[n];s.id in t&&r.push(s)}return r}}function Ec(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const o_=37297;let l_=0;function c_(i,e){const t=i.split(`
`),r=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=n;s<a;s++){const o=s+1;r.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return r.join(`
`)}const bc=new Pe;function h_(i){Ge._getMatrix(bc,Ge.workingColorSpace,i);const e=`mat3( ${bc.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(i)){case $a:return[e,"LinearTransferOETF"];case Ye:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Tc(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),n=i.getShaderInfoLog(e).trim();if(r&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+c_(i.getShaderSource(e),s)}else return n}function u_(i,e){const t=h_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function d_(i,e){let t;switch(e){case Rd:t="Linear";break;case Cd:t="Reinhard";break;case Pd:t="Cineon";break;case Ld:t="ACESFilmic";break;case Ud:t="AgX";break;case Id:t="Neutral";break;case Dd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wa=new N;function p_(){Ge.getLuminanceCoefficients(wa);const i=wa.x.toFixed(4),e=wa.y.toFixed(4),t=wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nn).join(`
`)}function m_(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function g_(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const a=i.getActiveAttrib(e,n),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Nn(i){return i!==""}function wc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ac(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const __=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uo(i){return i.replace(__,x_)}const v_=new Map;function x_(i,e){let t=Ue[e];if(t===void 0){const r=v_.get(e);if(r!==void 0)t=Ue[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Uo(t)}const y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(i){return i.replace(y_,S_)}function S_(i,e,t,r){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Cc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function M_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===od?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function E_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case cn:case hn:e="ENVMAP_TYPE_CUBE";break;case Za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hn:e="ENVMAP_MODE_REFRACTION";break}return e}function T_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case uh:e="ENVMAP_BLENDING_MULTIPLY";break;case wd:e="ENVMAP_BLENDING_MIX";break;case Ad:e="ENVMAP_BLENDING_ADD";break}return e}function w_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function A_(i,e,t,r){const n=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=M_(t),c=E_(t),h=b_(t),d=T_(t),u=w_(t),m=f_(t),f=m_(a),_=n.createProgram();let g,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Nn).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Nn).join(`
`),p.length>0&&(p+=`
`)):(g=[Cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nn).join(`
`),p=[Cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tr?"#define TONE_MAPPING":"",t.toneMapping!==tr?Ue.tonemapping_pars_fragment:"",t.toneMapping!==tr?d_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,u_("linearToOutputTexel",t.outputColorSpace),p_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nn).join(`
`)),s=Uo(s),s=wc(s,t),s=Ac(s,t),o=Uo(o),o=wc(o,t),o=Ac(o,t),s=Rc(s),o=Rc(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=b+g+s,v=b+p+o,P=Ec(n,n.VERTEX_SHADER,M),T=Ec(n,n.FRAGMENT_SHADER,v);n.attachShader(_,P),n.attachShader(_,T),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function w(C){if(i.debug.checkShaderErrors){const B=n.getProgramInfoLog(_).trim(),F=n.getShaderInfoLog(P).trim(),O=n.getShaderInfoLog(T).trim();let X=!0,V=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(n,_,P,T);else{const j=Tc(n,P,"vertex"),G=Tc(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+j+`
`+G)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||O==="")&&(V=!1);V&&(C.diagnostics={runnable:X,programLog:B,vertexShader:{log:F,prefix:g},fragmentShader:{log:O,prefix:p}})}n.deleteShader(P),n.deleteShader(T),R=new Na(n,_),y=g_(n,_)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=n.getProgramParameter(_,o_)),x},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=l_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=T,this}let R_=0;class C_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new P_(e),t.set(e,r)),r}}class P_{constructor(e){this.id=R_++,this.code=e,this.usedTimes=0}}function L_(i,e,t,r,n,a,s){const o=new Ch,l=new C_,c=new Set,h=[],d=n.logarithmicDepthBuffer,u=n.vertexTextures;let m=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,x,C,B,F){const O=B.fog,X=F.geometry,V=y.isMeshStandardMaterial?B.environment:null,j=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),G=j&&j.mapping===Za?j.image.height:null,Q=f[y.type];y.precision!==null&&(m=n.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const oe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,xe=oe!==void 0?oe.length:0;let Te=0;X.morphAttributes.position!==void 0&&(Te=1),X.morphAttributes.normal!==void 0&&(Te=2),X.morphAttributes.color!==void 0&&(Te=3);let Ie,q,$,pe;if(Q){const qe=vi[Q];Ie=qe.vertexShader,q=qe.fragmentShader}else Ie=y.vertexShader,q=y.fragmentShader,l.update(y),$=l.getVertexShaderID(y),pe=l.getFragmentShaderID(y);const ne=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),we=F.isInstancedMesh===!0,Le=F.isBatchedMesh===!0,at=!!y.map,ke=!!y.matcap,dt=!!j,I=!!y.aoMap,ii=!!y.lightMap,Oe=!!y.bumpMap,Fe=!!y.normalMap,Ee=!!y.displacementMap,Je=!!y.emissiveMap,Se=!!y.metalnessMap,A=!!y.roughnessMap,S=y.anisotropy>0,z=y.clearcoat>0,K=y.dispersion>0,J=y.iridescence>0,Y=y.sheen>0,ge=y.transmission>0,se=S&&!!y.anisotropyMap,de=z&&!!y.clearcoatMap,Ve=z&&!!y.clearcoatNormalMap,te=z&&!!y.clearcoatRoughnessMap,he=J&&!!y.iridescenceMap,be=J&&!!y.iridescenceThicknessMap,Ae=Y&&!!y.sheenColorMap,ue=Y&&!!y.sheenRoughnessMap,Be=!!y.specularMap,De=!!y.specularColorMap,$e=!!y.specularIntensityMap,D=ge&&!!y.transmissionMap,ae=ge&&!!y.thicknessMap,W=!!y.gradientMap,Z=!!y.alphaMap,le=y.alphaTest>0,ie=!!y.alphaHash,ze=!!y.extensions;let ht=tr;y.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ht=i.toneMapping);const bt={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:Ie,fragmentShader:q,defines:y.defines,customVertexShaderID:$,customFragmentShaderID:pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Le,batchingColor:Le&&F._colorsTexture!==null,instancing:we,instancingColor:we&&F.instanceColor!==null,instancingMorph:we&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:xn,alphaToCoverage:!!y.alphaToCoverage,map:at,matcap:ke,envMap:dt,envMapMode:dt&&j.mapping,envMapCubeUVHeight:G,aoMap:I,lightMap:ii,bumpMap:Oe,normalMap:Fe,displacementMap:u&&Ee,emissiveMap:Je,normalMapObjectSpace:Fe&&y.normalMapType===Bd,normalMapTangentSpace:Fe&&y.normalMapType===Eh,metalnessMap:Se,roughnessMap:A,anisotropy:S,anisotropyMap:se,clearcoat:z,clearcoatMap:de,clearcoatNormalMap:Ve,clearcoatRoughnessMap:te,dispersion:K,iridescence:J,iridescenceMap:he,iridescenceThicknessMap:be,sheen:Y,sheenColorMap:Ae,sheenRoughnessMap:ue,specularMap:Be,specularColorMap:De,specularIntensityMap:$e,transmission:ge,transmissionMap:D,thicknessMap:ae,gradientMap:W,opaque:y.transparent===!1&&y.blending===tn&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:le,alphaHash:ie,combine:y.combine,mapUv:at&&_(y.map.channel),aoMapUv:I&&_(y.aoMap.channel),lightMapUv:ii&&_(y.lightMap.channel),bumpMapUv:Oe&&_(y.bumpMap.channel),normalMapUv:Fe&&_(y.normalMap.channel),displacementMapUv:Ee&&_(y.displacementMap.channel),emissiveMapUv:Je&&_(y.emissiveMap.channel),metalnessMapUv:Se&&_(y.metalnessMap.channel),roughnessMapUv:A&&_(y.roughnessMap.channel),anisotropyMapUv:se&&_(y.anisotropyMap.channel),clearcoatMapUv:de&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:be&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:ue&&_(y.sheenRoughnessMap.channel),specularMapUv:Be&&_(y.specularMap.channel),specularColorMapUv:De&&_(y.specularColorMap.channel),specularIntensityMapUv:$e&&_(y.specularIntensityMap.channel),transmissionMapUv:D&&_(y.transmissionMap.channel),thicknessMapUv:ae&&_(y.thicknessMap.channel),alphaMapUv:Z&&_(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Fe||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(at||Z),fog:!!O,useFog:y.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ye,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Te,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ht,decodeVideoTexture:at&&y.map.isVideoTexture===!0&&Ge.getTransfer(y.map.colorSpace)===Ye,decodeVideoTextureEmissive:Je&&y.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(y.emissiveMap.colorSpace)===Ye,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ii,flipSided:y.side===Bt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ze&&y.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&y.extensions.multiDraw===!0||Le)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function p(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)x.push(C),x.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(b(x,y),M(x,y),x.push(i.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function b(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function M(y,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){const x=f[y.type];let C;if(x){const B=vi[x];C=pp.clone(B.uniforms)}else C=y.uniforms;return C}function P(y,x){let C;for(let B=0,F=h.length;B<F;B++){const O=h[B];if(O.cacheKey===x){C=O,++C.usedTimes;break}}return C===void 0&&(C=new A_(i,x,y,a),h.push(C)),C}function T(y){if(--y.usedTimes===0){const x=h.indexOf(y);h[x]=h[h.length-1],h.pop(),y.destroy()}}function w(y){l.remove(y)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:T,releaseShaderCache:w,programs:h,dispose:R}}function D_(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function r(s){i.delete(s)}function n(s,o,l){i.get(s)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:r,update:n,dispose:a}}function U_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Pc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Lc(){const i=[];let e=0;const t=[],r=[],n=[];function a(){e=0,t.length=0,r.length=0,n.length=0}function s(d,u,m,f,_,g){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:m,groupOrder:f,renderOrder:d.renderOrder,z:_,group:g},i[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=m,p.groupOrder=f,p.renderOrder=d.renderOrder,p.z=_,p.group=g),e++,p}function o(d,u,m,f,_,g){const p=s(d,u,m,f,_,g);m.transmission>0?r.push(p):m.transparent===!0?n.push(p):t.push(p)}function l(d,u,m,f,_,g){const p=s(d,u,m,f,_,g);m.transmission>0?r.unshift(p):m.transparent===!0?n.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||U_),r.length>1&&r.sort(u||Pc),n.length>1&&n.sort(u||Pc)}function h(){for(let d=e,u=i.length;d<u;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:r,transparent:n,init:a,push:o,unshift:l,finish:h,sort:c}}function I_(){let i=new WeakMap;function e(r,n){const a=i.get(r);let s;return a===void 0?(s=new Lc,i.set(r,[s])):n>=a.length?(s=new Lc,a.push(s)):s=a[n],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function N_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new He};break;case"SpotLight":t={position:new N,direction:new N,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function O_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let F_=0;function B_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function z_(i){const e=new N_,t=O_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new N);const n=new N,a=new nt,s=new nt;function o(c){let h=0,d=0,u=0;for(let y=0;y<9;y++)r.probe[y].set(0,0,0);let m=0,f=0,_=0,g=0,p=0,b=0,M=0,v=0,P=0,T=0,w=0;c.sort(B_);for(let y=0,x=c.length;y<x;y++){const C=c[y],B=C.color,F=C.intensity,O=C.distance,X=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=B.r*F,d+=B.g*F,u+=B.b*F;else if(C.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(C.sh.coefficients[V],F);w++}else if(C.isDirectionalLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const j=C.shadow,G=t.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,r.directionalShadow[m]=G,r.directionalShadowMap[m]=X,r.directionalShadowMatrix[m]=C.shadow.matrix,b++}r.directional[m]=V,m++}else if(C.isSpotLight){const V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(B).multiplyScalar(F),V.distance=O,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,r.spot[_]=V;const j=C.shadow;if(C.map&&(r.spotLightMap[P]=C.map,P++,j.updateMatrices(C),C.castShadow&&T++),r.spotLightMatrix[_]=j.matrix,C.castShadow){const G=t.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,r.spotShadow[_]=G,r.spotShadowMap[_]=X,v++}_++}else if(C.isRectAreaLight){const V=e.get(C);V.color.copy(B).multiplyScalar(F),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),r.rectArea[g]=V,g++}else if(C.isPointLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const j=C.shadow,G=t.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,r.pointShadow[f]=G,r.pointShadowMap[f]=X,r.pointShadowMatrix[f]=C.shadow.matrix,M++}r.point[f]=V,f++}else if(C.isHemisphereLight){const V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(F),V.groundColor.copy(C.groundColor).multiplyScalar(F),r.hemi[p]=V,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2)),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=u;const R=r.hash;(R.directionalLength!==m||R.pointLength!==f||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==b||R.numPointShadows!==M||R.numSpotShadows!==v||R.numSpotMaps!==P||R.numLightProbes!==w)&&(r.directional.length=m,r.spot.length=_,r.rectArea.length=g,r.point.length=f,r.hemi.length=p,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=v,r.spotShadowMap.length=v,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=v+P-T,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=T,r.numLightProbes=w,R.directionalLength=m,R.pointLength=f,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=b,R.numPointShadows=M,R.numSpotShadows=v,R.numSpotMaps=P,R.numLightProbes=w,r.version=F_++)}function l(c,h){let d=0,u=0,m=0,f=0,_=0;const g=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const M=c[p];if(M.isDirectionalLight){const v=r.directional[d];v.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(g),d++}else if(M.isSpotLight){const v=r.spot[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(g),m++}else if(M.isRectAreaLight){const v=r.rectArea[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),s.identity(),a.copy(M.matrixWorld),a.premultiply(g),s.extractRotation(a),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),f++}else if(M.isPointLight){const v=r.point[u];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),u++}else if(M.isHemisphereLight){const v=r.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:r}}function Dc(i){const e=new z_(i),t=[],r=[];function n(h){c.camera=h,t.length=0,r.length=0}function a(h){t.push(h)}function s(h){r.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function H_(i){let e=new WeakMap;function t(n,a=0){const s=e.get(n);let o;return s===void 0?(o=new Dc(i),e.set(n,[o])):a>=s.length?(o=new Dc(i),s.push(o)):o=s[a],o}function r(){e=new WeakMap}return{get:t,dispose:r}}class k_ extends Sn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class V_ extends Sn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const G_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function X_(i,e,t){let r=new il;const n=new We,a=new We,s=new je,o=new k_({depthPacking:Fd}),l=new V_,c={},h=t.maxTextureSize,d={[nr]:Bt,[Bt]:nr,[Ii]:Ii},u=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:G_,fragmentShader:W_}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const f=new Qt;f.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new st(f,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hh;let p=this.type;this.render=function(T,w,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const y=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),B=i.state;B.setBlending(er),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=p!==Li&&this.type===Li,O=p===Li&&this.type!==Li;for(let X=0,V=T.length;X<V;X++){const j=T[X],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);const Q=G.getFrameExtents();if(n.multiply(Q),a.copy(G.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/Q.x),n.x=a.x*Q.x,G.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/Q.y),n.y=a.y*Q.y,G.mapSize.y=a.y)),G.map===null||F===!0||O===!0){const xe=this.type!==Li?{minFilter:mi,magFilter:mi}:{};G.map!==null&&G.map.dispose(),G.map=new Ur(n.x,n.y,xe),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const oe=G.getViewportCount();for(let xe=0;xe<oe;xe++){const Te=G.getViewport(xe);s.set(a.x*Te.x,a.y*Te.y,a.x*Te.z,a.y*Te.w),B.viewport(s),G.updateMatrices(j,xe),r=G.getFrustum(),v(w,R,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===Li&&b(G,R),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(y,x,C)};function b(T,w){const R=e.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ur(n.x,n.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,R,u,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,R,m,_,null)}function M(T,w,R,y){let x=null;const C=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)x=C;else if(x=R.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const B=x.uuid,F=w.uuid;let O=c[B];O===void 0&&(O={},c[B]=O);let X=O[F];X===void 0&&(X=x.clone(),O[F]=X,w.addEventListener("dispose",P)),x=X}if(x.visible=w.visible,x.wireframe=w.wireframe,y===Li?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:d[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=i.properties.get(x);B.light=R}return x}function v(T,w,R,y,x){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Li)&&(!T.frustumCulled||r.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const B=e.update(T),F=T.material;if(Array.isArray(F)){const O=B.groups;for(let X=0,V=O.length;X<V;X++){const j=O[X],G=F[j.materialIndex];if(G&&G.visible){const Q=M(T,G,y,x);T.onBeforeShadow(i,T,w,R,B,Q,j),i.renderBufferDirect(R,null,B,Q,T,j),T.onAfterShadow(i,T,w,R,B,Q,j)}}}else if(F.visible){const O=M(T,F,y,x);T.onBeforeShadow(i,T,w,R,B,O,null),i.renderBufferDirect(R,null,B,O,T,null),T.onAfterShadow(i,T,w,R,B,O,null)}}const C=T.children;for(let B=0,F=C.length;B<F;B++)v(C[B],w,R,y,x)}function P(T){T.target.removeEventListener("dispose",P);for(const w in c){const R=c[w],y=T.target.uuid;y in R&&(R[y].dispose(),delete R[y])}}}const q_={[js]:Ks,[Zs]:Qs,[$s]:eo,[ln]:Js,[Ks]:js,[Qs]:Zs,[eo]:$s,[Js]:ln};function Y_(i,e){function t(){let D=!1;const ae=new je;let W=null;const Z=new je(0,0,0,0);return{setMask:function(le){W!==le&&!D&&(i.colorMask(le,le,le,le),W=le)},setLocked:function(le){D=le},setClear:function(le,ie,ze,ht,bt){bt===!0&&(le*=ht,ie*=ht,ze*=ht),ae.set(le,ie,ze,ht),Z.equals(ae)===!1&&(i.clearColor(le,ie,ze,ht),Z.copy(ae))},reset:function(){D=!1,W=null,Z.set(-1,0,0,0)}}}function r(){let D=!1,ae=!1,W=null,Z=null,le=null;return{setReversed:function(ie){if(ae!==ie){const ze=e.get("EXT_clip_control");ae?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);const ht=le;le=null,this.setClear(ht)}ae=ie},getReversed:function(){return ae},setTest:function(ie){ie?ne(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(ie){W!==ie&&!D&&(i.depthMask(ie),W=ie)},setFunc:function(ie){if(ae&&(ie=q_[ie]),Z!==ie){switch(ie){case js:i.depthFunc(i.NEVER);break;case Ks:i.depthFunc(i.ALWAYS);break;case Zs:i.depthFunc(i.LESS);break;case ln:i.depthFunc(i.LEQUAL);break;case $s:i.depthFunc(i.EQUAL);break;case Js:i.depthFunc(i.GEQUAL);break;case Qs:i.depthFunc(i.GREATER);break;case eo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ie}},setLocked:function(ie){D=ie},setClear:function(ie){le!==ie&&(ae&&(ie=1-ie),i.clearDepth(ie),le=ie)},reset:function(){D=!1,W=null,Z=null,le=null,ae=!1}}}function n(){let D=!1,ae=null,W=null,Z=null,le=null,ie=null,ze=null,ht=null,bt=null;return{setTest:function(qe){D||(qe?ne(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(qe){ae!==qe&&!D&&(i.stencilMask(qe),ae=qe)},setFunc:function(qe,li,Ti){(W!==qe||Z!==li||le!==Ti)&&(i.stencilFunc(qe,li,Ti),W=qe,Z=li,le=Ti)},setOp:function(qe,li,Ti){(ie!==qe||ze!==li||ht!==Ti)&&(i.stencilOp(qe,li,Ti),ie=qe,ze=li,ht=Ti)},setLocked:function(qe){D=qe},setClear:function(qe){bt!==qe&&(i.clearStencil(qe),bt=qe)},reset:function(){D=!1,ae=null,W=null,Z=null,le=null,ie=null,ze=null,ht=null,bt=null}}}const a=new t,s=new r,o=new n,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,m=[],f=null,_=!1,g=null,p=null,b=null,M=null,v=null,P=null,T=null,w=new He(0,0,0),R=0,y=!1,x=null,C=null,B=null,F=null,O=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,j=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=j>=2);let Q=null,oe={};const xe=i.getParameter(i.SCISSOR_BOX),Te=i.getParameter(i.VIEWPORT),Ie=new je().fromArray(xe),q=new je().fromArray(Te);function $(D,ae,W,Z){const le=new Uint8Array(4),ie=i.createTexture();i.bindTexture(D,ie),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<W;ze++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(ae+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return ie}const pe={};pe[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),s.setFunc(ln),Oe(!1),Fe(Ol),ne(i.CULL_FACE),I(er);function ne(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function ye(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function we(D,ae){return d[D]!==ae?(i.bindFramebuffer(D,ae),d[D]=ae,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ae),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function Le(D,ae){let W=m,Z=!1;if(D){W=u.get(ae),W===void 0&&(W=[],u.set(ae,W));const le=D.textures;if(W.length!==le.length||W[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,ze=le.length;ie<ze;ie++)W[ie]=i.COLOR_ATTACHMENT0+ie;W.length=le.length,Z=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,Z=!0);Z&&i.drawBuffers(W)}function at(D){return f!==D?(i.useProgram(D),f=D,!0):!1}const ke={[Er]:i.FUNC_ADD,[cd]:i.FUNC_SUBTRACT,[hd]:i.FUNC_REVERSE_SUBTRACT};ke[ud]=i.MIN,ke[dd]=i.MAX;const dt={[pd]:i.ZERO,[fd]:i.ONE,[md]:i.SRC_COLOR,[qs]:i.SRC_ALPHA,[Sd]:i.SRC_ALPHA_SATURATE,[xd]:i.DST_COLOR,[_d]:i.DST_ALPHA,[gd]:i.ONE_MINUS_SRC_COLOR,[Ys]:i.ONE_MINUS_SRC_ALPHA,[yd]:i.ONE_MINUS_DST_COLOR,[vd]:i.ONE_MINUS_DST_ALPHA,[Md]:i.CONSTANT_COLOR,[Ed]:i.ONE_MINUS_CONSTANT_COLOR,[bd]:i.CONSTANT_ALPHA,[Td]:i.ONE_MINUS_CONSTANT_ALPHA};function I(D,ae,W,Z,le,ie,ze,ht,bt,qe){if(D===er){_===!0&&(ye(i.BLEND),_=!1);return}if(_===!1&&(ne(i.BLEND),_=!0),D!==ld){if(D!==g||qe!==y){if((p!==Er||v!==Er)&&(i.blendEquation(i.FUNC_ADD),p=Er,v=Er),qe)switch(D){case tn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fl:i.blendFunc(i.ONE,i.ONE);break;case Bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case tn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,M=null,P=null,T=null,w.set(0,0,0),R=0,g=D,y=qe}return}le=le||ae,ie=ie||W,ze=ze||Z,(ae!==p||le!==v)&&(i.blendEquationSeparate(ke[ae],ke[le]),p=ae,v=le),(W!==b||Z!==M||ie!==P||ze!==T)&&(i.blendFuncSeparate(dt[W],dt[Z],dt[ie],dt[ze]),b=W,M=Z,P=ie,T=ze),(ht.equals(w)===!1||bt!==R)&&(i.blendColor(ht.r,ht.g,ht.b,bt),w.copy(ht),R=bt),g=D,y=!1}function ii(D,ae){D.side===Ii?ye(i.CULL_FACE):ne(i.CULL_FACE);let W=D.side===Bt;ae&&(W=!W),Oe(W),D.blending===tn&&D.transparent===!1?I(er):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),a.setMask(D.colorWrite);const Z=D.stencilWrite;o.setTest(Z),Z&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Je(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(D){x!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),x=D)}function Fe(D){D!==ad?(ne(i.CULL_FACE),D!==C&&(D===Ol?i.cullFace(i.BACK):D===sd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),C=D}function Ee(D){D!==B&&(V&&i.lineWidth(D),B=D)}function Je(D,ae,W){D?(ne(i.POLYGON_OFFSET_FILL),(F!==ae||O!==W)&&(i.polygonOffset(ae,W),F=ae,O=W)):ye(i.POLYGON_OFFSET_FILL)}function Se(D){D?ne(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function A(D){D===void 0&&(D=i.TEXTURE0+X-1),Q!==D&&(i.activeTexture(D),Q=D)}function S(D,ae,W){W===void 0&&(Q===null?W=i.TEXTURE0+X-1:W=Q);let Z=oe[W];Z===void 0&&(Z={type:void 0,texture:void 0},oe[W]=Z),(Z.type!==D||Z.texture!==ae)&&(Q!==W&&(i.activeTexture(W),Q=W),i.bindTexture(D,ae||pe[D]),Z.type=D,Z.texture=ae)}function z(){const D=oe[Q];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ve(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(D){Ie.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ie.copy(D))}function ue(D){q.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Be(D,ae){let W=c.get(ae);W===void 0&&(W=new WeakMap,c.set(ae,W));let Z=W.get(D);Z===void 0&&(Z=i.getUniformBlockIndex(ae,D.name),W.set(D,Z))}function De(D,ae){const W=c.get(ae).get(D);l.get(ae)!==W&&(i.uniformBlockBinding(ae,W,D.__bindingPointIndex),l.set(ae,W))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Q=null,oe={},d={},u=new WeakMap,m=[],f=null,_=!1,g=null,p=null,b=null,M=null,v=null,P=null,T=null,w=new He(0,0,0),R=0,y=!1,x=null,C=null,B=null,F=null,O=null,Ie.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:ne,disable:ye,bindFramebuffer:we,drawBuffers:Le,useProgram:at,setBlending:I,setMaterial:ii,setFlipSided:Oe,setCullFace:Fe,setLineWidth:Ee,setPolygonOffset:Je,setScissorTest:Se,activeTexture:A,bindTexture:S,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:he,texImage3D:be,updateUBOMapping:Be,uniformBlockBinding:De,texStorage2D:Ve,texStorage3D:te,texSubImage2D:Y,texSubImage3D:ge,compressedTexSubImage2D:se,compressedTexSubImage3D:de,scissor:Ae,viewport:ue,reset:$e}}function Uc(i,e,t,r){const n=j_(r);switch(t){case gh:return i*e;case vh:return i*e;case xh:return i*e*2;case yh:return i*e/n.components*n.byteLength;case Qo:return i*e/n.components*n.byteLength;case Sh:return i*e*2/n.components*n.byteLength;case el:return i*e*2/n.components*n.byteLength;case _h:return i*e*3/n.components*n.byteLength;case fi:return i*e*4/n.components*n.byteLength;case tl:return i*e*4/n.components*n.byteLength;case Pa:case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Da:case Ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case so:case lo:return Math.max(i,16)*Math.max(e,8)/4;case ao:case oo:return Math.max(i,8)*Math.max(e,8)/2;case co:case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case mo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case go:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _o:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case vo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case yo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case bo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case To:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case wo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ia:case Ao:case Ro:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Mh:case Co:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Po:case Lo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function j_(i){switch(i){case Bi:case ph:return{byteLength:1,components:1};case kn:case fh:case Jn:return{byteLength:2,components:1};case $o:case Jo:return{byteLength:2,components:4};case Dr:case Zo:case Ni:return{byteLength:4,components:1};case mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function K_(i,e,t,r,n,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,h=new WeakMap;let d;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(A,S){return m?new OffscreenCanvas(A,S):Vn("canvas")}function _(A,S,z){let K=1;const J=Se(A);if((J.width>z||J.height>z)&&(K=z/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(K*J.width),ge=Math.floor(K*J.height);d===void 0&&(d=f(Y,ge));const se=S?f(Y,ge):d;return se.width=Y,se.height=ge,se.getContext("2d").drawImage(A,0,0,Y,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+ge+")."),se}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,S,z,K,J=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=S;if(S===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),S===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),S===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),S===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),S===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),S===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),S===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),S===i.RGBA){const ge=J?$a:Ge.getTransfer(K);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=ge===Ye?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(A,S){let z;return A?S===null||S===Dr||S===un?z=i.DEPTH24_STENCIL8:S===Ni?z=i.DEPTH32F_STENCIL8:S===kn&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Dr||S===un?z=i.DEPTH_COMPONENT24:S===Ni?z=i.DEPTH_COMPONENT32F:S===kn&&(z=i.DEPTH_COMPONENT16),z}function P(A,S){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==mi&&A.minFilter!==yi?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function T(A){const S=A.target;S.removeEventListener("dispose",T),R(S),S.isVideoTexture&&h.delete(S)}function w(A){const S=A.target;S.removeEventListener("dispose",w),x(S)}function R(A){const S=r.get(A);if(S.__webglInit===void 0)return;const z=A.source,K=u.get(z);if(K){const J=K[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(A),Object.keys(K).length===0&&u.delete(z)}r.remove(A)}function y(A){const S=r.get(A);i.deleteTexture(S.__webglTexture);const z=A.source,K=u.get(z);delete K[S.__cacheKey],s.memory.textures--}function x(A){const S=r.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),r.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let J=0;J<S.__webglFramebuffer[K].length;J++)i.deleteFramebuffer(S.__webglFramebuffer[K][J]);else i.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)i.deleteFramebuffer(S.__webglFramebuffer[K]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=A.textures;for(let K=0,J=z.length;K<J;K++){const Y=r.get(z[K]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),s.memory.textures--),r.remove(z[K])}r.remove(A)}let C=0;function B(){C=0}function F(){const A=C;return A>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+n.maxTextures),C+=1,A}function O(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function X(A,S){const z=r.get(A);if(A.isVideoTexture&&Ee(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,A,S);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+S)}function V(A,S){const z=r.get(A);if(A.version>0&&z.__version!==A.version){q(z,A,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+S)}function j(A,S){const z=r.get(A);if(A.version>0&&z.__version!==A.version){q(z,A,S);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+S)}function G(A,S){const z=r.get(A);if(A.version>0&&z.__version!==A.version){$(z,A,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+S)}const Q={[ro]:i.REPEAT,[Tr]:i.CLAMP_TO_EDGE,[no]:i.MIRRORED_REPEAT},oe={[mi]:i.NEAREST,[Nd]:i.NEAREST_MIPMAP_NEAREST,[sa]:i.NEAREST_MIPMAP_LINEAR,[yi]:i.LINEAR,[ns]:i.LINEAR_MIPMAP_NEAREST,[wr]:i.LINEAR_MIPMAP_LINEAR},xe={[zd]:i.NEVER,[Xd]:i.ALWAYS,[Hd]:i.LESS,[bh]:i.LEQUAL,[kd]:i.EQUAL,[Wd]:i.GEQUAL,[Vd]:i.GREATER,[Gd]:i.NOTEQUAL};function Te(A,S){if(S.type===Ni&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===yi||S.magFilter===ns||S.magFilter===sa||S.magFilter===wr||S.minFilter===yi||S.minFilter===ns||S.minFilter===sa||S.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Q[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Q[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Q[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,oe[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,oe[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,xe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===mi||S.minFilter!==sa&&S.minFilter!==wr||S.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function Ie(A,S){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",T));const K=S.source;let J=u.get(K);J===void 0&&(J={},u.set(K,J));const Y=O(S);if(Y!==A.__cacheKey){J[Y]===void 0&&(J[Y]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,z=!0),J[Y].usedTimes++;const ge=J[A.__cacheKey];ge!==void 0&&(J[A.__cacheKey].usedTimes--,ge.usedTimes===0&&y(S)),A.__cacheKey=Y,A.__webglTexture=J[Y].texture}return z}function q(A,S,z){let K=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=i.TEXTURE_3D);const J=Ie(A,S),Y=S.source;t.bindTexture(K,A.__webglTexture,i.TEXTURE0+z);const ge=r.get(Y);if(Y.version!==ge.__version||J===!0){t.activeTexture(i.TEXTURE0+z);const se=Ge.getPrimaries(Ge.workingColorSpace),de=S.colorSpace===Zi?null:Ge.getPrimaries(S.colorSpace),Ve=S.colorSpace===Zi||se===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let te=_(S.image,!1,n.maxTextureSize);te=Je(S,te);const he=a.convert(S.format,S.colorSpace),be=a.convert(S.type);let Ae=M(S.internalFormat,he,be,S.colorSpace,S.isVideoTexture);Te(K,S);let ue;const Be=S.mipmaps,De=S.isVideoTexture!==!0,$e=ge.__version===void 0||J===!0,D=Y.dataReady,ae=P(S,te);if(S.isDepthTexture)Ae=v(S.format===dn,S.type),$e&&(De?t.texStorage2D(i.TEXTURE_2D,1,Ae,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Ae,te.width,te.height,0,he,be,null));else if(S.isDataTexture)if(Be.length>0){De&&$e&&t.texStorage2D(i.TEXTURE_2D,ae,Ae,Be[0].width,Be[0].height);for(let W=0,Z=Be.length;W<Z;W++)ue=Be[W],De?D&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,ue.width,ue.height,he,be,ue.data):t.texImage2D(i.TEXTURE_2D,W,Ae,ue.width,ue.height,0,he,be,ue.data);S.generateMipmaps=!1}else De?($e&&t.texStorage2D(i.TEXTURE_2D,ae,Ae,te.width,te.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te.width,te.height,he,be,te.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,te.width,te.height,0,he,be,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){De&&$e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Ae,Be[0].width,Be[0].height,te.depth);for(let W=0,Z=Be.length;W<Z;W++)if(ue=Be[W],S.format!==fi)if(he!==null)if(De){if(D)if(S.layerUpdates.size>0){const le=Uc(ue.width,ue.height,S.format,S.type);for(const ie of S.layerUpdates){const ze=ue.data.subarray(ie*le/ue.data.BYTES_PER_ELEMENT,(ie+1)*le/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,ie,ue.width,ue.height,1,he,ze)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,ue.width,ue.height,te.depth,he,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Ae,ue.width,ue.height,te.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,ue.width,ue.height,te.depth,he,be,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,Ae,ue.width,ue.height,te.depth,0,he,be,ue.data)}else{De&&$e&&t.texStorage2D(i.TEXTURE_2D,ae,Ae,Be[0].width,Be[0].height);for(let W=0,Z=Be.length;W<Z;W++)ue=Be[W],S.format!==fi?he!==null?De?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,ue.width,ue.height,he,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,W,Ae,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?D&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,ue.width,ue.height,he,be,ue.data):t.texImage2D(i.TEXTURE_2D,W,Ae,ue.width,ue.height,0,he,be,ue.data)}else if(S.isDataArrayTexture)if(De){if($e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Ae,te.width,te.height,te.depth),D)if(S.layerUpdates.size>0){const W=Uc(te.width,te.height,S.format,S.type);for(const Z of S.layerUpdates){const le=te.data.subarray(Z*W/te.data.BYTES_PER_ELEMENT,(Z+1)*W/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,te.width,te.height,1,he,be,le)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,he,be,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,te.width,te.height,te.depth,0,he,be,te.data);else if(S.isData3DTexture)De?($e&&t.texStorage3D(i.TEXTURE_3D,ae,Ae,te.width,te.height,te.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,he,be,te.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,te.width,te.height,te.depth,0,he,be,te.data);else if(S.isFramebufferTexture){if($e)if(De)t.texStorage2D(i.TEXTURE_2D,ae,Ae,te.width,te.height);else{let W=te.width,Z=te.height;for(let le=0;le<ae;le++)t.texImage2D(i.TEXTURE_2D,le,Ae,W,Z,0,he,be,null),W>>=1,Z>>=1}}else if(Be.length>0){if(De&&$e){const W=Se(Be[0]);t.texStorage2D(i.TEXTURE_2D,ae,Ae,W.width,W.height)}for(let W=0,Z=Be.length;W<Z;W++)ue=Be[W],De?D&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,he,be,ue):t.texImage2D(i.TEXTURE_2D,W,Ae,he,be,ue);S.generateMipmaps=!1}else if(De){if($e){const W=Se(te);t.texStorage2D(i.TEXTURE_2D,ae,Ae,W.width,W.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,be,te)}else t.texImage2D(i.TEXTURE_2D,0,Ae,he,be,te);g(S)&&p(K),ge.__version=Y.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function $(A,S,z){if(S.image.length!==6)return;const K=Ie(A,S),J=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);const Y=r.get(J);if(J.version!==Y.__version||K===!0){t.activeTexture(i.TEXTURE0+z);const ge=Ge.getPrimaries(Ge.workingColorSpace),se=S.colorSpace===Zi?null:Ge.getPrimaries(S.colorSpace),de=S.colorSpace===Zi||ge===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ve=S.isCompressedTexture||S.image[0].isCompressedTexture,te=S.image[0]&&S.image[0].isDataTexture,he=[];for(let Z=0;Z<6;Z++)!Ve&&!te?he[Z]=_(S.image[Z],!0,n.maxCubemapSize):he[Z]=te?S.image[Z].image:S.image[Z],he[Z]=Je(S,he[Z]);const be=he[0],Ae=a.convert(S.format,S.colorSpace),ue=a.convert(S.type),Be=M(S.internalFormat,Ae,ue,S.colorSpace),De=S.isVideoTexture!==!0,$e=Y.__version===void 0||K===!0,D=J.dataReady;let ae=P(S,be);Te(i.TEXTURE_CUBE_MAP,S);let W;if(Ve){De&&$e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,Be,be.width,be.height);for(let Z=0;Z<6;Z++){W=he[Z].mipmaps;for(let le=0;le<W.length;le++){const ie=W[le];S.format!==fi?Ae!==null?De?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,ie.width,ie.height,Ae,ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,Be,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,ie.width,ie.height,Ae,ue,ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,Be,ie.width,ie.height,0,Ae,ue,ie.data)}}}else{if(W=S.mipmaps,De&&$e){W.length>0&&ae++;const Z=Se(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,Be,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(te){De?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,he[Z].width,he[Z].height,Ae,ue,he[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,he[Z].width,he[Z].height,0,Ae,ue,he[Z].data);for(let le=0;le<W.length;le++){const ie=W[le].image[Z].image;De?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,ie.width,ie.height,Ae,ue,ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,Be,ie.width,ie.height,0,Ae,ue,ie.data)}}else{De?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ae,ue,he[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,Ae,ue,he[Z]);for(let le=0;le<W.length;le++){const ie=W[le];De?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,Ae,ue,ie.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,Be,Ae,ue,ie.image[Z])}}}g(S)&&p(i.TEXTURE_CUBE_MAP),Y.__version=J.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function pe(A,S,z,K,J,Y){const ge=a.convert(z.format,z.colorSpace),se=a.convert(z.type),de=M(z.internalFormat,ge,se,z.colorSpace),Ve=r.get(S),te=r.get(z);if(te.__renderTarget=S,!Ve.__hasExternalTextures){const he=Math.max(1,S.width>>Y),be=Math.max(1,S.height>>Y);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,Y,de,he,be,S.depth,0,ge,se,null):t.texImage2D(J,Y,de,he,be,0,ge,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Fe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,J,te.__webglTexture,0,Oe(S)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,J,te.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(A,S,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){const K=S.depthTexture,J=K&&K.isDepthTexture?K.type:null,Y=v(S.stencilBuffer,J),ge=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=Oe(S);Fe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,Y,S.width,S.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,Y,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Y,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,A)}else{const K=S.textures;for(let J=0;J<K.length;J++){const Y=K[J],ge=a.convert(Y.format,Y.colorSpace),se=a.convert(Y.type),de=M(Y.internalFormat,ge,se,Y.colorSpace),Ve=Oe(S);z&&Fe(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,de,S.width,S.height):Fe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve,de,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,de,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=r.get(S.depthTexture);z.__renderTarget=S,(!z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const K=z.__webglTexture,J=Oe(S);if(S.depthTexture.format===rn)Fe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(S.depthTexture.format===dn)Fe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function we(A){const S=r.get(A),z=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=K}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ye(S.__webglFramebuffer,A)}else if(z){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=i.createRenderbuffer(),ne(S.__webglDepthbuffer[K],A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ne(S.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,J)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(A,S,z){const K=r.get(A);S!==void 0&&pe(K.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&we(A)}function at(A){const S=A.texture,z=r.get(A),K=r.get(S);A.addEventListener("dispose",w);const J=A.textures,Y=A.isWebGLCubeRenderTarget===!0,ge=J.length>1;if(ge||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=S.version,s.memory.textures++),Y){z.__webglFramebuffer=[];for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[se]=[];for(let de=0;de<S.mipmaps.length;de++)z.__webglFramebuffer[se][de]=i.createFramebuffer()}else z.__webglFramebuffer[se]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let se=0;se<S.mipmaps.length;se++)z.__webglFramebuffer[se]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ge)for(let se=0,de=J.length;se<de;se++){const Ve=r.get(J[se]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=i.createTexture(),s.memory.textures++)}if(A.samples>0&&Fe(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let se=0;se<J.length;se++){const de=J[se];z.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[se]);const Ve=a.convert(de.format,de.colorSpace),te=a.convert(de.type),he=M(de.internalFormat,Ve,te,de.colorSpace,A.isXRRenderTarget===!0),be=Oe(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,he,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,z.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ne(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Te(i.TEXTURE_CUBE_MAP,S);for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)pe(z.__webglFramebuffer[se][de],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,de);else pe(z.__webglFramebuffer[se],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);g(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let se=0,de=J.length;se<de;se++){const Ve=J[se],te=r.get(Ve);t.bindTexture(i.TEXTURE_2D,te.__webglTexture),Te(i.TEXTURE_2D,Ve),pe(z.__webglFramebuffer,A,Ve,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,0),g(Ve)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(se=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,K.__webglTexture),Te(se,S),S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)pe(z.__webglFramebuffer[de],A,S,i.COLOR_ATTACHMENT0,se,de);else pe(z.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,se,0);g(S)&&p(se),t.unbindTexture()}A.depthBuffer&&we(A)}function ke(A){const S=A.textures;for(let z=0,K=S.length;z<K;z++){const J=S[z];if(g(J)){const Y=b(A),ge=r.get(J).__webglTexture;t.bindTexture(Y,ge),p(Y),t.unbindTexture()}}}const dt=[],I=[];function ii(A){if(A.samples>0){if(Fe(A)===!1){const S=A.textures,z=A.width,K=A.height;let J=i.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=r.get(A),se=S.length>1;if(se)for(let de=0;de<S.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let de=0;de<S.length;de++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[de]);const Ve=r.get(S[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ve,0)}i.blitFramebuffer(0,0,z,K,0,0,z,K,J,i.NEAREST),l===!0&&(dt.length=0,I.length=0,dt.push(i.COLOR_ATTACHMENT0+de),A.depthBuffer&&A.resolveDepthBuffer===!1&&(dt.push(Y),I.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let de=0;de<S.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,ge.__webglColorRenderbuffer[de]);const Ve=r.get(S[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,Ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Oe(A){return Math.min(n.maxSamples,A.samples)}function Fe(A){const S=r.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ee(A){const S=s.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Je(A,S){const z=A.colorSpace,K=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==xn&&z!==Zi&&(Ge.getTransfer(z)===Ye?(K!==fi||J!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function Se(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=X,this.setTexture2DArray=V,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=Le,this.setupRenderTarget=at,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=ii,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Fe}function Z_(i,e){function t(r,n=Zi){let a;const s=Ge.getTransfer(n);if(r===Bi)return i.UNSIGNED_BYTE;if(r===$o)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Jo)return i.UNSIGNED_SHORT_5_5_5_1;if(r===mh)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===ph)return i.BYTE;if(r===fh)return i.SHORT;if(r===kn)return i.UNSIGNED_SHORT;if(r===Zo)return i.INT;if(r===Dr)return i.UNSIGNED_INT;if(r===Ni)return i.FLOAT;if(r===Jn)return i.HALF_FLOAT;if(r===gh)return i.ALPHA;if(r===_h)return i.RGB;if(r===fi)return i.RGBA;if(r===vh)return i.LUMINANCE;if(r===xh)return i.LUMINANCE_ALPHA;if(r===rn)return i.DEPTH_COMPONENT;if(r===dn)return i.DEPTH_STENCIL;if(r===yh)return i.RED;if(r===Qo)return i.RED_INTEGER;if(r===Sh)return i.RG;if(r===el)return i.RG_INTEGER;if(r===tl)return i.RGBA_INTEGER;if(r===Pa||r===La||r===Da||r===Ua)if(s===Ye)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Pa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===La)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Pa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===La)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Da)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ua)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ao||r===so||r===oo||r===lo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ao)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===so)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===oo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===co||r===ho||r===uo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===co||r===ho)return s===Ye?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===uo)return s===Ye?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===po||r===fo||r===mo||r===go||r===_o||r===vo||r===xo||r===yo||r===So||r===Mo||r===Eo||r===bo||r===To||r===wo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===po)return s===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fo)return s===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mo)return s===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===go)return s===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_o)return s===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vo)return s===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xo)return s===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yo)return s===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===So)return s===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Mo)return s===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Eo)return s===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bo)return s===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===To)return s===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wo)return s===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ia||r===Ao||r===Ro)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ia)return s===Ye?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ao)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ro)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Mh||r===Co||r===Po||r===Lo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ia)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Co)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Po)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===un?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}class $_ extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yt extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const J_={type:"move"};class Us{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,r),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,f=.005;c.inputState.pinching&&u>m+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(J_)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new yt;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Q_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ev=`
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

}`;class tv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const n=new Lt,a=e.properties.get(n);a.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new zi({vertexShader:Q_,fragmentShader:ev,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new ia(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iv extends yn{constructor(e,t){super();const r=this;let n=null,a=1,s=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,f=null;const _=new tv,g=t.getContextAttributes();let p=null,b=null;const M=[],v=[],P=new We;let T=null;const w=new Ot;w.viewport=new je;const R=new Ot;R.viewport=new je;const y=[w,R],x=new $_;let C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let $=M[q];return $===void 0&&($=new Us,M[q]=$),$.getTargetRaySpace()},this.getControllerGrip=function(q){let $=M[q];return $===void 0&&($=new Us,M[q]=$),$.getGripSpace()},this.getHand=function(q){let $=M[q];return $===void 0&&($=new Us,M[q]=$),$.getHandSpace()};function F(q){const $=v.indexOf(q.inputSource);if($===-1)return;const pe=M[$];pe!==void 0&&(pe.update(q.inputSource,q.frame,c||s),pe.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){n.removeEventListener("select",F),n.removeEventListener("selectstart",F),n.removeEventListener("selectend",F),n.removeEventListener("squeeze",F),n.removeEventListener("squeezestart",F),n.removeEventListener("squeezeend",F),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",X);for(let q=0;q<M.length;q++){const $=v[q];$!==null&&(v[q]=null,M[q].disconnect($))}C=null,B=null,_.reset(),e.setRenderTarget(p),m=null,u=null,d=null,n=null,b=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(q){if(n=q,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",F),n.addEventListener("selectstart",F),n.addEventListener("selectend",F),n.addEventListener("squeeze",F),n.addEventListener("squeezestart",F),n.addEventListener("squeezeend",F),n.addEventListener("end",O),n.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),n.renderState.layers===void 0){const $={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(n,t,$),n.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Ur(m.framebufferWidth,m.framebufferHeight,{format:fi,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let $=null,pe=null,ne=null;g.depth&&(ne=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=g.stencil?dn:rn,pe=g.stencil?un:Dr);const ye={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:a};d=new XRWebGLBinding(n,t),u=d.createProjectionLayer(ye),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Ur(u.textureWidth,u.textureHeight,{format:fi,type:Bi,depthTexture:new zh(u.textureWidth,u.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(o),Ie.setContext(n),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(q){for(let $=0;$<q.removed.length;$++){const pe=q.removed[$],ne=v.indexOf(pe);ne>=0&&(v[ne]=null,M[ne].disconnect(pe))}for(let $=0;$<q.added.length;$++){const pe=q.added[$];let ne=v.indexOf(pe);if(ne===-1){for(let we=0;we<M.length;we++)if(we>=v.length){v.push(pe),ne=we;break}else if(v[we]===null){v[we]=pe,ne=we;break}if(ne===-1)break}const ye=M[ne];ye&&ye.connect(pe)}}const V=new N,j=new N;function G(q,$,pe){V.setFromMatrixPosition($.matrixWorld),j.setFromMatrixPosition(pe.matrixWorld);const ne=V.distanceTo(j),ye=$.projectionMatrix.elements,we=pe.projectionMatrix.elements,Le=ye[14]/(ye[10]-1),at=ye[14]/(ye[10]+1),ke=(ye[9]+1)/ye[5],dt=(ye[9]-1)/ye[5],I=(ye[8]-1)/ye[0],ii=(we[8]+1)/we[0],Oe=Le*I,Fe=Le*ii,Ee=ne/(-I+ii),Je=Ee*-I;if($.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Je),q.translateZ(Ee),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ye[10]===-1)q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Se=Le+Ee,A=at+Ee,S=Oe-Je,z=Fe+(ne-Je),K=ke*at/A*Se,J=dt*at/A*Se;q.projectionMatrix.makePerspective(S,z,K,J,Se,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Q(q,$){$===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices($.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(n===null)return;let $=q.near,pe=q.far;_.texture!==null&&(_.depthNear>0&&($=_.depthNear),_.depthFar>0&&(pe=_.depthFar)),x.near=R.near=w.near=$,x.far=R.far=w.far=pe,(C!==x.near||B!==x.far)&&(n.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,B=x.far),w.layers.mask=q.layers.mask|2,R.layers.mask=q.layers.mask|4,x.layers.mask=w.layers.mask|R.layers.mask;const ne=q.parent,ye=x.cameras;Q(x,ne);for(let we=0;we<ye.length;we++)Q(ye[we],ne);ye.length===2?G(x,w,R):x.projectionMatrix.copy(w.projectionMatrix),oe(q,x,ne)};function oe(q,$,pe){pe===null?q.matrix.copy($.matrixWorld):(q.matrix.copy(pe.matrixWorld),q.matrix.invert(),q.matrix.multiply($.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Do*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let xe=null;function Te(q,$){if(h=$.getViewerPose(c||s),f=$,h!==null){const pe=h.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let ne=!1;pe.length!==x.cameras.length&&(x.cameras.length=0,ne=!0);for(let we=0;we<pe.length;we++){const Le=pe[we];let at=null;if(m!==null)at=m.getViewport(Le);else{const dt=d.getViewSubImage(u,Le);at=dt.viewport,we===0&&(e.setRenderTargetTextures(b,dt.colorTexture,u.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(b))}let ke=y[we];ke===void 0&&(ke=new Ot,ke.layers.enable(we),ke.viewport=new je,y[we]=ke),ke.matrix.fromArray(Le.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Le.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(at.x,at.y,at.width,at.height),we===0&&(x.matrix.copy(ke.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ne===!0&&x.cameras.push(ke)}const ye=n.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const we=d.getDepthInformation(pe[0]);we&&we.isValid&&we.texture&&_.init(e,we,n.renderState)}}for(let pe=0;pe<M.length;pe++){const ne=v[pe],ye=M[pe];ne!==null&&ye!==void 0&&ye.update(ne,$,c||s)}xe&&xe(q,$),$.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:$}),f=null}const Ie=new Fh;Ie.setAnimationLoop(Te),this.setAnimationLoop=function(q){xe=q},this.dispose=function(){}}}const _r=new Ei,rv=new nt;function nv(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function r(g,p){p.color.getRGB(g.fogColor.value,Ih(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,b,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(g,p):p.isMeshToonMaterial?(a(g,p),d(g,p)):p.isMeshPhongMaterial?(a(g,p),h(g,p)):p.isMeshStandardMaterial?(a(g,p),u(g,p),p.isMeshPhysicalMaterial&&m(g,p,v)):p.isMeshMatcapMaterial?(a(g,p),f(g,p)):p.isMeshDepthMaterial?a(g,p):p.isMeshDistanceMaterial?(a(g,p),_(g,p)):p.isMeshNormalMaterial?a(g,p):p.isLineBasicMaterial?(s(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,b,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Bt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Bt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const b=e.get(p),M=b.envMap,v=b.envMapRotation;M&&(g.envMap.value=M,_r.copy(v),_r.x*=-1,_r.y*=-1,_r.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),g.envMapRotation.value.setFromMatrix4(rv.makeRotationFromEuler(_r)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function s(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function f(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const b=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function av(i,e,t,r){let n={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const v=M.program;r.uniformBlockBinding(b,v)}function c(b,M){let v=n[b.id];v===void 0&&(f(b),v=h(b),n[b.id]=v,b.addEventListener("dispose",g));const P=M.program;r.updateUBOMapping(b,P);const T=e.render.frame;a[b.id]!==T&&(u(b),a[b.id]=T)}function h(b){const M=d();b.__bindingPointIndex=M;const v=i.createBuffer(),P=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,P,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function d(){for(let b=0;b<o;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const M=n[b.id],v=b.uniforms,P=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,w=v.length;T<w;T++){const R=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,x=R.length;y<x;y++){const C=R[y];if(m(C,T,y,P)===!0){const B=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let O=0;for(let X=0;X<F.length;X++){const V=F[X],j=_(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,B+O,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,O),O+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,M,v,P){const T=b.value,w=M+"_"+v;if(P[w]===void 0)return typeof T=="number"||typeof T=="boolean"?P[w]=T:P[w]=T.clone(),!0;{const R=P[w];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return P[w]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function f(b){const M=b.uniforms;let v=0;const P=16;for(let w=0,R=M.length;w<R;w++){const y=Array.isArray(M[w])?M[w]:[M[w]];for(let x=0,C=y.length;x<C;x++){const B=y[x],F=Array.isArray(B.value)?B.value:[B.value];for(let O=0,X=F.length;O<X;O++){const V=F[O],j=_(V),G=v%P,Q=G%j.boundary,oe=G+Q;v+=Q,oe!==0&&P-oe<j.storage&&(v+=P-oe),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=j.storage}}}const T=v%P;return T>0&&(v+=P-T),b.__size=v,b.__cache={},this}function _(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function g(b){const M=b.target;M.removeEventListener("dispose",g);const v=s.indexOf(M.__bindingPointIndex);s.splice(v,1),i.deleteBuffer(n[M.id]),delete n[M.id],delete a[M.id]}function p(){for(const b in n)i.deleteBuffer(n[b]);s=[],n={},a={}}return{bind:l,update:c,dispose:p}}class Wh{constructor(e={}){const{canvas:t=Yd(),context:r=null,depth:n=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let m;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=r.getContextAttributes().alpha}else m=s;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const b=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ai,this.toneMapping=tr,this.toneMappingExposure=1;const v=this;let P=!1,T=0,w=0,R=null,y=-1,x=null;const C=new je,B=new je;let F=null;const O=new He(0);let X=0,V=t.width,j=t.height,G=1,Q=null,oe=null;const xe=new je(0,0,V,j),Te=new je(0,0,V,j);let Ie=!1;const q=new il;let $=!1,pe=!1;const ne=new nt,ye=new nt,we=new N,Le=new je,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function dt(){return R===null?G:1}let I=r;function ii(E,U){return t.getContext(E,U)}try{const E={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ko}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ie,!1),I===null){const U="webgl2";if(I=ii(U,E),I===null)throw ii(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Oe,Fe,Ee,Je,Se,A,S,z,K,J,Y,ge,se,de,Ve,te,he,be,Ae,ue,Be,De,$e,D;function ae(){Oe=new ug(I),Oe.init(),De=new Z_(I,Oe),Fe=new ag(I,Oe,e,De),Ee=new Y_(I,Oe),Fe.reverseDepthBuffer&&u&&Ee.buffers.depth.setReversed(!0),Je=new fg(I),Se=new D_,A=new K_(I,Oe,Ee,Se,Fe,De,Je),S=new og(v),z=new hg(v),K=new yp(I),$e=new rg(I,K),J=new dg(I,K,Je,$e),Y=new gg(I,J,K,Je),Ae=new mg(I,Fe,A),te=new sg(Se),ge=new L_(v,S,z,Oe,Fe,$e,te),se=new nv(v,Se),de=new I_,Ve=new H_(Oe),be=new ig(v,S,z,Ee,Y,m,l),he=new X_(v,Y,Fe),D=new av(I,Je,Fe,Ee),ue=new ng(I,Oe,Je),Be=new pg(I,Oe,Je),Je.programs=ge.programs,v.capabilities=Fe,v.extensions=Oe,v.properties=Se,v.renderLists=de,v.shadowMap=he,v.state=Ee,v.info=Je}ae();const W=new iv(v,I);this.xr=W,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=Oe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Oe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(V,j,!1))},this.getSize=function(E){return E.set(V,j)},this.setSize=function(E,U,H=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,j=U,t.width=Math.floor(E*G),t.height=Math.floor(U*G),H===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(V*G,j*G).floor()},this.setDrawingBufferSize=function(E,U,H){V=E,j=U,G=H,t.width=Math.floor(E*H),t.height=Math.floor(U*H),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(xe)},this.setViewport=function(E,U,H,k){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,U,H,k),Ee.viewport(C.copy(xe).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(Te)},this.setScissor=function(E,U,H,k){E.isVector4?Te.set(E.x,E.y,E.z,E.w):Te.set(E,U,H,k),Ee.scissor(B.copy(Te).multiplyScalar(G).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(E){Ee.setScissorTest(Ie=E)},this.setOpaqueSort=function(E){Q=E},this.setTransparentSort=function(E){oe=E},this.getClearColor=function(E){return E.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(E=!0,U=!0,H=!0){let k=0;if(E){let L=!1;if(R!==null){const ee=R.texture.format;L=ee===tl||ee===el||ee===Qo}if(L){const ee=R.texture.type,ce=ee===Bi||ee===Dr||ee===kn||ee===un||ee===$o||ee===Jo,me=be.getClearColor(),_e=be.getClearAlpha(),Re=me.r,Ce=me.g,Me=me.b;ce?(f[0]=Re,f[1]=Ce,f[2]=Me,f[3]=_e,I.clearBufferuiv(I.COLOR,0,f)):(_[0]=Re,_[1]=Ce,_[2]=Me,_[3]=_e,I.clearBufferiv(I.COLOR,0,_))}else k|=I.COLOR_BUFFER_BIT}U&&(k|=I.DEPTH_BUFFER_BIT),H&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),de.dispose(),Ve.dispose(),Se.dispose(),S.dispose(),z.dispose(),Y.dispose(),$e.dispose(),D.dispose(),ge.dispose(),W.dispose(),W.removeEventListener("sessionstart",Tl),W.removeEventListener("sessionend",wl),cr.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=Je.autoReset,U=he.enabled,H=he.autoUpdate,k=he.needsUpdate,L=he.type;ae(),Je.autoReset=E,he.enabled=U,he.autoUpdate=H,he.needsUpdate=k,he.type=L}function ie(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ze(E){const U=E.target;U.removeEventListener("dispose",ze),ht(U)}function ht(E){bt(E),Se.remove(E)}function bt(E){const U=Se.get(E).programs;U!==void 0&&(U.forEach(function(H){ge.releaseProgram(H)}),E.isShaderMaterial&&ge.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,H,k,L,ee){U===null&&(U=at);const ce=L.isMesh&&L.matrixWorld.determinant()<0,me=Xu(E,U,H,k,L);Ee.setMaterial(k,ce);let _e=H.index,Re=1;if(k.wireframe===!0){if(_e=J.getWireframeAttribute(H),_e===void 0)return;Re=2}const Ce=H.drawRange,Me=H.attributes.position;let Xe=Ce.start*Re,et=(Ce.start+Ce.count)*Re;ee!==null&&(Xe=Math.max(Xe,ee.start*Re),et=Math.min(et,(ee.start+ee.count)*Re)),_e!==null?(Xe=Math.max(Xe,0),et=Math.min(et,_e.count)):Me!=null&&(Xe=Math.max(Xe,0),et=Math.min(et,Me.count));const tt=et-Xe;if(tt<0||tt===1/0)return;$e.setup(L,k,me,H,_e);let ft,it=ue;if(_e!==null&&(ft=K.get(_e),it=Be,it.setIndex(ft)),L.isMesh)k.wireframe===!0?(Ee.setLineWidth(k.wireframeLinewidth*dt()),it.setMode(I.LINES)):it.setMode(I.TRIANGLES);else if(L.isLine){let ve=k.linewidth;ve===void 0&&(ve=1),Ee.setLineWidth(ve*dt()),L.isLineSegments?it.setMode(I.LINES):L.isLineLoop?it.setMode(I.LINE_LOOP):it.setMode(I.LINE_STRIP)}else L.isPoints?it.setMode(I.POINTS):L.isSprite&&it.setMode(I.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)it.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))it.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const ve=L._multiDrawStarts,hr=L._multiDrawCounts,ur=L._multiDrawCount,ci=_e?K.get(_e).bytesPerElement:1,Nr=Se.get(k).currentProgram.getUniforms();for(let Wt=0;Wt<ur;Wt++)Nr.setValue(I,"_gl_DrawID",Wt),it.render(ve[Wt]/ci,hr[Wt])}else if(L.isInstancedMesh)it.renderInstances(Xe,tt,L.count);else if(H.isInstancedBufferGeometry){const ve=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,hr=Math.min(H.instanceCount,ve);it.renderInstances(Xe,tt,hr)}else it.render(Xe,tt)};function qe(E,U,H){E.transparent===!0&&E.side===Ii&&E.forceSinglePass===!1?(E.side=Bt,E.needsUpdate=!0,aa(E,U,H),E.side=nr,E.needsUpdate=!0,aa(E,U,H),E.side=Ii):aa(E,U,H)}this.compile=function(E,U,H=null){H===null&&(H=E),p=Ve.get(H),p.init(U),M.push(p),H.traverseVisible(function(L){L.isLight&&L.layers.test(U.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),E!==H&&E.traverseVisible(function(L){L.isLight&&L.layers.test(U.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),p.setupLights();const k=new Set;return E.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const ee=L.material;if(ee)if(Array.isArray(ee))for(let ce=0;ce<ee.length;ce++){const me=ee[ce];qe(me,H,L),k.add(me)}else qe(ee,H,L),k.add(ee)}),M.pop(),p=null,k},this.compileAsync=function(E,U,H=null){const k=this.compile(E,U,H);return new Promise(L=>{function ee(){if(k.forEach(function(ce){Se.get(ce).currentProgram.isReady()&&k.delete(ce)}),k.size===0){L(E);return}setTimeout(ee,10)}Oe.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let li=null;function Ti(E){li&&li(E)}function Tl(){cr.stop()}function wl(){cr.start()}const cr=new Fh;cr.setAnimationLoop(Ti),typeof self<"u"&&cr.setContext(self),this.setAnimationLoop=function(E){li=E,W.setAnimationLoop(E),E===null?cr.stop():cr.start()},W.addEventListener("sessionstart",Tl),W.addEventListener("sessionend",wl),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,U,R),p=Ve.get(E,M.length),p.init(U),M.push(p),ye.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(ye),pe=this.localClippingEnabled,$=te.init(this.clippingPlanes,pe),g=de.get(E,b.length),g.init(),b.push(g),W.enabled===!0&&W.isPresenting===!0){const ee=v.xr.getDepthSensingMesh();ee!==null&&rs(ee,U,-1/0,v.sortObjects)}rs(E,U,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(Q,oe),ke=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,ke&&be.addToRenderList(g,E),this.info.render.frame++,$===!0&&te.beginShadows();const H=p.state.shadowsArray;he.render(H,E,U),$===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=g.opaque,L=g.transmissive;if(p.setupLights(),U.isArrayCamera){const ee=U.cameras;if(L.length>0)for(let ce=0,me=ee.length;ce<me;ce++){const _e=ee[ce];Rl(k,L,E,_e)}ke&&be.render(E);for(let ce=0,me=ee.length;ce<me;ce++){const _e=ee[ce];Al(g,E,_e,_e.viewport)}}else L.length>0&&Rl(k,L,E,U),ke&&be.render(E),Al(g,E,U);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(v,E,U),$e.resetDefaultState(),y=-1,x=null,M.pop(),M.length>0?(p=M[M.length-1],$===!0&&te.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function rs(E,U,H,k){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){k&&Le.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ye);const ee=Y.update(E),ce=E.material;ce.visible&&g.push(E,ee,ce,H,Le.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const ee=Y.update(E),ce=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Le.copy(E.boundingSphere.center)):(ee.boundingSphere===null&&ee.computeBoundingSphere(),Le.copy(ee.boundingSphere.center)),Le.applyMatrix4(E.matrixWorld).applyMatrix4(ye)),Array.isArray(ce)){const me=ee.groups;for(let _e=0,Re=me.length;_e<Re;_e++){const Ce=me[_e],Me=ce[Ce.materialIndex];Me&&Me.visible&&g.push(E,ee,Me,H,Le.z,Ce)}}else ce.visible&&g.push(E,ee,ce,H,Le.z,null)}}const L=E.children;for(let ee=0,ce=L.length;ee<ce;ee++)rs(L[ee],U,H,k)}function Al(E,U,H,k){const L=E.opaque,ee=E.transmissive,ce=E.transparent;p.setupLightsView(H),$===!0&&te.setGlobalState(v.clippingPlanes,H),k&&Ee.viewport(C.copy(k)),L.length>0&&na(L,U,H),ee.length>0&&na(ee,U,H),ce.length>0&&na(ce,U,H),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Rl(E,U,H,k){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Ur(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Jn:Bi,minFilter:wr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace}));const L=p.state.transmissionRenderTarget[k.id],ee=k.viewport||C;L.setSize(ee.z,ee.w);const ce=v.getRenderTarget();v.setRenderTarget(L),v.getClearColor(O),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),ke&&be.render(H);const me=v.toneMapping;v.toneMapping=tr;const _e=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),$===!0&&te.setGlobalState(v.clippingPlanes,k),na(E,H,k),A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Ce=0,Me=U.length;Ce<Me;Ce++){const Xe=U[Ce],et=Xe.object,tt=Xe.geometry,ft=Xe.material,it=Xe.group;if(ft.side===Ii&&et.layers.test(k.layers)){const ve=ft.side;ft.side=Bt,ft.needsUpdate=!0,Cl(et,H,k,tt,ft,it),ft.side=ve,ft.needsUpdate=!0,Re=!0}}Re===!0&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L))}v.setRenderTarget(ce),v.setClearColor(O,X),_e!==void 0&&(k.viewport=_e),v.toneMapping=me}function na(E,U,H){const k=U.isScene===!0?U.overrideMaterial:null;for(let L=0,ee=E.length;L<ee;L++){const ce=E[L],me=ce.object,_e=ce.geometry,Re=k===null?ce.material:k,Ce=ce.group;me.layers.test(H.layers)&&Cl(me,U,H,_e,Re,Ce)}}function Cl(E,U,H,k,L,ee){E.onBeforeRender(v,U,H,k,L,ee),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),L.onBeforeRender(v,U,H,k,E,ee),L.transparent===!0&&L.side===Ii&&L.forceSinglePass===!1?(L.side=Bt,L.needsUpdate=!0,v.renderBufferDirect(H,U,k,L,E,ee),L.side=nr,L.needsUpdate=!0,v.renderBufferDirect(H,U,k,L,E,ee),L.side=Ii):v.renderBufferDirect(H,U,k,L,E,ee),E.onAfterRender(v,U,H,k,L,ee)}function aa(E,U,H){U.isScene!==!0&&(U=at);const k=Se.get(E),L=p.state.lights,ee=p.state.shadowsArray,ce=L.state.version,me=ge.getParameters(E,L.state,ee,U,H),_e=ge.getProgramCacheKey(me);let Re=k.programs;k.environment=E.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(E.isMeshStandardMaterial?z:S).get(E.envMap||k.environment),k.envMapRotation=k.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Re===void 0&&(E.addEventListener("dispose",ze),Re=new Map,k.programs=Re);let Ce=Re.get(_e);if(Ce!==void 0){if(k.currentProgram===Ce&&k.lightsStateVersion===ce)return Ll(E,me),Ce}else me.uniforms=ge.getUniforms(E),E.onBeforeCompile(me,v),Ce=ge.acquireProgram(me,_e),Re.set(_e,Ce),k.uniforms=me.uniforms;const Me=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Me.clippingPlanes=te.uniform),Ll(E,me),k.needsLights=Yu(E),k.lightsStateVersion=ce,k.needsLights&&(Me.ambientLightColor.value=L.state.ambient,Me.lightProbe.value=L.state.probe,Me.directionalLights.value=L.state.directional,Me.directionalLightShadows.value=L.state.directionalShadow,Me.spotLights.value=L.state.spot,Me.spotLightShadows.value=L.state.spotShadow,Me.rectAreaLights.value=L.state.rectArea,Me.ltc_1.value=L.state.rectAreaLTC1,Me.ltc_2.value=L.state.rectAreaLTC2,Me.pointLights.value=L.state.point,Me.pointLightShadows.value=L.state.pointShadow,Me.hemisphereLights.value=L.state.hemi,Me.directionalShadowMap.value=L.state.directionalShadowMap,Me.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Me.spotShadowMap.value=L.state.spotShadowMap,Me.spotLightMatrix.value=L.state.spotLightMatrix,Me.spotLightMap.value=L.state.spotLightMap,Me.pointShadowMap.value=L.state.pointShadowMap,Me.pointShadowMatrix.value=L.state.pointShadowMatrix),k.currentProgram=Ce,k.uniformsList=null,Ce}function Pl(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Na.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Ll(E,U){const H=Se.get(E);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Xu(E,U,H,k,L){U.isScene!==!0&&(U=at),A.resetTextureUnits();const ee=U.fog,ce=k.isMeshStandardMaterial?U.environment:null,me=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:xn,_e=(k.isMeshStandardMaterial?z:S).get(k.envMap||ce),Re=k.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ce=!!H.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Me=!!H.morphAttributes.position,Xe=!!H.morphAttributes.normal,et=!!H.morphAttributes.color;let tt=tr;k.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(tt=v.toneMapping);const ft=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,it=ft!==void 0?ft.length:0,ve=Se.get(k),hr=p.state.lights;if($===!0&&(pe===!0||E!==x)){const Ut=E===x&&k.id===y;te.setState(k,E,Ut)}let ur=!1;k.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==hr.state.version||ve.outputColorSpace!==me||L.isBatchedMesh&&ve.batching===!1||!L.isBatchedMesh&&ve.batching===!0||L.isBatchedMesh&&ve.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&ve.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&ve.instancing===!1||!L.isInstancedMesh&&ve.instancing===!0||L.isSkinnedMesh&&ve.skinning===!1||!L.isSkinnedMesh&&ve.skinning===!0||L.isInstancedMesh&&ve.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&ve.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&ve.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&ve.instancingMorph===!1&&L.morphTexture!==null||ve.envMap!==_e||k.fog===!0&&ve.fog!==ee||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==te.numPlanes||ve.numIntersection!==te.numIntersection)||ve.vertexAlphas!==Re||ve.vertexTangents!==Ce||ve.morphTargets!==Me||ve.morphNormals!==Xe||ve.morphColors!==et||ve.toneMapping!==tt||ve.morphTargetsCount!==it)&&(ur=!0):(ur=!0,ve.__version=k.version);let ci=ve.currentProgram;ur===!0&&(ci=aa(k,U,L));let Nr=!1,Wt=!1,En=!1;const Qe=ci.getUniforms(),gi=ve.uniforms;if(Ee.useProgram(ci.program)&&(Nr=!0,Wt=!0,En=!0),k.id!==y&&(y=k.id,Wt=!0),Nr||x!==E){Ee.buffers.depth.getReversed()?(ne.copy(E.projectionMatrix),Kd(ne),Zd(ne),Qe.setValue(I,"projectionMatrix",ne)):Qe.setValue(I,"projectionMatrix",E.projectionMatrix),Qe.setValue(I,"viewMatrix",E.matrixWorldInverse);const Ut=Qe.map.cameraPosition;Ut!==void 0&&Ut.setValue(I,we.setFromMatrixPosition(E.matrixWorld)),Fe.logarithmicDepthBuffer&&Qe.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Qe.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,Wt=!0,En=!0)}if(L.isSkinnedMesh){Qe.setOptional(I,L,"bindMatrix"),Qe.setOptional(I,L,"bindMatrixInverse");const Ut=L.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Qe.setValue(I,"boneTexture",Ut.boneTexture,A))}L.isBatchedMesh&&(Qe.setOptional(I,L,"batchingTexture"),Qe.setValue(I,"batchingTexture",L._matricesTexture,A),Qe.setOptional(I,L,"batchingIdTexture"),Qe.setValue(I,"batchingIdTexture",L._indirectTexture,A),Qe.setOptional(I,L,"batchingColorTexture"),L._colorsTexture!==null&&Qe.setValue(I,"batchingColorTexture",L._colorsTexture,A));const bn=H.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&Ae.update(L,H,ci),(Wt||ve.receiveShadow!==L.receiveShadow)&&(ve.receiveShadow=L.receiveShadow,Qe.setValue(I,"receiveShadow",L.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(gi.envMap.value=_e,gi.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(gi.envMapIntensity.value=U.environmentIntensity),Wt&&(Qe.setValue(I,"toneMappingExposure",v.toneMappingExposure),ve.needsLights&&qu(gi,En),ee&&k.fog===!0&&se.refreshFogUniforms(gi,ee),se.refreshMaterialUniforms(gi,k,G,j,p.state.transmissionRenderTarget[E.id]),Na.upload(I,Pl(ve),gi,A)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Na.upload(I,Pl(ve),gi,A),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Qe.setValue(I,"center",L.center),Qe.setValue(I,"modelViewMatrix",L.modelViewMatrix),Qe.setValue(I,"normalMatrix",L.normalMatrix),Qe.setValue(I,"modelMatrix",L.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ut=k.uniformsGroups;for(let Tn=0,Vi=Ut.length;Tn<Vi;Tn++){const Dl=Ut[Tn];D.update(Dl,ci),D.bind(Dl,ci)}}return ci}function qu(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Yu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,U,H){Se.get(E.texture).__webglTexture=U,Se.get(E.depthTexture).__webglTexture=H;const k=Se.get(E);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=H===void 0,k.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const H=Se.get(E);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,H=0){R=E,T=U,w=H;let k=!0,L=null,ee=!1,ce=!1;if(E){const me=Se.get(E);if(me.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(I.FRAMEBUFFER,null),k=!1;else if(me.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(me.__hasExternalTextures)A.rebindTextures(E,Se.get(E.texture).__webglTexture,Se.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ce=E.depthTexture;if(me.__boundDepthTexture!==Ce){if(Ce!==null&&Se.has(Ce)&&(E.width!==Ce.image.width||E.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const _e=E.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(ce=!0);const Re=Se.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?L=Re[U][H]:L=Re[U],ee=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?L=Se.get(E).__webglMultisampledFramebuffer:Array.isArray(Re)?L=Re[H]:L=Re,C.copy(E.viewport),B.copy(E.scissor),F=E.scissorTest}else C.copy(xe).multiplyScalar(G).floor(),B.copy(Te).multiplyScalar(G).floor(),F=Ie;if(Ee.bindFramebuffer(I.FRAMEBUFFER,L)&&k&&Ee.drawBuffers(E,L),Ee.viewport(C),Ee.scissor(B),Ee.setScissorTest(F),ee){const me=Se.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,H)}else if(ce){const me=Se.get(E.texture),_e=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,me.__webglTexture,H||0,_e)}y=-1},this.readRenderTargetPixels=function(E,U,H,k,L,ee,ce){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ce!==void 0&&(me=me[ce]),me){Ee.bindFramebuffer(I.FRAMEBUFFER,me);try{const _e=E.texture,Re=_e.format,Ce=_e.type;if(!Fe.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-k&&H>=0&&H<=E.height-L&&I.readPixels(U,H,k,L,De.convert(Re),De.convert(Ce),ee)}finally{const _e=R!==null?Se.get(R).__webglFramebuffer:null;Ee.bindFramebuffer(I.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(E,U,H,k,L,ee,ce){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ce!==void 0&&(me=me[ce]),me){const _e=E.texture,Re=_e.format,Ce=_e.type;if(!Fe.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-k&&H>=0&&H<=E.height-L){Ee.bindFramebuffer(I.FRAMEBUFFER,me);const Me=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Me),I.bufferData(I.PIXEL_PACK_BUFFER,ee.byteLength,I.STREAM_READ),I.readPixels(U,H,k,L,De.convert(Re),De.convert(Ce),0);const Xe=R!==null?Se.get(R).__webglFramebuffer:null;Ee.bindFramebuffer(I.FRAMEBUFFER,Xe);const et=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await jd(I,et,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Me),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ee),I.deleteBuffer(Me),I.deleteSync(et),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,H=0){E.isTexture!==!0&&(In("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const k=Math.pow(2,-H),L=Math.floor(E.image.width*k),ee=Math.floor(E.image.height*k),ce=U!==null?U.x:0,me=U!==null?U.y:0;A.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,ce,me,L,ee),Ee.unbindTexture()},this.copyTextureToTexture=function(E,U,H=null,k=null,L=0){E.isTexture!==!0&&(In("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1],U=arguments[2],L=arguments[3]||0,H=null);let ee,ce,me,_e,Re,Ce,Me,Xe,et;const tt=E.isCompressedTexture?E.mipmaps[L]:E.image;H!==null?(ee=H.max.x-H.min.x,ce=H.max.y-H.min.y,me=H.isBox3?H.max.z-H.min.z:1,_e=H.min.x,Re=H.min.y,Ce=H.isBox3?H.min.z:0):(ee=tt.width,ce=tt.height,me=tt.depth||1,_e=0,Re=0,Ce=0),k!==null?(Me=k.x,Xe=k.y,et=k.z):(Me=0,Xe=0,et=0);const ft=De.convert(U.format),it=De.convert(U.type);let ve;U.isData3DTexture?(A.setTexture3D(U,0),ve=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),ve=I.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),ve=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const hr=I.getParameter(I.UNPACK_ROW_LENGTH),ur=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ci=I.getParameter(I.UNPACK_SKIP_PIXELS),Nr=I.getParameter(I.UNPACK_SKIP_ROWS),Wt=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,tt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,tt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_e),I.pixelStorei(I.UNPACK_SKIP_ROWS,Re),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ce);const En=E.isDataArrayTexture||E.isData3DTexture,Qe=U.isDataArrayTexture||U.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const gi=Se.get(E),bn=Se.get(U),Ut=Se.get(gi.__renderTarget),Tn=Se.get(bn.__renderTarget);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,Ut.__webglFramebuffer),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,Tn.__webglFramebuffer);for(let Vi=0;Vi<me;Vi++)En&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Se.get(E).__webglTexture,L,Ce+Vi),E.isDepthTexture?(Qe&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Se.get(U).__webglTexture,L,et+Vi),I.blitFramebuffer(_e,Re,ee,ce,Me,Xe,ee,ce,I.DEPTH_BUFFER_BIT,I.NEAREST)):Qe?I.copyTexSubImage3D(ve,L,Me,Xe,et+Vi,_e,Re,ee,ce):I.copyTexSubImage2D(ve,L,Me,Xe,et+Vi,_e,Re,ee,ce);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Qe?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(ve,L,Me,Xe,et,ee,ce,me,ft,it,tt.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(ve,L,Me,Xe,et,ee,ce,me,ft,tt.data):I.texSubImage3D(ve,L,Me,Xe,et,ee,ce,me,ft,it,tt):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,L,Me,Xe,ee,ce,ft,it,tt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,L,Me,Xe,tt.width,tt.height,ft,tt.data):I.texSubImage2D(I.TEXTURE_2D,L,Me,Xe,ee,ce,ft,it,tt);I.pixelStorei(I.UNPACK_ROW_LENGTH,hr),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ur),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ci),I.pixelStorei(I.UNPACK_SKIP_ROWS,Nr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Wt),L===0&&U.generateMipmaps&&I.generateMipmap(ve),Ee.unbindTexture()},this.copyTextureToTexture3D=function(E,U,H=null,k=null,L=0){return E.isTexture!==!0&&(In("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,k=arguments[1]||null,E=arguments[2],U=arguments[3],L=arguments[4]||0),In('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,H,k,L)},this.initRenderTarget=function(E){Se.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Ee.unbindTexture()},this.resetState=function(){T=0,w=0,R=null,Ee.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}class Xh extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Gn extends Sn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ka=new N,Va=new N,Ic=new nt,Ln=new Rh,Aa=new Ja,Is=new N,Nc=new N;class Io extends Mt{constructor(e=new Qt,t=new Gn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let n=1,a=t.count;n<a;n++)ka.fromBufferAttribute(t,n-1),Va.fromBufferAttribute(t,n),r[n]=r[n-1],r[n]+=ka.distanceTo(Va);e.setAttribute("lineDistance",new Dt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,a=e.params.Line.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Aa.copy(r.boundingSphere),Aa.applyMatrix4(n),Aa.radius+=a,e.ray.intersectsSphere(Aa)===!1)return;Ic.copy(n).invert(),Ln.copy(e.ray).applyMatrix4(Ic);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=r.index,d=r.attributes.position;if(h!==null){const u=Math.max(0,s.start),m=Math.min(h.count,s.start+s.count);for(let f=u,_=m-1;f<_;f+=c){const g=h.getX(f),p=h.getX(f+1),b=Ra(this,e,Ln,l,g,p);b&&t.push(b)}if(this.isLineLoop){const f=h.getX(m-1),_=h.getX(u),g=Ra(this,e,Ln,l,f,_);g&&t.push(g)}}else{const u=Math.max(0,s.start),m=Math.min(d.count,s.start+s.count);for(let f=u,_=m-1;f<_;f+=c){const g=Ra(this,e,Ln,l,f,f+1);g&&t.push(g)}if(this.isLineLoop){const f=Ra(this,e,Ln,l,m-1,u);f&&t.push(f)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const s=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}}function Ra(i,e,t,r,n,a){const s=i.geometry.attributes.position;if(ka.fromBufferAttribute(s,n),Va.fromBufferAttribute(s,a),t.distanceSqToSegment(ka,Va,Is,Nc)>r)return;Is.applyMatrix4(i.matrixWorld);const o=e.ray.origin.distanceTo(Is);if(!(o<e.near||o>e.far))return{distance:o,point:Nc.clone().applyMatrix4(i.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:i}}const Oc=new N,Fc=new N;class qh extends Io{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let n=0,a=t.count;n<a;n+=2)Oc.fromBufferAttribute(t,n),Fc.fromBufferAttribute(t,n+1),r[n]=n===0?0:r[n-1],r[n+1]=r[n]+Oc.distanceTo(Fc);e.setAttribute("lineDistance",new Dt(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nl extends Qt{constructor(e=1,t=32,r=16,n=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:n,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const l=Math.min(s+o,Math.PI);let c=0;const h=[],d=new N,u=new N,m=[],f=[],_=[],g=[];for(let p=0;p<=r;p++){const b=[],M=p/r;let v=0;p===0&&s===0?v=.5/t:p===r&&l===Math.PI&&(v=-.5/t);for(let P=0;P<=t;P++){const T=P/t;d.x=-e*Math.cos(n+T*a)*Math.sin(s+M*o),d.y=e*Math.cos(s+M*o),d.z=e*Math.sin(n+T*a)*Math.sin(s+M*o),f.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(T+v,1-M),b.push(c++)}h.push(b)}for(let p=0;p<r;p++)for(let b=0;b<t;b++){const M=h[p][b+1],v=h[p][b],P=h[p+1][b],T=h[p+1][b+1];(p!==0||s>0)&&m.push(M,v,T),(p!==r-1||l<Math.PI)&&m.push(v,P,T)}this.setIndex(m),this.setAttribute("position",new Dt(f,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sv extends Qt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],r=new Set,n=new N,a=new N;if(e.index!==null){const s=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],u=d.start,m=d.count;for(let f=u,_=u+m;f<_;f+=3)for(let g=0;g<3;g++){const p=o.getX(f+g),b=o.getX(f+(g+1)%3);n.fromBufferAttribute(s,p),a.fromBufferAttribute(s,b),Bc(n,a,r)===!0&&(t.push(n.x,n.y,n.z),t.push(a.x,a.y,a.z))}}}else{const s=e.attributes.position;for(let o=0,l=s.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,d=3*o+(c+1)%3;n.fromBufferAttribute(s,h),a.fromBufferAttribute(s,d),Bc(n,a,r)===!0&&(t.push(n.x,n.y,n.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new Dt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Bc(i,e,t){const r=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(r)===!0||t.has(n)===!0?!1:(t.add(r),t.add(n),!0)}class Zr extends Sn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eh,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ov extends Gn{static get type(){return"LineDashedMaterial"}constructor(e){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const zc={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class lv{constructor(e,t,r){const n=this;let a=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(h){o++,a===!1&&n.onStart!==void 0&&n.onStart(h,s,o),a=!0},this.itemEnd=function(h){s++,n.onProgress!==void 0&&n.onProgress(h,s,o),s===o&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const m=c[d],f=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return f}return null}}}const cv=new lv;class al{constructor(e){this.manager=e!==void 0?e:cv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(n,a){r.load(e,n,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}al.DEFAULT_MATERIAL_NAME="__DEFAULT";class hv extends al{constructor(e){super(e)}load(e,t,r,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=zc.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const o=Vn("img");function l(){h(),zc.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(d){h(),n&&n(d),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class uv extends al{constructor(e){super(e)}load(e,t,r,n){const a=new Lt,s=new hv(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},r,n),a}}class sl extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ns=new nt,Hc=new N,kc=new N;class Yh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new il,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Hc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hc),kc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kc),t.updateMatrixWorld(),Ns.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ns),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ns)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vc=new nt,Dn=new N,Os=new N;class dv extends Yh{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,n=this.matrix,a=e.distance||r.far;a!==r.far&&(r.far=a,r.updateProjectionMatrix()),Dn.setFromMatrixPosition(e.matrixWorld),r.position.copy(Dn),Os.copy(r.position),Os.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Os),r.updateMatrixWorld(),n.makeTranslation(-Dn.x,-Dn.y,-Dn.z),Vc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vc)}}class pv extends sl{constructor(e,t,r=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=n,this.shadow=new dv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class fv extends Yh{constructor(){super(new Bh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mv extends sl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new fv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gv extends sl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class jh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Gc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Gc(){return performance.now()}class _v extends qh{constructor(e=10,t=10,r=4473924,n=8947848){r=new He(r),n=new He(n);const a=t/2,s=e/t,o=e/2,l=[],c=[];for(let u=0,m=0,f=-o;u<=t;u++,f+=s){l.push(-o,0,f,o,0,f),l.push(f,0,-o,f,0,o);const _=u===a?r:n;_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3}const h=new Qt;h.setAttribute("position",new Dt(l,3)),h.setAttribute("color",new Dt(c,3));const d=new Gn({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ko}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ko);class vv{constructor(){this.ctx=null,this.enabled=!1,this.masterGain=null}init(){if(!this.ctx)try{const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.28,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination)}catch(e){console.warn("Web Audio not supported",e)}}toggle(){return this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),this.enabled=!this.enabled,this.enabled&&this.playBlueprintUnfold(),this.enabled}playPencilScratch(){if(!this.enabled||!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),r=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(1800,e),t.frequency.exponentialRampToValueAtTime(600,e+.07),r.gain.setValueAtTime(.08,e),r.gain.exponentialRampToValueAtTime(.001,e+.07),t.connect(r),r.connect(this.masterGain),t.start(e),t.stop(e+.07)}playBlueprintUnfold(){if(!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.sampleRate*.25,r=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=r.getChannelData(0);for(let l=0;l<t;l++)n[l]=(Math.random()*2-1)*Math.exp(-l/(t*.4));const a=this.ctx.createBufferSource();a.buffer=r;const s=this.ctx.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(2200,e),s.Q.setValueAtTime(2.5,e);const o=this.ctx.createGain();o.gain.setValueAtTime(.18,e),o.gain.exponentialRampToValueAtTime(.001,e+.25),a.connect(s),s.connect(o),o.connect(this.masterGain),a.start(e)}playCaliperClick(){if(!this.enabled||!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),r=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(880,e),t.frequency.exponentialRampToValueAtTime(220,e+.04),r.gain.setValueAtTime(.15,e),r.gain.exponentialRampToValueAtTime(.001,e+.04),t.connect(r),r.connect(this.masterGain),t.start(e),t.stop(e+.04)}playStructuralClack(){if(!this.enabled||!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),r=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(110,e),t.frequency.exponentialRampToValueAtTime(45,e+.18),r.gain.setValueAtTime(.2,e),r.gain.exponentialRampToValueAtTime(.001,e+.2),t.connect(r),r.connect(this.masterGain),t.start(e),t.stop(e+.2);const n=this.ctx.createOscillator(),a=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(3200,e),n.frequency.exponentialRampToValueAtTime(1200,e+.05),a.gain.setValueAtTime(.12,e),a.gain.exponentialRampToValueAtTime(.001,e+.06),n.connect(a),a.connect(this.masterGain),n.start(e),n.stop(e+.06)}playAwakening(){if(this.init(),!this.ctx)return;this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime;[220,277.18,329.63,440].forEach((t,r)=>{const n=this.ctx.createOscillator(),a=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(t,e),a.gain.setValueAtTime(.001,e),a.gain.linearRampToValueAtTime(.06/(r+1),e+.3),a.gain.exponentialRampToValueAtTime(1e-4,e+1.8),n.connect(a),a.connect(this.masterGain),n.start(e),n.stop(e+1.8)})}}const At=new vv;class xv{constructor(e){this.canvas=e,this.scene=null,this.camera=null,this.renderer=null,this.rootAssembly=null,this.groupGround=null,this.groupColumns=null,this.groupBeams=null,this.groupSlabs=null,this.groupStairs=null,this.groupPerspectiveRays=null,this.groupDomeVault=null,this.groupAnnotations=null,this.explodedProgress=0,this.targetExploded=0,this.isExploded=!1,this.visualMode="blueprint",this.layers={grid:!0,columns:!0,beams:!0,slabs:!0,stairs:!0,perspectiveRays:!0,dome:!0,annotations:!0,wireframe:!1},this.isDragging=!1,this.previousMousePosition={x:0,y:0},this.targetRotation={x:.35,y:-.6},this.rotationSpeed={x:0,y:.0018},this.clock=new jh,this.init()}init(){this.scene=new Xh;const e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.camera=new Ot(42,e/t,.1,120),this.camera.position.set(12,9,14),this.camera.lookAt(0,2,0),this.renderer=new Wh({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.resize();const r=new gv(16777215,.65);this.scene.add(r);const n=new mv(16777215,1.2);n.position.set(10,16,12),this.scene.add(n),this.accentLight=new pv(3775958,2.5,35),this.accentLight.position.set(-6,6,-4),this.scene.add(this.accentLight),this.buildWorld(),window.addEventListener("resize",()=>this.resize()),this.setupInteractions(),this.animate()}resize(){const e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}setupInteractions(){const e=this.canvas;e.addEventListener("mousedown",t=>{this.isDragging=!0,this.previousMousePosition={x:t.clientX,y:t.clientY}}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),e.addEventListener("mousemove",t=>{if(!this.isDragging)return;const r=t.clientX-this.previousMousePosition.x,n=t.clientY-this.previousMousePosition.y;this.targetRotation.y+=r*.007,this.targetRotation.x+=n*.007,this.targetRotation.x=Math.max(-.25,Math.min(1.2,this.targetRotation.x)),this.previousMousePosition={x:t.clientX,y:t.clientY}}),e.addEventListener("touchstart",t=>{t.touches.length===1&&(this.isDragging=!0,this.previousMousePosition={x:t.touches[0].clientX,y:t.touches[0].clientY})},{passive:!0}),window.addEventListener("touchend",()=>{this.isDragging=!1}),e.addEventListener("touchmove",t=>{if(!this.isDragging||t.touches.length!==1)return;const r=t.touches[0].clientX-this.previousMousePosition.x,n=t.touches[0].clientY-this.previousMousePosition.y;this.targetRotation.y+=r*.009,this.targetRotation.x+=n*.009,this.targetRotation.x=Math.max(-.25,Math.min(1.2,this.targetRotation.x)),this.previousMousePosition={x:t.touches[0].clientX,y:t.touches[0].clientY}},{passive:!0})}buildWorld(){this.rootAssembly=new yt,this.scene.add(this.rootAssembly),this.matColumn=new Zr({color:15070463,roughness:.25}),this.matCorbel=new Zr({color:9227762,roughness:.35}),this.matBeam=new Zr({color:3775958,roughness:.3,metalness:.2}),this.matSlab=new Zr({color:16251903,roughness:.2}),this.matStair=new Zr({color:16777215,roughness:.2,metalness:.1}),this.matRedVector=new Gn({color:16720435,transparent:!0,opacity:.85,linewidth:2}),this.matCyanVector=new Gn({color:3775958,transparent:!0,opacity:.5}),this.matGold=new Zr({color:15051068,roughness:.3,metalness:.6}),this.groupGround=new yt;const e=new _v(18,36,3775958,13232636);this.groupGround.add(e);const t=new Yt(1.4,.25,1.4),r=[{x:-4,z:-3},{x:0,z:-3},{x:4,z:-3},{x:-4,z:3},{x:0,z:3},{x:4,z:3}];r.forEach(M=>{const v=new st(t,this.matCorbel);v.position.set(M.x,.125,M.z),this.groupGround.add(v)}),this.rootAssembly.add(this.groupGround),this.groupColumns=new yt;const n=new Yt(.6,5.4,.6),a=new Yt(.9,.4,.6);r.forEach(M=>{const v=new yt;v.position.set(M.x,2.8,M.z);const P=new st(n,this.matColumn);v.add(P);const T=new st(a,this.matCorbel);T.position.set(0,-.6,0),v.add(T);const w=new st(a,this.matCorbel);w.position.set(0,1.9,0),v.add(w),this.groupColumns.add(v)}),this.rootAssembly.add(this.groupColumns),this.groupBeams=new yt,this.beamsL1=new yt,this.beamsL2=new yt;const s=new Yt(8.6,.6,.7),o=new st(s,this.matBeam);o.position.set(0,2.5,-3),this.beamsL1.add(o);const l=new st(s,this.matBeam);l.position.set(0,2.5,3),this.beamsL1.add(l);const c=new st(s,this.matBeam);c.position.set(0,5,-3),this.beamsL2.add(c);const h=new st(s,this.matBeam);h.position.set(0,5,3),this.beamsL2.add(h),this.groupBeams.add(this.beamsL1),this.groupBeams.add(this.beamsL2),this.rootAssembly.add(this.groupBeams),this.groupSlabs=new yt,this.slabsL1=new yt,this.slabsL2=new yt;for(let M=-3;M<=3;M++){const v=new Yt(1.15,.3,5.8),P=new st(v,this.matSlab);P.position.set(M*1.22,2.8,0),this.slabsL1.add(P);const T=new st(v,this.matSlab);T.position.set(M*1.22,5.3,0),this.slabsL2.add(T)}this.groupSlabs.add(this.slabsL1),this.groupSlabs.add(this.slabsL2),this.rootAssembly.add(this.groupSlabs),this.groupStairs=new yt;const d=14,u=2.4,m=.35,f=.18;for(let M=0;M<d;M++){const v=new Yt(u,f,m),P=new st(v,this.matStair);P.position.set(0,(M+1)*f,(d/2-M)*m),this.groupStairs.add(P)}this.rootAssembly.add(this.groupStairs),this.groupPerspectiveRays=new yt;const _=new N(0,8.5,-6);for(let M=-5;M<=5;M++){const v=new N(M*1.8,0,5),P=new Qt().setFromPoints([_,v]),T=new Io(P,this.matRedVector);this.groupPerspectiveRays.add(T)}this.rootAssembly.add(this.groupPerspectiveRays),this.groupDomeVault=new yt;const g=new nl(6.5,18,12,0,Math.PI*2,0,Math.PI*.45),p=new sv(g),b=new qh(p,this.matRedVector);b.position.set(0,5.5,-2),this.groupDomeVault.add(b),this.rootAssembly.add(this.groupDomeVault),this.groupAnnotations=new yt,this.createDimCallout(new N(-4.5,0,3.6),new N(4.5,0,3.6),"BAY: 9000 mm"),this.createDimCallout(new N(-4.8,0,-3.2),new N(-4.8,5.4,-3.2),"HEIGHT: 5400 mm"),this.rootAssembly.add(this.groupAnnotations)}createDimCallout(e,t,r){const n=new Qt().setFromPoints([e,t]),a=new Io(n,new ov({color:3775958,dashSize:.4,gapSize:.2}));a.computeLineDistances(),this.groupAnnotations.add(a);const s=new st(new Yt(.18,.18,.18),this.matGold);s.position.copy(e),this.groupAnnotations.add(s);const o=new st(new Yt(.18,.18,.18),this.matGold);o.position.copy(t),this.groupAnnotations.add(o)}toggleExploded(){return this.isExploded=!this.isExploded,this.targetExploded=this.isExploded?1:0,At.playStructuralClack(),this.isExploded}toggleLayer(e){return e in this.layers?(this.layers[e]=!this.layers[e],At.playCaliperClick(),e==="grid"&&this.groupGround&&(this.groupGround.visible=this.layers.grid),e==="columns"&&this.groupColumns&&(this.groupColumns.visible=this.layers.columns),e==="beams"&&this.groupBeams&&(this.groupBeams.visible=this.layers.beams),e==="slabs"&&this.groupSlabs&&(this.groupSlabs.visible=this.layers.slabs),e==="stairs"&&this.groupStairs&&(this.groupStairs.visible=this.layers.stairs),e==="perspectiveRays"&&this.groupPerspectiveRays&&(this.groupPerspectiveRays.visible=this.layers.perspectiveRays),e==="dome"&&this.groupDomeVault&&(this.groupDomeVault.visible=this.layers.dome),e==="annotations"&&this.groupAnnotations&&(this.groupAnnotations.visible=this.layers.annotations),e==="wireframe"&&this.setWireframeMode(this.layers.wireframe),this.layers[e]):!1}setWireframeMode(e){this.layers.wireframe=e,this.rootAssembly.traverse(t=>{t.isMesh&&(t.material.wireframe=e)})}cycleVisualMode(){const e=["blueprint","drafting","crimson"],t=(e.indexOf(this.visualMode)+1)%e.length;return this.visualMode=e[t],At.playPencilScratch(),this.visualMode==="blueprint"?(this.matColumn.color.setHex(15070463),this.matBeam.color.setHex(3775958),this.matSlab.color.setHex(16251903),this.matRedVector.color.setHex(16720435),this.accentLight.color.setHex(3775958)):this.visualMode==="drafting"?(this.matColumn.color.setHex(1522779),this.matBeam.color.setHex(1319213),this.matSlab.color.setHex(9227762),this.matRedVector.color.setHex(3775958),this.accentLight.color.setHex(9227762)):(this.matColumn.color.setHex(1319213),this.matBeam.color.setHex(16720435),this.matSlab.color.setHex(16777215),this.matRedVector.color.setHex(16720435),this.accentLight.color.setHex(16720435)),this.visualMode}resetCamera(){this.targetRotation.x=.35,this.targetRotation.y=-.6,this.camera.position.set(12,9,14),this.camera.lookAt(0,2,0),this.targetExploded=0,this.isExploded=!1,At.playBlueprintUnfold()}animate(){requestAnimationFrame(this.animate.bind(this)),this.clock.getDelta(),this.isDragging||(this.targetRotation.y+=this.rotationSpeed.y),this.rootAssembly.rotation.y+=(this.targetRotation.y-this.rootAssembly.rotation.y)*.08,this.rootAssembly.rotation.x+=(this.targetRotation.x-this.rootAssembly.rotation.x)*.08,this.explodedProgress+=(this.targetExploded-this.explodedProgress)*.08,this.groupDomeVault&&(this.groupDomeVault.position.y=5.5+this.explodedProgress*4.2),this.slabsL2&&(this.slabsL2.position.y=this.explodedProgress*2.8),this.beamsL2&&(this.beamsL2.position.y=this.explodedProgress*1.8),this.slabsL1&&(this.slabsL1.position.y=this.explodedProgress*1),this.groupStairs&&(this.groupStairs.position.z=this.explodedProgress*1.6),this.renderer.render(this.scene,this.camera)}}class yv{constructor(e){this.canvas=e,this.scene=null,this.camera=null,this.renderer=null,this.planes=[],this.mouse={x:.5,y:.5,targetX:.5,targetY:.5,velX:0,velY:0},this.clock=new jh,this.init()}init(){this.scene=new Xh;const e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||500;this.camera=new Ot(45,e/t,.1,100),this.camera.position.z=5,this.renderer=new Wh({canvas:this.canvas,antialias:!0,alpha:!0}),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.setupGalleryMesh(e,t),this.canvas.addEventListener("mousemove",r=>{const n=this.canvas.getBoundingClientRect(),a=(r.clientX-n.left)/n.width,s=1-(r.clientY-n.top)/n.height;this.mouse.velX=Math.abs(a-this.mouse.targetX),this.mouse.velY=Math.abs(s-this.mouse.targetY),this.mouse.targetX=a,this.mouse.targetY=s}),window.addEventListener("resize",this.onResize.bind(this)),this.animate()}setupGalleryMesh(e,t){const r=new uv,n=r.load("./images/manga-awakening.jpg"),a=r.load("./images/architectural-perspective.jpg");n.generateMipmaps=!0,a.generateMipmaps=!0;const s=new ia(6.4,3.6,64,64);this.uniforms={uTex1:{value:a},uTex2:{value:n},uTransition:{value:0},uMouse:{value:new We(.5,.5)},uHover:{value:0},uVelocity:{value:0},uTime:{value:0},uResolution:{value:new We(e,t)}};const o=`
      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uHover;
      varying vec2 vUv;
      varying vec3 vPos;

      void main() {
        vUv = uv;
        vec3 pos = position;

        // Wave distortion reacting to mouse distance
        float dist = distance(uv, uMouse);
        float wave = sin(dist * 20.0 - uTime * 4.0) * 0.08 * uHover * smoothstep(0.6, 0.0, dist);
        pos.z += wave;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        vPos = pos;
      }
    `,l=`
      uniform sampler2D uTex1;
      uniform sampler2D uTex2;
      uniform float uTransition;
      uniform vec2 uMouse;
      uniform float uHover;
      uniform float uVelocity;
      uniform float uTime;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv;

        // Mouse displacement ripple
        float dist = distance(uv, uMouse);
        vec2 offset = normalize(uv - uMouse) * sin(dist * 24.0 - uTime * 5.0) * 0.02 * uHover;

        // Chromatic Aberration / RGB Split based on mouse velocity
        float split = 0.008 * (1.0 + uVelocity * 15.0) * uHover;
        
        vec4 col1R = texture2D(uTex1, uv + offset + vec2(split, 0.0));
        vec4 col1G = texture2D(uTex1, uv + offset);
        vec4 col1B = texture2D(uTex1, uv + offset - vec2(split, 0.0));
        vec4 col1 = vec4(col1R.r, col1G.g, col1B.b, 1.0);

        vec4 col2R = texture2D(uTex2, uv + offset + vec2(split, 0.0));
        vec4 col2G = texture2D(uTex2, uv + offset);
        vec4 col2B = texture2D(uTex2, uv + offset - vec2(split, 0.0));
        vec4 col2 = vec4(col2R.r, col2G.g, col2B.b, 1.0);

        // Crossfade with diagonal slice transition
        float slice = smoothstep(uv.x - 0.2, uv.x + 0.2, uTransition * 1.4);
        vec4 finalCol = mix(col1, col2, slice);

        // Manga ink screentone overlay on hover
        float dotPattern = sin(uv.x * 200.0) * sin(uv.y * 200.0);
        if (dotPattern > 0.8 && uHover > 0.1) {
          finalCol = mix(finalCol, vec4(0.09, 0.24, 0.36, 1.0), 0.25 * uHover);
        }

        gl_FragColor = finalCol;
      }
    `;this.mat=new zi({uniforms:this.uniforms,vertexShader:o,fragmentShader:l}),this.mesh=new st(s,this.mat),this.scene.add(this.mesh)}setTransition(e){this.uniforms&&(this.uniforms.uTransition.value=Math.max(0,Math.min(1,e)))}setHover(e){this.uniforms&&(this.targetHover=e?1:0)}onResize(){const e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||500;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.uniforms&&this.uniforms.uResolution.value.set(e,t)}animate(){requestAnimationFrame(this.animate.bind(this)),this.clock.getDelta();const e=this.clock.getElapsedTime();if(this.mouse.x+=(this.mouse.targetX-this.mouse.x)*.1,this.mouse.y+=(this.mouse.targetY-this.mouse.y)*.1,this.uniforms){this.uniforms.uTime.value=e,this.uniforms.uMouse.value.set(this.mouse.x,this.mouse.y);const t=this.uniforms.uHover.value,r=this.targetHover||0;this.uniforms.uHover.value+=(r-t)*.08,this.uniforms.uVelocity.value+=(this.mouse.velX+this.mouse.velY-this.uniforms.uVelocity.value)*.1,this.mouse.velX*=.9,this.mouse.velY*=.9}this.mesh&&(this.mesh.rotation.y=(this.mouse.x-.5)*.25,this.mesh.rotation.x=-(this.mouse.y-.5)*.2),this.renderer.render(this.scene,this.camera)}}function Di(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Kh(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Jt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Wn={duration:.5,overwrite:!1,delay:0},ol,Et,rt,si=1e8,Ze=1/si,No=Math.PI*2,Sv=No/4,Mv=0,Zh=Math.sqrt,Ev=Math.cos,bv=Math.sin,St=function(i){return typeof i=="string"},ut=function(i){return typeof i=="function"},Hi=function(i){return typeof i=="number"},ll=function(i){return typeof i>"u"},bi=function(i){return typeof i=="object"},zt=function(i){return i!==!1},cl=function(){return typeof window<"u"},Ca=function(i){return ut(i)||St(i)},$h=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ct=Array.isArray,Tv=/random\([^)]+\)/g,wv=/,\s*/g,Wc=/(?:-?\.?\d|\.)+/gi,Jh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Qr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Fs=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Qh=/[+-]=-?[.\d]+/,Av=/[^,'"\[\]\s]+/gi,Rv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,lt,_i,Oo,hl,ei={},Ga={},eu,tu=function(i){return(Ga=fn(i,ei))&&Gt},ul=function(i,e){return console.warn("Invalid property",i,"set to",e,"Missing plugin? gsap.registerPlugin()")},Xn=function(i,e){return!e&&console.warn(i)},iu=function(i,e){return i&&(ei[i]=e)&&Ga&&(Ga[i]=e)||ei},qn=function(){return 0},Cv={suppressEvents:!0,isStart:!0,kill:!1},Oa={suppressEvents:!0,kill:!1},Pv={suppressEvents:!0},dl={},ir=[],Fo={},ru,jt={},Bs={},Xc=30,Fa=[],pl="",fl=function(i){var e=i[0],t,r;if(bi(e)||ut(e)||(i=[i]),!(t=(e._gsap||{}).harness)){for(r=Fa.length;r--&&!Fa[r].targetTest(e););t=Fa[r]}for(r=i.length;r--;)i[r]&&(i[r]._gsap||(i[r]._gsap=new Tu(i[r],t)))||i.splice(r,1);return i},Rr=function(i){return i._gsap||fl(oi(i))[0]._gsap},nu=function(i,e,t){return(t=i[e])&&ut(t)?i[e]():ll(t)&&i.getAttribute&&i.getAttribute(e)||t},Ht=function(i,e){return(i=i.split(",")).forEach(e)||i},pt=function(i){return Math.round(i*1e5)/1e5||0},ot=function(i){return Math.round(i*1e7)/1e7||0},an=function(i,e){var t=e.charAt(0),r=parseFloat(e.substr(2));return i=parseFloat(i),t==="+"?i+r:t==="-"?i-r:t==="*"?i*r:i/r},Lv=function(i,e){for(var t=e.length,r=0;i.indexOf(e[r])<0&&++r<t;);return r<t},Wa=function(){var i=ir.length,e=ir.slice(0),t,r;for(Fo={},ir.length=0,t=0;t<i;t++)r=e[t],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},ml=function(i){return!!(i._initted||i._startAt||i.add)},au=function(i,e,t,r){ir.length&&!Et&&Wa(),i.render(e,t,!!(Et&&e<0&&ml(i))),ir.length&&!Et&&Wa()},su=function(i){var e=parseFloat(i);return(e||e===0)&&(i+"").match(Av).length<2?e:St(i)?i.trim():i},ou=function(i){return i},ti=function(i,e){for(var t in e)t in i||(i[t]=e[t]);return i},Dv=function(i){return function(e,t){for(var r in t)r in e||r==="duration"&&i||r==="ease"||(e[r]=t[r])}},fn=function(i,e){for(var t in e)i[t]=e[t];return i},qc=function i(e,t){for(var r in t)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(e[r]=bi(t[r])?i(e[r]||(e[r]={}),t[r]):t[r]);return e},Xa=function(i,e){var t={},r;for(r in i)r in e||(t[r]=i[r]);return t},Bn=function(i){var e=i.parent||lt,t=i.keyframes?Dv(Ct(i.keyframes)):ti;if(zt(i.inherit))for(;e;)t(i,e.vars.defaults),e=e.parent||e._dp;return i},Uv=function(i,e){for(var t=i.length,r=t===e.length;r&&t--&&i[t]===e[t];);return t<0},lu=function(i,e,t,r,n){var a=i[r],s;if(n)for(s=e[n];a&&a[n]>s;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=i[t],i[t]=e),e._next?e._next._prev=e:i[r]=e,e._prev=a,e.parent=e._dp=i,e},es=function(i,e,t,r){t===void 0&&(t="_first"),r===void 0&&(r="_last");var n=e._prev,a=e._next;n?n._next=a:i[t]===e&&(i[t]=a),a?a._prev=n:i[r]===e&&(i[r]=n),e._next=e._prev=e.parent=null},ar=function(i,e){i.parent&&(!e||i.parent.autoRemoveChildren)&&i.parent.remove&&i.parent.remove(i),i._act=0},Cr=function(i,e){if(i&&(!e||e._end>i._dur||e._start<0))for(var t=i;t;)t._dirty=1,t=t.parent;return i},Iv=function(i){for(var e=i.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return i},Bo=function(i,e,t,r){return i._startAt&&(Et?i._startAt.revert(Oa):i.vars.immediateRender&&!i.vars.autoRevert||i._startAt.render(e,!0,r))},Nv=function i(e){return!e||e._ts&&i(e.parent)},Yc=function(i){return i._repeat?mn(i._tTime,i=i.duration()+i._rDelay)*i:0},mn=function(i,e){var t=Math.floor(i=ot(i/e));return i&&t===i?t-1:t},qa=function(i,e){return(i-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ts=function(i){return i._end=ot(i._start+(i._tDur/Math.abs(i._ts||i._rts||Ze)||0))},is=function(i,e){var t=i._dp;return t&&t.smoothChildTiming&&i._ts&&(i._start=ot(t._time-(i._ts>0?e/i._ts:((i._dirty?i.totalDuration():i._tDur)-e)/-i._ts)),ts(i),t._dirty||Cr(t,i)),i},cu=function(i,e){var t;if((e._time||!e._dur&&e._initted||e._start<i._time&&(e._dur||!e.add))&&(t=qa(i.rawTime(),e),(!e._dur||ra(0,e.totalDuration(),t)-e._tTime>Ze)&&e.render(t,!0)),Cr(i,e)._dp&&i._initted&&i._time>=i._dur&&i._ts){if(i._dur<i.duration())for(t=i;t._dp;)t.rawTime()>=0&&t.totalTime(t._tTime),t=t._dp;i._zTime=-Ze}},xi=function(i,e,t,r){return e.parent&&ar(e),e._start=ot((Hi(t)?t:t||i!==lt?ni(i,t,e):i._time)+e._delay),e._end=ot(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),lu(i,e,"_first","_last",i._sort?"_start":0),zo(e)||(i._recent=e),r||cu(i,e),i._ts<0&&is(i,i._tTime),i},hu=function(i,e){return(ei.ScrollTrigger||ul("scrollTrigger",e))&&ei.ScrollTrigger.create(e,i)},uu=function(i,e,t,r,n){if(_l(i,e,n),!i._initted)return 1;if(!t&&i._pt&&!Et&&(i._dur&&i.vars.lazy!==!1||!i._dur&&i.vars.lazy)&&ru!==Kt.frame)return ir.push(i),i._lazy=[n,r],1},Ov=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},zo=function(i){var e=i.data;return e==="isFromStart"||e==="isStart"},Fv=function(i,e,t,r){var n=i.ratio,a=e<0||!e&&(!i._start&&Ov(i)&&!(!i._initted&&zo(i))||(i._ts<0||i._dp._ts<0)&&!zo(i))?0:1,s=i._rDelay,o=0,l,c,h;if(s&&i._repeat&&(o=ra(0,i._tDur,e),c=mn(o,s),i._yoyo&&c&1&&(a=1-a),c!==mn(i._tTime,s)&&(n=1-a,i.vars.repeatRefresh&&i._initted&&i.invalidate())),a!==n||Et||r||i._zTime===Ze||!e&&i._zTime){if(!i._initted&&uu(i,e,r,t,o))return;for(h=i._zTime,i._zTime=e||(t?Ze:0),t||(t=e&&!h),i.ratio=a,i._from&&(a=1-a),i._time=0,i._tTime=o,l=i._pt;l;)l.r(a,l.d),l=l._next;e<0&&Bo(i,e,t,!0),i._onUpdate&&!t&&Zt(i,"onUpdate"),o&&i._repeat&&!t&&i.parent&&Zt(i,"onRepeat"),(e>=i._tDur||e<0)&&i.ratio===a&&(a&&ar(i,1),!t&&!Et&&(Zt(i,a?"onComplete":"onReverseComplete",!0),i._prom&&i._prom()))}else i._zTime||(i._zTime=e)},Bv=function(i,e,t){var r;if(t>e)for(r=i._first;r&&r._start<=t;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=i._last;r&&r._start>=t;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},gn=function(i,e,t,r){var n=i._repeat,a=ot(e)||0,s=i._tTime/i._tDur;return s&&!r&&(i._time*=a/i._dur),i._dur=a,i._tDur=n?n<0?1e10:ot(a*(n+1)+i._rDelay*n):a,s>0&&!r&&is(i,i._tTime=i._tDur*s),i.parent&&ts(i),t||Cr(i.parent,i),i},jc=function(i){return i instanceof Ft?Cr(i):gn(i,i._dur)},zv={_start:0,endTime:qn,totalDuration:qn},ni=function i(e,t,r){var n=e.labels,a=e._recent||zv,s=e.duration()>=si?a.endTime(!1):e._dur,o,l,c;return St(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?a:r).totalDuration()/100:1)):o<0?(t in n||(n[t]=s),n[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&r&&(l=l/100*(Ct(r)?r[0]:r).totalDuration()),o>1?i(e,t.substr(0,o-1),r)+l:s+l)):t==null?s:+t},zn=function(i,e,t){var r=Hi(e[1]),n=(r?2:1)+(i<2?0:1),a=e[n],s,o;if(r&&(a.duration=e[1]),a.parent=t,i){for(s=a,o=t;o&&!("immediateRender"in s);)s=o.vars.defaults||{},o=zt(o.vars.inherit)&&o.parent;a.immediateRender=zt(s.immediateRender),i<2?a.runBackwards=1:a.startAt=e[n-1]}return new gt(e[0],a,e[n+1])},lr=function(i,e){return i||i===0?e(i):e},ra=function(i,e,t){return t<i?i:t>e?e:t},Rt=function(i,e){return!St(i)||!(e=Rv.exec(i))?"":e[1]},Hv=function(i,e,t){return lr(t,function(r){return ra(i,e,r)})},Ho=[].slice,du=function(i,e){return i&&bi(i)&&"length"in i&&(!e&&!i.length||i.length-1 in i&&bi(i[0]))&&!i.nodeType&&i!==_i},kv=function(i,e,t){return t===void 0&&(t=[]),i.forEach(function(r){var n;return St(r)&&!e||du(r,1)?(n=t).push.apply(n,oi(r)):t.push(r)})||t},oi=function(i,e,t){return rt&&!e&&rt.selector?rt.selector(i):St(i)&&!t&&(Oo||!_n())?Ho.call((e||hl).querySelectorAll(i),0):Ct(i)?kv(i,t):du(i)?Ho.call(i,0):i?[i]:[]},ko=function(i){return i=oi(i)[0]||Xn("Invalid scope")||{},function(e){var t=i.current||i.nativeElement||i;return oi(e,t.querySelectorAll?t:t===i?Xn("Invalid scope")||hl.createElement("div"):i)}},pu=function(i){return i.sort(function(){return .5-Math.random()})},fu=function(i){if(ut(i))return i;var e=bi(i)?i:{each:i},t=Pr(e.ease),r=e.from||0,n=parseFloat(e.base)||0,a={},s=r>0&&r<1,o=isNaN(r)||s,l=e.axis,c=r,h=r;return St(r)?c=h={center:.5,edges:.5,end:1}[r]||0:!s&&o&&(c=r[0],h=r[1]),function(d,u,m){var f=(m||e).length,_=a[f],g,p,b,M,v,P,T,w,R;if(!_){if(R=e.grid==="auto"?0:(e.grid||[1,si])[1],!R){for(T=-si;T<(T=m[R++].getBoundingClientRect().left)&&R<f;);R<f&&R--}for(_=a[f]=[],g=o?Math.min(R,f)*c-.5:r%R,p=R===si?0:o?f*h/R-.5:r/R|0,T=0,w=si,P=0;P<f;P++)b=P%R-g,M=p-(P/R|0),_[P]=v=l?Math.abs(l==="y"?M:b):Zh(b*b+M*M),v>T&&(T=v),v<w&&(w=v);r==="random"&&pu(_),_.max=T-w,_.min=w,_.v=f=(parseFloat(e.amount)||parseFloat(e.each)*(R>f?f-1:l?l==="y"?f/R:R:Math.max(R,f/R))||0)*(r==="edges"?-1:1),_.b=f<0?n-f:n,_.u=Rt(e.amount||e.each)||0,t=t&&f<0?e0(t):t}return f=(_[d]-_.min)/_.max||0,ot(_.b+(t?t(f):f)*_.v)+_.u}},Vo=function(i){var e=Math.pow(10,((i+"").split(".")[1]||"").length);return function(t){var r=ot(Math.round(parseFloat(t)/i)*i*e);return(r-r%1)/e+(Hi(t)?0:Rt(t))}},mu=function(i,e){var t=Ct(i),r,n;return!t&&bi(i)&&(r=t=i.radius||si,i.values?(i=oi(i.values),(n=!Hi(i[0]))&&(r*=r)):i=Vo(i.increment)),lr(e,t?ut(i)?function(a){return n=i(a),Math.abs(n-a)<=r?n:a}:function(a){for(var s=parseFloat(n?a.x:a),o=parseFloat(n?a.y:0),l=si,c=0,h=i.length,d,u;h--;)n?(d=i[h].x-s,u=i[h].y-o,d=d*d+u*u):d=Math.abs(i[h]-s),d<l&&(l=d,c=h);return c=!r||l<=r?i[c]:a,n||c===a||Hi(a)?c:c+Rt(a)}:Vo(i))},gu=function(i,e,t,r){return lr(Ct(i)?!e:t===!0?!!(t=0):!r,function(){return Ct(i)?i[~~(Math.random()*i.length)]:(t=t||1e-5)&&(r=t<1?Math.pow(10,(t+"").length-2):1)&&Math.floor(Math.round((i-t/2+Math.random()*(e-i+t*.99))/t)*t*r)/r})},Vv=function(){for(var i=arguments.length,e=new Array(i),t=0;t<i;t++)e[t]=arguments[t];return function(r){return e.reduce(function(n,a){return a(n)},r)}},Gv=function(i,e){return function(t){return i(parseFloat(t))+(e||Rt(t))}},Wv=function(i,e,t){return vu(i,e,0,1,t)},_u=function(i,e,t){return lr(t,function(r){return i[~~e(r)]})},Xv=function i(e,t,r){var n=t-e;return Ct(e)?_u(e,i(0,e.length),t):lr(r,function(a){return(n+(a-e)%n)%n+e})},qv=function i(e,t,r){var n=t-e,a=n*2;return Ct(e)?_u(e,i(0,e.length-1),t):lr(r,function(s){return s=(a+(s-e)%a)%a||0,e+(s>n?a-s:s)})},Yn=function(i){return i.replace(Tv,function(e){var t=e.indexOf("[")+1,r=e.substring(t||7,t?e.indexOf("]"):e.length-1).split(wv);return gu(t?r:+r[0],t?0:+r[1],+r[2]||1e-5)})},vu=function(i,e,t,r,n){var a=e-i,s=r-t;return lr(n,function(o){return t+((o-i)/a*s||0)})},Yv=function i(e,t,r,n){var a=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!a){var s=St(e),o={},l,c,h,d,u;if(r===!0&&(n=1)&&(r=null),s)e={p:e},t={p:t};else if(Ct(e)&&!Ct(t)){for(h=[],d=e.length,u=d-2,c=1;c<d;c++)h.push(i(e[c-1],e[c]));d--,a=function(m){m*=d;var f=Math.min(u,~~m);return h[f](m-f)},r=t}else n||(e=fn(Ct(e)?[]:{},e));if(!h){for(l in t)gl.call(o,e,l,"get",t[l]);a=function(m){return yl(m,o)||(s?e.p:e)}}}return lr(r,a)},Kc=function(i,e,t){var r=i.labels,n=si,a,s,o;for(a in r)s=r[a]-e,s<0==!!t&&s&&n>(s=Math.abs(s))&&(o=a,n=s);return o},Zt=function(i,e,t){var r=i.vars,n=r[e],a=rt,s=i._ctx,o,l,c;if(n)return o=r[e+"Params"],l=r.callbackScope||i,t&&ir.length&&Wa(),s&&(rt=s),c=o?n.apply(l,o):n.call(l),rt=a,c},On=function(i){return ar(i),i.scrollTrigger&&i.scrollTrigger.kill(!!Et),i.progress()<1&&Zt(i,"onInterrupt"),i},en,xu=[],yu=function(i){if(i)if(i=!i.name&&i.default||i,cl()||i.headless){var e=i.name,t=ut(i),r=e&&!t&&i.init?function(){this._props=[]}:i,n={init:qn,render:yl,add:gl,kill:h0,modifier:c0,rawVars:0},a={targetTest:0,get:0,getSetter:xl,aliases:{},register:0};if(_n(),i!==r){if(jt[e])return;ti(r,ti(Xa(i,n),a)),fn(r.prototype,fn(n,Xa(i,a))),jt[r.prop=e]=r,i.targetTest&&(Fa.push(r),dl[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}iu(e,r),i.register&&i.register(Gt,r,kt)}else xu.push(i)},Ke=255,Fn={aqua:[0,Ke,Ke],lime:[0,Ke,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ke],navy:[0,0,128],white:[Ke,Ke,Ke],olive:[128,128,0],yellow:[Ke,Ke,0],orange:[Ke,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ke,0,0],pink:[Ke,192,203],cyan:[0,Ke,Ke],transparent:[Ke,Ke,Ke,0]},zs=function(i,e,t){return i+=i<0?1:i>1?-1:0,(i*6<1?e+(t-e)*i*6:i<.5?t:i*3<2?e+(t-e)*(2/3-i)*6:e)*Ke+.5|0},Su=function(i,e,t){var r=i?Hi(i)?[i>>16,i>>8&Ke,i&Ke]:0:Fn.black,n,a,s,o,l,c,h,d,u,m;if(!r){if(i.substr(-1)===","&&(i=i.substr(0,i.length-1)),Fn[i])r=Fn[i];else if(i.charAt(0)==="#"){if(i.length<6&&(n=i.charAt(1),a=i.charAt(2),s=i.charAt(3),i="#"+n+n+a+a+s+s+(i.length===5?i.charAt(4)+i.charAt(4):"")),i.length===9)return r=parseInt(i.substr(1,6),16),[r>>16,r>>8&Ke,r&Ke,parseInt(i.substr(7),16)/255];i=parseInt(i.substr(1),16),r=[i>>16,i>>8&Ke,i&Ke]}else if(i.substr(0,3)==="hsl"){if(r=m=i.match(Wc),!e)o=+r[0]%360/360,l=+r[1]/100,c=+r[2]/100,a=c<=.5?c*(l+1):c+l-c*l,n=c*2-a,r.length>3&&(r[3]*=1),r[0]=zs(o+1/3,n,a),r[1]=zs(o,n,a),r[2]=zs(o-1/3,n,a);else if(~i.indexOf("="))return r=i.match(Jh),t&&r.length<4&&(r[3]=1),r}else r=i.match(Wc)||Fn.transparent;r=r.map(Number)}return e&&!m&&(n=r[0]/Ke,a=r[1]/Ke,s=r[2]/Ke,h=Math.max(n,a,s),d=Math.min(n,a,s),c=(h+d)/2,h===d?o=l=0:(u=h-d,l=c>.5?u/(2-h-d):u/(h+d),o=h===n?(a-s)/u+(a<s?6:0):h===a?(s-n)/u+2:(n-a)/u+4,o*=60),r[0]=~~(o+.5),r[1]=~~(l*100+.5),r[2]=~~(c*100+.5)),t&&r.length<4&&(r[3]=1),r},Mu=function(i){var e=[],t=[],r=-1;return i.split(rr).forEach(function(n){var a=n.match(Qr)||[];e.push.apply(e,a),t.push(r+=a.length+1)}),e.c=t,e},Zc=function(i,e,t){var r="",n=(i+r).match(rr),a=e?"hsla(":"rgba(",s=0,o,l,c,h;if(!n)return i;if(n=n.map(function(d){return(d=Su(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),t&&(c=Mu(i),o=t.c,o.join(r)!==c.c.join(r)))for(l=i.replace(rr,"1").split(Qr),h=l.length-1;s<h;s++)r+=l[s]+(~o.indexOf(s)?n.shift()||a+"0,0,0,0)":(c.length?c:n.length?n:t).shift());if(!l)for(l=i.split(rr),h=l.length-1;s<h;s++)r+=l[s]+n[s];return r+l[h]},rr=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Fn)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),jv=/hsl[a]?\(/,Eu=function(i){var e=i.join(" "),t;if(rr.lastIndex=0,rr.test(e))return t=jv.test(e),i[1]=Zc(i[1],t),i[0]=Zc(i[0],t,Mu(i[1])),!0},jn,Kt=function(){var i=Date.now,e=500,t=33,r=i(),n=r,a=1e3/240,s=a,o=[],l,c,h,d,u,m,f=function _(g){var p=i()-n,b=g===!0,M,v,P,T;if((p>e||p<0)&&(r+=p-t),n+=p,P=n-r,M=P-s,(M>0||b)&&(T=++d.frame,u=P-d.time*1e3,d.time=P=P/1e3,s+=M+(M>=a?4:a-M),v=1),b||(l=c(_)),v)for(m=0;m<o.length;m++)o[m](P,u,T,g)};return d={time:0,frame:0,tick:function(){f(!0)},deltaRatio:function(_){return u/(1e3/(_||60))},wake:function(){eu&&(!Oo&&cl()&&(_i=Oo=window,hl=_i.document||{},ei.gsap=Gt,(_i.gsapVersions||(_i.gsapVersions=[])).push(Gt.version),tu(Ga||_i.GreenSockGlobals||!_i.gsap&&_i||{}),xu.forEach(yu)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(_){return setTimeout(_,s-d.time*1e3+1|0)},jn=1,f(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),jn=0,c=qn},lagSmoothing:function(_,g){e=_||1/0,t=Math.min(g||33,e)},fps:function(_){a=1e3/(_||240),s=d.time*1e3+a},add:function(_,g,p){var b=g?function(M,v,P,T){_(M,v,P,T),d.remove(b)}:_;return d.remove(_),o[p?"unshift":"push"](b),_n(),b},remove:function(_,g){~(g=o.indexOf(_))&&o.splice(g,1)&&m>=g&&m--},_listeners:o},d}(),_n=function(){return!jn&&Kt.wake()},Ne={},Kv=/^[\d.\-M][\d.\-,\s]/,Zv=/["']/g,$v=function(i){for(var e={},t=i.substr(1,i.length-3).split(":"),r=t[0],n=1,a=t.length,s,o,l;n<a;n++)o=t[n],s=n!==a-1?o.lastIndexOf(","):o.length,l=o.substr(0,s),e[r]=isNaN(l)?l.replace(Zv,"").trim():+l,r=o.substr(s+1).trim();return e},Jv=function(i){var e=i.indexOf("(")+1,t=i.indexOf(")"),r=i.indexOf("(",e);return i.substring(e,~r&&r<t?i.indexOf(")",t+1):t)},Qv=function(i){var e=(i+"").split("("),t=Ne[e[0]];return t&&e.length>1&&t.config?t.config.apply(null,~i.indexOf("{")?[$v(e[1])]:Jv(i).split(",").map(su)):Ne._CE&&Kv.test(i)?Ne._CE("",i):t},e0=function(i){return function(e){return 1-i(1-e)}},Pr=function(i,e){return i&&(ut(i)?i:Ne[i]||Qv(i))||e},Ir=function(i,e,t,r){t===void 0&&(t=function(s){return 1-e(1-s)}),r===void 0&&(r=function(s){return s<.5?e(s*2)/2:1-e((1-s)*2)/2});var n={easeIn:e,easeOut:t,easeInOut:r},a;return Ht(i,function(s){Ne[s]=ei[s]=n,Ne[a=s.toLowerCase()]=t;for(var o in n)Ne[a+(o==="easeIn"?".in":o==="easeOut"?".out":".inOut")]=Ne[s+"."+o]=n[o]}),n},bu=function(i){return function(e){return e<.5?(1-i(1-e*2))/2:.5+i((e-.5)*2)/2}},Hs=function i(e,t,r){var n=t>=1?t:1,a=(r||(e?.3:.45))/(t<1?t:1),s=a/No*(Math.asin(1/n)||0),o=function(c){return c===1?1:n*Math.pow(2,-10*c)*bv((c-s)*a)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:bu(o);return a=No/a,l.config=function(c,h){return i(e,c,h)},l},ks=function i(e,t){t===void 0&&(t=1.70158);var r=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?r:e==="in"?function(a){return 1-r(1-a)}:bu(r);return n.config=function(a){return i(e,a)},n};Ht("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Ir(i+",Power"+(t-1),e?function(r){return Math.pow(r,t)}:function(r){return r},function(r){return 1-Math.pow(1-r,t)},function(r){return r<.5?Math.pow(r*2,t)/2:1-Math.pow((1-r)*2,t)/2})});Ne.Linear.easeNone=Ne.none=Ne.Linear.easeIn;Ir("Elastic",Hs("in"),Hs("out"),Hs());(function(i,e){var t=1/e,r=2*t,n=2.5*t,a=function(s){return s<t?i*s*s:s<r?i*Math.pow(s-1.5/e,2)+.75:s<n?i*(s-=2.25/e)*s+.9375:i*Math.pow(s-2.625/e,2)+.984375};Ir("Bounce",function(s){return 1-a(1-s)},a)})(7.5625,2.75);Ir("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Ir("Circ",function(i){return-(Zh(1-i*i)-1)});Ir("Sine",function(i){return i===1?1:-Ev(i*Sv)+1});Ir("Back",ks("in"),ks("out"),ks());Ne.SteppedEase=Ne.steps=ei.SteppedEase={config:function(i,e){i===void 0&&(i=1);var t=1/i,r=i+(e?0:1),n=e?1:0,a=1-Ze;return function(s){return((r*ra(0,a,s)|0)+n)*t}}};Wn.ease=Ne["quad.out"];Ht("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return pl+=i+","+i+"Params,"});var Tu=function(i,e){this.id=Mv++,i._gsap=this,this.target=i,this.harness=e,this.get=e?e.get:nu,this.set=e?e.getSetter:xl},Kn=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,gn(this,+t.duration,1,1),this.data=t.data,rt&&(this._ctx=rt,rt.data.push(this)),jn||Kt.wake()}var e=i.prototype;return e.delay=function(t){return t||t===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},e.duration=function(t){return arguments.length?this.totalDuration(this._repeat>0?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},e.totalDuration=function(t){return arguments.length?(this._dirty=0,gn(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(t,r){if(_n(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(is(this,t),!n._dp||n.parent||cu(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&t<this._tDur||this._ts<0&&t>0||!this._tDur&&!t)&&xi(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ze||!this._initted&&this._dur&&t||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),au(this,t,r)),this},e.time=function(t,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Yc(this))%(this._dur+this._rDelay)||(t?this._dur:0),r):this._time},e.totalProgress=function(t,r){return arguments.length?this.totalTime(this.totalDuration()*t,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(t,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-t:t)+Yc(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(t,r){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*n,r):this._repeat?mn(this._tTime,n)+1:1},e.timeScale=function(t,r){if(!arguments.length)return this._rts===-Ze?0:this._rts;if(this._rts===t)return this;var n=this.parent&&this._ts?qa(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-Ze?0:this._rts,this.totalTime(ra(-Math.abs(this._delay),this.totalDuration(),n),r!==!1),ts(this),Iv(this)},e.paused=function(t){return arguments.length?(this._ps!==t&&(this._ps=t,t?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(_n(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ze&&(this._tTime-=Ze)))),this):this._ps},e.startTime=function(t){if(arguments.length){this._start=ot(t);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&xi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(t){return this._start+(zt(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(t){var r=this.parent||this._dp;return r?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?qa(r.rawTime(t),this):this._tTime:this._tTime},e.revert=function(t){t===void 0&&(t=Pv);var r=Et;return Et=t,ml(this)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),this.data!=="nested"&&t.kill!==!1&&this.kill(),Et=r,this},e.globalTime=function(t){for(var r=this,n=arguments.length?t:r.rawTime();r;)n=r._start+n/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(t):n},e.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,jc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(t){if(arguments.length){var r=this._time;return this._rDelay=t,jc(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},e.seek=function(t,r){return this.totalTime(ni(this,t),zt(r))},e.restart=function(t,r){return this.play().totalTime(t?-this._delay:0,zt(r)),this._dur||(this._zTime=-Ze),this},e.play=function(t,r){return t!=null&&this.seek(t,r),this.reversed(!1).paused(!1)},e.reverse=function(t,r){return t!=null&&this.seek(t||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(t,r){return t!=null&&this.seek(t,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-Ze:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ze,this},e.isActive=function(){var t=this.parent||this._dp,r=this._start,n;return!!(!t||this._ts&&this._initted&&t.isActive()&&(n=t.rawTime(!0))>=r&&n<this.endTime(!0)-Ze)},e.eventCallback=function(t,r,n){var a=this.vars;return arguments.length>1?(r?(a[t]=r,n&&(a[t+"Params"]=n),t==="onUpdate"&&(this._onUpdate=r)):delete a[t],this):a[t]},e.then=function(t){var r=this,n=r._prom;return new Promise(function(a){var s=ut(t)?t:ou,o=function(){var l=r.then;r.then=null,n&&n(),ut(s)&&(s=s(r))&&(s.then||s===r)&&(r.then=l),a(s),r.then=l};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){On(this)},i}();ti(Kn.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ze,_prom:0,_ps:!1,_rts:1});var Ft=function(i){Kh(e,i);function e(r,n){var a;return r===void 0&&(r={}),a=i.call(this,r)||this,a.labels={},a.smoothChildTiming=!!r.smoothChildTiming,a.autoRemoveChildren=!!r.autoRemoveChildren,a._sort=zt(r.sortChildren),lt&&xi(r.parent||lt,Di(a),n),r.reversed&&a.reverse(),r.paused&&a.paused(!0),r.scrollTrigger&&hu(Di(a),r.scrollTrigger),a}var t=e.prototype;return t.to=function(r,n,a){return zn(0,arguments,this),this},t.from=function(r,n,a){return zn(1,arguments,this),this},t.fromTo=function(r,n,a,s){return zn(2,arguments,this),this},t.set=function(r,n,a){return n.duration=0,n.parent=this,Bn(n).repeatDelay||(n.repeat=0),n.immediateRender=!!n.immediateRender,new gt(r,n,ni(this,a),1),this},t.call=function(r,n,a){return xi(this,gt.delayedCall(0,r,n),a)},t.staggerTo=function(r,n,a,s,o,l,c){return a.duration=n,a.stagger=a.stagger||s,a.onComplete=l,a.onCompleteParams=c,a.parent=this,new gt(r,a,ni(this,o)),this},t.staggerFrom=function(r,n,a,s,o,l,c){return a.runBackwards=1,Bn(a).immediateRender=zt(a.immediateRender),this.staggerTo(r,n,a,s,o,l,c)},t.staggerFromTo=function(r,n,a,s,o,l,c,h){return s.startAt=a,Bn(s).immediateRender=zt(s.immediateRender),this.staggerTo(r,n,s,o,l,c,h)},t.render=function(r,n,a){var s=this._time,o=this._dirty?this.totalDuration():this._tDur,l=this._dur,c=r<=0?0:ot(r),h=this._zTime<0!=r<0&&(this._initted||!l),d,u,m,f,_,g,p,b,M,v,P,T;if(this!==lt&&c>o&&r>=0&&(c=o),c!==this._tTime||a||h){if(s!==this._time&&l&&(c+=this._time-s,r+=this._time-s),d=c,M=this._start,b=this._ts,g=!b,h&&(l||(s=this._zTime),(r||!n)&&(this._zTime=r)),this._repeat){if(P=this._yoyo,_=l+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,n,a);if(d=ot(c%_),c===o?(f=this._repeat,d=l):(v=ot(c/_),f=~~v,f&&f===v&&(d=l,f--),d>l&&(d=l)),v=mn(this._tTime,_),!s&&this._tTime&&v!==f&&this._tTime-v*_-this._dur<=0&&(v=f),P&&f&1&&(d=l-d,T=1),f!==v&&!this._lock){var w=P&&v&1,R=w===(P&&f&1);if(f<v&&(w=!w),s=w?0:c%l?l:c,this._lock=1,this.render(s||(T?0:ot(f*_)),n,!l)._lock=0,this._tTime=c,!n&&this.parent&&Zt(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,v=f),s&&s!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,o=this._tDur,R&&(this._lock=2,s=w?l:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(p=Bv(this,ot(s),ot(d)),p&&(c-=d-(d=p._start))),this._tTime=c,this._time=d,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,s=0),!s&&c&&l&&!n&&!v&&(Zt(this,"onStart"),this._tTime!==c))return this;if(d>=s&&r>=0)for(u=this._first;u;){if(m=u._next,(u._act||d>=u._start)&&u._ts&&p!==u){if(u.parent!==this)return this.render(r,n,a);if(u.render(u._ts>0?(d-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(d-u._start)*u._ts,n,a),d!==this._time||!this._ts&&!g){p=0,m&&(c+=this._zTime=-Ze);break}}u=m}else{u=this._last;for(var y=r<0?r:d;u;){if(m=u._prev,(u._act||y<=u._end)&&u._ts&&p!==u){if(u.parent!==this)return this.render(r,n,a);if(u.render(u._ts>0?(y-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(y-u._start)*u._ts,n,a||Et&&ml(u)),d!==this._time||!this._ts&&!g){p=0,m&&(c+=this._zTime=y?-Ze:Ze);break}}u=m}}if(p&&!n&&(this.pause(),p.render(d>=s?0:-Ze)._zTime=d>=s?1:-1,this._ts))return this._start=M,ts(this),this.render(r,n,a);this._onUpdate&&!n&&Zt(this,"onUpdate",!0),(c===o&&this._tTime>=this.totalDuration()||!c&&s)&&(M===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((r||!l)&&(c===o&&this._ts>0||!c&&this._ts<0)&&ar(this,1),!n&&!(r<0&&!s)&&(c||s||!o)&&(Zt(this,c===o&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<o&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,n){var a=this;if(Hi(n)||(n=ni(this,n,r)),!(r instanceof Kn)){if(Ct(r))return r.forEach(function(s){return a.add(s,n)}),this;if(St(r))return this.addLabel(r,n);if(ut(r))r=gt.delayedCall(0,r);else return this}return this!==r?xi(this,r,n):this},t.getChildren=function(r,n,a,s){r===void 0&&(r=!0),n===void 0&&(n=!0),a===void 0&&(a=!0),s===void 0&&(s=-si);for(var o=[],l=this._first;l;)l._start>=s&&(l instanceof gt?n&&o.push(l):(a&&o.push(l),r&&o.push.apply(o,l.getChildren(!0,n,a)))),l=l._next;return o},t.getById=function(r){for(var n=this.getChildren(1,1,1),a=n.length;a--;)if(n[a].vars.id===r)return n[a]},t.remove=function(r){return St(r)?this.removeLabel(r):ut(r)?this.killTweensOf(r):(r.parent===this&&es(this,r),r===this._recent&&(this._recent=this._last),Cr(this))},t.totalTime=function(r,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ot(Kt.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,n),this._forcing=0,this):this._tTime},t.addLabel=function(r,n){return this.labels[r]=ni(this,n),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,n,a){var s=gt.delayedCall(0,n||qn,a);return s.data="isPause",this._hasPause=1,xi(this,s,ni(this,r))},t.removePause=function(r){var n=this._first;for(r=ni(this,r);n;)n._start===r&&n.data==="isPause"&&ar(n),n=n._next},t.killTweensOf=function(r,n,a){for(var s=this.getTweensOf(r,a),o=s.length;o--;)$i!==s[o]&&s[o].kill(r,n);return this},t.getTweensOf=function(r,n){for(var a=[],s=oi(r),o=this._first,l=Hi(n),c;o;)o instanceof gt?Lv(o._targets,s)&&(l?(!$i||o._initted&&o._ts)&&o.globalTime(0)<=n&&o.globalTime(o.totalDuration())>n:!n||o.isActive())&&a.push(o):(c=o.getTweensOf(s,n)).length&&a.push.apply(a,c),o=o._next;return a},t.tweenTo=function(r,n){n=n||{};var a=this,s=ni(a,r),o=n,l=o.startAt,c=o.onStart,h=o.onStartParams,d=o.immediateRender,u,m=gt.to(a,ti({ease:n.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:n.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale())||Ze,onStart:function(){if(a.pause(),!u){var f=n.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale());m._dur!==f&&gn(m,f,0,1).render(m._time,!0,!0),u=1}c&&c.apply(m,h||[])}},n));return d?m.render(0):m},t.tweenFromTo=function(r,n,a){return this.tweenTo(n,ti({startAt:{time:ni(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Kc(this,ni(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Kc(this,ni(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ze)},t.shiftChildren=function(r,n,a){a===void 0&&(a=0);var s=this._first,o=this.labels,l;for(r=ot(r);s;)s._start>=a&&(s._start+=r,s._end+=r),s=s._next;if(n)for(l in o)o[l]>=a&&(o[l]+=r);return Cr(this)},t.invalidate=function(r){var n=this._first;for(this._lock=0;n;)n.invalidate(r),n=n._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var n=this._first,a;n;)a=n._next,this.remove(n),n=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Cr(this)},t.totalDuration=function(r){var n=0,a=this,s=a._last,o=si,l,c,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;s;)l=s._prev,s._dirty&&s.totalDuration(),c=s._start,c>o&&a._sort&&s._ts&&!a._lock?(a._lock=1,xi(a,s,c-s._delay,1)._lock=0):o=c,c<0&&s._ts&&(n-=c,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=ot(c/a._ts),a._time-=c,a._tTime-=c),a.shiftChildren(-c,!1,-1/0),o=0),s._end>n&&s._ts&&(n=s._end),s=l;gn(a,a===lt&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(lt._ts&&(au(lt,qa(r,lt)),ru=Kt.frame),Kt.frame>=Xc){Xc+=Jt.autoSleep||120;var n=lt._first;if((!n||!n._ts)&&Jt.autoSleep&&Kt._listeners.length<2){for(;n&&!n._ts;)n=n._next;n||Kt.sleep()}}},e}(Kn);ti(Ft.prototype,{_lock:0,_hasPause:0,_forcing:0});var t0=function(i,e,t,r,n,a,s){var o=new kt(this._pt,i,e,0,1,Lu,null,n),l=0,c=0,h,d,u,m,f,_,g,p;for(o.b=t,o.e=r,t+="",r+="",(g=~r.indexOf("random("))&&(r=Yn(r)),a&&(p=[t,r],a(p,i,e),t=p[0],r=p[1]),d=t.match(Fs)||[];h=Fs.exec(r);)m=h[0],f=r.substring(l,h.index),u?u=(u+1)%5:f.substr(-5)==="rgba("&&(u=1),m!==d[c++]&&(_=parseFloat(d[c-1])||0,o._pt={_next:o._pt,p:f||c===1?f:",",s:_,c:m.charAt(1)==="="?an(_,m)-_:parseFloat(m)-_,m:u&&u<4?Math.round:0},l=Fs.lastIndex);return o.c=l<r.length?r.substring(l,r.length):"",o.fp=s,(Qh.test(r)||g)&&(o.e=0),this._pt=o,o},gl=function(i,e,t,r,n,a,s,o,l,c){ut(r)&&(r=r(n||0,i,a));var h=i[e],d=t!=="get"?t:ut(h)?l?i[e.indexOf("set")||!ut(i["get"+e.substr(3)])?e:"get"+e.substr(3)](l):i[e]():h,u=ut(h)?l?s0:Cu:vl,m;if(St(r)&&(~r.indexOf("random(")&&(r=Yn(r)),r.charAt(1)==="="&&(m=an(d,r)+(Rt(d)||0),(m||m===0)&&(r=m))),!c||d!==r||Go)return!isNaN(d*r)&&r!==""?(m=new kt(this._pt,i,e,+d||0,r-(d||0),typeof h=="boolean"?l0:Pu,0,u),l&&(m.fp=l),s&&m.modifier(s,this,i),this._pt=m):(!h&&!(e in i)&&ul(e,r),t0.call(this,i,e,d,r,u,o||Jt.stringFilter,l))},i0=function(i,e,t,r,n){if(ut(i)&&(i=Hn(i,n,e,t,r)),!bi(i)||i.style&&i.nodeType||Ct(i)||$h(i))return St(i)?Hn(i,n,e,t,r):i;var a={},s;for(s in i)a[s]=Hn(i[s],n,e,t,r);return a},wu=function(i,e,t,r,n,a){var s,o,l,c;if(jt[i]&&(s=new jt[i]).init(n,s.rawVars?e[i]:i0(e[i],r,n,a,t),t,r,a)!==!1&&(t._pt=o=new kt(t._pt,n,i,0,1,s.render,s,0,s.priority),t!==en))for(l=t._ptLookup[t._targets.indexOf(n)],c=s._props.length;c--;)l[s._props[c]]=o;return s},$i,Go,_l=function i(e,t,r){var n=e.vars,a=n.ease,s=n.startAt,o=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,d=n.yoyoEase,u=n.keyframes,m=n.autoRevert,f=e._dur,_=e._startAt,g=e._targets,p=e.parent,b=p&&p.data==="nested"?p.vars.targets:g,M=e._overwrite==="auto"&&!ol,v=e.timeline,P=n.easeReverse||d,T,w,R,y,x,C,B,F,O,X,V,j,G;if(v&&(!u||!a)&&(a="none"),e._ease=Pr(a,Wn.ease),e._rEase=P&&(Pr(P)||e._ease),e._from=!v&&!!n.runBackwards,e._from&&(e.ratio=1),!v||u&&!n.stagger){if(F=g[0]?Rr(g[0]).harness:0,j=F&&n[F.prop],T=Xa(n,dl),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!m?_.render(-1,!0):_.revert(h&&f?Oa:Cv),_._lazy=0),s){if(ar(e._startAt=gt.set(g,ti({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&zt(l),startAt:null,delay:0,onUpdate:c&&function(){return Zt(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Et||!o&&!m)&&e._startAt.revert(Oa),o&&f&&t<=0&&r<=0){t&&(e._zTime=t);return}}else if(h&&f&&!_){if(t&&(o=!1),R=ti({overwrite:!1,data:"isFromStart",lazy:o&&!_&&zt(l),immediateRender:o,stagger:0,parent:p},T),j&&(R[F.prop]=j),ar(e._startAt=gt.set(g,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Et?e._startAt.revert(Oa):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,Ze,Ze);else if(!t)return}for(e._pt=e._ptCache=0,l=f&&zt(l)||l&&!f,w=0;w<g.length;w++){if(x=g[w],B=x._gsap||fl(g)[w]._gsap,e._ptLookup[w]=X={},Fo[B.id]&&ir.length&&Wa(),V=b===g?w:b.indexOf(x),F&&(O=new F).init(x,j||T,e,V,b)!==!1&&(e._pt=y=new kt(e._pt,x,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(Q){X[Q]=y}),O.priority&&(C=1)),!F||j)for(R in T)jt[R]&&(O=wu(R,T,e,V,x,b))?O.priority&&(C=1):X[R]=y=gl.call(e,x,R,"get",T[R],V,b,0,n.stringFilter);e._op&&e._op[w]&&e.kill(x,e._op[w]),M&&e._pt&&($i=e,lt.killTweensOf(x,X,e.globalTime(t)),G=!e.parent,$i=0),e._pt&&l&&(Fo[B.id]=1)}C&&Du(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,u&&t<=0&&v.render(si,!0,!0)},r0=function(i,e,t,r,n,a,s,o){var l=(i._pt&&i._ptCache||(i._ptCache={}))[e],c,h,d,u;if(!l)for(l=i._ptCache[e]=[],d=i._ptLookup,u=i._targets.length;u--;){if(c=d[u][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return Go=1,i.vars[e]="+=0",_l(i,s),Go=0,o?Xn(e+" not eligible for reset. Try splitting into individual properties"):1;l.push(c)}for(u=l.length;u--;)h=l[u],c=h._pt||h,c.s=(r||r===0)&&!n?r:c.s+(r||0)+a*c.c,c.c=t-c.s,h.e&&(h.e=pt(t)+Rt(h.e)),h.b&&(h.b=c.s+Rt(h.b))},n0=function(i,e){var t=i[0]?Rr(i[0]).harness:0,r=t&&t.aliases,n,a,s,o;if(!r)return e;n=fn({},e);for(a in r)if(a in n)for(o=r[a].split(","),s=o.length;s--;)n[o[s]]=n[a];return n},a0=function(i,e,t,r){var n=e.ease||r||"power1.inOut",a,s;if(Ct(e))s=t[i]||(t[i]=[]),e.forEach(function(o,l){return s.push({t:l/(e.length-1)*100,v:o,e:n})});else for(a in e)s=t[a]||(t[a]=[]),a==="ease"||s.push({t:parseFloat(i),v:e[a],e:n})},Hn=function(i,e,t,r,n){return ut(i)?i.call(e,t,r,n):St(i)&&~i.indexOf("random(")?Yn(i):i},Au=pl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Ru={};Ht(Au+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Ru[i]=1});var gt=function(i){Kh(e,i);function e(r,n,a,s){var o;typeof n=="number"&&(a.duration=n,n=a,a=null),o=i.call(this,s?n:Bn(n))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,m=l.overwrite,f=l.keyframes,_=l.defaults,g=l.scrollTrigger,p=n.parent||lt,b=(Ct(r)||$h(r)?Hi(r[0]):"length"in n)?[r]:oi(r),M,v,P,T,w,R,y,x;if(o._targets=b.length?fl(b):Xn("GSAP target "+r+" not found. https://gsap.com",!Jt.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,f||u||Ca(c)||Ca(h)){n=o.vars;var C=n.easeReverse||n.yoyoEase;if(M=o.timeline=new Ft({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:b}),M.kill(),M.parent=M._dp=Di(o),M._start=0,u||Ca(c)||Ca(h)){if(T=b.length,y=u&&fu(u),bi(u))for(w in u)~Au.indexOf(w)&&(x||(x={}),x[w]=u[w]);for(v=0;v<T;v++)P=Xa(n,Ru),P.stagger=0,C&&(P.easeReverse=C),x&&fn(P,x),R=b[v],P.duration=+Hn(c,Di(o),v,R,b),P.delay=(+Hn(h,Di(o),v,R,b)||0)-o._delay,!u&&T===1&&P.delay&&(o._delay=h=P.delay,o._start+=h,P.delay=0),M.to(R,P,y?y(v,R,b):0),M._ease=Ne.none;M.duration()?c=h=0:o.timeline=0}else if(f){Bn(ti(M.vars.defaults,{ease:"none"})),M._ease=Pr(f.ease||n.ease||"none");var B=0,F,O,X;if(Ct(f))f.forEach(function(V){return M.to(b,V,">")}),M.duration();else{P={};for(w in f)w==="ease"||w==="easeEach"||a0(w,f[w],P,f.easeEach);for(w in P)for(F=P[w].sort(function(V,j){return V.t-j.t}),B=0,v=0;v<F.length;v++)O=F[v],X={ease:O.e,duration:(O.t-(v?F[v-1].t:0))/100*c},X[w]=O.v,M.to(b,X,B),B+=X.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return m===!0&&!ol&&($i=Di(o),lt.killTweensOf(b),$i=0),xi(p,Di(o),a),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(d||!c&&!f&&o._start===ot(p._time)&&zt(d)&&Nv(Di(o))&&p.data!=="nested")&&(o._tTime=-Ze,o.render(Math.max(0,-h)||0)),g&&hu(Di(o),g),o}var t=e.prototype;return t.render=function(r,n,a){var s=this._time,o=this._tDur,l=this._dur,c=r<0,h=r>o-Ze&&!c?o:r<Ze?0:r,d,u,m,f,_,g,p,b;if(!l)Fv(this,r,n,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(d=h,b=this.timeline,this._repeat){if(f=l+this._rDelay,this._repeat<-1&&c)return this.totalTime(f*100+r,n,a);if(d=ot(h%f),h===o?(m=this._repeat,d=l):(_=ot(h/f),m=~~_,m&&m===_?(d=l,m--):d>l&&(d=l)),g=this._yoyo&&m&1,g&&(d=l-d),_=mn(this._tTime,f),d===s&&!a&&this._initted&&m===_)return this._tTime=h,this;m!==_&&this.vars.repeatRefresh&&!g&&!this._lock&&d!==f&&this._initted&&(this._lock=a=1,this.render(ot(f*m),!0).invalidate()._lock=0)}if(!this._initted){if(uu(this,c?r:d,a,n,h))return this._tTime=0,this;if(s!==this._time&&!(a&&this.vars.repeatRefresh&&m!==_))return this;if(l!==this._dur)return this.render(r,n,a)}if(this._rEase){var M=d<s;if(M!==this._inv){var v=M?s:l-s;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=v?(M?-1:1)/v:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=p=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=p=this._ease(d/l);if(this._from&&(this.ratio=p=1-p),this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&h&&!n&&!_&&(Zt(this,"onStart"),this._tTime!==h))return this;for(u=this._pt;u;)u.r(p,u.d),u=u._next;b&&b.render(r<0?r:b._dur*b._ease(d/this._dur),n,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!n&&(c&&Bo(this,r,n,a),Zt(this,"onUpdate")),this._repeat&&m!==_&&this.vars.onRepeat&&!n&&this.parent&&Zt(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&Bo(this,r,!0,!0),(r||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&ar(this,1),!n&&!(c&&!s)&&(h||s||g)&&(Zt(this,h===o?"onComplete":"onReverseComplete",!0),this._prom&&!(h<o&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,n,a,s,o){jn||Kt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||_l(this,l),c=this._ease(l/this._dur),r0(this,r,n,a,s,c,l,o)?this.resetTo(r,n,a,s,1):(is(this,0),this.parent||lu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,n){if(n===void 0&&(n="all"),!r&&(!n||n==="all"))return this._lazy=this._pt=0,this.parent?On(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Et),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,n,$i&&$i.vars.overwrite!==!0)._first||On(this),this.parent&&a!==this.timeline.totalDuration()&&gn(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,o=r?oi(r):s,l=this._ptLookup,c=this._pt,h,d,u,m,f,_,g;if((!n||n==="all")&&Uv(s,o))return n==="all"&&(this._pt=0),On(this);for(h=this._op=this._op||[],n!=="all"&&(St(n)&&(f={},Ht(n,function(p){return f[p]=1}),n=f),n=n0(s,n)),g=s.length;g--;)if(~o.indexOf(s[g])){d=l[g],n==="all"?(h[g]=n,m=d,u={}):(u=h[g]=h[g]||{},m=n);for(f in m)_=d&&d[f],_&&((!("kill"in _.d)||_.d.kill(f)===!0)&&es(this,_,"_pt"),delete d[f]),u!=="all"&&(u[f]=1)}return this._initted&&!this._pt&&c&&On(this),this},e.to=function(r,n){return new e(r,n,arguments[2])},e.from=function(r,n){return zn(1,arguments)},e.delayedCall=function(r,n,a,s){return new e(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:n,onReverseComplete:n,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(r,n,a){return zn(2,arguments)},e.set=function(r,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new e(r,n)},e.killTweensOf=function(r,n,a){return lt.killTweensOf(r,n,a)},e}(Kn);ti(gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ht("staggerTo,staggerFrom,staggerFromTo",function(i){gt[i]=function(){var e=new Ft,t=Ho.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var vl=function(i,e,t){return i[e]=t},Cu=function(i,e,t){return i[e](t)},s0=function(i,e,t,r){return i[e](r.fp,t)},o0=function(i,e,t){return i.setAttribute(e,t)},xl=function(i,e){return ut(i[e])?Cu:ll(i[e])&&i.setAttribute?o0:vl},Pu=function(i,e){return e.set(e.t,e.p,Math.round((e.s+e.c*i)*1e6)/1e6,e)},l0=function(i,e){return e.set(e.t,e.p,!!(e.s+e.c*i),e)},Lu=function(i,e){var t=e._pt,r="";if(!i&&e.b)r=e.b;else if(i===1&&e.e)r=e.e;else{for(;t;)r=t.p+(t.m?t.m(t.s+t.c*i):Math.round((t.s+t.c*i)*1e4)/1e4)+r,t=t._next;r+=e.c}e.set(e.t,e.p,r,e)},yl=function(i,e){for(var t=e._pt;t;)t.r(i,t.d),t=t._next},c0=function(i,e,t,r){for(var n=this._pt,a;n;)a=n._next,n.p===r&&n.modifier(i,e,t),n=a},h0=function(i){for(var e=this._pt,t,r;e;)r=e._next,e.p===i&&!e.op||e.op===i?es(this,e,"_pt"):e.dep||(t=1),e=r;return!t},u0=function(i,e,t,r){r.mSet(i,e,r.m.call(r.tween,t,r.mt),r)},Du=function(i){for(var e=i._pt,t,r,n,a;e;){for(t=e._next,r=n;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:a)?e._prev._next=e:n=e,(e._next=r)?r._prev=e:a=e,e=t}i._pt=n},kt=function(){function i(t,r,n,a,s,o,l,c,h){this.t=r,this.s=a,this.c=s,this.p=n,this.r=o||Pu,this.d=l||this,this.set=c||vl,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(t,r,n){this.mSet=this.mSet||this.set,this.set=u0,this.m=t,this.mt=n,this.tween=r},i}();Ht(pl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return dl[i]=1});ei.TweenMax=ei.TweenLite=gt;ei.TimelineLite=ei.TimelineMax=Ft;lt=new Ft({sortChildren:!1,defaults:Wn,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Jt.stringFilter=Eu;var Lr=[],Ba={},d0=[],$c=0,p0=0,Vs=function(i){return(Ba[i]||d0).map(function(e){return e()})},Wo=function(){var i=Date.now(),e=[];i-$c>2&&(Vs("matchMediaInit"),Lr.forEach(function(t){var r=t.queries,n=t.conditions,a,s,o,l;for(s in r)a=_i.matchMedia(r[s]).matches,a&&(o=1),a!==n[s]&&(n[s]=a,l=1);l&&(t.revert(),o&&e.push(t))}),Vs("matchMediaRevert"),e.forEach(function(t){return t.onMatch(t,function(r){return t.add(null,r)})}),$c=i,Vs("matchMedia"))},Uu=function(){function i(t,r){this.selector=r&&ko(r),this.data=[],this._r=[],this.isReverted=!1,this.id=p0++,t&&this.add(t)}var e=i.prototype;return e.add=function(t,r,n){ut(t)&&(n=r,r=t,t=ut);var a=this,s=function(){var o=rt,l=a.selector,c;return o&&o!==a&&o.data.push(a),n&&(a.selector=ko(n)),rt=a,c=r.apply(a,arguments),ut(c)&&a._r.push(c),rt=o,a.selector=l,a.isReverted=!1,c};return a.last=s,t===ut?s(a,function(o){return a.add(null,o)}):t?a[t]=s:s},e.ignore=function(t){var r=rt;rt=null,t(this),rt=r},e.getTweens=function(){var t=[];return this.data.forEach(function(r){return r instanceof i?t.push.apply(t,r.getTweens()):r instanceof gt&&!(r.parent&&r.parent.data==="nested")&&t.push(r)}),t},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(t,r){var n=this;if(t?function(){for(var s=n.getTweens(),o=n.data.length,l;o--;)l=n.data[o],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}));for(s.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(t)}),o=n.data.length;o--;)l=n.data[o],l instanceof Ft?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof gt)&&l.revert&&l.revert(t);n._r.forEach(function(c){return c(t,n)}),n.isReverted=!0}():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),r)for(var a=Lr.length;a--;)Lr[a].id===this.id&&Lr.splice(a,1)},e.revert=function(t){this.kill(t||{})},i}(),f0=function(){function i(t){this.contexts=[],this.scope=t,rt&&rt.data.push(this)}var e=i.prototype;return e.add=function(t,r,n){bi(t)||(t={matches:t});var a=new Uu(0,n||this.scope),s=a.conditions={},o,l,c;rt&&!a.selector&&(a.selector=rt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=t;for(l in t)l==="all"?c=1:(o=_i.matchMedia(t[l]),o&&(Lr.indexOf(a)<0&&Lr.push(a),(s[l]=o.matches)&&(c=1),o.addListener?o.addListener(Wo):o.addEventListener("change",Wo)));return c&&r(a,function(h){return a.add(null,h)}),this},e.revert=function(t){this.kill(t||{})},e.kill=function(t){this.contexts.forEach(function(r){return r.kill(t,!0)})},i}(),Ya={registerPlugin:function(){for(var i=arguments.length,e=new Array(i),t=0;t<i;t++)e[t]=arguments[t];e.forEach(function(r){return yu(r)})},timeline:function(i){return new Ft(i)},getTweensOf:function(i,e){return lt.getTweensOf(i,e)},getProperty:function(i,e,t,r){St(i)&&(i=oi(i)[0]);var n=Rr(i||{}).get,a=t?ou:su;return t==="native"&&(t=""),i&&(e?a((jt[e]&&jt[e].get||n)(i,e,t,r)):function(s,o,l){return a((jt[s]&&jt[s].get||n)(i,s,o,l))})},quickSetter:function(i,e,t){if(i=oi(i),i.length>1){var r=i.map(function(c){return Gt.quickSetter(c,e,t)}),n=r.length;return function(c){for(var h=n;h--;)r[h](c)}}i=i[0]||{};var a=jt[e],s=Rr(i),o=s.harness&&(s.harness.aliases||{})[e]||e,l=a?function(c){var h=new a;en._pt=0,h.init(i,t?c+t:c,en,0,[i]),h.render(1,h),en._pt&&yl(1,en)}:s.set(i,o);return a?l:function(c){return l(i,o,t?c+t:c,s,1)}},quickTo:function(i,e,t){var r,n=Gt.to(i,ti((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),t||{})),a=function(s,o,l){return n.resetTo(e,s,o,l)};return a.tween=n,a},isTweening:function(i){return lt.getTweensOf(i,!0).length>0},defaults:function(i){return i&&i.ease&&(i.ease=Pr(i.ease,Wn.ease)),qc(Wn,i||{})},config:function(i){return qc(Jt,i||{})},registerEffect:function(i){var e=i.name,t=i.effect,r=i.plugins,n=i.defaults,a=i.extendTimeline;(r||"").split(",").forEach(function(s){return s&&!jt[s]&&!ei[s]&&Xn(e+" effect requires "+s+" plugin.")}),Bs[e]=function(s,o,l){return t(oi(s),ti(o||{},n),l)},a&&(Ft.prototype[e]=function(s,o,l){return this.add(Bs[e](s,bi(o)?o:(l=o)&&{},this),l)})},registerEase:function(i,e){Ne[i]=Pr(e)},parseEase:function(i,e){return arguments.length?Pr(i,e):Ne},getById:function(i){return lt.getById(i)},exportRoot:function(i,e){i===void 0&&(i={});var t=new Ft(i),r,n;for(t.smoothChildTiming=zt(i.smoothChildTiming),lt.remove(t),t._dp=0,t._time=t._tTime=lt._time,r=lt._first;r;)n=r._next,(e||!(!r._dur&&r instanceof gt&&r.vars.onComplete===r._targets[0]))&&xi(t,r,r._start-r._delay),r=n;return xi(lt,t,0),t},context:function(i,e){return i?new Uu(i,e):rt},matchMedia:function(i){return new f0(i)},matchMediaRefresh:function(){return Lr.forEach(function(i){var e=i.conditions,t,r;for(r in e)e[r]&&(e[r]=!1,t=1);t&&i.revert()})||Wo()},addEventListener:function(i,e){var t=Ba[i]||(Ba[i]=[]);~t.indexOf(e)||t.push(e)},removeEventListener:function(i,e){var t=Ba[i],r=t&&t.indexOf(e);r>=0&&t.splice(r,1)},utils:{wrap:Xv,wrapYoyo:qv,distribute:fu,random:gu,snap:mu,normalize:Wv,getUnit:Rt,clamp:Hv,splitColor:Su,toArray:oi,selector:ko,mapRange:vu,pipe:Vv,unitize:Gv,interpolate:Yv,shuffle:pu},install:tu,effects:Bs,ticker:Kt,updateRoot:Ft.updateRoot,plugins:jt,globalTimeline:lt,core:{PropTween:kt,globals:iu,Tween:gt,Timeline:Ft,Animation:Kn,getCache:Rr,_removeLinkedListItem:es,reverting:function(){return Et},context:function(i){return i&&rt&&(rt.data.push(i),i._ctx=rt),rt},suppressOverwrites:function(i){return ol=i}}};Ht("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Ya[i]=gt[i]});Kt.add(Ft.updateRoot);en=Ya.to({},{duration:0});var m0=function(i,e){for(var t=i._pt;t&&t.p!==e&&t.op!==e&&t.fp!==e;)t=t._next;return t},g0=function(i,e){var t=i._targets,r,n,a;for(r in e)for(n=t.length;n--;)a=i._ptLookup[n][r],a&&(a=a.d)&&(a._pt&&(a=m0(a,r)),a&&a.modifier&&a.modifier(e[r],i,t[n],r))},Gs=function(i,e){return{name:i,headless:1,rawVars:1,init:function(t,r,n){n._onInit=function(a){var s,o;if(St(r)&&(s={},Ht(r,function(l){return s[l]=1}),r=s),e){s={};for(o in r)s[o]=e(r[o]);r=s}g0(a,r)}}}},Gt=Ya.registerPlugin({name:"attr",init:function(i,e,t,r,n){var a,s,o;this.tween=t;for(a in e)o=i.getAttribute(a)||"",s=this.add(i,"setAttribute",(o||0)+"",e[a],r,n,0,0,a),s.op=a,s.b=o,this._props.push(a)},render:function(i,e){for(var t=e._pt;t;)Et?t.set(t.t,t.p,t.b,t):t.r(i,t.d),t=t._next}},{name:"endArray",headless:1,init:function(i,e){for(var t=e.length;t--;)this.add(i,t,i[t]||0,e[t],0,0,0,0,0,1)}},Gs("roundProps",Vo),Gs("modifiers"),Gs("snap",mu))||Ya;gt.version=Ft.version=Gt.version="3.15.0";eu=1;cl()&&_n();Ne.Power0;Ne.Power1;Ne.Power2;Ne.Power3;Ne.Power4;Ne.Linear;Ne.Quad;Ne.Cubic;Ne.Quart;Ne.Quint;Ne.Strong;Ne.Elastic;Ne.Back;Ne.SteppedEase;Ne.Bounce;Ne.Sine;Ne.Expo;Ne.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Jc,Ji,sn,Sl,Ar,Qc,Ml,_0=function(){return typeof window<"u"},ki={},Mr=180/Math.PI,on=Math.PI/180,$r=Math.atan2,eh=1e8,El=/([A-Z])/g,v0=/(left|right|width|margin|padding|x)/i,x0=/[\s,\(]\S/,Si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Xo=function(i,e){return e.set(e.t,e.p,Math.round((e.s+e.c*i)*1e4)/1e4+e.u,e)},y0=function(i,e){return e.set(e.t,e.p,i===1?e.e:Math.round((e.s+e.c*i)*1e4)/1e4+e.u,e)},S0=function(i,e){return e.set(e.t,e.p,i?Math.round((e.s+e.c*i)*1e4)/1e4+e.u:e.b,e)},M0=function(i,e){return e.set(e.t,e.p,i===1?e.e:i?Math.round((e.s+e.c*i)*1e4)/1e4+e.u:e.b,e)},E0=function(i,e){var t=e.s+e.c*i;e.set(e.t,e.p,~~(t+(t<0?-.5:.5))+e.u,e)},Iu=function(i,e){return e.set(e.t,e.p,i?e.e:e.b,e)},Nu=function(i,e){return e.set(e.t,e.p,i!==1?e.b:e.e,e)},b0=function(i,e,t){return i.style[e]=t},T0=function(i,e,t){return i.style.setProperty(e,t)},w0=function(i,e,t){return i._gsap[e]=t},A0=function(i,e,t){return i._gsap.scaleX=i._gsap.scaleY=t},R0=function(i,e,t,r,n){var a=i._gsap;a.scaleX=a.scaleY=t,a.renderTransform(n,a)},C0=function(i,e,t,r,n){var a=i._gsap;a[e]=t,a.renderTransform(n,a)},ct="transform",Vt=ct+"Origin",P0=function i(e,t){var r=this,n=this.target,a=n.style,s=n._gsap;if(e in ki&&a){if(this.tfm=this.tfm||{},e!=="transform")e=Si[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return r.tfm[o]=Ui(n,o)}):this.tfm[e]=s.x?s[e]:Ui(n,e),e===Vt&&(this.tfm.zOrigin=s.zOrigin);else return Si.transform.split(",").forEach(function(o){return i.call(r,o,t)});if(this.props.indexOf(ct)>=0)return;s.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Vt,t,"")),e=ct}(a||t)&&this.props.push(e,t,a[e])},Ou=function(i){i.translate&&(i.removeProperty("translate"),i.removeProperty("scale"),i.removeProperty("rotate"))},L0=function(){var i=this.props,e=this.target,t=e.style,r=e._gsap,n,a;for(n=0;n<i.length;n+=3)i[n+1]?i[n+1]===2?e[i[n]](i[n+2]):e[i[n]]=i[n+2]:i[n+2]?t[i[n]]=i[n+2]:t.removeProperty(i[n].substr(0,2)==="--"?i[n]:i[n].replace(El,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),n=Ml(),(!n||!n.isStart)&&!t[ct]&&(Ou(t),r.zOrigin&&t[Vt]&&(t[Vt]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Fu=function(i,e){var t={target:i,props:[],revert:L0,save:P0};return i._gsap||Gt.core.getCache(i),e&&i.style&&i.nodeType&&e.split(",").forEach(function(r){return t.save(r)}),t},Bu,qo=function(i,e){var t=Ji.createElementNS?Ji.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),i):Ji.createElement(i);return t&&t.style?t:Ji.createElement(i)},$t=function i(e,t,r){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(El,"-$1").toLowerCase())||n.getPropertyValue(t)||!r&&i(e,vn(t)||t,1)||""},th="O,Moz,ms,Ms,Webkit".split(","),vn=function(i,e,t){var r=e||Ar,n=r.style,a=5;if(i in n&&!t)return i;for(i=i.charAt(0).toUpperCase()+i.substr(1);a--&&!(th[a]+i in n););return a<0?null:(a===3?"ms":a>=0?th[a]:"")+i},Yo=function(){_0()&&window.document&&(Jc=window,Ji=Jc.document,sn=Ji.documentElement,Ar=qo("div")||{style:{}},qo("div"),ct=vn(ct),Vt=ct+"Origin",Ar.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Bu=!!vn("perspective"),Ml=Gt.core.reverting,Sl=1)},ih=function(i){var e=i.ownerSVGElement,t=qo("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=i.cloneNode(!0),n;r.style.display="block",t.appendChild(r),sn.appendChild(t);try{n=r.getBBox()}catch{}return t.removeChild(r),sn.removeChild(t),n},rh=function(i,e){for(var t=e.length;t--;)if(i.hasAttribute(e[t]))return i.getAttribute(e[t])},zu=function(i){var e,t;try{e=i.getBBox()}catch{e=ih(i),t=1}return e&&(e.width||e.height)||t||(e=ih(i)),e&&!e.width&&!e.x&&!e.y?{x:+rh(i,["x","cx","x1"])||0,y:+rh(i,["y","cy","y1"])||0,width:0,height:0}:e},Hu=function(i){return!!(i.getCTM&&(!i.parentNode||i.ownerSVGElement)&&zu(i))},sr=function(i,e){if(e){var t=i.style,r;e in ki&&e!==Vt&&(e=ct),t.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),t.removeProperty(r==="--"?e:e.replace(El,"-$1").toLowerCase())):t.removeAttribute(e)}},Qi=function(i,e,t,r,n,a){var s=new kt(i._pt,e,t,0,1,a?Nu:Iu);return i._pt=s,s.b=r,s.e=n,i._props.push(t),s},nh={deg:1,rad:1,turn:1},D0={grid:1,flex:1},or=function i(e,t,r,n){var a=parseFloat(r)||0,s=(r+"").trim().substr((a+"").length)||"px",o=Ar.style,l=v0.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=n==="px",m=n==="%",f,_,g,p;if(n===s||!a||nh[n]||nh[s])return a;if(s!=="px"&&!u&&(a=i(e,t,r,"px")),p=e.getCTM&&Hu(e),(m||s==="%")&&(ki[t]||~t.indexOf("adius")))return f=p?e.getBBox()[l?"width":"height"]:e[h],pt(m?a/f*d:a/100*f);if(o[l?"width":"height"]=d+(u?s:n),_=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ji||!_.appendChild)&&(_=Ji.body),g=_._gsap,g&&m&&g.width&&l&&g.time===Kt.time&&!g.uncache)return pt(a/g.width*d);if(m&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=d+n,f=e[h],b?e.style[t]=b:sr(e,t)}else(m||s==="%")&&!D0[$t(_,"display")]&&(o.position=$t(e,"position")),_===e&&(o.position="static"),_.appendChild(Ar),f=Ar[h],_.removeChild(Ar),o.position="absolute";return l&&m&&(g=Rr(_),g.time=Kt.time,g.width=_[h]),pt(u?f*a/d:f&&a?d/f*a:0)},Ui=function(i,e,t,r){var n;return Sl||Yo(),e in Si&&e!=="transform"&&(e=Si[e],~e.indexOf(",")&&(e=e.split(",")[0])),ki[e]&&e!=="transform"?(n=$n(i,r),n=e!=="transformOrigin"?n[e]:n.svg?n.origin:Ka($t(i,Vt))+" "+n.zOrigin+"px"):(n=i.style[e],(!n||n==="auto"||r||~(n+"").indexOf("calc("))&&(n=ja[e]&&ja[e](i,e,t)||$t(i,e)||nu(i,e)||(e==="opacity"?1:0))),t&&!~(n+"").trim().indexOf(" ")?or(i,e,n,t)+t:n},U0=function(i,e,t,r){if(!t||t==="none"){var n=vn(e,i,1),a=n&&$t(i,n,1);a&&a!==t?(e=n,t=a):e==="borderColor"&&(t=$t(i,"borderTopColor"))}var s=new kt(this._pt,i.style,e,0,1,Lu),o=0,l=0,c,h,d,u,m,f,_,g,p,b,M,v;if(s.b=t,s.e=r,t+="",r+="",r.substring(0,6)==="var(--"&&(r=$t(i,r.substring(4,r.indexOf(")")))),r==="auto"&&(f=i.style[e],i.style[e]=r,r=$t(i,e)||r,f?i.style[e]=f:sr(i,e)),c=[t,r],Eu(c),t=c[0],r=c[1],d=t.match(Qr)||[],v=r.match(Qr)||[],v.length){for(;h=Qr.exec(r);)_=h[0],p=r.substring(o,h.index),m?m=(m+1)%5:(p.substr(-5)==="rgba("||p.substr(-5)==="hsla(")&&(m=1),_!==(f=d[l++]||"")&&(u=parseFloat(f)||0,M=f.substr((u+"").length),_.charAt(1)==="="&&(_=an(u,_)+M),g=parseFloat(_),b=_.substr((g+"").length),o=Qr.lastIndex-b.length,b||(b=b||Jt.units[e]||M,o===r.length&&(r+=b,s.e+=b)),M!==b&&(u=or(i,e,f,b)||0),s._pt={_next:s._pt,p:p||l===1?p:",",s:u,c:g-u,m:m&&m<4||e==="zIndex"?Math.round:0});s.c=o<r.length?r.substring(o,r.length):""}else s.r=e==="display"&&r==="none"?Nu:Iu;return Qh.test(r)&&(s.e=0),this._pt=s,s},ah={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},I0=function(i){var e=i.split(" "),t=e[0],r=e[1]||"50%";return(t==="top"||t==="bottom"||r==="left"||r==="right")&&(i=t,t=r,r=i),e[0]=ah[t]||t,e[1]=ah[r]||r,e.join(" ")},N0=function(i,e){if(e.tween&&e.tween._time===e.tween._dur){var t=e.t,r=t.style,n=e.u,a=t._gsap,s,o,l;if(n==="all"||n===!0)r.cssText="",o=1;else for(n=n.split(","),l=n.length;--l>-1;)s=n[l],ki[s]&&(o=1,s=s==="transformOrigin"?Vt:ct),sr(t,s);o&&(sr(t,ct),a&&(a.svg&&t.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",$n(t,1),a.uncache=1,Ou(r)))}},ja={clearProps:function(i,e,t,r,n){if(n.data!=="isFromStart"){var a=i._pt=new kt(i._pt,e,t,0,0,N0);return a.u=r,a.pr=-10,a.tween=n,i._props.push(t),1}}},Zn=[1,0,0,1,0,0],ku={},Vu=function(i){return i==="matrix(1, 0, 0, 1, 0, 0)"||i==="none"||!i},sh=function(i){var e=$t(i,ct);return Vu(e)?Zn:e.substr(7).match(Jh).map(pt)},bl=function(i,e){var t=i._gsap||Rr(i),r=i.style,n=sh(i),a,s,o,l;return t.svg&&i.getAttribute("transform")?(o=i.transform.baseVal.consolidate().matrix,n=[o.a,o.b,o.c,o.d,o.e,o.f],n.join(",")==="1,0,0,1,0,0"?Zn:n):(n===Zn&&!i.offsetParent&&i!==sn&&!t.svg&&(o=r.display,r.display="block",a=i.parentNode,(!a||!i.offsetParent&&!i.getBoundingClientRect().width)&&(l=1,s=i.nextElementSibling,sn.appendChild(i)),n=sh(i),o?r.display=o:sr(i,"display"),l&&(s?a.insertBefore(i,s):a?a.appendChild(i):sn.removeChild(i))),e&&n.length>6?[n[0],n[1],n[4],n[5],n[12],n[13]]:n)},jo=function(i,e,t,r,n,a){var s=i._gsap,o=n||bl(i,!0),l=s.xOrigin||0,c=s.yOrigin||0,h=s.xOffset||0,d=s.yOffset||0,u=o[0],m=o[1],f=o[2],_=o[3],g=o[4],p=o[5],b=e.split(" "),M=parseFloat(b[0])||0,v=parseFloat(b[1])||0,P,T,w,R;t?o!==Zn&&(T=u*_-m*f)&&(w=M*(_/T)+v*(-f/T)+(f*p-_*g)/T,R=M*(-m/T)+v*(u/T)-(u*p-m*g)/T,M=w,v=R):(P=zu(i),M=P.x+(~b[0].indexOf("%")?M/100*P.width:M),v=P.y+(~(b[1]||b[0]).indexOf("%")?v/100*P.height:v)),r||r!==!1&&s.smooth?(g=M-l,p=v-c,s.xOffset=h+(g*u+p*f)-g,s.yOffset=d+(g*m+p*_)-p):s.xOffset=s.yOffset=0,s.xOrigin=M,s.yOrigin=v,s.smooth=!!r,s.origin=e,s.originIsAbsolute=!!t,i.style[Vt]="0px 0px",a&&(Qi(a,s,"xOrigin",l,M),Qi(a,s,"yOrigin",c,v),Qi(a,s,"xOffset",h,s.xOffset),Qi(a,s,"yOffset",d,s.yOffset)),i.setAttribute("data-svg-origin",M+" "+v)},$n=function(i,e){var t=i._gsap||new Tu(i);if("x"in t&&!e&&!t.uncache)return t;var r=i.style,n=t.scaleX<0,a="px",s="deg",o=getComputedStyle(i),l=$t(i,Vt)||"0",c,h,d,u,m,f,_,g,p,b,M,v,P,T,w,R,y,x,C,B,F,O,X,V,j,G,Q,oe,xe,Te,Ie,q;return c=h=d=f=_=g=p=b=M=0,u=m=1,t.svg=!!(i.getCTM&&Hu(i)),o.translate&&((o.translate!=="none"||o.scale!=="none"||o.rotate!=="none")&&(r[ct]=(o.translate!=="none"?"translate3d("+(o.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(o.rotate!=="none"?"rotate("+o.rotate+") ":"")+(o.scale!=="none"?"scale("+o.scale.split(" ").join(",")+") ":"")+(o[ct]!=="none"?o[ct]:"")),r.scale=r.rotate=r.translate="none"),T=bl(i,t.svg),t.svg&&(t.uncache?(j=i.getBBox(),l=t.xOrigin-j.x+"px "+(t.yOrigin-j.y)+"px",V=""):V=!e&&i.getAttribute("data-svg-origin"),jo(i,V||l,!!V||t.originIsAbsolute,t.smooth!==!1,T)),v=t.xOrigin||0,P=t.yOrigin||0,T!==Zn&&(x=T[0],C=T[1],B=T[2],F=T[3],c=O=T[4],h=X=T[5],T.length===6?(u=Math.sqrt(x*x+C*C),m=Math.sqrt(F*F+B*B),f=x||C?$r(C,x)*Mr:0,p=B||F?$r(B,F)*Mr+f:0,p&&(m*=Math.abs(Math.cos(p*on))),t.svg&&(c-=v-(v*x+P*B),h-=P-(v*C+P*F))):(q=T[6],Te=T[7],Q=T[8],oe=T[9],xe=T[10],Ie=T[11],c=T[12],h=T[13],d=T[14],w=$r(q,xe),_=w*Mr,w&&(R=Math.cos(-w),y=Math.sin(-w),V=O*R+Q*y,j=X*R+oe*y,G=q*R+xe*y,Q=O*-y+Q*R,oe=X*-y+oe*R,xe=q*-y+xe*R,Ie=Te*-y+Ie*R,O=V,X=j,q=G),w=$r(-B,xe),g=w*Mr,w&&(R=Math.cos(-w),y=Math.sin(-w),V=x*R-Q*y,j=C*R-oe*y,G=B*R-xe*y,Ie=F*y+Ie*R,x=V,C=j,B=G),w=$r(C,x),f=w*Mr,w&&(R=Math.cos(w),y=Math.sin(w),V=x*R+C*y,j=O*R+X*y,C=C*R-x*y,X=X*R-O*y,x=V,O=j),_&&Math.abs(_)+Math.abs(f)>359.9&&(_=f=0,g=180-g),u=pt(Math.sqrt(x*x+C*C+B*B)),m=pt(Math.sqrt(X*X+q*q)),w=$r(O,X),p=Math.abs(w)>2e-4?w*Mr:0,M=Ie?1/(Ie<0?-Ie:Ie):0),t.svg&&(V=i.getAttribute("transform"),t.forceCSS=i.setAttribute("transform","")||!Vu($t(i,ct)),V&&i.setAttribute("transform",V))),Math.abs(p)>90&&Math.abs(p)<270&&(n?(u*=-1,p+=f<=0?180:-180,f+=f<=0?180:-180):(m*=-1,p+=p<=0?180:-180)),e=e||t.uncache,t.x=c-((t.xPercent=c&&(!e&&t.xPercent||(Math.round(i.offsetWidth/2)===Math.round(-c)?-50:0)))?i.offsetWidth*t.xPercent/100:0)+a,t.y=h-((t.yPercent=h&&(!e&&t.yPercent||(Math.round(i.offsetHeight/2)===Math.round(-h)?-50:0)))?i.offsetHeight*t.yPercent/100:0)+a,t.z=d+a,t.scaleX=pt(u),t.scaleY=pt(m),t.rotation=pt(f)+s,t.rotationX=pt(_)+s,t.rotationY=pt(g)+s,t.skewX=p+s,t.skewY=b+s,t.transformPerspective=M+a,(t.zOrigin=parseFloat(l.split(" ")[2])||!e&&t.zOrigin||0)&&(r[Vt]=Ka(l)),t.xOffset=t.yOffset=0,t.force3D=Jt.force3D,t.renderTransform=t.svg?F0:Bu?Gu:O0,t.uncache=0,t},Ka=function(i){return(i=i.split(" "))[0]+" "+i[1]},Ws=function(i,e,t){var r=Rt(e);return pt(parseFloat(e)+parseFloat(or(i,"x",t+"px",r)))+r},O0=function(i,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Gu(i,e)},vr="0deg",Un="0px",xr=") ",Gu=function(i,e){var t=e||this,r=t.xPercent,n=t.yPercent,a=t.x,s=t.y,o=t.z,l=t.rotation,c=t.rotationY,h=t.rotationX,d=t.skewX,u=t.skewY,m=t.scaleX,f=t.scaleY,_=t.transformPerspective,g=t.force3D,p=t.target,b=t.zOrigin,M="",v=g==="auto"&&i&&i!==1||g===!0;if(b&&(h!==vr||c!==vr)){var P=parseFloat(c)*on,T=Math.sin(P),w=Math.cos(P),R;P=parseFloat(h)*on,R=Math.cos(P),a=Ws(p,a,T*R*-b),s=Ws(p,s,-Math.sin(P)*-b),o=Ws(p,o,w*R*-b+b)}_!==Un&&(M+="perspective("+_+xr),(r||n)&&(M+="translate("+r+"%, "+n+"%) "),(v||a!==Un||s!==Un||o!==Un)&&(M+=o!==Un||v?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+xr),l!==vr&&(M+="rotate("+l+xr),c!==vr&&(M+="rotateY("+c+xr),h!==vr&&(M+="rotateX("+h+xr),(d!==vr||u!==vr)&&(M+="skew("+d+", "+u+xr),(m!==1||f!==1)&&(M+="scale("+m+", "+f+xr),p.style[ct]=M||"translate(0, 0)"},F0=function(i,e){var t=e||this,r=t.xPercent,n=t.yPercent,a=t.x,s=t.y,o=t.rotation,l=t.skewX,c=t.skewY,h=t.scaleX,d=t.scaleY,u=t.target,m=t.xOrigin,f=t.yOrigin,_=t.xOffset,g=t.yOffset,p=t.forceCSS,b=parseFloat(a),M=parseFloat(s),v,P,T,w,R;o=parseFloat(o),l=parseFloat(l),c=parseFloat(c),c&&(c=parseFloat(c),l+=c,o+=c),o||l?(o*=on,l*=on,v=Math.cos(o)*h,P=Math.sin(o)*h,T=Math.sin(o-l)*-d,w=Math.cos(o-l)*d,l&&(c*=on,R=Math.tan(l-c),R=Math.sqrt(1+R*R),T*=R,w*=R,c&&(R=Math.tan(c),R=Math.sqrt(1+R*R),v*=R,P*=R)),v=pt(v),P=pt(P),T=pt(T),w=pt(w)):(v=h,w=d,P=T=0),(b&&!~(a+"").indexOf("px")||M&&!~(s+"").indexOf("px"))&&(b=or(u,"x",a,"px"),M=or(u,"y",s,"px")),(m||f||_||g)&&(b=pt(b+m-(m*v+f*T)+_),M=pt(M+f-(m*P+f*w)+g)),(r||n)&&(R=u.getBBox(),b=pt(b+r/100*R.width),M=pt(M+n/100*R.height)),R="matrix("+v+","+P+","+T+","+w+","+b+","+M+")",u.setAttribute("transform",R),p&&(u.style[ct]=R)},B0=function(i,e,t,r,n){var a=360,s=St(n),o=parseFloat(n)*(s&&~n.indexOf("rad")?Mr:1),l=o-r,c=r+l+"deg",h,d;return s&&(h=n.split("_")[1],h==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),h==="cw"&&l<0?l=(l+a*eh)%a-~~(l/a)*a:h==="ccw"&&l>0&&(l=(l-a*eh)%a-~~(l/a)*a)),i._pt=d=new kt(i._pt,e,t,r,l,y0),d.e=c,d.u="deg",i._props.push(t),d},oh=function(i,e){for(var t in e)i[t]=e[t];return i},z0=function(i,e,t){var r=oh({},t._gsap),n="perspective,force3D,transformOrigin,svgOrigin",a=t.style,s,o,l,c,h,d,u,m;r.svg?(l=t.getAttribute("transform"),t.setAttribute("transform",""),a[ct]=e,s=$n(t,1),sr(t,ct),t.setAttribute("transform",l)):(l=getComputedStyle(t)[ct],a[ct]=e,s=$n(t,1),a[ct]=l);for(o in ki)l=r[o],c=s[o],l!==c&&n.indexOf(o)<0&&(u=Rt(l),m=Rt(c),h=u!==m?or(t,o,l,m):parseFloat(l),d=parseFloat(c),i._pt=new kt(i._pt,s,o,h,d-h,Xo),i._pt.u=m||0,i._props.push(o));oh(s,r)};Ht("padding,margin,Width,Radius",function(i,e){var t="Top",r="Right",n="Bottom",a="Left",s=(e<3?[t,r,n,a]:[t+a,t+r,n+r,n+a]).map(function(o){return e<2?i+o:"border"+o+i});ja[e>1?"border"+i:i]=function(o,l,c,h,d){var u,m;if(arguments.length<4)return u=s.map(function(f){return Ui(o,f,c)}),m=u.join(" "),m.split(u[0]).length===5?u[0]:m;u=(h+"").split(" "),m={},s.forEach(function(f,_){return m[f]=u[_]=u[_]||u[(_-1)/2|0]}),o.init(l,m,d)}});var Wu={name:"css",register:Yo,targetTest:function(i){return i.style&&i.nodeType},init:function(i,e,t,r,n){var a=this._props,s=i.style,o=t.vars.startAt,l,c,h,d,u,m,f,_,g,p,b,M,v,P,T,w,R;Sl||Yo(),this.styles=this.styles||Fu(i),w=this.styles.props,this.tween=t;for(f in e)if(f!=="autoRound"&&(c=e[f],!(jt[f]&&wu(f,e,t,r,i,n)))){if(u=typeof c,m=ja[f],u==="function"&&(c=c.call(t,r,i,n),u=typeof c),u==="string"&&~c.indexOf("random(")&&(c=Yn(c)),m)m(this,i,f,c,t)&&(T=1);else if(f.substr(0,2)==="--")l=(getComputedStyle(i).getPropertyValue(f)+"").trim(),c+="",rr.lastIndex=0,rr.test(l)||(_=Rt(l),g=Rt(c),g?_!==g&&(l=or(i,f,l,g)+g):_&&(c+=_)),this.add(s,"setProperty",l,c,r,n,0,0,f),a.push(f),w.push(f,0,s[f]);else if(u!=="undefined"){if(o&&f in o?(l=typeof o[f]=="function"?o[f].call(t,r,i,n):o[f],St(l)&&~l.indexOf("random(")&&(l=Yn(l)),Rt(l+"")||l==="auto"||(l+=Jt.units[f]||Rt(Ui(i,f))||""),(l+"").charAt(1)==="="&&(l=Ui(i,f))):l=Ui(i,f),d=parseFloat(l),p=u==="string"&&c.charAt(1)==="="&&c.substr(0,2),p&&(c=c.substr(2)),h=parseFloat(c),f in Si&&(f==="autoAlpha"&&(d===1&&Ui(i,"visibility")==="hidden"&&h&&(d=0),w.push("visibility",0,s.visibility),Qi(this,s,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),f!=="scale"&&f!=="transform"&&(f=Si[f],~f.indexOf(",")&&(f=f.split(",")[0]))),b=f in ki,b){if(this.styles.save(f),R=c,u==="string"&&c.substring(0,6)==="var(--"){if(c=$t(i,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var y=i.style.perspective;i.style.perspective=c,c=$t(i,"perspective"),y?i.style.perspective=y:sr(i,"perspective")}h=parseFloat(c)}if(M||(v=i._gsap,v.renderTransform&&!e.parseTransform||$n(i,e.parseTransform),P=e.smoothOrigin!==!1&&v.smooth,M=this._pt=new kt(this._pt,s,ct,0,1,v.renderTransform,v,0,-1),M.dep=1),f==="scale")this._pt=new kt(this._pt,v,"scaleY",v.scaleY,(p?an(v.scaleY,p+h):h)-v.scaleY||0,Xo),this._pt.u=0,a.push("scaleY",f),f+="X";else if(f==="transformOrigin"){w.push(Vt,0,s[Vt]),c=I0(c),v.svg?jo(i,c,0,P,0,this):(g=parseFloat(c.split(" ")[2])||0,g!==v.zOrigin&&Qi(this,v,"zOrigin",v.zOrigin,g),Qi(this,s,f,Ka(l),Ka(c)));continue}else if(f==="svgOrigin"){jo(i,c,1,P,0,this);continue}else if(f in ku){B0(this,v,f,d,p?an(d,p+c):c);continue}else if(f==="smoothOrigin"){Qi(this,v,"smooth",v.smooth,c);continue}else if(f==="force3D"){v[f]=c;continue}else if(f==="transform"){z0(this,c,i);continue}}else f in s||(f=vn(f)||f);if(b||(h||h===0)&&(d||d===0)&&!x0.test(c)&&f in s)_=(l+"").substr((d+"").length),h||(h=0),g=Rt(c)||(f in Jt.units?Jt.units[f]:_),_!==g&&(d=or(i,f,l,g)),this._pt=new kt(this._pt,b?v:s,f,d,(p?an(d,p+h):h)-d,!b&&(g==="px"||f==="zIndex")&&e.autoRound!==!1?E0:Xo),this._pt.u=g||0,b&&R!==c?(this._pt.b=l,this._pt.e=R,this._pt.r=M0):_!==g&&g!=="%"&&(this._pt.b=l,this._pt.r=S0);else if(f in s)U0.call(this,i,f,l,p?p+c:c);else if(f in i)this.add(i,f,l||i[f],p?p+c:c,r,n);else if(f!=="parseTransform"){ul(f,c);continue}b||(f in s?w.push(f,0,s[f]):typeof i[f]=="function"?w.push(f,2,i[f]()):w.push(f,1,l||i[f])),a.push(f)}}T&&Du(this)},render:function(i,e){if(e.tween._time||!Ml())for(var t=e._pt;t;)t.r(i,t.d),t=t._next;else e.styles.revert()},get:Ui,aliases:Si,getSetter:function(i,e,t){var r=Si[e];return r&&r.indexOf(",")<0&&(e=r),e in ki&&e!==Vt&&(i._gsap.x||Ui(i,"x"))?t&&Qc===t?e==="scale"?A0:w0:(Qc=t||{})&&(e==="scale"?R0:C0):i.style&&!ll(i.style[e])?b0:~e.indexOf("-")?T0:xl(i,e)},core:{_removeProperty:sr,_getMatrix:bl}};Gt.utils.checkPrefix=vn;Gt.core.getStyleSaver=Fu;(function(i,e,t,r){var n=Ht(i+","+e+","+t,function(a){ki[a]=1});Ht(e,function(a){Jt.units[a]="deg",ku[a]=1}),Si[n[13]]=i+","+e,Ht(r,function(a){var s=a.split(":");Si[s[1]]=n[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ht("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Jt.units[i]="px"});Gt.registerPlugin(Wu);var za=Gt.registerPlugin(Wu)||Gt;za.core.Tween;class H0{constructor(e){this.lenis=e,this.speedlines=document.querySelector(".speedlines-overlay"),this.init()}init(){this.lenis&&this.speedlines&&this.lenis.on("scroll",t=>{const r=Math.abs(t.velocity||0);if(r>1.8){const n=Math.min(.4,(r-1.8)*.08);this.speedlines.style.opacity=n.toString()}else this.speedlines.style.opacity="0"}),document.querySelectorAll(".manhwa-panel").forEach(t=>{t.addEventListener("mousemove",r=>{const n=t.getBoundingClientRect(),a=(r.clientX-n.left)/n.width-.5,s=(r.clientY-n.top)/n.height-.5;za.to(t,{rotationY:a*8,rotationX:-s*8,transformPerspective:900,ease:"power1.out",duration:.3})}),t.addEventListener("mouseleave",()=>{za.to(t,{rotationY:0,rotationX:0,ease:"power2.out",duration:.5})})});const e=new IntersectionObserver(t=>{t.forEach(r=>{r.isIntersecting&&(r.target.classList.add("revealed"),za.fromTo(r.target,{opacity:0,y:30},{opacity:1,y:0,duration:.7,ease:"power2.out"}),e.unobserve(r.target))})},{threshold:.1});document.querySelectorAll(".manhwa-chapter, .project-card, .process-step").forEach(t=>{e.observe(t)})}}class k0{constructor(e){this.canvas=e,this.ctx=e.getContext("2d"),this.points=[],this.splatters=[],this.maxPoints=28,this.mouse={x:0,y:0,prevX:0,prevY:0,speed:0},this.active=!0,this.init()}init(){this.resize(),window.addEventListener("resize",()=>this.resize()),window.addEventListener("mousemove",e=>{const t=e.clientX-this.mouse.prevX,r=e.clientY-this.mouse.prevY;this.mouse.speed=Math.sqrt(t*t+r*r),this.mouse.prevX=e.clientX,this.mouse.prevY=e.clientY,this.mouse.x=e.clientX,this.mouse.y=e.clientY,this.active&&(this.points.push({x:e.clientX,y:e.clientY,size:Math.max(2,Math.min(14,this.mouse.speed*.35)),alpha:.65,color:this.mouse.speed>25?"#FF2233":"#173C5B"}),this.points.length>this.maxPoints&&this.points.shift(),this.mouse.speed>35&&Math.random()>.6&&this.spawnSplatter(e.clientX,e.clientY,3))}),window.addEventListener("mousedown",e=>{this.spawnSplatter(e.clientX,e.clientY,16)}),this.animate()}resize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}spawnSplatter(e,t,r=10){for(let n=0;n<r;n++){const a=Math.random()*Math.PI*2,s=Math.random()*8+2;this.splatters.push({x:e,y:t,vx:Math.cos(a)*s,vy:Math.sin(a)*s,radius:Math.random()*4+1.5,alpha:.85,decay:Math.random()*.03+.015,color:Math.random()>.4?"#FF2233":"#173C5B"})}}animate(){if(requestAnimationFrame(this.animate.bind(this)),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.points.length>2)for(let e=1;e<this.points.length-1;e++){const t=this.points[e],r=this.points[e+1],n=(t.x+r.x)/2,a=(t.y+r.y)/2;this.ctx.beginPath(),this.ctx.moveTo(t.x,t.y),this.ctx.quadraticCurveTo(t.x,t.y,n,a),this.ctx.strokeStyle=t.color,this.ctx.globalAlpha=t.alpha,this.ctx.lineWidth=t.size,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.stroke(),t.alpha*=.92,t.size*=.96}this.points=this.points.filter(e=>e.alpha>.05);for(let e=this.splatters.length-1;e>=0;e--){const t=this.splatters[e];if(t.x+=t.vx,t.y+=t.vy,t.vx*=.92,t.vy*=.92,t.alpha-=t.decay,t.alpha<=0){this.splatters.splice(e,1);continue}this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.radius,0,Math.PI*2),this.ctx.fillStyle=t.color,this.ctx.globalAlpha=t.alpha,this.ctx.fill()}this.ctx.globalAlpha=1}}class V0{constructor(e){this.container=document.getElementById(e),this.currentDrawing="section-precast",this.scale=1,this.pan={x:0,y:0},this.isPanning=!1,this.startPan={x:0,y:0},this.drawings={"section-precast":{title:"STRUCTURAL SECTION 1:50 — HOLLOW-CORE & INVERTED-T BEAM",ref:"DWG-S01 // BMC III PRECAST FRAME",scaleLabel:"SCALE 1:50 @ A2",svg:this.getSectionSvg()},"framing-plan":{title:"MODULAR FRAMING PLAN — HOLLOW-CORE SLAB DISTRIBUTION",ref:"DWG-S02 // LEVEL 02 STRUCTURAL",scaleLabel:"SCALE 1:100 @ A2",svg:this.getPlanSvg()},"stair-detail":{title:"PRECAST STAIR FLIGHT & LANDING RECESS 1:25",ref:"DWG-D04 // CIRCULATION CORE",scaleLabel:"SCALE 1:25 @ A2",svg:this.getStairSvg()},"exploded-axon":{title:"EXPLODED AXONOMETRIC — COLUMN-CORBEL-BEAM JOINT",ref:"DWG-AX01 // JOINT AUDIT",scaleLabel:"N.T.S. // ISOMETRIC",svg:this.getAxonSvg()}},this.init()}init(){this.container&&(this.render(),this.attachEvents())}render(){const e=this.drawings[this.currentDrawing];this.container.innerHTML=`
      <div class="drawing-viewer-frame border-2 border-navy bg-cloud rounded relative overflow-hidden shadow-brutal flex flex-col h-[560px]">
        
        <!-- Top Toolbar -->
        <div class="viewer-toolbar bg-ice border-b-2 border-navy px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 z-10 font-fira text-xs">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-azure inline-block animate-pulse"></span>
            <span class="font-bold text-navy uppercase">${e.ref}</span>
            <span class="text-neutral-400 hidden sm:inline">|</span>
            <span class="text-neutral-600 hidden sm:inline">${e.title}</span>
          </div>

          <div class="flex items-center gap-2">
            <!-- Zoom controls -->
            <button id="btn-dv-zoom-in" class="px-2 py-1 bg-white border border-navy rounded hover:bg-light transition font-bold" title="Zoom In">+</button>
            <span id="dv-scale-text" class="px-1.5 py-1 text-[11px] font-bold text-navy">100%</span>
            <button id="btn-dv-zoom-out" class="px-2 py-1 bg-white border border-navy rounded hover:bg-light transition font-bold" title="Zoom Out">-</button>
            <button id="btn-dv-reset" class="px-2.5 py-1 bg-white border border-navy rounded hover:bg-light transition text-[11px]" title="Reset View">RESET</button>
          </div>
        </div>

        <!-- Drawing Canvas Area -->
        <div id="dv-viewport" class="flex-1 relative overflow-hidden cursor-grab active:cursor-grabbing bg-cloud select-none">
          <div id="dv-canvas" class="w-full h-full flex items-center justify-center transition-transform duration-75 origin-center">
            ${e.svg}
          </div>

          <!-- Watermark Grid Pattern -->
          <div class="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#173c5b_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>

        <!-- Bottom Selector Tabs & Title Block -->
        <div class="bg-ice border-t-2 border-navy px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 z-10 font-fira text-xs">
          <div class="flex flex-wrap items-center gap-1.5">
            <button class="dv-tab-btn px-2.5 py-1 rounded border border-navy text-[11px] font-bold ${this.currentDrawing==="section-precast"?"bg-navy text-white":"bg-white text-navy hover:bg-light"}" data-drawing="section-precast">SECTION 1:50</button>
            <button class="dv-tab-btn px-2.5 py-1 rounded border border-navy text-[11px] font-bold ${this.currentDrawing==="framing-plan"?"bg-navy text-white":"bg-white text-navy hover:bg-light"}" data-drawing="framing-plan">FRAMING PLAN</button>
            <button class="dv-tab-btn px-2.5 py-1 rounded border border-navy text-[11px] font-bold ${this.currentDrawing==="stair-detail"?"bg-navy text-white":"bg-white text-navy hover:bg-light"}" data-drawing="stair-detail">STAIR RECESS</button>
            <button class="dv-tab-btn px-2.5 py-1 rounded border border-navy text-[11px] font-bold ${this.currentDrawing==="exploded-axon"?"bg-navy text-white":"bg-white text-navy hover:bg-light"}" data-drawing="exploded-axon">EXPLODED AXON</button>
          </div>

          <div class="text-[11px] text-neutral-600 font-fira flex items-center gap-3">
            <span>${e.scaleLabel}</span>
            <span class="text-azure font-bold">DRAG TO PAN • SCROLL TO ZOOM</span>
          </div>
        </div>

      </div>
    `,this.attachControls()}attachEvents(){this.container.addEventListener("click",e=>{const t=e.target.closest(".dv-tab-btn");if(t){const r=t.getAttribute("data-drawing");r&&r!==this.currentDrawing&&(this.currentDrawing=r,this.scale=1,this.pan={x:0,y:0},At.playBlueprintUnfold(),this.render())}})}attachControls(){var e,t,r;const n=document.getElementById("dv-viewport"),a=document.getElementById("dv-canvas"),s=document.getElementById("dv-scale-text"),o=()=>{a&&(a.style.transform=`translate(${this.pan.x}px, ${this.pan.y}px) scale(${this.scale})`),s&&(s.textContent=`${Math.round(this.scale*100)}%`)};(e=document.getElementById("btn-dv-zoom-in"))==null||e.addEventListener("click",()=>{this.scale=Math.min(3,this.scale+.25),At.playCaliperClick(),o()}),(t=document.getElementById("btn-dv-zoom-out"))==null||t.addEventListener("click",()=>{this.scale=Math.max(.5,this.scale-.25),At.playCaliperClick(),o()}),(r=document.getElementById("btn-dv-reset"))==null||r.addEventListener("click",()=>{this.scale=1,this.pan={x:0,y:0},At.playPencilScratch(),o()}),n==null||n.addEventListener("mousedown",l=>{this.isPanning=!0,this.startPan={x:l.clientX-this.pan.x,y:l.clientY-this.pan.y}}),window.addEventListener("mouseup",()=>{this.isPanning=!1}),n==null||n.addEventListener("mousemove",l=>{this.isPanning&&(this.pan.x=l.clientX-this.startPan.x,this.pan.y=l.clientY-this.startPan.y,o())}),n==null||n.addEventListener("wheel",l=>{l.preventDefault();const c=l.deltaY<0?1.15:.88;this.scale=Math.max(.4,Math.min(3.5,this.scale*c)),o()},{passive:!1})}getSectionSvg(){return`
      <svg viewBox="0 0 900 480" width="860" height="460" xmlns="http://www.w3.org/2000/svg" class="select-none pointer-events-none">
        <!-- Blueprint Grid -->
        <defs>
          <pattern id="sGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="20" y2="0" stroke="#C9E9FC" stroke-width="0.5" />
            <line x1="0" y1="0" x2="0" y2="20" stroke="#C9E9FC" stroke-width="0.5" />
          </pattern>
        </defs>
        <rect width="900" height="480" fill="url(#sGrid)" />

        <!-- Column Left (Precast 500x500) -->
        <rect x="80" y="40" width="100" height="400" fill="#E5F4FF" stroke="#173C5B" stroke-width="2.5" />
        <!-- Corbel Left -->
        <polygon points="180,240 250,240 250,290 180,340" fill="#C9E9FC" stroke="#173C5B" stroke-width="2" />
        <line x1="190" y1="240" x2="240" y2="240" stroke="#399DD6" stroke-width="4" stroke-linecap="round" />
        <!-- Neoprene Bearing Pad -->
        <rect x="200" y="235" width="40" height="5" fill="#14212D" />

        <!-- Inverted-T Precast Beam -->
        <path d="M 235,160 L 235,320 L 315,320 L 315,240 L 415,240 L 415,320 L 495,320 L 495,160 Z" fill="#E5F4FF" stroke="#173C5B" stroke-width="2.5" />
        
        <!-- Left Hollow-Core Slab resting on Inverted-T Ledge -->
        <rect x="180" y="160" width="130" height="75" fill="#FFFFFF" stroke="#173C5B" stroke-width="2" />
        <!-- Longitudinal Core Voids -->
        <circle cx="210" cy="197" r="16" fill="#F7FBFF" stroke="#399DD6" stroke-width="1.5" />
        <circle cx="255" cy="197" r="16" fill="#F7FBFF" stroke="#399DD6" stroke-width="1.5" />

        <!-- Right Hollow-Core Slab resting on Ledge -->
        <rect x="420" y="160" width="280" height="75" fill="#FFFFFF" stroke="#173C5B" stroke-width="2" />
        <!-- Core Voids -->
        <circle cx="460" cy="197" r="16" fill="#F7FBFF" stroke="#399DD6" stroke-width="1.5" />
        <circle cx="510" cy="197" r="16" fill="#F7FBFF" stroke="#399DD6" stroke-width="1.5" />
        <circle cx="560" cy="197" r="16" fill="#F7FBFF" stroke="#399DD6" stroke-width="1.5" />
        <circle cx="610" cy="197" r="16" fill="#F7FBFF" stroke="#399DD6" stroke-width="1.5" />

        <!-- Cast-In-Place Concrete Topping (50mm with Mesh) -->
        <rect x="180" y="145" width="520" height="15" fill="#C9E9FC" stroke="#399DD6" stroke-width="1.5" stroke-dasharray="3,2" />

        <!-- Column Right -->
        <rect x="720" y="40" width="100" height="400" fill="#E5F4FF" stroke="#173C5B" stroke-width="2.5" />
        <!-- Corbel Right -->
        <polygon points="720,240 650,240 650,290 720,340" fill="#C9E9FC" stroke="#173C5B" stroke-width="2" />

        <!-- Dimension Lines & Annotations -->
        <g stroke="#173C5B" stroke-width="1">
          <!-- Bearing length annotation -->
          <line x1="200" y1="260" x2="240" y2="260" />
          <line x1="200" y1="255" x2="200" y2="265" />
          <line x1="240" y1="255" x2="240" y2="265" />
          <text x="220" y="278" font-family="'Fira Code', monospace" font-size="10" font-weight="bold" fill="#173C5B" text-anchor="middle">90 mm BEARING</text>

          <!-- Hollow-Core Depth -->
          <line x1="708" y1="160" x2="708" y2="235" />
          <text x="714" y="202" font-family="'Fira Code', monospace" font-size="10" font-weight="bold" fill="#399DD6">HC 250</text>
          
          <!-- Callout pointer -->
          <line x1="365" y1="220" x2="365" y2="90" stroke="#E5A93C" stroke-width="1.5" />
          <circle cx="365" cy="220" r="3" fill="#E5A93C" />
          <text x="365" y="80" font-family="'Fira Code', monospace" font-size="11" font-weight="bold" fill="#173C5B" text-anchor="middle">PRECAST INVERTED-T LEDGE BEAM (IT-600)</text>

          <text x="560" y="135" font-family="'Fira Code', monospace" font-size="10" font-weight="bold" fill="#173C5B">50mm STRUCTURAL TOPPING + A142 MESH</text>
        </g>
      </svg>
    `}getPlanSvg(){return`
      <svg viewBox="0 0 900 480" width="860" height="460" xmlns="http://www.w3.org/2000/svg" class="select-none pointer-events-none">
        <rect width="900" height="480" fill="#F7FBFF" />
        
        <!-- Grid Bubbles & Lines -->
        <g stroke="#399DD6" stroke-width="1" stroke-dasharray="6,4">
          <!-- Vertical Grids -->
          <line x1="140" y1="40" x2="140" y2="440" />
          <line x1="380" y1="40" x2="380" y2="440" />
          <line x1="620" y1="40" x2="620" y2="440" />
          <line x1="780" y1="40" x2="780" y2="440" />

          <!-- Horizontal Grids -->
          <line x1="80" y1="120" x2="840" y2="120" />
          <line x1="80" y1="360" x2="840" y2="360" />
        </g>

        <!-- Grid Markers -->
        <g fill="#FFFFFF" stroke="#173C5B" stroke-width="1.5" font-family="'Fira Code', monospace" font-size="12" font-weight="bold" text-anchor="middle">
          <circle cx="140" cy="30" r="14" /><text x="140" y="34">1</text>
          <circle cx="380" cy="30" r="14" /><text x="380" y="34">2</text>
          <circle cx="620" cy="30" r="14" /><text x="620" y="34">3</text>
          <circle cx="780" cy="30" r="14" /><text x="780" y="34">4</text>

          <circle cx="65" cy="120" r="14" /><text x="65" y="124">A</text>
          <circle cx="65" cy="360" r="14" /><text x="65" y="364">B</text>
        </g>

        <!-- Precast Columns at Grid Intersections -->
        <g fill="#173C5B">
          <rect x="125" y="105" width="30" height="30" />
          <rect x="365" y="105" width="30" height="30" />
          <rect x="605" y="105" width="30" height="30" />
          <rect x="765" y="105" width="30" height="30" />

          <rect x="125" y="345" width="30" height="30" />
          <rect x="365" y="345" width="30" height="30" />
          <rect x="605" y="345" width="30" height="30" />
          <rect x="765" y="345" width="30" height="30" />
        </g>

        <!-- Inverted-T Ledge Beams along Grid A & B -->
        <rect x="140" y="112" width="640" height="16" fill="#8CCDF2" stroke="#173C5B" stroke-width="1.5" />
        <rect x="140" y="352" width="640" height="16" fill="#8CCDF2" stroke="#173C5B" stroke-width="1.5" />

        <!-- Hollow-Core Slabs laid across span (1200mm width planks) -->
        <g fill="#E5F4FF" stroke="#399DD6" stroke-width="1">
          <rect x="145" y="132" width="44" height="216" />
          <rect x="193" y="132" width="44" height="216" />
          <rect x="241" y="132" width="44" height="216" />
          <rect x="289" y="132" width="44" height="216" />
          <rect x="337" y="132" width="44" height="216" />

          <rect x="385" y="132" width="44" height="216" />
          <rect x="433" y="132" width="44" height="216" />
          <rect x="481" y="132" width="44" height="216" />
          <rect x="529" y="132" width="44" height="216" />
          <rect x="577" y="132" width="44" height="216" />

          <!-- Stair / Service Opening Core -->
          <rect x="625" y="132" width="150" height="216" fill="#C9E9FC" stroke="#173C5B" stroke-width="2" />
          <line x1="625" y1="132" x2="775" y2="348" stroke="#E5A93C" stroke-width="2" />
          <line x1="625" y1="348" x2="775" y2="132" stroke="#E5A93C" stroke-width="2" />
          <text x="700" y="245" font-family="'Fira Code', monospace" font-size="12" font-weight="bold" fill="#173C5B" text-anchor="middle">STAIR VOID</text>
        </g>

        <!-- Span Direction Arrows -->
        <g stroke="#173C5B" stroke-width="2" marker-end="url(#arrow)">
          <line x1="265" y1="180" x2="265" y2="300" />
          <line x1="505" y1="180" x2="505" y2="300" />
          <text x="275" y="245" font-family="'Fira Code', monospace" font-size="11" font-weight="bold" fill="#173C5B">SPAN 7.2 m</text>
        </g>

        <!-- Piece Mark Callouts -->
        <rect x="180" y="225" width="68" height="22" fill="#FFFFFF" stroke="#173C5B" stroke-width="1" />
        <text x="214" y="240" font-family="'Fira Code', monospace" font-size="10" font-weight="bold" fill="#173C5B" text-anchor="middle">HC-1200-01</text>
      </svg>
    `}getStairSvg(){return`
      <svg viewBox="0 0 900 480" width="860" height="460" xmlns="http://www.w3.org/2000/svg" class="select-none pointer-events-none">
        <rect width="900" height="480" fill="#F7FBFF" />
        
        <!-- Floor Landing Precast Slab with Pocket Recess -->
        <path d="M 60,80 L 320,80 L 320,180 L 250,180 L 250,260 L 60,260 Z" fill="#E5F4FF" stroke="#173C5B" stroke-width="2.5" />
        
        <!-- Elastomeric Bearing Strip in Pocket -->
        <rect x="250" y="175" width="60" height="6" fill="#14212D" />

        <!-- Inclined Stair Flight resting on the Landing Pocket -->
        <polygon points="260,165 390,165 390,205 450,205 450,245 510,245 510,285 570,285 570,325 630,325 630,365 720,365 720,440 590,440 210,200 210,165" fill="#FFFFFF" stroke="#173C5B" stroke-width="2.5" />

        <!-- Dowel Pin Connection -->
        <line x1="285" y1="130" x2="285" y2="215" stroke="#E5A93C" stroke-width="4" stroke-dasharray="8,4" />
        <circle cx="285" cy="175" r="5" fill="#E5A93C" />

        <!-- Dimension Strings -->
        <g stroke="#173C5B" stroke-width="1">
          <!-- Riser 170mm -->
          <line x1="450" y1="205" x2="450" y2="245" stroke="#399DD6" stroke-width="1.5" />
          <text x="465" y="230" font-family="'Fira Code', monospace" font-size="11" font-weight="bold" fill="#399DD6">R = 170mm</text>

          <!-- Tread 280mm -->
          <line x1="390" y1="205" x2="450" y2="205" stroke="#399DD6" stroke-width="1.5" />
          <text x="420" y="195" font-family="'Fira Code', monospace" font-size="11" font-weight="bold" fill="#399DD6" text-anchor="middle">T = 280mm</text>

          <!-- Callout Pin -->
          <line x1="285" y1="130" x2="360" y2="70" stroke="#173C5B" />
          <text x="370" y="70" font-family="'Fira Code', monospace" font-size="11" font-weight="bold" fill="#173C5B">Ø20 SHEAR DOWEL IN GROUTED SLEEVE</text>

          <text x="140" y="160" font-family="'Fira Code', monospace" font-size="12" font-weight="bold" fill="#173C5B">LEVEL 02 LANDING RECESS</text>
        </g>
      </svg>
    `}getAxonSvg(){return`
      <svg viewBox="0 0 900 480" width="860" height="460" xmlns="http://www.w3.org/2000/svg" class="select-none pointer-events-none">
        <rect width="900" height="480" fill="#F7FBFF" />
        
        <!-- 3D Isometric Precast Column Base -->
        <g stroke="#173C5B" stroke-width="2" fill="#E5F4FF">
          <!-- Column Shaft -->
          <polygon points="420,380 480,350 480,240 420,270" fill="#C9E9FC" />
          <polygon points="420,380 360,350 360,240 420,270" fill="#E5F4FF" />
          <polygon points="420,270 480,240 420,210 360,240" fill="#FFFFFF" />

          <!-- Corbel Ledge -->
          <polygon points="480,300 540,270 540,240 480,270" fill="#8CCDF2" />
          <polygon points="480,270 540,240 500,220 440,250" fill="#399DD6" />
        </g>

        <!-- Exploded Floating Inverted-T Beam -->
        <g stroke="#173C5B" stroke-width="2" fill="#FFFFFF" transform="translate(60, -90)">
          <polygon points="480,250 640,170 640,130 480,210" fill="#C9E9FC" />
          <polygon points="480,250 430,225 430,185 480,210" fill="#E5F4FF" />
          <polygon points="480,210 640,130 590,105 430,185" fill="#FFFFFF" />
          <text x="560" y="150" font-family="'Fira Code', monospace" font-size="11" font-weight="bold" fill="#173C5B">INVERTED-T LEDGE</text>
        </g>

        <!-- Exploded Hollow-Core Slab Planks -->
        <g stroke="#399DD6" stroke-width="1.5" fill="#F7FBFF" transform="translate(-40, -180)">
          <polygon points="360,220 520,140 520,110 360,190" fill="#E5F4FF" />
          <polygon points="360,190 520,110 470,85 310,165" fill="#FFFFFF" />
          <circle cx="380" cy="180" r="8" fill="#C9E9FC" />
          <circle cx="410" cy="165" r="8" fill="#C9E9FC" />
          <text x="350" y="125" font-family="'Fira Code', monospace" font-size="11" font-weight="bold" fill="#399DD6">HOLLOW-CORE SLAB (HC-250)</text>
        </g>

        <!-- Assembly Exploded Guide Vectors -->
        <g stroke="#E5A93C" stroke-width="1.5" stroke-dasharray="4,4">
          <line x1="500" y1="240" x2="560" y2="150" />
          <line x1="420" y1="210" x2="380" y2="30" />
        </g>
      </svg>
    `}}const Xs=[{id:"precast-bim",title:"PRECAST BIM & COMPUTATIONAL STRUCTURAL SUITE",subtitle:"Revit API Automation • Hollow-Core Slab Layouts • Structural Corbels",category:"ARCHITECTURE & BIM",badge:"ENGINEERING SUITE",status:"DOCUMENTED CAPABILITY",tools:["Autodesk Revit API","pyRevit","Python","PCI Design Manual","Eurocode 2"],highlight:"Algorithmic placement of precast floor systems, inverted-T ledge beams, and corbel calculations inside strict Revit API Transactions.",metrics:[{label:"STANDARD",value:"PCI / EN 1992"},{label:"ELEMENT TRACKING",value:"100% Unique Marks"},{label:"UNIT CONVERSION",value:"304.8 mm/ft"},{label:"AUTOMATION",value:"Revit Transactions"}],chapters:{ch1_idea:"In conventional architectural-structural coordination, modeling hundreds of precast hollow-core slabs, inverted-T beams, and beam-to-column corbels is labor-intensive and prone to bearing-length errors. The idea was to create an automated computational bridge in Revit that calculates bearings and places parametric elements algorithmically.",ch2_challenge:"Precast elements require strict bearing minimums (typically 75mm on masonry, 60mm on steel, 90mm on concrete ledges). Web integrity must be preserved when transverse slab cuts occur, and all geometry modifications must run inside verified database Transactions without corrupting model worksets.",ch3_blueprint:"Architectural floor loops and column grids are extracted as boundary vectors. The algorithm determines optimal span directions, divides floor envelopes into modular 1200mm hollow-core widths, and generates bearing ledges on supporting inverted-T and L-shaped beams.",ch4_engineering:"Implemented verified structural calculations for inverted-T beam ledges based on PCI Handbook equations (punching shear, cantilever bending, hanger steel tension) and corbel shear-friction under vertical and horizontal restrained creep forces.",ch5_build:"Built using Python and pyRevit against the Autodesk Revit API. The script iterates boundary curves, instantiates structural framing and floor families, binds shared parameters for piece marks, and checks clash clearances.",ch6_result:"Dramatically reduces modeling time from hours to seconds for multi-story precast frame assemblies, guarantees code-compliant ledge bearing widths, and produces automated shop drawing schedules with piece mark IDs.",ch7_next:"theory-of-structures"}},{id:"theory-of-structures",title:"THEORY OF STRUCTURES MASTERY LAB",subtitle:"Interactive Structural Analysis & Determinacy Engine",category:"COMPUTATIONAL ENGINEERING",badge:"LAB & SOLVERS",status:"PRODUCTION CODEBASE",tools:["JavaScript (ES6+)","KaTeX Math Engine","Canvas Graphics","HTML5"],highlight:"Interactive analytical platform computing determinate & indeterminate beams, virtual work, slope deflection, and moment distribution.",repoUrl:"https://github.com/dagiyosi-pixel/theory-of-structures-mastery-lab",metrics:[{label:"METHODS",value:"7 Core Modules"},{label:"ACCURACY",value:"Exact Symbolic/Math"},{label:"EQUATIONS",value:"KaTeX Rendered"},{label:"SOLVER",value:"Real-Time Matrix"}],chapters:{ch1_idea:"Structural engineering students and practitioners often struggle with the conceptual leap between abstract differential equations and physical beam bending. The Mastery Lab was built to turn complex structural theory into an intuitive, real-time graphical calculator.",ch2_challenge:"Indeterminate structures require multi-degree-of-freedom matrix solutions (Consistent Deformation, Three Moment Equation, Slope Deflection, and Hardy Cross Moment Distribution) with step-by-step intermediate checks and KaTeX equation formatting.",ch3_blueprint:"Designed as an analytical workbook: input beam span lengths, support conditions (fixed, pinned, roller), and loading types (UDL, point load, applied moment), producing continuous Bending Moment Diagrams (BMD) and Shear Force Diagrams (SFD).",ch4_engineering:"Formulated exact stiffness matrices: [K]{u} = {P}, conjugate beam rotations, and virtual work integrals ($\\int \\frac{M m}{EI} dx$) with automated integration table lookups.",ch5_build:"Engineered in vanilla JavaScript for maximum speed without framework overhead, utilizing KaTeX for LaTeX formula rendering, custom canvas graphing for BMD/SFD curves, and offline local caching.",ch6_result:"A self-contained engineering laboratory solving 7 major structural methods, providing step-by-step derivations, distractor diagnostics, and interactive deformation plots.",ch7_next:"ethiopia-curriculum"}},{id:"ethiopia-curriculum",title:"ETHIOPIAN NATIONAL CURRICULUM PLATFORM (SQ3R)",subtitle:"Grade 7 & 8 Examination Mastery & Ministry Simulator",category:"EDUCATIONAL TECHNOLOGY",badge:"FLAGSHIP APP",status:"DEPLOYED PWA",tools:["Progressive Web App","HTML5 Canvas (1200x840)","Web Audio API","LocalStorage"],highlight:"Authentic, offline-first study and timed examination platform based on the SQ3R method, aligned with the FDRE Ministry of Education CBA.",liveUrl:"https://dagiyosi-pixel.github.io/ethiopia-curriculum-sq3r-platform/",repoUrl:"https://github.com/dagiyosi-pixel/ethiopia-curriculum-sq3r-platform",metrics:[{label:"CURRICULUM UNITS",value:"96 Units"},{label:"SUBTOPICS",value:"184 Subtopics"},{label:"CBA QUESTIONS",value:"577+ Verified Qs"},{label:"MASTERY GATE",value:"Strict 80%"}],chapters:{ch1_idea:"Middle school students preparing for Ethiopian national examinations often lack access to reliable internet, comprehensive textbooks, or personalized exam hall practice. The idea: engineer a 100% offline-first PWA implementing the proven SQ3R study cycle.",ch2_challenge:"Packaging 96 complete units across 6 subjects (Math, Science, Social Studies, English, Citizenship, IT) with 577+ verified questions while keeping payload size tiny and running smoothly on low-cost Android phones without internet.",ch3_blueprint:"Structured information architecture: 1) Survey (Syllabus glance), 2) Question (Diagnostic checkpoints), 3) Read (MoE textbook archive), 4) Recite (3D Leitner flip flashcards), and 5) Review (Timed Ministry Exam Hall Simulator).",ch4_engineering:"Psychometric scoring engine with zero false inflation: calculating realistic national exam prediction curves, distractor autopsy logs, and automated A4 1-page formula sheet generation.",ch5_build:"Client-side PWA architecture with Service Worker asset caching, high-resolution HTML5 Canvas generator drawing the official FDRE MoE crest and honors certificate with 1-click HD PNG export, and Web Audio sound feedback.",ch6_result:"Empowered students with a zero-data, accessible learning tool that tracks individual mastery, multi-account progress for shared family devices, and instant Telegram honors challenge sharing.",ch7_next:"ethiopia-360"}},{id:"ethiopia-360",title:"ETHIOPIA//360 — COMMUNITY ATLAS",subtitle:"Geographic, Cultural & Spatial Visual Explorer",category:"SPATIAL COMPUTING & GIS",badge:"DIGITAL ATLAS",status:"PRODUCTION REPOSITORY",tools:["JavaScript","Modern CSS","SVG Spatial Mapping","Geo Data"],highlight:"Interactive digital atlas exploring the geographic, architectural, and historical topology of Ethiopia.",repoUrl:"https://github.com/dagiyosi-pixel/ethiopia-360",metrics:[{label:"REGIONS",value:"All Regional States"},{label:"TOPOLOGY",value:"Rift Valley to Highlands"},{label:"MAPPING",value:"Interactive Vector SVG"},{label:"CULTURE",value:"Heritage & Architecture"}],chapters:{ch1_idea:"Ethiopia possesses extraordinary geological, archaeological, and architectural diversity (from the monolithic rock churches of Lalibela to the Great Rift Valley). ETHIOPIA//360 was conceived as an interactive digital atlas celebrating this heritage.",ch2_challenge:"Presenting multi-layered geographic, cultural, and architectural data in an engaging, visual way without heavy, slow GIS software dependencies.",ch3_blueprint:"Created an interactive vector map interface with fluid region-by-region drill-down, synchronized architectural dossiers, and elevation cross-sections.",ch4_engineering:"Optimized vector coordinates, coordinate projection algorithms, and lightweight spatial metadata querying.",ch5_build:"Built using semantic HTML5, SVG path interaction, custom animations, and responsive typography.",ch6_result:"A clean, responsive interactive digital showcase of Ethiopian topography, cultural monuments, and architectural history.",ch7_next:"amt-exam"}},{id:"amt-exam",title:"AMT EXAM PREPARATION PLATFORM",subtitle:"Adaptive Diagnostic Assessment Engine",category:"PRODUCT DESIGN & MOBILE",badge:"EXAM PLATFORM",status:"DOCUMENTED APPLICATION",tools:["Mobile-First UI","JavaScript","LocalStorage","Web Audio"],highlight:"High-retention assessment engine with timed diagnostic question banks, performance analytics, and rapid active recall.",repoUrl:"https://github.com/dagiyosi-pixel/amt-exam-app",metrics:[{label:"ASSESSMENT",value:"Adaptive Timed Tests"},{label:"INTERFACE",value:"Thumb-Friendly Mobile"},{label:"FEEDBACK",value:"Instant Explanations"},{label:"STORAGE",value:"Offline Device State"}],chapters:{ch1_idea:"Exam candidates require rapid, low-friction practice tests that isolate knowledge gaps immediately after every question rather than waiting until the end.",ch2_challenge:"Designing an intuitive, thumb-friendly mobile interface with zero distractions and instant visual feedback on error patterns.",ch3_blueprint:"Streamlined single-screen question flow with an interactive question palette, flag-for-review tags, and detailed distractor explanations.",ch4_engineering:"Scoring algorithms weighting question difficulty and tracking speed-per-question to build time-management stamina.",ch5_build:"Responsive modern web application optimized for smartphones and offline local storage.",ch6_result:"Proven study companion allowing candidates to rapidly drill weak topics and track progress toward target scores.",ch7_next:"manga-noir"}},{id:"manga-noir",title:"MANGA-NOIR WEBGL SHADER LAB",subtitle:"Real-Time 3D Cel-Shading & Graphic Novel Shaders",category:"CREATIVE 3D & SHADERS",badge:"EXPERIMENTAL LAB",status:"ACTIVE 3D ENGINE",tools:["Three.js","GLSL Shaders","GSAP 3","Lenis Scroll","Web Audio API"],highlight:"GPU-accelerated 3D engine rendering real-time manga hatching, toon rim-lighting, and interactive particle dynamics.",liveUrl:"https://dagiyosi-pixel.github.io",repoUrl:"https://github.com/dagiyosi-pixel/dagiyosi-pixel.github.io",metrics:[{label:"FRAME RATE",value:"60+ FPS Native"},{label:"SHADERS",value:"Custom GLSL Cel/Hatch"},{label:"PARTICLES",value:"1,800+ Reactive"},{label:"SOUND",value:"Procedural Web Audio"}],chapters:{ch1_idea:"Inspired by the high-impact graphic storytelling of contemporary manga and the interactive creative web development of Samana Studio. The mission: build an authentic, interactive 3D manga experience running directly in the browser.",ch2_challenge:"Simulating traditional ink cross-hatching and cel-shaded screentones on complex 3D meshes at native 60fps without heavy raster textures.",ch3_blueprint:"Constructed a custom GLSL pipeline where surface normal vectors calculate light luminance, procedurally generating diagonal crosshatch patterns in dark zones and electric rim-light accents in highlights.",ch4_engineering:"Vertex & fragment shaders (`MangaHatchShader`) computing screen-space UV coordinates, smooth stepped tone ramps, and inertial mouse tracking.",ch5_build:"Integrated with Three.js, GSAP ScrollTrigger, and Lenis momentum scrolling. Features an articulated 3D manga hand and procedural sound synthesizer.",ch6_result:"An award-winning caliber creative coding showcase that demonstrates the convergence of digital art, 3D technology, and storytelling.",ch7_next:"precast-bim"}}];class G0{constructor(){this.modal=document.getElementById("case-study-modal"),this.content=document.getElementById("case-study-content"),this.closeBtn=document.getElementById("btn-close-case-study"),this.currentProjectId=null,this.init()}init(){var e;this.modal&&((e=this.closeBtn)==null||e.addEventListener("click",()=>this.close()),window.addEventListener("keydown",t=>{t.key==="Escape"&&!this.modal.classList.contains("hidden")&&this.close()}),this.modal.addEventListener("click",t=>{const r=t.target.closest("[data-next-project]");if(r){const n=r.getAttribute("data-next-project");n&&this.open(n)}}))}open(e){const t=Xs.find(a=>a.id===e);if(!t)return;this.currentProjectId=e,At.playBlueprintUnfold();const r=t.chapters,n=Xs.find(a=>a.id===r.ch7_next)||Xs[0];this.content.innerHTML=`
      <!-- Header Banner / Breadcrumb -->
      <div class="border-b-2 border-navy pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div class="flex items-center gap-2 mb-2 font-fira text-xs font-bold text-azure uppercase tracking-wider">
            <span>// MANHWA DOSSIER</span>
            <span>•</span>
            <span class="bg-navy text-white px-2 py-0.5 rounded">${t.category}</span>
            <span class="bg-gold text-navy px-2 py-0.5 rounded font-black">${t.badge}</span>
          </div>
          <h2 class="font-anton text-4xl sm:text-6xl text-navy uppercase tracking-tight leading-none">
            ${t.title}
          </h2>
          <p class="font-fira text-sm text-neutral-600 mt-2 font-medium">
            ${t.subtitle}
          </p>
        </div>

        <div class="flex flex-wrap gap-2">
          ${t.liveUrl?`
            <a href="${t.liveUrl}" target="_blank" rel="noopener noreferrer" class="manga-btn px-4 py-2 bg-azure text-white font-fira text-xs font-bold uppercase rounded border-2 border-navy shadow-brutal-sm hover:bg-navy transition">
              <span>🚀 LAUNCH LIVE APP</span>
            </a>
          `:""}
          ${t.repoUrl?`
            <a href="${t.repoUrl}" target="_blank" rel="noopener noreferrer" class="manga-btn px-4 py-2 bg-white text-navy font-fira text-xs font-bold uppercase rounded border-2 border-navy shadow-brutal-sm hover:bg-ice transition">
              <span>📁 INSPECT REPO</span>
            </a>
          `:""}
        </div>
      </div>

      <!-- Verified Metrics Strip -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-ice border-2 border-navy rounded mb-10 font-fira shadow-brutal-sm">
        ${t.metrics.map(a=>`
          <div class="p-2">
            <span class="block text-2xl font-anton text-azure leading-tight">${a.value}</span>
            <span class="text-[10px] font-bold text-navy uppercase tracking-wider">${a.label}</span>
          </div>
        `).join("")}
      </div>

      <!-- Seven Narrative Chapters -->
      <div class="space-y-12">
        
        <!-- CHAPTER 01: THE IDEA -->
        <div class="manhwa-chapter border-l-4 border-azure pl-6 relative">
          <span class="font-fira text-xs font-black text-azure uppercase tracking-widest block mb-1">
            CHAPTER 01 // THE IDEA
          </span>
          <h3 class="font-anton text-2xl text-navy uppercase mb-3">GENESIS OF THE CONCEPT</h3>
          <p class="font-sans text-neutral-700 leading-relaxed text-sm md:text-base">
            ${r.ch1_idea}
          </p>
        </div>

        <!-- CHAPTER 02: THE CHALLENGE -->
        <div class="manhwa-chapter border-l-4 border-navy pl-6 relative">
          <span class="font-fira text-xs font-black text-navy uppercase tracking-widest block mb-1">
            CHAPTER 02 // THE CHALLENGE
          </span>
          <h3 class="font-anton text-2xl text-navy uppercase mb-3">TECHNICAL & SPATIAL CONSTRAINTS</h3>
          <p class="font-sans text-neutral-700 leading-relaxed text-sm md:text-base">
            ${r.ch2_challenge}
          </p>
        </div>

        <!-- CHAPTER 03: THE BLUEPRINT -->
        <div class="manhwa-chapter border-l-4 border-sky pl-6 relative bg-ice/40 p-6 rounded border border-navy/20">
          <span class="font-fira text-xs font-black text-azure uppercase tracking-widest block mb-1">
            CHAPTER 03 // THE BLUEPRINT
          </span>
          <h3 class="font-anton text-2xl text-navy uppercase mb-3">SYSTEM ARCHITECTURE & SCHEMATICS</h3>
          <p class="font-sans text-neutral-700 leading-relaxed text-sm md:text-base mb-4">
            ${r.ch3_blueprint}
          </p>
          <div class="flex flex-wrap gap-2 font-fira text-xs">
            ${t.tools.map(a=>`<span class="bg-white border border-navy px-2.5 py-1 rounded text-navy font-bold">${a}</span>`).join("")}
          </div>
        </div>

        <!-- CHAPTER 04: THE ENGINEERING -->
        <div class="manhwa-chapter border-l-4 border-gold pl-6 relative">
          <span class="font-fira text-xs font-black text-gold uppercase tracking-widest block mb-1">
            CHAPTER 04 // THE ENGINEERING
          </span>
          <h3 class="font-anton text-2xl text-navy uppercase mb-3">MATHEMATICS, LOGIC & EQUATIONS</h3>
          <p class="font-sans text-neutral-700 leading-relaxed text-sm md:text-base">
            ${r.ch4_engineering}
          </p>
        </div>

        <!-- CHAPTER 05: THE BUILD -->
        <div class="manhwa-chapter border-l-4 border-azure pl-6 relative">
          <span class="font-fira text-xs font-black text-azure uppercase tracking-widest block mb-1">
            CHAPTER 05 // THE BUILD
          </span>
          <h3 class="font-anton text-2xl text-navy uppercase mb-3">DEVELOPMENT & IMPLEMENTATION</h3>
          <p class="font-sans text-neutral-700 leading-relaxed text-sm md:text-base">
            ${r.ch5_build}
          </p>
        </div>

        <!-- CHAPTER 06: THE RESULT -->
        <div class="manhwa-chapter border-l-4 border-green-600 pl-6 relative bg-white p-6 rounded border-2 border-navy shadow-brutal-sm">
          <span class="font-fira text-xs font-black text-green-700 uppercase tracking-widest block mb-1">
            CHAPTER 06 // THE RESULT
          </span>
          <h3 class="font-anton text-2xl text-navy uppercase mb-3">VERIFIED OUTCOMES & IMPACT</h3>
          <p class="font-sans text-neutral-800 leading-relaxed text-sm md:text-base font-medium">
            ${r.ch6_result}
          </p>
        </div>

        <!-- CHAPTER 07: NEXT ADVENTURE -->
        <div class="border-t-2 border-navy pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-cloud p-6 rounded border border-navy">
          <div>
            <span class="font-fira text-xs font-bold text-azure uppercase tracking-wider block">
              CHAPTER 07 // NEXT ADVENTURE
            </span>
            <h4 class="font-anton text-2xl text-navy uppercase">
              ${n.title}
            </h4>
            <span class="font-fira text-xs text-neutral-500">${n.subtitle}</span>
          </div>

          <button data-next-project="${n.id}" class="manga-btn px-6 py-3 bg-navy text-white font-fira text-xs font-bold uppercase rounded border-2 border-navy shadow-brutal hover:bg-azure transition flex items-center gap-2">
            <span>ENTER NEXT CHRONICLE</span>
            <span>→</span>
          </button>
        </div>

      </div>
    `,this.modal.classList.remove("hidden"),document.body.style.overflow="hidden",this.content.scrollTop=0}close(){this.modal.classList.add("hidden"),document.body.style.overflow="",At.playCaliperClick()}}document.addEventListener("DOMContentLoaded",()=>{const i=new nd({duration:1.2,easing:y=>Math.min(1,1.001-Math.pow(2,-10*y)),smoothWheel:!0,wheelMultiplier:.85});function e(y){i.raf(y),requestAnimationFrame(e)}requestAnimationFrame(e);const t=document.getElementById("ink-canvas");t&&new k0(t),new H0(i);const r=document.getElementById("blueprint-canvas");let n=null;r&&(n=new xv(r));const a=document.getElementById("shader-gallery-canvas");let s=null;if(a){s=new yv(a),a.addEventListener("mouseenter",()=>{s.setHover(!0),At.playPencilScratch()}),a.addEventListener("mouseleave",()=>{s.setHover(!1)});const y=document.getElementById("btn-show-arch"),x=document.getElementById("btn-show-manga");y==null||y.addEventListener("click",()=>{s.setTransition(0),y.classList.add("bg-navy","text-white"),y.classList.remove("bg-ice","text-navy"),x.classList.add("bg-ice","text-navy"),x.classList.remove("bg-navy","text-white"),At.playBlueprintUnfold()}),x==null||x.addEventListener("click",()=>{s.setTransition(1),x.classList.add("bg-navy","text-white"),x.classList.remove("bg-ice","text-navy"),y.classList.add("bg-ice","text-navy"),y.classList.remove("bg-navy","text-white"),At.playStructuralClack()})}document.getElementById("drawing-viewer-root")&&new V0("drawing-viewer-root");const o=new G0;document.querySelectorAll(".btn-open-case-study").forEach(y=>{y.addEventListener("click",()=>{const x=y.getAttribute("data-project-id");x&&o.open(x)})}),document.querySelectorAll("[data-project]").forEach(y=>{y.addEventListener("click",x=>{if(x.target.closest("a")||x.target.closest("button"))return;const C=y.getAttribute("data-project");C&&o.open(C)})});const l=document.getElementById("btn-hero-toggle-exploded"),c=document.getElementById("hero-exploded-tag"),h=document.getElementById("btn-hero-reset-cam"),d=document.getElementById("btn-hero-cycle-mode");l==null||l.addEventListener("click",()=>{if(n){const y=n.toggleExploded();c&&c.classList.toggle("hidden",!y),l.innerHTML=y?"<span>🔄 COLLAPSE 3D ASSEMBLY</span>":"<span>💥 EXPLODE 3D ASSEMBLY</span>",R(y?"Exploded Assembly: Precast components separated":"Assembly Restored: Structural joints locked")}}),h==null||h.addEventListener("click",()=>{n&&(n.resetCamera(),c&&c.classList.add("hidden"),l&&(l.innerHTML="<span>💥 EXPLODE 3D ASSEMBLY</span>"),R("Camera orientation reset"))}),d==null||d.addEventListener("click",()=>{if(n){const y=n.cycleVisualMode();d.textContent=`MODE: ${y.toUpperCase()}`,R(`Visual Style: ${y.toUpperCase()}`)}}),document.querySelectorAll(".layer-toggle-btn").forEach(y=>{y.addEventListener("click",()=>{const x=y.getAttribute("data-layer");if(n&&x){const C=n.toggleLayer(x);y.classList.toggle("bg-navy",C),y.classList.toggle("text-white",C),y.classList.toggle("bg-ice",!C),y.classList.toggle("text-navy",!C)}})});const u=document.getElementById("blueprint-cursor");let m=window.innerWidth/2,f=window.innerHeight/2,_=m,g=f;window.addEventListener("mousemove",y=>{m=y.clientX,f=y.clientY});function p(){_+=(m-_)*.25,g+=(f-g)*.25,u&&(u.style.transform=`translate(${_}px, ${g}px)`),requestAnimationFrame(p)}requestAnimationFrame(p),document.querySelectorAll("a, button, input, .manhwa-panel").forEach(y=>{y.addEventListener("mouseenter",()=>{u==null||u.classList.add("cursor-hover"),At.playPencilScratch()}),y.addEventListener("mouseleave",()=>{u==null||u.classList.remove("cursor-hover")})});const b=document.getElementById("btn-audio"),M=document.getElementById("audio-icon"),v=document.getElementById("audio-label");b==null||b.addEventListener("click",()=>{const y=At.toggle();M&&v&&(M.textContent=y?"📐":"🔇",v.textContent=y?"SOUND: ON":"SOUND: OFF"),R(y?"Drafting & Assembly Audio Enabled":"Audio Muted")});const P=document.getElementById("btn-copy-email"),T=document.getElementById("blueprint-toast");let w=null;function R(y){T&&(T.textContent=y,T.classList.remove("opacity-0","pointer-events-none"),T.classList.add("opacity-100"),clearTimeout(w),w=setTimeout(()=>{T.classList.add("opacity-0","pointer-events-none"),T.classList.remove("opacity-100")},2500))}P==null||P.addEventListener("click",()=>{navigator.clipboard.writeText("dagiyosi5321@gmail.com").then(()=>{At.playCaliperClick(),R("EMAIL COPIED: dagiyosi5321@gmail.com")})}),console.log(`%cTHE BLUEPRINT UNIVERSE // ARCHITECTURAL MANHWA ENGINE LOADED
WebGL Shaders, 3D Assembly, Ink Trail & Motion Active`,"color: #399DD6; font-weight: bold; font-size: 14px; background: #173C5B; padding: 6px 12px; border: 2px solid #399DD6; border-radius: 4px;")});
