(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(10),o=(n(0),n(174)),a={id:"compiler",title:"compiler/"},c={id:"contributing/todos/compiler",isDocsHomePage:!1,title:"compiler/",description:"Improvements to the present codebase / tech debt",source:"@site/docs/contributing/todos/compiler.md",permalink:"/antlir/docs/contributing/todos/compiler",editUrl:"https://github.com/facebookincubator/antlir/edit/master/website/docs/contributing/todos/compiler.md",sidebar:"docs",previous:{title:"btrfs_diff/",permalink:"/antlir/docs/contributing/todos/btrfs_diff"},next:{title:"Vision: Containers as Build Artifacts",permalink:"/antlir/docs/appendix/vision-containers-as-build-artifacts"}},s=[{value:"Improvements to the present codebase / tech debt",id:"improvements-to-the-present-codebase--tech-debt",children:[]},{value:"Ideas for the future",id:"ideas-for-the-future",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"improvements-to-the-present-codebase--tech-debt"},"Improvements to the present codebase / tech debt"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"image_layer")," should document a manual test of some build errors, or\nbetter yet, there should be a Python script that attempts to ",Object(o.b)("inlineCode",{parentName:"p"},"buck build"),"\nsome known-broken TARGETS files.  When you do this, please don't break\nbuilding ",Object(o.b)("inlineCode",{parentName:"p"},"antlir/..."),"!")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'In the compiler language, consider requiring all paths to start with "/"\nto clarify that they are image-absolute.  At present, the leading "/" is\nimplicit.'))),Object(o.b)("h2",{id:"ideas-for-the-future"},"Ideas for the future"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Support 'image_aspect', which is an aspect of the filesystem that is\nspecified across many features (add this user, enable this ",Object(o.b)("inlineCode",{parentName:"p"},"systemd"),"\nservice, etc), but is added as a single layer on top to inject things like\n",Object(o.b)("inlineCode",{parentName:"p"},"/etc/passwd")," without creating filesystem conflicts.  Upside: we get to\nuse ",Object(o.b)("inlineCode",{parentName:"p"},"useradd")," and ",Object(o.b)("inlineCode",{parentName:"p"},"systemctl")," etc to manipulate the filesystem."),Object(o.b)("p",{parentName:"li"},"This is roughly like ",Object(o.b)("inlineCode",{parentName:"p"},"image_foreign_layer")," for adding externally managed\nphased compiler items."),Object(o.b)("p",{parentName:"li"},"It's probably a good idea because it would e.g. let us significantly\nreduce (or eliminate?) the coupling between the core and RPM support."))))}p.isMDXComponent=!0},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||o;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);