(window.webpackJsonp=window.webpackJsonp||[]).push([[35,36],{104:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(105),c=n(22),i=n(25),l=n(114),s=n(3),u=n(7),d=n(107),p=n(106),f=n(121),m=n(125),h=n(126),y=n(124),b=n(109),v=n(113),g=n(128),O=function(e){return a.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),a.a.createElement("g",{fill:"#7a7a7a"},a.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},j=n(127),k=n(69),E=n.n(k);var w=function e(t,n){return"link"===t.type?Object(p.isSamePath)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))};function N(e){var t,n,o,c=e.item,i=e.onItemClick,l=e.collapsible,p=e.activePath,f=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),m=c.items,h=c.label,y=w(c,p),b=(n=y,o=Object(r.useRef)(n),Object(r.useEffect)((function(){o.current=n}),[n]),o.current),v=Object(r.useState)((function(){return!!l&&(!y&&c.collapsed)})),g=v[0],O=v[1],j=Object(r.useRef)(null),k=Object(r.useState)(void 0),N=k[0],C=k[1],T=function(e){var t;void 0===e&&(e=!0),C(e?(null===(t=j.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(r.useEffect)((function(){y&&!b&&g&&O(!1)}),[y,b,g]);var x=Object(r.useCallback)((function(e){e.preventDefault(),N||T(),setTimeout((function(){return O((function(e){return!e}))}),100)}),[N]);return 0===m.length?null:a.a.createElement("li",{className:Object(d.a)("menu__list-item",{"menu__list-item--collapsed":g}),key:h},a.a.createElement("a",Object(s.a)({className:Object(d.a)("menu__link",(t={"menu__link--sublist":l,"menu__link--active":l&&y},t[E.a.menuLinkText]=!l,t)),onClick:l?x:void 0,href:l?"#!":void 0},f),h),a.a.createElement("ul",{className:"menu__list",ref:j,style:{height:N},onTransitionEnd:function(){g||T(!1)}},m.map((function(e){return a.a.createElement(_,{tabIndex:g?"-1":"0",key:e.label,item:e,onItemClick:i,collapsible:l,activePath:p})}))))}function C(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),c=t.href,i=t.label,l=w(t,r);return a.a.createElement("li",{className:"menu__list-item",key:i},a.a.createElement(b.a,Object(s.a)({className:Object(d.a)("menu__link",{"menu__link--active":l}),to:c},Object(v.a)(c)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},o),i))}function _(e){switch(e.item.type){case"category":return a.a.createElement(N,e);case"link":default:return a.a.createElement(C,e)}}var T=function(e){var t,n,o=e.path,c=e.sidebar,i=e.sidebarCollapsible,l=void 0===i||i,s=e.onCollapse,u=e.isHidden,b=Object(r.useState)(!1),v=b[0],k=b[1],w=Object(p.useThemeConfig)(),N=w.navbar.hideOnScroll,C=w.hideableSidebar,T=Object(f.a)().isAnnouncementBarClosed,x=Object(y.a)().scrollY;Object(m.a)(v);var P=Object(h.a)();return Object(r.useEffect)((function(){P===h.b.desktop&&k(!1)}),[P]),a.a.createElement("div",{className:Object(d.a)(E.a.sidebar,(t={},t[E.a.sidebarWithHideableNavbar]=N,t[E.a.sidebarHidden]=u,t))},N&&a.a.createElement(g.a,{tabIndex:-1,className:E.a.sidebarLogo}),a.a.createElement("div",{className:Object(d.a)("menu","menu--responsive","thin-scrollbar",E.a.menu,(n={"menu--show":v},n[E.a.menuWithAnnouncementBar]=!T&&0===x,n))},a.a.createElement("button",{"aria-label":v?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){k(!v)}},v?a.a.createElement("span",{className:Object(d.a)(E.a.sidebarMenuIcon,E.a.sidebarMenuCloseIcon)},"\xd7"):a.a.createElement(j.a,{className:E.a.sidebarMenuIcon,height:24,width:24})),a.a.createElement("ul",{className:"menu__list"},c.map((function(e){return a.a.createElement(_,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),k(!1)},collapsible:l,activePath:o})})))),C&&a.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(d.a)("button button--secondary button--outline",E.a.collapseSidebarButton),onClick:s},a.a.createElement(O,{className:E.a.collapseSidebarButtonIcon})))},x=n(145),P=n.n(x),S=n(116),I=n(111),L=n(74),D=n.n(L);function M(e){var t,n,i,s,u=e.currentDocRoute,f=e.versionMetadata,m=e.children,h=Object(c.default)(),y=h.siteConfig,b=h.isClient,v=f.pluginId,g=f.permalinkToSidebar,j=f.docsSidebars,k=f.version,E=g[u.path],w=j[E],N=Object(r.useState)(!1),C=N[0],_=N[1],x=Object(r.useState)(!1),S=x[0],I=x[1],L=Object(r.useCallback)((function(){S&&I(!1),_(!C)}),[S]);return a.a.createElement(l.a,{key:b,searchMetadatas:{version:k,tag:Object(p.docVersionSearchTag)(v,k)}},a.a.createElement("div",{className:D.a.docPage},w&&a.a.createElement("div",{className:Object(d.a)(D.a.docSidebarContainer,(t={},t[D.a.docSidebarContainerHidden]=C,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(D.a.docSidebarContainer)&&C&&I(!0)},role:"complementary"},a.a.createElement(T,{key:E,sidebar:w,path:u.path,sidebarCollapsible:null===(n=null===(i=y.themeConfig)||void 0===i?void 0:i.sidebarCollapsible)||void 0===n||n,onCollapse:L,isHidden:S}),S&&a.a.createElement("div",{className:D.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:L,onClick:L},a.a.createElement(O,null))),a.a.createElement("main",{className:D.a.docMainContainer},a.a.createElement("div",{className:Object(d.a)("container padding-vert--lg",D.a.docItemWrapper,(s={},s[D.a.docItemWrapperEnhanced]=C,s))},a.a.createElement(o.a,{components:P.a},m)))))}t.default=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,o=t.find((function(e){return Object(I.matchPath)(r.pathname,e)}));return o?a.a.createElement(M,{currentDocRoute:o,versionMetadata:n},Object(i.a)(t)):a.a.createElement(S.default,e)}},105:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},116:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(114);t.default=function(){return a.a.createElement(o.a,{title:"Page Not Found"},a.a.createElement("main",{className:"container margin-vert--xl"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col col--6 col--offset-3"},a.a.createElement("h1",{className:"hero__title"},"Page Not Found"),a.a.createElement("p",null,"We could not find what you were looking for."),a.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},145:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(152)),o=n(148),c=Object.assign(Object.assign({},a.default),{FbInternalOnly:o.FbInternalOnly,FBInternalOnly:o.FbInternalOnly,OssOnly:o.OssOnly,OSSOnly:o.OssOnly});t.default=c},146:function(e,t,n){"use strict";const r=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(i){}return n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus(),c};e.exports=r,e.exports.default=r},147:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},148:function(e,t,n){"use strict";(function(e){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.bloks=void 0,t.bloks=o(n(150));const c=["internal","external"];let i;try{i=n(119).usePluginData}catch(p){i=null}function l(e){return u(e),d()?"internal"in e?s(e.internal):[]:"external"in e?s(e.external):[]}function s(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${c}. Instead got ${e}`);if(!Object.keys(e).find((e=>c.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${c}`);const t=Object.keys(e).filter((e=>!c.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${c}`)}function d(){return e.env.FB_INTERNAL||i&&i("internaldocs-fb").FB_INTERNAL}t.fbContent=l,t.fbInternalOnly=function(e){return l({internal:e})},t.validateFbContentArgs=u,t.isInternal=d,t.FbInternalOnly=function(e){return d()?e.children:null},t.OssOnly=function(e){return d()?null:e.children}}).call(this,n(149))},149:function(e,t){var n,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(e){r=c}}();var l,s=[],u=!1,d=-1;function p(){u&&l&&(u=!1,l.length?s=l.concat(s):d=-1,s.length&&f())}function f(){if(!u){var e=i(p);u=!0;for(var t=s.length;t;){for(l=s,s=[];++d<t;)l&&l[d].run();d=-1,t=s.length}l=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||u||i(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},150:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function c(e){try{l(r.next(e))}catch(t){o(t)}}function i(e){try{l(r.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}l((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const a=n(151);t.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield a.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},151:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function c(e){try{l(r.next(e))}catch(t){o(t)}}function i(e){try{l(r.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}l((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let a=!1,o=0;const c={};t.call=function(e){return r(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in c||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?c[t].resolve(e.data.response):c[t].reject(new Error(e.data.error)),delete c[t]})));const t=o++,n=new Promise(((e,n)=>{c[t]={resolve:e,reject:n}})),r={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},i="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(r,i),n}))}},152:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(0),o=n.n(a),c=n(109),i=n(107),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s={Prism:n(23).a,theme:l};function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,f=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=d({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=d({},n,{backgroundColor:null}),a};function y(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var b=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),u(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=d({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==a&&(o.style=void 0!==o.style?d({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),u(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var c=r?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(i))}})),u(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,c=d({},y(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(c.style=void 0!==c.style?d({},c.style,a):a),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,c=0,i=[],l=[i];c>-1;){for(;(o=r[c]++)<a[c];){var s=void 0,u=t[c],d=n[c][o];if("string"==typeof d?(u=c>0?u:["plain"],s=d):(u=m(u,d.type),d.alias&&(u=m(u,d.alias)),s=d.content),"string"==typeof s){var h=s.split(p),y=h.length;i.push({types:u,content:h[0]});for(var b=1;b<y;b++)f(i),l.push(i=[]),i.push({types:u,content:h[b]})}else c++,t.push(u),n.push(s),r.push(0),a.push(s.length)}c--,t.pop(),n.pop(),r.pop(),a.pop()}return f(i),l}(void 0!==c?t.tokenize(r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),v=n(146),g=n.n(v),O=n(147),j=n.n(O),k={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},E=n(115),w=n(106),N=function(){var e=Object(w.useThemeConfig)().prism,t=Object(E.a)().isDarkTheme,n=e.theme||k,r=e.darkTheme||n;return t?r:n},C=n(70),_=n.n(C),T=/{([\d,-]+)}/,x=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")},P=/(?:title=")(.*)(?:")/,S=function(e){var t=e.children,n=e.className,c=e.metastring,l=Object(w.useThemeConfig)().prism,u=Object(a.useState)(!1),d=u[0],p=u[1],f=Object(a.useState)(!1),m=f[0],h=f[1];Object(a.useEffect)((function(){h(!0)}),[]);var y=Object(a.useRef)(null),v=[],O="",k=N(),E=Array.isArray(t)?t.join(""):t;if(c&&T.test(c)){var C=c.match(T)[1];v=j()(C).filter((function(e){return e>0}))}c&&P.test(c)&&(O=c.match(P)[1]);var S=n&&n.replace(/language-/,"");!S&&l.defaultLanguage&&(S=l.defaultLanguage);var I=E.replace(/\n$/,"");if(0===v.length&&void 0!==S){for(var L,D="",M=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return x(["js","jsBlock"]);case"jsx":case"tsx":return x(["js","jsBlock","jsx"]);case"html":return x(["js","jsBlock","html"]);case"python":case"py":return x(["python"]);default:return x()}}(S),B=E.replace(/\n$/,"").split("\n"),A=0;A<B.length;){var F=A+1,R=B[A].match(M);if(null!==R){switch(R.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":D+=F+",";break;case"highlight-start":L=F;break;case"highlight-end":D+=L+"-"+(F-1)+","}B.splice(A,1)}else A+=1}v=j()(D),I=B.join("\n")}var $=function(){g()(I),p(!0),setTimeout((function(){return p(!1)}),2e3)};return o.a.createElement(b,Object(r.a)({},s,{key:String(m),theme:k,code:I,language:S}),(function(e){var t,n=e.className,a=e.style,c=e.tokens,l=e.getLineProps,s=e.getTokenProps;return o.a.createElement(o.a.Fragment,null,O&&o.a.createElement("div",{style:a,className:_.a.codeBlockTitle},O),o.a.createElement("div",{className:_.a.codeBlockContent},o.a.createElement("div",{tabIndex:0,className:Object(i.a)(n,_.a.codeBlock,"thin-scrollbar",(t={},t[_.a.codeBlockWithTitle]=O,t))},o.a.createElement("div",{className:_.a.codeBlockLines,style:a},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return v.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(r.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(r.a)({key:t},s({token:e,key:t})))})))})))),o.a.createElement("button",{ref:y,type:"button","aria-label":"Copy code to clipboard",className:Object(i.a)(_.a.copyButton),onClick:$},d?"Copied":"Copy")))}))},I=n(7),L=(n(71),n(72)),D=n.n(L),M=function(e){return function(t){var n,r=t.id,a=Object(I.a)(t,["id"]),c=Object(w.useThemeConfig)().navbar.hideOnScroll;return r?o.a.createElement(e,a,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(i.a)("anchor",(n={},n[D.a.enhancedAnchor]=!c,n)),id:r}),a.children,o.a.createElement("a",{className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#")):o.a.createElement(e,a)}},B=n(73),A=n.n(B),F={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?o.a.createElement(S,e):o.a.createElement("code",e):t},a:function(e){return o.a.createElement(c.a,e)},pre:function(e){return o.a.createElement("div",Object(r.a)({className:A.a.mdxCodeBlock},e))},h1:M("h1"),h2:M("h2"),h3:M("h3"),h4:M("h4"),h5:M("h5"),h6:M("h6")};t.default=F}}]);