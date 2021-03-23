(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||s[d]||i;return n?a.a.createElement(m,l(l({ref:t},u),{},{components:n})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(106)),o={id:"getting_started",title:"Getting Started"},l={unversionedId:"getting_started",id:"getting_started",isDocsHomePage:!1,title:"Getting Started",description:"If you do not know what Antlir is, start with Overview.",source:"@site/docs/getting_started.md",slug:"/getting_started",permalink:"/antlir/docs/getting_started",editUrl:"https://github.com/facebookincubator/antlir/edit/master/website/docs/getting_started.md",version:"current",sidebar:"docs",previous:{title:"Overview",permalink:"/antlir/docs/"},next:{title:"FAQ",permalink:"/antlir/docs/faq"}},c=[],u={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If you do not know what Antlir is, start with ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../docs/"}),"Overview"),"."),Object(i.b)("p",null,"Outside of FB, proceed to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/antlir/docs/installing"}),"Installation"),".  This section\nassumes that you have a working Antlir in your repo. To check, run\n",Object(i.b)("inlineCode",{parentName:"p"},"buck test //antlir/rpm:test-yum-dnf-from-snapshot-shadowed"),"."),Object(i.b)("p",null,"Before you read further, review the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://buck.build/about/overview.html"}),"Buck key concepts\n")," one-pager, and get familiar with\nthe following parts of Buck's \u201cConcepts\u201d section:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://buck.build/concept/build_rule.html"}),"Build Rule")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://buck.build/concept/build_file.html"}),"Build File")," \u2014 for\nforward-compatibility, write these in Starlark (formerly Skylark);\neither use ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/bazelbuild/buildtools"}),"Buildifier")," to\nensure that your code is compatible, or set the Buck config\n",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://buck.build/concept/skylark.html"}),Object(i.b)("inlineCode",{parentName:"a"},"parser.default_build_file_syntax = SKYLARK"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://buck.build/concept/build_target.html"}),"Build Target")," and\n",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://buck.build/concept/build_target_pattern.html"}),"Build Target Pattern"))),Object(i.b)("p",null,"A common Antlir workflow is:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Define layer, test, and package targets in a build file (",Object(i.b)("inlineCode",{parentName:"li"},"BUCK")," in\nopen-source, ",Object(i.b)("inlineCode",{parentName:"li"},"TARGETS")," at FB)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"buck run :YOUR-LAYER-container")," \u2014 build your image and launch a shell\ninside for manual inspection."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"buck test :YOUR-TEST")," \u2014 run a test inside your layer, or to get a debug\nshell: `buck run :YOUR-TEST--test-lay."),Object(i.b)("li",{parentName:"ul"},"Finally, ",Object(i.b)("inlineCode",{parentName:"li"},"buck build :YOUR-PACKAGE")," (either directly or by ",Object(i.b)("inlineCode",{parentName:"li"},"buck run"),"ning\na publisher target ",Object(i.b)("strong",{parentName:"li"},"TODO link"),"), and deploy it.")),Object(i.b)("p",null,"To get started with building images, you may want to study the pages under\nConcepts & Designs, or take the plunge and try the tutorial on ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"tutorials/defining-an-image"}),"Defining an\nImage"),".  In both cases, you will want to refer\nto the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"api/image"}),"Image API")," as you go."))}b.isMDXComponent=!0}}]);