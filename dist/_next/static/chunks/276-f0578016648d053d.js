(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[276],{3991:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return u},ACTION_PREFETCH:function(){return a},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return c}});let o="refresh",i="navigate",l="restore",u="server-patch",a="prefetch",s="fast-refresh",c="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8872:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return m}});let n=r(8754),o=r(1757),i=o._(r(7294)),l=n._(r(2636)),u=r(5471),a=r(3735),s=r(3341);r(4210);let c=n._(r(7746)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/dist/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function d(e,t,r,n,o,i){let l=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===l)return;e["data-loaded-src"]=l;let u="decode"in e?e.decode():Promise.resolve();u.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function p(e){let[t,r]=i.version.split("."),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:l,width:u,decoding:a,className:s,style:c,fetchPriority:f,placeholder:g,loading:m,unoptimized:h,fill:v,onLoadRef:b,onLoadingCompleteRef:y,setBlurComplete:_,setShowAltText:w,onLoad:O,onError:E,...C}=e;return i.default.createElement("img",{...C,...p(f),loading:m,width:u,height:l,decoding:a,"data-nimg":v?"fill":"1",className:s,style:c,sizes:o,srcSet:n,src:r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&d(e,g,b,y,_,h))},[r,g,b,y,_,E,h,t]),onLoad:e=>{let t=e.currentTarget;d(t,g,b,y,_,h)},onError:e=>{w(!0),"blur"===g&&_(!0),E&&E(e)}})}),m=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(s.ImageConfigContext),n=(0,i.useMemo)(()=>{let e=f||r||a.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:o,onLoadingComplete:d}=e,m=(0,i.useRef)(o);(0,i.useEffect)(()=>{m.current=o},[o]);let h=(0,i.useRef)(d);(0,i.useEffect)(()=>{h.current=d},[d]);let[v,b]=(0,i.useState)(!1),[y,_]=(0,i.useState)(!1),{props:w,meta:O}=(0,u.getImgProps)(e,{defaultLoader:c.default,imgConf:n,blurComplete:v,showAltText:y});return i.default.createElement(i.default.Fragment,null,i.default.createElement(g,{...w,unoptimized:O.unoptimized,placeholder:O.placeholder,fill:O.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:b,setShowAltText:_,ref:t}),O.priority?i.default.createElement(l.default,null,i.default.createElement("link",{key:"__nimg-"+w.src+w.srcSet+w.sizes,rel:"preload",as:"image",href:w.srcSet?void 0:w.src,imageSrcSet:w.srcSet,imageSizes:w.sizes,crossOrigin:w.crossOrigin,referrerPolicy:w.referrerPolicy,...p(w.fetchPriority)})):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let n=r(8754),o=n._(r(7294)),i=r(4532),l=r(3353),u=r(1410),a=r(9064),s=r(370),c=r(9955),f=r(4224),d=r(508),p=r(1516),g=r(4266),m=r(3991),h=new Set;function v(e,t,r,n,o,i){if(!i&&!(0,l.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+o;if(h.has(i))return;h.add(i)}let u=i?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(u).catch(e=>{})}function b(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let y=o.default.forwardRef(function(e,t){let r,n;let{href:u,as:h,children:y,prefetch:_=null,passHref:w,replace:O,shallow:E,scroll:C,locale:P,onClick:j,onMouseEnter:S,onTouchStart:x,legacyBehavior:I=!1,...M}=e;r=y,I&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let R=o.default.useContext(c.RouterContext),k=o.default.useContext(f.AppRouterContext),z=null!=R?R:k,A=!R,T=!1!==_,N=null===_?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:L,as:F}=o.default.useMemo(()=>{if(!R){let e=b(u);return{href:e,as:h?b(h):e}}let[e,t]=(0,i.resolveHref)(R,u,!0);return{href:e,as:h?(0,i.resolveHref)(R,h):t||e}},[R,u,h]),U=o.default.useRef(L),D=o.default.useRef(F);I&&(n=o.default.Children.only(r));let W=I?n&&"object"==typeof n&&n.ref:t,[B,H,K]=(0,d.useIntersection)({rootMargin:"200px"}),V=o.default.useCallback(e=>{(D.current!==F||U.current!==L)&&(K(),D.current=F,U.current=L),B(e),W&&("function"==typeof W?W(e):"object"==typeof W&&(W.current=e))},[F,W,L,K,B]);o.default.useEffect(()=>{z&&H&&T&&v(z,L,F,{locale:P},{kind:N},A)},[F,L,H,P,T,null==R?void 0:R.locale,z,A,N]);let G={ref:V,onClick(e){I||"function"!=typeof j||j(e),I&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),z&&!e.defaultPrevented&&function(e,t,r,n,i,u,a,s,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(r)))return;e.preventDefault();let g=()=>{"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:u,locale:s,scroll:a}):t[i?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};c?o.default.startTransition(g):g()}(e,z,L,F,O,E,C,P,A,T)},onMouseEnter(e){I||"function"!=typeof S||S(e),I&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),z&&(T||!A)&&v(z,L,F,{locale:P,priority:!0,bypassPrefetchedCheck:!0},{kind:N},A)},onTouchStart(e){I||"function"!=typeof x||x(e),I&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),z&&(T||!A)&&v(z,L,F,{locale:P,priority:!0,bypassPrefetchedCheck:!0},{kind:N},A)}};if((0,a.isAbsoluteUrl)(F))G.href=F;else if(!I||w||"a"===n.type&&!("href"in n.props)){let e=void 0!==P?P:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&(0,p.getDomainLocale)(F,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);G.href=t||(0,g.addBasePath)((0,s.addLocale)(F,e,null==R?void 0:R.defaultLocale))}return I?o.default.cloneElement(n,G):o.default.createElement("a",{...M,...G},r)}),_=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let n=r(7294),o=r(29),i="function"==typeof IntersectionObserver,l=new Map,u=[];function a(e){let{rootRef:t,rootMargin:r,disabled:a}=e,s=a||!i,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(i){if(s||c)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:o},u.push(r),l.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(n);let e=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,c,d.current]);let g=(0,n.useCallback)(()=>{f(!1)},[]);return[p,c,g]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5471:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(4210);let n=r(7757),o=r(3735),i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/dist/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function l(e){return void 0!==e.default}function u(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,s,c,{src:f,sizes:d,unoptimized:p=!1,priority:g=!1,loading:m,className:h,quality:v,width:b,height:y,fill:_=!1,style:w,onLoad:O,onLoadingComplete:E,placeholder:C="empty",blurDataURL:P,fetchPriority:j,layout:S,objectFit:x,objectPosition:I,lazyBoundary:M,lazyRoot:R,...k}=e,{imgConf:z,showAltText:A,blurComplete:T,defaultLoader:N}=t,L=z||i||o.imageConfigDefault;if("allSizes"in L)a=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t);a={...L,allSizes:e,deviceSizes:t}}let F=k.loader||N;delete k.loader,delete k.srcSet;let U="__next_img_default"in F;if(U){if("custom"===a.loader)throw Error('Image with src "'+f+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...n}=t;return e(n)}}if(S){"fill"===S&&(_=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[S];t&&!d&&(d=t)}let D="",W=u(b),B=u(y);if("object"==typeof(r=f)&&(l(r)||void 0!==r.src)){let e=l(f)?f.default:f;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,c=e.blurHeight,P=P||e.blurDataURL,D=e.src,!_){if(W||B){if(W&&!B){let t=W/e.width;B=Math.round(e.height*t)}else if(!W&&B){let t=B/e.height;W=Math.round(e.width*t)}}else W=e.width,B=e.height}}let H=!g&&("lazy"===m||void 0===m);(!(f="string"==typeof f?f:D)||f.startsWith("data:")||f.startsWith("blob:"))&&(p=!0,H=!1),a.unoptimized&&(p=!0),U&&f.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(p=!0),g&&(j="high");let K=u(v),V=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:x,objectPosition:I}:{},A?{}:{color:"transparent"},w),G="blur"===C&&P&&!T?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:W,heightInt:B,blurWidth:s,blurHeight:c,blurDataURL:P,objectFit:V.objectFit})+'")'}:{},q=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:l,loader:u}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let i=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:i,kind:"x"}}(t,o,l),c=a.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:a.map((e,n)=>u({config:t,src:r,quality:i,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:u({config:t,src:r,quality:i,width:a[c]})}}({config:a,src:f,unoptimized:p,width:W,quality:K,sizes:d,loader:F}),Y={...k,loading:H?"lazy":m,fetchPriority:j,width:W,height:B,decoding:"async",className:h,style:{...V,...G},sizes:q.sizes,srcSet:q.srcSet,src:q.src},J={unoptimized:p,priority:g,placeholder:C,fill:_};return{props:Y,meta:J}}},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:l}=e,u=n||t,a=o||r,s=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return u&&a?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+u+" "+a+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(n&&o?"1":"20")+"'/%3E"+s+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+i+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2555:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},unstable_getImgProps:function(){return a}});let n=r(8754),o=r(5471),i=r(4210),l=r(8872),u=n._(r(7746)),a=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:u.default});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},s=l.Image},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},9008:function(e,t,r){e.exports=r(2636)},5675:function(e,t,r){e.exports=r(2555)},1664:function(e,t,r){e.exports=r(5569)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return a}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function a(e){return function(t){return n.createElement(s,l({attr:l({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,l({key:r},t.attr),e(t.child))})}(e.child))}}function s(e){var t=function(t){var r,o=e.attr,i=e.size,a=e.title,s=u(e,["attr","size","title"]),c=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),e.children)};return void 0!==i?n.createElement(i.Consumer,null,function(e){return t(e)}):t(o)}}}]);