var fg=Object.defineProperty;var dg=(r,t,e)=>t in r?fg(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Ct=(r,t,e)=>dg(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function Ui(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Kd(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Yn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Fo={duration:.5,overwrite:!1,delay:0},Zh,on,Le,ni=1e8,we=1/ni,Uc=Math.PI*2,pg=Uc/4,mg=0,Jd=Math.sqrt,gg=Math.cos,_g=Math.sin,rn=function(t){return typeof t=="string"},ke=function(t){return typeof t=="function"},Xi=function(t){return typeof t=="number"},Kh=function(t){return typeof t>"u"},bi=function(t){return typeof t=="object"},Cn=function(t){return t!==!1},Jh=function(){return typeof window<"u"},na=function(t){return ke(t)||rn(t)},jd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},pn=Array.isArray,vg=/random\([^)]+\)/g,xg=/,\s*/g,Yu=/(?:-?\.?\d|\.)+/gi,Qd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ss=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ol=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,tp=/[+-]=-?[.\d]+/,yg=/[^,'"\[\]\s]+/gi,Sg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ue,mi,Nc,jh,qn={},ll={},ep,np=function(t){return(ll=Fs(t,qn))&&In},Qh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Oo=function(t,e){return!e&&console.warn(t)},ip=function(t,e){return t&&(qn[t]=e)&&ll&&(ll[t]=e)||qn},Bo=function(){return 0},Mg={suppressEvents:!0,isStart:!0,kill:!1},Ya={suppressEvents:!0,kill:!1},Eg={suppressEvents:!0},tu={},hr=[],Fc={},rp,zn={},Bl={},qu=30,qa=[],eu="",nu=function(t){var e=t[0],n,i;if(bi(e)||ke(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=qa.length;i--&&!qa[i].targetTest(e););n=qa[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new wp(t[i],n)))||t.splice(i,1);return t},zr=function(t){return t._gsap||nu(ii(t))[0]._gsap},sp=function(t,e,n){return(n=t[e])&&ke(n)?t[e]():Kh(n)&&t.getAttribute&&t.getAttribute(e)||n},Rn=function(t,e){return(t=t.split(",")).forEach(e)||t},He=function(t){return Math.round(t*1e5)/1e5||0},Ie=function(t){return Math.round(t*1e7)/1e7||0},ws=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},bg=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},cl=function(){var t=hr.length,e=hr.slice(0),n,i;for(Fc={},hr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},iu=function(t){return!!(t._initted||t._startAt||t.add)},op=function(t,e,n,i){hr.length&&!on&&cl(),t.render(e,n,!!(on&&e<0&&iu(t))),hr.length&&!on&&cl()},ap=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(yg).length<2?e:rn(t)?t.trim():t},lp=function(t){return t},$n=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Tg=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Fs=function(t,e){for(var n in e)t[n]=e[n];return t},$u=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=bi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},hl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},So=function(t){var e=t.parent||Ue,n=t.keyframes?Tg(pn(t.keyframes)):$n;if(Cn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},wg=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},cp=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Al=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},pr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Hr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Ag=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Oc=function(t,e,n,i){return t._startAt&&(on?t._startAt.revert(Ya):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Cg=function r(t){return!t||t._ts&&r(t.parent)},Zu=function(t){return t._repeat?Os(t._tTime,t=t.duration()+t._rDelay)*t:0},Os=function(t,e){var n=Math.floor(t=Ie(t/e));return t&&n===t?n-1:n},ul=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Cl=function(t){return t._end=Ie(t._start+(t._tDur/Math.abs(t._ts||t._rts||we)||0))},Rl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ie(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Cl(t),n._dirty||Hr(n,t)),t},hp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ul(t.rawTime(),e),(!e._dur||Jo(0,e.totalDuration(),n)-e._tTime>we)&&e.render(n,!0)),Hr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-we}},xi=function(t,e,n,i){return e.parent&&pr(e),e._start=Ie((Xi(n)?n:n||t!==Ue?Jn(t,n,e):t._time)+e._delay),e._end=Ie(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),cp(t,e,"_first","_last",t._sort?"_start":0),Bc(e)||(t._recent=e),i||hp(t,e),t._ts<0&&Rl(t,t._tTime),t},up=function(t,e){return(qn.ScrollTrigger||Qh("scrollTrigger",e))&&qn.ScrollTrigger.create(e,t)},fp=function(t,e,n,i,s){if(su(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!on&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&rp!==Gn.frame)return hr.push(t),t._lazy=[s,i],1},Rg=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Bc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Pg=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&Rg(t)&&!(!t._initted&&Bc(t))||(t._ts<0||t._dp._ts<0)&&!Bc(t))?0:1,a=t._rDelay,l=0,c,h,f;if(a&&t._repeat&&(l=Jo(0,t._tDur,e),h=Os(l,a),t._yoyo&&h&1&&(o=1-o),h!==Os(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||on||i||t._zTime===we||!e&&t._zTime){if(!t._initted&&fp(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?we:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Oc(t,e,n,!0),t._onUpdate&&!n&&Wn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Wn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&pr(t,1),!n&&!on&&(Wn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Lg=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Bs=function(t,e,n,i){var s=t._repeat,o=Ie(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Ie(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Rl(t,t._tTime=t._tDur*a),t.parent&&Cl(t),n||Hr(t.parent,t),t},Ku=function(t){return t instanceof An?Hr(t):Bs(t,t._dur)},Dg={_start:0,endTime:Bo,totalDuration:Bo},Jn=function r(t,e,n){var i=t.labels,s=t._recent||Dg,o=t.duration()>=ni?s.endTime(!1):t._dur,a,l,c;return rn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(pn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Mo=function(t,e,n){var i=Xi(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Cn(l.vars.inherit)&&l.parent;o.immediateRender=Cn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Ye(e[0],o,e[s+1])},yr=function(t,e){return t||t===0?e(t):e},Jo=function(t,e,n){return n<t?t:n>e?e:n},fn=function(t,e){return!rn(t)||!(e=Sg.exec(t))?"":e[1]},Ig=function(t,e,n){return yr(n,function(i){return Jo(t,e,i)})},kc=[].slice,dp=function(t,e){return t&&bi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&bi(t[0]))&&!t.nodeType&&t!==mi},Ug=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return rn(i)&&!e||dp(i,1)?(s=n).push.apply(s,ii(i)):n.push(i)})||n},ii=function(t,e,n){return Le&&!e&&Le.selector?Le.selector(t):rn(t)&&!n&&(Nc||!ks())?kc.call((e||jh).querySelectorAll(t),0):pn(t)?Ug(t,n):dp(t)?kc.call(t,0):t?[t]:[]},zc=function(t){return t=ii(t)[0]||Oo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ii(e,n.querySelectorAll?n:n===t?Oo("Invalid scope")||jh.createElement("div"):t)}},pp=function(t){return t.sort(function(){return .5-Math.random()})},mp=function(t){if(ke(t))return t;var e=bi(t)?t:{each:t},n=Gr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,f=i;return rn(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(u,d,g){var _=(g||e).length,p=o[_],m,x,y,v,A,w,E,R,M;if(!p){if(M=e.grid==="auto"?0:(e.grid||[1,ni])[1],!M){for(E=-ni;E<(E=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(p=o[_]=[],m=l?Math.min(M,_)*h-.5:i%M,x=M===ni?0:l?_*f/M-.5:i/M|0,E=0,R=ni,w=0;w<_;w++)y=w%M-m,v=x-(w/M|0),p[w]=A=c?Math.abs(c==="y"?v:y):Jd(y*y+v*v),A>E&&(E=A),A<R&&(R=A);i==="random"&&pp(p),p.max=E-R,p.min=R,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=fn(e.amount||e.each)||0,n=n&&_<0?qg(n):n}return _=(p[u]-p.min)/p.max||0,Ie(p.b+(n?n(_):_)*p.v)+p.u}},Hc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ie(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Xi(n)?0:fn(n))}},gp=function(t,e){var n=pn(t),i,s;return!n&&bi(t)&&(i=n=t.radius||ni,t.values?(t=ii(t.values),(s=!Xi(t[0]))&&(i*=i)):t=Hc(t.increment)),yr(e,n?ke(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ni,h=0,f=t.length,u,d;f--;)s?(u=t[f].x-a,d=t[f].y-l,u=u*u+d*d):u=Math.abs(t[f]-a),u<c&&(c=u,h=f);return h=!i||c<=i?t[h]:o,s||h===o||Xi(o)?h:h+fn(o)}:Hc(t))},_p=function(t,e,n,i){return yr(pn(t)?!e:n===!0?!!(n=0):!i,function(){return pn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Ng=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},Fg=function(t,e){return function(n){return t(parseFloat(n))+(e||fn(n))}},Og=function(t,e,n){return xp(t,e,0,1,n)},vp=function(t,e,n){return yr(n,function(i){return t[~~e(i)]})},Bg=function r(t,e,n){var i=e-t;return pn(t)?vp(t,r(0,t.length),e):yr(n,function(s){return(i+(s-t)%i)%i+t})},kg=function r(t,e,n){var i=e-t,s=i*2;return pn(t)?vp(t,r(0,t.length-1),e):yr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},ko=function(t){return t.replace(vg,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(xg);return _p(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},xp=function(t,e,n,i,s){var o=e-t,a=i-n;return yr(s,function(l){return n+((l-t)/o*a||0)})},zg=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=rn(t),a={},l,c,h,f,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(pn(t)&&!pn(e)){for(h=[],f=t.length,u=f-2,c=1;c<f;c++)h.push(r(t[c-1],t[c]));f--,s=function(g){g*=f;var _=Math.min(u,~~g);return h[_](g-_)},n=e}else i||(t=Fs(pn(t)?[]:{},t));if(!h){for(l in e)ru.call(a,t,l,"get",e[l]);s=function(g){return lu(g,a)||(o?t.p:t)}}}return yr(n,s)},Ju=function(t,e,n){var i=t.labels,s=ni,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Wn=function(t,e,n){var i=t.vars,s=i[e],o=Le,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&hr.length&&cl(),a&&(Le=a),h=l?s.apply(c,l):s.call(c),Le=o,h},uo=function(t){return pr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!on),t.progress()<1&&Wn(t,"onInterrupt"),t},Ms,yp=[],Sp=function(t){if(t)if(t=!t.name&&t.default||t,Jh()||t.headless){var e=t.name,n=ke(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Bo,render:lu,add:ru,kill:i0,modifier:n0,rawVars:0},o={targetTest:0,get:0,getSetter:au,aliases:{},register:0};if(ks(),t!==i){if(zn[e])return;$n(i,$n(hl(t,s),o)),Fs(i.prototype,Fs(s,hl(t,o))),zn[i.prop=e]=i,t.targetTest&&(qa.push(i),tu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}ip(e,i),t.register&&t.register(In,i,Pn)}else yp.push(t)},be=255,fo={aqua:[0,be,be],lime:[0,be,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,be],navy:[0,0,128],white:[be,be,be],olive:[128,128,0],yellow:[be,be,0],orange:[be,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[be,0,0],pink:[be,192,203],cyan:[0,be,be],transparent:[be,be,be,0]},kl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*be+.5|0},Mp=function(t,e,n){var i=t?Xi(t)?[t>>16,t>>8&be,t&be]:0:fo.black,s,o,a,l,c,h,f,u,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),fo[t])i=fo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&be,i&be,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&be,t&be]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Yu),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=kl(l+1/3,s,o),i[1]=kl(l,s,o),i[2]=kl(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Qd),n&&i.length<4&&(i[3]=1),i}else i=t.match(Yu)||fo.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/be,o=i[1]/be,a=i[2]/be,f=Math.max(s,o,a),u=Math.min(s,o,a),h=(f+u)/2,f===u?l=c=0:(d=f-u,c=h>.5?d/(2-f-u):d/(f+u),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Ep=function(t){var e=[],n=[],i=-1;return t.split(ur).forEach(function(s){var o=s.match(Ss)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},ju=function(t,e,n){var i="",s=(t+i).match(ur),o=e?"hsla(":"rgba(",a=0,l,c,h,f;if(!s)return t;if(s=s.map(function(u){return(u=Mp(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Ep(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ur,"1").split(Ss),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(ur),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},ur=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in fo)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),Hg=/hsl[a]?\(/,bp=function(t){var e=t.join(" "),n;if(ur.lastIndex=0,ur.test(e))return n=Hg.test(e),t[1]=ju(t[1],n),t[0]=ju(t[0],n,Ep(t[1])),!0},zo,Gn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,f,u,d,g=function _(p){var m=r()-i,x=p===!0,y,v,A,w;if((m>t||m<0)&&(n+=m-e),i+=m,A=i-n,y=A-o,(y>0||x)&&(w=++f.frame,u=A-f.time*1e3,f.time=A=A/1e3,o+=y+(y>=s?4:s-y),v=1),x||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](A,u,w,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){ep&&(!Nc&&Jh()&&(mi=Nc=window,jh=mi.document||{},qn.gsap=In,(mi.gsapVersions||(mi.gsapVersions=[])).push(In.version),np(ll||mi.GreenSockGlobals||!mi.gsap&&mi||{}),yp.forEach(Sp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(p){return setTimeout(p,o-f.time*1e3+1|0)},zo=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),zo=0,c=Bo},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,m,x){var y=m?function(v,A,w,E){p(v,A,w,E),f.remove(y)}:p;return f.remove(p),a[x?"unshift":"push"](y),ks(),y},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},f}(),ks=function(){return!zo&&Gn.wake()},ae={},Gg=/^[\d.\-M][\d.\-,\s]/,Vg=/["']/g,Wg=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(Vg,"").trim():+c,i=l.substr(a+1).trim();return e},Xg=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Yg=function(t){var e=(t+"").split("("),n=ae[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Wg(e[1])]:Xg(t).split(",").map(ap)):ae._CE&&Gg.test(t)?ae._CE("",t):n},qg=function(t){return function(e){return 1-t(1-e)}},Gr=function(t,e){return t&&(ke(t)?t:ae[t]||Yg(t))||e},jr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Rn(t,function(a){ae[a]=qn[a]=s,ae[o=a.toLowerCase()]=n;for(var l in s)ae[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ae[a+"."+l]=s[l]}),s},Tp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},zl=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Uc*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*_g((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Tp(a);return s=Uc/s,l.config=function(c,h){return r(t,c,h)},l},Hl=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Tp(n);return i.config=function(s){return r(t,s)},i};Rn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;jr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ae.Linear.easeNone=ae.none=ae.Linear.easeIn;jr("Elastic",zl("in"),zl("out"),zl());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};jr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);jr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});jr("Circ",function(r){return-(Jd(1-r*r)-1)});jr("Sine",function(r){return r===1?1:-gg(r*pg)+1});jr("Back",Hl("in"),Hl("out"),Hl());ae.SteppedEase=ae.steps=qn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-we;return function(a){return((i*Jo(0,o,a)|0)+s)*n}}};Fo.ease=ae["quad.out"];Rn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return eu+=r+","+r+"Params,"});var wp=function(t,e){this.id=mg++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:sp,this.set=e?e.getSetter:au},Ho=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Bs(this,+e.duration,1,1),this.data=e.data,Le&&(this._ctx=Le,Le.data.push(this)),zo||Gn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Bs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ks(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Rl(this,n),!s._dp||s.parent||hp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&xi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===we||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),op(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Zu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Zu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Os(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-we?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ul(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-we?0:this._rts,this.totalTime(Jo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Cl(this),Ag(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ks(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==we&&(this._tTime-=we)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Ie(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&xi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Cn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ul(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Eg);var i=on;return on=n,iu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),on=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ku(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ku(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Jn(this,n),Cn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Cn(i)),this._dur||(this._zTime=-we),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-we:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-we,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-we)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=ke(n)?n:lp,l=function(){var h=i.then;i.then=null,s&&s(),ke(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){uo(this)},r}();$n(Ho.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-we,_prom:0,_ps:!1,_rts:1});var An=function(r){Kd(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Cn(n.sortChildren),Ue&&xi(n.parent||Ue,Ui(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&up(Ui(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Mo(0,arguments,this),this},e.from=function(i,s,o){return Mo(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Mo(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,So(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ye(i,s,Jn(this,o),1),this},e.call=function(i,s,o){return xi(this,Ye.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Ye(i,o,Jn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,So(o).immediateRender=Cn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,f){return a.startAt=o,So(a).immediateRender=Cn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,f)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ie(i),f=this._zTime<0!=i<0&&(this._initted||!c),u,d,g,_,p,m,x,y,v,A,w,E;if(this!==Ue&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,v=this._start,y=this._ts,m=!y,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(u=Ie(h%p),h===l?(_=this._repeat,u=c):(A=Ie(h/p),_=~~A,_&&_===A&&(u=c,_--),u>c&&(u=c)),A=Os(this._tTime,p),!a&&this._tTime&&A!==_&&this._tTime-A*p-this._dur<=0&&(A=_),w&&_&1&&(u=c-u,E=1),_!==A&&!this._lock){var R=w&&A&1,M=R===(w&&_&1);if(_<A&&(R=!R),a=R?0:h%c?c:h,this._lock=1,this.render(a||(E?0:Ie(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Wn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,A=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Lg(this,Ie(a),Ie(u)),x&&(h-=u-(u=x._start))),this._tTime=h,this._time=u,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!A&&(Wn(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||u>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(u-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(u-d._start)*d._ts,s,o),u!==this._time||!this._ts&&!m){x=0,g&&(h+=this._zTime=-we);break}}d=g}else{d=this._last;for(var S=i<0?i:u;d;){if(g=d._prev,(d._act||S<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(S-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(S-d._start)*d._ts,s,o||on&&iu(d)),u!==this._time||!this._ts&&!m){x=0,g&&(h+=this._zTime=S?-we:we);break}}d=g}}if(x&&!s&&(this.pause(),x.render(u>=a?0:-we)._zTime=u>=a?1:-1,this._ts))return this._start=v,Cl(this),this.render(i,s,o);this._onUpdate&&!s&&Wn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&pr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(Wn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Xi(s)||(s=Jn(this,s,i)),!(i instanceof Ho)){if(pn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(rn(i))return this.addLabel(i,s);if(ke(i))i=Ye.delayedCall(0,i);else return this}return this!==i?xi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ni);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ye?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return rn(i)?this.removeLabel(i):ke(i)?this.killTweensOf(i):(i.parent===this&&Al(this,i),i===this._recent&&(this._recent=this._last),Hr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ie(Gn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Jn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Ye.delayedCall(0,s||Bo,o);return a.data="isPause",this._hasPause=1,xi(this,a,Jn(this,i))},e.removePause=function(i){var s=this._first;for(i=Jn(this,i);s;)s._start===i&&s.data==="isPause"&&pr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)sr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=ii(i),l=this._first,c=Xi(s),h;l;)l instanceof Ye?bg(l._targets,a)&&(c?(!sr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Jn(o,i),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,u=l.immediateRender,d,g=Ye.to(o,$n({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||we,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Bs(g,p,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,f||[])}},s));return u?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,$n({startAt:{time:Jn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Ju(this,Jn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Ju(this,Jn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+we)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ie(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Hr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Hr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=ni,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,xi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Ie(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Bs(o,o===Ue&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ue._ts&&(op(Ue,ul(i,Ue)),rp=Gn.frame),Gn.frame>=qu){qu+=Yn.autoSleep||120;var s=Ue._first;if((!s||!s._ts)&&Yn.autoSleep&&Gn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Gn.sleep()}}},t}(Ho);$n(An.prototype,{_lock:0,_hasPause:0,_forcing:0});var $g=function(t,e,n,i,s,o,a){var l=new Pn(this._pt,t,e,0,1,Dp,null,s),c=0,h=0,f,u,d,g,_,p,m,x;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=ko(i)),o&&(x=[n,i],o(x,t,e),n=x[0],i=x[1]),u=n.match(Ol)||[];f=Ol.exec(i);)g=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?ws(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=Ol.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(tp.test(i)||m)&&(l.e=0),this._pt=l,l},ru=function(t,e,n,i,s,o,a,l,c,h){ke(i)&&(i=i(s||0,t,o));var f=t[e],u=n!=="get"?n:ke(f)?c?t[e.indexOf("set")||!ke(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=ke(f)?c?Qg:Pp:ou,g;if(rn(i)&&(~i.indexOf("random(")&&(i=ko(i)),i.charAt(1)==="="&&(g=ws(u,i)+(fn(u)||0),(g||g===0)&&(i=g))),!h||u!==i||Gc)return!isNaN(u*i)&&i!==""?(g=new Pn(this._pt,t,e,+u||0,i-(u||0),typeof f=="boolean"?e0:Lp,0,d),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!f&&!(e in t)&&Qh(e,i),$g.call(this,t,e,u,i,d,l||Yn.stringFilter,c))},Zg=function(t,e,n,i,s){if(ke(t)&&(t=Eo(t,s,e,n,i)),!bi(t)||t.style&&t.nodeType||pn(t)||jd(t))return rn(t)?Eo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Eo(t[a],s,e,n,i);return o},Ap=function(t,e,n,i,s,o){var a,l,c,h;if(zn[t]&&(a=new zn[t]).init(s,a.rawVars?e[t]:Zg(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Pn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Ms))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},sr,Gc,su=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,u=i.keyframes,d=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,m=t.parent,x=m&&m.data==="nested"?m.vars.targets:p,y=t._overwrite==="auto"&&!Zh,v=t.timeline,A=i.easeReverse||f,w,E,R,M,S,C,L,N,V,q,F,z,H;if(v&&(!u||!s)&&(s="none"),t._ease=Gr(s,Fo.ease),t._rEase=A&&(Gr(A)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||u&&!i.stagger){if(N=p[0]?zr(p[0]).harness:0,z=N&&i[N.prop],w=hl(i,tu),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&g?Ya:Mg),_._lazy=0),o){if(pr(t._startAt=Ye.set(p,$n({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Cn(l),startAt:null,delay:0,onUpdate:c&&function(){return Wn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(on||!a&&!d)&&t._startAt.revert(Ya),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(a=!1),R=$n({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Cn(l),immediateRender:a,stagger:0,parent:m},w),z&&(R[N.prop]=z),pr(t._startAt=Ye.set(p,R)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(on?t._startAt.revert(Ya):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,we,we);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Cn(l)||l&&!g,E=0;E<p.length;E++){if(S=p[E],L=S._gsap||nu(p)[E]._gsap,t._ptLookup[E]=q={},Fc[L.id]&&hr.length&&cl(),F=x===p?E:x.indexOf(S),N&&(V=new N).init(S,z||w,t,F,x)!==!1&&(t._pt=M=new Pn(t._pt,S,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(tt){q[tt]=M}),V.priority&&(C=1)),!N||z)for(R in w)zn[R]&&(V=Ap(R,w,t,F,S,x))?V.priority&&(C=1):q[R]=M=ru.call(t,S,R,"get",w[R],F,x,0,i.stringFilter);t._op&&t._op[E]&&t.kill(S,t._op[E]),y&&t._pt&&(sr=t,Ue.killTweensOf(S,q,t.globalTime(e)),H=!t.parent,sr=0),t._pt&&l&&(Fc[L.id]=1)}C&&Ip(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!H,u&&e<=0&&v.render(ni,!0,!0)},Kg=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,f,u,d;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,d=t._targets.length;d--;){if(h=u[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Gc=1,t.vars[e]="+=0",su(t,a),Gc=0,l?Oo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(d=c.length;d--;)f=c[d],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=He(n)+fn(f.e)),f.b&&(f.b=h.s+fn(f.b))},Jg=function(t,e){var n=t[0]?zr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Fs({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},jg=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(pn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Eo=function(t,e,n,i,s){return ke(t)?t.call(e,n,i,s):rn(t)&&~t.indexOf("random(")?ko(t):t},Cp=eu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Rp={};Rn(Cp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Rp[r]=1});var Ye=function(r){Kd(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:So(i))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,u=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=i.parent||Ue,x=(pn(n)||jd(n)?Xi(n[0]):"length"in i)?[n]:ii(n),y,v,A,w,E,R,M,S;if(a._targets=x.length?nu(x):Oo("GSAP target "+n+" not found. https://gsap.com",!Yn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||u||na(c)||na(h)){i=a.vars;var C=i.easeReverse||i.yoyoEase;if(y=a.timeline=new An({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:x}),y.kill(),y.parent=y._dp=Ui(a),y._start=0,u||na(c)||na(h)){if(w=x.length,M=u&&mp(u),bi(u))for(E in u)~Cp.indexOf(E)&&(S||(S={}),S[E]=u[E]);for(v=0;v<w;v++)A=hl(i,Rp),A.stagger=0,C&&(A.easeReverse=C),S&&Fs(A,S),R=x[v],A.duration=+Eo(c,Ui(a),v,R,x),A.delay=(+Eo(h,Ui(a),v,R,x)||0)-a._delay,!u&&w===1&&A.delay&&(a._delay=h=A.delay,a._start+=h,A.delay=0),y.to(R,A,M?M(v,R,x):0),y._ease=ae.none;y.duration()?c=h=0:a.timeline=0}else if(g){So($n(y.vars.defaults,{ease:"none"})),y._ease=Gr(g.ease||i.ease||"none");var L=0,N,V,q;if(pn(g))g.forEach(function(F){return y.to(x,F,">")}),y.duration();else{A={};for(E in g)E==="ease"||E==="easeEach"||jg(E,g[E],A,g.easeEach);for(E in A)for(N=A[E].sort(function(F,z){return F.t-z.t}),L=0,v=0;v<N.length;v++)V=N[v],q={ease:V.e,duration:(V.t-(v?N[v-1].t:0))/100*c},q[E]=V.v,y.to(x,q,L),L+=q.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return d===!0&&!Zh&&(sr=Ui(a),Ue.killTweensOf(x),sr=0),xi(m,Ui(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===Ie(m._time)&&Cn(f)&&Cg(Ui(a))&&m.data!=="nested")&&(a._tTime=-we,a.render(Math.max(0,-h)||0)),p&&up(Ui(a),p),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-we&&!h?l:i<we?0:i,u,d,g,_,p,m,x,y;if(!c)Pg(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=f,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(u=Ie(f%_),f===l?(g=this._repeat,u=c):(p=Ie(f/_),g=~~p,g&&g===p?(u=c,g--):u>c&&(u=c)),m=this._yoyo&&g&1,m&&(u=c-u),p=Os(this._tTime,_),u===a&&!o&&this._initted&&g===p)return this._tTime=f,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(Ie(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(fp(this,h?i:u,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var v=u<a;if(v!==this._inv){var A=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=A?(v?-1:1)/A:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(u/c);if(this._from&&(this.ratio=x=1-x),this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!p&&(Wn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Oc(this,i,s,o),Wn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Wn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&Oc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&pr(this,1),!s&&!(h&&!a)&&(f||a||m)&&(Wn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){zo||Gn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||su(this,c),h=this._ease(c/this._dur),Kg(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Rl(this,0),this.parent||cp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?uo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!on),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,sr&&sr.vars.overwrite!==!0)._first||uo(this),this.parent&&o!==this.timeline.totalDuration()&&Bs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ii(i):a,c=this._ptLookup,h=this._pt,f,u,d,g,_,p,m;if((!s||s==="all")&&wg(a,l))return s==="all"&&(this._pt=0),uo(this);for(f=this._op=this._op||[],s!=="all"&&(rn(s)&&(_={},Rn(s,function(x){return _[x]=1}),s=_),s=Jg(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){u=c[m],s==="all"?(f[m]=s,g=u,d={}):(d=f[m]=f[m]||{},g=s);for(_ in g)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Al(this,p,"_pt"),delete u[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&uo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Mo(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Mo(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Ue.killTweensOf(i,s,o)},t}(Ho);$n(Ye.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Rn("staggerTo,staggerFrom,staggerFromTo",function(r){Ye[r]=function(){var t=new An,e=kc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var ou=function(t,e,n){return t[e]=n},Pp=function(t,e,n){return t[e](n)},Qg=function(t,e,n,i){return t[e](i.fp,n)},t0=function(t,e,n){return t.setAttribute(e,n)},au=function(t,e){return ke(t[e])?Pp:Kh(t[e])&&t.setAttribute?t0:ou},Lp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},e0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Dp=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},lu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},n0=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},i0=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Al(this,e,"_pt"):e.dep||(n=1),e=i;return!n},r0=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Ip=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Pn=function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Lp,this.d=l||this,this.set=c||ou,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=r0,this.m=n,this.mt=s,this.tween=i},r}();Rn(eu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return tu[r]=1});qn.TweenMax=qn.TweenLite=Ye;qn.TimelineLite=qn.TimelineMax=An;Ue=new An({sortChildren:!1,defaults:Fo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Yn.stringFilter=bp;var Vr=[],$a={},s0=[],Qu=0,o0=0,Gl=function(t){return($a[t]||s0).map(function(e){return e()})},Vc=function(){var t=Date.now(),e=[];t-Qu>2&&(Gl("matchMediaInit"),Vr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=mi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Gl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Qu=t,Gl("matchMedia"))},Up=function(){function r(e,n){this.selector=n&&zc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=o0++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ke(n)&&(s=i,i=n,n=ke);var o=this,a=function(){var c=Le,h=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=zc(s)),Le=o,f=i.apply(o,arguments),ke(f)&&o._r.push(f),Le=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===ke?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Le;Le=null,n(this),Le=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ye&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof An?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ye)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Vr.length;o--;)Vr[o].id===this.id&&Vr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),a0=function(){function r(e){this.contexts=[],this.scope=e,Le&&Le.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){bi(n)||(n={matches:n});var o=new Up(0,s||this.scope),a=o.conditions={},l,c,h;Le&&!o.selector&&(o.selector=Le.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=mi.matchMedia(n[c]),l&&(Vr.indexOf(o)<0&&Vr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Vc):l.addEventListener("change",Vc)));return h&&i(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),fl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Sp(i)})},timeline:function(t){return new An(t)},getTweensOf:function(t,e){return Ue.getTweensOf(t,e)},getProperty:function(t,e,n,i){rn(t)&&(t=ii(t)[0]);var s=zr(t||{}).get,o=n?lp:ap;return n==="native"&&(n=""),t&&(e?o((zn[e]&&zn[e].get||s)(t,e,n,i)):function(a,l,c){return o((zn[a]&&zn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=ii(t),t.length>1){var i=t.map(function(h){return In.quickSetter(h,e,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}t=t[0]||{};var o=zn[e],a=zr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var f=new o;Ms._pt=0,f.init(t,n?h+n:h,Ms,0,[t]),f.render(1,f),Ms._pt&&lu(1,Ms)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=In.to(t,$n((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Ue.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Gr(t.ease,Fo.ease)),$u(Fo,t||{})},config:function(t){return $u(Yn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!zn[a]&&!qn[a]&&Oo(e+" effect requires "+a+" plugin.")}),Bl[e]=function(a,l,c){return n(ii(a),$n(l||{},s),c)},o&&(An.prototype[e]=function(a,l,c){return this.add(Bl[e](a,bi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ae[t]=Gr(e)},parseEase:function(t,e){return arguments.length?Gr(t,e):ae},getById:function(t){return Ue.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new An(t),i,s;for(n.smoothChildTiming=Cn(t.smoothChildTiming),Ue.remove(n),n._dp=0,n._time=n._tTime=Ue._time,i=Ue._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ye&&i.vars.onComplete===i._targets[0]))&&xi(n,i,i._start-i._delay),i=s;return xi(Ue,n,0),n},context:function(t,e){return t?new Up(t,e):Le},matchMedia:function(t){return new a0(t)},matchMediaRefresh:function(){return Vr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Vc()},addEventListener:function(t,e){var n=$a[t]||($a[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=$a[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Bg,wrapYoyo:kg,distribute:mp,random:_p,snap:gp,normalize:Og,getUnit:fn,clamp:Ig,splitColor:Mp,toArray:ii,selector:zc,mapRange:xp,pipe:Ng,unitize:Fg,interpolate:zg,shuffle:pp},install:np,effects:Bl,ticker:Gn,updateRoot:An.updateRoot,plugins:zn,globalTimeline:Ue,core:{PropTween:Pn,globals:ip,Tween:Ye,Timeline:An,Animation:Ho,getCache:zr,_removeLinkedListItem:Al,reverting:function(){return on},context:function(t){return t&&Le&&(Le.data.push(t),t._ctx=Le),Le},suppressOverwrites:function(t){return Zh=t}}};Rn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return fl[r]=Ye[r]});Gn.add(An.updateRoot);Ms=fl.to({},{duration:0});var l0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},c0=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=l0(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Vl=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(rn(s)&&(l={},Rn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}c0(a,s)}}}},In=fl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)on?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Vl("roundProps",Hc),Vl("modifiers"),Vl("snap",gp))||fl;Ye.version=An.version=In.version="3.15.0";ep=1;Jh()&&ks();ae.Power0;ae.Power1;ae.Power2;ae.Power3;ae.Power4;ae.Linear;ae.Quad;ae.Cubic;ae.Quart;ae.Quint;ae.Strong;ae.Elastic;ae.Back;ae.SteppedEase;ae.Bounce;ae.Sine;ae.Expo;ae.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var tf,or,As,cu,Fr,ef,hu,h0=function(){return typeof window<"u"},Yi={},Rr=180/Math.PI,Cs=Math.PI/180,es=Math.atan2,nf=1e8,uu=/([A-Z])/g,u0=/(left|right|width|margin|padding|x)/i,f0=/[\s,\(]\S/,yi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Wc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},d0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},p0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},m0=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},g0=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Np=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Fp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},_0=function(t,e,n){return t.style[e]=n},v0=function(t,e,n){return t.style.setProperty(e,n)},x0=function(t,e,n){return t._gsap[e]=n},y0=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},S0=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},M0=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Ne="transform",Ln=Ne+"Origin",E0=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Yi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=yi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Ni(i,a)}):this.tfm[t]=o.x?o[t]:Ni(i,t),t===Ln&&(this.tfm.zOrigin=o.zOrigin);else return yi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Ne)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ln,e,"")),t=Ne}(s||e)&&this.props.push(t,e,s[t])},Op=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},b0=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(uu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=hu(),(!s||!s.isStart)&&!n[Ne]&&(Op(n),i.zOrigin&&n[Ln]&&(n[Ln]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Bp=function(t,e){var n={target:t,props:[],revert:b0,save:E0};return t._gsap||In.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},kp,Xc=function(t,e){var n=or.createElementNS?or.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):or.createElement(t);return n&&n.style?n:or.createElement(t)},Xn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(uu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,zs(e)||e,1)||""},rf="O,Moz,ms,Ms,Webkit".split(","),zs=function(t,e,n){var i=e||Fr,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(rf[o]+t in s););return o<0?null:(o===3?"ms":o>=0?rf[o]:"")+t},Yc=function(){h0()&&window.document&&(tf=window,or=tf.document,As=or.documentElement,Fr=Xc("div")||{style:{}},Xc("div"),Ne=zs(Ne),Ln=Ne+"Origin",Fr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",kp=!!zs("perspective"),hu=In.core.reverting,cu=1)},sf=function(t){var e=t.ownerSVGElement,n=Xc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),As.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),As.removeChild(n),s},of=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},zp=function(t){var e,n;try{e=t.getBBox()}catch{e=sf(t),n=1}return e&&(e.width||e.height)||n||(e=sf(t)),e&&!e.width&&!e.x&&!e.y?{x:+of(t,["x","cx","x1"])||0,y:+of(t,["y","cy","y1"])||0,width:0,height:0}:e},Hp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&zp(t))},mr=function(t,e){if(e){var n=t.style,i;e in Yi&&e!==Ln&&(e=Ne),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(uu,"-$1").toLowerCase())):n.removeAttribute(e)}},ar=function(t,e,n,i,s,o){var a=new Pn(t._pt,e,n,0,1,o?Fp:Np);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},af={deg:1,rad:1,turn:1},T0={grid:1,flex:1},gr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Fr.style,l=u0.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,u=i==="px",d=i==="%",g,_,p,m;if(i===o||!s||af[i]||af[o])return s;if(o!=="px"&&!u&&(s=r(t,e,n,"px")),m=t.getCTM&&Hp(t),(d||o==="%")&&(Yi[e]||~e.indexOf("adius")))return g=m?t.getBBox()[l?"width":"height"]:t[h],He(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(u?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===or||!_.appendChild)&&(_=or.body),p=_._gsap,p&&d&&p.width&&l&&p.time===Gn.time&&!p.uncache)return He(s/p.width*f);if(d&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=f+i,g=t[h],x?t.style[e]=x:mr(t,e)}else(d||o==="%")&&!T0[Xn(_,"display")]&&(a.position=Xn(t,"position")),_===t&&(a.position="static"),_.appendChild(Fr),g=Fr[h],_.removeChild(Fr),a.position="absolute";return l&&d&&(p=zr(_),p.time=Gn.time,p.width=_[h]),He(u?g*s/f:g&&s?f/g*s:0)},Ni=function(t,e,n,i){var s;return cu||Yc(),e in yi&&e!=="transform"&&(e=yi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Yi[e]&&e!=="transform"?(s=Vo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:pl(Xn(t,Ln))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=dl[e]&&dl[e](t,e,n)||Xn(t,e)||sp(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?gr(t,e,s,n)+n:s},w0=function(t,e,n,i){if(!n||n==="none"){var s=zs(e,t,1),o=s&&Xn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Xn(t,"borderTopColor"))}var a=new Pn(this._pt,t.style,e,0,1,Dp),l=0,c=0,h,f,u,d,g,_,p,m,x,y,v,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Xn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=Xn(t,e)||i,_?t.style[e]=_:mr(t,e)),h=[n,i],bp(h),n=h[0],i=h[1],u=n.match(Ss)||[],A=i.match(Ss)||[],A.length){for(;f=Ss.exec(i);)p=f[0],x=i.substring(l,f.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),p!==(_=u[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),p.charAt(1)==="="&&(p=ws(d,p)+v),m=parseFloat(p),y=p.substr((m+"").length),l=Ss.lastIndex-y.length,y||(y=y||Yn.units[e]||v,l===i.length&&(i+=y,a.e+=y)),v!==y&&(d=gr(t,e,_,y)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:d,c:m-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Fp:Np;return tp.test(i)&&(a.e=0),this._pt=a,a},lf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},A0=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=lf[n]||n,e[1]=lf[i]||i,e.join(" ")},C0=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Yi[a]&&(l=1,a=a==="transformOrigin"?Ln:Ne),mr(n,a);l&&(mr(n,Ne),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Vo(n,1),o.uncache=1,Op(i)))}},dl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Pn(t._pt,e,n,0,0,C0);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Go=[1,0,0,1,0,0],Gp={},Vp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},cf=function(t){var e=Xn(t,Ne);return Vp(e)?Go:e.substr(7).match(Qd).map(He)},fu=function(t,e){var n=t._gsap||zr(t),i=t.style,s=cf(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Go:s):(s===Go&&!t.offsetParent&&t!==As&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,As.appendChild(t)),s=cf(t),l?i.display=l:mr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):As.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},qc=function(t,e,n,i,s,o){var a=t._gsap,l=s||fu(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,u=a.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],x=l[5],y=e.split(" "),v=parseFloat(y[0])||0,A=parseFloat(y[1])||0,w,E,R,M;n?l!==Go&&(E=d*p-g*_)&&(R=v*(p/E)+A*(-_/E)+(_*x-p*m)/E,M=v*(-g/E)+A*(d/E)-(d*x-g*m)/E,v=R,A=M):(w=zp(t),v=w.x+(~y[0].indexOf("%")?v/100*w.width:v),A=w.y+(~(y[1]||y[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&a.smooth?(m=v-c,x=A-h,a.xOffset=f+(m*d+x*_)-m,a.yOffset=u+(m*g+x*p)-x):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=A,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Ln]="0px 0px",o&&(ar(o,a,"xOrigin",c,v),ar(o,a,"yOrigin",h,A),ar(o,a,"xOffset",f,a.xOffset),ar(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+A)},Vo=function(t,e){var n=t._gsap||new wp(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Xn(t,Ln)||"0",h,f,u,d,g,_,p,m,x,y,v,A,w,E,R,M,S,C,L,N,V,q,F,z,H,tt,D,ht,Ut,te,Z,et;return h=f=u=_=p=m=x=y=v=0,d=g=1,n.svg=!!(t.getCTM&&Hp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ne]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ne]!=="none"?l[Ne]:"")),i.scale=i.rotate=i.translate="none"),E=fu(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",z=""):z=!e&&t.getAttribute("data-svg-origin"),qc(t,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,E)),A=n.xOrigin||0,w=n.yOrigin||0,E!==Go&&(C=E[0],L=E[1],N=E[2],V=E[3],h=q=E[4],f=F=E[5],E.length===6?(d=Math.sqrt(C*C+L*L),g=Math.sqrt(V*V+N*N),_=C||L?es(L,C)*Rr:0,x=N||V?es(N,V)*Rr+_:0,x&&(g*=Math.abs(Math.cos(x*Cs))),n.svg&&(h-=A-(A*C+w*N),f-=w-(A*L+w*V))):(et=E[6],te=E[7],D=E[8],ht=E[9],Ut=E[10],Z=E[11],h=E[12],f=E[13],u=E[14],R=es(et,Ut),p=R*Rr,R&&(M=Math.cos(-R),S=Math.sin(-R),z=q*M+D*S,H=F*M+ht*S,tt=et*M+Ut*S,D=q*-S+D*M,ht=F*-S+ht*M,Ut=et*-S+Ut*M,Z=te*-S+Z*M,q=z,F=H,et=tt),R=es(-N,Ut),m=R*Rr,R&&(M=Math.cos(-R),S=Math.sin(-R),z=C*M-D*S,H=L*M-ht*S,tt=N*M-Ut*S,Z=V*S+Z*M,C=z,L=H,N=tt),R=es(L,C),_=R*Rr,R&&(M=Math.cos(R),S=Math.sin(R),z=C*M+L*S,H=q*M+F*S,L=L*M-C*S,F=F*M-q*S,C=z,q=H),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=He(Math.sqrt(C*C+L*L+N*N)),g=He(Math.sqrt(F*F+et*et)),R=es(q,F),x=Math.abs(R)>2e-4?R*Rr:0,v=Z?1/(Z<0?-Z:Z):0),n.svg&&(z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Vp(Xn(t,Ne)),z&&t.setAttribute("transform",z))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=He(d),n.scaleY=He(g),n.rotation=He(_)+a,n.rotationX=He(p)+a,n.rotationY=He(m)+a,n.skewX=x+a,n.skewY=y+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Ln]=pl(c)),n.xOffset=n.yOffset=0,n.force3D=Yn.force3D,n.renderTransform=n.svg?P0:kp?Wp:R0,n.uncache=0,n},pl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Wl=function(t,e,n){var i=fn(e);return He(parseFloat(e)+parseFloat(gr(t,"x",n+"px",i)))+i},R0=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Wp(t,e)},Sr="0deg",eo="0px",Mr=") ",Wp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,u=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,x=n.target,y=n.zOrigin,v="",A=m==="auto"&&t&&t!==1||m===!0;if(y&&(f!==Sr||h!==Sr)){var w=parseFloat(h)*Cs,E=Math.sin(w),R=Math.cos(w),M;w=parseFloat(f)*Cs,M=Math.cos(w),o=Wl(x,o,E*M*-y),a=Wl(x,a,-Math.sin(w)*-y),l=Wl(x,l,R*M*-y+y)}p!==eo&&(v+="perspective("+p+Mr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(A||o!==eo||a!==eo||l!==eo)&&(v+=l!==eo||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Mr),c!==Sr&&(v+="rotate("+c+Mr),h!==Sr&&(v+="rotateY("+h+Mr),f!==Sr&&(v+="rotateX("+f+Mr),(u!==Sr||d!==Sr)&&(v+="skew("+u+", "+d+Mr),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Mr),x.style[Ne]=v||"translate(0, 0)"},P0=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,u=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,x=n.forceCSS,y=parseFloat(o),v=parseFloat(a),A,w,E,R,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Cs,c*=Cs,A=Math.cos(l)*f,w=Math.sin(l)*f,E=Math.sin(l-c)*-u,R=Math.cos(l-c)*u,c&&(h*=Cs,M=Math.tan(c-h),M=Math.sqrt(1+M*M),E*=M,R*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),A*=M,w*=M)),A=He(A),w=He(w),E=He(E),R=He(R)):(A=f,R=u,w=E=0),(y&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(y=gr(d,"x",o,"px"),v=gr(d,"y",a,"px")),(g||_||p||m)&&(y=He(y+g-(g*A+_*E)+p),v=He(v+_-(g*w+_*R)+m)),(i||s)&&(M=d.getBBox(),y=He(y+i/100*M.width),v=He(v+s/100*M.height)),M="matrix("+A+","+w+","+E+","+R+","+y+","+v+")",d.setAttribute("transform",M),x&&(d.style[Ne]=M)},L0=function(t,e,n,i,s){var o=360,a=rn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Rr:1),c=l-i,h=i+c+"deg",f,u;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*nf)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*nf)%o-~~(c/o)*o)),t._pt=u=new Pn(t._pt,e,n,i,c,d0),u.e=h,u.u="deg",t._props.push(n),u},hf=function(t,e){for(var n in e)t[n]=e[n];return t},D0=function(t,e,n){var i=hf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,u,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ne]=e,a=Vo(n,1),mr(n,Ne),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ne],o[Ne]=e,a=Vo(n,1),o[Ne]=c);for(l in Yi)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(d=fn(c),g=fn(h),f=d!==g?gr(n,l,c,g):parseFloat(c),u=parseFloat(h),t._pt=new Pn(t._pt,a,l,f,u-f,Wc),t._pt.u=g||0,t._props.push(l));hf(a,i)};Rn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});dl[t>1?"border"+r:r]=function(a,l,c,h,f){var u,d;if(arguments.length<4)return u=o.map(function(g){return Ni(a,g,c)}),d=u.join(" "),d.split(u[0]).length===5?u[0]:d;u=(h+"").split(" "),d={},o.forEach(function(g,_){return d[g]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,d,f)}});var Xp={name:"css",register:Yc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,f,u,d,g,_,p,m,x,y,v,A,w,E,R,M;cu||Yc(),this.styles=this.styles||Bp(t),R=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(zn[_]&&Ap(_,e,n,i,t,s)))){if(d=typeof h,g=dl[_],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=ko(h)),g)g(this,t,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",ur.lastIndex=0,ur.test(c)||(p=fn(c),m=fn(h),m?p!==m&&(c=gr(t,_,c,m)+m):p&&(h+=p)),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],rn(c)&&~c.indexOf("random(")&&(c=ko(c)),fn(c+"")||c==="auto"||(c+=Yn.units[_]||fn(Ni(t,_))||""),(c+"").charAt(1)==="="&&(c=Ni(t,_))):c=Ni(t,_),u=parseFloat(c),x=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),f=parseFloat(h),_ in yi&&(_==="autoAlpha"&&(u===1&&Ni(t,"visibility")==="hidden"&&f&&(u=0),R.push("visibility",0,a.visibility),ar(this,a,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=yi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in Yi,y){if(this.styles.save(_),M=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=Xn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var S=t.style.perspective;t.style.perspective=h,h=Xn(t,"perspective"),S?t.style.perspective=S:mr(t,"perspective")}f=parseFloat(h)}if(v||(A=t._gsap,A.renderTransform&&!e.parseTransform||Vo(t,e.parseTransform),w=e.smoothOrigin!==!1&&A.smooth,v=this._pt=new Pn(this._pt,a,Ne,0,1,A.renderTransform,A,0,-1),v.dep=1),_==="scale")this._pt=new Pn(this._pt,A,"scaleY",A.scaleY,(x?ws(A.scaleY,x+f):f)-A.scaleY||0,Wc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(Ln,0,a[Ln]),h=A0(h),A.svg?qc(t,h,0,w,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==A.zOrigin&&ar(this,A,"zOrigin",A.zOrigin,m),ar(this,a,_,pl(c),pl(h)));continue}else if(_==="svgOrigin"){qc(t,h,1,w,0,this);continue}else if(_ in Gp){L0(this,A,_,u,x?ws(u,x+h):h);continue}else if(_==="smoothOrigin"){ar(this,A,"smooth",A.smooth,h);continue}else if(_==="force3D"){A[_]=h;continue}else if(_==="transform"){D0(this,h,t);continue}}else _ in a||(_=zs(_)||_);if(y||(f||f===0)&&(u||u===0)&&!f0.test(h)&&_ in a)p=(c+"").substr((u+"").length),f||(f=0),m=fn(h)||(_ in Yn.units?Yn.units[_]:p),p!==m&&(u=gr(t,_,c,m)),this._pt=new Pn(this._pt,y?A:a,_,u,(x?ws(u,x+f):f)-u,!y&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?g0:Wc),this._pt.u=m||0,y&&M!==h?(this._pt.b=c,this._pt.e=M,this._pt.r=m0):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=p0);else if(_ in a)w0.call(this,t,_,c,x?x+h:h);else if(_ in t)this.add(t,_,c||t[_],x?x+h:h,i,s);else if(_!=="parseTransform"){Qh(_,h);continue}y||(_ in a?R.push(_,0,a[_]):typeof t[_]=="function"?R.push(_,2,t[_]()):R.push(_,1,c||t[_])),o.push(_)}}E&&Ip(this)},render:function(t,e){if(e.tween._time||!hu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ni,aliases:yi,getSetter:function(t,e,n){var i=yi[e];return i&&i.indexOf(",")<0&&(e=i),e in Yi&&e!==Ln&&(t._gsap.x||Ni(t,"x"))?n&&ef===n?e==="scale"?y0:x0:(ef=n||{})&&(e==="scale"?S0:M0):t.style&&!Kh(t.style[e])?_0:~e.indexOf("-")?v0:au(t,e)},core:{_removeProperty:mr,_getMatrix:fu}};In.utils.checkPrefix=zs;In.core.getStyleSaver=Bp;(function(r,t,e,n){var i=Rn(r+","+t+","+e,function(s){Yi[s]=1});Rn(t,function(s){Yn.units[s]="deg",Gp[s]=1}),yi[i[13]]=r+","+t,Rn(n,function(s){var o=s.split(":");yi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Rn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Yn.units[r]="px"});In.registerPlugin(Xp);var ml=In.registerPlugin(Xp)||In;ml.core.Tween;function I0(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function U0(r,t,e){return t&&I0(r.prototype,t),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var sn,Za,Vn,lr,cr,Rs,Yp,Pr,Ps,qp,ki,ui,$p,Zp=function(){return sn||typeof window<"u"&&(sn=window.gsap)&&sn.registerPlugin&&sn},Kp=1,Es=[],se=[],Ei=[],bo=Date.now,$c=function(t,e){return e},N0=function(){var t=Ps.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,se),i.push.apply(i,Ei),se=n,Ei=i,$c=function(o,a){return e[o](a)}},fr=function(t,e){return~Ei.indexOf(t)&&Ei[Ei.indexOf(t)+1][e]},To=function(t){return!!~qp.indexOf(t)},_n=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},gn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ia="scrollLeft",ra="scrollTop",Zc=function(){return ki&&ki.isPressed||se.cache++},gl=function(t,e){var n=function i(s){if(s||s===0){Kp&&(Vn.history.scrollRestoration="manual");var o=ki&&ki.isPressed;s=i.v=Math.round(s)||(ki&&ki.iOS?1:0),t(s),i.cacheID=se.cache,o&&$c("ss",s)}else(e||se.cache!==i.cacheID||$c("ref"))&&(i.cacheID=se.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},En={s:ia,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:gl(function(r){return arguments.length?Vn.scrollTo(r,Ke.sc()):Vn.pageXOffset||lr[ia]||cr[ia]||Rs[ia]||0})},Ke={s:ra,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:En,sc:gl(function(r){return arguments.length?Vn.scrollTo(En.sc(),r):Vn.pageYOffset||lr[ra]||cr[ra]||Rs[ra]||0})},wn=function(t,e){return(e&&e._ctx&&e._ctx.selector||sn.utils.toArray)(t)[0]||(typeof t=="string"&&sn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},F0=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},_r=function(t,e){var n=e.s,i=e.sc;To(t)&&(t=lr.scrollingElement||cr);var s=se.indexOf(t),o=i===Ke.sc?1:2;!~s&&(s=se.push(t)-1),se[s+o]||_n(t,"scroll",Zc);var a=se[s+o],l=a||(se[s+o]=gl(fr(t,n),!0)||(To(t)?i:gl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=sn.getProperty(t,"scrollBehavior")==="smooth"),l},Kc=function(t,e,n){var i=t,s=t,o=bo(),a=o,l=e||50,c=Math.max(500,l*3),h=function(g,_){var p=bo();_||p-o>l?(s=i,i=g,a=o,o=p):n?i+=g:i=s+(g-s)/(p-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},u=function(g){var _=a,p=s,m=bo();return(g||g===0)&&g!==i&&h(g),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:h,reset:f,getVelocity:u}},no=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},uf=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Jp=function(){Ps=sn.core.globals().ScrollTrigger,Ps&&Ps.core&&N0()},jp=function(t){return sn=t||Zp(),!Za&&sn&&typeof document<"u"&&document.body&&(Vn=window,lr=document,cr=lr.documentElement,Rs=lr.body,qp=[Vn,lr,cr,Rs],sn.utils.clamp,$p=sn.core.context||function(){},Pr="onpointerenter"in Rs?"pointer":"mouse",Yp=Ge.isTouch=Vn.matchMedia&&Vn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Vn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ui=Ge.eventTypes=("ontouchstart"in cr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in cr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Kp=0},500),Za=1),Ps||Jp(),Za};En.op=Ke;se.cache=0;var Ge=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Za||jp(sn)||console.warn("Please gsap.registerPlugin(Observer)"),Ps||Jp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,u=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,x=n.onDrag,y=n.onPress,v=n.onRelease,A=n.onRight,w=n.onLeft,E=n.onUp,R=n.onDown,M=n.onChangeX,S=n.onChangeY,C=n.onChange,L=n.onToggleX,N=n.onToggleY,V=n.onHover,q=n.onHoverEnd,F=n.onMove,z=n.ignoreCheck,H=n.isNormalizer,tt=n.onGestureStart,D=n.onGestureEnd,ht=n.onWheel,Ut=n.onEnable,te=n.onDisable,Z=n.onClick,et=n.scrollSpeed,_t=n.capture,nt=n.allowClicks,bt=n.lockAxis,Rt=n.onLockAxis;this.target=a=wn(a)||cr,this.vars=n,d&&(d=sn.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,et=et||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Vn.getComputedStyle(Rs).lineHeight)||22);var Vt,ee,Ft,Dt,O,Se,Bt,G=this,Tt=0,oe=0,Pt=n.passive||!h&&n.passive!==!1,P=_r(a,En),b=_r(a,Ke),X=P(),Q=b(),j=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ui[0]==="pointerdown",K=To(a),ut=a.ownerDocument||lr,at=[0,0,0],pt=[0,0,0],Yt=0,it=function(){return Yt=bo()},ot=function(wt,Kt){return(G.event=wt)&&d&&F0(wt.target,d)||Kt&&j&&wt.pointerType!=="touch"||z&&z(wt,Kt)},Nt=function(){G._vx.reset(),G._vy.reset(),ee.pause(),f&&f(G)},It=function(){var wt=G.deltaX=uf(at),Kt=G.deltaY=uf(pt),mt=Math.abs(wt)>=i,Wt=Math.abs(Kt)>=i;C&&(mt||Wt)&&C(G,wt,Kt,at,pt),mt&&(A&&G.deltaX>0&&A(G),w&&G.deltaX<0&&w(G),M&&M(G),L&&G.deltaX<0!=Tt<0&&L(G),Tt=G.deltaX,at[0]=at[1]=at[2]=0),Wt&&(R&&G.deltaY>0&&R(G),E&&G.deltaY<0&&E(G),S&&S(G),N&&G.deltaY<0!=oe<0&&N(G),oe=G.deltaY,pt[0]=pt[1]=pt[2]=0),(Dt||Ft)&&(F&&F(G),Ft&&(p&&Ft===1&&p(G),x&&x(G),Ft=0),Dt=!1),Se&&!(Se=!1)&&Rt&&Rt(G),O&&(ht(G),O=!1),Vt=0},yt=function(wt,Kt,mt){at[mt]+=wt,pt[mt]+=Kt,G._vx.update(wt),G._vy.update(Kt),c?Vt||(Vt=requestAnimationFrame(It)):It()},Zt=function(wt,Kt){bt&&!Bt&&(G.axis=Bt=Math.abs(wt)>Math.abs(Kt)?"x":"y",Se=!0),Bt!=="y"&&(at[2]+=wt,G._vx.update(wt,!0)),Bt!=="x"&&(pt[2]+=Kt,G._vy.update(Kt,!0)),c?Vt||(Vt=requestAnimationFrame(It)):It()},Ot=function(wt){if(!ot(wt,1)){wt=no(wt,h);var Kt=wt.clientX,mt=wt.clientY,Wt=Kt-G.x,At=mt-G.y,Gt=G.isDragging;G.x=Kt,G.y=mt,(Gt||(Wt||At)&&(Math.abs(G.startX-Kt)>=s||Math.abs(G.startY-mt)>=s))&&(Ft||(Ft=Gt?2:1),Gt||(G.isDragging=!0),Zt(Wt,At))}},le=G.onPress=function(vt){ot(vt,1)||vt&&vt.button||(G.axis=Bt=null,ee.pause(),G.isPressed=!0,vt=no(vt),Tt=oe=0,G.startX=G.x=vt.clientX,G.startY=G.y=vt.clientY,G._vx.reset(),G._vy.reset(),_n(H?a:ut,ui[1],Ot,Pt,!0),G.deltaX=G.deltaY=0,y&&y(G))},I=G.onRelease=function(vt){if(!ot(vt,1)){gn(H?a:ut,ui[1],Ot,!0);var wt=!isNaN(G.y-G.startY),Kt=G.isDragging,mt=Kt&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),Wt=no(vt);!mt&&wt&&(G._vx.reset(),G._vy.reset(),h&&nt&&sn.delayedCall(.08,function(){if(bo()-Yt>300&&!vt.defaultPrevented){if(vt.target.click)vt.target.click();else if(ut.createEvent){var At=ut.createEvent("MouseEvents");At.initMouseEvent("click",!0,!0,Vn,1,Wt.screenX,Wt.screenY,Wt.clientX,Wt.clientY,!1,!1,!1,!1,0,null),vt.target.dispatchEvent(At)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,f&&Kt&&!H&&ee.restart(!0),Ft&&It(),m&&Kt&&m(G),v&&v(G,mt)}},ct=function(wt){return wt.touches&&wt.touches.length>1&&(G.isGesturing=!0)&&tt(wt,G.isDragging)},$=function(){return(G.isGesturing=!1)||D(G)},J=function(wt){if(!ot(wt)){var Kt=P(),mt=b();yt((Kt-X)*et,(mt-Q)*et,1),X=Kt,Q=mt,f&&ee.restart(!0)}},lt=function(wt){if(!ot(wt)){wt=no(wt,h),ht&&(O=!0);var Kt=(wt.deltaMode===1?l:wt.deltaMode===2?Vn.innerHeight:1)*g;yt(wt.deltaX*Kt,wt.deltaY*Kt,0),f&&!H&&ee.restart(!0)}},ft=function(wt){if(!ot(wt)){var Kt=wt.clientX,mt=wt.clientY,Wt=Kt-G.x,At=mt-G.y;G.x=Kt,G.y=mt,Dt=!0,f&&ee.restart(!0),(Wt||At)&&Zt(Wt,At)}},kt=function(wt){G.event=wt,V(G)},he=function(wt){G.event=wt,q(G)},Oe=function(wt){return ot(wt)||no(wt,h)&&Z(G)};ee=G._dc=sn.delayedCall(u||.25,Nt).pause(),G.deltaX=G.deltaY=0,G._vx=Kc(0,50,!0),G._vy=Kc(0,50,!0),G.scrollX=P,G.scrollY=b,G.isDragging=G.isGesturing=G.isPressed=!1,$p(this),G.enable=function(vt){return G.isEnabled||(_n(K?ut:a,"scroll",Zc),o.indexOf("scroll")>=0&&_n(K?ut:a,"scroll",J,Pt,_t),o.indexOf("wheel")>=0&&_n(a,"wheel",lt,Pt,_t),(o.indexOf("touch")>=0&&Yp||o.indexOf("pointer")>=0)&&(_n(a,ui[0],le,Pt,_t),_n(ut,ui[2],I),_n(ut,ui[3],I),nt&&_n(a,"click",it,!0,!0),Z&&_n(a,"click",Oe),tt&&_n(ut,"gesturestart",ct),D&&_n(ut,"gestureend",$),V&&_n(a,Pr+"enter",kt),q&&_n(a,Pr+"leave",he),F&&_n(a,Pr+"move",ft)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=Dt=Ft=!1,G._vx.reset(),G._vy.reset(),X=P(),Q=b(),vt&&vt.type&&le(vt),Ut&&Ut(G)),G},G.disable=function(){G.isEnabled&&(Es.filter(function(vt){return vt!==G&&To(vt.target)}).length||gn(K?ut:a,"scroll",Zc),G.isPressed&&(G._vx.reset(),G._vy.reset(),gn(H?a:ut,ui[1],Ot,!0)),gn(K?ut:a,"scroll",J,_t),gn(a,"wheel",lt,_t),gn(a,ui[0],le,_t),gn(ut,ui[2],I),gn(ut,ui[3],I),gn(a,"click",it,!0),gn(a,"click",Oe),gn(ut,"gesturestart",ct),gn(ut,"gestureend",$),gn(a,Pr+"enter",kt),gn(a,Pr+"leave",he),gn(a,Pr+"move",ft),G.isEnabled=G.isPressed=G.isDragging=!1,te&&te(G))},G.kill=G.revert=function(){G.disable();var vt=Es.indexOf(G);vt>=0&&Es.splice(vt,1),ki===G&&(ki=0)},Es.push(G),H&&To(a)&&(ki=G),G.enable(_)},U0(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Ge.version="3.15.0";Ge.create=function(r){return new Ge(r)};Ge.register=jp;Ge.getAll=function(){return Es.slice()};Ge.getById=function(r){return Es.filter(function(t){return t.vars.id===r})[0]};Zp()&&sn.registerPlugin(Ge);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mt,xs,re,ve,Hn,_e,du,_l,Wo,wo,po,sa,cn,Pl,Jc,yn,ff,df,ys,Qp,Xl,tm,xn,jc,em,nm,ir,Qc,pu,Ls,mu,Ao,th,Yl,oa=1,hn=Date.now,ql=hn(),ri=0,mo=0,pf=function(t,e,n){var i=kn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},mf=function(t,e){return e&&(!kn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},O0=function r(){return mo&&requestAnimationFrame(r)},gf=function(){return Pl=1},_f=function(){return Pl=0},gi=function(t){return t},go=function(t){return Math.round(t*1e5)/1e5||0},im=function(){return typeof window<"u"},rm=function(){return Mt||im()&&(Mt=window.gsap)&&Mt.registerPlugin&&Mt},qr=function(t){return!!~du.indexOf(t)},sm=function(t){return(t==="Height"?mu:re["inner"+t])||Hn["client"+t]||_e["client"+t]},om=function(t){return fr(t,"getBoundingClientRect")||(qr(t)?function(){return tl.width=re.innerWidth,tl.height=mu,tl}:function(){return Fi(t)})},B0=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=fr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?sm(s):t["client"+s])||0}},k0=function(t,e){return!e||~Ei.indexOf(t)?om(t):function(){return tl}},Si=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=fr(t,n))?o()-om(t)()[s]:qr(t)?(Hn[n]||_e[n])-sm(i):t[n]-t["offset"+i])},aa=function(t,e){for(var n=0;n<ys.length;n+=3)(!e||~e.indexOf(ys[n+1]))&&t(ys[n],ys[n+1],ys[n+2])},kn=function(t){return typeof t=="string"},dn=function(t){return typeof t=="function"},_o=function(t){return typeof t=="number"},Lr=function(t){return typeof t=="object"},io=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},ns=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},is=Math.abs,am="left",lm="top",gu="right",_u="bottom",Wr="width",Xr="height",Co="Right",Ro="Left",Po="Top",Lo="Bottom",Xe="padding",Qn="margin",Hs="Width",vu="Height",Ze="px",ti=function(t){return re.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},z0=function(t){var e=ti(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},vf=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Fi=function(t,e){var n=e&&ti(t)[Jc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Mt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},vl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},cm=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},H0=function(t){return function(e){return Mt.utils.snap(cm(t),e)}},xu=function(t){var e=Mt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},G0=function(t){return function(e,n){return xu(cm(t))(e,n.direction)}},la=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},en=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},tn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ca=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},xf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ha={toggleActions:"play",anticipatePin:0},xl={top:0,left:0,center:.5,bottom:1,right:1},Ka=function(t,e){if(kn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in xl?xl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},ua=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,f=s.fontSize,u=s.indent,d=s.fontWeight,g=ve.createElement("div"),_=qr(n)||fr(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=_?_e:n.tagName==="IFRAME"?n.contentDocument.body:n,x=t.indexOf("start")!==-1,y=x?c:h,v="border-color:"+y+";font-size:"+f+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(v+=(i===Ke?gu:_u)+":"+(o+parseFloat(u))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=x,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=v,g.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],Ja(g,0,i,x),g},Ja=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Hs]=1,s["border"+a+Hs]=0,s[n.p]=e+"px",Mt.set(t,s)},ne=[],eh={},Xo,yf=function(){return hn()-ri>34&&(Xo||(Xo=requestAnimationFrame(Gi)))},rs=function(){(!xn||!xn.isPressed||xn.startX>_e.clientWidth)&&(se.cache++,xn?Xo||(Xo=requestAnimationFrame(Gi)):Gi(),ri||Zr("scrollStart"),ri=hn())},$l=function(){nm=re.innerWidth,em=re.innerHeight},vo=function(t){se.cache++,(t===!0||!cn&&!tm&&!ve.fullscreenElement&&!ve.webkitFullscreenElement&&(!jc||nm!==re.innerWidth||Math.abs(re.innerHeight-em)>re.innerHeight*.25))&&_l.restart(!0)},$r={},V0=[],hm=function r(){return tn(Qt,"scrollEnd",r)||Or(!0)},Zr=function(t){return $r[t]&&$r[t].map(function(e){return e()})||V0},Bn=[],um=function(t){for(var e=0;e<Bn.length;e+=5)(!t||Bn[e+4]&&Bn[e+4].query===t)&&(Bn[e].style.cssText=Bn[e+1],Bn[e].getBBox&&Bn[e].setAttribute("transform",Bn[e+2]||""),Bn[e+3].uncache=1)},fm=function(){return se.forEach(function(t){return dn(t)&&++t.cacheID&&(t.rec=t())})},yu=function(t,e){var n;for(yn=0;yn<ne.length;yn++)n=ne[yn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Ao=!0,e&&um(e),e||Zr("revert")},dm=function(t,e){se.cache++,(e||!Sn)&&se.forEach(function(n){return dn(n)&&n.cacheID++&&(n.rec=0)}),kn(t)&&(re.history.scrollRestoration=pu=t)},Sn,Yr=0,Sf,W0=function(){if(Sf!==Yr){var t=Sf=Yr;requestAnimationFrame(function(){return t===Yr&&Or(!0)})}},pm=function(){_e.appendChild(Ls),mu=!xn&&Ls.offsetHeight||re.innerHeight,_e.removeChild(Ls)},Mf=function(t){return Wo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Or=function(t,e){if(Hn=ve.documentElement,_e=ve.body,du=[re,ve,Hn,_e],ri&&!t&&!Ao){en(Qt,"scrollEnd",hm);return}pm(),Sn=Qt.isRefreshing=!0,Ao||fm();var n=Zr("refreshInit");Qp&&Qt.sort(),e||yu(),se.forEach(function(i){dn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ne.slice(0).forEach(function(i){return i.refresh()}),Ao=!1,ne.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),th=1,Mf(!0),ne.forEach(function(i){var s=Si(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Mf(!1),th=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),se.forEach(function(i){dn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),dm(pu,1),_l.pause(),Yr++,Sn=2,Gi(2),ne.forEach(function(i){return dn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Sn=Qt.isRefreshing=!1,Zr("refresh")},nh=0,ja=1,Do,Gi=function(t){if(t===2||!Sn&&!Ao){Qt.isUpdating=!0,Do&&Do.update(0);var e=ne.length,n=hn(),i=n-ql>=50,s=e&&ne[0].scroll();if(ja=nh>s?-1:1,Sn||(nh=s),i&&(ri&&!Pl&&n-ri>200&&(ri=0,Zr("scrollEnd")),po=ql,ql=n),ja<0){for(yn=e;yn-- >0;)ne[yn]&&ne[yn].update(0,i);ja=1}else for(yn=0;yn<e;yn++)ne[yn]&&ne[yn].update(0,i);Qt.isUpdating=!1}Xo=0},ih=[am,lm,_u,gu,Qn+Lo,Qn+Co,Qn+Po,Qn+Ro,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Qa=ih.concat([Wr,Xr,"boxSizing","max"+Hs,"max"+vu,"position",Qn,Xe,Xe+Po,Xe+Co,Xe+Lo,Xe+Ro]),X0=function(t,e,n){Ds(n);var i=t._gsap;if(i.spacerIsNative)Ds(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Zl=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=ih.length,o=e.style,a=t.style,l;s--;)l=ih[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[_u]=a[gu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Wr]=vl(t,En)+Ze,o[Xr]=vl(t,Ke)+Ze,o[Xe]=a[Qn]=a[lm]=a[am]="0",Ds(i),a[Wr]=a["max"+Hs]=n[Wr],a[Xr]=a["max"+vu]=n[Xr],a[Xe]=n[Xe],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Y0=/([A-Z])/g,Ds=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Mt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(Y0,"-$1").toLowerCase())}},fa=function(t){for(var e=Qa.length,n=t.style,i=[],s=0;s<e;s++)i.push(Qa[s],n[Qa[s]]);return i.t=t,i},q0=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},tl={left:0,top:0},Ef=function(t,e,n,i,s,o,a,l,c,h,f,u,d,g){dn(t)&&(t=t(l)),kn(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?Ka("0"+t.substr(3),n):0));var _=d?d.time():0,p,m,x;if(d&&d.seek(0),isNaN(t)||(t=+t),_o(t))d&&(t=Mt.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,u,t)),a&&Ja(a,n,i,!0);else{dn(e)&&(e=e(l));var y=(t||"0").split(" "),v,A,w,E;x=wn(e,l)||_e,v=Fi(x)||{},(!v||!v.left&&!v.top)&&ti(x).display==="none"&&(E=x.style.display,x.style.display="block",v=Fi(x),E?x.style.display=E:x.style.removeProperty("display")),A=Ka(y[0],v[i.d]),w=Ka(y[1]||"0",n),t=v[i.p]-c[i.p]-h+A+s-w,a&&Ja(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var R=t+n,M=o._isStart;p="scroll"+i.d2,Ja(o,R,i,M&&R>20||!M&&(f?Math.max(_e[p],Hn[p]):o.parentNode[p])<=R+1),f&&(c=Fi(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Ze))}return d&&x&&(p=Fi(x),d.seek(u),m=Fi(x),d._caScrollDist=p[i.p]-m[i.p],t=t/d._caScrollDist*u),d&&d.seek(_),d?t:Math.round(t)},$0=/(webkit|moz|length|cssText|inset)/i,bf=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===_e){t._stOrig=s.cssText,a=ti(t);for(o in a)!+o&&!$0.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Mt.core.getCache(t).uncache=1,e.appendChild(t)}},mm=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},da=function(t,e,n){var i={};i[e.p]="+="+n,Mt.set(t,i)},Tf=function(t,e){var n=_r(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,f){var u=o.tween,d=l.onComplete,g={};c=c||n();var _=mm(n,c,function(){u.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+h*u.ratio+f*u.ratio*u.ratio)},l.onUpdate=function(){se.cache++,o.tween&&Gi()},l.onComplete=function(){o.tween=0,d&&d.call(u)},u=o.tween=Mt.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},en(t,"wheel",n.wheelHandler),Qt.isTouch&&en(t,"touchmove",n.wheelHandler),s},Qt=function(){function r(e,n){xs||r.register(Mt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Qc(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!mo){this.update=this.refresh=this.kill=gi;return}n=vf(kn(n)||_o(n)||n.nodeType?{trigger:n}:n,ha);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,f=s.scrub,u=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,x=s.onSnapComplete,y=s.once,v=s.snap,A=s.pinReparent,w=s.pinSpacer,E=s.containerAnimation,R=s.fastScrollEnd,M=s.preventOverlaps,S=n.horizontal||n.containerAnimation&&n.horizontal!==!1?En:Ke,C=!f&&f!==0,L=wn(n.scroller||re),N=Mt.core.getCache(L),V=qr(L),q=("pinType"in n?n.pinType:fr(L,"pinType")||V&&"fixed")==="fixed",F=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],z=C&&n.toggleActions.split(" "),H="markers"in n?n.markers:ha.markers,tt=V?0:parseFloat(ti(L)["border"+S.p2+Hs])||0,D=this,ht=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Ut=B0(L,V,S),te=k0(L,V),Z=0,et=0,_t=0,nt=_r(L,S),bt,Rt,Vt,ee,Ft,Dt,O,Se,Bt,G,Tt,oe,Pt,P,b,X,Q,j,K,ut,at,pt,Yt,it,ot,Nt,It,yt,Zt,Ot,le,I,ct,$,J,lt,ft,kt,he;if(D._startClamp=D._endClamp=!1,D._dir=S,p*=45,D.scroller=L,D.scroll=E?E.time.bind(E):nt,ee=nt(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(Qp=1,n.refreshPriority===-9999&&(Do=D)),N.tweenScroll=N.tweenScroll||{top:Tf(L,Ke),left:Tf(L,En)},D.tweenTo=bt=N.tweenScroll[S.p],D.scrubDuration=function(mt){ct=_o(mt)&&mt,ct?I?I.duration(mt):I=Mt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ct,paused:!0,onComplete:function(){return m&&m(D)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(f),Ot=0,l||(l=i.vars.id)),v&&((!Lr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in _e.style&&Mt.set(V?[_e,Hn]:L,{scrollBehavior:"auto"}),se.forEach(function(mt){return dn(mt)&&mt.target===(V?ve.scrollingElement||Hn:L)&&(mt.smooth=!1)}),Vt=dn(v.snapTo)?v.snapTo:v.snapTo==="labels"?H0(i):v.snapTo==="labelsDirectional"?G0(i):v.directional!==!1?function(mt,Wt){return xu(v.snapTo)(mt,hn()-et<500?0:Wt.direction)}:Mt.utils.snap(v.snapTo),$=v.duration||{min:.1,max:2},$=Lr($)?wo($.min,$.max):wo($,$),J=Mt.delayedCall(v.delay||ct/2||.1,function(){var mt=nt(),Wt=hn()-et<500,At=bt.tween;if((Wt||Math.abs(D.getVelocity())<10)&&!At&&!Pl&&Z!==mt){var Gt=(mt-Dt)/P,ze=i&&!C?i.totalProgress():Gt,ie=Wt?0:(ze-le)/(hn()-po)*1e3||0,Ae=Mt.utils.clamp(-Gt,1-Gt,is(ie/2)*ie/.185),$e=Gt+(v.inertia===!1?0:Ae),Me,Ee,de=v,Un=de.onStart,Re=de.onInterrupt,mn=de.onComplete;if(Me=Vt($e,D),_o(Me)||(Me=$e),Ee=Math.max(0,Math.round(Dt+Me*P)),mt<=O&&mt>=Dt&&Ee!==mt){if(At&&!At._initted&&At.data<=is(Ee-mt))return;v.inertia===!1&&(Ae=Me-Gt),bt(Ee,{duration:$(is(Math.max(is($e-ze),is(Me-ze))*.185/ie/.05||0)),ease:v.ease||"power3",data:is(Ee-mt),onInterrupt:function(){return J.restart(!0)&&Re&&ns(D,Re)},onComplete:function(){D.update(),Z=nt(),i&&!C&&(I?I.resetTo("totalProgress",Me,i._tTime/i._tDur):i.progress(Me)),Ot=le=i&&!C?i.totalProgress():D.progress,x&&x(D),mn&&ns(D,mn)}},mt,Ae*P,Ee-mt-Ae*P),Un&&ns(D,Un,bt.tween)}}else D.isActive&&Z!==mt&&J.restart(!0)}).pause()),l&&(eh[l]=D),u=D.trigger=wn(u||d!==!0&&d),he=u&&u._gsap&&u._gsap.stRevert,he&&(he=he(D)),d=d===!0?u:wn(d),kn(a)&&(a={targets:u,className:a}),d&&(g===!1||g===Qn||(g=!g&&d.parentNode&&d.parentNode.style&&ti(d.parentNode).display==="flex"?!1:Xe),D.pin=d,Rt=Mt.core.getCache(d),Rt.spacer?b=Rt.pinState:(w&&(w=wn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Rt.spacerIsNative=!!w,w&&(Rt.spacerState=fa(w))),Rt.spacer=j=w||ve.createElement("div"),j.classList.add("pin-spacer"),l&&j.classList.add("pin-spacer-"+l),Rt.pinState=b=fa(d)),n.force3D!==!1&&Mt.set(d,{force3D:!0}),D.spacer=j=Rt.spacer,Zt=ti(d),it=Zt[g+S.os2],ut=Mt.getProperty(d),at=Mt.quickSetter(d,S.a,Ze),Zl(d,j,Zt),Q=fa(d)),H){oe=Lr(H)?vf(H,xf):xf,G=ua("scroller-start",l,L,S,oe,0),Tt=ua("scroller-end",l,L,S,oe,0,G),K=G["offset"+S.op.d2];var Oe=wn(fr(L,"content")||L);Se=this.markerStart=ua("start",l,Oe,S,oe,K,0,E),Bt=this.markerEnd=ua("end",l,Oe,S,oe,K,0,E),E&&(kt=Mt.quickSetter([Se,Bt],S.a,Ze)),!q&&!(Ei.length&&fr(L,"fixedMarkers")===!0)&&(z0(V?_e:L),Mt.set([G,Tt],{force3D:!0}),Nt=Mt.quickSetter(G,S.a,Ze),yt=Mt.quickSetter(Tt,S.a,Ze))}if(E){var vt=E.vars.onUpdate,wt=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){D.update(0,0,1),vt&&vt.apply(E,wt||[])})}if(D.previous=function(){return ne[ne.indexOf(D)-1]},D.next=function(){return ne[ne.indexOf(D)+1]},D.revert=function(mt,Wt){if(!Wt)return D.kill(!0);var At=mt!==!1||!D.enabled,Gt=cn;At!==D.isReverted&&(At&&(lt=Math.max(nt(),D.scroll.rec||0),_t=D.progress,ft=i&&i.progress()),Se&&[Se,Bt,G,Tt].forEach(function(ze){return ze.style.display=At?"none":"block"}),At&&(cn=D,D.update(At)),d&&(!A||!D.isActive)&&(At?X0(d,j,b):Zl(d,j,ti(d),ot)),At||D.update(At),cn=Gt,D.isReverted=At)},D.refresh=function(mt,Wt,At,Gt){if(!((cn||!D.enabled)&&!Wt)){if(d&&mt&&ri){en(r,"scrollEnd",hm);return}!Sn&&ht&&ht(D),cn=D,bt.tween&&!At&&(bt.tween.kill(),bt.tween=0),I&&I.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(De){return De.vars.immediateRender&&De.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var ze=Ut(),ie=te(),Ae=E?E.duration():Si(L,S),$e=P<=.01||!P,Me=0,Ee=Gt||0,de=Lr(At)?At.end:n.end,Un=n.endTrigger||u,Re=Lr(At)?At.start:n.start||(n.start===0||!u?0:d?"0 0":"0 100%"),mn=D.pinnedContainer=n.pinnedContainer&&wn(n.pinnedContainer,D),T=u&&Math.max(0,ne.indexOf(D))||0,B=T,W,Y,k,rt,st,dt,St,zt,Xt,Et,qt,ue,pe;for(H&&Lr(At)&&(ue=Mt.getProperty(G,S.p),pe=Mt.getProperty(Tt,S.p));B-- >0;)dt=ne[B],dt.end||dt.refresh(0,1)||(cn=D),St=dt.pin,St&&(St===u||St===d||St===mn)&&!dt.isReverted&&(Et||(Et=[]),Et.unshift(dt),dt.revert(!0,!0)),dt!==ne[B]&&(T--,B--);for(dn(Re)&&(Re=Re(D)),Re=pf(Re,"start",D),Dt=Ef(Re,u,ze,S,nt(),Se,G,D,ie,tt,q,Ae,E,D._startClamp&&"_startClamp")||(d?-.001:0),dn(de)&&(de=de(D)),kn(de)&&!de.indexOf("+=")&&(~de.indexOf(" ")?de=(kn(Re)?Re.split(" ")[0]:"")+de:(Me=Ka(de.substr(2),ze),de=kn(Re)?Re:(E?Mt.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Dt):Dt)+Me,Un=u)),de=pf(de,"end",D),O=Math.max(Dt,Ef(de||(Un?"100% 0":Ae),Un,ze,S,nt()+Me,Bt,Tt,D,ie,tt,q,Ae,E,D._endClamp&&"_endClamp"))||-.001,Me=0,B=T;B--;)dt=ne[B]||{},St=dt.pin,St&&dt.start-dt._pinPush<=Dt&&!E&&dt.end>0&&(W=dt.end-(D._startClamp?Math.max(0,dt.start):dt.start),(St===u&&dt.start-dt._pinPush<Dt||St===mn)&&isNaN(Re)&&(Me+=W*(1-dt.progress)),St===d&&(Ee+=W));if(Dt+=Me,O+=Me,D._startClamp&&(D._startClamp+=Me),D._endClamp&&!Sn&&(D._endClamp=O||-.001,O=Math.min(O,Si(L,S))),P=O-Dt||(Dt-=.01)&&.001,$e&&(_t=Mt.utils.clamp(0,1,Mt.utils.normalize(Dt,O,lt))),D._pinPush=Ee,Se&&Me&&(W={},W[S.a]="+="+Me,mn&&(W[S.p]="-="+nt()),Mt.set([Se,Bt],W)),d&&!(th&&D.end>=Si(L,S)))W=ti(d),rt=S===Ke,k=nt(),pt=parseFloat(ut(S.a))+Ee,!Ae&&O>1&&(qt=(V?ve.scrollingElement||Hn:L).style,qt={style:qt,value:qt["overflow"+S.a.toUpperCase()]},V&&ti(_e)["overflow"+S.a.toUpperCase()]!=="scroll"&&(qt.style["overflow"+S.a.toUpperCase()]="scroll")),Zl(d,j,W),Q=fa(d),Y=Fi(d,!0),zt=q&&_r(L,rt?En:Ke)(),g?(ot=[g+S.os2,P+Ee+Ze],ot.t=j,B=g===Xe?vl(d,S)+P+Ee:0,B&&(ot.push(S.d,B+Ze),j.style.flexBasis!=="auto"&&(j.style.flexBasis=B+Ze)),Ds(ot),mn&&ne.forEach(function(De){De.pin===mn&&De.vars.pinSpacing!==!1&&(De._subPinOffset=!0)}),q&&nt(lt)):(B=vl(d,S),B&&j.style.flexBasis!=="auto"&&(j.style.flexBasis=B+Ze)),q&&(st={top:Y.top+(rt?k-Dt:zt)+Ze,left:Y.left+(rt?zt:k-Dt)+Ze,boxSizing:"border-box",position:"fixed"},st[Wr]=st["max"+Hs]=Math.ceil(Y.width)+Ze,st[Xr]=st["max"+vu]=Math.ceil(Y.height)+Ze,st[Qn]=st[Qn+Po]=st[Qn+Co]=st[Qn+Lo]=st[Qn+Ro]="0",st[Xe]=W[Xe],st[Xe+Po]=W[Xe+Po],st[Xe+Co]=W[Xe+Co],st[Xe+Lo]=W[Xe+Lo],st[Xe+Ro]=W[Xe+Ro],X=q0(b,st,A),Sn&&nt(0)),i?(Xt=i._initted,Xl(1),i.render(i.duration(),!0,!0),Yt=ut(S.a)-pt+P+Ee,It=Math.abs(P-Yt)>1,q&&It&&X.splice(X.length-2,2),i.render(0,!0,!0),Xt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Xl(0)):Yt=P,qt&&(qt.value?qt.style["overflow"+S.a.toUpperCase()]=qt.value:qt.style.removeProperty("overflow-"+S.a));else if(u&&nt()&&!E)for(Y=u.parentNode;Y&&Y!==_e;)Y._pinOffset&&(Dt-=Y._pinOffset,O-=Y._pinOffset),Y=Y.parentNode;Et&&Et.forEach(function(De){return De.revert(!1,!0)}),D.start=Dt,D.end=O,ee=Ft=Sn?lt:nt(),!E&&!Sn&&(ee<lt&&nt(lt),D.scroll.rec=0),D.revert(!1,!0),et=hn(),J&&(Z=-1,J.restart(!0)),cn=0,i&&C&&(i._initted||ft)&&i.progress()!==ft&&i.progress(ft||0,!0).render(i.time(),!0,!0),($e||_t!==D.progress||E||_||i&&!i._initted)&&(i&&!C&&(i._initted||_t||i.vars.immediateRender!==!1)&&i.totalProgress(E&&Dt<-.001&&!_t?Mt.utils.normalize(Dt,O,0):_t,!0),D.progress=$e||(ee-Dt)/P===_t?0:_t),d&&g&&(j._pinOffset=Math.round(D.progress*Yt)),I&&I.invalidate(),isNaN(ue)||(ue-=Mt.getProperty(G,S.p),pe-=Mt.getProperty(Tt,S.p),da(G,S,ue),da(Se,S,ue-(Gt||0)),da(Tt,S,pe),da(Bt,S,pe-(Gt||0))),$e&&!Sn&&D.update(),h&&!Sn&&!Pt&&(Pt=!0,h(D),Pt=!1)}},D.getVelocity=function(){return(nt()-Ft)/(hn()-po)*1e3||0},D.endAnimation=function(){io(D.callbackAnimation),i&&(I?I.progress(1):i.paused()?C||io(i,D.direction<0,1):io(i,i.reversed()))},D.labelToScroll=function(mt){return i&&i.labels&&(Dt||D.refresh()||Dt)+i.labels[mt]/i.duration()*P||0},D.getTrailing=function(mt){var Wt=ne.indexOf(D),At=D.direction>0?ne.slice(0,Wt).reverse():ne.slice(Wt+1);return(kn(mt)?At.filter(function(Gt){return Gt.vars.preventOverlaps===mt}):At).filter(function(Gt){return D.direction>0?Gt.end<=Dt:Gt.start>=O})},D.update=function(mt,Wt,At){if(!(E&&!At&&!mt)){var Gt=Sn===!0?lt:D.scroll(),ze=mt?0:(Gt-Dt)/P,ie=ze<0?0:ze>1?1:ze||0,Ae=D.progress,$e,Me,Ee,de,Un,Re,mn,T;if(Wt&&(Ft=ee,ee=E?nt():Gt,v&&(le=Ot,Ot=i&&!C?i.totalProgress():ie)),p&&d&&!cn&&!oa&&ri&&(!ie&&Dt<Gt+(Gt-Ft)/(hn()-po)*p?ie=1e-4:ie===1&&O>Gt+(Gt-Ft)/(hn()-po)*p&&(ie=.9999)),ie!==Ae&&D.enabled){if($e=D.isActive=!!ie&&ie<1,Me=!!Ae&&Ae<1,Re=$e!==Me,Un=Re||!!ie!=!!Ae,D.direction=ie>Ae?1:-1,D.progress=ie,Un&&!cn&&(Ee=ie&&!Ae?0:ie===1?1:Ae===1?2:3,C&&(de=!Re&&z[Ee+1]!=="none"&&z[Ee+1]||z[Ee],T=i&&(de==="complete"||de==="reset"||de in i))),M&&(Re||T)&&(T||f||!i)&&(dn(M)?M(D):D.getTrailing(M).forEach(function(k){return k.endAnimation()})),C||(I&&!cn&&!oa?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",ie,i._tTime/i._tDur):(I.vars.totalProgress=ie,I.invalidate().restart())):i&&i.totalProgress(ie,!!(cn&&(et||mt)))),d){if(mt&&g&&(j.style[g+S.os2]=it),!q)at(go(pt+Yt*ie));else if(Un){if(mn=!mt&&ie>Ae&&O+1>Gt&&Gt+1>=Si(L,S),A)if(!mt&&($e||mn)){var B=Fi(d,!0),W=Gt-Dt;bf(d,_e,B.top+(S===Ke?W:0)+Ze,B.left+(S===Ke?0:W)+Ze)}else bf(d,j);Ds($e||mn?X:Q),It&&ie<1&&$e||at(pt+(ie===1&&!mn?Yt:0))}}v&&!bt.tween&&!cn&&!oa&&J.restart(!0),a&&(Re||y&&ie&&(ie<1||!Yl))&&Wo(a.targets).forEach(function(k){return k.classList[$e||y?"add":"remove"](a.className)}),o&&!C&&!mt&&o(D),Un&&!cn?(C&&(T&&(de==="complete"?i.pause().totalProgress(1):de==="reset"?i.restart(!0).pause():de==="restart"?i.restart(!0):i[de]()),o&&o(D)),(Re||!Yl)&&(c&&Re&&ns(D,c),F[Ee]&&ns(D,F[Ee]),y&&(ie===1?D.kill(!1,1):F[Ee]=0),Re||(Ee=ie===1?1:3,F[Ee]&&ns(D,F[Ee]))),R&&!$e&&Math.abs(D.getVelocity())>(_o(R)?R:2500)&&(io(D.callbackAnimation),I?I.progress(1):io(i,de==="reverse"?1:!ie,1))):C&&o&&!cn&&o(D)}if(yt){var Y=E?Gt/E.duration()*(E._caScrollDist||0):Gt;Nt(Y+(G._isFlipped?1:0)),yt(Y)}kt&&kt(-Gt/E.duration()*(E._caScrollDist||0))}},D.enable=function(mt,Wt){D.enabled||(D.enabled=!0,en(L,"resize",vo),V||en(L,"scroll",rs),ht&&en(r,"refreshInit",ht),mt!==!1&&(D.progress=_t=0,ee=Ft=Z=nt()),Wt!==!1&&D.refresh())},D.getTween=function(mt){return mt&&bt?bt.tween:I},D.setPositions=function(mt,Wt,At,Gt){if(E){var ze=E.scrollTrigger,ie=E.duration(),Ae=ze.end-ze.start;mt=ze.start+Ae*mt/ie,Wt=ze.start+Ae*Wt/ie}D.refresh(!1,!1,{start:mf(mt,At&&!!D._startClamp),end:mf(Wt,At&&!!D._endClamp)},Gt),D.update()},D.adjustPinSpacing=function(mt){if(ot&&mt){var Wt=ot.indexOf(S.d)+1;ot[Wt]=parseFloat(ot[Wt])+mt+Ze,ot[1]=parseFloat(ot[1])+mt+Ze,Ds(ot)}},D.disable=function(mt,Wt){if(mt!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,Wt||I&&I.pause(),lt=0,Rt&&(Rt.uncache=1),ht&&tn(r,"refreshInit",ht),J&&(J.pause(),bt.tween&&bt.tween.kill()&&(bt.tween=0)),!V)){for(var At=ne.length;At--;)if(ne[At].scroller===L&&ne[At]!==D)return;tn(L,"resize",vo),V||tn(L,"scroll",rs)}},D.kill=function(mt,Wt){D.disable(mt,Wt),I&&!Wt&&I.kill(),l&&delete eh[l];var At=ne.indexOf(D);At>=0&&ne.splice(At,1),At===yn&&ja>0&&yn--,At=0,ne.forEach(function(Gt){return Gt.scroller===D.scroller&&(At=1)}),At||Sn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,mt&&i.revert({kill:!1}),Wt||i.kill()),Se&&[Se,Bt,G,Tt].forEach(function(Gt){return Gt.parentNode&&Gt.parentNode.removeChild(Gt)}),Do===D&&(Do=0),d&&(Rt&&(Rt.uncache=1),At=0,ne.forEach(function(Gt){return Gt.pin===d&&At++}),At||(Rt.spacer=0)),n.onKill&&n.onKill(D)},ne.push(D),D.enable(!1,!1),he&&he(D),i&&i.add&&!P){var Kt=D.update;D.update=function(){D.update=Kt,se.cache++,Dt||O||D.refresh()},Mt.delayedCall(.01,D.update),P=.01,Dt=O=0}else D.refresh();d&&W0()},r.register=function(n){return xs||(Mt=n||rm(),im()&&window.document&&r.enable(),xs=mo),xs},r.defaults=function(n){if(n)for(var i in n)ha[i]=n[i];return ha},r.disable=function(n,i){mo=0,ne.forEach(function(o){return o[i?"kill":"disable"](n)}),tn(re,"wheel",rs),tn(ve,"scroll",rs),clearInterval(sa),tn(ve,"touchcancel",gi),tn(_e,"touchstart",gi),la(tn,ve,"pointerdown,touchstart,mousedown",gf),la(tn,ve,"pointerup,touchend,mouseup",_f),_l.kill(),aa(tn);for(var s=0;s<se.length;s+=3)ca(tn,se[s],se[s+1]),ca(tn,se[s],se[s+2])},r.enable=function(){if(re=window,ve=document,Hn=ve.documentElement,_e=ve.body,Mt){if(Wo=Mt.utils.toArray,wo=Mt.utils.clamp,Qc=Mt.core.context||gi,Xl=Mt.core.suppressOverwrites||gi,pu=re.history.scrollRestoration||"auto",nh=re.pageYOffset||0,Mt.core.globals("ScrollTrigger",r),_e){mo=1,Ls=document.createElement("div"),Ls.style.height="100vh",Ls.style.position="absolute",pm(),O0(),Ge.register(Mt),r.isTouch=Ge.isTouch,ir=Ge.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),jc=Ge.isTouch===1,en(re,"wheel",rs),du=[re,ve,Hn,_e],Mt.matchMedia?(r.matchMedia=function(h){var f=Mt.matchMedia(),u;for(u in h)f.add(u,h[u]);return f},Mt.addEventListener("matchMediaInit",function(){fm(),yu()}),Mt.addEventListener("matchMediaRevert",function(){return um()}),Mt.addEventListener("matchMedia",function(){Or(0,1),Zr("matchMedia")}),Mt.matchMedia().add("(orientation: portrait)",function(){return $l(),$l})):console.warn("Requires GSAP 3.11.0 or later"),$l(),en(ve,"scroll",rs);var n=_e.hasAttribute("style"),i=_e.style,s=i.borderTopStyle,o=Mt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Fi(_e),Ke.m=Math.round(a.top+Ke.sc())||0,En.m=Math.round(a.left+En.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(_e.setAttribute("style",""),_e.removeAttribute("style")),sa=setInterval(yf,250),Mt.delayedCall(.5,function(){return oa=0}),en(ve,"touchcancel",gi),en(_e,"touchstart",gi),la(en,ve,"pointerdown,touchstart,mousedown",gf),la(en,ve,"pointerup,touchend,mouseup",_f),Jc=Mt.utils.checkPrefix("transform"),Qa.push(Jc),xs=hn(),_l=Mt.delayedCall(.2,Or).pause(),ys=[ve,"visibilitychange",function(){var h=re.innerWidth,f=re.innerHeight;ve.hidden?(ff=h,df=f):(ff!==h||df!==f)&&vo()},ve,"DOMContentLoaded",Or,re,"load",Or,re,"resize",vo],aa(en),ne.forEach(function(h){return h.enable(0,1)}),l=0;l<se.length;l+=3)ca(tn,se[l],se[l+1]),ca(tn,se[l],se[l+2])}else if(ve){var c=function h(){r.enable(),ve.removeEventListener("DOMContentLoaded",h)};ve.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Yl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(sa)||(sa=i)&&setInterval(yf,i),"ignoreMobileResize"in n&&(jc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(aa(tn)||aa(en,n.autoRefreshEvents||"none"),tm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=wn(n),o=se.indexOf(s),a=qr(s);~o&&se.splice(o,a?6:2),i&&(a?Ei.unshift(re,i,_e,i,Hn,i):Ei.unshift(s,i))},r.clearMatchMedia=function(n){ne.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(kn(n)?wn(n):n).getBoundingClientRect(),a=o[s?Wr:Xr]*i||0;return s?o.right-a>0&&o.left+a<re.innerWidth:o.bottom-a>0&&o.top+a<re.innerHeight},r.positionInViewport=function(n,i,s){kn(n)&&(n=wn(n));var o=n.getBoundingClientRect(),a=o[s?Wr:Xr],l=i==null?a/2:i in xl?xl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/re.innerWidth:(o.top+l)/re.innerHeight},r.killAll=function(n){if(ne.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=$r.killAll||[];$r={},i.forEach(function(s){return s()})}},r}();Qt.version="3.15.0";Qt.saveStyles=function(r){return r?Wo(r).forEach(function(t){if(t&&t.style){var e=Bn.indexOf(t);e>=0&&Bn.splice(e,5),Bn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Mt.core.getCache(t),Qc())}}):Bn};Qt.revert=function(r,t){return yu(!r,t)};Qt.create=function(r,t){return new Qt(r,t)};Qt.refresh=function(r){return r?vo(!0):(xs||Qt.register())&&Or(!0)};Qt.update=function(r){return++se.cache&&Gi(r===!0?2:0)};Qt.clearScrollMemory=dm;Qt.maxScroll=function(r,t){return Si(r,t?En:Ke)};Qt.getScrollFunc=function(r,t){return _r(wn(r),t?En:Ke)};Qt.getById=function(r){return eh[r]};Qt.getAll=function(){return ne.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Qt.isScrolling=function(){return!!ri};Qt.snapDirectional=xu;Qt.addEventListener=function(r,t){var e=$r[r]||($r[r]=[]);~e.indexOf(t)||e.push(t)};Qt.removeEventListener=function(r,t){var e=$r[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Qt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var f=[],u=[],d=Mt.delayedCall(i,function(){h(f,u),f=[],u=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),u.push(g),s<=f.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&dn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return dn(s)&&(s=s(),en(Qt,"refresh",function(){return s=t.batchMax()})),Wo(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Qt.create(c))}),e};var wf=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Kl=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ge.isTouch?" pinch-zoom":""):"none",t===Hn&&r(_e,e)},pa={auto:1,scroll:1},Z0=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Mt.core.getCache(s),a=hn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==_e&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(pa[(l=ti(s)).overflowY]||pa[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!qr(s)&&(pa[(l=ti(s)).overflowY]||pa[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},gm=function(t,e,n,i){return Ge.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Z0,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&en(ve,Ge.eventTypes[0],Cf,!1,!0)},onDisable:function(){return tn(ve,Ge.eventTypes[0],Cf,!0)}})},K0=/(input|label|select|textarea)/i,Af,Cf=function(t){var e=K0.test(t.target.tagName);(e||Af)&&(t._gsapAllow=!0,Af=e)},J0=function(t){Lr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=wn(t.target)||Hn,h=Mt.core.globals().ScrollSmoother,f=h&&h.get(),u=ir&&(t.content&&wn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),d=_r(c,Ke),g=_r(c,En),_=1,p=(Ge.isTouch&&re.visualViewport?re.visualViewport.scale*re.visualViewport.width:re.outerWidth)/re.innerWidth,m=0,x=dn(i)?function(){return i(a)}:function(){return i||2.8},y,v,A=gm(c,t.type,!0,s),w=function(){return v=!1},E=gi,R=gi,M=function(){l=Si(c,Ke),R=wo(ir?1:0,l),n&&(E=wo(0,Si(c,En))),y=Yr},S=function(){u._gsap.y=go(parseFloat(u._gsap.y)+d.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},C=function(){if(v){requestAnimationFrame(w);var H=go(a.deltaY/2),tt=R(d.v-H);if(u&&tt!==d.v+d.offset){d.offset=tt-d.v;var D=go((parseFloat(u&&u._gsap.y)||0)-d.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",u._gsap.y=D+"px",d.cacheID=se.cache,Gi()}return!0}d.offset&&S(),v=!0},L,N,V,q,F=function(){M(),L.isActive()&&L.vars.scrollY>l&&(d()>l?L.progress(1)&&d(l):L.resetTo("scrollY",l))};return u&&Mt.set(u,{y:"+=0"}),t.ignoreCheck=function(z){return ir&&z.type==="touchmove"&&C()||_>1.05&&z.type!=="touchstart"||a.isGesturing||z.touches&&z.touches.length>1},t.onPress=function(){v=!1;var z=_;_=go((re.visualViewport&&re.visualViewport.scale||1)/p),L.pause(),z!==_&&Kl(c,_>1.01?!0:n?!1:"x"),N=g(),V=d(),M(),y=Yr},t.onRelease=t.onGestureStart=function(z,H){if(d.offset&&S(),!H)q.restart(!0);else{se.cache++;var tt=x(),D,ht;n&&(D=g(),ht=D+tt*.05*-z.velocityX/.227,tt*=wf(g,D,ht,Si(c,En)),L.vars.scrollX=E(ht)),D=d(),ht=D+tt*.05*-z.velocityY/.227,tt*=wf(d,D,ht,Si(c,Ke)),L.vars.scrollY=R(ht),L.invalidate().duration(tt).play(.01),(ir&&L.vars.scrollY>=l||D>=l-1)&&Mt.to({},{onUpdate:F,duration:tt})}o&&o(z)},t.onWheel=function(){L._ts&&L.pause(),hn()-m>1e3&&(y=0,m=hn())},t.onChange=function(z,H,tt,D,ht){if(Yr!==y&&M(),H&&n&&g(E(D[2]===H?N+(z.startX-z.x):g()+H-D[1])),tt){d.offset&&S();var Ut=ht[2]===tt,te=Ut?V+z.startY-z.y:d()+tt-ht[1],Z=R(te);Ut&&te!==Z&&(V+=Z-te),d(Z)}(tt||H)&&Gi()},t.onEnable=function(){Kl(c,n?!1:"x"),Qt.addEventListener("refresh",F),en(re,"resize",F),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),A.enable()},t.onDisable=function(){Kl(c,!0),tn(re,"resize",F),Qt.removeEventListener("refresh",F),A.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ge(t),a.iOS=ir,ir&&!d()&&d(1),ir&&Mt.ticker.add(gi),q=a._dc,L=Mt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:mm(d,d(),function(){return L.pause()})},onUpdate:Gi,onComplete:q.vars.onComplete}),a};Qt.sort=function(r){if(dn(r))return ne.sort(r);var t=re.pageYOffset||0;return Qt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+re.innerHeight}),ne.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Qt.observe=function(r){return new Ge(r)};Qt.normalizeScroll=function(r){if(typeof r>"u")return xn;if(r===!0&&xn)return xn.enable();if(r===!1){xn&&xn.kill(),xn=r;return}var t=r instanceof Ge?r:J0(r);return xn&&xn.target===t.target&&xn.kill(),qr(t.target)&&(xn=t),t};Qt.core={_getVelocityProp:Kc,_inputObserver:gm,_scrollers:se,_proxies:Ei,bridge:{ss:function(){ri||Zr("scrollStart"),ri=hn()},ref:function(){return cn}}};rm()&&Mt.registerPlugin(Qt);var Rf="1.3.27";function _m(r,t,e){return Math.max(r,Math.min(t,e))}function j0(r,t,e){return(1-e)*r+e*t}function Q0(r,t,e,n){return j0(r,t,1-Math.exp(-e*n))}function t_(r,t){return(r%t+t)%t}var e_=class{constructor(){Ct(this,"isRunning",!1);Ct(this,"value",0);Ct(this,"from",0);Ct(this,"to",0);Ct(this,"currentTime",0);Ct(this,"lerp");Ct(this,"duration");Ct(this,"easing");Ct(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=_m(0,this.currentTime/this.duration,1);t=n>=1;const i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=Q0(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function n_(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var i_=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Ct(this,"width",0);Ct(this,"height",0);Ct(this,"scrollHeight",0);Ct(this,"scrollWidth",0);Ct(this,"debouncedResize");Ct(this,"wrapperResizeObserver");Ct(this,"contentResizeObserver");Ct(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ct(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ct(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=n_(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},vm=class{constructor(){Ct(this,"events",{})}emit(r,...t){var n;const e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}};const r_=100/6,Ki={passive:!1};function Pf(r,t){return r===1?r_:r===2?t:1}var s_=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Ct(this,"touchStart",{x:0,y:0});Ct(this,"lastDelta",{x:0,y:0});Ct(this,"window",{width:0,height:0});Ct(this,"emitter",new vm);Ct(this,"onTouchStart",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Ct(this,"onTouchMove",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Ct(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Ct(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r;const i=Pf(n,this.window.width),s=Pf(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Ct(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ki),this.element.addEventListener("touchstart",this.onTouchStart,Ki),this.element.addEventListener("touchmove",this.onTouchMove,Ki),this.element.addEventListener("touchend",this.onTouchEnd,Ki)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Ki),this.element.removeEventListener("touchstart",this.onTouchStart,Ki),this.element.removeEventListener("touchmove",this.onTouchMove,Ki),this.element.removeEventListener("touchend",this.onTouchEnd,Ki)}};const Lf=r=>Math.min(1,1.001-2**(-10*r));var o_=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:u=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:p,virtualScroll:m,overscroll:x=!0,autoRaf:y=!1,anchors:v=!1,autoToggle:A=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:R=E,stopInertiaOnNavigate:M=!1,respectReducedMotion:S=!0}={}){Ct(this,"_isScrolling",!1);Ct(this,"_isStopped",!1);Ct(this,"_isLocked",!1);Ct(this,"_preventNextNativeScrollEvent",!1);Ct(this,"_resetVelocityTimeout",null);Ct(this,"_rafId",null);Ct(this,"_isDraggingSelection",!1);Ct(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ct(this,"isTouching");Ct(this,"isIos");Ct(this,"time",0);Ct(this,"userData",{});Ct(this,"lastVelocity",0);Ct(this,"velocity",0);Ct(this,"direction",0);Ct(this,"options");Ct(this,"targetScroll");Ct(this,"animatedScroll");Ct(this,"animate",new e_);Ct(this,"emitter",new vm);Ct(this,"dimensions");Ct(this,"virtualScroll");Ct(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Ct(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ct(this,"onTransitionEnd",r=>{var t;(t=r.propertyName)!=null&&t.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Ct(this,"onClick",r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){const n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Ct(this,"onPointerDown",r=>{r.button===1&&this.reset()});Ct(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(g=>{var _,p,m,x,y;return g instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(g))||((_=g.hasAttribute)==null?void 0:_.call(g,"data-lenis-prevent"))||h==="vertical"&&((p=g.hasAttribute)==null?void 0:p.call(g,"data-lenis-prevent-vertical"))||h==="horizontal"&&((m=g.hasAttribute)==null?void 0:m.call(g,"data-lenis-prevent-horizontal"))||i&&((x=g.hasAttribute)==null?void 0:x.call(g,"data-lenis-prevent-touch"))||s&&((y=g.hasAttribute)==null?void 0:y.call(g,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const u=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...u?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ct(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ct(this,"raf",r=>{const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Rf,window.lenis||(window.lenis={}),window.lenis.version=Rf,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Lf:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:f,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:p,virtualScroll:m,overscroll:x,autoRaf:y,anchors:v,autoToggle:A,allowNestedScroll:w,naiveDimensions:R,stopInertiaOnNavigate:M,respectReducedMotion:S},this.dimensions=new i_(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new s_(e,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;const e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;const n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:f}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=r,d=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let g=null;if(typeof u=="string"?(g=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),g||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(g=u),g){if(this.options.wrapper!==window){const v=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?v.left:v.top}const _=g.getBoundingClientRect(),p=getComputedStyle(g),m=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),x=getComputedStyle(this.rootElement),y=this.isHorizontal?Number.parseFloat(x.scrollPaddingLeft):Number.parseFloat(x.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(y)?0:y)}}if(typeof u=="number"){if(u+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const g=u-this.animatedScroll;g>this.limit/2?u-=this.limit:g<-this.limit/2&&(u+=this.limit)}}else u=_m(0,u,this.limit);if(u===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=Lf:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,h,f,u,d,g;if(n-(i.time??0)>2e3){i.time=Date.now();const w=window.getComputedStyle(r);if(i.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),h=["auto"].includes(w.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;f=r.scrollWidth,u=r.scrollHeight,d=r.clientWidth,g=r.clientHeight,a=f>d,l=u>g,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=u,i.clientWidth=d,i.clientHeight=g,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,f=i.scrollWidth,u=i.scrollHeight,d=i.clientWidth,g=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let p,m,x,y,v,A;if(_==="horizontal")p=Math.round(r.scrollLeft),m=f-d,x=t,y=s,v=a,A=c;else if(_==="vertical")p=Math.round(r.scrollTop),m=u-g,x=e,y=o,v=l,A=h;else return!1;return!A&&(p>=m||p<=0)?!0:(x>0?p<m:p>0)&&y&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?t_(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Su="170",a_=0,Df=1,l_=2,xm=1,c_=2,Ii=3,vr=0,Dn=1,Oi=2,Vi=0,Is=1,If=2,Uf=3,Nf=4,h_=5,Ur=100,u_=101,f_=102,d_=103,p_=104,m_=200,g_=201,__=202,v_=203,rh=204,sh=205,x_=206,y_=207,S_=208,M_=209,E_=210,b_=211,T_=212,w_=213,A_=214,oh=0,ah=1,lh=2,Gs=3,ch=4,hh=5,uh=6,fh=7,ym=0,C_=1,R_=2,dr=0,P_=1,L_=2,D_=3,I_=4,U_=5,N_=6,F_=7,Sm=300,Vs=301,Ws=302,dh=303,ph=304,Ll=306,mh=1e3,Br=1001,gh=1002,di=1003,O_=1004,ma=1005,Mi=1006,Jl=1007,kr=1008,qi=1009,Mm=1010,Em=1011,Yo=1012,Mu=1013,Kr=1014,zi=1015,$s=1016,Eu=1017,bu=1018,Xs=1020,bm=35902,Tm=1021,wm=1022,fi=1023,Am=1024,Cm=1025,Us=1026,Ys=1027,Rm=1028,Tu=1029,Pm=1030,wu=1031,Au=1033,el=33776,nl=33777,il=33778,rl=33779,_h=35840,vh=35841,xh=35842,yh=35843,Sh=36196,Mh=37492,Eh=37496,bh=37808,Th=37809,wh=37810,Ah=37811,Ch=37812,Rh=37813,Ph=37814,Lh=37815,Dh=37816,Ih=37817,Uh=37818,Nh=37819,Fh=37820,Oh=37821,sl=36492,Bh=36494,kh=36495,Lm=36283,zh=36284,Hh=36285,Gh=36286,B_=3200,k_=3201,Dm=0,z_=1,rr="",jn="srgb",Zs="srgb-linear",Dl="linear",xe="srgb",ss=7680,Ff=519,H_=512,G_=513,V_=514,Im=515,W_=516,X_=517,Y_=518,q_=519,Of=35044,Bf="300 es",Hi=2e3,yl=2001;class Ks{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ol=Math.PI/180,Vh=180/Math.PI;function Js(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[r&255]+an[r>>8&255]+an[r>>16&255]+an[r>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function un(r,t,e){return Math.max(t,Math.min(e,r))}function $_(r,t){return(r%t+t)%t}function jl(r,t,e){return(1-e)*r+e*t}function ro(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Tn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class xt{constructor(t=0,e=0){xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(un(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,i,s,o,a,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],x=i[1],y=i[4],v=i[7],A=i[2],w=i[5],E=i[8];return s[0]=o*_+a*x+l*A,s[3]=o*p+a*y+l*w,s[6]=o*m+a*v+l*E,s[1]=c*_+h*x+f*A,s[4]=c*p+h*y+f*w,s[7]=c*m+h*v+f*E,s[2]=u*_+d*x+g*A,s[5]=u*p+d*y+g*w,s[8]=u*m+d*v+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*s,d=c*s-o*l,g=e*f+n*u+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ql.makeScale(t,e)),this}rotate(t){return this.premultiply(Ql.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ql.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ql=new Jt;function Um(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function qo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Z_(){const r=qo("canvas");return r.style.display="block",r}const kf={};function xo(r){r in kf||(kf[r]=!0,console.warn(r))}function K_(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function J_(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function j_(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ce={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===xe&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===xe&&(r.r=Ns(r.r),r.g=Ns(r.g),r.b=Ns(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===rr?Dl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Wi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ns(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const zf=[.64,.33,.3,.6,.15,.06],Hf=[.2126,.7152,.0722],Gf=[.3127,.329],Vf=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wf=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ce.define({[Zs]:{primaries:zf,whitePoint:Gf,transfer:Dl,toXYZ:Vf,fromXYZ:Wf,luminanceCoefficients:Hf,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:zf,whitePoint:Gf,transfer:xe,toXYZ:Vf,fromXYZ:Wf,luminanceCoefficients:Hf,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}});let os;class Q_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{os===void 0&&(os=qo("canvas")),os.width=t.width,os.height=t.height;const n=os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Wi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wi(e[n]/255)*255):e[n]=Wi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tv=0;class Nm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=Js(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(tc(i[o].image)):s.push(tc(i[o]))}else s=tc(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function tc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Q_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ev=0;class bn extends Ks{constructor(t=bn.DEFAULT_IMAGE,e=bn.DEFAULT_MAPPING,n=Br,i=Br,s=Mi,o=kr,a=fi,l=qi,c=bn.DEFAULT_ANISOTROPY,h=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=Js(),this.name="",this.source=new Nm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mh:t.x=t.x-Math.floor(t.x);break;case Br:t.x=t.x<0?0:1;break;case gh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mh:t.y=t.y-Math.floor(t.y);break;case Br:t.y=t.y<0?0:1;break;case gh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=Sm;bn.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,n=0,i=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(d+1)/2,A=(m+1)/2,w=(h+u)/4,E=(f+_)/4,R=(g+p)/4;return y>v&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=w/n,s=E/n):v>A?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=R/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=E/s,i=R/s),this.set(n,i,s,e),this}let x=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(f-_)/x,this.z=(u-h)/x,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nv extends Ks{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new bn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Nm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends nv{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Fm extends bn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=di,this.minFilter=di,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class iv extends bn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=di,this.minFilter=di,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jo{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3];const u=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==u||c!==d||h!==g){let p=1-a;const m=l*u+c*d+h*g+f*_,x=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const A=Math.sqrt(y),w=Math.atan2(A,m*x);p=Math.sin(p*w)/A,a=Math.sin(a*w)/A}const v=a*x;if(l=l*p+u*v,c=c*p+d*v,h=h*p+g*v,f=f*p+_*v,p===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=A,c*=A,h*=A,f*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[o],u=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-a*d,t[e+2]=c*g+h*d+a*u-l*f,t[e+3]=h*g-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(s/2),u=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(un(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=i*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=i+l*f+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ec.copy(this).projectOnVector(t),this.sub(ec)}reflect(t){return this.sub(ec.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(un(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ec=new U,Xf=new jo;class Qo{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(li.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(li.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=li.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,li):li.fromBufferAttribute(s,o),li.applyMatrix4(t.matrixWorld),this.expandByPoint(li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ga.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ga.copy(n.boundingBox)),ga.applyMatrix4(t.matrixWorld),this.union(ga)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,li),li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(so),_a.subVectors(this.max,so),as.subVectors(t.a,so),ls.subVectors(t.b,so),cs.subVectors(t.c,so),Ji.subVectors(ls,as),ji.subVectors(cs,ls),Er.subVectors(as,cs);let e=[0,-Ji.z,Ji.y,0,-ji.z,ji.y,0,-Er.z,Er.y,Ji.z,0,-Ji.x,ji.z,0,-ji.x,Er.z,0,-Er.x,-Ji.y,Ji.x,0,-ji.y,ji.x,0,-Er.y,Er.x,0];return!nc(e,as,ls,cs,_a)||(e=[1,0,0,0,1,0,0,0,1],!nc(e,as,ls,cs,_a))?!1:(va.crossVectors(Ji,ji),e=[va.x,va.y,va.z],nc(e,as,ls,cs,_a))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ci=[new U,new U,new U,new U,new U,new U,new U,new U],li=new U,ga=new Qo,as=new U,ls=new U,cs=new U,Ji=new U,ji=new U,Er=new U,so=new U,_a=new U,va=new U,br=new U;function nc(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){br.fromArray(r,s);const a=i.x*Math.abs(br.x)+i.y*Math.abs(br.y)+i.z*Math.abs(br.z),l=t.dot(br),c=e.dot(br),h=n.dot(br);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const rv=new Qo,oo=new U,ic=new U;class ta{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):rv.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;oo.subVectors(t,this.center);const e=oo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(oo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ic.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(oo.copy(t.center).add(ic)),this.expandByPoint(oo.copy(t.center).sub(ic))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ri=new U,rc=new U,xa=new U,Qi=new U,sc=new U,ya=new U,oc=new U;class Cu{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ri.copy(this.origin).addScaledVector(this.direction,e),Ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){rc.copy(t).add(e).multiplyScalar(.5),xa.copy(e).sub(t).normalize(),Qi.copy(this.origin).sub(rc);const s=t.distanceTo(e)*.5,o=-this.direction.dot(xa),a=Qi.dot(this.direction),l=-Qi.dot(xa),c=Qi.lengthSq(),h=Math.abs(1-o*o);let f,u,d,g;if(h>0)if(f=o*l-a,u=o*a-l,g=s*h,f>=0)if(u>=-g)if(u<=g){const _=1/h;f*=_,u*=_,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(rc).addScaledVector(xa,u),d}intersectSphere(t,e){Ri.subVectors(t.center,this.origin);const n=Ri.dot(this.direction),i=Ri.dot(Ri)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ri)!==null}intersectTriangle(t,e,n,i,s){sc.subVectors(e,t),ya.subVectors(n,t),oc.crossVectors(sc,ya);let o=this.direction.dot(oc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,t);const l=a*this.direction.dot(ya.crossVectors(Qi,ya));if(l<0)return null;const c=a*this.direction.dot(sc.cross(Qi));if(c<0||l+c>o)return null;const h=-a*Qi.dot(oc);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(t,e,n,i,s,o,a,l,c,h,f,u,d,g,_,p){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,f,u,d,g,_,p)}set(t,e,n,i,s,o,a,l,c,h,f,u,d,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/hs.setFromMatrixColumn(t,0).length(),s=1/hs.setFromMatrixColumn(t,1).length(),o=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const u=o*h,d=o*f,g=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,g=c*h,_=c*f;e[0]=u+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,g=c*h,_=c*f;e[0]=u-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,d=o*f,g=a*h,_=a*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+_,e[1]=l*f,e[5]=_*c+u,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-u*f,e[8]=g*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-_*f}else if(t.order==="XZY"){const u=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+_,e[5]=o*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sv,t,ov)}lookAt(t,e,n){const i=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),tr.crossVectors(n,Fn),tr.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),tr.crossVectors(n,Fn)),tr.normalize(),Sa.crossVectors(Fn,tr),i[0]=tr.x,i[4]=Sa.x,i[8]=Fn.x,i[1]=tr.y,i[5]=Sa.y,i[9]=Fn.y,i[2]=tr.z,i[6]=Sa.z,i[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],x=n[3],y=n[7],v=n[11],A=n[15],w=i[0],E=i[4],R=i[8],M=i[12],S=i[1],C=i[5],L=i[9],N=i[13],V=i[2],q=i[6],F=i[10],z=i[14],H=i[3],tt=i[7],D=i[11],ht=i[15];return s[0]=o*w+a*S+l*V+c*H,s[4]=o*E+a*C+l*q+c*tt,s[8]=o*R+a*L+l*F+c*D,s[12]=o*M+a*N+l*z+c*ht,s[1]=h*w+f*S+u*V+d*H,s[5]=h*E+f*C+u*q+d*tt,s[9]=h*R+f*L+u*F+d*D,s[13]=h*M+f*N+u*z+d*ht,s[2]=g*w+_*S+p*V+m*H,s[6]=g*E+_*C+p*q+m*tt,s[10]=g*R+_*L+p*F+m*D,s[14]=g*M+_*N+p*z+m*ht,s[3]=x*w+y*S+v*V+A*H,s[7]=x*E+y*C+v*q+A*tt,s[11]=x*R+y*L+v*F+A*D,s[15]=x*M+y*N+v*z+A*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+s*l*f-i*c*f-s*a*u+n*c*u+i*a*d-n*l*d)+_*(+e*l*d-e*c*u+s*o*u-i*o*d+i*c*h-s*l*h)+p*(+e*c*f-e*a*d-s*o*f+n*o*d+s*a*h-n*c*h)+m*(-i*a*h-e*l*f+e*a*u+i*o*f-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],_=t[13],p=t[14],m=t[15],x=f*p*c-_*u*c+_*l*d-a*p*d-f*l*m+a*u*m,y=g*u*c-h*p*c-g*l*d+o*p*d+h*l*m-o*u*m,v=h*_*c-g*f*c+g*a*d-o*_*d-h*a*m+o*f*m,A=g*f*l-h*_*l-g*a*u+o*_*u+h*a*p-o*f*p,w=e*x+n*y+i*v+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return t[0]=x*E,t[1]=(_*u*s-f*p*s-_*i*d+n*p*d+f*i*m-n*u*m)*E,t[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*m+n*l*m)*E,t[3]=(f*l*s-a*u*s-f*i*c+n*u*c+a*i*d-n*l*d)*E,t[4]=y*E,t[5]=(h*p*s-g*u*s+g*i*d-e*p*d-h*i*m+e*u*m)*E,t[6]=(g*l*s-o*p*s-g*i*c+e*p*c+o*i*m-e*l*m)*E,t[7]=(o*u*s-h*l*s+h*i*c-e*u*c-o*i*d+e*l*d)*E,t[8]=v*E,t[9]=(g*f*s-h*_*s-g*n*d+e*_*d+h*n*m-e*f*m)*E,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*m+e*a*m)*E,t[11]=(h*a*s-o*f*s-h*n*c+e*f*c+o*n*d-e*a*d)*E,t[12]=A*E,t[13]=(h*_*i-g*f*i+g*n*u-e*_*u-h*n*p+e*f*p)*E,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*p-e*a*p)*E,t[15]=(o*f*i-h*a*i+h*n*l-e*f*l-o*n*u+e*a*u)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,f=a+a,u=s*c,d=s*h,g=s*f,_=o*h,p=o*f,m=a*f,x=l*c,y=l*h,v=l*f,A=n.x,w=n.y,E=n.z;return i[0]=(1-(_+m))*A,i[1]=(d+v)*A,i[2]=(g-y)*A,i[3]=0,i[4]=(d-v)*w,i[5]=(1-(u+m))*w,i[6]=(p+x)*w,i[7]=0,i[8]=(g+y)*E,i[9]=(p-x)*E,i[10]=(1-(u+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=hs.set(i[0],i[1],i[2]).length();const o=hs.set(i[4],i[5],i[6]).length(),a=hs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ci.copy(this);const c=1/s,h=1/o,f=1/a;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=f,ci.elements[9]*=f,ci.elements[10]*=f,e.setFromRotationMatrix(ci),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Hi){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i);let d,g;if(a===Hi)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===yl)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Hi){const l=this.elements,c=1/(e-t),h=1/(n-i),f=1/(o-s),u=(e+t)*c,d=(n+i)*h;let g,_;if(a===Hi)g=(o+s)*f,_=-2*f;else if(a===yl)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const hs=new U,ci=new Ce,sv=new U(0,0,0),ov=new U(1,1,1),tr=new U,Sa=new U,Fn=new U,Yf=new Ce,qf=new jo;class Ti{constructor(t=0,e=0,n=0,i=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-un(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qf.setFromEuler(this),this.setFromQuaternion(qf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class Om{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let av=0;const $f=new U,us=new jo,Pi=new Ce,Ma=new U,ao=new U,lv=new U,cv=new jo,Zf=new U(1,0,0),Kf=new U(0,1,0),Jf=new U(0,0,1),jf={type:"added"},hv={type:"removed"},fs={type:"childadded",child:null},ac={type:"childremoved",child:null};class nn extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const t=new U,e=new Ti,n=new jo,i=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Jt}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Om,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(Zf,t)}rotateY(t){return this.rotateOnAxis(Kf,t)}rotateZ(t){return this.rotateOnAxis(Jf,t)}translateOnAxis(t,e){return $f.copy(t).applyQuaternion(this.quaternion),this.position.add($f.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zf,t)}translateY(t){return this.translateOnAxis(Kf,t)}translateZ(t){return this.translateOnAxis(Jf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ma.copy(t):Ma.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(ao,Ma,this.up):Pi.lookAt(Ma,ao,this.up),this.quaternion.setFromRotationMatrix(Pi),i&&(Pi.extractRotation(i.matrixWorld),us.setFromRotationMatrix(Pi),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jf),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hv),ac.child=t,this.dispatchEvent(ac),ac.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jf),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,t,lv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,cv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}nn.DEFAULT_UP=new U(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new U,Li=new U,lc=new U,Di=new U,ds=new U,ps=new U,Qf=new U,cc=new U,hc=new U,uc=new U,fc=new ye,dc=new ye,pc=new ye;class ei{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),hi.subVectors(t,e),i.cross(hi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){hi.subVectors(i,e),Li.subVectors(n,e),lc.subVectors(t,e);const o=hi.dot(hi),a=hi.dot(Li),l=hi.dot(lc),c=Li.dot(Li),h=Li.dot(lc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const u=1/f,d=(c*l-a*h)*u,g=(o*h-a*l)*u;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return fc.setScalar(0),dc.setScalar(0),pc.setScalar(0),fc.fromBufferAttribute(t,e),dc.fromBufferAttribute(t,n),pc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(fc,s.x),o.addScaledVector(dc,s.y),o.addScaledVector(pc,s.z),o}static isFrontFacing(t,e,n,i){return hi.subVectors(n,e),Li.subVectors(t,e),hi.cross(Li).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hi.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),hi.cross(Li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ei.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return ei.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;ds.subVectors(i,n),ps.subVectors(s,n),cc.subVectors(t,n);const l=ds.dot(cc),c=ps.dot(cc);if(l<=0&&c<=0)return e.copy(n);hc.subVectors(t,i);const h=ds.dot(hc),f=ps.dot(hc);if(h>=0&&f<=h)return e.copy(i);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ds,o);uc.subVectors(t,s);const d=ds.dot(uc),g=ps.dot(uc);if(g>=0&&d<=g)return e.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ps,a);const p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return Qf.subVectors(s,i),a=(f-h)/(f-h+(d-g)),e.copy(i).addScaledVector(Qf,a);const m=1/(p+_+u);return o=_*m,a=u*m,e.copy(n).addScaledVector(ds,o).addScaledVector(ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Bm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function mc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class $t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=jn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ce.workingColorSpace){if(t=$_(t,1),e=un(e,0,1),n=un(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=mc(o,s,t+1/3),this.g=mc(o,s,t),this.b=mc(o,s,t-1/3)}return ce.toWorkingColorSpace(this,i),this}setStyle(t,e=jn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=jn){const n=Bm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=jn){return ce.fromWorkingColorSpace(ln.copy(this),t),Math.round(un(ln.r*255,0,255))*65536+Math.round(un(ln.g*255,0,255))*256+Math.round(un(ln.b*255,0,255))}getHexString(t=jn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(ln.copy(this),e);const n=ln.r,i=ln.g,s=ln.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=jn){ce.fromWorkingColorSpace(ln.copy(this),t);const e=ln.r,n=ln.g,i=ln.b;return t!==jn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(er),this.setHSL(er.h+t,er.s+e,er.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(er),t.getHSL(Ea);const n=jl(er.h,Ea.h,e),i=jl(er.s,Ea.s,e),s=jl(er.l,Ea.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new $t;$t.NAMES=Bm;let uv=0;class Qr extends Ks{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=Js(),this.name="",this.blending=Is,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=sh,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ff,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(n.blending=this.blending),this.side!==vr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rh&&(n.blendSrc=this.blendSrc),this.blendDst!==sh&&(n.blendDst=this.blendDst),this.blendEquation!==Ur&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ff&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class km extends Qr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=ym,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ve=new U,ba=new xt;class si{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Of,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ba.fromBufferAttribute(this,e),ba.applyMatrix3(t),this.setXY(e,ba.x,ba.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ro(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ro(e,this.array)),e}setX(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ro(e,this.array)),e}setY(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ro(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ro(e,this.array)),e}setW(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),n=Tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),n=Tn(n,this.array),i=Tn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),n=Tn(n,this.array),i=Tn(i,this.array),s=Tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Of&&(t.usage=this.usage),t}}class zm extends si{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Hm extends si{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends si{constructor(t,e,n){super(new Float32Array(t),e,n)}}let fv=0;const Kn=new Ce,gc=new nn,ms=new U,On=new Qo,lo=new Qo,Qe=new U;class qe extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Um(t)?Hm:zm)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Kn.makeRotationFromQuaternion(t),this.applyMatrix4(Kn),this}rotateX(t){return Kn.makeRotationX(t),this.applyMatrix4(Kn),this}rotateY(t){return Kn.makeRotationY(t),this.applyMatrix4(Kn),this}rotateZ(t){return Kn.makeRotationZ(t),this.applyMatrix4(Kn),this}translate(t,e,n){return Kn.makeTranslation(t,e,n),this.applyMatrix4(Kn),this}scale(t,e,n){return Kn.makeScale(t,e,n),this.applyMatrix4(Kn),this}lookAt(t){return gc.lookAt(t),gc.updateMatrix(),this.applyMatrix4(gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];On.setFromBufferAttribute(s),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ta);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];lo.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(On.min,lo.min),On.expandByPoint(Qe),Qe.addVectors(On.max,lo.max),On.expandByPoint(Qe)):(On.expandByPoint(lo.min),On.expandByPoint(lo.max))}On.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Qe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Qe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qe.fromBufferAttribute(a,c),l&&(ms.fromBufferAttribute(t,c),Qe.add(ms)),i=Math.max(i,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new U,l[R]=new U;const c=new U,h=new U,f=new U,u=new xt,d=new xt,g=new xt,_=new U,p=new U;function m(R,M,S){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,S),u.fromBufferAttribute(s,R),d.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),h.sub(c),f.sub(c),d.sub(u),g.sub(u);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(C),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(C),a[R].add(_),a[M].add(_),a[S].add(_),l[R].add(p),l[M].add(p),l[S].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let R=0,M=x.length;R<M;++R){const S=x[R],C=S.start,L=S.count;for(let N=C,V=C+L;N<V;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const y=new U,v=new U,A=new U,w=new U;function E(R){A.fromBufferAttribute(i,R),w.copy(A);const M=a[R];y.copy(M),y.sub(A.multiplyScalar(A.dot(M))).normalize(),v.crossVectors(w,M);const C=v.dot(l[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,C)}for(let R=0,M=x.length;R<M;++R){const S=x[R],C=S.start,L=S.count;for(let N=C,V=C+L;N<V;N+=3)E(t.getX(N+0)),E(t.getX(N+1)),E(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new si(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const i=new U,s=new U,o=new U,a=new U,l=new U,c=new U,h=new U,f=new U;if(t)for(let u=0,d=t.count;u<d;u+=3){const g=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let m=0;m<h;m++)u[g++]=c[d++]}return new si(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],f=s[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const td=new Ce,Tr=new Cu,Ta=new ta,ed=new U,wa=new U,Aa=new U,Ca=new U,_c=new U,Ra=new U,nd=new U,Pa=new U;class Ht extends nn{constructor(t=new qe,e=new km){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Ra.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],f=s[l];h!==0&&(_c.fromBufferAttribute(f,t),o?Ra.addScaledVector(_c,h):Ra.addScaledVector(_c.sub(e),h))}e.add(Ra)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(s),Tr.copy(t.ray).recast(t.near),!(Ta.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(Ta,ed)===null||Tr.origin.distanceToSquared(ed)>(t.far-t.near)**2))&&(td.copy(s).invert(),Tr.copy(t.ray).applyMatrix4(td),!(n.boundingBox!==null&&Tr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Tr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=o[p.materialIndex],x=Math.max(p.start,d.start),y=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=x,A=y;v<A;v+=3){const w=a.getX(v),E=a.getX(v+1),R=a.getX(v+2);i=La(this,m,t,n,c,h,f,w,E,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const x=a.getX(p),y=a.getX(p+1),v=a.getX(p+2);i=La(this,o,t,n,c,h,f,x,y,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=o[p.materialIndex],x=Math.max(p.start,d.start),y=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=x,A=y;v<A;v+=3){const w=v,E=v+1,R=v+2;i=La(this,m,t,n,c,h,f,w,E,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const x=p,y=p+1,v=p+2;i=La(this,o,t,n,c,h,f,x,y,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function dv(r,t,e,n,i,s,o,a){let l;if(t.side===Dn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===vr,a),l===null)return null;Pa.copy(a),Pa.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Pa);return c<e.near||c>e.far?null:{distance:c,point:Pa.clone(),object:r}}function La(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,wa),r.getVertexPosition(l,Aa),r.getVertexPosition(c,Ca);const h=dv(r,t,e,n,wa,Aa,Ca,nd);if(h){const f=new U;ei.getBarycoord(nd,wa,Aa,Ca,f),i&&(h.uv=ei.getInterpolatedAttribute(i,a,l,c,f,new xt)),s&&(h.uv1=ei.getInterpolatedAttribute(s,a,l,c,f,new xt)),o&&(h.normal=ei.getInterpolatedAttribute(o,a,l,c,f,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new U,materialIndex:0};ei.getNormal(wa,Aa,Ca,u.normal),h.face=u,h.barycoord=f}return h}class Te extends qe{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(f,2));function g(_,p,m,x,y,v,A,w,E,R,M){const S=v/E,C=A/R,L=v/2,N=A/2,V=w/2,q=E+1,F=R+1;let z=0,H=0;const tt=new U;for(let D=0;D<F;D++){const ht=D*C-N;for(let Ut=0;Ut<q;Ut++){const te=Ut*S-L;tt[_]=te*x,tt[p]=ht*y,tt[m]=V,c.push(tt.x,tt.y,tt.z),tt[_]=0,tt[p]=0,tt[m]=w>0?1:-1,h.push(tt.x,tt.y,tt.z),f.push(Ut/E),f.push(1-D/R),z+=1}}for(let D=0;D<R;D++)for(let ht=0;ht<E;ht++){const Ut=u+ht+q*D,te=u+ht+q*(D+1),Z=u+(ht+1)+q*(D+1),et=u+(ht+1)+q*D;l.push(Ut,te,et),l.push(te,Z,et),H+=6}a.addGroup(d,H,M),d+=H,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function vn(r){const t={};for(let e=0;e<r.length;e++){const n=qs(r[e]);for(const i in n)t[i]=n[i]}return t}function pv(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Gm(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const Vm={clone:qs,merge:vn};var mv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends Qr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mv,this.fragmentShader=gv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qs(t.uniforms),this.uniformsGroups=pv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Wm extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Hi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new U,id=new xt,rd=new xt;class Mn extends Wm{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ol*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vh*2*Math.atan(Math.tan(ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(nr.x,nr.y).multiplyScalar(-t/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(nr.x,nr.y).multiplyScalar(-t/nr.z)}getViewSize(t,e){return this.getViewBounds(t,id,rd),e.subVectors(rd,id)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ol*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gs=-90,_s=1;class _v extends nn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Mn(gs,_s,t,e);i.layers=this.layers,this.add(i);const s=new Mn(gs,_s,t,e);s.layers=this.layers,this.add(s);const o=new Mn(gs,_s,t,e);o.layers=this.layers,this.add(o);const a=new Mn(gs,_s,t,e);a.layers=this.layers,this.add(a);const l=new Mn(gs,_s,t,e);l.layers=this.layers,this.add(l);const c=new Mn(gs,_s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Hi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Xm extends bn{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Vs,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vv extends xr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Xm(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Te(5,5,5),s=new oi({name:"CubemapFromEquirect",uniforms:qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dn,blending:Vi});s.uniforms.tEquirect.value=e;const o=new Ht(i,s),a=e.minFilter;return e.minFilter===kr&&(e.minFilter=Mi),new _v(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const vc=new U,xv=new U,yv=new Jt;class Dr{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=vc.subVectors(n,e).cross(xv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(vc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||yv.getNormalMatrix(t),i=this.coplanarPoint(vc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new ta,Da=new U;class Ru{constructor(t=new Dr,e=new Dr,n=new Dr,i=new Dr,s=new Dr,o=new Dr){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hi){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],f=i[6],u=i[7],d=i[8],g=i[9],_=i[10],p=i[11],m=i[12],x=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-s,u-c,p-d,v-m).normalize(),n[1].setComponents(l+s,u+c,p+d,v+m).normalize(),n[2].setComponents(l+o,u+h,p+g,v+x).normalize(),n[3].setComponents(l-o,u-h,p-g,v-x).normalize(),n[4].setComponents(l-a,u-f,p-_,v-y).normalize(),e===Hi)n[5].setComponents(l+a,u+f,p+_,v+y).normalize();else if(e===yl)n[5].setComponents(a,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(t){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(t.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Da.x=i.normal.x>0?t.max.x:t.min.x,Da.y=i.normal.y>0?t.max.y:t.min.y,Da.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Da)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ym(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Sv(r){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const h=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class ea extends qe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=t/a,u=e/l,d=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const x=m*u-o;for(let y=0;y<c;y++){const v=y*f-s;g.push(v,-x,0),_.push(0,0,1),p.push(y/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const y=x+c*m,v=x+c*(m+1),A=x+1+c*(m+1),w=x+1+c*m;d.push(y,v,w),d.push(v,A,w)}this.setIndex(d),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ea(t.width,t.height,t.widthSegments,t.heightSegments)}}var Mv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ev=`#ifdef USE_ALPHAHASH
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
#endif`,bv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Av=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cv=`#ifdef USE_AOMAP
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
#endif`,Rv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pv=`#ifdef USE_BATCHING
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
#endif`,Lv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Iv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nv=`#ifdef USE_IRIDESCENCE
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
#endif`,Fv=`#ifdef USE_BUMPMAP
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
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xv=`#define PI 3.141592653589793
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
} // validated`,Yv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qv=`vec3 transformedNormal = objectNormal;
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
#endif`,$v=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tx=`#ifdef USE_ENVMAP
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
#endif`,ex=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nx=`#ifdef USE_ENVMAP
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
#endif`,ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
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
#endif`,sx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ox=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ax=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cx=`#ifdef USE_GRADIENTMAP
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
}`,hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ux=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dx=`uniform bool receiveShadow;
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
#endif`,px=`#ifdef USE_ENVMAP
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
#endif`,mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_x=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xx=`PhysicalMaterial material;
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
#endif`,yx=`struct PhysicalMaterial {
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
}`,Sx=`
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
#endif`,Mx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Px=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lx=`#if defined( USE_POINTS_UV )
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
#endif`,Dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ux=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ox=`#ifdef USE_MORPHTARGETS
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
#endif`,Bx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wx=`#ifdef USE_NORMALMAP
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
#endif`,Xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$x=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ty=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ey=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ny=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oy=`float getShadowMask() {
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
}`,ay=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ly=`#ifdef USE_SKINNING
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
#endif`,cy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hy=`#ifdef USE_SKINNING
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
#endif`,uy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,py=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,my=`#ifdef USE_TRANSMISSION
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
#endif`,gy=`#ifdef USE_TRANSMISSION
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
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,My=`uniform sampler2D t2D;
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
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,by=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ay=`#include <common>
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
}`,Cy=`#if DEPTH_PACKING == 3200
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
}`,Ry=`#define DISTANCE
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
}`,Py=`#define DISTANCE
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
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`uniform float scale;
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
}`,Uy=`uniform vec3 diffuse;
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
}`,Ny=`#include <common>
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
}`,Fy=`uniform vec3 diffuse;
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
}`,Oy=`#define LAMBERT
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
}`,By=`#define LAMBERT
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
}`,ky=`#define MATCAP
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
}`,zy=`#define MATCAP
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
}`,Hy=`#define NORMAL
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
}`,Gy=`#define NORMAL
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
}`,Vy=`#define PHONG
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
}`,Wy=`#define PHONG
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
}`,Xy=`#define STANDARD
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
}`,Yy=`#define STANDARD
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
}`,qy=`#define TOON
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
}`,$y=`#define TOON
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
}`,Zy=`uniform float size;
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
}`,Ky=`uniform vec3 diffuse;
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
}`,Jy=`#include <common>
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
}`,jy=`uniform vec3 color;
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
}`,Qy=`uniform float rotation;
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
}`,tS=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Mv,alphahash_pars_fragment:Ev,alphamap_fragment:bv,alphamap_pars_fragment:Tv,alphatest_fragment:wv,alphatest_pars_fragment:Av,aomap_fragment:Cv,aomap_pars_fragment:Rv,batching_pars_vertex:Pv,batching_vertex:Lv,begin_vertex:Dv,beginnormal_vertex:Iv,bsdfs:Uv,iridescence_fragment:Nv,bumpmap_pars_fragment:Fv,clipping_planes_fragment:Ov,clipping_planes_pars_fragment:Bv,clipping_planes_pars_vertex:kv,clipping_planes_vertex:zv,color_fragment:Hv,color_pars_fragment:Gv,color_pars_vertex:Vv,color_vertex:Wv,common:Xv,cube_uv_reflection_fragment:Yv,defaultnormal_vertex:qv,displacementmap_pars_vertex:$v,displacementmap_vertex:Zv,emissivemap_fragment:Kv,emissivemap_pars_fragment:Jv,colorspace_fragment:jv,colorspace_pars_fragment:Qv,envmap_fragment:tx,envmap_common_pars_fragment:ex,envmap_pars_fragment:nx,envmap_pars_vertex:ix,envmap_physical_pars_fragment:px,envmap_vertex:rx,fog_vertex:sx,fog_pars_vertex:ox,fog_fragment:ax,fog_pars_fragment:lx,gradientmap_pars_fragment:cx,lightmap_pars_fragment:hx,lights_lambert_fragment:ux,lights_lambert_pars_fragment:fx,lights_pars_begin:dx,lights_toon_fragment:mx,lights_toon_pars_fragment:gx,lights_phong_fragment:_x,lights_phong_pars_fragment:vx,lights_physical_fragment:xx,lights_physical_pars_fragment:yx,lights_fragment_begin:Sx,lights_fragment_maps:Mx,lights_fragment_end:Ex,logdepthbuf_fragment:bx,logdepthbuf_pars_fragment:Tx,logdepthbuf_pars_vertex:wx,logdepthbuf_vertex:Ax,map_fragment:Cx,map_pars_fragment:Rx,map_particle_fragment:Px,map_particle_pars_fragment:Lx,metalnessmap_fragment:Dx,metalnessmap_pars_fragment:Ix,morphinstance_vertex:Ux,morphcolor_vertex:Nx,morphnormal_vertex:Fx,morphtarget_pars_vertex:Ox,morphtarget_vertex:Bx,normal_fragment_begin:kx,normal_fragment_maps:zx,normal_pars_fragment:Hx,normal_pars_vertex:Gx,normal_vertex:Vx,normalmap_pars_fragment:Wx,clearcoat_normal_fragment_begin:Xx,clearcoat_normal_fragment_maps:Yx,clearcoat_pars_fragment:qx,iridescence_pars_fragment:$x,opaque_fragment:Zx,packing:Kx,premultiplied_alpha_fragment:Jx,project_vertex:jx,dithering_fragment:Qx,dithering_pars_fragment:ty,roughnessmap_fragment:ey,roughnessmap_pars_fragment:ny,shadowmap_pars_fragment:iy,shadowmap_pars_vertex:ry,shadowmap_vertex:sy,shadowmask_pars_fragment:oy,skinbase_vertex:ay,skinning_pars_vertex:ly,skinning_vertex:cy,skinnormal_vertex:hy,specularmap_fragment:uy,specularmap_pars_fragment:fy,tonemapping_fragment:dy,tonemapping_pars_fragment:py,transmission_fragment:my,transmission_pars_fragment:gy,uv_pars_fragment:_y,uv_pars_vertex:vy,uv_vertex:xy,worldpos_vertex:yy,background_vert:Sy,background_frag:My,backgroundCube_vert:Ey,backgroundCube_frag:by,cube_vert:Ty,cube_frag:wy,depth_vert:Ay,depth_frag:Cy,distanceRGBA_vert:Ry,distanceRGBA_frag:Py,equirect_vert:Ly,equirect_frag:Dy,linedashed_vert:Iy,linedashed_frag:Uy,meshbasic_vert:Ny,meshbasic_frag:Fy,meshlambert_vert:Oy,meshlambert_frag:By,meshmatcap_vert:ky,meshmatcap_frag:zy,meshnormal_vert:Hy,meshnormal_frag:Gy,meshphong_vert:Vy,meshphong_frag:Wy,meshphysical_vert:Xy,meshphysical_frag:Yy,meshtoon_vert:qy,meshtoon_frag:$y,points_vert:Zy,points_frag:Ky,shadow_vert:Jy,shadow_frag:jy,sprite_vert:Qy,sprite_frag:tS},gt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},vi={basic:{uniforms:vn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:vn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new $t(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:vn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:vn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:vn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new $t(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:vn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:vn([gt.points,gt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:vn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:vn([gt.common,gt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:vn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:vn([gt.sprite,gt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:vn([gt.common,gt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:vn([gt.lights,gt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};vi.physical={uniforms:vn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Ia={r:0,b:0,g:0},Ar=new Ti,eS=new Ce;function nS(r,t,e,n,i,s,o){const a=new $t(0);let l=s===!0?0:1,c,h,f=null,u=0,d=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function _(x){let y=!1;const v=g(x);v===null?m(a,l):v&&v.isColor&&(m(v,1),y=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(x,y){const v=g(y);v&&(v.isCubeTexture||v.mapping===Ll)?(h===void 0&&(h=new Ht(new Te(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:qs(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ar.copy(y.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(eS.makeRotationFromEuler(Ar)),h.material.toneMapped=ce.getTransfer(v.colorSpace)!==xe,(f!==v||u!==v.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,f=v,u=v.version,d=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ht(new ea(2,2),new oi({name:"BackgroundMaterial",uniforms:qs(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ce.getTransfer(v.colorSpace)!==xe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||u!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=v,u=v.version,d=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,y){x.getRGB(Ia,Gm(r)),n.buffers.color.setClear(Ia.r,Ia.g,Ia.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(a,l)},render:_,addToRenderList:p}}function iS(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,o=!1;function a(S,C,L,N,V){let q=!1;const F=f(N,L,C);s!==F&&(s=F,c(s.object)),q=d(S,N,L,V),q&&g(S,N,L,V),V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(S,C,L,N),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function f(S,C,L){const N=L.wireframe===!0;let V=n[S.id];V===void 0&&(V={},n[S.id]=V);let q=V[C.id];q===void 0&&(q={},V[C.id]=q);let F=q[N];return F===void 0&&(F=u(l()),q[N]=F),F}function u(S){const C=[],L=[],N=[];for(let V=0;V<e;V++)C[V]=0,L[V]=0,N[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:N,object:S,attributes:{},index:null}}function d(S,C,L,N){const V=s.attributes,q=C.attributes;let F=0;const z=L.getAttributes();for(const H in z)if(z[H].location>=0){const D=V[H];let ht=q[H];if(ht===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ht=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ht=S.instanceColor)),D===void 0||D.attribute!==ht||ht&&D.data!==ht.data)return!0;F++}return s.attributesNum!==F||s.index!==N}function g(S,C,L,N){const V={},q=C.attributes;let F=0;const z=L.getAttributes();for(const H in z)if(z[H].location>=0){let D=q[H];D===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(D=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(D=S.instanceColor));const ht={};ht.attribute=D,D&&D.data&&(ht.data=D.data),V[H]=ht,F++}s.attributes=V,s.attributesNum=F,s.index=N}function _(){const S=s.newAttributes;for(let C=0,L=S.length;C<L;C++)S[C]=0}function p(S){m(S,0)}function m(S,C){const L=s.newAttributes,N=s.enabledAttributes,V=s.attributeDivisors;L[S]=1,N[S]===0&&(r.enableVertexAttribArray(S),N[S]=1),V[S]!==C&&(r.vertexAttribDivisor(S,C),V[S]=C)}function x(){const S=s.newAttributes,C=s.enabledAttributes;for(let L=0,N=C.length;L<N;L++)C[L]!==S[L]&&(r.disableVertexAttribArray(L),C[L]=0)}function y(S,C,L,N,V,q,F){F===!0?r.vertexAttribIPointer(S,C,L,V,q):r.vertexAttribPointer(S,C,L,N,V,q)}function v(S,C,L,N){_();const V=N.attributes,q=L.getAttributes(),F=C.defaultAttributeValues;for(const z in q){const H=q[z];if(H.location>=0){let tt=V[z];if(tt===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(tt=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(tt=S.instanceColor)),tt!==void 0){const D=tt.normalized,ht=tt.itemSize,Ut=t.get(tt);if(Ut===void 0)continue;const te=Ut.buffer,Z=Ut.type,et=Ut.bytesPerElement,_t=Z===r.INT||Z===r.UNSIGNED_INT||tt.gpuType===Mu;if(tt.isInterleavedBufferAttribute){const nt=tt.data,bt=nt.stride,Rt=tt.offset;if(nt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<H.locationSize;Vt++)m(H.location+Vt,nt.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Vt=0;Vt<H.locationSize;Vt++)p(H.location+Vt);r.bindBuffer(r.ARRAY_BUFFER,te);for(let Vt=0;Vt<H.locationSize;Vt++)y(H.location+Vt,ht/H.locationSize,Z,D,bt*et,(Rt+ht/H.locationSize*Vt)*et,_t)}else{if(tt.isInstancedBufferAttribute){for(let nt=0;nt<H.locationSize;nt++)m(H.location+nt,tt.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let nt=0;nt<H.locationSize;nt++)p(H.location+nt);r.bindBuffer(r.ARRAY_BUFFER,te);for(let nt=0;nt<H.locationSize;nt++)y(H.location+nt,ht/H.locationSize,Z,D,ht*et,ht/H.locationSize*nt*et,_t)}}else if(F!==void 0){const D=F[z];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(H.location,D);break;case 3:r.vertexAttrib3fv(H.location,D);break;case 4:r.vertexAttrib4fv(H.location,D);break;default:r.vertexAttrib1fv(H.location,D)}}}}x()}function A(){R();for(const S in n){const C=n[S];for(const L in C){const N=C[L];for(const V in N)h(N[V].object),delete N[V];delete C[L]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const C=n[S.id];for(const L in C){const N=C[L];for(const V in N)h(N[V].object),delete N[V];delete C[L]}delete n[S.id]}function E(S){for(const C in n){const L=n[C];if(L[S.id]===void 0)continue;const N=L[S.id];for(const V in N)h(N[V].object),delete N[V];delete L[S.id]}}function R(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function rS(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(r.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];e.update(d,n,1)}function l(c,h,f,u){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sS(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==fi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const R=E===$s&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==qi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==zi&&!R)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:A,maxSamples:w}}function oS(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Dr,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=r.get(f);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const x=s?0:n,y=x*4;let v=m.clippingState||null;l.value=v,v=h(g,u,y,d);for(let A=0;A!==y;++A)v[A]=e[A];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,v=d;y!==_;++y,v+=4)o.copy(f[y]).applyMatrix4(x,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function aS(r){let t=new WeakMap;function e(o,a){return a===dh?o.mapping=Vs:a===ph&&(o.mapping=Ws),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===dh||a===ph)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new vv(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Pu extends Wm{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const bs=4,sd=[.125,.215,.35,.446,.526,.582],Nr=20,xc=new Pu,od=new $t;let yc=null,Sc=0,Mc=0,Ec=!1;const Ir=(1+Math.sqrt(5))/2,vs=1/Ir,ad=[new U(-Ir,vs,0),new U(Ir,vs,0),new U(-vs,0,Ir),new U(vs,0,Ir),new U(0,Ir,-vs),new U(0,Ir,vs),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class ld{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){yc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yc,Sc,Mc),this._renderer.xr.enabled=Ec,t.scissorTest=!1,Ua(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vs||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:$s,format:fi,colorSpace:Zs,depthBuffer:!1},i=cd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cd(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lS(s)),this._blurMaterial=cS(s,t,e)}return i}_compileMaterial(t){const e=new Ht(this._lodPlanes[0],t);this._renderer.compile(e,xc)}_sceneToCubeUV(t,e,n,i){const a=new Mn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(od),h.toneMapping=dr,h.autoClear=!1;const d=new km({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),g=new Ht(new Te,d);let _=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(od),_=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const y=this._cubeSize;Ua(i,x*y,m>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Vs||t.mapping===Ws;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hd());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ua(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,xc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ad[(i-s-1)%ad.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Ht(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Nr-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):Nr;p>Nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Nr}`);const m=[];let x=0;for(let E=0;E<Nr;++E){const R=E/_,M=Math.exp(-R*R/2);m.push(M),E===0?x+=M:E<p&&(x+=2*M)}for(let E=0;E<m.length;E++)m[E]=m[E]/x;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const v=this._sizeLods[i],A=3*v*(i>y-bs?i-y+bs:0),w=4*(this._cubeSize-v);Ua(e,A,w,3*v,2*v),l.setRenderTarget(e),l.render(f,xc)}}function lS(r){const t=[],e=[],n=[];let i=r;const s=r-bs+1+sd.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-bs?l=sd[o-r+bs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,_=3,p=2,m=1,x=new Float32Array(_*g*d),y=new Float32Array(p*g*d),v=new Float32Array(m*g*d);for(let w=0;w<d;w++){const E=w%3*2/3-1,R=w>2?0:-1,M=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];x.set(M,_*g*w),y.set(u,p*g*w);const S=[w,w,w,w,w,w];v.set(S,m*g*w)}const A=new qe;A.setAttribute("position",new si(x,_)),A.setAttribute("uv",new si(y,p)),A.setAttribute("faceIndex",new si(v,m)),t.push(A),i>bs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function cd(r,t,e){const n=new xr(r,t,e);return n.texture.mapping=Ll,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ua(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function cS(r,t,e){const n=new Float32Array(Nr),i=new U(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function hd(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function ud(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Lu(){return`

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
	`}function hS(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===dh||l===ph,h=l===Vs||l===Ws;if(c||h){let f=t.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new ld(r)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new ld(r)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function uS(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&xo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function fS(r,t,e,n){const i={},s=new WeakMap;function o(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}u.removeEventListener("dispose",o),delete i[u.id];const d=s.get(u);d&&(t.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const g in u)t.update(u[g],r.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],r.ARRAY_BUFFER)}}function c(f){const u=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let y=0,v=x.length;y<v;y+=3){const A=x[y+0],w=x[y+1],E=x[y+2];u.push(A,w,w,E,E,A)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const A=y+0,w=y+1,E=y+2;u.push(A,w,w,E,E,A)}}else return;const p=new(Um(u)?Hm:zm)(u,1);p.version=_;const m=s.get(f);m&&t.remove(m),s.set(f,p)}function h(f){const u=s.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function dS(r,t,e){let n;function i(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,d){r.drawElements(n,d,s,u*o),e.update(d,n,1)}function c(u,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,u*o,g),e.update(d,n,g))}function h(u,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,u,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function f(u,d,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/o,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,u,0,_,0,g);let m=0;for(let x=0;x<g;x++)m+=d[x]*_[x];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function pS(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function mS(r,t,e){const n=new WeakMap,i=new ye;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==f){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),p===!0&&(v=3);let A=a.attributes.position.count*v,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const E=new Float32Array(A*w*4*f),R=new Fm(E,A,w,f);R.type=zi,R.needsUpdate=!0;const M=v*4;for(let C=0;C<f;C++){const L=m[C],N=x[C],V=y[C],q=A*w*4*C;for(let F=0;F<L.count;F++){const z=F*M;g===!0&&(i.fromBufferAttribute(L,F),E[q+z+0]=i.x,E[q+z+1]=i.y,E[q+z+2]=i.z,E[q+z+3]=0),_===!0&&(i.fromBufferAttribute(N,F),E[q+z+4]=i.x,E[q+z+5]=i.y,E[q+z+6]=i.z,E[q+z+7]=0),p===!0&&(i.fromBufferAttribute(V,F),E[q+z+8]=i.x,E[q+z+9]=i.y,E[q+z+10]=i.z,E[q+z+11]=V.itemSize===4?i.w:1)}}u={count:f,texture:R,size:new xt(A,w)},n.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function gS(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Du extends bn{constructor(t,e,n,i,s,o,a,l,c,h=Us){if(h!==Us&&h!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Us&&(n=Kr),n===void 0&&h===Ys&&(n=Xs),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:di,this.minFilter=l!==void 0?l:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const qm=new bn,fd=new Du(1,1),$m=new Fm,Zm=new iv,Km=new Xm,dd=[],pd=[],md=new Float32Array(16),gd=new Float32Array(9),_d=new Float32Array(4);function js(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=dd[i];if(s===void 0&&(s=new Float32Array(i),dd[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Je(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function je(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Il(r,t){let e=pd[t];e===void 0&&(e=new Int32Array(t),pd[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function _S(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function vS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;r.uniform2fv(this.addr,t),je(e,t)}}function xS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;r.uniform3fv(this.addr,t),je(e,t)}}function yS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;r.uniform4fv(this.addr,t),je(e,t)}}function SS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(Je(e,n))return;_d.set(n),r.uniformMatrix2fv(this.addr,!1,_d),je(e,n)}}function MS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(Je(e,n))return;gd.set(n),r.uniformMatrix3fv(this.addr,!1,gd),je(e,n)}}function ES(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(Je(e,n))return;md.set(n),r.uniformMatrix4fv(this.addr,!1,md),je(e,n)}}function bS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function TS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;r.uniform2iv(this.addr,t),je(e,t)}}function wS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;r.uniform3iv(this.addr,t),je(e,t)}}function AS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;r.uniform4iv(this.addr,t),je(e,t)}}function CS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function RS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;r.uniform2uiv(this.addr,t),je(e,t)}}function PS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;r.uniform3uiv(this.addr,t),je(e,t)}}function LS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;r.uniform4uiv(this.addr,t),je(e,t)}}function DS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(fd.compareFunction=Im,s=fd):s=qm,e.setTexture2D(t||s,i)}function IS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Zm,i)}function US(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Km,i)}function NS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||$m,i)}function FS(r){switch(r){case 5126:return _S;case 35664:return vS;case 35665:return xS;case 35666:return yS;case 35674:return SS;case 35675:return MS;case 35676:return ES;case 5124:case 35670:return bS;case 35667:case 35671:return TS;case 35668:case 35672:return wS;case 35669:case 35673:return AS;case 5125:return CS;case 36294:return RS;case 36295:return PS;case 36296:return LS;case 35678:case 36198:case 36298:case 36306:case 35682:return DS;case 35679:case 36299:case 36307:return IS;case 35680:case 36300:case 36308:case 36293:return US;case 36289:case 36303:case 36311:case 36292:return NS}}function OS(r,t){r.uniform1fv(this.addr,t)}function BS(r,t){const e=js(t,this.size,2);r.uniform2fv(this.addr,e)}function kS(r,t){const e=js(t,this.size,3);r.uniform3fv(this.addr,e)}function zS(r,t){const e=js(t,this.size,4);r.uniform4fv(this.addr,e)}function HS(r,t){const e=js(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function GS(r,t){const e=js(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function VS(r,t){const e=js(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function WS(r,t){r.uniform1iv(this.addr,t)}function XS(r,t){r.uniform2iv(this.addr,t)}function YS(r,t){r.uniform3iv(this.addr,t)}function qS(r,t){r.uniform4iv(this.addr,t)}function $S(r,t){r.uniform1uiv(this.addr,t)}function ZS(r,t){r.uniform2uiv(this.addr,t)}function KS(r,t){r.uniform3uiv(this.addr,t)}function JS(r,t){r.uniform4uiv(this.addr,t)}function jS(r,t,e){const n=this.cache,i=t.length,s=Il(e,i);Je(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||qm,s[o])}function QS(r,t,e){const n=this.cache,i=t.length,s=Il(e,i);Je(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Zm,s[o])}function tM(r,t,e){const n=this.cache,i=t.length,s=Il(e,i);Je(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Km,s[o])}function eM(r,t,e){const n=this.cache,i=t.length,s=Il(e,i);Je(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||$m,s[o])}function nM(r){switch(r){case 5126:return OS;case 35664:return BS;case 35665:return kS;case 35666:return zS;case 35674:return HS;case 35675:return GS;case 35676:return VS;case 5124:case 35670:return WS;case 35667:case 35671:return XS;case 35668:case 35672:return YS;case 35669:case 35673:return qS;case 5125:return $S;case 36294:return ZS;case 36295:return KS;case 36296:return JS;case 35678:case 36198:case 36298:case 36306:case 35682:return jS;case 35679:case 36299:case 36307:return QS;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return eM}}class iM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=FS(e.type)}}class rM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nM(e.type)}}class sM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const bc=/(\w+)(\])?(\[|\.)?/g;function vd(r,t){r.seq.push(t),r.map[t.id]=t}function oM(r,t,e){const n=r.name,i=n.length;for(bc.lastIndex=0;;){const s=bc.exec(n),o=bc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){vd(e,c===void 0?new iM(a,r,t):new rM(a,r,t));break}else{let f=e.map[a];f===void 0&&(f=new sM(a),vd(e,f)),e=f}}}class al{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);oM(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function xd(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const aM=37297;let lM=0;function cM(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const yd=new Jt;function hM(r){ce._getMatrix(yd,ce.workingColorSpace,r);const t=`mat3( ${yd.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(r)){case Dl:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Sd(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+cM(r.getShaderSource(t),o)}else return i}function uM(r,t){const e=hM(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function fM(r,t){let e;switch(t){case P_:e="Linear";break;case L_:e="Reinhard";break;case D_:e="Cineon";break;case I_:e="ACESFilmic";break;case N_:e="AgX";break;case F_:e="Neutral";break;case U_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Na=new U;function dM(){ce.getLuminanceCoefficients(Na);const r=Na.x.toFixed(4),t=Na.y.toFixed(4),e=Na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function mM(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gM(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function yo(r){return r!==""}function Md(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ed(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _M=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(r){return r.replace(_M,xM)}const vM=new Map;function xM(r,t){let e=jt[t];if(e===void 0){const n=vM.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wh(e)}const yM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bd(r){return r.replace(yM,SM)}function SM(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Td(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function MM(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===xm?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===c_?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ii&&(t="SHADOWMAP_TYPE_VSM"),t}function EM(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Vs:case Ws:t="ENVMAP_TYPE_CUBE";break;case Ll:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bM(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ws:t="ENVMAP_MODE_REFRACTION";break}return t}function TM(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ym:t="ENVMAP_BLENDING_MULTIPLY";break;case C_:t="ENVMAP_BLENDING_MIX";break;case R_:t="ENVMAP_BLENDING_ADD";break}return t}function wM(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function AM(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=MM(e),c=EM(e),h=bM(e),f=TM(e),u=wM(e),d=pM(e),g=mM(s),_=i.createProgram();let p,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yo).join(`
`),m.length>0&&(m+=`
`)):(p=[Td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),m=[Td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==dr?"#define TONE_MAPPING":"",e.toneMapping!==dr?jt.tonemapping_pars_fragment:"",e.toneMapping!==dr?fM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,uM("linearToOutputTexel",e.outputColorSpace),dM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yo).join(`
`)),o=Wh(o),o=Md(o,e),o=Ed(o,e),a=Wh(a),a=Md(a,e),a=Ed(a,e),o=bd(o),a=bd(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Bf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=x+p+o,v=x+m+a,A=xd(i,i.VERTEX_SHADER,y),w=xd(i,i.FRAGMENT_SHADER,v);i.attachShader(_,A),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(C){if(r.debug.checkShaderErrors){const L=i.getProgramInfoLog(_).trim(),N=i.getShaderInfoLog(A).trim(),V=i.getShaderInfoLog(w).trim();let q=!0,F=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,w);else{const z=Sd(i,A,"vertex"),H=Sd(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+z+`
`+H)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(N===""||V==="")&&(F=!1);F&&(C.diagnostics={runnable:q,programLog:L,vertexShader:{log:N,prefix:p},fragmentShader:{log:V,prefix:m}})}i.deleteShader(A),i.deleteShader(w),R=new al(i,_),M=gM(i,_)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,aM)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let CM=0;class RM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new PM(t),e.set(t,n)),n}}class PM{constructor(t){this.id=CM++,this.code=t,this.usedTimes=0}}function LM(r,t,e,n,i,s,o){const a=new Om,l=new RM,c=new Set,h=[],f=i.logarithmicDepthBuffer,u=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,S,C,L,N){const V=L.fog,q=N.geometry,F=M.isMeshStandardMaterial?L.environment:null,z=(M.isMeshStandardMaterial?e:t).get(M.envMap||F),H=z&&z.mapping===Ll?z.image.height:null,tt=g[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const D=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ht=D!==void 0?D.length:0;let Ut=0;q.morphAttributes.position!==void 0&&(Ut=1),q.morphAttributes.normal!==void 0&&(Ut=2),q.morphAttributes.color!==void 0&&(Ut=3);let te,Z,et,_t;if(tt){const vt=vi[tt];te=vt.vertexShader,Z=vt.fragmentShader}else te=M.vertexShader,Z=M.fragmentShader,l.update(M),et=l.getVertexShaderID(M),_t=l.getFragmentShaderID(M);const nt=r.getRenderTarget(),bt=r.state.buffers.depth.getReversed(),Rt=N.isInstancedMesh===!0,Vt=N.isBatchedMesh===!0,ee=!!M.map,Ft=!!M.matcap,Dt=!!z,O=!!M.aoMap,Se=!!M.lightMap,Bt=!!M.bumpMap,G=!!M.normalMap,Tt=!!M.displacementMap,oe=!!M.emissiveMap,Pt=!!M.metalnessMap,P=!!M.roughnessMap,b=M.anisotropy>0,X=M.clearcoat>0,Q=M.dispersion>0,j=M.iridescence>0,K=M.sheen>0,ut=M.transmission>0,at=b&&!!M.anisotropyMap,pt=X&&!!M.clearcoatMap,Yt=X&&!!M.clearcoatNormalMap,it=X&&!!M.clearcoatRoughnessMap,ot=j&&!!M.iridescenceMap,Nt=j&&!!M.iridescenceThicknessMap,It=K&&!!M.sheenColorMap,yt=K&&!!M.sheenRoughnessMap,Zt=!!M.specularMap,Ot=!!M.specularColorMap,le=!!M.specularIntensityMap,I=ut&&!!M.transmissionMap,ct=ut&&!!M.thicknessMap,$=!!M.gradientMap,J=!!M.alphaMap,lt=M.alphaTest>0,ft=!!M.alphaHash,kt=!!M.extensions;let he=dr;M.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(he=r.toneMapping);const Oe={shaderID:tt,shaderType:M.type,shaderName:M.name,vertexShader:te,fragmentShader:Z,defines:M.defines,customVertexShaderID:et,customFragmentShaderID:_t,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Vt,batchingColor:Vt&&N._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&N.instanceColor!==null,instancingMorph:Rt&&N.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:nt===null?r.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Zs,alphaToCoverage:!!M.alphaToCoverage,map:ee,matcap:Ft,envMap:Dt,envMapMode:Dt&&z.mapping,envMapCubeUVHeight:H,aoMap:O,lightMap:Se,bumpMap:Bt,normalMap:G,displacementMap:u&&Tt,emissiveMap:oe,normalMapObjectSpace:G&&M.normalMapType===z_,normalMapTangentSpace:G&&M.normalMapType===Dm,metalnessMap:Pt,roughnessMap:P,anisotropy:b,anisotropyMap:at,clearcoat:X,clearcoatMap:pt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:it,dispersion:Q,iridescence:j,iridescenceMap:ot,iridescenceThicknessMap:Nt,sheen:K,sheenColorMap:It,sheenRoughnessMap:yt,specularMap:Zt,specularColorMap:Ot,specularIntensityMap:le,transmission:ut,transmissionMap:I,thicknessMap:ct,gradientMap:$,opaque:M.transparent===!1&&M.blending===Is&&M.alphaToCoverage===!1,alphaMap:J,alphaTest:lt,alphaHash:ft,combine:M.combine,mapUv:ee&&_(M.map.channel),aoMapUv:O&&_(M.aoMap.channel),lightMapUv:Se&&_(M.lightMap.channel),bumpMapUv:Bt&&_(M.bumpMap.channel),normalMapUv:G&&_(M.normalMap.channel),displacementMapUv:Tt&&_(M.displacementMap.channel),emissiveMapUv:oe&&_(M.emissiveMap.channel),metalnessMapUv:Pt&&_(M.metalnessMap.channel),roughnessMapUv:P&&_(M.roughnessMap.channel),anisotropyMapUv:at&&_(M.anisotropyMap.channel),clearcoatMapUv:pt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:It&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:yt&&_(M.sheenRoughnessMap.channel),specularMapUv:Zt&&_(M.specularMap.channel),specularColorMapUv:Ot&&_(M.specularColorMap.channel),specularIntensityMapUv:le&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:ct&&_(M.thicknessMap.channel),alphaMapUv:J&&_(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(G||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!q.attributes.uv&&(ee||J),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:bt,skinning:N.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Ut,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:he,decodeVideoTexture:ee&&M.map.isVideoTexture===!0&&ce.getTransfer(M.map.colorSpace)===xe,decodeVideoTextureEmissive:oe&&M.emissiveMap.isVideoTexture===!0&&ce.getTransfer(M.emissiveMap.colorSpace)===xe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Oi,flipSided:M.side===Dn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:kt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&M.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function m(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)S.push(C),S.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(x(S,M),y(S,M),S.push(r.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function x(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const S=g[M.type];let C;if(S){const L=vi[S];C=Vm.clone(L.uniforms)}else C=M.uniforms;return C}function A(M,S){let C;for(let L=0,N=h.length;L<N;L++){const V=h[L];if(V.cacheKey===S){C=V,++C.usedTimes;break}}return C===void 0&&(C=new AM(r,S,M,s),h.push(C)),C}function w(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function E(M){l.remove(M)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:A,releaseProgram:w,releaseShaderCache:E,programs:h,dispose:R}}function DM(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function IM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function wd(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ad(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(f,u,d,g,_,p){let m=r[t];return m===void 0?(m={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},r[t]=m):(m.id=f.id,m.object=f,m.geometry=u,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),t++,m}function a(f,u,d,g,_,p){const m=o(f,u,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function l(f,u,d,g,_,p){const m=o(f,u,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function c(f,u){e.length>1&&e.sort(f||IM),n.length>1&&n.sort(u||wd),i.length>1&&i.sort(u||wd)}function h(){for(let f=t,u=r.length;f<u;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function UM(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Ad,r.set(n,[o])):i>=s.length?(o=new Ad,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function NM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new $t};break;case"SpotLight":e={position:new U,direction:new U,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new U,halfWidth:new U,halfHeight:new U};break}return r[t.id]=e,e}}}function FM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let OM=0;function BM(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function kM(r){const t=new NM,e=FM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,s=new Ce,o=new Ce;function a(c){let h=0,f=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,x=0,y=0,v=0,A=0,w=0,E=0;c.sort(BM);for(let M=0,S=c.length;M<S;M++){const C=c[M],L=C.color,N=C.intensity,V=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=L.r*N,f+=L.g*N,u+=L.b*N;else if(C.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(C.sh.coefficients[F],N);E++}else if(C.isDirectionalLight){const F=t.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const z=C.shadow,H=e.get(C);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=C.shadow.matrix,x++}n.directional[d]=F,d++}else if(C.isSpotLight){const F=t.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(L).multiplyScalar(N),F.distance=V,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,n.spot[_]=F;const z=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,z.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[_]=z.matrix,C.castShadow){const H=e.get(C);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=q,v++}_++}else if(C.isRectAreaLight){const F=t.get(C);F.color.copy(L).multiplyScalar(N),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=F,p++}else if(C.isPointLight){const F=t.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),F.distance=C.distance,F.decay=C.decay,C.castShadow){const z=C.shadow,H=e.get(C);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,H.shadowCameraNear=z.camera.near,H.shadowCameraFar=z.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=C.shadow.matrix,y++}n.point[g]=F,g++}else if(C.isHemisphereLight){const F=t.get(C);F.skyColor.copy(C.color).multiplyScalar(N),F.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[m]=F,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==p||R.hemiLength!==m||R.numDirectionalShadows!==x||R.numPointShadows!==y||R.numSpotShadows!==v||R.numSpotMaps!==A||R.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,R.directionalLength=d,R.pointLength=g,R.spotLength=_,R.rectAreaLength=p,R.hemiLength=m,R.numDirectionalShadows=x,R.numPointShadows=y,R.numSpotShadows=v,R.numSpotMaps=A,R.numLightProbes=E,n.version=OM++)}function l(c,h){let f=0,u=0,d=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const y=c[m];if(y.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),f++}else if(y.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),d++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),o.identity(),s.copy(y.matrixWorld),s.premultiply(p),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),u++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function Cd(r){const t=new kM(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function zM(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Cd(r),t.set(i,[a])):s>=o.length?(a=new Cd(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class HM extends Qr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=B_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class GM extends Qr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const VM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WM=`uniform sampler2D shadow_pass;
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
}`;function XM(r,t,e){let n=new Ru;const i=new xt,s=new xt,o=new ye,a=new HM({depthPacking:k_}),l=new GM,c={},h=e.maxTextureSize,f={[vr]:Dn,[Dn]:vr,[Oi]:Oi},u=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:VM,fragmentShader:WM}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new qe;g.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ht(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xm;let m=this.type;this.render=function(w,E,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const M=r.getRenderTarget(),S=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),L=r.state;L.setBlending(Vi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const N=m!==Ii&&this.type===Ii,V=m===Ii&&this.type!==Ii;for(let q=0,F=w.length;q<F;q++){const z=w[q],H=z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const tt=H.getFrameExtents();if(i.multiply(tt),s.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/tt.x),i.x=s.x*tt.x,H.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/tt.y),i.y=s.y*tt.y,H.mapSize.y=s.y)),H.map===null||N===!0||V===!0){const ht=this.type!==Ii?{minFilter:di,magFilter:di}:{};H.map!==null&&H.map.dispose(),H.map=new xr(i.x,i.y,ht),H.map.texture.name=z.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const D=H.getViewportCount();for(let ht=0;ht<D;ht++){const Ut=H.getViewport(ht);o.set(s.x*Ut.x,s.y*Ut.y,s.x*Ut.z,s.y*Ut.w),L.viewport(o),H.updateMatrices(z,ht),n=H.getFrustum(),v(E,R,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===Ii&&x(H,R),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(M,S,C)};function x(w,E){const R=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new xr(i.x,i.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,R,u,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,R,d,_,null)}function y(w,E,R,M){let S=null;const C=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)S=C;else if(S=R.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const L=S.uuid,N=E.uuid;let V=c[L];V===void 0&&(V={},c[L]=V);let q=V[N];q===void 0&&(q=S.clone(),V[N]=q,E.addEventListener("dispose",A)),S=q}if(S.visible=E.visible,S.wireframe=E.wireframe,M===Ii?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:f[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const L=r.properties.get(S);L.light=R}return S}function v(w,E,R,M,S){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Ii)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const N=t.update(w),V=w.material;if(Array.isArray(V)){const q=N.groups;for(let F=0,z=q.length;F<z;F++){const H=q[F],tt=V[H.materialIndex];if(tt&&tt.visible){const D=y(w,tt,M,S);w.onBeforeShadow(r,w,E,R,N,D,H),r.renderBufferDirect(R,null,N,D,w,H),w.onAfterShadow(r,w,E,R,N,D,H)}}}else if(V.visible){const q=y(w,V,M,S);w.onBeforeShadow(r,w,E,R,N,q,null),r.renderBufferDirect(R,null,N,q,w,null),w.onAfterShadow(r,w,E,R,N,q,null)}}const L=w.children;for(let N=0,V=L.length;N<V;N++)v(L[N],E,R,M,S)}function A(w){w.target.removeEventListener("dispose",A);for(const R in c){const M=c[R],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const YM={[oh]:ah,[lh]:uh,[ch]:fh,[Gs]:hh,[ah]:oh,[uh]:lh,[fh]:ch,[hh]:Gs};function qM(r,t){function e(){let I=!1;const ct=new ye;let $=null;const J=new ye(0,0,0,0);return{setMask:function(lt){$!==lt&&!I&&(r.colorMask(lt,lt,lt,lt),$=lt)},setLocked:function(lt){I=lt},setClear:function(lt,ft,kt,he,Oe){Oe===!0&&(lt*=he,ft*=he,kt*=he),ct.set(lt,ft,kt,he),J.equals(ct)===!1&&(r.clearColor(lt,ft,kt,he),J.copy(ct))},reset:function(){I=!1,$=null,J.set(-1,0,0,0)}}}function n(){let I=!1,ct=!1,$=null,J=null,lt=null;return{setReversed:function(ft){if(ct!==ft){const kt=t.get("EXT_clip_control");ct?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);const he=lt;lt=null,this.setClear(he)}ct=ft},getReversed:function(){return ct},setTest:function(ft){ft?nt(r.DEPTH_TEST):bt(r.DEPTH_TEST)},setMask:function(ft){$!==ft&&!I&&(r.depthMask(ft),$=ft)},setFunc:function(ft){if(ct&&(ft=YM[ft]),J!==ft){switch(ft){case oh:r.depthFunc(r.NEVER);break;case ah:r.depthFunc(r.ALWAYS);break;case lh:r.depthFunc(r.LESS);break;case Gs:r.depthFunc(r.LEQUAL);break;case ch:r.depthFunc(r.EQUAL);break;case hh:r.depthFunc(r.GEQUAL);break;case uh:r.depthFunc(r.GREATER);break;case fh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=ft}},setLocked:function(ft){I=ft},setClear:function(ft){lt!==ft&&(ct&&(ft=1-ft),r.clearDepth(ft),lt=ft)},reset:function(){I=!1,$=null,J=null,lt=null,ct=!1}}}function i(){let I=!1,ct=null,$=null,J=null,lt=null,ft=null,kt=null,he=null,Oe=null;return{setTest:function(vt){I||(vt?nt(r.STENCIL_TEST):bt(r.STENCIL_TEST))},setMask:function(vt){ct!==vt&&!I&&(r.stencilMask(vt),ct=vt)},setFunc:function(vt,wt,Kt){($!==vt||J!==wt||lt!==Kt)&&(r.stencilFunc(vt,wt,Kt),$=vt,J=wt,lt=Kt)},setOp:function(vt,wt,Kt){(ft!==vt||kt!==wt||he!==Kt)&&(r.stencilOp(vt,wt,Kt),ft=vt,kt=wt,he=Kt)},setLocked:function(vt){I=vt},setClear:function(vt){Oe!==vt&&(r.clearStencil(vt),Oe=vt)},reset:function(){I=!1,ct=null,$=null,J=null,lt=null,ft=null,kt=null,he=null,Oe=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},f={},u=new WeakMap,d=[],g=null,_=!1,p=null,m=null,x=null,y=null,v=null,A=null,w=null,E=new $t(0,0,0),R=0,M=!1,S=null,C=null,L=null,N=null,V=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,z=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(H)[1]),F=z>=1):H.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),F=z>=2);let tt=null,D={};const ht=r.getParameter(r.SCISSOR_BOX),Ut=r.getParameter(r.VIEWPORT),te=new ye().fromArray(ht),Z=new ye().fromArray(Ut);function et(I,ct,$,J){const lt=new Uint8Array(4),ft=r.createTexture();r.bindTexture(I,ft),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let kt=0;kt<$;kt++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(ct,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,lt):r.texImage2D(ct+kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,lt);return ft}const _t={};_t[r.TEXTURE_2D]=et(r.TEXTURE_2D,r.TEXTURE_2D,1),_t[r.TEXTURE_CUBE_MAP]=et(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[r.TEXTURE_2D_ARRAY]=et(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_t[r.TEXTURE_3D]=et(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(r.DEPTH_TEST),o.setFunc(Gs),Bt(!1),G(Df),nt(r.CULL_FACE),O(Vi);function nt(I){h[I]!==!0&&(r.enable(I),h[I]=!0)}function bt(I){h[I]!==!1&&(r.disable(I),h[I]=!1)}function Rt(I,ct){return f[I]!==ct?(r.bindFramebuffer(I,ct),f[I]=ct,I===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ct),I===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ct),!0):!1}function Vt(I,ct){let $=d,J=!1;if(I){$=u.get(ct),$===void 0&&($=[],u.set(ct,$));const lt=I.textures;if($.length!==lt.length||$[0]!==r.COLOR_ATTACHMENT0){for(let ft=0,kt=lt.length;ft<kt;ft++)$[ft]=r.COLOR_ATTACHMENT0+ft;$.length=lt.length,J=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,J=!0);J&&r.drawBuffers($)}function ee(I){return g!==I?(r.useProgram(I),g=I,!0):!1}const Ft={[Ur]:r.FUNC_ADD,[u_]:r.FUNC_SUBTRACT,[f_]:r.FUNC_REVERSE_SUBTRACT};Ft[d_]=r.MIN,Ft[p_]=r.MAX;const Dt={[m_]:r.ZERO,[g_]:r.ONE,[__]:r.SRC_COLOR,[rh]:r.SRC_ALPHA,[E_]:r.SRC_ALPHA_SATURATE,[S_]:r.DST_COLOR,[x_]:r.DST_ALPHA,[v_]:r.ONE_MINUS_SRC_COLOR,[sh]:r.ONE_MINUS_SRC_ALPHA,[M_]:r.ONE_MINUS_DST_COLOR,[y_]:r.ONE_MINUS_DST_ALPHA,[b_]:r.CONSTANT_COLOR,[T_]:r.ONE_MINUS_CONSTANT_COLOR,[w_]:r.CONSTANT_ALPHA,[A_]:r.ONE_MINUS_CONSTANT_ALPHA};function O(I,ct,$,J,lt,ft,kt,he,Oe,vt){if(I===Vi){_===!0&&(bt(r.BLEND),_=!1);return}if(_===!1&&(nt(r.BLEND),_=!0),I!==h_){if(I!==p||vt!==M){if((m!==Ur||v!==Ur)&&(r.blendEquation(r.FUNC_ADD),m=Ur,v=Ur),vt)switch(I){case Is:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case If:r.blendFunc(r.ONE,r.ONE);break;case Uf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Nf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Is:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case If:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Uf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Nf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,y=null,A=null,w=null,E.set(0,0,0),R=0,p=I,M=vt}return}lt=lt||ct,ft=ft||$,kt=kt||J,(ct!==m||lt!==v)&&(r.blendEquationSeparate(Ft[ct],Ft[lt]),m=ct,v=lt),($!==x||J!==y||ft!==A||kt!==w)&&(r.blendFuncSeparate(Dt[$],Dt[J],Dt[ft],Dt[kt]),x=$,y=J,A=ft,w=kt),(he.equals(E)===!1||Oe!==R)&&(r.blendColor(he.r,he.g,he.b,Oe),E.copy(he),R=Oe),p=I,M=!1}function Se(I,ct){I.side===Oi?bt(r.CULL_FACE):nt(r.CULL_FACE);let $=I.side===Dn;ct&&($=!$),Bt($),I.blending===Is&&I.transparent===!1?O(Vi):O(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const J=I.stencilWrite;a.setTest(J),J&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),oe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?nt(r.SAMPLE_ALPHA_TO_COVERAGE):bt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(I){S!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),S=I)}function G(I){I!==a_?(nt(r.CULL_FACE),I!==C&&(I===Df?r.cullFace(r.BACK):I===l_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):bt(r.CULL_FACE),C=I}function Tt(I){I!==L&&(F&&r.lineWidth(I),L=I)}function oe(I,ct,$){I?(nt(r.POLYGON_OFFSET_FILL),(N!==ct||V!==$)&&(r.polygonOffset(ct,$),N=ct,V=$)):bt(r.POLYGON_OFFSET_FILL)}function Pt(I){I?nt(r.SCISSOR_TEST):bt(r.SCISSOR_TEST)}function P(I){I===void 0&&(I=r.TEXTURE0+q-1),tt!==I&&(r.activeTexture(I),tt=I)}function b(I,ct,$){$===void 0&&(tt===null?$=r.TEXTURE0+q-1:$=tt);let J=D[$];J===void 0&&(J={type:void 0,texture:void 0},D[$]=J),(J.type!==I||J.texture!==ct)&&(tt!==$&&(r.activeTexture($),tt=$),r.bindTexture(I,ct||_t[I]),J.type=I,J.texture=ct)}function X(){const I=D[tt];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Yt(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Nt(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function It(I){te.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),te.copy(I))}function yt(I){Z.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Z.copy(I))}function Zt(I,ct){let $=c.get(ct);$===void 0&&($=new WeakMap,c.set(ct,$));let J=$.get(I);J===void 0&&(J=r.getUniformBlockIndex(ct,I.name),$.set(I,J))}function Ot(I,ct){const J=c.get(ct).get(I);l.get(ct)!==J&&(r.uniformBlockBinding(ct,J,I.__bindingPointIndex),l.set(ct,J))}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},tt=null,D={},f={},u=new WeakMap,d=[],g=null,_=!1,p=null,m=null,x=null,y=null,v=null,A=null,w=null,E=new $t(0,0,0),R=0,M=!1,S=null,C=null,L=null,N=null,V=null,te.set(0,0,r.canvas.width,r.canvas.height),Z.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:nt,disable:bt,bindFramebuffer:Rt,drawBuffers:Vt,useProgram:ee,setBlending:O,setMaterial:Se,setFlipSided:Bt,setCullFace:G,setLineWidth:Tt,setPolygonOffset:oe,setScissorTest:Pt,activeTexture:P,bindTexture:b,unbindTexture:X,compressedTexImage2D:Q,compressedTexImage3D:j,texImage2D:ot,texImage3D:Nt,updateUBOMapping:Zt,uniformBlockBinding:Ot,texStorage2D:Yt,texStorage3D:it,texSubImage2D:K,texSubImage3D:ut,compressedTexSubImage2D:at,compressedTexSubImage3D:pt,scissor:It,viewport:yt,reset:le}}function Rd(r,t,e,n){const i=$M(n);switch(e){case Tm:return r*t;case Am:return r*t;case Cm:return r*t*2;case Rm:return r*t/i.components*i.byteLength;case Tu:return r*t/i.components*i.byteLength;case Pm:return r*t*2/i.components*i.byteLength;case wu:return r*t*2/i.components*i.byteLength;case wm:return r*t*3/i.components*i.byteLength;case fi:return r*t*4/i.components*i.byteLength;case Au:return r*t*4/i.components*i.byteLength;case el:case nl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case il:case rl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case vh:case yh:return Math.max(r,16)*Math.max(t,8)/4;case _h:case xh:return Math.max(r,8)*Math.max(t,8)/2;case Sh:case Mh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Eh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case bh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Th:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case wh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ah:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Rh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ph:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Lh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Dh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Ih:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Uh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Nh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Fh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Oh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case sl:case Bh:case kh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Lm:case zh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Hh:case Gh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $M(r){switch(r){case qi:case Mm:return{byteLength:1,components:1};case Yo:case Em:case $s:return{byteLength:2,components:1};case Eu:case bu:return{byteLength:2,components:4};case Kr:case Mu:case zi:return{byteLength:4,components:1};case bm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function ZM(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return d?new OffscreenCanvas(P,b):qo("canvas")}function _(P,b,X){let Q=1;const j=Pt(P);if((j.width>X||j.height>X)&&(Q=X/Math.max(j.width,j.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const K=Math.floor(Q*j.width),ut=Math.floor(Q*j.height);f===void 0&&(f=g(K,ut));const at=b?g(K,ut):f;return at.width=K,at.height=ut,at.getContext("2d").drawImage(P,0,0,K,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+K+"x"+ut+")."),at}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),P;return P}function p(P){return P.generateMipmaps}function m(P){r.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(P,b,X,Q,j=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let K=b;if(b===r.RED&&(X===r.FLOAT&&(K=r.R32F),X===r.HALF_FLOAT&&(K=r.R16F),X===r.UNSIGNED_BYTE&&(K=r.R8)),b===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(K=r.R8UI),X===r.UNSIGNED_SHORT&&(K=r.R16UI),X===r.UNSIGNED_INT&&(K=r.R32UI),X===r.BYTE&&(K=r.R8I),X===r.SHORT&&(K=r.R16I),X===r.INT&&(K=r.R32I)),b===r.RG&&(X===r.FLOAT&&(K=r.RG32F),X===r.HALF_FLOAT&&(K=r.RG16F),X===r.UNSIGNED_BYTE&&(K=r.RG8)),b===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(K=r.RG8UI),X===r.UNSIGNED_SHORT&&(K=r.RG16UI),X===r.UNSIGNED_INT&&(K=r.RG32UI),X===r.BYTE&&(K=r.RG8I),X===r.SHORT&&(K=r.RG16I),X===r.INT&&(K=r.RG32I)),b===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(K=r.RGB8UI),X===r.UNSIGNED_SHORT&&(K=r.RGB16UI),X===r.UNSIGNED_INT&&(K=r.RGB32UI),X===r.BYTE&&(K=r.RGB8I),X===r.SHORT&&(K=r.RGB16I),X===r.INT&&(K=r.RGB32I)),b===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),X===r.UNSIGNED_INT&&(K=r.RGBA32UI),X===r.BYTE&&(K=r.RGBA8I),X===r.SHORT&&(K=r.RGBA16I),X===r.INT&&(K=r.RGBA32I)),b===r.RGB&&X===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),b===r.RGBA){const ut=j?Dl:ce.getTransfer(Q);X===r.FLOAT&&(K=r.RGBA32F),X===r.HALF_FLOAT&&(K=r.RGBA16F),X===r.UNSIGNED_BYTE&&(K=ut===xe?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(P,b){let X;return P?b===null||b===Kr||b===Xs?X=r.DEPTH24_STENCIL8:b===zi?X=r.DEPTH32F_STENCIL8:b===Yo&&(X=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Kr||b===Xs?X=r.DEPTH_COMPONENT24:b===zi?X=r.DEPTH_COMPONENT32F:b===Yo&&(X=r.DEPTH_COMPONENT16),X}function A(P,b){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==di&&P.minFilter!==Mi?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function w(P){const b=P.target;b.removeEventListener("dispose",w),R(b),b.isVideoTexture&&h.delete(b)}function E(P){const b=P.target;b.removeEventListener("dispose",E),S(b)}function R(P){const b=n.get(P);if(b.__webglInit===void 0)return;const X=P.source,Q=u.get(X);if(Q){const j=Q[b.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(P),Object.keys(Q).length===0&&u.delete(X)}n.remove(P)}function M(P){const b=n.get(P);r.deleteTexture(b.__webglTexture);const X=P.source,Q=u.get(X);delete Q[b.__cacheKey],o.memory.textures--}function S(P){const b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let j=0;j<b.__webglFramebuffer[Q].length;j++)r.deleteFramebuffer(b.__webglFramebuffer[Q][j]);else r.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)r.deleteFramebuffer(b.__webglFramebuffer[Q]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const X=P.textures;for(let Q=0,j=X.length;Q<j;Q++){const K=n.get(X[Q]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(X[Q])}n.remove(P)}let C=0;function L(){C=0}function N(){const P=C;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),C+=1,P}function V(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function q(P,b){const X=n.get(P);if(P.isVideoTexture&&Tt(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){const Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(X,P,b);return}}e.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+b)}function F(P,b){const X=n.get(P);if(P.version>0&&X.__version!==P.version){Z(X,P,b);return}e.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+b)}function z(P,b){const X=n.get(P);if(P.version>0&&X.__version!==P.version){Z(X,P,b);return}e.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+b)}function H(P,b){const X=n.get(P);if(P.version>0&&X.__version!==P.version){et(X,P,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+b)}const tt={[mh]:r.REPEAT,[Br]:r.CLAMP_TO_EDGE,[gh]:r.MIRRORED_REPEAT},D={[di]:r.NEAREST,[O_]:r.NEAREST_MIPMAP_NEAREST,[ma]:r.NEAREST_MIPMAP_LINEAR,[Mi]:r.LINEAR,[Jl]:r.LINEAR_MIPMAP_NEAREST,[kr]:r.LINEAR_MIPMAP_LINEAR},ht={[H_]:r.NEVER,[q_]:r.ALWAYS,[G_]:r.LESS,[Im]:r.LEQUAL,[V_]:r.EQUAL,[Y_]:r.GEQUAL,[W_]:r.GREATER,[X_]:r.NOTEQUAL};function Ut(P,b){if(b.type===zi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Mi||b.magFilter===Jl||b.magFilter===ma||b.magFilter===kr||b.minFilter===Mi||b.minFilter===Jl||b.minFilter===ma||b.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,tt[b.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,tt[b.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,tt[b.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,D[b.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,D[b.minFilter]),b.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,ht[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===di||b.minFilter!==ma&&b.minFilter!==kr||b.type===zi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function te(P,b){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",w));const Q=b.source;let j=u.get(Q);j===void 0&&(j={},u.set(Q,j));const K=V(b);if(K!==P.__cacheKey){j[K]===void 0&&(j[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),j[K].usedTimes++;const ut=j[P.__cacheKey];ut!==void 0&&(j[P.__cacheKey].usedTimes--,ut.usedTimes===0&&M(b)),P.__cacheKey=K,P.__webglTexture=j[K].texture}return X}function Z(P,b,X){let Q=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=r.TEXTURE_3D);const j=te(P,b),K=b.source;e.bindTexture(Q,P.__webglTexture,r.TEXTURE0+X);const ut=n.get(K);if(K.version!==ut.__version||j===!0){e.activeTexture(r.TEXTURE0+X);const at=ce.getPrimaries(ce.workingColorSpace),pt=b.colorSpace===rr?null:ce.getPrimaries(b.colorSpace),Yt=b.colorSpace===rr||at===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let it=_(b.image,!1,i.maxTextureSize);it=oe(b,it);const ot=s.convert(b.format,b.colorSpace),Nt=s.convert(b.type);let It=y(b.internalFormat,ot,Nt,b.colorSpace,b.isVideoTexture);Ut(Q,b);let yt;const Zt=b.mipmaps,Ot=b.isVideoTexture!==!0,le=ut.__version===void 0||j===!0,I=K.dataReady,ct=A(b,it);if(b.isDepthTexture)It=v(b.format===Ys,b.type),le&&(Ot?e.texStorage2D(r.TEXTURE_2D,1,It,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,It,it.width,it.height,0,ot,Nt,null));else if(b.isDataTexture)if(Zt.length>0){Ot&&le&&e.texStorage2D(r.TEXTURE_2D,ct,It,Zt[0].width,Zt[0].height);for(let $=0,J=Zt.length;$<J;$++)yt=Zt[$],Ot?I&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,yt.width,yt.height,ot,Nt,yt.data):e.texImage2D(r.TEXTURE_2D,$,It,yt.width,yt.height,0,ot,Nt,yt.data);b.generateMipmaps=!1}else Ot?(le&&e.texStorage2D(r.TEXTURE_2D,ct,It,it.width,it.height),I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,it.width,it.height,ot,Nt,it.data)):e.texImage2D(r.TEXTURE_2D,0,It,it.width,it.height,0,ot,Nt,it.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ot&&le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ct,It,Zt[0].width,Zt[0].height,it.depth);for(let $=0,J=Zt.length;$<J;$++)if(yt=Zt[$],b.format!==fi)if(ot!==null)if(Ot){if(I)if(b.layerUpdates.size>0){const lt=Rd(yt.width,yt.height,b.format,b.type);for(const ft of b.layerUpdates){const kt=yt.data.subarray(ft*lt/yt.data.BYTES_PER_ELEMENT,(ft+1)*lt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,ft,yt.width,yt.height,1,ot,kt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,yt.width,yt.height,it.depth,ot,yt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,It,yt.width,yt.height,it.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?I&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,yt.width,yt.height,it.depth,ot,Nt,yt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,$,It,yt.width,yt.height,it.depth,0,ot,Nt,yt.data)}else{Ot&&le&&e.texStorage2D(r.TEXTURE_2D,ct,It,Zt[0].width,Zt[0].height);for(let $=0,J=Zt.length;$<J;$++)yt=Zt[$],b.format!==fi?ot!==null?Ot?I&&e.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,yt.width,yt.height,ot,yt.data):e.compressedTexImage2D(r.TEXTURE_2D,$,It,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?I&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,yt.width,yt.height,ot,Nt,yt.data):e.texImage2D(r.TEXTURE_2D,$,It,yt.width,yt.height,0,ot,Nt,yt.data)}else if(b.isDataArrayTexture)if(Ot){if(le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ct,It,it.width,it.height,it.depth),I)if(b.layerUpdates.size>0){const $=Rd(it.width,it.height,b.format,b.type);for(const J of b.layerUpdates){const lt=it.data.subarray(J*$/it.data.BYTES_PER_ELEMENT,(J+1)*$/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,it.width,it.height,1,ot,Nt,lt)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ot,Nt,it.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,It,it.width,it.height,it.depth,0,ot,Nt,it.data);else if(b.isData3DTexture)Ot?(le&&e.texStorage3D(r.TEXTURE_3D,ct,It,it.width,it.height,it.depth),I&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ot,Nt,it.data)):e.texImage3D(r.TEXTURE_3D,0,It,it.width,it.height,it.depth,0,ot,Nt,it.data);else if(b.isFramebufferTexture){if(le)if(Ot)e.texStorage2D(r.TEXTURE_2D,ct,It,it.width,it.height);else{let $=it.width,J=it.height;for(let lt=0;lt<ct;lt++)e.texImage2D(r.TEXTURE_2D,lt,It,$,J,0,ot,Nt,null),$>>=1,J>>=1}}else if(Zt.length>0){if(Ot&&le){const $=Pt(Zt[0]);e.texStorage2D(r.TEXTURE_2D,ct,It,$.width,$.height)}for(let $=0,J=Zt.length;$<J;$++)yt=Zt[$],Ot?I&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,ot,Nt,yt):e.texImage2D(r.TEXTURE_2D,$,It,ot,Nt,yt);b.generateMipmaps=!1}else if(Ot){if(le){const $=Pt(it);e.texStorage2D(r.TEXTURE_2D,ct,It,$.width,$.height)}I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ot,Nt,it)}else e.texImage2D(r.TEXTURE_2D,0,It,ot,Nt,it);p(b)&&m(Q),ut.__version=K.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function et(P,b,X){if(b.image.length!==6)return;const Q=te(P,b),j=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+X);const K=n.get(j);if(j.version!==K.__version||Q===!0){e.activeTexture(r.TEXTURE0+X);const ut=ce.getPrimaries(ce.workingColorSpace),at=b.colorSpace===rr?null:ce.getPrimaries(b.colorSpace),pt=b.colorSpace===rr||ut===at?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Yt=b.isCompressedTexture||b.image[0].isCompressedTexture,it=b.image[0]&&b.image[0].isDataTexture,ot=[];for(let J=0;J<6;J++)!Yt&&!it?ot[J]=_(b.image[J],!0,i.maxCubemapSize):ot[J]=it?b.image[J].image:b.image[J],ot[J]=oe(b,ot[J]);const Nt=ot[0],It=s.convert(b.format,b.colorSpace),yt=s.convert(b.type),Zt=y(b.internalFormat,It,yt,b.colorSpace),Ot=b.isVideoTexture!==!0,le=K.__version===void 0||Q===!0,I=j.dataReady;let ct=A(b,Nt);Ut(r.TEXTURE_CUBE_MAP,b);let $;if(Yt){Ot&&le&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Zt,Nt.width,Nt.height);for(let J=0;J<6;J++){$=ot[J].mipmaps;for(let lt=0;lt<$.length;lt++){const ft=$[lt];b.format!==fi?It!==null?Ot?I&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,0,0,ft.width,ft.height,It,ft.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,Zt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,0,0,ft.width,ft.height,It,yt,ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,Zt,ft.width,ft.height,0,It,yt,ft.data)}}}else{if($=b.mipmaps,Ot&&le){$.length>0&&ct++;const J=Pt(ot[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ct,Zt,J.width,J.height)}for(let J=0;J<6;J++)if(it){Ot?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ot[J].width,ot[J].height,It,yt,ot[J].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Zt,ot[J].width,ot[J].height,0,It,yt,ot[J].data);for(let lt=0;lt<$.length;lt++){const kt=$[lt].image[J].image;Ot?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,0,0,kt.width,kt.height,It,yt,kt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,Zt,kt.width,kt.height,0,It,yt,kt.data)}}else{Ot?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,It,yt,ot[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Zt,It,yt,ot[J]);for(let lt=0;lt<$.length;lt++){const ft=$[lt];Ot?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,0,0,It,yt,ft.image[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,Zt,It,yt,ft.image[J])}}}p(b)&&m(r.TEXTURE_CUBE_MAP),K.__version=j.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function _t(P,b,X,Q,j,K){const ut=s.convert(X.format,X.colorSpace),at=s.convert(X.type),pt=y(X.internalFormat,ut,at,X.colorSpace),Yt=n.get(b),it=n.get(X);if(it.__renderTarget=b,!Yt.__hasExternalTextures){const ot=Math.max(1,b.width>>K),Nt=Math.max(1,b.height>>K);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?e.texImage3D(j,K,pt,ot,Nt,b.depth,0,ut,at,null):e.texImage2D(j,K,pt,ot,Nt,0,ut,at,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),G(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,j,it.__webglTexture,0,Bt(b)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,j,it.__webglTexture,K),e.bindFramebuffer(r.FRAMEBUFFER,null)}function nt(P,b,X){if(r.bindRenderbuffer(r.RENDERBUFFER,P),b.depthBuffer){const Q=b.depthTexture,j=Q&&Q.isDepthTexture?Q.type:null,K=v(b.stencilBuffer,j),ut=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=Bt(b);G(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at,K,b.width,b.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,at,K,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,K,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ut,r.RENDERBUFFER,P)}else{const Q=b.textures;for(let j=0;j<Q.length;j++){const K=Q[j],ut=s.convert(K.format,K.colorSpace),at=s.convert(K.type),pt=y(K.internalFormat,ut,at,K.colorSpace),Yt=Bt(b);X&&G(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt,pt,b.width,b.height):G(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Yt,pt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,pt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function bt(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(b.depthTexture);Q.__renderTarget=b,(!Q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);const j=Q.__webglTexture,K=Bt(b);if(b.depthTexture.format===Us)G(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(b.depthTexture.format===Ys)G(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Rt(P){const b=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const Q=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Q){const j=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Q.removeEventListener("dispose",j)};Q.addEventListener("dispose",j),b.__depthDisposeCallback=j}b.__boundDepthTexture=Q}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");bt(b.__webglFramebuffer,P)}else if(X){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]===void 0)b.__webglDepthbuffer[Q]=r.createRenderbuffer(),nt(b.__webglDepthbuffer[Q],P,!1);else{const j=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,K)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),nt(b.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,j)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Vt(P,b,X){const Q=n.get(P);b!==void 0&&_t(Q.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&Rt(P)}function ee(P){const b=P.texture,X=n.get(P),Q=n.get(b);P.addEventListener("dispose",E);const j=P.textures,K=P.isWebGLCubeRenderTarget===!0,ut=j.length>1;if(ut||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=b.version,o.memory.textures++),K){X.__webglFramebuffer=[];for(let at=0;at<6;at++)if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[at]=[];for(let pt=0;pt<b.mipmaps.length;pt++)X.__webglFramebuffer[at][pt]=r.createFramebuffer()}else X.__webglFramebuffer[at]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let at=0;at<b.mipmaps.length;at++)X.__webglFramebuffer[at]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(ut)for(let at=0,pt=j.length;at<pt;at++){const Yt=n.get(j[at]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&G(P)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let at=0;at<j.length;at++){const pt=j[at];X.__webglColorRenderbuffer[at]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[at]);const Yt=s.convert(pt.format,pt.colorSpace),it=s.convert(pt.type),ot=y(pt.internalFormat,Yt,it,pt.colorSpace,P.isXRRenderTarget===!0),Nt=Bt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Nt,ot,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,X.__webglColorRenderbuffer[at])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),nt(X.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Ut(r.TEXTURE_CUBE_MAP,b);for(let at=0;at<6;at++)if(b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)_t(X.__webglFramebuffer[at][pt],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,pt);else _t(X.__webglFramebuffer[at],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(b)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let at=0,pt=j.length;at<pt;at++){const Yt=j[at],it=n.get(Yt);e.bindTexture(r.TEXTURE_2D,it.__webglTexture),Ut(r.TEXTURE_2D,Yt),_t(X.__webglFramebuffer,P,Yt,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,0),p(Yt)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let at=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(at=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(at,Q.__webglTexture),Ut(at,b),b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)_t(X.__webglFramebuffer[pt],P,b,r.COLOR_ATTACHMENT0,at,pt);else _t(X.__webglFramebuffer,P,b,r.COLOR_ATTACHMENT0,at,0);p(b)&&m(at),e.unbindTexture()}P.depthBuffer&&Rt(P)}function Ft(P){const b=P.textures;for(let X=0,Q=b.length;X<Q;X++){const j=b[X];if(p(j)){const K=x(P),ut=n.get(j).__webglTexture;e.bindTexture(K,ut),m(K),e.unbindTexture()}}}const Dt=[],O=[];function Se(P){if(P.samples>0){if(G(P)===!1){const b=P.textures,X=P.width,Q=P.height;let j=r.COLOR_BUFFER_BIT;const K=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=n.get(P),at=b.length>1;if(at)for(let pt=0;pt<b.length;pt++)e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let pt=0;pt<b.length;pt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),at){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ut.__webglColorRenderbuffer[pt]);const Yt=n.get(b[pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Yt,0)}r.blitFramebuffer(0,0,X,Q,0,0,X,Q,j,r.NEAREST),l===!0&&(Dt.length=0,O.length=0,Dt.push(r.COLOR_ATTACHMENT0+pt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Dt.push(K),O.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,O)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Dt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),at)for(let pt=0;pt<b.length;pt++){e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,ut.__webglColorRenderbuffer[pt]);const Yt=n.get(b[pt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,Yt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const b=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Bt(P){return Math.min(i.maxSamples,P.samples)}function G(P){const b=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Tt(P){const b=o.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function oe(P,b){const X=P.colorSpace,Q=P.format,j=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==Zs&&X!==rr&&(ce.getTransfer(X)===xe?(Q!==fi||j!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}function Pt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.setTexture2D=q,this.setTexture2DArray=F,this.setTexture3D=z,this.setTextureCube=H,this.rebindTextures=Vt,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=G}function KM(r,t){function e(n,i=rr){let s;const o=ce.getTransfer(i);if(n===qi)return r.UNSIGNED_BYTE;if(n===Eu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===bu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===bm)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Mm)return r.BYTE;if(n===Em)return r.SHORT;if(n===Yo)return r.UNSIGNED_SHORT;if(n===Mu)return r.INT;if(n===Kr)return r.UNSIGNED_INT;if(n===zi)return r.FLOAT;if(n===$s)return r.HALF_FLOAT;if(n===Tm)return r.ALPHA;if(n===wm)return r.RGB;if(n===fi)return r.RGBA;if(n===Am)return r.LUMINANCE;if(n===Cm)return r.LUMINANCE_ALPHA;if(n===Us)return r.DEPTH_COMPONENT;if(n===Ys)return r.DEPTH_STENCIL;if(n===Rm)return r.RED;if(n===Tu)return r.RED_INTEGER;if(n===Pm)return r.RG;if(n===wu)return r.RG_INTEGER;if(n===Au)return r.RGBA_INTEGER;if(n===el||n===nl||n===il||n===rl)if(o===xe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===el)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===el)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===il)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_h||n===vh||n===xh||n===yh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===_h)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sh||n===Mh||n===Eh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Sh||n===Mh)return o===xe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Eh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bh||n===Th||n===wh||n===Ah||n===Ch||n===Rh||n===Ph||n===Lh||n===Dh||n===Ih||n===Uh||n===Nh||n===Fh||n===Oh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===bh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Th)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ah)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ch)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ph)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ih)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sl||n===Bh||n===kh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===sl)return o===xe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lm||n===zh||n===Hh||n===Gh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===sl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===zh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class JM extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class We extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jM={type:"move"};class Tc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new We,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new We,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new We,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new We;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const QM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tE=`
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

}`;class eE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new bn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new oi({vertexShader:QM,fragmentShader:tE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ht(new ea(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nE extends Ks{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null;const _=new eE,p=e.getContextAttributes();let m=null,x=null;const y=[],v=[],A=new xt;let w=null;const E=new Mn;E.viewport=new ye;const R=new Mn;R.viewport=new ye;const M=[E,R],S=new JM;let C=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let et=y[Z];return et===void 0&&(et=new Tc,y[Z]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Z){let et=y[Z];return et===void 0&&(et=new Tc,y[Z]=et),et.getGripSpace()},this.getHand=function(Z){let et=y[Z];return et===void 0&&(et=new Tc,y[Z]=et),et.getHandSpace()};function N(Z){const et=v.indexOf(Z.inputSource);if(et===-1)return;const _t=y[et];_t!==void 0&&(_t.update(Z.inputSource,Z.frame,c||o),_t.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",q);for(let Z=0;Z<y.length;Z++){const et=v[Z];et!==null&&(v[Z]=null,y[Z].disconnect(et))}C=null,L=null,_.reset(),t.setRenderTarget(m),d=null,u=null,f=null,i=null,x=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",V),i.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new xr(d.framebufferWidth,d.framebufferHeight,{format:fi,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,_t=null,nt=null;p.depth&&(nt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?Ys:Us,_t=p.stencil?Xs:Kr);const bt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:s};f=new XRWebGLBinding(i,e),u=f.createProjectionLayer(bt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new xr(u.textureWidth,u.textureHeight,{format:fi,type:qi,depthTexture:new Du(u.textureWidth,u.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),te.setContext(i),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(Z){for(let et=0;et<Z.removed.length;et++){const _t=Z.removed[et],nt=v.indexOf(_t);nt>=0&&(v[nt]=null,y[nt].disconnect(_t))}for(let et=0;et<Z.added.length;et++){const _t=Z.added[et];let nt=v.indexOf(_t);if(nt===-1){for(let Rt=0;Rt<y.length;Rt++)if(Rt>=v.length){v.push(_t),nt=Rt;break}else if(v[Rt]===null){v[Rt]=_t,nt=Rt;break}if(nt===-1)break}const bt=y[nt];bt&&bt.connect(_t)}}const F=new U,z=new U;function H(Z,et,_t){F.setFromMatrixPosition(et.matrixWorld),z.setFromMatrixPosition(_t.matrixWorld);const nt=F.distanceTo(z),bt=et.projectionMatrix.elements,Rt=_t.projectionMatrix.elements,Vt=bt[14]/(bt[10]-1),ee=bt[14]/(bt[10]+1),Ft=(bt[9]+1)/bt[5],Dt=(bt[9]-1)/bt[5],O=(bt[8]-1)/bt[0],Se=(Rt[8]+1)/Rt[0],Bt=Vt*O,G=Vt*Se,Tt=nt/(-O+Se),oe=Tt*-O;if(et.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(oe),Z.translateZ(Tt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),bt[10]===-1)Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Pt=Vt+Tt,P=ee+Tt,b=Bt-oe,X=G+(nt-oe),Q=Ft*ee/P*Pt,j=Dt*ee/P*Pt;Z.projectionMatrix.makePerspective(b,X,Q,j,Pt,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function tt(Z,et){et===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(et.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let et=Z.near,_t=Z.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),S.near=R.near=E.near=et,S.far=R.far=E.far=_t,(C!==S.near||L!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,L=S.far),E.layers.mask=Z.layers.mask|2,R.layers.mask=Z.layers.mask|4,S.layers.mask=E.layers.mask|R.layers.mask;const nt=Z.parent,bt=S.cameras;tt(S,nt);for(let Rt=0;Rt<bt.length;Rt++)tt(bt[Rt],nt);bt.length===2?H(S,E,R):S.projectionMatrix.copy(E.projectionMatrix),D(Z,S,nt)};function D(Z,et,_t){_t===null?Z.matrix.copy(et.matrixWorld):(Z.matrix.copy(_t.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(et.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Vh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let ht=null;function Ut(Z,et){if(h=et.getViewerPose(c||o),g=et,h!==null){const _t=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let nt=!1;_t.length!==S.cameras.length&&(S.cameras.length=0,nt=!0);for(let Rt=0;Rt<_t.length;Rt++){const Vt=_t[Rt];let ee=null;if(d!==null)ee=d.getViewport(Vt);else{const Dt=f.getViewSubImage(u,Vt);ee=Dt.viewport,Rt===0&&(t.setRenderTargetTextures(x,Dt.colorTexture,u.ignoreDepthValues?void 0:Dt.depthStencilTexture),t.setRenderTarget(x))}let Ft=M[Rt];Ft===void 0&&(Ft=new Mn,Ft.layers.enable(Rt),Ft.viewport=new ye,M[Rt]=Ft),Ft.matrix.fromArray(Vt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(Vt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(ee.x,ee.y,ee.width,ee.height),Rt===0&&(S.matrix.copy(Ft.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),nt===!0&&S.cameras.push(Ft)}const bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Rt=f.getDepthInformation(_t[0]);Rt&&Rt.isValid&&Rt.texture&&_.init(t,Rt,i.renderState)}}for(let _t=0;_t<y.length;_t++){const nt=v[_t],bt=y[_t];nt!==null&&bt!==void 0&&bt.update(nt,et,c||o)}ht&&ht(Z,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const te=new Ym;te.setAnimationLoop(Ut),this.setAnimationLoop=function(Z){ht=Z},this.dispose=function(){}}}const Cr=new Ti,iE=new Ce;function rE(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Gm(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,x,y,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,x,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Dn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Dn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=t.get(m),y=x.envMap,v=x.envMapRotation;y&&(p.envMap.value=y,Cr.copy(v),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),p.envMapRotation.value.setFromMatrix4(iE.makeRotationFromEuler(Cr)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=y*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Dn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const x=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function sE(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=i[x.id];v===void 0&&(g(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",p));const A=y.program;n.updateUBOMapping(x,A);const w=t.render.frame;s[x.id]!==w&&(u(x),s[x.id]=w)}function h(x){const y=f();x.__bindingPointIndex=y;const v=r.createBuffer(),A=x.__size,w=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const y=i[x.id],v=x.uniforms,A=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let w=0,E=v.length;w<E;w++){const R=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,S=R.length;M<S;M++){const C=R[M];if(d(C,w,M,A)===!0){const L=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let V=0;for(let q=0;q<N.length;q++){const F=N[q],z=_(F);typeof F=="number"||typeof F=="boolean"?(C.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,L+V,C.__data)):F.isMatrix3?(C.__data[0]=F.elements[0],C.__data[1]=F.elements[1],C.__data[2]=F.elements[2],C.__data[3]=0,C.__data[4]=F.elements[3],C.__data[5]=F.elements[4],C.__data[6]=F.elements[5],C.__data[7]=0,C.__data[8]=F.elements[6],C.__data[9]=F.elements[7],C.__data[10]=F.elements[8],C.__data[11]=0):(F.toArray(C.__data,V),V+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,y,v,A){const w=x.value,E=y+"_"+v;if(A[E]===void 0)return typeof w=="number"||typeof w=="boolean"?A[E]=w:A[E]=w.clone(),!0;{const R=A[E];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return A[E]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(x){const y=x.uniforms;let v=0;const A=16;for(let E=0,R=y.length;E<R;E++){const M=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,C=M.length;S<C;S++){const L=M[S],N=Array.isArray(L.value)?L.value:[L.value];for(let V=0,q=N.length;V<q;V++){const F=N[V],z=_(F),H=v%A,tt=H%z.boundary,D=H+tt;v+=tt,D!==0&&A-D<z.storage&&(v+=A-D),L.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=z.storage}}}const w=v%A;return w>0&&(v+=A-w),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function p(x){const y=x.target;y.removeEventListener("dispose",p);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function m(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Iu{constructor(t={}){const{canvas:e=Z_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,m=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this.toneMapping=dr,this.toneMappingExposure=1;const v=this;let A=!1,w=0,E=0,R=null,M=-1,S=null;const C=new ye,L=new ye;let N=null;const V=new $t(0);let q=0,F=e.width,z=e.height,H=1,tt=null,D=null;const ht=new ye(0,0,F,z),Ut=new ye(0,0,F,z);let te=!1;const Z=new Ru;let et=!1,_t=!1;const nt=new Ce,bt=new Ce,Rt=new U,Vt=new ye,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function Dt(){return R===null?H:1}let O=n;function Se(T,B){return e.getContext(T,B)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Su}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),O===null){const B="webgl2";if(O=Se(B,T),O===null)throw Se(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Bt,G,Tt,oe,Pt,P,b,X,Q,j,K,ut,at,pt,Yt,it,ot,Nt,It,yt,Zt,Ot,le,I;function ct(){Bt=new uS(O),Bt.init(),Ot=new KM(O,Bt),G=new sS(O,Bt,t,Ot),Tt=new qM(O,Bt),G.reverseDepthBuffer&&u&&Tt.buffers.depth.setReversed(!0),oe=new pS(O),Pt=new DM,P=new ZM(O,Bt,Tt,Pt,G,Ot,oe),b=new aS(v),X=new hS(v),Q=new Sv(O),le=new iS(O,Q),j=new fS(O,Q,oe,le),K=new gS(O,j,Q,oe),It=new mS(O,G,P),it=new oS(Pt),ut=new LM(v,b,X,Bt,G,le,it),at=new rE(v,Pt),pt=new UM,Yt=new zM(Bt),Nt=new nS(v,b,X,Tt,K,d,l),ot=new XM(v,K,G),I=new sE(O,oe,G,Tt),yt=new rS(O,Bt,oe),Zt=new dS(O,Bt,oe),oe.programs=ut.programs,v.capabilities=G,v.extensions=Bt,v.properties=Pt,v.renderLists=pt,v.shadowMap=ot,v.state=Tt,v.info=oe}ct();const $=new nE(v,O);this.xr=$,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=Bt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Bt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(F,z,!1))},this.getSize=function(T){return T.set(F,z)},this.setSize=function(T,B,W=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=T,z=B,e.width=Math.floor(T*H),e.height=Math.floor(B*H),W===!0&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(F*H,z*H).floor()},this.setDrawingBufferSize=function(T,B,W){F=T,z=B,H=W,e.width=Math.floor(T*W),e.height=Math.floor(B*W),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(ht)},this.setViewport=function(T,B,W,Y){T.isVector4?ht.set(T.x,T.y,T.z,T.w):ht.set(T,B,W,Y),Tt.viewport(C.copy(ht).multiplyScalar(H).round())},this.getScissor=function(T){return T.copy(Ut)},this.setScissor=function(T,B,W,Y){T.isVector4?Ut.set(T.x,T.y,T.z,T.w):Ut.set(T,B,W,Y),Tt.scissor(L.copy(Ut).multiplyScalar(H).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(T){Tt.setScissorTest(te=T)},this.setOpaqueSort=function(T){tt=T},this.setTransparentSort=function(T){D=T},this.getClearColor=function(T){return T.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(T=!0,B=!0,W=!0){let Y=0;if(T){let k=!1;if(R!==null){const rt=R.texture.format;k=rt===Au||rt===wu||rt===Tu}if(k){const rt=R.texture.type,st=rt===qi||rt===Kr||rt===Yo||rt===Xs||rt===Eu||rt===bu,dt=Nt.getClearColor(),St=Nt.getClearAlpha(),zt=dt.r,Xt=dt.g,Et=dt.b;st?(g[0]=zt,g[1]=Xt,g[2]=Et,g[3]=St,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=zt,_[1]=Xt,_[2]=Et,_[3]=St,O.clearBufferiv(O.COLOR,0,_))}else Y|=O.COLOR_BUFFER_BIT}B&&(Y|=O.DEPTH_BUFFER_BIT),W&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),pt.dispose(),Yt.dispose(),Pt.dispose(),b.dispose(),X.dispose(),K.dispose(),le.dispose(),I.dispose(),ut.dispose(),$.dispose(),$.removeEventListener("sessionstart",mt),$.removeEventListener("sessionend",Wt),At.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=oe.autoReset,B=ot.enabled,W=ot.autoUpdate,Y=ot.needsUpdate,k=ot.type;ct(),oe.autoReset=T,ot.enabled=B,ot.autoUpdate=W,ot.needsUpdate=Y,ot.type=k}function ft(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function kt(T){const B=T.target;B.removeEventListener("dispose",kt),he(B)}function he(T){Oe(T),Pt.remove(T)}function Oe(T){const B=Pt.get(T).programs;B!==void 0&&(B.forEach(function(W){ut.releaseProgram(W)}),T.isShaderMaterial&&ut.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,W,Y,k,rt){B===null&&(B=ee);const st=k.isMesh&&k.matrixWorld.determinant()<0,dt=Un(T,B,W,Y,k);Tt.setMaterial(Y,st);let St=W.index,zt=1;if(Y.wireframe===!0){if(St=j.getWireframeAttribute(W),St===void 0)return;zt=2}const Xt=W.drawRange,Et=W.attributes.position;let qt=Xt.start*zt,ue=(Xt.start+Xt.count)*zt;rt!==null&&(qt=Math.max(qt,rt.start*zt),ue=Math.min(ue,(rt.start+rt.count)*zt)),St!==null?(qt=Math.max(qt,0),ue=Math.min(ue,St.count)):Et!=null&&(qt=Math.max(qt,0),ue=Math.min(ue,Et.count));const pe=ue-qt;if(pe<0||pe===1/0)return;le.setup(k,Y,dt,W,St);let De,me=yt;if(St!==null&&(De=Q.get(St),me=Zt,me.setIndex(De)),k.isMesh)Y.wireframe===!0?(Tt.setLineWidth(Y.wireframeLinewidth*Dt()),me.setMode(O.LINES)):me.setMode(O.TRIANGLES);else if(k.isLine){let Lt=Y.linewidth;Lt===void 0&&(Lt=1),Tt.setLineWidth(Lt*Dt()),k.isLineSegments?me.setMode(O.LINES):k.isLineLoop?me.setMode(O.LINE_LOOP):me.setMode(O.LINE_STRIP)}else k.isPoints?me.setMode(O.POINTS):k.isSprite&&me.setMode(O.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)me.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))me.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Lt=k._multiDrawStarts,Ai=k._multiDrawCounts,ge=k._multiDrawCount,ai=St?Q.get(St).bytesPerElement:1,ts=Pt.get(Y).currentProgram.getUniforms();for(let Nn=0;Nn<ge;Nn++)ts.setValue(O,"_gl_DrawID",Nn),me.render(Lt[Nn]/ai,Ai[Nn])}else if(k.isInstancedMesh)me.renderInstances(qt,pe,k.count);else if(W.isInstancedBufferGeometry){const Lt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ai=Math.min(W.instanceCount,Lt);me.renderInstances(qt,pe,Ai)}else me.render(qt,pe)};function vt(T,B,W){T.transparent===!0&&T.side===Oi&&T.forceSinglePass===!1?(T.side=Dn,T.needsUpdate=!0,Me(T,B,W),T.side=vr,T.needsUpdate=!0,Me(T,B,W),T.side=Oi):Me(T,B,W)}this.compile=function(T,B,W=null){W===null&&(W=T),m=Yt.get(W),m.init(B),y.push(m),W.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),T!==W&&T.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const Y=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const rt=k.material;if(rt)if(Array.isArray(rt))for(let st=0;st<rt.length;st++){const dt=rt[st];vt(dt,W,k),Y.add(dt)}else vt(rt,W,k),Y.add(rt)}),y.pop(),m=null,Y},this.compileAsync=function(T,B,W=null){const Y=this.compile(T,B,W);return new Promise(k=>{function rt(){if(Y.forEach(function(st){Pt.get(st).currentProgram.isReady()&&Y.delete(st)}),Y.size===0){k(T);return}setTimeout(rt,10)}Bt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let wt=null;function Kt(T){wt&&wt(T)}function mt(){At.stop()}function Wt(){At.start()}const At=new Ym;At.setAnimationLoop(Kt),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(T){wt=T,$.setAnimationLoop(T),T===null?At.stop():At.start()},$.addEventListener("sessionstart",mt),$.addEventListener("sessionend",Wt),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(B),B=$.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,B,R),m=Yt.get(T,y.length),m.init(B),y.push(m),bt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Z.setFromProjectionMatrix(bt),_t=this.localClippingEnabled,et=it.init(this.clippingPlanes,_t),p=pt.get(T,x.length),p.init(),x.push(p),$.enabled===!0&&$.isPresenting===!0){const rt=v.xr.getDepthSensingMesh();rt!==null&&Gt(rt,B,-1/0,v.sortObjects)}Gt(T,B,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(tt,D),Ft=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Ft&&Nt.addToRenderList(p,T),this.info.render.frame++,et===!0&&it.beginShadows();const W=m.state.shadowsArray;ot.render(W,T,B),et===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=p.opaque,k=p.transmissive;if(m.setupLights(),B.isArrayCamera){const rt=B.cameras;if(k.length>0)for(let st=0,dt=rt.length;st<dt;st++){const St=rt[st];ie(Y,k,T,St)}Ft&&Nt.render(T);for(let st=0,dt=rt.length;st<dt;st++){const St=rt[st];ze(p,T,St,St.viewport)}}else k.length>0&&ie(Y,k,T,B),Ft&&Nt.render(T),ze(p,T,B);R!==null&&(P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(v,T,B),le.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?(m=y[y.length-1],et===!0&&it.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,x.pop(),x.length>0?p=x[x.length-1]:p=null};function Gt(T,B,W,Y){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){Y&&Vt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(bt);const st=K.update(T),dt=T.material;dt.visible&&p.push(T,st,dt,W,Vt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Z.intersectsObject(T))){const st=K.update(T),dt=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Vt.copy(T.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),Vt.copy(st.boundingSphere.center)),Vt.applyMatrix4(T.matrixWorld).applyMatrix4(bt)),Array.isArray(dt)){const St=st.groups;for(let zt=0,Xt=St.length;zt<Xt;zt++){const Et=St[zt],qt=dt[Et.materialIndex];qt&&qt.visible&&p.push(T,st,qt,W,Vt.z,Et)}}else dt.visible&&p.push(T,st,dt,W,Vt.z,null)}}const rt=T.children;for(let st=0,dt=rt.length;st<dt;st++)Gt(rt[st],B,W,Y)}function ze(T,B,W,Y){const k=T.opaque,rt=T.transmissive,st=T.transparent;m.setupLightsView(W),et===!0&&it.setGlobalState(v.clippingPlanes,W),Y&&Tt.viewport(C.copy(Y)),k.length>0&&Ae(k,B,W),rt.length>0&&Ae(rt,B,W),st.length>0&&Ae(st,B,W),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function ie(T,B,W,Y){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new xr(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?$s:qi,minFilter:kr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));const rt=m.state.transmissionRenderTarget[Y.id],st=Y.viewport||C;rt.setSize(st.z,st.w);const dt=v.getRenderTarget();v.setRenderTarget(rt),v.getClearColor(V),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),Ft&&Nt.render(W);const St=v.toneMapping;v.toneMapping=dr;const zt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),et===!0&&it.setGlobalState(v.clippingPlanes,Y),Ae(T,W,Y),P.updateMultisampleRenderTarget(rt),P.updateRenderTargetMipmap(rt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Et=0,qt=B.length;Et<qt;Et++){const ue=B[Et],pe=ue.object,De=ue.geometry,me=ue.material,Lt=ue.group;if(me.side===Oi&&pe.layers.test(Y.layers)){const Ai=me.side;me.side=Dn,me.needsUpdate=!0,$e(pe,W,Y,De,me,Lt),me.side=Ai,me.needsUpdate=!0,Xt=!0}}Xt===!0&&(P.updateMultisampleRenderTarget(rt),P.updateRenderTargetMipmap(rt))}v.setRenderTarget(dt),v.setClearColor(V,q),zt!==void 0&&(Y.viewport=zt),v.toneMapping=St}function Ae(T,B,W){const Y=B.isScene===!0?B.overrideMaterial:null;for(let k=0,rt=T.length;k<rt;k++){const st=T[k],dt=st.object,St=st.geometry,zt=Y===null?st.material:Y,Xt=st.group;dt.layers.test(W.layers)&&$e(dt,B,W,St,zt,Xt)}}function $e(T,B,W,Y,k,rt){T.onBeforeRender(v,B,W,Y,k,rt),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(v,B,W,Y,T,rt),k.transparent===!0&&k.side===Oi&&k.forceSinglePass===!1?(k.side=Dn,k.needsUpdate=!0,v.renderBufferDirect(W,B,Y,k,T,rt),k.side=vr,k.needsUpdate=!0,v.renderBufferDirect(W,B,Y,k,T,rt),k.side=Oi):v.renderBufferDirect(W,B,Y,k,T,rt),T.onAfterRender(v,B,W,Y,k,rt)}function Me(T,B,W){B.isScene!==!0&&(B=ee);const Y=Pt.get(T),k=m.state.lights,rt=m.state.shadowsArray,st=k.state.version,dt=ut.getParameters(T,k.state,rt,B,W),St=ut.getProgramCacheKey(dt);let zt=Y.programs;Y.environment=T.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(T.isMeshStandardMaterial?X:b).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,zt===void 0&&(T.addEventListener("dispose",kt),zt=new Map,Y.programs=zt);let Xt=zt.get(St);if(Xt!==void 0){if(Y.currentProgram===Xt&&Y.lightsStateVersion===st)return de(T,dt),Xt}else dt.uniforms=ut.getUniforms(T),T.onBeforeCompile(dt,v),Xt=ut.acquireProgram(dt,St),zt.set(St,Xt),Y.uniforms=dt.uniforms;const Et=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Et.clippingPlanes=it.uniform),de(T,dt),Y.needsLights=mn(T),Y.lightsStateVersion=st,Y.needsLights&&(Et.ambientLightColor.value=k.state.ambient,Et.lightProbe.value=k.state.probe,Et.directionalLights.value=k.state.directional,Et.directionalLightShadows.value=k.state.directionalShadow,Et.spotLights.value=k.state.spot,Et.spotLightShadows.value=k.state.spotShadow,Et.rectAreaLights.value=k.state.rectArea,Et.ltc_1.value=k.state.rectAreaLTC1,Et.ltc_2.value=k.state.rectAreaLTC2,Et.pointLights.value=k.state.point,Et.pointLightShadows.value=k.state.pointShadow,Et.hemisphereLights.value=k.state.hemi,Et.directionalShadowMap.value=k.state.directionalShadowMap,Et.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Et.spotShadowMap.value=k.state.spotShadowMap,Et.spotLightMatrix.value=k.state.spotLightMatrix,Et.spotLightMap.value=k.state.spotLightMap,Et.pointShadowMap.value=k.state.pointShadowMap,Et.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=Xt,Y.uniformsList=null,Xt}function Ee(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=al.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function de(T,B){const W=Pt.get(T);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Un(T,B,W,Y,k){B.isScene!==!0&&(B=ee),P.resetTextureUnits();const rt=B.fog,st=Y.isMeshStandardMaterial?B.environment:null,dt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Zs,St=(Y.isMeshStandardMaterial?X:b).get(Y.envMap||st),zt=Y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Xt=!!W.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Et=!!W.morphAttributes.position,qt=!!W.morphAttributes.normal,ue=!!W.morphAttributes.color;let pe=dr;Y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(pe=v.toneMapping);const De=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,me=De!==void 0?De.length:0,Lt=Pt.get(Y),Ai=m.state.lights;if(et===!0&&(_t===!0||T!==S)){const Zn=T===S&&Y.id===M;it.setState(Y,T,Zn)}let ge=!1;Y.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Ai.state.version||Lt.outputColorSpace!==dt||k.isBatchedMesh&&Lt.batching===!1||!k.isBatchedMesh&&Lt.batching===!0||k.isBatchedMesh&&Lt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Lt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Lt.instancing===!1||!k.isInstancedMesh&&Lt.instancing===!0||k.isSkinnedMesh&&Lt.skinning===!1||!k.isSkinnedMesh&&Lt.skinning===!0||k.isInstancedMesh&&Lt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Lt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Lt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Lt.instancingMorph===!1&&k.morphTexture!==null||Lt.envMap!==St||Y.fog===!0&&Lt.fog!==rt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==it.numPlanes||Lt.numIntersection!==it.numIntersection)||Lt.vertexAlphas!==zt||Lt.vertexTangents!==Xt||Lt.morphTargets!==Et||Lt.morphNormals!==qt||Lt.morphColors!==ue||Lt.toneMapping!==pe||Lt.morphTargetsCount!==me)&&(ge=!0):(ge=!0,Lt.__version=Y.version);let ai=Lt.currentProgram;ge===!0&&(ai=Me(Y,B,k));let ts=!1,Nn=!1,Qs=!1;const Pe=ai.getUniforms(),pi=Lt.uniforms;if(Tt.useProgram(ai.program)&&(ts=!0,Nn=!0,Qs=!0),Y.id!==M&&(M=Y.id,Nn=!0),ts||S!==T){Tt.buffers.depth.getReversed()?(nt.copy(T.projectionMatrix),J_(nt),j_(nt),Pe.setValue(O,"projectionMatrix",nt)):Pe.setValue(O,"projectionMatrix",T.projectionMatrix),Pe.setValue(O,"viewMatrix",T.matrixWorldInverse);const $i=Pe.map.cameraPosition;$i!==void 0&&$i.setValue(O,Rt.setFromMatrixPosition(T.matrixWorld)),G.logarithmicDepthBuffer&&Pe.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Pe.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,Nn=!0,Qs=!0)}if(k.isSkinnedMesh){Pe.setOptional(O,k,"bindMatrix"),Pe.setOptional(O,k,"bindMatrixInverse");const Zn=k.skeleton;Zn&&(Zn.boneTexture===null&&Zn.computeBoneTexture(),Pe.setValue(O,"boneTexture",Zn.boneTexture,P))}k.isBatchedMesh&&(Pe.setOptional(O,k,"batchingTexture"),Pe.setValue(O,"batchingTexture",k._matricesTexture,P),Pe.setOptional(O,k,"batchingIdTexture"),Pe.setValue(O,"batchingIdTexture",k._indirectTexture,P),Pe.setOptional(O,k,"batchingColorTexture"),k._colorsTexture!==null&&Pe.setValue(O,"batchingColorTexture",k._colorsTexture,P));const to=W.morphAttributes;if((to.position!==void 0||to.normal!==void 0||to.color!==void 0)&&It.update(k,W,ai),(Nn||Lt.receiveShadow!==k.receiveShadow)&&(Lt.receiveShadow=k.receiveShadow,Pe.setValue(O,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(pi.envMap.value=St,pi.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(pi.envMapIntensity.value=B.environmentIntensity),Nn&&(Pe.setValue(O,"toneMappingExposure",v.toneMappingExposure),Lt.needsLights&&Re(pi,Qs),rt&&Y.fog===!0&&at.refreshFogUniforms(pi,rt),at.refreshMaterialUniforms(pi,Y,H,z,m.state.transmissionRenderTarget[T.id]),al.upload(O,Ee(Lt),pi,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(al.upload(O,Ee(Lt),pi,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Pe.setValue(O,"center",k.center),Pe.setValue(O,"modelViewMatrix",k.modelViewMatrix),Pe.setValue(O,"normalMatrix",k.normalMatrix),Pe.setValue(O,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Zn=Y.uniformsGroups;for(let $i=0,Zi=Zn.length;$i<Zi;$i++){const Xu=Zn[$i];I.update(Xu,ai),I.bind(Xu,ai)}}return ai}function Re(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function mn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,B,W){Pt.get(T.texture).__webglTexture=B,Pt.get(T.depthTexture).__webglTexture=W;const Y=Pt.get(T);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=W===void 0,Y.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const W=Pt.get(T);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,W=0){R=T,w=B,E=W;let Y=!0,k=null,rt=!1,st=!1;if(T){const St=Pt.get(T);if(St.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(O.FRAMEBUFFER,null),Y=!1;else if(St.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(St.__hasExternalTextures)P.rebindTextures(T,Pt.get(T.texture).__webglTexture,Pt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Et=T.depthTexture;if(St.__boundDepthTexture!==Et){if(Et!==null&&Pt.has(Et)&&(T.width!==Et.image.width||T.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}const zt=T.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(st=!0);const Xt=Pt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xt[B])?k=Xt[B][W]:k=Xt[B],rt=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?k=Pt.get(T).__webglMultisampledFramebuffer:Array.isArray(Xt)?k=Xt[W]:k=Xt,C.copy(T.viewport),L.copy(T.scissor),N=T.scissorTest}else C.copy(ht).multiplyScalar(H).floor(),L.copy(Ut).multiplyScalar(H).floor(),N=te;if(Tt.bindFramebuffer(O.FRAMEBUFFER,k)&&Y&&Tt.drawBuffers(T,k),Tt.viewport(C),Tt.scissor(L),Tt.setScissorTest(N),rt){const St=Pt.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,St.__webglTexture,W)}else if(st){const St=Pt.get(T.texture),zt=B||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,St.__webglTexture,W||0,zt)}M=-1},this.readRenderTargetPixels=function(T,B,W,Y,k,rt,st){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=Pt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&st!==void 0&&(dt=dt[st]),dt){Tt.bindFramebuffer(O.FRAMEBUFFER,dt);try{const St=T.texture,zt=St.format,Xt=St.type;if(!G.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!G.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Y&&W>=0&&W<=T.height-k&&O.readPixels(B,W,Y,k,Ot.convert(zt),Ot.convert(Xt),rt)}finally{const St=R!==null?Pt.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(O.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(T,B,W,Y,k,rt,st){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=Pt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&st!==void 0&&(dt=dt[st]),dt){const St=T.texture,zt=St.format,Xt=St.type;if(!G.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!G.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-Y&&W>=0&&W<=T.height-k){Tt.bindFramebuffer(O.FRAMEBUFFER,dt);const Et=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Et),O.bufferData(O.PIXEL_PACK_BUFFER,rt.byteLength,O.STREAM_READ),O.readPixels(B,W,Y,k,Ot.convert(zt),Ot.convert(Xt),0);const qt=R!==null?Pt.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(O.FRAMEBUFFER,qt);const ue=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await K_(O,ue,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Et),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,rt),O.deleteBuffer(Et),O.deleteSync(ue),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,B=null,W=0){T.isTexture!==!0&&(xo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);const Y=Math.pow(2,-W),k=Math.floor(T.image.width*Y),rt=Math.floor(T.image.height*Y),st=B!==null?B.x:0,dt=B!==null?B.y:0;P.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,st,dt,k,rt),Tt.unbindTexture()},this.copyTextureToTexture=function(T,B,W=null,Y=null,k=0){T.isTexture!==!0&&(xo("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,T=arguments[1],B=arguments[2],k=arguments[3]||0,W=null);let rt,st,dt,St,zt,Xt,Et,qt,ue;const pe=T.isCompressedTexture?T.mipmaps[k]:T.image;W!==null?(rt=W.max.x-W.min.x,st=W.max.y-W.min.y,dt=W.isBox3?W.max.z-W.min.z:1,St=W.min.x,zt=W.min.y,Xt=W.isBox3?W.min.z:0):(rt=pe.width,st=pe.height,dt=pe.depth||1,St=0,zt=0,Xt=0),Y!==null?(Et=Y.x,qt=Y.y,ue=Y.z):(Et=0,qt=0,ue=0);const De=Ot.convert(B.format),me=Ot.convert(B.type);let Lt;B.isData3DTexture?(P.setTexture3D(B,0),Lt=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(P.setTexture2DArray(B,0),Lt=O.TEXTURE_2D_ARRAY):(P.setTexture2D(B,0),Lt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);const Ai=O.getParameter(O.UNPACK_ROW_LENGTH),ge=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ai=O.getParameter(O.UNPACK_SKIP_PIXELS),ts=O.getParameter(O.UNPACK_SKIP_ROWS),Nn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,pe.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pe.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,St),O.pixelStorei(O.UNPACK_SKIP_ROWS,zt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Xt);const Qs=T.isDataArrayTexture||T.isData3DTexture,Pe=B.isDataArrayTexture||B.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const pi=Pt.get(T),to=Pt.get(B),Zn=Pt.get(pi.__renderTarget),$i=Pt.get(to.__renderTarget);Tt.bindFramebuffer(O.READ_FRAMEBUFFER,Zn.__webglFramebuffer),Tt.bindFramebuffer(O.DRAW_FRAMEBUFFER,$i.__webglFramebuffer);for(let Zi=0;Zi<dt;Zi++)Qs&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pt.get(T).__webglTexture,k,Xt+Zi),T.isDepthTexture?(Pe&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pt.get(B).__webglTexture,k,ue+Zi),O.blitFramebuffer(St,zt,rt,st,Et,qt,rt,st,O.DEPTH_BUFFER_BIT,O.NEAREST)):Pe?O.copyTexSubImage3D(Lt,k,Et,qt,ue+Zi,St,zt,rt,st):O.copyTexSubImage2D(Lt,k,Et,qt,ue+Zi,St,zt,rt,st);Tt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Pe?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Lt,k,Et,qt,ue,rt,st,dt,De,me,pe.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(Lt,k,Et,qt,ue,rt,st,dt,De,pe.data):O.texSubImage3D(Lt,k,Et,qt,ue,rt,st,dt,De,me,pe):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,k,Et,qt,rt,st,De,me,pe.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,k,Et,qt,pe.width,pe.height,De,pe.data):O.texSubImage2D(O.TEXTURE_2D,k,Et,qt,rt,st,De,me,pe);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ai),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ge),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ai),O.pixelStorei(O.UNPACK_SKIP_ROWS,ts),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Nn),k===0&&B.generateMipmaps&&O.generateMipmap(Lt),Tt.unbindTexture()},this.copyTextureToTexture3D=function(T,B,W=null,Y=null,k=0){return T.isTexture!==!0&&(xo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,Y=arguments[1]||null,T=arguments[2],B=arguments[3],k=arguments[4]||0),xo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,B,W,Y,k)},this.initRenderTarget=function(T){Pt.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),Tt.unbindTexture()},this.resetState=function(){w=0,E=0,R=null,Tt.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}}class Uu{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new $t(t),this.density=e}clone(){return new Uu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Nu extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Sl extends Qr{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ml=new U,El=new U,Pd=new Ce,co=new Cu,Fa=new ta,wc=new U,Ld=new U;class Jm extends nn{constructor(t=new qe,e=new Sl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Ml.fromBufferAttribute(e,i-1),El.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ml.distanceTo(El);t.setAttribute("lineDistance",new fe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(i),Fa.radius+=s,t.ray.intersectsSphere(Fa)===!1)return;Pd.copy(i).invert(),co.copy(t.ray).applyMatrix4(Pd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=c){const m=h.getX(_),x=h.getX(_+1),y=Oa(this,t,co,l,m,x);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(d),m=Oa(this,t,co,l,_,p);m&&e.push(m)}}else{const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=c){const m=Oa(this,t,co,l,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=Oa(this,t,co,l,g-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Oa(r,t,e,n,i,s){const o=r.geometry.attributes.position;if(Ml.fromBufferAttribute(o,i),El.fromBufferAttribute(o,s),e.distanceSqToSegment(Ml,El,wc,Ld)>n)return;wc.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(wc);if(!(l<t.near||l>t.far))return{distance:l,point:Ld.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Dd=new U,Id=new U;class jm extends Jm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Dd.fromBufferAttribute(e,i),Id.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Dd.distanceTo(Id);t.setAttribute("lineDistance",new fe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qm extends Qr{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ud=new Ce,Xh=new Cu,Ba=new ta,ka=new U;class oE extends nn{constructor(t=new qe,e=new Qm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(i),Ba.radius+=s,t.ray.intersectsSphere(Ba)===!1)return;Ud.copy(i).invert(),Xh.copy(t.ray).applyMatrix4(Ud);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=u,_=d;g<_;g++){const p=c.getX(g);ka.fromBufferAttribute(f,p),Nd(ka,p,l,i,t,e,this)}}else{const u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=u,_=d;g<_;g++)ka.fromBufferAttribute(f,g),Nd(ka,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Nd(r,t,e,n,i,s,o){const a=Xh.distanceSqToPoint(r);if(a<e){const l=new U;Xh.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class wi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],u=n[i+1]-h,d=(o-h)/u;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new xt:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new U,i=[],s=[],o=[],a=new U,l=new Ce;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new U)}s[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(un(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(un(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fu extends wi{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new xt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class aE extends Fu{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ou(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,f){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,i(o,a,u,d)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const za=new U,Ac=new Ou,Cc=new Ou,Rc=new Ou;class lE extends wi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new U){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(za.subVectors(i[0],i[1]).add(i[0]),c=za);const f=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(za.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=za),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Ac.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,_,p),Cc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,_,p),Rc.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(Ac.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Cc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Rc.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Ac.calc(l),Cc.calc(l),Rc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new U().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Fd(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function cE(r,t){const e=1-r;return e*e*t}function hE(r,t){return 2*(1-r)*r*t}function uE(r,t){return r*r*t}function Io(r,t,e,n){return cE(r,t)+hE(r,e)+uE(r,n)}function fE(r,t){const e=1-r;return e*e*e*t}function dE(r,t){const e=1-r;return 3*e*e*r*t}function pE(r,t){return 3*(1-r)*r*r*t}function mE(r,t){return r*r*r*t}function Uo(r,t,e,n,i){return fE(r,t)+dE(r,e)+pE(r,n)+mE(r,i)}class tg extends wi{constructor(t=new xt,e=new xt,n=new xt,i=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new xt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Uo(t,i.x,s.x,o.x,a.x),Uo(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gE extends wi{constructor(t=new U,e=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new U){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Uo(t,i.x,s.x,o.x,a.x),Uo(t,i.y,s.y,o.y,a.y),Uo(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class eg extends wi{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _E extends wi{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ng extends wi{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Io(t,i.x,s.x,o.x),Io(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vE extends wi{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Io(t,i.x,s.x,o.x),Io(t,i.y,s.y,o.y),Io(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ig extends wi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(Fd(a,l.x,c.x,h.x,f.x),Fd(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new xt().fromArray(i))}return this}}var Od=Object.freeze({__proto__:null,ArcCurve:aE,CatmullRomCurve3:lE,CubicBezierCurve:tg,CubicBezierCurve3:gE,EllipseCurve:Fu,LineCurve:eg,LineCurve3:_E,QuadraticBezierCurve:ng,QuadraticBezierCurve3:vE,SplineCurve:ig});class xE extends wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Od[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Od[i.type]().fromJSON(i))}return this}}class Yh extends xE{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new eg(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new ng(this.currentPoint.clone(),new xt(t,e),new xt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new tg(this.currentPoint.clone(),new xt(t,e),new xt(n,i),new xt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ig(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new Fu(t,e,n,i,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class _i extends qe{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],f=[],u=[],d=[];let g=0;const _=[],p=n/2;let m=0;x(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new fe(f,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(d,2));function x(){const v=new U,A=new U;let w=0;const E=(e-t)/n;for(let R=0;R<=s;R++){const M=[],S=R/s,C=S*(e-t)+t;for(let L=0;L<=i;L++){const N=L/i,V=N*l+a,q=Math.sin(V),F=Math.cos(V);A.x=C*q,A.y=-S*n+p,A.z=C*F,f.push(A.x,A.y,A.z),v.set(q,E,F).normalize(),u.push(v.x,v.y,v.z),d.push(N,1-S),M.push(g++)}_.push(M)}for(let R=0;R<i;R++)for(let M=0;M<s;M++){const S=_[M][R],C=_[M+1][R],L=_[M+1][R+1],N=_[M][R+1];(t>0||M!==0)&&(h.push(S,C,N),w+=3),(e>0||M!==s-1)&&(h.push(C,L,N),w+=3)}c.addGroup(m,w,0),m+=w}function y(v){const A=g,w=new xt,E=new U;let R=0;const M=v===!0?t:e,S=v===!0?1:-1;for(let L=1;L<=i;L++)f.push(0,p*S,0),u.push(0,S,0),d.push(.5,.5),g++;const C=g;for(let L=0;L<=i;L++){const V=L/i*l+a,q=Math.cos(V),F=Math.sin(V);E.x=M*F,E.y=p*S,E.z=M*q,f.push(E.x,E.y,E.z),u.push(0,S,0),w.x=q*.5+.5,w.y=F*.5*S+.5,d.push(w.x,w.y),g++}for(let L=0;L<i;L++){const N=A+L,V=C+L;v===!0?h.push(V,V+1,N):h.push(V+1,V,N),R+=3}c.addGroup(m,R,v===!0?1:2),m+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bu extends _i{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Bu(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ul extends qe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new fe(s,3)),this.setAttribute("normal",new fe(s.slice(),3)),this.setAttribute("uv",new fe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new U,v=new U,A=new U;for(let w=0;w<e.length;w+=3)d(e[w+0],y),d(e[w+1],v),d(e[w+2],A),l(y,v,A,x)}function l(x,y,v,A){const w=A+1,E=[];for(let R=0;R<=w;R++){E[R]=[];const M=x.clone().lerp(v,R/w),S=y.clone().lerp(v,R/w),C=w-R;for(let L=0;L<=C;L++)L===0&&R===w?E[R][L]=M:E[R][L]=M.clone().lerp(S,L/C)}for(let R=0;R<w;R++)for(let M=0;M<2*(w-R)-1;M++){const S=Math.floor(M/2);M%2===0?(u(E[R][S+1]),u(E[R+1][S]),u(E[R][S])):(u(E[R][S+1]),u(E[R+1][S+1]),u(E[R+1][S]))}}function c(x){const y=new U;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(x),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function h(){const x=new U;for(let y=0;y<s.length;y+=3){x.x=s[y+0],x.y=s[y+1],x.z=s[y+2];const v=p(x)/2/Math.PI+.5,A=m(x)/Math.PI+.5;o.push(v,1-A)}g(),f()}function f(){for(let x=0;x<o.length;x+=6){const y=o[x+0],v=o[x+2],A=o[x+4],w=Math.max(y,v,A),E=Math.min(y,v,A);w>.9&&E<.1&&(y<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),A<.2&&(o[x+4]+=1))}}function u(x){s.push(x.x,x.y,x.z)}function d(x,y){const v=x*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){const x=new U,y=new U,v=new U,A=new U,w=new xt,E=new xt,R=new xt;for(let M=0,S=0;M<s.length;M+=9,S+=6){x.set(s[M+0],s[M+1],s[M+2]),y.set(s[M+3],s[M+4],s[M+5]),v.set(s[M+6],s[M+7],s[M+8]),w.set(o[S+0],o[S+1]),E.set(o[S+2],o[S+3]),R.set(o[S+4],o[S+5]),A.copy(x).add(y).add(v).divideScalar(3);const C=p(A);_(w,S+0,x,C),_(E,S+2,y,C),_(R,S+4,v,C)}}function _(x,y,v,A){A<0&&x.x===1&&(o[y]=x.x-1),v.x===0&&v.z===0&&(o[y]=A/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ul(t.vertices,t.indices,t.radius,t.details)}}class ku extends Ul{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ku(t.radius,t.detail)}}const Ha=new U,Ga=new U,Pc=new U,Va=new ei;class yE extends qe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),s=Math.cos(ol*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),u={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:p,c:m}=Va;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),Va.getNormal(Pc),f[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,f[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,f[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let x=0;x<3;x++){const y=(x+1)%3,v=f[x],A=f[y],w=Va[h[x]],E=Va[h[y]],R=`${v}_${A}`,M=`${A}_${v}`;M in u&&u[M]?(Pc.dot(u[M].normal)<=s&&(d.push(w.x,w.y,w.z),d.push(E.x,E.y,E.z)),u[M]=null):R in u||(u[R]={index0:c[x],index1:c[y],normal:Pc.clone()})}}for(const g in u)if(u[g]){const{index0:_,index1:p}=u[g];Ha.fromBufferAttribute(a,_),Ga.fromBufferAttribute(a,p),d.push(Ha.x,Ha.y,Ha.z),d.push(Ga.x,Ga.y,Ga.z)}this.setAttribute("position",new fe(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class rg extends Yh{constructor(t){super(t),this.uuid=Js(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Yh().fromJSON(i))}return this}}const SE={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=sg(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,f,u,d;if(n&&(s=wE(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(let g=e;g<i;g+=e)f=r[g],u=r[g+1],f<a&&(a=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return $o(s,o,e,a,l,d,0),o}};function sg(r,t,e,n,i){let s,o;if(i===OE(r,t,e,n)>0)for(s=t;s<e;s+=n)o=Bd(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=Bd(s,r[s],r[s+1],o);return o&&Nl(o,o.next)&&(Ko(o),o=o.next),o}function Jr(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Nl(e,e.next)||Fe(e.prev,e,e.next)===0)){if(Ko(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function $o(r,t,e,n,i,s,o){if(!r)return;!o&&s&&LE(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?EE(r,n,i,s):ME(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),Ko(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=bE(Jr(r),t,e),$o(r,t,e,n,i,s,2)):o===2&&TE(r,t,e,n,i,s):$o(Jr(r),t,e,n,i,s,1);break}}}function ME(r){const t=r.prev,e=r,n=r.next;if(Fe(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,u=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&Ts(i,a,s,l,o,c,g.x,g.y)&&Fe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function EE(r,t,e,n){const i=r.prev,s=r,o=r.next;if(Fe(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,f=s.y,u=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<f?h<u?h:u:f<u?f:u,_=a>l?a>c?a:c:l>c?l:c,p=h>f?h>u?h:u:f>u?f:u,m=qh(d,g,t,e,n),x=qh(_,p,t,e,n);let y=r.prevZ,v=r.nextZ;for(;y&&y.z>=m&&v&&v.z<=x;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&Ts(a,h,l,f,c,u,y.x,y.y)&&Fe(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&Ts(a,h,l,f,c,u,v.x,v.y)&&Fe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&Ts(a,h,l,f,c,u,y.x,y.y)&&Fe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&Ts(a,h,l,f,c,u,v.x,v.y)&&Fe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function bE(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Nl(i,s)&&og(i,n,n.next,s)&&Zo(i,s)&&Zo(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Ko(n),Ko(n.next),n=r=s),n=n.next}while(n!==r);return Jr(n)}function TE(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&UE(o,a)){let l=ag(o,a);o=Jr(o,o.next),l=Jr(l,l.next),$o(o,t,e,n,i,s,0),$o(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function wE(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=sg(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(IE(c));for(i.sort(AE),s=0;s<i.length;s++)e=CE(i[s],e);return e}function AE(r,t){return r.x-t.x}function CE(r,t){const e=RE(r,t);if(!e)return t;const n=ag(e,r);return Jr(n,n.next),Jr(e,e.next)}function RE(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=s&&u>n&&(n=u,i=e.x<e.next.x?e:e.next,u===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,f;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&Ts(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(s-e.x),Zo(e,r)&&(f<h||f===h&&(e.x>i.x||e.x===i.x&&PE(i,e)))&&(i=e,h=f)),e=e.next;while(e!==a);return i}function PE(r,t){return Fe(r.prev,r,t.prev)<0&&Fe(t.next,r,r.next)<0}function LE(r,t,e,n){let i=r;do i.z===0&&(i.z=qh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,DE(i)}function DE(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function qh(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function IE(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Ts(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function UE(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!NE(r,t)&&(Zo(r,t)&&Zo(t,r)&&FE(r,t)&&(Fe(r.prev,r,t.prev)||Fe(r,t.prev,t))||Nl(r,t)&&Fe(r.prev,r,r.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Nl(r,t){return r.x===t.x&&r.y===t.y}function og(r,t,e,n){const i=Xa(Fe(r,t,e)),s=Xa(Fe(r,t,n)),o=Xa(Fe(e,n,r)),a=Xa(Fe(e,n,t));return!!(i!==s&&o!==a||i===0&&Wa(r,e,t)||s===0&&Wa(r,n,t)||o===0&&Wa(e,r,n)||a===0&&Wa(e,t,n))}function Wa(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Xa(r){return r>0?1:r<0?-1:0}function NE(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&og(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Zo(r,t){return Fe(r.prev,r,r.next)<0?Fe(r,t,r.next)>=0&&Fe(r,r.prev,t)>=0:Fe(r,t,r.prev)<0||Fe(r,r.next,t)<0}function FE(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function ag(r,t){const e=new $h(r.i,r.x,r.y),n=new $h(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Bd(r,t,e,n){const i=new $h(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ko(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function $h(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function OE(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class No{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return No.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];kd(t),zd(n,t);let o=t.length;e.forEach(kd);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,zd(n,e[l]);const a=SE.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function kd(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function zd(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class zu extends Ul{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new zu(t.radius,t.detail)}}class bl extends qe{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let f=t;const u=(e-t)/i,d=new U,g=new xt;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){const m=s+p/n*o;d.x=f*Math.cos(m),d.y=f*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}f+=u}for(let _=0;_<i;_++){const p=_*(n+1);for(let m=0;m<n;m++){const x=m+p,y=x,v=x+n+1,A=x+n+2,w=x+1;a.push(y,v,w),a.push(v,A,w)}}this.setIndex(a),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Hu extends qe{constructor(t=new rg([new xt(0,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new fe(i,3)),this.setAttribute("normal",new fe(s,3)),this.setAttribute("uv",new fe(o,2));function c(h){const f=i.length/3,u=h.extractPoints(e);let d=u.shape;const g=u.holes;No.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){const x=g[p];No.isClockWise(x)===!0&&(g[p]=x.reverse())}const _=No.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){const x=g[p];d=d.concat(x)}for(let p=0,m=d.length;p<m;p++){const x=d[p];i.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let p=0,m=_.length;p<m;p++){const x=_[p],y=x[0]+f,v=x[1]+f,A=x[2]+f;n.push(y,v,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return BE(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const o=e[t.shapes[i]];n.push(o)}return new Hu(n,t.curveSegments)}}function BE(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class Tl extends qe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],f=new U,u=new U,d=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const x=[],y=m/n;let v=0;m===0&&o===0?v=.5/e:m===n&&l===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const w=A/e;f.x=-t*Math.cos(i+w*s)*Math.sin(o+y*a),f.y=t*Math.cos(o+y*a),f.z=t*Math.sin(i+w*s)*Math.sin(o+y*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),p.push(w+v,1-y),x.push(c++)}h.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){const y=h[m][x+1],v=h[m][x],A=h[m+1][x],w=h[m+1][x+1];(m!==0||o>0)&&d.push(y,v,w),(m!==n-1||l<Math.PI)&&d.push(v,A,w)}this.setIndex(d),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class wl extends qe{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new U,f=new U,u=new U;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*s,p=d/n*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(_),f.y=(t+e*Math.cos(p))*Math.sin(_),f.z=e*Math.sin(p),a.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,p=(i+1)*(d-1)+g-1,m=(i+1)*(d-1)+g,x=(i+1)*d+g;o.push(_,p,x),o.push(p,m,x)}this.setIndex(o),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class kE extends qe{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new U,s=new U;if(t.index!==null){const o=t.attributes.position,a=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const f=l[c],u=f.start,d=f.count;for(let g=u,_=u+d;g<_;g+=3)for(let p=0;p<3;p++){const m=a.getX(g+p),x=a.getX(g+(p+1)%3);i.fromBufferAttribute(o,m),s.fromBufferAttribute(o,x),Hd(i,s,n)===!0&&(e.push(i.x,i.y,i.z),e.push(s.x,s.y,s.z))}}}else{const o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,f=3*a+(c+1)%3;i.fromBufferAttribute(o,h),s.fromBufferAttribute(o,f),Hd(i,s,n)===!0&&(e.push(i.x,i.y,i.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new fe(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Hd(r,t,e){const n=`${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}class Bi extends Qr{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dm,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Gd={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class zE{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const HE=new zE;class Gu{constructor(t){this.manager=t!==void 0?t:HE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Gu.DEFAULT_MATERIAL_NAME="__DEFAULT";class GE extends Gu{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Gd.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=qo("img");function l(){h(),Gd.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(f){h(),i&&i(f),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class VE extends Gu{constructor(t){super(t)}load(t,e,n,i){const s=new bn,o=new GE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Vu extends nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Lc=new Ce,Vd=new U,Wd=new U;class lg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ru,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Vd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vd),Wd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wd),e.updateMatrixWorld(),Lc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Xd=new Ce,ho=new U,Dc=new U;class WE extends lg{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xt(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ho.setFromMatrixPosition(t.matrixWorld),n.position.copy(ho),Dc.copy(n.position),Dc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Dc),n.updateMatrixWorld(),i.makeTranslation(-ho.x,-ho.y,-ho.z),Xd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xd)}}class Yd extends Vu{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new WE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class XE extends lg{constructor(){super(new Pu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cg extends Vu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new XE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class hg extends Vu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=qd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function qd(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Su}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Su);const YE={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Fl{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const qE=new Pu(-1,1,1,-1,0,1);class $E extends qe{constructor(){super(),this.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new fe([0,2,0,0,2,0],2))}}const ZE=new $E;class KE{constructor(t){this._mesh=new Ht(ZE,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,qE)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class ug extends Fl{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof oi?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Vm.clone(t.uniforms),this.material=new oi({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new KE(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class $d extends Fl{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class JE extends Fl{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class jE{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new xt);this._width=n.width,this._height=n.height,e=new xr(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$s}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ug(YE),this.copyPass.material.blending=Vi,this.clock=new Wu}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}$d!==void 0&&(o instanceof $d?n=!0:o instanceof JE&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new xt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class QE extends Fl{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new $t}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const Zd={uniforms:{uLightDir:{value:new U(3,5,4).normalize()},uColor:{value:new $t(16053493)},uRimColor:{value:new $t(16720435)}},vertexShader:`
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
  `},t1={uniforms:{tDiffuse:{value:null},tDepth:{value:null},uTime:{value:0},uMouse:{value:new xt(.5,.5)},uVelocity:{value:0},uExplosion:{value:0},uExplosionCenter:{value:new xt(.5,.5)},uResolution:{value:new xt(1920,1080)}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    #include <packing>
    uniform sampler2D tDiffuse;
    uniform sampler2D tDepth;
    uniform float uTime;
    uniform vec2 uMouse;
    uniform float uVelocity;
    uniform float uExplosion;
    uniform vec2 uExplosionCenter;
    uniform vec2 uResolution;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;

      // 1. Shockwave displacement from click-triggered ink explosion
      if (uExplosion > 0.001) {
        float dist = distance(uv, uExplosionCenter);
        float wave = sin((dist - uExplosion * 1.4) * 25.0);
        float shock = smoothstep(0.18, 0.0, abs(dist - uExplosion * 1.1)) * wave * 0.06 * (1.0 - uExplosion);
        uv += normalize(uv - uExplosionCenter) * shock;
      }

      // 2. Velocity-based Chromatic Aberration (RGB Split)
      float split = 0.0035 * (1.0 + uVelocity * 16.0);
      vec4 colR = texture2D(tDiffuse, uv + vec2(split, 0.0));
      vec4 colG = texture2D(tDiffuse, uv);
      vec4 colB = texture2D(tDiffuse, uv - vec2(split, 0.0));
      vec4 baseColor = vec4(colR.r, colG.g, colB.b, colG.a);

      // 3. Reliable Geometry & Depth Mask
      float depthVal = texture2D(tDepth, uv).r;
      // Foreground 3D elements have depth < 0.970; background wall and sky have depth >= 0.970
      bool isForeground = (depthVal < 0.970) && (colG.a > 0.05);

      // 4. Sobel Edge Detection for Bold Hand-Inked Manga Outlines
      vec2 texel = 1.0 / uResolution;
      vec4 n[9];
      n[0] = texture2D(tDiffuse, uv + vec2(-texel.x, -texel.y));
      n[1] = texture2D(tDiffuse, uv + vec2(0.0, -texel.y));
      n[2] = texture2D(tDiffuse, uv + vec2(texel.x, -texel.y));
      n[3] = texture2D(tDiffuse, uv + vec2(-texel.x, 0.0));
      n[4] = texture2D(tDiffuse, uv);
      n[5] = texture2D(tDiffuse, uv + vec2(texel.x, 0.0));
      n[6] = texture2D(tDiffuse, uv + vec2(-texel.x, texel.y));
      n[7] = texture2D(tDiffuse, uv + vec2(0.0, texel.y));
      n[8] = texture2D(tDiffuse, uv + vec2(texel.x, texel.y));

      vec4 sobelH = n[2] + (2.0 * n[5]) + n[8] - (n[0] + (2.0 * n[3]) + n[6]);
      vec4 sobelV = n[0] + (2.0 * n[1]) + n[2] - (n[6] + (2.0 * n[7]) + n[8]);
      float edge = length(sqrt(sobelH * sobelH + sobelV * sobelV));

      // Calculate surface luminance gradient to orient hatch strokes along surface form
      float luma[9];
      for (int i = 0; i < 9; i++) {
        luma[i] = dot(n[i].rgb, vec3(0.299, 0.587, 0.114));
      }
      float gx = (luma[2] + 2.0 * luma[5] + luma[8]) - (luma[0] + 2.0 * luma[3] + luma[6]);
      float gy = (luma[0] + 2.0 * luma[1] + luma[2]) - (luma[6] + 2.0 * luma[7] + luma[8]);
      float gradMag = length(vec2(gx, gy));
      float brightness = luma[4];

      // Bold ink outline on silhouettes and geometric edges
      if (edge > 0.20 && (isForeground || brightness > 0.06)) {
        baseColor.rgb = mix(baseColor.rgb, vec3(0.01, 0.01, 0.02), 0.95);
      }

      // 5. Directional Organic Cross-Hatching STRICTLY on Foreground 3D Geometry
      // Flat backdrops, background walls and deep voids are strictly excluded
      if (isForeground && gradMag > 0.025 && brightness >= 0.14 && brightness < 0.62) {
        float surfAngle = atan(gy, gx + 0.001);
        float hatchAngle = surfAngle + 0.40;

        vec2 screenPos = gl_FragCoord.xy;
        float wobble = sin(screenPos.y * 0.05) * 2.0 + cos(screenPos.x * 0.04) * 1.4;

        float cosA = cos(hatchAngle);
        float sinA = sin(hatchAngle);
        float rotCoord1 = (screenPos.x + wobble) * cosA - screenPos.y * sinA;

        // Expressive manga pen spacing: 18px between strokes
        float strokeSpacing = 18.0;
        float hatch1 = mod(rotCoord1, strokeSpacing);
        
        // Pen stroke width tapers from shadow into light
        float penWidth = smoothstep(0.60, 0.14, brightness) * 3.2 + 1.2;

        // Single directional ink hatch along surface curvature
        if (hatch1 < penWidth) {
          baseColor.rgb = mix(baseColor.rgb, vec3(0.015, 0.015, 0.025), 0.88);
        }
      }

      // Clean, high-contrast final output: empty background and deep blacks are 100% free of wallpaper grids
      gl_FragColor = vec4(baseColor.rgb, 1.0);
    }
  `};class e1{constructor(){this.ctx=null,this.enabled=!1,this.masterGain=null}init(){if(!this.ctx)try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.28,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination)}catch(t){console.warn("Web Audio not supported",t)}}toggle(){return this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),this.enabled=!this.enabled,this.enabled&&this.playBlueprintUnfold(),this.enabled}playPencilScratch(){if(!this.enabled||!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(1800,t),e.frequency.exponentialRampToValueAtTime(600,t+.07),n.gain.setValueAtTime(.08,t),n.gain.exponentialRampToValueAtTime(.001,t+.07),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.07)}playBlueprintUnfold(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.sampleRate*.25,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let l=0;l<e;l++)i[l]=(Math.random()*2-1)*Math.exp(-l/(e*.4));const s=this.ctx.createBufferSource();s.buffer=n;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(2200,t),o.Q.setValueAtTime(2.5,t);const a=this.ctx.createGain();a.gain.setValueAtTime(.18,t),a.gain.exponentialRampToValueAtTime(.001,t+.25),s.connect(o),o.connect(a),a.connect(this.masterGain),s.start(t)}playCaliperClick(){if(!this.enabled||!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(880,t),e.frequency.exponentialRampToValueAtTime(220,t+.04),n.gain.setValueAtTime(.15,t),n.gain.exponentialRampToValueAtTime(.001,t+.04),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.04)}playStructuralClack(){if(!this.enabled||!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="square",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(45,t+.18),n.gain.setValueAtTime(.2,t),n.gain.exponentialRampToValueAtTime(.001,t+.2),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.2);const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(3200,t),i.frequency.exponentialRampToValueAtTime(1200,t+.05),s.gain.setValueAtTime(.12,t),s.gain.exponentialRampToValueAtTime(.001,t+.06),i.connect(s),s.connect(this.masterGain),i.start(t),i.stop(t+.06)}playAwakening(){if(this.init(),!this.ctx)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.currentTime;[220,277.18,329.63,440].forEach((n,i)=>{const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(n,t),o.gain.setValueAtTime(.001,t),o.gain.linearRampToValueAtTime(.06/(i+1),t+.3),o.gain.exponentialRampToValueAtTime(1e-4,t+1.8),s.connect(o),o.connect(this.masterGain),s.start(t),s.stop(t+1.8)})}}const Be=new e1;class n1{constructor(t){this.canvas=t,this.scene=null,this.camera=null,this.renderer=null,this.composer=null,this.postPass=null,this.rootAssembly=null,this.stage1Group=null,this.stage2Group=null,this.stage3Group=null,this.stage4Group=null,this.stage5Group=null,this.stage6Group=null,this.handGroup=null,this.fingers=[],this.miniPavilion=null,this.explodedProgress=0,this.targetExploded=0,this.isExploded=!1,this.scrollProgress=0,this.targetScrollProgress=0,this.mouse={x:0,y:0,targetX:0,targetY:0,velX:0,velY:0,prevX:0,prevY:0},this.isDragging=!1,this.previousDragPos={x:0,y:0},this.dragRotation={x:0,y:0},this.explosionProgress=0,this.explosionCenter=new xt(.5,.5),this.visualMode="crimson",this.layers={hand:!0,aperture:!0,corridor:!0,studio:!0,perspectiveRays:!0,wireframe:!1},this.clock=new Wu,this.init()}init(){this.scene=new Nu,this.scene.fog=new Uu(592139,.024);const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;this.camera=new Mn(46,t/e,.1,200),this.camera.position.set(1.2,1.4,3.8),this.camera.lookAt(.2,.7,.6),this.renderer=new Iu({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setSize(t,e),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(592139,0),this.composer=new jE(this.renderer);const n=new QE(this.scene,this.camera);n.clearColor=new $t(592139),n.clearAlpha=0,this.composer.addPass(n);const i=new Du(t,e);this.composer.renderTarget2.depthTexture=i,this.postPass=new ug(t1),this.postPass.uniforms.uResolution.value.set(t,e),this.postPass.uniforms.tDepth.value=i,this.composer.addPass(this.postPass);const s=new hg(16777215,.65);this.scene.add(s),this.dirLight=new cg(16777215,1.4),this.dirLight.position.set(8,16,10),this.scene.add(this.dirLight),this.crimsonLight=new Yd(16720435,4,45),this.crimsonLight.position.set(-2,4,3),this.scene.add(this.crimsonLight),this.cyanLight=new Yd(3775958,2.5,35),this.cyanLight.position.set(4,2,-10),this.scene.add(this.cyanLight),this.buildUniverse(),window.addEventListener("resize",()=>this.resize()),window.addEventListener("mousemove",o=>this.onMouseMove(o)),window.addEventListener("mousedown",o=>this.onMouseDown(o)),window.addEventListener("mouseup",()=>{this.isDragging=!1}),this.animate()}resize(){const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.composer.setSize(t,e),this.postPass&&this.postPass.uniforms.uResolution.value.set(t,e)}onMouseMove(t){const e=t.clientX/window.innerWidth*2-1,n=-(t.clientY/window.innerHeight)*2+1;if(this.mouse.velX=Math.abs(t.clientX-this.mouse.prevX)/window.innerWidth,this.mouse.velY=Math.abs(t.clientY-this.mouse.prevY)/window.innerHeight,this.mouse.prevX=t.clientX,this.mouse.prevY=t.clientY,this.mouse.targetX=e,this.mouse.targetY=n,this.postPass&&(this.postPass.uniforms.uMouse.value.set(t.clientX/window.innerWidth,1-t.clientY/window.innerHeight),this.postPass.uniforms.uVelocity.value=this.mouse.velX+this.mouse.velY),this.isDragging){const i=t.clientX-this.previousDragPos.x,s=t.clientY-this.previousDragPos.y;this.dragRotation.y+=i*.006,this.dragRotation.x+=s*.006,this.previousDragPos={x:t.clientX,y:t.clientY}}}onMouseDown(t){this.isDragging=!0,this.previousDragPos={x:t.clientX,y:t.clientY},this.triggerExplosion(t.clientX/window.innerWidth,1-t.clientY/window.innerHeight),Be.playStructuralClack()}triggerExplosion(t=.5,e=.5){if(this.explosionProgress=.01,this.explosionCenter.set(t,e),this.postPass&&this.postPass.uniforms.uExplosionCenter.value.copy(this.explosionCenter),this.particleVelocities)for(let n=0;n<60;n++){const i=Math.floor(Math.random()*(this.particleVelocities.length/3));this.particleVelocities[i*3]+=(Math.random()-.5)*.4,this.particleVelocities[i*3+1]+=(Math.random()-.5)*.4,this.particleVelocities[i*3+2]+=(Math.random()-.5)*.4}}createMangaMaterial(t,e=16720435){return new oi({uniforms:{uLightDir:{value:new U(3,5,4).normalize()},uColor:{value:new $t(t)},uRimColor:{value:new $t(e)},uHatchDensity:{value:26},uTime:{value:0}},vertexShader:Zd.vertexShader,fragmentShader:Zd.fragmentShader})}buildUniverse(){this.rootAssembly=new We,this.scene.add(this.rootAssembly),this.matPaper=new Bi({color:16251903,roughness:.2}),this.matInkDark=new Bi({color:592139,roughness:.3}),this.matCrimson=new Bi({color:16720435,roughness:.25,metalness:.1}),this.matRedVector=new Sl({color:16720435,transparent:!0,opacity:.9,linewidth:2}),this.matCyanVector=new Sl({color:3775958,transparent:!0,opacity:.7}),this.matGold=new Bi({color:15051068,roughness:.3,metalness:.6}),this.stage1Group=new We,this.stage1Group.position.set(0,0,0),this.miniPavilion=new We,this.miniPavilion.position.set(.2,.45,.6);for(let C=0;C<3;C++){const L=new Te(.8-C*.15,.08,.8-C*.15),N=new Ht(L,this.matPaper);N.position.y=C*.08,this.miniPavilion.add(N)}[{x:-.22,z:-.22},{x:.22,z:-.22},{x:-.22,z:.22},{x:.22,z:.22}].forEach(C=>{const L=new Te(.08,.45,.08),N=new Ht(L,this.matInkDark);N.position.set(C.x,.45,C.z),this.miniPavilion.add(N);const V=new Te(.12,.06,.08),q=new Ht(V,this.matCrimson);q.position.set(C.x,.55,C.z),this.miniPavilion.add(q)});const e=new Ht(new Te(.68,.08,.68),this.matPaper);e.position.set(0,.72,0),this.miniPavilion.add(e);const n=new zu(.12,0);this.pavilionCore=new Ht(n,this.createMangaMaterial(16720435,16777215)),this.pavilionCore.position.set(0,.46,0),this.miniPavilion.add(this.pavilionCore),this.stage1Group.add(this.miniPavilion),this.buildArticulatedHand(),this.stage1Group.add(this.handGroup),this.rootAssembly.add(this.stage1Group),this.stage2Group=new We,this.stage2Group.position.set(0,3.2,-6.5);const i=new rg;i.moveTo(-12,-6),i.lineTo(12,-6),i.lineTo(12,10),i.lineTo(-12,10),i.closePath();const s=new Yh;s.absarc(0,1.8,3.8,0,Math.PI*2,!0),i.holes.push(s);const o=new Hu(i),a=new Ht(o,this.matInkDark);this.stage2Group.add(a);const l=new wl(3.85,.09,16,64),c=new Ht(l,this.matCrimson);c.position.set(0,1.8,.05),this.stage2Group.add(c);for(let C=1;C<=3;C++){const L=new bl(C*1.1,C*1.1+.03,48),N=new Ht(L,this.matCyanVector);N.position.set(0,1.8,-.2),this.stage2Group.add(N)}const h=new We;h.position.set(0,-.6,-2.5);const f=new Bu(.8,2.4,12),u=new Ht(f,this.matInkDark);u.position.y=1.2,h.add(u);const d=new Tl(.28,12,12),g=new Ht(d,this.matInkDark);g.position.y=2.6,h.add(g);const _=new Te(.24,.06,.15),p=new Ht(_,this.matCrimson);p.position.set(0,2.6,.22),h.add(p),this.stage2Group.add(h),this.rootAssembly.add(this.stage2Group),this.stage3Group=new We,this.stage3Group.position.set(0,0,-14),[-4,0,4,8].forEach(C=>{const L=new Ht(new Te(.7,6,.7),this.matPaper);L.position.set(-4.5,3,C),this.stage3Group.add(L);const N=new Ht(new Te(.9,.45,.7),this.matCrimson);N.position.set(-4.1,2.4,C),this.stage3Group.add(N);const V=new Ht(new Te(.7,6,.7),this.matPaper);V.position.set(4.5,3,C),this.stage3Group.add(V);const q=new Ht(new Te(.9,.45,.7),this.matCrimson);q.position.set(4.1,2.4,C),this.stage3Group.add(q);const F=new Ht(new Te(9.6,.75,.8),this.matInkDark);F.position.set(0,5.2,C),this.stage3Group.add(F);for(let z=-3;z<=3;z++){const H=new Ht(new Te(1.15,.3,3.8),this.matPaper);H.position.set(z*1.22,5.5,C),this.stage3Group.add(H)}});const x=new U(0,5.5,-12);for(let C=-8;C<=8;C++){const L=new U(C*1.5,0,10),N=new qe().setFromPoints([x,L]),V=new Jm(N,this.matRedVector);this.stage3Group.add(V)}this.rootAssembly.add(this.stage3Group),this.stage4Group=new We,this.stage4Group.position.set(0,0,-26);const y=new Ht(new Te(5.2,.18,3.2),this.matInkDark);y.position.set(0,1.8,0),this.stage4Group.add(y),[{x:-2.3,z:-1.3},{x:2.3,z:-1.3},{x:-2.3,z:1.3},{x:2.3,z:1.3}].forEach(C=>{const L=new Ht(new _i(.08,.1,1.8,12),this.matPaper);L.position.set(C.x,.9,C.z),this.stage4Group.add(L)}),this.artifactSlab=new We,this.artifactSlab.position.set(-1.4,2.05,.2);const A=new Ht(new Te(1.4,.35,1.1),this.matPaper);this.artifactSlab.add(A);for(let C=-1;C<=1;C++){const L=new Ht(new _i(.08,.08,1.15,16),this.matInkDark);L.rotation.x=Math.PI/2,L.position.set(C*.4,0,0),this.artifactSlab.add(L)}this.stage4Group.add(this.artifactSlab),this.artifactMatrix=new We,this.artifactMatrix.position.set(0,2.2,.4);const w=new kE(new Te(.9,.9,.9)),E=new jm(w,this.matRedVector);this.artifactMatrix.add(E),this.stage4Group.add(this.artifactMatrix),this.artifactPoly=new Ht(new ku(.42,0),this.createMangaMaterial(1579035,16720435)),this.artifactPoly.position.set(1.4,2.25,-.2),this.stage4Group.add(this.artifactPoly),this.architectFigure=new We,this.architectFigure.position.set(3.2,0,.2),this.architectFigure.rotation.y=-Math.PI/2.8;const R=new Ht(new _i(.35,.45,2.8,16),this.matInkDark);R.position.y=1.4,this.architectFigure.add(R);const M=new Ht(new Tl(.3,16,16),this.matPaper);M.position.y=3,this.architectFigure.add(M);const S=new Ht(new Te(.28,.08,.2),this.matCrimson);S.position.set(0,3,.22),this.architectFigure.add(S),this.stage4Group.add(this.architectFigure),this.rootAssembly.add(this.stage4Group),this.stage6Group=new We,this.stage6Group.position.set(0,2.5,-36);for(let C=1;C<=5;C++){const L=new bl(C*1.4,C*1.4+.1,8),N=new Ht(L,C%2===0?this.matRedVector:this.matCyanVector);N.rotation.z=C*.25,this.stage6Group.add(N)}this.rootAssembly.add(this.stage6Group),this.createGlobalParticles()}buildArticulatedHand(){this.handGroup=new We;const t=this.createMangaMaterial(16053493,16720435),e=this.createMangaMaterial(592139,16720435),n=new _i(.48,.62,3.2,16);n.rotateZ(Math.PI/12);const i=new Ht(n,t);i.position.set(.65,-1.8,0),this.handGroup.add(i);const s=new wl(.68,.12,12,32);s.rotateX(Math.PI/2.3);const o=new Ht(s,e);o.position.set(.28,-.38,.1),this.handGroup.add(o);const a=new Te(1.05,1.2,.36),l=new Ht(a,t);l.position.set(0,.45,0),this.handGroup.add(l);const c=[{x:-.38,y:1.1,len:.85,rotZ:.15},{x:-.12,y:1.25,len:1,rotZ:.04},{x:.16,y:1.18,len:.92,rotZ:-.05},{x:.4,y:1.02,len:.78,rotZ:-.16}];this.fingers=[],c.forEach(d=>{const g=new We;g.position.set(d.x,.95,0);const _=new _i(.12,.14,d.len*.6,12),p=new Ht(_,t);p.position.y=d.len*.6/2,p.rotation.x=-.45,g.add(p);const m=new _i(.09,.12,d.len*.5,12),x=new Ht(m,t);x.position.set(0,d.len*.56,.22),x.rotation.x=-.7,g.add(x),g.rotation.z=d.rotZ,this.handGroup.add(g),this.fingers.push(g)});const h=new We;h.position.set(-.58,.2,.1);const f=new _i(.13,.16,.72,12),u=new Ht(f,t);u.position.y=.36,u.rotation.z=.62,u.rotation.x=-.35,h.add(u),this.handGroup.add(h),this.handGroup.position.set(.65,1.25,1.4),this.handGroup.rotation.set(-.25,-.65,.1),this.handGroup.scale.set(.85,.85,.85)}createGlobalParticles(){const e=new qe,n=new Float32Array(2200*3),i=new Float32Array(2200*3),s=new Float32Array(2200*3),o=new $t(16720435),a=new $t(3775958),l=new $t(16777215);for(let h=0;h<2200;h++){n[h*3]=(Math.random()-.5)*24,n[h*3+1]=(Math.random()-.5)*16+3,n[h*3+2]=-Math.random()*42,i[h*3]=(Math.random()-.5)*.012,i[h*3+1]=(Math.random()-.5)*.012,i[h*3+2]=(Math.random()-.5)*.015;const f=Math.random();let u=l;f>.6?u=o:f>.35&&(u=a),s[h*3]=u.r,s[h*3+1]=u.g,s[h*3+2]=u.b}e.setAttribute("position",new si(n,3)),e.setAttribute("color",new si(s,3));const c=new Qm({size:.16,vertexColors:!0,transparent:!0,opacity:.88});this.particles=new oE(e,c),this.particleVelocities=i,this.scene.add(this.particles)}updateScrollProgress(t){this.targetScrollProgress=Math.max(0,Math.min(1,t))}toggleExploded(){return this.isExploded=!this.isExploded,this.targetExploded=this.isExploded?1:0,Be.playStructuralClack(),this.isExploded}toggleLayer(t){return t in this.layers?(this.layers[t]=!this.layers[t],Be.playCaliperClick(),t==="hand"&&this.stage1Group&&(this.stage1Group.visible=this.layers.hand),t==="aperture"&&this.stage2Group&&(this.stage2Group.visible=this.layers.aperture),t==="corridor"&&this.stage3Group&&(this.stage3Group.visible=this.layers.corridor),t==="studio"&&this.stage4Group&&(this.stage4Group.visible=this.layers.studio),t==="wireframe"&&this.setWireframeMode(this.layers.wireframe),this.layers[t]):!1}setWireframeMode(t){this.layers.wireframe=t,this.rootAssembly.traverse(e=>{e.isMesh&&e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.wireframe=t):e.material.wireframe=t)})}cycleVisualMode(){const t=["crimson","blueprint","wireframe"],e=(t.indexOf(this.visualMode)+1)%t.length;return this.visualMode=t[e],Be.playPencilScratch(),this.visualMode==="crimson"?(this.setWireframeMode(!1),this.matPaper.color.setHex(16251903),this.matInkDark.color.setHex(592139),this.matCrimson.color.setHex(16720435),this.crimsonLight.color.setHex(16720435)):this.visualMode==="blueprint"?(this.setWireframeMode(!1),this.matPaper.color.setHex(15070463),this.matInkDark.color.setHex(1522779),this.matCrimson.color.setHex(3775958),this.crimsonLight.color.setHex(3775958)):(this.setWireframeMode(!0),this.matCrimson.color.setHex(16755200),this.crimsonLight.color.setHex(16755200)),this.visualMode}resetCamera(){this.targetScrollProgress=0,this.scrollProgress=0,this.targetExploded=0,this.isExploded=!1,this.dragRotation.x=0,this.dragRotation.y=0,Be.playBlueprintUnfold()}animate(){requestAnimationFrame(this.animate.bind(this)),this.clock.getDelta();const t=this.clock.getElapsedTime();this.mouse.x+=(this.mouse.targetX-this.mouse.x)*.08,this.mouse.y+=(this.mouse.targetY-this.mouse.y)*.08,this.scrollProgress+=(this.targetScrollProgress-this.scrollProgress)*.08;const e=this.scrollProgress;let n=new U(1.2,1.4,3.8),i=new U(.2,.7,.6);if(e<.18){const s=e/.18;n.set(1.2-s*.4,1.4+s*.3,3.8-s*.8),i.set(.2,.7,.6)}else if(e<.36){const s=(e-.18)/.18;n.set(.8-s*.8,1.7+s*1.8,3-s*4.5),i.set(0,3.6,-6.5)}else if(e<.55){const s=(e-.36)/.19;n.set(0,3.5-s*.8,-1.5-s*12),i.set(0,2.7,-22)}else if(e<.75){const s=(e-.55)/.2;n.set(s*3.8,2.7-s*.4,-13.5-s*8.5),i.set(.5,2,-26)}else if(e<.9){const s=(e-.75)/.15;n.set(3.8-s*2.6,2.3+s*.4,-22-s*3.5),i.set(0,2.1,-26)}else{const s=(e-.9)/.1;n.set(1.2-s*1.2,2.7,-25.5-s*10),i.set(0,2.5,-38)}if(n.x+=this.mouse.x*.45,n.y+=this.mouse.y*.35,this.camera.position.lerp(n,.09),this.camera.lookAt(i),this.handGroup){const s=-.65+this.mouse.x*.45,o=-.25-this.mouse.y*.35;this.handGroup.rotation.y+=(s-this.handGroup.rotation.y)*.1,this.handGroup.rotation.x+=(o-this.handGroup.rotation.x)*.1,this.fingers.forEach((a,l)=>{const c=Math.sin(t*2.5+l*.8)*.08+this.mouse.y*.2;a.rotation.x=-.25+c})}if(this.pavilionCore){this.pavilionCore.rotation.y+=.02,this.pavilionCore.rotation.x+=.01;const s=1+Math.sin(t*3)*.15;this.pavilionCore.scale.set(s,s,s)}if(this.artifactMatrix&&(this.artifactMatrix.rotation.y+=.015,this.artifactMatrix.rotation.z+=.01),this.artifactPoly&&(this.artifactPoly.rotation.y+=.018,this.artifactPoly.rotation.x+=.012),this.explodedProgress+=(this.targetExploded-this.explodedProgress)*.08,this.stage3Group&&(this.stage3Group.position.y=this.explodedProgress*2.5),this.particles){const s=this.particles.geometry.attributes.position.array;for(let o=0;o<s.length/3;o++)s[o*3+1]+=this.particleVelocities[o*3+1],s[o*3+1]<-4&&(s[o*3+1]=16),s[o*3+1]>16&&(s[o*3+1]=-4);this.particles.geometry.attributes.position.needsUpdate=!0}this.explosionProgress>0&&(this.explosionProgress+=.035,this.explosionProgress>1&&(this.explosionProgress=0),this.postPass&&(this.postPass.uniforms.uExplosion.value=this.explosionProgress)),this.postPass&&(this.postPass.uniforms.uTime.value=t),this.composer.render()}}class i1{constructor(t){this.canvas=t,this.scene=null,this.camera=null,this.renderer=null,this.mesh=null,this.mouse={x:.5,y:.5,targetX:.5,targetY:.5,velX:0,velY:0},this.targetHover=.45,this.clock=new Wu,this.init()}init(){this.scene=new Nu;const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||500;this.camera=new Mn(45,t/e,.1,100),this.camera.position.z=4.8,this.renderer=new Iu({canvas:this.canvas,antialias:!0,alpha:!0}),this.renderer.setSize(t,e),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.setupGalleryMesh(t,e),this.canvas.addEventListener("mousemove",n=>{const i=this.canvas.getBoundingClientRect(),s=(n.clientX-i.left)/i.width,o=1-(n.clientY-i.top)/i.height;this.mouse.velX=Math.abs(s-this.mouse.targetX),this.mouse.velY=Math.abs(o-this.mouse.targetY),this.mouse.targetX=s,this.mouse.targetY=o}),window.addEventListener("resize",this.onResize.bind(this)),this.animate()}setupGalleryMesh(t,e){const n=new VE,i=n.load("./images/manga-awakening.jpg"),s=n.load("./images/architectural-perspective.jpg");i.generateMipmaps=!0,s.generateMipmaps=!0;const o=new ea(6.6,3.8,80,80);this.uniforms={uTex1:{value:s},uTex2:{value:i},uTransition:{value:0},uMouse:{value:new xt(.5,.5)},uHover:{value:.45},uVelocity:{value:0},uTime:{value:0},uResolution:{value:new xt(t,e)}};const a=`
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
    `;this.mat=new oi({uniforms:this.uniforms,vertexShader:a,fragmentShader:l}),this.mesh=new Ht(o,this.mat),this.scene.add(this.mesh)}setTransition(t){this.uniforms&&(this.uniforms.uTransition.value=Math.max(0,Math.min(1,t)))}setHover(t){this.targetHover=t?1:.45}onResize(){const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||500;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.uniforms&&this.uniforms.uResolution.value.set(t,e)}animate(){requestAnimationFrame(this.animate.bind(this));const t=this.clock.getElapsedTime();if(this.mouse.x+=(this.mouse.targetX-this.mouse.x)*.1,this.mouse.y+=(this.mouse.targetY-this.mouse.y)*.1,this.uniforms){this.uniforms.uTime.value=t,this.uniforms.uMouse.value.set(this.mouse.x,this.mouse.y);const e=this.uniforms.uHover.value;this.uniforms.uHover.value+=(this.targetHover-e)*.08,this.uniforms.uVelocity.value+=(this.mouse.velX+this.mouse.velY-this.uniforms.uVelocity.value)*.1,this.mouse.velX*=.9,this.mouse.velY*=.9}this.mesh&&(this.mesh.rotation.y=(this.mouse.x-.5)*.28,this.mesh.rotation.x=-(this.mouse.y-.5)*.22),this.renderer.render(this.scene,this.camera)}}class r1{constructor(){this.initPrecastVisualizer(),this.initBeamSolverVisualizer(),this.initAtlasVisualizer(),this.initSq3rVisualizer()}initPrecastVisualizer(){const t=document.getElementById("canvas-precast-interactive");if(!t)return;const e=new Nu,n=new Mn(40,t.clientWidth/t.clientHeight,.1,100);n.position.set(4.5,3.8,5.5),n.lookAt(0,.8,0);const i=new Iu({canvas:t,antialias:!0,alpha:!0});i.setSize(t.clientWidth,t.clientHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2));const s=new hg(16777215,.8);e.add(s);const o=new cg(16777215,1.2);o.position.set(5,8,5),e.add(o);const a=new We;e.add(a);const l=new Bi({color:1319213,roughness:.3}),c=new Ht(new Te(.8,4,.8),l);c.position.y=1,a.add(c);const h=new Bi({color:16720435,roughness:.3}),f=new Ht(new Te(1.2,.5,.8),h);f.position.set(.2,1.2,0),a.add(f);const u=new Bi({color:1522779,roughness:.3}),d=new Ht(new Te(1,.8,3.4),u);d.position.set(.7,1.85,0),a.add(d);const g=new Bi({color:16720435,roughness:.1}),_=new Ht(new Te(.7,.08,.7),g);_.position.set(.45,1.48,0),a.add(_);const p=new We,m=new Bi({color:16251903,roughness:.2});for(let C=-1;C<=1;C++){const L=new Ht(new Te(1.8,.35,.95),m);L.position.set(1.9,2.1,C*1.05),p.add(L)}a.add(p);const x=new yE(new Te(1.8,.35,3.2)),y=new jm(x,new Sl({color:3775958}));y.position.set(1.9,2.1,0),p.add(y);let v=!1,A={x:0,y:0},w={x:.25,y:-.65},E=!1,R=0;t.addEventListener("mousedown",C=>{v=!0,A={x:C.clientX,y:C.clientY}}),window.addEventListener("mouseup",()=>{v=!1}),t.addEventListener("mousemove",C=>{if(!v)return;const L=C.clientX-A.x,N=C.clientY-A.y;w.y+=L*.01,w.x+=N*.01,A={x:C.clientX,y:C.clientY}});const M=document.getElementById("btn-precast-explode");M==null||M.addEventListener("click",C=>{C.stopPropagation(),E=!E,Be.playStructuralClack(),M.textContent=E?"🔄 RESTORE ASSEMBLY":"💥 EXPLODE SLABS"});function S(){requestAnimationFrame(S),v||(w.y+=.003),a.rotation.y+=(w.y-a.rotation.y)*.08,a.rotation.x+=(w.x-a.rotation.x)*.08,R+=((E?1:0)-R)*.08,p.position.y=R*1.4,p.position.x=R*.6,d.position.y=1.85+R*.5,i.render(e,n)}S()}initBeamSolverVisualizer(){const t=document.getElementById("canvas-beam-solver");if(!t)return;const e=t.getContext("2d"),n=10;let i=4,s=50,o=!1;const a=document.getElementById("beam-load-slider");a==null||a.addEventListener("input",h=>{i=parseFloat(h.target.value),c()}),t.addEventListener("mousedown",h=>{o=!0,l(h)}),window.addEventListener("mouseup",()=>{o=!1}),t.addEventListener("mousemove",h=>{o&&l(h)});function l(h){const f=t.getBoundingClientRect(),u=(h.clientX-f.left)/f.width;i=Math.max(.5,Math.min(9.5,u*n)),a&&(a.value=i.toFixed(1)),c()}function c(){e.clearRect(0,0,t.width,t.height);const h=t.width;t.height;const f=n-i,u=s*f/n,d=s*i/n,g=s*i*f/n,_=document.getElementById("beam-formula-readout");_&&(_.innerHTML=`P = ${s.toFixed(0)} kN @ x = ${i.toFixed(1)}m | R_A = ${u.toFixed(1)} kN | R_B = ${d.toFixed(1)} kN | <strong>M_max = ${g.toFixed(1)} kN·m</strong>`);const p=75,m=60,x=h-60,y=x-m;e.strokeStyle="#FFFFFF",e.lineWidth=4,e.beginPath(),e.moveTo(m,p),e.lineTo(x,p),e.stroke(),e.fillStyle="#399DD6",e.beginPath(),e.moveTo(m,p),e.lineTo(m-12,p+20),e.lineTo(m+12,p+20),e.closePath(),e.fill(),e.beginPath(),e.moveTo(x,p),e.lineTo(x-12,p+16),e.lineTo(x+12,p+16),e.closePath(),e.fill(),e.beginPath(),e.arc(x-6,p+20,3,0,Math.PI*2),e.arc(x+6,p+20,3,0,Math.PI*2),e.fill();const v=m+i/n*y;e.strokeStyle="#FF2233",e.fillStyle="#FF2233",e.lineWidth=3,e.beginPath(),e.moveTo(v,p-45),e.lineTo(v,p-4),e.stroke(),e.beginPath(),e.moveTo(v-6,p-14),e.lineTo(v,p-2),e.lineTo(v+6,p-14),e.closePath(),e.fill(),e.font='bold 12px "Fira Code", monospace',e.fillText(`P = ${s}kN`,v-25,p-50);const A=160;e.strokeStyle="#399DD6",e.lineWidth=1.5,e.beginPath(),e.moveTo(m,A),e.lineTo(x,A),e.stroke();const w=Math.min(65,g/130*65);e.fillStyle="rgba(57, 157, 214, 0.25)",e.strokeStyle="#399DD6",e.lineWidth=2.5,e.beginPath(),e.moveTo(m,A),e.lineTo(v,A+w),e.lineTo(x,A),e.closePath(),e.fill(),e.stroke(),e.fillStyle="#399DD6",e.fillText(`BMD: M_max = +${g.toFixed(1)} kN·m`,v+10,A+w);const E=240;e.strokeStyle="#FF2233",e.lineWidth=2.5,e.setLineDash([4,2]),e.beginPath(),e.moveTo(m,E);for(let R=0;R<=y;R+=4){const M=R/y*n;let S=0;M<=i?S=s*f*M*(n*n-f*f-M*M)/(6*n):S=s*i*(n-M)*(2*n*M-M*M-i*i)/(6*n);const C=E+S/80*45;e.lineTo(m+R,C)}e.stroke(),e.setLineDash([]),e.fillStyle="#FF2233",e.fillText("ELASTIC DEFLECTION v(x)",m+10,E+35)}c()}initAtlasVisualizer(){const t=document.querySelectorAll(".atlas-node"),e=document.getElementById("atlas-coord-readout");t.forEach(n=>{n.addEventListener("mouseenter",()=>{Be.playPencilScratch();const i=n.getAttribute("data-city"),s=n.getAttribute("data-elev"),o=n.getAttribute("data-coord");e&&(e.innerHTML=`SELECTED NODE: <strong class="text-crimson">${i}</strong> | ELEVATION: ${s} | COORDINATES: ${o}`)})})}initSq3rVisualizer(){const t=document.getElementById("sq3r-timer");if(!t)return;let e=3600;setInterval(()=>{e--,e<0&&(e=3600);const n=Math.floor(e/60),i=e%60;t.textContent=`${n.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`},1e3)}}class s1{constructor(t){this.container=document.getElementById(t),this.currentDrawing="section-precast",this.scale=1,this.pan={x:0,y:0},this.isPanning=!1,this.startPan={x:0,y:0},this.is3DIsometric=!1,this.layers={dimensions:!0,grid:!0,rebar:!0,annotations:!0},this.drawings={"section-precast":{title:"STRUCTURAL SECTION 1:50 — HOLLOW-CORE HC-250 ON INVERTED-T BEAM",ref:"DWG-S01 // EUROCODE 2 & PCI 8TH ED.",scaleLabel:"SCALE 1:50 @ A2",type:"section",svg:this.getSectionSvg()},"framing-plan":{title:"MODULAR FRAMING PLAN 1:100 — 9.0m × 6.0m PRECAST GRID",ref:"DWG-S02 // LEVEL 02 STRUCTURAL",scaleLabel:"SCALE 1:100 @ A2",type:"plan",svg:this.getPlanSvg()},"elevation-corbel":{title:"PRECAST COLUMN CORBEL ELEVATION 1:50 — BEARING GEOMETRY",ref:"DWG-E03 // COLUMN GRID LINE B",scaleLabel:"SCALE 1:50 @ A2",type:"elevation",svg:this.getElevationSvg()},"stair-detail":{title:"PRECAST STAIR FLIGHT & LANDING RECESS DETAIL 1:25",ref:"DWG-D04 // CIRCULATION CORE",scaleLabel:"SCALE 1:25 @ A2",type:"detail",svg:this.getStairSvg()}},this.init()}init(){this.container&&(this.render(),this.attachEvents())}render(){const t=this.drawings[this.currentDrawing];this.container.innerHTML=`
      <div id="dv-main-frame" class="drawing-viewer-frame border-4 border-crimson bg-ink-deep rounded relative overflow-hidden shadow-crimson-lg flex flex-col h-[620px]">
        
        <!-- Top Drawing Toolbar -->
        <div class="viewer-toolbar bg-ink-slate border-b-2 border-crimson px-4 py-3 flex flex-wrap items-center justify-between gap-3 z-10 font-fira text-xs">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-crimson inline-block animate-ping"></span>
            <span class="font-black text-white uppercase tracking-wider">${t.ref}</span>
            <span class="text-crimson hidden sm:inline">•</span>
            <span class="text-sky font-bold hidden sm:inline">${t.title}</span>
          </div>

          <!-- Controls: Zoom, Pan, 3D Morph & Fullscreen -->
          <div class="flex items-center gap-2">
            <button id="btn-dv-zoom-in" class="manga-btn px-2.5 py-1 bg-ink-deep text-white border border-azure rounded hover:bg-azure hover:text-ink-deep font-bold" title="Zoom In">+</button>
            <span id="dv-scale-text" class="px-2 py-1 text-[11px] font-bold text-white bg-ink-deep rounded border border-ink-slate">${Math.round(this.scale*100)}%</span>
            <button id="btn-dv-zoom-out" class="manga-btn px-2.5 py-1 bg-ink-deep text-white border border-azure rounded hover:bg-azure hover:text-ink-deep font-bold" title="Zoom Out">-</button>
            <button id="btn-dv-reset" class="manga-btn px-3 py-1 bg-ink-deep text-neutral-300 border border-neutral-600 rounded text-[11px] hover:text-white" title="Reset View">RESET</button>
            <button id="btn-dv-3d" class="manga-btn px-3 py-1 ${this.is3DIsometric?"bg-crimson text-white":"bg-ink-deep text-sky border-azure"} rounded text-[11px] font-bold" title="3D Isometric Mode">
              ${this.is3DIsometric?"⚡ 3D ISOMETRIC: ON":"📐 3D ISOMETRIC"}
            </button>
          </div>
        </div>

        <!-- Layer Toggles Strip -->
        <div class="bg-ink-deep border-b border-crimson/40 px-4 py-1.5 flex flex-wrap items-center justify-between gap-2 z-10 font-fira text-[11px]">
          <div class="flex items-center gap-2">
            <span class="text-neutral-400 font-bold">LAYERS:</span>
            <button class="dv-layer-btn px-2 py-0.5 rounded border border-crimson font-bold ${this.layers.dimensions?"bg-crimson text-white":"bg-ink-slate text-neutral-400"}" data-layer="dimensions">DIMENSIONS (90mm)</button>
            <button class="dv-layer-btn px-2 py-0.5 rounded border border-azure font-bold ${this.layers.grid?"bg-azure text-ink-deep":"bg-ink-slate text-neutral-400"}" data-layer="grid">AXIS GRID</button>
            <button class="dv-layer-btn px-2 py-0.5 rounded border border-gold font-bold ${this.layers.rebar?"bg-gold text-ink-deep":"bg-ink-slate text-neutral-400"}" data-layer="rebar">REBAR & MESH</button>
            <button class="dv-layer-btn px-2 py-0.5 rounded border border-white font-bold ${this.layers.annotations?"bg-white text-ink-deep":"bg-ink-slate text-neutral-400"}" data-layer="annotations">ANNOTATIONS</button>
          </div>
          <div class="text-neutral-400 font-bold hidden md:inline">
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
          <div class="absolute bottom-3 right-3 pointer-events-none bg-ink-deep/90 border border-crimson px-3 py-1.5 rounded font-fira text-[11px] text-white shadow-brutal-sm">
            <span>PCI 8TH ED. & EN 1992-1-1</span> • <span class="text-crimson font-black">VERIFIED NOMINAL</span>
          </div>
        </div>

        <!-- Bottom Selector Tabs: Plan, Section, Elevation & Detail -->
        <div class="bg-ink-slate border-t-2 border-crimson px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-3 z-10 font-fira text-xs">
          <div class="flex flex-wrap items-center gap-2">
            <button class="dv-tab-btn manga-btn px-3 py-1.5 rounded text-[11px] font-bold ${this.currentDrawing==="section-precast"?"manga-btn-crimson":"bg-ink-deep text-white border-azure"}" data-drawing="section-precast">1. SECTION 1:50</button>
            <button class="dv-tab-btn manga-btn px-3 py-1.5 rounded text-[11px] font-bold ${this.currentDrawing==="framing-plan"?"manga-btn-crimson":"bg-ink-deep text-white border-azure"}" data-drawing="framing-plan">2. FRAMING PLAN 1:100</button>
            <button class="dv-tab-btn manga-btn px-3 py-1.5 rounded text-[11px] font-bold ${this.currentDrawing==="elevation-corbel"?"manga-btn-crimson":"bg-ink-deep text-white border-azure"}" data-drawing="elevation-corbel">3. CORBEL ELEVATION 1:50</button>
            <button class="dv-tab-btn manga-btn px-3 py-1.5 rounded text-[11px] font-bold ${this.currentDrawing==="stair-detail"?"manga-btn-crimson":"bg-ink-deep text-white border-azure"}" data-drawing="stair-detail">4. STAIR RECESS 1:25</button>
          </div>

          <div class="text-[11px] text-neutral-300 font-fira flex items-center gap-3">
            <span>${t.scaleLabel}</span>
            <span class="text-crimson font-black">● LIVE AUDIT ACTIVE</span>
          </div>
        </div>

      </div>
    `}attachEvents(){var s,o,a,l;const t=document.getElementById("dv-viewport"),e=document.getElementById("dv-canvas"),n=document.getElementById("dv-scale-text"),i=()=>{e&&(e.style.transform=`translate(${this.pan.x}px, ${this.pan.y}px) scale(${this.scale}) ${this.is3DIsometric?"rotateX(55deg) rotateZ(-40deg) skewX(-10deg)":""}`),n&&(n.textContent=`${Math.round(this.scale*100)}%`)};t==null||t.addEventListener("mousedown",c=>{this.isPanning=!0,this.startPan={x:c.clientX-this.pan.x,y:c.clientY-this.pan.y}}),window.addEventListener("mousemove",c=>{this.isPanning&&(this.pan.x=c.clientX-this.startPan.x,this.pan.y=c.clientY-this.startPan.y,i())}),window.addEventListener("mouseup",()=>{this.isPanning=!1}),t==null||t.addEventListener("wheel",c=>{c.preventDefault();const h=c.deltaY<0?.12:-.12;this.scale=Math.max(.4,Math.min(3.2,this.scale+h)),Be.playCaliperClick(),i()},{passive:!1}),(s=document.getElementById("btn-dv-zoom-in"))==null||s.addEventListener("click",()=>{this.scale=Math.min(3.2,this.scale+.2),Be.playCaliperClick(),i()}),(o=document.getElementById("btn-dv-zoom-out"))==null||o.addEventListener("click",()=>{this.scale=Math.max(.4,this.scale-.2),Be.playCaliperClick(),i()}),(a=document.getElementById("btn-dv-reset"))==null||a.addEventListener("click",()=>{this.scale=1,this.pan={x:0,y:0},this.is3DIsometric=!1,Be.playBlueprintUnfold(),i();const c=document.getElementById("btn-dv-3d");c&&(c.className="manga-btn px-3 py-1 bg-ink-deep text-sky border-azure rounded text-[11px] font-bold",c.innerHTML="📐 3D ISOMETRIC")}),(l=document.getElementById("btn-dv-3d"))==null||l.addEventListener("click",()=>{this.is3DIsometric=!this.is3DIsometric,Be.playStructuralClack(),i();const c=document.getElementById("btn-dv-3d");c&&(c.className=this.is3DIsometric?"manga-btn manga-btn-crimson px-3 py-1 rounded text-[11px] font-bold":"manga-btn px-3 py-1 bg-ink-deep text-sky border-azure rounded text-[11px] font-bold",c.innerHTML=this.is3DIsometric?"⚡ 3D ISOMETRIC: ON":"📐 3D ISOMETRIC")}),document.querySelectorAll(".dv-tab-btn").forEach(c=>{c.addEventListener("click",()=>{const h=c.getAttribute("data-drawing");h&&this.drawings[h]&&(this.currentDrawing=h,Be.playBlueprintUnfold(),this.render(),this.attachEvents())})}),document.querySelectorAll(".dv-layer-btn").forEach(c=>{c.addEventListener("click",()=>{const h=c.getAttribute("data-layer");h&&h in this.layers&&(this.layers[h]=!this.layers[h],Be.playPencilScratch(),this.updateLayerStyles())})})}updateLayerStyles(){document.querySelectorAll(".dv-layer-btn").forEach(e=>{const n=e.getAttribute("data-layer");if(n){const i=this.layers[n];e.classList.toggle("opacity-50",!i),e.classList.toggle("line-through",!i)}});const t=document.getElementById("dv-canvas");t&&(t.querySelectorAll(".layer-dimensions").forEach(e=>e.style.display=this.layers.dimensions?"block":"none"),t.querySelectorAll(".layer-grid").forEach(e=>e.style.display=this.layers.grid?"block":"none"),t.querySelectorAll(".layer-rebar").forEach(e=>e.style.display=this.layers.rebar?"block":"none"),t.querySelectorAll(".layer-annotations").forEach(e=>e.style.display=this.layers.annotations?"block":"none"))}getSectionSvg(){return`
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
    `}}const Ic=[{id:"precast-bim",title:"PRECAST BIM & COMPUTATIONAL STRUCTURAL SUITE",subtitle:"Revit API Automation • Hollow-Core Slab Layouts • Structural Corbels",category:"ARCHITECTURE & BIM",badge:"ENGINEERING SUITE",status:"DOCUMENTED CAPABILITY",tools:["Autodesk Revit API","pyRevit","Python","PCI Design Manual","Eurocode 2"],highlight:"Algorithmic placement of precast floor systems, inverted-T ledge beams, and corbel calculations inside strict Revit API Transactions.",metrics:[{label:"STANDARD",value:"PCI / EN 1992"},{label:"ELEMENT TRACKING",value:"100% Unique Marks"},{label:"UNIT CONVERSION",value:"304.8 mm/ft"},{label:"AUTOMATION",value:"Revit Transactions"}],chapters:{ch1_idea:"In conventional architectural-structural coordination, modeling hundreds of precast hollow-core slabs, inverted-T beams, and beam-to-column corbels is labor-intensive and prone to bearing-length errors. The idea was to create an automated computational bridge in Revit that calculates bearings and places parametric elements algorithmically.",ch2_challenge:"Precast elements require strict bearing minimums (typically 75mm on masonry, 60mm on steel, 90mm on concrete ledges). Web integrity must be preserved when transverse slab cuts occur, and all geometry modifications must run inside verified database Transactions without corrupting model worksets.",ch3_blueprint:"Architectural floor loops and column grids are extracted as boundary vectors. The algorithm determines optimal span directions, divides floor envelopes into modular 1200mm hollow-core widths, and generates bearing ledges on supporting inverted-T and L-shaped beams.",ch4_engineering:"Implemented verified structural calculations for inverted-T beam ledges based on PCI Handbook equations (punching shear, cantilever bending, hanger steel tension) and corbel shear-friction under vertical and horizontal restrained creep forces.",ch5_build:"Built using Python and pyRevit against the Autodesk Revit API. The script iterates boundary curves, instantiates structural framing and floor families, binds shared parameters for piece marks, and checks clash clearances.",ch6_result:"Dramatically reduces modeling time from hours to seconds for multi-story precast frame assemblies, guarantees code-compliant ledge bearing widths, and produces automated shop drawing schedules with piece mark IDs.",ch7_next:"theory-of-structures"}},{id:"theory-of-structures",title:"THEORY OF STRUCTURES MASTERY LAB",subtitle:"Interactive Structural Analysis & Determinacy Engine",category:"COMPUTATIONAL ENGINEERING",badge:"LAB & SOLVERS",status:"PRODUCTION CODEBASE",tools:["JavaScript (ES6+)","KaTeX Math Engine","Canvas Graphics","HTML5"],highlight:"Interactive analytical platform computing determinate & indeterminate beams, virtual work, slope deflection, and moment distribution.",repoUrl:"https://github.com/dagiyosi-pixel/theory-of-structures-mastery-lab",metrics:[{label:"METHODS",value:"7 Core Modules"},{label:"ACCURACY",value:"Exact Symbolic/Math"},{label:"EQUATIONS",value:"KaTeX Rendered"},{label:"SOLVER",value:"Real-Time Matrix"}],chapters:{ch1_idea:"Structural engineering students and practitioners often struggle with the conceptual leap between abstract differential equations and physical beam bending. The Mastery Lab was built to turn complex structural theory into an intuitive, real-time graphical calculator.",ch2_challenge:"Indeterminate structures require multi-degree-of-freedom matrix solutions (Consistent Deformation, Three Moment Equation, Slope Deflection, and Hardy Cross Moment Distribution) with step-by-step intermediate checks and KaTeX equation formatting.",ch3_blueprint:"Designed as an analytical workbook: input beam span lengths, support conditions (fixed, pinned, roller), and loading types (UDL, point load, applied moment), producing continuous Bending Moment Diagrams (BMD) and Shear Force Diagrams (SFD).",ch4_engineering:"Formulated exact stiffness matrices: [K]{u} = {P}, conjugate beam rotations, and virtual work integrals ($\\int \\frac{M m}{EI} dx$) with automated integration table lookups.",ch5_build:"Engineered in vanilla JavaScript for maximum speed without framework overhead, utilizing KaTeX for LaTeX formula rendering, custom canvas graphing for BMD/SFD curves, and offline local caching.",ch6_result:"A self-contained engineering laboratory solving 7 major structural methods, providing step-by-step derivations, distractor diagnostics, and interactive deformation plots.",ch7_next:"ethiopia-curriculum"}},{id:"ethiopia-curriculum",title:"ETHIOPIAN NATIONAL CURRICULUM PLATFORM (SQ3R)",subtitle:"Grade 7 & 8 Examination Mastery & Ministry Simulator",category:"EDUCATIONAL TECHNOLOGY",badge:"FLAGSHIP APP",status:"DEPLOYED PWA",tools:["Progressive Web App","HTML5 Canvas (1200x840)","Web Audio API","LocalStorage"],highlight:"Authentic, offline-first study and timed examination platform based on the SQ3R method, aligned with the FDRE Ministry of Education CBA.",liveUrl:"https://dagiyosi-pixel.github.io/ethiopia-curriculum-sq3r-platform/",repoUrl:"https://github.com/dagiyosi-pixel/ethiopia-curriculum-sq3r-platform",metrics:[{label:"CURRICULUM UNITS",value:"96 Units"},{label:"SUBTOPICS",value:"184 Subtopics"},{label:"CBA QUESTIONS",value:"577+ Verified Qs"},{label:"MASTERY GATE",value:"Strict 80%"}],chapters:{ch1_idea:"Middle school students preparing for Ethiopian national examinations often lack access to reliable internet, comprehensive textbooks, or personalized exam hall practice. The idea: engineer a 100% offline-first PWA implementing the proven SQ3R study cycle.",ch2_challenge:"Packaging 96 complete units across 6 subjects (Math, Science, Social Studies, English, Citizenship, IT) with 577+ verified questions while keeping payload size tiny and running smoothly on low-cost Android phones without internet.",ch3_blueprint:"Structured information architecture: 1) Survey (Syllabus glance), 2) Question (Diagnostic checkpoints), 3) Read (MoE textbook archive), 4) Recite (3D Leitner flip flashcards), and 5) Review (Timed Ministry Exam Hall Simulator).",ch4_engineering:"Psychometric scoring engine with zero false inflation: calculating realistic national exam prediction curves, distractor autopsy logs, and automated A4 1-page formula sheet generation.",ch5_build:"Client-side PWA architecture with Service Worker asset caching, high-resolution HTML5 Canvas generator drawing the official FDRE MoE crest and honors certificate with 1-click HD PNG export, and Web Audio sound feedback.",ch6_result:"Empowered students with a zero-data, accessible learning tool that tracks individual mastery, multi-account progress for shared family devices, and instant Telegram honors challenge sharing.",ch7_next:"ethiopia-360"}},{id:"ethiopia-360",title:"ETHIOPIA//360 — COMMUNITY ATLAS",subtitle:"Geographic, Cultural & Spatial Visual Explorer",category:"SPATIAL COMPUTING & GIS",badge:"DIGITAL ATLAS",status:"PRODUCTION REPOSITORY",tools:["JavaScript","Modern CSS","SVG Spatial Mapping","Geo Data"],highlight:"Interactive digital atlas exploring the geographic, architectural, and historical topology of Ethiopia.",repoUrl:"https://github.com/dagiyosi-pixel/ethiopia-360",metrics:[{label:"REGIONS",value:"All Regional States"},{label:"TOPOLOGY",value:"Rift Valley to Highlands"},{label:"MAPPING",value:"Interactive Vector SVG"},{label:"CULTURE",value:"Heritage & Architecture"}],chapters:{ch1_idea:"Ethiopia possesses extraordinary geological, archaeological, and architectural diversity (from the monolithic rock churches of Lalibela to the Great Rift Valley). ETHIOPIA//360 was conceived as an interactive digital atlas celebrating this heritage.",ch2_challenge:"Presenting multi-layered geographic, cultural, and architectural data in an engaging, visual way without heavy, slow GIS software dependencies.",ch3_blueprint:"Created an interactive vector map interface with fluid region-by-region drill-down, synchronized architectural dossiers, and elevation cross-sections.",ch4_engineering:"Optimized vector coordinates, coordinate projection algorithms, and lightweight spatial metadata querying.",ch5_build:"Built using semantic HTML5, SVG path interaction, custom animations, and responsive typography.",ch6_result:"A clean, responsive interactive digital showcase of Ethiopian topography, cultural monuments, and architectural history.",ch7_next:"amt-exam"}},{id:"amt-exam",title:"AMT EXAM PREPARATION PLATFORM",subtitle:"Adaptive Diagnostic Assessment Engine",category:"PRODUCT DESIGN & MOBILE",badge:"EXAM PLATFORM",status:"DOCUMENTED APPLICATION",tools:["Mobile-First UI","JavaScript","LocalStorage","Web Audio"],highlight:"High-retention assessment engine with timed diagnostic question banks, performance analytics, and rapid active recall.",repoUrl:"https://github.com/dagiyosi-pixel/amt-exam-app",metrics:[{label:"ASSESSMENT",value:"Adaptive Timed Tests"},{label:"INTERFACE",value:"Thumb-Friendly Mobile"},{label:"FEEDBACK",value:"Instant Explanations"},{label:"STORAGE",value:"Offline Device State"}],chapters:{ch1_idea:"Exam candidates require rapid, low-friction practice tests that isolate knowledge gaps immediately after every question rather than waiting until the end.",ch2_challenge:"Designing an intuitive, thumb-friendly mobile interface with zero distractions and instant visual feedback on error patterns.",ch3_blueprint:"Streamlined single-screen question flow with an interactive question palette, flag-for-review tags, and detailed distractor explanations.",ch4_engineering:"Scoring algorithms weighting question difficulty and tracking speed-per-question to build time-management stamina.",ch5_build:"Responsive modern web application optimized for smartphones and offline local storage.",ch6_result:"Proven study companion allowing candidates to rapidly drill weak topics and track progress toward target scores.",ch7_next:"manga-noir"}},{id:"manga-noir",title:"MANGA-NOIR WEBGL SHADER LAB",subtitle:"Real-Time 3D Cel-Shading & Graphic Novel Shaders",category:"CREATIVE 3D & SHADERS",badge:"EXPERIMENTAL LAB",status:"ACTIVE 3D ENGINE",tools:["Three.js","GLSL Shaders","GSAP 3","Lenis Scroll","Web Audio API"],highlight:"GPU-accelerated 3D engine rendering real-time manga hatching, toon rim-lighting, and interactive particle dynamics.",liveUrl:"https://dagiyosi-pixel.github.io",repoUrl:"https://github.com/dagiyosi-pixel/dagiyosi-pixel.github.io",metrics:[{label:"FRAME RATE",value:"60+ FPS Native"},{label:"SHADERS",value:"Custom GLSL Cel/Hatch"},{label:"PARTICLES",value:"1,800+ Reactive"},{label:"SOUND",value:"Procedural Web Audio"}],chapters:{ch1_idea:"Inspired by the high-impact graphic storytelling of contemporary manga and the interactive creative web development of Samana Studio. The mission: build an authentic, interactive 3D manga experience running directly in the browser.",ch2_challenge:"Simulating traditional ink cross-hatching and cel-shaded screentones on complex 3D meshes at native 60fps without heavy raster textures.",ch3_blueprint:"Constructed a custom GLSL pipeline where surface normal vectors calculate light luminance, procedurally generating diagonal crosshatch patterns in dark zones and electric rim-light accents in highlights.",ch4_engineering:"Vertex & fragment shaders (`MangaHatchShader`) computing screen-space UV coordinates, smooth stepped tone ramps, and inertial mouse tracking.",ch5_build:"Integrated with Three.js, GSAP ScrollTrigger, and Lenis momentum scrolling. Features an articulated 3D manga hand and procedural sound synthesizer.",ch6_result:"An award-winning caliber creative coding showcase that demonstrates the convergence of digital art, 3D technology, and storytelling.",ch7_next:"precast-bim"}}];class o1{constructor(){this.modal=document.getElementById("case-study-modal"),this.content=document.getElementById("case-study-content"),this.closeBtn=document.getElementById("btn-close-case-study"),this.currentProjectId=null,this.init()}init(){var t;this.modal&&((t=this.closeBtn)==null||t.addEventListener("click",()=>this.close()),window.addEventListener("keydown",e=>{e.key==="Escape"&&!this.modal.classList.contains("hidden")&&this.close()}),this.modal.addEventListener("click",e=>{const n=e.target.closest("[data-next-project]");if(n){const i=n.getAttribute("data-next-project");i&&this.open(i)}}))}open(t){const e=Ic.find(s=>s.id===t);if(!e)return;this.currentProjectId=t,Be.playBlueprintUnfold();const n=e.chapters,i=Ic.find(s=>s.id===n.ch7_next)||Ic[0];this.content.innerHTML=`
      <!-- Header Banner / Breadcrumb -->
      <div class="border-b-2 border-navy pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div class="flex items-center gap-2 mb-2 font-fira text-xs font-bold text-azure uppercase tracking-wider">
            <span>// MANHWA DOSSIER</span>
            <span>•</span>
            <span class="bg-navy text-white px-2 py-0.5 rounded">${e.category}</span>
            <span class="bg-gold text-navy px-2 py-0.5 rounded font-black">${e.badge}</span>
          </div>
          <h2 class="font-anton text-4xl sm:text-6xl text-navy uppercase tracking-tight leading-none">
            ${e.title}
          </h2>
          <p class="font-fira text-sm text-neutral-600 mt-2 font-medium">
            ${e.subtitle}
          </p>
        </div>

        <div class="flex flex-wrap gap-2">
          ${e.liveUrl?`
            <a href="${e.liveUrl}" target="_blank" rel="noopener noreferrer" class="manga-btn px-4 py-2 bg-azure text-white font-fira text-xs font-bold uppercase rounded border-2 border-navy shadow-brutal-sm hover:bg-navy transition">
              <span>🚀 LAUNCH LIVE APP</span>
            </a>
          `:""}
          ${e.repoUrl?`
            <a href="${e.repoUrl}" target="_blank" rel="noopener noreferrer" class="manga-btn px-4 py-2 bg-white text-navy font-fira text-xs font-bold uppercase rounded border-2 border-navy shadow-brutal-sm hover:bg-ice transition">
              <span>📁 INSPECT REPO</span>
            </a>
          `:""}
        </div>
      </div>

      <!-- Verified Metrics Strip -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-ice border-2 border-navy rounded mb-10 font-fira shadow-brutal-sm">
        ${e.metrics.map(s=>`
          <div class="p-2">
            <span class="block text-2xl font-anton text-azure leading-tight">${s.value}</span>
            <span class="text-[10px] font-bold text-navy uppercase tracking-wider">${s.label}</span>
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
            ${n.ch1_idea}
          </p>
        </div>

        <!-- CHAPTER 02: THE CHALLENGE -->
        <div class="manhwa-chapter border-l-4 border-navy pl-6 relative">
          <span class="font-fira text-xs font-black text-navy uppercase tracking-widest block mb-1">
            CHAPTER 02 // THE CHALLENGE
          </span>
          <h3 class="font-anton text-2xl text-navy uppercase mb-3">TECHNICAL & SPATIAL CONSTRAINTS</h3>
          <p class="font-sans text-neutral-700 leading-relaxed text-sm md:text-base">
            ${n.ch2_challenge}
          </p>
        </div>

        <!-- CHAPTER 03: THE BLUEPRINT -->
        <div class="manhwa-chapter border-l-4 border-sky pl-6 relative bg-ice/40 p-6 rounded border border-navy/20">
          <span class="font-fira text-xs font-black text-azure uppercase tracking-widest block mb-1">
            CHAPTER 03 // THE BLUEPRINT
          </span>
          <h3 class="font-anton text-2xl text-navy uppercase mb-3">SYSTEM ARCHITECTURE & SCHEMATICS</h3>
          <p class="font-sans text-neutral-700 leading-relaxed text-sm md:text-base mb-4">
            ${n.ch3_blueprint}
          </p>
          <div class="flex flex-wrap gap-2 font-fira text-xs">
            ${e.tools.map(s=>`<span class="bg-white border border-navy px-2.5 py-1 rounded text-navy font-bold">${s}</span>`).join("")}
          </div>
        </div>

        <!-- CHAPTER 04: THE ENGINEERING -->
        <div class="manhwa-chapter border-l-4 border-gold pl-6 relative">
          <span class="font-fira text-xs font-black text-gold uppercase tracking-widest block mb-1">
            CHAPTER 04 // THE ENGINEERING
          </span>
          <h3 class="font-anton text-2xl text-navy uppercase mb-3">MATHEMATICS, LOGIC & EQUATIONS</h3>
          <p class="font-sans text-neutral-700 leading-relaxed text-sm md:text-base">
            ${n.ch4_engineering}
          </p>
        </div>

        <!-- CHAPTER 05: THE BUILD -->
        <div class="manhwa-chapter border-l-4 border-azure pl-6 relative">
          <span class="font-fira text-xs font-black text-azure uppercase tracking-widest block mb-1">
            CHAPTER 05 // THE BUILD
          </span>
          <h3 class="font-anton text-2xl text-navy uppercase mb-3">DEVELOPMENT & IMPLEMENTATION</h3>
          <p class="font-sans text-neutral-700 leading-relaxed text-sm md:text-base">
            ${n.ch5_build}
          </p>
        </div>

        <!-- CHAPTER 06: THE RESULT -->
        <div class="manhwa-chapter border-l-4 border-green-600 pl-6 relative bg-white p-6 rounded border-2 border-navy shadow-brutal-sm">
          <span class="font-fira text-xs font-black text-green-700 uppercase tracking-widest block mb-1">
            CHAPTER 06 // THE RESULT
          </span>
          <h3 class="font-anton text-2xl text-navy uppercase mb-3">VERIFIED OUTCOMES & IMPACT</h3>
          <p class="font-sans text-neutral-800 leading-relaxed text-sm md:text-base font-medium">
            ${n.ch6_result}
          </p>
        </div>

        <!-- CHAPTER 07: NEXT ADVENTURE -->
        <div class="border-t-2 border-navy pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-cloud p-6 rounded border border-navy">
          <div>
            <span class="font-fira text-xs font-bold text-azure uppercase tracking-wider block">
              CHAPTER 07 // NEXT ADVENTURE
            </span>
            <h4 class="font-anton text-2xl text-navy uppercase">
              ${i.title}
            </h4>
            <span class="font-fira text-xs text-neutral-500">${i.subtitle}</span>
          </div>

          <button data-next-project="${i.id}" class="manga-btn px-6 py-3 bg-navy text-white font-fira text-xs font-bold uppercase rounded border-2 border-navy shadow-brutal hover:bg-azure transition flex items-center gap-2">
            <span>ENTER NEXT CHRONICLE</span>
            <span>→</span>
          </button>
        </div>

      </div>
    `,this.modal.classList.remove("hidden"),document.body.style.overflow="hidden",this.content.scrollTop=0}close(){this.modal.classList.add("hidden"),document.body.style.overflow="",Be.playCaliperClick()}}class a1{constructor(t){this.canvas=t,this.ctx=t.getContext("2d"),this.points=[],this.splatters=[],this.maxPoints=28,this.mouse={x:0,y:0,prevX:0,prevY:0,speed:0},this.active=!0,this.init()}init(){this.resize(),window.addEventListener("resize",()=>this.resize()),window.addEventListener("mousemove",t=>{const e=t.clientX-this.mouse.prevX,n=t.clientY-this.mouse.prevY;this.mouse.speed=Math.sqrt(e*e+n*n),this.mouse.prevX=t.clientX,this.mouse.prevY=t.clientY,this.mouse.x=t.clientX,this.mouse.y=t.clientY,this.active&&(this.points.push({x:t.clientX,y:t.clientY,size:Math.max(2,Math.min(14,this.mouse.speed*.35)),alpha:.65,color:this.mouse.speed>25?"#FF2233":"#173C5B"}),this.points.length>this.maxPoints&&this.points.shift(),this.mouse.speed>35&&Math.random()>.6&&this.spawnSplatter(t.clientX,t.clientY,3))}),window.addEventListener("mousedown",t=>{this.spawnSplatter(t.clientX,t.clientY,16)}),this.animate()}resize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}spawnSplatter(t,e,n=10){for(let i=0;i<n;i++){const s=Math.random()*Math.PI*2,o=Math.random()*8+2;this.splatters.push({x:t,y:e,vx:Math.cos(s)*o,vy:Math.sin(s)*o,radius:Math.random()*4+1.5,alpha:.85,decay:Math.random()*.03+.015,color:Math.random()>.4?"#FF2233":"#173C5B"})}}animate(){if(requestAnimationFrame(this.animate.bind(this)),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.points.length>2)for(let t=1;t<this.points.length-1;t++){const e=this.points[t],n=this.points[t+1],i=(e.x+n.x)/2,s=(e.y+n.y)/2;this.ctx.beginPath(),this.ctx.moveTo(e.x,e.y),this.ctx.quadraticCurveTo(e.x,e.y,i,s),this.ctx.strokeStyle=e.color,this.ctx.globalAlpha=e.alpha,this.ctx.lineWidth=e.size,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.stroke(),e.alpha*=.92,e.size*=.96}this.points=this.points.filter(t=>t.alpha>.05);for(let t=this.splatters.length-1;t>=0;t--){const e=this.splatters[t];if(e.x+=e.vx,e.y+=e.vy,e.vx*=.92,e.vy*=.92,e.alpha-=e.decay,e.alpha<=0){this.splatters.splice(t,1);continue}this.ctx.beginPath(),this.ctx.arc(e.x,e.y,e.radius,0,Math.PI*2),this.ctx.fillStyle=e.color,this.ctx.globalAlpha=e.alpha,this.ctx.fill()}this.ctx.globalAlpha=1}}ml.registerPlugin(Qt);document.addEventListener("DOMContentLoaded",()=>{const r=new o_({duration:1.2,easing:F=>Math.min(1,1.001-Math.pow(2,-10*F)),smoothWheel:!0,wheelMultiplier:.85});r.on("scroll",Qt.update),ml.ticker.add(F=>{r.raf(F*1e3)}),ml.ticker.lagSmoothing(0);const t=document.getElementById("ink-canvas");t&&new a1(t);const e=document.getElementById("blueprint-canvas");let n=null;e&&(n=new n1(e));const i=document.getElementById("hero-stage"),s=document.getElementById("hero-scroll-bar"),o=document.getElementById("hero-chapter-tag"),a=document.querySelectorAll(".narrative-pane");function l(F){s&&(s.style.width=`${Math.round(F*100)}%`);let z=0;F<.18?z=0:F<.36?z=1:F<.55?z=2:F<.75?z=3:F<.9?z=4:z=5;const H=["SCENE 1: THE ARCHITECT'S TOUCH // 創世","SCENE 2: THE CELESTIAL APERTURE // 覚醒","SCENE 3: THE RED MONUMENTAL CORRIDOR // 構築","SCENE 4: THE DRAFTING STUDIO // 工房","SCENE 5: ARTIFACT INSPECTION // 遺物","SCENE 6: INK SHATTER & DEPLOYED REALITY // 突破"];o&&(o.textContent=H[z]),a.forEach((tt,D)=>{tt.classList.toggle("hidden",D!==z)})}i&&n&&Qt.create({trigger:"#hero-stage",start:"top top",end:"+=3400",pin:!0,scrub:1,onUpdate:F=>{n.updateScrollProgress(F.progress),l(F.progress)}});const c=document.getElementById("btn-hero-toggle-exploded"),h=document.getElementById("btn-hero-cycle-mode");c==null||c.addEventListener("click",()=>{if(n){const F=n.toggleExploded();c.innerHTML=F?"<span>🔄 COLLAPSE ASSEMBLY</span>":"<span>💥 EXPLODE ASSEMBLY</span>",q(F?"Exploded Assembly: Precast components separated":"Assembly Restored: Structural joints locked")}}),h==null||h.addEventListener("click",()=>{if(n){const F=n.cycleVisualMode();h.textContent=`MODE: ${F.toUpperCase()} MANGA`,q(`Visual Style: ${F.toUpperCase()} MODE`)}});const f=document.getElementById("shader-gallery-canvas");let u=null;if(f){u=new i1(f),f.addEventListener("mouseenter",()=>{u.setHover(!0),Be.playPencilScratch()}),f.addEventListener("mouseleave",()=>{u.setHover(!1)});const F=document.getElementById("btn-show-arch"),z=document.getElementById("btn-show-manga");F==null||F.addEventListener("click",()=>{u.setTransition(0),F.classList.add("bg-crimson","text-white"),F.classList.remove("bg-ink-slate","text-cloud"),z.classList.add("bg-ink-slate","text-cloud"),z.classList.remove("bg-crimson","text-white"),Be.playBlueprintUnfold(),q("Shader Active: Architectural Perspective")}),z==null||z.addEventListener("click",()=>{u.setTransition(1),z.classList.add("bg-crimson","text-white"),z.classList.remove("bg-ink-slate","text-cloud"),F.classList.add("bg-ink-slate","text-cloud"),F.classList.remove("bg-crimson","text-white"),Be.playStructuralClack(),q("Shader Active: Manga Awakening")})}new r1,document.getElementById("drawing-viewer-root")&&new s1("drawing-viewer-root");const g=document.getElementById("process-stage"),_=document.querySelectorAll(".process-story-step"),p=document.getElementById("process-visual-content"),m=[`<!-- Step 1: Spatial Intuition -->
     <div class="space-y-4 text-center">
       <div class="sfx-impact text-7xl mb-2">直感!</div>
       <div class="font-fira text-xs font-bold text-azure">// FIRST PRINCIPLES DECONSTRUCTION</div>
       <p class="font-sans text-sm text-neutral-300 max-w-md mx-auto">Deconstructing spatial constraints and structural requirements from first principles into core physics logic.</p>
       <div class="w-24 h-1 bg-crimson mx-auto rounded"></div>
     </div>`,`<!-- Step 2: Blueprint Schematic -->
     <div class="space-y-4 text-center">
       <div class="sfx-rumble text-6xl mb-2">下絵!</div>
       <div class="font-fira text-xs font-bold text-sky">// VECTOR COORDINATE DRAFTING</div>
       <p class="font-sans text-sm text-neutral-300 max-w-md mx-auto">Drafting coordinate grids, column axes, and component boundaries with millimeter-exact vector lines.</p>
       <div class="w-24 h-1 bg-azure mx-auto rounded"></div>
     </div>`,`<!-- Step 3: Computational Equations -->
     <div class="space-y-4 text-center">
       <div class="sfx-construction text-6xl mb-2">数式!</div>
       <div class="font-fira text-xs font-bold text-crimson">// STRUCTURAL MATRIX SOLVERS</div>
       <p class="font-sans text-sm text-neutral-300 max-w-md mx-auto">Calculating bending moments, shear transfer, and bearing lengths ($b_{nom} \\ge 90\\text{mm}$) under Eurocode 2 and PCI standards.</p>
       <div class="w-24 h-1 bg-gold mx-auto rounded"></div>
     </div>`,`<!-- Step 4: 3D Precast Assembly -->
     <div class="space-y-4 text-center">
       <div class="sfx-impact text-7xl mb-2">構築!</div>
       <div class="font-fira text-xs font-bold text-azure">// SOLID PRECAST JOINT LOCKING</div>
       <p class="font-sans text-sm text-neutral-300 max-w-md mx-auto">Extruding 2D geometry into 3D precast columns, corbels, and hollow-core slabs inside Autodesk Revit API Transactions.</p>
       <div class="w-24 h-1 bg-crimson mx-auto rounded"></div>
     </div>`,`<!-- Step 5: Deployed Production -->
     <div class="space-y-4 text-center">
       <div class="sfx-impact text-7xl mb-2 text-white">完成!</div>
       <div class="font-fira text-xs font-bold text-green-400">// VERIFIED DEPLOYED REALITY</div>
       <p class="font-sans text-sm text-neutral-300 max-w-md mx-auto">Shipping hardened, accessible, 60 FPS applications that work seamlessly across every device and screen.</p>
       <div class="w-24 h-1 bg-green-400 mx-auto rounded"></div>
     </div>`];g&&Qt.create({trigger:"#process-stage",start:"top top",end:"+=2400",pin:!0,scrub:1,onUpdate:F=>{let z=Math.min(4,Math.floor(F.progress*5));_.forEach((H,tt)=>{H.classList.toggle("bg-crimson",tt===z),H.classList.toggle("text-white",tt===z),H.classList.toggle("bg-ink-slate",tt!==z),H.classList.toggle("text-neutral-400",tt!==z)}),p&&(p.innerHTML=m[z])}});const x=new o1;document.querySelectorAll(".btn-open-case-study").forEach(F=>{F.addEventListener("click",z=>{z.stopPropagation();const H=F.getAttribute("data-project-id");H&&x.open(H)})});const y=document.getElementById("blueprint-cursor");let v=window.innerWidth/2,A=window.innerHeight/2,w=v,E=A;window.addEventListener("mousemove",F=>{v=F.clientX,A=F.clientY});function R(){w+=(v-w)*.25,E+=(A-E)*.25,y&&(y.style.transform=`translate(${w}px, ${E}px)`),requestAnimationFrame(R)}requestAnimationFrame(R),document.querySelectorAll("a, button, input, .manhwa-panel, .comic-shard").forEach(F=>{F.addEventListener("mouseenter",()=>{y==null||y.classList.add("cursor-hover"),Be.playPencilScratch()}),F.addEventListener("mouseleave",()=>{y==null||y.classList.remove("cursor-hover")})});const M=document.getElementById("btn-audio"),S=document.getElementById("audio-icon"),C=document.getElementById("audio-label");M==null||M.addEventListener("click",()=>{const F=Be.toggle();S&&C&&(S.textContent=F?"📐":"🔇",C.textContent=F?"SOUND: ON":"SOUND: OFF"),q(F?"Drafting Audio Enabled":"Audio Muted")});const L=document.getElementById("btn-copy-email"),N=document.getElementById("blueprint-toast");let V=null;function q(F){N&&(N.textContent=F,N.classList.remove("opacity-0","pointer-events-none"),N.classList.add("opacity-100"),clearTimeout(V),V=setTimeout(()=>{N.classList.add("opacity-0","pointer-events-none"),N.classList.remove("opacity-100")},2500))}L==null||L.addEventListener("click",()=>{navigator.clipboard.writeText("dagiyosi5321@gmail.com").then(()=>{Be.playCaliperClick(),q("EMAIL COPIED: dagiyosi5321@gmail.com")})}),console.log(`%cTHE BLUEPRINT UNIVERSE // 3D MANGA ARCHITECT ENGINE ACTIVE
EffectComposer Post-Processing, GSAP ScrollTrigger & Shaders Online`,"color: #FF2233; font-weight: bold; font-size: 14px; background: #09090B; padding: 6px 12px; border: 2px solid #FF2233; border-radius: 4px;")});
