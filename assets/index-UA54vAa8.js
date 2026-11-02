var bm=Object.defineProperty;var Tm=(r,t,e)=>t in r?bm(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var At=(r,t,e)=>Tm(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function Di(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function gf(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Xn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ao={duration:.5,overwrite:!1,delay:0},Au,sn,Pe,ei=1e8,be=1/ei,mc=Math.PI*2,wm=mc/4,Am=0,_f=Math.sqrt,Rm=Math.cos,Cm=Math.sin,nn=function(t){return typeof t=="string"},Oe=function(t){return typeof t=="function"},Hi=function(t){return typeof t=="number"},Ru=function(t){return typeof t>"u"},Mi=function(t){return typeof t=="object"},An=function(t){return t!==!1},Cu=function(){return typeof window<"u"},qo=function(t){return Oe(t)||nn(t)},vf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},dn=Array.isArray,Pm=/random\([^)]+\)/g,Lm=/,\s*/g,vh=/(?:-?\.?\d|\.)+/gi,xf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,vs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Sl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,yf=/[+-]=-?[.\d]+/,Dm=/[^,'"\[\]\s]+/gi,Im=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ue,pi,gc,Pu,Yn={},Ka={},Sf,Mf=function(t){return(Ka=Ds(t,Yn))&&Dn},Lu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ro=function(t,e){return!e&&console.warn(t)},Ef=function(t,e){return t&&(Yn[t]=e)&&Ka&&(Ka[t]=e)||Yn},Co=function(){return 0},Um={suppressEvents:!0,isStart:!0,kill:!1},Ua={suppressEvents:!0,kill:!1},Nm={suppressEvents:!0},Du={},or=[],_c={},bf,kn={},Ml={},xh=30,Na=[],Iu="",Uu=function(t){var e=t[0],n,i;if(Mi(e)||Oe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Na.length;i--&&!Na[i].targetTest(e););n=Na[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Yf(t[i],n)))||t.splice(i,1);return t},Or=function(t){return t._gsap||Uu(ni(t))[0]._gsap},Tf=function(t,e,n){return(n=t[e])&&Oe(n)?t[e]():Ru(n)&&t.getAttribute&&t.getAttribute(e)||n},Rn=function(t,e){return(t=t.split(",")).forEach(e)||t},ke=function(t){return Math.round(t*1e5)/1e5||0},Ie=function(t){return Math.round(t*1e7)/1e7||0},Ms=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Fm=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ja=function(){var t=or.length,e=or.slice(0),n,i;for(_c={},or.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Nu=function(t){return!!(t._initted||t._startAt||t.add)},wf=function(t,e,n,i){or.length&&!sn&&Ja(),t.render(e,n,!!(sn&&e<0&&Nu(t))),or.length&&!sn&&Ja()},Af=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Dm).length<2?e:nn(t)?t.trim():t},Rf=function(t){return t},qn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Om=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ds=function(t,e){for(var n in e)t[n]=e[n];return t},yh=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Mi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Qa=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},mo=function(t){var e=t.parent||Ue,n=t.keyframes?Om(dn(t.keyframes)):qn;if(An(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Bm=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Cf=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},pl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},hr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Br=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},km=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},vc=function(t,e,n,i){return t._startAt&&(sn?t._startAt.revert(Ua):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},zm=function r(t){return!t||t._ts&&r(t.parent)},Sh=function(t){return t._repeat?Is(t._tTime,t=t.duration()+t._rDelay)*t:0},Is=function(t,e){var n=Math.floor(t=Ie(t/e));return t&&n===t?n-1:n},tl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ml=function(t){return t._end=Ie(t._start+(t._tDur/Math.abs(t._ts||t._rts||be)||0))},gl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ie(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ml(t),n._dirty||Br(n,t)),t},Pf=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=tl(t.rawTime(),e),(!e._dur||zo(0,e.totalDuration(),n)-e._tTime>be)&&e.render(n,!0)),Br(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-be}},_i=function(t,e,n,i){return e.parent&&hr(e),e._start=Ie((Hi(n)?n:n||t!==Ue?Zn(t,n,e):t._time)+e._delay),e._end=Ie(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Cf(t,e,"_first","_last",t._sort?"_start":0),xc(e)||(t._recent=e),i||Pf(t,e),t._ts<0&&gl(t,t._tTime),t},Lf=function(t,e){return(Yn.ScrollTrigger||Lu("scrollTrigger",e))&&Yn.ScrollTrigger.create(e,t)},Df=function(t,e,n,i,s){if(Ou(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!sn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&bf!==Hn.frame)return or.push(t),t._lazy=[s,i],1},Hm=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},xc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Vm=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&Hm(t)&&!(!t._initted&&xc(t))||(t._ts<0||t._dp._ts<0)&&!xc(t))?0:1,a=t._rDelay,l=0,c,u,d;if(a&&t._repeat&&(l=zo(0,t._tDur,e),u=Is(l,a),t._yoyo&&u&1&&(o=1-o),u!==Is(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||sn||i||t._zTime===be||!e&&t._zTime){if(!t._initted&&Df(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?be:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&vc(t,e,n,!0),t._onUpdate&&!n&&Gn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Gn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&hr(t,1),!n&&!sn&&(Gn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Gm=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Us=function(t,e,n,i){var s=t._repeat,o=Ie(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Ie(o*(s+1)+t._rDelay*s):o,a>0&&!i&&gl(t,t._tTime=t._tDur*a),t.parent&&ml(t),n||Br(t.parent,t),t},Mh=function(t){return t instanceof wn?Br(t):Us(t,t._dur)},Wm={_start:0,endTime:Co,totalDuration:Co},Zn=function r(t,e,n){var i=t.labels,s=t._recent||Wm,o=t.duration()>=ei?s.endTime(!1):t._dur,a,l,c;return nn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(dn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},go=function(t,e,n){var i=Hi(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=An(l.vars.inherit)&&l.parent;o.immediateRender=An(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new We(e[0],o,e[s+1])},gr=function(t,e){return t||t===0?e(t):e},zo=function(t,e,n){return n<t?t:n>e?e:n},un=function(t,e){return!nn(t)||!(e=Im.exec(t))?"":e[1]},Xm=function(t,e,n){return gr(n,function(i){return zo(t,e,i)})},yc=[].slice,If=function(t,e){return t&&Mi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Mi(t[0]))&&!t.nodeType&&t!==pi},Ym=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return nn(i)&&!e||If(i,1)?(s=n).push.apply(s,ni(i)):n.push(i)})||n},ni=function(t,e,n){return Pe&&!e&&Pe.selector?Pe.selector(t):nn(t)&&!n&&(gc||!Ns())?yc.call((e||Pu).querySelectorAll(t),0):dn(t)?Ym(t,n):If(t)?yc.call(t,0):t?[t]:[]},Sc=function(t){return t=ni(t)[0]||Ro("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ni(e,n.querySelectorAll?n:n===t?Ro("Invalid scope")||Pu.createElement("div"):t)}},Uf=function(t){return t.sort(function(){return .5-Math.random()})},Nf=function(t){if(Oe(t))return t;var e=Mi(t)?t:{each:t},n=kr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,d=i;return nn(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],d=i[1]),function(h,f,g){var _=(g||e).length,m=o[_],p,y,S,v,A,w,E,R,M;if(!m){if(M=e.grid==="auto"?0:(e.grid||[1,ei])[1],!M){for(E=-ei;E<(E=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=o[_]=[],p=l?Math.min(M,_)*u-.5:i%M,y=M===ei?0:l?_*d/M-.5:i/M|0,E=0,R=ei,w=0;w<_;w++)S=w%M-p,v=y-(w/M|0),m[w]=A=c?Math.abs(c==="y"?v:S):_f(S*S+v*v),A>E&&(E=A),A<R&&(R=A);i==="random"&&Uf(m),m.max=E-R,m.min=R,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=un(e.amount||e.each)||0,n=n&&_<0?sg(n):n}return _=(m[h]-m.min)/m.max||0,Ie(m.b+(n?n(_):_)*m.v)+m.u}},Mc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ie(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Hi(n)?0:un(n))}},Ff=function(t,e){var n=dn(t),i,s;return!n&&Mi(t)&&(i=n=t.radius||ei,t.values?(t=ni(t.values),(s=!Hi(t[0]))&&(i*=i)):t=Mc(t.increment)),gr(e,n?Oe(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ei,u=0,d=t.length,h,f;d--;)s?(h=t[d].x-a,f=t[d].y-l,h=h*h+f*f):h=Math.abs(t[d]-a),h<c&&(c=h,u=d);return u=!i||c<=i?t[u]:o,s||u===o||Hi(o)?u:u+un(o)}:Mc(t))},Of=function(t,e,n,i){return gr(dn(t)?!e:n===!0?!!(n=0):!i,function(){return dn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},qm=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},$m=function(t,e){return function(n){return t(parseFloat(n))+(e||un(n))}},jm=function(t,e,n){return kf(t,e,0,1,n)},Bf=function(t,e,n){return gr(n,function(i){return t[~~e(i)]})},Zm=function r(t,e,n){var i=e-t;return dn(t)?Bf(t,r(0,t.length),e):gr(n,function(s){return(i+(s-t)%i)%i+t})},Km=function r(t,e,n){var i=e-t,s=i*2;return dn(t)?Bf(t,r(0,t.length-1),e):gr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Po=function(t){return t.replace(Pm,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Lm);return Of(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},kf=function(t,e,n,i,s){var o=e-t,a=i-n;return gr(s,function(l){return n+((l-t)/o*a||0)})},Jm=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=nn(t),a={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(dn(t)&&!dn(e)){for(u=[],d=t.length,h=d-2,c=1;c<d;c++)u.push(r(t[c-1],t[c]));d--,s=function(g){g*=d;var _=Math.min(h,~~g);return u[_](g-_)},n=e}else i||(t=Ds(dn(t)?[]:{},t));if(!u){for(l in e)Fu.call(a,t,l,"get",e[l]);s=function(g){return zu(g,a)||(o?t.p:t)}}}return gr(n,s)},Eh=function(t,e,n){var i=t.labels,s=ei,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Gn=function(t,e,n){var i=t.vars,s=i[e],o=Pe,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&or.length&&Ja(),a&&(Pe=a),u=l?s.apply(c,l):s.call(c),Pe=o,u},so=function(t){return hr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!sn),t.progress()<1&&Gn(t,"onInterrupt"),t},xs,zf=[],Hf=function(t){if(t)if(t=!t.name&&t.default||t,Cu()||t.headless){var e=t.name,n=Oe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Co,render:zu,add:Fu,kill:mg,modifier:pg,rawVars:0},o={targetTest:0,get:0,getSetter:ku,aliases:{},register:0};if(Ns(),t!==i){if(kn[e])return;qn(i,qn(Qa(t,s),o)),Ds(i.prototype,Ds(s,Qa(t,o))),kn[i.prop=e]=i,t.targetTest&&(Na.push(i),Du[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ef(e,i),t.register&&t.register(Dn,i,Cn)}else zf.push(t)},Ee=255,oo={aqua:[0,Ee,Ee],lime:[0,Ee,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ee],navy:[0,0,128],white:[Ee,Ee,Ee],olive:[128,128,0],yellow:[Ee,Ee,0],orange:[Ee,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ee,0,0],pink:[Ee,192,203],cyan:[0,Ee,Ee],transparent:[Ee,Ee,Ee,0]},El=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ee+.5|0},Vf=function(t,e,n){var i=t?Hi(t)?[t>>16,t>>8&Ee,t&Ee]:0:oo.black,s,o,a,l,c,u,d,h,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),oo[t])i=oo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ee,i&Ee,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ee,t&Ee]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(vh),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=El(l+1/3,s,o),i[1]=El(l,s,o),i[2]=El(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(xf),n&&i.length<4&&(i[3]=1),i}else i=t.match(vh)||oo.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Ee,o=i[1]/Ee,a=i[2]/Ee,d=Math.max(s,o,a),h=Math.min(s,o,a),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Gf=function(t){var e=[],n=[],i=-1;return t.split(ar).forEach(function(s){var o=s.match(vs)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},bh=function(t,e,n){var i="",s=(t+i).match(ar),o=e?"hsla(":"rgba(",a=0,l,c,u,d;if(!s)return t;if(s=s.map(function(h){return(h=Vf(h,e,1))&&o+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Gf(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(ar,"1").split(vs),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(ar),d=c.length-1;a<d;a++)i+=c[a]+s[a];return i+c[d]},ar=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in oo)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),Qm=/hsl[a]?\(/,Wf=function(t){var e=t.join(" "),n;if(ar.lastIndex=0,ar.test(e))return n=Qm.test(e),t[1]=bh(t[1],n),t[0]=bh(t[0],n,Gf(t[1])),!0},Lo,Hn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,d,h,f,g=function _(m){var p=r()-i,y=m===!0,S,v,A,w;if((p>t||p<0)&&(n+=p-e),i+=p,A=i-n,S=A-o,(S>0||y)&&(w=++d.frame,h=A-d.time*1e3,d.time=A=A/1e3,o+=S+(S>=s?4:s-S),v=1),y||(l=c(_)),v)for(f=0;f<a.length;f++)a[f](A,h,w,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Sf&&(!gc&&Cu()&&(pi=gc=window,Pu=pi.document||{},Yn.gsap=Dn,(pi.gsapVersions||(pi.gsapVersions=[])).push(Dn.version),Mf(Ka||pi.GreenSockGlobals||!pi.gsap&&pi||{}),zf.forEach(Hf)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Lo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Lo=0,c=Co},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,p,y){var S=p?function(v,A,w,E){m(v,A,w,E),d.remove(S)}:m;return d.remove(m),a[y?"unshift":"push"](S),Ns(),S},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},d}(),Ns=function(){return!Lo&&Hn.wake()},ae={},tg=/^[\d.\-M][\d.\-,\s]/,eg=/["']/g,ng=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(eg,"").trim():+c,i=l.substr(a+1).trim();return e},ig=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},rg=function(t){var e=(t+"").split("("),n=ae[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[ng(e[1])]:ig(t).split(",").map(Af)):ae._CE&&tg.test(t)?ae._CE("",t):n},sg=function(t){return function(e){return 1-t(1-e)}},kr=function(t,e){return t&&(Oe(t)?t:ae[t]||rg(t))||e},jr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Rn(t,function(a){ae[a]=Yn[a]=s,ae[o=a.toLowerCase()]=n;for(var l in s)ae[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ae[a+"."+l]=s[l]}),s},Xf=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},bl=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/mc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Cm((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Xf(a);return s=mc/s,l.config=function(c,u){return r(t,c,u)},l},Tl=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Xf(n);return i.config=function(s){return r(t,s)},i};Rn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;jr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ae.Linear.easeNone=ae.none=ae.Linear.easeIn;jr("Elastic",bl("in"),bl("out"),bl());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};jr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);jr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});jr("Circ",function(r){return-(_f(1-r*r)-1)});jr("Sine",function(r){return r===1?1:-Rm(r*wm)+1});jr("Back",Tl("in"),Tl("out"),Tl());ae.SteppedEase=ae.steps=Yn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-be;return function(a){return((i*zo(0,o,a)|0)+s)*n}}};Ao.ease=ae["quad.out"];Rn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Iu+=r+","+r+"Params,"});var Yf=function(t,e){this.id=Am++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Tf,this.set=e?e.getSetter:ku},Do=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Us(this,+e.duration,1,1),this.data=e.data,Pe&&(this._ctx=Pe,Pe.data.push(this)),Lo||Hn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Us(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Ns(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(gl(this,n),!s._dp||s.parent||Pf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&_i(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===be||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),wf(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Sh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Sh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Is(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-be?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?tl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-be?0:this._rts,this.totalTime(zo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ml(this),km(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ns(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==be&&(this._tTime-=be)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Ie(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&_i(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(An(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?tl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Nm);var i=sn;return sn=n,Nu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),sn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Mh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Mh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Zn(this,n),An(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,An(i)),this._dur||(this._zTime=-be),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-be:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-be,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-be)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Oe(n)?n:Rf,l=function(){var u=i.then;i.then=null,s&&s(),Oe(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){so(this)},r}();qn(Do.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-be,_prom:0,_ps:!1,_rts:1});var wn=function(r){gf(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=An(n.sortChildren),Ue&&_i(n.parent||Ue,Di(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Lf(Di(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return go(0,arguments,this),this},e.from=function(i,s,o){return go(1,arguments,this),this},e.fromTo=function(i,s,o,a){return go(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,mo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new We(i,s,Zn(this,o),1),this},e.call=function(i,s,o){return _i(this,We.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new We(i,o,Zn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,mo(o).immediateRender=An(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,d){return a.startAt=o,mo(a).immediateRender=An(a.immediateRender),this.staggerTo(i,s,a,l,c,u,d)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ie(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,f,g,_,m,p,y,S,v,A,w,E;if(this!==Ue&&u>l&&i>=0&&(u=l),u!==this._tTime||o||d){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,v=this._start,S=this._ts,p=!S,d&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(h=Ie(u%m),u===l?(_=this._repeat,h=c):(A=Ie(u/m),_=~~A,_&&_===A&&(h=c,_--),h>c&&(h=c)),A=Is(this._tTime,m),!a&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),w&&_&1&&(h=c-h,E=1),_!==A&&!this._lock){var R=w&&A&1,M=R===(w&&_&1);if(_<A&&(R=!R),a=R?0:u%c?c:u,this._lock=1,this.render(a||(E?0:Ie(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Gn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,A=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Gm(this,Ie(a),Ie(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!A&&(Gn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,o),h!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=-be);break}}f=g}else{f=this._last;for(var x=i<0?i:h;f;){if(g=f._prev,(f._act||x<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(x-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(x-f._start)*f._ts,s,o||sn&&Nu(f)),h!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=x?-be:be);break}}f=g}}if(y&&!s&&(this.pause(),y.render(h>=a?0:-be)._zTime=h>=a?1:-1,this._ts))return this._start=v,ml(this),this.render(i,s,o);this._onUpdate&&!s&&Gn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&hr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Gn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Hi(s)||(s=Zn(this,s,i)),!(i instanceof Do)){if(dn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(nn(i))return this.addLabel(i,s);if(Oe(i))i=We.delayedCall(0,i);else return this}return this!==i?_i(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ei);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof We?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return nn(i)?this.removeLabel(i):Oe(i)?this.killTweensOf(i):(i.parent===this&&pl(this,i),i===this._recent&&(this._recent=this._last),Br(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ie(Hn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Zn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=We.delayedCall(0,s||Co,o);return a.data="isPause",this._hasPause=1,_i(this,a,Zn(this,i))},e.removePause=function(i){var s=this._first;for(i=Zn(this,i);s;)s._start===i&&s.data==="isPause"&&hr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)er!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=ni(i),l=this._first,c=Hi(s),u;l;)l instanceof We?Fm(l._targets,a)&&(c?(!er||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Zn(o,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,g=We.to(o,qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||be,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Us(g,m,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,d||[])}},s));return h?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,qn({startAt:{time:Zn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Eh(this,Zn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Eh(this,Zn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+be)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ie(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Br(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Br(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=ei,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,_i(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ie(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Us(o,o===Ue&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ue._ts&&(wf(Ue,tl(i,Ue)),bf=Hn.frame),Hn.frame>=xh){xh+=Xn.autoSleep||120;var s=Ue._first;if((!s||!s._ts)&&Xn.autoSleep&&Hn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Hn.sleep()}}},t}(Do);qn(wn.prototype,{_lock:0,_hasPause:0,_forcing:0});var og=function(t,e,n,i,s,o,a){var l=new Cn(this._pt,t,e,0,1,Jf,null,s),c=0,u=0,d,h,f,g,_,m,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Po(i)),o&&(y=[n,i],o(y,t,e),n=y[0],i=y[1]),h=n.match(Sl)||[];d=Sl.exec(i);)g=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Ms(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=Sl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(yf.test(i)||p)&&(l.e=0),this._pt=l,l},Fu=function(t,e,n,i,s,o,a,l,c,u){Oe(i)&&(i=i(s||0,t,o));var d=t[e],h=n!=="get"?n:Oe(d)?c?t[e.indexOf("set")||!Oe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=Oe(d)?c?hg:Zf:Bu,g;if(nn(i)&&(~i.indexOf("random(")&&(i=Po(i)),i.charAt(1)==="="&&(g=Ms(h,i)+(un(h)||0),(g||g===0)&&(i=g))),!u||h!==i||Ec)return!isNaN(h*i)&&i!==""?(g=new Cn(this._pt,t,e,+h||0,i-(h||0),typeof d=="boolean"?fg:Kf,0,f),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!d&&!(e in t)&&Lu(e,i),og.call(this,t,e,h,i,f,l||Xn.stringFilter,c))},ag=function(t,e,n,i,s){if(Oe(t)&&(t=_o(t,s,e,n,i)),!Mi(t)||t.style&&t.nodeType||dn(t)||vf(t))return nn(t)?_o(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=_o(t[a],s,e,n,i);return o},qf=function(t,e,n,i,s,o){var a,l,c,u;if(kn[t]&&(a=new kn[t]).init(s,a.rawVars?e[t]:ag(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Cn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==xs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},er,Ec,Ou=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,y=p&&p.data==="nested"?p.vars.targets:m,S=t._overwrite==="auto"&&!Au,v=t.timeline,A=i.easeReverse||d,w,E,R,M,x,P,L,U,k,q,X,Y,V;if(v&&(!h||!s)&&(s="none"),t._ease=kr(s,Ao.ease),t._rEase=A&&(kr(A)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||h&&!i.stagger){if(U=m[0]?Or(m[0]).harness:0,Y=U&&i[U.prop],w=Qa(i,Du),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!f?_.render(-1,!0):_.revert(u&&g?Ua:Um),_._lazy=0),o){if(hr(t._startAt=We.set(m,qn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&An(l),startAt:null,delay:0,onUpdate:c&&function(){return Gn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(sn||!a&&!f)&&t._startAt.revert(Ua),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(a=!1),R=qn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&An(l),immediateRender:a,stagger:0,parent:p},w),Y&&(R[U.prop]=Y),hr(t._startAt=We.set(m,R)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(sn?t._startAt.revert(Ua):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,be,be);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&An(l)||l&&!g,E=0;E<m.length;E++){if(x=m[E],L=x._gsap||Uu(m)[E]._gsap,t._ptLookup[E]=q={},_c[L.id]&&or.length&&Ja(),X=y===m?E:y.indexOf(x),U&&(k=new U).init(x,Y||w,t,X,y)!==!1&&(t._pt=M=new Cn(t._pt,x,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(et){q[et]=M}),k.priority&&(P=1)),!U||Y)for(R in w)kn[R]&&(k=qf(R,w,t,X,x,y))?k.priority&&(P=1):q[R]=M=Fu.call(t,x,R,"get",w[R],X,y,0,i.stringFilter);t._op&&t._op[E]&&t.kill(x,t._op[E]),S&&t._pt&&(er=t,Ue.killTweensOf(x,q,t.globalTime(e)),V=!t.parent,er=0),t._pt&&l&&(_c[L.id]=1)}P&&Qf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!V,h&&e<=0&&v.render(ei,!0,!0)},lg=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,d,h,f;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,f=t._targets.length;f--;){if(u=h[f][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Ec=1,t.vars[e]="+=0",Ou(t,a),Ec=0,l?Ro(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,d.e&&(d.e=ke(n)+un(d.e)),d.b&&(d.b=u.s+un(d.b))},cg=function(t,e){var n=t[0]?Or(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Ds({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},ug=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(dn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},_o=function(t,e,n,i,s){return Oe(t)?t.call(e,n,i,s):nn(t)&&~t.indexOf("random(")?Po(t):t},$f=Iu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",jf={};Rn($f+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return jf[r]=1});var We=function(r){gf(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:mo(i))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||Ue,y=(dn(n)||vf(n)?Hi(n[0]):"length"in i)?[n]:ni(n),S,v,A,w,E,R,M,x;if(a._targets=y.length?Uu(y):Ro("GSAP target "+n+" not found. https://gsap.com",!Xn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||h||qo(c)||qo(u)){i=a.vars;var P=i.easeReverse||i.yoyoEase;if(S=a.timeline=new wn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:y}),S.kill(),S.parent=S._dp=Di(a),S._start=0,h||qo(c)||qo(u)){if(w=y.length,M=h&&Nf(h),Mi(h))for(E in h)~$f.indexOf(E)&&(x||(x={}),x[E]=h[E]);for(v=0;v<w;v++)A=Qa(i,jf),A.stagger=0,P&&(A.easeReverse=P),x&&Ds(A,x),R=y[v],A.duration=+_o(c,Di(a),v,R,y),A.delay=(+_o(u,Di(a),v,R,y)||0)-a._delay,!h&&w===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),S.to(R,A,M?M(v,R,y):0),S._ease=ae.none;S.duration()?c=u=0:a.timeline=0}else if(g){mo(qn(S.vars.defaults,{ease:"none"})),S._ease=kr(g.ease||i.ease||"none");var L=0,U,k,q;if(dn(g))g.forEach(function(X){return S.to(y,X,">")}),S.duration();else{A={};for(E in g)E==="ease"||E==="easeEach"||ug(E,g[E],A,g.easeEach);for(E in A)for(U=A[E].sort(function(X,Y){return X.t-Y.t}),L=0,v=0;v<U.length;v++)k=U[v],q={ease:k.e,duration:(k.t-(v?U[v-1].t:0))/100*c},q[E]=k.v,S.to(y,q,L),L+=q.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return f===!0&&!Au&&(er=Di(a),Ue.killTweensOf(y),er=0),_i(p,Di(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!g&&a._start===Ie(p._time)&&An(d)&&zm(Di(a))&&p.data!=="nested")&&(a._tTime=-be,a.render(Math.max(0,-u)||0)),m&&Lf(Di(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-be&&!u?l:i<be?0:i,h,f,g,_,m,p,y,S;if(!c)Vm(this,i,s,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(h=Ie(d%_),d===l?(g=this._repeat,h=c):(m=Ie(d/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(h=c-h),m=Is(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=d,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(Ie(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Df(this,u?i:h,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var v=h<a;if(v!==this._inv){var A=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=A?(v?-1:1)/A:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(h/c);if(this._from&&(this.ratio=y=1-y),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!m&&(Gn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;S&&S.render(i<0?i:S._dur*S._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&vc(this,i,s,o),Gn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Gn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&vc(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&hr(this,1),!s&&!(u&&!a)&&(d||a||p)&&(Gn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Lo||Hn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ou(this,c),u=this._ease(c/this._dur),lg(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(gl(this,0),this.parent||Cf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?so(this):this.scrollTrigger&&this.scrollTrigger.kill(!!sn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,er&&er.vars.overwrite!==!0)._first||so(this),this.parent&&o!==this.timeline.totalDuration()&&Us(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ni(i):a,c=this._ptLookup,u=this._pt,d,h,f,g,_,m,p;if((!s||s==="all")&&Bm(a,l))return s==="all"&&(this._pt=0),so(this);for(d=this._op=this._op||[],s!=="all"&&(nn(s)&&(_={},Rn(s,function(y){return _[y]=1}),s=_),s=cg(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(d[p]=s,g=h,f={}):(f=d[p]=d[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&pl(this,m,"_pt"),delete h[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&so(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return go(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return go(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Ue.killTweensOf(i,s,o)},t}(Do);qn(We.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Rn("staggerTo,staggerFrom,staggerFromTo",function(r){We[r]=function(){var t=new wn,e=yc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Bu=function(t,e,n){return t[e]=n},Zf=function(t,e,n){return t[e](n)},hg=function(t,e,n,i){return t[e](i.fp,n)},dg=function(t,e,n){return t.setAttribute(e,n)},ku=function(t,e){return Oe(t[e])?Zf:Ru(t[e])&&t.setAttribute?dg:Bu},Kf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},fg=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Jf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},zu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},pg=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},mg=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?pl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},gg=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Qf=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Cn=function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Kf,this.d=l||this,this.set=c||Bu,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=gg,this.m=n,this.mt=s,this.tween=i},r}();Rn(Iu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Du[r]=1});Yn.TweenMax=Yn.TweenLite=We;Yn.TimelineLite=Yn.TimelineMax=wn;Ue=new wn({sortChildren:!1,defaults:Ao,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Xn.stringFilter=Wf;var zr=[],Fa={},_g=[],Th=0,vg=0,wl=function(t){return(Fa[t]||_g).map(function(e){return e()})},bc=function(){var t=Date.now(),e=[];t-Th>2&&(wl("matchMediaInit"),zr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=pi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),wl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Th=t,wl("matchMedia"))},tp=function(){function r(e,n){this.selector=n&&Sc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=vg++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Oe(n)&&(s=i,i=n,n=Oe);var o=this,a=function(){var c=Pe,u=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=Sc(s)),Pe=o,d=i.apply(o,arguments),Oe(d)&&o._r.push(d),Pe=c,o.selector=u,o.isReverted=!1,d};return o.last=a,n===Oe?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Pe;Pe=null,n(this),Pe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof We&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof wn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof We)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=zr.length;o--;)zr[o].id===this.id&&zr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),xg=function(){function r(e){this.contexts=[],this.scope=e,Pe&&Pe.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Mi(n)||(n={matches:n});var o=new tp(0,s||this.scope),a=o.conditions={},l,c,u;Pe&&!o.selector&&(o.selector=Pe.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=pi.matchMedia(n[c]),l&&(zr.indexOf(o)<0&&zr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(bc):l.addEventListener("change",bc)));return u&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),el={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Hf(i)})},timeline:function(t){return new wn(t)},getTweensOf:function(t,e){return Ue.getTweensOf(t,e)},getProperty:function(t,e,n,i){nn(t)&&(t=ni(t)[0]);var s=Or(t||{}).get,o=n?Rf:Af;return n==="native"&&(n=""),t&&(e?o((kn[e]&&kn[e].get||s)(t,e,n,i)):function(a,l,c){return o((kn[a]&&kn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=ni(t),t.length>1){var i=t.map(function(u){return Dn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}t=t[0]||{};var o=kn[e],a=Or(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var d=new o;xs._pt=0,d.init(t,n?u+n:u,xs,0,[t]),d.render(1,d),xs._pt&&zu(1,xs)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=Dn.to(t,qn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Ue.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=kr(t.ease,Ao.ease)),yh(Ao,t||{})},config:function(t){return yh(Xn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!kn[a]&&!Yn[a]&&Ro(e+" effect requires "+a+" plugin.")}),Ml[e]=function(a,l,c){return n(ni(a),qn(l||{},s),c)},o&&(wn.prototype[e]=function(a,l,c){return this.add(Ml[e](a,Mi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ae[t]=kr(e)},parseEase:function(t,e){return arguments.length?kr(t,e):ae},getById:function(t){return Ue.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new wn(t),i,s;for(n.smoothChildTiming=An(t.smoothChildTiming),Ue.remove(n),n._dp=0,n._time=n._tTime=Ue._time,i=Ue._first;i;)s=i._next,(e||!(!i._dur&&i instanceof We&&i.vars.onComplete===i._targets[0]))&&_i(n,i,i._start-i._delay),i=s;return _i(Ue,n,0),n},context:function(t,e){return t?new tp(t,e):Pe},matchMedia:function(t){return new xg(t)},matchMediaRefresh:function(){return zr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||bc()},addEventListener:function(t,e){var n=Fa[t]||(Fa[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Fa[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Zm,wrapYoyo:Km,distribute:Nf,random:Of,snap:Ff,normalize:jm,getUnit:un,clamp:Xm,splitColor:Vf,toArray:ni,selector:Sc,mapRange:kf,pipe:qm,unitize:$m,interpolate:Jm,shuffle:Uf},install:Mf,effects:Ml,ticker:Hn,updateRoot:wn.updateRoot,plugins:kn,globalTimeline:Ue,core:{PropTween:Cn,globals:Ef,Tween:We,Timeline:wn,Animation:Do,getCache:Or,_removeLinkedListItem:pl,reverting:function(){return sn},context:function(t){return t&&Pe&&(Pe.data.push(t),t._ctx=Pe),Pe},suppressOverwrites:function(t){return Au=t}}};Rn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return el[r]=We[r]});Hn.add(wn.updateRoot);xs=el.to({},{duration:0});var yg=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Sg=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=yg(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Al=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(nn(s)&&(l={},Rn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Sg(a,s)}}}},Dn=el.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)sn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Al("roundProps",Mc),Al("modifiers"),Al("snap",Ff))||el;We.version=wn.version=Dn.version="3.15.0";Sf=1;Cu()&&Ns();ae.Power0;ae.Power1;ae.Power2;ae.Power3;ae.Power4;ae.Linear;ae.Quad;ae.Cubic;ae.Quart;ae.Quint;ae.Strong;ae.Elastic;ae.Back;ae.SteppedEase;ae.Bounce;ae.Sine;ae.Expo;ae.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var wh,nr,Es,Hu,Ir,Ah,Vu,Mg=function(){return typeof window<"u"},Vi={},Tr=180/Math.PI,bs=Math.PI/180,Jr=Math.atan2,Rh=1e8,Gu=/([A-Z])/g,Eg=/(left|right|width|margin|padding|x)/i,bg=/[\s,\(]\S/,vi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Tc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Tg=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},wg=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ag=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Rg=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},ep=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},np=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Cg=function(t,e,n){return t.style[e]=n},Pg=function(t,e,n){return t.style.setProperty(e,n)},Lg=function(t,e,n){return t._gsap[e]=n},Dg=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Ig=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Ug=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Ne="transform",Pn=Ne+"Origin",Ng=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Vi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=vi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Ii(i,a)}):this.tfm[t]=o.x?o[t]:Ii(i,t),t===Pn&&(this.tfm.zOrigin=o.zOrigin);else return vi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Ne)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Pn,e,"")),t=Ne}(s||e)&&this.props.push(t,e,s[t])},ip=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Fg=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Gu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Vu(),(!s||!s.isStart)&&!n[Ne]&&(ip(n),i.zOrigin&&n[Pn]&&(n[Pn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},rp=function(t,e){var n={target:t,props:[],revert:Fg,save:Ng};return t._gsap||Dn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},sp,wc=function(t,e){var n=nr.createElementNS?nr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):nr.createElement(t);return n&&n.style?n:nr.createElement(t)},Wn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Gu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Fs(e)||e,1)||""},Ch="O,Moz,ms,Ms,Webkit".split(","),Fs=function(t,e,n){var i=e||Ir,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Ch[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Ch[o]:"")+t},Ac=function(){Mg()&&window.document&&(wh=window,nr=wh.document,Es=nr.documentElement,Ir=wc("div")||{style:{}},wc("div"),Ne=Fs(Ne),Pn=Ne+"Origin",Ir.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",sp=!!Fs("perspective"),Vu=Dn.core.reverting,Hu=1)},Ph=function(t){var e=t.ownerSVGElement,n=wc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Es.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Es.removeChild(n),s},Lh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},op=function(t){var e,n;try{e=t.getBBox()}catch{e=Ph(t),n=1}return e&&(e.width||e.height)||n||(e=Ph(t)),e&&!e.width&&!e.x&&!e.y?{x:+Lh(t,["x","cx","x1"])||0,y:+Lh(t,["y","cy","y1"])||0,width:0,height:0}:e},ap=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&op(t))},dr=function(t,e){if(e){var n=t.style,i;e in Vi&&e!==Pn&&(e=Ne),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Gu,"-$1").toLowerCase())):n.removeAttribute(e)}},ir=function(t,e,n,i,s,o){var a=new Cn(t._pt,e,n,0,1,o?np:ep);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Dh={deg:1,rad:1,turn:1},Og={grid:1,flex:1},fr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ir.style,l=Eg.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",f=i==="%",g,_,m,p;if(i===o||!s||Dh[i]||Dh[o])return s;if(o!=="px"&&!h&&(s=r(t,e,n,"px")),p=t.getCTM&&ap(t),(f||o==="%")&&(Vi[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[u],ke(f?s/g*d:s/100*g);if(a[l?"width":"height"]=d+(h?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===nr||!_.appendChild)&&(_=nr.body),m=_._gsap,m&&f&&m.width&&l&&m.time===Hn.time&&!m.uncache)return ke(s/m.width*d);if(f&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=d+i,g=t[u],y?t.style[e]=y:dr(t,e)}else(f||o==="%")&&!Og[Wn(_,"display")]&&(a.position=Wn(t,"position")),_===t&&(a.position="static"),_.appendChild(Ir),g=Ir[u],_.removeChild(Ir),a.position="absolute";return l&&f&&(m=Or(_),m.time=Hn.time,m.width=_[u]),ke(h?g*s/d:g&&s?d/g*s:0)},Ii=function(t,e,n,i){var s;return Hu||Ac(),e in vi&&e!=="transform"&&(e=vi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Vi[e]&&e!=="transform"?(s=Uo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:il(Wn(t,Pn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=nl[e]&&nl[e](t,e,n)||Wn(t,e)||Tf(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?fr(t,e,s,n)+n:s},Bg=function(t,e,n,i){if(!n||n==="none"){var s=Fs(e,t,1),o=s&&Wn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Wn(t,"borderTopColor"))}var a=new Cn(this._pt,t.style,e,0,1,Jf),l=0,c=0,u,d,h,f,g,_,m,p,y,S,v,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Wn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=Wn(t,e)||i,_?t.style[e]=_:dr(t,e)),u=[n,i],Wf(u),n=u[0],i=u[1],h=n.match(vs)||[],A=i.match(vs)||[],A.length){for(;d=vs.exec(i);)m=d[0],y=i.substring(l,d.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),m.charAt(1)==="="&&(m=Ms(f,m)+v),p=parseFloat(m),S=m.substr((p+"").length),l=vs.lastIndex-S.length,S||(S=S||Xn.units[e]||v,l===i.length&&(i+=S,a.e+=S)),v!==S&&(f=fr(t,e,_,S)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:f,c:p-f,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?np:ep;return yf.test(i)&&(a.e=0),this._pt=a,a},Ih={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},kg=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Ih[n]||n,e[1]=Ih[i]||i,e.join(" ")},zg=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Vi[a]&&(l=1,a=a==="transformOrigin"?Pn:Ne),dr(n,a);l&&(dr(n,Ne),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Uo(n,1),o.uncache=1,ip(i)))}},nl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Cn(t._pt,e,n,0,0,zg);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Io=[1,0,0,1,0,0],lp={},cp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Uh=function(t){var e=Wn(t,Ne);return cp(e)?Io:e.substr(7).match(xf).map(ke)},Wu=function(t,e){var n=t._gsap||Or(t),i=t.style,s=Uh(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Io:s):(s===Io&&!t.offsetParent&&t!==Es&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Es.appendChild(t)),s=Uh(t),l?i.display=l:dr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Es.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Rc=function(t,e,n,i,s,o){var a=t._gsap,l=s||Wu(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],y=l[5],S=e.split(" "),v=parseFloat(S[0])||0,A=parseFloat(S[1])||0,w,E,R,M;n?l!==Io&&(E=f*m-g*_)&&(R=v*(m/E)+A*(-_/E)+(_*y-m*p)/E,M=v*(-g/E)+A*(f/E)-(f*y-g*p)/E,v=R,A=M):(w=op(t),v=w.x+(~S[0].indexOf("%")?v/100*w.width:v),A=w.y+(~(S[1]||S[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&a.smooth?(p=v-c,y=A-u,a.xOffset=d+(p*f+y*_)-p,a.yOffset=h+(p*g+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=A,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Pn]="0px 0px",o&&(ir(o,a,"xOrigin",c,v),ir(o,a,"yOrigin",u,A),ir(o,a,"xOffset",d,a.xOffset),ir(o,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+A)},Uo=function(t,e){var n=t._gsap||new Yf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Wn(t,Pn)||"0",u,d,h,f,g,_,m,p,y,S,v,A,w,E,R,M,x,P,L,U,k,q,X,Y,V,et,D,ut,It,Jt,j,tt;return u=d=h=_=m=p=y=S=v=0,f=g=1,n.svg=!!(t.getCTM&&ap(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ne]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ne]!=="none"?l[Ne]:"")),i.scale=i.rotate=i.translate="none"),E=Wu(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),Rc(t,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,E)),A=n.xOrigin||0,w=n.yOrigin||0,E!==Io&&(P=E[0],L=E[1],U=E[2],k=E[3],u=q=E[4],d=X=E[5],E.length===6?(f=Math.sqrt(P*P+L*L),g=Math.sqrt(k*k+U*U),_=P||L?Jr(L,P)*Tr:0,y=U||k?Jr(U,k)*Tr+_:0,y&&(g*=Math.abs(Math.cos(y*bs))),n.svg&&(u-=A-(A*P+w*U),d-=w-(A*L+w*k))):(tt=E[6],Jt=E[7],D=E[8],ut=E[9],It=E[10],j=E[11],u=E[12],d=E[13],h=E[14],R=Jr(tt,It),m=R*Tr,R&&(M=Math.cos(-R),x=Math.sin(-R),Y=q*M+D*x,V=X*M+ut*x,et=tt*M+It*x,D=q*-x+D*M,ut=X*-x+ut*M,It=tt*-x+It*M,j=Jt*-x+j*M,q=Y,X=V,tt=et),R=Jr(-U,It),p=R*Tr,R&&(M=Math.cos(-R),x=Math.sin(-R),Y=P*M-D*x,V=L*M-ut*x,et=U*M-It*x,j=k*x+j*M,P=Y,L=V,U=et),R=Jr(L,P),_=R*Tr,R&&(M=Math.cos(R),x=Math.sin(R),Y=P*M+L*x,V=q*M+X*x,L=L*M-P*x,X=X*M-q*x,P=Y,q=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=ke(Math.sqrt(P*P+L*L+U*U)),g=ke(Math.sqrt(X*X+tt*tt)),R=Jr(q,X),y=Math.abs(R)>2e-4?R*Tr:0,v=j?1/(j<0?-j:j):0),n.svg&&(Y=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!cp(Wn(t,Ne)),Y&&t.setAttribute("transform",Y))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(f*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=ke(f),n.scaleY=ke(g),n.rotation=ke(_)+a,n.rotationX=ke(m)+a,n.rotationY=ke(p)+a,n.skewX=y+a,n.skewY=S+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Pn]=il(c)),n.xOffset=n.yOffset=0,n.force3D=Xn.force3D,n.renderTransform=n.svg?Vg:sp?up:Hg,n.uncache=0,n},il=function(t){return(t=t.split(" "))[0]+" "+t[1]},Rl=function(t,e,n){var i=un(e);return ke(parseFloat(e)+parseFloat(fr(t,"x",n+"px",i)))+i},Hg=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,up(t,e)},_r="0deg",js="0px",vr=") ",up=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,S=n.zOrigin,v="",A=p==="auto"&&t&&t!==1||p===!0;if(S&&(d!==_r||u!==_r)){var w=parseFloat(u)*bs,E=Math.sin(w),R=Math.cos(w),M;w=parseFloat(d)*bs,M=Math.cos(w),o=Rl(y,o,E*M*-S),a=Rl(y,a,-Math.sin(w)*-S),l=Rl(y,l,R*M*-S+S)}m!==js&&(v+="perspective("+m+vr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(A||o!==js||a!==js||l!==js)&&(v+=l!==js||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+vr),c!==_r&&(v+="rotate("+c+vr),u!==_r&&(v+="rotateY("+u+vr),d!==_r&&(v+="rotateX("+d+vr),(h!==_r||f!==_r)&&(v+="skew("+h+", "+f+vr),(g!==1||_!==1)&&(v+="scale("+g+", "+_+vr),y.style[Ne]=v||"translate(0, 0)"},Vg=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,S=parseFloat(o),v=parseFloat(a),A,w,E,R,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=bs,c*=bs,A=Math.cos(l)*d,w=Math.sin(l)*d,E=Math.sin(l-c)*-h,R=Math.cos(l-c)*h,c&&(u*=bs,M=Math.tan(c-u),M=Math.sqrt(1+M*M),E*=M,R*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),A*=M,w*=M)),A=ke(A),w=ke(w),E=ke(E),R=ke(R)):(A=d,R=h,w=E=0),(S&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(S=fr(f,"x",o,"px"),v=fr(f,"y",a,"px")),(g||_||m||p)&&(S=ke(S+g-(g*A+_*E)+m),v=ke(v+_-(g*w+_*R)+p)),(i||s)&&(M=f.getBBox(),S=ke(S+i/100*M.width),v=ke(v+s/100*M.height)),M="matrix("+A+","+w+","+E+","+R+","+S+","+v+")",f.setAttribute("transform",M),y&&(f.style[Ne]=M)},Gg=function(t,e,n,i,s){var o=360,a=nn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Tr:1),c=l-i,u=i+c+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Rh)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Rh)%o-~~(c/o)*o)),t._pt=h=new Cn(t._pt,e,n,i,c,Tg),h.e=u,h.u="deg",t._props.push(n),h},Nh=function(t,e){for(var n in e)t[n]=e[n];return t},Wg=function(t,e,n){var i=Nh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,d,h,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ne]=e,a=Uo(n,1),dr(n,Ne),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ne],o[Ne]=e,a=Uo(n,1),o[Ne]=c);for(l in Vi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=un(c),g=un(u),d=f!==g?fr(n,l,c,g):parseFloat(c),h=parseFloat(u),t._pt=new Cn(t._pt,a,l,d,h-d,Tc),t._pt.u=g||0,t._props.push(l));Nh(a,i)};Rn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});nl[t>1?"border"+r:r]=function(a,l,c,u,d){var h,f;if(arguments.length<4)return h=o.map(function(g){return Ii(a,g,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},o.forEach(function(g,_){return f[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,f,d)}});var hp={name:"css",register:Ac,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,d,h,f,g,_,m,p,y,S,v,A,w,E,R,M;Hu||Ac(),this.styles=this.styles||rp(t),R=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(kn[_]&&qf(_,e,n,i,t,s)))){if(f=typeof u,g=nl[_],f==="function"&&(u=u.call(n,i,t,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Po(u)),g)g(this,t,_,u,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",ar.lastIndex=0,ar.test(c)||(m=un(c),p=un(u),p?m!==p&&(c=fr(t,_,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],nn(c)&&~c.indexOf("random(")&&(c=Po(c)),un(c+"")||c==="auto"||(c+=Xn.units[_]||un(Ii(t,_))||""),(c+"").charAt(1)==="="&&(c=Ii(t,_))):c=Ii(t,_),h=parseFloat(c),y=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),d=parseFloat(u),_ in vi&&(_==="autoAlpha"&&(h===1&&Ii(t,"visibility")==="hidden"&&d&&(h=0),R.push("visibility",0,a.visibility),ir(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=vi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in Vi,S){if(this.styles.save(_),M=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=Wn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var x=t.style.perspective;t.style.perspective=u,u=Wn(t,"perspective"),x?t.style.perspective=x:dr(t,"perspective")}d=parseFloat(u)}if(v||(A=t._gsap,A.renderTransform&&!e.parseTransform||Uo(t,e.parseTransform),w=e.smoothOrigin!==!1&&A.smooth,v=this._pt=new Cn(this._pt,a,Ne,0,1,A.renderTransform,A,0,-1),v.dep=1),_==="scale")this._pt=new Cn(this._pt,A,"scaleY",A.scaleY,(y?Ms(A.scaleY,y+d):d)-A.scaleY||0,Tc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(Pn,0,a[Pn]),u=kg(u),A.svg?Rc(t,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==A.zOrigin&&ir(this,A,"zOrigin",A.zOrigin,p),ir(this,a,_,il(c),il(u)));continue}else if(_==="svgOrigin"){Rc(t,u,1,w,0,this);continue}else if(_ in lp){Gg(this,A,_,h,y?Ms(h,y+u):u);continue}else if(_==="smoothOrigin"){ir(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){Wg(this,u,t);continue}}else _ in a||(_=Fs(_)||_);if(S||(d||d===0)&&(h||h===0)&&!bg.test(u)&&_ in a)m=(c+"").substr((h+"").length),d||(d=0),p=un(u)||(_ in Xn.units?Xn.units[_]:m),m!==p&&(h=fr(t,_,c,p)),this._pt=new Cn(this._pt,S?A:a,_,h,(y?Ms(h,y+d):d)-h,!S&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?Rg:Tc),this._pt.u=p||0,S&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=Ag):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=wg);else if(_ in a)Bg.call(this,t,_,c,y?y+u:u);else if(_ in t)this.add(t,_,c||t[_],y?y+u:u,i,s);else if(_!=="parseTransform"){Lu(_,u);continue}S||(_ in a?R.push(_,0,a[_]):typeof t[_]=="function"?R.push(_,2,t[_]()):R.push(_,1,c||t[_])),o.push(_)}}E&&Qf(this)},render:function(t,e){if(e.tween._time||!Vu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ii,aliases:vi,getSetter:function(t,e,n){var i=vi[e];return i&&i.indexOf(",")<0&&(e=i),e in Vi&&e!==Pn&&(t._gsap.x||Ii(t,"x"))?n&&Ah===n?e==="scale"?Dg:Lg:(Ah=n||{})&&(e==="scale"?Ig:Ug):t.style&&!Ru(t.style[e])?Cg:~e.indexOf("-")?Pg:ku(t,e)},core:{_removeProperty:dr,_getMatrix:Wu}};Dn.utils.checkPrefix=Fs;Dn.core.getStyleSaver=rp;(function(r,t,e,n){var i=Rn(r+","+t+","+e,function(s){Vi[s]=1});Rn(t,function(s){Xn.units[s]="deg",lp[s]=1}),vi[i[13]]=r+","+t,Rn(n,function(s){var o=s.split(":");vi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Rn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Xn.units[r]="px"});Dn.registerPlugin(hp);var rl=Dn.registerPlugin(hp)||Dn;rl.core.Tween;function Xg(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Yg(r,t,e){return t&&Xg(r.prototype,t),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var rn,Oa,Vn,rr,sr,Ts,dp,wr,ws,fp,Fi,ci,pp,mp=function(){return rn||typeof window<"u"&&(rn=window.gsap)&&rn.registerPlugin&&rn},gp=1,ys=[],re=[],Si=[],vo=Date.now,Cc=function(t,e){return e},qg=function(){var t=ws.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,re),i.push.apply(i,Si),re=n,Si=i,Cc=function(o,a){return e[o](a)}},lr=function(t,e){return~Si.indexOf(t)&&Si[Si.indexOf(t)+1][e]},xo=function(t){return!!~fp.indexOf(t)},mn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},pn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},$o="scrollLeft",jo="scrollTop",Pc=function(){return Fi&&Fi.isPressed||re.cache++},sl=function(t,e){var n=function i(s){if(s||s===0){gp&&(Vn.history.scrollRestoration="manual");var o=Fi&&Fi.isPressed;s=i.v=Math.round(s)||(Fi&&Fi.iOS?1:0),t(s),i.cacheID=re.cache,o&&Cc("ss",s)}else(e||re.cache!==i.cacheID||Cc("ref"))&&(i.cacheID=re.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Sn={s:$o,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:sl(function(r){return arguments.length?Vn.scrollTo(r,$e.sc()):Vn.pageXOffset||rr[$o]||sr[$o]||Ts[$o]||0})},$e={s:jo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Sn,sc:sl(function(r){return arguments.length?Vn.scrollTo(Sn.sc(),r):Vn.pageYOffset||rr[jo]||sr[jo]||Ts[jo]||0})},bn=function(t,e){return(e&&e._ctx&&e._ctx.selector||rn.utils.toArray)(t)[0]||(typeof t=="string"&&rn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},$g=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},pr=function(t,e){var n=e.s,i=e.sc;xo(t)&&(t=rr.scrollingElement||sr);var s=re.indexOf(t),o=i===$e.sc?1:2;!~s&&(s=re.push(t)-1),re[s+o]||mn(t,"scroll",Pc);var a=re[s+o],l=a||(re[s+o]=sl(lr(t,n),!0)||(xo(t)?i:sl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=rn.getProperty(t,"scrollBehavior")==="smooth"),l},Lc=function(t,e,n){var i=t,s=t,o=vo(),a=o,l=e||50,c=Math.max(500,l*3),u=function(g,_){var m=vo();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},d=function(){s=i=n?0:i,a=o=0},h=function(g){var _=a,m=s,p=vo();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:d,getVelocity:h}},Zs=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Fh=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},_p=function(){ws=rn.core.globals().ScrollTrigger,ws&&ws.core&&qg()},vp=function(t){return rn=t||mp(),!Oa&&rn&&typeof document<"u"&&document.body&&(Vn=window,rr=document,sr=rr.documentElement,Ts=rr.body,fp=[Vn,rr,sr,Ts],rn.utils.clamp,pp=rn.core.context||function(){},wr="onpointerenter"in Ts?"pointer":"mouse",dp=He.isTouch=Vn.matchMedia&&Vn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Vn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ci=He.eventTypes=("ontouchstart"in sr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in sr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return gp=0},500),Oa=1),ws||_p(),Oa};Sn.op=$e;re.cache=0;var He=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Oa||vp(rn)||console.warn("Please gsap.registerPlugin(Observer)"),ws||_p();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,y=n.onDrag,S=n.onPress,v=n.onRelease,A=n.onRight,w=n.onLeft,E=n.onUp,R=n.onDown,M=n.onChangeX,x=n.onChangeY,P=n.onChange,L=n.onToggleX,U=n.onToggleY,k=n.onHover,q=n.onHoverEnd,X=n.onMove,Y=n.ignoreCheck,V=n.isNormalizer,et=n.onGestureStart,D=n.onGestureEnd,ut=n.onWheel,It=n.onEnable,Jt=n.onDisable,j=n.onClick,tt=n.scrollSpeed,_t=n.capture,nt=n.allowClicks,Et=n.lockAxis,Rt=n.onLockAxis;this.target=a=bn(a)||sr,this.vars=n,f&&(f=rn.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,tt=tt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Vn.getComputedStyle(Ts).lineHeight)||22);var Ht,Qt,Nt,Lt,N,ye,Ot,z=this,bt=0,oe=0,Ct=n.passive||!u&&n.passive!==!1,C=pr(a,Sn),b=pr(a,$e),G=C(),Q=b(),J=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ci[0]==="pointerdown",Z=xo(a),ht=a.ownerDocument||rr,at=[0,0,0],pt=[0,0,0],Wt=0,it=function(){return Wt=vo()},ot=function(Tt,$t){return(z.event=Tt)&&f&&$g(Tt.target,f)||$t&&J&&Tt.pointerType!=="touch"||Y&&Y(Tt,$t)},Ut=function(){z._vx.reset(),z._vy.reset(),Qt.pause(),d&&d(z)},Dt=function(){var Tt=z.deltaX=Fh(at),$t=z.deltaY=Fh(pt),mt=Math.abs(Tt)>=i,Vt=Math.abs($t)>=i;P&&(mt||Vt)&&P(z,Tt,$t,at,pt),mt&&(A&&z.deltaX>0&&A(z),w&&z.deltaX<0&&w(z),M&&M(z),L&&z.deltaX<0!=bt<0&&L(z),bt=z.deltaX,at[0]=at[1]=at[2]=0),Vt&&(R&&z.deltaY>0&&R(z),E&&z.deltaY<0&&E(z),x&&x(z),U&&z.deltaY<0!=oe<0&&U(z),oe=z.deltaY,pt[0]=pt[1]=pt[2]=0),(Lt||Nt)&&(X&&X(z),Nt&&(m&&Nt===1&&m(z),y&&y(z),Nt=0),Lt=!1),ye&&!(ye=!1)&&Rt&&Rt(z),N&&(ut(z),N=!1),Ht=0},xt=function(Tt,$t,mt){at[mt]+=Tt,pt[mt]+=$t,z._vx.update(Tt),z._vy.update($t),c?Ht||(Ht=requestAnimationFrame(Dt)):Dt()},qt=function(Tt,$t){Et&&!Ot&&(z.axis=Ot=Math.abs(Tt)>Math.abs($t)?"x":"y",ye=!0),Ot!=="y"&&(at[2]+=Tt,z._vx.update(Tt,!0)),Ot!=="x"&&(pt[2]+=$t,z._vy.update($t,!0)),c?Ht||(Ht=requestAnimationFrame(Dt)):Dt()},Ft=function(Tt){if(!ot(Tt,1)){Tt=Zs(Tt,u);var $t=Tt.clientX,mt=Tt.clientY,Vt=$t-z.x,wt=mt-z.y,zt=z.isDragging;z.x=$t,z.y=mt,(zt||(Vt||wt)&&(Math.abs(z.startX-$t)>=s||Math.abs(z.startY-mt)>=s))&&(Nt||(Nt=zt?2:1),zt||(z.isDragging=!0),qt(Vt,wt))}},le=z.onPress=function(vt){ot(vt,1)||vt&&vt.button||(z.axis=Ot=null,Qt.pause(),z.isPressed=!0,vt=Zs(vt),bt=oe=0,z.startX=z.x=vt.clientX,z.startY=z.y=vt.clientY,z._vx.reset(),z._vy.reset(),mn(V?a:ht,ci[1],Ft,Ct,!0),z.deltaX=z.deltaY=0,S&&S(z))},I=z.onRelease=function(vt){if(!ot(vt,1)){pn(V?a:ht,ci[1],Ft,!0);var Tt=!isNaN(z.y-z.startY),$t=z.isDragging,mt=$t&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),Vt=Zs(vt);!mt&&Tt&&(z._vx.reset(),z._vy.reset(),u&&nt&&rn.delayedCall(.08,function(){if(vo()-Wt>300&&!vt.defaultPrevented){if(vt.target.click)vt.target.click();else if(ht.createEvent){var wt=ht.createEvent("MouseEvents");wt.initMouseEvent("click",!0,!0,Vn,1,Vt.screenX,Vt.screenY,Vt.clientX,Vt.clientY,!1,!1,!1,!1,0,null),vt.target.dispatchEvent(wt)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,d&&$t&&!V&&Qt.restart(!0),Nt&&Dt(),p&&$t&&p(z),v&&v(z,mt)}},ct=function(Tt){return Tt.touches&&Tt.touches.length>1&&(z.isGesturing=!0)&&et(Tt,z.isDragging)},$=function(){return(z.isGesturing=!1)||D(z)},K=function(Tt){if(!ot(Tt)){var $t=C(),mt=b();xt(($t-G)*tt,(mt-Q)*tt,1),G=$t,Q=mt,d&&Qt.restart(!0)}},lt=function(Tt){if(!ot(Tt)){Tt=Zs(Tt,u),ut&&(N=!0);var $t=(Tt.deltaMode===1?l:Tt.deltaMode===2?Vn.innerHeight:1)*g;xt(Tt.deltaX*$t,Tt.deltaY*$t,0),d&&!V&&Qt.restart(!0)}},dt=function(Tt){if(!ot(Tt)){var $t=Tt.clientX,mt=Tt.clientY,Vt=$t-z.x,wt=mt-z.y;z.x=$t,z.y=mt,Lt=!0,d&&Qt.restart(!0),(Vt||wt)&&qt(Vt,wt)}},Bt=function(Tt){z.event=Tt,k(z)},ue=function(Tt){z.event=Tt,q(z)},Fe=function(Tt){return ot(Tt)||Zs(Tt,u)&&j(z)};Qt=z._dc=rn.delayedCall(h||.25,Ut).pause(),z.deltaX=z.deltaY=0,z._vx=Lc(0,50,!0),z._vy=Lc(0,50,!0),z.scrollX=C,z.scrollY=b,z.isDragging=z.isGesturing=z.isPressed=!1,pp(this),z.enable=function(vt){return z.isEnabled||(mn(Z?ht:a,"scroll",Pc),o.indexOf("scroll")>=0&&mn(Z?ht:a,"scroll",K,Ct,_t),o.indexOf("wheel")>=0&&mn(a,"wheel",lt,Ct,_t),(o.indexOf("touch")>=0&&dp||o.indexOf("pointer")>=0)&&(mn(a,ci[0],le,Ct,_t),mn(ht,ci[2],I),mn(ht,ci[3],I),nt&&mn(a,"click",it,!0,!0),j&&mn(a,"click",Fe),et&&mn(ht,"gesturestart",ct),D&&mn(ht,"gestureend",$),k&&mn(a,wr+"enter",Bt),q&&mn(a,wr+"leave",ue),X&&mn(a,wr+"move",dt)),z.isEnabled=!0,z.isDragging=z.isGesturing=z.isPressed=Lt=Nt=!1,z._vx.reset(),z._vy.reset(),G=C(),Q=b(),vt&&vt.type&&le(vt),It&&It(z)),z},z.disable=function(){z.isEnabled&&(ys.filter(function(vt){return vt!==z&&xo(vt.target)}).length||pn(Z?ht:a,"scroll",Pc),z.isPressed&&(z._vx.reset(),z._vy.reset(),pn(V?a:ht,ci[1],Ft,!0)),pn(Z?ht:a,"scroll",K,_t),pn(a,"wheel",lt,_t),pn(a,ci[0],le,_t),pn(ht,ci[2],I),pn(ht,ci[3],I),pn(a,"click",it,!0),pn(a,"click",Fe),pn(ht,"gesturestart",ct),pn(ht,"gestureend",$),pn(a,wr+"enter",Bt),pn(a,wr+"leave",ue),pn(a,wr+"move",dt),z.isEnabled=z.isPressed=z.isDragging=!1,Jt&&Jt(z))},z.kill=z.revert=function(){z.disable();var vt=ys.indexOf(z);vt>=0&&ys.splice(vt,1),Fi===z&&(Fi=0)},ys.push(z),V&&xo(a)&&(Fi=z),z.enable(_)},Yg(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();He.version="3.15.0";He.create=function(r){return new He(r)};He.register=vp;He.getAll=function(){return ys.slice()};He.getById=function(r){return ys.filter(function(t){return t.vars.id===r})[0]};mp()&&rn.registerPlugin(He);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var St,gs,ie,_e,zn,ge,Xu,ol,No,yo,ao,Zo,ln,_l,Dc,vn,Oh,Bh,_s,xp,Cl,yp,_n,Ic,Sp,Mp,Qi,Uc,Yu,As,qu,So,Nc,Pl,Ko=1,cn=Date.now,Ll=cn(),ii=0,lo=0,kh=function(t,e,n){var i=Bn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},zh=function(t,e){return e&&(!Bn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},jg=function r(){return lo&&requestAnimationFrame(r)},Hh=function(){return _l=1},Vh=function(){return _l=0},mi=function(t){return t},co=function(t){return Math.round(t*1e5)/1e5||0},Ep=function(){return typeof window<"u"},bp=function(){return St||Ep()&&(St=window.gsap)&&St.registerPlugin&&St},Wr=function(t){return!!~Xu.indexOf(t)},Tp=function(t){return(t==="Height"?qu:ie["inner"+t])||zn["client"+t]||ge["client"+t]},wp=function(t){return lr(t,"getBoundingClientRect")||(Wr(t)?function(){return Va.width=ie.innerWidth,Va.height=qu,Va}:function(){return Ui(t)})},Zg=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=lr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Tp(s):t["client"+s])||0}},Kg=function(t,e){return!e||~Si.indexOf(t)?wp(t):function(){return Va}},xi=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=lr(t,n))?o()-wp(t)()[s]:Wr(t)?(zn[n]||ge[n])-Tp(i):t[n]-t["offset"+i])},Jo=function(t,e){for(var n=0;n<_s.length;n+=3)(!e||~e.indexOf(_s[n+1]))&&t(_s[n],_s[n+1],_s[n+2])},Bn=function(t){return typeof t=="string"},hn=function(t){return typeof t=="function"},uo=function(t){return typeof t=="number"},Ar=function(t){return typeof t=="object"},Ks=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Qr=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},ts=Math.abs,Ap="left",Rp="top",$u="right",ju="bottom",Hr="width",Vr="height",Mo="Right",Eo="Left",bo="Top",To="Bottom",Ge="padding",Jn="margin",Os="Width",Zu="Height",qe="px",Qn=function(t){return ie.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Jg=function(t){var e=Qn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Gh=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ui=function(t,e){var n=e&&Qn(t)[Dc]!=="matrix(1, 0, 0, 1, 0, 0)"&&St.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},al=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Cp=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},Qg=function(t){return function(e){return St.utils.snap(Cp(t),e)}},Ku=function(t){var e=St.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},t_=function(t){return function(e,n){return Ku(Cp(t))(e,n.direction)}},Qo=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},tn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},Qe=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ta=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Wh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ea={toggleActions:"play",anticipatePin:0},ll={top:0,left:0,center:.5,bottom:1,right:1},Ba=function(t,e){if(Bn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in ll?ll[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},na=function(t,e,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,g=_e.createElement("div"),_=Wr(n)||lr(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=_?ge:n.tagName==="IFRAME"?n.contentDocument.body:n,y=t.indexOf("start")!==-1,S=y?c:u,v="border-color:"+S+";font-size:"+d+";color:"+S+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(i===$e?$u:ju)+":"+(o+parseFloat(h))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=v,g.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],ka(g,0,i,y),g},ka=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Os]=1,s["border"+a+Os]=0,s[n.p]=e+"px",St.set(t,s)},te=[],Fc={},Fo,Xh=function(){return cn()-ii>34&&(Fo||(Fo=requestAnimationFrame(ki)))},es=function(){(!_n||!_n.isPressed||_n.startX>ge.clientWidth)&&(re.cache++,_n?Fo||(Fo=requestAnimationFrame(ki)):ki(),ii||Yr("scrollStart"),ii=cn())},Dl=function(){Mp=ie.innerWidth,Sp=ie.innerHeight},ho=function(t){re.cache++,(t===!0||!ln&&!yp&&!_e.fullscreenElement&&!_e.webkitFullscreenElement&&(!Ic||Mp!==ie.innerWidth||Math.abs(ie.innerHeight-Sp)>ie.innerHeight*.25))&&ol.restart(!0)},Xr={},e_=[],Pp=function r(){return Qe(ee,"scrollEnd",r)||Ur(!0)},Yr=function(t){return Xr[t]&&Xr[t].map(function(e){return e()})||e_},On=[],Lp=function(t){for(var e=0;e<On.length;e+=5)(!t||On[e+4]&&On[e+4].query===t)&&(On[e].style.cssText=On[e+1],On[e].getBBox&&On[e].setAttribute("transform",On[e+2]||""),On[e+3].uncache=1)},Dp=function(){return re.forEach(function(t){return hn(t)&&++t.cacheID&&(t.rec=t())})},Ju=function(t,e){var n;for(vn=0;vn<te.length;vn++)n=te[vn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));So=!0,e&&Lp(e),e||Yr("revert")},Ip=function(t,e){re.cache++,(e||!xn)&&re.forEach(function(n){return hn(n)&&n.cacheID++&&(n.rec=0)}),Bn(t)&&(ie.history.scrollRestoration=Yu=t)},xn,Gr=0,Yh,n_=function(){if(Yh!==Gr){var t=Yh=Gr;requestAnimationFrame(function(){return t===Gr&&Ur(!0)})}},Up=function(){ge.appendChild(As),qu=!_n&&As.offsetHeight||ie.innerHeight,ge.removeChild(As)},qh=function(t){return No(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Ur=function(t,e){if(zn=_e.documentElement,ge=_e.body,Xu=[ie,_e,zn,ge],ii&&!t&&!So){tn(ee,"scrollEnd",Pp);return}Up(),xn=ee.isRefreshing=!0,So||Dp();var n=Yr("refreshInit");xp&&ee.sort(),e||Ju(),re.forEach(function(i){hn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),te.slice(0).forEach(function(i){return i.refresh()}),So=!1,te.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Nc=1,qh(!0),te.forEach(function(i){var s=xi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),qh(!1),Nc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),re.forEach(function(i){hn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Ip(Yu,1),ol.pause(),Gr++,xn=2,ki(2),te.forEach(function(i){return hn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),xn=ee.isRefreshing=!1,Yr("refresh")},Oc=0,za=1,wo,ki=function(t){if(t===2||!xn&&!So){ee.isUpdating=!0,wo&&wo.update(0);var e=te.length,n=cn(),i=n-Ll>=50,s=e&&te[0].scroll();if(za=Oc>s?-1:1,xn||(Oc=s),i&&(ii&&!_l&&n-ii>200&&(ii=0,Yr("scrollEnd")),ao=Ll,Ll=n),za<0){for(vn=e;vn-- >0;)te[vn]&&te[vn].update(0,i);za=1}else for(vn=0;vn<e;vn++)te[vn]&&te[vn].update(0,i);ee.isUpdating=!1}Fo=0},Bc=[Ap,Rp,ju,$u,Jn+To,Jn+Mo,Jn+bo,Jn+Eo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ha=Bc.concat([Hr,Vr,"boxSizing","max"+Os,"max"+Zu,"position",Jn,Ge,Ge+bo,Ge+Mo,Ge+To,Ge+Eo]),i_=function(t,e,n){Rs(n);var i=t._gsap;if(i.spacerIsNative)Rs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Il=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Bc.length,o=e.style,a=t.style,l;s--;)l=Bc[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[ju]=a[$u]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Hr]=al(t,Sn)+qe,o[Vr]=al(t,$e)+qe,o[Ge]=a[Jn]=a[Rp]=a[Ap]="0",Rs(i),a[Hr]=a["max"+Os]=n[Hr],a[Vr]=a["max"+Zu]=n[Vr],a[Ge]=n[Ge],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},r_=/([A-Z])/g,Rs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||St.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(r_,"-$1").toLowerCase())}},ia=function(t){for(var e=Ha.length,n=t.style,i=[],s=0;s<e;s++)i.push(Ha[s],n[Ha[s]]);return i.t=t,i},s_=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Va={left:0,top:0},$h=function(t,e,n,i,s,o,a,l,c,u,d,h,f,g){hn(t)&&(t=t(l)),Bn(t)&&t.substr(0,3)==="max"&&(t=h+(t.charAt(4)==="="?Ba("0"+t.substr(3),n):0));var _=f?f.time():0,m,p,y;if(f&&f.seek(0),isNaN(t)||(t=+t),uo(t))f&&(t=St.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,t)),a&&ka(a,n,i,!0);else{hn(e)&&(e=e(l));var S=(t||"0").split(" "),v,A,w,E;y=bn(e,l)||ge,v=Ui(y)||{},(!v||!v.left&&!v.top)&&Qn(y).display==="none"&&(E=y.style.display,y.style.display="block",v=Ui(y),E?y.style.display=E:y.style.removeProperty("display")),A=Ba(S[0],v[i.d]),w=Ba(S[1]||"0",n),t=v[i.p]-c[i.p]-u+A+s-w,a&&ka(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var R=t+n,M=o._isStart;m="scroll"+i.d2,ka(o,R,i,M&&R>20||!M&&(d?Math.max(ge[m],zn[m]):o.parentNode[m])<=R+1),d&&(c=Ui(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+qe))}return f&&y&&(m=Ui(y),f.seek(h),p=Ui(y),f._caScrollDist=m[i.p]-p[i.p],t=t/f._caScrollDist*h),f&&f.seek(_),f?t:Math.round(t)},o_=/(webkit|moz|length|cssText|inset)/i,jh=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===ge){t._stOrig=s.cssText,a=Qn(t);for(o in a)!+o&&!o_.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;St.core.getCache(t).uncache=1,e.appendChild(t)}},Np=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},ra=function(t,e,n){var i={};i[e.p]="+="+n,St.set(t,i)},Zh=function(t,e){var n=pr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,u,d){var h=o.tween,f=l.onComplete,g={};c=c||n();var _=Np(n,c,function(){h.kill(),o.tween=0});return d=u&&d||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){re.cache++,o.tween&&ki()},l.onComplete=function(){o.tween=0,f&&f.call(h)},h=o.tween=St.to(t,l),h};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},tn(t,"wheel",n.wheelHandler),ee.isTouch&&tn(t,"touchmove",n.wheelHandler),s},ee=function(){function r(e,n){gs||r.register(St)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Uc(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!lo){this.update=this.refresh=this.kill=mi;return}n=Gh(Bn(n)||uo(n)||n.nodeType?{trigger:n}:n,ea);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,S=s.once,v=s.snap,A=s.pinReparent,w=s.pinSpacer,E=s.containerAnimation,R=s.fastScrollEnd,M=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Sn:$e,P=!d&&d!==0,L=bn(n.scroller||ie),U=St.core.getCache(L),k=Wr(L),q=("pinType"in n?n.pinType:lr(L,"pinType")||k&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=P&&n.toggleActions.split(" "),V="markers"in n?n.markers:ea.markers,et=k?0:parseFloat(Qn(L)["border"+x.p2+Os])||0,D=this,ut=n.onRefreshInit&&function(){return n.onRefreshInit(D)},It=Zg(L,k,x),Jt=Kg(L,k),j=0,tt=0,_t=0,nt=pr(L,x),Et,Rt,Ht,Qt,Nt,Lt,N,ye,Ot,z,bt,oe,Ct,C,b,G,Q,J,Z,ht,at,pt,Wt,it,ot,Ut,Dt,xt,qt,Ft,le,I,ct,$,K,lt,dt,Bt,ue;if(D._startClamp=D._endClamp=!1,D._dir=x,m*=45,D.scroller=L,D.scroll=E?E.time.bind(E):nt,Qt=nt(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(xp=1,n.refreshPriority===-9999&&(wo=D)),U.tweenScroll=U.tweenScroll||{top:Zh(L,$e),left:Zh(L,Sn)},D.tweenTo=Et=U.tweenScroll[x.p],D.scrubDuration=function(mt){ct=uo(mt)&&mt,ct?I?I.duration(mt):I=St.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ct,paused:!0,onComplete:function(){return p&&p(D)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(d),Ft=0,l||(l=i.vars.id)),v&&((!Ar(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in ge.style&&St.set(k?[ge,zn]:L,{scrollBehavior:"auto"}),re.forEach(function(mt){return hn(mt)&&mt.target===(k?_e.scrollingElement||zn:L)&&(mt.smooth=!1)}),Ht=hn(v.snapTo)?v.snapTo:v.snapTo==="labels"?Qg(i):v.snapTo==="labelsDirectional"?t_(i):v.directional!==!1?function(mt,Vt){return Ku(v.snapTo)(mt,cn()-tt<500?0:Vt.direction)}:St.utils.snap(v.snapTo),$=v.duration||{min:.1,max:2},$=Ar($)?yo($.min,$.max):yo($,$),K=St.delayedCall(v.delay||ct/2||.1,function(){var mt=nt(),Vt=cn()-tt<500,wt=Et.tween;if((Vt||Math.abs(D.getVelocity())<10)&&!wt&&!_l&&j!==mt){var zt=(mt-Lt)/C,Be=i&&!P?i.totalProgress():zt,ne=Vt?0:(Be-le)/(cn()-ao)*1e3||0,Te=St.utils.clamp(-zt,1-zt,ts(ne/2)*ne/.185),Ye=zt+(v.inertia===!1?0:Te),Se,Me,de=v,In=de.onStart,we=de.onInterrupt,fn=de.onComplete;if(Se=Ht(Ye,D),uo(Se)||(Se=Ye),Me=Math.max(0,Math.round(Lt+Se*C)),mt<=N&&mt>=Lt&&Me!==mt){if(wt&&!wt._initted&&wt.data<=ts(Me-mt))return;v.inertia===!1&&(Te=Se-zt),Et(Me,{duration:$(ts(Math.max(ts(Ye-Be),ts(Se-Be))*.185/ne/.05||0)),ease:v.ease||"power3",data:ts(Me-mt),onInterrupt:function(){return K.restart(!0)&&we&&Qr(D,we)},onComplete:function(){D.update(),j=nt(),i&&!P&&(I?I.resetTo("totalProgress",Se,i._tTime/i._tDur):i.progress(Se)),Ft=le=i&&!P?i.totalProgress():D.progress,y&&y(D),fn&&Qr(D,fn)}},mt,Te*C,Me-mt-Te*C),In&&Qr(D,In,Et.tween)}}else D.isActive&&j!==mt&&K.restart(!0)}).pause()),l&&(Fc[l]=D),h=D.trigger=bn(h||f!==!0&&f),ue=h&&h._gsap&&h._gsap.stRevert,ue&&(ue=ue(D)),f=f===!0?h:bn(f),Bn(a)&&(a={targets:h,className:a}),f&&(g===!1||g===Jn||(g=!g&&f.parentNode&&f.parentNode.style&&Qn(f.parentNode).display==="flex"?!1:Ge),D.pin=f,Rt=St.core.getCache(f),Rt.spacer?b=Rt.pinState:(w&&(w=bn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Rt.spacerIsNative=!!w,w&&(Rt.spacerState=ia(w))),Rt.spacer=J=w||_e.createElement("div"),J.classList.add("pin-spacer"),l&&J.classList.add("pin-spacer-"+l),Rt.pinState=b=ia(f)),n.force3D!==!1&&St.set(f,{force3D:!0}),D.spacer=J=Rt.spacer,qt=Qn(f),it=qt[g+x.os2],ht=St.getProperty(f),at=St.quickSetter(f,x.a,qe),Il(f,J,qt),Q=ia(f)),V){oe=Ar(V)?Gh(V,Wh):Wh,z=na("scroller-start",l,L,x,oe,0),bt=na("scroller-end",l,L,x,oe,0,z),Z=z["offset"+x.op.d2];var Fe=bn(lr(L,"content")||L);ye=this.markerStart=na("start",l,Fe,x,oe,Z,0,E),Ot=this.markerEnd=na("end",l,Fe,x,oe,Z,0,E),E&&(Bt=St.quickSetter([ye,Ot],x.a,qe)),!q&&!(Si.length&&lr(L,"fixedMarkers")===!0)&&(Jg(k?ge:L),St.set([z,bt],{force3D:!0}),Ut=St.quickSetter(z,x.a,qe),xt=St.quickSetter(bt,x.a,qe))}if(E){var vt=E.vars.onUpdate,Tt=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){D.update(0,0,1),vt&&vt.apply(E,Tt||[])})}if(D.previous=function(){return te[te.indexOf(D)-1]},D.next=function(){return te[te.indexOf(D)+1]},D.revert=function(mt,Vt){if(!Vt)return D.kill(!0);var wt=mt!==!1||!D.enabled,zt=ln;wt!==D.isReverted&&(wt&&(lt=Math.max(nt(),D.scroll.rec||0),_t=D.progress,dt=i&&i.progress()),ye&&[ye,Ot,z,bt].forEach(function(Be){return Be.style.display=wt?"none":"block"}),wt&&(ln=D,D.update(wt)),f&&(!A||!D.isActive)&&(wt?i_(f,J,b):Il(f,J,Qn(f),ot)),wt||D.update(wt),ln=zt,D.isReverted=wt)},D.refresh=function(mt,Vt,wt,zt){if(!((ln||!D.enabled)&&!Vt)){if(f&&mt&&ii){tn(r,"scrollEnd",Pp);return}!xn&&ut&&ut(D),ln=D,Et.tween&&!wt&&(Et.tween.kill(),Et.tween=0),I&&I.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Le){return Le.vars.immediateRender&&Le.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Be=It(),ne=Jt(),Te=E?E.duration():xi(L,x),Ye=C<=.01||!C,Se=0,Me=zt||0,de=Ar(wt)?wt.end:n.end,In=n.endTrigger||h,we=Ar(wt)?wt.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),fn=D.pinnedContainer=n.pinnedContainer&&bn(n.pinnedContainer,D),T=h&&Math.max(0,te.indexOf(D))||0,F=T,H,W,B,rt,st,ft,yt,kt,Gt,Mt,Xt,he,fe;for(V&&Ar(wt)&&(he=St.getProperty(z,x.p),fe=St.getProperty(bt,x.p));F-- >0;)ft=te[F],ft.end||ft.refresh(0,1)||(ln=D),yt=ft.pin,yt&&(yt===h||yt===f||yt===fn)&&!ft.isReverted&&(Mt||(Mt=[]),Mt.unshift(ft),ft.revert(!0,!0)),ft!==te[F]&&(T--,F--);for(hn(we)&&(we=we(D)),we=kh(we,"start",D),Lt=$h(we,h,Be,x,nt(),ye,z,D,ne,et,q,Te,E,D._startClamp&&"_startClamp")||(f?-.001:0),hn(de)&&(de=de(D)),Bn(de)&&!de.indexOf("+=")&&(~de.indexOf(" ")?de=(Bn(we)?we.split(" ")[0]:"")+de:(Se=Ba(de.substr(2),Be),de=Bn(we)?we:(E?St.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Lt):Lt)+Se,In=h)),de=kh(de,"end",D),N=Math.max(Lt,$h(de||(In?"100% 0":Te),In,Be,x,nt()+Se,Ot,bt,D,ne,et,q,Te,E,D._endClamp&&"_endClamp"))||-.001,Se=0,F=T;F--;)ft=te[F]||{},yt=ft.pin,yt&&ft.start-ft._pinPush<=Lt&&!E&&ft.end>0&&(H=ft.end-(D._startClamp?Math.max(0,ft.start):ft.start),(yt===h&&ft.start-ft._pinPush<Lt||yt===fn)&&isNaN(we)&&(Se+=H*(1-ft.progress)),yt===f&&(Me+=H));if(Lt+=Se,N+=Se,D._startClamp&&(D._startClamp+=Se),D._endClamp&&!xn&&(D._endClamp=N||-.001,N=Math.min(N,xi(L,x))),C=N-Lt||(Lt-=.01)&&.001,Ye&&(_t=St.utils.clamp(0,1,St.utils.normalize(Lt,N,lt))),D._pinPush=Me,ye&&Se&&(H={},H[x.a]="+="+Se,fn&&(H[x.p]="-="+nt()),St.set([ye,Ot],H)),f&&!(Nc&&D.end>=xi(L,x)))H=Qn(f),rt=x===$e,B=nt(),pt=parseFloat(ht(x.a))+Me,!Te&&N>1&&(Xt=(k?_e.scrollingElement||zn:L).style,Xt={style:Xt,value:Xt["overflow"+x.a.toUpperCase()]},k&&Qn(ge)["overflow"+x.a.toUpperCase()]!=="scroll"&&(Xt.style["overflow"+x.a.toUpperCase()]="scroll")),Il(f,J,H),Q=ia(f),W=Ui(f,!0),kt=q&&pr(L,rt?Sn:$e)(),g?(ot=[g+x.os2,C+Me+qe],ot.t=J,F=g===Ge?al(f,x)+C+Me:0,F&&(ot.push(x.d,F+qe),J.style.flexBasis!=="auto"&&(J.style.flexBasis=F+qe)),Rs(ot),fn&&te.forEach(function(Le){Le.pin===fn&&Le.vars.pinSpacing!==!1&&(Le._subPinOffset=!0)}),q&&nt(lt)):(F=al(f,x),F&&J.style.flexBasis!=="auto"&&(J.style.flexBasis=F+qe)),q&&(st={top:W.top+(rt?B-Lt:kt)+qe,left:W.left+(rt?kt:B-Lt)+qe,boxSizing:"border-box",position:"fixed"},st[Hr]=st["max"+Os]=Math.ceil(W.width)+qe,st[Vr]=st["max"+Zu]=Math.ceil(W.height)+qe,st[Jn]=st[Jn+bo]=st[Jn+Mo]=st[Jn+To]=st[Jn+Eo]="0",st[Ge]=H[Ge],st[Ge+bo]=H[Ge+bo],st[Ge+Mo]=H[Ge+Mo],st[Ge+To]=H[Ge+To],st[Ge+Eo]=H[Ge+Eo],G=s_(b,st,A),xn&&nt(0)),i?(Gt=i._initted,Cl(1),i.render(i.duration(),!0,!0),Wt=ht(x.a)-pt+C+Me,Dt=Math.abs(C-Wt)>1,q&&Dt&&G.splice(G.length-2,2),i.render(0,!0,!0),Gt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Cl(0)):Wt=C,Xt&&(Xt.value?Xt.style["overflow"+x.a.toUpperCase()]=Xt.value:Xt.style.removeProperty("overflow-"+x.a));else if(h&&nt()&&!E)for(W=h.parentNode;W&&W!==ge;)W._pinOffset&&(Lt-=W._pinOffset,N-=W._pinOffset),W=W.parentNode;Mt&&Mt.forEach(function(Le){return Le.revert(!1,!0)}),D.start=Lt,D.end=N,Qt=Nt=xn?lt:nt(),!E&&!xn&&(Qt<lt&&nt(lt),D.scroll.rec=0),D.revert(!1,!0),tt=cn(),K&&(j=-1,K.restart(!0)),ln=0,i&&P&&(i._initted||dt)&&i.progress()!==dt&&i.progress(dt||0,!0).render(i.time(),!0,!0),(Ye||_t!==D.progress||E||_||i&&!i._initted)&&(i&&!P&&(i._initted||_t||i.vars.immediateRender!==!1)&&i.totalProgress(E&&Lt<-.001&&!_t?St.utils.normalize(Lt,N,0):_t,!0),D.progress=Ye||(Qt-Lt)/C===_t?0:_t),f&&g&&(J._pinOffset=Math.round(D.progress*Wt)),I&&I.invalidate(),isNaN(he)||(he-=St.getProperty(z,x.p),fe-=St.getProperty(bt,x.p),ra(z,x,he),ra(ye,x,he-(zt||0)),ra(bt,x,fe),ra(Ot,x,fe-(zt||0))),Ye&&!xn&&D.update(),u&&!xn&&!Ct&&(Ct=!0,u(D),Ct=!1)}},D.getVelocity=function(){return(nt()-Nt)/(cn()-ao)*1e3||0},D.endAnimation=function(){Ks(D.callbackAnimation),i&&(I?I.progress(1):i.paused()?P||Ks(i,D.direction<0,1):Ks(i,i.reversed()))},D.labelToScroll=function(mt){return i&&i.labels&&(Lt||D.refresh()||Lt)+i.labels[mt]/i.duration()*C||0},D.getTrailing=function(mt){var Vt=te.indexOf(D),wt=D.direction>0?te.slice(0,Vt).reverse():te.slice(Vt+1);return(Bn(mt)?wt.filter(function(zt){return zt.vars.preventOverlaps===mt}):wt).filter(function(zt){return D.direction>0?zt.end<=Lt:zt.start>=N})},D.update=function(mt,Vt,wt){if(!(E&&!wt&&!mt)){var zt=xn===!0?lt:D.scroll(),Be=mt?0:(zt-Lt)/C,ne=Be<0?0:Be>1?1:Be||0,Te=D.progress,Ye,Se,Me,de,In,we,fn,T;if(Vt&&(Nt=Qt,Qt=E?nt():zt,v&&(le=Ft,Ft=i&&!P?i.totalProgress():ne)),m&&f&&!ln&&!Ko&&ii&&(!ne&&Lt<zt+(zt-Nt)/(cn()-ao)*m?ne=1e-4:ne===1&&N>zt+(zt-Nt)/(cn()-ao)*m&&(ne=.9999)),ne!==Te&&D.enabled){if(Ye=D.isActive=!!ne&&ne<1,Se=!!Te&&Te<1,we=Ye!==Se,In=we||!!ne!=!!Te,D.direction=ne>Te?1:-1,D.progress=ne,In&&!ln&&(Me=ne&&!Te?0:ne===1?1:Te===1?2:3,P&&(de=!we&&Y[Me+1]!=="none"&&Y[Me+1]||Y[Me],T=i&&(de==="complete"||de==="reset"||de in i))),M&&(we||T)&&(T||d||!i)&&(hn(M)?M(D):D.getTrailing(M).forEach(function(B){return B.endAnimation()})),P||(I&&!ln&&!Ko?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",ne,i._tTime/i._tDur):(I.vars.totalProgress=ne,I.invalidate().restart())):i&&i.totalProgress(ne,!!(ln&&(tt||mt)))),f){if(mt&&g&&(J.style[g+x.os2]=it),!q)at(co(pt+Wt*ne));else if(In){if(fn=!mt&&ne>Te&&N+1>zt&&zt+1>=xi(L,x),A)if(!mt&&(Ye||fn)){var F=Ui(f,!0),H=zt-Lt;jh(f,ge,F.top+(x===$e?H:0)+qe,F.left+(x===$e?0:H)+qe)}else jh(f,J);Rs(Ye||fn?G:Q),Dt&&ne<1&&Ye||at(pt+(ne===1&&!fn?Wt:0))}}v&&!Et.tween&&!ln&&!Ko&&K.restart(!0),a&&(we||S&&ne&&(ne<1||!Pl))&&No(a.targets).forEach(function(B){return B.classList[Ye||S?"add":"remove"](a.className)}),o&&!P&&!mt&&o(D),In&&!ln?(P&&(T&&(de==="complete"?i.pause().totalProgress(1):de==="reset"?i.restart(!0).pause():de==="restart"?i.restart(!0):i[de]()),o&&o(D)),(we||!Pl)&&(c&&we&&Qr(D,c),X[Me]&&Qr(D,X[Me]),S&&(ne===1?D.kill(!1,1):X[Me]=0),we||(Me=ne===1?1:3,X[Me]&&Qr(D,X[Me]))),R&&!Ye&&Math.abs(D.getVelocity())>(uo(R)?R:2500)&&(Ks(D.callbackAnimation),I?I.progress(1):Ks(i,de==="reverse"?1:!ne,1))):P&&o&&!ln&&o(D)}if(xt){var W=E?zt/E.duration()*(E._caScrollDist||0):zt;Ut(W+(z._isFlipped?1:0)),xt(W)}Bt&&Bt(-zt/E.duration()*(E._caScrollDist||0))}},D.enable=function(mt,Vt){D.enabled||(D.enabled=!0,tn(L,"resize",ho),k||tn(L,"scroll",es),ut&&tn(r,"refreshInit",ut),mt!==!1&&(D.progress=_t=0,Qt=Nt=j=nt()),Vt!==!1&&D.refresh())},D.getTween=function(mt){return mt&&Et?Et.tween:I},D.setPositions=function(mt,Vt,wt,zt){if(E){var Be=E.scrollTrigger,ne=E.duration(),Te=Be.end-Be.start;mt=Be.start+Te*mt/ne,Vt=Be.start+Te*Vt/ne}D.refresh(!1,!1,{start:zh(mt,wt&&!!D._startClamp),end:zh(Vt,wt&&!!D._endClamp)},zt),D.update()},D.adjustPinSpacing=function(mt){if(ot&&mt){var Vt=ot.indexOf(x.d)+1;ot[Vt]=parseFloat(ot[Vt])+mt+qe,ot[1]=parseFloat(ot[1])+mt+qe,Rs(ot)}},D.disable=function(mt,Vt){if(mt!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,Vt||I&&I.pause(),lt=0,Rt&&(Rt.uncache=1),ut&&Qe(r,"refreshInit",ut),K&&(K.pause(),Et.tween&&Et.tween.kill()&&(Et.tween=0)),!k)){for(var wt=te.length;wt--;)if(te[wt].scroller===L&&te[wt]!==D)return;Qe(L,"resize",ho),k||Qe(L,"scroll",es)}},D.kill=function(mt,Vt){D.disable(mt,Vt),I&&!Vt&&I.kill(),l&&delete Fc[l];var wt=te.indexOf(D);wt>=0&&te.splice(wt,1),wt===vn&&za>0&&vn--,wt=0,te.forEach(function(zt){return zt.scroller===D.scroller&&(wt=1)}),wt||xn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,mt&&i.revert({kill:!1}),Vt||i.kill()),ye&&[ye,Ot,z,bt].forEach(function(zt){return zt.parentNode&&zt.parentNode.removeChild(zt)}),wo===D&&(wo=0),f&&(Rt&&(Rt.uncache=1),wt=0,te.forEach(function(zt){return zt.pin===f&&wt++}),wt||(Rt.spacer=0)),n.onKill&&n.onKill(D)},te.push(D),D.enable(!1,!1),ue&&ue(D),i&&i.add&&!C){var $t=D.update;D.update=function(){D.update=$t,re.cache++,Lt||N||D.refresh()},St.delayedCall(.01,D.update),C=.01,Lt=N=0}else D.refresh();f&&n_()},r.register=function(n){return gs||(St=n||bp(),Ep()&&window.document&&r.enable(),gs=lo),gs},r.defaults=function(n){if(n)for(var i in n)ea[i]=n[i];return ea},r.disable=function(n,i){lo=0,te.forEach(function(o){return o[i?"kill":"disable"](n)}),Qe(ie,"wheel",es),Qe(_e,"scroll",es),clearInterval(Zo),Qe(_e,"touchcancel",mi),Qe(ge,"touchstart",mi),Qo(Qe,_e,"pointerdown,touchstart,mousedown",Hh),Qo(Qe,_e,"pointerup,touchend,mouseup",Vh),ol.kill(),Jo(Qe);for(var s=0;s<re.length;s+=3)ta(Qe,re[s],re[s+1]),ta(Qe,re[s],re[s+2])},r.enable=function(){if(ie=window,_e=document,zn=_e.documentElement,ge=_e.body,St){if(No=St.utils.toArray,yo=St.utils.clamp,Uc=St.core.context||mi,Cl=St.core.suppressOverwrites||mi,Yu=ie.history.scrollRestoration||"auto",Oc=ie.pageYOffset||0,St.core.globals("ScrollTrigger",r),ge){lo=1,As=document.createElement("div"),As.style.height="100vh",As.style.position="absolute",Up(),jg(),He.register(St),r.isTouch=He.isTouch,Qi=He.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ic=He.isTouch===1,tn(ie,"wheel",es),Xu=[ie,_e,zn,ge],St.matchMedia?(r.matchMedia=function(u){var d=St.matchMedia(),h;for(h in u)d.add(h,u[h]);return d},St.addEventListener("matchMediaInit",function(){Dp(),Ju()}),St.addEventListener("matchMediaRevert",function(){return Lp()}),St.addEventListener("matchMedia",function(){Ur(0,1),Yr("matchMedia")}),St.matchMedia().add("(orientation: portrait)",function(){return Dl(),Dl})):console.warn("Requires GSAP 3.11.0 or later"),Dl(),tn(_e,"scroll",es);var n=ge.hasAttribute("style"),i=ge.style,s=i.borderTopStyle,o=St.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ui(ge),$e.m=Math.round(a.top+$e.sc())||0,Sn.m=Math.round(a.left+Sn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ge.setAttribute("style",""),ge.removeAttribute("style")),Zo=setInterval(Xh,250),St.delayedCall(.5,function(){return Ko=0}),tn(_e,"touchcancel",mi),tn(ge,"touchstart",mi),Qo(tn,_e,"pointerdown,touchstart,mousedown",Hh),Qo(tn,_e,"pointerup,touchend,mouseup",Vh),Dc=St.utils.checkPrefix("transform"),Ha.push(Dc),gs=cn(),ol=St.delayedCall(.2,Ur).pause(),_s=[_e,"visibilitychange",function(){var u=ie.innerWidth,d=ie.innerHeight;_e.hidden?(Oh=u,Bh=d):(Oh!==u||Bh!==d)&&ho()},_e,"DOMContentLoaded",Ur,ie,"load",Ur,ie,"resize",ho],Jo(tn),te.forEach(function(u){return u.enable(0,1)}),l=0;l<re.length;l+=3)ta(Qe,re[l],re[l+1]),ta(Qe,re[l],re[l+2])}else if(_e){var c=function u(){r.enable(),_e.removeEventListener("DOMContentLoaded",u)};_e.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Pl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Zo)||(Zo=i)&&setInterval(Xh,i),"ignoreMobileResize"in n&&(Ic=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Jo(Qe)||Jo(tn,n.autoRefreshEvents||"none"),yp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=bn(n),o=re.indexOf(s),a=Wr(s);~o&&re.splice(o,a?6:2),i&&(a?Si.unshift(ie,i,ge,i,zn,i):Si.unshift(s,i))},r.clearMatchMedia=function(n){te.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Bn(n)?bn(n):n).getBoundingClientRect(),a=o[s?Hr:Vr]*i||0;return s?o.right-a>0&&o.left+a<ie.innerWidth:o.bottom-a>0&&o.top+a<ie.innerHeight},r.positionInViewport=function(n,i,s){Bn(n)&&(n=bn(n));var o=n.getBoundingClientRect(),a=o[s?Hr:Vr],l=i==null?a/2:i in ll?ll[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ie.innerWidth:(o.top+l)/ie.innerHeight},r.killAll=function(n){if(te.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Xr.killAll||[];Xr={},i.forEach(function(s){return s()})}},r}();ee.version="3.15.0";ee.saveStyles=function(r){return r?No(r).forEach(function(t){if(t&&t.style){var e=On.indexOf(t);e>=0&&On.splice(e,5),On.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),St.core.getCache(t),Uc())}}):On};ee.revert=function(r,t){return Ju(!r,t)};ee.create=function(r,t){return new ee(r,t)};ee.refresh=function(r){return r?ho(!0):(gs||ee.register())&&Ur(!0)};ee.update=function(r){return++re.cache&&ki(r===!0?2:0)};ee.clearScrollMemory=Ip;ee.maxScroll=function(r,t){return xi(r,t?Sn:$e)};ee.getScrollFunc=function(r,t){return pr(bn(r),t?Sn:$e)};ee.getById=function(r){return Fc[r]};ee.getAll=function(){return te.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ee.isScrolling=function(){return!!ii};ee.snapDirectional=Ku;ee.addEventListener=function(r,t){var e=Xr[r]||(Xr[r]=[]);~e.indexOf(t)||e.push(t)};ee.removeEventListener=function(r,t){var e=Xr[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};ee.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var d=[],h=[],f=St.delayedCall(i,function(){u(d,h),d=[],h=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),h.push(g),s<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&hn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return hn(s)&&(s=s(),tn(ee,"refresh",function(){return s=t.batchMax()})),No(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(ee.create(c))}),e};var Kh=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Ul=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(He.isTouch?" pinch-zoom":""):"none",t===zn&&r(ge,e)},sa={auto:1,scroll:1},a_=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||St.core.getCache(s),a=cn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ge&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(sa[(l=Qn(s)).overflowY]||sa[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Wr(s)&&(sa[(l=Qn(s)).overflowY]||sa[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Fp=function(t,e,n,i){return He.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&a_,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&tn(_e,He.eventTypes[0],Qh,!1,!0)},onDisable:function(){return Qe(_e,He.eventTypes[0],Qh,!0)}})},l_=/(input|label|select|textarea)/i,Jh,Qh=function(t){var e=l_.test(t.target.tagName);(e||Jh)&&(t._gsapAllow=!0,Jh=e)},c_=function(t){Ar(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=bn(t.target)||zn,u=St.core.globals().ScrollSmoother,d=u&&u.get(),h=Qi&&(t.content&&bn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=pr(c,$e),g=pr(c,Sn),_=1,m=(He.isTouch&&ie.visualViewport?ie.visualViewport.scale*ie.visualViewport.width:ie.outerWidth)/ie.innerWidth,p=0,y=hn(i)?function(){return i(a)}:function(){return i||2.8},S,v,A=Fp(c,t.type,!0,s),w=function(){return v=!1},E=mi,R=mi,M=function(){l=xi(c,$e),R=yo(Qi?1:0,l),n&&(E=yo(0,xi(c,Sn))),S=Gr},x=function(){h._gsap.y=co(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(v){requestAnimationFrame(w);var V=co(a.deltaY/2),et=R(f.v-V);if(h&&et!==f.v+f.offset){f.offset=et-f.v;var D=co((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",h._gsap.y=D+"px",f.cacheID=re.cache,ki()}return!0}f.offset&&x(),v=!0},L,U,k,q,X=function(){M(),L.isActive()&&L.vars.scrollY>l&&(f()>l?L.progress(1)&&f(l):L.resetTo("scrollY",l))};return h&&St.set(h,{y:"+=0"}),t.ignoreCheck=function(Y){return Qi&&Y.type==="touchmove"&&P()||_>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},t.onPress=function(){v=!1;var Y=_;_=co((ie.visualViewport&&ie.visualViewport.scale||1)/m),L.pause(),Y!==_&&Ul(c,_>1.01?!0:n?!1:"x"),U=g(),k=f(),M(),S=Gr},t.onRelease=t.onGestureStart=function(Y,V){if(f.offset&&x(),!V)q.restart(!0);else{re.cache++;var et=y(),D,ut;n&&(D=g(),ut=D+et*.05*-Y.velocityX/.227,et*=Kh(g,D,ut,xi(c,Sn)),L.vars.scrollX=E(ut)),D=f(),ut=D+et*.05*-Y.velocityY/.227,et*=Kh(f,D,ut,xi(c,$e)),L.vars.scrollY=R(ut),L.invalidate().duration(et).play(.01),(Qi&&L.vars.scrollY>=l||D>=l-1)&&St.to({},{onUpdate:X,duration:et})}o&&o(Y)},t.onWheel=function(){L._ts&&L.pause(),cn()-p>1e3&&(S=0,p=cn())},t.onChange=function(Y,V,et,D,ut){if(Gr!==S&&M(),V&&n&&g(E(D[2]===V?U+(Y.startX-Y.x):g()+V-D[1])),et){f.offset&&x();var It=ut[2]===et,Jt=It?k+Y.startY-Y.y:f()+et-ut[1],j=R(Jt);It&&Jt!==j&&(k+=j-Jt),f(j)}(et||V)&&ki()},t.onEnable=function(){Ul(c,n?!1:"x"),ee.addEventListener("refresh",X),tn(ie,"resize",X),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),A.enable()},t.onDisable=function(){Ul(c,!0),Qe(ie,"resize",X),ee.removeEventListener("refresh",X),A.kill()},t.lockAxis=t.lockAxis!==!1,a=new He(t),a.iOS=Qi,Qi&&!f()&&f(1),Qi&&St.ticker.add(mi),q=a._dc,L=St.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Np(f,f(),function(){return L.pause()})},onUpdate:ki,onComplete:q.vars.onComplete}),a};ee.sort=function(r){if(hn(r))return te.sort(r);var t=ie.pageYOffset||0;return ee.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ie.innerHeight}),te.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ee.observe=function(r){return new He(r)};ee.normalizeScroll=function(r){if(typeof r>"u")return _n;if(r===!0&&_n)return _n.enable();if(r===!1){_n&&_n.kill(),_n=r;return}var t=r instanceof He?r:c_(r);return _n&&_n.target===t.target&&_n.kill(),Wr(t.target)&&(_n=t),t};ee.core={_getVelocityProp:Lc,_inputObserver:Fp,_scrollers:re,_proxies:Si,bridge:{ss:function(){ii||Yr("scrollStart"),ii=cn()},ref:function(){return ln}}};bp()&&St.registerPlugin(ee);var td="1.3.27";function Op(r,t,e){return Math.max(r,Math.min(t,e))}function u_(r,t,e){return(1-e)*r+e*t}function h_(r,t,e,n){return u_(r,t,1-Math.exp(-e*n))}function d_(r,t){return(r%t+t)%t}var f_=class{constructor(){At(this,"isRunning",!1);At(this,"value",0);At(this,"from",0);At(this,"to",0);At(this,"currentTime",0);At(this,"lerp");At(this,"duration");At(this,"easing");At(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=Op(0,this.currentTime/this.duration,1);t=n>=1;const i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=h_(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function p_(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var m_=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){At(this,"width",0);At(this,"height",0);At(this,"scrollHeight",0);At(this,"scrollWidth",0);At(this,"debouncedResize");At(this,"wrapperResizeObserver");At(this,"contentResizeObserver");At(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});At(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});At(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=p_(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Bp=class{constructor(){At(this,"events",{})}emit(r,...t){var n;const e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}};const g_=100/6,Yi={passive:!1};function ed(r,t){return r===1?g_:r===2?t:1}var __=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){At(this,"touchStart",{x:0,y:0});At(this,"lastDelta",{x:0,y:0});At(this,"window",{width:0,height:0});At(this,"emitter",new Bp);At(this,"onTouchStart",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});At(this,"onTouchMove",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});At(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});At(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r;const i=ed(n,this.window.width),s=ed(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});At(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Yi),this.element.addEventListener("touchstart",this.onTouchStart,Yi),this.element.addEventListener("touchmove",this.onTouchMove,Yi),this.element.addEventListener("touchend",this.onTouchEnd,Yi)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Yi),this.element.removeEventListener("touchstart",this.onTouchStart,Yi),this.element.removeEventListener("touchmove",this.onTouchMove,Yi),this.element.removeEventListener("touchend",this.onTouchEnd,Yi)}};const nd=r=>Math.min(1,1.001-2**(-10*r));var v_=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:h=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:y=!0,autoRaf:S=!1,anchors:v=!1,autoToggle:A=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:R=E,stopInertiaOnNavigate:M=!1,respectReducedMotion:x=!0}={}){At(this,"_isScrolling",!1);At(this,"_isStopped",!1);At(this,"_isLocked",!1);At(this,"_preventNextNativeScrollEvent",!1);At(this,"_resetVelocityTimeout",null);At(this,"_rafId",null);At(this,"_isDraggingSelection",!1);At(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));At(this,"isTouching");At(this,"isIos");At(this,"time",0);At(this,"userData",{});At(this,"lastVelocity",0);At(this,"velocity",0);At(this,"direction",0);At(this,"options");At(this,"targetScroll");At(this,"animatedScroll");At(this,"animate",new f_);At(this,"emitter",new Bp);At(this,"dimensions");At(this,"virtualScroll");At(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});At(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});At(this,"onTransitionEnd",r=>{var t;(t=r.propertyName)!=null&&t.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});At(this,"onClick",r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){const n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});At(this,"onPointerDown",r=>{r.button===1&&this.reset()});At(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(g=>{var _,m,p,y,S;return g instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(g))||((_=g.hasAttribute)==null?void 0:_.call(g,"data-lenis-prevent"))||u==="vertical"&&((m=g.hasAttribute)==null?void 0:m.call(g,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=g.hasAttribute)==null?void 0:p.call(g,"data-lenis-prevent-horizontal"))||i&&((y=g.hasAttribute)==null?void 0:y.call(g,"data-lenis-prevent-touch"))||s&&((S=g.hasAttribute)==null?void 0:S.call(g,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const h=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...h?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});At(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});At(this,"raf",r=>{const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=td,window.lenis||(window.lenis={}),window.lenis.version=td,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=nd:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:d,touchMultiplier:f,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:y,autoRaf:S,anchors:v,autoToggle:A,allowNestedScroll:w,naiveDimensions:R,stopInertiaOnNavigate:M,respectReducedMotion:x},this.dimensions=new m_(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new __(e,{touchMultiplier:f,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;const e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;const n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let h=r,f=t;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let g=null;if(typeof h=="string"?(g=h.startsWith("#")?document.getElementById(h.slice(1)):document.querySelector(h),g||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof Element&&(g=h),g){if(this.options.wrapper!==window){const v=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?v.left:v.top}const _=g.getBoundingClientRect(),m=getComputedStyle(g),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),y=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);h=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(S)?0:S)}}if(typeof h=="number"){if(h+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const g=h-this.animatedScroll;g>this.limit/2?h-=this.limit:g<-this.limit/2&&(h+=this.limit)}}else h=Op(0,h,this.limit);if(h===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=h),typeof o=="number"&&typeof a!="function"?a=nd:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,h,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,u,d,h,f,g;if(n-(i.time??0)>2e3){i.time=Date.now();const w=window.getComputedStyle(r);if(i.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),u=["auto"].includes(w.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;d=r.scrollWidth,h=r.scrollHeight,f=r.clientWidth,g=r.clientHeight,a=d>f,l=h>g,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=h,i.clientWidth=f,i.clientHeight=g,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,h=i.scrollHeight,f=i.clientWidth,g=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let m,p,y,S,v,A;if(_==="horizontal")m=Math.round(r.scrollLeft),p=d-f,y=t,S=s,v=a,A=c;else if(_==="vertical")m=Math.round(r.scrollTop),p=h-g,y=e,S=o,v=l,A=u;else return!1;return!A&&(m>=p||m<=0)?!0:(y>0?m<p:m>0)&&S&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?d_(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qu="170",x_=0,id=1,y_=2,kp=1,S_=2,Li=3,mr=0,Ln=1,Ni=2,cr=0,Cs=1,rd=2,sd=3,od=4,M_=5,Pr=100,E_=101,b_=102,T_=103,w_=104,A_=200,R_=201,C_=202,P_=203,kc=204,zc=205,L_=206,D_=207,I_=208,U_=209,N_=210,F_=211,O_=212,B_=213,k_=214,Hc=0,Vc=1,Gc=2,Bs=3,Wc=4,Xc=5,Yc=6,qc=7,zp=0,z_=1,H_=2,ur=0,V_=1,G_=2,W_=3,X_=4,Y_=5,q_=6,$_=7,Hp=300,ks=301,zs=302,$c=303,jc=304,vl=306,Zc=1e3,Nr=1001,Kc=1002,di=1003,j_=1004,oa=1005,yi=1006,Nl=1007,Fr=1008,Gi=1009,Vp=1010,Gp=1011,Oo=1012,th=1013,qr=1014,Oi=1015,Ho=1016,eh=1017,nh=1018,Hs=1020,Wp=35902,Xp=1021,Yp=1022,hi=1023,qp=1024,$p=1025,Ps=1026,Vs=1027,jp=1028,ih=1029,Zp=1030,rh=1031,sh=1033,Ga=33776,Wa=33777,Xa=33778,Ya=33779,Jc=35840,Qc=35841,tu=35842,eu=35843,nu=36196,iu=37492,ru=37496,su=37808,ou=37809,au=37810,lu=37811,cu=37812,uu=37813,hu=37814,du=37815,fu=37816,pu=37817,mu=37818,gu=37819,_u=37820,vu=37821,qa=36492,xu=36494,yu=36495,Kp=36283,Su=36284,Mu=36285,Eu=36286,Z_=3200,K_=3201,Jp=0,J_=1,tr="",Kn="srgb",Ws="srgb-linear",xl="linear",ve="srgb",ns=7680,ad=519,Q_=512,t0=513,e0=514,Qp=515,n0=516,i0=517,r0=518,s0=519,ld=35044,cd="300 es",Bi=2e3,cl=2001;class Xs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$a=Math.PI/180,bu=180/Math.PI;function Vo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[r&255]+on[r>>8&255]+on[r>>16&255]+on[r>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function Tn(r,t,e){return Math.max(t,Math.min(e,r))}function o0(r,t){return(r%t+t)%t}function Fl(r,t,e){return(1-e)*r+e*t}function Js(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function En(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Kt{constructor(t=0,e=0){Kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Tn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,i,s,o,a,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],S=i[4],v=i[7],A=i[2],w=i[5],E=i[8];return s[0]=o*_+a*y+l*A,s[3]=o*m+a*S+l*w,s[6]=o*p+a*v+l*E,s[1]=c*_+u*y+d*A,s[4]=c*m+u*S+d*w,s[7]=c*p+u*v+d*E,s[2]=h*_+f*y+g*A,s[5]=h*m+f*S+g*w,s[8]=h*p+f*v+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,h=a*l-u*s,f=c*s-o*l,g=e*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=h*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ol.makeScale(t,e)),this}rotate(t){return this.premultiply(Ol.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ol.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ol=new jt;function tm(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Bo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function a0(){const r=Bo("canvas");return r.style.display="block",r}const ud={};function fo(r){r in ud||(ud[r]=!0,console.warn(r))}function l0(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function c0(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function u0(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ce={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ve&&(r.r=zi(r.r),r.g=zi(r.g),r.b=zi(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ve&&(r.r=Ls(r.r),r.g=Ls(r.g),r.b=Ls(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===tr?xl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function zi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ls(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const hd=[.64,.33,.3,.6,.15,.06],dd=[.2126,.7152,.0722],fd=[.3127,.329],pd=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),md=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ce.define({[Ws]:{primaries:hd,whitePoint:fd,transfer:xl,toXYZ:pd,fromXYZ:md,luminanceCoefficients:dd,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:hd,whitePoint:fd,transfer:ve,toXYZ:pd,fromXYZ:md,luminanceCoefficients:dd,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}});let is;class h0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{is===void 0&&(is=Bo("canvas")),is.width=t.width,is.height=t.height;const n=is.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=is}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Bo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=zi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zi(e[n]/255)*255):e[n]=zi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let d0=0;class em{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Vo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Bl(i[o].image)):s.push(Bl(i[o]))}else s=Bl(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Bl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?h0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let f0=0;class Mn extends Xs{constructor(t=Mn.DEFAULT_IMAGE,e=Mn.DEFAULT_MAPPING,n=Nr,i=Nr,s=yi,o=Fr,a=hi,l=Gi,c=Mn.DEFAULT_ANISOTROPY,u=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=Vo(),this.name="",this.source=new em(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zc:t.x=t.x-Math.floor(t.x);break;case Nr:t.x=t.x<0?0:1;break;case Kc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zc:t.y=t.y-Math.floor(t.y);break;case Nr:t.y=t.y<0?0:1;break;case Kc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Hp;Mn.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,i=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,v=(f+1)/2,A=(p+1)/2,w=(u+h)/4,E=(d+_)/4,R=(g+m)/4;return S>v&&S>A?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=w/n,s=E/n):v>A?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=R/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=E/s,i=R/s),this.set(n,i,s,e),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class p0 extends Xs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Mn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new em(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends p0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class nm extends Mn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=di,this.minFilter=di,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class m0 extends Mn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=di,this.minFilter=di,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Go{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=h,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==h||c!==f||u!==g){let m=1-a;const p=l*h+c*f+u*g+d*_,y=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const A=Math.sqrt(S),w=Math.atan2(A,p*y);m=Math.sin(m*w)/A,a=Math.sin(a*w)/A}const v=a*y;if(l=l*m+h*v,c=c*m+f*v,u=u*m+g*v,d=d*m+_*v,m===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+u*d+l*f-c*h,t[e+1]=l*g+u*h+c*d-a*f,t[e+2]=c*g+u*f+a*h-l*d,t[e+3]=u*g-a*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(s/2),h=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Tn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=i+l*d+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return kl.copy(this).projectOnVector(t),this.sub(kl)}reflect(t){return this.sub(kl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Tn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kl=new O,gd=new Go;class Wo{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,oi):oi.fromBufferAttribute(s,o),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),aa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),aa.copy(n.boundingBox)),aa.applyMatrix4(t.matrixWorld),this.union(aa)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),la.subVectors(this.max,Qs),rs.subVectors(t.a,Qs),ss.subVectors(t.b,Qs),os.subVectors(t.c,Qs),qi.subVectors(ss,rs),$i.subVectors(os,ss),xr.subVectors(rs,os);let e=[0,-qi.z,qi.y,0,-$i.z,$i.y,0,-xr.z,xr.y,qi.z,0,-qi.x,$i.z,0,-$i.x,xr.z,0,-xr.x,-qi.y,qi.x,0,-$i.y,$i.x,0,-xr.y,xr.x,0];return!zl(e,rs,ss,os,la)||(e=[1,0,0,0,1,0,0,0,1],!zl(e,rs,ss,os,la))?!1:(ca.crossVectors(qi,$i),e=[ca.x,ca.y,ca.z],zl(e,rs,ss,os,la))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const wi=[new O,new O,new O,new O,new O,new O,new O,new O],oi=new O,aa=new Wo,rs=new O,ss=new O,os=new O,qi=new O,$i=new O,xr=new O,Qs=new O,la=new O,ca=new O,yr=new O;function zl(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){yr.fromArray(r,s);const a=i.x*Math.abs(yr.x)+i.y*Math.abs(yr.y)+i.z*Math.abs(yr.z),l=t.dot(yr),c=e.dot(yr),u=n.dot(yr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const g0=new Wo,to=new O,Hl=new O;class Xo{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):g0.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;to.subVectors(t,this.center);const e=to.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(to,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(to.copy(t.center).add(Hl)),this.expandByPoint(to.copy(t.center).sub(Hl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new O,Vl=new O,ua=new O,ji=new O,Gl=new O,ha=new O,Wl=new O;class oh{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Vl.copy(t).add(e).multiplyScalar(.5),ua.copy(e).sub(t).normalize(),ji.copy(this.origin).sub(Vl);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ua),a=ji.dot(this.direction),l=-ji.dot(ua),c=ji.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*l-a,h=o*a-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Vl).addScaledVector(ua,h),f}intersectSphere(t,e){Ai.subVectors(t.center,this.origin);const n=Ai.dot(this.direction),i=Ai.dot(Ai)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,n,i,s){Gl.subVectors(e,t),ha.subVectors(n,t),Wl.crossVectors(Gl,ha);let o=this.direction.dot(Wl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,t);const l=a*this.direction.dot(ha.crossVectors(ji,ha));if(l<0)return null;const c=a*this.direction.dot(Gl.cross(ji));if(c<0||l+c>o)return null;const u=-a*ji.dot(Wl);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(t,e,n,i,s,o,a,l,c,u,d,h,f,g,_,m){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,d,h,f,g,_,m)}set(t,e,n,i,s,o,a,l,c,u,d,h,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/as.setFromMatrixColumn(t,0).length(),s=1/as.setFromMatrixColumn(t,1).length(),o=1/as.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=o*u,f=o*d,g=a*u,_=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,f=l*d,g=c*u,_=c*d;e[0]=h+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,f=l*d,g=c*u,_=c*d;e[0]=h-_*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,f=o*d,g=a*u,_=a*d;e[0]=l*u,e[4]=g*c-f,e[8]=h*c+_,e[1]=l*d,e[5]=_*c+h,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-h*d,e[8]=g*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*d+g,e[10]=h-_*d}else if(t.order==="XZY"){const h=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+_,e[5]=o*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_0,t,v0)}lookAt(t,e,n){const i=this.elements;return Nn.subVectors(t,e),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Zi.crossVectors(n,Nn),Zi.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Zi.crossVectors(n,Nn)),Zi.normalize(),da.crossVectors(Nn,Zi),i[0]=Zi.x,i[4]=da.x,i[8]=Nn.x,i[1]=Zi.y,i[5]=da.y,i[9]=Nn.y,i[2]=Zi.z,i[6]=da.z,i[10]=Nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],S=n[7],v=n[11],A=n[15],w=i[0],E=i[4],R=i[8],M=i[12],x=i[1],P=i[5],L=i[9],U=i[13],k=i[2],q=i[6],X=i[10],Y=i[14],V=i[3],et=i[7],D=i[11],ut=i[15];return s[0]=o*w+a*x+l*k+c*V,s[4]=o*E+a*P+l*q+c*et,s[8]=o*R+a*L+l*X+c*D,s[12]=o*M+a*U+l*Y+c*ut,s[1]=u*w+d*x+h*k+f*V,s[5]=u*E+d*P+h*q+f*et,s[9]=u*R+d*L+h*X+f*D,s[13]=u*M+d*U+h*Y+f*ut,s[2]=g*w+_*x+m*k+p*V,s[6]=g*E+_*P+m*q+p*et,s[10]=g*R+_*L+m*X+p*D,s[14]=g*M+_*U+m*Y+p*ut,s[3]=y*w+S*x+v*k+A*V,s[7]=y*E+S*P+v*q+A*et,s[11]=y*R+S*L+v*X+A*D,s[15]=y*M+S*U+v*Y+A*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*d-i*c*d-s*a*h+n*c*h+i*a*f-n*l*f)+_*(+e*l*f-e*c*h+s*o*h-i*o*f+i*c*u-s*l*u)+m*(+e*c*d-e*a*f-s*o*d+n*o*f+s*a*u-n*c*u)+p*(-i*a*u-e*l*d+e*a*h+i*o*d-n*o*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=d*m*c-_*h*c+_*l*f-a*m*f-d*l*p+a*h*p,S=g*h*c-u*m*c-g*l*f+o*m*f+u*l*p-o*h*p,v=u*_*c-g*d*c+g*a*f-o*_*f-u*a*p+o*d*p,A=g*d*l-u*_*l-g*a*h+o*_*h+u*a*m-o*d*m,w=e*y+n*S+i*v+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return t[0]=y*E,t[1]=(_*h*s-d*m*s-_*i*f+n*m*f+d*i*p-n*h*p)*E,t[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*E,t[3]=(d*l*s-a*h*s-d*i*c+n*h*c+a*i*f-n*l*f)*E,t[4]=S*E,t[5]=(u*m*s-g*h*s+g*i*f-e*m*f-u*i*p+e*h*p)*E,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*p-e*l*p)*E,t[7]=(o*h*s-u*l*s+u*i*c-e*h*c-o*i*f+e*l*f)*E,t[8]=v*E,t[9]=(g*d*s-u*_*s-g*n*f+e*_*f+u*n*p-e*d*p)*E,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*p+e*a*p)*E,t[11]=(u*a*s-o*d*s-u*n*c+e*d*c+o*n*f-e*a*f)*E,t[12]=A*E,t[13]=(u*_*i-g*d*i+g*n*h-e*_*h-u*n*m+e*d*m)*E,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*E,t[15]=(o*d*i-u*a*i+u*n*l-e*d*l-o*n*h+e*a*h)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,d=a+a,h=s*c,f=s*u,g=s*d,_=o*u,m=o*d,p=a*d,y=l*c,S=l*u,v=l*d,A=n.x,w=n.y,E=n.z;return i[0]=(1-(_+p))*A,i[1]=(f+v)*A,i[2]=(g-S)*A,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(h+p))*w,i[6]=(m+y)*w,i[7]=0,i[8]=(g+S)*E,i[9]=(m-y)*E,i[10]=(1-(h+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=as.set(i[0],i[1],i[2]).length();const o=as.set(i[4],i[5],i[6]).length(),a=as.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ai.copy(this);const c=1/s,u=1/o,d=1/a;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=u,ai.elements[5]*=u,ai.elements[6]*=u,ai.elements[8]*=d,ai.elements[9]*=d,ai.elements[10]*=d,e.setFromRotationMatrix(ai),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Bi){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),d=(e+t)/(e-t),h=(n+i)/(n-i);let f,g;if(a===Bi)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===cl)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Bi){const l=this.elements,c=1/(e-t),u=1/(n-i),d=1/(o-s),h=(e+t)*c,f=(n+i)*u;let g,_;if(a===Bi)g=(o+s)*d,_=-2*d;else if(a===cl)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const as=new O,ai=new Re,_0=new O(0,0,0),v0=new O(1,1,1),Zi=new O,da=new O,Nn=new O,_d=new Re,vd=new Go;class Ei{constructor(t=0,e=0,n=0,i=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _d.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_d,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vd.setFromEuler(this),this.setFromQuaternion(vd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class im{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let x0=0;const xd=new O,ls=new Go,Ri=new Re,fa=new O,eo=new O,y0=new O,S0=new Go,yd=new O(1,0,0),Sd=new O(0,1,0),Md=new O(0,0,1),Ed={type:"added"},M0={type:"removed"},cs={type:"childadded",child:null},Xl={type:"childremoved",child:null};class en extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const t=new O,e=new Ei,n=new Go,i=new O(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new jt}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new im,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(yd,t)}rotateY(t){return this.rotateOnAxis(Sd,t)}rotateZ(t){return this.rotateOnAxis(Md,t)}translateOnAxis(t,e){return xd.copy(t).applyQuaternion(this.quaternion),this.position.add(xd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yd,t)}translateY(t){return this.translateOnAxis(Sd,t)}translateZ(t){return this.translateOnAxis(Md,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fa.copy(t):fa.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(eo,fa,this.up):Ri.lookAt(fa,eo,this.up),this.quaternion.setFromRotationMatrix(Ri),i&&(Ri.extractRotation(i.matrixWorld),ls.setFromRotationMatrix(Ri),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ed),cs.child=t,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(M0),Xl.child=t,this.dispatchEvent(Xl),Xl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ed),cs.child=t,this.dispatchEvent(cs),cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,t,y0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,S0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}en.DEFAULT_UP=new O(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new O,Ci=new O,Yl=new O,Pi=new O,us=new O,hs=new O,bd=new O,ql=new O,$l=new O,jl=new O,Zl=new xe,Kl=new xe,Jl=new xe;class ti{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),li.subVectors(t,e),i.cross(li);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){li.subVectors(i,e),Ci.subVectors(n,e),Yl.subVectors(t,e);const o=li.dot(li),a=li.dot(Ci),l=li.dot(Yl),c=Ci.dot(Ci),u=Ci.dot(Yl),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Zl.setScalar(0),Kl.setScalar(0),Jl.setScalar(0),Zl.fromBufferAttribute(t,e),Kl.fromBufferAttribute(t,n),Jl.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Zl,s.x),o.addScaledVector(Kl,s.y),o.addScaledVector(Jl,s.z),o}static isFrontFacing(t,e,n,i){return li.subVectors(n,e),Ci.subVectors(t,e),li.cross(Ci).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),li.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ti.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return ti.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;us.subVectors(i,n),hs.subVectors(s,n),ql.subVectors(t,n);const l=us.dot(ql),c=hs.dot(ql);if(l<=0&&c<=0)return e.copy(n);$l.subVectors(t,i);const u=us.dot($l),d=hs.dot($l);if(u>=0&&d<=u)return e.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(us,o);jl.subVectors(t,s);const f=us.dot(jl),g=hs.dot(jl);if(g>=0&&f<=g)return e.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(hs,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return bd.subVectors(s,i),a=(d-u)/(d-u+(f-g)),e.copy(i).addScaledVector(bd,a);const p=1/(m+_+h);return o=_*p,a=h*p,e.copy(n).addScaledVector(us,o).addScaledVector(hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},pa={h:0,s:0,l:0};function Ql(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ce.workingColorSpace){if(t=o0(t,1),e=Tn(e,0,1),n=Tn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ql(o,s,t+1/3),this.g=Ql(o,s,t),this.b=Ql(o,s,t-1/3)}return ce.toWorkingColorSpace(this,i),this}setStyle(t,e=Kn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Kn){const n=rm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}copyLinearToSRGB(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Kn){return ce.fromWorkingColorSpace(an.copy(this),t),Math.round(Tn(an.r*255,0,255))*65536+Math.round(Tn(an.g*255,0,255))*256+Math.round(Tn(an.b*255,0,255))}getHexString(t=Kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(an.copy(this),e);const n=an.r,i=an.g,s=an.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=Kn){ce.fromWorkingColorSpace(an.copy(this),t);const e=an.r,n=an.g,i=an.b;return t!==Kn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ki),this.setHSL(Ki.h+t,Ki.s+e,Ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ki),t.getHSL(pa);const n=Fl(Ki.h,pa.h,e),i=Fl(Ki.s,pa.s,e),s=Fl(Ki.l,pa.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new Yt;Yt.NAMES=rm;let E0=0;class Zr extends Xs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Vo(),this.name="",this.blending=Cs,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kc,this.blendDst=zc,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==mr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==kc&&(n.blendSrc=this.blendSrc),this.blendDst!==zc&&(n.blendDst=this.blendDst),this.blendEquation!==Pr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ad&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sm extends Zr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=zp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ve=new O,ma=new Kt;class ri{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ld,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ma.fromBufferAttribute(this,e),ma.applyMatrix3(t),this.setXY(e,ma.x,ma.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Js(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Js(e,this.array)),e}setX(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Js(e,this.array)),e}setY(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Js(e,this.array)),e}setZ(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Js(e,this.array)),e}setW(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array),i=En(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array),i=En(i,this.array),s=En(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ld&&(t.usage=this.usage),t}}class om extends ri{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class am extends ri{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ce extends ri{constructor(t,e,n){super(new Float32Array(t),e,n)}}let b0=0;const jn=new Re,tc=new en,ds=new O,Fn=new Wo,no=new Wo,Je=new O;class Xe extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tm(t)?am:om)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return jn.makeRotationFromQuaternion(t),this.applyMatrix4(jn),this}rotateX(t){return jn.makeRotationX(t),this.applyMatrix4(jn),this}rotateY(t){return jn.makeRotationY(t),this.applyMatrix4(jn),this}rotateZ(t){return jn.makeRotationZ(t),this.applyMatrix4(jn),this}translate(t,e,n){return jn.makeTranslation(t,e,n),this.applyMatrix4(jn),this}scale(t,e,n){return jn.makeScale(t,e,n),this.applyMatrix4(jn),this}lookAt(t){return tc.lookAt(t),tc.updateMatrix(),this.applyMatrix4(tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ce(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];no.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(Fn.min,no.min),Fn.expandByPoint(Je),Je.addVectors(Fn.max,no.max),Fn.expandByPoint(Je)):(Fn.expandByPoint(no.min),Fn.expandByPoint(no.max))}Fn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Je.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Je));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Je.fromBufferAttribute(a,c),l&&(ds.fromBufferAttribute(t,c),Je.add(ds)),i=Math.max(i,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new O,l[R]=new O;const c=new O,u=new O,d=new O,h=new Kt,f=new Kt,g=new Kt,_=new O,m=new O;function p(R,M,x){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,x),h.fromBufferAttribute(s,R),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,x),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),a[R].add(_),a[M].add(_),a[x].add(_),l[R].add(m),l[M].add(m),l[x].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,M=y.length;R<M;++R){const x=y[R],P=x.start,L=x.count;for(let U=P,k=P+L;U<k;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const S=new O,v=new O,A=new O,w=new O;function E(R){A.fromBufferAttribute(i,R),w.copy(A);const M=a[R];S.copy(M),S.sub(A.multiplyScalar(A.dot(M))).normalize(),v.crossVectors(w,M);const P=v.dot(l[R])<0?-1:1;o.setXYZW(R,S.x,S.y,S.z,P)}for(let R=0,M=y.length;R<M;++R){const x=y[R],P=x.start,L=x.count;for(let U=P,k=P+L;U<k;U+=3)E(t.getX(U+0)),E(t.getX(U+1)),E(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ri(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,d=new O;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new ri(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Td=new Re,Sr=new oh,ga=new Xo,wd=new O,_a=new O,va=new O,xa=new O,ec=new O,ya=new O,Ad=new O,Sa=new O;class se extends en{constructor(t=new Xe,e=new sm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){ya.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(ec.fromBufferAttribute(d,t),o?ya.addScaledVector(ec,u):ya.addScaledVector(ec.sub(e),u))}e.add(ya)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),Sr.copy(t.ray).recast(t.near),!(ga.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(ga,wd)===null||Sr.origin.distanceToSquared(wd)>(t.far-t.near)**2))&&(Td.copy(s).invert(),Sr.copy(t.ray).applyMatrix4(Td),!(n.boundingBox!==null&&Sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Sr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,A=S;v<A;v+=3){const w=a.getX(v),E=a.getX(v+1),R=a.getX(v+2);i=Ma(this,p,t,n,c,u,d,w,E,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);i=Ma(this,o,t,n,c,u,d,y,S,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,A=S;v<A;v+=3){const w=v,E=v+1,R=v+2;i=Ma(this,p,t,n,c,u,d,w,E,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,S=m+1,v=m+2;i=Ma(this,o,t,n,c,u,d,y,S,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function T0(r,t,e,n,i,s,o,a){let l;if(t.side===Ln?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===mr,a),l===null)return null;Sa.copy(a),Sa.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Sa);return c<e.near||c>e.far?null:{distance:c,point:Sa.clone(),object:r}}function Ma(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,_a),r.getVertexPosition(l,va),r.getVertexPosition(c,xa);const u=T0(r,t,e,n,_a,va,xa,Ad);if(u){const d=new O;ti.getBarycoord(Ad,_a,va,xa,d),i&&(u.uv=ti.getInterpolatedAttribute(i,a,l,c,d,new Kt)),s&&(u.uv1=ti.getInterpolatedAttribute(s,a,l,c,d,new Kt)),o&&(u.normal=ti.getInterpolatedAttribute(o,a,l,c,d,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};ti.getNormal(_a,va,xa,h.normal),u.face=h,u.barycoord=d}return u}class je extends Xe{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(d,2));function g(_,m,p,y,S,v,A,w,E,R,M){const x=v/E,P=A/R,L=v/2,U=A/2,k=w/2,q=E+1,X=R+1;let Y=0,V=0;const et=new O;for(let D=0;D<X;D++){const ut=D*P-U;for(let It=0;It<q;It++){const Jt=It*x-L;et[_]=Jt*y,et[m]=ut*S,et[p]=k,c.push(et.x,et.y,et.z),et[_]=0,et[m]=0,et[p]=w>0?1:-1,u.push(et.x,et.y,et.z),d.push(It/E),d.push(1-D/R),Y+=1}}for(let D=0;D<R;D++)for(let ut=0;ut<E;ut++){const It=h+ut+q*D,Jt=h+ut+q*(D+1),j=h+(ut+1)+q*(D+1),tt=h+(ut+1)+q*D;l.push(It,Jt,tt),l.push(Jt,j,tt),V+=6}a.addGroup(f,V,M),f+=V,h+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function gn(r){const t={};for(let e=0;e<r.length;e++){const n=Gs(r[e]);for(const i in n)t[i]=n[i]}return t}function w0(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function lm(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const A0={clone:Gs,merge:gn};var R0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Zr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R0,this.fragmentShader=C0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gs(t.uniforms),this.uniformsGroups=w0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class cm extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Bi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ji=new O,Rd=new Kt,Cd=new Kt;class yn extends cm{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=bu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($a*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bu*2*Math.atan(Math.tan($a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z)}getViewSize(t,e){return this.getViewBounds(t,Rd,Cd),e.subVectors(Cd,Rd)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($a*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fs=-90,ps=1;class P0 extends en{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new yn(fs,ps,t,e);i.layers=this.layers,this.add(i);const s=new yn(fs,ps,t,e);s.layers=this.layers,this.add(s);const o=new yn(fs,ps,t,e);o.layers=this.layers,this.add(o);const a=new yn(fs,ps,t,e);a.layers=this.layers,this.add(a);const l=new yn(fs,ps,t,e);l.layers=this.layers,this.add(l);const c=new yn(fs,ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class um extends Mn{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ks,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class L0 extends $r{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new um(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new je(5,5,5),s=new bi({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ln,blending:cr});s.uniforms.tEquirect.value=e;const o=new se(i,s),a=e.minFilter;return e.minFilter===Fr&&(e.minFilter=yi),new P0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const nc=new O,D0=new O,I0=new jt;class Rr{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=nc.subVectors(n,e).cross(D0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(nc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||I0.getNormalMatrix(t),i=this.coplanarPoint(nc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new Xo,Ea=new O;class ah{constructor(t=new Rr,e=new Rr,n=new Rr,i=new Rr,s=new Rr,o=new Rr){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bi){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],d=i[6],h=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],y=i[13],S=i[14],v=i[15];if(n[0].setComponents(l-s,h-c,m-f,v-p).normalize(),n[1].setComponents(l+s,h+c,m+f,v+p).normalize(),n[2].setComponents(l+o,h+u,m+g,v+y).normalize(),n[3].setComponents(l-o,h-u,m-g,v-y).normalize(),n[4].setComponents(l-a,h-d,m-_,v-S).normalize(),e===Bi)n[5].setComponents(l+a,h+d,m+_,v+S).normalize();else if(e===cl)n[5].setComponents(a,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(t){return Mr.center.set(0,0,0),Mr.radius=.7071067811865476,Mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ea.x=i.normal.x>0?t.max.x:t.min.x,Ea.y=i.normal.y>0?t.max.y:t.min.y,Ea.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hm(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function U0(r){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class Yo extends Xe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=t/a,h=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*h-o;for(let S=0;S<c;S++){const v=S*d-s;g.push(v,-y,0),_.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const S=y+c*p,v=y+c*(p+1),A=y+1+c*(p+1),w=y+1+c*p;f.push(S,v,w),f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.width,t.height,t.widthSegments,t.heightSegments)}}var N0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F0=`#ifdef USE_ALPHAHASH
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
#endif`,O0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H0=`#ifdef USE_AOMAP
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
#endif`,V0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,G0=`#ifdef USE_BATCHING
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
#endif`,W0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,X0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,q0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$0=`#ifdef USE_IRIDESCENCE
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
#endif`,j0=`#ifdef USE_BUMPMAP
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
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ev=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rv=`#define PI 3.141592653589793
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
} // validated`,sv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ov=`vec3 transformedNormal = objectNormal;
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
#endif`,av=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hv="gl_FragColor = linearToOutputTexel( gl_FragColor );",dv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fv=`#ifdef USE_ENVMAP
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
#endif`,pv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mv=`#ifdef USE_ENVMAP
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
#endif`,gv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_v=`#ifdef USE_ENVMAP
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
#endif`,vv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mv=`#ifdef USE_GRADIENTMAP
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
}`,Ev=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wv=`uniform bool receiveShadow;
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
#endif`,Av=`#ifdef USE_ENVMAP
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
#endif`,Rv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dv=`PhysicalMaterial material;
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
#endif`,Iv=`struct PhysicalMaterial {
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
}`,Uv=`
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
#endif`,Nv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ov=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wv=`#if defined( USE_POINTS_UV )
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
#endif`,Xv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$v=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zv=`#ifdef USE_MORPHTARGETS
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
#endif`,Kv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ix=`#ifdef USE_NORMALMAP
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
#endif`,rx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ox=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ax=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ux=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_x=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xx=`float getShadowMask() {
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
}`,yx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sx=`#ifdef USE_SKINNING
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
#endif`,Mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ex=`#ifdef USE_SKINNING
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
#endif`,bx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ax=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rx=`#ifdef USE_TRANSMISSION
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
#endif`,Cx=`#ifdef USE_TRANSMISSION
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
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ux=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nx=`uniform sampler2D t2D;
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
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ox=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`#include <common>
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
}`,Hx=`#if DEPTH_PACKING == 3200
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
}`,Vx=`#define DISTANCE
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
}`,Gx=`#define DISTANCE
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
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`uniform float scale;
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
}`,qx=`uniform vec3 diffuse;
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
}`,$x=`#include <common>
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
}`,jx=`uniform vec3 diffuse;
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
}`,Zx=`#define LAMBERT
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
}`,Kx=`#define LAMBERT
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
}`,Jx=`#define MATCAP
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
}`,Qx=`#define MATCAP
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
}`,ty=`#define NORMAL
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
}`,ey=`#define NORMAL
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
}`,ny=`#define PHONG
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
}`,iy=`#define PHONG
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
}`,ry=`#define STANDARD
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
}`,sy=`#define STANDARD
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
}`,oy=`#define TOON
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
}`,ay=`#define TOON
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
}`,ly=`uniform float size;
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
}`,cy=`uniform vec3 diffuse;
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
}`,uy=`#include <common>
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
}`,hy=`uniform vec3 color;
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
}`,dy=`uniform float rotation;
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
}`,fy=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:N0,alphahash_pars_fragment:F0,alphamap_fragment:O0,alphamap_pars_fragment:B0,alphatest_fragment:k0,alphatest_pars_fragment:z0,aomap_fragment:H0,aomap_pars_fragment:V0,batching_pars_vertex:G0,batching_vertex:W0,begin_vertex:X0,beginnormal_vertex:Y0,bsdfs:q0,iridescence_fragment:$0,bumpmap_pars_fragment:j0,clipping_planes_fragment:Z0,clipping_planes_pars_fragment:K0,clipping_planes_pars_vertex:J0,clipping_planes_vertex:Q0,color_fragment:tv,color_pars_fragment:ev,color_pars_vertex:nv,color_vertex:iv,common:rv,cube_uv_reflection_fragment:sv,defaultnormal_vertex:ov,displacementmap_pars_vertex:av,displacementmap_vertex:lv,emissivemap_fragment:cv,emissivemap_pars_fragment:uv,colorspace_fragment:hv,colorspace_pars_fragment:dv,envmap_fragment:fv,envmap_common_pars_fragment:pv,envmap_pars_fragment:mv,envmap_pars_vertex:gv,envmap_physical_pars_fragment:Av,envmap_vertex:_v,fog_vertex:vv,fog_pars_vertex:xv,fog_fragment:yv,fog_pars_fragment:Sv,gradientmap_pars_fragment:Mv,lightmap_pars_fragment:Ev,lights_lambert_fragment:bv,lights_lambert_pars_fragment:Tv,lights_pars_begin:wv,lights_toon_fragment:Rv,lights_toon_pars_fragment:Cv,lights_phong_fragment:Pv,lights_phong_pars_fragment:Lv,lights_physical_fragment:Dv,lights_physical_pars_fragment:Iv,lights_fragment_begin:Uv,lights_fragment_maps:Nv,lights_fragment_end:Fv,logdepthbuf_fragment:Ov,logdepthbuf_pars_fragment:Bv,logdepthbuf_pars_vertex:kv,logdepthbuf_vertex:zv,map_fragment:Hv,map_pars_fragment:Vv,map_particle_fragment:Gv,map_particle_pars_fragment:Wv,metalnessmap_fragment:Xv,metalnessmap_pars_fragment:Yv,morphinstance_vertex:qv,morphcolor_vertex:$v,morphnormal_vertex:jv,morphtarget_pars_vertex:Zv,morphtarget_vertex:Kv,normal_fragment_begin:Jv,normal_fragment_maps:Qv,normal_pars_fragment:tx,normal_pars_vertex:ex,normal_vertex:nx,normalmap_pars_fragment:ix,clearcoat_normal_fragment_begin:rx,clearcoat_normal_fragment_maps:sx,clearcoat_pars_fragment:ox,iridescence_pars_fragment:ax,opaque_fragment:lx,packing:cx,premultiplied_alpha_fragment:ux,project_vertex:hx,dithering_fragment:dx,dithering_pars_fragment:fx,roughnessmap_fragment:px,roughnessmap_pars_fragment:mx,shadowmap_pars_fragment:gx,shadowmap_pars_vertex:_x,shadowmap_vertex:vx,shadowmask_pars_fragment:xx,skinbase_vertex:yx,skinning_pars_vertex:Sx,skinning_vertex:Mx,skinnormal_vertex:Ex,specularmap_fragment:bx,specularmap_pars_fragment:Tx,tonemapping_fragment:wx,tonemapping_pars_fragment:Ax,transmission_fragment:Rx,transmission_pars_fragment:Cx,uv_pars_fragment:Px,uv_pars_vertex:Lx,uv_vertex:Dx,worldpos_vertex:Ix,background_vert:Ux,background_frag:Nx,backgroundCube_vert:Fx,backgroundCube_frag:Ox,cube_vert:Bx,cube_frag:kx,depth_vert:zx,depth_frag:Hx,distanceRGBA_vert:Vx,distanceRGBA_frag:Gx,equirect_vert:Wx,equirect_frag:Xx,linedashed_vert:Yx,linedashed_frag:qx,meshbasic_vert:$x,meshbasic_frag:jx,meshlambert_vert:Zx,meshlambert_frag:Kx,meshmatcap_vert:Jx,meshmatcap_frag:Qx,meshnormal_vert:ty,meshnormal_frag:ey,meshphong_vert:ny,meshphong_frag:iy,meshphysical_vert:ry,meshphysical_frag:sy,meshtoon_vert:oy,meshtoon_frag:ay,points_vert:ly,points_frag:cy,shadow_vert:uy,shadow_frag:hy,sprite_vert:dy,sprite_frag:fy},gt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},gi={basic:{uniforms:gn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:gn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:gn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:gn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:gn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:gn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:gn([gt.points,gt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:gn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:gn([gt.common,gt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:gn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:gn([gt.sprite,gt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:gn([gt.common,gt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:gn([gt.lights,gt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};gi.physical={uniforms:gn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const ba={r:0,b:0,g:0},Er=new Ei,py=new Re;function my(r,t,e,n,i,s,o){const a=new Yt(0);let l=s===!0?0:1,c,u,d=null,h=0,f=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?e:t).get(S)),S}function _(y){let S=!1;const v=g(y);v===null?p(a,l):v&&v.isColor&&(p(v,1),S=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,S){const v=g(S);v&&(v.isCubeTexture||v.mapping===vl)?(u===void 0&&(u=new se(new je(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Gs(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Er.copy(S.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(py.makeRotationFromEuler(Er)),u.material.toneMapped=ce.getTransfer(v.colorSpace)!==ve,(d!==v||h!==v.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,f=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new se(new Yo(2,2),new bi({name:"BackgroundMaterial",uniforms:Gs(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ce.getTransfer(v.colorSpace)!==ve,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,S){y.getRGB(ba,lm(r)),n.buffers.color.setClear(ba.r,ba.g,ba.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m}}function gy(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(x,P,L,U,k){let q=!1;const X=d(U,L,P);s!==X&&(s=X,c(s.object)),q=f(x,U,L,k),q&&g(x,U,L,k),k!==null&&t.update(k,r.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(x,P,L,U),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function d(x,P,L){const U=L.wireframe===!0;let k=n[x.id];k===void 0&&(k={},n[x.id]=k);let q=k[P.id];q===void 0&&(q={},k[P.id]=q);let X=q[U];return X===void 0&&(X=h(l()),q[U]=X),X}function h(x){const P=[],L=[],U=[];for(let k=0;k<e;k++)P[k]=0,L[k]=0,U[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:U,object:x,attributes:{},index:null}}function f(x,P,L,U){const k=s.attributes,q=P.attributes;let X=0;const Y=L.getAttributes();for(const V in Y)if(Y[V].location>=0){const D=k[V];let ut=q[V];if(ut===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(ut=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(ut=x.instanceColor)),D===void 0||D.attribute!==ut||ut&&D.data!==ut.data)return!0;X++}return s.attributesNum!==X||s.index!==U}function g(x,P,L,U){const k={},q=P.attributes;let X=0;const Y=L.getAttributes();for(const V in Y)if(Y[V].location>=0){let D=q[V];D===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(D=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(D=x.instanceColor));const ut={};ut.attribute=D,D&&D.data&&(ut.data=D.data),k[V]=ut,X++}s.attributes=k,s.attributesNum=X,s.index=U}function _(){const x=s.newAttributes;for(let P=0,L=x.length;P<L;P++)x[P]=0}function m(x){p(x,0)}function p(x,P){const L=s.newAttributes,U=s.enabledAttributes,k=s.attributeDivisors;L[x]=1,U[x]===0&&(r.enableVertexAttribArray(x),U[x]=1),k[x]!==P&&(r.vertexAttribDivisor(x,P),k[x]=P)}function y(){const x=s.newAttributes,P=s.enabledAttributes;for(let L=0,U=P.length;L<U;L++)P[L]!==x[L]&&(r.disableVertexAttribArray(L),P[L]=0)}function S(x,P,L,U,k,q,X){X===!0?r.vertexAttribIPointer(x,P,L,k,q):r.vertexAttribPointer(x,P,L,U,k,q)}function v(x,P,L,U){_();const k=U.attributes,q=L.getAttributes(),X=P.defaultAttributeValues;for(const Y in q){const V=q[Y];if(V.location>=0){let et=k[Y];if(et===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(et=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(et=x.instanceColor)),et!==void 0){const D=et.normalized,ut=et.itemSize,It=t.get(et);if(It===void 0)continue;const Jt=It.buffer,j=It.type,tt=It.bytesPerElement,_t=j===r.INT||j===r.UNSIGNED_INT||et.gpuType===th;if(et.isInterleavedBufferAttribute){const nt=et.data,Et=nt.stride,Rt=et.offset;if(nt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<V.locationSize;Ht++)p(V.location+Ht,nt.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Ht=0;Ht<V.locationSize;Ht++)m(V.location+Ht);r.bindBuffer(r.ARRAY_BUFFER,Jt);for(let Ht=0;Ht<V.locationSize;Ht++)S(V.location+Ht,ut/V.locationSize,j,D,Et*tt,(Rt+ut/V.locationSize*Ht)*tt,_t)}else{if(et.isInstancedBufferAttribute){for(let nt=0;nt<V.locationSize;nt++)p(V.location+nt,et.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let nt=0;nt<V.locationSize;nt++)m(V.location+nt);r.bindBuffer(r.ARRAY_BUFFER,Jt);for(let nt=0;nt<V.locationSize;nt++)S(V.location+nt,ut/V.locationSize,j,D,ut*tt,ut/V.locationSize*nt*tt,_t)}}else if(X!==void 0){const D=X[Y];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(V.location,D);break;case 3:r.vertexAttrib3fv(V.location,D);break;case 4:r.vertexAttrib4fv(V.location,D);break;default:r.vertexAttrib1fv(V.location,D)}}}}y()}function A(){R();for(const x in n){const P=n[x];for(const L in P){const U=P[L];for(const k in U)u(U[k].object),delete U[k];delete P[L]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const L in P){const U=P[L];for(const k in U)u(U[k].object),delete U[k];delete P[L]}delete n[x.id]}function E(x){for(const P in n){const L=n[P];if(L[x.id]===void 0)continue;const U=L[x.id];for(const k in U)u(U[k].object),delete U[k];delete L[x.id]}}function R(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function _y(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,d){d!==0&&(r.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];e.update(f,n,1)}function l(c,u,d,h){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*h[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vy(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==hi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const R=E===Ho&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Gi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Oi&&!R)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:A,maxSamples:w}}function xy(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Rr,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:n,S=y*4;let v=p.clippingState||null;l.value=v,v=u(g,h,S,f);for(let A=0;A!==S;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=f;S!==_;++S,v+=4)o.copy(d[S]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function yy(r){let t=new WeakMap;function e(o,a){return a===$c?o.mapping=ks:a===jc&&(o.mapping=zs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$c||a===jc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new L0(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class dm extends cm{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ss=4,Pd=[.125,.215,.35,.446,.526,.582],Lr=20,ic=new dm,Ld=new Yt;let rc=null,sc=0,oc=0,ac=!1;const Cr=(1+Math.sqrt(5))/2,ms=1/Cr,Dd=[new O(-Cr,ms,0),new O(Cr,ms,0),new O(-ms,0,Cr),new O(ms,0,Cr),new O(0,Cr,-ms),new O(0,Cr,ms),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Id{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){rc=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(rc,sc,oc),this._renderer.xr.enabled=ac,t.scissorTest=!1,Ta(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ks||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rc=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Ho,format:hi,colorSpace:Ws,depthBuffer:!1},i=Ud(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ud(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sy(s)),this._blurMaterial=My(s,t,e)}return i}_compileMaterial(t){const e=new se(this._lodPlanes[0],t);this._renderer.compile(e,ic)}_sceneToCubeUV(t,e,n,i){const a=new yn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Ld),u.toneMapping=ur,u.autoClear=!1;const f=new sm({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),g=new se(new je,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Ld),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;Ta(i,y*S,p>2?S:0,S,S),u.setRenderTarget(i),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ks||t.mapping===zs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nd());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new se(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ta(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ic)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Dd[(i-s-1)%Dd.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new se(this._lodPlanes[i],c),h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Lr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Lr;m>Lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Lr}`);const p=[];let y=0;for(let E=0;E<Lr;++E){const R=E/_,M=Math.exp(-R*R/2);p.push(M),E===0?y+=M:E<m&&(y+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-n;const v=this._sizeLods[i],A=3*v*(i>S-Ss?i-S+Ss:0),w=4*(this._cubeSize-v);Ta(e,A,w,3*v,2*v),l.setRenderTarget(e),l.render(d,ic)}}function Sy(r){const t=[],e=[],n=[];let i=r;const s=r-Ss+1+Pd.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ss?l=Pd[o-r+Ss-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),S=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let w=0;w<f;w++){const E=w%3*2/3-1,R=w>2?0:-1,M=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];y.set(M,_*g*w),S.set(h,m*g*w);const x=[w,w,w,w,w,w];v.set(x,p*g*w)}const A=new Xe;A.setAttribute("position",new ri(y,_)),A.setAttribute("uv",new ri(S,m)),A.setAttribute("faceIndex",new ri(v,p)),t.push(A),i>Ss&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ud(r,t,e){const n=new $r(r,t,e);return n.texture.mapping=vl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ta(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function My(r,t,e){const n=new Float32Array(Lr),i=new O(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:lh(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Nd(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lh(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Fd(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function lh(){return`

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
	`}function Ey(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===$c||l===jc,u=l===ks||l===zs;if(c||u){let d=t.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Id(r)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new Id(r)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function by(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&fo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ty(r,t,e,n){const i={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}h.removeEventListener("dispose",o),delete i[h.id];const f=s.get(h);f&&(t.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)t.update(h[g],r.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let S=0,v=y.length;S<v;S+=3){const A=y[S+0],w=y[S+1],E=y[S+2];h.push(A,w,w,E,E,A)}}else if(g!==void 0){const y=g.array;_=g.version;for(let S=0,v=y.length/3-1;S<v;S+=3){const A=S+0,w=S+1,E=S+2;h.push(A,w,w,E,E,A)}}else return;const m=new(tm(h)?am:om)(h,1);m.version=_;const p=s.get(d);p&&t.remove(p),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function wy(r,t,e){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){r.drawElements(n,f,s,h*o),e.update(f,n,1)}function c(h,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,h*o,g),e.update(f,n,g))}function u(h,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(h,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Ay(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ry(r,t,e){const n=new WeakMap,i=new xe;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let x=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var f=x;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let A=a.attributes.position.count*v,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const E=new Float32Array(A*w*4*d),R=new nm(E,A,w,d);R.type=Oi,R.needsUpdate=!0;const M=v*4;for(let P=0;P<d;P++){const L=p[P],U=y[P],k=S[P],q=A*w*4*P;for(let X=0;X<L.count;X++){const Y=X*M;g===!0&&(i.fromBufferAttribute(L,X),E[q+Y+0]=i.x,E[q+Y+1]=i.y,E[q+Y+2]=i.z,E[q+Y+3]=0),_===!0&&(i.fromBufferAttribute(U,X),E[q+Y+4]=i.x,E[q+Y+5]=i.y,E[q+Y+6]=i.z,E[q+Y+7]=0),m===!0&&(i.fromBufferAttribute(k,X),E[q+Y+8]=i.x,E[q+Y+9]=i.y,E[q+Y+10]=i.z,E[q+Y+11]=k.itemSize===4?i.w:1)}}h={count:d,texture:R,size:new Kt(A,w)},n.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function Cy(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class fm extends Mn{constructor(t,e,n,i,s,o,a,l,c,u=Ps){if(u!==Ps&&u!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ps&&(n=qr),n===void 0&&u===Vs&&(n=Hs),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:di,this.minFilter=l!==void 0?l:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const pm=new Mn,Od=new fm(1,1),mm=new nm,gm=new m0,_m=new um,Bd=[],kd=[],zd=new Float32Array(16),Hd=new Float32Array(9),Vd=new Float32Array(4);function Ys(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Bd[i];if(s===void 0&&(s=new Float32Array(i),Bd[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ze(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ke(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function yl(r,t){let e=kd[t];e===void 0&&(e=new Int32Array(t),kd[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Py(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Ly(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;r.uniform2fv(this.addr,t),Ke(e,t)}}function Dy(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;r.uniform3fv(this.addr,t),Ke(e,t)}}function Iy(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;r.uniform4fv(this.addr,t),Ke(e,t)}}function Uy(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;Vd.set(n),r.uniformMatrix2fv(this.addr,!1,Vd),Ke(e,n)}}function Ny(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;Hd.set(n),r.uniformMatrix3fv(this.addr,!1,Hd),Ke(e,n)}}function Fy(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;zd.set(n),r.uniformMatrix4fv(this.addr,!1,zd),Ke(e,n)}}function Oy(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function By(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;r.uniform2iv(this.addr,t),Ke(e,t)}}function ky(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;r.uniform3iv(this.addr,t),Ke(e,t)}}function zy(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;r.uniform4iv(this.addr,t),Ke(e,t)}}function Hy(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Vy(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;r.uniform2uiv(this.addr,t),Ke(e,t)}}function Gy(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;r.uniform3uiv(this.addr,t),Ke(e,t)}}function Wy(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;r.uniform4uiv(this.addr,t),Ke(e,t)}}function Xy(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Od.compareFunction=Qp,s=Od):s=pm,e.setTexture2D(t||s,i)}function Yy(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||gm,i)}function qy(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||_m,i)}function $y(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||mm,i)}function jy(r){switch(r){case 5126:return Py;case 35664:return Ly;case 35665:return Dy;case 35666:return Iy;case 35674:return Uy;case 35675:return Ny;case 35676:return Fy;case 5124:case 35670:return Oy;case 35667:case 35671:return By;case 35668:case 35672:return ky;case 35669:case 35673:return zy;case 5125:return Hy;case 36294:return Vy;case 36295:return Gy;case 36296:return Wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Xy;case 35679:case 36299:case 36307:return Yy;case 35680:case 36300:case 36308:case 36293:return qy;case 36289:case 36303:case 36311:case 36292:return $y}}function Zy(r,t){r.uniform1fv(this.addr,t)}function Ky(r,t){const e=Ys(t,this.size,2);r.uniform2fv(this.addr,e)}function Jy(r,t){const e=Ys(t,this.size,3);r.uniform3fv(this.addr,e)}function Qy(r,t){const e=Ys(t,this.size,4);r.uniform4fv(this.addr,e)}function tS(r,t){const e=Ys(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function eS(r,t){const e=Ys(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function nS(r,t){const e=Ys(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function iS(r,t){r.uniform1iv(this.addr,t)}function rS(r,t){r.uniform2iv(this.addr,t)}function sS(r,t){r.uniform3iv(this.addr,t)}function oS(r,t){r.uniform4iv(this.addr,t)}function aS(r,t){r.uniform1uiv(this.addr,t)}function lS(r,t){r.uniform2uiv(this.addr,t)}function cS(r,t){r.uniform3uiv(this.addr,t)}function uS(r,t){r.uniform4uiv(this.addr,t)}function hS(r,t,e){const n=this.cache,i=t.length,s=yl(e,i);Ze(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||pm,s[o])}function dS(r,t,e){const n=this.cache,i=t.length,s=yl(e,i);Ze(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||gm,s[o])}function fS(r,t,e){const n=this.cache,i=t.length,s=yl(e,i);Ze(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||_m,s[o])}function pS(r,t,e){const n=this.cache,i=t.length,s=yl(e,i);Ze(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||mm,s[o])}function mS(r){switch(r){case 5126:return Zy;case 35664:return Ky;case 35665:return Jy;case 35666:return Qy;case 35674:return tS;case 35675:return eS;case 35676:return nS;case 5124:case 35670:return iS;case 35667:case 35671:return rS;case 35668:case 35672:return sS;case 35669:case 35673:return oS;case 5125:return aS;case 36294:return lS;case 36295:return cS;case 36296:return uS;case 35678:case 36198:case 36298:case 36306:case 35682:return hS;case 35679:case 36299:case 36307:return dS;case 35680:case 36300:case 36308:case 36293:return fS;case 36289:case 36303:case 36311:case 36292:return pS}}class gS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=jy(e.type)}}class _S{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mS(e.type)}}class vS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const lc=/(\w+)(\])?(\[|\.)?/g;function Gd(r,t){r.seq.push(t),r.map[t.id]=t}function xS(r,t,e){const n=r.name,i=n.length;for(lc.lastIndex=0;;){const s=lc.exec(n),o=lc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Gd(e,c===void 0?new gS(a,r,t):new _S(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new vS(a),Gd(e,d)),e=d}}}class ja{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);xS(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Wd(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const yS=37297;let SS=0;function MS(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Xd=new jt;function ES(r){ce._getMatrix(Xd,ce.workingColorSpace,r);const t=`mat3( ${Xd.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(r)){case xl:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Yd(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+MS(r.getShaderSource(t),o)}else return i}function bS(r,t){const e=ES(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function TS(r,t){let e;switch(t){case V_:e="Linear";break;case G_:e="Reinhard";break;case W_:e="Cineon";break;case X_:e="ACESFilmic";break;case q_:e="AgX";break;case $_:e="Neutral";break;case Y_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const wa=new O;function wS(){ce.getLuminanceCoefficients(wa);const r=wa.x.toFixed(4),t=wa.y.toFixed(4),e=wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(po).join(`
`)}function RS(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function CS(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function po(r){return r!==""}function qd(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $d(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const PS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tu(r){return r.replace(PS,DS)}const LS=new Map;function DS(r,t){let e=Zt[t];if(e===void 0){const n=LS.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Tu(e)}const IS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jd(r){return r.replace(IS,US)}function US(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Zd(r){let t=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function NS(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===kp?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===S_?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Li&&(t="SHADOWMAP_TYPE_VSM"),t}function FS(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ks:case zs:t="ENVMAP_TYPE_CUBE";break;case vl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function OS(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case zs:t="ENVMAP_MODE_REFRACTION";break}return t}function BS(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case zp:t="ENVMAP_BLENDING_MULTIPLY";break;case z_:t="ENVMAP_BLENDING_MIX";break;case H_:t="ENVMAP_BLENDING_ADD";break}return t}function kS(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function zS(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=NS(e),c=FS(e),u=OS(e),d=BS(e),h=kS(e),f=AS(e),g=RS(s),_=i.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(po).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(po).join(`
`),p.length>0&&(p+=`
`)):(m=[Zd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(po).join(`
`),p=[Zd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ur?"#define TONE_MAPPING":"",e.toneMapping!==ur?Zt.tonemapping_pars_fragment:"",e.toneMapping!==ur?TS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,bS("linearToOutputTexel",e.outputColorSpace),wS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(po).join(`
`)),o=Tu(o),o=qd(o,e),o=$d(o,e),a=Tu(a),a=qd(a,e),a=$d(a,e),o=jd(o),a=jd(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===cd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=y+m+o,v=y+p+a,A=Wd(i,i.VERTEX_SHADER,S),w=Wd(i,i.FRAGMENT_SHADER,v);i.attachShader(_,A),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(P){if(r.debug.checkShaderErrors){const L=i.getProgramInfoLog(_).trim(),U=i.getShaderInfoLog(A).trim(),k=i.getShaderInfoLog(w).trim();let q=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,w);else{const Y=Yd(i,A,"vertex"),V=Yd(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+Y+`
`+V)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(U===""||k==="")&&(X=!1);X&&(P.diagnostics={runnable:q,programLog:L,vertexShader:{log:U,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(A),i.deleteShader(w),R=new ja(i,_),M=CS(i,_)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,yS)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=SS++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let HS=0;class VS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new GS(t),e.set(t,n)),n}}class GS{constructor(t){this.id=HS++,this.code=t,this.usedTimes=0}}function WS(r,t,e,n,i,s,o){const a=new im,l=new VS,c=new Set,u=[],d=i.logarithmicDepthBuffer,h=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,x,P,L,U){const k=L.fog,q=U.geometry,X=M.isMeshStandardMaterial?L.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||X),V=Y&&Y.mapping===vl?Y.image.height:null,et=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const D=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ut=D!==void 0?D.length:0;let It=0;q.morphAttributes.position!==void 0&&(It=1),q.morphAttributes.normal!==void 0&&(It=2),q.morphAttributes.color!==void 0&&(It=3);let Jt,j,tt,_t;if(et){const vt=gi[et];Jt=vt.vertexShader,j=vt.fragmentShader}else Jt=M.vertexShader,j=M.fragmentShader,l.update(M),tt=l.getVertexShaderID(M),_t=l.getFragmentShaderID(M);const nt=r.getRenderTarget(),Et=r.state.buffers.depth.getReversed(),Rt=U.isInstancedMesh===!0,Ht=U.isBatchedMesh===!0,Qt=!!M.map,Nt=!!M.matcap,Lt=!!Y,N=!!M.aoMap,ye=!!M.lightMap,Ot=!!M.bumpMap,z=!!M.normalMap,bt=!!M.displacementMap,oe=!!M.emissiveMap,Ct=!!M.metalnessMap,C=!!M.roughnessMap,b=M.anisotropy>0,G=M.clearcoat>0,Q=M.dispersion>0,J=M.iridescence>0,Z=M.sheen>0,ht=M.transmission>0,at=b&&!!M.anisotropyMap,pt=G&&!!M.clearcoatMap,Wt=G&&!!M.clearcoatNormalMap,it=G&&!!M.clearcoatRoughnessMap,ot=J&&!!M.iridescenceMap,Ut=J&&!!M.iridescenceThicknessMap,Dt=Z&&!!M.sheenColorMap,xt=Z&&!!M.sheenRoughnessMap,qt=!!M.specularMap,Ft=!!M.specularColorMap,le=!!M.specularIntensityMap,I=ht&&!!M.transmissionMap,ct=ht&&!!M.thicknessMap,$=!!M.gradientMap,K=!!M.alphaMap,lt=M.alphaTest>0,dt=!!M.alphaHash,Bt=!!M.extensions;let ue=ur;M.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ue=r.toneMapping);const Fe={shaderID:et,shaderType:M.type,shaderName:M.name,vertexShader:Jt,fragmentShader:j,defines:M.defines,customVertexShaderID:tt,customFragmentShaderID:_t,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ht,batchingColor:Ht&&U._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&U.instanceColor!==null,instancingMorph:Rt&&U.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:nt===null?r.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Ws,alphaToCoverage:!!M.alphaToCoverage,map:Qt,matcap:Nt,envMap:Lt,envMapMode:Lt&&Y.mapping,envMapCubeUVHeight:V,aoMap:N,lightMap:ye,bumpMap:Ot,normalMap:z,displacementMap:h&&bt,emissiveMap:oe,normalMapObjectSpace:z&&M.normalMapType===J_,normalMapTangentSpace:z&&M.normalMapType===Jp,metalnessMap:Ct,roughnessMap:C,anisotropy:b,anisotropyMap:at,clearcoat:G,clearcoatMap:pt,clearcoatNormalMap:Wt,clearcoatRoughnessMap:it,dispersion:Q,iridescence:J,iridescenceMap:ot,iridescenceThicknessMap:Ut,sheen:Z,sheenColorMap:Dt,sheenRoughnessMap:xt,specularMap:qt,specularColorMap:Ft,specularIntensityMap:le,transmission:ht,transmissionMap:I,thicknessMap:ct,gradientMap:$,opaque:M.transparent===!1&&M.blending===Cs&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:lt,alphaHash:dt,combine:M.combine,mapUv:Qt&&_(M.map.channel),aoMapUv:N&&_(M.aoMap.channel),lightMapUv:ye&&_(M.lightMap.channel),bumpMapUv:Ot&&_(M.bumpMap.channel),normalMapUv:z&&_(M.normalMap.channel),displacementMapUv:bt&&_(M.displacementMap.channel),emissiveMapUv:oe&&_(M.emissiveMap.channel),metalnessMapUv:Ct&&_(M.metalnessMap.channel),roughnessMapUv:C&&_(M.roughnessMap.channel),anisotropyMapUv:at&&_(M.anisotropyMap.channel),clearcoatMapUv:pt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(M.sheenRoughnessMap.channel),specularMapUv:qt&&_(M.specularMap.channel),specularColorMapUv:Ft&&_(M.specularColorMap.channel),specularIntensityMapUv:le&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:ct&&_(M.thicknessMap.channel),alphaMapUv:K&&_(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(z||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!q.attributes.uv&&(Qt||K),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Et,skinning:U.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:It,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ue,decodeVideoTexture:Qt&&M.map.isVideoTexture===!0&&ce.getTransfer(M.map.colorSpace)===ve,decodeVideoTextureEmissive:oe&&M.emissiveMap.isVideoTexture===!0&&ce.getTransfer(M.emissiveMap.colorSpace)===ve,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ni,flipSided:M.side===Ln,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Bt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&M.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function p(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)x.push(P),x.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(y(x,M),S(x,M),x.push(r.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function y(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function S(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const x=g[M.type];let P;if(x){const L=gi[x];P=A0.clone(L.uniforms)}else P=M.uniforms;return P}function A(M,x){let P;for(let L=0,U=u.length;L<U;L++){const k=u[L];if(k.cacheKey===x){P=k,++P.usedTimes;break}}return P===void 0&&(P=new zS(r,x,M,s),u.push(P)),P}function w(M){if(--M.usedTimes===0){const x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function E(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:w,releaseShaderCache:E,programs:u,dispose:R}}function XS(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function YS(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Kd(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Jd(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,h,f,g,_,m){let p=r[t];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},r[t]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),t++,p}function a(d,h,f,g,_,m){const p=o(d,h,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(d,h,f,g,_,m){const p=o(d,h,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,h){e.length>1&&e.sort(d||YS),n.length>1&&n.sort(h||Kd),i.length>1&&i.sort(h||Kd)}function u(){for(let d=t,h=r.length;d<h;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function qS(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Jd,r.set(n,[o])):i>=s.length?(o=new Jd,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function $S(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Yt};break;case"SpotLight":e={position:new O,direction:new O,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new O,halfWidth:new O,halfHeight:new O};break}return r[t.id]=e,e}}}function jS(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let ZS=0;function KS(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function JS(r){const t=new $S,e=jS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const i=new O,s=new Re,o=new Re;function a(c){let u=0,d=0,h=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,S=0,v=0,A=0,w=0,E=0;c.sort(KS);for(let M=0,x=c.length;M<x;M++){const P=c[M],L=P.color,U=P.intensity,k=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=L.r*U,d+=L.g*U,h+=L.b*U;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],U);E++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,V=e.get(P);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=X,f++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(L).multiplyScalar(U),X.distance=k,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[_]=X;const Y=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,Y.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=Y.matrix,P.castShadow){const V=e.get(P);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=q,v++}_++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(L).multiplyScalar(U),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const Y=P.shadow,V=e.get(P);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=P.shadow.matrix,S++}n.point[g]=X,g++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(U),X.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[p]=X,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==y||R.numPointShadows!==S||R.numSpotShadows!==v||R.numSpotMaps!==A||R.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,R.directionalLength=f,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=y,R.numPointShadows=S,R.numSpotShadows=v,R.numSpotMaps=A,R.numLightProbes=E,n.version=ZS++)}function l(c,u){let d=0,h=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const S=c[p];if(S.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(S.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Qd(r){const t=new JS(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function QS(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Qd(r),t.set(i,[a])):s>=o.length?(a=new Qd(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class tM extends Zr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Z_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class eM extends Zr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const nM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iM=`uniform sampler2D shadow_pass;
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
}`;function rM(r,t,e){let n=new ah;const i=new Kt,s=new Kt,o=new xe,a=new tM({depthPacking:K_}),l=new eM,c={},u=e.maxTextureSize,d={[mr]:Ln,[Ln]:mr,[Ni]:Ni},h=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:nM,fragmentShader:iM}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Xe;g.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new se(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kp;let p=this.type;this.render=function(w,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=r.getRenderTarget(),x=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),L=r.state;L.setBlending(cr),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const U=p!==Li&&this.type===Li,k=p===Li&&this.type!==Li;for(let q=0,X=w.length;q<X;q++){const Y=w[q],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const et=V.getFrameExtents();if(i.multiply(et),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/et.x),i.x=s.x*et.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/et.y),i.y=s.y*et.y,V.mapSize.y=s.y)),V.map===null||U===!0||k===!0){const ut=this.type!==Li?{minFilter:di,magFilter:di}:{};V.map!==null&&V.map.dispose(),V.map=new $r(i.x,i.y,ut),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const D=V.getViewportCount();for(let ut=0;ut<D;ut++){const It=V.getViewport(ut);o.set(s.x*It.x,s.y*It.y,s.x*It.z,s.y*It.w),L.viewport(o),V.updateMatrices(Y,ut),n=V.getFrustum(),v(E,R,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Li&&y(V,R),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,x,P)};function y(w,E){const R=t.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new $r(i.x,i.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,R,h,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,R,f,_,null)}function S(w,E,R,M){let x=null;const P=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)x=P;else if(x=R.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const L=x.uuid,U=E.uuid;let k=c[L];k===void 0&&(k={},c[L]=k);let q=k[U];q===void 0&&(q=x.clone(),k[U]=q,E.addEventListener("dispose",A)),x=q}if(x.visible=E.visible,x.wireframe=E.wireframe,M===Li?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:d[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const L=r.properties.get(x);L.light=R}return x}function v(w,E,R,M,x){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Li)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const U=t.update(w),k=w.material;if(Array.isArray(k)){const q=U.groups;for(let X=0,Y=q.length;X<Y;X++){const V=q[X],et=k[V.materialIndex];if(et&&et.visible){const D=S(w,et,M,x);w.onBeforeShadow(r,w,E,R,U,D,V),r.renderBufferDirect(R,null,U,D,w,V),w.onAfterShadow(r,w,E,R,U,D,V)}}}else if(k.visible){const q=S(w,k,M,x);w.onBeforeShadow(r,w,E,R,U,q,null),r.renderBufferDirect(R,null,U,q,w,null),w.onAfterShadow(r,w,E,R,U,q,null)}}const L=w.children;for(let U=0,k=L.length;U<k;U++)v(L[U],E,R,M,x)}function A(w){w.target.removeEventListener("dispose",A);for(const R in c){const M=c[R],x=w.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const sM={[Hc]:Vc,[Gc]:Yc,[Wc]:qc,[Bs]:Xc,[Vc]:Hc,[Yc]:Gc,[qc]:Wc,[Xc]:Bs};function oM(r,t){function e(){let I=!1;const ct=new xe;let $=null;const K=new xe(0,0,0,0);return{setMask:function(lt){$!==lt&&!I&&(r.colorMask(lt,lt,lt,lt),$=lt)},setLocked:function(lt){I=lt},setClear:function(lt,dt,Bt,ue,Fe){Fe===!0&&(lt*=ue,dt*=ue,Bt*=ue),ct.set(lt,dt,Bt,ue),K.equals(ct)===!1&&(r.clearColor(lt,dt,Bt,ue),K.copy(ct))},reset:function(){I=!1,$=null,K.set(-1,0,0,0)}}}function n(){let I=!1,ct=!1,$=null,K=null,lt=null;return{setReversed:function(dt){if(ct!==dt){const Bt=t.get("EXT_clip_control");ct?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);const ue=lt;lt=null,this.setClear(ue)}ct=dt},getReversed:function(){return ct},setTest:function(dt){dt?nt(r.DEPTH_TEST):Et(r.DEPTH_TEST)},setMask:function(dt){$!==dt&&!I&&(r.depthMask(dt),$=dt)},setFunc:function(dt){if(ct&&(dt=sM[dt]),K!==dt){switch(dt){case Hc:r.depthFunc(r.NEVER);break;case Vc:r.depthFunc(r.ALWAYS);break;case Gc:r.depthFunc(r.LESS);break;case Bs:r.depthFunc(r.LEQUAL);break;case Wc:r.depthFunc(r.EQUAL);break;case Xc:r.depthFunc(r.GEQUAL);break;case Yc:r.depthFunc(r.GREATER);break;case qc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=dt}},setLocked:function(dt){I=dt},setClear:function(dt){lt!==dt&&(ct&&(dt=1-dt),r.clearDepth(dt),lt=dt)},reset:function(){I=!1,$=null,K=null,lt=null,ct=!1}}}function i(){let I=!1,ct=null,$=null,K=null,lt=null,dt=null,Bt=null,ue=null,Fe=null;return{setTest:function(vt){I||(vt?nt(r.STENCIL_TEST):Et(r.STENCIL_TEST))},setMask:function(vt){ct!==vt&&!I&&(r.stencilMask(vt),ct=vt)},setFunc:function(vt,Tt,$t){($!==vt||K!==Tt||lt!==$t)&&(r.stencilFunc(vt,Tt,$t),$=vt,K=Tt,lt=$t)},setOp:function(vt,Tt,$t){(dt!==vt||Bt!==Tt||ue!==$t)&&(r.stencilOp(vt,Tt,$t),dt=vt,Bt=Tt,ue=$t)},setLocked:function(vt){I=vt},setClear:function(vt){Fe!==vt&&(r.clearStencil(vt),Fe=vt)},reset:function(){I=!1,ct=null,$=null,K=null,lt=null,dt=null,Bt=null,ue=null,Fe=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,S=null,v=null,A=null,w=null,E=new Yt(0,0,0),R=0,M=!1,x=null,P=null,L=null,U=null,k=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Y=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=Y>=2);let et=null,D={};const ut=r.getParameter(r.SCISSOR_BOX),It=r.getParameter(r.VIEWPORT),Jt=new xe().fromArray(ut),j=new xe().fromArray(It);function tt(I,ct,$,K){const lt=new Uint8Array(4),dt=r.createTexture();r.bindTexture(I,dt),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Bt=0;Bt<$;Bt++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(ct,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,lt):r.texImage2D(ct+Bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,lt);return dt}const _t={};_t[r.TEXTURE_2D]=tt(r.TEXTURE_2D,r.TEXTURE_2D,1),_t[r.TEXTURE_CUBE_MAP]=tt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[r.TEXTURE_2D_ARRAY]=tt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_t[r.TEXTURE_3D]=tt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(r.DEPTH_TEST),o.setFunc(Bs),Ot(!1),z(id),nt(r.CULL_FACE),N(cr);function nt(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function Et(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function Rt(I,ct){return d[I]!==ct?(r.bindFramebuffer(I,ct),d[I]=ct,I===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ct),I===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ct),!0):!1}function Ht(I,ct){let $=f,K=!1;if(I){$=h.get(ct),$===void 0&&($=[],h.set(ct,$));const lt=I.textures;if($.length!==lt.length||$[0]!==r.COLOR_ATTACHMENT0){for(let dt=0,Bt=lt.length;dt<Bt;dt++)$[dt]=r.COLOR_ATTACHMENT0+dt;$.length=lt.length,K=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,K=!0);K&&r.drawBuffers($)}function Qt(I){return g!==I?(r.useProgram(I),g=I,!0):!1}const Nt={[Pr]:r.FUNC_ADD,[E_]:r.FUNC_SUBTRACT,[b_]:r.FUNC_REVERSE_SUBTRACT};Nt[T_]=r.MIN,Nt[w_]=r.MAX;const Lt={[A_]:r.ZERO,[R_]:r.ONE,[C_]:r.SRC_COLOR,[kc]:r.SRC_ALPHA,[N_]:r.SRC_ALPHA_SATURATE,[I_]:r.DST_COLOR,[L_]:r.DST_ALPHA,[P_]:r.ONE_MINUS_SRC_COLOR,[zc]:r.ONE_MINUS_SRC_ALPHA,[U_]:r.ONE_MINUS_DST_COLOR,[D_]:r.ONE_MINUS_DST_ALPHA,[F_]:r.CONSTANT_COLOR,[O_]:r.ONE_MINUS_CONSTANT_COLOR,[B_]:r.CONSTANT_ALPHA,[k_]:r.ONE_MINUS_CONSTANT_ALPHA};function N(I,ct,$,K,lt,dt,Bt,ue,Fe,vt){if(I===cr){_===!0&&(Et(r.BLEND),_=!1);return}if(_===!1&&(nt(r.BLEND),_=!0),I!==M_){if(I!==m||vt!==M){if((p!==Pr||v!==Pr)&&(r.blendEquation(r.FUNC_ADD),p=Pr,v=Pr),vt)switch(I){case Cs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case rd:r.blendFunc(r.ONE,r.ONE);break;case sd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case od:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Cs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case rd:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case sd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case od:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,S=null,A=null,w=null,E.set(0,0,0),R=0,m=I,M=vt}return}lt=lt||ct,dt=dt||$,Bt=Bt||K,(ct!==p||lt!==v)&&(r.blendEquationSeparate(Nt[ct],Nt[lt]),p=ct,v=lt),($!==y||K!==S||dt!==A||Bt!==w)&&(r.blendFuncSeparate(Lt[$],Lt[K],Lt[dt],Lt[Bt]),y=$,S=K,A=dt,w=Bt),(ue.equals(E)===!1||Fe!==R)&&(r.blendColor(ue.r,ue.g,ue.b,Fe),E.copy(ue),R=Fe),m=I,M=!1}function ye(I,ct){I.side===Ni?Et(r.CULL_FACE):nt(r.CULL_FACE);let $=I.side===Ln;ct&&($=!$),Ot($),I.blending===Cs&&I.transparent===!1?N(cr):N(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const K=I.stencilWrite;a.setTest(K),K&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),oe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?nt(r.SAMPLE_ALPHA_TO_COVERAGE):Et(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(I){x!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),x=I)}function z(I){I!==x_?(nt(r.CULL_FACE),I!==P&&(I===id?r.cullFace(r.BACK):I===y_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Et(r.CULL_FACE),P=I}function bt(I){I!==L&&(X&&r.lineWidth(I),L=I)}function oe(I,ct,$){I?(nt(r.POLYGON_OFFSET_FILL),(U!==ct||k!==$)&&(r.polygonOffset(ct,$),U=ct,k=$)):Et(r.POLYGON_OFFSET_FILL)}function Ct(I){I?nt(r.SCISSOR_TEST):Et(r.SCISSOR_TEST)}function C(I){I===void 0&&(I=r.TEXTURE0+q-1),et!==I&&(r.activeTexture(I),et=I)}function b(I,ct,$){$===void 0&&(et===null?$=r.TEXTURE0+q-1:$=et);let K=D[$];K===void 0&&(K={type:void 0,texture:void 0},D[$]=K),(K.type!==I||K.texture!==ct)&&(et!==$&&(r.activeTexture($),et=$),r.bindTexture(I,ct||_t[I]),K.type=I,K.texture=ct)}function G(){const I=D[et];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Wt(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ut(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(I){Jt.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Jt.copy(I))}function xt(I){j.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),j.copy(I))}function qt(I,ct){let $=c.get(ct);$===void 0&&($=new WeakMap,c.set(ct,$));let K=$.get(I);K===void 0&&(K=r.getUniformBlockIndex(ct,I.name),$.set(I,K))}function Ft(I,ct){const K=c.get(ct).get(I);l.get(ct)!==K&&(r.uniformBlockBinding(ct,K,I.__bindingPointIndex),l.set(ct,K))}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},et=null,D={},d={},h=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,S=null,v=null,A=null,w=null,E=new Yt(0,0,0),R=0,M=!1,x=null,P=null,L=null,U=null,k=null,Jt.set(0,0,r.canvas.width,r.canvas.height),j.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:nt,disable:Et,bindFramebuffer:Rt,drawBuffers:Ht,useProgram:Qt,setBlending:N,setMaterial:ye,setFlipSided:Ot,setCullFace:z,setLineWidth:bt,setPolygonOffset:oe,setScissorTest:Ct,activeTexture:C,bindTexture:b,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:ot,texImage3D:Ut,updateUBOMapping:qt,uniformBlockBinding:Ft,texStorage2D:Wt,texStorage3D:it,texSubImage2D:Z,texSubImage3D:ht,compressedTexSubImage2D:at,compressedTexSubImage3D:pt,scissor:Dt,viewport:xt,reset:le}}function tf(r,t,e,n){const i=aM(n);switch(e){case Xp:return r*t;case qp:return r*t;case $p:return r*t*2;case jp:return r*t/i.components*i.byteLength;case ih:return r*t/i.components*i.byteLength;case Zp:return r*t*2/i.components*i.byteLength;case rh:return r*t*2/i.components*i.byteLength;case Yp:return r*t*3/i.components*i.byteLength;case hi:return r*t*4/i.components*i.byteLength;case sh:return r*t*4/i.components*i.byteLength;case Ga:case Wa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Xa:case Ya:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Qc:case eu:return Math.max(r,16)*Math.max(t,8)/4;case Jc:case tu:return Math.max(r,8)*Math.max(t,8)/2;case nu:case iu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ru:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case su:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ou:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case au:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case lu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case cu:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case uu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case hu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case du:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case fu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case pu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case mu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case gu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case _u:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case vu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case qa:case xu:case yu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Kp:case Su:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Mu:case Eu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function aM(r){switch(r){case Gi:case Vp:return{byteLength:1,components:1};case Oo:case Gp:case Ho:return{byteLength:2,components:1};case eh:case nh:return{byteLength:2,components:4};case qr:case th:case Oi:return{byteLength:4,components:1};case Wp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function lM(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Kt,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return f?new OffscreenCanvas(C,b):Bo("canvas")}function _(C,b,G){let Q=1;const J=Ct(C);if((J.width>G||J.height>G)&&(Q=G/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(Q*J.width),ht=Math.floor(Q*J.height);d===void 0&&(d=g(Z,ht));const at=b?g(Z,ht):d;return at.width=Z,at.height=ht,at.getContext("2d").drawImage(C,0,0,Z,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+ht+")."),at}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(C,b,G,Q,J=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=b;if(b===r.RED&&(G===r.FLOAT&&(Z=r.R32F),G===r.HALF_FLOAT&&(Z=r.R16F),G===r.UNSIGNED_BYTE&&(Z=r.R8)),b===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.R8UI),G===r.UNSIGNED_SHORT&&(Z=r.R16UI),G===r.UNSIGNED_INT&&(Z=r.R32UI),G===r.BYTE&&(Z=r.R8I),G===r.SHORT&&(Z=r.R16I),G===r.INT&&(Z=r.R32I)),b===r.RG&&(G===r.FLOAT&&(Z=r.RG32F),G===r.HALF_FLOAT&&(Z=r.RG16F),G===r.UNSIGNED_BYTE&&(Z=r.RG8)),b===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.RG8UI),G===r.UNSIGNED_SHORT&&(Z=r.RG16UI),G===r.UNSIGNED_INT&&(Z=r.RG32UI),G===r.BYTE&&(Z=r.RG8I),G===r.SHORT&&(Z=r.RG16I),G===r.INT&&(Z=r.RG32I)),b===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),G===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),G===r.UNSIGNED_INT&&(Z=r.RGB32UI),G===r.BYTE&&(Z=r.RGB8I),G===r.SHORT&&(Z=r.RGB16I),G===r.INT&&(Z=r.RGB32I)),b===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),G===r.UNSIGNED_INT&&(Z=r.RGBA32UI),G===r.BYTE&&(Z=r.RGBA8I),G===r.SHORT&&(Z=r.RGBA16I),G===r.INT&&(Z=r.RGBA32I)),b===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),b===r.RGBA){const ht=J?xl:ce.getTransfer(Q);G===r.FLOAT&&(Z=r.RGBA32F),G===r.HALF_FLOAT&&(Z=r.RGBA16F),G===r.UNSIGNED_BYTE&&(Z=ht===ve?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(C,b){let G;return C?b===null||b===qr||b===Hs?G=r.DEPTH24_STENCIL8:b===Oi?G=r.DEPTH32F_STENCIL8:b===Oo&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===qr||b===Hs?G=r.DEPTH_COMPONENT24:b===Oi?G=r.DEPTH_COMPONENT32F:b===Oo&&(G=r.DEPTH_COMPONENT16),G}function A(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==di&&C.minFilter!==yi?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function w(C){const b=C.target;b.removeEventListener("dispose",w),R(b),b.isVideoTexture&&u.delete(b)}function E(C){const b=C.target;b.removeEventListener("dispose",E),x(b)}function R(C){const b=n.get(C);if(b.__webglInit===void 0)return;const G=C.source,Q=h.get(G);if(Q){const J=Q[b.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(C),Object.keys(Q).length===0&&h.delete(G)}n.remove(C)}function M(C){const b=n.get(C);r.deleteTexture(b.__webglTexture);const G=C.source,Q=h.get(G);delete Q[b.__cacheKey],o.memory.textures--}function x(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let J=0;J<b.__webglFramebuffer[Q].length;J++)r.deleteFramebuffer(b.__webglFramebuffer[Q][J]);else r.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)r.deleteFramebuffer(b.__webglFramebuffer[Q]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=C.textures;for(let Q=0,J=G.length;Q<J;Q++){const Z=n.get(G[Q]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(G[Q])}n.remove(C)}let P=0;function L(){P=0}function U(){const C=P;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function k(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function q(C,b){const G=n.get(C);if(C.isVideoTexture&&bt(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(G,C,b);return}}e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+b)}function X(C,b){const G=n.get(C);if(C.version>0&&G.__version!==C.version){j(G,C,b);return}e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+b)}function Y(C,b){const G=n.get(C);if(C.version>0&&G.__version!==C.version){j(G,C,b);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+b)}function V(C,b){const G=n.get(C);if(C.version>0&&G.__version!==C.version){tt(G,C,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+b)}const et={[Zc]:r.REPEAT,[Nr]:r.CLAMP_TO_EDGE,[Kc]:r.MIRRORED_REPEAT},D={[di]:r.NEAREST,[j_]:r.NEAREST_MIPMAP_NEAREST,[oa]:r.NEAREST_MIPMAP_LINEAR,[yi]:r.LINEAR,[Nl]:r.LINEAR_MIPMAP_NEAREST,[Fr]:r.LINEAR_MIPMAP_LINEAR},ut={[Q_]:r.NEVER,[s0]:r.ALWAYS,[t0]:r.LESS,[Qp]:r.LEQUAL,[e0]:r.EQUAL,[r0]:r.GEQUAL,[n0]:r.GREATER,[i0]:r.NOTEQUAL};function It(C,b){if(b.type===Oi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===yi||b.magFilter===Nl||b.magFilter===oa||b.magFilter===Fr||b.minFilter===yi||b.minFilter===Nl||b.minFilter===oa||b.minFilter===Fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,et[b.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,et[b.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,et[b.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,D[b.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,D[b.minFilter]),b.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ut[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===di||b.minFilter!==oa&&b.minFilter!==Fr||b.type===Oi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Jt(C,b){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",w));const Q=b.source;let J=h.get(Q);J===void 0&&(J={},h.set(Q,J));const Z=k(b);if(Z!==C.__cacheKey){J[Z]===void 0&&(J[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),J[Z].usedTimes++;const ht=J[C.__cacheKey];ht!==void 0&&(J[C.__cacheKey].usedTimes--,ht.usedTimes===0&&M(b)),C.__cacheKey=Z,C.__webglTexture=J[Z].texture}return G}function j(C,b,G){let Q=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=r.TEXTURE_3D);const J=Jt(C,b),Z=b.source;e.bindTexture(Q,C.__webglTexture,r.TEXTURE0+G);const ht=n.get(Z);if(Z.version!==ht.__version||J===!0){e.activeTexture(r.TEXTURE0+G);const at=ce.getPrimaries(ce.workingColorSpace),pt=b.colorSpace===tr?null:ce.getPrimaries(b.colorSpace),Wt=b.colorSpace===tr||at===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let it=_(b.image,!1,i.maxTextureSize);it=oe(b,it);const ot=s.convert(b.format,b.colorSpace),Ut=s.convert(b.type);let Dt=S(b.internalFormat,ot,Ut,b.colorSpace,b.isVideoTexture);It(Q,b);let xt;const qt=b.mipmaps,Ft=b.isVideoTexture!==!0,le=ht.__version===void 0||J===!0,I=Z.dataReady,ct=A(b,it);if(b.isDepthTexture)Dt=v(b.format===Vs,b.type),le&&(Ft?e.texStorage2D(r.TEXTURE_2D,1,Dt,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,Dt,it.width,it.height,0,ot,Ut,null));else if(b.isDataTexture)if(qt.length>0){Ft&&le&&e.texStorage2D(r.TEXTURE_2D,ct,Dt,qt[0].width,qt[0].height);for(let $=0,K=qt.length;$<K;$++)xt=qt[$],Ft?I&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,xt.width,xt.height,ot,Ut,xt.data):e.texImage2D(r.TEXTURE_2D,$,Dt,xt.width,xt.height,0,ot,Ut,xt.data);b.generateMipmaps=!1}else Ft?(le&&e.texStorage2D(r.TEXTURE_2D,ct,Dt,it.width,it.height),I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,it.width,it.height,ot,Ut,it.data)):e.texImage2D(r.TEXTURE_2D,0,Dt,it.width,it.height,0,ot,Ut,it.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ft&&le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ct,Dt,qt[0].width,qt[0].height,it.depth);for(let $=0,K=qt.length;$<K;$++)if(xt=qt[$],b.format!==hi)if(ot!==null)if(Ft){if(I)if(b.layerUpdates.size>0){const lt=tf(xt.width,xt.height,b.format,b.type);for(const dt of b.layerUpdates){const Bt=xt.data.subarray(dt*lt/xt.data.BYTES_PER_ELEMENT,(dt+1)*lt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,dt,xt.width,xt.height,1,ot,Bt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,xt.width,xt.height,it.depth,ot,xt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,Dt,xt.width,xt.height,it.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?I&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,xt.width,xt.height,it.depth,ot,Ut,xt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,$,Dt,xt.width,xt.height,it.depth,0,ot,Ut,xt.data)}else{Ft&&le&&e.texStorage2D(r.TEXTURE_2D,ct,Dt,qt[0].width,qt[0].height);for(let $=0,K=qt.length;$<K;$++)xt=qt[$],b.format!==hi?ot!==null?Ft?I&&e.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,xt.width,xt.height,ot,xt.data):e.compressedTexImage2D(r.TEXTURE_2D,$,Dt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?I&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,xt.width,xt.height,ot,Ut,xt.data):e.texImage2D(r.TEXTURE_2D,$,Dt,xt.width,xt.height,0,ot,Ut,xt.data)}else if(b.isDataArrayTexture)if(Ft){if(le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ct,Dt,it.width,it.height,it.depth),I)if(b.layerUpdates.size>0){const $=tf(it.width,it.height,b.format,b.type);for(const K of b.layerUpdates){const lt=it.data.subarray(K*$/it.data.BYTES_PER_ELEMENT,(K+1)*$/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,it.width,it.height,1,ot,Ut,lt)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ot,Ut,it.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Dt,it.width,it.height,it.depth,0,ot,Ut,it.data);else if(b.isData3DTexture)Ft?(le&&e.texStorage3D(r.TEXTURE_3D,ct,Dt,it.width,it.height,it.depth),I&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ot,Ut,it.data)):e.texImage3D(r.TEXTURE_3D,0,Dt,it.width,it.height,it.depth,0,ot,Ut,it.data);else if(b.isFramebufferTexture){if(le)if(Ft)e.texStorage2D(r.TEXTURE_2D,ct,Dt,it.width,it.height);else{let $=it.width,K=it.height;for(let lt=0;lt<ct;lt++)e.texImage2D(r.TEXTURE_2D,lt,Dt,$,K,0,ot,Ut,null),$>>=1,K>>=1}}else if(qt.length>0){if(Ft&&le){const $=Ct(qt[0]);e.texStorage2D(r.TEXTURE_2D,ct,Dt,$.width,$.height)}for(let $=0,K=qt.length;$<K;$++)xt=qt[$],Ft?I&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,ot,Ut,xt):e.texImage2D(r.TEXTURE_2D,$,Dt,ot,Ut,xt);b.generateMipmaps=!1}else if(Ft){if(le){const $=Ct(it);e.texStorage2D(r.TEXTURE_2D,ct,Dt,$.width,$.height)}I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ot,Ut,it)}else e.texImage2D(r.TEXTURE_2D,0,Dt,ot,Ut,it);m(b)&&p(Q),ht.__version=Z.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function tt(C,b,G){if(b.image.length!==6)return;const Q=Jt(C,b),J=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+G);const Z=n.get(J);if(J.version!==Z.__version||Q===!0){e.activeTexture(r.TEXTURE0+G);const ht=ce.getPrimaries(ce.workingColorSpace),at=b.colorSpace===tr?null:ce.getPrimaries(b.colorSpace),pt=b.colorSpace===tr||ht===at?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Wt=b.isCompressedTexture||b.image[0].isCompressedTexture,it=b.image[0]&&b.image[0].isDataTexture,ot=[];for(let K=0;K<6;K++)!Wt&&!it?ot[K]=_(b.image[K],!0,i.maxCubemapSize):ot[K]=it?b.image[K].image:b.image[K],ot[K]=oe(b,ot[K]);const Ut=ot[0],Dt=s.convert(b.format,b.colorSpace),xt=s.convert(b.type),qt=S(b.internalFormat,Dt,xt,b.colorSpace),Ft=b.isVideoTexture!==!0,le=Z.__version===void 0||Q===!0,I=J.dataReady;let ct=A(b,Ut);It(r.TEXTURE_CUBE_MAP,b);let $;if(Wt){Ft&&le&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ct,qt,Ut.width,Ut.height);for(let K=0;K<6;K++){$=ot[K].mipmaps;for(let lt=0;lt<$.length;lt++){const dt=$[lt];b.format!==hi?Dt!==null?Ft?I&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,0,0,dt.width,dt.height,Dt,dt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,qt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,0,0,dt.width,dt.height,Dt,xt,dt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,qt,dt.width,dt.height,0,Dt,xt,dt.data)}}}else{if($=b.mipmaps,Ft&&le){$.length>0&&ct++;const K=Ct(ot[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ct,qt,K.width,K.height)}for(let K=0;K<6;K++)if(it){Ft?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ot[K].width,ot[K].height,Dt,xt,ot[K].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qt,ot[K].width,ot[K].height,0,Dt,xt,ot[K].data);for(let lt=0;lt<$.length;lt++){const Bt=$[lt].image[K].image;Ft?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,0,0,Bt.width,Bt.height,Dt,xt,Bt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,qt,Bt.width,Bt.height,0,Dt,xt,Bt.data)}}else{Ft?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Dt,xt,ot[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qt,Dt,xt,ot[K]);for(let lt=0;lt<$.length;lt++){const dt=$[lt];Ft?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,0,0,Dt,xt,dt.image[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,qt,Dt,xt,dt.image[K])}}}m(b)&&p(r.TEXTURE_CUBE_MAP),Z.__version=J.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function _t(C,b,G,Q,J,Z){const ht=s.convert(G.format,G.colorSpace),at=s.convert(G.type),pt=S(G.internalFormat,ht,at,G.colorSpace),Wt=n.get(b),it=n.get(G);if(it.__renderTarget=b,!Wt.__hasExternalTextures){const ot=Math.max(1,b.width>>Z),Ut=Math.max(1,b.height>>Z);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,Z,pt,ot,Ut,b.depth,0,ht,at,null):e.texImage2D(J,Z,pt,ot,Ut,0,ht,at,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),z(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,J,it.__webglTexture,0,Ot(b)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,J,it.__webglTexture,Z),e.bindFramebuffer(r.FRAMEBUFFER,null)}function nt(C,b,G){if(r.bindRenderbuffer(r.RENDERBUFFER,C),b.depthBuffer){const Q=b.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,Z=v(b.stencilBuffer,J),ht=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=Ot(b);z(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at,Z,b.width,b.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,at,Z,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Z,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,C)}else{const Q=b.textures;for(let J=0;J<Q.length;J++){const Z=Q[J],ht=s.convert(Z.format,Z.colorSpace),at=s.convert(Z.type),pt=S(Z.internalFormat,ht,at,Z.colorSpace),Wt=Ot(b);G&&z(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,pt,b.width,b.height):z(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Wt,pt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,pt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Et(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(b.depthTexture);Q.__renderTarget=b,(!Q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);const J=Q.__webglTexture,Z=Ot(b);if(b.depthTexture.format===Ps)z(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(b.depthTexture.format===Vs)z(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Rt(C){const b=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const Q=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Q){const J=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Q.removeEventListener("dispose",J)};Q.addEventListener("dispose",J),b.__depthDisposeCallback=J}b.__boundDepthTexture=Q}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Et(b.__webglFramebuffer,C)}else if(G){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]===void 0)b.__webglDepthbuffer[Q]=r.createRenderbuffer(),nt(b.__webglDepthbuffer[Q],C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),nt(b.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,J)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ht(C,b,G){const Q=n.get(C);b!==void 0&&_t(Q.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Rt(C)}function Qt(C){const b=C.texture,G=n.get(C),Q=n.get(b);C.addEventListener("dispose",E);const J=C.textures,Z=C.isWebGLCubeRenderTarget===!0,ht=J.length>1;if(ht||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=b.version,o.memory.textures++),Z){G.__webglFramebuffer=[];for(let at=0;at<6;at++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[at]=[];for(let pt=0;pt<b.mipmaps.length;pt++)G.__webglFramebuffer[at][pt]=r.createFramebuffer()}else G.__webglFramebuffer[at]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let at=0;at<b.mipmaps.length;at++)G.__webglFramebuffer[at]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(ht)for(let at=0,pt=J.length;at<pt;at++){const Wt=n.get(J[at]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&z(C)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){const pt=J[at];G.__webglColorRenderbuffer[at]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[at]);const Wt=s.convert(pt.format,pt.colorSpace),it=s.convert(pt.type),ot=S(pt.internalFormat,Wt,it,pt.colorSpace,C.isXRRenderTarget===!0),Ut=Ot(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut,ot,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,G.__webglColorRenderbuffer[at])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),nt(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),It(r.TEXTURE_CUBE_MAP,b);for(let at=0;at<6;at++)if(b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)_t(G.__webglFramebuffer[at][pt],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,pt);else _t(G.__webglFramebuffer[at],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(b)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let at=0,pt=J.length;at<pt;at++){const Wt=J[at],it=n.get(Wt);e.bindTexture(r.TEXTURE_2D,it.__webglTexture),It(r.TEXTURE_2D,Wt),_t(G.__webglFramebuffer,C,Wt,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,0),m(Wt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let at=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(at=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(at,Q.__webglTexture),It(at,b),b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)_t(G.__webglFramebuffer[pt],C,b,r.COLOR_ATTACHMENT0,at,pt);else _t(G.__webglFramebuffer,C,b,r.COLOR_ATTACHMENT0,at,0);m(b)&&p(at),e.unbindTexture()}C.depthBuffer&&Rt(C)}function Nt(C){const b=C.textures;for(let G=0,Q=b.length;G<Q;G++){const J=b[G];if(m(J)){const Z=y(C),ht=n.get(J).__webglTexture;e.bindTexture(Z,ht),p(Z),e.unbindTexture()}}}const Lt=[],N=[];function ye(C){if(C.samples>0){if(z(C)===!1){const b=C.textures,G=C.width,Q=C.height;let J=r.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=n.get(C),at=b.length>1;if(at)for(let pt=0;pt<b.length;pt++)e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let pt=0;pt<b.length;pt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),at){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ht.__webglColorRenderbuffer[pt]);const Wt=n.get(b[pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Wt,0)}r.blitFramebuffer(0,0,G,Q,0,0,G,Q,J,r.NEAREST),l===!0&&(Lt.length=0,N.length=0,Lt.push(r.COLOR_ATTACHMENT0+pt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Lt.push(Z),N.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,N)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Lt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),at)for(let pt=0;pt<b.length;pt++){e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,ht.__webglColorRenderbuffer[pt]);const Wt=n.get(b[pt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,Wt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Ot(C){return Math.min(i.maxSamples,C.samples)}function z(C){const b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function bt(C){const b=o.render.frame;u.get(C)!==b&&(u.set(C,b),C.update())}function oe(C,b){const G=C.colorSpace,Q=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Ws&&G!==tr&&(ce.getTransfer(G)===ve?(Q!==hi||J!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function Ct(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.setTexture2D=q,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=V,this.rebindTextures=Ht,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=z}function cM(r,t){function e(n,i=tr){let s;const o=ce.getTransfer(i);if(n===Gi)return r.UNSIGNED_BYTE;if(n===eh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===nh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Wp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Vp)return r.BYTE;if(n===Gp)return r.SHORT;if(n===Oo)return r.UNSIGNED_SHORT;if(n===th)return r.INT;if(n===qr)return r.UNSIGNED_INT;if(n===Oi)return r.FLOAT;if(n===Ho)return r.HALF_FLOAT;if(n===Xp)return r.ALPHA;if(n===Yp)return r.RGB;if(n===hi)return r.RGBA;if(n===qp)return r.LUMINANCE;if(n===$p)return r.LUMINANCE_ALPHA;if(n===Ps)return r.DEPTH_COMPONENT;if(n===Vs)return r.DEPTH_STENCIL;if(n===jp)return r.RED;if(n===ih)return r.RED_INTEGER;if(n===Zp)return r.RG;if(n===rh)return r.RG_INTEGER;if(n===sh)return r.RGBA_INTEGER;if(n===Ga||n===Wa||n===Xa||n===Ya)if(o===ve)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ga)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ga)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ya)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jc||n===Qc||n===tu||n===eu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Jc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===eu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nu||n===iu||n===ru)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===nu||n===iu)return o===ve?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ru)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===su||n===ou||n===au||n===lu||n===cu||n===uu||n===hu||n===du||n===fu||n===pu||n===mu||n===gu||n===_u||n===vu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===su)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ou)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===au)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===du)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_u)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vu)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qa||n===xu||n===yu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===qa)return o===ve?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kp||n===Su||n===Mu||n===Eu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===qa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Su)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Eu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class uM extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class De extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hM={type:"move"};class cc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const dM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fM=`
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

}`;class pM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Mn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new bi({vertexShader:dM,fragmentShader:fM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new Yo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mM extends Xs{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const _=new pM,m=e.getContextAttributes();let p=null,y=null;const S=[],v=[],A=new Kt;let w=null;const E=new yn;E.viewport=new xe;const R=new yn;R.viewport=new xe;const M=[E,R],x=new uM;let P=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let tt=S[j];return tt===void 0&&(tt=new cc,S[j]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(j){let tt=S[j];return tt===void 0&&(tt=new cc,S[j]=tt),tt.getGripSpace()},this.getHand=function(j){let tt=S[j];return tt===void 0&&(tt=new cc,S[j]=tt),tt.getHandSpace()};function U(j){const tt=v.indexOf(j.inputSource);if(tt===-1)return;const _t=S[tt];_t!==void 0&&(_t.update(j.inputSource,j.frame,c||o),_t.dispatchEvent({type:j.type,data:j.inputSource}))}function k(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",q);for(let j=0;j<S.length;j++){const tt=v[j];tt!==null&&(v[j]=null,S[j].disconnect(tt))}P=null,L=null,_.reset(),t.setRenderTarget(p),f=null,h=null,d=null,i=null,y=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",k),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new $r(f.framebufferWidth,f.framebufferHeight,{format:hi,type:Gi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,_t=null,nt=null;m.depth&&(nt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?Vs:Ps,_t=m.stencil?Hs:qr);const Et={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:s};d=new XRWebGLBinding(i,e),h=d.createProjectionLayer(Et),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new $r(h.textureWidth,h.textureHeight,{format:hi,type:Gi,depthTexture:new fm(h.textureWidth,h.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Jt.setContext(i),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(j){for(let tt=0;tt<j.removed.length;tt++){const _t=j.removed[tt],nt=v.indexOf(_t);nt>=0&&(v[nt]=null,S[nt].disconnect(_t))}for(let tt=0;tt<j.added.length;tt++){const _t=j.added[tt];let nt=v.indexOf(_t);if(nt===-1){for(let Rt=0;Rt<S.length;Rt++)if(Rt>=v.length){v.push(_t),nt=Rt;break}else if(v[Rt]===null){v[Rt]=_t,nt=Rt;break}if(nt===-1)break}const Et=S[nt];Et&&Et.connect(_t)}}const X=new O,Y=new O;function V(j,tt,_t){X.setFromMatrixPosition(tt.matrixWorld),Y.setFromMatrixPosition(_t.matrixWorld);const nt=X.distanceTo(Y),Et=tt.projectionMatrix.elements,Rt=_t.projectionMatrix.elements,Ht=Et[14]/(Et[10]-1),Qt=Et[14]/(Et[10]+1),Nt=(Et[9]+1)/Et[5],Lt=(Et[9]-1)/Et[5],N=(Et[8]-1)/Et[0],ye=(Rt[8]+1)/Rt[0],Ot=Ht*N,z=Ht*ye,bt=nt/(-N+ye),oe=bt*-N;if(tt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(oe),j.translateZ(bt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Et[10]===-1)j.projectionMatrix.copy(tt.projectionMatrix),j.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Ct=Ht+bt,C=Qt+bt,b=Ot-oe,G=z+(nt-oe),Q=Nt*Qt/C*Ct,J=Lt*Qt/C*Ct;j.projectionMatrix.makePerspective(b,G,Q,J,Ct,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function et(j,tt){tt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(tt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let tt=j.near,_t=j.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),x.near=R.near=E.near=tt,x.far=R.far=E.far=_t,(P!==x.near||L!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,L=x.far),E.layers.mask=j.layers.mask|2,R.layers.mask=j.layers.mask|4,x.layers.mask=E.layers.mask|R.layers.mask;const nt=j.parent,Et=x.cameras;et(x,nt);for(let Rt=0;Rt<Et.length;Rt++)et(Et[Rt],nt);Et.length===2?V(x,E,R):x.projectionMatrix.copy(E.projectionMatrix),D(j,x,nt)};function D(j,tt,_t){_t===null?j.matrix.copy(tt.matrixWorld):(j.matrix.copy(_t.matrixWorld),j.matrix.invert(),j.matrix.multiply(tt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(tt.projectionMatrix),j.projectionMatrixInverse.copy(tt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=bu*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let ut=null;function It(j,tt){if(u=tt.getViewerPose(c||o),g=tt,u!==null){const _t=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let nt=!1;_t.length!==x.cameras.length&&(x.cameras.length=0,nt=!0);for(let Rt=0;Rt<_t.length;Rt++){const Ht=_t[Rt];let Qt=null;if(f!==null)Qt=f.getViewport(Ht);else{const Lt=d.getViewSubImage(h,Ht);Qt=Lt.viewport,Rt===0&&(t.setRenderTargetTextures(y,Lt.colorTexture,h.ignoreDepthValues?void 0:Lt.depthStencilTexture),t.setRenderTarget(y))}let Nt=M[Rt];Nt===void 0&&(Nt=new yn,Nt.layers.enable(Rt),Nt.viewport=new xe,M[Rt]=Nt),Nt.matrix.fromArray(Ht.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Ht.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Rt===0&&(x.matrix.copy(Nt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),nt===!0&&x.cameras.push(Nt)}const Et=i.enabledFeatures;if(Et&&Et.includes("depth-sensing")){const Rt=d.getDepthInformation(_t[0]);Rt&&Rt.isValid&&Rt.texture&&_.init(t,Rt,i.renderState)}}for(let _t=0;_t<S.length;_t++){const nt=v[_t],Et=S[_t];nt!==null&&Et!==void 0&&Et.update(nt,tt,c||o)}ut&&ut(j,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const Jt=new hm;Jt.setAnimationLoop(It),this.setAnimationLoop=function(j){ut=j},this.dispose=function(){}}}const br=new Ei,gM=new Re;function _M(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,lm(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),S=y.envMap,v=y.envMapRotation;S&&(m.envMap.value=S,br.copy(v),br.x*=-1,br.y*=-1,br.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),m.envMapRotation.value.setFromMatrix4(gM.makeRotationFromEuler(br)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function vM(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const v=S.program;n.uniformBlockBinding(y,v)}function c(y,S){let v=i[y.id];v===void 0&&(g(y),v=u(y),i[y.id]=v,y.addEventListener("dispose",m));const A=S.program;n.updateUBOMapping(y,A);const w=t.render.frame;s[y.id]!==w&&(h(y),s[y.id]=w)}function u(y){const S=d();y.__bindingPointIndex=S;const v=r.createBuffer(),A=y.__size,w=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,v),v}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const S=i[y.id],v=y.uniforms,A=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let w=0,E=v.length;w<E;w++){const R=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,x=R.length;M<x;M++){const P=R[M];if(f(P,w,M,A)===!0){const L=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let q=0;q<U.length;q++){const X=U[q],Y=_(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,L+k,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,k),k+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,S,v,A){const w=y.value,E=S+"_"+v;if(A[E]===void 0)return typeof w=="number"||typeof w=="boolean"?A[E]=w:A[E]=w.clone(),!0;{const R=A[E];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return A[E]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(y){const S=y.uniforms;let v=0;const A=16;for(let E=0,R=S.length;E<R;E++){const M=Array.isArray(S[E])?S[E]:[S[E]];for(let x=0,P=M.length;x<P;x++){const L=M[x],U=Array.isArray(L.value)?L.value:[L.value];for(let k=0,q=U.length;k<q;k++){const X=U[k],Y=_(X),V=v%A,et=V%Y.boundary,D=V+et;v+=et,D!==0&&A-D<Y.storage&&(v+=A-D),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=Y.storage}}}const w=v%A;return w>0&&(v+=A-w),y.__size=v,y.__cache={},this}function _(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class ch{constructor(t={}){const{canvas:e=a0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=ur,this.toneMappingExposure=1;const v=this;let A=!1,w=0,E=0,R=null,M=-1,x=null;const P=new xe,L=new xe;let U=null;const k=new Yt(0);let q=0,X=e.width,Y=e.height,V=1,et=null,D=null;const ut=new xe(0,0,X,Y),It=new xe(0,0,X,Y);let Jt=!1;const j=new ah;let tt=!1,_t=!1;const nt=new Re,Et=new Re,Rt=new O,Ht=new xe,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function Lt(){return R===null?V:1}let N=n;function ye(T,F){return e.getContext(T,F)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qu}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),N===null){const F="webgl2";if(N=ye(F,T),N===null)throw ye(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ot,z,bt,oe,Ct,C,b,G,Q,J,Z,ht,at,pt,Wt,it,ot,Ut,Dt,xt,qt,Ft,le,I;function ct(){Ot=new by(N),Ot.init(),Ft=new cM(N,Ot),z=new vy(N,Ot,t,Ft),bt=new oM(N,Ot),z.reverseDepthBuffer&&h&&bt.buffers.depth.setReversed(!0),oe=new Ay(N),Ct=new XS,C=new lM(N,Ot,bt,Ct,z,Ft,oe),b=new yy(v),G=new Ey(v),Q=new U0(N),le=new gy(N,Q),J=new Ty(N,Q,oe,le),Z=new Cy(N,J,Q,oe),Dt=new Ry(N,z,C),it=new xy(Ct),ht=new WS(v,b,G,Ot,z,le,it),at=new _M(v,Ct),pt=new qS,Wt=new QS(Ot),Ut=new my(v,b,G,bt,Z,f,l),ot=new rM(v,Z,z),I=new vM(N,oe,z,bt),xt=new _y(N,Ot,oe),qt=new wy(N,Ot,oe),oe.programs=ht.programs,v.capabilities=z,v.extensions=Ot,v.properties=Ct,v.renderLists=pt,v.shadowMap=ot,v.state=bt,v.info=oe}ct();const $=new mM(v,N);this.xr=$,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=Ot.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ot.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(X,Y,!1))},this.getSize=function(T){return T.set(X,Y)},this.setSize=function(T,F,H=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,Y=F,e.width=Math.floor(T*V),e.height=Math.floor(F*V),H===!0&&(e.style.width=T+"px",e.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(X*V,Y*V).floor()},this.setDrawingBufferSize=function(T,F,H){X=T,Y=F,V=H,e.width=Math.floor(T*H),e.height=Math.floor(F*H),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(ut)},this.setViewport=function(T,F,H,W){T.isVector4?ut.set(T.x,T.y,T.z,T.w):ut.set(T,F,H,W),bt.viewport(P.copy(ut).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(It)},this.setScissor=function(T,F,H,W){T.isVector4?It.set(T.x,T.y,T.z,T.w):It.set(T,F,H,W),bt.scissor(L.copy(It).multiplyScalar(V).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(T){bt.setScissorTest(Jt=T)},this.setOpaqueSort=function(T){et=T},this.setTransparentSort=function(T){D=T},this.getClearColor=function(T){return T.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(T=!0,F=!0,H=!0){let W=0;if(T){let B=!1;if(R!==null){const rt=R.texture.format;B=rt===sh||rt===rh||rt===ih}if(B){const rt=R.texture.type,st=rt===Gi||rt===qr||rt===Oo||rt===Hs||rt===eh||rt===nh,ft=Ut.getClearColor(),yt=Ut.getClearAlpha(),kt=ft.r,Gt=ft.g,Mt=ft.b;st?(g[0]=kt,g[1]=Gt,g[2]=Mt,g[3]=yt,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=kt,_[1]=Gt,_[2]=Mt,_[3]=yt,N.clearBufferiv(N.COLOR,0,_))}else W|=N.COLOR_BUFFER_BIT}F&&(W|=N.DEPTH_BUFFER_BIT),H&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),pt.dispose(),Wt.dispose(),Ct.dispose(),b.dispose(),G.dispose(),Z.dispose(),le.dispose(),I.dispose(),ht.dispose(),$.dispose(),$.removeEventListener("sessionstart",mt),$.removeEventListener("sessionend",Vt),wt.stop()};function K(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=oe.autoReset,F=ot.enabled,H=ot.autoUpdate,W=ot.needsUpdate,B=ot.type;ct(),oe.autoReset=T,ot.enabled=F,ot.autoUpdate=H,ot.needsUpdate=W,ot.type=B}function dt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Bt(T){const F=T.target;F.removeEventListener("dispose",Bt),ue(F)}function ue(T){Fe(T),Ct.remove(T)}function Fe(T){const F=Ct.get(T).programs;F!==void 0&&(F.forEach(function(H){ht.releaseProgram(H)}),T.isShaderMaterial&&ht.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,H,W,B,rt){F===null&&(F=Qt);const st=B.isMesh&&B.matrixWorld.determinant()<0,ft=In(T,F,H,W,B);bt.setMaterial(W,st);let yt=H.index,kt=1;if(W.wireframe===!0){if(yt=J.getWireframeAttribute(H),yt===void 0)return;kt=2}const Gt=H.drawRange,Mt=H.attributes.position;let Xt=Gt.start*kt,he=(Gt.start+Gt.count)*kt;rt!==null&&(Xt=Math.max(Xt,rt.start*kt),he=Math.min(he,(rt.start+rt.count)*kt)),yt!==null?(Xt=Math.max(Xt,0),he=Math.min(he,yt.count)):Mt!=null&&(Xt=Math.max(Xt,0),he=Math.min(he,Mt.count));const fe=he-Xt;if(fe<0||fe===1/0)return;le.setup(B,W,ft,H,yt);let Le,pe=xt;if(yt!==null&&(Le=Q.get(yt),pe=qt,pe.setIndex(Le)),B.isMesh)W.wireframe===!0?(bt.setLineWidth(W.wireframeLinewidth*Lt()),pe.setMode(N.LINES)):pe.setMode(N.TRIANGLES);else if(B.isLine){let Pt=W.linewidth;Pt===void 0&&(Pt=1),bt.setLineWidth(Pt*Lt()),B.isLineSegments?pe.setMode(N.LINES):B.isLineLoop?pe.setMode(N.LINE_LOOP):pe.setMode(N.LINE_STRIP)}else B.isPoints?pe.setMode(N.POINTS):B.isSprite&&pe.setMode(N.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)pe.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))pe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Pt=B._multiDrawStarts,Ti=B._multiDrawCounts,me=B._multiDrawCount,si=yt?Q.get(yt).bytesPerElement:1,Kr=Ct.get(W).currentProgram.getUniforms();for(let Un=0;Un<me;Un++)Kr.setValue(N,"_gl_DrawID",Un),pe.render(Pt[Un]/si,Ti[Un])}else if(B.isInstancedMesh)pe.renderInstances(Xt,fe,B.count);else if(H.isInstancedBufferGeometry){const Pt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ti=Math.min(H.instanceCount,Pt);pe.renderInstances(Xt,fe,Ti)}else pe.render(Xt,fe)};function vt(T,F,H){T.transparent===!0&&T.side===Ni&&T.forceSinglePass===!1?(T.side=Ln,T.needsUpdate=!0,Se(T,F,H),T.side=mr,T.needsUpdate=!0,Se(T,F,H),T.side=Ni):Se(T,F,H)}this.compile=function(T,F,H=null){H===null&&(H=T),p=Wt.get(H),p.init(F),S.push(p),H.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),T!==H&&T.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const W=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const rt=B.material;if(rt)if(Array.isArray(rt))for(let st=0;st<rt.length;st++){const ft=rt[st];vt(ft,H,B),W.add(ft)}else vt(rt,H,B),W.add(rt)}),S.pop(),p=null,W},this.compileAsync=function(T,F,H=null){const W=this.compile(T,F,H);return new Promise(B=>{function rt(){if(W.forEach(function(st){Ct.get(st).currentProgram.isReady()&&W.delete(st)}),W.size===0){B(T);return}setTimeout(rt,10)}Ot.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Tt=null;function $t(T){Tt&&Tt(T)}function mt(){wt.stop()}function Vt(){wt.start()}const wt=new hm;wt.setAnimationLoop($t),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(T){Tt=T,$.setAnimationLoop(T),T===null?wt.stop():wt.start()},$.addEventListener("sessionstart",mt),$.addEventListener("sessionend",Vt),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(F),F=$.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,F,R),p=Wt.get(T,S.length),p.init(F),S.push(p),Et.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),j.setFromProjectionMatrix(Et),_t=this.localClippingEnabled,tt=it.init(this.clippingPlanes,_t),m=pt.get(T,y.length),m.init(),y.push(m),$.enabled===!0&&$.isPresenting===!0){const rt=v.xr.getDepthSensingMesh();rt!==null&&zt(rt,F,-1/0,v.sortObjects)}zt(T,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(et,D),Nt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Nt&&Ut.addToRenderList(m,T),this.info.render.frame++,tt===!0&&it.beginShadows();const H=p.state.shadowsArray;ot.render(H,T,F),tt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,B=m.transmissive;if(p.setupLights(),F.isArrayCamera){const rt=F.cameras;if(B.length>0)for(let st=0,ft=rt.length;st<ft;st++){const yt=rt[st];ne(W,B,T,yt)}Nt&&Ut.render(T);for(let st=0,ft=rt.length;st<ft;st++){const yt=rt[st];Be(m,T,yt,yt.viewport)}}else B.length>0&&ne(W,B,T,F),Nt&&Ut.render(T),Be(m,T,F);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(v,T,F),le.resetDefaultState(),M=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],tt===!0&&it.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function zt(T,F,H,W){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){W&&Ht.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Et);const st=Z.update(T),ft=T.material;ft.visible&&m.push(T,st,ft,H,Ht.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||j.intersectsObject(T))){const st=Z.update(T),ft=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ht.copy(T.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),Ht.copy(st.boundingSphere.center)),Ht.applyMatrix4(T.matrixWorld).applyMatrix4(Et)),Array.isArray(ft)){const yt=st.groups;for(let kt=0,Gt=yt.length;kt<Gt;kt++){const Mt=yt[kt],Xt=ft[Mt.materialIndex];Xt&&Xt.visible&&m.push(T,st,Xt,H,Ht.z,Mt)}}else ft.visible&&m.push(T,st,ft,H,Ht.z,null)}}const rt=T.children;for(let st=0,ft=rt.length;st<ft;st++)zt(rt[st],F,H,W)}function Be(T,F,H,W){const B=T.opaque,rt=T.transmissive,st=T.transparent;p.setupLightsView(H),tt===!0&&it.setGlobalState(v.clippingPlanes,H),W&&bt.viewport(P.copy(W)),B.length>0&&Te(B,F,H),rt.length>0&&Te(rt,F,H),st.length>0&&Te(st,F,H),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function ne(T,F,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new $r(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?Ho:Gi,minFilter:Fr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));const rt=p.state.transmissionRenderTarget[W.id],st=W.viewport||P;rt.setSize(st.z,st.w);const ft=v.getRenderTarget();v.setRenderTarget(rt),v.getClearColor(k),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),Nt&&Ut.render(H);const yt=v.toneMapping;v.toneMapping=ur;const kt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),tt===!0&&it.setGlobalState(v.clippingPlanes,W),Te(T,H,W),C.updateMultisampleRenderTarget(rt),C.updateRenderTargetMipmap(rt),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Mt=0,Xt=F.length;Mt<Xt;Mt++){const he=F[Mt],fe=he.object,Le=he.geometry,pe=he.material,Pt=he.group;if(pe.side===Ni&&fe.layers.test(W.layers)){const Ti=pe.side;pe.side=Ln,pe.needsUpdate=!0,Ye(fe,H,W,Le,pe,Pt),pe.side=Ti,pe.needsUpdate=!0,Gt=!0}}Gt===!0&&(C.updateMultisampleRenderTarget(rt),C.updateRenderTargetMipmap(rt))}v.setRenderTarget(ft),v.setClearColor(k,q),kt!==void 0&&(W.viewport=kt),v.toneMapping=yt}function Te(T,F,H){const W=F.isScene===!0?F.overrideMaterial:null;for(let B=0,rt=T.length;B<rt;B++){const st=T[B],ft=st.object,yt=st.geometry,kt=W===null?st.material:W,Gt=st.group;ft.layers.test(H.layers)&&Ye(ft,F,H,yt,kt,Gt)}}function Ye(T,F,H,W,B,rt){T.onBeforeRender(v,F,H,W,B,rt),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(v,F,H,W,T,rt),B.transparent===!0&&B.side===Ni&&B.forceSinglePass===!1?(B.side=Ln,B.needsUpdate=!0,v.renderBufferDirect(H,F,W,B,T,rt),B.side=mr,B.needsUpdate=!0,v.renderBufferDirect(H,F,W,B,T,rt),B.side=Ni):v.renderBufferDirect(H,F,W,B,T,rt),T.onAfterRender(v,F,H,W,B,rt)}function Se(T,F,H){F.isScene!==!0&&(F=Qt);const W=Ct.get(T),B=p.state.lights,rt=p.state.shadowsArray,st=B.state.version,ft=ht.getParameters(T,B.state,rt,F,H),yt=ht.getProgramCacheKey(ft);let kt=W.programs;W.environment=T.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(T.isMeshStandardMaterial?G:b).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,kt===void 0&&(T.addEventListener("dispose",Bt),kt=new Map,W.programs=kt);let Gt=kt.get(yt);if(Gt!==void 0){if(W.currentProgram===Gt&&W.lightsStateVersion===st)return de(T,ft),Gt}else ft.uniforms=ht.getUniforms(T),T.onBeforeCompile(ft,v),Gt=ht.acquireProgram(ft,yt),kt.set(yt,Gt),W.uniforms=ft.uniforms;const Mt=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Mt.clippingPlanes=it.uniform),de(T,ft),W.needsLights=fn(T),W.lightsStateVersion=st,W.needsLights&&(Mt.ambientLightColor.value=B.state.ambient,Mt.lightProbe.value=B.state.probe,Mt.directionalLights.value=B.state.directional,Mt.directionalLightShadows.value=B.state.directionalShadow,Mt.spotLights.value=B.state.spot,Mt.spotLightShadows.value=B.state.spotShadow,Mt.rectAreaLights.value=B.state.rectArea,Mt.ltc_1.value=B.state.rectAreaLTC1,Mt.ltc_2.value=B.state.rectAreaLTC2,Mt.pointLights.value=B.state.point,Mt.pointLightShadows.value=B.state.pointShadow,Mt.hemisphereLights.value=B.state.hemi,Mt.directionalShadowMap.value=B.state.directionalShadowMap,Mt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Mt.spotShadowMap.value=B.state.spotShadowMap,Mt.spotLightMatrix.value=B.state.spotLightMatrix,Mt.spotLightMap.value=B.state.spotLightMap,Mt.pointShadowMap.value=B.state.pointShadowMap,Mt.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Gt,W.uniformsList=null,Gt}function Me(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=ja.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function de(T,F){const H=Ct.get(T);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function In(T,F,H,W,B){F.isScene!==!0&&(F=Qt),C.resetTextureUnits();const rt=F.fog,st=W.isMeshStandardMaterial?F.environment:null,ft=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ws,yt=(W.isMeshStandardMaterial?G:b).get(W.envMap||st),kt=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Gt=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Mt=!!H.morphAttributes.position,Xt=!!H.morphAttributes.normal,he=!!H.morphAttributes.color;let fe=ur;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(fe=v.toneMapping);const Le=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,pe=Le!==void 0?Le.length:0,Pt=Ct.get(W),Ti=p.state.lights;if(tt===!0&&(_t===!0||T!==x)){const $n=T===x&&W.id===M;it.setState(W,T,$n)}let me=!1;W.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Ti.state.version||Pt.outputColorSpace!==ft||B.isBatchedMesh&&Pt.batching===!1||!B.isBatchedMesh&&Pt.batching===!0||B.isBatchedMesh&&Pt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Pt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Pt.instancing===!1||!B.isInstancedMesh&&Pt.instancing===!0||B.isSkinnedMesh&&Pt.skinning===!1||!B.isSkinnedMesh&&Pt.skinning===!0||B.isInstancedMesh&&Pt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Pt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Pt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Pt.instancingMorph===!1&&B.morphTexture!==null||Pt.envMap!==yt||W.fog===!0&&Pt.fog!==rt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==it.numPlanes||Pt.numIntersection!==it.numIntersection)||Pt.vertexAlphas!==kt||Pt.vertexTangents!==Gt||Pt.morphTargets!==Mt||Pt.morphNormals!==Xt||Pt.morphColors!==he||Pt.toneMapping!==fe||Pt.morphTargetsCount!==pe)&&(me=!0):(me=!0,Pt.__version=W.version);let si=Pt.currentProgram;me===!0&&(si=Se(W,F,B));let Kr=!1,Un=!1,qs=!1;const Ae=si.getUniforms(),fi=Pt.uniforms;if(bt.useProgram(si.program)&&(Kr=!0,Un=!0,qs=!0),W.id!==M&&(M=W.id,Un=!0),Kr||x!==T){bt.buffers.depth.getReversed()?(nt.copy(T.projectionMatrix),c0(nt),u0(nt),Ae.setValue(N,"projectionMatrix",nt)):Ae.setValue(N,"projectionMatrix",T.projectionMatrix),Ae.setValue(N,"viewMatrix",T.matrixWorldInverse);const Wi=Ae.map.cameraPosition;Wi!==void 0&&Wi.setValue(N,Rt.setFromMatrixPosition(T.matrixWorld)),z.logarithmicDepthBuffer&&Ae.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ae.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,Un=!0,qs=!0)}if(B.isSkinnedMesh){Ae.setOptional(N,B,"bindMatrix"),Ae.setOptional(N,B,"bindMatrixInverse");const $n=B.skeleton;$n&&($n.boneTexture===null&&$n.computeBoneTexture(),Ae.setValue(N,"boneTexture",$n.boneTexture,C))}B.isBatchedMesh&&(Ae.setOptional(N,B,"batchingTexture"),Ae.setValue(N,"batchingTexture",B._matricesTexture,C),Ae.setOptional(N,B,"batchingIdTexture"),Ae.setValue(N,"batchingIdTexture",B._indirectTexture,C),Ae.setOptional(N,B,"batchingColorTexture"),B._colorsTexture!==null&&Ae.setValue(N,"batchingColorTexture",B._colorsTexture,C));const $s=H.morphAttributes;if(($s.position!==void 0||$s.normal!==void 0||$s.color!==void 0)&&Dt.update(B,H,si),(Un||Pt.receiveShadow!==B.receiveShadow)&&(Pt.receiveShadow=B.receiveShadow,Ae.setValue(N,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(fi.envMap.value=yt,fi.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(fi.envMapIntensity.value=F.environmentIntensity),Un&&(Ae.setValue(N,"toneMappingExposure",v.toneMappingExposure),Pt.needsLights&&we(fi,qs),rt&&W.fog===!0&&at.refreshFogUniforms(fi,rt),at.refreshMaterialUniforms(fi,W,V,Y,p.state.transmissionRenderTarget[T.id]),ja.upload(N,Me(Pt),fi,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ja.upload(N,Me(Pt),fi,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ae.setValue(N,"center",B.center),Ae.setValue(N,"modelViewMatrix",B.modelViewMatrix),Ae.setValue(N,"normalMatrix",B.normalMatrix),Ae.setValue(N,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const $n=W.uniformsGroups;for(let Wi=0,Xi=$n.length;Wi<Xi;Wi++){const _h=$n[Wi];I.update(_h,si),I.bind(_h,si)}}return si}function we(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function fn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,F,H){Ct.get(T.texture).__webglTexture=F,Ct.get(T.depthTexture).__webglTexture=H;const W=Ct.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const H=Ct.get(T);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,H=0){R=T,w=F,E=H;let W=!0,B=null,rt=!1,st=!1;if(T){const yt=Ct.get(T);if(yt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(N.FRAMEBUFFER,null),W=!1;else if(yt.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(yt.__hasExternalTextures)C.rebindTextures(T,Ct.get(T.texture).__webglTexture,Ct.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Mt=T.depthTexture;if(yt.__boundDepthTexture!==Mt){if(Mt!==null&&Ct.has(Mt)&&(T.width!==Mt.image.width||T.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}const kt=T.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(st=!0);const Gt=Ct.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Gt[F])?B=Gt[F][H]:B=Gt[F],rt=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?B=Ct.get(T).__webglMultisampledFramebuffer:Array.isArray(Gt)?B=Gt[H]:B=Gt,P.copy(T.viewport),L.copy(T.scissor),U=T.scissorTest}else P.copy(ut).multiplyScalar(V).floor(),L.copy(It).multiplyScalar(V).floor(),U=Jt;if(bt.bindFramebuffer(N.FRAMEBUFFER,B)&&W&&bt.drawBuffers(T,B),bt.viewport(P),bt.scissor(L),bt.setScissorTest(U),rt){const yt=Ct.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,yt.__webglTexture,H)}else if(st){const yt=Ct.get(T.texture),kt=F||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,yt.__webglTexture,H||0,kt)}M=-1},this.readRenderTargetPixels=function(T,F,H,W,B,rt,st){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=Ct.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&st!==void 0&&(ft=ft[st]),ft){bt.bindFramebuffer(N.FRAMEBUFFER,ft);try{const yt=T.texture,kt=yt.format,Gt=yt.type;if(!z.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-W&&H>=0&&H<=T.height-B&&N.readPixels(F,H,W,B,Ft.convert(kt),Ft.convert(Gt),rt)}finally{const yt=R!==null?Ct.get(R).__webglFramebuffer:null;bt.bindFramebuffer(N.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(T,F,H,W,B,rt,st){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=Ct.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&st!==void 0&&(ft=ft[st]),ft){const yt=T.texture,kt=yt.format,Gt=yt.type;if(!z.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-W&&H>=0&&H<=T.height-B){bt.bindFramebuffer(N.FRAMEBUFFER,ft);const Mt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Mt),N.bufferData(N.PIXEL_PACK_BUFFER,rt.byteLength,N.STREAM_READ),N.readPixels(F,H,W,B,Ft.convert(kt),Ft.convert(Gt),0);const Xt=R!==null?Ct.get(R).__webglFramebuffer:null;bt.bindFramebuffer(N.FRAMEBUFFER,Xt);const he=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await l0(N,he,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Mt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,rt),N.deleteBuffer(Mt),N.deleteSync(he),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,H=0){T.isTexture!==!0&&(fo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);const W=Math.pow(2,-H),B=Math.floor(T.image.width*W),rt=Math.floor(T.image.height*W),st=F!==null?F.x:0,ft=F!==null?F.y:0;C.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,st,ft,B,rt),bt.unbindTexture()},this.copyTextureToTexture=function(T,F,H=null,W=null,B=0){T.isTexture!==!0&&(fo("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],F=arguments[2],B=arguments[3]||0,H=null);let rt,st,ft,yt,kt,Gt,Mt,Xt,he;const fe=T.isCompressedTexture?T.mipmaps[B]:T.image;H!==null?(rt=H.max.x-H.min.x,st=H.max.y-H.min.y,ft=H.isBox3?H.max.z-H.min.z:1,yt=H.min.x,kt=H.min.y,Gt=H.isBox3?H.min.z:0):(rt=fe.width,st=fe.height,ft=fe.depth||1,yt=0,kt=0,Gt=0),W!==null?(Mt=W.x,Xt=W.y,he=W.z):(Mt=0,Xt=0,he=0);const Le=Ft.convert(F.format),pe=Ft.convert(F.type);let Pt;F.isData3DTexture?(C.setTexture3D(F,0),Pt=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(C.setTexture2DArray(F,0),Pt=N.TEXTURE_2D_ARRAY):(C.setTexture2D(F,0),Pt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const Ti=N.getParameter(N.UNPACK_ROW_LENGTH),me=N.getParameter(N.UNPACK_IMAGE_HEIGHT),si=N.getParameter(N.UNPACK_SKIP_PIXELS),Kr=N.getParameter(N.UNPACK_SKIP_ROWS),Un=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,fe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,fe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,yt),N.pixelStorei(N.UNPACK_SKIP_ROWS,kt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Gt);const qs=T.isDataArrayTexture||T.isData3DTexture,Ae=F.isDataArrayTexture||F.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const fi=Ct.get(T),$s=Ct.get(F),$n=Ct.get(fi.__renderTarget),Wi=Ct.get($s.__renderTarget);bt.bindFramebuffer(N.READ_FRAMEBUFFER,$n.__webglFramebuffer),bt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Xi=0;Xi<ft;Xi++)qs&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ct.get(T).__webglTexture,B,Gt+Xi),T.isDepthTexture?(Ae&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ct.get(F).__webglTexture,B,he+Xi),N.blitFramebuffer(yt,kt,rt,st,Mt,Xt,rt,st,N.DEPTH_BUFFER_BIT,N.NEAREST)):Ae?N.copyTexSubImage3D(Pt,B,Mt,Xt,he+Xi,yt,kt,rt,st):N.copyTexSubImage2D(Pt,B,Mt,Xt,he+Xi,yt,kt,rt,st);bt.bindFramebuffer(N.READ_FRAMEBUFFER,null),bt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ae?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Pt,B,Mt,Xt,he,rt,st,ft,Le,pe,fe.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(Pt,B,Mt,Xt,he,rt,st,ft,Le,fe.data):N.texSubImage3D(Pt,B,Mt,Xt,he,rt,st,ft,Le,pe,fe):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,B,Mt,Xt,rt,st,Le,pe,fe.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,B,Mt,Xt,fe.width,fe.height,Le,fe.data):N.texSubImage2D(N.TEXTURE_2D,B,Mt,Xt,rt,st,Le,pe,fe);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ti),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,me),N.pixelStorei(N.UNPACK_SKIP_PIXELS,si),N.pixelStorei(N.UNPACK_SKIP_ROWS,Kr),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Un),B===0&&F.generateMipmaps&&N.generateMipmap(Pt),bt.unbindTexture()},this.copyTextureToTexture3D=function(T,F,H=null,W=null,B=0){return T.isTexture!==!0&&(fo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,T=arguments[2],F=arguments[3],B=arguments[4]||0),fo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,F,H,W,B)},this.initRenderTarget=function(T){Ct.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),bt.unbindTexture()},this.resetState=function(){w=0,E=0,R=null,bt.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}}class uh{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Yt(t),this.density=e}clone(){return new uh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class hh extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ko extends Zr{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ul=new O,hl=new O,ef=new Re,io=new oh,Aa=new Xo,uc=new O,nf=new O;class Za extends en{constructor(t=new Xe,e=new ko){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)ul.fromBufferAttribute(e,i-1),hl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ul.distanceTo(hl);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(i),Aa.radius+=s,t.ray.intersectsSphere(Aa)===!1)return;ef.copy(i).invert(),io.copy(t.ray).applyMatrix4(ef);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),y=u.getX(_+1),S=Ra(this,t,io,l,p,y);S&&e.push(S)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=Ra(this,t,io,l,_,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=Ra(this,t,io,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Ra(this,t,io,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ra(r,t,e,n,i,s){const o=r.geometry.attributes.position;if(ul.fromBufferAttribute(o,i),hl.fromBufferAttribute(o,s),e.distanceSqToSegment(ul,hl,uc,nf)>n)return;uc.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(uc);if(!(l<t.near||l>t.far))return{distance:l,point:nf.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const rf=new O,sf=new O;class dl extends Za{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)rf.fromBufferAttribute(e,i),sf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+rf.distanceTo(sf);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vm extends Zr{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const of=new Re,wu=new oh,Ca=new Xo,Pa=new O;class xM extends en{constructor(t=new Xe,e=new vm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(i),Ca.radius+=s,t.ray.intersectsSphere(Ca)===!1)return;of.copy(i).invert(),wu.copy(t.ray).applyMatrix4(of);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=h,_=f;g<_;g++){const m=c.getX(g);Pa.fromBufferAttribute(d,m),af(Pa,m,l,i,t,e,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,_=f;g<_;g++)Pa.fromBufferAttribute(d,g),af(Pa,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function af(r,t,e,n,i,s,o){const a=wu.distanceSqToPoint(r);if(a<e){const l=new O;wu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Dr extends Xe{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],d=[],h=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Ce(d,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(f,2));function y(){const v=new O,A=new O;let w=0;const E=(e-t)/n;for(let R=0;R<=s;R++){const M=[],x=R/s,P=x*(e-t)+t;for(let L=0;L<=i;L++){const U=L/i,k=U*l+a,q=Math.sin(k),X=Math.cos(k);A.x=P*q,A.y=-x*n+m,A.z=P*X,d.push(A.x,A.y,A.z),v.set(q,E,X).normalize(),h.push(v.x,v.y,v.z),f.push(U,1-x),M.push(g++)}_.push(M)}for(let R=0;R<i;R++)for(let M=0;M<s;M++){const x=_[M][R],P=_[M+1][R],L=_[M+1][R+1],U=_[M][R+1];(t>0||M!==0)&&(u.push(x,P,U),w+=3),(e>0||M!==s-1)&&(u.push(P,L,U),w+=3)}c.addGroup(p,w,0),p+=w}function S(v){const A=g,w=new Kt,E=new O;let R=0;const M=v===!0?t:e,x=v===!0?1:-1;for(let L=1;L<=i;L++)d.push(0,m*x,0),h.push(0,x,0),f.push(.5,.5),g++;const P=g;for(let L=0;L<=i;L++){const k=L/i*l+a,q=Math.cos(k),X=Math.sin(k);E.x=M*X,E.y=m*x,E.z=M*q,d.push(E.x,E.y,E.z),h.push(0,x,0),w.x=q*.5+.5,w.y=X*.5*x+.5,f.push(w.x,w.y),g++}for(let L=0;L<i;L++){const U=A+L,k=P+L;v===!0?u.push(k,k+1,U):u.push(k+1,k,U),R+=3}c.addGroup(p,R,v===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class dh extends Xe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new Ce(s,3)),this.setAttribute("normal",new Ce(s.slice(),3)),this.setAttribute("uv",new Ce(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const S=new O,v=new O,A=new O;for(let w=0;w<e.length;w+=3)f(e[w+0],S),f(e[w+1],v),f(e[w+2],A),l(S,v,A,y)}function l(y,S,v,A){const w=A+1,E=[];for(let R=0;R<=w;R++){E[R]=[];const M=y.clone().lerp(v,R/w),x=S.clone().lerp(v,R/w),P=w-R;for(let L=0;L<=P;L++)L===0&&R===w?E[R][L]=M:E[R][L]=M.clone().lerp(x,L/P)}for(let R=0;R<w;R++)for(let M=0;M<2*(w-R)-1;M++){const x=Math.floor(M/2);M%2===0?(h(E[R][x+1]),h(E[R+1][x]),h(E[R][x])):(h(E[R][x+1]),h(E[R+1][x+1]),h(E[R+1][x]))}}function c(y){const S=new O;for(let v=0;v<s.length;v+=3)S.x=s[v+0],S.y=s[v+1],S.z=s[v+2],S.normalize().multiplyScalar(y),s[v+0]=S.x,s[v+1]=S.y,s[v+2]=S.z}function u(){const y=new O;for(let S=0;S<s.length;S+=3){y.x=s[S+0],y.y=s[S+1],y.z=s[S+2];const v=m(y)/2/Math.PI+.5,A=p(y)/Math.PI+.5;o.push(v,1-A)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){const S=o[y+0],v=o[y+2],A=o[y+4],w=Math.max(S,v,A),E=Math.min(S,v,A);w>.9&&E<.1&&(S<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),A<.2&&(o[y+4]+=1))}}function h(y){s.push(y.x,y.y,y.z)}function f(y,S){const v=y*3;S.x=t[v+0],S.y=t[v+1],S.z=t[v+2]}function g(){const y=new O,S=new O,v=new O,A=new O,w=new Kt,E=new Kt,R=new Kt;for(let M=0,x=0;M<s.length;M+=9,x+=6){y.set(s[M+0],s[M+1],s[M+2]),S.set(s[M+3],s[M+4],s[M+5]),v.set(s[M+6],s[M+7],s[M+8]),w.set(o[x+0],o[x+1]),E.set(o[x+2],o[x+3]),R.set(o[x+4],o[x+5]),A.copy(y).add(S).add(v).divideScalar(3);const P=m(A);_(w,x+0,y,P),_(E,x+2,S,P),_(R,x+4,v,P)}}function _(y,S,v,A){A<0&&y.x===1&&(o[S]=y.x-1),v.x===0&&v.z===0&&(o[S]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dh(t.vertices,t.indices,t.radius,t.details)}}class fh extends dh{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new fh(t.radius,t.detail)}}const La=new O,Da=new O,hc=new O,Ia=new ti;class xm extends Xe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),s=Math.cos($a*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=Ia;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Ia.getNormal(hc),d[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let y=0;y<3;y++){const S=(y+1)%3,v=d[y],A=d[S],w=Ia[u[y]],E=Ia[u[S]],R=`${v}_${A}`,M=`${A}_${v}`;M in h&&h[M]?(hc.dot(h[M].normal)<=s&&(f.push(w.x,w.y,w.z),f.push(E.x,E.y,E.z)),h[M]=null):R in h||(h[R]={index0:c[y],index1:c[S],normal:hc.clone()})}}for(const g in h)if(h[g]){const{index0:_,index1:m}=h[g];La.fromBufferAttribute(a,_),Da.fromBufferAttribute(a,m),f.push(La.x,La.y,La.z),f.push(Da.x,Da.y,Da.z)}this.setAttribute("position",new Ce(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ph extends Xe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new O,h=new O,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],S=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const w=A/e;d.x=-t*Math.cos(i+w*s)*Math.sin(o+S*a),d.y=t*Math.cos(o+S*a),d.z=t*Math.sin(i+w*s)*Math.sin(o+S*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(w+v,1-S),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const S=u[p][y+1],v=u[p][y],A=u[p+1][y],w=u[p+1][y+1];(p!==0||o>0)&&f.push(S,v,w),(p!==n-1||l<Math.PI)&&f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ph(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class fl extends Xe{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new O,d=new O,h=new O;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*s,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,y=(i+1)*f+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new Ce(a,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class yM extends Xe{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new O,s=new O;if(t.index!==null){const o=t.attributes.position,a=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const d=l[c],h=d.start,f=d.count;for(let g=h,_=h+f;g<_;g+=3)for(let m=0;m<3;m++){const p=a.getX(g+m),y=a.getX(g+(m+1)%3);i.fromBufferAttribute(o,p),s.fromBufferAttribute(o,y),lf(i,s,n)===!0&&(e.push(i.x,i.y,i.z),e.push(s.x,s.y,s.z))}}}else{const o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,d=3*a+(c+1)%3;i.fromBufferAttribute(o,u),s.fromBufferAttribute(o,d),lf(i,s,n)===!0&&(e.push(i.x,i.y,i.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ce(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function lf(r,t,e){const n=`${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}class ui extends Zr{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jp,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const cf={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class SM{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const MM=new SM;class mh{constructor(t){this.manager=t!==void 0?t:MM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}mh.DEFAULT_MATERIAL_NAME="__DEFAULT";class EM extends mh{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=cf.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Bo("img");function l(){u(),cf.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(d){u(),i&&i(d),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class bM extends mh{constructor(t){super(t)}load(t,e,n,i){const s=new Mn,o=new EM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class gh extends en{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const dc=new Re,uf=new O,hf=new O;class ym{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ah,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;uf.setFromMatrixPosition(t.matrixWorld),e.position.copy(uf),hf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hf),e.updateMatrixWorld(),dc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const df=new Re,ro=new O,fc=new O;class TM extends ym{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Kt(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ro.setFromMatrixPosition(t.matrixWorld),n.position.copy(ro),fc.copy(n.position),fc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(fc),n.updateMatrixWorld(),i.makeTranslation(-ro.x,-ro.y,-ro.z),df.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(df)}}class ff extends gh{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new TM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class wM extends ym{constructor(){super(new dm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sm extends gh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new wM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Mm extends gh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Em{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=pf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function pf(){return performance.now()}class AM extends dl{constructor(t=10,e=10,n=4473924,i=8947848){n=new Yt(n),i=new Yt(i);const s=e/2,o=t/e,a=t/2,l=[],c=[];for(let h=0,f=0,g=-a;h<=e;h++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=h===s?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const u=new Xe;u.setAttribute("position",new Ce(l,3)),u.setAttribute("color",new Ce(c,3));const d=new ko({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qu);const mf={uniforms:{uLightDir:{value:new O(3,5,4).normalize()},uColor:{value:new Yt(16053493)},uRimColor:{value:new Yt(16720435)}},vertexShader:`
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec2 vUv;
    varying vec4 vScreenPos;

    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      gl_Position = projectionMatrix * mvPosition;
      vScreenPos = gl_Position;
    }
  `,fragmentShader:`
    uniform vec3 uLightDir;
    uniform vec3 uColor;
    uniform vec3 uRimColor;
    uniform float uHatchDensity;
    uniform float uTime;

    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec2 vUv;
    varying vec4 vScreenPos;

    void main() {
      vec3 normal = normalize(vNormal);
      vec3 light = normalize(uLightDir);
      vec3 viewDir = normalize(vViewPosition);

      // Diffuse N.L
      float nDotL = dot(normal, light);

      // Screen-space coordinates for ink strokes
      vec2 pixelPos = gl_FragCoord.xy;

      // Surface contour angle from view-space normal
      float surfAngle = atan(normal.y, normal.x + 0.001);
      float strokeAngle = surfAngle + 1.5708; // perpendicular to normal, following geometric contour

      // Organic hand-drawn pen wobble & irregular stroke spacing
      float wobble = sin(pixelPos.y * 0.05 + uTime * 0.4) * 2.2 + cos(pixelPos.x * 0.04) * 1.5;
      float cosA = cos(strokeAngle);
      float sinA = sin(strokeAngle);
      float rotCoord1 = (pixelPos.x + wobble) * cosA - (pixelPos.y + wobble) * sinA;

      // Expressive Manga Ink Spacing (distinct pen lines, not micro-screen)
      float spacing = 20.0;
      float hatch1 = mod(rotCoord1, spacing);

      // Dynamic pen pressure: tapering from shadow into light
      float penPressure = smoothstep(0.50, 0.05, nDotL);
      float penWidth = penPressure * 3.8 + sin(pixelPos.y * 0.03) * 0.6;

      // Stepped Manga Cel-Shading
      vec3 finalColor = uColor;

      // Highlight Zone: clean lit surface
      if (nDotL > 0.48) {
        finalColor = uColor * 1.15;
      } 
      // Midtone Penumbra: visible hand-drawn ink pen strokes along contour
      else if (nDotL > 0.06) {
        if (hatch1 < penWidth) {
          finalColor = vec3(0.015, 0.015, 0.025); // Bold ink stroke
        } else {
          finalColor = uColor * 0.95;
        }
      } 
      // Deep Core Shadow: solid black ink (beta fill)
      else {
        finalColor = vec3(0.015, 0.015, 0.02);
      }

      // Manga Rim / Edge Lighting (Fresnel) with Crimson glow
      float fresnel = 1.0 - max(dot(viewDir, normal), 0.0);
      float rim = smoothstep(0.68, 0.95, fresnel);
      finalColor = mix(finalColor, uRimColor, rim * 0.9);

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `};new Kt(.5,.5),new Kt(.5,.5),new Kt(1920,1080);class RM{constructor(){this.ctx=null,this.enabled=!1,this.masterGain=null}init(){if(!this.ctx)try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.28,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination)}catch(t){console.warn("Web Audio not supported",t)}}toggle(){return this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),this.enabled=!this.enabled,this.enabled&&this.playBlueprintUnfold(),this.enabled}playPencilScratch(){if(!this.enabled||!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(1800,t),e.frequency.exponentialRampToValueAtTime(600,t+.07),n.gain.setValueAtTime(.08,t),n.gain.exponentialRampToValueAtTime(.001,t+.07),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.07)}playBlueprintUnfold(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.sampleRate*.25,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let l=0;l<e;l++)i[l]=(Math.random()*2-1)*Math.exp(-l/(e*.4));const s=this.ctx.createBufferSource();s.buffer=n;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(2200,t),o.Q.setValueAtTime(2.5,t);const a=this.ctx.createGain();a.gain.setValueAtTime(.18,t),a.gain.exponentialRampToValueAtTime(.001,t+.25),s.connect(o),o.connect(a),a.connect(this.masterGain),s.start(t)}playCaliperClick(){if(!this.enabled||!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(880,t),e.frequency.exponentialRampToValueAtTime(220,t+.04),n.gain.setValueAtTime(.15,t),n.gain.exponentialRampToValueAtTime(.001,t+.04),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.04)}playStructuralClack(){if(!this.enabled||!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="square",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(45,t+.18),n.gain.setValueAtTime(.2,t),n.gain.exponentialRampToValueAtTime(.001,t+.2),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.2);const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(3200,t),i.frequency.exponentialRampToValueAtTime(1200,t+.05),s.gain.setValueAtTime(.12,t),s.gain.exponentialRampToValueAtTime(.001,t+.06),i.connect(s),s.connect(this.masterGain),i.start(t),i.stop(t+.06)}playAwakening(){if(this.init(),!this.ctx)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.currentTime;[220,277.18,329.63,440].forEach((n,i)=>{const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(n,t),o.gain.setValueAtTime(.001,t),o.gain.linearRampToValueAtTime(.06/(i+1),t+.3),o.gain.exponentialRampToValueAtTime(1e-4,t+1.8),s.connect(o),o.connect(this.masterGain),s.start(t),s.stop(t+1.8)})}}const ze=new RM;class CM{constructor(t){this.canvas=t,this.scene=null,this.camera=null,this.renderer=null,this.rootAssembly=null,this.groupGround=null,this.groupColumns=null,this.groupBeams=null,this.groupSlabs=null,this.groupStairs=null,this.groupPerspectiveRays=null,this.groupDomeVault=null,this.groupMangaHand=null,this.groupRelics=null,this.groupParticles=null,this.explodedProgress=0,this.targetExploded=0,this.isExploded=!1,this.visualMode="crimson",this.layers={columns:!0,beams:!0,slabs:!0,stairs:!0,perspectiveRays:!0,dome:!0,mangaHand:!0,wireframe:!1},this.mouse={x:0,y:0,targetX:0,targetY:0},this.isDragging=!1,this.previousMousePosition={x:0,y:0},this.targetRotation={x:.28,y:-.45},this.rotationSpeed={x:0,y:.0012},this.scrollY=0,this.targetScrollProgress=0,this.clock=new Em,this.init()}init(){this.scene=new hh,this.scene.fog=new uh(592139,.028);const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;this.camera=new yn(44,t/e,.1,150),this.camera.position.set(7.5,6,13.5),this.camera.lookAt(-1.8,2,0),this.renderer=new ch({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.resize();const n=new Mm(16777215,.55);this.scene.add(n);const i=new Sm(16777215,1.4);i.position.set(12,18,14),this.scene.add(i),this.accentLight=new ff(16720435,3.2,38),this.accentLight.position.set(-6,5,2),this.scene.add(this.accentLight),this.cyanLight=new ff(3775958,2,30),this.cyanLight.position.set(7,3,-4),this.scene.add(this.cyanLight),this.buildWorld(),window.addEventListener("resize",()=>this.resize()),window.addEventListener("mousemove",s=>this.onMouseMove(s)),window.addEventListener("scroll",()=>this.onScroll()),this.setupInteractions(),this.animate()}resize(){const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}onMouseMove(t){const e=t.clientX/window.innerWidth*2-1,n=-(t.clientY/window.innerHeight)*2+1;this.mouse.targetX=e,this.mouse.targetY=n,this.isDragging||(this.targetRotation.y=-.45+e*.28,this.targetRotation.x=.28-n*.18)}onScroll(){document.documentElement.scrollHeight-window.innerHeight>0&&(this.targetScrollProgress=Math.min(1,Math.max(0,window.scrollY/(window.innerHeight*1.5))))}setupInteractions(){const t=this.canvas;t.addEventListener("mousedown",e=>{this.isDragging=!0,this.previousMousePosition={x:e.clientX,y:e.clientY}}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),t.addEventListener("mousemove",e=>{if(!this.isDragging)return;const n=e.clientX-this.previousMousePosition.x,i=e.clientY-this.previousMousePosition.y;this.targetRotation.y+=n*.007,this.targetRotation.x+=i*.007,this.targetRotation.x=Math.max(-.25,Math.min(1.2,this.targetRotation.x)),this.previousMousePosition={x:e.clientX,y:e.clientY}})}createMangaMaterial(t,e=16720435){return new bi({uniforms:{uLightDir:{value:new O(3,5,4).normalize()},uColor:{value:new Yt(t)},uRimColor:{value:new Yt(e)},uHatchDensity:{value:28},uTime:{value:0}},vertexShader:mf.vertexShader,fragmentShader:mf.fragmentShader})}buildWorld(){this.rootAssembly=new De,this.rootAssembly.position.set(-2.8,-.4,0),this.scene.add(this.rootAssembly),this.matColumn=new ui({color:16053493,roughness:.25}),this.matCorbel=new ui({color:9227762,roughness:.35}),this.matBeam=new ui({color:1522779,roughness:.3,metalness:.2}),this.matSlab=new ui({color:16777215,roughness:.2}),this.matStair=new ui({color:16777215,roughness:.15,metalness:.1}),this.matRedVector=new ko({color:16720435,transparent:!0,opacity:.9,linewidth:2}),this.matCyanVector=new ko({color:3775958,transparent:!0,opacity:.65}),this.matGold=new ui({color:15051068,roughness:.3,metalness:.6}),this.groupGround=new De;const t=new AM(24,48,16720435,1522779);t.position.y=-.01,this.groupGround.add(t);const e=new je(1.4,.25,1.4),n=[{x:-4,z:-3},{x:0,z:-3},{x:4,z:-3},{x:-4,z:3},{x:0,z:3},{x:4,z:3}];n.forEach(S=>{const v=new se(e,this.matCorbel);v.position.set(S.x,.125,S.z),this.groupGround.add(v)}),this.rootAssembly.add(this.groupGround),this.groupColumns=new De;const i=new je(.65,5.6,.65),s=new je(.95,.45,.65);n.forEach(S=>{const v=new De;v.position.set(S.x,2.8,S.z);const A=new se(i,this.matColumn);v.add(A);const w=new se(s,this.matCorbel);w.position.set(0,-.6,0),v.add(w);const E=new se(s,this.matCorbel);E.position.set(0,1.9,0),v.add(E),this.groupColumns.add(v)}),this.rootAssembly.add(this.groupColumns),this.groupBeams=new De,this.beamsL1=new De,this.beamsL2=new De;const o=new je(8.8,.65,.75),a=new se(o,this.matBeam);a.position.set(0,2.5,-3),this.beamsL1.add(a);const l=new se(o,this.matBeam);l.position.set(0,2.5,3),this.beamsL1.add(l);const c=new se(o,this.matBeam);c.position.set(0,5,-3),this.beamsL2.add(c);const u=new se(o,this.matBeam);u.position.set(0,5,3),this.beamsL2.add(u),this.groupBeams.add(this.beamsL1),this.groupBeams.add(this.beamsL2),this.rootAssembly.add(this.groupBeams),this.groupSlabs=new De,this.slabsL1=new De,this.slabsL2=new De;for(let S=-3;S<=3;S++){const v=new je(1.18,.32,5.85),A=new se(v,this.matSlab);A.position.set(S*1.24,2.8,0),this.slabsL1.add(A);const w=new se(v,this.matSlab);w.position.set(S*1.24,5.3,0),this.slabsL2.add(w)}this.groupSlabs.add(this.slabsL1),this.groupSlabs.add(this.slabsL2),this.rootAssembly.add(this.groupSlabs),this.groupStairs=new De;const d=16,h=3.2,f=.38,g=.2;for(let S=0;S<d;S++){const v=new je(h,g,f),A=new se(v,this.matStair);A.position.set(0,(S+1)*g,(d/2-S)*f),this.groupStairs.add(A);const w=new xm(v),E=new dl(w,this.matRedVector);E.position.copy(A.position),this.groupStairs.add(E)}this.rootAssembly.add(this.groupStairs),this.groupPerspectiveRays=new De;const _=new O(0,9.2,-6.5);for(let S=-7;S<=7;S++){const v=new O(S*2.2,-.2,7.5),A=new Xe().setFromPoints([_,v]),w=new Za(A,this.matRedVector);this.groupPerspectiveRays.add(w)}for(let S=0;S<=6;S+=1.5){const v=new O(-10,S,2),A=new O(10,S,2),w=new Za(new Xe().setFromPoints([_,v]),this.matCyanVector),E=new Za(new Xe().setFromPoints([_,A]),this.matCyanVector);this.groupPerspectiveRays.add(w),this.groupPerspectiveRays.add(E)}this.rootAssembly.add(this.groupPerspectiveRays),this.groupDomeVault=new De;const m=new ph(7.2,24,16,0,Math.PI*2,0,Math.PI*.48),p=new yM(m),y=new dl(p,this.matRedVector);y.position.set(0,5.8,-2.5),this.groupDomeVault.add(y),this.rootAssembly.add(this.groupDomeVault),this.createMangaArmAndHand(),this.createFloatingRelics(),this.createInkParticles()}createMangaArmAndHand(){this.groupMangaHand=new De;const t=this.createMangaMaterial(16053493,16720435),e=this.createMangaMaterial(592139,16720435),n=new Dr(.48,.62,3.2,16);n.rotateZ(Math.PI/14);const i=new se(n,t);i.position.set(.6,-1.8,0),this.groupMangaHand.add(i);const s=new fl(.68,.12,12,32);s.rotateX(Math.PI/2.3);const o=new se(s,e);o.position.set(.25,-.4,.1),this.groupMangaHand.add(o);const a=new je(1,1.2,.35),l=new se(a,t);l.position.set(0,.4,0),this.groupMangaHand.add(l),[{x:-.38,y:1.1,len:.8,rotZ:.15},{x:-.12,y:1.2,len:.95,rotZ:.05},{x:.15,y:1.15,len:.9,rotZ:-.05},{x:.38,y:1,len:.75,rotZ:-.15}].forEach(f=>{const g=new De;g.position.set(f.x,.9,0);const _=new Dr(.12,.14,f.len*.6,12),m=new se(_,t);m.position.y=f.len*.6/2,m.rotation.x=-.4,g.add(m);const p=new Dr(.09,.12,f.len*.5,12),y=new se(p,t);y.position.set(0,f.len*.55,.2),y.rotation.x=-.65,g.add(y),g.rotation.z=f.rotZ,this.groupMangaHand.add(g)});const u=new De;u.position.set(-.55,.2,.1);const d=new Dr(.13,.15,.7,12),h=new se(d,t);h.position.y=.35,h.rotation.z=.6,h.rotation.x=-.3,u.add(h),this.groupMangaHand.add(u),this.groupMangaHand.position.set(.2,.8,6.2),this.groupMangaHand.rotation.set(.18,-.45,-.1),this.groupMangaHand.scale.set(1.5,1.5,1.5),this.rootAssembly.add(this.groupMangaHand)}createFloatingRelics(){this.groupRelics=new De;const t=this.createMangaMaterial(16720435,16777215),e=new Dr(.35,.35,1.8,24);this.bottle=new se(e,t),this.bottle.position.set(-5.2,2.2,1),this.groupRelics.add(this.bottle);for(let a=-3;a<=3;a++){const l=new fl(.38,.03,8,24),c=new se(l,this.createMangaMaterial(592139,16720435));c.rotation.x=Math.PI/2,c.position.set(-5.2,2.2+a*.2,1),this.groupRelics.add(c)}const n=this.createMangaMaterial(16053493,16720435),i=new je(2.4,.45,.55);this.beamRelic=new se(i,n),this.beamRelic.position.set(-3.5,-1.2,3.5),this.beamRelic.rotation.set(.4,.6,.2),this.groupRelics.add(this.beamRelic);const s=this.createMangaMaterial(1579035,16720435),o=new fh(.75,0);this.poly=new se(o,s),this.poly.position.set(4.5,4.2,-1),this.groupRelics.add(this.poly),this.rootAssembly.add(this.groupRelics)}createInkParticles(){const e=new Xe,n=new Float32Array(1800*3),i=new Float32Array(1800*3),s=new Float32Array(1800*3),o=new Yt(16720435),a=new Yt(3775958),l=new Yt(16777215);for(let u=0;u<1800;u++){n[u*3]=(Math.random()-.5)*28,n[u*3+1]=(Math.random()-.5)*20+4,n[u*3+2]=(Math.random()-.5)*22,i[u*3]=(Math.random()-.5)*.015,i[u*3+1]=(Math.random()-.5)*.015,i[u*3+2]=(Math.random()-.5)*.015;const d=Math.random();let h=l;d>.65?h=o:d>.4&&(h=a),s[u*3]=h.r,s[u*3+1]=h.g,s[u*3+2]=h.b}e.setAttribute("position",new ri(n,3)),e.setAttribute("color",new ri(s,3));const c=new vm({size:.14,vertexColors:!0,transparent:!0,opacity:.85});this.particles=new xM(e,c),this.particleVelocities=i,this.scene.add(this.particles)}toggleExploded(){return this.isExploded=!this.isExploded,this.targetExploded=this.isExploded?1:0,ze.playStructuralClack(),this.isExploded}toggleLayer(t){return t in this.layers?(this.layers[t]=!this.layers[t],ze.playCaliperClick(),t==="columns"&&this.groupColumns&&(this.groupColumns.visible=this.layers.columns),t==="beams"&&this.groupBeams&&(this.groupBeams.visible=this.layers.beams),t==="slabs"&&this.groupSlabs&&(this.groupSlabs.visible=this.layers.slabs),t==="stairs"&&this.groupStairs&&(this.groupStairs.visible=this.layers.stairs),t==="perspectiveRays"&&this.groupPerspectiveRays&&(this.groupPerspectiveRays.visible=this.layers.perspectiveRays),t==="dome"&&this.groupDomeVault&&(this.groupDomeVault.visible=this.layers.dome),t==="mangaHand"&&this.groupMangaHand&&(this.groupMangaHand.visible=this.layers.mangaHand),t==="wireframe"&&this.setWireframeMode(this.layers.wireframe),this.layers[t]):!1}setWireframeMode(t){this.layers.wireframe=t,this.rootAssembly.traverse(e=>{e.isMesh&&e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.wireframe=t):e.material.wireframe=t)})}cycleVisualMode(){const t=["crimson","blueprint","wireframe"],e=(t.indexOf(this.visualMode)+1)%t.length;return this.visualMode=t[e],ze.playPencilScratch(),this.visualMode==="crimson"?(this.setWireframeMode(!1),this.matColumn.color.setHex(16053493),this.matBeam.color.setHex(1522779),this.matSlab.color.setHex(16777215),this.matRedVector.color.setHex(16720435),this.accentLight.color.setHex(16720435)):this.visualMode==="blueprint"?(this.setWireframeMode(!1),this.matColumn.color.setHex(15070463),this.matBeam.color.setHex(3775958),this.matSlab.color.setHex(13232636),this.matRedVector.color.setHex(3775958),this.accentLight.color.setHex(3775958)):(this.setWireframeMode(!0),this.matRedVector.color.setHex(16720435),this.accentLight.color.setHex(16755200)),this.visualMode}resetCamera(){this.targetRotation.x=.28,this.targetRotation.y=-.45,this.camera.position.set(7.5,6,13.5),this.camera.lookAt(-1.8,2,0),this.targetExploded=0,this.isExploded=!1,ze.playBlueprintUnfold()}animate(){if(requestAnimationFrame(this.animate.bind(this)),this.clock.getDelta(),this.isDragging||(this.targetRotation.y+=this.rotationSpeed.y),this.rootAssembly.rotation.y+=(this.targetRotation.y-this.rootAssembly.rotation.y)*.06,this.rootAssembly.rotation.x+=(this.targetRotation.x-this.rootAssembly.rotation.x)*.06,this.explodedProgress+=(this.targetExploded-this.explodedProgress)*.08,this.groupDomeVault&&(this.groupDomeVault.position.y=5.8+this.explodedProgress*5),this.slabsL2&&(this.slabsL2.position.y=this.explodedProgress*3.6),this.beamsL2&&(this.beamsL2.position.y=this.explodedProgress*2.2),this.slabsL1&&(this.slabsL1.position.y=this.explodedProgress*1.2),this.groupStairs&&(this.groupStairs.position.z=this.explodedProgress*2),this.groupMangaHand){const n=-.55+this.mouse.targetX*.25,i=.18-this.mouse.targetY*.18;this.groupMangaHand.rotation.y+=(n-this.groupMangaHand.rotation.y)*.08,this.groupMangaHand.rotation.x+=(i-this.groupMangaHand.rotation.x)*.08}const t=13.5-this.targetScrollProgress*5.5,e=7.5-this.targetScrollProgress*2.5;if(this.camera.position.z+=(t-this.camera.position.z)*.05,this.camera.position.y+=(e-this.camera.position.y)*.05,this.bottle&&(this.bottle.rotation.y+=.012,this.bottle.position.y=2.2+Math.sin(this.clock.getElapsedTime()*1.5)*.25),this.beamRelic&&(this.beamRelic.rotation.x+=.008,this.beamRelic.rotation.y+=.01),this.poly&&(this.poly.rotation.y+=.015,this.poly.rotation.z+=.01),this.particles){const n=this.particles.geometry.attributes.position.array;for(let i=0;i<n.length/3;i++)n[i*3+1]+=this.particleVelocities[i*3+1],n[i*3+1]<-4&&(n[i*3+1]=16),n[i*3+1]>16&&(n[i*3+1]=-4);this.particles.geometry.attributes.position.needsUpdate=!0}this.camera.lookAt(-1.8,2,0),this.renderer.render(this.scene,this.camera)}}class PM{constructor(t){this.canvas=t,this.scene=null,this.camera=null,this.renderer=null,this.mesh=null,this.mouse={x:.5,y:.5,targetX:.5,targetY:.5,velX:0,velY:0},this.targetHover=.45,this.clock=new Em,this.init()}init(){this.scene=new hh;const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||500;this.camera=new yn(45,t/e,.1,100),this.camera.position.z=4.8,this.renderer=new ch({canvas:this.canvas,antialias:!0,alpha:!0}),this.renderer.setSize(t,e),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.setupGalleryMesh(t,e),this.canvas.addEventListener("mousemove",n=>{const i=this.canvas.getBoundingClientRect(),s=(n.clientX-i.left)/i.width,o=1-(n.clientY-i.top)/i.height;this.mouse.velX=Math.abs(s-this.mouse.targetX),this.mouse.velY=Math.abs(o-this.mouse.targetY),this.mouse.targetX=s,this.mouse.targetY=o}),window.addEventListener("resize",this.onResize.bind(this)),this.animate()}setupGalleryMesh(t,e){const n=new bM,i=n.load("./images/manga-awakening.jpg"),s=n.load("./images/architectural-perspective.jpg");i.generateMipmaps=!0,s.generateMipmaps=!0;const o=new Yo(6.6,3.8,80,80);this.uniforms={uTex1:{value:s},uTex2:{value:i},uTransition:{value:0},uMouse:{value:new Kt(.5,.5)},uHover:{value:.45},uVelocity:{value:0},uTime:{value:0},uResolution:{value:new Kt(t,e)}};const a=`
      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uHover;
      varying vec2 vUv;
      varying vec3 vPos;

      void main() {
        vUv = uv;
        vec3 pos = position;

        // Wave distortion reacting to mouse distance + ambient pulse
        float dist = distance(uv, uMouse);
        float wave = sin(dist * 22.0 - uTime * 4.5) * 0.1 * uHover * smoothstep(0.7, 0.0, dist);
        wave += sin(pos.x * 2.0 + uTime * 2.0) * cos(pos.y * 2.0 + uTime * 2.0) * 0.03;
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
        vec2 offset = normalize(uv - uMouse) * sin(dist * 26.0 - uTime * 5.0) * 0.025 * uHover;

        // Chromatic Aberration / RGB Split based on mouse velocity + hover
        float split = 0.006 * (1.0 + uVelocity * 20.0) * max(uHover, 0.3);
        
        vec4 col1R = texture2D(uTex1, uv + offset + vec2(split, 0.0));
        vec4 col1G = texture2D(uTex1, uv + offset);
        vec4 col1B = texture2D(uTex1, uv + offset - vec2(split, 0.0));
        vec4 col1 = vec4(col1R.r, col1G.g, col1B.b, 1.0);

        vec4 col2R = texture2D(uTex2, uv + offset + vec2(split, 0.0));
        vec4 col2G = texture2D(uTex2, uv + offset);
        vec4 col2B = texture2D(uTex2, uv + offset - vec2(split, 0.0));
        vec4 col2 = vec4(col2R.r, col2G.g, col2B.b, 1.0);

        // Crossfade with diagonal slice transition
        float slice = smoothstep(uv.x - 0.25, uv.x + 0.25, uTransition * 1.5);
        vec4 finalCol = mix(col1, col2, slice);

        // Manga ink screentone overlay on hover
        float dotPattern = sin(uv.x * 240.0) * sin(uv.y * 240.0);
        if (dotPattern > 0.82 && uHover > 0.2) {
          finalCol = mix(finalCol, vec4(0.09, 0.09, 0.11, 1.0), 0.35 * uHover);
        }

        // Red perspective rim glow
        float edgeGlow = smoothstep(0.48, 0.5, abs(uv.x - 0.5)) * 0.25;
        finalCol.rgb += vec3(0.9, 0.13, 0.2) * edgeGlow * uHover;

        gl_FragColor = finalCol;
      }
    `;this.mat=new bi({uniforms:this.uniforms,vertexShader:a,fragmentShader:l}),this.mesh=new se(o,this.mat),this.scene.add(this.mesh)}setTransition(t){this.uniforms&&(this.uniforms.uTransition.value=Math.max(0,Math.min(1,t)))}setHover(t){this.targetHover=t?1:.45}onResize(){const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||500;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.uniforms&&this.uniforms.uResolution.value.set(t,e)}animate(){requestAnimationFrame(this.animate.bind(this));const t=this.clock.getElapsedTime();if(this.mouse.x+=(this.mouse.targetX-this.mouse.x)*.1,this.mouse.y+=(this.mouse.targetY-this.mouse.y)*.1,this.uniforms){this.uniforms.uTime.value=t,this.uniforms.uMouse.value.set(this.mouse.x,this.mouse.y);const e=this.uniforms.uHover.value;this.uniforms.uHover.value+=(this.targetHover-e)*.08,this.uniforms.uVelocity.value+=(this.mouse.velX+this.mouse.velY-this.uniforms.uVelocity.value)*.1,this.mouse.velX*=.9,this.mouse.velY*=.9}this.mesh&&(this.mesh.rotation.y=(this.mouse.x-.5)*.28,this.mesh.rotation.x=-(this.mouse.y-.5)*.22),this.renderer.render(this.scene,this.camera)}}class LM{constructor(){this.initPrecastVisualizer(),this.initBeamSolverVisualizer(),this.initAtlasVisualizer(),this.initSq3rVisualizer()}initPrecastVisualizer(){const t=document.getElementById("canvas-precast-interactive");if(!t)return;const e=new hh,n=new yn(40,t.clientWidth/t.clientHeight,.1,100);n.position.set(4.5,3.8,5.5),n.lookAt(0,.8,0);const i=new ch({canvas:t,antialias:!0,alpha:!0});i.setSize(t.clientWidth,t.clientHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2));const s=new Mm(16777215,.8);e.add(s);const o=new Sm(16777215,1.2);o.position.set(5,8,5),e.add(o);const a=new De;e.add(a);const l=new ui({color:1319213,roughness:.3}),c=new se(new je(.8,4,.8),l);c.position.y=1,a.add(c);const u=new ui({color:16720435,roughness:.3}),d=new se(new je(1.2,.5,.8),u);d.position.set(.2,1.2,0),a.add(d);const h=new ui({color:1522779,roughness:.3}),f=new se(new je(1,.8,3.4),h);f.position.set(.7,1.85,0),a.add(f);const g=new ui({color:16720435,roughness:.1}),_=new se(new je(.7,.08,.7),g);_.position.set(.45,1.48,0),a.add(_);const m=new De,p=new ui({color:16251903,roughness:.2});for(let P=-1;P<=1;P++){const L=new se(new je(1.8,.35,.95),p);L.position.set(1.9,2.1,P*1.05),m.add(L)}a.add(m);const y=new xm(new je(1.8,.35,3.2)),S=new dl(y,new ko({color:3775958}));S.position.set(1.9,2.1,0),m.add(S);let v=!1,A={x:0,y:0},w={x:.25,y:-.65},E=!1,R=0;t.addEventListener("mousedown",P=>{v=!0,A={x:P.clientX,y:P.clientY}}),window.addEventListener("mouseup",()=>{v=!1}),t.addEventListener("mousemove",P=>{if(!v)return;const L=P.clientX-A.x,U=P.clientY-A.y;w.y+=L*.01,w.x+=U*.01,A={x:P.clientX,y:P.clientY}});const M=document.getElementById("btn-precast-explode");M==null||M.addEventListener("click",P=>{P.stopPropagation(),E=!E,ze.playStructuralClack(),M.textContent=E?"🔄 RESTORE ASSEMBLY":"💥 EXPLODE SLABS"});function x(){requestAnimationFrame(x),v||(w.y+=.003),a.rotation.y+=(w.y-a.rotation.y)*.08,a.rotation.x+=(w.x-a.rotation.x)*.08,R+=((E?1:0)-R)*.08,m.position.y=R*1.4,m.position.x=R*.6,f.position.y=1.85+R*.5,i.render(e,n)}x()}initBeamSolverVisualizer(){const t=document.getElementById("canvas-beam-solver");if(!t)return;const e=t.getContext("2d"),n=10;let i=4,s=50,o=!1;const a=document.getElementById("beam-load-slider");a==null||a.addEventListener("input",u=>{i=parseFloat(u.target.value),c()}),t.addEventListener("mousedown",u=>{o=!0,l(u)}),window.addEventListener("mouseup",()=>{o=!1}),t.addEventListener("mousemove",u=>{o&&l(u)});function l(u){const d=t.getBoundingClientRect(),h=(u.clientX-d.left)/d.width;i=Math.max(.5,Math.min(9.5,h*n)),a&&(a.value=i.toFixed(1)),c()}function c(){e.clearRect(0,0,t.width,t.height);const u=t.width;t.height;const d=n-i,h=s*d/n,f=s*i/n,g=s*i*d/n,_=document.getElementById("beam-formula-readout");_&&(_.innerHTML=`P = ${s.toFixed(0)} kN @ x = ${i.toFixed(1)}m | R_A = ${h.toFixed(1)} kN | R_B = ${f.toFixed(1)} kN | <strong>M_max = ${g.toFixed(1)} kN·m</strong>`);const m=75,p=60,y=u-60,S=y-p;e.strokeStyle="#FFFFFF",e.lineWidth=4,e.beginPath(),e.moveTo(p,m),e.lineTo(y,m),e.stroke(),e.fillStyle="#399DD6",e.beginPath(),e.moveTo(p,m),e.lineTo(p-12,m+20),e.lineTo(p+12,m+20),e.closePath(),e.fill(),e.beginPath(),e.moveTo(y,m),e.lineTo(y-12,m+16),e.lineTo(y+12,m+16),e.closePath(),e.fill(),e.beginPath(),e.arc(y-6,m+20,3,0,Math.PI*2),e.arc(y+6,m+20,3,0,Math.PI*2),e.fill();const v=p+i/n*S;e.strokeStyle="#FF2233",e.fillStyle="#FF2233",e.lineWidth=3,e.beginPath(),e.moveTo(v,m-45),e.lineTo(v,m-4),e.stroke(),e.beginPath(),e.moveTo(v-6,m-14),e.lineTo(v,m-2),e.lineTo(v+6,m-14),e.closePath(),e.fill(),e.font='bold 12px "Fira Code", monospace',e.fillText(`P = ${s}kN`,v-25,m-50);const A=160;e.strokeStyle="#399DD6",e.lineWidth=1.5,e.beginPath(),e.moveTo(p,A),e.lineTo(y,A),e.stroke();const w=Math.min(65,g/130*65);e.fillStyle="rgba(57, 157, 214, 0.25)",e.strokeStyle="#399DD6",e.lineWidth=2.5,e.beginPath(),e.moveTo(p,A),e.lineTo(v,A+w),e.lineTo(y,A),e.closePath(),e.fill(),e.stroke(),e.fillStyle="#399DD6",e.fillText(`BMD: M_max = +${g.toFixed(1)} kN·m`,v+10,A+w);const E=240;e.strokeStyle="#FF2233",e.lineWidth=2.5,e.setLineDash([4,2]),e.beginPath(),e.moveTo(p,E);for(let R=0;R<=S;R+=4){const M=R/S*n;let x=0;M<=i?x=s*d*M*(n*n-d*d-M*M)/(6*n):x=s*i*(n-M)*(2*n*M-M*M-i*i)/(6*n);const P=E+x/80*45;e.lineTo(p+R,P)}e.stroke(),e.setLineDash([]),e.fillStyle="#FF2233",e.fillText("ELASTIC DEFLECTION v(x)",p+10,E+35)}c()}initAtlasVisualizer(){const t=document.querySelectorAll(".atlas-node"),e=document.getElementById("atlas-coord-readout");t.forEach(n=>{n.addEventListener("mouseenter",()=>{ze.playPencilScratch();const i=n.getAttribute("data-city"),s=n.getAttribute("data-elev"),o=n.getAttribute("data-coord");e&&(e.innerHTML=`SELECTED NODE: <strong class="text-crimson">${i}</strong> | ELEVATION: ${s} | COORDINATES: ${o}`)})})}initSq3rVisualizer(){const t=document.getElementById("sq3r-timer");if(!t)return;let e=3600;setInterval(()=>{e--,e<0&&(e=3600);const n=Math.floor(e/60),i=e%60;t.textContent=`${n.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`},1e3)}}class DM{constructor(t){this.container=document.getElementById(t),this.currentDrawing="section-precast",this.scale=1,this.pan={x:0,y:0},this.isPanning=!1,this.startPan={x:0,y:0},this.is3DIsometric=!1,this.layers={dimensions:!0,grid:!0,rebar:!0,annotations:!0},this.drawings={"section-precast":{title:"STRUCTURAL SECTION 1:50 — HOLLOW-CORE HC-250 ON INVERTED-T BEAM",ref:"DWG-S01 // EUROCODE 2 & PCI 8TH ED.",scaleLabel:"SCALE 1:50 @ A2",type:"section",svg:this.getSectionSvg()},"framing-plan":{title:"MODULAR FRAMING PLAN 1:100 — 9.0m × 6.0m PRECAST GRID",ref:"DWG-S02 // LEVEL 02 STRUCTURAL",scaleLabel:"SCALE 1:100 @ A2",type:"plan",svg:this.getPlanSvg()},"elevation-corbel":{title:"PRECAST COLUMN CORBEL ELEVATION 1:50 — BEARING GEOMETRY",ref:"DWG-E03 // COLUMN GRID LINE B",scaleLabel:"SCALE 1:50 @ A2",type:"elevation",svg:this.getElevationSvg()},"stair-detail":{title:"PRECAST STAIR FLIGHT & LANDING RECESS DETAIL 1:25",ref:"DWG-D04 // CIRCULATION CORE",scaleLabel:"SCALE 1:25 @ A2",type:"detail",svg:this.getStairSvg()}},this.init()}init(){this.container&&(this.render(),this.attachEvents())}render(){const t=this.drawings[this.currentDrawing];this.container.innerHTML=`
      <div id="dv-main-frame" class="drawing-viewer-frame border-4 border-crimson bg-ink-deep rounded relative overflow-hidden shadow-crimson-lg flex flex-col h-[620px]">
        
        <!-- Top Drawing Toolbar -->
        <div class="viewer-toolbar bg-ink-slate border-b-2 border-crimson px-4 py-3 flex flex-wrap items-center justify-between gap-3 z-10 font-body text-xs">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-crimson inline-block animate-ping"></span>
            <span class="font-mono font-black text-white uppercase tracking-wider">${t.ref}</span>
            <span class="text-crimson hidden sm:inline">•</span>
            <span class="font-editorial text-sky font-bold hidden sm:inline tracking-tight">${t.title}</span>
          </div>

          <!-- Controls: Zoom, Pan, 3D Morph & Fullscreen -->
          <div class="flex items-center gap-2">
            <button id="btn-dv-zoom-in" class="manga-btn px-2.5 py-1 bg-ink-deep text-white border border-azure rounded hover:bg-azure hover:text-ink-deep font-bold" title="Zoom In">+</button>
            <span id="dv-scale-text" class="px-2 py-1 text-[11px] font-mono font-bold text-white bg-ink-deep rounded border border-ink-slate">${Math.round(this.scale*100)}%</span>
            <button id="btn-dv-zoom-out" class="manga-btn px-2.5 py-1 bg-ink-deep text-white border border-azure rounded hover:bg-azure hover:text-ink-deep font-bold" title="Zoom Out">-</button>
            <button id="btn-dv-reset" class="manga-btn px-3 py-1 bg-ink-deep text-neutral-300 border border-neutral-600 rounded text-[11px] font-bold hover:text-white" title="Reset View">RESET</button>
            <button id="btn-dv-3d" class="manga-btn px-3 py-1 ${this.is3DIsometric?"bg-crimson text-white":"bg-ink-deep text-sky border-azure"} rounded text-[11px] font-bold" title="3D Isometric Mode">
              ${this.is3DIsometric?"⚡ 3D ISOMETRIC: ON":"📐 3D ISOMETRIC"}
            </button>
          </div>
        </div>

        <!-- Layer Toggles Strip -->
        <div class="bg-ink-deep border-b border-crimson/40 px-4 py-1.5 flex flex-wrap items-center justify-between gap-2 z-10 font-editorial text-[11px]">
          <div class="flex items-center gap-2">
            <span class="font-mono text-neutral-400 font-bold">LAYERS:</span>
            <button class="dv-layer-btn px-2 py-0.5 rounded border border-crimson font-bold ${this.layers.dimensions?"bg-crimson text-white":"bg-ink-slate text-neutral-400"}" data-layer="dimensions">DIMENSIONS (90mm)</button>
            <button class="dv-layer-btn px-2 py-0.5 rounded border border-azure font-bold ${this.layers.grid?"bg-azure text-ink-deep":"bg-ink-slate text-neutral-400"}" data-layer="grid">AXIS GRID</button>
            <button class="dv-layer-btn px-2 py-0.5 rounded border border-gold font-bold ${this.layers.rebar?"bg-gold text-ink-deep":"bg-ink-slate text-neutral-400"}" data-layer="rebar">REBAR & MESH</button>
            <button class="dv-layer-btn px-2 py-0.5 rounded border border-white font-bold ${this.layers.annotations?"bg-white text-ink-deep":"bg-ink-slate text-neutral-400"}" data-layer="annotations">ANNOTATIONS</button>
          </div>
          <div class="font-body text-neutral-400 font-medium hidden md:inline">
            🖱️ DRAG TO PAN • SCROLL WHEEL TO ZOOM
          </div>
        </div>

        <!-- Interactive Vector Drawing Canvas -->
        <div id="dv-viewport" class="flex-1 relative overflow-hidden cursor-grab active:cursor-grabbing bg-[#0d151c] select-none">
          <div id="dv-canvas" class="w-full h-full flex items-center justify-center transition-transform duration-75 origin-center" style="transform: translate(${this.pan.x}px, ${this.pan.y}px) scale(${this.scale}) ${this.is3DIsometric?"rotateX(55deg) rotateZ(-40deg) skewX(-10deg)":""};">
            ${t.svg}
          </div>

          <!-- Technical Grid Watermark -->
          <div class="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#399dd6_1px,transparent_1px),linear-gradient(to_bottom,#399dd6_1px,transparent_1px)] bg-[size:32px_32px]"></div>

          <!-- Floating Scale & Compass Tag -->
          <div class="absolute bottom-3 right-3 pointer-events-none bg-ink-deep/90 border border-crimson px-3 py-1.5 rounded font-mono text-[11px] text-white shadow-brutal-sm">
            <span>PCI 8TH ED. & EN 1992-1-1</span> • <span class="text-crimson font-black">VERIFIED NOMINAL</span>
          </div>
        </div>

        <!-- Bottom Selector Tabs: Plan, Section, Elevation & Detail -->
        <div class="bg-ink-slate border-t-2 border-crimson px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-3 z-10 font-body text-xs">
          <div class="flex flex-wrap items-center gap-2 font-editorial">
            <button class="dv-tab-btn manga-btn px-3 py-1.5 rounded text-[11px] font-bold ${this.currentDrawing==="section-precast"?"manga-btn-crimson":"bg-ink-deep text-white border-azure"}" data-drawing="section-precast">1. SECTION 1:50</button>
            <button class="dv-tab-btn manga-btn px-3 py-1.5 rounded text-[11px] font-bold ${this.currentDrawing==="framing-plan"?"manga-btn-crimson":"bg-ink-deep text-white border-azure"}" data-drawing="framing-plan">2. FRAMING PLAN 1:100</button>
            <button class="dv-tab-btn manga-btn px-3 py-1.5 rounded text-[11px] font-bold ${this.currentDrawing==="elevation-corbel"?"manga-btn-crimson":"bg-ink-deep text-white border-azure"}" data-drawing="elevation-corbel">3. CORBEL ELEVATION 1:50</button>
            <button class="dv-tab-btn manga-btn px-3 py-1.5 rounded text-[11px] font-bold ${this.currentDrawing==="stair-detail"?"manga-btn-crimson":"bg-ink-deep text-white border-azure"}" data-drawing="stair-detail">4. STAIR RECESS 1:25</button>
          </div>

          <div class="text-[11px] text-neutral-300 font-mono flex items-center gap-3">
            <span>${t.scaleLabel}</span>
            <span class="text-crimson font-black">● LIVE AUDIT ACTIVE</span>
          </div>
        </div>

      </div>
    `}attachEvents(){var s,o,a,l;const t=document.getElementById("dv-viewport"),e=document.getElementById("dv-canvas"),n=document.getElementById("dv-scale-text"),i=()=>{e&&(e.style.transform=`translate(${this.pan.x}px, ${this.pan.y}px) scale(${this.scale}) ${this.is3DIsometric?"rotateX(55deg) rotateZ(-40deg) skewX(-10deg)":""}`),n&&(n.textContent=`${Math.round(this.scale*100)}%`)};t==null||t.addEventListener("mousedown",c=>{this.isPanning=!0,this.startPan={x:c.clientX-this.pan.x,y:c.clientY-this.pan.y}}),window.addEventListener("mousemove",c=>{this.isPanning&&(this.pan.x=c.clientX-this.startPan.x,this.pan.y=c.clientY-this.startPan.y,i())}),window.addEventListener("mouseup",()=>{this.isPanning=!1}),t==null||t.addEventListener("wheel",c=>{c.preventDefault();const u=c.deltaY<0?.12:-.12;this.scale=Math.max(.4,Math.min(3.2,this.scale+u)),ze.playCaliperClick(),i()},{passive:!1}),(s=document.getElementById("btn-dv-zoom-in"))==null||s.addEventListener("click",()=>{this.scale=Math.min(3.2,this.scale+.2),ze.playCaliperClick(),i()}),(o=document.getElementById("btn-dv-zoom-out"))==null||o.addEventListener("click",()=>{this.scale=Math.max(.4,this.scale-.2),ze.playCaliperClick(),i()}),(a=document.getElementById("btn-dv-reset"))==null||a.addEventListener("click",()=>{this.scale=1,this.pan={x:0,y:0},this.is3DIsometric=!1,ze.playBlueprintUnfold(),i();const c=document.getElementById("btn-dv-3d");c&&(c.className="manga-btn px-3 py-1 bg-ink-deep text-sky border-azure rounded text-[11px] font-bold",c.innerHTML="📐 3D ISOMETRIC")}),(l=document.getElementById("btn-dv-3d"))==null||l.addEventListener("click",()=>{this.is3DIsometric=!this.is3DIsometric,ze.playStructuralClack(),i();const c=document.getElementById("btn-dv-3d");c&&(c.className=this.is3DIsometric?"manga-btn manga-btn-crimson px-3 py-1 rounded text-[11px] font-bold":"manga-btn px-3 py-1 bg-ink-deep text-sky border-azure rounded text-[11px] font-bold",c.innerHTML=this.is3DIsometric?"⚡ 3D ISOMETRIC: ON":"📐 3D ISOMETRIC")}),document.querySelectorAll(".dv-tab-btn").forEach(c=>{c.addEventListener("click",()=>{const u=c.getAttribute("data-drawing");u&&this.drawings[u]&&(this.currentDrawing=u,ze.playBlueprintUnfold(),this.render(),this.attachEvents())})}),document.querySelectorAll(".dv-layer-btn").forEach(c=>{c.addEventListener("click",()=>{const u=c.getAttribute("data-layer");u&&u in this.layers&&(this.layers[u]=!this.layers[u],ze.playPencilScratch(),this.updateLayerStyles())})})}updateLayerStyles(){document.querySelectorAll(".dv-layer-btn").forEach(e=>{const n=e.getAttribute("data-layer");if(n){const i=this.layers[n];e.classList.toggle("opacity-50",!i),e.classList.toggle("line-through",!i)}});const t=document.getElementById("dv-canvas");t&&(t.querySelectorAll(".layer-dimensions").forEach(e=>e.style.display=this.layers.dimensions?"block":"none"),t.querySelectorAll(".layer-grid").forEach(e=>e.style.display=this.layers.grid?"block":"none"),t.querySelectorAll(".layer-rebar").forEach(e=>e.style.display=this.layers.rebar?"block":"none"),t.querySelectorAll(".layer-annotations").forEach(e=>e.style.display=this.layers.annotations?"block":"none"))}getSectionSvg(){return`
      <svg viewBox="0 0 920 540" width="880" height="500" class="vector-drawing">
        <!-- Axis Line -->
        <g class="layer-grid" stroke="#399DD6" stroke-width="1.5" stroke-dasharray="6,4">
          <line x1="460" y1="40" x2="460" y2="480" />
          <circle cx="460" cy="30" r="14" fill="#09090B" stroke="#399DD6" stroke-width="2" />
          <text x="460" y="35" fill="#399DD6" font-family="'Fira Code', monospace" font-size="12" font-weight="bold" text-anchor="middle">CL</text>
        </g>

        <!-- Inverted-T Precast Beam -->
        <path d="M 220 380 L 360 380 L 360 210 L 560 210 L 560 380 L 700 380 L 700 460 L 220 460 Z" fill="#173C5B" stroke="#399DD6" stroke-width="3" />
        <text x="460" y="320" fill="#FFFFFF" font-family="'Fira Code', monospace" font-size="14" font-weight="bold" text-anchor="middle">INVERTED-T PRECAST BEAM</text>
        <text x="460" y="342" fill="#8CCDF2" font-family="'Fira Code', monospace" font-size="11" text-anchor="middle">STEM: 200mm | TOTAL DEPTH: 600mm</text>

        <!-- Neoprene Bearing Pads (10mm thick) -->
        <rect x="235" y="370" width="105" height="10" fill="#FF2233" stroke="#FFFFFF" stroke-width="1.5" />
        <rect x="580" y="370" width="105" height="10" fill="#FF2233" stroke="#FFFFFF" stroke-width="1.5" />

        <!-- Left Hollow-Core Slab HC-250 -->
        <rect x="110" y="245" width="230" height="125" fill="#F7FBFF" stroke="#09090B" stroke-width="3" />
        <!-- Hollow Cores -->
        <circle cx="160" cy="308" r="28" fill="#09090B" />
        <circle cx="230" cy="308" r="28" fill="#09090B" />
        <circle cx="300" cy="308" r="28" fill="#09090B" />

        <!-- Right Hollow-Core Slab HC-250 -->
        <rect x="580" y="245" width="230" height="125" fill="#F7FBFF" stroke="#09090B" stroke-width="3" />
        <circle cx="620" cy="308" r="28" fill="#09090B" />
        <circle cx="690" cy="308" r="28" fill="#09090B" />
        <circle cx="760" cy="308" r="28" fill="#09090B" />

        <!-- 50mm Structural Topping Slab -->
        <rect x="110" y="220" width="700" height="25" fill="#C9E9FC" opacity="0.8" stroke="#399DD6" stroke-width="2" />
        
        <!-- Rebar Mesh Layer -->
        <g class="layer-rebar" stroke="#E5A93C" stroke-width="2">
          <line x1="120" y1="232" x2="800" y2="232" stroke-dasharray="8,4" />
          <line x1="330" y1="232" x2="330" y2="390" />
          <line x1="590" y1="232" x2="590" y2="390" />
        </g>

        <!-- Dimensions Layer: 90mm Nominal Bearing -->
        <g class="layer-dimensions" stroke="#FF2233" stroke-width="2">
          <!-- Bearing dimension left -->
          <line x1="250" y1="180" x2="340" y2="180" />
          <line x1="250" y1="175" x2="250" y2="370" stroke-dasharray="2,2" />
          <line x1="340" y1="175" x2="340" y2="370" stroke-dasharray="2,2" />
          <text x="295" y="170" fill="#FF2233" font-family="'Fira Code', monospace" font-size="12" font-weight="900" text-anchor="middle">b_nom = 90mm</text>

          <!-- Total depth dimension -->
          <line x1="830" y1="220" x2="830" y2="460" />
          <text x="850" y="345" fill="#FF2233" font-family="'Fira Code', monospace" font-size="11" font-weight="bold">DEPTH: 600mm</text>
        </g>

        <!-- Annotations Layer -->
        <g class="layer-annotations" font-family="'Fira Code', monospace" font-size="11" fill="#FFFFFF">
          <text x="120" y="205" fill="#8CCDF2">50mm STRUCTURAL TOPPING + A142 MESH</text>
          <text x="120" y="395" fill="#E5A93C">HC-250 PRECAST HOLLOW-CORE SLAB</text>
          <text x="580" y="415" fill="#FF2233">10mm ELASTOMERIC NEOPRENE STRIP</text>
        </g>
      </svg>
    `}getPlanSvg(){return`
      <svg viewBox="0 0 920 540" width="880" height="500" class="vector-drawing">
        <!-- Structural Column Grids (9.0m x 6.0m) -->
        <g class="layer-grid" stroke="#399DD6" stroke-width="1.5">
          <!-- Horizontal grid lines A, B, C -->
          <line x1="80" y1="120" x2="840" y2="120" stroke-dasharray="6,4" />
          <line x1="80" y1="270" x2="840" y2="270" stroke-dasharray="6,4" />
          <line x1="80" y1="420" x2="840" y2="420" stroke-dasharray="6,4" />

          <!-- Vertical grid lines 1, 2, 3, 4 -->
          <line x1="160" y1="60" x2="160" y2="480" stroke-dasharray="6,4" />
          <line x1="380" y1="60" x2="380" y2="480" stroke-dasharray="6,4" />
          <line x1="600" y1="60" x2="600" y2="480" stroke-dasharray="6,4" />
          <line x1="820" y1="60" x2="820" y2="480" stroke-dasharray="6,4" />

          <!-- Grid Bubbles -->
          <circle cx="160" cy="50" r="14" fill="#173C5B" stroke="#399DD6" /><text x="160" y="55" fill="#FFFFFF" font-family="'Fira Code', monospace" font-size="11" font-weight="bold" text-anchor="middle">1</text>
          <circle cx="380" cy="50" r="14" fill="#173C5B" stroke="#399DD6" /><text x="380" y="55" fill="#FFFFFF" font-family="'Fira Code', monospace" font-size="11" font-weight="bold" text-anchor="middle">2</text>
          <circle cx="600" cy="50" r="14" fill="#173C5B" stroke="#399DD6" /><text x="600" y="55" fill="#FFFFFF" font-family="'Fira Code', monospace" font-size="11" font-weight="bold" text-anchor="middle">3</text>
          <circle cx="820" cy="50" r="14" fill="#173C5B" stroke="#399DD6" /><text x="820" y="55" fill="#FFFFFF" font-family="'Fira Code', monospace" font-size="11" font-weight="bold" text-anchor="middle">4</text>
        </g>

        <!-- Precast Columns at Grid Intersections -->
        <g fill="#09090B" stroke="#FF2233" stroke-width="2">
          <rect x="145" y="105" width="30" height="30" /><rect x="365" y="105" width="30" height="30" />
          <rect x="585" y="105" width="30" height="30" /><rect x="805" y="105" width="30" height="30" />
          <rect x="145" y="255" width="30" height="30" /><rect x="365" y="255" width="30" height="30" />
          <rect x="585" y="255" width="30" height="30" /><rect x="805" y="255" width="30" height="30" />
        </g>

        <!-- Hollow-Core Planks Laid Across Bays -->
        <g fill="#173C5B" stroke="#399DD6" stroke-width="1.5" opacity="0.8">
          <rect x="180" y="125" width="195" height="28" /><rect x="180" y="157" width="195" height="28" />
          <rect x="180" y="189" width="195" height="28" /><rect x="180" y="221" width="195" height="28" />
          <rect x="400" y="125" width="195" height="28" /><rect x="400" y="157" width="195" height="28" />
          <rect x="400" y="189" width="195" height="28" /><rect x="400" y="221" width="195" height="28" />
        </g>

        <!-- Span Direction Arrows -->
        <g stroke="#FF2233" stroke-width="2.5" fill="none">
          <line x1="280" y1="140" x2="280" y2="235" />
          <polygon points="275,145 280,135 285,145" fill="#FF2233" />
          <polygon points="275,230 280,240 285,230" fill="#FF2233" />
        </g>

        <!-- Dimension Strings -->
        <g class="layer-dimensions" stroke="#FF2233" stroke-width="1.8" font-family="'Fira Code', monospace" font-size="11" fill="#FF2233">
          <line x1="160" y1="495" x2="380" y2="495" /><text x="270" y="515" text-anchor="middle" font-weight="bold">BAY: 9000 mm</text>
          <line x1="380" y1="495" x2="600" y2="495" /><text x="490" y="515" text-anchor="middle" font-weight="bold">BAY: 9000 mm</text>
          <line x1="50" y1="120" x2="50" y2="270" /><text x="40" y="200" text-anchor="middle" font-weight="bold" transform="rotate(-90 40 200)">6000 mm</text>
        </g>
      </svg>
    `}getElevationSvg(){return`
      <svg viewBox="0 0 920 540" width="880" height="500" class="vector-drawing">
        <!-- Precast Column Shaft -->
        <rect x="410" y="60" width="100" height="420" fill="#14212D" stroke="#399DD6" stroke-width="3" />
        
        <!-- Left Corbel Bracket -->
        <polygon points="410,240 310,280 310,340 410,340" fill="#173C5B" stroke="#FF2233" stroke-width="3" />
        <!-- Right Corbel Bracket -->
        <polygon points="510,240 610,280 610,340 510,340" fill="#173C5B" stroke="#FF2233" stroke-width="3" />

        <!-- Corbel Closed Loop Stirrups (Hanger Rebar) -->
        <g class="layer-rebar" stroke="#E5A93C" stroke-width="2.5" fill="none">
          <line x1="330" y1="300" x2="400" y2="300" />
          <line x1="330" y1="320" x2="400" y2="320" />
          <line x1="520" y1="300" x2="590" y2="300" />
          <line x1="520" y1="320" x2="590" y2="320" />
        </g>

        <!-- Neoprene Bearing Pads on Corbel Seat -->
        <rect x="320" y="272" width="80" height="8" fill="#FF2233" stroke="#FFFFFF" />
        <rect x="520" y="272" width="80" height="8" fill="#FF2233" stroke="#FFFFFF" />

        <!-- Dimensions -->
        <g class="layer-dimensions" stroke="#FF2233" stroke-width="1.8" font-family="'Fira Code', monospace" font-size="11" fill="#FF2233">
          <line x1="310" y1="365" x2="410" y2="365" /><text x="360" y="385" text-anchor="middle" font-weight="bold">CORBEL: 300mm</text>
          <line x1="410" y1="35" x2="510" y2="35" /><text x="460" y="25" text-anchor="middle" font-weight="bold">COL: 500mm</text>
        </g>

        <!-- Annotations -->
        <g class="layer-annotations" font-family="'Fira Code', monospace" font-size="11" fill="#FFFFFF">
          <text x="180" y="260" fill="#FF2233">BEARING SEAT (NEOPRENE PAD)</text>
          <text x="180" y="325" fill="#E5A93C">CLOSED LOOP HANGER TIES</text>
          <text x="630" y="310" fill="#8CCDF2">45° COMPRESSION STRUT (STM)</text>
        </g>
      </svg>
    `}getStairSvg(){return`
      <svg viewBox="0 0 920 540" width="880" height="500" class="vector-drawing">
        <!-- Landing Slab with Recess Pocket -->
        <path d="M 80 180 L 320 180 L 320 260 L 440 260 L 440 380 L 80 380 Z" fill="#14212D" stroke="#399DD6" stroke-width="3" />
        
        <!-- Precast Stair Flight Nib (Rebated Tooth Resting on Pocket) -->
        <path d="M 410 240 L 410 180 L 780 440 L 680 440 L 340 240 Z" fill="#F7FBFF" stroke="#09090B" stroke-width="3" />

        <!-- Acoustic Neoprene Isolation Strip (10mm) in Nib Recess -->
        <path d="M 325 245 L 325 255 L 420 255" fill="none" stroke="#FF2233" stroke-width="4" />

        <!-- Stair Steps Treads & Risers -->
        <g stroke="#09090B" stroke-width="2.5" fill="#E5F4FF">
          <path d="M 410 180 L 470 180 L 470 230 L 530 230 L 530 280 L 590 280 L 590 330 L 650 330 L 650 380 L 710 380 L 710 430" />
        </g>

        <!-- Dimensions -->
        <g class="layer-dimensions" stroke="#FF2233" stroke-width="1.8" font-family="'Fira Code', monospace" font-size="11" fill="#FF2233">
          <line x1="320" y1="280" x2="420" y2="280" /><text x="370" y="300" text-anchor="middle" font-weight="bold">RECESS: 100mm</text>
          <line x1="470" y1="160" x2="530" y2="160" /><text x="500" y="150" text-anchor="middle" font-weight="bold">GO: 280mm</text>
        </g>

        <!-- Annotations -->
        <g class="layer-annotations" font-family="'Fira Code', monospace" font-size="11" fill="#FFFFFF">
          <text x="80" y="150" fill="#399DD6">PRECAST CONCRETE LANDING SLAB</text>
          <text x="300" y="340" fill="#FF2233">ACOUSTIC ELASTOMERIC PAD (IMPACT SOUND ISO)</text>
          <text x="560" y="160" fill="#E5A93C">TREAD: 280mm | RISER: 175mm</text>
        </g>
      </svg>
    `}}const pc=[{id:"precast-bim",title:"PRECAST BIM & COMPUTATIONAL STRUCTURAL SUITE",subtitle:"Revit API Automation • Hollow-Core Slab Layouts • Structural Corbels",category:"ARCHITECTURE & BIM",badge:"ENGINEERING SUITE",status:"DOCUMENTED CAPABILITY",tools:["Autodesk Revit API","pyRevit","Python","PCI Design Manual","Eurocode 2"],highlight:"Algorithmic placement of precast floor systems, inverted-T ledge beams, and corbel calculations inside strict Revit API Transactions.",metrics:[{label:"STANDARD",value:"PCI / EN 1992"},{label:"ELEMENT TRACKING",value:"100% Unique Marks"},{label:"UNIT CONVERSION",value:"304.8 mm/ft"},{label:"AUTOMATION",value:"Revit Transactions"}],chapters:{ch1_idea:"In conventional architectural-structural coordination, modeling hundreds of precast hollow-core slabs, inverted-T beams, and beam-to-column corbels is labor-intensive and prone to bearing-length errors. The idea was to create an automated computational bridge in Revit that calculates bearings and places parametric elements algorithmically.",ch2_challenge:"Precast elements require strict bearing minimums (typically 75mm on masonry, 60mm on steel, 90mm on concrete ledges). Web integrity must be preserved when transverse slab cuts occur, and all geometry modifications must run inside verified database Transactions without corrupting model worksets.",ch3_blueprint:"Architectural floor loops and column grids are extracted as boundary vectors. The algorithm determines optimal span directions, divides floor envelopes into modular 1200mm hollow-core widths, and generates bearing ledges on supporting inverted-T and L-shaped beams.",ch4_engineering:"Implemented verified structural calculations for inverted-T beam ledges based on PCI Handbook equations (punching shear, cantilever bending, hanger steel tension) and corbel shear-friction under vertical and horizontal restrained creep forces.",ch5_build:"Built using Python and pyRevit against the Autodesk Revit API. The script iterates boundary curves, instantiates structural framing and floor families, binds shared parameters for piece marks, and checks clash clearances.",ch6_result:"Dramatically reduces modeling time from hours to seconds for multi-story precast frame assemblies, guarantees code-compliant ledge bearing widths, and produces automated shop drawing schedules with piece mark IDs.",ch7_next:"theory-of-structures"}},{id:"theory-of-structures",title:"THEORY OF STRUCTURES MASTERY LAB",subtitle:"Interactive Structural Analysis & Determinacy Engine",category:"COMPUTATIONAL ENGINEERING",badge:"LAB & SOLVERS",status:"PRODUCTION CODEBASE",tools:["JavaScript (ES6+)","KaTeX Math Engine","Canvas Graphics","HTML5"],highlight:"Interactive analytical platform computing determinate & indeterminate beams, virtual work, slope deflection, and moment distribution.",repoUrl:"https://github.com/dagiyosi-pixel/theory-of-structures-mastery-lab",metrics:[{label:"METHODS",value:"7 Core Modules"},{label:"ACCURACY",value:"Exact Symbolic/Math"},{label:"EQUATIONS",value:"KaTeX Rendered"},{label:"SOLVER",value:"Real-Time Matrix"}],chapters:{ch1_idea:"Structural engineering students and practitioners often struggle with the conceptual leap between abstract differential equations and physical beam bending. The Mastery Lab was built to turn complex structural theory into an intuitive, real-time graphical calculator.",ch2_challenge:"Indeterminate structures require multi-degree-of-freedom matrix solutions (Consistent Deformation, Three Moment Equation, Slope Deflection, and Hardy Cross Moment Distribution) with step-by-step intermediate checks and KaTeX equation formatting.",ch3_blueprint:"Designed as an analytical workbook: input beam span lengths, support conditions (fixed, pinned, roller), and loading types (UDL, point load, applied moment), producing continuous Bending Moment Diagrams (BMD) and Shear Force Diagrams (SFD).",ch4_engineering:"Formulated exact stiffness matrices: [K]{u} = {P}, conjugate beam rotations, and virtual work integrals ($\\int \\frac{M m}{EI} dx$) with automated integration table lookups.",ch5_build:"Engineered in vanilla JavaScript for maximum speed without framework overhead, utilizing KaTeX for LaTeX formula rendering, custom canvas graphing for BMD/SFD curves, and offline local caching.",ch6_result:"A self-contained engineering laboratory solving 7 major structural methods, providing step-by-step derivations, distractor diagnostics, and interactive deformation plots.",ch7_next:"ethiopia-curriculum"}},{id:"ethiopia-curriculum",title:"ETHIOPIAN NATIONAL CURRICULUM PLATFORM (SQ3R)",subtitle:"Grade 7 & 8 Examination Mastery & Ministry Simulator",category:"EDUCATIONAL TECHNOLOGY",badge:"FLAGSHIP APP",status:"DEPLOYED PWA",tools:["Progressive Web App","HTML5 Canvas (1200x840)","Web Audio API","LocalStorage"],highlight:"Authentic, offline-first study and timed examination platform based on the SQ3R method, aligned with the FDRE Ministry of Education CBA.",liveUrl:"https://dagiyosi-pixel.github.io/ethiopia-curriculum-sq3r-platform/",repoUrl:"https://github.com/dagiyosi-pixel/ethiopia-curriculum-sq3r-platform",metrics:[{label:"CURRICULUM UNITS",value:"96 Units"},{label:"SUBTOPICS",value:"184 Subtopics"},{label:"CBA QUESTIONS",value:"577+ Verified Qs"},{label:"MASTERY GATE",value:"Strict 80%"}],chapters:{ch1_idea:"Middle school students preparing for Ethiopian national examinations often lack access to reliable internet, comprehensive textbooks, or personalized exam hall practice. The idea: engineer a 100% offline-first PWA implementing the proven SQ3R study cycle.",ch2_challenge:"Packaging 96 complete units across 6 subjects (Math, Science, Social Studies, English, Citizenship, IT) with 577+ verified questions while keeping payload size tiny and running smoothly on low-cost Android phones without internet.",ch3_blueprint:"Structured information architecture: 1) Survey (Syllabus glance), 2) Question (Diagnostic checkpoints), 3) Read (MoE textbook archive), 4) Recite (3D Leitner flip flashcards), and 5) Review (Timed Ministry Exam Hall Simulator).",ch4_engineering:"Psychometric scoring engine with zero false inflation: calculating realistic national exam prediction curves, distractor autopsy logs, and automated A4 1-page formula sheet generation.",ch5_build:"Client-side PWA architecture with Service Worker asset caching, high-resolution HTML5 Canvas generator drawing the official FDRE MoE crest and honors certificate with 1-click HD PNG export, and Web Audio sound feedback.",ch6_result:"Empowered students with a zero-data, accessible learning tool that tracks individual mastery, multi-account progress for shared family devices, and instant Telegram honors challenge sharing.",ch7_next:"ethiopia-360"}},{id:"ethiopia-360",title:"ETHIOPIA//360 — COMMUNITY ATLAS",subtitle:"Geographic, Cultural & Spatial Visual Explorer",category:"SPATIAL COMPUTING & GIS",badge:"DIGITAL ATLAS",status:"PRODUCTION REPOSITORY",tools:["JavaScript","Modern CSS","SVG Spatial Mapping","Geo Data"],highlight:"Interactive digital atlas exploring the geographic, architectural, and historical topology of Ethiopia.",repoUrl:"https://github.com/dagiyosi-pixel/ethiopia-360",metrics:[{label:"REGIONS",value:"All Regional States"},{label:"TOPOLOGY",value:"Rift Valley to Highlands"},{label:"MAPPING",value:"Interactive Vector SVG"},{label:"CULTURE",value:"Heritage & Architecture"}],chapters:{ch1_idea:"Ethiopia possesses extraordinary geological, archaeological, and architectural diversity (from the monolithic rock churches of Lalibela to the Great Rift Valley). ETHIOPIA//360 was conceived as an interactive digital atlas celebrating this heritage.",ch2_challenge:"Presenting multi-layered geographic, cultural, and architectural data in an engaging, visual way without heavy, slow GIS software dependencies.",ch3_blueprint:"Created an interactive vector map interface with fluid region-by-region drill-down, synchronized architectural dossiers, and elevation cross-sections.",ch4_engineering:"Optimized vector coordinates, coordinate projection algorithms, and lightweight spatial metadata querying.",ch5_build:"Built using semantic HTML5, SVG path interaction, custom animations, and responsive typography.",ch6_result:"A clean, responsive interactive digital showcase of Ethiopian topography, cultural monuments, and architectural history.",ch7_next:"amt-exam"}},{id:"amt-exam",title:"AMT EXAM PREPARATION PLATFORM",subtitle:"Adaptive Diagnostic Assessment Engine",category:"PRODUCT DESIGN & MOBILE",badge:"EXAM PLATFORM",status:"DOCUMENTED APPLICATION",tools:["Mobile-First UI","JavaScript","LocalStorage","Web Audio"],highlight:"High-retention assessment engine with timed diagnostic question banks, performance analytics, and rapid active recall.",repoUrl:"https://github.com/dagiyosi-pixel/amt-exam-app",metrics:[{label:"ASSESSMENT",value:"Adaptive Timed Tests"},{label:"INTERFACE",value:"Thumb-Friendly Mobile"},{label:"FEEDBACK",value:"Instant Explanations"},{label:"STORAGE",value:"Offline Device State"}],chapters:{ch1_idea:"Exam candidates require rapid, low-friction practice tests that isolate knowledge gaps immediately after every question rather than waiting until the end.",ch2_challenge:"Designing an intuitive, thumb-friendly mobile interface with zero distractions and instant visual feedback on error patterns.",ch3_blueprint:"Streamlined single-screen question flow with an interactive question palette, flag-for-review tags, and detailed distractor explanations.",ch4_engineering:"Scoring algorithms weighting question difficulty and tracking speed-per-question to build time-management stamina.",ch5_build:"Responsive modern web application optimized for smartphones and offline local storage.",ch6_result:"Proven study companion allowing candidates to rapidly drill weak topics and track progress toward target scores.",ch7_next:"manga-noir"}},{id:"manga-noir",title:"MANGA-NOIR WEBGL SHADER LAB",subtitle:"Real-Time 3D Cel-Shading & Graphic Novel Shaders",category:"CREATIVE 3D & SHADERS",badge:"EXPERIMENTAL LAB",status:"ACTIVE 3D ENGINE",tools:["Three.js","GLSL Shaders","GSAP 3","Lenis Scroll","Web Audio API"],highlight:"GPU-accelerated 3D engine rendering real-time manga hatching, toon rim-lighting, and interactive particle dynamics.",liveUrl:"https://dagiyosi-pixel.github.io",repoUrl:"https://github.com/dagiyosi-pixel/dagiyosi-pixel.github.io",metrics:[{label:"FRAME RATE",value:"60+ FPS Native"},{label:"SHADERS",value:"Custom GLSL Cel/Hatch"},{label:"PARTICLES",value:"1,800+ Reactive"},{label:"SOUND",value:"Procedural Web Audio"}],chapters:{ch1_idea:"Inspired by the high-impact graphic storytelling of contemporary manga and the interactive creative web development of Samana Studio. The mission: build an authentic, interactive 3D manga experience running directly in the browser.",ch2_challenge:"Simulating traditional ink cross-hatching and cel-shaded screentones on complex 3D meshes at native 60fps without heavy raster textures.",ch3_blueprint:"Constructed a custom GLSL pipeline where surface normal vectors calculate light luminance, procedurally generating diagonal crosshatch patterns in dark zones and electric rim-light accents in highlights.",ch4_engineering:"Vertex & fragment shaders (`MangaHatchShader`) computing screen-space UV coordinates, smooth stepped tone ramps, and inertial mouse tracking.",ch5_build:"Integrated with Three.js, GSAP ScrollTrigger, and Lenis momentum scrolling. Features an articulated 3D manga hand and procedural sound synthesizer.",ch6_result:"An award-winning caliber creative coding showcase that demonstrates the convergence of digital art, 3D technology, and storytelling.",ch7_next:"precast-bim"}}];class IM{constructor(){this.modal=document.getElementById("case-study-modal"),this.content=document.getElementById("case-study-content"),this.closeBtn=document.getElementById("btn-close-case-study"),this.currentProjectId=null,this.init()}init(){var t;this.modal&&((t=this.closeBtn)==null||t.addEventListener("click",()=>this.close()),window.addEventListener("keydown",e=>{e.key==="Escape"&&!this.modal.classList.contains("hidden")&&this.close()}),this.modal.addEventListener("click",e=>{const n=e.target.closest("[data-next-project]");if(n){const i=n.getAttribute("data-next-project");i&&this.open(i)}}))}open(t){const e=pc.find(s=>s.id===t);if(!e)return;this.currentProjectId=t,ze.playBlueprintUnfold();const n=e.chapters,i=pc.find(s=>s.id===n.ch7_next)||pc[0];this.content.innerHTML=`
      <!-- Header Banner / Breadcrumb -->
      <div class="border-b-2 border-navy pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div class="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-azure uppercase tracking-wider">
            <span>// MANHWA DOSSIER</span>
            <span>•</span>
            <span class="bg-navy text-white px-2 py-0.5 rounded">${e.category}</span>
            <span class="bg-gold text-navy px-2 py-0.5 rounded font-black">${e.badge}</span>
          </div>
          <h2 class="font-editorial font-extrabold text-3xl sm:text-5xl text-navy uppercase tracking-tight leading-tight">
            ${e.title}
          </h2>
          <p class="font-body text-sm sm:text-base text-neutral-600 mt-2 font-normal leading-relaxed">
            ${e.subtitle}
          </p>
        </div>

        <div class="flex flex-wrap gap-2">
          ${e.liveUrl?`
            <a href="${e.liveUrl}" target="_blank" rel="noopener noreferrer" class="manga-btn px-4 py-2 bg-azure text-white text-xs font-bold uppercase rounded border-2 border-navy shadow-brutal-sm hover:bg-navy transition">
              <span>🚀 LAUNCH LIVE APP</span>
            </a>
          `:""}
          ${e.repoUrl?`
            <a href="${e.repoUrl}" target="_blank" rel="noopener noreferrer" class="manga-btn px-4 py-2 bg-white text-navy text-xs font-bold uppercase rounded border-2 border-navy shadow-brutal-sm hover:bg-ice transition">
              <span>📁 INSPECT REPO</span>
            </a>
          `:""}
        </div>
      </div>

      <!-- Verified Metrics Strip -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-ice border-2 border-navy rounded mb-10 shadow-brutal-sm">
        ${e.metrics.map(s=>`
          <div class="p-2">
            <span class="block text-2xl sm:text-3xl font-display text-azure leading-tight">${s.value}</span>
            <span class="font-mono text-[10px] font-bold text-navy uppercase tracking-wider">${s.label}</span>
          </div>
        `).join("")}
      </div>

      <!-- Seven Narrative Chapters -->
      <div class="space-y-12">
        
        <!-- CHAPTER 01: THE IDEA -->
        <div class="manhwa-chapter border-l-4 border-azure pl-6 relative">
          <span class="font-mono text-xs font-bold text-azure uppercase tracking-widest block mb-1">
            CHAPTER 01 // THE IDEA
          </span>
          <h3 class="font-editorial font-bold text-xl sm:text-2xl text-navy uppercase mb-3 tracking-tight">GENESIS OF THE CONCEPT</h3>
          <p class="font-body text-neutral-700 leading-relaxed text-sm md:text-base">
            ${n.ch1_idea}
          </p>
        </div>

        <!-- CHAPTER 02: THE CHALLENGE -->
        <div class="manhwa-chapter border-l-4 border-navy pl-6 relative">
          <span class="font-mono text-xs font-bold text-navy uppercase tracking-widest block mb-1">
            CHAPTER 02 // THE CHALLENGE
          </span>
          <h3 class="font-editorial font-bold text-xl sm:text-2xl text-navy uppercase mb-3 tracking-tight">TECHNICAL & SPATIAL CONSTRAINTS</h3>
          <p class="font-body text-neutral-700 leading-relaxed text-sm md:text-base">
            ${n.ch2_challenge}
          </p>
        </div>

        <!-- CHAPTER 03: THE BLUEPRINT -->
        <div class="manhwa-chapter border-l-4 border-sky pl-6 relative bg-ice/40 p-6 rounded border border-navy/20">
          <span class="font-mono text-xs font-bold text-azure uppercase tracking-widest block mb-1">
            CHAPTER 03 // THE BLUEPRINT
          </span>
          <h3 class="font-editorial font-bold text-xl sm:text-2xl text-navy uppercase mb-3 tracking-tight">SYSTEM ARCHITECTURE & SCHEMATICS</h3>
          <p class="font-body text-neutral-700 leading-relaxed text-sm md:text-base mb-4">
            ${n.ch3_blueprint}
          </p>
          <div class="flex flex-wrap gap-2 font-mono text-xs">
            ${e.tools.map(s=>`<span class="bg-white border border-navy px-2.5 py-1 rounded text-navy font-bold">${s}</span>`).join("")}
          </div>
        </div>

        <!-- CHAPTER 04: THE ENGINEERING -->
        <div class="manhwa-chapter border-l-4 border-gold pl-6 relative">
          <span class="font-mono text-xs font-bold text-gold uppercase tracking-widest block mb-1">
            CHAPTER 04 // THE ENGINEERING
          </span>
          <h3 class="font-editorial font-bold text-xl sm:text-2xl text-navy uppercase mb-3 tracking-tight">MATHEMATICS, LOGIC & EQUATIONS</h3>
          <p class="font-body text-neutral-700 leading-relaxed text-sm md:text-base">
            ${n.ch4_engineering}
          </p>
        </div>

        <!-- CHAPTER 05: THE BUILD -->
        <div class="manhwa-chapter border-l-4 border-azure pl-6 relative">
          <span class="font-mono text-xs font-bold text-azure uppercase tracking-widest block mb-1">
            CHAPTER 05 // THE BUILD
          </span>
          <h3 class="font-editorial font-bold text-xl sm:text-2xl text-navy uppercase mb-3 tracking-tight">DEVELOPMENT & IMPLEMENTATION</h3>
          <p class="font-body text-neutral-700 leading-relaxed text-sm md:text-base">
            ${n.ch5_build}
          </p>
        </div>

        <!-- CHAPTER 06: THE RESULT -->
        <div class="manhwa-chapter border-l-4 border-green-600 pl-6 relative bg-white p-6 rounded border-2 border-navy shadow-brutal-sm">
          <span class="font-mono text-xs font-bold text-green-700 uppercase tracking-widest block mb-1">
            CHAPTER 06 // THE RESULT
          </span>
          <h3 class="font-editorial font-bold text-xl sm:text-2xl text-navy uppercase mb-3 tracking-tight">VERIFIED OUTCOMES & IMPACT</h3>
          <p class="font-body text-neutral-800 leading-relaxed text-sm md:text-base font-medium">
            ${n.ch6_result}
          </p>
        </div>

        <!-- CHAPTER 07: NEXT ADVENTURE -->
        <div class="border-t-2 border-navy pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-cloud p-6 rounded border border-navy">
          <div>
            <span class="font-mono text-xs font-bold text-azure uppercase tracking-wider block">
              CHAPTER 07 // NEXT ADVENTURE
            </span>
            <h4 class="font-editorial font-extrabold text-2xl text-navy uppercase tracking-tight">
              ${i.title}
            </h4>
            <span class="font-body text-xs text-neutral-500">${i.subtitle}</span>
          </div>

          <button data-next-project="${i.id}" class="manga-btn px-6 py-3 bg-navy text-white text-xs font-bold uppercase rounded border-2 border-navy shadow-brutal hover:bg-azure transition flex items-center gap-2">
            <span>ENTER NEXT CHRONICLE</span>
            <span>→</span>
          </button>
        </div>

      </div>
    `,this.modal.classList.remove("hidden"),document.body.style.overflow="hidden",this.content.scrollTop=0}close(){this.modal.classList.add("hidden"),document.body.style.overflow="",ze.playCaliperClick()}}class UM{constructor(t){this.canvas=t,this.ctx=t.getContext("2d"),this.points=[],this.splatters=[],this.maxPoints=28,this.mouse={x:0,y:0,prevX:0,prevY:0,speed:0},this.active=!0,this.init()}init(){this.resize(),window.addEventListener("resize",()=>this.resize()),window.addEventListener("mousemove",t=>{const e=t.clientX-this.mouse.prevX,n=t.clientY-this.mouse.prevY;this.mouse.speed=Math.sqrt(e*e+n*n),this.mouse.prevX=t.clientX,this.mouse.prevY=t.clientY,this.mouse.x=t.clientX,this.mouse.y=t.clientY,this.active&&(this.points.push({x:t.clientX,y:t.clientY,size:Math.max(2,Math.min(14,this.mouse.speed*.35)),alpha:.65,color:this.mouse.speed>25?"#FF2233":"#173C5B"}),this.points.length>this.maxPoints&&this.points.shift(),this.mouse.speed>35&&Math.random()>.6&&this.spawnSplatter(t.clientX,t.clientY,3))}),window.addEventListener("mousedown",t=>{this.spawnSplatter(t.clientX,t.clientY,16)}),this.animate()}resize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}spawnSplatter(t,e,n=10){for(let i=0;i<n;i++){const s=Math.random()*Math.PI*2,o=Math.random()*8+2;this.splatters.push({x:t,y:e,vx:Math.cos(s)*o,vy:Math.sin(s)*o,radius:Math.random()*4+1.5,alpha:.85,decay:Math.random()*.03+.015,color:Math.random()>.4?"#FF2233":"#173C5B"})}}animate(){if(requestAnimationFrame(this.animate.bind(this)),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.points.length>2)for(let t=1;t<this.points.length-1;t++){const e=this.points[t],n=this.points[t+1],i=(e.x+n.x)/2,s=(e.y+n.y)/2;this.ctx.beginPath(),this.ctx.moveTo(e.x,e.y),this.ctx.quadraticCurveTo(e.x,e.y,i,s),this.ctx.strokeStyle=e.color,this.ctx.globalAlpha=e.alpha,this.ctx.lineWidth=e.size,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.stroke(),e.alpha*=.92,e.size*=.96}this.points=this.points.filter(t=>t.alpha>.05);for(let t=this.splatters.length-1;t>=0;t--){const e=this.splatters[t];if(e.x+=e.vx,e.y+=e.vy,e.vx*=.92,e.vy*=.92,e.alpha-=e.decay,e.alpha<=0){this.splatters.splice(t,1);continue}this.ctx.beginPath(),this.ctx.arc(e.x,e.y,e.radius,0,Math.PI*2),this.ctx.fillStyle=e.color,this.ctx.globalAlpha=e.alpha,this.ctx.fill()}this.ctx.globalAlpha=1}}rl.registerPlugin(ee);document.addEventListener("DOMContentLoaded",()=>{const r=new v_({duration:1.2,easing:L=>Math.min(1,1.001-Math.pow(2,-10*L)),smoothWheel:!0,wheelMultiplier:.85});r.on("scroll",ee.update),rl.ticker.add(L=>{r.raf(L*1e3)}),rl.ticker.lagSmoothing(0);const t=document.getElementById("ink-canvas");t&&new UM(t);const e=document.getElementById("blueprint-canvas");let n=null;e&&(n=new CM(e));const i=document.getElementById("btn-hero-toggle-exploded"),s=document.getElementById("btn-hero-reset-cam"),o=document.getElementById("btn-hero-cycle-mode");i==null||i.addEventListener("click",()=>{if(n){const L=n.toggleExploded();i.innerHTML=L?"<span>🔄 COLLAPSE 3D ASSEMBLY</span>":"<span>💥 EXPLODE 3D ASSEMBLY</span>",P(L?"Exploded Assembly: Precast components separated":"Assembly Restored: Structural joints locked")}}),s==null||s.addEventListener("click",()=>{n&&(n.resetCamera(),i&&(i.innerHTML="<span>💥 EXPLODE 3D ASSEMBLY</span>"),P("Camera orientation reset"))}),o==null||o.addEventListener("click",()=>{if(n){const L=n.cycleVisualMode();o.textContent=`MODE: ${L.toUpperCase()} MANGA`,P(`Visual Style: ${L.toUpperCase()} MODE`)}}),document.querySelectorAll(".layer-toggle-btn").forEach(L=>{L.addEventListener("click",()=>{const U=L.getAttribute("data-layer");if(n&&U){const k=n.toggleLayer(U);L.classList.toggle("bg-crimson",k),L.classList.toggle("text-white",k),L.classList.toggle("border-crimson",k),L.classList.toggle("bg-ink-slate",!k),L.classList.toggle("text-cloud",!k),L.classList.toggle("border-azure",!k)}})});const a=document.getElementById("shader-gallery-canvas");let l=null;if(a){l=new PM(a),a.addEventListener("mouseenter",()=>{l.setHover(!0),ze.playPencilScratch()}),a.addEventListener("mouseleave",()=>{l.setHover(!1)});const L=document.getElementById("btn-show-arch"),U=document.getElementById("btn-show-manga");L==null||L.addEventListener("click",()=>{l.setTransition(0),L.classList.add("bg-crimson","text-white"),L.classList.remove("bg-ink-slate","text-cloud"),U.classList.add("bg-ink-slate","text-cloud"),U.classList.remove("bg-crimson","text-white"),ze.playBlueprintUnfold(),P("Shader Active: Architectural Perspective")}),U==null||U.addEventListener("click",()=>{l.setTransition(1),U.classList.add("bg-crimson","text-white"),U.classList.remove("bg-ink-slate","text-cloud"),L.classList.add("bg-ink-slate","text-cloud"),L.classList.remove("bg-crimson","text-white"),ze.playStructuralClack(),P("Shader Active: Manga Awakening")})}new LM,document.getElementById("drawing-viewer-root")&&new DM("drawing-viewer-root");const u=document.getElementById("process-stage"),d=document.querySelectorAll(".process-story-step"),h=document.getElementById("process-visual-content"),f=[`<!-- Step 1: Spatial Intuition -->
     <div class="space-y-4 text-center">
       <div class="sfx-impact font-cjk text-7xl mb-2">直感!</div>
       <div class="font-mono text-xs font-bold text-azure">// FIRST PRINCIPLES DECONSTRUCTION</div>
       <p class="font-body text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">Deconstructing spatial constraints and structural requirements from first principles into core physics logic.</p>
       <div class="w-24 h-1 bg-crimson mx-auto rounded"></div>
     </div>`,`<!-- Step 2: Blueprint Schematic -->
     <div class="space-y-4 text-center">
       <div class="sfx-rumble font-cjk text-6xl mb-2">下絵!</div>
       <div class="font-mono text-xs font-bold text-sky">// VECTOR COORDINATE DRAFTING</div>
       <p class="font-body text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">Drafting coordinate grids, column axes, and component boundaries with millimeter-exact vector lines.</p>
       <div class="w-24 h-1 bg-azure mx-auto rounded"></div>
     </div>`,`<!-- Step 3: Computational Equations -->
     <div class="space-y-4 text-center">
       <div class="sfx-construction font-cjk text-6xl mb-2">数式!</div>
       <div class="font-mono text-xs font-bold text-crimson">// STRUCTURAL MATRIX SOLVERS</div>
       <p class="font-body text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">Calculating bending moments, shear transfer, and bearing lengths (b<sub>nom</sub> ≥ 90mm) under Eurocode 2 and PCI standards.</p>
       <div class="w-24 h-1 bg-gold mx-auto rounded"></div>
     </div>`,`<!-- Step 4: 3D Precast Assembly -->
     <div class="space-y-4 text-center">
       <div class="sfx-impact font-cjk text-7xl mb-2">構築!</div>
       <div class="font-mono text-xs font-bold text-azure">// SOLID PRECAST JOINT LOCKING</div>
       <p class="font-body text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">Extruding 2D geometry into 3D precast columns, corbels, and hollow-core slabs inside Autodesk Revit API Transactions.</p>
       <div class="w-24 h-1 bg-crimson mx-auto rounded"></div>
     </div>`,`<!-- Step 5: Deployed Production -->
     <div class="space-y-4 text-center">
       <div class="sfx-impact font-cjk text-7xl mb-2 text-white">完成!</div>
       <div class="font-mono text-xs font-bold text-green-400">// VERIFIED DEPLOYED REALITY</div>
       <p class="font-body text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">Shipping hardened, accessible, 60 FPS applications that work seamlessly across every device and screen.</p>
       <div class="w-24 h-1 bg-green-400 mx-auto rounded"></div>
     </div>`];u&&ee.create({trigger:"#process-stage",start:"top top",end:"+=2400",pin:!0,scrub:1,onUpdate:L=>{let U=Math.min(4,Math.floor(L.progress*5));d.forEach((k,q)=>{k.classList.toggle("bg-crimson",q===U),k.classList.toggle("text-white",q===U),k.classList.toggle("bg-ink-slate",q!==U),k.classList.toggle("text-neutral-400",q!==U)}),h&&(h.innerHTML=f[U])}});const g=new IM;document.querySelectorAll(".btn-open-case-study").forEach(L=>{L.addEventListener("click",U=>{U.stopPropagation();const k=L.getAttribute("data-project-id");k&&g.open(k)})});const _=document.getElementById("blueprint-cursor");let m=window.innerWidth/2,p=window.innerHeight/2,y=m,S=p;window.addEventListener("mousemove",L=>{m=L.clientX,p=L.clientY});function v(){y+=(m-y)*.25,S+=(p-S)*.25,_&&(_.style.transform=`translate(${y}px, ${S}px)`),requestAnimationFrame(v)}requestAnimationFrame(v),document.querySelectorAll("a, button, input, .manhwa-panel, .comic-shard").forEach(L=>{L.addEventListener("mouseenter",()=>{_==null||_.classList.add("cursor-hover"),ze.playPencilScratch()}),L.addEventListener("mouseleave",()=>{_==null||_.classList.remove("cursor-hover")})});const A=document.getElementById("btn-audio"),w=document.getElementById("audio-icon"),E=document.getElementById("audio-label");A==null||A.addEventListener("click",()=>{const L=ze.toggle();w&&E&&(w.textContent=L?"📐":"🔇",E.textContent=L?"SOUND: ON":"SOUND: OFF"),P(L?"Drafting Audio Enabled":"Audio Muted")});const R=document.getElementById("btn-copy-email"),M=document.getElementById("blueprint-toast");let x=null;function P(L){M&&(M.textContent=L,M.classList.remove("opacity-0","pointer-events-none"),M.classList.add("opacity-100"),clearTimeout(x),x=setTimeout(()=>{M.classList.add("opacity-0","pointer-events-none"),M.classList.remove("opacity-100")},2500))}R==null||R.addEventListener("click",()=>{navigator.clipboard.writeText("dagiyosi5321@gmail.com").then(()=>{ze.playCaliperClick(),P("EMAIL COPIED: dagiyosi5321@gmail.com")})}),console.log(`%cTHE BLUEPRINT UNIVERSE // 3D MANGA ARCHITECT ENGINE ACTIVE
EffectComposer Post-Processing, GSAP ScrollTrigger & Shaders Online`,"color: #FF2233; font-weight: bold; font-size: 14px; background: #09090B; padding: 6px 12px; border: 2px solid #FF2233; border-radius: 4px;")});
